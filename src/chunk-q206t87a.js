// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ve } from "./chunk-b0z4bv3v.js";

import { TRe } from "./chunk-sqb9meyh.js";

var Cgn = 4;

function Rgn(e) {
  let o = 0;
  return {
    limit: e,
    tryAcquire() {
      if (o >= e) return;
      o++;
      let r = !1;
      return () => {
        if (!r) r = !0, o--;
      };
    }
  };
}

function GBr(e) {
  let o = e.readPosture ?? TRe;
  return {
    async admitWithoutSlot(r, s, t) {
      try {
        if (s.signal.aborted) return t.cancelled();
        let n = d(e, s);
        if (n !== void 0) return t.refuse(n, l(r, e, n));
        return await t.serve();
      } catch (n) {
        return s.signal.aborted || Ve(n) ? t.cancelled() : t.fail(n);
      }
    },
    async run(r, s, t) {
      let n = i => t.refuse(i, l(r, e, i)), a;
      try {
        if (s.signal.aborted) return t.cancelled();
        let i = d(e, s);
        if (i !== void 0) return n(i);
        if (a = e.limiter.tryAcquire(), a === void 0) return n("too_many_concurrent");
        let c = await o();
        if (!c.confined) return n(c.reason);
        let u = d(e, s);
        if (u !== void 0) return n(u);
        if (s.signal.aborted) return t.cancelled();
        return await t.serve();
      } catch (i) {
        return s.signal.aborted || Ve(i) ? t.cancelled() : t.fail(i);
      } finally {
        a?.();
      }
    }
  };
}

function d(e, o) {
  if (o.sessionId === void 0) return "no_session";
  if (!e.getDeviceId()) return "unbound_device";
  if (!e.isModeCurrent()) return "mode_withdrawn";
  return;
}

function l(e, {limiter: o}, r) {
  switch (r) {
   case "no_session":
    return `${e} refused: no server-asserted session.`;

   case "unbound_device":
    return `${e} refused: this device is not bound to the session (it registered without a device id). Start the cloud session from this machine with claude --cloud so it registers as a bound device.`;

   case "mode_withdrawn":
    return `${e} refused: the user has since changed this directory's sync setting on their machine, so its files are no longer served through device tools in this session, and nothing was done. Tell the user; do not retry in a loop.`;

   case "too_many_concurrent":
    return `${e} refused: too many concurrent device tool calls on this device connection (limit ${o.limit}); retry after one finishes.`;

   case "sandbox_unavailable":
    return `${e} refused: sandboxing is not enabled on this device, and device tools are only served from a machine whose Claude Code sandbox is on. Ask the user to set "sandbox": {"enabled": true} in Claude Code settings on the device (check with /sandbox); do not retry until they have.`;

   case "sandbox_unsupported":
    return `${e} refused: sandboxing is enabled in settings on this device but unavailable here (an unsupported platform, or one excluded by an enabledPlatforms policy), so this device serves no device tools. Tell the user; do not retry in a loop.`;

   case "sandbox_failed_to_start":
    return `${e} refused: sandboxing is enabled on this device but failed to start. Ask the user to run /sandbox on the device to see why, fix it, and restart Claude Code there; retrying before that will keep failing.`;

   case "sandbox_unconfined":
    return `${e} refused: the sandbox on this device is not fully confining (filesystem and network). Ask the user to set "sandbox": {"enabled": true, "filesystem": {"disabled": false}} in Claude Code settings on the device and not to run it in subprocess-env-scrub mode; do not retry until they have.`;

   case "sandbox_weakened":
    return `${e} refused: the sandbox on this device is configured with a setting that weakens its isolation (sandbox.allowAppleEvents, sandbox.enableWeakerNestedSandbox, sandbox.enableWeakerNetworkIsolation, sandbox.network.allowLocalBinding, sandbox.network.allowMachLookup, or a sandbox.ripgrep override outside managed policy settings), so this device serves no device tools. Tell the user; do not retry in a loop.`;

   case "sandbox_allows_unix_sockets":
    return `${e} refused: the sandbox on this device allows connections to Unix sockets (sandbox.network.allowAllUnixSockets or allowUnixSockets), through which a command could reach services running outside the sandbox, so this device serves no device tools. Tell the user; do not retry in a loop.`;

   case "sandbox_seccomp_unavailable":
    return `${e} refused: the sandbox on this device cannot block connections to Unix sockets because the sandbox runtime found no seccomp filter helper it could run, so a command could reach services running outside the sandbox, and this device serves no device tools. Ask the user to open /sandbox on the device (its Dependencies tab shows the seccomp filter's status) and restart Claude Code there once it is fixed; do not retry until they have.`;

   case "sandbox_injects_credentials":
    return `${e} refused: this device's sandbox is configured to inject real credentials into sandboxed network requests (sandbox.credentials entries with mode "mask"), so this device serves no device tools. Tell the user; do not retry in a loop.`;
  }
}

var Z9n = "core", $_t = "remote-tools", zze = "mcp-passthrough";

export { Cgn, Rgn, GBr, Z9n, $_t, zze };
