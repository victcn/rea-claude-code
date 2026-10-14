// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { kr, yl } from "./chunk-cqgvwwgb.js";

import { LBn, AO, ch, BFe, Zue, K8, Y7, EH, zSe, RR, nct, use, FBn, US, q8, iC, t_, Uyo, rMt } from "./chunk-4y2m4xpx.js";

import { Qe } from "./chunk-xywp7esx.js";

var F = {
  low: "Quick, straightforward implementation",
  medium: "Balanced approach with standard testing",
  high: "Comprehensive implementation with extensive testing",
  xhigh: "Extended reasoning with thorough analysis (on supported models)",
  max: "Maximum capability with deepest reasoning (on supported models)"
}, QSt = "dynamic workflows on every task";

function RSn() {
  let e = Qe(), t = AO(e), o = Zue(e);
  return `Usage: /effort [${o.join("|")}|auto${t ? "|ultracode [on|off]" : ""}]\n\nEffort levels:\n` + o.map(r => `- ${r}: ${F[r]}\n`).join("") + "- auto: Use the default effort level for your model" + (t ? `\n\nUltracode (any effort level, this session only):\n- ultracode [on|off]: ${QSt}` : "");
}

function g(e) {
  let t = Zue(e), o = AO(e) ? ", ultracode [on|off]" : "";
  return `${t.join(", ")}, auto${o}`;
}

function DVr(e) {
  let t = e.toLowerCase();
  if (t === "auto" || t === "unset") return {
    value: void 0
  };
  let o = EH(e);
  return o ? {
    value: o
  } : null;
}

function R(e) {
  if (!kr()) return null;
  if (!yl()) return " (applied locally \u2014 this remote transport can\u2019t change the remote session\u2019s settings)";
  return kr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: e
  }).catch(d), null;
}

function LVr() {
  return kr() !== null && yl();
}

function w(e) {
  return LVr() ? e.ultracodeConfirmed ?? !1 : void 0;
}

function O(e, t) {
  let o = kr();
  if (!o) return null;
  if (!yl()) return R({
    effortLevel: e,
    ultracode: !1
  });
  return o.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      effortLevel: e,
      ultracode: !1
    }
  }).then(() => t === !0 ? o.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      ultracode: !0
    }
  }) : void 0).catch(d), null;
}

async function D(e, t, o, r, s) {
  let f = Qe(), n = typeof e === "string" ? K8(e, f) : e, E = n !== e, u = o && !E, l = zSe(n);
  if (yl() && l === void 0) return {
    message: `${n} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`
  };
  let p = q8(n, f, u, s);
  r?.({
    value: n
  });
  let m = w(t), h = m === !1 && t.ultracode === !0;
  if (m !== void 0 && m !== (t.ultracode === !0)) r?.({
    ultracode: m
  });
  let y = O(l ?? null, m), C = await p;
  if (C) return {
    message: `Failed to set effort level: ${C.message}`
  };
  i("tengu_effort_command", {
    effort: typeof n === "number" ? n : c(n),
    from_level: pe(t_(f, t.effort)),
    route: c(t.route),
    is_remote: kr() !== null
  });
  let U = kr() ? void 0 : RR();
  if (U !== void 0 && U !== n) {
    let x = a.CLAUDE_CODE_EFFORT_LEVEL;
    if (l === void 0) return {
      message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${x} overrides effort this session, and ${Y7(n)} is session-only (nothing saved)`,
      effortUpdate: {
        value: n
      }
    };
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${x} overrides this session \u2014 clear it and ${Y7(n)} takes over`,
      effortUpdate: {
        value: n
      }
    };
  }
  let _ = Uyo(n), L = FBn(f), S = l !== void 0 && u && !kr() ? L !== null ? ` (saved, though your organization starts new sessions on ${f} at ${L} effort)` : " (saved as your default for new sessions)" : " (this session only)";
  if (E) return {
    message: `Effort '${e}' exceeds the cap for ${f} set by your settings or organization; set to '${n}' instead${S}: ${_}${h ? " \xb7 Ultracode off" : ""}${y ?? ""}`,
    effortUpdate: {
      value: n
    }
  };
  return {
    message: `Set effort level to ${Y7(n)}${S}: ${_}${h ? " \xb7 Ultracode off" : ""}${y ?? ""}`,
    effortUpdate: {
      value: n
    }
  };
}

