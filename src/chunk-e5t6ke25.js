// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { nG } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { wY } from "./chunk-bjsp1prn.js";

import { vY } from "./chunk-q8qtrpxv.js";

import { kl } from "./chunk-x1z20h6y.js";

var tf = "CronCreate", yw = "CronDelete", RRe = "CronList", MLn = "Epoch ms of the job's next run, the scheduler's per-job offset included";

var o = 3e5, xRe = wY.recurringMaxAgeMs / 864e5;

function tC() {
  return !a.CLAUDE_CODE_DISABLE_CRON && nG("tengu_kairos_cron", !0, o);
}

function qbe() {
  return nG("tengu_kairos_cron_durable", !0, o);
}

function ruo(e) {
  return e ? "Schedule a prompt to run at a future time \u2014 either recurring on a cron schedule, or once at a specific time. Pass durable: true to persist to .claude/scheduled_tasks.json; otherwise session-only." : "Schedule a prompt to run at a future time within this Claude session \u2014 either recurring on a cron schedule, or once at a specific time.";
}

function ouo(e) {
  return e ? "true = persist to .claude/scheduled_tasks.json and survive restarts. false (default) = in-memory only, dies when this Claude session ends. Use true only when the user asks the task to survive across sessions." : "Has no effect \u2014 durable persistence is not available. All jobs are session-only (in-memory, gone when this Claude session ends).";
}

function suo(e) {
  let {recurringFrac: t, recurringCapMs: s, oneShotMaxMs: n} = wY, r = e ? `## Durability\n\nBy default (durable: false) the job lives only in this Claude session \u2014 nothing is written to disk, and the job is gone when Claude exits. Pass durable: true to write to .claude/scheduled_tasks.json so the job survives restarts. Only use durable: true when the user explicitly asks for the task to persist ("keep doing this every day", "set this up permanently"). Most "remind me in 5 minutes" / "check back in an hour" requests should stay session-only.` : `## Session-only\n\nJobs live only in this Claude session \u2014 nothing is written to disk, and the job is gone when Claude exits.`, i = e ? "Durable jobs persist to .claude/scheduled_tasks.json and survive session restarts \u2014 on next launch they resume automatically. One-shot durable tasks that were missed while the REPL was closed are surfaced for catch-up. Session-only jobs die with the process. " : "";
  return `Schedule a prompt to be enqueued at a future time. Use for both recurring schedules and one-shot reminders.\n\nUses standard 5-field cron in the user's local timezone: minute hour day-of-month month day-of-week. "0 9 * * *" means 9am local \u2014 no timezone conversion needed.\n\n## One-shot tasks (recurring: false)\n\nFor "remind me at X" or "at <time>, do Y" requests \u2014 fire once then auto-delete.\nPin minute/hour/day-of-month/month to specific values:\n  "remind me at 2:30pm today to check the deploy" \u2192 cron: "30 14 <today_dom> <today_month> *", recurring: false\n  "tomorrow morning, run the smoke test" \u2192 cron: "57 8 <tomorrow_dom> <tomorrow_month> *", recurring: false\n\n## Recurring jobs (recurring: true, the default)\n\nFor "every N minutes" / "every hour" / "weekdays at 9am" requests:\n  "*/5 * * * *" (every 5 min), "0 * * * *" (hourly), "0 9 * * 1-5" (weekdays at 9am local)\n\n## Avoid the :00 and :30 minute marks when the task allows it\n\nEvery user who asks for "9am" gets \`0 9\`, and every user who asks for "hourly" gets \`0 *\` \u2014 which means requests from across the planet land on the API at the same instant. When the user's request is approximate, pick a minute that is NOT 0 or 30:\n  "every morning around 9" \u2192 "57 8 * * *" or "3 9 * * *" (not "0 9 * * *")\n  "hourly" \u2192 "7 * * * *" (not "0 * * * *")\n  "in an hour or so, remind me to..." \u2192 pick whatever minute you land on, don't round\n\nOnly use minute 0 or 30 when the user names that exact time and clearly means it ("at 9:00 sharp", "at half past", coordinating with a meeting). When in doubt, nudge a few minutes early or late \u2014 the user will not notice, and the fleet will.\n\n${r}\n${vY() ? `\n## Not for live watching\n\n${tf} re-runs a prompt at fixed wall-clock intervals. To watch a log file, process, or command output and be notified the moment something changes, use the ${kl} tool instead \u2014 ${kl} streams events as they happen; cron polls on a schedule.\n` : ""}\n## Runtime behavior\n\nJobs only fire while the REPL is idle (not mid-query). ${i}The scheduler shifts each job by a fixed per-job offset on top of whatever you pick: by default a recurring job runs up to ${Math.round(t * 100)}% of its period late (max ${s / 6e4} min), and a one-shot job landing on :00 or :30 runs up to ${n / 1e3} s early. The result of this tool and of ${RRe} gives each job's actual next run time: when you tell the user when a job will run, give that time, not the minute in the cron expression. Picking an off-minute is still the bigger lever.\n\nRecurring tasks auto-expire after ${xRe} days \u2014 they fire one final time, then are deleted. This bounds session lifetime. Tell the user about the ${xRe}-day limit when scheduling recurring jobs.\n\nReturns a job ID you can pass to ${yw}.`;
}

var iuo = "Cancel a scheduled cron job by ID";

function auo(e) {
  return e ? `Cancel a cron job previously scheduled with ${tf}. Removes it from .claude/scheduled_tasks.json (durable jobs) or the in-memory session store (session-only jobs).` : `Cancel a cron job previously scheduled with ${tf}. Removes it from the in-memory session store.`;
}

var luo = "List scheduled cron jobs";

function duo(e) {
  return e ? `List all cron jobs scheduled via ${tf}, both durable (.claude/scheduled_tasks.json) and session-only.` : `List all cron jobs scheduled via ${tf} in this session.`;
}

export { tf, yw, RRe, MLn, xRe, tC, qbe, ruo, ouo, suo, iuo, auo, luo, duo };
