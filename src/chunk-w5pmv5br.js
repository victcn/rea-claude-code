// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { nU, Ern, Up, Gt } from "./chunk-xywp7esx.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { lt, ve } from "./chunk-3pqddg8f.js";

import { l, E } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { a } from "./chunk-j016gcgm.js";

import { Ap, un } from "./chunk-y752zmas.js";

import { bt, Oy, _, s6, ds, t } from "./chunk-kawq2919.js";

import { I, ne } from "./chunk-5wbhf1bk.js";

import { bh, nL, Qie } from "./chunk-9yajep3y.js";

import { Wr, Bt } from "./chunk-3ykz5st8.js";

import { le } from "./chunk-cqgvwwgb.js";

import { Jf } from "./chunk-rgd61mm3.js";

import { mt } from "./chunk-j90se18b.js";

import { p } from "./chunk-jkzenvsk.js";

import { iI, tX } from "./chunk-q6wab2jw.js";

import { kt, Us } from "./chunk-r2h53bm2.js";

import { ht, qt } from "./chunk-s2t7g8m9.js";

import { KH } from "./chunk-46phtgr7.js";

import { Jt } from "./chunk-9tdwgnpn.js";

import { l3e, sp, _Ue } from "./chunk-b47tzzqx.js";

import { mf, qat } from "./chunk-2xhrgh8h.js";

import { joe, FSr, Ylt, lFe, mxe, w0, dFe, my } from "./chunk-4v78v8fd.js";

import { qx, Kv, cQr, qv, $B, nO, rF, bQ, aIn, mAt, gis } from "./chunk-84yp45y8.js";

import { rms, bF, sms } from "./chunk-sqb9meyh.js";

import { yy } from "./chunk-67jt18z1.js";

import { mFe, Qd, zo } from "./chunk-htg8b98h.js";

import { RGe } from "./chunk-2vshys8w.js";

import { Bu } from "./chunk-wbxkeemq.js";

import { Vbe, Eys, kys } from "./chunk-xd492737.js";

import { Lg, r7n, CGe } from "./chunk-4s406sh2.js";

import { y7n, g2r, P_n, _zt, D4o, _7n } from "./chunk-z8be1w81.js";

import { bV } from "./chunk-3cd32ngx.js";

import { Ta } from "./chunk-pqzqmnjf.js";

import { TC } from "./chunk-v6b4yr85.js";

import { o, v, M, T, u, De, U, A } from "./chunk-cvcg6n1z.js";

import { pS, at } from "./chunk-0bq6eb61.js";

import { en } from "./chunk-0qwx38yy.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { we, Nr } from "./chunk-m8ez8fhk.js";

var rzt = {};

Nr(rzt, {
  MAX_CARD_FILES: () => JGr,
  default: () => rzt
});

import { resolve as ju } from "path";

var up = e => e.kind === "needs-manifest" ? e.draft : void 0;

import { realpath as Zf } from "fs/promises";

import { join as em, resolve as rm } from "path";

import { dirname as dp, join as cp } from "path";

var io = qx(dp(cp(mf)));

function ao(e) {
  let r = e instanceof Error ? e.cause : void 0;
  return [ l(e), typeof r === "string" ? r : "" ].filter(Boolean);
}

var hp = (e, r) => ({
  kind: e,
  details: r
});

var d = (e, r = []) => ({
  kind: "refused",
  refusal: hp(e, r)
});

var B = e => e.catch(r => d("unreadable", ao(r)));

import { rm as yp } from "fs/promises";

var gp = 3;

var xp = 100;

async function Ie(e, r = gp) {
  let s = await yp(e, {
    recursive: !0,
    force: !0
  }).then(() => {}, i => i);
  if (s === void 0) return;
  if (r > 0) return await J(xp), Ie(e, r - 1);
  t(`A copy made to validate a plugin could not be removed: ${E(s) ?? "no code"}`, {
    level: "warn"
  });
}

var re = () => Error("The copy to validate was ended as the process ends");

var Ne = (e, r) => e.path.localeCompare(r.path, "en");

var ze = 1e4;

import { readdir as Gp } from "fs/promises";

import { join as Qp } from "path";

import { lstat as Rp } from "fs/promises";

var bp = e => e.isSymbolicLink() && "link" || e.isDirectory() && "folder" || e.isFile() && "file" || "special";

async function Sp(e) {
  let r = await Rp(e);
  return {
    path: e,
    kind: bp(r),
    bytes: r.size,
    mode: r.mode,
    links: r.nlink
  };
}

var Ce = 32;

import { join as Lp } from "path";

var co = ".gitignore";

var bo = we(joe(), 1);

import { join as wp } from "path";

var Op = e => e.split(/\r?\n/).map((r, s) => ({
  line: r,
  named: `line ${s + 1}: ${r}`
})).find(r => FSr(r.line) !== null)?.named;

import { lstat as _p } from "fs/promises";

var Pp = Object.freeze([ "ENOENT", "ENOTDIR" ]);

var xo = e => Pp.includes(E(e) ?? "");

var vp = e => _p(e).then(() => Promise.reject(Error("A .gitignore here cannot be read")), r => xo(r) ? "" : Promise.reject(r));

async function Ro(e) {
  let r = wp(e, co), s = await rF(r) ?? await vp(r), i = Op(s);
  if (i !== void 0) throw Error("A .gitignore line cannot be read", {
    cause: `${r} ${i}`
  });
  let n = Ylt(s);
  return n.length > 0 ? [ {
    base: e,
    rules: bo.default().add(n)
  } ] : [];
}

async function Ep(e, r) {
  let s = Lp(e, co);
  if (r.some(n => n.path === s && n.kind === "file" && n.links > 1)) throw Error("A .gitignore here cannot be read", {
    cause: s
  });
  return Ro(e);
}

import { relative as Tp } from "path";

var K = (e, r) => qx(Tp(e, r.path));

import { basename as Wp } from "path";

import { basename as Ip } from "path";

var So = Object.freeze([ ".mcp.json" ]);

var Mp = (e, r) => !So.includes(r) && (bF(`/${r}`) || bF(`/${Ip(e)}/${r}`) || sms(`/${r}`));

import { dirname as Np, join as Dp } from "path";

var kp = Object.freeze({
  file: "",
  folder: "/",
  link: "",
  special: ""
});

var _o = (e, r) => e.toReversed().map(({base: s, rules: i}) => i.test(K(s, r) + kp[r.kind])).find(s => s.ignored || s.unignored)?.ignored ?? !1;

function Fp(e, r, s) {
  let i = Dp(e, mf), n = Np(i);
  return !(s.path === i || s.path === n) && (_o(r.scope, s) || r.path === n && _o(r.scope.filter(f => f.base !== n), {
    ...s,
    path: n,
    kind: "folder"
  }));
}

import { basename as Eo } from "path";

var zp = [ ...aIn, ".hg", ".svn", ".jj", ".sl", ".bzr" ];

function Cp(e) {
  let r = [ Eo(e.path), ...rms(Eo(e.path)) ];
  return e.kind === "folder" && r.some(s => s.endsWith(".git")) || r.some(s => zp.includes(s));
}

var jp = (e, r, s) => g2r([ s.kind === "link" && "link", s.kind === "special" && "special", s.kind === "file" && s.links > 1 && "hard-link", Wp(s.path).includes("\\") && "backslash", Cp(s) && "never", mAt(e, s.path) && "generated", Mp(e, K(e, s)) && "secret", Fp(e, r, s) && "ignored" ]);

function Bp(e, r, s) {
  let i = jp(e, r, s);
  return i === void 0 ? [] : [ {
    path: K(e, s),
    why: i
  } ];
}

var ko = 33188;

var Kp = 73;

var Do = 33261;

function qp(e) {
  return (e.mode & Kp) !== 0 ? Do : ko;
}

var $p = (e, r) => ({
  path: K(e, r),
  bytes: r.bytes,
  mode: qp(r)
});

function Xp(e, r, s) {
  let i = s.flatMap(m => Bp(e, r, m)), n = new Set(i.map(m => m.path)), f = s.filter(m => !n.has(K(e, m)));
  return {
    files: f.filter(m => m.kind === "file").map(m => $p(e, m)),
    leftOut: i,
    folders: f.filter(m => m.kind === "folder").map(m => ({
      path: m.path,
      scope: r.scope
    }))
  };
}

