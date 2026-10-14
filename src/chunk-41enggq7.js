// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { YS, Dw } from "./chunk-w4hwgefc.js";

import { G0 } from "./chunk-3tedvrs9.js";

import Re from "net";

import { request as _e } from "http";

var ve = new Set([ 204, 205, 304 ]);

function ie(r, c, {method: u, headers: g, body: y, signal: E}) {
  let b = u.toUpperCase();
  if (b !== "POST" && b !== "GET" && b !== "DELETE") return Promise.reject(Error("only POST, GET and DELETE are relayed"));
  for (let R of [ "content-length", "transfer-encoding", "connection" ]) g.delete(R);
  return new Promise((R, I) => {
    let w = _e({
      host: "127.0.0.1",
      port: r,
      path: c,
      method: b,
      headers: Object.fromEntries(g),
      signal: E,
      agent: !1
    }, W => {
      try {
        R(Ee(W));
      } catch (N) {
        W.destroy(), I(N);
      }
    });
    w.once("error", I), w.once("close", () => I(Error("closed unanswered"))), w.end(b === "POST" ? y : void 0);
  });
}

function Ee(r) {
  if (r.statusCode === void 0 || r.statusCode < 200) throw Error("no final status");
  let c = new Headers;
  for (let y = 0; y + 1 < r.rawHeaders.length; y += 2) c.append(r.rawHeaders[y], r.rawHeaders[y + 1]);
  let u = ve.has(r.statusCode ?? 0), g = new Response(u ? null : Ie(r), {
    status: r.statusCode,
    statusText: r.statusMessage,
    headers: c
  });
  if (u) r.resume();
  return g;
}

function Ie(r) {
  let c = r[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(u) {
      let g = await c.next();
      if (g.done) u.close(); else u.enqueue(g.value);
    },
    async cancel() {
      await (c.return?.());
    }
  });
}

var Pe = "/anthropic.ccr.api.v1alpha2.tunnel.TunnelService/TunnelProxy", ae = 1e3, le = 3e4, ke = 10, We = 5e3, Ne = 1e4, ee = 3e4, Ce = 75e3, Oe = 7168 * (ee / 1e3);

function Ae(r) {
  let c = r instanceof Uint8Array ? Buffer.from(r).toString("latin1") : "";
  return /^\d{1,15}$/.test(c) ? Number(c) : -1;
}

var $e = "preview_tunnel_liveness_would_have_fired", ue = 32768, Me = 4194304, Le = 1048576, De = 50, He = 3e4, xe = "/__control/status", Be = 2e3, ce = new Set([ "cookie", "authorization", "proxy-authorization", "referer" ]), qe = 1e4, de = 8, Ue = 64;

function Fe(r) {
  return r.replace(/^http/, "ws").replace(/\/+$/, "") + Pe;
}

function Ge(r, c) {
  let u = G0(r);
  if (u !== null && typeof u === "object" && "session_id" in u && typeof u.session_id === "string" && u.session_id.length > 0) return u.session_id;
  return c;
}

var Z = "tunnel request does not name this session";

function Ve(r, c) {
  if (!Array.isArray(r)) return !1;
  let u = r.filter(g => typeof g?.name === "string" && g.name.toLowerCase() === "host");
  return u.length === 1 && u[0].value === `127.0.0.1:${c}`;
}

function Ye(r, c) {
  let u = g => g.slice(g.lastIndexOf("_") + 1);
  return u(r) !== "" && u(r) === u(c);
}

function fe(r, c, u) {
  if (typeof r !== "number" || !Number.isInteger(r) || r < 1024 || r > 65535) return `invalid port: ${r}`;
  if (!u.has(r)) return `port ${r} is not in the --preview-port allowlist for this bridge`;
  if (typeof c !== "string" || !c.startsWith("/")) return "invalid path: must start with /";
  return null;
}

var je = new Set([ 1004, 1005, 1006, 1015 ]);

