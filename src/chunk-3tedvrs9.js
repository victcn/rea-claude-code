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

import { Y, t } from "./chunk-kawq2919.js";

import { X } from "./chunk-1zg3hbfq.js";

function B(r) {
  if (r < 6e4) return `${Math.round(r / 1e3)}s`;
  let n = Math.floor(r / 6e4), o = Math.round(r % 6e4 / 1e3);
  return o > 0 ? `${n}m ${o}s` : `${n}m`;
}

function G0(r) {
  let o = (r.startsWith("sk-ant-si-") ? r.slice(10) : r).split(".");
  if (o.length !== 3 || !o[1]) return null;
  try {
    return Y(Buffer.from(o[1], "base64url").toString("utf8"));
  } catch {
    return null;
  }
}

function son(r) {
  let n = r ? G0(r) : null, o = n !== null && typeof n === "object" && "aud" in n ? n.aud : void 0;
  return o === "claude-gateway" || Array.isArray(o) && o.includes("claude-gateway");
}

function KGn(r) {
  let n = G0(r);
  return n !== null && typeof n === "object" && "session_id" in n && typeof n.session_id === "string" ? n.session_id : void 0;
}

function qP(r) {
  let n = G0(r);
  if (n !== null && typeof n === "object" && "exp" in n && typeof n.exp === "number") return n.exp;
  return null;
}

var L = 3e5, T = 18e5, j = 3, G = 6e4;

function Kpt({getAccessToken: r, onRefresh: n, onExhausted: o, label: u, refreshBufferMs: c = L, maxFailures: p = j, adaptiveBuffer: b = !1, rescheduleFromNewToken: R = !1, decodeExpiry: A = qP, formatDelay: k = B}) {
  let d = new Map, h = new Map, m = new Map;
  function E(e) {
    let s = (m.get(e) ?? 0) + 1;
    return m.set(e, s), s;
  }
  function y(e, s) {
    let f = A(s);
    if (!f) {
      t(`[${u}:token] Could not decode JWT expiry for sessionId=${e}, token prefix=${s.slice(0, 15)}\u2026, keeping existing timer`);
      return;
    }
    let g = d.get(e);
    if (g) clearTimeout(g);
    let a = E(e), _ = new Date(f * 1e3).toISOString(), v = f * 1e3 - Date.now(), M = b ? Math.min(c, Math.max(1e3, Math.floor(v * .2))) : c, S = v - M;
    if (S <= 0) t(`[${u}:token] Token for sessionId=${e} expires=${_} (past or within buffer), refreshing immediately`); else {
      let F = b ? Math.round(M / 1e3) : c / 1e3;
      t(`[${u}:token] Scheduled token refresh for sessionId=${e} in ${k(S)} (expires=${_}, buffer=${F}s)`);
    }
    w(e, Date.now() + S, a);
  }
  let N = 6e4;
  function w(e, s, f) {
    h.delete(e);
    function g() {
      if (m.get(e) !== f) return;
      let a = s - Date.now();
      if (a <= 0) {
        x(e, f);
        return;
      }
      let _ = setTimeout(g, Math.min(a, N));
      d.set(e, _);
    }
    g();
  }
  function D(e, s) {
    let f = d.get(e);
    if (f) clearTimeout(f);
    let g = E(e), a = Math.max(s * 1e3 - c, 3e4);
    t(`[${u}:token] Scheduled token refresh for sessionId=${e} in ${k(a)} (expires_in=${s}s, buffer=${c / 1e3}s)`), 
    w(e, Date.now() + a, g);
  }
  function C(e) {
    let s = d.get(e);
    if (s) clearTimeout(s);
    let f = E(e);
    t(`[${u}:token] Immediate token refresh requested for sessionId=${e}`), x(e, f);
  }
  async function x(e, s) {
    let f;
    try {
      f = await r();
    } catch (a) {
      t(`[${u}:token] getAccessToken threw for sessionId=${e}: ${l(a)}`, {
        level: "error"
      });
    }
    if (m.get(e) !== s) {
      t(`[${u}:token] doRefresh for sessionId=${e} stale (gen ${s} vs ${m.get(e)}), skipping`);
      return;
    }
    if (!f) {
      let a = (h.get(e) ?? 0) + 1;
      if (h.set(e, a), t(`[${u}:token] No OAuth token available for refresh, sessionId=${e} (failure ${a}${Number.isFinite(p) ? `/${p}` : ""})`, {
        level: "error"
      }), X("error", "bridge_token_refresh_no_oauth"), a < p) {
        let _ = setTimeout(x, G, e, s);
        d.set(e, _);
        return;
      }
      t(`[${u}:token] Refresh chain exhausted for sessionId=${e} after ${a} consecutive failures`, {
        level: "error"
      }), X("error", "bridge_token_refresh_exhausted"), o?.(e, "no_oauth_token");
      return;
    }
    if (h.delete(e), t(`[${u}:token] Refreshing token for sessionId=${e}: new token prefix=${f.slice(0, 15)}\u2026`), 
    i("tengu_bridge_token_refreshed", {}), n(e, f), R && A(f)) {
      y(e, f);
      return;
    }
    let g = setTimeout(x, T, e, s);
    d.set(e, g), t(R ? `[${u}:token] Non-JWT token \u2014 scheduled fallback refresh for sessionId=${e} in ${k(T)}` : `[${u}:token] Scheduled follow-up refresh for sessionId=${e} in ${k(T)}`);
  }
  function H(e) {
    E(e);
    let s = d.get(e);
    if (s) clearTimeout(s), d.delete(e);
    h.delete(e);
  }
  function O() {
    for (let e of m.keys()) E(e);
    for (let e of d.values()) clearTimeout(e);
    d.clear(), h.clear();
  }
  return {
    schedule: y,
    scheduleFromExpiresIn: D,
    refreshNow: C,
    cancel: H,
    cancelAll: O
  };
}

var GMs = /^mem_[A-Za-z0-9_-]{1,120}$/;

function I(r) {
  let n = BigInt(58), o = Array(22).fill("1"), u = 21, c = r;
  while (c > 0n) {
    let p = Number(c % n);
    o[u] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[p], c = c / n, 
    u--;
  }
  return o.join("");
}

function P(r) {
  let n = r.replaceAll("-", "");
  if (n.length !== 32) throw Error(`Invalid UUID hex length: ${n.length}`);
  return BigInt("0x" + n);
}

function qGn(r, n) {
  try {
    let o = P(n);
    return `${r}_01${I(o)}`;
  } catch {
    return;
  }
}

function J(r) {
  if (r.length !== 22) return;
  let n = BigInt(58), o = 0n;
  for (let u of r) {
    let c = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(u);
    if (c < 0) return;
    o = o * n + BigInt(c);
  }
  return o;
}

function jO(r) {
  let n = r.lastIndexOf("_");
  if (n < 0) return;
  let o = r.slice(n + 1);
  if (!o.startsWith("01")) return;
  let u = J(o.slice(2));
  if (u === void 0) return;
  let c = u.toString(16).padStart(32, "0");
  if (c.length !== 32) return;
  return `${c.slice(0, 8)}-${c.slice(8, 12)}-${c.slice(12, 16)}-${c.slice(16, 20)}-${c.slice(20, 32)}`;
}

export { G0, son, KGn, qP, Kpt, GMs, qGn, jO };
