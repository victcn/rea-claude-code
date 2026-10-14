// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { x, l, E, zr, yD } from "./chunk-b0z4bv3v.js";

import { he } from "./chunk-3pqddg8f.js";

import { Cee, fgt } from "./chunk-9yajep3y.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { k } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { ba } from "./chunk-cjt10y7b.js";

import { uh, eZ, Rz, r_o, Xks, Jks, Zks, lMt, o_o, eTs, tTs } from "./chunk-j4rs03r7.js";

import { Ta } from "./chunk-pqzqmnjf.js";

import { L } from "./chunk-vh1p9t2h.js";

import { en } from "./chunk-0qwx38yy.js";

var gEr = "[Image: ", sMt = "[Image source: ";

var _e = new Set([ ".png", ".jpg", ".jpeg", ".gif", ".bmp", ".ico", ".webp", ".tiff", ".tif", ".mp4", ".mov", ".avi", ".mkv", ".webm", ".wmv", ".flv", ".m4v", ".mpeg", ".mpg", ".mp3", ".wav", ".ogg", ".flac", ".aac", ".m4a", ".wma", ".aiff", ".opus", ".zip", ".tar", ".gz", ".bz2", ".7z", ".rar", ".xz", ".z", ".tgz", ".iso", ".exe", ".dll", ".so", ".dylib", ".bin", ".o", ".a", ".obj", ".lib", ".app", ".msi", ".deb", ".rpm", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".odt", ".ods", ".odp", ".ttf", ".otf", ".woff", ".woff2", ".eot", ".pyc", ".pyo", ".class", ".jar", ".war", ".ear", ".node", ".wasm", ".rlib", ".sqlite", ".sqlite3", ".db", ".mdb", ".idx", ".psd", ".ai", ".eps", ".sketch", ".fig", ".xd", ".blend", ".3ds", ".max", ".swf", ".fla", ".lockb", ".dat", ".data" ]);

function Lxe(e) {
  let n = e.slice(e.lastIndexOf(".")).toLowerCase();
  return _e.has(n);
}

var be = /[\u2018-\u201F]/;

