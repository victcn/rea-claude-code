// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import { l, jt } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { Do, t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-hedpgw9m.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import { kFs, Dl, Ogt, ZMo, TFs, aD } from "./chunk-4dwgr3et.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-t6pdm7af.js";

import "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-3ykz5st8.js";

import "./chunk-znhtg8e4.js";

import "./chunk-5brm0azz.js";

import { Ift, _Ds } from "./chunk-80mtmc8z.js";

import "./chunk-x5881pc6.js";

import "./chunk-8yperama.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-46phtgr7.js";

import "./chunk-jkzenvsk.js";

import { gs } from "./chunk-qqd24q2y.js";

import "./chunk-dd98x6x7.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9yajep3y.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-j90se18b.js";

import "./chunk-nnrb0acr.js";

import "./chunk-9btqc05b.js";

import "./chunk-cjt10y7b.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-bsddf56y.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import { T8 } from "./chunk-ynwc4sx8.js";

import { vv } from "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

import { we, C, Ne } from "./chunk-m8ez8fhk.js";

var _e = C(function(Kt) {
  Object.defineProperty(Kt, "__esModule", {
    value: !0
  });
  Kt.stringArray = Kt.array = Kt.func = Kt.error = Kt.number = Kt.string = Kt.boolean = void 0;
  function ti(e) {
    return e === !0 || e === !1;
  }
  Kt.boolean = ti;
  function Vt(e) {
    return typeof e === "string" || e instanceof String;
  }
  Kt.string = Vt;
  function ri(e) {
    return typeof e === "number" || e instanceof Number;
  }
  Kt.number = ri;
  function ni(e) {
    return e instanceof Error;
  }
  Kt.error = ni;
  function ii(e) {
    return typeof e === "function";
  }
  Kt.func = ii;
  function Jt(e) {
    return Array.isArray(e);
  }
  Kt.array = Jt;
  function si(e) {
    return Jt(e) && e.every(r => Vt(r));
  }
  Kt.stringArray = si;
});

