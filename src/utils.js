const fs = require("fs");
const path = require("path");

const consumerDirectory = fs.realpathSync(process.cwd());
const inConsumer = (p) => fs.existsSync(path.join(consumerDirectory, p));
const fromConsumer = (...p) => path.join(consumerDirectory, ...p);

const fromConfigs = (...p) => path.join(__dirname, "/configs", ...p);

function resolveBin(modName, { executable = modName } = {}) {
  const pkgPath = require.resolve(`${modName}/package.json`);
  const pkgDir = path.dirname(pkgPath);
  const { bin } = require(pkgPath);
  if (typeof bin === "string") return path.join(pkgDir, bin);
  
  return path.join(pkgDir, bin[executable]);
}

module.exports = {
  consumerDirectory,
  fromConsumer,
  inConsumer,
  fromConfigs,
  resolveBin,
};
