// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { DRt } from "./chunk-vfdna4pm.js";

import { ie, Lw } from "./chunk-yxennhe9.js";

import { pa } from "./chunk-g7z9901y.js";

var YGo = 3e4, mB = "bridge-failed", cZe = "disabled after repeated failures \xb7 restart to retry", A1r = "Remote Control not started here";

function XGo(t, {crossSessionMessaging: e}, r = new Date) {
  let n = t.startedAt > 0 && t.startedAt <= r.getTime() ? ` (started ${Lw(new Date(t.startedAt), {
    now: r
  })})` : "";
  return `${A1r} \xb7 another Claude Code on this machine${n} already has Remote Control for this conversation${e ? ", so this terminal can't see your sessions on other machines and they can't reach it" : ""} \xb7 run /remote-control to move it to this terminal`;
}

var C1r = 150;

function Jze() {
  let t = new Date, e = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0"), n = String(t.getSeconds()).padStart(2, "0");
  return `${e}:${r}:${n}`;
}

function rhn(t, e) {
  return `${DRt(void 0, e)}/code?environment=${t}`;
}

function R1r(t, e) {
  let r = e + 20;
  return e + 10 - t % r;
}

function q_t(t, e) {
  let r = ie(t), n = e - 1, i = e + 1;
  if (n >= r || i < 0) return {
    before: t,
    shimmer: "",
    after: ""
  };
  let g = Math.max(0, n), s = 0, c = "", a = "", l = "";
  for (let {segment: o} of pa().segment(t)) {
    let u = ie(o);
    if (s + u <= g) c += o; else if (s > i) l += o; else a += o;
    s += u;
  }
  return {
    before: c,
    shimmer: a,
    after: l
  };
}

var m = {
  label: "/rc failed",
  color: "error"
}, d = {
  label: "/rc reconnecting",
  color: "warning"
}, f = {
  label: "/rc active",
  color: "success"
}, p = {
  label: "/rc connecting\u2026",
  color: "warning"
};

function Qze({error: t, connected: e, sessionActive: r, reconnecting: n}) {
  if (t) return m;
  if (n) return d;
  if (r || e) return f;
  return p;
}

function Ejt(t) {
  return `Code anywhere with the Claude mobile app or ${t}`;
}

var JGo = "Or ask Claude to work in this folder from your projects on claude.ai";

function kjt(t) {
  return `Continue coding in the Claude mobile app or ${t}`;
}

var x1r = "Run /remote-control to retry";

function QGo(t, e) {
  return `\x1b]8;;${e}\x07${t}\x1b]8;;\x07`;
}

export { YGo, mB, cZe, A1r, XGo, C1r, Jze, rhn, R1r, q_t, Qze, Ejt, JGo, kjt, x1r, QGo };
