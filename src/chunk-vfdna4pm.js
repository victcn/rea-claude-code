// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { jln } from "./chunk-6ah1819r.js";

import { $n, k } from "./chunk-xywp7esx.js";

import { z } from "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import { j, E } from "./chunk-b0z4bv3v.js";

import { nw } from "./chunk-ddr690nj.js";

import { _, t } from "./chunk-kawq2919.js";

import { ne, Ame } from "./chunk-5wbhf1bk.js";

import { JS, rq, nL, QOo, ZOo } from "./chunk-9yajep3y.js";

import { i } from "./chunk-hedpgw9m.js";

import { gn } from "./chunk-yxennhe9.js";

import { WH, UBe, LHs, A2n, NHs, $Hs } from "./chunk-f1zpf9me.js";

import { O_, m$e } from "./chunk-ccv68e56.js";

import { _d } from "./chunk-9tdwgnpn.js";

import { en } from "./chunk-0qwx38yy.js";

import { Zf } from "./chunk-9zhz923g.js";

import { basename as b, dirname as O, join as K } from "path";

var r8 = "<persisted-output>", LRt = "</persisted-output>", agr = "<truncated-output>", fio = "</truncated-output>", Y = "[Old tool result content cleared]", J = "tengu_velvet_ibis";

function Xre(e, n, r = WH, o = !1) {
  if (!Number.isFinite(n)) return n;
  if (o) return Math.min(n, r);
  let s = k(J, {})?.[e];
  if (typeof s === "number" && Number.isFinite(s) && s > 0) return s;
  return Math.min(n, r);
}

var jCe = 2e3, L = "tool result was not saved";

function v(e) {
  let n = e.charCodeAt(0);
  if (e.length === 1 && n >= 55296 && n <= 57343) return `%u${n.toString(16).toUpperCase()}`;
  return Array.from(Buffer.from(e), r => `%${r.toString(16).toUpperCase().padStart(2, "0")}`).join("");
}

function Z(e) {
  let n = "";
  for (let r of String(e)) {
    let o = /^[A-Za-z0-9_-]$/.test(r) || r === "." && n !== "";
    n += o ? r : v(r);
  }
  if (n === "") return "%";
  return nw(n) ? v(n.charAt(0)) + n.slice(1) : n;
}

function WCe(e, n, r) {
  let o = r ? "json" : "txt";
  return K(e, `${Z(n)}.${o}`);
}

async function sY(e, n, r, o, a = NHs) {
  let s = Array.isArray(e);
  if (s) {
    if (e.some(g => !_d(g) || g.type !== "text")) return {
      error: "Cannot persist tool results containing non-text content"
    };
  }
  let l = O_();
  if (l !== void 0) {
    let p = Math.min(a, l.maxBytes), g, d, h;
    try {
      g = s ? _(e, null, 2) : e, d = Ame(g, p), h = Buffer.from(d);
    } catch {
      return {
        error: L
      };
    }
    let C = await m$e(l, {
      leafName: b(WCe(r, n, s)),
      data: h
    });
    if (C === null) return {
      error: L
    };
    let {preview: A, hasMore: U} = hit(d, jCe);
    return {
      filepath: C.path,
      originalSize: g.length,
      isJson: s,
      preview: A,
      hasMore: U,
      truncatedAtBytes: d === g ? void 0 : p
    };
  }
  await nL(r, o);
  let u = WCe(r, n, s), R, f;
  try {
    R = s ? _(e, null, 2) : e, f = Ame(R, a);
  } catch (p) {
    let g = I(j(p));
    return t(`Failed to persist tool result to ${u}: ${g}`, {
      level: "error"
    }), {
      error: g
    };
  }
  let T = f === R ? void 0 : a, S = z() && o !== void 0 ? rq(O(u), b(u)) : void 0;
  if (z() && o !== void 0 && S !== void 0) {
    let p = await o.write(S, f, {
      precondition: {
        type: "ifAbsent"
      },
      mode: 438 & ~process.umask()
    });
    if (!p.ok && p.error.code !== "AlreadyExists") {
      let g = ae(p.error, u);
      return t(`Failed to persist tool result to ${u}: ${g}`, {
        level: "error"
      }), {
        error: g
      };
    }
    if (p.ok) t(`Persisted tool result to ${u} (${en(f.length)})`);
  } else {
    let p = gn();
    try {
      await QOo(O(u), p), await ZOo(u, p), await p.writeExclusive(u, f), t(`Persisted tool result to ${u} (${en(f.length)})`);
    } catch (g) {
      if (E(g) !== "EEXIST") return t(`Failed to persist tool result to ${u}: ${I(j(g))}`, {
        level: "error"
      }), {
        error: I(j(g))
      };
      let d;
      try {
        d = await p.lstat(u);
      } catch {
        return {
          error: "tool result path could not be checked; not persisted"
        };
      }
      if (d?.isSymbolicLink) return {
        error: "tool result path is a link; not persisted"
      };
      if (d?.isFile !== !0) return {
        error: "tool result path is not a regular file; not persisted"
      };
      if (d.nlink > 1) return {
        error: "tool result path has another name; not persisted"
      };
    }
  }
  let {preview: y, hasMore: P} = hit(f, jCe);
  return {
    filepath: u,
    originalSize: R.length,
    isJson: s,
    preview: y,
    hasMore: P,
    truncatedAtBytes: T
  };
}

