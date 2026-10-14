// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { K } from "./chunk-3pqddg8f.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { Nh, CQt, Abr, Mbr, T7, Moe, Hbr, JRe, p5e, qe } from "./chunk-r8a304y3.js";

class d {
  inFlight=void 0;
  run(e) {
    return this.inFlight ??= e().finally(() => {
      this.inFlight = void 0;
    }), this.inFlight;
  }
}

var u = new K(() => new d);

function dfn(e) {
  return u.of(e).run(c);
}

async function c() {
  try {
    let e = await Abr({
      sandboxUser: Mbr,
      srtWin: T7()
    });
    if (e.cancelled) {
      if (e.user.provisioned && e.user.credPresent) {
        if (JRe().source === "managed" && p5e()) {
          qe.invalidateDependencyCache();
          let s = await i(e.user);
          if (await qe.checkDependenciesAsync(), s !== null) return s;
          return g("sandbox_windows_install"), {
            status: "ok",
            message: "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned \u2014 the sandbox TLS inspection CA is now set up and trusted for the sandbox user." + " Network filters can't be verified from a non-elevated process; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt." + r()
          };
        }
        return f("sandbox_windows_install", "uac_cancelled_provisioned"), qe.invalidateDependencyCache(), 
        await qe.checkDependenciesAsync(), {
          status: "cancelled",
          message: "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned. Network filters can't be verified from a non-elevated process \u2014 run /sandbox to check the current status; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt."
        };
      }
      return f("sandbox_windows_install", "uac_cancelled"), {
        status: "cancelled",
        message: "Install was cancelled at the elevation prompt. Run /sandbox install again and approve the prompt to set up the sandbox user and network filters. If you don't have administrator rights, ask your administrator to install the network filters."
      };
    }
    if (qe.invalidateDependencyCache(), await qe.checkDependenciesAsync(), e.user.provisioned && e.user.credPresent && (e.wfp.state === "installed" || e.wfp.state === "cannot-read")) {
      if (JRe().source === "managed" && p5e()) {
        let o = await i(e.user);
        if (o !== null) return o;
      }
      g("sandbox_windows_install");
      let s = e.wfp.state === "installed" ? "Sandbox user and network filters installed" : "Sandbox user and network filters installed (filters can't be verified from a non-elevated process)";
      if (qe.isSandboxingEnabled()) return {
        status: "ok",
        message: `${s} and active.${r()}`
      };
      return qe.isSandboxEnabledInSettings() ? {
        status: "ok",
        message: `${s}. Run /sandbox to check the current status.${r()}`
      } : {
        status: "ok",
        message: `${s}. Run /sandbox to choose a sandbox mode and turn it on.${r()}`
      };
    }
    let a = !e.user.provisioned ? "user_not_provisioned" : !e.user.credPresent ? "cred_not_readable" : "wfp_not_installed";
    return f("sandbox_windows_install", a), {
      status: "partial",
      message: `Install completed (sandbox user: ${{
        user_not_provisioned: "not provisioned",
        cred_not_readable: "provisioned, credential not readable",
        wfp_not_installed: "provisioned"
      }[a]}, filters: ${e.wfp.state}). Run /sandbox install again to retry.`
    };
  } catch (e) {
    qe.invalidateDependencyCache();
    let a = l(e);
    t(`/sandbox install failed: ${a}`, {
      level: "error"
    });
    let n = Moe(a, {
      omitCcRemedy: !0
    }).replace(/\.$/, "");
    if (e instanceof Nh && e.code === "install_timeout") return f("sandbox_windows_install", "uac_timeout"), 
    {
      status: "error",
      message: `The install timed out after 2 minutes: ${n}. If an elevation prompt was showing, run /sandbox install again and respond to the prompt. If no prompt appeared, the installer may be blocked on this machine \u2014 run /sandbox to check sandbox status.`
    };
    if (e instanceof Nh && e.code === "install_config_conflict") return f("sandbox_windows_install", "config_conflict"), 
    {
      status: "error",
      message: "A sandbox network-filter set is already installed with a different configuration (for example, under a different sandbox account name). Remove it by running npx @anthropic-ai/sandbox-runtime windows-uninstall from a trusted directory, then run /sandbox install again."
    };
    if (/^srt-win (status|wfp|user)[ :]/.test(a)) return f("sandbox_windows_install", "status_probe_failed"), 
    {
      status: "error",
      message: `The installer ran, but the sandbox status couldn't be read back afterwards: ${n}. Run /sandbox to check the current status.`
    };
    return m("sandbox_windows_install", "install_threw"), {
      status: "error",
      message: `Couldn't install the sandbox user and network filters: ${n}. Run /sandbox install again to retry.`
    };
  }
}

async function i(e) {
  let a = await Hbr({
    exePath: process.execPath,
    previous: void 0,
    getUserStatus: () => Promise.resolve(e)
  });
  try {
    await CQt({
      status: e,
      srtWin: T7()
    });
  } catch (n) {
    let s = l(n);
    t(`/sandbox install: managed sandbox CA step failed: ${s}`, {
      level: "error"
    });
    let o = Moe(s, {
      omitCcRemedy: !0,
      programPermissionAdded: a?.added
    }).replace(/\.$/, "");
    if (n instanceof Nh && (n.code === "trust_ca_failed" || n.code === "spawn_failed" || n.code === "srt_win_timeout")) return f("sandbox_windows_install", "trust_ca_failed"), 
    {
      status: "partial",
      message: `The sandbox TLS inspection CA couldn't be trusted for the sandbox user: ${o}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
    };
    return f("sandbox_windows_install", "persistent_ca_failed"), {
      status: "partial",
      message: `The sandbox TLS inspection CA couldn't be created: ${o}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
    };
  }
  return null;
}

function r() {
  return p5e() && qe.needsRestartForTlsTerminate() ? " Restart Claude Code to enable TLS inspection for this session." : "";
}

export { dfn };