async function Yp(e, r) {
  let s = Ta(Ce, n => Sp(Qp(r.path, n))), i = await Promise.all((await Gp(r.path)).toSorted().map(s));
  return Xp(e, {
    path: r.path,
    scope: r.scope.concat(await Ep(r.path, i))
  }, i);
}

import { dirname as Vp } from "path";

function Wo(e) {
  let r = Vp(e);
  return r === e ? [ e ] : [ e, ...Wo(r) ];
}

import { lstat as Zp } from "fs/promises";

import { join as Jp } from "path";

var ef = e => Zp(Jp(e, ".git")).then(() => !0, r => xo(r) ? !1 : Promise.reject(r));

async function rf(e) {
  let r = Wo(e);
  for (let [s, i] of r.entries()) if (await ef(i)) return r.slice(1, s + 1).toReversed();
  return [];
}

var of = async e => (await Promise.all((await rf(e)).map(Ro))).flat();

async function qe(e) {
  let r = [], s = [], i = [ {
    path: e,
    scope: await of(e)
  } ];
  for (let n of i) {
    if (r.length > ze) break;
    let m = await Yp(e, n);
    r.push(...m.files), s.push(...m.leftOut), i.push(...m.folders);
  }
  return {
    files: r.toSorted(Ne),
    leftOut: s.toSorted(Ne)
  };
}

import { mkdir as Pf, mkdtemp as _f } from "fs/promises";

import { basename as vf, join as nt } from "path";

import { mkdir as xf, writeFile as yf } from "fs/promises";

import { dirname as bf, join as rt } from "path";

var $o = 448;

var tf = 384;

import { join as gf } from "path";

import { lstat as nf, realpath as af } from "fs/promises";

var sf = !1;

var Qo = 1n;

var Yo = Object.freeze({
  bigint: !0
});

async function pf(e, r, s) {
  let i = await af(r).catch(() => e), f = yy(e, i, sf) ? await nf(i, Yo).catch(() => {}) : void 0;
  return f?.ino === s.ino && f.dev === s.dev && f.nlink === Qo;
}

import { open as lf } from "fs/promises";

var ff = Object.freeze([ "ENOENT", "ENOTDIR", "ELOOP", "EISDIR" ]);

var uf = e => lf(e, Bu()).catch(r => ff.includes(E(r) ?? "") ? void 0 : Promise.reject(r));

import { lstat as df } from "fs/promises";

import { dirname as cf } from "path";

var hf = async (e, r) => await nO(e, cf(r)) === "ok" && (await df(r).catch(() => {}))?.isFile() === !0;

async function Qe(e, r) {
  let s = gf(e, r.path), n = await hf(e, s) ? await uf(s) : void 0;
  try {
    let f = await (n?.stat(Yo)), h = f?.isFile() === !0 && f.size === BigInt(r.bytes) && f.nlink === Qo && await pf(e, s, f) ? await (n?.readFile()) : void 0;
    return h?.length === r.bytes ? h : void 0;
  } finally {
    await (n?.close());
  }
}

async function Rf(e, r, s) {
  let i = await Qe(e, s);
  if (i === void 0) return;
  return await xf(bf(rt(r, s.path)), {
    recursive: !0,
    mode: $o
  }).then(() => yf(rt(r, s.path), i, {
    flag: "wx",
    mode: tf
  })).catch(n => Promise.reject(Error("A file could not be copied to be validated", {
    cause: `${E(n) ?? ""} ${s.path}`.trim()
  }))), at(i);
}

async function Af(e, r, s) {
  e.abort(), await r, await s();
}

var Sf = (e, r) => Object.fromEntries(e.map((s, i) => [ s.path, r[i] ?? "" ]));

var Of = (e, r, s) => ({
  home: e,
  dir: r,
  hashes: s
});

async function wf(e, r) {
  if (Oy()) return Promise.reject(re());
  let s = await _f(nt(Jf(), "claude-publish-")).catch(R => Promise.reject(Error("A folder to validate a copy in could not be made", {
    cause: E(R) ?? ""
  }))), i = TC(() => Ie(s));
  if (Oy()) return await i(), Promise.reject(re());
  let n = nt(s, "copy", vf(e)), f = new AbortController, m = Promise.resolve().then(() => Pf(n, {
    recursive: !0,
    mode: $o
  })).catch(() => {}).then(() => Promise.allSettled(r.map(Ta(Ce, R => f.signal.aborted ? Promise.resolve(void 0) : Rf(e, n, R).catch(O => (f.abort(), 
  Promise.reject(O)))))));
  using h = bt(() => Af(f, m, i));
  let g = await m, b = g.find(R => R.status === "rejected"), y = r.find((R, O) => g[O]?.status === "fulfilled" && !g[O].value);
  if (await (b === void 0 && y === void 0 && !f.signal.aborted ? void 0 : i()), b?.status === "rejected") return Promise.reject(b.reason);
  if (f.signal.aborted) return await i(), Promise.reject(re());
  if (y !== void 0) return {
    missed: y.path
  };
  return Of(s, n, Sf(r, g.map(R => R.status === "fulfilled" ? R.value : void 0)));
}

var Ye = e => d("changed", [ `${e.missed} is not the file that was listed` ]);

function Lf(e, r) {
  let s = new Set(e.listing.files.map(i => i.path));
  return [ ...e.listing.files.filter(i => !Object.hasOwn(r.hashes, i.path)).map(i => "Among the files to send only since the folder was read: " + i.path), ...Object.keys(r.hashes).filter(i => !s.has(i)).map(i => "No longer among the files to send since the folder was read: " + i), ...e.listing.files.filter(i => Object.hasOwn(r.hashes, i.path) && e.hashes[i.path] !== r.hashes[i.path]).map(i => `${i.path} is not the file that was listed`) ].slice(0, 1);
}

function Ef(e, r) {
  let s = e.kind === "ready" ? Lf(e, r) : [];
  return s.length === 0 && (e.kind !== "ready" || e.listing.files.length === Object.keys(r.hashes).length) ? e : d("changed", s);
}

import { basename as Tf } from "path";

var pe = e => e.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "") || "plugin";

function If(e) {
  let r = RGe(pe(Tf(e)));
  return r?.severity === "error" ? [ `${r.message} The name comes from the folder: rename it.` ] : [];
}

import { basename as Nf } from "path";

var ct = 300;

var Mf = e => e && kt(e, ct);

var kf = "0.1.0";

var Df = (e, r) => `${_({
  name: pe(Nf(e)),
  version: kf,
  description: Mf(r)
}, null, 2)}\n`;

var Ff = (e, r) => ({
  kind: "needs-manifest",
  root: e,
  draft: Df(e, r)
});

var zf = e => e.flatMap(r => r.errors.map(s => `${r.filePath}: ${s.path}: ${ds(s.message)}`));

import { join as Hf } from "path";

var Cf = e => ({
  name: e.name,
  version: e.version,
  description: e.description
});

var Uf = p(() => u({
  name: o(),
  version: o().optional(),
  description: o().optional()
}));

async function Wf(e) {
  let r = await bQ(Hf(e, mf)), s = Uf().safeParse(mt(r.kind === "ok" ? r.content : ""));
  if (r.kind === "absent") return "absent";
  return s.success ? Cf(s.data) : "unreadable";
}

function jf(e, r) {
  return e !== void 0 && r !== void 0 ? [ [ e.path, at(r) ] ] : [];
}

async function vt(e, r, s) {
  let i = await Promise.all(e.map(Ta(Ce, r))), n = e.find((m, h) => i[h] === void 0);
  return n === void 0 ? i.flatMap((m, h) => s(e[h], m)) : {
    missed: n.path
  };
}

async function Bf(e, r) {
  let s = await vt(r, i => Qe(e, i), jf);
  return "missed" in s ? s : {
    hashes: Object.fromEntries(s)
  };
}

var Lt = e => e.files.map(r => r.path).filter(r => `/${r}`.endsWith(`/${qx(mf)}`));

var er = 52428800;

function Et(e, r) {
  let s = Lt(e);
  if (s.length > 1) return d("findings", [ `More than one manifest: ${s.join(", ")}` ]);
  if (e.files.length > ze) return d("too-many-files");
  return r > er ? d("too-large") : void 0;
}