function zCe(e) {
  let n = `${r8}\n`;
  return n += e.truncatedAtBytes === void 0 ? `Output too large (${en(e.originalSize)}). Full output saved to: ${e.filepath}\n\n` : `Output exceeded the ${en(e.truncatedAtBytes)} persist limit; only the first ${en(e.truncatedAtBytes)} were saved to: ${e.filepath}\n\n`, 
  n += `Preview (first ${en(jCe)}):\n`, n += e.preview, n += e.hasMore ? `\n...\n` : `\n`, 
  n += LRt, n;
}

var V = "1023 bytes";

function lgr(e, n) {
  if (Array.isArray(e) && e.some(l => !_d(l) || l.type !== "text")) return null;
  let r = typeof e === "string" ? e : e.flatMap(l => l.type === "text" && "text" in l && typeof l.text === "string" ? [ l.text ] : []).join(`\n`), o = en(r.length), a = Math.max(0, n - N(o, V, "").length), s = ne(r, hit(r, a).preview.length);
  if (s.length === r.length) return null;
  return {
    message: N(o, en(s.length), s),
    originalSize: r.length
  };
}

function N(e, n, r) {
  return `${agr}\nOutput too large (${e}). It could not be saved, so only the first ${n} are shown; the rest was dropped. If the tool can page or filter its results, call it again for the part you need.\n\n${r}\n${fio}`;
}

async function C4e(e, n, r, o, a) {
  return GCe(e.mapToolResultToToolResultBlockParam(n, r), e, o, a);
}

async function GCe(e, n, r, o) {
  return q(e, n.name, r, Xre(n.name, n.maxResultSizeChars, n.persistenceThresholdCeiling, n.skipAggregateToolResultBudget === !0), o);
}

function mio(e) {
  if (!e) return !0;
  if (typeof e === "string") return e.trim() === "";
  if (!Array.isArray(e)) return !1;
  if (e.length === 0) return !0;
  return e.every(n => _d(n) && n.type === "text" && "text" in n && (typeof n.text !== "string" || n.text.trim() === ""));
}

