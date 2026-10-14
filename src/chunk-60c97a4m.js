// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he } from "./chunk-3pqddg8f.js";

import { Ln, dte } from "./chunk-ddr690nj.js";

import { Ee, _cn } from "./chunk-z52kmxx4.js";

import { Pj } from "./chunk-0pmh7awy.js";

import { Qi } from "./chunk-ws55c9wv.js";

import { zXe } from "./chunk-wmrc6pz1.js";

import { pae } from "./chunk-pnn4xyvt.js";

import { x$t } from "./chunk-9zhz923g.js";

import { randomUUID as ce } from "crypto";

import { once as _ } from "events";

import { constants as P, createWriteStream as ue } from "fs";

import { lstat as z, open as L, lstat as R, readdir as b, realpath as Y, rename as fe, stat as de } from "fs/promises";

import { basename as E, dirname as F, isAbsolute as le, join as S } from "path";

import { createInterface as pe } from "readline";

import { execFile as ae } from "child_process";

import { promisify as oe } from "util";

var se = oe(ae);

async function r$t(e) {
  let n = Pj("git");
  if (n === null) return [];
  try {
    let {stdout: r} = await se(n, [ "-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor=", "worktree", "list", "--porcelain" ], {
      cwd: e,
      timeout: 5e3,
      windowsHide: !0
    });
    if (!r) return [];
    return r.split(`\n`).filter(t => t.startsWith("worktree ")).map(t => Ln(t.slice(9)));
  } catch {
    return [];
  }
}

var Nw = 65536, Sln = new Set([ "sdk-cli", "sdk-ts", "sdk-py" ]);

function q8s(e, n) {
  let r = COe(e, "entrypoint") ?? X5(n, "entrypoint");
  if (r && Sln.has(r)) return !0;
  let t = e.split(`\n`).find(a => a.includes('"parentUuid":')) ?? e, i = COe(t, "sessionKind");
  return i === "daemon" || i === "daemon-worker";
}

var ye = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function fI(e) {
  if (typeof e !== "string") return null;
  return ye.test(e) ? e : null;
}

function G(e) {
  if (!e.includes("\\")) return e;
  try {
    return JSON.parse(`"${e}"`);
  } catch {
    return e;
  }
}

function COe(e, n) {
  let r = [ `"${n}":"`, `"${n}": "` ];
  for (let t of r) {
    let i = e.indexOf(t);
    if (i < 0) continue;
    let a = i + t.length, o = a;
    while (o < e.length) {
      if (e[o] === "\\") {
        o += 2;
        continue;
      }
      if (e[o] === '"') return G(e.slice(a, o));
      o++;
    }
  }
  return;
}

function X5(e, n) {
  let r = [ `"${n}":"`, `"${n}": "` ], t, i = -1;
  for (let a of r) {
    let o = 0;
    while (!0) {
      let u = e.indexOf(a, o);
      if (u < 0) break;
      let c = u + a.length, s = c;
      while (s < e.length) {
        if (e[s] === "\\") {
          s += 2;
          continue;
        }
        if (e[s] === '"') {
          if (u > i) t = G(e.slice(c, s)), i = u;
          break;
        }
        s++;
      }
      o = s + 1;
    }
  }
  return t;
}

function UXe(e, n, r) {
  return q(e, r, n);
}

function q(e, n, r) {
  let t = r === void 0 ? void 0 : `"type":"${r}"`, i = `"${n}":`, a = e.length;
  while (a > 0) {
    let o = e.lastIndexOf(`\n`, a - 1), u = e.slice(o + 1, a);
    if (a = o, u.includes(i) && (t === void 0 || u.includes(t))) try {
      let c = JSON.parse(u);
      if (typeof c === "object" && c !== null && (r === void 0 || c.type === r)) {
        let s = c[n];
        if (typeof s === "string") return s;
      }
    } catch {}
    if (o < 0) break;
  }
  return;
}

function ROe(e, n) {
  let r = `"${n}":`, t = 0;
  while (t < e.length) {
    let i = e.indexOf(`\n`, t), a = i < 0 ? e.slice(t) : e.slice(t, i);
    if (t = i < 0 ? e.length : i + 1, a.includes(r)) try {
      let o = JSON.parse(a);
      if (typeof o === "object" && o !== null) {
        let u = o[n];
        if (typeof u === "string") return u;
      }
    } catch {}
  }
  return;
}

function MMr(e, n) {
  return q(e, n);
}

function uFs(e, n) {
  return e?.realWorkspacePath === void 0 ? void 0 : {
    hoverRestOn: n,
    realPath: e.realWorkspacePath
  };
}

async function uje(e, n, r) {
  return Z(e, n, "w", r);
}

async function $Mo(e, n, r) {
  return Z(e, n, "a", r);
}

