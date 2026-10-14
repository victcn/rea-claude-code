// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { J } from "./chunk-nvtwm272.js";

import { a } from "./chunk-j016gcgm.js";

import { B } from "./chunk-3pqddg8f.js";

import { Wee, wHo } from "./chunk-y752zmas.js";

import { En } from "./chunk-kawq2919.js";

import { Tr } from "./chunk-a16yb89m.js";

import { I } from "./chunk-5wbhf1bk.js";

import { ge } from "./chunk-07cck4g7.js";

import { KUe, XUe, sie, ml, fBe } from "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import { Wr, Bt, Wa } from "./chunk-3ykz5st8.js";

import { Zsn } from "./chunk-dd98x6x7.js";

import { pmo } from "./chunk-rshryz75.js";

import { s, n, JMe } from "./chunk-3vw306fv.js";

import { Io } from "./chunk-ajd6by9m.js";

import { Db } from "./chunk-p0ag64rt.js";

import { wKe, Tts, aRn } from "./chunk-84yp45y8.js";

import { i1n, a1n } from "./chunk-bdevabaf.js";

import { Kco, u_r } from "./chunk-h2y8dwq2.js";

import { znt } from "./chunk-hjph2xzh.js";

import { Ux } from "./chunk-69v14wbe.js";

import { Yhe } from "./chunk-5yhyhg4z.js";

import { Fte } from "./chunk-y8thbjqx.js";

import { Ute } from "./chunk-kh5zq44h.js";

import { Fq } from "./chunk-xhfnndk1.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { hZe } from "./chunk-n2jwgevn.js";

import { cwd as A } from "process";

import { stripVTControlCharacters as P } from "util";

import { createInterface as E } from "readline";

function d_t(c, d = process.stdin) {
  let t = () => {}, f = new Promise(p => {
    t = p;
  }), l = E({
    input: d,
    output: process.stdout
  });
  return l.question(`${c} [y/N] `, p => {
    let _ = p.trim().toLowerCase();
    t(_ === "y" || _ === "yes"), l.close();
  }), l.once("close", () => t(!1)), f;
}

function cqs() {
  return JMe({
    ...Ux(!1),
    patchConsole: !1
  });
}

function R(c) {
  return {
    ok: !0,
    days: wHo,
    seconds: Wee
  };
}

async function uqs(c, d) {
  i("tengu_setup_token_command", {});
  let t = R(d?.expiresInDays);
  if (!t.ok) {
    c.unmount(), process.stderr.write(`${t.message}\n`), await Bt("cli_setup_token", t.errorCode), 
    await Io(1);
    return;
  }
  let f = fBe(!0);
  if (!f.valid) c.unmount(), process.stderr.write(`${f.message}\nsetup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.\n`), 
  await Bt("cli_setup_token", "force_login_method_refused"), await Io(1);
  let l = KUe("firstParty");
  if (l !== void 0) c.unmount(), process.stderr.write(`${l}\nsetup-token creates a long-lived Claude.ai subscription token, which this machine's allowedProviders policy does not permit.\n`), 
  await Bt("cli_setup_token", "provider_not_allowed"), await Io(1);
  let p = !ml(), {ConsoleOAuthFlow: _} = await import("./chunk-f0dxghfz.js"), g = B(), h = !1;
  if (await new Promise(y => {
    c.render(e(Db, {
      session: g,
      onChangeAppState: k => Fte(k, g),
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [ e(Ute, {}), p && r(s, {
          flexDirection: "column",
          children: [ e(n, {
            color: "warning",
            children: "Warning: You already have authentication configured via environment variable or API key helper."
          }), e(n, {
            color: "warning",
            children: "The setup-token command will create a new OAuth token which you can use instead."
          }) ]
        }), r(s, {
          paddingLeft: 1,
          flexDirection: "column",
          gap: 1,
          children: [ r(n, {
            bold: !0,
            children: [ "This will guide you through long-lived (", t.days === 365 ? "1-year" : `${t.days}-day`, ") auth token setup for your Claude account. Claude subscription required." ]
          }), e(_, {
            onDone: () => {
              y();
            },
            onAccountOnHold: () => {
              h = !0, y();
            },
            mode: "setup-token",
            expiresIn: t.seconds,
            urlOutdent: 1
          }) ]
        }) ]
      })
    }));
  }), c.unmount(), h) {
    await Bt("cli_setup_token", "account_on_hold"), await Io(1);
    return;
  }
  await Wr("cli_setup_token"), await Io(0);
}

