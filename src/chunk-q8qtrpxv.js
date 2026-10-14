// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { KG, he } from "./chunk-3pqddg8f.js";

import { k, Rr } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { I } from "./chunk-5wbhf1bk.js";

import { rn } from "./chunk-yxennhe9.js";

import { ORe } from "./chunk-3znaqeaq.js";

import { wP } from "./chunk-yae7t0cr.js";

import { Lc } from "./chunk-ejckqh3m.js";

var _Pt = 3e5, DJt = 36e5, o = 18e5, r = 6e5;

function GYe() {
  return KG() || he() ? r : o;
}

var s = "[Monitor timed out \u2014 re-arm if needed.]";

function woe() {
  return he() || Rr("tengu_breezy_crescent", !0);
}

function ULn(e) {
  return `${Math.round(e / 6e4)} minutes`;
}

function Xys(e, t) {
  if (t) return {
    timeout_ms: Math.min(e.timeout_ms, GYe()),
    persistent: !1
  };
  let n = e.persistent === !0;
  if (!a.CLAUDE_CODE_REMOTE) return {
    timeout_ms: e.timeout_ms,
    persistent: n
  };
  return {
    timeout_ms: n ? o : Math.min(e.timeout_ms, o),
    persistent: !1
  };
}

function __r(e, t, n) {
  if (!n) return s;
  let i = rn(e, {
    hideTrailingZeros: !0
  });
  if (t === 0) return `[Monitor expired after ${i} with no events delivered. Re-arm it if you still need the watch \u2014 and widen the filter if silence was unexpected.]`;
  return `[Monitor expired after ${i} with ${t} ${I(t, "event")} delivered. Re-arm it if you still need the watch.]`;
}

function puo() {
  return ORe() ? `\n\nWhen an event lands that the user would want to act on now \u2014 an error appeared, the status they were waiting on flipped \u2014 send a ${wP}. Not every event is worth a push; the ones that change what they'd do next are.` : "";
}

function vY() {
  return k("tengu_amber_sentinel", !1);
}

