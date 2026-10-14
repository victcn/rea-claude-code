// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { _ } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { ezn, QT, eA, DH, Y1, Prn, vpt, Ss, Mpt } from "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import { m } from "./chunk-3ykz5st8.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { Jr, UH, Qs } from "./chunk-s2t7g8m9.js";

import { fn, a_, ij } from "./chunk-f1zpf9me.js";

import { lk } from "./chunk-ann91fyn.js";

import { wt } from "./chunk-hk8p0fqv.js";

import { kg, Qb, Gdt, dh, de } from "./chunk-5ydr99q3.js";

import { Ew, pct, dK, lTs, GSe, dTs, d_o, I6e, fct, cMt, Y8, O6e, VT, GY, x0, lC } from "./chunk-bdevabaf.js";

import { XEt, iQ, eF } from "./chunk-btyj9pkf.js";

import { lAe } from "./chunk-xshzkngt.js";

import { $7o } from "./chunk-exeqjnzg.js";

import { l4, wDe, Op, OM, ivt, MTe, Nle } from "./chunk-rvrh1zgk.js";

import { por } from "./chunk-zrv408vj.js";

import { aXo, dXo, wEn, vEn } from "./chunk-f2w6pzz6.js";

import { L } from "./chunk-vh1p9t2h.js";

import { ye } from "./chunk-ne9evs39.js";

var Q = "__artifactAsk", Z = [ "Claude wants to upload a file to this artifact.", "Claude wants to copy files from another artifact into this one.", "Claude wants to edit this artifact's data." ], X = 64, rXo = 3;

