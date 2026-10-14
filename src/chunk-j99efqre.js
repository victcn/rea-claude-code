// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E } from "./chunk-b0z4bv3v.js";

import { wr } from "./chunk-t26295zc.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { ZIt } from "./chunk-4v78v8fd.js";

import { pPe, TWn, AWn } from "./chunk-gw3qd0qn.js";

import { bK, jUe, $z } from "./chunk-g5zagpgq.js";

import { join as P, posix as O } from "path";

import { constants as c } from "fs";

import { lstat as x, mkdir as w, open as y } from "fs/promises";

import C, { dirname as v } from "path";

var h = c.O_NOFOLLOW ?? 0, F = c.O_WRONLY | c.O_CREAT | c.O_EXCL | h;

async function T(e, o, n = 384) {
  let r = await y(e, F, n);
  try {
    if (n !== 384) await r.chmod(n);
    await r.writeFile(o, "utf8");
  } finally {
    await r.close();
  }
}

function B(e, o, n = C) {
  let r = n.normalize(o);
  if (n.isAbsolute(r) || r.split(n.sep).includes("..") || r.split("/").includes("..")) throw Error("bundled file path escapes its extraction dir");
  return n.join(e, r);
}

async function MSr(e, o, n) {
  let r = new Map;
  for (let [l, p] of Object.entries(o)) {
    let a = B(e, l), d = v(a), u = [ a, p, n?.mode?.(l) ?? 384 ], i = r.get(d);
    if (i) i.push(u); else r.set(d, [ u ]);
  }
  await Promise.all([ ...r ].map(async ([l, p]) => {
    await w(l, {
      recursive: !0,
      mode: 448
    }), await Promise.all(p.map(([a, d, u]) => T(a, d, u).catch(i => {
      if (n?.tolerateExisting && E(i) === "EEXIST") {
        if (n.tolerateExisting !== "verify-content") return x(a).then(s => {
          if (!s.isFile()) throw i;
        });
        return y(a, c.O_RDONLY | h | (c.O_NONBLOCK ?? 0)).then(s => s.stat().then(b => {
          if (!b.isFile()) throw i;
          return s.readFile({
            encoding: "utf8"
          });
        }).finally(() => s.close())).then(s => {
          if (s !== d) throw i;
        });
      }
      throw i;
    })));
  }));
}

function Cmo(e) {
  wr().bundledSkillSessionResetHooks.push(e);
}

function I5e() {
  for (let e of wr().bundledSkillSessionResetHooks) try {
    e();
  } catch (o) {
    t(`[skills] session-reset hook failed: ${o instanceof Error ? o.message : String(o)}`);
  }
}

function Qzs(e) {
  let {files: o} = e, n = typeof o === "function";
  if (!o || !n && Object.keys(o).length === 0) return {
    skillRoot: void 0,
    getPromptForCommand: e.getPromptForCommand
  };
  let r, l, p = e.getPromptForCommand, a = async (d, u) => {
    l ??= (async () => {
      let k = r ?? (n ? await o(u) : o);
      if (Object.keys(k).length > 0) r = k;
      return R(e.name, k);
    })();
    let i = l, f;
    try {
      f = await i;
    } catch (k) {
      if (l === i) l = void 0, r = void 0;
      throw k;
    }
    if (l === i) l = void 0;
    let s = await p(d, u, f);
    if (f === null) return s;
    let b = `Base directory for this skill: ${f}\n\n`;
    if (s.length > 0 && s[0].type === "text") return [ {
      type: "text",
      text: b + s[0].text
    }, ...s.slice(1) ];
    return [ {
      type: "text",
      text: b
    }, ...s ];
  };
  return {
    skillRoot: O5e(e.name),
    getPromptForCommand: a
  };
}

