// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Sy, xw, DO, vCr, _k, Di, tG, Ui, k, Ce, ce } from "./chunk-xywp7esx.js";

import { Le, ys } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { x, vx, j, l, E, ug, Ms, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { a } from "./chunk-j016gcgm.js";

import { bt, _, Y, se, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { ft } from "./chunk-zscnwzv2.js";

import { iD } from "./chunk-30n0xq4e.js";

import { p } from "./chunk-jkzenvsk.js";

import { Ja, r$s } from "./chunk-2msx6erf.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { wa, _c } from "./chunk-vps0k559.js";

import { EU, lG, tg } from "./chunk-x35dw27e.js";

import { _j, Qa } from "./chunk-nc0jxmkt.js";

import { PCo } from "./chunk-znhtg8e4.js";

import { Axt, sYe } from "./chunk-sqb9meyh.js";

import { nir, Vnt, oKe, rir, wCn, oir, y0e, sKe, iKe } from "./chunk-zdw25e0t.js";

import { g0e } from "./chunk-hjph2xzh.js";

import { NV } from "./chunk-t17yn24n.js";

import { ZCs, eRs, ctn, n5 } from "./chunk-av9t4vjk.js";

import { o, v, u, _t, ue, A } from "./chunk-cvcg6n1z.js";

import { we } from "./chunk-m8ez8fhk.js";

var Et = we(vy(), 1);

import { constants as mn } from "fs";

import { access as pn, chmod as gn, copyFile as yt, mkdir as le, readdir as Ee, readlink as vt, realpath as dt, rename as pe, rm as he, rmdir as _n, stat as X, symlink as mt, unlink as te, utimes as hn, writeFile as wn } from "fs/promises";

import { homedir as kt } from "os";

import { randomBytes as $t } from "crypto";

import { basename as Oe, delimiter as yn, dirname as ne, join as U, resolve as oe } from "path";

import { createHash as xe } from "crypto";

import { createReadStream as Ot, createWriteStream as Vt } from "fs";

import { chmod as zt, rm as Bt } from "fs/promises";

import { join as Ut } from "path";

import { Readable as jt, Transform as qe } from "stream";

import { pipeline as Ae } from "stream/promises";

import { createZstdDecompress as Wt } from "zlib";

import { createHash as It, createPublicKey as Mt, verify as Ft } from "crypto";

function Be() {
  return `-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixB\nUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncr\nmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7\nro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmV\nNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y\n0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAs\nIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAi\np5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81Iw\nH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw\n1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0\nlC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3Zp\nIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ==\n-----END PUBLIC KEY-----\n`;
}

var Ue = Buffer.from("claude-code-manifest-v1\0"), Re = "2.1.207", je = "flag";

var Dt = 1, Lt = "RSASSA-PKCS1-v1_5-SHA512", Nt = p(() => u({
  schema: A(Dt),
  algorithm: A(Lt),
  signature: o().min(1),
  publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
})), Te = p(() => _t({
  version: o(),
  manifestSignatureEnforcement: o().optional(),
  platforms: ue(o(), _t({
    checksum: o(),
    size: v().optional(),
    binary: o().optional()
  }))
}));

class LM extends x {
  reason;
  constructor(e, n) {
    super(`Release verification failed for Claude Code ${e} (${n}). The update was not installed.`, "Release manifest signature verification failed", n);
    this.name = "ManifestSignatureError", this.reason = n;
  }
}

function We({manifestBytes: e, sidecar: n, expectedVersion: r, publicKeyPem: s}) {
  let h = Nt().safeParse(n);
  if (!h.success) throw new LM(r, "sidecar_malformed");
  let {signature: w, publicKeySha256: b} = h.data;
  if (Buffer.from(w, "base64").toString("base64") !== w) throw new LM(r, "sidecar_malformed");
  let y;
  try {
    y = Mt(s);
  } catch {
    throw new LM(r, "key_mismatch");
  }
  let S = It("sha256").update(y.export({
    type: "spki",
    format: "der"
  })).digest("hex");
  if (b !== S) throw new LM(r, "key_mismatch");
  let R = !1;
  try {
    R = Ft("sha512", Buffer.concat([ Ue, e ]), y, Buffer.from(w, "base64"));
  } catch {
    R = !1;
  }
  if (!R) throw new LM(r, "signature_invalid");
  let F;
  try {
    let M = Te().safeParse(Y(e.toString("utf8")));
    F = M.success ? M.data : void 0;
  } catch {
    F = void 0;
  }
  if (!F || F.version !== r) throw new LM(r, "version_mismatch");
  return F;
}

var Ie = "https://downloads.claude.ai/claude-code-releases";

function Me(e, n) {
  return _j(e) ? NV.get(e, n) : Qa.get(e, n);
}

var Ge = 3e4, He = 3;

async function qt(e = "latest", n, r) {
  let s = Date.now(), h = 0, w;
  try {
    w = await nir(R => (h++, Me(`${n}/${e}`, {
      timeout: Ge,
      responseType: "text",
      signal: R,
      ...r
    })), {
      attempts: He,
      timeoutMs: Ge,
      onRetry: (R, F) => {
        t(`Version check failed on attempt ${R}/${He}, retrying: ${F instanceof Error ? F.message : String(F)}`);
      }
    });
  } catch (R) {
    let F = Date.now() - s, M = R instanceof Error ? R.message : String(R), L = ge(R);
    m("update_check", "update_check_binary_repo_failed"), i("tengu_version_check_failure", {
      latency_ms: F,
      http_status: L,
      is_timeout: be(R),
      attempt: h,
      platform: tG(an()),
      channel: c(e)
    });
    let N = new x(`Failed to fetch version from ${n}/${e} after ${h} attempt(s): ${M}`, "Failed to fetch version from binary repo");
    throw t(`Failed to fetch version from ${n}/${e} after ${h} attempt(s): ${M}`, {
      level: "error"
    }), N;
  }
  let b = Date.now() - s, y = w.data.trim(), S = y.length;
  if (!vCr(y)) throw m("update_check", "update_check_binary_repo_invalid_response"), 
  new x(`Version pointer for ${e} did not return a version (got ${S} bytes)`, "Version pointer returned a non-version body");
  if (i("tengu_version_check_success", {
    latency_ms: b,
    attempt: h
  }), h > 1) f("update_check", "update_check_binary_repo_retry"); else g("update_check");
  return y;
}

async function _Cn(e) {
  if (/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e)) {
    let r = e.startsWith("v") ? e.slice(1) : e;
    if (/^99\.99\./.test(r)) throw new x(`Version ${r} is not available for installation. Use 'stable' or 'latest'.`, "Test-fixture version rejected outside test builds");
    return r;
  }
  let n = e;
  if (n !== "stable" && n !== "latest" && n !== "rc") throw new x(`Invalid channel: ${e}. Use 'latest' or 'stable'`, "Invalid release channel");
  if (n === "rc") throw new x(`Invalid channel: ${e}. Use 'stable' or 'latest'`, "Invalid release channel");
  return qt(n, Ie);
}

var Cr = p(() => u({
  dist: u({
    integrity: o().min(1),
    tarball: o().min(1).optional()
  })
}));

var Gt = 12e4, ae = 3, Xe = 6e5, ve = 1e4, Ze = 1e3, Qe = ae * (ve + Ze), Ht = 2 * Qe;

function Kt() {
  return Number(a.CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING) || Gt;
}

function Yt() {
  return Number(a.CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING) || Xe;
}

class A4t extends Error {
  constructor() {
    super("Download stalled: no data received for 120 seconds");
    this.name = "StallTimeoutError";
  }
}

function Je(e) {
  if (_c(e) && e.response) return !1;
  let n = tg(e)?.code;
  if (n === "ECONNABORTED" || n === "ETIMEDOUT") return !1;
  if (n !== void 0 && (lG.has(n) || EU.has(n))) return !0;
  return vx(e, "aborted");
}

async function Ke(e, n, r, s = {}, h) {
  let w, b = !1, y = !1;
  for (let S = 1; S <= ae; S++) {
    let R = new AbortController, F = !1, M = !1, L, N, D, C = () => {
      if (L) clearTimeout(L), L = void 0;
      if (N) clearTimeout(N), N = void 0;
    }, P = () => {
      if (L) L.refresh(); else L = setTimeout(T => T.abort("stall"), Kt(), R);
    };
    try {
      P(), N = setTimeout(q => q.abort("deadline"), Yt(), R);
      let T = await Me(e, {
        timeout: Xe,
        responseType: "stream",
        signal: R.signal,
        ...s
      }), I = xe("sha256"), V = h ? xe("sha256") : void 0, O = V ?? I, G = new qe({
        transform(q, z, H) {
          P(), O.update(q), H(null, q);
        }
      });
      if (D = Vt(r, {
        highWaterMark: 4194304
      }), D.on("drain", P), h) {
        let q = 0, z = new qe({
          transform(H, ee, ie) {
            if (q += H.length, q > h.decompressedSize) {
              ie(new x(`Decompressed binary exceeds the manifest size of ${h.decompressedSize} bytes`, "Decompressed binary larger than manifest size"));
              return;
            }
            I.update(H), ie(null, H);
          }
        });
        await Ae(T.data, G, Wt(), z, D, {
          signal: R.signal
        });
      } else await Ae(T.data, G, D, {
        signal: R.signal
      });
      if (F = !0, C(), h) {
        let q = V?.digest("hex");
        if (q !== h.checksum) throw new x(`Checksum mismatch: expected ${h.checksum}, got ${q} (compressed)`, "Checksum mismatch during compressed binary download");
      }
      let Z = I.digest("hex");
      if (Z !== n) throw Object.assign(new x(`Checksum mismatch: expected ${n}, got ${Z}`, "Checksum mismatch during binary download"), {
        deterministic: h !== void 0
      });
      return M = !0, await zt(r, 493), {
        checksumRetried: b,
        dropRetried: y
      };
    } catch (T) {
      C();
      let I = Jt(T) ? Object.assign(new x(`Checksum mismatch: zstd decoder rejected the frame (${E(T)})`, "zstd decoder rejected the frame"), {
        cause: T
      }) : T;
      if (_c(I) && I.response?.data instanceof jt) I.response.data.destroy();
      if (D && !M) {
        let H = D;
        await new Promise(ee => H.close(() => ee())), await Bt(r, {
          force: !0
        }).catch(ee => t(`Failed to remove partial download: ${ee instanceof Error ? ee.message : String(ee)}`, {
          level: "error"
        }));
      }
      let V = R.signal.aborted ? R.signal.reason : void 0, O = V === "deadline", G = !O && (V === "stall" || wa(I));
      if (O) throw Object.assign(new x("Download timed out: exceeded the total deadline"), {
        attempt: S
      });
      let Z = I instanceof Error && I.message.includes("Checksum mismatch"), q = !F && (Je(I) || tg(I)?.code === "ERR_STREAM_PREMATURE_CLOSE"), z = G ? new A4t : j(I);
      if (w = z, (G || Z || q) && !tn(I) && S < ae) {
        if (Z) b = !0; else if (q) y = !0;
        t(`Download ${Z ? "checksum mismatch" : G ? "stalled" : "connection dropped"} on attempt ${S}/${ae}, retrying...`), 
        await J(1e3);
        continue;
      }
      if (q) {
        let H = E(z);
        throw Object.assign(new x(`The connection dropped while downloading the update (attempt ${S}/${ae}: ${z.message}). Check your network \u2014 proxies sometimes cut off large downloads.`, "Connection dropped repeatedly during binary download"), {
          attempt: S,
          connectionDrop: !0,
          cause: z,
          ...H && {
            code: H
          }
        });
      }
      throw Object.assign(z, {
        attempt: S
      });
    }
  }
  throw w ?? Error("Download failed after all retries");
}

function et() {
  return k("tengu_elegant_pancake", null);
}

function Fe(e, n = et()) {
  return e === "always" ? n !== !1 : n === !0;
}

function tt() {
  return je;
}

function Xt() {
  return Fe(tt());
}

function Zt(e, n) {
  return e === "always" || e === "flag" && Fe("flag", n);
}

async function nt(e, n, {authConfig: r, signaturePolicy: s, platform: h, startTime: w, purpose: b = "download"}) {
  let y = b === "download", S, R, F = !1, M = bCn(h);
  try {
    let D = await Pe(`${e}/${n}/manifest.json`, {
      timeout: ve,
      ...r,
      responseType: "arraybuffer",
      maxContentLength: 1048576
    });
    F = D.dropRetried, S = Buffer.from(D.data);
    let C = Te().safeParse(Y(S.toString("utf8")));
    if (!C.success) throw new x(`Manifest for ${n} is not a valid release manifest`, "Release manifest failed schema validation");
    R = C.data;
  } catch (D) {
    let C = Date.now() - w, P = D instanceof Error ? D.message : String(D);
    if (y) m("update_download", "update_download_manifest_failed");
    throw i("tengu_binary_manifest_fetch_failure", {
      latency_ms: C,
      http_status: ge(D),
      is_timeout: be(D),
      platform: tG(h)
    }), t(`Failed to fetch manifest from ${e}/${n}/manifest.json: ${P}`, {
      level: "error"
    }), D;
  }
  let L = !1, N = !1;
  if (s !== "skip") {
    let D = `${e}/${n}/manifest.json.raw-sig.json`, C = Date.now(), P, T;
    try {
      let I, V = !1;
      try {
        let O = await Pe(D, {
          timeout: ve,
          ...r,
          responseType: "json",
          maxContentLength: 65536,
          signal: AbortSignal.timeout(Qe)
        });
        F ||= O.dropRetried, I = O.data;
      } catch (O) {
        if (P = ge(O), P !== 404) throw new LM(n, P !== void 0 ? "sidecar_fetch_http_error" : Date.now() - C > Ht ? "sidecar_fetch_interrupted" : be(O) ? "sidecar_fetch_timeout" : "sidecar_fetch_connection_error");
        if (s !== "allow-unsigned-legacy") throw new LM(n, "sidecar_missing");
        V = !0;
      }
      if (V) f("update_manifest_signature", "unsigned_legacy"), t(`No manifest signature published for ${n} (predates ${Re}); continuing with checksum-only verification`, {
        level: "warn"
      }); else {
        let O = We({
          manifestBytes: S,
          sidecar: I,
          expectedVersion: n,
          publicKeyPem: Be()
        });
        t(`Verified manifest signature for ${n}`);
        let G = O.platforms[h];
        if (G && G.binary !== M) throw new LM(n, "binary_name_mismatch");
        if (R = O, L = !0, s === "require-enforcing-release") {
          if (await Ui().catch(() => null), T = {
            flag: et()
          }, !Zt(O.manifestSignatureEnforcement, T.flag)) throw new LM(n, "release_predates_enforcement");
        }
        N = !0, g("update_manifest_signature");
      }
    } catch (I) {
      if (!(I instanceof LM)) throw I;
      let V = Date.now() - C;
      await Ui().catch(() => null);
      let O = T ? Fe(tt(), T.flag) : Xt();
      if (i("tengu_binary_manifest_signature_failed", {
        reason: c(I.reason),
        http_status: P,
        enforced: O,
        platform: tG(h),
        latency_ms: V
      }), O) {
        if (I.reason === "release_predates_enforcement") f("update_manifest_signature", I.reason), 
        t(`${n} is signed but predates manifest-signature enforcement; not eligible as a channel target for this client`, {
          level: "warn"
        }); else if (I.reason === "sidecar_fetch_interrupted") f("update_manifest_signature", I.reason), 
        t(`Signature sidecar fetch for ${n} was interrupted (process suspended mid-request); will retry on the next update check`, {
          level: "warn"
        }); else {
          if (m("update_manifest_signature", I.reason), y) m("update_download", "update_download_manifest_signature");
          t(`Manifest signature check failed for ${D}: ${I.reason}`, {
            level: "error"
          });
        }
        throw I;
      }
      f("update_manifest_signature", I.reason), t(`Manifest signature check failed for ${D}: ${I.reason} (enforcement disabled; continuing)`, {
        level: "warn"
      });
    }
  }
  return {
    manifest: R,
    manifestAuthenticated: L,
    signatureVerified: N,
    metadataDropRetried: F
  };
}

async function Qt(e, n, r, {authConfig: s, signaturePolicy: h}) {
  let w = se();
  await w.rm(n, {
    recursive: !0,
    force: !0
  });
  let b = Tye(), y = bCn(b), S = Date.now();
  i("tengu_binary_download_attempt", {});
  let [R, F] = await Promise.all([ nt(r, e, {
    authConfig: s,
    signaturePolicy: h,
    platform: b,
    startTime: S
  }), Pe(`${r}/${e}/manifest.zst.json`, {
    timeout: ve,
    ...s,
    responseType: "json",
    maxContentLength: 1048576
  }).catch(z => {
    t(`No compressed manifest for ${e}: ${l(z)}`);
    return;
  }) ]), {manifest: M, signatureVerified: L} = R, N = F?.data, D = R.metadataDropRetried || F?.dropRetried === !0, C = M.platforms[b];
  if (!C) throw m("update_download", "update_download_platform_not_found"), i("tengu_binary_platform_not_found", {}), 
  new x(`Native binaries for ${b} are not available on this release channel (version ${e} ships: ${Object.keys(M.platforms).sort().join(", ")}).`, "Native binaries not available for platform on this channel");
  let P = C.checksum, T = N?.platforms?.[b]?.checksum, I = C.size, V = T !== void 0 && /^[a-f0-9]{64}$/.test(T) && I !== void 0 && Number.isInteger(I) && I > 0 ? {
    checksum: T,
    decompressedSize: I
  } : void 0, O = `${r}/${e}/${b}/${y}`;
  await w.mkdir(n);
  let G = Ut(n, y), Z = V !== void 0, q = Z ? `${O}.zst` : O;
  try {
    let z;
    if (V) try {
      z = await Ke(q, P, G, s || {}, V);
    } catch (de) {
      if (ge(de) === void 0 && !en(de)) throw de;
      Z = !1, q = O, t(`Compressed binary unusable (${de instanceof Error ? de.message : String(de)}), falling back to ${O}`);
    }
    let {checksumRetried: H, dropRetried: ee} = z ?? await Ke(q, P, G, s || {}), ie = Date.now() - S;
    if (V && !Z) f("update_download", "update_download_zst_fallback"); else if (H) f("update_download", "update_download_checksum_retry"); else if (ee || D) f("update_download", "update_download_drop_retry"); else g("update_download");
    return i("tengu_binary_download_success", {
      latency_ms: ie,
      compressed: Z
    }), {
      signatureVerified: L,
      expectedChecksum: P
    };
  } catch (z) {
    let H = Date.now() - S, ee = z instanceof Error ? z.message : String(z), ie = ee.includes("Checksum mismatch");
    if (ie) m("update_download", "update_download_checksum_mismatch"); else if (z instanceof A4t) m("update_download", "update_download_stall_timeout"); else if (nn(z)) m("update_download", "update_download_connection_drop"); else m("update_download", "update_download_binary_failed");
    throw i("tengu_binary_download_failure", {
      latency_ms: H,
      http_status: ge(z),
      is_timeout: be(z),
      is_checksum_mismatch: ie,
      attempt: rn(z),
      platform: tG(b),
      compressed: Z
    }), t(`Failed to download binary from ${q}: ${ee}`, {
      level: "error"
    }), z;
  }
}

function rt(e, {explicitVersionRequested: n, requireEnforcingRelease: r}) {
  return r ? "require-enforcing-release" : n && DO(e, Re) ? "allow-unsigned-legacy" : "require";
}

async function it(e, n, r) {
  let s = Tye(), {manifest: h, manifestAuthenticated: w, signatureVerified: b} = await nt(Ie, e, {
    signaturePolicy: rt(e, r),
    platform: s,
    startTime: Date.now(),
    purpose: "reverify"
  });
  if (!w) return t(`Manifest for retained ${e} is unauthenticated; activating the retained copy without a checksum comparison`, {
    level: "warn"
  }), {
    signatureVerified: !1,
    binaryMatches: !0,
    expectedChecksum: void 0
  };
  let y = h.platforms[s]?.checksum, S = y !== void 0 && await $e(n, y);
  if (!S) t(`Retained ${e} does not match its signed manifest checksum; re-downloading`);
  return {
    signatureVerified: b,
    binaryMatches: S,
    expectedChecksum: y
  };
}

function at(e) {
  if (!_c(e) || e.response) return !1;
  let n = tg(e)?.code;
  return n !== void 0 && (EU.has(n) || n === "ETIMEDOUT");
}

async function ke(e) {
  let n = xe("sha256");
  return await Ae(Ot(e), n), n.digest("hex");
}

async function $e(e, n) {
  try {
    return await ke(e) === n;
  } catch (r) {
    return t(`Could not hash ${e} (${E(r) ?? j(r).name}); treating as mismatched`), 
    !1;
  }
}

async function ot(e, n, {explicitVersionRequested: r, requireEnforcingRelease: s}) {
  let {signatureVerified: h, expectedChecksum: w} = await Qt(e, n, Ie, {
    signaturePolicy: rt(e, {
      explicitVersionRequested: r,
      requireEnforcingRelease: s
    })
  });
  return {
    downloadType: "binary",
    signatureVerified: h,
    expectedChecksum: w
  };
}

function ge(e) {
  if (_c(e) && e.response) return e.response.status;
  return;
}

function be(e) {
  if (e instanceof A4t) return !0;
  if (wa(e)) return !0;
  if (_c(e) && (e.code === "ECONNABORTED" || e.code === "ETIMEDOUT")) return !0;
  if (e !== null && typeof e === "object" && "code" in e && e.code === "ETIMEDOUT") return !0;
  let n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return n.includes("timeout") || n.includes("timed out");
}

function Jt(e) {
  return E(e)?.startsWith("ZSTD_error_") === !0;
}

function en(e) {
  let n = e instanceof Error ? e.message : String(e);
  return n.includes("Checksum mismatch") || n.includes("exceeds the manifest size");
}

function tn(e) {
  return e !== null && typeof e === "object" && "deterministic" in e && e.deterministic === !0;
}

function nn(e) {
  return e !== null && typeof e === "object" && "connectionDrop" in e && e.connectionDrop === !0;
}

function rn(e) {
  if (e !== null && typeof e === "object" && "attempt" in e && typeof e.attempt === "number") return e.attempt;
  return;
}

function an() {
  try {
    return Tye();
  } catch {
    return "unknown";
  }
}

async function Pe(e, n) {
  let r = !1;
  for (let s = 1; ;s++) try {
    return {
      data: (await Me(e, n)).data,
      dropRetried: r
    };
  } catch (h) {
    if (s >= ae || !Je(h)) throw h;
    r = !0, t(`Fetch of ${e} connection dropped on attempt ${s}/${ae}, retrying...`), 
    await J(Ze);
  }
}

import { lstat as on, readdir as sn } from "fs/promises";

import { basename as ln, join as cn } from "path";

function me() {
  return !ys(void 0);
}

var un = 72e5;

function De(e) {
  if (e <= 1) return !1;
  try {
    return process.kill(e, 0), !0;
  } catch {
    return !1;
  }
}

function dn(e, n) {
  if (!De(e)) return !1;
  if (e === process.pid) return !0;
  try {
    let r = PCo(e);
    if (!r) return !0;
    let s = r.toLowerCase(), h = n.toLowerCase();
    return s.includes("claude") || s.includes(h);
  } catch {
    return !0;
  }
}

function fe(e) {
  let n = se();
  try {
    let r = n.readFileSync(e, {
      encoding: "utf8"
    });
    if (!r || r.trim() === "") return null;
    let s = Y(r);
    if (typeof s.pid !== "number" || !s.version || !s.execPath) return null;
    return s;
  } catch {
    return null;
  }
}

function _e(e) {
  let n = fe(e);
  if (!n) return !1;
  let {pid: r, execPath: s} = n;
  if (!De(r)) return !1;
  if (!dn(r, s)) return t(`Lock PID ${r} is running but does not appear to be Claude - treating as stale`), 
  !1;
  let h = se();
  try {
    let w = h.statSync(e);
    if (Date.now() - w.mtimeMs > un) {
      if (!De(r)) return !1;
    }
  } catch {}
  return !0;
}

function fn(e, n) {
  iD(e, _(n, null, 2));
}

async function st(e, n) {
  let r = se(), s = ln(e);
  if (_e(n)) {
    let w = fe(n);
    return t(`Cannot acquire lock for ${s} - held by PID ${w?.pid}`), null;
  }
  let h = {
    pid: process.pid,
    version: s,
    execPath: process.execPath,
    acquiredAt: Date.now()
  };
  try {
    if (fn(n, h), fe(n)?.pid !== process.pid) return null;
    return t(`Acquired PID lock for ${s} (PID ${process.pid})`), () => {
      try {
        if (fe(n)?.pid === process.pid) r.unlinkSync(n), t(`Released PID lock for ${s}`);
      } catch (b) {
        t(`Failed to release lock for ${s}: ${b}`);
      }
    };
  } catch (w) {
    return t(`Failed to acquire lock for ${s}: ${w}`), null;
  }
}

async function lt(e, n) {
  let r = await st(e, n);
  if (!r) return !1;
  let s = () => {
    try {
      r();
    } catch {}
  };
  return process.on("exit", s), process.on("SIGINT", s), process.on("SIGTERM", s), 
  !0;
}

async function ct(e, n, r) {
  let s = await st(e, n);
  if (!s) return !1;
  try {
    return await r(), !0;
  } finally {
    s();
  }
}

async function ut(e) {
  let n = se(), r = 0, s;
  try {
    s = (await sn(e)).filter(h => h.endsWith(".lock"));
  } catch (h) {
    if (W(h)) return 0;
    return t(`Failed to readdir locks directory: ${j(h).message}`, {
      level: "error"
    }), 0;
  }
  for (let h of s) {
    let w = cn(e, h);
    try {
      if ((await on(w)).isDirectory()) n.rmSync(w, {
        recursive: !0,
        force: !0
      }), r++, t(`Cleaned up legacy directory lock: ${h}`); else if (!_e(w)) n.unlinkSync(w), 
      r++, t(`Cleaned up stale lock: ${h}`);
    } catch {}
    await new Promise(b => setImmediate(b));
  }
  return r;
}

var Ne = 2, Ve = 6048e5, vn = !1;

function Tye() {
  let e = a.platform, n = "x64";
  if (!n) {
    let r = Error("Unsupported architecture: x64");
    throw t("Native installer does not support architecture: x64", {
      level: "error"
    }), r;
  }
  if (vn) n = "arm64";
  if (e === "linux") {
    if (_k.isAndroidEnvironment()) return `linux-${n}-android`;
    if (_k.isMuslEnvironment()) return `linux-${n}-musl`;
  }
  return `${e}-${n}`;
}

function bCn(e) {
  return e.startsWith("win32") ? "claude.exe" : "claude";
}

function Q() {
  let e = Tye(), n = bCn(e);
  return {
    versions: ctn(),
    staging: U(eRs(), "claude", "staging"),
    locks: U(ZCs(), "claude", "locks"),
    executable: U(n5(), n)
  };
}

async function St(e) {
  return X(e).then(n => n.isFile() && n.size > 0, () => !1);
}

async function bn(e, n) {
  for (let r of e) if (await St(n(r))) return r;
  return;
}

function kn(e) {
  return `${e}.old.${Date.now()}.${process.pid}`;
}

var $n = 2592e6;

function En(e, n) {
  if (!e.toLowerCase().startsWith(`${n.toLowerCase()}.`)) return;
  let r = /^(?:old\.(\d+)(?:\.(\d+))?|new\.\d+\.(\d+)\.[0-9a-f]+)$/i.exec(e.slice(n.length + 1));
  return r === null ? void 0 : r[1] !== void 0 ? {
    kind: "backup",
    stampedMs: Number(r[1]),
    ownerPid: r[2] === void 0 ? void 0 : Number(r[2])
  } : {
    kind: "staged",
    stampedMs: Number(r[3])
  };
}

async function re(e) {
  try {
    let n = await X(e);
    if (!n.isFile() || n.size === 0) return !1;
    return (n.mode & mn.S_IXUSR) !== 0;
  } catch {
    return !1;
  }
}

async function ze(e) {
  let n = Q(), r = [ n.versions, n.staging, n.locks ];
  await Promise.all(r.map(w => le(w, {
    recursive: !0
  })));
  let s = ne(n.executable);
  if (await le(s, {
    recursive: !0
  }), !/^[a-zA-Z0-9._+-]+$/.test(e) || e.includes("..") || e === ".") throw Error(`Invalid version string "${e}": contains path-unsafe characters`);
  let h = U(n.versions, e);
  try {
    await wn(h, "", {
      encoding: "utf8",
      flag: "wx"
    });
  } catch (w) {
    if (E(w) !== "EEXIST") throw w;
    try {
      if ((await X(h)).size === 0) {
        let b = new Date;
        await hn(h, b, b);
      }
    } catch {}
  }
  return {
    stagingPath: U(n.staging, e),
    installPath: h
  };
}

async function Rt(e, n, r = 0) {
  let s = Q(), h = ye(s, e);
  if (await le(s.locks, {
    recursive: !0
  }), me()) {
    let b = 0, y = r + 1, S = r > 0 ? 1e3 : 100, R = r > 0 ? 5e3 : 500;
    while (b < y) {
      if (await ct(e, h, async () => {
        try {
          await n();
        } catch (M) {
          throw t(`Native installer version-lock callback failed: ${M}`, {
            level: "error"
          }), M;
        }
      })) return i("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !1,
        attempts: b + 1
      }), !0;
      if (b++, b < y) {
        let M = Math.min(S * Math.pow(2, b - 1), R);
        await J(M);
      }
    }
    return i("tengu_version_lock_failed", {
      is_pid_based: !0,
      is_lifetime_lock: !1,
      attempts: y
    }), Se(e, Error("Lock held by another process")), !1;
  }
  let w = null;
  try {
    try {
      w = await Ja(e, {
        stale: Ve,
        retries: {
          retries: r,
          minTimeout: r > 0 ? 1e3 : 100,
          maxTimeout: r > 0 ? 5e3 : 500
        },
        lockfilePath: h,
        onCompromised: b => {
          t(`NON-FATAL: Version lock was compromised during operation: ${b.message}`, {
            level: "info"
          });
        }
      });
    } catch (b) {
      return i("tengu_version_lock_failed", {
        is_pid_based: !1,
        is_lifetime_lock: !1
      }), Se(e, b), !1;
    }
    try {
      return await n(), i("tengu_version_lock_acquired", {
        is_pid_based: !1,
        is_lifetime_lock: !1
      }), !0;
    } catch (b) {
      throw t(`tryWithVersionLock: callback failed under version lock: ${l(b)}`, {
        level: "error"
      }), b;
    }
  } finally {
    if (w) await w();
  }
}

