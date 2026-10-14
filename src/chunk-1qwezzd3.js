// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mS, Vt } from "./chunk-vxr6sv7z.js";

import { lt, q, Z_, ke, px, ic, pD, Pp, G$t, V$t, he, vae, yYn } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { E, jt } from "./chunk-b0z4bv3v.js";

import { Un, Ly, Ny, cl, el, gS, Mm, Cs, e2 } from "./chunk-ddr690nj.js";

import { CUs, SI, fae, Pf, __, ag, En, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { ix, ls } from "./chunk-30n0xq4e.js";

import { i } from "./chunk-hedpgw9m.js";

import { f } from "./chunk-3ykz5st8.js";

import { le } from "./chunk-cqgvwwgb.js";

import { a } from "./chunk-j016gcgm.js";

import { Jh } from "./chunk-60c97a4m.js";

import { n1n, dct } from "./chunk-j4rs03r7.js";

import { AP, AR, Sz } from "./chunk-9tdwgnpn.js";

import { cS, Pee, iMr } from "./chunk-9yajep3y.js";

import { wZ, fCr, Xr, kCr, zh, LO, aBe, B_, Ke, It, sf, xZ, Vh, rc, T0t } from "./chunk-xywp7esx.js";

import { up, X0 } from "./chunk-q6wab2jw.js";

import { rg } from "./chunk-jnzpsr0d.js";

import { Bi } from "./chunk-s2t7g8m9.js";

import { gLs, su } from "./chunk-cjt10y7b.js";

import { gl } from "./chunk-46phtgr7.js";

import { c3, PCn, wAe, Kns, bg, q2, Qx, MYt, O4, o_e, OAe, $de, WA, LKe, Pxn, Ixn, yp, GTt, zAe, WPn, Lf, Va, uce, U3, H_e, D_e, BLe, jW, WW, t0, U_e, Wt } from "./chunk-84yp45y8.js";

import { fbe } from "./chunk-hx17tmde.js";

import { Axe } from "./chunk-4jjt8sdp.js";

import { Jue } from "./chunk-4y2m4xpx.js";

import { Np, yz } from "./chunk-7en5gt36.js";

import { Cue } from "./chunk-4v78v8fd.js";

import { bd, oK } from "./chunk-h36n2zxz.js";

import { LS, Fd } from "./chunk-km6d4a9r.js";

import { J$e } from "./chunk-5sbf9djq.js";

import { wr } from "./chunk-t26295zc.js";

import { koe } from "./chunk-2xhrgh8h.js";

import { yd } from "./chunk-3xtsjx0y.js";

import { hP } from "./chunk-pegykqwq.js";

import { eC } from "./chunk-xd492737.js";

import { cJ } from "./chunk-5bs45ssf.js";

import { wTe, zer, _2e, Qet, dDe } from "./chunk-pr0enes7.js";

import { fVe } from "./chunk-bsp9ezw0.js";

import { gZe } from "./chunk-jrn7saa8.js";

import { Z2o, jge } from "./chunk-5t016srx.js";

import { kbt } from "./chunk-ak6grb0c.js";

import { kvn, itt } from "./chunk-00mmxsbd.js";

import { Whe } from "./chunk-x2950r2n.js";

import { A6r, C6r } from "./chunk-r7amy7kc.js";

import { Mt, On } from "./chunk-3kd8r7rn.js";

import { D } from "./chunk-hmqkrrtz.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { open as ue, readdir as me, unlink as V } from "fs/promises";

import { join as G } from "path";

var ce = 200, fe = 64;

function F() {
  if (he() || Va()) return null;
  try {
    return G(AP(), q(), A6r);
  } catch (e) {
    return t(`Image store unavailable: ${e}`, {
      level: "warn"
    }), null;
  }
}

function q2o() {
  return F() !== null;
}

async function ZXn() {
  let e = F();
  if (e === null) return 0;
  let r;
  try {
    r = await me(e);
  } catch (n) {
    if (!jt(n)) t(`Could not list stored images: ${n}`, {
      level: "warn"
    });
    return 0;
  }
  let o = 0;
  for (let n of r) {
    let s = Number(C6r.exec(n)?.[1]);
    if (Number.isSafeInteger(s) && s > o) o = s;
  }
  return o;
}

function K(e) {
  if (!Number.isSafeInteger(e.id) || e.id < 0 || typeof e.content !== "string" || e.content === "") return null;
  let r = F();
  if (r === null) return null;
  let o = dct(e.content.slice(0, fe));
  return G(r, `${e.id}.${n1n[o]}`);
}

function Mke(e, r) {
  if (e.type !== "image") return null;
  let o = K(e);
  if (o !== null) r(n => O(n, e.id, o));
  return o;
}

async function Hke(e, r) {
  let o = await Y(e);
  if (o) r(n => O(n, e.id, o));
  return o;
}

async function Y2o(e, r) {
  let o = new Map;
  for (let [n, s] of Object.entries(e)) if (s.type === "image") {
    let u = await Y(s);
    if (u) o.set(Number(n), u);
  }
  if (o.size > 0) r(n => {
    let s = n;
    for (let [u, l] of o) s = O(s, u, l);
    return s;
  });
  return o;
}

async function Y(e) {
  if (e.type !== "image") return null;
  try {
    let r = K(e);
    if (r === null) return null;
    let o = await cS(r, [ r ], {
      createParents: !0,
      leaf: "replace"
    }), n = ix(o.ioPath), s = !1;
    try {
      let u = await ue(n, "wx", 384);
      s = !0;
      try {
        await u.writeFile(e.content, {
          encoding: "base64"
        }), await u.datasync();
      } finally {
        await u.close();
      }
      await o.recheckBeforeWrite();
      try {
        await ls(n, o.ioPath);
      } catch (l) {
        if (E(l) !== "EEXIST") throw l;
        await o.recheckBeforeWrite(), await V(o.ioPath).catch(() => {}), await o.recheckBeforeWrite(), 
        await ls(n, o.ioPath);
      }
      s = !1;
    } finally {
      if (s) try {
        await o.recheckBeforeWrite(), await V(n);
      } catch {}
      await o.close();
    }
    return t(`Stored image ${e.id} to ${r}`), r;
  } catch (r) {
    return t(`Failed to store image: ${r}`), null;
  }
}

function O(e, r, o) {
  if (e.get(r) === o) return e;
  let n = new Map(e);
  if (!n.has(r)) while (n.size >= ce) {
    let s = n.keys().next().value;
    if (s === void 0) break;
    n.delete(s);
  }
  return n.set(r, o), n;
}

import { appendFile as it, readdir as st, rename as ge, rmdir as ye } from "fs/promises";

import { basename as X, dirname as dt, join as N, relative as J } from "path";

class Q {
  filePath=null;
  key=void 0;
  timestamp=0;
  recorder=null;
  failed=!1;
  setFile(e, r, o) {
    this.filePath = e, this.key = o, this.timestamp = r;
  }
  setFilePath(e, r) {
    this.filePath = e, this.key = r;
  }
  setRecorder(e) {
    this.recorder = e;
  }
  markFailed() {
    this.failed = !0;
  }
}

function Se(e, r, o) {
  return {
    namespace: "recording",
    projectKey: e,
    sessionId: r,
    stamp: String(o)
  };
}

var we = new lt(() => new Q);

async function xhn(e, r) {
  let o = we.of(e), n = o.filePath;
  if (!n || o.timestamp === 0) return;
  let s = Jh(ke()), u = o.key, l = yz(s);
  if (z() && r !== void 0 && u !== void 0 && l !== void 0) {
    if (o.failed) return;
    let y = q(), S = N(s, y, `${o.timestamp}.cast`);
    if (n === S) return;
    let A = Se(l, y, o.timestamp), k = J(s, n), R = J(s, S), P = async () => {
      if (o.failed) return;
      try {
        await Re(r, u, A), o.setFilePath(S, A), t(`[asciicast] Renamed recording: ${k} \u2192 ${R}`);
      } catch {
        t(`[asciicast] Failed to rename recording from ${k} to ${R}`);
      }
    };
    await (o.recorder?.park(P) ?? P());
    return;
  }
  let m = N(s, `${q()}-${o.timestamp}.cast`);
  if (n === m) return;
  await (o.recorder?.flush());
  let p = X(n), h = X(m);
  try {
    await ge(n, m), o.setFilePath(m), t(`[asciicast] Renamed recording: ${p} \u2192 ${h}`);
  } catch {
    t(`[asciicast] Failed to rename recording from ${p} to ${h}`);
  }
}

async function Re(e, r, o) {
  CUs(await e.move(r, o)), await ye(N(Np(), r.projectKey, r.sessionId)).catch(() => {});
}

function rGe(e) {
  if (!e || !kvn(e.hooks)) {
    yYn(void 0);
    return;
  }
  let r = !bd("hooks") || oK(e.source), o = o_e(e);
  if (r && o) {
    yYn(Cue(e) ? Z(e.hooks, "personal") : itt(e.source) ? Z(e.hooks, "checkout") : e.hooks);
    return;
  }
  if (r && !o) OAe(e, "mainThread");
  yYn(void 0);
}

function Z(e, r) {
  let o = {};
  for (let n of up) {
    let s = e[n];
    if (s !== void 0) o[n] = s.map(u => r === "personal" ? {
      ...u,
      personal: !0
    } : {
      ...u,
      checkout: !0
    });
  }
  return o;
}

import { dirname as ne, resolve as Pe, win32 as ie } from "path";

import { realpathSync as ve, statSync as be } from "fs";

var ee = Ue({
  recorded: null
}, e => {
  e.recorded = null;
});

function eJn({sourceSessionId: e, transcriptPath: r}) {
  let o = Vt(e);
  ee.recorded = o === null ? null : {
    liveSessionId: q(),
    source: {
      sessionId: o,
      transcriptPath: r ?? Lf(o)
    }
  };
}

function gjr() {
  let {recorded: e} = ee;
  return e !== null && e.liveSessionId === q() ? e.source : null;
}

function Ae(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type !== "assistant") continue;
    let n = o.message.content.find(l => l.type === "tool_use" && l.name === eC);
    if (!n || n.type !== "tool_use") continue;
    let s = n.input;
    if (s === null || typeof s !== "object") return [];
    let u = LKe().safeParse(s.todos);
    return u.success ? u.data : [];
  }
  return [];
}

