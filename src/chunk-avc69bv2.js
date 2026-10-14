// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { m } from "./chunk-3ykz5st8.js";

import { _ } from "./chunk-kawq2919.js";

import { wa } from "./chunk-vps0k559.js";

import { le } from "./chunk-cqgvwwgb.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { kk } from "./chunk-q6wab2jw.js";

import { bn } from "./chunk-1z2heevg.js";

import { Cd } from "./chunk-yxennhe9.js";

import { fn, Cm, hIe, He, Yt, gve, Ya, Hn, KO, s$, Yxr, _l, ij, K_, Yon } from "./chunk-f1zpf9me.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { Lm } from "./chunk-69rr80fg.js";

import { WY, T0, Tyo, eMt, pen, Ayo } from "./chunk-6sf4kq52.js";

import { vc } from "./chunk-btyj9pkf.js";

import { yse, AMt, Wg } from "./chunk-ann91fyn.js";

import { eu } from "./chunk-z655gvmz.js";

import { yf, pv } from "./chunk-t156fjxt.js";

import { GE } from "./chunk-exeqjnzg.js";

import { wt, gMt, KY, zu, M6e, KT, vd } from "./chunk-hk8p0fqv.js";

import { kg, Qb, dh, de } from "./chunk-5ydr99q3.js";

import { rqt, r7o } from "./chunk-zrv408vj.js";

import { Z$, lqt } from "./chunk-cm3ke8xm.js";

import { $ne, lw, oAe, h4, _nt } from "./chunk-7x8whmnx.js";

import { Y8, x0 } from "./chunk-bdevabaf.js";

import { evt, l4, SB, V6, Y$, kne, Op, jE } from "./chunk-rvrh1zgk.js";

import { bB, Jwt } from "./chunk-g7amzwj1.js";

import { ND, ITe } from "./chunk-0b7g321z.js";

import { G5r, WE, Z2e } from "./chunk-a99879w1.js";

import { AEt, O8r, M8r, H8r, Fk, vqt, Eqt } from "./chunk-dbsb12yc.js";

import { KKt, ZC, mm, Wle, rye } from "./chunk-585b9gv4.js";

import { mJ } from "./chunk-3qv4cgza.js";

import { YW, eH } from "./chunk-de9nc4rq.js";

import { cr } from "./chunk-2kgjyw8x.js";

import { L } from "./chunk-vh1p9t2h.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { join as E } from "path";

var w = null;

function lqo(e, t) {
  return e.getAppState().frameUrls[t];
}

function Fbt(e, t) {
  return e ? {
    type: "safetyCheck",
    reason: t,
    classifierApprovable: !1
  } : {
    type: "other",
    reason: t
  };
}

function yg(e, t) {
  let n = ij(wt(e.slug)?.title || eH(t.getAppState().frameUrls).find(([, r]) => r.title && Ya(r.url) === e.slug)?.[1].title);
  return {
    url: Hn(e),
    ...n && {
      title: n
    }
  };
}

function dqo(e, t, n) {
  let r = `${YW}${t.slug}`, i = r, a = !1, s = !1;
  return e.setAppState(o => {
    let [l, u] = Object.entries(o.frameUrls).find(([, d]) => Ya(d.url) === t.slug) ?? [];
    if (a = l !== void 0 && u?.dismissed !== !0, i = l !== void 0 && l !== r ? l : r, 
    s = o.frameOpenFailedPath === i, l !== void 0 && u?.dismissed === !0) {
      let {dismissed: d, ...y} = u;
      return {
        ...o,
        frameUrls: {
          ...o.frameUrls,
          [l]: y
        }
      };
    }
    if (a && o.frameUrls[r] === void 0) return o;
    let {[r]: p, ...f} = o.frameUrls;
    return {
      ...o,
      frameUrls: {
        ...f,
        [r]: {
          url: Hn(t),
          updatedAt: Date.now(),
          ...(n ?? p?.title) !== void 0 && {
            title: n ?? p?.title
          }
        }
      }
    };
  }), {
    rowKey: i,
    alreadyShown: a,
    lastOpenFailed: s
  };
}

