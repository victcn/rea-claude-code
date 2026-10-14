// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { x, Mr, l } from "./chunk-b0z4bv3v.js";

import { K, B, Dme, sMe, kI } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { _, $C, t } from "./chunk-kawq2919.js";

import { tw } from "./chunk-z52kmxx4.js";

import { Ct } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { Dt, le } from "./chunk-cqgvwwgb.js";

import { mj, Fie, Ld, xC, Xt, kKn, oNt } from "./chunk-q6wab2jw.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { kE } from "./chunk-jnzpsr0d.js";

import { rX, ZKn, Z9e, oOe, nan } from "./chunk-pvmwc6wy.js";

import { dn } from "./chunk-nnrb0acr.js";

import { fe, dt, Rn, xfe, gmt, nin, hmt } from "./chunk-dd98x6x7.js";

import { ADe, Y6, O2 } from "./chunk-kmph7cxf.js";

import { Ud } from "./chunk-9tdwgnpn.js";

import { Dpe, Et, Bo, LR, Wz, Lpe, $P, FP, zz, XN, Xr, OPe, Il, MH, lrn, V3e, ip, $pt, UZ, Ig, k, tve, k0t, BR, Ce, ce, v8e, z0, ia, nIe } from "./chunk-xywp7esx.js";

import { hAs, DMt, iZ, D1n, L1n } from "./chunk-gmq0qwep.js";

import { X7, q8 } from "./chunk-4y2m4xpx.js";

import { bs, mK } from "./chunk-zzhmvqjt.js";

import { Byo, ven, Tg, Wyo, tpe, GBn } from "./chunk-8es5wy4r.js";

import { P7t, Jlt, axe, iFn, ows, sws } from "./chunk-4v78v8fd.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { Wce, tYe } from "./chunk-sqb9meyh.js";

import { VF, upe, L1 } from "./chunk-xmqqa853.js";

import { UTe } from "./chunk-ce64fmea.js";

import { PUe } from "./chunk-ep1bh0vt.js";

import { W0e, UYt, WRn, grs, OTt, aPn, BM, C3, IW, X5t, DPn, LPn, Xdr, pis, Hcr, RQ, O3, TS, WM, db, Ky, Jde, kre, v_e, DW, Zot } from "./chunk-84yp45y8.js";

import { sm, ube } from "./chunk-bv9f914r.js";

import { es } from "./chunk-e937g4pd.js";

import { fN } from "./chunk-wgsx43va.js";

import { Ra } from "./chunk-dyg54fn6.js";

import { kst, Nfr } from "./chunk-48xcyvwy.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { uMt, AEr, xen } from "./chunk-bdevabaf.js";

import { uue, BLn } from "./chunk-3znaqeaq.js";

import { az, kR, Wlt, Uoe, Boe, Tmo } from "./chunk-rshryz75.js";

import { ev } from "./chunk-gwz0gszt.js";

import { bXo } from "./chunk-h6bn01m9.js";

import { WI } from "./chunk-k48604rx.js";

import { qEn, YEn } from "./chunk-g8dhxbna.js";

import { ODe } from "./chunk-n0q538yk.js";

import { t5r } from "./chunk-6njqwz79.js";

import { E1n, W_o, z_o } from "./chunk-f4pq99ck.js";

import { S4t } from "./chunk-mecjydk9.js";

import { TDe, HVt, HEn, DEn, LEn } from "./chunk-k5x3qcc3.js";

import { j2e, vnr, DVt, LVt } from "./chunk-abbgyr9n.js";

import { Enr } from "./chunk-qsfrt3tm.js";

import { a5r, FEn } from "./chunk-11vrrr4j.js";

import { UEn } from "./chunk-qbgprj8m.js";

import { Uhe } from "./chunk-bj6x9mdy.js";

import { LTe, aw, Dk, au, vB, m5r, g5r, $le, Tne } from "./chunk-qfnejzxe.js";

import { eKt } from "./chunk-v7mfmqmn.js";

import { xpe, Qse } from "./chunk-whs0esmw.js";

import { VK } from "./chunk-3kd8r7rn.js";

import { iu } from "./chunk-8v8fjzek.js";

import { sn } from "./chunk-642shbw5.js";

import { W$s } from "./chunk-g7z9901y.js";

import { N, D } from "./chunk-hmqkrrtz.js";

function lo(n) {
  return Sr("themes") && Boolean(WI(n)) ? `${n} (disabled in safe mode)` : n;
}

var _nr = n => ({
  id: "theme",
  label: "Theme",
  value: lo(n.themeSetting),
  type: "managedEnum",
  options: oOe,
  optionsHint: "For custom themes, use /theme.",
  onChange: n.setTheme
});

function de(n, s) {
  return v_e() ? s : n;
}

function bnr(n) {
  switch (n) {
   case "terminal_bell":
    return "bell";

   case "iterm2_with_bell":
    return "iterm2+bell";

   case "notifications_disabled":
    return "none";

   default:
    return n;
  }
}

var Ue = [ "never", "60s", "5m", "10m" ], He = [ "default", "60s", "5m", "10m", "never" ], $e = [ "default", ...oNt ];

function Snr() {
  return {
    ...!1,
    askUserQuestionTimeout: gmt(),
    dialogExpiry: nin(),
    crossSessionInbound: Be("crossSessionInbound")?.value,
    modelProposedGoals: hmt(),
    enableArtifact: uMt().enabled
  };
}

function Be(n) {
  return xfe(n).find(s => dn(s.source));
}

function ke(n) {
  let s = Be(n)?.source;
  return s !== void 0 && s !== "userSettings";
}

function uo(n) {
  return n === "model" || n === "fast" || n === "thinking" || n === "useAutoModeDuringPlan" || n === "autoCompact" || n === "autoContinueAtUsageLimit" || n === "precomputeCompactionEnabled" || n === "checkpoints" || n === "outputStyle" || n === "defaultView";
}

function PVt() {
  let n = ce(), s = dt();
  return {
    ...n,
    theme: s.theme ?? j(n, "theme"),
    editorMode: s.editorMode ?? j(n, "editorMode"),
    verbose: s.verbose ?? j(n, "verbose"),
    preferredNotifChannel: s.preferredNotifChannel ?? j(n, "preferredNotifChannel"),
    autoCompactEnabled: s.autoCompactEnabled ?? j(n, "autoCompactEnabled"),
    autoScrollEnabled: s.autoScrollEnabled ?? j(n, "autoScrollEnabled"),
    fileCheckpointingEnabled: s.fileCheckpointingEnabled ?? j(n, "fileCheckpointingEnabled"),
    showTurnDuration: s.showTurnDuration ?? j(n, "showTurnDuration"),
    showMessageTimestamps: s.showMessageTimestamps ?? j(n, "showMessageTimestamps"),
    terminalProgressBarEnabled: s.terminalProgressBarEnabled ?? j(n, "terminalProgressBarEnabled"),
    todoFeatureEnabled: s.todoFeatureEnabled ?? j(n, "todoFeatureEnabled"),
    teammateMode: s.teammateMode ?? j(n, "teammateMode"),
    remoteControlAtStartup: v8e(),
    autoUploadSessions: s.autoUploadSessions ?? k0t("autoUploadSessions", n.autoUploadSessions),
    inputNeededNotifEnabled: s.inputNeededNotifEnabled ?? j(n, "inputNeededNotifEnabled"),
    agentPushNotifEnabled: s.agentPushNotifEnabled ?? j(n, "agentPushNotifEnabled")
  };
}

function j(n, s) {
  return tve(s, n[s]) ?? BR[s];
}

function fo() {
  let n = OPe();
  return [ "default", ...VK.filter(s => (n || !s.includes("fable")) && !m5r(s) && !g5r(s) && Xr(s)) ];
}

var co = new Map([ [ "jp", "ja" ], [ "kr", "ko" ], [ "cn", "zh" ], [ "tw", "zh-Hant" ] ]);

