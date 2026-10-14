// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { l, E, ME, W } from "./chunk-b0z4bv3v.js";

import { ke } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { J } from "./chunk-nvtwm272.js";

import { Ln, Un, cl, Li, el } from "./chunk-ddr690nj.js";

import { _, Y, ty, A$, se, ds, t } from "./chunk-kawq2919.js";

import { I, nt, Br } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { le } from "./chunk-cqgvwwgb.js";

import { a } from "./chunk-j016gcgm.js";

import { xn, As, it, ft } from "./chunk-zscnwzv2.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { gh, d_, Ul } from "./chunk-znhtg8e4.js";

import { IG, ls, Tn } from "./chunk-30n0xq4e.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { RL, njo, xMe, QQe, Cte, Rq, sjo, U3n, RBt } from "./chunk-hqg6ydk9.js";

import { tk, YRe, MNn, gue, rSe, nk, jV } from "./chunk-7j9be257.js";

import { p } from "./chunk-jkzenvsk.js";

import { Xa } from "./chunk-3kb22va7.js";

import { wj, uS, Rk, Mee } from "./chunk-yxennhe9.js";

import { Xd, XM, VQ, tHn, yso, Jst, bso, uRt, pRt, mRt, yNe, a4e, gRt, l4e, hRt, d4e, yRt, i0, KQ, sHn, G8t, QM, to, Rl, ol, Lp, Yr, X8t, QA, HT, da, tv, oit } from "./chunk-z09tf6qf.js";

import { ge } from "./chunk-07cck4g7.js";

import { qg, pX, pr, eln, Lt } from "./chunk-9yajep3y.js";

import { Cj } from "./chunk-r276nwd3.js";

import { Xl } from "./chunk-r2h53bm2.js";

import { wn, uu } from "./chunk-s2t7g8m9.js";

import { hm, wce, sbe } from "./chunk-gwz0gszt.js";

import { iSt } from "./chunk-shampfde.js";

import { kBr, DWo, G7e, P_t, G1t, Vte, fgn } from "./chunk-150qmpyg.js";

import { Yw } from "./chunk-52h8ta4x.js";

import { pB, Wq, K7e, kD, TD, Sgn } from "./chunk-ttxqfpv1.js";

import { MMn } from "./chunk-bp2n0w3d.js";

import { fg } from "./chunk-wrjghg6d.js";

import { x7e } from "./chunk-08epf95w.js";

import { PBt, aze } from "./chunk-z9mzwwd6.js";

import { Uf, Zc } from "./chunk-am6xk4a3.js";

import { RPn, B5t, YKe, h_e, fLe, QKe, G5t, Udr, PPn, IPn, wre, V5t, Bdr, yas } from "./chunk-84yp45y8.js";

import { jQt, x7 } from "./chunk-7w62r1zx.js";

import { mBr, j7e, EBr } from "./chunk-fj1a15yf.js";

import { iw } from "./chunk-zmwkmyej.js";

import { f2, lbt } from "./chunk-ssq4yy0z.js";

import { SXo } from "./chunk-7de0e9qj.js";

import { rp } from "./chunk-j31ahx42.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { me, yn, lr, St } from "./chunk-dexzwy8h.js";

import { at } from "./chunk-0bq6eb61.js";

import { Mg } from "./chunk-j7qcpyv8.js";

import { ye } from "./chunk-ne9evs39.js";

import { O } from "./chunk-1xnsr4dy.js";

import { lstat as tt, mkdir as Jn, readdir as Hn, rename as Xt, unlink as et } from "fs/promises";

import { join as he } from "path";

var Zt = 9e5, wt = 864e5;

function We(e, n) {
  return n - e >= wt || e > n + 6e4;
}

var Qt = /^[A-Za-z0-9-]{1,64}$/;

function ot(e) {
  return he(gue(), `${e}.json`);
}

var rt = 8192;

function $e(e) {
  return Fe.daemon([ MNn, e ]);
}

function yt(e) {
  return $e(`${e}.json`);
}

var en = Mg();

function st(e, n) {
  return en.run("g:" + e, n).catch(() => {});
}

async function sze(e, n, o) {
  if (!Qt.test(e)) return;
  let r = {
    gestureId: e,
    surface: n,
    startedAtEpochMs: Date.now(),
    attempt: 0
  };
  RL().ownedBeacons.set(e, r), await st(e, async () => {
    if (r.pid = process.pid, r.procStart = await d_(), o) {
      if (!await kt(o, e, r, !0)) RL().ownedBeacons.delete(e);
      return;
    }
    if (await Jn(gue(), {
      recursive: !0,
      mode: 448
    }), !await Ee()) {
      RL().ownedBeacons.delete(e);
      return;
    }
    if (RL().ownedBeacons.get(e) !== r) return;
    await Tn(ot(e), _(r), 384);
  }), await zn(o);
}

async function kt(e, n, o, r = !1) {
  if (!await Ee(r)) return !1;
  if (RL().ownedBeacons.get(n) === o) await e.write(yt(n), _(o));
  return !0;
}

function tn(e, n, o) {
  let r = RL().ownedBeacons.get(e);
  if (!r || !Number.isInteger(n) || n <= (r.attempt ?? 0)) return;
  r.attempt = n, st(e, async () => {
    if (r.procStart ??= await d_(), o) {
      await kt(o, e, r);
      return;
    }
    if (!await Ee()) return;
    if (RL().ownedBeacons.get(e) !== r) return;
    await Tn(ot(e), _(r), 384);
  });
}

function Myt(e, n, o) {
  let r = RL().ownedBeacons.get(e);
  if (!r) return;
  if (n.marksExpected !== void 0) r.marksExpected = r.marksExpected === !0 || n.marksExpected;
  if (n.daemonBooted !== void 0) r.daemonBooted = r.daemonBooted === !0 || n.daemonBooted;
  if (n.interactiveReached) r.interactiveReached = !0;
  if (n.attachMs !== void 0) r.attachMs ??= n.attachMs;
  if (n.msgsLoaded !== void 0) r.msgsLoaded ??= n.msgsLoaded;
  if (n.msgsInJsonl !== void 0) r.msgsInJsonl ??= n.msgsInJsonl;
  if (n.msgsRenderedAtFirstPaint !== void 0) r.msgsRenderedAtFirstPaint ??= n.msgsRenderedAtFirstPaint;
  if (n.attachCold !== void 0 && r.interactiveReached !== !0) r.attachCold = n.attachCold;
  if (n.via !== void 0 && r.interactiveReached !== !0) r.via = n.via;
  st(e, async () => {
    if (r.procStart ??= await d_(), o) {
      await kt(o, e, r);
      return;
    }
    if (!await Ee()) return;
    if (RL().ownedBeacons.get(e) !== r) return;
    await Tn(ot(e), _(r), 384);
  });
}

async function D$(e, n) {
  if (!Qt.test(e)) return;
  RL().ownedBeacons.delete(e), await st(e, async () => {
    if (n) {
      if (!await Ee()) return;
      let r = !1;
      for (let u = 0; ;u++) {
        let s = await n.delete(yt(e));
        if (s.ok) return;
        let h = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (r = h !== void 0 && IG.has(h), r && O() === "windows" && u < Yt - 1) {
          await J(qt);
          continue;
        }
        break;
      }
      if (!r) return;
      await n.write(yt(e), "{}");
      return;
    }
    let o = ot(e);
    if (!await Ee()) return;
    for (let r = 0; ;r++) try {
      await et(o);
      return;
    } catch (u) {
      let s = E(u);
      if (s === "ENOENT") return;
      if (O() === "windows" && s !== void 0 && IG.has(s) && r < Yt - 1) {
        await J(qt);
        continue;
      }
      break;
    }
    await Xt(o, `${o}.${process.pid}.cleared`).catch(() => {});
  });
}

var Yt = 4, qt = 50;

async function Ee(e = !1) {
  try {
    return (await tt(gue())).isDirectory();
  } catch (n) {
    return e && E(n) === "ENOENT";
  }
}

async function Gn(e) {
  try {
    let n = await Xa(he(gue(), e), rt);
    if (n === null) return null;
    return nn(n);
  } catch {
    return null;
  }
}

async function Kn(e, n) {
  let o = $e(n), r = await e.statMeta(o);
  if (!r.ok || r.value.size > rt) return null;
  let u = await e.read([ o ]);
  if (!u.ok) return null;
  let s = u.value.items[0];
  if (!s.found || s.totalBytes > rt) return null;
  let h = nn(Buffer.from(s.value).toString("utf8"));
  return h === null ? null : {
    entry: h,
    version: s.version,
    mtimeMs: s.mtimeMs
  };
}

function nn(e) {
  try {
    let n = Y(e);
    return !!n && typeof n === "object" && typeof n.gestureId === "string" && typeof n.startedAtEpochMs === "number" && Number.isFinite(n.startedAtEpochMs) && n.startedAtEpochMs <= Date.now() + 6e4 ? n : null;
  } catch {
    return null;
  }
}

async function rn(e) {
  if (typeof e.pid !== "number" || !Number.isInteger(e.pid) || e.pid <= 0) return !1;
  if (!Aa(e.pid)) return !0;
  if (e.procStart === void 0) return !1;
  let n = await Ul(e.pid);
  return n !== void 0 && n !== e.procStart;
}

async function Vn(e, n) {
  try {
    let o = await tt(he(gue(), e));
    return We(o.mtimeMs, n);
  } catch {
    return !1;
  }
}

function zn(e) {
  return en.run("reconcile", () => Yn(e));
}

