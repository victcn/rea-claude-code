// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { HG, QXe } from "./chunk-5brm0azz.js";

import { dct } from "./chunk-j4rs03r7.js";

import { p } from "./chunk-jkzenvsk.js";

import { Aft, z2n, VBe } from "./chunk-3kb22va7.js";

import { IB } from "./chunk-cmhrmmqh.js";

import { qpe, zPe, mBe } from "./chunk-xywp7esx.js";

import { o, T, u, $e, A } from "./chunk-cvcg6n1z.js";

var H = p(() => T($e([ o(), T($e([ u({
  type: A("text"),
  text: o()
}), u({
  type: o()
}) ])) ]))), N = 1e3;

function Zsr(e) {
  if (e == null) return {
    texts: []
  };
  if (Array.isArray(e)) {
    let a = e.length;
    for (let d = 0; d < e.length && a <= N; d++) {
      let l = e[d];
      if (Array.isArray(l)) a += l.length;
    }
    if (a > N) return {
      texts: [],
      problem: "too_many_items"
    };
  }
  let n = H().safeParse(e);
  if (!n.success) return {
    texts: [],
    problem: "malformed"
  };
  let r = !1, s = n.data.map(a => {
    if (typeof a === "string") return a;
    let d = [];
    for (let l of a) if (l.type === "text" && "text" in l && typeof l.text === "string") d.push(l.text); else r = !0;
    return d.join(`\n`);
  }).filter(a => a.trim() !== "");
  return r ? {
    texts: s,
    problem: "non_text_ignored"
  } : {
    texts: s
  };
}

var v = 100;

function GZo(e) {
  if (e == null) return {
    texts: []
  };
  if (!Array.isArray(e)) return {
    texts: [],
    problem: "malformed_inline_pastes"
  };
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (typeof s !== "string") return {
      texts: [],
      problem: "malformed_inline_pastes"
    };
    if (s.trim() === "") continue;
    if (n.length === v) return {
      texts: n,
      problem: "inline_pastes_cut"
    };
    n.push(s);
  }
  return {
    texts: n
  };
}

var B = new Set([ "ios", "android", "web_claude_ai", "desktop_app" ]);

function C(e) {
  return B.has(e) || !1;
}

function Eye(e) {
  return e !== void 0 && B.has(e);
}

function fCn(e) {
  return e === "claude_code_cli" || e === "claude_code_vscode";
}

function wJr(e, n) {
  if (n) return;
  return fCn(e) ? {
    kind: "human"
  } : void 0;
}

var b = new Set([ "scheduled_trigger", "force_run_trigger", "github_webhook_trigger", "fire_routine", "pr_steward" ]), K = new Set([ "trigger_fire" ]), Bnt = "session_inbox", w = new Set([ "github_webhook", "pr_steward", "signal_subscription" ]);

function VZo(e) {
  return e !== void 0 && (w.has(e) || e === Bnt);
}

var W = "projects-relay";

function vJr({relayMessageIds: e, isSynthetic: n}) {
  return e !== void 0 || n !== !0;
}

var z = "triggerFireReason";

function KZo(e, n) {
  if (e?.kind !== "task-notification" || e.subkind !== "scheduled-trigger") return e;
  let r = EJr(n);
  return r === void 0 ? e : {
    ...e,
    fireReason: r
  };
}

function y(e) {
  if (e && K.has(e)) return {
    kind: "task-notification",
    subkind: "scheduled-trigger"
  };
  if (e === Bnt) return {
    kind: "task-notification",
    subkind: "session-inbox"
  };
  return {
    kind: "task-notification"
  };
}

var Y = new Set([ "scheduled_trigger", "force_run_trigger", "fire_routine" ]);

function EJr(e) {
  return k(e, z);
}

function E4t(e, n, r, s) {
  if (e === "now") return e;
  let a = r !== void 0 && X.has(r) && (r !== "trigger_fire" || s !== void 0);
  return n && Y.has(n) || a ? "later" : e;
}

var L = new Set([ "claude-in-slack", "claude_in_slack" ]), M = "slack_human", D = new Set([ zPe ]), U = "claude-in-teams", G = "teams_human", Q = "owner_relay", I = "hearth_human";