async function Tt(e, r) {
  let s = await qe(e), i = s.files.reduce((h, g) => h + g.bytes, 0), n = Et(s, i);
  if (n !== void 0) return n;
  let f = await Bf(e, s.files);
  return "missed" in f ? Ye(f) : {
    kind: "ready",
    root: e,
    manifest: r,
    listing: s,
    bytes: i,
    hashes: f.hashes
  };
}

import { basename as Dt, dirname as Ft } from "path";

var Kf = [ " ", "\t", `\n`, '"', "'", "(" ];

var qf = e => e.slice(0, 1 + Math.max(...Kf.map(r => e.lastIndexOf(r))));

function $f(e, r, s) {
  let i = e.split(r);
  return i.slice(0, -1).map(n => qf(n) + s).concat(i.at(-1) ?? "").join("");
}

function tr(e, r, s) {
  let i = Ft(r.dir), n = Ft(s).replace(/[\\/]$/, "");
  return [ `${Dt(r.home)}/copy`, `${Dt(r.home)}\\copy` ].reduce((f, m) => $f(f, m, n), e.replaceAll(i, () => n).replaceAll(Lg(i, i.length), () => n));
}

var Xf = (e, r, s) => e.map(i => ({
  ...i,
  filePath: tr(i.filePath, r, s),
  errors: i.errors.map(n => ({
    ...n,
    message: tr(n.message, r, s)
  }))
}));

function Gf(e) {
  return e.kind === "ready" && Lt(e.listing).length === 0 ? d("unreadable", [ qx(mf) ]) : e;
}

async function Qf(e, r, s) {
  let {manifest: i, contents: n} = await CGe(r.dir), f = i?.errors.some(y => y.code === r7n) ?? !0, m = zf(Xf(f ? n : [ i ?? [], n ].flat(), r, e)).concat(f ? If(e) : []), h = f ? await qat(r.dir) : i?.fileType === "plugin", g = await Wf(r.dir);
  if (!h) return d("not-a-plugin");
  if (m.length > 0) return d("findings", m);
  if (g === "unreadable") return d("unreadable", [ qx(mf) ]);
  return g === "absent" ? Ff(e, s) : Ef(Gf(await Tt(e, g)), r);
}

function Yf(e) {
  let r = qx(mf);
  return e.leftOut.some(i => i.path === r) ? d("unreadable", [ r ]) : void 0;
}

async function Vf(e, r) {
  let s = await qe(e), i = Yf(s) ?? Et(s, s.files.reduce((h, g) => h + g.bytes, 0));
  if (i !== void 0) return i;
  let n = await wf(e, s.files);
  if ("missed" in n) return Ye(n);
  let f = TC(() => Ie(n.home));
  using m = bt(f);
  if (Oy()) return await f(), Promise.reject(re());
  try {
    return await Qf(e, n, r).catch(h => d("unreadable", ao(h).map(g => tr(g, n, e))));
  } finally {
    await f();
  }
}

async function jt(e, r) {
  let s = await Zf(rm(le(), e)).catch(() => {});
  if (!(s !== void 0 && await $B(s))) return d("no-folder", [ e ]);
  return await nO(s, em(s, io)) === "refused" ? d("unreadable", [ io ]) : B(Vf(s, r));
}

var om = e => ({
  path: qx(mf),
  bytes: Buffer.byteLength(e.draft),
  mode: ko
});

import { basename as tm } from "path";

function sm(e) {
  let r = tX().safeParse(mt(e.draft));
  return {
    name: r.data?.name ?? tm(e.root),
    version: r.data?.version,
    description: r.data?.description
  };
}

var im = (e, r) => ({
  files: e.files.concat(r).toSorted(Ne),
  leftOut: e.leftOut
});

var nm = (e, r, s) => ({
  ...e,
  [r]: at(s)
});

var am = (e, r, s) => ({
  ...e,
  bytes: e.bytes + r.bytes,
  listing: im(e.listing, r),
  hashes: nm(e.hashes, r.path, s.draft)
});

async function pm(e) {
  let r = om(e), s = await Tt(e.root, sm(e));
  return s.kind === "ready" ? am(s, r, e) : s;
}

async function fm(e) {
  return e.kind === "needs-manifest" ? B(pm(e)) : e;
}

async function nr(e, r) {
  let s = await jt(e.folder, e.description), i = await fm(s);
  if (i.kind === "refused") return i;
  return i.kind === "ready" ? {
    wanted: e,
    plan: i,
    organization: r,
    draft: up(s),
    withheld: !1
  } : d("unreadable");
}

var rs = Object.freeze({
  nothing: "Nothing was sent.",
  uploading: "The upload was on its way: look in your uploads on claude.ai, where it may have arrived. Nothing was submitted.",
  shelved: "The upload had arrived on your own shelf, where only you see it. It was not submitted.",
  submitting: "The upload had arrived, and its submission was on its way: it may have reached your organization."
});

function L(e, r, s) {
  return e.signal.aborted ? d("stopped", [ rs[s] ]) : r;
}

function os(e) {
  return e === "." || e === ".." ? e.replaceAll(".", "%252E") : encodeURIComponent(e).replaceAll(".", "%2E");
}

var mm = e => `/api/oauth/organizations/${os(e.organization.id)}`;

var mr = (e, r) => `${mm(e)}/${r.map(os).join("/")}`;

var de = (e, r) => ({
  method: "get",
  path: mr(e, r),
  body: void 0,
  headers: {},
  bound: "clock",
  signal: e.signal
});

var lm = 200;

var um = 300;

var k = e => e.status >= lm && e.status < um;

var dm = 400;

var cm = 405;

var hm = 404;

var gm = 501;

var xm = 422;

var ym = Object.freeze([ dm, hm, cm, xm, gm ]);

var bm = 20;

var Rm = 300;

var Am = Object.freeze([ "scan", "other" ]);

var Sm = (e, r) => [ ...r.findings, ...[ r.message ?? "" ].filter(s => s !== "" && Am.includes(e)) ].slice(0, bm).map(s => ne(s, Rm));

var Om = p(() => u({
  error: u({
    message: o().optional(),
    details: u({
      error_code: o().optional(),
      validation_errors: u({
        message: o().optional(),
        plugins: T(u({
          name: o().optional(),
          error: o().optional()
        })).optional()
      }).optional()
    }).optional()
  }).optional()
}));

function lr(e) {
  let r = Om().safeParse(e.data).data?.error, s = r?.details?.validation_errors;
  return {
    code: r?.details?.error_code,
    message: r?.message,
    findings: [ s?.message ?? "", ...(s?.plugins ?? []).map(i => [ i.name, i.error ].filter(Boolean).join(": ")) ].filter(Boolean)
  };
}

function he(e, r) {
  let s = lr(e), i = r.codes[s.code ?? ""] ?? r.statuses[e.status] ?? "other";
  return d(i, Sm(i, s));
}

var Pm = Object.freeze({});

var _m = 12e4;

var vm = 15e3;

var wm = Object.freeze({
  get: vm,
  post: _m
});

function Lm(e) {
  return e.bound === "progress" ? {
    streamUpload: Pm
  } : {
    timeout: wm[e.method]
  };
}

var Em = e => ({
  ...e.headers,
  "anthropic-beta": Ap
});

var Tm = 4194304;

var _s = e => ({
  auth: "teleport-org",
  headers: Em(e),
  ...Lm(e),
  signal: e.signal,
  maxBodyLength: Buffer.byteLength(e.body ?? ""),
  maxContentLength: Tm,
  maxRedirects: 0,
  validateStatus: () => !0
});

function Im(e) {
  return e.method === "get" ? Gt.get(e.path, _s(e)) : Gt.post(e.path, e.body, _s(e));
}

var Ls = Object.freeze({
  status: 0,
  data: void 0
});

function Mm(e, r) {
  return t(`plugin publish: ${e.method} ${e.path} got no answer: ` + l(r), {
    level: "error"
  }), Ls;
}

var km = Object.freeze({
  "data-residency": "third-party",
  "essential-traffic-only": "traffic-off",
  "no-auth": "signed-out"
});

async function ge(e) {
  let r = await Im(e).catch(i => Mm(e, i));
  return "status" in r ? {
    status: r.status,
    data: r.data
  } : d(km[r.reason] ?? "other");
}