var pt = [ 100, 500, 2e3 ];

class C4t extends x {
  constructor() {
    super("Staged binary no longer matches the verified checksum; refusing to install", "Staged binary checksum mismatch at install");
  }
}

async function Tt(e, n, r) {
  await le(ne(n), {
    recursive: !0
  });
  let s;
  for (let h = 1; h <= pt.length + 1; h++) {
    let w = `${n}.tmp.${process.pid}.${Date.now()}.${h}`;
    try {
      if (await yt(e, w), await gn(w, 493), r !== void 0 && await ke(w) !== r) throw new C4t;
      return await pe(w, n), t(`Atomically installed binary to ${n}` + (h > 1 ? ` (attempt ${h})` : "")), 
      {
        attempts: h
      };
    } catch (b) {
      s = b;
      try {
        await te(w);
      } catch {}
      let y = E(b), S = y === "EBUSY" || y === "EPERM" && !1, R = pt[h - 1];
      if (!S || R === void 0) throw b;
      t(`atomicMoveToInstallPath attempt ${h} failed with ${y}; retrying in ${R}ms`), 
      await J(R);
    }
  }
  throw s;
}

async function Sn(e, n, r) {
  try {
    let s = U(e, "node_modules", "@anthropic-ai"), w = (await Ee(s)).find(S => S.startsWith("claude-cli-native-"));
    if (!w) throw i("tengu_native_install_package_failure", {
      stage_find_package: !0,
      error_package_not_found: !0
    }), Error("Could not find platform-specific native package");
    let b = U(s, w, "cli");
    try {
      await X(b);
    } catch {
      throw i("tengu_native_install_package_failure", {
        stage_binary_exists: !0,
        error_binary_not_found: !0
      }), Error("Native binary not found in staged package");
    }
    let {attempts: y} = await Tt(b, n, r);
    return await he(e, {
      recursive: !0,
      force: !0
    }), i("tengu_native_install_package_success", {
      install_attempts: y
    }), {
      moveRetried: y > 1
    };
  } catch (s) {
    let h = l(s);
    if (!(h.includes("Could not find platform-specific") || h.includes("Native binary not found"))) if (i("tengu_native_install_package_failure", {
      stage_atomic_move: !0,
      error_move_failed: !0
    }), m("update_apply", "update_apply_native_move_failed"), Ms(s)) t(`installVersionFromPackage: atomic move failed: ${h}`, {
      level: "error"
    }); else d(j(s)); else m("update_apply", "update_apply_native_staging_missing"), 
    t(`installVersionFromPackage: ${h}`, {
      level: "error"
    });
    throw s;
  }
}

