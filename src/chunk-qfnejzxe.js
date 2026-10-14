// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E, ci } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { a } from "./chunk-j016gcgm.js";

import { Xg, Dme, pcn } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { ge } from "./chunk-07cck4g7.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { nM } from "./chunk-q6wab2jw.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { hn, fe, CC, Rn } from "./chunk-dd98x6x7.js";

import { wK, Bo, Cg, $P, FP, zz, Pwe, Gz, Vz, xPe, XN, Xr, z1, G1, _zn, yIs, JN, Rg, LO, TZ, _v, Eb, sBe, xzn, Il, Ke, y9, EK, RZ, Jo, It, BP, sf, fE, vt, Gt } from "./chunk-xywp7esx.js";

import { Yen, nwe, XTs, G6e, $1n } from "./chunk-gmq0qwep.js";

import { Ed, ktn, Oi } from "./chunk-b47tzzqx.js";

import { CXt } from "./chunk-sqb9meyh.js";

import { wd } from "./chunk-4y2m4xpx.js";

import { Fle } from "./chunk-t3tngvgg.js";

import { vLe, RQ, k6t, T6t, Qw, Veo, TS, Ky, Jde, kre, jcr } from "./chunk-84yp45y8.js";

import { EXo, XVt, $Te, zJ, X6 } from "./chunk-4bxgvwk3.js";

import { _5r, JVt, b5r, Whe } from "./chunk-x2950r2n.js";

import { Mt, On } from "./chunk-3kd8r7rn.js";

function k(e, o, i) {
  if (!vt()) return !1;
  let s = e !== null ? It(e) : Il(), n = s.toLowerCase(), d = n.includes("opus") || n.includes("fable"), r = n.includes("opus-4-6"), c = n.includes("sonnet-4-6");
  if (o && Cg(e)) return !0;
  let u = Yen(s);
  if (u !== "pay_per_request" && u !== "included_in_plan") return !0;
  if (!sf(n)) return !1;
  if (d && i) return !1;
  return r || c;
}

function LTe(e, o, i, s) {
  let n = Bo(), d = n && o && (!e || s?.announceKeptOn === !0), r = n && !!e && !o;
  return (d ? " \xb7 Fast mode ON" : "") + (k(i, o, EK()) ? " \xb7 Draws from usage credits" : "") + (r ? " \xb7 Fast mode OFF" : "");
}

function vXo(e, o, i) {
  if (!!e === o) return null;
  return o ? `Fast mode ON${k(i, !0, EK()) ? " \xb7 Draws from usage credits" : ""}` : "Fast mode OFF";
}

function aw(e) {
  let o = y9(e ?? Eb());
  return e === null ? `${o} (default)` : o;
}

var L = 5e3;

async function C(e) {
  if (e === null) return w("follows_account");
  if (A(e)) return w("not_representable");
  if ($Te() !== "primary") return w("not_primary");
  if (Pwe() !== "served") return w("not_served");
  let o = zJ();
  if (o === null || o.kind !== "account") return w("no_account_scope");
  return T(o, X6(), e);
}

async function T(e, o, i) {
  let s = {
    model: It(i)
  };
  try {
    let n = await Gt.patch(`/api/organizations/:orgUUID/model_selector_state/${o}`, s, {
      auth: "teleport-org",
      isBackground: !0,
      timeout: L,
      validateStatus: () => !0
    });
    if (!n.ok) return t(`[servedCatalog] selection write (${o}) skipped: ${n.reason}`), 
    f("model_default_server_sync", `declined_${n.reason}`), {
      status: "skipped",
      reason: "declined"
    };
    let d = n.status;
    if (d < 200 || d >= 300) return t(`[servedCatalog] selection write (${o}): HTTP ${d}`), 
    f("model_default_server_sync", `http_${d}`), {
      status: "error",
      reason: "http_status",
      httpStatus: d
    };
    return t(`[servedCatalog] selection write (${o}) ok`), g("model_default_server_sync"), 
    await N(e, o, n.data, s.model), {
      status: "ok",
      httpStatus: d
    };
  } catch (n) {
    let d = ci(n).kind;
    return t(`[servedCatalog] selection write (${o}) failed: ${d}`), f("model_default_server_sync", `network_${d}`), 
    {
      status: "error",
      reason: "network"
    };
  }
}

