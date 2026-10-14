// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, u6, B, he } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { E, zj } from "./chunk-b0z4bv3v.js";

import { _, t } from "./chunk-kawq2919.js";

import { Ag } from "./chunk-3zb1ef23.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { kPs, qut, _Dt, XAr, APs, CPs, hC, oa, YOs, XOs, Mpt, uMs, SBe, NGn, Hpt, Gt, k } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { mt } from "./chunk-j90se18b.js";

import { p } from "./chunk-jkzenvsk.js";

import { ELt } from "./chunk-8yperama.js";

import { Es, tM } from "./chunk-q6wab2jw.js";

import { Jr, UH, M9 } from "./chunk-s2t7g8m9.js";

import { wa } from "./chunk-vps0k559.js";

import { Tf } from "./chunk-w4hwgefc.js";

import { oM, fXe } from "./chunk-e2610wvk.js";

import { wfe } from "./chunk-x35dw27e.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { TZo } from "./chunk-5yfktqga.js";

import { hIt, a7t, qSs } from "./chunk-wradc2hf.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, v, oe, T, u, _t, ue, A } from "./chunk-cvcg6n1z.js";

import { Is } from "./chunk-p35rdtee.js";

import { N } from "./chunk-hmqkrrtz.js";

var re = "anthropic.com/artifact-route", et = 3e5, tt = 5e3, nt = 1e3, Re = 5e3, rt = 1048576, ot = [ "X-Frame-Surface", "X-Frame-Platform", "X-Frame-Client-Version", "X-Frame-Session-Id" ];

function Ee(e) {
  let {recoverOAuth401: n, headers: r, ...s} = e;
  return {
    ...s,
    headers: {
      ...tM(r, ot),
      Accept: "application/json, text/event-stream",
      "Content-Type": "application/json"
    }
  };
}

var at = {
  pin_artifact: "artifact_mcp_wire_pin",
  unpin_artifact: "artifact_mcp_wire_pin",
  publish_version: "artifact_mcp_wire_publish",
  list_artifacts: "artifact_mcp_wire_listing",
  list_types: "artifact_mcp_wire_listing"
}, be = /^\/api\/frame\/favorite\/([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})$/, Se = ([, e]) => ({
  arguments: {
    slug: e
  },
  mark: {}
}), we = 1048576, st = new Map([ [ "slug", "slug" ], [ "baseVersion", "base_version" ], [ "title", "title" ], [ "favicon", "favicon" ], [ "icon", "icon" ], [ "label", "label" ], [ "contract", "contract" ], [ "deadline", "deadline" ], [ "content", "content" ] ]), Ae = [ "manifest", "mode" ], it = new Set([ "expectUnpublished", "description", "note", "entrypoint", "session_id", "request_id", "publish_context", "template", "origin_metadata", ...Ae ]), ut = ([, e], n) => {
  if (!L(n)) return null;
  if (u6(L(n.manifest) ? Object.values(n.manifest) : [ n ], h => L(h) && typeof h.content === "string" ? h.content.length : 0) > we) return null;
  let s = {}, d = {
    description: ""
  };
  for (let [h, y] of Object.entries(n)) {
    let S = st.get(h);
    if (y === void 0) continue;
    if (S !== void 0) s[S] = y; else if (it.has(h)) d[h] = y; else return null;
  }
  for (let [h, y] of new URLSearchParams(e ?? "")) if (h === "attempt_id") d.attempt_id = y; else if (h === "resend" && y === "1") d.resend = !0; else return null;
  let R = typeof s.slug === "string" ? ee().shareStatus.bySlug.get(s.slug) : void 0, l = R?.probeFailed ? void 0 : R?.mode;
  if (l === "users" || l === "org") s.shared_live = l;
  if (!Ae.some(h => h in d)) return {
    arguments: s,
    mark: d
  };
  return "content" in s ? null : {
    arguments: s,
    mark: d,
    needs: "manifest"
  };
};

function pe(e, n, r) {
  for (let [s, d] of new URLSearchParams(e ?? "")) {
    let [R, l] = Object.hasOwn(n, s) ? n[s] : [];
    if (R === void 0 || l === void 0 || Object.hasOwn(r[R], l)) return null;
    if (l === "limit" && !/^\d{1,9}$/.test(d)) return null;
    r[R][l] = l === "limit" ? Number(d) : d;
  }
  return r;
}

function lt(e, n) {
  let r = L(e) ? e.result : void 0, s = L(r) ? r.structuredContent : void 0;
  return L(s) && Object.hasOwn(s, n) ? s : void 0;
}

