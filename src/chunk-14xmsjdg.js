// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { DDr, LDr } from "./chunk-3pqddg8f.js";

import { x, l, E, Ms } from "./chunk-b0z4bv3v.js";

import { g, m, f, so } from "./chunk-3ykz5st8.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { zJe } from "./chunk-z52kmxx4.js";

import { Ja } from "./chunk-2msx6erf.js";

import { d } from "./chunk-6ah1819r.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { Ab, ql, jd } from "./chunk-sfvypv11.js";

import { olt } from "./chunk-3c5ceehb.js";

import { _a } from "./chunk-3kb22va7.js";

import { mkdir as M, readFile as O, rm as W, writeFile as j } from "fs/promises";

import { join as F } from "path";

class u1 extends Error {
  constructor(e) {
    super(e);
    this.name = "SwarmPaneError";
  }
}

var I = /\p{Cc}/u;

function F_s(e) {
  return I.test(e);
}

function Jat(e) {
  let r = I.exec(e);
  if (r) {
    let n = r[0].codePointAt(0);
    throw new u1(`Refusing to send command containing control character U+${n.toString(16).padStart(4, "0").toUpperCase()} to terminal pane`);
  }
}

function nQt(e) {
  return e === "tmux" || e === "iterm2";
}

function wNn(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}

function lpo(e) {
  return e.replaceAll("@", "-");
}

function S(e) {
  return F(zJe(), wNn(e));
}

function R$e(e) {
  return F(S(e), "config.json");
}

function C(e) {
  return Fe.team(wNn(e));
}

function w(e) {
  let r = "failureClass" in e ? `/${e.failureClass}` : "", n = "telemetryCode" in e && e.telemetryCode !== void 0 ? ` [${e.telemetryCode}]` : "";
  return `${e.code}${r}${n}`;
}

function A(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockSuspect";
}

function D(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockContended";
}

function h(e) {
  return e.code === "Unavailable" || e.code === "NotFound" || e.code === "Failed" && (e.failureClass === "permission" || e.failureClass === "resource" || e.failureClass === "environment" || e.failureClass === "unknown" && Ms(e.cause));
}

function v(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let r = e, n = Array.isArray(r.members) ? r.members.filter(L) : [];
  return Array.isArray(r.members) && n.length === r.members.length ? r : {
    ...r,
    members: n
  };
}

function L(e) {
  return typeof e === "object" && e !== null && "agentId" in e && typeof e.agentId === "string" && "name" in e && typeof e.name === "string";
}

async function pb(e, r) {
  if (r) {
    let n = await r.read([ C(e) ]);
    if (!n.ok) return t(`[TeammateTool] Failed to read team file for ${e}: ${n.error.code}`), 
    null;
    let i = n.value.items[0];
    if (!i.found) return null;
    try {
      return v(Y(Buffer.from(i.value).toString("utf8")));
    } catch (a) {
      return t(`[TeammateTool] Failed to read team file for ${e}: ${l(a)}`), null;
    }
  }
  try {
    let n = await O(R$e(e), "utf-8");
    return v(Y(n));
  } catch (n) {
    if (E(n) === "ENOENT") return null;
    return t(`[TeammateTool] Failed to read team file for ${e}: ${l(n)}`), null;
  }
}

function V_r(e, r) {
  if (Ms(r)) t(`[TeammateTool] Failed to write team file for ${e} (${E(r)}): ${l(r)}`, {
    level: "error"
  }); else if (U(r)) t(`[TeammateTool] Failed to write team file for ${e}: ${l(r)}`, {
    level: "error"
  }); else d(r);
}

function U(e) {
  if (!(e instanceof Error) || e.cause === void 0 || e.cause === null) return !1;
  let r = e.cause;
  if (typeof r !== "object" || typeof r.code !== "string") return !1;
  return h(r);
}

var z = {
  realpath: !1,
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: () => {}
};

function B(e) {
  return new x(`Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`, "Team file missing (session team not initialized)");
}

async function eSe(e, r, n, i) {
  if (i) return K(e, r, n, i);
  let a = R$e(e), u;
  try {
    u = await Ja(a, {
      lockfilePath: `${a}.lock`,
      ...z
    });
  } catch (s) {
    if (E(s) === "ENOENT") throw B(e);
    throw s;
  }
  try {
    let s = await pb(e);
    if (!s) throw Error("Team config file unreadable (lock acquired, read failed)");
    let c = r(s);
    if (c === !1) return;
    try {
      await K_r(e, s);
    } catch (y) {
      if (!n?.bestEffortWrite) throw y;
      V_r(e, y);
    }
    return c;
  } finally {
    try {
      await u();
    } catch (s) {
      t(`[TeammateTool] updateTeamFile lock release failed: ${l(s)}`);
    }
  }
}