function t1n(e, n = "value") {
  let r = be.exec(e);
  if (r) {
    let o = (r[0].codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0");
    throw new x(`Cannot safely quote ${n} in a PowerShell single-quoted string literal: it contains U+${o}, which PowerShell's tokenizer treats as a quote delimiter`, "psSingleQuotedLiteral: rejected a PowerShell quote-variant codepoint (U+2018..U+201F)");
  }
  return `'${e.replaceAll("'", "''")}'`;
}

var we = [ "image_dimensions_too_large", "image_processing_failed", "unsupported_file_format", "image_format_mismatch", "image_too_large", "file_too_large", "file_limit_exceeded", "upload_busy", "upload_timeout" ], zY = 8e3;

function ye(e) {
  return we.some(n => n === e);
}

function lct(e) {
  return ye(e) ? e : void 0;
}

function Z(e) {
  switch (e) {
   case "image_dimensions_too_large":
    return {
      cause: `the image is more than ${zY} pixels wide or tall`,
      remedy: `send a copy scaled to at most ${zY} pixels on its longer side, or send it in a non-image format such as a .zip`
    };

   case "image_processing_failed":
    return {
      cause: "the server could not process this image (it may be damaged, truncated, not an image format it can decode, or took too long to convert)",
      remedy: "re-export it as PNG or JPEG, or send it inside a .zip"
    };

   case "unsupported_file_format":
    return {
      cause: "the file's contents are an image format the server does not accept, whatever its extension says (it accepts PNG, JPEG, GIF and WebP)",
      remedy: "convert it to one of those or send it inside a .zip"
    };

   case "image_format_mismatch":
    return {
      cause: "the image's contents do not match its file extension (for example JPEG data in a .png file)",
      remedy: "rename or re-export it so the two agree"
    };

   case "image_too_large":
    return {
      cause: "images have a lower size limit than other files",
      remedy: "reduce this image's file size, or send it in a non-image format such as a .zip"
    };

   case "file_too_large":
    return {
      cause: "the file is larger than the server's upload size limit",
      remedy: "send a smaller or compressed copy"
    };

   case "file_limit_exceeded":
    return {
      cause: "this account has uploaded as many files as it is allowed for now (a count of files, not a size)",
      remedy: "sending again, even a smaller file, will fail the same way until the allowance resets, so tell the user instead of retrying",
      stop: !0
    };

   case "upload_busy":
    return {
      cause: "the server is busy with other large uploads",
      remedy: "try again shortly",
      passes: !0
    };

   case "upload_timeout":
    return {
      cause: "the server timed out receiving the file",
      remedy: "try again",
      passes: !0
    };
  }
}

var H = /^upload failed: server returned (\d+)$/, ee = /^upload failed: (?:network error \(|the connection closed before the server answered$|the server did not answer within \d|the transfer stalled \()/, te = /\bInvalid URL\b|certificate/i, Ee = new Set([ 429, 500, 502, 503, 504, 520, 521, 522, 523, 524, 529 ]);

function Jyo(e, n, r = !1) {
  let o = lct(n);
  if (o === void 0) return e;
  let {cause: u, remedy: a, stop: s} = Z(o), m = [ ...H.test(e) ? [ u ] : [], ...r && !s ? [] : [ a ] ];
  return m.length === 0 ? e : `${e} \u2014 ${m.join("; ")}`;
}

var ZBn = 31457280;

function Qyo(e) {
  let n = e / 1048576;
  return `${Number.isInteger(n) ? n : n.toFixed(1)} MiB`;
}

var Ie = new Set([ 502, 503, 504, 520, 524 ]);

function hEr(e, n) {
  if (lct(n) !== void 0) return !1;
  return Ie.has(Number(H.exec(e)?.[1])) || ee.test(e) && !te.test(e);
}

function Zyo(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0;
}

function xe(e) {
  return Zyo(e.upload_suspected_limit_bytes) && e.size > ZBn && hEr(e.upload_error, e.upload_error_code);
}

function e1n(e) {
  return xe(e) ? `${e.upload_error} \u2014 the cause is unknown and may pass. If the same file fails like this again, it may be over the upload limit that applies to this session, which was not named and is never under ${Qyo(ZBn)}` : Jyo(e.upload_error, e.upload_error_code);
}

function Se(e, n) {
  let r = lct(n);
  if (r !== void 0) return Z(r).passes === !0;
  return Ee.has(Number(H.exec(e)?.[1])) || ee.test(e) && !te.test(e);
}

function iMt(e) {
  let n = e.filter(a => Se(a.upload_error, a.upload_error_code));
  if (n.length === 0) return "";
  let r = I(n.length, "failure"), o = `also tell the user they can ask you to send ${I(n.length, "it", "them")} again in a few minutes.`;
  if (n.length === e.length) return ` The ${r} may be temporary, so ${o}`;
  return ` For ${new Intl.ListFormat("en", {
    type: "conjunction"
  }).format(n.map(a => a.path))}, whose ${r} may be temporary, ${o}`;
}

var Pe = zY * zY, Be = 4, Re = Ta(Be, e => e.toBuffer()), ne = 100, re = new WeakMap;

function oe() {
  return Promise.reject(Object.assign(Error("Image is too costly to decode"), {
    code: "ERR_IMAGE_DECODE_FAILED"
  }));
}

function C(e) {
  return {
    metadata: () => e.metadata(),
    resize: (n, r, o) => C(e.resize(n, r, o)),
    rotate: n => C(e.rotate(n)),
    jpeg: n => C(e.jpeg(n)),
    png: n => C(e.png(n)),
    webp: n => C(e.webp(n)),
    toBuffer: () => Re(e)
  };
}

function j() {
  return {
    metadata: oe,
    resize: j,
    rotate: j,
    jpeg: j,
    png: j,
    webp: j,
    toBuffer: oe
  };
}

function Te(e) {
  let n = tTs(e) ?? e;
  if (!he()) return new Bun.Image(n);
  let r = re.get(n);
  if (r === void 0) r = Xks(n, ne) > ne ? null : Jks(n), re.set(n, r);
  return r === null ? j() : C(new Bun.Image(r, {
    maxPixels: Pe
  }));
}

function Cz() {
  return Promise.resolve(Te);
}

var Ae = 1568, ze = 1568, Me = 85, ae = 5, Ce = 10, je = 1398100;

function q(e, n, r = Ae, o = ze) {
  if (e <= r && n <= r && fgt(e, n) <= o) return [ e, n ];
  if (n > e) {
    let [m, h] = q(n, e, r, o);
    return [ h, m ];
  }
  let u = e / n, a = 1, s = e;
  while (a + 1 < s) {
    let m = a + s >> 1, h = Math.max(Math.round(m / u), 1);
    if (m <= r && fgt(m, h) <= o) a = m; else s = m;
  }
  return [ a, Math.max(Math.round(a / u), 1) ];
}

function Y(e, n, r) {
  if (e > r.maxWidth) n = Math.round(n * r.maxWidth / e), e = r.maxWidth;
  if (n > r.maxHeight) e = Math.round(e * r.maxHeight / n), n = r.maxHeight;
  return r.maxImageTokens === void 0 ? [ e, n ] : q(e, n, 1 / 0, r.maxImageTokens);
}

async function yEr(e) {
  let n = await Cz(), r = Buffer.from(e.buffer, e.byteOffset, e.byteLength), o = await n(r).metadata(), [u, a] = q(o.width, o.height), s = u !== o.width || a !== o.height, m = Me + ae, h;
  do {
    m -= ae;
    let w = n(r);
    if (s) w = w.resize(u, a, {
      fit: "fill"
    });
    h = await w.jpeg({
      quality: m
    }).toBuffer();
  } while (h.length * 4 > je * 3 && m > Ce);
  return {
    jpeg: h,
    w: u,
    h: a
  };
}

var Oe = 2, ue = 3, ve = 4, We = 5, $e = 8, ke = 9, J = 10, De = "tengu_parsed_eagle", le = new Set([ "png", "jpeg", "gif", "webp" ]);

function fe(e) {
  switch (e) {
   case "jpeg":
   case "jpg":
    return "jpeg";

   case "webp":
    return "webp";

   default:
    return "png";
  }
}

class MN extends Error {
  constructor(e) {
    super(e);
    this.name = "ImageResizeError";
  }
}

function ce(e) {
  if (r_o(e) === 4) return {
    reason: "it is a CMYK JPEG, which Claude Code cannot decode",
    advice: "Re-save it as an RGB PNG or JPEG and try again."
  };
  if (lMt(e)) return {
    reason: "it is an animated WebP whose first frame Claude Code cannot decode",
    advice: "Save its first frame as a PNG or JPEG and try again."
  };
  return {
    reason: "its pixels could not be decoded (the file may be damaged, or use an encoding Claude Code cannot read)",
    advice: "Re-save it as a PNG or JPEG and try again."
  };
}

function VFe(e) {
  switch (E(e)) {
   case "ERR_IMAGE_DECODE_FAILED":
    return J;

   case "ERR_IMAGE_UNKNOWN_FORMAT":
    return Oe;

   case "ERR_IMAGE_TOO_MANY_PIXELS":
    return ve;

   case "ERR_IMAGE_FORMAT_UNSUPPORTED":
    return ke;

   case "EACCES":
   case "EPERM":
    return $e;

   case "ENOMEM":
    return We;

   default:
    return ue;
  }
}

function KFe(e) {
  return e === ue;
}

function de(e) {
  if (!(e instanceof Error)) return {
    error_name: c(typeof e),
    error_code: b("")
  };
  return {
    error_name: yD(e.name !== "Error" ? e.name : e.constructor?.name) ?? b("Error"),
    error_code: zr(e) ?? b("")
  };
}

function me(e) {
  let n = uh(e);
  return {
    ...n === "image/jpeg" && {
      jpeg_components: r_o(e)
    },
    ...n === "image/webp" && {
      webp_animated: lMt(e)
    }
  };
}

function pe(e) {
  let n = 5381;
  for (let r = 0; r < e.length; r++) n = (n << 5) + n + e.charCodeAt(r) | 0;
  return n >>> 0;
}

function N(e) {
  return {
    rejectMaxWidth: e.rejectMaxWidth ?? e.maxWidth,
    rejectMaxHeight: e.rejectMaxHeight ?? e.maxHeight
  };
}

async function R6e(e, n, r, o, {timings: u, directWebpMaxBytes: a} = {}) {
  if (e.length === 0) throw new MN("Image file is empty (0 bytes)");
  try {
    let s = await Cz(), m = await s(e).metadata(), h = m.format ?? r, w = h === "jpg" ? "jpeg" : h, p = e, B = n;
    if (!le.has(w)) {
      let {width: R, height: T} = m, z = R === void 0 || T === void 0 ? void 0 : Y(R, T, o), M = z !== void 0 && z[0] === R && z[1] === T ? (await se(() => s(e), a)).webp : void 0;
      p = M ?? await s(e).png().toBuffer(), B = p.length, m = await s(p).metadata(), w = M ? "webp" : "png";
    }
    if (!m.width || !m.height) {
      let R = Rz(p), {rejectMaxWidth: T, rejectMaxHeight: z} = N(o);
      if (R === void 0 || R.width > T || R.height > z) throw new MN(`Unable to resize image \u2014 could not verify image dimensions are within the ${T}x${z}px API limit.`);
      if (B > o.targetRawSize) return i("tengu_image_resize", {
        over_byte_limit: !0,
        over_dimension_limit: !1,
        resized_for_tokens: !1,
        original_size_bytes: B
      }), {
        buffer: await s(p).jpeg({
          quality: 80
        }).toBuffer(),
        mediaType: "jpeg"
      };
      return {
        buffer: p,
        mediaType: w
      };
    }
    let _ = m.width, S = m.height, [y, P] = Y(_, S, o), A = y !== _ || P !== S;
    if (B <= o.targetRawSize && !A) return {
      buffer: p,
      mediaType: w,
      dimensions: {
        originalWidth: _,
        originalHeight: S,
        displayWidth: y,
        displayHeight: P
      }
    };
    let D = w === "png";
    if (i("tengu_image_resize", {
      over_byte_limit: B > o.targetRawSize,
      over_dimension_limit: _ > o.maxWidth || S > o.maxHeight,
      resized_for_tokens: A && y < o.maxWidth && P < o.maxHeight,
      original_size_bytes: B,
      original_width: _,
      original_height: S,
      target_width: y,
      target_height: P,
      max_width: o.maxWidth,
      max_height: o.maxHeight,
      max_image_tokens: o.maxImageTokens
    }), !A && B > o.targetRawSize) {
      if (D) {
        let R = await ie(() => s(p).png({
          compressionLevel: 9,
          palette: !0
        }).toBuffer(), u);
        if (R.length <= o.targetRawSize) return {
          buffer: R,
          mediaType: "png",
          dimensions: {
            originalWidth: _,
            originalHeight: S,
            displayWidth: y,
            displayHeight: P
          }
        };
      }
      for (let R of [ 80, 60, 40, 20 ]) {
        let T = await s(p).jpeg({
          quality: R
        }).toBuffer();
        if (T.length <= o.targetRawSize) return {
          buffer: T,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: _,
            originalHeight: S,
            displayWidth: y,
            displayHeight: P
          }
        };
      }
    }
    t(`Resizing to ${y}x${P}`);
    let O = A && a !== void 0 && _ <= N(o).rejectMaxWidth && S <= N(o).rejectMaxHeight && o_o(p) ? "png" : fe(w), U = s(p).resize(y, P, {
      fit: "inside",
      withoutEnlargement: !0
    });
    if (O !== w) U = U.png();
    let G = O === "png" ? await se(() => s(p).resize(y, P, {
      fit: "inside",
      withoutEnlargement: !0
    }), a) : {}, Q = G.webp ?? await U.toBuffer();
    if (Q.length > o.targetRawSize) {
      if (D) {
        let M = await ie(() => s(p).resize(y, P, {
          fit: "inside",
          withoutEnlargement: !0
        }).png({
          compressionLevel: 9,
          palette: !0
        }).toBuffer(), u);
        if (M.length <= o.targetRawSize) return {
          buffer: M,
          mediaType: "png",
          dimensions: {
            originalWidth: _,
            originalHeight: S,
            displayWidth: y,
            displayHeight: P
          }
        };
      }
      for (let M of [ 80, 60, 40, 20 ]) {
        let V = await s(p).resize(y, P, {
          fit: "inside",
          withoutEnlargement: !0
        }).jpeg({
          quality: M
        }).toBuffer();
        if (V.length <= o.targetRawSize) return {
          buffer: V,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: _,
            originalHeight: S,
            displayWidth: y,
            displayHeight: P
          }
        };
      }
      let R = Math.min(y, 1e3), T = Math.round(P * R / Math.max(y, 1));
      t("Still too large, compressing with JPEG");
      let z = await s(p).resize(R, T, {
        fit: "inside",
        withoutEnlargement: !0
      }).jpeg({
        quality: 20
      }).toBuffer();
      return t(`JPEG compressed buffer size: ${z.length}`), {
        buffer: z,
        mediaType: "jpeg",
        dimensions: {
          originalWidth: _,
          originalHeight: S,
          displayWidth: R,
          displayHeight: T
        }
      };
    }
    return {
      buffer: Q,
      mediaType: G.webp ? "webp" : O,
      dimensions: {
        originalWidth: _,
        originalHeight: S,
        displayWidth: y,
        displayHeight: P
      },
      losslessWebp: G.lossless
    };
  } catch (s) {
    if (s instanceof MN) throw s;
    let m = VFe(s), h = l(s);
    if (KFe(m)) d(s); else t(`Image resize failed: ${h}`, {
      level: "error"
    });
    i("tengu_image_resize_failed", {
      original_size_bytes: n,
      error_type: m,
      error_message_hash: pe(h),
      ...de(s),
      ...me(e)
    });
    let p = eZ(e).slice(6), B = Math.ceil(n * 4 / 3), _ = Rz(e);
    if (_ === void 0) throw new MN("Unable to resize image \u2014 image processing is unavailable and dimensions could not be read from the file header. " + "Please convert the image to PNG, JPEG, GIF, or WebP.");
    let {rejectMaxWidth: S, rejectMaxHeight: y} = N(o), P = _.width > S || _.height > y;
    if (B <= o.maxBase64Size && !P) return i("tengu_image_resize_fallback", {
      original_size_bytes: n,
      base64_size_bytes: B,
      error_type: m
    }), {
      buffer: e,
      mediaType: p
    };
    if (m === J) {
      let {reason: A, advice: D} = ce(e), O = P ? `at ${_.width}x${_.height}px it is over the ${S}x${y}px limit` : `it is over the ${en(o.maxBase64Size)} API limit (${en(n)} raw, ${en(B)} base64)`;
      throw new MN(`Unable to resize image \u2014 ${A}, and ${O}, so it cannot be sent. ${D}`);
    }
    throw new MN(P ? `Unable to resize image \u2014 dimensions exceed the ${S}x${y}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.` : `Unable to resize image (${en(n)} raw, ${en(B)} base64). The image exceeds the ${en(o.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`);
  }
}

async function ie(e, n) {
  let r = performance.now();
  try {
    return await e();
  } finally {
    if (n !== void 0) n.pngPaletteMs += performance.now() - r;
  }
}

async function e_o(e, n, r) {
  let o = await Cz(), u = p => o(e).jpeg({
    quality: p
  }).toBuffer(), a = e, s = 90;
  if (!/jpe?g/i.test(r)) {
    let p = await u(90);
    if (p.length < a.length) a = p;
    if (p.length <= n) return p;
    s = 89;
  }
  let h = 1, w;
  for (let p = 0; p < 5; p++) {
    let B = Math.floor((h + s) / 2), _ = await u(B);
    if (_.length < a.length) a = _;
    if (_.length <= n) w = _, h = B + 1; else s = B - 1;
    if (h > s) break;
  }
  return w ?? a;
}

async function Sb({data: e, mediaType: n, limits: r, timings: o, allowWebp: u = !0}) {
  let a = Buffer.isBuffer(e) ? e : Buffer.from(e, "base64"), s = u && r.allowWebp !== !1, m = n?.includes("/") ? n.split("/")[1] || "png" : n || "png", h, w = performance.now();
  try {
    h = await R6e(a, a.length, m, r, {
      timings: o,
      directWebpMaxBytes: s ? ken(Cee) : void 0
    });
  } catch (_) {
    if (_ instanceof MN) return v(_.message, "resize_error");
    throw _;
  } finally {
    if (o !== void 0) o.resizeMs = performance.now() - w;
  }
  let p = h.buffer;
  if (p.length > Cee) {
    let _ = performance.now();
    try {
      p = await e_o(h.buffer, Cee, h.mediaType);
    } catch (S) {
      t(`Image byte-budget compression failed, passing through unbudgeted: ${l(S)}`, {
        level: "error"
      });
    }
    if (o !== void 0) o.byteBudgetMs = performance.now() - _;
  }
  return p = await t_o(a, h.buffer, p, Cee, s, h.losslessWebp), {
    block: {
      type: "image",
      source: {
        type: "base64",
        media_type: eZ(p),
        data: p.toString("base64")
      }
    },
    dimensions: h.dimensions
  };
}

function X() {
  if (he()) return "off";
  let e = ba() ? k(De, "off") : "off";
  return e === "lossless" || e === "all" ? e : "off";
}

function ken(e) {
  return X() === "off" ? void 0 : e;
}

async function F(e) {
  try {
    return await e();
  } catch (n) {
    if (KFe(VFe(n))) d(n); else t(`WebP step: an encode failed: ${l(n)}`, {
      level: "error"
    });
    return;
  }
}

function K(e, n) {
  return F(async () => {
    let r = await (await e()).webp(n).toBuffer();
    if (n.lossless && !o_o(r)) throw Error("a lossless WebP encode wrote a file that is not lossless");
    return r;
  });
}

async function ge(e) {
  let n = await K(e, {
    lossless: !0
  });
  if (n === void 0 || !eTs(n)) return n;
  let r = await e(), o = r === await e() ? void 0 : {
    compressionLevel: 0
  }, u = await Cz(), [a, s] = await Promise.all([ F(() => r.png(o).toBuffer()), F(() => u(n).png(o).toBuffer()) ]);
  if (a === void 0 || s === void 0) return;
  return s.equals(a) ? n : "not_exact";
}

async function Le(e, n, r, o) {
  if (n.length <= r / 2) return {
    result: "lossless",
    webp: n
  };
  if (o !== "all") return {
    result: "too_large"
  };
  let u = await K(e, {
    lossless: !1,
    quality: 90
  });
  if (u === void 0) return {
    result: "failed"
  };
  if (u.length > r) return {
    result: "too_large"
  };
  let a = await F(() => e().jpeg({
    quality: 90
  }).toBuffer());
  if (a === void 0) return {
    result: "failed"
  };
  if (a.length > r) return {
    result: "no_yardstick"
  };
  if (u.length >= a.length) return {
    result: "not_smaller"
  };
  return n.length <= u.length ? {
    result: "lossless",
    webp: n
  } : {
    result: "lossy",
    webp: u
  };
}

async function se(e, n) {
  let r = X();
  if (n === void 0 || r === "off") return {};
  let o = performance.now(), u = await ge(e), {result: a, webp: s} = u === void 0 ? {
    result: "failed",
    webp: void 0
  } : u === "not_exact" ? {
    result: u,
    webp: void 0
  } : await Le(e, u, n, r);
  if (i("tengu_image_webp_direct", {
    mode: c(r),
    result: c(a),
    ...s !== void 0 && {
      sent_size_bytes: s.length
    },
    encode_ms: Math.round(performance.now() - o)
  }), s === void 0) return {
    lossless: u
  };
  return g("input_image_webp"), {
    webp: s
  };
}

async function t_o(e, n, r, o, u, a) {
  let s = X(), m = eZ(n), h = m === "image/webp" && eZ(e) !== "image/webp", w = n.length > o, p = u && m === "image/png" && (w ? s === "all" : s !== "off") && !Zks(n), B = performance.now(), _ = async () => (await Cz())(n), S = !p ? void 0 : w ? await K(_, {
    lossless: !1,
    quality: 90
  }) : a ?? await ge(_), y = S === "not_exact" ? void 0 : S, P = y !== void 0 && y.length < r.length ? y : r, A = S === "not_exact" ? S : y === void 0 ? "failed" : "not_smaller";
  if (P === y) g("input_image_webp"); else if (p) f("input_image_webp", A === "failed" ? "encode_failed" : A);
  return i("tengu_image_output", {
    mode: c(s),
    webp_try: c(h ? "direct" : !p ? "none" : w ? "lossy" : "lossless"),
    ...!h && {
      resized_format: c(m),
      resized_size_bytes: n.length,
      without_webp_size_bytes: r.length
    },
    sent_format: c(eZ(P)),
    sent_size_bytes: P.length,
    ...p && {
      webp_result: c(P === y ? "sent" : A),
      webp_encode_ms: Math.round(performance.now() - B)
    }
  }), P;
}

async function Gks(e, n, {timings: r} = {}) {
  let o = uh(e);
  if (o === null) return null;
  try {
    let {block: u} = await Sb({
      data: e,
      mediaType: o,
      limits: n,
      timings: r
    });
    return u.type === "image" ? u : null;
  } catch {
    return null;
  }
}

async function aMt(e, n) {
  if (!L(e.source)) return e.source == null ? v("image block has no source object", "no_source") : v("image block source must be an object", "malformed_source");
  if (e.source.type !== "base64") return {
    block: e
  };
  let r = e.source.media_type;
  if (r != null && typeof r !== "string") return v("base64 image media_type must be a string", "malformed_source");
  let o = typeof r === "string" ? r : void 0, u = e.source.data, a;
  try {
    a = Buffer.isBuffer(u) ? u : Buffer.from(u, "base64");
  } catch (s) {
    return v(l(s), "malformed_source");
  }
  return Sb({
    data: a,
    mediaType: o,
    limits: n
  });
}

function v(e, n) {
  return i("tengu_image_resize_degraded", {
    reason: c(n)
  }), {
    block: {
      type: "text",
      text: `[Image could not be processed: ${e}]`
    }
  };
}

async function _Er(e, n, r) {
  let o = r?.split("/")[1] || "jpeg", u = o === "jpg" ? "jpeg" : o;
  try {
    let a = await Cz(), s = await a(e).metadata(), m = s.format || u, h = e.length, w = e;
    if (!le.has(m === "jpg" ? "jpeg" : m)) w = await a(e).png().toBuffer(), s = await a(w).metadata(), 
    m = "png";
    let p = {
      imageBuffer: w,
      metadata: s,
      format: m,
      maxBytes: n,
      originalSize: h
    };
    if (w.length <= n) return W(w, m, h);
    let B = await Ne(p, a);
    if (B) return B;
    if (m === "png") {
      let S = await Ue(p, a);
      if (S) return S;
    }
    let _ = await Ge(p, 50, a);
    if (_) return _;
    return await He(p, a);
  } catch (a) {
    let s = VFe(a), m = l(a);
    if (KFe(s)) d(a); else t(`Image compression failed: ${m}`, {
      level: "error"
    });
    if (i("tengu_image_compress_failed", {
      original_size_bytes: e.length,
      max_bytes: n,
      error_type: s,
      error_message_hash: pe(m),
      ...de(a),
      ...me(e)
    }), e.length <= n) {
      let h = eZ(e);
      return {
        base64: e.toString("base64"),
        mediaType: h,
        originalSize: e.length
      };
    }
    if (s === J) {
      let {reason: h, advice: w} = ce(e);
      throw new MN(`Unable to compress image (${en(e.length)}) to fit within ${en(n)} \u2014 ${h}. ${w}`);
    }
    throw new MN(`Unable to compress image (${en(e.length)}) to fit within ${en(n)}. Please use a smaller image.`);
  }
}

async function Vks(e, n, r) {
  let o = Math.floor(n / .125), u = Math.floor(o * .75);
  return _Er(e, u, r);
}

async function Kks(e, n) {
  if (e.source.type !== "base64") return e;
  let r = Buffer.from(e.source.data, "base64");
  if (r.length <= n) return e;
  let o = await _Er(r, n);
  return {
    type: "image",
    source: {
      type: "base64",
      media_type: o.mediaType,
      data: o.base64
    }
  };
}

function W(e, n, r) {
  let o = n === "jpg" ? "jpeg" : n;
  return {
    base64: e.toString("base64"),
    mediaType: `image/${o}`,
    originalSize: r
  };
}

async function Ne(e, n) {
  let r = [ 1, .75, .5, .25 ];
  for (let o of r) {
    let u = Math.round((e.metadata.width || 2e3) * o), a = Math.round((e.metadata.height || 2e3) * o), s = n(e.imageBuffer).resize(u, a, {
      fit: "inside",
      withoutEnlargement: !0
    }), m = fe(e.format);
    s = Fe(s, m);
    let h = await s.toBuffer();
    if (h.length <= e.maxBytes) return W(h, m, e.originalSize);
  }
  return null;
}

function Fe(e, n) {
  switch (n) {
   case "png":
    return e.png({
      compressionLevel: 9,
      palette: !0
    });

   case "jpeg":
    return e.jpeg({
      quality: 80
    });

   case "webp":
    return e.webp({
      quality: 80
    });
  }
}

async function Ue(e, n) {
  let r = await n(e.imageBuffer).resize(800, 800, {
    fit: "inside",
    withoutEnlargement: !0
  }).png({
    compressionLevel: 9,
    palette: !0,
    colors: 64
  }).toBuffer();
  if (r.length <= e.maxBytes) return W(r, "png", e.originalSize);
  return null;
}

async function Ge(e, n, r) {
  let o = await r(e.imageBuffer).resize(600, 600, {
    fit: "inside",
    withoutEnlargement: !0
  }).jpeg({
    quality: n
  }).toBuffer();
  if (o.length <= e.maxBytes) return W(o, "jpeg", e.originalSize);
  return null;
}

async function He(e, n) {
  let r = await n(e.imageBuffer).resize(400, 400, {
    fit: "inside",
    withoutEnlargement: !0
  }).jpeg({
    quality: 20
  }).toBuffer();
  return W(r, "jpeg", e.originalSize);
}

function Z7(e, n) {
  let {originalWidth: r, originalHeight: o, displayWidth: u, displayHeight: a} = e;
  if (!r || !o || !u || !a || u <= 0 || a <= 0) {
    if (n) return `${sMt}${n}]`;
    return null;
  }
  let s = r !== u || o !== a;
  if (!s && !n) return null;
  let m = [];
  if (n) m.push(`source: ${n}`);
  if (s) {
    let h = r / u;
    m.push(`original ${r}x${o}, displayed at ${u}x${a}. Multiply coordinates by ${h.toFixed(2)} to map to original image.`);
  }
  return `${gEr}${m.join(", ")}]`;
}

export { gEr, sMt, Lxe, zY, lct, Jyo, ZBn, Qyo, hEr, Zyo, e1n, iMt, Cz, yEr, MN, VFe, KFe, R6e, e_o, Sb, ken, t_o, Gks, aMt, _Er, Vks, Kks, Z7, t1n };
