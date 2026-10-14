// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { le } from "./chunk-cqgvwwgb.js";

import { VU, t } from "./chunk-kawq2919.js";

import { nt, My } from "./chunk-5wbhf1bk.js";

import { xn, ft } from "./chunk-zscnwzv2.js";

import { Vp, Lt, rje } from "./chunk-9yajep3y.js";

import { So } from "./chunk-wptm3jf5.js";

import { K5 } from "./chunk-rgd61mm3.js";

import { uI, ugt } from "./chunk-02g14ha5.js";

var cX = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`, wqn = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`, xOo = `(?:${cX}/)+${cX}/-/merge_requests`, POo = String.raw`[a-z0-9-]+-review\.googlesource\.com`, vqn = new RegExp(String.raw`^https://${POo}/c/(?:${cX}/)*${cX}/\+/\d{1,9}$`), i$s = new RegExp(`^https?://${wqn}(?::\\d{1,5})?/${xOo}/\\d+$`), Q1e = 2048;

function Yie(e) {
  return /\/-\/merge_requests\/\d/.test(e);
}

var IOo = void 0;

function Vve({file: e, args: o, cwd: r, env: n}, l) {
  return ft(e, o, {
    ...l,
    encoding: l.encoding ?? IOo,
    cwd: r,
    env: n,
    extendEnv: !1
  });
}

var b = 21;

function y$(e) {
  return e.owner.includes("/");
}

function Man() {
  Vp().repositoryByCwd.clear(), Vp().remoteHostByCwd.clear();
}

async function mXe() {
  let e = await tx();
  if (!e) return null;
  if (!So(e.host)) return null;
  return `${e.owner}/${e.name}`;
}

class y {
  guards=null;
  setGuards(e) {
    this.guards = e;
  }
  blocked() {
    if (!this.guards) return !0;
    try {
      return !this.guards.trustProbe();
    } catch {
      return !0;
    }
  }
}

var C = new K(() => new y);

function cgt() {
  return C.of(B().host);
}

function Han(e) {
  cgt().setGuards(e);
}

async function VOr(e, o) {
  if (cgt().blocked()) return null;
  let r = o ?? Lt(), n = (...m) => {
    let f = [ ...xn, ...m ], p = {
      preserveOutputOnError: !1
    };
    return typeof r === "string" ? ft(r, f, {
      ...p,
      cwd: e
    }) : Vve(r(f), p);
  }, l = await n("remote", "get-url", "origin");
  if (l.code === 0 && l.stdout.trim()) return {
    name: "origin",
    url: l.stdout.trim()
  };
  let i = await n("remote"), u = i.code === 0 ? nt(i.stdout.trim(), `\n`).trim() : void 0;
  if (!u) return null;
  let a = await n("remote", "get-url", u), s = a.code === 0 ? a.stdout.trim() : "";
  if (!s) return null;
  return {
    name: My(u),
    url: s
  };
}

async function gXe(e) {
  return (await VOr(e))?.url ?? null;
}

async function OOo(e) {
  return (await G(e)).url;
}

async function G(e) {
  if (cgt().blocked()) return {
    url: null,
    answered: !1
  };
  let {stdout: o, code: r, exitCode: n} = await ft(Lt(), [ ...xn, "remote", "get-url", "--push", "origin" ], {
    cwd: e,
    preserveOutputOnError: !1
  }), l = r === 0 ? o.trim() || null : null;
  return {
    url: l,
    answered: l !== null || n === 2
  };
}

async function tx(e, o) {
  let r = e ?? le(), n = Vp().repositoryByCwd;
  if (!o?.skipCache && n.has(r)) {
    let i = n.get(r) ?? null;
    if (!i || !y$(i)) return i;
  }
  let l = () => {
    let i = n.get(r);
    if (i && y$(i)) n.delete(r);
  };
  try {
    let i = await gXe(r);
    if (t(`Git remote URL: ${rje(i)}`), !i) return t("No git remote URL found"), Vp().remoteHostByCwd.delete(r), 
    l(), null;
    let u = null, s = (p => {
      let d = OC(p);
      if (d && y$(d)) return u ??= d, null;
      return d;
    })(i), m = !1;
    if (!s) {
      let {stdout: p, code: d, exitCode: x} = await ft(Lt(), [ ...xn, "config", "--get", "remote.origin.url" ], {
        cwd: r,
        preserveOutputOnError: !1
      }), g = d === 0 ? p.trim() : null, E = g !== null || x === 1;
      if (g && g !== i) {
        if (s = OC(g), s && y$(s)) u ??= s, s = null;
      }
      if (!s) {
        let R = await G(r), h = R.url;
        if (h && h !== i && h !== g) {
          if (s = OC(h), s && y$(s)) u ??= s, s = null;
        }
        m = E && R.answered;
      }
    }
    s ??= u, t(`Parsed repository: ${s ? `${s.host}/${s.owner}/${s.name}` : null} from URL: ${rje(i)}`);
    let f = s?.host ?? ugt(i);
    if (f) Vp().remoteHostByCwd.set(r, f); else Vp().remoteHostByCwd.delete(r);
    if (s) n.set(r, s); else if (m) n.delete(r);
    return s;
  } catch (i) {
    return t(`Error detecting repository: ${i}`), l(), null;
  }
}