async function Rn(e, n, r) {
  try {
    let s = Tye(), h = bCn(s), w = U(e, h);
    try {
      await X(w);
    } catch (y) {
      throw i("tengu_native_install_binary_failure", {
        stage_binary_exists: !0,
        error_binary_not_found: !0,
        error_code: ug(y)
      }), Error("Staged binary not found");
    }
    let {attempts: b} = await Tt(w, n, r);
    return await he(e, {
      recursive: !0,
      force: !0
    }), i("tengu_native_install_binary_success", {
      install_attempts: b
    }), {
      moveRetried: b > 1
    };
  } catch (s) {
    if (s instanceof C4t) i("tengu_native_install_binary_failure", {
      stage_atomic_move: !0,
      error_checksum_mismatch: !0
    }), m("update_apply", "update_apply_staged_checksum_mismatch"); else if (!l(s).includes("Staged binary not found")) i("tengu_native_install_binary_failure", {
      stage_atomic_move: !0,
      error_move_failed: !0,
      error_code: ug(s)
    }), m("update_apply", "update_apply_native_move_failed"); else m("update_apply", "update_apply_native_staging_missing");
    if (Ms(s)) t(`installVersionFromBinary: atomic move failed: ${l(s)}`, {
      level: "error"
    }); else d(j(s));
    throw s;
  }
}