var Nm = Object.freeze([ "plugin_upload_conflict", "plugin_previous_save_scanning", "plugin_upload_busy", "plugin_content_scan_rate_limited", "org_library_submission_conflict", "org_library_submission_source_changed" ]);

var Dm = 429;

var Fm = 503;

var zm = Object.freeze([ Dm, Fm ]);

var Cm = (e, r) => e.method === "get" && r.status === Ls.status || zm.includes(r.status) || Nm.includes(lr(r).code ?? "");

var Um = 3;

var Hm = 2e3;

async function Q(e, r = Um) {
  let s = await ge(e);
  if (!(r > 0 && !e.signal.aborted && "status" in s && Cm(e, s))) return s;
  return await J(Hm, e.signal), Q(e, r - 1);
}

var Cs = e => [ e, ...Object.values(Object(e)) ].find(Array.isArray) ?? [];

var Hs = p(() => u({
  uuid: o().optional(),
  plugin_id: o().nullish(),
  plugin_name: o().nullish(),
  status: o().optional(),
  publish_state: o().nullish(),
  updates_published_plugin_id: o().nullish(),
  denial_reason: o().nullish(),
  outcome: u({
    published_plugin_id: o().nullish(),
    published_marketplace_id: o().nullish(),
    failure_reason: o().nullish()
  }).nullish()
}));

var Wm = e => Cs(e).flatMap(r => [ Hs().safeParse(r) ].flatMap(s => s.success ? [ s.data ] : []));

var jm = Object.freeze({
  plugin_version_scan_pending: "scan-pending",
  plugin_version_scan_failed: "scan",
  org_library_submission_already_pending: "already-pending",
  org_library_submission_nothing_to_publish: "nothing-new",
  org_library_submission_publish_in_progress: "in-progress",
  org_library_submission_update_needs_admin: "needs-admin",
  org_library_submission_update_needs_org_settings: "needs-org-settings",
  org_library_submission_name_taken: "name-conflict",
  org_library_submission_library_full: "library-full",
  org_library_submission_update_name_mismatch: "busy",
  org_library_submission_update_target_deleted: "busy",
  org_library_submission_install_preference_requires_review: "busy",
  org_library_submission_conflict: "busy",
  org_library_submission_source_changed: "busy",
  plugin_upload_busy: "busy",
  plugin_content_scan_rate_limited: "busy",
  legal_attestation_required: "legal"
});

var Bm = Object.freeze({
  0: "busy",
  401: "signed-out",
  404: "publishing-off",
  409: "already-pending",
  429: "busy",
  503: "busy"
});

var Ks = Object.freeze({
  codes: jm,
  statuses: Bm
});

async function qs(e) {
  let r = await Q(de(e, [ "library_submissions", "me" ]));
  if ("kind" in r) return r;
  if (ym.includes(r.status)) return d("not-served");
  return k(r) ? Wm(r.data) : he(r, Ks);
}

var xr = e => `${un().CLAUDE_AI_ORIGIN}/customize/plugins/` + encodeURIComponent(e);

var $s = (e, r) => d(e.refusal.kind, e.refusal.details.concat(`See or remove the upload: ${xr(r.id)}`));

var Km = Object.freeze({
  plugin_version_scan_pending: "scan-pending",
  plugin_version_scan_failed: "scan",
  org_library_submission_publish_not_started: "busy",
  org_library_submission_publish_timed_out: "busy",
  org_library_submission_publisher_unavailable: "busy"
});

var qm = "claudeai-organization-library";

var $m = p(() => u({
  name: o().optional(),
  marketplace_name: o().optional()
}));

function Xm(e, r) {
  let s = $m().safeParse(e).data, i = cQr(s?.marketplace_name ?? "") ?? qm;
  return `${s?.name ?? r}@${i}`;
}

async function Gm(e, r, s) {
  let i = await ge(de(e, [ "plugins", r ]));
  return Xm("status" in i ? i.data : void 0, s);
}

var Qm = 64;

var be = e => pe(pe(e.name).slice(0, Qm));

async function Ym(e, r, s) {
  let i = await Gm(e, r, be(e.manifest));
  return {
    kind: "published",
    manifest: e.manifest,
    verdict: s.verdict,
    install: i,
    link: xr(r)
  };
}

var Vm = (e, r, s) => ({
  kind: r,
  manifest: e.manifest,
  verdict: s.verdict,
  id: s.id
});

async function Zm(e, r, s) {
  let i = r.outcome?.published_plugin_id ?? void 0, n = r.publish_state === "completed" && i !== void 0, f = r.status === "approved" && r.publish_state === "failed", m = r.status === "approved";
  if (f) return d(Km[r.outcome?.failure_reason ?? ""] ?? "other");
  return m && n ? Ym(e, i, s) : Vm(e, m ? "publishing" : "in-review", s);
}

var oi = (e, r, s) => e.find(i => i.plugin_id === r.id && i.status === s);

var Jm = e => e === void 0 ? "available" : void 0;

var el = e => ({
  kind: "plugin",
  id: e.id
});

var rl = (e, r) => ({
  source: el(e),
  proposed_install_preference: Jm(oi(r, e, "approved")),
  predecessor_uuid: oi(r, e, "denied")?.uuid
});

var ol = Object.freeze({
  "Content-Type": "application/json"
});

var pi = (e, r, s) => ({
  method: "post",
  path: mr(e, r),
  body: _(s),
  headers: ol,
  bound: "clock",
  signal: e.signal
});

async function tl(e, r) {
  let s = await Q(pi(e, [ "library_submissions" ], r));
  if ("kind" in s) return s;
  return k(s) ? Hs().safeParse(s.data).data ?? d("other") : he(s, Ks);
}

var sl = 40;

var li = e => [ e.verdict ?? "" ].filter(Boolean).map(r => "Security scan on claude.ai: " + kt(r, sl));

function il(e, r) {
  if (e.signal.aborted || r.scan === "failed") return $s(L(e, d("scan", li(r)), "shelved"), r);
  return r.scan === "processing" ? {
    kind: "on-shelf",
    manifest: e.manifest,
    id: r.id
  } : void 0;
}

async function nl(e, r, s) {
  let i = il(e, r);
  if (i !== void 0) return i;
  let n = await tl(e, rl(r, s));
  return "kind" in n ? $s(L(e, n, "submitting"), r) : Zm(e, n, r);
}

var ci = "manual";

var al = Object.freeze({
  name: "My Uploads",
  source: ci,
  source_url: ""
});

var pl = p(() => u({
  id: o().min(1),
  source: o().optional()
}));

var fl = e => [ e, ...Cs(e) ].map(r => pl().safeParse(r).data).find(r => r?.source === ci)?.id;

var ml = Object.freeze({
  plugin_upload_already_exists: "exists",
  plugin_upload_validation_failed: "invalid",
  plugin_upload_limit_reached: "shelf-full",
  plugin_previous_save_failed_scan: "scan",
  plugin_upload_conflict: "busy",
  plugin_previous_save_scanning: "busy",
  plugin_upload_busy: "busy",
  plugin_content_scan_rate_limited: "busy",
  legal_attestation_required: "legal"
});

var ll = Object.freeze({
  0: "busy",
  401: "signed-out",
  403: "creation-off",
  413: "too-large",
  429: "busy",
  503: "busy"
});

var Ri = Object.freeze({
  codes: ml,
  statuses: ll
});

async function Ai(e, r) {
  let s = await Q(e);
  if ("kind" in s) return s;
  return k(s) ? fl(s.data) ?? r() : he(s, Ri);
}

var ul = e => Ai(pi(e, [ "marketplaces", "create-account-marketplace" ], al), async () => d("other"));

var dl = 60;

var cl = e => ({
  "Content-Type": `multipart/form-data; boundary=${e.boundary}`
});

var hl = (e, r, s) => ({
  ...s,
  archive: e,
  manifest: r.manifest
});

var gl = Object.freeze([ "pass", "warn", "unknown" ]);

function xl(e, r, s) {
  let i = s ? e.content_scan === null : e.content_scan == null, n = r === !1 && i, f = Boolean(e.pending_version) && e.served !== !0, m = gl.includes(e.content_scan?.combined_assessment ?? "");
  return g2r([ e.content_scan?.status === "errored" && "failed", !n && e.content_scan?.status !== "completed" && "processing", e.served === !1 && "processing", f && "processing", n && "none", !m && "failed" ]) ?? "passed";
}

