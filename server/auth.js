// ============================================================================
// Auth: password hashing (scrypt), opaque session tokens, cookie helpers.
// Zero external dependencies — everything here is node:crypto.
// ============================================================================
const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");
const { createStore } = require("./store");

const SCRYPT_PARAMS = { N: 16384, r: 8, p: 1, keylen: 64 };
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const COOKIE_NAME = "hp_session";

const usersStore = createStore("users", { users: [] });
const sessionsStore = createStore("sessions", { sessions: [] });

function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, SCRYPT_PARAMS.keylen, {
    N: SCRYPT_PARAMS.N,
    r: SCRYPT_PARAMS.r,
    p: SCRYPT_PARAMS.p,
  });
  return {
    algo: "scrypt",
    salt: salt.toString("hex"),
    hash: hash.toString("hex"),
    N: SCRYPT_PARAMS.N,
    r: SCRYPT_PARAMS.r,
    p: SCRYPT_PARAMS.p,
    keylen: SCRYPT_PARAMS.keylen,
  };
}

function verifyPassword(password, stored) {
  if (!stored) return false;
  const salt = Buffer.from(stored.salt, "hex");
  const candidate = scryptSync(password, salt, stored.keylen, {
    N: stored.N,
    r: stored.r,
    p: stored.p,
  });
  const expected = Buffer.from(stored.hash, "hex");
  if (candidate.length !== expected.length) return false;
  return timingSafeEqual(candidate, expected);
}

function findUserByLoginId(loginId) {
  return usersStore.get().users.find((u) => u.loginId.toLowerCase() === String(loginId).toLowerCase());
}

function findUserById(id) {
  return usersStore.get().users.find((u) => u.id === id);
}

function createSession(userId, userAgent) {
  const token = randomBytes(32).toString("hex");
  const now = Date.now();
  sessionsStore.get().sessions.push({
    token,
    userId,
    createdAt: new Date(now).toISOString(),
    expiresAt: new Date(now + SESSION_TTL_MS).toISOString(),
    userAgent: userAgent || "",
  });
  sessionsStore.save();
  return token;
}

function deleteSession(token) {
  const store = sessionsStore.get();
  const before = store.sessions.length;
  store.sessions = store.sessions.filter((s) => s.token !== token);
  if (store.sessions.length !== before) sessionsStore.save();
}

function deleteSessionsForUser(userId) {
  const store = sessionsStore.get();
  const before = store.sessions.length;
  store.sessions = store.sessions.filter((s) => s.userId !== userId);
  if (store.sessions.length !== before) sessionsStore.save();
}

function userForToken(token) {
  if (!token) return null;
  const session = sessionsStore.get().sessions.find((s) => s.token === token);
  if (!session) return null;
  if (new Date(session.expiresAt).getTime() < Date.now()) {
    deleteSession(token);
    return null;
  }
  const user = findUserById(session.userId);
  if (!user || !user.active) return null;
  return user;
}

function parseCookies(req) {
  const header = req.headers.cookie;
  if (!header) return {};
  return Object.fromEntries(
    header
      .split(";")
      .map((c) => c.trim())
      .filter(Boolean)
      .map((c) => {
        const idx = c.indexOf("=");
        return idx === -1 ? [c, ""] : [c.slice(0, idx), decodeURIComponent(c.slice(idx + 1))];
      })
  );
}

function getSessionToken(req) {
  return parseCookies(req)[COOKIE_NAME];
}

function setSessionCookie(res, token) {
  const secure = process.env.HP_COOKIE_SECURE === "1" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=${token}; HttpOnly; Path=/; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}; SameSite=Lax${secure}`
  );
}

function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax`);
}

// Public shape sent to the client — never leak passwordHash.
function publicUser(user) {
  return {
    id: user.id,
    loginId: user.loginId,
    displayName: user.displayName,
    role: user.role,
    mustChangePassword: !!user.mustChangePassword,
  };
}

function requireAuth(req) {
  const token = getSessionToken(req);
  return userForToken(token);
}

function requireAdmin(req) {
  const user = requireAuth(req);
  if (!user || user.role !== "admin") return null;
  return user;
}

module.exports = {
  usersStore,
  sessionsStore,
  hashPassword,
  verifyPassword,
  findUserByLoginId,
  findUserById,
  createSession,
  deleteSession,
  deleteSessionsForUser,
  getSessionToken,
  setSessionCookie,
  clearSessionCookie,
  publicUser,
  requireAuth,
  requireAdmin,
};
