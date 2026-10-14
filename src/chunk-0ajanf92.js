// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ry } from "./chunk-vxr6sv7z.js";

import { K, q, jw, UC, wq, kYn } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { j, l } from "./chunk-b0z4bv3v.js";

import { _, uo, t } from "./chunk-kawq2919.js";

import { Pr } from "./chunk-z52kmxx4.js";

import { I } from "./chunk-5wbhf1bk.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { kr } from "./chunk-cqgvwwgb.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { Lms, Nms, vlo, $ms, gYe, LXt } from "./chunk-sqb9meyh.js";

import { Gu } from "./chunk-rfqc2edt.js";

import { jIt, gFn, GIt, H8, uz, g1, Yi, lFe, ok } from "./chunk-4v78v8fd.js";

import { eA, no, Fr, $n, k, lTo, dTo, Upt, h8e, mie, cTo, DMs, Vu, R5, _8e, VGn, Si, rG, B0, I9 } from "./chunk-xywp7esx.js";

import { rM, Zmt } from "./chunk-jnzpsr0d.js";

import { bn } from "./chunk-1z2heevg.js";

import { RC } from "./chunk-nnrb0acr.js";

import { ht, qt, je, Rt } from "./chunk-s2t7g8m9.js";

import { dr } from "./chunk-y3nc3daq.js";

import { $l, Tt } from "./chunk-9tdwgnpn.js";

import { DF } from "./chunk-77jtkrp2.js";

import { cc } from "./chunk-eqbvs4ht.js";

import { Qd, zm, vP, zo, rd } from "./chunk-htg8b98h.js";

import { rm, a6t, D3, KA, DAt, xe, Wt, jOn, Ko, ri } from "./chunk-84yp45y8.js";

import { gpe } from "./chunk-2mq6q9dt.js";

import { PVo } from "./chunk-chypy8s6.js";

import { Xb, Gm, kc } from "./chunk-mr8d36p7.js";

import { Ba } from "./chunk-mfje7p8w.js";

import { et } from "./chunk-59na0977.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N, D } from "./chunk-hmqkrrtz.js";

async function ghn(e, n) {
  if (n.paths.length === 0) return;
  let r = [];
  for (let o of n.paths) try {
    let s = ot(o);
    r.push(s);
    let u = await a6t(e.readFileState, s, {
      requireReadBeforeWrite: !0
    });
    if (u !== null) t(`[memdir] re-synced readFileState for ${o} after the background ${n.source} pass wrote it (${u === "changed" ? "content changed" : "mtime only, content identical"})`);
  } catch (s) {
    t(`[memdir] left ${_(o)} out of the background ${n.source} pass's change notice, could not resolve it: ${l(s)}`);
  }
  if (r.length === 0) return;
  e.enqueuePendingMemoryUpdate({
    ...n,
    paths: D(r)
  });
}

import { basename as ze, sep as Ye } from "path";

var Te = new WeakSet;

function hhn(e) {
  return `the ${e.ruleBehavior} rule "${bn(e.ruleValue)}"`;
}

function AXn(e, n, r) {
  if (Te.has(e)) return;
  Te.add(e);
  let o = `${hhn(n)} (from ${RC(n.source)})`, s = n.ruleBehavior === "deny" ? `${o} blocks those writes` : `${o} needs your approval for each write, and background saving can't ask`;
  return `Claude isn't saving memories to ${r} in the background: ${s}. Saving resumes once that rule is removed or no longer covers that folder, and may then include what was skipped.`;
}

class Oe {
  extractor=null;
  drainer=async () => {};
  disarm=() => {};
  owedWithin=() => !1;
  onPassEnded=null;
}

var me = new K(() => new Oe);

