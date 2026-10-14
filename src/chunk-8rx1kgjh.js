// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _, Y } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { Ns } from "./chunk-g6nh65r0.js";

import { Dxr, oj } from "./chunk-f1zpf9me.js";

import { $Fe } from "./chunk-6sf4kq52.js";

import { i3, dw } from "./chunk-jad54dhk.js";

import { N } from "./chunk-hmqkrrtz.js";

import { randomUUID as W } from "crypto";

var P = "decision", j = "deliverables", X = /(?:`{3,}|~{3,})[ \t]*(?:decision|deliverables)/, t0e = "[a-z0-9][a-z0-9-]{0,63}", v = new RegExp(`^${t0e}$`), U = [ "id", "question", "option", "lean", "resolved", "custom", "anchor" ], z = new RegExp(`^(${U.join("|")}):[ \\t]?(.*)$`), k = new RegExp(`^(${t0e})(?:[ \\t]*\\|[ \\t]*(.+))?$`), V = 300, q = 60, H = 200, J9r = /^[A-Za-z0-9 ._:/@#()+-]{1,120}$/, R = 2, T = 5, O = 20, C = 280, F = 1120, G = 1496, J = /[\u0000-\u001f\u007f-\u009f\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u, Z = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu, Q = 8;

function K(e) {
  if (e.length === 0 || e !== e.trim() || [ ...e ].length > C) return !1;
  if (J.test(e)) return !1;
  return (e.match(Z) ?? []).length <= Q;
}

var ee = /^[A-Za-z0-9+/]*={0,2}$/;

function D(e) {
  if (!K(e)) return null;
  let n = (new TextEncoder).encode(e);
  if (n.length > F) return null;
  return Buffer.from(n).toString("base64");
}

function jqt(e) {
  if (e.length === 0 || e.length % 4 !== 0 || e.length > G || !ee.test(e)) return null;
  let n = Buffer.from(e, "base64");
  if (n.length > F) return null;
  if (Buffer.from(n).toString("base64") !== e) return null;
  let t;
  try {
    t = new TextDecoder("utf-8", {
      fatal: !0
    }).decode(n);
  } catch {
    return null;
  }
  return K(t) ? t : null;
}

function w(e) {
  return e.resolved !== void 0 || e.custom !== void 0;
}

var E = "get-started", b = [ "get-started", "keep-iterating" ];

function TAn(e) {
  if (e.id !== E || e.options.length !== 2) return !1;
  if (e.custom !== void 0) return !1;
  let n = new Set(e.options.map(t => t.token));
  return b.every(t => n.has(t));
}

function B(e) {
  let n = e.find(TAn);
  if (e.some(s => s !== n && !w(s))) return "in-progress";
  if (n?.resolved === b[0]) return "started";
  if (n !== void 0 && n.resolved === void 0) return "ready";
  return "in-progress";
}

var rZo = /^<!--ws-decision-[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}-\d+-->\s*$/;

function ne(e) {
  let n = {}, t = [];
  for (let l of e.split(`\n`)) {
    if (l.trim() === "") continue;
    let p = l.match(z);
    if (!p) return null;
    let d = p[1], g = (p[2] ?? "").trim();
    if (g === "") return null;
    if (d === "option") {
      let m = g.match(k);
      if (!m) return null;
      let i = m[1], u = (m[2] ?? i).trim();
      if (u === "" || u.length > q) return null;
      t.push({
        token: i,
        label: u
      });
    } else {
      if (n[d] !== void 0) return null;
      n[d] = g;
    }
  }
  let {id: s, question: a, resolved: r, anchor: o, custom: c} = n;
  if (s === void 0 || !v.test(s)) return null;
  if (a === void 0 || a.length > V) return null;
  if (t.length < R || t.length > T) return null;
  if (new Set(t.map(l => l.token)).size !== t.length) return null;
  let f;
  if (n.lean !== void 0) {
    let l = n.lean.match(k);
    if (!l) return null;
    let p = l[1], d = l[2]?.trim();
    if (d !== void 0 && (d === "" || d.length > H)) return null;
    if (!t.some(g => g.token === p)) return null;
    f = {
      token: p,
      reason: d
    };
  }
  if (o !== void 0 && !J9r.test(o)) return null;
  if (r !== void 0 && !t.some(l => l.token === r)) return null;
  if (c !== void 0) {
    if (r !== void 0) return null;
    if (s === E) return null;
    if (D(c) === null) return null;
  }
  return {
    id: s,
    question: a,
    options: t,
    lean: f,
    resolved: r,
    custom: c,
    anchor: o
  };
}

function Q9r(e) {
  let n = w(e), t = n ? "resolved" : "open", s = e.resolved === void 0 ? void 0 : e.options.find(d => d.token === e.resolved), a = e.custom === void 0 ? null : D(e.custom), r = `data-decision-id="${Ns(e.id)}" data-decision-state="${t}"` + (e.lean === void 0 ? "" : ` data-lean-choice="${Ns(e.lean.token)}"`) + (e.resolved === void 0 ? "" : ` data-resolved-choice="${Ns(e.resolved)}"`) + (a === null ? "" : ` data-resolved-custom="${Ns(a)}"`) + (e.anchor === void 0 ? "" : ` data-anchor="${Ns(e.anchor)}"`), o = e.lean, c = e.options.map(d => {
    let g = `<span class="option-label">${Ns(d.label)}</span>`, m = Ns(d.token), i = o !== void 0 && d.token === o.token, u = o !== void 0 && d.token === o.token && o.reason !== void 0 ? `<span class="why">${Ns(o.reason)}</span>` : "";
    if (n) {
      let A = d.token === e.resolved ? "option chosen" : "option dim", y = d.token === e.resolved && i ? u : "";
      return `<span class="${A}" data-choice="${m}">${g}${y}</span>`;
    }
    return `<span class="${i ? "option recommended" : "option"}" role="button" aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself" data-choice="${m}">${g}${i ? '<span class="badge">Recommended</span>' : ""}${u}</span>`;
  }).join(""), f = e.custom !== void 0 ? `<p class="decided">Decided: ${Ns(e.custom)}</p>` : s === void 0 ? "" : `<p class="decided">Decided: ${Ns(s.label)}</p>`, l = e.anchor === void 0 ? "" : `<p class="anchor">Anchor: <code>${Ns(e.anchor)}</code></p>`, p = n || e.id === E ? "" : `<div class="custom-answer"><input class="option-input" type="text" maxlength="${C}" disabled aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself"` + ' placeholder="Or type your own answer\u2026" aria-label="Your own answer"></div>';
  return `<div class="call-item" ${r}>` + '<span class="marker" aria-hidden="true">\u25cf</span>' + `<div class="call-body"><p><span class="q">${Ns(e.question)}</span></p>` + f + l + `<div class="options">${c}${p}</div></div></div>`;
}