var dt = [ {
  method: "POST",
  route: be,
  tool: "pin_artifact",
  call: Se
}, {
  method: "DELETE",
  route: be,
  tool: "unpin_artifact",
  call: Se
}, {
  method: "POST",
  route: /^\/api\/frame\/deploy\/direct(?:\?(.*))?$/,
  tool: "publish_version",
  call: ut,
  textIsBody: !0,
  narrower: (e, n) => e === 404 || e === 403 && n === "not_owner" || e === 422 && n === "audience_conflict" || e === 400 && n === void 0
}, {
  method: "GET",
  route: /^\/api\/frame\/frames\?(.*)$/,
  tool: "list_artifacts",
  call: ([, e]) => pe(e, {
    limit: [ "arguments", "limit" ]
  }, {
    arguments: {},
    mark: {}
  }),
  reads: "frames"
}, {
  method: "GET",
  route: /^\/api\/frame\/types(?:\?(.*))?$/,
  tool: "list_types",
  call: ([, e]) => pe(e, {
    q: [ "arguments", "query" ],
    scopes: [ "mark", "scopes" ]
  }, {
    arguments: {},
    mark: {}
  }),
  reads: "types"
}, {
  method: "GET",
  route: /^\/api\/frame\/types\/([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})\/instances\?(.*)$/,
  tool: "list_artifacts",
  call: ([, e, n]) => pe(n, {
    limit: [ "arguments", "limit" ],
    rel: [ "mark", "rel" ]
  }, {
    arguments: {
      type: e
    },
    mark: {},
    needs: "type"
  }),
  reads: "instances"
} ], ct = p(() => u({
  [re]: u({
    status: v().int().min(200).max(599),
    headers: ue(o(), o()).optional().catch(void 0)
  })
})), ft = p(() => u({
  error: u({
    code: v()
  }).optional(),
  result: u({
    _meta: ct(),
    content: T(u({
      text: o().optional()
    })).optional(),
    structuredContent: u({
      error: u({
        message: o().optional(),
        details: oe().optional()
      })
    }).optional().catch(void 0)
  }).optional()
})), pt = p(() => u({
  result: u({
    tools: T(u({
      name: o(),
      _meta: u({
        [re]: _t({
          v: A(1)
        })
      }).optional().catch(void 0)
    }))
  })
})), yt = new Set([ -32700, -32600, -32601, -32602 ]), gt = "tengu_cobalt_plinth_teasel";

