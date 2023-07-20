const spawn = require("cross-spawn");
const { inConsumer, fromConfigs, resolveBin } = require("../utils");

const useDoctorConfig = !inConsumer(".eslintrc.js");

const args = process.argv.slice(2);

const config = useDoctorConfig ? ["--config", fromConfigs(".eslintrc.js")] : [];

// if it doesn't, use the one in this package
// Check if eslint ignore exists in consumer
// if it does, use it
// if it doesn't, use the one in this package
// run eslint with the right config

const result = spawn.sync(resolveBin("eslint"), [...config, "."].concat(args), {
  stdio: "inherit",
});

process.exit(result.status);
