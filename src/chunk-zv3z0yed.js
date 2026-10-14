// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { jn, bn } from "./chunk-1z2heevg.js";

import { QIe, Es } from "./chunk-q6wab2jw.js";

import { k } from "./chunk-xywp7esx.js";

import { fmt, xm, XR } from "./chunk-dd98x6x7.js";

import { ru, EO, VUn, Zd, Dho, Jb } from "./chunk-9tdwgnpn.js";

import { qe } from "./chunk-r8a304y3.js";

import { OF, JIt, h1 } from "./chunk-4v78v8fd.js";

import { xV } from "./chunk-sqb9meyh.js";

import { bAe } from "./chunk-84yp45y8.js";

import { Ngn, Ugn } from "./chunk-vc0e1zan.js";

import { Dge } from "./chunk-cdky8pkh.js";

import { md } from "./chunk-35bwwb5f.js";

import { RJ } from "./chunk-6xfeq8na.js";

import { b8 } from "./chunk-hsqp728s.js";

import { Dr, Oxe } from "./chunk-10gv16xm.js";

function m() {
  try {
    return k("tengu_violin_table", !1) === !0;
  } catch {
    return !1;
  }
}

function yzo(e) {
  return e.outcome === "needs_approval" ? e.suggestions ?? [] : [];
}

function JBr(e, n) {
  let [t, ...r] = e;
  if (t === void 0 || r.length > 0 || !Dge(n)) return;
  let {toolName: i, ruleContent: a} = jn(t);
  return i === n && a !== void 0 && bn({
    toolName: n,
    ruleContent: a
  }) === t && QIe(a).type !== "exact" ? {
    toolName: n,
    ruleContent: a
  } : void 0;
}

function tXn() {
  if (!m()) return !1;
  try {
    return xm().errors.length === 0 && !qe.isSandboxEnabledInSettings() && !qe.isSandboxingEnabled();
  } catch {
    return !1;
  }
}

function p(e, n) {
  let t = JBr(n.offered, n.toolName);
  return tXn() && t !== void 0 && e.toolName === t.toolName && e.ruleContent === t.ruleContent;
}

function _zo(e) {
  return e.offeredStandingUpdates.length > 0 && tXn() ? [ ...e.sessionPermissionUpdates, ...e.offeredStandingUpdates ] : e.sessionPermissionUpdates;
}

var y = 5e4, h = VUn, R = 4, E = 45e3, g = {
  sandbox: "tool_default",
  background: "forbidden",
  pinCwd: !0,
  scrubCredentialEnv: !0,
  maxTimeoutMs: E,
  get additionalDenyRead() {
    return bAe();
  },
  get additionalDenyWrite() {
    return bAe();
  }
}, A = "Approvals are asked in this session. This machine's rules and hooks still apply. Commands run as they would locally in that folder (sandboxed when its settings sandbox them), foreground only, from the project directory, without credential variables, up to 45 s each.", ljt = new Set([ "dangerouslyDisableSandbox", ...[] ]);

function bzo(e = {}) {
  return {
    name: "interim_floor",
    kind: "personal_machine",
    requireEnvelope: !0,
    admission: "device_binding",
    stance: {
      mode: "session",
      honorLocalRules: !0,
      onAsk: "session",
      askOnDestructive: e.askOnDestructive ?? !1,
      unattended: "own_record"
    },
    limits: {
      max_call_ms: y,
      max_command_ms: g.maxTimeoutMs,
      max_request_bytes: h,
      max_in_flight: R
    },
    serves: t => RJ.has(t.name) && Jb(t).supported,
    constraints: (t, r) => {
      let i = Jb(t);
      return Ngn(g, i.supported ? i.tighten : void 0);
    },
    refusedInputFields: t => {
      let r = Jb(t);
      return (r.supported ? r.refusedInputFields ?? [] : []).filter(a => !ljt.has(a));
    },
    notes: () => A
  };
}

var oZe = 8, Szo = 18e5, nXn = 3e5, _ = 256, v = 16, Dgn = 512;

function wzo(e, n, t) {
  return n === e.toolName && b8(n, Es(t, [ Dr, Oxe ])) === b8(n, e.evaluatedInput);
}

function vzo(e) {
  return {
    behavior: "deny",
    message: e !== void 0 && e.trim() !== "" ? Zd(e) : "The person declined this call in the session \u2014 it did not run.",
    decisionReason: {
      type: "other",
      reason: Ugn
    },
    decideLocation: "ask-path"
  };
}