function Oe(e, n) {
  if (a.CLAUDE_CODE_REMOTE || a.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let r = dt.find(s => s.method === e && s.route.test(n));
  if (r === void 0) return null;
  return k(gt, !1) === !0 ? r : null;
}

function de(e, n) {
  return n.mcpAdvert = {
    tools: e,
    until: Date.now() + et
  }, e;
}

var Q = new Set;

async function me(e, n, r = !0) {
  let s = n.mcpAdvert;
  if (s !== void 0 && s.until > Date.now()) return s.tools;
  if (!r) return me(Es(e, "signal"), n).catch(() => {}), s?.tools ?? Q;
  if (n.mcpAdvertAsked !== void 0) return await n.mcpAdvertAsked.catch(() => {}) ?? me(e, n);
  return n.mcpAdvertAsked = Rt(e, n).finally(() => {
    n.mcpAdvertAsked = void 0;
  }), n.mcpAdvertAsked;
}

async function Rt(e, n) {
  let r = n.mcpAdvert, s = Date.now(), d;
  try {
    d = await Gt.post(ELt, {
      jsonrpc: "2.0",
      id: 1,
      method: "tools/list"
    }, {
      ...Es(Ee(e), "streamUpload"),
      timeout: tt,
      maxContentLength: rt
    });
  } catch (l) {
    if (wa(l)) throw l;
    return f("artifact_mcp_wire_tools_list", "advert_request_error"), de(Q, n);
  }
  if (!d.ok) return Q;
  let R = d.status === 200 ? pt().safeParse(d.data).data : void 0;
  if (R === void 0) f("artifact_mcp_wire_tools_list", d.status === 200 ? "advert_unreadable" : "advert_not_served", {
    status: d.status
  }); else if (Date.now() - s > nt) f("artifact_mcp_wire_tools_list", "advert_slow"); else g("artifact_mcp_wire_tools_list");
  if (n.mcpAdvert !== r) return n.mcpAdvert?.tools ?? Q;
  return de(new Set(R?.result.tools.flatMap(({name: l, _meta: h}) => h === void 0 || l.includes("#") ? [] : [ l, ...Object.entries(h[re]).filter(([, y]) => y === !0).map(([y]) => `${l}#${y}`) ])), n);
}

function Te(e) {
  let n = mt(e, !1);
  return L(n) ? n : void 0;
}

function ht(e) {
  return L(e) && typeof e.reason === "string" ? e.reason : void 0;
}

async function Fe(e, n, r, s, d) {
  let R = at[e.tool], l = x => (f(R, x, {
    tool: c(e.tool)
  }), null), h = e.route.exec(n), y = h && e.call(h, r);
  if (!h || !y) return l("cannot_carry");
  let {slug: S} = y.arguments, O = typeof S === "string" ? S : "", C = ee().frameRelay, {mcpNarrower: j} = C, D = e.reads !== void 0;
  if (!D && j.has(O)) return l("narrower_remembered");
  let X = await me(s, C, !D), w = e.call(h, r);
  if (!w) return l("cannot_carry");
  if (!X.has(e.tool) || w.needs !== void 0 && !X.has(`${e.tool}#${w.needs}`)) return l("no_offer");
  if (!D && j.has(O)) return l("narrower_remembered");
  let q = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: e.tool,
      arguments: w.arguments,
      _meta: {
        [re]: w.mark
      }
    }
  }, U = Buffer.byteLength(_(q));
  if (U > we) return l("cannot_carry");
  let Y = {
    tool: c(e.tool),
    ...w.needs === "manifest" && {
      manifest: !0
    },
    ...w.needs === "type" && {
      by_type: !0
    }
  }, J = (x, W) => (de(Q, C), f(R, x, {
    ...Y,
    status: W
  }), null), te = (x, W) => {
    de(Q, C), m(R, x, {
      ...Y,
      status: W
    });
  }, F;
  try {
    d?.({
      json_bytes: U,
      wire_bytes: U,
      body_gzip: !1
    }), F = await Gt.post(ELt, q, {
      ...Ee(s),
      ...D && {
        timeout: Math.min(s.timeout ?? Re, Re)
      }
    });
  } catch (x) {
    if (wa(x)) throw x;
    if (D) return J("request_error", 0);
    throw te("request_error", 0), x;
  }
  if (!F.ok) return l("refused_locally");
  let se = (x, W, i) => ({
    ...F,
    status: x,
    data: W,
    response: {
      ...F.response,
      status: x,
      data: W,
      headers: {
        ...tM(F.response.headers, "date"),
        ...i
      }
    }
  });
  if (F.status >= 300 && F.status < 500 && F.status !== 408 && F.status !== 499) return J("refused", F.status);
  if (D && F.status >= 300) return J("http_failed", F.status);
  let ie = x => se(e.textIsBody ? 200 : x, void 0);
  if (F.status >= 300) {
    if (te("http_failed", F.status), !e.textIsBody) return {
      ...F,
      data: F.data,
      response: F.response
    };
    return F.status === 503 && O !== "" && w.mark.attempt_id !== void 0 ? se(503, void 0, tM(F.response.headers, "retry-after")) : ie(F.status);
  }
  let V = F.status === 200 ? ft().safeParse(F.data).data : void 0;
  if (V?.error !== void 0 && yt.has(V.error.code)) return J("not_dispatched", 0);
  if (V?.result === void 0) {
    let x = V?.error === void 0 ? "unreadable" : "rpc_error";
    if (D) return J(x, F.status);
    return te(x, F.status), ie(502);
  }
  let {status: z, headers: le} = V.result._meta[re], G = V.result.structuredContent?.error, P = e.reads !== void 0 && z < 300 ? lt(F.data, e.reads) : G === void 0 && e.textIsBody ? Te(V.result.content?.[0]?.text) : Te(G?.message) ?? (L(G?.details) ? G.details : void 0) ?? (G?.message || void 0);
  if (D && P === void 0) return J("unreadable", z);
  if (e.narrower?.(z, ht(P))) return j.add(O), f(R, "narrower", {
    ...Y,
    status: z,
    ...w.arguments.shared_live !== void 0 && {
      shared_live_sent: !0
    }
  }), null;
  if (e.textIsBody && P === void 0 && (z < 300 || z === 409 || z >= 500)) return te("unreadable", z), 
  ie(z);
  return g(R, {
    ...Y,
    status: z
  }), se(z, P, le);
}

var bt = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/, St = /^(?:0x[0-9a-f]*|[0-9]+)$/;

function Tt(e) {
  if (e === void 0) return;
  let n;
  for (let r of e.split(",")) {
    let s = r.trim().toLowerCase();
    if (s === "") continue;
    let d = s.split(".");
    if (s.length > 253 || !d.every(R => bt.test(R)) || d.every(R => St.test(R))) return;
    n ??= s;
  }
  return n;
}

function Pe(e) {
  if (oM(e) !== void 0) return !0;
  return zj(e, n => {
    let r = E(n);
    return r === "ECONNREFUSED" || r === "ConnectionRefused" || r !== void 0 && wfe.has(r);
  }) !== void 0;
}

class ke {
  builtFor=void 0;
  agent=void 0;
  warnedMalformed=void 0;
  agentFor(e) {
    if (this.agent === void 0 || this.builtFor !== e) {
      let n = new fXe(e.proxyUrl, {
        ca: e.gatewayCa
      });
      n.options = {
        ...n.options,
        ca: e.gatewayCa
      }, this.builtFor = e, this.agent = n;
    }
    return this.agent;
  }
  warnMalformedOnce(e) {
    if (this.warnedMalformed === e) return;
    this.warnedMalformed = e, t("[frame-tunnel] CCR_AGENT_PROXY_FRAME_HOSTS is malformed; keeping the gateway routes", {
      level: "warn"
    });
  }
}