function go(n) {
  let s = Xt(n).trim();
  if (!s || s.toLowerCase() === "default") return "default";
  if (s.length <= 3) {
    let r = s.toLowerCase(), u = co.get(r) ?? r;
    try {
      let p = W$s().of(u);
      if (p && p !== u) return p;
    } catch {}
  }
  return s.split(/\s+/).map(r => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join(" ");
}

var pe = () => {}, Ve = {
  setGlobalConfig: pe,
  setSettingsData: pe,
  changeLog: {
    record: pe,
    clear: pe,
    toggle: pe
  }
};

function po(n) {
  return Ra.orgMemoryWritesRowSeen ||= n, Ra.orgMemoryWritesRowSeen;
}

function mo(n) {
  return Ra.orgMemoryReadRowSeen ||= n, Ra.orgMemoryReadRowSeen;
}

function So(n) {
  return Ra.remoteHomeSettingsRowSeen ||= n, Ra.remoteHomeSettingsRowSeen;
}

function pXo() {
  return !1;
}

var QYr = {
  unsupported: "Could not turn this on: forwarding settings to cloud sessions is not available in this version",
  flag_off: "Could not turn this on: forwarding settings to cloud sessions is not enabled for you right now"
}, ZYr = "Could not save this to the config file, so nothing changed.";

function B2e(n) {
  let {globalConfig: s, settingsData: r, themeSetting: u, currentOutputStyle: p, currentLanguage: m, externalIncludesApproved: S, thinkingEnabled: C, verbose: y, mainLoopModel: M, currentModel: w, isFastMode: I, promptSuggestionEnabled: O, awaySummaryEnabled: Q, showDefaultViewPicker: ne, pushTogglesVisible: te, crossSessionInboxRowVisible: oe, isConnectedToIde: V, inAppSelection: ie, isFileCheckpointingAvailable: ae, workflowsToggleable: Y, workflowSizeGuidelineToggleable: Z, autoContinueAtUsageLimitToggleable: Xe, artifactToggleable: Ze, remoteToolServingOn: eo, launchDirectoryKeys: xo, shouldShowExternalIncludesToggle: oo, autoUpdaterDisabledReason: no, modelSwitchHooks: L, setAppState: q, setTheme: to, setGlobalConfig: v, setSettingsData: T, changeLog: U, storageV5: H, promptSuggestionRun: io, mayBeAuthoredByNonOwner: so} = n;
  function F(e) {
    return z() && H !== void 0 ? Rn("userSettings", e, void 0, H) : Rn("userSettings", e);
  }
  function Se(e) {
    return z() && H !== void 0 ? Rn("localSettings", e, void 0, H) : Rn("localSettings", e);
  }
  function W(e, o) {
    if (z() && H !== void 0) mK(e, o, H); else mK(e, o);
  }
  function G(e) {
    if (z() && H !== void 0) Ce(e, H); else Ce(e);
  }
  async function Me(e, o) {
    i("tengu_config_model_changed", {
      from_model: Et(M),
      to_model: Et(e)
    });
    let h = Tne(e), E = e === null ? XN(Il(), "switch") : null;
    if (E !== null) return {
      error: new Mr(E, "default model blocked by managed settings")
    };
    let R = "";
    if (L) {
      let {session: X, readState: we} = L;
      if (O3(X) || WM.of(X).pending > 0) {
        let ao = ++L.latestPick.current, re = await db(X, () => Dk(X, we, e, "command"));
        if (ao !== L.latestPick.current) return;
        if (re.decision !== "proceed") return f("model_switch", "blocked_by_hook"), {
          error: new Mr(vB(e, re.decision === "ask" ? `${re.reason ?? "confirmation required"} (run /model to confirm)` : re.reason, re.messages), "model switch blocked by a PreModelSwitch hook")
        };
        if (re.messages.length > 0) R = ` \xb7 ${re.messages.map(au).join(" \xb7 ")}`;
      }
      TS(X, we(), e, "command");
    }
    if (o !== void 0) q8(o, $le(e), void 0, H);
    if (Dme(), Bo()) zz();
    let A = !1, P = !1;
    q(X => (A = !!X.fastMode, P = Bo() ? $P(e, X.fastMode) : A, {
      ...X,
      mainLoopModel: e,
      mainLoopModelForSession: null,
      ...o !== void 0 && {
        sessionEffort: X7(o)
      },
      ...P !== A && {
        fastMode: P
      }
    })), FP(A, P);
    let J = LTe(A, P, e);
    U.record("model", MH(e) + J + R + (h ? " \xb7 this session only \u2014 /model to set up" : ""), {
      moveToEnd: !0
    });
    let ye = h ? void 0 : await F({
      model: e ?? void 0
    }), se = J + R;
    if (ye?.error) return {
      error: ye.error,
      ...se && {
        messageSuffix: se
      }
    };
    if (se) return {
      messageSuffix: se
    };
  }
  function Te(e) {
    W("verbose", e), v(o => ({
      ...o,
      verbose: e
    })), q(o => ({
      ...o,
      verbose: e
    })), U.toggle("verbose", e);
  }
  function he(e) {
    W("preferredNotifChannel", e), v(o => ({
      ...o,
      preferredNotifChannel: e
    }));
  }
  function Oe(e) {
    W("inputNeededNotifEnabled", e), v(o => ({
      ...o,
      inputNeededNotifEnabled: e
    })), t5r(), i("tengu_push_notif_pref_changed", {
      key: b("inputNeededNotifEnabled"),
      value: e
    });
  }
  function Ae(e) {
    W("agentPushNotifEnabled", e), v(o => ({
      ...o,
      agentPushNotifEnabled: e
    })), t5r(), i("tengu_push_notif_pref_changed", {
      key: b("agentPushNotifEnabled"),
      value: e
    });
  }
  let Fe = Nfr(s.workflowSizeGuideline, tpe());
  function Pe(e) {
    if (e !== "false") {
      let d = Wlt();
      if (d !== null) return {
        error: new x(d, "Remote Control setting locked by org policy")
      };
    }
    if (e === "default") W("remoteControlAtStartup", void 0), G(d => {
      if (d.remoteControlAtStartup === void 0) return d;
      let h = {
        ...d
      };
      return delete h.remoteControlAtStartup, h;
    }), v(d => ({
      ...d,
      remoteControlAtStartup: void 0
    })); else {
      let d = e === "true";
      W("remoteControlAtStartup", d), v(h => ({
        ...h,
        remoteControlAtStartup: d
      }));
    }
    let o = Boe();
    q(d => Tmo(d, o));
    return;
  }
  function ro() {
    let e = Wlt();
    if (e !== null) return {
      id: "remoteControl",
      label: "Enable Remote Control for all sessions",
      value: "disabled",
      lock: {
        reason: e,
        source: az() ? "managed" : "policy",
        writableWhileLocked: [ "false" ]
      },
      options: [ "true", "false", "default" ],
      type: "managedEnum",
      onChange(o) {
        if (o !== "false") return {
          error: new x(e, "Remote Control setting locked by org policy")
        };
        return Pe(o);
      }
    };
    return {
      id: "remoteControl",
      label: "Enable Remote Control for all sessions",
      value: s.remoteControlAtStartup === void 0 ? "default" : String(s.remoteControlAtStartup),
      options: [ "true", "false", "default" ],
      type: "enum",
      onChange: Pe
    };
  }
  let xe = $le(w), be = lrn(xe), Ie = [ ...ev() ? [ {
    id: "defaultToAgentsView",
    label: "Open agents view by default",
    value: s.defaultToAgentsView ?? !1,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        defaultToAgentsView: e
      })), v(o => ({
        ...o,
        defaultToAgentsView: e
      }));
    }
  } ] : [], ...ODe() ? [ {
    id: "leftArrowOpensAgents",
    label: `${mj} opens agents`,
    value: s.leftArrowOpensAgents ?? !0,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        leftArrowOpensAgents: e
      })), v(o => ({
        ...o,
        leftArrowOpensAgents: e
      }));
    }
  } ] : [] ], Le = {
    id: "notifChannel",
    label: "Local notifications",
    value: s.preferredNotifChannel,
    options: [ ...rX ],
    type: "enum",
    onChange: he
  }, De = te ? [ ...BLn() ? [ {
    id: "inputNeededNotifEnabled",
    label: "Push when actions required",
    value: s.inputNeededNotifEnabled ?? !1,
    type: "boolean",
    onChange: Oe
  } ] : [], {
    id: "agentPushNotifEnabled",
    label: "Push when Claude decides",
    value: s.agentPushNotifEnabled ?? !1,
    type: "boolean",
    onChange: Ae
  } ] : [], Ne = [ {
    id: "autoCompact",
    label: "Auto-compact",
    value: s.autoCompactEnabled,
    type: "boolean",
    onChange(e) {
      W("autoCompactEnabled", e), v(o => ({
        ...o,
        autoCompactEnabled: e
      })), i("tengu_auto_compact_setting_changed", {
        enabled: e
      });
    }
  }, ...Xe ? [ {
    id: "autoContinueAtUsageLimit",
    label: "Continue automatically at usage limit",
    value: r?.autoContinueAtUsageLimit ?? !0,
    type: "boolean",
    consentGated: !0,
    async onChange(e) {
      T(d => ({
        ...d,
        autoContinueAtUsageLimit: e
      }));
      let o = await F({
        autoContinueAtUsageLimit: e
      });
      if (o?.error) {
        let d = qEn();
        return T(h => ({
          ...h,
          autoContinueAtUsageLimit: d
        })), {
          error: o.error
        };
      }
      i("tengu_quota_auto_resume_setting_changed", {
        enabled: e
      });
    }
  } ] : [], ...So(L1(VF()) || Wce() || s.remoteHomeSettingsMode === "forward") ? [ {
    id: "remoteHomeSettings",
    label: "Use this machine's settings in cloud sessions",
    value: s.remoteHomeSettingsMode === "forward" && OTt() && (VF() || !Wce()) || !1,
    isDefaultValue: !ZKn.some(e => e === s.remoteHomeSettingsMode),
    consentGated: !0,
    canWithdraw: () => Wce() && s.remoteHomeSettingsMode !== "keep_local",
    grantBlocker: upe(!0) ?? void 0,
    type: "boolean",
    onChange(e) {
      if (e) return {
        error: new Mr("Turn this on from the /config panel, which shows what will be sent")
      };
      let o = "keep_local", d = s.remoteHomeSettingsMode;
      return v(h => ({
        ...h,
        remoteHomeSettingsMode: o
      })), aPn(o, z() ? H : void 0).then(h => {
        switch (h) {
         case "written":
          return;

         case "unconfirmed":
          return {
            messageSuffix: " (could not confirm it was written to the config file; check /config after restarting Claude Code)"
          };

         case "not_stored":
          return v(E => ({
            ...E,
            remoteHomeSettingsMode: ce().remoteHomeSettingsMode
          })), {
            error: new Mr(ZYr)
          };

         case "refused":
          return v(E => ({
            ...E,
            remoteHomeSettingsMode: d
          })), {
            error: new Mr("Cloud settings forwarding is not available right now; nothing was changed")
          };
        }
      });
    }
  } ] : [], ...[], ...HEn(eo) ? [ {
    id: "unattendedServing",
    label: "Unattended commands from cloud sessions on this computer",
    value: TDe[Y6()],
    options: [ TDe.declined, TDe.accepted ],
    type: "enum",
    pickToCommit: !0,
    consentGated: !0,
    canWithdraw: DEn,
    ...O2() && {
      lock: {
        reason: HVt(),
        source: "managed",
        writableWhileLocked: [ TDe.declined ]
      }
    },
    onChange(e) {
      return LEn(e === TDe.accepted ? "accepted" : "declined").then(o => {
        if (o === "forbidden") return {
          error: new Mr(HVt())
        };
        if (v(d => ({
          ...d
        })), o === "not_saved") return {
          error: new Mr("The answer could not be saved; nothing was changed")
        };
        return;
      });
    }
  } ] : [], ...L1n() ? [ {
    id: "switchModelsOnFlag",
    label: hAs,
    value: bo(r?.switchModelsOnFlag),
    options: [ iZ.switchAutomatically, iZ.askEachTime ],
    type: "enum",
    pickToCommit: !0,
    coerce(e) {
      let o = e.trim().toLowerCase();
      if ([ "true", "1", "on", "yes" ].includes(o) || o === iZ.switchAutomatically.toLowerCase()) return iZ.switchAutomatically;
      if ([ "false", "0", "off", "no" ].includes(o) || o === iZ.askEachTime.toLowerCase()) return iZ.askEachTime;
      return;
    },
    onChange(e) {
      let o = e === iZ.switchAutomatically;
      return T(d => ({
        ...d,
        switchModelsOnFlag: o
      })), D1n(o, "config", z() ? H : void 0).then(({error: d}) => d ? {
        error: d
      } : void 0);
    }
  } ] : [], ...[], {
    id: "tips",
    label: "Show tips",
    value: r?.spinnerTipsEnabled ?? !0,
    type: "boolean",
    onChange(e) {
      Se({
        spinnerTipsEnabled: e
      }), T(o => ({
        ...o,
        spinnerTipsEnabled: e
      })), i("tengu_tips_setting_changed", {
        enabled: e
      });
    }
  }, ...a5r() ? [ {
    id: "feedbackDrafts",
    label: "Claude-drafted feedback",
    value: r?.feedbackDrafts ?? "notify",
    options: [ "notify", "quiet", "off" ],
    type: "enum",
    onChange(e) {
      let o = e;
      FEn(o, {
        storageV5: H,
        via: "config"
      }), T(d => ({
        ...d,
        feedbackDrafts: o
      }));
    }
  } ] : [], {
    id: "reduceMotion",
    label: "Reduce motion",
    value: r?.prefersReducedMotion ?? !1,
    type: "boolean",
    onChange(e) {
      Se({
        prefersReducedMotion: e
      }), T(o => ({
        ...o,
        prefersReducedMotion: e
      })), q(o => ({
        ...o,
        settings: {
          ...o.settings,
          prefersReducedMotion: e
        }
      })), i("tengu_reduce_motion_setting_changed", {
        enabled: e
      });
    }
  }, {
    id: "thinking",
    label: "Thinking mode",
    value: V3e(xe, C),
    type: "boolean",
    ...be !== void 0 && {
      lock: {
        reason: be,
        source: "managed",
        reasonShipsOffBox: !0,
        writableWhileLocked: [ "true", "1", "on", "yes" ]
      }
    },
    onChange(e) {
      if (!e && be !== void 0) return {
        error: new Mr(be, "Thinking can't be turned off for this model")
      };
      q(o => ({
        ...o,
        thinkingEnabled: e
      })), F({
        alwaysThinkingEnabled: e ? void 0 : !1
      }), i("tengu_thinking_toggled", {
        enabled: e
      }), g("thinking_toggle");
    }
  }, ...Bo() && LR() ? [ {
    id: "fast",
    label: `Fast mode (${Wz()})`,
    value: !!I,
    type: "boolean",
    async onChange(e) {
      let o = (d, h, E) => {
        if (h) {
          let A = !1;
          if (q(P => {
            let J = Uhe(P);
            return A = J !== void 0 && J !== d, P;
          }), A) return {
            error: new Mr("Fast mode was not enabled: the model changed while PreModelSwitch hooks ran; try again", "fast mode promotion stale after hooks")
          };
        }
        zz(), F({
          fastMode: !0
        });
        let R;
        if (q(A => {
          let P = Uhe(A), J = P !== void 0 && (!h || P === d);
          if (J && L) TS(L.session, A, P, "command");
          return R = J ? P : void 0, {
            ...A,
            ...J && {
              mainLoopModel: P,
              mainLoopModelForSession: null
            },
            fastMode: !0
          };
        }), R !== void 0) U.record("model", R ?? Lpe());
        return U.record("Fast mode", "ON"), E ? {
          messageSuffix: E
        } : void 0;
      };
      if (e && L && (O3(L.session) || WM.of(L.session).pending > 0)) {
        let {session: d, readState: h} = L, E = ++L.latestFastPick.current;
        return db(d, async () => {
          let R = Uhe(h());
          if (R === void 0 || !O3(d)) {
            if (E !== L.latestFastPick.current) return;
            return o(void 0, !1, "");
          }
          let A = await Dk(d, h, R, "command");
          if (E !== L.latestFastPick.current) return;
          if (A.decision !== "proceed") return f("model_switch", "blocked_by_hook"), {
            error: new Mr(vB(R, A.decision === "ask" ? `${A.reason ?? "confirmation required"} (run /model to switch, then enable fast mode)` : A.reason, A.messages), "model switch blocked by a PreModelSwitch hook")
          };
          return o(R, !0, A.messages.length > 0 ? ` \xb7 ${A.messages.map(au).join(" \xb7 ")}` : "");
        });
      }
      if (e) return o(void 0, !1, ""); else {
        let d = () => {
          zz(), F({
            fastMode: void 0
          }), q(h => ({
            ...h,
            fastMode: !1
          })), U.record("Fast mode", "OFF");
        };
        if (L && WM.of(L.session).pending > 0) await db(L.session, async () => d()); else d();
      }
    }
  } ] : [], ...k("tengu_chomp_inflection", !1) ? [ {
    id: "promptSuggestionEnabled",
    label: "Prompt suggestions",
    value: O,
    type: "boolean",
    onChange(e) {
      if (q(o => ({
        ...o,
        promptSuggestionEnabled: e
      })), F({
        promptSuggestionEnabled: e ? void 0 : !1
      }), e && !O) bXo(z() ? H : void 0, io);
    }
  } ] : [], {
    id: "recap",
    label: "Session recap",
    value: Q,
    type: "boolean",
    onChange(e) {
      q(o => ({
        ...o,
        awaySummaryEnabled: e
      })), F({
        awaySummaryEnabled: e ? void 0 : !1
      }), T(o => ({
        ...o,
        awaySummaryEnabled: e ? void 0 : !1
      }));
    }
  }, ...ae ? [ {
    id: "checkpoints",
    label: "Rewind code (checkpoints)",
    value: s.fileCheckpointingEnabled,
    type: "boolean",
    onChange(e) {
      W("fileCheckpointingEnabled", e), v(o => ({
        ...o,
        fileCheckpointingEnabled: e
      })), i("tengu_file_history_snapshots_setting_changed", {
        enabled: e
      });
    }
  } ] : [], ...mo(ows()) ? [ {
    id: "orgMemoryRead",
    label: "Synced project memory (this directory; applies next session)",
    value: ia().orgMemoryRead ?? !0,
    type: "boolean",
    onChange(e) {
      sws(e, H), v(o => ({
        ...o
      }));
    }
  } ] : [], ...po(!P7t() && (Jlt() || ia().orgMemoryWrites === !0)) ? [ {
    id: "orgMemoryWrites",
    label: ia().orgMemoryRead === !1 ? "Synced project memory writes (enable reads first)" : "Synced project memory writes (this directory; applies next session)",
    value: axe(),
    canWithdraw: () => ia().orgMemoryWrites === !0,
    type: "boolean",
    consentGated: !0,
    onChange(e) {
      let o = e && !axe() && ia().orgMemoryWrites === !0;
      iFn(o ? !1 : e, H), v(d => ({
        ...d
      }));
    }
  } ] : [], ...Y ? [ {
    id: "workflows",
    label: "Dynamic workflows",
    value: r?.disableWorkflows === !0 ? !1 : r?.enableWorkflows ?? Wyo(),
    type: "boolean",
    onChange(e) {
      let o = e === Wyo() ? void 0 : e;
      F({
        enableWorkflows: o,
        disableWorkflows: void 0
      }), T(d => ({
        ...d,
        enableWorkflows: o,
        disableWorkflows: void 0
      })), U.record("workflows", e ? "on" : "off");
    }
  }, {
    id: "workflowKeywordTriggerEnabled",
    label: "Ultracode keyword trigger",
    value: r?.workflowKeywordTriggerEnabled ?? !0,
    type: "boolean",
    onChange(e) {
      let o = e ? void 0 : !1;
      F({
        workflowKeywordTriggerEnabled: o
      }), T(d => ({
        ...d,
        workflowKeywordTriggerEnabled: o
      })), U.record("ultracodeKeywordTrigger", e ? "on" : "off");
    }
  } ] : [], ...Z && (Y || Tg()) ? [ {
    id: "workflowSizeGuideline",
    label: "Dynamic workflow size",
    value: Fe.size,
    isDefaultValue: Fe.isDefault,
    options: [ ...Byo ],
    type: "enum",
    onChange(e) {
      let o = ven(e) ?? "unrestricted";
      G(d => {
        if (d.workflowSizeGuideline === o) return d;
        return {
          ...d,
          workflowSizeGuideline: o
        };
      }), v(d => ({
        ...d,
        workflowSizeGuideline: o
      })), U.record("workflowSizeGuideline", o);
    }
  } ] : [], ...Ze ? [ {
    id: "artifacts",
    label: "Artifacts",
    value: r?.enableArtifact ?? AEr(),
    type: "boolean",
    async onChange(e) {
      let o = e === AEr() ? void 0 : e;
      T(h => ({
        ...h,
        enableArtifact: e
      }));
      let d = await F({
        enableArtifact: o,
        disableArtifact: void 0
      });
      if (d?.error) return T(h => ({
        ...h,
        enableArtifact: uMt().enabled
      })), {
        error: d.error
      };
      U.record("artifacts", e ? "on" : "off");
    }
  } ] : [], {
    id: "verbose",
    label: de("Verbose output", "Verbose"),
    value: y,
    type: "boolean",
    onChange: Te
  }, {
    id: "progressBar",
    label: "Terminal progress bar",
    value: s.terminalProgressBarEnabled,
    type: "boolean",
    onChange(e) {
      W("terminalProgressBarEnabled", e), v(o => ({
        ...o,
        terminalProgressBarEnabled: e
      })), i("tengu_terminal_progress_bar_setting_changed", {
        enabled: e
      });
    }
  }, ...k("tengu_terminal_sidebar", !1) ? [ {
    id: "showStatusInTerminalTab",
    label: "Show status in terminal tab",
    value: s.showStatusInTerminalTab ?? !1,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        showStatusInTerminalTab: e
      })), v(o => ({
        ...o,
        showStatusInTerminalTab: e
      })), i("tengu_terminal_tab_status_setting_changed", {
        enabled: e
      });
    }
  } ] : [], {
    id: "turnDuration",
    label: "Show turn duration",
    value: s.showTurnDuration,
    type: "boolean",
    onChange(e) {
      W("showTurnDuration", e), v(o => ({
        ...o,
        showTurnDuration: e
      })), i("tengu_show_turn_duration_setting_changed", {
        enabled: e
      });
    }
  }, ...k("tengu_sepia_moth", !1) ? [ {
    id: "precomputeCompactionEnabled",
    label: "Precompute compaction",
    value: r?.precomputeCompactionEnabled ?? !0,
    type: "boolean",
    onChange(e) {
      F({
        precomputeCompactionEnabled: e
      }), T(o => ({
        ...o,
        precomputeCompactionEnabled: e
      })), i("tengu_precompute_compaction_setting_changed", {
        enabled: e
      });
    }
  } ] : [], ...k("tengu_silk_hinge", !1) ? [ {
    id: "timestamps",
    label: "Show message timestamps",
    value: s.showMessageTimestamps,
    type: "boolean",
    onChange(e) {
      W("showMessageTimestamps", e), v(o => ({
        ...o,
        showMessageTimestamps: e
      })), q(o => ({
        ...o,
        showMessageTimestamps: e
      })), i("tengu_show_message_timestamps_setting_changed", {
        enabled: e
      });
    }
  } ] : [], {
    id: "timeFormat",
    label: "Time format",
    value: Enr(r?.timeFormat ?? "auto"),
    options: [ ...Z9e ],
    type: "enum",
    pickToCommit: !0,
    onChange(e) {
      let o = Z9e.find(d => d === e);
      if (!o) return;
      F({
        timeFormat: o
      }), T(d => ({
        ...d,
        timeFormat: o
      })), U.record("timeFormat", o), i("tengu_time_format_setting_changed", {
        value: c(o)
      });
    }
  }, {
    id: "permissionMode",
    label: "Default permission mode",
    value: r?.permissions?.defaultMode || "default",
    options: (() => {
      let e = [ "default", "plan" ], o = kE, d = [ "bypassPermissions" ];
      return [ ...e, ...o.filter(h => !e.includes(h) && !d.includes(h)) ];
    })(),
    type: "enum",
    async onChange(e) {
      let o = xC(e), d = Fie(o) ? Ld(o) : o, h = r?.permissions?.defaultMode;
      T(R => ({
        ...R,
        permissions: {
          ...R?.permissions,
          defaultMode: d
        }
      })), U.record("permissionMode", e);
      let E = await F({
        permissions: {
          defaultMode: d
        }
      });
      if (E.error) return T(R => ({
        ...R,
        permissions: {
          ...R?.permissions,
          defaultMode: h
        }
      })), U.clear("permissionMode"), t(`Failed to update default permission mode setting: ${E.error.message}`, {
        level: "error"
      }), {
        error: E.error
      };
    }
  }, {
    id: "worktreeBaseRef",
    label: "Worktree base ref",
    value: r?.worktree?.baseRef ?? "fresh",
    options: [ "fresh", "head" ],
    type: "enum",
    async onChange(e) {
      let o = e, d = r?.worktree?.baseRef;
      T(E => ({
        ...E,
        worktree: {
          ...E?.worktree,
          baseRef: o
        }
      })), U.record("worktreeBaseRef", o);
      let h = await F({
        worktree: {
          baseRef: o
        }
      });
      if (h.error) return T(E => ({
        ...E,
        worktree: {
          ...E?.worktree,
          baseRef: d
        }
      })), U.clear("worktreeBaseRef"), t(`Failed to update worktree.baseRef in user settings: ${h.error.message}`, {
        level: "error"
      }), {
        error: h.error
      };
    }
  }, {
    id: "useAutoModeDuringPlan",
    label: "Use auto mode during plan",
    value: r?.useAutoModeDuringPlan ?? !0,
    type: "boolean",
    onChange(e) {
      F({
        useAutoModeDuringPlan: e
      }), T(o => ({
        ...o,
        useAutoModeDuringPlan: e
      })), q(o => {
        let d = UTe(o.toolPermissionContext);
        if (d === o.toolPermissionContext) return o;
        return {
          ...o,
          toolPermissionContext: d
        };
      }), U.record("Use auto mode during plan", e);
    }
  }, {
    id: "gitignore",
    label: "Respect .gitignore in file picker",
    value: s.respectGitignore ?? BR.respectGitignore,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        respectGitignore: e
      })), v(o => ({
        ...o,
        respectGitignore: e
      })), i("tengu_respect_gitignore_setting_changed", {
        enabled: e
      });
    }
  }, {
    id: "copyFullResponse",
    label: "Skip the /copy picker",
    value: s.copyFullResponse ?? BR.copyFullResponse,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        copyFullResponse: e
      })), v(o => ({
        ...o,
        copyFullResponse: e
      }));
    }
  }, ...ie ? [ {
    id: "copyOnSelect",
    label: "Copy on select",
    value: s.copyOnSelect ?? !0,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        copyOnSelect: e
      })), v(o => ({
        ...o,
        copyOnSelect: e
      }));
    }
  }, {
    id: "autoScroll",
    label: de("Auto-scroll", "Auto-scroll output"),
    value: s.autoScrollEnabled,
    type: "boolean",
    onChange(e) {
      W("autoScrollEnabled", e), v(o => ({
        ...o,
        autoScrollEnabled: e
      }));
    }
  } ] : [], ...v_e() ? ev() || ODe() ? [ {
    id: "agentsView",
    label: "Agents view",
    value: ODe() && (s.leftArrowOpensAgents ?? !0) || ev() && (s.defaultToAgentsView ?? !1) ? "on" : "off",
    type: "managedEnum",
    onChange() {}
  } ] : [] : Ie, ...[], no ? {
    id: "autoUpdatesChannel",
    label: "Auto-update channel",
    value: "disabled",
    type: "managedEnum",
    onChange() {}
  } : {
    id: "autoUpdatesChannel",
    label: "Auto-update channel",
    value: yo(r?.autoUpdatesChannel),
    type: "managedEnum",
    onChange() {}
  }, _nr({
    themeSetting: u,
    setTheme: to
  }), ...v_e() ? [ {
    id: "notifChannel",
    label: "Notifications",
    value: bnr(s.preferredNotifChannel),
    type: "managedEnum",
    options: [ ...rX ],
    onChange: he
  } ] : [ Le, ...De ], {
    id: "outputStyle",
    label: "Output style",
    value: Sr("outputStyles") && !Object.hasOwn(C3, p) ? `${p} (disabled in safe mode)` : p,
    type: "managedEnum",
    options: Object.keys(C3),
    optionsHint: "For custom styles, open /config.",
    async onChange(e) {
      if (so) {
        let d = await IW(le(), H);
        if (!X5t(d[e])) return {
          error: new Mr(DPn)
        };
      }
      if (e === p) return {
        messageSuffix: " (already the current style)"
      };
      if (!dn("localSettings")) return {
        error: new Mr(LPn)
      };
      T(d => ({
        ...d,
        outputStyle: e
      }));
      let o = await Se({
        outputStyle: e
      });
      if (o?.error) return {
        error: o.error
      };
      kI("output_style");
    }
  }, ...ne ? [ {
    id: "defaultView",
    label: "Default view",
    value: r?.defaultView === void 0 ? "default" : String(r.defaultView),
    options: [ "transcript", "chat", "default" ],
    type: "enum",
    onChange(e) {
      let o = e === "default" ? void 0 : e;
      Se({
        defaultView: o
      }), T(h => ({
        ...h,
        defaultView: o
      }));
      let d = o === "chat";
      sMe(d), q(h => {
        if (h.isBriefOnly === d) return h;
        return {
          ...h,
          isBriefOnly: d
        };
      }), U.record("Default view", e), i("tengu_default_view_setting_changed", {
        value: c(o ?? "unset")
      });
    }
  } ] : [], {
    id: "language",
    label: "Language",
    value: m ?? "Default (English)",
    type: "managedEnum",
    coerce: go,
    optionsHint: "Any language name or ISO code (e.g. 'ja'); use 'default' for English.",
    async onChange(e) {
      let o = e.toLowerCase() === "default" ? void 0 : e;
      T(h => ({
        ...h,
        language: o
      }));
      let d = await F({
        language: o
      });
      if (d?.error) return {
        error: d.error
      };
    }
  }, {
    id: "editor",
    label: "Editor mode",
    value: s.editorMode === "emacs" ? "normal" : s.editorMode || "normal",
    options: [ "normal", "vim" ],
    type: "enum",
    onChange(e) {
      let o = e;
      W("editorMode", o), v(d => ({
        ...d,
        editorMode: o
      })), i("tengu_editor_mode_changed", {
        mode: c(o),
        source: b("config_panel")
      });
    }
  }, ...ke("askUserQuestionTimeout") ? [] : [ {
    id: "askUserQuestionTimeout",
    label: "Question auto-continue timeout",
    consentGated: !0,
    value: r?.askUserQuestionTimeout ?? gmt() ?? "never",
    options: [ ...Ue ],
    type: "enum",
    async onChange(e) {
      let o = Ue.find(E => E === e);
      if (!o) return;
      let d = r.askUserQuestionTimeout;
      T(E => ({
        ...E,
        askUserQuestionTimeout: o
      }));
      let h = await F({
        askUserQuestionTimeout: o
      });
      if (h?.error) return T(E => ({
        ...E,
        askUserQuestionTimeout: d
      })), {
        error: h.error
      };
      i("tengu_ask_user_question_timeout_changed", {
        value: c(o),
        source: b("config_panel")
      });
    }
  } ], ...UEn() ? [ {
    id: "modelProposedGoals",
    label: "Claude-proposed goals",
    value: r?.modelProposedGoals ?? hmt(),
    options: [ ...nan ],
    type: "enum",
    consentGated: !0,
    async onChange(e) {
      let o = nan.find(h => h === e);
      if (!o) return;
      T(h => ({
        ...h,
        modelProposedGoals: o
      }));
      let d = await F({
        modelProposedGoals: o
      });
      if (d?.error) return {
        error: d.error
      };
      i("tengu_model_proposed_goals_changed", {
        value: c(o),
        source: b("config_panel")
      });
    }
  } ] : [], {
    id: "externalEditorContext",
    label: de("Show last response in external editor", "Show responses in IDE"),
    value: s.externalEditorContext ?? !1,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        externalEditorContext: e
      })), v(o => ({
        ...o,
        externalEditorContext: e
      })), i("tengu_external_editor_context_changed", {
        enabled: e
      });
    }
  }, {
    id: "prStatus",
    label: de("Show PR status footer", "Show PR status"),
    value: s.prStatusFooterEnabled ?? !0,
    type: "boolean",
    onChange(e) {
      G(o => {
        if (o.prStatusFooterEnabled === e) return o;
        return {
          ...o,
          prStatusFooterEnabled: e
        };
      }), v(o => ({
        ...o,
        prStatusFooterEnabled: e
      })), i("tengu_pr_status_footer_setting_changed", {
        enabled: e
      });
    }
  }, {
    id: "model",
    label: "Model",
    value: w === null ? "Default (recommended)" : $C(w),
    type: "managedEnum",
    options: fo(),
    optionsHint: "For a specific model ID, use /model.",
    onChange(e) {
      let o = e === "default" ? null : e;
      if (Tne(o)) return f("model_fable_consent", "config_shorthand_blocked"), {
        error: new Mr("needs usage-credits consent \u2014 run /model first")
      };
      return Me(o);
    }
  }, ...V ? [ {
    id: "diffTool",
    label: "Diff tool",
    value: s.diffTool ?? "auto",
    options: [ "terminal", "auto" ],
    type: "enum",
    onChange(e) {
      let o = e;
      G(d => ({
        ...d,
        diffTool: o
      })), v(d => ({
        ...d,
        diffTool: o
      })), i("tengu_diff_tool_changed", {
        tool: c(o),
        source: b("config_panel")
      });
    }
  } ] : [], ...!DW() ? [ {
    id: "autoConnectIde",
    label: "Auto-connect to IDE (external terminal)",
    value: s.autoConnectIde ?? !1,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        autoConnectIde: e
      })), v(o => ({
        ...o,
        autoConnectIde: e
      })), i("tengu_auto_connect_ide_changed", {
        enabled: e,
        source: b("config_panel")
      });
    }
  } ] : [], ...DW() ? [ {
    id: "autoInstallIdeExtension",
    label: "Auto-install IDE extension",
    value: s.autoInstallIdeExtension ?? !0,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        autoInstallIdeExtension: e
      })), v(o => ({
        ...o,
        autoInstallIdeExtension: e
      })), i("tengu_auto_install_ide_extension_changed", {
        enabled: e,
        source: b("config_panel")
      });
    }
  } ] : [], {
    id: "chrome",
    label: de("Claude in Chrome enabled by default", "Claude in Chrome"),
    ...k("tengu_joyful_parasol", !0) !== !1 && {
      consentGated: !0
    },
    value: s.claudeInChromeDefaultEnabled ?? !1,
    type: "boolean",
    onChange(e) {
      G(o => ({
        ...o,
        claudeInChromeDefaultEnabled: e
      })), v(o => ({
        ...o,
        claudeInChromeDefaultEnabled: e
      })), i("tengu_claude_in_chrome_setting_changed", {
        enabled: e
      });
    }
  }, ...es() ? (() => {
    let e = W_o();
    return [ {
      id: "teammateMode",
      label: e ? `Teammate mode [overridden: ${e}]` : "Teammate mode",
      value: s.teammateMode ?? E1n,
      options: [ "auto", "tmux", "iterm2", "in-process" ],
      type: "enum",
      onChange(d) {
        if (d !== "auto" && d !== "tmux" && d !== "iterm2" && d !== "in-process") return;
        z_o(d), S4t(), W("teammateMode", d), v(h => ({
          ...h,
          teammateMode: d
        })), i("tengu_teammate_mode_changed", {
          mode: c(d)
        });
      }
    } ];
  })() : [], ...kR() || az() ? [ ro() ] : [], ...ke("dialogExpiry") ? [] : [ {
    id: "dialogExpiry",
    label: "Dialog expiry",
    consentGated: !0,
    value: r.dialogExpiry ?? "default",
    options: [ ...He ],
    type: "enum",
    async onChange(e) {
      let o = He.find(R => R === e);
      if (!o) return;
      let d = o === "default" ? void 0 : o, h = r.dialogExpiry;
      T(R => ({
        ...R,
        dialogExpiry: d
      }));
      let E = await F({
        dialogExpiry: d
      });
      if (E?.error) return T(R => ({
        ...R,
        dialogExpiry: h
      })), {
        error: E.error
      };
      i("tengu_dialog_expiry_changed", {
        value: c(o),
        source: b("config_panel")
      });
    }
  } ], ...oe && !ke("crossSessionInbound") ? [ {
    id: "crossSessionInbound",
    label: "Messages from your other sessions",
    consentGated: !0,
    pickToCommit: !0,
    value: r.crossSessionInbound ?? "default",
    options: [ ...$e ],
    type: "enum",
    async onChange(e) {
      let o = $e.find(R => R === e);
      if (!o) return;
      let d = o === "default" ? void 0 : o, h = r.crossSessionInbound;
      T(R => ({
        ...R,
        crossSessionInbound: d
      }));
      let E = await F({
        crossSessionInbound: d
      });
      if (E?.error) return T(R => ({
        ...R,
        crossSessionInbound: h
      })), {
        error: E.error
      };
      i("tengu_cross_session_inbound_changed", {
        value: c(o),
        source: b("config_panel")
      });
    }
  } ] : [], ...[], ...(kR(), []), ...[], ...oo ? [ {
    id: "showExternalIncludesDialog",
    label: de("External CLAUDE.md includes", "External CLAUDE.md files"),
    value: S ? "true" : "false",
    type: "managedEnum",
    onChange() {}
  } ] : [], ...a.ANTHROPIC_API_KEY && !tw() ? [ {
    id: "apiKey",
    consentGated: !0,
    label: "Use custom API key: ",
    labelBoldSuffix: Dpe(a.ANTHROPIC_API_KEY),
    searchText: "Use custom API key",
    value: Boolean(a.ANTHROPIC_API_KEY && z0(s).approved.includes(Dpe(a.ANTHROPIC_API_KEY))),
    type: "boolean",
    onChange(e) {
      G(o => {
        if (!a.ANTHROPIC_API_KEY) return o;
        let {approved: d, rejected: h} = z0(o), E = Dpe(a.ANTHROPIC_API_KEY), R = d.filter(P => P !== E), A = h.filter(P => P !== E);
        return {
          ...o,
          customApiKeyResponses: e ? {
            approved: [ ...R, E ],
            rejected: A
          } : {
            approved: R,
            rejected: [ ...A, E ]
          }
        };
      }), v(PVt());
    }
  } ] : [] ];
  return {
    settings: Dt() ? Ne.filter(e => !uo(e.id)) : Ne,
    dialogFieldRows: [ ...Ie, Le, ...De ],
    helpers: {
      onChangeMainModelConfig: Me,
      onChangeVerbose: Te,
      changeNotifChannel: he,
      changeInputNeededNotif: Oe,
      changeAgentPushNotif: Ae
    }
  };
}

