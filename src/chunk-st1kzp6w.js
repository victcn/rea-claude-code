// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-2v9tfgc3.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-07cck4g7.js";

import { ln } from "./chunk-ajd6by9m.js";

import "./chunk-8v8fjzek.js";

import "./chunk-1xnsr4dy.js";

async function i(r, s) {
  let t = o(r.remote, r.inputPrompt);
  if (t === null) return ln("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");
  let {runHeadlessCloudPrint: e} = await import("./chunk-kbdfkaqb.js");
  return e(r, s, {
    prompt: t,
    outputFormat: r.outputFormat === "json" ? "json" : "text"
  });
}

function o(r, s) {
  let t = [ r ?? "", typeof s === "string" ? s : "" ].filter(e => e.trim() !== "");
  return t.length === 0 ? null : t.join(`\n`);
}

export { i as runHeadlessCloudPrintArm };