function ne(e) {
  return e.length <= 2 ? e.join(" and ") : `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}

var N = /"[^"]*"/g, F = "Let Claude read the comments on ";

function oXo(e) {
  return `${F}${e ? `"${e}"` : "this artifact"}?`;
}

function te(e) {
  if (!e.startsWith(F)) return;
  for (let n of e.matchAll(new RegExp(`${N.source}|\\?(?=\\s)`, "g"))) if (n[0] === "?") return n.index + 1;
  return;
}

function S(e) {
  try {
    return e === void 0 ? void 0 : por(e);
  } catch {
    return;
  }
}

function gEn(e, n, t) {
  let s = ee().askCards.get(n);
  if (s === void 0 || s.reason !== t || S(e) !== s.input) return;
  return s.card;
}

function sXo(e, n = t => t) {
  let {request: t, script: s, text: r, documents: d, files: a, file: u, source: l} = e, p = [];
  if (L(t) && typeof t.method === "string" && typeof t.path === "string") {
    let g = L(t.query) ? new URLSearchParams(Object.entries(t.query).flatMap(([h, o]) => {
      let k = typeof o === "string" ? o : _(o);
      return k === void 0 ? [] : [ [ h, k ] ];
    })).toString() : "", f = n(g === "" ? t.path : `${t.path}?${g}`);
    if (/^[A-Za-z]{1,16}$/.test(t.method) && /^[^\s\p{Cc}]+$/u.test(f)) {
      if (p.push(`${t.method.toUpperCase()} ${f}`), t.body !== void 0) p.push(`Request body \xb7 ${E(j(t.body))}`);
    }
  }
  for (let g of [ s, r ]) if (typeof g === "string" && g.trim() !== "") {
    let [f = "", ...h] = x(g.trim());
    p.push(`${E(h.length + 1)} \xb7 ${f}`);
  }
  if (d !== void 0) p.push(`${d} ${I(d, "document")}`);
  if (a !== void 0) {
    let g = a.count - a.names.length, f = a.names.map(o => `"${o}"`), h = ne(g > 0 ? [ ...f, `${g} more` ] : f);
    p.push(`${a.count} ${I(a.count, "file")} \xb7 ${h}`);
  }
  if (l !== void 0) p.push(`source: ${l}`);
  if (u !== void 0) p.push(`file: ${u}`);
  return p;
}

function j(e, n = new WeakSet) {
  if (typeof e === "string") return x(e).length;
  if (typeof e !== "object" || e === null || n.has(e)) return 1;
  n.add(e);
  let t = Array.isArray(e) ? e : Object.values(e);
  return t.length === 0 ? 1 : t.reduce((s, r) => s + (typeof r === "string" ? 1 : j(r, n)), 2);
}

function x(e) {
  return e.split(/\r\n|[\r\n\u2028\u2029]/);
}

function E(e) {
  return `${e} ${e === 1 ? "line" : "lines"}`;
}

function se(e, n, t, s = ee().askCardFacts.get(e)) {
  let r = ee(), d = r.askClassCards.get(e), a = s?.target, u = s?.values ?? [], l = s?.audience ?? "";
  if (r.askClassCards.delete(e), r.askCardFacts.delete(e), s === void 0 || s.generic === !0 || n.behavior !== "ask" || n.decisionReason?.type !== "safetyCheck" && n.decisionReason?.type !== "other" || n.decisionReason.reason.trim() === "") return;
  let p = n.decisionReason.reason, g = p.indexOf(`\n\n`), f = g === -1 ? p : p.slice(0, g), h = g === -1 ? [] : p.slice(g + 2).split(`\n`).filter(C => C !== ""), o = n.updatedInput ?? t, k = L(o) ? o[Q] : void 0, y;
  if (k === void 0) {
    let b = Z.find(T => f.startsWith(T))?.length ?? te(f), A = b === void 0 ? f : f.slice(0, b), D = b === void 0 ? "" : f.slice(b).trim(), v = a?.title ?? "", P = v !== "" ? `"${v}"` : a?.url, R = [], U = T => h.some(J => J.endsWith(T));
    if (P !== void 0 && !A.includes(P) && !U(P)) R.push(P);
    let O = a?.url;
    if (s?.foreign === !0 && O !== void 0 && !A.includes(O) && !R.includes(O) && !U(O)) R.push(O);
    if (D !== "") R.push(D);
    let Y = l === "" || f.replace(N, "").includes(l);
    y = {
      question: A,
      lines: R,
      values: [ ...h, ...Y ? u : [ ...u, l ] ]
    };
  } else if (d !== void 0 && d.reason === f && S(k) === d.stamp) {
    let [C, ...b] = d.parts, A = l === "" || d.saysPublic;
    y = C === void 0 ? void 0 : {
      question: C,
      lines: b,
      values: A ? u : [ ...u, l ]
    };
  }
  let w = S(o);
  if (w !== void 0 && y !== void 0) Dle(r.askCards, e, {
    input: w,
    card: y,
    reason: p
  });
}

function iXo(e, n) {
  let t = e.checkPermissions;
  return enr(e, {
    async checkPermissions(s, r) {
      let d = await t.call(this, s, r), a = r.toolUseId, u = d.behavior === "ask" ? d.updatedInput ?? s : null;
      if (a !== void 0 && L(u)) {
        let l;
        try {
          l = n(u, r);
        } catch {
          l = {
            values: [],
            generic: !0
          };
        }
        Dle(ee().askCardFacts, a, l);
      }
      return d;
    }
  });
}

function hEn(e) {
  let n = e.checkPermissions;
  return enr(e, {
    async checkPermissions(t, s) {
      let r = s.toolUseId;
      if (r !== void 0) {
        let a = ee();
        a.askCards.delete(r), a.askClassCards.delete(r), a.askCardFacts.delete(r);
      }
      let d = await n.call(this, t, s);
      if (r !== void 0) se(r, d, t);
      return d;
    }
  });
}

function Dle(e, n, t) {
  if (e.delete(n), e.set(n, t), e.size > X) {
    let s = e.keys().next().value;
    if (s !== void 0) e.delete(s);
  }
}

function enr(e, n) {
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(n));
}

function tnr(e, n) {
  let t = wt(e);
  return n.toolUseId !== void 0 && t?.lastProbeToolUseId === n.toolUseId ? Ywt(t) : {
    owned: void 0,
    public: void 0,
    outsideOrg: x0(t) || W(),
    invitedByOtherOrg: t?.external === !0
  };
}

function Ywt(e) {
  let n = e?.external === !0;
  if (e === void 0 || e.probeFailed === !0) return {
    owned: void 0,
    public: void 0,
    outsideOrg: x0(e) || W(),
    invitedByOtherOrg: n
  };
  let t = e.mode === "unknown" ? void 0 : e.mode === "public", s = x0(e);
  if (e.role === void 0) return {
    owned: t === !0 ? !1 : void 0,
    public: t,
    outsideOrg: s,
    invitedByOtherOrg: n
  };
  return {
    owned: e.role === "unknown" ? void 0 : e.role === "owner",
    public: t,
    outsideOrg: s,
    invitedByOtherOrg: n,
    ...(e.role === "owner" || e.role === "writer") && {
      canWrite: !0
    }
  };
}

function W() {
  return lk() ? void 0 : !1;
}

function QC(e, n, t) {
  let s = tnr(n.slug, t);
  return {
    operation: e,
    artifactId: n.slug,
    owned: s.owned,
    public: s.public,
    outsideOrg: s.outsideOrg,
    invitedByOtherOrg: s.invitedByOtherOrg,
    networkOff: Xwt(n),
    turnStartedByHuman: DH(t.messages),
    ...s.canWrite === !0 && {
      canWrite: !0
    }
  };
}

var oe = new Set([ "scheduled", "retry", "catch_up", "manual" ]);

function M(e) {
  return e?.kind === "task-notification" && e.subkind === "scheduled-trigger" && e.fireReason !== void 0 && oe.has(e.fireReason);
}

function ytt(e) {
  if (q(e)) return !1;
  if (!M(Y1(e.messages).decider?.origin)) return !1;
  let n = ee();
  if (!n.routineRunTainted && !Prn(e.messages, (t, s) => eA(s) || M(t))) n.routineRunTainted = !0;
  return !n.routineRunTainted;
}

function nnr() {
  if (Mpt() !== void 0) return !1;
  if (Jr()) return iQ() && re() && ezn();
  return !UH() && VT() && Oe() === "firstParty" && QT() === "env";
}

function B() {
  return XEt("POST", "/api/frame/deploy/direct");
}

function K(e) {
  return ee().frameRelay.servedUntil.get(e) ?? 0;
}

function re() {
  let e = B();
  if (e === null || eF(e)) return !1;
  let n = ee().routineRelayNotCarried;
  return n === null || K(e) > n.servedUntil;
}

function bYr() {
  let e = B();
  ee().routineRelayNotCarried = {
    servedUntil: e === null ? 0 : K(e)
  };
}

function q(e) {
  let {mode: n, modeBeforeRewrite: t} = de(e);
  return Qs(n) || t !== void 0 && Qs(t);
}

function _tt(e, n) {
  if (q(e)) return !1;
  let {messages: t} = e, s = Y1(t).decider;
  if (s === null || t[s.index]?.type !== "user" || s.origin?.kind !== "task-notification") return !1;
  let r = s.index;
  for (;r > 0; r--) {
    let a = t[r - 1];
    if (a == null || a.type === "assistant" || a.type === "user" && !vpt(a) && a.origin?.kind !== "task-notification") break;
  }
  let d = t.slice(r);
  return Prn(d, (a, u) => u.type === "user" && a?.kind === "task-notification" && a.subkind === void 0 && aXo(u.uuid) === n) && ie(d, n);
}

function ie(e, n) {
  let t = e[0] === void 0 ? NaN : Date.parse(e[0].timestamp), s = vEn();
  if (s !== void 0 && !(Number.isFinite(t) && s < t)) return !1;
  if (wEn(n, t)) return !1;
  let r = !1;
  for (let d of e) {
    if (d?.type !== "assistant" || !Array.isArray(d.message.content)) continue;
    for (let a of d.message.content) if (a.type === "tool_use" && ae(a.name, a.input)) {
      let u = dXo(a.id);
      if (u?.ownWordsOnly !== !0 || u.slug !== n) return !1;
      r = !0;
    }
  }
  return r;
}

function ae(e, n) {
  let t = e === a_ ? lAe("comments", n) : e === fn ? n : void 0;
  return typeof t === "object" && t !== null && "action" in t && t.action === "comments";
}

var SDe = !0;

function P2(e, n) {
  return e.ask && e.basis === "unattended" || SDe && de(n).mode === "plan";
}

var rnr = !0;

function bB(e) {
  return rnr && de(e).mode === "plan";
}

function OTe(e, n, t, s, r = () => Ew(QC("read", n, e))) {
  return !t && s && !bB(e) ? r() : null;
}

function H(e) {
  return VT() && dh(e);
}

function Ene(e, n, t) {
  let s = H(e) && !DH(e.messages);
  if (!s && !Qb(e)) return null;
  let r = t.endsWith(".") ? t : `${t}.`;
  return {
    behavior: "deny",
    message: `${n}. This needs a yes to: ${r} ${s ? "No one can answer that prompt in this Cowork session, and this turn was not started by the user's own message \u2014 tell the user in chat; do not retry it on this turn." : "No one can answer that prompt from plan mode in this session \u2014 keep planning in the plan file and raise it with the user in chat; do not retry while plan mode is on."}`,
    decisionReason: {
      type: "safetyCheck",
      reason: s ? "Artifact call with a new-comments notice pending, on a turn the user's own message did not start, in a Cowork session that has no one to answer its prompt" : "Notification-triggered artifact call in plan mode has no one to answer its prompt",
      classifierApprovable: !1
    }
  };
}

function Dhe(e, n, t) {
  if (!onr(e, t)) return null;
  return {
    behavior: "deny",
    message: `${n}. Reading content of an artifact the user does not own, or whose ownership couldn't be confirmed, needs a person's yes, and no one can answer the prompt in this session \u2014 tell the user in chat instead of retrying.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "Reading content of an artifact that is not confirmed to be the user's own requires a live human consent surface in this session",
      classifierApprovable: !1
    }
  };
}

