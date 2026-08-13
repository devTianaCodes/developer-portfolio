import { readdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";

async function findTestFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return findTestFiles(entryPath);
      return entry.name.endsWith(".test.ts") ? [entryPath] : [];
    })
  );

  return nestedFiles.flat().sort();
}

const testFiles = await findTestFiles("src");

if (!testFiles.length) {
  throw new Error("No test files found under src");
}

const watch = process.argv.includes("--watch");
const child = spawn(
  process.platform === "win32" ? "tsx.cmd" : "tsx",
  ["--test", ...(watch ? ["--watch"] : []), ...testFiles],
  { stdio: "inherit" }
);

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