var Z9r = "\x3c!--ws-decisions-island--\x3e", eXr = "\x3c!--ws-status-banner--\x3e", tXr = "\x3c!--ws-status-footer--\x3e";

function oZo(e) {
  if (e.length === 0) return null;
  for (let s of e) if (s.custom !== void 0 && D(s.custom) === null) return null;
  let n = e.map(s => ({
    id: s.id,
    opts: s.options.map(a => a.token),
    state: w(s) ? "resolved" : "open",
    choice: s.resolved ?? null,
    custom: s.custom === void 0 ? null : D(s.custom)
  })), t = _({
    items: n
  });
  for (let s of [ "<", ">", "&", "'", "\\" ]) if (t.includes(s)) return null;
  if (oXr(t) === null) return null;
  return `<script type="application/json" id="ws-decisions">${t}<\/script>`;
}

function sZo(e) {
  let n = B(e), t = e.find(TAn), s = N(e, r => r !== t && !w(r)), a = n === "started" ? "Build started" : n === "ready" ? "Ready to build" : s > 0 ? `In progress \u2014 ${s} ${I(s, "decision")} open` : "In progress";
  return `<div class="ws-banner" data-ws-state="${n}">${a}</div>`;
}

function iZo(e, n) {
  let t = e.resolved, s = t === void 0 ? "open" : "resolved", a = `data-decision-id="${Ns(e.id)}" data-decision-state="${s}"` + (t === void 0 ? "" : ` data-resolved-choice="${Ns(t)}"`), r = e.options.map(c => {
    let f = `<span class="option-label">${Ns(c.label)}</span>`, l = Ns(c.token);
    if (t !== void 0) return `<span class="${c.token === t ? "option chosen" : "option dim"}" data-choice="${l}">${f}</span>`;
    return `<span class="${c.token === b[0] ? "option cta" : "option cta-quiet"}" role="button" aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself" data-choice="${l}">${f}</span>`;
  }).join(""), o = t === b[0] ? '<span class="ws-status-note">Build started \u2014 the workshop session is on it.</span>' : t !== void 0 ? '<span class="ws-status-note">Keeping at it \u2014 more to come.</span>' : B(n) === "ready" ? '<span class="ws-status-note">All decisions are in.</span>' : '<span class="ws-status-note">Decisions still open above.</span>';
  return `<div class="ws-status-footer" ${a}>${r}${o}</div>`;
}

