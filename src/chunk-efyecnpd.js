// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _, t } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { a } from "./chunk-j016gcgm.js";

import { Z5 } from "./chunk-5brm0azz.js";

import { Hn } from "./chunk-f1zpf9me.js";

import { XL, Hf } from "./chunk-69rr80fg.js";

import { wye } from "./chunk-xshzkngt.js";

import { Hne } from "./chunk-xhf8f3d0.js";

var C = "Nothing was published or removed: this publish touches files whose published content is not what you last saw", V = "Changed since you last saw them:", E = "Already published, and not read as published or listed by you in this session:";

function FQo(e) {
  if (!e.startsWith("Nothing was published or removed: this publish touches files whose published content is not what you last saw")) return;
  let i = e.indexOf(`\nChanged since you last saw them:`), n = e.indexOf(`\nAlready published, and not read as published or listed by you in this session:`), r = (u, c) => u === -1 ? "" : e.slice(u, c === -1 || c < u ? void 0 : c), s = r(i, n), o = r(n, -1), l = u => [ ...u.matchAll(/^- ("(?:[^"\\]|\\.)*")/gm) ].map(c => c[1]), d = u => Number(/^- (?:and )?(\d+) (?:more|paths?, not named here):/m.exec(u)?.[1] ?? 0), h = l(s), m = l(o), P = h.length + d(s), p = m.length + d(o), v = [ ...s.matchAll(/^- "(?:[^"\\]|\\.)*": [^\n]*it has since been removed/gm) ].length;
  if (P > 0 && p > 0) return "Not published: some files on the artifact changed since Claude last saw them, and others Claude has not read yet. Claude needs to read the latest versions before publishing again.";
  if (P === 1) return v === 1 ? `Not published: ${h[0]} was removed from the artifact since Claude last saw it. Publishing again creates it afresh.` : `Not published: ${h[0]} changed on the artifact since Claude last saw it. Claude needs to read the latest version before publishing again.`;
  if (P > 1) return `Not published: ${P} files changed on the artifact since Claude last saw them. Claude needs to read the latest versions before publishing again.`;
  if (p === 1) return `Not published: ${m[0]} is already on the artifact and Claude has not read it. Claude needs to read it before replacing or removing it.`;
  return `Not published: ${p} files are already on the artifact and Claude has not read them. Claude needs to read them before replacing or removing them.`;
}

var y = 20, L3r = 32e3;

function sEt() {
  return a.CLAUDE_CODE_ARTIFACT_PATH_PIN ?? !0;
}

function N3r() {
  return sEt() && !Z5();
}

function N2() {
  return ee().frozenPathPin ?? sEt();
}

function k() {
  return ee().frozenPathPinAck ?? N3r();
}

function b(e) {
  let {pathPins: i} = ee(), n = i.get(e);
  if (n === void 0) n = new Map, i.set(e, n);
  return n;
}

function oye() {
  return ++ee().pathPinSeq;
}

function w(e, i, n, r) {
  let s = e.get(i);
  if (s !== void 0 && s.seq > r) return;
  e.set(i, {
    ...n,
    seq: r
  });
}

function $3r(e, i, n, r, s = oye()) {
  if (!N2()) return;
  w(b(e), i, {
    sha256: n,
    ver: r,
    via: "read"
  }, s);
}

function F3r(e, i, n, r, s = oye()) {
  if (!N2()) return;
  w(b(e), i, {
    sha256: n,
    ver: r,
    via: "list"
  }, s);
}

function U3r(e, i, n = oye()) {
  if (!N2()) return;
  let r = ee().pathPins.get(e), s = r?.get(i);
  if (s !== void 0 && s.seq < n) r.delete(i);
}

function UQo(e, i, n, r = oye()) {
  if (!N2()) return;
  let s = b(e);
  for (let o of n) {
    let l = s.get(o.path);
    if (l === void 0 || l.via === "list" && l.sha256 !== null) w(s, o.path, {
      sha256: o.sha256,
      ver: i,
      via: "list"
    }, r);
  }
  N(s, i, r, n, !1);
}

function N(e, i, n, r, s) {
  let o = new Map(r.map(l => [ l.path, l ]));
  for (let [l, d] of e) {
    let h = o.get(l);
    if (d.seq > n || h === void 0 && !s) continue;
    let m = h?.sha256 ?? null;
    if (h?.live === !0 || m === d.sha256) {
      if (d.behind !== void 0) e.set(l, {
        sha256: d.sha256,
        ver: d.ver,
        via: d.via,
        seq: d.seq
      });
    } else e.set(l, {
      ...d,
      behind: {
        sha256: m,
        sizeBytes: h?.sizeBytes,
        ver: i
      }
    });
  }
}

function BQo(e, i, n) {
  if (!N2()) return;
  let r = b(e), s = oye();
  for (let o of n.written) if (o.sha256 === void 0) r.delete(o.path); else w(r, o.path, {
    sha256: o.sha256,
    ver: i,
    via: "publish"
  }, s);
  for (let o of n.removed) w(r, o, {
    sha256: null,
    ver: i,
    via: "publish"
  }, s);
}

function jQo(e) {
  if (!N2()) return !1;
  let i = ee().pathPins.get(e);
  if (i === void 0) return !1;
  for (let n of i.values()) if (n.via !== "list") return !0;
  return !1;
}

function WQo(e) {
  if (e === void 0) return {};
  let i = e.written.flatMap(n => n.sha256 === void 0 ? [] : [ {
    path: n.path,
    sha256: n.sha256
  } ]);
  return {
    ...i.length > 0 && {
      files_written: i
    },
    ...e.removed.length > 0 && {
      files_removed: [ ...e.removed ]
    }
  };
}

function B3r(e, i, n, r) {
  if (!N2()) return;
  let s = b(e);
  for (let o of n) w(s, o, {
    sha256: null,
    ver: i,
    via: "list"
  }, r);
}

function zQo(e, i, n, r) {
  if (!N2() || n.length === 0) return;
  N(b(e), i, r, n, !1);
}

function S(e, i, n) {
  let r = n.filter(o => o.liveSha256 === null).map(o => o.path);
  if (r.length === 0) return;
  let s = oye();
  return () => B3r(e, i, r, s);
}

function A(e) {
  let i = e.filter(n => n.kind === "changed");
  return [ ...i.filter(n => n.liveSha256 === null), ...i.filter(n => n.liveSha256 !== null) ];
}

function R(e) {
  let i = [], n = [ ...e.writes.map(r => ({
    ...r,
    operation: "write"
  })), ...e.removes.map(r => ({
    path: r,
    operation: "remove",
    sha256: void 0
  })) ];
  for (let {path: r, operation: s, sha256: o} of n) {
    if (e.liveDocs?.has(r)) continue;
    let l = e.pins?.get(r), d = e.live.get(r) ?? null;
    if (l === void 0) {
      if (d === null || e.acknowledged.has(r)) continue;
      if (s === "write" && o === d) continue;
      i.push({
        kind: "unread",
        path: r,
        operation: s
      });
      continue;
    }
    if (l.sha256 === d) continue;
    if (s === "write" && o !== void 0 && o === d) continue;
    if (s === "remove" && d === null) continue;
    i.push({
      kind: "changed",
      path: r,
      operation: s,
      readSha256: l.sha256,
      readVer: l.ver,
      readVia: l.via,
      liveSha256: d
    });
  }
  return i;
}

function T(e, i) {
  return _(e.core ? wye(i) : i);
}

function H(e) {
  return e.core ? 'action "read" with its `path`' : 'action "read_file"';
}

function M(e, i) {
  let n = i.files.get(e);
  if (n === void 0) return "  now: deleted; publishing this path again creates it afresh, so do that only if the user wants it back";
  let r = n.sizeBytes === void 0 ? "" : `, ${n.sizeBytes} ${I(n.sizeBytes, "byte")}`;
  return `  now: sha256 ${n.sha256}${r}; read it with ${T(i, {
    action: "read_file",
    url: i.url,
    path: e
  })}`;
}

function L(e, i, n) {
  let r = e.readSha256 !== null ? `you last saw it at version ${e.readVer}` : e.readVia === "publish" ? `you removed it at version ${e.readVer}` : `it was gone when you last checked (version ${e.readVer})`, s = e.liveSha256 === null ? `it has since been removed (version ${i})` : e.readSha256 === null ? `someone has since published a file there (version ${i})` : `someone has since replaced it (version ${i})`;
  return `- ${_(e.path)}: ${r}; ${s}\n${M(e.path, n)}`;
}

function D(e, i, n) {
  if (e.length <= i) return e.join(`\n`);
  let r = `- ${i > 0 ? `and ${e.length - i} more` : `${e.length} ${I(e.length, "path")}, not named here`}: ${T(n, {
    action: "list_files",
    url: n.url
  })} lists every file with its size`;
  return i > 0 ? `${e.slice(0, i).join(`\n`)}\n${r}` : r;
}

function x(e, i, n) {
  let r = A(e), s = e.filter(d => d.kind === "unread"), o = [ r.length > 0 ? `${C}, and sending your copy would replace a newer edit.` : `${C}, and sending your copy could discard content you have not read.` ], l = Math.min(r.length, y);
  if (r.length > 0) {
    let d = r.some(h => h.liveSha256 === null);
    o.push(`${V}\n${D(r.map(h => L(h, i, n)), l, n)}\nRead each one${d ? " that still exists" : ""} again (${H(n)}), re-apply your change to what it holds now, and publish again${d ? "; a deleted one needs no read" : ""}. Never resend your earlier copy.${n.forced ? " `force` does not override this." : ""}${n.remembered ? ' The live file list could not be read for this publish, so each "now" line and its version are from an earlier listing or publish result in this session; the reads will show what is there now.' : ""}`);
  }
  if (s.length > 0) o.push(`${E}\n${D(s.map(d => `- ${_(d.path)}\n${M(d.path, n)}`), y - l, n)}\nRead each one first (${H(n)}) and build on it.${n.ackOffered === !1 ? " Do so even when the user wants the file replaced outright." : " Only when the user asked for the file to be replaced without looking, name it in `overwrite_unread`."}`);
  return o.join(`\n\n`);
}

async function GQo(e) {
  if (e.writes.length === 0 && e.removes.length === 0) return {
    kind: "pass",
    liveVer: void 0
  };
  let i = oye(), n = await Hne(e.target, e.signal, e.credentials);
  if (n.kind === "error") {
    if (t(`[artifact] path pins: no listing (${n.reason}) slug=${e.target.slug}`), n.reason === "single_page") return {
      kind: "pass",
      liveVer: void 0
    };
    let d = ee().pathPins.get(e.target.slug), h = new Set, m = new Map, P = new Map, p = "";
    for (let u of [ ...e.writes.map(c => c.path), ...e.removes ]) {
      let c = d?.get(u)?.behind;
      if (c === void 0) continue;
      if (h.add(u), c.sha256 !== null) m.set(u, c.sha256), P.set(u, {
        sha256: c.sha256,
        ...c.sizeBytes !== void 0 && {
          sizeBytes: c.sizeBytes
        }
      });
      if (p === "" || (XL(c.ver, p) ?? 1) > 0) p = c.ver;
    }
    let v = R({
      pins: d,
      live: m,
      writes: e.writes.filter(u => h.has(u.path)),
      removes: e.removes.filter(u => h.has(u)),
      acknowledged: new Set(e.acknowledged)
    });
    if (f("artifact_path_pin", v.length === 0 ? `skipped_${n.reason}` : `refused_without_listing_${n.reason}`), 
    v.length === 0) return {
      kind: "pass",
      liveVer: void 0
    };
    return {
      kind: "refuse",
      reasonCode: "path_pin_changed",
      message: x(v, p, {
        url: e.url ?? Hn(e.target),
        files: P,
        core: Hf(),
        forced: e.force === !0,
        ackOffered: k(),
        remembered: !0
      }),
      onCommitted: S(e.target.slug, p, A(v).slice(0, y))
    };
  }
  let r = ee().pathPins.get(e.target.slug);
  if (r !== void 0) N(r, n.ver, i, n.files, !n.narrowed);
  let s = new Map(n.files.map(d => [ d.path, d.sha256 ])), o = new Set(n.files.filter(d => d.live).map(d => d.path)), l = R({
    pins: r,
    live: s,
    liveDocs: o,
    writes: e.writes,
    removes: e.removes,
    acknowledged: new Set(e.acknowledged)
  });
  if (g("artifact_path_pin", {
    checked: e.writes.length + e.removes.length,
    refused: l.length
  }), l.length === 0) {
    let d = n.publishPreconditions === !0 ? z(s, o, e.writes, e.removes) : void 0;
    return {
      kind: "pass",
      liveVer: n.ver,
      ...n.title !== void 0 && {
        liveTitle: n.title
      },
      ...n.favicon !== void 0 && {
        liveFavicon: n.favicon
      },
      ...d !== void 0 && {
        preconditions: d
      }
    };
  }
  return {
    kind: "refuse",
    reasonCode: l.some(d => d.kind === "changed") ? "path_pin_changed" : "path_pin_unread",
    message: x(l, n.ver, {
      url: e.url ?? Hn(e.target),
      files: new Map(n.files.map(d => [ d.path, {
        sha256: d.sha256,
        sizeBytes: d.sizeBytes
      } ])),
      core: Hf(),
      forced: e.force === !0,
      ackOffered: k()
    }),
    onCommitted: S(e.target.slug, n.ver, A(l).slice(0, y))
  };
}

function z(e, i, n, r) {
  let s = new Map;
  for (let {path: o} of n) {
    if (i.has(o)) return;
    s.set(o, e.get(o) ?? null);
  }
  for (let o of r) {
    let l = e.get(o);
    if (l === void 0 || i.has(o)) return;
    s.set(o, l);
  }
  return s;
}

function VQo(e) {
  let i = ee().pathPins.get(e.target.slug), n = e.paths.map(s => {
    let o = i?.get(s.path), l = e.removes.includes(s.path) ? "remove" : "write";
    return o !== void 0 && o.sha256 === s.expected ? {
      kind: "changed",
      path: s.path,
      operation: l,
      readSha256: s.expected,
      readVer: o.ver,
      readVia: o.via,
      liveSha256: s.actual
    } : {
      kind: "unread",
      path: s.path,
      operation: l
    };
  }), r = new Map;
  for (let s of e.paths) if (s.actual !== null) r.set(s.path, {
    sha256: s.actual
  });
  return {
    message: x(n, e.liveVer, {
      url: e.url ?? Hn(e.target),
      files: r,
      core: Hf(),
      ackOffered: k()
    }),
    onCommitted: S(e.target.slug, e.liveVer, A(n).slice(0, y))
  };
}

export { FQo, L3r, sEt, N3r, N2, oye, $3r, F3r, U3r, UQo, BQo, jQo, WQo, B3r, zQo, GQo, VQo };
