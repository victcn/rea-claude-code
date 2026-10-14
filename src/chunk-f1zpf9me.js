// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { Ngt, JFs, Cje, dEe, Rje, _$t, cL, n6 } from "./chunk-6ah1819r.js";

import { un } from "./chunk-y752zmas.js";

import { t } from "./chunk-kawq2919.js";

import { dl, $s, ne, xp } from "./chunk-5wbhf1bk.js";

import { a, tr } from "./chunk-j016gcgm.js";

import { bfe } from "./chunk-46phtgr7.js";

import { $Oe } from "./chunk-5brm0azz.js";

import { psn } from "./chunk-e7rgnck3.js";

import { TLt, ALt, aG, YO, wVn, vVn, Xft, HPr, yfe, Osn, i0s } from "./chunk-g6nh65r0.js";

import { bve } from "./chunk-g4dysb0v.js";

import { RE } from "./chunk-gkzapwcq.js";

import { N, D } from "./chunk-hmqkrrtz.js";

var WH = 5e4, Oxr = 1e4, T2n = 4e3, D8e = 128e3, ife = 5e5;

var UBe = 4, LHs = 4e5, A2n = 2e5, oA = 50, NHs = 1073741824, $Hs = 1e4, xon = 1e4, eLt = 1e5;

var R = null;

function THs(e) {
  let n = R;
  return R = e, n;
}

function E2n() {
  return R?.("tengu_cobalt_plinth_lovage", !1) === !0;
}

var AHs = [ "mcp_needs_auth", "mcp_disabled", "mcp_required_missing", "auth_expired", "auth_overridden", "auth_missing_scope", "design_needs_authorization", "sandbox_violation", "outside_reads_blocked", "memory_paused", "feature_disabled", "policy_denied", "spawn_arg_limit", "staged_for_review" ], CHs = [ "claude_ai", "claude_design" ], RHs = [ "workflows", "artifacts" ], xHs = [ "managed_settings", "org_policy", "unavailable", "user_setting" ], PHs = [ "org_denied", "latched" ];

function lve() {
  return {
    kind: "auth_expired",
    provider: "claude_ai"
  };
}

function H8e(e) {
  return {
    kind: "auth_overridden",
    provider: "claude_ai",
    managed: e
  };
}

function Ron(e) {
  switch (e) {
   case "env":
    return H8e(!1);

   case "fd":
    return H8e(!0);

   case "store":
   case "none":
    return lve();
  }
}

var P = new WeakMap;

function jH(e, n) {
  return P.set(e, n), e;
}

function IHs(e) {
  if (e === null || typeof e !== "object") return;
  return P.get(e);
}

function Oo() {
  return un().CLAUDE_AI_ORIGIN.includes("staging") ? "staging" : "prod";
}

function FHs() {
  return se() ?? un().CLAUDE_AI_ORIGIN;
}

function se() {
  return;
}

function U(e) {
  let n;
  try {
    n = new URL(e);
  } catch {
    return;
  }
  let r = RE(n.hostname), o;
  switch (n.protocol) {
   case "https:":
   case "wss:":
    o = "https:";
    break;

   case "http:":
   case "ws:":
    if (!r) return;
    o = "http:";
    break;

   default:
    return;
  }
  if (n.username !== "" || n.password !== "" || n.pathname !== "/" || n.search !== "" || n.hash !== "") return;
  return `${o}//${n.host}`;
}

function UHs() {
  return !1;
}

function BHs() {
  return ae() ?? un().BASE_API_URL;
}

function ae() {
  return;
}

function jHs() {
  return !1;
}

function cIe() {
  return;
}

var dve = "/api/claude_code/policy_limits", p = "disabled by your organization's policy", v = "disabled for the rest of this session because an organization with a restricted policy was signed in earlier";

function Z0t(e, n, r, o) {
  if (bve(r).length > 0) return `${e} ${n} ${p}.`;
  if (o !== void 0) return o;
  return `${e} ${n} ${p}. Contact your organization admin to enable ${n === "are" ? "them" : "it"}.`;
}

function dIe(e, n) {
  return `${e} ${n} ${v}. Restart Claude Code to re-evaluate.`;
}

function sfe(e) {
  return `Couldn't verify your organization's policy for ${e.toLowerCase()}. Check your network connection and try again.`;
}

function rft(e) {
  return `Couldn't load your organization's policy, which governs ${e.toLowerCase()}. The request for ${dve} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path. Ask your network admin to allow it; \`claude doctor\` (or /status in a session) shows which host was asked.`;
}

function Ixr(e, n, r) {
  let o = `${e} ${n === "are" ? "aren't" : "isn't"} available`, {host: i, httpStatus: s} = r;
  switch (r.errorCode) {
   case "parse_failed":
    return `${o}: Claude Code couldn't read the reply when it asked ${i} for your organization's policy, which usually means a network proxy or web filter answered instead.`;

   case "network_error":
   case "timeout":
    return `${o}: couldn't reach ${i} to load your organization's policy. Check your network or proxy.`;

   case "auth_failed":
    if (s === 403) return `${o}: ${i}, or a proxy in front of it, refused the request for your organization's policy (HTTP 403).`;
    return s === 401 ? `${o}: ${i} didn't accept this session's credentials when Claude Code asked for your organization's policy.` : `${o}: no credentials could be attached to the request for your organization's policy.`;

   case "spurious_304":
    return `${o}: the saved copy of your organization's policy belongs to a previous sign-in, and a fresh one hasn't loaded yet.`;

   case "stale_tunnel_credential":
    return `${o}: the machine running claude ssh changed credentials while your organization's policy was loading, and a fresh copy hasn't loaded yet.`;

   case "request_failed":
    if (s === 404) return `${o}: the request for your organization's policy got a 404 from ${i}, which usually means a proxy or gateway isn't forwarding ${dve}.`;
    if (s === 304) return `${o}: a caching proxy answered in place of ${i} when Claude Code asked for your organization's policy.`;
    if (s === 407) return `${o}: your proxy asked for authentication before it would forward the request for your organization's policy to ${i}.`;
    if (s !== null && (s >= 500 || s === 429)) return `${o}: your organization's policy couldn't be loaded from ${i} (HTTP ${s}). Try again later.`;
    return s !== null ? `${o}: your organization's policy couldn't be loaded from ${i} (HTTP ${s}). Check your proxy settings.` : `${o}: the request to ${i} for your organization's policy didn't complete. If you use a proxy, check that it lets ${i} through.`;
  }
}