var ht = C(function(vr) {
  Object.defineProperty(vr, "__esModule", {
    value: !0
  });
  vr.Message = vr.NotificationType9 = vr.NotificationType8 = vr.NotificationType7 = vr.NotificationType6 = vr.NotificationType5 = vr.NotificationType4 = vr.NotificationType3 = vr.NotificationType2 = vr.NotificationType1 = vr.NotificationType0 = vr.NotificationType = vr.RequestType9 = vr.RequestType8 = vr.RequestType7 = vr.RequestType6 = vr.RequestType5 = vr.RequestType4 = vr.RequestType3 = vr.RequestType2 = vr.RequestType1 = vr.RequestType = vr.RequestType0 = vr.AbstractMessageSignature = vr.ParameterStructures = vr.ResponseError = vr.ErrorCodes = void 0;
  var K = _e(), lt;
  (function(e) {
    e.ParseError = -32700, e.InvalidRequest = -32600, e.MethodNotFound = -32601, e.InvalidParams = -32602, 
    e.InternalError = -32603, e.jsonrpcReservedErrorRangeStart = -32099, e.serverErrorStart = -32099, 
    e.MessageWriteError = -32099, e.MessageReadError = -32098, e.PendingResponseRejected = -32097, 
    e.ConnectionInactive = -32096, e.ServerNotInitialized = -32002, e.UnknownErrorCode = -32001, 
    e.jsonrpcReservedErrorRangeEnd = -32e3, e.serverErrorEnd = -32e3;
  })(lt || (vr.ErrorCodes = lt = {}));
  class ft extends Error {
    constructor(e, r, n) {
      super(r);
      this.code = K.number(e) ? e : lt.UnknownErrorCode, this.data = n, Object.setPrototypeOf(this, ft.prototype);
    }
    toJson() {
      let e = {
        code: this.code,
        message: this.message
      };
      if (this.data !== void 0) e.data = this.data;
      return e;
    }
  }
  vr.ResponseError = ft;
  class H {
    constructor(e) {
      this.kind = e;
    }
    static is(e) {
      return e === H.auto || e === H.byName || e === H.byPosition;
    }
    toString() {
      return this.kind;
    }
  }
  vr.ParameterStructures = H;
  H.auto = new H("auto");
  H.byPosition = new H("byPosition");
  H.byName = new H("byName");
  class q {
    constructor(e, r) {
      this.method = e, this.numberOfParams = r;
    }
    get parameterStructures() {
      return H.auto;
    }
  }
  vr.AbstractMessageSignature = q;
  class Yt extends q {
    constructor(e) {
      super(e, 0);
    }
  }
  vr.RequestType0 = Yt;
  class Xt extends q {
    constructor(e, r = H.auto) {
      super(e, 1);
      this._parameterStructures = r;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  vr.RequestType = Xt;
  class Zt extends q {
    constructor(e, r = H.auto) {
      super(e, 1);
      this._parameterStructures = r;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  vr.RequestType1 = Zt;
  class er extends q {
    constructor(e) {
      super(e, 2);
    }
  }
  vr.RequestType2 = er;
  class tr extends q {
    constructor(e) {
      super(e, 3);
    }
  }
  vr.RequestType3 = tr;
  class rr extends q {
    constructor(e) {
      super(e, 4);
    }
  }
  vr.RequestType4 = rr;
  class nr extends q {
    constructor(e) {
      super(e, 5);
    }
  }
  vr.RequestType5 = nr;
  class ir extends q {
    constructor(e) {
      super(e, 6);
    }
  }
  vr.RequestType6 = ir;
  class sr extends q {
    constructor(e) {
      super(e, 7);
    }
  }
  vr.RequestType7 = sr;
  class or extends q {
    constructor(e) {
      super(e, 8);
    }
  }
  vr.RequestType8 = or;
  class ar extends q {
    constructor(e) {
      super(e, 9);
    }
  }
  vr.RequestType9 = ar;
  class cr extends q {
    constructor(e, r = H.auto) {
      super(e, 1);
      this._parameterStructures = r;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  vr.NotificationType = cr;
  class ur extends q {
    constructor(e) {
      super(e, 0);
    }
  }
  vr.NotificationType0 = ur;
  class dr extends q {
    constructor(e, r = H.auto) {
      super(e, 1);
      this._parameterStructures = r;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  vr.NotificationType1 = dr;
  class lr extends q {
    constructor(e) {
      super(e, 2);
    }
  }
  vr.NotificationType2 = lr;
  class fr extends q {
    constructor(e) {
      super(e, 3);
    }
  }
  vr.NotificationType3 = fr;
  class hr extends q {
    constructor(e) {
      super(e, 4);
    }
  }
  vr.NotificationType4 = hr;
  class pr extends q {
    constructor(e) {
      super(e, 5);
    }
  }
  vr.NotificationType5 = pr;
  class mr extends q {
    constructor(e) {
      super(e, 6);
    }
  }
  vr.NotificationType6 = mr;
  class gr extends q {
    constructor(e) {
      super(e, 7);
    }
  }
  vr.NotificationType7 = gr;
  class yr extends q {
    constructor(e) {
      super(e, 8);
    }
  }
  vr.NotificationType8 = yr;
  class br extends q {
    constructor(e) {
      super(e, 9);
    }
  }
  vr.NotificationType9 = br;
  var Gt;
  (function(e) {
    function r(c) {
      let h = c;
      return h && K.string(h.method) && (K.string(h.id) || K.number(h.id));
    }
    e.isRequest = r;
    function n(c) {
      let h = c;
      return h && K.string(h.method) && c.id === void 0;
    }
    e.isNotification = n;
    function s(c) {
      let h = c;
      return h && (h.result !== void 0 || !!h.error) && (K.string(h.id) || K.number(h.id) || h.id === null);
    }
    e.isResponse = s;
  })(Gt || (vr.Message = Gt = {}));
});

var mt = C(function(Rr) {
  var _r;
  Object.defineProperty(Rr, "__esModule", {
    value: !0
  });
  Rr.LRUCache = Rr.LinkedMap = Rr.Touch = void 0;
  var U;
  (function(e) {
    e.None = 0, e.First = 1, e.AsOld = e.First, e.Last = 2, e.AsNew = e.Last;
  })(U || (Rr.Touch = U = {}));
  class pt {
    constructor() {
      this[_r] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, 
      this._size = 0, this._state = 0;
    }
    clear() {
      this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      return this._head?.value;
    }
    get last() {
      return this._tail?.value;
    }
    has(e) {
      return this._map.has(e);
    }
    get(e, r = U.None) {
      let n = this._map.get(e);
      if (!n) return;
      if (r !== U.None) this.touch(n, r);
      return n.value;
    }
    set(e, r, n = U.None) {
      let s = this._map.get(e);
      if (s) {
        if (s.value = r, n !== U.None) this.touch(s, n);
      } else {
        switch (s = {
          key: e,
          value: r,
          next: void 0,
          previous: void 0
        }, n) {
         case U.None:
          this.addItemLast(s);
          break;

         case U.First:
          this.addItemFirst(s);
          break;

         case U.Last:
          this.addItemLast(s);
          break;

         default:
          this.addItemLast(s);
          break;
        }
        this._map.set(e, s), this._size++;
      }
      return this;
    }
    delete(e) {
      return !!this.remove(e);
    }
    remove(e) {
      let r = this._map.get(e);
      if (!r) return;
      return this._map.delete(e), this.removeItem(r), this._size--, r.value;
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw Error("Invalid list");
      let e = this._head;
      return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
    }
    forEach(e, r) {
      let n = this._state, s = this._head;
      while (s) {
        if (r) e.bind(r)(s.value, s.key, this); else e(s.value, s.key, this);
        if (this._state !== n) throw Error("LinkedMap got modified during iteration.");
        s = s.next;
      }
    }
    keys() {
      let e = this._state, r = this._head, n = {
        [Symbol.iterator]: () => n,
        next: () => {
          if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
          if (r) {
            let s = {
              value: r.key,
              done: !1
            };
            return r = r.next, s;
          } else return {
            value: void 0,
            done: !0
          };
        }
      };
      return n;
    }
    values() {
      let e = this._state, r = this._head, n = {
        [Symbol.iterator]: () => n,
        next: () => {
          if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
          if (r) {
            let s = {
              value: r.value,
              done: !1
            };
            return r = r.next, s;
          } else return {
            value: void 0,
            done: !0
          };
        }
      };
      return n;
    }
    entries() {
      let e = this._state, r = this._head, n = {
        [Symbol.iterator]: () => n,
        next: () => {
          if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
          if (r) {
            let s = {
              value: [ r.key, r.value ],
              done: !1
            };
            return r = r.next, s;
          } else return {
            value: void 0,
            done: !0
          };
        }
      };
      return n;
    }
    [(_r = Symbol.toStringTag, Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(e) {
      if (e >= this.size) return;
      if (e === 0) {
        this.clear();
        return;
      }
      let r = this._head, n = this.size;
      while (r && n > e) this._map.delete(r.key), r = r.next, n--;
      if (this._head = r, this._size = n, r) r.previous = void 0;
      this._state++;
    }
    addItemFirst(e) {
      if (!this._head && !this._tail) this._tail = e; else if (!this._head) throw Error("Invalid list"); else e.next = this._head, 
      this._head.previous = e;
      this._head = e, this._state++;
    }
    addItemLast(e) {
      if (!this._head && !this._tail) this._head = e; else if (!this._tail) throw Error("Invalid list"); else e.previous = this._tail, 
      this._tail.next = e;
      this._tail = e, this._state++;
    }
    removeItem(e) {
      if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0; else if (e === this._head) {
        if (!e.next) throw Error("Invalid list");
        e.next.previous = void 0, this._head = e.next;
      } else if (e === this._tail) {
        if (!e.previous) throw Error("Invalid list");
        e.previous.next = void 0, this._tail = e.previous;
      } else {
        let {next: r, previous: n} = e;
        if (!r || !n) throw Error("Invalid list");
        r.previous = n, n.next = r;
      }
      e.next = void 0, e.previous = void 0, this._state++;
    }
    touch(e, r) {
      if (!this._head || !this._tail) throw Error("Invalid list");
      if (r !== U.First && r !== U.Last) return;
      if (r === U.First) {
        if (e === this._head) return;
        let {next: n, previous: s} = e;
        if (e === this._tail) s.next = void 0, this._tail = s; else n.previous = s, s.next = n;
        e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, 
        this._state++;
      } else if (r === U.Last) {
        if (e === this._tail) return;
        let {next: n, previous: s} = e;
        if (e === this._head) n.previous = void 0, this._head = n; else n.previous = s, 
        s.next = n;
        e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
    toJSON() {
      let e = [];
      return this.forEach((r, n) => {
        e.push([ n, r ]);
      }), e;
    }
    fromJSON(e) {
      this.clear();
      for (let [r, n] of e) this.set(r, n);
    }
  }
  Rr.LinkedMap = pt;
  class Sr extends pt {
    constructor(e, r = 1) {
      super();
      this._limit = e, this._ratio = Math.min(Math.max(0, r), 1);
    }
    get limit() {
      return this._limit;
    }
    set limit(e) {
      this._limit = e, this.checkTrim();
    }
    get ratio() {
      return this._ratio;
    }
    set ratio(e) {
      this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
    }
    get(e, r = U.AsNew) {
      return super.get(e, r);
    }
    peek(e) {
      return super.get(e, U.None);
    }
    set(e, r) {
      return super.set(e, r, U.Last), this.checkTrim(), this;
    }
    checkTrim() {
      if (this.size > this._limit) this.trimOld(Math.round(this._limit * this._ratio));
    }
  }
  Rr.LRUCache = Sr;
});

var xr = C(function(Er) {
  Object.defineProperty(Er, "__esModule", {
    value: !0
  });
  Er.Disposable = void 0;
  var Tr;
  (function(e) {
    function r(n) {
      return {
        dispose: n
      };
    }
    e.create = r;
  })(Tr || (Er.Disposable = Tr = {}));
});

var de = C(function(kr) {
  Object.defineProperty(kr, "__esModule", {
    value: !0
  });
  var gt;
  function yt() {
    if (gt === void 0) throw Error("No runtime abstraction layer installed");
    return gt;
  }
  (function(e) {
    function r(n) {
      if (n === void 0) throw Error("No runtime abstraction layer provided");
      gt = n;
    }
    e.install = r;
  })(yt || (yt = {}));
  kr.default = yt;
});

var Se = C(function(Or) {
  Object.defineProperty(Or, "__esModule", {
    value: !0
  });
  Or.Emitter = Or.Event = void 0;
  var zi = de(), Lr;
  (function(e) {
    let r = {
      dispose() {}
    };
    e.None = function() {
      return r;
    };
  })(Lr || (Or.Event = Lr = {}));
  class Nr {
    add(e, r = null, n) {
      if (!this._callbacks) this._callbacks = [], this._contexts = [];
      if (this._callbacks.push(e), this._contexts.push(r), Array.isArray(n)) n.push({
        dispose: () => this.remove(e, r)
      });
    }
    remove(e, r = null) {
      if (!this._callbacks) return;
      let n = !1;
      for (let s = 0, c = this._callbacks.length; s < c; s++) if (this._callbacks[s] === e) if (this._contexts[s] === r) {
        this._callbacks.splice(s, 1), this._contexts.splice(s, 1);
        return;
      } else n = !0;
      if (n) throw Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...e) {
      if (!this._callbacks) return [];
      let r = [], n = this._callbacks.slice(0), s = this._contexts.slice(0);
      for (let c = 0, h = n.length; c < h; c++) try {
        r.push(n[c].apply(s[c], e));
      } catch (P) {
        (0, zi.default)().console.error(P);
      }
      return r;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }
  class He {
    constructor(e) {
      this._options = e;
    }
    get event() {
      if (!this._event) this._event = (e, r, n) => {
        if (!this._callbacks) this._callbacks = new Nr;
        if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) this._options.onFirstListenerAdd(this);
        this._callbacks.add(e, r);
        let s = {
          dispose: () => {
            if (!this._callbacks) return;
            if (this._callbacks.remove(e, r), s.dispose = He._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) this._options.onLastListenerRemove(this);
          }
        };
        if (Array.isArray(n)) n.push(s);
        return s;
      };
      return this._event;
    }
    fire(e) {
      if (this._callbacks) this._callbacks.invoke.call(this._callbacks, e);
    }
    dispose() {
      if (this._callbacks) this._callbacks.dispose(), this._callbacks = void 0;
    }
  }
  Or.Emitter = He;
  He._noop = function() {};
});

var Ve = C(function(qr) {
  Object.defineProperty(qr, "__esModule", {
    value: !0
  });
  qr.CancellationTokenSource = qr.CancellationToken = void 0;
  var Fi = de(), jr = _e(), Re = Se(), Ue;
  (function(e) {
    e.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: Re.Event.None
    }), e.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: Re.Event.None
    });
    function r(n) {
      let s = n;
      return s && (s === e.None || s === e.Cancelled || jr.boolean(s.isCancellationRequested) && !!s.onCancellationRequested);
    }
    e.is = r;
  })(Ue || (qr.CancellationToken = Ue = {}));
  var Hi = Object.freeze(function(e, r) {
    let n = (0, Fi.default)().timer.setTimeout(e.bind(r), 0);
    return {
      dispose() {
        n.dispose();
      }
    };
  });
  class bt {
    constructor() {
      this._isCancelled = !1;
    }
    cancel() {
      if (!this._isCancelled) {
        if (this._isCancelled = !0, this._emitter) this._emitter.fire(void 0), this.dispose();
      }
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      if (this._isCancelled) return Hi;
      if (!this._emitter) this._emitter = new Re.Emitter;
      return this._emitter.event;
    }
    dispose() {
      if (this._emitter) this._emitter.dispose(), this._emitter = void 0;
    }
  }
  class $r {
    get token() {
      if (!this._token) this._token = new bt;
      return this._token;
    }
    cancel() {
      if (!this._token) this._token = Ue.Cancelled; else this._token.cancel();
    }
    dispose() {
      if (!this._token) this._token = Ue.None; else if (this._token instanceof bt) this._token.dispose();
    }
  }
  qr.CancellationTokenSource = $r;
});

var Ur = C(function(Fr) {
  Object.defineProperty(Fr, "__esModule", {
    value: !0
  });
  Fr.SharedArrayReceiverStrategy = Fr.SharedArraySenderStrategy = void 0;
  var Dr = Ve(), De;
  (function(e) {
    e.Continue = 0, e.Cancelled = 1;
  })(De || (De = {}));
  class Br {
    constructor() {
      this.buffers = new Map;
    }
    enableCancellation(e) {
      if (e.id === null) return;
      let r = new SharedArrayBuffer(4), n = new Int32Array(r, 0, 1);
      n[0] = De.Continue, this.buffers.set(e.id, r), e.$cancellationData = r;
    }
    async sendCancellation(e, r) {
      let n = this.buffers.get(r);
      if (n === void 0) return;
      let s = new Int32Array(n, 0, 1);
      Atomics.store(s, 0, De.Cancelled);
    }
    cleanup(e) {
      this.buffers.delete(e);
    }
    dispose() {
      this.buffers.clear();
    }
  }
  Fr.SharedArraySenderStrategy = Br;
  class Ar {
    constructor(e) {
      this.data = new Int32Array(e, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === De.Cancelled;
    }
    get onCancellationRequested() {
      throw Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
    }
  }
  class zr {
    constructor(e) {
      this.token = new Ar(e);
    }
    cancel() {}
    dispose() {}
  }
  class Wr {
    constructor() {
      this.kind = "request";
    }
    createCancellationTokenSource(e) {
      let r = e.$cancellationData;
      if (r === void 0) return new Dr.CancellationTokenSource;
      return new zr(r);
    }
  }
  Fr.SharedArrayReceiverStrategy = Wr;
});

var vt = C(function(Jr) {
  Object.defineProperty(Jr, "__esModule", {
    value: !0
  });
  Jr.Semaphore = void 0;
  var Ji = de();
  class Vr {
    constructor(e = 1) {
      if (e <= 0) throw Error("Capacity must be greater than 0");
      this._capacity = e, this._active = 0, this._waiting = [];
    }
    lock(e) {
      return new Promise((r, n) => {
        this._waiting.push({
          thunk: e,
          resolve: r,
          reject: n
        }), this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      (0, Ji.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      let e = this._waiting.shift();
      if (this._active++, this._active > this._capacity) throw Error("To many thunks active");
      try {
        let r = e.thunk();
        if (r instanceof Promise) r.then(n => {
          this._active--, e.resolve(n), this.runNext();
        }, n => {
          this._active--, e.reject(n), this.runNext();
        }); else this._active--, e.resolve(r), this.runNext();
      } catch (r) {
        this._active--, e.reject(r), this.runNext();
      }
    }
  }
  Jr.Semaphore = Vr;
});

var en = C(function(Xr) {
  Object.defineProperty(Xr, "__esModule", {
    value: !0
  });
  Xr.ReadableStreamMessageReader = Xr.AbstractMessageReader = Xr.MessageReader = void 0;
  var wt = de(), ee = _e(), Pe = Se(), Gr = vt(), Qr;
  (function(e) {
    function r(n) {
      let s = n;
      return s && ee.func(s.listen) && ee.func(s.dispose) && ee.func(s.onError) && ee.func(s.onClose) && ee.func(s.onPartialMessage);
    }
    e.is = r;
  })(Qr || (Xr.MessageReader = Qr = {}));
  class St {
    constructor() {
      this.errorEmitter = new Pe.Emitter, this.closeEmitter = new Pe.Emitter, this.partialMessageEmitter = new Pe.Emitter;
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e) {
      this.errorEmitter.fire(this.asError(e));
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    get onPartialMessage() {
      return this.partialMessageEmitter.event;
    }
    firePartialMessage(e) {
      this.partialMessageEmitter.fire(e);
    }
    asError(e) {
      if (e instanceof Error) return e; else return Error(`Reader received error. Reason: ${ee.string(e.message) ? e.message : "unknown"}`);
    }
  }
  Xr.AbstractMessageReader = St;
  var _t;
  (function(e) {
    function r(n) {
      let s, c, h, P = new Map, w, j = new Map;
      if (n === void 0 || typeof n === "string") s = n ?? "utf-8"; else {
        if (s = n.charset ?? "utf-8", n.contentDecoder !== void 0) h = n.contentDecoder, 
        P.set(h.name, h);
        if (n.contentDecoders !== void 0) for (let I of n.contentDecoders) P.set(I.name, I);
        if (n.contentTypeDecoder !== void 0) w = n.contentTypeDecoder, j.set(w.name, w);
        if (n.contentTypeDecoders !== void 0) for (let I of n.contentTypeDecoders) j.set(I.name, I);
      }
      if (w === void 0) w = (0, wt.default)().applicationJson.decoder, j.set(w.name, w);
      return {
        charset: s,
        contentDecoder: h,
        contentDecoders: P,
        contentTypeDecoder: w,
        contentTypeDecoders: j
      };
    }
    e.fromOptions = r;
  })(_t || (_t = {}));
  class Yr extends St {
    constructor(e, r) {
      super();
      this.readable = e, this.options = _t.fromOptions(r), this.buffer = (0, wt.default)().messageBuffer.create(this.options.charset), 
      this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, 
      this.readSemaphore = new Gr.Semaphore(1);
    }
    set partialMessageTimeout(e) {
      this._partialMessageTimeout = e;
    }
    get partialMessageTimeout() {
      return this._partialMessageTimeout;
    }
    listen(e) {
      this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, 
      this.callback = e;
      let r = this.readable.onData(n => {
        this.onData(n);
      });
      return this.readable.onError(n => this.fireError(n)), this.readable.onClose(() => this.fireClose()), 
      r;
    }
    onData(e) {
      try {
        this.buffer.append(e);
        while (!0) {
          if (this.nextMessageLength === -1) {
            let n = this.buffer.tryReadHeaders(!0);
            if (!n) return;
            let s = n.get("content-length");
            if (!s) {
              this.fireError(Error(`Header must provide a Content-Length property.\n${JSON.stringify(Object.fromEntries(n))}`));
              return;
            }
            let c = parseInt(s);
            if (isNaN(c)) {
              this.fireError(Error(`Content-Length value must be a number. Got ${s}`));
              return;
            }
            this.nextMessageLength = c;
          }
          let r = this.buffer.tryReadBody(this.nextMessageLength);
          if (r === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
            let n = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(r) : r, s = await this.options.contentTypeDecoder.decode(n, this.options);
            this.callback(s);
          }).catch(n => {
            this.fireError(n);
          });
        }
      } catch (r) {
        this.fireError(r);
      }
    }
    clearPartialMessageTimer() {
      if (this.partialMessageTimer) this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0;
    }
    setPartialMessageTimer() {
      if (this.clearPartialMessageTimer(), this._partialMessageTimeout <= 0) return;
      this.partialMessageTimer = (0, wt.default)().timer.setTimeout((e, r) => {
        if (this.partialMessageTimer = void 0, e === this.messageToken) this.firePartialMessage({
          messageToken: e,
          waitingTime: r
        }), this.setPartialMessageTimer();
      }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
    }
  }
  Xr.ReadableStreamMessageReader = Yr;
});

var un = C(function(an) {
  Object.defineProperty(an, "__esModule", {
    value: !0
  });
  an.WriteableStreamMessageWriter = an.AbstractMessageWriter = an.MessageWriter = void 0;
  var tn = de(), ie = _e(), sn = vt(), Je = Se(), Gi = "Content-Length: ", rn = `\r\n`, nn;
  (function(e) {
    function r(n) {
      let s = n;
      return s && ie.func(s.dispose) && ie.func(s.onClose) && ie.func(s.onError) && ie.func(s.write);
    }
    e.is = r;
  })(nn || (an.MessageWriter = nn = {}));
  class Pt {
    constructor() {
      this.errorEmitter = new Je.Emitter, this.closeEmitter = new Je.Emitter;
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e, r, n) {
      this.errorEmitter.fire([ this.asError(e), r, n ]);
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    asError(e) {
      if (e instanceof Error) return e; else return Error(`Writer received error. Reason: ${ie.string(e.message) ? e.message : "unknown"}`);
    }
  }
  an.AbstractMessageWriter = Pt;
  var Rt;
  (function(e) {
    function r(n) {
      if (n === void 0 || typeof n === "string") return {
        charset: n ?? "utf-8",
        contentTypeEncoder: (0, tn.default)().applicationJson.encoder
      }; else return {
        charset: n.charset ?? "utf-8",
        contentEncoder: n.contentEncoder,
        contentTypeEncoder: n.contentTypeEncoder ?? (0, tn.default)().applicationJson.encoder
      };
    }
    e.fromOptions = r;
  })(Rt || (Rt = {}));
  class on extends Pt {
    constructor(e, r) {
      super();
      this.writable = e, this.options = Rt.fromOptions(r), this.errorCount = 0, this.writeSemaphore = new sn.Semaphore(1), 
      this.writable.onError(n => this.fireError(n)), this.writable.onClose(() => this.fireClose());
    }
    async write(e) {
      return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(e, this.options).then(n => {
        if (this.options.contentEncoder !== void 0) return this.options.contentEncoder.encode(n); else return n;
      }).then(n => {
        let s = [];
        return s.push(Gi, n.byteLength.toString(), rn), s.push(rn), this.doWrite(e, s, n);
      }, n => {
        throw this.fireError(n), n;
      }));
    }
    async doWrite(e, r, n) {
      try {
        return await this.writable.write(r.join(""), "ascii"), this.writable.write(n);
      } catch (s) {
        return this.handleError(s, e), Promise.reject(s);
      }
    }
    handleError(e, r) {
      this.errorCount++, this.fireError(e, r, this.errorCount);
    }
    end() {
      this.writable.end();
    }
  }
  an.WriteableStreamMessageWriter = on;
});

var hn = C(function(ln) {
  Object.defineProperty(ln, "__esModule", {
    value: !0
  });
  ln.AbstractMessageBuffer = void 0;
  var Zi = 13, es = 10, ts = `\r\n`;
  class dn {
    constructor(e = "utf-8") {
      this._encoding = e, this._chunks = [], this._totalLength = 0;
    }
    get encoding() {
      return this._encoding;
    }
    append(e) {
      let r = typeof e === "string" ? this.fromString(e, this._encoding) : e;
      this._chunks.push(r), this._totalLength += r.byteLength;
    }
    tryReadHeaders(e = !1) {
      if (this._chunks.length === 0) return;
      let r = 0, n = 0, s = 0, c = 0;
      e: while (n < this._chunks.length) {
        let j = this._chunks[n];
        s = 0;
        t: while (s < j.length) {
          switch (j[s]) {
           case Zi:
            switch (r) {
             case 0:
              r = 1;
              break;

             case 2:
              r = 3;
              break;

             default:
              r = 0;
            }
            break;

           case es:
            switch (r) {
             case 1:
              r = 2;
              break;

             case 3:
              r = 4, s++;
              break e;

             default:
              r = 0;
            }
            break;

           default:
            r = 0;
          }
          s++;
        }
        c += j.byteLength, n++;
      }
      if (r !== 4) return;
      let h = this._read(c + s), P = new Map, w = this.toString(h, "ascii").split(ts);
      if (w.length < 2) return P;
      for (let j = 0; j < w.length - 2; j++) {
        let I = w[j], X = I.indexOf(":");
        if (X === -1) throw Error(`Message header must separate key and value using ':'\n${I}`);
        let J = I.substr(0, X), oe = I.substr(X + 1).trim();
        P.set(e ? J.toLowerCase() : J, oe);
      }
      return P;
    }
    tryReadBody(e) {
      if (this._totalLength < e) return;
      return this._read(e);
    }
    get numberOfBytes() {
      return this._totalLength;
    }
    _read(e) {
      if (e === 0) return this.emptyBuffer();
      if (e > this._totalLength) throw Error("Cannot read so many bytes!");
      if (this._chunks[0].byteLength === e) {
        let c = this._chunks[0];
        return this._chunks.shift(), this._totalLength -= e, this.asNative(c);
      }
      if (this._chunks[0].byteLength > e) {
        let c = this._chunks[0], h = this.asNative(c, e);
        return this._chunks[0] = c.slice(e), this._totalLength -= e, h;
      }
      let r = this.allocNative(e), n = 0, s = 0;
      while (e > 0) {
        let c = this._chunks[s];
        if (c.byteLength > e) {
          let h = c.slice(0, e);
          r.set(h, n), n += e, this._chunks[s] = c.slice(e), this._totalLength -= e, e -= e;
        } else r.set(c, n), n += c.byteLength, this._chunks.shift(), this._totalLength -= c.byteLength, 
        e -= c.byteLength;
      }
      return r;
    }
  }
  ln.AbstractMessageBuffer = dn;
});

var Rn = C(function(bn) {
  Object.defineProperty(bn, "__esModule", {
    value: !0
  });
  bn.createMessageConnection = bn.ConnectionOptions = bn.MessageStrategy = bn.CancellationStrategy = bn.CancellationSenderStrategy = bn.CancellationReceiverStrategy = bn.RequestCancellationReceiverStrategy = bn.IdCancellationReceiverStrategy = bn.ConnectionStrategy = bn.ConnectionError = bn.ConnectionErrors = bn.LogTraceNotification = bn.SetTraceNotification = bn.TraceFormat = bn.TraceValues = bn.Trace = bn.NullLogger = bn.ProgressType = bn.ProgressToken = void 0;
  var pn = de(), m = _e(), a = ht(), Ke = mt(), se = Se(), Ee = Ve(), ze;
  (function(e) {
    e.type = new a.NotificationType("$/cancelRequest");
  })(ze || (ze = {}));
  var Tt;
  (function(e) {
    function r(n) {
      return typeof n === "string" || typeof n === "number";
    }
    e.is = r;
  })(Tt || (bn.ProgressToken = Tt = {}));
  var Be;
  (function(e) {
    e.type = new a.NotificationType("$/progress");
  })(Be || (Be = {}));
  class yn {
    constructor() {}
  }
  bn.ProgressType = yn;
  var Et;
  (function(e) {
    function r(n) {
      return m.func(n);
    }
    e.is = r;
  })(Et || (Et = {}));
  bn.NullLogger = Object.freeze({
    error: () => {},
    warn: () => {},
    info: () => {},
    log: () => {}
  });
  var E;
  (function(e) {
    e[e.Off = 0] = "Off", e[e.Messages = 1] = "Messages", e[e.Compact = 2] = "Compact", 
    e[e.Verbose = 3] = "Verbose";
  })(E || (bn.Trace = E = {}));
  var mn;
  (function(e) {
    e.Off = "off", e.Messages = "messages", e.Compact = "compact", e.Verbose = "verbose";
  })(mn || (bn.TraceValues = mn = {}));
  (function(e) {
    function r(s) {
      if (!m.string(s)) return e.Off;
      switch (s = s.toLowerCase(), s) {
       case "off":
        return e.Off;

       case "messages":
        return e.Messages;

       case "compact":
        return e.Compact;

       case "verbose":
        return e.Verbose;

       default:
        return e.Off;
      }
    }
    e.fromString = r;
    function n(s) {
      switch (s) {
       case e.Off:
        return "off";

       case e.Messages:
        return "messages";

       case e.Compact:
        return "compact";

       case e.Verbose:
        return "verbose";

       default:
        return "off";
      }
    }
    e.toString = n;
  })(E || (bn.Trace = E = {}));
  var Y;
  (function(e) {
    e.Text = "text", e.JSON = "json";
  })(Y || (bn.TraceFormat = Y = {}));
  (function(e) {
    function r(n) {
      if (!m.string(n)) return e.Text;
      if (n = n.toLowerCase(), n === "json") return e.JSON; else return e.Text;
    }
    e.fromString = r;
  })(Y || (bn.TraceFormat = Y = {}));
  var Ct;
  (function(e) {
    e.type = new a.NotificationType("$/setTrace");
  })(Ct || (bn.SetTraceNotification = Ct = {}));
  var Qe;
  (function(e) {
    e.type = new a.NotificationType("$/logTrace");
  })(Qe || (bn.LogTraceNotification = Qe = {}));
  var Ae;
  (function(e) {
    e[e.Closed = 1] = "Closed", e[e.Disposed = 2] = "Disposed", e[e.AlreadyListening = 3] = "AlreadyListening";
  })(Ae || (bn.ConnectionErrors = Ae = {}));
  class Te extends Error {
    constructor(e, r) {
      super(r);
      this.code = e, Object.setPrototypeOf(this, Te.prototype);
    }
  }
  bn.ConnectionError = Te;
  var xt;
  (function(e) {
    function r(n) {
      let s = n;
      return s && m.func(s.cancelUndispatched);
    }
    e.is = r;
  })(xt || (bn.ConnectionStrategy = xt = {}));
  var Ge;
  (function(e) {
    function r(n) {
      let s = n;
      return s && (s.kind === void 0 || s.kind === "id") && m.func(s.createCancellationTokenSource) && (s.dispose === void 0 || m.func(s.dispose));
    }
    e.is = r;
  })(Ge || (bn.IdCancellationReceiverStrategy = Ge = {}));
  var kt;
  (function(e) {
    function r(n) {
      let s = n;
      return s && s.kind === "request" && m.func(s.createCancellationTokenSource) && (s.dispose === void 0 || m.func(s.dispose));
    }
    e.is = r;
  })(kt || (bn.RequestCancellationReceiverStrategy = kt = {}));
  var Ye;
  (function(e) {
    e.Message = Object.freeze({
      createCancellationTokenSource(n) {
        return new Ee.CancellationTokenSource;
      }
    });
    function r(n) {
      return Ge.is(n) || kt.is(n);
    }
    e.is = r;
  })(Ye || (bn.CancellationReceiverStrategy = Ye = {}));
  var Xe;
  (function(e) {
    e.Message = Object.freeze({
      sendCancellation(n, s) {
        return n.sendNotification(ze.type, {
          id: s
        });
      },
      cleanup(n) {}
    });
    function r(n) {
      let s = n;
      return s && m.func(s.sendCancellation) && m.func(s.cleanup);
    }
    e.is = r;
  })(Xe || (bn.CancellationSenderStrategy = Xe = {}));
  var Ze;
  (function(e) {
    e.Message = Object.freeze({
      receiver: Ye.Message,
      sender: Xe.Message
    });
    function r(n) {
      let s = n;
      return s && Ye.is(s.receiver) && Xe.is(s.sender);
    }
    e.is = r;
  })(Ze || (bn.CancellationStrategy = Ze = {}));
  var et;
  (function(e) {
    function r(n) {
      let s = n;
      return s && m.func(s.handleMessage);
    }
    e.is = r;
  })(et || (bn.MessageStrategy = et = {}));
  var gn;
  (function(e) {
    function r(n) {
      let s = n;
      return s && (Ze.is(s.cancellationStrategy) || xt.is(s.connectionStrategy) || et.is(s.messageStrategy));
    }
    e.is = r;
  })(gn || (bn.ConnectionOptions = gn = {}));
  var te;
  (function(e) {
    e[e.New = 1] = "New", e[e.Listening = 2] = "Listening", e[e.Closed = 3] = "Closed", 
    e[e.Disposed = 4] = "Disposed";
  })(te || (te = {}));
  function rs(e, r, n, s) {
    let c = n !== void 0 ? n : bn.NullLogger, h = 0, P = 0, w = 0, j = "2.0", I = void 0, X = new Map, J = void 0, oe = new Map, fe = new Map, re, Q = new Ke.LinkedMap, Z = new Map, y = new Set, b = new Map, g = E.Off, N = Y.Text, k, _ = te.New, ne = new se.Emitter, ce = new se.Emitter, he = new se.Emitter, S = new se.Emitter, F = new se.Emitter, G = s && s.cancellationStrategy ? s.cancellationStrategy : Ze.Message;
    function pe(i) {
      if (i === null) throw Error("Can't send requests with id null since the response can't be correlated.");
      return "req-" + i.toString();
    }
    function me(i) {
      if (i === null) return "res-unknown-" + (++w).toString(); else return "res-" + i.toString();
    }
    function ge() {
      return "not-" + (++P).toString();
    }
    function We(i, o) {
      if (a.Message.isRequest(o)) i.set(pe(o.id), o); else if (a.Message.isResponse(o)) i.set(me(o.id), o); else i.set(ge(), o);
    }
    function $e(i) {
      return;
    }
    function It() {
      return _ === te.Listening;
    }
    function Dt() {
      return _ === te.Closed;
    }
    function ye() {
      return _ === te.Disposed;
    }
    function Bt() {
      if (_ === te.New || _ === te.Listening) _ = te.Closed, ce.fire(void 0);
    }
    function An(i) {
      ne.fire([ i, void 0, void 0 ]);
    }
    function zn(i) {
      ne.fire(i);
    }
    e.onClose(Bt), e.onError(An), r.onClose(Bt), r.onError(zn);
    function At() {
      if (re || Q.size === 0) return;
      re = (0, pn.default)().timer.setImmediate(() => {
        re = void 0, Wn();
      });
    }
    function zt(i) {
      if (a.Message.isRequest(i)) Hn(i); else if (a.Message.isNotification(i)) Vn(i); else if (a.Message.isResponse(i)) Un(i); else Jn(i);
    }
    function Wn() {
      if (Q.size === 0) return;
      let i = Q.shift();
      try {
        let o = s?.messageStrategy;
        if (et.is(o)) o.handleMessage(i, zt); else zt(i);
      } finally {
        At();
      }
    }
    let Fn = i => {
      try {
        if (a.Message.isNotification(i) && i.method === ze.type.method) {
          let o = i.params.id, u = pe(o), f = Q.get(u);
          if (a.Message.isRequest(f)) {
            let L = s?.connectionStrategy, B = L && L.cancelUndispatched ? L.cancelUndispatched(f, $e) : $e(f);
            if (B && (B.error !== void 0 || B.result !== void 0)) {
              Q.delete(u), b.delete(o), B.id = f.id, Fe(B, i.method, Date.now()), r.write(B).catch(() => c.error("Sending response for canceled message failed."));
              return;
            }
          }
          let M = b.get(o);
          if (M !== void 0) {
            M.cancel(), ut(i);
            return;
          } else y.add(o);
        }
        We(Q, i);
      } finally {
        At();
      }
    };
    function Hn(i) {
      if (ye()) return;
      function o(T, D, x) {
        let z = {
          jsonrpc: j,
          id: i.id
        };
        if (T instanceof a.ResponseError) z.error = T.toJson(); else z.result = T === void 0 ? null : T;
        Fe(z, D, x), r.write(z).catch(() => c.error("Sending response failed."));
      }
      function u(T, D, x) {
        let z = {
          jsonrpc: j,
          id: i.id,
          error: T.toJson()
        };
        Fe(z, D, x), r.write(z).catch(() => c.error("Sending response failed."));
      }
      function f(T, D, x) {
        if (T === void 0) T = null;
        let z = {
          jsonrpc: j,
          id: i.id,
          result: T
        };
        Fe(z, D, x), r.write(z).catch(() => c.error("Sending response failed."));
      }
      Gn(i);
      let M = X.get(i.method), L, B;
      if (M) L = M.type, B = M.handler;
      let A = Date.now();
      if (B || I) {
        let T = i.id ?? String(Date.now()), D = Ge.is(G.receiver) ? G.receiver.createCancellationTokenSource(T) : G.receiver.createCancellationTokenSource(i);
        if (i.id !== null && y.has(i.id)) D.cancel();
        if (i.id !== null) b.set(T, D);
        try {
          let x;
          if (B) if (i.params === void 0) {
            if (L !== void 0 && L.numberOfParams !== 0) {
              u(new a.ResponseError(a.ErrorCodes.InvalidParams, `Request ${i.method} defines ${L.numberOfParams} params but received none.`), i.method, A);
              return;
            }
            x = B(D.token);
          } else if (Array.isArray(i.params)) {
            if (L !== void 0 && L.parameterStructures === a.ParameterStructures.byName) {
              u(new a.ResponseError(a.ErrorCodes.InvalidParams, `Request ${i.method} defines parameters by name but received parameters by position`), i.method, A);
              return;
            }
            x = B(...i.params, D.token);
          } else {
            if (L !== void 0 && L.parameterStructures === a.ParameterStructures.byPosition) {
              u(new a.ResponseError(a.ErrorCodes.InvalidParams, `Request ${i.method} defines parameters by position but received parameters by name`), i.method, A);
              return;
            }
            x = B(i.params, D.token);
          } else if (I) x = I(i.method, i.params, D.token);
          let z = x;
          if (!x) b.delete(T), f(x, i.method, A); else if (z.then) z.then(V => {
            b.delete(T), o(V, i.method, A);
          }, V => {
            if (b.delete(T), V instanceof a.ResponseError) u(V, i.method, A); else if (V && m.string(V.message)) u(new a.ResponseError(a.ErrorCodes.InternalError, `Request ${i.method} failed with message: ${V.message}`), i.method, A); else u(new a.ResponseError(a.ErrorCodes.InternalError, `Request ${i.method} failed unexpectedly without providing any details.`), i.method, A);
          }); else b.delete(T), o(x, i.method, A);
        } catch (x) {
          if (b.delete(T), x instanceof a.ResponseError) o(x, i.method, A); else if (x && m.string(x.message)) u(new a.ResponseError(a.ErrorCodes.InternalError, `Request ${i.method} failed with message: ${x.message}`), i.method, A); else u(new a.ResponseError(a.ErrorCodes.InternalError, `Request ${i.method} failed unexpectedly without providing any details.`), i.method, A);
        }
      } else u(new a.ResponseError(a.ErrorCodes.MethodNotFound, `Unhandled method ${i.method}`), i.method, A);
    }
    function Un(i) {
      if (ye()) return;
      if (i.id === null) if (i.error) c.error(`Received response message without id: Error is: \n${JSON.stringify(i.error, void 0, 4)}`); else c.error("Received response message without id. No further error information provided."); else {
        let o = i.id, u = Z.get(o);
        if (Yn(i, u), u !== void 0) {
          Z.delete(o);
          try {
            if (i.error) {
              let f = i.error;
              u.reject(new a.ResponseError(f.code, f.message, f.data));
            } else if (i.result !== void 0) u.resolve(i.result); else throw Error("Should never happen.");
          } catch (f) {
            if (f.message) c.error(`Response handler '${u.method}' failed with message: ${f.message}`); else c.error(`Response handler '${u.method}' failed unexpectedly.`);
          }
        }
      }
    }
    function Vn(i) {
      if (ye()) return;
      let o = void 0, u;
      if (i.method === ze.type.method) {
        let f = i.params.id;
        y.delete(f), ut(i);
        return;
      } else {
        let f = oe.get(i.method);
        if (f) u = f.handler, o = f.type;
      }
      if (u || J) try {
        if (ut(i), u) if (i.params === void 0) {
          if (o !== void 0) {
            if (o.numberOfParams !== 0 && o.parameterStructures !== a.ParameterStructures.byName) c.error(`Notification ${i.method} defines ${o.numberOfParams} params but received none.`);
          }
          u();
        } else if (Array.isArray(i.params)) {
          let f = i.params;
          if (i.method === Be.type.method && f.length === 2 && Tt.is(f[0])) u({
            token: f[0],
            value: f[1]
          }); else {
            if (o !== void 0) {
              if (o.parameterStructures === a.ParameterStructures.byName) c.error(`Notification ${i.method} defines parameters by name but received parameters by position`);
              if (o.numberOfParams !== i.params.length) c.error(`Notification ${i.method} defines ${o.numberOfParams} params but received ${f.length} arguments`);
            }
            u(...f);
          }
        } else {
          if (o !== void 0 && o.parameterStructures === a.ParameterStructures.byPosition) c.error(`Notification ${i.method} defines parameters by position but received parameters by name`);
          u(i.params);
        } else if (J) J(i.method, i.params);
      } catch (f) {
        if (f.message) c.error(`Notification handler '${i.method}' failed with message: ${f.message}`); else c.error(`Notification handler '${i.method}' failed unexpectedly.`);
      } else he.fire(i);
    }
    function Jn(i) {
      if (!i) {
        c.error("Received empty message.");
        return;
      }
      c.error(`Received message which is neither a response nor a notification message:\n${JSON.stringify(i, null, 4)}`);
      let o = i;
      if (m.string(o.id) || m.number(o.id)) {
        let u = o.id, f = Z.get(u);
        if (f) f.reject(Error("The received response has neither a result nor an error property."));
      }
    }
    function ue(i) {
      if (i === void 0 || i === null) return;
      switch (g) {
       case E.Verbose:
        return JSON.stringify(i, null, 4);

       case E.Compact:
        return JSON.stringify(i);

       default:
        return;
      }
    }
    function Kn(i) {
      if (g === E.Off || !k) return;
      if (N === Y.Text) {
        let o = void 0;
        if ((g === E.Verbose || g === E.Compact) && i.params) o = `Params: ${ue(i.params)}\n\n`;
        k.log(`Sending request '${i.method} - (${i.id})'.`, o);
      } else be("send-request", i);
    }
    function Qn(i) {
      if (g === E.Off || !k) return;
      if (N === Y.Text) {
        let o = void 0;
        if (g === E.Verbose || g === E.Compact) if (i.params) o = `Params: ${ue(i.params)}\n\n`; else o = `No parameters provided.\n\n`;
        k.log(`Sending notification '${i.method}'.`, o);
      } else be("send-notification", i);
    }
    function Fe(i, o, u) {
      if (g === E.Off || !k) return;
      if (N === Y.Text) {
        let f = void 0;
        if (g === E.Verbose || g === E.Compact) {
          if (i.error && i.error.data) f = `Error data: ${ue(i.error.data)}\n\n`; else if (i.result) f = `Result: ${ue(i.result)}\n\n`; else if (i.error === void 0) f = `No result returned.\n\n`;
        }
        k.log(`Sending response '${o} - (${i.id})'. Processing request took ${Date.now() - u}ms`, f);
      } else be("send-response", i);
    }
    function Gn(i) {
      if (g === E.Off || !k) return;
      if (N === Y.Text) {
        let o = void 0;
        if ((g === E.Verbose || g === E.Compact) && i.params) o = `Params: ${ue(i.params)}\n\n`;
        k.log(`Received request '${i.method} - (${i.id})'.`, o);
      } else be("receive-request", i);
    }
    function ut(i) {
      if (g === E.Off || !k || i.method === Qe.type.method) return;
      if (N === Y.Text) {
        let o = void 0;
        if (g === E.Verbose || g === E.Compact) if (i.params) o = `Params: ${ue(i.params)}\n\n`; else o = `No parameters provided.\n\n`;
        k.log(`Received notification '${i.method}'.`, o);
      } else be("receive-notification", i);
    }
    function Yn(i, o) {
      if (g === E.Off || !k) return;
      if (N === Y.Text) {
        let u = void 0;
        if (g === E.Verbose || g === E.Compact) {
          if (i.error && i.error.data) u = `Error data: ${ue(i.error.data)}\n\n`; else if (i.result) u = `Result: ${ue(i.result)}\n\n`; else if (i.error === void 0) u = `No result returned.\n\n`;
        }
        if (o) {
          let f = i.error ? ` Request failed: ${i.error.message} (${i.error.code}).` : "";
          k.log(`Received response '${o.method} - (${i.id})' in ${Date.now() - o.timerStart}ms.${f}`, u);
        } else k.log(`Received response ${i.id} without active response promise.`, u);
      } else be("receive-response", i);
    }
    function be(i, o) {
      if (!k || g === E.Off) return;
      let u = {
        isLSPMessage: !0,
        type: i,
        message: o,
        timestamp: Date.now()
      };
      k.log(u);
    }
    function qe() {
      if (Dt()) throw new Te(Ae.Closed, "Connection is closed.");
      if (ye()) throw new Te(Ae.Disposed, "Connection is disposed.");
    }
    function Xn() {
      if (It()) throw new Te(Ae.AlreadyListening, "Connection is already listening");
    }
    function Zn() {
      if (!It()) throw Error("Call listen() first.");
    }
    function Ie(i) {
      if (i === void 0) return null; else return i;
    }
    function Wt(i) {
      if (i === null) return; else return i;
    }
    function Ft(i) {
      return i !== void 0 && i !== null && !Array.isArray(i) && typeof i === "object";
    }
    function dt(i, o) {
      switch (i) {
       case a.ParameterStructures.auto:
        if (Ft(o)) return Wt(o); else return [ Ie(o) ];

       case a.ParameterStructures.byName:
        if (!Ft(o)) throw Error("Received parameters by name but param is not an object literal.");
        return Wt(o);

       case a.ParameterStructures.byPosition:
        return [ Ie(o) ];

       default:
        throw Error(`Unknown parameter structure ${i.toString()}`);
      }
    }
    function Ut(i, o) {
      let u, f = i.numberOfParams;
      switch (f) {
       case 0:
        u = void 0;
        break;

       case 1:
        u = dt(i.parameterStructures, o[0]);
        break;

       default:
        u = [];
        for (let M = 0; M < o.length && M < f; M++) u.push(Ie(o[M]));
        if (o.length < f) for (let M = o.length; M < f; M++) u.push(null);
        break;
      }
      return u;
    }
    let ve = {
      sendNotification: (i, ...o) => {
        qe();
        let u, f;
        if (m.string(i)) {
          u = i;
          let L = o[0], B = 0, A = a.ParameterStructures.auto;
          if (a.ParameterStructures.is(L)) B = 1, A = L;
          let T = o.length, D = T - B;
          switch (D) {
           case 0:
            f = void 0;
            break;

           case 1:
            f = dt(A, o[B]);
            break;

           default:
            if (A === a.ParameterStructures.byName) throw Error(`Received ${D} parameters for 'by Name' notification parameter structure.`);
            f = o.slice(B, T).map(x => Ie(x));
            break;
          }
        } else {
          let L = o;
          u = i.method, f = Ut(i, L);
        }
        let M = {
          jsonrpc: j,
          method: u,
          params: f
        };
        return Qn(M), r.write(M).catch(L => {
          throw c.error("Sending notification failed."), L;
        });
      },
      onNotification: (i, o) => {
        qe();
        let u;
        if (m.func(i)) J = i; else if (o) if (m.string(i)) u = i, oe.set(i, {
          type: void 0,
          handler: o
        }); else u = i.method, oe.set(i.method, {
          type: i,
          handler: o
        });
        return {
          dispose: () => {
            if (u !== void 0) oe.delete(u); else J = void 0;
          }
        };
      },
      onProgress: (i, o, u) => {
        if (fe.has(o)) throw Error(`Progress handler for token ${o} already registered`);
        return fe.set(o, u), {
          dispose: () => {
            fe.delete(o);
          }
        };
      },
      sendProgress: (i, o, u) => ve.sendNotification(Be.type, {
        token: o,
        value: u
      }),
      onUnhandledProgress: S.event,
      sendRequest: (i, ...o) => {
        qe(), Zn();
        let u, f, M = void 0;
        if (m.string(i)) {
          u = i;
          let T = o[0], D = o[o.length - 1], x = 0, z = a.ParameterStructures.auto;
          if (a.ParameterStructures.is(T)) x = 1, z = T;
          let V = o.length;
          if (Ee.CancellationToken.is(D)) V = V - 1, M = D;
          let ae = V - x;
          switch (ae) {
           case 0:
            f = void 0;
            break;

           case 1:
            f = dt(z, o[x]);
            break;

           default:
            if (z === a.ParameterStructures.byName) throw Error(`Received ${ae} parameters for 'by Name' request parameter structure.`);
            f = o.slice(x, V).map(ei => Ie(ei));
            break;
          }
        } else {
          let T = o;
          u = i.method, f = Ut(i, T);
          let D = i.numberOfParams;
          M = Ee.CancellationToken.is(T[D]) ? T[D] : void 0;
        }
        let L = h++, B;
        if (M) B = M.onCancellationRequested(() => {
          let T = G.sender.sendCancellation(ve, L);
          if (T === void 0) return c.log(`Received no promise from cancellation strategy when cancelling id ${L}`), 
          Promise.resolve(); else return T.catch(() => {
            c.log(`Sending cancellation messages for id ${L} failed`);
          });
        });
        let A = {
          jsonrpc: j,
          id: L,
          method: u,
          params: f
        };
        if (Kn(A), typeof G.sender.enableCancellation === "function") G.sender.enableCancellation(A);
        return new Promise(async (T, D) => {
          let x = ae => {
            T(ae), G.sender.cleanup(L), B?.dispose();
          }, z = ae => {
            D(ae), G.sender.cleanup(L), B?.dispose();
          }, V = {
            method: u,
            timerStart: Date.now(),
            resolve: x,
            reject: z
          };
          try {
            Z.set(L, V), await r.write(A);
          } catch (ae) {
            Z.delete(L), V.reject(new a.ResponseError(a.ErrorCodes.MessageWriteError, ae.message ? ae.message : "Unknown reason")), 
            c.error("Sending request failed.");
          }
        });
      },
      onRequest: (i, o) => {
        qe();
        let u = null;
        if (Et.is(i)) u = void 0, I = i; else if (m.string(i)) {
          if (u = null, o !== void 0) u = i, X.set(i, {
            handler: o,
            type: void 0
          });
        } else if (o !== void 0) u = i.method, X.set(i.method, {
          type: i,
          handler: o
        });
        return {
          dispose: () => {
            if (u === null) return;
            if (u !== void 0) X.delete(u); else I = void 0;
          }
        };
      },
      hasPendingResponse: () => Z.size > 0,
      trace: async (i, o, u) => {
        let f = !1, M = Y.Text;
        if (u !== void 0) if (m.boolean(u)) f = u; else f = u.sendNotification || !1, M = u.traceFormat || Y.Text;
        if (g = i, N = M, g === E.Off) k = void 0; else k = o;
        if (f && !Dt() && !ye()) await ve.sendNotification(Ct.type, {
          value: E.toString(i)
        });
      },
      onError: ne.event,
      onClose: ce.event,
      onUnhandledNotification: he.event,
      onDispose: F.event,
      end: () => {
        r.end();
      },
      dispose: () => {
        if (ye()) return;
        _ = te.Disposed, F.fire(void 0);
        let i = new a.ResponseError(a.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
        for (let o of Z.values()) o.reject(i);
        if (Z = new Map, b = new Map, y = new Set, Q = new Ke.LinkedMap, m.func(r.dispose)) r.dispose();
        if (m.func(e.dispose)) e.dispose();
      },
      listen: () => {
        qe(), Xn(), _ = te.Listening, e.listen(Fn);
      },
      inspect: () => {
        (0, pn.default)().console.log("inspect");
      }
    };
    return ve.onNotification(Qe.type, i => {
      if (g === E.Off || !k) return;
      let o = g === E.Verbose || g === E.Compact;
      k.log(i.message, o ? i.verbose : void 0);
    }), ve.onNotification(Be.type, i => {
      let o = fe.get(i.token);
      if (o) o(i.value); else S.fire(i);
    }), ve;
  }
  bn.createMessageConnection = rs;
});

var it = C(function(d) {
  Object.defineProperty(d, "__esModule", {
    value: !0
  });
  d.ProgressType = d.ProgressToken = d.createMessageConnection = d.NullLogger = d.ConnectionOptions = d.ConnectionStrategy = d.AbstractMessageBuffer = d.WriteableStreamMessageWriter = d.AbstractMessageWriter = d.MessageWriter = d.ReadableStreamMessageReader = d.AbstractMessageReader = d.MessageReader = d.SharedArrayReceiverStrategy = d.SharedArraySenderStrategy = d.CancellationToken = d.CancellationTokenSource = d.Emitter = d.Event = d.Disposable = d.LRUCache = d.Touch = d.LinkedMap = d.ParameterStructures = d.NotificationType9 = d.NotificationType8 = d.NotificationType7 = d.NotificationType6 = d.NotificationType5 = d.NotificationType4 = d.NotificationType3 = d.NotificationType2 = d.NotificationType1 = d.NotificationType0 = d.NotificationType = d.ErrorCodes = d.ResponseError = d.RequestType9 = d.RequestType8 = d.RequestType7 = d.RequestType6 = d.RequestType5 = d.RequestType4 = d.RequestType3 = d.RequestType2 = d.RequestType1 = d.RequestType0 = d.RequestType = d.Message = d.RAL = void 0;
  d.MessageStrategy = d.CancellationStrategy = d.CancellationSenderStrategy = d.CancellationReceiverStrategy = d.ConnectionError = d.ConnectionErrors = d.LogTraceNotification = d.SetTraceNotification = d.TraceFormat = d.TraceValues = d.Trace = void 0;
  var p = ht();
  Object.defineProperty(d, "Message", {
    enumerable: !0,
    get: function() {
      return p.Message;
    }
  });
  Object.defineProperty(d, "RequestType", {
    enumerable: !0,
    get: function() {
      return p.RequestType;
    }
  });
  Object.defineProperty(d, "RequestType0", {
    enumerable: !0,
    get: function() {
      return p.RequestType0;
    }
  });
  Object.defineProperty(d, "RequestType1", {
    enumerable: !0,
    get: function() {
      return p.RequestType1;
    }
  });
  Object.defineProperty(d, "RequestType2", {
    enumerable: !0,
    get: function() {
      return p.RequestType2;
    }
  });
  Object.defineProperty(d, "RequestType3", {
    enumerable: !0,
    get: function() {
      return p.RequestType3;
    }
  });
  Object.defineProperty(d, "RequestType4", {
    enumerable: !0,
    get: function() {
      return p.RequestType4;
    }
  });
  Object.defineProperty(d, "RequestType5", {
    enumerable: !0,
    get: function() {
      return p.RequestType5;
    }
  });
  Object.defineProperty(d, "RequestType6", {
    enumerable: !0,
    get: function() {
      return p.RequestType6;
    }
  });
  Object.defineProperty(d, "RequestType7", {
    enumerable: !0,
    get: function() {
      return p.RequestType7;
    }
  });
  Object.defineProperty(d, "RequestType8", {
    enumerable: !0,
    get: function() {
      return p.RequestType8;
    }
  });
  Object.defineProperty(d, "RequestType9", {
    enumerable: !0,
    get: function() {
      return p.RequestType9;
    }
  });
  Object.defineProperty(d, "ResponseError", {
    enumerable: !0,
    get: function() {
      return p.ResponseError;
    }
  });
  Object.defineProperty(d, "ErrorCodes", {
    enumerable: !0,
    get: function() {
      return p.ErrorCodes;
    }
  });
  Object.defineProperty(d, "NotificationType", {
    enumerable: !0,
    get: function() {
      return p.NotificationType;
    }
  });
  Object.defineProperty(d, "NotificationType0", {
    enumerable: !0,
    get: function() {
      return p.NotificationType0;
    }
  });
  Object.defineProperty(d, "NotificationType1", {
    enumerable: !0,
    get: function() {
      return p.NotificationType1;
    }
  });
  Object.defineProperty(d, "NotificationType2", {
    enumerable: !0,
    get: function() {
      return p.NotificationType2;
    }
  });
  Object.defineProperty(d, "NotificationType3", {
    enumerable: !0,
    get: function() {
      return p.NotificationType3;
    }
  });
  Object.defineProperty(d, "NotificationType4", {
    enumerable: !0,
    get: function() {
      return p.NotificationType4;
    }
  });
  Object.defineProperty(d, "NotificationType5", {
    enumerable: !0,
    get: function() {
      return p.NotificationType5;
    }
  });
  Object.defineProperty(d, "NotificationType6", {
    enumerable: !0,
    get: function() {
      return p.NotificationType6;
    }
  });
  Object.defineProperty(d, "NotificationType7", {
    enumerable: !0,
    get: function() {
      return p.NotificationType7;
    }
  });
  Object.defineProperty(d, "NotificationType8", {
    enumerable: !0,
    get: function() {
      return p.NotificationType8;
    }
  });
  Object.defineProperty(d, "NotificationType9", {
    enumerable: !0,
    get: function() {
      return p.NotificationType9;
    }
  });
  Object.defineProperty(d, "ParameterStructures", {
    enumerable: !0,
    get: function() {
      return p.ParameterStructures;
    }
  });
  var Ce = mt();
  Object.defineProperty(d, "LinkedMap", {
    enumerable: !0,
    get: function() {
      return Ce.LinkedMap;
    }
  });
  Object.defineProperty(d, "LRUCache", {
    enumerable: !0,
    get: function() {
      return Ce.LRUCache;
    }
  });
  Object.defineProperty(d, "Touch", {
    enumerable: !0,
    get: function() {
      return Ce.Touch;
    }
  });
  var Pn = xr();
  Object.defineProperty(d, "Disposable", {
    enumerable: !0,
    get: function() {
      return Pn.Disposable;
    }
  });
  var tt = Se();
  Object.defineProperty(d, "Event", {
    enumerable: !0,
    get: function() {
      return tt.Event;
    }
  });
  Object.defineProperty(d, "Emitter", {
    enumerable: !0,
    get: function() {
      return tt.Emitter;
    }
  });
  var rt = Ve();
  Object.defineProperty(d, "CancellationTokenSource", {
    enumerable: !0,
    get: function() {
      return rt.CancellationTokenSource;
    }
  });
  Object.defineProperty(d, "CancellationToken", {
    enumerable: !0,
    get: function() {
      return rt.CancellationToken;
    }
  });
  var nt = Ur();
  Object.defineProperty(d, "SharedArraySenderStrategy", {
    enumerable: !0,
    get: function() {
      return nt.SharedArraySenderStrategy;
    }
  });
  Object.defineProperty(d, "SharedArrayReceiverStrategy", {
    enumerable: !0,
    get: function() {
      return nt.SharedArrayReceiverStrategy;
    }
  });
  var xe = en();
  Object.defineProperty(d, "MessageReader", {
    enumerable: !0,
    get: function() {
      return xe.MessageReader;
    }
  });
  Object.defineProperty(d, "AbstractMessageReader", {
    enumerable: !0,
    get: function() {
      return xe.AbstractMessageReader;
    }
  });
  Object.defineProperty(d, "ReadableStreamMessageReader", {
    enumerable: !0,
    get: function() {
      return xe.ReadableStreamMessageReader;
    }
  });
  var ke = un();
  Object.defineProperty(d, "MessageWriter", {
    enumerable: !0,
    get: function() {
      return ke.MessageWriter;
    }
  });
  Object.defineProperty(d, "AbstractMessageWriter", {
    enumerable: !0,
    get: function() {
      return ke.AbstractMessageWriter;
    }
  });
  Object.defineProperty(d, "WriteableStreamMessageWriter", {
    enumerable: !0,
    get: function() {
      return ke.WriteableStreamMessageWriter;
    }
  });
  var Tn = hn();
  Object.defineProperty(d, "AbstractMessageBuffer", {
    enumerable: !0,
    get: function() {
      return Tn.AbstractMessageBuffer;
    }
  });
  var R = Rn();
  Object.defineProperty(d, "ConnectionStrategy", {
    enumerable: !0,
    get: function() {
      return R.ConnectionStrategy;
    }
  });
  Object.defineProperty(d, "ConnectionOptions", {
    enumerable: !0,
    get: function() {
      return R.ConnectionOptions;
    }
  });
  Object.defineProperty(d, "NullLogger", {
    enumerable: !0,
    get: function() {
      return R.NullLogger;
    }
  });
  Object.defineProperty(d, "createMessageConnection", {
    enumerable: !0,
    get: function() {
      return R.createMessageConnection;
    }
  });
  Object.defineProperty(d, "ProgressToken", {
    enumerable: !0,
    get: function() {
      return R.ProgressToken;
    }
  });
  Object.defineProperty(d, "ProgressType", {
    enumerable: !0,
    get: function() {
      return R.ProgressType;
    }
  });
  Object.defineProperty(d, "Trace", {
    enumerable: !0,
    get: function() {
      return R.Trace;
    }
  });
  Object.defineProperty(d, "TraceValues", {
    enumerable: !0,
    get: function() {
      return R.TraceValues;
    }
  });
  Object.defineProperty(d, "TraceFormat", {
    enumerable: !0,
    get: function() {
      return R.TraceFormat;
    }
  });
  Object.defineProperty(d, "SetTraceNotification", {
    enumerable: !0,
    get: function() {
      return R.SetTraceNotification;
    }
  });
  Object.defineProperty(d, "LogTraceNotification", {
    enumerable: !0,
    get: function() {
      return R.LogTraceNotification;
    }
  });
  Object.defineProperty(d, "ConnectionErrors", {
    enumerable: !0,
    get: function() {
      return R.ConnectionErrors;
    }
  });
  Object.defineProperty(d, "ConnectionError", {
    enumerable: !0,
    get: function() {
      return R.ConnectionError;
    }
  });
  Object.defineProperty(d, "CancellationReceiverStrategy", {
    enumerable: !0,
    get: function() {
      return R.CancellationReceiverStrategy;
    }
  });
  Object.defineProperty(d, "CancellationSenderStrategy", {
    enumerable: !0,
    get: function() {
      return R.CancellationSenderStrategy;
    }
  });
  Object.defineProperty(d, "CancellationStrategy", {
    enumerable: !0,
    get: function() {
      return R.CancellationStrategy;
    }
  });
  Object.defineProperty(d, "MessageStrategy", {
    enumerable: !0,
    get: function() {
      return R.MessageStrategy;
    }
  });
  var vs = de();
  d.RAL = vs.default;
});

var Ln = C(function(kn) {
  Object.defineProperty(kn, "__esModule", {
    value: !0
  });
  var st = Ne("util"), W = it();
  class ot extends W.AbstractMessageBuffer {
    constructor(e = "utf-8") {
      super(e);
    }
    emptyBuffer() {
      return ot.emptyBuffer;
    }
    fromString(e, r) {
      return Buffer.from(e, r);
    }
    toString(e, r) {
      if (e instanceof Buffer) return e.toString(r); else return new st.TextDecoder(r).decode(e);
    }
    asNative(e, r) {
      if (r === void 0) return e instanceof Buffer ? e : Buffer.from(e); else return e instanceof Buffer ? e.slice(0, r) : Buffer.from(e, 0, r);
    }
    allocNative(e) {
      return Buffer.allocUnsafe(e);
    }
  }
  ot.emptyBuffer = Buffer.allocUnsafe(0);
  class En {
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return this.stream.on("close", e), W.Disposable.create(() => this.stream.off("close", e));
    }
    onError(e) {
      return this.stream.on("error", e), W.Disposable.create(() => this.stream.off("error", e));
    }
    onEnd(e) {
      return this.stream.on("end", e), W.Disposable.create(() => this.stream.off("end", e));
    }
    onData(e) {
      return this.stream.on("data", e), W.Disposable.create(() => this.stream.off("data", e));
    }
  }
  class Cn {
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return this.stream.on("close", e), W.Disposable.create(() => this.stream.off("close", e));
    }
    onError(e) {
      return this.stream.on("error", e), W.Disposable.create(() => this.stream.off("error", e));
    }
    onEnd(e) {
      return this.stream.on("end", e), W.Disposable.create(() => this.stream.off("end", e));
    }
    write(e, r) {
      return new Promise((n, s) => {
        let c = h => {
          if (h === void 0 || h === null) n(); else s(h);
        };
        if (typeof e === "string") this.stream.write(e, r, c); else this.stream.write(e, c);
      });
    }
    end() {
      this.stream.end();
    }
  }
  var xn = Object.freeze({
    messageBuffer: Object.freeze({
      create: e => new ot(e)
    }),
    applicationJson: Object.freeze({
      encoder: Object.freeze({
        name: "application/json",
        encode: (e, r) => {
          try {
            return Promise.resolve(Buffer.from(JSON.stringify(e, void 0, 0), r.charset));
          } catch (n) {
            return Promise.reject(n);
          }
        }
      }),
      decoder: Object.freeze({
        name: "application/json",
        decode: (e, r) => {
          try {
            if (e instanceof Buffer) return Promise.resolve(JSON.parse(e.toString(r.charset))); else return Promise.resolve(JSON.parse(new st.TextDecoder(r.charset).decode(e)));
          } catch (n) {
            return Promise.reject(n);
          }
        }
      })
    }),
    stream: Object.freeze({
      asReadableStream: e => new En(e),
      asWritableStream: e => new Cn(e)
    }),
    console,
    timer: Object.freeze({
      setTimeout(e, r, ...n) {
        let s = setTimeout(e, r, ...n);
        return {
          dispose: () => clearTimeout(s)
        };
      },
      setImmediate(e, ...r) {
        let n = setImmediate(e, ...r);
        return {
          dispose: () => clearImmediate(n)
        };
      },
      setInterval(e, r, ...n) {
        let s = setInterval(e, r, ...n);
        return {
          dispose: () => clearInterval(s)
        };
      }
    })
  });
  function Lt() {
    return xn;
  }
  (function(e) {
    function r() {
      W.RAL.install(xn);
    }
    e.install = r;
  })(Lt || (Lt = {}));
  kn.default = Lt;
});

var Mt = C(function(v) {
  var Ps = v && v.__createBinding || (Object.create ? function(e, r, n, s) {
    if (s === void 0) s = n;
    var c = Object.getOwnPropertyDescriptor(r, n);
    if (!c || ("get" in c ? !r.__esModule : c.writable || c.configurable)) c = {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    };
    Object.defineProperty(e, s, c);
  } : function(e, r, n, s) {
    if (s === void 0) s = n;
    e[s] = r[n];
  }), Ts = v && v.__exportStar || function(e, r) {
    for (var n in e) if (n !== "default" && !Object.prototype.hasOwnProperty.call(r, n)) Ps(r, e, n);
  };
  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v.createMessageConnection = v.createServerSocketTransport = v.createClientSocketTransport = v.createServerPipeTransport = v.createClientPipeTransport = v.generateRandomPipeName = v.StreamMessageWriter = v.StreamMessageReader = v.SocketMessageWriter = v.SocketMessageReader = v.PortMessageWriter = v.PortMessageReader = v.IPCMessageWriter = v.IPCMessageReader = void 0;
  var Le = Ln();
  Le.default.install();
  var at = Ne("path"), On = Ne("os"), Mn = Ne("crypto"), le = Ne("net"), O = it();
  Ts(it(), v);
  class jn extends O.AbstractMessageReader {
    constructor(e) {
      super();
      this.process = e;
      let r = this.process;
      r.on("error", n => this.fireError(n)), r.on("close", () => this.fireClose());
    }
    listen(e) {
      return this.process.on("message", e), O.Disposable.create(() => this.process.off("message", e));
    }
  }
  v.IPCMessageReader = jn;
  class $n extends O.AbstractMessageWriter {
    constructor(e) {
      super();
      this.process = e, this.errorCount = 0;
      let r = this.process;
      r.on("error", n => this.fireError(n)), r.on("close", () => this.fireClose);
    }
    write(e) {
      try {
        if (typeof this.process.send === "function") this.process.send(e, void 0, void 0, r => {
          if (r) this.errorCount++, this.handleError(r, e); else this.errorCount = 0;
        });
        return Promise.resolve();
      } catch (r) {
        return this.handleError(r, e), Promise.reject(r);
      }
    }
    handleError(e, r) {
      this.errorCount++, this.fireError(e, r, this.errorCount);
    }
    end() {}
  }
  v.IPCMessageWriter = $n;
  class qn extends O.AbstractMessageReader {
    constructor(e) {
      super();
      this.onData = new O.Emitter, e.on("close", () => this.fireClose), e.on("error", r => this.fireError(r)), 
      e.on("message", r => {
        this.onData.fire(r);
      });
    }
    listen(e) {
      return this.onData.event(e);
    }
  }
  v.PortMessageReader = qn;
  class In extends O.AbstractMessageWriter {
    constructor(e) {
      super();
      this.port = e, this.errorCount = 0, e.on("close", () => this.fireClose()), e.on("error", r => this.fireError(r));
    }
    write(e) {
      try {
        return this.port.postMessage(e), Promise.resolve();
      } catch (r) {
        return this.handleError(r, e), Promise.reject(r);
      }
    }
    handleError(e, r) {
      this.errorCount++, this.fireError(e, r, this.errorCount);
    }
    end() {}
  }
  v.PortMessageWriter = In;
  class Oe extends O.ReadableStreamMessageReader {
    constructor(e, r = "utf-8") {
      super((0, Le.default)().stream.asReadableStream(e), r);
    }
  }
  v.SocketMessageReader = Oe;
  class Me extends O.WriteableStreamMessageWriter {
    constructor(e, r) {
      super((0, Le.default)().stream.asWritableStream(e), r);
      this.socket = e;
    }
    dispose() {
      super.dispose(), this.socket.destroy();
    }
  }
  v.SocketMessageWriter = Me;
  class Nt extends O.ReadableStreamMessageReader {
    constructor(e, r) {
      super((0, Le.default)().stream.asReadableStream(e), r);
    }
  }
  v.StreamMessageReader = Nt;
  class Ot extends O.WriteableStreamMessageWriter {
    constructor(e, r) {
      super((0, Le.default)().stream.asWritableStream(e), r);
    }
  }
  v.StreamMessageWriter = Ot;
  var Nn = process.env.XDG_RUNTIME_DIR, Es = new Map([ [ "linux", 107 ], [ "darwin", 103 ] ]);
  function Cs() {
    let e = Mn.randomBytes(21).toString("hex"), r;
    if (Nn) r = at.join(Nn, `vscode-ipc-${e}.sock`); else r = at.join(On.tmpdir(), `vscode-${e}.sock`);
    let n = Es.get("linux");
    if (n !== void 0 && r.length > n) (0, Le.default)().console.warn(`WARNING: IPC handle "${r}" is longer than ${n} characters.`);
    return r;
  }
  v.generateRandomPipeName = Cs;
  function xs(e, r = "utf-8") {
    let n, s = new Promise((c, h) => {
      n = c;
    });
    return new Promise((c, h) => {
      let P = le.createServer(w => {
        P.close(), n([ new Oe(w, r), new Me(w, r) ]);
      });
      P.on("error", h), P.listen(e, () => {
        P.removeListener("error", h), c({
          onConnected: () => s
        });
      });
    });
  }
  v.createClientPipeTransport = xs;
  function ks(e, r = "utf-8") {
    let n = le.createConnection(e);
    return [ new Oe(n, r), new Me(n, r) ];
  }
  v.createServerPipeTransport = ks;
  function Ls(e, r = "utf-8") {
    let n, s = new Promise((c, h) => {
      n = c;
    });
    return new Promise((c, h) => {
      let P = le.createServer(w => {
        P.close(), n([ new Oe(w, r), new Me(w, r) ]);
      });
      P.on("error", h), P.listen(e, "127.0.0.1", () => {
        P.removeListener("error", h), c({
          onConnected: () => s
        });
      });
    });
  }
  v.createClientSocketTransport = Ls;
  function Ns(e, r = "utf-8") {
    let n = le.createConnection(e, "127.0.0.1");
    return [ new Oe(n, r), new Me(n, r) ];
  }
  v.createServerSocketTransport = Ns;
  function Os(e) {
    let r = e;
    return r.read !== void 0 && r.addListener !== void 0;
  }
  function Ms(e) {
    let r = e;
    return r.write !== void 0 && r.addListener !== void 0;
  }
  function js(e, r, n, s) {
    if (!n) n = O.NullLogger;
    let c = Os(e) ? new Nt(e) : e, h = Ms(r) ? new Ot(r) : r;
    if (O.ConnectionStrategy.is(s)) s = {
      connectionStrategy: s
    };
    return O.createMessageConnection(c, h, n, s);
  }
  v.createMessageConnection = js;
});

var je = we(Mt(), 1);

var ct = we(Mt(), 1);

var $s = 65536, qs = 33554432, $t = Buffer.from(`\r\n\r\n`), Dn = Buffer.alloc(0);

class qt extends ct.AbstractMessageReader {
  readable;
  onProtocolViolation;
  callback;
  stopped=!1;
  headerChunks=[];
  headerBytes=0;
  headerTail=Dn;
  expectedBodyLength;
  bodyChunks=[];
  bodyBytes=0;
  onData=e => this.handleData(e);
  onStreamError=e => this.fireError(e);
  onStreamClose=() => this.fireClose();
  constructor(e, r) {
    super();
    this.readable = e;
    this.onProtocolViolation = r;
  }
  listen(e) {
    return this.callback = e, this.readable.on("data", this.onData), this.readable.on("error", this.onStreamError), 
    this.readable.on("close", this.onStreamClose), ct.Disposable.create(() => this.detach());
  }
  dispose() {
    this.detach(), super.dispose();
  }
  detach() {
    this.stopped = !0, this.readable.removeListener("data", this.onData), this.readable.removeListener("error", this.onStreamError), 
    this.readable.removeListener("close", this.onStreamClose), this.resetHeader(), this.bodyChunks = [], 
    this.bodyBytes = 0, this.expectedBodyLength = void 0;
  }
  handleData(e) {
    if (this.stopped) return;
    let r = typeof e === "string" ? Buffer.from(e, "utf8") : e;
    while (r && r.length > 0 && !this.stopped) {
      let n = this.expectedBodyLength;
      r = n === void 0 ? this.consumeHeader(r) : this.consumeBody(r, n);
    }
  }
  consumeHeader(e) {
    let r = this.headerTail.length === 0 ? e : Buffer.concat([ this.headerTail, e ]), n = r.indexOf($t);
    if (n === -1) {
      if (this.headerChunks.push(e), this.headerBytes += e.length, this.headerTail = r.subarray(Math.max(0, r.length - ($t.length - 1))), 
      this.headerBytes > $s) this.protocolViolation(Error("LSP server exceeded the header size limit without a message header \u2014 it is likely printing logs or other non-protocol output to stdout instead of stderr"));
      return;
    }
    let s = n - this.headerTail.length + $t.length, c = this.headerBytes - this.headerTail.length + n;
    this.headerChunks.push(e.subarray(0, s));
    let h = Buffer.concat(this.headerChunks).subarray(0, c).toString("latin1"), P = e.subarray(s);
    this.resetHeader();
    let w = As(h);
    if (w instanceof Error) {
      this.protocolViolation(w);
      return;
    }
    return this.expectedBodyLength = w, P.length > 0 ? P : void 0;
  }
  consumeBody(e, r) {
    let n = r - this.bodyBytes;
    if (e.length < n) {
      this.bodyChunks.push(e), this.bodyBytes += e.length;
      return;
    }
    this.bodyChunks.push(e.length === n ? e : e.subarray(0, n));
    let s = e.length > n ? e.subarray(n) : void 0, c = Buffer.concat(this.bodyChunks, r);
    return this.bodyChunks = [], this.bodyBytes = 0, this.expectedBodyLength = void 0, 
    this.deliver(c), s;
  }
  deliver(e) {
    let r;
    try {
      r = Do(e.toString("utf8"));
    } catch (n) {
      t(`LSP: dropped unparseable message body: ${n}`, {
        level: "warn"
      });
      return;
    }
    if (!Is(r)) {
      t("LSP: dropped message body that is not an object", {
        level: "warn"
      });
      return;
    }
    try {
      this.callback?.(r);
    } catch (n) {
      this.fireError(n);
    }
  }
  resetHeader() {
    this.headerChunks = [], this.headerBytes = 0, this.headerTail = Dn;
  }
  protocolViolation(e) {
    if (this.stopped) return;
    this.stopped = !0, this.detach(), this.fireError(e);
    try {
      this.onProtocolViolation(e);
    } catch (r) {
      this.fireError(r);
    }
  }
}

function Is(e) {
  return typeof e === "object" && e !== null;
}

var Ds = /^([!#$%&'*+.^_`|~0-9A-Za-z-]+)[ \t]*:[ \t]*([^\r\n]*)$/, Bs = new Set([ "content-length", "content-type" ]);

function As(e) {
  let r;
  for (let s of e.split(`\r\n`)) {
    let c = Ds.exec(s), h = c?.[1]?.toLowerCase();
    if (!c || h === void 0 || !Bs.has(h)) return Error("LSP server sent non-protocol output in the header block \u2014 its stdout is desynchronized from the base protocol (logs/banners on stdout instead of stderr?)");
    if (h === "content-length") r = c[2]?.trim();
  }
  if (r === void 0) return Error("LSP server sent a header block without a Content-Length \u2014 its stdout is desynchronized from the base protocol (non-protocol output on stdout?)");
  if (!/^\d+$/.test(r)) return Error("LSP server sent a Content-Length that is not a number \u2014 its stdout is desynchronized from the base protocol");
  let n = Number(r);
  if (n > qs) return Error("LSP server declared a message larger than the size limit \u2014 refusing to buffer it");
  return n;
}

class Bn extends Error {
  oomKilledInToolCgroup;
  constructor(e, r = !1) {
    super(e);
    this.oomKilledInToolCgroup = r;
    this.name = "LSPServerCrashError";
  }
}

function Sa(e, r) {
  let n, s, c = !1, h = !1, P, w = !1, j, I, X, J, oe = new Map, fe = new Map;
  function re() {
    if (h) throw P || Error(`LSP server ${e} failed to start`);
  }
  function Q(y) {
    try {
      y.dispose();
    } catch (b) {
      t(`Connection disposal failed for ${e}: ${l(b)}`);
    }
  }
  function Z(y, b, {force: g}) {
    if (b) Q(b);
    if (y === n) {
      if (j) y.removeListener("error", j);
      if (I) y.removeListener("exit", I);
      if (y.stderr && J) y.stderr.removeListener("data", J);
      j = void 0, I = void 0, X = void 0, J = void 0;
    }
    if (typeof y.exitCode === "number" || typeof y.signalCode === "string") return;
    try {
      if ((g || globalThis.process.platform === "win32") && y.pid !== void 0) vv(y.pid); else y.kill();
    } catch (N) {
      t(`Process kill failed for ${e} (may already be dead): ${l(N)}`);
    }
  }
  return {
    get isInitialized() {
      return c;
    },
    async start(y, b, g) {
      h = !1, P = void 0, c = !1, w = !1;
      try {
        let N = Dl("lsp").cgroup !== void 0 ? "capped" : Ogt() ? "parked" : "uncapped", k = N === "capped" ? ZMo() : void 0;
        if (n = aD(y, b, {
          stdio: [ "pipe", "pipe", "pipe" ],
          env: {
            ...gs(),
            ...g?.env
          },
          extendEnv: !1,
          cwd: g?.cwd,
          windowsHide: !0,
          toolCgroupClass: "lsp"
        }), !n.stdout || !n.stdin) throw Error("LSP server process stdio not available");
        let _ = n;
        if (await new Promise((S, F) => {
          let G = () => {
            me(), S();
          }, pe = ge => {
            me(), F(ge);
          }, me = () => {
            _.removeListener("spawn", G), _.removeListener("error", pe);
          };
          _.once("spawn", G), _.once("error", pe);
        }), _.pid) Ift("lsp", _.pid), _.once("close", () => {
          if (_.pid) _Ds(_.pid);
        });
        if (n.stderr) J = S => {
          let F = S.toString().trim();
          if (F) t(`[LSP SERVER ${e}] ${F}`);
        }, n.stderr.on("data", J);
        j = S => {
          if (n !== _) return;
          if (!w) h = !0, P = S, t(`LSP server ${e} failed to start: ${S.message}`, {
            level: "error"
          });
        }, n.on("error", j), I = (S, F) => {
          if (n !== _) return;
          if ((S === null ? F !== null : S !== 0) && !w) {
            c = !1;
            let pe = N === "capped" || N === "parked" && kFs("lsp"), me = (F === "SIGKILL" || S === 137) && pe ? TFs(k) : !1, ge = me === !0, We = (S === null ? `killed by signal ${F}` : `exit code ${S}`) + (ge ? " \u2014 killed at the tool memory limit (CLAUDE_CODE_TOOL_MEMORY_LIMIT)" : me === void 0 ? " \u2014 likely killed at the tool memory limit (CLAUDE_CODE_TOOL_MEMORY_LIMIT)" : ""), $e = new Bn(`LSP server ${e} crashed with ${We}`, ge);
            t(`LSP server ${e} crashed with ${We}`, {
              level: "error"
            }), h = !0, P = $e, Z(_, s, {
              force: !1
            }), n = void 0, s = void 0, r?.($e);
          }
        }, n.on("exit", I), X = S => {
          if (!w) t(`LSP server ${e} stdin error: ${S.message}`);
        }, n.stdin.on("error", X);
        let ne = new qt(n.stdout, S => {
          if (n !== _) {
            Q(he);
            return;
          }
          if (w) {
            Q(he);
            return;
          }
          if (_.exitCode !== null || _.signalCode !== null) {
            Q(he);
            return;
          }
          h = !0, P = S, c = !1, t(`LSP server ${e} protocol violation, stopping process: ${S.message}`, {
            level: "error"
          }), Z(_, s, {
            force: !0
          }), n = void 0, s = void 0, r?.(S);
        }), ce = new je.StreamMessageWriter(n.stdin), he = je.createMessageConnection(ne, ce);
        s = he, s.onError(([S, F, G]) => {
          if (!w && n === _) h = !0, P = S, t(`LSP server ${e} connection error: ${S.message}`, {
            level: "error"
          });
        }), s.onClose(() => {
          if (!w && n === _) c = !1, t(`LSP server ${e} connection closed`);
        }), s.listen(), s.trace(je.Trace.Verbose, {
          log: S => {
            t(`[LSP PROTOCOL ${e}] ${S}`);
          }
        }).catch(S => {
          t(`Failed to enable tracing for ${e}: ${S.message}`);
        });
        for (let [S, F] of oe) s.onNotification(S, F), t(`Applied notification handler for ${e}.${S}`);
        for (let [S, F] of fe) s.onRequest(S, F), t(`Applied request handler for ${e}.${S}`);
        t(`LSP client started for ${e}`);
      } catch (N) {
        if (jt(N)) t(`LSP server ${e} failed to start: ${l(N)}`, {
          level: "error"
        }); else T8(Error(`LSP server ${e} failed to start: ${l(N)}`), "LSP server failed to start");
        throw N;
      }
    },
    async initialize(y) {
      if (!s) throw Error("LSP client not started");
      re();
      try {
        let b = await s.sendRequest("initialize", y);
        if (await s.sendNotification("initialized", {}), re(), !s) throw Error("LSP server stopped during initialize");
        return c = !0, t(`LSP server ${e} initialized`), b;
      } catch (b) {
        throw t(`LSP server ${e} initialize failed: ${b.message}`, {
          level: "error"
        }), h && P || b;
      }
    },
    async sendRequest(y, b) {
      if (!s) throw Error("LSP client not started");
      if (re(), !c) throw Error("LSP server not initialized");
      try {
        return await s.sendRequest(y, b);
      } catch (g) {
        throw t(`LSP server ${e} request ${y} failed: ${g.message}`, {
          level: "error"
        }), g;
      }
    },
    async sendNotification(y, b) {
      if (!s) throw Error("LSP client not started");
      re();
      try {
        await s.sendNotification(y, b);
      } catch (g) {
        t(`LSP server ${e} notification ${y} failed (continuing): ${g.message}`, {
          level: "error"
        });
      }
    },
    onNotification(y, b) {
      if (oe.set(y, b), !s) {
        t(`Registered notification handler for ${e}.${y} (connection not ready)`);
        return;
      }
      re(), s.onNotification(y, b);
    },
    onRequest(y, b) {
      if (fe.set(y, b), !s) {
        t(`Registered request handler for ${e}.${y} (connection not ready)`);
        return;
      }
      re(), s.onRequest(y, b);
    },
    async stop(y) {
      let b;
      w = !0;
      let g = n, N = s;
      try {
        if (N) {
          let k = N, _ = (async () => {
            let ne;
            try {
              await k.sendRequest("shutdown");
            } catch (ce) {
              ne = ce;
            }
            try {
              await k.sendNotification("exit");
            } catch (ce) {
              throw ne ?? ce;
            }
            if (ne !== void 0) throw ne;
          })();
          if (_.catch(() => {}), y !== void 0) await Ht(_, y, `LSP server '${e}' timed out after ${y}ms during shutdown`); else await _;
        }
      } catch (k) {
        let _ = k;
        t(`LSP server ${e} stop failed: ${_.message}`, {
          level: "error"
        }), b = _;
      } finally {
        let k = n === g;
        if (g) Z(g, N, {
          force: !1
        }); else if (N) Q(N);
        if (n === g) n = void 0;
        if (s === N) s = void 0;
        if (k) {
          if (c = !1, w = !1, b) h = !0, P = b;
        }
        t(`LSP client stopped for ${e}`);
      }
      if (b) throw b;
    }
  };
}

export { Sa as createLSPClient };
