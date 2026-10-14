// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ln, WC } from "./chunk-ddr690nj.js";

import { Le } from "./chunk-2v9tfgc3.js";

import { t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { XK, Emt, fKn } from "./chunk-q6wab2jw.js";

import { a } from "./chunk-j016gcgm.js";

import { Jf, Hqn } from "./chunk-rgd61mm3.js";

import { rp } from "./chunk-j31ahx42.js";

import { YMt, tjn, qct } from "./chunk-ewk363e4.js";

import { O } from "./chunk-1xnsr4dy.js";

import { homedir as A } from "os";

import { isAbsolute as R, join as p, relative as D, resolve as S, sep as f } from "path";

var DCe = new Set([ "--model", "-m", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--agent", "--agents", "--routine", "--effort", "--fast-mode", "--add-dir", "--mcp-config", "--settings", "--setting-sources", "--managed-settings", "--client-data-url", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--fallback-model", "--advisor", "--channels", "--watch-artifact", "--watch-artifact-no-autoreact", "--permission-prompt-tool", "--permission-prompts", "--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--session-id", "--debug-file", "-n", "--name", "--autocompact", "--betas", "--file", "--max-budget-usd", "--max-thinking-tokens", "--max-turns", "--task-budget", "--plan-mode-instructions", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--rewind-files", "--thinking", "--thinking-display", "--remote-control-session-name-prefix", "--json-schema" ]), vRt = new Set([ ...DCe, "--resume-session-at", "--resume-drops-turn", "--project-config-root", "--exec" ]), ait = new Set([ "--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--mcp-config", "--betas", "--add-dir", "--file", "--channels" ]), w = new Set([ "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url" ]), t9t = new Set([ "--dangerously-skip-permissions", "--allow-dangerously-skip-permissions", "--strict-mcp-config", "--dangerously-allow-browser-network-access", "--restricted", "--disable-slash-commands", "--verbose", "--reply-on-resume", "--ide", "--chrome", "--no-chrome", "--bare", "--safe-mode", "--brief", "--remote-control", "--rc", "--local" ]), Bso = new Set([ "CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE" ]), jso = [ ...Emt, ...fKn, "CLAUDE_CODE_SUBAGENT_MODEL_FORCE" ], h4e = new Set([ "CLAUDE_CONFIG_DIR", "CLAUDE_INTERNAL_FC_OVERRIDES", ...jso, "CLAUDE_CODE_CLIENT_DATA_URL", ...XK, "AWS_REGION", "AWS_DEFAULT_REGION", "ANTHROPIC_BEDROCK_REGION_PREFIX", "AWS_PROFILE", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_CLOUD_PROJECT", "GCLOUD_PROJECT", "CLAUDE_SECURESTORAGE_CONFIG_DIR", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE" ]), g = new Set([ "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS" ]), L = "CLAUDE_SECURESTORAGE_CONFIG_DIR";

function C(n) {
  let s = Ee(), r = [ p(s, "jobs"), p(Jf(), Hqn()), p(s, "projects"), p(s, "plans"), p(s, "agent-memory") ], e = a.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  if (e) r.push(p(e, "projects"), p(e, "agent-memory"));
  if (g.has(n)) try {
    r.push(p(A(), ".claude"));
  } catch {}
  return r;
}

function _(n) {
  return rp(Ln(S(n)));
}

function I(n) {
  return O() === "windows" ? /^([A-Za-z]:[\\/]|[\\/]{2})/.test(n) : R(n);
}

function T(n, s) {
  if (s === "") return n === L ? void 0 : "empty path";
  if (!I(s)) return "not a full path";
  let r = _(s);
  if (O() !== "windows" && r.split(f).includes(rp(Hqn()))) return "path is inside a Claude temp folder, which background sessions can write to without asking";
  for (let e of C(n)) {
    let i = D(_(e), r);
    if (i !== ".." && !i.startsWith(`..${f}`) && !R(i)) return `path is inside ${e}, where background sessions can write some files without asking`;
  }
  return;
}

function nus(n, s) {
  let r = {};
  for (let [e, i] of Object.entries(n)) r[e] = i !== "" && g.has(e) ? S(s, y(e, i)) : i;
  return r;
}

function y(n, s) {
  if (!n.startsWith("AWS_") || !s.startsWith("~/")) return s;
  try {
    return p(A(), s.slice(2));
  } catch {
    return s;
  }
}

function rus(n) {
  let s = {}, r = [];
  for (let [e, i] of Object.entries(n)) {
    let o = !h4e.has(e) ? "not kept for background sessions" : Bso.has(e) && !Le(i) ? "only kept when set to a true value such as 1" : g.has(e) || e === L ? T(e, i) : void 0;
    if (o) r.push(`${qct(e)} (${o})`); else s[e] = i;
  }
  if (r.length === 0) return n;
  return t(`[jobs] ignored these saved environment entries in the job's state.json: ${r.join(", ")}`, {
    level: "warn"
  }), Object.keys(s).length > 0 ? s : void 0;
}

function Nmr(n, s) {
  let {kept: r, dropped: e} = tjn(n);
  return e.forEach(({name: i, problem: o}) => {
    try {
      t(`[jobs] dropped environment entry ${qct(i)} from ${s}: ${YMt[o]}.`, {
        level: "warn"
      });
    } catch {}
  }), r;
}

function LCe(n) {
  let s = [], r = [];
  for (let e = 0; e < n.length; e++) {
    let i = n[e];
    if (!i.startsWith("-")) {
      r.push(i);
      continue;
    }
    let o = i.indexOf("="), l = o === -1 ? i : i.slice(0, o);
    if (o !== -1 && !DCe.has(l) && t9t.has(l)) {
      s.push(l), r.push(i);
      continue;
    }
    let u = o === -1 && DCe.has(l), m = l !== "-m" && (o === -1 ? t9t.has(l) || u && n[e + 1] !== void 0 : DCe.has(l)), E = m ? s : r;
    if (E.push(i), u && n[e + 1] !== void 0) E.push(n[++e]);
    if (!m || u && ait.has(l)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) E.push(n[++e]);
  }
  if (r.length > 0) t(`[jobs] stripped respawnFlags token(s) that a restart does not re-apply: ${r.join(" ")}`, {
    level: "warn"
  });
  return F(N(s));
}

function N(n) {
  let s = [];
  for (let r = 0; r < n.length; r++) {
    let e = n[r];
    if (!DCe.has(e)) {
      s.push(e);
      continue;
    }
    let i = n[++r];
    if (!i.startsWith("-")) {
      s.push(e, i);
      continue;
    }
    s.push(`${e === "-n" ? "--name" : e}=${i}`);
    let o = n[r + 1];
    if (ait.has(e) && o !== void 0 && !o.startsWith("-")) s.push(e);
  }
  return s;
}

function F(n) {
  let s = [];
  for (let e = 0; e < n.length; e++) {
    let i = n[e], o = i.indexOf("="), l = o === -1 ? i : i.slice(0, o), u = [ i ];
    if (o === -1 && DCe.has(l) && n[e + 1] !== void 0) {
      if (u.push(n[++e]), ait.has(l)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) u.push(n[++e]);
    }
    s.push({
      name: l,
      toks: u
    });
  }
  let r = new Map;
  for (let e = 0; e < s.length; e++) {
    let i = s[e];
    if (DCe.has(i.name) && !ait.has(i.name) && !w.has(i.name)) r.set(i.name, e);
  }
  return s.filter((e, i) => (r.get(e.name) ?? i) === i).flatMap(e => e.toks);
}

function QQ(n) {
  let s = [];
  for (let r = 0; r < n.length; r++) {
    let e = n[r];
    if (e === "--") {
      for (let o = r; o < n.length; o++) s.push(n[o]);
      break;
    }
    let i = e.startsWith("--") ? e.indexOf("=") : -1;
    if (i !== -1 && (vRt.has(e.slice(0, i)) || c.has(e.slice(0, i)))) {
      s.push(e.slice(0, i + 1) + d(e.slice(0, i), e.slice(i + 1)));
      continue;
    }
    if (/^-[a-zA-Z].+/.test(e)) {
      let o = 1;
      while (o < e.length - 1 && $mr.has(`-${e[o]}`)) o++;
      let l = `-${e[o]}`;
      if (e.length > o + 1 && (vRt.has(l) || c.has(l))) {
        s.push(e.slice(0, o + 1) + d(l, e.slice(o + 1)));
        continue;
      }
      if (e.length === o + 1 && o > 1 && (vRt.has(l) || c.has(l))) {
        if (s.push(e), vRt.has(l) && n[r + 1] !== void 0) {
          if (s.push(d(l, n[++r])), ait.has(l)) while (n[r + 1] !== void 0 && !h(n[r + 1])) s.push(d(l, n[++r]));
        } else if (c.has(l) && n[r + 1] !== void 0 && !h(n[r + 1])) s.push(WC(n[++r]));
        continue;
      }
    }
    if (s.push(e), vRt.has(e) && n[r + 1] !== void 0) {
      if (s.push(d(e, n[++r])), ait.has(e)) while (n[r + 1] !== void 0 && !h(n[r + 1])) s.push(d(e, n[++r]));
    } else if (c.has(e) && n[r + 1] !== void 0 && !h(n[r + 1])) s.push(WC(n[++r]));
  }
  return s;
}

var b = new Set([ "--system-prompt", "--append-system-prompt", "--append-subagent-system-prompt", "--plan-mode-instructions", "--name", "-n" ]);

function d(n, s) {
  return b.has(n) ? s : WC(s);
}

var c = new Set([ "-r", "--resume" ]), $mr = new Set([ "-c", "-p", "-h", "-v" ]);

function h(n) {
  return n.length > 1 && n.startsWith("-");
}

function n9t(n) {
  return n.includes("--reply-on-resume") ? [ ...n ] : [ ...n, "--reply-on-resume" ];
}

function r9t(n) {
  return n.filter(s => s !== "--reply-on-resume");
}

export { DCe, vRt, ait, t9t, Bso, jso, h4e, nus, rus, Nmr, LCe, QQ, $mr, n9t, r9t };