function bo(n) {
  if (n !== void 0) return n ? iZ.switchAutomatically : iZ.askEachTime;
  return ho() ? iZ.notAskedYet : iZ.switchAutomatically;
}

function ho() {
  if ($pt(DMt)) return k(DMt, !1) === !0;
  if (!Ig()) return !1;
  return UZ()[DMt] === !0;
}

function yo(n) {
  return n === "rc" ? "slow" : n ?? "latest";
}

function IVt(n) {
  let s = n.trim();
  if (!s || !s.includes("=")) return null;
  let r = s.split(/\s+/);
  if (N(r, p => p.includes("=")) === 1) {
    let p = s.indexOf("="), m = s.slice(0, p);
    if (!m || /\s/.test(m)) return null;
    return [ {
      key: m,
      raw: s.slice(p + 1)
    } ];
  }
  let u = [];
  for (let p of r) {
    let m = p.indexOf("=");
    if (m <= 0) return null;
    u.push({
      key: p.slice(0, m),
      raw: p.slice(m + 1)
    });
  }
  return u;
}

function Ke(n, s) {
  let r = n.toLowerCase(), u = s.filter(p => p.id.toLowerCase() === r);
  return s.find(p => p.id === n) ?? (u.length === 1 ? u[0] : void 0);
}

