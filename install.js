const os = require("os");
const spawn = require("cross-spawn");

if (os.platform() === "darwin") {
  const result = spawn.sync("npm", ["run", "native_build"], {
    stdio: "inherit",
  });

  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }

  process.exit(result.status);
}
