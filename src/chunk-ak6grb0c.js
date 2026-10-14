// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Nme } from "./chunk-3pqddg8f.js";

import { Qe, RTo, oon, hxr, E8e } from "./chunk-xywp7esx.js";

import { d } from "./chunk-6ah1819r.js";

import { Ur, Oe } from "./chunk-cjt10y7b.js";

import { aTt } from "./chunk-84yp45y8.js";

function qhn(n) {
  let e = aTt() ? oon() : void 0, t = Qe();
  if (n(), e === void 0 || Qe() === t) return;
  return RTo(e, {
    forContextWindow: !0
  }), e;
}

function i(n, e, t) {
  let o = import("./chunk-mv1vv0rf.js").then(({refreshBootstrapData: r}) => r(n, e, {
    renderedClientData: t
  })).then(() => {}, r => d(r));
  return kbt(o), o;
}

function Yhn(n, e, t) {
  return i(n, e, t);
}

function AVo(n) {
  Ur().fetchesClientData = n;
}

function Djr() {
  return Ur().fetchesClientData && Oe() === "firstParty";
}

function kbt(n) {
  let e = hxr(), t = Ur().providerCache.clientDataFetches;
  if (e !== void 0 && !(t.get(e) instanceof Promise)) {
    let o = Nme();
    t.set(e, n), n.finally(() => {
      if (t.get(e) === n) if (Nme() === o) t.set(e, "over"); else t.delete(e);
    });
  }
}

function CVo(n) {
  let e = Ur().providerCache.clientDataFetches;
  for (let [t, o] of e) if (o === n) e.set(t, "over");
}

function RVo(n, e) {
  let t = hxr();
  if (t === void 0 || !Djr() || E8e()) return;
  let o = Ur().providerCache.clientDataFetches.get(t);
  if (o !== void 0) return o === "over" ? void 0 : o;
  return i(n, e, oon());
}

export { qhn, Yhn, AVo, Djr, kbt, CVo, RVo };
