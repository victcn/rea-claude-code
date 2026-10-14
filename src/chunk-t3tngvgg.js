// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { zn, Lr, vEe, Nme, he, Zje } from "./chunk-3pqddg8f.js";

import { Xp } from "./chunk-b0z4bv3v.js";

import { a } from "./chunk-j016gcgm.js";

import { Ap, un } from "./chunk-y752zmas.js";

import { $C, Kee, t } from "./chunk-kawq2919.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { kp, vje } from "./chunk-5brm0azz.js";

import { JO, Hxo, Ur, Oe, lin } from "./chunk-cjt10y7b.js";

import { f5, GPs, rBe, Qe, RCr, bv, cm, ZN, kK, _9, nc, VS, Sn, vt, Kf, sS, sTo, ixr, axr, LMs, E0t, NMs, Ce, ce, CTo, C0t, xTo, PTo, ITo, MTo } from "./chunk-xywp7esx.js";

import { $Mt } from "./chunk-gmq0qwep.js";

import { jEs } from "./chunk-4jjt8sdp.js";

import { vUe, mwe } from "./chunk-xsrp0h3z.js";

import { PXo } from "./chunk-bqcy0wpr.js";

import { me, yn, Vo, Wd, lr, St, Rm } from "./chunk-dexzwy8h.js";

import { On } from "./chunk-3kd8r7rn.js";

import { Qo } from "./chunk-eha3vdmz.js";

var Q = p(() => St({
  client_data: Rm(Wd()).nullish(),
  additional_model_options: lr(St({
    model: me(),
    name: me(),
    description: me(),
    disabled_reason: me().nullish()
  }).transform(({model: e, name: o, description: n, disabled_reason: h}) => {
    let c = JO(On(e)), s = c ? cm(e) : null, _ = n;
    if (c && s && h == null) {
      let y = n ? n.startsWith(s) ? n : `${s} \xb7 ${n}` : s, u = GPs(e);
      _ = u && !vt() && !y.includes("per Mtok") ? `${y} \xb7 ${u}` : y;
    }
    return {
      value: e,
      label: h != null ? `${o} (disabled)` : o,
      description: h ? _ ? `${_} \xb7 ${h}` : h : _,
      ...h != null && {
        disabled: !0
      }
    };
  })).nullish(),
  additional_model_costs: Rm(St({
    input_tokens: yn(),
    output_tokens: yn(),
    prompt_cache_write_tokens: yn(),
    prompt_cache_write_1h_tokens: yn().nullish(),
    prompt_cache_read_tokens: yn(),
    web_search_requests: yn().nullish()
  }).transform(e => ({
    inputTokens: e.input_tokens,
    outputTokens: e.output_tokens,
    promptCacheWriteTokens: e.prompt_cache_write_tokens,
    ...e.prompt_cache_write_1h_tokens != null && {
      promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens
    },
    promptCacheReadTokens: e.prompt_cache_read_tokens,
    webSearchRequests: e.web_search_requests ?? .01
  }))).nullish(),
  model_access: lr(St({
    api_name: me(),
    entitled: Vo(),
    max_effort_level: me().nullish()
  }).transform(({api_name: e, entitled: o, max_effort_level: n}) => ({
    apiName: e,
    entitled: o,
    ...n != null && {
      maxEffortLevel: n
    }
  }))).nullish(),
  org_model_default: St({
    name: me(),
    updated_at: me(),
    data_source: me(),
    override_user_selection: Vo(),
    default_effort_level: me().nullish(),
    override_user_effort: Vo().nullish()
  }).nullish(),
  oauth_account: St({
    account_uuid: me().nullish(),
    account_email: me().nullish(),
    organization_uuid: me().nullish(),
    organization_name: me().nullish(),
    organization_type: me().nullish(),
    organization_rate_limit_tier: me().nullish(),
    user_rate_limit_tier: me().nullish(),
    seat_tier: me().nullish()
  }).passthrough().nullish(),
  auto_compact_windows: Rm(me(), Wd()).nullish(),
  narrowed: Vo().nullish()
}));