var Co = new Map([ [ "agentsView", "/config (Agents view row)" ], [ "autoUpdatesChannel", "/channel" ], [ "showExternalIncludesDialog", "/config (External CLAUDE.md row)" ] ]);

function Ee(n, s) {
  return n.lock !== void 0 && !n.lock.writableWhileLocked?.some(r => r.toLowerCase() === s.toLowerCase());
}

async function avt(n, s, r) {
  let u = ue(s, r);
  await ADe().catch(() => {});
  let p = We(B2e(u).settings, s);
  if (n.some(({key: C, raw: y}) => {
    let M = Ke(C, p);
    return M !== void 0 && M.lock?.source !== "managed" && Ee(M, y);
  })) await Uoe().catch(() => {}), p = We(B2e(ue(s, r)).settings, s);
  let S = [];
  for (let {key: C, raw: y} of n) S.push(await wo(C, y, p));
  return S;
}

async function wo(n, s, r) {
  let u = Ke(n, r);
  if (i("tengu_config_shorthand", {
    key_hash: sn(n),
    matched: u !== void 0
  }), !u) {
    let m = r.filter(S => S.id.toLowerCase() === n.toLowerCase());
    return {
      ok: !1,
      kind: "refusal",
      message: m.length > 1 ? `${Xt(n)} matches ${m.map(S => Xt(S.id)).join(" and ")}; type one exactly.` : `${Xt(n)} isn't a /config setting. Run /config to see what's available.`
    };
  }
  let p = ("labelBoldSuffix" in u ? u.searchText : void 0) ?? u.label;
  if (Ee(u, s)) return {
    ok: !1,
    kind: u.lock?.reason === Ye || u.lock?.reasonShipsOffBox ? "refusal" : "locked",
    message: `Couldn't save ${p}: ${u.lock?.reason}`
  };
  if (u.consentGated) {
    let m = j2e(s) === !1, S = u.type === "boolean" && m || u.lock !== void 0 && !Ee(u, s), C = u.value === !0 || u.canWithdraw?.() === !0;
    if (S && !C) return {
      ok: !0,
      kind: "refusal",
      message: `${n} is already off.`
    };
    if (!(S && C)) return {
      ok: !1,
      kind: "refusal",
      message: `${p} can't be enabled with key=value \u2014 open /config to change it from the panel.`
    };
  }
  switch (u.type) {
   case "boolean":
    {
      let m = j2e(s);
      if (m === void 0) return {
        ok: !1,
        kind: "refusal",
        message: `${p} takes true or false, not "${Xt(s)}".`
      };
      let S = await u.onChange(m);
      if (S?.error) {
        if (S.error instanceof Mr) return {
          ok: !1,
          kind: "refusal",
          message: `${p}: ${S.error.message}${S?.messageSuffix ?? ""}`
        };
        return {
          ok: !1,
          kind: "save-failure",
          message: `Couldn't save ${p}: ${S.error.message}${S?.messageSuffix ?? ""}`
        };
      }
      return {
        ok: !0,
        kind: "refusal",
        message: `Set ${p} to ${m ? "true" : "false"}${S?.messageSuffix ?? ""}`
      };
    }

   case "enum":
   case "managedEnum":
    {
      let m = u.coerce;
      if (!u.options && !m) return {
        ok: !1,
        kind: "refusal",
        message: `${p} can't be set with key=value \u2014 use ${Co.get(u.id) ?? "/config"}.`
      };
      let S = m ? m(s) : u.options?.find(y => y.toLowerCase() === s.toLowerCase());
      if (S === void 0) {
        let y = u.type === "managedEnum" && u.optionsHint ? ` ${u.optionsHint}` : "";
        return {
          ok: !1,
          kind: "refusal",
          message: u.options ? `${p} takes one of: ${u.options.join(", ")}.${y}` : `${p} doesn't accept "${Xt(s)}".${y}`
        };
      }
      let C = await u.onChange(S);
      if (C?.error) {
        if (C.error instanceof Mr) return {
          ok: !1,
          kind: "refusal",
          message: `${p}: ${C.error.message}${C?.messageSuffix ?? ""}`
        };
        return {
          ok: !1,
          kind: "save-failure",
          message: `Couldn't save ${p}: ${C.error.message}${C?.messageSuffix ?? ""}`
        };
      }
      return {
        ok: !0,
        kind: "refusal",
        message: `Set ${p} to ${Xt(S)}${C?.messageSuffix ?? ""}`
      };
    }
  }
}

