// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, jt } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { Br, wI } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { ut } from "./chunk-yxennhe9.js";

import { XM } from "./chunk-z09tf6qf.js";

function ejo(e, n, o) {
  return e !== void 0 && e.prompt !== null && o.stdin && o.stdout && (n.outputFormat === void 0 || n.outputFormat === "text") && n.sdkUrl === void 0 && n.jsonSchema === void 0 && !n.includePartialMessages && !n.replayUserMessages && n.maxTurns === void 0 && n.maxBudgetUsd === void 0 && n.resumeSessionAt === void 0 && n.resumeDropsTurn === void 0 && n.rewindFiles === void 0 ? {
    open: e.open,
    prompt: e.prompt
  } : void 0;
}

var vBt = "Can't open \u2014 this session is running in another terminal", c = 60, p = /["\u02BA\u02EE\u05F4\u201C-\u201F\u2033\u2036\u301D-\u301F\uFF02]/g;

function Oyt(e) {
  let n = wI(Br(e)).replace(p, "'");
  return `"${ut(n, c)}"`;
}

function cge({title: e, holder: n, canFork: o, handoff: s}) {
  let {jobId: i} = n, r = e ? Oyt(e) : "That session", a = i ? `Run \`claude attach ${i}\` to open it, or \`claude stop ${i}\` first to resume it here.` : "Run `claude agents` to find it and open it, or stop it there first to resume it here.", u = o ? " Add --fork-session to branch off a copy instead." : "";
  return `${r} is running in the background${i ? ` (${i})` : ""}.${I3n(s)} ${a}${u}`;
}

async function YX(e, n) {
  let o = (await oze(e)).find(i => i.kind !== "interactive");
  if (!o) return null;
  let s = o.jobId !== void 0 && XM.test(o.jobId) && await m(o.jobId, e, n) ? o.jobId : void 0;
  return {
    kind: o.kind,
    jobId: s
  };
}

async function m(e, n, o) {
  try {
    let {getJobDir: s, readJobState: i} = await import("./chunk-hctw5vmt.js"), r = await i(s(e), o), a = n.toLowerCase();
    return r !== null && (r.sessionId.toLowerCase() === a || r.resumeSessionId?.toLowerCase() === a);
  } catch (s) {
    if (jt(s)) t(`[resume] job state unreadable: ${l(s)}`, {
      level: "warn"
    }); else d(s);
    return !1;
  }
}

async function oze(e, n) {
  let o = n?.rejectUnreadable ? await (await import("./chunk-q864dhf3.js")).listAllLiveSessions(void 0, {
    rejectUnreadable: !0
  }) : await import("./chunk-q864dhf3.js").then(r => r.listAllLiveSessions()).catch(() => []), s = e.toLowerCase(), i = [];
  for (let r of o) {
    if (r.sessionId?.toLowerCase() !== s || r.pid === process.pid || !r.kind) continue;
    if (r.kind === "interactive" && r.parkedJobId !== void 0) continue;
    i.push({
      kind: r.kind,
      jobId: r.jobId,
      pid: r.pid
    });
  }
  return i;
}

function I3n(e) {
  switch (e?.reason) {
   case void 0:
   case "not_openable":
    return "";

   case "prompt_undelivered":
    return {
      queued: " Your prompt was saved and will be sent to it when you next restart it.",
      unconfirmed: ` Your prompt may not have reached it: ${e.detail}.`,
      failed: ` Your prompt was not sent to it: ${e.detail}.`
    }[e.delivery];

   case "open_failed":
    return e.promptSent ? ` Your prompt was sent to it, but it could not be opened here: ${e.detail}.` : ` It could not be opened here: ${e.detail}.`;
  }
}

export { ejo, vBt, Oyt, cge, YX, oze, I3n };