function Kyn(e, t, n) {
  e.setAppState(r => {
    if (n) return r.frameOpenFailedPath === t ? {
      ...r,
      frameOpenFailedPath: null
    } : r;
    if (r.frameOpenFailedPath === t) return r;
    return {
      ...r,
      frameOpenFailedPath: t,
      frameOpenFailedSeen: !1
    };
  });
}

function LZe(e, t) {
  return vd(e) && SB(e) && !Y$(e) ? " (yours; a co-writer has also published to it)" : t === "files" && vd(e) && V6(e) ? " (yours; its files come from an Artifact type its publisher wrote)" : zu(e);
}

function hQn(e, t) {
  return vd(e) && SB(e) && !Y$(e) ? " [ownership: yours, co-written: a non-owner has also published to it]" : t === "files" && vd(e) && V6(e) ? Yon : `${KT(e)}${KY(e)}`;
}

function P(e) {
  return _([ e.path, e.from.slug, e.from.path, e.from.ver ?? "" ]);
}

function Gzr(e) {
  return D(e.map(P)).sort().join(`\n`);
}

function yQn(e, t) {
  return (e ?? "") === Gzr(t);
}

function NZe(e, t) {
  let {mode: n, modeBeforeRewrite: r} = de(e);
  if (n === "auto" || r === "auto") return !1;
  return Y8(e.getAppState(), n === "plan" ? "artifactAssetUploadHumanConsentSlugs" : "artifactAssetUploadConsentSlugs", t);
}

function _Qn(e, t, n, r, i, a, s = !1) {
  let o = i && !Y$(wt(n.slug));
  if (bB(t) && (o || s) && r && !l4(e, t) && !ITe(t, n, vd(wt(n.slug))) && (kg(t) || Qb(t) || ND(t))) throw m("artifact_cowritten_consent", "refused_unasked", {
    assets: a === "assets",
    ...!o && {
      from_type: !0
    }
  }), new He(o ? `a co-writer has published to this artifact, so its ${a} are someone else's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)` : `this artifact was created from an Artifact type, so its ${a} are the type publisher's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`, `${a === "files" ? "file" : "asset"}_${o ? "cowritten" : "from_type"}_unasked`);
}

function SWt(e, t, n) {
  return m("artifact_outside_org_consent", "refused_unasked", {
    assets: t === "asset_copy"
  }), new He(Jwt(e, !0, t === "file_copy" ? {
    retryUrl: n
  } : void 0), `${t}_outside_org_unasked`);
}

function qyn(e, t, n) {
  if (e === yse) T(t, n);
}

function T(e, t) {
  throw m("artifact_outside_org_consent", "refused_unasked", {
    assets: t !== "files"
  }), new He(Jwt(e), `${t === "files" ? "file" : "asset"}_outside_org_unasked`);
}

function _Ge(e) {
  let {assetId: t, outDir: n} = kne(e);
  if (t === void 0 || !Cm.test(t)) return;
  let r, i = !1;
  try {
    if (n === void 0 || n === "") {
      let {url: a} = e, s = typeof a === "string" ? Yt(a) : null, o = s !== null ? mJ(s.slug) : null;
      i = o !== null, r = o ?? le();
    } else r = ot(n);
  } catch {
    return;
  }
  return {
    stem: E(r, t),
    ...i && {
      defaultDir: !0
    }
  };
}

function DA(e, t = "", n = "url") {
  if (gve(e) === void 0) return;
  let r = Yt(e), i = r !== null ? ` (${Hn(r)})` : "";
  return {
    result: !1,
    message: `\`${n}\` names a path inside the artifact \u2014 pass the artifact's own URL${i} as \`${n}\`${t}.`,
    errorCode: 4
  };
}

