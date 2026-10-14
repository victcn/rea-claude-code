// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ot, Hu, iWe, aWe, l, E } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { a } from "./chunk-j016gcgm.js";

import { Aje } from "./chunk-y752zmas.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { NLt, Ur, Oe, gi } from "./chunk-cjt10y7b.js";

import { wK, r_, tBe, gzn, Xr, Jnn, Lwe, It, Wwe, Ce } from "./chunk-xywp7esx.js";

import { Qft, xIe, xLt, vfe } from "./chunk-x35dw27e.js";

import { WEr, Hct, ebo } from "./chunk-gmq0qwep.js";

import { ZRn, oF } from "./chunk-84yp45y8.js";

import { Fle } from "./chunk-t3tngvgg.js";

import { VK, Hfe } from "./chunk-3kd8r7rn.js";

var _ = new Set([ "fetch_error", "unknown", "org_level_disabled_until" ]);

function b() {
  return Ur().providerCache.validatedModels;
}

async function Fnr(e, o) {
  let r = e.trim();
  if (!r) return {
    valid: !1,
    error: "Model name cannot be empty"
  };
  if (!Xr(r, o.skipEntitlementDenyOverlay ? {
    skipEntitlementDenyOverlay: !0
  } : void 0)) return {
    valid: !1,
    error: `Model '${r}' is not in the list of available models`,
    notAllowed: !0
  };
  if (!o.forceServerProbe) {
    let m = r.toLowerCase();
    if (VK.includes(m)) return {
      valid: !0
    };
    if (r === a.ANTHROPIC_CUSTOM_MODEL_OPTION) return {
      valid: !0
    };
    if (ebo(r) && Lwe()?.picker.options.some(u => u.model.trim() === r)) return {
      valid: !0
    };
    if (b().has(r)) return {
      valid: !0
    };
  }
  let n = Oe(), s = a.ANTHROPIC_BASE_URL, i = s && URL.canParse(s) ? new URL(s).hostname : void 0, f = gi() || i !== void 0 && (i === "anthropic.com" || i.endsWith(".anthropic.com") || Aje.some(m => new URL(m).hostname === i));
  if (!(n === "gateway" || n === "firstParty" && !f) && /[\s\p{Cc}\p{Cf}]/u.test(r)) return {
    valid: !1,
    error: `Model '${r}' not found`,
    notFound: !0
  };
  if (o.serverProbe === !1) return {
    valid: !0
  };
  try {
    return await oF({
      model: r,
      max_tokens: 1,
      maxRetries: 0,
      querySource: "model_validation",
      resendWithoutRefusedContext1m: !0,
      credentials: o.credentials,
      timeout: o.timeout,
      signal: o.signal,
      messages: [ {
        role: "user",
        content: [ {
          type: "text",
          text: "Hi",
          cache_control: {
            type: "ephemeral"
          }
        } ]
      } ]
    }), b().add(r), {
      valid: !0
    };
  } catch (m) {
    return A(m, r);
  }
}

var M = 15e3;

async function g(e, o) {
  let r = Ur(), n = r.sessionModelDenyReprobe.generation, s = new AbortController, i = await We(Fnr(e, {
    forceServerProbe: o.forceServerProbe,
    skipEntitlementDenyOverlay: o.skipEntitlementDenyOverlay,
    credentials: o.credentials,
    timeout: o.deadlineMs,
    signal: s.signal
  }), o.deadlineMs);
  if (i === void 0) return s.abort(), {
    probe: void 0,
    accountChanged: !1
  };
  let f = r.sessionModelDenyReprobe.generation !== n;
  if (f) r.providerCache.validatedModels.delete(e.trim());
  return {
    probe: i,
    accountChanged: f
  };
}

async function _5r(e, o, r) {
  if (r === void 0 || o.serverProbe === !1) return Fnr(e, o);
  let {probe: n, accountChanged: s} = await g(e, {
    ...o,
    deadlineMs: r
  });
  if (n === void 0 || s) {
    let i = wK("model");
    return {
      valid: !1,
      error: `Couldn't confirm model "${r_(e)}" with the API. ${i ? `Try again, or run ${i} to see available models.` : "Try again."}`,
      retryable: !0
    };
  }
  return n;
}

function JVt(e) {
  let o = e.toLowerCase().trim();
  return Hfe(o);
}

