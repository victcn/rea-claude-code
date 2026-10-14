// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { MV } from "./chunk-nmecgx1t.js";

import { q, GDo } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { x, l, E, W } from "./chunk-b0z4bv3v.js";

import { Eh, Cs } from "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { _, Y, Nj, se, t } from "./chunk-kawq2919.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { jMr, FU, DC, ls, OG } from "./chunk-30n0xq4e.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { t$t, CMr, Og, Vqn, RMr, tEe, _$, bA } from "./chunk-r276nwd3.js";

import { p } from "./chunk-jkzenvsk.js";

import { yXt } from "./chunk-bzekf4tc.js";

import { cS } from "./chunk-9yajep3y.js";

import { gn } from "./chunk-yxennhe9.js";

import { JXe } from "./chunk-5brm0azz.js";

import { p_ } from "./chunk-nnrb0acr.js";

import { Gie, kf, ZH } from "./chunk-q6wab2jw.js";

import { smt, uG, hn } from "./chunk-dd98x6x7.js";

import { bEs, SEs } from "./chunk-9tdwgnpn.js";

import { Pa, io, xue, cdt, QIt, wgo } from "./chunk-4v78v8fd.js";

import { ww } from "./chunk-d7768anc.js";

import { mao } from "./chunk-thbe2a3e.js";

import { o, oe, T, u, ue, U, A } from "./chunk-cvcg6n1z.js";

import { xj, rae, Fee, Q_ } from "./chunk-dgqa0xqf.js";

import { at } from "./chunk-0bq6eb61.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N } from "./chunk-hmqkrrtz.js";

var FCt = 3, Kfr = 5e3;

function fMn(e, n) {
  if (n === 0) return e;
  return e.map(r => ({
    ...r,
    oldStart: r.oldStart + n,
    newStart: r.newStart + n
  }));
}

var fe = "<<:AMPERSAND_TOKEN:>>", pe = "<<:DOLLAR_TOKEN:>>";

function G(e) {
  return e.replaceAll("&", fe).replaceAll("$", pe);
}

function he(e) {
  return e.replaceAll(fe, "&").replaceAll(pe, "$");
}

function mMn(e, n, r, s) {
  let a = 0, h = 0;
  if (e.length === 0 && (r || s)) a = r ? Nt(r, `\n`) + 1 : 0, h = s ? Nt(s, `\n`) + 1 : 0; else a = e.reduce((f, S) => f + N(S.lines, w => w.startsWith("+")), 0), 
  h = e.reduce((f, S) => f + N(S.lines, w => w.startsWith("-")), 0);
  return GDo(a, h), mao()?.add(a, {
    type: "added",
    model: yXt(n)
  }), mao()?.add(h, {
    type: "removed",
    model: yXt(n)
  }), {
    lines_added: a,
    lines_removed: h
  };
}

function UCt(...e) {
  i("tengu_file_changed", mMn(...e));
}

function _ce({filePath: e, oldContent: n, newContent: r, ignoreWhitespace: s = !1, singleHunk: a = !1, convertTabs: h = !1, rawText: f = !1}) {
  let S = f ? y => y : h ? y => G(_$(y)) : G, w = MV(e, e, S(n), S(r), void 0, void 0, {
    ignoreWhitespace: s,
    context: a ? 1e5 : FCt,
    timeout: Kfr
  });
  if (!w) return [];
  if (f) return w.hunks;
  return w.hunks.map(y => ({
    ...y,
    lines: y.lines.map(he)
  }));
}

function Q4({filePath: e, fileContents: n, edits: r, ignoreWhitespace: s = !1}) {
  let a = G(_$(n)), h = MV(e, e, a, r.reduce((f, S) => {
    let {old_string: w, new_string: y} = S, C = "replace_all" in S ? S.replace_all : !1, v = G(_$(w)), b = G(_$(y));
    if (C) return f.replaceAll(v, () => b); else return f.replace(v, () => b);
  }, a), void 0, void 0, {
    context: FCt,
    ignoreWhitespace: s,
    timeout: Kfr
  });
  if (!h) return [];
  return h.hunks.map(f => ({
    ...f,
    lines: f.lines.map(he)
  }));
}

import { join as Ge } from "path";

