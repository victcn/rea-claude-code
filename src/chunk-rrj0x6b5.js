// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { m } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { ao } from "./chunk-w0q7jqcp.js";

import { oEr, AO, ch, NBn, $Bn, Zb, K8, epe, jFe, ect, R1, RR, X7, nct, use, wd, US, BBn, rMt } from "./chunk-4y2m4xpx.js";

import { kSr } from "./chunk-rshryz75.js";

function sde(e, r) {
  let o = US(e, r);
  return typeof o === "string" ? o : null;
}

function lCn(e, {model: r, getAppState: o, setAppState: i}) {
  if (!kSr()) return m("bridge_flag_settings", "disabled"), {
    ok: !1,
    error: "apply_flag_settings: effort changes over Remote Control are turned off"
  };
  let l, s, d = !1;
  if ("effortLevel" in e && !$Bn(r, e.effortLevel, o())) {
    if (d = !0, e.effortLevel != null) {
      let u = R1(e.effortLevel) ?? jFe(e.effortLevel);
      if (typeof u !== "string" || !Zb(u)) return m("bridge_flag_settings", "invalid_effort_level"), 
      {
        ok: !1,
        error: "apply_flag_settings: unrecognized effortLevel"
      };
      l = u, s = K8(u, r);
    }
    let p = RR();
    if (p !== void 0 && s !== p) return m("bridge_flag_settings", "env_override"), {
      ok: !1,
      error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session"
    };
  }
  let c = epe(e.effortLevel) === "ultracode", a = "ultracode" in e ? e.ultracode === !0 : void 0;
  if ((a === !0 || a === void 0 && c) && !AO(r)) return m("bridge_flag_settings", "ultracode_unavailable"), 
  {
    ok: !1,
    error: `apply_flag_settings: ultracode is not available for this session (${AO() ? `${r} does not support it` : "dynamic workflows are off"})`
  };
  i(p => {
    let u = d && !c && NBn(r, p, l), f = p;
    if (d) {
      let g = nct(s);
      if (!use(f.sessionEffort, g)) f = {
        ...f,
        sessionEffort: g
      };
    }
    if (a === void 0) {
      if (c) {
        if (!f.ultracode) f = {
          ...f,
          ultracode: !0
        };
      } else if (u && f.ultracode) f = {
        ...f,
        ultracode: !1
      };
    } else if ((f.ultracode ?? !1) !== a) f = {
      ...f,
      ultracode: a
    };
    return f;
  });
  let n = o();
  return t(`[bridge] apply_flag_settings applied effort=${wd(n) ?? "auto"} ultracode=${n.ultracode === !0}`), 
  {
    ok: !0
  };
}

function $Zo(e, {getAppState: r, setAppState: o, latch: i}) {
  let l = ect(e.trim()).level, s = l === void 0 ? void 0 : oEr(l);
  if (s === void 0) return {
    ok: !1,
    error: "unrecognized effort"
  };
  let d = epe(l) === "ultracode", c = !d && i.seedSetUltracode;
  return i.seedSetUltracode = d, o(a => {
    let n = a;
    if (!use(a.sessionEffort, X7(s))) n = {
      ...n,
      sessionEffort: X7(s)
    };
    if (d && !n.ultracode) n = {
      ...n,
      ultracode: !0
    }; else if (c && n.ultracode) n = {
      ...n,
      ultracode: !1
    };
    return n;
  }), t(`[bridge] effort seeded effort=${wd(r()) ?? "auto"} ultracode=${r().ultracode === !0}`), 
  {
    ok: !0
  };
}

function nkt({level: e, ultracodeActive: r}) {
  let o = E();
  if (!o || !kSr()) return;
  let i = ao(), l = {};
  if (e !== void 0) {
    if (i.lastKnownEffort = e, i.lastReportedEffort !== e) i.lastReportedEffort = e, 
    l.effort_level = e;
  }
  if (r !== void 0) {
    if (i.lastKnownUltracodeActive = r, i.lastReportedUltracodeActive !== r) i.lastReportedUltracodeActive = r, 
    l.is_ultracode_active = r || null;
  }
  if (Object.keys(l).length > 0) o.reportMetadata(l);
}

function Vne(e, r) {
  if (!E()) return;
  let o = BBn(e, wd(r, e) ?? rMt(e));
  nkt({
    level: o === void 0 ? null : sde(e, o),
    ultracodeActive: ch(r.ultracode, e)
  });
}

function E() {
  let e = ao(), r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null;
}

function FZo() {
  let e = ao();
  e.lastReportedEffort = void 0, e.lastReportedUltracodeActive = void 0, nkt({
    level: e.lastKnownEffort,
    ultracodeActive: e.lastKnownUltracodeActive
  });
}

export { sde, lCn, $Zo, nkt, Vne, FZo };
