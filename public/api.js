// ============================================================================
// Thin fetch() wrapper for every /api/* call. Cookies are sent automatically
// (same-origin); this just centralizes JSON parsing and error shaping so
// callers get a plain object back or a thrown Error with a useful message.
// ============================================================================

async function request(method, path, body) {
  const opts = {
    method,
    headers: {},
    credentials: "same-origin",
  };
  if (body !== undefined) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(body);
  }
  const res = await fetch(path, opts);
  let data = null;
  const text = await res.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch (e) {
      data = null;
    }
  }
  if (!res.ok) {
    const err = new Error((data && data.error) || `Request failed (${res.status})`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  login: (loginId, password) => request("POST", "/api/login", { loginId, password }),
  logout: () => request("POST", "/api/logout"),
  session: () => request("GET", "/api/session"),
  changePassword: (oldPassword, newPassword) => request("POST", "/api/change-password", { oldPassword, newPassword }),

  myProgress: () => request("GET", "/api/my-progress"),
  quizAttempt: (moduleId, lessonId, scorePercent, passed) =>
    request("POST", "/api/quiz-attempt", { moduleId, lessonId, scorePercent, passed }),

  adminListEmployees: (search) => request("GET", "/api/admin/employees" + (search ? "?search=" + encodeURIComponent(search) : "")),
  adminGetEmployee: (id) => request("GET", "/api/admin/employees/" + encodeURIComponent(id)),
  adminCreateEmployee: (loginId, displayName, tempPassword) =>
    request("POST", "/api/admin/employees", { loginId, displayName, tempPassword }),
  adminResetPassword: (id, tempPassword) => request("POST", "/api/admin/employees/" + encodeURIComponent(id) + "/reset-password", { tempPassword }),
  adminDeactivate: (id) => request("POST", "/api/admin/employees/" + encodeURIComponent(id) + "/deactivate"),
};
