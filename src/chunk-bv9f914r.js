// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { pE, Ie, oS, Snn, kvo, Tvo, Kl, Dut, vWn, EWn } from "./chunk-3btm71fm.js";

import { x, Je, j, l, E, W } from "./chunk-b0z4bv3v.js";

import { Y, se, If, Tme, EA, t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { kt } from "./chunk-r2h53bm2.js";

import { dPe } from "./chunk-nd2afwsy.js";

import { Ir, pm, Qr, ve, yx, XU } from "./chunk-3pqddg8f.js";

import { Ea } from "./chunk-nvtwm272.js";

import { lo } from "./chunk-ddr690nj.js";

import { Ov, Oa, a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { sD } from "./chunk-fvcjfcfm.js";

import { $U, ls } from "./chunk-30n0xq4e.js";

import { Cj } from "./chunk-r276nwd3.js";

import { p } from "./chunk-jkzenvsk.js";

import { ar } from "./chunk-nnrb0acr.js";

import { ko } from "./chunk-q6wab2jw.js";

import { hn, fe, Rn, ca } from "./chunk-dd98x6x7.js";

import { dd, Xn } from "./chunk-x35dw27e.js";

import { _j, Qa } from "./chunk-nc0jxmkt.js";

import { fC, Vse, PUe, Tpe, rPe, sAr, ivo } from "./chunk-ep1bh0vt.js";

import { Oxs } from "./chunk-9wtp3skp.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { Go, eDt } from "./chunk-jbphjy99.js";

import { MR } from "./chunk-8drhysk2.js";

import { ah, _Fe } from "./chunk-67jt18z1.js";

import { toe } from "./chunk-gpa5wktp.js";

import { NV, _O, $V } from "./chunk-t17yn24n.js";

import { xpe, Qse, tDt } from "./chunk-whs0esmw.js";

import { o, v, u } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var Me = Ue(new Map, e => e.clear());

var Ce = Ue(new Set, e => e.clear());

function X(e, r, n) {
  let s = `${e.name}#${e.environmentId} ${r}`, i = Me.get(s) ?? 0;
  if (i >= Tvo) return;
  Me.set(s, i + 1);
  let f = Snn(e.matcherFor(r), n);
  if (f === void 0) return;
  let c = `${s} ${f.path}`;
  if (Ce.has(c)) return;
  Ce.add(c), Kl().log(kvo(e.name, r, f), "warn");
}

function Zmr(e, r, n) {
  let s = e.matcherFor(r), i = e.hopKey.kind === "worker";
  if (s === void 0) return !0;
  let f = dPe(r), c = i ? vWn(s, n, f) : Dut(s, n, f);
  if (!c) X(e, r, n);
  return c;
}

function he(e, r, n) {
  let s = e.findIndex(f => Zmr(f, r, n));
  return s === -1 ? [] : e.slice(s);
}

function te(e, r, n) {
  let s = oS(n) ? Object.fromEntries((Vse(r).pinnedKeys ?? []).filter(i => Object.hasOwn(n, i)).map(i => [ i, n[i] ])) : {};
  return e.catches(r, void 0, i => EWn(i, s, dPe(r)));
}

function Z(e, r) {
  let n = [];
  for (let s of e) {
    let i = s.status();
    if (i.kind !== "live") {
      let f = i.kind === "retiring" || i.kind === "unloaded" && i.retired, c = i.kind === "unloaded";
      t(`hooks module ${f ? `${s.label}: its environment was retired by a reload during ${r}` : c ? `${s.label}: its environment was unloaded (during ${r})` : `${s.label}: ${i.reason} (during ${r})`}; passing on`);
      continue;
    }
    n.push(s);
  }
  return n;
}

var ye = (e, r, n) => he(Z(e, r), r, n);

var bHn = Ue(Go(), e => e.set(void 0));

var qre = Ue(Go(), e => e.set(void 0));

var IRt = Ue(Go(), e => e.set(void 0));

function lio() {
  return a.CLAUDE_CODE_PLUGIN_DIR_WATCH ?? !ve();
}

import { resolve as xe } from "path";

function Xmr(e) {
  let r = new Set((qre.get() ?? []).map(s => xe(s))), n = new Set((IRt.get() ?? []).map(s => xe(s)));
  return e.filter(s => r.has(xe(s)) || !n.has(xe(s)));
}

import { resolve as Ne } from "path";

function Jmr(e) {
  if (lio()) return Xmr(e);
  let r = new Set((qre.get() ?? []).map(s => Ne(s)));
  return a.CLAUDE_CODE_PLUGIN_DIR_WATCH === !1 ? [] : e.filter(s => r.has(Ne(s)));
}

var Qmr = () => [ ...yx(), ...XU() ];

var xce = () => Jmr(Qmr()).length > 0;

var SHn = 1e4;

function xNe(e) {
  return e.length <= SHn ? e : `${ne(e, SHn)}\u2026`;
}

var je = 100;

function Yre(e, r, n = "again") {
  let s = xNe(r), i = Ge();
  if (t(`[${e}] $.ui.log: ${s}`), i.uiLogSink) {
    i.uiLogSink({
      plugin: e,
      text: s
    }, n);
    return;
  }
  if (i.pendingUiLog.length < je) i.pendingUiLog = [ ...i.pendingUiLog, {
    plugin: e,
    text: s
  } ];
}

function XW(e, r, n = "again") {
  if (xce()) {
    Yre(e, ne(r, fC), n);
    return;
  }
  t(`${e}: ${r}`, {
    level: "error"
  });
}

var Te = (e, r) => e.filter(n => {
  let s = n.status();
  return s.kind === "dead" && s.reason === r;
});

var _9t = e => typeof e === "string" ? e : `${e.plugin}#${e.registration}`;

var b9t = e => typeof e === "string" ? e : e.plugin;

function oe(e, r) {
  let n = new Set;
  for (let s of e ?? []) {
    if (b9t(s) !== r) continue;
    if (typeof s === "string") return "every";
    n.add(s.registration);
  }
  return [ ...n ].sort((s, i) => s - i);
}

function jt(e, r) {
  let n = e ?? [], s = n.length - 1;
  return {
    caller: oe(n.slice(s), r),
    above: oe(n.slice(0, s), r)
  };
}

var S9t = lo(() => new WeakMap);

var egr = e => (e ?? []).map(_9t).join(" > ");

var w9t = ({name: e, method: r}) => `$.${e}.${r}`;

var dio = e => Array.from(e).join(",") || "none";

var Pzs = "the hooks worker was replaced; the plugin stays loaded for its .catch";

var ORt = e => e.map(r => r.label).join(", ");

function v9t({pluginName: e, pluginStorageId: r}) {
  return r.startsWith(`${e}@`) ? r : `${r}+${e}`;
}

var Ius = e => `next() result not cloneable: ${l(e)}`;

import { lstat as ie, rmdir as wo } from "fs/promises";

import { basename as ae, dirname as ce } from "path";

import { createHash as Le } from "crypto";

import { chmod as mo, writeFile as Fe } from "fs/promises";

import { dirname as po, join as V } from "path";

async function Gt(e) {
  let {McpbManifestSchema: r} = await import("./chunk-hgxgnqxg.js"), n = r.safeParse(e);
  if (!n.success) {
    let s = n.error.flatten(), i = [ ...Object.entries(s.fieldErrors).map(([f, c]) => `${f}: ${c?.join(", ")}`), ...s.formErrors || [] ].filter(Boolean).join("; ");
    throw new x(`Invalid manifest: ${i}`, "MCPB manifest schema validation failed");
  }
  return n.data;
}

async function Xt(e) {
  let r;
  try {
    r = Y(e);
  } catch (n) {
    throw Error(`Invalid JSON in manifest.json: ${l(n)}`);
  }
  return Gt(r);
}

async function Pe(e) {
  let r = (new TextDecoder).decode(e);
  return Xt(r);
}

import { isAbsolute as Zt, normalize as qt } from "path";

import { inflateRawSync as Jt } from "zlib";

var K = {
  MAX_FILE_SIZE: 536870912,
  MAX_TOTAL_SIZE: 1073741824,
  MAX_FILE_COUNT: 1e5,
  MAX_COMPRESSION_RATIO: 50
};

function _Hn(e) {
  if (sD(e)) return !1;
  for (let n of e.split(/[/\\]/)) if (/^\.\. [ .]*$/.test(n)) return !1;
  let r = qt(e);
  if (Zt(r)) return !1;
  return !0;
}

function Yt(e, r) {
  r.fileCount++;
  let n;
  if (r.fileCount > K.MAX_FILE_COUNT) n = `Archive contains too many files: ${r.fileCount} (max: ${K.MAX_FILE_COUNT})`;
  let s = kt(e.name, 120);
  if (!_Hn(e.name)) n = `Unsafe file path detected: "${s}". Path traversal or absolute paths are not allowed.`;
  let i = e.originalSize || 0;
  if (i > K.MAX_FILE_SIZE) n = `File "${s}" is too large: ${Math.round(i / 1024 / 1024)}MB (max: ${Math.round(K.MAX_FILE_SIZE / 1024 / 1024)}MB)`;
  if (r.totalUncompressedSize += i, r.totalUncompressedSize > K.MAX_TOTAL_SIZE) n = `Archive total size is too large: ${Math.round(r.totalUncompressedSize / 1024 / 1024)}MB (max: ${Math.round(K.MAX_TOTAL_SIZE / 1024 / 1024)}MB)`;
  let f = r.totalUncompressedSize / r.compressedSize;
  if (f > K.MAX_COMPRESSION_RATIO) n = `Suspicious compression ratio detected: ${f.toFixed(1)}:1 (max: ${K.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
  return n ? {
    isValid: !1,
    error: n
  } : {
    isValid: !0
  };
}

async function E4e(e) {
  let r = {
    fileCount: 0,
    totalUncompressedSize: 0,
    compressedSize: e.length,
    errors: []
  }, n = fo(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), s => {
    let i = Yt(s, r);
    if (!i.isValid) throw new x(i.error, "MCPB zip entry validation failed");
  });
  return t(`Zip extraction completed: ${r.fileCount} files, ${Math.round(r.totalUncompressedSize / 1024)}KB uncompressed`), 
  n;
}

var Qt = 101010256, eo = 101075792, to = 117853008, oo = 33639248, ro = 65557, no = 2048, so = 0, io = 8;

function B(e) {
  return e === void 0 ? Error("invalid zip data") : new x(`invalid zip data: ${e}`, "invalid zip data");
}

function I(e, r) {
  if (r + 2 > e.length) throw B();
  return e[r] | e[r + 1] << 8;
}

function N(e, r) {
  if (r + 4 > e.length) throw B();
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24) >>> 0;
}

function $e(e, r) {
  return N(e, r) + N(e, r + 4) * 4294967296;
}

function ao(e) {
  let r = "";
  for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode(...e.subarray(n, n + 16384));
  return r;
}

function fo(e, r) {
  let n = {}, s = e.length - 22;
  while (s < 0 || N(e, s) !== Qt) {
    if (s <= 0 || e.length - s > ro) throw B();
    s--;
  }
  let i = I(e, s + 8);
  if (i === 0) return n;
  let f = N(e, s + 16), c = !1;
  if ((f === 4294967295 || i === 65535) && s >= 20 && N(e, s - 20) === to) {
    let g = N(e, s - 12);
    if (g + 56 <= e.length && N(e, g) === eo) c = !0, i = N(e, g + 32), f = N(e, g + 48);
  }
  let m = new TextDecoder;
  for (let g = 0; g < i; g++) {
    if (N(e, f) !== oo) throw B();
    let y = I(e, f + 8), k = I(e, f + 10), w = I(e, f + 28), h = I(e, f + 30), T = I(e, f + 32), M = f + 46;
    if (M + w > e.length) throw B();
    let C = e.subarray(M, M + w), H = y & no ? m.decode(C) : ao(C), S = N(e, f + 20), L = N(e, f + 24), b = N(e, f + 42), P = M + w;
    if (c && S === 4294967295) {
      let F = P + h, R = P;
      while (R + 4 <= F && I(e, R) !== 1) R += 4 + I(e, R + 2);
      if (R + 28 > F) throw B();
      L = $e(e, R + 4), S = $e(e, R + 12), b = $e(e, R + 20);
    }
    f = P + h + T, r({
      name: H,
      originalSize: L
    });
    let U = b + 30 + I(e, b + 26) + I(e, b + 28);
    if (U + S > e.length) throw B();
    let ue = e.subarray(U, U + S);
    if (k === so) {
      if (S !== L) throw B("stored entry size mismatch");
      n[H] = ue.slice();
    } else if (k === io) {
      if (S === 0 && L === 0) {
        n[H] = new Uint8Array(0);
        continue;
      }
      let F;
      try {
        F = Jt(ue, {
          maxOutputLength: Math.max(L, 1),
          chunkSize: Math.min(Math.max(L, 64), 1048576)
        });
      } catch (R) {
        let A = R.code;
        throw B(typeof A === "string" && A.startsWith("Z_") ? A : "entry larger than declared");
      }
      n[H] = new Uint8Array(F.buffer, F.byteOffset, F.byteLength);
    } else throw B(`unsupported compression method ${k}`);
  }
  return n;
}

var k4e = 493;

function y9t(e) {
  let r = Buffer.from(e.buffer, e.byteOffset, e.byteLength), n = {}, s = Math.max(0, r.length - 22 - 65535), i = -1;
  for (let m = r.length - 22; m >= s; m--) if (r.readUInt32LE(m) === 101010256) {
    i = m;
    break;
  }
  if (i < 0) return n;
  let f = r.readUInt16LE(i + 10), c = r.readUInt32LE(i + 16);
  for (let m = 0; m < f; m++) {
    if (c + 46 > r.length || r.readUInt32LE(c) !== 33639248) break;
    let g = r.readUInt16LE(c + 4), y = r.readUInt16LE(c + 28), k = r.readUInt16LE(c + 30), w = r.readUInt16LE(c + 32), h = r.readUInt32LE(c + 38), T = r.toString("utf8", c + 46, c + 46 + y);
    if (g >> 8 === 3) {
      let M = h >>> 16 & 65535;
      if (M) n[T] = M;
    }
    c += 46 + y + k + w;
  }
  return n;
}

import { homedir as co } from "os";

import { join as q } from "path";

function Ve(e) {
  let r = e?.platform ?? O(), n = e?.homedir ?? co(), s = e?.env ?? process.env, i = {
    HOME: n,
    DESKTOP: q(n, "Desktop"),
    DOCUMENTS: q(n, "Documents"),
    DOWNLOADS: q(n, "Downloads")
  };
  switch (r) {
   case "windows":
    {
      let f = s.USERPROFILE || n;
      return {
        HOME: n,
        DESKTOP: q(f, "Desktop"),
        DOCUMENTS: q(f, "Documents"),
        DOWNLOADS: q(f, "Downloads")
      };
    }

   case "linux":
   case "wsl":
    return {
      HOME: n,
      DESKTOP: s.XDG_DESKTOP_DIR || i.DESKTOP,
      DOCUMENTS: s.XDG_DOCUMENTS_DIR || i.DOCUMENTS,
      DOWNLOADS: s.XDG_DOWNLOAD_DIR || i.DOWNLOADS
    };

   case "macos":
   default:
    {
      if (r === "unknown") t("Unknown platform detected, using default paths");
      return i;
    }
  }
}

var uo = p(() => u({
  source: o(),
  contentHash: o(),
  extractedPath: o(),
  cachedAt: o(),
  lastChecked: o(),
  sourceMtimeMs: v().optional()
}));

function tH(e) {
  return e.endsWith(".mcpb") || e.endsWith(".dxt");
}

function Re(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}

function Aus(e) {
  return tH(e) && !Re(e);
}

function Ke(e) {
  return V(e, ".mcpb-cache");
}

function go(e, r) {
  let n = Le("md5").update(r).digest("hex").substring(0, 8);
  return V(e, `${n}.metadata.json`);
}

function ze(e, r) {
  return toe(go(e, r), () => uo().nullable(), {
    defaultValue: null,
    indent: 2
  });
}

function We(e, r) {
  return `${e}/${r}`;
}

async function cbe(e, r, n) {
  try {
    let s = xpe(e).mcpServers?.[r], i = (await Xn().readAsync(n))?.pluginSecrets?.[We(e, r)];
    if (!s && !i) return null;
    return t(`Loaded user config for ${e}/${r} (settings + secureStorage)`), {
      ...s,
      ...i
    };
  } catch (s) {
    return t(`Failed to load user config for ${e}/${r}: ${s}`, {
      level: "error"
    }), null;
  }
}

async function fit(e, r, n, s, i, f) {
  try {
    let c = {}, m = {};
    for (let [H, S] of Object.entries(n)) if (s[H]?.sensitive === !0) m[H] = String(S); else c[H] = S;
    let g = new Set(Object.keys(m)), y = new Set(Object.keys(c)), k = We(e, r), w = 0, h = await Xn().mutate(H => {
      let S = H.pluginSecrets?.[k], L = S ? pE(S, (b, P) => !y.has(P)) : void 0;
      if (w = L && S ? Object.keys(S).length - Object.keys(L).length : 0, Object.keys(m).length === 0 && w === 0) return H;
      return {
        ...H,
        pluginSecrets: {
          ...H.pluginSecrets,
          [k]: {
            ...L,
            ...m
          }
        }
      };
    }, f);
    if (!h.success) throw Error(`Failed to save sensitive config to secure storage for ${k}`);
    if (h.warning) t(`Server secrets save warning: ${h.warning}`, {
      level: "warn"
    });
    if (w > 0) t(`saveMcpServerUserConfig: scrubbed ${w} stale non-sensitive key(s) from secureStorage for ${k}`);
    let T = fe("userSettings")?.pluginConfigs, M = {}, C = 0;
    for (let H of Qse(e)) {
      let S = Object.keys(T?.[H]?.mcpServers?.[r] ?? {}).filter(P => g.has(P)), L = Object.fromEntries(S.map(P => [ P, void 0 ])), b = H === e ? c : {};
      if (Object.keys(b).length > 0 || S.length > 0) M[H] = {
        mcpServers: {
          [r]: {
            ...b,
            ...L
          }
        }
      }, C += S.length;
    }
    if (Object.keys(M).length > 0) {
      let H = await Rn("userSettings", {
        pluginConfigs: M
      }, void 0, i);
      if (H.error) throw H.error;
      if (C > 0) t(`saveMcpServerUserConfig: scrubbed ${C} plaintext sensitive key(s) from settings.json for ${e}/${r}`);
    }
    t(`Saved user config for ${e}/${r} (${Object.keys(c).length} non-sensitive, ${Object.keys(m).length} sensitive)`);
  } catch (c) {
    let m = j(c);
    throw t(`Failed to save user config for ${e}/${r}: ${m.message}`, {
      level: "error"
    }), Error(`Failed to save user configuration for ${e}/${r}: ${m.message}`);
  }
}

function n8(e, r) {
  let n = [];
  for (let [s, i] of Object.entries(r)) {
    let f = ko(e, s);
    if (i.required && (f === void 0 || f === "")) {
      n.push(`${i.title || s} is required but not provided`);
      continue;
    }
    if (f === void 0 || f === "") continue;
    if (i.type === "string") {
      if (Array.isArray(f)) {
        if (!i.multiple) n.push(`${i.title || s} must be a string, not an array`); else if (!f.every(c => typeof c === "string")) n.push(`${i.title || s} must be an array of strings`);
      } else if (typeof f !== "string") n.push(`${i.title || s} must be a string`); else if (i.options !== void 0 && !i.options.includes(f)) n.push(`${i.title || s} must be one of: ${i.options.join(", ")}`);
    } else if (i.type === "number" && typeof f !== "number") n.push(`${i.title || s} must be a number`); else if (i.type === "boolean" && typeof f !== "boolean") n.push(`${i.title || s} must be a boolean`); else if ((i.type === "file" || i.type === "directory") && typeof f !== "string") n.push(`${i.title || s} must be a path string`);
    if (i.type === "number" && typeof f === "number") {
      if (i.min !== void 0 && f < i.min) n.push(`${i.title || s} must be at least ${i.min}`);
      if (i.max !== void 0 && f > i.max) n.push(`${i.title || s} must be at most ${i.max}`);
    }
  }
  return {
    valid: n.length === 0,
    errors: n
  };
}

async function ke(e, r, n = {}) {
  let {getMcpConfigForManifest: s} = await import("./chunk-hgxgnqxg.js"), i = await s({
    manifest: e,
    extensionPath: r,
    systemDirs: Ve(),
    userConfig: n,
    pathSeparator: "/"
  });
  if (!i) {
    let f = Je(Error(`Failed to generate MCP server configuration from manifest "${e.name}"`), "MCPB manifest: failed to generate MCP server configuration");
    throw d(f), f;
  }
  return i;
}

async function Xe(e, r) {
  try {
    return await ze(e, r).read();
  } catch (n) {
    return t(`Failed to load MCPB cache metadata: ${n}`, {
      level: "error"
    }), null;
  }
}

async function De(e, r, n) {
  await se().mkdir(e), await ze(e, r).write(n);
}

async function ho(e, r, n) {
  let s = If(e);
  if (t(`Downloading MCPB from ${s}`), n) n(`Downloading ${s}...`);
  let i = performance.now(), f = !1;
  try {
    let m = await (_j(e) ? NV.get : Qa.get)(e, {
      timeout: 12e4,
      responseType: "arraybuffer",
      maxRedirects: 5,
      onDownloadProgress: y => {
        if (y.total && n) {
          let k = Math.round(y.loaded / y.total * 100);
          n(`Downloading... ${k}%`);
        }
      }
    }), g = new Uint8Array(m.data);
    if (_O("mcpb", e, "success", performance.now() - i), f = !0, await Fe(r, Buffer.from(g)), 
    t(`Downloaded ${g.length} bytes to ${r}`), n) n("Download complete");
    return g;
  } catch (c) {
    if (!f) _O("mcpb", e, "failure", performance.now() - i, $V(c));
    let m = EA(Tme(l(c), e, s)), g = Error(`Failed to download MCPB file from ${s}: ${m}`);
    throw t(`Failed to download MCPB file from ${s}: ${m}`, {
      level: "error"
    }), g;
  }
}

async function yo(e, r, n, s) {
  if (s) s("Extracting files...");
  await se().mkdir(r);
  let i = 0, f = Object.entries(e).filter(([m]) => !m.endsWith("/")), c = f.length;
  for (let [m, g] of f) {
    let y = V(r, m), k = po(y);
    if (k !== r) await se().mkdir(k);
    if (m.endsWith(".json") || m.endsWith(".js") || m.endsWith(".ts") || m.endsWith(".txt") || m.endsWith(".md") || m.endsWith(".yml") || m.endsWith(".yaml")) {
      let T = (new TextDecoder).decode(g);
      await Fe(y, T, "utf-8");
    } else await Fe(y, Buffer.from(g));
    let h = n[m];
    if (h && h & 73) await mo(y, h & k4e).catch(() => {});
    if (i++, s && i % 10 === 0) s(`Extracted ${i}/${c} files`);
  }
  if (t(`Extracted ${i} files to ${r}`), s) s(`Extraction complete (${i} files)`);
}

async function xo(e, r) {
  let n = se(), s = Ke(r), i = await Xe(s, e);
  if (!i) return !0;
  try {
    await n.stat(i.extractedPath);
  } catch (f) {
    if (E(f) === "ENOENT") t(`MCPB extraction path missing: ${i.extractedPath}`); else t(`MCPB extraction path inaccessible: ${i.extractedPath}: ${f}`, {
      level: "error"
    });
    return !0;
  }
  if (!Re(e)) {
    let f = V(r, e), c = V(r, If(e)), m;
    try {
      m = await n.stat(f);
    } catch (y) {
      if (E(y) === "ENOENT") t(`MCPB source file missing: ${c}`); else t(`MCPB source file inaccessible: ${c}: ${Tme(String(y), f, c)}`, {
        level: "error"
      });
      return !0;
    }
    if (i.sourceMtimeMs === void 0) return !0;
    let g = Math.floor(m.mtimeMs);
    if (g !== i.sourceMtimeMs) return t(`MCPB file modified: mtime ${new Date(g).toISOString()} != cached ${new Date(i.sourceMtimeMs).toISOString()}`), 
    !0;
  }
  return !1;
}

async function T4e(e, r, n, s, i, f, c, m) {
  let g = If(e), y = se(), k = Ke(r);
  await y.mkdir(k), t(`Loading MCPB from source: ${g}`);
  let w = await Xe(k, e);
  if (w && !await xo(e, r)) {
    t(`Using cached MCPB from ${w.extractedPath} (hash: ${w.contentHash})`);
    let F = V(w.extractedPath, "manifest.json"), R;
    try {
      R = await y.readFile(F, {
        encoding: "utf-8"
      });
    } catch (z) {
      if (W(z)) {
        let G = Error(`Cached manifest not found: ${F}`);
        throw d(G), G;
      }
      throw z;
    }
    let A = (new TextEncoder).encode(R), _ = await Pe(A);
    if (_.user_config && Object.keys(_.user_config).length > 0) {
      let z = _.name, G = await cbe(n, z, m), Ae = i || G || {}, He = n8(Ae, _.user_config);
      if (f || !He.valid) return {
        status: "needs-config",
        manifest: _,
        extractedPath: w.extractedPath,
        contentHash: w.contentHash,
        configSchema: _.user_config,
        existingConfig: G || {},
        validationErrors: He.valid ? [] : He.errors
      };
      if (i) await fit(n, z, i, _.user_config ?? {}, c, m);
      let mt = await ke(_, w.extractedPath, Ae);
      return {
        manifest: _,
        mcpConfig: mt,
        extractedPath: w.extractedPath,
        contentHash: w.contentHash
      };
    }
    let Oe = await ke(_, w.extractedPath);
    return {
      manifest: _,
      mcpConfig: Oe,
      extractedPath: w.extractedPath,
      contentHash: w.contentHash
    };
  }
  let h, T, M;
  if (Re(e)) {
    let F = Le("md5").update(e).digest("hex").substring(0, 8);
    T = V(k, `${F}.mcpb`), h = await ho(e, T, s);
  } else {
    let F = V(r, e);
    if (s) s(`Loading ${g}...`);
    try {
      h = await y.readFileBytes(F), T = F, M = Math.floor((await y.stat(F)).mtimeMs);
    } catch (R) {
      let A = V(r, g);
      if (W(R)) {
        let _ = Error(`MCPB file not found: ${A}`);
        throw t(`MCPB file not found: ${A}`, {
          level: "error"
        }), _;
      }
      throw F === A ? R : new x(Tme(l(R), F, A), "MCPB local file read failed");
    }
  }
  let C = Le("sha256").update(h).digest("hex").substring(0, 16);
  if (t(`MCPB content hash: ${C}`), s) s("Extracting MCPB archive...");
  let H = await E4e(Buffer.from(h)), S = y9t(h), L = H["manifest.json"];
  if (!L) {
    let F = Error("No manifest.json found in MCPB file");
    throw t(`No manifest.json found in MCPB file: ${T}`, {
      level: "error"
    }), F;
  }
  let b = await Pe(L);
  if (t(`MCPB manifest: ${b.name} v${b.version} by ${b.author.name}`), !b.server) {
    let F = Je(Error(`MCPB manifest for "${b.name}" does not define a server configuration`), "MCPB manifest does not define a server configuration");
    throw d(F), F;
  }
  let P = V(k, C);
  if (await yo(H, P, S, s), b.user_config && Object.keys(b.user_config).length > 0) {
    let F = b.name, R = await cbe(n, F, m), A = i || R || {}, _ = n8(A, b.user_config);
    if (f || !_.valid) {
      let G = {
        source: e,
        contentHash: C,
        extractedPath: P,
        cachedAt: (new Date).toISOString(),
        lastChecked: (new Date).toISOString(),
        sourceMtimeMs: M
      };
      return await De(k, e, G), {
        status: "needs-config",
        manifest: b,
        extractedPath: P,
        contentHash: C,
        configSchema: b.user_config,
        existingConfig: R || {},
        validationErrors: _.valid ? [] : _.errors
      };
    }
    if (i) await fit(n, F, i, b.user_config ?? {}, c, m);
    if (s) s("Generating MCP server configuration...");
    let Oe = await ke(b, P, A), z = {
      source: e,
      contentHash: C,
      extractedPath: P,
      cachedAt: (new Date).toISOString(),
      lastChecked: (new Date).toISOString(),
      sourceMtimeMs: M
    };
    return await De(k, e, z), {
      manifest: b,
      mcpConfig: Oe,
      extractedPath: P,
      contentHash: C
    };
  }
  if (s) s("Generating MCP server configuration...");
  let U = await ke(b, P), ue = {
    source: e,
    contentHash: C,
    extractedPath: P,
    cachedAt: (new Date).toISOString(),
    lastChecked: (new Date).toISOString(),
    sourceMtimeMs: M
  };
  return await De(k, e, ue), t(`Successfully loaded MCPB: ${b.name} (extracted to ${P})`), 
  {
    manifest: b,
    mcpConfig: U,
    extractedPath: P,
    contentHash: C
  };
}

function sm(e) {
  return e.source;
}

function mit(e, r) {
  return e.find(n => n.repository === r || n.source === r);
}

function lP(e, r) {
  if (eDt()) return Promise.resolve({});
  let {optionValues: n} = Ge(), s = n.get(e);
  if (s !== void 0) return s;
  let i = bo(e, r);
  return n.set(e, i), i.catch(() => {
    if (n.get(e) === i) n.delete(e);
  }), i;
}

async function bo(e, r) {
  let n = xpe(e).options ?? {}, s = (await Xn().readAsync(r))?.pluginSecrets, i = [ ...MR(e).toReversed(), e ].reduce((f, c) => ({
    ...f,
    ...s?.[c]
  }), {});
  return {
    ...n,
    ...i
  };
}

function ube() {
  Ge().optionValues.clear();
}

async function UCe(e, r, n, s, i) {
  let f = {}, c = {};
  for (let [h, T] of Object.entries(r)) if (n[h]?.sensitive === !0) c[h] = String(T); else f[h] = T;
  let m = new Set(Object.keys(c)), g = new Set(Object.keys(f)), y = await Xn().mutate(h => {
    let T = tDt(h.pluginSecrets, e), M = T.replaced.length === 0 ? h.pluginSecrets?.[T.written] : [ ...T.replaced.toReversed(), T.written ].reduce((S, L) => ({
      ...S,
      ...h.pluginSecrets?.[L]
    }), {}), C = M ? pE(M, (S, L) => !g.has(L)) : void 0, H = C && M && Object.keys(C).length !== Object.keys(M).length;
    if (Object.keys(c).length === 0 && !H && T.replaced.length === 0) return h;
    return {
      ...h,
      pluginSecrets: {
        ...pE(h.pluginSecrets ?? {}, (S, L) => !T.replaced.includes(L)),
        [T.written]: {
          ...C,
          ...c
        }
      }
    };
  }, i);
  if (!y.success) {
    let h = Error(`Failed to save sensitive plugin options for ${e} to secure storage`);
    throw t(h.message, {
      level: "error"
    }), h;
  }
  if (y.warning) t(`Plugin secrets save warning: ${y.warning}`, {
    level: "warn"
  });
  let k = fe("userSettings")?.pluginConfigs, w = {};
  for (let h of Qse(e)) {
    let T = Object.keys(k?.[h]?.options ?? {}).filter(H => m.has(H)), M = Object.fromEntries(T.map(H => [ H, void 0 ])), C = h === e ? f : {};
    if (Object.keys(C).length > 0 || T.length > 0) w[h] = {
      options: {
        ...C,
        ...M
      }
    };
  }
  if (Object.keys(w).length > 0) {
    let h = await Rn("userSettings", {
      pluginConfigs: So(k, e, w)
    }, void 0, s);
    if (h.error) throw t(`Failed to save plugin options for ${e} to settings.json: ${l(h.error)}`, {
      level: "error"
    }), Error(`Failed to save plugin options for ${e}: ${h.error.message}`);
  }
  ube();
}

async function Cus(e) {
  let r = [], n = new Set;
  ar();
  let s = fe("userSettings");
  if (s === null || s === void 0) {
    let i = hn("userSettings");
    if (i !== void 0 && await Cj(i) !== "gone") r.push("settings_unreadable");
  }
  for (let i of Object.keys(s?.pluginConfigs ?? {})) n.add(i);
  try {
    let i = Xn(), f = i.readAsyncStrict ? await i.readAsyncStrict(e, {
      inaccessibleAs: "failure"
    }) : await i.readAsync(e);
    if (f === dd) r.push("secrets_unreadable"); else for (let c of Object.keys(f?.pluginSecrets ?? {})) {
      let m = c.indexOf("/");
      n.add(m === -1 ? c : c.slice(0, m));
    }
  } catch {
    r.push("secrets_unreadable");
  }
  return {
    ids: [ ...n ],
    unreadable: r
  };
}

async function Ze(e) {
  ar();
  let r = fe("userSettings");
  if (r !== null && r !== void 0) return r;
  let n = hn("userSettings");
  if (n === void 0 || await Cj(n) === "gone") return;
  return t(`deletePluginOptions: the user settings file (${n}) is there and could not be read, so options of ${e} may remain in it`, {
    level: "warn"
  }), "unreadable";
}

async function Rus(e, r, n, s) {
  let i = !0, f = await Ze(e);
  if (f === "unreadable") i = !1, s?.push("settings_unreadable");
  let c = f === "unreadable" ? void 0 : f, m = Qse(e).filter(k => c?.pluginConfigs?.[k] !== void 0);
  if (m.length > 0) {
    let k = Object.fromEntries(m.map(h => [ h, void 0 ])), {error: w} = await Rn("userSettings", {
      pluginConfigs: k
    }, void 0, r);
    if (w) t(`deletePluginOptions: failed to clear settings.pluginConfigs[${e}]: ${w.message}`, {
      level: "warn"
    }), i = !1, s?.push("settings_write_failed"); else {
      let h = await Ze(e);
      if (h === "unreadable") i = !1, s?.push("settings_unreadable");
      let T = h === "unreadable" ? void 0 : h?.pluginConfigs;
      if (m.some(M => T?.[M] !== void 0)) t(`deletePluginOptions: settings.pluginConfigs[${e}] still reads back after a write that reported no error`, {
        level: "warn"
      }), i = !1, s?.push("settings_remain");
    }
  }
  let g = [ e, ...MR(e) ], y = k => g.some(w => k === w || k.startsWith(`${w}/`));
  try {
    let k = Xn();
    if (!(await k.mutate(h => {
      if (!h.pluginSecrets) return h;
      let T = Object.entries(h.pluginSecrets).filter(([M]) => !y(M));
      if (T.length === Object.keys(h.pluginSecrets).length) return h;
      return {
        ...h,
        pluginSecrets: T.length > 0 ? Object.fromEntries(T) : void 0
      };
    }, n)).success) t(`deletePluginOptions: failed to clear pluginSecrets for ${e} from keychain`, {
      level: "warn"
    }), i = !1, s?.push("secrets_write_failed"); else {
      let h = k.readAsyncStrict ? await k.readAsyncStrict(n, {
        inaccessibleAs: "failure"
      }) : await k.readAsync(n);
      if (h === dd || Object.keys(h?.pluginSecrets ?? {}).some(y)) t(`deletePluginOptions: after the delete, secure storage could not be read or still holds pluginSecrets for ${e}`, {
        level: "warn"
      }), i = !1, s?.push(h === dd ? "secrets_unreadable" : "secrets_remain");
    }
  } catch (k) {
    t(`deletePluginOptions: storage lock unavailable for ${e}: ${l(k)}`, {
      level: "warn"
    }), i = !1, s?.push("secrets_write_failed");
  }
  return ube(), i;
}

async function iio(e, r, n, s, i) {
  {
    let f = !0, c = !1, {error: m} = await ca("userSettings", H => {
      let S = H?.pluginConfigs?.[e];
      if (S === void 0) return null;
      if (H?.pluginConfigs?.[r] !== void 0) return c = !0, null;
      return {
        pluginConfigs: {
          [r]: S
        }
      };
    }, void 0, s);
    if (m) f = !1, t(`copyPluginOptions: failed to copy settings.pluginConfigs[${e}]: ${m.message}`, {
      level: "warn"
    });
    if (!f) return t(`copyPluginOptions: the settings write failed, so the secrets of ${e} were not copied`, {
      level: "warn"
    }), ube(), {
      optionsCarried: f,
      secretsCarried: !1,
      oldDataDirDisposable: !1,
      dataDirCopied: !1,
      targetHadOwn: c
    };
    let g = !0;
    try {
      if (!(await Xn().mutate(S => {
        if (!S.pluginSecrets) return S;
        let L = {};
        for (let [b, P] of Object.entries(S.pluginSecrets)) {
          let U = Ye(b, e, r);
          if (U === void 0) continue;
          if (S.pluginSecrets[U] === void 0) L[U] = P; else c = !0;
        }
        return Object.keys(L).length === 0 ? S : {
          ...S,
          pluginSecrets: {
            ...S.pluginSecrets,
            ...L
          }
        };
      }, i)).success) g = !1, t(`copyPluginOptions: failed to copy pluginSecrets for ${e}`, {
        level: "warn"
      });
    } catch {
      g = !1, t(`copyPluginOptions: secure storage unavailable for ${e}`, {
        level: "warn"
      });
    }
    if (!f || !g) return ube(), {
      optionsCarried: f,
      secretsCarried: g,
      oldDataDirDisposable: !1,
      dataDirCopied: !1,
      targetHadOwn: c
    };
    let y = ah(e), k = ah(r), w = `${k}.switching-${process.pid}`, h = !1, T = !1, M, C;
    try {
      let H = await Cj(y);
      if (H === "gone") h = !0; else if (H === "unreadable") M = "copy-failed", t(`copyPluginOptions: the data directory of ${e} could not be examined; it is kept and was not copied`, {
        level: "warn"
      }); else if (!(C = await ie(y, {
        bigint: !0
      })).isDirectory() || !await $U(ce(y), ae(y))) M = "copy-failed", t(`copyPluginOptions: the data directory of ${e} is not a real directory; it is kept and was not copied`, {
        level: "warn"
      }); else {
        let S = await wo(k).then(() => {}, L => W(L) ? void 0 : E(L));
        if (S === void 0) {
          await Oa(w);
          let L = await $U(ce(y), ae(y)), b = await ie(y, {
            bigint: !0
          });
          if (!L || !b.isDirectory() || b.dev !== C?.dev || b.ino !== C?.ino) throw Error("the old data directory is not the real directory first seen");
          await n(y, w, y, w, y, !0, new Set, void 0, !1, !0);
          let P = await ie(y, {
            bigint: !0
          });
          if (!P.isDirectory() || !await $U(ce(y), ae(y)) || P.dev !== b.dev || P.ino !== b.ino) throw Error("the old data directory changed during the copy");
          if (!(await ie(w)).isDirectory() || !await $U(ce(w), ae(w))) throw Error("the staging folder is not a real directory");
          if (await ls(w, k), !(await ie(k)).isDirectory() || !await $U(ce(k), ae(k))) throw await Ov(k).catch(() => {}), 
          Error("what stands at the target after the move is not a real directory");
          h = !0, T = !0;
        } else M = S === "ENOTEMPTY" || S === "EEXIST" || S === "ENOTDIR" ? "target-had-own" : "copy-failed";
      }
    } catch (H) {
      M = "copy-failed", t(`copyPluginOptions: failed to copy the data directory of ${e}: ${l(H)}`, {
        level: "warn"
      }), await Oa(w).catch(() => {});
    }
    return ube(), {
      optionsCarried: f,
      secretsCarried: g,
      oldDataDirDisposable: h,
      dataDirCopied: T,
      dataDirKeptReason: M,
      targetHadOwn: c
    };
  }
  return {
    optionsCarried: !1,
    secretsCarried: !1,
    oldDataDirDisposable: !1,
    dataDirCopied: !1,
    targetHadOwn: !1
  };
}

function Ye(e, r, n) {
  {
    let s = `${r}/`;
    return e === r ? n : e.startsWith(s) ? `${n}/${e.slice(s.length)}` : void 0;
  }
  return;
}

async function xus(e, r) {
  {
    let n = fe("userSettings")?.pluginConfigs;
    if (n?.[e] !== void 0 && n[r] !== void 0) return !0;
    try {
      let s = (await Xn().readAsync())?.pluginSecrets ?? {};
      return Object.keys(s).some(i => {
        let f = Ye(i, e, r);
        return f !== void 0 && s[f] !== void 0;
      });
    } catch {
      return t(`wouldTargetKeepOwnPluginOptions: secure storage could not be read (switch from ${e}), so the answer is 'unknown'`, {
        level: "warn"
      }), "unknown";
    }
  }
  return !1;
}

async function BCe(e, r) {
  let n = e.manifest.userConfig;
  if (!n || Object.keys(n).length === 0) return {};
  let s = await lP(sm(e), r), i = {};
  for (let [f, c] of Object.entries(n)) {
    let m = ko(s, f);
    if (m === void 0 || m === "" || c.sensitive !== !0 && !n8({
      [f]: m
    }, {
      [f]: c
    }).valid) i[f] = c;
  }
  return i;
}

function aio(e, r) {
  let n = e?.options;
  return n !== void 0 && !(typeof r === "string" && n.includes(r));
}

function A4e(e, r) {
  let n = {};
  for (let [i, f] of Object.entries(r)) {
    if (f.required && f.default === void 0) continue;
    n[i] = f.default ?? "";
  }
  let s = pE(e, (i, f) => {
    let c = r[f]?.options;
    if (c === void 0 || !aio(r[f], i)) return !0;
    return t(`plugin option ${f} holds a value that is not one of ${c.join(", ")}; it reads as unset`, {
      level: "warn"
    }), !1;
  });
  return {
    ...n,
    ...s
  };
}

function Rce(e, r) {
  let n = i => i, s = e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => n(r.path));
  if (s = s.replace(/\$\{CLAUDE_PROJECT_DIR\}/g, () => n(Qr() ?? Ir())), r.source) {
    let i = r.source;
    s = s.replace(/\$\{CLAUDE_PLUGIN_DATA\}/g, () => n(_Fe(i)));
  }
  return s;
}

var qe = "${CLAUDE_";

function Pus(e, r, n = "") {
  let s = e.split(qe).length - 1;
  if (s === 0) return 0;
  let i = Qr() ?? pm() ?? "";
  return r.path.includes(qe) || i.includes("$") ? 1 / 0 : s * 3 * Math.max(r.path.length, i.length, ah(r.source).length, n.length);
}

function xRt(e, r, {missingKey: n = "throw"} = {}) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (s, i) => {
    let f = ko(r, i);
    if (f === void 0) {
      if (n === "literal") return s;
      throw Error(`Plugin option "${i}" isn't set. Open /plugin manage to configure it, or check that the plugin's userConfig schema declares "${i}".`);
    }
    return String(f);
  });
}

function PRt(e, r) {
  try {
    return xRt(e, r) !== e;
  } catch {
    return !0;
  }
}

function Ymr(e, r, n, s) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (i, f) => {
    if (n[f]?.sensitive === !0) return `[sensitive option '${f}' not available in skill content]`;
    let c = ko(r, f);
    if (c === void 0) return i;
    let m = String(c);
    return s ? s(m) : m;
  });
}

function So(e, r, n) {
  let s = tDt(e, r);
  if (s.replaced.length === 0) return n;
  let i = [ ...s.replaced.toReversed(), s.written ], f = pE(n, (g, y) => !s.replaced.includes(y)), c = {
    ...pE(i.reduce((g, y) => ({
      ...g,
      ...e?.[y]?.options,
      ...y === s.written ? void 0 : n[y]?.options
    }), {}), g => g !== void 0),
    ...f[s.written]?.options
  }, m = D(i.flatMap(g => Object.keys(e?.[g]?.mcpServers ?? {})));
  return {
    ...f,
    ...Object.fromEntries(s.replaced.map(g => [ g, void 0 ])),
    [s.written]: {
      options: c,
      ...m.length === 0 ? {} : {
        mcpServers: Object.fromEntries(m.map(g => [ g, i.reduce((y, k) => ({
          ...y,
          ...e?.[k]?.mcpServers?.[g]
        }), {}) ]))
      }
    }
  };
}

var tgr = e => v9t({
  pluginName: e.name,
  pluginStorageId: sm(e)
});

var Ous = (e, r, n) => `${e}: ${r} did not answer within ${n}ms`;

var Mus = "the plugin is unloaded; /reload-plugins brings it back";

function J({members: e, event: r, e: n, hookOrigin: s, origin: i, raise: f, floors: c, cutAt: m, gestureAt: g, kind: y}) {
  let [k] = e;
  if (s) t(`hooks module ${ORt(e)}: ${r}${y} nested in ${egr(s)}`);
  let w = e.flatMap(h => {
    let T = [ ...h.leftOut ?? [] ], {environmentId: M, told: C, causes: H} = h;
    return T.length > 0 || C !== void 0 ? [ {
      environmentId: M,
      registrations: T,
      ...C && {
        told: [ ...C ]
      },
      ...H && {
        causes: {
          ...H
        }
      }
    } ] : [];
  });
  return {
    id: k ? k.hopKey.nextDispatchId() : 0,
    event: r,
    payload: n,
    environments: e.map(h => h.environmentId),
    leftOut: w.length === 0 ? void 0 : w,
    origin: i,
    hookOrigin: s,
    raise: f,
    floors: c.length === 0 ? void 0 : c,
    cutAt: m,
    ...g !== void 0 && {
      gestureAt: g
    }
  };
}

function Q(e, r, n) {
  if (!n || n.length === 0) return e;
  let s = S9t().get(n) ?? [], i = Date.now(), f = b => s[b]?.isLent !== !0 || s[b].isHeld === !0, {caller: c, above: m} = jt(n.filter((b, P) => f(P) || i < (s[P]?.until ?? 0)), e.name), g = (b, P) => b === "every" || b.includes(P), y = oe(n.slice(0, -1).filter((b, P) => f(P)), e.name), k = e.registrationsFor(r), w = k.filter(b => g(m, b) && !g(c, b) && e.hasCatch(b)), h = k.filter(b => !w.includes(b) && (g(c, b) || g(y, b)));
  if (h.length === 0 && w.length === 0) return e;
  let T = `origin ${egr(n)}`;
  if (!e.hooks(r, h)) {
    let b = c === "every" || m === "every";
    t(`hooks module ${e.label} ${r} skipped: re-entry (` + (b ? `the plugin's own code raised it; ${T})` : `its own frame is being dispatched; ${T})`));
    return;
  }
  let M = w.length > 0, C = h.length > 0;
  t(`hooks module ${e.label} ${r}: ` + [ ...C ? [ `hooks ${h.join(", ")} left out for re-entry` ] : [], ...M ? [ `hooks ${w.join(", ")} not run for re-entry, .catch asked` ] : [] ].join("; ") + ` (${T})`);
  let H = oe(n.slice(0, -1).filter((b, P) => s[P]?.isLent !== !0), e.name), S = w.filter(b => !g(H, b)), L = Object.fromEntries(S.map(b => [ b, "lent" ]));
  return {
    ...e,
    leftOut: h,
    ...M && {
      told: w
    },
    ...S.length > 0 && {
      causes: L
    },
    hooks: (b, P = []) => e.hooks(b, [ ...h, ...P ]),
    catches: (b, P = [], U) => e.catches(b, [ ...h, ...P ], U),
    matcherFor: (b, P = []) => e.matcherFor(b, [ ...h, ...P ])
  };
}

async function Qe({members: e, event: r, hookOrigin: n, signal: s}) {
  let i = e.find(f => f.status().kind === "dead")?.hopKey.replaced?.();
  if (i === void 0) return e;
  return t(`hooks module ${e.map(f => f.label).join(", ")}: ${r} waits for the hooks worker's replacement`), 
  await new Promise(f => {
    s.addEventListener("abort", () => f(), {
      once: !0
    }), i.then(f, f);
  }), e.flatMap(f => {
    let c = Ge().loadedModules.find(y => y.name === f.name);
    if (!(f.status().kind !== "live" && c !== void 0 && c.environmentId !== f.environmentId)) return [ f ];
    let g = c.hooks(r) ? Q(c, r, n) : void 0;
    return g === void 0 ? [] : [ g ];
  });
}

async function et({hop: e, dispatchId: r, members: n, error: s, called: i, beneath: f}) {
  let {event: c, e: m, signal: g} = e, y = M => M.filter(C => te(C, c, m)), k = l(s), w = Te(y(n), k), h = w[0]?.hopKey, T = h?.kept;
  while (w.length > 0 && !g.aborted) {
    let M = y(Z(await Qe({
      ...e,
      members: w
    }), c)), C = M[0]?.hopKey, H = M.find(S => S.name === T?.plugin);
    if (C === void 0 || g.aborted) break;
    t(`hooks module ${ORt(M)}: .catch asked in the replacement after the hooks worker ended during ${c}`);
    for (let S of M) S.enter();
    try {
      let S = await C.dispatch({
        ...J({
          ...e,
          members: M,
          kind: ""
        }),
        ended: {
          reason: k,
          called: i(),
          ...H !== void 0 && {
            kept: H.environmentId
          }
        }
      }, f, g), L = H !== void 0 && T !== void 0 && h?.isKeptVerdict?.(r, S.unmatched !== !0) === !0;
      for (let b of M) if (S.answered?.includes(b.environmentId) === !0) XW(b.name, `the hooks worker was replaced during ${c}; ${b.name}'s .catch answered in place of its hook`);
      if (L) C.unloadCrashed?.(H.environmentId, T);
      return S;
    } catch (S) {
      k = l(S), w = Te(M, k), t(`hooks module ${ORt(M)}: .catch not heard after the hooks worker ended during ${c}: ${k}` + (w.length > 0 ? "; asked again of whoever stands" : ""), {
        level: "error"
      });
    } finally {
      for (let S of M) S.leave();
    }
  }
  if (w.length > 0) t(`hooks module ${ORt(w)}: no .catch is asked after the hooks worker ended during ${c}: ` + (g.aborted ? "its caller is gone" : "no replacement that may be waited for holds its hook"), {
    level: "error"
  });
  return;
}

async function ngr(e) {
  let {event: r, e: n, call: s, signal: i, floors: f} = e, c = ye(e.members, r, n), m = c[0]?.hopKey;
  if (!m) return s(n, void 0, f);
  let g, y = (C, H, S) => (g = s(C, H, S), g), k = J({
    ...e,
    members: c,
    kind: ""
  }), w = performance.now();
  for (let C of c) C.enter();
  let h;
  try {
    h = await m.dispatch({
      ...k,
      caughtBy: c.filter(C => te(C, r, n)).map(C => C.environmentId)
    }, y, i);
  } catch (C) {
    let H = await et({
      hop: e,
      dispatchId: k.id,
      members: c,
      error: C,
      called: () => g !== void 0,
      beneath: (S, L, b) => g ?? y(S, L, b)
    });
    if (H === void 0) throw C;
    h = H;
  } finally {
    for (let C of c) C.leave();
  }
  let M = typeof n === "object" && "requestId" in n && typeof n.requestId === "string" ? ` key=${n.requestId}` : "";
  if (t(`hooks module ${ORt(c)} ${r} settled in ${(performance.now() - w).toFixed(1)}ms (${m.kind} hop, next() included)${M}`), 
  h.withheld === !0) e.withheld?.();
  return tt(h.result);
}

function we(e, r, n) {
  e.leave(), t(`hooks module ${e.label} ${r} settled in ${(performance.now() - n).toFixed(1)}ms (native link, next() included)`);
}

function be({loaded: e, event: r, origin: n}, s) {
  let i = Z([ e ], r).length === 1 && Zmr(e, r, s);
  if (i && n) t(`hooks module ${e.label} (native): ${r} nested in ` + egr(n));
  return i;
}

function Lo(e) {
  let {loaded: r, event: n, origin: s} = e;
  if (r.link === void 0) throw new Ie(`${r.name}: ${n}: not a native module; it runs in a hop`);
  let i = r.link({
    event: n,
    leftOut: r.leftOut,
    told: r.told,
    causes: r.causes,
    hookOrigin: s,
    gestureAt: e.gestureAt
  }), f = i.catch;
  async function c(y) {
    let k = performance.now();
    r.enter();
    try {
      return await y();
    } finally {
      we(r, n, k);
    }
  }
  async function m(y, k) {
    r.enter();
    try {
      return await (f?.(y, k));
    } finally {
      r.leave();
    }
  }
  let g = (y, k, w) => be({
    loaded: r,
    event: n,
    origin: s
  }, y) ? c(() => i.run(y, k, w)) : k(y);
  return Fo({
    ...i,
    run: g,
    ...f !== void 0 && {
      catch: m
    }
  });
}

function ot(e) {
  let {event: r, e: n, open: s, signal: i, floors: f} = e, c = ye(e.members, r, n), m = c[0]?.hopKey;
  if (!m) return s(n, void 0, f);
  let g = (w, h, T) => rPe(s(w, h, T)), y = performance.now();
  for (let w of c) w.enter();
  let k = m.dispatchStream(J({
    ...e,
    members: c,
    kind: " stream"
  }), g, i);
  return async function*() {
    try {
      let w = yield* rPe(k);
      return tt(w);
    } finally {
      for (let w of c) w.leave();
      t(`hooks module ${ORt(c)} ${r} stream settled in ${(performance.now() - y).toFixed(1)}ms (${m.kind} hop, next() included)`);
    }
  }();
}

function No(e) {
  let {loaded: r, event: n, origin: s} = e;
  if (r.streamLinks === void 0) throw new Ie(`${r.name}: ${n}: not a native module; it runs in a hop`);
  function i(f) {
    let c = performance.now();
    return r.enter(), async function*() {
      try {
        return yield* f;
      } finally {
        we(r, n, c);
      }
    }();
  }
  return r.streamLinks({
    event: n,
    leftOut: r.leftOut,
    told: r.told,
    causes: r.causes,
    hookOrigin: s
  }).map(f => {
    let c = f.catch;
    return {
      ...f,
      run: async (m, g, y) => be({
        loaded: r,
        event: n,
        origin: s
      }, m) ? i(await f.run(m, g, y)) : g(m),
      ...c !== void 0 && {
        catch: async (m, g, y) => i(await c(m, g, y))
      }
    };
  });
}

var Se = (e, r, n) => e.map(s => {
  let i = r.get(s);
  if (i === void 0) throw new Ie(`${n}: a hop member is not one of these handlers`);
  return i;
});

var rt = ({loaded: e, event: r, origin: n, raise: s, gestureAt: i, owners: f, withheld: c}) => ({
  name: e.name,
  tier: e.tier,
  ...ivo(e.args.modulePath) && {
    answersForEngine: !0
  },
  ...c && {
    withheld: c
  },
  run: (m, g, {call: y, floors: k, cutAt: w}) => ngr({
    members: [ e ],
    event: r,
    e: m,
    call: y,
    signal: g.signal,
    hookOrigin: n,
    raise: s,
    gestureAt: i,
    withheld: c,
    origin: g.origin,
    floors: k,
    cutAt: w
  }),
  hop: {
    key: e.hopKey,
    run: m => ngr({
      members: Se(m.members, f, r),
      event: r,
      e: m.e,
      call: m.call,
      signal: m.signal,
      hookOrigin: n,
      raise: s,
      gestureAt: i,
      withheld: c,
      origin: m.origin,
      floors: m.floors,
      cutAt: m.cutAt
    })
  }
});

function nt(e) {
  return e.loaded.link !== void 0 ? Lo(e) : rt(e);
}

function Ee(e) {
  let {loadedModules: r, moduleSeats: n} = Ge();
  return r.find(s => s.name === e)?.tier ?? n.get(e) ?? "user";
}

var wHn = e => Oxs.some(r => r === Ee(e));

function cio(e, r, n) {
  let s = e.matcherFor(r);
  if (s === void 0) return !0;
  try {
    if (Dut(s, n, dPe(r))) return !0;
  } catch (i) {
    return t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${l(i)}); the hop decides`), 
    !0;
  }
  return X(e, r, n), !1;
}

function st(e, r, {keys: n, e: s}) {
  let i = e.matcherFor(r);
  if (i === void 0 || !oS(s)) return !1;
  try {
    let c = dPe(r), m = n.some(g => Object.hasOwn(s, g) && !EWn(i, {
      [g]: s[g]
    }, c));
    if (m) X(e, r, s);
    return m;
  } catch (c) {
    return t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${l(c)}); the hop decides`), 
    !1;
  }
}

