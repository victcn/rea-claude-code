// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { Ye, W } from "./chunk-b0z4bv3v.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { ke } from "./chunk-3pqddg8f.js";

import { J } from "./chunk-nvtwm272.js";

import { Li, va, gD, Cs } from "./chunk-ddr690nj.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { _, s6, t } from "./chunk-kawq2919.js";

import { dl, sc, nt } from "./chunk-5wbhf1bk.js";

import { nq, oM } from "./chunk-e2610wvk.js";

import { Ngt, tUs, nUs, rUs, oUs, sUs, iUs, aUs, lUs, dUs, cUs, Rje, n6 } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { lZ, GF, awe, Qbo, Xct, Jct, dZ } from "./chunk-kd22gz0e.js";

import { wa, _c } from "./chunk-vps0k559.js";

import { Aee, Qa } from "./chunk-nc0jxmkt.js";

import { a } from "./chunk-j016gcgm.js";

import { Z5, HG, QXe } from "./chunk-5brm0azz.js";

import { hC, RPs, xPs, Gt } from "./chunk-xywp7esx.js";

import { Jr, M9, WR } from "./chunk-s2t7g8m9.js";

import { Oo, oj, fn, hIe, nr, BAo, Yt, o$, Hn, _l, YAo } from "./chunk-f1zpf9me.js";

import { l$ } from "./chunk-g6nh65r0.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { XL, Zqt, Qle, BVe, ysr, rQ, Df, _Xr, bXr, Zle, zEt, Pnt, o0e, Ssr, o3, VEt, FAn, Wne } from "./chunk-69rr80fg.js";

import { WY, hf, fen } from "./chunk-6sf4kq52.js";

import { Ag } from "./chunk-3zb1ef23.js";

import { vZo, s3, EZo, Mnt, Hnt, sQ, JL, iQ, eF, aQ, Dsr, zne, VVe, Dnt, iAe, FA, vc } from "./chunk-btyj9pkf.js";

import { xsr } from "./chunk-2egwyx4e.js";

import { L6e, ph, lk, yse, lT, nZ } from "./chunk-ann91fyn.js";

import { cH, eu, WV } from "./chunk-z655gvmz.js";

import { o$n } from "./chunk-parjx3zq.js";

import { YL } from "./chunk-8rx1kgjh.js";

import { mMt, $xe, Fxe, xEr, ZFe, wt, Fen, yMt, T_o, A_o, PEr, _ct, qSe, _Mt, x1, bMt, YSe, bct, Sct, HN, YY } from "./chunk-hk8p0fqv.js";

import { o, M, u } from "./chunk-cvcg6n1z.js";

var Fe = {
  chat: {
    family: "chat",
    needsId: !0
  },
  share: {
    family: "share",
    needsId: !0
  },
  task: {
    family: "task",
    needsId: !0
  },
  cowork: {
    family: "cowork",
    needsId: !0
  },
  "cowork-artifact": {
    family: "cowork_artifact",
    needsId: !0
  },
  project: {
    family: "project",
    needsId: !0
  },
  design: {
    family: "design",
    needsId: !1
  },
  settings: {
    family: "settings",
    needsId: !1
  },
  api: {
    family: "api",
    needsId: !1
  }
}, pt = {
  chat: "chat",
  share: "shared chat",
  task: "task",
  cowork: "task",
  code_session: "session",
  epitaxy: "session",
  project: "project"
};

function ht(e) {
  let [n, r, s] = e;
  if (n === void 0) return "other";
  if (n === "artifact") return r === void 0 ? "artifact_bare" : "artifact";
  if (n === "artifacts") return r === void 0 || r === "design" ? "artifacts_gallery" : "chat_artifact";
  if (n === "public" && r === "artifacts") return "chat_artifact";
  if (n === "code") {
    if (r === "artifact" || r === "frame") return s === void 0 ? "artifact_bare" : "artifact";
    if (r === "artifacts") return "artifacts_gallery";
    return r === void 0 ? "other" : "code_session";
  }
  if (n === "epitaxy") {
    if (r === "artifact") return "epitaxy_artifact";
    return r === void 0 ? "other" : "epitaxy";
  }
  let i = Object.hasOwn(Fe, n) ? Fe[n] : void 0;
  if (i === void 0 || i.needsId && r === void 0) return "other";
  return i.family;
}

function w9r(e) {
  let n = o$(e), r = BAo(n);
  if (r === null) return null;
  let s;
  try {
    s = new URL(n);
  } catch {
    return null;
  }
  let i = s.searchParams.get("artifact") || s.searchParams.get("frame"), l = null;
  if (i !== null) {
    let d = i.toLowerCase();
    l = nr.test(d) ? d : oj(i);
  }
  return {
    family: ht(s.pathname.split("/").filter(d => d !== "")),
    env: r,
    artifact: l === null ? null : {
      slug: l
    }
  };
}

