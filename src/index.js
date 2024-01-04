#!/usr/bin/env node
const path = require('path');

const { spawn } = require('node:child_process');

function attemptResolve(scriptPath) {
  const test = 'hello';

  console.log(test);
  try {
    return require.resolve(scriptPath);
  } catch (error) {
    throw new Error(`Could not resolve script path: ${scriptPath}`);
  }
}

const [executor, _, script, ...args] = process.argv;
const relativeScriptPath = path.join(__dirname, './scripts', script);
const scriptPath = attemptResolve(relativeScriptPath);

spawn(executor, [scriptPath, ...args], { stdio: 'inherit' });
