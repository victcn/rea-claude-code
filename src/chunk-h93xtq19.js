// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { Rd, a } from "./chunk-j016gcgm.js";

import { q, mL, HX } from "./chunk-3pqddg8f.js";

import { Cp, fS, Dj, wl, d } from "./chunk-6ah1819r.js";

import { ge } from "./chunk-07cck4g7.js";

import { go } from "./chunk-0jsy3sb7.js";

import { i } from "./chunk-hedpgw9m.js";

import { Ft, efe, Di } from "./chunk-xywp7esx.js";

import { yTr } from "./chunk-yk8mtyzg.js";

import { jd } from "./chunk-sfvypv11.js";

import { n9e } from "./chunk-qqd24q2y.js";

import { lL, ax } from "./chunk-4dwgr3et.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { UXe, ROe, fje } from "./chunk-60c97a4m.js";

import { N9 } from "./chunk-mw643xee.js";

import { yd } from "./chunk-3xtsjx0y.js";

import { Tce, YQ, Ace, Zst, ym, Y8t, Vre } from "./chunk-z09tf6qf.js";

import { $_ } from "./chunk-7en5gt36.js";

import { pH } from "./chunk-4v78v8fd.js";

import { de, USe } from "./chunk-5ydr99q3.js";

import { vIn, xAt, EIn, Yd, Va, Ore, Qv, ep, q4 } from "./chunk-84yp45y8.js";

import { fN } from "./chunk-wgsx43va.js";

import { nf } from "./chunk-s82cb921.js";

import { i8, vu, uY } from "./chunk-v7qc2kz8.js";

import { F6, uhe, Iet, aW, n2e, phe, DSn } from "./chunk-ph08gw4j.js";

import { WVr, j5o, WHe } from "./chunk-dyag3ekh.js";

import { EJ } from "./chunk-3b094tj0.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { spawn as V } from "child_process";

import { randomUUID as x } from "crypto";

import { existsSync as I, statSync as H } from "fs";

import { realpath as N } from "fs/promises";

import { homedir as W } from "os";

import { basename as G, dirname as j, join as U } from "path";

async function TZn() {
  let r = await Rd("claude"), e = nf()[0], [n, u] = await Promise.all([ r ? N(r).catch(() => r) : null, e ? N(e).catch(() => e) : null ]);
  if (r && (u === null || n !== u)) return uY({
    cmd: r,
    prefixArgs: [],
    target: r
  });
  return vu();
}

function Y(r) {
  switch (r.kind) {
   case "newer":
    return `Successfully updated from ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION} to version ${r.version}`;

   case "older":
    return `Successfully downgraded from ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION} to version ${r.version}`;

   case "same":
   case "unknown":
    return "Session resumed";
  }
}

var J = Symbol("staff, over Remote Control");

function z(r) {
  if (fN(r)) return "not_owner";
  let e = r.submittedFromComposer;
  return EJ(e) ? e : "not_typed";
}

function K(r, ...e) {
  if (r !== J && !EJ(r)) throw Error("Can't restart automatically. Type /restart at the prompt.");
  return Iet(...e);
}

var B = r => ({
  type: "system",
  subtype: "local_command",
  content: r,
  level: "info",
  timestamp: (new Date).toISOString(),
  uuid: x(),
  isMeta: !1
}), M = Ue(new Map, r => r.clear());