function Xs(e) {
  let {skillRoot: o, getPromptForCommand: n} = Qzs(e), r = {
    type: "prompt",
    name: e.name,
    description: typeof e.description === "function" ? "" : e.description,
    menuDescription: typeof e.menuDescription === "function" ? void 0 : e.menuDescription,
    aliases: e.aliases,
    subcommands: e.subcommands,
    subcommandsBareOnly: e.subcommandsBareOnly,
    hasUserSpecifiedDescription: !0,
    allowedTools: e.allowedTools ?? [],
    getAllowedTools: e.getAllowedTools,
    disallowedTools: e.disallowedTools ?? [],
    argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
    whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
    model: e.model,
    disableModelInvocation: typeof e.disableModelInvocation === "function" ? !0 : e.disableModelInvocation ?? !1,
    disableBridgeInvocation: e.disableBridgeInvocation,
    userInvocable: e.userInvocable ?? !0,
    terminalOriented: e.terminalOriented,
    argsMayContainSlashCommands: e.argsMayContainSlashCommands,
    contentLength: 0,
    source: "bundled",
    loadedFrom: "bundled",
    hooks: e.hooks,
    skillRoot: o,
    context: e.context,
    getContext: e.getContext,
    agent: e.agent,
    background: e.background,
    formatForegroundForkResult: e.formatForegroundForkResult,
    isEnabled: e.isEnabled,
    policyGate: typeof e.policyGate === "function" ? void 0 : e.policyGate,
    requires: e.requires,
    isHidden: !(e.userInvocable ?? !0),
    progressMessage: e.progressMessage ?? "running",
    getPromptForCommand: n,
    getEffort: e.getEffort,
    getDefaultEffort: e.getDefaultEffort,
    onUserTypedArgs: e.onUserTypedArgs,
    getArgumentCompletions: e.getArgumentCompletions,
    enterTakesArgumentCompletion: e.enterTakesArgumentCompletion
  };
  pPe(r, "description", e.description), pPe(r, "menuDescription", e.menuDescription), 
  pPe(r, "argumentHint", e.argumentHint), pPe(r, "whenToUse", e.whenToUse), TWn(r, "disableModelInvocation", e.disableModelInvocation), 
  AWn(r, e.policyGate);
  let l = wr();
  if (e.survivesBundledKillSwitch) l.bundledSkillKillSwitchSurvivors.add(r);
  l.bundledSkills.push(r);
}

function I8() {
  let e = wr();
  if (bK()) return e.bundledSkills.filter(o => e.bundledSkillKillSwitchSurvivors.has(o));
  if (jUe()) return e.bundledSkills.filter(o => e.bundledSkillKillSwitchSurvivors.has(o) || !$z(o.name));
  return [ ...e.bundledSkills ];
}

function vIt(e) {
  if (e.type !== "prompt" || e.source !== "bundled") return !1;
  for (let o of wr().bundledSkillKillSwitchSurvivors) if (o === e || o.name === e.name) return !1;
  return $z(e.name);
}

function h7t() {
  return [ ...wr().bundledSkills ];
}

function O5e(e) {
  let o = wr().bundledSkillFilesElsewhere;
  return o ? O.join(o.root, e) : P(ZIt(), e);
}

async function R(e, o) {
  if (Object.keys(o).length === 0) return null;
  let n = O5e(e);
  try {
    return await S(n, o, "verify-content"), g("skill_bundled_extract"), n;
  } catch (r) {
    return t(`Failed to extract bundled skill '${e}' to ${n}: ${r instanceof Error ? r.message : String(r)}`), 
    m("skill_bundled_extract", "skill_bundled_extract_write_failed"), null;
  }
}

async function HSr(e, o) {
  if (Object.keys(o).length === 0) return null;
  let n = O5e(e);
  try {
    return await S(n, o, !0), n;
  } catch (r) {
    return t(`Failed to extract additional skill files for '${e}' to ${n}: ${r instanceof Error ? r.message : String(r)}`), 
    null;
  }
}

function S(e, o, n) {
  let r = wr().bundledSkillFilesElsewhere;
  return r ? r.write(e, o) : MSr(e, o, {
    tolerateExisting: n
  });
}

export { MSr, Cmo, I5e, Qzs, Xs, I8, vIt, h7t, O5e, HSr };