function ze(r) {
  return Je(r ?? "").trim();
}

function Ke(r) {
  return r.includes("does not have live preview enabled") || r.includes(Xe);
}

var Xe = "tunnel:preview";

function Je(r) {
  return r.replace(/[\u0000-\u001f\u007f-\u009f\u200e\u200f\u2028\u2029\u202a-\u202e\u2066-\u2069]+/g, " ");
}

function ge(r) {
  if (typeof r !== "number" || r < 1e3 || r > 4999 || je.has(r)) return 1e3;
  return r;
}

function pe(r) {
  if (!r) return "";
  return Buffer.byteLength(r, "utf8") <= 123 ? r : "";
}

function Qe(r) {
  return new Promise(c => {
    let u = !1, g = E => {
      if (u) return;
      u = !0, y.destroy(), c(E);
    }, y = Re.createConnection({
      host: "127.0.0.1",
      port: r
    });
    y.setTimeout(Be), y.once("connect", () => g(!0)), y.once("error", () => g(!1)), 
    y.once("timeout", () => g(!1));
  });
}

function WGo(r) {
  let c = Fe(r.apiBaseUrl), {accessToken: u, sessionId: g} = r, y = !1, E = !1, b = null, R = null, I = null, w = null, W = ae, N = 0, O = 0, j = !1, A = 0, x = 0, z = 0, F = 0, G = !1, B = 0, L = !1, K = !1, k = new Map, T = new Map, f = (o, e = "info") => t(`[bridge:preview-tunnel] ${o}`, {
    level: e
  });
  function P(o) {
    let e = b;
    if (!e || e.readyState !== WebSocket.OPEN) return;
    try {
      let n = _(o);
      e.send(n), x += n.length;
    } catch (n) {
      f(`send failed: ${l(n)}`, "error");
    }
  }
  function q(o, e) {
    P({
      httpError: {
        requestId: o,
        errorMessage: e
      }
    });
  }
  function ne(o) {
    let e = b;
    if (!e || e.readyState !== WebSocket.OPEN || e.bufferedAmount <= Me) return Promise.resolve();
    return new Promise(n => {
      let a = setInterval(() => {
        if (E || o.aborted || b !== e || e.readyState !== WebSocket.OPEN || e.bufferedAmount <= Le) clearInterval(a), 
        n();
      }, De);
    });
  }
  async function me(o, e) {
    let n = 0;
    try {
      let v = e.body !== void 0 && e.body !== "" ? Buffer.from(e.body, "base64").toString("utf8") : "{}", C = Y(v);
      if (C !== null && typeof C.port === "number") n = C.port;
    } catch (v) {
      f(`control/status: bad body: ${l(v)}`, "error");
    }
    let a = Number.isInteger(n) && n >= 1024 && n <= 65535 && r.allowedPorts.has(n), S = a ? await Qe(n) : !1;
    f(`control/status port=${n} permitted=${a} listening=${S}`), P({
      httpHeaders: {
        requestId: o,
        statusCode: 200,
        statusText: "OK",
        headers: [ {
          name: "Content-Type",
          value: "application/x-ndjson"
        } ],
        sequenceNumber: 0
      }
    });
    let H = _({
      type: "result",
      status: 200,
      data: {
        listening: S,
        port: n
      }
    }) + `\n`;
    P({
      httpChunk: {
        requestId: o,
        data: Buffer.from(H, "utf8").toString("base64"),
        isFinal: !0,
        sequenceNumber: 1
      }
    });
  }
  async function be(o) {
    let e = o.requestId;
    if (!e) return;
    if (r.toolServer === void 0 && o.port === 0 && o.path === xe && (o.method ?? "").toUpperCase() === "POST") {
      await me(e, o);
      return;
    }
    let n = fe(o.port, o.path, r.allowedPorts);
    if (n) {
      q(e, n);
      return;
    }
    let {port: a, path: S} = o, H = o.method ?? "GET";
    if (a === r.toolServer?.port && !Ve(o.headers, a)) {
      q(e, `Host is not 127.0.0.1:${a}, which CCR's route to the tool server sends`);
      return;
    }
    let v = new AbortController;
    k.set(e, v);
    let C = setTimeout(s => s.abort(), He, v), p;
    try {
      let s = new Headers;
      for (let h of o.headers ?? []) {
        if (!h.name || ce.has(h.name.toLowerCase())) continue;
        s.append(h.name, h.value ?? "");
      }
      if (s.set("Host", `127.0.0.1:${a}`), a === r.toolServer?.port) s.set("Authorization", `Bearer ${r.toolServer.authToken}`);
      let m = o.body !== void 0 && o.body !== "" ? Buffer.from(o.body, "base64") : void 0;
      p = a === r.toolServer?.port ? await ie(a, S, {
        method: H,
        headers: s,
        body: m,
        signal: v.signal
      }) : await fetch(`http://127.0.0.1:${a}${S}`, {
        method: H,
        headers: s,
        body: m,
        redirect: "manual",
        signal: v.signal
      });
    } catch (s) {
      clearTimeout(C), k.delete(e), q(e, l(s));
      return;
    }
    clearTimeout(C);
    let U = [];
    p.headers.forEach((s, m) => {
      U.push({
        name: m,
        value: s
      });
    });
    let d = 0;
    P({
      httpHeaders: {
        requestId: e,
        statusCode: p.status,
        statusText: p.statusText || String(p.status),
        headers: U,
        sequenceNumber: d
      }
    }), d++;
    try {
      if (p.body) {
        let s = p.body.getReader();
        for (;;) {
          if (await ne(v.signal), v.signal.aborted) {
            await s.cancel();
            break;
          }
          let m = await s.read();
          if (m.value && m.value.length > 0) for (let h = 0; h < m.value.length; h += ue) {
            let Q = m.value.subarray(h, h + ue);
            P({
              httpChunk: {
                requestId: e,
                data: Buffer.from(Q).toString("base64"),
                isFinal: !1,
                sequenceNumber: d
              }
            }), d++;
          }
          if (m.done) break;
          if (v.signal.aborted) {
            await s.cancel();
            break;
          }
        }
      }
      P({
        httpChunk: {
          requestId: e,
          data: "",
          isFinal: !0,
          sequenceNumber: d
        }
      });
    } catch (s) {
      q(e, `error reading response body: ${l(s)}`);
    } finally {
      k.delete(e);
    }
  }
  function D(o, e) {
    P({
      wsError: {
        tunnelId: o,
        errorMessage: e
      }
    });
  }
  function M(o, e) {
    let n = T.get(o);
    if (!n) return;
    if (T.delete(o), n.dialTimer) clearTimeout(n.dialTimer), n.dialTimer = null;
    if (n.abort.abort(), n.pending.length = 0, !n.terminated && e) if (n.terminated = !0, 
    "error" in e) D(o, e.error); else P({
      wsClose: {
        tunnelId: o,
        ...e.close
      }
    });
    try {
      n.sock.close();
    } catch {}
  }
  async function he(o) {
    let e = T.get(o);
    if (!e || e.flushing) return;
    e.flushing = !0;
    try {
      while (e.pending.length > 0 && T.get(o) === e) {
        if (await ne(e.abort.signal), e.abort.signal.aborted || T.get(o) !== e) return;
        let n = e.pending.shift();
        if (n) P(n);
      }
    } finally {
      e.flushing = !1;
    }
  }
  function ye(o) {
    let e = o.tunnelId;
    if (!e) return;
    if (!r.isHmrEnabled?.()) {
      D(e, "WebSocket tunnel is not enabled for this session");
      return;
    }
    if (M(e), T.size >= de) {
      D(e, `too many concurrent WebSocket tunnels (max ${de})`);
      return;
    }
    let n = fe(o.port, o.path, r.allowedPorts);
    if (n) {
      D(e, n);
      return;
    }
    let {port: a, path: S} = o, H = new Set([ "host", "connection", "upgrade", "sec-websocket-key", "sec-websocket-version", "sec-websocket-protocol", "sec-websocket-extensions" ]), v = {};
    for (let s of o.headers ?? []) {
      if (!s.name) continue;
      let m = s.value ?? "";
      if (/[\r\n\0]/.test(s.name) || /[\r\n\0]/.test(m)) continue;
      let h = s.name.toLowerCase();
      if (ce.has(h) || H.has(h)) continue;
      v[s.name] = m;
    }
    let C = (o.protocols ?? []).filter(s => !/[\r\n\0]/.test(s)), p;
    try {
      p = new globalThis.WebSocket(`ws://127.0.0.1:${a}${S}`, {
        headers: v,
        protocols: C
      });
    } catch (s) {
      D(e, `WebSocket dial failed: ${l(s)}`);
      return;
    }
    p.binaryType = "arraybuffer";
    let U = new AbortController, d = {
      sock: p,
      abort: U,
      dialTimer: null,
      nextSeq: 0,
      pending: [],
      flushing: !1,
      terminated: !1
    };
    T.set(e, d), d.dialTimer = setTimeout(s => {
      s.abort.abort();
      try {
        s.sock.close();
      } catch {}
    }, qe, d), U.signal.addEventListener("abort", () => {
      if (T.get(e) !== d) return;
      p.onopen = p.onmessage = p.onerror = p.onclose = null, M(e, {
        error: `WebSocket dial to 127.0.0.1:${a} timed out`
      });
    }, {
      once: !0
    }), p.onopen = () => {
      if (d.dialTimer) clearTimeout(d.dialTimer), d.dialTimer = null;
      if (T.get(e) !== d) return;
      P({
        wsOpened: {
          tunnelId: e,
          protocol: p.protocol ?? ""
        }
      }), f(`ws tunnel opened id=${e} port=${a}`);
    }, p.onmessage = s => {
      if (T.get(e) !== d || d.terminated) return;
      let m, h;
      if (typeof s.data === "string") m = Buffer.from(s.data, "utf8").toString("base64"), 
      h = !1; else if (s.data instanceof ArrayBuffer) m = Buffer.from(s.data).toString("base64"), 
      h = !0; else {
        f(`ws tunnel ${e}: dropping unsupported message type`, "error");
        return;
      }
      if (d.nextSeq++, d.pending.push({
        wsMessage: {
          tunnelId: e,
          data: m,
          isBinary: h,
          sequenceNumber: d.nextSeq
        }
      }), d.pending.length > Ue) {
        M(e, {
          error: "backpressure queue overflow; closing WebSocket tunnel"
        });
        return;
      }
      he(e).catch(Q => f(`ws flush failed: ${l(Q)}`, "error"));
    }, p.onerror = () => {}, p.onclose = s => {
      let m = d.dialTimer != null;
      if (d.dialTimer) clearTimeout(d.dialTimer), d.dialTimer = null;
      if (T.get(e) !== d) return;
      if (m) {
        M(e, {
          error: `WebSocket dial to 127.0.0.1:${a} failed (close code ${s.code})`
        });
        return;
      }
      M(e, {
        close: {
          code: ge(s.code),
          reason: pe(s.reason)
        }
      });
    };
  }
  function Te(o) {
    let e = o.tunnelId;
    if (!e) return;
    let n = T.get(e);
    if (!n || n.sock.readyState !== WebSocket.OPEN) return;
    try {
      let a = Buffer.from(o.data ?? "", "base64");
      if (o.isBinary) n.sock.send(a); else n.sock.send(a.toString("utf8"));
    } catch (a) {
      M(e, {
        error: `write to local WebSocket failed: ${l(a)}`
      });
    }
  }
  function we(o) {
    let e = o.tunnelId;
    if (!e) return;
    let n = T.get(e);
    if (!n) return;
    if (n.terminated = !0, T.delete(e), n.dialTimer) clearTimeout(n.dialTimer), n.dialTimer = null;
    n.abort.abort(), n.pending.length = 0;
    try {
      n.sock.close(ge(o.code), pe(o.reason));
    } catch {
      try {
        n.sock.close();
      } catch {}
    }
  }
  function te() {
    for (let o of [ ...T.keys() ]) M(o);
  }
  function Se(o) {
    let e;
    try {
      e = Y(o);
    } catch (n) {
      f(`failed to parse tunnel request: ${l(n)}`, "error");
      return;
    }
    if (typeof e !== "object" || e === null) {
      f("tunnel request is not an object", "error");
      return;
    }
    if (typeof e.sessionId !== "string" || !Ye(e.sessionId, g)) {
      if (!y) y = !0, f(`${Z}; ${r.toolServer ? "refused" : "served all the same"}`, "error"), 
      i("tengu_preview_tunnel_other_session", {
        enforce: r.toolServer !== void 0
      });
      if (r.toolServer !== void 0) {
        if (e.httpRequest?.requestId) q(e.httpRequest.requestId, Z); else if (e.wsOpen?.tunnelId) D(e.wsOpen.tunnelId, Z);
        return;
      }
    }
    if (e.httpRequest) be(e.httpRequest).catch(n => f(`handleHttpRequest failed: ${l(n)}`, "error")); else if (e.httpCancel) {
      let n = e.httpCancel.requestId;
      if (n) k.get(n)?.abort(), k.delete(n);
    } else if (e.wsOpen) ye(e.wsOpen); else if (e.wsMessage) Te(e.wsMessage); else if (e.wsClose) we(e.wsClose); else if (e.ptyOpen) P({
      ptyError: {
        tunnelId: e.ptyOpen.tunnelId ?? "",
        errorMessage: "PTY tunnel not supported by bridge worker"
      }
    });
  }
  function re(o, e) {
    if (E) return;
    if (E = !0, I) clearTimeout(I), I = null;
    f(`permanent failure (${e}): ${o}`, "error"), i("tengu_preview_tunnel_permanent_failure", {
      consecutive_failures: B,
      policy_refusal: e === "policy"
    }), r.onPermanentFailure?.(o, e);
  }
  function X() {
    if (B++, r.onPermanentFailure && B >= ke) return re(`${B} consecutive failed or short-lived ` + "connections \u2014 relay unreachable or refusing", "exhausted"), 
    !0;
    return !1;
  }
  function V() {
    if (E) return;
    if (N > 0 && Date.now() - N > le) W = ae;
    N = 0, L = !1;
    let o = W + Math.floor(Math.random() * (W / 2));
    f(`reconnecting in ${o}ms`), I = setTimeout(se, o), W = Math.min(W * 2, le);
  }
  function oe(o) {
    if (w) clearTimeout(w), w = null;
    if (R) clearInterval(R), R = null;
    for (let e of k.values()) e.abort();
    if (k.clear(), te(), b === o) b = null;
  }
  function J(o, e) {
    f(`${e}; forcing reconnect`, "error"), o.onopen = o.onmessage = o.onerror = o.onclose = null, 
    oe(o);
    try {
      let n = o.terminate;
      if (typeof n === "function") n.call(o); else o.close();
    } catch {}
    V();
  }
  function se() {
    if (E) return;
    I = null, g = Ge(u, r.sessionId);
    let o = {
      Authorization: `Bearer ${u}`,
      "x-session-id": g
    }, e;
    try {
      e = new globalThis.WebSocket(c, {
        headers: o,
        proxy: Dw(c),
        tls: r.toolServer ? {
          ...YS(),
          rejectUnauthorized: !0
        } : YS() || void 0
      });
    } catch (n) {
      if (f(`WebSocket construct failed: ${l(n)}`, "error"), X()) return;
      V();
      return;
    }
    b = e, w = setTimeout(n => {
      f("open timeout; retrying", "error"), n.onopen = n.onmessage = n.onerror = n.onclose = null;
      try {
        n.close();
      } catch {}
      if (b === n) b = null;
      if (X()) return;
      V();
    }, Ne, e), e.onopen = () => {
      if (w) clearTimeout(w), w = null;
      f(`connected session=${r.sessionId}`), N = Date.now(), O = Date.now(), j = !1, A = 0, 
      x = 0, z = 0, F = 0, G = !1, L = !1;
      let n = e;
      n.addEventListener?.("ping", () => {
        O = Date.now(), L = !0;
      }), n.addEventListener?.("pong", a => {
        O = Date.now(), L = !0, j = !0, A = 0;
        let S = Ae(a?.data);
        if (S > F && S <= x) F = S;
      }), R = setInterval(() => {
        if (e.readyState !== WebSocket.OPEN) return;
        if (r.livenessEnforce && r.quietLivenessPings !== void 0 && j && A >= Math.max(r.quietLivenessPings, (z - F) / Oe)) {
          i("tengu_preview_tunnel_liveness_enforced_reconnect", {
            idle_ms: A * ee,
            quiet: !0
          }), J(e, `${A} pings in a row unanswered (liveness deadline exceeded)`);
          return;
        }
        if (Date.now() - O > (r.livenessDeadlineMs ?? Ce)) {
          if (r.livenessEnforce) {
            let a = Date.now() - O;
            i("tengu_preview_tunnel_liveness_enforced_reconnect", {
              idle_ms: a
            }), J(e, `no peer activity for ${a}ms (liveness deadline exceeded)`);
            return;
          }
          if (!G) {
            let a = Date.now() - O;
            f(`${$e}: no peer activity for ${a}ms (liveness deadline exceeded; observe-only, not reconnecting)`, "error"), 
            i("tengu_preview_tunnel_liveness_would_have_fired", {
              idle_ms: a,
              enforce: !1
            }), G = !0;
          }
        } else G = !1;
        if (r.quietLivenessPings === void 0) {
          n.ping?.();
          return;
        }
        if (A === 0) z = x;
        A++, n.ping?.(String(x));
      }, ee);
    }, e.onmessage = n => {
      O = Date.now(), L = !0;
      let a = typeof n.data === "string" ? n.data : Buffer.from(n.data).toString("utf8");
      Se(a);
    }, e.onerror = n => {
      f(`error: ${"message" in n && typeof n.message === "string" ? n.message : "unknown"}`, "error");
    }, e.onclose = n => {
      let a = ze(n.reason);
      f(`closed code=${n.code} reason=${a || "(none)"}`), oe(e);
      let S = L || N > 0 && Date.now() - N >= We;
      if (S) B = 0, K = !1;
      if (n.code === 1008 && Ke(a)) {
        if (r.policyStopEnforce) {
          re(`relay refused with close code 1008 (policy violation): ${a || "(no reason)"} \u2014 not retrying`, "policy");
          return;
        }
        if (!K) K = !0, f(`POLICY_STOP_WOULD_HAVE_FIRED: capability-refusal 1008 (${a || "(no reason)"}); observe-only, retrying`, "error"), 
        i("tengu_preview_tunnel_policy_stop_would_have_fired", {
          enforce: !1
        });
      }
      if (!S && X()) return;
      V();
    };
  }
  return f(`starting session=${r.sessionId} url=${c}`), se(), {
    updateAccessToken(o) {
      u = o;
    },
    forceReconnect() {
      if (E || b === null) return;
      J(b, "caller requested");
    },
    stop() {
      if (E) return;
      if (E = !0, I) clearTimeout(I), I = null;
      if (w) clearTimeout(w), w = null;
      if (R) clearInterval(R), R = null;
      for (let o of k.values()) o.abort();
      k.clear(), te();
      try {
        b?.close();
      } catch {}
      b = null, f(`stopped session=${r.sessionId}`);
    }
  };
}

export { WGo };
