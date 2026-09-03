// ============================================================================
// Lightweight structural mirror of public/data.js — just module/lesson IDs
// and availability, kept in sync by hand as modules are authored. The server
// needs this to validate moduleId/lessonId pairs and compute unlock/rollup
// logic without loading the full lesson content (which only the browser
// needs, for rendering). Update this whenever a module gains lessons or
// flips to available:true in public/data.js.
// ============================================================================
const MODULES = [
  { id: "m1", number: 1, available: true, lessons: ["m1-l1", "m1-l2", "m1-l3", "m1-l4", "m1-l5", "m1-l6"] },
  { id: "m2", number: 2, available: false, lessons: [] },
  { id: "m3", number: 3, available: false, lessons: [] },
  { id: "m4", number: 4, available: false, lessons: [] },
  { id: "m5", number: 5, available: false, lessons: [] },
  { id: "m6", number: 6, available: false, lessons: [] },
  { id: "m7", number: 7, available: false, lessons: [] },
  { id: "m8", number: 8, available: false, lessons: [] },
  { id: "m9", number: 9, available: false, lessons: [] },
  { id: "m10", number: 10, available: false, lessons: [] },
  { id: "m11", number: 11, available: false, lessons: [] },
  { id: "m12", number: 12, available: false, lessons: [] },
];

function getModule(id) {
  return MODULES.find((m) => m.id === id) || null;
}

module.exports = { MODULES, getModule };
