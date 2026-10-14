// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { B, ke, Sdn, WDo, yL, Qje, Fn, Dy, eWe, INo } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { j } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { zme } from "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import { ab, xYt, Lns, N0e, ace, ni, cb, uV, rfr, Qn, Hs } from "./chunk-84yp45y8.js";

import { gr, bcn } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { mrn, Xz, Ft, Ui, k, z_, y0t, Ts, Jm, SC, j0, Ce, ce, vTo } from "./chunk-xywp7esx.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { zK } from "./chunk-dd98x6x7.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { uC } from "./chunk-ewk363e4.js";

import { hNe } from "./chunk-ct4w3a38.js";

import { LS } from "./chunk-km6d4a9r.js";

import { w } from "./chunk-9rj1xaxr.js";

import { z8n } from "./chunk-p0ag64rt.js";

import { gMe } from "./chunk-3bzcmhcr.js";

import { Ux } from "./chunk-69v14wbe.js";

import { Gte } from "./chunk-150qmpyg.js";

import { s, n, MA } from "./chunk-3vw306fv.js";

import { bhn, f1s, ujr } from "./chunk-rm46bstv.js";

import { VQe, CL } from "./chunk-vj7j58pv.js";

import { Ket } from "./chunk-k0z2rzcx.js";

import { smn, Fjo } from "./chunk-t3zzfaxr.js";

import { Bx, _wt, nqr } from "./chunk-yz8yf8mg.js";

import { Ofn } from "./chunk-3sm171p4.js";

import { O_n } from "./chunk-eaymh4hr.js";

import { tGe } from "./chunk-8fsn6b6e.js";

import { Btt } from "./chunk-5yhyhg4z.js";

import { $Fo } from "./chunk-qmmgvn5h.js";

import { Ryt } from "./chunk-eq8y8xna.js";

import { Fte } from "./chunk-y8thbjqx.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { G5o } from "./chunk-dj0c89yb.js";

import { ae, P, R, y, F } from "./chunk-cpyd3eya.js";

import { D } from "./chunk-hmqkrrtz.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

import { openSync as Me, writeSync as Re } from "fs";

import { homedir as xe } from "os";

var Pe = {
  iterm: "iTerm",
  "iterm.app": "iTerm",
  ghostty: "Ghostty",
  kitty: "kitty",
  alacritty: "Alacritty",
  wezterm: "WezTerm",
  apple_terminal: "Terminal"
};

function se(o) {
  return;
}

class X {
  frameDurations=[];
  totalFrames=0;
  firstRenderTime;
  lastRenderTime;
  record(o) {
    let l = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = l;
    if (this.lastRenderTime = l, this.totalFrames++, this.frameDurations.push(o), this.frameDurations.length > 3600) this.frameDurations.splice(0, this.frameDurations.length >> 1);
  }
  getMetrics() {
    if (this.totalFrames === 0 || this.firstRenderTime === void 0 || this.lastRenderTime === void 0) return;
    let o = this.lastRenderTime - this.firstRenderTime;
    if (o <= 0) return;
    let l = this.totalFrames / (o / 1e3), h = this.frameDurations.slice().sort((C, T) => T - C), x = Math.max(0, Math.ceil(h.length * .01) - 1), A = h[x], b = A > 0 ? 1e3 / A : 0;
    return {
      averageFps: Math.round(l * 100) / 100,
      low1PctFps: Math.round(b * 100) / 100
    };
  }
}

function Je(et) {
  return et(!1);
}

function Ze(tt) {
  return tt.execRelaunch();
}

function Qe(rt) {
  rt(), import("./chunk-c0k989ye.js").then(Ze);
}

function Xe(ot) {
  return {
    ...ot,
    phase: "save-failed"
  };
}

function pBs(o) {
  if (a.CLAUBBIT || !Ts()) return;
  yL(!0), LS(o);
}

function fBs(o) {
  Ce(l => ({
    ...l,
    hasCompletedOnboarding: !0,
    lastOnboardingVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  }), o);
}