function onr(e, n) {
  return dh(e) && (VT() || n);
}

function Xwt(e) {
  return $7o(e?.env);
}

var G = "this artifact", ue = "no one was asked first \u2014 nothing was returned; retry the same action so the user is asked", le = "no one can be asked about it in this session \u2014 nothing was returned; do not retry it here", ce = "a PermissionRequest hook answered the permission prompt in the user's place; only the user's own approval allows this read \u2014 nothing was returned; do not retry it here, and tell the user their hook answered for them (to approve it themselves they would narrow the hook so it no longer answers this prompt)";

function btt(e, n, t, s) {
  if (ke(n, t)) return !0;
  if (Y8(Gdt(n), s === "page" ? "artifactReadConsentSlugs" : "artifactAssetReadHumanConsentSlugs", t)) return !0;
  if (dh(n) || Nle(n)) return !1;
  return wDe(e, n) || !Qs(de(n).mode) && !fe(e) && l4(e, n);
}

function z(e) {
  let n = e.toolUseId === void 0 ? void 0 : e.toolDecisions?.get(e.toolUseId);
  return n?.source === "hook" && n.decision !== "reject";
}

function Jwt(e, n = !1, t) {
  let s = z(e), r = n ? !kg(e) || dh(e) && !Qs(de(e).mode) : dh(e);
  if (!n) return `this turned out to be a public artifact from outside your organization, and ${r ? le : s ? ce : ue}`;
  let d = t === void 0 ? "nothing was copied" : "nothing was published", a = t === void 0 ? "Retry the same action so that question is asked." : t.retryUrl !== void 0 ? `Retry publishing with url: ${_(t.retryUrl)} so that question is asked.` : "Retry the same publish so that question is asked.";
  return r ? `the source artifact belongs to another organization and nobody can be asked about copying from it in this session, so ${d}. Don't retry it here.` : `the source artifact belongs to another organization and nobody was asked whether to copy from another organization's artifact, so ${d}. ${a}`;
}

