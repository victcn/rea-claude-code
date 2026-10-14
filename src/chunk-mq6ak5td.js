// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { kue, d7t, Foe } from "./chunk-wsxyczjg.js";

import { _, Y } from "./chunk-kawq2919.js";

import { _lt } from "./chunk-qjztpcej.js";

import { L } from "./chunk-vh1p9t2h.js";

var D = new K(() => ({}));

function T() {
  return D.of(B().host);
}

function Sue() {
  return T().door !== void 0;
}

var E = 1024, U = 32, a$n = 1024, O = 256, j = /^[-\d"]/, v = 65536, q = 128, k = 16, N = 1024;

function $Qt() {
  let {door: i} = T();
  if (i === void 0) return;
  let c = new Map, a = new Map, p = n => typeof n === "string" && n.length <= U && !c.has(n) && !a.has(n) ? Number(n) : n, f = n => {
    c.delete(n), a.delete(n);
  }, g = (n, s, u = {
    any: !1,
    lastMayBeShortError: !1
  }) => ({
    read(e) {
      let d = e.length;
      u.lastMayBeShortError = s && !u.any && d <= N, u.any = !0;
      let r = i.mostMembers(void 0, n);
      if (u.lastMayBeShortError) r = Math.max(r, k);
      let t = !d7t(e, a$n), o = t ? void 0 : kue(e, r, Math.min(r, z)), m, l = e;
      if (o === void 0) {
        let M = Foe(e, x), h = M?.has("method") ? void 0 : M?.get("id"), w = h !== void 0 && h.length <= O && j.test(h) ? A(h) : void 0, R = p(w), y = c.get(R) ?? a.get(R);
        if (y !== void 0) {
          if (m = {
            id: w,
            asked: y
          }, r = i.mostMembers(y, n), o = t ? void 0 : kue(e, r), o === void 0 && !t) l = i.withoutWhatIsDropped?.(e, y, n) ?? e;
          if (l !== e) t = !d7t(l, a$n), o = t ? void 0 : kue(l, r);
        }
      }
      let S = o === void 0 ? void 0 : A(l);
      if (o !== void 0 && S !== void 0) return {
        sent: S,
        size: {
          ...o,
          length: d
        },
        ...l !== e && {
          readInstead: l
        }
      };
      if (o !== void 0 && m === void 0) {
        let M = {
          ...o,
          length: d
        };
        if (u.lastMayBeShortError && M.members <= k) return {
          sent: void 0,
          size: M
        };
        return i.chargeUnasked(n, M.members), i.judge(e, void 0, n, M) === void 0 ? {
          standIn: void 0
        } : {
          sent: void 0,
          size: M
        };
      }
      return f(p(m?.id)), {
        standIn: i.standInForUnparsed(m, n, t ? {
          reason: "nesting"
        } : o === void 0 ? {
          reason: "members",
          most: r
        } : {
          reason: "not_json"
        })
      };
    },
    chargeUnasked({members: e}) {
      i.chargeUnasked(n, e);
    },
    judge(e, d, r) {
      let t = L(e) && e.method === void 0 ? p(e.id) : void 0, o = c.get(t), m = o ?? a.get(t);
      if (u.lastMayBeShortError && d.members <= k && !r && m === void 0 && L(e) && e.method === void 0 && (e.result === void 0 || e.result === null)) return e;
      if (o !== void 0) {
        if (c.delete(t), a.size >= E) a.delete(a.keys().next().value);
        a.set(t, {
          ...o,
          answeredBefore: !0
        });
      }
      if ((m === void 0 || m.answeredBefore) && !r) i.chargeUnasked(n, d.members);
      let l = i.judge(e, m, n, d);
      if (l !== e) f(t);
      return l;
    }
  });
  return {
    noteRequests(n) {
      if (typeof n !== "string") return;
      let s = A(n), u = Array.isArray(s) ? s : [ s ];
      for (let e of u) {
        if (!L(e)) continue;
        let {id: d, method: r, params: t} = e;
        if (d !== void 0 && typeof r === "string") {
          if (c.size >= E) c.delete(c.keys().next().value);
          let o = r === "tools/call" && L(t) ? t.name : void 0;
          c.set(d, {
            method: r,
            ...typeof o === "string" && {
              tool: o
            }
          });
        }
      }
    },
    judging({url: n, isGet: s, ok: u, contentType: e}) {
      let d = g(n, !u && !s), r = (e ?? "").toLowerCase();
      if (r.includes("text/event-stream") || s && u) return {
        through: H(d),
        contentType: "text/event-stream"
      };
      return {
        through: F(d),
        contentType: r.includes("application/json") ? "application/json" : void 0
      };
    }
  };
}

var x = new Set([ "id", "method" ]), z = 8;

function I(i) {
  return i.replace(/^\uFEFF+/, "");
}

function A(i) {
  try {
    return Y(i);
  } catch {
    return;
  }
}

function b(i, c, a) {
  for (let p of a === void 0 ? c : [ (new TextEncoder).encode(a) ]) i.enqueue(p);
}

function F({read: i, chargeUnasked: c, judge: a}) {
  let p = [];
  return new TransformStream({
    transform(f) {
      p.push(f);
    },
    flush(f) {
      let g = i(I((new TextDecoder).decode(Buffer.concat(p))));
      if ("standIn" in g) {
        f.enqueue((new TextEncoder).encode(_(g.standIn ?? null)));
        return;
      }
      let {sent: n, size: s, readInstead: u} = g;
      if (typeof n !== "object" || n === null) {
        b(f, p, u);
        return;
      }
      if (Array.isArray(n)) c(s);
      if (Array.isArray(n) && n.length > q) {
        f.enqueue((new TextEncoder).encode("null"));
        return;
      }
      let e, d;
      if (Array.isArray(n)) {
        let r = n, t = r.map(o => a(o, s, !0)).filter(o => o !== void 0);
        e = t, d = t.length === r.length && r.every((o, m) => o === t[m]);
      } else e = a(n, s, !1), d = e === n;
      if (d) {
        b(f, p, u);
        return;
      }
      f.enqueue((new TextEncoder).encode(_(e ?? null)));
    }
  });
}

function H({read: i, judge: c}) {
  let a = new TextDecoder, p = new TextEncoder, f = "", g = _lt({
    onRetry(s) {
      f += `retry: ${s}\n\n`;
    },
    onEvent({id: s, event: u, data: e}) {
      let d = u, r = e;
      if (e !== "" && (d === void 0 || d === "message")) {
        let t = i(I(e)), o = "standIn" in t ? void 0 : t.sent, m = "standIn" in t ? t.standIn : o === void 0 ? void 0 : c(o, t.size, !1);
        if (!("standIn" in t) && o === void 0) r = "!"; else if (m === void 0) d = "dropped", 
        r = ""; else if (m !== o) r = _(m); else r = (("standIn" in t ? void 0 : t.readInstead) ?? e).replaceAll(`\n`, " ");
      } else if (e.length > v) r = "";
      f += (d === void 0 ? "" : `event: ${d}\n`) + (s === void 0 ? "" : `id: ${s}\n`) + r.split(`\n`).map(t => `data: ${t}\n`).join("") + `\n`;
    }
  }), n = s => {
    if (f !== "") s.enqueue(p.encode(f)), f = "";
  };
  return new TransformStream({
    transform(s, u) {
      g.feed(a.decode(s, {
        stream: !0
      })), n(u);
    },
    flush(s) {
      g.feed(a.decode()), n(s);
    }
  });
}

export { Sue, a$n, $Qt };