function hjr(e) {
  if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag) return !1;
  let r = Vt(e.resume);
  if (!r) return !1;
  return Z_(mS(r), "resume"), !0;
}

function fbt(e, r, o, n) {
  try {
    zAe(e.messages ?? []);
  } catch (s) {
    d(s);
  }
  if (ZXn().then(WPn).catch(d), e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0) MYt(e.fileHistorySnapshots, s => {
    r(u => ({
      ...u,
      fileHistory: s
    }));
  });
  if (import.meta.require("./chunk-e93mtdn4.js").restoreGoalFromTranscript(e.messages, r, o), 
  !hP() && e.messages && e.messages.length > 0) {
    let s = Ae(e.messages);
    if (s.length > 0) {
      let u = q();
      r(l => ({
        ...l,
        todos: {
          ...l.todos,
          [u]: s
        }
      }));
    }
  }
}

function Te(e) {
  return;
}

function mbt(e, r) {
  if (!e && !r) return;
  return {
    name: e ?? "",
    color: r === "default" ? void 0 : r
  };
}

function Bge(e, r, o, n) {
  if (r) return {
    agentDefinition: r,
    agentType: void 0
  };
  if (!e) return vae(void 0), rGe(void 0), {
    agentDefinition: void 0,
    agentType: void 0
  };
  let s = n?.sessionAgentDefinitions ? O4(n.sessionAgentDefinitions.activeAgents, e) : void 0, u = s ?? O4(o.activeAgents, e);
  if (s) t(`Resume: agent "${e}" restored from the session home set (${n?.sessionCwd ?? "unknown"})`);
  if (!u) {
    if (t(`Resumed session had agent "${e}" but it is no longer available. Using default behavior.`), 
    e !== fVe.agentType) {
      if (f("session_resume", "agent_resolve_miss"), n?.onResolveMiss) {
        let l = ke(), m = n.sessionAgentDefinitions && n.sessionCwd && n.sessionCwd !== l ? `${n.sessionCwd} or ${l}` : l;
        n.onResolveMiss(En(`This session was running agent '${e}', which is no longer available (no agent by that name in ${m}). ` + "Continuing with the default tools and system prompt \u2014 the agent's tool restrictions no longer apply. " + "To restore it, re-create the agent, or resume with an explicit --agent <name>."));
      }
    }
    return vae(void 0), rGe(void 0), {
      agentDefinition: void 0,
      agentType: void 0
    };
  }
  if (vae(u.agentType), rGe(u), !ic() && u.model && u.model !== "inherit") {
    let l = It(u.model);
    if (B_(l) || Xr(l)) Pp(l); else t(`Agent model "${u.model}" is not in the availableModels allowlist; keeping the session model`, {
      level: "warn"
    });
  }
  return {
    agentDefinition: u,
    agentType: u.agentType
  };
}