async function Yn(e) {
  if (e) return qn(e);
  if (!await Ee()) return [];
  let n;
  try {
    n = await Hn(gue());
  } catch {
    return [];
  }
  let o = Date.now(), r = [];
  for (let u of n) {
    if (!u.endsWith(".json")) {
      try {
        let k = await tt(he(gue(), u));
        if (We(k.mtimeMs, o)) await et(he(gue(), u));
      } catch {}
      continue;
    }
    let s = await Gn(u);
    if (s === null) {
      try {
        let k = await tt(he(gue(), u));
        if (We(k.mtimeMs, o)) await et(he(gue(), u));
      } catch {}
      continue;
    }
    let h = o - s.startedAtEpochMs;
    if (!(typeof s.pid === "number" && Number.isInteger(s.pid) && s.pid > 0 ? h >= Zt && (await rn(s) || s.procStart === void 0 && await Vn(u, o)) : h >= wt)) {
      r.push(s);
      continue;
    }
    let T = he(gue(), `${u}.${process.pid}.claimed`);
    try {
      await Xt(he(gue(), u), T);
    } catch {
      continue;
    }
    await et(T).catch(() => {}), on(s);
  }
  return r;
}

function on(e) {
  let n = e.interactiveReached === !0, o = !n && e.marksExpected === !1, r = n && typeof e.attachMs === "number" && Number.isFinite(e.attachMs) && e.attachMs >= 0 && e.attachMs < 864e5 ? Math.round(e.attachMs) : void 0;
  i("tengu_bg_attach_outcome", {
    outcome: c(n || o ? "detached" : "error"),
    got_ack: n || typeof e.marksExpected === "boolean",
    got_first_frame: n ? !0 : o ? void 0 : !1,
    synthetic: !0,
    apc_detach: !1,
    timed_out: n || o ? void 0 : !0,
    journal_recovered: !0,
    attach_ms: r,
    first_frame_kind: pe(n ? "real" : void 0),
    marks_expected: n ? !0 : typeof e.marksExpected === "boolean" ? e.marksExpected : void 0,
    attempt: typeof e.attempt === "number" && Number.isInteger(e.attempt) && e.attempt >= 0 && e.attempt < 1e6 ? e.attempt + 1 : 0,
    gesture_id: ye(e.gestureId),
    surface: pe(e.surface === "fleet" || e.surface === "bg_cli" ? e.surface : void 0),
    daemon_booted: typeof e.daemonBooted === "boolean" ? e.daemonBooted : void 0,
    attach_cold: typeof e.attachCold === "boolean" ? e.attachCold : void 0,
    via: pe(lbt(e.via)),
    msgs_loaded: n ? Jst(e.msgsLoaded) : void 0,
    msgs_in_jsonl: n ? Jst(e.msgsInJsonl) : void 0,
    msgs_rendered_at_first_paint: n ? Jst(e.msgsRenderedAtFirstPaint) : void 0
  });
}

async function qn(e) {
  if (!await Ee()) return [];
  let n = [], o;
  do {
    let s = await e.listEntries({
      namespace: "daemon",
      relPath: [ MNn ]
    }, o === void 0 ? void 0 : {
      cursor: o
    });
    if (!s.ok) return [];
    for (let h of s.value.items) {
      if (h.kind !== "key" || h.key.namespace !== "daemon" || h.key.relPath.length !== 2 || h.key.relPath[0] !== MNn) continue;
      let A = h.key.relPath[1];
      if (A !== void 0) n.push({
        file: A,
        size: h.size,
        mtimeMs: h.mtimeMs
      });
    }
    o = s.value.cursor;
  } while (o !== void 0);
  let r = Date.now(), u = [];
  for (let {file: s, size: h, mtimeMs: A} of n) {
    let w = A !== void 0 && We(A, r);
    if (!s.endsWith(".json")) {
      if (w) await e.delete($e(s));
      continue;
    }
    let T = h !== void 0 && h > rt ? null : await Kn(e, s);
    if (T === null) {
      if (w) await e.delete($e(s));
      continue;
    }
    let k = T.entry, v = r - k.startedAtEpochMs;
    if (!(typeof k.pid === "number" && Number.isInteger(k.pid) && k.pid > 0 ? v >= Zt && (await rn(k) || k.procStart === void 0 && We(T.mtimeMs, r)) : v >= wt)) {
      u.push(k);
      continue;
    }
    let j = await e.delete($e(s), {
      precondition: {
        type: "ifMatch",
        version: T.version
      }
    });
    if (!j.ok || !j.value.existed) continue;
    on(k);
  }
  return u;
}

import { randomUUID as Xn } from "crypto";

import { connect as Zn } from "net";

var Qn = 1e4, Dfn = "ENORESPONSE", Hyt = "Session isn't responding", an = {
  ENOJOB: "enojob",
  ETIMEOUT: "etimeout",
  ECWDGONE: "ecwdgone",
  EUNKNOWN: "eunknown",
  ENOREPLY: "enoreply",
  ERESPAWNING: "erespawning",
  ESTALE: "estale",
  EALIVE: "ealive",
  ESTARTING: "estarting",
  EPEERUID: "epeeruid",
  ETOOLARGE: "etoolarge",
  EUNVERIFIED: "eunverified",
  EAUTH: "eauth",
  EPROTO: "eproto",
  EHOSTDEAD: "ehostdead",
  ESKEW: "eskew"
};

function er(e) {
  return Object.hasOwn(an, e) ? an[e] : "unknown_code";
}

function tr(e) {
  if (e === void 0 || e === "") return;
  if (d4e.test(e)) return "ekicked";
  if (e.includes("ERESPAWNING")) return "erespawning";
  if (e.includes("ESTARTING")) return "estarting";
  if (e.includes("ESTALLED")) return "estalled";
  if (e.includes("EUNVERIFIED")) return "eunverified";
  if (e.includes("EHOSTDEAD")) return "ehostdead";
  if (yRt.test(e)) return "unknown_code";
  return "worker_detach";
}

function Cq(e, n, o) {
  if (!e) return;
  let r = e.interactive?.reached, u = n === "detached" ? e.interactive?.marksExpected : void 0, s = n === "detached" && r === void 0 && u === !0, h = s && e.t0 !== void 0 ? Math.round(performance.now() - e.t0) : void 0;
  i("tengu_bg_attach_outcome", {
    outcome: c(n),
    got_ack: !1,
    got_first_frame: !1,
    synthetic: !0,
    apc_detach: !1,
    failure_class: pe(n === "error" ? o ?? "daemon_unavailable" : void 0),
    gesture_id: ye(e.gestureId),
    attempt: ++e.attempt,
    surface: pe(e.surface),
    daemon_booted: e.daemonBooted,
    via: pe(e.interactive?.via),
    attach_cold: e.interactive?.attachCold,
    attach_ms: r !== void 0 ? r.attachMs : h,
    content_paint_ms: r !== void 0 ? Math.round(r.contentPaintMs) : void 0,
    prompt_idle_ms: r !== void 0 ? Math.round(r.promptIdleMs) : void 0,
    msgs_loaded: r?.msgsLoaded,
    msgs_in_jsonl: r?.msgsInJsonl,
    msgs_rendered_at_first_paint: r?.msgsRenderedAtFirstPaint,
    first_frame_kind: pe(r !== void 0 ? "real" : void 0),
    marks_expected: r !== void 0 ? !0 : u,
    attach_censored: s ? !0 : void 0
  });
}

async function Lfn(e) {
  let n = await fg({
    proto: Xd,
    op: "has",
    short: e
  });
  return n.ok && n.op === "has" && n.present === !1;
}

var vt = 2, cn = 26, ln = 100, nr = 8, rr = Buffer.from([ 127 ]), un = 98, fn = 122, dt = Buffer.from("\x1b[27;5;98~", "latin1"), mn = Buffer.from("\x1b[27;5;122~", "latin1"), or = Buffer.from("\x1b[27u", "latin1"), ar = Buffer.from("\x1b[27;1u", "latin1"), ir = 3, sr = 99, dr = Buffer.from("\x1b[27;5;99~", "latin1"), sn = Buffer.from(VQ, "ascii"), Et = Buffer.from(tHn, "ascii"), dn = Buffer.from("\x1b_cc-d", "ascii"), Je = Buffer.from("\x1b[?9001", "ascii"), cr = 100;

function Te(e, n, o) {
  return e.length - n >= o.length && e.compare(o, 0, o.length, n, n + o.length) === 0;
}

function He(e, n, o) {
  if (e[n] !== 27 || e[n + 1] !== 91) return 0;
  let r = n + 2, u = () => {
    let w = -1;
    for (let T = 0; T < 8 && r < e.length; T++) {
      let k = e[r];
      if (k < 48 || k > 57) break;
      w = (w < 0 ? 0 : w) * 10 + (k - 48), r++;
    }
    return w;
  }, s = u();
  if (s < 0) return 0;
  let h = -1;
  if (e[r] === 58) {
    if (r++, u(), e[r] === 58) r++, h = u();
  }
  if (e[r] !== 59 || e[r + 1] !== 53 || e[r + 2] !== 117) return 0;
  return (s > 127 && h >= 0 ? h : s) === o ? r + 3 - n : 0;
}

function xe(e, n) {
  let o = Math.min(e.length, n.length - 1);
  e: for (let r = o; r > 0; r--) {
    let u = e.length - r;
    for (let s = 0; s < r; s++) if (e[u + s] !== n[s]) continue e;
    return r;
  }
  return 0;
}

var Z = Buffer.alloc(0);

function pn(e, n) {
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (n) {
      if (n = !1, r === ln) return {
        matched: !0,
        prefixArmed: !1
      };
      continue;
    }
    if (r === cn || r === ir || He(e, o, fn) || Te(e, o, mn) || He(e, o, sr) || Te(e, o, dr)) return {
      matched: !0,
      prefixArmed: !1
    };
    let u = r === vt ? 1 : He(e, o, un) || (Te(e, o, dt) ? dt.length : 0);
    if (u) o += u - 1, n = !0;
  }
  return {
    matched: !1,
    prefixArmed: n
  };
}