function LFo(o, l) {
  return async h => {
    let x = await smn(o), A = Btt();
    if (x.pendingServers.length === 0) return null;
    if (A.length > 0) {
      let b = D(A.map(C => C.file).filter(Boolean)).join(", ");
      return f("mcp_project_approval_dialog", "mcp_project_approval_skipped_settings_errors"), 
      l({
        key: "mcp-approval-skipped",
        text: `skipping .mcp.json server approval (settings errors${b ? ` in ${b}` : ""}) \xb7 run \`claude doctor\` to list them, fix them, then restart`
      }), null;
    }
    try {
      return await Fjo(x, b => {
        try {
          let C = Ee(b);
          if (C) l(C);
        } catch (C) {
          d(j(C));
        } finally {
          h();
        }
      }, o);
    } catch (b) {
      throw m("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw"), b;
    }
  };
}

function Ee(o) {
  if (o.persistFailed) return m("mcp_project_approval_dialog", "mcp_approval_persist_failed"), 
  {
    key: "mcp-approval-persist-failed",
    text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \xb7 you will be asked again next startup"
  };
  let l = SC();
  if (Sdn().some(h => h.workspaceKey === l) && !Jm() && j0({
    onIndeterminate: "tracked"
  })) return f("mcp_project_approval_dialog", "mcp_approval_persist_gated"), {
    key: "mcp-approval-persist-gated",
    text: "your MCP server choices apply to this session only (workspace not explicitly trusted; .claude/settings.local.json is gated) \xb7 to persist, add them to enabledMcpjsonServers in ~/.claude/settings.json"
  };
  return g("mcp_project_approval_dialog"), null;
}

async function mKs(o, l, h) {
  return u5n(o, l, {
    color: "error",
    beforeExit: h
  });
}

async function u5n(o, l, h) {
  let x = h?.color, A = h?.exitCode ?? 1;
  if (CL(o, x ? e(n, {
    color: x,
    children: l
  }) : e(n, {
    children: l
  })), o.unmount(), await (h?.beforeExit?.()), A !== 0) {
    let {setBgExitCause: E, setBgExitDetail: U} = await import("./chunk-7xtjqb5g.js");
    E("exit_with_message"), U("exit_with_message", l);
  }
  let {flushAnalyticsSinks: b} = await import("./chunk-wvc9khvf.js");
  await b();
  let {drainRegisteredWriteQueues: C} = await import("./chunk-1055qqkb.js"), {withTimeout: T} = await import("./chunk-11vsrj4g.js");
  await T(C(), 2e3, "write queue drain timeout (exitWithMessage)").catch(() => {}), 
  process.exit(A);
}

function LEe(o, l, h) {
  return new Promise((x, A) => {
    VQe(o, [ b => l(C => {
      x(C), b();
    }) ], {
      session: B(),
      onChangeAppState: h?.onChangeAppState,
      marksJobBlocked: !0
    }).catch(A);
  });
}

async function tLr(o, l, h, x, A) {
  let b = CL(o, l);
  vTo(), ujr(h, x, A);
  try {
    if (await Promise.race([ o.waitUntilExit().then(() => "exited"), b.replaced.then(() => "replaced") ]) === "replaced") return;
  } catch (C) {
    let T = j(C), U = await O_n().catch(() => !1) ? " It happened while the fullscreen renderer was starting, so the next launch will use the classic renderer (CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 forces that any time)." : "";
    if (uV(`Claude Code exited after an unrecoverable interface error (${T.message}).${U}`), 
    Ft() || bcn()) throw C;
    try {
      hNe(T, "unhandled_rejection");
    } catch {}
    await Qn(1, "other");
    return;
  }
  await rfr.of(h.host).runBeforeInteractiveShutdown(), await Qn(0);
}

var Ie = 2e3, le = "GB post-onboarding init";

