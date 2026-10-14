// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function r(n) {
  return n;
}

function b(n) {
  return r(n);
}

function c(n) {
  return r(n);
}

function pe(n) {
  return n == null ? void 0 : r(n);
}

function Gr(n) {
  return r(String(n));
}

function kq(n) {
  return n == null ? void 0 : r(String(n));
}

function Yc(...n) {
  return r(n.join(""));
}

function WYn(n) {
  return r(n.join(","));
}

function vl(n) {
  return r([ ...n ].sort().join(","));
}

function v_(n, e) {
  return r(n.join(e ?? ","));
}

function Cn(n) {
  return r(n);
}

function hS(n, e) {
  return e ? Cn(n) : void 0;
}

function O$o(n, e) {
  return n !== void 0 && e.includes(n) && /^[a-z0-9-]{1,64}$/.test(n) ? Cn(n) : b("none");
}

function Pae(n, e) {
  return e ? Cn(n) : b("custom");
}

function Vme(n) {
  return Pae(n.agentType, n.source === "built-in");
}

function p0r(n, e) {
  return e ? Cn(n) : b("third-party");
}

export { b, c, pe, Gr, kq, Yc, WYn, vl, v_, Cn, hS, O$o, Pae, Vme, p0r };