function OHs(e) {
  return `Couldn't verify your organization's policy for ${e.toLowerCase()}. Check your network connection, then restart Claude Code and try again.`;
}

function MHs(e) {
  return `/${e} is available for your organization but wasn't when this session started. Restart Claude Code to use it.`;
}

function k2n(e, n) {
  if (bve(e).length > 0) return p;
  return n ?? p;
}

function HHs() {
  return `${v} \u2014 restart Claude Code to re-evaluate`;
}

function DHs() {
  return "couldn't verify your organization's policy \u2014 check your network connection and try again";
}

function bAo() {
  return `your organization's policy couldn't be loaded: the request for ${dve} got a 404, which usually means a proxy or gateway isn't forwarding that path. Ask your network admin to allow it`;
}

var afe = "\u02f9-\u02fc\u230c-\u230f\u231c-\u231f\u239b-\u23cc\u23dc-\u23e1\u2e00-\u2e0d\u2e1c\u2e1d\u2500-\u257f";

var Sk = "[Request interrupted by user]", vp = "[Request interrupted by user for tool use]", GR = "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]", QP = "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]", r$ = "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]", wk = "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.", uIe = "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]", pIe = "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]", fIe = "[Tool call not completed: an approval request expired with no answer, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]", mIe = "[Tool call not completed: an approval request was still unanswered when the message that follows arrived and was closed, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]", cve = [ "[Request interrupted by user]", "[Request interrupted by user for tool use]", "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]", "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]", "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]", "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.", "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]", "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]" ];

function Vg(e) {
  if (e.type !== "user") return !1;
  let n = e.message?.content;
  if (typeof n === "string") return cve.some(r => n.startsWith(r));
  if (!Array.isArray(n)) return !1;
  return n.length > 0 && n.every(r => {
    let o = r?.type === "text" ? r.text : r?.type === "tool_result" && r.is_error === !0 ? r.content : void 0;
    return typeof o === "string" && cve.some(i => o.startsWith(i));
  });
}

var V_ = "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). STOP what you are doing and wait for the user to tell you how to proceed.", oft = "User rejected tool use", ZP = "API Error: Request was aborted.", L8e = `The user sent a new message while you were working:\n`, gIe = "Operation stopped by hook";

function Pon(e) {
  return e.startsWith(wk) || e.startsWith(uIe) || e.startsWith(pIe);
}

var sft = `\n\nNote: The user's next message may contain a correction or preference. Pay close attention \u2014 if they explain what went wrong or how they'd prefer you to work, consider saving that to memory for future sessions.`;

function uve(e) {
  if (e.type !== "user" || e.interruptedByShutdown !== !0) return !1;
  let n = e.message?.content;
  return Array.isArray(n) && n.some(r => r.type === "tool_result");
}

var Mxr = ` hook feedback:\n`, SAo = [ "Stop", "TeammateIdle", "TaskCreated", "TaskCompleted" ];

function C2n(e, n) {
  return `${e}${Mxr}${n}`;
}

var tLt = "[structured-output-enforce]", wAo = "", ift = "[projects-reply-gate]", Ion = "The previous response failed to produce a valid tool call. Please retry the tool call now.", vAo = "Your tool call was malformed and could not be parsed. Please retry.", Oon = "[Your previous response had no visible output. Please continue and produce a user-visible response.]", Mon = "The PermissionDenied hook indicated you may retry this tool call.", Hxr = "Your response above was stopped by a safety classifier \u2014 this is not a tool or API error. " + "The rest of it was withheld, and tool calls in it that had not finished did not run. Do not produce that content again, even reworded.", EAo = Hxr + ' Exception: a tool call whose result reads "Interrupted" was already running when the response was stopped; it may have partially or fully completed.', aft = "Output token limit hit. Resume directly \u2014 no apology, no recap of what you were doing. " + "Pick up mid-thought if that is where the cut happened. Break remaining work into smaller pieces.", lft = "Output token limit hit while you were still reasoning, before this response produced any text or tool call. That reasoning was not kept and is not part of this conversation, so there is nothing to resume. Continue from the conversation above: reason much more briefly and produce your answer or next tool call well within the output limit.", kAo = "Your response was cut off because it exceeded the output token limit. Continue from where you left off. What you write next is shown as a separate block below the text so far, so begin at the start of the line, table row, list item or sentence that was cut, writing it again in full, and if you were inside a code block or a table, open it again first (the same code fence and language, the table's header row). Repeat nothing before that point and do not comment on the interruption. Keep going until the response is complete.", TAo = "[Your previous response reached the output limit with no visible output. Please continue and produce a brief user-visible response or tool call right away.]", nLt = "Your response above was cut off mid-stream. Resume directly from where it stops \u2014 no apology, no recap. " + "If none of it survived, answer the request from the start.", rLt = "Your response above was cut off mid-stream and only your next message is delivered. " + "Write the complete response again from the start \u2014 no apology, no mention of the cut-off.", Hon = "Goal check-in: \xab", ce = [ tLt, wAo, ift, psn, Hon ].filter(e => e.length > 0), k = [ aft, lft, TAo, kAo, nLt, rLt ], le = [ Ion, vAo, Oon, Mon, Hxr, EAo, ...k ];

function pve(e) {
  if (e.type !== "user" || e.isMeta !== !0) return !1;
  let n = S(e.message?.content);
  if (n === void 0) return !1;
  if (ce.some(r => n.startsWith(r))) return !0;
  if (le.includes(n)) return !0;
  return SAo.some(r => n.startsWith(`${r}${Mxr}`));
}

function WHs(e) {
  if (!pve(e)) return !1;
  let n = S(e.message?.content);
  return n === nLt || n === rLt;
}

function zHs(e) {
  return pve(e) && k.includes(S(e.message?.content) ?? "");
}

function S(e) {
  if (typeof e === "string") return e;
  let n = Array.isArray(e) ? e[0] : void 0;
  if (typeof n === "object" && n !== null && "type" in n && n.type === "text" && "text" in n && typeof n.text === "string") return n.text;
  return;
}

