// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { _, t } from "./chunk-kawq2919.js";

import { pn } from "./chunk-9tdwgnpn.js";

import { fn, Zm, Yt, Hn, fT, _l } from "./chunk-f1zpf9me.js";

import { de } from "./chunk-5ydr99q3.js";

import { wt, vd, Km } from "./chunk-hk8p0fqv.js";

import { Qd, zm, vP } from "./chunk-htg8b98h.js";

import { Ren } from "./chunk-bdevabaf.js";

import { Gy } from "./chunk-a99879w1.js";

import { Hf } from "./chunk-69rr80fg.js";

import { $A, _4 } from "./chunk-exeqjnzg.js";

import { kqt } from "./chunk-dbsb12yc.js";

import { mor, $k, aye, cnt, Vle, Aor, a8r, unt } from "./chunk-r492ssxm.js";

import { vne, $J } from "./chunk-0b7g321z.js";

import { Hne } from "./chunk-xhf8f3d0.js";

import { set, bYo, MGe } from "./chunk-90reg5cy.js";

import { gp } from "./chunk-3j6e42hj.js";

import { Ys } from "./chunk-7fcp0cw9.js";

function O(n, e) {
  return _(fT(n, e));
}

var H = 3e3;

function D7n(n, e) {
  let i = n.mcpInfo?.effectiveMaxPermission;
  if (i !== void 0 && i !== "allow") return "permission_ceiling";
  if (n.requiresUserInteraction?.()) return "requires_interaction";
  return [ ...Qd(e), ...zm(e) ].some(r => vP(e, n, r)) ? "rule" : void 0;
}

var j = /^The user just created a new, empty (?:[^\n<]{1,80}? )?artifact at (https?:\/\/\S+) and has it open beside this conversation/, R = /artifact at (https?:\/\/\S+) and has it open beside this conversation/g, U = /<system-reminder>([\s\S]*?)<\/system-reminder>/g;

function L7n(n, e) {
  let i = [];
  for (let r of n) {
    if (r.type === "assistant") break;
    if (r.type !== "user") continue;
    if (r.origin !== void 0 && r.origin.kind !== "human" || r.verifiedSlackHumanTurn === !0 || r.projectsUserTurn === !0 || r.isMeta === !0) continue;
    let {content: s} = r.message, a = typeof s === "string" ? [ s ] : s.flatMap(o => o.type === "text" ? [ o.text ] : []);
    for (let o of a) i.push(...G_n(o, e));
  }
  return i;
}

var F = "The user just created a new, empty ";

function B(n) {
  let e = new RegExp(R), i = n.indexOf(F);
  while (i !== -1) {
    let r = i + F.length;
    e.lastIndex = r;
    let s = e.exec(n);
    if (n.slice(r, s?.index).includes("<")) return !0;
    i = s === null ? -1 : n.indexOf(F, s.index + s[0].length);
  }
  return new Set([ ...n.matchAll(R) ].map(r => r[1])).size > 1;
}

function G_n(n, e) {
  if (!e(n) || B(n)) return [];
  return [ ...n.matchAll(U) ].map(i => (i[1] ?? "").trim()).filter(i => i !== "");
}

function N7n(n) {
  if (new Set(n.flatMap(r => [ ...r.matchAll(R) ].map(s => s[1]))).size > 1) return null;
  let i;
  for (let r of n) {
    let s = j.exec(r)?.[1], a = s === void 0 ? null : Yt(s);
    if (s === void 0 || a === null) continue;
    if (i !== void 0 && i.slug !== a.slug) return null;
    i ??= {
      slug: a.slug,
      env: a.env,
      url: s
    };
  }
  return i === void 0 ? null : {
    blankArtifact: i
  };
}

var W = "The artifact named in this session's opening context carries an instructions file; it is below, read ahead for you. The artifact's own content was not read: read it as the opening context asks; that read's result will repeat these instructions.";

function $7n(n, e) {
  return !Km(e.slug) && vne(n, e, "files", "land");
}

function M2r(n, e) {
  return !Km(e) && $J(n, e);
}

var u = "artifact-type/reference/";

