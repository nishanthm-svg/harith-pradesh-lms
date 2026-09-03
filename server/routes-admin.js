const crypto = require("crypto");
const auth = require("./auth");
const { computeRollup, getUserProgress } = require("./routes-progress");
const { MODULES } = require("./module-meta");

function employeeSummary(user) {
  const rollup = computeRollup(user.id);
  return {
    id: user.id,
    loginId: user.loginId,
    displayName: user.displayName,
    active: user.active,
    createdAt: user.createdAt,
    ...rollup,
  };
}

function handleListEmployees(req, res, _body, query) {
  const employees = auth.usersStore
    .get()
    .users.filter((u) => u.role === "employee")
    .filter((u) => {
      if (!query.search) return true;
      const q = query.search.toLowerCase();
      return u.loginId.toLowerCase().includes(q) || u.displayName.toLowerCase().includes(q);
    })
    .map(employeeSummary);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ employees }));
}

function handleGetEmployee(req, res, _body, _query, params) {
  const user = auth.findUserById(params.id);
  if (!user || user.role !== "employee") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Employee not found" }));
    return;
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      employee: employeeSummary(user),
      progress: getUserProgress(user.id),
    })
  );
}

function makeLoginIdSafe(base) {
  return String(base)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "");
}

function handleCreateEmployee(req, res, body) {
  const adminUser = auth.requireAdmin(req);
  const { loginId, displayName, tempPassword } = body || {};
  if (!loginId || !displayName || !tempPassword) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "loginId, displayName and tempPassword are required" }));
    return;
  }
  const safeLoginId = makeLoginIdSafe(loginId);
  if (!safeLoginId) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "loginId must contain letters, numbers, dots, dashes or underscores" }));
    return;
  }
  if (auth.findUserByLoginId(safeLoginId)) {
    res.writeHead(409, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "That login ID is already taken" }));
    return;
  }
  if (tempPassword.length < 6) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Temporary password must be at least 6 characters" }));
    return;
  }
  const user = {
    id: "u_" + crypto.randomBytes(6).toString("hex"),
    loginId: safeLoginId,
    displayName: String(displayName).trim(),
    role: "employee",
    passwordHash: auth.hashPassword(tempPassword),
    active: true,
    createdAt: new Date().toISOString(),
    createdBy: adminUser.id,
    mustChangePassword: true,
  };
  auth.usersStore.get().users.push(user);
  auth.usersStore.save();
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ employee: { id: user.id, loginId: user.loginId, displayName: user.displayName } }));
}

function handleResetPassword(req, res, body, _query, params) {
  const user = auth.findUserById(params.id);
  if (!user || user.role !== "employee") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Employee not found" }));
    return;
  }
  const { tempPassword } = body || {};
  if (!tempPassword || tempPassword.length < 6) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Temporary password must be at least 6 characters" }));
    return;
  }
  user.passwordHash = auth.hashPassword(tempPassword);
  user.mustChangePassword = true;
  auth.usersStore.save();
  auth.deleteSessionsForUser(user.id); // force re-login with the new password
  res.writeHead(204);
  res.end();
}

function handleDeactivate(req, res, _body, _query, params) {
  const user = auth.findUserById(params.id);
  if (!user || user.role !== "employee") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Employee not found" }));
    return;
  }
  user.active = !user.active; // toggle: deactivate or reactivate
  auth.usersStore.save();
  if (!user.active) auth.deleteSessionsForUser(user.id);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ active: user.active }));
}

function csvEscape(val) {
  const s = String(val == null ? "" : val);
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

function handleExportCsv(req, res) {
  const employees = auth.usersStore.get().users.filter((u) => u.role === "employee");
  const rows = [["Login ID", "Display Name", "Active", "Module", "Lessons Completed", "Total Lessons", "Best Avg Score %", "Last Activity"]];
  employees.forEach((u) => {
    const progress = getUserProgress(u.id);
    MODULES.filter((m) => m.available).forEach((mod) => {
      const lessonStates = mod.lessons.map((lid) => (progress[mod.id] && progress[mod.id][lid]) || null);
      const completed = lessonStates.filter((s) => s && s.completed).length;
      const scored = lessonStates.filter((s) => s && s.attempts > 0);
      const avgScore = scored.length ? Math.round(scored.reduce((sum, s) => sum + s.bestScore, 0) / scored.length) : "";
      const lastActivity = lessonStates.reduce((latest, s) => {
        if (s && s.lastAttemptAt && (!latest || s.lastAttemptAt > latest)) return s.lastAttemptAt;
        return latest;
      }, null);
      rows.push([u.loginId, u.displayName, u.active ? "yes" : "no", mod.id, completed, mod.lessons.length, avgScore, lastActivity || ""]);
    });
  });
  const csv = rows.map((r) => r.map(csvEscape).join(",")).join("\r\n");
  res.writeHead(200, {
    "Content-Type": "text/csv; charset=utf-8",
    "Content-Disposition": 'attachment; filename="harith-pradesh-lms-progress.csv"',
  });
  res.end(csv);
}

module.exports = {
  handleListEmployees,
  handleGetEmployee,
  handleCreateEmployee,
  handleResetPassword,
  handleDeactivate,
  handleExportCsv,
};