function R(e = Qe()) {
  return {
    entrypoint: (Ur().fetchesClientData && vje() ? Zje() : void 0) ?? kp(),
    model: On(e),
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION,
    organizationUuid: ce().oauthAccount?.organizationUuid ?? null
  };
}

function Z(e) {
  let o = On(e), n = Qe();
  if (o === On(n)) return !0;
  let h = RCr({
    permissionMode: "plan",
    mainLoopModel: n
  }).model;
  if (o === On(h)) return !0;
  return [ n, h ].some(c => {
    let s = jEs(c);
    return s !== void 0 && o === On(s);
  });
}

function tt() {
  CTo(e => {
    try {
      return axr(R(e !== void 0 && Z(e) ? void 0 : e));
    } catch (o) {
      return d(o), ixr;
    }
  });
}

tt();

function v() {
  return lin();
}

function Unr() {
  try {
    xTo(() => {
      try {
        return v();
      } catch (e) {
        return d(e), !0;
      }
    }), PTo(() => {
      try {
        return v();
      } catch (e) {
        return d(e), !1;
      }
    }), ITo((e, o) => {
      try {
        return PXo(e, o);
      } catch (n) {
        return d(n), e;
      }
    }), MTo(() => {
      try {
        if (!v()) return null;
        let e = R();
        return {
          entrypoint: e.entrypoint ?? null,
          model: e.model,
          org: e.organizationUuid
        };
      } catch (e) {
        return d(e), null;
      }
    });
  } catch (e) {
    d(e);
  }
}

function et(e) {
  return {
    params: {
      entrypoint: e.entrypoint,
      model: e.model
    },
    userAgent: `claude-code/${e.ccVersion}`
  };
}

function q(e, o) {
  if (!e || !o) return e;
  if (o.account_uuid != null && o.account_uuid !== e.accountUuid) return e;
  let n = {
    organizationType: o.organization_type ?? null,
    organizationRateLimitTier: o.organization_rate_limit_tier ?? null,
    userRateLimitTier: o.user_rate_limit_tier ?? null,
    seatTier: o.seat_tier ?? null
  };
  if (o.account_email != null) n.emailAddress = o.account_email;
  if (o.organization_uuid != null) n.organizationUuid = o.organization_uuid;
  if (o.organization_name != null) n.organizationName = o.organization_name;
  return {
    ...e,
    ...n
  };
}

function ot(e) {
  if (!e?.account_uuid) return;
  vEe({
    accountUuid: e.account_uuid,
    emailAddress: he() ? void 0 : e.account_email ?? void 0,
    organizationUuid: e.organization_uuid ?? void 0
  });
}

