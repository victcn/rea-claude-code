// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vxr6sv7z.js";

import { Tx } from "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { J, We } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-hedpgw9m.js";

import { _, Y } from "./chunk-kawq2919.js";

import { Kc } from "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-1zg3hbfq.js";

import { Xc } from "./chunk-pf1mhyjr.js";

import "./chunk-vps0k559.js";

import "./chunk-3ykz5st8.js";

import { YS, Dw, XS } from "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import { ax } from "./chunk-4dwgr3et.js";

import "./chunk-0pmh7awy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-3zb1ef23.js";

import "./chunk-jkzenvsk.js";

import "./chunk-n8c3367k.js";

import { dWe, xcn, _6, Iae, GYn, Pht, Pcn, Icn, HEe, QJe, CFt, pte, z$o, RFt } from "./chunk-1thty1tx.js";

import "./chunk-zvghq5er.js";

import "./chunk-zscnwzv2.js";

import "./chunk-9yajep3y.js";

import "./chunk-yxennhe9.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-wptm3jf5.js";

import "./chunk-vg1pmpv1.js";

import { LKt } from "./chunk-dyqmwyds.js";

import "./chunk-znhtg8e4.js";

import { fl } from "./chunk-548qpzj1.js";

import "./chunk-j31ahx42.js";

import { G0, qGn } from "./chunk-3tedvrs9.js";

import { vv } from "./chunk-sjjx8nvs.js";

import "./chunk-642shbw5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-1xnsr4dy.js";

import { randomUUID as nt } from "crypto";

import { constants as ot } from "fs";

import { access as rt, mkdir as st, readFile as it, stat as at } from "fs/promises";

import { createServer as ct } from "http";

import { hostname as lt } from "os";

import { join as ut, resolve as be } from "path";

import { spawn as He } from "child_process";

import { randomBytes as Ie } from "crypto";

import { open as Ce, readdir as De, stat as Pe, unlink as le, writeFile as ae } from "fs/promises";

import { tmpdir as Le } from "os";

import { join as ce } from "path";

var K = 5e3, Ae = 512, xe = 3e5;

async function Me(e, t) {
  let s = ce(Le(), `${e}-${Ie(6).toString("hex")}`), o = await Ce(s, "wx", 384);
  try {
    await o.writeFile(t);
  } catch (u) {
    throw await le(s).catch(() => {}), u;
  } finally {
    await o.close();
  }
  return s;
}

async function Ue(e, t, s, o, u) {
  let n = ce(e, t.jti);
  try {
    await ae(`${n}.jwt`, s, {
      mode: 384
    }), await ae(`${n}.json`, _(t, null, 2), {
      mode: 384
    }), await ae(`${n}.stderr`, o, {
      mode: 384
    });
  } catch (r) {
    u(`[runner:orchestrator] debug-dir write failed: ${l(r)}`);
  }
  try {
    let r = Date.now() - xe, g = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(jwt|json|stderr)$/;
    for (let c of await De(e)) {
      if (!g.test(c)) continue;
      let h = ce(e, c), a = await Pe(h).catch(() => null);
      if (a?.isFile() && a.mtimeMs < r) await le(h).catch(() => {});
    }
  } catch (r) {
    u(`[runner:orchestrator] debug-dir prune failed: ${l(r)}`);
  }
}

function re(e) {
  for (let t = 0; t < e.length; t++) {
    let s = e.charCodeAt(t);
    if (s < 32 || s >= 127 && s <= 159 || s === 8232 || s === 8233) return !0;
  }
  return !1;
}

async function pe(e) {
  if (_6(e.claims.jti, "spawn-hint jti"), e.claims.session_id) _6(e.claims.session_id, "spawn-hint session_id");
  if (e.claims.pool_id) _6(e.claims.pool_id, "spawn-hint environment_id");
  if (e.claims.account_id) _6(e.claims.account_id, "spawn-hint account_id");
  if (re(e.claims.account_email)) throw Error("spawn-hint account_email: control character");
  for (let h of e.claims.repo_sources) {
    if (h.url && (!LKt(h.url) || re(h.url))) throw Error("spawn-hint repo_sources: unsafe git URL");
    if (h.revision && !Tx(h.revision)) throw Error("spawn-hint repo_sources: unsafe revision");
  }
  if (re(e.claims.correlation_id) || e.claims.correlation_id.startsWith("-") || /\s/.test(e.claims.correlation_id)) throw Error("spawn-hint correlation_id: unsafe value");
  if (re(e.claims.server_time)) throw Error("spawn-hint server_time: unsafe value");
  if (typeof e.claims.attempt !== "number" || !Number.isInteger(e.claims.attempt) || e.claims.attempt < 0) throw Error("spawn-hint attempt: unsafe value");
  let t = QJe(e.claims.client_platform);
  if (e.claims.client_platform && e.claims.client_platform !== HEe && t === void 0) {
    let h = CFt(e.claims.client_platform);
    e.onDebug(`[runner:orchestrator] spawn-hint client_platform rejected by the env-export gate (CLAUDE_RUNNER_CLIENT_PLATFORM left unset): "${h}" (len=${e.claims.client_platform.length})`), 
    e.claims = {
      ...e.claims,
      client_platform: h
    };
  }
  if (!/^[A-Za-z0-9_.-]+$/.test(e.jwt)) throw Error("spawn-hint work_order_jwt: unsafe character (not base64url + dot)");
  let s = Date.now(), o = await Me(`work-order-${e.claims.jti}`, e.jwt);
  e.onDebug(`[runner:orchestrator] spawn-runner jti=${e.claims.jti} workOrderFile=${o}`);
  let u = {
    ...process.env,
    SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
    CLAUDE_RUNNER_WORK_ORDER_FILE: o,
    CLAUDE_RUNNER_ORDER_ID: e.claims.jti,
    CLAUDE_RUNNER_SESSION_ID: qGn("session", e.claims.session_id) ?? e.claims.session_id,
    CLAUDE_RUNNER_SESSION_UUID: e.claims.session_id,
    CLAUDE_RUNNER_ATTEMPT: String(e.claims.attempt),
    CLAUDE_RUNNER_POOL_ID: e.claims.pool_id,
    CLAUDE_RUNNER_ACCOUNT_EMAIL: e.claims.account_email,
    CLAUDE_RUNNER_ACCOUNT_ID: e.claims.account_id,
    CLAUDE_RUNNER_ORDER_SERVER_TIME: e.claims.server_time,
    CLAUDE_RUNNER_PRIMARY_REPO_URL: e.claims.primary_repo_url,
    CLAUDE_RUNNER_PRIMARY_REPO_REVISION: e.claims.primary_repo_revision,
    CLAUDE_RUNNER_REPO_SOURCES: e.claims.repo_sources.length > 0 ? _(e.claims.repo_sources) : "",
    CLAUDE_RUNNER_CORRELATION_ID: e.claims.correlation_id,
    CLAUDE_RUNNER_CLIENT_PLATFORM: t
  }, n = "", r = !1, g = null, c = !1;
  try {
    await new Promise(h => {
      let a;
      try {
        a = He(e.hookPath, [], {
          cwd: void 0,
          env: u,
          stdio: [ "ignore", "pipe", "pipe" ],
          detached: !0,
          windowsHide: !0
        }), ax(a.pid);
      } catch (b) {
        c = !0, n = `spawn-runner hook exec failed: ${l(b)}`, h();
        return;
      }
      let d = () => {}, A, I, v, x = setTimeout((b, C, U, O, j, w) => {
        if (r = !0, O(`[runner:orchestrator] spawn-runner jti=${C} timed out after ${U}ms, sending SIGTERM to process tree`), 
        b !== void 0) vv(b, "SIGTERM");
        A = setTimeout((q, z, m, i, R) => {
          if (q !== void 0) vv(q, "SIGKILL");
          v = setTimeout((V, f, H, E) => {
            f(`[runner:orchestrator] spawn-runner jti=${V} did not exit after SIGKILL within ${K}ms (likely D-state); abandoning child and resolving as timed out`), 
            H?.removeEventListener("abort", d), E();
          }, K, z, m, i, R);
        }, K, b, C, O, j, w);
      }, e.timeoutMs, a.pid, e.claims.jti, e.timeoutMs, e.onStatus, e.signal, h), k = 65536;
      a.stdout?.setEncoding("utf8"), a.stderr?.setEncoding("utf8");
      let N = "", p = "", M = (b, C) => {
        let U = b.split(`\n`), O = U.pop() ?? "";
        for (let j of U) {
          let w = Xc(j).replace(/[\x00-\x08\x0b-\x1f\x7f]/g, "");
          if (e.onStatus(`[runner:hook:spawn-runner] ${w}`), C) n = (n + w + `\n`).slice(-Ae);
        }
        return O;
      };
      if (a.stdout?.on("data", b => {
        if (N = M(N + b, !1), N.length > k) N = N.slice(-k);
      }), a.stderr?.on("data", b => {
        if (p = M(p + b, !0), p.length > k) p = p.slice(-k);
      }), a.once("close", () => {
        if (N) M(N + `\n`, !1);
        if (p) M(p + `\n`, !0);
      }), d = () => {
        if (e.onStatus(`[runner:orchestrator] spawn-runner jti=${e.claims.jti} aborted by shutdown, sending SIGTERM to process tree`), 
        a.pid !== void 0) vv(a.pid, "SIGTERM"), I = setTimeout(b => void vv(b, "SIGKILL"), K, a.pid), 
        I.unref();
      }, e.signal?.addEventListener("abort", d, {
        once: !0
      }), e.signal?.aborted) d();
      a.on("error", b => {
        if (clearTimeout(x), A) clearTimeout(A);
        if (I) clearTimeout(I);
        if (v) clearTimeout(v);
        e.signal?.removeEventListener("abort", d), c = !0, n = W(b) ? "spawn-runner hook missing (ENOENT)" : `spawn-runner hook exec failed: ${l(b)}`, 
        h();
      }), a.on("close", b => {
        if (clearTimeout(x), A) clearTimeout(A);
        if (I) clearTimeout(I);
        if (v) clearTimeout(v);
        e.signal?.removeEventListener("abort", d), g = b, h();
      });
    });
  } finally {
    await le(o).catch(h => e.onDebug(`[runner:orchestrator] failed to delete ${o}: ${l(h)}`));
  }
  if (r && !n) n = `spawn-runner hook timed out after ${e.timeoutMs}ms`;
  if (e.debugDir) await Ue(e.debugDir, e.claims, e.jwt, n, e.onDebug);
  return {
    ok: g === 0 && !r && !c,
    exitCode: g,
    timedOut: r,
    execError: c,
    stderrTail: n,
    durationMs: Date.now() - s
  };
}

