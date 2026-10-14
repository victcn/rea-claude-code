// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { la } from "./chunk-m8ez8fhk.js";

function b(t) {
  if (t === null || typeof t !== "object") return null;
  return t = C && t[C] || t["@@iterator"], typeof t === "function" ? t : null;
}

function c(t, e, n) {
  this.props = t, this.context = e, this.refs = d, this.updater = n || g;
}

function h() {}

function T(t, e, n) {
  this.props = t, this.context = e, this.refs = d, this.updater = n || g;
}

function a() {}

function H(t, e, n) {
  var r = n.ref;
  return {
    $$typeof: v,
    type: t,
    key: e,
    ref: r !== void 0 ? r : null,
    props: n
  };
}

function z(t, e) {
  return H(t.type, e, t.props);
}

function m(t) {
  return typeof t === "object" && t !== null && t.$$typeof === v;
}

function G(t) {
  var e = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}

function E(t, e) {
  return typeof t === "object" && t !== null && t.key != null ? G("" + t.key) : e.toString(36);
}

function K(t) {
  switch (t.status) {
   case "fulfilled":
    return t.value;

   case "rejected":
    throw t.reason;

   default:
    switch (typeof t.status === "string" ? t.then(a, a) : (t.status = "pending", t.then(function(e) {
      t.status === "pending" && (t.status = "fulfilled", t.value = e);
    }, function(e) {
      t.status === "pending" && (t.status = "rejected", t.reason = e);
    })), t.status) {
     case "fulfilled":
      return t.value;

     case "rejected":
      throw t.reason;
    }
  }
  throw t;
}

function p(t, e, n, r, o) {
  var f = typeof t;
  if (f === "undefined" || f === "boolean") t = null;
  var u = !1;
  if (t === null) u = !0; else switch (f) {
   case "bigint":
   case "string":
   case "number":
    u = !0;
    break;

   case "object":
    switch (t.$$typeof) {
     case v:
     case j:
      u = !0;
      break;

     case k:
      return u = t._init, p(u(t._payload), e, n, r, o);
    }
  }
  if (u) return o = o(t), u = r === "" ? "." + E(t, 0) : r, A(o) ? (n = "", u != null && (n = u.replace(S, "$&/") + "/"), 
  p(o, e, n, "", function(O) {
    return O;
  })) : o != null && (m(o) && (o = z(o, n + (o.key == null || t && t.key === o.key ? "" : ("" + o.key).replace(S, "$&/") + "/") + u)), 
  e.push(o)), 1;
  u = 0;
  var _ = r === "" ? "." : r + ":";
  if (A(t)) for (var i = 0; i < t.length; i++) r = t[i], f = _ + E(r, i), u += p(r, e, n, f, o); else if (i = b(t), 
  typeof i === "function") for (t = i.call(t), i = 0; !(r = t.next()).done; ) r = r.value, 
  f = _ + E(r, i++), u += p(r, e, n, f, o); else if (f === "object") {
    if (typeof t.then === "function") return p(K(t), e, n, r, o);
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  }
  return u;
}

function l(t, e, n) {
  if (t == null) return t;
  var r = [], o = 0;
  return p(t, r, "", "", function(f) {
    return e.call(n, f, o++);
  }), r;
}

var v, j, N, Y, I, M, L, k, U, C, g, D, d, x, A, s, q, S, w, B, l_r, Zy, Wco, dc, zco, Vr, RJt, Kt = function(t) {
  return t = {
    $$typeof: I,
    _currentValue: t,
    _currentValue2: t,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }, t.Provider = t, t.Consumer = {
    $$typeof: Y,
    _context: t
  }, t;
}, hd = function(t, e, n) {
  var r, o = {}, f = null;
  if (e != null) for (r in e.key !== void 0 && (f = "" + e.key), e) q.call(e, r) && r !== "key" && r !== "__self" && r !== "__source" && (o[r] = e[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n; else if (1 < u) {
    for (var _ = Array(u), i = 0; i < u; i++) _[i] = arguments[i + 2];
    o.children = _;
  }
  if (t && t.defaultProps) for (r in u = t.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return H(t, f, o);
}, Gco = function() {
  return {
    current: null
  };
}, _m, Bm = function(t, e) {
  return {
    $$typeof: L,
    type: t,
    compare: e === void 0 ? null : e
  };
}, d_r = function(t) {
  var e = s.T, n = {};
  s.T = n;
  try {
    var r = t(), o = s.S;
    o !== null && o(n, r), typeof r === "object" && r !== null && typeof r.then === "function" && r.then(a, w);
  } catch (f) {
    w(f);
  } finally {
    e !== null && n.types !== null && (e.types = n.types), s.T = e;
  }
}, Hr = function(t) {
  return s.H.use(t);
}, ae = function(t, e) {
  return s.H.useCallback(t, e);
}, Ae = function(t) {
  return s.H.useContext(t);
}, _7 = function(t, e) {
  return s.H.useDeferredValue(t, e);
}, P = function(t, e) {
  return s.H.useEffect(t, e);
}, xo = function(t) {
  return s.H.useEffectEvent(t);
}, Vco = function() {
  return s.H.useId();
}, Wbe = function(t, e, n) {
  return s.H.useImperativeHandle(t, e, n);
}, f$e = function(t, e) {
  return s.H.useInsertionEffect(t, e);
}, Zt = function(t, e) {
  return s.H.useLayoutEffect(t, e);
}, Z = function(t, e) {
  return s.H.useMemo(t, e);
}, Dh = function(t, e, n) {
  return s.H.useReducer(t, e, n);
}, R = function(t) {
  return s.H.useRef(t);
}, y = function(t) {
  return s.H.useState(t);
}, xt = function(t, e, n) {
  return s.H.useSyncExternalStore(t, e, n);
}, c_r = function() {
  return s.H.useTransition();
};

var F = la(() => {
  v = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), 
  Y = Symbol.for("react.consumer"), I = Symbol.for("react.context"), M = Symbol.for("react.suspense"), 
  L = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), 
  C = Symbol.iterator;
  g = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  }, D = Object.assign, d = {};
  c.prototype.isReactComponent = {};
  c.prototype.setState = function(t, e) {
    if (typeof t !== "object" && typeof t !== "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  c.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  h.prototype = c.prototype;
  x = T.prototype = new h;
  x.constructor = T;
  D(x, c.prototype);
  x.isPureReactComponent = !0;
  A = Array.isArray;
  s = {
    H: null,
    A: null,
    T: null,
    S: null
  }, q = Object.prototype.hasOwnProperty;
  S = /\/+/g;
  w = typeof reportError === "function" ? reportError : function(t) {
    if (typeof window === "object" && typeof window.ErrorEvent === "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t === "object" && t !== null && typeof t.message === "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process === "object" && typeof process.emit === "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, B = {
    map: l,
    forEach: function(t, e, n) {
      l(t, function() {
        e.apply(this, arguments);
      }, n);
    },
    count: function(t) {
      var e = 0;
      return l(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return l(t, function(e) {
        return e;
      }) || [];
    },
    only: function(t) {
      if (!m(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  l_r = U, Zy = B, Wco = c, dc = N, zco = T, Vr = M, RJt = s, _m = m;
});

export { l_r, Zy, Wco, dc, zco, Vr, RJt, Kt, hd, Gco, _m, Bm, d_r, Hr, ae, Ae, _7, P, xo, Vco, Wbe, f$e, Zt, Z, Dh, R, y, xt, c_r, F };