async function q(e, n, r, o, a) {
  let s = e.content;
  if (mio(s)) return i("tengu_tool_empty_result", {
    toolName: $n(n)
  }), {
    ...e,
    content: `(${n} completed with no output)`
  };
  if (!s) return e;
  let l = o ?? LHs;
  if (!gio(s, l)) return e;
  let u = await sY(s, e.tool_use_id, r, a);
  if (iY(u)) {
    if (O_() !== void 0) {
      let f = lgr(s, l);
      if (f === null) return e;
      return i("tengu_tool_result_persisted", {
        toolName: $n(n),
        originalSizeBytes: f.originalSize,
        persistedSizeBytes: f.message.length,
        estimatedOriginalTokens: Math.ceil(f.originalSize / UBe),
        estimatedPersistedTokens: Math.ceil(f.message.length / UBe),
        thresholdUsed: l,
        stored: !1
      }), {
        ...e,
        content: f.message
      };
    }
    return e;
  }
  let R = zCe(u);
  return i("tengu_tool_result_persisted", {
    toolName: $n(n),
    originalSizeBytes: u.originalSize,
    persistedSizeBytes: R.length,
    estimatedOriginalTokens: Math.ceil(u.originalSize / UBe),
    estimatedPersistedTokens: Math.ceil(R.length / UBe),
    thresholdUsed: l,
    truncatedAtCap: u.truncatedAtBytes !== void 0
  }), {
    ...e,
    content: R
  };
}

function hit(e, n) {
  if (e.length <= n) return {
    preview: e,
    hasMore: !1
  };
  let o = e.slice(0, n).lastIndexOf(`\n`), a = o > n * .5 ? o : n;
  return {
    preview: e.slice(0, a),
    hasMore: !0
  };
}

function iY(e) {
  return "error" in e;
}

function THn() {
  return {
    seenIds: new Set,
    replacements: new Map
  };
}

function $us(e) {
  return {
    seenIds: new Set(e.seenIds),
    replacements: new Map(e.replacements)
  };
}

function Fus(e, n) {
  if (!k("tengu_hawthorn_steeple", !1)) return;
  if (e) return dgr(e, n ?? []);
  return THn();
}

function F(e) {
  if (typeof e !== "string") return !1;
  let n = e.startsWith(jln) ? e.slice(jln.length) : e;
  return n.startsWith(r8) || n === Y;
}

function Uus(e, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type !== "user" || o.isVirtual || !Array.isArray(o.message.content)) continue;
    for (let a of o.message.content) if (a.type === "tool_result" && a.tool_use_id === n) {
      let {content: s} = a;
      return !a.is_error && !!s && !F(s) && !(typeof s === "string" && s.startsWith(agr));
    }
  }
  return !1;
}

function gio(e, n) {
  return !D(e) && H(e) > n;
}

function D(e) {
  return Array.isArray(e) && e.some(n => _d(n) && (n.type === "image" || n.type === "document"));
}

function H(e) {
  if (typeof e === "string") return e.length;
  if (!Array.isArray(e)) return 0;
  return e.reduce((n, r) => n + (_d(r) && r.type === "text" && "text" in r && typeof r.text === "string" ? r.text.length : 0), 0);
}

function Q(e) {
  let n = new Map;
  for (let r of e) {
    if (r.type !== "assistant") continue;
    let o = r.message.content;
    if (!Array.isArray(o)) continue;
    for (let a of o) if (_d(a) && a.type === "tool_use") n.set(a.id, a.name);
  }
  return n;
}

function ee(e) {
  if (e.type !== "user" || !Array.isArray(e.message.content)) return [];
  return e.message.content.flatMap(n => {
    if (!_d(n) || n.type !== "tool_result" || !n.content) return [];
    if (F(n.content)) return [];
    if (D(n.content)) return [];
    return [ {
      toolUseId: n.tool_use_id,
      content: n.content,
      size: H(n.content)
    } ];
  });
}

function G(e) {
  let n = [], r = [], o = () => {
    if (r.length > 0) n.push(r);
    r = [];
  }, a = new Set;
  for (let s of e) if (s.type === "user") r.push(...ee(s)); else if (s.type === "assistant") {
    if (!a.has(s.message.id)) o(), a.add(s.message.id);
  }
  return o(), n;
}

