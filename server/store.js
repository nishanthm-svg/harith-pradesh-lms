// ============================================================================
// Tiny JSON-file store. Loads each file into memory at boot; every write
// updates the in-memory object and synchronously flushes it back to disk,
// after copying the previous version into _backups/ first.
// No database engine — fine for tens to low hundreds of employees with
// infrequent writes (quiz submissions, account changes), not high-concurrency
// traffic. See the plan's "Assumptions" section if that scale changes.
// ============================================================================
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "data");
const BACKUP_DIR = path.join(DATA_DIR, "_backups");

function ensureDirs() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

function filePath(name) {
  return path.join(DATA_DIR, name + ".json");
}

function load(name, defaultValue) {
  ensureDirs();
  const f = filePath(name);
  if (!fs.existsSync(f)) {
    fs.writeFileSync(f, JSON.stringify(defaultValue, null, 2), "utf8");
    return JSON.parse(JSON.stringify(defaultValue));
  }
  const raw = fs.readFileSync(f, "utf8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    throw new Error("Corrupt JSON data file: " + f + " — " + e.message);
  }
}

function backupThenWrite(name, data) {
  ensureDirs();
  const f = filePath(name);
  if (fs.existsSync(f)) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupFile = path.join(BACKUP_DIR, name + "." + stamp + ".json");
    try {
      fs.copyFileSync(f, backupFile);
    } catch (e) {
      // Backup failure should never block the actual write.
      console.error("Backup failed for " + name + ":", e.message);
    }
  }
  fs.writeFileSync(f, JSON.stringify(data, null, 2), "utf8");
}

// Each store is loaded once at require-time and kept in memory. Callers
// mutate the returned object directly, then call save() to persist it.
function createStore(name, defaultValue) {
  let data = load(name, defaultValue);
  return {
    get: () => data,
    save: () => backupThenWrite(name, data),
    replace: (next) => {
      data = next;
      backupThenWrite(name, data);
    },
  };
}

module.exports = { createStore, DATA_DIR };