var yl = (e, r, s) => ({
  id: e,
  name: r.name,
  version: r.version,
  scan: xl(r, r.scan_requested ?? s?.isScanAsked, s !== void 0),
  isScanAsked: r.scan_requested ?? s?.isScanAsked,
  verdict: r.content_scan?.combined_assessment ?? r.content_scan?.status
});

var bl = p(() => u({
  id: o().min(1).optional(),
  name: o().optional(),
  version: o().optional(),
  marketplace_id: o().optional(),
  served: M().optional(),
  pending_version: o().nullish(),
  scan_requested: M().nullish(),
  content_scan: u({
    status: o().optional(),
    combined_assessment: o().nullish()
  }).nullish()
}));

function Ti(e, r) {
  let s = bl().safeParse(e).data ?? {}, i = r?.id ?? s.id;
  return i !== void 0 ? yl(i, s, r) : void 0;
}

var Rl = (e, r, s) => `${mr(r, [ "marketplaces", e, "plugins", "account-upload" ])}?overwrite=${String(s === "replace")}`;

import { randomUUID as Sl } from "crypto";

function Al(e, r) {
  let s = be(r);
  return s !== r.name ? `\r\n--${e}\r\nContent-Disposition: form-data; name="new_name"\r\n\r\n` + s : "";
}

function Ol(e, r) {
  let s = `----PluginPublish${Sl()}`, i = be(r);
  return {
    boundary: s,
    body: Buffer.concat([ Buffer.from(`--${s}\r\nContent-Disposition: form-data; name="file"; filename="${i}.zip"\r\nContent-Type: application/zip\r\n\r\n`), e, Buffer.from(Al(s, r) + `\r\n--${s}--\r\n`) ])
  };
}

function Pl(e, r, s) {
  let i = Ol(r.archive, r.manifest);
  return {
    method: "post",
    path: Rl(e, r, s),
    body: i.body,
    headers: cl(i),
    bound: "progress",
    signal: r.signal
  };
}

async function Di(e, r, s) {
  let i = await Q(Pl(e, r, s));
  if ("kind" in i) return i;
  if (lr(i).code === "plugin_upload_already_exists") return "exists";
  return k(i) ? Ti(i.data, void 0) ?? d("other") : he(i, Ri);
}

async function _l(e, r) {
  let s = await Di(e, r, "replace");
  return s === "exists" ? d("busy") : s;
}

var vl = 5e3;

async function wl(e, r) {
  let s = await ge(de(e, [ "plugins", r.id, "scan-status" ]));
  return "status" in s && k(s) ? Ti(s.data, r) ?? r : r;
}

var Ll = 3e5;

async function Hi(e, r, s = {
  left: dl,
  until: Date.now() + Ll
}) {
  if (!(r.scan === "processing" && !e.signal.aborted && s.left > 0 && Date.now() < s.until)) return r;
  return await J(vl, e.signal), Hi(e, await wl(e, r), {
    left: s.left - 1,
    until: s.until
  });
}

var El = e => Ai(de(e, [ "marketplaces", "list-account-marketplaces" ]), () => ul(e));

async function Tl(e, r) {
  let s = await Di(e, r, "new");
  if (s !== "exists") return s;
  return r.mode === "replace" ? _l(e, r) : d("exists");
}

var Il = p(() => u({
  organization: u({
    uuid: o(),
    name: o().min(1)
  })
}));

var Ml = 5e3;

async function kl(e, r) {
  if (!Ern()) return;
  let s = await ge({
    method: "get",
    path: "/api/oauth/profile",
    body: void 0,
    headers: {},
    bound: "clock",
    signal: AbortSignal.any([ r, AbortSignal.timeout(Ml) ])
  }), i = Il().safeParse("status" in s && k(s) ? s.data : void 0).data;
  return i?.organization.uuid === e ? i.organization.name : void 0;
}

async function Nl(e, r) {
  return e.name !== void 0 ? e : {
    ...e,
    name: await kl(e.id, r)
  };
}

async function Fl() {
  let e = Vt(P_n() ? a.CLAUDE_CODE_ORGANIZATION_UUID : await nU()), r = Up(), s = r?.organizationUuid === e;
  if (e === null) return;
  return {
    id: e,
    name: s && r?.organizationName || void 0
  };
}

async function Yi(e) {
  return e !== void 0 ? void 0 : Fl();
}

var Vi = () => P_n() ? "no-organization" : D4o();

async function zl(e, r) {
  let s = await Yi(e);
  if (s === void 0) return d(e ?? Vi());
  let i = {
    organization: s,
    signal: r
  }, n = await qs(i);
  return Array.isArray(n) ? Nl(s, r) : L(i, n, "nothing");
}

var i4o = e => [ e ?? [] ].flat().flatMap(r => [ `Writes this manifest first, to ${r.path}:`, ...r.text.trimEnd().split(`\n`) ]);

function rn(e) {
  return e.draft !== void 0 ? {
    path: qx(mf),
    text: e.draft ?? ""
  } : void 0;
}

var Cl = e => i4o(rn(e));

var z = 4096;

var tn = e => `${Us(e.path, z)} (${en(e.bytes)})`;

var s4o = e => [ e ].filter(r => r > 0).map(r => `${r} ${I(r, "entry stays", "entries stay")} on this machine (secrets, links, ignored files)`);

var Ul = e => s4o(e.plan.listing.leftOut.length);

var Tr = e => kt([ e.name, e.version ].filter(Boolean).join(" "));

var Ir = e => kt(e.organization.name ?? `organization ${e.organization.id}`);

var an = e => [ "First uploads it to your own shelf on claude.ai (My Uploads), where it is scanned", `Then submits it to ${Ir(e)} for an administrator's review; where the organization publishes without review, it is published at once`, ...[ be(e.plan.manifest) ].filter(r => r !== e.plan.manifest.name).map(r => `Listed under the name ${r}`), ...[ e.wanted.mode ].filter(r => r === "replace").map(() => "Replaces the plugin of this name on your shelf, if any") ];

var Hl = e => e.plan.listing.files.filter(r => So.includes(r.path)).map(r => `Sends ${r.path}: keys and tokens written in it go with it`);

var Wl = "Entries stay behind that are neither named nor counted here: this session's rules deny reading them.";

var mn = e => e.withheld ? [ Wl ] : [];

var ln = e => [ ...Hl(e), ...mn(e) ];

var C = e => ({
  question: `Publish ${Tr(e.plan.manifest)} to ${Ir(e)}?`,
  lines: [ `Folder: ${Us(e.plan.root)}`, `Sends ${e.plan.listing.files.length} ${I(e.plan.listing.files.length, "file")}, ` + en(e.plan.bytes), ...ln(e), ...Ul(e), ...an(e), ...Cl(e) ],
  values: e.plan.listing.files.map(tn)
});

var jl = 48;

var JGr = 20;

function Bl(e, r) {
  let s = e.slice(0, JGr).filter((f, m) => e.slice(0, m + 1).join(`\n`).length + jl <= r), i = e.length - s.length;
  return i === 0 ? s : s.concat(`and ${i} more ${I(i, "file")} not named here`);
}

var hn = (e, r) => [ C(e).question, `Organization: ${Ir(e)}`, ...C(e).lines, ...r ];

var Kl = 1800;

function ql(e, r) {
  let s = hn(e, r);
  return s.concat(Bl(C(e).values, Kl - s.join(`\n`).length));
}

function yn(e, r) {
  let s = r.withheld ? "Every file, and what stays behind that is named, is listed in" : "Every file, and what stays behind, is listed in";
  return [ e ?? "" ].filter(Boolean).map(i => `${s} ${i}`);
}

var $l = e => ({
  type: "other",
  reason: e.join(`\n`)
});

var o4o = e => `${e.path} (${en(e.bytes)})`;

var YGr = (e, r) => [ e ].filter(s => s > 0).map(s => `and ${s} more ${I(s, r)} not named here`);

var Xl = 128;

var x = 2 * z + Xl;

var QQn = e => (/^ */.exec(e)?.[0] ?? "") + kt(e, x);

var Gl = e => `stays here: ${e.path} (${e.words})`;

var a4o = e => [ ...e.files.map(o4o), ...YGr(e.unnamed?.files ?? 0, "file"), ...e.stays.map(Gl), ...YGr(e.unnamed?.stays ?? 0, "entry") ].map(QQn);

