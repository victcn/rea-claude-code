// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q } from "./chunk-3pqddg8f.js";

import { pHo } from "./chunk-5brm0azz.js";

import { vPe } from "./chunk-xywp7esx.js";

var t = /^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function tVr() {
  let e = pHo();
  if (!e) return "unset";
  if (!t.test(e)) return "malformed";
  return vPe() ? "ignored" : "used";
}

function o() {
  return tVr() === "used" ? pHo() : void 0;
}

function nVr() {
  let e = o();
  return e === void 0 ? {
    key: q(),
    fromHost: !1
  } : {
    key: e,
    fromHost: !0
  };
}

function Fzt() {
  return nVr().key;
}

export { tVr, nVr, Fzt };
