#!/usr/bin/env bun
/**
 * Formats all extracted JavaScript modules in `./src/`
 * into human-readable, indented source code while preserving exact AST semantics,
 * ASCII escapes (`ascii_only: true`), and quoted object keys (`keep_quoted_props: true`).
 */

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const terser = require("/usr/share/nodejs/terser/dist/bundle.min.cjs");

const SRC_DIR = path.resolve(import.meta.dirname, "../src");
const SKIP_FILES = new Set([
  "chart.umd.min.js",
  "hljsBundle.generated.min.js",
  "mermaid.min.js",
]);

async function walkAndFormat(dir) {
  let formatted = 0;
  let skipped = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = await walkAndFormat(fullPath);
      formatted += sub.formatted;
      skipped += sub.skipped;
      continue;
    }
    if (SKIP_FILES.has(entry.name)) continue;
    if (!entry.name.endsWith(".js") && entry.name !== "cli") continue;

    const code = fs.readFileSync(fullPath, "utf8");
    try {
      const result = await terser.minify(code, {
        compress: false,
        mangle: false,
        module: true,
        ecma: 2020,
        format: {
          beautify: true,
          indent_level: 2,
          comments: true,
          ascii_only: true,
          keep_quoted_props: true,
        },
      });
      if (result && result.code) {
        fs.writeFileSync(fullPath, result.code + "\n", "utf8");
        formatted++;
      } else {
        skipped++;
      }
    } catch {
      skipped++;
    }
  }
  return { formatted, skipped };
}

const t0 = Date.now();
const { formatted, skipped } = await walkAndFormat(SRC_DIR);
console.log(
  `Formatted ${formatted} JS modules (${skipped} kept as-is) in ${((Date.now() - t0) / 1000).toFixed(2)}s.`
);