async function lHe(e, r) {
  if (!e || e === ke()) return;
  let o = Pe(e);
  if (Un(e) || Un(o) || Ny(e) || Ny(o) || Ny(ie.normalize(e)) || Mm(e) || Mm(o) || cl(e)) {
    t(`Resume: refusing cross-host session home shape "${e}"`);
    return;
  }
  if (await fae(e)) {
    t(`Resume: refusing session home with unverifiable ancestry "${e}"`);
    return;
  }
  if (!T0t(e)) {
    t(`Resume: not loading agents from session home "${e}" \u2014 workspace trust not persisted for it`);
    return;
  }
  try {
    return await WA(e, r);
  } catch {
    return;
  }
}

function yjr(e) {
  if (!e.resumedAgentSetting || e.mainThreadAgentType) return {
    attempt: !1,
    loud: !1
  };
  if (e.hasStreamingInput) return {
    attempt: !e.explicitAgentFlag,
    loud: !1
  };
  return {
    attempt: !0,
    loud: !0
  };
}

async function Me(e, r) {
  if (r || !e) return;
  let o = rg(e);
  if (o === void 0) return;
  if (o === "plan" || o === "bypassPermissions") return;
  if (o === "default") {
    let {isAutoModeFromFallback: n, setProvisionalStartupMode: s} = await import("./chunk-dbyyfp95.js");
    if (s(void 0), n()) return "default";
    return;
  }
  if (o === "auto") {
    let {isAutoStartWithheldForHipaaTaint: n} = await import("./chunk-dbyyfp95.js");
    if (n() || gl("hipaa")) return;
    let {isAutoModeGateEnabled: s} = await import("./chunk-yn7kcbe7.js");
    if (!s()) return;
  }
  return o;
}