import { readFile as Fe } from "fs/promises";

var qe = "/v1/code/scm-connectors/{provider}/{id}/tunnel", _e = 4003, je = 3e4, me = 1e3, he = 3e4, Ge = 1e4, Be = 3e4, fe = 32768, Ke = 4194304, Ye = 1048576, ze = 50, Qe = 3e4, Ve = 1e4, Xe = new Set([ "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS" ]), Je = new Set([ "host", "connection", "content-length", "transfer-encoding" ]);

function ue(e) {
  if (e.includes("://") || e.includes("/") || e.includes("@")) throw Error("--scm-connector-host expects a bare hostname (e.g. ghe.example.com[:443]), not a URL");
  let t = e.lastIndexOf(":"), s = e.startsWith("["), o, u = 443;
  if (t > 0 && (!s || s && e[t - 1] === "]")) {
    o = e.slice(0, t);
    let n = e.slice(t + 1), r = parseInt(n, 10);
    if (Number.isNaN(r) || r < 1 || r > 65535 || String(r) !== n) throw Error("--scm-connector-host port must be an integer in [1, 65535]");
    u = r;
  } else o = e;
  if (o.length === 0) throw Error("--scm-connector-host: hostname is empty");
  if (o.includes(":") && !(o.startsWith("[") && o.endsWith("]"))) throw Error("--scm-connector-host: hostname must be a bare hostname or [v6] literal");
  return {
    host: o,
    port: u
  };
}

function ge(e) {
  let t = e.indexOf("=");
  if (t <= 0 || t === e.length - 1) throw Error("--scm-connector-host-rewrite requires <from>=<to_host:to_port>");
  let s = e.slice(0, t).toLowerCase(), o = e.slice(t + 1);
  for (let r of [ s, o ]) if (r.includes("://") || r.includes("/") || r.includes("@")) throw Error("--scm-connector-host-rewrite expects bare hostnames, not URLs");
  let {host: u, port: n} = ue(o);
  return {
    from: s,
    toHost: u,
    toPort: n
  };
}

function Ze(e) {
  if (typeof e !== "string" || e.length === 0) return "path must be a non-empty string";
  if (e[0] !== "/") return "path must start with /";
  if (e[1] === "/") return "path must not start with // (scheme-relative)";
  if (e[1] === "@") return "path must not start with /@";
  if (e.includes("\\")) return "path must not contain backslash";
  return null;
}

function et(e, t, s) {
  let o = new URL("https://placeholder.invalid/");
  if (o.host = `${e}:${t}`, o.hostname === "placeholder.invalid") throw Error("scm-connector dial host is not a valid URL host");
  let u = o.origin, n = s.indexOf("?");
  if (o.pathname = n >= 0 ? s.slice(0, n) : s, o.search = n >= 0 ? s.slice(n) : "", 
  o.origin !== u || o.username !== "" || o.password !== "") throw Error("path escaped the configured origin");
  return o;
}

function tt(e, t) {
  let s = qe.replace("{provider}", encodeURIComponent(t.provider)).replace("{id}", String(t.connectorId));
  return e.replace(/^http/, "ws").replace(/\/+$/, "") + s;
}

function we() {
  return {
    connected: !1,
    last_connected_at: 0,
    last_error: null,
    reconnects: 0,
    requests_forwarded: 0
  };
}