import { randomBytes as we } from "crypto";

import { constants as me } from "fs";

import { lstat as re, open as Re, readdir as Fe, realpath as Oe, stat as Ie, unlink as ye } from "fs/promises";

import { homedir as De } from "os";

import { basename as Ce, dirname as I, join as B } from "path";

function J3(e) {
  return (e.startsWith("\ufeff") ? e.slice(1) : e).replaceAll(`\r\n`, `\n`);
}

var Ufr = 1, Ae = 64, Ne = 1048576, Bfr = ".proposed-", We = /^[0-9a-f]{8}$/, Le = 9e5, Be = {
  userSettings: "user_settings",
  projectSettings: "project_settings",
  localSettings: "local_settings",
  flagSettings: "policy_settings",
  policySettings: "policy_settings"
}, Me = p(() => u({
  id: o().min(1),
  path: o().min(1),
  resolvedPath: o().min(1),
  baseSha256: o().nullable(),
  proposedSha256: o(),
  proposedContent: o(),
  stagedAt: o(),
  by: u({
    tool: U([ "Write", "Edit" ]),
    origin: U([ "local", "served" ]),
    sessionId: o()
  })
})), He = p(() => u({
  version: A(Ufr),
  entries: T(Me())
}));

function ne() {
  return B(De(), ".claude", "state", "settings-review.json");
}

var be = [ "policySettings", "flagSettings", ...p_ ];

function H(e) {
  let n = io(e);
  return be.find(r => {
    let s = hn(r);
    return s !== void 0 && io(s) === n;
  });
}

async function ve(e) {
  let n;
  try {
    n = await z(e);
  } catch {
    return H(e);
  }
  return X(e, n);
}

async function X(e, n) {
  let r = H(e);
  if (r !== void 0) return r;
  let s = io(n);
  for (let a of be) {
    let h = hn(a);
    if (h === void 0) continue;
    try {
      if (io(await z(h)) === s) return a;
    } catch {}
  }
  return;
}

function Se(e) {
  let n = e.content.startsWith("\ufeff");
  return {
    text: n ? e.content.slice(1) : e.content,
    encoding: e.encoding,
    bom: n,
    lineEndings: e.lineEndings
  };
}

function J(e) {
  return {
    readStore: async () => {
      try {
        return await gn().read(ne());
      } catch (n) {
        if (W(n)) return;
        throw n;
      }
    },
    writeStore: async n => {
      let r = ne();
      await gn().mkdir(I(r), 448), await gn().atomicWrite(r, n, 384);
    },
    deleteStore: async () => {
      try {
        await gn().delete(ne());
      } catch (n) {
        if (!W(n)) throw n;
      }
    },
    readTarget: async n => {
      try {
        return Se(await Q_(await Pe(n), kf)).text;
      } catch (r) {
        if (W(r)) return null;
        throw r;
      }
    },
    writeTarget: async ({path: n, resolvedPath: r, baseSha256: s, content: a, blockedOnceWritten: h}) => {
      let f;
      try {
        f = await cS(r, [ r ], {
          createParents: !0
        });
      } catch (b) {
        if (b instanceof Og) return "redirected";
        throw b;
      }
      let S = Ce(r), w = `${Bfr}${we(4).toString("hex")}`, y = B(I(r), FU), C = B(I(f.ioPath), `${S}${w}`), v = !1;
      try {
        C = CMr(y, f.ioPath, w, !1);
        let b = I(C) !== I(f.ioPath);
        await $e(I(C), S);
        let k = async () => {
          let M;
          try {
            M = await f.readExisting(kf);
          } catch (ge) {
            if (xj(ge)) return "changed";
            throw ge;
          }
          let te = M === null ? null : Se(M);
          return (te === null ? null : at(te.text)) === s ? te : "changed";
        }, F = await k();
        if (F === "changed") return "changed";
        let R = F?.encoding ?? "utf8", D = (F?.bom ? "\ufeff" : "") + tEe(a, F?.lineEndings ?? "LF"), j = Buffer.from(D, R);
        await OG(C, j, 384), v = !0;
        let V = b ? C : B(I(r), `${S}${w}`);
        if (await h(V)) return "blocked";
        if (await k() === "changed") return "changed";
        let P = await ze(C, V, j);
        if (P === null) return "tampered";
        await f.recheckBeforeWrite();
        let L = await re(C).catch(() => null);
        if (L === null || L.isSymbolicLink() || L.ino !== P.ino || L.dev !== P.dev) return "tampered";
        if (b) t$t(y);
        try {
          await ls(C, f.ioPath), v = !1;
        } catch (M) {
          if (!DC.has(E(M) ?? "")) throw M;
          await bA(f.ioPath, D, {
            encoding: R,
            stagingDir: y,
            refuseHardLinkedInPlace: !0
          });
        }
        let ce = await X(n, r), de = ce === void 0 ? void 0 : hn(ce);
        if (de !== void 0) smt(de);
        return "written";
      } catch (b) {
        if (b instanceof Vqn) return "hard_linked";
        if (b instanceof Og) return "redirected";
        if (b instanceof RMr) return "tampered";
        throw b;
      } finally {
        if (v) await ye(C).catch(b => {
          t(`settings review store: could not remove the proposal sibling (${l(b)}); the next accept of this file sweeps it`, {
            level: "warn"
          });
        });
        await f.close();
      }
    },
    locate: z,
    isSettingsFile: async n => xue(n) || QIt(n) && cdt(n, await Z()),
    configChangeBlocked: async (n, r, s) => {
      let a = await X(n, r);
      if (a === void 0) return !1;
      if (e?.configChangeHookGate === void 0) return d(Error("settings review store: ConfigChange hook gate not wired")), 
      !0;
      return e.configChangeHookGate(Be[a], s);
    },
    afterApplied: async (n, r) => {
      let s = await X(n, r);
      if (s !== void 0) Pa.notifyChange(s);
    },
    now: () => new Date
  };
}