async function gbt({storedPermissionMode: e, messages: r, forkSession: o, permissionModeSuppliedOnInvocation: n, lane: s}) {
  let u;
  try {
    ({planModeOnInteractiveResume: u} = await import("./chunk-rcvbma7x.js"));
  } catch (l) {
    d(l);
  }
  return l => {
    if (u === void 0) return;
    try {
      let m = l.startupModeDecidedByProactivityLevel !== void 0 && AR();
      return u(l, {
        storedPermissionMode: e,
        messages: r,
        forkSession: o,
        startupModePinned: n || m,
        lane: s
      });
    } catch (m) {
      d(m);
      return;
    }
  };
}

var _e = {
  unknown_family: "not a model this version of Claude Code recognizes",
  not_allowed: "not allowed by this account's model settings",
  retired: "retired"
};

function mZe() {
  return Boolean(ic() !== void 0 || a.ANTHROPIC_MODEL || a.ANTHROPIC_DEFAULT_FABLE_MODEL || a.ANTHROPIC_DEFAULT_OPUS_MODEL || a.ANTHROPIC_DEFAULT_SONNET_MODEL || a.ANTHROPIC_DEFAULT_HAIKU_MODEL || aBe() || !su());
}

async function dHe(e, r, o, {scheduleTelemetry: n = l => l(), storageV5: s, credentials: u} = {}) {
  if (mZe()) return;
  let l = L(e, r), m = l.kind === "declined" && l.reason === "not_allowed" ? await Whe(l.model, s, u) : void 0;
  if (m !== void 0 && mZe()) return;
  let p = m === "overturned" ? L(e, r) : l;
  if (p.kind === "none") return;
  if (p.kind === "mode_dependent_setting") {
    n(() => i("tengu_resume_model_restore", {
      outcome: c("skipped_mode_dependent_setting"),
      is_eap: !1
    }));
    return;
  }
  if (p.kind === "declined") n(() => i("tengu_resume_model_restore", {
    outcome: c("declined"),
    decline_reason: pe(p.reason),
    entitlement_reprobe: pe(m),
    is_eap: Axe(p.model)
  }));
  if (p.kind === "declined") {
    let h = r && On(r) || "the default model";
    o?.(`Session model ${p.model} could not be restored (${_e[p.reason]}) \u2014 using ${h} instead.`);
    return;
  }
  return p.model;
}

function _jr(e, r) {
  let o = L(e, r);
  return o.kind === "ok" ? o.model : void 0;
}

function Ie(e, r) {
  if (e === "opusplan") return r.includes("opus") || r.includes("sonnet");
  if (e === "haiku") return r.includes("haiku") || r.includes("sonnet");
  return !1;
}

function L(e, r) {
  let o = new Set(gLs.map(u => Ke(u))), n = r ? It(r) : void 0, s = n ? On(n) : void 0;
  for (let u = e.length - 1; u >= 0; u--) {
    let l = e[u];
    if (l?.type !== "assistant" || l.isMeta || typeof l.message?.model !== "string" || l.message.model === Bi) continue;
    let m = l.message.model, p = zh(), h = typeof p === "string" ? Mt(p) : p;
    if (LO(h) && !Axe(m) && Ie(h, Ke(m))) return {
      kind: "mode_dependent_setting"
    };
    let y = fCr(m), S = !(o.has(Ke(m)) || Axe(m) || y !== void 0 && kCr(y) || On(m) === s) ? "unknown_family" : !B_(m) && !Xr(m) ? "not_allowed" : wZ(m) ? "retired" : void 0;
    if (S) return {
      kind: "declined",
      model: m,
      reason: S
    };
    let k = (r && sf(r) || n !== void 0 && sf(n)) && (On(m) === s || r && Ke(It(On(r))) === Ke(m)), R = PCn(e)?.modelId, P = R !== void 0 && sf(R) && Ke(On(R)) === Ke(m);
    if ((k || P) && xZ(m)) return {
      kind: "ok",
      model: m + "[1m]"
    };
    return {
      kind: "ok",
      model: m
    };
  }
  return {
    kind: "none"
  };
}