function mCn(e) {
  return e === I;
}

function k4t(e) {
  return e === I || e === mBe;
}

function V(e) {
  if (e === I || e === mBe) return !0;
  return e !== void 0 && e.startsWith("hearth");
}

var X = new Set([ "trigger_fire", "plugin_fire" ]), q = "receiver_grouping_id";

function kJr(e) {
  return k(e, q);
}

function k(e, n) {
  let r = e[n];
  return typeof r === "string" ? r : void 0;
}

var J = "activity_observation";

function TJr(e) {
  return k(e, J);
}

function F() {
  return HG();
}

function Z() {
  return QXe();
}

function ee(e, n) {
  return e !== void 0 && L.has(e) && n === M && F();
}

function ne(e, n) {
  return e === U && n === G && Z();
}

function lde(e, n) {
  return ee(e, n) || ne(e, n);
}

function x(e, n) {
  return n === void 0 && e !== void 0 && C(e) || lde(e, n);
}

function gCn(e, n, r) {
  return e ? e.kind === "human" : x(n, r);
}

function qZo(e, n, r, s) {
  if (e) return e.kind === "human";
  if (!n) return !0;
  return x(r, s) || wJr(r, s) !== void 0;
}

function hCn(e, n, r = !1) {
  let s;
  try {
    s = eKe(e);
  } catch {
    return !1;
  }
  if (!s || skt(s.content)) return !1;
  let {clientPlatform: a, inboundOrigin: d} = s;
  if (d !== void 0) return n === "bridge" ? lde(a, d) : jnt(d, r);
  return x(a, void 0) || n === "remote-worker" && fCn(a);
}

function jnt(e, n = !1) {
  return e === M || e === G || e === Q || n && e === I;
}

function yCn({isRelayHuman: e, isSynthetic: n, ccrTurnId: r, isProjectsUser: s = !1}) {
  if (!e) return {};
  return {
    ...!n && {
      verifiedSlackHumanTurn: !0
    },
    ...!n && s && {
      projectsUserTurn: !0
    },
    ...r !== void 0 && {
      ccrTurnId: r
    }
  };
}

function T4t(e, n, r, s, a, d, l) {
  let m = skt(e);
  if (m) return {
    kind: "peer",
    from: m,
    inbound_origin: r,
    ...l !== void 0 && {
      plugin: l
    },
    ...VBe(e)
  };
  if (r === Bnt) return y(r);
  if (r && w.has(r)) return y(r);
  let _ = V(r);
  if (!_ && r === void 0 && n && C(n)) return {
    kind: "human"
  };
  if (!_ && lde(n, r)) return {
    kind: "human"
  };
  if (!_ && n && b.has(n)) return y(r);
  if (r === qpe && s) return {
    kind: "task-notification",
    subkind: "peer-send-message"
  };
  t(`[bridge] demoting unwrapped inbound message to peer origin: client_platform=${n || "(absent)"}`, {
    level: "warn"
  });
  let S = !n ? "absent" : n.startsWith("claude_code") ? "claude_code" : L.has(n) ? r === zPe && F() ? "slack_bot_observation" : "slack_relay" : n === U ? "teams_relay" : "other";
  return i("tengu_bridge_ingress_demoted", {
    platform_class: c(S)
  }), {
    kind: "peer",
    from: "unknown",
    inbound_origin: r,
    ...VBe(e),
    ...d !== void 0 && r !== void 0 && D.has(r) && {
      activityObservation: d
    }
  };
}

function QVe(e, n, r) {
  if (e && e.kind !== "peer" && e.kind !== "slack-ping") return e;
  if (n && b.has(n)) return y(r);
  if (n && C(n)) return {
    kind: "human"
  };
  return;
}

