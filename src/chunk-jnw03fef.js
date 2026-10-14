// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, ke } from "./chunk-3pqddg8f.js";

import { GPe, Q1, k, Ts, ia, Qm } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { g } from "./chunk-3ykz5st8.js";

import { iEe, sg, le } from "./chunk-cqgvwwgb.js";

import { pr, Lt } from "./chunk-9yajep3y.js";

import { ft } from "./chunk-zscnwzv2.js";

var L = [ ".claude/skills", ".claude/commands" ], _ = 3, y = 100;

function v(n) {
  let e = n.split("/");
  if (e[0] !== ".claude" || e.length < 3) return null;
  switch (e[1]) {
   case "skills":
    if (e.length === 4 && e[3] === "SKILL.md") return {
      kind: "skill",
      name: e[2]
    };
    return null;

   case "commands":
    {
      let o = e.at(-1);
      if (!o.endsWith(".md")) return null;
      if (/^skill\.md$/i.test(o)) return e.length < 4 ? null : {
        kind: "command",
        name: e.slice(2, -1).join(":")
      };
      return {
        kind: "command",
        name: e.slice(2).join(":").slice(0, -3)
      };
    }

   default:
    return null;
  }
}

class x {
  inFlight=void 0;
  resolved=void 0;
  get(n) {
    return this.inFlight ??= this.scan(n), this.inFlight;
  }
  teammateAuthorOf(n) {
    return this.resolved?.find(e => !e.byCurrentUser && e.name === n)?.author || null;
  }
  async scan(n) {
    if (!Ts()) return [];
    let e = iEe(le(), ke()), o = pr(e);
    if (!o) return [];
    let [{stdout: a, code: m}, s] = await Promise.all([ ft(Lt(), [ "-c", "core.quotePath=false", "-c", "core.fsmonitor=", "-c", "core.hooksPath=/dev/null", "-c", "core.pager=", "-c", "log.showSignature=false", "log", "--since=7.days", "--diff-filter=A", "--name-only", "--format=COMMIT%x00%an%x00%ae", "--", ...L ], {
      cwd: o,
      timeout: 5e3
    }), sg(e, GPe) ]);
    if (m !== 0) return [];
    let c = s?.toLowerCase(), l = [], A = new Set, u = "", h = "";
    for (let r of a.split(`\n`)) {
      if (r.startsWith("COMMIT\0")) {
        let f = r.split("\0");
        u = f[1] ?? "", h = (f[2] ?? "").toLowerCase();
        continue;
      }
      if (!r || A.has(r)) continue;
      A.add(r);
      let d = v(r);
      if (d) {
        let f = Boolean(c && h === c);
        l.push({
          path: r,
          author: u,
          byCurrentUser: f,
          ...d
        });
      }
    }
    this.resolved = l;
    let w = ia(), E = new Set(w.seenTeamArtifactPaths ?? []), P = l.some(r => !r.byCurrentUser && !E.has(r.path)), U = new Set(w.loggedAuthoredArtifactPaths ?? []), p = l.filter(r => r.byCurrentUser && !U.has(r.path));
    for (let r of p) i("tengu_skill_authored", {
      is_skill: r.kind === "skill"
    });
    try {
      await Qm(r => {
        let d = r.hasUnseenTeamArtifacts === P;
        if (p.length === 0 && d) return r;
        let f = d ? r : {
          ...r,
          hasUnseenTeamArtifacts: P
        };
        if (p.length === 0) return f;
        let j = f.loggedAuthoredArtifactPaths ?? [], C = p.map(T => T.path), B = new Set(C), F = [ ...j.filter(T => !B.has(T)), ...C ].slice(-y);
        return {
          ...f,
          loggedAuthoredArtifactPaths: F
        };
      }, n);
    } catch (r) {
      t(`team-artifact eligibility persist failed: ${r}`);
    }
    return l;
  }
}

var b = new lt(() => new x);

function S(n, e) {
  return b.of(n).get(e);
}

function xwt(n, e, o) {
  if (e !== "projectSettings" || !k("tengu_tussock_oriole", !1)) return null;
  return b.of(n).teammateAuthorOf(o);
}

function C3o(n, e) {
  if (Q1()) S(n, e).catch(() => {});
  if (!k("tengu_tussock_oriole", !1)) return !1;
  return ia().hasUnseenTeamArtifacts === !0;
}

async function R3o(n, e) {
  let o = await S(n, e);
  if (o.length === 0) return [];
  let a = new Set(ia().seenTeamArtifactPaths ?? []);
  return o.filter(m => !m.byCurrentUser && !a.has(m.path));
}

async function x3o(n, e) {
  let a = (await S(n, e)).filter(s => !s.byCurrentUser).map(s => s.path), m = new Set(a);
  await Qm(s => {
    let c = s.seenTeamArtifactPaths ?? [], l = [ ...c.filter(u => !m.has(u)), ...a ].slice(-y);
    if (l.length === c.length && l.every((u, h) => u === c[h]) && s.hasUnseenTeamArtifacts === !1) return s;
    return {
      ...s,
      seenTeamArtifactPaths: l,
      hasUnseenTeamArtifacts: !1
    };
  }, e);
}

function P3o(n) {
  let e = {
    skill: 0,
    command: 0
  };
  for (let o of n) e[o.kind]++;
  g("tips_team_artifact_show"), i("tengu_team_artifact_tip_shown", {
    skill_count: e.skill,
    command_count: e.command,
    overflow_count: Math.max(0, n.length - _)
  });
}

function Pwt(n, e) {
  if (n !== "projectSettings") return {};
  return {
    via_team_tip: (ia().seenTeamArtifactPaths ?? []).some(a => v(a)?.name === e)
  };
}

function I3o(n) {
  let e = n.filter(c => !c.byCurrentUser);
  if (e.length === 0) return "";
  let o = e.slice(0, _), a = o.map(c => `/${c.name} (${c.author || "a teammate"})`), m = a.length === 1 ? a[0] : `${a.slice(0, -1).join(", ")} and ${a.at(-1)}`, s = e.length - o.length;
  return `New from your team: ${m}${s > 0 ? `, plus ${s} more` : ""}`;
}

export { xwt, C3o, R3o, x3o, P3o, Pwt, I3o };