function Se(e, t, s, o) {
  let u = tt(s.apiUrl, e), n = e.hostRewrite && e.hostRewrite.from === e.host.toLowerCase() ? e.hostRewrite.toHost : e.host, r = e.hostRewrite && e.hostRewrite.from === e.host.toLowerCase() ? e.hostRewrite.toPort : e.port, g = !1, c = null, h = null, a = null, d = null, A = me, I = 0, v, x = e.caFile === void 0, k = new Map, N = m => {
    t.last_error = Xc(m);
  }, p = m => s.onStatus(`[runner:scm-connector] ${m}`), M = m => s.onDebug(`[runner:scm-connector] ${m}`);
  function b(m) {
    let i = c;
    if (!i || i.readyState !== WebSocket.OPEN) return;
    try {
      i.send(_(m));
    } catch (R) {
      N(l(R)), p(`send failed: ${l(R)}`);
    }
  }
  function C(m, i) {
    b({
      httpError: {
        requestId: m,
        errorMessage: i
      }
    });
  }
  function U(m) {
    let i = c;
    if (!i || i.readyState !== WebSocket.OPEN || i.bufferedAmount <= Ke) return Promise.resolve();
    return new Promise(R => {
      let V = setInterval(() => {
        if (g || m.aborted || c !== i || i.readyState !== WebSocket.OPEN || i.bufferedAmount <= Ye) clearInterval(V), 
        R();
      }, ze);
    });
  }
  async function O(m) {
    let i = m.requestId;
    if (!i) return;
    if (m.port !== void 0 && m.port !== 0 && m.port !== e.port) {
      C(i, `port ${m.port} does not match this connector's configured port ${e.port}`);
      return;
    }
    let R = Ze(m.path);
    if (R) {
      C(i, R);
      return;
    }
    let V = m.path, f = (m.method ?? "GET").toUpperCase();
    if (!Xe.has(f)) {
      C(i, "method not allowed");
      return;
    }
    let H;
    try {
      H = et(n, r, V);
    } catch (y) {
      C(i, l(y));
      return;
    }
    let E = new AbortController;
    k.set(i, E);
    let S = setTimeout(y => y.abort(), Qe, E), B;
    try {
      let y = new Headers;
      for (let D of m.headers ?? []) {
        if (!D.name || Je.has(D.name.toLowerCase())) continue;
        y.append(D.name, D.value ?? "");
      }
      y.set("Host", e.port === 443 ? e.host : `${e.host}:${e.port}`);
      let F = m.body !== void 0 && m.body !== "" ? Buffer.from(m.body, "base64") : void 0;
      B = await fetch(H, {
        method: f,
        headers: y,
        body: F,
        redirect: "manual",
        signal: E.signal,
        tls: v !== void 0 || n !== e.host ? {
          ca: v,
          serverName: e.host
        } : void 0
      });
    } catch (y) {
      clearTimeout(S), k.delete(i), N(`forward to ${e.host}: ${l(y)}`), C(i, l(y));
      return;
    }
    clearTimeout(S);
    let Q = [];
    B.headers.forEach((y, F) => {
      Q.push({
        name: F,
        value: y
      });
    });
    let P = 0;
    b({
      httpHeaders: {
        requestId: i,
        statusCode: B.status,
        statusText: B.statusText || String(B.status),
        headers: Q,
        sequenceNumber: P
      }
    }), P++;
    try {
      if (B.body) {
        let y = B.body.getReader();
        for (;;) {
          if (await U(E.signal), E.signal.aborted) {
            await y.cancel();
            break;
          }
          let F = await y.read();
          if (F.value && F.value.length > 0) for (let D = 0; D < F.value.length; D += fe) {
            let X = F.value.subarray(D, D + fe);
            b({
              httpChunk: {
                requestId: i,
                data: Buffer.from(X).toString("base64"),
                isFinal: !1,
                sequenceNumber: P
              }
            }), P++;
          }
          if (F.done) break;
          if (E.signal.aborted) {
            await y.cancel();
            break;
          }
        }
      }
      b({
        httpChunk: {
          requestId: i,
          data: "",
          isFinal: !0,
          sequenceNumber: P
        }
      }), t.requests_forwarded++;
    } catch (y) {
      C(i, `error reading GHES response body: ${l(y)}`);
    } finally {
      k.delete(i);
    }
  }
  function j(m) {
    let i;
    try {
      i = Y(m);
    } catch (R) {
      p(`failed to parse tunnel request: ${l(R)}`);
      return;
    }
    if (i.httpRequest) O(i.httpRequest).catch(R => {
      N(l(R)), p(`handleHttpRequest failed: ${l(R)}`);
    }); else if (i.httpCancel) {
      let R = i.httpCancel.requestId;
      if (R) k.get(R)?.abort(), k.delete(R);
    } else if (i.wsOpen) b({
      wsError: {
        tunnelId: i.wsOpen.tunnelId ?? "",
        errorMessage: "WebSocket tunnel is not supported by the SCM connector"
      }
    }); else if (i.ptyOpen) b({
      ptyError: {
        tunnelId: i.ptyOpen.tunnelId ?? "",
        errorMessage: "PTY tunnel is not supported by the SCM connector"
      }
    });
  }
  function w(m) {
    if (g) return;
    t.reconnects++;
    let i;
    if (m === _e) i = je, p(`standby (close code ${m}): another orchestrator holds connector ${e.connectorId}; retrying in ${i / 1e3}s`); else {
      if (I > 0 && Date.now() - I > he) A = me;
      i = A + Math.floor(Math.random() * (A / 2)), A = Math.min(A * 2, he), M(`reconnecting in ${i}ms`);
    }
    I = 0, a = setTimeout(q, i);
  }
  function q() {
    if (g) return;
    if (a = null, !x) fl(Fe(e.caFile, "utf8"), Ve, `--scm-connector-ca-file read from ${e.caFile}`).then(i => {
      v = i, x = !0;
    }).catch(i => {
      N(`reading --scm-connector-ca-file: ${l(i)}`), p(`reading --scm-connector-ca-file: ${l(i)}`);
    });
    let m;
    try {
      m = new globalThis.WebSocket(u, {
        headers: {
          Authorization: `Bearer ${s.poolSecret}`
        },
        proxy: Dw(u),
        tls: YS() || void 0
      });
    } catch (i) {
      N(l(i)), p(`WebSocket construct failed: ${l(i)}`), w();
      return;
    }
    c = m, d = setTimeout(i => {
      N("WebSocket open timeout"), i.onopen = i.onmessage = i.onerror = i.onclose = null;
      try {
        i.close();
      } catch {}
      if (c === i) c = null;
      w();
    }, Ge, m), m.onopen = () => {
      if (d) clearTimeout(d), d = null;
      t.connected = !0, t.last_connected_at = Date.now(), t.last_error = null, I = Date.now(), 
      p(`connected provider=${e.provider} connector_id=${e.connectorId} forward=${e.host}:${e.port}${n !== e.host ? ` (dial=${n}:${r})` : ""}`), 
      h = setInterval(() => {
        if (m.readyState === WebSocket.OPEN) m.ping?.();
      }, Be);
    }, m.onmessage = i => {
      let R = typeof i.data === "string" ? i.data : Buffer.from(i.data).toString("utf8");
      j(R);
    }, m.onerror = i => {
      N("message" in i && typeof i.message === "string" ? i.message : "WebSocket error");
    }, m.onclose = i => {
      if (t.connected = !1, d) clearTimeout(d), d = null;
      if (h) clearInterval(h), h = null;
      for (let R of k.values()) R.abort();
      if (k.clear(), c === m) c = null;
      if (i.code !== _e) p(`closed code=${i.code} reason=${i.reason || "(none)"}`);
      w(i.code);
    };
  }
  function z() {
    if (g) return;
    if (g = !0, a) clearTimeout(a), a = null;
    if (d) clearTimeout(d), d = null;
    if (h) clearInterval(h), h = null;
    for (let m of k.values()) m.abort();
    k.clear(), t.connected = !1;
    try {
      c?.close();
    } catch {}
    c = null, p("stopped");
  }
  return o?.addEventListener("abort", z, {
    once: !0
  }), p(`starting provider=${e.provider} connector_id=${e.connectorId} url=${u}`), 
  q(), {
    stop: z
  };
}

var $e = "https://api.anthropic.com", Ee = 1500, Te = 8080, Re = 4, ye = 6e4, ve = 120, dt = 1e4, pt = 6e4, _t = 5e3, mt = 500, ht = 2e3, ft = 3600, gt = .2, ke = 1e3, wt = 3e4, St = new Set([ 400, 401, 403, 404, 426 ]), ee = [ .1, .25, .5, 1, 2.5, 5, 10, 20, 30, 60 ];

function bt() {
  return {
    buckets: ee.map(() => 0),
    count: 0,
    sum: 0
  };
}

function Et(e, t) {
  e.sum += t, e.count += 1;
  for (let s = 0; s < ee.length; s++) if (t <= ee[s]) e.buckets[s]++;
}

var te = [ .5, 1, 2.5, 5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120 ];

function kt() {
  return {
    buckets: te.map(() => 0),
    count: 0,
    sum: 0
  };
}

function $t(e, t) {
  let s = Math.max(0, t);
  e.sum += s, e.count += 1;
  for (let o = 0; o < te.length; o++) if (s <= te[o]) e.buckets[o]++;
}