var Et = new K(() => new ke);

function xe() {
  if (!Jr()) return;
  let e = a.CCR_AGENT_PROXY_FRAME_HOSTS;
  if (e === void 0) return;
  let n = Et.of(B().host), r = Tt(e);
  if (r === void 0) {
    n.warnMalformedOnce(e);
    return;
  }
  let s = TZo();
  if (s === void 0 || Tf() !== void 0) return;
  return {
    host: r,
    agent: n.agentFor(s)
  };
}

var ce = 60, wt = 180, At = 32768, Ot = 1048576, ve = 262144, Ft = 1.25, Me = {
  "Content-Encoding": "gzip",
  "Content-Type": "application/json"
};

function Msr(e) {
  if (e === void 0 || e <= 0) return ce;
  return Math.min(wt, ce + Math.floor(e / At));
}

function Pt(e, n) {
  return n * Msr(e) <= e * ce;
}

async function kt({url: e, body: n, storageV5: r}) {
  let s = _(n), d = s.length, R = hIt(e, s, r, "frame_publish");
  if (R === void 0) return {
    gzipped: null,
    encoding: void 0,
    jsonChars: d
  };
  let l = Buffer.byteLength(s), h = O => ({
    gzipped: null,
    jsonChars: d,
    encoding: {
      json_bytes: l,
      wire_bytes: l,
      body_gzip: !1,
      gzip_skip: O
    }
  });
  if (!R.gzip) return h(R.reason);
  let y = Msr(l) / ce;
  if (l >= Ot) {
    let O = s.slice(0, ve), C = Buffer.byteLength(O) / (await YOs(O)).length;
    if (C * Ft < y) return t(`[artifact] publish body sent uncompressed: its first ${ve} characters compress only ${C.toFixed(2)}x, and a body of ${l} bytes needs ${y.toFixed(2)}x to finish inside the server's 60-second read limit for a compressed upload`), 
    h("deadline_ratio");
  }
  let S = await XOs(s);
  if (!Pt(l, S.length)) return t(`[artifact] publish body sent uncompressed: gzip only got ${l} bytes down to ${S.length}, too little to finish inside the server's 60-second read limit for a compressed upload`), 
  h("deadline_ratio");
  return {
    gzipped: S,
    jsonChars: d,
    encoding: {
      json_bytes: l,
      wire_bytes: S.length,
      body_gzip: !0
    }
  };
}

function xt(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let n = Object.getPrototypeOf(e);
  return n === Object.prototype || n === null;
}

function vt(e) {
  if (!e.ok) return {
    status: 0,
    header: () => {},
    bodyText: async () => ""
  };
  return {
    status: e.status,
    header: n => {
      let r = e.response?.headers?.[n];
      return typeof r === "string" ? r : void 0;
    },
    bodyText: async () => typeof e.data === "string" ? e.data : e.data === void 0 ? "" : _(e.data)
  };
}

async function Ce({url: e, body: n, storageV5: r, signal: s, send: d, onEncoding: R}) {
  if (!xt(n)) return d(null);
  let {gzipped: l, encoding: h, jsonChars: y} = await kt({
    url: e,
    body: n,
    storageV5: r
  });
  if (h !== void 0) R?.(h);
  if (l === null || h === void 0) return d(null);
  a7t("frame_publish");
  let S = await d(l);
  return qSs({
    answer: S,
    facts: vt,
    resendIdentity: () => (R?.({
      json_bytes: h.json_bytes,
      wire_bytes: h.json_bytes,
      body_gzip: !1,
      gzip_fallback_status: S.ok ? S.status : 0
    }), d(null)),
    aborted: () => s?.aborted === !0,
    bodyChars: y,
    storageV5: r,
    rollout: "frame_publish"
  });
}

function zVe(e) {
  return !e.ok && (e.reason === "relay-unavailable" || e.reason === "relay-not-served");
}

var Ct = "x-ccr-relay-upstream", Dt = "x-ccr-sandbox-egress", Lt = new Set([ "disabled", "restricted", "unrestricted" ]);

function vZo(e) {
  if (!e.ok || e.route !== "relay" || !S4(e)) return;
  let n = e.response.headers?.[Dt];
  return typeof n === "string" && Lt.has(n) ? n : void 0;
}

var EW = "forbidden: CCR agent tokens";

function s3(e) {
  if (typeof e === "string") return e.trim() === "not found";
  return typeof e === "object" && e !== null && e.error === "not_found";
}

function EZo(e) {
  return typeof e === "string" && e.trim() === "no version";
}

var Bt = new Set([ 401, 403, 404, 413 ]), zt = new Set([ "organization network policy denies artifact storage reads for this session", "organization network policy could not be determined for this session; artifact storage reads denied" ]);

var It = new Set([ "organization network policy denies artifact storage writes for this session", "organization network policy could not be determined for this session; artifact storage writes denied" ]);

