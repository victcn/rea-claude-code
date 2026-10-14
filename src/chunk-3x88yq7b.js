// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he, mc } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { x, E, Ms } from "./chunk-b0z4bv3v.js";

import { Un, ul, Eh } from "./chunk-ddr690nj.js";

import { ao } from "./chunk-w0q7jqcp.js";

import { a } from "./chunk-j016gcgm.js";

import { wo, uo, se, Gd, Iu } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { Tp } from "./chunk-5brm0azz.js";

import { sme } from "./chunk-9yajep3y.js";

import { le } from "./chunk-cqgvwwgb.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { TOe, tae } from "./chunk-r276nwd3.js";

import { k } from "./chunk-xywp7esx.js";

import { iIe } from "./chunk-s2t7g8m9.js";

import { Sw } from "./chunk-3xtsjx0y.js";

import { zY, Jyo } from "./chunk-ma4gjakn.js";

import { fxe, ih } from "./chunk-4v78v8fd.js";

import { OEt } from "./chunk-a6phe82s.js";

import { Ta, Yks } from "./chunk-pqzqmnjf.js";

import { sae } from "./chunk-j7qcpyv8.js";

import { stat as S } from "fs/promises";

import { basename as D, extname as B, isAbsolute as W, join as X } from "path";

var Y = 3, G = 32;

function _An(n) {
  if (n.replBridgeEnabled) return "repl";
  if (a.CLAUDE_CODE_BRIEF_UPLOAD) return "env_brief_upload";
  if (a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE) return "env_ccr";
  if (a.CLAUDE_CODE_REMOTE) return "env_byoc";
  if (Sw() !== null && mc()) return k("tengu_async_goblet", !0) ? "sdk_hosted" : "sdk_hosted_disabled";
  return "none";
}

function bAn(n) {
  return n === "sdk_hosted" && Tp();
}

var J = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".bmp": "image/bmp",
  ".ico": "image/x-icon",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".avif": "image/avif",
  ".tif": "image/tiff",
  ".tiff": "image/tiff",
  ".mp4": "video/mp4",
  ".m4v": "video/x-m4v",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
  ".avi": "video/x-msvideo",
  ".mkv": "video/x-matroska",
  ".mp3": "audio/mpeg",
  ".m4a": "audio/mp4",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".aac": "audio/aac",
  ".flac": "audio/flac",
  ".pdf": "application/pdf",
  ".txt": "text/plain",
  ".log": "text/plain",
  ".md": "text/markdown",
  ".json": "application/json",
  ".csv": "text/csv",
  ".html": "text/html",
  ".htm": "text/html",
  ".xml": "application/xml",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".zip": "application/zip"
};

function knt(n) {
  return J[B(n).toLowerCase()];
}

function j9r(n) {
  return n.pathValidated === !0 && n.file_uuid !== void 0 && (n.media_type === "image/png" || n.media_type === "image/jpeg") && n.media_type !== knt(n.path);
}

function O(n) {
  return typeof n !== "string";
}

async function q(n, e, t) {
  let i = await tae(e);
  if (i) return i;
  if (!W(n)) {
    let [s, ...d] = n.split(/[\\/]+/);
    if (s === D(t) && d.length > 0) {
      let u = X(t, ...d);
      try {
        if ((await S(u)).isFile()) return d.join("/");
      } catch {}
    }
  }
  return await TOe(e);
}

function W9r(n) {
  let e = Iu(n);
  if (/^[a-z][a-z0-9+.-]+:\/\//i.test(n)) return {
    result: !1,
    message: `Attachment "${e}" looks like a URL, not a local file path. This tool can only send files that exist on the local filesystem \u2014 download or write the content to a local file first, then pass that path.`,
    errorCode: 1
  };
  let t = ot(n);
  if (Un(t)) return {
    result: !1,
    message: `Attachment "${e}" is a UNC network path, which is not supported.`,
    errorCode: 1
  };
  if (Eh(t)) return {
    result: !1,
    message: `Attachment "${e}" is under /net, /Network, /.vol, /.file, /.nofollow or /.resolve, which could trigger a network mount, so it is not supported. Copy the file to an ordinary local path and pass that path instead.`,
    errorCode: 1
  };
  return;
}