function v(e) {
  let t = kr() ? void 0 : RR();
  return t === null ? void 0 : t ?? e;
}

function xSn({asDefault: e, levelChanged: t, chosen: o, model: r}) {
  return e && (t || v(o) !== void 0 || rMt(r) === void 0);
}

function xGt(e, t, o) {
  let r = ch(o, t) ? " \xb7 Ultracode on" : "", s = v(e);
  if (s === void 0) {
    let n = iC(t, e), E = BFe(t) !== null && rMt(t) === void 0 && US(t, e) !== void 0 ? ", set by your organization" : "";
    return {
      message: `Effort level: auto (currently ${Y7(n)}${E})${r}`
    };
  }
  let f = Uyo(s);
  return {
    message: `Current effort level: ${Y7(s)} (${f})${r}`
  };
}

async function V(e, t, o, r) {
  o?.({
    value: void 0
  });
  let s = w(e), f = s === !1 && e.ultracode === !0;
  if (s !== void 0 && s !== (e.ultracode === !0)) o?.({
    ultracode: s
  });
  let n = O(null, s), E = await q8(void 0, Qe(), t, r);
  if (E) return {
    message: `Failed to set effort level: ${E.message}`
  };
  i("tengu_effort_command", {
    effort: b("auto"),
    from_level: pe(t_(Qe(), e.effort)),
    route: c(e.route),
    is_remote: kr() !== null
  });
  let u = t ? "" : " (this session only)", l = kr() ? void 0 : RR();
  if (l !== void 0 && l !== null) {
    let p = a.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${p} still controls this session`,
      effortUpdate: {
        value: void 0
      }
    };
  }
  return {
    message: `Effort level set to auto${u}${f ? " \xb7 Ultracode off" : ""}${n ?? ""}`,
    effortUpdate: {
      value: void 0
    }
  };
}

function k(e, t, o) {
  let r = Qe();
  if (e && !AO()) return {
    message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${g(r)}`
  };
  if (e && !AO(r)) return {
    message: `Ultracode isn't available on ${r}. Valid options are: ${g(r)}`
  };
  o?.({
    ultracode: e
  });
  let s = R({
    ultracode: e
  });
  i("tengu_effort_command", {
    effort: e ? b("ultracode") : b("ultracode_off"),
    from_level: pe(t_(r, t.effort)),
    route: c(t.route),
    is_remote: kr() !== null
  });
  let f = v(t.effort) ?? iC(r, t.effort);
  return {
    message: e ? `Ultracode on (this session only): ${QSt}. Effort stays ${f}.${s ?? ""}` : `Ultracode off. Effort stays ${f}.${s ?? ""}`,
    effortUpdate: {
      ultracode: e
    }
  };
}

function A(e) {
  let [t, o, ...r] = e.split(/\s+/);
  if (t !== "ultracode" || r.length > 0) return;
  if (o === void 0 || o === "on") return !0;
  return o === "off" ? !1 : void 0;
}

async function P(e, t, o = !0, r, s) {
  let f = e.toLowerCase();
  if (f === "auto" || f === "unset") return V(t, o, r, s);
  let n = A(f);
  if (n !== void 0) return k(n, t, r);
  let E = EH(e);
  if (!E) return {
    message: `Invalid argument: ${e}. Valid options are: ${g(Qe())}`
  };
  return D(E, t, o, r, s);
}

async function jHe(e, t, o, r = !0, s) {
  let f = !1, n = null, E = await P(e, t, r, u => {
    if (f = !0, u.ultracode === void 0) LBn();
    o(l => {
      n ??= {
        sessionEffort: l.sessionEffort,
        ultracode: l.ultracode ?? !1
      };
      let p = u.ultracode === void 0 ? nct(u.value) : l.sessionEffort, m = u.ultracode ?? l.ultracode ?? !1;
      if (use(l.sessionEffort, p) && (l.ultracode ?? !1) === m) return l;
      return {
        ...l,
        sessionEffort: p,
        ultracode: m
      };
    });
  }, s);
  if (f && !E.effortUpdate) o(u => {
    if (n === null) return u;
    if (use(u.sessionEffort, n.sessionEffort) && (u.ultracode ?? !1) === n.ultracode) return u;
    return {
      ...u,
      sessionEffort: n.sessionEffort,
      ultracode: n.ultracode
    };
  });
  return E;
}

export { QSt, RSn, DVr, LVr, xSn, xGt, jHe };