function b5r(e) {
  return JVt(e) || Jnn(e) ? It(e) : e;
}

async function Whe(e, o, r) {
  try {
    if (!Xr(e, {
      skipEntitlementDenyOverlay: !0
    })) return "denied_by_policy";
    let n = b5r(e);
    if (JVt(n)) return "denied_by_policy";
    let s = Ur(), {confirmedEntitlementDenies: i, overturnedEntitlementDenies: f} = s.providerCache, p = tBe(n), m = i.get(p);
    if (m !== void 0 && Date.now() - m < NLt) return "denied_by_server";
    let {probe: u, accountChanged: y} = await g(n, {
      credentials: r,
      deadlineMs: M,
      forceServerProbe: !0,
      skipEntitlementDenyOverlay: !0
    });
    if (u === void 0) return t("[model-access] stale-deny re-probe timed out", {
      level: "warn"
    }), "probe_failed";
    if (!u.valid && !u.notFound && !u.permissionDenied) return "probe_failed";
    if (y) return t("[model-access] stale-deny re-probe answered after the account changed; recording nothing"), 
    u.valid ? "overturned" : "denied_by_server";
    if (!u.valid) {
      let c = Date.now();
      i.set(p, c);
      for (let v of Wwe()) if (gzn(v, e)) i.set(tBe(v.apiName), c);
      return "denied_by_server";
    }
    i.delete(p);
    let S = Date.now();
    for (let c of Wwe()) if (gzn(c, e)) f.set(tBe(c.apiName), S);
    try {
      await h(e, o);
    } catch (c) {
      if (E(c) !== void 0) t(`[model-access] stale-deny eviction failed: ${l(c)}`, {
        level: "warn"
      }); else d(c);
    }
    return Fle(o, r), "overturned";
  } catch (n) {
    return d(n), "probe_failed";
  }
}

async function h(e, o) {
  await Ce(r => {
    let n = r.modelAccessCache;
    if (!n?.length) return r;
    let s = n.filter(i => {
      if (i == null || typeof i !== "object" || typeof i.apiName !== "string" || typeof i.entitled !== "boolean") return !0;
      return !gzn(i, e);
    });
    return s.length === n.length ? r : {
      ...r,
      modelAccessCache: s
    };
  }, o);
}

function A(e, o) {
  if (e instanceof aWe) {
    let n = ZRn(o), s = n ? `. Try '${n}' instead` : "";
    return {
      valid: !1,
      error: `Model '${o}' not found${s}`,
      notFound: !0,
      ...xIe(e) && {
        serverRefusedModel: !0
      }
    };
  }
  if (e instanceof Ot) {
    if (e instanceof iWe) return {
      valid: !1,
      error: "Authentication failed. Please check your API credentials.",
      authFailed: !0
    };
    if (e instanceof Hu) return {
      valid: !1,
      error: "Network error. Please check your internet connection.",
      retryable: !0
    };
    let n = e.error;
    if (n && typeof n === "object" && "type" in n && n.type === "not_found_error" && "message" in n && typeof n.message === "string" && n.message.includes("model:")) return {
      valid: !1,
      error: `Model '${o}' not found`,
      notFound: !0,
      serverRefusedModel: !0
    };
    if (Qft(e)) return {
      valid: !1,
      error: `Model '${o}' isn't available for your account`,
      permissionDenied: !0,
      serverRefusedModel: !0
    };
    let s = n?.error?.details, i = e.status === 429 && s?.error_code === "credits_required", f = i && !e.headers?.get?.(WEr) && !_.has(e.headers?.get?.(Hct) ?? s?.disabled_reason ?? "");
    return {
      valid: !1,
      error: `API error: ${vfe(e).replace(/[.!?\u2026]+$/, "")} \xb7 model not changed`,
      ...R(e.status) && {
        retryable: !0
      },
      ...i && {
        creditsRequired: !0
      },
      ...e.status === 400 && xLt(e) && {
        sessionModeRefused: !0
      },
      ...f && {
        serverRefusedModel: !0
      }
    };
  }
  return {
    valid: !1,
    error: `Unable to validate model: ${e instanceof Error ? e.message : String(e)}`,
    retryable: !0
  };
}

function R(e) {
  return e === void 0 || e === 408 || e === 429 || e >= 500;
}

export { Fnr, _5r, JVt, b5r, Whe };