function te(e, n) {
  return e.reduce((r, o) => {
    let a = n.replacements.get(o.toolUseId);
    if (a !== void 0) r.mustReapply.push({
      ...o,
      replacement: a
    }); else if (n.seenIds.has(o.toolUseId)) r.frozen.push(o); else r.fresh.push(o);
    return r;
  }, {
    mustReapply: [],
    frozen: [],
    fresh: []
  });
}

function re(e, n, r) {
  let o = [ ...e ].sort((l, u) => u.size - l.size), a = [], s = n + e.reduce((l, u) => l + u.size, 0);
  for (let l of o) {
    if (s <= r) break;
    a.push(l), s -= l.size;
  }
  return a;
}

function oe(e, n) {
  return e.map(r => {
    if (r.type !== "user" || !Array.isArray(r.message.content)) return r;
    let o = r.message.content;
    if (!o.some(s => _d(s) && s.type === "tool_result" && n.has(s.tool_use_id))) return r;
    return {
      ...r,
      message: {
        ...r.message,
        content: o.map(s => {
          if (!_d(s) || s.type !== "tool_result") return s;
          let l = n.get(s.tool_use_id);
          return l === void 0 ? s : {
            ...s,
            content: l
          };
        })
      }
    };
  });
}

async function se(e, n, r) {
  let o = await sY(e.content, e.toolUseId, n, r);
  if (iY(o)) return null;
  return {
    content: zCe(o),
    originalSize: o.originalSize,
    truncatedAtCap: o.truncatedAtBytes !== void 0
  };
}

function Bus(e) {
  let n = new Set;
  for (let r of e) if (!Number.isFinite(r.maxResultSizeChars) || r.skipAggregateToolResultBudget === !0) {
    n.add(r.name);
    for (let o of r.aliases ?? []) n.add(o);
  }
  return n;
}

async function ie(e, n, r, o, a = new Set) {
  let s = G(e), l = a.size > 0 ? Q(e) : void 0, u = d => l !== void 0 && a.has(l.get(d) ?? ""), R = A2n, f = new Map, T = [], S = 0, y = 0;
  for (let d of s) {
    let {mustReapply: h, frozen: C, fresh: A} = te(d, n);
    if (h.forEach(m => f.set(m.toolUseId, m.replacement)), S += h.length, A.length === 0) {
      d.forEach(m => n.seenIds.add(m.toolUseId));
      continue;
    }
    A.filter(m => u(m.toolUseId)).forEach(m => n.seenIds.add(m.toolUseId));
    let M = A.filter(m => !u(m.toolUseId)), w = C.reduce((m, x) => m + (u(x.toolUseId) ? 0 : x.size), 0), W = M.reduce((m, x) => m + x.size, 0), B = w + W > R ? re(M, w, R) : [], X = new Set(B.map(m => m.toolUseId));
    if (d.filter(m => !X.has(m.toolUseId)).forEach(m => n.seenIds.add(m.toolUseId)), 
    B.length === 0) continue;
    y++, T.push(...B);
  }
  if (f.size === 0 && T.length === 0) return {
    messages: e,
    newlyReplaced: []
  };
  let P = await Promise.all(T.map(async d => [ d, await se(d, r, o) ])), p = [], g = 0;
  for (let [d, h] of P) {
    if (n.seenIds.add(d.toolUseId), h === null) continue;
    g += d.size, f.set(d.toolUseId, h.content), n.replacements.set(d.toolUseId, h.content), 
    p.push({
      kind: "tool-result",
      toolUseId: d.toolUseId,
      replacement: h.content
    }), i("tengu_tool_result_persisted_message_budget", {
      originalSizeBytes: h.originalSize,
      persistedSizeBytes: h.content.length,
      estimatedOriginalTokens: Math.ceil(h.originalSize / UBe),
      estimatedPersistedTokens: Math.ceil(h.content.length / UBe),
      truncatedAtCap: h.truncatedAtCap
    });
  }
  if (f.size === 0) return {
    messages: e,
    newlyReplaced: []
  };
  if (p.length > 0) t(`Per-message budget: persisted ${p.length} tool results across ${y} over-budget message(s), shed ~${en(g)}, ${S} re-applied`), 
  i("tengu_message_level_tool_result_budget_enforced", {
    resultsPersisted: p.length,
    messagesOverBudget: y,
    replacedSizeBytes: g,
    reapplied: S
  });
  return {
    messages: oe(e, f),
    newlyReplaced: p
  };
}

