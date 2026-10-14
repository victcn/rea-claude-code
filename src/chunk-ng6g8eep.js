// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { $w, XXe } from "./chunk-x5881pc6.js";

import { We } from "./chunk-nvtwm272.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { pM } from "./chunk-e96bxrcx.js";

var i = 1e3;

function XMr(e = process.argv.slice(2)) {
  return XXe(e) && $w("--output-format", e) === "stream-json";
}

function Sje() {
  return Le(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}

function JMr(e, t = process.argv.slice(2)) {
  let r = $w("--session-id", t);
  return ($w("--sdk-url", t) === void 0 ? Vt(r) : r) || e;
}

function u$t({sessionId: e, message: t, reason: r, resultIndex: n = 0}) {
  return {
    ...pM(e, [ t ]),
    ...r !== void 0 && {
      startup_failure_reason: r
    },
    ...n !== null && {
      result_index: n
    }
  };
}

async function J5(e) {
  if (Sje()) await QMr([ u$t({
    ...e,
    sessionId: JMr(e.sessionId)
  }) ]);
}

async function QMr(e) {
  let t = process.stdout;
  if (!XMr() || t.writableEnded || t.destroyed) return !1;
  let r = e.map(s => JSON.stringify(s) + `\n`).join(""), n = s => {}, o = new Promise(s => {
    n = s;
  });
  t.once("error", () => n(!1));
  try {
    t.write(r, s => n(!s));
  } catch {
    return !1;
  }
  return await We(o, i) ?? !1;
}

export { XMr, Sje, JMr, u$t, J5, QMr };
