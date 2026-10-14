// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { l, E, zr, ME, kh, T$o, W } from "./chunk-b0z4bv3v.js";

import { Le, Me } from "./chunk-2v9tfgc3.js";

import { z } from "./chunk-bmq0vae0.js";

import { J, We } from "./chunk-nvtwm272.js";

import { WC } from "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import { m, so } from "./chunk-3ykz5st8.js";

import { _, Y, cn, ds, t } from "./chunk-kawq2919.js";

import { ste } from "./chunk-z52kmxx4.js";

import { sdn, w_, pDo, fDo } from "./chunk-a16yb89m.js";

import { Br } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { XK, RU, A9e, v1e, xU, pKn, jLt, WLt, gKn, C9e, zLt, J9 } from "./chunk-q6wab2jw.js";

import { qT, X6e, nf, bf, O0 } from "./chunk-s82cb921.js";

import { vu } from "./chunk-v7qc2kz8.js";

import { Dl, AFs } from "./chunk-4dwgr3et.js";

import { jso, QQ } from "./chunk-dvddkg0s.js";

import { Di, k } from "./chunk-xywp7esx.js";

import { XNt, JNt } from "./chunk-yxennhe9.js";

import { pje, xOe, nae } from "./chunk-60c97a4m.js";

import { pi } from "./chunk-s2t7g8m9.js";

import { pPr, Tve, ffe, XBe, Y2n, Ul, JBe } from "./chunk-znhtg8e4.js";

import { Pft } from "./chunk-1tdw23h1.js";

import { dp } from "./chunk-mw643xee.js";

import { Xa } from "./chunk-3kb22va7.js";

import { M6, Cke, dJ, kXn, Z_t, a2o, TXn, l2o, Zze, $1r } from "./chunk-2a66xf4d.js";

import { Uf, Zc } from "./chunk-am6xk4a3.js";

import { ibr, tbs, slt, ilt, alt, bQt, nk, Poe, rbs, obs, hue, Jk, lH, dlt, SQt, wQt, vQt, kN, DNn } from "./chunk-7j9be257.js";

import { Xd, VQ, Xst, xmr, _so, Gre, yNe, gRt, Pmr, XA, to, Rl, Vre, Yr, ub, bRt, R_, da, iit } from "./chunk-z09tf6qf.js";

import { e7e, Nyt, B3n, PBt, aze, Bfn } from "./chunk-z9mzwwd6.js";

import { dge } from "./chunk-bpbwv6ga.js";

import { Ncn, $cn } from "./chunk-eqax1wh5.js";

import { qBt } from "./chunk-xvys0kga.js";

import { UBr } from "./chunk-k0q9c8gf.js";

import { aHe } from "./chunk-xype0hs1.js";

import { f2 } from "./chunk-ssq4yy0z.js";

import { YB, Zv } from "./chunk-fwpqj1qs.js";

import { klt } from "./chunk-q93rjfj5.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { vX } from "./chunk-e6anp4gn.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomBytes as Re } from "crypto";

import { unlinkSync as Nt } from "fs";

import { mkdir as xt, open as Mt, readdir as Vt, unlink as X } from "fs/promises";

import { connect as be } from "net";

import { join as ue } from "path";

import { randomBytes as de } from "crypto";

import { statSync as He } from "fs";

import { access as ft, mkdir as tt, unlink as ce, writeFile as Ee } from "fs/promises";

import { basename as gt, dirname as mt, isAbsolute as _t } from "path";

