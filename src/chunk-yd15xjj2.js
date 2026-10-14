// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { st, qr } from "./chunk-3vw306fv.js";

import { No } from "./chunk-gdpv30ry.js";

import { Ua, hs } from "./chunk-yrpmvsj8.js";

import { Hs } from "./chunk-84yp45y8.js";

import { Zo } from "./chunk-a5nr78wg.js";

import { R, y, F } from "./chunk-cpyd3eya.js";

F();

function nke(d, {selfOpened: t, onCancelled: f}) {
  let [l, r] = y(!1), n = R(!1), [i, p] = y(!1), e = R(!1), h = qr(t ? No : null), u = !t || h, m = st() ? !0 : !1, C = Ua(No), {refusedWithin: S, noteRefused: b} = hs();
  function E() {
    if (t && (C() || S(No))) return b(), !0;
    return !1;
  }
  let c = Zo(() => {
    if (e.current) return;
    let o = n.current;
    n.current = !0;
    let a = f(o);
    if (a === void 0) {
      e.current = !0, Hs(1);
      return;
    }
    r(!0), s(a);
  }, void 0, t && !i);
  function x() {
    if (n.current || !u) return !1;
    return n.current = !0, r(!0), !0;
  }
  function s(o) {
    if (e.current) return;
    e.current = !0, p(!0), d(o);
  }
  return {
    choicesDisabled: !u && !m,
    decided: l,
    take: x,
    refuseInput: E,
    settled: () => e.current,
    handBack: s,
    exit: c,
    exitHintShowing: c.pending && !i
  };
}

export { nke };