function se(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && o.subtype === "model_refusal_fallback") return o;
  }
  return;
}

function Ce(e, r) {
  let o = se(e);
  if (!o) return !1;
  let n = On(o.fallbackModel), s = On(r);
  return n === s || Ke(n) === Ke(s);
}

function hbt(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && o.subtype === "model_refusal_fallback") o.neutralizedByFork = !0;
  }
}

function Ee(e) {
  let r = se(e);
  return r?.neutralizedByFork === !0 ? {
    fallbackModel: r.fallbackModel
  } : void 0;
}

function _(e, r) {
  i("tengu_resume_model_restore", {
    outcome: c(e),
    is_eap: Axe(r)
  });
}

function te(e, r) {
  kbt(import("./chunk-mv1vv0rf.js").then(o => o.fetchBootstrapData(e, r)));
}

function cHe(e, r, o, n, s) {
  if (!Ce(e, r)) return Pp(r), te(n, s), _("restored", r), r;
  if (o) {
    i("tengu_refusal_fallback_resume_latch", {
      action: c("fork_skip_restore")
    }), _("skipped_fork_fallback", r);
    return;
  }
  let u = Ee(e);
  if (u && On(u.fallbackModel) === On(r)) {
    i("tengu_refusal_fallback_resume_latch", {
      action: c("fork_neutralized_skip")
    }), _("skipped_fork_neutralized", r);
    return;
  }
  return Pp(r), te(n, s), V$t({
    fallbackModel: r,
    previousOverride: void 0,
    previousAppStateModel: pD() ?? null,
    previousModelForSession: null
  }), _("restored", r), i("tengu_refusal_fallback_resume_latch", {
    action: c("model_latch_only")
  }), r;
}

function uHe(e, r) {
  if (r) return;
  let o = e.flatMap(n => n?.type === "system" && n.subtype === "model_refusal_fallback" && (n.apiRefusalCategory === "cyber" || n.sawCyberRefusal === !0) && n.neutralizedByFork !== !0 ? [ n ] : []);
  if (o.length > 0) G$t(o.find(n => n.apiRefusalCategory === "cyber" && n.requestId != null)?.requestId ?? void 0), 
  i("tengu_refusal_fallback_resume_latch", {
    action: c("header_rearmed")
  });
}

async function De(e, r, o, n, s) {
  if (!e) return n;
  return Dke(r, o, s);
}

async function Dke(e, r, o) {
  wr().agentDefinitions.clear();
  let n = await WA(e, o);
  return $de(n, [ ...n.allAgents, ...r ]);
}

function oe(e) {
  try {
    return ve(e);
  } catch {
    return e;
  }
}

function re(e) {
  try {
    return be(e).isDirectory() ? "present" : "gone";
  } catch (r) {
    let o = E(r);
    return o === "ENOENT" || o === "ENOTDIR" ? "gone" : "inaccessible";
  }
}

var x = "The worktree binding could not be cleared because transcript saving is off";

function Phn(e, r) {
  if (e.reason === "pin-is-own-launch-tree") return `Error: ${bg(e.message)} The worktree binding is kept.\n`;
  if (!e.poisoned) return `Error: could not verify worktree ${bg(e.worktreePath)} for this resume, so the resume was aborted rather than continuing without isolation. This is usually transient \u2014 the worktree binding is kept; re-run the command to retry.\n`;
  let o = r?.bindingCleared === void 0 ? "" : r.bindingCleared ? " The worktree binding has been cleared; re-running will continue in the current directory without worktree isolation." : ` ${x} for this run, so the same command will be refused again until that is resolved; to continue without the worktree, re-run with --fork-session or start a new conversation.`;
  return `Error: cannot resume into worktree ${bg(e.worktreePath)}: ${bg(e.message)} This session was not started.${o}\n`;
}

function bjr(e, r) {
  let o = r.bindingCleared ? "The worktree binding has been cleared." : `${x} for this run; a later resume will re-check it.`;
  return `Notice: the worktree ${bg(e.worktreePath)} for this session no longer exists; continuing in the current directory without worktree isolation. ${o}\n`;
}

function ybt(e) {
  let r = `${x}; a later --resume will re-check it.`;
  if (e.reason === "worktree-gone") return `Your worktree ${bg(e.worktreePath)} no longer exists, so this session is working in the current directory without worktree isolation. ${Va() ? r : "The worktree binding has been cleared."}`;
  if (e.reason === "pin-is-own-launch-tree") return `Could not re-enter your worktree ${bg(e.worktreePath)}: ${bg(e.message)} The worktree binding is kept.`;
  if (e.poisoned) {
    let o = Va() ? `You are working in the current directory without worktree isolation. ${r}` : "This session's worktree binding has been cleared; you are working in the current directory without worktree isolation.";
    return `Did not re-enter your worktree ${bg(e.worktreePath)}: ${bg(e.message)} ${o}`;
  }
  return `Could not verify your worktree ${bg(e.worktreePath)} this time, so this session is working in the current directory without worktree isolation. The worktree binding is kept and a later --resume will retry it. If this keeps happening, the worktree's git metadata may need repair.`;
}