async function gKs(o, l, h, x, A, b, C, T, E, U, M) {
  let _ = {
    onboardingShown: !1,
    onboardingSkippedSignIn: !1,
    mcpApprovalSkipWarning: null,
    claudeInChromeAccepted: !1
  }, O = I => {
    _.mcpApprovalSkipWarning = I;
  };
  if (Ft() || a.CLAUDE_BRIDGE_REATTACH_SESSION) {
    let I = Ts(), p = I || a.CLAUDE_BG_WORKSPACE_TRUSTED === !0 && zme(ke(), xe());
    if (!p) t("Workspace trust is not recorded for this directory; continuing as an untrusted session (hooks and project settings env stay off)", {
      level: "warn"
    });
    let u = [ () => {
      if (p) yL(!0);
      if (y0t({
        preservePendingExposures: !0
      }), Ui().catch(v => d(j(v))), p) N0e(o), import("./chunk-wtvyse7h.js").then(v => v.loadHooksModulesHeldForTrust(E, U)).catch(v => d(j(v)));
      return null;
    }, LFo(E, O), () => {
      if (p) uC(), import("./chunk-g2vebg81.js").then(v => v.maybePrewarmRecallIndex(o)), 
      LS(E);
      if (bhn(o.host), Ofn(), p) {
        if (!I && !Fn() && !gr()) De(E, U);
        setImmediate(gMe, E);
      }
      return null;
    } ];
    return await VQe(l, u, {
      session: o,
      storageV5: E
    }), _;
  }
  if (Le(!1) || a.IS_DEMO) return pBs(E), bhn(o.host), Ofn(), _;
  return await VQe(l, mBs({
    session: o,
    permissionMode: h,
    allowDangerouslySkipPermissions: x,
    commands: A,
    claudeInChrome: b,
    devChannels: C,
    offerClaudeInChrome: T,
    storageV5: E,
    credentials: U,
    askCloudDefaultReason: M
  }, _), {
    session: o,
    onChangeAppState: Fte,
    marksJobBlocked: !0,
    storageV5: E
  }), _;
}