async function Z(e, n, r, t) {
  if (t !== void 0 && t.hoverRestOn && (r === "w" || n.length > 0)) return me(t.source, n, r);
  let i = ue(e, {
    mode: 384,
    flags: r
  });
  try {
    for (let a of n) if (!i.write(JSON.stringify(a) + `\n`)) await _(i, "drain");
    i.end(), await _(i, "finish");
  } catch (a) {
    throw i.destroy(), a;
  }
}

async function me(e, n, r) {
  let {backend: t, key: i} = e, a = n.map(u => ({
    data: JSON.stringify(u) + `\n`
  }));
  if (r === "w") {
    let u = await t.replaceRecords(i, a, {
      publishDiscipline: "inPlace",
      mode: 384
    });
    if (!u.ok) throw Error("transcript stream replace failed", {
      cause: u.error
    });
    return;
  }
  let o = await t.append(i, a);
  if (!o.ok) throw Error("transcript stream append failed", {
    cause: o.error
  });
}

function Y8s(e) {
  let n = 0, r = {
    commandFallback: ""
  };
  while (n < e.length) {
    let t = e.indexOf(`\n`, n), i = t >= 0 ? e.slice(n, t) : e.slice(n);
    if (n = t >= 0 ? t + 1 : e.length, !i.includes('"type":"user"') && !i.includes('"type": "user"')) continue;
    if (i.includes('"tool_result"')) continue;
    if (i.includes('"isMeta":true') || i.includes('"isMeta": true')) continue;
    if (i.includes('"isCompactSummary":true') || i.includes('"isCompactSummary": true')) continue;
    try {
      let a = JSON.parse(i), o = zXe(a, r);
      if (o !== void 0) return o;
    } catch {
      continue;
    }
  }
  return r.commandFallback;
}

function X8s(e) {
  let n = 0;
  while (n < e.length) {
    let r = e.indexOf(`\n`, n), t = r >= 0 ? e.slice(n, r) : e.slice(n);
    if (n = r >= 0 ? r + 1 : e.length, !t.includes('"type":"user"') && !t.includes('"type": "user"')) continue;
    if (t.includes('"tool_result"')) continue;
    if (t.includes('"isMeta":true') || t.includes('"isMeta": true')) continue;
    if (t.includes('"type":"image"') || t.includes('"type": "image"')) return "Image";
    if (t.includes('"type":"document"') || t.includes('"type": "document"')) return "Document";
  }
  return "";
}

function J8s(e) {
  let n = {
    commandFallback: ""
  };
  for (let r of e) {
    if (typeof r !== "object" || r === null) continue;
    let t = zXe(r, n);
    if (t !== void 0) return t;
  }
  return n.commandFallback;
}

var T = P.O_RDONLY | P.O_NOFOLLOW | P.O_NONBLOCK;

async function wln(e, n, r, t) {
  if (t !== void 0 && t.hoverRestOn) return ge(t.source);
  try {
    if (T === P.O_RDONLY) {
      if (!(await z(e)).isFile()) return {
        head: "",
        tail: ""
      };
    }
    let i = await L(e, T);
    try {
      if (!(await i.stat()).isFile()) return {
        head: "",
        tail: ""
      };
      let a = await i.read(r, 0, Nw, 0);
      if (a.bytesRead === 0) return {
        head: "",
        tail: ""
      };
      let o = r.toString("utf8", 0, a.bytesRead), u = Math.max(0, n - Nw), c = o;
      if (u > 0) {
        let s = await i.read(r, 0, Nw, u);
        c = r.toString("utf8", 0, s.bytesRead);
      }
      return {
        head: o,
        tail: c
      };
    } finally {
      await i.close();
    }
  } catch {
    return {
      head: "",
      tail: ""
    };
  }
}

async function ge(e) {
  let n = await X(e);
  return n === null ? {
    head: "",
    tail: ""
  } : {
    head: n.head,
    tail: n.tail
  };
}

function FMo(e) {
  let n = e.indexOf(`\n`);
  return n >= 0 ? e.slice(n + 1) : "";
}

async function X(e) {
  let {backend: n, key: r} = e;
  try {
    let t = await n.read([ {
      key: r,
      offset: 0,
      length: Nw
    }, {
      key: r,
      tail: Nw
    } ]);
    if (!t.ok) return null;
    let [i, a] = t.value.items;
    if (!i.found || i.value.length === 0) return null;
    let o = H(i.value), u = a.found && a.value.length > 0 ? H(a.value) : o;
    return {
      head: o,
      tail: u,
      mtimeMs: i.mtimeMs,
      totalBytes: i.totalBytes
    };
  } catch {
    return null;
  }
}

function H(e) {
  return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
}

async function N(e, n) {
  return await M(e, n) !== "none";
}

async function M(e, n) {
  if (n !== void 0 && n.hoverRestOn) return j(n.source);
  try {
    if (!(await R(e)).isFile()) return "none";
  } catch (t) {
    return x(t) ? "none" : "unknown";
  }
  let r;
  try {
    r = await L(e, "r");
  } catch (t) {
    return x(t) ? "none" : "unknown";
  }
  try {
    let t = pe({
      input: r.createReadStream()
    });
    for await (let i of t) if (i.includes('"type":"user"') || i.includes('"type":"assistant"')) return t.close(), 
    "has";
    return "none";
  } catch {
    return "unknown";
  } finally {
    await r.close().catch(() => {});
  }
}

