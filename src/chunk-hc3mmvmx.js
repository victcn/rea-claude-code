// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { l, W, jt, $y } from "./chunk-b0z4bv3v.js";

import { Y, Do, se, t } from "./chunk-kawq2919.js";

import { Ee, zJe } from "./chunk-z52kmxx4.js";

import { nt } from "./chunk-5wbhf1bk.js";

import { Ugt, d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { mI, e4n, hme } from "./chunk-30n0xq4e.js";

import { Nw, ROe, MMr, wln, FMo } from "./chunk-60c97a4m.js";

import { p } from "./chunk-jkzenvsk.js";

import { gH, fOt, xl, sUn, iUn } from "./chunk-67jt18z1.js";

import { tFs, mr, hX, Fe, oFs } from "./chunk-0cdqg49t.js";

import { nOe, Vmt } from "./chunk-q6wab2jw.js";

import { sSe, wbr, M$e, jNn, Cbr, GPt, VPt, pbs, fbs, Bpo, xbr } from "./chunk-r8a304y3.js";

import { Jf, Oqn, Mqn, ud } from "./chunk-rgd61mm3.js";

import { kvr } from "./chunk-9tdwgnpn.js";

import { Rso, u4e, da } from "./chunk-z09tf6qf.js";

import { Ev } from "./chunk-znhtg8e4.js";

import { dn } from "./chunk-nnrb0acr.js";

import { Cko, NH, k, P5, Si } from "./chunk-xywp7esx.js";

import { NNt, Tqn, u$s, p$s, FOo, UOo, f$s, qve } from "./chunk-9yajep3y.js";

import { Lln } from "./chunk-5brm0azz.js";

import { Ja, Om } from "./chunk-2msx6erf.js";

import { fe, er, fxo, aS, sI, h1e } from "./chunk-dd98x6x7.js";

import { gl } from "./chunk-46phtgr7.js";

import { Kkn } from "./chunk-k8sj9ms0.js";

import { _H, N8, kFe, ZV, c6e, AUn, mvs, w1, TFe, gvs } from "./chunk-t70vnbgq.js";

import { Hao } from "./chunk-7xj6dhxv.js";

import { jtt, WJo } from "./chunk-mwntpxrm.js";

import { Xoe, PY, ai } from "./chunk-f4r8hspx.js";

import { u7, Gao, oYe, kxt, Plo, Fms, Rbe, Igs } from "./chunk-sqb9meyh.js";

import { R6r } from "./chunk-19d60ej4.js";

import { yTn, yQo } from "./chunk-y7242kd2.js";

import { AW, ude, d3, pkt, NM, reo, oeo } from "./chunk-84yp45y8.js";

import { Np } from "./chunk-7en5gt36.js";

import { iZt } from "./chunk-km6d4a9r.js";

import { O$n, M$n, H$n, D$n } from "./chunk-5ad06083.js";

import { Ads } from "./chunk-0t44d1pt.js";

import { QBn } from "./chunk-efav7xct.js";

import { Bqt } from "./chunk-pc71c0q1.js";

import { Yhe } from "./chunk-5yhyhg4z.js";

import { jJo } from "./chunk-r7amy7kc.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { o, v, u } from "./chunk-cvcg6n1z.js";

import { yt } from "./chunk-9zhz923g.js";

import * as x from "fs/promises";

import { homedir as me, tmpdir as Ce } from "os";

import { basename as Z, dirname as we, join as h } from "path";

import { join as oe } from "path";

var Pe = "image-cache";

async function ce() {
  let e = se(), r = oe(Ee(), Pe), s = q();
  try {
    let n;
    try {
      n = await e.readdir(r);
    } catch {
      return;
    }
    for (let f of n) {
      if (f.name === s) continue;
      let a = oe(r, f.name);
      try {
        await e.rm(a, {
          recursive: !0,
          force: !0
        }), t(`Cleaned up old image cache: ${a}`);
      } catch {}
    }
    try {
      if ((await e.lstat(r)).isDirectory()) await e.rmdir(r);
    } catch {}
  } catch {}
}

var wr = p(() => u({
  key: o(),
  integrity: o().nullable(),
  time: v()
}));

var ve = 0, Oe = [ "ccr-tip.json", "custom-title.json", "precompact.json", "sent-prefix.json", O$n ];

function ue(e) {
  let r = hX(e);
  return mr(e) && r.length === 1 && r[0] === e.toLowerCase() && f$s(e);
}

function be(e) {
  return Oe.some(r => e === r || mI(e, r)) || e.startsWith(M$n) && (e.endsWith(".json") || e.includes(".json.tmp.")) || e.startsWith(H$n) && e.endsWith(".md");
}

async function Vkn(e) {
  if (!dn("userSettings") && er()?.cleanupPeriodDays === void 0) return t("Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays."), 
  "user_source_disabled";
  if (fe("policySettings")?.cleanupPeriodDays !== void 0) return null;
  if (Yhe().errors.filter(s => !s.mcpErrorMetadata && s.severity !== "warning").length > 0) for (let s of Vmt) {
    let n = await h1e(s, e, s === "desktopSessionCleanupPeriodDays" ? {
      presenceSources: [ "userSettings", "flagSettings" ]
    } : void 0);
    if (n === "unknowable") return t(`Skipping cleanup: a settings file could not be read or parsed, so ${s} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`), 
    "settings_unknowable";
    if (n === "present") return t(`Skipping cleanup: settings have validation errors but ${s} was explicitly set. Fix settings errors to enable cleanup.`), 
    "settings_invalid_key_set";
  }
  return null;
}

async function b6r(e) {
  return await Vkn(e) === null;
}

function Ub(e) {
  let s = (er() || {}).cleanupPeriodDays ?? VPt;
  if (s === 0) return null;
  if (e !== void 0 && e < s) s = e;
  let n = s * 24 * 60 * 60 * 1e3;
  return new Date(Date.now() - n);
}

var J = ".desktop-released.json", Ie = 4096;

function ee(e) {
  return e.slice(0, -6) + J;
}

var Te = p(() => u({
  reason: o().optional()
}));

async function le(e, r, s) {
  let n = await r.readFileFdGated(e, Ie);
  if (n === null) return "none";
  let f;
  try {
    let a = Te().safeParse(Y(n.content));
    f = a.success ? a.data.reason : void 0;
  } catch {
    return "none";
  }
  if (f === "delete") return "release-now";
  if (f === "archive") return n.stats.mtime < s ? "release-now" : "grace";
  return "none";
}

function Ae(e) {
  return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}

function xe() {
  return re("desktopSessionCleanupPeriodDays", ve);
}

function re(e, r) {
  let s = sI(e)[0] ?? r;
  if (s === 0) return null;
  return new Date(Date.now() - s * 24 * 60 * 60 * 1e3);
}

function je() {
  if (fe("policySettings")?.cleanupPeriodDays !== void 0) return !0;
  if (fxo()) return !0;
  return aS().some(e => e.file !== nOe && (Vmt.some(r => r === e.path) || e.severity !== "warning"));
}

function UJo() {
  return je() || gl("hipaa") || gl("zdr");
}

function E() {
  return {
    messages: 0,
    errors: 0,
    filesRetainedFresh: 0,
    filesPastCutoff: 0
  };
}

function N(e, r) {
  return {
    messages: e.messages + r.messages,
    errors: e.errors + r.errors,
    filesRetainedFresh: e.filesRetainedFresh + r.filesRetainedFresh,
    filesPastCutoff: e.filesPastCutoff + r.filesPastCutoff
  };
}

function Ne(e) {
  let r = nt(e, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(r);
}

function qhe(e) {
  return jt(e) || $y(e);
}

async function de(e, r, s) {
  let n = E();
  try {
    let f = await se().readdir(e);
    for (let a of f) try {
      if (Ne(a.name) < r) if (await se().unlink(h(e, a.name)), s) n.messages++; else n.errors++;
    } catch (w) {
      t(`Failed to clean up file ${a.name} in ${e}: ${w}`, {
        level: "error"
      });
    }
  } catch (f) {
    if (W(f)) ; else if (qhe(f)) t(`cleanup readdir ${e} failed: ${f.code}`, {
      level: "error"
    }); else d(f);
  }
  return n;
}

async function Me() {
  let e = se(), r = Ub();
  if (r === null) return E();
  let s = Ugt.errors(), n = Ugt.baseLogs(), f = await de(s, r, !1);
  try {
    let a;
    try {
      a = await e.readdir(n);
    } catch {
      return f;
    }
    let w = a.filter(S => S.isDirectory() && S.name.startsWith("mcp-logs-")).map(S => h(n, S.name));
    for (let S of w) f = N(f, await de(S, r, !0)), await T(S, e);
  } catch (a) {
    if (W(a)) ; else if (qhe(a)) t(`cleanup mcp-logs scan failed: ${a.code}`, {
      level: "error"
    }); else d(a);
  }
  return f;
}

async function A(e, r, s, n, f = r, a) {
  let w;
  try {
    w = await s.stat(e);
  } catch (S) {
    if (W(S)) return !1;
    throw S;
  }
  if (!(w.mtime < r)) return n.filesRetainedFresh++, !1;
  if (a !== void 0 && await a(e, w)) return !1;
  try {
    await s.unlink(e);
  } catch (S) {
    if (W(S)) return !1;
    if (w.mtime < f) n.filesPastCutoff++;
    throw S;
  }
  return !0;
}

async function T(e, r) {
  if (!await G(e, r)) return;
  try {
    await r.rmdir(e);
  } catch {}
}

var te = [ u$s, p$s ];

async function Be(e, r, s, n) {
  try {
    for (let m of te) await ye(h(e, m), r, s, n);
    let f = !1;
    try {
      let {sweepCheckoutSessionTrash: m} = await import("./chunk-4xrz2x1s.js"), g = await m(e, r.getTime());
      n.messages += g.removed, n.errors += g.errors, f = g.newestKeptMs !== null;
    } catch {
      n.errors++, f = !0;
    }
    let a = (await s.readdir(e)).filter(m => !te.includes(m.name)), w = null;
    for (let m of a) {
      let g = h(e, m.name), P = await ne(m, g, s) === "directory" ? await X(g, s, {
        requireCompleteWalk: !0
      }) : (await s.lstat(g)).mtimeMs;
      if (P !== null) w = Math.max(w ?? -1 / 0, P);
    }
    if (!((w ?? await ge(e, s)) < r.getTime())) return;
    let y = (await Promise.all(te.map(m => s.lstat(h(e, m)).then(g => g.isDirectory(), g => {
      if (W(g)) return !1;
      throw g;
    })))).includes(!0), D = a.toSorted((m, g) => Number(m.name === FOo) - Number(g.name === FOo));
    if (y || f) {
      let m = !1;
      for (let g of D) {
        if (f && g.name === Tqn) {
          m = await We(h(e, g.name), s) || m;
          continue;
        }
        await s.rm(h(e, g.name), {
          recursive: !0,
          force: !0
        }), m = !0;
      }
      if (m) n.messages++;
      return;
    }
    for (let m of D.slice(0, -1)) await s.rm(h(e, m.name), {
      recursive: !0,
      force: !0
    });
    await s.rm(e, {
      recursive: !0,
      force: !0
    }), n.messages++;
  } catch (f) {
    if (!W(f)) n.errors++;
  }
}

async function ye(e, r, s, n) {
  if (!await G(e, s)) return;
  let f = await s.readdir(e).catch(() => []);
  for (let a of f) {
    let w = await ne(a, h(e, a.name), s).catch(y => {
      if (!W(y)) n.errors++;
      return "other";
    });
    if (w === "file") {
      try {
        if (await A(h(e, a.name), r, s, n)) n.messages++;
      } catch {
        n.errors++;
      }
      continue;
    }
    if (w !== "directory") continue;
    let S = h(e, a.name);
    try {
      if ((await X(S, s, {
        requireCompleteWalk: !0
      }) ?? await ge(S, s)) < r.getTime()) await s.rm(S, {
        recursive: !0,
        force: !0
      }), n.messages++;
    } catch (y) {
      if (!W(y)) n.errors++;
    }
  }
  await T(e, s);
}

async function ne(e, r, s) {
  if (e.isDirectory()) return "directory";
  if (e.isFile()) return "file";
  if (e.isSymbolicLink() || e.isFIFO() || e.isSocket() || e.isBlockDevice() || e.isCharacterDevice()) return "other";
  let n = await s.lstat(r);
  return n.isDirectory() ? "directory" : n.isFile() ? "file" : "other";
}

async function ge(e, r) {
  return (await r.lstat(e)).mtimeMs;
}

async function Le(e) {
  let r = Ub(), s = E();
  if (r === null) return s;
  let n = Np(), f = se();
  for (let a of await f.readdir(n).catch(() => [])) {
    let w = h(n, a.name), S = h(w, NNt);
    if (a.isDirectory() && await G(S, f)) await Be(S, r, f, s), await T(w, f);
  }
  return s;
}

async function We(e, r) {
  let s = e, n = !1;
  for (let f of [ "objects", "info", "alternates" ]) {
    if (!(await r.lstat(s)).isDirectory()) return await r.rm(s, {
      recursive: !0,
      force: !0
    }), !0;
    for (let a of await r.readdir(s)) if (a.name !== f) await r.rm(h(s, a.name), {
      recursive: !0,
      force: !0
    }), n = !0;
    s = h(s, f);
  }
  return n;
}

async function G(e, r) {
  try {
    return (await r.lstat(e)).isDirectory();
  } catch {
    return !1;
  }
}

async function Q(e, r, s, n, f = {}) {
  let {entryMatcher: a} = f, w = await s.readdir(e).catch(S => {
    if (f.countEnumerationFailures === !0 && !W(S)) n.errors++;
    return [];
  });
  for (let S of w) {
    let y = h(e, S.name);
    if (S.isDirectory()) await Q(y, r, s, n, f); else if (a !== void 0 && !a(S.name)) ; else if (S.isFile()) try {
      if (await A(y, r, s, n)) n.messages++;
    } catch {
      n.errors++;
    } else try {
      if ((await s.lstat(y)).mtime < r) await s.unlink(y), n.messages++;
    } catch {
      n.errors++;
    }
  }
  await T(e, s);
}

async function X(e, r, {requireCompleteWalk: s = !1} = {}) {
  let n = -1 / 0, f = await r.readdir(e).catch(a => {
    if (s && !W(a)) throw a;
    return [];
  });
  for (let a of f) {
    let w = h(e, a.name), S = s ? await ne(a, w, r).catch(y => {
      if (W(y)) return "other";
      throw y;
    }) : a.isDirectory() ? "directory" : a.isFile() ? "file" : "other";
    if (S === "directory") {
      let y = await X(w, r, {
        requireCompleteWalk: s
      });
      if (y !== null) n = Math.max(n, y);
    } else if (S === "file") try {
      let {mtimeMs: y} = await r.stat(w);
      n = Math.max(n, y);
    } catch (y) {
      if (s && !W(y)) throw y;
    }
  }
  return n === -1 / 0 ? null : n;
}

async function He() {
  let e = Ub(), r = {
    ...E(),
    transcripts: 0,
    transcriptsExemptedDesktop: 0
  };
  if (e === null) return r;
  let s = Np(), n = se(), f;
  try {
    f = await n.readdir(s);
  } catch {
    return r;
  }
  let a;
  try {
    if (a = ud(), !(await n.lstat(a)).isDirectory()) a = null;
  } catch {
    a = null;
  }
  let w = UJo(), S = xe(), y = null, D = w ? void 0 : async (m, g) => {
    if (gl("hipaa") || gl("zdr")) return !1;
    if (S !== null && g.mtime < S) return !1;
    let P = await le(ee(m), n, e);
    if (P === "release-now") return !1;
    if (P === "grace") return r.transcriptsExemptedDesktop++, !0;
    if (g.size === 0) {
      if (!await n.stat(m.slice(0, -6)).then(I => I.isDirectory(), () => !1)) return r.transcriptsExemptedDesktop++, 
      !0;
    }
    y ??= Buffer.allocUnsafe(Nw);
    let {head: _, tail: O} = await wln(m, g.size, y);
    if (_ === "" && g.size > 0) throw await n.stat(m), Error("transient read failure while classifying a transcript for the desktop retention exemption");
    let F = g.size > Nw ? FMo(O) : O, R = ROe(_, "entrypoint"), j = MMr(F, "entrypoint");
    if (!(R !== void 0 && Lln(R) || j !== void 0 && Lln(j))) return !1;
    let U = Z(m).startsWith("agent-") ? ROe(_, "sessionId") ?? MMr(F, "sessionId") : void 0;
    if (U !== void 0 && Ae(U)) {
      let L = h(we(m), `${U}${J}`);
      if (L !== ee(m)) {
        if (await le(L, n, e) === "release-now") return !1;
      }
    }
    return r.transcriptsExemptedDesktop++, !0;
  };
  for (let m of f) {
    if (!m.isDirectory()) continue;
    let g = h(s, m.name), P;
    try {
      P = await n.readdir(g);
    } catch {
      r.errors++;
      continue;
    }
    P.sort((R, j) => Number(j.isDirectory()) - Number(R.isDirectory()));
    let _ = [], O = null, F = new Set(P.filter(R => R.isFile() && R.name.endsWith(".jsonl")).map(R => R.name.slice(0, -6)));
    for (let R of P) {
      if (O === null && !R.isDirectory()) O = r.errors;
      if (R.isFile()) {
        if (R.name.endsWith(J) && F.has(R.name.slice(0, -J.length))) continue;
        if (!R.name.endsWith(".jsonl") && !R.name.endsWith(".cast") && !R.name.endsWith(".ccr-tip.json") && !R.name.endsWith(".precompact.json") && !R.name.endsWith(J) && !R.name.includes(".desktop-released.json.tmp") && !R.name.endsWith(".dir-sync.json") && !R.name.endsWith(".dir-sync-empty.json") && !R.name.endsWith(".cloud-worktrees.json") && !R.name.includes(".ccr-tip.json.tmp.") && !R.name.includes(".precompact.json.tmp.") && !R.name.includes(".dir-sync.json.tmp.") && !R.name.includes(".dir-sync-empty.json.tmp.") && !R.name.includes(".cloud-worktrees.json.tmp.") && !R.name.includes(".jsonl.compact.tmp.") && !R.name.includes(".jsonl.superseded-")) continue;
        let j = h(g, R.name);
        try {
          if (await A(j, e, n, r, void 0, R.name.endsWith(".jsonl") ? D : void 0)) {
            if (r.messages++, R.name.endsWith(".jsonl")) {
              r.transcripts++;
              let B = R.name.slice(0, -6);
              if (ue(B)) {
                if (await n.unlink(h(g, `${B}.ccr-tip.json`)).catch(() => {}), await n.unlink(h(g, `${B}.precompact.json`)).catch(() => {}), 
                _.push(ee(j)), await n.rm(h(g, B), {
                  recursive: !0,
                  force: !0
                }).catch(() => {
                  r.errors++;
                }), a !== null) {
                  let U = h(a, m.name), L = await n.lstat(U).catch(() => null);
                  if (L?.isDirectory()) {
                    if (await n.rm(h(U, B), {
                      recursive: !0,
                      force: !0
                    }).catch(() => {
                      r.errors++;
                    }), L.mtime < e) await T(U, n);
                  }
                }
              }
            }
          }
        } catch (B) {
          if (!W(B)) r.errors++;
        }
      } else if (R.isDirectory()) {
        let j = h(g, R.name);
        if (R.name === "bagel") {
          let I = await X(j, n);
          if (I !== null && I < e.getTime()) try {
            await n.rm(j, {
              recursive: !0,
              force: !0
            }), r.messages++;
          } catch {
            r.errors++;
          }
          continue;
        }
        if (R.name === NNt) continue;
        if (!ue(R.name)) {
          let I = await n.lstat(j).catch(() => null);
          if (I !== null && I.mtime < e) await T(j, n);
          continue;
        }
        let B = h(j, qve);
        if (await G(B, n)) {
          let I = await n.readdir(B).catch(() => []);
          for (let H of I) if (H.isFile()) try {
            if (await A(h(B, H.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          } else if (H.isDirectory()) {
            let V = h(B, H.name), ie;
            try {
              ie = await n.readdir(V);
            } catch {
              continue;
            }
            for (let ae of ie) {
              if (!ae.isFile()) continue;
              try {
                if (await A(h(V, ae.name), e, n, r)) r.messages++;
              } catch {
                r.errors++;
              }
            }
            await T(V, n);
          }
          await T(B, n);
        }
        let U = await n.readdir(j).catch(() => []);
        for (let I of U) {
          if (!I.isFile() || !(be(I.name) || UOo(I.name) !== void 0)) continue;
          if (I.name === "custom-title.json" && F.has(R.name)) continue;
          try {
            if (await A(h(j, I.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          }
        }
        let L = h(j, "mcp-tasks");
        if (await G(L, n)) {
          for (let I of await n.readdir(L).catch(() => [])) {
            let H = I.name.endsWith(".json") || I.name.includes(".json.tmp.");
            if (!I.isFile() || !H) continue;
            try {
              if (await A(h(L, I.name), e, n, r)) r.messages++;
            } catch {
              r.errors++;
            }
          }
          await T(L, n);
        }
        if (!F.has(R.name)) for (let I of [ "subagents", "workflows", "remote-agents" ]) {
          let H = h(j, I);
          if (await G(H, n)) await Q(H, e, n, r);
        }
        await T(j, n);
      }
    }
    if (O !== null && r.errors > O) _.length = 0;
    for (let R of _) await n.unlink(R).catch(() => {});
    await T(g, n);
  }
  return r;
}

async function C(e, r, s = !0, n, f) {
  let a = f === void 0 ? Ub(n) : f, w = E();
  if (a === null) return w;
  let S = f !== void 0 || n === void 0 ? a : Ub() ?? a, y = typeof r === "string" ? g => g.endsWith(r) : r, D = se(), m;
  try {
    m = await D.readdir(e);
  } catch {
    return w;
  }
  for (let g of m) {
    if (!g.isFile() || !y(g.name)) continue;
    try {
      if (await A(h(e, g.name), a, D, w, S)) w.messages++;
    } catch {
      w.errors++;
    }
  }
  if (s) await T(e, D);
  return w;
}

async function $e() {
  let e = E(), r = Ub();
  if (r === null) return e;
  let s = h(Ee(), "hfi-auth.json");
  try {
    if (await A(s, r, se(), e)) e.messages++;
  } catch (n) {
    if (!W(n)) t(`Failed to clean up HFI auth file: ${n}`, {
      level: "error"
    }), e.errors++;
  }
  return e;
}

async function Ue() {
  let e = E(), r = Ub();
  if (r === null) return e;
  let s = h(Ee(), "cache", "team-discovery.json");
  try {
    if (await A(s, r, se(), e)) e.messages++;
  } catch (n) {
    if (!W(n)) if (e.errors++, qhe(n)) t(`cleanup team-discovery-cache failed: ${n.code}`, {
      level: "error"
    }); else d(n);
  }
  return e;
}

async function Ye() {
  let e = E(), r = Ub();
  if (r === null) return e;
  for (let s of [ yTn(), yQo() ]) try {
    if (await A(s, r, se(), e)) e.messages++;
  } catch (n) {
    if (!W(n)) if (e.errors++, qhe(n)) t(`cleanup model-access memory failed: ${n.code}`, {
      level: "error"
    }); else d(n);
  }
  return e;
}

async function Ge() {
  return C(NH(), e => e !== Cko && e !== R6r && (e.endsWith(".json") || e.includes(".json.tmp.")));
}

async function ze() {
  let e = E(), r = Ub();
  if (r === null) return e;
  let s = h(Ee(), "mcp-needs-auth-cache.json");
  try {
    if (await A(s, r, se(), e)) e.messages++;
  } catch (n) {
    if (!W(n)) if (e.errors++, qhe(n)) t(`cleanup mcp-auth-cache failed: ${n.code}`, {
      level: "error"
    }); else d(n);
  }
  return e;
}

async function Ke() {
  let e = E(), r = Ub();
  if (r === null) return e;
  let s = h(Ee(), "state", "device-unbound-creates.json");
  try {
    if (await A(s, r, se(), e)) e.messages++;
  } catch (n) {
    if (!W(n)) if (e.errors++, qhe(n)) t(`cleanup device-unbound-creates failed: ${n.code}`, {
      level: "error"
    }); else d(n);
  }
  return e;
}

async function Xe() {
  let e = E(), r = Ub();
  if (r === null) return e;
  let s = h(Ee(), "state", "mcp-discover-verdicts.json");
  try {
    if (await A(s, r, se(), e)) e.messages++;
  } catch (n) {
    if (!W(n)) if (e.errors++, qhe(n)) t(`cleanup mcp-discover-verdicts failed: ${n.code}`, {
      level: "error"
    }); else d(n);
  }
  return e;
}

async function Je(e = h(me(), ".claude", "state", "served-calls")) {
  return C(e, r => r.endsWith(".jsonl") || r.includes(".jsonl.tmp."), !0, void 0, re("cleanupPeriodDays", VPt));
}

async function Ze(e = h(me(), ".claude", "state", "unattended-serving-runs")) {
  return C(e, r => {
    let s = /^([1-9][0-9]{0,9})\.json$/.exec(r)?.[1];
    return s === void 0 ? r.includes(".json.tmp.") : !Aa(Number(s));
  }, !0, void 0, re("cleanupPeriodDays", VPt));
}

async function qe(e) {
  let r = E(), s = Ub();
  if (s === null) return r;
  try {
    r.messages += await Ads(s, e);
  } catch (n) {
    if (r.errors++, qhe(n)) t(`cleanup settings-review store failed: ${n.code}`, {
      level: "error"
    }); else d(n);
  }
  return r;
}

function Qe(e) {
  if (!e) return !1;
  try {
    let r = Do(e);
    if (typeof r !== "object" || r === null) return !0;
    if (!("timestamp" in r)) return !0;
    let {timestamp: s} = r;
    return typeof s !== "number" || !Number.isFinite(s);
  } catch {
    return !0;
  }
}

function Ve(e, r) {
  if (!e) return !1;
  try {
    let s = Do(e);
    if (typeof s !== "object" || s === null || !("timestamp" in s)) return !1;
    let {timestamp: n} = s;
    return typeof n === "number" && Number.isFinite(n) && n < r;
  } catch {
    return !1;
  }
}

async function et(e, r) {
  let s;
  try {
    s = await x.readdir(e);
  } catch {
    return;
  }
  let n = r.getTime();
  await Promise.all(s.filter(f => mI(f, "history.jsonl") || u7(f)).map(async f => {
    let a = h(e, f);
    try {
      let w = await x.lstat(a);
      if (w.isFile() && w.mtimeMs < n) await x.unlink(a);
    } catch {}
  }));
}

async function tt(e) {
  let r = h(Ee(), "history.jsonl"), s = e.getTime(), n = y => Ve(y, s) || Qe(y), f, a;
  try {
    if (f = await x.lstat(r), !f.isFile()) return t("History retention prune skipped: history.jsonl is not a regular file", {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
    a = await Plo(r, n, {
      start: 0,
      end: f.size,
      tail: "defer",
      expect: {
        ino: f.ino,
        birthtimeMs: f.birthtimeMs
      }
    });
  } catch (y) {
    if (W(y)) return {
      entriesPruned: 0,
      errors: 0
    };
    if (y instanceof kxt) return t("History retention prune deferred: history.jsonl changed under the scan"), 
    {
      entriesPruned: 0,
      errors: 0
    };
    return t(`History retention prune failed: ${y}`, {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
  }
  if (a.dropped === 0 && a.consumed === f.size) return {
    entriesPruned: 0,
    errors: 0
  };
  let w, S = !1;
  try {
    w = await Ja(r, {
      ...oYe,
      onCompromised: y => {
        S = !0, t(`History retention lock compromised: ${y}`, {
          level: "error"
        });
      }
    });
  } catch (y) {
    if (W(y)) return {
      entriesPruned: 0,
      errors: 0
    };
    return t(`History retention prune failed: ${y}`, {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
  }
  try {
    let y = await x.lstat(r);
    if (!y.isFile() || y.size < a.consumed || f.ino !== 0 && y.ino !== f.ino || y.birthtimeMs !== f.birthtimeMs) return t("History retention prune deferred: history.jsonl changed under the scan"), 
    {
      entriesPruned: 0,
      errors: 0
    };
    let D = await Plo(r, n, {
      start: a.consumed,
      end: y.size,
      tail: "judge",
      expect: {
        ino: y.ino,
        birthtimeMs: y.birthtimeMs
      },
      verifiedHead: {
        bytes: a.consumed,
        digest: a.digest
      },
      residueBytes: f.size - a.consumed
    }), m = a.dropped + D.dropped;
    if (S) throw Error("history lock compromised before the rewrite");
    if (m === 0 && D.terminated && !D.split) return {
      entriesPruned: 0,
      errors: 0
    };
    let g = a.kept.concat(D.kept);
    return await hme(r, g.length ? `${g.join(`\n`)}\n` : "", {
      exactMode: y.mode & 511
    }), {
      entriesPruned: m,
      errors: 0
    };
  } catch (y) {
    if (y instanceof kxt) return t("History retention prune deferred: history.jsonl changed under the scan"), 
    {
      entriesPruned: 0,
      errors: 0
    };
    return t(`History retention prune failed: ${y}`, {
      level: "error"
    }), {
      entriesPruned: 0,
      errors: 1
    };
  } finally {
    await Om(w, "history retention");
  }
}

async function rt() {
  let e = h(Ee(), "mcp-discovery-cache"), r = await C(e, a => a.endsWith(".json") || a.includes(".json.tmp."), !1), s = Ub();
  if (s === null) return r;
  let n = se(), f;
  try {
    f = await n.readdir(e);
  } catch {
    return r;
  }
  for (let a of f) {
    if (!a.isDirectory() || !a.name.endsWith(".json.lock")) continue;
    let w = h(e, a.name);
    try {
      if ((await n.stat(w)).mtime < s) await n.rmdir(w), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await T(e, n), r;
}

async function st(e) {
  if (he()) return E();
  let r = h(Ee(), "plans");
  try {
    if (e !== void 0) return await C(r, s => s.endsWith(".md") || s.includes(".md.tmp."));
    return await C(r, ".md");
  } finally {
    iZt();
  }
}

async function M(e, {exclude: r, skipIf: s, refuseRedirectedRoot: n = !1, removeEmptyBaseDir: f = !0, maxAgeDays: a, baseDir: w, storageV5: S} = {}) {
  let y = Ub(a), D = E();
  if (y === null) return D;
  let m = se(), g = Ee(), P = w ?? h(g, e);
  if (n) {
    if (await AW(P, g, {
      event: "cleanup_sweep_root_refused",
      phase: "sweep",
      rootLabel: e
    }, {
      storageV5: S
    }) !== "real") return D;
  }
  let _;
  try {
    _ = await m.readdir(P);
  } catch {
    return D;
  }
  for (let O of _) {
    if (!O.isDirectory() || r?.has(O.name)) continue;
    let F = h(P, O.name);
    try {
      if ((await m.stat(F)).mtime < y) {
        if (await (s?.(F))) continue;
        await m.rm(F, {
          recursive: !0,
          force: !0
        }), D.messages++;
      }
    } catch {
      D.errors++;
    }
  }
  if (f) await T(P, m);
  return D;
}

function it() {
  return M("file-history");
}

function at() {
  return M("session-env");
}

function ot() {
  return M("tasks");
}

function ct() {
  return M("uploads");
}

function ut() {
  let e = NM.get()?.folder, r = Ub();
  return M("dev-mods", {
    exclude: new Set([ q(), ...e === void 0 ? [] : [ Z(e) ] ]),
    skipIf: s => ke(s, r, lt),
    removeEmptyBaseDir: !1
  });
}

var lt = 3, ft = 2;

async function dt() {
  let e = M$e(), r = await sSe(e).catch(() => null);
  if (!r) return E();
  return M(wbr, {
    removeEmptyBaseDir: !1,
    maxAgeDays: ft,
    baseDir: e,
    skipIf: async s => !await jNn(s, r)
  });
}

async function pt() {
  try {
    return await Igs();
  } catch (e) {
    if (qhe(e)) t(`[cleanup] the sweep of seed-admin did not run: ${e.code}`, {
      level: "warn"
    }); else d(e);
    return {
      removed: 0,
      errors: 1,
      held: 0,
      refused: "no"
    };
  }
}

async function mt(e) {
  if (z() && e !== void 0) {
    let n = await ht(e);
    if (n !== "unaddressed") return n;
  }
  let r = GPt(), s = await sSe(r).catch(() => null);
  if (!s) return E();
  return M(Cbr, {
    removeEmptyBaseDir: !1,
    maxAgeDays: Bpo,
    baseDir: r,
    skipIf: async n => {
      let f = await sSe(r);
      return f?.ino !== s.ino || f.dev !== s.dev || await sSe(n) === null || await x.realpath(n) !== h(await x.realpath(we(r)), Cbr, Z(n));
    }
  });
}

async function ht(e) {
  let r = E(), s = oFs(), n = await e.scopeKind(s);
  if (!n.ok) return n.error.code === "InvalidArgument" ? "unaddressed" : r;
  if (n.value.kind !== "directory" || n.value.object === void 0 || n.value.owner === "other") return r;
  let f = Ub(Bpo);
  if (f === null) return r;
  let a = await e.deleteScope(s, {
    olderThanMs: Math.max(0, Date.now() - f.getTime())
  });
  if (!a.ok) return r;
  return r.messages += a.value.deleted, r.errors += a.value.failed ?? 0, r;
}

function wt() {
  return C(Bqt(), "", !1, QBn);
}

async function gt(e) {
  return N(N(await M(AUn, {
    refuseRedirectedRoot: !0,
    storageV5: e
  }), await M(mvs, {
    refuseRedirectedRoot: !0,
    storageV5: e
  })), await Se(ZV, e));
}

async function Se(e, r) {
  let s = E();
  if (Ub() === null) return s;
  let n = Ee(), f = h(n, e);
  if (await AW(f, n, {
    event: "cleanup_sweep_root_refused",
    phase: "sweep",
    rootLabel: e
  }, {
    storageV5: r
  }) !== "real") return s;
  let w;
  try {
    w = await se().readdir(f);
  } catch {
    return s;
  }
  for (let S of w) {
    if (!S.isDirectory() || !kFe(S.name)) continue;
    s = N(s, await M(h(e, "*", N8), {
      baseDir: h(f, S.name, N8),
      refuseRedirectedRoot: !0,
      storageV5: r
    }));
  }
  return s;
}

function St(e) {
  return M(c6e, {
    refuseRedirectedRoot: !0,
    storageV5: e
  });
}

async function De(e, r, s, n) {
  let f = E(), a = Ub();
  if (a === null) return f;
  let w = await gH().catch(_ => {
    d(_);
    return;
  });
  if (w === void 0) return f;
  let S = w ?? fOt(), y = Ee(), D = h(y, e);
  if (await AW(D, y, {
    event: "cleanup_sweep_root_refused",
    phase: "sweep",
    rootLabel: e
  }, {
    storageV5: n
  }) !== "real") return f;
  let g = se(), P;
  try {
    P = await g.readdir(D);
  } catch {
    return f;
  }
  for (let _ of P) {
    if (!_.isDirectory() || !kFe(_.name) || _.name === S || !await d3(D, _.name)) continue;
    let O = h(D, _.name), F;
    try {
      F = (await g.lstat(h(O, _H)).catch(() => g.lstat(O))).mtime;
    } catch {
      continue;
    }
    if (F >= a) {
      f.filesRetainedFresh++;
      continue;
    }
    if (f.filesPastCutoff++, await ude({
      dir: O,
      trashRoot: h(y, r),
      configHome: y,
      failureEvent: s,
      storageV5: n
    })) await pkt(D, _.name).catch(() => {}), f.messages++; else f.errors++;
  }
  return f;
}

function Dt(e) {
  return De(w1, TFe, "plugins_sync_trash_move_failed", e);
}

function Rt(e) {
  return De(ZV, c6e, "skills_sync_trash_move_failed", e);
}

function kt(e) {
  return M(TFe, {
    refuseRedirectedRoot: !0,
    storageV5: e
  });
}

async function Pt(e) {
  return N(await M(gvs, {
    refuseRedirectedRoot: !0,
    storageV5: e
  }), await Se(w1, e));
}

async function _t() {
  let e = h(xl(), "store"), r = await C(e, n => n.endsWith(".json") || n.includes(".json.tmp."), !1), s = Ub();
  if (s !== null) await ye(e, s, se(), r);
  return r;
}

function Et() {
  return C(xl(), e => sUn(e) || iUn(e), !1);
}

async function Ct() {
  let e = Ub(), r = E();
  if (e === null) return r;
  let s = se(), n = h(Ee(), jtt), f;
  try {
    f = await s.readdir(n);
  } catch {
    return r;
  }
  for (let a of f) {
    if (!a.isDirectory()) continue;
    let w = h(n, a.name), S = (await WJo(w))?.cacheKey ?? null, y;
    try {
      y = await s.readdir(w);
    } catch {
      r.errors++;
      continue;
    }
    for (let D of y) {
      if (!D.isDirectory() || D.name === S) continue;
      let m = h(w, D.name);
      try {
        if ((await s.stat(m)).mtime < e) await s.rm(m, {
          recursive: !0,
          force: !0
        }), r.messages++;
      } catch {
        r.errors++;
      }
    }
    try {
      if ((await s.stat(w)).mtime < e) await s.rm(w, {
        recursive: !0,
        force: !0
      }), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await T(n, s), r;
}

async function vt() {
  let e = h(Ee(), "usage-data"), r = await C(h(e, "facets"), s => s.endsWith(".json") || s.includes(".json.tmp."));
  return r = N(r, await C(h(e, "session-meta"), s => s.endsWith(".json") || s.includes(".json.tmp."))), 
  r = N(r, await C(e, s => s.endsWith(".html") || tFs(s), !1)), await T(e, se()), 
  r;
}

async function Ot() {
  let e = Ub(), r = E();
  if (e === null) return r;
  let s = se(), n;
  try {
    n = ud();
  } catch {
    return r;
  }
  let f;
  try {
    f = await s.readdir(n);
  } catch {
    return r;
  }
  for (let a of f) {
    let w = a.name.startsWith("cc-transcript-") && a.name.endsWith(".txt"), S = a.name.startsWith(D$n) && a.name.endsWith(".md"), y = a.name.startsWith(kvr) && (a.name.endsWith(".json") || a.name.endsWith(".diff")), D = !1;
    if (!a.isFile() || !w && !S && !y && !0) continue;
    try {
      if (await A(h(n, a.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}

async function bt() {
  let e = E(), r = Ub(fbs);
  if (r === null) return e;
  let s = se(), n;
  try {
    if (n = ud(), !(await s.lstat(n)).isDirectory()) return e;
  } catch {
    return e;
  }
  let f = h(n, "speculation"), a;
  try {
    a = await s.lstat(f);
  } catch {
    return e;
  }
  if (!a.isDirectory()) return e;
  try {
    if ((await X(f, s, {
      requireCompleteWalk: !0
    }) ?? a.mtimeMs) < r.getTime()) return await s.rm(f, {
      recursive: !0,
      force: !0
    }), e.messages++, e;
  } catch {
    e.errors++;
  }
  return await T(f, s), e;
}

async function Ft() {
  let e = h(Ee(), "shares"), r = await M("shares");
  return r = N(r, await C(e, s => s.endsWith(".zip") || s.includes(".zip.tmp.") && e4n(s), !1)), 
  await T(e, se()), r;
}

async function It() {
  let e = h(Ee(), "telemetry"), r = await C(e, ".json", !1), s = Ub();
  if (s === null) return r;
  let n = h(e, "runs"), f = se();
  if (await G(e, f) && await G(n, f)) await Q(n, s, f, r, {
    entryMatcher: a => a.endsWith(".json")
  });
  return await T(e, se()), r;
}

function Tt() {
  return C(h(Ee(), "dump-prompts"), ".jsonl", !0, pbs);
}

function At() {
  return C(h(Ee(), "shell-snapshots"), ".sh", !1);
}

async function xt() {
  let e = Ub(), r = E();
  if (e === null) return r;
  let s = se(), n = zJe();
  for (let f of await s.readdir(n).catch(() => [])) {
    if (!f.isDirectory()) continue;
    let a = h(n, f.name, "inboxes");
    if (await G(a, s)) {
      for (let w of await s.readdir(a).catch(() => [])) {
        if (!w.isFile() || !w.name.endsWith(".json")) continue;
        try {
          if (await A(h(a, w.name), e, s, r)) r.messages++;
        } catch {
          r.errors++;
        }
      }
      await T(a, s);
    }
    await T(h(n, f.name), s);
  }
  return r;
}

async function Nt(e, r = Ce()) {
  let s = E(), n = se(), f = process.getuid?.(), a;
  try {
    a = await n.readdir(r);
  } catch (w) {
    if (!W(w)) s.errors++;
    return s;
  }
  for (let w of a) {
    if (!w.name.startsWith("cc-daemon-")) continue;
    let S = w.name.slice(10);
    if (/^\d+$/.test(S) || f !== void 0 && S === String(f) || /^[0-9a-f]{16}$/.test(S)) continue;
    let y = h(r, w.name);
    try {
      let D = await sSe(y);
      if (D === null) continue;
      let m = await n.readdir(y);
      if (m.length !== 1 || m[0].name !== "stderr.log") continue;
      let g = h(y, "stderr.log"), P = await n.lstat(g);
      if (!P.isFile()) continue;
      if (!(P.mtime < e)) {
        s.filesRetainedFresh++;
        continue;
      }
      let _ = await sSe(y);
      if (_ === null || _.dev !== D.dev || _.ino !== D.ino) continue;
      try {
        await n.unlink(g);
      } catch (O) {
        if (W(O)) continue;
        throw s.filesPastCutoff++, O;
      }
      s.messages++, await T(y, n);
    } catch (D) {
      if (!W(D)) s.errors++;
    }
  }
  return s;
}

var Yn = new RegExp(`^${Oqn}[A-Za-z0-9]{6}$`);

var Mt = new RegExp(`^${Mqn}[A-Za-z0-9]{6}$`);

async function Bt(e = Ub(), r = Jf()) {
  let s = E();
  if (e === null) return s;
  let n = se(), f;
  try {
    f = await n.readdir(r);
  } catch (a) {
    if (!W(a)) s.errors++;
    return s;
  }
  for (let a of f) {
    if (!Mt.test(a.name)) continue;
    let w = h(r, a.name);
    try {
      let S = await sSe(w);
      if (S === null) continue;
      if (!((await X(w, n, {
        requireCompleteWalk: !0
      }) ?? S.mtimeMs) < e.getTime())) {
        s.filesRetainedFresh++;
        continue;
      }
      let D = await sSe(w);
      if (D === null || D.dev !== S.dev || D.ino !== S.ino) continue;
      await n.rm(w, {
        recursive: !0,
        force: !0
      }), s.messages++;
    } catch (S) {
      if (!W(S)) s.errors++;
    }
  }
  return s;
}

async function Lt(e, r) {
  let s = Ee(), n = await C(h(s, "jobs", "settled"), ".json");
  n = N(n, await C(h(s, "daemon", "dispatch", "rejected"), ".json")), n = N(n, await C(h(s, "daemon", "dispatch"), ".json", !1)), 
  n = N(n, await C(h(s, "daemon", "auth"), ".json"));
  try {
    let D = h(s, "daemon", "host-managed"), m = se(), g = Ub();
    if (g) for (let P of await m.readdir(D)) {
      if (!P.isFile()) continue;
      try {
        await m.lstat(h(s, "jobs", P.name));
      } catch (_) {
        if (!W(_)) {
          n.errors++;
          continue;
        }
        try {
          if (await A(h(D, P.name), g, m, n)) n.messages++;
        } catch (O) {
          if (!W(O)) n.errors++;
        }
      }
    }
  } catch (D) {
    if (!W(D)) n.errors++;
  }
  let f = UJo(), a = Ub(), w = new Set;
  if (!f) for (let D of await u4e(e)) w.add(D);
  let S = !1, y = !1;
  try {
    let D = h(s, "daemon", "roster.json"), m = await se().lstat(D);
    if (!m.isFile() || m.size > 8388608) throw Error("not a regular file");
    let g = await se().readFile(D, {
      encoding: "utf-8"
    }), P = Y(g);
    if (P !== null && typeof P === "object" && "workers" in P) {
      let _ = P.workers;
      if (_ !== null && typeof _ === "object") {
        S = !0;
        for (let [O, F] of Object.entries(_)) if (F !== null && typeof F === "object" && "pid" in F && typeof F.pid === "number" && Aa(F.pid) && await Ev(F.pid, "procStart" in F && typeof F.procStart === "string" ? F.procStart : void 0)) w.add(O), 
        y = !0;
      }
    }
  } catch {}
  if (n = N(n, await M("jobs", {
    exclude: w,
    skipIf: async D => {
      let m;
      try {
        m = await Rso(D, e);
      } catch (g) {
        throw d(g), t(`[cleanup] jobs/${Z(D)}: job state read threw \u2014 keeping the folder (${l(g)})`, {
          level: "error"
        }), g;
      }
      if (!f && (m === null || !da(m))) return !0;
      if (m?.worktreePath && da(m) && a) {
        let g = await oeo({
          worktreePath: m.worktreePath,
          worktreeBranch: m.worktreeBranch,
          originCwd: m.originCwd,
          hookBased: m.worktreeHookBased,
          cutoff: a,
          ...{}
        }).catch(P => (d(P), !1));
      }
      return !1;
    }
  })), a !== null) {
    n = N(n, await Nt(a));
    let D = se();
    for (let g of [ h(s, "daemon.log"), h(s, "daemon.log.1") ]) try {
      if (await A(g, a, D, n)) n.messages++;
    } catch (P) {
      if (!W(P)) n.errors++;
    }
    let m = h(s, "daemon", "roster.json");
    try {
      if ((await D.lstat(m)).mtime < a && !y && (S || f)) await D.unlink(m), n.messages++;
    } catch (g) {
      if (!W(g)) n.errors++;
    }
    for (let g of await D.readdir(h(s, "daemon")).catch(() => [])) {
      if (!g.isFile() || !g.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await A(h(s, "daemon", g.name), a, D, n)) n.messages++;
      } catch {
        n.errors++;
      }
    }
  }
  return await Kkn(), n;
}

function Wt() {
  return C(h(Ee(), "backups"), "", !1);
}

async function Ht() {
  let e = Ub(), r = E();
  if (e === null) return r;
  let s = se(), n = h(Ee(), "debug"), f;
  try {
    f = await s.readdir(n);
  } catch {
    return r;
  }
  for (let a of f) {
    if (a.name === "latest" || !a.isFile()) continue;
    try {
      if (await A(h(n, a.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}

async function $t() {
  return C(h(Ee(), "feedback-bundles"), ".zip");
}

async function Ut() {
  return C(h(Ee(), "feedback", "drafts"), e => e.endsWith(".json") || e.includes(".json.tmp."), !0, 30);
}

async function Yt() {
  let e = h(Ee(), "remote-control", "fork-seeds"), r = await C(e, f => f.endsWith(".json") || f.includes(".json.tmp."));
  if (Ub() === null) return r;
  let s = new Date, n = se();
  for (let f of await n.readdir(e).catch(() => [])) try {
    let a = h(e, f.name);
    if (f.isFile() && (await n.stat(a)).mtime > s) await x.lutimes(a, s, s);
  } catch {
    r.errors++;
  }
  return r;
}

async function Gt() {
  let e = await C(h(Ee(), "traces"), ".json"), r = await C(h(Ee(), "startup-perf"), ".txt"), s = await C(h(Ee(), "startup-perf"), ".json");
  return N(N(e, r), s);
}

var zt = 864e5, Re = Gao;

function Kt(e) {
  if (e === void 0) return b("none");
  if (!Re.has(e)) return b("other");
  return e === "ELOOP" ? b("ELOOP") : e === "EISDIR" ? b("EISDIR") : b("ENXIO");
}

function Xt(e) {
  return e.code === "Failed" && e.telemetryCode !== void 0 && Re.has(e.telemetryCode);
}

function Jt(e) {
  if (e.ok) return "removed it";
  return ("telemetryCode" in e.error ? e.error.telemetryCode : void 0) === "EISDIR" ? "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing" : `could not remove it (${e.error.code})`;
}

async function S6r(e) {
  let r = await e.statMeta(Fe.state("last-cleanup"));
  if (r.ok || r.error.code === "NotFound" || !Xt(r.error)) return;
  i("tengu_cleanup_throttle_marker", {
    marker: b("last-cleanup"),
    verdict: b("not_regular_rerun"),
    code: c(r.error.code),
    errno: Kt("telemetryCode" in r.error ? r.error.telemetryCode : void 0)
  });
  let s = await e.delete(Fe.state("last-cleanup"));
  t(`.last-cleanup: sentinel is not a regular file (${yt(r.error)}) \u2014 ${Jt(s)}; rewriting`, {
    level: "warn"
  });
}

var Zt = [ ".npm-cache-cleanup", ".version-cleanup", ".last-cleanup", ".deep-link-register-failed" ];

async function w6r(e, r) {
  if (!r.claimStagingReap()) return;
  let s;
  try {
    s = await x.readdir(e);
  } catch {
    return;
  }
  let n = Date.now() - zt;
  await Promise.all(s.filter(f => Zt.some(a => mI(f, a))).map(async f => {
    let a = h(e, f);
    try {
      let w = await x.lstat(a);
      if (w.isFile() && w.mtimeMs < n) await x.unlink(a);
    } catch {}
  }));
}

async function qt() {
  let e = Ub(), r = E();
  if (e === null) return r;
  let s = se();
  for (let n of xbr) {
    let f = h(Ee(), n), a = await s.lstat(f).catch(y => {
      if (!W(y)) r.errors++;
      return null;
    });
    if (a === null || !a.isDirectory()) continue;
    let w;
    try {
      w = await s.readdir(f);
    } catch {
      continue;
    }
    let S = !1;
    for (let y of w) {
      let D = h(f, y.name);
      try {
        if (!((await s.stat(D)).mtime < e)) continue;
        let g = await s.lstat(f).catch(() => null);
        if (g === null || !g.isDirectory() || g.dev !== a.dev || g.ino !== a.ino) {
          S = !0;
          break;
        }
        if (y.isDirectory()) await s.rm(D, {
          recursive: !0,
          force: !0
        }); else await s.unlink(D);
        r.messages++;
      } catch {
        r.errors++;
      }
    }
    if (!S) await T(f, s);
  }
  return r;
}

async function Qt() {
  let e = E(), r = Ub();
  if (r === null) return e;
  let s = h(P5(), "projects"), n = se(), f = await n.lstat(s).catch(w => {
    if (!W(w)) e.errors++;
    return null;
  });
  if (f === null || !f.isDirectory()) return e;
  let a = await n.readdir(s).catch(w => {
    if (!W(w)) e.errors++;
    return [];
  });
  for (let w of a) {
    if (!w.isDirectory()) continue;
    let S = h(s, w.name, "tiny_memory"), y = await n.lstat(S).catch(D => {
      if (!W(D)) e.errors++;
      return null;
    });
    if (y === null || !y.isDirectory()) continue;
    await Q(S, r, n, e, {
      countEnumerationFailures: !0
    });
  }
  return e;
}

async function Vt() {
  let r = E(), s = Ub();
  if (s === null) return r;
  let n = h(P5(), "projects"), f = se(), a = await f.readdir(n).catch(() => []);
  for (let w of a) {
    if (!w.isDirectory()) continue;
    r = N(r, await pe(h(n, w.name, "memory", "proposals"), s, f));
  }
  return N(r, await pe(h(Si(), "proposals"), s, f));
}

var tr = "skill-proposal";

async function pe(e, r, s) {
  let n = E();
  try {
    if ((await s.lstat(e)).isSymbolicLink()) return n;
  } catch (a) {
    if (!jt(a)) n.errors++;
    return n;
  }
  let f = await s.readdir(e).catch(a => {
    if (!W(a)) n.errors++;
    return [];
  });
  for (let a of f) {
    if (!a.isFile() || !a.name.endsWith(".md")) continue;
    let w = h(e, a.name);
    try {
      let {content: S, mtimeMs: y} = await Rbe(w, 0, Xoe, PY, void 0, {
        truncateOnByteLimit: !0
      });
      if (!(y < r.getTime())) continue;
      if (ai(S, w).frontmatter.type !== tr) continue;
      await s.unlink(w), n.messages++;
    } catch (S) {
      if (!W(S)) n.errors++;
    }
  }
  return await T(e, s), n;
}

async function v6r(e) {
  await ce();
  let r = await pt(), s = {
    seedAdminRemoved: r.removed,
    seedAdminErrors: r.errors,
    seedAdminHeld: r.held,
    seedAdminRefused: c(r.refused)
  }, n = await Vkn(e), f = er()?.cleanupPeriodDays;
  if (n !== null) {
    i("tengu_retention_sweep", {
      skipped: !0,
      skipReason: c(n),
      ...s
    }), Hao({
      result: "skipped",
      skipReason: n,
      periodDays: f ?? VPt,
      usedDefault: f === void 0
    });
    return;
  }
  i("tengu_retention_sweep", {
    phase: b("start"),
    ...s
  });
  let a = void 0, w, S = () => w ??= Le(a);
  await using y = {
    [Symbol.asyncDispose]: () => S().then(() => {}, () => {})
  };
  await Me();
  let D = await He(), m = [ D ];
  m.push(await st(e)), m.push(await it()), m.push(await at()), m.push(await ot()), 
  m.push(await ct()), m.push(await ut()), m.push(await mt(e)), m.push(await dt()), 
  m.push(await wt()), m.push(await vt()), m.push(await gt(e)), m.push(await Pt(e)), 
  m.push(await Rt(e)), m.push(await Dt(e)), m.push(await St(e)), m.push(await kt(e)), 
  m.push(await _t()), m.push(await Et()), m.push(await Ct()), m.push(await Ot()), 
  m.push(await Bt()), m.push(await bt()), m.push(await Ft()), m.push(await It()), 
  m.push(await Ht()), m.push(await $t()), m.push(await Ut()), m.push(await Yt()), 
  m.push(await Gt()), m.push(await Tt()), m.push(await At()), m.push(await xt()), 
  m.push(await Lt(e, a)), m.push(await Wt()), m.push(await $e()), m.push(await ze()), 
  m.push(await Ke()), m.push(await Xe()), m.push(await Je()), m.push(await Ze()), 
  m.push(await qe()), m.push(await rt()), m.push(await Ue()), m.push(await Ye()), 
  m.push(await Ge()), m.push(await qt()), m.push(await Qt()), m.push(await Vt());
  let g = {
    entriesPruned: 0,
    errors: 0
  }, P = Ub();
  if (P !== null) {
    await Fms(P, e);
    let O = await jJo(P);
    m.push({
      ...E(),
      messages: O.removed,
      errors: O.errors
    });
    let F = await reo(P, a);
    if (F > 0) i("tengu_worktree_cleanup", {
      removed: F
    });
    if (await et(Ee(), P), gl("hipaa") && k("tengu_hipaa_history_retention_prune", !0)) g = await tt(P), 
    m.push({
      ...E(),
      errors: g.errors
    });
  }
  m.push(await S());
  let _ = m.reduce(N, E());
  i("tengu_retention_sweep", {
    phase: b("complete"),
    skipped: !1,
    transcriptsDeleted: D.transcripts,
    transcriptsExemptedDesktop: D.transcriptsExemptedDesktop,
    sessionFilesDeleted: D.messages,
    artifactsDeleted: _.messages,
    filesRetainedFresh: _.filesRetainedFresh,
    filesPastCutoff: _.filesPastCutoff,
    errors: _.errors,
    historyEntriesPruned: g.entriesPruned,
    periodDays: f ?? VPt,
    usedDefault: f === void 0
  }), Hao({
    result: "complete",
    periodDays: f ?? VPt,
    usedDefault: f === void 0,
    transcriptsDeleted: D.transcripts,
    transcriptsExemptedDesktop: D.transcriptsExemptedDesktop,
    sessionFilesDeleted: D.messages,
    artifactsDeleted: _.messages,
    filesRetainedFresh: _.filesRetainedFresh,
    filesPastCutoff: _.filesPastCutoff,
    errorCount: _.errors,
    historyEntriesPruned: g.entriesPruned
  });
}

async function ke(e, r, s) {
  if (r === null) return !0;
  let n = await x.readdir(e, {
    withFileTypes: !0
  }).catch(() => []);
  for (let f of n) {
    let a = h(e, f.name), w = await x.lstat(a).catch(() => null);
    if (w !== null && w.mtime > r) return !0;
    if (s > 1 && f.isDirectory() && await ke(a, r, s - 1)) return !0;
  }
  return !1;
}

export { Vkn, b6r, Ub, UJo, qhe, S6r, w6r, v6r };
