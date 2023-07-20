#!/usr/bin/env node
const path = require("path");

const { spawn } = require("node:child_process");

function attemptResolve(scriptPath) {
  try {
    return require.resolve(scriptPath);
  } catch (error) {
    throw new Error("Could not resolve script path: " + scriptPath);
  }
}

const [executor, ignoredBin, script, ...args] = process.argv;
console.log(executor, ignoredBin, script, args);
const relativeScriptPath = path.join(__dirname, "./scripts", script);
const scriptPath = attemptResolve(relativeScriptPath);

spawn(executor, [scriptPath, ...args], { stdio: "inherit" });