var Se = 65536, we = 4194304, be = Buffer.from('"type":"user"'), ke = Buffer.from('"type":"assistant"'), HMr = 1e4;

function rEe(e, n) {
  if (e.kind !== "scope" || e.scope.namespace !== "transcript" || e.scope.projectKey === void 0 || e.scope.sessionId !== void 0 || !n(e.scope.projectKey)) return;
  return e.scope.projectKey;
}

async function j(e) {
  let {backend: n, key: r} = e, t, i = !1, a = 0, o = 0;
  try {
    for (;;) {
      if (++o > HMr) return "unknown";
      let u = await n.readRecords(r, {
        order: "forward",
        maxBytes: t === void 0 ? Se : we,
        ...t !== void 0 && {
          fromSeq: t
        }
      });
      if (!u.ok) return u.error.code === "NotFound" ? "none" : "unknown";
      a += u.value.items.length;
      for (let s of u.value.items) {
        let p = Buffer.from(s.data.buffer, s.data.byteOffset, s.data.byteLength);
        if (p.includes(be) || p.includes(ke)) return "has";
        if (s.truncated === !0) i = !0;
      }
      let c = u.value.nextSeq;
      if (c === void 0) {
        if (i) return "unknown";
        if (u.value.items.length === 0 && t !== void 0) return "unknown";
        let s = await n.statStream(r);
        if (!s.ok) return s.error.code === "NotFound" ? "none" : "unknown";
        return s.value.recordCount > a ? "unknown" : "none";
      }
      if (t !== void 0 && c <= t) return "unknown";
      t = c;
    }
  } catch {
    return "unknown";
  }
}

async function pje(e, n) {
  let r = `orphaned-${Date.now()}-${ce().slice(0, 8)}`, t = n !== void 0 && n.hoverRestOn ? n.source : void 0, i = t !== void 0 && e.endsWith(".jsonl") ? Q(e, E(e, ".jsonl"), t) : void 0;
  if (i !== void 0 && t !== void 0) {
    let {key: o} = i;
    if (o.namespace !== "transcript") return !1;
    try {
      return (await i.backend.move(o, t.transcriptKey(o.projectKey, `${o.sessionId}.${r}`))).ok;
    } catch {
      return !1;
    }
  }
  let a = `${e.endsWith(".jsonl") ? e.slice(0, -6) : e}.${r}.jsonl`;
  try {
    return await fe(e, a), !0;
  } catch {
    return !1;
  }
}

function xOe(e) {
  return le(e) && e.endsWith(".jsonl");
}

async function nae(e, n, r, t, i) {
  let a = await h_(n, uFs(i?.source, i?.hoverRestOn === !0));
  if (fI(e) === null) return {
    path: S(Jh(a), "invalid-resume-id.jsonl"),
    hasMessages: !1,
    via: "computed"
  };
  let o = S(Jh(a), `${e}.jsonl`), u = [];
  if (r !== void 0) u.push(r.endsWith(`${e}.jsonl`) ? {
    path: r,
    via: "linkScanPath"
  } : {
    path: S(F(r), `${e}.jsonl`),
    via: "linkScanDir"
  });
  let c = i !== void 0 && i.hoverRestOn ? {
    ...i,
    source: pFs(i.source)
  } : void 0;
  for (let f of await oEe(a, c)) u.push({
    path: S(f, `${e}.jsonl`),
    via: "projectDir"
  });
  u.push({
    path: o,
    via: "computed"
  });
  let s = new Set, p = f => Pe(f, e, c), l;
  for (let f of u) {
    if (s.has(f.path)) continue;
    s.add(f.path);
    let d = await p(f.path);
    if (d === "has") return {
      ...f,
      hasMessages: !0
    };
    if (d === "unverifiable" && l === void 0) l = f;
  }
  if (t?.crossWorktree !== !1) for (let {projectDir: f} of await te(a, c)) {
    let d = S(f, `${e}.jsonl`);
    if (c !== void 0) {
      if (s.has(d)) continue;
      s.add(d);
    }
    let y = await p(d);
    if (y === "has") return {
      path: d,
      via: "worktreeProjectDir",
      hasMessages: !0
    };
    if (y === "unverifiable" && l === void 0) l = {
      path: d,
      via: "worktreeProjectDir"
    };
  }
  if (t?.crossWorktree !== !1) {
    let f = await DMr(e, s, c);
    if (f !== null) return {
      path: f,
      via: "projectsScan",
      hasMessages: !0
    };
  }
  if (l !== void 0) return {
    ...l,
    hasMessages: !0,
    unverifiable: !0
  };
  return {
    ...u[0],
    hasMessages: !1
  };
}