function AJr(e, n, r, s, a, d = !1, l = !1, m) {
  let _ = skt(e);
  if (_) return {
    kind: "peer",
    from: _,
    inbound_origin: r,
    ...VBe(e),
    ...m !== void 0 && {
      plugin: m
    }
  };
  if (r && !D.has(r)) {
    if (r === I) if (d) g("bridge_projects_human_origin"); else f("bridge_projects_human_origin", "disabled_by_flag");
    if (jnt(r, d)) return {
      kind: "human"
    };
    if (r === mBe && l) return {
      kind: "task-notification",
      subkind: W
    };
    if (r === qpe && s) return {
      kind: "task-notification",
      subkind: "peer-send-message"
    };
    return y(r);
  }
  if (fCn(n)) return {
    kind: "human"
  };
  if (n?.startsWith("claude_code")) return;
  return T4t(e, n, r, s, void 0, a, m);
}

function ZVe(e) {
  return e.verifiedSlackHumanTurn === !0 && e.priority !== "now";
}

function YZo(e, n) {
  if (e === "now") return e;
  return n ? "later" : e;
}

function kye(e) {
  let s = e.trimStart(), a = !1;
  while (s.startsWith("<system-reminder>")) {
    let l = s.indexOf("</system-reminder>");
    if (l < 0) break;
    s = s.slice(l + 18).trimStart(), a = !0;
  }
  let d = (a ? s : e).trimEnd();
  while (d.endsWith("</system-reminder>")) {
    let l = d.lastIndexOf(`\n`);
    if (!(l < 0 ? d : d.slice(l + 1)).startsWith("<system-reminder>")) break;
    d = (l < 0 ? "" : d.slice(0, l)).trimEnd(), a = !0;
  }
  if (!a) return e;
  return d === "" ? e : d;
}

function CJr(e) {
  let n;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s.type !== "text") continue;
    let a = kye(s.text);
    if (a === s.text) continue;
    n ??= [ ...e ], n[r] = {
      ...s,
      text: a
    };
  }
  return n ?? e;
}

function eKe(e) {
  if (e.type !== "user") return;
  let n = "pasted_content" in e ? e.pasted_content : void 0, r = "inline_pastes" in e ? e.inline_pastes : void 0, s = IB(e).length > 0 || Zsr(n).texts.length > 0, a = e.message?.content;
  if (!a && !s) return;
  if (Array.isArray(a) && a.length === 0 && !s) return;
  let d = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0, l = k(e, "client_platform"), m = k(e, "inbound_origin"), _ = kJr(e), S = TJr(e), E = Aft("from_plugin" in e ? e.from_plugin : void 0), j, h = Array.isArray(a) ? RJr(CJr(re(a))) : kye(a ?? "");
  if (Array.isArray(h) && h.length === 0 && !s) return;
  return {
    content: h,
    uuid: d,
    clientPlatform: l,
    inboundOrigin: m,
    receiverGroupingId: _,
    slackOrigin: j,
    activityObservation: S,
    pastedContent: n,
    inlinePastes: r,
    fromPlugin: E
  };
}

function skt(e) {
  if (typeof e !== "string") return;
  return e.match(z2n)?.[1];
}

function f0e(e) {
  if (typeof e === "string") return skt(e) !== void 0;
  if (!Array.isArray(e)) return !1;
  return e.some(n => typeof n === "object" && n !== null && "type" in n && n.type === "text" && "text" in n && typeof n.text === "string" && skt(n.text) !== void 0);
}

function RJr(e) {
  if (!e.some(O)) return e;
  return e.filter(n => !O(n));
}

function O(e) {
  if (e.type !== "text") return !1;
  return typeof e.text !== "string" || e.text.trim() === "";
}

function re(e) {
  if (!e.some(P)) return e;
  return e.map(n => {
    if (!P(n)) return n;
    let r = n.source, s = typeof r.mediaType === "string" && r.mediaType ? r.mediaType : dct(n.source.data);
    return {
      ...n,
      source: {
        type: "base64",
        media_type: s,
        data: n.source.data
      }
    };
  });
}

function P(e) {
  if (e.type !== "image" || e.source?.type !== "base64") return !1;
  return !e.source.media_type;
}

export { Zsr, GZo, Eye, fCn, wJr, Bnt, VZo, vJr, KZo, EJr, E4t, mCn, k4t, kJr, TJr, lde, gCn, qZo, hCn, jnt, yCn, T4t, QVe, AJr, ZVe, YZo, kye, CJr, eKe, skt, f0e, RJr };