var Fe = "Memory is still paused from";

function tJn() {
  return;
}

var Oe = "Auto-memory is still off for this session";

function nJn() {
  return;
}

function _bt(e) {
  for (let [r, o] of [ [ tJn(), Fe ], [ nJn(), Oe ] ]) {
    if (r === void 0) continue;
    let n = e.findLastIndex(s => s.type === "system" && s.subtype === "informational" && typeof s.content === "string" && s.content.includes(o));
    if (n !== -1 && !e.slice(n + 1).some(s => s.type === "user" || s.type === "assistant")) continue;
    e.push(Wt(r, "notice"));
  }
}

function B(e) {
  if (Cs(e) || Ny(e) || Ny(ie.normalize(e))) return t("[sessionRestore] transcript path is a network/NT-namespace path \u2014 not chdir-ing", {
    level: "warn"
  }), !0;
  return !1;
}

function pHe(e, r, o, n) {
  let s = Ne(r, o, n);
  return e.record(s), s;
}

function Ne(e, r, o) {
  let n = rc();
  if (n && o?.preserveBinding !== !0) return t0(n), null;
  if (!e) {
    if (e === null) return i("tengu_worktree_resume_root_rejected", {
      reason: b("worktree-exited-resume"),
      poisoned: b("false")
    }), t("[worktree] resuming a session whose worktree record was cleared (exited or scrubbed): running without isolation"), 
    null;
    if (!r || le() === r) return null;
    if (B(r)) return null;
    if (SI(r)) return t("[worktree] resume: the recorded project path has a network spelling; staying put"), 
    null;
    try {
      ag(r);
    } catch {
      return null;
    }
    if (yp(r), dDe(r, _2e(wTe))) px(le());
    return wAe(), c3("resume"), Fd.cache.clear?.(), LS(o?.storageV5), Pee(), iMr(), 
    yd()?.refreshGitBranch?.(), null;
  }
  let s = o?.preserveBinding === !0;
  if (B(e.worktreePath) || Ly(e.worktreePath) || el(e.worktreePath) || gS(e.worktreePath) || Pf(__, e.worktreePath, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0) {
    if (!s) t0(null);
    return i("tengu_worktree_resume_root_rejected", {
      reason: b("network-spelled-pin"),
      poisoned: b("true")
    }), {
      worktreePath: e.worktreePath,
      reason: "invalid-linked-worktree",
      message: "its recorded path has a network spelling, which can never be a local isolation worktree.",
      poisoned: !0
    };
  }
  let u = re(e.worktreePath);
  if (u === "gone") {
    if (!s) t0(null);
    return i("tengu_worktree_resume_root_rejected", {
      reason: b("worktree-gone"),
      poisoned: b("true")
    }), {
      worktreePath: e.worktreePath,
      reason: "worktree-gone",
      message: "the worktree directory no longer exists",
      poisoned: !0
    };
  }
  if (u === "inaccessible") return t(`[worktree] could not examine ${e.worktreePath} on resume; keeping the binding`, {
    level: "error"
  }), i("tengu_worktree_resume_root_rejected", {
    reason: b("unverifiable"),
    poisoned: b("false")
  }), {
    worktreePath: e.worktreePath,
    reason: "unverifiable",
    message: "the worktree directory could not be examined right now",
    poisoned: !1
  };
  let l = o?.liveLaunchDir ?? wTe, m = zer(le(), e.worktreePath), p = Kns(e.worktreePath, Qx(e.originalCwd), D([ oe(l), ...Qx(l), oe(wTe), ...Qx(wTe) ]), {
    declineSelfOwningPinUnderLiveRoot: !0
  });
  if (!p.ok) {
    let h = p.reason !== "unverifiable" && p.reason !== "pin-is-own-launch-tree";
    if (t(`[worktree] declining to resume into ${e.worktreePath} (${p.reason}): ${p.message}`, {
      level: "error"
    }), i("tengu_worktree_resume_root_rejected", {
      reason: c(p.reason),
      poisoned: b(h ? "true" : "false")
    }), h) {
      if (!s) t0(null);
      if (m) {
        let y = ne(e.worktreePath), S = re(y) === "present" ? y : e.originalCwd;
        if (zer(S, e.worktreePath)) return {
          worktreePath: e.worktreePath,
          reason: p.reason,
          message: p.message,
          poisoned: h
        };
        try {
          ag(S), yp(S);
          let A = T => q2(T, e.worktreePath) === "same", k = e2(e.worktreePath), R = k !== null ? [ k ] : [], P = [ ...Qx(l), ...R ].filter(T => !A(T));
          if (dDe(S, P, {
            requireCovered: !0
          })) px(S);
          wAe(), c3("resume"), iMr(), Fd.cache.clear?.(), LS(o?.storageV5), Pee(), yd()?.refreshGitBranch?.();
        } catch {}
      }
    }
    return {
      worktreePath: e.worktreePath,
      reason: p.reason,
      message: p.message,
      poisoned: h
    };
  }
  try {
    ag(e.worktreePath);
  } catch (h) {
    let y = E(h);
    if (y === "ENOENT" || y === "ENOTDIR") {
      if (!s) t0(null);
      return i("tengu_worktree_resume_root_rejected", {
        reason: b("worktree-gone"),
        poisoned: b("true")
      }), {
        worktreePath: e.worktreePath,
        reason: "worktree-gone",
        message: "the worktree directory no longer exists",
        poisoned: !0
      };
    }
    return i("tengu_worktree_resume_root_rejected", {
      reason: b("unverifiable"),
      poisoned: b("false")
    }), {
      worktreePath: e.worktreePath,
      reason: "unverifiable",
      message: "the worktree directory could not be entered right now",
      poisoned: !1
    };
  }
  return yp(e.worktreePath), px(le()), GTt({
    ...e,
    liveLaunchAnchor: l,
    originalChangeset: void 0
  }), wAe(), c3("resume"), Fd.cache.clear?.(), LS(o?.storageV5), Pee(), yd()?.refreshGitBranch?.(), 
  null;
}

function Sjr(e, r) {
  let o = rc();
  if (!o) return;
  if (GTt(null), wAe(), c3("resume"), o.worktreePath === e) {
    Fd.cache.clear?.(), LS(r);
    return;
  }
  if (B(o.originalCwd)) return;
  if (SI(o.originalCwd)) {
    t("[worktree] exit: the recorded original cwd has a network spelling; staying put");
    return;
  }
  try {
    ag(o.originalCwd);
  } catch {
    return;
  }
  yp(o.originalCwd);
  let n = o.liveLaunchAnchor;
  if (n === void 0 || dDe(o.originalCwd, _2e(n, o.worktreePath), {
    requireCovered: !0,
    coveredWitnesses: Qet(n, o.worktreePath),
    extraCoveredRoots: (() => {
      let s = e2(o.worktreePath);
      return s !== null ? [ s ] : [];
    })()
  })) px(le());
  Fd.cache.clear?.(), LS(r), Pee(), yd()?.refreshGitBranch?.();
}

async function Ihn(e, r, o) {
  gZe(o.session.host);
  let n = o.modeApi?.matchSessionMode(e.mode);
  if (n) e.messages.push(Wt(n, "warning"));
  let s = Z2o({
    ...e,
    source: r.resumeSource ?? "file"
  }, g => e.messages.push(Wt(g, "warning"))), {adoptedSessionId: u, effectiveFork: l} = J$e(r.sessionIdOverride ?? e.sessionId, r.forkSession);
  if (u) Z_(u, "resume", r.transcriptPath ? ne(r.transcriptPath) : null), await xhn(o.session, o.storageV5), 
  await U3();
  if (l) {
    if (await BLe(e, {
      stripWorktreeSession: !0,
      stripRelocatedCwd: !0,
      storageV5: o.storageV5
    }), e.contentReplacements?.length) await uce(e.contentReplacements, void 0, o.storageV5);
  } else jW(e, {
    storageV5: o.storageV5
  });
  if (jge(s.declined === !0), _bt(e.messages), U_e(e), !l) {
    let g = pHe(cJ.of(o.session.host), e.worktreeSession, void 0, {
      storageV5: o.storageV5
    });
    if (g) e.messages.push(Wt(ybt(g), "warning"));
    if (z() && o.storageV5 !== void 0) await D_e(o.storageV5); else H_e();
  }
  let m = await lHe(e.projectPath, o.storageV5), {agentDefinition: p, agentType: h} = Bge(e.agentSetting, o.mainThreadAgentDefinition, o.agentDefinitions, {
    sessionAgentDefinitions: m,
    sessionCwd: e.projectPath,
    onResolveMiss: g => e.messages.push(Wt(g, "warning"))
  }), y = e.permissionMode, S = !1;
  if (!o.permissionModeCliSet && rg(y) === "auto" && o.initialState.proactivityLevel === "ask" && !Sz()) y = Jue("ask", {
    isAutoModeAvailable: !1,
    isBypassPermissionsModeAvailable: !1
  }, void 0), S = !0, t(`[sessionRestore] stored mode 'auto' read as '${y}': proactivity 'ask' with levels off in this process`);
  let A = o.initialState.toolPermissionContext.startupModeDecidedByProactivityLevel !== void 0 && AR(), k = await Me(y, o.permissionModeCliSet || A);
  if (S) {
    let g = k ?? o.initialState.toolPermissionContext.mode;
    if (g !== "auto") e.messages.push(Wt(`Resumed in ${X0(g).toLowerCase()} mode instead of auto: this session is set to ask before each file edit, and auto mode alone would not. Press shift+tab to switch modes.`, "warning"));
  }
  let R = null;
  if (l) hbt(e.messages);
  let P = await dHe(e.messages, o.initialState.mainLoopModel, g => e.messages.push(Wt(g, "warning")), {
    storageV5: o.storageV5,
    credentials: o.credentials
  }), T = P ? cHe(e.messages, P, l, o.storageV5, o.credentials) : void 0;
  uHe(e.messages, l), bbt(e.messages, {
    fork: l,
    startup: !0
  });
  let v;
  if (k) {
    let {transitionPermissionMode: g} = await import("./chunk-yn7kcbe7.js"), C = o.initialState.toolPermissionContext;
    try {
      if (v = {
        ...g(C.mode, k, C),
        mode: k
      }, !C.proactivityBaseline?.fromRelaunchHandoff) v = {
        ...v,
        proactivityBaseline: {
          mode: k,
          fromRelaunchHandoff: !1
        }
      };
    } catch (de) {
      t(`[sessionRestore] transitionPermissionMode rejected restored mode '${k}': ${de}`);
    }
  }
  v = (await gbt({
    storedPermissionMode: y,
    messages: e.messages,
    forkSession: l,
    permissionModeSuppliedOnInvocation: o.permissionModeSuppliedOnInvocation,
    lane: "interactive"
  }))(v ?? o.initialState.toolPermissionContext) ?? v, WW(o.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
  let H = r.includeAttribution ? Te(e) : void 0, j = mbt(e.agentName, e.agentColor), I = o.initialState.standaloneAgentContext ? {
    ...j,
    ...o.initialState.standaloneAgentContext
  } : j;
  fbe(I?.name, o.storageV5, {
    autoOnly: !e.customTitle && !o.initialState.standaloneAgentContext?.name
  });
  let ae = await De(!!n, o.currentCwd, o.cliAgents, o.agentDefinitions, o.storageV5), W = o.initialState.initialMessage;
  if (a.CLAUDE_CODE_RESUME_INTERRUPTED_TURN && e.turnInterruptionState?.kind === "interrupted_prompt" && Vh(e.turnInterruptionState.message.origin)) t("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn"), 
  Pxn("repl_restore", e.turnInterruptionState.message, {
    tail: e.turnInterruptionState.tail
  }), Ixn(e.messages, e.turnInterruptionState.message), W = {
    message: e.turnInterruptionState.message
  };
  let M = o.initialState;
  eJn({
    sourceSessionId: r.sessionIdOverride ?? e.sessionId,
    transcriptPath: r.transcriptPath
  });
  let U = koe();
  return import.meta.require("./chunk-e93mtdn4.js").restoreGoalFromTranscript(e.messages, g => {
    M = g(M);
  }, U), {
    messages: e.messages.filter(g => !(g.type === "system" && (g.subtype === "bridge_status" || g.subtype === "cloud_session_status"))),
    sessionStartHooks: e.sessionStartHooks,
    fileHistorySnapshots: e.fileHistorySnapshots,
    contentReplacements: e.contentReplacements,
    agentName: e.agentName,
    agentColor: e.agentColor === "default" ? void 0 : e.agentColor,
    restoredAgentDef: p,
    initialState: {
      ...M,
      initialMessage: W,
      ...!l && e.bridgeSessionId && !(M.replBridgeEnabled && !M.replBridgeOutboundOnly) && {
        replBridgeEnabled: !0,
        replBridgeOutboundOnly: !1
      },
      ...e.endedByModel ? {
        endedByModel: !0
      } : {},
      ...h && {
        agent: h
      },
      ...R && {
        attentionBudget: R
      },
      ...T && {
        mainLoopModel: T
      },
      ...H && {
        attribution: H
      },
      ...I && {
        standaloneAgentContext: I
      },
      ...v && {
        toolPermissionContext: v
      },
      agentDefinitions: ae
    },
    sessionHooks: U
  };
}

function bbt(e, r) {}

export { rGe, xhn, q2o, ZXn, Mke, Hke, Y2o, eJn, gjr, hjr, fbt, mbt, Bge, lHe, yjr, gbt, mZe, dHe, _jr, hbt, cHe, uHe, Dke, Phn, bjr, ybt, tJn, nJn, _bt, pHe, Sjr, Ihn, bbt };