function MOo() {
  let e = Vp().repositoryByCwd.get(le());
  if (!e || !So(e.host)) return null;
  return `${e.owner}/${e.name}`;
}

function KOr() {
  return Vp().repositoryByCwd.get(le())?.host ?? null;
}

function HOo(e) {
  if (Yie(e) || /^!\d+$/.test(e)) return !0;
  if (/^https?:\/\//i.test(e)) return !1;
  let o = KOr();
  return o !== null && uI(o) === "gitlab";
}

function DOo(e) {
  let r = /\/-\/merge_requests\/(\d+)/.exec(e)?.[1] ?? e.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(r) ? r : "";
}

var _ = new RegExp(`^(https?://${wqn}(?::\\d{1,5})?/(?:${cX}/)+${cX})/-/merge_requests/\\d`);

function LOo(e) {
  return _.exec(e)?.[1] ?? null;
}

function DNt() {
  return Vp().remoteHostByCwd.get(le()) ?? null;
}

function Dan() {
  let e = le(), o = Vp().repositoryByCwd;
  if (!o.has(e)) return;
  let r = o.get(e);
  return !!r && So(r.host);
}

function OC(e) {
  let o = e.trim();
  if (VU(o) || K5(o)) return null;
  let r = o.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (r?.[1] && r[2] && r[3]) {
    if (!w(r[1])) return null;
    if (!c(r[2]) || !c(r[3])) return null;
    return {
      host: r[1],
      owner: r[2],
      name: r[3]
    };
  }
  let n = o.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (n?.[1] && n[2] && n[3] && n[4]) {
    let l = n[1], i = n[2], u = nt(i, ":");
    if (!w(u)) return null;
    let a = l === "https" || l === "http" ? i : u;
    if (!c(n[3]) || !c(n[4])) return null;
    return {
      host: a,
      owner: n[3],
      name: n[4]
    };
  }
  return P(o);
}

function P(e) {
  let o, r, n, l = e.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
  if (l?.[1] && l[2]) r = l[1], n = l[2]; else {
    let a = e.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/);
    if (!a?.[1] || !a[2] || !a[3]) return null;
    o = a[1], r = a[2], n = a[3];
  }
  let i = nt(r, ":");
  if (!w(i) || uI(i) !== "gitlab") return null;
  let u = n.split("/");
  if (u.length < 3 || u.length > b + 1 || !u.every(c)) return null;
  return {
    host: o === "https" || o === "http" ? r : i,
    owner: u.slice(0, -1).join("/"),
    name: u.at(-1)
  };
}

function LNt(e) {
  let o = e.trim().replace(/\/+$/, "").replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "").match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!o?.[1] || !o[2]) return null;
  if (!c(o[1]) || !c(o[2])) return null;
  return {
    owner: o[1],
    name: o[2]
  };
}

function hXe(e) {
  let o = e.trim(), r = OC(o);
  if (r) {
    if (!So(r.host)) return null;
    return `${r.owner}/${r.name}`;
  }
  if (!o.includes("://") && !o.includes("@") && o.includes("/")) {
    let n = o.split("/");
    if (n.length === 2 && n[0] && n[1]) {
      let l = n[1].replace(/\.git$/, "");
      if (!c(n[0]) || !c(l)) return null;
      return `${n[0]}/${l}`;
    }
  }
  return t(`Could not parse repository from: ${o}`), null;
}

var T = /^[A-Za-z0-9._-]+$/;

function c(e) {
  return T.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}

function w(e) {
  if (!/^[A-Za-z0-9.-]+$/.test(e) || e.startsWith("-") || !e.includes(".")) return !1;
  let o = e.split(".").pop();
  if (!o) return !1;
  return /^[a-zA-Z]+$/.test(o);
}

export { cX, wqn, xOo, POo, vqn, i$s, Q1e, Yie, IOo, Vve, y$, Man, mXe, cgt, Han, VOr, gXe, OOo, tx, MOo, KOr, HOo, DOo, LOo, DNt, Dan, OC, LNt, hXe };