function g2(e) {
  let t = l => {
    let u = e[l];
    return typeof u === "string" ? u : void 0;
  }, n = e.data, r = n !== null && typeof n === "object" && !Array.isArray(n) ? n : void 0, {replace_all: i, if_version: a, query: s} = e, o = s !== null && typeof s === "object" && !Array.isArray(s) ? s : void 0;
  return {
    dbOp: t("db_op"),
    collection: t("collection"),
    docId: t("doc_id"),
    data: r,
    query: o,
    outDir: t("out_dir"),
    filePath: t("file_path"),
    strReplace: {
      field: t("field"),
      oldStr: t("old_str"),
      newStr: t("new_str"),
      replaceAll: i === void 0 ? void 0 : kk(i) === !0
    },
    ifVersion: bQn(a) ? a : void 0
  };
}

function bQn(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 1;
}

var Vzr = [ "set", "update", lw, "delete" ];

function Kq(e) {
  let t = Kzr(e);
  return t === yf ? [] : t;
}

function Kzr(e) {
  let t = pv(e.writes);
  if (t === void 0 || t === yf) return t ?? [];
  return t.map(n => {
    let r = f => n !== null && typeof n === "object" ? n[f] : void 0, i = {
      db_op: r("op"),
      collection: r("collection"),
      doc_id: r("doc_id"),
      data: r("data"),
      file_path: r("file_path"),
      if_version: r("if_version")
    }, {dbOp: a, collection: s, docId: o, data: l, filePath: u, ifVersion: p} = g2(i);
    return {
      op: a,
      collection: s,
      docId: o,
      data: l,
      filePath: u,
      ifVersion: p,
      ifVersionGiven: i.if_version !== void 0
    };
  });
}

function x(e) {
  return e.db_op === Fk ? Kq(e).map(t => t.ifVersion) : [];
}

function qzr(e) {
  return g2(e).ifVersion !== void 0 || x(e).some(t => t !== void 0);
}

function SQn(e) {
  return typeof e === "object" && e !== null && e.action === "write_db" && e.db_op === Fk;
}

function wWt(e) {
  return Yxr(_l(Wg(e.ruleValue.ruleContent ?? "", {
    max: 1024
  }).replace(K_, " ")));
}

function Gv(e) {
  let t = e?.type_url;
  return typeof t === "string" ? t : void 0;
}

function $Ze(e) {
  let t = e?.type;
  return typeof t === "string" ? t : void 0;
}

function wQn(e) {
  return `type_url: not an Artifact type's link: ${e} \u2014 pass a ${hIe()} link from a list_types result`;
}

function vQn(e) {
  return e.auto_open === "after_first_write" ? "after_first_write" : "at_create";
}

function zke(e) {
  let {outDir: t, collection: n} = g2(e);
  if (t === void 0) return {
    kind: "inline"
  };
  let r;
  try {
    r = ot(t === "" ? le() : t);
  } catch {
    return {
      kind: "unresolvable"
    };
  }
  let i = n !== void 0 && $ne.test(n) ? E(r, ...n.split("/").map(Yzr)) : r;
  return {
    kind: "dir",
    outDir: r,
    dir: i
  };
}

function Yzr(e) {
  let t = e.replaceAll("~", "@"), n = O();
  return n === "windows" || n === "wsl" ? t.replaceAll(":", "%3A") : t;
}

function Xzr(e, t) {
  return `${e}\0${bn(t)}`;
}

var cqo = {
  changed: "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the write so it is checked again",
  via_link: "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 pass the resolved path, or copy the file under the working directory first",
  hard_link: "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and pass the copy",
  read_denied: "reading where file_path resolves is blocked by a Read permission rule \u2014 the write was not attempted",
  no_identity: Eqt,
  not_a_file: vqt,
  size: `file_path is empty or larger than ${_nt} bytes \u2014 write_db reads at most that much JSON, and the document must serialize to ${h4} bytes or fewer`
};

