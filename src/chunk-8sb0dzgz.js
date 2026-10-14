// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { j, l, eB } from "./chunk-b0z4bv3v.js";

import { K, q, ke } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { Hj } from "./chunk-5brm0azz.js";

import { kr } from "./chunk-cqgvwwgb.js";

import { dt } from "./chunk-dd98x6x7.js";

import { ya, k, Vu, Si, rG } from "./chunk-xywp7esx.js";

import { ht, qt } from "./chunk-s2t7g8m9.js";

import { gFn, H8, uz } from "./chunk-4v78v8fd.js";

import { Gu, qN, $Ue } from "./chunk-rfqc2edt.js";

import { Uh } from "./chunk-9tdwgnpn.js";

import { $_ } from "./chunk-7en5gt36.js";

import { D3, KA, DAt, xe, Wt, jOn } from "./chunk-84yp45y8.js";

import { ghn, hhn, AXn, CXn, RXn, tbt, xXn } from "./chunk-0ajanf92.js";

import { bZe, kVo, Ebt, TVo } from "./chunk-f3kkwcpy.js";

import { XE, C_ } from "./chunk-05wvva46.js";

import { Xb, Gm, kc } from "./chunk-mr8d36p7.js";

function J() {
  return k("tengu_onyx_plover", null);
}

function ajt() {
  let e = J();
  return e?.enabled === !0 || e?.available === !0;
}

function rZe() {
  if (!ajt()) return !1;
  let e = dt().autoDreamEnabled;
  if (e !== void 0) return e;
  return J()?.enabled === !0;
}

class Z {
  runner=null;
}

var V = new K(() => new Z);

var le = "## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.", de = `### Reconcile memories against CLAUDE.md\n\nProject CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:\n\n- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).\n- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.\n- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.\n\nA \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;

function Q(e, r, o, y = !1, p = !1, s = !1) {
  return `# Dream: Memory Consolidation\n\nYou are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.\n\nMemory directory: \`${e}\`\n${$Ue}\n\nSession transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)\n${y ? `\n${le}\n` : ""}\n---\n\n## Phase 1 \u2014 Orient\n\n- \`ls\` the memory directory to see what already exists\n- Read \`${Gu}\` to understand the current index\n- Skim existing topic files so you improve them rather than creating duplicates\n- If a \`sessions/\` subdirectory exists, review recent entries there\n\n## Phase 2 \u2014 Gather recent signal\n\nLook for new information worth persisting. Sources in rough priority order:\n\n1. **Existing memories that drifted** \u2014 facts that contradict something you see in the codebase now\n2. **Transcript search** \u2014 if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:\n   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`\n\nDon't exhaustively read transcripts. Look only for things you already suspect matter.\n\n## Phase 3 \u2014 Consolidate\n\nFor each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${p ? ` The ${Xb} / ${Gm} / ${kc} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.` : ""}${""}\n\nFocus on:\n- Merging new signal into existing topic files rather than creating near-duplicates\n- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes\n- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source\n\n## Phase 4 \u2014 Prune and index\n\nUpdate \`${Gu}\` so it stays under ${qN} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.\n\n- Remove pointers to memories that are now stale, wrong, or superseded\n- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail\n- Add pointers to newly important memories\n- Resolve contradictions \u2014 if two files disagree, fix the wrong one\n\n${de}\n\n---\n\nReturn a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${o ? `\n\n## Additional context\n\n${o}` : ""}`;
}

var ue = 30;

function B(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "dream";
}

function ee(e, r) {
  let o = XE("dream"), y = {
    ...C_(o, "dream", "dreaming"),
    type: "dream",
    status: "running",
    skipTranscript: !0,
    phase: "starting",
    sessionsReviewing: r.sessionsReviewing,
    filesTouched: [],
    turns: [],
    abortController: r.abortController,
    priorMtime: r.priorMtime,
    ...r.storageV5 !== void 0 && {
      storageV5: r.storageV5
    }
  };
  return e.register(y), o;
}

function te(e, r, o, y) {
  y.update(e, p => {
    let s = new Set(p.filesTouched), n = o.filter(a => !s.has(a) && s.add(a));
    if (r.text === "" && r.toolUseCount === 0 && n.length === 0) return p;
    return {
      ...p,
      phase: n.length > 0 ? "updating" : p.phase,
      filesTouched: n.length > 0 ? [ ...p.filesTouched, ...n ] : p.filesTouched,
      turns: p.turns.slice(-(ue - 1)).concat(r)
    };
  });
}

