// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mr } from "./chunk-0cdqg49t.js";

import { z } from "./chunk-bmq0vae0.js";

import { fI, fje } from "./chunk-60c97a4m.js";

import { yz } from "./chunk-7en5gt36.js";

import { jMn, L8t } from "./chunk-ghdkaeg7.js";

import { Dp, Zv } from "./chunk-fwpqj1qs.js";

import { Qi } from "./chunk-ws55c9wv.js";

import { readdir as P, stat as w } from "fs/promises";

import { basename as ee, join as g } from "path";

function S(s) {
  let e = yz(s);
  return e !== void 0 && mr(e) ? e : void 0;
}

async function Ljr(s, e, o, d, a, u) {
  let f = z() && d !== void 0 ? S(s) : void 0;
  if (d !== void 0 && f !== void 0) {
    let i = new Map;
    try {
      await Qi(r => d.listEntries({
        namespace: "transcript",
        projectKey: f
      }, {
        skipScopeStats: !0,
        ...e ? {} : {
          skipKeyStats: !0
        },
        ...r !== void 0 && {
          cursor: r
        }
      }), r => {
        for (let t of r) {
          if (t.kind !== "key" || t.key.namespace !== "transcript") continue;
          let l = fI(t.key.sessionId);
          if (!l) continue;
          if (e && t.mtimeMs === void 0) continue;
          let m = e ? Math.trunc(t.mtimeMs ?? 0) : 0, p = i.get(l);
          if (p !== void 0) {
            if (m > p.mtime) p.mtime = m;
            continue;
          }
          i.set(l, {
            sessionId: l,
            filePath: g(s, `${t.key.sessionId}.jsonl`),
            mtime: m,
            projectPath: o,
            ownWorktrees: u
          });
        }
      }, a !== void 0 ? {
        budget: a
      } : void 0);
    } catch {}
    return [ ...i.values() ];
  }
  let n;
  try {
    n = await P(s);
  } catch {
    return [];
  }
  return (await Promise.all(n.map(async i => {
    if (!i.endsWith(".jsonl")) return null;
    let r = fI(i.slice(0, -6));
    if (!r) return null;
    let t = g(s, i);
    if (!e) return {
      sessionId: r,
      filePath: t,
      mtime: 0,
      projectPath: o,
      ownWorktrees: u
    };
    try {
      let l = await w(t);
      return {
        sessionId: r,
        filePath: t,
        mtime: l.mtime.getTime(),
        projectPath: o,
        ownWorktrees: u
      };
    } catch {
      return null;
    }
  }))).filter(i => i !== null);
}

var h = 32;

async function xVo(s, e, o) {
  let d = await Ljr(s, !1, void 0, o);
  for (let a = 0; a < d.length; a += h) {
    let f = (await Promise.all(d.slice(a, a + h).map(async n => {
      let c = await fje(n.filePath, Zv(Dp(n.filePath, o)));
      return c !== null && jMn(c.tail) === e && await L8t(n.filePath, c.head, c.tail, c.size, o) ? n.filePath : void 0;
    }))).find(n => n !== void 0);
    if (f !== void 0) return f;
  }
  return;
}

export { Ljr, xVo };
