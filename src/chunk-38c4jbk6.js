// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he } from "./chunk-3pqddg8f.js";

import { W, ci } from "./chunk-b0z4bv3v.js";

import { gee, k1e, Uie, ng, HU } from "./chunk-q6wab2jw.js";

import { se, t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { a } from "./chunk-j016gcgm.js";

import { mt } from "./chunk-j90se18b.js";

import { Ek } from "./chunk-dd98x6x7.js";

import { Yit, RV, DDn, Xit } from "./chunk-sqb9meyh.js";

import { tme, _j, Qa } from "./chunk-nc0jxmkt.js";

import { NV } from "./chunk-t17yn24n.js";

import { o, v, u, ue, A } from "./chunk-cvcg6n1z.js";

import { createHash as F } from "crypto";

import { fileURLToPath as M } from "url";

import { createPublicKey as K } from "crypto";

var I = {
  id: "claude-code-release-signing-key",
  spkiBase64: "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixBUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncrmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmVNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAsIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAip5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81IwH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3ZpIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ=="
}, QVt = [ I ], zEn = "managed-model-catalog-public-key";

function GEn(e) {
  if (e === void 0) return;
  return e === zEn ? "managed_key" : "compiled_roots";
}

function H(e) {
  let r = /^-----BEGIN PUBLIC KEY-----([\s\S]*?)-----END PUBLIC KEY-----$/.exec(e.trim());
  if (r === null || r[1] === void 0) return;
  let n = r[1].replace(/\s+/g, "");
  if (n.length === 0 || !/^[A-Za-z0-9+/]+=*$/.test(n)) return;
  let i = Buffer.from(n, "base64");
  return i.length > 0 && i.toString("base64") === n ? new Uint8Array(i) : void 0;
}

var y = 2048;

function P(e) {
  let r = H(e);
  if (r === void 0) return {
    ok: !1,
    reason: "not_spki_pem"
  };
  let n, i;
  try {
    let s = K({
      key: Buffer.from(r),
      format: "der",
      type: "spki"
    });
    n = s.asymmetricKeyType, i = s.asymmetricKeyDetails?.modulusLength;
  } catch {
    return {
      ok: !1,
      reason: "not_spki_pem"
    };
  }
  if (n !== "rsa") return {
    ok: !1,
    reason: "not_rsa"
  };
  if (i === void 0 || i < y) return {
    ok: !1,
    reason: "modulus_too_short"
  };
  return {
    ok: !0,
    der: r
  };
}

function R(e) {
  return new Uint8Array(Buffer.from(e.spkiBase64, "base64"));
}

var k = "https://downloads.claude.ai/model-catalog/v1/catalog.json", b = ".raw-sig.json";

function S() {
  return {
    url: void 0,
    publicKey: void 0
  };
}

function E() {
  let {url: e, publicKey: r} = S();
  if (e === void 0 && r === void 0) return {
    url: void 0,
    publicKey: void 0
  };
  let n = Ek();
  if (!HU(n) && !(n === "remote" && ng())) return t(`[publishedCatalog] ignoring managed model-catalog source settings from a non-admin policy origin (${n ?? "none"}${n === "remote" ? ", unconfirmed by the server" : ""})`), 
  {
    url: void 0,
    publicKey: void 0
  };
  return {
    url: e,
    publicKey: r
  };
}

function ZVt() {
  let {url: e, publicKey: r} = S();
  if (e === void 0 && r === void 0) return !1;
  return Ek() === "remote" && !ng();
}

function OXo() {
  if (!ZVt()) return !1;
  let {url: e} = S();
  if (e === void 0) return !1;
  try {
    return _(new URL(e)) === "file";
  } catch {
    return !1;
  }
}

function U(e = E()) {
  return e.url ?? G(a.CLAUDE_CODE_MODEL_CATALOG_URL);
}

function MXo() {
  let e = U();
  if (e === void 0) return !1;
  try {
    return _(new URL(e)) === "file";
  } catch {
    return !1;
  }
}

function G(e) {
  let r = e?.trim();
  return r ? r : void 0;
}

function Svt() {
  let e = E(), r = U(e) ?? k, n;
  try {
    n = new URL(r);
  } catch {
    return t("[publishedCatalog] configured catalog URL is not a URL; published path off"), 
    {
      ok: !1,
      reason: "invalid_url"
    };
  }
  let i = _(n);
  if (i === void 0) return t(`[publishedCatalog] configured catalog URL has unsupported scheme ${n.protocol}; published path off`), 
  {
    ok: !1,
    reason: "invalid_url"
  };
  if (i !== "file" && gee(n.hostname)) return t("[publishedCatalog] configured catalog URL names a loopback or metadata host; published path off"), 
  {
    ok: !1,
    reason: "invalid_url"
  };
  let s = n.toString();
  return {
    ok: !0,
    source: {
      kind: i,
      url: s,
      trust: z(i, e),
      cacheKey: w5r(s)
    }
  };
}

function _(e) {
  if (e.protocol === "file:") return e.hostname === "" || e.hostname === "localhost" ? "file" : void 0;
  if (e.protocol !== "https:" && e.protocol !== "http:") return;
  return e.toString() === k ? "hosted" : "custom_url";
}

function z(e, r) {
  if (e === "hosted" || r.publicKey === void 0) return {
    kind: "compiled_roots",
    roots: QVt
  };
  if (r.url === void 0) return t("[publishedCatalog] a managed catalog public key is set but no managed catalog URL is; the env-named URL verifies against the compiled roots only"), 
  {
    kind: "compiled_roots",
    roots: QVt
  };
  let n = P(r.publicKey);
  if (!n.ok) return t(`[publishedCatalog] the managed catalog public key is not a PEM SPKI RSA public key of at least ${y} bits (${n.reason}); custom source refused`), 
  {
    kind: "untrusted",
    reason: "invalid_public_key"
  };
  return {
    kind: "managed_key",
    roots: [ ...QVt, {
      id: zEn,
      spkiBase64: Buffer.from(n.der).toString("base64")
    } ]
  };
}

function w5r(e) {
  return F("sha256").update(e).digest("hex").slice(0, 32);
}

function T(e) {
  return M(e.url);
}

var VEn = 1, FTe = Yit, Rtt = 16384, Y = 1, N = "RSASSA-PKCS1-v1_5-SHA512", x = p(() => u({
  schema: A(Y),
  algorithm: A(N),
  signature: o().min(1),
  publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
}).loose()), j = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[Zz]|[+-]\d{2}:\d{2})$/;

