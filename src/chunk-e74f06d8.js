// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { O7 } from "./chunk-tpkse3bk.js";

var w = {}, R = {};

async function h() {
  let {exitWithError: e} = await import("./chunk-gttxwmxv.js"), {getSettingsWithErrors: o} = await import("./chunk-tnx47z70.js");
  if (o().settings.disableRemoteControl === !0) e(`Error: ${O7}`);
  let [{hasStoredOAuthToken: t}, {BRIDGE_LOGIN_ERROR: r}, {getBridgeAuthDebugInfo: i}] = await Promise.all([ import("./chunk-8rkfm3cn.js"), import("./chunk-x87x2w4x.js"), import("./chunk-d37r4kj2.js") ]);
  if (!t()) e(r + i());
  return w;
}

async function b(e) {
  let {getBridgeDisabledDiagnosis: o, getBridgeAuthDebugInfo: t, ensurePolicyLimitsLoadedForDiagnostic: r} = await import("./chunk-d37r4kj2.js"), {checkBridgeMinVersion: i} = await import("./chunk-e4szgxgr.js"), {exitWithError: n} = await import("./chunk-gttxwmxv.js"), {logOrgPolicyDeniedAsync: l} = await import("./chunk-vdtmjbbp.js"), a = await o();
  if (a) {
    if (a.orgPolicyDenied) await l("allow_remote_control", "cli_flag");
    await m(a.code), n(`Error: ${a.reason}` + t());
  }
  let s = i();
  if (s) await m("version_floor"), n(s);
  let {policyDeniedReason: u} = await import("./chunk-jj9t3stv.js");
  await r();
  let c = u("allow_remote_control", "Remote Control", "is", "Remote Control is disabled by your organization's policy.");
  if (c !== null) await l("allow_remote_control", "cli_flag"), await m("policy_denied"), 
  n(`Error: ${c}`);
  return R;
}

async function m(e) {
  let [{logFeatureBadAsync: o}, {flushAnalyticsBeforeExit: t}] = await Promise.all([ import("./chunk-pph01nnm.js"), import("./chunk-htbfftpb.js") ]);
  await o("remote_control_entry", e), await t();
}

async function C(e, o, t, r) {
  let [{preflightTrustedDeviceBlocking: i, sayHeldAutomaticEnrollmentNoticeOnStderr: n}, {shutdown1PEventLogging: l}, {shutdownDatadog: a}, {sleep: s}, {exitWithError: u}, {bridgeMain: c}, {initializeGrowthBook: g}, {logForDebugging: f}, {logFeatureBadAsync: y}] = await Promise.all([ import("./chunk-kfwm91qv.js"), import("./chunk-nry35a89.js"), import("./chunk-8rdzrsat.js"), import("./chunk-11vsrj4g.js"), import("./chunk-gttxwmxv.js"), import("./chunk-3v7746mh.js"), import("./chunk-qt993hka.js"), import("./chunk-fs90awgg.js"), import("./chunk-pph01nnm.js") ]);
  g().catch(d => {
    f(`[remote-control] GrowthBook init failed (${d instanceof Error ? d.name : typeof d}); feature gates keep serving the disk cache`, {
      level: "error"
    });
  });
  let p = await i(r);
  if (n(), p) await y("remote_control_entry", "trusted_device_unenrolled"), await Promise.race([ Promise.all([ l(), a() ]), s(500, void 0, {
    unref: !0
  }) ]).catch(() => {}), u(`Error: ${p}`);
  await c(o, t, r);
}

async function O(e, o, t) {
  let r = await h(), i = await b(r);
  await C(i, e, o, t);
}

var E = new Map([ [ "verbose", () => !0 ], [ "debug", () => !0 ], [ "debugToStderr", () => !0 ], [ "debugFile", () => !0 ], [ "axScreenReader", () => !0 ], [ "workload", () => !0 ], [ "sessionId", () => !0 ], [ "name", () => !0 ], [ "remoteControlSessionNamePrefix", () => !0 ], [ "pluginDir", () => !0 ], [ "pluginDirNoMcp", () => !0 ], [ "pluginUrl", () => !0 ], [ "addDir", () => !0 ], [ "ide", () => !0 ], [ "chrome", e => e === !0 ], [ "model", () => !0 ], [ "effort", () => !0 ], [ "fallbackModel", () => !0 ], [ "betas", () => !0 ], [ "thinking", () => !0 ], [ "thinkingDisplay", () => !0 ], [ "maxThinkingTokens", () => !0 ], [ "autocompact", () => !0 ], [ "allowedTools", () => !0 ], [ "dangerouslySkipPermissions", () => !0 ], [ "allowDangerouslySkipPermissions", () => !0 ], [ "enableAutoMode", () => !0 ], [ "bare", () => !0 ] ]);

function k(e) {
  return e.filter(({key: o, value: t}) => !E.get(o)?.(t)).map(({flag: o}) => o);
}

function D(e) {
  let o = e.map(n => `\`${n}\``).join(", "), [t, r] = e.length === 1 ? [ "it", "is" ] : [ "them", "are" ], i = e.includes("--permission-mode") ? " Set the permission mode with `claude remote-control --permission-mode <mode>`." : "";
  return `Error: ${o} before \`remote-control\` ${r} not carried over to the sessions Remote Control starts, so Remote Control refuses to start rather than drop ${t} \u2014 remove ${t}, and give Remote Control's own options after the verb (see \`claude remote-control --help\`).` + i;
}

export { O as enterRemoteControl, b as refuseRemoteControlIneligible, h as refuseRemoteControlLocally, D as rootOptionsRefusedMessage, k as rootOptionsRemoteControlRefuses, C as startRemoteControl };
