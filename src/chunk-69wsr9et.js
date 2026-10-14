// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { LGn, Gt } from "./chunk-xywp7esx.js";

import { p } from "./chunk-jkzenvsk.js";

import { lVn, VDs, ELt } from "./chunk-8yperama.js";

import { Wit, fxt, GNe } from "./chunk-sqb9meyh.js";

import { jzt } from "./chunk-82mks2hn.js";

import { o, v, u } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

var A = new Set([ "x-upload-token", "content-type" ]), T = 4096, b = 12e4, P = 4096, w = p(() => u({
  sha256: o(),
  size: v()
})), F = {
  400: "put_hash_mismatch",
  403: "put_refused",
  409: "put_already_used",
  410: "put_expired",
  413: "put_size_mismatch",
  429: "put_busy",
  503: "put_busy"
}, x = 2, C = 2e3, D = 1e4;

async function S(a, f, m, i, d) {
  let s = LGn(a.url), e = s === void 0 ? void 0 : new URL(a.url);
  if (s === void 0 || e === void 0 || e.search !== "" || e.hash !== "" || !i.endsWith("/") || !e.pathname.startsWith(i) || !/^[A-Za-z0-9_-]{1,256}$/.test(e.pathname.slice(i.length))) return "put_url_refused";
  let _ = {
    "content-type": "application/octet-stream"
  };
  for (let [r, n] of Object.entries(a.headers)) {
    if (!A.has(r.toLowerCase()) || n.length > T || /[^\x20-\x7e]/.test(n)) return "put_header_refused";
    _[r.toLowerCase()] = n;
  }
  try {
    for (let r = 0; ;r++) {
      let n = await Gt.put(`/${e.pathname.slice(1)}`, f, {
        auth: "none",
        baseUrl: s,
        headers: _,
        maxRedirects: 0,
        maxBodyLength: f.length,
        maxContentLength: P,
        timeout: b,
        signal: d,
        validateStatus: () => !0
      });
      if (!n.ok) return n.reason === "essential-traffic-only" ? "essential_traffic" : "egress_blocked";
      if (n.status === 200) {
        let c = w().safeParse(n.data);
        return c.success && c.data.sha256 === m && c.data.size === f.length ? void 0 : "put_bad_answer";
      }
      let g = F[n.status] ?? "put_failed";
      if (g !== "put_busy" || r === x) return g;
      let h = Number(n.response.headers["retry-after"]);
      if (await J(Number.isFinite(h) && h >= 0 ? Math.min(h * 1e3, D) : C, d), d.aborted) return "canceled";
    }
  } catch (r) {
    if (d.aborted) return "canceled";
    return t(`[file inputs] upload threw: ${l(r)}`, {
      level: "error"
    }), E(r) === "ERR_BAD_RESPONSE" ? "put_bad_answer" : "put_network";
  }
}

function nbn({screen: a, maxFileBytes: f, maxTotalBytes: m, uploadPathPrefix: i}) {
  return {
    async hash(d, s) {
      let e = [], _ = 0;
      for (let r of d) {
        if (s.aborted) return [ ...e, {
          path: r,
          code: "canceled"
        } ];
        let n = await y(r, a, f);
        if ("code" in n) return [ ...e, n ];
        if (_ += n.buf.length, _ > m) return [ ...e, {
          path: r,
          code: "too_large_total"
        } ];
        e.push({
          path: r,
          name: n.name,
          size: n.buf.length,
          sha256: n.sha256
        });
      }
      return e;
    },
    async put(d, s) {
      let e = [], _ = 0;
      for (let {path: r, sha256: n, url: g, headers: h} of d) {
        if (s.aborted) return [ ...e, {
          path: r,
          code: "canceled"
        } ];
        let c = await y(r, a, f);
        if ("code" in c) return [ ...e, c ];
        if (_ += c.buf.length, _ > m) return [ ...e, {
          path: r,
          code: "too_large_total"
        } ];
        if (c.sha256 !== n) return [ ...e, {
          path: r,
          code: "changed"
        } ];
        let R = await S({
          url: g,
          headers: h
        }, c.buf, n, i, s);
        if (R !== void 0) return [ ...e, {
          path: r,
          code: R
        } ];
        e.push({
          path: r,
          ok: !0
        });
      }
      return e;
    }
  };
}

async function y(a, f, m) {
  let i = await f(a);
  if (i === void 0) return {
    path: a,
    code: "path_rejected"
  };
  if (i.requiredDigest === void 0 && await Wit(a, i.realPath)) return t("[file inputs] a path was rejected: a credential, or Claude's own"), 
  {
    path: a,
    code: "path_rejected"
  };
  let d = await fxt(i.realPath);
  if (jzt.test(d)) return {
    path: a,
    code: "name_direction"
  };
  let s = await GNe(i.realPath, m);
  if (!("buf" in s)) return {
    path: a,
    code: s.refusal
  };
  let e = at(s.buf);
  if (i.requiredDigest !== void 0 && e !== i.requiredDigest) return {
    path: a,
    code: "path_rejected"
  };
  return {
    buf: s.buf,
    name: d,
    sha256: e
  };
}

var det = 256, gSt = 20971520, Uzt = 67108864;

var Bzt = [ {
  path: ELt,
  serverId: lVn,
  policy: "allow_cobalt_plinth",
  uploadPathPrefix: `${ELt}/upload/`,
  ccrEntryPath: VDs
} ];

export { nbn, det, gSt, Uzt, Bzt };
