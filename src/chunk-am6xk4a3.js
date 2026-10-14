// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { p } from "./chunk-jkzenvsk.js";

import { Y } from "./chunk-kawq2919.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { ree } from "./chunk-g6nh65r0.js";

import { me, Wd, St, Rm, Dd } from "./chunk-dexzwy8h.js";

import { N } from "./chunk-hmqkrrtz.js";

class x {
  inFlightSnapshot={
    tasks: 0,
    queued: 0,
    kinds: [],
    items: []
  };
  inFlightSnapshotChanged=Me();
  pendingStructuredResult=void 0;
  relocatedCwd=void 0;
  ownStateWriteDepth=0;
  warnedUnknownDisabledSurface=!1;
  publishInFlightSnapshot(e) {
    this.inFlightSnapshot = e;
    try {
      this.inFlightSnapshotChanged.emit();
    } catch {}
  }
  reset() {
    this.pendingStructuredResult = void 0, this.relocatedCwd = void 0, this.warnedUnknownDisabledSurface = !1, 
    this.publishInFlightSnapshot({
      tasks: 0,
      queued: 0,
      kinds: [],
      items: []
    });
  }
}

var F = new K(() => new x);

function tY() {
  return F.of(B().host);
}

var D = p(() => St({
  state: me().nullish(),
  detail: me().nullish(),
  tempo: me().nullish(),
  needs: me().nullish(),
  output: Rm(me(), Wd()).nullish()
})), j = {
  working: "actively progressing on the task \u2014 narrating plans, calling tools, or writing code; no pending question for the user",
  blocked: 'the last message ends on a direct question or explicit request for the user ("want me to\u2026?", "which do you prefer?", "approve this?", "needs input: \u2026") \u2014 nothing will happen until the user replies',
  done: 'the task the user asked for is fully delivered and there is no further work the agent plans to do \u2014 not just a progress update, not "almost done", not "let me know what you think"',
  failed: "the agent has given up or hit something unrecoverable \u2014 missing credential, broken build it cannot fix, wrong repo, task impossible as framed; distinct from blocked (user can unblock) and done (succeeded)"
}, q = {
  result: "one short sentence naming the finished deliverable \u2014 no sub-clauses or bullet summaries"
}, Uf = 800, Ics = 2e3, M = new Set([ "done", "failed", "stopped" ]);

function Zc(e, n) {
  if (e.length <= n) return e;
  let t = n - 1, i = e.charCodeAt(t - 1);
  if (i >= 55296 && i <= 56319) t--;
  return e.slice(0, t) + "\u2026";
}

function b(e, n) {
  return S(e, n) !== null;
}

function S(e, n) {
  let t = null, i = 0, s = 0, a = e.indexOf("```"), l = e.indexOf("~~~");
  while (s < n) {
    if (a !== -1 && a < s) a = e.indexOf("```", s);
    if (l !== -1 && l < s) l = e.indexOf("~~~", s);
    let u = a === -1 ? l : l === -1 ? a : Math.min(a, l);
    if (u === -1 || u >= n) break;
    let r = e[u], c = u - 1, h = 0;
    while (c >= 0 && e[c] === " " && h < 3) c--, h++;
    let d = c < 0 || e[c] === `\n`, f = 3;
    s = u + 3;
    while (e[s] === r) s++, f++;
    if (!d) continue;
    if (t === null) t = r, i = f; else if (t === r && f >= i) t = null, i = 0;
  }
  return t === null ? null : {
    marker: t,
    length: i
  };
}

function uso(e) {
  let n = S(e, e.length);
  return n === null ? "" : n.marker.repeat(n.length) + `\n`;
}

var pso = "organization verification required \u2014 see detail";

