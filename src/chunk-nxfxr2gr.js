// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Qh } from "./chunk-4dwgr3et.js";

import { Rd } from "./chunk-j016gcgm.js";

async function lTe({allowNetworkFallbackForOldGh: n}) {
  if (!await Rd("gh")) return {
    status: "not_installed"
  };
  try {
    let t = await Qh("gh", [ "auth", "token" ], {
      stdout: "ignore",
      stderr: "pipe",
      timeout: 5e3,
      reject: !1
    });
    if (t.exitCode === 0) return {
      status: "authenticated",
      supportsAuthTokenCommand: !0
    };
    if (t.timedOut) return {
      status: "unknown",
      error: "`gh auth token` timed out"
    };
    if (/not logged in|no oauth token/i.test(t.stderr)) return {
      status: "not_authenticated"
    };
    if (/unknown command/i.test(t.stderr) || Number.isInteger(t.exitCode) && t.stderr.trim() === "") {
      if (!n) return {
        status: "unknown",
        error: "this GitHub CLI version has no `gh auth token`"
      };
      let e = await Qh("gh", [ "auth", "status" ], {
        stdout: "ignore",
        stderr: "pipe",
        timeout: 5e3,
        reject: !1
      });
      if (e.exitCode === 0) return {
        status: "authenticated",
        supportsAuthTokenCommand: !1
      };
      if (e.timedOut) return {
        status: "unknown",
        error: "`gh auth status` timed out"
      };
      if (/logged in to/i.test(e.stderr)) return {
        status: "authenticated",
        supportsAuthTokenCommand: !1
      };
      if (/not logged in/i.test(e.stderr)) return {
        status: "not_authenticated"
      };
      return {
        status: "unknown",
        error: e.stderr.trim() || "`gh auth status` failed to run"
      };
    }
    return {
      status: "unknown",
      error: t.stderr.trim() || "`gh auth token` failed to run"
    };
  } catch {
    return {
      status: "not_installed"
    };
  }
}

export { lTe };