async function N(e, o, i, s) {
  let n = EXo(e, o);
  if (n === void 0 || n.catalog === null) return;
  let d = CXt().safeParse(i), r = d.success && d.data.id === o ? d.data : {
    ...n.catalog.state ?? {
      id: o
    },
    model: s,
    selection_source: "user_setting"
  };
  await XVt(e, o, {
    ...n,
    staleAt: Math.min(n.staleAt, Date.now()),
    catalog: {
      ...n.catalog,
      state: r
    }
  });
}

function w(e) {
  return t(`[servedCatalog] selection write skipped: ${e}`), {
    status: "skipped",
    reason: e
  };
}

function A(e) {
  let o = e.trim().toLowerCase();
  return o === "opusplan" || o === "opusplan[1m]";
}

async function NTe(e, o, i, s) {
  let n = e === "default" ? null : e;
  if (n === null) {
    let r = XN(Eb(), "switch");
    if (r !== null) return m("model_switch", "denied_by_managed_settings"), {
      ok: !1,
      message: r,
      code: "restricted_by_org"
    };
  }
  let d;
  if (n) {
    let r = B(n);
    if (r !== null) {
      let c = Mt(n.trim().toLowerCase()), u = wK("model");
      switch (r.kind) {
       case "disabled":
        return m("model_switch", "alias_1m_disabled"), {
          ok: !1,
          message: u ? `1M context is turned off here (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${n}' isn't available. Run ${u} ${c} instead.` : `1M context is turned off (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${n}' isn\u2019t available. Switch to ${c} instead.`,
          code: "alias_1m_disabled"
        };

       case "unsupported":
        return m("model_switch", "alias_1m_unsupported"), {
          ok: !1,
          message: u ? `${Jo(r.carrier)} doesn't have a 1M context window, so '${n}' isn't available. Run ${u} ${c} to use it with its standard context window.` : `${Jo(r.carrier)} doesn\u2019t have a 1M context window, so '${n}' isn\u2019t available. Switch to ${c} to use its standard context window.`,
          code: "alias_1m_unsupported"
        };

       case "noModeDependentVariant":
        return m("model_switch", "alias_1m_no_mode_variant"), {
          ok: !1,
          message: u ? `'${n}' isn't available: the ${c} setting switches models in plan mode and has no 1M form. Run ${u} ${c}, or ${u} sonnet[1m] for a 1M context window.` : `'${n}' isn\u2019t available, because the ${c} setting switches models in plan mode and has no 1M form. You can switch to ${c}, or to sonnet[1m] for a 1M context window.`,
          code: "alias_1m_unsupported"
        };
      }
    }
  }
  if (n && Gz(n, Vz())) {
    let r = _v(n);
    if (r === null) {
      let c = await Whe(n, o, i);
      if (c !== "overturned") {
        m("model_switch", c === "probe_failed" ? "entitlement_probe_failed" : "denied_by_entitlement");
        let u = wK("model");
        return {
          ok: !1,
          message: `Model '${n}' is restricted by your organization's settings. ${u ? `Run ${u} to choose a different model.` : "Switch to a different model."}`,
          code: c === "probe_failed" ? "check_failed" : "restricted_by_org"
        };
      }
    } else d = n, n = r;
  } else if (n && !Xr(n)) {
    let r = _v(n);
    if (r === null) return m("model_switch", W(n)), {
      ok: !1,
      message: `Model '${n}' is not available. Your organization restricts model selection.`,
      code: "restricted_by_org"
    };
    d = n, n = r;
  }
  if (n && m5r(n)) return m("model_switch", "opus_1m_unavailable"), {
    ok: !1,
    message: "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
    code: "unavailable_for_account"
  };
  if (n && g5r(n)) return m("model_switch", "sonnet_1m_unavailable"), {
    ok: !1,
    message: "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
    code: "unavailable_for_account"
  };
  if (n) {
    let r = JN(n);
    if (r) switch (r.reason) {
     case "disabled":
      if (r.notOffered) return m("model_switch", "not_offered"), {
        ok: !1,
        message: r.minimumVersion !== void 0 ? yIs(r.minimumVersion) : _zn(n),
        code: "not_offered"
      };
      return m("model_switch", "disabled_by_org"), {
        ok: !1,
        message: `Model '${n}' is not currently available for your account${r.description ? `. ${r.description}` : "."}`,
        code: "unavailable_for_account"
      };

     case "absent":
      {
        let c = await _5r(b5r(n), {
          forceServerProbe: !0,
          credentials: i
        }, s?.deadlineMs), u = F(c, s);
        if (!c.valid && !u) {
          m("model_switch", c.notFound ? "fable_unavailable" : "fable_probe_failed");
          let p = wK("model");
          return {
            ok: !1,
            message: c.notFound ? `${r.displayName} isn't available for your account yet. ${p ? `Run ${p} to pick another model.` : "Switch to a different model."}` : c.error,
            ...P(c.notFound || c.permissionDenied ? "unavailable_for_account" : D(c)),
            ...c.serverRefusedModel === !0 && d === void 0 && {
              serverRefusedModel: !0
            }
          };
        }
        if (c.valid) Fle(o, i);
        return {
          ok: !0,
          model: JVt(n) ? n.trim().toLowerCase() : n,
          ...d !== void 0 && {
            substitutedFrom: d
          },
          ...u && {
            unconfirmed: !0
          }
        };
      }
    }
  }
  if (!n) return {
    ok: !0,
    model: n
  };
  if (JVt(n)) return {
    ok: !0,
    model: n.trim().toLowerCase()
  };
  try {
    let r = await _5r(n, {
      credentials: i,
      ...s?.confirmWithServer === !1 && {
        serverProbe: !1
      }
    }, s?.deadlineMs), c = !r.valid && r.creditsRequired === !0 && s?.acceptCreditsRequired === !0 && WEn(O(n)), u = F(r, s);
    if (!r.valid && !c && !u) return m("model_switch", "invalid_model"), {
      ok: !1,
      message: r.error,
      ...P(D(r)),
      ...r.serverRefusedModel === !0 && d === void 0 && {
        serverRefusedModel: !0
      }
    };
    return {
      ok: !0,
      model: O(n),
      ...d !== void 0 && {
        substitutedFrom: d
      },
      ...!r.valid && c && {
        creditsRefusal: r.error
      },
      ...u && {
        unconfirmed: !0
      }
    };
  } catch (r) {
    return m("model_switch", "validate_exception"), {
      ok: !1,
      message: `Failed to validate model: ${l(r)}`,
      code: "check_failed"
    };
  }
}

