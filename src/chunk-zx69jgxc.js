// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _, t } from "./chunk-kawq2919.js";

var R = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date, D = new Set, x = typeof process === "object" && !!process ? process : {}, L = (e, i, s, n) => {
  typeof x.emitWarning === "function" ? x.emitWarning(e, i, s, n) : console.error(`[${s}] ${i}: ${e}`);
}, {AbortController: O, AbortSignal: M} = globalThis;

if (typeof O > "u") {
  M = class {
    onabort;
    _onabort=[];
    reason;
    aborted=!1;
    addEventListener(n, r) {
      this._onabort.push(r);
    }
  }, O = class {
    constructor() {
      i();
    }
    signal=new M;
    abort(n) {
      if (this.signal.aborted) return;
      this.signal.reason = n, this.signal.aborted = !0;
      for (let r of this.signal._onabort) r(n);
      this.signal.onabort?.(n);
    }
  };
  let e = x.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1", i = () => {
    if (!e) return;
    e = !1, L("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", i);
  };
}

var I = e => !D.has(e), N = Symbol("type"), z = e => e && e === Math.floor(e) && e > 0 && isFinite(e), k = e => !z(e) ? null : e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? T : null;

class T extends Array {
  constructor(e) {
    super(e);
    this.fill(0);
  }
}

