// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rD } from "./chunk-9yajep3y.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { Kue } from "./chunk-jc5888qn.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { E, zr, ME } from "./chunk-b0z4bv3v.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { q, kDo, F$t, Jje } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { J, kx } from "./chunk-nvtwm272.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { j_, ypt, al, cie, Z3e, VDt, UPe, BPe, In, k } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { X } from "./chunk-1zg3hbfq.js";

import { sx } from "./chunk-fvcjfcfm.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { mr, Fe } from "./chunk-0cdqg49t.js";

import { aa } from "./chunk-w4hwgefc.js";

import { n1n, eZ, Qks } from "./chunk-j4rs03r7.js";

import { Lxe, Gks } from "./chunk-ma4gjakn.js";

import { pse, Q7 } from "./chunk-efav7xct.js";

import { NVe, gAn, hAn, yAn, isr, nQ, asr } from "./chunk-pc71c0q1.js";

import { CO, aT, dE, R0 } from "./chunk-3apvz0s4.js";

import { IB, XZo } from "./chunk-cmhrmmqh.js";

import { RJr } from "./chunk-b154cm67.js";

import { TW } from "./chunk-23ynbxh9.js";

import { AN, s$n, zbs } from "./chunk-cmtcv7k0.js";

import { Ta } from "./chunk-pqzqmnjf.js";

import { Con, I8e } from "./chunk-59na0977.js";

import { at } from "./chunk-0bq6eb61.js";

import { Qo } from "./chunk-eha3vdmz.js";

import { Zf, yt } from "./chunk-9zhz923g.js";

import { randomUUID as ke } from "crypto";

import { lstat as Je, mkdir as Xe, realpath as qe } from "fs/promises";

import { dirname as Ge, join as De } from "path";

import { extname as Ce } from "path";

function X7o(e) {
  return Ce(e).toLowerCase().slice(1) !== "" && !I8e(e) && !Lxe(e) && !sx(e);
}

function L9r(e) {
  return s$n("", NVe(e.file_name));
}

function ssr(e) {
  let r = 0, i = 0, n = 0, _ = 0, a = 0, u = 0;
  for (let h of e) {
    if (h.is_image === !0) continue;
    let I = L9r(h), o = h.sha256 === void 0;
    if (Con.has(Ce(I).toLowerCase().slice(1))) r++; else if (I8e(I)) {
      if (i++, o) u++;
    } else if (Lxe(I)) {
      if (n++, o) a++, u++;
    } else _++;
  }
  let l = e.length > 0;
  return {
    binary_ext_file_count: n,
    pdf_file_count: i,
    text_like_file_count: _,
    image_ext_file_count: r,
    all_files_binary_ext_no_sha256: l && a === e.length ? 1 : 0,
    all_files_binary_ext_or_pdf_no_sha256: l && u === e.length ? 1 : 0
  };
}

var Ke = 3e4, ye = 36700160, Se = {
  startsTurn: 3,
  noTurn: 2
}, ge = 1e4, me = 250, Ve = 1e3, Oe = 25e3, Ee = 16, Ze = 20, Qe = 64, et = 16, Ne = 67108864, Ae = 3e5, Te = {
  min: 15e3,
  max: Ae
}, tt = 3, nt = "x-anthropic-attachment-prefetch", Re = {
  name: "x-anthropic-attachment-prefetch-seen",
  value: "1"
}, rt = 409, it = 64, ot = 3e5, st = 32, dt = 6e4, ut = {
  no_token: "failed_no_token_count",
  http_status: "failed_http_status_count",
  too_large: "failed_too_large_count",
  held_limit: "failed_held_limit_count",
  stalled: "failed_stalled_count",
  stopped: "failed_stopped_count",
  error: "failed_error_count"
}, lt = {
  override: !0,
  payload: !0,
  disk: !0,
  disabled: !1,
  fallback: !1
}, ct = {
  no_token: 1,
  http_status: 2,
  too_large: 3,
  held_limit: 4,
  stalled: 5,
  stopped: 6,
  error: 7
}, ft = 8, mt = 9;

function O(e) {
  t(`[bridge:inbound-attach] ${e}`);
}

async function _t(e, r) {
  try {
    let i = await Je(e);
    if (!i.isFile()) return "absent";
    if (i.size !== r.length) return "changed";
  } catch (i) {
    let n = E(i);
    return n === "ENOENT" || n === "ENOTDIR" ? "absent" : "changed";
  }
  return (await nQ(e, r.length))?.equals(r) ? "same" : "changed";
}

