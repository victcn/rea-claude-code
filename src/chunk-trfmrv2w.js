// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ht } from "./chunk-nvtwm272.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { t } from "./chunk-kawq2919.js";

import { le } from "./chunk-cqgvwwgb.js";

import { jf } from "./chunk-9tdwgnpn.js";

import { pr } from "./chunk-9yajep3y.js";

import { N_n, $_n } from "./chunk-km9en25h.js";

import { Wre } from "./chunk-bkx9v5fh.js";

import { zPt } from "./chunk-r8a304y3.js";

import { sC, mdt } from "./chunk-f4r8hspx.js";

import { we } from "./chunk-m8ez8fhk.js";

function k7n() {
  let e = [ Ee() ];
  try {
    e.push(jf());
  } catch {}
  return l => e.some(n => Wre(l, n, !0));
}

var h = we(zPt(), 1);

import { readFile as d, stat as R } from "fs/promises";

function H_n(e, l) {
  return {
    readFileState: l,
    bashTools: N_n(e),
    bashHosts: $_n(e)
  };
}

function D_n(e, l) {
  let n = l;
  if (!n?.signals || !n.signals.cli?.length && !n.signals.filesRead?.length && !n.signals.manifestDeps?.length && !n.signals.hosts?.length && !n.signals.cwd?.length) return null;
  let c;
  try {
    if (n.signals.manifestDeps?.length) c = n.signals.manifestDeps.map(a => ({
      file: new RegExp(a.file, "i"),
      pattern: new RegExp(a.pattern)
    }));
  } catch (a) {
    return t(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${a}`, {
      level: "warn"
    }), null;
  }
  let o = n.signals.hosts?.map(a => a.toLowerCase());
  return {
    cli: n.signals.cli,
    hosts: o,
    filesRead: n.signals.filesRead,
    manifestDep: c,
    cwd: n.signals.cwd
  };
}

async function L_n(e, l) {
  let {bashTools: n, bashHosts: c} = l ?? {};
  if (e.cli && n?.size) {
    let i = e.cli.find(s => n.has(s));
    if (i) return {
      signal: "cli",
      command: i
    };
  }
  if (e.hosts?.length && c?.size) {
    let i = e.hosts.find(s => c.has(s));
    if (i) return {
      signal: "hosts",
      host: i
    };
  }
  if (e.cwd?.length) {
    let i = le().replaceAll("\\", "/"), s = pr(le())?.replaceAll("\\", "/"), f = [ i ];
    if (s && i.startsWith(`${s}/`)) f.push(i.slice(s.length + 1));
    for (let p of e.cwd) {
      let g = p.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!g) continue;
      if (f.some(r => h.default.isMatch(r, [ g, `${g}/**` ], {
        nocase: !0,
        dot: !0
      }))) return {
        signal: "cwd"
      };
    }
  }
  let o = l?.readFileState, a = [];
  if (o && (e.filesRead?.length || e.manifestDep)) {
    let i = k7n();
    a = mdt(o).filter(s => !i(s));
  }
  if (e.filesRead?.length && a.length) {
    let i = a.find(s => h.default.isMatch(s.replaceAll("\\", "/"), e.filesRead, {
      nocase: !0,
      dot: !0
    }));
    if (i) return {
      signal: "filesRead",
      file: i
    };
  }
  if (e.manifestDep && o && a.length > 0) {
    let i = new Map(o.entries()), s = (async () => {
      for (let {file: p, pattern: g} of e.manifestDep) for (let r of a) {
        if (!p.test(r)) continue;
        try {
          let m = i.get(r), u = m && sC(m) ? m.content : void 0;
          if (!u) {
            if ((await R(r)).size > 524288) continue;
            u = await d(r, "utf8");
          }
          if (g.test(u)) return r;
        } catch {}
      }
      return null;
    })(), f = await Ht(s, 50, "manifestDep scan").catch(() => null);
    if (f) return {
      signal: "manifestDep",
      file: f
    };
  }
  return null;
}

export { k7n, H_n, D_n, L_n };