function lvt(n, s) {
  if (!s) return n.message;
  switch (n.kind) {
   case "save-failure":
    return Qe;

   case "locked":
    return "Couldn't save this setting: a trusted policy owns it (detail withheld on this connection).";

   case "refusal":
    return n.message;
  }
}

function OVt(n) {
  return _e(B2e(ue(n)).settings, n).flatMap(r => {
    if (r.consentGated) return [];
    let u = r.type === "boolean" ? "true|false" : r.options ? r.options.join("|") : r.type === "managedEnum" && r.coerce ? "<value>" : null;
    return u ? [ `  ${r.id}=${u}` ] : [];
  }).sort().join(`\n`);
}

function CYs(n, s) {
  let r = ko.of(B().host).lookup(), u = s.indexOf("=");
  if (u === -1) {
    let C = s.toLowerCase();
    return r.filter(y => y.id.toLowerCase().startsWith(C)).sort((y, M) => y.id.localeCompare(M.id)).map(y => ({
      value: `${y.id}=`,
      description: y.options?.slice(0, 4).join(" | ") ?? y.hint,
      isFinal: !1,
      appendSpace: !1
    }));
  }
  let p = s.slice(0, u), m = s.slice(u + 1).toLowerCase(), S = r.find(C => C.id.toLowerCase() === p.toLowerCase());
  if (!S?.options) return [];
  return S.options.filter(C => C.toLowerCase().startsWith(m)).map(C => ({
    value: `${S.id}=${C}`,
    isFinal: !0
  }));
}