async function ht(e, r, i, n, _, a, u, l, h, I, o = !1, s) {
  let M = UPe(he().recoveries), p = h?.accessToken ?? (z() && l !== void 0 ? await dE(l) : aT());
  if (!p) return O("skip: no oauth token"), ae(n, "no_token", 0);
  let C = p, w, B, x, A = !1, G = 0, D = _;
  try {
    let S = e.sha256 === void 0 ? ye : pse;
    if (typeof e.file_size === "number" && e.file_size > S) return ae(n, "too_large", 0);
    let P = we(h), L = Ent(e.file_uuid, h);
    if (P !== void 0 && L !== void 0 && L.bearer === at(p) && L.size <= S && (e.sha256 === void 0 || e.sha256 === L.sha256)) {
      let R = await nQ(L.path, L.size);
      if (R !== null && at(R) === L.sha256) w = R, B = L.sha256, x = L.path, n.reusedFileCount++; else if (P.get(Z(e.file_uuid)) === L) P.delete(Z(e.file_uuid));
    }
    let oe = F$t(), y = Z(e.file_uuid);
    oe.refusedEarly?.delete(y);
    let T = w === void 0 && h === void 0 && s === void 0 ? oe.byFileUuid.get(y) : void 0;
    while (T !== void 0) {
      let R = performance.now(), H = kt(T, R, at(p)), j = T.settledAt === void 0, de = T.startedBy === "prefetch", Y = await T.bytes, ue = performance.now() - R;
      if (G += ue, de && j) {
        if (n.joinedInFlightCount++, n.slowestJoinWaitMs = Math.max(n.slowestJoinWaitMs, ue), 
        T.headersTimedOut) D = Math.max(1, _ - 1);
      }
      let ne = T.bearer === at(p), U = Y !== null && ne && Y.length <= S && (typeof e.sha256 !== "string" || yAn(Y, {
        sha256: e.sha256,
        file_size: e.file_size
      }));
      if (U) {
        if (h === void 0) BPe(he(), M);
        w = Y, A = !0;
      } else if (Y === null && j && ne && je(T, R)) return ae(n, T.failure ?? "error", T.receivedBytes);
      if (de && Y !== null) {
        if (U) n.prefetchedFileCount++;
        if (H) St(T, Y, {
          inFlight: j,
          passes: U,
          sameBearer: ne,
          waitedMs: ue
        });
      }
      let Q = w === void 0 ? oe.byFileUuid.get(y) : void 0;
      T = Q !== T && Q?.startedBy === "message" && Q.bearer === at(p) ? Q : void 0;
    }
    if (w === void 0) {
      let R = new AbortController, H = () => R.abort();
      if (s?.addEventListener("abort", H, {
        once: !0
      }), s?.aborted) H();
      let j, de = 0, Y = {
        fileUuid: e.file_uuid,
        baseUrl: h?.baseUrl,
        forPrefetch: !1,
        maxBytes: S,
        token: () => C,
        admitBytes: U => {
          if (de = U, j !== void 0) j.receivedBytes = U;
          return !0;
        }
      }, ue = xe(D, G, R, n, Y).then(async U => {
        if (h !== void 0 || !("failure" in U) || U.httpStatus !== 401 || CO() !== void 0) return U;
        let Q = await Et(C, l, u, R.signal, a, n);
        if (Q === void 0) return U;
        if (C = Q.bearer, M = Q.stamp, j !== void 0) j.bearer = at(Q.bearer);
        n.retriedAfter401Count++;
        let Me = await xe(1, 0, R, n, Y);
        if (!("failure" in Me)) n.recoveredFileCount++;
        return Me;
      }).catch(U => (d(U), {
        failure: "error"
      }));
      if (h === void 0 && s === void 0 && Le().value) j = $e("message", R, ue, at(p)), 
      oe.byFileUuid.set(y, j);
      let ne = await ue;
      if (s?.removeEventListener("abort", H), "failure" in ne) return ae(n, ne.failure, de, ne.httpStatus);
      if (h === void 0) BPe(he(), M), ypt();
      w = ne.data;
    }
  } catch (S) {
    return O(`fetch ${e.file_uuid} threw: ${S}`), ae(n, "error", 0);
  }
  if (typeof e.sha256 === "string" && !A && !yAn(w, {
    sha256: e.sha256,
    file_size: e.file_size
  })) return O(`fetch ${e.file_uuid} failed integrity verification`), {
    failure: "digest_mismatch"
  };
  let F = {
    resizeMs: 0,
    pngPaletteMs: 0,
    byteBudgetMs: 0
  }, N = performance.now(), v = i && e.is_image === !0 && e.sha256 === void 0 ? await Gks(w, rD, {
    timings: F
  }).catch(S => (O(`inline ${e.file_uuid} threw: ${S}`), null)) : null;
  if (n.slowestInlineImageBuildMs = Math.max(n.slowestInlineImageBuildMs, performance.now() - N), 
  n.slowestInlineImageResizeMs = Math.max(n.slowestInlineImageResizeMs, F.resizeMs), 
  n.slowestInlineImagePngPaletteMs = Math.max(n.slowestInlineImagePngPaletteMs, F.pngPaletteMs), 
  n.slowestInlineImageByteBudgetMs = Math.max(n.slowestInlineImageByteBudgetMs, F.byteBudgetMs), 
  v && eZ(w) === "image/png") {
    if (n.inlinedPngSourceCount++, Qks(w)) n.inlinedPngSourceMaybeTransparentCount++;
    if (v.source.type === "base64" && v.source.media_type === "image/jpeg") n.inlinedPngSourceSentAsJpegCount++;
  }
  let re = v ? `image.${n1n[eZ(w)]}` : NVe(e.file_name), ee = (v ? ke().slice(0, 8) : e.file_uuid.slice(0, 8) || ke().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_"), te = I ?? AN(), se = s$n(ee, re), W = De(te, se), ie = q(), le = !o || e.sha256 !== void 0 ? "absent" : x === W ? "same" : Jje() === null ? await _t(W, w) : "absent";
  if (s?.aborted) return ae(n, "stopped", 0);
  let ce = performance.now(), K;
  if (le === "same") n.unchangedOnDiskCount++; else if (le === "changed") n.keptChangedFileCount++; else if (z() && u !== void 0 && mr(ie) && mr(se) && (I === void 0 || I === AN())) {
    let S = await u.write(Fe.userConfigDir("uploads", [ ie, se ]), w, {
      mode: 384
    });
    if (!S.ok) K = yt(S.error), n.lastFailedWrite = {
      code: ME(Zf(S.error)) ?? c(S.error.code),
      step: b("storage_backend")
    };
  } else {
    let S = b("mkdir");
    try {
      if (await Xe(te, {
        recursive: !0,
        mode: 448
      }), s?.aborted) return ae(n, "stopped", 0);
      S = b("write"), await Tn(W, w, 384);
    } catch (P) {
      K = `${P}`, n.lastFailedWrite = {
        code: zr(P) ?? b("unknown"),
        step: S
      };
    }
  }
  if (n.slowestWriteMs = Math.max(n.slowestWriteMs, performance.now() - ce), K !== void 0) {
    if (O(`write ${W} failed: ${K}`), n.failedWriteCount++, v) return n.inlinedImageNotSavedCount++, 
    {
      imageBlock: v
    };
    return {
      failure: "write"
    };
  }
  let fe = performance.now();
  if (B ??= at(w), n.slowestHashAfterWriteMs = Math.max(n.slowestHashAfterWriteMs, performance.now() - fe), 
  r && e.sha256 === void 0) try {
    zbs(await qe(W), B);
  } catch {
    O(`registration skipped for ${W}`);
  }
  let V = we(h);
  if (V !== void 0) {
    if (V.delete(Z(e.file_uuid)), V.size >= Qe) {
      let S = V.keys().next().value;
      if (S !== void 0) V.delete(S);
    }
    V.set(Z(e.file_uuid), {
      path: W,
      size: w.length,
      sha256: B,
      bearer: at(C)
    });
  }
  if (O(`resolved ${e.file_uuid} \u2192 ${W} (${w.length} bytes)`), v) return O(`inlined ${e.file_uuid} (${w.length} bytes)`), 
  {
    imageBlock: v,
    path: W
  };
  if (i && e.is_image === !0 && e.sha256 === void 0) return O(`inline ${e.file_uuid} fell back to @path ref`), 
  {
    path: W,
    inlineFellBack: !0
  };
  return {
    path: W
  };
}

var gt = {
  download: "it could not be downloaded",
  digest_mismatch: "it failed integrity verification",
  write: "it could not be written to the uploads directory"
};

async function vjs(e, r, i, n, _, a, u, l, h, I, o = !0) {
  if (e.length === 0) return {
    prefix: "",
    imageBlocks: [],
    inlinedImagePaths: [],
    deliveredCount: 0
  };
  O(`resolving ${e.length} attachment(s)`);
  let s = F$t().refusedEarly;
  if (s !== void 0 && s.size > 0) for (let y of e) s.delete(Z(y.file_uuid));
  let M = performance.now(), p = {
    slowestTimeToHeadersMs: 0,
    slowestDownloadMs: 0,
    slowestJoinWaitMs: 0,
    slowestInlineImageBuildMs: 0,
    slowestInlineImageResizeMs: 0,
    slowestInlineImagePngPaletteMs: 0,
    slowestInlineImageByteBudgetMs: 0,
    slowestWriteMs: 0,
    slowestHashAfterWriteMs: 0,
    downloadedBytes: 0,
    downloadTryCount: 0,
    recoveredFileCount: 0,
    retriedAfter401Count: 0,
    slowest401RefreshWaitMs: 0,
    failedWriteCount: 0,
    inlinedImageNotSavedCount: 0,
    unchangedOnDiskCount: 0,
    keptChangedFileCount: 0,
    reusedFileCount: 0,
    prefetchedFileCount: 0,
    joinedInFlightCount: 0,
    inlinedPngSourceCount: 0,
    inlinedPngSourceMaybeTransparentCount: 0,
    inlinedPngSourceSentAsJpegCount: 0,
    failedDownloads: {}
  }, C = e.filter(y => typeof y.sha256 === "string"), w = Ue(e);
  if (!(a?.accessToken ?? (z() && _ !== void 0 ? await dE(_) : aT()))) {
    O("skip: no oauth token");
    let y = {
      ...Pe(e.slice(0, w), 0, 0, p, M),
      ...ve(h, l)
    };
    f("bridge_attachment_resolve", "no_token", y), X("warn", "bridge_attachment_download_timing", {
      outcome: "no_token",
      should_query: u,
      ...y
    });
    let T = mAn(e.filter(R => typeof R.sha256 !== "string"), "no_token");
    if (C.length > 0) {
      let R = C.length - Q7, H = R > 0 ? C.slice(0, Q7) : C;
      isr("bridge", H.length, 0);
      let j = R > 0 ? " " + hAn(R) : "";
      return {
        prefix: H.map(Y => gAn(Y.file_name, "it could not be downloaded (not signed in)")).join(" ") + j + (T.length > 0 ? " " + be(T.length, T.length) : "") + " ",
        imageBlocks: [],
        inlinedImagePaths: [],
        deliveredCount: 0,
        ...T.length > 0 && {
          missingFiles: T
        }
      };
    }
    return {
      prefix: be(T.length, T.length) + " ",
      imageBlocks: [],
      inlinedImagePaths: [],
      deliveredCount: 0,
      missingFiles: T
    };
  }
  let x = [], A = e, G = A.length > w;
  if (G) {
    if (O(`dropping ${A.length - w} attachment(s) over the ${w} cap`), C.length > 0) x.push(hAn(A.length - w));
    A = A.slice(0, w);
  }
  let D = r && i, F = a === void 0 && I === void 0, N = F && A.length > Ee, v = Ta(Ee, y => ht(y, r, D, p, u === !1 ? Se.noTurn : Se.startsTurn, o, n, _, a, l, u === !1, I).finally(() => {
    if (N) Be(y);
  })), re;
  try {
    re = await Promise.all(A.map(y => v(y)));
  } finally {
    for (let y of F ? A : []) Be(y);
  }
  let ee = [], te = [], se = [], W = 0, ie = 0, le = 0, ce = !1, K = [], fe = [];
  if (re.forEach((y, T) => {
    let R = A[T], H = typeof R.sha256 === "string";
    if (H) ie++;
    if ("path" in y) fe.push({
      file_uuid: R.file_uuid,
      path: y.path,
      inlined: "imageBlock" in y
    });
    if ("imageBlock" in y) {
      if (te.push(y.imageBlock), "path" in y) se.push(y.path);
    } else if ("path" in y) {
      if (ee.push(`@"${y.path}"`), y.inlineFellBack) W++;
      if (H) le++;
    } else {
      if (y.failure === "digest_mismatch") ce = !0;
      if (H) x.push(gAn(R.file_name, gt[y.failure])); else K.push({
        file_uuid: R.file_uuid,
        reason: y.failure === "write" ? "write" : y.cause ?? "download"
      });
    }
  }), K.length > 0) {
    let y = C.length === 0 ? e.slice(w) : [];
    K.push(...mAn(y, "count_cap")), x.push(be(K.length, A.length - ie + y.length));
  }
  if (ie > 0) isr("bridge", ie, le);
  let V = ee.length + te.length, S = {
    ...Pe(A, V, te.length, p, M),
    ...ve(h, l)
  }, P;
  if (V === 0) P = ce ? "digest_mismatch" : "all_failed", m("bridge_attachment_resolve", P, S); else if (V < A.length) P = ce ? "digest_mismatch" : "partial_failed", 
  f("bridge_attachment_resolve", P, S); else if (G) P = "over_count_cap", f("bridge_attachment_resolve", P, S); else if (p.inlinedImageNotSavedCount > 0) P = "inlined_image_not_saved", 
  f("bridge_attachment_resolve", P, S); else P = "ok", g("bridge_attachment_resolve", S);
  let L = P !== "ok" && P !== "over_count_cap" || p.failedWriteCount > 0;
  if (X(L ? "warn" : "info", "bridge_attachment_download_timing", {
    outcome: P,
    should_query: u,
    ...S
  }), W > 0) f("bridge_attachment_inline_image", "fallback_path_ref"); else if (te.length > 0) g("bridge_attachment_inline_image");
  let oe = [ ...ee, ...x ];
  return {
    prefix: oe.length > 0 ? oe.join(" ") + " " : "",
    imageBlocks: te,
    inlinedImagePaths: p.inlinedImageNotSavedCount > 0 ? [] : se,
    deliveredCount: V,
    ...K.length > 0 && {
      missingFiles: K
    },
    ...fe.length > 0 && {
      writtenFiles: fe
    },
    timing: {
      timeToHeadersMs: Math.round(p.slowestTimeToHeadersMs),
      downloadMs: Math.round(p.slowestDownloadMs),
      joinWaitMs: Math.round(p.slowestJoinWaitMs),
      imageBuildMs: Math.round(p.slowestInlineImageBuildMs),
      approxDownloadedBytes: Number(p.downloadedBytes.toPrecision(2)),
      prefetchedFileCount: p.prefetchedFileCount
    }
  };
}

function We(e, r) {
  if (!r) return e;
  if (typeof e === "string") return asr(e, r);
  let i = e.findLastIndex(n => n.type === "text");
  if (i !== -1) {
    let n = e[i];
    if (n.type === "text") return [ ...e.slice(0, i), {
      ...n,
      text: asr(n.text, r)
    }, ...e.slice(i + 1) ];
  }
  return [ ...e, {
    type: "text",
    text: r.trimEnd()
  } ];
}

function pt(e, r) {
  if (r.length === 0) return e;
  let i = typeof e === "string" ? e.trim() === "" ? [] : [ {
    type: "text",
    text: e
  } ] : RJr(e);
  return [ ...r, ...i ];
}

function mAn(e, r) {
  return e.map(i => ({
    file_uuid: i.file_uuid,
    reason: r
  }));
}

function N9r(e, r, i) {
  let n = IB(e);
  if (n.length === 0 || n.length > Ue(n)) return;
  let _ = [];
  for (let u of n) {
    let l = u.file_uuid.slice(0, 8).replace(/[^a-zA-Z0-9_-]/g, "_");
    if (l === "") return;
    let h = s$n(l, NVe(u.file_name));
    _.push(De(i, h));
  }
  let a = _.map(u => `@"${u}"`);
  return {
    content: We(r ?? "", a.join(" ") + " "),
    refs: a,
    paths: _
  };
}

async function Uqt(e, r, i, n, _, a, u, l = !0) {
  let h = r ?? "", I = IB(e);
  if (I.length === 0) return {
    content: h,
    inlinedImagePaths: []
  };
  let o = i && !(typeof h === "string" && Kue(h)), {prefix: s, imageBlocks: M, deliveredCount: p, ...C} = await vjs(I, i, o, n, _, void 0, XZo(e), a, u, void 0, l);
  if (p === 0 && typeof h === "string" && h.trim() === "") return {
    content: s.trimEnd(),
    ...C
  };
  return {
    content: pt(We(h, s), M),
    ...C
  };
}

function Be(e) {
  let r = F$t(), i = Z(e.file_uuid), n = r.byFileUuid.get(i);
  if (n?.taken !== void 0 && n.settledAt !== void 0) r.byFileUuid.delete(i);
}

function Ue(e) {
  return e.every(r => r.sha256 === void 0) ? Ze : Q7;
}

function $9r(e) {
  if (!e || k("tengu_amber_ferry", !1) !== !0) return "off";
  return k("tengu_slate_marten", !1) === !0 ? "on_with_pdfs" : "on";
}

function ve(e, r) {
  return e === void 0 ? {} : {
    ahead_of_files_flag_on: e === "off" ? 0 : 1,
    ahead_of_files_on_with_pdfs: e === "on_with_pdfs" ? 1 : 0,
    queued_ahead_of_files: r === void 0 ? 0 : 1
  };
}

function Pe(e, r, i, n, _) {
  return {
    file_count: e.length,
    resolved_count: r,
    download_try_count: n.downloadTryCount,
    recovered_file_count: n.recoveredFileCount,
    reused_file_count: n.reusedFileCount,
    prefetched_file_count: n.prefetchedFileCount,
    joined_in_flight_count: n.joinedInFlightCount,
    inlined_image_count: i,
    ...ssr(e),
    inlined_png_source_count: n.inlinedPngSourceCount,
    inlined_png_source_maybe_transparent_count: n.inlinedPngSourceMaybeTransparentCount,
    inlined_png_source_sent_as_jpeg_count: n.inlinedPngSourceSentAsJpegCount,
    approx_downloaded_bytes: Number(n.downloadedBytes.toPrecision(2)),
    duration_ms: Math.round(performance.now() - _),
    slowest_time_to_headers_ms: Math.round(n.slowestTimeToHeadersMs),
    slowest_download_ms: Math.round(n.slowestDownloadMs),
    slowest_join_wait_ms: Math.round(n.slowestJoinWaitMs),
    slowest_inline_image_build_ms: Math.round(n.slowestInlineImageBuildMs),
    slowest_inline_image_resize_ms: Math.round(n.slowestInlineImageResizeMs),
    slowest_inline_image_png_palette_ms: Math.round(n.slowestInlineImagePngPaletteMs),
    slowest_inline_image_byte_budget_ms: Math.round(n.slowestInlineImageByteBudgetMs),
    slowest_write_ms: Math.round(n.slowestWriteMs),
    slowest_hash_after_write_ms: Math.round(n.slowestHashAfterWriteMs),
    ...n.failedDownloads,
    ...n.retriedAfter401Count > 0 && {
      retried_after_401_count: n.retriedAfter401Count
    },
    ...n.slowest401RefreshWaitMs > 0 && {
      slowest_401_refresh_wait_ms: Math.round(n.slowest401RefreshWaitMs)
    },
    ...n.failedWriteCount > 0 && {
      failed_write_count: n.failedWriteCount
    },
    ...n.inlinedImageNotSavedCount > 0 && {
      inlined_image_not_saved_count: n.inlinedImageNotSavedCount
    },
    ...n.lastFailedWrite !== void 0 && {
      last_failed_write_code: n.lastFailedWrite.code,
      last_failed_write_step: n.lastFailedWrite.step
    },
    ...n.unchangedOnDiskCount > 0 && {
      unchanged_on_disk_count: n.unchangedOnDiskCount
    },
    ...n.keptChangedFileCount > 0 && {
      kept_changed_file_count: n.keptChangedFileCount
    }
  };
}

var bt = new Set([ 404, 410 ]);

function ae(e, r, i, n) {
  let _ = e.failedDownloads, a = ut[r];
  if (_[a] = (_[a] ?? 0) + 1, i > 0) _.partway_failed_count = (_.partway_failed_count ?? 0) + 1;
  if (n !== void 0) _.last_failed_http_status = n;
  if (r === "too_large" || r === "no_token") return {
    failure: "download",
    cause: r
  };
  return {
    failure: "download",
    ...r === "http_status" && bt.has(n) && {
      cause: "not_found"
    }
  };
}

function we(e) {
  return e === void 0 && Jje() === null ? kDo() : void 0;
}

function Ent(e, r) {
  let i = we(r)?.get(Z(e));
  return i !== void 0 && Ge(i.path) === AN() ? i : void 0;
}

function Z(e) {
  return Vt(e) === null ? e : e.toLowerCase();
}

function Le() {
  return In("tengu_dapper_brooks", !1);
}

function He() {
  return k("tengu_twinkling_hoare", !1) === !0;
}

function wt() {
  let e = k("tengu_hazel_lantern", 0);
  if (typeof e !== "number" || !(e > 0)) return {
    ms: Ae,
    repeatRenews: !1
  };
  return {
    ms: Math.min(Te.max, Math.max(Te.min, Math.round(e * 1e3))),
    repeatRenews: !0
  };
}

function F9r(e, {issuedAt: r, credentials: i, onlyThese: n = !1}) {
  if (Ct()) return 0;
  let _ = Le();
  if (!_.value) return mye("bridge_attachment_prefetch_flag_off", {
    file_count: e.length,
    flag_served: lt[_.source]
  }), 0;
  let a = F$t(), u = wt(), l = {
    file_count: e.length,
    started_count: 0,
    already_present_count: 0,
    held_limit_count: 0,
    start_budget_count: 0,
    skipped_count: 0
  }, h = 0, I = 0, o = 0, s = 0;
  if (a.earlyReadsStopped === !0 && !He()) a.earlyReadsStopped = void 0, a.earlyReadsStopReported = void 0;
  let M = a.earlyReadsStopped === !0, p = new Set, C = Date.now() - r, w = C > Math.max(tt * u.ms, Ae), B = w ? [] : e.slice(0, Q7);
  if (l.skipped_count = e.length - B.length, n && !w) {
    let D = new Set(e.map(F => Z(F.file_uuid)));
    for (let [F, N] of a.byFileUuid) if (!D.has(F) && N.release !== void 0 && !N.taken) N.release("dropped_unused"), 
    I++;
  }
  for (let D of B) {
    let F = Z(D.file_uuid);
    if (Vt(D.file_uuid) === null || D.file_size !== void 0 && D.file_size > ye) {
      l.skipped_count++;
      continue;
    }
    let N = a.refusedEarly?.get(F);
    if (N !== void 0) {
      if (performance.now() - N < ot) {
        o++;
        continue;
      }
      a.refusedEarly?.delete(F);
    }
    let v = a.byFileUuid.get(F);
    if (v !== void 0 || Ent(D.file_uuid, void 0) !== void 0) {
      if (l.already_present_count++, u.repeatRenews && v?.release !== void 0 && !v.taken && !p.has(F)) _e(v, u.ms), 
      p.add(F), h++;
      continue;
    }
    if (M) {
      s++;
      continue;
    }
    let re = At(D.file_size), ee = It(a, re);
    if (ee === "held_limit") l.held_limit_count++; else if (ee === "start_budget") l.start_budget_count++; else Ft(a, F, D.file_uuid, re, i, u.ms, u.repeatRenews), 
    p.add(F), l.started_count++;
  }
  let x = Ie(a), A = {
    ...l,
    age_ms: Math.round(C),
    held_file_count: x.count,
    approx_held_bytes: Number(x.bytes.toPrecision(2)),
    ...u.repeatRenews && {
      hold_ms: u.ms,
      refreshed_count: h,
      renewed_since_last_report: a.renewalsNotYetReported ?? 0
    },
    ...n && {
      only_these: !0,
      dropped_count: I
    },
    ...o > 0 && {
      refused_before_count: o
    },
    ...s > 0 && {
      early_reads_stopped_count: s
    }
  }, G = a.earlyReadsStopReported === !0 ? s : 0;
  if (h + o + G > 0 && h === l.already_present_count && l.file_count === h + o + G && I === 0) return a.renewalsNotYetReported = (a.renewalsNotYetReported ?? 0) + h, 
  0;
  if (a.renewalsNotYetReported = 0, s > 0) a.earlyReadsStopReported = !0;
  if (w) f("bridge_attachment_prefetch", "stale", A); else if (s > 0) f("bridge_attachment_prefetch", "mark_unseen_stop", A); else if (l.held_limit_count > 0) f("bridge_attachment_prefetch", "held_limit", A); else if (l.start_budget_count > 0) f("bridge_attachment_prefetch", "start_budget", A); else g("bridge_attachment_prefetch", A);
  return mye(l.started_count > 0 ? "bridge_attachment_prefetch_started" : "bridge_attachment_prefetch_not_started", {
    ...A,
    stale: w
  }), l.started_count;
}

function mye(e, r) {
  X("info", e, r);
}

function At(e) {
  return e !== void 0 && e > 0 ? e : 0;
}

function It(e, r) {
  let i = performance.now(), n = e.recentPrefetchStarts;
  while (n.length > 0 && i - n[0] >= dt) n.shift();
  let _ = Ie(e);
  if (_.count >= et || _.bytes + r > Ne) return "held_limit";
  return n.length < st ? "ok" : "start_budget";
}

function Ie(e) {
  let r = 0, i = 0;
  for (let n of e.byFileUuid.values()) if (n.startedBy === "prefetch" && !n.taken) r++, 
  i += n.settledAt === void 0 ? Math.max(n.receivedBytes, n.statedBytes) : n.receivedBytes;
  return {
    count: r,
    bytes: i
  };
}

function Mt(e) {
  e.release?.("expired_unused");
}

function _e(e, r) {
  clearTimeout(e.expiry), e.expiry = setTimeout(Mt.bind(void 0, e), r), e.expiry.unref();
}

function Ft(e, r, i, n, _, a, u) {
  let l = new AbortController, h = !1, I = ze({
    fileUuid: i,
    baseUrl: void 0,
    forPrefetch: !0,
    maxBytes: ye,
    quietLimitMs: ge,
    token: async () => {
      let s = await dE(_);
      if (s) o.bearer = at(s);
      return s;
    },
    abort: l,
    totals: void 0,
    onServed: s => {
      let M = !s && He();
      if (M) e.earlyReadsStopped = !0;
      mye("bridge_attachment_prefetch_served", {
        mark_seen: s,
        ...!s && {
          stops_early_reads: M
        }
      });
    },
    admitBytes: s => {
      if (o.receivedBytes = s, o.taken || Ie(e).bytes <= Ne) return !0;
      return o.receivedBytes = 0, o.statedBytes = 0, !1;
    }
  }), o = $e("prefetch", l, I, void 0);
  o.statedBytes = n, o.release = s => {
    if (e.byFileUuid.get(r) !== o || o.taken) return;
    if (s === "expired_unused" && u && o.settledAt === void 0) {
      _e(o, a);
      return;
    }
    h = !0, clearTimeout(o.expiry), e.byFileUuid.delete(r), l.abort();
    let M = {
      download_finished: o.settledAt !== void 0,
      approx_bytes: Number(o.receivedBytes.toPrecision(2)),
      ...s === "dropped_unused" && {
        held_for_ms: Math.round(performance.now() - o.startedAt)
      }
    };
    f("bridge_attachment_prefetch_download", s, M), mye(`bridge_attachment_prefetch_${s}`, M);
  }, _e(o, a), e.recentPrefetchStarts.push(o.startedAt), e.byFileUuid.set(r, o), I.then(s => {
    if (!("failure" in s)) {
      if (u && e.byFileUuid.get(r) === o && !o.taken) _e(o, a);
      return;
    }
    if (e.byFileUuid.get(r) === o && !o.taken) e.byFileUuid.delete(r), clearTimeout(o.expiry);
    let M = s.failure === "http_status" && s.httpStatus === rt;
    if (M && !o.taken) {
      let A = e.refusedEarly ??= new Map;
      if (A.delete(r), A.size >= it) A.delete(A.keys().next().value ?? r);
      A.set(r, performance.now());
    }
    if (h) return;
    let p = {
      duration_ms: Math.round(performance.now() - o.startedAt),
      ...s.httpStatus !== void 0 && {
        http_status: s.httpStatus
      }
    }, C = Ye(s), w = C ? "no_answer" : s.failure;
    if (M) {
      f("bridge_attachment_prefetch_download", "refused_early", p), mye("bridge_attachment_prefetch_failed", {
        ...p,
        failure_code: ft
      });
      return;
    }
    let B = o.taken, x = B?.by === "joiner" && B.bearer === o.bearer && je(o, B.at);
    if (x) m("bridge_attachment_prefetch_download", w, p); else f("bridge_attachment_prefetch_download", w, p);
    mye(x ? "bridge_attachment_prefetch_failed_file_lost" : "bridge_attachment_prefetch_failed", {
      ...p,
      failure_code: C ? mt : ct[s.failure]
    });
  }).catch(d);
}

function $e(e, r, i, n) {
  let _ = {
    startedBy: e,
    bytes: i.then(a => {
      if (_.settledAt = performance.now(), "failure" in a) return _.failure = a.failure, 
      _.headersTimedOut = Ye(a), null;
      return a.data;
    }),
    startedAt: performance.now(),
    settledAt: void 0,
    failure: void 0,
    headersTimedOut: !1,
    receivedBytes: 0,
    statedBytes: 0,
    abort: r,
    taken: e === "message" ? {
      by: "starter"
    } : void 0,
    expiry: void 0,
    bearer: n
  };
  return _;
}

function je(e, r) {
  let i = (e.settledAt ?? performance.now()) - r;
  return e.startedBy !== "prefetch" || e.failure === "too_large" || e.receivedBytes > 0 && e.failure !== "stalled" && i > Oe;
}

function kt(e, r, i) {
  if (e.taken) return !1;
  return e.taken = {
    by: "joiner",
    at: r,
    bearer: i
  }, clearTimeout(e.expiry), !0;
}

function St(e, r, {inFlight: i, passes: n, sameBearer: _, waitedMs: a}) {
  let u = {
    in_flight: i,
    waited_ms: Math.round(a),
    download_ms: Math.round((e.settledAt ?? performance.now()) - e.startedAt),
    approx_bytes: Number(r.length.toPrecision(2))
  };
  if (n) g("bridge_attachment_prefetch_download", u), mye(i ? "bridge_attachment_prefetch_used_joined" : "bridge_attachment_prefetch_used_ready", u); else f("bridge_attachment_prefetch_download", _ ? "attestation_mismatch" : "bearer_changed", u), 
  mye(_ ? "bridge_attachment_prefetch_attestation_mismatch" : "bridge_attachment_prefetch_bearer_changed", u);
}

async function xe(e, r, i, n, _) {
  let a = performance.now() - r + Oe;
  for (let u = 0; ;u++) {
    let l = new AbortController, h = () => l.abort();
    if (i.signal.addEventListener("abort", h, {
      once: !0
    }), i.signal.aborted) l.abort();
    n.downloadTryCount++, _.admitBytes(0);
    let I = u + 1 < e && performance.now() + ge + me <= a, o = await ze({
      ..._,
      totals: n,
      abort: l,
      quietLimitMs: I ? ge : Ke
    });
    if (i.signal.removeEventListener("abort", h), !("failure" in o)) {
      if (u > 0) n.recoveredFileCount++;
      return o;
    }
    let s = o.httpStatus ?? 0, M = o.failure === "stalled" || o.failure === "error" && o.final !== !0 || o.failure === "http_status" && (s >= 500 || s === 408 || s === 429), p = performance.now(), C = a - p, w = Math.min(kx({
      baseMs: Ve,
      attempt: u,
      floorMs: me
    }), Math.max(me, C)), B = I && o.failure === "stalled";
    if (M && u + 1 < e && (B || C >= me)) {
      if (await J(w, i.signal), !i.signal.aborted) continue;
    }
    return o;
  }
}

function he() {
  let e = F$t();
  return e.signInRefresh ??= {
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  }, e.signInRefresh;
}

async function Et(e, r, i, n, _, a) {
  let u = he(), l = new AbortController, h = J(ge, AbortSignal.any([ n, l.signal ])).then(() => {});
  try {
    let I = await Promise.race([ dE(r).catch(() => {}), h ]);
    if (I === e) {
      let o = u.attempted && u.recoveries.running === 0;
      if (!u.attempted) {
        u.attempted = !0;
        let M = !1;
        u.run = VDt(u, () => j_(e, r, i, {
          onForcedRefreshOutcome: p => {
            if (Z3e.has(p)) u.attempted = !1; else M = !0;
          }
        })).then(async () => {
          if (!M && await dE(r) !== e) u.attempted = !1;
        }).catch(d);
      }
      if (!_) {
        if (!(await Promise.race([ al(r).catch(() => null), h ]))?.refreshToken) return;
      }
      let s = performance.now();
      I = await Promise.race([ (u.run ?? Promise.resolve()).then(() => o ? cie(r) : void 0).then(() => dE(r)).catch(() => {}), h ]), 
      a.slowest401RefreshWaitMs = Math.max(a.slowest401RefreshWaitMs, performance.now() - s);
    }
    return I && I !== e && !n.aborted ? {
      bearer: I,
      stamp: UPe(u.recoveries)
    } : void 0;
  } finally {
    l.abort();
  }
}

async function ze({fileUuid: e, baseUrl: r, forPrefetch: i, maxBytes: n, token: _, abort: a, quietLimitMs: u, totals: l, onServed: h, admitBytes: I}) {
  let o = i ? "of a prefetched file" : e, s = !1, M = !1, p = () => {
    s = !0, a.abort();
  }, C = setTimeout(p, u), w = performance.now();
  try {
    let B = await Promise.race([ _(), Tt(a.signal) ]);
    if (a.signal.aborted) return s ? pe(M) : {
      failure: "stopped"
    };
    if (!B) return {
      failure: "no_token"
    };
    let x;
    try {
      x = `${r ?? R0()}/api/oauth/files/${encodeURIComponent(e)}/content`;
    } catch (N) {
      return O(`fetch ${o} has no URL: ${i ? N instanceof Error ? N.name : "a non-Error" : N}`), 
      {
        failure: "error",
        final: !0
      };
    }
    let A = await fetch(x, {
      headers: {
        Authorization: `Bearer ${B}`,
        "User-Agent": Qo(),
        ...i && {
          [nt]: "1"
        }
      },
      ...i && {
        cache: "no-store"
      },
      signal: a.signal,
      ...aa({
        url: x
      })
    });
    if (M = !0, clearTimeout(C), C = setTimeout(p, u), l !== void 0) l.slowestTimeToHeadersMs = Math.max(l.slowestTimeToHeadersMs, performance.now() - w);
    if (A.status !== 200) return O(`fetch ${o} failed: status=${A.status}`), await TW(A), 
    s ? pe(M) : {
      failure: "http_status",
      httpStatus: A.status
    };
    h?.(A.headers.get(Re.name)?.trim() === Re.value);
    let G = A.body?.getReader(), D = [], F = 0;
    while (G !== void 0) {
      let {done: N, value: v} = await G.read();
      if (N) break;
      if (C.refresh(), F += v.byteLength, F > n) return O(`fetch ${o} over size cap (${F} bytes so far)`), 
      a.abort(), {
        failure: "too_large"
      };
      if (!I(F)) return O(`fetch ${o} stopped: unused prefetched files would exceed 64 MiB in memory`), 
      a.abort(), {
        failure: "held_limit"
      };
      D.push(v);
    }
    if (l !== void 0) l.downloadedBytes += F;
    return {
      data: Buffer.concat(D, F)
    };
  } catch (B) {
    return O(`fetch ${o} threw: ${i ? B instanceof Error ? B.name : "a non-Error" : B}`), 
    s ? pe(M) : {
      failure: a.signal.aborted ? "stopped" : "error"
    };
  } finally {
    if (clearTimeout(C), l !== void 0) l.slowestDownloadMs = Math.max(l.slowestDownloadMs, performance.now() - w);
  }
}

function Ye(e) {
  return "failure" in e && e.failure === "stalled" && e.beforeHeaders;
}

function pe(e) {
  return {
    failure: "stalled",
    beforeHeaders: !e
  };
}

function Tt(e) {
  return new Promise(r => {
    if (e.aborted) {
      r(void 0);
      return;
    }
    e.addEventListener("abort", () => r(void 0), {
      once: !0
    });
  });
}

function be(e, r) {
  return r === 1 ? "[attachment did not arrive]" : e === r ? `[${r} attachments did not arrive]` : `[${e} of ${r} attachments did not arrive]`;
}

export { X7o, L9r, ssr, vjs, mAn, N9r, Uqt, $9r, Ent, F9r, mye };
