// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { W } from "./chunk-b0z4bv3v.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { I } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { xE } from "./chunk-r276nwd3.js";

import { eU } from "./chunk-ckggj4y9.js";

import { BF, ee } from "./chunk-kq1bg4dg.js";

import { XL, xB, nde, jne, jVe } from "./chunk-69rr80fg.js";

import { eys } from "./chunk-h2y8dwq2.js";

import { Pdt } from "./chunk-9tdwgnpn.js";

import { createHash as O } from "crypto";

import { readFile as U, stat as z, unlink as J } from "fs/promises";

function Hle(e, i, n) {
  return e.ver === i && (e.observers === void 0 || Object.hasOwn(e.observers, n));
}

function _(e, i, n) {
  return Hle(e.getArtifactReadObservation(i), n, e.agentId ?? "main") && !nde(e.agentId, i, n);
}

function Xtr(e) {
  return e.fileReadingLimits?.maxTokens ?? eU().maxTokens;
}

function qwt(e, i) {
  let n = Xtr(i), t = [], o = 0, r = 0;
  while (r <= e.length) {
    let s = e.indexOf(`\n`, r), c = s === -1 ? e.length : s;
    if (o++, Pdt(e.slice(r, c), "html") > n / 4) t.push({
      line: o,
      start: r,
      end: c
    });
    r = c + 1;
  }
  return {
    lines: o,
    unterminated: !e.endsWith(`\n`),
    overlong: t
  };
}

var k = 3, K = 8, X = 32;

function _Vt({html: e, ver: i, shape: n, sent: t, recorded: o, lineCount: r = !0}) {
  let s = a => a.toLocaleString("en-US"), c = n.unterminated ? n.lines : n.lines - 1, h = `version ${i}: ${s(Buffer.byteLength(e))} bytes${r ? `, ${s(c)} ${I(c, "line")}` : ""}`;
  if (n.overlong.length === 0) return `${h}, ${r ? "each" : "every line"} short enough to Read with offset/limit`;
  let p = (t !== void 0 && n.overlong.length <= X ? t : void 0)?.replace(/\r\n/g, `\n`), C;
  try {
    C = p === void 0 ? void 0 : jVe(p);
  } catch (a) {
    if (!(a instanceof jne)) throw a;
  }
  let P = p === void 0 ? void 0 : new Set([ ...p.split(`\n`), ...C?.split(`\n`) ?? [] ]), y = n.overlong.map(a => {
    let F = e.slice(a.start, a.end).replace(/\r$/, ""), A = P === void 0 ? void 0 : P.has(F) ? "same" : "differs";
    return {
      line: a.line,
      chars: a.end - a.start,
      verdict: A
    };
  }), x = y.slice(0, k), b = y.slice(k), R = b.length, u = b.filter(a => a.verdict === "differs"), H = R > 0 && b.every(a => a.verdict === "same"), v = u.slice(0, K).map(a => s(a.line)), m = u.length - v.length, S = u.length === 0 ? H ? ", none differing from what you sent" : "" : `, of which ${I(u.length, "line")} ${v.join(", ")}${m > 0 ? ` and ${s(m)} more` : ""} ${u.length === 1 ? "differs" : "differ"} from what you sent`, w = a => `line ${s(a.line)} (${s(a.chars)} characters${a.verdict === "differs" ? ", which differs from the content you sent" : a.verdict === "same" ? ", identical to a line you sent" : ""})`;
  return `${h}; a single Read may not return ${x.map(w).join(", or ")}${R > 0 ? `, or ${s(R)} more such ${I(R, "line")}${S}` : ""}` + (o ? " \u2014 no whole Read of it is needed: Read the lines you need with offset/limit, and take those long lines from the saved file, never from your own copy" : "");
}