var W = 500;

var Ql = 1e5;

function wn(e) {
  let r = e.slice(0, W);
  return r.slice(0, N(r.reduce((s, i) => s.concat((s.at(-1) ?? 0) + i.path.length), []), s => s <= Ql));
}

var Yl = e => ({
  files: wn(e.files),
  stays: wn(e.leftOut)
});

var Cr = e => at(_([ e.plan.root, e.wanted.destination, e.organization.id, Tr(e.plan.manifest), e.wanted.mode, e.plan.listing.files.map(r => [ r.path, r.bytes, r.mode, e.plan.hashes[r.path] ]) ]));

function Vl(e, r) {
  let s = e.files.length - r.files.length, i = e.leftOut.length - r.stays.length;
  return s === 0 && i === 0 ? void 0 : {
    files: s,
    stays: i
  };
}

var In = Object.freeze({
  link: "a link, not followed",
  "hard-link": "shares what it holds with another name on this disk",
  ignored: "ignored by .gitignore",
  secret: "may hold a secret",
  never: "never sent",
  generated: "made by Claude Code",
  special: "not a file",
  backslash: "a backslash in its name"
});

var Zl = e => "stays here: " + Us(e.path, z) + ` (${In[e.why]})`;

var kn = e => [ ...e.plan.listing.files.map(tn), ...e.plan.listing.leftOut.map(Zl) ];

var Jl = e => [ ...kn(e), ...mn(e) ];

var Dn = e => `${Jl(e).join(`\n`)}\n`;

var eu = (e, r, s) => ({
  digest: Cr(e),
  title: C(e).question,
  organization: {
    id: kt(e.organization.id),
    name: e.organization.name && kt(e.organization.name)
  },
  plugin: {
    name: kt(e.plan.manifest.name),
    version: e.plan.manifest.version && kt(e.plan.manifest.version)
  },
  folder: Us(e.plan.root, z),
  mode: e.wanted.mode,
  steps: an(e),
  warnings: ln(e),
  writes: rn(e),
  sends: {
    files: e.plan.listing.files.length,
    bytes: e.plan.bytes
  },
  files: s.files.map(i => ({
    path: Us(i.path, z),
    bytes: i.bytes,
    sha256: e.plan.hashes[i.path] ?? "",
    runs: i.mode === Do
  })),
  staying: e.plan.listing.leftOut.length,
  stays: s.stays.map(i => ({
    path: Us(i.path, z),
    why: i.why,
    words: In[i.why]
  })),
  list: {
    sha256: at(Dn(e)),
    path: r
  },
  unnamed: Vl(e.plan.listing, s)
});

var ru = (e, r) => eu(e, r, Yl(e.plan.listing));

function ou(e, r) {
  let s = ru(e, r);
  return {
    path: e.plan.root,
    destination: e.wanted.destination,
    description: e.wanted.description,
    replace: e.wanted.mode === "replace" || void 0,
    shown: [ ...hn(e, yn(r, e)), ...a4o(s) ],
    question: s
  };
}

function tu(e, r) {
  let s = ql(e, yn(r, e));
  return {
    behavior: "ask",
    message: C(e).question,
    updatedInput: ou(e, r),
    suppressAlwaysAllowRule: !0,
    localDisplayOnly: !1,
    decisionReason: $l(s)
  };
}

var su = () => !ve() && !a.DISABLE_LOGIN_COMMAND;

var iu = () => {
  let e = sp(_zt);
  return (e === "cache_miss" || e === "route_missing") && !_Ue(_zt) && l3e({
    restrictions: {},
    compliance_taints: []
  }, _zt, KH());
};

var nu = "Claude Code couldn't load your organization's policy, so publishing from here is off for now: try again in a moment, or publish this plugin from claude.ai. Nothing was sent.";

var au = Object.freeze({
  "flag-off": "Publishing plugins isn't available in this session. Nothing was sent.",
  "third-party": "Publishing goes through claude.ai, and this session uses another provider. Nothing was sent.",
  bare: "Publishing is off under --bare. Nothing was sent.",
  "traffic-off": "Publishing is off while nonessential traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC). Nothing was sent.",
  policy: "Your organization's policy doesn't allow publishing from Claude Code: publish this plugin from claude.ai. Nothing was sent.",
  "cloud-session": "Publishing from a cloud session isn't offered yet. Publish from the Claude app or from a terminal on your own computer. Nothing was sent.",
  "signed-out": "Publishing needs a claude.ai sign-in. Sign in with /login, then publish again.",
  "no-organization": "This session is signed in by the app that started it, which didn't say which organization that is. Publish this plugin from claude.ai, or ask Claude in a terminal session signed in to claude.ai. Nothing was sent.",
  "nobody-to-ask": "Publishing waits for your answer, and this session has nobody to ask. Ask Claude to publish it in a session of your own. Nothing was sent.",
  "other-question": "The answer that came back was to another question than the one this session asked, so nothing was sent. Ask Claude to publish again.",
  "network-path": "That path names a place on the network, which publishing does not open. Nothing was read or sent.",
  "read-denied": "This session's permissions don't allow reading that folder, or a file in it that would be sent. Nothing was sent.",
  "write-denied": "This session's permissions don't allow writing the manifest this publish would add to the folder. Nothing was written or sent.",
  "no-folder": "No folder at that path. Nothing was sent.",
  "not-a-plugin": "That folder holds no plugin: no manifest, commands, skills, agents or hooks. Nothing was sent.",
  findings: "The plugin didn't pass validation. Fix these, then publish again. Nothing was sent.",
  "too-many-files": `The plugin has more than ${ze} files to send. Name what isn't part of it in .gitignore. Nothing was sent.`,
  "too-large": `The plugin is larger than ${en(er)}, the most publishing sends. Nothing was published.`,
  unreadable: "Part of the folder couldn't be read, so nothing was sent.",
  changed: "The folder changed while it was being published, so nothing was sent. Publish again.",
  unwritten: "The manifest couldn't be written to .claude-plugin/plugin.json, so nothing was sent.",
  stopped: "Publishing was stopped.",
  failed: "Publishing ran into an error and stopped.",
  "not-served": "claude.ai doesn't offer publishing from Claude Code for your organization yet. Nothing was sent.",
  "publishing-off": "Your organization doesn't accept member submissions. The upload is on your own shelf on claude.ai (My Uploads), where only you see it and where you can remove it. An administrator chooses a publishing policy in the organization settings.",
  "creation-off": "Your organization has plugin creation turned off. An administrator turns it on in the organization settings on claude.ai.",
  exists: "A plugin of this name is already in your uploads on claude.ai, and it was not replaced.",
  invalid: "claude.ai didn't take the plugin: it failed validation.",
  "shelf-full": "Your uploads on claude.ai are full. Remove one there, then publish again.",
  scan: "The plugin didn't pass the security scan on claude.ai, so it wasn't submitted. It is on your own shelf, where only you see it.",
  "scan-pending": "The security scan of the plugin is still running. Publish again in a few minutes.",
  "already-pending": "A submission is already pending review.",
  "nothing-new": "This version is already in your organization's library.",
  "in-progress": "An earlier submission of this plugin is being published. Publish again once it is in the library.",
  "needs-admin": "This update needs an administrator: ask one to publish it from claude.ai.",
  "needs-org-settings": "This update needs a change to the organization's settings on claude.ai first. Ask an administrator.",
  "name-conflict": "An item with this name is already in your organization's library. Rename yours and publish again.",
  "library-full": "Your organization's library is full. An administrator makes room on claude.ai.",
  legal: "Your organization requires an attestation with each submission. Publish this plugin from claude.ai.",
  busy: "claude.ai was busy with this plugin or did not answer. Publish again in a moment.",
  other: "claude.ai didn't take the plugin."
});

var pu = "Publishing needs a claude.ai sign-in, and this session has none it can publish on. Publish this plugin from claude.ai, or ask Claude to publish it from a session signed in to claude.ai.";

function fu(e) {
  if (e === "signed-out" && !su()) return pu;
  if (e === "policy" && iu()) return nu;
  return au[e];
}

function mu(e) {
  return e.kind === "published" ? [ "Colleagues install it with /plugin install " + kt(e.install), `See it at ${kt(e.link)}` ] : [];
}

