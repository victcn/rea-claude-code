// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { man, iOe } from "./chunk-7tfkg6bp.js";

import { dl, ne } from "./chunk-5wbhf1bk.js";

import { Vee } from "./chunk-kawq2919.js";

import { uPo } from "./chunk-q6wab2jw.js";

import { D } from "./chunk-hmqkrrtz.js";

function Mgr(o) {
  if (typeof o !== "object" || o === null) return !1;
  let n = o;
  return typeof n.name === "string" && (n.errorCode === void 0 || typeof n.errorCode === "string") && (n.error === void 0 || typeof n.error === "string");
}

var ie = 200;

function fo(o, n = 64) {
  if (typeof o !== "string") return "";
  return La(Vee(o).replace(/['`]/g, " "), n, "none");
}

function Zps(o, n = 1024) {
  return La(o, n);
}

function La(o, n = ie, s = "all") {
  if (typeof o !== "string") return "";
  let l = uPo(Vee(o)).replaceAll(/[<>";\u2018\u2019\u201A\u201C\u201D\u201E\u00AB\u00BB\u2039\u203A\u2329\u232A\u27E8\u27E9\u27EA\u27EB\u3008\u3009\u300A\u300B]/g, " ").replaceAll(/\s+/g, " ").trim(), i = Math.max(B, n + te), a = l.length > i, f = oXt(a ? ne(l, i) : l, s);
  return a || f.length > n ? `${ne(f, n)}\u2026` : f;
}

var q = 500;

function Kb(o) {
  let n = uPo(o).replaceAll(/\s+/g, " ").trim(), s = oXt(n.length > B ? ne(n, B) : n);
  return s.length > q ? `${ne(s, q)}\u2026` : s;
}

var O = String.raw`(?:access[-_ ]?|refresh[-_ ]?|id[-_ ]?|client[-_ ]?|api[-_ ]?|x[-_]api[-_ ]?|session[-_ ]?|auth[-_ ]?)?(?:token|key|secret|password|authorization|credential)s?`, ce = String.raw`\b${O}(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${O}=*(?![A-Za-z0-9._~+/=%-]))(?=[A-Za-z0-9._~+/=%-]{8})[A-Za-z]*[0-9._~+/=%-]`, ee = String.raw`(?:[A-Za-z0-9._~+/=%-]+?(?=${ce})|[A-Za-z0-9._~+/=%-]{8,})`, le = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(bearer|basic)(?![\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?${O}=*(?![A-Za-z0-9._~+/=%-]))[\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?(${ee})`, "gi"), ae = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(${O})(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${O}=*(?![A-Za-z0-9._~+/=%-]))(${ee})`, "gi");

function J(o, n, s, l, i) {
  if (!/[0-9._~+/=%-]/.test(s)) return o;
  return /\w/.test(i[l + o.length] ?? "") ? `${n} [redacted] ` : `${n} [redacted]`;
}

function oXt(o, n = "all") {
  if (n === "none") return o;
  return o.replace(le, J).replace(ae, J);
}

var fe = /^(?:bearer|basic|(?:access|refresh|id|client|api|x[-_]api|session|auth)?[-_ ]?(?:token|key|secret|password|authorization|credential)s?)$/i, ue = /(?:^|[^A-Za-z0-9_\s])(?:bearer|basic|token|key|secret|password|authorization|credential)s?$/i;

function ge(o) {
  let n = o.split(/[:=\uFF1A\uFF1D]+/).map(l => l.trim()), s = 0;
  for (let [l, i] of n.entries()) {
    if (i === "") continue;
    let a = l < n.length - 1 || i.startsWith("-");
    if (!fe.test(i) && !(a && ue.test(i))) return !1;
    s++;
  }
  return s > 0;
}

var B = 2e3, te = 512, Q = B + te, pe = 32, de = 262144, he = 131072, me = 8192, Ae = 65536, _e = /^(?:[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs})$/u;

function Hgr(o) {
  let n = o.errorCode ? ` (${o.errorCode})` : "", s = o.error ? `: "${o.error}"` : "";
  return `${o.name}${n}${s}`;
}

var a7 = "Blocked by enterprise managed policy", aao = "Disabled by disableClaudeAiConnectors setting", efs = "Not approved for this project - approve it via /mcp first", sXt = "Refused - Claude Code reserves this address for its own use", XHn = "Account changed while connecting - reconnect to use it", Pit = "Disabled in /mcp", Ee = new Set([ a7, aao ]);

function txt(o) {
  return o !== void 0 && Ee.has(o);
}

function nxt(o) {
  return o === sXt;
}

function hR(o) {
  return o.type === "failed" && o.errorCode === "UNCONFIGURED";
}

function Dgr(o, n = () => !1) {
  return o.filter(s => s.type === "failed").filter(s => !hR(s)).filter(s => !0).map(s => ({
    name: La(s.name),
    ...s.errorCode !== void 0 && {
      errorCode: La(s.errorCode)
    },
    ...(s.error !== void 0 || s.displayDetail !== void 0) && {
      error: [ s.error, s.displayDetail ].filter(l => Boolean(l)).map(l => La(l)).join(" ")
    },
    ...n(s) && {
      willRetry: !0
    }
  }));
}

function Ce(o, n) {
  if (!o || !n || !o.includes("${")) return [];
  let s = man(o);
  if (s.length < 2) return [];
  if (n.length > 2e3 || s.length > 9) return [];
  let l = s.map(dl), i = [];
  if (s.length === 2) {
    let [a = "", f = ""] = s;
    if (n.length >= a.length + f.length && n.startsWith(a) && n.endsWith(f)) i.push(n.slice(a.length, n.length - f.length));
  } else if (s.length === 3) {
    let [a = "", f = "", g = ""] = s;
    if (n.startsWith(a) && n.endsWith(g)) {
      let h = n.slice(a.length, n.length - g.length);
      if (f === "") i.push(h); else {
        let R = [];
        for (let C = h.indexOf(f); C !== -1 && R.length <= 64; C = h.indexOf(f, C + 1)) R.push(C);
        let P = R.length > 64 ? [ R[0] ?? 0, h.lastIndexOf(f) ] : R;
        for (let C of P) i.push(h.slice(0, C), h.slice(C + f.length));
      }
    }
  } else {
    for (let g = 1; g < s.length - 1; g++) if (s[g] === "") return [];
    let a = "^";
    for (let g = 0; g < l.length; g++) if (a += l[g], g < l.length - 1) {
      let h = s[g + 1] ?? "";
      if (h === "") a += "([\\s\\S]*)"; else {
        let R = h.charAt(0).replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
        a += `([^${R}]*)`;
      }
    }
    let f = n.match(new RegExp(a + "$"));
    if (f) i.push(...f.slice(1).filter(g => g !== ""));
  }
  return D(i);
}

function Me(o, n) {
  if (!o) return [];
  let s = [], l = (i, a) => {
    if (typeof i === "string" && typeof a === "string") s.push(...Ce(i, a));
  };
  if ("url" in o && "url" in n) l(o.url, n.url);
  if ("command" in o && "command" in n) {
    l(o.command, n.command);
    let i = Array.isArray(o.args) ? o.args : [], a = Array.isArray(n.args) ? n.args : [];
    for (let f = 0; f < Math.min(i.length, a.length); f++) l(i[f], a[f]);
  }
  for (let i of [ "headers", "env" ]) {
    let a = i in o ? o[i] : void 0, f = i in n ? n[i] : void 0;
    if (a && f && typeof a === "object" && typeof f === "object") for (let [g, h] of Object.entries(a)) l(h, f[g]);
  }
  return s;
}

function Re(o, n) {
  for (let s of n) {
    if (s.length <= o.length) return !1;
    if (s.startsWith(o)) return !0;
  }
  return !1;
}

function tfs(o, n, s, l) {
  let i = s ?? "[mcp-endpoint]", a = new TextDecoder("utf-8", {
    fatal: !1
  }), f = e => e.replace(/(?:%[0-9A-Fa-f]{2})+/g, t => a.decode(Uint8Array.from(t.match(/[0-9A-Fa-f]{2}/g) ?? [], r => parseInt(r, 16)))), g = new Map, h = e => {
    if (e === `\n` || e === "\t") return !1;
    if (e.length === 1) {
      let r = e.charCodeAt(0);
      if (r >= 55296 && r <= 57343) return !0;
    }
    let t = g.get(e);
    if (t === void 0) t = _e.test(e), g.set(e, t);
    return t;
  }, R = e => {
    let t = "", r = 0;
    while (r < e.length) {
      if (e[r] !== "%") {
        t += e[r], r++;
        continue;
      }
      let c = [], u = r + 1, A = !1;
      while (u < e.length && c.length < 2) {
        let m = String.fromCodePoint(e.codePointAt(u) ?? 0);
        if (/^[0-9A-Fa-f]$/.test(m)) c.push(m), u += m.length; else if (h(m) && !/[\n\t]/.test(m) || /^\p{M}$/u.test(m)) A = !0, 
        u += m.length; else break;
      }
      if (c.length === 2 && A) t += "%" + c.join(""), r = u; else t += "%", r++;
    }
    return t;
  }, P = 0, C = e => {
    let t = e, r = 0;
    for (let c = 0; c <= pe; c++) {
      if (r += t.length, P += c === 0 ? 0 : t.length, r > de || P > he) break;
      let u = Vee(f(R(t)));
      if (u === t) return t;
      t = u;
    }
    throw Error("MCP error text or config too long or too deeply encoded");
  }, z = new Map, j = e => {
    let t = z.get(e);
    if (t === void 0) t = /\p{M}/u.test(e.normalize("NFD")) ? [ ...e.normalize("NFD") ].filter(r => !/\p{M}/u.test(r)).join("") : e, 
    z.set(e, t);
    return t;
  }, Z = new Map, W = e => {
    let t = Z.get(e);
    if (t === void 0) t = [ ...C(e) ].filter(r => !h(r)).map(j).join(""), Z.set(e, t);
    return t;
  }, v = o.length > Q, G = /%[%0-9A-Fa-f]{0,11}$/, K = v ? C(ne(o, Q).replace(G, "")).replace(G, "").replace(/\uFFFD+$/, "") : C(o);
  if (K.length > me) throw Error("MCP error text too long once decoded");
  let M = "", w = "", T = [];
  for (let e of K) {
    if (h(e)) {
      w += " ";
      continue;
    }
    let t = j(e);
    for (let r = 0; r < t.length; r++) T.push(w.length + Math.min(r, e.length - 1));
    M += t, w += e;
  }
  T.push(w.length);
  let F = [], y = (e, t, r) => {
    let c = e === void 0 ? void 0 : W(e);
    if (!c || c.length < 4) return;
    if (t !== "[redacted]" && t.includes(c)) return;
    F.push([ c, t, r?.wordBoundary === !0 ]);
  }, b = (e, t = i) => {
    let r = e === void 0 ? void 0 : W(e);
    if (r && (t.includes(r) || ge(r.trim()))) return;
    y(r, "[redacted]");
  }, _ = (e, t = i) => {
    if (!e) return;
    if (b(e, t), e.includes("+")) b(e.replaceAll("+", " "), t);
    if (e.includes(" ")) b(e.replaceAll(" ", "+"), t);
    for (let r of [ e, e.replaceAll("+", " ") ]) {
      let c = r.split(/\s+/);
      if (c.length > 1) for (let u of c) b(u, t);
    }
  }, Y = (e, t) => {
    y(e, t);
    let r = URL.parse(e);
    if (r === null) return;
    if (y(r.href, t), r.origin !== "null") y(r.origin, t);
    y(r.host, t), y(r.hostname, t);
    let c = r.hostname.replace(/^\[|\]$/g, "");
    if (c !== r.hostname) y(c, t);
    _(r.username, t), _(r.password, t), b(r.pathname !== "/" ? r.pathname : void 0, t);
    for (let u of r.pathname.split("/")) _(u, t);
    b(r.search, t);
    for (let [u, A] of r.searchParams.entries()) _(u, t), _(A, t);
    for (let u of r.search.replace(/^\?/, "").split("&")) {
      let A = u.indexOf("=");
      if (A === -1) _(u, t); else _(u.slice(0, A), t), _(u.slice(A + 1), t);
    }
  };
  for (let e of Me(l, n)) _(e);
  if ("url" in n && typeof n.url === "string") Y(n.url, i);
  if ("oauth" in n && typeof n.oauth?.authServerMetadataUrl === "string") {
    let e = n.oauth.authServerMetadataUrl, t = "[redacted]";
    try {
      let r = new URL(e).origin;
      if (r !== "null") t = r;
    } catch {}
    Y(e, t);
  }
  if ("command" in n && typeof n.command === "string") {
    let e = l && "command" in l && typeof l.command === "string" ? iOe(l.command) : void 0;
    if (y(n.command, e ?? i, {
      wordBoundary: !0
    }), Array.isArray(n.args)) for (let t of n.args) _(t);
  }
  if ("headers" in n && n.headers) for (let e of Object.values(n.headers)) _(e);
  if ("env" in n && n.env) for (let e of Object.values(n.env)) _(e);
  if ("authToken" in n && typeof n.authToken === "string") _(n.authToken);
  if (F.length === 0) return v ? `${w}\u2026` : o;
  F.sort((e, t) => t[0].length - e[0].length);
  let k = new Map;
  for (let [e, t, r] of F) {
    let c = k.get(e);
    if (!c) k.set(e, {
      replacement: t,
      wordBoundary: r
    }); else if (c.replacement === "[redacted]" && t !== "[redacted]") k.set(e, {
      replacement: t,
      wordBoundary: c.wordBoundary && r
    });
  }
  let I = new Int32Array(M.length), x = [], V = new Set, re = 0, oe = M.toUpperCase();
  for (let [e, t] of k) {
    if (!oe.includes(e.toUpperCase())) continue;
    let r = t.wordBoundary && /^[\w-]+$/.test(e), c = `${r}:${e.replace(/[a-z]+/g, d => d.toUpperCase())}`;
    if (V.has(c)) continue;
    V.add(c);
    let u = dl(e), A = r ? `(?<![\\w:.-])${u}(?![\\w:.-])` : u, m = new RegExp(A, "gi");
    for (let d = m.exec(M); d !== null; d = m.exec(M)) {
      if (++re > Ae) throw Error("MCP error text repeats too much of the config");
      let p = d.index + d[0].length;
      if (p > (I[d.index] ?? 0)) I[d.index] = p, x[d.index] = t.replacement;
      m.lastIndex = d.index + 1;
    }
  }
  let U = [];
  for (let [e, t] of I.entries()) {
    if (t === 0) continue;
    let r = U.at(-1);
    if (r && e < r.end) r.end = Math.max(r.end, t); else U.push({
      start: e,
      end: t,
      replacement: x[e] ?? ""
    });
  }
  let E = M.length;
  if (v) {
    let e = E, t = 12;
    while (e > 0 && E - e < t && /[%0-9A-Fa-f\uFFFD]/.test(M[e - 1] ?? "")) e--;
    if (e < E && /[%\uFFFD]/.test(M.slice(e, E))) {
      let p = M.slice(e, E).search(/[%\uFFFD]/);
      E = e + p;
    }
    let r = F[0]?.[0].length ?? 0, c = Math.max(0, E - (r - 1)), u = D(F.map(([p]) => p.toUpperCase())).sort((p, L) => L.length - p.length), A = M.slice(c, E), m = [], d = "";
    for (let p of A) m.push(d.length, ...p.length === 2 ? [ -1 ] : []), d += p.toUpperCase();
    for (let p = 0; p < A.length; p++) {
      let L = m[p] ?? 0, se = L === -1 ? A.charAt(p) + d.slice(m[p + 1] ?? d.length) : d.slice(L);
      if (Re(se, u)) {
        E = c + p;
        break;
      }
    }
  }
  let H = e => e === 0 ? 0 : (T[e - 1] ?? 0) + 1, S = "", N = 0;
  for (let e of U) {
    if (e.start >= E) break;
    S += w.slice(H(N), T[e.start]) + e.replacement, N = e.end;
  }
  if (N < E) S += w.slice(H(N), T[E]);
  let X = S.charCodeAt(S.length - 1);
  if (X >= 55296 && X <= 56319) S = S.slice(0, -1);
  return v ? `${S}\u2026` : S;
}

export { Mgr, fo, Zps, La, Kb, oXt, Hgr, a7, aao, efs, sXt, XHn, Pit, txt, nxt, hR, Dgr, tfs };