async function ze(e, n, r) {
  try {
    let s = O() === "windows";
    if (s && (await re(e)).isSymbolicLink()) return null;
    let a = await Re(e, me.O_RDONLY | (s ? 0 : me.O_NOFOLLOW));
    try {
      let h = await a.stat();
      if (!h.isFile() || h.nlink !== 1) return null;
      if (at(await a.readFile()) !== at(r)) return null;
      let f = await Ie(n);
      return f.dev === h.dev && f.ino === h.ino ? {
        dev: h.dev,
        ino: h.ino
      } : null;
    } finally {
      await a.close();
    }
  } catch {
    return null;
  }
}

async function $e(e, n) {
  let r;
  try {
    r = await Fe(e);
  } catch {
    return;
  }
  let s = `${n}${Bfr}`, a = Date.now() - Le;
  for (let h of r) {
    if (!h.startsWith(s) || !We.test(h.slice(s.length))) continue;
    try {
      if ((await re(B(e, h))).mtimeMs < a) await ye(B(e, h));
    } catch {}
  }
}

async function Pe(e) {
  if (H(e) === "policySettings" || ZH(e)) return e;
  let n = await Nj(se(), e);
  return n.linksResolvedPath ?? n.resolvedPath;
}

async function z(e) {
  return ie(await Pe(e));
}

async function ie(e) {
  try {
    return await Oe(e);
  } catch (n) {
    if (!W(n) || I(e) === e) throw n;
    return B(await ie(I(e)), Ce(e));
  }
}

async function Z() {
  return wgo(ie);
}

async function K(e) {
  let n = await e.readStore();
  if (n === void 0) return [];
  let r;
  try {
    r = Y(n);
  } catch {
    r = void 0;
  }
  let s = He().safeParse(r);
  if (!s.success) throw new Ee;
  return s.data.entries;
}

class Ee extends Error {
  constructor() {
    super("settings review store: malformed or of an unknown version");
  }
}

async function je(e, n) {
  return await n.isSettingsFile(e.path) || await n.isSettingsFile(e.resolvedPath);
}

async function Q(e, n) {
  if (e.length === 0) {
    await n.deleteStore();
    return;
  }
  await n.writeStore(_({
    version: Ufr,
    entries: e
  }, null, 2) + `\n`);
}