var lu = Object.freeze({
  published: "published to your organization's library.",
  "in-review": "uploaded to your shelf and sent to your organization for an administrator's review. It reaches the library once approved.",
  publishing: "uploaded to your shelf and approved. It is on its way into your organization's library.",
  "on-shelf": "uploaded to your own shelf on claude.ai, and not submitted yet: its scan was still running when the wait for it ended. Submit it from claude.ai once the scan has passed."
});

var uu = e => [ lu[e.kind], ...[ e ].flatMap(r => "verdict" in r ? [ r ] : []).flatMap(li), ...mu(e), ...[ e ].flatMap(r => "id" in r ? [ r.id ] : []).map(r => `Follow it on claude.ai: ${xr(r)}`) ];

var du = " (the plugin's own version; the library numbers its copies itself)";

var cu = e => Tr(e) + (e.version ? du : "");

function Br(e) {
  return e.kind === "refused" ? [ fu(e.refusal.kind), ...e.refusal.details.map(s => kt(s)) ] : uu(e).map((s, i) => (i === 0 ? `${cu(e.manifest)}: ` : "") + s);
}

var hu = e => ({
  type: "other",
  reason: e
});

var gu = e => ({
  behavior: "deny",
  message: e,
  decisionReason: hu(e)
});

var Kr = (e, r = []) => gu(Br(d(e, r)).join(`\n`));

function Jn(e, r) {
  return e.refusal.kind === "unreadable" && mxe(r.permissions()) ? {
    ...e,
    refusal: {
      ...e.refusal,
      details: []
    }
  } : e;
}

function ee(e, r) {
  let s = Jn(e, r);
  return Kr(s.refusal.kind, s.refusal.details);
}

import { join as ra } from "path";

var xu = (e, r, s) => r.files.map(i => i.path).filter(i => w0(ra(e[0] ?? "", i), s.permissions(), e.map(n => ra(n, i))));

function ta(e, r, s) {
  return xu(e, r, s).length === 0 ? void 0 : d("read-denied");
}

var yu = (e, r) => r !== void 0 || e.shouldAvoidPermissionPrompts === !0 || e.servedCall === !0 || e.mode === "dontAsk";

import { dirname as Ru, join as Au } from "path";

var bu = 384;

async function Su(e, r, s) {
  let i = bh(s.session), n = bV(e), f = Au(i, `publish-${n}.txt`);
  return (n !== void 0 && Ru(f) === i ? nL(i, void 0) : Promise.reject(Error("The tool use id is no plain token"))).then(() => Qie(f, Buffer.from(Dn(r)), bu)).then(() => f, () => {});
}

import { realpath as _u } from "fs/promises";

import { resolve as vu } from "path";

var Ou = [ "bare-deny", "path-deny" ];

var Pu = (e, r) => Ou.includes(dFe([ e ], r.permissions(), {
  refuseAutomounterShapes: !0
}).layer);

async function fa(e, r) {
  let s = vu(le(), e.path);
  if (Pu(s, r)) return d("read-denied");
  if (!mxe(r.permissions())) return;
  let i = await _u(s).catch(() => s), n = await B(qe(i));
  return "kind" in n ? n : ta([ s, i ], n, r);
}

import { resolve as wu } from "path";

var ma = (e, r, s) => lFe(s.tool, {
  path: e
}, s.permissions(), r) !== null;

function Lu(e, r) {
  if (ma(e.path, [ e.path ], r)) return "network-path";
  let s = wu(le(), e.path), i = s6(s);
  return ma(s, i.paths, r) ? "network-path" : i.vetted ? void 0 : "unreadable";
}

var da = (e, r) => y7n() ? Lu(e, r) : "flag-off";

var Tu = 16;

var XGr = new lt(() => new Map);

function Iu(e, r, s) {
  let i = XGr.of(s.session);
  i.set(e, r), Array.from(i.keys()).slice(0, Math.max(0, i.size - Tu)).forEach(n => i.delete(n));
}

var Mu = 4e3;

var xa = p(() => u({
  digest: o().regex(pS).describe("What a yes binds to: the publish is of this, or refused."),
  title: o().max(x),
  organization: u({
    id: o().max(x),
    name: o().max(x).optional()
  }),
  plugin: u({
    name: o().max(x),
    version: o().max(x).optional()
  }),
  folder: o().max(x),
  mode: U([ "new", "replace" ]).describe("Whether a plugin of this name on the shelf is replaced."),
  steps: T(o().max(x)).max(W).describe("What a yes sets off, a sentence each, in order."),
  warnings: T(o().max(x)).max(W).describe("What the person is warned of, a sentence each: a file sent although its name is one a secret hides under, and that other entries stay behind unnamed."),
  writes: u({
    path: o().max(x),
    text: o().max(Mu)
  }).optional().describe("The manifest a yes writes into the folder first, if any."),
  sends: u({
    files: v(),
    bytes: v()
  }).describe("The whole count and size of what is sent."),
  files: T(u({
    path: o().max(x),
    bytes: v(),
    sha256: o().regex(pS),
    runs: M().describe("Whether it is sent as runnable.")
  })).max(W).describe("The files sent, in the order of their paths."),
  staying: v().describe("How many entries stay on the machine and are counted here."),
  stays: T(u({
    path: o().max(x),
    why: U([ "link", "hard-link", "ignored", "secret", "never", "generated", "special", "backslash" ]),
    words: o().max(x)
  })).max(W).describe("The entries that stay and are named, each with why."),
  list: u({
    sha256: o().regex(pS),
    path: o().max(x).optional()
  }).describe("The list, a line each, of every file sent and every entry that stays and is named, and a last line saying so where entries stay unnamed: its sha256, and the file that holds it."),
  unnamed: u({
    files: v(),
    stays: v()
  }).optional().describe("Present only when the lists are over the bound: how many files and entries they do not name. The list file names them.")
}));

var Vr = e => at(_(iI(e)));

var ya = e => Vr(xa().safeParse(e).data ?? e);

var ku = (e, r) => ({
  digest: Cr(e),
  question: ya(r.question),
  lines: Vr(r.shown),
  drafts: e.draft !== void 0,
  card: C(e),
  everything: kn(e)
});

var Jr = e => e.signal.aborted ? d("stopped", [ rs.nothing ]) : void 0;

import { join as eo } from "path";

var Nu = (e, r, s) => [ r, eo(r, "within") ].some(i => w0(eo(e[0] ?? "", i), s.permissions(), e.map(n => eo(n, i))));

var Du = (e, r) => ({
  ...e,
  plan: {
    ...e.plan,
    listing: {
      ...e.plan.listing,
      leftOut: r
    }
  },
  withheld: r.length < e.plan.listing.leftOut.length
});

function Fu(e, r, s) {
  let i = !mxe(s.permissions());
  return Du(e, e.plan.listing.leftOut.filter(n => i || !Nu(r, n.path, s)));
}

var Pa = e => ({
  folder: e.path,
  destination: e.destination ?? "organization",
  description: e.description,
  mode: e.replace === !0 ? "replace" : "new"
});

import { join as Uu } from "path";

var zu = (e, r) => my(qv, {
  file_path: e,
  content: ""
}, r).behavior === "deny" || w0(e, r);

var Cu = Object.freeze([ qt, ht ].map(e => Object.freeze({
  name: e,
  mcpInfo: void 0,
  familyParentToolName: void 0,
  aliasSkillToolNames: void 0,
  packagingAliasSkillToolNames: void 0
})));

function wa(e, r) {
  let s = r.permissions(), i = Qd(s).filter(n => !mFe.includes(n.source));
  return Cu.some(n => zo(s, n, i) !== null) || D(e).some(n => zu(Uu(n, mf), s));
}

function Hu(e, r, s) {
  return r.draft !== void 0 && wa(e, s) ? d("write-denied") : void 0;
}

async function Ku(e, r, s) {
  let {toolUseId: i} = r, n = da(e, s), f = i === void 0 || yu(s.permissions(), s.agentId);
  if (n !== void 0 || f) return Kr(n ?? "nobody-to-ask");
  let m = Jr(r) ?? await zl(_7n(), r.signal);
  if ("kind" in m) return ee(m, s);
  let h = await fa(e, s) ?? Jr(r);
  if (h !== void 0) return ee(h, s);
  let g = await B(nr(Pa(e), m));
  if ("kind" in g) return ee(g, s);
  let b = [ ju(le(), e.path), g.plan.root ], y = ta(b, g.plan.listing, s) ?? Hu(b, g, s);
  if (y !== void 0) return ee(y, s);
  let j = Fu(g, b, s), R = await Su(i, j, s), O = Jr(r);
  if (O !== void 0) return ee(O, s);
  let to = tu(j, R);
  return Iu(i, ku(j, to.updatedInput), s), to;
}

