// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ve } from "./chunk-b0z4bv3v.js";

import { lt } from "./chunk-3pqddg8f.js";

import { ei } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { a } from "./chunk-j016gcgm.js";

import { k5 } from "./chunk-xywp7esx.js";

import { Sfe } from "./chunk-46phtgr7.js";

import { pxt, jit, wXt } from "./chunk-sqb9meyh.js";

import { nZt, vwr } from "./chunk-km6d4a9r.js";

import { Yi, vg } from "./chunk-4v78v8fd.js";

import { zo, rd } from "./chunk-htg8b98h.js";

import { ple, PHe } from "./chunk-dajwspy6.js";

import { V7n, Y2r, K7n, X2r } from "./chunk-0gmd2fjr.js";

import { o, u, De, $e, A } from "./chunk-cvcg6n1z.js";

import { normalize as F, sep as S } from "path";

var X = new Set([ "canceled", "policy_pending", "egress_blocked", "essential_traffic", "unexpected", "credential_name", ...X2r ]);

var G = new Set([ "not_uploaded_here", ...Y2r ]), g = new lt(() => ({
  last: Promise.resolve(),
  uploaded: new Set
})), O = p(() => De({
  path: o().min(1).max(PHe)
})), q = p(() => $e([ u({
  ok: A(!0),
  file_id: o(),
  name: o()
}), u({
  ok: A(!1),
  code: o().max(64)
}) ]));

async function nKs(e, i, t, r, n) {
  let {path: s} = O().parse(e), l = g.of(t), m = () => E(s, i, t, r, n), f = l.last.then(m, m);
  l.last = f;
  let c = await f;
  if (c.ok) l.uploaded.add(c.file_id);
  return {
    summary: c.ok ? "uploaded" : `not uploaded: ${c.code}`,
    output: c
  };
}

var y = p(() => De({
  file_id: o().min(1).max(256)
})), J = p(() => $e([ u({
  ok: A(!0)
}), u({
  ok: A(!1),
  code: o().max(64)
}) ]));

async function rKs(e, i) {
  let {file_id: t} = y().parse(e);
  if (!g.of(i).uploaded.delete(t)) return {
    summary: "not deleted: not_uploaded_here",
    output: {
      ok: !1,
      code: "not_uploaded_here"
    }
  };
  let r = await K7n([ t ]);
  return r === void 0 ? {
    summary: "deleted",
    output: {
      ok: !0
    }
  } : {
    summary: `not deleted: ${r}`,
    output: {
      ok: !1,
      code: r
    }
  };
}

async function E(e, i, t, r, n) {
  if (i.aborted) return {
    ok: !1,
    code: "canceled"
  };
  let s = Sfe() ? "policy_pending" : ple();
  if (s !== void 0) return {
    ok: !1,
    code: s
  };
  if (!k5()) return {
    ok: !1,
    code: "no_token"
  };
  let l = F(e), {realDirectory: m} = r;
  try {
    if (!_(l) && await jit(l, l, {
      realDirectory: m
    }) === "credential_name") return {
      ok: !1,
      code: "credential_name"
    };
  } catch {
    return {
      ok: !1,
      code: "path_rejected"
    };
  }
  let f = await Dht(e, t, r, n);
  if (f === void 0) return {
    ok: !1,
    code: "path_rejected"
  };
  let c = await jit(l, f, {
    attached: _(l) && _(f),
    realDirectory: m
  });
  if (c !== void 0) return {
    ok: !1,
    code: c === "credential_name" ? c : "path_rejected"
  };
  try {
    return await V7n(f, void 0, i);
  } catch (k) {
    if (Ve(k)) return {
      ok: !1,
      code: "canceled"
    };
    return d(k), {
      ok: !1,
      code: "unexpected"
    };
  }
}

function _(e) {
  return Boolean(a.CLAUDE_CODE_REMOTE) && T(e, nZt);
}

async function Dht(e, i, t, r) {
  let n;
  try {
    n = await t.localFileAt(e);
  } catch {
    return;
  }
  return pxt(n) || h(e, n, r) || !await P(n, i, t) ? void 0 : n;
}

async function P(e, i, {realDirectory: t, home: r}) {
  if (await wXt(e, t)) return !1;
  if (a.CLAUDE_CODE_REMOTE && vwr.some(l => T(e, l))) return !0;
  let n = i.project?.originalCwd;
  if (n === void 0 || n === "") return !1;
  let s = await t(r);
  if (s === void 0) return !1;
  return s !== n && !T(s, n) && T(e, n);
}

function h(e, i, t) {
  if (t === void 0) return !1;
  if (zo(t, vg) || rd(t, vg)) return !0;
  let r = [ ei(e), ei(i) ];
  if (r.some(n => n.unresolved)) return !0;
  return r.some(n => n.spellings.some(s => Yi(s, t, "read", "deny") !== null || Yi(s, t, "read", "ask") !== null));
}

function T(e, i) {
  return e.startsWith(i + S);
}

export { nKs, rKs, Dht };