function HXo(e) {
  if (e === void 0 || !j.test(e)) return;
  let r = Date.parse(e);
  return Number.isFinite(r) ? r : void 0;
}

var Y2e = p(() => u({
  $schema: o().optional(),
  schema_version: A(VEn),
  version: v().int().nonnegative(),
  issued_at: o().optional(),
  expires_at: o().optional(),
  key_id: o().optional(),
  surfaces: ue(o(), DDn())
}).loose());

function Bnr(e) {
  if (e === null || typeof e !== "object" || !("schema_version" in e)) return;
  let r = e.schema_version;
  return typeof r === "number" ? r : void 0;
}

function wvt(e, r) {
  for (let [n, i] of [ [ r, e.surfaces[r] ], [ "cc", e.surfaces.cc ] ]) {
    if (i === void 0) continue;
    let s = Xit(i, n);
    if (s === null) continue;
    if (s.state === void 0) return {
      surface: r,
      config: s.config
    };
    let {org_enforced_default_model: l, selection_source: d, ...c} = s.state;
    return {
      surface: r,
      config: s.config,
      state: c
    };
  }
  return null;
}

var B = "claude-code-model-catalog-v1\0", L = {
  name: "RSASSA-PKCS1-v1_5",
  hash: "SHA-512"
};

async function vvt({documentBytes: e, sidecar: r, roots: n, context: i = B}) {
  let s = x().safeParse(r);
  if (!s.success) return {
    ok: !1,
    reason: "sidecar_invalid"
  };
  let l = Buffer.from(s.data.signature, "base64");
  if (l.length === 0 || l.toString("base64") !== s.data.signature) return {
    ok: !1,
    reason: "sidecar_invalid"
  };
  let d, c;
  for (let f of n) {
    let m = C(R(f));
    if (await X(m) === s.data.publicKeySha256) {
      d = f, c = m;
      break;
    }
  }
  if (d === void 0 || c === void 0) return {
    ok: !1,
    reason: "unknown_key"
  };
  let h;
  try {
    h = await crypto.subtle.importKey("spki", c, L, !1, [ "verify" ]);
  } catch (f) {
    return t(`[publishedCatalog] trust root ${d.id} is not an importable RSA key: ${f instanceof Error ? f.name : "error"}`), 
    {
      ok: !1,
      reason: "key_unusable"
    };
  }
  let g;
  try {
    g = await crypto.subtle.verify(L.name, h, C(l), V(e, i));
  } catch {
    g = !1;
  }
  return g ? {
    ok: !0,
    rootId: d.id
  } : {
    ok: !1,
    reason: "bad_signature"
  };
}

function V(e, r = B) {
  let n = (new TextEncoder).encode(r), i = new Uint8Array(n.length + e.length);
  return i.set(n), i.set(e, n.length), i;
}

async function X(e) {
  let r = await crypto.subtle.digest("SHA-256", C(e));
  return Buffer.from(r).toString("hex");
}

function C(e) {
  let r = new Uint8Array(e.byteLength);
  return r.set(e), r;
}

var D = 1e4;

async function KEn(e, {etag: r, noCache: n = !1} = {}) {
  try {
    return e.kind === "file" ? await Q(e) : await q(e, {
      etag: r,
      noCache: n
    });
  } catch (i) {
    let {kind: s, status: l} = ci(i);
    switch (t(`[publishedCatalog] fetch failed: ${s}${l !== void 0 ? ` ${l}` : ""}`), 
    s) {
     case "timeout":
      return {
        status: "error",
        reason: "timeout"
      };

     case "network":
      return {
        status: "error",
        reason: "network"
      };

     case "auth":
     case "http":
      return l === void 0 ? {
        status: "error",
        reason: re(i) ? "too_large" : "network"
      } : {
        status: "error",
        reason: "http_status",
        httpStatus: l
      };

     case "other":
      return {
        status: "error",
        reason: "exception"
      };
    }
  }
}