function O(e) {
  return e;
}

async function Dk(e, o, i, s, n = {}) {
  let d = o(), r = Qw(d), c = I(d, i);
  if (c.length === 0) return {
    decision: "proceed",
    skipConfirm: !1,
    messages: []
  };
  let u = [], p, M = !1, _ = !0;
  for (let h of c) {
    let S = await Veo(e, {
      ...h,
      requestedModel: i,
      source: s
    }, {
      signal: n.signal
    });
    if (u.push(...S.messages), S.decision === "block") return {
      decision: "block",
      reason: S.reason,
      messages: u
    };
    if (S.decision === "ask") M = !0, p ??= S.reason; else _ = _ && S.skipConfirm;
  }
  if (Qw(o()) !== r) {
    if (n.revalidating) return {
      decision: "block",
      reason: "the session model changed while a PreModelSwitch hook was running; pick again",
      messages: u
    };
    let h = await Dk(e, o, i, s, {
      ...n,
      revalidating: !0
    });
    return {
      ...h,
      messages: [ ...u, ...h.messages ]
    };
  }
  return M ? {
    decision: "ask",
    reason: p,
    messages: u
  } : {
    decision: "proceed",
    skipConfirm: _,
    messages: u
  };
}

function I(e, o) {
  let i = T6t(e), s = e.toolPermissionContext.mode, n = [ s, s === "plan" ? "default" : "plan" ], d = new Set, r = [];
  for (let c of n) {
    let u = k6t(i, c), p = k6t(o, c), M = `${u}\0${p}`;
    if (u !== p && !d.has(M)) d.add(M), r.push({
      fromModel: u,
      toModel: p
    });
  }
  return r;
}