function Q(r, e) {
  let n = (w, p) => (i("tengu_update_refused", {
    foreground: c(w)
  }), p), u = "To use the installed version, exit and start Claude Code again";
  if (n2e(r) !== void 0) {
    let p = Va(), g = Yd();
    if (p || g === null) return n(p ? "saving_off" : "not_written", "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session.");
    if (Ore() !== 0) return n("write_failed", "Couldn't save this session to disk, so nothing was restarted. If you exit now, you may not be able to resume all of it.");
    if (e === void 0) {
      let o = M.get(g);
      if (o === void 0) try {
        o = H(g).size > 0 ? void 0 : "empty";
      } catch {
        o = "missing";
      }
      if (o !== void 0) return M.set(g, o), n("gone", o === "empty" ? "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session." : "Can't restart this session. Its saved file can't be found. It may have been moved or deleted. You can keep working here, or run /export to save a copy of the conversation before you exit.");
    }
  }
  let _ = DSn();
  if (!I(_)) return n("no_folder", `Can't restart this session here. Its folder, ${pH(Os(_))}, can't be found. Nothing was changed. To use the installed version, exit and start Claude Code in the folder you want to work in, then run /resume and press Ctrl+A to show all projects.`);
  if (yd()?.bridgeSessionId) return n("remote_control", "Can't restart while Remote Control is connected. To use the installed version, exit and start Claude Code again, then run /resume.");
  if (!I(vu().target)) return n("no_launcher", "Can't restart. The installed version wasn't found. To check your installs, run /doctor.");
  let y = EIn(vIn);
  if (y !== void 0) return n("above_max_version", `Can't restart on the installed version. Version ${y} is on hold, so this session is staying on ${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION}. Nothing was changed.`);
  return;
}