function yEn(e, n, t) {
  return lC(wt(n)) && (t || snr(e, n));
}

function snr(e, n) {
  return d_o(n) || Y8(Gdt(e), "artifactOutsideOrgConsentSlugs", n);
}

function fe(e) {
  let n = Reflect.get(e, OM);
  return typeof n === "object" && n !== null && Reflect.get(n, "classifier") === !0;
}

var _En = "This artifact was created outside your organization.";

function bEn(e, n, t) {
  let s = ij(n), r = s ? `"${s}"` : G, d = s ? `"${s}"` : "This artifact", a = `Let Claude read it${t ? ` and ${t}` : ""}?`;
  switch (e) {
   case "someone_else":
    return `${d} was made by someone else. ${a}`;

   case "unknown":
    return `Claude couldn't check who made ${r}. ${a}`;

   case "cowritten":
    return `Other people can edit ${r}. ${a}`;

   case "from_type":
    return `${d} was made from someone else's artifact type. ${a}`;
  }
}

function SYr(e) {
  return `Approving covers its files${e ? ", and copying them into other artifacts," : ""} for the rest of the conversation.`;
}

function pe(e, n, t) {
  let s = ge(e, n, t);
  if (e.remember !== "artifact") return s;
  let r = GY() ? "task" : "conversation";
  return s.replace(/\?$/, ` for the rest of this ${r}?`);
}

