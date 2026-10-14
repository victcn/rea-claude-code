// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { u6, QOe } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { zr } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { a } from "./chunk-j016gcgm.js";

import { sc } from "./chunk-5wbhf1bk.js";

import { X } from "./chunk-1zg3hbfq.js";

import { le } from "./chunk-cqgvwwgb.js";

import { Zs } from "./chunk-rgd61mm3.js";

import { Pv } from "./chunk-5brm0azz.js";

import { ll } from "./chunk-hmce8a0s.js";

import { TP } from "./chunk-9tdwgnpn.js";

import { E0, U7, RN } from "./chunk-km6d4a9r.js";

import { nQ } from "./chunk-pc71c0q1.js";

import { Ent } from "./chunk-za06xa5m.js";

import { vat } from "./chunk-sqb9meyh.js";

import { Tyn, Uke, Bke, kZe } from "./chunk-8bwf6v17.js";

import { uun, iQe } from "./chunk-ee5r90az.js";

import { Fht, Uht, run, oun } from "./chunk-qge3c8f3.js";

import { at } from "./chunk-0bq6eb61.js";

import { constants as A } from "fs";

import { lstat as v, open as H, realpath as U, unlink as W } from "fs/promises";

import { posix as R } from "path";

var j = 3e3, cun = 134217728, z = new Set([ "csv", "docx", "jsonl", "log", "md", "ndjson", "ods", "odt", "parquet", "pdf", "pptx", "rtf", "tsv", "txt", "xls", "xlsm", "xlsx", "zip" ]), k = new Set([ "cmakecache.txt", "cmakelists.txt", "conanfile.txt", "constraints.txt", "requirements.txt" ]), K = /^test.*\.txt$/;

function T5n(e) {
  if (e.includes(R.sep)) return "has_directory";
  if (Buffer.byteLength(e) > Tyn) return "too_long";
  if (!sc(e)) return "odd_spelling";
  let l = Uke(e);
  if (l !== void 0) return l;
  let o = ll(e), d = o.lastIndexOf(".");
  if (d <= 0) return "no_suffix";
  if (!z.has(o.slice(d + 1))) return "not_data";
  return k.has(o) || K.test(o) ? "project_file" : void 0;
}

async function Y(e, {fileUuid: l, name: o}, d) {
  let r = await Bke(e, o);
  if (r !== void 0) return {
    outcome: r.outcome === "refused_name" ? `refused_${r.refusal}` : r.outcome,
    bytes: 0
  };
  let t = Ent(l, void 0);
  if (t === void 0) return {
    outcome: "source_missing",
    bytes: 0
  };
  if (t.size > d) return {
    outcome: "over_byte_budget",
    bytes: 0
  };
  let s = await nQ(t.path, t.size);
  if (s === null) return {
    outcome: "source_unreadable",
    bytes: 0
  };
  if (at(s) !== t.sha256) return {
    outcome: "source_changed",
    bytes: 0
  };
  let u = await A5n(e, o, s);
  if (u.outcome === "placed") await R5n(e, {
    fileUuid: l,
    name: o
  }, t);
  return u.outcome === "refused_name" ? {
    outcome: `refused_${u.refusal}`,
    bytes: 0
  } : {
    outcome: u.outcome,
    bytes: u.outcome === "placed" ? s.length : 0
  };
}

async function A5n(e, l, o) {
  return await C5n(e, l, o, d => kZe(d, e, l));
}

async function C5n(e, l, o, d) {
  let r = R.join(e, `${uun(l)}${Date.now()}.${Math.random().toString(36).slice(2)}`), t = await H(r, A.O_WRONLY | A.O_CREAT | A.O_EXCL | Zs, 384);
  try {
    try {
      await t.writeFile(o);
    } finally {
      await t.close();
    }
    return await d(r);
  } finally {
    await W(r).catch(() => {});
  }
}

async function R5n(e, {fileUuid: l, name: o}, {size: d, sha256: r}) {
  let t = QOe(), s = Uht(o), u = R.join(e, o), h = t.get(s);
  t.delete(s);
  let w = await v(u).catch(() => {});
  if (w === void 0) return;
  let S = t.size >= Fht && t.keys().next().value;
  if (typeof S === "string") t.delete(S);
  t.set(s, {
    path: u,
    fileUuid: l.toLowerCase(),
    dev: w.dev,
    ino: w.ino,
    mtimeMs: Math.floor(w.mtimeMs),
    size: d,
    sha256: r,
    ...h !== void 0 && h.path !== u && {
      ambiguous: !0
    }
  });
}

var N = {
  filesWait: "not_reached",
  filesWaitMs: 0,
  copiedBytes: 0,
  namedInCall: 0,
  namedInCallPlaced: 0,
  namedInCallAlreadyPresent: 0,
  counts: {}
};