function mBs({session: o, permissionMode: l, allowDangerouslySkipPermissions: h, commands: x, claudeInChrome: A, devChannels: b, offerClaudeInChrome: C, storageV5: T, credentials: E, askCloudDefaultReason: U}, M) {
  let _ = ce(), O = !1, I = !0;
  return [ p => {
    if (_.hasCompletedOnboarding && a.CLAUDE_CODE_POWERUP_ONBOARDING !== "banner" && a.CLAUDE_CODE_POWERUP_ONBOARDING !== "step") return null;
    return M.onboardingShown = !0, import("./chunk-66b6wfy7.js").then(({Onboarding: u}) => e(u, {
      host: o.host,
      onDone: ({skippedSignIn: v}) => {
        M.onboardingSkippedSignIn = v, fBs(T), p();
      }
    }));
  }, p => {
    if (a.CLAUBBIT) return null;
    if (I = Ts(), I && !tGe()) return null;
    return O = !0, (I ? Promise.resolve(!1) : G5o()).then(u => {
      if (u) return Qje(!0), null;
      return import("./chunk-9kd0yq7w.js").then(({TrustDialog: v}) => e(v, {
        commands: x,
        onDone: p
      }));
    });
  }, () => {
    if (a.CLAUBBIT) return null;
    if (yL(!0), O) {
      if (cb("post-trust: re-discover project @skills-dir plugins"), ace(E)) ni(T, E).catch(() => {});
    }
    if (import("./chunk-wtvyse7h.js").then(p => p.loadHooksModulesHeldForTrust(T, E)).catch(p => d(j(p))), 
    y0t({
      preservePendingExposures: !0
    }), _.hasCompletedOnboarding) return Ui().catch(p => d(j(p))), null;
    return Xz(), de();
  }, () => {
    if (a.CLAUBBIT) return null;
    return null;
  }, p => a.CLAUBBIT ? null : LFo(T, u => {
    M.mcpApprovalSkipWarning = u;
  })(p), async p => {
    if (a.CLAUBBIT || !await Lns(o, T)) return null;
    let u = xYt(await ab(o, !0, T, E)), {ClaudeMdExternalIncludesDialog: v} = await import("./chunk-0ww337bv.js");
    return e(v, {
      onDone: () => p(),
      isStandaloneDialog: !0,
      externalIncludes: u
    });
  }, () => {
    if ($Fo(T), se(T), uC(), bhn(o.host), import("./chunk-g2vebg81.js").then(p => p.maybePrewarmRecallIndex(o)), 
    LS(T), Ofn(), O && !I && !Fn() && !gr()) De(T, E);
    return setImmediate(gMe, T), f1s(o.host, _) ? de() : null;
  }, async p => {
    if (!await Ket(T, E)) return null;
    let {GroveDialog: u} = await import("./chunk-9gtr4par.js");
    return e(u, {
      showIfAlreadyViewed: !1,
      location: M.onboardingShown ? "onboarding" : "policy_update_modal",
      onDone: v => {
        if (v !== "escape") {
          p();
          return;
        }
        i("tengu_grove_policy_exited", {}), Hs(0), M.onboardingShown = !1, M.claudeInChromeAccepted = !1, 
        p("stop");
      }
    });
  }, async p => {
    if (Ryt().status !== "not_started") return null;
    let {ProTrialStartScreen: u} = await import("./chunk-bg7qkd6g.js");
    return i("tengu_pro_trial_start_screen_shown", {}), e(u, {
      onDone: () => p(),
      storageV5: T,
      credentials: E
    });
  }, async p => {
    if (!M.onboardingShown) return null;
    let {resolvePowerupDiscoveryArm: u} = await import("./chunk-63vs10dt.js");
    if (u() !== "step") return null;
    let {PowerupDiscoveryStep: v} = await import("./chunk-6xpqv3a9.js");
    return e(v, {
      onDone: () => p()
    });
  }, p => {
    let u = mrn();
    if (!u) return null;
    return import("./chunk-cb1sp2hj.js").then(({ApproveApiKey: v}) => e(v, {
      customApiKeyTruncated: u,
      onDone: () => p()
    }));
  }, me("bedrock", T), me("vertex", T), async p => {
    let u;
    try {
      u = await nqr();
    } catch (L) {
      return d(L), null;
    }
    let {lines: v, hasHardFailure: G} = u;
    if (v.length === 0) return null;
    return e(ye, {
      afterMs: G ? 4e3 : 1500,
      onDone: p,
      children: e(s, {
        flexDirection: "column",
        children: v.map(L => e(n, {
          color: "warning",
          children: L
        }, L))
      })
    });
  }, p => {
    if (l !== "bypassPermissions" && !h || zK()) return null;
    return import("./chunk-z64t6f8e.js").then(({BypassPermissionsModeDialog: u}) => e(u, {
      onAccept: () => p(),
      storageV5: T
    }));
  }, ...[], async p => {
    if (Dy().length === 0 && (b?.length ?? 0) === 0) return null;
    if (await z_("tengu_harbor"), !b || b.length === 0) return null;
    let [{isChannelsOffForSession: u}, {isChannelsPolicyBlocked: v}, {getSettingsForSource: G}] = await Promise.all([ import("./chunk-qq5xg8r5.js"), import("./chunk-96szw7p8.js"), import("./chunk-tnx47z70.js") ]), L = () => {
      let N = b.map(q => ({
        ...q,
        dev: !0
      }));
      eWe(Dy().concat(N)), INo(!0);
    };
    if (u() || Oe() !== "firstParty" || v(G("policySettings"))) return L(), null;
    let {DevChannelsDialog: z} = await import("./chunk-2x9qp9yf.js");
    return e(z, {
      channels: b,
      onAccept: () => {
        L(), p();
      }
    });
  }, p => {
    if (!A || ce().hasCompletedClaudeInChromeOnboarding) return null;
    return import("./chunk-4vx4shmy.js").then(({ClaudeInChromeOnboarding: u}) => e(u, {
      onDone: () => p()
    }));
  }, async p => {
    if (!C) return null;
    let {isChromeExtensionInstalled: u} = await import("./chunk-7k9gez35.js"), v = await Ht(u(), 1500, "chrome extension scan timed out before offer").catch(() => !0), G = Boolean(ce().chromeExtension?.pairedDeviceId);
    if (!v && !G) return t("[Claude in Chrome] Skipping offer: extension not present locally (stale cache)"), 
    null;
    await Ht(Ui().catch(() => {}), 1500, "GrowthBook init timed out before chrome offer").catch(() => {});
    let L = k("tengu_chrome_auto_enable", !1), z = ce().claudeInChromeDefaultEnabled !== void 0, {isChromeServerPolicyDenied: N} = await import("./chunk-gq7x2ycv.js"), {isClaudeInChromeAllowed: q} = await import("./chunk-7k9gez35.js");
    if (N() || !q()) return t("[Claude in Chrome] Skipping offer: blocked by enterprise MCP config, managed deniedMcpServers policy, or organization policy (allow_claude_browser_extension)"), 
    null;
    if (z) return t("[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)"), 
    M.claudeInChromeAccepted = ce().claudeInChromeDefaultEnabled === !0, null;
    if (!L) return t("[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)"), 
    null;
    let {ChromeAutoEnableDialog: ne} = await import("./chunk-nxr63jz5.js");
    return e(ne, {
      onDone: ie => {
        M.claudeInChromeAccepted = ie, p();
      },
      isDontAskMode: l === "dontAsk",
      isAutoMode: l === "auto"
    });
  } ];
}

