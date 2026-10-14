// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { C } from "./chunk-m8ez8fhk.js";

var EUe = C(function(ae, E) {
  var T, R, F, I, A, G, M, K, N, V, B, z, q, P, D, L, H, J, g, Q, U, W, X, Y, Z, k, x, ee, S, te, re, ne;
  (function(s) {
    var m = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) define("tslib", [ "exports" ], function(b) {
      s(v(m, v(b)));
    }); else if (typeof E === "object" && typeof ae === "object") s(v(m, v(ae))); else s(v(m));
    function v(b, O) {
      if (b !== m) if (typeof Object.create === "function") Object.defineProperty(b, "__esModule", {
        value: !0
      }); else b.__esModule = !0;
      return function(e, t) {
        return b[e] = O ? O(e, t) : t;
      };
    }
  })(function(s) {
    var m = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
    };
    T = function(e, t) {
      if (typeof t !== "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
      m(e, t);
      function r() {
        this.constructor = e;
      }
      e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r);
    }, R = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) e[a] = t[a];
      }
      return e;
    }, F = function(e, t) {
      var r = {};
      for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) r[n] = e[n];
      if (e != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) if (t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) r[n[a]] = e[n[a]];
      }
      return r;
    }, I = function(e, t, r, n) {
      var a = arguments.length, o = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, i;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") o = Reflect.decorate(e, t, r, n); else for (var u = e.length - 1; u >= 0; u--) if (i = e[u]) o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o;
      return a > 3 && o && Object.defineProperty(t, r, o), o;
    }, A = function(e, t) {
      return function(r, n) {
        t(r, n, e);
      };
    }, G = function(e, t, r, n, a, o) {
      function i(w) {
        if (w !== void 0 && typeof w !== "function") throw TypeError("Function expected");
        return w;
      }
      var u = n.kind, y = u === "getter" ? "get" : u === "setter" ? "set" : "value", c = !t && e ? n.static ? e : e.prototype : null, _ = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), l, j = !1;
      for (var f = r.length - 1; f >= 0; f--) {
        var p = {};
        for (var d in n) p[d] = d === "access" ? {} : n[d];
        for (var d in n.access) p.access[d] = n.access[d];
        p.addInitializer = function(w) {
          if (j) throw TypeError("Cannot add initializers after decoration has completed");
          o.push(i(w || null));
        };
        var h = (0, r[f])(u === "accessor" ? {
          get: _.get,
          set: _.set
        } : _[y], p);
        if (u === "accessor") {
          if (h === void 0) continue;
          if (h === null || typeof h !== "object") throw TypeError("Object expected");
          if (l = i(h.get)) _.get = l;
          if (l = i(h.set)) _.set = l;
          if (l = i(h.init)) a.unshift(l);
        } else if (l = i(h)) if (u === "field") a.unshift(l); else _[y] = l;
      }
      if (c) Object.defineProperty(c, n.name, _);
      j = !0;
    }, M = function(e, t, r) {
      var n = arguments.length > 2;
      for (var a = 0; a < t.length; a++) r = n ? t[a].call(e, r) : t[a].call(e);
      return n ? r : void 0;
    }, K = function(e) {
      return typeof e === "symbol" ? e : "".concat(e);
    }, N = function(e, t, r) {
      if (typeof t === "symbol") t = t.description ? "[".concat(t.description, "]") : "";
      return Object.defineProperty(e, "name", {
        configurable: !0,
        value: r ? "".concat(r, " ", t) : t
      });
    }, V = function(e, t) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(e, t);
    }, B = function(e, t, r, n) {
      function a(o) {
        return o instanceof r ? o : new r(function(i) {
          i(o);
        });
      }
      return new (r || (r = Promise))(function(o, i) {
        function u(_) {
          try {
            c(n.next(_));
          } catch (l) {
            i(l);
          }
        }
        function y(_) {
          try {
            c(n.throw(_));
          } catch (l) {
            i(l);
          }
        }
        function c(_) {
          _.done ? o(_.value) : a(_.value).then(u, y);
        }
        c((n = n.apply(e, t || [])).next());
      });
    }, z = function(e, t) {
      var r = {
        label: 0,
        sent: function() {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      }, n, a, o, i = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return i.next = u(0), i.throw = u(1), i.return = u(2), typeof Symbol === "function" && (i[Symbol.iterator] = function() {
        return this;
      }), i;
      function u(c) {
        return function(_) {
          return y([ c, _ ]);
        };
      }
      function y(c) {
        if (n) throw TypeError("Generator is already executing.");
        while (i && (i = 0, c[0] && (r = 0)), r) try {
          if (n = 1, a && (o = c[0] & 2 ? a.return : c[0] ? a.throw || ((o = a.return) && o.call(a), 
          0) : a.next) && !(o = o.call(a, c[1])).done) return o;
          if (a = 0, o) c = [ c[0] & 2, o.value ];
          switch (c[0]) {
           case 0:
           case 1:
            o = c;
            break;

           case 4:
            return r.label++, {
              value: c[1],
              done: !1
            };

           case 5:
            r.label++, a = c[1], c = [ 0 ];
            continue;

           case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;

           default:
            if ((o = r.trys, !(o = o.length > 0 && o[o.length - 1])) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = c;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(c);
              break;
            }
            if (o[2]) r.ops.pop();
            r.trys.pop();
            continue;
          }
          c = t.call(e, r);
        } catch (_) {
          c = [ 6, _ ], a = 0;
        } finally {
          n = o = 0;
        }
        if (c[0] & 5) throw c[1];
        return {
          value: c[0] ? c[1] : void 0,
          done: !0
        };
      }
    }, q = function(e, t) {
      for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) S(t, e, r);
    }, S = Object.create ? function(e, t, r, n) {
      if (n === void 0) n = r;
      var a = Object.getOwnPropertyDescriptor(t, r);
      if (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) a = {
        enumerable: !0,
        get: function() {
          return t[r];
        }
      };
      Object.defineProperty(e, n, a);
    } : function(e, t, r, n) {
      if (n === void 0) n = r;
      e[n] = t[r];
    }, P = function(e) {
      var t = typeof Symbol === "function" && Symbol.iterator, r = t && e[t], n = 0;
      if (r) return r.call(e);
      if (e && typeof e.length === "number") return {
        next: function() {
          if (e && n >= e.length) e = void 0;
          return {
            value: e && e[n++],
            done: !e
          };
        }
      };
      throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, D = function(e, t) {
      var r = typeof Symbol === "function" && e[Symbol.iterator];
      if (!r) return e;
      var n = r.call(e), a, o = [], i;
      try {
        while ((t === void 0 || t-- > 0) && !(a = n.next()).done) o.push(a.value);
      } catch (u) {
        i = {
          error: u
        };
      } finally {
        try {
          if (a && !a.done && (r = n.return)) r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      return o;
    }, L = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(D(arguments[t]));
      return e;
    }, H = function() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      for (var n = Array(e), a = 0, t = 0; t < r; t++) for (var o = arguments[t], i = 0, u = o.length; i < u; i++, 
      a++) n[a] = o[i];
      return n;
    }, J = function(e, t, r) {
      if (r || arguments.length === 2) {
        for (var n = 0, a = t.length, o; n < a; n++) if (o || !(n in t)) {
          if (!o) o = Array.prototype.slice.call(t, 0, n);
          o[n] = t[n];
        }
      }
      return e.concat(o || Array.prototype.slice.call(t));
    }, g = function(e) {
      return this instanceof g ? (this.v = e, this) : new g(e);
    }, Q = function(e, t, r) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var n = r.apply(e, t || []), a, o = [];
      return a = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), 
      u("next"), u("throw"), u("return", i), a[Symbol.asyncIterator] = function() {
        return this;
      }, a;
      function i(f) {
        return function(p) {
          return Promise.resolve(p).then(f, l);
        };
      }
      function u(f, p) {
        if (n[f]) {
          if (a[f] = function(d) {
            return new Promise(function(h, w) {
              o.push([ f, d, h, w ]) > 1 || y(f, d);
            });
          }, p) a[f] = p(a[f]);
        }
      }
      function y(f, p) {
        try {
          c(n[f](p));
        } catch (d) {
          j(o[0][3], d);
        }
      }
      function c(f) {
        f.value instanceof g ? Promise.resolve(f.value.v).then(_, l) : j(o[0][2], f);
      }
      function _(f) {
        y("next", f);
      }
      function l(f) {
        y("throw", f);
      }
      function j(f, p) {
        if (f(p), o.shift(), o.length) y(o[0][0], o[0][1]);
      }
    }, U = function(e) {
      var t, r;
      return t = {}, n("next"), n("throw", function(a) {
        throw a;
      }), n("return"), t[Symbol.iterator] = function() {
        return this;
      }, t;
      function n(a, o) {
        t[a] = e[a] ? function(i) {
          return (r = !r) ? {
            value: g(e[a](i)),
            done: !1
          } : o ? o(i) : i;
        } : o;
      }
    }, W = function(e) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var t = e[Symbol.asyncIterator], r;
      return t ? t.call(e) : (e = typeof P === "function" ? P(e) : e[Symbol.iterator](), 
      r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this;
      }, r);
      function n(o) {
        r[o] = e[o] && function(i) {
          return new Promise(function(u, y) {
            i = e[o](i), a(u, y, i.done, i.value);
          });
        };
      }
      function a(o, i, u, y) {
        Promise.resolve(y).then(function(c) {
          o({
            value: c,
            done: u
          });
        }, i);
      }
    }, X = function(e, t) {
      if (Object.defineProperty) Object.defineProperty(e, "raw", {
        value: t
      }); else e.raw = t;
      return e;
    };
    var v = Object.create ? function(e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function(e, t) {
      e.default = t;
    }, b = function(e) {
      return b = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) r[r.length] = n;
        return r;
      }, b(e);
    };
    Y = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) {
        for (var r = b(e), n = 0; n < r.length; n++) if (r[n] !== "default") S(t, e, r[n]);
      }
      return v(t, e), t;
    }, Z = function(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }, k = function(e, t, r, n) {
      if (r === "a" && !n) throw TypeError("Private accessor was defined without a getter");
      if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
    }, x = function(e, t, r, n, a) {
      if (n === "m") throw TypeError("Private method is not writable");
      if (n === "a" && !a) throw TypeError("Private accessor was defined without a setter");
      if (typeof t === "function" ? e !== t || !a : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
      return n === "a" ? a.call(e, r) : a ? a.value = r : t.set(e, r), r;
    }, ee = function(e, t) {
      if (t === null || typeof t !== "object" && typeof t !== "function") throw TypeError("Cannot use 'in' operator on non-object");
      return typeof e === "function" ? t === e : e.has(t);
    }, te = function(e, t, r) {
      if (t !== null && t !== void 0) {
        if (typeof t !== "object" && typeof t !== "function") throw TypeError("Object expected.");
        var n, a;
        if (r) {
          if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
          n = t[Symbol.asyncDispose];
        }
        if (n === void 0) {
          if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
          if (n = t[Symbol.dispose], r) a = n;
        }
        if (typeof n !== "function") throw TypeError("Object not disposable.");
        if (a) n = function() {
          try {
            a.call(this);
          } catch (o) {
            return Promise.reject(o);
          }
        };
        e.stack.push({
          value: t,
          dispose: n,
          async: r
        });
      } else if (r) e.stack.push({
        async: !0
      });
      return t;
    };
    var O = typeof SuppressedError === "function" ? SuppressedError : function(e, t, r) {
      var n = Error(r);
      return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
    };
    re = function(e) {
      function t(o) {
        e.error = e.hasError ? new O(o, e.error, "An error was suppressed during disposal.") : o, 
        e.hasError = !0;
      }
      var r, n = 0;
      function a() {
        while (r = e.stack.pop()) try {
          if (!r.async && n === 1) return n = 0, e.stack.push(r), Promise.resolve().then(a);
          if (r.dispose) {
            var o = r.dispose.call(r.value);
            if (r.async) return n |= 2, Promise.resolve(o).then(a, function(i) {
              return t(i), a();
            });
          } else n |= 1;
        } catch (i) {
          t(i);
        }
        if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
        if (e.hasError) throw e.error;
      }
      return a();
    }, ne = function(e, t) {
      if (typeof e === "string" && /^\.\.?\//.test(e)) return e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(r, n, a, o, i) {
        return n ? t ? ".jsx" : ".js" : a && (!o || !i) ? r : a + o + "." + i.toLowerCase() + "js";
      });
      return e;
    }, s("__extends", T), s("__assign", R), s("__rest", F), s("__decorate", I), s("__param", A), 
    s("__esDecorate", G), s("__runInitializers", M), s("__propKey", K), s("__setFunctionName", N), 
    s("__metadata", V), s("__awaiter", B), s("__generator", z), s("__exportStar", q), 
    s("__createBinding", S), s("__values", P), s("__read", D), s("__spread", L), s("__spreadArrays", H), 
    s("__spreadArray", J), s("__await", g), s("__asyncGenerator", Q), s("__asyncDelegator", U), 
    s("__asyncValues", W), s("__makeTemplateObject", X), s("__importStar", Y), s("__importDefault", Z), 
    s("__classPrivateFieldGet", k), s("__classPrivateFieldSet", x), s("__classPrivateFieldIn", ee), 
    s("__addDisposableResource", te), s("__disposeResources", re), s("__rewriteRelativeImportExtension", ne);
  });
});

export { EUe };
