// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { Je, j } from "./chunk-b0z4bv3v.js";

import { _ } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { Lvr } from "./chunk-5vba4ath.js";

import { ru, Zd, LF, pn, F_ } from "./chunk-9tdwgnpn.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Xi, no, Fr, $n, C9, Uc } from "./chunk-xywp7esx.js";

import { ht, qt, je } from "./chunk-s2t7g8m9.js";

import { Es } from "./chunk-q6wab2jw.js";

import { B5, zve } from "./chunk-jnzpsr0d.js";

import { T2n } from "./chunk-f1zpf9me.js";

import { GH } from "./chunk-wwq0cyp6.js";

import { PTt, oLe, Zu, Qlr, UM, BB, Wk, zl, AQ, qD, iqe, pAt, lfr, ad } from "./chunk-84yp45y8.js";

import { O8 } from "./chunk-5sbf9djq.js";

import { b7 } from "./chunk-h2y8dwq2.js";

import { Xcn } from "./chunk-67929swj.js";

import { tQe, i5n, PFo, K0r, Ycn, IFo, Y0r, OFo, MFo } from "./chunk-rjg7kw3m.js";

import { LFt, d5n, J0r } from "./chunk-hkeep3bg.js";

import { a5n, HFt } from "./chunk-gtcs2539.js";

import { hte, mMe, nQe } from "./chunk-5yt2rwwg.js";

import { Kze } from "./chunk-cdky8pkh.js";

import { et } from "./chunk-59na0977.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { en } from "./chunk-0qwx38yy.js";

import { randomUUID as A } from "crypto";

function w() {
  return GH.CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT === !0;
}

var O = new Set([ je, et, ht, qt, Xi, Fr, no ]), v = 12582912;

function iKs(e, t) {
  let n = n5n(e, t);
  return n && {
    experimental: {
      [tQe]: n
    }
  };
}

function n5n(e, t) {
  if (!w() || t === void 0) return;
  let n = k(e(), t);
  if (!Y0r(n.deny_rules)) {
    m("mcp_serve_tool_output", "deny_rules_over_bounds");
    return;
  }
  let o = K0r() ? Xcn() : void 0;
  return {
    ...n,
    ...o !== void 0 && {
      tool_host_interface: o
    }
  };
}

function G0r(e) {
  if (!w() || !K0r()) return !1;
  return Ycn(Kn(e) ? e[tQe] : void 0);
}

function k(e, t) {
  return MFo({
    tools: R(e),
    denyRules: t.alwaysDenyRules.cliArg ?? []
  });
}

async function aKs({name: e, args: t, meta: n, tools: o, launchPermissionContext: i, newCall: r, startHeartbeat: a}) {
  let u = IFo(n);
  if (u.kind === "absent") return;
  let s = d5n(n).kind === "absent" ? P(u, e, o, i) : p("invalid_request", `${e} was not run: a call that carries _meta["${LFt}"] is answered only as a plain call. Call it without asking for its output object.`, "carries_asks_key");
  if ("refusal" in s) return f("mcp_serve_tool_output", s.reason, {
    tool: qcn(e)
  }), Lht(s.refusal);
  let {toolUseContext: h, release: y} = r();
  try {
    let l = await x(s.tool, t, C(h, s.launchPermissionContext), a);
    if (!h.abortController.signal.aborted) {
      let T = qcn(s.tool.name);
      if ("unsent" in l) m("mcp_serve_tool_output", l.unsent, {
        tool: T
      }); else if (l.objection === "crashed_check") m("mcp_serve_tool_output", l.objection, {
        tool: T
      }); else if (l.objection !== void 0) f("mcp_serve_tool_output", l.objection, {
        tool: T
      }); else g("mcp_serve_tool_output", {
        tool: T,
        answer: c(l.answer),
        safety_ask_skipped: l.wasSafetyAskSkipped === !0,
        ...l.wasOutputCut && {
          output_cut: !0
        }
      });
    }
    return l.result;
  } finally {
    y();
  }
}

function P(e, t, n, o) {
  if (!w()) return p("unsupported_protocol", `${t} was not run: this server is not set up to return output objects (CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT is not on). Call it without asking for its output object.`);
  if (o === void 0) return p("unsupported_protocol", `${t} was not run: this server holds no permission rules (CLAUDE_CODE_MCP_SERVE_SETTINGS was unset or empty when it started), and it returns output objects only for calls it can judge. Call it without asking for its output object.`, "no_launch_rules");
  let {deny_rules: i} = k(n, o);
  if (!Y0r(i)) return p("unsupported_protocol", `${t} was not run: this server was launched with more or longer deny rules than it can advertise, so it returns no output objects. Call it without asking for its output object.`, "deny_rules_over_bounds");
  if (e.kind === "malformed") return p("invalid_request", `${t} was not run: _meta["${tQe}"] must be exactly { versions, deny_rules_digest }. versions: up to 64 whole numbers. deny_rules_digest: the SHA-256 of JSON.stringify(deny_rules), for the deny_rules this server advertises, as 64 lower-case hex characters.`);
  if (e.kind === "no_shared_version") return p("unsupported_protocol", `${t} was not run: this server returns output objects only in version ${i5n.join(", ")}, and the request lists ${e.versions.join(", ") || "none"}.`);
  if (e.denyRulesDigest !== OFo(i)) return p("unsupported_protocol", `${t} was not run: the request's deny_rules_digest is not that of the deny_rules this server advertises. Reconnect and read them again.`, "deny_rules_digest_mismatch");
  let r = pn(n, t);
  if (r === void 0) return p("not_served", `${t} was not run: this server has no tool by that name.`);
  return O.has(t) ? {
    tool: r,
    launchPermissionContext: o
  } : p("not_served", `${t} was not run: the tools this server answers with an output object are ${R(n).join(", ") || "none"}. Call it without asking for its output object.`);
}