async function de() {
  let o = Date.now();
  try {
    await Ht(Ui(), Ie, le), t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms`);
  } catch (l) {
    if (t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms: ${l}`, {
      level: "warn"
    }), !(l instanceof Error && l.message === le)) d(j(l));
  }
  return null;
}

function ye(o) {
  let A = w(4), {afterMs: l, onDone: h, children: x} = o, b, C;
  if (A[0] !== l || A[1] !== h) b = () => {
    let T = setTimeout(h, l);
    return () => clearTimeout(T);
  }, C = [ l, h ], A[0] = l, A[1] = h, A[2] = b, A[3] = C; else b = A[2], C = A[3];
  return P(b, C), x;
}

var re = {
  bedrock: {
    accepted: "tengu_bedrock_upgrade_accepted",
    declined: "tengu_bedrock_upgrade_declined",
    saveFailed: "tengu_bedrock_upgrade_save_failed",
    relaunch: "tengu_bedrock_upgrade_relaunch"
  },
  vertex: {
    accepted: "tengu_vertex_upgrade_accepted",
    declined: "tengu_vertex_upgrade_declined",
    saveFailed: "tengu_vertex_upgrade_save_failed",
    relaunch: "tengu_vertex_upgrade_relaunch"
  }
};

function me(o, l) {
  let h = re[o];
  return async x => {
    if (Oe() !== o) return null;
    try {
      let [A, {upgradeKey: b}] = await Promise.all([ o === "bedrock" ? import("./chunk-gnp22wz0.js").then(_ => _wt("bedrock-upgrade", _.findBedrockUpgradeCandidates()).then(O => O.map(I => ({
        ...I,
        toId: I.toBedrockId
      })))) : import("./chunk-pfcvs31a.js").then(_ => _wt("vertex-upgrade", _.findVertexUpgradeCandidates()).then(O => O.map(I => ({
        ...I,
        toId: I.toVertexId
      })))), import("./chunk-km0z1sjm.js") ]), C = (o === "bedrock" ? ce().bedrockDeclinedUpgrades : ce().vertexDeclinedUpgrades) ?? {}, T = A.filter(_ => C[_.tier] !== b(_));
      if (T.length === 0) return null;
      let [{updateSettingsForSource: E}, {ThirdPartyModelUpgradeDialog: U}] = await Promise.all([ import("./chunk-tnx47z70.js"), import("./chunk-1tgbkgfr.js") ]);
      async function M(_, O) {
        let I = c(_.tier);
        if (!O) return await Ce(v => {
          let G = o === "bedrock" ? "bedrockDeclinedUpgrades" : "vertexDeclinedUpgrades";
          return {
            ...v,
            [G]: {
              ...v[G],
              [_.tier]: b(_)
            }
          };
        }, l), i(h.declined, {
          tier: I,
          from_key: c(_.fromKey),
          to_key: c(_.toKey)
        }), !1;
        let p = _.tier === "haiku" ? {
          ANTHROPIC_DEFAULT_HAIKU_MODEL: _.toId,
          ..._.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && {
            ANTHROPIC_SMALL_FAST_MODEL: _.toId
          }
        } : {
          [_.envVar]: _.toId
        }, {error: u} = await E("userSettings", {
          env: p
        }, void 0, l);
        if (u) return i(h.saveFailed, {
          tier: I
        }), !1;
        for (let v of Object.keys(p)) process.env[v] = _.toId;
        return i(h.accepted, {
          tier: I,
          from_key: c(_.fromKey),
          to_key: c(_.toKey)
        }), !0;
      }
      return e(we, {
        provider: o,
        pending: T,
        answer: M,
        onDone: () => x(),
        Dialog: U
      });
    } catch (A) {
      return d(A), null;
    }
  };
}