function Q(e, n, r) {
  let t = UMo(F(e), r.isKeySegment);
  if (t === void 0 || E(e) !== `${n}.jsonl` || !r.isKeySegment(n)) return;
  return {
    backend: r.backend,
    key: r.transcriptKey(t, n)
  };
}

async function Pe(e, n, r) {
  let t = r !== void 0 && r.hoverRestOn ? Q(e, n, r.source) : void 0;
  if (t === void 0) return await N(e) ? "has" : "none";
  let i = await j(t);
  if (i === "has") return "has";
  try {
    if (!(await R(e)).isFile()) return "none";
  } catch (a) {
    if (!x(a)) return "has";
    return i === "unknown" ? "unverifiable" : "none";
  }
  return await N(e) ? "has" : "none";
}

function x(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === "ENOENT";
}

function C(e) {
  return {
    skipScopeStats: !0,
    skipKeyStats: !0,
    ...e !== void 0 && {
      cursor: e
    }
  };
}

function pFs(e) {
  let n = new Map, r = new Proxy(e.backend, {
    get(t, i, a) {
      let o = Reflect.get(t, i, a);
      if (i !== "listEntries") return typeof o === "function" ? o.bind(t) : o;
      return (c, s) => {
        if (!(c.namespace === "transcript" && !("projectKey" in c) && Object.keys(s ?? {}).every(d => d === "cursor" || d === "skipScopeStats" || d === "skipKeyStats"))) return t.listEntries(c, s);
        let l = [ s?.cursor ?? "", s?.skipScopeStats, s?.skipKeyStats ].map(String).join("\0"), f = n.get(l);
        if (f === void 0) {
          f = t.listEntries(c, s), n.set(l, f);
          let d = () => {
            n.delete(l);
          };
          f.then(y => {
            if (!y.ok) d();
          }, d);
        }
        return f;
      };
    }
  });
  return {
    ...e,
    backend: r
  };
}

async function DMr(e, n = new Set, r) {
  if (fI(e) === null) return null;
  if (r !== void 0 && r.hoverRestOn && r.source.isKeySegment(e)) return ve(e, n, r.source);
  let t = Qf(), i = null;
  try {
    for (let a of await b(t, {
      withFileTypes: !0
    })) {
      if (!a.isDirectory()) continue;
      let o = S(t, a.name, `${e}.jsonl`);
      if (n.has(o)) continue;
      if (await M(o) !== "has") continue;
      if (i !== null) return null;
      i = o;
    }
  } catch {
    return null;
  }
  return i;
}

async function ve(e, n, r) {
  let {backend: t, transcriptKey: i, isKeySegment: a} = r, o = Qf(), u = null, c = !1, s = new Set;
  try {
    let p = await Qi(l => t.listEntries({
      namespace: "transcript"
    }, C(l)), async l => {
      for (let f of l) {
        let d = rEe(f, a);
        if (d === void 0) continue;
        let y = S(o, d, `${e}.jsonl`);
        if (s.has(y) || n.has(y)) continue;
        s.add(y);
        let m = await j({
          backend: t,
          key: i(d, e)
        });
        if (m === "unknown") try {
          m = (await R(y)).isFile() ? await M(y) : "none";
        } catch {}
        if (m !== "has") continue;
        if (u !== null) {
          c = !0;
          return;
        }
        u = y;
      }
    }, {
      until: () => c
    });
    if (c || p.status !== "done") return null;
  } catch {
    return null;
  }
  return u;
}

async function fje(e, n) {
  if (n !== void 0 && n.hoverRestOn) return ee(n.source);
  try {
    if (T === P.O_RDONLY) {
      if (!(await z(e)).isFile()) return null;
    }
    let r = await L(e, T);
    try {
      let t = await r.stat();
      if (!t.isFile()) return null;
      let i = Buffer.allocUnsafe(Nw), a = await r.read(i, 0, Nw, 0);
      if (a.bytesRead === 0) return null;
      let o = i.toString("utf8", 0, a.bytesRead), u = Math.max(0, t.size - Nw), c = o;
      if (u > 0) {
        let s = await r.read(i, 0, Nw, u);
        c = i.toString("utf8", 0, s.bytesRead);
      }
      return {
        mtime: t.mtime.getTime(),
        size: t.size,
        head: o,
        tail: c
      };
    } finally {
      await r.close();
    }
  } catch {
    return null;
  }
}

async function ee(e) {
  let n = await X(e);
  if (n === null) return null;
  return {
    mtime: Math.trunc(n.mtimeMs),
    size: n.totalBytes,
    head: n.head,
    tail: n.tail
  };
}

var gme = 200;

function Le(e) {
  return Math.abs(pae(e)).toString(36);
}

function k(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-");
}

function dM(e) {
  let n = k(e);
  if (n.length <= gme) return n;
  return `${n.slice(0, gme)}-${Le(e)}`;
}

function mje(e, n) {
  let r = e.replaceAll("\\", "/");
  return n ? r.toLowerCase() : r;
}