class F {
  heap;
  length;
  static #l=!1;
  static create(e) {
    let i = k(e);
    if (!i) return [];
    F.#l = !0;
    let s = new F(e, i);
    return F.#l = !1, s;
  }
  constructor(e, i) {
    if (!F.#l) throw TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new i(e), this.length = 0;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
}

class oc {
  #l;
  #c;
  #m;
  #p;
  #C;
  #x;
  ttl;
  ttlResolution;
  ttlAutopurge;
  updateAgeOnGet;
  updateAgeOnHas;
  allowStale;
  noDisposeOnSet;
  noUpdateTTL;
  maxEntrySize;
  sizeCalculation;
  noDeleteOnFetchRejection;
  noDeleteOnStaleGet;
  allowStaleOnFetchAbort;
  allowStaleOnFetchRejection;
  ignoreFetchAbort;
  #n;
  #w;
  #s;
  #i;
  #t;
  #a;
  #u;
  #o;
  #r;
  #S;
  #h;
  #y;
  #b;
  #d;
  #_;
  #F;
  #f;
  static unsafeExposeInternals(e) {
    return {
      starts: e.#b,
      ttls: e.#d,
      sizes: e.#y,
      keyMap: e.#s,
      keyList: e.#i,
      valList: e.#t,
      next: e.#a,
      prev: e.#u,
      get head() {
        return e.#o;
      },
      get tail() {
        return e.#r;
      },
      free: e.#S,
      isBackgroundFetch: i => e.#e(i),
      backgroundFetch: (i, s, n, r) => e.#D(i, s, n, r),
      moveToTail: i => e.#O(i),
      indexes: i => e.#A(i),
      rindexes: i => e.#v(i),
      isStale: i => e.#g(i)
    };
  }
  get max() {
    return this.#l;
  }
  get maxSize() {
    return this.#c;
  }
  get calculatedSize() {
    return this.#w;
  }
  get size() {
    return this.#n;
  }
  get fetchMethod() {
    return this.#C;
  }
  get memoMethod() {
    return this.#x;
  }
  get dispose() {
    return this.#m;
  }
  get disposeAfter() {
    return this.#p;
  }
  constructor(e) {
    let {max: i = 0, ttl: s, ttlResolution: n = 1, ttlAutopurge: r, updateAgeOnGet: h, updateAgeOnHas: l, allowStale: o, dispose: a, disposeAfter: f, noDisposeOnSet: d, noUpdateTTL: g, maxSize: u = 0, maxEntrySize: w = 0, sizeCalculation: m, fetchMethod: y, memoMethod: c, noDeleteOnFetchRejection: S, noDeleteOnStaleGet: A, allowStaleOnFetchRejection: p, allowStaleOnFetchAbort: b, ignoreFetchAbort: E} = e;
    if (i !== 0 && !z(i)) throw TypeError("max option must be a nonnegative integer");
    let v = i ? k(i) : Array;
    if (!v) throw Error("invalid max value: " + i);
    if (this.#l = i, this.#c = u, this.maxEntrySize = w || this.#c, this.sizeCalculation = m, 
    this.sizeCalculation) {
      if (!this.#c && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation !== "function") throw TypeError("sizeCalculation set to non-function");
    }
    if (c !== void 0 && typeof c !== "function") throw TypeError("memoMethod must be a function if defined");
    if (this.#x = c, y !== void 0 && typeof y !== "function") throw TypeError("fetchMethod must be a function if specified");
    if (this.#C = y, this.#F = !!y, this.#s = new Map, this.#i = Array(i).fill(void 0), 
    this.#t = Array(i).fill(void 0), this.#a = new v(i), this.#u = new v(i), this.#o = 0, 
    this.#r = 0, this.#S = F.create(i), this.#n = 0, this.#w = 0, typeof a === "function") this.#m = a;
    if (typeof f === "function") this.#p = f, this.#h = []; else this.#p = void 0, this.#h = void 0;
    if (this.#_ = !!this.#m, this.#f = !!this.#p, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!g, 
    this.noDeleteOnFetchRejection = !!S, this.allowStaleOnFetchRejection = !!p, this.allowStaleOnFetchAbort = !!b, 
    this.ignoreFetchAbort = !!E, this.maxEntrySize !== 0) {
      if (this.#c !== 0) {
        if (!z(this.#c)) throw TypeError("maxSize must be a positive integer if specified");
      }
      if (!z(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
      this.#N();
    }
    if (this.allowStale = !!o, this.noDeleteOnStaleGet = !!A, this.updateAgeOnGet = !!h, 
    this.updateAgeOnHas = !!l, this.ttlResolution = z(n) || n === 0 ? n : 1, this.ttlAutopurge = !!r, 
    this.ttl = s || 0, this.ttl) {
      if (!z(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
      this.#L();
    }
    if (this.#l === 0 && this.ttl === 0 && this.#c === 0) throw TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !this.#l && !this.#c) {
      if (I("LRU_CACHE_UNBOUNDED")) D.add("LRU_CACHE_UNBOUNDED"), L("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", "LRU_CACHE_UNBOUNDED", oc);
    }
  }
  getRemainingTTL(e) {
    return this.#s.has(e) ? 1 / 0 : 0;
  }
  #L() {
    let e = new T(this.#l), i = new T(this.#l);
    this.#d = e, this.#b = i, this.#k = (r, h, l = R.now()) => {
      if (i[r] = h !== 0 ? l : 0, e[r] = h, h !== 0 && this.ttlAutopurge) {
        let o = setTimeout(() => {
          if (this.#g(r)) this.#z(this.#i[r], "expire");
        }, h + 1);
        if (o.unref) o.unref();
      }
    }, this.#E = r => {
      i[r] = e[r] !== 0 ? R.now() : 0;
    }, this.#R = (r, h) => {
      if (e[h]) {
        let l = e[h], o = i[h];
        if (!l || !o) return;
        r.ttl = l, r.start = o, r.now = s || n();
        let a = r.now - o;
        r.remainingTTL = l - a;
      }
    };
    let s = 0, n = () => {
      let r = R.now();
      if (this.ttlResolution > 0) {
        s = r;
        let h = setTimeout(() => s = 0, this.ttlResolution);
        if (h.unref) h.unref();
      }
      return r;
    };
    this.getRemainingTTL = r => {
      let h = this.#s.get(r);
      if (h === void 0) return 0;
      let l = e[h], o = i[h];
      if (!l || !o) return 1 / 0;
      let a = (s || n()) - o;
      return l - a;
    }, this.#g = r => {
      let h = i[r], l = e[r];
      return !!l && !!h && (s || n()) - h > l;
    };
  }
  #E=() => {};
  #R=() => {};
  #k=() => {};
  #g=() => !1;
  #N() {
    let e = new T(this.#l);
    this.#w = 0, this.#y = e, this.#T = i => {
      this.#w -= e[i], e[i] = 0;
    }, this.#P = (i, s, n, r) => {
      if (this.#e(s)) return 0;
      if (!z(n)) if (r) {
        if (typeof r !== "function") throw TypeError("sizeCalculation must be a function");
        if (n = r(s, i), !z(n)) throw TypeError("sizeCalculation return invalid (expect positive integer)");
      } else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      return n;
    }, this.#W = (i, s, n) => {
      if (e[i] = s, this.#c) {
        let r = this.#c - e[i];
        while (this.#w > r) this.#M(!0);
      }
      if (this.#w += e[i], n) n.entrySize = s, n.totalCalculatedSize = this.#w;
    };
  }
  #T=e => {};
  #W=(e, i, s) => {};
  #P=(e, i, s, n) => {
    if (s || n) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
    return 0;
  };
  * #A({allowStale: e = this.allowStale} = {}) {
    if (this.#n) for (let i = this.#r; ;) {
      if (!this.#U(i)) break;
      if (e || !this.#g(i)) yield i;
      if (i === this.#o) break; else i = this.#u[i];
    }
  }
  * #v({allowStale: e = this.allowStale} = {}) {
    if (this.#n) for (let i = this.#o; ;) {
      if (!this.#U(i)) break;
      if (e || !this.#g(i)) yield i;
      if (i === this.#r) break; else i = this.#a[i];
    }
  }
  #U(e) {
    return e !== void 0 && this.#s.get(this.#i[e]) === e;
  }
  * entries() {
    for (let e of this.#A()) if (this.#t[e] !== void 0 && this.#i[e] !== void 0 && !this.#e(this.#t[e])) yield [ this.#i[e], this.#t[e] ];
  }
  * rentries() {
    for (let e of this.#v()) if (this.#t[e] !== void 0 && this.#i[e] !== void 0 && !this.#e(this.#t[e])) yield [ this.#i[e], this.#t[e] ];
  }
  * keys() {
    for (let e of this.#A()) {
      let i = this.#i[e];
      if (i !== void 0 && !this.#e(this.#t[e])) yield i;
    }
  }
  * rkeys() {
    for (let e of this.#v()) {
      let i = this.#i[e];
      if (i !== void 0 && !this.#e(this.#t[e])) yield i;
    }
  }
  * values() {
    for (let e of this.#A()) if (this.#t[e] !== void 0 && !this.#e(this.#t[e])) yield this.#t[e];
  }
  * rvalues() {
    for (let e of this.#v()) if (this.#t[e] !== void 0 && !this.#e(this.#t[e])) yield this.#t[e];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  [Symbol.toStringTag]="LRUCache";
  find(e, i = {}) {
    for (let s of this.#A()) {
      let n = this.#t[s], r = this.#e(n) ? n.__staleWhileFetching : n;
      if (r === void 0) continue;
      if (e(r, this.#i[s], this)) return this.get(this.#i[s], i);
    }
  }
  forEach(e, i = this) {
    for (let s of this.#A()) {
      let n = this.#t[s], r = this.#e(n) ? n.__staleWhileFetching : n;
      if (r === void 0) continue;
      e.call(i, r, this.#i[s], this);
    }
  }
  rforEach(e, i = this) {
    for (let s of this.#v()) {
      let n = this.#t[s], r = this.#e(n) ? n.__staleWhileFetching : n;
      if (r === void 0) continue;
      e.call(i, r, this.#i[s], this);
    }
  }
  purgeStale() {
    let e = !1;
    for (let i of this.#v({
      allowStale: !0
    })) if (this.#g(i)) this.#z(this.#i[i], "expire"), e = !0;
    return e;
  }
  info(e) {
    let i = this.#s.get(e);
    if (i === void 0) return;
    let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
    if (n === void 0) return;
    let r = {
      value: n
    };
    if (this.#d && this.#b) {
      let h = this.#d[i], l = this.#b[i];
      if (h && l) {
        let o = h - (R.now() - l);
        r.ttl = o, r.start = Date.now();
      }
    }
    if (this.#y) r.size = this.#y[i];
    return r;
  }
  dump() {
    let e = [];
    for (let i of this.#A({
      allowStale: !0
    })) {
      let s = this.#i[i], n = this.#t[i], r = this.#e(n) ? n.__staleWhileFetching : n;
      if (r === void 0 || s === void 0) continue;
      let h = {
        value: r
      };
      if (this.#d && this.#b) {
        h.ttl = this.#d[i];
        let l = R.now() - this.#b[i];
        h.start = Math.floor(Date.now() - l);
      }
      if (this.#y) h.size = this.#y[i];
      e.unshift([ s, h ]);
    }
    return e;
  }
  load(e) {
    this.clear();
    for (let [i, s] of e) {
      if (s.start) {
        let n = Date.now() - s.start;
        s.start = R.now() - n;
      }
      this.set(i, s.value, s);
    }
  }
  set(e, i, s = {}) {
    if (i === void 0) return this.delete(e), this;
    let {ttl: n = this.ttl, start: r, noDisposeOnSet: h = this.noDisposeOnSet, sizeCalculation: l = this.sizeCalculation, status: o} = s, {noUpdateTTL: a = this.noUpdateTTL} = s, f = this.#P(e, i, s.size || 0, l);
    if (this.maxEntrySize && f > this.maxEntrySize) {
      if (o) o.set = "miss", o.maxEntrySizeExceeded = !0;
      return this.#z(e, "set"), this;
    }
    let d = this.#n === 0 ? void 0 : this.#s.get(e);
    if (d === void 0) {
      if (d = this.#n === 0 ? this.#r : this.#S.length !== 0 ? this.#S.pop() : this.#n === this.#l ? this.#M(!1) : this.#n, 
      this.#i[d] = e, this.#t[d] = i, this.#s.set(e, d), this.#a[this.#r] = d, this.#u[d] = this.#r, 
      this.#r = d, this.#n++, this.#W(d, f, o), o) o.set = "add";
      a = !1;
    } else {
      this.#O(d);
      let g = this.#t[d];
      if (i !== g) {
        if (this.#F && this.#e(g)) {
          g.__abortController.abort(Error("replaced"));
          let {__staleWhileFetching: u} = g;
          if (u !== void 0 && !h) {
            if (this.#_) this.#m?.(u, e, "set");
            if (this.#f) this.#h?.push([ u, e, "set" ]);
          }
        } else if (!h) {
          if (this.#_) this.#m?.(g, e, "set");
          if (this.#f) this.#h?.push([ g, e, "set" ]);
        }
        if (this.#T(d), this.#W(d, f, o), this.#t[d] = i, o) {
          o.set = "replace";
          let u = g && this.#e(g) ? g.__staleWhileFetching : g;
          if (u !== void 0) o.oldValue = u;
        }
      } else if (o) o.set = "update";
    }
    if (n !== 0 && !this.#d) this.#L();
    if (this.#d) {
      if (!a) this.#k(d, n, r);
      if (o) this.#R(o, d);
    }
    if (!h && this.#f && this.#h) {
      let g = this.#h, u;
      while (u = g?.shift()) this.#p?.(...u);
    }
    return this;
  }
  pop() {
    try {
      while (this.#n) {
        let e = this.#t[this.#o];
        if (this.#M(!0), this.#e(e)) {
          if (e.__staleWhileFetching) return e.__staleWhileFetching;
        } else if (e !== void 0) return e;
      }
    } finally {
      if (this.#f && this.#h) {
        let e = this.#h, i;
        while (i = e?.shift()) this.#p?.(...i);
      }
    }
  }
  #M(e) {
    let i = this.#o, s = this.#i[i], n = this.#t[i];
    if (this.#F && this.#e(n)) n.__abortController.abort(Error("evicted")); else if (this.#_ || this.#f) {
      if (this.#_) this.#m?.(n, s, "evict");
      if (this.#f) this.#h?.push([ n, s, "evict" ]);
    }
    if (this.#T(i), e) this.#i[i] = void 0, this.#t[i] = void 0, this.#S.push(i);
    if (this.#n === 1) this.#o = this.#r = 0, this.#S.length = 0; else this.#o = this.#a[i];
    return this.#s.delete(s), this.#n--, i;
  }
  has(e, i = {}) {
    let {updateAgeOnHas: s = this.updateAgeOnHas, status: n} = i, r = this.#s.get(e);
    if (r !== void 0) {
      let h = this.#t[r];
      if (this.#e(h) && h.__staleWhileFetching === void 0) return !1;
      if (!this.#g(r)) {
        if (s) this.#E(r);
        if (n) n.has = "hit", this.#R(n, r);
        return !0;
      } else if (n) n.has = "stale", this.#R(n, r);
    } else if (n) n.has = "miss";
    return !1;
  }
  peek(e, i = {}) {
    let {allowStale: s = this.allowStale} = i, n = this.#s.get(e);
    if (n === void 0 || !s && this.#g(n)) return;
    let r = this.#t[n];
    return this.#e(r) ? r.__staleWhileFetching : r;
  }
  #D(e, i, s, n) {
    let r = i === void 0 ? void 0 : this.#t[i];
    if (this.#e(r)) return r;
    let h = new O, {signal: l} = s;
    l?.addEventListener("abort", () => h.abort(l.reason), {
      signal: h.signal
    });
    let o = {
      signal: h.signal,
      options: s,
      context: n
    }, a = (m, y = !1) => {
      let {aborted: c} = h.signal, S = s.ignoreFetchAbort && m !== void 0;
      if (s.status) if (c && !y) {
        if (s.status.fetchAborted = !0, s.status.fetchError = h.signal.reason, S) s.status.fetchAbortIgnored = !0;
      } else s.status.fetchResolved = !0;
      if (c && !S && !y) return d(h.signal.reason);
      let A = u;
      if (this.#t[i] === u) if (m === void 0) if (A.__staleWhileFetching) this.#t[i] = A.__staleWhileFetching; else this.#z(e, "fetch"); else {
        if (s.status) s.status.fetchUpdated = !0;
        this.set(e, m, o.options);
      }
      return m;
    }, f = m => {
      if (s.status) s.status.fetchRejected = !0, s.status.fetchError = m;
      return d(m);
    }, d = m => {
      let {aborted: y} = h.signal, c = y && s.allowStaleOnFetchAbort, S = c || s.allowStaleOnFetchRejection, A = S || s.noDeleteOnFetchRejection, p = u;
      if (this.#t[i] === u) {
        if (!A || p.__staleWhileFetching === void 0) this.#z(e, "fetch"); else if (!c) this.#t[i] = p.__staleWhileFetching;
      }
      if (S) {
        if (s.status && p.__staleWhileFetching !== void 0) s.status.returnedStale = !0;
        return p.__staleWhileFetching;
      } else if (p.__returned === p) throw m;
    }, g = (m, y) => {
      let c = this.#C?.(e, r, o);
      if (c && c instanceof Promise) c.then(S => m(S === void 0 ? void 0 : S), y);
      h.signal.addEventListener("abort", () => {
        if (!s.ignoreFetchAbort || s.allowStaleOnFetchAbort) {
          if (m(void 0), s.allowStaleOnFetchAbort) m = S => a(S, !0);
        }
      });
    };
    if (s.status) s.status.fetchDispatched = !0;
    let u = new Promise(g).then(a, f), w = Object.assign(u, {
      __abortController: h,
      __staleWhileFetching: r,
      __returned: void 0
    });
    if (i === void 0) this.set(e, w, {
      ...o.options,
      status: void 0
    }), i = this.#s.get(e); else this.#t[i] = w;
    return w;
  }
  #e(e) {
    if (!this.#F) return !1;
    let i = e;
    return !!i && i instanceof Promise && i.hasOwnProperty("__staleWhileFetching") && i.__abortController instanceof O;
  }
  async fetch(e, i = {}) {
    let {allowStale: s = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: r = this.noDeleteOnStaleGet, ttl: h = this.ttl, noDisposeOnSet: l = this.noDisposeOnSet, size: o = 0, sizeCalculation: a = this.sizeCalculation, noUpdateTTL: f = this.noUpdateTTL, noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: g = this.allowStaleOnFetchRejection, ignoreFetchAbort: u = this.ignoreFetchAbort, allowStaleOnFetchAbort: w = this.allowStaleOnFetchAbort, context: m, forceRefresh: y = !1, status: c, signal: S} = i;
    if (!this.#F) {
      if (c) c.fetch = "get";
      return this.get(e, {
        allowStale: s,
        updateAgeOnGet: n,
        noDeleteOnStaleGet: r,
        status: c
      });
    }
    let A = {
      allowStale: s,
      updateAgeOnGet: n,
      noDeleteOnStaleGet: r,
      ttl: h,
      noDisposeOnSet: l,
      size: o,
      sizeCalculation: a,
      noUpdateTTL: f,
      noDeleteOnFetchRejection: d,
      allowStaleOnFetchRejection: g,
      allowStaleOnFetchAbort: w,
      ignoreFetchAbort: u,
      status: c,
      signal: S
    }, p = this.#s.get(e);
    if (p === void 0) {
      if (c) c.fetch = "miss";
      let b = this.#D(e, p, A, m);
      return b.__returned = b;
    } else {
      let b = this.#t[p];
      if (this.#e(b)) {
        let W = s && b.__staleWhileFetching !== void 0;
        if (c) {
          if (c.fetch = "inflight", W) c.returnedStale = !0;
        }
        return W ? b.__staleWhileFetching : b.__returned = b;
      }
      let E = this.#g(p);
      if (!y && !E) {
        if (c) c.fetch = "hit";
        if (this.#O(p), n) this.#E(p);
        if (c) this.#R(c, p);
        return b;
      }
      let v = this.#D(e, p, A, m), C = v.__staleWhileFetching !== void 0 && s;
      if (c) {
        if (c.fetch = E ? "stale" : "refresh", C && E) c.returnedStale = !0;
      }
      return C ? v.__staleWhileFetching : v.__returned = v;
    }
  }
  async forceFetch(e, i = {}) {
    let s = await this.fetch(e, i);
    if (s === void 0) throw Error("fetch() returned undefined");
    return s;
  }
  memo(e, i = {}) {
    let s = this.#x;
    if (!s) throw Error("no memoMethod provided to constructor");
    let {context: n, forceRefresh: r, ...h} = i, l = this.get(e, h);
    if (!r && l !== void 0) return l;
    let o = s(e, l, {
      options: h,
      context: n
    });
    return this.set(e, o, h), o;
  }
  get(e, i = {}) {
    let {allowStale: s = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: r = this.noDeleteOnStaleGet, status: h} = i, l = this.#s.get(e);
    if (l !== void 0) {
      let o = this.#t[l], a = this.#e(o);
      if (h) this.#R(h, l);
      if (this.#g(l)) {
        if (h) h.get = "stale";
        if (!a) {
          if (!r) this.#z(e, "expire");
          if (h && s) h.returnedStale = !0;
          return s ? o : void 0;
        } else {
          if (h && s && o.__staleWhileFetching !== void 0) h.returnedStale = !0;
          return s ? o.__staleWhileFetching : void 0;
        }
      } else {
        if (h) h.get = "hit";
        if (a) return o.__staleWhileFetching;
        if (this.#O(l), n) this.#E(l);
        return o;
      }
    } else if (h) h.get = "miss";
  }
  #I(e, i) {
    this.#u[i] = e, this.#a[e] = i;
  }
  #O(e) {
    if (e !== this.#r) {
      if (e === this.#o) this.#o = this.#a[e]; else this.#I(this.#u[e], this.#a[e]);
      this.#I(this.#r, e), this.#r = e;
    }
  }
  delete(e) {
    return this.#z(e, "delete");
  }
  #z(e, i) {
    let s = !1;
    if (this.#n !== 0) {
      let n = this.#s.get(e);
      if (n !== void 0) if (s = !0, this.#n === 1) this.#G(i); else {
        this.#T(n);
        let r = this.#t[n];
        if (this.#e(r)) r.__abortController.abort(Error("deleted")); else if (this.#_ || this.#f) {
          if (this.#_) this.#m?.(r, e, i);
          if (this.#f) this.#h?.push([ r, e, i ]);
        }
        if (this.#s.delete(e), this.#i[n] = void 0, this.#t[n] = void 0, n === this.#r) this.#r = this.#u[n]; else if (n === this.#o) this.#o = this.#a[n]; else {
          let h = this.#u[n];
          this.#a[h] = this.#a[n];
          let l = this.#a[n];
          this.#u[l] = this.#u[n];
        }
        this.#n--, this.#S.push(n);
      }
    }
    if (this.#f && this.#h?.length) {
      let n = this.#h, r;
      while (r = n?.shift()) this.#p?.(...r);
    }
    return s;
  }
  clear() {
    return this.#G("delete");
  }
  #G(e) {
    for (let i of this.#v({
      allowStale: !0
    })) {
      let s = this.#t[i];
      if (this.#e(s)) s.__abortController.abort(Error("deleted")); else {
        let n = this.#i[i];
        if (this.#_) this.#m?.(s, n, e);
        if (this.#f) this.#h?.push([ s, n, e ]);
      }
    }
    if (this.#s.clear(), this.#t.fill(void 0), this.#i.fill(void 0), this.#d && this.#b) this.#d.fill(0), 
    this.#b.fill(0);
    if (this.#y) this.#y.fill(0);
    if (this.#o = 0, this.#r = 0, this.#S.length = 0, this.#w = 0, this.#n = 0, this.#f && this.#h) {
      let i = this.#h, s;
      while (s = i?.shift()) this.#p?.(...s);
    }
  }
}

function Bee(e, i = 3e5, s) {
  let n = o => typeof i === "function" ? i(o) : i, r = new Map, h = new Map, l = async (...o) => {
    let a = _(o), f = r.get(a);
    if (f && s && !s(f.value, f.timestamp)) {
      if (f.refreshPromise) return f.refreshPromise;
      r.delete(a), f = void 0;
    }
    let d = Date.now();
    if (!f) {
      let g = h.get(a);
      if (g) return g;
      let u = e(...o);
      h.set(a, u);
      try {
        let w = await u;
        if (h.get(a) === u) r.set(a, {
          value: w,
          timestamp: Date.now(),
          refreshing: !1,
          lifetimeMs: n(w)
        });
        return w;
      } finally {
        if (h.get(a) === u) h.delete(a);
      }
    }
    if (f && d - f.timestamp > f.lifetimeMs && !f.refreshing) {
      f.refreshing = !0;
      let g = f, u = e(...o);
      return g.refreshPromise = u, u.then(w => {
        if (r.get(a) === g) r.set(a, {
          value: w,
          timestamp: Date.now(),
          refreshing: !1,
          lifetimeMs: n(w)
        });
      }).catch(w => {
        if (t(String(w), {
          level: "error"
        }), r.get(a) === g) r.delete(a);
      }), f.value;
    }
    return r.get(a).value;
  };
  return l.cache = {
    clear: () => {
      r.clear(), h.clear();
    }
  }, l;
}

function cM(e, i, s = 100) {
  let n = new oc({
    max: s
  }), r = (...h) => {
    let l = i(...h), o = n.get(l);
    if (o !== void 0) return o;
    let a = e(...h);
    return n.set(l, a), a;
  };
  return r.cache = {
    clear: () => n.clear(),
    size: () => n.size,
    delete: h => n.delete(h),
    get: h => n.peek(h),
    has: h => n.has(h),
    set: (h, l) => void n.set(h, l)
  }, r;
}

var P = new Set;

function MG(e) {
  return P.add(e), e;
}

function Pgt(e, i) {
  let s = [];
  for (let n of i) {
    let r = e.get(n);
    if (r !== void 0) s.push([ n, r ]);
  }
  e.clear();
  for (let [n, r] of s) e.set(n, r);
}

var G = 128;

function qXe(e, i, s) {
  let n = s?.maxSize ?? G, r = new Map;
  P.add(r);
  function h(...l) {
    let o = i ? i(...l) : l[0], a = r.get(o);
    if (a) return a;
    let f = e(...l);
    if (r.size >= n) r.delete(r.keys().next().value);
    return r.set(o, f), f.catch(() => {
      if (r.get(o) === f) r.delete(o);
    }), f;
  }
  return h.cache = r, h;
}

export { oc, Bee, cM, MG, Pgt, qXe };