async function Tn(e, n, r, s) {
  if (r === "npm") return Sn(e, n, s);
  return Rn(e, n, s);
}

var xn = new K(() => new Map);

async function gt(e, {forceReinstall: n, explicitVersionRequested: r, requireEnforcingRelease: s}) {
  let {stagingPath: h, installPath: w} = await ze(e), {executable: b} = Q(), y = Le("true"), S = y ? `${h}.${process.pid}.${Date.now()}.${$t(4).toString("hex")}` : h, R = xn.of(B().host), F = R.get(e), M = !(F && (F.enforcingRelease || !s)), L = {
    wasNewInstall: !1,
    moveRetried: !1,
    activationFailed: !1,
    activationRefused: !1,
    skippedUnverifiedRelease: !0
  }, N = M ? void 0 : F?.checksum, D = n || !await xt(e);
  if (!D && M) try {
    let T = await it(e, w, {
      explicitVersionRequested: r,
      requireEnforcingRelease: s
    });
    if (N = T.expectedChecksum, !T.binaryMatches) D = !0; else if (T.signatureVerified) R.set(e, {
      enforcingRelease: s,
      checksum: N
    });
  } catch (T) {
    if (T instanceof LM) {
      if (s && T.reason === "release_predates_enforcement") return L;
      throw T;
    }
    if (!r || s || !at(T)) throw T;
    t(`Could not re-verify retained ${e} (${j(T).name}); offline, activating as requested`, {
      level: "warn"
    });
  } else if (!D && F?.checksum !== void 0) {
    if (!await $e(w, F.checksum)) t(`Retained ${e} no longer matches the checksum verified earlier in this process; re-downloading`, {
      level: "warn"
    }), R.delete(e), D = !0;
  }
  let C = !1;
  if (D) {
    t(n ? `Force reinstalling native installer version ${e}` : `Downloading native installer version ${e}`), 
    await At(ne(S));
    let T, I;
    try {
      ({downloadType: T, signatureVerified: I, expectedChecksum: N} = await ot(e, S, {
        explicitVersionRequested: r,
        requireEnforcingRelease: s
      })), ({moveRetried: C} = await Tn(S, w, T, N));
    } catch (V) {
      if (s && V instanceof LM && V.reason === "release_predates_enforcement") return L;
      throw V;
    } finally {
      if (y) await he(S, {
        recursive: !0,
        force: !0
      }).catch(V => t(`Could not remove the update staging directory (a later update removes it after one hour): ${l(V)}`, {
        level: "warn"
      }));
    }
    if (I) R.set(e, {
      enforcingRelease: s,
      checksum: N
    });
  } else t(`Version ${e} already installed, updating symlink`);
  await Fn(b);
  let P = await Dn(b, w, {
    expectedChecksum: N
  });
  if (P !== "updated" && !await re(b)) {
    let T = !1;
    try {
      await X(w), T = !0;
    } catch {}
    throw m("update_apply", "update_apply_native_symlink_failed"), Error(`Failed to create executable at ${b}. Source file exists: ${T}. Either ${b} is not writable, or the existing file there was not created by the native installer and is not a working launcher \u2014 the updater will not overwrite a launcher it does not own. Remove it and re-run the update.`);
  }
  return {
    wasNewInstall: D,
    moveRetried: C,
    activationFailed: P === "failed",
    activationRefused: P === "refused",
    skippedUnverifiedRelease: !1
  };
}

