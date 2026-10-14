// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { d2n } from "./chunk-s2t7g8m9.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-jkzenvsk.js";

import "./chunk-pvmwc6wy.js";

import { dr } from "./chunk-y3nc3daq.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import { eo } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import { l, E, W } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { _ } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import { X } from "./chunk-1zg3hbfq.js";

import { _Oe } from "./chunk-rgd61mm3.js";

import "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { HYe } from "./chunk-sqb9meyh.js";

import "./chunk-30n0xq4e.js";

import "./chunk-xtx5f5eb.js";

import "./chunk-vps0k559.js";

import "./chunk-x5881pc6.js";

import "./chunk-8yperama.js";

import "./chunk-xywp7esx.js";

import "./chunk-0pmh7awy.js";

import "./chunk-07cck4g7.js";

import "./chunk-q6wab2jw.js";

import "./chunk-zvghq5er.js";

import "./chunk-2msx6erf.js";

import "./chunk-0cdqg49t.js";

import "./chunk-5brm0azz.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-wptm3jf5.js";

import "./chunk-j90se18b.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-r276nwd3.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-yxennhe9.js";

import "./chunk-nnrb0acr.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-mw643xee.js";

import "./chunk-qqd24q2y.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-46phtgr7.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-2my8wpr5.js";

import "./chunk-80mtmc8z.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-g6nh65r0.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-hmce8a0s.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-0481pkch.js";

import { AKt, lVe, nTn, bW, Err, j6r, W6r } from "./chunk-j85j5j0r.js";

import { ade } from "./chunk-8x5j4k2w.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import { L } from "./chunk-vh1p9t2h.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import { O } from "./chunk-1xnsr4dy.js";

import { constants as K } from "fs";

import { mkdir as P, mkdtemp as ot, open as it, realpath as V, rm as H, writeFile as at } from "fs/promises";

import { posix as st } from "path";

var {extname: ut, join: x} = st, lt = 12e4, ct = 6e5, ft = 1e3, dt = 2e3, tt = /^\{\{(in|out):([A-Za-z0-9_-]{1,64})\}\}$/, F = "cancelled by client";

function r(e, t, n, a) {
  return {
    staging: et(e, t, n),
    telemetryCode: a
  };
}

function U(e, t) {
  if (typeof e === "string") {
    if (tt.test(e)) t.add(e);
    return;
  }
  if (Array.isArray(e)) {
    for (let n of e) U(n, t);
    return;
  }
  if (L(e)) for (let n of Object.values(e)) U(n, t);
}

function Y(e, t) {
  if (typeof e === "string") {
    if (tt.test(e)) return t.get(e) ?? e;
    return e;
  }
  if (Array.isArray(e)) return e.map(n => Y(n, t));
  if (L(e)) return eo(e, n => Y(n, t));
  return e;
}

function J(e) {
  let t = ut(e);
  return /^\.[A-Za-z0-9]{1,8}$/.test(t) ? t : "";
}

function Q(e, t) {
  let n;
  try {
    n = Err(lVe, t);
  } catch (a) {
    return {
      refused: r("tool_error", `invalid ${e} lane_path ${_(t)}: ${l(a)}`)
    };
  }
  if (HYe(n)) return {
    refused: r("tool_error", `invalid ${e} lane_path ${_(t)}: ${nTn}`, void 0, "lane_path_reserved")
  };
  return {
    rel: n
  };
}

async function Nt(e, t) {
  let n, a, y;
  try {
    let f = await gt(e, t);
    n = f.staging, a = f.tool, y = f.telemetryCode;
  } catch (f) {
    let N = E(f);
    n = et("tool_error", `unexpected failure: ${N ?? l(f)}`);
  }
  if (t.signal?.aborted) return {
    staging: n,
    tool: a
  };
  if (n.ok) g("ccr_mcp_call_staged"); else m("ccr_mcp_call_staged", y ?? n.error_code);
  return {
    staging: n,
    tool: a
  };
}

function et(e, t, n) {
  return {
    ok: !1,
    error_code: e,
    detail: t.slice(0, dt).replace(/[\uD800-\uDBFF]$/, ""),
    ...n !== void 0 && {
      retryable: n
    }
  };
}