async function pqs(c) {
  i("tengu_doctor_command", {});
  let d;
  try {
    let t = await znt({
      probeKeychain: !0,
      storageV5: c
    }), f = Fq(), l = [ "Claude Code doctor", "", `Running: ${t.installationType} (${t.version})`, ...{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.GIT_SHA ? [ `Commit: ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.GIT_SHA.slice(0, 12)}` ] : [], "Platform: linux-x64", ...t.packageManager ? [ `Package manager: ${u(t.packageManager)}` ] : [], `Path: ${u(t.installationPath)}`, ...t.invokedBinary !== t.installationPath ? [ `Invoked: ${u(t.invokedBinary)}` ] : [], `Config install method: ${u(t.configInstallMethod)}`, `Search: ${t.ripgrepStatus.working ? "OK" : "Not working"} (${t.ripgrepStatus.mode === "embedded" ? "bundled" : u(t.ripgrepStatus.systemPath || "system")})`, `Auto-updates: ${t.packageManager ? "Managed by package manager" : u(t.autoUpdates)}`, `Auto-update channel: ${f === "rc" ? "slow" : f}`, `Last update attempt: ${b(t.lastUpdateResult)}` ], p = wKe();
    if (p) l.push(`Managed settings (remote): ${u(aRn(p))}`); else if (Tts()) l.push("Managed settings (remote): checking\u2026 (fetch in progress; re-run in a moment)");
    {
      let {waitForPolicyLimitsToLoad: o, POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS: m} = await import("./chunk-egjan19g.js"), {getLastFetchOutcome: w} = await import("./chunk-jj9t3stv.js"), v = !1, S = o().then(() => {
        v = !0;
      }), T = Date.now() + m;
      while (!v && w() === null && Date.now() < T) await Promise.race([ S, J(200) ]);
    }
    let _ = l.push("Organization policy: \u2026") - 1, {statusNotices: g, invalidEntries: h} = hZe(Yhe().errors);
    if (h.length > 0) {
      l.push("", ge.yellow("Invalid settings"));
      for (let o of h) {
        let m = [ o.file, o.path ].flatMap(w => w ? [ u(w) ] : []).join(" \u203a ");
        l.push(`- ${m ? `${m}: ` : ""}${u(o.message)}${o.suggestion ? `\n  Suggested fix: ${u(o.suggestion)}` : ""}`);
      }
    }
    if (g.length > 0) {
      l.push("");
      for (let o of g) l.push(`- ${u(o.message)}`);
    }
    let y = Zsn();
    if (y.length > 0) {
      l.push("");
      for (let [o, m] of y) l.push(`- ${o}\n  ${m}`);
    }
    let k = [ {
      name: "BASH_MAX_OUTPUT_LENGTH",
      default: u_r,
      upperLimit: Kco
    }, {
      name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
      ...sie("claude-opus-4-6")
    } ].map(o => ({
      name: o.name,
      ...XUe(o.name, process.env[o.name], o.default, o.upperLimit)
    })).filter(o => o.status !== "valid");
    if (k.length > 0) {
      l.push("", ge.yellow("Environment variables"));
      for (let o of k) l.push(`- ${o.name}: ${u(o.message ?? o.status)}`);
    }
    if (t.multipleInstallations.length > 1) {
      l.push("", ge.yellow("Multiple installations found"));
      for (let o of t.multipleInstallations) l.push(`- ${u(`${o.type} at ${o.path}`)}`);
    }
    try {
      let o = await pmo();
      if (l.push("", "Remote Control"), o.inRemoteSession) l.push("Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead."); else {
        l.push(u(o.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app"));
        for (let m of o.checks.filter(w => !w.ok)) l.push(u(`- ${m.label}${m.detail ? ` (${m.detail})` : ""}`));
      }
    } catch {
      await Wa("cli_doctor", "bridge_info_unavailable");
    }
    if (l[_] = `Organization policy: ${u(a1n(i1n()))}`, t.warnings.length > 0) {
      l.push("", ge.yellow(`${t.warnings.length} ${I(t.warnings.length, "warning")} found`));
      for (let o of t.warnings) l.push(`- ${u(o.issue)}`, `  Fix: ${u(o.fix)}`);
    } else l.push("", "No installation issues found.");
    l.push("", "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session."), 
    Tr(l.join(`\n`) + `\n`), d = {
      warnings: t.warnings.length,
      settings_errors: h.length,
      env_var_issues: k.length,
      multiple_installs: t.multipleInstallations.length > 1,
      ripgrep_working: t.ripgrepStatus.working
    };
  } catch (t) {
    throw await Bt("cli_doctor", "diagnostic_failed"), t;
  }
  await Wr("cli_doctor", d), await Io(0);
}

function u(c) {
  return En(P(c)).replaceAll("`", "");
}

function b(c) {
  if (!c) return "none recorded";
  let d = u(c.timestamp.slice(0, 10));
  switch (c.outcome) {
   case "success":
    return c.version_to ? `success \u2192 ${u(c.version_to)} (${d})` : `success (${d})`;

   case "failed":
    return `failed (${u(c.status)}) \u2014 ${d}`;
  }
}

async function fqs(c, d, t) {
  if (a.DISABLE_UPDATES) process.stdout.write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.\n`), 
  process.exit(0);
  let {awaitPolicyLimitsColdStart: f} = await import("./chunk-egjan19g.js");
  await f();
  let {setup: l} = await import("./chunk-g2vebg81.js");
  await l(A(), "default", !1, !1, void 0, !1, void 0, void 0, void 0, t);
  let {install: p} = await import("./chunk-qepkdf4t.js");
  await new Promise(_ => {
    let g = [];
    if (c) g.push(c);
    if (d.force) g.push("--force");
    p.call(async h => {
      if (h.includes("failed")) await Bt("cli_install", "cli_install_failed"); else await Wr("cli_install");
      await Io(h.includes("failed") ? 1 : 0), _();
    }, {
      storageV5: t
    }, g);
  });
}

export { d_t, cqs, uqs, pqs, fqs };