function D(e, n, r) {
  let t = Ln(e), i = Ln(n), a = o => r ? o.toLowerCase() : o;
  if (a(k(t)) !== a(k(i))) return !1;
  return mje(t, r) !== mje(i, r);
}

async function LMr(e, n, r, t, i) {
  if (!D(e, n, r)) return !1;
  if (dte(e) || dte(n)) return !1;
  if (await t(e) || await t(n)) return !1;
  let a;
  try {
    if (i !== void 0 && i.hoverRestOn) {
      let u = await i.realPath(e);
      if (!u.ok || !u.value.found) return !1;
      a = Ln(u.value.path);
    } else a = Ln(await Y(e));
  } catch {
    return !1;
  }
  let o = await h_(n, i);
  return D(a, o, r);
}

function NMr(e, n, r) {
  if (n === void 0) return !1;
  let t = mje(Ln(e), r);
  return n.some(i => {
    let a = mje(Ln(i), r);
    return t === a || t.startsWith(a.endsWith("/") ? a : a + "/");
  });
}

function BXe() {
  return !1;
}

function Qf() {
  return S(Ee(), "projects");
}

function PE(e) {
  return _cn() ?? dM(e);
}

function vln(e) {
  let n = dM(e);
  return n === PE(e) ? void 0 : n;
}

function Jh(e, n = Qf()) {
  return S(n, PE(e));
}

function jXe() {
  let e = _cn();
  return e === void 0 ? null : S(Qf(), e);
}

function UMo(e, n) {
  let r = E(e);
  return F(e) === Qf() && n(r) ? r : void 0;
}

async function h_(e, n) {
  try {
    if (n !== void 0 && n.hoverRestOn) {
      let r = await n.realPath(e);
      return Ln(r.ok && r.value.found ? r.value.path : e);
    }
    return Ln(await Y(e));
  } catch {
    return Ln(e);
  }
}

function CVs(e, n) {
  return [ n ];
}

async function Eln(e, n, r, t) {
  let i = t !== void 0 && t.hoverRestOn ? t.source : void 0, a = i === void 0 ? void 0 : UMo(e, i.isKeySegment);
  if (i !== void 0 && a !== void 0) {
    let c = await Te(a, n, r, i);
    if (c !== void 0) return c;
  }
  if (he()) return !1;
  let o = k(n), u;
  try {
    u = await b(e, {
      withFileTypes: !0
    });
  } catch {
    return !1;
  }
  for (let c of u) {
    if (!c.isFile() || !c.name.endsWith(".jsonl")) continue;
    let s = await fje(S(e, c.name));
    if (s === null) continue;
    if (ne(s, o, r)) return !0;
  }
  return !1;
}

function ne(e, n, r) {
  let t = UXe(e.tail, "relocated", "relocatedCwd") ?? ROe(e.head, "cwd");
  if (t === void 0) return !1;
  let i = k(Ln(t));
  return r ? i.toLowerCase() === n.toLowerCase() : i === n;
}

async function Te(e, n, r, t) {
  let {backend: i, transcriptKey: a, isKeySegment: o} = t, u = k(n), c = !1, s = new Set;
  try {
    let p = await Qi(l => i.listEntries({
      namespace: "transcript",
      projectKey: e
    }, C(l)), async l => {
      for (let f of l) {
        if (f.kind !== "key" || f.key.namespace !== "transcript" || f.key.projectKey !== e || f.key.agentId !== void 0 || !o(f.key.sessionId) || s.has(f.key.sessionId)) continue;
        let d = f.key.sessionId, y = await ee({
          backend: i,
          key: a(e, d)
        });
        if (y === null) continue;
        if (s.add(d), ne(y, u, r)) {
          c = !0;
          return;
        }
      }
    }, {
      until: () => c
    });
    if (c) return !0;
    if (p.status !== "done") return;
  } catch {
    return;
  }
  return !1;
}

async function oEe(e, n, r = Qf()) {
  if (n !== void 0 && n.hoverRestOn) return Oe(e, n);
  if (he()) return [];
  let t = Jh(e, r), i = [];
  try {
    await b(t), i.push(t);
  } catch {}
  let a = vln(e);
  if (a !== void 0) {
    let l = S(r, a);
    try {
      await b(l), i.push(l);
    } catch {}
    return i;
  }
  let o = dM(e);
  if (o.length <= gme) return i;
  let u = !1, c = l => u ? l.toLowerCase() : l, s = c(o.slice(0, gme) + "-"), p = c(t);
  try {
    for (let l of await b(r, {
      withFileTypes: !0
    })) {
      if (!l.isDirectory() || !c(l.name).startsWith(s)) continue;
      let f = S(r, l.name);
      if (c(f) !== p && await Eln(f, e, u)) i.push(f);
    }
  } catch {}
  return i;
}

async function Oe(e, n) {
  let r = await RVs(n.source);
  if (r === null) {
    let t = vln(e);
    return [ Jh(e), ...t !== void 0 ? [ S(Qf(), t) ] : [] ];
  }
  return xVs(e, r, !1, n);
}

