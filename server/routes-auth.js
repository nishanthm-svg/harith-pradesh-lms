const auth = require("./auth");

function handleLogin(req, res, body) {
  const { loginId, password } = body || {};
  if (!loginId || !password) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "loginId and password are required" }));
    return;
  }
  const user = auth.findUserByLoginId(loginId);
  if (!user || !user.active || !auth.verifyPassword(password, user.passwordHash)) {
    res.writeHead(401, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Invalid login ID or password" }));
    return;
  }
  const token = auth.createSession(user.id, req.headers["user-agent"]);
  auth.setSessionCookie(res, token);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ user: auth.publicUser(user) }));
}

function handleLogout(req, res) {
  const token = auth.getSessionToken(req);
  if (token) auth.deleteSession(token);
  auth.clearSessionCookie(res);
  res.writeHead(204);
  res.end();
}

function handleSession(req, res) {
  const user = auth.requireAuth(req);
  if (!user) {
    res.writeHead(401, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not signed in" }));
    return;
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ user: auth.publicUser(user) }));
}

function handleChangePassword(req, res, body) {
  const user = auth.requireAuth(req);
  if (!user) {
    res.writeHead(401, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not signed in" }));
    return;
  }
  const { oldPassword, newPassword } = body || {};
  if (!newPassword || newPassword.length < 6) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "New password must be at least 6 characters" }));
    return;
  }
  // Skip old-password check only when the account still has mustChangePassword
  // set (first login after admin-provisioning/reset) — otherwise require it.
  if (!user.mustChangePassword) {
    if (!oldPassword || !auth.verifyPassword(oldPassword, user.passwordHash)) {
      res.writeHead(401, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Current password is incorrect" }));
      return;
    }
  }
  user.passwordHash = auth.hashPassword(newPassword);
  user.mustChangePassword = false;
  auth.usersStore.save();
  res.writeHead(204);
  res.end();
}

module.exports = { handleLogin, handleLogout, handleSession, handleChangePassword };