async function dpo(e, r, n) {
  try {
    await eSe(e, i => {
      let a = i.members.findIndex(u => u.agentId === r);
      if (a === -1) return !1;
      i.members.splice(a, 1);
    }, void 0, n);
  } catch (i) {
    t(`[TeammateTool] removeTeamMember(${r}) failed: ${l(i)}`);
  }
}

async function K(e, r, n, i) {
  let a = C(e), u = 5, s = olt(50), c, y = p => {
    if (p === void 0) return {
      skip: !0,
      result: {
        kind: "missing"
      }
    };
    let T;
    try {
      T = v(Y(Buffer.from(p.value).toString("utf8"))) ?? void 0;
    } catch (P) {
      return {
        skip: !0,
        result: {
          kind: "unreadable",
          parseError: l(P)
        }
      };
    }
    if (!T) return {
      skip: !0,
      result: {
        kind: "unreadable"
      }
    };
    let b;
    try {
      b = r(T);
    } catch (P) {
      return {
        skip: !0,
        result: {
          kind: "threw",
          error: P
        }
      };
    }
    if (b === !1) return {
      skip: !0,
      result: {
        kind: "declined"
      }
    };
    return c = b, {
      write: _(T, null, 2),
      result: {
        kind: "applied",
        result: b
      }
    };
  }, o;
  for (let p = 1; ;p++) {
    if (o = await i.update(a, y), !o.ok) {
      if (A(o.error) && p < 5) {
        await s(p);
        continue;
      }
      break;
    }
    let T = o.value.result;
    if (T === void 0 || T.kind === "declined") return;
    switch (T.kind) {
     case "missing":
      throw B(e);

     case "unreadable":
      if (T.parseError !== void 0) t(`[TeammateTool] Failed to read team file for ${e}: ${T.parseError}`);
      if (p < 5) {
        await s(p);
        continue;
      }
      throw Error("Team config file unreadable (lock acquired, read failed)");

     case "threw":
      throw T.error;

     case "applied":
      return g("swarm_team_file_update"), T.result;

     default:
      return T;
    }
  }
  let k = D(o.error);
  if (k) f("swarm_team_file_update", "lock_contended");
  if (!n?.bestEffortWrite) {
    let p = new x(`Team file update failed (${w(o.error)}) for ${e}`, "Team file update failed (storage v5)");
    if (p.cause = o.error, !k && !h(o.error)) m("swarm_team_file_update", o.error.code);
    throw p;
  }
  if (!A(o.error) && h(o.error)) t(`[TeammateTool] Failed to update team file for ${e} (${w(o.error)})`, {
    level: "error"
  }); else {
    let p = new x(`Team file update failed (${w(o.error)}) for ${e}`, "Team file update failed (storage v5)");
    p.cause = o.error, m("swarm_team_file_update", o.error.code), d(p);
  }
  return c;
}

async function K_r(e, r, n) {
  if (n) {
    let a = await n.write(C(e), _(r, null, 2), {
      precondition: {
        type: "none"
      }
    });
    if (!a.ok) {
      let u = new x(`Team file write failed (${w(a.error)}) for ${e}`, "Team file write failed (storage v5)");
      throw u.cause = a.error, u;
    }
    return;
  }
  let i = S(e);
  await M(i, {
    recursive: !0
  }), await j(R$e(e), _(r, null, 2));
}

async function t5e(e, r, n) {
  let i = r.agentId || r.name;
  if (!i) return t("[TeammateTool] removeTeammateFromTeamFile called with no identifier"), 
  !1;
  let a = !1;
  try {
    let u = await eSe(e, s => {
      a = !1;
      let c = s.members.length;
      s.members = s.members.filter(o => {
        if (r.agentId && o.agentId === r.agentId) return !1;
        if (r.name && o.name === r.name) return !1;
        return !0;
      });
      let y = s.members.length !== c;
      return a = !y, y;
    }, {
      bestEffortWrite: !0
    }, n) ?? !1;
    if (u) t(`[TeammateTool] Removed teammate from team file: ${i}`); else if (a) t(`[TeammateTool] Teammate ${i} not found in team file for "${e}"`);
    return u;
  } catch (u) {
    return t(`[TeammateTool] Cannot remove teammate ${i} from "${e}": ${l(u)}`), !1;
  }
}