class ze {
  keys=void 0;
  remoteWorkspace=!1;
  lookup() {
    if (this.remoteWorkspace !== Dt()) this.remoteWorkspace = !this.remoteWorkspace, 
    this.keys = void 0;
    return this.keys ??= Eo(), this.keys;
  }
}

var ko = new K(() => new ze);

function Eo() {
  let n = {
    getAppState: () => ({
      thinkingEnabled: !1,
      verbose: !1,
      mainLoopModel: null,
      mainLoopModelForSession: null,
      fastMode: !1,
      promptSuggestionEnabled: !1,
      awaySummaryEnabled: !1,
      toolPermissionContext: Ud()
    }),
    setAppState: () => {},
    options: {
      mcpClients: []
    }
  }, {settings: s} = B2e(ue(n));
  return s.flatMap(r => {
    if (r.consentGated) return [];
    let u = r.type === "boolean" ? [ "true", "false" ] : "options" in r && r.options ? r.options : void 0;
    if (u || r.type === "managedEnum" && r.coerce) return [ {
      id: r.id,
      options: u,
      hint: r.type === "managedEnum" ? r.optionsHint : void 0
    } ];
    return [];
  });
}

function ue(n, s) {
  let r = n.getAppState(), u = {
    ...dt(),
    ...Snr(),
    autoContinueAtUsageLimit: eKt() ?? !0
  }, p = PVt(), m = bs("disableWorkflows", !1), S = bs("enableWorkflows", !1), C = GBn() && (m.value !== !0 || m.source === "userSettings") && (S.source === "default" || S.source === "userSettings"), y = !kst(), M = YEn(), w = xen(), I = import.meta.require("./chunk-0d7xx99n.js").isBriefEntitled();
  return {
    globalConfig: p,
    settingsData: u,
    storageV5: n.storageV5,
    mayBeAuthoredByNonOwner: fN(n),
    themeSetting: p.theme,
    currentOutputStyle: u?.outputStyle || BM,
    currentLanguage: u?.language,
    externalIncludesApproved: !1,
    thinkingEnabled: r.thinkingEnabled,
    verbose: r.verbose,
    mainLoopModel: r.mainLoopModel,
    currentModel: RQ(r),
    isFastMode: Bo() ? r.fastMode : !1,
    promptSuggestionEnabled: r.promptSuggestionEnabled,
    awaySummaryEnabled: r.awaySummaryEnabled,
    showDefaultViewPicker: I,
    pushTogglesVisible: uue() && !Ct() && ip(),
    crossSessionInboxRowVisible: !1,
    isConnectedToIde: Zot(n.options.mcpClients),
    inAppSelection: !0,
    isFileCheckpointingAvailable: !a.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING,
    workflowsToggleable: C,
    workflowSizeGuidelineToggleable: y,
    autoContinueAtUsageLimitToggleable: M,
    artifactToggleable: w,
    remoteToolServingOn: tYe(),
    launchDirectoryKeys: null,
    shouldShowExternalIncludesToggle: !1,
    autoUpdaterDisabledReason: nIe(),
    promptSuggestionRun: n.session?.promptSuggestion,
    modelSwitchHooks: n.session ? {
      session: n.session,
      readState: () => n.getAppState(),
      latestPick: {
        current: 0
      },
      latestFastPick: {
        current: 0
      }
    } : null,
    setAppState: O => n.setAppState(O),
    setTheme: s?.setTheme ?? (O => z() && n.storageV5 !== void 0 ? mK("theme", O, n.storageV5) : mK("theme", O)),
    ...Ve
  };
}