function Tt(e) {
  let t = {
    apiUrl: $e,
    hooksDir: process.env.SELF_HOSTED_RUNNER_HOOKS_DIR ? be(process.env.SELF_HOSTED_RUNNER_HOOKS_DIR) : void 0,
    healthPort: Rt(process.env.SELF_HOSTED_RUNNER_HEALTH_PORT, Te, "SELF_HOSTED_RUNNER_HEALTH_PORT"),
    hookConcurrency: Re,
    hookTimeoutMs: ye,
    expectedSpawnSeconds: ve,
    minIdle: 0,
    debugDir: process.env.SELF_HOSTED_RUNNER_DEBUG_DIR,
    logLevel: "info",
    shutdownDrainMs: 0
  }, s, o, u = "ghe", n = !1, r, g;
  for (let c = 0; c < e.length; c++) {
    let h = e[c], a = e[c + 1];
    switch (h) {
     case "--api-url":
      if (a) t.apiUrl = a, c++;
      break;

     case "--pool-secret-file":
     case "--environment-secret-file":
      if (h === "--pool-secret-file") console.error("[runner:warn] --pool-secret-file is deprecated; use --environment-secret-file");
      if (a) t.poolSecretFile = a, c++;
      break;

     case "--hooks-dir":
      if (a) t.hooksDir = be(a), c++;
      break;

     case "--health-port":
      if (a) {
        let d = Kc(a);
        if (Number.isNaN(d) || d < 0 || d > 65535) throw Error(`--health-port must be an integer in [0, 65535] (0 disables), got: ${a}`);
        t.healthPort = d, c++;
      }
      break;

     case "--hook-concurrency":
      if (a) {
        let d = Kc(a);
        if (Number.isNaN(d) || d < 1 || d > 100) throw Error(`--hook-concurrency must be an integer in [1, 100], got: ${a}`);
        t.hookConcurrency = d, c++;
      }
      break;

     case "--hook-timeout":
      if (a) {
        let d = Number(a);
        if (!Number.isFinite(d) || d <= 0) throw Error(`--hook-timeout must be a positive number of seconds, got: ${a}`);
        t.hookTimeoutMs = d * 1e3, c++;
      }
      break;

     case "--expected-spawn-seconds":
      if (a) {
        let d = parseInt(a, 10);
        if (Number.isNaN(d) || d < 10 || d > 3600 || String(d) !== a.trim()) throw Error(`--expected-spawn-seconds must be an integer in [10, 3600], got: ${a}`);
        t.expectedSpawnSeconds = d, c++;
      }
      break;

     case "--min-idle":
      if (a) {
        let d = parseInt(a, 10);
        if (Number.isNaN(d) || d < 0 || d > 200 || String(d) !== a.trim()) throw Error("--min-idle must be an integer in [0, 200]");
        t.minIdle = d, c++;
      }
      break;

     case "--scm-connector-host":
      if (!a) throw Error("--scm-connector-host requires HOST[:PORT]");
      s = ue(a), c++;
      break;

     case "--scm-connector-id":
      {
        if (!a) throw Error("--scm-connector-id requires an integer");
        let d = parseInt(a, 10);
        if (Number.isNaN(d) || d < 1 || String(d) !== a.trim()) throw Error("--scm-connector-id must be a positive integer");
        o = d, c++;
        break;
      }

     case "--scm-connector-provider":
      if (!a) throw Error("--scm-connector-provider requires a value");
      if (!/^[a-z0-9-]{1,32}$/.test(a)) throw Error("--scm-connector-provider must match ^[a-z0-9-]{1,32}$");
      u = a, n = !0, c++;
      break;

     case "--scm-connector-ca-file":
      if (!a) throw Error("--scm-connector-ca-file requires a path");
      r = a, c++;
      break;

     case "--scm-connector-host-rewrite":
      if (!a) throw Error("--scm-connector-host-rewrite requires <from>=<to_host:to_port>");
      g = ge(a), c++;
      break;

     case "--debug-dir":
      if (a) t.debugDir = a, c++;
      break;

     case "--shutdown-drain-sec":
      if (a) t.shutdownDrainMs = yt(a) * 1e3, c++;
      break;

     case "--log-level":
      if (a) t.logLevel = a, c++;
      break;

     default:
      if (h?.startsWith("--")) throw Error(`unknown flag ${h}`);
      break;
    }
  }
  if (s !== void 0) {
    if (o === void 0) throw Error("--scm-connector-id is required when --scm-connector-host is set");
    t.scmConnector = {
      host: s.host,
      port: s.port,
      provider: u,
      connectorId: o,
      caFile: r,
      hostRewrite: g
    };
  } else if (o !== void 0 || n || r !== void 0 || g !== void 0) throw Error("--scm-connector-id / --scm-connector-provider / --scm-connector-ca-file / --scm-connector-host-rewrite require --scm-connector-host");
  if (t.hookTimeoutMs + K >= t.expectedSpawnSeconds * 1e3) throw Error(`--hook-timeout (${t.hookTimeoutMs / 1e3}s) + ${K / 1e3}s SIGKILL grace must be less than --expected-spawn-seconds (${t.expectedSpawnSeconds}s) \u2014 otherwise an HA replica ` + "re-claims the lease while this hook is still running and both spawn a runner");
  return t;
}

function Rt(e, t, s) {
  if (e === void 0 || e === "") return t;
  let o = Kc(e);
  if (Number.isNaN(o) || o < 0 || o > 65535) throw Error(`${s} must be an integer in [0, 65535], got: "${e}"`);
  return o;
}

function yt(e) {
  let t = parseInt(e, 10);
  if (Number.isNaN(t) || t < 0 || t > ft || String(t) !== e.trim()) throw Error("--shutdown-drain-sec must be a whole number of seconds from 0 to 3600 (0 turns the drain off)");
  return t;
}

async function vt(e) {
  if (!e) throw Error("orchestrator requires --hooks-dir (or SELF_HOSTED_RUNNER_HOOKS_DIR) \u2014 no spawn-runner hook directory configured");
  let t = ut(e, "spawn-runner"), s;
  try {
    s = await fl(at(t), 5e3, `stat ${t}`);
  } catch (o) {
    throw Error(`spawn-runner hook not found at ${t} \u2014 the orchestrator cannot start without it (${l(o)})`);
  }
  if (!s.isFile()) throw Error(`spawn-runner hook at ${t} is not a regular file`);
  try {
    await fl(rt(t, ot.X_OK), 5e3, `access ${t}`);
  } catch {
    throw Error(`spawn-runner hook at ${t} is not executable (chmod +x ${t})`);
  }
  return t;
}

function Nt(e) {
  let t = e.replace(/^sk-ant-[a-z]+-/, ""), s = G0(t), o = s !== null && typeof s === "object" ? s["ccr:pool_id"] : void 0;
  if (typeof o !== "string" || o === "") throw Error("environment secret is missing the ccr:pool_id claim \u2014 cannot derive the environment ID for spawn-hint polling");
  return o;
}

function Ot(e) {
  if (e === void 0 || e === null) return 0;
  if (typeof e === "number") return e;
  if (typeof e === "string") return /^(0|[1-9]\d{0,14})$/.test(e) ? Number(e) : e;
  return String(e);
}

function Ht(e, t) {
  let s = G0(e.work_order_jwt), o = s !== null && typeof s === "object" ? s : {}, u = h => typeof o[h] === "string" ? o[h] : "", n = o.aud, r = Array.isArray(n) ? n.find(h => typeof h === "string") ?? "" : typeof n === "string" ? n : "", g = u("ccr:pool_id") || (r.startsWith("ccpool_") ? r : ""), c = (e.sources ?? []).map(h => ({
    url: h.url ?? "",
    revision: h.revision ?? ""
  }));
  return {
    jti: e.jti || u("jti"),
    session_id: e.session_uuid ?? "",
    attempt: Ot(e.attempt),
    pool_id: g,
    account_id: u("ccr:spawn_account_id") || u("account_id"),
    account_email: u("ccr:spawn_account_email") || u("account_email"),
    server_time: t ?? "",
    repo_sources: c,
    primary_repo_url: c[0]?.url ?? "",
    primary_repo_revision: c[0]?.revision ?? "",
    correlation_id: typeof e.correlation_id === "string" ? e.correlation_id : "",
    client_platform: typeof e.client_platform === "string" ? e.client_platform : ""
  };
}

function It(e, t = Date.now()) {
  if (!e) return null;
  let s = Date.parse(e);
  if (Number.isNaN(s)) return null;
  return t - s;
}