var S = 10, M = 120, te = new RegExp(`^[-*][ \\t]+\\[([^\\][\\r\\n]{1,${M}})\\]\\((\\S+)\\)$`), nXr = "data-ws-deliverable-kind", se = [ "pr", "artifact", "other" ], oe = new RegExp(`/artifact/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-|(${Dxr})(?:/|$))`);

function re(e) {
  if (/\/(?:pull|pull-requests|-\/merge_requests)\/\d+/.test(e.pathname)) return "pr";
  let n = oe.exec(e.pathname);
  if (n && (n[1] === void 0 || oj(n[1]) !== null)) return "artifact";
  return "other";
}

function ie(e) {
  let n = [];
  for (let t of e.split(`\n`)) {
    let s = t.trim();
    if (s === "") continue;
    let a = te.exec(s);
    if (!a) return null;
    let r = a[1].trim();
    if (r.length === 0 || r.length > M) return null;
    let o;
    try {
      o = new URL(a[2]);
    } catch {
      return null;
    }
    if (o.protocol !== "https:" && o.protocol !== "http:") return null;
    if (n.length >= S) return null;
    n.push({
      label: r,
      url: o.toString(),
      kind: re(o)
    });
  }
  return n.length === 0 ? null : n;
}

function le(e) {
  return `<div class="ws-deliverables"><ul>${e.map(t => `<li class="ws-deliverable" ${nXr}="${t.kind}"><a href="${Ns(t.url)}" target="_blank" rel="noopener noreferrer">${Ns(t.label)}</a></li>`).join("")}</ul></div>`;
}

function AAn(e) {
  let n = e.slice(0, S), t = s => se.includes(s) ? s : "other";
  return {
    n: n.length,
    pr: N(n, s => t(s) === "pr"),
    artifact: N(n, s => t(s) === "artifact"),
    other: N(n, s => t(s) === "other")
  };
}

function aZo(e, n, t = Q9r) {
  let s = {
    md: e,
    substitute: i => ({
      html: i,
      complete: !0
    }),
    nonceMarker: "",
    decisions: [],
    deliverables: []
  };
  if (!X.test(e)) return s;
  let a;
  try {
    a = n(e);
  } catch {
    return s;
  }
  let r = [], o = new Set, c = 0, f = 0;
  for (let i of a) {
    if (!e.startsWith(i.raw, c)) {
      let u = e.indexOf(i.raw, c);
      if (u === -1) break;
      c = u;
    }
    if (i.type === "code" && "lang" in i && typeof i.lang === "string" && i.lang.trim() === P && o.size < O) {
      let u = ne(i.text);
      if (u !== null && !o.has(u.id)) o.add(u.id), r.push({
        offset: c,
        raw: i.raw,
        decision: u
      });
    } else if (i.type === "code" && "lang" in i && typeof i.lang === "string" && i.lang.trim() === j) {
      let u = ie(i.text);
      if (u !== null && f + u.length <= S) f += u.length, r.push({
        offset: c,
        raw: i.raw,
        deliverables: u
      });
    }
    c += i.raw.length;
  }
  if (r.length === 0) return s;
  let l = W(), p = "", d = 0, g = [];
  for (let [i, u] of r.entries()) {
    let h = `\x3c!--ws-decision-${l}-${i}--\x3e`;
    p += e.slice(d, u.offset) + `\n\n${h}\n\n`, d = u.offset + u.raw.length, g.push({
      ph: h,
      html: "decision" in u ? t(u.decision) : le(u.deliverables)
    });
  }
  p += e.slice(d);
  let m = `ws-decision-${l}`;
  return {
    md: p,
    nonceMarker: m,
    substitute: i => {
      let u = i, h = !0;
      for (let {ph: x, html: A} of g) {
        let y = u.split(x);
        if (y.length === 1) h = !1;
        u = y.join(A);
      }
      if (u.includes(m)) h = !1;
      return {
        html: u,
        complete: h
      };
    },
    decisions: r.flatMap(i => "decision" in i ? [ i.decision ] : []),
    deliverables: r.flatMap(i => "deliverables" in i ? i.deliverables : [])
  };
}

var rXr = 'id="ws-decisions">';

function DEt(e, n) {
  let t = `id="${n}"`, s = [], a = e.indexOf(t);
  while (a !== -1) {
    let r = a + t.length, o = r + $Fe(e, r);
    if (e.charCodeAt(o) === 62) s.push([ a, o + 1 ]);
    a = e.indexOf(t, r);
  }
  return s;
}