function V(e) {
  return e.class === "public_change" && e.basis !== "unattended" && e.about !== "someone_else" && e.missing !== "public";
}

function ge(e, n, t) {
  let s = ij(n), r = s ? `"${s}"` : G, d = s ? `"${s}"` : "This artifact";
  switch (e.class) {
   case "delete":
    return `Permanently delete ${s || t === void 0 ? r : t}?`;

   case "public_change":
    if (V(e)) return `${d} is public. Allow Claude to change it?`;
    if (e.basis === "unattended") return `Allow Claude to change ${r}?`;
    if (e.about === "someone_else") return e.missing === "owned" ? `Claude couldn't check who made ${r}. Allow Claude to change it?` : `${d} was made by someone else. Allow Claude to change it?`;
    return `Claude couldn't check who can see ${r}. Allow Claude to change it?`;

   case "access_change":
    return `Allow Claude to change who can open or comment on ${r}?`;

   case "standing_job":
    return `Allow Claude to keep replying to comments on ${r}?`;

   case "foreign_read":
    return bEn(e.missing === "owned" ? "unknown" : "someone_else", n);
  }
}

function me(e) {
  return e.about === "outside_org" ? _En : void 0;
}

function GL(e) {
  return D2e(e.input, e.context, [ e ]);
}

