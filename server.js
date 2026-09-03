// ============================================================================
// Harith Pradesh LMS — server entry point.
// Plain node:http, no framework: routes /api/* to handlers below, serves
// everything else as a static file from public/. Zero npm dependencies.
// ============================================================================
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const auth = require("./server/auth");
const seed = require("./server/seed");
const authRoutes = require("./server/routes-auth");
const progressRoutes = require("./server/routes-progress");
const adminRoutes = require("./server/routes-admin");

const PORT = process.env.PORT || 5310;
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 2 * 1024 * 1024) {
        reject(new Error("Request body too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (chunks.length === 0) return resolve({});
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch (e) {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, obj) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(obj));
}

function serveStatic(req, res, pathname) {
  let rel = pathname === "/" ? "/index.html" : pathname;
  rel = rel.replace(/\.\.+/g, ""); // no path traversal
  const filePath = path.join(PUBLIC_DIR, rel);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA fallback: unknown non-file routes (hash routing lives client-side)
      // still need index.html, e.g. a hard refresh on /#/dashboard.
      fs.readFile(path.join(PUBLIC_DIR, "index.html"), (err2, indexData) => {
        if (err2) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": MIME[".html"], "Cache-Control": "no-store" });
        res.end(indexData);
      });
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(data);
  });
}

// Routes matching a leading-colon path segment as a param, e.g. /api/admin/employees/:id
const API_ROUTES = [
  { method: "POST", pattern: "/api/login", handler: (req, res, body) => authRoutes.handleLogin(req, res, body) },
  { method: "POST", pattern: "/api/logout", handler: (req, res) => authRoutes.handleLogout(req, res) },
  { method: "GET", pattern: "/api/session", handler: (req, res) => authRoutes.handleSession(req, res) },
  { method: "POST", pattern: "/api/change-password", handler: (req, res, body) => authRoutes.handleChangePassword(req, res, body) },

  { method: "GET", pattern: "/api/my-progress", handler: (req, res) => progressRoutes.handleMyProgress(req, res) },
  { method: "POST", pattern: "/api/quiz-attempt", handler: (req, res, body) => progressRoutes.handleQuizAttempt(req, res, body) },

  {
    method: "GET",
    pattern: "/api/admin/employees",
    admin: true,
    handler: (req, res, body, query) => adminRoutes.handleListEmployees(req, res, body, query),
  },
  {
    method: "GET",
    pattern: "/api/admin/employees/:id",
    admin: true,
    handler: (req, res, body, query, params) => adminRoutes.handleGetEmployee(req, res, body, query, params),
  },
  {
    method: "POST",
    pattern: "/api/admin/employees",
    admin: true,
    handler: (req, res, body) => adminRoutes.handleCreateEmployee(req, res, body),
  },
  {
    method: "POST",
    pattern: "/api/admin/employees/:id/reset-password",
    admin: true,
    handler: (req, res, body, query, params) => adminRoutes.handleResetPassword(req, res, body, query, params),
  },
  {
    method: "POST",
    pattern: "/api/admin/employees/:id/deactivate",
    admin: true,
    handler: (req, res, body, query, params) => adminRoutes.handleDeactivate(req, res, body, query, params),
  },
  {
    method: "GET",
    pattern: "/api/admin/export.csv",
    admin: true,
    handler: (req, res) => adminRoutes.handleExportCsv(req, res),
  },
];

function matchRoute(method, pathname) {
  for (const route of API_ROUTES) {
    if (route.method !== method) continue;
    const patternParts = route.pattern.split("/").filter(Boolean);
    const pathParts = pathname.split("/").filter(Boolean);
    if (patternParts.length !== pathParts.length) continue;
    const params = {};
    let ok = true;
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(":")) {
        params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
      } else if (patternParts[i] !== pathParts[i]) {
        ok = false;
        break;
      }
    }
    if (ok) return { route, params };
  }
  return null;
}

async function handleApi(req, res, pathname, query) {
  const match = matchRoute(req.method, pathname);
  if (!match) {
    sendJson(res, 404, { error: "Unknown API route" });
    return;
  }
  const { route, params } = match;

  if (route.admin) {
    const adminUser = auth.requireAdmin(req);
    if (!adminUser) {
      sendJson(res, 403, { error: "Admin access required" });
      return;
    }
  }

  let body = {};
  if (req.method === "POST" || req.method === "PUT") {
    try {
      body = await readJsonBody(req);
    } catch (e) {
      sendJson(res, 400, { error: e.message });
      return;
    }
  }

  try {
    route.handler(req, res, body, query, params);
  } catch (e) {
    console.error("Handler error for", req.method, pathname, ":", e);
    if (!res.headersSent) sendJson(res, 500, { error: "Internal server error" });
  }
}

seed.seedIfEmpty();

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const pathname = url.pathname;
  const query = Object.fromEntries(url.searchParams.entries());

  if (pathname.startsWith("/api/")) {
    handleApi(req, res, pathname, query);
    return;
  }
  serveStatic(req, res, pathname);
});

server.listen(PORT, () => {
  console.log(`Harith Pradesh LMS server on http://localhost:${PORT}`);
});
