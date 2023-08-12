const spawn = require("cross-spawn");

const { resolveBin } = require("../utils");

const args = process.argv.slice(2);

const config = [];

const result = spawn.sync(resolveBin("eslint"), [...config, "."].concat(args), {
  stdio: "inherit",
});

process.exit(result.status);
