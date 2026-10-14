// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E } from "./chunk-b0z4bv3v.js";

import { nw } from "./chunk-ddr690nj.js";

import { DC, ls } from "./chunk-30n0xq4e.js";

import { le } from "./chunk-cqgvwwgb.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { Yt } from "./chunk-f1zpf9me.js";

import { hf } from "./chunk-6sf4kq52.js";

import { yf, pv } from "./chunk-t156fjxt.js";

import { Fne, $2 } from "./chunk-exeqjnzg.js";

import { io, rk, nT, fz } from "./chunk-4v78v8fd.js";

import { O } from "./chunk-1xnsr4dy.js";

import { unlink as D } from "fs/promises";

import { join as g, normalize as y, sep as w } from "path";

function m(n) {
  let t = n.split("/"), r = O();
  if (r === "windows" && t.some(e => /[<>"|*]/.test(e) || nw(e) || /[. ]$/.test(e))) return `path ${hf(n)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && t.some(e => /~\d/.test(e))) return `path ${hf(n)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return;
}

function N6(n) {
  let t = n, r = i => {
    let o = t[i];
    return typeof o === "string" ? o : void 0;
  }, e = pv(t.paths), s = e === void 0 ? void 0 : e === yf ? [] : e.filter(i => typeof i === "string");
  return {
    path: r("path"),
    paths: s,
    outDir: r("out_dir")
  };
}

function ule(n, {outDirJudged: t = !1} = {}) {
  let {path: r, outDir: e} = N6(n);
  if (r === void 0) return {
    reason: "read_file requires `path` \u2014 a published path from a list_files result"
  };
  let s = $2(r);
  if ("errMsg" in s) return {
    reason: s.errMsg
  };
  let i = s.key.split("/"), o = m(s.key);
  if (o !== void 0) return {
    reason: o
  };
  let d = O(), a = d === "windows" || d === "wsl", l, f = !1;
  try {
    if (e === void 0 || e === "") {
      let {url: u} = n, c = typeof u === "string" ? Yt(u) : null, p = c !== null ? mJ(c.slug) : null;
      f = p !== null, l = p ?? le();
    } else l = ot(e);
  } catch {
    return {
      reason: "out_dir cannot be resolved to a local directory"
    };
  }
  if (!t && d === "windows" && l.split(w).some(u => u !== "" && /[. ]$/.test(u))) return {
    reason: `${e === void 0 || e === "" ? "the default save directory" : `out_dir ${hf(e)}`} has a name ending in a dot or space, which Windows would save under a different name`
  };
  if (!t && a && e !== void 0 && e.split(/[\\/]/).some(u => /~\d/.test(u))) return {
    reason: `out_dir ${hf(e)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory`
  };
  return {
    dest: g(l, ...i),
    base: l,
    ...f && {
      defaultDir: !0
    }
  };
}

var h = new WeakMap;

function HGe(n, t = {}) {
  let r = n, {paths: e, url: s, out_dir: i} = r, o = typeof e === "object" && e !== null ? e : void 0, d = [ typeof s === "string" ? s : "", typeof i === "string" ? i : "", t.outDirJudged === !0 ? "judged" : "", le(), (rk() ? nT() : null) ?? "" ].join("\0"), a = o === void 0 ? void 0 : h.get(o);
  if (a !== void 0 && a.key === d) return a.value;
  let l = b(n, t);
  if (o !== void 0) h.set(o, {
    key: d,
    value: l
  });
  return l;
}

function b(n, t) {
  let {paths: r} = N6(n);
  if (r === void 0 || r.length === 0) return {
    reason: "read_file requires `path`, or `paths` naming at least one published path"
  };
  if (r.length > Fne) return {
    reason: `\`paths\` names ${r.length} paths; at most ${Fne} can be read in one call`
  };
  let e = {
    ...n
  };
  delete e.paths;
  let s, i = [], o = new Map;
  for (let d of r) {
    let a = ule({
      ...e,
      path: d
    }, t);
    if ("reason" in a) return a;
    let l = $2(d), f = "key" in l ? l.key : d, u = io(y(a.dest).normalize("NFC").toUpperCase().toLowerCase()), c = o.get(u);
    if (c !== void 0) return {
      reason: c === f ? `\`paths\` names ${hf(d)} more than once` : `\`paths\` names ${hf(c)} and ${hf(d)}, which could save to the same file on a case-insensitive volume; read one of them on its own`
    };
    o.set(u, f), s ??= {
      base: a.base,
      ...a.defaultDir && {
        defaultDir: a.defaultDir
      }
    }, i.push({
      path: f,
      dest: a.dest
    });
  }
  return {
    ...s,
    files: i
  };
}

var N2r = "artifact-files";

function mJ(n) {
  let t = rk() ? nT() : null;
  return t === null ? null : g(t, N2r, n);
}

function one(n) {
  return n.length > 0 && n.every(t => t.length > 0 && t.every(r => fz(r)));
}

function DGe(n) {
  let t = rk() ? nT() : null;
  return t !== null && io(y(n)).startsWith(io(t) + w);
}

class gJ extends Error {
  partial;
  renameError;
  removedEarlier;
  constructor(n, t, r) {
    super("the staged file could not be moved into place");
    this.partial = n;
    this.renameError = t;
    this.removedEarlier = r;
    this.name = "PartialKeptError";
  }
}

async function LGe(n, t, r) {
  let e = !0;
  try {
    await ls(n, t, r);
    return;
  } catch (s) {
    let i = E(s);
    if (i === void 0 || !DC.has(i)) throw s;
    await D(t).catch(o => {
      if (E(o) !== "ENOENT") throw s;
      e = !1;
    });
  }
  try {
    await ls(n, t, r);
  } catch (s) {
    throw new gJ(n, s, e);
  }
}

export { N6, ule, HGe, N2r, mJ, one, DGe, gJ, LGe };