var F = "A file path cannot be attached here: this tool cannot read files in this session.";

function SAn(n, e) {
  return j(n, e, void 0);
}

async function J7o(n, e) {
  if (!e.restricted && e.blockReadsOutsideWorkingDirectories !== !0) return {
    verdict: await j(n, e, void 0),
    judged: void 0
  };
  let t = [], i = new Map;
  return {
    verdict: await j(n, e, {
      paths: t,
      identities: i
    }),
    judged: {
      paths: t,
      identities: i,
      doorChannel: void 0
    }
  };
}

async function j(n, e, t) {
  for (let i of n) {
    if (O(i)) continue;
    if (he()) return {
      result: !1,
      message: F,
      errorCode: 1
    };
    let s = W9r(i);
    if (s !== void 0) return s;
    let d = Iu(i), u = ot(i), h = t !== void 0 || e.restricted || e.blockReadsOutsideWorkingDirectories === !0 ? uo(u) : void 0;
    if (e.restricted && !ih(u, e, h)) return {
      result: !1,
      message: `Attachment "${d}" is outside the working directory; --restricted only sends files from inside it.`,
      errorCode: 1
    };
    if (fxe(u, e, h)) return {
      result: !1,
      message: `Attachment "${d}" is outside the working directories; reads outside them are blocked (permissions.blockReadsOutsideWorkingDirectories).`,
      errorCode: 1
    };
    try {
      if (!(await S(u)).isFile()) return {
        result: !1,
        message: `Attachment "${d}" is not a regular file.`,
        errorCode: 1
      };
    } catch (g) {
      let A = E(g);
      if (A === "ENOENT") {
        let P = le(), y = await q(i, u, P), b = Iu(y);
        return {
          result: !1,
          message: `Attachment "${d}" does not exist. Current working directory: ${Iu(P)}.` + (y && b === y ? ` Did you mean "${b}"?` : ""),
          errorCode: 1
        };
      }
      if (Ms(g)) return {
        result: !1,
        message: `Attachment "${d}" is not accessible (${A}).`,
        errorCode: 1
      };
      throw g;
    }
    if (t !== void 0 && h !== void 0) t.paths.push(...h), t.identities.set(u, await sme(h));
  }
  return {
    result: !0
  };
}

