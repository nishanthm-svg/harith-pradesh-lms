const auth = require("./auth");
const { createStore } = require("./store");
const { getModule } = require("./module-meta");

const progressStore = createStore("progress", {});

function getUserProgress(userId) {
  return progressStore.get()[userId] || {};
}

function getLessonState(userId, moduleId, lessonId) {
  const p = getUserProgress(userId);
  return (p[moduleId] && p[moduleId][lessonId]) || { completed: false, bestScore: 0, attempts: 0 };
}

// Mirrors shreeja-lms/progress.js's isLessonUnlocked exactly: first lesson
// in a module is always unlocked; each next lesson unlocks once the
// previous one is completed.
function isLessonUnlocked(userId, mod, lessonId) {
  if (!mod || !mod.lessons) return false;
  const idx = mod.lessons.indexOf(lessonId);
  if (idx <= 0) return true;
  const prevLessonId = mod.lessons[idx - 1];
  return getLessonState(userId, mod.id, prevLessonId).completed;
}

function computeRollup(userId) {
  const p = getUserProgress(userId);
  const { MODULES } = require("./module-meta");
  let completedLessons = 0;
  let totalLessons = 0;
  let modulesCompleted = 0;
  let lastActivityAt = null;
  MODULES.forEach((mod) => {
    if (!mod.available) return;
    totalLessons += mod.lessons.length;
    let moduleDone = mod.lessons.length > 0;
    mod.lessons.forEach((lessonId) => {
      const state = p[mod.id] && p[mod.id][lessonId];
      if (state && state.completed) completedLessons++;
      else moduleDone = false;
      if (state && state.lastAttemptAt) {
        if (!lastActivityAt || state.lastAttemptAt > lastActivityAt) lastActivityAt = state.lastAttemptAt;
      }
    });
    if (moduleDone) modulesCompleted++;
  });
  const totalModules = MODULES.filter((m) => m.available).length;
  return {
    completedLessons,
    totalLessons,
    overallPercent: totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0,
    modulesCompleted,
    totalModules,
    lastActivityAt,
  };
}

function handleMyProgress(req, res) {
  const user = auth.requireAuth(req);
  if (!user) {
    res.writeHead(401, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not signed in" }));
    return;
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ progress: getUserProgress(user.id) }));
}

function handleQuizAttempt(req, res, body) {
  const user = auth.requireAuth(req);
  if (!user) {
    res.writeHead(401, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not signed in" }));
    return;
  }
  const { moduleId, lessonId, scorePercent, passed } = body || {};
  const mod = getModule(moduleId);
  if (!mod || !mod.lessons.includes(lessonId)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Unknown moduleId/lessonId" }));
    return;
  }
  if (typeof scorePercent !== "number" || typeof passed !== "boolean") {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "scorePercent (number) and passed (boolean) are required" }));
    return;
  }

  const all = progressStore.get();
  if (!all[user.id]) all[user.id] = {};
  if (!all[user.id][moduleId]) all[user.id][moduleId] = {};
  const existing = all[user.id][moduleId][lessonId] || { completed: false, bestScore: 0, attempts: 0 };
  const next = {
    completed: existing.completed || passed,
    bestScore: Math.max(existing.bestScore, scorePercent),
    attempts: existing.attempts + 1,
    lastAttemptAt: new Date().toISOString(),
  };
  all[user.id][moduleId][lessonId] = next;
  progressStore.save();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ lessonState: next }));
}

module.exports = {
  handleMyProgress,
  handleQuizAttempt,
  getUserProgress,
  computeRollup,
  isLessonUnlocked,
  progressStore,
};