async function Ezo(e, n, t, r) {
  if (n === void 0 || n.length === 0 || !OF()) return;
  let i = JIt(n.flatMap(o => {
    let s = xV().safeParse(o), [l, ...S] = s.success && s.data.type === "addRules" && s.data.behavior === "allow" ? s.data.rules : [];
    return l !== void 0 && S.length === 0 && (l.ruleContent?.length ?? 0) <= Dgn && p(l, r) ? [ {
      type: "addRules",
      behavior: "allow",
      destination: "session",
      rules: [ l ]
    } ] : [];
  }));
  if (i.length > 0) e.offeredStandingUpdates = [ ...e.offeredStandingUpdates, ...i ].slice(-_), 
  md(t.callId, "offered standing rule held", {
    rules: i.length
  });
  let a = n.flatMap(o => {
    let s = xV().safeParse(o);
    return s.success && s.data.type === "addRules" && s.data.behavior === "allow" && s.data.rules.length > 0 && s.data.rules.length <= v && s.data.rules.every(l => l.toolName.length <= Dgn && (l.ruleContent?.length ?? 0) <= Dgn && O(l, r)) ? [ s.data ] : [];
  }), d = JIt(a.map(o => o.destination === "session" || o.destination === "localSettings" ? o : {
    ...o,
    destination: "session"
  })), c = d.filter(o => o.destination === "session"), u = d.filter(o => o.destination === "localSettings");
  if (d.length > 0 && a.some(o => o.destination !== "session" && o.destination !== "localSettings")) t.destinationDowngraded = !0;
  let f = fmt() ? u.map(o => ({
    ...o,
    destination: "session"
  })) : [];
  if (c.length + f.length > 0) e.sessionPermissionUpdates = [ ...e.sessionPermissionUpdates, ...c, ...f ].slice(-_);
  if (u.length > 0) await h1(u);
  if (d.length > 0) md(t.callId, "standing approval kept", {
    session_rules: c.length,
    local_settings_rules: u.length,
    downgraded: t.destinationDowngraded
  });
}

function O(e, n) {
  let t = n.input.command;
  return e.toolName === n.toolName && typeof t === "string" && e.ruleContent !== void 0 && e.ruleContent === t.trim() && !e.ruleContent.includes("*");
}

function C(e) {
  if (e === "none") return;
  let n = Dho(T(XR()));
  return n === void 0 ? void 0 : {
    auto_mode: n
  };
}

function T(e) {
  return e;
}

function kzo(e) {
  let n = Zd(e.ask.message);
  return {
    envelope: {
      v: ru,
      outcome: "needs_approval",
      ...e.facts.envelope && {
        call_id: e.facts.envelope.call_id
      },
      target: e.target,
      ask_id: e.askId,
      tool: e.toolName,
      input: e.ask.input,
      message: n,
      ...e.ask.decisionReason !== void 0 && {
        decision_reason: e.ask.decisionReason
      },
      ...e.ask.suggestions.length > 0 && {
        suggestions: [ ...e.ask.suggestions ]
      },
      classifier_eligible: e.ask.classifierEligible,
      prior_answer_ok: e.ask.priorAnswerOk,
      ...e.notes.length > 0 && {
        notes: [ ...e.notes ]
      },
      ...e.ask.classifierEligible && C(e.hostRules),
      elicitation: {
        mode: "form",
        message: n,
        requestedSchema: {
          type: "object",
          properties: {
            decision: {
              type: "string",
              enum: [ "allow", "deny" ],
              description: `Whether ${e.toolName} may run this call on ${e.target.name}`
            },
            feedback: {
              type: "string",
              description: "Optional words for Claude with the decision"
            }
          },
          required: [ "decision" ]
        },
        _meta: {
          [EO]: {
            ask_id: e.askId,
            ...e.facts.envelope && {
              call_id: e.facts.envelope.call_id
            },
            input_fingerprint: e.inputFingerprint,
            classifier_eligible: e.ask.classifierEligible,
            prior_answer_ok: e.ask.priorAnswerOk
          }
        }
      }
    },
    content: [ {
      type: "text",
      text: `${e.toolName} on ${e.target.name} needs approval in this session before it runs: ${n}`
    } ]
  };
}

function Tzo(e, n, t) {
  return {
    envelope: {
      v: ru,
      outcome: "acknowledged",
      ...n.envelope && {
        call_id: n.envelope.call_id
      },
      target: e,
      ask_id: t
    },
    content: [ {
      type: "text",
      text: `The refusal was recorded on ${e.name} \u2014 nothing ran.`
    } ]
  };
}

function Jae() {
  try {
    return k("tengu_violin_fhole", !1) === !0;
  } catch {
    return !1;
  }
}

export { yzo, JBr, tXn, _zo, ljt, bzo, oZe, Szo, nXn, Dgn, wzo, vzo, Ezo, kzo, Tzo, Jae };
