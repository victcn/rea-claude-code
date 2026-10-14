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

import { c, Gr } from "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import { Eht, jme } from "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import { JP, sIe } from "./chunk-s2t7g8m9.js";

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

import { Et, Ynn, g9, V1, Szn, NR, Znn, cm, tc, hpt, jDt } from "./chunk-xywp7esx.js";

import "./chunk-hmce8a0s.js";

import "./chunk-07cck4g7.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-nc0jxmkt.js";

import { wse, NMt, Vxe, Kxe } from "./chunk-gmq0qwep.js";

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

import { nye, Jtt, Qtt, zDe, GDe, _Tn, bTn } from "./chunk-y7242kd2.js";

import { hat, yJt, _Jt, bJt, SJt, wJt, ERe, l$e, IYe } from "./chunk-sqb9meyh.js";

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

var P = _Jt(Znn);

async function W() {
  if (Oe() !== "vertex") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = bJt(P);
  if (e.length === 0) return [];
  i("tengu_vertex_upgrade_check", {
    stale_tiers: Gr(e.length)
  });
  let d = (await Promise.all(e.map(async o => {
    let m = $o[o.defaultKey].vertex;
    if (m === null) return null;
    if (ERe(m)) return t(`[vertex-upgrade] ${l$e(o.tier, "upgrade", [ m ])}`), null;
    let g = await x(m, {
      isDefault: !0,
      versionTooOld: "unavailable"
    });
    if (i("tengu_vertex_probe_result", {
      tier: c(o.tier),
      model_id: Et(m),
      accessible: g
    }), !g) return null;
    let r = cm($o[o.pinnedKey].firstParty), n = cm($o[o.defaultKey].firstParty);
    if (!r || !n) return null;
    return {
      tier: o.tier,
      envVar: o.envVar,
      fromKey: o.pinnedKey,
      fromMarketingName: r,
      toKey: o.defaultKey,
      toMarketingName: n,
      toVertexId: m
    };
  }))).filter(o => o !== null);
  return t(`[vertex-upgrade] tiersWithPin=${e.length} candidates=${d.length}`), d;
}

function Y(e) {
  return SJt(e, P);
}

async function z() {
  if (Oe() !== "vertex") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = yJt(Date.now()), s = dt().modelOverrides, d = wJt(P, s);
  if (d.length === 0) return [];
  i("tengu_vertex_default_check", {
    unpinned_tiers: Gr(d.length)
  });
  let o = d.some(r => r.tier === "sonnet"), m = await Promise.all(d.map(async r => {
    let n = $o[r.defaultKey];
    if (y(r.defaultKey)) return t(`[vertex-fallback] ${l$e(r.tier, "check", [ String(n.vertex) ])}`), 
    null;
    await k(r, s, o);
    let l = {}, f = await x(n.vertex, {
      isDefault: !0,
      onVerdict: (_, b) => {
        l.verdict = _, l.at = b;
      }
    });
    if (i("tengu_vertex_probe_result", {
      tier: c(r.tier),
      model_id: Et(n.vertex),
      accessible: f
    }), f || l.verdict === "temporary") return null;
    if (n.vertex !== null && l.verdict === "refused") V1(n.vertex, g9(n.vertex), (l.at ?? Date.now()) + nye);
    let u = await E(r.defaultKey, r.tier, s, e);
    if (!u) return null;
    if (l.verdict !== "refused" && u.answeredLive !== !0 && !await x($o[u.key].vertex, {
      live: !0
    })) return null;
    let v = cm(n.firstParty), p = cm($o[u.key].firstParty);
    if (!v || !p) return null;
    return {
      tier: r.tier,
      envVar: r.envVar,
      defaultKey: r.defaultKey,
      defaultName: v,
      fallbackKey: u.key,
      fallbackName: p,
      fallbackVertexId: $o[u.key].vertex,
      ...u.crossTier && {
        crossTier: !0
      }
    };
  })), g = [];
  for (let r of m) if (r !== null) g.push(r);
  return t(`[vertex-fallback] unpinnedTiers=${d.length} fallbacks=${g.length}`), g;
}