function Ct(e, t = Date.now()) {
  let s = e.last_poll_at > 0 ? (t - e.last_poll_at) / 1e3 : 0, o = `version="${pte(e.version)}",pool_id="${pte(e.pool_id)}",orchestrator_uuid="${pte(e.orchestratorUuid)}",hostname="${pte(e.hostname)}"`, u = "claude_code_self_hosted_orchestrator", n = "";
  if (n += `# HELP claude_code_self_hosted_orchestrator_info Self-hosted orchestrator identity (info-style gauge; value is always 1).\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_info gauge\n`, n += `claude_code_self_hosted_orchestrator_info{${o}} 1\n`, 
  n += `# HELP claude_code_self_hosted_orchestrator_connected 1 when the last PollSpawnHints returned successfully; 0 on transport/5xx error.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_connected gauge\n`, n += `claude_code_self_hosted_orchestrator_connected ${e.connected ? 1 : 0}\n`, 
  n += `# HELP claude_code_self_hosted_orchestrator_last_poll_age_seconds Seconds since the last PollSpawnHints attempt (success or failure).\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_last_poll_age_seconds gauge\n`, 
  n += `claude_code_self_hosted_orchestrator_last_poll_age_seconds ${s}\n`, n += `# HELP claude_code_self_hosted_orchestrator_queue_pending_sessions Spawn-hint queue rows claimable right now (eta < now, unclaimed, not circuit-broken). Server-side aggregate for this environment.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_queue_pending_sessions gauge\n`, 
  e.queue_counts !== null) n += `claude_code_self_hosted_orchestrator_queue_pending_sessions ${e.queue_counts.pending}\n`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_queue_backing_off_sessions Spawn-hint queue rows in retry backoff (nacked retryable; eta in the future). Server-side aggregate for this environment.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_queue_backing_off_sessions gauge\n`, 
  e.queue_counts !== null) n += `claude_code_self_hosted_orchestrator_queue_backing_off_sessions ${e.queue_counts.backing_off}\n`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions Spawn-hint queue rows circuit-broken (nacked non-retryable; operator must RetrySpawnHint to re-admit). Server-side aggregate for this environment.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions gauge\n`, 
  e.queue_counts !== null) n += `claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions ${e.queue_counts.circuit_broken}\n`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_pool_pending_sessions Total sessions currently waiting on a runner for this environment (the UI "N ahead of you" number). Autoscale on this, not on queue_pending_sessions.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_pool_pending_sessions gauge\n`, 
  e.pool_pending_session_count !== null) n += `claude_code_self_hosted_orchestrator_pool_pending_sessions ${e.pool_pending_session_count}\n`;
  if (n += `# HELP ${"claude_code_self_hosted_orchestrator"}_pool_active_sessions Sessions currently assigned to an alive runner in this environment (the server's environment-wide sum of the per-runner _active_sessions gauges). Environment-wide aggregate \u2014 identical on every orchestrator for one environment; use MAX not SUM across orchestrator instances.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_pool_active_sessions gauge\n`, 
  e.pool_active_session_count !== null) n += `claude_code_self_hosted_orchestrator_pool_active_sessions ${e.pool_active_session_count}\n`;
  n += `# HELP claude_code_self_hosted_orchestrator_warm_hints_dispatched_total Standby (warm) hints dispatched since process start.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_warm_hints_dispatched_total counter\n`, 
  n += `claude_code_self_hosted_orchestrator_warm_hints_dispatched_total ${e.warm_hints_dispatched}\n`, 
  n += `# HELP ${"claude_code_self_hosted_orchestrator"}_spawn_hooks_total spawn-runner hook outcomes since process start (exit-code contract: ok=0, retryable=1/timeout/signal, non_retryable=>=2/ENOENT/EACCES). Counts orchestrator hook invocations (seat + warm), NOT runner child spawns \u2014 NOT comparable to the runner's sessions_started_total (capacity>1, warm environments, and per-runner re-spawns all diverge them).\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_spawn_hooks_total counter\n`, 
  n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="ok"} ${e.spawnHooks.ok}\n`, 
  n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="retryable"} ${e.spawnHooks.retryable}\n`, 
  n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="non_retryable"} ${e.spawnHooks.nonRetryable}\n`, 
  n += `# HELP claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds Wall-clock seconds per spawn-runner hook run (all outcomes; seat + warm).\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds histogram\n`;
  let r = e.spawnHookDurations;
  for (let c = 0; c < ee.length; c++) n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_bucket{le="${ee[c]}"} ${r.buckets[c]}\n`;
  n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_bucket{le="+Inf"} ${r.count}\n`, 
  n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_sum ${r.sum}\n`, 
  n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_count ${r.count}\n`, 
  n += `# HELP claude_code_self_hosted_orchestrator_session_queue_wait_seconds Seconds each session waited in the queue before the orchestrator claimed it for spawn (HTTP Date header - SpawnHint.queue_wait_started_at; seat hints only). For p50/p99 queue-time SLOs and "queue wait > N" alerting.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_session_queue_wait_seconds histogram\n`;
  let g = e.sessionQueueWaits;
  for (let c = 0; c < te.length; c++) n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_bucket{le="${te[c]}"} ${g.buckets[c]}\n`;
  n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_bucket{le="+Inf"} ${g.count}\n`, 
  n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_sum ${g.sum}\n`, 
  n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_count ${g.count}\n`, 
  n += `# HELP claude_code_self_hosted_orchestrator_poll_errors_total PollSpawnHints request failures by error kind (transport=no HTTP response; timeout=client deadline; 5xx/429/4xx by status). All five series present from process start so rate() works and absent() means process-down.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_poll_errors_total counter\n`;
  for (let c of GYn) n += `claude_code_self_hosted_orchestrator_poll_errors_total{error_kind="${c}"} ${e.pollErrors[c]}\n`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_clock_skew_seconds Local-minus-server clock skew from the most recent PollSpawnHints Date header. Sample omitted until measured.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_clock_skew_seconds gauge\n`, e.clock_skew_ms !== null) n += `claude_code_self_hosted_orchestrator_clock_skew_seconds ${e.clock_skew_ms / 1e3}\n`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_scm_connector_connected 1 when the standing SCM connector WebSocket is OPEN; 0 when dialing/backing off. Series absent when --scm-connector-host is not set.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_scm_connector_connected gauge\n`, 
  e.scm_connector !== null) n += `claude_code_self_hosted_orchestrator_scm_connector_connected ${e.scm_connector.connected ? 1 : 0}\n`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total Cumulative HTTP requests proxied to the configured SCM host since process start.\n`, 
  n += `# TYPE claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total counter\n`, 
  e.scm_connector !== null) n += `claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total ${e.scm_connector.requests_forwarded}\n`;
  return n;
}