var I = 58n, de = (1n << 128n) - 1n, R2n = 22, Dxr = "[1-9A-HJ-NP-Za-km-z]{22}", _e = new RegExp("^[1-9A-HJ-NP-Za-km-z]{22}$"), fe = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function E(e) {
  if (!fe.test(e)) return null;
  let n = BigInt(`0x${e.replaceAll("-", "")}`), r = "";
  for (let o = 0; o < 22; o++) r = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[Number(n % I)] + r, 
  n /= I;
  return r;
}

function oj(e) {
  if (!_e.test(e)) return null;
  let n = 0n;
  for (let o of e) n = n * I + BigInt("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(o));
  if (n > de) return null;
  let r = n.toString(16).padStart(32, "0");
  return `${r.slice(0, 8)}-${r.slice(8, 12)}-${r.slice(12, 16)}-${r.slice(16, 20)}-${r.slice(20)}`;
}

var fn = "Artifact", dft = [ "document", "slides", "design", "other" ], a_ = "ArtifactComments", Zm = "ArtifactData", GO = "ArtifactCheck", KZ = [ fn, a_, Zm, GO ], Cm = /^[0-9a-f]{32}$/, Don = "file_path", AAo = [ "action", "url", "prompt" ], CAo = [ "page", "version" ], Lon = "Describe what this page contains and reproduce its substantive text content, structure, and any data it presents.", RAo = " \u2014 live version; raw HTML follows]", Non = "You hadn't viewed the live version of this artifact, so the publish was refused.", xAo = "This session hadn't viewed the live version of this artifact, so the publish was refused.", PAo = e => `[Artifact ${e}${RAo}`, IAo = " \u2014 live version; a line diff against the content you sent follows]", OAo = e => `[Artifact ${e}${IAo}`, MAo = new RegExp(`\\n\\[Artifact [\\w-]{1,64}(?:${dl(RAo)}|${dl(IAo)})\\n`), Lxr = "Its full source (", Nxr = "Merge your edits onto it", HAo = new RegExp(`\\n(?=\\[Artifact [\\w-]{1,64}(?:${dl(RAo)}|${dl(IAo)})\\n|${dl(Lxr)}|${dl(Nxr)})`), fve = "Publish refused \u2014 nothing was merged or published:", q = "file_path required to publish. Write the page to an .html file, then call again with its path as `file_path`", $xr = `${q}, or pass \`type_url\` to start a new Artifact from a type. There is no inline content parameter.`, Fxr = `${q}. There is no inline content parameter, and creating an Artifact from a type is not available in this session, so build the page yourself.`, DAo = [ $xr, Fxr ], mve = {
  republishForceRefused: "pr_review_republish_force_refused",
  decisionsProvenance: "pr_review_decisions_provenance",
  republishAnchor: "pr_review_republish_anchor",
  republishStamp: "pr_review_republish_stamp",
  overwriteRefused: "pr_review_overwrite_refused"
};

function hIe() {
  return E2n() ? "\u2026/artifact/<id>" : "\u2026/code/artifact/<uuid>";
}

var cft = "Artifacts need a claude.ai login", $on = 13, Fon = "not_logged_in", Uxr = 15, Uon = 22, v8s = [ "policy_blocked", "policy_fetch_failed", "policy_route_missing" ], Bon = {
  rate_limited: "publish_rate_limited",
  contract_rollout: "publish_contract_rollout"
}, LAo = `${cft}. Run /login and select "Claude account with subscription", then retry \u2014 the "Anthropic Console account" option does not provide claude.ai credentials.`, oLt = "Every Artifact call is refused like this until a claude.ai login is available, so do not retry; tell the user what is needed.", jon = "Changing the input will not help: every Artifact call is refused like this until a claude.ai login is available, so do not retry; tell the user what is needed. The input was also invalid, but the schema error below matters only once that login is available.", NAo = `${cft}, and this remote session authenticates through the machine that launched it, which is not signed in to claude.ai. Sign in to claude.ai on that machine (/login, "Claude account with subscription"), then reconnect this session.`, $Ao = `${cft}, but this session authenticates with a credential injected by its host environment, which takes precedence and cannot be changed here. Start a session that is signed in to claude.ai to publish or read artifacts.`;

function FAo(e) {
  return `${cft}. This session's API access is set up by ${e ? "your organization's managed settings" : "the ANTHROPIC_FEDERATION_RULE_ID / ANTHROPIC_ORGANIZATION_ID environment variables"}, which stays active for everything else \u2014 artifacts also use a claude.ai account. Run /login and select "Claude account with subscription", then retry.`;
}

function Bxr(e) {
  switch (e) {
   case "org_policy_unverifiable":
    return "Artifacts can't check the signed-in Claude account's organization settings from this session: the account belongs to a Claude organization (Team or Enterprise), and this session's API access uses a different credential that can't read those settings. Run /login with a personal Claude account (Pro or Max), then retry.";

   case "plan_unreadable":
    return "The signed-in Claude account's plan couldn't be read from this session. Run /login again to refresh the signed-in account, then retry.";

   case "org_denied":
    return Z0t("Artifacts", "are", bfe(), "Artifacts are disabled by your organization's policy. Contact your organization admin to enable them, then retry.");

   case "latched":
    return dIe("Artifacts", "are");

   case "cache_miss":
    return sfe("Artifacts");

   case "policy_route_missing":
    return rft("Artifacts");

   case "policy_unavailable":
    return "Artifacts can't check the organization settings that apply to this session: the session's configuration (such as a custom ANTHROPIC_BASE_URL) prevents the policy lookup. Remove that configuration, then retry.";
  }
}

function jxr(e) {
  switch (e) {
   case "plan_unreadable":
    return lve();

   case "org_denied":
   case "latched":
    return {
      kind: "policy_denied",
      feature: "artifacts",
      policy_kind: e
    };

   case "org_policy_unverifiable":
   case "cache_miss":
   case "policy_route_missing":
   case "policy_unavailable":
    return;
  }
}

function Wxr(e) {
  if (j(e)) return "Artifacts aren't available: Anthropic couldn't confirm your organization's settings for this cloud session (HTTP 403). This isn't a problem with your network.";
  return Ixr("Artifacts", "are", e.outcome);
}

function j({cause: e, outcome: n}) {
  return e === "policy_fetch_failed" && $Oe() && n.httpStatus === 403 && n.serverErrorCode === "oauth_not_allowed_for_organization";
}

var pe = "Claude Code reads that policy from ", Ee = /^[A-Za-z0-9.-]+(:[0-9]+)?$/;

function ge(e) {
  return Ee.test(e) ? `${e}${dve}` : `the API's ${dve} route`;
}

var he = " and keeps retrying it in the background; whether artifacts are allowed is decided once it loads. Do not retry this call now. Tell the user why artifacts are unavailable and, if a proxy, VPN or web filter is involved, that their IT admin needs to let that address through.", Ae = ", and a proxy or gateway that does not forward that path will keep answering 404, so nothing in this session can load it. Do not retry this call. Tell the user that their IT admin needs to let that address through to the API.";

function W2s(e) {
  let n = ge(e.outcome.host);
  if (j(e)) return `Claude Code reads the organization's policy from ${n}. In this cloud session, Anthropic's API refused the request for the user's organization (HTTP 403). Do not retry this call now. Tell the user that artifacts are unavailable because Anthropic couldn't confirm their organization's settings for this cloud session, and that it isn't a problem with their network.`;
  let r = e.cause === "policy_route_missing" ? Ae : he;
  return `${pe}${n}${r}`;
}

function Won(e) {
  return `${Wxr(e)}\n\n${W2s(e)}`;
}

function zon(e, n) {
  return `${cft}, and this session is authenticating with ${e}, which takes precedence over a claude.ai account. ${n} Then run /login and select "Claude account with subscription".`;
}

class He extends Error {
  reasonCode;
  maxErrorChars;
  constructor(e, n, r) {
    super(e);
    this.name = "ArtifactInputError", this.reasonCode = n, this.maxErrorChars = r?.maxErrorChars;
  }
}

var T = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", x = "https://(?:[a-z0-9-]+\\.)?claude\\.ai", N8e = "/(?:artifact|code/(?:artifact|frame))/", O = `${T}|${Dxr}`, y = `${N8e}(?:([A-Za-z0-9_-]*)-)?(${O})(?:[/?#]|$)`, C = `${N8e}(?:[A-Za-z0-9_-]*-)?(?:${O})/([^?#]+)`;

function A(e, n = !1) {
  if (e === void 0) return null;
  if (e.length !== R2n) return e;
  return n ? null : oj(e);
}

function m(e) {
  return e?.length === R2n ? {
    shortId: !0
  } : {};
}

var nr = new RegExp(`^${T}$`), hU = /^[\w-]{1,64}$/, sLt = 1024, yU = 16e3, UAo = WH, iLt = 2e4, DK = 3e5, BBe = "eval-stub://artifact/";

function Bc() {
  let e = tr.CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR;
  return typeof e === "string" && e.length > 0 ? e : null;
}

function L() {
  return null;
}

function BAo(e) {
  if (new RegExp(`^${x}(?:[/?#]|$)`).test(e)) return "prod";
  let n = L();
  if (n !== null && new RegExp(`^${n}(?:[/?#]|$)`).test(e)) return "staging";
  return null;
}

function Yt(e) {
  return J(e, !1);
}

function J(e, n) {
  let r = e.match(new RegExp(`^${x}${y}`)), o = A(r?.[2], n);
  if (o !== null) return g(e, {
    slug: o,
    env: "prod",
    ...m(r?.[2])
  }, r?.[1]);
  let i = L();
  if (i !== null) {
    let c = e.match(new RegExp(`^${i}${y}`)), l = A(c?.[2], n);
    if (l !== null) return g(e, {
      slug: l,
      env: "staging",
      ...m(c?.[2])
    }, c?.[1]);
  }
  let s = e.match(new RegExp(`^https://(${T})\\.frame\\.(staging\\.)?claudeusercontent\\.com(?:[/?#]|$)`));
  if (s?.[1]) return g(e, {
    slug: s[1],
    env: s[2] ? "staging" : "prod"
  });
  let u = cIe();
  if (u) {
    let c = e.match(new RegExp(`^https?://([^/?#]+)${y}`)), l = A(c?.[3], n);
    if (c !== null && l !== null && c[1] === new URL(u).host) return g(e, {
      slug: l,
      env: Oo(),
      ...m(c[3])
    }, c[2]);
  }
  return null;
}

var Te = /^[A-Za-z0-9_-]{1,64}$/, Re = /^[a-z0-9][a-z0-9-]{0,59}$/;

function g(e, n, r) {
  let o = r !== void 0 && Re.test(r) ? {
    ...n,
    vanity: r
  } : n, i = e.indexOf("#"), s = i === -1 ? e : e.slice(0, i), u = s.indexOf("?");
  if (u === -1) return o;
  let l = s.slice(u + 1).split("&").find(d => d.startsWith("sk="))?.slice(3);
  return l !== void 0 && Te.test(l) ? {
    ...o,
    sk: l
  } : o;
}

function gve(e) {
  let n = cIe(), r = L(), o = e.match(new RegExp(`^${x}${C}`))?.[1] ?? (r !== null ? e.match(new RegExp(`^${r}${C}`))?.[1] : void 0) ?? (n ? e.match(new RegExp(`^https?://${dl(new URL(n).host)}${C}`))?.[1] : void 0);
  return o === void 0 || o === "" ? void 0 : o;
}

function o$(e) {
  try {
    let n = new URL(e);
    if (n.protocol === "http:") n.protocol = "https:";
    if (n.hostname.endsWith(".")) n.hostname = n.hostname.slice(0, -1);
    return n.href;
  } catch {
    return e;
  }
}

function VO(e) {
  return typeof e === "string" ? Yt(o$(e)) : null;
}

function F9(e) {
  let n = o$(e);
  return Yt(n) ?? J(n.toLowerCase(), !0);
}

var Se = new RegExp(`^${dl(BBe)}(${T})(?:[/?#]|$)`);

function $8e(e) {
  let n = e.match(Se);
  return n?.[1] ? {
    slug: n[1]
  } : null;
}

var jBe = "artifact-deleted", jAo = new RegExp(`^<${jBe} url="([^"]+)"/>`), zxr = "artifact-attached", WAo = new RegExp(`^<${zxr} url="([^"]+)"(?: title="([^"]*)")?( own)?/>`);

function Ya(e) {
  let n = Yt(e)?.slug;
  if (n !== void 0) return n;
  return Bc() !== null ? $8e(e)?.slug ?? null : null;
}

function Gxr(e) {
  if (E2n()) {
    let n = E(e);
    if (n !== null) return `/artifact/${n}`;
  }
  return `/code/artifact/${e}`;
}

function b(e) {
  let n = cIe();
  if (n && e === Oo()) return n;
  return "https://claude.ai";
}

function Hn(e) {
  return `${b(e.env)}${Gxr(e.slug)}`;
}

function Sie(e) {
  return e === void 0 ? {} : {
    owned: e
  };
}

function WBe(e, n) {
  return {
    written: {
      url: Hn(e)
    },
    ...Sie(n)
  };
}

function Gon(e) {
  let n = b(e.env), r = E(e.slug);
  return [ `${n}/code/artifact/${e.slug}`, ...r !== null ? [ `${n}/artifact/${r}` ] : [] ];
}

function wv(e, n) {
  let {target: r, other: o} = Vxr(e, n);
  return o === void 0 ? r : `${r} [same artifact: ${o}]`;
}

function Vxr(e, n) {
  let r = typeof e === "string" ? Yt(e) : null;
  if (r === null) return {
    target: n
  };
  let o = b(r.env), i = E(r.slug), s = `${o}/code/artifact/${r.slug}`;
  if (i === null) return {
    target: s
  };
  let u = `${o}/artifact/${i}`;
  return r.shortId ? {
    target: u,
    other: s
  } : {
    target: s,
    other: u
  };
}

function zAo(e) {
  return e.other === void 0 ? "" : ` [same artifact: ${e.target} is ${e.other}]`;
}

function F8e(e) {
  return `https://${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`;
}

function xi(e, n) {
  let r = typeof e === "string" ? Yt(e) : null;
  return r ? Hn(r) : n;
}

function Kxr(e) {
  let r = e.match(new RegExp(`^https://claude\\.ai${N8e}(${O})/?$`));
  return A(r?.[1]) !== null;
}

var U8e = 8192, GAo = U8e * 4, x2n = 280, iG = 60, Ie = /&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, h = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: "\xa0",
  ndash: "\u2013",
  mdash: "\u2014",
  minus: "\u2212",
  hellip: "\u2026",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201a",
  ldquo: "\u201c",
  rdquo: "\u201d",
  bdquo: "\u201e",
  lsaquo: "\u2039",
  rsaquo: "\u203a",
  laquo: "\xab",
  raquo: "\xbb",
  middot: "\xb7",
  bull: "\u2022",
  dagger: "\u2020",
  Dagger: "\u2021",
  prime: "\u2032",
  Prime: "\u2033",
  trade: "\u2122",
  copy: "\xa9",
  reg: "\xae",
  deg: "\xb0",
  times: "\xd7"
};