function De(e) {
  if (!e.ok || S4(e) || e.status !== 403 || typeof e.data !== "string") return !1;
  let n = e.data.trim();
  return zt.has(n) || JL() && It.has(n);
}

var Nt = "relay approval required: this change was not approved by the person for this session";

function Le(e) {
  return e.ok && !S4(e) && e.status === 403 && typeof e.data === "string" && e.data.trim() === Nt;
}

var Ut = new Set([ "organization network policy denies artifact reads for this session", "organization network policy could not be determined for this session" ]), Mnt = "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";

function Hnt(e, n) {
  return e === 403 && n !== void 0 && n.byteLength <= 256 && Ut.has(Buffer.from(n).toString("utf8").trim());
}

var fe = 3e5, jt = 15e3, Yt = 65536, Ne = new WeakSet, Ue = new WeakMap, Wt = /^(?:x-frame-[a-z0-9-]+|x-ccr-relay-[a-z0-9-]+|accept|if-match)$/i;

function Ht(e) {
  if (!e) return e;
  return Is(e, (n, r) => Wt.test(r));
}

var Hsr = b("boot"), kW = b("blobs"), m4t = b("comments"), GAn = b("subscriptions"), Ge = b("types"), je = b("type_files"), VAn = b("type_create"), Ye = b("db"), zXr = b("sharing"), We = b("publish"), He = b("frames_external"), $t = new Set([ m4t, GAn, Hsr, He, Ge, je, VAn, Ye, We, kW, ...[] ]), Vt = "tengu_cobalt_plinth_burnet", Xt = [ ...I(Hsr, [ "GET /{slug}", "GET /versions/{slug}", "GET /frames", "POST /track" ]), ...I(He, [ "GET /frames/external" ]), ...I(We, [ "POST /deploy/direct", "POST /deploy/prepare", "POST /upload", "GET /contract/latest", "GET /contract/{v}", "GET /contract/{v}/{file}", "GET /contract/{v}/prompt", "GET /read/{slug}" ]), ...I(m4t, [ "GET /comments/{slug}", "POST /comments/{slug}/{thread}", "POST /comments/{slug}/{thread}/resolve", "POST /comments/{slug}/{thread}/summon-status" ]), ...I(Ye, [ "POST /db/agent" ]), ...I(Ge, [ "GET /types", "GET /types/{slug}" ]), ...I(VAn, [ "POST /types/{slug}/create" ]), ...I(b("type_instances"), [ "GET /types/{slug}/instances" ]), ...I(je, [ "GET /types/{slug}/files/{a}", "GET /types/{slug}/files/{a}/{b}", "GET /types/{slug}/files/{a}/{b}/{c}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}/{e}" ]), ...I(GAn, [ "POST /subscribe/{slug}", "POST /unsubscribe/{slug}" ]), ...I(b("delete"), [ "DELETE /{slug}" ]), ...I(zXr, [ "GET /perm/{slug}", "PATCH /perm/{slug}" ]), ...I(b("favorites"), [ "POST /favorite/{slug}", "DELETE /favorite/{slug}" ]), ...[] ].sort((e, n) => Be(e) - Be(n));

function I(e, n) {
  return n.map(r => {
    let [s, d] = r.split(" ");
    return {
      method: s,
      pattern: d.split("/"),
      family: e
    };
  });
}

function Be(e) {
  return N(e.pattern, n => n.startsWith("{"));
}