function D2e(e, n, t) {
  if (n.toolUseId !== void 0) ee().askClassPending.delete(n.toolUseId), ee().askClassCards.delete(n.toolUseId);
  let s = [];
  for (let o of t) if (!o.ruling.ask) {
    if (o.ruling.foreignRead) Zwt(o.action, o.slug, o.ownerAccountId, o.ruling.attested);
  } else if (o.ruling.remember !== "artifact" || !(o.consentHeld ?? GSe(o.ruling, o.slug, o.userOnly === !0)) || o.heldYesDoesNotCover === !0) s.push({
    ...o,
    ruling: o.ruling
  });
  if (s.length === 0) return {
    behavior: "allow",
    updatedInput: {
      ...e,
      [Op]: !1
    }
  };
  let r = o => o.ruling.answeredBy === "person" || o.userOnly === !0;
  s.sort((o, k) => Number(r(k)) - Number(r(o)));
  let d = s.some(r), a = s.map(o => ({
    display: o.display,
    question: pe(o.ruling, o.display.title, o.display.url),
    note: me(o.ruling),
    linked: o.ruling.class === "foreign_read" || o.ruling.about === "someone_else" || o.ruling.missing === "owned",
    reach: o.note
  })), u = a.flatMap(o => o.reach === void 0 ? [ o.question ] : [ o.question, o.reach ]).join(" ");
  if (d ? dh(n) : Qb(n) || s.some(o => o.ruling.class === "foreign_read") && H(n)) return {
    behavior: "deny",
    message: `Nothing was done. This needs a yes to: ${a.map(o => o.question).join(" ")} No one can answer in this session.`,
    decisionReason: {
      type: "safetyCheck",
      reason: `Artifact ${s.map(o => o.ruling.class).join(", ")} ask has no one to answer it`,
      classifierApprovable: !1
    }
  };
  let p = kg(n), g = O6e(), f = s.map(o => ({
    class: o.ruling.class,
    remember: o.ruling.remember,
    ...o.ruling.endpoint && {
      endpoint: !0
    },
    slug: o.slug,
    url: o.display.url,
    ...o.display.title !== void 0 && {
      title: o.display.title
    },
    reachable: p,
    askedIn: g
  }));
  I6e(n, s.filter(o => "about" in o.ruling && o.ruling.about === "outside_org" && !o.ruling.endpoint).map(o => o.slug), p);
  let h = f.length === 1 ? f[0] : f;
  if (n.toolUseId !== void 0) {
    if (Dle(ee().askClassPending, n.toolUseId, f), d) Dle(ee().askClassPersonAsked, n.toolUseId, !0); else ee().askClassPersonAsked.delete(n.toolUseId);
    if (Qs(de(n).mode)) ee().askClassNoClassifier.delete(n.toolUseId); else Dle(ee().askClassNoClassifier, n.toolUseId, !0);
    let o = S(h);
    if (o !== void 0) {
      let k = a.flatMap(({display: y, question: w, note: C, linked: b, reach: A}) => [ w, ...C === void 0 ? [] : [ C ], ...w.includes(y.url) || !b && ij(y.title) ? [] : [ y.url ], ...A === void 0 ? [] : [ A ] ]);
      Dle(ee().askClassCards, n.toolUseId, {
        stamp: o,
        parts: k,
        saysPublic: s.some(y => V(y.ruling)),
        reason: u
      });
    }
  }
  return {
    behavior: "ask",
    message: u,
    updatedInput: {
      ...e,
      [Op]: !1,
      [ivt]: h
    },
    ...s.some(o => o.ruling.class === "delete" || o.ruling.class === "access_change") && {
      defaultToNo: !0
    },
    ...s.some(o => o.ruling.class === "access_change") && {
      personOnly: !0
    },
    suppressAlwaysAllowRule: !0,
    localDisplayOnly: !0,
    decisionReason: {
      type: "safetyCheck",
      reason: u,
      classifierApprovable: !d
    }
  };
}

function wYr(e) {
  if (e.toolUseId === void 0) return;
  let n = ee(), t = n.askClassPending, s = t.get(e.toolUseId) ?? [];
  t.delete(e.toolUseId);
  let r = n.askClassPersonAsked.get(e.toolUseId);
  n.askClassPersonAsked.delete(e.toolUseId);
  let d = n.askClassNoClassifier.get(e.toolUseId);
  n.askClassNoClassifier.delete(e.toolUseId);
  let a = MTe(e), u = !dh(e) && !Nle(e) && (a || r === !0 || d === !0 && !Qs(de(e).mode));
  if (s[0]?.reachable !== !0 || s[0].askedIn !== O6e() || !kg(e)) return;
  if (Dle(n.askClassTaken, e.toolUseId, s), u) Dle(n.askClassTakenByPerson, e.toolUseId, !0);
  if (Ss(e.agentContext)) return;
  for (let l of s) if (l.remember === "artifact" && (a || !l.endpoint)) {
    if (lTs(pct(l), l.slug, u), !l.endpoint && fct(e, l.slug) && (u || r !== !0 && !z(e))) dTs(l.slug);
  }
}