var qu = 1024;

var $u = x;

var Xu = 100;

var Gu = 2 * W + Xu;

var l4o = p(() => De({
  path: o().min(1).max(qu).describe("The plugin's folder on this machine: the one that holds .claude-plugin/plugin.json, or a mod's hooks/ where there is no manifest yet."),
  destination: A("organization").optional().describe("Where to publish. The one destination is the library of the organization the session is signed in to."),
  description: o().max(ct).optional().describe("What the plugin does, in a sentence: used only for a manifest written for a folder that has none."),
  replace: M().optional().describe("True only when the person said to replace the plugin of the same name that is already in their uploads on claude.ai."),
  shown: T(o().max($u)).max(Gu).optional().describe("Leave out. The tool fills it for the question the person answers: the organization, the folder, the steps, and the files sent."),
  question: xa().optional().describe("Leave out. The tool fills it with the same question as data, for a surface that draws its own: what a yes binds to, every file sent, and the entries that stay and are named.")
}));

var Qu = 4e3;

var Yu = e => ({
  state: e.kind,
  refusal: e.kind === "refused" ? e.refusal.kind : void 0,
  lines: Br(e)
});

var Vu = p(() => De({
  state: U([ "published", "in-review", "publishing", "on-shelf", "refused" ]),
  refusal: o().optional(),
  lines: T(o())
}));

function Zu(e) {
  let s = typeof e === "object" && e !== null && "path" in e ? e.path : void 0;
  return typeof s === "string" ? s : "";
}

var Ha = (e, r) => "plan" in e && Cr(e) === r.digest;

import { mkdir as Ju, writeFile as ed } from "fs/promises";

import { dirname as ja, join as rd } from "path";

async function od(e) {
  let r = rd(e.root, mf);
  return await Ju(ja(r), {
    recursive: !0
  }).catch(() => {}), await $B(ja(r)) ? ed(r, e.draft, {
    flag: "wx"
  }).then(() => !0, () => !1) : !1;
}

import { posix as sd } from "path";

var td = 420;

async function id(e, r) {
  let s = qx(mf);
  try {
    return await e.mkdirp(sd.dirname(s)), await e.create(s, Buffer.from(r.draft), td), 
    !0;
  } catch {
    return !1;
  } finally {
    await e.close();
  }
}

async function nd(e) {
  let {openTreeAnchor: r} = await import("./chunk-aed8th7n.js"), s = await r(await gis(), {
    gitRoot: e.root,
    realRoot: e.root
  }).catch(() => {});
  if (s === void 0) return !1;
  return !("unavailable" in s) ? id(s, e) : od(e);
}

async function ad(e, r) {
  let s = await jt(e.folder, e.description), i = await nr(e, r.organization), n = Ha(i, r) && s.kind === "needs-manifest";
  if (n && !r.drafts) return d("changed");
  let m = n && await nd(s);
  if (n && !m) return d("unwritten");
  let h = m ? await nr(e, r.organization) : i;
  return Ha(h, r) || "kind" in h ? h : d("changed");
}

async function pd(e, r, s) {
  let i = await Qe(e, r);
  return i !== void 0 && at(i) === s ? i : void 0;
}

var fd = 65535;

var md = 16;

var ld = 3;

var ud = e => ({
  os: ld,
  attrs: (e & fd) << md
});

function dd(e, r) {
  return e !== void 0 && r !== void 0 ? [ [ e.path, [ r, ud(e.mode) ] ] ] : [];
}

var cd = 6;

var hd = "1980-01-01T00:00:00";

async function gd(e) {
  let {zipSync: r} = await import("./chunk-5qmqskvk.js"), s = await vt(e.listing.files, n => pd(e.root, n, e.hashes[n.path]), dd);
  return "missed" in s ? s : r(Object.fromEntries(s), {
    level: cd,
    mtime: hd
  });
}

async function xd(e) {
  let r = await qs(e);
  if (!Array.isArray(r)) return L(e, r, "nothing");
  let s = await El(e);
  if (typeof s !== "string") return L(e, s, "nothing");
  let i = await Tl(s, e);
  return "kind" in i ? L(e, i, "uploading") : nl(e, await Hi(e, i), r);
}

async function yd(e, r) {
  let s = await B(gd(e));
  if ("kind" in s) return s;
  if ("missed" in s) return Ye(s);
  return s.length > er ? d("too-large") : xd(hl(s, e, r)).catch(n => d("failed", [ l(n) ]));
}

async function bd(e, r, s) {
  let i = await ad(e, r);
  return "kind" in i ? i : yd(i.plan, {
    organization: r.organization,
    mode: e.mode,
    signal: s
  });
}

async function Rd(e, r) {
  let {refusal: s, organization: i, shown: n} = r;
  if (s !== void 0) return d(s);
  if (i === void 0) return d(Vi());
  return n !== void 0 ? bd(Pa(e), {
    digest: n,
    drafts: r.drafts,
    organization: i
  }, r.signal) : d("nobody-to-ask");
}

function Ad(e, r) {
  let s = r.question !== void 0 && ya(r.question) !== e?.question, i = r.shown !== void 0 && Vr(r.shown) !== e?.lines;
  return e !== void 0 && (s || i) ? "other-question" : void 0;
}

function Sd(e, r) {
  if (!(e.kind === "refused" && e.refusal.kind === "stopped")) return;
  t(`plugin publish: stopped: ${e.refusal.details.join(" ")}`), r.appendSystemMessage?.(Kv(Br(e).join(`\n`), "warning"));
}

import { realpath as Od } from "fs/promises";

import { resolve as Pd } from "path";

async function _d(e, r, s) {
  let i = Pd(le(), e.path);
  return r && wa([ i, await Od(i).catch(() => i) ], s) ? "write-denied" : void 0;
}

async function vd(e, r, s) {
  let i = XGr.of(s.session), n = i.get(r.toolUseId ?? ""), f = n?.digest;
  i.delete(r.toolUseId ?? "");
  let m = n?.drafts === !0, h = da(e, s) ?? _7n() ?? Ad(n, e) ?? (await fa(e, s))?.refusal.kind ?? await _d(e, m, s), g = await Yi(h), b = await Rd(e, {
    shown: f,
    drafts: m,
    organization: g,
    refusal: h,
    signal: r.signal
  }), y = b.kind === "refused" ? Jn(b, s) : b;
  return Sd(y, s), await (y.kind === "refused" ? Bt("plugin_publish", y.refusal.kind) : Wr("plugin_publish")), 
  y;
}

var ZQn = Jt({
  name: Vbe,
  searchHint: "publish or share a plugin or mod with the team or organization library",
  shouldDefer: !0,
  backgrounding: "never",
  maxResultSizeChars: Qu,
  async description() {
    return Eys;
  },
  async prompt() {
    return kys;
  },
  get inputSchema() {
    return l4o();
  },
  get outputSchema() {
    return Vu();
  },
  userFacingName() {
    return "Publish plugin";
  },
  isEnabled() {
    return y7n();
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !1;
  },
  requiresUserInteraction() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return _(e);
  },
  getToolUseSummary() {
    return "Publish a plugin to your organization's library on claude.ai";
  },
  getPath(e) {
    return Zu(e);
  },
  renderToolUseMessage(e) {
    return e.path ?? "";
  },
  create(e) {
    let r = {
      ...e,
      tool: ZQn
    };
    return {
      permissionCheckFailureDecision() {
        return Kr("failed");
      },
      async checkPermissions(s, i) {
        return Ku(s, i, r);
      },
      async call(s, i) {
        return {
          data: Yu(await vd(s, i, r))
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return {
      type: "tool_result",
      tool_use_id: r,
      ...e.state === "refused" && {
        is_error: !0
      },
      content: _(e)
    };
  }
});

export { o4o, YGr, QQn, s4o, i4o, a4o, l4o, XGr, JGr, rzt, ZQn };