function Z(e) {
  return e.replace(/<!--[\s\S]*?(?:-->|$)/g, "");
}

function w(e) {
  let n = Z(e.slice(0, U8e)), r = n.search(/<svg/i);
  return r === -1 ? n : n.slice(0, r);
}

function uft(e) {
  return e.replace(Ie, (n, r) => {
    if (r.startsWith("#")) {
      let i = r[1] === "x" || r[1] === "X" ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10);
      return i <= 1114111 && (i < 55296 || i > 57343) ? String.fromCodePoint(i) : n;
    }
    if (Object.hasOwn(h, r)) return h[r] ?? n;
    let o = r.toLowerCase();
    if (Object.hasOwn(h, o)) return h[o] ?? n;
    return n;
  });
}

var ye = /<link\b[^>]*>/gi, Ce = 2048, Q = /<link\b[^>]{0,2048}\bartifact-thumbnail\b/gi, me = new RegExp(Q.source, "i"), xe = /([^\s"'<>\/=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g, ee = "artifact-thumbnail", Oe = /^\(\s*prefers-color-scheme\s*:\s*dark\s*\)$/i, Le = /^(?:all|\(\s*prefers-color-scheme\s*:\s*light\s*\))$/i, M = /<(script|style)\b[^>]{0,2048}>[\s\S]*?(?:<\/\1\s*>|$)/gi;

function be(e) {
  let n = [];
  for (let r of e.match(ye) ?? []) {
    if (r.length > Ce) {
      if (me.test(r)) n.push({
        dark: !1,
        oversize: !0
      });
      continue;
    }
    let o, i, s;
    for (let d of r.matchAll(xe)) {
      let _ = d[1].toLowerCase(), f = d[2] ?? d[3] ?? d[4] ?? "";
      if (_ === "rel") o ??= f; else if (_ === "href") i ??= f; else if (_ === "media") s ??= f;
    }
    if (!(o ?? "").toLowerCase().split(/\s+/).includes(ee)) continue;
    let u = uft(s ?? "").trim(), c = Oe.test(u), l = u === "" || Le.test(u);
    n.push({
      ...i !== void 0 && {
        href: uft(i).trim()
      },
      dark: c,
      ...!c && !l && {
        badMedia: u
      }
    });
  }
  return n;
}

function Von(e) {
  let n = {
    pastWindow: !1
  }, r = w(e).replace(M, "");
  for (let {href: i, dark: s, badMedia: u, oversize: c} of be(r)) if (c) n.oversizeTag = !0; else if (i === void 0) n.missingHref = !0; else if (u !== void 0) n.badMedia ??= u; else if (s) n.dark ??= i; else n.light ??= i;
  let o = i => i.match(Q)?.length ?? 0;
  return n.pastWindow = e.includes(ee) && o(Z(e).replace(M, "")) > o(r), n;
}

var VAo = /[<>&"']/, Ne = [ [ "'", "'" ], [ '"', '"' ], [ "\u2018", "\u2019" ], [ "\u201c", "\u201d" ], [ "`", "`" ] ];

function P2n(e) {
  let n = e;
  for (let r = 0; r < 4; r++) {
    let o = n.trim();
    for (let [i, s] of Ne) if (o.length > i.length + s.length - 1 && o.startsWith(i) && o.endsWith(s)) {
      o = o.slice(i.length, o.length - s.length);
      break;
    }
    if (o = uft(o), o === n) break;
    n = o;
  }
  return n;
}

var G = String.raw`\p{Extended_Pictographic}[\ufe0e\ufe0f]?\p{Emoji_Modifier}?`, we = String.raw`\u{1f3f4}\u{e0067}\u{e0062}(?:\u{e0065}\u{e006e}\u{e0067}|\u{e0073}\u{e0063}\u{e0074}|\u{e0077}\u{e006c}\u{e0073})\u{e007f}`, Fe = String.raw`(?:[#*0-9]\ufe0f?\u20e3|\p{Regional_Indicator}{2}|${we}|${G}(?:\u200d${G}){0,3})`, Pe = new RegExp(`^${Fe}{1,4}$`, "u"), Ue = /\p{Regional_Indicator}{2}.*\p{Regional_Indicator}/u;

function pft(e) {
  if (typeof e !== "string" || e.length > 32) return;
  let n = P2n(e);
  return Pe.test(n) && !Ue.test(n) ? n : void 0;
}

function Kon(e) {
  let r = w(e).match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (r === void 0) return null;
  return yE(uft(r));
}

function yE(e) {
  let r = Array.from(e, i => {
    let s = i.codePointAt(0) ?? 0;
    return s <= 31 || s >= 127 && s <= 159 ? " " : i;
  }).join("").replace(/\s+/g, " ").trim();
  if (r === "") return null;
  let o = Array.from(r);
  return o.length > x2n ? o.slice(0, x2n).join("") : r;
}

var KO = /[\u201C\u201D\u201E\u201F\u2E42\uFF02\u02F5\u02F6\u2033\u2034\u2036\u2037\u02BA\u02DD\u02EE\u05F4\u3003\u301D-\u301F\u275D\u275E\u2760\u{1F676}-\u{1F678}]/gu, s$ = /['\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C8\u02CA\u02CB\u0374\u0384\u055A\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2018\u2019\u201A\u201B\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]{2,}/g, sj = /[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu;

function vC(e) {
  return e <= 31 || e >= 127 && e <= 159 || e === 173 || e === 1564 || e >= 8203 && e <= 8207 || e === 8232 || e === 8233 || e >= 8234 && e <= 8238 || e >= 8288 && e <= 8297 || e >= 65024 && e <= 65039 || e === 65279 || e >= 65529 && e <= 65531 || e === 94180 || e >= 917504 && e <= 917999;
}

var zBe = /^[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]$/u;

function De(e) {
  return e === 8204 || e === 8205;
}

function te(e) {
  return e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999;
}

function B8e(e) {
  return De(e) || te(e);
}

function GHs(e) {
  return !B8e(e) && (vC(e) || e > 127 && zBe.test(String.fromCodePoint(e)));
}

var ve = /^[\p{Extended_Pictographic}\p{Emoji_Modifier}]$/u, ke = 8, H = /^[#*0-9]$/, $e = /^\p{Script=Han}$/u, Me = /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Mongolian}\p{Script=Devanagari}\p{Script=Bengali}\p{Script=Gurmukhi}\p{Script=Gujarati}\p{Script=Oriya}\p{Script=Tamil}\p{Script=Telugu}\p{Script=Kannada}\p{Script=Malayalam}\p{Script=Sinhala}\p{Script=Myanmar}\p{Script=Tibetan}\p{Script=Khmer}]$/u, Ge = /^[\n\r\t\v\f\u0085\u2028\u2029]$/;

function I2n(e) {
  if ((e.codePointAt(0) ?? 0) < 128) return H.test(e) ? "keycap" : "plain";
  return ve.test(e) ? "pictograph" : H.test(e) ? "keycap" : $e.test(e) ? "han" : Me.test(e) ? "joining" : "plain";
}

function O2n(e, n) {
  if (te(e)) {
    let o = e <= 65039 ? n === "pictograph" || n === "han" || n === "keycap" && e === 65039 : n === "han";
    return {
      rides: o,
      after: o && n === "pictograph" ? "selector" : "none"
    };
  }
  return {
    rides: e === 8205 ? n === "pictograph" || n === "selector" || n === "joining" : n === "joining",
    after: "none"
  };
}

function fft(e, n, {joiners: r} = {
  joiners: !0
}) {
  let o = xp(e), i = [], s = 0, u = !1, c = 0, l = "none";
  for (let d of o) {
    if (++s > 16 * n || i.length >= n + 1) {
      u = !0;
      break;
    }
    let _ = d.codePointAt(0) ?? 0;
    if (!r && B8e(_)) l = "none"; else if (B8e(_)) {
      let f = O2n(_, l);
      if (f.rides && c < ke) i.push(d), c++, l = f.after; else l = "none";
    } else if (Ge.test(d)) {
      if (i.length > 0 && i.at(-1) !== " ") i.push(" ");
      l = "none";
    } else if (!GHs(_)) i.push(d), l = I2n(d); else l = "none";
  }
  if (i.length > n) u = !0;
  return {
    kept: _l(i.slice(0, u ? n - 1 : n).join("")),
    cut: u
  };
}

function qxr(e) {
  let n = "", r = "none";
  for (let o of xp(e)) {
    let i = Be(o, r);
    n += i.shown, r = i.after;
  }
  return n;
}

function Be(e, n) {
  let r = e.codePointAt(0) ?? 0;
  if (B8e(r)) {
    let o = O2n(r, n);
    return {
      shown: o.rides ? e : "\ufffd",
      after: o.after
    };
  }
  if (r === 10 || r === 13 || r === 9) return {
    shown: e,
    after: "none"
  };
  if (GHs(r)) return {
    shown: "\ufffd",
    after: "none"
  };
  return {
    shown: e,
    after: I2n(e)
  };
}

function fT(e, n) {
  let {kept: r, cut: o} = fft(e, n);
  return o ? `${r}\u2026` : r;
}

var Ye = 1024, Ke = 2048;

function lfe(e) {
  return typeof e === "string" ? fT(e, Ye) : "(unknown)";
}

function qZ(e) {
  return typeof e === "string" ? fT(e, Ke) : "(unknown)";
}

var Xe = 512;

function Yxr(e) {
  return e.replace(qe, n => `${n}\\`);
}

function hve(e) {
  return Yxr(fT(e, Xe));
}

function mT(e, n) {
  let {kept: r, cut: o} = fft(e, n, {
    joiners: !1
  });
  return o ? `${r}\u2026` : r;
}

var E8s = 500, KAo = 600;

function k8s(e) {
  let n = e?.action;
  return n === void 0 || n === "publish" || n === "live-edit" || n === "sync" || n === "version";
}

var dfe = 25, yve = 200, j8e = 50;

function _ve(e) {
  let n = e.scope;
  return n === "shared" || n === "all" ? n : "mine";
}

var Xxr = [ Ngt, Cje, JFs, Rje, _$t, dEe ], Y = Xxr, ze = [ "tool_use_error", "sandbox_violations" ], X = [ "result", "name", "output", "error", "system" ];

function We() {
  let {open: e, close: n, slash: r} = aG, o = `[${e}][^${TLt}${e}${n}]*[${r}]`, i = `(?<=[${TLt}$])[${e}][A-Za-z]`, s = YO(X), u = YO(X, ({close: c}) => `[\\r\\n${Xft}]*[${c}]`);
  return [ new RegExp(`(?=${o})${s.source}`, s.flags), new RegExp(`(?!${i})${u.source}`, u.flags) ];
}

function Jxr() {
  return [ [ "artifact", HPr ], [ "artifact", yfe, "owned", "by", "you" ], [ "artifact", yfe, "raw", "html", "follows" ], [ "artifact", yfe, "summary", "below" ], [ "artifact", yfe, "shared", "with", "you" ], [ "artifact", yfe, "published", "from", "your" ], [ "artifact", yfe, "live", "version" ], [ "artifact", yfe, "published", "by", "a", "writer" ], [ "this", "version", "has", yfe, "published", "files" ], [ "stored", "for", "the", "live", "version" ], [ "origin", "of", "this", "version" ], [ "created", "from", "the", "artifact", "type" ], [ "end", "of", "live", "content", Osn ], [ "end", "of", "live", "changes", Osn ], [ "an", "unchanged", "line", Osn ], [ "this", "artifact", yfe, "ships", "an", "instructions", "file" ], [ "could", "not", "check", "whether", "this", "artifact" ], [ "design", "system", "not", "attached" ], [ "design", "systems", "not", "listed" ], [ "design", "systems", "left", "out" ], [ "published", "types", "titled" ], [ "artifact", "types", "not", "listed" ], [ "type", "reference", "pages", "not", "attached" ], [ "a", "quickstart", "in", "this", "conversation" ], [ "the", "design", "guidance", "that", "came", "with" ], [ "how", "to", "build", "and", "iterate", "on" ] ];
}

class re {
  #e;
  #t;
  #n;
  get lead() {
    return this.#e ??= i0s(Jxr()), this.#e;
  }
  get page() {
    return this.#t ??= [ YO(Y), this.lead ], this.#t;
  }
  get envelopes() {
    return this.#n ??= [ YO(D([ ...Y, "transcript", ...n6.filter(e => e !== cL), ...ze ])), ...We(), wVn(), vVn(), this.lead ], 
    this.#n;
  }
}

var z2s = new K(() => new re);

function oe() {
  return z2s.of(B().host);
}

function qAo() {
  return oe().lead;
}

var F = [ vp, GR, QP, r$ ];

function qon(e) {
  return F.some(n => e.includes(n));
}

var Ve = new RegExp(F.map(e => `${dl(e.slice(0, 1))}(?=${dl(e.slice(1))})`).join("|"), "g"), qe = new RegExp([ "<(?=\\/?(?:tool_use_error|sandbox_violations|error)\\b)", "InputValidationError(?!\\\\)", ...F.map(e => `${dl(e.slice(0, 1))}(?=${dl(e.slice(1, -1))})`) ].join("|"), "gi");

function G2s(e) {
  return e.replace(Ve, n => `${n}\\`);
}

function _l(e, n = "all") {
  let r = oe(), o = e;
  for (let i of n === "page" ? r.page : r.envelopes) o = o.replace(i, s => `${s}\\`);
  return n === "page" ? o : G2s(o);
}

function YAo(e, n, r = "all") {
  let o = _l(ne(e, n), r);
  return o.length > n ? _l(ne(e, n - 1), r) : o;
}

function _U(e, n) {
  return _l($s(Array.from(ne(e, n * 4), r => vC(r.codePointAt(0) ?? 0) ? " " : r).join("").replace(sj, " ").replace(/\s+/g, " ").trim(), n));
}

var V2s = 80;

function W8e(e) {
  return sA((Ku(yE(e ?? "") ?? "") ?? "").replace(K_, " ").replace(/:\u2215\u2215/g, "://")).replace(wie, " ").replace(mft, gft).replace(/\s+/g, " ").trim();
}

function ij(e) {
  let n = W8e(e), r = ne(n, V2s);
  if (r === n) return n;
  return `${r.endsWith(":\u2215") ? r.slice(0, -1) : r}\u2026`;
}

function Ku(e) {
  return Array.from(e, n => vC(n.codePointAt(0) ?? 0) ? " " : n).join("").replace(sj, " ").replace(/"/g, "'").replace(KO, "'").replace(s$, "'").replace(/\s+/g, " ").trim() || null;
}

var K2s = String.raw`\u002b\u003d\u005e\u007c\u007e\u00a2-\u00a5\u00a8\u00ac\u00af\u00b1\u00b4\u00b8\u00d7\u00f7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u058f\u0606-\u0608\u060b\u07fe\u07ff\u0888\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20c1\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\ua838\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc2\ufdfc\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe3\uffe5\uffe6\uffe9-\uffec\u{10d8e}\u{10d8f}\u{11fdd}-\u{11fe0}\u{1cef0}\u{1d6c1}\u{1d6db}\u{1d6fb}\u{1d715}\u{1d735}\u{1d74f}\u{1d76f}\u{1d789}\u{1d7a9}\u{1d7c3}\u{1e2ff}\u{1ecb0}\u{1eef0}\u{1eef1}\u{1f3fb}-\u{1f3ff}\u{1f8d0}-\u{1f8d8}`, z = `[\\p{So}${K2s}\\p{Pd}\\p{Pc}\\p{Mn}\\p{Me}${ALt}\\u02c9\\u02cd\\u2017\\u2053\\u203e\\ufe49-\\ufe4c\\u0640\\u07fa\\u1173\\u1428\\u180a\\u2e0f\\u2f00\\u3127\\u3161\\u3192\\u31d0\\u4e00\\ua4ff\\ua7f7\\ua8fb\\uffda]`, je = new RegExp(`(?<!${z})${z}+>`, "gu");

function sA(e) {
  return e.replace(/[\u00bb\u02c2-\u02c5\u02ef-\u02ff\u1405\u1406\u1409\u1433\u1434\u1450\u1451\u15d2\u2023\u203a\u204d\u20d0-\u20ef\u2044\u2190-\u21ff\u2215\u226b\u227b\u227d\u227f\u2283\u22b1\u22b3\u22d7\u22d9\u2571\u2572\u2303-\u2304\u232a\u2344\u2348\u23e9-\u23ef\u23f5\u25b6-\u25bb\u261b\u261e\u276d\u276f\u2771\u2794-\u27bf\u27e9\u27eb\u27f0-\u27ff\u2900-\u297f\u29a8-\u29af\u2992\u2994\u29c1\u29d0\u29f5\u29f8\u29fd\u2a20\u2a7a\u2aa2\u2aa7\u2aa9\u2aab\u2aad\u2ab0\u2ab2\u2ab4\u2ab6\u2ab8\u2aba\u2abc\u2af8\u2b00-\u2bff\u3009\u300b\ue000-\uf8ff\ufe65\ufe68\uff0f\uff1e\uff3c\uffe9-\uffec\u{1f449}\u{1f599}\u{1f59b}\u{1f59d}\u{1f782}\u{1f800}-\u{1f8ff}\u{1faf1}\u{1fbc1}-\u{1fbc3}\u{1fbb0}-\u{1fbb8}\u{f0000}-\u{ffffd}\u{100000}-\u{10fffd}]/gu, "?").replace(je, "?");
}

var mft = /[:\uFE13\uFE55\uFF1A][/\uFF0F][/\uFF0F]/gu, gft = ":\u2215\u2215", wie = /[<>\uFE64\uFE65\uFF1C\uFF1E]+/gu, W = `(?![(){}])[\\p{Ps}\\p{Pe}${afe}]`, K_ = new RegExp(`(?<!\\s)\\s*${W}(?:\\s|${W})*`, "gu"), ie = /[:\u02D0\u02D1\u05C3\u2D42\u2D53\u2D57\uA4FD\uA789\u{10781}\u{10782}]|(?![\p{L}\p{N}\p{Zs}])[^\x00-\x7F]/gu, XAo = new RegExp(`^(?:${ie.source})$`, "u");

function hft(e) {
  return LK(e.replace(K_, " ").replace(ie, " ").replace(/ {2,}/g, " "));
}

function LK(e) {
  return e.replace(/sources[^\p{L}\p{N}]+under/giu, "sources-under").replace(/stored[^\p{L}\p{N}]+connector[^\p{L}\p{N}]+grant/giu, "stored-connector-grant").replace(/published[^\p{L}\p{N}]+by[^\p{L}\p{N}]+this[^\p{L}\p{N}]+session/giu, "published-by-this-session").replace(/created[^\p{L}\p{N}]+by[^\p{L}\p{N}]+this[^\p{L}\p{N}]+session/giu, "created-by-this-session");
}

var M2n = " [artifact published by this session]", JAo = " [artifact created by this session]", Yon = " [ownership: yours, made from an Artifact type \u2014 the files the type put in it were written by the type's publisher]", QAo = " [capabilities: declared by the Anthropic-published type this Artifact was made from; this publish cannot change them]", ZAo = " [destination is a file name Claude Code screens: git, hook, tool and agent settings]", eCo = "Automatic edit of an Artifact this session watches, requested by a writer's comment on it; the server re-checks the writer, the thread's edit grant, single-file, size and rate limits";

function iA(e) {
  return sA(Ku(e) ?? "").replace(K_, " ").replace(wie, " ").replace(/ {2,}/g, " ").trim();
}

var Je = /<meta[^>]+name=["']description["'][^>]+content=(["'])((?:(?!\1).)*)\1/is, Ze = /<title[^>]*>([\s\S]*?)<\/title>/i, Qe = /<h1[^>]*>([\s\S]*?)<\/h1>/i, V = new Set([ "", "index", "untitled", "document" ]);

function tCo(e, n) {
  let r = w(e), o = _ => yE(uft(_ ?? "")) ?? "", i = o(r.match(Je)?.[2]);
  if (i.length >= 10) return i;
  let s = _ => o(r.match(_)?.[1]?.replace(/<[^>]+>/g, "")), u = s(Ze), c = s(Qe), l = u.toLowerCase();
  if (V.has(l) || l === n) u = "";
  let d = c.toLowerCase();
  if (d === u.toLowerCase() || V.has(d) || d === n) return u;
  return c;
}

function Xon(e) {
  let n = N(e, r => "rail" in r && r.rail === "live_stopped");
  return {
    watching: e.length - n,
    stopped: n
  };
}

export { THs, E2n, AHs, CHs, RHs, xHs, PHs, lve, H8e, Ron, jH, IHs, dve, Z0t, dIe, sfe, rft, Ixr, OHs, MHs, k2n, HHs, DHs, bAo, WH, Oxr, T2n, D8e, ife, UBe, LHs, A2n, oA, NHs, $Hs, xon, eLt, Oo, FHs, UHs, BHs, jHs, cIe, afe, Sk, vp, GR, QP, r$, wk, uIe, pIe, fIe, mIe, cve, Vg, V_, oft, ZP, L8e, gIe, Pon, sft, uve, Mxr, SAo, C2n, tLt, wAo, ift, Ion, vAo, Oon, Mon, Hxr, EAo, aft, lft, kAo, TAo, nLt, rLt, Hon, pve, WHs, zHs, R2n, Dxr, oj, fn, dft, a_, Zm, GO, KZ, Cm, Don, AAo, CAo, Lon, RAo, Non, xAo, PAo, IAo, OAo, MAo, Lxr, Nxr, HAo, fve, $xr, Fxr, DAo, mve, hIe, cft, $on, Fon, Uxr, Uon, v8s, Bon, LAo, oLt, jon, NAo, $Ao, FAo, Bxr, jxr, Wxr, W2s, Won, zon, He, N8e, nr, hU, sLt, yU, UAo, iLt, DK, BBe, Bc, BAo, Yt, gve, o$, VO, F9, $8e, jBe, jAo, zxr, WAo, Ya, Gxr, Hn, Sie, WBe, Gon, wv, Vxr, zAo, F8e, xi, Kxr, U8e, GAo, x2n, iG, uft, Von, VAo, P2n, pft, Kon, yE, KO, s$, sj, vC, zBe, B8e, GHs, I2n, O2n, fft, qxr, fT, lfe, qZ, Yxr, hve, mT, E8s, KAo, k8s, dfe, yve, j8e, _ve, Xxr, Jxr, z2s, qAo, qon, G2s, _l, YAo, _U, V2s, W8e, ij, Ku, K2s, sA, mft, gft, wie, K_, XAo, hft, LK, M2n, JAo, Yon, QAo, ZAo, eCo, iA, tCo, Xon };