function PNe(e, r, {only: n, e: s, among: i, pinned: f} = {}) {
  let c = (i ?? Ge().loadedModules).flatMap(g => {
    if (!g.hooks(e) || g.name !== (n ?? g.name)) return [];
    let y = Q(g, e, r);
    return y === void 0 || f !== void 0 && st(y, e, f) ? [] : [ y ];
  });
  if (s === void 0) return c;
  let m = c.findIndex(g => cio(g, e, s));
  return m === -1 ? [] : c.slice(m);
}

function it({event: e, e: r, origin: n, only: s}) {
  let i = he(PNe(e, n, {
    only: s
  }), e, r).filter(c => c.link === void 0 && c.hopKey.isDeclared?.(c.name) !== !1 && te(c, e, r)).map(c => c.name);
  return i.length === 0 ? void 0 : new Ie(`${e} refused: the hooks worker is being replaced, and a hook on it with a .catch (${i.join(", ")}) cannot be asked until the reload is in`);
}

import { AsyncLocalStorage as Yo } from "async_hooks";

var E9t = new Yo;

function rgr(e, r) {
  let n = {
    isOver: !1
  }, s = e.run(n, r), i = () => {
    n.isOver = !0;
  };
  return s.then(i, i), s;
}

var Izs = e => rgr(E9t, e);

