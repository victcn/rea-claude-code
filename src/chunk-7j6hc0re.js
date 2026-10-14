// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { QOt, gyo, Vue } from "./chunk-jc5888qn.js";

import { w } from "./chunk-9rj1xaxr.js";

import { L$ } from "./chunk-21wknh1p.js";

import { fM } from "./chunk-kawq2919.js";

import { l_, isn, Yh } from "./chunk-3kb22va7.js";

import { s, n } from "./chunk-3vw306fv.js";

import { tl } from "./chunk-m3evanyp.js";

import { te } from "./chunk-48xcyvwy.js";

import { CI, Mte } from "./chunk-wbnr41xb.js";

import { mze, Iq, Cx } from "./chunk-78kj815g.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { S } from "./chunk-m8ez8fhk.js";

var k = "</cross-session-message>", L = "peer";

function v(i) {
  let a = Vue.find(d => i.startsWith(d)), l = (a ? i.slice(a.length) : i).match(/^<cross-session-message\b([^>]*)>/)?.[1] ?? "", g = l.match(/\bfrom="([^"]+)"/)?.[1], c = l.match(/\bfrom-name="([^"]+)"/)?.[1];
  return J(c, g);
}

function J(i, a) {
  return i && l_(i) || a && l_(ee(a)) || L;
}

function T(i, a) {
  let o = i, l = Vue.find(c => o.startsWith(c));
  if (l) o = o.slice(l.length);
  let g = o.lastIndexOf(k) + k.length;
  if (g > k.length - 1) {
    let c = o.slice(g);
    if (QOt.includes(c) || a && gyo.includes(c)) o = o.slice(0, g);
  }
  return o.replace(/^<cross-session-message[^>]*>\n/, "").replace(/\n<\/cross-session-message>$/, "");
}

function K$r(i, a) {
  let o = T(i, a), l = fM(o, " ", {
    keepEmojiJoiners: !0
  }).replace(/\s+/g, " ").trim();
  return isn(o) !== l;
}

function qBs(i) {
  let m = w(22), {addMargin: a, param: o, hostInjected: l, verbose: g, isTranscriptMode: c, messageId: d, origin: t, followsSpeakerLabel: p} = i, {text: f} = o, u = p === void 0 ? !1 : p, y = L$(g, c), x;
  if (m[0] !== f) x = v(f), m[0] = f, m[1] = x; else x = m[1];
  let b = x, W;
  if (m[2] !== t) W = t?.kind === "peer" && t.plugin !== void 0 ? l_(t.plugin) : "", 
  m[2] = t, m[3] = W; else W = m[3];
  let E = W;
  const _ = l === !0;
  let h;
  if (m[4] !== _ || m[5] !== f) h = T(f, _), m[4] = _, m[5] = f, m[6] = h; else h = m[6];
  const O = y || u;
  let P;
  if (m[7] !== b) P = {
    name: b
  }, m[7] = b, m[8] = P; else P = m[8];
  let M;
  if (m[9] !== a || m[10] !== b || m[11] !== y || m[12] !== u || m[13] !== E) M = oe => e(R, {
    addMargin: a,
    displayName: b,
    senderPlugin: E,
    expanded: y,
    followsSpeakerLabel: u,
    body: oe
  }), m[9] = a, m[10] = b, m[11] = y, m[12] = u, m[13] = E, m[14] = M; else M = m[14];
  let F;
  if (m[15] !== d || m[16] !== t || m[17] !== h || m[18] !== O || m[19] !== P || m[20] !== M) F = {
    messageId: d,
    stored: t,
    text: h,
    isExpanded: O,
    sender: P,
    draw: M
  }, m[15] = d, m[16] = t, m[17] = h, m[18] = O, m[19] = P, m[20] = M, m[21] = F; else F = m[21];
  return Iq.useUserMessageSite(F);
}

function R(i) {
  let t = w(19), {addMargin: a, displayName: o, senderPlugin: l, expanded: g, followsSpeakerLabel: c, body: d} = i;
  if (c) {
    let p;
    if (t[0] !== d) p = e(Cx, {
      text: d
    }), t[0] = d, t[1] = p; else p = t[1];
    return p;
  }
  if (!g) {
    let p;
    if (t[2] !== a || t[3] !== d || t[4] !== o) p = e(Mte, {
      displayName: o,
      addMargin: a,
      fallbackLabel: L,
      body: d
    }), t[2] = a, t[3] = d, t[4] = o, t[5] = p; else p = t[5];
    return p;
  }
  const p = a ? 1 : 0;
  let f;
  if (t[6] === S) f = CI(void 0), t[6] = f; else f = t[6];
  let u;
  if (t[7] !== l) u = l ? r(n, {
    dimColor: !0,
    children: [ " <", l, " plugin", ">" ]
  }) : null, t[7] = l, t[8] = u; else u = t[8];
  let y;
  if (t[9] === S) y = e(n, {
    "aria-hidden": !0,
    children: te.pointer
  }), t[9] = y; else y = t[9];
  let m;
  if (t[10] !== o || t[11] !== u) m = r(n, {
    color: f,
    children: [ "@ ", o, u, y ]
  }), t[10] = o, t[11] = u, t[12] = m; else m = t[12];
  let x;
  if (t[13] !== d) x = e(s, {
    paddingLeft: 2,
    children: e(tl, {
      stripPromptTags: !1,
      children: d
    })
  }), t[13] = d, t[14] = x; else x = t[14];
  let b;
  if (t[15] !== p || t[16] !== m || t[17] !== x) b = r(s, {
    flexDirection: "column",
    marginTop: p,
    width: "100%",
    children: [ m, x ]
  }), t[15] = p, t[16] = m, t[17] = x, t[18] = b; else b = t[18];
  return b;
}

function ee(i) {
  let {scheme: a, target: o} = Yh(i);
  switch (a) {
   case "uds":
    return o.slice(Math.max(o.lastIndexOf("/"), o.lastIndexOf("\\")) + 1).replace(/\.sock$/, "");

   case "bridge":
    return "(untitled)";

   case "did":
   case "other":
    return i;
  }
}

export { K$r, qBs };
