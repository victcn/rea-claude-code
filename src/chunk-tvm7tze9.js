// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { V } from "./chunk-jb3h1y0s.js";

import { RIs, Eb, It } from "./chunk-xywp7esx.js";

import { EM } from "./chunk-n8zrqbkh.js";

import { id } from "./chunk-0ypdmr94.js";

import { E6t, vLe } from "./chunk-84yp45y8.js";

import { P, Z, Dh, F } from "./chunk-cpyd3eya.js";

F();

function t() {
  let [o, e] = Dh(s => s + 1, 0);
  return P(() => RIs(e), []), o;
}

function T8n(o, e) {
  return E6t(o) ?? E6t(e) ?? Eb();
}

function vM(o) {
  return It(T8n(o.mainLoopModelForSession, o.mainLoopModel));
}

function _ge() {
  let o = V(n => n.mainLoopModel), e = V(n => n.mainLoopModelForSession), s = EM(), i = t(), r = id();
  return Z(() => vLe(e, o), [ e, o, s, r, i ]);
}

function pmn() {
  let o = V(n => n.mainLoopModel), e = V(n => n.mainLoopModelForSession), s = EM(), i = t(), r = id();
  return Z(() => T8n(e, o), [ e, o, s, r, i ]);
}

function bu() {
  let o = V(n => n.mainLoopModel), e = V(n => n.mainLoopModelForSession), s = EM(), i = t(), r = id();
  return Z(() => vM({
    mainLoopModel: o,
    mainLoopModelForSession: e
  }), [ e, o, s, r, i ]);
}

export { T8n, vM, _ge, pmn, bu };