function Ocs(e, n = "", t) {
  if (t === "dlp_request_denied" || t === "safety_monitor_blocked") return {
    state: "failed",
    needs: "API error"
  };
  switch (e) {
   case "authentication_failed":
    return {
      state: "blocked",
      needs: "login required \u2014 run /login"
    };

   case "oauth_org_not_allowed":
    return {
      state: "blocked",
      needs: "org disabled OAuth \u2014 use API key or ask admin"
    };

   case "account_on_hold":
    return {
      state: "blocked",
      needs: "account on hold \u2014 see detail"
    };

   case "cloud_credential_error":
    return {
      state: "blocked",
      needs: "cloud credentials unavailable \u2014 check or refresh them"
    };

   case "verification_required":
    return {
      state: "blocked",
      needs: pso
    };

   case "billing_error":
    return {
      state: "blocked",
      needs: "usage limit reached \u2014 check plan"
    };

   case "rate_limit":
    return {
      state: "blocked",
      needs: "rate limited \u2014 wait and retry"
    };

   case "overloaded":
    return {
      state: "blocked",
      needs: "API overloaded \u2014 wait and retry"
    };

   case "server_error":
    return {
      state: "blocked",
      needs: "API unavailable \u2014 retry"
    };

   case "invalid_request":
    return /\b(too long|too large|exceeds|token limit|prompt is too long)\b/i.test(n) ? {
      state: "blocked",
      needs: "request too large \u2014 /compact or trim"
    } : {
      state: "blocked",
      needs: "invalid API request \u2014 see detail"
    };

   case "max_output_tokens":
    return null;

   case void 0:
    return {
      state: "blocked",
      needs: "API error \u2014 see detail"
    };

   case "unknown":
   default:
    return {
      state: "failed",
      needs: "API error"
    };
  }
}

var U = /(?:^|\n)\s*failed\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi, G = /(?:^|\n)\s*needs input\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi, W = /(?:^|\n)\s*blocked\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi, H = /\bI'?m blocked\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi;

function z(e, n, t) {
  let i;
  for (let [s, a] of [ [ "failed", U ], [ "blocked", G ], [ "blocked", W ], [ "blocked", H ] ]) for (let l of n.matchAll(a)) {
    if (b(e, t + l.index)) continue;
    if (!i || l.index > i.index) i = {
      state: s,
      capture: l[1].trim(),
      index: l.index,
      end: l.index + l[0].length
    };
  }
  return i;
}

function Mcs(e) {
  let n = e.trim();
  if (!n) return "empty";
  if (b(n, n.length)) return "code-fence";
  let t = n.slice(-800), i = n.length - t.length;
  for (let a of t.matchAll(/(?:^|\n)\s*result:\s*\S/gi)) if (!b(n, i + a.index)) return "result-line";
  for (let a of t.matchAll(/(?:^|\n)\s*failed:\s*\S/gi)) if (!b(n, i + a.index)) return "failed-line";
  if (/[?\uFF1F]\s*$/.test(n)) return "trailing-q";
  let s = n.slice(-200);
  if (/(?:^|\n)\s*(?:[-*\u2022]|\d+\.|[|])\s/.test(s)) return "list-or-table";
  return "declarative";
}

