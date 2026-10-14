// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { nt } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { it } from "./chunk-zscnwzv2.js";

import { kie } from "./chunk-3kb22va7.js";

var c = "it2";

class u {
  inITerm2=null;
  it2Command="it2";
  recordInITerm2(e) {
    this.inITerm2 = e;
  }
  recordIt2Command(e) {
    this.it2Command = e;
  }
}

function I() {
  return {
    cachedDetectionResult: null,
    backendsRegistered: !1,
    inProcessFallbackActive: !1,
    TmuxBackendClass: null,
    ITermBackendClass: null,
    tmuxBackend: null,
    itermBackend: null,
    terminalProbes: new u
  };
}

var cSe = I();

var d = a.TMUX, T = a.TMUX_PANE;

function u$n() {
  return !!d;
}

async function Noe() {
  return u$n();
}

function aSr() {
  return T || null;
}

function lSr() {
  if (!d) return null;
  return nt(d, ",") || null;
}

async function z$e() {
  return (await it(kie, [ "-V" ])).code === 0;
}

function R8(e = cSe) {
  let {terminalProbes: o} = e;
  if (o.inITerm2 !== null) return o.inITerm2;
  let s = a.TERM_PROGRAM, i = !!a.ITERM_SESSION_ID, l = a.terminal === "iTerm.app", n = s === "iTerm.app" || i || l;
  return o.recordInITerm2(n), n;
}

function wfo(e = cSe) {
  return e.terminalProbes.it2Command;
}

async function sIt(e = cSe) {
  let o = a.SHELL || "/bin/zsh", s = await it(o, [ "-lc", `command -v ${c}` ], {
    useCwd: !1,
    timeout: 2e3
  }), i = s.code === 0 ? s.stdout.split(`\n`).map(m => m.trim()).filter(Boolean).at(-1) ?? "" : "", l = async m => it(m, [ "session", "list" ]), n = i || c, r = await l(n);
  if (i && r.code !== 0 && (r.code === 127 || /ENOENT/i.test(r.error ?? ""))) n = c, 
  r = await l(n);
  if (r.code !== 0) return t(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr || r.error || "no stderr"}. ` + (i ? "it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled " + "(Preferences > General > Magic > Enable Python API)." : "it2 was not found on PATH (including login-shell PATH).")), 
  !1;
  return e.terminalProbes.recordIt2Command(n), !0;
}

export { cSe, u$n, Noe, aSr, lSr, z$e, R8, wfo, sIt };