async function ke(e, n = J()) {
  let r = await K(n), s = await n.readTarget(e.path), a = J3(e.proposedContent), h = {
    id: we(6).toString("hex"),
    path: e.path,
    resolvedPath: await n.locate(e.path),
    baseSha256: s === null ? null : at(s),
    proposedSha256: at(a),
    proposedContent: a,
    stagedAt: n.now().toISOString(),
    by: e.by
  }, f = io(h.path), S = io(h.resolvedPath), w = [ ...r.filter(C => io(C.path) !== f && io(C.resolvedPath) !== S), h ], y = 0;
  while (w.length > Ae || _(w).length > Ne) {
    let C = w.findIndex(v => v !== h && v.by.sessionId === h.by.sessionId);
    if (C === -1) throw Error("settings review store: no room, proposal not staged");
    w.splice(C, 1), y++;
  }
  if (y > 0) t(`settings review store: full, dropped the ${y} oldest pending proposal(s)`, {
    level: "warn"
  });
  return await Q(w, n), h;
}

async function kds(e, n = J()) {
  let s = (await K(n)).find(S => S.id === e.id);
  if (s === void 0 || !await je(s, n)) return "gone";
  if (_(s) !== _(e) || at(s.proposedContent) !== s.proposedSha256) return "stale";
  if (await n.locate(s.path) !== s.resolvedPath) return "redirected";
  let a = await n.readTarget(s.resolvedPath);
  if ((a === null ? null : at(a)) !== s.baseSha256) return "conflict";
  let f;
  try {
    f = await n.writeTarget({
      path: s.path,
      resolvedPath: s.resolvedPath,
      baseSha256: s.baseSha256,
      content: s.proposedContent,
      blockedOnceWritten: S => n.configChangeBlocked(s.path, s.resolvedPath, S)
    });
  } catch (S) {
    let w = E(S);
    if (w === "EACCES" || w === "EPERM" || w === "EROFS" || w === "EBUSY") return "not_writable";
    throw S;
  }
  switch (f) {
   case "changed":
    return "conflict";

   case "redirected":
   case "hard_linked":
   case "blocked":
   case "tampered":
    return f;

   case "written":
    break;
  }
  await n.afterApplied(s.path, s.resolvedPath);
  try {
    let S = await K(n);
    await Q(S.filter(w => w.id !== s.id), n);
  } catch (S) {
    t(`settings review store: applied, but the store could not be updated (${l(S)})`, {
      level: "warn"
    });
  }
  return "applied";
}

async function Tds(e, n = J()) {
  let r = await K(n), s = r.filter(a => a.id !== e);
  if (s.length === r.length) return !1;
  return await Q(s, n), !0;
}

async function Ads(e, n = J()) {
  let r = await K(n), s = n.now().getTime(), a = r.filter(h => {
    let f = Date.parse(h.stagedAt);
    return Number.isFinite(f) && f >= e.getTime() && f <= s;
  });
  if (a.length !== r.length || r.length === 0) await Q(a, n);
  return r.length - a.length;
}

function jfr(e, n) {
  let r = f => {
    if (f === null) return {};
    try {
      let S = ue(o(), oe()).safeParse(Y(J3(f)));
      return S.success ? S.data : void 0;
    } catch {
      return;
    }
  }, s = r(e), a = r(n);
  if (a === void 0) return [ "not valid JSON" ];
  if (s === void 0) return [ "replaces a file that was not valid JSON" ];
  let h = [];
  for (let f of new Set([ ...Object.keys(s), ...Object.keys(a) ])) if (!(f in s)) h.push(`adds ${f}`); else if (!(f in a)) h.push(`removes ${f}`); else if (_(s[f]) !== _(a[f])) h.push(`changes ${f}`);
  return h;
}

function Ue({session: e, served: n}) {
  return !n && JXe() && bEs(e);
}

function Wfr({session: e, served: n, cause: r}) {
  if (r !== "unapproved") return r;
  return Ue({
    session: e,
    served: n
  }) ? "card" : "review";
}

