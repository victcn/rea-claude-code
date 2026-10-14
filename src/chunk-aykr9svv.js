// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p6, _dn } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { Je, l } from "./chunk-b0z4bv3v.js";

import { Un, Ny, cl, Mm } from "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { d } from "./chunk-6ah1819r.js";

import { fEe, __, t } from "./chunk-kawq2919.js";

import { J1, k, Ce, ce } from "./chunk-xywp7esx.js";

import { oq, V5 } from "./chunk-9yajep3y.js";

import { Gs, Lw } from "./chunk-yxennhe9.js";

import { dt, ca } from "./chunk-dd98x6x7.js";

import { ge } from "./chunk-07cck4g7.js";

import { aj } from "./chunk-sfvypv11.js";

import { JMn, aRt, lRt, $d } from "./chunk-1pzzpwf7.js";

import { ev } from "./chunk-gwz0gszt.js";

import { R$e, pb } from "./chunk-14xmsjdg.js";

import { Su } from "./chunk-bcsgak8m.js";

import { Ar } from "./chunk-jb3h1y0s.js";

import { phe, TJ } from "./chunk-ph08gw4j.js";

import { P, F } from "./chunk-cpyd3eya.js";

F();

function rfn() {
  let e = Ar(), n = Su();
  P(() => {}, [ e, n ]);
}

var p1o = {
  CLAUDE_CODE_TUI_TRIAL: "fullscreen"
};

function v(e, n) {
  Ce(r => (r.fullscreenUpsellSeenCount ?? 0) >= e ? r : {
    ...r,
    fullscreenUpsellSeenCount: e
  }, n);
}

function V6n(e) {
  v(lRt, e);
}

function g$r(e) {
  let n = JMn();
  if (n.upsellImpression !== void 0) return n.upsellImpression;
  let r = Math.min((ce().fullscreenUpsellSeenCount ?? 0) + 1, lRt);
  return n.upsellImpression = r, v(r, e), r;
}

async function f1o(e) {
  let n = JMn();
  if (n.persisted || aRt() !== "fullscreen") return !1;
  if (dt().tui !== void 0) return t("fullscreen trial: settings.tui was set explicitly during the trial \u2014 not persisting"), 
  !1;
  if (!$d()) return t("fullscreen trial: renderer is not fullscreen this session (auto-off) \u2014 not persisting"), 
  !1;
  let r = !1, {error: o} = await ca("userSettings", s => (r = s?.tui !== void 0, r ? null : {
    tui: "fullscreen"
  }), void 0, e);
  if (o) return d(o), f("tui_fullscreen_upsell_trial", "settings_write_failed"), !1;
  if (r) return t("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) \u2014 not persisting"), 
  !1;
  return V6n(e), n.persisted = !0, g("tui_fullscreen_upsell_trial"), i("tengu_fullscreen_upsell_trial_persisted", {
    session_age_ms: Math.round(process.uptime() * 1e3)
  }), t("fullscreen trial: healthy \u2014 persisted settings.tui=fullscreen"), !0;
}