async function RVs(e) {
  let {backend: n, isKeySegment: r} = e, t = [], i = new Set, a = 0;
  try {
    if ((await Qi(u => n.listEntries({
      namespace: "transcript"
    }, C(u)), u => {
      for (let c of u) {
        let s = rEe(c, r);
        if (s !== void 0 && !i.has(s)) i.add(s), t.push(s);
      }
      a++;
    })).status === "error") return a === 0 ? null : t;
  } catch {
    return a === 0 ? null : t;
  }
  return t;
}

async function xVs(e, n, r, t) {
  let i = PE(e), a = Jh(e), o = vln(e), u = o === void 0 && i.length > gme ? i.slice(0, gme) + "-" : void 0, c = Qf(), s = g => r ? g.toLowerCase() : g, p = u !== void 0 ? s(u) : void 0, l = s(i), f = !1, d, y = [], m = new Set;
  for (let g of n) if (g === i) f = !0; else if (o !== void 0) {
    if (d === void 0 && s(g) === s(o)) d = S(c, g);
  } else if (p !== void 0 && s(g).startsWith(p) && s(g) !== l && !m.has(s(g))) m.add(s(g)), 
  y.push(g);
  let h = [];
  for (let g of y) {
    let K = S(c, g);
    if (await Eln(K, e, r, t)) h.push(K);
  }
  return [ ...f ? [ a ] : [], ...d !== void 0 ? [ d ] : [], ...h ];
}

async function BMo(e, n) {
  return (await oEe(e, n))[0];
}

async function te(e, n, r = Qf()) {
  let t = [];
  for (let i of await r$t(e)) {
    if (i === e) continue;
    let a = await oEe(i, n, r);
    if (n !== void 0 && n.hoverRestOn) {
      let o = Jh(i);
      if (!a.includes(o)) a.push(o);
    }
    for (let o of a) t.push({
      worktreePath: i,
      projectDir: o
    });
  }
  return t;
}

async function $Mr(e, n, r, t, i = Qf()) {
  let a = `${e}.jsonl`, o = t && r !== void 0 && r.isKeySegment(e) ? pFs(r) : void 0, u = o === void 0 ? void 0 : {
    source: o,
    hoverRestOn: t
  };
  async function c(p, l) {
    let f = S(p, a);
    if (o) {
      let d = UMo(p, o.isKeySegment);
      if (d !== void 0) {
        try {
          let y = await o.backend.stat(o.transcriptKey(d, e));
          if (y.ok) {
            let m = y.value.storedBytes ?? y.value.size;
            if (m > 0) return {
              filePath: f,
              projectPath: l,
              fileSize: m
            };
          }
        } catch {}
        return;
      }
    }
    try {
      let d = await de(f);
      if (d.size > 0) return {
        filePath: f,
        projectPath: l,
        fileSize: d.size
      };
    } catch {}
    return;
  }
  if (n) {
    let p = await h_(n, uFs(r, t)), l = new Set;
    for (let f of CVs(n, p)) for (let d of await oEe(f, u, i)) {
      let y = d;
      if (l.has(y)) continue;
      l.add(y);
      let m = await c(d, f);
      if (m) return m;
    }
    for (let {worktreePath: f, projectDir: d} of await te(p, u, i)) {
      let y = await c(d, f);
      if (y) return y;
    }
    return;
  }
  if (o) {
    let p = new Map;
    try {
      if ((await Qi(d => o.backend.listEntries({
        namespace: "transcript"
      }, d !== void 0 ? {
        cursor: d
      } : void 0), d => {
        for (let y of d) {
          let m = rEe(y, o.isKeySegment);
          if (m === void 0) continue;
          let h = y.kind === "scope" && y.mtimeMs !== void 0 ? y.mtimeMs : Number.NEGATIVE_INFINITY, g = p.get(m);
          if (g === void 0) p.set(m, {
            projectKey: m,
            mtimeMs: h
          }); else if (h > g.mtimeMs) g.mtimeMs = h;
        }
      })).status === "error") return;
    } catch {
      return;
    }
    let l = [ ...p.values() ];
    l.sort((f, d) => f.mtimeMs !== d.mtimeMs ? d.mtimeMs - f.mtimeMs : f.projectKey < d.projectKey ? -1 : f.projectKey > d.projectKey ? 1 : 0);
    for (let {projectKey: f} of l) {
      let d = await c(S(i, f), void 0);
      if (d) return d;
    }
    return;
  }
  let s;
  try {
    s = await b(i);
  } catch {
    return;
  }
  for (let p of s) {
    let l = await c(S(i, p), void 0);
    if (l) return l;
  }
  return;
}

var I = 1048576;

var $ee = 5242880, re = Buffer.from('"compact_boundary"');