function qMn(e) {
  let n = e.trim();
  if (!n) return null;
  let t = n.slice(-800), i;
  for (let o of t.matchAll(/(?:^|\n)\s*result:\s*(.+?)\s*(?:\n|$)/gi)) if (!b(n, n.length - t.length + o.index)) i = o;
  let s = t, a = n.length - t.length;
  if (i) {
    let o = i.index + i[0].length;
    s = t.slice(o), a = n.length - t.length + o;
  }
  let l = z(n, s, a);
  if (i && !l) {
    let o = Zc(i[1], Uf);
    if ([ ...s.matchAll(/(?:^|\n)\s*next:\s*\S/gi) ].some(T => !b(n, a + T.index))) return {
      branch: "result-then-next",
      state: "working",
      tempo: "idle",
      detail: o,
      output: {
        result: o
      }
    };
    let k = _(n, n.length - t.length + i.index);
    if (k?.kind === "stale") return null;
    if (k) return {
      branch: "result-approval-ask",
      state: "blocked",
      tempo: "blocked",
      needs: k.needs,
      detail: o
    };
    return {
      branch: "result-marker",
      state: "done",
      tempo: "idle",
      detail: o,
      output: {
        result: o
      }
    };
  }
  if (l?.state === "failed") return {
    branch: "failed-marker",
    state: "failed",
    tempo: "idle",
    detail: Zc(l.capture, Uf),
    output: {}
  };
  if (l?.state === "blocked") {
    let o = s.slice(l.end);
    if (N(o.split(/\n\s*\n/), g => g.trim().length > 0) >= 3) return null;
    if (!/\bnothing (?:needed|required) from you\b|\bno(?: user)? action (?:needed|required)\b/i.test(s)) {
      let g = Zc(l.capture, Uf);
      return {
        branch: "blocked-marker",
        state: "blocked",
        tempo: "blocked",
        needs: g,
        detail: g
      };
    }
    if (i) {
      let g = Zc(i[1], Uf);
      return {
        branch: "blocked-disclaimed",
        state: "done",
        tempo: "idle",
        detail: g,
        output: {
          result: g
        }
      };
    }
    return null;
  }
  if (/[?\uFF1F]\s*$/.test(t) && t.replace(/[?\uFF1F\s]+$/, "").length >= 4) {
    let o = Math.max(t.lastIndexOf(`\n`), t.lastIndexOf(". "), t.lastIndexOf("! "), t.lastIndexOf("? ", t.length - 2));
    if (!b(n, n.length - t.length + o)) {
      let g = Zc(t.slice(o + 1).trim(), Uf);
      if (E.test(g)) return null;
      return {
        branch: "trailing-q",
        state: "blocked",
        tempo: "blocked",
        needs: g,
        detail: g
      };
    }
  }
  let u = Math.max(0, t.lastIndexOf(". "), t.lastIndexOf("! "), t.lastIndexOf("? "), t.lastIndexOf(`\n`)), r = t.slice(u).replace(/^[.!?\s]+/, ""), c = b(n, n.length - t.length + u), h = /\b(?:waiting (?:for|on)|pending)\s+(?:the\s+)?(?:CI|build|tests?|reviewer|deploy(?:ment)?|workflow|checks?|rollout|merge queue)\b/i.exec(r);
  if (h && !c) return {
    branch: "wait-external",
    state: "working",
    tempo: "idle",
    detail: Zc(h[0], Uf),
    output: {}
  };
  if (!c) for (let o of r.matchAll(ae)) {
    let g = I(r, o, C(r, o));
    if (g === "not-an-ask") continue;
    if (g === "defer") return null;
    let k = Zc(r.slice(o.index).trim(), Uf);
    return {
      branch: "awaiting-user",
      state: "blocked",
      tempo: "blocked",
      needs: k,
      detail: k
    };
  }
  let d = /\b(please (?:run|provide|confirm|clarify|choose|let me know)|let me know (?:which|what|how|when)|which (?:option|approach|one)|should I (?:proceed|continue|use))\b/i.exec(r);
  if (d && !c) {
    let o = Zc(r.slice(d.index).trim(), Uf);
    return {
      branch: "ask-verb",
      state: "blocked",
      tempo: "blocked",
      needs: o,
      detail: o
    };
  }
  if (!c && /\b(not logged in|please run \/login|authentication failed|invalid api key|oauth token (?:expired|revoked)|credit balance (?:is )?too low|usage limit reached|mcp (?:server )?(?:authentication|auth|authorization|unauthorized)|mcp (?:server )?(?:credential|token) (?:missing|expired|invalid)|401 unauthorized|403 forbidden|token (?:has )?expired|bad credentials|gh auth login|gcloud auth login|aws (?:sso )?login)\b/i.test(r)) return {
    branch: "auth-prose",
    state: "blocked",
    tempo: "blocked",
    needs: Zc(r, Uf),
    detail: "authentication required"
  };
  if (!c && J.test(r) && !X.test(r)) return {
    branch: "working-verb",
    state: "working",
    tempo: "active",
    detail: Zc(r, Uf),
    output: {}
  };
  if (!c && Q.test(r)) return {
    branch: "agents-status",
    state: "working",
    tempo: "idle",
    detail: Zc(r, Uf)
  };
  if (!c && Z.test(r)) return {
    branch: "will-check-back",
    state: "working",
    tempo: "idle",
    detail: Zc(r, Uf)
  };
  if (!c && ee.test(r)) {
    let o = Zc(r, Uf);
    return {
      branch: "cant-proceed",
      state: "blocked",
      tempo: "blocked",
      detail: o,
      needs: o
    };
  }
  if (!c && te.test(r)) return {
    branch: "giving-up",
    state: "failed",
    tempo: "idle",
    detail: Zc(r, Uf)
  };
  if (!c && ne.test(r)) {
    let o = Zc(r, Uf);
    return {
      branch: "pushed-committed",
      state: "done",
      tempo: "idle",
      detail: o,
      output: {
        result: o
      }
    };
  }
  if (!c && ie.test(r)) return {
    branch: "ready-for",
    state: "done",
    tempo: "idle",
    detail: Zc(r, Uf)
  };
  if (!c && se.test(r)) {
    let o = Zc(r, Uf);
    return {
      branch: "verdict-marker",
      state: "done",
      tempo: "idle",
      detail: o,
      output: {
        result: o
      }
    };
  }
  if (!c && re.test(r)) {
    let o = Zc(r, Uf);
    return {
      branch: "please-do-x",
      state: "blocked",
      tempo: "blocked",
      detail: o,
      needs: o
    };
  }
  if (!c && oe.test(r)) {
    let o = Zc(r, Uf);
    return {
      branch: "stopping-here",
      state: "blocked",
      tempo: "blocked",
      detail: o,
      needs: o
    };
  }
  let f = _(n, n.length - t.length);
  if (f?.kind === "ask") return {
    branch: "leading-approval-ask",
    state: "blocked",
    tempo: "blocked",
    needs: f.needs,
    detail: f.needs
  };
  return null;
}