function we(o) {
  let C = w(27), {provider: l, pending: h, answer: x, onDone: A, Dialog: b} = o, T;
  if (C[0] === S) T = {
    at: 0,
    acceptedAny: !1,
    phase: "asking"
  }, C[0] = T; else T = C[0];
  let [E, U] = y(T), {at: M, acceptedAny: _, phase: O} = E, {exit: I} = MA(), p = R(null), u = h[M], v;
  if (C[1] !== h.length) v = G => U(L => {
    let z = L.acceptedAny || G;
    if (L.at + 1 < h.length) {
      return {
        at: L.at + 1,
        acceptedAny: z,
        phase: "asking"
      };
    }
    return {
      ...L,
      acceptedAny: z,
      phase: z ? "relaunching" : "done"
    };
  }), C[1] = h.length, C[2] = v; else v = C[2];
  let N = v, q, oe;
  if (C[3] !== N || C[4] !== I || C[5] !== A || C[6] !== O || C[7] !== l) q = () => {
    if (O === "done") {
      A();
      return;
    }
    if (O === "save-failed") {
      let ne = setTimeout(Je, 2e3, N);
      return () => clearTimeout(ne);
    }
    if (O === "relaunching") {
      i(re[l].relaunch, {});
      let ie = setTimeout(Qe, 250, I);
      return () => clearTimeout(ie);
    }
  }, oe = [ O, l, N, A, I ], C[3] = N, C[4] = I, C[5] = A, C[6] = O, C[7] = l, C[8] = q, 
  C[9] = oe; else q = C[8], oe = C[9];
  if (P(q, oe), O === "relaunching" && _) {
    let H;
    if (C[10] === S) H = e(n, {
      dimColor: !0,
      children: "Restarting Claude Code to apply the new model\u2026"
    }), C[10] = H; else H = C[10];
    return H;
  }
  if (u === void 0 || O === "done") {
    return null;
  }
  if (O === "save-failed") {
    const H = Bx[u.tier];
    let Y;
    if (C[11] !== H) Y = r(n, {
      color: "error",
      children: [ "Failed to save ", H, " upgrade to settings." ]
    }), C[11] = H, C[12] = Y; else Y = C[12];
    return Y;
  }
  const H = Bx[u.tier];
  let Y;
  if (C[13] !== N || C[14] !== x || C[15] !== M || C[16] !== u || C[17] !== A) Y = Ae => {
    if (p.current === M) {
      return;
    }
    p.current = M, x(u, Ae).then(be => {
      if (Ae && !be) {
        U(Xe);
        return;
      }
      N(be);
    }, Ve => {
      d(Ve), A();
    });
  }, C[13] = N, C[14] = x, C[15] = M, C[16] = u, C[17] = A, C[18] = Y; else Y = C[18];
  let Te;
  if (C[19] !== b || C[20] !== M || C[21] !== u.fromMarketingName || C[22] !== u.toId || C[23] !== u.toMarketingName || C[24] !== H || C[25] !== Y) Te = e(b, {
    tierLabel: H,
    fromName: u.fromMarketingName,
    toName: u.toMarketingName,
    toProviderId: u.toId,
    onDone: Y
  }, M), C[19] = b, C[20] = M, C[21] = u.fromMarketingName, C[22] = u.toId, C[23] = u.toMarketingName, 
  C[24] = H, C[25] = Y, C[26] = Te; else Te = C[26];
  return Te;
}

function hKs(o) {
  let l = 0, h = Ux(o);
  if (h.stdin) i("tengu_stdin_interactive", {});
  let x = new X, A = z8n();
  WDo(A);
  let b = a.CLAUDE_CODE_FRAME_TIMING_LOG, C = -1, T = 0, E = Math.max(1, a.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
  if (b) try {
    C = Me(b, "a");
  } catch {}
  return {
    getFpsMetrics: () => x.getMetrics(),
    stats: A,
    renderOptions: {
      ...h,
      onFrame: U => {
        if (x.record(U.durationMs), A.observe("frame_duration_ms", U.durationMs), C >= 0 && U.phases) {
          let M = T++ % E === 0, _ = JSON.stringify({
            total: U.durationMs,
            at: Date.now(),
            ...U.phases,
            ...M && {
              rss: process.memoryUsage.rss(),
              cpu: process.cpuUsage()
            }
          }) + `\n`;
          Re(C, _);
        }
        if (Gte()) return;
        for (let M of U.flickers) {
          if (M.reason === "resize") continue;
          let _ = Date.now();
          if (_ - l < 1e3) i("tengu_flicker", {
            desiredHeight: M.desiredHeight,
            actualHeight: M.availableHeight,
            reason: M.reason
          });
          l = _;
        }
      }
    }
  };
}

function De(o, l) {
  import("./chunk-fkyw55yw.js").then(h => h.startMemoryWatcher(o, l));
}

export { pBs, fBs, LFo, mKs, u5n, LEe, tLr, gKs, mBs, hKs };