async function jMo(e, n) {
  let r = re, t = Math.min(I, Math.max(n, 1)), i = Buffer.allocUnsafe(t), a = r.length - 1, o = await L(e, "r");
  try {
    let u = 0, c = 0;
    while (u < n) {
      let {bytesRead: s} = await o.read(i, c, Math.min(t - c, n - u), u);
      if (s === 0) break;
      u += s;
      let p = c + s;
      if (i.subarray(0, p).includes(r)) return !0;
      c = Math.min(a, p), i.copy(i, 0, p - c, p);
    }
    return !1;
  } finally {
    await o.close().catch(() => {});
  }
}

function ie(e) {
  try {
    let n = JSON.parse(e);
    if (n.type !== "system" || n.subtype !== "compact_boundary") return null;
    return {
      hasPreservedSegment: Boolean(n.compactMetadata?.preservedSegment || n.compactMetadata?.preservedMessages)
    };
  } catch {
    return null;
  }
}

function w(e, n, r, t) {
  let i = t - r;
  if (i <= 0) return;
  if (e.len + i > e.buf.length) {
    let a = Buffer.allocUnsafe(Math.min(Math.max(e.buf.length * 2, e.len + i), e.cap));
    e.buf.copy(a, 0, 0, e.len), e.buf = a;
  }
  n.copy(e.buf, e.len, r, t), e.len += i;
}

function O(e, n, r, t) {
  return t - r >= n.length && e.compare(n, 0, n.length, r, r + n.length) === 0;
}

var B = Buffer.from('{"type":"attribution-snapshot"'), Be = Buffer.from('{"type":"system"'), v = 10, xe = Buffer.from([ v ]), Re = 256;

function A(e, n, r) {
  if (e.straddleSnapCarryLen = 0, e.straddleSnapTailEnd = 0, e.carryLen === 0) return 0;
  let t = e.carryBuf, i = n.indexOf(v);
  if (i === -1 || i >= r) return 0;
  let a = i + 1;
  if (O(t, B, 0, e.carryLen)) e.straddleSnapCarryLen = e.carryLen, e.straddleSnapTailEnd = a, 
  e.lastSnapSrc = null; else if (e.carryLen < B.length) return 0; else {
    if (O(t, Be, 0, e.carryLen)) {
      let o = ie(t.toString("utf-8", 0, e.carryLen) + n.toString("utf-8", 0, i));
      if (o?.hasPreservedSegment) e.hasPreservedSegment = !0; else if (o) e.out.len = 0, 
      e.boundaryStartOffset = e.bufFileOff, e.hasPreservedSegment = !1, e.lastSnapSrc = null;
    }
    w(e.out, t, 0, e.carryLen), w(e.out, n, 0, a);
  }
  return e.bufFileOff += e.carryLen + a, e.carryLen = 0, a;
}

function W(e, n, r) {
  let t = n.indexOf(r), i = 0, a = 0, o = -1, u = -1, c = n.indexOf(v);
  while (c !== -1) {
    let s = c + 1;
    if (t !== -1 && t < a) t = n.indexOf(r, a);
    if (O(n, B, a, s)) w(e.out, n, i, a), o = a, u = s, i = s; else if (t >= a && t < Math.min(a + Re, s)) {
      let p = ie(n.toString("utf-8", a, c));
      if (p?.hasPreservedSegment) e.hasPreservedSegment = !0; else if (p) e.out.len = 0, 
      e.boundaryStartOffset = e.bufFileOff + a, e.hasPreservedSegment = !1, e.lastSnapSrc = null, 
      o = -1, e.straddleSnapCarryLen = 0, i = a;
      t = n.indexOf(r, t + r.length);
    }
    a = s, c = n.indexOf(v, a);
  }
  return w(e.out, n, i, a), {
    lastSnapStart: o,
    lastSnapEnd: u,
    trailStart: a
  };
}

function U(e, n, r, t, i) {
  if (t !== -1) {
    if (e.lastSnapLen = i - t, e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length) e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    n.copy(e.lastSnapBuf, 0, t, i), e.lastSnapSrc = e.lastSnapBuf;
  } else if (e.straddleSnapCarryLen > 0) {
    if (e.lastSnapLen = e.straddleSnapCarryLen + e.straddleSnapTailEnd, e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length) e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    e.carryBuf.copy(e.lastSnapBuf, 0, 0, e.straddleSnapCarryLen), r.copy(e.lastSnapBuf, e.straddleSnapCarryLen, 0, e.straddleSnapTailEnd), 
    e.lastSnapSrc = e.lastSnapBuf;
  }
}

function V(e, n, r) {
  if (e.carryLen = n.length - r, e.carryLen > 0) {
    if (e.carryBuf === void 0 || e.carryLen > e.carryBuf.length) e.carryBuf = Buffer.allocUnsafe(e.carryLen);
    n.copy(e.carryBuf, 0, r, n.length);
  }
}

function J(e) {
  if (e.carryLen > 0) {
    let n = e.carryBuf;
    if (O(n, B, 0, e.carryLen)) e.lastSnapSrc = n, e.lastSnapLen = e.carryLen; else w(e.out, n, 0, e.carryLen);
  }
  if (e.lastSnapSrc) {
    if (e.out.len > 0 && e.out.buf[e.out.len - 1] !== v) w(e.out, xe, 0, 1);
    w(e.out, e.lastSnapSrc, 0, e.lastSnapLen);
  }
}

