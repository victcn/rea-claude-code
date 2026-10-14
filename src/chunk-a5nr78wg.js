// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { MA } from "./chunk-3vw306fv.js";

import { nn, Nq } from "./chunk-ytac37d4.js";

import { ms } from "./chunk-zzj636ts.js";

import { Ik } from "./chunk-rv6y1pjz.js";

import { ae, Z, y, F } from "./chunk-cpyd3eya.js";

F();

function Zo(i, r, e = !0) {
  let {handleInterrupt: n, handleExit: t, exitState: o} = c(r, i), a = Z(() => ({
    "app:interrupt": n,
    "app:exit": t
  }), [ n, t ]);
  return nn(a, {
    context: "Global",
    isActive: e
  }), o;
}

function a_t(i, r, e = !0) {
  let {handleInterrupt: n, handleExit: t, exitState: o} = c(r, i);
  return {
    entries: Z(() => e ? [ {
      action: "app:interrupt",
      run: n
    }, {
      action: "app:exit",
      run: t
    } ] : [], [ e, n, t ]),
    exitState: o
  };
}

function c(i, r) {
  let {exit: e} = MA(), [n, t] = y({
    pending: !1,
    keyName: null
  }), o = Z(() => r ?? e, [ r, e ]), a = Ik(), l = ms("app:interrupt", "Global", "Ctrl-C"), p = ms("app:exit", "Global", "Ctrl-D"), d = a && l ? l : "Ctrl-C", m = a && p ? p : "Ctrl-D", u = Nq(s => t({
    pending: s,
    keyName: d
  }), o), x = Nq(s => t({
    pending: s,
    keyName: m
  }), o), b = ae(() => {
    if (i?.()) return;
    u();
  }, [ u, i ]), C = ae(() => {
    x();
  }, [ x ]);
  return {
    handleInterrupt: b,
    handleExit: C,
    exitState: n
  };
}

export { Zo, a_t };