function XEt(e, n) {
  let r = n.slice(10).replace(/[?#].*$/s, "").split("/");
  return Xt.find(d => d.method === e && d.pattern.length === r.length && d.pattern.every((R, l) => R.startsWith("{") ? r[l] !== "" : R === r[l]))?.family ?? null;
}

var GXr = "tengu_cobalt_plinth_madder";

function sQ() {
  if (!M9()) return !1;
  if (Mpt() !== void 0) return !1;
  if (!k("tengu_cobalt_plinth_sorrel", !0)) return !1;
  if (!Jr() && !k(GXr, !0)) return !1;
  return kPs();
}

function JL() {
  return he();
}

function YI(e = null) {
  return sQ() && !$e(e);
}

function $e(e) {
  if (!qut() && !Ve()) return !1;
  if (e !== null && QEt(e)) return !1;
  let n = ee().frameRelay;
  if (!n.botContextNoted) n.botContextNoted = !0, f("artifact_frame_relay", "bot_context_not_served", {
    hosted: Jr()
  });
  return !0;
}

function iQ() {
  return Jr() && sQ();
}

var qt = "tengu_cobalt_plinth_medlar";

function Ve() {
  return UH() && k(qt, !1) && XAr();
}

function JEt() {
  if (Jr()) return qut() && _Dt();
  return Ve();
}

function GVe() {
  return M9() && k("tengu_cobalt_plinth_fennel", !1) && JEt();
}

var Kt = "tengu_cobalt_plinth_comfrey";

function KAn() {
  return UH() && k(Kt, !1) && GVe();
}

function QEt(e) {
  return $t.has(e) && Jr() && k(Vt, !1) && APs();
}

function eF(e) {
  return (ee().frameRelay.declinedUntil.get(e) ?? 0) > Date.now();
}

function aQ(e, n = !1) {
  let r = ee().frameRelay, s = Date.now() + fe;
  if (r.declinedUntil.set(e, s), n) r.hopFailedUntil.set(e, s); else r.hopFailedUntil.delete(e);
}

function VXr(e) {
  return (ee().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now();
}

function Dsr(e) {
  return (ee().frameRelay.servedUntil.get(e) ?? 0) > Date.now();
}

function zne(e) {
  let n = ee().frameRelay;
  n.declinedUntil.delete(e), n.servedUntil.set(e, Date.now() + fe), n.vouched.add(e);
}

function VVe(e) {
  return ee().frameRelay.vouched.has(e);
}

function KXr(e) {
  ee().frameRelay.vouched.delete(e);
}

function Jt(e) {
  return (ee().frameRelay.directRefusedUntil.get(e) ?? 0) > Date.now();
}

function qAn(e) {
  return e.ok && e.status === 403 && qXr(e.data);
}

function qXr(e) {
  return typeof e === "string" && e.trimStart().startsWith(EW);
}

function ze(e, n) {
  if (!n.ok) return;
  let {directRefusedUntil: r} = ee().frameRelay;
  if (qAn(n)) r.set(e, Date.now() + fe); else r.delete(e);
}

function Dnt(e) {
  if (iQ() || !(e === 401 || e === 403 || e === 404)) return !1;
  if (VVe(hC)) {
    if (e !== 404) KXr(hC);
    return !1;
  }
  return aQ(hC), !0;
}

function iAe(e) {
  if (iQ() || VVe(hC)) return;
  if (e === void 0 || e === 499) aQ(hC, !0);
}

var Xe = () => !0;

function ye(e, n, r) {
  ee().frameRelay.tunnelDeclinedUntil.set(e, Date.now() + fe), f("artifact_frame_relay", "tunnel_declined", {
    family: e,
    cause: c(n),
    status: r
  });
}

var qe = new WeakSet;

function Ie(e) {
  return typeof e === "object" && e !== null && qe.has(e);
}

async function Lsr(e, n, r, s, d) {
  let l = (ee().frameRelay.tunnelDeclinedUntil.get(d) ?? 0) > Date.now() ? void 0 : xe();
  if (l !== void 0) {
    let y = 0;
    try {
      let S = await ae(e, n, r, {
        ...s,
        host: "frame",
        auth: "session-jwt",
        frameTunnel: l,
        maxRedirects: 0
      });
      if (!S.ok || S4(S)) return {
        res: S,
        tunnelled: !0
      };
      if (y = S.status, y >= 500 || y === 499) return ye(d, "hop_failed", y), {
        res: S,
        tunnelled: !0
      };
    } catch (S) {
      if (wa(S)) throw S;
      if (!Pe(S)) {
        if (ye(d, "threw", 0), typeof S === "object" && S !== null) qe.add(S);
        throw S;
      }
    }
    ye(d, y === 0 ? "never_opened" : "refused", y);
  }
  return {
    res: await ae(e, CPs(n), r, {
      ...s,
      host: "ccr-gateway",
      auth: "session-jwt",
      maxRedirects: 0
    }),
    tunnelled: !1
  };
}

function ae(e, n, r, s) {
  switch (e) {
   case "GET":
    return Gt.get(n, s);

   case "POST":
    return Gt.post(n, r, s);

   case "PATCH":
    return Gt.patch(n, r, s);

   case "DELETE":
    return Gt.delete(n, r, s);
  }
}

async function Zt(e, n) {
  let r = "answered";
  try {
    let s = await e();
    if (s !== null) return {
      ...s,
      mcpWire: r
    };
    return r = "stood_aside", {
      ...await n(),
      mcpWire: r
    };
  } catch (s) {
    if (typeof s === "object" && s !== null) Ue.set(s, r);
    throw s;
  }
}

function Ke(e, n, r, s, d = !0) {
  if (JL()) throw Error("frameApi: this session may not make the direct call");
  let {recoverOAuth401: R, gzipBody: l, httpOnly: h, ...y} = s, S = {
    ...y,
    host: "frame",
    auth: "claude-ai-oauth",
    maxRedirects: 0,
    validateStatus: Xe,
    ...R && !a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_REMOTE_SESSION_ID && {
      recoverOAuth401: R
    }
  }, O = d && !h ? Oe(e, n) : null;
  if (O) return Zt(() => Fe(O, n, r, S, l?.onEncoding), () => Ke(e, n, r, s, !1));
  let {streamUpload: C} = y;
  if (e !== "POST" || l === void 0 || C === void 0) return ae(e, n, r, S);
  return Ce({
    url: `${uMs()}${n}`,
    body: r,
    storageV5: y.storageV5,
    signal: y.signal,
    onEncoding: l.onEncoding,
    send: j => j === null ? ae(e, n, r, S) : ae(e, n, j, {
      ...S,
      headers: {
        ...S.headers,
        ...Me
      },
      streamUpload: {
        ...C,
        tailFloorMs: () => l.tailFloorMs
      }
    })
  });
}

function Qt() {
  return Mpt() !== void 0 ? a.CLAUDE_CODE_ARTIFACTS_API_TOKEN : void 0;
}

function Nsr() {
  let e = Qt();
  if (e) return SBe(`Bearer ${e}`);
  return NGn();
}

async function kZo(e) {
  if (!Hpt()) return;
  try {
    await oa({
      credentials: e
    });
  } catch {}
}

function S4(e) {
  return e.ok && e.response.headers?.[Ct] !== void 0;
}

function ge(e) {
  return e.ok && !S4(e) && Bt.has(e.status);
}

function YXr(e) {
  return {
    refused: ge(e),
    vouched: S4(e) || e.ok && e.status < 300
  };
}

function g4t() {
  return sQ() && !Jr();
}

function Je(e, n, r, s = !1) {
  let d = r !== "fallback", R = r === "strict" && M9(), l = JL(), h = sQ(), y = h ? XEt(e, n) : null;
  if (h && $e(y)) return l || R || r === "only" && Jr() ? {
    leg: "not-served",
    relaying: !1,
    family: null
  } : {
    leg: "direct",
    relaying: !1,
    family: null
  };
  let S = h;
  if (y === null) return {
    leg: l || R || d && Jr() && S ? "unsent" : "direct",
    relaying: S,
    family: y
  };
  let O = (r === "fallback" || r === "bound" && !Ze(y)) && !(s && Jr() && Jt(y));
  if (!l && eF(y) && (O || !Jr() && !R && VXr(y))) return {
    leg: "direct",
    relaying: S,
    family: y
  };
  return {
    leg: "relay",
    relaying: !0,
    family: y
  };
}

function Ze(e) {
  return JL() || Jr() && (e === null || !QEt(e));
}

function en(e, n) {
  switch (e) {
   case "strict":
    return M9();

   case "only":
    return Jr();

   case "bound":
    return Ze(n);

   case "fallback":
    return !1;
  }
}

function YAn(e, n, r = "fallback") {
  return JL() || Je(e, n, r).leg === "relay" ? "relay" : "direct";
}

async function H(e, n, r, s, d = "fallback") {
  let R = JL() || en(d, XEt(e, n)), {relayProbe: l, relayOnCredentialRefusal: h, ...y} = s, S = async () => ({
    ...await Ke(e, n, r, y),
    route: "direct",
    fromFrame: !0
  }), O = Je(e, n, d, h), C = O.relaying && !Jr(), j = (i, M) => d === "fallback" ? {
    ok: !1,
    reason: "no-auth",
    detail: `its artifact connection did not carry the request${M ? ` (HTTP ${M})` : ""}, so nothing was sent${i === "relay-unavailable" ? "; one retry is safe" : ""}`,
    route: "relay",
    fromFrame: !1
  } : {
    ok: !1,
    reason: i,
    status: M,
    route: "relay",
    fromFrame: !1
  }, D = (i, M) => (f("artifact_frame_relay", "relay_only_unavailable", {
    ...O.family !== null && {
      family: O.family
    },
    status: i,
    probed: M,
    ...C && {
      runner: !0
    }
  }), j("relay-unavailable", i));
  if (O.leg === "not-served") return j("relay-not-served", 0);
  if (O.leg === "unsent") return D(0, !1);
  let X, w;
  if (O.leg === "relay") w = O.family; else {
    let i = await S();
    if (O.family === null || !Jr()) return i;
    if (ze(O.family, i), !i.ok || !qAn(i)) return i;
    if (f("artifact_frame_relay", "direct_refused", {
      family: O.family,
      status: i.status,
      reoffered: h === !0
    }), !h) return i;
    w = O.family, X = i;
  }
  let q = !1, U = () => ({
    ...C && {
      runner: !0
    },
    ...q && {
      tunnel: !0
    },
    ...X !== void 0 && {
      reoffered: !0
    }
  }), Y = async () => {
    if (X !== void 0) return X;
    let i = await S();
    if (!C) {
      if (ze(w, i), i.ok && qAn(i)) f("artifact_frame_relay", "direct_refused", {
        family: w,
        status: i.status,
        reoffered: !1
      });
    }
    return i;
  }, {refreshOAuth: J, isBackground: te, credentials: F, recoverOAuth401: se, gzipBody: ie, httpOnly: V, ...z} = y, le = async (i, M, ne, Z) => {
    let _e = await Lsr(i, M, ne, {
      ...Z,
      headers: Ht(Z.headers),
      validateStatus: Xe
    }, w);
    return q = _e.tunnelled, _e.res;
  }, G = async (i, M) => {
    if (aQ(w, i === 0 || i >= 500), R) return D(i, M);
    let ne;
    try {
      let Z = await Y();
      return ne = Z.ok ? Z.status : void 0, {
        ...Z,
        gatewayDeclined: i
      };
    } finally {
      f("artifact_frame_relay", "relay_unavailable", {
        family: w,
        status: i,
        probed: M,
        ...ne !== void 0 && {
          direct_status: ne
        },
        ...U()
      });
    }
  };
  if (l !== void 0 && !Dsr(w)) {
    let i;
    try {
      i = await le("GET", l, void 0, {
        signal: z.signal,
        timeout: jt,
        maxContentLength: Yt
      });
    } catch (M) {
      if (wa(M)) throw M;
      return q = Ie(M), G(0, !0);
    }
    if (!i.ok) return R ? D(0, !0) : Y();
    if (De(i)) f("artifact_frame_relay", "relay_policy_refused", {
      family: w,
      status: i.status,
      probed: !0,
      ...U()
    }); else if (ge(i) || !S4(i) && (i.status >= 500 || i.status === 499)) return G(i.status, !0); else if (!S4(i) && i.status >= 300) return R ? D(i.status, !0) : Y();
    zne(w);
  }
  let P;
  try {
    P = await le(e, n, r, z);
  } catch (i) {
    if (!wa(i)) {
      if (q = Ie(i), oM(i) !== void 0) return G(0, !1);
      if (aQ(w, !0), m("artifact_frame_relay", "request_error", {
        family: w,
        ...U()
      }), typeof i === "object" && i !== null) Ne.add(i);
    }
    throw i;
  }
  if (!P.ok) return R ? D(0, !1) : Y();
  if (De(P) || Le(P)) {
    let i = Le(P);
    return zne(w), f("artifact_frame_relay", i ? "relay_approval_refused" : "relay_policy_refused", {
      family: w,
      status: P.status,
      ...U()
    }), {
      ...P,
      route: "relay",
      fromFrame: !1,
      gatewayPolicy: i ? "unapproved" : "network-off"
    };
  }
  if (ge(P)) return G(P.status, !1);
  let x = S4(P), W = x || P.status < 300;
  if (W) zne(w), g("artifact_frame_relay", {
    family: w,
    status: P.status,
    upstream: x,
    ...U()
  }); else if (P.status >= 500 || P.status === 499) {
    let i = d !== "fallback" && P.status === 503 ? P.response.headers?.["retry-after"] : void 0, M = Ag(typeof i === "string" ? i : void 0);
    if (M !== void 0) return f("artifact_frame_relay", "relay_busy", {
      family: w,
      status: P.status,
      retry_after_ms: M,
      ...U()
    }), {
      ...P,
      route: "relay",
      fromFrame: !1,
      gatewayRetryAfterMs: M
    };
    aQ(w, !0), m("artifact_frame_relay", "relay_error", {
      family: w,
      status: P.status,
      ...U()
    });
  } else f("artifact_frame_relay", "relay_refused", {
    family: w,
    status: P.status,
    ...U()
  });
  return {
    ...P,
    route: "relay",
    fromFrame: W
  };
}

function FA(e) {
  return typeof e === "object" && e !== null && Ne.has(e);
}

function Qe(e) {
  switch (e) {
   case "answered":
    return b("mcp");

   case "stood_aside":
    return b("http_fallback");

   case void 0:
    return b("http");
  }
}

function Gne(e) {
  return e.route === "relay" ? b("relay") : Qe(e.mcpWire);
}

function ode(e) {
  if (FA(e)) return b("relay");
  return Qe(typeof e === "object" && e !== null ? Ue.get(e) : void 0);
}

var vc = {
  get(e, n) {
    return H("GET", e, void 0, n);
  },
  post(e, n, r) {
    return H("POST", e, n, r);
  },
  postRelayOnly(e, n, r) {
    return H("POST", e, n, r, "only");
  },
  postRelayStrict(e, n, r) {
    return H("POST", e, n, r, "strict");
  },
  getRelayOnly(e, n) {
    return H("GET", e, void 0, n, "only");
  },
  postRelayBound(e, n, r) {
    return H("POST", e, n, r, "bound");
  },
  getRelayBound(e, n) {
    return H("GET", e, void 0, n, "bound");
  },
  patchRelayOnly(e, n, r) {
    return H("PATCH", e, n, r, "only");
  },
  deleteRelayOnly(e, n) {
    return H("DELETE", e, void 0, n, "only");
  }
};

export { Msr, zVe, vZo, EW, s3, EZo, Mnt, Hnt, Hsr, kW, m4t, GAn, VAn, zXr, XEt, GXr, sQ, JL, YI, iQ, JEt, GVe, KAn, QEt, eF, aQ, VXr, Dsr, zne, VVe, KXr, qAn, qXr, Dnt, iAe, Lsr, Nsr, kZo, S4, YXr, g4t, YAn, FA, Gne, ode, vc };
