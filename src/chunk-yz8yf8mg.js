// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Pp, N0o } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { $o, Oe } from "./chunk-cjt10y7b.js";

import { CDt, SIs, y5, gEo, zh, Ezn, ipt, iBe, aBe, Ke } from "./chunk-xywp7esx.js";

import { q0n, Fbe } from "./chunk-sqb9meyh.js";

import { Mt } from "./chunk-3kd8r7rn.js";

var Bx = {
  fable: "Fable",
  sonnet: "Sonnet",
  opus: "Opus",
  haiku: "Haiku"
};

async function _wt(l, r) {
  let f;
  try {
    return await Promise.race([ r, new Promise(n => {
      f = setTimeout((o, s) => {
        t(`[3p-probe] ${s} hit ${q0n}ms deadline; proceeding without it`), o([]);
      }, q0n, n, l);
    }) ]);
  } finally {
    clearTimeout(f);
  }
}

function d(l) {
  switch (l) {
   case "ANTHROPIC_DEFAULT_SONNET_MODEL":
    return a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !y5("sonnet");

   case "ANTHROPIC_DEFAULT_OPUS_MODEL":
    return a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !y5("opus");

   case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
    return a.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0 && !y5("haiku");

   case "ANTHROPIC_SMALL_FAST_MODEL":
    return a.ANTHROPIC_SMALL_FAST_MODEL !== void 0;

   default:
    return !1;
  }
}

function m(l, r) {
  switch (l) {
   case "ANTHROPIC_DEFAULT_SONNET_MODEL":
    a.set("ANTHROPIC_DEFAULT_SONNET_MODEL", r);
    break;

   case "ANTHROPIC_DEFAULT_OPUS_MODEL":
    a.set("ANTHROPIC_DEFAULT_OPUS_MODEL", r);
    break;

   default:
    return;
  }
  CDt(l, r), SIs(l, r);
}

function ber() {
  N0o({
    sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !y5("sonnet"),
    opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !y5("opus")
  });
}

async function nqr(l) {
  ber();
  let r = l?.pendingUserModel?.trim(), n = Ezn(r === "default" || r === "inherit" || r === "" ? void 0 : r ?? void 0), o = iBe(), s = n != null && n !== "" ? n : r !== void 0 && n == null ? o ?? void 0 : zh() ?? o ?? void 0;
  switch (Oe()) {
   case "bedrock":
    return {
      lines: await k(s),
      hasHardFailure: !1
    };

   case "vertex":
    return {
      lines: await p(s),
      hasHardFailure: !1
    };

   case "mantle":
    {
      let e = !1;
      if (o !== null) {
        let _ = Mt(o.trim().toLowerCase());
        e = !(_ === "opus" || _ === "best" || Ke(_) === Ke($o[ipt].firstParty)) && aBe();
      }
      let u = n != null && n !== "" || zh() != null || e;
      return T(u);
    }

   default:
    return {
      lines: [],
      hasHardFailure: !1
    };
  }
}

async function k(l) {
  let {checkBedrockDefaultAvailability: r, seedEnvDefaultForUserPin: f} = await import("./chunk-gnp22wz0.js"), n = f(l);
  if (n && !d(n.envVar)) m(n.envVar, n.value);
  let o = await _wt("bedrock-fallback", r()), s = [];
  for (let e of o) {
    if (d(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackBedrockId, CDt(e.envVar, e.fallbackBedrockId), 
    e.tier === "sonnet") gEo("bedrock", e.fallbackBedrockId, Fbe);
    if (e.tier === "haiku") {
      if (!d("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackBedrockId;
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, 
    process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
    i("tengu_bedrock_default_fallback", {
      tier: c(e.tier),
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey),
      cross_tier: b(e.crossTier ? "true" : "false")
    }), s.push(e.crossTier ? `${Bx[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.` : `${Bx[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  }
  return s;
}

async function p(l) {
  let {checkVertexDefaultAvailability: r, seedEnvDefaultForUserPin: f} = await import("./chunk-pfcvs31a.js"), n = f(l);
  if (n && !d(n.envVar)) m(n.envVar, n.value);
  let o = await _wt("vertex-fallback", r()), s = [];
  for (let e of o) {
    if (d(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackVertexId, CDt(e.envVar, e.fallbackVertexId), 
    e.tier === "sonnet") gEo("vertex", e.fallbackVertexId, Fbe);
    if (e.tier === "haiku") {
      if (!d("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackVertexId;
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, 
    process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
    i("tengu_vertex_default_fallback", {
      tier: c(e.tier),
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey),
      cross_tier: b(e.crossTier ? "true" : "false")
    }), s.push(e.crossTier ? `${Bx[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.` : `${Bx[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  }
  return s;
}

async function T(l) {
  let {checkMantleDefaultAvailability: r} = await import("./chunk-e6z5cmaf.js"), f = await _wt("mantle-fallback", r(void 0, {
    userPinned: l
  })), n = [], o = !1, s;
  for (let e of f) if (e.kind === "adminPin") {
    if (!l) Pp(e.adminMantleId), s = e.adminMantleId;
  } else if (e.kind === "pinRefuted") {
    if (!l) Pp(e.workingMantleId), s = e.workingMantleId, i("tengu_mantle_default_fallback", {
      default_key: c(e.defaultKey),
      fallback_key: c(e.workingKey),
      admin_pin_refuted: b("true")
    }), n.push(`${Bx[e.tier]}: the admin-configured Opus model is not available on this account \u2014 using ${e.workingName} for this session`);
  } else if (e.kind === "fallback") {
    let u = !1;
    if (!d(e.envVar)) process.env[e.envVar] = e.fallbackMantleId, CDt(e.envVar, e.fallbackMantleId), 
    u = !0;
    if (!l) Pp(e.fallbackMantleId), s = e.fallbackMantleId, u = !0;
    if (u) i("tengu_mantle_default_fallback", {
      default_key: c(e.defaultKey),
      fallback_key: c(e.fallbackKey)
    }), n.push(`${Bx[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  } else o = !0, i("tengu_mantle_default_fallback", {
    default_key: b("exhausted")
  }), n.push(`${Bx[e.tier]}: no accessible model (tried ${e.triedNames.join(", ")}). Enable ${e.defaultName} in Amazon Bedrock (Mantle).`);
  return {
    lines: n,
    hasHardFailure: o,
    mantleOverride: s
  };
}

export { Bx, _wt, ber, nqr };