function zfr(e, n) {
  switch (n) {
   case "card":
    return `Not applied: ${e} was NOT modified. In the Claude desktop app, a change to a Claude Code settings file applies only when the user approves that edit on its permission card. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;

   case "linked":
    return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path reaches a Claude Code settings file through a symbolic link, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;

   case "policy":
    return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path is, or may be, a managed policy settings file or the --settings file, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;

   case "review":
    return `Staged for review: ${e} was NOT modified. Changes to Claude Code settings files made without the owner of this computer approving them in person are held for their review; the owner applies or discards them with /settings-review, and the change takes effect only if they accept it. Do not retry the edit or try to make the same change another way.`;
  }
}

class ae extends x {
  constructor(e) {
    super(`Not written: ${e} was NOT modified. Claude Code could not resolve where its managed settings folder is, so it cannot rule out that this path is a managed settings file, and it does not write the file. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`, "settings write refused: a managed drop-in directory did not resolve");
  }
}

var pMn = "Staged for your review \xb7 not applied until you accept it in /settings-review";

async function Gfr(e, n, r) {
  let s = e.remoteCall !== void 0;
  if (!jMr({
    served: s
  })) return;
  if (s) {
    let {settingsSpellings: y, unclassified: C} = await Te(n), [v] = y;
    if (v !== void 0) return {
      path: v,
      cause: "unapproved"
    };
    if (C !== void 0) throw new ae(r.absolutePath);
    return;
  }
  if (e.permissionSurface !== void 0) return;
  let {settingsSpellings: a, unclassified: h, dropIns: f} = await Te(n), [S] = a;
  if (S === void 0) {
    if (h !== void 0) throw new ae(r.absolutePath);
    return;
  }
  if (!SEs(e.session, e.toolUseId, r)) return {
    path: S,
    cause: "unapproved"
  };
  let w = await Ke(r.absolutePath, n, a, f ?? await Z());
  return w === "covered" ? void 0 : {
    path: S,
    cause: w
  };
}

async function Te(e) {
  let n = e.some(QIt) ? await Z() : void 0;
  return {
    settingsSpellings: e.filter(r => xue(r) || n !== void 0 && cdt(r, n)),
    unclassified: n === void 0 || n.allResolved ? void 0 : e.find(QIt),
    dropIns: n
  };
}

async function Ke(e, n, r, s) {
  if (!r.includes(e)) return "linked";
  let a = n.filter(f => f !== e);
  if (await Ve(n, s)) return a.length === 0 ? "policy" : "linked";
  if (a.length === 0) return "covered";
  let h = H(e);
  if (h === void 0) return "linked";
  for (let f of a) if (await ve(f) !== h) return "linked";
  return "covered";
}

async function Ve(e, n) {
  if (!n.allResolved || !n.allLocated) return !0;
  let r = new Set;
  for (let s of Xe()) {
    r.add(ww(s));
    try {
      r.add(ww(await z(s)));
    } catch {
      return !0;
    }
  }
  for (let s of e) {
    let a;
    try {
      a = await z(s);
    } catch {
      return !0;
    }
    if (cdt(s, n) || cdt(a, n) || r.has(ww(ot(s))) || r.has(ww(a))) return !0;
  }
  return !1;
}

function Xe() {
  let e = hn("flagSettings");
  return [ ...Gie(uG()).map(n => Ge(n, "managed-settings.json")), ...e === void 0 ? [] : [ e ] ];
}

async function Vfr(e) {
  let n = e.writeCtx.remoteCall === void 0 ? "local" : "served", r;
  try {
    r = await ke({
      path: e.absolutePath,
      proposedContent: e.proposedContent,
      by: {
        tool: e.tool,
        origin: n,
        sessionId: e.writeCtx.remoteCall?.origin.callerSessionId ?? q()
      }
    });
  } catch (s) {
    throw m("settings_quarantine", "stage_failed"), new x(`Could not stage this change to a Claude Code settings file for the owner's review, so nothing was written. (${l(s)})`, "settings review store: stage failed");
  }
  return i("tengu_settings_change_staged", {
    origin: c(n),
    tool: c(e.tool),
    source_kind: c(H(e.absolutePath) ?? "other"),
    key_count: jfr(e.currentContent, e.proposedContent).length
  }), g("settings_quarantine"), r;
}

import { open as Je } from "fs/promises";

var Rst = 8192, zqe = 10485760, ee = 10, Ye = 13;

async function Cds(e, n, r = 3) {
  let s = await m8t(e);
  if (s === null) return null;
  try {
    return await Doo(s, n, r);
  } finally {
    await s.close();
  }
}

