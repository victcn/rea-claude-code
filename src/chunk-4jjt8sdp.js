// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, ys } from "./chunk-2v9tfgc3.js";

import { K, lt, B, q, Oc } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { lo } from "./chunk-ddr690nj.js";

import { _, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { wPs, Et, nie, aEo, Qe, trn, zpe, Ke, dm, k, Rr, Tl, gxr } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { i } from "./chunk-hedpgw9m.js";

import { p } from "./chunk-jkzenvsk.js";

import { p4n } from "./chunk-5brm0azz.js";

import { X_, Mxo, su } from "./chunk-cjt10y7b.js";

import { Eo } from "./chunk-ncyzf9zz.js";

import { Hxe } from "./chunk-v2stbart.js";

import { Mt, YH, On, uc, XH } from "./chunk-3kd8r7rn.js";

import { o, T } from "./chunk-cvcg6n1z.js";

var XZt = `# Reporting outcomes\n\nReport what actually happened, not what you intended. When you say something is done, sent, saved, fixed, or verified, that claim must rest on a result you observed in this session \u2014 tool output, the file as it now reads, the page as it now loads \u2014 not on what the step should have produced. If you did not check, say you did not check. If any step failed, was skipped, or came back different from what you expected, say so in the first sentence of your report, before anything else, even when the rest of the work succeeded. Never quietly work around a failure in a way that makes it look resolved; a problem the user can see is recoverable, one your summary hides is not. When you stop before the task is complete, your first line says so plainly and names what is left. Do not describe partial work as done, and do not let a summary read as more certain than the evidence behind it.`;

var w6e = "x-anthropic-billing-header:";

function WEs(e) {
  let n = e.text;
  return typeof n === "string" && n.startsWith(w6e);
}

function k1(e) {
  let n = e.text;
  return typeof n === "string" && (n.startsWith(w6e) || n === XZt);
}

function wH(e) {
  let n = Bun.hash(_(e));
  return typeof n === "bigint" ? Number(n & 0xffffffffn) : n;
}

var Z = new Set([ "type", "text", "thinking", "id", "tool_use_id", "name", "input", "source", "content", "cache_control" ]);

function S(e, n) {
  if (typeof e === "string") {
    n.push("s", String(e.length), e.slice(0, 32), e.slice(-32));
    return;
  }
  switch (e.type) {
   case "text":
   case "image":
   case "document":
   case "search_result":
   case "thinking":
   case "redacted_thinking":
   case "tool_use":
   case "tool_result":
   case "tool_reference":
   case "server_tool_use":
   case "web_search_tool_result":
   case "web_fetch_tool_result":
   case "advisor_tool_result":
   case "code_execution_tool_result":
   case "bash_code_execution_tool_result":
   case "text_editor_code_execution_tool_result":
   case "tool_search_tool_result":
   case "mcp_tool_use":
   case "mcp_tool_result":
   case "mcp_tool_listing":
   case "container_upload":
   case "compaction":
   case "fallback":
   case "browser_state":
    break;

   default:
    {
      let s = e;
      break;
    }
  }
  if (n.push(e.type), "text" in e && typeof e.text === "string") n.push("t", String(e.text.length), e.text.slice(0, 32), e.text.slice(-32));
  if ("thinking" in e && typeof e.thinking === "string") n.push("k", String(e.thinking.length));
  if ("id" in e && typeof e.id === "string") n.push("i", e.id);
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") n.push("u", e.tool_use_id);
  if ("name" in e && typeof e.name === "string") n.push("n", e.name);
  if ("input" in e && e.input !== void 0) n.push("p", _(e.input));
  if ("source" in e && e.source && typeof e.source === "object") {
    let s = e.source;
    if (n.push("m", String(s.type ?? ""), String(s.media_type ?? "")), typeof s.data === "string") n.push(String(s.data.length));
  }
  let r = "content" in e ? e.content : void 0;
  if (Array.isArray(r)) {
    n.push("[", String(r.length));
    for (let s of r) S(s, n);
    n.push("]");
  } else if (typeof r === "string") n.push("c", String(r.length), r.slice(0, 32), r.slice(-32));
  for (let [s, u] of Object.entries(e)) {
    if (Z.has(s) || u === void 0) continue;
    let l = typeof u === "string" ? u : _(u);
    n.push(s, l.length > 256 ? `len:${l.length}` : l);
  }
}

var v6e = -1;

function zEs(e) {
  return e.map(n => {
    if ((n.type === "api_system" || n.type === "user") && n.ephemeral) return v6e;
    let r = [ n.message.role ];
    if (n.type === "api_system" && n.outputConfig !== void 0) {
      let l = n.outputConfig.timing;
      r.push(`oc:${n.outputConfig.effort ?? ""}${l ? `:${l.now}` : ""}`);
    }
    let s = n.message.content;
    if (Array.isArray(s)) {
      r.push(String(s.length));
      for (let l of s) S(l, r);
    } else S(s, r);
    let u = Bun.hash(r.join("|"));
    return typeof u === "bigint" ? Number(u & 0xffffffffn) : u;
  });
}

var T1 = 3e5, CR = 36e5;

function fBn(e) {
  if ((e?.cache_creation?.ephemeral_1h_input_tokens ?? 0) > 0) return "1h";
  return (e?.cache_creation?.ephemeral_5m_input_tokens ?? 0) > 0 ? "5m" : void 0;
}

var $F = "main";

function nyo(e, n) {
  return !n && (e.startsWith("repl_main_thread") || e === "sdk" || e === "compact");
}

var Q = 2e3, X = 200, x = {
  "5m": T1,
  "1h": CR
};

var GEs = {
  system_prompt_changed: "system prompt changed",
  tools_changed: "tool definitions changed",
  model_changed: "model changed",
  fast_mode_changed: "fast mode toggled",
  cache_scope_or_ttl_changed: "cache scope or TTL changed",
  betas_changed: "beta headers changed",
  effort_changed: "effort changed",
  thinking_mode_changed: "thinking toggled",
  thinking_display_changed: "thinking display changed",
  auto_mode_changed: "auto mode toggled",
  overage_changed: "usage-limit state changed",
  extra_body_changed: "extra request fields changed",
  defer_loading_changed: "deferred tool loading changed",
  messages_rewritten: "earlier messages changed",
  ttl_expired_5m: "idle past the 5m TTL",
  ttl_expired_1h: "idle past the 1h TTL",
  likely_server_side: "prompt unchanged \u2014 likely server-side",
  unknown: "unknown"
};

class E {
  entries=[];
  requests=0;
  hits=0;
  misses=0;
  expectedRebuilds=0;
  coldStarts=0;
  cacheReadTokens=0;
  cacheCreationTokens=0;
  inputTokens=0;
  missRecacheTokens=0;
  lastMissAt=null;
  lastMissAttribution=null;
  missCauses={};
  pendingAttribution=null;
  dropExpectedAt=null;
  touchedAt=null;
  touch(e) {
    if (this.entries.length > 0) this.touchedAt = Math.max(this.touchedAt ?? 0, e);
  }
  expectDrop(e) {
    this.dropExpectedAt = e;
  }
  attribute(e) {
    this.pendingAttribution = e;
  }
  record(e) {
    let n = this.entries.at(-1) ?? null, r = this.dropExpectedAt;
    this.dropExpectedAt = null;
    let s = this.pendingAttribution;
    this.pendingAttribution = null;
    let u = r !== null && n !== null && e.at - Math.max(n.at, this.touchedAt ?? 0) < x[n.ttl], l, m = this.cacheReadTokens + this.cacheCreationTokens > 0 || e.cacheReadTokens + e.cacheCreationTokens > 0;
    if (n === null) l = "cold"; else if (!m) l = "uncached"; else if (n.cacheReadTokens + n.cacheCreationTokens === 0 && e.cacheReadTokens + e.cacheCreationTokens > 0) l = "cold"; else {
      let g = n.inputTokens + n.cacheReadTokens + n.cacheCreationTokens, j = e.inputTokens + e.cacheReadTokens + e.cacheCreationTokens, R = Math.min(g, j), Y = R - e.cacheReadTokens;
      l = e.cacheReadTokens < R * .95 && Y >= Q ? u ? "expected" : "miss" : "hit";
    }
    let b = e.cacheCreationTokens === 0 && n !== null ? n.ttl : e.ttl, f = l === "miss" && s !== null ? {
      ...e,
      ttl: b,
      outcome: l,
      attribution: s
    } : {
      ...e,
      ttl: b,
      outcome: l
    };
    if (this.entries.push(f), this.entries.length > X) this.entries.shift();
    switch (this.requests++, this.cacheReadTokens += e.cacheReadTokens, this.cacheCreationTokens += e.cacheCreationTokens, 
    this.inputTokens += e.inputTokens, l) {
     case "hit":
      this.hits++;
      break;

     case "miss":
      this.misses++, this.missRecacheTokens += e.cacheCreationTokens, this.lastMissAt = e.at, 
      this.lastMissAttribution = s;
      for (let g of s?.causes ?? []) this.missCauses[g] = (this.missCauses[g] ?? 0) + 1;
      break;

     case "expected":
      this.expectedRebuilds++;
      break;

     case "cold":
      this.coldStarts++;
      break;

     case "uncached":
      break;
    }
    return f;
  }
  summary(e) {
    let n = this.cacheReadTokens + this.cacheCreationTokens + this.inputTokens, r = this.entries.at(-1) ?? null, s = x[r?.ttl ?? "5m"], u = this.cacheReadTokens + this.cacheCreationTokens > 0, l = r !== null && r.cacheReadTokens + r.cacheCreationTokens > 0, m = r !== null ? Math.max(r.at, this.touchedAt ?? 0) : 0;
    return {
      requests: this.requests,
      hits: this.hits,
      misses: this.misses,
      expectedRebuilds: this.expectedRebuilds,
      coldStarts: this.coldStarts,
      hitRatio: n > 0 ? this.cacheReadTokens / n : null,
      cacheWriteTokens: this.cacheCreationTokens,
      missRecacheTokens: this.missRecacheTokens,
      lastMissAt: this.lastMissAt,
      lastMissAttribution: this.lastMissAttribution,
      missCauses: {
        ...this.missCauses
      },
      lastRequest: r,
      cachingObserved: u,
      lastActivityAt: r !== null ? m : null,
      expiresAt: r !== null && l ? m + s : null,
      warm: r !== null && l && e - m < s
    };
  }
}

class M {
  #e=new Map;
  record(e, n) {
    let r = this.#e.get(e);
    if (r === void 0) r = new E, this.#e.set(e, r);
    return r.record(n);
  }
  expectDrop(e, n) {
    this.#e.get(e)?.expectDrop(n);
  }
  attribute(e, n) {
    this.#e.get(e)?.attribute(n);
  }
  touch(e, n) {
    this.#e.get(e)?.touch(n);
  }
  summary(e, n) {
    return (this.#e.get(e) ?? new E).summary(n);
  }
  estimateRecacheTokens(e) {
    let n = this.#e.get(e), r = n?.entries.at(-1);
    if (!r) return 0;
    if (n?.dropExpectedAt != null) return null;
    return r.inputTokens + r.cacheReadTokens + r.cacheCreationTokens;
  }
  clear(e) {
    if (e === void 0) this.#e.clear(); else this.#e.delete(e);
  }
}

var ryo = new lt(() => new M);

function C() {
  return ryo.of(B());
}

function VEs(e, n) {
  try {
    return C().record(e, n);
  } catch (r) {
    return d(r), null;
  }
}

function KEs(e, n) {
  try {
    C().attribute(e, n);
  } catch (r) {
    d(r);
  }
}

function Fvr(e, n) {
  try {
    C().touch(e, n);
  } catch (r) {
    d(r);
  }
}

function DFe(e = $F, n = Date.now()) {
  try {
    C().expectDrop(e, n);
  } catch (r) {
    d(r);
  }
}

function j8(e = $F, n = Date.now()) {
  return C().summary(e, n);
}

function Uvr(e = $F) {
  return C().estimateRecacheTokens(e);
}

function qEs() {
  return Oc((e, n) => {
    if (n === "cd" || n === "hydrate") return;
    C().clear();
  });
}

var J = "tengu_fennel_godwit";

function pBn(e) {
  if (e === void 0) return !1;
  if (X_(Ke(e), "opus_5_prompt_bundle", e) !== !0) return !1;
  return !k(J, !1);
}

function y(e) {
  return !p4n() && X_(e, "opus_5_5_prompt_bundle") === !0;
}

var ee = new Set([ "turn_updates", "bash_output_audience_note", "silent_turn_reminder", "thinking_display_updates" ]), te = new Set([ "bison_cairn", "larch_cistern" ]), ne = new Set([ "silent_turn_reminder", "quizzical_shore" ]), oe = 64, re = "tengu_model_capability_from_client_data", O = "tengu_model_capability_off_from_client_data";

function NF(e, n, r, s) {
  if (s !== void 0) return s;
  let u = X_(n, e, r);
  if (u !== void 0) return u;
  let l = ee.has(e) && Hxe(n) || te.has(e) && pBn(r) || ne.has(e) && y(n), m = gxr(r);
  if (l) {
    if (m?.data?.[e] !== !1) return !0;
    return P(O, e, m), !1;
  }
  if (m?.data?.[e] !== !0) return !1;
  return P(re, e, m), !0;
}

function IEs(e, n, r) {
  let s = Mxo(n);
  return [ ...aEo(r, n) ?? [], ...s.keys() ].findLast(u => u.startsWith(e) && s.get(u) !== !1)?.slice(e.length);
}

function P(e, n, r) {
  let s = r.model ?? On(Qe()), u = Eo().clientDataCapabilityLogged ??= new Map, l = q(), m = u.get(l);
  if (m === void 0) {
    if (m = new Set, u.set(l, m), u.size > oe) {
      let g = u.keys().next().value;
      if (g !== void 0) u.delete(g);
    }
  }
  let f = `${e === O ? "-" : ""}${n}:${s}`;
  if (!m.has(f)) m.add(f), i(e, {
    capability: c(n),
    model: Et(s)
  });
}

function se(e, n) {
  if (ie() !== e) return !1;
  return NF("per_turn_effort", e, n);
}

function ie() {
  try {
    return Ke(Qe());
  } catch {
    return null;
  }
}

wPs(se);

function OEs(e) {
  return !1;
}

function MEs(e) {
  return Mt(e) === "claude-opus-4-8";
}

function HEs(e) {
  return !1;
}

var ae = new Set([ "claude-opus-4-6", "claude-haiku-4-5", "claude-opus-4-5", "claude-opus-4-1", "claude-opus-4-0", "claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet", "claude-3-5-haiku" ]);

function L(e) {
  return ae.has(Mt(e));
}

function qZt(e, n) {
  if (n === void 0) return L(e);
  return n.model !== void 0 && L(n.model);
}

function Axe(e) {
  return /-eap($|\[)/i.test(e);
}

var F = "tengu_loggia_roster", w = [], ce = p(() => T(o().trim())), v;

function ue() {
  let e = k(F, w), n = v;
  if (n !== void 0 && n.raw === e) return n.ids;
  let r = ce().safeParse(e);
  if (!r.success) t(`GrowthBook: ${F} is not a JSON array of model ids; treating it as empty`, {
    level: "warn"
  });
  let s = r.success ? r.data : w;
  return v = {
    raw: e,
    ids: s
  }, s;
}

function Nvr(e) {
  return ue().some(n => YH(e, n));
}

function $vr(e) {
  let n = h();
  return nie() ? n.delegationCostsFirstCompiledOnly(e) : n.delegationCostsFirst(e);
}

function D(e) {
  if (e === void 0) return !1;
  let n = Ke(e), r = X_(n, "lucky_cerf", e);
  if (r === !1) return !1;
  if (nie()) return r === !0;
  if (NF("lucky_cerf", n, e)) return !0;
  let s = Rr("tengu_lucky_cerf", null);
  return Array.isArray(s) && s.some(u => typeof u === "string" && YH(n, u));
}

function z(e, n) {
  let r = Tl()?.[e];
  return typeof r === "object" && r !== null && Object.entries(r).some(([s, u]) => u === !0 && n.includes(s));
}

function DEs(e) {
  return a.CLAUDE_CODE_BASALT_COVE || z("basalt_cove", e);
}

var V = "tengu_thrifty_sonic";

function le() {
  let e = h();
  return nie() ? e.bashFirstSessionAssignmentCompiledOnly() : e.bashFirstSessionAssignment();
}

function N() {
  let e = K7(Qe()), n = Ke(e), r = X_(n, "thrifty_sonic", e);
  if (r === !1) return "none";
  if (Hxe(n) || y(n) || Tl()?.[V] === !0 || r) return "forced";
  return trn(e) ? "cohort" : "none";
}

function YZt() {
  if (a.CLAUDE_CODE_THRIFTY_SONIC !== void 0) return a.CLAUDE_CODE_THRIFTY_SONIC;
  switch (le()) {
   case "forced":
    return !0;

   case "none":
    return !1;

   case "cohort":
    return k(V, !1);
  }
}

var I = "tengu_cozy_teapot";

function H(e) {
  return e === "strict" || e === "relaxed" ? e : void 0;
}

function LEs() {
  return a.CLAUDE_CODE_COZY_TEAPOT ?? h().bashFirstSteerVariant();
}

function de() {
  return H(Tl()?.[I]) ?? (y(Ke(K7(Qe()))) ? "relaxed" : void 0) ?? H(Rr(I, null)) ?? "strict";
}

var pe = "tengu_gorse_plover", A = "tengu_willow_tern";

function me(e, n) {
  return e || Tl()?.[n] === !0 || k(n, !1);
}

function NEs() {
  let e = Eo();
  return e.bashActFirstEnabled ??= me(a.CLAUDE_CODE_GORSE_PLOVER, pe), e.bashActFirstEnabled;
}

function $Es(e) {
  return NF("amber_astrolabe", Ke(e), e, a.CLAUDE_CODE_AMBER_ASTROLABE || void 0);
}

function FEs(e) {
  return NF("bison_cairn", Ke(e), e, a.CLAUDE_CODE_BISON_CAIRN);
}

function UEs(e) {
  return NF("larch_cistern", Ke(e), e, a.CLAUDE_CODE_LARCH_CISTERN || void 0);
}

function tyo() {
  let e = Tl()?.[A];
  if (typeof e === "boolean") return e;
  if (e !== void 0) {
    let n = h();
    if (!n.unusableWritingOverrideTold) n.unusableWritingOverrideTold = !0, t(`willow_tern: ignoring non-boolean clientData ${A} value of type ${typeof e}`);
  }
  return;
}

function BEs(e) {
  if (a.CLAUDE_CODE_WILLOW_TERN) return !0;
  let n = tyo();
  if (n !== void 0) return n;
  if (e === void 0) return !1;
  let r = Ke(e);
  if (Hxe(r)) return !0;
  if (X_(r, "opus_5_prompt_bundle", e) !== !0) return !1;
  return k(A, !1);
}

function HFe() {
  return a.CLAUDE_CODE_SIMPLE;
}

function he(e) {
  let n = Ke(e), r = X_(n, "lean_prompt", e);
  if (r !== void 0) return !r;
  if (Axe(e) || n === "claude-mythos-5") return !1;
  if (n.includes("claude-3-") || n.includes("haiku") || n.includes("sonnet") || n === "claude-opus-4-0" || n === "claude-opus-4-1" || n === "claude-opus-4-5" || n === "claude-opus-4-6" || n === "claude-opus-4-7") return !0;
  return !su();
}

function BY(e) {
  let n = h();
  return nie() ? n.leanPromptCompiledOnly(e) : n.leanPrompt(e);
}

function CP(e) {
  return e.leanPrompt ?? BY(e.model);
}

function U(e) {
  if (!e) return !1;
  if (Le(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !0;
  if (ys(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !1;
  if (!he(e)) return !0;
  if (k("tengu_velvet_tide", !1)) return !0;
  return z("simple_system_prompt", Ke(e));
}

var fe = "breezy_horizon";

function K7(e) {
  if (e === void 0) return;
  let n = h();
  return nie() ? n.modelForPromptCompiledOnly(e) : n.modelForPrompt(e);
}

function jEs(e) {
  let n = h().modelForPrompt;
  return n.cache.has(e) ? n(e) : void 0;
}

function G(e) {
  let n = a.CLAUDE_CODE_BREEZY_HORIZON;
  if (ys(n)) return e;
  let r = dm(e), s = Tl()?.[fe], u = n ?? (typeof s === "object" && s !== null ? Object.entries(s).find(([f]) => f === r)?.[1] : void 0);
  if (u === void 0) return e;
  let l = n !== void 0 ? "env" : "client_data";
  if (typeof u !== "string" || !_e(u)) return t(`[breezy_horizon] ${l}: ignoring ${String(u)} for ${r}: not a model id`, {
    level: "warn"
  }), e;
  let m = dm(u);
  if (m === r) {
    if (!XH(uc(u))) t(`[breezy_horizon] ${l}: ${u} names ${r} itself, so it maps nothing`, {
      level: "warn"
    });
    return e;
  }
  let b = h().promptModelSwapsLogged;
  if (!b.has(e)) b.add(e), i("tengu_breezy_horizon", {
    from_model: Et(r),
    to_model: Et(m),
    source: c(l)
  });
  return u;
}

function _e(e) {
  return zpe(e) || !/\s/.test(e) && Axe(e) || XH(uc(e));
}

class W {
  bashFirstSessionAssignment=lo(N);
  bashFirstSessionAssignmentCompiledOnly=lo(N);
  bashFirstSteerVariant=lo(de);
  leanPrompt=lo(U);
  leanPromptCompiledOnly=lo(U);
  modelForPrompt=lo(G);
  modelForPromptCompiledOnly=lo(G);
  delegationCostsFirst=lo(D);
  delegationCostsFirstCompiledOnly=lo(D);
  promptModelSwapsLogged=new Set;
  unusableWritingOverrideTold=!1;
}

var ge = new K(() => new W);

function h() {
  return ge.of(B().host);
}

export { pBn, NF, IEs, OEs, MEs, HEs, qZt, Axe, Nvr, $vr, DEs, YZt, LEs, NEs, $Es, FEs, UEs, tyo, BEs, HFe, BY, CP, K7, jEs, XZt, w6e, WEs, k1, wH, v6e, zEs, T1, CR, fBn, $F, nyo, GEs, ryo, VEs, KEs, Fvr, DFe, j8, Uvr, qEs };