var Ye = "a plugin's settings can't be changed over Remote Control or from a relayed message \u2014 open /config in the session itself", _o = "Set by your organization's managed settings (pluginConfigs)", vo = "Set by --settings for this session (pluginConfigs)";

function Ro(n, s, r) {
  return xpe(n).options?.[s] ?? r;
}

function Mo(n, s) {
  let r = u => {
    let p = fe(u)?.pluginConfigs;
    return Qse(n).some(m => p?.[m]?.options?.[s] !== void 0);
  };
  if (r("policySettings")) return _o;
  return r("flagSettings") ? vo : void 0;
}

async function To(n, s, r, u) {
  let p = sm(n), m = typeof r === "object" ? [ ...r ] : r, S = `${p}\0${s}`, C = me.has(S) ? me.get(S) : fe("userSettings")?.pluginConfigs?.[p]?.options?.[s];
  if (_(C) === _(m)) return;
  me.set(S, m);
  let y = await Rn("userSettings", {
    pluginConfigs: {
      [p]: {
        options: {
          [s]: m
        }
      }
    }
  }, void 0, u).finally(() => {
    if (me.get(S) === m) me.delete(S);
  });
  if (y.error) return {
    error: y.error
  };
  return ube(), Oo(n, s);
}

var me = new Map;

async function Oo(n, s) {
  let r = sm(n), u = Ge().loadedModules.find(S => S.name === n.name);
  if (u !== void 0 && u.args.pluginStorageId !== r) return {
    messageSuffix: " \xb7 saved; /reload-plugins applies it"
  };
  let p = await pis();
  Hcr(p);
  let m = p.find(S => S.name === n.name);
  if (m !== void 0 && m.kind !== "reloaded") {
    let S = m.kind === "refused" ? m.result.refused : m.kind === "held" ? m.reason : l(m.error);
    return t(`/config ${n.name}.${s}: saved; ${S}`), {
      messageSuffix: " \xb7 saved, but the plugin did not reload; /reload-plugins applies it"
    };
  }
}

function wnr(n, s = {}) {
  let r = [];
  for (let u of n) {
    if (u.enabled === !1) continue;
    let p = u.manifest.userConfig ?? {}, m = sm(u), S = Xt(u.name), y = n.some(M => M !== u && M.enabled !== !1 && Xt(M.name).toLowerCase() === S.toLowerCase()) ? m : u.name;
    for (let [M, w] of Object.entries(p)) {
      if (w.sensitive === !0 || w.multiple === !0) continue;
      let I = `${y}.${M}`, O = Mo(m, M) ?? s.refusal, Q = O === void 0 ? void 0 : {
        reason: O,
        source: "managed"
      }, ne = Xt(w.title), te = Xt(w.description), oe = {
        id: I,
        label: ne,
        searchText: `${ne} ${u.name} ${te}`,
        ...Q !== void 0 && {
          lock: Q
        }
      }, V = s.shown?.get(I) ?? Ro(m, M, w.default), ie = async Y => {
        if (Q !== void 0) return {
          error: new Mr(Q.reason)
        };
        s.onShown?.(I, Y);
        let Z = await To(u, M, Y, s.storageV5);
        if (Z?.error && V !== void 0) s.onShown?.(I, V);
        return Z;
      };
      if (w.type === "boolean") {
        r.push({
          ...oe,
          value: vnr(V),
          type: "boolean",
          provided: {
            plugin: S,
            pluginId: m,
            description: te,
            kind: "boolean"
          },
          onChange: ie
        });
        continue;
      }
      if (w.type === "string" && w.options !== void 0) {
        let Y = D(w.options.map(Xt)).filter(Z => Z !== "");
        r.push({
          ...oe,
          value: V === void 0 ? "" : String(V),
          options: Y,
          type: "enum",
          pickToCommit: !0,
          provided: {
            plugin: S,
            pluginId: m,
            description: te,
            kind: "choice"
          },
          onChange: ie
        });
        continue;
      }
      let ae = w.type === "number";
      r.push({
        ...oe,
        value: V === void 0 ? "" : String(V),
        type: "managedEnum",
        coerce: Y => {
          if (!ae) return Y;
          let Z = LVt(Y, w);
          return Z === void 0 ? void 0 : String(Z);
        },
        optionsHint: ae ? DVt(w) : void 0,
        provided: {
          plugin: S,
          pluginId: m,
          description: te,
          kind: ae ? "number" : "text"
        },
        onChange: Y => ie(ae ? Number(Y) : Y)
      });
    }
  }
  return r;
}

function MVt(n) {
  let s = String(n.value);
  return n.provided !== void 0 && n.type !== "boolean" ? kKn(iu(s.replace(/[\t\n\r]/g, " "))) : s;
}