var K4s = async (r, e) => {
  if (lL()) return {
    type: "text",
    value: "/restart isn't available in this environment."
  };
  let n = z(e);
  if (n === "not_owner") return i("tengu_update_refused", {
    not_owner: !0
  }), i("tengu_update_refused_not_owner", {}), {
    type: "text",
    value: "/restart isn't available over Remote Control."
  };
  let u = Ft() ? a.CLAUDE_JOB_DIR : void 0;
  if (Ft() && (!efe() || !u)) {
    i("tengu_update_refused", {
      bg_session: !0
    });
    let t = efe() ? null : ym();
    return {
      type: "text",
      value: t ? `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` : "This is a background session \u2014 press \u2190 to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)."
    };
  }
  if (!u) {
    let t = Yd(), S = U($_(DSn()), `${q()}.jsonl`);
    if (t && t !== S) {
      i("tengu_update_refused", {
        transcript_path_drift: !0
      });
      let h = pH(Os(DSn())), C = j(t), f = await fje(t), s = f && (UXe(f.tail, "relocated", "relocatedCwd") ?? ROe(f.head, "cwd"));
      return {
        type: "text",
        value: `Cannot /update \u2014 ${s && $_(s) === C ? `this session belongs to ${pH(Os(s))} but is running in ${h}` : `this session is running in ${h} but its transcript is in ${pH(Os(C))}`}. Restart manually with --resume to continue on the latest version.`
      };
    }
  }
  let _ = t => {
    if (!WHe(e.taskRegistry.all())) return;
    return i("tengu_update_refused", {
      active_tasks: !0,
      ...t && {
        deferred: t
      }
    }), "Can't restart while work is running in the background \u2014 wait for it to finish (or stop it via /tasks), then try again.";
  }, y = t => {
    let S = YQ(de(e), mL());
    if (S.length === 0) return _(t);
    i("tengu_update_refused", {
      uncarriable: !0
    });
    let h = Va() ? "" : " (add --continue to return to this conversation)";
    return `Can't switch to the new version from inside this session \u2014 it has restrictions a restart can't carry over (${S.join("; ")}). Nothing was changed; exit and start claude again for the new version${h}.`;
  }, w = u ? _() : y();
  if (w !== void 0) return {
    type: "text",
    value: w
  };
  if (u) {
    let t = G(u);
    if (await aW(e.messages, e.storageV5), !await Ht(ep(), 3e4, "session flush").then(() => !0, () => !1)) return i("tengu_update_refused", {
      bg_flush_failed: !0
    }), {
      type: "text",
      value: "Couldn't save the session to disk, so nothing was restarted \u2014 try /restart again in a moment."
    };
    let h = await TZn(), C = _(!0);
    if (C !== void 0) return {
      type: "text",
      value: C
    };
    let f = {
      ...process.env
    };
    for (let s of n9e) delete f[s];
    delete f.CLAUDE_JOB_DIR;
    for (let s of Object.keys(f)) if (s.startsWith("CLAUDE_BG_")) delete f[s];
    i("tengu_update_bg_respawn", {
      carried_comment_monitor: WVr() && j5o(e.taskRegistry.all())
    });
    try {
      let s = V(h.cmd, [ ...h.prefixArgs, "respawn", t ], {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0,
        env: f,
        cwd: W()
      });
      ax(s.pid), s.on("error", O => {
        d(O);
      }), s.unref();
    } catch (s) {
      return d(s), i("tengu_update_refused", {
        bg_spawn_failed: !0
      }), {
        type: "text",
        value: `Couldn't restart automatically \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.`
      };
    }
    return {
      type: "text",
      value: `Restarting this session on the latest version\u2026 If it doesn't come back within a minute, run \`claude respawn ${t}\` from a terminal.`
    };
  }
  if (n === "not_typed") return i("tengu_update_refused", {
    foreground: c(n)
  }), i("tengu_update_refused_not_typed", {}), {
    type: "text",
    value: "Can't restart automatically. Type /restart at the prompt."
  };
  let p = Q(e.messages, e.storageV5);
  if (p !== void 0) return {
    type: "text",
    value: p
  };
  await aW(e.messages, e.storageV5);
  let g = y(!0);
  if (g !== void 0) return {
    type: "text",
    value: g
  };
  let o = de(e), L = [ ...Tce(o, USe(e)), ...Ace(o, HX()) ], E = jd() ? void 0 : e.getAppState().teamContext?.teamName;
  await phe();
  let T = y(!0);
  if (T !== void 0) return {
    type: "text",
    value: T
  };
  let m = yd(), k = m?.bridgeSessionId, P = m?.getLastSequenceNum(), D = m?.outboundOnly, F = m?.sessionGroupingId;
  if (k) e.setAppState(t => t.replBridgeSkipNextArchive ? t : {
    ...t,
    replBridgeSkipNextArchive: !0
  }), m.writeSdkMessages([ yTr("Switching to latest Claude Code\u2026 reconnecting", q()) ]), 
  await Ht(m.flush(), 2e3, "bridge flush").catch(() => {}), await m.teardown({
    skipArchive: !0
  });
  let v = {};
  if (E) v.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = E;
  Object.assign(v, N9()), Object.assign(v, Zst(o.additionalWorkingDirectories)), Object.assign(v, Vre(k, P, D, F, Y8t(m, q4())) ?? {});
  let A = vu(), R = await F6(e.messages, "relaunch", {}, e.storageV5), b = n2e(e.messages) !== void 0;
  if (b && !R) {
    try {
      await Qv([ ...e.messages, B(`<${Cp}>/restart</${Cp}>\n<${fS}>restart</${fS}>\n<${Dj}></${Dj}>`), B(`<${wl}>${Y(xAt(A.target))}</${wl}>`) ], void 0, void 0, void 0, e.storageV5);
    } catch (t) {
      d(t);
    }
    await aW(e.messages, e.storageV5);
  }
  i(b ? "tengu_update_relaunch" : "tengu_update_relaunch_fresh", {
    from_version: Di({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION),
    target_version: Di(vIn(A.target)),
    native_install: i8()
  });
  try {
    return await K(n, R, {
      launcher: A,
      freshIfNoTranscript: !b,
      extraArgs: L,
      proactivity: {
        proactivityLevel: e.getProactivityLevel(),
        toolPermissionContext: o
      },
      env: Object.keys(v).length > 0 ? v : void 0,
      preSpawn: () => {
        process.stdout.write(b && Ore() !== 0 ? ge.dim(`\nClaude's last response couldn't be saved, so it may be missing.\n\n`) : `\n`);
      }
    }, e.storageV5);
  } catch (t) {
    if (!R) throw t;
    return d(t), {
      type: "text",
      value: go(e.session) ? uhe("Couldn't restart Claude Code (detail withheld on this connection).", l(t)) : `Couldn't restart Claude Code \u2014 ${l(t)}.`
    };
  }
};

export { TZn, K4s };