function V0r(e) {
  return O.has(e);
}

function R(e) {
  return e.map(t => t.name).filter(t => O.has(t));
}

function qcn(e) {
  return O.has(e) ? $n(e) : C9(e);
}

function Lht(e) {
  return LF({
    envelope: {
      v: ru,
      outcome: "refused",
      target: HFt(),
      ...e
    },
    content: Zd(e.message)
  });
}

function p(e, t, n = e) {
  return {
    refusal: {
      code: e,
      message: t
    },
    reason: n
  };
}

async function x(e, t, n, o) {
  let i = {
    ...t
  }, r = mMe.filter(h => h in i), a = r.length > 0 ? [ nQe(r) ] : [], u = await I(e, Es(i, r), n);
  if ("rejection" in u) return {
    result: eQe(u.rejection, U(u.objection), a),
    answer: "not_run",
    objection: u.objection
  };
  let s = await r5n(e, u.input, n, o);
  return {
    ..."failure" in s ? {
      result: eQe(s.failure, "ran", a),
      answer: "tool_failed"
    } : o5n(e, s.data, a),
    wasSafetyAskSkipped: u.wasSafetyAskSkipped
  };
}

async function I(e, t, n) {
  try {
    if (!e.isEnabled()) return {
      rejection: `Tool ${e.name} is not enabled`
    };
    let o = F_(e, t);
    if (!o.success) return {
      rejection: `InputValidationError: ${qD(e.name, o.error)}`
    };
    let i = await (e.validateInput?.(o.data, n));
    if (i !== void 0 && !i.result) return {
      rejection: i.message,
      ...i.deniedByPermissionRule === !0 && {
        objection: "deny_rule"
      }
    };
    let r = await S(e, o.data, n);
    return "rejection" in r ? r : {
      input: o.data,
      ...r
    };
  } catch (o) {
    return gWe(e, o), {
      rejection: AQ(o)
    };
  }
}

function C(e, t) {
  let n = {
    ...hte(),
    toolPermissionContext: {
      ...t,
      sandboxAutoAllowSuspended: !0
    }
  };
  return {
    ...e,
    inputFromAnotherMachine: !0,
    toolUseId: `toolu_${A()}`,
    getAppState: () => n
  };
}

async function S(e, t, n) {
  let o = await Wk(e, t, n, {
    crashIsObjection: !0
  }).catch(a => {
    if (n.abortController.signal.aborted) throw a;
    return gWe(e, a), "crashed";
  });
  if (o === null) return {
    wasSafetyAskSkipped: !1
  };
  if (o === "crashed" || o.decisionReason?.type === "other" && o.decisionReason.reason === BB) return {
    rejection: `${e.name} was not run: the permission rules could not be evaluated for this call (internal error).`,
    objection: "crashed_check"
  };
  if (o.behavior === "deny") return {
    rejection: o.message,
    objection: "deny_rule"
  };
  if (UM(o)) return {
    rejection: `${e.name} was not run: a permission rule says to ask a person before a call like this one, and a call that runs in this environment cannot ask. Retrying won't help while that rule is in effect.`,
    objection: "ask_rule"
  };
  let i = zl(o.decisionReason, zve);
  if (i !== void 0) return {
    rejection: lfr(Qlr(o, i)),
    objection: "circuit_breaker"
  };
  let r = zl(o.decisionReason, B5) !== void 0;
  return !r && zl(o.decisionReason) !== void 0 ? {
    wasSafetyAskSkipped: !0,
    ask: o
  } : {
    rejection: `${e.name} was not run: ${o.message} A call that runs in this environment cannot put that to a person. Retrying won't help.`,
    objection: r ? "circuit_breaker" : "other_ask"
  };
}

async function lKs(e, t, n, o, i) {
  if (o === void 0) return {
    toolUseContext: n
  };
  let r = {
    ...C(n, o),
    inputFromAnotherMachine: n.inputFromAnotherMachine
  }, {toolUseId: a} = r, u = a === void 0 ? void 0 : {
    toolUseId: a,
    opened: PTt(r, a, e.name)
  }, s = await S(e, t, {
    ...r,
    permissionPhase: void 0,
    permissionRound: u?.opened
  }).catch(y => {
    if (u) oLe(r, u.toolUseId, u.opened);
    throw y;
  }), h = (u && oLe(r, u.toolUseId, u.opened)) ?? {};
  if (!("rejection" in s)) {
    let y = await J0r(i, e, t, r.session, s.ask);
    if (y !== "run" && y !== "as_without_the_key") return y;
    return g("mcp_serve_plain_call", y === "run" ? {
      safety_ask_skipped: !1,
      caller_attested: !0
    } : {
      safety_ask_skipped: s.wasSafetyAskSkipped
    }), {
      toolUseContext: {
        ...r,
        permissionPhase: h
      }
    };
  }
  if (s.objection === "crashed_check") m("mcp_serve_plain_call", s.objection); else f("mcp_serve_plain_call", s.objection);
  return {
    rejection: s.rejection
  };
}