async function m1o(e) {
  let n = aj();
  if (!n?.teamName || !n?.agentName) {
    t("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return;
  }
  let {teamName: r, agentId: o, agentName: s} = n, u = await pb(r, e);
  if (!u) {
    d(Je(Error(`[computeInitialTeamContext] Could not read team file for ${r}`), "[computeInitialTeamContext] Could not read team file"));
    return;
  }
  let a = R$e(r), m = !o;
  return t(`[Reconnection] Computed initial team context for ${m ? "leader" : `teammate ${s}`} in team ${r}`), 
  {
    teamName: r,
    teamFilePath: a,
    leadAgentId: u.leadAgentId,
    selfAgentId: o,
    selfAgentName: s,
    isLeader: m,
    teammates: {}
  };
}

async function g1o(e, n, r, o) {
  let s = await pb(n, o);
  if (!s) {
    t(`[initializeTeammateContextFromSession] Could not read team file for ${n} (agent: ${r}) \u2014 team may have been disbanded`, {
      level: "error"
    });
    return;
  }
  let u = s.members.find(b => b.name === r);
  if (!u) t(`[Reconnection] Member ${r} not found in team ${n} - may have been removed`);
  let a = u?.agentId, m = R$e(n);
  e(b => ({
    ...b,
    teamContext: {
      teamName: n,
      teamFilePath: m,
      leadAgentId: s.leadAgentId,
      selfAgentId: a,
      selfAgentName: r,
      isLeader: !1,
      teammates: {}
    }
  })), t(`[Reconnection] Initialized agent context from session for ${r} in team ${n}`);
}

import { stat as w } from "fs/promises";

import { homedir as E } from "os";

import { join as y, sep as I } from "path";

var R = 6048e5, y$r = 1e3;

function h1o(e) {
  let n = [ `This session was opened by an external deep link in ${L(e.cwd)}` ];
  if (e.repo) {
    let r = e.lastFetch ? Lw(e.lastFetch) : "never", o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > R;
    n.push(`Resolved ${e.repo} from local clones \xb7 last fetched ${r}${o ? " \u2014 CLAUDE.md may be stale" : ""}`);
  }
  if (e.prefillLength) n.push(e.prefillLength > y$r ? `The prompt below (${Gs(e.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter.");
  return n.join(`\n`);
}

async function y1o(e) {
  let n = await V5(e);
  if (!n) return;
  let r = await oq(n), [o, s] = await Promise.all([ A(y(n, "FETCH_HEAD")), r ? A(y(r, "FETCH_HEAD")) : Promise.resolve(void 0) ]);
  if (o && s) return o > s ? o : s;
  return o ?? s;
}

async function A(e) {
  try {
    let {mtime: n} = await w(e);
    return n;
  } catch {
    return;
  }
}

function L(e) {
  let n = E();
  if (e === n) return "~";
  if (e.startsWith(n + I)) return "~" + e.slice(n.length);
  return e;
}

function FUt(e, {replacesProcess: n}) {
  return J1() === void 0 && ev() && !(n && _dn()) && k("tengu_resume_open_live_bg", !0) ? e.jobId : void 0;
}

async function K6n(e) {
  let n = await D(e);
  return f("resume_live_background_open", n.reason, {
    entrypoint: c(e.entrypoint)
  }), n;
}

async function D({holder: e, entrypoint: n, prompt: r, storageV5: o}) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return {
    reason: "not_openable"
  };
  let s = FUt(e, {
    replacesProcess: !0
  });
  if (s === void 0) return {
    reason: "not_openable"
  };
  try {
    await phe();
  } catch (a) {
    return {
      reason: "open_failed",
      detail: l(a),
      promptSent: !1
    };
  }
  let u = typeof r === "string" && r.trim() !== "";
  if (u) {
    let a = r.trimStart();
    if (a.startsWith("!") || a.startsWith("/")) return {
      reason: "prompt_undelivered",
      detail: `a prompt starting with ${a.startsWith("!") ? "!" : "/"} would run as a command there`,
      delivery: "failed"
    };
    let [{replyToJob: m}, {getJobDir: b, readJobState: h}] = await Promise.all([ import("./chunk-9awv0fj3.js"), import("./chunk-hctw5vmt.js") ]);
    if ((await h(b(s), o))?.block !== void 0) return {
      reason: "prompt_undelivered",
      detail: "it is waiting on your answer to a question",
      delivery: "failed"
    };
    process.stdout.write(ge.dim(`Sending your prompt to the background session (${s})\u2026\n`));
    let p = await m(s, r, void 0, void 0, void 0, o, {
      nextTurn: !0
    });
    if (p) {
      let S = p.code === "ENOCONN" || p.code === "ETIMEOUT";
      return {
        reason: "prompt_undelivered",
        detail: S ? "its supervisor did not answer" : p.code === "ENOJOB" ? "it is no longer running" : p.err,
        delivery: p.queued === !0 ? "queued" : S ? "unconfirmed" : "failed"
      };
    }
  }
  try {
    return await h$r(s, n, o, {
      promptSent: u
    });
  } catch (a) {
    return {
      reason: "open_failed",
      detail: l(a),
      promptSent: u
    };
  }
}

async function h$r(e, n, r, {promptSent: o = !1} = {}) {
  return g("resume_live_background_open", {
    entrypoint: c(n),
    prompt_sent: o
  }), TJ({
    args: [ "attach", e ],
    preSpawn: () => process.stdout.write(ge.dim(o ? `Sent your prompt to the background session (${e}); opening it\u2026\n` : `Opening the background session (${e})\u2026\n`))
  }, r);
}

import { isAbsolute as B, resolve as O, win32 as _ } from "path";

async function ofn(e, n, r = __) {
  if (!(B(e) || _.isAbsolute(e)) || Un(e) || Ny(e) || Ny(_.normalize(e)) || Mm(e) || Mm(O(e)) || cl(e)) return t(`[${n}] session reported a network-path cwd \u2014 not adopting`, {
    level: "warn"
  }), !1;
  if (await fEe(e, p6(), r)) return t(`[${n}] session-reported cwd's local ancestry could not be verified as network-free \u2014 not adopting`, {
    level: "warn"
  }), !1;
  return !0;
}

export { rfn, p1o, V6n, g$r, f1o, FUt, K6n, h$r, m1o, g1o, ofn, y$r, h1o, y1o };
