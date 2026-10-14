// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Kt, Ae, y, xt, F } from "./chunk-cpyd3eya.js";

import { _s } from "./chunk-1dj3skht.js";

F();

function h() {
  let u = _s(v);
  let V = new l;
  return u.subscribe(() => {
    if (u.getState().voiceState !== "recording") V.reset();
  }), {
    store: u,
    levelSmoother: V
  };
}

var v = {
  voiceState: "idle",
  voiceError: null,
  voiceInterimTranscript: "",
  voiceAudioLevels: [],
  voiceWarmingUp: !1,
  awaitingVoiceSubmitDoubleTap: !1
};

class l {
  #e=0;
  next(o, t) {
    return this.#e = this.#e * t + o * (1 - t), this.#e;
  }
  reset() {
    this.#e = 0;
  }
}

var i = Kt(null);

function v9n(o) {
  let s = w(3), {children: t} = o, [n] = y(h), c;
  if (s[0] !== t || s[1] !== n) c = e(i.Provider, {
    value: n,
    children: t
  }), s[0] = t, s[1] = n, s[2] = c; else c = s[2];
  return c;
}

function r() {
  let o = Ae(i);
  if (!o) {
    throw Error("useVoiceState must be used within a VoiceProvider");
  }
  return o;
}

function Oze() {
  return r().store;
}

function sBr() {
  return r().levelSmoother;
}

function Ch(o) {
  let n = w(3), t = Oze(), s;
  if (n[0] !== o || n[1] !== t) s = () => o(t.getState()), n[0] = o, n[1] = t, n[2] = s; else s = n[2];
  let c = s;
  return xt(t.subscribe, c, c);
}

function Zmn() {
  return Oze().setState;
}

function VMe() {
  return Oze().getState;
}

export { v9n, Oze, sBr, Ch, Zmn, VMe };