function Yor(e, n = {}) {
  let r = `not an artifact URL: ${e} \u2014`, s = w9r(e), i = s === null ? void 0 : pt[s.family];
  if (s !== null && i !== void 0 && s.artifact !== null) {
    let b = Hn({
      slug: s.artifact.slug,
      env: s.env
    });
    return `${r} that is a claude.ai ${i} link; pass the artifact's own URL (${b}) as \`${n.field ?? "url"}\`.`;
  }
  if (s?.family === "design") {
    let b = n.designToolName === void 0 ? "" : `; use the ${n.designToolName} tool`;
    return `${r} that is a Claude Design link, which the ${fn} tool cannot open${b}.`;
  }
  if (s?.family === "chat_artifact" || /^https:\/\/(?:www\.)?claude\.site(?:[/?#]|$)/.test(o$(e.trim()))) return `${r} that is an artifact from a claude.ai chat (the chat's artifact panel or its public page), which is separate from artifacts published with this tool and has no ${hIe()} link, so this tool cannot read it. If the user wants its content used here, ask them to paste it or save it to a file in this session; if they meant one of their published artifacts, action: "list" shows those.`;
  if (i !== void 0) return `${r} that is a claude.ai ${i} link, not a published artifact, and this tool cannot read a ${i}. If the user meant an artifact shown in that ${i}, ask them for the artifact's own ${hIe()} link or find it with action: "list"; otherwise ask them to paste the content they want used.`;
  let d = e.trim(), y = nr.test(d.toLowerCase()) ? d.toLowerCase() : oj(d);
  if (s === null && y !== null) return `${r} that looks like an artifact id on its own; if it is one, pass the full link ${Hn({
    slug: y,
    env: Oo()
  })} as \`${n.field ?? "url"}\`.`;
  return `${r} pass the artifact's ${hIe()} link (action: "list" shows them).`;
}

import { lstat as le, open as gt, readlink as mt, realpath as ye, stat as yt } from "fs/promises";

async function wW(e, n) {
  let r = Buffer.alloc(n + 1), s = 0;
  while (s < r.length) {
    let {bytesRead: i} = await e.read(r, s, r.length - s, s);
    if (i === 0) break;
    s += i;
  }
  return s === n ? r.subarray(0, n) : null;
}

import { constants as xe } from "fs";

import { dirname as Le, isAbsolute as Q, join as _e, normalize as Y, relative as _t, sep as te } from "path";

function RVe(e) {
  return Cs(e) || va(e) || gD(e);
}

function Vx(e) {
  if (RVe(e)) return !0;
  let {paths: n, vetted: r} = s6(e);
  return !r || n.some(RVe);
}

function se(e) {
  return Cs(e) || va(e) || gD(e);
}

var zE = 512, qI = 255, iAn = FAn - 1, Fne = qI + 1;

function ve(e, n) {
  if (e.length === 0) return {
    errMsg: `${n} may not be empty`
  };
  if (e.length > zE) return {
    errMsg: `${n} is longer than ${zE} characters`
  };
  let r = e.normalize("NFC");
  if (/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(r) || !sc(r)) return {
    errMsg: `${n} ${hf(e)} contains control, formatting, line-separator, or private-use characters, or a malformed one`
  };
  if (r.includes("\\")) return {
    errMsg: `${n} ${hf(e)} contains a backslash \u2014 published paths use forward slashes on every platform`
  };
  if (/[?#%]/.test(r)) return {
    errMsg: `${n} ${hf(e)} contains characters that cannot appear in a served URL path ("?", "#", "%")`
  };
  if (r.startsWith("/")) return {
    errMsg: `${n} ${hf(e)} is absolute \u2014 published paths are relative to the artifact root`
  };
  let s = r.split("/");
  if (s.some(i => i === "")) return {
    errMsg: `${n} ${hf(e)} has an empty path segment`
  };
  if (s.some(i => i === "." || i === "..")) return {
    errMsg: `${n} ${hf(e)} contains "." or ".." segments \u2014 pass the plain served path`
  };
  if (s.some(i => i === "__proto__" || i === "constructor" || i === "prototype")) return {
    errMsg: `${n} ${hf(e)} contains a reserved name ("__proto__", "constructor", "prototype")`
  };
  if (/[:;]/.test(r)) return {
    errMsg: `${n} ${hf(e)} contains ":" or ";", which no published path may`
  };
  return {
    nfc: r
  };
}

function aAn(e, {removal: n = !1} = {}) {
  let r = ve(e, "files: published path");
  if ("errMsg" in r) return r;
  let {nfc: s} = r;
  if (s === "index.html") return {
    errMsg: 'files: "index.html" cannot be a published path \u2014 the `html` argument is always the index. Pass that file\'s content as `html` and remove the "index.html" mapping.'
  };
  if (s.startsWith("_")) return {
    errMsg: `files: published path ${hf(e)} starts with "_", which the artifact service reserves for its own names \u2014 rename the file or its top-level directory`
  };
  if (!n && Xor(s)) return {
    errMsg: `files: published path ${hf(e)} is a name the artifact service answers with one of its own views, so the file could never be read back \u2014 rename it`
  };
  return {
    key: s
  };
}

function Xor(e) {
  return e.startsWith("_") || e === "index.html.json" || e === ".json";
}

function $2(e) {
  let n = ve(e, "path");
  if ("errMsg" in n) return n;
  let {nfc: r} = n;
  if (Xor(r)) return {
    errMsg: `path ${hf(e)} names one of the artifact service's own views, not a published file; list_files shows the readable paths`
  };
  return {
    key: r
  };
}

var I7o = 1048576, bt = /\.(?:png|jpe?g)$/i;

function O7o(e) {
  let n = ve(e, "thumbnail href");
  if ("errMsg" in n) return n;
  if (!bt.test(n.nfc)) return {
    errMsg: `thumbnail href ${JSON.stringify(e)} is not a .png, .jpg or .jpeg file \u2014 custom thumbnails are PNG or JPEG images`
  };
  return {
    rel: n.nfc
  };
}

function xVe(e, n, r) {
  return e === n || e.startsWith(n + te) || e === r || e.startsWith(r + te);
}

function v9r(e, n, r) {
  let s = PVe(Y(n));
  if (s === r) return e;
  if (e === s) return r;
  return e.startsWith(s + te) ? r + e.slice(s.length) : e;
}

function PVe(e) {
  let n = e.replace(/\/+$/, "");
  return n === "" ? e : n;
}

function IVe(e, n) {
  if (se(e)) return null;
  if (e === "~" || e.startsWith(`~${te}`) || e.startsWith("~/")) return null;
  if (Q(e)) {
    let s = Y(e);
    return se(s) ? null : s;
  }
  let r = Y(e);
  if (r === ".." || r.startsWith(`..${te}`)) return null;
  return _e(n, r);
}

function E9r(e) {
  return `files: ${JSON.stringify(e)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 list the link's target path instead`;
}

async function t3(e) {
  let n = PVe(e);
  for (let r = 0; r < 40; r++) {
    let s;
    try {
      s = await mt(n);
    } catch {
      return !1;
    }
    if (Li(s, Le(n))) return !0;
    if (s.split(/\/+/).includes("..")) return !0;
    if (n = PVe(Q(s) ? Y(s) : _e(Le(n), s)), se(n)) return !0;
  }
  return !0;
}

function At(e, n) {
  return n.some(r => xVe(e, r.lex, r.real));
}

function Ae(e, n) {
  return n.some(r => e === r.real || e.startsWith(r.real + te));
}

function Re(e) {
  return !e.isSymbolicLink() && e.isDirectory();
}

async function Rt(e) {
  if (e === void 0 || !Q(e)) return [];
  let n = PVe(Y(e)), r;
  try {
    r = await le(n);
  } catch (l) {
    return W(l) ? [ {
      kind: "scratchpad",
      lex: n,
      real: n
    } ] : [];
  }
  if (!Re(r) || await t3(n)) return [];
  let s = await ye(n).catch(() => n), i = await le(n).catch(() => {});
  return i !== void 0 && Re(i) && i.ino === r.ino && i.dev === r.dev ? [ {
    kind: "scratchpad",
    lex: n,
    real: s
  } ] : [];
}

async function k9r(e, n) {
  let r = [];
  for (let s of e ?? []) {
    if (!Q(s) || se(s)) continue;
    let i = PVe(Y(s));
    if (i === n.lex || i === n.real) continue;
    try {
      let l = await le(i);
      if (!Re(l) || await t3(i)) continue;
      if (a.CLAUDE_CODE_EVAL_CONFINED && i === ke()) {
        r.push({
          kind: "dir",
          lex: i,
          real: i
        });
        continue;
      }
      let d = await ye(i);
      if (se(d)) continue;
      let y = await le(i);
      if (Re(y) && y.ino === l.ino && y.dev === l.dev) r.push({
        kind: "dir",
        lex: i,
        real: d
      });
    } catch {}
  }
  return r;
}

function Ue(e) {
  let n = e.filter(i => i.kind !== "scratchpad"), r = n.map(i => _(i.lex)).join(", "), s = e.some(i => i.kind === "scratchpad") ? " or your scratchpad directory" : "";
  return n.length > 1 ? {
    where: `the session's working directories (${r})${s}`,
    under: "a path under one of them"
  } : {
    where: `the working directory (${r})${s}`,
    under: s === "" ? "a path under it" : "a path under one of them"
  };
}

function De(e) {
  return e.kind === "scratchpad" ? "your scratchpad directory" : e.kind === "cwd" ? `the working directory (${_(e.lex)})` : `${_(e.lex)} (one of the session's working directories)`;
}

async function kt(e, n, r) {
  let s = await ye(e), i = {
    kind: "cwd",
    lex: PVe(Y(e)),
    real: s
  }, l = [ i, ...await k9r(r?.workingDirs, i), ...await Rt(r?.scratchpadDir) ], {where: d, under: y} = Ue(l);
  if (n === void 0) return {
    anchors: l,
    realRoot: s,
    lexRoot: Y(e)
  };
  if (se(n)) return {
    errMsg: `root: ${JSON.stringify(n)} is a network path \u2014 the publish base must lie within ${d}`
  };
  let b = Y(n);
  if (!Q(b) && (b === ".." || b.startsWith(`..${te}`))) return {
    errMsg: `root: ${JSON.stringify(n)} escapes the working directory \u2014 ` + "a relative publish base must lie within it"
  };
  let v = Q(b) ? l.find(T => xVe(b, T.lex, T.real)) : l[0];
  if (v === void 0) return {
    errMsg: `root: ${JSON.stringify(n)} is outside ${d} \u2014 pass ${y}`
  };
  let P = Q(b) ? b : _e(s, b), S = r?.denyPath?.(P, !1, n);
  if (S !== void 0) return {
    errMsg: S
  };
  if (Vx(P) || await t3(P)) return {
    errMsg: `root: ${JSON.stringify(n)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 pass the target directory itself`
  };
  let N;
  try {
    N = await ye(P);
  } catch {
    return {
      errMsg: `root: ${JSON.stringify(n)} not found`
    };
  }
  if (se(N)) return {
    errMsg: `root: ${JSON.stringify(n)} resolves to a network path \u2014 the publish base must lie within ${d}`
  };
  if (!Ae(N, [ v ])) return {
    errMsg: Ae(N, l) ? `root: ${_(n)} is a link from ${De(v)} into ${De(l.find(T => Ae(N, [ T ])) ?? v)} \u2014 pass the directory it points to instead` : `root: ${JSON.stringify(n)} resolves outside ${d} \u2014 the publish base must lie within it`
  };
  let k;
  try {
    k = await yt(N);
  } catch {
    return {
      errMsg: `root: ${JSON.stringify(n)} not found`
    };
  }
  if (!k.isDirectory()) return {
    errMsg: `root: ${JSON.stringify(n)} is not a directory`
  };
  let V = PVe(Q(b) ? b : _e(Y(e), b));
  return {
    anchors: l,
    realRoot: N,
    lexRoot: V
  };
}

async function T9r(e, n, r, s) {
  let i = await kt(n, r, s);
  if ("errMsg" in i) return i;
  let {anchors: l, realRoot: d, lexRoot: y} = i, {where: b, under: v} = Ue(l);
  if (s?.expectedRealRoot !== void 0 && s.expectedRealRoot !== d) return {
    errMsg: "root: the publish base resolves to a different location than " + "was approved \u2014 it changed between approval and publishing; " + "retry the publish"
  };
  if (e.length === 0) return {
    errMsg: "files: the file map is empty \u2014 list at least one file"
  };
  if (e.length > qI) return {
    errMsg: `files: ${e.length} files + index.html exceeds the ${qI + 1} entries one publish may name; send at most ${qI} now and the rest in another publish to the same url`
  };
  let P = [], S = new Set, N = 0;
  for (let k of e) {
    let V = aAn(k.to);
    if ("errMsg" in V) return V;
    let T = V.key;
    if (S.has(T)) return {
      errMsg: `files: published path ${hf(T)} appears more than once`
    };
    S.add(T);
    let R = k.from;
    if (se(R)) return {
      errMsg: `files: ${JSON.stringify(R)} is a network path \u2014 only files under ${b} can be published`
    };
    if (R === "~" || R.startsWith(`~${te}`) || R.startsWith("~/")) return {
      errMsg: `files: ${JSON.stringify(R)} \u2014 "~" is not expanded here; pass a base-relative or absolute path`
    };
    let j = Q(R) ? void 0 : Y(R);
    if (j !== void 0 && (j === ".." || j.startsWith(`..${te}`))) return {
      errMsg: `files: ${JSON.stringify(R)} escapes the publish base \u2014 ` + `only files under ${b} can be published`
    };
    let F = IVe(R, d);
    if (F === null) return {
      errMsg: `files: ${JSON.stringify(R)} cannot be resolved`
    };
    if (Q(R) && !At(F, l)) return {
      errMsg: `files: ${JSON.stringify(R)} is outside ${b} \u2014 pass ${v}`
    };
    let E = s?.denyPath?.(F, !1, R);
    if (E !== void 0) return {
      errMsg: E
    };
    if (y !== d) {
      let x = j ?? (F.startsWith(d + te) ? _t(d, F) : void 0);
      if (x !== void 0) {
        let I = s?.denyPath?.(_e(y, x), !0, R);
        if (I !== void 0) return {
          errMsg: I
        };
      }
    }
    if (Vx(F) || await t3(F)) return {
      errMsg: E9r(R)
    };
    let U;
    try {
      U = await ye(F);
    } catch (x) {
      return {
        errMsg: `files: ${JSON.stringify(R)} not found`,
        ...W(x) && {
          missing: !0
        }
      };
    }
    if (se(U)) return {
      errMsg: `files: ${JSON.stringify(R)} resolves to a network path \u2014 only files under ${b} can be published`
    };
    if (!Ae(U, l)) return {
      errMsg: `files: ${JSON.stringify(R)} resolves outside ${b} (symlink?) \u2014 only files under it can be published`
    };
    if (U !== F) {
      let x = s?.denyPath?.(U, !0, R);
      if (x !== void 0) return {
        errMsg: x
      };
    }
    try {
      let x = await le(U);
      if (x.isSymbolicLink()) return {
        errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
      };
      if (!x.isFile()) return {
        errMsg: `files: ${JSON.stringify(R)} is not a regular file`
      };
    } catch (x) {
      return {
        errMsg: `files: ${JSON.stringify(R)} not found`,
        ...W(x) && {
          missing: !0
        }
      };
    }
    let A;
    try {
      A = await gt(U, xe.O_RDONLY | (xe.O_NOFOLLOW | xe.O_NONBLOCK));
    } catch (x) {
      if (x?.code === "ELOOP") return {
        errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
      };
      return {
        errMsg: `files: ${JSON.stringify(R)} not found`,
        ...W(x) && {
          missing: !0
        }
      };
    }
    let G, H;
    try {
      try {
        if ((await le(U)).isSymbolicLink()) return {
          errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
        };
      } catch (I) {
        return {
          errMsg: `files: ${JSON.stringify(R)} not found`,
          ...W(I) && {
            missing: !0
          }
        };
      }
      let x = await A.stat();
      if (!x.isFile()) return {
        errMsg: `files: ${JSON.stringify(R)} is not a regular file`
      };
      if (a.CLAUDE_CODE_EVAL_CONFINED && x.nlink > 1) return {
        errMsg: `files: ${JSON.stringify(R)} has more than one hard link`
      };
      if (x.size > Df) return {
        errMsg: `files: ${JSON.stringify(R)} is ${Math.ceil(x.size / 1024 / 1024)}MB (per-file max ${Df / 1024 / 1024}MB)`,
        tooLarge: !0
      };
      if (N += x.size, N > o3) return {
        errMsg: `files: total content exceeds ${o3 / 1024 / 1024}MB at ${JSON.stringify(R)} \u2014 the most one publish sends; publish the files up to it now and the rest in another publish to the same url (a version may total ${VEt / 1024 / 1024}MB)`
      };
      if (H = k.contentType ?? WY(T), H === void 0) return {
        errMsg: fen("files", T),
        notServedPath: T
      };
      try {
        let I = await wW(A, x.size);
        if (I === null) return {
          errMsg: `files: ${JSON.stringify(R)} changed while it was read \u2014 retry the publish`
        };
        G = I;
      } catch {
        return {
          errMsg: `files: ${JSON.stringify(R)} could not be read`
        };
      }
      P.push({
        path: T,
        content: G,
        contentType: H,
        ...k.live !== void 0 && {
          live: k.live
        },
        ...k.reseed === !0 && {
          reseed: !0
        }
      });
    } finally {
      await A.close();
    }
  }
  return {
    files: P
  };
}

async function M7o(e, n, r, s) {
  let i = /\.png$/i.test(n) ? ".png" : ".jpg", l = await T9r([ {
    to: `thumbnail${i}`,
    from: n
  } ], r, void 0, s);
  if ("errMsg" in l) return {
    errMsg: `thumbnail ${JSON.stringify(e)}: ${l.errMsg.replace(/^files: /, "")}`,
    missing: l.missing === !0,
    tooLarge: l.tooLarge === !0
  };
  let d = l.files[0].content;
  return {
    content: typeof d === "string" ? Buffer.from(d) : d
  };
}

var PEt = "passive";

var Et = 6e5, He = /^(\d{1,15})-/;

function Ee(e) {
  let n = e === void 0 ? void 0 : He.exec(e)?.[1];
  return n !== void 0 && Number(n) * 1e3 <= Date.now() + Et ? e : void 0;
}

function A9r(e, n) {
  let {live: r} = ee();
  if (Ee(n) === void 0) {
    if (!r.heardAheadOfClockReported && He.test(n)) r.heardAheadOfClockReported = !0, 
    f("artifact_live_subscribe", "heard_version_skipped_ahead_of_clock");
    return;
  }
  let s = r.heardVersions.get(e), i = s === void 0 ? 1 : XL(n, s.ver);
  if (i !== null && i > 0) r.heardVersions.set(e, {
    ver: n,
    toldTo: new Set
  });
}

function Iqt(e, n) {
  let {supervisors: r, heardVersions: s} = ee().live, i = r.get(e);
  if (i === void 0 || n === void 0) return {
    behind: !1
  };
  let l = St(Ee(s.get(e)?.ver), Ee(i.carriedVer));
  if (l === void 0 || BVe(i.ownPublishes, e) || Zqt(i.ownPublishes, e, l)) return {
    behind: !1
  };
  let d = XL(l, n);
  return d !== null && d > 0 ? {
    behind: !0,
    liveVer: l
  } : {
    behind: !1
  };
}

function H7o(e, n, r) {
  let s = Iqt(e, n);
  if (!s.behind) return;
  let i = ee().live.heardVersions.get(e);
  return i?.ver === s.liveVer && i.toldTo.has(r ?? "main") ? void 0 : {
    liveVer: s.liveVer
  };
}

function D7o(e, n, r) {
  if (Ee(n) === void 0) return;
  let s = ee().live.heardVersions, i = s.get(e), l = r ?? "main";
  if (i?.ver === n) {
    i.toldTo.add(l);
    return;
  }
  let d = i === void 0 ? -1 : XL(i.ver, n);
  if (d !== null && d < 0) s.set(e, {
    ver: n,
    toldTo: new Set([ l ])
  });
}

function lAn(e, n) {
  let r = ee().live.heardVersions;
  if (n === void 0 || r.get(e)?.ver === n) r.delete(e);
}

function St(e, n) {
  if (e === void 0 || n === void 0) return e ?? n;
  let r = XL(e, n);
  return r !== null && r < 0 ? n : e;
}

var L7o = [ "org_pinned_instance", "pipeline_instance", "template_instance" ], We = {
  first_party_type: 0,
  org_pinned_instance: 1,
  pipeline_instance: 2,
  template_instance: 3
};

function Oqt(e, n, r) {
  if (HN(r)) return;
  let {attestedTypeArtifacts: s} = ee(), i = s.get(e) ?? {}, l = i.revokedAt?.[n];
  if (l !== void 0 && r <= l) return;
  let d = i.mark;
  if (d === void 0 || r > d.issuedAt || r === d.issuedAt && We[n] < We[d.kind]) s.set(e, {
    ...i,
    mark: {
      kind: n,
      issuedAt: r
    }
  });
}

function Jor(e, n, r) {
  if (HN(r)) return;
  let {attestedTypeArtifacts: s} = ee(), i = s.get(e) ?? {}, l = {
    ...i.revokedAt
  };
  for (let b of n) l[b] = Math.max(l[b] ?? r, r);
  let d = i.mark, y = d !== void 0 && !(n.includes(d.kind) && d.issuedAt <= r) ? d : void 0;
  s.set(e, {
    ...y && {
      mark: y
    },
    revokedAt: l
  });
}

var Tt = p(() => u({
  firstPartyType: M().optional(),
  typeFirstParty: M().optional(),
  template: M().optional()
}));

function Ke(e, n, r, s, i) {
  if (n === void 0) return;
  let l = Tt().safeParse(n);
  if (!l.success) return;
  let d = l.data, y = i.external;
  if (d.firstPartyType === !0) {
    if (!y) Oqt(e, "first_party_type", s);
    return;
  }
  if (d.typeFirstParty !== !0) return;
  if (r !== void 0 && nr.test(r)) Oqt(r, "first_party_type", s);
  if (y) return;
  if (d.template === !0) Oqt(e, "template_instance", s); else Jor(e, [ "template_instance" ], s);
}

function jb(e) {
  return ee().attestedTypeArtifacts.get(e)?.mark?.kind;
}

function N7o(e) {
  return jb(e) !== void 0;
}

function C9r(e) {
  switch (e) {
   case "first_party_type":
    return "a published first-party Artifact type";

   case "org_pinned_instance":
    return "an Artifact the organization's admins pinned for its type (its design system or template)";

   case "pipeline_instance":
    return "a template the organization's publishing pipeline owns";

   case "template_instance":
    return "a design system (an Artifact made from a template Artifact type) in the user's organization";
  }
}

function bnt(e) {
  let n = jb(e);
  return n === void 0 ? "" : ` [attested: ${C9r(n)}]`;
}

var xt = 6e5;

function je(e, n) {
  let r = ee();
  if (n === void 0) {
    if (r.sandboxEgress.delete(e)) t(`[artifact] sandbox egress setting for ${e} withdrawn`);
    return;
  }
  r.sandboxEgress.set(e, {
    setting: n,
    at: Date.now()
  }), t(`[artifact] sandbox egress setting for ${e}: ${n}`);
}

function $7o(e = Oo()) {
  if (!M9()) return a.CLAUDE_CODE_REMOTE === !0 && !WR() ? void 0 : !1;
  let n = ee().sandboxEgress.get(e);
  if (n === void 0 || Date.now() - n.at >= xt) return;
  return n.setting === "disabled";
}

var F7o = "what the artifact is for and the key decisions; the repo, branch, and commit it was built from; data sources used (MCP servers, load-bearing files); whether embedded data is a snapshot and as of when; known limitations and suggested next steps";

var vt = 16384;

var qn = `\n[prompt truncated: exceeded ${vt / 1024}KB]`;

var Ot = /^[\w.:@+-]{1,56}(?:\[[A-Za-z0-9]{1,6}\])?$/, Ct = p(() => {
  let e = o().refine(r => r.trim() !== "").optional().catch(void 0), n = o().trim().regex(Ot).optional().catch(void 0);
  return u({
    prompt: e,
    context: e,
    model: n,
    client_version: n
  });
});

function ze(e) {
  let n = Ct().safeParse(e);
  if (!n.success) return;
  let {prompt: r, context: s, model: i, client_version: l} = n.data, d = {
    ...r !== void 0 && {
      prompt: r
    },
    ...s !== void 0 && {
      context: s
    },
    ...i !== void 0 && {
      model: i
    },
    ...l !== void 0 && {
      clientVersion: l
    }
  };
  return Object.keys(d).length > 0 ? d : void 0;
}

var $t = 2e3, Mt = 6e3;

function Pt(e) {
  return {
    prompt: Math.min($t, Math.floor(e / 16)),
    context: Math.min(Mt, Math.floor(3 * e / 16))
  };
}

function Ge(e, n, r) {
  let s = e.trim(), i = Array.from(s);
  return i.length <= n ? s : `${i.slice(0, n).join("")}\n[${r} truncated after ${n} characters]`;
}

function R9r(e, n) {
  return "";
}

var Bt = /[\x00-\x08\x0b-\x1f\x7f-\x9f\u2028\u2029]+/g;

function x9r(e) {
  return _l(l$(Rje, e.replace(Bt, " ")));
}

var P9r = 4194304, Je = 3149824;

function Xe(e) {
  let n = e.length;
  while (n > 0 && ` \t\r\n`.includes(e[n - 1])) n--;
  let r = e.slice(0, n);
  if (!r.endsWith("<\/script>")) return e;
  let s = r.slice(0, r.length - 9), i = s.lastIndexOf('<script type="application/json" id="__frame_comments__">');
  if (i === -1) return e;
  let l = s.slice(i + 56);
  if (l.includes("<")) return e;
  let d;
  try {
    d = JSON.parse(l);
  } catch {
    return e;
  }
  if (typeof d !== "object" || d === null || Array.isArray(d)) return e;
  let y = d;
  if (typeof y.mac !== "string" || y.mac.length === 0) return e;
  if (!Object.hasOwn(d, "payload")) return e;
  let b = s.slice(0, i);
  if (b.endsWith(`\n`)) b = b.slice(0, -1);
  return b;
}

function tQ(e) {
  return Qor(e) || e.outsideOrg === !0;
}

function dAn(e) {
  return Qor(e) || e.outsideWriter === !0;
}

function Qor(e) {
  return e.authoredByOthers === !0 || e.role !== "owner" || e.publicRead || e.cowritten || e.typeLocked;
}

function Nt(e) {
  if (!Array.isArray(e)) return;
  let n = {};
  for (let s of e) {
    if (typeof s !== "object" || s === null || typeof s.path !== "string") return;
    n[s.path] = s;
  }
  let r = zEt({
    manifest: n
  });
  return r !== void 0 && r.type.length > 0 ? r : void 0;
}

var It = /^[a-z][a-z0-9_-]{0,63}$/, qe = [ "users", "org", "public" ];

function Ft(e) {
  let n = e?.documents;
  return typeof n === "number" && Number.isSafeInteger(n) && n >= 0 ? n : void 0;
}

var e0e = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/, Lt = new RegExp(e0e, "g");

function cAn(e) {
  return e.replace(Lt, "");
}

function rt(e, n, r, s, i) {
  let l = Qle(n, r, e.ver), d = !e.typeLocked && !e.publicRead && !s && !i, y = d && !tQ(e);
  return {
    workshopPage: s,
    ownVersion: l,
    ownBytesPage: d,
    plainOwner: y,
    vouchedOwn: y && l
  };
}

async function U7o(e, n, r, s = {}) {
  let i = await YL(e.html, "ws-decisions");
  return {
    ...rt(e, n, r, i !== null, s.savedInPage === !0),
    island: i
  };
}

async function B7o(e, n, r) {
  return rt(e, n, r, !1, !1).vouchedOwn && await YL(e.html, "ws-decisions") === null;
}

function Zor(e) {
  if (e.publicRead || e.offOrgRamp === !0 || e.external === !0 || e.role === "owner") return null;
  if (e.role === "writer" && e.sameChannel === !0 && _Xr()) return "channel";
  return bXr() ? "shared" : null;
}

function uAn(e) {
  let n = e.role !== "owner" || e.cowritten || e.typeLocked === !0 || e.outsideOrg === !0, r = qL(e.html, "page"), s = i => pAn(r, i, "page");
  if (n || !e.vouchedOwn) {
    let [i, l] = n && e.sameChannel === !0 ? [ sUs, iUs ] : e.typeLocked ? [ aUs, lUs ] : e.role === "owner" && e.outsideOrg === !0 ? [ rUs, oUs ] : n ? [ tUs, nUs ] : [ dUs, cUs ];
    return {
      enveloped: !0,
      otherWriters: n,
      lead: `${i}\n<${Ngt}>\n`,
      body: r,
      tail: `\n</${Ngt}>\n\n${l}`,
      head: s
    };
  }
  return {
    enveloped: !1,
    otherWriters: !1,
    lead: "",
    body: r,
    tail: "",
    head: s
  };
}

function esr(e) {
  return o$n(e, n6);
}

function qL(e, n = "all") {
  return esr(_l(e, n));
}

function pAn(e, n, r = "all") {
  if (n <= 0) return "";
  for (let s = n; ;s--) {
    let i = esr(YAo(e, s, r));
    if (i.length <= n) return i;
  }
}

function tsr(e) {
  if (!Zle()) return;
  if (e.syncClient === !0) return typeof e.syncToken === "string" && e.syncToken !== "" ? {
    transport: "sync",
    token: e.syncToken
  } : void 0;
  return e.subscriptionToken ? {
    transport: "live",
    token: e.subscriptionToken
  } : void 0;
}

function GE(e, n = {}) {
  let r = Yt(e);
  if (r === null) return {
    ok: !1,
    message: n.notUrlMessage ?? Yor(e, {
      field: n.field
    }),
    errorCode: 4
  };
  let s = Oo();
  if (r.env !== s) {
    let i = n.envHint ? ` \u2014 ${n.envHint(s)}` : "";
    return {
      ok: !1,
      message: `that artifact URL is for ${r.env}, but this session targets ${s} claude.ai${i}`,
      errorCode: 5
    };
  }
  return {
    ok: !0,
    parsed: r
  };
}

var ot = 6e4;

function Une(e) {
  return e.gone === !0;
}

function OVe(e) {
  return e.neverPublished === !0;
}

function vW(e) {
  return e.otherOrg === !0;
}

function Dt(e) {
  return typeof e === "object" && e !== null && Wne(e)?.reason === "org_mismatch" && "owner_org" in e && typeof e.owner_org === "string" && Vt(e.owner_org) !== null;
}

var MVe = "this Artifact is in another of the user's organizations, not the one this session is signed in to", HVe = "the user runs /login and signs in to that organization", Mqt = "this is a public artifact from outside the user's organization: it can be read, but not watched";

var Ut = `${MVe} \u2014 it opens here only after ${HVe}`, st = "If it was shared with you by email, accept the invitation in a browser first, and check that Claude Code is signed in to the invited account", Ce = "If this was shared with you from another organization, open it in Claude Code on your computer or in a Claude Code on the web session", Ht = new Set([ Sct, "boot_403_agent_not_added", "boot_403_agent_owned", "boot_403_request_access" ]), j7o = "Do not retry this read; tell the user now that the artifact could not be read, then go on without it.";

function W7o(e) {
  return Une(e) || e.errorCode !== void 0 && Ht.has(e.errorCode);
}

function z7o(e) {
  return e.replace(`. ${st}`, "").replace(`. ${Ce}`, "");
}

var Wt = p(() => u({
  request_access: M(),
  reason: o().optional()
})), nsr = 15e3;

async function fAn({slug: e, env: n, sk: r, vanity: s}, i, {kind: l = "probe", relayOnly: d = !1, agentPeer: y = !1, actorId: b = !1, syncLive: v = !1, watchBoot: P = !1, readBack: S = !1, lean: N, pastVer: k, credentials: V}) {
  let T = Oo();
  if (n !== T) return {
    err: `that artifact URL is for ${n} claude.ai, but this session targets ${T}`,
    errorCode: "env_mismatch"
  };
  let R = "via=model_read" + (l === "probe" ? "&bk=probe" : "") + (l === "probe" && N !== void 0 ? `&lean=${encodeURIComponent(N)}` : "") + (y ? "&peer=agent" : "") + (b ? "&actor=id" : "") + (v ? "&live=sync" : "") + (P || y || v ? `&vn=${PEt}` : "") + (S ? "&readback=1" : "") + (k !== void 0 ? `&ver=${encodeURIComponent(k)}` : ""), j = r === void 0 ? "" : `&sk=${encodeURIComponent(r)}`, F = s === void 0 ? "" : `&vanity=${encodeURIComponent(s)}`, E = `/api/frame/${e}?${R}${j}${F}`, U = {
    refreshOAuth: !0,
    credentials: V,
    headers: eu(),
    timeout: nsr,
    signal: i
  }, A, G = Date.now(), H = performance.now();
  try {
    A = d || JL() ? await vc.getRelayOnly(E, U) : await vc.get(E, U);
  } catch (L) {
    if (wa(L)) throw L;
    return {
      err: "artifact read failed (network error)",
      errorCode: "boot_request_error",
      ...Aee(L) && {
        transient: !0
      },
      request: {
        ...rQ(L, H),
        wall_elapsed_ms: Date.now() - G,
        ...FA(L) && {
          relay: !0
        }
      }
    };
  }
  if (je(n, vZo(A)), !A.ok) {
    if (A.reason === "relay-unavailable") return {
      err: `artifact read failed (relay unavailable${A.status ? `, HTTP ${A.status}` : ""})`,
      ...A.status !== 0 && {
        status: A.status
      },
      errorCode: "boot_relay_error"
    };
    if (A.reason === "relay-not-served") return {
      err: "artifact read failed (the session gateway does not serve this session)",
      errorCode: "boot_relay_not_served"
    };
    return {
      err: A.reason === "no-auth" ? ph(A.detail) : `artifact read unavailable: ${A.reason}`,
      errorCode: A.reason.replace(/-/g, "_")
    };
  }
  if (!A.fromFrame) return {
    err: `artifact read failed (relay HTTP ${A.status})`,
    status: A.status,
    errorCode: "boot_relay_error"
  };
  let x = HG() ? "Slack" : QXe() ? "Teams" : void 0, I = `${x ?? "chat"} channel`, de = `add this ${I} (under "Add people, groups, or Claude Tags", paste the channel ID)`, pe = `sharing with a person or service account does not reach a ${I}'s Claude \u2014 ask the owner to open Share and ${de}, or widen General access to the organization`, be = `${pe}.`;
  if (A.status === 404) {
    let L = EZo(A.data), fe = Jr() && A.route === "direct";
    return {
      err: L ? "this artifact exists but nothing has been published to it yet, so there is nothing to read" : `artifact not found \u2014 it may have been deleted, or it has not been shared with you${x === void 0 ? fe ? `. ${Ce}` : `. ${st}` : `. If it is restricted to specific people, ${pe}${fe ? `. ${Ce}` : ""}`}`,
      status: 404,
      ...s3(A.data) && {
        gone: !0
      },
      ...L && {
        neverPublished: !0
      },
      errorCode: "boot_404"
    };
  }
  if (A.status === 403 && Dt(A.data)) return {
    err: Ut,
    status: 403,
    otherOrg: !0,
    errorCode: Sct
  };
  if (A.status === 403) {
    let L = Wt().safeParse(A.data);
    if (L.success && L.data.reason === "agent_not_added") return {
      err: `this artifact is restricted to specific people, and this ${I}'s Claude is not one of them: ${be}`,
      status: 403,
      errorCode: "boot_403_agent_not_added"
    };
    if (L.success && L.data.reason === "agent_owned") return {
      err: x === void 0 ? "this artifact belongs to a chat channel's Claude and has not been shared with you \u2014 ask someone in the channel it was published from to open Share on it and add you." : `this artifact belongs to another ${I}'s Claude and has not been shared with this one \u2014 ask someone in the channel it was published from to open Share on it and ${de}.`,
      status: 403,
      errorCode: "boot_403_agent_owned"
    };
    if (L.success && L.data.request_access) return {
      err: "you do not have access to this artifact. Open the link in a browser to request access from the owner.",
      status: 403,
      errorCode: "boot_403_request_access"
    };
  }
  if (A.status === 400 && k !== void 0) return {
    err: "the server refused that version id (HTTP 400). Most likely it is not among the ones kept for this artifact: list its versions for the ids that are.",
    status: 400,
    errorCode: "boot_unknown_ver"
  };
  if (A.status < 200 || A.status >= 300) return {
    err: `artifact read failed (HTTP ${A.status})`,
    status: A.status,
    errorCode: "boot_failed"
  };
  let B = A.data ?? {}, {ver: ne, assetToken: ie} = B, he = B.mode === "public" || B.kind === "public";
  if (!ne || !ie && !he) return {
    err: "artifact read failed: incomplete boot response",
    errorCode: "boot_incomplete"
  };
  if (!WV.test(ne)) return {
    err: "artifact read failed: malformed boot response",
    errorCode: "boot_bad_ver"
  };
  if (k !== void 0) {
    if (yMt(e, B.cowritten), PEr(e, B.authoredByOthers), B.outsideWriter === !0) _ct(e, !0);
    if (ne !== k) return {
      err: "artifact read failed: the server served a different version from the one asked for, so nothing was read. It does that for an account that cannot edit the artifact; for one that can, the server ignored the version asked for.",
      errorCode: "boot_past_ver_ignored"
    };
    return {
      err: null,
      data: B,
      ver: ne,
      assetToken: ie || void 0,
      route: A.route
    };
  }
  Fen(e, B.artifactKind), bMt(e, ysr(B), G), yMt(e, B.cowritten), PEr(e, B.authoredByOthers), 
  _ct(e, B.outsideWriter);
  let re = B.lean === !0, X = B.mode === "external";
  if (!re) A_o(e, X);
  if (lk()) T_o(e, !ie);
  _Mt(e, B.type);
  let {probeBoots: ue} = ee().shareStatus, ce = ue.get(e);
  if (ce !== void 0 && ce.boot.ver !== ne) ue.delete(e);
  if (!re && !he && (!X || B.perm?.role === "writer")) Ke(e, B.typeFacts, x1(wt(e)), G, {
    external: X
  });
  return {
    err: null,
    data: B,
    ver: ne,
    assetToken: ie || void 0,
    route: A.route
  };
}

async function eR(e, n, r, {kind: s = "probe", gatePublicRead: i = !0, relayOnly: l = !1, agentPeer: d = !1, actorId: y = !1, syncLive: b = !1, watchBoot: v = !1, lean: P, speculative: S = !1, readBack: N = !1, pastVer: k, credentials: V, probeToolUseId: T}) {
  let R = S ? f : m, j;
  if (T !== void 0 && !d && !y && !b && !v && P === void 0 && k === void 0 && !S) {
    let {probeBoots: A} = ee().shareStatus, G = Date.now();
    for (let [x, I] of A) if (G - I.issuedAt > ot) A.delete(x);
    let H = A.get(e.slug);
    if (H !== void 0 && H.toolUseId === T && (s === "probe" || H.boot.data.typeInstance === !1) && !(l && Jr() && H.boot.route !== "relay") && !Iqt(e.slug, H.boot.ver).behind) j = {
      ...H.boot,
      reused: !0
    }, t(`[artifact] ${n}: ${s}-kind boot served from this tool use's share probe (probe issued ${G - H.issuedAt}ms ago) slug=${e.slug}`);
  }
  let F = {
    kind: s,
    relayOnly: l,
    agentPeer: d,
    actorId: y,
    syncLive: b,
    watchBoot: v,
    readBack: N,
    pastVer: k,
    credentials: V
  }, E = j ?? await fAn(e, r, {
    ...F,
    lean: P?.version
  });
  if (P !== void 0 && (E.err === null ? E.data.lean === !0 && !P.mustCarry(E.data) : E.errorCode === "boot_incomplete")) f(n, "lean_boot_incomplete"), 
  t(`[artifact] ${n}: the answer to a lean boot request was incomplete; booting in full slug=${e.slug}`), 
  E = await fAn(e, r, F);
  if (E.err !== null) {
    let A = E.errorCode === "boot_request_error" || E.errorCode === "boot_failed" ? {
      ...E.request,
      ...E.status !== void 0 && {
        http_status: E.status
      },
      ...b && {
        sync_live: !0
      },
      ...d && {
        agent_peer: !0
      },
      ...l && {
        relay_only: !0
      }
    } : void 0;
    if (A !== void 0) R(n, E.errorCode, A); else R(n, E.errorCode);
    return {
      err: E.err,
      ...E.status !== void 0 && {
        status: E.status
      },
      ...E.gone && {
        gone: !0
      },
      ...E.neverPublished && {
        neverPublished: !0
      },
      ...E.otherOrg && {
        otherOrg: !0
      },
      ...E.transient && {
        transient: !0
      },
      errorCode: E.errorCode
    };
  }
  let U = E;
  if (i && U.assetToken === void 0 && !lk()) return R(n, "public_read_disabled"), 
  {
    err: "artifact read failed: this artifact is served to you as a public (non-member) reader, and reading public artifacts that way is not enabled yet",
    errorCode: "public_read_disabled"
  };
  return U;
}

async function G7o(e, n, r, {syncLive: s = !1, lean: i} = {}) {
  let l = Oo(), d = await eR({
    slug: e,
    env: l
  }, "artifact_live_subscribe", n, {
    agentPeer: s,
    syncLive: s,
    watchBoot: !0,
    ...i !== void 0 && {
      lean: {
        version: i,
        mustCarry: v => "subscriptionToken" in v && "syncToken" in v && "syncClient" in v && "subscriptionTokenExp" in v && "watchTokenRenewEnabled" in v && "perm" in v
      }
    },
    credentials: r
  });
  if (d.err !== null) return {
    err: d.err,
    ...d.status && {
      status: d.status
    },
    ...d.otherOrg && {
      otherOrg: !0
    },
    ...y4(d.status) && {
      unavailable: !0
    },
    ...d.errorCode === "boot_request_error" && {
      noAnswer: !0
    }
  };
  if (d.assetToken === void 0) return {
    err: Mqt,
    publicOutsideOrg: !0
  };
  let y = tsr(d.data), b = d.data.syncClient === !0;
  return {
    err: null,
    token: y?.token,
    transport: y?.transport ?? (b ? "sync" : "live"),
    ver: d.ver,
    editor: Kt(d),
    tokenExp: b ? void 0 : it(d.data.subscriptionTokenExp),
    renewable: y?.transport === "live" && d.data.watchTokenRenewEnabled === !0,
    ...typeof d.data.title === "string" && {
      title: d.data.title
    }
  };
}

function it(e) {
  return typeof e === "number" && Number.isFinite(e) ? e : void 0;
}

function y4(e) {
  return e !== void 0 && (e >= 500 || e === 429 || e === 408);
}

async function V7o(e, n, r) {
  let s;
  try {
    s = await vc.post(`/api/frame/watch-token/${e}?vn=${PEt}`, {}, {
      refreshOAuth: !0,
      credentials: r,
      headers: eu(),
      timeout: nsr,
      signal: n
    });
  } catch (y) {
    if (wa(y)) throw y;
    return {
      err: "renew_miss"
    };
  }
  if (!s.ok || !s.fromFrame || s.status < 200 || s.status >= 300) return {
    err: "renew_miss",
    ...s.ok && {
      status: s.status
    }
  };
  let i = s.data ?? {}, l = tsr(i), d = l?.transport === "live" ? l.token : void 0;
  if (!i.ver || !WV.test(i.ver) || d === void 0) return {
    err: "renew_miss",
    status: s.status
  };
  return {
    err: null,
    token: d,
    transport: "live",
    ver: i.ver,
    editor: void 0,
    tokenExp: it(i.subscriptionTokenExp),
    renewable: !0
  };
}

function Kt(e) {
  return e.assetToken !== void 0 && Xle(e.data.perm?.role);
}

function Xle(e) {
  return e === "owner" || e === "writer";
}

function at(e, n) {
  return n && e === "owner" ? void 0 : e;
}

function I9r(e) {
  return e === "reader" || e === "viewer" || e === "commenter";
}

async function Snt(e, n, r, s) {
  let i = await fAn(e, n, {
    readBack: s?.readBack === !0,
    credentials: r
  });
  if (i.err !== null) return {
    err: i.err,
    errorCode: i.errorCode,
    ...i.gone && {
      gone: !0
    }
  };
  let l = i.assetToken === void 0, d = i.data.perm?.role, y = Fxe(i.data.outsideWriter), b = Me(i.data);
  return {
    err: null,
    mode: l ? "public" : i.data.perm?.mode ?? i.data.mode,
    shared: i.data.shared,
    role: at(d, l),
    outsideOrgReader: l,
    cowritten: i.data.cowritten === !0,
    ...y !== void 0 && {
      outsideWriter: y
    },
    ...typeof i.data.title === "string" && {
      title: i.data.title
    },
    ...b !== void 0 && {
      readBack: b
    },
    boot: i
  };
}

function Me(e) {
  if (e.readback === void 0 || typeof e.typeInstance !== "boolean") return;
  let n = Ssr(e.readback);
  if (n === void 0) return;
  let r = e.typeInstance || Pnt(e.type) !== void 0, s = n.typeLock;
  if (r && s === void 0) return;
  if (s?.latest !== void 0 && s.latest !== s.current) return;
  return n;
}

function IEt(e, n) {
  if (n === void 0) return;
  let r = ee().shareStatus.probeBoots.get(e);
  return r !== void 0 && r.toolUseId === n && Date.now() - r.issuedAt <= ot && !Iqt(e, r.boot.ver).behind ? Me(r.boot.data) : void 0;
}

var $e = Df + o0e + Je + 65536, fye = cH + o0e + 1, Ze = {
  relayed: !1,
  why: "the session gateway declined an artifact read a few minutes ago, so this read did not retry it",
  code: "declined"
}, jt = 5e3, zt = 1e3;

function DVe() {
  return {
    remaining: 1
  };
}

function Hqt(e) {
  return `the session gateway could not serve this read just now (HTTP ${e}, after one retry); this is transient \u2014 retry shortly`;
}

async function Dqt(e, n, r) {
  let s = () => Gt.get(RPs(e, n), {
    host: "ccr-gateway",
    auth: "session-jwt",
    headers: xPs(r.token),
    timeout: r.timeout,
    responseType: "arraybuffer",
    maxRedirects: 0,
    maxContentLength: r.maxContentLength,
    validateStatus: () => !0,
    signal: r.signal
  }), i = await s();
  if (!i.ok || !y4(i.status) || r.retryBudget.remaining < 1) return i;
  r.retryBudget.remaining--;
  let l = i.response.headers?.["retry-after"], d = Math.min(Ag(typeof l === "string" ? l : void 0) ?? zt, jt);
  return t(`[artifact] mount answered HTTP ${i.status}; retrying once in ${d}ms slug=${e}`), 
  await J(d, r.signal, {
    abortError: () => new Ye
  }), s();
}

function Lqt(e) {
  return e.contentVia === "frame" && !a.CLAUDE_CODE_REMOTE;
}

var Jt = "x-frame-content-route", Xt = 3, qt = 1e4;

async function Nqt(e, n, r) {
  let s = `/api/frame/content/${encodeURIComponent(e)}${n}`, i = Date.now() + r.timeout, l = !1, d = 0;
  for (;;) {
    let y;
    try {
      y = await vc.get(s, {
        headers: {
          ...eu(),
          "x-frame-asset-token": r.token
        },
        credentials: r.credentials,
        recoverOAuth401: !0,
        responseType: "arraybuffer",
        timeout: Math.max(i - Date.now(), 1),
        maxContentLength: r.maxContentLength,
        signal: r.signal
      });
    } catch (v) {
      if (wa(v) || v instanceof Ye || l || !Aee(v) || Date.now() >= i) throw v;
      l = !0;
      continue;
    }
    if (!y.ok) return {
      kind: "declined"
    };
    let b = y.response.headers;
    if ((y.status === 429 || y.status === 503) && d < Xt) {
      let v = b?.["retry-after"], P = Math.min(Ag(typeof v === "string" ? v : void 0) ?? 500 * 2 ** d, qt);
      if (Date.now() + P + 1e3 < i) {
        d++, await J(P, r.signal, {
          abortError: () => new Ye
        });
        continue;
      }
    }
    if (b?.[Jt] !== "served") return {
      kind: "declined"
    };
    return {
      kind: "answer",
      status: y.status,
      headers: b,
      data: y.data
    };
  }
}

function LVe(e) {
  let n = e;
  return n?.["x-frame-asset-content-type"] ?? n?.["content-type"];
}

async function Zt(e, n) {
  let r = DVe(), s = d => Dqt(e.slug, d, {
    token: e.token,
    timeout: 3e4,
    maxContentLength: e.fileRead ? fye : $e,
    signal: e.signal,
    retryBudget: r
  });
  if (e.source !== void 0 && !e.source.fellBack) {
    let d;
    try {
      d = await s(e.source.path);
    } catch (y) {
      if (wa(y) || y instanceof Ye) throw y;
    }
    if (d?.ok && d.status === 200) return zne(hC), {
      relayed: !0,
      result: n(Buffer.from(d.data ?? new ArrayBuffer(0)), LVe(d.response.headers), !0)
    };
    e.source.fellBack = d?.ok ? d.status : 0, t(`[artifact] stored-source read via the gateway fell back (${e.source.fellBack}) slug=${e.slug}`);
  }
  let i = (d, y, b) => {
    if (b === 404 && !e.fileRead && !Dsr(hC) && (iQ() || !VVe(hC))) aQ(hC);
    return {
      relayed: !1,
      why: d,
      code: y,
      ...b !== void 0 && {
        status: b
      }
    };
  }, l;
  try {
    l = await s(e.servedPath);
  } catch (d) {
    if (wa(d) || d instanceof Ye) throw d;
    return iAe(), i("the gateway request failed in transport", "request_error");
  }
  if (!l.ok) return l.reason === "no-auth" ? i(L6e(), "no_auth") : i(`the gateway request was skipped (${l.reason})`, "client_policy");
  if (Dnt(l.status)) return i("artifact reads through the session gateway are not enabled for this session", "not_served", l.status);
  if (l.status === 404 && e.fileRead) return m(e.feature, "asset_file_not_found", {
    relay: !0
  }), {
    relayed: !0,
    result: {
      err: "no file is published at that path in the served version \u2014 or artifact reads through the session gateway are not enabled for this session",
      status: 404,
      ...Dsr(hC) && mMt(l.response.headers, lZ(l.response.headers, l.data, y => vnt(y, e.token))) && {
        missingFile: !0
      }
    }
  };
  if (l.status === 404) return i("artifact reads through the session gateway are not enabled for this session, or the artifact service no longer serves this version", "not_served", 404);
  if (Hnt(l.status, l.data)) return i(Mnt, "network_off", 403);
  if (y4(l.status)) return i(`temporarily unable: HTTP ${l.status} after one retry, so a later read may succeed`, "unavailable", l.status);
  if (l.status < 200 || l.status >= 300) return iAe(l.status), i(`the gateway refused the relay with HTTP ${l.status}`, "http", l.status);
  return zne(hC), {
    relayed: !0,
    result: n(Buffer.from(l.data ?? new ArrayBuffer(0)), LVe(l.response.headers), !1)
  };
}

function Qt(e) {
  if (e === void 0) return "";
  if (!sc(e) || Buffer.byteLength(e, "utf8") > 512) return;
  let n = e.split("/");
  for (let r of n) if (r === "" || r === "." || r === ".." || /[\\%\x00-\x1f\x7f]/.test(r)) return;
  return n.map(encodeURIComponent).join("/");
}

function rsr(e) {
  return e.servedAudienceVersion === !0 || e.audience === "owner" || e.audienceView === "live" || e.audienceView === "pinned-current";
}

var en = "_src";

function O9r(e) {
  return e.assetToken !== void 0 && (e.data.mode !== "external" || e.data.perm?.role === "writer");
}

function M9r(e) {
  let {mode: n, perm: r} = e.data;
  if (n === "external") return "external";
  if (e.assetToken === void 0) return "public";
  if (n !== void 0) return "unproven";
  if (r?.role === "owner") return "own";
  return typeof r?.mode === "string" && r.mode !== "" ? "same" : "unproven";
}

function H9r(e) {
  return e !== "own" && e !== "same";
}

function D9r(e, n) {
  return `/_f/${e}/${en}/${n === "" ? "index.html" : n}`;
}

var osr = 3e4;

function $qt(e) {
  let n = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`, r = void 0;
  return {
    host: n,
    base: `https://${n}`
  };
}

function dt(e) {
  return e === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
}

function Fqt(e) {
  let n = dt(e);
  return Z5() ? xsr(n) : Jr() ? `To allow direct artifact reads here, add ${n} to the environment's allowed domains: environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access.` : a.CLAUDE_CODE_REMOTE ? `To allow artifact reads here, add ${n} to the network allowlist of the environment this remote session runs in.` : `To allow artifact reads here, add ${n} to the network allowlist this session runs behind \u2014 the sandbox's allowed domains, or the Claude desktop app's network settings (Settings \u2192 Capabilities; a workspace admin can add it on Team/Enterprise).`;
}

function $A(e, n, r, s = "artifact_webfetch_read", i = "probe", l, d, y = !1) {
  return Pe(e, n, s, e.file, r, i, l, d, y);
}

async function wnt(e, n, r, s, i = "artifact_webfetch_read", l) {
  let d = $2(n);
  if ("errMsg" in d) return m(i, "invalid_path"), {
    err: `artifact read failed: ${d.errMsg}`
  };
  return Pe(e, r, i, d.key, s, "probe", void 0, l);
}

function K7o(e, n, r, s, i) {
  return Pe(e, r, i, void 0, s, "probe", void 0, void 0, !1, n);
}

async function Pe(e, n, r, s, i, l, d, y, b = !1, v) {
  let P = Qt(s);
  if (P === void 0) return m(r, "invalid_file_path"), {
    err: "artifact file path is not a clean relative path"
  };
  let S = await eR(e, r, n, {
    kind: l,
    readBack: b,
    pastVer: v,
    credentials: i,
    probeToolUseId: y
  });
  if (S.err !== null) return S;
  let {ver: N, assetToken: k} = S;
  if (s !== void 0 && k === void 0) return m(r, "public_file"), {
    err: "the files of a public artifact read from outside its organization are not readable this way",
    status: 403,
    publicFile: !0
  };
  if (k === void 0 && d?.() !== !0) return f(r, yse), {
    err: "this is a public artifact from outside your organization; its page is fetched only on a read the user approved, and this call carries no such approval \u2014 nothing was fetched",
    status: 403,
    publicUnasked: !0
  };
  let V = `/_f/${N}/${P}`, T = O9r(S) ? {
    path: D9r(N, P)
  } : void 0, R = h => {
    let w = {
      ...h && {
        source: !0
      },
      ...!h && T?.fellBack !== void 0 && {
        source_fallback_status: T.fellBack
      },
      ...S.reused && {
        boot_reused: !0
      }
    };
    return Object.keys(w).length > 0 ? w : void 0;
  }, {title: j, favicon: F, perm: E, cowritten: U} = S.data, A = S.data.artifactKind === lT || wt(e.slug)?.artifactKind === lT, G = k === void 0 ? "public" : E?.mode, H = M9r(S), x = E?.role === "owner" ? "owner" : E?.role === "writer" ? "writer" : "reader", I = YY({
    role: bct(at(E?.role, k === void 0))
  }), de = E?.assignableReadModes, pe = x === "owner" && Array.isArray(de) && de.every(h => h === "owner" || qe.some(w => w === h)) ? {
    modes: qe.filter(h => de.includes(h) && !(A && h === "public")),
    ...typeof E?.externalSharingEnabled === "boolean" && {
      externalSharing: E.externalSharingEnabled
    },
    ...typeof E?.externalInvitesEnabled === "boolean" && {
      externalInvites: E.externalInvitesEnabled
    }
  } : void 0, be = ze(S.data.origin_metadata), B = Me(S.data), ne = Nt(S.data.files), ie = Ft(S.data.dbUsage), he = typeof S.data.contentStore === "string" && It.test(S.data.contentStore) ? S.data.contentStore : void 0, re = (h, w, O, q = () => g(r, R(O))) => {
    q();
    let C = s === void 0 ? "text/html" : typeof w === "string" ? nt(w, ";").trim().toLowerCase() : "", z = h.toString("utf-8"), oe = C === "text/html" ? Xe(z) : z, ge = Fxe(S.data.outsideWriter), Z = xEr(ge, wt(e.slug)?.outsideWriter);
    return {
      err: null,
      html: oe,
      contentType: C,
      raw: h,
      role: x,
      ...O && {
        source: !0
      },
      cowritten: U === !0 || A || wt(e.slug)?.cowritten === !0,
      publicRead: k === void 0,
      ...I9r(E?.role) && {
        servedAudienceVersion: !0
      },
      ...I !== void 0 && {
        owned: I
      },
      sameChannel: E?.sameChannel === !0 && x === "writer",
      ...H === "external" && {
        external: !0
      },
      ...H9r(H) && {
        offOrgRamp: !0
      },
      typeLocked: qSe(e.slug, S.data.type),
      ...(S.data.authoredByOthers === !0 || wt(e.slug)?.authoredByOthers === !0) && {
        authoredByOthers: !0
      },
      ...ZFe(x === "owner" && k !== void 0, ge, Z) && {
        outsideOrg: !0
      },
      ...Z !== void 0 && {
        outsideWriter: Z
      },
      ...pe !== void 0 && {
        shareMenu: pe
      },
      ...G !== void 0 && (() => {
        let K = YSe(G, S.data.shared), ct = Xle(E?.role), {live: Ie, shared: me} = S.data, ft = typeof Ie === "string" && WV.test(Ie), Te = typeof me === "string" && WV.test(me) ? me : void 0, lt = ft && (me === void 0 || me === "") || Te !== void 0;
        return {
          audience: K.mode,
          ...ct && lt && K.mode !== "owner" && {
            audienceView: Te === void 0 ? "live" : Te === N ? "pinned-current" : "pinned-earlier"
          }
        };
      })(),
      bytes: C === "text/html" ? Buffer.byteLength(oe, "utf8") : h.length,
      title: typeof j === "string" ? j : "",
      ...F !== void 0 && {
        favicon: F
      },
      ver: N,
      ...typeof S.data.fileCount === "number" && Number.isSafeInteger(S.data.fileCount) && S.data.fileCount > 0 && {
        fileCount: S.data.fileCount
      },
      ...ne !== void 0 && {
        manifestPaths: ne
      },
      ...ie !== void 0 && {
        storeDocuments: ie
      },
      ...he !== void 0 && {
        contentStore: he
      },
      ...be !== void 0 && {
        origin: be
      },
      ...B !== void 0 && {
        readBack: B
      }
    };
  };
  if (A && s === void 0 && v === void 0) {
    let h = await (ee().liveReplicas.renderLevel?.(e.slug, nZ, S.data.headSeq, n));
    if (h !== void 0) {
      t(`[artifact] read served from the local replica at seq ${h.head} slug=${e.slug}`);
      let w = re(Buffer.from(h.html, "utf8"), "text/html", !1);
      return w.err === null ? {
        ...w,
        localReplica: {
          head: h.head
        }
      } : w;
    }
  }
  let X = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`, ue = Fqt(e.env), ce = (h, w) => {
    if (h.code === "unavailable" && h.status !== void 0) return m(r, "asset_relay_unavailable", {
      relay_status: h.status
    }), {
      err: `${Hqt(h.status)}. Your access to the artifact itself is fine (the permission check passed); this environment cannot reach ${X} directly, so its reads go through the gateway.`,
      status: h.status
    };
    return m(r, "asset_egress_blocked", {
      relay: c(h.code),
      ...h.status !== void 0 && {
        relay_status: h.status
      },
      ...!w && {
        connect: !0
      }
    }), {
      err: `this environment's network allowlist blocks ${X}, and the session gateway could not serve the read either (${h.why}); your access to the artifact itself is fine (the permission check passed). ${ue}`,
      status: 403,
      ...w && {
        deterministic: "egress-blocked"
      }
    };
  }, L = async h => {
    let w = C => Nqt(e.slug, C, {
      token: h,
      timeout: osr,
      maxContentLength: s === void 0 ? $e : fye,
      signal: n,
      credentials: i
    }), O;
    try {
      if (T !== void 0 && T.fellBack === void 0) {
        let C = await w(T.path).catch(z => {
          if (wa(z) || z instanceof Ye) throw z;
          return {
            kind: "answer",
            status: 0,
            headers: void 0,
            data: void 0
          };
        });
        if (C.kind === "answer" && C.status === 200) return re(Buffer.from(C.data ?? new ArrayBuffer(0)), LVe(C.headers), !0, () => g(r, {
          ...R(!0),
          frame_content: !0
        }));
        if (C.kind === "answer") T.fellBack = C.status;
      }
      O = await w(V);
    } catch (C) {
      if (wa(C) || C instanceof Ye) throw C;
      m(r, "asset_request_error", {
        frame_content: !0
      });
      let z = Aee(C), oe = _c(C) && /^[A-Z][A-Z0-9_]{1,48}$/.test(C.code ?? "") ? ` ${C.code}` : "";
      return {
        err: `artifact content fetch failed (${z ? `network error${oe} reaching the artifact service` : "read failed"})`,
        ...z && {
          transient: !0
        }
      };
    }
    if (O.kind === "declined") {
      if (T !== void 0) T.fellBack = void 0;
      return;
    }
    if (O.status >= 200 && O.status < 300) return re(Buffer.from(O.data ?? new ArrayBuffer(0)), LVe(O.headers), !1, () => g(r, {
      ...R(!1),
      frame_content: !0
    }));
    let q = lZ(O.headers, O.data, C => vnt(C, h));
    if (O.status === 404 && P !== "" && mMt(O.headers, q)) return f(r, "file_not_in_manifest"), 
    {
      err: "this version of the artifact has no file at that path",
      status: 404,
      missingFile: !0
    };
    return m(r, "asset_failed", {
      frame_content: !0
    }), {
      err: `artifact content fetch failed (${Qe(O.status, O.headers, q)})`,
      status: O.status,
      respondent: !0
    };
  }, fe = (h, w) => Zt({
    slug: e.slug,
    servedPath: V,
    fileRead: s !== void 0,
    feature: r,
    token: h,
    signal: n,
    ...T !== void 0 && {
      source: T
    }
  }, (O, q, C) => re(O, q, C, () => f(r, w, R(C))));
  if (k !== void 0 && Lqt(S.data)) {
    let h = await L(k);
    if (h !== void 0) return h;
  }
  let ae;
  if (k !== void 0 && ee().contentHostEgressDenied.has(e.env) && sQ() && !eF(hC)) {
    let h = await fe(k, "asset_egress_relayed");
    if (h.relayed) return h.result;
    ae = h;
  }
  let Be = void 0, Se = Be ?? `https://${X}`, ut = k === void 0 ? `${Se}${V}` : `${Se}${V}?__frame_t=${encodeURIComponent(k)}`, we = async h => {
    ee().contentHostEgressDenied.add(e.env);
    let w = sQ();
    if (k !== void 0 && w) {
      if (ae !== void 0) return ce(ae, h);
      if (eF(hC)) return ce(Ze, h);
      let O = await fe(k, "asset_egress_relayed");
      return O.relayed ? O.result : ce(O, h);
    }
    return m(r, "asset_egress_blocked", {
      ...!h && {
        connect: !0
      }
    }), {
      err: k === void 0 && w ? `this environment's network allowlist blocks ${X}, and public (tokenless) artifacts are not served through the session gateway, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ue}` : `this environment's network allowlist blocks ${X}, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ue}`,
      status: 403,
      ...h && {
        deterministic: "egress-blocked"
      }
    };
  }, Ne = h => Qa.get(h, {
    signal: n,
    timeout: osr,
    responseType: "arraybuffer",
    maxRedirects: 0,
    maxContentLength: s === void 0 ? $e : fye,
    validateStatus: () => !0,
    ...Be && {
      headers: {
        Host: `${e.slug}.frame.localhost`
      }
    }
  });
  if (T !== void 0 && k !== void 0 && T.fellBack === void 0 && !ee().contentHostEgressDenied.has(e.env)) {
    let h;
    try {
      h = await Ne(`${Se}${T.path}?__frame_t=${encodeURIComponent(k)}`);
    } catch (w) {
      if (wa(w)) throw w;
      if (awe(w)) return we(!1);
    }
    if (h !== void 0 && GF(h.status, h.headers)) return we(!0);
    if (h !== void 0 && h.status === 200) return re(Buffer.from(h.data), h.headers?.["content-type"], !0);
    T.fellBack = h?.status ?? 0, t(`[artifact] stored-source read fell back (${T.fellBack}) slug=${e.slug}`);
  }
  let D;
  try {
    D = await Ne(ut);
  } catch (h) {
    if (wa(h)) throw h;
    if (awe(h)) return we(!1);
    let w = oM(h), O = w === void 0 ? void 0 : Jct(w.headers) ?? dZ(w.headers), q = Aee(h), C = _c(h) && /^[A-Z][A-Z0-9_]{1,48}$/.test(h.code ?? "") ? ` ${h.code}` : "", z = w !== void 0 ? `proxy refused the connection: ${nq(w.connectStatus)}${O === void 0 ? "" : `, ${O}`}` : q ? `network error${C}: could not connect to ${X} on port 443 \u2014 the machine running Claude Code needs outbound HTTPS to ${dt(e.env)} when the Artifact tool is enabled` : "read failed", oe = K => K === void 0 ? "" : `, and the session gateway could not serve the read either (${K.why})`, ge = K => K !== void 0 && {
      relay: c(K.code),
      ...K.status !== void 0 && {
        relay_status: K.status
      }
    };
    if (w !== void 0 && w.connectStatus === 407) return m(r, "asset_proxy_refused", {
      status: w.connectStatus,
      ...ge(ae)
    }), {
      err: `artifact content fetch failed (${z})${oe(ae)}`,
      status: w.connectStatus,
      ...O !== void 0 && {
        respondent: !0,
        safeErr: `artifact content fetch failed (proxy refused the connection: ${nq(w.connectStatus)})${oe(ae)}`
      }
    };
    let Z = ae;
    if (k !== void 0 && Z === void 0 && q && sQ()) if (eF(hC)) Z = Ze; else {
      let K = await fe(k, "asset_unreachable_relayed");
      if (K.relayed) return K.result;
      Z = K;
    }
    return m(r, "asset_request_error", {
      ...w !== void 0 && {
        status: w.connectStatus
      },
      ...ge(Z)
    }), {
      err: `artifact content fetch failed (${z})${oe(Z)}`,
      ...q && w === void 0 && {
        transient: !0
      },
      ...w !== void 0 && w.connectStatus !== 0 && {
        status: w.connectStatus
      },
      ...w !== void 0 && O !== void 0 && {
        respondent: !0,
        safeErr: `artifact content fetch failed (proxy refused the connection: ${nq(w.connectStatus)})${oe(Z)}`
      }
    };
  }
  if (GF(D.status, D.headers)) return we(!0);
  if (ee().contentHostEgressDenied.delete(e.env), D.status < 200 || D.status >= 300) {
    let h = lZ(D.headers, D.data, O => vnt(O, k));
    if (D.status === 403 && k === void 0 && $xe(D.headers, h)) return m(r, "public_asset_forbidden"), 
    {
      err: "artifact is not publicly readable at this version",
      status: 403
    };
    if (D.status === 404 && P !== "" && k !== void 0 && mMt(D.headers, h)) return f(r, "file_not_in_manifest"), 
    {
      err: "this version of the artifact has no file at that path",
      status: 404,
      missingFile: !0
    };
    let w = Qbo(D.status, h);
    return m(r, w ?? "asset_failed"), {
      err: `artifact content fetch failed (${Qe(D.status, D.headers, h)})`,
      status: D.status,
      respondent: !0,
      ...w !== void 0 && {
        safeErr: Xct[w],
        proxyDeny: w
      }
    };
  }
  return re(Buffer.from(D.data), D.headers?.["content-type"], !1);
}

function Qe(e, n, r) {
  let s = [ `HTTP ${e}` ], i = dZ(n);
  if (i === void 0 && r.reason !== void 0) s.push(`response body: "${_l(r.reason.replaceAll('"', "'"))}"`); else if (i !== void 0) s.push(`the environment's egress proxy reported: ${i}`); else if (r.proxyError !== void 0) s.push(`x-proxy-error header: "${_l(r.proxyError.replaceAll('"', "'"))}"`);
  if (r.requestId !== void 0) s.push(`x-request-id: ${r.requestId}`);
  return s.join("; ");
}

function _4(e) {
  return e.respondent ? e.safeErr ?? `artifact content fetch failed (HTTP ${e.status ?? "error"})` : e.err;
}

function vnt(e, n) {
  let r = e.replace(/(?:_|%(?:25)*5f){2}frame(?:_|%(?:25)*5f)t(?:=|%(?:25)*3d)["']?[^\s&"'<>]*/gi, "__frame_t=[redacted]");
  if (n !== void 0 && n !== "") {
    r = tt(r, n, "g");
    let s = encodeURIComponent(n);
    if (s !== n) r = tt(r, s, "gi");
  }
  return r;
}

var Oe = 16, et = /[A-Za-z0-9._~%-]/;

function tt(e, n, r) {
  if (n.length <= Oe) return e.replaceAll(n, "[redacted]");
  let s = new Set;
  for (let y = 0; y + Oe <= n.length; y++) s.add(dl(n.slice(y, y + Oe)));
  let i = new RegExp(`(?:${[ ...s ].join("|")})${et.source}*`, r), l = "", d = 0;
  for (let y of e.matchAll(i)) {
    let b = y.index;
    while (b > d && et.test(e.charAt(b - 1))) b--;
    l += `${e.slice(d, b)}[redacted]`, d = y.index + y[0].length;
  }
  return l + e.slice(d);
}

function q7o(e, n) {
  let r = Object.freeze({
    slug: e,
    html: n
  });
  return ee().mintedStoredPageProbes.add(r), r;
}

function Y7o(e) {
  return typeof e === "object" && e !== null && ee().mintedStoredPageProbes.has(e);
}

export { w9r, Yor, wW, RVe, Vx, zE, qI, iAn, Fne, aAn, Xor, $2, I7o, O7o, xVe, v9r, PVe, IVe, E9r, t3, k9r, T9r, M7o, PEt, A9r, Iqt, H7o, D7o, lAn, L7o, Oqt, Jor, jb, N7o, C9r, bnt, $7o, F7o, R9r, x9r, P9r, tQ, dAn, Qor, e0e, cAn, U7o, B7o, Zor, uAn, esr, qL, pAn, tsr, GE, Une, OVe, vW, MVe, HVe, Mqt, j7o, W7o, z7o, nsr, fAn, eR, G7o, y4, V7o, Xle, I9r, Snt, IEt, fye, DVe, Hqt, Dqt, Lqt, Nqt, LVe, rsr, O9r, M9r, H9r, D9r, osr, $qt, Fqt, $A, wnt, K7o, _4, vnt, q7o, Y7o };