function hn(e) {
  let n = !1, o = !1, r, u = new Promise(h => {
    r = h;
  }), s = () => {
    if (n) return;
    let h;
    while ((h = e.read()) !== null) {
      let A = typeof h === "string" ? Buffer.from(h, "utf8") : h, w = pn(A, o);
      if (o = w.prefixArmed, w.matched) {
        n = !0, r();
        return;
      }
    }
  };
  if (e.on("readable", s), "resume" in e && "pause" in e) e.resume(), e.pause();
  return s(), {
    promise: u,
    cancel: () => {
      n = !0, e.removeListener("readable", s);
    }
  };
}

function Nfn(e) {
  return pn(e, !1).matched;
}

async function O3n(e, n = {}) {
  let o = n.stdin ?? process.stdin, r = n.stdout ?? process.stdout, u = "columns" in r ? r.columns || 120 : 120, s = "rows" in r ? r.rows || 30 : 30, h = u, A = s, w = Xn(), T = await YRe(), k = Date.now(), v = performance.now(), D = n.telemetry?.t0, U = D !== void 0 && Number.isFinite(D) && D >= 0 && D <= v && v - D < 864e5 ? D : v;
  if (n.telemetry?.gestureId !== void 0) tn(n.telemetry.gestureId, n.telemetry.attempt, n.telemetry.storageV5);
  let j, C, q, ee, V, N = Z, P = n.telemetry?.interactive?.reached, _e = !1, Ne, be = setTimeout(() => {
    if (P === void 0 && (j === void 0 || C === void 0)) _e = !0, Ne = performance.now() - U;
  }, Math.max(0, 3e4 - (v - U))), Ce = !1, te, H, ce, De, we, je, ve, Le, ae, ue = !1, fe;
  function Ve(B) {
    let R = Date.now() - k;
    if (B && fe === void 0) fe = R;
    if (ue) return;
    ue = !0, Ce = !B, i("tengu_bg_attach_first_frame", {
      ms: R,
      meaningful_ms: fe,
      ack_ms: te,
      gesture_id: ye(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      via: pe(H),
      tempo: pe(De),
      stale: je,
      state: f2(we),
      cached: Le
    });
  }
  let ze, Oe = new Promise(B => {
    ze = B;
  }), X = !1, re = !1, ie, Q = !1, oe, Mt = u, xt = s, Ye = PBt(), It = () => P_t({
    legacyKitty: ve !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  }), Bn = O() === "windows" && !mBr(), Pn = n.holdScreenOnDisconnect && O() === "windows" ? !0 : "isRaw" in o ? Boolean(o.isRaw) : !1, pt = O() === "windows", Be = Buffer.from(kD, "ascii"), Mn = Buffer.from(TD, "ascii"), Nt = pt && EBr(), Dt = !1, ht, de;
  try {
    de = Zn(jV());
  } catch (B) {
    let R = n.telemetry?.interactive?.reached, S = typeof n.telemetry?.interactive?.marksExpected === "boolean" ? n.telemetry.interactive.marksExpected : void 0;
    return i("tengu_bg_attach_outcome", {
      outcome: c("error"),
      got_ack: !1,
      got_first_frame: !1,
      ms: Date.now() - k,
      apc_detach: !1,
      failure_class: c("connect_throw"),
      gesture_id: ye(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      surface: pe(n.telemetry?.surface),
      daemon_booted: n.telemetry?.daemonBooted,
      attach_ms: R !== void 0 ? R.attachMs : S === !0 ? Math.round(performance.now() - U) : void 0,
      content_paint_ms: R !== void 0 ? Math.round(R.contentPaintMs) : void 0,
      prompt_idle_ms: R !== void 0 ? Math.round(R.promptIdleMs) : void 0,
      msgs_loaded: R?.msgsLoaded,
      msgs_in_jsonl: R?.msgsInJsonl,
      msgs_rendered_at_first_paint: R?.msgsRenderedAtFirstPaint,
      first_frame_kind: pe(R !== void 0 ? "real" : void 0),
      marks_expected: R !== void 0 ? !0 : S,
      attach_censored: R === void 0 && S === !0 ? !0 : void 0,
      via: pe(n.telemetry?.interactive?.via),
      attach_cold: n.telemetry?.interactive?.attachCold
    }), clearTimeout(be), {
      outcome: "error",
      msg: tk(l(B))
    };
  }
  de.setTimeout(1e4, () => {
    if (!re) ne("error", `${hm()} did not respond \u2014 it may be stalled${sbe("restart")}`, {
      failureClass: "ack_timeout"
    });
  });
  function ne(B, R, S) {
    if (X) return;
    let {viaApc: M, beforeFirstFrame: y, failureClass: L} = S ?? {};
    X = !0, clearTimeout(ht), clearTimeout(be), clearTimeout(ie);
    let F = Math.round(performance.now() - U), x = j !== void 0 && C !== void 0 ? Math.round(Math.max(j, C)) : void 0, G = ae !== void 0 || n.telemetry?.interactive?.marksExpected === !0, K = P === void 0 && G && _e && x === void 0, Se = P === void 0 && G && !K && x === void 0, jn = P !== void 0 ? P.attachMs : K ? Math.round(Ne ?? F) : Se ? F : x, $n = P !== void 0 ? "real" : x !== void 0 ? "real" : ue ? Ce && fe === void 0 ? "dimhint" : "unknown" : void 0;
    if (i("tengu_bg_attach_outcome", {
      outcome: c(B),
      got_ack: re,
      got_first_frame: ue,
      ms: Date.now() - k,
      gesture_id: ye(n.telemetry?.gestureId),
      attempt: n.telemetry?.attempt,
      via: pe(n.telemetry?.interactive?.via ?? H),
      tempo: pe(De),
      apc_detach: M === !0,
      failure_class: pe(L),
      state: f2(we),
      cached: Le,
      meaningful_ms: fe,
      input_accepted_ms: qe,
      input_delivered_ms: qe,
      keys_dropped: $t,
      attach_ms: jn,
      content_paint_ms: P !== void 0 ? Math.round(P.contentPaintMs) : j !== void 0 ? Math.round(j) : void 0,
      prompt_idle_ms: P !== void 0 ? Math.round(P.promptIdleMs) : C !== void 0 ? Math.round(C) : void 0,
      timed_out: K,
      attach_censored: Se,
      marks_expected: P !== void 0 ? !0 : re || typeof n.telemetry?.interactive?.marksExpected === "boolean" ? G : void 0,
      attach_cold: n.telemetry?.interactive?.attachCold ?? (H !== void 0 ? H === "cold" && (ce ?? !0) : void 0),
      daemon_booted: n.telemetry?.daemonBooted,
      surface: pe(n.telemetry?.surface),
      first_frame_kind: pe($n),
      msgs_loaded: P?.msgsLoaded ?? q,
      msgs_in_jsonl: P?.msgsInJsonl ?? ee,
      msgs_rendered_at_first_paint: P?.msgsRenderedAtFirstPaint ?? V
    }), re) {
      let Wn = n.alreadyInAlt || B === "disconnected" && n.holdScreenOnDisconnect;
      r.write(K7e + Ye.snapshot().map(Wq).reverse().join("") + kD + (O() === "windows" ? Sgn : "") + "\x1b[0m\x1b7" + Mee + "\x1b8" + (G7e() ? MMn : "") + (Wn ? "" : Vte()));
    }
    if (!Pn) iw(o, !1);
    if (o.removeListener("readable", _t), o.removeListener("end", Wt), "removeListener" in r) r.removeListener("resize", gt);
    clearTimeout(oe), de.destroy(), ze({
      outcome: B,
      msg: R,
      viaApc: M,
      beforeFirstFrame: y
    });
  }
  function In() {
    ne("error", `${Dfn}: ${Hyt}`, {
      failureClass: "no_response"
    });
  }
  function gt() {
    if (X) return;
    if (oe === void 0) Mt = h, xt = A;
    h = "columns" in r ? r.columns || u : u, A = "rows" in r ? r.rows || s : s, clearTimeout(oe), 
    oe = setTimeout(() => {
      if (oe = void 0, X) return;
      if (h < Mt || A < xt) r.write(Rk + uS);
      jt(), fg({
        proto: Xd,
        op: "resize",
        short: e,
        cols: h,
        rows: A,
        attachId: w
      });
    }, 50);
  }
  let Ft = performance.now();
  function jt() {
    let B = Ye.snapshot();
    if (!B.includes(1004)) return;
    r.write(It() + B.map(pB).join(""));
  }
  let Ut = n.gateStdinUntilFirstFrame === !0 && "isTTY" in o && o.isTTY === !0, qe, $t = 0, Nn = njo();
  function Re(B) {
    let R = () => Nn(B.toString("latin1"));
    if (!Ut || ue) {
      if (qe === void 0 && !R()) qe = Date.now() - k;
      de.write(B);
    } else if (!R()) $t++;
  }
  function Dn(B) {
    if (X) return;
    let R = typeof B === "string" ? Buffer.from(B, "utf8") : B, S = 0;
    for (let M = 0; M < R.length; M++) {
      let y = R[M];
      if (Q) {
        if (Q = !1, M > S) Re(R.subarray(S, M));
        if (y === ln) return ne("detached");
        Re(Buffer.from([ vt, y ])), S = M + 1;
        continue;
      }
      if (Ut && !ue && (y === 27 && R.length === 1 || Te(R, M, or) || Te(R, M, ar))) return ne("detached", void 0, {
        beforeFirstFrame: !0
      });
      if (y === cn || He(R, M, fn) || Te(R, M, mn)) {
        if (M > S) Re(R.subarray(S, M));
        return ne("detached");
      }
      if (Bn && y === nr) {
        if (M > S) Re(R.subarray(S, M));
        Re(rr), S = M + 1;
        continue;
      }
      let L = y === vt ? 1 : He(R, M, un) || (Te(R, M, dt) ? dt.length : 0);
      if (L) {
        if (M > S) Re(R.subarray(S, M));
        M += L - 1, S = M + 1, Q = !0;
      }
    }
    if (S < R.length) Re(R.subarray(S));
  }
  function _t() {
    let B = performance.now();
    if (B - Ft > fgn) jt();
    Ft = B;
    let R;
    while ((R = o.read()) !== null) Dn(R);
  }
  function Wt() {
    ne("detached");
  }
  let Ue = Z, Xe = Z, Pe = Z, Ae = Z;
  function Jt(B) {
    if (!pt) return B;
    let R = Pe.length > 0, S = R ? Buffer.concat([ Pe, B ]) : B;
    if (R) Pe = Z;
    if (Nt) {
      let K = S.lastIndexOf(Be), Se = S.lastIndexOf(Mn);
      if (K !== Se) Dt = K > Se;
    }
    let M = S.indexOf(Be);
    if (M < 0) {
      let K = xe(S, Be);
      if (K === 0) return S;
      return Pe = Buffer.from(S.subarray(S.length - K)), S.subarray(0, S.length - K);
    }
    let y = [], L = 0, F = M;
    for (;;) {
      if (F > L) y.push(S.subarray(L, F));
      if (L = F + Be.length, F = S.indexOf(Be, L), F < 0) break;
    }
    let x = S.subarray(L), G = xe(x, Be);
    if (G > 0) Pe = Buffer.from(x.subarray(x.length - G));
    if (x.length > G) y.push(x.subarray(0, x.length - G));
    if (y.length === 0) return Z;
    if (y.length === 1) return y[0];
    return Buffer.concat(y);
  }
  function Ht(B) {
    let R = Ae.length > 0, S = R ? Buffer.concat([ Ae, B ]) : B;
    if (R) Ae = Z;
    let M = S.indexOf(Je);
    if (M < 0) {
      let x = xe(S, Je);
      if (x === 0) return S;
      return Ae = Buffer.from(S.subarray(S.length - x)), S.subarray(0, S.length - x);
    }
    let y = [], L = 0, F = M;
    while (F >= 0) {
      let x = F + Je.length;
      if (x >= S.length) {
        if (F > L) y.push(S.subarray(L, F));
        Ae = Buffer.from(S.subarray(F)), L = S.length;
        break;
      }
      let G = S[x];
      if (G === 104 || G === 108) {
        if (F > L) y.push(S.subarray(L, F));
        L = x + 1;
      }
      F = S.indexOf(Je, Math.max(L, F + 1));
    }
    if (L < S.length) {
      let x = S.subarray(L), G = xe(x, Je);
      if (G > 0) Ae = Buffer.from(x.subarray(x.length - G));
      if (x.length > G) y.push(x.subarray(0, x.length - G));
    }
    if (y.length === 0) return Z;
    if (y.length === 1) return y[0];
    return Buffer.concat(y);
  }
  let Gt = n.alreadyInAlt && !n.holdingFrame;
  function Kt(B) {
    let {out: R, meaningful: S, renders: M} = Fn(B);
    if (R.length === 0) return;
    if (!M) {
      r.write(R);
      return;
    }
    if (Gt) Gt = !1, r.write(Rk + uS);
    r.write(R), Ye.feed(R.toString("latin1"), y => {
      if (y === 1004) {
        let L = It();
        if (L) r.write(L);
      }
    }), Ve(S);
  }
  let Ze = Z, Qe = !1, Me = !1, bt = !1;
  function Vt(B) {
    let R = !1, S = 0;
    if (bt) {
      if (bt = !1, Me = !1, B[0] === 92) S = 1;
    }
    while (S < B.length) {
      if (Me) {
        let y = S;
        while (y < B.length && B[y] !== 27 && B[y] !== 24 && B[y] !== 26) y++;
        if (y >= B.length) return R;
        if (B[y] !== 27) {
          Me = !1, S = y + 1;
          continue;
        }
        if (y === B.length - 1) return bt = !0, R;
        if (B[y + 1] === 92) {
          Me = !1, S = y + 2;
          continue;
        }
        Me = !1, S = y;
        continue;
      }
      let M = B.indexOf(dn, S);
      if (M < 0) return !0;
      R ||= M > S, Me = !0, S = M + dn.length;
    }
    return R;
  }
  function Fn(B) {
    let R = Ze.length > 0 ? Buffer.concat([ Ze, B ]) : B;
    Ze = Z;
    let S = !1, M = !1, y = [], L = 0;
    for (;;) {
      let K = R.indexOf(Et, L);
      if (K < 0) break;
      if (K > L) {
        let Se = R.subarray(L, K);
        if (y.push(Se), !Qe) S = Vt(Se) || S; else M = !0;
      }
      Qe = !Qe, L = K + Et.length;
    }
    let F = R.subarray(L), x = xe(F, Et);
    if (x > 0) Ze = Buffer.from(F.subarray(F.length - x)), F = F.subarray(0, F.length - x);
    if (F.length > 0) if (y.push(F), !Qe) S = Vt(F) || S; else M = !0;
    return {
      out: y.length === 0 ? Z : y.length === 1 ? y[0] : Buffer.concat(y),
      meaningful: S,
      renders: S || M
    };
  }
  function zt(B) {
    if (X) return;
    let R = ae !== void 0 && P === void 0 && (j === void 0 || C === void 0), S = yso(N, B, {
      requireNonce: ae
    });
    N = S.carry;
    let M = S.cleaned;
    if (R) for (let x of S.marks) {
      let G = performance.now() - U;
      if (x.kind === "content_paint" && j === void 0) j = G, q = x.msgsLoaded, ee = x.msgsInJsonl, 
      V = x.msgsRenderedAtFirstPaint; else if (x.kind === "prompt_idle" && C === void 0) C = G;
      if (j !== void 0 && C !== void 0) {
        clearTimeout(be);
        let K = Math.round(Math.max(j, C));
        if (n.telemetry?.interactive !== void 0) n.telemetry.interactive.reached = {
          attachMs: K,
          contentPaintMs: j,
          promptIdleMs: C,
          msgsLoaded: q,
          msgsInJsonl: ee,
          msgsRenderedAtFirstPaint: V
        };
        if (n.telemetry?.gestureId !== void 0) Myt(n.telemetry.gestureId, {
          interactiveReached: !0,
          attachMs: K,
          msgsLoaded: q,
          msgsInJsonl: ee,
          msgsRenderedAtFirstPaint: V
        }, n.telemetry.storageV5);
      }
    }
    let y = Xe.length > 0 ? Buffer.concat([ Xe, M ]) : M, L = y.indexOf(sn);
    if (L >= 0) {
      let x = y.subarray(0, L);
      if (L > 0) {
        let K = Ht(Jt(x));
        if (K.length > 0) Kt(K);
      }
      Xe = Z, Pe = Z, Ae = Z;
      let G = bso(x);
      return ne("detached", G, {
        viaApc: !0,
        failureClass: tr(G)
      });
    }
    let F = xe(y, sn);
    if (y.length > F) {
      let x = y.subarray(0, y.length - F), G = Ht(Jt(x));
      if (G.length > 0) Kt(G);
    }
    if (Xe = F > 0 ? Buffer.from(y.subarray(y.length - F)) : Z, Nt) clearTimeout(ht), 
    ht = setTimeout(() => {
      if (!X && Dt) r.write(kD);
    }, cr);
  }
  return de.on("data", B => {
    if (X) return;
    if (re) {
      clearTimeout(ie), zt(B);
      return;
    }
    Ue = Buffer.concat([ Ue, B ]);
    let R = Ue.indexOf(10);
    if (R < 0) return;
    let S = Ue.subarray(0, R).toString("utf8"), M = Ue.subarray(R + 1), y;
    try {
      y = Y(S);
    } catch (G) {
      return ne("error", `bad ack: ${l(G)}`, {
        failureClass: "bad_ack"
      });
    }
    if (typeof y !== "object" || y === null) return ne("error", "bad ack: non-object ack line", {
      failureClass: "bad_ack"
    });
    if (!y.ok) return ne("error", `${y.code}: ${y.error}`, {
      failureClass: er(y.code)
    });
    if (re = !0, de.setTimeout(0), !n.holdingFrame && M.length === 0) ie = setTimeout(In, Qn);
    if (te = Date.now() - k, H = y.op === "attach" ? lbt(y.via) : void 0, ce = y.op === "attach" && typeof y.booting === "boolean" ? y.booting : void 0, 
    ae = y.op === "attach" && typeof y.imarkNonce === "string" ? y.imarkNonce : void 0, 
    n.telemetry?.gestureId !== void 0) Myt(n.telemetry.gestureId, {
      marksExpected: ae !== void 0,
      daemonBooted: typeof n.telemetry.daemonBooted === "boolean" ? n.telemetry.daemonBooted : void 0,
      attachCold: H !== void 0 ? H === "cold" && (ce ?? !0) : void 0,
      via: H
    }, n.telemetry.storageV5);
    if (n.telemetry?.interactive !== void 0) {
      if (n.telemetry.interactive.marksExpected = n.telemetry.interactive.marksExpected === !0 || ae !== void 0, 
      H !== void 0 && n.telemetry.interactive.reached === void 0) n.telemetry.interactive.attachCold = H === "cold" && (ce ?? !0), 
      n.telemetry.interactive.via = H;
    }
    if (De = y.op === "attach" ? y.tempo : void 0, we = y.op === "attach" ? y.state : void 0, 
    je = y.op === "attach" ? y.stale : void 0, ve = y.op === "attach" ? y.workerCliVersion : void 0, 
    Le = y.op === "attach" ? y.cached : void 0, a.TMUX && !RL().tmuxRgbApplied) RL().tmuxRgbApplied = !0, 
    it("tmux", [ "set", "-as", "terminal-features", ",*:RGB" ]);
    let F = ((y.op === "attach" ? y.decModes : void 0) ?? []).map(pB).join("");
    if (Ye.feed(F), "ref" in o) o.ref();
    iw(o, !0);
    let x = ve !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION;
    if (r.write(n.alreadyInAlt ? TD + P_t({
      legacyKitty: x
    }) + F : G1t({
      legacyKitty: x
    }) + F + (pt ? TD : "") + `\n  \x1b[2mAttaching\u2026\x1b[0m\n`), "on" in r) r.on("resize", gt);
    if ("columns" in r && (r.columns || u) !== u || "rows" in r && (r.rows || s) !== s) gt();
    if (o.on("readable", _t), "resume" in o && "pause" in o) o.resume(), o.pause();
    if (o.once("end", Wt), _t(), M.length) zt(M);
  }), de.on("error", B => ne("error", tk(l(B)), {
    failureClass: "socket_error"
  })), de.once("close", () => {
    if (!X) ne(re ? "disconnected" : "error", "control socket closed", {
      failureClass: "socket_closed"
    });
  }), de.once("connect", () => {
    de.write(_({
      proto: Xd,
      op: "attach",
      short: e,
      auth: T,
      cols: u,
      rows: s,
      attachId: w,
      caps: {
        ...ur(),
        ...n.sessionTabs !== void 0 && {
          sessionTabs: n.sessionTabs,
          ...n.tabsLanding && {
            tabsLanding: n.tabsLanding
          }
        }
      },
      ...n.holdingFrame && {
        holdingFrame: !0
      }
    }) + `\n`);
  }), Oe;
}

function ur() {
  return {
    imark: !0,
    terminal: a.terminal,
    mux: a.TMUX ? "tmux" : process.env.ZELLIJ != null ? "zellij" : a.STY ? "screen" : null,
    ssh: a.isSSH(),
    wheelFlood: kBr(),
    hyperlinks: Yw(),
    progressReporting: G7e(),
    wtSession: !!a.WT_SESSION,
    isVscodeTerm: a.TERM_PROGRAM === "vscode",
    keyDialect: iSt(a.TERM),
    browser: a.BROWSER ?? null,
    colorLevel: ge.level,
    syncOutput: DWo(),
    editor: a.VISUAL || a.EDITOR || null,
    systemTheme: SXo(),
    ...a.TMUX && {
      tmuxSocket: nt(a.TMUX, ",")
    }
  };
}

import { randomUUID as vr } from "crypto";

import { lstat as Rr, readdir as Ar, realpath as Ke, rm as Tr, unlink as Cr, writeFile as Or } from "fs/promises";

import { isAbsolute as mt, join as Pt, normalize as Pr, relative as Mr } from "path";

import { readFile as fr, unlink as mr } from "fs/promises";

import { join as hr } from "path";

var gr = 250, _r = 6048e5, br = 256, yr = p(() => St({
  writtenAtMs: yn().optional(),
  shells: lr(St({
    pid: yn().int().positive(),
    procStart: me().optional(),
    startTimeTicks: yn().int().optional()
  })).catch([])
}));

async function gn(e, n = {}) {
  let o = hr(e, "adopt.json"), r = `${o}.reap.${process.pid}`, u = Date.now() + (n.waitMs ?? 0);
  for (;;) try {
    await ls(o, r);
    break;
  } catch (s) {
    if (Date.now() >= u) {
      if (!W(s)) t(`[adopt] reap claim failed: ${s}`, {
        level: "warn"
      });
      return {
        found: !1,
        reaped: 0
      };
    }
    await J(gr);
  }
  try {
    let s = yr().safeParse(Y(await fr(r, "utf-8")));
    if (!s.success) return {
      found: !0,
      reaped: 0
    };
    let {writtenAtMs: h, shells: A} = s.data, w = h !== void 0 ? Date.now() - h : void 0;
    if (w !== void 0 && w > _r || A.length > br) return t(`[adopt] reap skipped: implausible payload (age ${w ?? "?"}ms, ${A.length} entries)`, {
      level: "warn"
    }), {
      found: !0,
      reaped: 0
    };
    if (await Promise.all(A.map(T => x7e(T.pid, T.startTimeTicks, T.procStart))), A.length > 0) i("tengu_adopt_exit_reap", {
      reaped_shells: A.length
    });
    return {
      found: !0,
      reaped: A.length
    };
  } catch (s) {
    return t(`[adopt] reap read/parse failed: ${s}`, {
      level: "warn"
    }), {
      found: !0,
      reaped: 0
    };
  } finally {
    await mr(r).catch(() => {});
  }
}

var wr = 7, kr = {
  head: 40,
  tail: 20
}, Sr = {
  head: 50,
  tail: 30
}, _n = 1e3, Er = 1e6;

async function ct(e) {
  let [n, o] = await Promise.all([ Rt(e, [ "log", "--no-show-signature", `--max-count=${_n}`, "--format=%H%x00%s", "HEAD", "--not", "--remotes" ]), Rt(e, [ "symbolic-ref", "-q", "--short", "HEAD" ]) ]);
  if (n.code !== 0) return;
  let r = n.stdout.split(`\n`).map(s => s.split("\0")).filter(s => s.length === 2 && s[0] !== ""), u = r[0];
  if (u === void 0 || !pX(u[0])) return;
  return {
    branch: o.code === 0 ? Xl(o.stdout, Sr) || null : null,
    count: r.length,
    headSha: u[0],
    shortSha: u[0].slice(0, wr),
    subject: Xl(u[1], kr)
  };
}

function tFr(e) {
  return `${e.count}${bn(e)} unpushed ${I(e.count, "commit")} on ${e.branch ?? "detached HEAD"}`;
}

function tjo(e) {
  let n = e.count > 1 ? ` and ${e.count - 1}${bn(e)} more` : "";
  return `${tFr(e)}: ${[ e.shortSha, e.subject ].filter(Boolean).join(" ")}${n}`;
}

async function At(e, n) {
  if (!pX(n)) return !1;
  let o = await Rt(e, [ "rev-parse", "HEAD" ]);
  return o.code === 0 && o.stdout.trim() === n;
}

async function Rt(e, n) {
  return ft(Lt(), [ ...xn, ...n ], {
    cwd: e,
    env: As(),
    maxBuffer: Er
  });
}

function bn(e) {
  return e.count >= _n ? "+" : "";
}

var EBt = "recap.trigger";

function xr(e, n) {
  if (z() && n !== void 0) {
    let o = Fe.job(e, [ EBt ]);
    if (qg(o) === void 0) {
      n.write(o, "", {
        publishDiscipline: "inPlace"
      }).catch(() => {});
      return;
    }
  }
  Or(Pt(to(e), EBt), "").catch(() => {});
}

async function ZEe(e, n, o, r) {
  if (n?.backend === "peer") return {
    confirmed: !0
  };
  let u = o?.handoff ? !0 : void 0, s = o?.evict ? !0 : void 0, h = o?.knownGone ? {
    ok: !1,
    code: "ENOJOB",
    error: "job already gone (caller-verified)"
  } : await fg({
    proto: Xd,
    op: "kill",
    short: e,
    handoff: u,
    evict: s
  });
  for (let A = 0; !h.ok && h.code === "ESTARTING" && A < 10; A++) await J(200), h = await fg({
    proto: Xd,
    op: "kill",
    short: e,
    handoff: u,
    evict: s
  });
  if (h.ok) return {
    confirmed: !0
  };
  if (h.code === "ENOJOB" || h.code === "ENOCONN" || h.code === "ETIMEOUT") {
    let A = await M3n(e, r);
    if (A.anyMatch && h.code === "ENOJOB") return {
      confirmed: A.confirmed
    };
    let w = !1, T = !1;
    if (h.code === "ENOCONN" || h.code === "ETIMEOUT") {
      let k;
      if (A.anyMatch) k = A.confirmed; else {
        let v = await i0({
          silent: !0
        }, r), D = v.workers[e];
        if (D !== void 0) {
          let U = await sHn(D.pid, D.procStart);
          if (U === "zombie") if (D.procStart !== void 0 && await gh(D.pid, D.procStart) === !0) {
            try {
              process.kill(-D.pid, "SIGKILL");
            } catch {
              try {
                process.kill(D.pid, "SIGKILL");
              } catch {}
            }
            k = !0;
          } else k = !1; else k = U !== "live";
        } else {
          let U = h.code === "ENOCONN" && !A.scanFailed && !v.parseFailed;
          w = U && n?.state !== void 0 && da({
            state: n.state,
            tempo: n.tempo
          }), k = w, T = U && !k;
        }
      }
      if (s && k && h.code === "ENOCONN" && !w) await KQ(v => {
        delete v.workers[e];
      }, r).catch(v => d(v));
      return T ? {
        confirmed: k,
        noWorkerFound: T
      } : {
        confirmed: k
      };
    }
    return {
      confirmed: !0
    };
  }
  return {
    confirmed: !1,
    error: h.error
  };
}

async function M3n(e, n) {
  let o = await aze(nk(e)), r = !1, u = !0, s = !1, h = await x7(n).catch(() => (s = !0, 
  []));
  for (let A of h) if (A.kind === "bg" && (A.jobId === e || A.sessionId?.startsWith(e))) {
    if (r = !0, !o) try {
      process.kill(A.pid, "SIGTERM");
    } catch {}
    let w = Date.now() + 3e3, T = !0;
    while ((T = await G8t(A.pid, A.procStart)) && Date.now() < w) await J(100);
    if (T) {
      i("tengu_bg_killjob_ctrl_fallback", {
        ctrlSent: o
      });
      try {
        process.kill(A.pid, "SIGTERM");
      } catch {}
      let k = Date.now() + 500;
      while ((T = await G8t(A.pid, A.procStart)) && Date.now() < k) await J(100);
    }
    if (T) u = !1;
  }
  return {
    confirmed: u,
    anyMatch: r,
    scanFailed: s
  };
}

async function kBt(e) {
  let n = await fg({
    proto: Xd,
    op: "list"
  });
  if (n.ok && n.op === "list") return {
    shorts: new Set(n.jobs.map(s => s.short)),
    records: n.jobs.filter(s => !s.outcome)
  };
  let o = await i0({
    silent: !0
  }, e), r = Object.entries(o.workers), u = await Promise.all(r.map(([, s]) => G8t(s.pid, s.procStart)));
  return {
    shorts: new Set(r.filter((s, h) => u[h]).map(([s]) => s)),
    records: []
  };
}

async function $fn(e, n) {
  let o = await fg({
    proto: Xd,
    op: "has",
    short: e
  });
  if (o.ok && o.op === "has") return {
    alive: o.alive,
    present: o.present ?? o.alive,
    daemonUp: !0
  };
  let r = (await i0({
    silent: !0
  }, n)).workers[e], u = r !== void 0 && await G8t(r.pid, r.procStart);
  return {
    alive: u,
    present: u,
    daemonUp: !1
  };
}

async function nFr(e) {
  let n = await fg({
    proto: Xd,
    op: "has",
    short: e
  });
  return n.ok && n.op === "has" ? n.present ?? n.alive : !1;
}

function XQe(e, n) {
  let o = e.tempo === "blocked" && e.state !== "blocked" && e.block === void 0 && yas(e.needs);
  return {
    ...e,
    ...oit(e) && {
      state: "working"
    },
    detail: Zc(ds(n).replace(/\s+/g, " ").trim(), Uf),
    ...!o && {
      tempo: "active",
      needs: void 0,
      block: void 0
    },
    suggestedReply: void 0,
    output: null,
    updatedAt: (new Date).toISOString()
  };
}

var RMe = "That session isn't running \u2014 respawn it first", H3n = "Can't send \u2014 that session is running in another terminal";

function vn() {
  return `Couldn't reach the ${hm()} \u2014 it may be restarting. Press Enter to retry`;
}

function rFr(e) {
  return e.startsWith(vn());
}

var Tt = " \u2014 your message was saved and will be sent when you next restart this session";

async function kn(e, n, o) {
  Lp(e);
  let r = await Yr(e, o);
  if (!r || xMe(n, r)) return !1;
  let u = QQe(r);
  if (u !== void 0) return u === n;
  return Cte(e, r, n, o);
}

async function JQe(e, n, o, r, u, s, {nextTurn: h = !1} = {}) {
  let A = Date.now(), w = (N, P, _e) => {
    i("tengu_bg_reply_outcome", {
      ms: Date.now() - A,
      outcome: c(N),
      error_code: pe(P),
      errno: ME(_e)
    });
  };
  if (o?.backend === "peer") {
    if (!o.sock) return g("job_reply"), w("ok"), {
      err: H3n
    };
    try {
      return await jQt(o.sock, n, s), g("job_reply"), w("ok"), null;
    } catch (N) {
      return m("job_reply", "job_reply_peer_send_failed"), w("bad", "job_reply_peer_send_failed"), 
      {
        err: `Couldn't send to that session \u2014 ${l(N)}`
      };
    }
  }
  let T = to(e), k = r ?? await Yr(T, s), v = await YRe(), D = !1, U = !1, j = async () => {
    if (h) {
      let P = await fg({
        proto: Xd,
        op: "ping"
      });
      if (!P.ok) return P;
      if (P.op !== "ping" || P.version !== {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION) return U = !0, {
        ok: !1,
        error: "its supervisor runs a different Claude Code build",
        code: "ESKEW"
      };
    }
    let N = await fg({
      proto: Xd,
      op: "reply",
      short: e,
      text: n,
      auth: v,
      ...h && {
        nextTurn: h
      }
    });
    if (!N.ok && "connected" in N && N.connected === !0) D = !0;
    return N;
  }, C = await j(), q = async () => {
    let N = 10;
    for (let P = 0; !C.ok && (C.code === "ESTARTING" || C.code === "ENOREPLY" || C.code === "ERESPAWNING") && P < N; P++) {
      if (C.code === "ERESPAWNING") N = 60;
      await J(200), C = await j();
    }
  };
  if (await q(), !C.ok && C.code === "EAUTH") {
    let N = await YRe();
    if (N && N !== v) v = N, C = await j();
  }
  let ee = !1;
  if (!C.ok && (C.code === "ENOCONN" || C.code === "ETIMEOUT") && !(h && D)) {
    let N = await Rq({
      forceTransient: !0
    }, s);
    if (ee = !N.ok, N.ok) v = await YRe() ?? v, C = await j(), await q();
  }
  if (C.ok) {
    if (k && !r) {
      Lp(T);
      let N = await Yr(T, s) ?? k, P = XQe(N, n);
      if (P.queuedPrompt === n) P.queuedPrompt = void 0;
      Rl(T, P, s).catch(ol);
    }
    if (!r) i("tengu_bg_agent_action", {
      action: b("reply"),
      wasTerminal: k ? HT(k.state) : !1,
      daemon: !0,
      jobSessionId: ye(o?.sessionId ?? k?.sessionId),
      ...u?.()
    }), g("job_reply"), w("ok");
    return null;
  }
  if (C.code === "ESKEW") {
    let N = U ? "job_reply_daemon_skewed" : "job_reply_worker_skewed";
    return m("job_reply", N), w("bad", N), {
      err: C.error,
      code: C.code
    };
  }
  if (C.code === "ENOJOB") {
    if (!r) f("job_reply", "job_reply_not_running"), w("sad", "job_reply_not_running");
    return {
      err: RMe,
      code: C.code
    };
  }
  if (C.code === "ENOCONN" || C.code === "ETIMEOUT") {
    if (!r && C.code === "ENOCONN") {
      let P = (await i0({
        silent: !0
      }, s)).workers[k?.daemonShort ?? e];
      if (P && !await G8t(P.pid, P.procStart)) return f("job_reply", "job_reply_not_running"), 
      w("sad", "job_reply_not_running"), {
        err: RMe,
        code: "ENOJOB"
      };
    }
    if (!r) m("job_reply", "job_reply_daemon_unreachable", {
      errno: c(C.code),
      ensure_failed: ee
    }), w("bad", "job_reply_daemon_unreachable");
    let N = !r && C.code === "ENOCONN" && !C.connected && !D && await kn(T, n, s);
    if (h && !D) return {
      err: "its supervisor did not answer" + (N ? Tt : ""),
      code: "EUNREACHABLE",
      queued: N
    };
    return {
      err: vn() + (N ? Tt : ""),
      code: C.code,
      queued: N
    };
  }
  if (!r) m("job_reply", "job_reply_send_failed"), w("bad", "job_reply_send_failed", C.code);
  let V = !r && !D && await kn(T, n, s);
  return {
    err: `Couldn't send your message \u2014 ${C.error}` + (V ? Tt : ""),
    code: C.code,
    queued: V
  };
}

async function Sn(e, n, o) {
  let r = await X8t(to(e), o);
  if (r === null) return g("job_attach"), Cq(n, "detached"), {
    kind: "error",
    ended: !0,
    msg: "That session was removed \u2014 back to the list"
  };
  if (r.state === "done" || r.state === "stopped" || r.state === "blocked") return g("job_attach"), 
  Cq(n, "detached"), {
    kind: "error",
    ended: !0,
    msg: r.state === "stopped" ? "That session was stopped \u2014 back to the list" : r.state === "blocked" ? "That session is blocked \u2014 back to the list" : "That session ended \u2014 back to the list"
  };
  if (r.state === "failed") {
    if (r.detail === yNe || r.detail === gRt) return m("job_attach", "job_attach_host_dead"), 
    Cq(n, "error"), {
      kind: "error",
      msg: r.detail === gRt ? l4e : `${a4e} \u2014 press Enter to restart it`
    };
    let u = r.detail.includes("before init");
    return f("job_attach", u ? "job_attach_pre_init_crash" : "job_attach_crash_loop"), 
    {
      kind: "error",
      ended: !0,
      crashed: !0,
      msg: `Session can't start \u2014 ${r.detail.replace(/^.*?before init(?: \u2014 )?/, "").replace(/^Error:\s*/, "") || r.detail || "it crashed repeatedly"}`
    };
  }
  return;
}

var Ct = {
  forceTransient: !0,
  standsDownAtExit: !0
};

async function oFr(e, n = {}) {
  return await Ir(e, n, {
    overStream: !1,
    onlyToRetry: !1
  });
}

async function Ir(e, n, o) {
  xr(e, n.storageV5), t("[PERF:bg-attach-start]"), j7e();
  let r = pRt, u = void 0, s = uRt, h = {
    holdScreenOnDisconnect: !0,
    alreadyInAlt: n.alreadyInAlt,
    gateStdinUntilFirstFrame: n.gateStdinUntilFirstFrame,
    sessionTabs: u,
    tabsLanding: n.tabsLanding
  }, A = {
    ...h,
    holdingFrame: !0,
    gateStdinUntilFirstFrame: !1,
    tabsLanding: void 0
  }, w = n.gesture ?? {
    gestureId: vr(),
    attempt: 0,
    interactive: {}
  }, T = !n.alreadyInAlt, k = await Ge(e, o, {
    ...h,
    telemetry: {
      gestureId: w.gestureId,
      attempt: ++w.attempt,
      t0: w.t0,
      surface: w.surface,
      daemonBooted: w.daemonBooted,
      interactive: w.interactive,
      storageV5: n.storageV5
    }
  }), v;
  if (k.outcome === "error" && k.msg && r.test(k.msg)) {
    if (v = await Rq(Ct, n.storageV5), v.ok) k = await Ge(e, o, {
      ...h,
      telemetry: {
        gestureId: w.gestureId,
        attempt: ++w.attempt,
        t0: w.t0,
        surface: w.surface,
        daemonBooted: w.daemonBooted,
        interactive: w.interactive,
        storageV5: n.storageV5
      }
    });
  }
  for (let U = 0; k.msg && s.test(k.msg) && U < 20; U++) await J(500), k = await Ge(e, o, {
    ...h,
    telemetry: {
      gestureId: w.gestureId,
      attempt: ++w.attempt,
      t0: w.t0,
      surface: w.surface,
      daemonBooted: w.daemonBooted,
      interactive: w.interactive,
      storageV5: n.storageV5
    }
  });
  let D = async () => {
    if (T) process.stdout.write(Vte());
    let U = await Sn(e, w, n.storageV5);
    if (U) return U;
    return f("job_attach", "job_attach_crashed"), {
      kind: "error",
      orphaned: !0,
      msg: "Session crashed \u2014 press Enter to respawn"
    };
  };
  while (k.outcome === "disconnected") {
    if (wn()) {
      if (T) process.stdout.write(Vte());
      return Ot("loop_head", n);
    }
    let U = " Reconnecting\u2026 ", j = Math.max(1, (process.stdout.columns ?? 80) - U.length);
    process.stdout.write(`\x1b7${wj(1, j)}\x1b[2;7m${U}\x1b[0m\x1b8`);
    let C;
    if (process.stdin.isTTY) {
      let V = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : !1;
      if (!V) iw(process.stdin, !0);
      let N = hn(process.stdin);
      try {
        C = await Promise.race([ Rq(Ct, n.storageV5), N.promise.then(() => "detach") ]);
      } finally {
        if (N.cancel(), !V) iw(process.stdin, !1);
      }
    } else C = await Rq(Ct, n.storageV5);
    if (C === "detach") {
      if (T) process.stdout.write(Vte());
      return t("[PERF:bg-attach-end]"), g("job_attach"), Cq(w, "detached"), {
        kind: "detached"
      };
    }
    let q = C;
    if (!q.ok) {
      if (T) process.stdout.write(Vte());
      if (q.stoodDown) return Ot("reconnect", n, q);
      return m("job_attach", `job_attach_daemon_start_failed_${q.causeCode}`), Cq(w, "error"), 
      {
        kind: "error",
        msg: `Couldn't restart the ${hm()} \u2014 ${q.reason}`
      };
    }
    let ee = j7e();
    if (ee && Nfn(ee)) {
      if (T) process.stdout.write(Vte());
      return t("[PERF:bg-attach-end]"), g("job_attach"), Cq(w, "detached"), {
        kind: "detached"
      };
    }
    if (await Lfn(e)) return t(`[bg-attach] worker gone on reconnect probe short=${e} \u2014 settled while attached`), 
    D();
    k = await Ge(e, o, {
      ...A,
      telemetry: {
        gestureId: w.gestureId,
        attempt: ++w.attempt,
        t0: w.t0,
        surface: w.surface,
        daemonBooted: w.daemonBooted,
        interactive: w.interactive,
        storageV5: n.storageV5
      }
    });
    for (let V = 0; k.msg && s.test(k.msg) && V < 10; V++) await J(200), k = await Ge(e, o, {
      ...A,
      telemetry: {
        gestureId: w.gestureId,
        attempt: ++w.attempt,
        t0: w.t0,
        surface: w.surface,
        daemonBooted: w.daemonBooted,
        interactive: w.interactive,
        storageV5: n.storageV5
      }
    });
    if (k.msg?.includes("ENOJOB")) return t(`[bg-attach] ENOJOB on reconnect short=${e} \u2014 daemon has no handle (or it's killing/settled)`), 
    D();
    if (k.outcome === "error" && T) process.stdout.write(Vte());
  }
  if (k.outcome === "detached" && k.msg && !o.onlyToRetry && (hRt.test(k.msg) || s.test(k.msg))) {
    if (T) process.stdout.write(Vte());
    return m("job_attach", "job_attach_stalled"), {
      kind: "error",
      msg: k.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "")
    };
  }
  if (k.outcome === "error") {
    if (k.msg?.startsWith(`${mRt}:`)) {
      m("job_attach", "job_attach_host_dead");
      let j = await Yr(to(e), n.storageV5).catch(() => null), C = k.msg.slice(mRt.length + 1).trim();
      return {
        kind: "error",
        msg: j !== null && tv(j) ? C : `${C} \u2014 press Enter to restart it`
      };
    }
    if (k.msg?.startsWith(`${Dfn}:`)) {
      m("job_attach", "job_attach_no_response");
      let j = await Yr(to(e), n.storageV5).catch(() => null);
      if (j !== null && tv(j)) return {
        kind: "error",
        msg: `${Hyt} \u2014 it runs a shell command, which is never run again for you; ctrl+x stops it`
      };
      return {
        kind: "error",
        notResponding: !0,
        msg: `${Hyt} \u2014 press Enter again to restart it (the conversation is saved)`
      };
    }
    if (k.msg?.includes("ENOJOB")) {
      t(`[bg-attach] ENOJOB on first attach short=${e} \u2014 daemon has no handle (or it's killing/settled)`);
      let j = await Sn(e, void 0, n.storageV5);
      if (j) return j;
      return f("job_attach", "job_attach_orphaned"), {
        kind: "error",
        orphaned: !0,
        msg: `${wce()} lost track of this job \u2014 press Enter to respawn it`
      };
    }
    if (v && !v.ok) {
      if (v.stoodDown) return Ot("first_attach", n, v);
      return m("job_attach", `job_attach_daemon_start_failed_${v.causeCode}`), Cq(w, "error"), 
      {
        kind: "error",
        msg: `Couldn't start the ${hm()} \u2014 ${v.reason}`
      };
    }
    let U = k.msg && s.test(k.msg) ? `${wce()} is still starting \u2014 try again in a moment` : k.msg && r.test(k.msg) ? `${wce()} didn't respond after starting \u2014 try again in a moment` : k.msg ? `Couldn't attach \u2014 ${k.msg}` : "Couldn't attach to that session";
    return m("job_attach", "job_attach_failed"), {
      kind: "error",
      msg: U
    };
  }
  if (t("[PERF:bg-attach-end]"), g("job_attach"), k.msg && d4e.test(k.msg)) return {
    kind: "detached",
    msg: k.msg.replace(d4e, "")
  };
  return k.beforeFirstFrame ? {
    kind: "detached",
    beforeFirstFrame: !0
  } : {
    kind: "detached"
  };
}

var Nr = "Background sessions still running will stop in about a minute. Run 'claude agents' to keep them.";

async function Ot(e, n, o) {
  let r = O(), [u, s] = o ? [ void 0, o.viaService === !0 && r !== "macos" ] : await Promise.all([ fg({
    proto: Xd,
    op: "ping"
  }, {
    timeoutMs: 300
  }), sjo() ]), h = u !== void 0 && (u.ok || u.code === "ETIMEOUT"), A = !h && !s && r !== "windows" && process.stdout.isTTY ? `${Nr}\n` : "";
  if (t(`[bg-attach] held: this process is exiting (${e})`), i("tengu_bg_attach_held_at_exit", {
    loop_head: e === "loop_head",
    first_attach: e === "first_attach",
    daemon_up: h,
    service_restart: s,
    notice: A !== ""
  }), n.alreadyInAlt) n.onExitNotice?.(A); else if (A) process.stdout.write(A);
  return uu();
}

var Rn = 32, Dr = {
  head: 50,
  tail: 30
}, Fr = {
  head: 60,
  tail: 100
}, D3n = new RegExp(`^[0-9a-f]{${Rn}}$`);

function jr(e) {
  return at(e).slice(0, Rn);
}

async function XX(e, n = {}, o) {
  let r = await Yr(to(e), o), u = r?.worktreePath ? await x7(o).catch(() => []) : [], s = new Set;
  for (let v of u) if (v.kind === "bg" && (v.jobId === e || v.sessionId?.startsWith(e))) s.add(v.pid);
  let h = await ZEe(e, r ?? void 0, {
    knownGone: n.knownGone,
    evict: !0
  }, o).catch(v => ({
    confirmed: !1,
    error: l(v)
  }));
  if (!h.confirmed) {
    if (t(`deleteJob: kill unconfirmed for ${e} \u2014 skipping jobdir/worktree removal to avoid stranding a live worker`, {
      level: "warn"
    }), !n.internal) m("job_delete", "kill_unconfirmed", {
      had_worktree: Boolean(r?.worktreePath)
    });
    return {
      removed: !1,
      error: h.error,
      errorCode: "kill_unconfirmed"
    };
  }
  let A, w, T = !1;
  if (r?.worktreePath) {
    let v = r.worktreePath, D, U, j, C = null, q = "present", ee = !1, V, N, P, {dirty: _e, trackedChanges: Ne, gitError: be, submoduleWork: Ce} = await fLe(v, void 0), te = RPn(v, r.originCwd) ?? void 0, H = await Ke(v).catch(() => v), ce = jr(H);
    T = n.discardUnpushed !== void 0 && !be && n.discardUnpushed.worktreeDigest === ce && await At(H, n.discardUnpushed.headSha);
    let De = !be && te ? await h_e(te).catch(() => null) : null, we, je = !1;
    for (let [re, ie] of (De ?? []).entries()) if (await Ke(ie.worktreePath).catch(() => ie.worktreePath) === H) {
      we = ie, je = re > 0 && !ie.prunable;
      break;
    }
    let ve = Udr(H), Le = te !== void 0 && ve !== null && await Ke(ve).catch(() => ve) === await Ke(te).catch(() => te), ae = je && Le ? Ce?.kind === "unverifiable" ? "submodule" : Ne ? "tracked_changes" : void 0 : te !== void 0 && await PPn(H, te) ? void 0 : "not_registered", ue = n.forceRemoveWorktree !== void 0 && n.forceRemoveWorktree === ce, fe = ue && ae === void 0 && IPn(H), Ve = fe ? "job_delete_force_remove" : n.force === !0 || T ? "job_delete_force" : "job_delete", ze = G5t(Ve), Oe = B5t(we?.lockReason), X;
    if ((X = await Lr(e, H, v, o)) !== null) D = "in_use", V = X.verified && XM.test(X.jobId) ? X.jobId : void 0, 
    t(`deleteJob: ${v} is claimed by running job ${X.jobId}'s state.json (${X.verified ? "verified" : "unverifiable claim"}) \u2014 not ours to remove`, {
      level: "warn"
    }); else if (((ee = await eln(v) === null) || T || fe) && (q = await Cj(v)) !== "gone" && (C = q === "unreadable" ? "unreadable" : await Bt(e, H, v, {
      includeUnsettled: T || fe
    }, o)) !== null) {
      if (C === "claimed" && !ee && T) D = "unpushed_shared", N = await ct(v).catch(() => {}); else D = C === "claimed" ? "shared_record" : "records_unreadable";
      t(C === "claimed" ? `deleteJob: ${v} is also recorded by another settled job's state.json \u2014 not removing another session's output` : `deleteJob: could not verify ${v} against sibling records \u2014 refusing until records are readable`, {
        level: "warn"
      });
    } else if (!await YKe(we?.lockReason) && !(Oe !== null && s.has(Oe))) D = "live_lock", 
    V = Oe !== null ? `pid ${Oe}` : void 0, t(`deleteJob: ${v} is locked by a live Claude Code process, or with a reason we did not write (${we?.lockReason}) \u2014 not ours to remove`, {
      level: "warn"
    }); else if ((P = await Ur(u, e, s, H, v)) !== void 0 && await Cj(v) !== "gone") D = "occupied", 
    V = P.pid === process.pid ? `${typeof P.parkedJobId === "string" && XM.test(P.parkedJobId) ? `session ${P.parkedJobId},` : "a session"} moved to the background from this window, pid ${P.pid}` : P.kind === "bg" && typeof P.jobId === "string" && XM.test(P.jobId) ? `background session ${P.jobId}, pid ${P.pid}` : `pid ${P.pid}, ${P.kind}`, 
    t(`deleteJob: ${v} is the working directory of a live session (pid ${P.pid}, ${P.kind}) \u2014 not ours to remove`, {
      level: "warn"
    }); else if (_e && !be && !ze) D = "dirty", t(`deleteJob: worktree has uncommitted changes, kept ${v}`, {
      level: "warn"
    }); else if (!be && te && !T && !await Bdr(v, await V5t(te), {
      primaryCheckoutVouches: !0
    })) {
      if (await Bt(e, H, v, {
        includeUnsettled: !1
      }, o) === "claimed") D = "unpushed_shared", t(`deleteJob: ${v} has unpushed commits and is also recorded by another settled job's state.json \u2014 not offering a discard`, {
        level: "warn"
      }); else D = "unpushed", t(`deleteJob: ${v} has commits that are on no remote, kept`, {
        level: "warn"
      });
      N = await ct(v).catch(() => {});
    } else if (T && n.discardUnpushed !== void 0 && !await At(H, n.discardUnpushed.headSha)) D = "unpushed", 
    t(`deleteJob: ${v} HEAD moved past the confirmed discard pin, kept`, {
      level: "warn"
    }), N = await ct(v).catch(() => {}); else {
      let re = RPn(v, r.originCwd) ?? void 0, ie = (r.originCwd ? pr(r.originCwd) : null) ?? void 0, Q = await wre(v, r.worktreeBranch, re, r.worktreeHookBased, Ve, H, ie, {
        storageV5: o,
        forceRemoveRequested: ue
      }).catch(oe => (t(`deleteJob: removeAgentWorktree threw for ${v}: ${l(oe)}`, {
        level: "error"
      }), {
        outcome: "failed",
        errorSummary: `the removal failed unexpectedly (${Xl(l(oe), Fr)})`
      }));
      if (Q.outcome === "failed") {
        if (D = Q.needsForce ? "unverified" : Q.errorSummary === QKe ? "identity_changed" : "remove_failed", 
        V = Q.needsForce ? void 0 : Q.errorSummary, Q.forceRemovable !== void 0 && IPn(H)) if (ae !== void 0) j = ae; else if (await Bt(e, H, v, {
          includeUnsettled: !1
        }, o) === "claimed") j = "shared_record"; else U = Q.forceRemovable;
      } else if (Q.outcome === "left_in_place") A = Xl(v); else if (Q.forcedDirectoryRemoval) {
        let {keptBranch: oe} = Q.forcedDirectoryRemoval;
        w = {
          worktree: Xl(H),
          ...oe !== void 0 && {
            keptBranch: Xl(oe, Dr)
          }
        };
      }
    }
    if (D) {
      if (!n.internal) f("job_delete", `worktree_kept_${D}`, {
        had_worktree: !0
      });
      return {
        removed: !1,
        keptWorktree: Xl(H),
        keptReason: D,
        ...V !== void 0 && {
          keptErrorSummary: V
        },
        ...N !== void 0 && {
          keptUnpushed: N
        },
        ...D === "unpushed" && N !== void 0 ? {
          discardUnpushed: {
            headSha: N.headSha,
            worktreeDigest: ce
          }
        } : U !== void 0 && T && n.discardUnpushed !== void 0 && {
          discardUnpushed: n.discardUnpushed
        },
        ...U !== void 0 && {
          forceRemoveWorktree: {
            worktreeDigest: ce,
            cause: U
          }
        },
        ...j !== void 0 && {
          forceRemoveWithheld: j
        },
        ...Ce !== void 0 && (D === "dirty" || D === "remove_failed") && {
          submoduleWork: Ce
        }
      };
    }
  }
  let k = r?.fan?.some(v => v.kind === "shell" && v.doneAt === void 0) ?? !1;
  await gn(to(e), {
    waitMs: k ? 4e3 : 0
  });
  try {
    await Tr(to(e), {
      recursive: !0,
      force: !0
    });
  } catch (v) {
    if (Lp(to(e)), t(`deleteJob: failed to remove job dir for ${e}: ${l(v)}`, {
      level: "warn"
    }), !n.internal) m("job_delete", "jobdir_rm_failed", {
      had_worktree: Boolean(r?.worktreePath)
    });
    return {
      removed: !1,
      error: `couldn't remove the session's state directory (${Br(l(v))})`,
      errorCode: "jobdir_rm_failed"
    };
  }
  if (z() && o !== void 0 && qg(U3n(e)) === void 0) await RBt(o, e); else await Cr(rSe(e)).catch(() => {});
  if (Lp(to(e)), !n.internal) if (A) f("job_delete", "worktree_left_in_place", {
    had_worktree: !0,
    discard_confirmed: T
  }); else if (w) f("job_delete", "worktree_force_removed", {
    had_worktree: !0,
    discard_confirmed: T
  }); else g("job_delete", {
    had_worktree: Boolean(r?.worktreePath),
    discard_confirmed: T
  });
  return {
    removed: !0,
    discardConfirmed: T,
    ...A && {
      leftWorktreeDir: A
    },
    ...w && {
      forcedWorktreeRemoval: w
    }
  };
}

async function Lr(e, n, o, r) {
  for (let u of await QA(void 0, r).catch(() => [])) {
    if (u.id === e || !u.state.worktreePath || da(u.state)) continue;
    let s = An(u.state.worktreePath, n, o);
    if (s === "match") return {
      jobId: u.id,
      verified: !0
    };
    if (s === "unverifiable") return {
      jobId: u.id,
      verified: !1
    };
    let h = await Cn(u.state.worktreePath, o);
    if (Ie(h, n)) return {
      jobId: u.id,
      verified: !0
    };
  }
  return null;
}

function An(e, n, o) {
  if (Ie(e, o) || Ie(e, n)) return "match";
  if (!cl(e)) return "no_match";
  let r = Pr(e);
  if (Ie(r, o) || Ie(r, n)) return "match";
  return mt(e) && !Un(e) && !el(e) ? "unverifiable" : "no_match";
}

function Ie(e, n) {
  return ut(e) === ut(n);
}

function ut(e) {
  return rp(Ln(e));
}

function En(e, n) {
  let o = Mr(ut(n), ut(e));
  return o.split(/[/\\]/, 1)[0] !== ".." && !mt(o);
}

async function Ur(e, n, o, r, u) {
  for (let s of e) {
    if (s.kind !== "interactive" && s.kind !== "bg") continue;
    if (o.has(s.pid) || s.parkedJobId === n) continue;
    if (s.pid === process.pid && s.parkedJobId === void 0) continue;
    let h = s.pid === process.pid ? ke() : s.cwd;
    if (typeof h !== "string" || !mt(h)) continue;
    if (!En(h, r) && !En(h, u)) continue;
    if (s.kind === "bg" && typeof s.jobId === "string" && XM.test(s.jobId)) {
      if (await On(to(s.jobId)) === "missing") continue;
    }
    return s;
  }
  return;
}

function Cn(e, n) {
  let o = le();
  if (!mt(e) || cl(e) || Li(e, o) && Li(e, n)) return e;
  let r = A$(se(), e, {
    surfaceNetworkRaw: !0,
    anchors: [ o, n ]
  });
  if (r === ty) return e;
  if (r !== void 0 && (cl(r) || Li(r, o) && Li(r, n))) return e;
  return Ke(e).catch(() => e);
}

async function On(e) {
  return Rr(Pt(e, "state.json")).then(() => "present", n => W(n) ? "missing" : "unreadable");
}

async function Bt(e, n, o, {includeUnsettled: r}, u) {
  let s;
  try {
    s = await Ar(QM(), {
      withFileTypes: !0
    });
  } catch (h) {
    return W(h) ? null : "unreadable";
  }
  for (let h of s) {
    if (!h.isDirectory() || h.name === e) continue;
    let A = Pt(QM(), h.name), w = await Yr(A, u);
    if (w === null) {
      if (await On(A) === "missing") continue;
      return "unreadable";
    }
    if (!w.worktreePath || !r && !da(w)) continue;
    let T = An(w.worktreePath, n, o);
    if (T === "match") return "claimed";
    if (T === "unverifiable") return "unreadable";
    let k = await Cn(w.worktreePath, o);
    if (Ie(k, n)) return "claimed";
  }
  return null;
}

async function Ge(e, n, o) {
  return await O3n(e, o);
}

export { sze, Myt, D$, Dfn, Hyt, Cq, Lfn, Nfn, O3n, tFr, tjo, EBt, ZEe, M3n, kBt, $fn, nFr, XQe, RMe, H3n, rFr, JQe, oFr, D3n, XX };
