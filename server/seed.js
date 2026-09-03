// ============================================================================
// On first boot (users.json empty), create a default admin account so
// there's a known login to start from without hand-writing a scrypt hash.
// Prints the temporary credentials to the console ONCE — change the
// password immediately after first login (mustChangePassword forces this
// in the UI).
// ============================================================================
const crypto = require("crypto");
const auth = require("./auth");

function seedIfEmpty() {
  const store = auth.usersStore;
  if (store.get().users.length > 0) return;

  const tempPassword = "harith-" + crypto.randomBytes(3).toString("hex");
  const admin = {
    id: "u_" + crypto.randomBytes(6).toString("hex"),
    loginId: "admin",
    displayName: "Administrator",
    role: "admin",
    passwordHash: auth.hashPassword(tempPassword),
    active: true,
    createdAt: new Date().toISOString(),
    createdBy: null,
    mustChangePassword: true,
  };
  store.get().users.push(admin);
  store.save();

  console.log("");
  console.log("============================================================");
  console.log(" First boot: created default admin account");
  console.log("   Login ID: admin");
  console.log("   Password: " + tempPassword);
  console.log(" You will be asked to set a new password on first login.");
  console.log("============================================================");
  console.log("");
}

module.exports = { seedIfEmpty };