function _(e, n) {
  let t = new RegExp(le);
  t.lastIndex = n;
  let i = !1;
  for (let s of e.matchAll(t)) {
    if (b(e, s.index)) continue;
    let a = C(e, s), {before: l, after: u, end: r} = a;
    if (!(ce.test(l) || /^\s*(?:\*\*|\))?\s*$/.test(u) && (de.test(l) || /^ready\b/i.test(s[0]) && !/\bas\s+$/i.test(l)))) continue;
    let h = I(e, s, a);
    if (h === "not-an-ask") continue;
    if (h === "defer") return;
    if (V(e, s.index)) {
      i = !0;
      continue;
    }
    let d = e.slice(s.index, r).trim();
    if (d.endsWith("**") && d.split("**").length % 2 === 0) d = d.slice(0, -2); else if (d.endsWith(")") && Nt(d, ")") > Nt(d, "(")) d = d.slice(0, -1);
    return {
      kind: "ask",
      needs: Zc(d, Uf)
    };
  }
  return i ? {
    kind: "stale"
  } : void 0;
}

function V(e, n) {
  let t = /\n[ \t]*\n/.exec(e.slice(n));
  if (!t) return !1;
  let i = n + t.index + 1;
  for (let s of e.slice(i).split(`\n`)) {
    let a = i;
    i += s.length + 1;
    let l = s.trim();
    if (l && !he.test(l) && !b(e, a)) return !0;
  }
  return !1;
}

function C(e, n) {
  let t = e.slice(Math.max(0, n.index - 800), n.index), i = [ ...t.matchAll(ue) ], s = i.at(-1), a = i.at(-2), l = s ? t.slice(s.index + s[0].length) : t, u = s ? t.slice(a ? a.index + a[0].length : 0, s.index + 1) : "", r = n.index + n[0].length, c = pe.exec(e.slice(r));
  return {
    before: l,
    previous: u,
    after: e.slice(r, c ? r + c.index : e.length),
    end: c ? r + c.index + c[0].length : e.length
  };
}

