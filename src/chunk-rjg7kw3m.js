// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _ } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { jn, bn } from "./chunk-1z2heevg.js";

import { Xi } from "./chunk-xywp7esx.js";

import { ht, qt, je } from "./chunk-s2t7g8m9.js";

import { et } from "./chunk-59na0977.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { o, v, T, De } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

import { createHash as u } from "crypto";

var tQe = "anthropic/returnToolOutput", i5n = [ 2 ], PFo = 4194304;

function K0r() {
  return !0;
}

function Ycn(e) {
  return Kn(e) && e.tool_host_interface !== void 0;
}

var d = 64;

var l = 1024, a = 1024, c = 65536, i = p(() => T(v().int()).max(d)), y = p(() => T(o().min(1).max(a)).max(l).refine(e => e.reduce((n, t) => n + t.length, 0) <= c)), f = p(() => De({
  versions: i(),
  deny_rules_digest: o().regex(/^[0-9a-f]{64}$/)
}));

function IFo(e) {
  let n = s(e)?.[tQe];
  if (n === void 0) return {
    kind: "absent"
  };
  let t = i().safeParse(s(n)?.versions);
  if (!t.success) return {
    kind: "malformed"
  };
  if (m(t.data).length === 0) return {
    kind: "no_shared_version",
    versions: t.data
  };
  let r = f().safeParse(n);
  return r.success ? {
    kind: "requested",
    denyRulesDigest: r.data.deny_rules_digest
  } : {
    kind: "malformed"
  };
}

function m(e) {
  return i5n.filter(n => e.includes(n));
}

var O = {
  [je]: [ et, ht ],
  [ht]: [ et ],
  [qt]: [ ht, et ],
  [Xi]: [ ht, et ]
}, g = D([ je, ...Object.values(O).flat() ]);

function q0r(e) {
  return D(e.map(jn).filter(({toolName: n, ruleContent: t}) => t !== void 0 && g.includes(n)).map(bn)).toSorted();
}

function Y0r(e) {
  return y().safeParse(e).success;
}

function OFo(e) {
  return u("sha256").update(_(e)).digest("hex");
}

function MFo({tools: e, denyRules: n}) {
  return {
    versions: [ ...i5n ],
    tools: [ ...e ],
    deny_rules: q0r(n)
  };
}

function s(e) {
  return Kn(e) ? e : void 0;
}

export { tQe, i5n, PFo, K0r, Ycn, IFo, q0r, Y0r, OFo, MFo };
