// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { I } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { ge } from "./chunk-07cck4g7.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { go } from "./chunk-0jsy3sb7.js";

import { Xh } from "./chunk-q6wab2jw.js";

import { CJ, G$, JGt, GHe, Bet, awn } from "./chunk-hjpa8htq.js";

import { D } from "./chunk-hmqkrrtz.js";

function k(r) {
  if (r.length === 0) return ge.dim("  (no skills loaded)");
  let {cells: t, widths: e} = JGt(r), o = ge.dim(`  ${CJ("skill", e.name)}  ${CJ("source", e.source)}  ${G$("context", e.context)}  ${G$("7d tokens", e.week)}  ${G$("uses", e.uses + 1)}  last used`), a = r.map((i, h) => {
    let u = t[h], c = `  ${CJ(i.name, e.name)}  ${ge.dim(CJ(i.source, e.source))}  ${G$(u.context, e.context)}  ${G$(u.week, e.week)}  ${G$(String(i.usageCount), e.uses)}\xd7  ${u.lastUsed}`;
    return i.usageCount === 0 ? ge.yellow(c) : c;
  }).join(`\n`);
  return `${o}\n${a}`;
}

async function y(r) {
  let {rows: t, unusedOwned: e, unusedSynced: o, unusedFromPlugins: a, unusedFromMcp: i, unusedMcpServers: h, disusedPlugins: u, weekTokensNote: c} = await awn(Bet(r)), s = [];
  if (s.push(ge.bold("Skills loaded this session")), s.push(""), s.push(k(t)), t.length > 0) s.push(""), 
  s.push(ge.dim("  context = this skill's one-line listing in the system prompt, included every turn")), 
  s.push(ge.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")), 
  s.push(ge.dim(c === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${c}`));
  if (s.push(""), e.length > 0) s.push(ge.yellow(`${e.length} ${I(e.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
  if (o.length > 0) s.push(ge.yellow(`${o.length} ${I(o.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${o.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`));
  if (a.length > 0) {
    let n = D(a.map(p => p.source));
    s.push(ge.yellow(`${a.length} plugin ${I(a.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`));
  }
  if (i.length > 0) {
    let n = h.length > 0 ? `, from ${h.join(", ")}` : "", p = h.length <= 1;
    s.push(ge.yellow(`${i.length} MCP ${I(i.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${p ? "that server" : "those servers"} off in /mcp also removes ${p ? "its" : "their"} tools.`));
  }
  if (t.length > 0 && t.every(n => n.usageCount > 0)) s.push(ge.green("All loaded skills have been used at least once."));
  if (u.length > 0) {
    s.push(""), s.push(ge.bold("Plugins not used recently")), s.push("");
    for (let n of u) s.push(`  ${ge.yellow(Xh(n.name))}  ${ge.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    s.push(""), s.push(ge.dim("  Manage these in /plugin"));
  }
  if (t.length === 0) f("cli_skill_doctor", "no_user_skills"); else if (c !== null) f("cli_skill_doctor", "scan_policy_denied"); else g("cli_skill_doctor");
  return s.join(`\n`);
}

var CKr = async (r, t) => {
  if (go(t.session)) return {
    type: "text",
    value: "Skill usage reports are not available on this connection."
  };
  try {
    let e = await y(t);
    if (go(t.session)) return {
      type: "text",
      value: "Skill usage reports are not available on this connection."
    };
    return {
      type: "text",
      value: e
    };
  } catch (e) {
    let o = e instanceof GHe ? e.cause : e;
    if (d(o), m("cli_skill_doctor", e instanceof GHe ? e.featureErrorCode : "render_failed"), 
    go(t.session)) return {
      type: "text",
      value: "Couldn't compute skill usage.",
      outcome: {
        kind: "failed"
      }
    };
    return {
      type: "text",
      value: `Couldn't compute skill usage. Run with --debug for details. (${l(o)})`,
      outcome: {
        kind: "failed"
      }
    };
  }
};

export { CKr };