function vYr(e, n, t) {
  return he(e, n, t);
}

function he(e, n, t) {
  let s = e.toolUseId === void 0 ? void 0 : ee().askClassTaken.get(e.toolUseId);
  return s !== void 0 && s.some(r => pct(r) === n && r.slug === t && r.remember === "artifact") && dK(n, t);
}

function ke(e, n) {
  let t = ee();
  return e.toolUseId !== void 0 && t.askClassTakenByPerson.get(e.toolUseId) === !0 && (t.askClassTaken.get(e.toolUseId)?.some(r => pct(r) === "foreign_read" && r.slug === n) ?? !1) || MTe(e) || cMt("foreign_read", n);
}

function kYs(e, n, t) {
  if (e.toolUseId === void 0) return;
  let s = ee();
  Dle(s.askClassPending, e.toolUseId, [ {
    class: "foreign_read",
    remember: "this_call",
    slug: n,
    url: t,
    reachable: kg(e),
    askedIn: O6e()
  } ]), Dle(s.askClassPersonAsked, e.toolUseId, !0);
}

function EYr(e, n) {
  i("tengu_artifact_routine_write_unasked", {
    db_op: c(e),
    artifact_id: ye(n)
  });
}

function kYr(e, n) {
  i("tengu_artifact_comment_write_unasked", {
    db_op: c(e),
    artifact_id: ye(n)
  });
}

function TYr(e) {
  i("tengu_artifact_comment_publish_unasked", {
    artifact_id: ye(e)
  });
}

function AYr(e) {
  ee().commentRepublishedPaths.add(e);
}

function inr(e) {
  ee().routineRepublishedPaths.add(e);
}

function CYr(e) {
  if (e === void 0) return;
  let n = ee();
  n.askClassPending.delete(e), n.askClassCards.delete(e), n.askClassPersonAsked.delete(e), 
  n.askClassNoClassifier.delete(e), n.askNamedOtherOrg.delete(e);
}

function RYr(e) {
  i("tengu_artifact_routine_publish_unasked", {
    artifact_id: ye(e)
  });
}

function Qwt(e, n, t) {
  let s = c(n ?? "absent");
  if (i("tengu_artifact_routine_first_publish_unasked", {
    ...e !== void 0 && {
      artifact_id: ye(e)
    },
    mode: s,
    ...t?.fromType && {
      from_type: !0
    }
  }), n === "owner" || n === "refused_before_send") return;
  if (n !== "stranded" && n !== "refused_shape" && n !== "unknown_outcome") m("artifact_publish", "routine_first_publish_not_owner_only", {
    mode: s,
    ...t?.fromType && {
      from_type: !0
    }
  });
  ee().routineRunTainted = !0;
}

function Zwt(e, n, t, s) {
  i("tengu_artifact_foreign_read_unasked", {
    action: c(e),
    artifact_id: ye(n),
    ...t !== void 0 && {
      owner_account_id: ye(t)
    },
    ...s && {
      attested: !0
    }
  });
}

export { rXo, oXo, gEn, sXo, iXo, hEn, Dle, enr, tnr, Ywt, QC, ytt, nnr, bYr, _tt, SDe, P2, rnr, bB, OTe, Ene, Dhe, onr, Xwt, btt, Jwt, yEn, snr, _En, bEn, SYr, GL, D2e, wYr, vYr, kYs, EYr, kYr, TYr, AYr, inr, CYr, RYr, Qwt, Zwt };