async function jus(e, n, r, o, a, s) {
  if (!n) return e;
  let l = await ie(e, n, r, s, a);
  if (l.newlyReplaced.length > 0) o?.(l.newlyReplaced);
  return l.messages;
}

function dgr(e, n, r) {
  let o = THn(), a = new Set(G(e).flat().map(s => s.toolUseId));
  for (let s of a) o.seenIds.add(s);
  for (let s of n) if (s.kind === "tool-result" && a.has(s.toolUseId)) o.replacements.set(s.toolUseId, s.replacement);
  if (r) {
    for (let [s, l] of r) if (a.has(s) && !o.replacements.has(s)) o.replacements.set(s, l);
  }
  return o;
}

function AHn(e, n, r) {
  if (!e) return;
  return dgr(n, r, e.replacements);
}

function ae(e, n) {
  let r = Zf(e);
  if (r === void 0) return `storage write failed: ${e.code}`;
  let o = Error("storage write failed");
  return o.code = r, o.path = n, I(o);
}

function I(e) {
  let n = e;
  if (n.code) switch (n.code) {
   case "ENOENT":
    return `Directory not found: ${n.path ?? "unknown path"}`;

   case "EACCES":
    return `Permission denied: ${n.path ?? "unknown path"}`;

   case "ENOSPC":
    return "No space left on device";

   case "EROFS":
    return "Read-only file system";

   case "EMFILE":
    return "Too many open files";

   case "EEXIST":
    return `File already exists: ${n.path ?? "unknown path"}`;

   default:
    return `${n.code}: ${n.message}`;
  }
  return e.message;
}

async function Ice(e, n, r, {threshold: o = $Hs, storageV5: a} = {}) {
  if (e.length <= o) return e;
  let s = await sY(e, `hook-${n}-${r}`, JS(), a);
  if (iY(s)) {
    if (O_() !== void 0) return lgr(e, o)?.message ?? e;
    return i("tengu_hook_output_persisted", {
      source: c(r),
      originalSizeBytes: e.length,
      persistedSizeBytes: 0,
      truncatedFallback: !0
    }), `${ne(e, o)}\n\n[Hook ${r} truncated at ${o} chars \u2014 persist-to-disk failed: ${s.error}]`;
  }
  let l = zCe(s);
  return i("tengu_hook_output_persisted", {
    source: c(r),
    originalSizeBytes: s.originalSize,
    persistedSizeBytes: l.length,
    truncatedFallback: !1,
    truncatedAtCap: s.truncatedAtBytes !== void 0
  }), l;
}

function CHn(e, n) {
  return n.startsWith(r8) && n.endsWith(LRt) && n !== e;
}

var git = "https://claude.com/claude-code", Nus = "https://claude.ai";

function le(e, n) {
  return e?.includes("_staging_") === !0 || n?.includes("staging") === !0;
}

function igr(e, n) {
  return e?.includes("_local_") === !0 || n?.includes("localhost") === !0;
}

function DRt(e, n) {
  if (igr(e, n)) return "http://localhost:4000";
  if (le(e, n)) return "https://claude-ai.staging.ant.dev";
  return "https://claude.ai";
}

function Jd(e, n, r) {
  let {toCompatSessionId: o} = import.meta.require("./chunk-n22xa77z.js"), a = o(e), l = `${DRt(a, n)}/code/${a}`;
  return r ? `${l}?${new URLSearchParams(r)}` : l;
}

export { git, Nus, igr, DRt, Jd, r8, LRt, agr, fio, Xre, jCe, WCe, sY, zCe, lgr, C4e, GCe, mio, hit, iY, THn, $us, Fus, Uus, gio, Bus, jus, dgr, AHn, Ice, CHn };