async function E(e, s, d, o) {
  let m = IYe(e, s).filter(u => !d?.[$o[u].firstParty]), g = m.filter(u => !y(u)), r = s === "opus" && !y(NR) ? [ NR ] : [], n = m.filter(y).map(u => String($o[u].vertex));
  if (s === "opus" && y(NR)) n.push(`${$o[NR].vertex} (the cross-tier Sonnet default)`);
  if (n.length > 0) t(`[vertex-fallback] ${l$e(s, "fallback", n)}`);
  let l = new Set, f = await bTn([ g, r ], (u, v) => {
    let p = $o[u].vertex, _ = (b, V) => {
      if (b === "refused" && p !== null) V1(p, g9(p), (V ?? Date.now()) + nye); else if (b === "accessible" && p !== null) {
        if (Szn(p), V === void 0) l.add(u);
      }
    };
    return v ? x(p, {
      live: v,
      onVerdict: _
    }) : x(p, {
      onVerdict: _
    });
  }, async u => {
    let v = $o[u].vertex;
    if (v === null) return !1;
    let p = await A(v);
    return p !== void 0 && (await zDe(p, v))?.state === "refused";
  }, o);
  if (f === void 0) return null;
  return {
    key: f,
    ...r.includes(f) && {
      crossTier: !0
    },
    ...l.has(f) && {
      answeredLive: !0
    }
  };
}

async function x(e, s) {
  if (e === null) return s?.onVerdict?.("refused"), !1;
  return await _Tn("vertex", await A(e), e, () => h(e), s) === "accessible";
}

async function j(e, s) {
  try {
    let d = await A(e);
    if (d !== void 0) await GDe(d, e, s);
  } catch (d) {
    t(`[3p-model-memory] vertex record failed: ${d}`);
  }
}

async function k(e, s, d) {
  let o = n => {
    let l = $o[n];
    return l.vertex === null ? void 0 : {
      id: l.vertex,
      name: cm(l.firstParty) ?? l.firstParty
    };
  }, m = o(e.defaultKey);
  if (m === void 0) return;
  let g = (n, l) => IYe(n, l).filter(f => !s?.[$o[f].firstParty] && !y(f)).flatMap(f => o(f) ?? []), r = [ m, ...g(e.defaultKey, e.tier) ];
  if (e.tier === "opus") {
    let n = o(NR), l = n === void 0 ? [] : !y(NR) ? [ n ] : d ? g(NR, "sonnet") : [];
    r.push(...l.map(f => ({
      ...f,
      crossTier: !0
    })));
  }
  Ynn("vertex", e.tier, e.envVar, r), await Promise.all(r.slice(1).map(async n => {
    let l = await A(n.id), f = l === void 0 ? void 0 : await zDe(l, n.id);
    if (f?.state === "refused") V1(n.id, g9(n.id), f.at + nye);
  })).catch(() => {});
}

function A(e) {
  return Qtt("vertex", () => [ a.ANTHROPIC_VERTEX_PROJECT_ID, hpt(), a.ANTHROPIC_GOOGLE_CLOUD_PROJECT, jme(e), a.ANTHROPIC_VERTEX_BASE_URL, a.GOOGLE_APPLICATION_CREDENTIALS, a.CLOUDSDK_CONFIG, a.CLAUDE_CODE_SKIP_VERTEX_AUTH ? "skip-auth" : void 0, Jtt() ]);
}

async function h(e) {
  try {
    let [{AnthropicVertex: s}, {getProxyFetchOptions: d}] = await Promise.all([ import("./chunk-zhmj1fb3.js"), import("./chunk-adh1rnwr.js") ]), o = a.CLAUDE_CODE_SKIP_VERTEX_AUTH, m = tc();
    if (!o && !m) await jDt();
    let g = await NMt(o ? {
      kind: "skip"
    } : {
      kind: "default"
    }, hpt()), r = jme(e), n = o ? sIe() : void 0;
    return await Vxe(new s({
      region: r,
      googleAuth: g,
      maxRetries: 0,
      defaultHeaders: {
        ...wse(),
        ...Kxe(o ? {
          wireAuthorization: n
        } : !1)
      },
      ...JP,
      timeout: 8e3,
      fetchOptions: d({
        url: a.ANTHROPIC_VERTEX_BASE_URL || Eht(r)
      })
    })).messages.create(hat(e)), {
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

function y(e) {
  let s = $o[e].vertex;
  return s !== null && ERe(s);
}

export { z as checkVertexDefaultAvailability, W as findVertexUpgradeCandidates, x as probeVertexModel, j as rememberVertexModelAccess, Y as seedEnvDefaultForUserPin };
