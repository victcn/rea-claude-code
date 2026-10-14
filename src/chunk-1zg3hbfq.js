// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, ps } from "./chunk-3pqddg8f.js";

import { bt, _, se } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { dirname as u } from "path";

function c() {}

async function p(n, t) {
  let i = se();
  try {
    await i.appendFile(n, t);
  } catch {
    await i.mkdir(u(n)).catch(c), await i.appendFile(n, t);
  }
}

class g {
  pendingWrite=Promise.resolve();
  cleanupRegistered=!1;
  append(n, t) {
    if (this.pendingWrite = this.pendingWrite.then(p.bind(null, n, t)).catch(c), !this.cleanupRegistered) this.cleanupRegistered = !0, 
    bt(() => this.flush());
  }
  flush() {
    return this.pendingWrite;
  }
}

var f = new K(() => new g);

function d() {
  return ps(f);
}

function X(n, t, i, r = "queued") {
  let o = m();
  if (!o) return;
  let e;
  try {
    e = s(n, t, l(i));
  } catch {
    e = s(n, t, {
      diagnostics_payload_failed: !0
    });
  }
  if (r === "now") try {
    se().appendFileSync(o, e);
  } catch {} else d().append(o, e);
}

function l(n) {
  try {
    return (typeof n === "function" ? n() : n) ?? {};
  } catch {
    return {
      diagnostics_payload_failed: !0
    };
  }
}

function s(n, t, i) {
  let r = {
    timestamp: (new Date).toISOString(),
    level: n,
    event: t,
    data: i
  };
  return _(r) + `\n`;
}

function vOe() {
  return d().flush();
}

function m() {
  return a.CLAUDE_CODE_DIAGNOSTICS_FILE;
}

async function Sgt(n, t, i) {
  let r = Date.now();
  X("info", `${n}_started`);
  try {
    let o = await t(), e = i ? i(o) : {};
    return X("info", `${n}_completed`, {
      duration_ms: Date.now() - r,
      ...e
    }), o;
  } catch (o) {
    throw X("error", `${n}_failed`, {
      duration_ms: Date.now() - r
    }), o;
  }
}

export { X, vOe, Sgt };