async function rQt(e, r, n, i) {
  let a = !1;
  try {
    let u = await eSe(e, s => {
      let c = s.members.findIndex(o => o.agentId === r), y = s.members[c];
      if (!y) return a = !1, !1;
      if (n?.onlyIfJoinedBefore !== void 0 && y.joinedAt >= n.onlyIfJoinedBefore) return a = !0, 
      !1;
      return a = !1, s.members.splice(c, 1), !0;
    }, {
      bestEffortWrite: !0
    }, i) ?? !1;
    if (u) t(`[TeammateTool] Removed member ${r} from team ${e}`); else if (a) t(`[TeammateTool] Skipped stale removal of ${r} from team ${e} (re-added after removal was initiated)`);
    return u;
  } catch (u) {
    return t(`[TeammateTool] removeMemberByAgentId(${r}) failed for team ${e}: ${l(u)}`), 
    !1;
  }
}

async function q_r(e, r, n, i) {
  let a = "unchanged";
  try {
    if (await eSe(e, u => {
      let s = u.members.find(c => c.name === r);
      if (!s) return a = "absent", !1;
      if (s.mode === n) return a = "unchanged", !1;
      a = "set", s.mode = n;
    }, void 0, i), a === "absent") t(`[TeammateTool] Cannot set member mode: member ${r} not found in team ${e}`); else if (a === "set") t(`[TeammateTool] Set member ${r} in team ${e} to mode: ${n}`);
  } catch (u) {
    t(`[TeammateTool] Cannot set member mode: ${l(u)}`);
  }
}

async function oQt(e, r, n) {
  if (!jd()) return;
  let i = r ?? ql(), a = Ab();
  if (i && a) await q_r(i, a, e, n);
}

async function sQt(e, r, n, i) {
  let a = "unchanged";
  try {
    if (await eSe(e, u => {
      let s = u.members.find(c => c.name === r);
      if (!s) return a = "absent", !1;
      if (s.isActive === n) return a = "unchanged", !1;
      a = "set", s.isActive = n;
    }, void 0, i), a === "absent") t(`[TeammateTool] Cannot set member active: member ${r} not found in team ${e}`); else if (a === "set") t(`[TeammateTool] Set member ${r} in team ${e} to ${n ? "active" : "idle"}`);
  } catch (u) {
    t(`[TeammateTool] Cannot set member active: ${l(u)}`);
  }
}

function cpo(e) {
  DDr().add(e);
}

async function c6s(e) {
  return so("swarm_session_cleanup", async () => {
    let r = DDr();
    if (r.size === 0) return;
    let n = Array.from(r);
    t(`cleanupSessionTeams: removing ${n.length} orphan team dir(s): ${n.join(", ")}`), 
    await Promise.allSettled(n.map(i => V(i, e))), await Promise.allSettled(n.map(i => q(i))), 
    r.clear();
  });
}

function R(e, r) {
  return `${e}:${r}`;
}

function upo(e, r) {
  if (nQt(e) && r) LDr().add(R(e, r));
}

async function V(e, r) {
  let n = await pb(e, r);
  if (!n) return;
  let i = LDr(), a = n.members.filter(o => o.name !== _a && o.tmuxPaneId && o.backendType && nQt(o.backendType) && i.has(R(o.backendType, o.tmuxPaneId)));
  if (a.length === 0) return;
  let [{ensureBackendsRegistered: u, getBackendByType: s}, {isInsideTmux: c}] = await Promise.all([ import("./chunk-zn4x4p5k.js"), import("./chunk-hxj39q39.js") ]);
  await u();
  let y = !await c();
  await Promise.allSettled(a.map(async o => {
    if (!o.tmuxPaneId || !o.backendType || !nQt(o.backendType)) return;
    let k = await s(o.backendType).killPane(o.tmuxPaneId, y);
    t(`cleanupSessionTeams: killPane ${o.name} (${o.backendType} ${o.tmuxPaneId}) \u2192 ${k}`);
  }));
}

async function q(e) {
  return so("swarm_team_cleanup", async () => {
    let r = S(e);
    try {
      await W(r, {
        recursive: !0,
        force: !0
      }), t(`[TeammateTool] Cleaned up team directory: ${r}`);
    } catch (n) {
      t(`[TeammateTool] Failed to clean up team directory ${r}: ${l(n)}`);
    }
  });
}

export { u1, F_s, Jat, nQt, wNn, lpo, R$e, pb, V_r, eSe, dpo, K_r, t5e, rQt, q_r, oQt, sQt, cpo, c6s, upo };
