// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { kwo } from "./chunk-e51bxpfh.js";

import { Ne } from "./chunk-m8ez8fhk.js";

var a = null, i = !1;

function r() {
  if (i) return a;
  i = !0;
  let t = "linux";
  if (t !== "darwin" && t !== "linux" && t !== "win32") return null;
  try {
    return a = kwo(), a;
  } catch {}
  let o = `x64-${t}`, u = (t === "linux" ? [ o, `${o}-musl` ] : [ o ]).flatMap(n => [ `./vendor/audio-capture/${n}/audio-capture.node`, `../audio-capture/${n}/audio-capture.node` ]);
  for (let n of u) try {
    return a = Ne(n), a;
  } catch {}
  return null;
}

function c() {
  return r() !== null;
}

function l(t, o) {
  let e = r();
  if (!e) return !1;
  return e.startRecording(t, o);
}

function s() {
  let t = r();
  if (!t) return;
  t.stopRecording();
}

function d() {
  let t = r();
  if (!t) return !1;
  return t.isRecording();
}

function p(t, o) {
  let e = r();
  if (!e) return !1;
  return e.startPlayback(t, o);
}

function f(t) {
  let o = r();
  if (!o) return;
  o.writePlaybackData(t);
}

function m() {
  let t = r();
  if (!t) return;
  t.stopPlayback();
}

function b() {
  let t = r();
  if (!t) return !1;
  return t.isPlaying();
}

function v() {
  let t = r();
  if (!t || !t.microphoneAuthorizationStatus) return 0;
  return t.microphoneAuthorizationStatus();
}

export { c as isNativeAudioAvailable, b as isNativePlaying, d as isNativeRecordingActive, v as microphoneAuthorizationStatus, p as startNativePlayback, l as startNativeRecording, m as stopNativePlayback, s as stopNativeRecording, f as writeNativePlaybackData };
