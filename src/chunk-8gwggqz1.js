// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q } from "./chunk-3pqddg8f.js";

import { Y } from "./chunk-kawq2919.js";

import { $Et, qqt, Yqt, Xqt } from "./chunk-69rr80fg.js";

import { le } from "./chunk-cqgvwwgb.js";

import { rr, LC } from "./chunk-wptm3jf5.js";

import { ft } from "./chunk-zscnwzv2.js";

import { iK } from "./chunk-1dj3skht.js";

var p = /^\d{1,10}$/, w = /^\/([A-Za-z0-9-]{1,39})\/([A-Za-z0-9._-]{1,100})\/pull\/(\d{1,10})$/;

function d(n) {
  let e;
  try {
    e = new URL(n);
  } catch {
    return null;
  }
  if (e.protocol !== "https:" || LC(e.hostname) !== rr || e.username !== "" || e.password !== "" || e.port !== "" || e.search !== "" || e.hash !== "") return null;
  let o = w.exec(e.pathname);
  if (o === null) return null;
  return {
    owner: o[1],
    repo: o[2],
    number: Number(o[3])
  };
}

var f = 8, m = [], L5o = iK("prReviewTargets", m);

function N5o(n, e) {
  let o = le(), a = String(q()), s = {
    sessionId: a,
    rawTarget: e,
    cwd: o,
    pinned: h(g(e), o)
  };
  n.set(i => {
    let u = i.filter(t => !(t.sessionId === a && t.rawTarget === e && t.cwd === o));
    return [ s, ...u ].slice(0, f);
  });
}

function g(n) {
  if (n === "") return [];
  if (p.test(n) || d(n) !== null) return [ n ];
  return null;
}

async function h(n, e) {
  if (n === null) return null;
  let {code: o, stdout: a} = await ft("gh", [ "pr", "view", ...n, "--json", "number,url,headRefOid" ], {
    cwd: e
  });
  if (o !== 0) return null;
  let s;
  try {
    s = Y(a);
  } catch {
    return null;
  }
  if (typeof s !== "object" || s === null) return null;
  let {number: i, url: u, headRefOid: t} = s;
  if (typeof u !== "string" || typeof t !== "string") return null;
  let r = d(u), l = t.toLowerCase();
  if (r === null || !Number.isSafeInteger(i) || i < 1 || !Xqt.test(l)) return null;
  if (r.number !== i || !qqt.test(r.owner) || !Yqt.test(r.repo)) return null;
  return {
    owner: r.owner,
    repo: r.repo,
    number: i,
    headSha: l
  };
}

async function $5o(n, e, o = {}) {
  let a = n.get();
  if (!a.some(t => t.sessionId === String(q()))) return {
    ok: !1,
    reason: "no artifact-pr-review invocation is recorded in this session \u2014 composed review pages publish only from the skill flow (run /artifact-pr-review)"
  };
  let s = String(q()), i = [];
  for (let t of a) {
    if (t.sessionId !== s) continue;
    let r = await t.pinned;
    if (r === null) continue;
    if (r.owner !== e.owner || r.repo !== e.repo || r.number !== e.number) {
      i.push(r);
      continue;
    }
    let l = e.reviewed_head_sha.toLowerCase();
    if (o.acceptReviewedShaAsAnchor === !0) return {
      ok: !0,
      identity: {
        ...r,
        headSha: l
      }
    };
    let c = await h([ $Et(r.owner, r.repo, r.number) ], t.cwd);
    if (c === null) return {
      ok: !1,
      reason: `the recorded review target ${r.owner}/${r.repo}#${r.number} could not be re-resolved through gh at publish time \u2014 check gh auth and retry`
    };
    if (c.headSha !== l) return {
      ok: !1,
      reason: `the PR moved since the review: the payload reviewed ${e.reviewed_head_sha.slice(0, 12)}\u2026 but ` + `${r.owner}/${r.repo}#${r.number} is now at ${c.headSha.slice(0, 12)}\u2026 \u2014 re-gather the PR (step 1) and re-author the payload against the current head`
    };
    return {
      ok: !0,
      identity: {
        ...r,
        headSha: c.headSha
      }
    };
  }
  let u = i.map(t => `${t.owner}/${t.repo}#${t.number}`).join(", ");
  return {
    ok: !1,
    reason: `the payload names ${e.owner}/${e.repo}#${e.number}, ` + (u === "" ? "but no recorded review target resolved when the review was invoked \u2014 the target is fixed at invocation, so fixing anything now cannot revive this run. Check gh auth if resolution keeps failing, then re-run /artifact-pr-review to publish a fresh review." : `but this session's review invocation resolves to ${u} \u2014 the page's identity comes from the invocation, not the payload`)
  };
}

function F5o() {
  return (new Date).toISOString().replace(/\.\d{3}Z$/, "Z");
}

export { L5o, N5o, $5o, F5o };