function re(e, r) {
  r.update(e, o => ({
    ...o,
    status: "completed",
    endTime: Date.now(),
    notified: !0,
    abortController: void 0
  })), g("task_dream"), ya(e, "completed", {
    skipTranscript: !0,
    ambient: !0
  });
}

function oe(e, r) {
  r.update(e, o => ({
    ...o,
    status: "failed",
    endTime: Date.now(),
    notified: !0,
    abortController: void 0
  })), m("task_dream", "task_dream_failed"), ya(e, "failed", {
    skipTranscript: !0,
    ambient: !0
  });
}

var w = null, ce = 6e5, pe = new RegExp(`^\\s*(?:${CXn})\\b`, "i"), se = {
  minHours: 24,
  minSessions: 5
};

function fe() {
  let e = k("tengu_onyx_plover", null);
  return {
    minHours: typeof e?.minHours === "number" && Number.isFinite(e.minHours) && e.minHours > 0 ? e.minHours : se.minHours,
    minSessions: typeof e?.minSessions === "number" && Number.isFinite(e.minSessions) && e.minSessions > 0 ? e.minSessions : se.minSessions
  };
}

function he() {
  if (kr() !== null) return !1;
  if (Hj()) return !1;
  if (!Vu()) return !1;
  if (H8()) return !1;
  return rZe();
}

function ge() {
  return !1;
}