function _e(n, s) {
  let r = s.getAppState().plugins?.enabled ?? [];
  return [ ...n, ...wnr(r, {
    storageV5: s.storageV5,
    ...fN(s) && {
      refusal: Ye
    }
  }) ];
}

function We(n, s) {
  let r = fN(s) ? {
    kind: "bridge"
  } : WRn;
  return _e(n, s).map(u => PEn(u, r));
}

function ve(n) {
  let s = n.provided, r = n.type === "boolean" ? "boolean" : s?.kind ?? (n.type === "enum" ? "choice" : n.coerce !== void 0 ? "text" : n.options !== void 0 ? "choice" : "text"), u = n.type === "boolean" ? void 0 : n.options ?? void 0, p = r === "number" && typeof n.value === "string" ? Number(n.value) : Number.NaN, m = typeof n.value === "string" && n.value.trim() !== "" && Number.isFinite(p) ? p : n.value;
  return {
    row: {
      key: n.id,
      label: n.label,
      ...s !== void 0 && {
        description: s.description
      },
      kind: r,
      value: m,
      ...r === "choice" && u !== void 0 && {
        options: u
      },
      provider: s === void 0 ? PUe : W0e(s.pluginId),
      isLocked: n.lock !== void 0
    },
    ...n.lock !== void 0 && {
      lockReason: n.lock.reason
    }
  };
}

async function qe(n, s) {
  let r = ("labelBoldSuffix" in n ? n.searchText : void 0) ?? n.label;
  if (n.consentGated) {
    if (!(n.type === "boolean" && s === !1 && (n.value === !0 || n.canWithdraw?.() === !0))) return n.type === "boolean" && s === !1 ? void 0 : `${r} can only be turned on from the /config panel.`;
  }
  let u = async p => {
    let m = await p;
    return m?.error ? `${m.error.message}${m.messageSuffix ?? ""}` : void 0;
  };
  switch (n.type) {
   case "boolean":
    return typeof s === "boolean" ? u(n.onChange(s)) : `${r} takes true or false.`;

   case "enum":
   case "managedEnum":
    {
      let p = n.type === "managedEnum" ? n.coerce : void 0;
      if (!n.options && !p) return `${r} can only be changed from the /config panel.`;
      let m = typeof s === "string" ? s : String(s), S = p ? p(m) : n.options?.find(C => C.toLowerCase() === m.toLowerCase());
      if (S === void 0) {
        let C = n.type === "managedEnum" && n.optionsHint ? ` ${n.optionsHint}` : "";
        return n.options ? `${r} takes one of: ${n.options.join(", ")}.` : `${r} doesn't accept "${Xt(m)}".${C}`;
      }
      return u(n.onChange(S));
    }
  }
}

function Ao(n) {
  return {
    ...ve(n),
    write: s => qe(n, s)
  };
}

function RYs(n) {
  return _e(B2e(ue(n)).settings, n).map(Ao);
}

function Fo(n, s) {
  if (n.type === "boolean") return typeof s === "boolean" ? s : void 0;
  if (typeof s === "number") return String(s);
  return typeof s === "string" ? s : void 0;
}

function Re(n, s, r, u = WRn, p) {
  let {row: m} = ve(n), S = m.kind === "number" && typeof s === "string" ? Number(s) : s, y = m.kind === "choice" && typeof S === "string" && !(m.options ?? []).includes(S) ? {
    ...m,
    kind: "text",
    options: void 0
  } : m, M, w = !1;
  return grs({
    row: y,
    value: S,
    origin: u,
    signal: p,
    write: async I => {
      if (p?.aborted) return `${y.label}: the change was cancelled`;
      let O = Fo(n, I);
      if (O === void 0) return `${y.label}: a ${y.kind} row cannot hold that value`;
      let Q = n.type === "managedEnum" ? n.coerce : void 0, ne = _(I) !== _(S), oe = ne && m.kind === "choice" && Q === void 0 && typeof O === "string" && !(m.options ?? []).includes(O) ? void 0 : ne && Q !== void 0 && typeof O === "string" ? Q(O) : O;
      if (oe === void 0) {
        let ie = n.type === "managedEnum" && n.optionsHint ? ` ${n.optionsHint}` : "";
        return `${y.label} doesn't accept "${Xt(String(I))}".${ie}`;
      }
      M = r(oe);
      let V = await M;
      return w = V?.error !== void 0, V?.error ? `${V.error.message}${V.messageSuffix ?? ""}` : void 0;
    }
  }).then(I => {
    if (I.deny === void 0 || w) return M;
    let O = Xt(I.deny);
    return {
      error: p?.aborted ? new x(O, "config.set withdrawn before it was written") : new x(O, "config.set denied by a hook")
    };
  });
}

function PEn(n, s = WRn) {
  let r = n.onChange;
  return {
    ...n,
    onChange: p => UYt() ? Re(n, p, r, s) : r(p)
  };
}

function HTe(n, s, r, u) {
  return n !== void 0 && UYt() ? Re(n, s, r, WRn, u) : r(s);
}

var Qe = "Couldn't save this setting (detail withheld on this connection).";

function Je(n, s) {
  return s() ? Qe : n;
}

var Po = "The model changed while a plugin's hook was deciding; pick again";

async function IEn(n, s, r, u, p = {}) {
  let m = UYt() ? B2e(ue(r)).settings.find(w => w.id === n) : void 0;
  if (m === void 0) {
    let w = await u();
    return w?.error === void 0 ? {
      written: s
    } : {
      refusal: je(n, w)
    };
  }
  let S = {}, C = async w => {
    if (p.isSuperseded?.()) return ee("a later pick replaced this one");
    if (w !== s && p.refuseRewrite !== void 0) return ee(p.refuseRewrite === !0 ? "a plugin's hook changed the value; this command writes only what was picked (use /config)" : p.refuseRewrite);
    let I = w === s ? await Promise.resolve().then(u).catch(O => (S.thrown = {
      error: O
    }, ee("the write failed"))) : await qe(m, w).then(O => O === void 0 ? void 0 : ee(O));
    if (I?.error === void 0) S.written = w;
    return I;
  }, y = await Re(m, s, w => S.outcome ??= C(w), fN(r) ? {
    kind: "bridge"
  } : WRn);
  if (S.thrown !== void 0) throw S.thrown.error;
  if (S.written !== void 0) return {
    written: S.written
  };
  let M = ("labelBoldSuffix" in m ? m.searchText : void 0) ?? m.label;
  if (y?.error !== void 0) return {
    refusal: je(M, y)
  };
  return {
    refusal: `Couldn't save ${M}: a plugin's hook answered without writing`
  };
}

function je(n, s) {
  return `Couldn't save ${n}: ${s.error?.message ?? ""}${s.messageSuffix ?? ""}`;
}

function ee(n) {
  return {
    error: new x(n, "a row commit from a command was not written")
  };
}

async function kDe(n, s, r, u) {
  let p = n ?? "default", m = "", S, C, y = await IEn("model", p, s, async () => {
    if (u.hasModelMoved?.()) return S = Po, ee(S);
    let w = await r();
    if (typeof w === "string") {
      m = w;
      return;
    }
    if ("unsaved" in w) return C = w.unsaved, ee("the default was not saved");
    return S = w.refused, ee(w.refused);
  }, {
    isSuperseded: u.isSuperseded
  });
  if (S !== void 0) return {
    text: S,
    isRefusal: !0,
    isOwnRefusal: !0
  };
  if (C !== void 0) return {
    text: C,
    isRefusal: !1
  };
  if ("refusal" in y) return {
    text: Je(y.refusal, u.persistsOffBox),
    isRefusal: !0
  };
  if (y.written === p) return {
    text: m,
    isRefusal: !1
  };
  let M = y.written === "default" ? null : String(y.written);
  return {
    text: `${Jde}${Ky(aw(M))}${kre}`,
    isRefusal: !1,
    rewrittenTo: M
  };
}

var DTe = Symbol("fast toggle not applied");

async function dvt(n, s, r, u) {
  let p = {}, m = await IEn("fast", n, s, async () => {
    let S = await r();
    if (p.isDone = !0, S === DTe) return ee("nothing was applied");
    return p.refusal = S, S === void 0 ? void 0 : ee(S);
  }, {
    refuseRewrite: !0
  });
  if (p.isDone) return p.refusal;
  return "refusal" in m ? Je(m.refusal, u) : void 0;
}

async function e5r(n) {
  let s = new Map;
  return await Promise.all(n.map(async r => {
    let {row: u} = ve(r), p = await Xdr(u);
    if (p === void 0) s.set(r.id, {
      label: u.label,
      hidden: !0
    }); else if (p !== u) s.set(r.id, {
      label: Xt(p.label),
      hidden: !1
    });
  })), s;
}

var xYs = {
  isHooked: () => UYt(),
  savedModelPickReply: kDe,
  savedFastModeToggle: dvt
};

export { _nr, bnr, Snr, PVt, pXo, QYr, ZYr, B2e, IVt, avt, lvt, OVt, CYs, wnr, MVt, RYs, PEn, HTe, IEn, kDe, DTe, dvt, e5r, xYs };