function FZe(e) {
  return typeof e === "object" && e !== null && e.action === "read_db" && typeof e.out_dir === "string";
}

function Ubt(e) {
  if (typeof e !== "object" || e === null || e.action !== "write_db") return !1;
  if (typeof e.file_path === "string") return !0;
  return Kq(e).some(t => t.filePath !== void 0);
}

var Jzr = 3e3;

function EQn(e) {
  try {
    return Buffer.byteLength(_(e), "utf8");
  } catch {
    return null;
  }
}

var F = 1024, uqo = 49152, I = /data:[a-z0-9.+-]+\/[a-z0-9.+-]+(?:;[a-z0-9=.+-]+)*;base64,[A-Za-z0-9+/_-]{1000,}/gi, R = /^[A-Za-z0-9+/_-]+$/, A = /^[A-Za-z0-9+/_-]+={0,2}$/, v = new Set([ 60, 64, 76 ]);

function N(e) {
  let t = e.trim(), n = t.indexOf(`\n`), r = t.slice(n + 1, n + 513);
  if (!/[A-Z]/.test(r) || !/[a-z]/.test(r) || !/[0-9]/.test(r)) return !1;
  if (n === -1) return A.test(t);
  let i = t.slice(0, n).replace(/\r$/, "");
  if (!R.test(i)) return !1;
  let a = t.slice(n + 1).replaceAll(`\r\n`, `\n`).split(`\n`), s = a.pop() ?? "", o = a[0]?.length ?? i.length;
  return v.has(o) && i.length <= o && s.length <= o && A.test(s) && a.every(l => l.length === o && R.test(l));
}

function U(e) {
  if (N(e)) return e.length;
  let t = 0;
  for (let n of e.matchAll(I)) t += n[0].length;
  return t;
}

function pqo(e) {
  let t = 0, n = 0, r = [ ...e ];
  while (r.length > 0) {
    let i = r.pop();
    if (typeof i === "string") {
      let a = i.length >= F ? U(i) : 0;
      if (a > 0) t++, n += a;
    } else if (typeof i === "object" && i !== null) for (let a of Object.values(i)) r.push(a);
  }
  return {
    strings: t,
    chars: n
  };
}

function fqo(e, t, n, r, i, a) {
  let s = Z$(e, n), o = i.get(e), l = `${o ?? "viewer"}${!s && a.has(e) ? ", outside your organization" : ""} ${e.slice(0, 8)}`, u = t === "assistant" ? s ? "Claude (via the user)" : `Claude (via ${l})` : t !== void 0 && t !== "" ? `viewer ${e.slice(0, 8)} (unverified lane)` : s ? o !== void 0 ? `the user (${o})` : "the user" : l;
  return r ? `${u}, posted by the artifact` : u;
}

var mqo = 5, Qzr = 10;

function kQn(e, t) {
  let n = e.length > t ? ` and ${e.length - t} more` : "";
  return `${e.slice(0, t).join(", ")}${n}`;
}

var h = e => e.outsideAsk || e.flaggedOutside;

function Yyn(e) {
  let [t] = e;
  if (e.length === 1 && t !== void 0) {
    let s = [];
    if (h(t)) s.push(t.resolvesOutside ? "reaches, through a symbolic link, a file outside the folders this session can read" : "is outside the folders this session can read");
    if (t.linkNote !== "" && !h(t)) s.push("is a hard link to a file that may also live elsewhere on this machine");
    return s.length === 0 ? "" : ` The local file "${Cd(t.askPath, 256)}" ${s.join(" and ")}.`;
  }
  let n = s => ` (${kQn(s.map(o => `"${Cd(o.askPath, 256)}"`), Qzr)})`, r = [ {
    group: e.filter(s => h(s) && !s.resolvesOutside),
    one: "is outside the folders this session can read",
    many: "are outside the folders this session can read"
  }, {
    group: e.filter(s => s.resolvesOutside),
    one: "reaches, through a symbolic link, a file outside the folders this session can read",
    many: "reach, through symbolic links, files outside the folders this session can read"
  }, {
    group: e.filter(s => s.linkNote !== "" && !h(s)),
    one: "is a hard link to a file that may also live elsewhere on this machine",
    many: "are hard links to files that may also live elsewhere on this machine"
  } ].filter(s => s.group.length > 0), [i] = r;
  if (i === void 0) return "";
  if (r.length === 1 && i.group.length === e.length) return ` ${e.length === 2 ? "Both" : `All ${e.length}`} local files being copied ${i.many}${n(i.group)}.`;
  let a = r.map(s => `${s.group.length} ${s.group.length === 1 ? s.one : s.many}${n(s.group)}`);
  return ` Of the ${e.length} local files being copied, ${a.join("; ")}.`;
}

