// ============================================================================
// Server-backed replacement for shreeja-lms's localStorage-based progress.js.
// Same exported function names/shapes so app.js's render call sites don't
// change. The full progress blob is fetched once (see setProgressCache,
// called from app.js after session restore) into this in-memory cache;
// reads stay synchronous against that cache. Only recordQuizAttempt talks
// to the network — it updates the cache optimistically so the UI doesn't
// wait on a round trip, then reconciles with the server's response.
// ============================================================================
import { api } from "./api.js";

let cache = {}; // { moduleId: { lessonId: {completed,bestScore,attempts} } }

export function setProgressCache(progress) {
  cache = progress || {};
}

export function getLessonState(moduleId, lessonId) {
  return (cache[moduleId] && cache[moduleId][lessonId]) || { completed: false, bestScore: 0, attempts: 0 };
}

export function recordQuizAttempt(moduleId, lessonId, scorePercent, passed) {
  const existing = getLessonState(moduleId, lessonId);
  const optimistic = {
    completed: existing.completed || passed,
    bestScore: Math.max(existing.bestScore, scorePercent),
    attempts: existing.attempts + 1,
  };
  if (!cache[moduleId]) cache[moduleId] = {};
  cache[moduleId][lessonId] = optimistic;

  api
    .quizAttempt(moduleId, lessonId, scorePercent, passed)
    .then((res) => {
      if (res && res.lessonState && cache[moduleId]) {
        cache[moduleId][lessonId] = res.lessonState;
      }
    })
    .catch((e) => {
      console.error("Failed to save quiz attempt to the server:", e);
    });

  return optimistic;
}

// First lesson in a module is always unlocked; each subsequent lesson
// unlocks once the previous lesson has been completed (quiz passed).
export function isLessonUnlocked(mod, lessonId) {
  if (!mod || !mod.lessons) return false;
  const idx = mod.lessons.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return true;
  const prevLesson = mod.lessons[idx - 1];
  return getLessonState(mod.id, prevLesson.id).completed;
}

export function getModuleProgress(mod) {
  if (!mod || !mod.lessons || mod.lessons.length === 0) {
    return { completed: 0, total: 0, percent: 0, isComplete: false };
  }
  const completed = mod.lessons.filter((l) => getLessonState(mod.id, l.id).completed).length;
  const total = mod.lessons.length;
  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
    isComplete: completed === total,
  };
}