async function htt({filepath: e, persistId: i, html: n, slug: t, ver: o, confirmsResend: r, batch: s, heldSkipsRead: c}, h) {
  let l = h.agentId ?? "main", {lines: p, overlong: C} = qwt(n, h), P = C.length === 0, y = _(h, t, o), x = y && c ? "held" : "unverifiable", b = ot(e), R = await xE(b).catch(() => {});
  if (R === void 0) return x === "held" ? "held" : "unexaminable";
  let u = O("sha256").update(n).digest("hex"), H = ee().pendingHandoverReads, v = H.get(b), m = v !== void 0 && v.slug === t && v.ver === o && v.contentHash === u ? v : void 0;
  if (m !== void 0) m.mtimeMs = R;
  if (!P) return x;
  let S = y && c;
  if (m !== void 0) {
    if (m.handedTo.add(l), S) return m.completedBy.add(l), "held";
    if (r) m.confirmsResendFor.set(l, s ?? ""); else m.confirmsResendFor.delete(l);
    return m.completedBy.delete(l), m.unrecordableBy.has(l) ? "unverifiable" : "pending";
  }
  let w = new Set;
  for (let [F, A] of H) if (A.slug === t) {
    for (let q of A.unrecordableBy) w.add(q);
    H.delete(F);
  }
  let a = !n.endsWith(`\n`);
  return H.set(b, {
    slug: t,
    ver: o,
    mtimeMs: R,
    totalLines: p,
    unterminated: a,
    contentHash: u,
    bytes: Buffer.byteLength(n),
    requiredLines: a ? p : p - 1,
    linesReturned: new Map,
    linesPrepared: new Map,
    completedBy: new Set(S ? [ l ] : []),
    handedTo: new Set([ l ]),
    unrecordableBy: w,
    persistId: i,
    confirmsResendFor: new Map(r ? [ [ l, s ?? "" ] ] : [])
  }), S ? "held" : w.has(l) ? "unverifiable" : "pending";
}

async function pEn(e, i, n) {
  for (let [t, o] of ee().pendingHandoverReads) if (o.slug === e && o.ver === i) {
    let r = await xE(t).catch(() => {});
    return r !== void 0 && r !== o.mtimeMs ? {
      persistId: `${n}-${Date.now().toString(36)}`,
      editedCopy: t
    } : {
      persistId: o.persistId
    };
  }
  return {
    persistId: n
  };
}

async function I2e(e, i) {
  let n = ot(e), t = ee().pendingHandoverReads, o = t.get(n);
  if (o === void 0) return;
  if (O("sha256").update(i).digest("hex") !== o.contentHash) {
    t.delete(n);
    return;
  }
  let r = await xE(n).catch(() => {});
  if (r !== void 0) o.mtimeMs = r;
}

function N(e, i, n) {
  for (let [t, o] of ee().pendingHandoverReads) if (o.slug === i && (n === void 0 || o.ver === n) && o.handedTo.has(e) && !o.completedBy.has(e) && !o.unrecordableBy.has(e)) return [ t, o ];
  return;
}

function bVt(e, i, n) {
  return N(e ?? "main", i, n) !== void 0;
}

function B(e, i, n, t = !1) {
  let o = e.agentId ?? "main", r = N(o, i, n);
  if (r === void 0) return;
  let s = r[1];
  return G(s, e) || !t && _(e, i, s.ver) ? void 0 : r;
}

function Jtr(e, i, n, {ignoreHold: t = !1} = {}) {
  let o = B(e, i, n, t);
  return o === void 0 ? void 0 : T(o[0], o[1], e.agentId);
}

async function mYr(e, i, n) {
  let t = B(e, i, n);
  if (t === void 0) return;
  let [o, r] = t, s;
  try {
    s = await xE(o) === r.mtimeMs ? "intact" : "changed";
  } catch (c) {
    s = W(c) ? "changed" : "unknown";
  }
  return {
    ...T(o, r, e.agentId),
    file: s
  };
}

function T(e, i, n) {
  return {
    path: e,
    slug: i.slug,
    ver: i.ver,
    lines: i.requiredLines,
    unterminated: i.unterminated,
    unread: D(i.linesReturned.get(n ?? "main") ?? [], i.requiredLines)
  };
}

function gYr(e, i, n) {
  let t = B(e, i, n);
  return t !== void 0 && j(t[1], e.agentId, e.agentId ?? "main") === void 0;
}

function hYr(e, i, n, t) {
  B(e, i, n)?.[1].confirmsResendFor.set(e.agentId ?? "main", t);
}

function Qtr({lines: e, unterminated: i, unread: n}) {
  let t = n.reduce((o, [r, s]) => o + s - r + 1, 0);
  return `${e} ${I(e, "line")}` + (i ? `; the last has no trailing newline, so \`wc -l\` reports ${e - 1} \u2014 Read through line ${e} and leave the file as it is` : "") + (t > 0 && t < e ? `; you have not yet Read ${I(t, "line")} ${n.map(([o, r]) => o === r ? `${o}` : `${o}-${r}`).join(", ")}` : "");
}

function O2e(e, i, n, t) {
  let o = Jtr(e, i, n, t);
  return o === void 0 ? "" : ` (${Qtr(o)})`;
}

function D(e, i) {
  let n = [], t = 0;
  for (let [o, r] of M(e)) {
    if (o > t) n.push([ t + 1, Math.min(o, i) ]);
    if (t = Math.max(t, r), t >= i) break;
  }
  if (t < i) n.push([ t + 1, i ]);
  return n;
}