function V2e(e) {
  return [ `Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${au(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`, ...e.messages.map(au) ].join(`\n`);
}

function au(e) {
  return Oi(Ed(ktn(e.trimEnd())));
}

function vB(e, o, i) {
  return [ `Model switch to ${aw(e)} was blocked by a PreModelSwitch hook${o ? `: ${au(o)}` : ""}`, ...i.map(au) ].join(`\n`);
}

async function K2e(e, o, i, s, n, d, r, c, u) {
  let p = i().fastMode;
  if (Dme(), TS(e, i(), o, d), s(b => ({
    ...b,
    mainLoopModel: o,
    mainLoopModelForSession: null
  })), r !== void 0) f("model_switch", "family_alias_stepped_down"); else g("model_switch");
  let M = Bo() ? $P(o, p) : !!p;
  if (Bo()) {
    if (zz(), M !== !!p) s(b => ({
      ...b,
      fastMode: M
    })), FP(p, M);
  }
  let _ = n ? await yvt(o, c) : null;
  u?.(_);
  let h = _?.kind === "saved", S = `${Jde}${Ky(aw(o))}${h ? kre : " for this session only"}`;
  return S += LTe(p, M, o, {
    announceKeptOn: !0
  }), S += _vt(_), S += (h ? p5r(o) : "") || f5r(o), S;
}

var U = 3e3;

async function yvt(e, o, i = U) {
  let s = Rn("userSettings", {
    model: e ?? void 0
  }, void 0, o);
  s.then(d => d.error ? void 0 : C(e)).catch(() => {});
  let n = await We(s, i);
  if (n === void 0) return f("model_set_default", "unconfirmed"), {
    kind: "unconfirmed"
  };
  if (n.error) return m("model_set_default", "write_failed"), {
    kind: "failed",
    error: n.error
  };
  return g("model_set_default"), {
    kind: "saved"
  };
}

function _vt(e) {
  if (e === null || e.kind === "saved") return "";
  let o = Os(hn("userSettings") ?? "settings.json");
  switch (e.kind) {
   case "unconfirmed":
    return ` \xb7 couldn't confirm it was saved as your default (${o} is still being written)`;

   case "failed":
    {
      let i = e.error.cause, s = i instanceof Error ? `can't be written (${E(i) ?? i.message})` : "isn't valid JSON";
      return ` \xb7 couldn't save it as your default: ${o} ${s}`;
    }
  }
}

function p5r(e) {
  let o = a.ANTHROPIC_MODEL;
  if (!o || !Xr(o)) return "";
  if (!y(e ?? Eb(), o)) return "";
  return v("ANTHROPIC_MODEL is set to ", RZ(o), " \u2014 new sessions use that while it is set");
}

function y(e, o) {
  let i = It(e), s = It(o);
  return LO(e) || Ke(i, {
    identity: !0
  }) !== Ke(s, {
    identity: !0
  }) || /\[1m\]$/i.test(i) !== /\[1m\]$/i.test(s);
}

