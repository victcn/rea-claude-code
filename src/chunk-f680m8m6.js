// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { J } from "./chunk-nvtwm272.js";

import { due } from "./chunk-1tsh11bz.js";

import { Na } from "./chunk-sz89b5r8.js";

import { po, pc } from "./chunk-vjmbaret.js";

function g_r(o, e) {
  if (o.type !== "pending") return !1;
  let n = po(o.name);
  return !e.some(t => pc(t, o.name, n));
}

async function h_r(o, e, n) {
  let {maxWaitMs: t, until: s, pollMs: l = 50} = n, i = r => r.clients.some(c => e(c, r));
  if (!i(o())) return;
  let p = Date.now() + t;
  while (Date.now() < p) {
    await J(l);
    let r = o();
    if (s?.(r) || !i(r)) return;
  }
}

function o6s(o) {
  return o.some(TLn);
}

function TLn(o) {
  return "role" in o.config && o.config.role === "comms";
}

function hPt(o) {
  return o.mcpInfo?.role === "comms";
}

function yoe(o) {
  if (Na()) return o.filter(e => !hPt(e));
  return o;
}

async function jYe(o) {
  if (!Na()) return;
  await h_r(o, (e, n) => g_r(e, n.tools) && !TLn(e), {
    maxWaitMs: due
  });
}

export { g_r, h_r, o6s, TLn, hPt, yoe, jYe };
