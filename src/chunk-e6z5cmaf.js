// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import { WO, XP, Tb, n$, JP, sIe } from "./chunk-s2t7g8m9.js";

import "./chunk-46phtgr7.js";

import "./chunk-jkzenvsk.js";

import { $o, Oe } from "./chunk-cjt10y7b.js";

import "./chunk-vps0k559.js";

import "./chunk-3ykz5st8.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-4dwgr3et.js";

import "./chunk-0pmh7awy.js";

import "./chunk-0cdqg49t.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-g6nh65r0.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-5brm0azz.js";

import "./chunk-x5881pc6.js";

import "./chunk-8yperama.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-qqd24q2y.js";

import { dt } from "./chunk-dd98x6x7.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9yajep3y.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-zscnwzv2.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-j90se18b.js";

import "./chunk-nnrb0acr.js";

import "./chunk-9btqc05b.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-bsddf56y.js";

import "./chunk-3kb22va7.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import { y5, zh, ipt, cm, UP, tc, aie, w5, b9 } from "./chunk-xywp7esx.js";

import "./chunk-hmce8a0s.js";

import "./chunk-07cck4g7.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-nc0jxmkt.js";

import { wse } from "./chunk-gmq0qwep.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-2my8wpr5.js";

import "./chunk-y3nc3daq.js";

import "./chunk-mw643xee.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-9nqgkt3n.js";

import { Jtt, Qtt, zDe, GDe } from "./chunk-y7242kd2.js";

import { Txt, hat } from "./chunk-sqb9meyh.js";

import { Frr } from "./chunk-5vcdrnnx.js";

import "./chunk-j5jvvqe4.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

var h = Object.keys($o).filter(e => $o[e].mantle !== null);

async function z(e = ipt, n) {
  if (Oe() !== "mantle") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = dt().modelOverrides;
  if (o?.[$o[e].firstParty]) return [];
  let u = n?.userPinned ?? zh() != null, m = a.ANTHROPIC_DEFAULT_OPUS_MODEL, s;
  if (m !== void 0 && !y5("opus")) {
    if (u) return [];
    let r = await w(UP(m));
    if (i("tengu_mantle_probe_result", {
      model_key: b("admin_pin"),
      accessible: b(r === "refuted" ? "false" : r === "accessible" || r === "outdated" ? "true" : "unknown")
    }), r !== "refuted") return [ {
      kind: "adminPin",
      tier: "opus",
      adminMantleId: m
    } ];
    s = m;
  }
  let d = $o[e].mantle;
  if (!d) return [];
  i("tengu_mantle_default_check", {});
  let p = await y(d);
  if (i("tengu_mantle_probe_result", {
    model_key: c(e),
    accessible: b(p ? "true" : "false")
  }), p) {
    if (s !== void 0) return [ {
      kind: "pinRefuted",
      tier: "opus",
      refutedValue: s,
      workingKey: e,
      workingName: cm($o[e].firstParty) ?? d,
      workingMantleId: d,
      defaultKey: e
    } ];
    return [];
  }
  let l = cm($o[e].firstParty) ?? d, A = h.indexOf(e), g = h.slice(0, A).reverse().filter(r => r.startsWith("opus") && !o?.[$o[r].firstParty]), f = await Promise.all(g.map(async r => {
    let _ = $o[r].mantle, M = await y(_);
    i("tengu_mantle_probe_result", {
      model_key: c(r),
      accessible: b(M ? "true" : "false")
    });
    let P = cm($o[r].firstParty) ?? _;
    return {
      key: r,
      mantleId: _,
      name: P,
      ok: M
    };
  }));
  for (let r of f) if (r.ok) {
    if (t(`[mantle-fallback] default=${e} fallback=${r.key}`), s !== void 0) return [ {
      kind: "pinRefuted",
      tier: "opus",
      refutedValue: s,
      workingKey: r.key,
      workingName: r.name,
      workingMantleId: r.mantleId,
      defaultKey: e
    } ];
    return [ {
      kind: "fallback",
      tier: "opus",
      envVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
      defaultKey: e,
      defaultName: l,
      fallbackKey: r.key,
      fallbackName: r.name,
      fallbackMantleId: r.mantleId
    } ];
  }
  let k = [ ...s !== void 0 ? [ `the admin-configured model (${s})` ] : [], l, ...f.map(r => r.name) ];
  return t(`[mantle-fallback] default=${e} exhausted \u2014 no working Opus`), [ {
    kind: "exhausted",
    tier: "opus",
    defaultName: l,
    triedNames: k
  } ];
}