function pt(e) {
  if (typeof e === "string") return e;
  if (Array.isArray(e)) return e.map(t => t !== null && typeof t === "object" && "text" in t && typeof t.text === "string" ? t.text : "").filter(Boolean).join(`\n`);
  return "";
}

async function gt(e, t) {
  let n = d2n().safeParse(e);
  if (!n.success) return r("tool_error", `invalid request: ${n.error.message}`);
  let a = n.data;
  if (O() === "windows") return r("tool_error", "staged mcp_call is not supported on this platform");
  if (a.output_files !== void 0 && a.expires_at === void 0) return r("tool_error", "invalid request: expires_at is required when output_files are declared");
  if (a.expires_at !== void 0) {
    let i = ade(a.expires_at);
    if (Number.isNaN(i)) return r("expired", `expires_at is not an RFC3339 timestamp with a zone: ${a.expires_at}`, void 0, "expires_at_unparseable");
    if (Date.now() > i) return r("expired", `request expired at ${a.expires_at}`);
  }
  let y = [];
  for (let i of a.input_files ?? []) {
    let s = Q("input", i.lane_path);
    if ("refused" in s) return s.refused;
    y.push({
      spec: i,
      rel: s.rel
    });
  }
  let f = [], N = new Map;
  for (let i of a.output_files ?? []) {
    let s = Q("output", i.lane_path);
    if ("refused" in s) return s.refused;
    let {rel: d} = s, p = N.get(d);
    if (p !== void 0) return r("tool_error", `duplicate output lane_path: ${i.lane_path} collides with ${p}`);
    N.set(d, i.lane_path), f.push({
      spec: i,
      rel: d
    });
  }
  for (let [i, s] of [ [ "input", a.input_files ?? [] ], [ "output", a.output_files ?? [] ] ]) {
    let d = new Set;
    for (let {name: p} of s) {
      if (d.has(p)) return r("tool_error", `duplicate ${i} name: ${p}`);
      d.add(p);
    }
  }
  let v = a.input_files !== void 0 || a.output_files !== void 0;
  if (v) {
    let i = new Set([ ...y.map(({spec: u}) => `{{in:${u.name}}}`), ...f.map(({spec: u}) => `{{out:${u.name}}}`) ]), s = new Set;
    U(a.arguments ?? {}, s);
    let d = [ ...s ].filter(u => !i.has(u));
    if (d.length > 0) return r("tool_error", `invalid request: args token names no declared file: ${d.join(", ")}`);
    let p = f.filter(({spec: u}) => !s.has(`{{out:${u.name}}}`)).map(({spec: u}) => u.name);
    if (p.length > 0) return r("tool_error", `invalid request: declared output not referenced by any {{out:NAME}} token in arguments: ${p.join(", ")}`);
  }
  let R;
  try {
    let i;
    if (t.tempRoot === void 0) i = _Oe(); else i = t.tempRoot, await P(i, {
      recursive: !0,
      mode: 448
    });
    R = await ot(x(i, "plugin-tool-")), await P(x(R, "in"), {
      mode: 448
    }), await P(x(R, "out"), {
      mode: 448
    });
  } catch (i) {
    if (R !== void 0) await H(R, {
      recursive: !0,
      force: !0
    }).catch(() => {});
    let s = E(i);
    return X("warn", "ptc_staging_unavailable", {
      code: s ?? "temp_dir_refused"
    }), r("tool_error", `staging unavailable: ${s ?? "temp_dir_refused"}`);
  }
  let D = R;
  try {
    let i = new Map, s = [];
    for (let [o, {spec: h, rel: k}] of y.entries()) {
      if (t.signal?.aborted) return r("tool_error", F);
      let c = await j6r(k);
      if (c.kind === "not_found") return r("input_missing", `input not found: ${h.lane_path}`);
      if (c.kind === "error") return r("tool_error", `input fetch failed for ${h.lane_path}: ${c.message}`, c.retryable);
      let A = x(D, "in", `${o}${J(h.lane_path)}`);
      try {
        await at(A, c.buf, {
          mode: 384
        });
      } catch (M) {
        return r("tool_error", `input stage failed: ${E(M) ?? "unknown"}`);
      }
      i.set(`{{in:${h.name}}}`, A), s.push({
        lane_path: h.lane_path,
        etag: c.content_sha256
      });
    }
    let d = f.map(({spec: o, rel: h}, k) => {
      let c = x(D, "out", `${k}${J(o.lane_path)}`);
      return i.set(`{{out:${o.name}}}`, c), {
        spec: o,
        rel: h,
        path: c
      };
    }), p = v ? eo(a.arguments ?? {}, o => Y(o, i)) : a.arguments ?? {}, u = Math.min(Math.max(a.timeout_ms ?? lt, ft), ct), I = dr(), q = !1, rt = setTimeout(() => {
      if (I.signal.aborted) return;
      q = !0, I.abort(Error("staged mcp_call timed out"));
    }, u), j = () => I.abort(t.signal?.reason);
    if (t.signal?.aborted) j(); else t.signal?.addEventListener("abort", j, {
      once: !0
    });
    let b;
    try {
      b = await t.call(p, I.signal);
    } catch (o) {
      if (q) return r("timeout", `tool did not complete within ${u}ms (${l(o)})`);
      if (t.signal?.aborted) return r("tool_error", `${F} (${l(o)})`);
      return r("tool_error", `tool call failed: ${l(o)}`);
    } finally {
      clearTimeout(rt), t.signal?.removeEventListener("abort", j);
    }
    if (b.isError) {
      if (q) return r("timeout", `tool call exceeded ${u}ms`);
      if (t.signal?.aborted) return r("tool_error", F);
      let o = pt(b.content);
      return r("tool_error", o || "tool returned an error result");
    }
    let nt = await V(D), B = [];
    for (let {spec: o, rel: h, path: k} of d) {
      if (t.signal?.aborted) return r("tool_error", F);
      let c;
      try {
        c = await V(k);
      } catch (w) {
        if (W(w)) return r("tool_error", `tool did not produce output: ${o.name}`);
        return r("tool_error", `output read failed for ${o.name}: ${E(w) ?? "unknown"}`);
      }
      if (!c.startsWith(nt + "/")) return r("tool_error", `output path escapes the staging dir: ${o.name}`);
      let A = bW, M;
      try {
        let w = await it(c, K.O_RDONLY | K.O_NOFOLLOW | K.O_NONBLOCK);
        try {
          let T = await w.stat();
          if (!T.isFile()) return r("tool_error", `output is not a regular file: ${o.name}`);
          if (T.nlink > 1) return r("tool_error", `output has multiple hard links: ${o.name}`);
          if (T.size > A) return r("output_too_large", `output ${o.name} is ${T.size} bytes (cap ${A})`);
          let z = Number(T.size), G = Buffer.allocUnsafe(z + 1), S = 0;
          for (;;) {
            let {bytesRead: Z} = await w.read(G, S, z + 1 - S, S);
            if (Z === 0) break;
            S += Z;
          }
          if (S !== z) return r("tool_error", `output changed during collection: ${o.name}`);
          M = G.subarray(0, S);
        } finally {
          await w.close();
        }
      } catch (w) {
        if (W(w)) return r("tool_error", `tool did not produce output: ${o.name}`);
        return r("tool_error", `output read failed for ${o.name}: ${E(w) ?? "unknown"}`);
      }
      let C = await W6r(t.syncDir ?? AKt, h, M, o.if_match);
      if (!C.ok) return r(C.reason === "too_large" ? "output_too_large" : C.reason === "conflict" ? "output_conflict" : "tool_error", `output write failed for ${o.lane_path}: ${C.error}`, C.retryable);
      B.push({
        lane_path: o.lane_path,
        etag: C.etag,
        bytes: M.length
      });
    }
    return X("info", "mcp_call_staged_ok", {
      inputs: s.length,
      outputs: B.length
    }), {
      staging: {
        ok: !0,
        outputs: B,
        inputs_used: s
      },
      tool: {
        content: b.content,
        structuredContent: b.structuredContent,
        _meta: b._meta
      }
    };
  } finally {
    await H(D, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}

export { Nt as runStagedMcpCall };