async function Fe(e, n, r, t) {
  let i = 0, a;
  while (i < r) {
    let o = await e.readRecords(n, {
      order: "forward",
      maxBytes: I,
      ...a !== void 0 && {
        fromSeq: a
      }
    });
    if (!o.ok) throw Error("transcript record page failed during load", {
      cause: o.error
    });
    let u = [], c = 0;
    for (let p of o.value.items) {
      if (i + c + p.data.byteLength > r) break;
      u.push(p.data), c += p.data.byteLength;
    }
    if (c > 0) t(Buffer.concat(u, c)), i += c;
    let s = o.value.nextSeq;
    if (s === void 0 || u.length < o.value.items.length) return;
    if (a !== void 0 && s <= a) throw Error("transcript record cursor did not advance during load");
    a = s;
  }
}

async function WMo(e, n, r) {
  let t = re, i = I, a = {
    out: {
      buf: Buffer.allocUnsafe(Math.min(n, 8388608)),
      len: 0,
      cap: n + 1
    },
    boundaryStartOffset: 0,
    hasPreservedSegment: !1,
    lastSnapSrc: null,
    lastSnapLen: 0,
    lastSnapBuf: void 0,
    bufFileOff: 0,
    carryLen: 0,
    carryBuf: void 0,
    straddleSnapCarryLen: 0,
    straddleSnapTailEnd: 0
  };
  if (r !== void 0 && r.hoverRestOn) {
    let {backend: c, key: s} = r.source, p = 0, l = f => {
      let d = f.length;
      p += d;
      let y = A(a, f, d), m;
      if (a.carryLen > 0) {
        let g = a.carryLen + (d - y);
        m = Buffer.allocUnsafe(g), a.carryBuf.copy(m, 0, 0, a.carryLen), f.copy(m, a.carryLen, y, d);
      } else m = f.subarray(y, d);
      let h = W(a, m, t);
      U(a, m, f, h.lastSnapStart, h.lastSnapEnd), V(a, m, h.trailStart), a.bufFileOff += h.trailStart;
    };
    while (p < n) {
      let f = await c.read([ {
        key: s,
        offset: p,
        length: Math.min(i, n - p)
      } ]);
      if (!f.ok) {
        if (p === 0 && x$t(f.error)) {
          await Fe(c, s, n, l);
          break;
        }
        throw Error("transcript ranged read failed", {
          cause: f.error
        });
      }
      let [d] = f.value.items;
      if (!d.found) throw Error("transcript stream absent during load");
      if (d.value.length === 0) break;
      l(Buffer.from(d.value.buffer, d.value.byteOffset, d.value.length));
    }
    return J(a), {
      boundaryStartOffset: a.boundaryStartOffset,
      postBoundaryBuf: a.out.buf.subarray(0, a.out.len),
      hasPreservedSegment: a.hasPreservedSegment
    };
  }
  let o = Buffer.allocUnsafe(i), u = await L(e, "r");
  try {
    let c = 0;
    while (c < n) {
      let {bytesRead: s} = await u.read(o, 0, Math.min(i, n - c), c);
      if (s === 0) break;
      c += s;
      let p = A(a, o, s), l;
      if (a.carryLen > 0) {
        let d = a.carryLen + (s - p);
        l = Buffer.allocUnsafe(d), a.carryBuf.copy(l, 0, 0, a.carryLen), o.copy(l, a.carryLen, p, s);
      } else l = o.subarray(p, s);
      let f = W(a, l, t);
      U(a, l, o, f.lastSnapStart, f.lastSnapEnd), V(a, l, f.trailStart), a.bufFileOff += f.trailStart;
    }
    J(a);
  } finally {
    await u.close();
  }
  return {
    boundaryStartOffset: a.boundaryStartOffset,
    postBoundaryBuf: a.out.buf.subarray(0, a.out.len),
    hasPreservedSegment: a.hasPreservedSegment
  };
}

var o$t = /^[0-9a-f]{16}(?:[0-9a-f]{48})?@v\d+$/;

function POe(e) {
  return fI(e) !== null;
}

function WXe(e, n, r) {
  return {
    type: "history-suppression",
    sessionId: e,
    cause: n,
    ...r && {
      vetoedAgainstAccountUuid: r
    },
    ts: (new Date).toISOString()
  };
}

export { r$t, Nw, Sln, q8s, fI, COe, X5, UXe, ROe, MMr, uFs, uje, $Mo, Y8s, X8s, J8s, wln, FMo, HMr, rEe, pje, xOe, nae, pFs, DMr, fje, gme, dM, mje, LMr, NMr, BXe, Qf, PE, vln, Jh, jXe, UMo, h_, CVs, Eln, oEe, RVs, xVs, BMo, $Mr, $ee, jMo, WMo, o$t, POe, WXe };