async function wAn(n, e) {
  let t = [], i = [];
  for (let r of n) {
    if (O(r)) {
      t.push({
        path: r.file_name,
        size: r.size,
        isImage: r.is_image,
        file_uuid: r.file_uuid,
        media_type: r.media_type ?? knt(r.file_name),
        pathValidated: !1
      });
      continue;
    }
    if (he()) throw new x(F, "attachment path refused in a diskless session");
    let p = ot(r);
    if (ul(p)) throw Error(`Attachment "${Iu(r)}" is a network path (UNC or /net autofs), which is not supported.`);
    let m = await S(p).catch(o => {
      if (o instanceof Error) o.message = Iu(o.message);
      throw o;
    });
    i.push(t.length), t.push({
      path: p,
      size: m.size,
      isImage: OEt.test(p),
      media_type: knt(p),
      pathValidated: !0
    });
  }
  let {lane: s} = e, d = ao().projectFilesDoor?.() ?? null, u = d !== null && d.channelId === e.projectFilesChannel ? d : null, h = s !== "none" && s !== "sdk_hosted_disabled";
  if (i.length === 0 || u === null && !h) {
    if (iIe()) for (let r of i) t[r] = {
      ...t[r],
      upload_error: d === null ? "not delivered: this session is not on a project thread, so it has nowhere to place a file" : "not delivered: the project folder is not written in plan mode until the plan is approved"
    };
    return t;
  }
  let {uploadBriefAttachment: g, writeAttachmentToProjectFolder: A} = await import("./chunk-z20acvj5.js"), P = sae(), y = {
    upload_lane: c(s)
  }, b = !k("tengu_playful_panda", !0), U = !k("tengu_level_wren", !0), N = k("tengu_zany_flask", 2), z = Yks(Y), C = () => {}, M = new Promise(r => {
    C = r;
  });
  e.signal?.addEventListener("abort", C, {
    once: !0
  });
  let V = Ta(G, async r => {
    let {path: p, size: m} = t[r], o = K(p, e.judged?.paths);
    if (typeof o !== "string") return {
      folder: {
        error: o.error
      },
      chat: void 0
    };
    let l = D(p), _ = e.judged?.identities, w = _ === void 0 || _.has(p) ? _?.get(p) : null, f, L = async () => {
      await Promise.race([ f ??= z.acquire(), M ]);
    };
    try {
      let [v, R] = await Promise.allSettled([ u ? A(o, m, u, {
        filename: l,
        identity: w,
        signal: e.signal,
        telemetry: y,
        waitForTurn: L
      }) : void 0, h ? g(o, m, {
        lane: s,
        filename: l,
        identity: w,
        signal: e.signal,
        credentials: e.credentials,
        copyLock: P,
        waitForTurn: L,
        originalsOnly: e.originalsOnly,
        noPreviewCopies: b,
        noScaledCopies: U,
        maxPosts: N
      }) : void 0 ]);
      if (v.status === "rejected") throw v.reason;
      if (R.status === "rejected") throw R.reason;
      return {
        folder: v.value,
        chat: R.value
      };
    } finally {
      f?.then(v => v());
    }
  }), T = i.map(V);
  Promise.allSettled(T).then(() => e.signal?.removeEventListener("abort", C));
  let H = await Promise.all(T);
  return i.forEach((r, p) => {
    let {folder: m, chat: o} = H[p], l = {
      ...t[r]
    };
    if (typeof m === "string") l.project_path = m;
    if (o !== void 0 && !("error" in o)) {
      if (l.file_uuid = o.file_uuid, o.copy !== void 0) l.isImage = o.copy.isImage, l.media_type = o.copy.mediaType;
      if (o.scaled !== void 0) l.scaled = o.scaled;
    }
    let _ = m !== void 0 && typeof m !== "string", w = o !== void 0 && "error" in o;
    if (l.project_path === void 0 && l.file_uuid === void 0) {
      let f = _ ? m : w ? o : void 0;
      if (f !== void 0) {
        if (l.upload_error = f.error, f.errorCode !== void 0) l.upload_error_code = f.errorCode;
        if (f.suspectedLimitBytes !== void 0) l.upload_suspected_limit_bytes = f.suspectedLimitBytes;
      }
    } else if (_) l.partial_error = `not placed in the project folder (${m.error})`; else if (w) l.partial_error = `not sent to the chat viewers (${Jyo(o.error, o.errorCode, !0)})`;
    t[r] = l;
  }), t;
}

function K(n, e) {
  let {resolvedPath: t} = wo(se(), n);
  if (e === void 0) return t;
  return e.includes(t) ? t : {
    error: "not sent: it now resolves to what was not approved"
  };
}

function vAn(n) {
  let e = n.flatMap(({path: i, scaled: s, project_path: d}) => s === void 0 ? [] : [ {
    path: Gd(i),
    scaled: s,
    inFolder: d !== void 0
  } ]), t = e.length;
  if (t === 0) return;
  return `${t} ${I(t, "image was sent to the chat as a scaled-down copy", "images were sent to the chat as scaled-down copies")}, because the server accepts images at most ${zY} pixels wide or tall:\n` + e.map(({path: i, scaled: s, inFolder: d}) => `  ${i}: sent at ${s.width}\xd7${s.height} pixels; the original (${s.original_width}\xd7${s.original_height}) is ${d ? "in the project folder" : "unchanged on disk"}`).join(`\n`) + `\nTell the user they are seeing ${I(t, "a scaled-down copy", "scaled-down copies")}; ` + (e.every(i => i.inFolder) ? `the project folder has ${I(t, "the full-size original", "the full-size originals")}.` : `if they need ${I(t, "the full-size original", "a full-size original")}, offer to send it inside a .zip.`);
}

export { _An, bAn, knt, j9r, W9r, SAn, J7o, wAn, vAn };
