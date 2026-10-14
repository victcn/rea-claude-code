// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke } from "./chunk-3pqddg8f.js";

import { Ln } from "./chunk-ddr690nj.js";

import { Ce, ce } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { Gc } from "./chunk-r276nwd3.js";

import { Yve, pr } from "./chunk-9yajep3y.js";

import { mXe, hXe } from "./chunk-0481pkch.js";

import { realpath as u } from "fs/promises";

async function $Fo(e) {
  try {
    let o = await mXe();
    if (!o) {
      t("Not in a GitHub repository, skipping path mapping update");
      return;
    }
    let r = ke(), s = pr(r) ?? r, i;
    try {
      i = Ln(await u(s));
    } catch {
      i = s;
    }
    let n = o.toLowerCase(), p = ce().githubRepoPaths?.[n] ?? [];
    if (p[0] === i) {
      t(`Path ${i} already tracked for repo ${n}`);
      return;
    }
    let f = p.filter(c => c !== i), h = [ i, ...f ];
    await Ce(c => ({
      ...c,
      githubRepoPaths: {
        ...c.githubRepoPaths,
        [n]: h
      }
    }), e), t(`Added ${i} to tracked paths for repo ${n}`);
  } catch (o) {
    t(`Error updating repo path mapping: ${o}`);
  }
}

function Zcn(e) {
  let o = ce(), r = e.toLowerCase();
  return o.githubRepoPaths?.[r] ?? [];
}

async function eun(e) {
  let o = await Promise.all(e.map(Gc));
  return e.filter((r, a) => o[a]);
}

async function nLr(e, o) {
  try {
    let r = await Yve(e);
    if (!r) return !1;
    let a = hXe(r);
    if (!a) return !1;
    return a.toLowerCase() === o.toLowerCase();
  } catch {
    return !1;
  }
}

function rLr(e, o, r) {
  let a = ce(), s = e.toLowerCase(), i = a.githubRepoPaths?.[s] ?? [], n = i.filter(p => p !== o);
  if (n.length === i.length) return;
  let g = {
    ...a.githubRepoPaths
  };
  if (n.length === 0) delete g[s]; else g[s] = n;
  Ce(p => ({
    ...p,
    githubRepoPaths: g
  }), r), t(`Removed ${o} from tracked paths for repo ${s}`);
}

export { $Fo, Zcn, eun, nLr, rLr };