async function m8t(e) {
  if (Cs(e) || Eh(e)) return null;
  if (e.includes("\0")) return null;
  try {
    return await Je(e, "r");
  } catch (n) {
    if (W(n)) return null;
    throw n;
  }
}

async function Doo(e, n, r) {
  if (n === "") return {
    content: "",
    lineOffset: 1,
    truncated: !1
  };
  let s = Buffer.from(n, "utf8"), a = 0;
  for (let v = 0; v < s.length; v++) if (s[v] === ee) a++;
  let h, f = s.length + a - 1, S = Buffer.allocUnsafe(Rst + f), w = 0, y = 0, C = 0;
  while (w < zqe) {
    let {bytesRead: v} = await e.read(S, C, Rst, w);
    if (v === 0) break;
    let b = C + v;
    if (w === 0 && rae(S.subarray(0, b)) !== "utf8") return {
      content: "",
      lineOffset: 1,
      truncated: !1
    };
    let k = xe(S, s, b), F = s.length;
    if (k === -1 && a > 0) h ??= Buffer.from(n.replaceAll(`\n`, `\r\n`), "utf8"), k = xe(S, h, b), 
    F = h.length;
    if (k !== -1) {
      let D = w - C + k;
      return await Qe(e, S, D, F, r, y + le(S, 0, k));
    }
    w += v;
    let R = Math.min(f, b);
    y += le(S, 0, b - R), C = R, S.copyWithin(0, b - C, b);
  }
  return {
    content: "",
    lineOffset: 1,
    truncated: w >= zqe
  };
}

async function gMn(e) {
  let n = Buffer.allocUnsafe(Rst), r = 0;
  for (;;) {
    if (r === n.length) {
      let a = Buffer.allocUnsafe(Math.min(n.length * 2, zqe + Rst));
      n.copy(a, 0, 0, r), n = a;
    }
    let {bytesRead: s} = await e.read(n, r, n.length - r, r);
    if (s === 0) break;
    if (r += s, r > zqe) return null;
  }
  return Fee(n.subarray(0, r));
}

function xe(e, n, r) {
  let s = e.indexOf(n);
  return s === -1 || s + n.length > r ? -1 : s;
}

function le(e, n, r) {
  let s = 0;
  for (let a = n; a < r; a++) if (e[a] === ee) s++;
  return s;
}

function _e(e) {
  return (e & 192) === 128;
}

function qe(e) {
  return e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}

function Ze(e, n) {
  let r = e.toString("utf8", 0, n);
  return r.includes("\r") ? r.replaceAll(`\r\n`, `\n`) : r;
}

async function Qe(e, n, r, s, a, h) {
  let f = Math.min(r, Rst), {bytesRead: S} = await e.read(n, 0, f, r - f), w = r, y = 0;
  for (let P = S - 1; P >= 0 && y <= a; P--) {
    if (n[P] === ee) {
      if (y++, y > a) break;
    }
    w--;
  }
  let C = r - S;
  for (let P = 0; P < 3 && w < r && _e(n[w - C]); P++) w++;
  let v = r - w, b = h - le(n, S - v, S) + 1, k = r + s, {bytesRead: F} = await e.read(n, 0, Rst, k), R = k;
  y = 0;
  for (let P = 0; P < F; P++) if (R++, n[P] === ee) {
    if (y++, y >= a + 1) break;
  }
  for (let P = 0; P <= 3 && R - 1 - P >= k; P++) {
    let L = n[R - 1 - P - k];
    if (_e(L)) continue;
    if (L >= 192 && qe(L) > P + 1) R -= P + 1;
    break;
  }
  if (R > k && n[R - 1 - k] === Ye) R--;
  let D = R - w, j = D <= n.length ? n : Buffer.allocUnsafe(D), {bytesRead: V} = await e.read(j, 0, D, w);
  return {
    content: Ze(j, V),
    lineOffset: b,
    truncated: !1
  };
}

var xst = e => `+ ${Math.max(e.oldStart + e.oldLines - 1, e.newStart + e.newLines - 1, 1)} `.length;

export { J3, Ufr, Bfr, kds, Tds, Ads, jfr, Wfr, zfr, pMn, Gfr, Vfr, FCt, Kfr, fMn, mMn, UCt, _ce, Q4, Rst, zqe, Cds, m8t, Doo, gMn, xst };