function be(e, n, r, o, s) {
  let u = $l(), y = u ? je : Rt, h = u ? "ls/find/cat/stat/wc/head/tail and similar" : "Get-ChildItem/Get-Content/Select-Object -First/-Last and similar", M = u ? "rm" : "Remove-Item", H = n.length > 0 ? `\n\n## Existing memory files\n\n${n}\n\nCheck this list before writing \u2014 update an existing file rather than creating a duplicate.` : "", B = r ? "scope guidance, " : "", Y = `Available tools: ${et}, ${Fr}, ${no}, read-only ${y} (${h}), and ${ht}/${qt} for paths inside the memory directory only, and ${y} ${M} of .md files inside the memory directory only (outside protected subdirectories like .git or agents${u ? "; rm takes no flags except -f" : ""}). All other tools \u2014 MCP, Agent, write-capable ${y}, etc \u2014 will be denied.`, E = `You have a limited turn budget. ${ht} requires a prior ${et} of the same file, so the efficient strategy is: turn 1 \u2014 issue all ${et} calls in parallel for every file you might update; turn 2 \u2014 issue all ${qt}/${ht} calls in parallel. Do not interleave reads and writes across multiple turns.`;
  return [ `You are now acting as the memory extraction subagent. Analyze the most recent ~${e} messages above and use them to update your persistent memory systems.`, "", Y, "", E, "", `You MUST only use content from the last ~${e} messages to update your persistent memories. Do not waste any turns attempting to investigate or verify that content further \u2014 no grepping source files, no reading code to confirm a pattern exists, no git commands.` + H, "", "If nothing is worth saving, output only 'Nothing to save.' Do not explain why.", "", "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.", "", `Apply the memory types, ${B}what-not-to-save criteria, and frontmatter format from the Memory section of your system prompt \u2014 it is already in your context above.`, ...jIt() ? [ "", "Skip the project-skill upkeep step here: your writes are restricted to the memory directory, so record the correction as a feedback memory only." ] : [], ...o ? [ "", `The ${Xb} / ${Gm} / ${kc} tools are unavailable here, so skip anything the scope guidance marks as shared with the project \u2014 the main conversation saves those; never file them in the personal directory instead. Save only what belongs in your personal memory directory.` ] : [], ...[] ].join(`\n`);
}

function _e(e) {
  return e.type === "user" || e.type === "assistant";
}

function Fe(e, n) {
  if (n === null || n === void 0) return N(e, _e);
  let r = !1, o = 0;
  for (let s of e) {
    if (!r) {
      if (s.uuid === n) r = !0;
      continue;
    }
    if (_e(s)) o++;
  }
  if (!r) return N(e, _e);
  return o;
}

var $e = 3;

function Ne(e, n) {
  let r = new Set(n.map(o => o.uuid));
  return e.filter(o => !r.has(o.uuid));
}

function We(e) {
  return e.some(n => n.type === "attachment" && n.attachment.type === "max_turns_reached");
}

function De(e) {
  return e.findLast(n => n.type === "assistant")?.isApiErrorMessage === !0;
}

function ye(e, n, r) {
  let o = n === void 0, s = new Set;
  for (let u of e) {
    if (!o) {
      if (u.uuid === n) o = !0;
      continue;
    }
    if (u.type === "user") {
      let h = u.message.content;
      if (Array.isArray(h) && h.some(M => M.type === "tool_result" && M.is_error !== !0 && s.has(M.tool_use_id))) return !0;
      continue;
    }
    if (u.type !== "assistant") continue;
    let y = u.message.content;
    if (!Array.isArray(y)) continue;
    for (let h of y) {
      if (r && h.type === "tool_use" && Upt.has(h.name)) return !0;
      if (h.type === "tool_use" && h.name === kc) {
        s.add(h.id);
        continue;
      }
      let M = Me(h);
      if (M !== void 0 && B0(M)) return !0;
    }
  }
  return r && !o && ye(e, void 0, !0);
}

var Ce = 3;

function Le(e) {
  return N(e.split(/\s+/), Boolean);
}

function Ie(e) {
  if (e.type !== "user" || e.isMeta) return !1;
  let n = e.message.content;
  if (typeof n === "string") return Le(n) >= Ce;
  if (!Array.isArray(n)) return !1;
  return n.some(r => r.type === "text" && Le(r.text) >= Ce);
}

function Ue(e, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o === void 0 || !eA(o)) continue;
    if (o.type === "user") {
      if (!o.isMeta) return o.uuid;
    } else if (o.type === "attachment" && o.attachment.type === "queued_command" && !o.attachment.isMeta && o.attachment.source_uuid !== void 0) return o.attachment.source_uuid;
  }
  return n?.uuid;
}

function He(e, n) {
  let r = n === void 0;
  for (let o of e) {
    if (!r) {
      if (o.uuid === n) r = !0;
      continue;
    }
    if (Ie(o)) return !0;
  }
  if (!r) return e.some(Ie);
  return !1;
}