function Dt(e, t, s) {
  let o = ct((n, r) => {
    if (n.method === "GET" && n.url === "/metrics") {
      let c = Ct(t);
      r.writeHead(200, {
        "Content-Type": "text/plain; version=0.0.4; charset=utf-8",
        "Content-Length": Buffer.byteLength(c)
      }), r.end(c);
      return;
    }
    if (n.method !== "GET" || n.url !== "/healthz") {
      r.writeHead(404, {
        "Content-Type": "text/plain"
      }), r.end(`not found\n`);
      return;
    }
    let g = _({
      status: "ok",
      orchestrator_uuid: t.orchestratorUuid,
      hostname: t.hostname,
      version: t.version,
      pool_id: t.pool_id,
      connected: t.connected,
      last_poll_at: t.last_poll_at > 0 ? new Date(t.last_poll_at).toISOString() : null,
      last_hint_at: t.last_hint_at > 0 ? new Date(t.last_hint_at).toISOString() : null,
      last_hook_ok_at: t.last_hook_ok_at > 0 ? new Date(t.last_hook_ok_at).toISOString() : null,
      last_warm_hook_ok_at: t.last_warm_hook_ok_at > 0 ? new Date(t.last_warm_hook_ok_at).toISOString() : null,
      last_error: t.last_error,
      clock_skew_ms: t.clock_skew_ms,
      queue_counts: t.queue_counts,
      pool_pending_session_count: t.pool_pending_session_count,
      pool_active_session_count: t.pool_active_session_count,
      warm_hints_dispatched: t.warm_hints_dispatched,
      scm_connector_connected: t.scm_connector?.connected ?? null,
      scm_connector: t.scm_connector ? {
        connected: t.scm_connector.connected,
        last_connected_at: t.scm_connector.last_connected_at > 0 ? new Date(t.scm_connector.last_connected_at).toISOString() : null,
        last_error: t.scm_connector.last_error,
        reconnects: t.scm_connector.reconnects,
        requests_forwarded: t.scm_connector.requests_forwarded
      } : null
    });
    r.writeHead(200, {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(g)
    }), r.end(g);
  });
  o.unref();
  let u = 0;
  return o.on("error", n => {
    if (n.code === "EADDRINUSE" && u === 0) {
      u++, s(`[runner:warn] /healthz port ${e} busy, retrying in ${Ee}ms`), setTimeout((r, g) => r.listen(g), Ee, o, e).unref();
      return;
    }
    s(`[runner:warn] /healthz listener failed on port ${e}: ${n.message} \u2014 continuing without health endpoint`);
  }), o.on("listening", () => {
    let n = o.address(), r = typeof n === "object" && n ? n.port : e;
    s(`[runner:health] orchestrator /healthz and /metrics listening on :${r}`);
  }), o.listen(e), o;
}

function Pt(e, t) {
  return Math.round(e * (1 + gt * (2 * t() - 1)));
}

async function Lt(e, t) {
  let {apiClient: s, healthState: o, onStatus: u, onDebug: n, args: r, hookPath: g, runHook: c = pe, fatalExit: h = At, pollIntervalMs: a = _t, minPollGapMs: d = mt, fullAnswerSettleMs: A = ht, random: I = Math.random, drain: v, now: x = () => performance.now()} = e, k = v?.stopSignal ?? t, N = () => v && k.aborted && !t.aborted ? AbortSignal.timeout(xcn) : t, p = {
    at: void 0,
    pollInFlight: !1,
    hooksRunning: 0,
    started: 0,
    handedBack: 0,
    standbyDropped: 0,
    hooksOk: 0,
    hooksFailed: 0,
    hooksStopped: 0,
    nacksFailed: 0
  }, M = !1, b = 0, C = () => {
    p.at = x(), p.pollInFlight = M, p.hooksRunning = b;
  };
  if (v) {
    if (v.stopSignal.addEventListener("abort", C, {
      once: !0
    }), v.stopSignal.aborted) C();
  }
  let U = ke, O = new Set, j = r.hookConcurrency, w = -1 / 0, q = -1 / 0, z = !1, m = 0;
  while (!k.aborted && !t.aborted) {
    if (O.size >= j) {
      await Promise.race(O);
      continue;
    }
    let f = performance.now();
    if (z && f - w < a && f - q < a) {
      await J(a - (f - q), k);
      continue;
    }
    let H = j - O.size;
    o.last_poll_at = Date.now(), q = f, M = !0;
    let E;
    try {
      E = await s.pollSpawnHints({
        orchestrator_uuid: o.orchestratorUuid,
        hostname: o.hostname,
        client_version: dWe,
        max: H,
        expected_spawn_seconds: r.expectedSpawnSeconds,
        ...r.minIdle > 0 && {
          min_idle: r.minIdle
        }
      }, t), M = !1;
    } catch (T) {
      if (M = !1, t.aborted) break;
      o.pollErrors[Pht(T)]++;
      let L = Iae(T), G = Xc(l(T));
      if (k.aborted) {
        o.connected = !1, o.last_error = G, u(`[runner:orchestrator] stop: the poll in flight failed${L ? ` (HTTP ${L})` : ""}: ${G}. If the server had claimed a session for this poll, that session is requested again only after --expected-spawn-seconds`);
        break;
      }
      if (L !== void 0 && St.has(L)) {
        if (o.connected = !1, o.last_error = G, O.size > 0) u(`[runner:orchestrator] poll rejected (HTTP ${L}): waiting for ${O.size} running hook(s) to end, then exiting`), 
        await Promise.allSettled(O);
        h(L === 426 ? `orchestrator version too old (HTTP 426): ${G} \u2014 upgrade and restart` : `PollSpawnHints rejected (HTTP ${L}): ${G}`);
      }
      o.connected = !1, o.last_error = G, u(`[runner:orchestrator] poll failed${L ? ` (HTTP ${L})` : ""}: ${G} \u2014 retrying in ${Math.round(U / 1e3)}s`), 
      await J(U, k), U = Math.min(U * 2, wt);
      continue;
    }
    o.connected = !0, o.last_error = null, U = ke, i(E.server_date), o.queue_counts = {
      pending: E.pending_count,
      backing_off: E.backing_off_count,
      circuit_broken: E.circuit_broken_count
    }, o.pool_pending_session_count = E.pool_pending_session_count ?? null, o.pool_active_session_count = E.pool_active_session_count ?? null;
    {
      let T = E.server_date !== null ? Date.parse(E.server_date) : Date.now(), L = Number.isFinite(T) ? T : Date.now();
      for (let G of E.hints) {
        if (typeof G.queue_wait_started_at !== "string") continue;
        let oe = Date.parse(G.queue_wait_started_at);
        if (!Number.isFinite(oe)) continue;
        $t(o.sessionQueueWaits, (L - oe) / 1e3);
      }
    }
    let S = E.hints.slice(0, H), B = E.hints.slice(H);
    for (let T of B) u(`[runner:orchestrator] server over-returned hint session=${T.session_uuid} (got ${E.hints.length}, max=${H}) \u2014 nacking retryably`), 
    await s.nackSpawnHint({
      session_uuid: T.session_uuid,
      attempt: T.attempt,
      error: "orchestrator: server over-returned hints (>max)",
      retryable: !0
    }, N()).catch(L => u(`[runner:orchestrator] nack of over-returned hint failed: ${l(L)} \u2014 lease expiry will re-admit`));
    let Q = Math.max(0, H - S.length), P = r.minIdle > 0 ? E.warm_hints.slice(0, Q) : [];
    if (E.warm_hints.length > P.length) n(`[runner:orchestrator] dropping ${E.warm_hints.length - P.length} warm hint(s) (budget=${Q}, minIdle=${r.minIdle})`);
    let y = v !== void 0 && k.aborted, F = v?.abortAt(), D = F === void 0 ? 0 : F - x(), X = !y || !t.aborted && D >= r.hookTimeoutMs + 2 * K, Z = X ? S : [], Ne = X ? [] : S, ne = X ? P : [];
    if (y) {
      p.started += Z.length + ne.length;
      for (let T of Z) u(`[runner:orchestrator] stop: starting session=${T.session_uuid} attempt=${T.attempt} jti=${T.jti}, which the poll in flight brought: ${Math.floor(D / 1e3)}s of the shutdown drain are left`);
      if (!X && P.length > 0) p.standbyDropped += P.length, u(`[runner:orchestrator] stop: not starting ${P.length} standby runner(s) that the poll in flight brought: too little of the shutdown drain is left. The server asks for them again once their lease has ended`);
    }
    if (Z.length > 0) u(`[runner:orchestrator] dispatching ${Z.length} hint(s) (concurrency=${r.hookConcurrency})`);
    if (ne.length > 0) u(`[runner:orchestrator] dispatching ${ne.length} warm hint(s) (min_idle=${r.minIdle})`);
    let de = [ ...Z.map(T => ({
      hint: T,
      hook: R(T, E.server_date, !1)
    })), ...Ne.map(T => ({
      hint: T,
      hook: V(T)
    })), ...ne.map(T => ({
      hint: T,
      hook: R(T, E.server_date, !0)
    })) ], se = void 0;
    if (j = Math.min(r.hookConcurrency, se ?? r.hookConcurrency), z = se !== void 0, 
    se === void 0) await Promise.all([ ...de.map(T => T.hook), ...O ]); else {
      let T = [ ...O ], L = [];
      for (let {hint: G, hook: oe} of de) {
        let ie = oe.catch(Oe => {
          o.last_error = Xc(l(Oe)), u(`[runner:orchestrator] hint dispatch threw session=${G.session_uuid} jti=${G.jti}: ${o.last_error} \u2014 not retried here; the server's state is whatever its hook or nack already set`);
        }).finally(() => O.delete(ie));
        O.add(ie), L.push(ie);
      }
      if (S.length > 0) {
        if (L.length >= Math.min(H, j) && m < A) await We(Promise.race([ Promise.all(L), ...T ]), A);
        await J(Math.min(d, Math.max(0, d - (Date.now() - o.last_poll_at))), k);
        continue;
      }
    }
    await J(Pt(a, I), k);
  }
  if (await Promise.all(O), v?.stopSignal.removeEventListener("abort", C), p.at !== void 0) u(`[runner:orchestrator] stop summary: poll_in_flight=${p.pollInFlight ? 1 : 0} hooks_running=${p.hooksRunning} started_after_stop=${p.started} handed_back=${p.handedBack} standby_dropped=${p.standbyDropped} hooks_ok=${p.hooksOk} hooks_failed=${p.hooksFailed} hooks_stopped=${p.hooksStopped} nacks_failed=${p.nacksFailed} aborted=${t.aborted ? 1 : 0} seconds=${((x() - p.at) / 1e3).toFixed(1)}`);
  function i(f) {
    let H = It(f);
    if (H === null) return;
    if (o.clock_skew_ms = H, Math.abs(H) > pt) u(`[runner:warn] clock skew ${Math.round(H / 1e3)}s vs server \u2014 check NTP (work-order exp checks may fail)`);
  }
  async function R(f, H, E) {
    if (o.last_hint_at = Date.now(), E) o.warm_hints_dispatched++;
    let S, B = !1;
    b++;
    try {
      let D = Ht(f, H);
      S = await c({
        hookPath: g,
        jwt: f.work_order_jwt,
        claims: D,
        timeoutMs: r.hookTimeoutMs,
        debugDir: r.debugDir,
        signal: t,
        onStatus: u,
        onDebug: n
      }), B = !0;
    } catch (D) {
      S = {
        ok: !1,
        exitCode: 1,
        timedOut: !1,
        execError: !1,
        stderrTail: `spawn-runner hook setup failed: ${l(D)}`,
        durationMs: 0
      };
    }
    if (b--, m = S.durationMs, Et(o.spawnHookDurations, S.durationMs / 1e3), S.ok) {
      if (o.spawnHooks.ok++, o.last_hook_ok_at = Date.now(), E) o.last_warm_hook_ok_at = o.last_hook_ok_at;
      if (n(`[runner:orchestrator] ok session=${f.session_uuid} attempt=${f.attempt} jti=${f.jti} (${S.durationMs}ms)`), 
      p.at !== void 0) p.hooksOk++, u(`[runner:orchestrator] stop: hook ended ok session=${f.session_uuid} attempt=${f.attempt} jti=${f.jti} (${S.durationMs}ms)`);
      return;
    }
    let Q = !S.timedOut && !S.execError && (S.exitCode === null || S.exitCode > 128 && S.exitCode <= 159);
    if (p.at !== void 0) if (Q) p.hooksStopped++; else p.hooksFailed++;
    let P = Xc(S.stderrTail || (S.exitCode === null ? "hook killed by external signal (no stderr)" : `exit ${S.exitCode}`)), y = S.exitCode === 1 || S.timedOut || S.exitCode === null && !S.execError, F = !B ? void 0 : S.timedOut ? "SESSION_FAILURE_KIND_SPAWN_TIMEOUT" : "SESSION_FAILURE_KIND_SPAWN_HOOK_ERROR";
    if (y) o.spawnHooks.retryable++; else o.spawnHooks.nonRetryable++;
    if (o.last_error = `spawn-runner hook failed: ${P}`, E) {
      u(`[runner:orchestrator] warm hook failed jti=${f.jti} exit=${S.exitCode} timedOut=${S.timedOut}: ${P} \u2014 lease expiry will re-mint`);
      return;
    }
    if (v && k.aborted && !t.aborted && Q) {
      p.nacksFailed++, u(`[runner:orchestrator] stop: no nack for session=${f.session_uuid} attempt=${f.attempt} jti=${f.jti} exit=${S.exitCode}: a signal ended its hook during the shutdown drain, and the hook may already have submitted its runner \u2014 if it had not, lease expiry will re-admit`);
      return;
    }
    w = performance.now(), u(`[runner:orchestrator] nack session=${f.session_uuid} attempt=${f.attempt} exit=${S.exitCode} timedOut=${S.timedOut} retryable=${y}: ${P}`);
    try {
      await s.nackSpawnHint({
        session_uuid: f.session_uuid,
        attempt: f.attempt,
        error: P,
        retryable: y,
        ...F && {
          failure_kind: F
        }
      }, N());
    } catch (D) {
      if (p.at !== void 0) p.nacksFailed++;
      u(`[runner:orchestrator] nack failed session=${f.session_uuid}: ${l(D)} \u2014 lease expiry will re-admit`);
    }
  }
  async function V(f) {
    p.handedBack++, u(`[runner:orchestrator] stop: handing back session=${f.session_uuid} attempt=${f.attempt} jti=${f.jti}, which the poll in flight brought: too little of the shutdown drain is left to run its hook`);
    try {
      await s.nackSpawnHint({
        session_uuid: f.session_uuid,
        attempt: f.attempt,
        error: "orchestrator is shutting down: the spawn-runner hook was not run",
        retryable: !0
      }, AbortSignal.timeout(xcn));
    } catch (H) {
      p.nacksFailed++, u(`[runner:orchestrator] nack failed session=${f.session_uuid}: ${l(H)} \u2014 lease expiry will re-admit`);
    }
  }
}