function U(e) {
  switch (e) {
   case void 0:
    return "validation_failed";

   case "ask_rule":
   case "circuit_breaker":
   case "other_ask":
    return "ask_refused_no_surface";

   case "deny_rule":
   case "crashed_check":
    return "denied_by_rule";
  }
}

async function r5n(e, t, n, o, i = Zu, r = !1, a = !1) {
  using u = o();
  try {
    return await e.call(t, n, i, ad({
      content: []
    }), void 0, {
      gitDiffRead: !0,
      ...r && {
        callerLogsSharedEvents: r
      },
      ...a && {
        smallResultAsked: a
      }
    });
  } catch (s) {
    return gWe(e, s), {
      failure: AQ(s)
    };
  }
}

function gWe(e, t) {
  if (iqe(t) || pAt(t).isSad) return;
  let n = j(t);
  d("telemetryMessage" in n ? n : Je(n, `mcp server tool '${e.name}' threw`));
}

function o5n(e, t, n, o) {
  try {
    let i = L(e, t, o).map(({output: r, ...a}) => ({
      ...a,
      result: a5n(`${e.name} ran. Its output is in this answer's structured content.`, r, !1, n)
    })).find(({result: r}) => Buffer.byteLength(_(r), "utf8") <= v);
    return i === void 0 ? b(e, "result_too_large", n) : {
      ...i,
      answer: "output",
      ...E(e, t) && {
        wasOutputCut: !0
      }
    };
  } catch (i) {
    return d(Je(j(i), `mcp server tool '${e.name}' output could not be encoded`)), b(e, "result_unbuildable", n);
  }
}

function L(e, t, n) {
  if (e.name !== ht || !Kn(t)) return [ {
    output: D(e, t)
  } ];
  let o = {
    ...t,
    originalFile: null
  };
  if (typeof t.originalFile !== "string" || n === void 0) return [ {
    output: o
  } ];
  if (n.isSubagent) return [ {
    output: o,
    originalFileLeftOutReason: "for_subagent"
  } ];
  if (n.sessionVersion < Lvr.editOriginalFile) return [ {
    output: o,
    originalFileLeftOutReason: "older_session"
  } ];
  return Buffer.byteLength(t.originalFile, "utf8") > PFo ? [ {
    output: o,
    originalFileLeftOutReason: "over_limit"
  } ] : [ {
    output: t
  }, {
    output: o,
    originalFileLeftOutReason: "answer_too_large"
  } ];
}

function D(e, t) {
  if (E(e, t)) {
    let n = t.persistedOutputSize, o = typeof n === "number" ? `the command printed ${en(n)}; ` : "", i = typeof n === "number" && n >= O8 ? `The first ${en(O8)} of the command's output are` : "The command's whole output is", r = `(output truncated: ${o}only the start was returned, and a saved copy of this result holds only that start. ${i} in the file ${t.persistedOutputPath}. If the file is gone, run the command again with ${Kze(e.name)}, if that is safe.)\n`, a = Math.max(b7(), T2n) - r.length;
    return {
      ...t,
      stdout: `${r}${ne(t.stdout, a)}`
    };
  }
  switch (e.name) {
   case qt:
    return e.stripForStorage?.(t) ?? t;

   case Xi:
    return F(t, {
      original_file: "",
      updated_file: ""
    });

   default:
    return t;
  }
}

function E(e, t) {
  return e.name === je && Kn(t) && typeof t.stdout === "string" && Boolean(t.persistedOutputPath) && t.isImage !== !0;
}

function F(e, t) {
  return Kn(e) ? {
    ...e,
    ...t
  } : e;
}

function b(e, t, n) {
  return {
    result: s5n(`${e.name} ran, but its result could not be sent back. Check what it changed before running it again.`, n),
    unsent: t
  };
}

function s5n(e, t) {
  return LF({
    envelope: {
      v: ru,
      outcome: "failed",
      target: HFt(),
      code: "internal_error",
      message: e,
      ...t.length > 0 && {
        notes: t
      }
    },
    content: e
  });
}

function eQe(e, t, n) {
  let o = Uc(e);
  return LF({
    envelope: {
      v: ru,
      outcome: "completed",
      target: HFt(),
      is_error: !0,
      content: o,
      disposition: t,
      ...n.length > 0 && {
        notes: n
      }
    },
    content: o
  });
}

export { iKs, n5n, G0r, aKs, V0r, qcn, Lht, lKs, r5n, gWe, o5n, s5n, eQe };