async function w(e) {
  let n = await Qtt("mantle", async () => [ await WO(), a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL, a.CLAUDE_CODE_SKIP_MANTLE_AUTH ? "skip-auth" : void 0, ...Frr(), Jtt() ]);
  if (n !== void 0 && (await zDe(n, e))?.state === "ok") return t(`[mantle-probe] ${e}: accessible (remembered)`), 
  "accessible";
  let o = await E(e);
  if (o === "accessible" && n !== void 0) GDe(n, e, "ok");
  return o;
}

async function E(e) {
  try {
    return await O(e), "accessible";
  } catch (n) {
    let o = n?.status;
    if (o === 429) return "accessible";
    let u = Txt("mantle", n);
    if (u === "outdated") return t(`[mantle-probe] ${e}: needs a newer Claude Code than ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION}; keeping it, so the first request shows the update message`), "outdated";
    if (o === 400 || o === 403 || o === 404) return u === "credential" ? "unknown" : "refuted";
    return "unknown";
  }
}

async function y(e) {
  let n = await w(e);
  return n === "accessible" || n === "outdated";
}

async function O(e) {
  let [{AnthropicBedrockMantle: n}, {getProxyFetchOptions: o}] = await Promise.all([ import("./chunk-vwn56h2n.js"), import("./chunk-adh1rnwr.js") ]), u = await WO(), m = {
    awsRegion: u,
    maxRetries: 0,
    timeout: 8e3,
    fetchOptions: o({
      url: a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL || `https://bedrock-mantle.${u}.api.aws`
    })
  }, s, d = wse(), p = a.AWS_BEARER_TOKEN_BEDROCK;
  if (p) s = new n({
    ...m,
    apiKey: p,
    defaultHeaders: {
      ...d,
      ...Tb(),
      ...n$(),
      Authorization: `Bearer ${p}`,
      ...!XP() && {
        "X-Api-Key": null
      }
    }
  }); else {
    let l = a.CLAUDE_CODE_SKIP_MANTLE_AUTH, A = tc(), g = {
      authToken: null,
      defaultHeaders: {
        ...d,
        ...Tb(),
        ...n$(),
        Authorization: null,
        ...!XP() && {
          "X-Api-Key": null
        }
      },
      ...JP
    }, f = l ? sIe() : void 0, k = l || A ? null : await w5();
    s = k ? new n({
      ...m,
      ...g,
      awsAccessKey: k.accessKeyId,
      awsSecretAccessKey: k.secretAccessKey,
      awsSessionToken: k.sessionToken
    }) : new n({
      ...m,
      ...l && !f && {
        skipAuth: !0,
        authToken: null,
        defaultHeaders: {
          ...d,
          ...n$()
        },
        ...JP
      },
      ...l && f && {
        apiKey: f.match(/^Bearer (.+)$/i)?.[1] ?? f,
        defaultHeaders: {
          ...d,
          ...n$(),
          Authorization: f
        }
      },
      ...!l && g,
      ...!l && A && {
        providerChainResolver: aie("Mantle").providerChainResolver
      },
      ...!l && !A && {
        providerChainResolver: b9(u)
      }
    });
  }
  await s.messages.create(hat(e));
}

export { z as checkMantleDefaultAvailability };
