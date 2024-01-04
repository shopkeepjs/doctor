const spawn = require("cross-spawn");

const { resolveBin, hasFile, hasPkgProp } = require("../utils");

const args = process.argv.slice(2);

const useBuiltinConfig =
  !args.includes("--config") &&
  !hasFile(".eslintrc") &&
  !hasFile(".eslintrc.js") &&
  !hasPkgProp("eslintConfig");

const config = useBuiltinConfig ? ["--config", "../config/eslintrc.js"] : [];

console.log(config);
const result = spawn.sync(resolveBin("eslint"), [...config, "."].concat(args), {
  stdio: "inherit",
});

process.exit(result.status);
