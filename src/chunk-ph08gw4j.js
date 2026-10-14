// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, ke, ux, Ir, TEe } from "./chunk-3pqddg8f.js";

import { x, l } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { w_ } from "./chunk-a16yb89m.js";

import { zee, Ggt, M4n, ag, gEe, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { m } from "./chunk-3ykz5st8.js";

import { USn } from "./chunk-g0d5bpd5.js";

import { qT, nf, bf, O0 } from "./chunk-s82cb921.js";

import { vOe } from "./chunk-1zg3hbfq.js";

import { eN, Yd, Vno, Qv, aCt, ep, RS, yCe, uV, nfr, KLe, Qn, $3t, Wt } from "./chunk-84yp45y8.js";

import { cq } from "./chunk-4dwgr3et.js";

import { q0 } from "./chunk-dd98x6x7.js";

import { $_ } from "./chunk-7en5gt36.js";

import { vu, uY } from "./chunk-v7qc2kz8.js";

import { Aso } from "./chunk-z09tf6qf.js";

import { XEn, JEn, PDe } from "./chunk-g8dhxbna.js";

import { qVr, z5o } from "./chunk-dj0c89yb.js";

import { LSn } from "./chunk-1n6psrk4.js";

import { NSn } from "./chunk-xta98mtj.js";

import { $Sn } from "./chunk-szc684pe.js";

import { ywt, bwn } from "./chunk-ndmv7x2e.js";

import { sKt, iKt, Ovt, aKt, fkn, mkn } from "./chunk-dk14h9bn.js";

import { Dp } from "./chunk-fwpqj1qs.js";

import { O } from "./chunk-1xnsr4dy.js";

import { spawnSync as C } from "child_process";

import { stat as T } from "fs/promises";

import { constants as I } from "os";

import { dirname as y } from "path";

import { isAbsolute as S } from "path";

function E(e, r, a, n) {
  if (cq(), O() === "windows" || !S(e)) return;
  let i;
  try {
    if (n) i = process.cwd(), ag(n);
    process.execve(e, r, NSn(a)), t(`execve(${e}) returned \u2014 falling back to spawn`, {
      level: "warn"
    });
  } catch (s) {
    t(`execReplaceProcess: ${l(s)} \u2014 falling back to spawn`, {
      level: "warn"
    });
  } finally {
    if (i !== void 0) try {
      ag(i);
    } catch {}
  }
}

async function R(e) {
  let r = Yd();
  if (!r) return !1;
  return w(r, e);
}

async function w(e, r) {
  if (await T(e).then(i => i.size > 0, () => !1)) return !0;
  let n = Dp(e, r);
  if (n === void 0) return !1;
  try {
    let i = await n.backend.statMeta(n.key);
    if (!i.ok && i.error.code !== "NotFound") t(`transcriptHasBytes: backend statMeta failed: ${i.error.code}`);
    return i.ok && i.value.size > 0;
  } catch (i) {
    return d(i), !1;
  }
}

async function F6(e, r, {responseStreaming: a = !1} = {}, n) {
  let i = JEn(r);
  if (!i || a) return i;
  try {
    if (await Qv([ ...e, Wt(XEn[r], "warning") ], void 0, void 0, void 0, n), r === "relaunch") await aW(e, n);
  } catch (s) {
    throw PDe(), s;
  }
  return !0;
}

async function CZn(e, {responseStreaming: r = !1} = {}, a) {
  try {
    await F6(e, "process_exit", {
      responseStreaming: r
    }, a);
  } catch (n) {
    d(n);
  }
}

async function che(e, r = {}, a, n) {
  if (await CZn(e, r, a), n) await Qn(0, "prompt_input_exit", {
    removeWorktree: n
  }); else await Qn(0, "prompt_input_exit");
}

var f = "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)", _ = `${f.charAt(0).toUpperCase()}${f.slice(1)}.`, A = "Automatic continue at the usage-limit reset was cancelled.";

function uhe(e, r) {
  return r.includes(f) || r.includes(_) || r.includes(A) ? `${e} ${_}` : e;
}

function kJ(e, r, {as: a = "sentence", exitsAfterward: n = !1} = {}) {
  if (PDe(), !r) return e;
  if (a === "clause") return `${e} \u2014 ${f}`;
  return `${e}\n${n ? A : _}`;
}

function Iet(e, r, a) {
  return TJ(r, a).catch(n => {
    if (n instanceof Error) n.message = kJ(n.message, e, {
      as: "clause"
    }); else PDe();
    throw n;
  });
}

async function aW(e, r) {
  let a = n2e(e)?.uuid;
  try {
    if (a) await aCt(a, void 0, r); else if (Vno() && await R(r)) await aCt(null, void 0, r);
  } catch (n) {
    d(n);
  }
}

function n2e(e) {
  return e.findLast(r => (r.type === "user" || r.type === "assistant") && RS(r) && !eN(r.uuid));
}

var L = "Claude Code couldn't restart. Your conversation is saved. Start Claude Code again and run /resume to pick it up.", D = "Claude Code couldn't restart. Start Claude Code again.";

async function phe() {
  if (await O0()) return;
  throw m("agent_launcher", "relaunch_launcher_not_runnable"), new x(bf() ?? `${qT}: launcher \`${nf()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry; this session was left running`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable");
}

async function TJ(e = {}, r) {
  cq();
  let {cmd: a, prefixArgs: n} = uY(e.launcher ?? vu());
  await phe();
  let i = e.extraArgs ?? [], s;
  if (e.args) s = e.args; else if (e.freshIfNoTranscript && !await R(r)) s = i; else s = [ "--resume", q(), ...i ];
  let h = s[0] === "--resume" && !e.args;
  $3t(), yCe(), nfr(), await Promise.all([ Ht(ep(), 3e4, "flush timeout (relaunch)").catch(() => {}), Ht(Ggt(), zee, "cleanup timeout").catch(() => {}).then(() => Ht(KLe(), 1e3, "analytics flush timeout").catch(() => {})) ]), 
  e.preSpawn?.();
  let o = {
    ...process.env
  };
  if (delete o.CLAUDE_CODE_TUI_JUST_SWITCHED, delete o.CLAUDE_CODE_TUI_TRIAL, delete o.CLAUDE_BRIDGE_REATTACH_SESSION, 
  delete o.CLAUDE_BRIDGE_REATTACH_SEQ, delete o.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY, 
  delete o.CLAUDE_BRIDGE_REATTACH_GROUPING, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT, 
  delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ORG, delete o.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL, 
  delete o[Aso], delete o.CLAUDE_BG_WORKSPACE_TRUSTED, delete o.CLAUDE_BG_CARRIED_PROMPTS_SHA256, 
  delete o[qVr], ux() && TEe()) o.CLAUDE_BG_WORKSPACE_TRUSTED = "1", Object.assign(o, await z5o());
  if (delete o[ywt], $Sn(o, s), delete o[sKt], delete o[Ovt], delete o[aKt], delete o[iKt], 
  e.proactivity && !e.args) Object.assign(o, fkn(e.proactivity), mkn(e.proactivity));
  Object.assign(o, e.env);
  for (let u of e.dropEnv ?? []) delete o[u];
  Object.assign(o, bwn());
  let g = DSn();
  await p(), USn(), E(a, [ a, ...n, ...s ], o, g);
  for (let u of [ "SIGINT", "SIGTERM", "SIGHUP" ]) process.removeAllListeners(u), 
  process.on(u, () => {});
  await p(), LSn();
  let c = C(a, [ ...n, ...s ], {
    stdio: "inherit",
    env: o,
    cwd: g
  });
  if (process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), 
  c.error) t(`Failed to relaunch: ${c.error.message}`, {
    level: "error"
  }), await p(), uV(e.failedLine ?? (h ? L : D)), w_("relaunch_spawn_error"), process.exit(1);
  if (c.signal) process.removeAllListeners(c.signal), process.kill(process.pid, c.signal), 
  process.exit(128 + (I.signals[c.signal] ?? 0));
  process.exit(c.status ?? (c.signal ? 1 : 0));
}

function DSn() {
  let e = Yd(), r = ke();
  if (e && y(e) === $_(r)) return r;
  return Ir();
}

async function p() {
  await Promise.all([ Ht(gEe(), 2e3, "debug flush timeout (relaunch)").catch(() => {}), Ht(vOe(), 2e3, "diag flush timeout (relaunch)").catch(() => {}), Ht(M4n(), 2e3, "pre-exit flush timeout (relaunch)").catch(() => {}), Ht(q0(), 2e3, "write queue drain timeout (relaunch)").catch(() => {}) ]);
}

export { F6, CZn, che, uhe, kJ, Iet, aW, n2e, phe, TJ, DSn };