async function K(n, e, i, r = {
  warmShareEntry: gp,
  readTypeInstructions: cnt,
  isArtifactReadEnabled: Ren,
  filesConsented: $7n,
  listArtifactTypes: aye,
  listFrameFiles: Hne
}, s) {
  let a = n.blankArtifact, o = performance.now(), p = Ys(i, {
    timeoutMs: H,
    refTimer: !0
  });
  try {
    if (!r.isArtifactReadEnabled()) return {
      kind: "skipped",
      reason: "artifact_off"
    };
    if (!unt()) return {
      kind: "skipped",
      reason: "catalog_off"
    };
    let y = de(e), A = pn(e.options.tools ?? [], fn), w = A === void 0 ? "not_in_pool" : D7n(A, y);
    if (w !== void 0) return {
      kind: "skipped",
      reason: "tool_unavailable",
      detail: w
    };
    let k = a.url;
    for (let d of [ "deny", "ask" ]) if (Gy(y, a, k, d) !== null) return {
      kind: "skipped",
      reason: "rule",
      detail: d
    };
    await r.warmShareEntry(a, {
      abortController: {
        signal: p.signal
      },
      credentials: e.credentials
    }, "opening_prefetch");
    let N = de(e);
    for (let d of [ "deny", "ask" ]) if (Gy(N, a, k, d) !== null) return {
      kind: "skipped",
      reason: "rule",
      detail: d
    };
    let E = wt(a.slug);
    if (!vd(E)) {
      if (p.signal.aborted && !i.aborted) return {
        kind: "skipped",
        reason: "read_failed",
        detail: "the share probe took longer than the prefetch budget"
      };
      return {
        kind: "skipped",
        reason: "not_owned"
      };
    }
    if (E?.typeLocked !== !0) return {
      kind: "skipped",
      reason: "not_typed"
    };
    let c = await r.readTypeInstructions(a, p.signal, e.credentials);
    if (c.kind !== "read") return {
      kind: "skipped",
      reason: "instructions_unavailable",
      detail: c.kind === "unavailable" ? c.why : "none"
    };
    let D = Vle(c);
    try {
      await r.listArtifactTypes({
        firstParty: !0,
        signal: p.signal,
        credentials: e.credentials,
        httpOnly: !0
      });
    } catch {}
    let m = await q(a, p.signal, e, r), C = Hn(a), x = F7n(Hf());
    if (m.why === "listing failed") f("artifact_opening_prefetch", "listing_failed");
    if (!m.listed) t(`[artifactOpeningPrefetch] type files of ${a.slug} not saved: not attempted, the type's reference pages were not listed (the files consent does not stand for this artifact, or its listing failed)`);
    let P = !m.listed ? null : c.clipped ? await (r.readWholeInstructions ?? G)(a, p.signal, e.credentials) : c.text, I = P === null ? null : (await MGe({
      type: {
        artifact: a,
        instructions: P,
        pages: m.pages.map(d => u + d),
        stillConsented: () => r.filesConsented(e, a)
      },
      system: null
    }, e, p.signal, r.readFrameFile)).type, T = m.listed && kqt(e.options.tools ?? []) ? a8r(c.text) : null, v = T ?? "", h = I === null ? null : {
      ...I,
      urlReadAsked: v !== "",
      skillByRead: !c.clipped
    }, b = h === null ? null : bYo(h, [ v, mor(c.text), Aor(c.text) ].map(d => d.trim()).filter(d => d !== "").map(d => `\n\n${d}`).join(""));
    if (h !== null && b === null) t(`[artifactOpeningPrefetch] type files of ${a.slug} saved but not used: SKILL.md does not fit one Bash output, the text stays inline`);
    if (h !== null && b !== null) return {
      kind: "attached",
      content: b,
      manifest: V(C, x, T === null && s !== void 0 && M(e, s)),
      typeFiles: h,
      durationMs: performance.now() - o
    };
    return {
      kind: "attached",
      content: W + D,
      manifest: X(C, m, x, T === null && s !== void 0 && M(e, s)),
      typeFiles: null,
      durationMs: performance.now() - o
    };
  } catch (y) {
    return {
      kind: "skipped",
      reason: "read_failed",
      detail: p.signal.aborted && !i.aborted ? "the read took longer than the prefetch budget" : l(y)
    };
  } finally {
    p.cleanup();
  }
}