function f5r(e) {
  let o = CC("model");
  if (o !== "projectSettings" && o !== "localSettings" && o !== "policySettings") {
    let n = sBe();
    if (n !== null && e !== null && o !== "flagSettings" && !a.ANTHROPIC_MODEL && y(e, n.model)) return x(n);
    return "";
  }
  if (o !== "policySettings") {
    let n = sBe();
    if (n !== null && !a.ANTHROPIC_MODEL) {
      if (e === null) return "";
      if (y(e, n.model)) return x(n);
      return "";
    }
  }
  let i = fe(o)?.model;
  if (i === void 0 || e === i) return "";
  let s = o === "policySettings" ? "Managed settings" : nM(o);
  return v(`${s} pins `, RZ(i), " \u2014 that applies on restart");
}

function v(e, o, i) {
  return `${ge.dim(`\n     ${e}`)}${Ky(o)}${ge.dim(i)}`;
}

function x(e) {
  let o = RZ(e.model);
  switch (e.kind) {
   case "org":
    return v("Your organization's default (", o, ") applies on restart");

   case "standard":
    return v("Your organization's default model isn't available in this build, so the standard default (", o, ") applies on restart");
  }
}

function R(e) {
  return Mt(e.toLowerCase().trim()) === "opusplan" ? [ Rg(), It(e) ] : [ It(e) ];
}

function B(e) {
  let o = e.toLowerCase().trim(), i = Mt(o);
  if (i === o || !JVt(o)) return null;
  if (BP()) return {
    kind: "disabled"
  };
  let s = R(o).find(n => xzn(n));
  if (s !== void 0) return {
    kind: "unsupported",
    carrier: Mt(s)
  };
  if (LO(i) && TZ(o) === null) return {
    kind: "noModeDependentVariant"
  };
  return null;
}

function m5r(e) {
  let o = e.toLowerCase();
  if (!(o.includes("opus") && o.includes("[1m]"))) return !1;
  if (R(e).every(i => fE(i))) return !1;
  return !z1() && !EK();
}

var H = new Set([ "claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet" ]);

function g5r(e) {
  let o = e.toLowerCase();
  if (!(o.includes("sonnet") && o.includes("[1m]") || o.trim() === "opusplan[1m]")) return !1;
  if (H.has(Ke(o.trim(), {
    identity: !0
  }))) return !1;
  if (fE(It(e))) return !1;
  return !G1();
}

function $le(e) {
  return It(e ?? Eb());
}

function Hnr(e, o, i, s, n) {
  if (n === void 0) return !1;
  let d = Xg();
  if (d === 0 || d === s) return !1;
  let r = On($le(e));
  if (r === On($le(RQ({
    mainLoopModel: o,
    mainLoopModelForSession: i
  })))) return !1;
  let c = n.response?.message.model;
  return !(typeof c === "string" && (c === r || pcn(r)?.has(c) === !0));
}

function qVt(e) {
  let o = Ky(aw(e.mainLoopModel)), i = wd(e), s = i !== void 0 ? ` (effort: ${i})` : "", n = vLe(e.mainLoopModelForSession, e.mainLoopModel);
  if (n !== null) return `${jcr}${Ky(aw(n))} (this session only)${s}\nBase model: ${o}`;
  let d = G6e(), r = d !== void 0 ? ` (${$1n(Ky(aw(d.previousModel)))})` : "";
  return `${jcr}${o}${r}${s}`;
}

function WEn(e) {
  let o = It(e ?? Eb());
  return XTs(o);
}

function Tne(e) {
  if (e === null) return !1;
  return nwe(It(e));
}

function F(e, o) {
  return !1;
}

function D(e) {
  if (e.notFound) return "catalog_unknown";
  if (e.permissionDenied) return "unavailable_for_account";
  if (e.notAllowed) return "restricted_by_org";
  if (e.authFailed) return "auth_failed";
  return e.retryable ? "check_failed" : void 0;
}

function P(e) {
  return e === void 0 ? {} : {
    code: e
  };
}

function W(e) {
  try {
    return xPe(e) ? "denied_by_managed_settings" : "not_allowed";
  } catch {
    return "not_allowed";
  }
}

export { LTe, vXo, aw, NTe, Dk, V2e, au, vB, K2e, yvt, _vt, p5r, f5r, m5r, g5r, $le, Hnr, qVt, WEn, Tne };
