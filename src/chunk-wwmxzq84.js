// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Fe } from "./chunk-0cdqg49t.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import { Ir, Qr } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import { E, jt } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { Qe, Ke, k } from "./chunk-xywp7esx.js";

import { Ee } from "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-9yajep3y.js";

import { i } from "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-j90se18b.js";

import "./chunk-jkzenvsk.js";

import "./chunk-5brm0azz.js";

import "./chunk-8yperama.js";

import "./chunk-x5881pc6.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-hmce8a0s.js";

import "./chunk-nnrb0acr.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-07cck4g7.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-qqd24q2y.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-2my8wpr5.js";

import "./chunk-46phtgr7.js";

import "./chunk-y3nc3daq.js";

import "./chunk-mw643xee.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-g6nh65r0.js";

import { Yf } from "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-4mw3z9gg.js";

import "./chunk-zzhmvqjt.js";

import { ORe } from "./chunk-3znaqeaq.js";

import "./chunk-hzd25ag9.js";

import { yO } from "./chunk-x773dgec.js";

import { il, zYe, IRe, NLn, FT, Od } from "./chunk-gxwv3c1r.js";

import { QZe } from "./chunk-f1b65tj6.js";

import "./chunk-q8qtrpxv.js";

import { wP } from "./chunk-yae7t0cr.js";

import { kl } from "./chunk-x1z20h6y.js";

import { FF } from "./chunk-v2stbart.js";

import "./chunk-ejckqh3m.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

import { Ne } from "./chunk-m8ez8fhk.js";

import { readFileSync as x } from "fs";

import { readFile as M } from "fs/promises";

import { join as v } from "path";

var p = Ne("./loopAutonomousPreamble-07qcyhv4.md");

var y = Ne("./loopAutonomousPreamblePersistent-3zqtkrvg.md");

function c() {
  if (a.CLAUDE_CODE_LOOP_PERSISTENT) return !0;
  return k("tengu_kairos_loop_persistent", !1);
}

function L() {
  let e = c() ? y : p, t = QZe({
    forCloudSession: Boolean(a.CLAUDE_CODE_REMOTE)
  });
  return t ? `${e.trimEnd()}\n\n${t}\n` : e;
}

function I() {
  i("tengu_kairos_loop_persistent_activated", {
    variant: c()
  });
}

function s(e = !1) {
  if (!ORe()) return "";
  let o = !e && c() ? "newly blocked on a decision you won't make alone, you're ending the loop" : "newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";
  return `\n\nUse ${wP} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`;
}

function P() {
  return `# Autonomous loop tick\n\nRun the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${il} from this tick.${s()}`;
}

function d() {
  let e = Qe(), t = FF(Ke(e), e), o = yO(), r = o ? `send a brief status update for this tick via ${Yf}` : "write a brief status update for this tick", n = t ? `Immediately before re-arming, ${r}.` : `After re-arming, ${r}.`;
  return `\n\nIf a ${kl} is armed (check ${FT}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${kl} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${NLn({
    preArmStatus: t,
    briefMode: o
  })} To stop the loop, call ${il} with \`stop: true\` and ${Od} the monitor (use ${FT} to find its task ID if no longer in context).`;
}

function N() {
  return `# Autonomous loop tick (dynamic pacing)\n\nRun the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.\n\nYou scheduled this tick via the ${il} tool (not a recurring cron). To keep the loop alive, call ${il} again this turn with \`prompt\` set to the literal sentinel \`${IRe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`;
}

function _(e) {
  return e === zYe || e === IRe;
}

function A(e, t) {
  if (!_(t)) return null;
  I();
  let o = t === IRe ? N() : P();
  if (e.autonomousPreambleDelivered || e.lastLoopFileDelivered !== null) return o;
  return e.autonomousPreambleDelivered = !0, `${L()}\n\n---\n\n${o}`;
}

var w = "__autonomous_preamble__", D = "<<loop.md>>", l = "<<loop.md-dynamic>>";

function q() {
  return `# /loop tick \u2014 loop.md tasks\n\nWork the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${il} from this tick.${s(!0)}`;
}

function j() {
  return `# /loop tick \u2014 loop.md tasks (dynamic pacing)\n\nWork the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.\n\nYou scheduled this tick via the ${il} tool (not a recurring cron). To keep the loop alive, call ${il} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`;
}

function B() {
  return `# /loop tick \u2014 loop.md absent (dynamic pacing)\n\nloop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.\n\nYou scheduled this tick via the ${il} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${il} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`;
}

var h = 25e3;

function U(e) {
  if (e.length <= h) return e;
  let t = e.lastIndexOf(`\n`, h);
  return `${e.slice(0, t > 0 ? t : h)}\n\n> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`;
}

function W() {
  return b(S()) ?? b(T());
}

function S() {
  return v(Qr() ?? Ir(), ".claude", "loop.md");
}

function T() {
  return v(Ee(), "loop.md");
}

function b(e) {
  let t;
  try {
    t = x(e, "utf-8");
  } catch (o) {
    return O(o);
  }
  return g(e, t);
}

async function u(e) {
  let t;
  try {
    t = await M(e, "utf-8");
  } catch (o) {
    return O(o);
  }
  return g(e, t);
}

function O(e) {
  if (jt(e) || E(e) === "EISDIR") return null;
  throw e;
}

function g(e, t) {
  let o = t.trim();
  if (o.length === 0) return null;
  return {
    path: e,
    content: U(o)
  };
}

async function Y(e) {
  let t = await u(S());
  if (t) return t;
  let o = T();
  if (!e) return u(o);
  let r = await e.read([ Fe.state("loop-file") ]);
  if (!r.ok) return u(o);
  let n = r.value.items[0];
  if (!n.found) return null;
  return g(o, Buffer.from(n.value.buffer, n.value.byteOffset, n.value.byteLength).toString("utf-8"));
}

function m(e) {
  return e === D || e === l;
}

function H(e, t) {
  if (!m(t)) return null;
  return R(e, t, W());
}

async function z(e, t, o) {
  if (!m(t)) return null;
  return R(e, t, await Y(o));
}

function R(e, t, o) {
  let r = t === l;
  if (o) {
    let f = r ? j() : q();
    if (e.lastLoopFileDelivered === o.content) return f;
    return e.lastLoopFileDelivered = o.content, `# /loop tick \u2014 tasks from ${o.path}\n\nThe user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).\n\n---\n\n${o.content}\n\n---\n\n${f}`;
  }
  I();
  let n = r ? B() : P();
  if (e.lastLoopFileDelivered === w || e.autonomousPreambleDelivered) return n;
  return e.lastLoopFileDelivered = w, e.autonomousPreambleDelivered = !0, `${L()}\n\n---\n\n${n}`;
}

function ye(e) {
  return _(e) || m(e);
}

function we(e, t) {
  return A(e, t) ?? H(e, t) ?? t;
}

async function ke(e, t, o) {
  return A(e, t) ?? await z(e, t, o) ?? t;
}

export { l as LOOP_FILE_DYNAMIC_SENTINEL, D as LOOP_FILE_SENTINEL, L as getAutonomousLoopPreamble, ye as isLoopDefaultSentinel, m as isLoopFileSentinel, I as logAutonomousLoopActivation, Y as readLoopFileAsync, we as resolveLoopDefaultFire, ke as resolveLoopDefaultFireAsync };
