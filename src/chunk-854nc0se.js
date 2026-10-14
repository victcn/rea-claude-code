// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { J } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-kawq2919.js";

import { Wj } from "./chunk-z52kmxx4.js";

import { w_ } from "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import { iD } from "./chunk-30n0xq4e.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-t6pdm7af.js";

import { Pft, zH } from "./chunk-1tdw23h1.js";

import { Jk, lH, w8, dlt, HNn, SQt, XRe, vQt, kN, DNn } from "./chunk-7j9be257.js";

import { lzo } from "./chunk-k0q9c8gf.js";

import "./chunk-av9t4vjk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { appendFileSync as Q, createWriteStream as X, mkdirSync as V } from "fs";

import { appendFile as j, mkdir as q, unlink as x, writeFile as Z } from "fs/promises";

import { createServer as ee } from "net";

import { getPriority as te, setPriority as ne } from "os";

import { dirname as F } from "path";

var re = 1048576;

async function _e(o) {
  let t = o.indexOf("--"), r = o.includes("--bg-spare", t + 1);
  if (!r) await lzo();
  if (a.unset("CLAUDE_PTY_HOST_NO_STABLE_PATH"), t < 3 || t === o.length - 1) return P(void 0, "bad argv: --bg-pty-host <sock> <cols> <rows> -- <file> [args...]");
  let s = o[0];
  process.on("uncaughtException", e => P(s, `uncaught: ${e?.stack ?? String(e)}`)), 
  process.on("unhandledRejection", e => P(s, `unhandledRejection: ${e?.stack ?? String(e)}`));
  let l = Number(o[1]) || 200, u = Number(o[2]) || 50, m = o[t + 1], h = o.slice(t + 2), c = process.env.CLAUDE_PTY_HOST_EXEC === "1";
  delete process.env.CLAUDE_PTY_HOST_EXEC;
  let k = process.env.CLAUDE_BG_PTY_AUTH;
  delete process.env.CLAUDE_BG_PTY_AUTH;
  let C = process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (C) {
    let e = await Pft(C);
    if (e?.ptyAuth) k = e.ptyAuth; else if (!k) await Y(s, "tokens-file unreadable; DATA gate fail-open");
    if (c) delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, await x(C).catch(() => {});
  }
  if (O() !== "windows") try {
    ne(0, Math.min(te(0) + 5, 19));
  } catch {}
  let b = se(SQt), p = new Set, R = new WeakMap, H = new WeakSet, N = new WeakSet, S = !1, y = !1, G = !1, M = process.ppid, B = 0, T = null, D = ce(process.env.CLAUDE_PTY_RECORD, l, u);
  function K(e) {
    for (let i of p) {
      if (i.destroyed) {
        p.delete(i);
        continue;
      }
      if (i.writableLength > re) {
        i.destroy(), p.delete(i);
        continue;
      }
      i.write(e);
    }
  }
  let I, d;
  try {
    I = new Bun.Terminal({
      cols: l,
      rows: u,
      data(e, i) {
        G = !0;
        let n = Buffer.from(i);
        if (b.push(n), D?.write(n), p.size) K(vQt(n));
      }
    }), d = Bun.spawn([ m, ...h ], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        TERM: "xterm-256color"
      },
      terminal: I,
      windowsHide: !0,
      detached: !1,
      ...r && {
        argv0: "claude bg-spare"
      }
    });
  } catch (e) {
    P(s, `spawn failed: ${String(e)}`);
  }
  function w(e, i) {
    if (!e.destroyed) e.write(i);
  }
  function z(e) {
    switch (e.t) {
     case "resize":
      {
        let i = Number(e.cols), n = Number(e.rows);
        if (i > 0 && i <= XRe && n > 0 && n <= XRe && !S && !y) {
          if (I.resize(i, n), O() !== "windows") {
            try {
              process.kill(-process.pid, "SIGWINCH");
            } catch {}
            try {
              d.kill("SIGWINCH");
            } catch {}
          }
        }
        return;
      }

     case "kill":
      {
        let i = e.sig === "SIGKILL" ? "SIGKILL" : "SIGTERM";
        try {
          y = oe(i, d, I) || y;
        } catch {}
        if (i === "SIGTERM") setTimeout(() => {
          if (!S) try {
            d.kill("SIGKILL");
          } catch {}
        }, 5e3).unref();
        return;
      }

     default:
      return;
    }
  }
  await x(s).catch(() => {});
  let g = ee(e => {
    e.on("error", () => e.destroy()), e.once("close", () => p.delete(e)), w(e, kN({
      t: "hello",
      replPid: d.pid,
      version: typeof {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      } < "u" ? {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION : void 0
    }));
    for (let n of b.chunks) w(e, vQt(n));
    if (w(e, kN({
      t: "live"
    })), p.add(e), B = 0, R.set(e, {
      armed: !1,
      missed: 0
    }), w(e, kN({
      t: "ping"
    })), S) {
      w(e, kN({
        t: "exit",
        code: v,
        signal: U
      })), e.end();
      return;
    }
    let i = DNn(n => {
      if (n.kind === dlt) {
        if (k && !H.has(e)) {
          if (!N.has(e)) N.add(e), w(e, kN({
            t: "auth-required"
          }));
          return;
        }
        if (!S && !y) {
          if (I.write(n.payload), c && O() !== "windows") {
            let f = n.payload.includes(3) ? "SIGINT" : n.payload.includes(28) ? "SIGQUIT" : null;
            if (f) {
              T = f;
              try {
                process.kill(-process.pid, f);
              } catch {}
              setImmediate(() => {
                T = null;
              });
            }
          }
        }
      } else if (n.kind === HNn) if (n.ctrl.t === "pong") {
        let f = R.get(e);
        if (f) f.armed = !0, f.missed = 0;
      } else if (n.ctrl.t === "auth") {
        if (zH(n.ctrl.token, k)) H.add(e);
      } else z(n.ctrl);
    }, () => e.destroy());
    e.on("data", i);
  });
  g.on("error", e => {
    try {
      d.kill("SIGTERM");
    } catch {}
    P(s, `server error: ${String(e)}`);
  }), g.listen(s), g.unref();
  let E, _;
  if (O() !== "windows") {
    let e = Wj(process.env.CLAUDE_PTY_HEARTBEAT_MS) || 6e4, i = 3;
    _ = setInterval(() => {
      if (S) return;
      for (let A of p) {
        let L = R.get(A);
        if (!L?.armed) continue;
        if (L.missed++, L.missed >= 3) A.destroy(), p.delete(A); else w(A, kN({
          t: "ping"
        }));
      }
    }, e), _.unref();
    let n = Wj(process.env.CLAUDE_PTY_ORPHAN_CHECK_MS) || 2e3, f = 30;
    E = setInterval(() => {
      if (S) return;
      if (process.ppid === M || p.size > 0) {
        B = 0;
        return;
      }
      if (++B < f) return;
      clearInterval(E), clearInterval(_), Y(s, `orphan watchdog: ppid ${M}\u2192${process.ppid}, no client for ${f * n}ms`), 
      w_("ptyhost_orphan_watchdog");
      try {
        d.kill("SIGTERM");
      } catch {}
      setTimeout(() => {
        if (!S) try {
          d.kill("SIGKILL");
        } catch {}
      }, 5e3).unref();
    }, n), E.unref();
  }
  for (let e of [ "SIGTERM", "SIGINT", "SIGHUP" ]) process.on(e, () => {
    if (T === e) return;
    try {
      d.kill(e === "SIGHUP" ? "SIGTERM" : e);
    } catch {}
  });
  if (c && O() !== "windows") process.on("SIGQUIT", () => {
    if (T === "SIGQUIT") return;
    try {
      d.kill("SIGQUIT");
    } catch {}
  });
  let v = 0;
  v = await d.exited;
  let W = 0;
  for (let e = 0; e < 20; e++) if (G = !1, await J(5), G) W = 0; else if (++W >= 2) break;
  let U = d.signalCode ?? void 0;
  if (S = !0, c) try {
    let e = w8(s), i = Buffer.concat(b.chunks).subarray(-4096), n = 0;
    while (n < 3 && n < i.length && (i[n] & 192) === 128) n++;
    let f = i.subarray(n).toString("utf8");
    iD(e, JSON.stringify({
      code: v,
      signal: U,
      tail: f
    }), 384);
  } catch {}
  if (E) clearInterval(E);
  if (_) clearInterval(_);
  if (!y) I.close();
  if (D?.close(), c && O() !== "windows") {
    T = "SIGHUP";
    try {
      process.kill(-process.pid, "SIGHUP");
    } catch {}
  }
  if (K(kN({
    t: "exit",
    code: v,
    signal: U
  })), p.size === 0) await ie(g, c ? () => Z(lH(s), Buffer.concat(b.chunks)) : void 0);
  for (let e of p) e.end();
  if (await Promise.race([ new Promise(e => g.close(() => e())), J(2e3, void 0, {
    unref: !0
  }) ]), O() !== "windows") await x(s).catch(() => {});
  process.exit(v);
}

