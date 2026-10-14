// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Kc } from "./chunk-z52kmxx4.js";

var a = 12e4, i = 6e5;

function boe(n = process.env) {
  let e = n.BASH_DEFAULT_TIMEOUT_MS;
  if (e) {
    let t = Kc(e);
    if (!isNaN(t) && t > 0) return t;
  }
  return a;
}

function CRe(n = process.env) {
  let e = n.BASH_MAX_TIMEOUT_MS;
  if (e) {
    let t = Kc(e);
    if (!isNaN(t) && t > 0) return Math.max(t, boe(n));
  }
  return Math.max(i, boe(n));
}

var s = 18e5;

function cue() {
  return Math.min(Math.max(72e5, CRe()), 2147483647);
}

function Uys(n) {
  return Math.max(s, boe(n));
}

function xLn(n, e) {
  return n !== void 0 && n > 0 ? e : void 0;
}

var _ = 2e3;

function PLn({requestedTimeoutMs: n, isMainAgent: e, canAutoBackground: t, env: u = process.env}) {
  if (!e || !t) return n;
  let o = u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;
  if (!o) return n;
  let r = Kc(o);
  if (isNaN(r) || r <= 0) return n;
  return Math.min(n, Math.max(r, _));
}

export { boe, CRe, cue, Uys, xLn, PLn };
