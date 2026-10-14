// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { l, E } from "./chunk-b0z4bv3v.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { le } from "./chunk-cqgvwwgb.js";

import { mt } from "./chunk-j90se18b.js";

import { hm, sbe } from "./chunk-gwz0gszt.js";

import { tk, jV } from "./chunk-7j9be257.js";

import { Xd, vso, Eso } from "./chunk-z09tf6qf.js";

import { qBt } from "./chunk-xvys0kga.js";

import { l$n } from "./chunk-7w62r1zx.js";

import { connect as v } from "net";

import { StringDecoder as O } from "string_decoder";

async function fg(g, m) {
  let s;
  try {
    s = v(jV());
  } catch (r) {
    return {
      ok: !1,
      code: "ENOCONN",
      error: tk(l(r)),
      errno: E(r)
    };
  }
  let p = m?.timeoutMs ?? 5e3, o, d = new Promise(r => {
    o = r;
  }), u = !1, a = !1, f = r => {
    if (u) return;
    u = !0, s.destroy(), o(r);
  };
  s.setTimeout(p, () => f({
    ok: !1,
    code: "ETIMEOUT",
    error: "control socket timeout",
    connected: a
  })), s.on("error", r => f({
    ok: !1,
    code: "ENOCONN",
    error: tk(l(r)),
    connected: a,
    errno: E(r)
  })), s.once("connect", () => {
    a = !0, s.write(_(g) + `\n`);
  });
  let e = new O("utf8"), n = "";
  return s.on("data", r => {
    n += e.write(r);
    let y = n.indexOf(`\n`);
    if (y < 0) return;
    let C = n.slice(0, y);
    try {
      f(Y(C));
    } catch (k) {
      f({
        ok: !1,
        code: "ENOCONN",
        error: tk(l(k)),
        connected: a
      });
    }
  }), s.once("close", () => {
    if (!u) f({
      ok: !1,
      code: "ENOCONN",
      error: "connection dropped mid-request \u2014 it may have restarted; retry",
      connected: a
    });
  }), d;
}

var N = 4, S = new Set([ "shutdown_op", "upgrade", "yield", "displaced" ]);

function KBt(g) {
  return w({
    label: g,
    cwd: le(),
    pid: process.pid
  });
}

function w(g, m) {
  let s = !1, p = null, o = null, d = !0, u = N, a = async e => {
    if (e || !m || !d || u === 0) {
      o = setTimeout(f, 1e3), o.unref();
      return;
    }
    let n = !1;
    try {
      n = await m.ensureDaemon() === "started";
    } catch (r) {
      t(`daemon lease: ensureDaemon failed: ${tk(l(r))}`, {
        level: "error"
      });
    }
    if (d = n, u -= n ? 1 : 0, u === 0) i("tengu_bg_cloud_lease", {
      transition: b("starts_used_up")
    }), t(`daemon lease: started a daemon ${N} times; from here it only reconnects`, {
      level: "warn"
    });
    f();
  }, f = () => {
    if (s) return;
    let e;
    try {
      e = v(jV());
    } catch {
      p = null, a(!1);
      return;
    }
    p = e;
    let n = !1;
    if (e.on("error", () => e.destroy()), e.once("connect", () => {
      let r = process.getuid?.();
      if (m && r !== void 0 && l$n(e) !== r) {
        if (d) d = !1, i("tengu_bg_cloud_lease", {
          transition: b("server_not_this_user")
        }), t("daemon lease: the control socket is not served by this user, or its server cannot be told; not taking a lease there", {
          level: "warn"
        });
        e.destroy();
        return;
      }
      e.write(_({
        proto: Xd,
        op: "lease",
        client: g
      }) + `\n`);
    }), m) qBt(e, r => {
      if (s) return;
      let y = mt(r, !1), C = Eso().safeParse(y).data?.closing;
      if (C !== void 0) {
        if (S.has(C)) d = !1;
        i("tengu_bg_cloud_lease", {
          transition: b("daemon_closing"),
          cause: c(C)
        }), m.onClosing(C);
      } else if (!n && vso().safeParse(y).success) n = !0, d = !0, m.onAcknowledged();
    }); else e.on("data", () => {});
    e.once("close", () => {
      if (p = null, s) return;
      a(n);
    }), e.unref();
  };
  return f(), () => {
    if (s = !0, o) clearTimeout(o);
    p?.destroy();
  };
}

function KFr(g, m, s, p) {
  let o;
  try {
    o = v(jV());
  } catch (e) {
    return queueMicrotask(() => p(tk(l(e)))), () => {};
  }
  let d = !1, u = !1, a = e => {
    if (d) return;
    d = !0, p(e);
  };
  o.setTimeout(1e4, () => {
    if (!u) a(`${hm()} did not respond \u2014 it may be stalled${sbe("restart")}`), 
    o.destroy();
  }), o.on("error", e => a(tk(l(e)))), o.on("close", () => a("control socket closed")), 
  o.on("connect", () => o.write(_({
    proto: Xd,
    op: "subscribe",
    short: g,
    tail: m
  }) + `\n`));
  let f = qBt(o, e => {
    if (!u) u = !0, o.setTimeout(0);
    try {
      let n = Y(e);
      if ("ok" in n && n.ok === !1) a(n.error); else s(n);
    } catch {}
  });
  return () => {
    d = !0, f(), o.destroy();
  };
}

export { fg, KBt, KFr };