function lle(e) {
  if (e === void 0) return "";
  try {
    let t = _(e);
    return `${Wg(t, {
      max: 300
    }).replace(K_, " ")}${Xyn(t, 300)}`;
  } catch {
    return "(unserializable payload)";
  }
}

function Xyn(e, t) {
  return Array.from(e.slice(0, 2 * t + 2)).length <= t ? "" : `\u2026 [truncated \u2014 ${Buffer.byteLength(e, "utf8")} bytes total]`;
}

function gqo({field: e, oldStr: t, newStr: n, replaceAll: r}) {
  let i = (a, s) => {
    if (a === void 0) return "(missing)";
    let o = _(a);
    return `${Wg(o, {
      max: s
    }).replace(K_, " ").replace(KO, "'").replace(s$, "'")}${Xyn(o, s)}`;
  };
  return `field ${i(e, oAe)}: replace ${r === !0 ? "every " : ""}${i(t, 200)} with ${i(n, 200)}`;
}

function Zzr(e) {
  return e !== null && typeof e === "object" && e.live === !1 && Object.keys(e).length === 1;
}

var k = new Set([ ...eMt, ...pen ]);

function g(e, t) {
  if (typeof t === "string") return k.has(T0(t));
  return typeof e === "string" && k.has(WY(e) ?? "");
}

function eGr(e) {
  if (typeof e !== "object" || e === null) return 0;
  let {file_path: t, files: n} = e, r = g(t) ? 1 : 0, i = pv(n);
  if (i === yf) return yf;
  if (i !== void 0) for (let a of i) r += g(typeof a === "string" ? a : a?.path, a?.contentType) ? 1 : 0; else if (n !== null && typeof n === "object") for (let [a, s] of Object.entries(n)) {
    if (s === null || Zzr(s)) continue;
    let o = typeof s === "object" && typeof s.artifact === "string" ? s.path : void 0;
    r += (o !== void 0 ? g(a) || g(o) : g(a, s?.contentType)) ? 1 : 0;
  }
  return r;
}

var j = new Set([ ...Ayo, ...Tyo ]);

function c(e, t, n) {
  if (typeof e !== "string") return !1;
  let r = WY(e);
  if (r === void 0 || !n.has(T0(r))) return !1;
  return t === void 0 || typeof t === "string" && n.has(T0(t));
}

function B(e, t, n) {
  return c(e, void 0, n) && c(t, void 0, n);
}

function S(e) {
  return e.live !== void 0 || e.reseed !== void 0;
}

function hqo(e) {
  return e !== null && typeof e === "object" && Object.hasOwn(e, "mcp");
}

