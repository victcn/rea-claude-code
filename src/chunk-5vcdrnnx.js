// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c, Gr } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { zX } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { WO, XP, M0t, Tb, n$, JP, sIe } from "./chunk-s2t7g8m9.js";

import { $o, Oe } from "./chunk-cjt10y7b.js";

import { dt } from "./chunk-dd98x6x7.js";

import { BWn, jut, zUe, Inn, Et, Ynn, g9, V1, Szn, NR, Qnn, cm, tc, aie, w5, b9 } from "./chunk-xywp7esx.js";

import { wse } from "./chunk-gmq0qwep.js";

import { nye, Jtt, Qtt, zDe, GDe, _Tn, bTn } from "./chunk-y7242kd2.js";

import { hat, yJt, _Jt, bJt, SJt, wJt, ERe, l$e, IYe } from "./chunk-sqb9meyh.js";

var E = _Jt(Qnn);

async function qYs() {
  if (Oe() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let r = bJt(E, n => n.includes("application-inference-profile"));
  if (r.length === 0) return [];
  i("tengu_bedrock_upgrade_check", {
    stale_tiers: Gr(r.length)
  });
  let l;
  try {
    l = await BWn();
  } catch {
    return [];
  }
  let s = Inn(await WO()), o = [];
  for (let n of r) {
    let m = $o[n.defaultKey].firstParty, e = jut(l, m, s);
    if (!e) continue;
    if (ERe(e)) {
      t(`[bedrock-upgrade] ${l$e(n.tier, "upgrade", [ e ])}`);
      continue;
    }
    let f = cm($o[n.pinnedKey].firstParty), d = cm($o[n.defaultKey].firstParty);
    if (!f || !d) continue;
    o.push({
      tier: n.tier,
      envVar: n.envVar,
      fromKey: n.pinnedKey,
      fromMarketingName: f,
      toKey: n.defaultKey,
      toMarketingName: d,
      toBedrockId: e
    });
  }
  let k = (await Promise.all(o.map(async n => {
    let m = await hTn(n.toBedrockId, n.tier, {
      isDefault: !0,
      versionTooOld: "unavailable"
    });
    return i("tengu_bedrock_probe_result", {
      tier: c(n.tier),
      model_id: Et(n.toBedrockId),
      accessible: m
    }), m ? n : null;
  }))).filter(n => n !== null);
  return t(`[bedrock-upgrade] tiersWithPin=${r.length} candidates=${k.length}`), k;
}

function YYs(r) {
  return SJt(r, E);
}

async function XYs() {
  if (Oe() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let r = yJt(Date.now()), l = dt().modelOverrides, s = wJt(E, l);
  if (s.length === 0) return [];
  i("tengu_bedrock_default_check", {
    unpinned_tiers: Gr(s.length)
  });
  let o;
  try {
    o = await BWn();
  } catch {
    o = [];
  }
  let p = Inn(await WO()), k = s.some(e => e.tier === "sonnet"), n = await Promise.all(s.map(async e => {
    let f = $o[e.defaultKey], d = h(e.defaultKey, o, p);
    if (!d) return null;
    if (ERe(d)) return t(`[bedrock-fallback] ${l$e(e.tier, "check", [ d ])}`), null;
    await I(e, d, o, p, l, k);
    let g = {}, y = await hTn(d, e.tier, {
      isDefault: !0,
      onVerdict: (b, w) => {
        g.verdict = b, g.at = w;
      }
    });
    if (i("tengu_bedrock_probe_result", {
      tier: c(e.tier),
      model_id: Et(d),
      accessible: y
    }), y || g.verdict === "temporary") return null;
    if (g.verdict === "refused") V1(d, g9(d), (g.at ?? Date.now()) + nye);
    let u = await K(e.defaultKey, e.tier, o, p, l, r);
    if (!u) return null;
    if (g.verdict !== "refused") {
      if (!(u.answeredLive === !0 || await hTn(u.regionalId, u.crossTier ? "sonnet" : e.tier, {
        live: !0
      }))) return null;
      if (g.verdict === "denied") V1(d, g9(d), Date.now() + nye), Sjs(d, e.tier, "refused");
    }
    let A = cm(f.firstParty), _ = cm($o[u.key].firstParty);
    if (!A || !_) return null;
    return {
      tier: e.tier,
      envVar: e.envVar,
      defaultKey: e.defaultKey,
      defaultName: A,
      fallbackKey: u.key,
      fallbackName: _,
      fallbackBedrockId: u.regionalId,
      ...u.crossTier && {
        crossTier: !0
      }
    };
  })), m = [];
  for (let e of n) if (e !== null) m.push(e);
  return t(`[bedrock-fallback] unpinnedTiers=${s.length} fallbacks=${m.length}`), 
  m;
}

async function I(r, l, s, o, p, k) {
  let n = (f, d) => ({
    id: d,
    name: cm($o[f].firstParty) ?? $o[f].firstParty
  }), m = (f, d) => IYe(f, d).flatMap(g => {
    let y = h(g, s, o);
    return y && !p?.[$o[g].firstParty] && !ERe(y) ? [ n(g, y) ] : [];
  }), e = [ n(r.defaultKey, l), ...m(r.defaultKey, r.tier) ];
  if (r.tier === "opus") {
    let f = h(NR, s, o), d = !f ? [] : !ERe(f) ? [ n(NR, f) ] : k ? m(NR, "sonnet") : [];
    e.push(...d.map(g => ({
      ...g,
      crossTier: !0
    })));
  }
  Ynn("bedrock", r.tier, r.envVar, e), await Promise.all(e.slice(1).map(async f => {
    let d = f.crossTier ? "sonnet" : r.tier, g = await P(f.id, d);
    if (g?.state === "refused") V1(f.id, g9(f.id), g.at + nye);
  })).catch(() => {});
}

function h(r, l, s) {
  let o = $o[r], p = jut(l, o.firstParty, s);
  if (p) return p;
  if (!o.bedrock) return null;
  return zUe(o.bedrock, s);
}

async function K(r, l, s, o, p, k) {
  let n = [];
  function m(u, A) {
    return u.flatMap(_ => {
      let b = h(_, s, o);
      if (!b) return [];
      if (ERe(b)) return n.push(A === l ? b : `${b} (the cross-tier Sonnet default)`), 
      [];
      return [ {
        key: _,
        regionalId: b,
        probeTier: A
      } ];
    });
  }
  let e = IYe(r, l).filter(u => !p?.[$o[u].firstParty]), f = [ m(e, l) ];
  if (l === "opus") f.push(m([ NR ], "sonnet"));
  if (n.length > 0) t(`[bedrock-fallback] ${l$e(l, "fallback", n)}`);
  let d = new Set, g = u => ({
    onVerdict: (A, _) => {
      if (A === "refused") V1(u.regionalId, g9(u.regionalId), (_ ?? Date.now()) + nye); else if (A === "accessible") {
        if (Szn(u.regionalId), _ === void 0) d.add(u.regionalId);
      }
    }
  }), y = await bTn(f, (u, A) => A ? hTn(u.regionalId, u.probeTier, {
    live: A,
    ...g(u)
  }) : hTn(u.regionalId, u.probeTier, g(u)), async u => (await P(u.regionalId, u.probeTier))?.state === "refused", k);
  if (!y) return null;
  return {
    key: y.key,
    regionalId: y.regionalId,
    ...y.probeTier !== l && {
      crossTier: !0
    },
    ...d.has(y.regionalId) && {
      answeredLive: !0
    }
  };
}

async function hTn(r, l, s) {
  let o = await T(l);
  if (o === void 0) return s?.onVerdict?.("temporary"), !1;
  return await _Tn("bedrock", await R(o), r, () => v(r, o), s) === "accessible";
}

async function Sjs(r, l, s) {
  try {
    let o = await T(l), p = o && await R(o);
    if (p) await GDe(p, r, s);
  } catch (o) {
    t(`[3p-model-memory] bedrock record failed: ${o}`);
  }
}

async function T(r) {
  try {
    return r === "haiku" && zX(a.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION) || await WO();
  } catch {
    return;
  }
}

function R(r) {
  return Qtt("bedrock", () => [ r, a.ANTHROPIC_BEDROCK_BASE_URL, a.CLAUDE_CODE_SKIP_BEDROCK_AUTH ? "skip-auth" : void 0, ...Frr(), Jtt() ]);
}

async function P(r, l) {
  let s = await T(l), o = s && await R(s);
  return o ? zDe(o, r) : void 0;
}

function Frr() {
  let r = dt();
  return [ a.AWS_PROFILE, a.AWS_CONFIG_FILE, a.AWS_SHARED_CREDENTIALS_FILE, a.AWS_ACCESS_KEY_ID, a.AWS_ROLE_ARN, a.AWS_WEB_IDENTITY_TOKEN_FILE, a.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, a.AWS_CONTAINER_CREDENTIALS_FULL_URI, r.awsCredentialExport, r.awsAuthRefresh ];
}

async function v(r, l) {
  try {
    let [{AnthropicBedrock: s}, {getProxyFetchOptions: o}] = await Promise.all([ import("./chunk-vwn56h2n.js"), import("./chunk-adh1rnwr.js") ]), p = {
      awsRegion: l,
      maxRetries: 0,
      timeout: 8e3,
      fetchOptions: o({
        url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${l}.amazonaws.com`
      })
    }, k, n = wse(), m = a.AWS_BEARER_TOKEN_BEDROCK;
    if (m) k = new s({
      ...p,
      apiKey: m,
      defaultHeaders: {
        ...n,
        ...Tb(),
        ...n$(),
        Authorization: `Bearer ${m}`,
        ...!XP() && {
          "X-Api-Key": null
        }
      }
    }); else {
      let e = a.CLAUDE_CODE_SKIP_BEDROCK_AUTH, f = tc(), d = {
        authToken: null,
        defaultHeaders: {
          ...n,
          ...Tb(),
          ...n$(),
          Authorization: null,
          ...!XP() && {
            "X-Api-Key": null
          }
        },
        ...JP
      }, g = e ? sIe() : void 0, y = e || f ? null : await w5();
      k = y ? new s({
        ...p,
        ...d,
        awsAccessKey: y.accessKeyId,
        awsSecretKey: y.secretAccessKey,
        awsSessionToken: y.sessionToken
      }) : new s({
        ...p,
        ...e && !g && {
          skipAuth: !0,
          authToken: null,
          defaultHeaders: {
            ...n,
            ...n$()
          },
          ...JP
        },
        ...e && g && {
          apiKey: g.match(/^Bearer (.+)$/i)?.[1] ?? g,
          defaultHeaders: {
            ...n,
            ...n$(),
            Authorization: g,
            ...M0t()
          }
        },
        ...!e && d,
        ...!e && f && {
          providerChainResolver: aie("Bedrock").providerChainResolver
        },
        ...!e && !f && {
          providerChainResolver: b9(l)
        }
      });
    }
    return await k.messages.create(hat(r)), {
      accessible: !0
    };
  } catch (s) {
    if (s?.status === 429) return {
      accessible: !0
    };
    return {
      accessible: !1,
      error: s
    };
  }
}

export { qYs, YYs, XYs, hTn, Sjs, Frr };
