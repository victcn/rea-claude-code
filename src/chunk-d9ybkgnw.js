// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ve } from "./chunk-b0z4bv3v.js";

import { $s } from "./chunk-5wbhf1bk.js";

import { f } from "./chunk-3ykz5st8.js";

import { nr, KO, s$, sj, sA, mft, gft, wie, K_ } from "./chunk-f1zpf9me.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { JSe } from "./chunk-ann91fyn.js";

import { qL } from "./chunk-exeqjnzg.js";

import { Z$, gEt, _g, YDe, cye } from "./chunk-cm3ke8xm.js";

import { de } from "./chunk-5ydr99q3.js";

import { Ys } from "./chunk-7fcp0cw9.js";

var REn = "__artifactCommentTarget", g = 120, C = 4e3, T = 32;

function _(e, t) {
  return `${e}/${t}`;
}

function CVt(e) {
  return YDe(e).replace(/[\n\t]/g, " ").replace(sj, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(KO, "'").replace(s$, "'").trim();
}

function A(e, t) {
  let o = CVt(e);
  return Array.from(o).length > t ? `${qL($s(o, t))}\u2026` : o;
}

function E(e, t, o) {
  let r = e.find(s => s.id === t), n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let a = sA(A(n.text.replace(K_, " "), g)).replace(wie, " ").replace(mft, gft).replace(/ {2,}/g, " ").trim();
  if (a === "") return;
  let i = Z$(n.account, o), c = _g(n), d = n.postedByArtifact || c === "unknown" ? "unknown" : n.role === "assistant" ? i ? "claude" : "unknown" : c === "agent" ? "unknown" : i ? "user" : "viewer";
  return {
    display: {
      thread_id: t,
      by: d,
      excerpt: a,
      replies: r.comments.length - 1,
      resolved: r.resolved && r.resolvedDegraded !== !0
    },
    ...d === "viewer" && n.access !== void 0 && {
      access: n.access
    }
  };
}

function GYr(e) {
  let t = de(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== !0;
}

async function VYr(e, t, o) {
  if (!nr.test(t)) return;
  let r = _(e.slug, t), n = ee().commentTargets, a = ee().accountEpoch, i = n.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let {signal: c, cleanup: d} = Ys(o.abortController.signal, {
    timeoutMs: C,
    refTimer: !0
  });
  try {
    let [s, p] = await Promise.all([ cye(e, c, o.credentials, "artifact_comment_consent_read", {
      skipBootProbe: !0
    }), JSe(o.credentials) ]);
    if (s.err !== null) {
      n.delete(r);
      return;
    }
    let m = E(s.threads, t, {
      account: p?.accountUuid?.toLowerCase(),
      tokens: gEt()
    });
    if (m === void 0) {
      f("artifact_comment_consent_read", "no_opening_comment"), n.delete(r);
      return;
    }
    if (ee().accountEpoch !== a) return;
    n.delete(r), n.set(r, {
      target: m,
      toolUseId: o.toolUseId
    });
    while (n.size > T) {
      let u = n.keys().next().value;
      if (u === void 0) break;
      n.delete(u);
    }
    return m;
  } catch (s) {
    if (o.abortController.signal.aborted) throw s;
    f("artifact_comment_consent_read", Ve(s) ? "deadline" : "read_threw");
    return;
  } finally {
    d();
  }
}

function l(e) {
  switch (e) {
   case "owner":
    return "the owner's";

   case "editor":
    return "an editor's";

   case "commenter":
    return "a commenter's";

   case void 0:
    return "a viewer's";
  }
}

function KYr({display: e, access: t}) {
  switch (e.by) {
   case "user":
    return `your comment "${e.excerpt}"`;

   case "claude":
    return `Claude's comment "${e.excerpt}"`;

   case "viewer":
    return `${l(t)} comment "${e.excerpt}"`;

   case "unknown":
    return `the comment "${e.excerpt}"`;
  }
}

function uXo({display: e, access: t}) {
  switch (e.by) {
   case "user":
    return "your comment thread";

   case "claude":
    return "Claude's comment thread";

   case "viewer":
    return `${l(t)} comment thread`;

   case "unknown":
    return "a comment thread";
  }
}

function qYr(e, t) {
  if (t === void 0 && !(REn in e)) return;
  let {[REn]: o, ...r} = e;
  return t === void 0 ? r : {
    ...r,
    [REn]: t
  };
}

export { REn, CVt, GYr, VYr, KYr, uXo, qYr };