async function q(e, {etag: r, noCache: n}) {
  let i = Z(e.url), s = n ? {
    "Cache-Control": "no-cache",
    Pragma: "no-cache"
  } : void 0, l = await O(e.url, {
    responseType: "arraybuffer",
    timeout: D,
    maxContentLength: FTe,
    maxBodyLength: FTe,
    validateStatus: () => !0,
    beforeRedirect: i,
    ...(r !== void 0 || s !== void 0) && {
      headers: {
        ...s,
        ...r !== void 0 && {
          "If-None-Match": r
        }
      }
    }
  }), d = l.status;
  if (d === 304 && r !== void 0) return t("[publishedCatalog] fetch: not modified"), 
  {
    status: "not_modified",
    httpStatus: d
  };
  if (d < 200 || d >= 300) return t(`[publishedCatalog] fetch: HTTP ${d}`), {
    status: "error",
    reason: "http_status",
    httpStatus: d
  };
  let c = w(l.data);
  if (c.length > FTe) return {
    status: "error",
    reason: "too_large",
    httpStatus: d
  };
  let h = void 0, g = !1, f = await O(te(e.url), {
    responseType: "arraybuffer",
    timeout: D,
    maxContentLength: Rtt,
    maxBodyLength: Rtt,
    validateStatus: () => !0,
    beforeRedirect: i,
    ...s !== void 0 && {
      headers: s
    }
  });
  if (f.status >= 200 && f.status < 300) {
    let m = w(f.data);
    if (m.length <= Rtt) g = !0, h = mt(Buffer.from(m).toString("utf8"), !1);
  } else t(`[publishedCatalog] sidecar fetch: HTTP ${f.status}`);
  return t(`[publishedCatalog] fetch ok: ${c.length} bytes${g ? ", sidecar present" : ", no sidecar"}`), 
  {
    status: "ok",
    documentBytes: c,
    sidecar: h,
    hasSidecar: g,
    sidecarHttpStatus: f.status,
    etag: ne(l.headers),
    httpStatus: d
  };
}

async function Q(e) {
  if (he()) return t("[publishedCatalog] file not read: a diskless session"), {
    status: "error",
    reason: "read_failed"
  };
  let r = T(e), n = se(), i;
  try {
    i = await n.readFileBytes(r, FTe + 1);
  } catch (d) {
    return t(`[publishedCatalog] file read failed${W(d) ? " (no such file)" : ""}`), 
    {
      status: "error",
      reason: "read_failed"
    };
  }
  if (i.length > FTe) return {
    status: "error",
    reason: "too_large"
  };
  let s = void 0, l = !1;
  try {
    let d = await n.readFileBytes(`${r}${b}`, Rtt + 1);
    if (d.length <= Rtt) l = !0, s = mt(d.toString("utf8"), !1);
  } catch (d) {
    if (!W(d)) t("[publishedCatalog] sidecar read failed");
  }
  return t(`[publishedCatalog] file read ok: ${i.length} bytes${l ? ", sidecar present" : ", no sidecar"}`), 
  {
    status: "ok",
    documentBytes: new Uint8Array(i),
    sidecar: s,
    hasSidecar: l,
    sidecarHttpStatus: void 0,
    etag: void 0,
    httpStatus: void 0
  };
}

function O(e, r) {
  return _j(e) ? NV.get(e, r) : Qa.get(e, r);
}

function Z(e) {
  let r = _j(e), n = e.toLowerCase().startsWith("https:");
  return i => {
    let s = k1e(i), l = J(s), d = ee(s), c = Uie(e, s), h = n ? d === "https:" : c || d === "https:";
    if (!(l !== "" && (r ? _j(l) : !tme(l)) && h && (c || !gee(l)))) throw Error("[publishedCatalog] redirect refused: a hop left the host the request was pinned to");
  };
}

function J(e) {
  try {
    return new URL(e).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function ee(e) {
  try {
    return new URL(e).protocol.toLowerCase();
  } catch {
    return "";
  }
}

function te(e) {
  let r = new URL(e);
  return r.pathname += b, r.toString();
}

function w(e) {
  if (e instanceof Uint8Array) return e;
  if (e instanceof ArrayBuffer) return new Uint8Array(e);
  if (typeof e === "string") return (new TextEncoder).encode(e);
  return new Uint8Array(0);
}

function re(e) {
  return typeof e === "object" && e !== null && "code" in e && (e.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" || e.code === "ERR_BAD_RESPONSE");
}

function ne(e) {
  let r = e?.etag;
  return RV(r) ? r : void 0;
}

export { QVt, zEn, GEn, ZVt, OXo, MXo, Svt, w5r, VEn, FTe, Rtt, HXo, Y2e, Bnr, wvt, KEn, vvt };