function At(e) {
  console.error(`${(new Date).toISOString()} [self-hosted-runner] [runner:fatal] ${Xc(e)}`), 
  process.exit(1);
}

async function On(e) {
  if (e.includes("--help") || e.includes("-h")) {
    console.log(`Usage: claude self-hosted-runner orchestrator [options]\n\nPolls the spawn-hints queue (server returns immediately) and runs \${hooks-dir}/spawn-runner once per\nhint. The hook must submit work asynchronously (kubectl create job, EC2\nRunInstances, ...) and exit within --hook-timeout. Exit-code contract (session\nspawns): 0 = success (no-op); 1 = retryable failure (backoff); >=2 = non-retryable\n(circuit-break); stderr tail is forwarded as the nack error. Standby (--min-idle)\nspawns: any non-zero exit is logged locally and re-requested after the lease.\n\nConnection:\n  --api-url <url>             API base URL (default: ${$e})\n  --environment-secret-file <path>\n                              Path to environment secret file (or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET)\n                              (--pool-secret-file / SELF_HOSTED_RUNNER_POOL_SECRET are deprecated aliases.)\n\nHook:\n  --hooks-dir <path>          Directory containing the spawn-runner hook (REQUIRED).\n                              [env: SELF_HOSTED_RUNNER_HOOKS_DIR]\n  --hook-concurrency <n>      Max spawn-runner hooks running in parallel (default: ${Re}).\n                              Also caps how many hints are claimed per poll.\n  --hook-timeout <sec>        SIGTERM the hook after <sec> seconds (default: ${ye / 1e3}).\n  --expected-spawn-seconds <n>  p99 boot time for runners this orchestrator spawns\n                              (default: ${ve}). Sent on every Poll as the\n                              server-side lease; if the runner doesn't register before then, the\n                              session is re-hinted with a fresh jti. HA replicas MUST use the same value.\n  --min-idle <n>              Keep at least <n> idle slots free (free capacity across runners, not\n                              runner count; default: 0, disabled). The server mints standby\n                              work_orders (no session binding) for the gap on every Poll.\n\nSCM connector (optional \u2014 standing tunnel so Anthropic-hosted pre-session flows can\nreach a GHES host that is only routable from inside your network):\n  --scm-connector-host <h[:p]>   GHES hostname to forward to (port defaults to 443).\n                                 Setting this enables the connector.\n  --scm-connector-id <n>         ghe_configurations.id for this org (REQUIRED with --scm-connector-host).\n  --scm-connector-provider <s>   Provider slug (default: ghe).\n  --scm-connector-ca-file <path> Extra CA bundle (PEM) for TLS to the GHES host.\n  --scm-connector-host-rewrite <from>=<to_host:to_port>\n                                 e2e only \u2014 redirect the TCP connect while keeping\n                                 Host/SNI as --scm-connector-host.\n\nRuntime:\n  --shutdown-drain-sec <n>    On SIGTERM, stop polling but give the poll in flight and the running hooks\n                              up to <n> seconds to end before they are stopped (default: 0, stop them\n                              at once). SIGINT, or a second SIGTERM, stops them at once; a signal after\n                              that exits at once, without waiting for them. Set <n> to at least\n                              --hook-timeout + 10, and the process manager's kill delay to at least\n                              <n> + 15.\n  --health-port <port>        Port for /healthz HTTP listener (default: ${Te}). 0 disables.\n                              ALWAYS returns 200 (liveness). Body carries connected/last_*/queue_counts/warm_hints_dispatched\n                              for readiness/alerting. [env: SELF_HOSTED_RUNNER_HEALTH_PORT]\n  --log-level <level>         Log level: info or debug (default: info)\n\nDebug:\n  --debug-dir <path>          DEV ONLY \u2014 writes each work-order JWT + decoded JSON + hook stderr to\n                              <dir>/<jti>.{jwt,json,stderr}. Auto-pruned after 5m.\n                              [env: SELF_HOSTED_RUNNER_DEBUG_DIR]\n\n  --help, -h                  Show this help message`);
    return;
  }
  XS();
  let t;
  try {
    RFt("orchestrator mode"), z$o(e), t = Tt(e);
  } catch (w) {
    console.error(`error: ${Xc(l(w))}\nRun 'claude self-hosted-runner orchestrator --help' for usage.`), 
    process.exit(2);
  }
  let s = t.logLevel === "debug", o = () => (new Date).toISOString(), u = w => Xc(w).replace(/[\x00-\x08\x0b-\x1f\x7f]/g, ""), n = w => {
    if (s) console.error(`${o()} [DEBUG] ${u(w)}`);
  }, r = w => {
    console.log(`${o()} [self-hosted-runner] ${u(w)}`);
  }, g;
  try {
    g = await vt(t.hooksDir);
  } catch (w) {
    r(`[runner:fatal] ${l(w)}`), process.exit(1);
  }
  r(`[runner:hook] spawn-runner hook found at ${g}`);
  let c;
  try {
    c = await xt(t);
  } catch (w) {
    r(`[runner:fatal] ${l(w)}`), process.exit(1);
  }
  if (t.debugDir) await st(t.debugDir, {
    recursive: !0,
    mode: 448
  }).catch(w => r(`[runner:warn] failed to create --debug-dir ${t.debugDir}: ${l(w)} \u2014 continuing without debug artifacts`));
  let h = nt(), a = lt();
  if (r(`[runner:orchestrator] starting orchestrator_uuid=${h} hostname=${a} hook-concurrency=${t.hookConcurrency} hook-timeout=${t.hookTimeoutMs}ms`), 
  t.shutdownDrainMs > 0) {
    let w = t.shutdownDrainMs / 1e3;
    r(`[runner:orchestrator] shutdown drain: ${w}s after SIGTERM; SIGINT or a second SIGTERM ends it early. Allow up to ${w + xcn / 1e3}s for the exit, longer if a hook cannot be killed`);
    let q = t.hookTimeoutMs + 2 * K;
    if (t.shutdownDrainMs < q) r(`[runner:warn] --shutdown-drain-sec (${w}s) is less than --hook-timeout + ${2 * K / 1e3}s (${q / 1e3}s): a hook that is running at SIGTERM may be stopped before it ends, and every spawn request that arrives after SIGTERM is handed back to the server`);
  }
  let d;
  try {
    d = Nt(c);
  } catch (w) {
    r(`[runner:fatal] ${l(w)}`), process.exit(1);
  }
  r(`[runner:orchestrator] environment_id=${d}`);
  let A = Icn({
    baseUrl: t.apiUrl,
    poolSecret: c,
    onDebug: n
  }), I = {
    orchestratorUuid: h,
    hostname: a,
    version: dWe,
    pool_id: d,
    connected: !1,
    last_poll_at: 0,
    last_hint_at: 0,
    last_hook_ok_at: 0,
    last_warm_hook_ok_at: 0,
    last_error: null,
    clock_skew_ms: null,
    queue_counts: null,
    pool_pending_session_count: null,
    pool_active_session_count: null,
    warm_hints_dispatched: 0,
    spawnHooks: {
      ok: 0,
      retryable: 0,
      nonRetryable: 0
    },
    spawnHookDurations: bt(),
    pollErrors: Pcn(),
    scm_connector: t.scmConnector ? we() : null,
    sessionQueueWaits: kt()
  }, v = t.healthPort > 0 ? Dt(t.healthPort, I, r) : void 0, x = new AbortController, k = new AbortController, N, p, M = t.shutdownDrainMs > 0 ? {
    stopSignal: k.signal,
    abortAt: () => N
  } : void 0, b = t.scmConnector && I.scm_connector ? Se(t.scmConnector, I.scm_connector, {
    apiUrl: t.apiUrl,
    poolSecret: c,
    onStatus: r,
    onDebug: n
  }, x.signal) : void 0, C = !1, U = w => {
    if (M && !x.signal.aborted) {
      if (w && !k.signal.aborted) {
        r(`Received SIGTERM, stopping poll loop; the poll in flight and running hooks have up to ${t.shutdownDrainMs / 1e3}s to end...`), 
        N = performance.now() + t.shutdownDrainMs, p = setTimeout((q, z) => {
          q("Shutdown drain time is over, stopping what is still running..."), z.abort();
        }, t.shutdownDrainMs, r, x), k.abort();
        return;
      }
      r(k.signal.aborted ? "Received a second shutdown signal, stopping what is still running..." : "Received SIGINT, stopping poll loop and running hooks..."), 
      clearTimeout(p), N = performance.now(), k.abort(), x.abort();
      return;
    }
    if (C || M) r("Forced shutdown"), process.exit(1);
    C = !0, r("Received shutdown signal, stopping poll loop..."), x.abort();
  }, O = () => U(!0), j = () => U(!1);
  process.on("SIGTERM", O), process.on("SIGINT", j);
  try {
    await Lt({
      apiClient: A,
      hookPath: g,
      args: t,
      healthState: I,
      onStatus: r,
      onDebug: n,
      drain: M
    }, x.signal);
  } finally {
    clearTimeout(p), b?.stop(), v?.closeAllConnections?.(), v?.close(), process.removeListener("SIGTERM", O), 
    process.removeListener("SIGINT", j);
  }
}

async function xt(e) {
  if (e.poolSecretFile) return (await fl(it(e.poolSecretFile, {
    encoding: "utf-8"
  }), dt, `environment-secret read from ${e.poolSecretFile}`)).trim();
  let t = process.env.SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET;
  if (t) return t.trim();
  let s = process.env.SELF_HOSTED_RUNNER_POOL_SECRET;
  if (s) return console.error("[runner:warn] SELF_HOSTED_RUNNER_POOL_SECRET is deprecated; use SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET"), 
  s.trim();
  throw Error("No environment secret provided. Use --environment-secret-file or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.");
}

export { On as selfHostedRunnerOrchestratorMain };
