// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { le } from "./chunk-cqgvwwgb.js";

import { mt } from "./chunk-j90se18b.js";

import { _ } from "./chunk-kawq2919.js";

import { ln, BN, op, Io } from "./chunk-ajd6by9m.js";

import { Eb, It, Rrn } from "./chunk-xywp7esx.js";

import { Ld } from "./chunk-q6wab2jw.js";

import { J8, O1n, bse } from "./chunk-gmq0qwep.js";

import { ZYt, mLe, H3 } from "./chunk-84yp45y8.js";

import { iWt } from "./chunk-q5z6fgwg.js";

import { bQe } from "./chunk-25gpymxv.js";

import { Ar } from "./chunk-jb3h1y0s.js";

import { rfn, f1o } from "./chunk-aykr9svv.js";

import { xze } from "./chunk-ads8rv8r.js";

import { AD } from "./chunk-rffd6d4a.js";

import { N4o, O_n } from "./chunk-eaymh4hr.js";

import { Qcn } from "./chunk-9865myja.js";

import { rQe } from "./chunk-f9x1gdxa.js";

import { Fte } from "./chunk-y8thbjqx.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Iyn } from "./chunk-p8ytwtyx.js";

import { ae, P, R, y, F } from "./chunk-cpyd3eya.js";

async function Y1t(d = x) {
  let {env: a} = await import("./chunk-pxhbtwb7.js");
  return a.CLAUDE_CODE_CHILD_SESSION ? d : void 0;
}

var x = "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.", E = "Claude Design cannot be signed in from inside a Claude Code session. Start the editor outside the session and try again.";

async function l(d) {
  let a = [], r = 0, s = Bun.stdin.stream().getReader();
  for (;;) {
    let {done: i, value: n} = await s.read();
    if (i) break;
    if (r += n.byteLength, r > d) return await s.cancel(), null;
    a.push(n);
  }
  return (new TextDecoder).decode(Buffer.concat(a));
}

function OBr(d, a) {
  d.command("edit-permission-rules", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async r => {
    if (process.stdin.isTTY) return ln("claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await Y1t();
    if (s !== void 0) return ln(s);
    let {runPermissionRuleEdit: i} = await import("./chunk-bgp8p2f8.js"), n = await l(2097152), o = n === null ? null : mt(n, !1);
    if (o === null) return ln("claude edit-permission-rules: stdin is not a JSON edit");
    let t = await i(o, r);
    if (!t.ok) return ln(t.error);
    return await op(_({
      ok: !0,
      warnings: t.warnings,
      stored: t.stored
    }) + `\n`), BN();
  })), d.command("edit-memory-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async r => {
    if (process.stdin.isTTY) return ln("claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await Y1t();
    if (s !== void 0) return ln(s);
    let {runMemorySettingsEdit: i} = await import("./chunk-cre3pbw0.js"), n = await l(4096), o = n === null ? null : mt(n, !1);
    if (o === null) return ln("claude edit-memory-settings: stdin is not a JSON edit");
    let t = await i(o, r);
    if (!t.ok) return ln(t.error);
    return await op(_({
      ok: !0,
      written: t.written
    }) + `\n`), Io(0);
  })), d.command("edit-skill-overrides", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one skill state edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async r => {
    if (process.stdin.isTTY) return ln("claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await Y1t();
    if (s !== void 0) return ln(s);
    let {runSkillOverrideEdit: i} = await import("./chunk-52see0zp.js"), n = await l(4096), o = n === null ? null : mt(n, !1);
    if (o === null) return ln("claude edit-skill-overrides: stdin is not a JSON edit");
    let t = await i(o, le(), r);
    if (!t.ok) return ln(t.error);
    return await op(_({
      ok: !0,
      written: t.written,
      changed: t.changed
    }) + `\n`), BN();
  })), d.command("edit-sandbox-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return ln("claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let r = await Y1t();
    if (r !== void 0) return ln(r);
    let {runSandboxSettingsEdit: s} = await import("./chunk-26vdafgv.js"), i = await l(4096), n = i === null ? null : mt(i, !1);
    if (n === null) return ln("claude edit-sandbox-settings: stdin is not a JSON edit");
    let o = await s(n);
    if (!o.ok) return ln(o.error);
    return await op(_({
      ok: !0,
      written: o.written
    }) + `\n`), Io(0);
  }), d.command("design-login", {
    hidden: !0
  }).allowExcessArguments(!1).description("Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)").requiredOption("--json", "Write JSON lines to stdout").option("--status", "Report whether design-system access is authorized, and exit").action(a(async (r, s) => {
    if (process.stdin.isTTY) return ln("claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session");
    let {isSpawnedByClaudeCodeSession: i} = await import("./chunk-67gw2rm9.js");
    if (i()) return ln(E);
    let {designLoginStatus: n, runDesignLoginSignIn: o} = await import("./chunk-jzc706zz.js");
    if (s.status) return await op(_(await n()) + `\n`), Io(0);
    let t = new AbortController, {markPrintModeSignalHandlersRegistered: u} = await import("./chunk-wvc9khvf.js");
    process.once("SIGTERM", () => t.abort()), process.once("SIGINT", () => t.abort()), 
    u();
    let p = await o({
      stdin: process.stdin,
      write: S => op(S + `\n`),
      signal: t.signal
    });
    return Io(p.ok ? 0 : 1);
  })), d.command("edit-chrome-settings", {
    hidden: !0
  }).allowExcessArguments(!1).description("Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async r => {
    if (process.stdin.isTTY) return ln("claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await Y1t();
    if (s !== void 0) return ln(s);
    let {runChromeSettingsEdit: i} = await import("./chunk-erd0h0jf.js"), n = await l(4096), o = n === null ? null : mt(n, !1);
    if (o === null) return ln("claude edit-chrome-settings: stdin is not a JSON edit");
    let t = await i(o, r);
    if (!t.ok) return ln(t.error);
    return await op(_({
      ok: !0,
      written: t.written
    }) + `\n`), BN();
  })), d.command("drop-worktree-registrations", {
    hidden: !0
  }).allowExcessArguments(!1).description("Drop deleted worktrees' git registrations named as JSON on stdin (used by the VS Code extension)").requiredOption("--json", "Read the request as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return ln("claude drop-worktree-registrations reads one JSON request from stdin; it is run by the VS Code extension, not by hand");
    let r = await Y1t("claude drop-worktree-registrations cannot run from inside a Claude Code session; it is run by the VS Code extension");
    if (r !== void 0) return ln(r);
    let {registrationDropsLine: s, runWorktreeRegistrationDrops: i} = await import("./chunk-6np2qt9m.js"), n = await l(262144), o = n === null ? null : mt(n, !1);
    if (o === null) return ln("claude drop-worktree-registrations: stdin is not a JSON request");
    let t = await i(o);
    if (!t.ok) return ln(t.error);
    return await op(s(t.outcomes) + `\n`), BN();
  });
}