function I(e, n, {before: t, previous: i}) {
  let s = t.split(ge).at(-1) ?? t;
  if (fe.test(s) || ke.test(s + n[0]) || be.test(t) || E.test(t) || /\?$/.test(i) && E.test(i)) return "not-an-ask";
  return Re.test(e.slice(n.index)) ? "defer" : "ask";
}

function fso(e) {
  let n = e.split(`\n`).map(t => t.trim()).findLast(Boolean);
  return {
    branch: "heuristic",
    state: "working",
    tempo: "idle",
    detail: n ? Zc(n, Uf) : "\u2014"
  };
}

var E = /\b(?:want|like) me to\b|\b(?:shall|should) I also\b/i, J = /^(?:(?:Now|Next|Then|Alright|OK|Okay|Right|Good|First|Also),?\s+)?(?:Let me (?!know\b)|(?:I(?:'?ll| will) |I'?m going to |Going to )(?!need\b|require\b|wait\b|leave\b|hold\b|skip\b|stop\b)|Proceeding |Moving (?:on|to)\b|Continuing |Starting |Trying |Checking |Looking |Searching |Reading |Investigating |Running |Re-?running |Building |Rebuilding |Installing |Fetching |Applying |Fixing |Patching |Updating |Adding |Removing |Deleting |Importing |Refactoring |Rewriting |Writing |Grepping |Scanning |Wrapping |Switching |Testing |Verifying |Regenerating |Pushing |Pulling |Reviewing |Examining |Loading |Compiling |Parsing |Analyzing |Tracing |Exploring )/i, X = /\b(?:once |when |after |until |as soon as )(?:you|it|the|that|this|they)\b|\bagain in\b|\bcheck back\b|\bin ~?\d+\s*(?:s(?:ec(?:ond)?s?)?|m(?:in(?:ute)?s?)?|h(?:ours?|rs?)?)\b|\bthen\.?\s*$|\bwhichever you\b|\bhold(?:ing)? for your\b|\b(?:to|and) wait for\b|\bgive it (?:more |some )?time\b|\bif (?:you(?:'d| want| prefer| need|'re)?|that(?:'s| helps| works)?|useful|needed|helpful|desired)\b|\b(?:isn'?t|not|won'?t) going to work\b/i, Q = /^(?:(?:\*\*)?[1-9]\d* (?:agent|cron|task|fork|job|worker|PR|check)s? (?:in flight|remaining|active|still (?:running|working)|pending|running|launched)\b|(?:Continuous )?(?:[Ll]oop|[Cc]rons?|[Bb]abysit) (?:active|healthy|continuing|running|will keep|continues)\b|Waiting for (?:the )?(?:agent|cron|task|fork|worker|job|remaining|them)s?\b|Agents? will report back\b|Waiting\.?$)/, Z = /^(?:I will|I'll|Will) (?:check back|re-?check|poll|look again|retry|re-?run|try again) (?:(?:when|once|after|until) (?!your?\b)|in\b|again\b)/i, ee = /^I (?:can(?:'?t|not)|am unable to) (?:proceed|continue|make (?:any )?progress|complete|fix this)\b/i, te = /^(?:Giving up|I(?:'m| am) giving up|The task is not actionable)\b/i, ne = /^(?:Pushed (?:to `|`[0-9a-f]{7,})|Committed as `?[0-9a-f]{7,}\b|Commit: `?[0-9a-f]{7,}\b|(?:Opened|Created) PR #?\d)/, ie = /^Ready (?:for review|to (?:upload|merge|ship|land))\b/, se = /^VERDICT: (?:PASS|FAIL)\b/, re = /^Please (?:start|run|provide|grant|export|add|install|configure|give me|paste|point me|set (?:the |up |`?[A-Z][A-Z0-9_]+\b))/, oe = /^(?:Stopping here|I've stopped here|Parked (?:the|this) branch|Paused here)(?:\.|$| \u2014| -| until| pending| since| because)/i, P = String.raw`(?<!["'\u201C\u2018\x60]|\b(?:not|no longer|nothing(?: is|['\u2019]s)?|without|instead of|rather than|was|were|had been)\s+|n['\u2019]t\s+)`, v = String.raw`${P}\b(?:awaiting|waiting (?:for|on)|pending|ready for)\s+your\s+(?:approval|confirmation|go[- ]ahead|ok(?:ay)?\b|sign[- ]?off|green light)`, ae = new RegExp(String.raw`${v}|${P}\b(?:awaiting|waiting (?:for|on)|pending)\s+(?:your\s+(?:feedback|input|decision|response|direction|guidance)|you\b|the user\b)`, "gi"), le = new RegExp(v, "gi"), O = String.raw`(?:\*\*|\()?(?:(?:I['\u2019]?m|I am|still|now|currently|just)\s+)*$`, ce = new RegExp(String.raw`^\s*(?:result:\s*)?${O}`, "i"), de = new RegExp(String.raw`(?:[:;,\u2014\u2013]|\s-|\s\()\s*${O}`, "i"), ue = /[.!?](?:\*\*|\))?\s+|\n/g, pe = /[.!?](?:\*\*|\)|["'\u2019\u201D])*(?=\s|$)|\n/, ge = /[,;:\u2014\u2013(]|\s-\s|\b(?:and|but|so|while)\b/i, he = /^(?:```|~~~|[-+>|@]|[*\u2022]\s|\d+[.)]\s|#{1,6}\s)|:(?:\*\*)?$/, fe = /\b(?:no|not|nothing|none|never|nobody|neither|nor)\b|n['\u2019]t\b/i, be = /\bif you(?:['\u2019]d like| want| prefer| like)\b|\bI can also\b|\bhappy to\b|\boptionally\b/i, ke = /\b(?:once|when|after|until|as soon as)\s+(?:it|the|that|this|they)\b|\b(?:will|['\u2019]ll)\s+be\s+(?:ready|pending)\b/i, Re = /\bnext check\b|\bagain in\b|\bre-?poll|\bpoll(?:ing)? again\b|\bshepherding\b|\b(?:check(?:ing)? (?:back|again)|re-?check(?:ing)?|report(?:ing)?(?: back)?) (?:in|when|once|after)\b(?! you)/i;

function Hcs(e) {
  let {tail: n, prev: t, latestAsk: i, toolSummary: s, minsInState: a} = e;
  return `Current state: ${t} (for ${a}m)\nTool calls so far: ${s || "none"}${i ? `\nUser's most recent ask: "${i}"` : ""}\n\nAssistant message tail (last ${n.length} chars):\n${n}`;
}

function Dcs(e) {
  let n = L(e);
  if (n === void 0) return null;
  let t = D().safeParse(n);
  return t.success ? t.data : null;
}

function L(e) {
  let n = e.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, ""), t = n.indexOf("{"), i = n.lastIndexOf("}");
  if (t < 0 || i < 0) return;
  try {
    return Y(n.slice(t, i + 1));
  } catch {
    return;
  }
}

function m(e) {
  return typeof e === "string" && e ? e : void 0;
}

function YMn(e, n, t) {
  let i = m(e.state), s = i && Object.hasOwn(j, i) ? i : t?.state ?? n, a = m(e.tempo), l = M.has(s) ? "idle" : a === "active" || a === "idle" || a === "blocked" ? a : t?.tempo ?? "active", u = {}, r = e.output ?? t?.output;
  if (r && typeof r === "object") for (let [h, d] of Object.entries(r)) {
    let f = m(d);
    if (f && Object.hasOwn(q, h)) u[h] = Zc(f, Uf);
  }
  let c = m(e.needs) ?? (l === "blocked" ? t?.needs : void 0);
  return {
    state: s,
    detail: m(e.detail) ?? t?.detail ?? "",
    tempo: l,
    needs: c,
    output: u,
    branch: t?.branch
  };
}

var Ee = 140, xe = 64, _e = 80, we = p(() => St({
  state: Dd([ "working", "needs_reply", "needs_approval", "done", "failed" ]),
  headline: me().nullish(),
  needs: me().nullish(),
  happened: me().nullish(),
  needs_you: me().nullish(),
  reply: me().nullish()
}));

function Lcs(e) {
  let n = L(e);
  if (n === void 0) return null;
  let t = we().safeParse(n);
  if (!t.success || !m(t.data.happened)?.trim()) return null;
  return t.data;
}

function XMn(e, n = Ee) {
  let t = R(e);
  if (t.length <= n) return {
    text: t,
    truncated: !1
  };
  let i = t.lastIndexOf(" ", n - 1), s = i >= n / 2 ? i : n - 1;
  return {
    text: Zc(t, s + 1),
    truncated: !0
  };
}

function Ncs(e) {
  let n = XMn(e.happened ?? ""), t = XMn(e.needs_you ?? ""), i = Ae(e, t.text), s = XMn(m(e.headline) ?? n.text, xe);
  return {
    recap: {
      state: e.state,
      headline: s.text,
      needs: Zc(R(m(e.needs) ?? ""), Uf),
      happened: n.text,
      needsYou: t.text,
      reply: i.text
    },
    truncated: s.truncated || n.truncated || t.truncated || i.truncated
  };
}

var ye = /(?![\u200C\u200D\uFE0E\uFE0F\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u{110BD}\u{110CD}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu;

function R(e) {
  return e.replace(/\p{Cs}/gu, "").replace(ye, "").replace(/[\s\u0085\p{Cc}]+/gu, " ").trim();
}

function w(e) {
  return ree(e.replace(/\p{Cs}/gu, "").replace(/[\p{Cf}\p{M}\p{Co}\p{Cn}\p{Default_Ignorable_Code_Point}]/gu, "").replace(/[\s\u0085]+/gu, " ").replace(/\p{Cc}/gu, "").replace(/\p{Pd}/gu, "-").replace(/[^\p{L}\p{Nd}-]+/gu, " ")).toLowerCase();
}

function y(e) {
  return [ R(e), w(e), w(e.replace(/[\p{Cc}\p{Co}\p{Cn}]/gu, " ")) ].some(n => A.test(n) || A.test(n.replace(/-/g, "")));
}

var A = /\b(?:re|auto[- ]*|un)?(?:approv|merg(?!er\b)|deploy|promot|publish|releas|ship(?!ment)|pay(?!load|pal|ment)|migrat(?:e|ing)\b|sudo\b|launch|roll(?:ing|ed|s)?(?:[- ]+(?:it|this|that|them|these|those))?[- ]*out|green[- ]*light|force[- ]*push)|\bgo[- ]*(?:ahead|live)/iu;

function Ae(e, n) {
  if (e.state !== "needs_reply" || n === "") return {
    text: "",
    truncated: !1
  };
  let t = R(e.reply ?? "");
  if (!/(?!\u2800)[\p{L}\p{N}\p{P}\p{S}]/u.test(t) || y(e.reply ?? "") || y(e.needs_you ?? "")) return {
    text: "",
    truncated: !1
  };
  return t.length <= _e ? {
    text: t,
    truncated: !1
  } : {
    text: "",
    truncated: !0
  };
}

function $cs(e) {
  let n = e.state === "needs_reply" || e.state === "needs_approval";
  return {
    state: n ? "blocked" : e.state,
    detail: e.headline,
    tempo: n ? "blocked" : "idle",
    needs: n && e.needs ? e.needs : void 0,
    output: {},
    recap: e
  };
}

export { tY, Uf, Ics, Zc, uso, pso, Ocs, Mcs, qMn, fso, Hcs, Dcs, YMn, Lcs, XMn, Ncs, $cs };