function Me(e) {
  if (e.type !== "tool_use" || e.name !== ht && e.name !== qt) return;
  let n = e.input;
  if (typeof n === "object" && n !== null && "file_path" in n) {
    let r = n.file_path;
    return typeof r === "string" ? r : void 0;
  }
  return;
}

var ue = null, Be = null, X = null, CXn = "rm|remove-item|ri|del|erase", at = new RegExp(`^(?:${CXn})$`, "i");

function A(e, n, r) {
  return t(`[autoMem] denied ${e.name} (${r}): ${n}`), i("tengu_auto_mem_tool_denied", {
    tool_name: $n(e.name),
    reason: c(r)
  }), {
    behavior: "deny",
    message: n,
    decisionReason: {
      type: "other",
      reason: n
    }
  };
}

function mt(e, n) {
  let r = e.trim().match(/"[^"]*"|'[^']*'|\S+/g) ?? [];
  if (r.length < 2) return;
  if (!at.test(r[0])) return;
  let o = [];
  for (let s = 1; s < r.length; s++) {
    let u = r[s];
    if (/^-(?:Literal)?Path$/i.test(u)) continue;
    if (u.startsWith("-")) return;
    let y = u.startsWith('"') && u.endsWith('"') || u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1) : u;
    if (/[*?[\]$`(){}|;&<>"',]/.test(y)) return;
    if (!tbt(y, n)) return;
    o.push(y);
  }
  return o.length > 0 ? o : void 0;
}

var ut = new Set([ et, Fr, no, ht, qt ]);

async function ct(e, n) {
  let r = await DF(e);
  if (r.kind !== "simple" || r.commands.length !== 1) return !1;
  let o = r.commands[0];
  if (o === void 0 || o.argvSourceLiteral !== !0 || o.argv[0] !== "ls" || o.redirects.length > 0 || o.envVars.length > 0) return !1;
  let s = h => h.replace(/[/\\]+$/, ""), u = new Set(uo(n).map(s)), y = o.argv.slice(1).filter(h => !/^-[laA1hF]+$/.test(h));
  return y.length > 0 && y.every(h => {
    if (h.startsWith("-") || h.startsWith("~") || h !== h.trim() || h.split(/[/\\]/).includes("..") || /[*?[]/.test(h) || h.includes("\\")) return !1;
    try {
      return uo(ot(h)).every(M => u.has(s(M)));
    } catch {
      return !1;
    }
  });
}

function dt(e) {
  return e.replace(/['"`\\\u2018-\u201F]/g, "").includes("..");
}

function Ee(e, n) {
  if (e?.type === "subcommandResults") return [ ...e.reasons.values() ].some(r => Ee(r.decisionReason, n));
  return n === "rule" ? e?.type === "rule" && e.rule.ruleBehavior !== "allow" : e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked" || e?.type === "other" && e.reason === rM;
}

function RXn(e, n) {
  try {
    for (let r of [ qt, ht ]) {
      let o = zo(e, {
        name: r
      }) ?? rd(e, {
        name: r
      });
      if (o !== null) return o;
    }
    for (let r of uo(n)) for (let o of [ "deny", "ask" ]) {
      let s = Yi(r, e, "edit", o);
      if (s !== null) return s;
    }
  } catch (r) {
    d(j(r));
  }
  return;
}