async function TKs(e, l, o = j, d = cun) {
  let {fileNames: r} = e;
  if (r === void 0) return;
  let t = performance.now(), {outcome: s, filesWait: u, counts: h, lastErrorCode: w, ...S} = r === "malformed" ? {
    ...N,
    outcome: "malformed"
  } : await q(r, e, l, o, d).catch(y => ({
    ...N,
    outcome: "failed",
    lastErrorCode: zr(y) ?? b("unknown")
  })), C = r === "malformed" ? 0 : r.length, F = {
    outcome: c(s),
    files_wait: c(u),
    files_wait_ms: S.filesWaitMs,
    duration_ms: Math.round(performance.now() - t),
    approx_copied_bytes: Number(S.copiedBytes.toPrecision(2)),
    files_listed: C,
    files_named_in_call: S.namedInCall,
    files_named_in_call_placed: S.namedInCallPlaced,
    files_named_in_call_already_present: S.namedInCallAlreadyPresent,
    ...TP(h, (y, E) => `files_${E}`),
    ...w !== void 0 && {
      last_error_code: w
    }
  };
  i("tengu_turn_handoff_files_by_name", F), X(w !== void 0 || s === "malformed" ? "warn" : "info", "turn_handoff_files_by_name", F);
  let I = (h.placed ?? 0) + (h.already_present ?? 0) + (h.present_under_another_name ?? 0), T = u6(Object.entries(h), ([y, E]) => y.startsWith("refused_") || y === "repeated_name" || y === "path_occupied" ? E : 0);
  if (s === "aborted") ; else if (s === "not_applicable") f("ccr_turn_handoff_files_by_name", s); else if (s !== "finished") m("ccr_turn_handoff_files_by_name", s); else if (T === C) f("ccr_turn_handoff_files_by_name", "all_skipped_by_rule"); else if (I + T === C) g("ccr_turn_handoff_files_by_name"); else if (I > 0) f("ccr_turn_handoff_files_by_name", "some_files_absent"); else m("ccr_turn_handoff_files_by_name", "all_files_absent");
}

async function q(e, l, o, d, r) {
  let t = U7(), [s, u] = await Promise.all([ le(), t ].map(n => U(n).catch(() => {})));
  if (!Pv() || !RN(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND) || u === void 0 || s !== u) return {
    ...N,
    outcome: "not_applicable"
  };
  let h = performance.now(), w = await vat(o), S = Math.round(performance.now() - h);
  await iQe(t, E0), await oun();
  let C = l.messages.at(-1), F = C?.type === "assistant" && Array.isArray(C.message.content) ? C.message.content.flatMap(n => n.type === "tool_use" && l.toolUseIDs.includes(n.id) && typeof n.input === "object" && n.input !== null ? Object.values(n.input).flatMap(p => typeof p === "string" ? [ p, p.replaceAll("\\", "") ] : []) : []) : [], I = new Set(e.filter(({name: n}) => n !== "" && F.some(p => p.includes(n)))), T = new Map;
  for (let {name: n, fileUuid: p} of e) T.set(n, (T.get(n) ?? new Set).add(p.toLowerCase()));
  let y = {}, E = new Set, O = 0, M = 0, L = 0, x, B = !1, D = performance.now() + d;
  for (let n of e.toSorted((p, _) => Number(I.has(_)) - Number(I.has(p)))) {
    if (o.aborted) {
      B = !0;
      break;
    }
    let p = T5n(n.name), _;
    if (p !== void 0) _ = `refused_${p}`; else if (T.get(n.name)?.size !== 1) _ = "repeated_name"; else if (E.has(n.fileUuid.toLowerCase())) _ = "present_under_another_name"; else if (performance.now() > D) _ = "over_time_budget"; else try {
      let P = await Y(t, n, r - O);
      _ = P.outcome, O += P.bytes;
    } catch (P) {
      x = zr(P) ?? b("unknown"), _ = "copy_failed";
    }
    if (y[_] = (y[_] ?? 0) + 1, _ === "placed" || _ === "already_present") E.add(n.fileUuid.toLowerCase());
    if (I.has(n) && _ === "placed") M++; else if (I.has(n) && _ === "already_present") L++;
  }
  if ((y.placed ?? 0) > 0) await run();
  return {
    outcome: B ? "aborted" : "finished",
    filesWait: w,
    filesWaitMs: S,
    copiedBytes: O,
    namedInCall: I.size,
    namedInCallPlaced: M,
    namedInCallAlreadyPresent: L,
    counts: y,
    ...x !== void 0 && {
      lastErrorCode: x
    }
  };
}

export { cun, T5n, A5n, C5n, R5n, TKs };