async function ie(o, t, r = 5e3) {
  let s = new Promise(u => o.once("connection", () => u())), l = (t ? t().catch(() => {}) : Promise.resolve()).then(() => J(r));
  await Promise.race([ s, l ]);
}

function oe(o, t, r) {
  if (o === "SIGTERM" && O() === "windows") return r.close(), !0;
  return t.kill(o), !1;
}

function se(o) {
  let t = [], r = 0, s = 0;
  function l() {
    if (r > 0) t = t.slice(r), r = 0;
  }
  return {
    get chunks() {
      return l(), t;
    },
    push(u) {
      t.push(u), s += u.length;
      while (s > o && t.length - r > 1) {
        s -= t[r++].length;
        for (let m = 0; m < 3; ) {
          let h = t[r], c = 0;
          while (m + c < 3 && c < h.length && (h[c] & 192) === 128) c++;
          if (c > 0) t[r] = h.subarray(c), s -= c, m += c;
          if (t[r].length > 0 || t.length - r === 1) break;
          r++;
        }
      }
      if (r >= t.length - r) l();
    }
  };
}

function ce(o, t, r) {
  if (!o) return;
  let s = process.hrtime.bigint(), l;
  try {
    l = X(o, {
      flags: "w"
    });
  } catch {
    return;
  }
  l.on("error", () => {
    l?.destroy(), l = void 0;
  });
  let u = Buffer.allocUnsafe(8);
  return u.writeUInt32BE(t, 0), u.writeUInt32BE(r, 4), l.write(u), {
    write(m) {
      if (!l) return;
      let h = Buffer.allocUnsafe(8 + m.length), c = Number((process.hrtime.bigint() - s) / 1000n);
      h.writeUInt32BE(c >>> 0, 0), h.writeUInt32BE(m.length, 4), m.copy(h, 8), l.write(h);
    },
    close() {
      l?.end();
    }
  };
}

async function Y(o, t) {
  try {
    let r = Jk(o);
    await q(F(r), {
      recursive: !0
    }), await j(r, `${(new Date).toISOString()} ${t}\n`);
  } catch {}
}

function P(o, t) {
  if (o) try {
    let r = Jk(o);
    V(F(r), {
      recursive: !0
    }), Q(r, `${(new Date).toISOString()} ${t}\n`);
  } catch {}
  process.exit(1);
}

export { _e as runPtyHost };