async function nt(e, o) {
  if (Oe() === "gateway") {
    if (!a.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY) return t("[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)"), 
    {
      response: {
        additional_model_options: []
      },
      viaScopelessOAuth: !1
    };
    let l = await at(o);
    return l && {
      response: l,
      viaScopelessOAuth: !1
    };
  }
  if (Ct()) return t("[Bootstrap] Skipped: Nonessential traffic disabled"), null;
  if (Oe() !== "firstParty") return t("[Bootstrap] Skipped: 3P provider"), null;
  let {params: n, userAgent: h} = et(e), c = async (l, r) => {
    t("[Bootstrap] Fetching");
    let A = await At.get(`${l}/api/claude_cli/bootstrap`, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": h,
        ...$Mt(),
        ...r
      },
      params: n,
      timeout: 5e3
    }), C = Q().safeParse(A.data);
    if (!C.success) return t(`[Bootstrap] Response failed validation: ${C.error.message}`), 
    f("api_bootstrap_fetch", "parse_failed"), null;
    return t("[Bootstrap] Fetch ok"), C.data;
  }, s = VS();
  if (!s && nc()) try {
    let [l, r] = await Promise.all([ mwe(), vUe() ]);
    if (l !== null) {
      let A = await c(a.ANTHROPIC_BASE_URL || r?.baseURL || un().BASE_API_URL, {
        ...r?.extraHeaders,
        Authorization: `Bearer ${await l.getToken()}`,
        "anthropic-beta": Ap
      });
      return A && {
        response: A,
        viaScopelessOAuth: !1
      };
    }
  } catch (l) {
    return t(`[Bootstrap] WIF fetch failed: ${At.isAxiosError(l) ? l.response?.status ?? l.code : l instanceof Error ? l.constructor.name : "unknown"}`), 
    f("api_bootstrap_fetch", "wif_unavailable"), null;
  }
  let _ = f5(s);
  if (!Sn()?.accessToken && !_) return t("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), 
  null;
  if (a.ANTHROPIC_UNIX_SOCKET) return t("[Bootstrap] Skipped: unix-socket-proxied session"), 
  f("api_bootstrap_fetch", "unix_socket_skip"), null;
  let u = !1;
  try {
    let l = await sS(async () => {
      let r = Sn()?.accessToken, A = Kf(), C;
      if (r && (A || !_)) u = !A && !_, C = {
        Authorization: `Bearer ${r}`,
        "anthropic-beta": Ap
      }; else if (_) u = !1, C = {
        "x-api-key": _
      }; else return t("[Bootstrap] No auth available on retry, aborting"), null;
      return c(un().BASE_API_URL, C);
    }, {
      gateToSessionOAuthCredential: he(),
      credentials: o
    });
    return l && {
      response: l,
      viaScopelessOAuth: u
    };
  } catch (l) {
    let r = At.isAxiosError(l) ? l.response?.status : void 0;
    if (u && r === 403) return t("[Bootstrap] Skipped: 403 for OAuth token without profile scope"), 
    f("api_bootstrap_fetch", "no_profile_scope_403"), null;
    throw t(`[Bootstrap] Fetch failed: ${At.isAxiosError(l) ? l.response?.status ?? l.code : "unknown"}`), 
    m("api_bootstrap_fetch", "request_failed"), l;
  }
}

function S5r() {
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  return Boolean(f5(VS())) || Boolean(Sn()?.accessToken) && Kf();
}

async function Fle(e, o) {
  await ojs(e, o);
}