function tGr(e, t) {
  if (typeof e !== "object" || e === null) return !1;
  let n = t.documents ? j : Ayo, {file_path: r, files: i} = e;
  if (S(e) || !c(r, void 0, n)) return !1;
  if (i === void 0) return !0;
  let a = pv(i);
  if (a === yf) return !1;
  if (a !== void 0) return a.every(s => typeof s === "string" ? c(s, void 0, n) : s !== null && typeof s === "object" && !S(s) && c(s.path, s.contentType, n));
  if (i === null || typeof i !== "object") return !1;
  return Object.entries(i).every(([s, o]) => {
    if (o === null) return !0;
    if (typeof o === "string") return c(s, void 0, n);
    if (typeof o !== "object" || Array.isArray(o)) return !1;
    if (S(o)) return !1;
    let l = o;
    if (typeof l.from === "string" && l.artifact !== void 0) return !1;
    if (typeof l.artifact === "string") return B(s, o.path, n);
    return c(s, o.contentType, n);
  });
}

function nGr() {
  return rye(ZC().shape.action, "read_file");
}

function rGr() {
  return rye(ZC().shape.action, "delete");
}

function UZe() {
  return rye(ZC().shape.action, "open");
}

function Bbt() {
  return rye(ZC().shape.action, "pin");
}

function vWt() {
  return rye(ZC().shape.action, "share");
}

function oGr() {
  return "version" in ZC().shape;
}

function yqo(e, t) {
  if (e?.title === void 0) return;
  if (t === void 0) return e.title;
  let n = Ya(t);
  return n !== null && Ya(e.url) === n ? e.title : void 0;
}

