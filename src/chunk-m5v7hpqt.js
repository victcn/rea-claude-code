// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _lt } from "./chunk-qjztpcej.js";

class O extends Event {
  constructor(t, e) {
    var i, h;
    super(t), this.code = (i = e == null ? void 0 : e.code) != null ? i : void 0, this.message = (h = e == null ? void 0 : e.message) != null ? h : void 0;
  }
  [Symbol.for("nodejs.util.inspect.custom")](t, e, i) {
    return i(q(this), e);
  }
  [Symbol.for("Deno.customInspect")](t, e) {
    return t(q(this), e);
  }
}

function V(t) {
  let e = globalThis.DOMException;
  return typeof e == "function" ? new e(t, "SyntaxError") : SyntaxError(t);
}

function T(t) {
  return t instanceof Error ? "errors" in t && Array.isArray(t.errors) ? t.errors.map(T).join(", ") : "cause" in t && t.cause instanceof Error ? `${t}: ${T(t.cause)}` : t.message : `${t}`;
}

function q(t) {
  return {
    type: t.type,
    message: t.message,
    code: t.code,
    defaultPrevented: t.defaultPrevented,
    cancelable: t.cancelable,
    timeStamp: t.timeStamp
  };
}

var H = t => {
  throw TypeError(t);
}, A = (t, e, i) => e.has(t) || H("Cannot " + i), s = (t, e, i) => (A(t, e, "read from private field"), 
i ? i.call(t) : e.get(t)), a = (t, e, i) => e.has(t) ? H("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), n = (t, e, i, h) => (A(t, e, "write to private field"), 
e.set(t, i), i), c = (t, e, i) => (A(t, e, "access private method"), i), r, p, v, k, W, y, _, M, d, f, E, w, m, l, L, b, R, B, S, x, C, I, U;