async function xt(e) {
  let {installPath: n} = await ze(e);
  return re(n);
}

async function Cn() {
  if (await An()) return !0;
  let {executable: e} = Q();
  return await re(e) && !await sYe(e).catch(() => !1);
}

async function An() {
  let {versions: e, executable: n} = Q(), r = !1, s = [ {
    versions: e,
    executable: n
  } ], [h, w] = await Promise.all([ dt(e).catch(() => e), dt(ne(n)).catch(() => ne(n)) ]), b = U(w, Oe(n));
  if (h !== e || b !== n) s.push({
    versions: h,
    executable: b
  });
  return s.some(y => Pn(process.execPath, {
    ...y,
    isWindows: !1
  }));
}

function Pn(e, {versions: n, executable: r, isWindows: s}) {
  let h = y => s ? y.replaceAll("\\", "/").toLowerCase() : y, w = h(e), b = h(n).replace(/\/+$/, "") + "/";
  return w.startsWith(b) || w === h(r);
}

function In() {
  try {
    let e = k("tengu_canary", {});
    return typeof e.external === "string" && Et.valid(e.external) || null;
  } catch (e) {
    return t(`getCanaryVersion: GB read failed, falling through: ${l(e)}`), null;
  }
}

async function Mn(e, n = !1) {
  let r = Date.now(), {executable: s} = Q(), h = !/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e), {maxVersion: w, forceDowngradeEnabled: b} = await y0e(), y = b && !n && h && !!w && sKe({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION, w, "native_update"), S = y ? w : await _Cn(e), R = S.length;
  if (!vCr(S)) throw new x(`Invalid version string from ${h ? "version pointer" : "argument"}: not a well-formed version (${R} characters)`, "Invalid version string: not a well-formed version");
  t(`Checking for native installer update to version ${S}`);
  let F = h && await Cn();
  if (e === "latest" && !y) {
    let T = In(), I = T && w && Sy(T, w);
    if (T && Sy(T, S) && !I) t(`Native installer: canary ${T} active, overriding ${S}`), 
    S = T; else if (I) t(`Native installer: canary ${T} exceeds maxVersion ${w}, not applying`);
  }
  if (!y && !n && w && Sy(S, w)) {
    if (t(`Native installer: maxVersion ${w} is set, capping update from ${S} to ${w}`), 
    xw({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION, w)) return t(`Native installer: current version ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION} is already at or above maxVersion ${w}, skipping update`), i("tengu_native_update_skipped_max_version", {
      latency_ms: Date.now() - r,
      max_version: Di(w),
      available_version: Di(S)
    }), {
      success: !0,
      wasSkipped: !0,
      latestVersion: S
    };
    S = w;
  }
  if (!n && S === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION && await xt(S) && await re(s)) return t(`Found ${S} at ${s}, skipping install`), 
  i("tengu_native_update_complete", {
    latency_ms: Date.now() - r,
    was_new_install: !1,
    was_force_reinstall: !1,
    was_already_running: !0
  }), {
    success: !0,
    wasSkipped: !0,
    latestVersion: S
  };
  if (!n && iKe(S)) return i("tengu_native_update_skipped_minimum_version", {
    latency_ms: Date.now() - r,
    target_version: Di(S)
  }), {
    success: !0,
    wasSkipped: !0,
    latestVersion: S
  };
  if (y) i("tengu_native_update_forced_downgrade", {
    from_version: Di({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION),
    to_version: Di(S)
  });
  let M = !1, L = !1, N = !1, D = !1, C = !1, P;
  if (Le("true")) ({wasNewInstall: M, moveRetried: L, activationFailed: N, activationRefused: D, skippedUnverifiedRelease: C} = await gt(S, {
    forceReinstall: n,
    explicitVersionRequested: !h,
    requireEnforcingRelease: F
  })), P = Date.now() - r; else {
    let {installPath: T} = await ze(S);
    if (n) await On(T);
    let I = await Rt(T, async () => {
      ({wasNewInstall: M, moveRetried: L, activationFailed: N, activationRefused: D, skippedUnverifiedRelease: C} = await gt(S, {
        forceReinstall: n,
        explicitVersionRequested: !h,
        requireEnforcingRelease: F
      }));
    }, 3);
    if (P = Date.now() - r, !I) {
      let V = Q(), O;
      if (me()) {
        let G = ye(V, T);
        if (_e(G)) O = fe(G)?.pid;
      }
      return f("update_apply", "update_apply_native_lock_failed"), i("tengu_native_update_lock_failed", {
        latency_ms: P,
        lock_holder_pid: O
      }), {
        success: !1,
        latestVersion: S,
        lockFailed: !0,
        lockHolderPid: O
      };
    }
  }
  if (C) return i("tengu_native_update_skipped_unverified_release", {
    latency_ms: P,
    target_version: Di(S)
  }), t(`Native installer: resolved ${S} predates manifest signature enforcement; staying on ${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION}`, {
    level: "warn"
  }), {
    success: !0,
    wasSkipped: !0,
    skippedUnverifiedRelease: !0,
    latestVersion: S
  };
  if (N) f("update_apply", "update_apply_native_activation_failed_old_binary_kept"); else if (D) f("update_apply", "update_apply_native_activation_refused_external_launcher"); else if (L) f("update_apply", "update_apply_native_move_retry"); else g("update_apply");
  return i("tengu_native_update_complete", {
    latency_ms: P,
    was_new_install: M,
    was_force_reinstall: n
  }), t(`Successfully updated to version ${S}`), {
    success: !0,
    latestVersion: S
  };
}

async function Fn(e) {
  try {
    await _n(e), t(`Removed empty directory at ${e}`);
  } catch (n) {
    let r = E(n);
    if (r !== "ENOTDIR" && r !== "ENOENT" && r !== "ENOTEMPTY") t(`Could not remove directory at ${e}: ${n}`);
  }
}

async function Dn(e, n, {expectedChecksum: r} = {}) {
  if (Tye().startsWith("win32")) try {
    let y = ne(e);
    await le(y, {
      recursive: !0
    });
    let S;
    try {
      S = await X(e);
    } catch {}
    if (S) try {
      let M = await X(n);
      if (S.size === M.size && (r === void 0 || await $e(e, r))) return "noop";
    } catch {}
    let R = `${e}.new.${process.pid}.${Date.now()}.${$t(4).toString("hex")}`;
    try {
      await yt(n, R);
    } catch (M) {
      if (W(M)) throw Error(`Source file does not exist: ${n}`);
      throw M;
    }
    let F;
    try {
      F = r === void 0 || await ke(R) === r;
    } catch (M) {
      throw await te(R).catch(() => {}), M;
    }
    if (!F) return await te(R).catch(() => {}), t(`Refusing to install a launcher copy of ${n} that does not match its signed checksum`, {
      level: "error"
    }), "failed";
    try {
      let M = S !== void 0;
      if (!M) try {
        await pe(R, e);
      } catch (L) {
        let N = E(L);
        if (N !== "EEXIST" && N !== "EPERM" && N !== "EBUSY") throw L;
        M = !0;
      }
      if (M) {
        let L = kn(e);
        await pe(e, L);
        try {
          await pe(R, e);
        } catch (N) {
          try {
            await pe(L, e);
          } catch (D) {
            let C = Error(`Failed to restore old executable: ${D}`, {
              cause: N
            });
            throw d(C), C;
          }
          throw N;
        }
      }
    } catch (M) {
      throw await te(R).catch(() => {}), M;
    }
    return "updated";
  } catch (y) {
    return t(`Failed to copy executable from ${n} to ${e}: ${y}`, {
      level: "error"
    }), "failed";
  }
  let w = ne(e);
  try {
    await le(w, {
      recursive: !0
    }), t(`Created directory ${w} for symlink`);
  } catch (y) {
    return t(`Failed to create directory ${w}: ${y}`, {
      level: "error"
    }), "failed";
  }
  try {
    return await mt(n, e), t(`Created symlink ${e} -> ${n}`), "updated";
  } catch (y) {
    if (E(y) !== "EEXIST") return t(`Failed to create symlink from ${e} to ${n}: ${y}`, {
      level: "error"
    }), "failed";
  }
  if (!await Axt(e) && !await sYe(e).catch(() => !1)) return t(`Not replacing ${e}: it was not created by the native installer (not a symlink into a claude/versions/ directory) and is not an npm shim, so this update will not overwrite it. New versions still install under the versions/ directory; remove ${e} and re-run the update to let the installer manage the launcher again.`, {
    level: "warn"
  }), "refused";
  let b = `${e}.tmp.${process.pid}.${Date.now()}`;
  try {
    return await mt(n, b), await pe(b, e), t(`Atomically updated symlink ${e} -> ${n}`), 
    "updated";
  } catch (y) {
    try {
      await te(b);
    } catch {}
    return t(`Failed to create symlink from ${e} to ${n}: ${y}`, {
      level: "error"
    }), "failed";
  }
}

async function tKe(e = !1) {
  if (Le(process.env.DISABLE_INSTALLATION_CHECKS)) return [];
  let n = await g0e();
  if (n === "development") return [];
  let r = ce();
  if (!(e || n === "native" || r.installMethod === "native")) return [];
  let h = Q(), w = [], b = [], y = ne(h.executable), S = oe(y), F = Tye().startsWith("win32");
  try {
    await pn(y);
  } catch {
    w.push({
      message: `claude command at ${h.executable} missing or broken (${y} does not exist)`,
      userActionRequired: !0,
      type: "error"
    }), b.push("bin_dir_missing");
  }
  if (F) {
    if (!await re(h.executable)) w.push({
      message: `claude command at ${h.executable} missing or broken`,
      userActionRequired: !0,
      type: "error"
    }), b.push("executable_missing");
  } else try {
    let L = await vt(h.executable), N = oe(ne(h.executable), L);
    if (!await re(N)) w.push({
      message: `claude command at ${h.executable} missing or broken (symlink points to ${L})`,
      userActionRequired: !0,
      type: "error"
    }), b.push("executable_invalid");
  } catch (L) {
    if (W(L)) w.push({
      message: `claude command at ${h.executable} missing or broken`,
      userActionRequired: !0,
      type: "error"
    }), b.push("executable_missing"); else if (!await re(h.executable)) w.push({
      message: `claude command at ${h.executable} missing or broken (not a valid Claude binary)`,
      userActionRequired: !0,
      type: "error"
    }), b.push("executable_invalid");
  }
  if (!(a.PATH || "").split(yn).some(L => {
    try {
      let N = oe(L);
      if (F) return N.toLowerCase() === S.toLowerCase();
      return N === S;
    } catch {
      return !1;
    }
  })) if (b.push("not_in_path"), F) {
    let L = y.replaceAll("/", "\\");
    w.push({
      message: `Native installation exists but ${L} is not in your PATH. Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.`,
      userActionRequired: !0,
      type: "path"
    });
  } else {
    let L = Vnt(), D = oKe()[L], C = D ? D.replace(kt(), "~") : "your shell config file";
    w.push({
      message: `Native installation exists but ~/.local/bin is not in your PATH. Run:\n\necho 'export PATH="$HOME/.local/bin:$PATH"' >> ${C} && source ${C}`,
      userActionRequired: !0,
      type: "path"
    });
  }
  if (b.length === 0) g("native_check_install"); else f("native_check_install", b[0]);
  return w;
}

class Ct {
  inFlight=null;
  begin(e) {
    this.inFlight = e;
  }
  reset() {
    this.inFlight = null;
  }
}

var Ln = new K(() => new Ct);

function nKe(e, n = !1, r) {
  if (n) return ht(e, n, r);
  let s = Ln.of(B().host);
  if (s.inFlight) return t("installLatest: joining in-flight call"), s.inFlight;
  let h = ht(e, n, r);
  s.begin(h);
  let w = () => {
    s.reset();
  };
  return h.then(w, w), h;
}

async function ht(e, n = !1, r) {
  let s = await Mn(e, n);
  if (!s.success) return {
    latestVersion: null,
    wasUpdated: !1,
    lockFailed: s.lockFailed,
    lockHolderPid: s.lockHolderPid
  };
  if (s.skippedUnverifiedRelease) return {
    latestVersion: s.latestVersion,
    wasUpdated: !1,
    wasSkipped: !0,
    skippedUnverifiedRelease: !0,
    lockFailed: !1
  };
  if (ce().installMethod !== "native") await Ce(w => ({
    ...w,
    installMethod: "native",
    autoUpdates: !1,
    autoUpdatesProtectedForNative: !0
  }), r), t('Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection');
  return eir(), {
    latestVersion: s.latestVersion,
    wasUpdated: s.success && !s.wasSkipped,
    wasSkipped: s.wasSkipped,
    lockFailed: !1
  };
}

async function Nn(e) {
  try {
    let n = await vt(e), r = oe(ne(e), n);
    if (await re(r)) return r;
  } catch {}
  return null;
}

function ye(e, n) {
  let r = Oe(n);
  return U(e.locks, `${r}.lock`);
}

async function Aye() {
  let e = Q();
  if (!process.execPath.includes(e.versions)) return;
  let n = oe(process.execPath);
  try {
    let r = ye(e, n);
    if (await le(e.locks, {
      recursive: !0
    }), me()) {
      if (!await lt(n, r)) {
        i("tengu_version_lock_failed", {
          is_pid_based: !0,
          is_lifetime_lock: !0
        }), Se(n, Error("Lock already held by another process"));
        return;
      }
      i("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !0
      }), t(`Acquired PID lock on running version: ${n}`);
    } else {
      let s;
      try {
        s = await Ja(n, {
          stale: Ve,
          retries: 0,
          lockfilePath: r,
          onCompromised: h => {
            t(`NON-FATAL: Lock on running version was compromised: ${h.message}`, {
              level: "info"
            });
          }
        }), i("tengu_version_lock_acquired", {
          is_pid_based: !1,
          is_lifetime_lock: !0
        }), t(`Acquired mtime-based lock on running version: ${n}`), bt(async () => {
          try {
            await (s?.());
          } catch {}
        });
      } catch (h) {
        if (W(h)) {
          t(`Cannot lock current version - file does not exist: ${n}`, {
            level: "info"
          });
          return;
        }
        i("tengu_version_lock_failed", {
          is_pid_based: !1,
          is_lifetime_lock: !0
        }), Se(n, h);
        return;
      }
    }
  } catch (r) {
    if (W(r)) {
      t(`Cannot lock current version - file does not exist: ${n}`, {
        level: "info"
      });
      return;
    }
    t(`NON-FATAL: Failed to lock current version during execution ${l(r)}`, {
      level: "info"
    });
  }
}

function Se(e, n) {
  t(`NON-FATAL: Lock acquisition failed for ${e} (expected in multi-process scenarios): ${l(n)}`, {
    level: "error"
  });
}

async function On(e) {
  let n = Q(), r = ye(n, e);
  try {
    await te(r), t(`Force-removed lock file at ${r}`);
  } catch (s) {
    t(`Failed to force-remove lock file: ${l(s)}`);
  }
}

var Vn = 36e5;

async function At(e) {
  let n = Date.now() - Vn;
  try {
    let r = await Ee(e), s = 0;
    for (let h of r) {
      let w = U(e, h);
      try {
        if ((await X(w)).mtime.getTime() < n) await he(w, {
          recursive: !0,
          force: !0
        }), s++, t(`Cleaned up old staging directory: ${h}`);
      } catch {}
    }
    if (s > 0) t(`Cleaned up ${s} orphaned staging directories`), i("tengu_native_staging_cleanup", {
      cleaned_count: s
    });
  } catch (r) {
    if (!W(r)) t(`Failed to clean up staging directories: ${r}`);
  }
}

async function eir() {
  await Promise.resolve();
  let e = Q(), n = Date.now() - 36e5, r = Date.now() - 12096e5, s = Date.now() - $n;
  if (Tye().startsWith("win32")) {
    let y = ne(e.executable), S = Oe(e.executable);
    try {
      let R = await Ee(y), F = R.flatMap(P => {
        let T = En(P, S);
        return T === void 0 ? [] : [ {
          file: P,
          ...T
        } ];
      }), M = F.filter(P => P.kind === "backup").sort((P, T) => T.stampedMs - P.stampedMs), L = R.find(P => P.toLowerCase() === S.toLowerCase()), N = M.length > 0 && !(L !== void 0 && await St(U(y, L))), D = N ? await bn(M, P => U(y, P.file)) : void 0, C = 0;
      for (let P of F) {
        if (P.kind === "backup" && N && (P === D && P.stampedMs >= s || P.stampedMs >= r)) continue;
        try {
          let T = U(y, P.file);
          if (P.stampedMs >= n || (await X(T)).mtime.getTime() >= n) continue;
          await te(T), C++;
        } catch {}
      }
      if (C > 0) t(`Cleaned up ${C} old Windows executables on startup`);
    } catch (R) {
      if (!W(R)) t(`Failed to clean up old Windows executables: ${R}`);
    }
  }
  if (await At(e.staging), me()) {
    let y = await ut(e.locks);
    if (y > 0) t(`Cleaned up ${y} stale version locks`), i("tengu_native_stale_locks_cleanup", {
      cleaned_count: y
    });
  }
  let h;
  try {
    h = await Ee(e.versions);
  } catch (y) {
    if (!W(y)) t(`Failed to readdir versions directory: ${y}`), f("native_cleanup_versions", "readdir_failed"); else g("native_cleanup_versions");
    return;
  }
  let w = [], b = 0;
  for (let y of h) {
    let S = U(e.versions, y);
    if (/\.tmp\.\d+\.\d+(\.\d+)?$/.test(y)) {
      try {
        if ((await X(S)).mtime.getTime() < n) await te(S), b++, t(`Cleaned up orphaned temp install file: ${y}`);
      } catch {}
      continue;
    }
    try {
      let R = await X(S);
      if (!R.isFile()) continue;
      if (R.size > 0 && (R.mode & 73) === 0) continue;
      w.push({
        name: y,
        path: S,
        resolvedPath: oe(S),
        mtime: R.mtime,
        size: R.size
      });
    } catch {}
  }
  if (b > 0) t(`Cleaned up ${b} orphaned temp install files`), i("tengu_native_temp_files_cleanup", {
    cleaned_count: b
  });
  if (w.length === 0) {
    g("native_cleanup_versions");
    return;
  }
  if (!await Axt(e.executable) && !await sYe(e.executable).catch(() => !1)) {
    t(`Skipping native version cleanup: the launcher at ${e.executable} is externally managed, so the version(s) it needs cannot be determined`), 
    f("native_cleanup_versions", "skipped_external_launcher");
    return;
  }
  try {
    let y = process.execPath, S = new Set;
    if (y && y.includes(e.versions)) S.add(oe(y));
    let R = await Nn(e.executable);
    if (R) S.add(R); else if (Tye().startsWith("win32")) try {
      let C = await X(e.executable);
      for (let P of w) if (P.size === C.size) S.add(P.resolvedPath);
    } catch {}
    for (let C of w) {
      if (S.has(C.resolvedPath)) continue;
      let P = ye(e, C.resolvedPath), T = !1;
      if (me()) T = _e(P); else try {
        T = await r$s(C.resolvedPath, {
          stale: Ve,
          lockfilePath: P
        });
      } catch {
        T = !1;
      }
      if (T) S.add(C.resolvedPath), t(`Protecting locked version from cleanup: ${C.name}`);
      await new Promise(I => setImmediate(I));
    }
    let F = w.filter(C => !S.has(C.resolvedPath)).sort((C, P) => P.mtime.getTime() - C.mtime.getTime()), M = [ ...F.filter(C => C.size > 0).slice(Ne), ...F.filter(C => C.size === 0 && C.mtime.getTime() < n) ];
    if (M.length === 0) {
      i("tengu_native_version_cleanup", {
        total_count: w.length,
        deleted_count: 0,
        protected_count: S.size,
        retained_count: Ne,
        lock_failed_count: 0,
        error_count: 0
      }), g("native_cleanup_versions");
      return;
    }
    let L = 0, N = 0, D = 0;
    if (await Promise.all(M.map(async C => {
      try {
        let P = !0, T = await Rt(C.path, async () => {
          if (C.size === 0) {
            let I = await X(C.path);
            if (I.size > 0 || I.mtime.getTime() >= n) {
              P = !1;
              return;
            }
          }
          await te(C.path);
        });
        if (T && P) L++; else if (!T) N++, t(`Skipping deletion of ${C.name} - locked by another process`);
      } catch (P) {
        D++, t(`Failed to delete version ${C.name}: ${P}`, {
          level: "error"
        });
      }
    })), i("tengu_native_version_cleanup", {
      total_count: w.length,
      deleted_count: L,
      protected_count: S.size,
      retained_count: Ne,
      lock_failed_count: N,
      error_count: D
    }), D > 0) f("native_cleanup_versions", "delete_errors"); else if (N > 0) f("native_cleanup_versions", "lock_failed"); else g("native_cleanup_versions");
  } catch (y) {
    if (!W(y)) d(Error(`Version cleanup failed: ${y}`)), f("native_cleanup_versions", "unexpected_error"); else g("native_cleanup_versions");
  }
}

async function ikt() {
  let e = Q();
  try {
    if (await sYe(e.executable).catch(n => {
      if (W(n)) return !1;
      throw n;
    })) {
      t(`Skipping removal of ${e.executable} - appears to be npm-managed`), g("native_remove_symlink");
      return;
    }
    if (!await Axt(e.executable)) {
      t(`Skipping removal of ${e.executable} - not created by the native installer`), 
      g("native_remove_symlink");
      return;
    }
    await te(e.executable), t(`Removed claude symlink at ${e.executable}`), g("native_remove_symlink");
  } catch (n) {
    if (W(n)) {
      g("native_remove_symlink");
      return;
    }
    t(`Failed to remove claude symlink: ${n}`, {
      level: "error"
    }), m("native_remove_symlink", "unlink_failed");
  }
}

async function xJr() {
  let e = [], n = oKe(), r = !1;
  for (let [s, h] of Object.entries(n)) try {
    let w = await wCn(h);
    if (!w) continue;
    let {filtered: b, hadAlias: y} = rir(w);
    if (y) await oir(h, b), e.push({
      message: `Removed claude alias from ${h}. Run: unalias claude`,
      userActionRequired: !0,
      type: "alias"
    }), t(`Cleaned up claude alias from ${s} config`);
  } catch (w) {
    r = !0, t(`Failed to clean up claude alias from ${h}: ${w}`, {
      level: "error"
    }), e.push({
      message: `Failed to clean up ${h}: ${w}`,
      userActionRequired: !1,
      type: "error"
    });
  }
  if (r) f("native_cleanup_aliases", "config_write_failed"); else g("native_cleanup_aliases");
  return e;
}

async function zn(e) {
  try {
    let n = await ft("npm", [ "config", "get", "prefix" ], {
      useToolMemoryCgroup: !1
    });
    if (n.code !== 0 || !n.stdout) return {
      success: !1,
      error: "Failed to get npm global prefix"
    };
    let r = n.stdout.trim(), s = !1;
    async function h(w, b) {
      try {
        return await te(w), t(`Manually removed ${b}: ${w}`), !0;
      } catch {
        return !1;
      }
    }
    if (Tye().startsWith("win32")) {
      let w = U(r, "claude.cmd"), b = U(r, "claude.ps1"), y = U(r, "claude");
      if (await h(w, "bin script")) s = !0;
      if (await h(b, "PowerShell script")) s = !0;
      if (await h(y, "bin executable")) s = !0;
    } else {
      let w = U(r, "bin", "claude");
      if (await h(w, "bin symlink")) s = !0;
    }
    if (s) {
      t(`Successfully removed ${e} manually`);
      let w = Tye().startsWith("win32") ? U(r, "node_modules", e) : U(r, "lib", "node_modules", e);
      return {
        success: !0,
        warning: `${e} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: ${w}`
      };
    } else return {
      success: !1
    };
  } catch (n) {
    return t(`Manual removal failed: ${n}`, {
      level: "error"
    }), {
      success: !1,
      error: `Manual removal failed: ${n}`
    };
  }
}

async function wt(e) {
  let {code: n, stderr: r} = await ft("npm", [ "uninstall", "-g", e ], {
    cwd: process.cwd(),
    useToolMemoryCgroup: !1
  });
  if (n === 0) return t(`Removed global npm installation of ${e}`), {
    success: !0
  }; else if (r && !r.includes("npm ERR! code E404")) {
    if (r.includes("npm error code ENOTEMPTY")) {
      t(`Failed to uninstall global npm package ${e}: ${r}`, {
        level: "error"
      }), t("Attempting manual removal due to ENOTEMPTY error");
      let s = await zn(e);
      if (s.success) return {
        success: !0,
        warning: s.warning
      }; else if (s.error) return {
        success: !1,
        error: `Failed to remove global npm installation of ${e}: ${r}. Manual removal also failed: ${s.error}`
      };
    }
    return t(`Failed to uninstall global npm package ${e}: ${r}`, {
      level: "error"
    }), {
      success: !1,
      error: `Failed to remove global npm installation of ${e}: ${r}`
    };
  }
  return {
    success: !1
  };
}

async function PJr() {
  let e = [], n = [], r = 0, s = !1, h = !1, w = await wt("@anthropic-ai/claude-code");
  if (w.success) {
    if (r++, w.warning) n.push(w.warning);
  } else if (w.error) e.push(w.error), s = !0;
  if ({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.PACKAGE_URL && {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.PACKAGE_URL !== "@anthropic-ai/claude-code") {
    let y = await wt({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL);
    if (y.success) {
      if (r++, y.warning) n.push(y.warning);
    } else if (y.error) e.push(y.error), s = !0;
  }
  let b = U(kt(), ".claude", "local");
  try {
    await he(b, {
      recursive: !0
    }), r++, t(`Removed local installation at ${b}`);
  } catch (y) {
    if (!W(y)) e.push(`Failed to remove ${b}: ${y}`), t(`Failed to remove local installation: ${y}`, {
      level: "error"
    }), h = !0;
  }
  if (e.length === 0) g("native_cleanup_npm"); else if (r > 0) f("native_cleanup_npm", "partial_errors"); else if (s && !h) m("native_cleanup_npm", "npm_uninstall_failed"); else if (h && !s) m("native_cleanup_npm", "local_install_remove_failed"); else m("native_cleanup_npm", "npm_uninstall_failed");
  return {
    removed: r,
    errors: e,
    warnings: n
  };
}

export { LM, _Cn, A4t, Tye, bCn, C4t, tKe, nKe, Aye, eir, ikt, xJr, PJr };