var _qo = new Set([ ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp" ]);

function bGe(e) {
  if (de(e).mode === "plan") return "plan";
  if (ND(e)) return "cowork_no_surface";
  if (dh(e)) return "no_surface";
  return null;
}

function C(e, t, n) {
  let r = n ? "Copying from this artifact is" : e.ruleValue.toolName === cr ? "Artifact reads are" : "Reading this artifact is", i = t === "" ? "" : ` \u2014 ${t}`;
  return `${r} blocked by ${Z2e(e)}${i}`;
}

function qC(e, t = "", n = !1) {
  return {
    behavior: "deny",
    message: `${C(e, t, n)}.`,
    decisionReason: {
      type: "rule",
      rule: e
    }
  };
}

function h2(e, t, n, r, i) {
  let a = WE(de(e), t, n, "deny", i);
  return a === null ? void 0 : new He(C(a, r, i.copySource === !0), "read_denied");
}

function fJ(e) {
  return e.ruleValue.toolName === cr ? ` (your ${cr} ask rule covers artifact reads)` : ` (your ${e.ruleValue.toolName} ask rule covers this url)`;
}

function EWt(e) {
  if (!Wle() || e === null || e === void 0) return !1;
  if (e.action !== void 0 && e.action !== "publish") return !1;
  let t = AMt(e);
  if (t !== void 0) return L(t) && t.room !== void 0;
  let n = Gv(e);
  if (n !== void 0) {
    let a = Yt(n);
    return a !== null && evt(a.slug);
  }
  let r = typeof e.url === "string" ? Yt(e.url) : null, i;
  try {
    i = r !== null ? wt(r.slug) : typeof e.file_path === "string" ? gMt(ot(e.file_path)) : void 0;
  } catch {
    i = void 0;
  }
  return i?.capabilities?.room !== void 0;
}

var TQn = {
  threadIds: new Set,
  commentIds: new Set
};

function sGr(e) {
  return {
    url: Lm(e.slug),
    release: e.current
  };
}

function CM(e) {
  let t = typeof e === "string" ? Yt(e) : null;
  if (!t) throw new He(`not an artifact URL: ${String(e)}`, "invalid_url");
  return t;
}

function Jyn(e, t, n, r) {
  if (typeof n !== "object" || n === null || !SQn(n)) return;
  let {writes: i, ...a} = n;
  for (let [s, o] of Kq(n).entries()) {
    let l = G5r(t, e, {
      ...a,
      db_op: o.op,
      collection: o.collection,
      doc_id: o.docId,
      ...o.data !== void 0 && {
        data: o.data
      },
      ...o.filePath !== void 0 && {
        file_path: o.filePath
      }
    }, r);
    if (l) return {
      index: s,
      rule: l
    };
  }
  return;
}

function AQn(e, t, n, r) {
  if (typeof n !== "object" || n === null || n.db_op !== lw) return;
  return G5r(t, e, {
    ...n,
    db_op: "update"
  }, r) ?? void 0;
}

function xD(e) {
  return e.ruleValue.ruleContent === void 0 ? e.ruleValue.toolName : `${e.ruleValue.toolName}(${wWt(e)})`;
}

function Qyn(e, t, n) {
  let r = Jyn(e, t, n, "deny");
  return r === void 0 ? void 0 : {
    behavior: "deny",
    message: `Permission to use ${fn} has been denied by your rule ${xD(r.rule)} (writes[${r.index}] of this batch matches it), so nothing in the batch was written.`,
    decisionReason: {
      type: "rule",
      rule: r.rule
    }
  };
}

function bqo(e, t, n) {
  let r = AQn(e, t, n, "deny");
  return r === void 0 ? void 0 : {
    behavior: "deny",
    message: `Permission to use ${fn} has been denied by your rule ${xD(r)} (a str_replace is an update of one field), so nothing was written.`,
    decisionReason: {
      type: "rule",
      rule: r
    }
  };
}

function Sqo(e, t, n, r) {
  let i = Jyn(e, n, r, "ask");
  if (i === void 0 || typeof r !== "object" || r === null) return;
  let a = Reflect.get(r, "url"), s = typeof a === "string" ? Yt(a) : null;
  return {
    behavior: "ask",
    message: `Claude wants to write a batch to this artifact's database, and writes[${i.index}] matches your ask rule ${xD(i.rule)} \u2014 the full permission check could not complete, so approving covers only this call.`,
    updatedInput: {
      ...r,
      [Op]: !1,
      [jE]: s === null ? null : yg(s, t)
    },
    suppressAlwaysAllowRule: !0,
    decisionReason: {
      type: "rule",
      rule: i.rule
    }
  };
}

function Mk(e, t) {
  if (!M6e(wt(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${Hn(e)}: ${AEt}. ${t}; tell the user.`,
    decisionReason: {
      type: "other",
      reason: O8r
    }
  };
}

function iGr(e, t) {
  let n = Mk(e, t);
  if (n !== null) return n;
  if (!x0(wt(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${Hn(e)}: ${M8r}. ${t}; tell the user.`,
    decisionReason: {
      type: "other",
      reason: H8r
    }
  };
}

function kWt(e, t, n) {
  let r = e === "watch" && mm();
  if (r && t.path !== void 0 && w?.livePathFrom(t) === void 0) return {
    result: !1,
    message: w?.LIVE_PATH_INVALID ?? "invalid path",
    errorCode: 8
  };
  let i = Object.keys(t).filter(o => o !== "action" && o !== "url" && !(e === "read_page_data" && o === "schema") && !(r && o === "path") && t[o] !== void 0);
  if (i.length > 0) return {
    result: !1,
    message: `action "${e}" takes only ${e === "read_page_data" ? "`url` and `schema`" : r ? "`url` (and `path`)" : "`url`"} \u2014 remove ${i.join(", ")}.`,
    errorCode: 8
  };
  if (e === "read_page_data") {
    let o = t.schema, l = ee().frozenReadPageDataSchemaNames;
    if (o === void 0) return {
      result: !1,
      message: `action "read_page_data" requires \`schema\` \u2014 the registered interaction schema to validate against${l?.size ? ` (e.g. "${[ ...l ][0]}")` : ""}.`,
      errorCode: 7
    };
    if (!KKt(o)) return {
      result: !1,
      message: `interaction schema "${Wg(o)}" is not available in this session. Available schemas: ${[ ...l ?? [] ].join(", ") || "(none)"}.`,
      errorCode: 8
    };
    let u = rqt(o);
    if (!u.ok) return {
      result: !1,
      message: u.reason === "unknown" ? `unknown interaction schema "${o}" \u2014 registered schemas: ${r7o().join(", ") || "(none)"}.` : `interaction schema "${o}" failed validation in this build \u2014 report this; nothing can be read against it.`,
      errorCode: 8
    };
  }
  if (n === void 0) {
    if (e === "status") return {
      result: !0
    };
    if (e === "verify") return {
      result: !0
    };
    return {
      result: !1,
      message: `action "${e}" requires \`url\` \u2014 the artifact's claude.ai URL (find it with action: "list" or action: "status").`,
      errorCode: 7
    };
  }
  let a = DA(n);
  if (a) return a;
  let s = GE(n);
  if (!s.ok) return {
    result: !1,
    message: s.message,
    errorCode: s.errorCode
  };
  return {
    result: !0
  };
}

var BZe = 64, M = 15e3, H = 65536;

async function wqo(e, t, n, r) {
  let i = ee(), a = i.accountEpoch, s = i.profileIdsForgets.get(e) ?? 0, o;
  try {
    o = await vc.postRelayBound(`/api/frame/user/profiles/${encodeURIComponent(e)}`, {
      ids: t
    }, {
      refreshOAuth: !0,
      credentials: r,
      headers: eu(),
      timeout: M,
      maxContentLength: H,
      signal: n
    });
  } catch (d) {
    if (wa(d)) throw d;
    return {
      ok: !1
    };
  }
  if (!o.ok) return {
    ok: !1
  };
  let l = () => ee() === i && i.accountEpoch === a && (i.profileIdsForgets.get(e) ?? 0) === s;
  if (!o.fromFrame || o.status < 200 || o.status >= 300) {
    if (o.fromFrame && l() && o.status === 403 && L(o.data) && o.data.error === "not_declared") i.profileIdsServed.set(e, !1);
    return {
      ok: !1,
      status: o.status
    };
  }
  let u = L(o.data) ? o.data.profiles : void 0;
  if (!L(u)) return {
    ok: !1,
    status: o.status
  };
  let p = new Set(t), f = {};
  for (let [d, y] of Object.entries(u)) {
    if (!p.has(d)) continue;
    let b = aGr(y);
    if (b.name !== void 0 || b.guest === !0) f[d] = b;
  }
  if (l()) i.profileIdsServed.set(e, !0), W(e, {
    ...Object.fromEntries(t.map(d => [ d, {} ])),
    ...f
  });
  return {
    ok: !0,
    profiles: f
  };
}

function aGr(e) {
  if (!L(e)) return {};
  let t = lqt(e.name);
  return {
    ...t !== void 0 && {
      name: t
    },
    ...e.guest === !0 && {
      guest: !0
    }
  };
}

var V = 512;

function G(e, t) {
  return `${e}\0${t}`;
}

function W(e, t) {
  let n = ee().profileNames;
  for (let [r, i] of Object.entries(t)) {
    let a = G(e, r);
    n.delete(a), n.set(a, i.name === void 0 ? {
      ...i,
      at: Date.now()
    } : i);
  }
  while (n.size > V) {
    let r = n.keys().next().value;
    if (r === void 0) break;
    n.delete(r);
  }
}

export { lqo, Fbt, yg, dqo, Kyn, LZe, hQn, Gzr, yQn, NZe, _Qn, SWt, qyn, _Ge, DA, g2, bQn, Vzr, Kq, Kzr, qzr, SQn, wWt, Gv, $Ze, wQn, vQn, zke, Yzr, Xzr, cqo, FZe, Ubt, Jzr, EQn, uqo, pqo, fqo, mqo, Qzr, kQn, Yyn, lle, Xyn, gqo, Zzr, eGr, hqo, tGr, nGr, rGr, UZe, Bbt, vWt, oGr, yqo, _qo, bGe, qC, h2, fJ, EWt, TQn, sGr, CM, Jyn, AQn, xD, Qyn, bqo, Sqo, Mk, iGr, kWt, BZe, wqo, aGr };