async function G(n, e, i) {
  let r = await $A({
    ...n,
    file: $k
  }, e, i, "artifact_type_instructions_read");
  if (r.err !== null) return t(`[artifactOpeningPrefetch] type files of ${n.slug} not saved: the whole SKILL.md was not read (${_4(r)})`), 
  null;
  return _l(r.html);
}

async function Qqs(n, e, i, r, s) {
  let a = N7n([ ...L7n(e, r.isSystemReminderOnlyText), ...i === null ? [] : G_n(i, r.isSystemReminderOnlyText) ]);
  if (a === null) return null;
  let o = await K(a, n, n.abortController.signal, s, r.isDeferredTool);
  if (t(o.kind === "attached" ? `[artifactOpeningPrefetch] attached: ${o.content.length} chars + index ${o.manifest.length} chars in ${Math.round(o.durationMs)}ms` : `[artifactOpeningPrefetch] skipped: ${o.reason}${o.detail === void 0 ? "" : ` (${o.detail})`}`), 
  o.kind === "attached") return g("artifact_opening_prefetch", {
    duration_ms: Math.round(o.durationMs)
  }), {
    content: `${o.content}\n\n${o.manifest}`,
    slug: a.blankArtifact.slug,
    typeFiles: o.typeFiles
  };
  if (o.reason === "read_failed" || o.detail === "listing failed") f("artifact_opening_prefetch", o.reason === "read_failed" ? "read_failed" : "listing_failed");
  return null;
}

async function q(n, e, i, r) {
  if (!r.filesConsented(i, n)) return {
    listed: !1,
    pages: [],
    why: "no files consent"
  };
  let s;
  try {
    s = await r.listFrameFiles(n, e, i.credentials);
  } catch {
    s = null;
  }
  if (s?.kind !== "ok") return {
    listed: !1,
    pages: [],
    why: "listing failed"
  };
  return {
    listed: !0,
    pages: s.files.map(a => a.path).filter(a => a.startsWith(u) && a.endsWith(".md")).map(a => a.slice(u.length)).filter(a => !a.includes("/")).sort()
  };
}

function F7n(n) {
  return {
    readFile: n ? (e, i) => `Artifact action "read", url "${e}", path ${O(i, S)}` : (e, i) => `Artifact action "read_file", url "${e}", path ${O(i, S)}`,
    listFiles: n ? e => `Artifact action "list", url "${e}", scope "files"` : e => `Artifact action "list_files", url "${e}"`,
    readArtifact: e => `Artifact action "read", url "${e}"`
  };
}

var Y = set;

function z(n, e, i) {
  let r = e.slice(0, Y), s = r.map(a => `- ${O(u + a, S)}: ${i.readFile(n, u + a)}`);
  if (e.length > r.length) s.push(`- and ${e.length - r.length} more under ${u} (${i.listFiles(n)} names them)`);
  return [ `Reference pages of the type of the artifact at ${n}, on the artifact and not loaded (the names are the type's own files, listed as data):`, ...s, `Issue every file read you need, and the artifact read itself (${i.readArtifact(n)}), in ONE message (parallel tool calls); then Read any file a result says was saved; then write. Use exactly the call shapes given here; no other fields.` ].join(`\n`);
}

function M(n, e) {
  let i = pn(n.options.tools ?? [], Zm);
  return i !== void 0 && !e(i);
}

var L = "ArtifactData is loaded in this session: read the canvas (ArtifactData list / get on this url) in that same first message rather than searching for the tool first.";

function X(n, e, i, r) {
  let s = z(n, e.pages, i);
  return [ `Loaded ahead of this turn for the artifact at ${n}: the instructions file found on it (SKILL.md) \u2014 inlined above; do not read it again.`, ...e.pages.length > 0 ? [ s ] : [ ...e.listed ? [] : [ `Its type's reference pages are on the artifact under ${u} (${i.listFiles(n)} names them).` ], ...s.split(`\n`).slice(1) ], ...r ? [ L ] : [] ].join(`\n`);
}

function V(n, e, i) {
  return [ `Make that Bash call and the artifact read itself, ${e.readArtifact(n)}, in ONE message (parallel tool calls); then write.`, ...i ? [ L ] : [] ].join(`\n`);
}

var S = 128;

export { D7n, L7n, G_n, N7n, $7n, M2r, Qqs, F7n };
