// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { x, l } from "./chunk-b0z4bv3v.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { Wue } from "./chunk-9tdwgnpn.js";

import { de } from "./chunk-5ydr99q3.js";

import { yJ } from "./chunk-3s3e14jj.js";

import { A4, ad } from "./chunk-84yp45y8.js";

import { dbn, cbn, JYo } from "./chunk-y2anfyqg.js";

import { sn } from "./chunk-642shbw5.js";

import { o, M, oe, u, ue } from "./chunk-cvcg6n1z.js";

import { randomUUID as V } from "crypto";

var bSt = "confirm_";

function zzt(e) {
  let r = de(e);
  return A4() && r.shouldAvoidPermissionPrompts !== !0 && r.mode !== "dontAsk";
}

async function cet(e) {
  let {toolUseContext: r, source: i} = e;
  if (!zzt(r)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  let s;
  try {
    s = await b(e);
  } catch (n) {
    if (r.abortController.signal.aborted) t(`confirmWithUser(${i}): ask aborted with the turn: ${l(n)}`), 
    s = {
      kind: "aborted"
    }; else d(n), s = {
      kind: "unanswered",
      reason: "error"
    };
  }
  let a = {
    source_hash: sn(i)
  };
  switch (s.kind) {
   case "chose":
   case "declined":
   case "aborted":
    g("permission_confirm_with_user", {
      ...a,
      answer: c(s.kind)
    });
    break;

   case "unanswered":
    if (s.reason === "error") m("permission_confirm_with_user", "error", a); else f("permission_confirm_with_user", s.reason, a);
    break;
  }
  return s;
}

async function b({canUseTool: e, toolUseContext: r, source: i, header: s, question: a, choices: n, personOnly: k}) {
  let h = yJ.inputSchema.safeParse({
    questions: [ {
      question: a,
      header: s,
      options: n.map(({label: W, description: A}) => ({
        label: W,
        description: A ?? ""
      })),
      multiSelect: !1
    } ],
    metadata: {
      source: i
    }
  });
  if (!h.success) throw new x(`confirmWithUser(${i}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
  let U = await yJ.checkPermissions(h.data, r);
  if (U.behavior !== "ask") throw new x(`confirmWithUser(${i}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
  let w = {
    ...U,
    forcedByCaller: !0,
    ...k === !0 && {
      personOnly: !0
    }
  }, _ = `${bSt}${V()}`, y = await e(yJ, h.data, r, ad({
    content: []
  }), _, w).finally(() => Wue(r.session, _));
  return P(y, w, r.abortController.signal, a, n);
}

function P(e, r, i, s, a) {
  if (dbn(e, r)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  if (i.aborted) return {
    kind: "aborted"
  };
  switch (e.behavior) {
   case "allow":
    {
      let n = T().safeParse(e.updatedInput);
      if (!n.success) return {
        kind: "unanswered",
        reason: "no_selection"
      };
      if (n.data.followUp === !0) return {
        kind: "declined"
      };
      let k = R(n.data.answers?.[s]);
      if (k === "") return {
        kind: "unanswered",
        reason: "no_selection"
      };
      let h = a.find(U => C(U.label) === k);
      return h !== void 0 ? {
        kind: "chose",
        value: h.value
      } : {
        kind: "declined",
        typedAnswer: k
      };
    }

   case "deny":
    if (e.decisionReason.type === "other" && JYo(e.decisionReason.reason)) return {
      kind: "unanswered",
      reason: "host_closed"
    };
    if (e.decisionReason.type === "asyncAgent" || e.decisionReason.type === "other" && cbn(e.decisionReason.reason)) return {
      kind: "unanswered",
      reason: "no_one_to_ask"
    };
    return {
      kind: "declined"
    };

   case "ask":
    return {
      kind: "declined"
    };
  }
}

var T = p(() => u({
  answers: ue(o(), oe()).optional(),
  followUp: M().optional()
}));

function R(e) {
  if (typeof e === "string") return C(e);
  if (Array.isArray(e)) return C(e.filter(r => typeof r === "string").join(", "));
  return "";
}

function C(e) {
  return e.replace(/\s+/g, " ").trim();
}

export { bSt, zzt, cet };
