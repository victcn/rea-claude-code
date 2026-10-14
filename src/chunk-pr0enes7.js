// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { el, Cs } from "./chunk-ddr690nj.js";

import { JI, vAe, Ort, LB, q2, Qx } from "./chunk-84yp45y8.js";

import { Bs } from "./chunk-9yajep3y.js";

import { realpathSync as u } from "fs";

var wTe = (() => {
  try {
    return u(process.cwd());
  } catch {
    return process.cwd();
  }
})();

function zer(r, e) {
  let n = JI(r), t = JI(e);
  if (LB(n) || LB(t)) return !0;
  if (n.skipped !== t.skipped) return !0;
  return vAe(n, t);
}

function _2e(r, e) {
  if (Cs(r) || el(r)) return [];
  let n = Bs(r), t = n !== null && n !== void 0 ? [ n ] : (() => {
    let o = Qx(r);
    return o.length > 0 ? o : [ r ];
  })();
  return e === void 0 ? t : t.filter(o => q2(o, e) !== "same");
}

function Qet(r, e) {
  if (Cs(r) || el(r)) return [];
  let n = Bs(r), t = n !== null && n !== void 0 ? [ n ] : Qx(r);
  return e === void 0 ? t : t.filter(s => q2(s, e) !== "same");
}

function dDe(r, e, n) {
  if (e.length === 0) return !1;
  if (!e.every(s => {
    let o = q2(r, s);
    if (o === "indeterminate") return !1;
    if (o === "same") return !0;
    return !zer(s, r);
  })) return !1;
  if (n?.requireCovered === !0) {
    let s = JI(r);
    if (LB(s)) return !1;
    let o = a => a.some(c => {
      let i = JI(c);
      if (LB(i)) return !1;
      return Ort(s, i);
    });
    return o(n.coveredWitnesses ?? e) || o(n.extraCoveredRoots ?? []);
  }
  return !0;
}

export { wTe, zer, _2e, Qet, dDe };