function gzo(e) {
  let r = 0, o = !1, y = new Set;
  V.of(e).runner = async function(s, n) {
    let a = fe(), u = ge();
    if (!u && !he()) return;
    let A;
    try {
      A = await bZe(void 0, s.toolUseContext.storageV5);
    } catch (d) {
      t(`[autoDream] readLastConsolidatedAt failed: ${l(d)}`);
      return;
    }
    let O = (Date.now() - A) / 36e5;
    if (!u && O < a.minHours) return;
    let Y = Date.now() - r;
    if (!u && Y < ce) {
      t(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(Y / 1e3)}s ago`);
      return;
    }
    r = Date.now();
    let f;
    try {
      f = await TVo(A, s.toolUseContext.storageV5);
    } catch (d) {
      t(`[autoDream] listSessionsTouchedSince failed: ${l(d)}`);
      return;
    }
    let ae = q();
    if (f = f.filter(d => d !== ae), !u && f.length < a.minSessions) {
      t(`[autoDream] skip \u2014 ${f.length} sessions since last consolidation, need ${a.minSessions}`), 
      i("tengu_auto_dream_skipped", {
        reason: b("sessions"),
        session_count: f.length,
        min_required: a.minSessions
      });
      return;
    }
    let N = RXn(s.toolUseContext.getAppState().toolPermissionContext, rG());
    if (N !== void 0) {
      if (t(`[autoDream] skip \u2014 ${hhn(N)} would refuse memory writes`), i("tengu_auto_dream_skipped", {
        reason: b("permission_rule")
      }), n !== void 0) {
        let d = AXn(e, N, Si());
        if (d !== void 0) n(Wt(d, "warning"));
      }
      return;
    }
    let S;
    if (u) S = A; else {
      try {
        S = await kVo(s.toolUseContext.storageV5);
      } catch (d) {
        t(`[autoDream] lock acquire failed: ${l(d)}`);
        return;
      }
      if (S === null) {
        i("tengu_auto_dream_skipped", {
          reason: b("lock")
        });
        return;
      }
    }
    let E = Si(), M = void 0, h = M === "unplaced" || M === "capped" ? void 0 : M;
    if (h === "newer" || h !== void 0 && "unreadable" in h) {
      if (!u) await Ebt(S, s.toolUseContext.storageV5);
      if (h !== "newer") {
        if (t(`[autoDream] skipped: the memory items could not be read (cause: ${h.unreadable}); the warning above says why and what resumes consolidation`), 
        i("tengu_auto_dream_skipped", {
          reason: b("items_unreadable")
        }), w !== null && n !== void 0 && !y.has(h.unreadable)) y.add(h.unreadable), n?.(Wt(await w.unreadableItemsNotice(h.unreadable, E), "warning"));
        return;
      }
      if (t("[autoDream] skip \u2014 newer item record"), i("tengu_auto_dream_skipped", {
        reason: b("record_newer")
      }), w !== null && n !== void 0 && !o) o = !0, n?.(Wt(w.NEWER_RECORD_NOTICE, "warning"));
      return;
    }
    let P = uz();
    t(`[autoDream] firing \u2014 ${O.toFixed(1)}h since last, ${f.length} sessions to review`), 
    i("tengu_auto_dream_fired", {
      hours_since: Math.round(O),
      sessions_since: f.length,
      team_memory_enabled: P
    });
    let {taskRegistry: x} = s.toolUseContext, v = new AbortController, R = ee(x, {
      sessionsReviewing: f.length,
      priorMtime: S,
      abortController: v,
      storageV5: s.toolUseContext.storageV5
    }), L = "fork";
    try {
      let d = $_(ke()), z = `\n\n**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.\n\nSessions since last consolidation (${f.length}):\n${f.map(_ => `- ${_}`).join(`\n`)}`, we = !1, ne = Q(E, d, z, P, gFn(), !1), ie = _e(R, x, E), F = new Map, H = new Set, G = !1, X = !1, W = !1, C;
      try {
        C = await KA({
          promptMessages: [ xe({
            content: ne
          }) ],
          cacheSafeParams: D3(s),
          canUseTool: xXn(E, h !== void 0 ? w?.keptItemsOf(h) : void 0, {
            fork: "dream",
            onWriteAllowed: (_, U) => F.set(U, _)
          }),
          querySource: "auto_dream",
          forkLabel: "auto_dream",
          skipTranscript: !0,
          overrides: {
            abortController: v
          },
          onMessage: _ => {
            if (ie(_), ye(_, H), _.type === "assistant") G = _.isApiErrorMessage === !0;
          },
          skipCacheWrite: DAt()
        }), X = !0, W = !v.signal.aborted && !G;
      } finally {
        let _ = new Set([ ...F ].filter(([T]) => !W || !H.has(T)).map(([, T]) => T)), U = new Set([ ...F ].filter(([T]) => W && H.has(T)).map(([, T]) => T));
        if (w !== null && M === "capped") await w.deferCappedRunWrites({
          memoryDir: E,
          dreamWrote: _,
          mayHaveWritten: U
        });
        if (w !== null && h !== void 0) {
          let T = await w.settleDreamItems({
            memoryDir: E,
            before: h,
            dreamWrote: _,
            mayHaveWritten: U
          });
          if ((T.skipped || T.failed) && X && !v.signal.aborted && !u && await w.claimLockGiveBack(E)) await Ebt(S, s.toolUseContext.storageV5);
        }
      }
      L = "completion", re(R, x);
      let D = s.toolUseContext.taskRegistry.get(R), me = B(D) ? D.filesTouched.length : 0;
      if (B(D) && D.filesTouched.length > 0) n?.({
        ...jOn(D.filesTouched),
        verb: "Improved"
      }), await ghn(s.toolUseContext, {
        source: "dream",
        summary: `consolidated ${D.filesTouched.length} ${I(D.filesTouched.length, "memory file")}`,
        paths: D.filesTouched
      });
      t(`[autoDream] completed \u2014 cache: read=${C.totalUsage.cache_read_input_tokens} created=${C.totalUsage.cache_creation_input_tokens}`), 
      i("tengu_auto_dream_completed", {
        cache_read: C.totalUsage.cache_read_input_tokens,
        cache_created: C.totalUsage.cache_creation_input_tokens,
        output: C.totalUsage.output_tokens,
        sessions_reviewed: f.length,
        files_touched_count: me,
        team_memory_enabled: P,
        account_memory_line_rendered: !1
      });
    } catch (d) {
      if (v.signal.aborted) {
        t("[autoDream] aborted by user");
        return;
      }
      if (t(`[autoDream] ${L} failed: ${l(d)}`), i("tengu_auto_dream_failed", {
        phase: c(L),
        error_class: eB(j(d))
      }), L === "fork") oe(R, x), await Ebt(S, s.toolUseContext.storageV5);
    }
  };
}

function ye(e, r) {
  if (e.type !== "user" || e.toolDenialKind !== void 0 || typeof e.message.content === "string") return;
  for (let o of e.message.content) if (o.type === "tool_result" && o.is_error === !0) r.add(o.tool_use_id);
}

function _e(e, r, o) {
  return y => {
    if (y.type !== "assistant") return;
    let p = "", s = 0, n = [];
    for (let a of y.message.content) if (a.type === "text") p += a.text; else if (a.type === "tool_use") {
      if (s++, a.name === ht || a.name === qt) {
        let u = a.input;
        if (typeof u.file_path === "string") n.push(u.file_path);
      } else if (Uh.includes(a.name)) {
        let u = a.input;
        if (typeof u.command === "string" && pe.test(u.command)) for (let A of u.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g)) n.push(A[0].replace(/^["']|["']$/g, ""));
      }
    }
    te(e, {
      text: p.trim(),
      toolUseCount: s
    }, n.filter(a => tbt(a, o)), r);
  };
}

async function hzo(e, r) {
  await (V.of(e.toolUseContext.session.host).runner?.(e, r));
}

export { ajt, rZe, gzo, hzo };