async function ojs(e, o, {keepRenderCaches: n = !1, renderedClientData: h} = {}) {
  Unr();
  try {
    let c = Oe() === "firstParty";
    if (!c) ZN(), _9();
    let s = R(), _ = Nme(), y = await nt(s, o);
    if (!y) return !1;
    let {response: u, viaScopelessOAuth: l} = y;
    if (_ !== Nme()) return t("[Bootstrap] Discarding response fetched under a superseded credential"), 
    f("api_bootstrap_fetch", "superseded_credential"), !1;
    g("api_bootstrap_fetch");
    let r = ce(), A = u.narrowed ?? l, C = A && u.additional_model_options == null, T = A && u.additional_model_costs == null, k = A && u.model_access == null, z = A && u.org_model_default == null, U = A && u.auto_compact_windows == null, b = u.client_data ?? null, D = C ? r.additionalModelOptionsCache ?? [] : u.additional_model_options ?? [], I = T ? r.additionalModelCostsCache ?? {} : u.additional_model_costs ?? {}, P = k ? r.modelAccessCache ?? [] : u.model_access ?? [], F = U ? r.autoCompactWindowsCache ?? null : u.auto_compact_windows ?? null;
    ot(u.oauth_account);
    let V = Nme(), B = q(r.oauthAccount, u.oauth_account), L = u.org_model_default ? {
      ...u.org_model_default,
      ...B?.organizationUuid && {
        orgUuid: B.organizationUuid
      }
    } : z ? r.orgModelDefaultCache ?? null : null, E = axr({
      ...s,
      organizationUuid: B?.organizationUuid ?? s.organizationUuid
    }), x = r.clientDataCacheSlots?.[E], S = E0t(x) ? x : void 0, N = S !== void 0, Y = zn(B, r.oauthAccount), G = c && S !== void 0 && Date.now() - S.at > LMs, W = c && (S === void 0 || !zn(S.data ?? null, b)), O = c && (h !== void 0 ? !zn(h, b) : W);
    i("tengu_client_data_cache_key", {
      slot_hit: N,
      slot_changed: O,
      legacy_fallback: !N && r.clientDataCache != null,
      slot_stale: G
    });
    let H = c, j = typeof r.additionalModelOptionsAnsweredAt === "number", X = C || (H ? Array.isArray(r.additionalModelOptionsCache) && j && zn(r.additionalModelOptionsCache, D) : !j && zn(r.additionalModelOptionsCache ?? [], D));
    if (!W && !O && !G && X && zn(r.additionalModelCostsCache ?? {}, I) && zn(r.modelAccessCache ?? [], P) && zn(r.orgModelDefaultCache ?? null, L) && (!c || zn(r.autoCompactWindowsCache ?? null, F)) && Y) {
      if (t("[Bootstrap] Cache unchanged, skipping write"), C0t(E), !k) Hxo();
      return !0;
    }
    t("[Bootstrap] Cache updated, persisting to disk");
    let K = !1;
    if (await Ce(w => {
      if (V !== Nme()) return K = !0, w;
      let M = q(w.oauthAccount, u.oauth_account), J = axr({
        ...s,
        organizationUuid: M?.organizationUuid ?? null
      });
      return {
        ...w,
        clientDataCacheSlots: c ? NMs(w.clientDataCacheSlots, J, {
          data: b,
          at: Date.now(),
          entrypoint: s.entrypoint ?? null,
          model: s.model,
          org: M?.organizationUuid ?? null
        }) : w.clientDataCacheSlots,
        ...C ? {} : {
          additionalModelOptionsCache: D,
          additionalModelOptionsAnsweredAt: H ? Date.now() : void 0
        },
        ...T ? {} : {
          additionalModelCostsCache: I
        },
        ...k ? {} : {
          modelAccessCache: P
        },
        ...z ? {} : {
          orgModelDefaultCache: L
        },
        autoCompactWindowsCache: c && !U ? F : w.autoCompactWindowsCache ?? null,
        oauthAccount: M
      };
    }, e), C0t(E), K) return !1;
    if (!k) Hxo();
    if (O && !n) ZN(), _9();
    return !0;
  } catch (c) {
    if (Xp(c)) t(`[Bootstrap] fetchBootstrapData failed: ${c}`, {
      level: "error"
    }); else d(c);
    return !1;
  } finally {
    sTo();
  }
}

var rt = p(() => St({
  data: lr(St({
    id: me(),
    display_name: me().nullish(),
    description: me().nullish()
  }))
}));

async function at(e) {
  await kK(e);
  let o = Lr();
  if (!o) return null;
  try {
    let n = await At.get(`${o.url}/v1/models`, {
      headers: {
        Authorization: `Bearer ${o.jwt}`,
        "anthropic-version": "2023-06-01",
        "User-Agent": Qo()
      },
      params: {
        limit: 1e3
      },
      timeout: 5e3
    }), h = rt().safeParse(n.data);
    if (!h.success) return t(`[Bootstrap] Gateway /v1/models failed validation: ${h.error.message}`), 
    null;
    let c = h.data.data.filter(s => /(claude|anthropic)/i.test(s.id)).filter(s => {
      let _ = JO(s.id);
      return _ === null || rBe(bv(_.firstParty));
    }).map(s => ({
      value: s.id,
      label: $C(s.display_name ?? "") || $C(s.id),
      description: Kee(s.description ?? "")
    }));
    return t(`[Bootstrap] Gateway /v1/models \u2192 ${c.length} custom options`), {
      additional_model_options: c
    };
  } catch (n) {
    return t(`[Bootstrap] Gateway /v1/models fetch failed: ${At.isAxiosError(n) ? n.response?.status ?? n.code : "unknown"}`), 
    null;
  }
}

export { Unr, S5r, Fle, ojs };