var Pe = 2e3, ne = Uf, nt = /\x1b\[\d*D/g;

function ke(e, r) {
  let s = "", h = "", n = !0, p = 0, o = "", u = !1;
  function g(v, w) {
    let S = Zc(ds(h), ne), y = `${v}|${w}|${S}`;
    if (y === o) return;
    o = y, Yr(e, r).then(R => R && !u ? Rl(e, {
      ...R,
      state: v,
      tempo: w,
      detail: S,
      updatedAt: (new Date).toISOString()
    }, r) : void 0).catch(d);
  }
  let f = setInterval(() => {
    if (p > 0 && Date.now() - p < Pe) g("working", "active"); else if (!n && h) g("blocked", "blocked"); else g("working", "idle");
  }, Pe);
  return f.unref(), {
    feed(v) {
      let w = cn(v.replace(nt, "\0")).replace(/\r\n?/g, `\n`).replace(/\0+$/, "").replace(/\0/g, `\n`);
      if (!w) return;
      p = Date.now(), s += w;
      let S = s.split(`\n`);
      if (s = S.pop() ?? "", n = s === "", h = s.trim() || S.findLast(R => R.trim())?.trim() || h, 
      s.length > ne * 2) s = s.slice(-ne);
      if (o.startsWith("blocked|")) g("working", "active");
    },
    dispose() {
      u = !0, clearInterval(f);
    },
    get lastLine() {
      return Zc(ds(h), ne);
    }
  };
}

import { rename as ot, unlink as oe } from "fs/promises";

import { Socket as at } from "net";

import { StringDecoder as dt } from "string_decoder";

var Ie = [ 50, 100, 250, 500, 1e3, 2e3 ], Oe = 30, ct = 4, ht = 1e4, Ne = 8 * wQt, lt = 50;

function ae(e, r, s) {
  let {procStart: h, short: n, hostProc: p, auth: o, onAuthRequired: u} = s ?? {}, g = Me(), f = Me(), v, w = new dt("utf8"), S, y = !1, R = !1, L = 0, I = 0, M, U, D, T, C = 0, H, G, K, F = !1, se = !1, fe = !1, ee = "", Te = !1, Q = h;
  if (Q === void 0) Ul(r, {
    skipCache: !0
  }).then(A => {
    Q = A;
  });
  let Ce = [], ge = 0;
  function Z(A) {
    if (S) {
      if (S.destroyed) return !1;
      if (!S.write(A)) {
        if (!D) D = setTimeout(() => {
          D = void 0, S?.destroy();
        }, ht), D.unref();
        if (!T && S.writableLength > Ne) T = setTimeout(() => {
          if (T = void 0, S && !S.destroyed && S.writableLength > Ne) ie(), S.destroy();
        }, lt), T.unref();
      }
      return !0;
    }
    if (ge < 2 * wQt) Ce.push(A), ge += A.length;
    return !1;
  }
  function ie() {
    if (D) clearTimeout(D), D = void 0;
    if (T) clearTimeout(T), T = void 0;
  }
  function j(A, P, N) {
    if (R) return;
    if (R = !0, y = !0, U) clearTimeout(U), U = void 0;
    ie(), S?.destroy(), S = void 0;
    let x = w.end();
    if (x) g.emit(x);
    f.emit({
      exitCode: A,
      signal: P,
      hostStderr: N
    });
  }
  function me(A) {
    let P = Xa(Jk(e), 1048576).then(V => V ?? "").catch(() => "");
    P.then(V => {
      let B = V.slice(0, 2e3).trim();
      if (B.length > 0) t(`[bg-pty] host crash: ${B}`, {
        level: "warn"
      });
      let q = [ ...B.matchAll(/\bE[A-Z]{2,14}\b/g) ].find(Se => !"/\\".includes(B[Se.index - 1] ?? "."))?.[0];
      i("tengu_bg_ptyhost_crash", {
        hadBreadcrumb: B.length > 0,
        hadHello: F,
        via: c(A),
        short: n === void 0 ? void 0 : XA(n),
        stderr_errno: ME(q)
      });
    }), Tve(C ? [ -r, C ] : [ -r ], A !== "hung" ? void 0 : Q), ffe(C, H);
    let N = nf().length > 0, x = N ? (V, B) => void P.then(q => j(V, B, xe(q)), () => j(V, B)) : j;
    if (p) {
      let V = null;
      p.exited.then(B => {
        V = {
          code: B,
          signal: p.signalCode ?? void 0
        }, x(B, V.signal);
      }, () => x(-1)), setTimeout(() => j(V ? V.code : -1, V?.signal), 1e3).unref();
      return;
    }
    if (x(-1), N) setTimeout(j, 1e3, -1).unref();
  }
  function st(A) {
    if (A.kind === dlt) {
      if (!se) {
        let P = w.write(A.payload);
        if (fe) g.emit(P); else if (P.length > 0) {
          let N = (ee + P).replaceAll(VQ, ""), x = pt(N);
          ee = x > 0 ? N.slice(N.length - x) : "";
          let V = x > 0 ? N.slice(0, N.length - x) : N;
          if (V.length > 0) g.emit(V);
        }
      }
    } else if (A.ctrl.t === "hello") {
      if (F) se = !0, w.end(), ee = ""; else oe(lH(e)).catch(() => {});
      if (F = !0, C = A.ctrl.replPid, K = A.ctrl.version, H = void 0, C > 1 && O() !== "windows") {
        let P = C;
        JBe(P).then(N => {
          if (C !== P || R || y || N === void 0) return;
          H = N, G?.(C, N);
        });
      }
    } else if (A.ctrl.t === "live") {
      if (!fe) {
        if (fe = !0, ee.length > 0) g.emit(ee), ee = "";
      }
      if (se) se = !1, v?.();
    } else if (A.ctrl.t === "exit") j(A.ctrl.code, A.ctrl.signal); else if (A.ctrl.t === "ping") Z(kN({
      t: "pong"
    })); else if (A.ctrl.t === "auth-required") if (o) t(`[bg-pty] ${n ?? e}: host rejected auth token \u2014 roster ptyAuth poisoned; input is dead until the worker is re-keyed`, {
      level: "warn"
    }), u?.(); else t(`[bg-pty] ${n ?? e}: host dropped input \u2014 DATA auth token missing (version skew; respawn the worker to re-key)`, {
      level: "warn"
    });
  }
  function De() {
    if (y) return;
    let A = new at, P = !1;
    A.on("error", N => {
      Te = E(N) === "ENOENT", _e();
    }), A.once("close", () => {
      if (S === A) S = void 0, ie();
      if (y) return;
      if (P && !R) {
        try {
          process.kill(r, 0), t("[bg-pty] dropped by host; reconnecting", {
            level: "debug"
          }), I = ct, L = 0, _e();
          return;
        } catch {}
        me("close");
        return;
      }
      _e();
    }), A.once("connect", () => {
      P = !0, L = 0, I = 0, S = A, A.on("drain", ie);
      let N = Jk(e), x = `${N}.read`;
      if (ot(N, x).then(() => Xa(x, 1048576)).then(B => {
        let q = (B ?? "").slice(0, 2e3).trim();
        if (q.length > 0) t(`[bg-pty] pre-connect stderr:\n${q}`, {
          level: "warn"
        });
      }).catch(() => {}).finally(() => oe(x).catch(() => {})), Z(kN({
        t: "pong"
      })), o) Z(kN({
        t: "auth",
        token: o
      }));
      for (let B of Ce.splice(0)) Z(B);
      ge = 0;
      let V = DNn(st, B => {
        t(`[bg-pty] frame error: ${B}`, {
          level: "warn"
        }), A.destroy();
      });
      A.on("data", V);
    }), A.connect(e);
  }
  function _e() {
    if (y || M) return;
    try {
      process.kill(r, 0);
    } catch {
      y = !0, Xa(lH(e), 8388608).then(P => P ?? "").then(P => {
        if (!F && P.length > 0) g.emit(P.replaceAll(VQ, ""));
        oe(lH(e)).catch(() => {}), me("connect");
      });
      return;
    }
    if (I > 0 && --I === 0) {
      me("hung");
      return;
    }
    if (h !== void 0 && Te && L >= 3) t(`[bg-pty] ${e}: ENOENT on adopt \u2014 sock file externally deleted; respawning`, {
      level: "warn"
    }), i("tengu_bg_adopt_sock_unlinked", {}), L = Oe;
    if (L >= Oe) {
      t(`[bg-pty] ${e}: ${L} connect attempts failed; treating host as dead`, {
        level: "warn"
      });
      let P = Q && XBe(r);
      if (r > 1 && (!Q || !P || Q === P)) try {
        process.kill(-r, "SIGKILL");
      } catch {
        try {
          process.kill(r, "SIGKILL");
        } catch {}
      }
      y = !0, Xa(lH(e), 8388608).then(N => N ?? "").then(N => {
        if (!F && N.length > 0) g.emit(N.replaceAll(VQ, ""));
        oe(lH(e)).catch(() => {});
        let x = nf().length > 0, V = (B, q) => {
          if (!x) {
            j(B, q);
            return;
          }
          Xa(Jk(e), 1048576).then(Se => j(B, q, xe(Se ?? "")), () => j(B, q));
        };
        if (p) {
          let B = null;
          p.exited.then(q => {
            B = {
              code: q,
              signal: p.signalCode ?? void 0
            }, V(q, B.signal);
          }, () => V(-1)), setTimeout(() => j(B ? B.code : -1, B?.signal), 1e3).unref();
        } else if (V(-1), x) setTimeout(j, 1e3, -1).unref();
      });
      return;
    }
    let A = Ie[Math.min(L, Ie.length - 1)];
    L++, M = setTimeout(() => {
      M = void 0, De();
    }, A), M.unref();
  }
  return De(), {
    pid: r,
    replPid: () => C,
    replVersion: () => K,
    onRepl: A => {
      if (G = A, C > 1 && H !== void 0) A(C, H);
    },
    onResume: A => {
      v = A;
    },
    write: A => {
      if (R) return;
      let P = Buffer.from(A, "utf8"), N = wQt - 1;
      for (let x = 0; x < P.length; x += N) Z(vQt(P.subarray(x, x + N)));
    },
    resize: (A, P) => Z(kN({
      t: "resize",
      cols: A,
      rows: P
    })),
    kill: A => {
      let P = A === "SIGKILL" ? "SIGKILL" : "SIGTERM", N = Z(kN({
        t: "kill",
        sig: P
      }));
      if (r <= 1) return;
      if (O() === "windows" && P === "SIGTERM" && N) {
        if (U) clearTimeout(U);
        U = setTimeout((x, V) => {
          if (!Y2n(x, Q)) {
            V(-1);
            return;
          }
          try {
            process.kill(x, "SIGKILL");
          } catch {
            V(-1);
          }
        }, 5e3, r, j), U.unref();
        return;
      }
      try {
        process.kill(-r, P);
      } catch {
        try {
          process.kill(r, P);
        } catch {
          j(-1);
        }
      }
      if (ffe(C, H, P), P === "SIGTERM" && !R) {
        if (U) clearTimeout(U);
        U = setTimeout((x, V) => {
          if (!Y2n(x, Q)) {
            V(-1);
            return;
          }
          ffe(C, H, "SIGKILL");
          try {
            process.kill(-x, "SIGKILL");
          } catch {
            try {
              process.kill(x, "SIGKILL");
            } catch {
              V(-1);
            }
          }
        }, 5e3, r, j), U.unref();
      }
    },
    dispose: () => {
      if (y = !0, M) clearTimeout(M), M = void 0;
      if (U) clearTimeout(U), U = void 0;
      ie(), S?.destroy(), S = void 0;
    },
    onData: A => ({
      dispose: g.subscribe(A)
    }),
    onExit: A => ({
      dispose: f.subscribe(A)
    })
  };
}

function xe(e) {
  return e.slice(0, 2e3).split(/\r?\n/).map(r => r.trim()).find(r => r.length > 0);
}

function pt(e) {
  let r = Math.min(VQ.length - 1, e.length);
  for (let s = r; s > 0; s--) if (e.endsWith(VQ.slice(0, s))) return s;
  return 0;
}

import { Socket as ut } from "net";

var Ve = [ 100, 250, 500, 1e3, 2e3 ], Be = 30;

function Ue(e, r, s, h, n) {
  let p, o = !1, u = 0, g = !1, f;
  function v() {
    if (o) return;
    let S = new ut, y = !1;
    S.on("error", () => w()), S.once("close", () => {
      if (p === S) p = void 0;
      if (o) return;
      if (y) s();
      w();
    }), S.once("connect", () => {
      y = !0, u = 0, g = !1, p = S, S.write(_({
        proto: Xd,
        role: "supervisor",
        supervisorPid: process.pid,
        auth: n
      }) + `\n`), h?.(), qBt(S, R => {
        let L;
        try {
          L = Y(R);
        } catch {
          return;
        }
        if (L && typeof L === "object" && "type" in L) r(L);
      });
    }), S.connect(e);
  }
  function w() {
    if (o || f || g) return;
    if (u >= Be) {
      g = !0, t(`[bg-rv] ${e}: ${u} connect attempts failed \u2014 giving up (pid-poll is liveness backstop)`, {
        level: "warn"
      }), i("tengu_bg_rv_connect_exhausted", {
        attempts: u
      });
      return;
    }
    let S = Ve[Math.min(u, Ve.length - 1)];
    u++, f = setTimeout(() => {
      f = void 0, v();
    }, S), f.unref();
  }
  return v(), {
    send(S) {
      if (!p || p.destroyed) {
        if (u >= Be) u = 0, g = !1, w();
        return !1;
      }
      try {
        return p.write(_(S) + `\n`), !0;
      } catch (y) {
        return t(`[bg-rv] send failed: ${String(y)}`), !1;
      }
    },
    close() {
      if (o = !0, f) clearTimeout(f);
      p?.destroy(), p = void 0;
    }
  };
}

var St = 1e4, Fe = 20, kt = new Set([ 129, 143 ]);

function $e() {
  return k("tengu_bg_revival_guard", !0);
}

function vt() {
  return k("tengu_greedy_crane", !0) !== !1;
}

function Et() {
  return k("tengu_cosmic_cookie", !1) === !0;
}

var wt = "Continue from where you left off. Note: this session was automatically restarted after its process exited unexpectedly; the user has not sent a new message since the restart. Re-verify anything time-sensitive (branch state, running processes, prior partial work) before continuing.", At = 36e5, yt = 3, Ge = 5e3, Rt = 3e5, bt = 6e4, he = 200, Ke = "session ID already belongs to another conversation \u2014 open again to start with a new ID";

function S0r(e) {
  return `working directory no longer exists or is not accessible: ${e}`;
}

var ve = 5e3, ze = ve * 3, Tt = 12e4, Je = 12e4, w0r = 1e3, Ct = 3e5, je = {
  release: "2.1.213",
  commitMs: Date.UTC(2026, 6, 16, 18, 0, 5)
}, Dt = {
  release: "2.1.287",
  commitMs: Date.UTC(2026, 8, 30, 14, 52, 7)
}, it = [ "local_bash", "in_process_teammate", "dream", "auto_mode_scan", "local_memory_import" ], Pt = 36e5, Ye = 4096;

function v0r() {
  return (e, r, s) => {
    let {cmd: h, prefixArgs: n} = vu({
      pinToCurrentBinary: !0
    }), p = [ h, ...n, "--bg-pty-host", s.ptySock, String(s.cols), String(s.rows), "--", e, ...r ], o = {
      cwd: s.cwd,
      env: s.env,
      detached: !0,
      windowsHide: !0,
      ...Dl("agent"),
      ...O() !== "windows" && {
        argv0: "claude bg-pty-host"
      }
    }, u;
    try {
      u = Bun.spawn(p, {
        ...o,
        stdio: [ "ignore", "ignore", Bun.file(Jk(s.ptySock)) ]
      });
    } catch (g) {
      let f = E(g);
      if (f !== "ENOENT" && f !== "ENOSPC" && f !== "EACCES" && f !== "EROFS") throw g;
      t(`bg: ptyHost stderr breadcrumb open failed (${f}) at ${Jk(s.ptySock)} \u2014 spawning with stderr discarded (crash diagnostics degraded): ${l(g)}`, {
        level: "warn"
      });
      let {cgroup: v, ...w} = o;
      if (v !== void 0) t(`bg: retrying ptyHost spawn without tool cgroup placement (${v})`, {
        level: "warn"
      });
      u = Bun.spawn(p, {
        ...w,
        stdio: [ "ignore", "ignore", "ignore" ]
      });
    }
    return u.unref(), ae(s.ptySock, u.pid, {
      short: s.short,
      hostProc: u,
      auth: s.ptyAuth
    });
  };
}

function qe(e, r, s, h, n, p) {
  if (e.launch.mode === "exec") return e.launch.args.map(WC);
  if (r > 1 && s) return QQ([ "--resume", n ?? h, ...iit(p) ]);
  if (r > 1 && h !== e.sessionId) return QQ([ "--session-id", h, ...iit(p) ]);
  if (e.launch.mode === "resume") return QQ([ ...e.launch.fork ? [ "--session-id", e.sessionId, "--fork-session" ] : [], "--resume", e.launch.transcriptPath ?? e.launch.sessionId, ...iit(e.launch.flagArgs) ]);
  return QQ(iit(e.launch.args));
}

function Xe(e, r, s, h, n) {
  let p = {
    ...process.env
  };
  if (te(p), e.env) te(e.env);
  let o = {
    ...p,
    ...s && {
      CLAUDE_BG_AUTH_SNAPSHOT_PATH: s
    },
    ...z() && k("tengu_hover_rest", !1) && {
      CLAUDE_CODE_HOVER_REST: "1"
    },
    ...O() === "windows" && {
      CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: "1"
    },
    ...e.env,
    CLAUDE_CODE_SESSION_KIND: "bg",
    CLAUDE_BG_BACKEND: "daemon",
    CLAUDE_BG_SOURCE: e.source,
    CLAUDE_JOB_DIR: r,
    CLAUDE_CODE_SESSION_NAME: pi(e.seed?.name || e.seed?.intent || e.short),
    CLAUDE_BG_RENDEZVOUS_SOCK: h,
    FORCE_COLOR: "3",
    COLORTERM: "truecolor",
    BROWSER: "true"
  }, u = Object.hasOwn(p, "PATH") ? "PATH" : Object.keys(p).find(f => f.toUpperCase() === "PATH"), g = e.env?.PATH || (u ? p[u] : void 0);
  for (let f of Object.keys(o)) if (f.toUpperCase() === "PATH") delete o[f];
  if (g) o[u ?? "PATH"] = g;
  if (process.env.CLAUDE_CONFIG_DIR) o.CLAUDE_CONFIG_DIR = process.env.CLAUDE_CONFIG_DIR; else if (o.CLAUDE_CONFIG_DIR !== void 0 && (!_t(o.CLAUDE_CONFIG_DIR) || o.CLAUDE_CONFIG_DIR.split(/[\\/]/).includes("..") || !ste(o.CLAUDE_CONFIG_DIR))) t(`bg spawn ${e.short}: dropped dispatch CLAUDE_CONFIG_DIR \u2014 not an absolute, dot-dot-free spelling of this daemon's config home`, {
    level: "warn"
  }), delete o.CLAUDE_CONFIG_DIR;
  for (let f of Cke) if (!e.env?.[f]) delete o[f];
  if (dJ(o), Z_t(o), a2o(o, p), !e.env?.CLAUDE_CODE_ENTRYPOINT) M6(o);
  if (e.isolation === "worktree") o.CLAUDE_BG_ISOLATION = "worktree";
  for (let f of le) if (!e.env?.[f]) delete o[f];
  for (let f of Object.keys(o)) if (gKn.some(v => f.startsWith(v)) && !e.env?.[f]) delete o[f];
  if (zLt(p) || cWe(e)) {
    for (let w of xU) delete o[w];
    if (cWe(e) || Le(p.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) WLt(o, e.env);
    let f = J9(p);
    if (f) te(o, [ f ]), delete o[f];
    let v = e.env?.CLAUDE_CODE_HOST_CREDS_FILE ?? (cWe(e) ? p.CLAUDE_CODE_HOST_CREDS_FILE : void 0);
    if (v) o.CLAUDE_CODE_HOST_CREDS_FILE = v;
    for (let w of v1e) delete o[w];
  } else {
    let f = new Set, v = new Set, w = new Set, S = !1, y = !1;
    for (let R of A9e) {
      let L = R.selection === void 0 || Le(o[R.selection]);
      if (o[R.endpoint] === p[R.endpoint] && (!o[R.endpoint] || L) && R.companions.every(M => !pKn.includes(M) || Le(o[M]) === Le(p[M]))) {
        if (o[R.endpoint]) {
          for (let M of R.companions) f.add(M);
          S ||= re(p, R);
        }
        continue;
      }
      for (let M of [ R.endpoint, ...R.companions ]) if (v.add(M), o[R.endpoint] && o[M] !== p[M]) w.add(M);
      if (R.endpoint === "ANTHROPIC_BASE_URL" && p.ANTHROPIC_BASE_URL) delete o.ANTHROPIC_AUTH_TOKEN; else y ||= re(p, R);
    }
    for (let R of v) if (!f.has(R) || w.has(R)) delete o[R];
    if (y && !S) delete o.ANTHROPIC_AUTH_TOKEN;
  }
  if (n) o.CLAUDE_BG_RV_AUTH = n.rvAuth, o.CLAUDE_BG_PTY_AUTH = n.ptyAuth;
  if (s) delete o.CLAUDE_CODE_OAUTH_TOKEN;
  if (e.launch.mode === "exec") {
    let f = A9e.some(v => re(o, v));
    for (let v of Object.keys(o)) if (v.startsWith("CLAUDE_") && v !== "CLAUDE_JOB_DIR" && v !== "CLAUDE_CONFIG_DIR" && v !== "CLAUDE_BG_PTY_AUTH" || v.startsWith("OTEL_")) delete o[v];
    if (delete o.BROWSER, f) delete o.ANTHROPIC_AUTH_TOKEN;
    for (let v of v1e) delete o[v];
    o.CLAUDE_PTY_HOST_EXEC = "1";
  }
  return o;
}

function Qe(e, r) {
  let s = process.env[qT];
  if (r.launch.mode === "exec" || s === void 0) delete e[qT]; else e[qT] = s;
}

async function we(e, r) {
  if (!r || O() !== "macos") return;
  let s = ilt(e);
  try {
    return await tt(slt(), {
      recursive: !0,
      mode: 448
    }), await Ee(s, JSON.stringify(r), {
      mode: 384
    }), s;
  } catch (h) {
    t(`writeAuthSnapshot failed: ${l(h)}`, {
      level: "warn"
    });
    return;
  }
}

async function Ae(e, r) {
  if (O() === "windows") return;
  let s = alt(e);
  try {
    return await tt(slt(), {
      recursive: !0,
      mode: 448
    }), await Ee(s, JSON.stringify(r), {
      mode: 384
    }), s;
  } catch (h) {
    t(`writeSocketTokensFile failed: ${l(h)}`, {
      level: "warn"
    });
    return;
  }
}

var le = [ ...jso, "CLAUDE_CODE_CLIENT_DATA_URL", "CLAUDE_CODE_REMOVE_PROMPT_STRINGS", ...XK, "CLAUDE_CODE_EXTRA_BODY", ...RU, ...pKn, "ANTHROPIC_CUSTOM_HEADERS", ...C9e, "CLAUDE_CODE_HOST_GATEWAY_LINEAGE", "CLAUDE_CODE_HOST_CREDS_FILE" ], cWe = e => Le(e.env?.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST), Lcn = e => e.launch.mode !== "exec" && !cWe(e), It = new Map([ "CLAUDE_CONFIG_DIR", ...Cke, ...kXn, ...le, ...v1e, ...xU, ...jLt ].map(e => [ e.toUpperCase(), e ]));

function te(e, r = []) {
  if (O() !== "windows") return;
  let s = new Map(r.map(h => [ h.toUpperCase(), h ]));
  for (let h of Object.keys(e)) {
    let n = h.toUpperCase(), p = It.get(n) ?? s.get(n);
    if (p === void 0 || p === h) continue;
    if (e[p] === void 0) e[p] = e[h];
    delete e[h];
  }
}

function re(e, r) {
  return !!e[r.endpoint] && (r.endpoint === "ANTHROPIC_BASE_URL" || r.companions.some(s => pKn.includes(s) && Le(e[s])));
}

function ye(e) {
  let r = (e.inFlight?.kinds ?? []).filter(n => n !== "artifact_watch" || !(e.inFlight?.drainableMonitors ?? 0)), s = da(e) && r.length > 0 && r.every(n => it.includes(n)), h = (e.inFlight?.tasks ?? 0) - (e.inFlight?.drainableMonitors ?? 0);
  return (e.inFlight?.queued ?? 0) > 0 || h > 0 && !s || r.includes("session_cron");
}

function Ot(e) {
  if (!e) return null;
  if (da(e)) return "settled";
  if (e.tempo === "active") return "active";
  if (ye(e)) return "inflight";
  return null;
}

function Ze(e, r) {
  let s = Ot(e);
  if (s === "settled" && r !== "missing-at-adopt") return e && ye(e) ? "inflight" : null;
  return s;
}

function et(e) {
  return e.kind === "retiring" ? `retiring:${e.reason}` : e.kind === "retired" ? `retired:${e.outcome}` : e.kind;
}

function Lt(e, r) {
  if (e.kind === "retired") return !1;
  switch (r.kind) {
   case "spawning":
    return e.kind === "upgrading" || e.kind === "running";

   case "running":
    return e.kind === "spawning";

   case "upgrading":
    return e.kind === "running";

   case "retiring":
    return !0;

   case "retired":
    return !0;
  }
}

class Oae {
  dispatch;
  spawnPty;
  getAuthSnapshot;
  via;
  storageV5;
  credentials;
  record;
  onStream=Me();
  onState=Me();
  onSettle=Me();
  onRepaintDone=Me();
  attachers=new Map;
  lastInputAttacher;
  pty;
  procStart;
  replPid=0;
  replProcStart;
  ptyCols=200;
  ptyRows=50;
  decModes=PBt();
  execTracker;
  execLastLine;
  offData;
  offExit;
  ring=[];
  ringBytes=0;
  ringSpawnMark=0;
  attempt=0;
  lastSpawnAt=0;
  fastCrashStreak=0;
  lastExitCause;
  lastExitExternalStop=!1;
  effectiveCwd;
  liveTranscriptPath;
  hostWokeAt;
  backoffTimer=null;
  pidPoll=null;
  rv;
  rvRejected=!1;
  rvSockPath;
  ptySockPath;
  rvAuth=de(16).toString("hex");
  ptyAuth=de(16).toString("hex");
  authRekeyFired=!1;
  authRekeyCount=0;
  pendingAuthRekey;
  rosterExtras={};
  unverifiedSock;
  phase={
    kind: "spawning"
  };
  workerReady=!1;
  sessionIdTakenLatch=!1;
  firedInteractiveMarks=[];
  bootedViaResume=!1;
  resizeDeferred=!1;
  lastInputAt;
  downgradeRefusalLogged=!1;
  deleteJobDirOnSettle=!1;
  get shouldDeleteJobDir() {
    return this.deleteJobDirOnSettle;
  }
  adoptedAt;
  lastRvHeartbeat;
  stalledLogged=!1;
  lastCheckPidAt=Date.now();
  replyChain=Promise.resolve();
  killOutcome="killed";
  handoffKill=!1;
  get isKilling() {
    return this.phase.kind === "retiring" && this.phase.reason === "reap";
  }
  get isHandoffKill() {
    return this.handoffKill;
  }
  get isRetiring() {
    return this.phase.kind === "retiring" && this.phase.reason === "grace";
  }
  get isUpgrading() {
    return this.phase.kind === "upgrading";
  }
  get isBooting() {
    return !this.record.outcome && (this.phase.kind === "upgrading" || !this.workerReady);
  }
  get isSpawnPending() {
    return this.phase.kind === "spawning";
  }
  get isReplyQueueOnly() {
    return this.dispatch.launch.mode !== "exec" && vt() && B3n(this.record.cliVersion, Dt, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION);
  }
  replayInteractiveMarksTo(e) {
    let r = this.attachers.get(e);
    if (!r || r.caps?.imark !== !0) return;
    for (let s of this.firedInteractiveMarks) r.deliver(xmr({
      ...s,
      nonce: r.imarkNonce
    }));
  }
  get isVersionStale() {
    return !!this.record.cliVersion && this.record.cliVersion !== {
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
  }
  get marksCapable() {
    if (this.isVersionStale) return !1;
    return this.bootedViaResume || this.firedInteractiveMarks.length > 0;
  }
  get bootingForAttachMetrics() {
    return this.isBooting || this.marksCapable && this.firedInteractiveMarks.length === 0;
  }
  get isUnverified() {
    return this.unverifiedSock !== void 0;
  }
  getPhase() {
    return this.phase;
  }
  get isTransitioning() {
    return this.phase.kind !== "running" || !this.pty || this.record.pid === 0;
  }
  get isDetached() {
    return this.phase.kind === "retiring" && this.phase.reason === "stop";
  }
  transitionTo(e) {
    if (!Lt(this.phase, e)) return t(`[bg] illegal worker-phase transition ${et(this.phase)} \u2192 ${et(e)} for ${this.record.short}`, {
      level: "warn"
    }), i("tengu_bg_phase_illegal", {}), !1;
    return this.phase = e, !0;
  }
  shutdownWorker() {
    let e = this.rv?.send({
      type: "shutdown"
    }) ?? !1;
    if (!e) this.sigtermWorker(); else setTimeout(r => {
      let s = r.phase;
      if ((s.kind === "upgrading" || s.kind === "retiring" && s.reason === "grace") && !r.record.outcome) r.sigtermWorker();
    }, 5e3, this).unref();
    return e;
  }
  noteDowngradeRefused(e) {
    if (this.downgradeRefusalLogged || !this.record.cliVersion) return;
    this.downgradeRefusalLogged = !0, i("tengu_bg_respawn_downgrade_refused", {
      short: XA(this.dispatch.short),
      trigger: c(e),
      worker_cli_version: Di(this.record.cliVersion)
    });
  }
  async respawnIfIdleStale(e, r = "sweep") {
    if (this.dispatch.launch.mode === "exec") return {
      respawned: !1,
      reason: "not-stale"
    };
    if (this.isTransitioning) return {
      respawned: !1,
      reason: "in-progress"
    };
    if (this.record.outcome) return {
      respawned: !1,
      reason: "no-state"
    };
    if (this.record.cliVersion && Nyt(this.record.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION)) return this.noteDowngradeRefused(r), {
      respawned: !1,
      reason: "not-stale"
    };
    if (e7e(this.record.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION)) return {
      respawned: !1,
      reason: "not-stale"
    };
    if (this.attachers.size > 0) return {
      respawned: !1,
      reason: "attached"
    };
    if (!this.isVersionStale) return {
      respawned: !1,
      reason: "not-stale"
    };
    if (r !== "attach" && this.lastInputAt && Date.now() - this.lastInputAt < Pt) return {
      respawned: !1,
      reason: "busy"
    };
    let s = Date.now(), h = await Yr(to(this.dispatch.short), this.storageV5);
    if (this.isTransitioning) return {
      respawned: !1,
      reason: "in-progress"
    };
    if (this.record.outcome) return {
      respawned: !1,
      reason: "no-state"
    };
    if (this.attachers.size > 0) return {
      respawned: !1,
      reason: "attached"
    };
    if (this.lastInputAt && this.lastInputAt >= s) return {
      respawned: !1,
      reason: "busy"
    };
    if (!h) return {
      respawned: !1,
      reason: "no-state"
    };
    if (r !== "attach" && !da(h) && this.adoptedAt && Date.now() - this.adoptedAt < Je) return {
      respawned: !1,
      reason: "busy"
    };
    if (da(h) && r === "sweep" && !e?.has(this.dispatch.short)) return {
      respawned: !1,
      reason: "settled"
    };
    if (!da(h) && h.tempo !== "idle" && !(this.isParkedIdleFork(h) && h.inFlight !== void 0)) return {
      respawned: !1,
      reason: "busy"
    };
    if (ye(h)) return {
      respawned: !1,
      reason: "inflight"
    };
    if (!this.transitionTo({
      kind: "upgrading"
    })) return {
      respawned: !1,
      reason: "in-progress"
    };
    return this.onState.emit({
      pid: this.record.pid
    }), i("tengu_bg_respawn_stale", {
      short: XA(this.dispatch.short),
      rvSent: this.shutdownWorker(),
      trigger: c(r),
      worker_cli_version: Di(this.record.cliVersion)
    }), {
      respawned: !0
    };
  }
  isParkedIdleFork(e) {
    return (B3n(this.record.cliVersion, je, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION) || e.inFlight?.drainableMonitors !== void 0) && e.state === "working" && e.tempo === "blocked" && e.needs === ub && e.interactiveLineage === !0;
  }
  async retireIfSettled(e, r, s = e, {shedMonitoringOnly: h = !1} = {}) {
    if (this.isTransitioning) return {
      retired: !1,
      reason: "in-progress"
    };
    if (this.record.outcome) return {
      retired: !1,
      reason: "no-state"
    };
    if (this.attachers.size > 0) return {
      retired: !1,
      reason: "attached"
    };
    if (cWe(this.dispatch)) return {
      retired: !1,
      reason: "host-managed"
    };
    if (r?.has(this.dispatch.short)) return {
      retired: !1,
      reason: "pinned"
    };
    if (this.adoptedAt && Date.now() - this.adoptedAt < Je) return {
      retired: !1,
      reason: "recent-adopt"
    };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e) return {
      retired: !1,
      reason: "recent-input"
    };
    let n = await Yr(to(this.dispatch.short), this.storageV5);
    if (this.isTransitioning || this.attachers.size > 0) return {
      retired: !1,
      reason: "in-progress"
    };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e) return {
      retired: !1,
      reason: "recent-input"
    };
    if (!n) {
      if (this.dispatch.source === "spare" && Date.now() - this.dispatch.createdAt > e) {
        if (!this.transitionTo({
          kind: "retiring",
          reason: "grace"
        })) return {
          retired: !1,
          reason: "in-progress"
        };
        let D = Date.now() - this.dispatch.createdAt;
        return i("tengu_bg_retired", {
          short: XA(this.dispatch.short),
          rvSent: this.shutdownWorker(),
          settledForMs: D,
          state: b("stale-spare"),
          cause: b("stale-spare"),
          worker_cli_version: Di(this.record.cliVersion)
        }), {
          retired: !0,
          cause: "stale-spare",
          idleMs: D
        };
      }
      return {
        retired: !1,
        reason: "no-state"
      };
    }
    if (this.dispatch.source !== "shell" && !klt() && !n.name && !n.intent && !n.worktreePath && n.template === "bg" && n.state === "working" && n.tempo === "blocked" && !((n.inFlight?.tasks ?? 0) > 0)) {
      let D = Date.parse(n.createdAt), T = Date.parse(n.updatedAt), C = Date.now() - (T > D ? T : D);
      if (C < Ct) return {
        retired: !1,
        reason: "empty-idle-grace"
      };
      if (!this.transitionTo({
        kind: "retiring",
        reason: "grace"
      })) return {
        retired: !1,
        reason: "in-progress"
      };
      return this.deleteJobDirOnSettle = !0, i("tengu_bg_retired", {
        short: XA(this.dispatch.short),
        rvSent: this.shutdownWorker(),
        settledForMs: C,
        state: b("empty-idle"),
        cause: b("empty-idle"),
        worker_cli_version: Di(this.record.cliVersion)
      }), {
        retired: !0,
        cause: "empty-idle",
        idleMs: C
      };
    }
    let p = this.isParkedIdleFork(n), o = da(n) || this.dispatch.launch.mode !== "exec" && (n.tempo === "idle" || n.state === "blocked" && n.tempo === "blocked" || p), u = Date.parse(n.updatedAt), g = n.tempo === "blocked" && n.state !== "blocked" && n.needs !== void 0 && n.needs !== ub, f = this.isVersionStale && !(this.record.cliVersion && Nyt(this.record.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION)) && !e7e(this.record.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION) && this.dispatch.launch.mode !== "exec" && n.tempo !== "active" && !g && !n.routine && (n.inFlight?.tasks ?? 0) - (n.inFlight?.drainableMonitors ?? 0) === 0 && (n.inFlight?.queued ?? 0) === 0 && !(n.inFlight?.kinds ?? []).includes("session_cron") && u < Date.now() - bRt;
    if (!o && !f) return {
      retired: !1,
      reason: "not-settled"
    };
    let v = h || f ? n.inFlight?.drainableMonitors ?? 0 : 0, w = (n.inFlight?.kinds ?? []).filter(D => D !== "artifact_watch" || v === 0), S = da(n) && w.length > 0 && w.every(D => it.includes(D)), y = n.interactiveLineage === !0 && B3n(this.record.cliVersion, je, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION), R = f && !y ? 0 : 1;
    if ((n.inFlight?.queued ?? R) > 0 || (n.inFlight?.tasks ?? R) - v > 0 && !S) return {
      retired: !1,
      reason: "inflight"
    };
    if (w.includes("session_cron")) return {
      retired: !1,
      reason: "session-cron"
    };
    if (n.routine) return {
      retired: !1,
      reason: "routine"
    };
    let L = n.bridgeSessionId ? Math.max(e, s) : e, I = n.updatedAt && Date.now() - Date.parse(n.updatedAt);
    if (!I || I < L) return {
      retired: !1,
      reason: "grace"
    };
    if (!this.transitionTo({
      kind: "retiring",
      reason: "grace"
    })) return {
      retired: !1,
      reason: "in-progress"
    };
    let M = n.inFlight?.tasks !== void 0 && n.inFlight.queued !== void 0, U = !o || !M || !h && v > 0 ? "abandoned-stale" : da(n) ? "settled" : "idle-prompt";
    return i("tengu_bg_retired", {
      short: XA(this.dispatch.short),
      rvSent: this.shutdownWorker(),
      settledForMs: I,
      bridged: !!n.bridgeSessionId,
      detritusOnly: S,
      state: f2(n.state),
      cause: c(U),
      worker_cli_version: Di(this.record.cliVersion)
    }), {
      retired: !0,
      cause: U,
      idleMs: I
    };
  }
  sigtermWorker() {
    try {
      this.pty?.kill("SIGTERM");
    } catch {}
  }
  onPtyAuthRequired() {
    let e = this.dispatch.launch.mode;
    if (i("tengu_bg_pty_auth_mismatch", {
      mode: c(e)
    }), e === "exec") {
      t(`[bg] exec worker ${this.dispatch.short}: ptyHost rejected auth token \u2014 roster ptyAuth poisoned; input is dead until re-dispatch (exec workers are never auto-respawned)`, {
        level: "warn"
      });
      return;
    }
    this.rekeyForAuthMismatch("pty-auth-required");
  }
  rekeyForAuthMismatch(e) {
    if (this.authRekeyFired || this.authRekeyCount >= yt || this.phase.kind !== "running" || this.record.outcome || this.dispatch.launch.mode === "exec") {
      t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 not re-keying ` + `(via=${this.via} phase=${this.phase.kind} mode=${this.dispatch.launch.mode} fired=${this.authRekeyFired} count=${this.authRekeyCount})`, {
        level: "warn"
      });
      return;
    }
    this.authRekeyFired = !0, Yr(to(this.dispatch.short), this.storageV5).then(r => {
      let s = Ze(r, e);
      if (s === "settled") {
        this.authRekeyFired = !1, i("tengu_bg_adopt_token_lost_respawn", {
          source: c(e),
          deferred: !1,
          skipped: b("settled")
        }), t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 worker already settled; leaving to retireIfSettled`, {
          level: "warn"
        });
        return;
      }
      if (s !== null) {
        i("tengu_bg_adopt_token_lost_respawn", {
          source: c(e),
          deferred: !0,
          reason: c(s)
        }), t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 ` + (s === "active" ? "worker is mid-turn" : "worker has non-resumable in-flight work") + "; deferring re-key respawn until safe", {
          level: "warn"
        }), this.pendingAuthRekey = e;
        return;
      }
      i("tengu_bg_adopt_token_lost_respawn", {
        source: c(e),
        deferred: !1
      }), t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 respawning to re-key (--resume preserves the session)`, {
        level: "warn"
      }), this.fireAuthRekey();
    });
  }
  fireAuthRekey() {
    if (this.pendingAuthRekey = void 0, this.phase.kind !== "running" || this.record.outcome) return;
    if (!this.transitionTo({
      kind: "upgrading"
    })) return;
    this.authRekeyCount++, this.onState.emit({
      pid: this.record.pid
    }), this.sigtermWorker();
  }
  constructor(e, r, s, h, n, p, o) {
    this.dispatch = e;
    this.spawnPty = r;
    this.getAuthSnapshot = s;
    this.via = h;
    this.storageV5 = p;
    this.credentials = o;
    if (this.record = {
      short: e.short,
      nonce: e.nonce,
      sessionId: e.sessionId,
      pid: 0,
      attempt: 0,
      startedAt: Date.now(),
      createdAt: e.createdAt,
      cwd: e.cwd,
      backend: "daemon",
      tempo: "active",
      state: "starting",
      detail: "",
      intent: e.seed?.intent ?? "",
      name: e.seed?.name,
      agent: e.agent,
      routine: e.routine,
      worktreePath: e.worktree?.path,
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      source: e.source,
      ...n
    }, e.cols) this.ptyCols = e.cols;
    if (e.rows) this.ptyRows = e.rows;
  }
  static spawn(e, r, s, h, n, p) {
    let o = new Oae(e, r ?? v0r(), s, "cold", void 0, n, p);
    if (h?.afterUpgrade) return o.attempt = 1, o.buildBridgeReattachEnvFromState().then(u => o.doSpawn(u, !0)).catch(d), 
    o;
    return o.doSpawn(e.reattachEnv).catch(d), o;
  }
  static claim(e, r) {
    let s = new Oae(e, r.spawnPty, r.getAuthSnapshot, "spare", {
      pid: r.pid,
      attempt: 1,
      state: "running",
      cliVersion: {
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
    }, r.storageV5, r.credentials);
    if (s.attempt = 1, s.bootedViaResume = e.launch.mode !== "exec" && (e.launch.restoresTranscript ?? e.launch.mode === "resume"), 
    s.ptySockPath = r.ptySockPath, s.rvSockPath = bQt(e.short), r.ptyAuth) s.ptyAuth = r.ptyAuth;
    return s.wirePty(ae(r.ptySockPath, r.pid, {
      short: e.short,
      auth: s.ptyAuth
    })), s.resize(e.cols ?? 200, e.rows ?? 50), s.connectRv(), Ul(r.pid, {
      skipCache: !0
    }).then(h => {
      if (s.record.pid !== r.pid || s.isDetached || s.record.outcome) return;
      if (h) s.procStart = h;
      s.patch({
        pid: r.pid
      });
    }), s;
  }
  socketAuth() {
    return this.rvAuth ??= de(16).toString("hex"), this.ptyAuth ??= de(16).toString("hex"), 
    {
      rvAuth: this.rvAuth,
      ptyAuth: this.ptyAuth
    };
  }
  static buildClaimFrame(e, r, s) {
    let h = to(e.short), n = Xe(e, h, r, bQt(e.short), s);
    delete n.CLAUDE_BG_PTY_AUTH, $1r(n, e.reattachEnv), dJ(n), Qe(n, e), delete n.CLAUDE_PTY_HOST_NO_STABLE_PATH;
    let p = qe(e, 1, !1, e.sessionId, void 0, e.respawnFlags);
    return {
      env: n,
      argv: p
    };
  }
  static async adopt(e, r, s, h, n, p) {
    if (r.dispatch.env) r.dispatch.env = Zze(r.dispatch.env, l2o);
    if (delete r.dispatch.reattachEnv, !Aa(r.pid)) return null;
    let o = await We(Ul(r.pid, {
      skipCache: !0
    }), w0r);
    if (o && r.procStart !== o) return null;
    let u = new Oae(r.dispatch, s, h, "adopted", {
      pid: r.pid,
      attempt: r.attempt,
      startedAt: r.startedAt,
      messagingSock: r.messagingSock,
      state: "adopted",
      detail: "adopted from previous supervisor",
      cliVersion: r.cliVersion,
      ...r.ptySock ? {} : {
        legacy: !0
      }
    }, n, p);
    if (u.attempt = r.attempt, u.procStart = r.procStart, u.rosterExtras = Pmr(r), u.workerReady = !0, 
    u.adoptedAt = Date.now(), u.rvSockPath = r.rendezvousSock, u.ptySockPath = r.ptySock, 
    u.rvAuth = r.rvAuth, u.ptyAuth = r.ptyAuth, u.dispatch.launch.mode === "exec") u.execTracker = ke(to(u.dispatch.short), u.storageV5), 
    u.workerReady = !0;
    if (r.ptySock) u.wirePty(ae(r.ptySock, r.pid, {
      procStart: u.procStart,
      short: u.dispatch.short,
      auth: u.ptyAuth,
      onAuthRequired: () => u.onPtyAuthRequired()
    })), u.ptyCols = 0, u.seedFocus(!1);
    if (r.decModes) u.decModes.seed(r.decModes);
    if (r.firedInteractiveMarks) u.firedInteractiveMarks = r.firedInteractiveMarks.slice(0, 2);
    if (u.replPid = r.replPid ?? 0, u.replProcStart = r.replProcStart, u.bootedViaResume = r.dispatch.launch.mode !== "exec" && (r.dispatch.launch.restoresTranscript ?? r.dispatch.launch.mode === "resume"), 
    u.connectRv(), r.pendingRespawn === "upgrade" && !(r.cliVersion && Nyt(r.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION)) && !e7e(r.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION)) u.transitionTo({
      kind: "upgrading"
    }), setTimeout(g => {
      if (g.phase.kind === "upgrading" && !g.record.outcome) g.sigtermWorker();
    }, 5e3, u).unref();
    if (u.dispatch.launch.mode !== "exec" && r.ptySock && r.cliVersion && (r.rvAuth === void 0 || r.ptyAuth === void 0)) return t(`[bg] adopt ${u.dispatch.short}: roster rvAuth/ptyAuth missing for token-era worker \u2014 schema-skewed daemon stripped them`, {
      level: "warn"
    }), u.rekeyForAuthMismatch("missing-at-adopt"), u;
    return u;
  }
  static unverified(e, r, s, h) {
    let n = new Oae(r.dispatch, void 0, void 0, "adopted", {
      pid: r.pid,
      attempt: r.attempt,
      startedAt: r.startedAt,
      messagingSock: r.messagingSock,
      state: "adopted",
      detail: "adopted (pid unverifiable; tracking via pty.sock)",
      cliVersion: r.cliVersion
    }, s, h);
    if (n.attempt = r.attempt, n.procStart = r.procStart, n.rosterExtras = Pmr(r), r.firedInteractiveMarks) n.firedInteractiveMarks = r.firedInteractiveMarks.slice(0, 2);
    return n.replPid = r.replPid ?? 0, n.replProcStart = r.replProcStart, n.bootedViaResume = r.dispatch.launch.mode !== "exec" && (r.dispatch.launch.restoresTranscript ?? r.dispatch.launch.mode === "resume"), 
    n.rvSockPath = r.rendezvousSock, n.ptySockPath = r.ptySock, n.rvAuth = r.rvAuth, 
    n.ptyAuth = r.ptyAuth, n.unverifiedSock = r.ptySock, n.lastInputAt = Date.now(), 
    n.pidPoll = setInterval(p => {
      if (p.record.outcome || !p.unverifiedSock) return;
      Bfn(p.unverifiedSock).then(o => {
        if (o || p.record.outcome || p.phase.kind !== "spawning") return;
        p.settle("crashed");
      });
    }, ve, n), n.pidPoll.unref(), i("tengu_bg_adopt_unverified", {
      short: XA(e)
    }), n;
  }
  tail(e) {
    return e > 0 ? this.ring.slice(-e) : [];
  }
  ringSnapshot() {
    return this.ring;
  }
  get sessionIdTaken() {
    return this.sessionIdTakenLatch;
  }
  preInitErrorTail() {
    let e = cn(this.ring.slice(this.ringSpawnMark).join("")).replace(/\s+/g, " ").trim();
    if (!e) return;
    return e.length > he ? `\u2026${e.slice(-he)}` : e;
  }
  decModeSnapshot() {
    return this.decModes.snapshot();
  }
  write(e) {
    this.lastInputAt = Date.now(), this.pty?.write(e);
  }
  noteActivity() {
    this.lastInputAt = Date.now();
  }
  shiftGraceClocksForward(e) {
    if (e <= 0) return;
    if (this.hostWokeAt = Date.now(), this.adoptedAt !== void 0) this.adoptedAt += e;
    if (this.lastInputAt !== void 0) this.lastInputAt += e;
  }
  seedFocus(e) {
    if (this.dispatch.launch.mode === "exec") return;
    this.pty?.write(e ? XNt : JNt);
  }
  resize(e, r) {
    if (this.ptyCols = e, this.ptyRows = r, O() === "windows" && !this.workerReady) {
      this.resizeDeferred = !0;
      return;
    }
    try {
      this.pty?.resize(e, r);
    } catch {}
  }
  signalPtyPgrp() {
    if (O() === "windows" || !this.record.pid) return;
    setTimeout(e => {
      try {
        process.kill(-e, "SIGWINCH");
      } catch {}
    }, 15, this.record.pid);
  }
  resizeForRepaint(e, r) {
    if (e !== this.ptyCols || r !== this.ptyRows) return this.resize(e, r), this.signalPtyPgrp(), 
    this.rv?.send({
      type: "repaint"
    }), () => {};
    let s = this.rv?.send({
      type: "repaint"
    }) === !0, h = () => {}, n = setTimeout((p, o) => {
      if (h(), this.ptyCols !== p || this.ptyRows !== o) return;
      let u = Math.max(2, p - 1);
      this.resize(u, o), this.signalPtyPgrp(), setTimeout((g, f, v) => {
        if (this.ptyCols === v && this.ptyRows === f) this.resize(g, f), this.signalPtyPgrp();
      }, 30, p, o, u);
    }, s ? 50 : 0, e, r);
    if (s) h = this.onRepaintDone.subscribe(() => {
      h(), clearTimeout(n);
    });
    return () => {
      h(), clearTimeout(n);
    };
  }
  rosterEntry() {
    return {
      ...this.rosterExtras,
      pid: this.record.pid,
      procStart: this.procStart,
      sessionId: this.record.sessionId,
      rendezvousSock: this.rvSockPath ?? bQt(this.dispatch.short),
      ptySock: this.record.legacy ? void 0 : this.ptySockPath ?? nk(this.dispatch.short),
      messagingSock: this.record.messagingSock,
      cliVersion: this.record.cliVersion,
      startedAt: this.record.startedAt,
      attempt: this.attempt,
      cwd: this.dispatch.cwd,
      worktreePath: this.dispatch.worktree?.path,
      dispatch: this.cappedDispatch(),
      pendingRespawn: this.phase.kind === "upgrading" ? "upgrade" : void 0,
      decModes: this.decModes.snapshot(),
      firedInteractiveMarks: this.firedInteractiveMarks.length > 0 ? this.firedInteractiveMarks.slice(0, 2) : void 0,
      rvAuth: this.rvAuth,
      ptyAuth: this.ptyAuth,
      replPid: this.replPid > 1 ? this.replPid : void 0,
      replProcStart: this.replPid > 1 ? this.replProcStart : void 0
    };
  }
  cappedDispatch() {
    return JSON.parse(JSON.stringify(this.dispatch, (e, r) => {
      let s = e.toUpperCase();
      if (e === "reattachEnv" || e === "attachStallRespawns" || TXn.includes(s === "PATH" ? e : s)) return;
      if (typeof r === "string" && r.length > Ye) return r.slice(0, Ye);
      return r;
    }));
  }
  async reply(e, {nextTurn: r = !1} = {}) {
    if (this.lastInputAt = Date.now(), this.lastInputAttacher = void 0, this.isReplyQueueOnly) {
      let p;
      if (this.rvRejected) p = "the worker rejected the rendezvous token"; else if (!this.rv) p = "no rendezvous client"; else if (!this.rv.send({
        type: "reply",
        text: e,
        ...r && {
          nextTurn: r
        }
      })) p = "the rendezvous is not connected";
      if (p) t(`[bg] ${this.record.short}: reply refused: ${p}`);
      return !p;
    }
    let s = await Yr(to(this.dispatch.short), this.storageV5), n = s?.tempo === "blocked" || await this.isReplWaiting() || this.record.tempo === "blocked";
    if ((!s || n || r) && this.rv?.send({
      type: "reply",
      text: e,
      ...r && {
        nextTurn: r
      }
    })) return !0;
    if (r || n && this.dispatch.launch.mode !== "exec") return !1;
    if (this.pty) {
      let p = this.dispatch.launch.mode !== "exec";
      return this.replyChain = this.replyChain.then(() => new Promise(o => {
        this.pty?.write(p ? `\x1b[200~${e}\x1b[201~` : e), setTimeout(u => {
          this.pty?.write("\r"), u();
        }, 10, o);
      })), !0;
    }
    return this.rv?.send({
      type: "reply",
      text: e
    }) ?? !1;
  }
  async isReplWaiting() {
    if (this.replPid <= 1 || this.dispatch.launch.mode === "exec") return !1;
    try {
      let {liveStatusOfJob: e} = await import("./chunk-q864dhf3.js");
      return await e(this.replPid, this.dispatch.short) === "waiting";
    } catch (e) {
      return t(`[bg] ${this.dispatch.short}: live status unreadable (${E(e) ?? l(e)}), treating as waiting`), 
      !0;
    }
  }
  sendAttacherCaps(e) {
    return this.rv?.send({
      type: "attacher-caps",
      caps: e
    }) ?? !1;
  }
  kill(e = "SIGTERM", r = "killed", s) {
    if (this.phase.kind === "retired") return;
    if (this.killOutcome = r === "failed" ? "failed" : "killed", this.handoffKill = this.handoffKill || r === "handoff", 
    s) this.patch({
      detail: s
    });
    if (this.transitionTo({
      kind: "retiring",
      reason: "reap"
    }), this.backoffTimer) clearTimeout(this.backoffTimer), this.backoffTimer = null;
    if (this.unverifiedSock) {
      aze(this.unverifiedSock, this.storageV5).finally(() => this.settle(this.killOutcome));
      return;
    }
    if (this.pty) try {
      this.pty.kill(e);
    } catch {} else if (this.record.pid && !this.pidRecycled()) try {
      process.kill(-this.record.pid, e);
    } catch {
      try {
        process.kill(this.record.pid, e);
      } catch {}
    }
    if (!this.pty) this.settle(this.killOutcome);
  }
  stop() {
    if (this.phase.kind === "retiring" && this.phase.reason === "reap") this.settle(this.killOutcome); else if (this.phase.kind === "retiring" && this.phase.reason === "grace") this.settle("done"); else if (this.phase.kind !== "retired") this.transitionTo({
      kind: "retiring",
      reason: "stop"
    });
    if (this.backoffTimer) clearTimeout(this.backoffTimer), this.backoffTimer = null;
    this.clearLiveness(), this.offData?.dispose(), this.offExit?.dispose(), this.execTracker?.dispose(), 
    this.execTracker = void 0, this.pty?.dispose(), this.pty = void 0;
  }
  async doSpawn(e, r = !1) {
    if (this.attempt++, this.authRekeyFired = !1, this.pendingAuthRekey = void 0, this.workerReady = !1, 
    this.firedInteractiveMarks = [], this.attempt > 1) this.liveTranscriptPath = null;
    this.resizeDeferred = !1, this.ringSpawnMark = this.ring.length, this.lastSpawnAt = Date.now(), 
    this.lastExitExternalStop = !1;
    let s = this.dispatch, h = to(s.short);
    await aHe(s.short, this.storageV5).catch(() => {});
    let n = bf();
    if (n) {
      i("tengu_bg_launcher_worker_refused", {
        attempt: this.attempt
      }), m("agent_launcher", "worker_refused"), this.patch({
        state: "crashed",
        detail: n
      });
      let T = this.dimNotice(n);
      return this.pushRing(T), this.onStream.emit(T), this.settle("crashed");
    }
    let p = Lcn(s) ? await we(s.short, this.getAuthSnapshot?.()) : void 0, o = await Ae(s.short, s.launch.mode === "exec" ? {
      ptyAuth: this.socketAuth().ptyAuth
    } : this.socketAuth());
    try {
      await tbs(mt(Jk(this.ptySockPath ?? nk(s.short))));
    } catch (T) {
      if (this.credentials) await Promise.all([ o ? this.credentials.discardSpentCredentialFile(o).catch(() => {}) : void 0, p ? this.credentials.discardSpentCredentialFile(p).catch(() => {}) : void 0 ]); else await Promise.all([ o ? ce(o).catch(() => {}) : void 0, p ? ce(p).catch(() => {}) : void 0 ]);
      if (this.record.outcome) return;
      if (E(T) === ibr) {
        let C = `worker socket directory is not owned by this user \u2014 ${l(T)}`;
        this.patch({
          state: "crashed",
          detail: C
        });
        let H = this.dimNotice(C);
        return this.pushRing(H), this.onStream.emit(H), this.settle("crashed");
      }
      return this.scheduleRespawn(l(T));
    }
    await ce(Jk(this.ptySockPath ?? nk(s.short))).catch(() => {});
    let u = s.launch.mode === "resume" ? s.launch.sessionId : void 0, g = !1, f = !1, v = s.sessionId, w, {respawnFlags: S, cwd: y} = s, R = !1;
    if (this.attempt > 1) {
      let T = await Yr(h, this.storageV5);
      v = T?.resumeSessionId ?? s.sessionId, S = T?.respawnFlags ?? s.respawnFlags, y = T?.cwd ?? s.cwd, 
      R = T?.interactiveLineage === !0;
      let C = Zv(YB(this.storageV5)), H = await nae(v, y, T?.linkScanPath, void 0, C);
      if (g = H.hasMessages, g) w = H.path, this.liveTranscriptPath = H.path;
      let G = u !== void 0 && xOe(u);
      if (f = !g && u !== void 0 && !(await nae(G ? gt(u, ".jsonl") : u, y, G ? u : void 0, void 0, C)).hasMessages, 
      !g) await pje(H.path, C);
    }
    if (this.effectiveCwd = y, this.phase.kind === "retiring" || this.phase.kind === "retired" || this.record.outcome) {
      if (o) if (this.credentials) this.credentials.discardSpentCredentialFile(o).catch(() => {}); else ce(o).catch(() => {});
      return;
    }
    if (f) return this.patch({
      state: "crashed",
      detail: `source session ${u} not found`
    }), this.settle("crashed");
    if (!this.spawnPty) return this.patch({
      state: "crashed",
      detail: "Bun.Terminal unavailable (running under Node?)"
    }), i("tengu_bg_pty_unavailable", {
      short: XA(this.dispatch.short)
    }), this.settle("crashed");
    let L = qe(s, this.attempt, g, v, w, S);
    this.bootedViaResume = (s.launch.mode === "prompt" || s.launch.mode === "resume") && (this.attempt === 1 || !g && v === s.sessionId) ? s.launch.restoresTranscript ?? L.includes("--resume") : L.includes("--resume");
    let I = Xe(s, h, p, this.rvSockPath ?? bQt(s.short), this.socketAuth());
    if (this.attempt > 1 && g && !r) {
      if (I.CLAUDE_CODE_RESUME_INTERRUPTED_TURN = "1", $e()) {
        if (I.CLAUDE_CODE_RESUME_PROMPT ??= wt, R) I.CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS ??= String(At);
      }
    }
    if (this.attempt > 1 && !g && v !== s.sessionId) I.CLAUDE_BG_POST_CLEAR_RESPAWN = "1";
    if ($1r(I, e), o) delete I.CLAUDE_BG_RV_AUTH, delete I.CLAUDE_BG_PTY_AUTH, I.CLAUDE_BG_SOCKET_TOKENS_PATH = o;
    if (dJ(I), Qe(I, s), O() === "macos" && UBr() && Et()) I.CLAUDE_PTY_HOST_NO_STABLE_PATH = "1"; else delete I.CLAUDE_PTY_HOST_NO_STABLE_PATH;
    delete I.CLAUDE_CODE_DISABLE_BG_STABLE_PATH;
    let M = this.ptyCols || (s.cols ?? 200), U = this.ptyRows || (s.rows ?? 50), D;
    try {
      let {cmd: T, prefixArgs: C} = s.launch.mode === "exec" ? {
        cmd: WC(s.launch.cmd),
        prefixArgs: []
      } : vu({
        pinToCurrentBinary: !0
      });
      D = this.spawnPty(T, [ ...C, ...L ], {
        cols: M,
        rows: U,
        cwd: y,
        env: I,
        ptySock: this.ptySockPath ?? nk(s.short),
        short: s.short,
        ptyAuth: this.ptyAuth
      });
    } catch (T) {
      let C = E(T), H = nf()[0];
      if (W(T)) {
        let G = await ft(y).then(() => !0, () => !1);
        if (this.record.outcome) return;
        if (!G) return this.settleCwdGone("cold", y);
        let K = H ? `launcher \`${H}\` was deleted or moved (ENOENT) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER, then run your command again` : s.launch.mode === "exec" ? `${s.launch.cmd}: command not found` : "daemon binary was deleted (upgrade in progress) \u2014 run your command again to use the new version";
        if (H) i("tengu_bg_launcher_worker_refused", {
          attempt: this.attempt
        }), m("agent_launcher", "worker_launcher_enoent"); else i("tengu_bg_spawn_binary_gone", {
          short: XA(this.dispatch.short),
          attempt: this.attempt
        });
        this.patch({
          state: "crashed",
          detail: K
        });
        let F = this.dimNotice(K);
        return this.pushRing(F), this.onStream.emit(F), this.settle("crashed");
      }
      if (H && (C === "EACCES" || C === "EPERM")) {
        if (this.record.outcome) return;
        let G = `launcher \`${H}\` could not be executed (${C})`;
        i("tengu_bg_launcher_worker_refused", {
          attempt: this.attempt
        }), m("agent_launcher", C === "EACCES" ? "worker_launcher_eacces" : "worker_launcher_eperm"), 
        this.patch({
          state: "crashed",
          detail: G
        });
        let K = this.dimNotice(G);
        return this.pushRing(K), this.onStream.emit(K), this.settle("crashed");
      }
      return this.scheduleRespawn(l(T));
    }
    if (s.launch.mode === "exec") this.execTracker?.dispose(), this.execTracker = ke(h, this.storageV5), 
    this.workerReady = !0;
    if (O() === "windows") Ee(hue(s.short), String(D.pid)).catch(() => {});
    this.wirePty(D), this.rv?.close(), this.rv = void 0, this.lastRvHeartbeat = void 0, 
    this.stalledLogged = !1, this.connectRv(), this.patch({
      pid: D.pid,
      attempt: this.attempt,
      state: this.attempt > 1 ? "resuming" : "running",
      detail: "",
      cliVersion: {
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
    }), i("tengu_bg_worker_spawn", {
      short: XA(this.dispatch.short),
      attempt: this.attempt,
      source: c(this.dispatch.source),
      launch_mode: c(this.dispatch.launch.mode)
    }), Ul(D.pid, {
      skipCache: !0
    }).then(T => {
      if (!T || this.record.pid !== D.pid || this.isDetached || this.record.outcome) return;
      this.procStart = T, this.patch({
        pid: D.pid
      });
    });
  }
  wirePty(e) {
    this.pty = e, this.transitionTo({
      kind: "running"
    }), this.decModes = PBt(), e.onResume?.(() => {
      this.rv?.send({
        type: "repaint"
      });
    }), e.onRepl?.((s, h) => {
      if (!this.record.pid || this.record.outcome || this.isDetached) return;
      this.replPid = s, this.replProcStart = h, this.onState.emit({
        pid: this.record.pid
      });
    }), this.offData = e.onData(s => {
      if (this.decModes.feed(s) && this.record.pid) this.onState.emit({
        pid: this.record.pid
      });
      this.execTracker?.feed(s), this.pushRing(s.includes(VQ) ? s.replaceAll(VQ, "") : s), 
      this.onStream.emit(s);
    });
    let r = !1;
    this.offExit = e.onExit(({exitCode: s, signal: h, hostStderr: n}) => {
      if (r) return;
      r = !0, this.offData?.dispose(), this.execLastLine = this.execTracker?.lastLine, 
      this.execTracker?.dispose(), this.execTracker = void 0, this.pty = void 0, this.onExit(s, h, n);
    });
  }
  dimNotice(e) {
    return Xst(`\r\n\x1b[2m[${e}]\x1b[0m\r\n`);
  }
  pushRing(e) {
    if (this.ring.push(e), this.ringBytes += e.length, this.ringBytes > SQt * 1.25 && this.ring.length > 1) {
      let r = 0, s = 0;
      while (this.ringBytes - s > SQt && r < this.ring.length - 1) s += this.ring[r].length, 
      r++;
      this.ring.splice(0, r), this.ringBytes -= s, this.ringSpawnMark = Math.max(0, this.ringSpawnMark - r);
    }
  }
  patch(e) {
    if (Object.assign(this.record, e), this.onState.emit(e), this.pendingAuthRekey !== void 0 && e.tempo !== void 0 && e.tempo !== "active") {
      let r = this.pendingAuthRekey;
      Yr(to(this.dispatch.short), this.storageV5).then(s => {
        if (this.pendingAuthRekey !== r) return;
        let h = Ze(s, r);
        if (h === "settled") {
          this.pendingAuthRekey = void 0, this.authRekeyFired = !1, t(`[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${r}) dropped \u2014 worker settled; leaving to retireIfSettled`, {
            level: "warn"
          });
          return;
        }
        if (h !== null) return;
        t(`[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${r}) firing on tempo='${e.tempo}'`, {
          level: "warn"
        }), this.fireAuthRekey();
      });
    }
  }
  onExit(e, r, s) {
    if (this.isDetached) return;
    if (this.phase.kind === "retired") return;
    let h = this.lastSpawnAt ? Date.now() - this.lastSpawnAt : void 0;
    if (Date.now() - this.lastCheckPidAt > ze) this.hostWokeAt = Date.now();
    let n = this.hostWokeAt !== void 0 && Date.now() - this.hostWokeAt < bt, p = !n && h !== void 0 && h < Ge && e !== 0;
    if (p) this.fastCrashStreak++; else this.fastCrashStreak = 0;
    let o = this.fastCrashStreak >= 3, u = this.workerReady && h !== void 0 && h >= Rt;
    this.lastExitExternalStop = (r !== void 0 || kt.has(e ?? -1)) && !n;
    let g = this.workerReady ? void 0 : this.preInitErrorTail(), f = nf()[0], v = s ? Zc(Br(cn(s)), he) || void 0 : void 0, w = f && !this.workerReady && !g && v ? `(launch command: \`${f}\` \u2026): ${v}` : void 0, S = !!f && e === 0 && !this.workerReady && h !== void 0 && h < X6e, y = e !== 0 ? pDo(to(this.dispatch.short)) : void 0, R = y ? fDo(to(this.dispatch.short), y) : void 0, L = R ? Zc(Br(cn(R)), he) || void 0 : void 0, I = !g && L ? `: ${L}` : "", M = p && !!y && y === this.lastExitCause;
    this.lastExitCause = p ? y : void 0;
    let U = !this.workerReady && y === sdn, D = g ? ` \u2014 ${g}` : w ? ` \u2014 ${w}` : y ? ` \u2014 ${y}` : "", T = this.effectiveCwd ?? this.dispatch.cwd, C = !1;
    if (y === "setcwd") try {
      C = !He(T).isDirectory();
    } catch {
      C = !0;
    }
    let H = this.dispatch.launch.mode === "exec" && (r === "SIGINT" || r === "SIGQUIT"), G;
    if (this.phase.kind === "retiring" && this.phase.reason === "reap") G = this.killOutcome; else if (this.phase.kind === "retiring" && this.phase.reason === "grace") G = "done"; else if (this.phase.kind === "upgrading") G = void 0; else if (S) G = "crashed"; else if (e === 0) G = "done"; else if (this.dispatch.launch.mode === "exec") G = H ? "killed" : "crashed"; else if (C || U || !this.workerReady && (this.attempt >= 2 || g || w) || o || M || !u && this.attempt >= Fe) G = "crashed";
    if (i("tengu_bg_worker_exit", {
      short: XA(this.dispatch.short),
      code: e ?? void 0,
      signal: pe(r),
      attempt: this.attempt,
      procUptimeMs: h,
      source: c(this.dispatch.source),
      launch_mode: c(this.dispatch.launch.mode),
      outcome: pe(G),
      exitCause: T$o(y),
      worker_cli_version: Di(this.record.cliVersion),
      worker_stale: this.isVersionStale
    }), this.phase.kind === "retiring") return this.settle(this.phase.reason === "reap" ? this.killOutcome : "done");
    if (this.phase.kind === "upgrading") {
      this.transitionTo({
        kind: "spawning"
      }), this.attempt = 1, this.fastCrashStreak = 0, this.lastExitCause = void 0, this.patch({
        pid: 0,
        state: "starting",
        detail: "upgrading"
      }), this.procStart = void 0, this.buildBridgeReattachEnvFromState().then(F => this.doSpawn(F, !0)).catch(d);
      return;
    }
    if (S) {
      let F = `the launcher exited before Claude Code started \u2014 \`${f}\` must exec, not daemonize${w ? ` \u2014 ${w}` : ""}`;
      return i("tengu_bg_launcher_fork_and_exit", {
        attempt: this.attempt
      }), m("agent_launcher", "worker_fork_and_exit"), this.patch({
        state: "crashed",
        detail: F
      }), this.settle("crashed");
    }
    if (e === 0) {
      if (this.dispatch.launch.mode === "exec") {
        if (!this.execLastLine && this.ringBytes > 0) i("tengu_bg_exec_no_lastline", {
          ring_bytes: this.ringBytes
        });
        this.patch({
          detail: this.execLastLine || "(no output)"
        });
      }
      return this.settle("done");
    }
    let K = r ? `${r} (${e})` : `exit ${e}`;
    if (this.dispatch.launch.mode === "exec") {
      let F = this.execLastLine;
      return this.patch({
        state: H ? "stopped" : "crashed",
        detail: F ? `${K} \u2014 ${F}` : `${K}${D}`
      }), this.settle(H ? "killed" : "crashed");
    }
    if (U) {
      this.sessionIdTakenLatch = !0, i("tengu_bg_session_id_taken", {
        short: XA(this.dispatch.short),
        attempt: this.attempt,
        via: c(this.via),
        launch_mode: c(this.dispatch.launch.mode)
      }), this.patch({
        state: "crashed",
        detail: Ke
      });
      let F = this.dimNotice(Ke);
      return this.pushRing(F), this.onStream.emit(F), this.settle("crashed");
    }
    if (!this.workerReady && y?.startsWith("spare_postclaim:")) try {
      if (!He(this.dispatch.cwd).isDirectory()) return this.settleCwdGone("spare");
    } catch {
      return this.settleCwdGone("spare");
    }
    if (C) return this.settleCwdGone("boot", T);
    if (!this.workerReady && (this.attempt >= 2 || g || w)) {
      let F = !r && dge() ? " \u2014 possibly low memory \u2014 free some up and retry" : "";
      return this.patch({
        state: "crashed",
        detail: `${K} before init${D || F}`
      }), this.settle("crashed");
    }
    if (o || M) return this.patch({
      state: "crashed",
      detail: M ? `${K} \xd7${this.attempt}${D}${I}` : `${K} within ${Ge / 1e3}s of spawn \xd7${this.fastCrashStreak}${D}${I}`
    }), this.settle("crashed");
    if (u) this.attempt = 1;
    this.scheduleRespawn(`${K}${D}${I}`);
  }
  async doSpawnUnlessSettledOnDisk() {
    let e = $e() ? await Yr(to(this.dispatch.short), this.storageV5).catch(() => {}) : void 0;
    if (this.record.outcome || this.phase.kind === "retiring" || this.phase.kind === "retired") return;
    if (e && da(e) && !e.queuedPrompt) {
      i("tengu_bg_respawn_suppressed", {
        short: XA(this.dispatch.short),
        reason: b("settled_on_disk")
      });
      let r = R_(e.state);
      return this.settle(r === "success" ? "done" : r === "failure" ? "failed" : "killed");
    }
    if (e?.interactiveLineage && this.lastExitExternalStop) return i("tengu_bg_respawn_suppressed", {
      short: XA(this.dispatch.short),
      reason: b("no_task_contract")
    }), this.patch({
      state: "stopped",
      detail: "stopped by an external signal"
    }), this.settle("killed");
    return this.doSpawn();
  }
  settleCwdGone(e, r = this.dispatch.cwd) {
    let s = S0r(r);
    i("tengu_bg_spawn_cwd_gone", {
      short: XA(this.dispatch.short),
      attempt: this.attempt,
      via: c(e)
    }), this.patch({
      state: "crashed",
      detail: s
    });
    let h = this.dimNotice(`${s} \u2014 this job cannot be respawned`);
    this.pushRing(h), this.onStream.emit(h), this.settle("crashed");
  }
  async buildBridgeReattachEnvFromState() {
    let e = await Yr(to(this.dispatch.short), this.storageV5).catch(() => null);
    if (!e) return;
    return Vre(e.bridgeSessionId, e.bridgeSessionSeq, e.bridgeOutboundOnly, e.bridgeSessionGroupingId, {
      ownerAccountUuid: e.bridgeOwnerAccountUuid,
      ownerOrganizationUuid: e.bridgeOwnerOrganizationUuid,
      noHistoryBackfill: e.bridgeNoHistoryBackfill
    });
  }
  scheduleRespawn(e) {
    if (this.attempt >= Fe) return i("tengu_bg_respawn_exhausted", {
      short: XA(this.dispatch.short),
      attempts: this.attempt
    }), this.patch({
      state: "crashed",
      detail: e
    }), this.settle("crashed");
    if (this.phase.kind === "running") this.transitionTo({
      kind: "spawning"
    });
    this.patch({
      pid: 0,
      state: "crashed",
      detail: `${e}; respawning`
    }), this.procStart = void 0;
    let r = this.dimNotice(`worker crashed (${e}) \u2014 respawning\u2026`);
    this.pushRing(r), this.onStream.emit(r), this.backoffTimer = setTimeout(() => {
      if (this.backoffTimer = null, this.phase.kind !== "retiring" && this.phase.kind !== "retired") this.doSpawnUnlessSettledOnDisk().catch(d);
    }, St), this.backoffTimer.unref();
  }
  settle(e) {
    if (this.record.outcome) return;
    i("tengu_bg_settle", {
      short: XA(this.dispatch.short),
      outcome: c(e),
      uptimeMs: Date.now() - this.record.startedAt,
      attempt: this.attempt,
      worker_cli_version: Di(this.record.cliVersion),
      worker_stale: this.isVersionStale
    }), this.transitionTo({
      kind: "retired",
      outcome: e
    }), this.clearLiveness(), this.patch({
      outcome: e,
      settledAt: Date.now(),
      tempo: "idle"
    }), this.onSettle.emit(e);
  }
  connectRv() {
    if (this.rv || this.isDetached || this.record.outcome) return;
    if (this.dispatch.launch.mode === "exec") {
      this.startPidPoll();
      return;
    }
    this.rv = Ue(this.rvSockPath ?? bQt(this.dispatch.short), e => {
      if (e.type === "heartbeat") this.lastRvHeartbeat = Date.now(); else if (e.type === "auth-rejected" || e.type === "reply-rejected") this.rvRejected = !0, 
      i(e.type === "auth-rejected" ? "tengu_bg_rv_auth_mismatch" : "tengu_bg_rv_reply_rejected", {}), 
      this.rekeyForAuthMismatch(e.type === "auth-rejected" ? "rv-auth-rejected" : "rv-reply-rejected"); else if (e.type === "done") this.settle(e.outcome); else if (e.type === "state") this.patch(e.patch); else if (e.type === "detach-request") {
        let r = Gre(e.msg), s = this.attachers.get(this.lastInputAttacher);
        if (!e.broadcast && s) s.deliver(r); else if (this.attachers.size > 0) for (let h of this.attachers.values()) h.deliver(r); else this.onStream.emit(r);
      } else if (e.type === "repaint-done") this.onRepaintDone.emit(); else if (e.type === "interactive-mark") {
        let r = _so(e);
        if (!r) {
          t(`[bg ${this.record.short}] dropped malformed rv interactive-mark frame`, {
            level: "warn"
          }), i("tengu_bg_imark_malformed", {});
          return;
        }
        if (this.firedInteractiveMarks.length < 2 && !this.firedInteractiveMarks.some(s => s.kind === r.kind)) {
          if (this.firedInteractiveMarks.push(r), this.record.pid) this.onState.emit({
            pid: this.record.pid
          });
        }
        for (let s of this.attachers.values()) if (s.caps?.imark === !0) s.deliver(xmr({
          ...r,
          nonce: s.imarkNonce
        }));
      }
    }, () => void this.checkPid(), () => {
      if (this.workerReady = !0, this.rvRejected = !1, this.resizeDeferred) this.resizeDeferred = !1, 
      this.resize(this.ptyCols, this.ptyRows);
      if (this.attachers.size > 0) {
        let e = [ ...this.attachers.values() ].at(-1);
        this.sendAttacherCaps(e.caps ?? null);
      } else this.sendAttacherCaps(null);
    }, this.rvAuth), this.startPidPoll();
  }
  startPidPoll() {
    if (this.pidPoll) return;
    this.lastCheckPidAt = Date.now(), this.pidPoll = setInterval(() => void this.checkPid(!0), ve), 
    this.pidPoll.unref();
  }
  pidRecycled() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = XBe(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async pidRecycledAsync() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = await Ul(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async failIfHostExited(e) {
    let r = this.record.pid;
    if (!r || this.record.outcome || this.isKilling || !this.pty) return !1;
    let s = await pPr(r);
    if (!vX(s)) return !1;
    if (this.record.outcome || this.isKilling || !this.pty || this.record.pid !== r) return !1;
    return t(`bg: ${this.dispatch.short} pty host pid=${r} has exited but is unreaped (state ${s}) via=${e} \u2014 reaping it and marking the session failed`, {
      level: "warn"
    }), i("tengu_bg_ptyhost_zombie", {
      short: XA(this.dispatch.short),
      via: c(e),
      state: c(s === "Z" ? "Z" : "X"),
      uptimeMs: Date.now() - this.record.startedAt,
      attachers: this.attachers.size
    }), this.kill("SIGKILL", "failed", this.dispatch.launch.mode === "exec" ? gRt : yNe), 
    !0;
  }
  pidPollTick=0;
  async checkPid(e = !1) {
    let r = Date.now() - this.lastCheckPidAt;
    this.lastCheckPidAt = Date.now();
    let s = r > ze;
    if (s) this.hostWokeAt = Date.now();
    if (this.record.outcome || !this.record.pid) return;
    if (s && this.lastRvHeartbeat !== void 0) this.lastRvHeartbeat = Date.now();
    if (!this.pty) try {
      process.kill(this.record.pid, 0);
    } catch (n) {
      let p = E(n);
      if (p === "ESRCH" || p === "EPERM") this.logVanished(!1, e), this.settle(this.isKilling ? "killed" : "crashed");
      return;
    }
    let h = this.lastRvHeartbeat;
    if (!s && !this.stalledLogged && h !== void 0 && Date.now() - h > Tt) {
      let n = await Yr(to(this.dispatch.short), this.storageV5);
      if (!this.stalledLogged && (n?.tempo ?? this.record.tempo) === "active") this.stalledLogged = !0, 
      i("tengu_bg_worker_stalled", {
        short: XA(this.dispatch.short),
        sinceMs: Date.now() - h
      });
    }
    if (this.pty) {
      await this.failIfHostExited("poll");
      return;
    }
    if (e && this.pidPollTick++ % 12 !== 0) return;
    if (await this.pidRecycledAsync()) {
      if (this.record.outcome || this.pty) return;
      this.logVanished(!0, e), this.settle(this.isKilling ? "killed" : "crashed");
    }
  }
  logVanished(e, r) {
    if (this.isKilling) return;
    i("tengu_bg_worker_vanished", {
      short: XA(this.dispatch.short),
      recycled: e,
      fromPoll: r,
      uptimeMs: Date.now() - this.record.startedAt,
      worker_cli_version: Di(this.record.cliVersion),
      worker_stale: this.isVersionStale
    });
  }
  clearLiveness() {
    if (this.pidPoll) clearInterval(this.pidPoll), this.pidPoll = null;
    this.rv?.close(), this.rv = void 0, this.lastRvHeartbeat = void 0, this.stalledLogged = !1;
  }
}

async function FVs(e) {
  let r = e[0];
  if (!r) process.stderr.write(`[bg-spare] missing claim sock path\n`), process.exit(2);
  let s = await Bt(), h = import("./chunk-jwvwzc40.js");
  import("./chunk-6khzbs6z.js").catch(() => {}), import("./chunk-r834g2s3.js").catch(() => {});
  let n = () => {
    try {
      Nt(r);
    } catch {}
  }, p = () => {
    n(), process.exit(0);
  }, o = w => {
    n(), process.stderr.write(`[bg-spare] uncaughtException: ${l(w)}\n`), w_("spare_uncaught"), 
    process.exit(1);
  }, u = process.ppid, g = setInterval((w, S) => {
    if (process.ppid !== w) S(), process.exit(0);
  }, 2e3, u, n);
  g.unref();
  for (let w of [ "SIGTERM", "SIGHUP", "SIGINT" ]) process.on(w, p);
  process.on("uncaughtException", o);
  let f = () => {
    clearInterval(g);
    for (let w of [ "SIGTERM", "SIGHUP", "SIGINT" ]) process.off(w, p);
    process.off("uncaughtException", o);
  }, v;
  try {
    v = await Ncn(r, void 0, s);
  } catch (w) {
    n(), process.stderr.write(`[bg-spare] claim recv failed: ${l(w)}\n`), w_("spare_claim_recv"), 
    process.exit(1);
  }
  f();
  try {
    await h, await $cn(v, h);
  } catch (w) {
    let S = zr(w) ?? kh(w) ?? "Error";
    throw w_("spare_postclaim:" + S, v.env.CLAUDE_JOB_DIR), process.stderr.write(`[bg-spare] post-claim init failed: ${l(w)}\n`), 
    w;
  }
}

async function Bt() {
  let e = a.CLAUDE_BG_CLAIM_AUTH;
  delete process.env.CLAUDE_BG_CLAIM_AUTH;
  let r = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, !r) return e;
  let s = await Pft(r);
  if (await X(r).catch(() => {}), !s?.claimAuth) t("[bg-spare] tokens file unreadable; claim gate degraded", {
    level: "warn"
  });
  return s?.claimAuth ?? e;
}

var Ut = 2e3;

async function E0r(e) {
  if (O() === "windows") return null;
  if (bf()) return null;
  if (!await O0()) {
    if (!e.launcherNotRunnableEpisode.logged) e.launcherNotRunnableEpisode.logged = !0, 
    m("agent_launcher", "spare_launcher_not_runnable"), t(`bg spare: launcher \`${nf()[0]}\` was deleted or is not executable \u2014 not minting a warm spare until it is restored`, {
      level: "warn"
    });
    return null;
  }
  return e.launcherNotRunnableEpisode.logged = !1, so("daemon_bg_spare_refill", async () => {
    let r = Re(4).toString("hex"), s = rbs(r), h = obs(r), n = Re(16).toString("hex"), p = Re(16).toString("hex");
    await xt(Poe(), {
      recursive: !0,
      mode: 448
    }).catch(() => {});
    let o = await Ae(`spare-${r}`, {
      ptyAuth: n,
      claimAuth: p
    });
    await X(s).catch(() => {}), await X(h).catch(() => {});
    let {cmd: u, prefixArgs: g} = vu({
      pinToCurrentBinary: !0
    }), f = await Mt(Jk(s), "w").catch(() => null), v = AFs("agent"), w = v?.(), S;
    try {
      S = Bun.spawn([ u, ...g, "--bg-pty-host", s, "200", "50", "--", u, ...g, "--bg-spare", h ], {
        cwd: Poe(),
        env: Ht(o ? {
          tokensPath: o
        } : {
          ptyAuth: n,
          claimAuth: p
        }),
        stdio: [ "ignore", "ignore", f?.fd ?? "ignore" ],
        detached: !0,
        windowsHide: !0,
        ...Dl("agent"),
        argv0: "claude bg-pty-host"
      }), S.unref();
    } catch (L) {
      if (o) if (z() && e.credentials !== void 0) e.credentials.discardSpentCredentialFile(o).catch(() => {}); else X(o).catch(() => {});
      throw L;
    } finally {
      await (f?.close().catch(() => {}));
    }
    let y = {
      hostPid: S.pid,
      ptySock: s,
      claimSock: h,
      ptyAuth: n,
      claimAuth: p,
      startedAt: Date.now(),
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      claimed: !1,
      dispose() {
        R = !0;
        try {
          S.kill("SIGTERM");
        } catch {}
      }
    }, R = !1;
    return S.exited.then(async L => {
      let I = Date.now(), M = v?.(), U = L !== 0 && w !== void 0 && M !== void 0 && M > w;
      if (X(s).catch(() => {}), X(h).catch(() => {}), o) if (z() && e.credentials !== void 0) e.credentials.discardSpentCredentialFile(o).catch(() => {}); else X(o).catch(() => {});
      let D = (await Xa(Jk(s), 1048576) ?? "").slice(0, 2e3).trim();
      if (D.length > 0) t(`bg spare host pid=${S.pid} exit stderr:\n${D}`, {
        level: "warn"
      });
      X(Jk(s)).catch(() => {}), X(lH(s)).catch(() => {});
      let T = I - y.startedAt, C = !R && !y.claimed && !U && nf().length > 0 && (T < Ut || L === 0 && T < X6e);
      if (U && !y.claimed && !R) t(`bg spare: host pid=${S.pid} died ${T}ms after spawn while the tool memory cgroup OOM-killed a member \u2014 not attributed to the launcher`, {
        level: "warn"
      });
      if (C) Tve([ -S.pid ]), m("agent_launcher", "spare_fork_or_crash"), t(`bg spare: launcher \`${nf()[0]}\` exited ${T}ms after spawn \u2014 it either daemonized instead of calling \`exec\` (launcher contract #1) or crashed at startup. Warm spares are disabled until the background service restarts; sessions still start, without the warm-attach shortcut.`, {
        level: "warn"
      });
      e.onExit(C);
    }), e.log(`bg spare spawned host pid=${S.pid}`), y;
  });
}

function Ht(e) {
  let r = {
    ...process.env
  };
  te(r);
  for (let s of Cke) delete r[s];
  if (dJ(r), Z_t(r), M6(r), zLt(r)) {
    let s = J9(r);
    if (s) te(r, [ s ]), delete r[s];
    for (let h of xU) delete r[h];
    if (Le(r.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) WLt(r);
  } else if (A9e.some(s => re(r, s))) delete r.ANTHROPIC_AUTH_TOKEN;
  for (let s of le) delete r[s];
  for (let s of Object.keys(r)) if (gKn.some(h => s.startsWith(h))) delete r[s];
  if (O() === "macos") delete r.CLAUDE_CODE_OAUTH_TOKEN;
  return Object.assign(r, {
    CLAUDE_CODE_SESSION_KIND: "bg",
    CLAUDE_BG_BACKEND: "daemon",
    FORCE_COLOR: "3",
    COLORTERM: "truecolor",
    BROWSER: "true",
    ..."tokensPath" in e ? {
      CLAUDE_BG_SOCKET_TOKENS_PATH: e.tokensPath
    } : {
      CLAUDE_BG_PTY_AUTH: e.ptyAuth,
      CLAUDE_BG_CLAIM_AUTH: e.claimAuth
    }
  }), r;
}

function k0r(e, r, s, h, n, p) {
  r.claimed = !0;
  let o = Oae.claim(e, {
    pid: r.hostPid,
    ptySockPath: r.ptySock,
    spawnPty: s,
    getAuthSnapshot: h,
    ptyAuth: r.ptyAuth,
    storageV5: n,
    credentials: p
  });
  return we(e.short, Lcn(e) ? h?.() : void 0).then(u => $t(r.claimSock, Ft(e, u, o.socketAuth(), r.claimAuth))).catch(u => {
    i("tengu_bg_sendclaim_failed", {
      short: XA(e.short),
      errno: zr(u),
      ...dp(u)
    }), t(`[bg-spare] send-claim failed: ${l(u)}`, {
      level: "warn"
    });
    let g = be(r.ptySock);
    g.on("error", () => {}), g.once("connect", () => {
      g.write(kN({
        t: "kill",
        sig: "SIGTERM"
      })), g.end();
    });
  }), o;
}

function Ft(e, r, s, h) {
  let {env: n, argv: p} = Oae.buildClaimFrame(e, r, s);
  return {
    cwd: e.cwd,
    env: n,
    argv: p,
    sessionId: e.sessionId,
    auth: h
  };
}

var rt = [ 50, 100, 150, 200, 250, 300, 400, 500, 500, 500 ];

async function $t(e, r) {
  let s = Date.now(), h = 5e3;
  for (let n = 0; ;n++) {
    if (Date.now() - s > 5e3) throw Error("send-claim timeout");
    try {
      await Gt(e, r);
      return;
    } catch (p) {
      let o = E(p);
      if (!(o === "ENOENT" || o === "ECONNREFUSED") || n >= rt.length) throw p;
      await J(rt[n] ?? 500);
    }
  }
}

function Gt(e, r) {
  return new Promise((s, h) => {
    let n = be(e);
    n.once("error", h), n.once("connect", () => {
      n.end(_(r) + `\n`, () => s());
    });
  });
}

async function T0r(e, r) {
  if (O() === "windows") return;
  let s = new Set;
  for (let p of e.values()) {
    let o = p.rosterEntry().ptySock;
    if (o) s.add(o);
  }
  let h = await Vt(Poe()).catch(() => []), n = 0;
  for (let p of h) {
    if (!p.endsWith(".pty.sock")) continue;
    let o = ue(Poe(), p);
    if (s.has(o)) continue;
    n++;
    let u = be(o);
    u.on("error", () => {
      X(o).catch(() => {});
    }), u.once("connect", () => {
      u.resume(), u.write(kN({
        t: "kill",
        sig: "SIGTERM"
      })), u.end(), setTimeout(g => g.destroy(), 2e3, u).unref();
    });
  }
  for (let p of h) {
    let o = [ ".err", ".late", ".err.read" ].find(u => p.endsWith(`.pty.sock${u}`));
    if (o) {
      let u = p.slice(0, -o.length);
      if (!h.includes(u)) X(ue(Poe(), p)).catch(() => {});
    }
    if (p.endsWith(".claim.sock")) {
      let u = ue(Poe(), `${p.slice(0, -11)}.pty.sock`);
      if (!s.has(u)) X(ue(Poe(), p)).catch(() => {});
    }
  }
  if (n) r(`bg orphan-spare reap: ${n}`);
}

export { S0r, w0r, v0r, cWe, Lcn, Oae, FVs, E0r, k0r, T0r };