function fuo() {
  let e = Lc(), t = '- **One** ("tell me when the server is ready / the build finishes") \u2192 ' + (e ? 'run the command in the **foreground with Bash**, exiting when the condition is true, e.g. `until grep -q "Ready in" dev.log; do sleep 0.5; done`.' : 'use **Bash with `run_in_background`** and a command that exits when the condition is true, e.g. `until grep -q "Ready in" dev.log; do sleep 0.5; done`. You get a single completion notification when it exits.'), n = e ? "use a foreground Bash `until` loop instead" : "use Bash `run_in_background` with an `until` loop instead (one notification, ends in seconds)";
  return `Start a background monitor that streams events from a long-running script. Each stdout line is an event \u2014 you keep working and notifications arrive in the chat. Events arrive on their own schedule and are not replies from the user, even if one lands while you're waiting for the user to answer a question.\n\nPick by how many notifications you need:\n${t}\n- **One per occurrence, ${woe() ? "until the monitor expires (re-arm to continue)" : "indefinitely"}** ("tell me every time an ERROR line appears") \u2192 Monitor with an unbounded command (\`tail -f\`, \`inotifywait -m\`, \`while true\`).\n- **One per occurrence, until a known end** ("emit each CI step result, stop when the run completes") \u2192 Monitor with a command that emits lines and then exits.\n\nYour script's stdout is the event stream. Each line becomes a notification. Exit ends the watch.\n\n  # Each matching log line is an event\n  tail -f /var/log/app.log | grep --line-buffered "ERROR"\n\n  # Each file change is an event\n  inotifywait -m --format '%e %f' /watched/dir\n\n  # Poll GitHub for new PR comments and emit one line per new comment\n  last=$(date -u +%Y-%m-%dT%H:%M:%SZ)\n  while true; do\n    now=$(date -u +%Y-%m-%dT%H:%M:%SZ)\n    gh api "repos/owner/repo/issues/123/comments?since=$last" --jq '.[] | "\\(.user.login): \\(.body)"'\n    last=$now; sleep 30\n  done\n\n  # Node script that emits events as they arrive (e.g. WebSocket listener)\n  node watch-for-events.js\n\n  # Per-occurrence with a natural end: emit each CI check as it lands, exit when the run completes\n  prev=""\n  while true; do\n    s=$(gh pr checks 123 --json name,bucket)\n    cur=$(jq -r '.[] | select(.bucket!="pending") | "\\(.name): \\(.bucket)"' <<<"$s" | sort)\n    comm -13 <(echo "$prev") <(echo "$cur")\n    prev=$cur\n    jq -e 'all(.bucket!="pending")' <<<"$s" >/dev/null && break\n    sleep 30\n  done\n\n**Don't use an unbounded command for a single notification.** \`tail -f\`, \`inotifywait -m\`, and \`while true\` never exit on their own, so the monitor stays armed until timeout even after the event has fired. For "tell me when X is ready," ${n}. Note that \`tail -f log | grep -m 1 ...\` does *not* fix this: if the log goes quiet after the match, \`tail\` never receives SIGPIPE and the pipeline hangs anyway.\n\n**Script quality:**\n- Every pipe stage must flush per line or matches sit in its buffer unseen: \`grep\` needs \`--line-buffered\`, \`awk\` needs \`fflush()\`. \`head\` cannot flush at all \u2014 \`| head -N\` delivers nothing until N matches accumulate, then ends the stream.\n- In poll loops, handle transient failures (\`curl ... || true\`) \u2014 one failed request shouldn't kill the monitor.\n- Poll intervals: 30s+ for remote APIs (rate limits), 0.5-1s for local checks.\n- Write a specific \`description\` \u2014 it appears in every notification ("errors in deploy.log" not "watching logs").\n- Only stdout is the event stream. ${he() ? "Stderr does not trigger notifications; you see only its last lines, in the notice sent when the script ends" : "Stderr goes to the output file (readable via Read) but does not trigger notifications"} \u2014 for a command you run directly (e.g. \`python train.py 2>&1 | grep --line-buffered ...\`), merge stderr with \`2>&1\` so its failures reach your filter. (No effect on \`tail -f\` of an existing log \u2014 that file only contains what its writer redirected.)\n\n**Coverage \u2014 silence is not success.** When watching a job or process for an outcome, your filter must match every terminal state, not just the happy path. A monitor that greps only for the success marker stays silent through a crashloop, a hung process, or an unexpected exit \u2014 and silence looks identical to "still running." Before arming, ask: *if this process crashed right now, would my filter emit anything?* If not, widen it.\n\n  # Wrong \u2014 silent on crash, hang, or any non-success exit\n  tail -f run.log | grep --line-buffered "elapsed_steps="\n\n  # Right \u2014 one alternation covering progress + the failure signatures you'd act on\n  tail -f run.log | grep -E --line-buffered "elapsed_steps=|Traceback|Error|FAILED|assert|Killed|OOM"\n\nFor poll loops checking job state, emit on every terminal status (\`succeeded|failed|cancelled|timeout\`), not just success. If you cannot confidently enumerate the failure signatures, broaden the grep alternation rather than narrow it \u2014 some extra noise is better than missing a crashloop.\n\n**Output volume**: Every stdout line is a conversation message, so the filter should be selective \u2014 but selective means "the lines you'd act on," not "only good news." Never pipe raw logs; filter to exactly the success and failure signals you care about. Monitors that produce too many events are automatically stopped; restart with a tighter filter if this happens.\n\nStdout lines within 200ms are batched into a single notification, so multiline output from a single event groups naturally.\n\nThe script runs in the same shell environment as Bash. Exit ends the watch (exit code is reported). ${l()} Use TaskStop to cancel early.`;
}

function l() {
  return woe() ? `Every monitor expires after \`timeout_ms\` (default ${ULn(_Pt)}, at most ${ULn(GYe())}): it is killed and you get one notice with the event count. Re-arm it if you still need the watch; for a long watch (PR monitoring, log tails) set \`timeout_ms\` to the maximum and re-arm on each expiry, and widen the filter if an expiry with no events was unexpected.` : "Timeout \u2192 killed. Set `persistent: true` for session-length watches (PR monitoring, log tails) \u2014 the monitor runs until you call TaskStop or the session ends.";
}

var muo = `\n**ws source** \u2014 open a WebSocket and stream each incoming text frame as an event. No shell, no polling: the server pushes, you get notified.\n\n  Monitor({\n    ws: {url: 'wss://events.example.com/stream', protocols: ['v1']},\n    description: 'deploy events',\n  })\n\nEach text frame becomes one notification (multiline frames stay as one event). Binary frames are reported as \`[binary frame, N bytes]\` rather than passed through. Socket close ends the watch with the close code surfaced; errors are surfaced before close. Same rate limiting as bash \u2014 a firehose will be suppressed and eventually stopped, so subscribe to a filtered feed where one exists.\n\nPrefer this over \`command: 'websocat wss://\u2026'\` \u2014 it avoids the extra process and line-buffering pitfalls. Use bash when you need to transform or filter frames with shell tools before they become events.`;

export { _Pt, DJt, GYe, woe, ULn, Xys, __r, puo, vY, fuo, muo };