var uio = () => E9t.getStore()?.isOver === !1;

function vHn(e, r) {
  let n = [ ...Ge().hooksRespawns ], s = n.length > 0 && uio(), i = s ? it(e) : void 0;
  if (i !== void 0) return t(i.message, {
    level: "error"
  }), Promise.reject(i);
  if (n.length === 0 || s) return;
  let f = Promise.all(n).then(() => {});
  return (r !== void 0 ? Ea(f, r, () => sAr(r)) : f).then(() => vHn(e, r));
}

function k9t(e, r) {
  let n = Ge();
  return n.hooksRespawns.size > 0 && n.loadedModules.some(i => i.link === void 0 && i.hooks(e.event)) ? vHn(e, r) : void 0;
}

function pio(e, r) {
  let s = e.event === "classic.SessionEnd" ? void 0 : k9t(e, r);
  return s !== void 0 && r !== void 0 ? s.catch(f => Promise.reject(r.aborted ? Tpe(r) : f)) : s;
}

function nH(e, r, n = {}) {
  let s = [], i = new Map;
  for (let f of PNe(e, r, n)) {
    let c = nt({
      loaded: f,
      event: e,
      origin: r,
      raise: n.raise,
      gestureAt: n.gestureAt,
      owners: i,
      withheld: n.withheld
    });
    i.set(c, f), s.push(c);
  }
  return s;
}

