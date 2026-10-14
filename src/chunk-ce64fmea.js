// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Qe, QN, WEo, Xi, _k, no, Fr, RBe, k, Z1, _To } from "./chunk-xywp7esx.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { K, vI, B, ea, ve, gLo, yLo, bLo, x$, Bme, _L, uNo, Fn } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c, pe, vl } from "./chunk-hwdwjvh8.js";

import { Un, bx, Yp } from "./chunk-ddr690nj.js";

import { a } from "./chunk-j016gcgm.js";

import { wo, se, t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { Bl } from "./chunk-cqgvwwgb.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { kp } from "./chunk-5brm0azz.js";

import { ws, jo, p_ } from "./chunk-nnrb0acr.js";

import { Ld, rNt, ZIe } from "./chunk-q6wab2jw.js";

import { _h, rg, Yfe } from "./chunk-jnzpsr0d.js";

import { Yl, Kie, TE, jn, bn, eq, fu } from "./chunk-1z2heevg.js";

import { hn, fe, er, Ek, Qsn, tin } from "./chunk-dd98x6x7.js";

import { zR, lp, YTo, fon, aIe, XTo, wxr, MK, NBe, vxr, ZGn, ht, qt, je, Rt } from "./chunk-s2t7g8m9.js";

import { xc } from "./chunk-qqd24q2y.js";

import { $h, cz, bFn, F5e, U5e, tu } from "./chunk-4v78v8fd.js";

import { Uh, vw, $l, lh, AR } from "./chunk-9tdwgnpn.js";

import { Jue, sEr, gks, Mxe, Hyo, yen } from "./chunk-4y2m4xpx.js";

import { Igo, Ogo, mwr, gwr, VFn, Zoe, fH, gFe, Qd, zm } from "./chunk-htg8b98h.js";

import { Zio, xps, eXt, xgr, zHn, Pgr } from "./chunk-yd16nhae.js";

import { ioe } from "./chunk-7xj6dhxv.js";

import { nar, sar, xAe, Fxn, hre, E3, Q5t, $Pn, Oh, nP } from "./chunk-84yp45y8.js";

import { nJo, gkn } from "./chunk-dk14h9bn.js";

import { eye, tye } from "./chunk-fttavbjg.js";

import { ik } from "./chunk-2mq45myc.js";

import { Fl } from "./chunk-dc6j1jb5.js";

import { et } from "./chunk-59na0977.js";

import { oo } from "./chunk-vjmbaret.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { relative as Oe, resolve as ce } from "path";

var De = new K(() => Me());

function Re() {
  return De.of(B().host);
}

var $D = vI(Re);

function Qnr(e) {
  if (!/^[A-Za-z]:[\\/]/.test(e)) return [];
  let s = Yp(e.slice(0, 3));
  if (s == null || !Un(s)) return [];
  let o = Yp(e);
  if (o == null || !Un(o)) return [];
  let l = bx(s), n = bx(o);
  if (l == null || n == null || l !== n) return [];
  return [ e, o ];
}

function j(e) {
  if (ws.includes(e)) {
    let s = hn(e);
    if (s) {
      let o = Bl(), l = o === null ? s : Oe(o, s);
      return l.length < s.length ? l : s;
    }
  }
  return e;
}

function VXo(e, s) {
  let o = [];
  for (let l of e) if (l.ruleBehavior === "allow" && Zoe(l.ruleValue.toolName, l.ruleValue.ruleContent)) {
    let n = l.ruleValue.ruleContent ? `${l.ruleValue.toolName}(${l.ruleValue.ruleContent})` : `${l.ruleValue.toolName}(*)`;
    o.push({
      ruleValue: l.ruleValue,
      source: l.source,
      ruleDisplay: n,
      sourceDisplay: j(l.source)
    });
  }
  for (let l of s) {
    let n = jn(l);
    if (Zoe(n.toolName, n.ruleContent)) o.push({
      ruleValue: n,
      source: "cliArg",
      ruleDisplay: n.ruleContent ? `${n.toolName}(${n.ruleContent})` : `${n.toolName}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return o;
}

var dkn = `--allow-dangerously-skip-permissions ignored: ${Hyo}`, Be = [ ...Ogo, ...mwr, ...gwr ];

function G(e) {
  return e === void 0 || /^[\s*]+$/.test(e);
}

function Ne(e) {
  return !1;
}

function ke(e) {
  if (e.toolName === Rt) return "powershell";
  let s = e.ruleContent;
  if (s === void 0 || G(s)) return "bare";
  if (VFn(s, gwr)) return "cluster";
  if (VFn(s, mwr)) return "network";
  return "ace";
}

function KXo(e, s = !1) {
  {
    let {APPIFACT_REPL_TOOL_NAME: l} = import.meta.require("./chunk-b1bs6y86.js");
    if (e.toolName === l) return G(e.ruleContent);
  }
  if (e.toolName !== je) return !1;
  let o = e.ruleContent;
  if (o === void 0 || G(o) || Ne(o)) return !0;
  return s && VFn(o, Be);
}

function ue(e) {
  return e.toolName === je && e.ruleContent === void 0;
}

function qXo(e) {
  return e.toolName === Rt && G(e.ruleContent);
}

function ajs() {
  let e = k("tengu_ant_yolo_equiv_strip_config", {});
  if (!e.enabled) return !1;
  let s = a.CLAUDE_CODE_ENTRYPOINT ?? "cli";
  if (e.includeEntrypoints) return e.includeEntrypoints.includes(s);
  return !(e.excludeEntrypoints ?? []).includes(s);
}

function YXo(e, s, o = !1) {
  let l = [];
  for (let n of e) if (n.ruleBehavior === "allow" && KXo(n.ruleValue, o)) l.push({
    ruleValue: n.ruleValue,
    source: n.source,
    ruleDisplay: n.ruleValue.ruleContent ? `${n.ruleValue.toolName}(${n.ruleValue.ruleContent})` : `${n.ruleValue.toolName}(*)`,
    sourceDisplay: j(n.source)
  });
  for (let n of s) {
    let u = jn(n);
    if (KXo(u, o)) l.push({
      ruleValue: u,
      source: "cliArg",
      ruleDisplay: u.ruleContent ? `${u.toolName}(${u.ruleContent})` : `${u.toolName}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return l;
}

function XXo(e, s) {
  let o = [];
  for (let l of e) if (l.ruleBehavior === "allow" && qXo(l.ruleValue)) o.push({
    ruleValue: l.ruleValue,
    source: l.source,
    ruleDisplay: `${Rt}(*)`,
    sourceDisplay: j(l.source)
  });
  for (let l of s) {
    let n = jn(l);
    if (qXo(n)) o.push({
      ruleValue: n,
      source: "cliArg",
      ruleDisplay: `${Rt}(*)`,
      sourceDisplay: "--allowed-tools"
    });
  }
  return o;
}

function Znr(e) {
  return [];
}

function Le(e) {
  return p_.includes(e) || e === "session" || e === "cliArg";
}

function ljs(e, s, o = !1) {
  let l = new Map;
  for (let u of s) {
    if (!o && !Le(u.source)) continue;
    let d = u.source, m = l.get(d) || [];
    m.push(u.ruleValue), l.set(d, m);
  }
  let n = e;
  for (let [u, d] of l) n = tu(n, {
    type: "removeRules",
    rules: d,
    behavior: "allow",
    destination: u
  });
  return n;
}

function D2(e) {
  let s = gFe(e.alwaysAllowRules, "allow"), o = VXo(s, []);
  if (o.length === 0) return e.strippedDangerousRules !== void 0 ? e : {
    ...e,
    strippedDangerousRules: {}
  };
  for (let n of o) t(`Ignoring dangerous permission ${n.ruleDisplay} from ${n.sourceDisplay} (bypasses classifier)`);
  let l = {};
  for (let [n, u] of Object.entries(e.strippedDangerousRules ?? {})) if (u) l[n] = [ ...u ];
  for (let n of o) {
    let u = bn(n.ruleValue), d = l[n.source] ??= [];
    if (!d.includes(u)) d.push(u);
  }
  return {
    ...ljs(e, o, !0),
    strippedDangerousRules: l
  };
}

function M5r(e, s, o = []) {
  let l = {
    ...e,
    toolAliases: s
  };
  if (!k("tengu_sorted_zebra", !1)) return l;
  for (let [n, u] of Object.entries(s ?? {})) {
    if (n.startsWith("mcp__") || !Zoe(n, void 0)) continue;
    let d = typeof u === "string" ? oo(u) : null;
    if (d?.toolName) {
      Igo(d.serverName, [ d.toolName ]), g("auto_mode_tool_alias");
      continue;
    }
    let m = a.CLAUDE_AGENT_SDK_MCP_NO_PREFIX && typeof u === "string" && u !== "" && d === null;
    if (m && o.length > 0) {
      for (let h of o) Igo(h, [ u ]);
      g("auto_mode_tool_alias");
      continue;
    }
    f("auto_mode_tool_alias", m ? "no_sdk_server" : "target_not_mcp_tool"), t(`Auto mode: toolAliases maps ${n} to ${typeof u === "string" ? u : `a value of type ${typeof u}`}, ${m ? "and no SDK MCP server is registered that could hold it" : "which is not of the form mcp__<server>__<tool>"}, so an allow rule for that tool still runs its calls without the classifier's check`, {
      level: "warn"
    });
  }
  return l.strippedDangerousRules === void 0 ? l : D2(l);
}

function Ghe(e) {
  let s = e.strippedDangerousRules;
  if (!s) return e;
  let o = e;
  for (let [l, n] of Object.entries(s)) {
    if (!n || n.length === 0) continue;
    let u = l === "command" ? n.filter(d => !Fxn(d)) : [ ...n ];
    if (u.length === 0) continue;
    o = tu(o, {
      type: "addRules",
      rules: u.map(jn),
      behavior: "allow",
      destination: l
    });
  }
  return {
    ...o,
    strippedDangerousRules: void 0
  };
}

function H5r(e, s) {
  return {
    ...s,
    mode: e.mode,
    prePlanMode: e.prePlanMode,
    startupModeDecidedByProactivityLevel: e.startupModeDecidedByProactivityLevel,
    alwaysAllowRules: de(e.alwaysAllowRules, s),
    strippedDangerousRules: e.strippedDangerousRules && de(e.strippedDangerousRules, s)
  };
}

function de(e, s) {
  let o = Object.keys(e).reduce((l, n) => {
    let u = s.strippedDangerousRules?.[n] ?? [], d = new Set([ ...s.alwaysAllowRules[n] ?? [], ...n === "command" ? u.filter(y => !Fxn(y)) : u ]), m = e[n] ?? [], h = m.filter(y => d.has(y));
    return l.rules[n] = h, l.dropped ||= h.length !== m.length, l;
  }, {
    rules: {},
    dropped: !1
  });
  return o.dropped ? o.rules : e;
}

function MM(e, s, o, l) {
  if (e === s) return o;
  if (o.startupModeDecidedByProactivityLevel !== void 0) o = {
    ...o,
    startupModeDecidedByProactivityLevel: void 0
  };
  if (NBe(void 0), ioe({
    from: e,
    to: s,
    trigger: l
  }), Bme(e, s), uNo(e, s), e === "plan" && s !== "plan") x$(!0);
  if (s === "plan" && e !== "plan") return Ivt(o);
  let n = e === "auto" || e === "plan" && lp(), u = s === "auto";
  if (u && !n) {
    if (!Oh()) throw Error("Cannot transition to auto mode: gate is not enabled");
    zR(!0), o = D2(o);
  } else if (n && !u) zR(!1), _L(!0), o = Ghe(o);
  if (e === "plan" && s !== "plan" && o.prePlanMode) return {
    ...o,
    prePlanMode: void 0
  };
  return o;
}

async function D5r() {
  return !1;
}

var xe = {
  settings: "auto_mode_settings",
  "circuit-breaker": "auto_mode_circuit_breaker",
  "fast-mode": "auto_mode_fast_mode",
  model: "auto_mode_model"
};

function GJ(e, s) {
  let o = rg(e);
  if (o === void 0) return {
    ok: !1,
    error: Yfe,
    code: "invalid_mode"
  };
  if (o === "bypassPermissions") {
    if (s.restricted) return {
      ok: !1,
      error: Zio,
      code: "bypass_restricted"
    };
    if (ik()) return {
      ok: !1,
      error: "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
      code: "bypass_disabled"
    };
    if (!s.isBypassPermissionsModeAvailable) return {
      ok: !1,
      error: "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
      code: "bypass_not_launched"
    };
  }
  if (o === "auto" && !Oh()) return err(nP());
  return {
    ok: !0,
    mode: o
  };
}

function err(e) {
  return {
    ok: !1,
    error: e ? `Cannot set permission mode to auto: ${Cne(e)}` : "Cannot set permission mode to auto",
    code: e ? xe[e] : "auto_mode_unavailable"
  };
}

function Lk(e, s, o, l) {
  let n = GJ(e, s);
  if (!n.ok) return n;
  let u = n.mode, d;
  if (o(m => {
    if (m.mode === u) return m;
    if (m !== s) {
      let y = GJ(u, m);
      if (!y.ok) return d = y, m;
    }
    return {
      ...MM(m.mode, u, m, l),
      mode: u
    };
  }), d !== void 0) return d;
  return setImmediate(() => {
    $D.emit();
  }), {
    ok: !0,
    mode: u
  };
}

function L5r(e, s) {
  let o = s.context.mode;
  if (!GJ(o, e).ok) return s.context;
  MM(e.mode, o, e);
  let l = s.autoModeActive && Oh() && (o === "auto" || o === "plan" && irr());
  if (lp() !== l) zR(l), _L(!l);
  return setImmediate(() => {
    $D.emit();
  }), s.autoModeActive && !l ? Ghe(s.context) : s.context;
}

function JXo(e) {
  let s = [], o = new Set, l = !1, n = [], u = [], d = k("tengu_tools_exclusion_killswitch", !1);
  for (let m = 0; m < e.length; m++) {
    let h = e[m];
    if (h === void 0) continue;
    if (!h.startsWith(eq)) {
      s.push(h);
      continue;
    }
    let y = h.slice(eq.length);
    if (y === "") {
      let A = e[m + 1];
      if (A === void 0 || A.startsWith(eq) || A.startsWith("(")) {
        l = !0;
        continue;
      }
      if (m++, !d) n.push(A);
      h = eq + A, y = A;
    }
    let S = y.indexOf("(");
    if (S === 0) {
      l = !0;
      continue;
    }
    if (S > 0) {
      if (y = y.slice(0, S), !d) u.push(h);
    }
    if (!d) o.add(Yl(y));
  }
  return {
    kept: s,
    excluded: o,
    bare: l,
    detached: n,
    scoped: u
  };
}

function djs(e, s) {
  let o = e.join(" ").trim();
  if (xgr(o)) return Pgr(s());
  let {kept: n, excluded: u} = JXo(fu(e)), d = n.includes("preset:default") ? s().map(m => m.name).concat(n.filter(m => m !== "preset:default")) : n;
  if (u.size === 0) return d;
  return d.filter(m => !u.has(Yl(m)));
}

var me = [ je, Rt, no, Fr ];

function cjs({baseToolsCli: e, baseToolsIsPreset: s, parsedBaseTools: o, getAllBaseTools: l}) {
  let n = [], u = djs(e, l), d = new Set(u.map(Yl)), m = l(), h = s ? null : m, y = h === null ? Pgr(m) : h.map(p => p.name), {excluded: S} = o;
  for (let p of h ?? l()) if (p.familyParentToolName !== void 0 && S.has(p.familyParentToolName)) d.delete(p.name);
  for (let p of m) if (p.familyParentToolName !== void 0 && d.has(p.familyParentToolName)) d.add(p.name);
  if (Uh.some(p => d.has(p))) d.add(lh);
  for (let p of S) d.delete(p);
  if (S.has(je)) {
    let {APPIFACT_REPL_TOOL_NAME: p} = import.meta.require("./chunk-b1bs6y86.js");
    d.delete(p);
  }
  let A = y.filter(p => !d.has(p));
  for (let p of S) {
    if (y.includes(p)) continue;
    if (xAe.has(p)) {
      t(`--tools exclusion names a removed tool: ${p}`);
      continue;
    }
    if (A.push(p), me.includes(p)) continue;
    n.push(`--tools entry "${eq}${p}" matches no built-in tool \u2014 check for typos. An MCP tool with exactly that name is still withheld.`);
  }
  for (let p of o.scoped) n.push(`--tools entry "${p}" names a rule, not a tool; the whole tool is withheld. Write "${eq}${p.slice(eq.length, p.indexOf("("))}" to say so.`);
  for (let p of o.detached) n.push(`--tools entry "${eq} ${p}" was read as "${eq}${p}" and ${p} is withheld; write it without the space.`);
  if (o.bare) n.push(`--tools has a "${eq}" with no tool name after it; write the name right after it, as in "${eq}Bash".`);
  if (!s) {
    for (let p of [ ...O() === "windows" ? [ Rt ] : [], no, Fr ]) if (!d.has(p) && !A.includes(p)) A.push(p);
  }
  return {
    toolsToDisallow: A,
    toolsKept: s || o.kept.includes("preset:default") ? void 0 : d,
    warnings: n
  };
}

function Ie({processPwd: e, originalCwd: s}) {
  let {resolvedPath: o, isSymlink: l} = wo(se(), e);
  return l ? o === ce(s) : !1;
}

function N5r({permissionModeCli: e, inheritPermissionModeCli: s, dangerouslySkipPermissions: o, allowDangerouslySkipPermissions: l, bypassPermissionsBlockedByHost: n, agentPermissionMode: u, proactivityLevel: d}) {
  let m = _h(e), h = _h(s), y = nJo(Boolean(o || l)), S = gkn();
  if (xc()) {
    let R = o || m && m !== "default" || h && h !== "default" || u && u !== "default", E = "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    if (R) process.stderr.write(`\u26a0 ${E}\n`);
    return {
      mode: "default",
      notification: R ? E : void 0,
      modeSuppliedOnInvocation: !0
    };
  }
  let p = {
    cli: {
      permissionMode: S === !0 && d !== void 0 && m !== void 0 && Mxe(d, m, void 0) !== void 0 ? void 0 : m,
      inheritPermissionMode: h,
      dangerouslySkipPermissions: o,
      allowDangerouslySkipPermissions: l,
      bypassPermissionsBlockedByHost: n,
      isNonInteractiveSession: ve()
    },
    env: {
      ...process.env,
      CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: void 0
    },
    settings: er() || {},
    agentFrontmatter: u ? {
      permissionMode: u
    } : void 0,
    proactivityLevel: S === !1 ? void 0 : d
  }, _ = sEr(p);
  wxr(_.fromAutoFallback), vxr(_.autoStartWithheldForHipaaTaint);
  let T = !ve() && RBe(), C = _.autoDefaultWithheldForPendingVerdict;
  NBe(!_.modeSuppliedOnInvocation && (T || C) ? {
    mode: _.mode,
    inputs: p,
    awaitsGrowthBook: T,
    awaitsPolicyVerdict: C
  } : void 0);
  let L;
  {
    let R = _.decidedByProactivityLevel || S === !0 && d !== void 0;
    L = {
      proactivityBaseline: {
        mode: y ?? _.baselineMode,
        fromRelaunchHandoff: y !== void 0
      },
      startupModeDecidedByProactivityLevel: R ? d : void 0
    };
  }
  if (_.mode === "auto") zR(!0);
  return {
    mode: _.mode,
    notification: _.notification,
    proactivity: L,
    modeSuppliedOnInvocation: _.modeSuppliedOnInvocation
  };
}

function trr() {
  return a.CLAUDE_CODE_SESSION_KIND !== "bg";
}

function ujs(e) {
  return e === "cliArg" && trr();
}

function nrr() {
  return a.CLAUDE_CHROME_CLASSIFIER_FLOOR ?? (a.CLAUDE_CODE_REMOTE ? Fl("tengu_cowork_chrome_automode_default", {
    safe: !0
  }) : k("tengu_cowork_chrome_automode_default", !1));
}

async function $5r({allowedToolsCli: e, disallowedToolsCli: s, baseToolsCli: o, getAllBaseTools: l, restricted: n = !1, permissionMode: u, allowDangerouslySkipPermissions: d, addDirs: m, bgSessionPermissionRules: h, relaunchSessionAddDirs: y, storageV5: S}) {
  let A = [], p = null, _ = u === "bypassPermissions" || d, T = fu(e).map(r => bn(jn(r))).filter(r => {
    let P = rNt(jn(r).toolName);
    if (P) return A.push(`Ignoring --allowedTools rule "${r}": ${P.error}. ${P.suggestion}.`), 
    !1;
    return !0;
  }), C = D([ ...fu(s), ...hre() ]), L = !!o && o.length > 0 && xgr(o.join(" ").trim()) !== null, R = o && !L ? JXo(fu(o)) : {
    kept: [],
    excluded: new Set,
    bare: !1,
    detached: [],
    scoped: []
  }, E = R.kept.map(Yl).filter(r => !R.excluded.has(r)), N = !!o?.length && !L && E.length === 0, Q = r => E.includes(r) || T.some(P => jn(P).toolName === r);
  gLo([ no, Fr ].some(Q)), yLo(nar.some(Q));
  let V = [], J = [], W, ee = new Set;
  if (o && o.length > 0) {
    let r = cjs({
      baseToolsCli: o,
      baseToolsIsPreset: L,
      parsedBaseTools: R,
      getAllBaseTools: l
    });
    A.push(...r.warnings), V = r.toolsToDisallow, J = N ? [] : r.toolsToDisallow, W = r.toolsKept;
  }
  if (n) {
    let r = eXt(zHn(l()), xps(E));
    for (let P of r) ee.add(P);
    V = D([ ...V, ...r ]);
  }
  bLo(J.filter(r => !ee.has(r)));
  let oe = new Map, U = a.PWD, Y = U ? ea() : null;
  if (U && Y !== null && U !== Y && Ie({
    originalCwd: Y,
    processPwd: U
  })) oe.set(U, {
    path: U,
    source: "session"
  });
  let te = (er() || {}).permissions?.disableBypassPermissionsMode === "disable", H = d && u !== "bypassPermissions" && !te && !n && yen("bypassPermissions");
  if (H) i("tengu_bg_allow_bypass_unconsented_ignored", {}), A.push(dkn);
  let Pe = (u === "bypassPermissions" || d && !H) && !te && !n && !0, ie = z() && S !== void 0 && S.hostFiles.serving("workspace") === "host" ? {
    strictPersistedTrust: await _To(S)
  } : {}, F = cz(ie), q = [ ...C, ...V ].map(jn), ye = q.some(ue), he = q.some(r => r.toolName === je) || F.some(r => r.ruleBehavior === "deny" && r.ruleValue.toolName === je), be = a.CLAUDE_CODE_USE_POWERSHELL_TOOL || fu(o ?? []).map(Yl).includes(Rt) || T.some(r => jn(r).toolName === Rt) || q.some(r => r.toolName === Rt) || F.some(r => r.ruleValue.toolName === Rt);
  if (O() === "windows" && $l() && he && !be) {
    C = [ ...C, Rt ];
    let r = F.filter(P => P.ruleBehavior === "deny" && ue(P.ruleValue));
    if (vw() && (ye || r.length > 0) && !r.some(P => P.source === "policySettings")) A.push(`Denying ${je} also turns off the ${Rt} tool, so Claude has neither. To use ${Rt}, set CLAUDE_CODE_USE_POWERSHELL_TOOL=1.`);
  }
  let ne = [];
  if (!a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    let r = [ ...YXo(F, T, !0), ...XXo(F, T) ];
    if (r.length > 0) {
      let P = r.map(x => ke(x.ruleValue)), M = !1, w = !1;
      i("tengu_ant_overly_broad_bash_detected", {
        count: r.length,
        categories: vl(D(P)),
        yoloEquivEnabled: M,
        willStrip: ne.length,
        entrypoint: pe(kp()) ?? b("other"),
        ...!1
      });
    }
  }
  let re = [];
  if (u === "auto") re = VXo(F, T);
  let Z = $h();
  if (Z && T.length > 0) A.push(`Ignoring --allowedTools ${T.join(", ")}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`);
  let v = E3({
    mode: u,
    additionalWorkingDirectories: oe,
    alwaysAllowRules: {
      cliArg: Z ? [] : T,
      ...h && {
        session: Z ? [] : h.allow
      }
    },
    alwaysDenyRules: {
      cliArg: C,
      ...h && {
        session: h.deny
      },
      ...V.length > 0 && {
        toolsNarrowing: V
      }
    },
    alwaysAskRules: {},
    mcpPermissionModeOverrides: {},
    ...n && {
      restricted: n
    },
    ...N && {
      builtInToolsDisabled: N
    },
    ...W !== void 0 && {
      toolsKeptByLaunchList: Object.freeze([ ...W ])
    },
    ...U5e() && {
      blockReadsOutsideWorkingDirectories: !0
    },
    isBypassPermissionsModeAvailable: Pe,
    ...(r => ({
      isAutoModeAvailable: r,
      canAutoClassifierRun: r,
      chromeClassifierFloorEnabled: nrr(),
      chromeNavigationClassifierEnabled: k("tengu_auto_mode_config", {})?.chromeNavigation === !0,
      chromeClickClassifierEnabled: k("tengu_auto_mode_config", {})?.classifyChromeClicks === !0 || sar("browserClicks"),
      chromeHostToolAsksEnabled: k("tengu_cozy_eagle", !0) !== !1
    }))(Oh()),
    isRemoteMode: a.CLAUDE_CODE_REMOTE || Fn()
  }, F), ae = l(), Ae = new Set([ ...ae.map(r => r.name), ...me ]), Ee = new Map([ [ je, "command" ], [ Rt, "command" ], [ no, "path" ], [ Fr, "path" ], ...ae.filter(r => r.ruleContentField).map(r => [ r.name, r.ruleContentField ]) ]);
  for (let r of [ ...Qd(v), ...zm(v) ]) {
    if (r.source === "toolsNarrowing" || r.source === "session") continue;
    let {toolName: P, ruleContent: M} = r.ruleValue;
    if (xAe.has(P)) {
      t(`Permission ${r.ruleBehavior} rule names a removed tool: ${P}`);
      continue;
    }
    if (TE(P) || P.includes("_") || Kie(P).length > 0 || Ae.has(P)) {
      let w = Ee.get(P);
      if (w && M !== void 0) {
        let x = M.indexOf(":");
        if (x > 0 && M.slice(0, x).trim() === w) {
          let Ce = `Permission ${r.ruleBehavior} rule "${bn(r.ruleValue)}" targets ${w} as a raw string and will not match`, we = P === Fr ? "." : P === no ? ` \u2014 use ${et}(${"\u2026"}) to match file-read paths.` : P === qt || P === Xi ? ` \u2014 use ${ht}(${"\u2026"}) to match file-write paths.` : ` \u2014 use ${P}(${"\u2026"}) for ${P}'s own matcher.`;
          A.push(Ce + we);
        }
      }
      continue;
    }
    A.push(`Permission ${r.ruleBehavior} rule "${bn(r.ruleValue)}" matches no known tool \u2014 check for typos.`);
  }
  for (let r of [ ...fH(v), ...Qd(v), ...zm(v) ]) {
    if (r.source === "session" || r.source === "toolsNarrowing") continue;
    if (r.source === "cliArg" && r.ruleBehavior === "allow" && r.ruleValue.toolName === no) continue;
    let {ruleContent: P} = r.ruleValue;
    if (P !== void 0) {
      let w = P.indexOf(":");
      if (w > 0 && /^[A-Za-z_][A-Za-z0-9_]*$/.test(P.slice(0, w).trim()) && !/^[A-Za-z]:[\\/]/.test(P.trim())) continue;
    }
    let M = ZIe(bn(r.ruleValue), r.ruleBehavior);
    if (M.valid && M.warning) {
      let w = r.source === "cliArg" ? r.ruleBehavior === "allow" ? "--allowed-tools" : "--disallowed-tools" : r.source === "flagSettings" && !hn("flagSettings") ? "--settings" : r.source === "policySettings" ? "managed policy settings" : j(r.source);
      A.push(`Permission ${r.ruleBehavior} rule (${w}): ${M.warning}`);
    }
  }
  let {repoOnly: Se} = bFn(r => {
    try {
      return [ ce(ot(r)) ];
    } catch {
      return [];
    }
  }, S), Te = [ ...F5e(ie).map(r => ({
    dir: r,
    destination: "localSettings"
  })), ...[ ...h?.addDirs ?? [], ...y ?? [] ].map(r => ({
    dir: r,
    destination: "session"
  })), ...m.map(r => ({
    dir: r,
    destination: "cliArg"
  })) ], _e = await Promise.all(Te.map(async ({dir: r, destination: P}) => ({
    destination: P,
    result: await eye(r, v)
  }))), X = new Map, le = [];
  for (let {result: r, destination: P} of _e) if (r.resultType === "success") {
    if (P === "session") le.push(r.absolutePath);
    if (v = tu(v, {
      type: "addDirectories",
      directories: [ r.absolutePath ],
      destination: P === "localSettings" && Se.has(r.absolutePath) ? "projectSettings" : P
    }), ujs(P)) {
      let M = Qnr(r.absolutePath);
      if (M.length > 0) {
        X.set(r.absolutePath, M);
        let w = M.filter(x => x !== r.absolutePath);
        if (w.length > 0) v = tu(v, {
          type: "addDirectories",
          directories: w,
          destination: P
        });
      }
    }
  } else if (r.resultType !== "alreadyInWorkingDirectory" && r.resultType !== "pathNotFound") A.push(tye(r));
  if (X.size > 0) v = {
    ...v,
    trustedNetworkDirectories: X
  };
  return {
    toolPermissionContext: v,
    warnings: A,
    dangerousPermissions: re,
    overlyBroadBashPermissions: ne,
    ...H && {
      bypassCapabilityNotification: dkn
    },
    inheritedSessionDirectories: le
  };
}

function F5r(e, s) {
  if ($h()) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      cliArg: [ ...e.alwaysAllowRules.cliArg ?? [], ...s ]
    }
  };
}

function Cne(e) {
  let s;
  switch (e) {
   case "settings":
    s = "auto mode disabled by settings";
    break;

   case "circuit-breaker":
    s = "auto mode is unavailable for your plan";
    break;

   case "fast-mode":
    s = "auto mode unavailable while fast mode is on \xb7 run /fast off";
    break;

   case "model":
    s = "auto mode unavailable for this model";
    break;
  }
  return s;
}

function Rvt() {
  let e = nP();
  return e !== null ? Cne(e) : "auto mode is unavailable right now";
}

function ckn(e, s = {}) {
  let o = ZGn();
  if (!o) return e;
  let l = o.awaitsGrowthBook && RBe();
  if (l && !o.awaitsPolicyVerdict) return e;
  if (e.mode !== o.mode) return NBe(void 0), e;
  let n = sEr(o.inputs);
  if (n.autoDefaultWithheldForPendingVerdict) return e;
  let u = l ? {
    mode: n.mode,
    inputs: o.inputs,
    awaitsGrowthBook: !0,
    awaitsPolicyVerdict: !1
  } : void 0;
  if (NBe(u), vxr(n.autoStartWithheldForHipaaTaint), n.notification !== void 0) s.onNotification?.(n.notification);
  if (n.mode === e.mode || n.mode === "bypassPermissions" && !e.isBypassPermissionsModeAvailable || n.mode === "auto" && !Oh()) return e;
  t(`[permission-mode] startup resolved ${e.mode} against ${o.awaitsPolicyVerdict ? "a pending policy verdict" : "an empty GrowthBook cache"}; re-resolved to ${n.mode}`), 
  wxr(n.fromAutoFallback);
  let d = {
    ...MM(e.mode, n.mode, e, "startup_reresolve"),
    mode: n.mode,
    ...o.awaitsPolicyVerdict && n.decidedByProactivityLevel && {
      startupModeDecidedByProactivityLevel: o.inputs.proactivityLevel
    }
  };
  return NBe(u), d;
}

function rrr() {
  let e = ZGn();
  if (!e?.awaitsPolicyVerdict || e.inputs.proactivityLevel === void 0) return;
  let s = sEr(e.inputs).levelPickHeldForPendingVerdict;
  return s === void 0 ? void 0 : gks(s);
}

function orr() {
  let e = ZGn();
  if (!e?.awaitsPolicyVerdict) return;
  NBe(e.awaitsGrowthBook && RBe() ? {
    ...e,
    awaitsPolicyVerdict: !1
  } : void 0);
}

async function HDe(e, s, o = !1) {
  let l = await Z1("tengu_auto_mode_config", {}), n = ge(l?.enabled), u = $Pn();
  if (!aIe()) fon(n === "disabled");
  let d = Qe(), {supported: m, disableFastModeBreakerFires: h} = WEo({
    model: d,
    fastMode: !!s,
    disableFastMode: !!l?.disableFastMode
  });
  XTo(h ? s ? "fast-mode" : "model" : null);
  let y = n !== "disabled" && !u && m, S = y, A = u && n !== "disabled" && m;
  t(`[auto-mode] verifyAutoModeGateAccess: enabledState=${n} disabledBySettings=${u} model=${d} modelSupported=${m} disableFastModeBreakerFires=${h} carouselAvailable=${S} canEnterAuto=${y}`);
  let p = YTo();
  if (!y) NBe(void 0);
  let _ = (E, N) => {
    if (E.isAutoModeAvailable !== N) t(`[auto-mode] verifyAutoModeGateAccess setAvailable: ${E.isAutoModeAvailable} -> ${N}`);
    return E.isAutoModeAvailable === N && E.canAutoClassifierRun === y ? E : {
      ...E,
      isAutoModeAvailable: N,
      canAutoClassifierRun: y
    };
  };
  if (y) return {
    canEnterAuto: y,
    refusedForSettingsAlone: A,
    updateContext: E => {
      if (orr(), E = ckn(E), NBe(void 0), E.mode === "plan" && !E.prePlanMode) {
        let N = pkn(E);
        if (N) return _({
          ...N,
          prePlanMode: "default"
        }, S);
      }
      return _(E, S);
    }
  };
  let T;
  if (u) T = "settings", t("auto mode disabled: disableAutoMode in settings", {
    level: "warn"
  }); else if (n === "disabled") T = "circuit-breaker", t('auto mode disabled: tengu_auto_mode_config.enabled === "disabled" (circuit breaker)', {
    level: "warn"
  }); else if (s && h && QN(d)) T = "fast-mode", t("auto mode disabled: tengu_auto_mode_config.disableFastMode with the /fast toggle on", {
    level: "warn"
  }); else T = "model", t(`auto mode disabled: model ${Qe()} does not support auto mode`, {
    level: "warn"
  });
  let C = Cne(T), L = E => {
    if (t(`[auto-mode] kickOutOfAutoIfNeeded applying: ctx.mode=${E.mode} ctx.prePlanMode=${E.prePlanMode} reason=${T}`), 
    !Itt(E)) return _(E, !1);
    return srr(E);
  }, R = Itt(e);
  if (!R && !p) return {
    updateContext: L,
    canEnterAuto: y,
    refusedForSettingsAlone: A
  };
  if (R) {
    let E = o && T === "model" && MK();
    return {
      updateContext: L,
      canEnterAuto: y,
      refusedForSettingsAlone: A,
      notification: E ? void 0 : C
    };
  }
  return {
    updateContext: L,
    canEnterAuto: y,
    refusedForSettingsAlone: A,
    notification: e.isAutoModeAvailable ? C : void 0
  };
}

function xvt() {
  return aIe() || $Pn();
}

function Fe() {
  return jo().findLast(e => Q5t(fe(e) || {}));
}

function U5r() {
  return jo().filter(e => Q5t(fe(e) || {}));
}

function ukn() {
  let e = Fe(), s = QXo();
  return {
    autoModeAvailable: Oh(),
    autoModeUnavailableReason: pe(nP()),
    autoModeDisabledBySettingsSource: pe(e),
    autoModeDisabledByPolicyOrigin: e === "policySettings" ? pe(Ek()) : void 0,
    autoModeDisabledByTrustedPolicy: Pvt(),
    autoModeEnabledState: c(s.value),
    autoModeEnabledStateSource: c(s.src),
    autoModeCircuitBroken: aIe(),
    defaultModeSetting: pe((er() || {}).permissions?.defaultMode),
    autoModeFromFallback: MK()
  };
}

function Pvt() {
  return Q5t(fe("policySettings") || {}) && Qsn().some(Q5t);
}

var Ve = "enabled";

function ge(e) {
  if (e === "enabled" || e === "disabled" || e === "opt-in") return e;
  return Ve;
}

function B5r() {
  return QXo().value;
}

function QXo() {
  let s = k("tengu_auto_mode_config", {})?.enabled, o = ge(s);
  return {
    value: o,
    src: s === o ? "gb" : "default"
  };
}

function j5r(e) {
  let s = e;
  if (e.mode === "bypassPermissions") s = tu(e, {
    type: "setMode",
    mode: "default",
    destination: "session"
  });
  return {
    ...s,
    isBypassPermissionsModeAvailable: !1
  };
}

function Itt(e) {
  return e.mode === "auto" || e.mode === "plan" && (e.prePlanMode === "auto" || !!e.strippedDangerousRules);
}

function srr(e) {
  let s = "default";
  {
    let o = e.startupModeDecidedByProactivityLevel;
    if ((e.mode === "auto" || e.prePlanMode === "auto") && o !== void 0) {
      if (AR()) {
        let l = Ld(Jue(o, {
          isAutoModeAvailable: !1,
          isBypassPermissionsModeAvailable: !1
        }, e.proactivityBaseline?.mode)), n = Mxe(o, l, e.proactivityBaseline?.mode) !== void 0;
        s = l === "plan" || n ? "default" : l;
      }
      e = {
        ...e,
        startupModeDecidedByProactivityLevel: void 0
      };
    }
  }
  if (zR(!1), _L(!0), e.mode === "auto") return ioe({
    from: "auto",
    to: s,
    trigger: "auto_gate_denied"
  }), {
    ...tu(Ghe(e), {
      type: "setMode",
      mode: s,
      destination: "session"
    }),
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
  return {
    ...Ghe(e),
    prePlanMode: e.prePlanMode === "auto" ? s : e.prePlanMode,
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
}

function W5r() {
  return (er() || {}).permissions?.defaultMode === "auto";
}

function irr() {
  return Oh() && tin();
}

function pkn(e) {
  if (!irr()) return null;
  return zR(!0), D2(e);
}

function Ivt(e) {
  let s = e.mode;
  if (s === "plan") return e;
  if (s === "auto") {
    if (irr()) return {
      ...e,
      prePlanMode: "auto"
    };
    return zR(!1), _L(!0), {
      ...Ghe(e),
      prePlanMode: "auto"
    };
  }
  if (s !== "bypassPermissions") {
    let o = pkn(e);
    if (o) return {
      ...o,
      prePlanMode: s
    };
  }
  return t(`[prepareContextForPlanMode] plain plan entry, prePlanMode=${s}`, {
    level: "info"
  }), {
    ...e,
    prePlanMode: s
  };
}

function z5r(e, s) {
  let o = e;
  if (o.startupModeDecidedByProactivityLevel !== void 0) o = {
    ...o,
    startupModeDecidedByProactivityLevel: void 0
  };
  if (o.mode !== "bypassPermissions" && o.isBypassPermissionsModeAvailable && !s.bypassAvailableByFlag) o = {
    ...o,
    isBypassPermissionsModeAvailable: !1
  };
  if (o.mode === "plan" && o.prePlanMode !== void 0) {
    let l = UTe({
      ...o,
      prePlanMode: "default"
    });
    o = lp() ? l : {
      ...l,
      prePlanMode: void 0
    };
  }
  return o;
}

function UTe(e) {
  if (e.mode === "auto") return D2(e);
  if (e.mode !== "plan") return e;
  if (!e.prePlanMode || e.prePlanMode === "bypassPermissions") return e;
  let s = irr(), o = lp();
  if (s && o) return D2(e);
  if (!s && !o) return e;
  if (s) return zR(!0), _L(!1), D2(e);
  return zR(!1), _L(!0), Ghe(e);
}

export { $D, Qnr, VXo, dkn, KXo, qXo, ajs, YXo, XXo, Znr, ljs, D2, M5r, Ghe, H5r, MM, D5r, GJ, err, Lk, L5r, JXo, djs, cjs, N5r, trr, ujs, nrr, $5r, F5r, Cne, Rvt, ckn, rrr, orr, HDe, xvt, U5r, ukn, Pvt, B5r, QXo, j5r, Itt, srr, W5r, irr, pkn, Ivt, z5r, UTe };