F();

function X1t(...d) {
  return t1s(...d);
}

async function t1s(d, a, r, s) {
  let {AppRoot: i} = await import("./chunk-x2h21z6w.js"), {REPL: n} = await import("./chunk-ercqqga9.js");
  function o(c) {
    let f = Ar();
    rfn();
    let h = R(c.commands), O = ae(m => {
      h.current = m;
    }, []), w = R(() => {
      throw Error("engine: queryParams called before REPL registered builder");
    }), k = ae(m => {
      w.current = m;
    }, []), [g] = y(() => bQe({
      run: AD,
      queryParams: async m => w.current(),
      commands: () => H3(h.current),
      models: () => bse(J8()),
      unavailableModels: () => bse(O1n()),
      agents: () => ZYt(f.getState().agentDefinitions.activeAgents),
      account: Rrn(),
      outputStyle: mLe(),
      mcpServers: () => Iyn(f.getState().mcp.clients),
      ambient: iWt,
      initialModel: () => {
        let m = f.getState();
        return It(m.mainLoopModelForSession ?? m.mainLoopModel ?? Eb());
      },
      initialPermissionMode: () => Ld(f.getState().toolPermissionContext.mode),
      hostOwnsPermissionMode: !0,
      hostOwnsModel: !0
    }));
    return P(() => () => g.close(), [ g ]), e(n, {
      ...c,
      engine: g,
      onCommandsChange: O,
      onQueryParamsChange: k
    });
  }
  let {session: t, storageV5: u, credentials: p, fleetNudgeStore: S = new xze({
    storageV5: u
  })} = a, C = rQe(u);
  await N4o({
    onHealthy: () => f1o(u),
    storageV5: u
  });
  let b = Qcn(t, a.initialState, c => Fte(c, t, u, p));
  try {
    await s(d, e(i, {
      session: t,
      storageV5: u,
      messageQueue: C,
      store: b,
      fleetNudgeStore: S,
      sessionHooks: a.sessionHooks,
      writesExitHandoff: !0,
      getFpsMetrics: a.getFpsMetrics,
      stats: a.stats,
      keybindings: !1,
      children: e(o, {
        ...r
      })
    }), t, u, p);
  } catch (c) {
    throw await O_n().catch(() => !1), c;
  }
}

export { Y1t, OBr, X1t, t1s };
