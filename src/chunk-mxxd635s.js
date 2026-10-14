// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { sT, Ud } from "./chunk-9tdwgnpn.js";

import { ht } from "./chunk-s2t7g8m9.js";

import { YK, Rin, Es, tM } from "./chunk-q6wab2jw.js";

import { eD } from "./chunk-jnzpsr0d.js";

import { qie, jn, bn } from "./chunk-1z2heevg.js";

import { y1 } from "./chunk-htg8b98h.js";

import { oC, X5e } from "./chunk-4v78v8fd.js";

import { et } from "./chunk-59na0977.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { o, M, oe, T, u, De, $e, gA, ue, eme, U, A } from "./chunk-cvcg6n1z.js";

import { kG } from "./chunk-yk19sxff.js";

var z = 524288, C = {
  mode: "serialized",
  additionalWorkingDirectories: "serialized",
  trustedNetworkDirectories: "serialized",
  alwaysAllowRules: "serialized",
  alwaysDenyRules: "serialized",
  alwaysAskRules: "serialized",
  strippedDangerousRules: "serialized",
  prePlanMode: "serialized",
  modeBeforeRewrite: "serialized",
  restricted: "serialized_as_restriction",
  blockReadsOutsideWorkingDirectories: "serialized_as_restriction",
  bashCommandClamps: "serialized_as_restriction",
  toolAliases: "serialized_as_restriction",
  servedCall: "set_by_deserialize",
  sandboxAutoAllowSuspended: "set_by_deserialize",
  chromeClassifierFloorEnabled: "not_serialized",
  chromeNavigationClassifierEnabled: "not_serialized",
  chromeClickClassifierEnabled: "not_serialized",
  chromeHostToolAsksEnabled: "not_serialized",
  canAutoClassifierRun: "not_serialized",
  proactivityBaseline: "not_serialized",
  startupModeDecidedByProactivityLevel: "not_serialized",
  isAutoModeAvailable: "not_serialized",
  isBypassPermissionsModeAvailable: "not_serialized",
  shouldAvoidPermissionPrompts: "not_serialized",
  awaitAutomatedChecksBeforeDialog: "not_serialized",
  mcpPermissionModeOverrides: "not_serialized",
  mcpAskForTools: "not_serialized",
  builtInToolsDisabled: "not_serialized",
  toolsKeptByLaunchList: "not_serialized",
  pollEventDeliveryGuard: "not_serialized",
  isRemoteMode: "not_serialized"
}, P = {
  restricted: !1,
  blockReadsOutsideWorkingDirectories: !1,
  bashCommandClamps: [],
  toolAliases: {}
}, g = Object.keys(P), J = Object.entries(C).flatMap(([e, s]) => s === "serialized" ? [ e ] : []);

var y = p(() => U(eD)), R = p(() => U(y1)), c = p(() => o().min(1)), m = p(() => eme(R(), T(o()))), NFt = 4096, Z0r = p(() => o().max(NFt).refine(e => e.startsWith("/") && !e.includes("\0"))), _ = p(() => $e([ A(!1), gA([]), De({}) ])), E = p(() => u({
  restricted: M(),
  blockReadsOutsideWorkingDirectories: M(),
  bashCommandClamps: T(T(o())),
  toolAliases: ue(c(), c())
}).catchall(_()));

function eLr(e) {
  let s = Kn(e) ? e.restrictions : void 0;
  return Kn(s) && Object.values(Es(s, g)).some(i => !_().safeParse(i).success);
}

function f({$map: e}) {
  return new Set(e.map(([s]) => s)).size === e.length;
}

var h = p(() => De({
  mode: y(),
  additionalWorkingDirectories: De({
    $map: T(gA([ Z0r(), De({
      path: o(),
      source: R()
    }) ]))
  }).refine(f).refine(({$map: e}) => e.every(([s, {path: i}]) => s === i)),
  trustedNetworkDirectories: De({
    $map: T(gA([ c(), T(c()) ]))
  }).refine(f).optional(),
  alwaysAllowRules: m(),
  alwaysDenyRules: m(),
  alwaysAskRules: m(),
  strippedDangerousRules: m().optional(),
  prePlanMode: y().optional(),
  modeBeforeRewrite: y().optional(),
  restrictions: E()
})), yWe = p(() => oe().transform((e, s) => {
  let i = h().safeParse(e), n = i.success ? Object.entries(Kn(e) ? e : {}).filter(([r, a]) => r === "__proto__" || Rin(a)).map(([r]) => ({
    path: [ r ],
    message: "a key named __proto__"
  })) : i.error.issues;
  return s.issues.push(...n.slice(0, 1).map(({path: r, message: a}) => ({
    code: "custom",
    path: r,
    message: a,
    input: e
  }))), i.success && n.length === 0 ? i.data : kG;
}));

function _We(e) {
  return e !== void 0 && sT(e) > z;
}

function S(e) {
  let {restrictions: s, additionalWorkingDirectories: i, trustedNetworkDirectories: n, ...r} = e;
  return {
    ...Ud(),
    ...r,
    additionalWorkingDirectories: new Map(i.$map),
    ...n && {
      trustedNetworkDirectories: new Map(n.$map)
    },
    ...tM(s, g),
    servedCall: !0,
    sandboxAutoAllowSuspended: !0
  };
}

function bWe(e, s, i) {
  let n = S(e), r = a => Object.fromEntries(y1.map(d => [ d, [ ...n[a][d] ?? [], ...(s[a][d] ?? []).filter(l => {
    if (!YK.test(l)) return !0;
    return t(`Ignoring the launch ${a === "alwaysDenyRules" ? "deny" : "ask"} rule "${l}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`, {
      level: "warn"
    }), !1;
  }).flatMap(l => [ l, ...x(l, i) ]) ] ]));
  return {
    ...n,
    alwaysDenyRules: r("alwaysDenyRules"),
    alwaysAskRules: r("alwaysAskRules")
  };
}

function x(e, s) {
  let {toolName: i, ruleContent: n} = jn(e);
  if (n === void 0 || i !== et && i !== ht) return [];
  let {relativePattern: r, root: a} = X5e(n, s);
  if (a !== null) return [];
  return [ bn({
    toolName: i,
    ruleContent: `/${qie(`${oC(s)}/`, {
      escapeGlobs: !0
    })}**/${r}`
  }) ];
}

export { NFt, Z0r, eLr, yWe, _We, bWe };