var ae = 65536;

async function L(e, n) {
  try {
    let {nestingBudgetExceeded: t} = await import("./chunk-6sr0kx61.js");
    if (t(e)) return null;
    return await ce(e, n);
  } catch {
    return null;
  }
}

async function ce(e, n) {
  let {parse: t} = await import("./chunk-q0pa4g0t.js"), s = i3(t(e, {
    sourceCodeLocationInfo: !0
  })), a = [], r = [ {
    node: s,
    inTemplate: !1
  } ];
  for (;;) {
    let o = r.pop();
    if (o === void 0) break;
    let {node: c, inTemplate: f} = o;
    if (c.tagName !== void 0) {
      if (dw(c, "id") === n) a.push({
        node: c,
        inTemplate: f
      });
    }
    for (let l of c.childNodes ?? []) r.push({
      node: l,
      inTemplate: f
    });
    for (let l of c.content?.childNodes ?? []) r.push({
      node: l,
      inTemplate: !0
    });
  }
  return a;
}

async function YL(e, n) {
  if (!v.test(n)) return {
    ambiguous: !0
  };
  let t = DEt(e, n);
  if (t.length === 0) {
    let p = await L(e, n);
    if (p === null) return {
      ambiguous: !0
    };
    return p.length === 0 ? null : {
      ambiguous: !0
    };
  }
  if (t.length !== 1) return {
    ambiguous: !0
  };
  let [s, a] = t[0], r = await L(e, n);
  if (r === null || r.length !== 1 || r[0].inTemplate) return {
    ambiguous: !0
  };
  let o = r[0].node, c = (dw(o, "type") ?? "").trim().toLowerCase(), f = o.sourceCodeLocation?.startTag, l = o.sourceCodeLocation?.endTag;
  if ((o.tagName ?? "").toLowerCase() !== "script" || c !== "application/json" || f === void 0 || f === null || l === void 0 || l === null) return {
    ambiguous: !0
  };
  if (s < f.startOffset || a !== f.endOffset) return {
    ambiguous: !0
  };
  return {
    json: e.slice(f.endOffset, l.startOffset)
  };
}

function oXr(e) {
  if (e.length > ae) return null;
  let n;
  try {
    n = Y(e);
  } catch {
    return null;
  }
  if (n === null || typeof n !== "object" || Array.isArray(n)) return null;
  let t = Object.keys(n);
  if (t.length !== 1 || t[0] !== "items") return null;
  let s = n.items;
  if (!Array.isArray(s) || s.length > O) return null;
  let a = [], r = new Set;
  for (let o of s) {
    if (o === null || typeof o !== "object" || Array.isArray(o)) return null;
    let c = Object.keys(o).sort();
    if (c.length !== 5 || c[0] !== "choice" || c[1] !== "custom" || c[2] !== "id" || c[3] !== "opts" || c[4] !== "state") return null;
    let f = o, l = f.id;
    if (typeof l !== "string" || !v.test(l) || r.has(l)) return null;
    r.add(l);
    let p = f.opts;
    if (!Array.isArray(p) || p.length < R || p.length > T || p.some(i => typeof i !== "string" || !v.test(i)) || new Set(p).size !== p.length) return null;
    let d = f.state;
    if (d !== "open" && d !== "resolved") return null;
    let g = f.choice;
    if (g !== null && (typeof g !== "string" || !p.includes(g))) return null;
    let m = f.custom;
    if (m !== null && (typeof m !== "string" || jqt(m) === null)) return null;
    if (m !== null && l === E) return null;
    if (d === "open" && (g !== null || m !== null)) return null;
    if (d === "resolved" && g !== null === (m !== null)) return null;
    a.push({
      id: l,
      opts: p.slice(),
      state: d,
      choice: g,
      custom: m
    });
  }
  return a;
}

function ue(e) {
  return e.id === E && e.opts.length === 2 && b.every(n => e.opts.includes(n)) && e.custom === null;
}

function Wqt(e) {
  let n = e.find(ue);
  if (e.some(s => s !== n && s.state === "open")) return "in-progress";
  if (n !== void 0 && n.choice === b[0]) return "started";
  if (n !== void 0 && n.state === "open") return "ready";
  return "in-progress";
}

export { t0e, J9r, jqt, TAn, rZo, Q9r, Z9r, eXr, tXr, oZo, sZo, iZo, nXr, AAn, aZo, rXr, DEt, YL, oXr, Wqt };