function Pce(e, r, n) {
  let s = dPe(e);
  return Ge().loadedModules.filter(i => {
    let f = i.hooks(e) ? Q(i, e, n) : void 0;
    if (f === void 0) return !1;
    return EWn(f.matcherFor(e), r, s);
  }).map(i => i.name);
}

var tt = e => e;

var Fo = e => e;

var ft = e => [ ...e ];

function e7(e) {
  let r = e?.at(-1);
  if (r === void 0) return PUe;
  let n = b9t(r);
  return Object.freeze({
    plugin: n,
    tier: Ee(n)
  });
}

function Hus(e) {
  let {promise: r, resolve: n} = Promise.withResolvers();
  return e.add(r), {
    respawn: r,
    loaded: () => {
      e.delete(r), n();
    }
  };
}

var ct = (e, r) => ({
  name: e.loaded.name,
  tier: e.loaded.tier,
  run: (n, s, {open: i, floors: f}) => ot({
    members: [ e.loaded ],
    event: e.event,
    e: n,
    open: i,
    signal: s.signal,
    hookOrigin: e.origin,
    raise: e.raise,
    origin: s.origin,
    floors: f
  }),
  hop: {
    key: e.loaded.hopKey,
    run: ({members: n, e: s, open: i, signal: f, origin: c, floors: m}) => ot({
      members: Se(n, r, e.event),
      event: e.event,
      e: s,
      open: i,
      signal: f,
      hookOrigin: e.origin,
      raise: e.raise,
      origin: c,
      floors: m
    })
  }
});

function Dus(e, r, n = {}) {
  let s = new Map;
  return PNe(e, r, n).flatMap(i => {
    if (i.streamLinks !== void 0) return ft(No({
      loaded: i,
      event: e,
      origin: r
    }));
    let f = ct({
      loaded: i,
      event: e,
      origin: r,
      raise: n.raise,
      gestureAt: void 0
    }, s);
    return s.set(f, i), [ f ];
  });
}

var Ozs = 3;

var Lus = e => `${e}: the op was aborted: the plugin's environment was unloaded`;

export { _Hn, E4e, k4e, y9t, tH, Aus, cbe, fit, n8, T4e, sm, mit, lP, ube, UCe, Cus, Rus, iio, xus, BCe, aio, A4e, Rce, Pus, xRt, PRt, Ymr, bHn, qre, IRt, lio, Xmr, Jmr, Qmr, xce, SHn, xNe, Yre, XW, Zmr, _9t, b9t, S9t, egr, w9t, dio, Pzs, ORt, v9t, Ius, tgr, Ous, Mus, ngr, wHn, cio, PNe, E9t, rgr, Izs, uio, vHn, k9t, pio, nH, Pce, e7, Hus, Dus, Ozs, Lus };