async function lt(e, n) {
  let r = await DF(e);
  if (r.kind !== "simple") return;
  if (r.commands.length !== 1) return;
  let o = r.commands[0];
  if (!o) return;
  if (o.argv[0] !== "rm") return;
  if (o.redirects.length > 0) return;
  if (o.envVars.length > 0) return;
  let s = [], u = !1;
  for (let y = 1; y < o.argv.length; y++) {
    let h = o.argv[y];
    if (h === void 0) continue;
    if (!u) {
      if (h === "--") {
        u = !0;
        continue;
      }
      if (h.startsWith("-")) {
        if (h === "-f" || h === "--force") continue;
        return;
      }
    }
    if (/[*?[]/.test(h)) return;
    if (!h.startsWith("/") || !tbt(h, n)) return;
    s.push(h);
  }
  return s.length > 0 ? s : void 0;
}

function tbt(e, n) {
  return e.endsWith(".md") && I9(e, n);
}

function xXn(e, n, {fork: r = "dream", onWriteAllowed: o} = {}) {
  return async (s, u, y, h, M, H) => {
    if (R5()) return A(s, Zmt, "memory_paused");
    if (s.mcpInfo) return A(s, "MCP tools are not available to the memory agent", "mcp_tool");
    if (H !== void 0 || y.hookAskFloor) return A(s, "a PreToolUse hook requires confirmation for this call, and the memory agent runs headless with no user to answer \u2014 the call is denied", "hook_ask");
    let B;
    if (s.name === je || s.name === Rt) {
      let E = PVo("the memory agent", u);
      if (E.deniedFlag !== void 0) return A(s, E.message, "shell_flag");
      if (B = E.sanitizedInput, O() === "windows" && y.getAppState().toolPermissionContext.blockReadsOutsideWorkingDirectories === !0 && typeof u.command === "string" && dt(u.command)) return A(s, "On Windows with permissions.blockReadsOutsideWorkingDirectories on, the memory agent's shell commands may not contain '..' anywhere, even split by quotes or a backslash, because where it leads cannot be checked. Use absolute paths, and avoid '..' in patterns too.", "windows_dot_dot");
    }
    try {
      let E = import.meta.require("./chunk-kkzev6w9.js"), {checkRuleBasedPermissions: v} = E, {carriesAskRuleIntent: R} = E, F = y.getAppState(), T = e.replace(/[/\\]+$/, ""), J = F.toolPermissionContext.blockReadsOutsideWorkingDirectories === !0 && F.toolPermissionContext.restricted !== !0 && !GIt() && ![ T, ...uo(T) ].some(p => VGn(p.replace(/[/\\]+$/, ""))), L = {
        ...y,
        toolUseId: M
      }, te = {
        ...L,
        getAppState: () => ({
          ...F,
          toolPermissionContext: {
            ...F.toolPermissionContext,
            additionalWorkingDirectories: new Map([ ...F.toolPermissionContext.additionalWorkingDirectories, [ T, {
              path: T,
              source: "session"
            } ] ])
          }
        })
      }, W = await v(s, u, J && ut.has(s.name) ? te : L, {
        crashIsObjection: !0
      }), Q = W?.behavior === "ask" && O() !== "windows" && J && s.name === je && W.decisionReason?.type === "safetyCheck" && W.decisionReason.circuitBreaker === "outsideReadsBlocked" && !R(W) && typeof u.command === "string" && await ct(u.command, e) && await v(s, u, te, {
        crashIsObjection: !0
      }) === null;
      if (W !== null && !Q) return A(s, W.message ?? "a configured permission rule blocks this call for the memory agent", Ee(W.decisionReason, "rule") || W.behavior === "ask" && R(W) ? "permission_rule" : Ee(W.decisionReason, "read_block") ? "read_block" : "permission_check");
    } catch (E) {
      return d(j(E)), A(s, "the memory agent could not evaluate configured permission rules; failing closed", "rule_check_failed");
    }
    if (s.name === cc) return {
      behavior: "allow",
      updatedInput: u
    };
    if (s.name === et || s.name === Fr || s.name === no) {
      let E = y.getAppState().toolPermissionContext, v = lFe(s, u, E);
      if (v) return A(s, v.message, "network_path");
      if (E.blockReadsOutsideWorkingDirectories === !0) {
        let R = ok(s, u, E);
        if (R.behavior === "deny") {
          let F = s.getPath?.(u), T = uo(e).map(L => L.endsWith(Ye) ? L : L + Ye);
          if (!(F !== void 0 && !GIt() && uo(F).every(L => T.some(te => I9(L, te)))) || R.decisionReason.type !== "other" || R.decisionReason.reason !== rM) return A(s, R.message, "read_block");
        }
      }
      return {
        behavior: "allow",
        updatedInput: u
      };
    }
    if (s.name === je || s.name === Rt) {
      let E = B ?? u, v = s.inputSchema.safeParse(u);
      if (v.success) {
        if (s.isReadOnly(v.data, y)) return {
          behavior: "allow",
          updatedInput: E
        };
        let T = v.data.command;
        if (typeof T === "string") {
          if ((s.name === je ? await lt(T, e) : mt(T, e)) !== void 0) return {
            behavior: "allow",
            updatedInput: E
          };
        }
      }
      let R = s.name === je;
      return A(s, `Only read-only shell commands and ${R ? "rm (no flags except -f)" : "Remove-Item"} of .md files under ${e} (not protected subdirectories like .git or agents) are permitted in this context (${R ? "ls, find, grep, cat, stat, wc, head, tail, and similar" : "Get-ChildItem, Get-Content, Select-Object -First/-Last, and similar"})`, "shell_not_allowed");
    }
    if ((s.name === ht || s.name === qt) && "file_path" in u) {
      let E = u.file_path;
      if (typeof E === "string" && tbt(E, e)) return o?.(E, M), {
        behavior: "allow",
        updatedInput: u
      };
    }
    let Y = $l() ? je : Rt;
    return A(s, `only ${et}, ${Fr}, ${no}, read-only ${Y}, and ${ht}/${qt} within ${e} are allowed`, "tool_not_allowed");
  };
}

function pt(e, n) {
  return async (r, o, s) => {
    if (UC()) return A(r, Zmt, "memory_paused");
    if (r.name === Ba || r.name === cc) return {
      behavior: "allow",
      updatedInput: o
    };
    if (!mie(cTo(s.options.mcpClients))) return A(r, "the session has no CCR memory server; this background memory pass cannot run", "no_memory_server");
    let u = s.getAppState().toolPermissionContext;
    if ([ ...Qd(u), ...zm(u) ].some(y => vP(u, r, y))) return A(r, `${r.name} is blocked by a permission rule for this session`, "permission_rule");
    if (!dTo.has(r.name)) return A(r, `this background memory pass may only call ${[ ...dTo ].join(", ")}`, "tool_not_allowed");
    if (Upt.has(r.name) && wq() !== e) return n(), A(r, "a newer user turn has started; this background memory pass may no longer write", "newer_turn");
    return {
      behavior: "allow",
      updatedInput: o
    };
  };
}

function Ke(e) {
  let n = new Set;
  for (let r of e) {
    if (r.type !== "user") continue;
    let o = r.message.content;
    if (!Array.isArray(o)) continue;
    for (let s of o) if (s.type === "tool_result" && s.is_error === !0) n.add(s.tool_use_id);
  }
  return n;
}

function Xe(e, n) {
  let r = Me(e);
  if (r === void 0) return;
  let o;
  try {
    o = ot(r);
  } catch {
    return;
  }
  return tbt(o, n) ? o : void 0;
}

function ft(e, n) {
  let r = Ke(e), o = [];
  for (let s of e) {
    if (s.type !== "assistant") continue;
    let u = s.message.content;
    if (!Array.isArray(u)) continue;
    for (let y of u) {
      if (y.type === "tool_use" && r.has(y.id)) continue;
      let h = Xe(y, n);
      if (h !== void 0) o.push(h);
    }
  }
  return D(o);
}

function qe(e) {
  let n = N(e, r => ze(r) !== Gu);
  return {
    source: "extract",
    summary: n > 0 ? `saved ${n} ${I(n, "memory", "memories")}` : "updated the memory index",
    paths: e
  };
}

function gt(e, n) {
  let r = new Map, o = [];
  return {
    onMessage: u => {
      if (u.type === "assistant") {
        let h = u.message.content;
        if (!Array.isArray(h)) return;
        for (let M of h) {
          let H = Xe(M, n);
          if (M.type === "tool_use" && H !== void 0) r.set(M.id, H);
        }
        return;
      }
      if (u.type !== "user") return;
      let y = u.message.content;
      if (!Array.isArray(y)) return;
      for (let h of y) {
        if (h.type !== "tool_result") continue;
        let M = r.get(h.tool_use_id);
        if (M === void 0) continue;
        if (r.delete(h.tool_use_id), h.is_error === !0) continue;
        o.push(M), a6t(e, M, {
          requireReadBeforeWrite: !0
        });
      }
    },
    completedWritePaths: () => D(o)
  };
}

function B1r(e) {
  if (a.CLAUDE_CODE_POST_TURN_MEMORY && h8e() === null) t("[extractMemories] CLAUDE_CODE_POST_TURN_MEMORY is set but CLAUDE_CODE_POST_TURN_MEMORY_CONFIG is missing or invalid; the pass is off"), 
  f("ccr_memory_extract", "config_invalid");
  let n = new Set, r, o, s = 0;
  function u(p) {
    if (p) r = p, o = void 0, s = 0;
  }
  function y(p, P) {
    if (!p) {
      if (s++, s >= $e) {
        t(`[extractMemories] (mcp) stopped early ${s} passes in a row; the cursor moves on and these turns are not reviewed again`), 
        u(P);
        return;
      }
    }
    o = q(), t(`[extractMemories] (mcp) ${p ? "writes refused after a newer prompt" : "the pass stopped early (an API error, the turn cap with nothing saved, or a throw)"}; the cursor stays and the next pass reviews these turns again`);
  }
  let h = !1, M = !1, H = 0, B, Y;
  function E(p) {
    return n.add(p), p.finally(() => n.delete(p));
  }
  let v = ue?.createLaptopExtractRunner(e, E);
  function R() {
    let p = Y;
    if (Y = void 0, p) clearTimeout(p.timer);
    return p;
  }
  function F(p, P, w = wq(), Z = kYn()) {
    if (R(), p.idleFlushSeconds === 0) return;
    Y = {
      timer: setTimeout(T, p.idleFlushSeconds * 1e3).unref(),
      dueAt: performance.now() + p.idleFlushSeconds * 1e3,
      promptIndex: w,
      personPrompt: Z,
      context: P
    };
  }
  function T() {
    let p = R();
    if (!p || M || gpe() || wq() !== p.promptIndex) return;
    E(L({
      context: p.context,
      trigger: "idle_flush",
      promptIndex: p.promptIndex,
      personPrompt: p.personPrompt
    }));
  }
  function J(p) {
    try {
      me.of(e).onPassEnded?.(p);
    } catch (P) {
      d(j(P));
    }
  }
  async function L({context: p, appendSystemMessage: P, trigger: w, promptIndex: Z = wq(), personPrompt: Pe = kYn()}) {
    let {messages: S} = p, b = h8e(), V = Fe(S, r);
    if (o !== void 0 && o !== q()) o = void 0, s = 0;
    if (o === void 0 && ye(S, r, !!b)) {
      t("[extractMemories] skipping \u2014 conversation already wrote to memory in this range"), 
      u(S.at(-1)?.uuid), i("tengu_extract_memories_skipped_direct_write", {
        message_count: V
      });
      return;
    }
    if (!He(S, r)) {
      t("[extractMemories] skipping \u2014 no user prose since last extraction"), u(S.at(-1)?.uuid), 
      i("tengu_extract_memories_skipped_no_prose", {
        message_count: V
      });
      return;
    }
    let le = b?.everyNTurns ?? k("tengu_bramble_lintel", null) ?? 1, ke = D3(p);
    if (w === void 0) {
      if (H++, H < le) {
        if (b) F(b, p, Z, Pe);
        return;
      }
    }
    H = 0;
    let pe = b ? void 0 : RXn(p.toolUseContext.getAppState().toolPermissionContext, rG());
    if (pe !== void 0) {
      if (t(`[extractMemories] skipping \u2014 ${hhn(pe)} would refuse memory writes`), 
      i("tengu_extract_memories_skipped_permission_rule", {
        message_count: V
      }), P !== void 0) {
        let x = AXn(e, pe, Si());
        if (x !== void 0) P(Wt(x, "warning"));
      }
      return;
    }
    M = !0;
    let ne = Date.now(), fe;
    try {
      if (b) {
        if (wq() !== Z) {
          t("[extractMemories] skipping (mcp) \u2014 a newer turn started");
          return;
        }
        t(`[extractMemories] starting (mcp, ${w ?? "cadence"}) \u2014 ${V} new messages`);
        let U = b.staleNote ? Lms(e) : void 0, Se = U ? vlo(U, ri(S), $ms) : "", de = 0, ie = await KA({
          promptMessages: [ xe({
            content: b.instruction + Se
          }) ],
          cacheSafeParams: ke,
          canUseTool: pt(Z, () => {
            de++;
          }),
          querySource: "extract_memories",
          forkLabel: "extract_memories",
          overrides: {
            mcpRequestMeta: DMs({
              citesEvent: Ue(S, Pe)
            })
          },
          skipTranscript: !0,
          maxTurns: b.maxTurns,
          skipCacheWrite: !0
        }), ee = Ne(ie.messages, S);
        if (U) Nms(e, U, ee);
        let st = Ke(ee), re = N(ee.flatMap(G => G.type === "assistant" && Array.isArray(G.message.content) ? G.message.content : []), G => G.type === "tool_use" && Upt.has(G.name) && !st.has(G.id)), ve = We(ee), ae = De(ee) || re === 0 && ve, it = ae && re === 0 ? s + 1 : 0;
        if (re > 0 || de === 0 && !ae) u(S.at(-1)?.uuid); else y(!ae, S.at(-1)?.uuid);
        i("tengu_extract_memories_extraction", {
          mode: c("mcp"),
          trigger: c(w ?? "cadence"),
          account_memory_line_rendered: !1,
          every_n_turns: le,
          input_tokens: ie.totalUsage.input_tokens,
          output_tokens: ie.totalUsage.output_tokens,
          cache_read_input_tokens: ie.totalUsage.cache_read_input_tokens,
          cache_creation_input_tokens: ie.totalUsage.cache_creation_input_tokens,
          message_count: V,
          parent_context_tokens: rm(S),
          compacted_in_fork: ee.some(Ko),
          turn_count: N(ee, G => G.type === "assistant"),
          written: re,
          superseded_writes: de,
          stale_note_rendered: Se !== "",
          review_unfinished: ae,
          unfinished_in_a_row: it,
          reached_cap: ve,
          duration_ms: Date.now() - ne
        }), g("ccr_memory_extract"), J({
          outcome: re > 0 ? "saved" : ae ? "unfinished" : de > 0 ? "writes_refused" : "nothing_to_save",
          trigger: w ?? "cadence",
          written: re,
          durationMs: Date.now() - ne
        });
        return;
      }
      let x = Si();
      t(`[extractMemories] starting \u2014 ${V} new messages, memoryDir=${x}`);
      let oe = gFn(), ge = uz() || oe, Je = xXn(x, void 0, {
        fork: "extraction"
      }), Qe = LXt(await gYe(x, dr().signal, p.toolUseContext.storageV5)), we = !1, he = X?.isPromoterExtractorOn() === !0 ? X.typedTurnsInWindow(e, p.toolUseContext.session.id, S, r) : [], Ze = be(V, Qe, ge, oe, we) + (X?.typedTurnsPromptBlock(he) ?? ""), ce = X !== null && he.length > 0 ? ry("extract_memories") : void 0, tt = ce === void 0 ? void 0 : X?.registerExtractorFork(e, ce, he);
      fe = gt(p.toolUseContext.readFileState, x);
      let C = await KA({
        promptMessages: [ xe({
          content: Ze
        }) ],
        cacheSafeParams: ke,
        canUseTool: Je,
        querySource: "extract_memories",
        forkLabel: "extract_memories",
        ...ce !== void 0 && {
          overrides: {
            agentId: ce
          }
        },
        skipTranscript: !0,
        maxTurns: 5,
        skipCacheWrite: DAt(),
        onMessage: fe.onMessage
      }).finally(() => tt?.());
      u(S.at(-1)?.uuid);
      let z = ft(C.messages, x), rt = N(C.messages, U => U.type === "assistant"), Ae = C.totalUsage.input_tokens + C.totalUsage.cache_creation_input_tokens + C.totalUsage.cache_read_input_tokens, nt = Ae > 0 ? (C.totalUsage.cache_read_input_tokens / Ae * 100).toFixed(1) : "0.0";
      if (t(`[extractMemories] finished \u2014 ${z.length} files written, cache: read=${C.totalUsage.cache_read_input_tokens} create=${C.totalUsage.cache_creation_input_tokens} input=${C.totalUsage.input_tokens} (${nt}% hit)`), 
      z.length > 0) t(`[extractMemories] memories saved: ${z.join(", ")}`); else t("[extractMemories] no memories saved this run");
      let se = z.filter(U => ze(U) !== Gu), Re = N(se, g1);
      if (i("tengu_extract_memories_extraction", {
        mode: c("file"),
        input_tokens: C.totalUsage.input_tokens,
        output_tokens: C.totalUsage.output_tokens,
        cache_read_input_tokens: C.totalUsage.cache_read_input_tokens,
        cache_creation_input_tokens: C.totalUsage.cache_creation_input_tokens,
        message_count: V,
        parent_context_tokens: rm(S),
        compacted_in_fork: C.messages.some(Ko),
        turn_count: rt,
        files_written: z.length,
        memories_saved: se.length,
        team_memories_saved: Re,
        account_memory_line_rendered: we,
        duration_ms: Date.now() - ne
      }), t(`[extractMemories] writtenPaths=${z.length} memoryPaths=${se.length} appendSystemMessage defined=${P != null}`), 
      se.length > 0) {
        let U = jOn(se);
        U.teamCount = Re, P?.(U);
      }
      if (z.length > 0) await ghn(p.toolUseContext, qe(z));
      g("memory_extract");
    } catch (x) {
      if (t(`[extractMemories] error: ${x}`), i("tengu_extract_memories_error", {
        duration_ms: Date.now() - ne,
        mode: c(b ? "mcp" : "file")
      }), m(b ? "ccr_memory_extract" : "memory_extract", "agent_error"), b) J({
        outcome: "failed",
        trigger: w ?? "cadence",
        written: 0,
        durationMs: Date.now() - ne
      }), y(!1, S.at(-1)?.uuid);
      let oe = fe?.completedWritePaths() ?? [];
      if (oe.length > 0) try {
        await ghn(p.toolUseContext, qe(oe));
      } catch (ge) {
        t(`[extractMemories] could not queue the notice for writes that landed before the error: ${l(ge)}`);
      }
    } finally {
      M = !1;
      let x = B;
      if (B = void 0, x && le <= 1) t("[extractMemories] running trailing extraction for stashed context"), 
      await L({
        context: x.context,
        appendSystemMessage: x.appendSystemMessage,
        trigger: "trailing",
        promptIndex: x.promptIndex,
        personPrompt: x.personPrompt
      }); else if (x && b) F(b, x.context, x.promptIndex, x.personPrompt);
    }
  }
  async function te(p, P) {
    if (p.toolUseContext.agentId) return;
    let w = v?.onTurnEnd(p, P);
    try {
      if (_8e() || Ge()) await W(p, P);
    } finally {
      await w;
    }
  }
  async function W(p, P) {
    R();
    let w = h8e() !== null;
    if (w && (UC() || Pr() || jw())) return;
    if (w && !(mie(cTo(p.toolUseContext.options.mcpClients)) && p.toolUseContext.options.tools.some(Z => Tt(Z, lTo)))) {
      t("[extractMemories] skipping (mcp) \u2014 CCR memory server not mounted");
      return;
    }
    if (!w && !k("tengu_passport_quail", !1) && !Ge()) return;
    if (!w && !Vu()) {
      if (R5()) r = p.messages.at(-1)?.uuid ?? r;
      return;
    }
    if (!w && H8()) return;
    if (kr() !== null) return;
    if (M) {
      t("[extractMemories] extraction in progress \u2014 stashing for trailing run"), 
      i("tengu_extract_memories_coalesced", {}), B = {
        context: p,
        appendSystemMessage: P,
        promptIndex: wq(),
        personPrompt: kYn()
      };
      return;
    }
    await L({
      context: p,
      appendSystemMessage: P
    });
  }
  let Q = me.of(e);
  Q.extractor = (p, P) => E(te(p, P)), Q.drainer = async (p = 6e4) => {
    let P = Date.now() + p;
    T(), v?.disarmIdleFlush();
    while (n.size > 0 && Date.now() < P) await Promise.race([ Promise.all(n).catch(() => {}), new Promise(w => setTimeout(w, P - Date.now()).unref()) ]), 
    T();
  }, Q.disarm = () => {
    Q.extractor = null, B = void 0, R(), v?.disarmIdleFlush();
  }, Q.owedWithin = p => n.size > 0 || Y !== void 0 && Y.promptIndex === wq() && Y.dueAt - performance.now() <= p;
}

function Ge() {
  return X !== null && X.EXTRACTOR_RUNS_FOR_PROMOTER && X.isPromoterExtractorOn();
}

function Tqs(e) {
  return ue !== null && ue.isLaptopExtractDispatched(e);
}

function Aqs(e) {
  return ue !== null && ue.isLaptopExtractSync(e);
}

async function Cqs(e, n) {
  await (me.of(e.toolUseContext.session.host).extractor?.(e, n));
}

async function Rqs(e, n) {
  await me.of(e).drainer(n);
}

export { ghn, hhn, AXn, CXn, RXn, tbt, xXn, B1r, Tqs, Aqs, Cqs, Rqs };
