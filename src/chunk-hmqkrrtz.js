// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function lEe(n, e) {
  return n.flatMap((r, t) => t ? [ e(t), r ] : [ r ]);
}

function N(n, e) {
  let r = 0;
  for (let t of n) r += +!!e(t);
  return r;
}

function yI(n, e) {
  if (n === e) return !0;
  if (n === void 0 || e === void 0 || n.length !== e.length) return !1;
  for (let r = 0; r < n.length; r++) if (n[r] !== e[r]) return !1;
  return !0;
}

function D(n) {
  return [ ...new Set(n) ];
}

function Zi(n) {
  if (!Array.isArray(n)) return [];
  return n.every(e => typeof e === "string") ? n : n.filter(e => typeof e === "string");
}

function kHo(n, e) {
  let r = Math.min(n.length, e.length), t = 0;
  while (t < r && n[t] === e[t]) t++;
  return t;
}

export { lEe, N, yI, D, Zi, kHo };
