// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mr, aM, Fe } from "./chunk-0cdqg49t.js";

import { z } from "./chunk-bmq0vae0.js";

import { Qf } from "./chunk-60c97a4m.js";

import { Rf } from "./chunk-kawq2919.js";

import { qg } from "./chunk-9yajep3y.js";

import { basename as c, dirname as u, isAbsolute as S, join as p, relative as m, sep as f } from "path";

import { isAbsolute as g, sep as a } from "path";

function l(e) {
  let n = process.cwd();
  return n.endsWith(a) ? n + e : n + a + e;
}

function oRt(e) {
  return n => e.hostFiles.realPath(Rf.workspace(n === "" || g(n) ? n : l(n)), {
    native: !0
  });
}

function MT(e) {
  return e === void 0 ? void 0 : {
    hoverRestOn: z(),
    realPath: oRt(e)
  };
}

function Dp(e, n) {
  if (!z() || n === void 0) return;
  if (!e.endsWith(".jsonl")) return;
  let t = u(e);
  if (u(t) !== Qf()) return;
  let r = c(t), o = c(e, ".jsonl");
  if (e !== p(Qf(), r, `${o}.jsonl`)) return;
  let i = Fe.transcript(r, o);
  return qg(i) === void 0 ? {
    backend: n,
    key: i
  } : void 0;
}

function ccs(e, n) {
  if (!z() || n === void 0) return;
  let t = m(Qf(), e);
  if (t === "" || t === ".." || t.startsWith(`..${f}`) || S(t)) return;
  let r = t.split(f);
  if (e !== p(Qf(), ...r)) return;
  let o = r.at(-1);
  if (r.length < 4 || r[2] !== "subagents" || o === void 0 || !o.startsWith("agent-") || !o.endsWith(".jsonl")) return;
  let i = o.slice(6, -6), d = r.slice(3, -1);
  if (!aM([ r[0], r[1], i ]) || d.length > 0 && !aM(d)) return;
  let s = Fe.transcript(r[0], r[1], i, d.length > 0 ? d : void 0);
  return qg(s) === void 0 ? {
    backend: n,
    key: s
  } : void 0;
}

function YB(e) {
  if (!z() || e === void 0) return;
  return {
    backend: e,
    transcriptKey: Fe.transcript,
    isKeySegment: mr,
    realWorkspacePath: oRt(e)
  };
}

function Zv(e) {
  return e === void 0 ? void 0 : {
    source: e,
    hoverRestOn: z()
  };
}

export { oRt, MT, Dp, ccs, YB, Zv };