class JGe extends EventTarget {
  constructor(t, e) {
    var i, h;
    super(), a(this, l), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, a(this, r), 
    a(this, p), a(this, v), a(this, k), a(this, W), a(this, y), a(this, _), a(this, M, null), 
    a(this, d), a(this, f), a(this, E, null), a(this, w, null), a(this, m, null), a(this, b, async o => {
      var g;
      s(this, f).reset();
      let {body: N, redirected: z, status: u, headers: J} = o;
      if (u === 204) {
        c(this, l, C).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (z ? n(this, v, new URL(o.url)) : n(this, v, void 0), u !== 200) {
        c(this, l, C).call(this, `Non-200 status code (${u})`, u);
        return;
      }
      if (!(J.get("content-type") || "").startsWith("text/event-stream")) {
        c(this, l, C).call(this, 'Invalid content type, expected "text/event-stream"', u);
        return;
      }
      if (s(this, r) === this.CLOSED) return;
      n(this, r, this.OPEN);
      let D = new Event("open");
      if ((g = s(this, m)) == null || g.call(this, D), this.dispatchEvent(D), typeof N != "object" || !N || !("getReader" in N)) {
        c(this, l, C).call(this, "Invalid response body, expected a web ReadableStream", u), 
        this.close();
        return;
      }
      let K = new TextDecoder, Q = N.getReader(), G = !0;
      do {
        let {done: P, value: F} = await Q.read();
        F && s(this, f).feed(K.decode(F, {
          stream: !P
        })), P && (G = !1, s(this, f).reset(), c(this, l, I).call(this));
      } while (G);
    }), a(this, R, o => {
      n(this, d, void 0), !(o.name === "AbortError" || o.type === "aborted") && c(this, l, I).call(this, T(o));
    }), a(this, S, o => {
      typeof o.id == "string" && n(this, M, o.id);
      let g = new MessageEvent(o.event || "message", {
        data: o.data,
        origin: s(this, v) ? s(this, v).origin : s(this, p).origin,
        lastEventId: o.id || ""
      });
      s(this, w) && (!o.event || o.event === "message") && s(this, w).call(this, g), this.dispatchEvent(g);
    }), a(this, x, o => {
      n(this, y, o);
    }), a(this, U, () => {
      n(this, _, void 0), s(this, r) === this.CONNECTING && c(this, l, L).call(this);
    });
    try {
      if (t instanceof URL) n(this, p, t); else if (typeof t == "string") n(this, p, new URL(t, X())); else throw Error("Invalid URL");
    } catch {
      throw V("An invalid or illegal string was specified");
    }
    n(this, f, _lt({
      onEvent: s(this, S),
      onRetry: s(this, x)
    })), n(this, r, this.CONNECTING), n(this, y, 3e3), n(this, W, (i = e == null ? void 0 : e.fetch) != null ? i : globalThis.fetch), 
    n(this, k, (h = e == null ? void 0 : e.withCredentials) != null ? h : !1), c(this, l, L).call(this);
  }
  get readyState() {
    return s(this, r);
  }
  get url() {
    return s(this, p).href;
  }
  get withCredentials() {
    return s(this, k);
  }
  get onerror() {
    return s(this, E);
  }
  set onerror(t) {
    n(this, E, t);
  }
  get onmessage() {
    return s(this, w);
  }
  set onmessage(t) {
    n(this, w, t);
  }
  get onopen() {
    return s(this, m);
  }
  set onopen(t) {
    n(this, m, t);
  }
  addEventListener(t, e, i) {
    let h = e;
    super.addEventListener(t, h, i);
  }
  removeEventListener(t, e, i) {
    let h = e;
    super.removeEventListener(t, h, i);
  }
  close() {
    s(this, _) && clearTimeout(s(this, _)), s(this, r) !== this.CLOSED && (s(this, d) && s(this, d).abort(), 
    n(this, r, this.CLOSED), n(this, d, void 0));
  }
}

r = new WeakMap, p = new WeakMap, v = new WeakMap, k = new WeakMap, W = new WeakMap, 
y = new WeakMap, _ = new WeakMap, M = new WeakMap, d = new WeakMap, f = new WeakMap, 
E = new WeakMap, w = new WeakMap, m = new WeakMap, l = new WeakSet, L = function() {
  n(this, r, this.CONNECTING), n(this, d, new AbortController), s(this, W)(s(this, p), c(this, l, B).call(this)).then(s(this, b)).catch(s(this, R));
}, b = new WeakMap, R = new WeakMap, B = function() {
  var t;
  let e = {
    mode: "cors",
    redirect: "follow",
    headers: {
      Accept: "text/event-stream",
      ...s(this, M) ? {
        "Last-Event-ID": s(this, M)
      } : void 0
    },
    cache: "no-store",
    signal: (t = s(this, d)) == null ? void 0 : t.signal
  };
  return "window" in globalThis && (e.credentials = this.withCredentials ? "include" : "same-origin"), 
  e;
}, S = new WeakMap, x = new WeakMap, C = function(t, e) {
  var i;
  s(this, r) !== this.CLOSED && n(this, r, this.CLOSED);
  let h = new O("error", {
    code: e,
    message: t
  });
  (i = s(this, E)) == null || i.call(this, h), this.dispatchEvent(h);
}, I = function(t, e) {
  var i;
  if (s(this, r) === this.CLOSED) return;
  n(this, r, this.CONNECTING);
  let h = new O("error", {
    code: e,
    message: t
  });
  (i = s(this, E)) == null || i.call(this, h), this.dispatchEvent(h), n(this, _, setTimeout(s(this, U), s(this, y)));
}, U = new WeakMap, JGe.CONNECTING = 0, JGe.OPEN = 1, JGe.CLOSED = 2;

function X() {
  let t = "document" in globalThis ? globalThis.document : void 0;
  return t && typeof t == "object" && "baseURI" in t && typeof t.baseURI == "string" ? t.baseURI : void 0;
}

export { JGe };