async function yYr(e, i) {
  ee().pendingHandoverReads.delete(ot(e)), eys(i, e), await J(e).catch(() => {});
}

var L = {
  artifactRead: void 0,
  remaining: void 0,
  commit: () => {}
};

async function wYs(e, i, n, t) {
  try {
    let o = ee().pendingHandoverReads, r = o.get(e), s = i.agentId ?? "main";
    if (r === void 0 || n === void 0 || t.lineCount <= 0 || r.completedBy.has(s)) return L;
    if (Math.floor(t.mtimeMs) !== r.mtimeMs || t.totalLines !== r.totalLines) return f("artifact_handover_read", "file_changed"), 
    L;
    if (V(r, e, i)) return L;
    let c = [ t.firstLine, t.firstLine + t.lineCount ], h = await Y(e, r.bytes, r.contentHash);
    if (h === "changed") return o.delete(e), f("artifact_handover_read", "file_changed"), 
    L;
    if (h === "unreadable") f("artifact_handover_read", "file_unreadable");
    let l = h === "holds", p = (r.linesPrepared.get(s) ?? []).filter(u => u.messageId === n), C = M([ ...r.linesReturned.get(s) ?? [], ...p.map(u => u.range), c ]), P = E(C, r.requiredLines), y = {
      messageId: n,
      range: c
    };
    r.linesPrepared.set(s, [ ...p, y ]);
    let x = () => {
      try {
        let u = r.linesPrepared.get(s) ?? [];
        if (o.get(e) !== r || r.completedBy.has(s) || !u.includes(y)) return;
        let H = u.filter(m => m !== y);
        if (H.length > 0) r.linesPrepared.set(s, H); else r.linesPrepared.delete(s);
        let v = M([ ...r.linesReturned.get(s) ?? [], c ]);
        if (!l || !E(v, r.requiredLines)) {
          r.linesReturned.set(s, v);
          return;
        }
        return r.linesReturned.delete(s), r.completedBy.add(s), Q(r, e, i, n, s) ? {
          slug: r.slug,
          ver: r.ver
        } : void 0;
      } catch (u) {
        d(u);
        return;
      }
    }, b = !r.unrecordableBy.has(s), R = b && r.handedTo.has(s) && !_(i, r.slug, r.ver);
    return {
      artifactRead: P && l && b ? {
        slug: r.slug,
        ver: r.ver
      } : void 0,
      remaining: P || !R ? void 0 : {
        ...T(e, r, i.agentId),
        unread: D(C, r.requiredLines)
      },
      commit: x
    };
  } catch (o) {
    return d(o), L;
  }
}

function G(e, i) {
  let n = i.getArtifactReadObservation(e.slug).ver;
  return n !== void 0 && n !== e.ver && (XL(n, e.ver) ?? 0) > 0;
}

function V(e, i, n) {
  if (G(e, n)) return ee().pendingHandoverReads.delete(i), f("artifact_handover_read", "superseded"), 
  !0;
  return !1;
}

function M(e) {
  let i = e.map(t => [ t[0], t[1] ]).sort((t, o) => t[0] - o[0]), n = [];
  for (let t of i) {
    let o = n.at(-1);
    if (o !== void 0 && t[0] <= o[1]) o[1] = Math.max(o[1], t[1]); else n.push(t);
  }
  return n;
}

function E(e, i) {
  let n = e[0];
  return n !== void 0 && n[0] <= 0 && n[1] >= i;
}

function j(e, i, n) {
  let t = ee().refusedPublishBodies.get(BF(i, e.slug)), o = e.confirmsResendFor.get(n);
  return o !== void 0 && (t === void 0 || t.batch !== o) ? void 0 : t;
}

function Q(e, i, n, t, o) {
  if (V(e, i, n)) return !1;
  let r = j(e, n.agentId, o), s = r?.observedFrom;
  try {
    n.setArtifactReadVersion(e.slug, e.ver, xB(n.agentId, t));
  } finally {
    if (r !== void 0) if (s === void 0) delete r.observedFrom; else r.observedFrom = s;
  }
  if (Hle(n.getArtifactReadObservation(e.slug), e.ver, o)) return g("artifact_handover_read"), 
  !0;
  return e.unrecordableBy.add(o), f("artifact_handover_read", "seed_not_persisted"), 
  !1;
}

async function Y(e, i, n) {
  try {
    return (await z(e)).size === i && O("sha256").update(await U(e)).digest("hex") === n ? "holds" : "changed";
  } catch (t) {
    return W(t) ? "changed" : "unreadable";
  }
}

export { Hle, Xtr, qwt, _Vt, htt, pEn, I2e, bVt, Jtr, mYr, gYr, hYr, Qtr, O2e, yYr, wYs };
