// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w_ } from "./chunk-a16yb89m.js";

import { ge } from "./chunk-07cck4g7.js";

import { iu } from "./chunk-8v8fjzek.js";

function qm(r) {
  console.error(ge.red(r));
}

function ln(r, e = "cli_error") {
  if (r) qm(r);
  w_(e), process.exit(1);
  return;
}

function BN(r) {
  if (r) process.stdout.write(r + `\n`);
  process.exit(0);
  return;
}

function dtn(r) {
  process.exit(r);
  return;
}

async function op(r) {
  await new Promise(e => {
    process.stdout.write(r, () => e());
  });
}

function ck(r) {
  process.stderr.write(ge.yellow(iu(r)) + `\n`);
}

async function zF() {
  try {
    let {flushAnalyticsSinks: r} = await import("./chunk-vs9zzmzs.js");
    await r();
  } catch {}
}

async function Io(r) {
  await zF(), process.exit(r);
  return;
}

async function Xo(r) {
  if (r) qm(r);
  return await zF(), ln();
}

async function uk(r) {
  if (r) process.stdout.write(r + `\n`);
  return await zF(), BN();
}

export { qm, ln, BN, dtn, op, ck, zF, Io, Xo, uk };
