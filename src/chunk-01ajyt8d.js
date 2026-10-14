// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { J } from "./chunk-nvtwm272.js";

import { efe } from "./chunk-xywp7esx.js";

class r {
  stampMs=0;
  detachedSinceLastAttach=!1;
  reset() {
    this.stampMs = 0, this.detachedSinceLastAttach = !1;
  }
}

var s = new K(() => new r);

function a() {
  return s.of(B().host);
}

function kWr(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return;
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = !1;
}

function Zjt() {
  a().detachedSinceLastAttach = !0;
}

function TWr() {
  return a().detachedSinceLastAttach;
}

function dGe() {
  return a().stampMs;
}

function eWt(e) {
  return !1;
}

async function yyn() {
  for (;;) {
    let e = Date.now();
    if (!eWt(e)) return;
    let {detachedSinceLastAttach: t, stampMs: o} = a(), c = t || o === 0 ? 500 : o + 500 - e;
    await J(Math.max(25, c) + 25);
  }
}

export { kWr, Zjt, TWr, dGe, eWt, yyn };
