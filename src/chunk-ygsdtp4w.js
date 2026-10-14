// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Buo, zJt } from "./chunk-r72vd5cv.js";

import { C } from "./chunk-m8ez8fhk.js";

var it = C(function(zr) {
  Object.defineProperty(zr, "__esModule", {
    value: !0
  });
  zr.regexpCode = zr.getEsmExportName = zr.getProperty = zr.safeStringify = zr.stringify = zr.strConcat = zr.addCodeArg = zr.str = zr._ = zr.nil = zr._Code = zr.Name = zr.IDENTIFIER = zr._CodeOrName = void 0;
  class ht {}
  zr._CodeOrName = ht;
  zr.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class De extends ht {
    constructor(e) {
      super();
      if (!zr.IDENTIFIER.test(e)) throw Error("CodeGen: name must be a valid identifier");
      this.str = e;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return {
        [this.str]: 1
      };
    }
  }
  zr.Name = De;
  class Z extends ht {
    constructor(e) {
      super();
      this._items = typeof e === "string" ? [ e ] : e;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return !1;
      let e = this._items[0];
      return e === "" || e === '""';
    }
    get str() {
      var e;
      return (e = this._str) !== null && e !== void 0 ? e : this._str = this._items.reduce((t, r) => `${t}${r}`, "");
    }
    get names() {
      var e;
      return (e = this._names) !== null && e !== void 0 ? e : this._names = this._items.reduce((t, r) => {
        if (r instanceof De) t[r.str] = (t[r.str] || 0) + 1;
        return t;
      }, {});
    }
  }
  zr._Code = Z;
  zr.nil = new Z("");
  function Dr(e, ...t) {
    let r = [ e[0] ], s = 0;
    while (s < t.length) tr(r, t[s]), r.push(e[++s]);
    return new Z(r);
  }
  zr._ = Dr;
  var er = new Z("+");
  function Vr(e, ...t) {
    let r = [ ot(e[0]) ], s = 0;
    while (s < t.length) r.push(er), tr(r, t[s]), r.push(er, ot(e[++s]));
    return ha(r), new Z(r);
  }
  zr.str = Vr;
  function tr(e, t) {
    if (t instanceof Z) e.push(...t._items); else if (t instanceof De) e.push(t); else e.push(_a(t));
  }
  zr.addCodeArg = tr;
  function ha(e) {
    let t = 1;
    while (t < e.length - 1) {
      if (e[t] === er) {
        let r = ma(e[t - 1], e[t + 1]);
        if (r !== void 0) {
          e.splice(t - 1, 3, r);
          continue;
        }
        e[t++] = "+";
      }
      t++;
    }
  }
  function ma(e, t) {
    if (t === '""') return e;
    if (e === '""') return t;
    if (typeof e == "string") {
      if (t instanceof De || e[e.length - 1] !== '"') return;
      if (typeof t != "string") return `${e.slice(0, -1)}${t}"`;
      if (t[0] === '"') return e.slice(0, -1) + t.slice(1);
      return;
    }
    if (typeof t == "string" && t[0] === '"' && !(e instanceof De)) return `"${e}${t.slice(1)}`;
    return;
  }
  function ya(e, t) {
    return t.emptyStr() ? e : e.emptyStr() ? t : Vr`${e}${t}`;
  }
  zr.strConcat = ya;
  function _a(e) {
    return typeof e == "number" || typeof e == "boolean" || e === null ? e : ot(Array.isArray(e) ? e.join(",") : e);
  }
  function ga(e) {
    return new Z(ot(e));
  }
  zr.stringify = ga;
  function ot(e) {
    return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  zr.safeStringify = ot;
  function $a(e) {
    return typeof e == "string" && zr.IDENTIFIER.test(e) ? new Z(`.${e}`) : Dr`[${e}]`;
  }
  zr.getProperty = $a;
  function va(e) {
    if (typeof e == "string" && zr.IDENTIFIER.test(e)) return new Z(`${e}`);
    throw Error(`CodeGen: invalid export name: ${e}, use explicit $id name mapping`);
  }
  zr.getEsmExportName = va;
  function wa(e) {
    return new Z(e.toString());
  }
  zr.regexpCode = wa;
});

var or = C(function(Lr) {
  Object.defineProperty(Lr, "__esModule", {
    value: !0
  });
  Lr.ValueScope = Lr.ValueScopeName = Lr.Scope = Lr.varKinds = Lr.UsedValueState = void 0;
  var I = it();
  class Kr extends Error {
    constructor(e) {
      super(`CodeGen: "code" for ${e} not defined`);
      this.value = e.value;
    }
  }
  var yt;
  (function(e) {
    e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
  })(yt || (Lr.UsedValueState = yt = {}));
  Lr.varKinds = {
    const: new I.Name("const"),
    let: new I.Name("let"),
    var: new I.Name("var")
  };
  class sr {
    constructor({prefixes: e, parent: t} = {}) {
      this._names = {}, this._prefixes = e, this._parent = t;
    }
    toName(e) {
      return e instanceof I.Name ? e : this.name(e);
    }
    name(e) {
      return new I.Name(this._newName(e));
    }
    _newName(e) {
      let t = this._names[e] || this._nameGroup(e);
      return `${e}${t.index++}`;
    }
    _nameGroup(e) {
      var t, r;
      if (((r = (t = this._parent) === null || t === void 0 ? void 0 : t._prefixes) === null || r === void 0 ? void 0 : r.has(e)) || this._prefixes && !this._prefixes.has(e)) throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
      return this._names[e] = {
        prefix: e,
        index: 0
      };
    }
  }
  Lr.Scope = sr;
  class nr extends I.Name {
    constructor(e, t) {
      super(t);
      this.prefix = e;
    }
    setValue(e, {property: t, itemIndex: r}) {
      this.value = e, this.scopePath = I._`.${new I.Name(t)}[${r}]`;
    }
  }
  Lr.ValueScopeName = nr;
  var Ta = I._`\n`;
  class Fr extends sr {
    constructor(e) {
      super(e);
      this._values = {}, this._scope = e.scope, this.opts = {
        ...e,
        _n: e.lines ? Ta : I.nil
      };
    }
    get() {
      return this._scope;
    }
    name(e) {
      return new nr(e, this._newName(e));
    }
    value(e, t) {
      var r;
      if (t.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let s = this.toName(e), {prefix: n} = s, o = (r = t.key) !== null && r !== void 0 ? r : t.ref, i = this._values[n];
      if (i) {
        let u = i.get(o);
        if (u) return u;
      } else i = this._values[n] = new Map;
      i.set(o, s);
      let a = this._scope[n] || (this._scope[n] = []), c = a.length;
      return a[c] = t.ref, s.setValue(t, {
        property: n,
        itemIndex: c
      }), s;
    }
    getValue(e, t) {
      let r = this._values[e];
      if (!r) return;
      return r.get(t);
    }
    scopeRefs(e, t = this._values) {
      return this._reduceValues(t, r => {
        if (r.scopePath === void 0) throw Error(`CodeGen: name "${r}" has no value`);
        return I._`${e}${r.scopePath}`;
      });
    }
    scopeCode(e = this._values, t, r) {
      return this._reduceValues(e, s => {
        if (s.value === void 0) throw Error(`CodeGen: name "${s}" has no value`);
        return s.value.code;
      }, t, r);
    }
    _reduceValues(e, t, r = {}, s) {
      let n = I.nil;
      for (let o in e) {
        let i = e[o];
        if (!i) continue;
        let a = r[o] = r[o] || new Map;
        i.forEach(c => {
          if (a.has(c)) return;
          a.set(c, yt.Started);
          let u = t(c);
          if (u) {
            let l = this.opts.es5 ? Lr.varKinds.var : Lr.varKinds.const;
            n = I._`${n}${l} ${c} = ${u};${this.opts._n}`;
          } else if (u = s === null || s === void 0 ? void 0 : s(c)) n = I._`${n}${u}${this.opts._n}`; else throw new Kr(c);
          a.set(c, yt.Completed);
        });
      }
      return n;
    }
  }
  Lr.ValueScope = Fr;
});

var bm = C(function(H) {
  Object.defineProperty(H, "__esModule", {
    value: !0
  });
  H.or = H.and = H.not = H.CodeGen = H.operators = H.varKinds = H.ValueScopeName = H.ValueScope = H.Scope = H.Name = H.regexpCode = H.stringify = H.getProperty = H.nil = H.strConcat = H.str = H._ = void 0;
  var g = it(), D = or(), me = it();
  Object.defineProperty(H, "_", {
    enumerable: !0,
    get: function() {
      return me._;
    }
  });
  Object.defineProperty(H, "str", {
    enumerable: !0,
    get: function() {
      return me.str;
    }
  });
  Object.defineProperty(H, "strConcat", {
    enumerable: !0,
    get: function() {
      return me.strConcat;
    }
  });
  Object.defineProperty(H, "nil", {
    enumerable: !0,
    get: function() {
      return me.nil;
    }
  });
  Object.defineProperty(H, "getProperty", {
    enumerable: !0,
    get: function() {
      return me.getProperty;
    }
  });
  Object.defineProperty(H, "stringify", {
    enumerable: !0,
    get: function() {
      return me.stringify;
    }
  });
  Object.defineProperty(H, "regexpCode", {
    enumerable: !0,
    get: function() {
      return me.regexpCode;
    }
  });
  Object.defineProperty(H, "Name", {
    enumerable: !0,
    get: function() {
      return me.Name;
    }
  });
  var bt = or();
  Object.defineProperty(H, "Scope", {
    enumerable: !0,
    get: function() {
      return bt.Scope;
    }
  });
  Object.defineProperty(H, "ValueScope", {
    enumerable: !0,
    get: function() {
      return bt.ValueScope;
    }
  });
  Object.defineProperty(H, "ValueScopeName", {
    enumerable: !0,
    get: function() {
      return bt.ValueScopeName;
    }
  });
  Object.defineProperty(H, "varKinds", {
    enumerable: !0,
    get: function() {
      return bt.varKinds;
    }
  });
  H.operators = {
    GT: new g._Code(">"),
    GTE: new g._Code(">="),
    LT: new g._Code("<"),
    LTE: new g._Code("<="),
    EQ: new g._Code("==="),
    NEQ: new g._Code("!=="),
    NOT: new g._Code("!"),
    OR: new g._Code("||"),
    AND: new g._Code("&&"),
    ADD: new g._Code("+")
  };
  class ye {
    optimizeNodes() {
      return this;
    }
    optimizeNames(e, t) {
      return this;
    }
  }
  class Gr extends ye {
    constructor(e, t, r) {
      super();
      this.varKind = e, this.name = t, this.rhs = r;
    }
    render({es5: e, _n: t}) {
      let r = e ? D.varKinds.var : this.varKind, s = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${r} ${this.name}${s};` + t;
    }
    optimizeNames(e, t) {
      if (!e[this.name.str]) return;
      if (this.rhs) this.rhs = ze(this.rhs, e, t);
      return this;
    }
    get names() {
      return this.rhs instanceof g._CodeOrName ? this.rhs.names : {};
    }
  }
  class cr extends ye {
    constructor(e, t, r) {
      super();
      this.lhs = e, this.rhs = t, this.sideEffects = r;
    }
    render({_n: e}) {
      return `${this.lhs} = ${this.rhs};` + e;
    }
    optimizeNames(e, t) {
      if (this.lhs instanceof g.Name && !e[this.lhs.str] && !this.sideEffects) return;
      return this.rhs = ze(this.rhs, e, t), this;
    }
    get names() {
      let e = this.lhs instanceof g.Name ? {} : {
        ...this.lhs.names
      };
      return wt(e, this.rhs);
    }
  }
  class Jr extends cr {
    constructor(e, t, r, s) {
      super(e, r, s);
      this.op = t;
    }
    render({_n: e}) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + e;
    }
  }
  class Wr extends ye {
    constructor(e) {
      super();
      this.label = e, this.names = {};
    }
    render({_n: e}) {
      return `${this.label}:` + e;
    }
  }
  class Br extends ye {
    constructor(e) {
      super();
      this.label = e, this.names = {};
    }
    render({_n: e}) {
      return `break${this.label ? ` ${this.label}` : ""};` + e;
    }
  }
  class Qr extends ye {
    constructor(e) {
      super();
      this.error = e;
    }
    render({_n: e}) {
      return `throw ${this.error};` + e;
    }
    get names() {
      return this.error.names;
    }
  }
  class Xr extends ye {
    constructor(e) {
      super();
      this.code = e;
    }
    render({_n: e}) {
      return `${this.code};` + e;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(e, t) {
      return this.code = ze(this.code, e, t), this;
    }
    get names() {
      return this.code instanceof g._CodeOrName ? this.code.names : {};
    }
  }
  class Et extends ye {
    constructor(e = []) {
      super();
      this.nodes = e;
    }
    render(e) {
      return this.nodes.reduce((t, r) => t + r.render(e), "");
    }
    optimizeNodes() {
      let {nodes: e} = this, t = e.length;
      while (t--) {
        let r = e[t].optimizeNodes();
        if (Array.isArray(r)) e.splice(t, 1, ...r); else if (r) e[t] = r; else e.splice(t, 1);
      }
      return e.length > 0 ? this : void 0;
    }
    optimizeNames(e, t) {
      let {nodes: r} = this, s = r.length;
      while (s--) {
        let n = r[s];
        if (n.optimizeNames(e, t)) continue;
        Da(e, n.names), r.splice(s, 1);
      }
      return r.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((e, t) => Ie(e, t.names), {});
    }
  }
  class _e extends Et {
    render(e) {
      return "{" + e._n + super.render(e) + "}" + e._n;
    }
  }
  class Yr extends Et {}
  class at extends _e {}
  at.kind = "else";
  class pe extends _e {
    constructor(e, t) {
      super(t);
      this.condition = e;
    }
    render(e) {
      let t = `if(${this.condition})` + super.render(e);
      if (this.else) t += "else " + this.else.render(e);
      return t;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let e = this.condition;
      if (e === !0) return this.nodes;
      let t = this.else;
      if (t) {
        let r = t.optimizeNodes();
        t = this.else = Array.isArray(r) ? new at(r) : r;
      }
      if (t) {
        if (e === !1) return t instanceof pe ? t : t.nodes;
        if (this.nodes.length) return this;
        return new pe(ss(e), t instanceof pe ? [ t ] : t.nodes);
      }
      if (e === !1 || !this.nodes.length) return;
      return this;
    }
    optimizeNames(e, t) {
      var r;
      if (this.else = (r = this.else) === null || r === void 0 ? void 0 : r.optimizeNames(e, t), 
      !(super.optimizeNames(e, t) || this.else)) return;
      return this.condition = ze(this.condition, e, t), this;
    }
    get names() {
      let e = super.names;
      if (wt(e, this.condition), this.else) Ie(e, this.else.names);
      return e;
    }
  }
  pe.kind = "if";
  class Ve extends _e {}
  Ve.kind = "for";
  class Zr extends Ve {
    constructor(e) {
      super();
      this.iteration = e;
    }
    render(e) {
      return `for(${this.iteration})` + super.render(e);
    }
    optimizeNames(e, t) {
      if (!super.optimizeNames(e, t)) return;
      return this.iteration = ze(this.iteration, e, t), this;
    }
    get names() {
      return Ie(super.names, this.iteration.names);
    }
  }
  class es extends Ve {
    constructor(e, t, r, s) {
      super();
      this.varKind = e, this.name = t, this.from = r, this.to = s;
    }
    render(e) {
      let t = e.es5 ? D.varKinds.var : this.varKind, {name: r, from: s, to: n} = this;
      return `for(${t} ${r}=${s}; ${r}<${n}; ${r}++)` + super.render(e);
    }
    get names() {
      let e = wt(super.names, this.from);
      return wt(e, this.to);
    }
  }
  class ir extends Ve {
    constructor(e, t, r, s) {
      super();
      this.loop = e, this.varKind = t, this.name = r, this.iterable = s;
    }
    render(e) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
    }
    optimizeNames(e, t) {
      if (!super.optimizeNames(e, t)) return;
      return this.iterable = ze(this.iterable, e, t), this;
    }
    get names() {
      return Ie(super.names, this.iterable.names);
    }
  }
  class _t extends _e {
    constructor(e, t, r) {
      super();
      this.name = e, this.args = t, this.async = r;
    }
    render(e) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
    }
  }
  _t.kind = "func";
  class gt extends Et {
    render(e) {
      return "return " + super.render(e);
    }
  }
  gt.kind = "return";
  class ts extends _e {
    render(e) {
      let t = "try" + super.render(e);
      if (this.catch) t += this.catch.render(e);
      if (this.finally) t += this.finally.render(e);
      return t;
    }
    optimizeNodes() {
      var e, t;
      return super.optimizeNodes(), (e = this.catch) === null || e === void 0 || e.optimizeNodes(), 
      (t = this.finally) === null || t === void 0 || t.optimizeNodes(), this;
    }
    optimizeNames(e, t) {
      var r, s;
      return super.optimizeNames(e, t), (r = this.catch) === null || r === void 0 || r.optimizeNames(e, t), 
      (s = this.finally) === null || s === void 0 || s.optimizeNames(e, t), this;
    }
    get names() {
      let e = super.names;
      if (this.catch) Ie(e, this.catch.names);
      if (this.finally) Ie(e, this.finally.names);
      return e;
    }
  }
  class $t extends _e {
    constructor(e) {
      super();
      this.error = e;
    }
    render(e) {
      return `catch(${this.error})` + super.render(e);
    }
  }
  $t.kind = "catch";
  class vt extends _e {
    render(e) {
      return "finally" + super.render(e);
    }
  }
  vt.kind = "finally";
  class rs {
    constructor(e, t = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
        ...t,
        _n: t.lines ? `\n` : ""
      }, this._extScope = e, this._scope = new D.Scope({
        parent: e
      }), this._nodes = [ new Yr ];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(e) {
      return this._scope.name(e);
    }
    scopeName(e) {
      return this._extScope.name(e);
    }
    scopeValue(e, t) {
      let r = this._extScope.value(e, t);
      return (this._values[r.prefix] || (this._values[r.prefix] = new Set)).add(r), r;
    }
    getScopeValue(e, t) {
      return this._extScope.getValue(e, t);
    }
    scopeRefs(e) {
      return this._extScope.scopeRefs(e, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(e, t, r, s) {
      let n = this._scope.toName(t);
      if (r !== void 0 && s) this._constants[n.str] = r;
      return this._leafNode(new Gr(e, n, r)), n;
    }
    const(e, t, r) {
      return this._def(D.varKinds.const, e, t, r);
    }
    let(e, t, r) {
      return this._def(D.varKinds.let, e, t, r);
    }
    var(e, t, r) {
      return this._def(D.varKinds.var, e, t, r);
    }
    assign(e, t, r) {
      return this._leafNode(new cr(e, t, r));
    }
    add(e, t) {
      return this._leafNode(new Jr(e, H.operators.ADD, t));
    }
    code(e) {
      if (typeof e == "function") e(); else if (e !== g.nil) this._leafNode(new Xr(e));
      return this;
    }
    object(...e) {
      let t = [ "{" ];
      for (let [r, s] of e) {
        if (t.length > 1) t.push(",");
        if (t.push(r), r !== s || this.opts.es5) t.push(":"), g.addCodeArg(t, s);
      }
      return t.push("}"), new g._Code(t);
    }
    if(e, t, r) {
      if (this._blockNode(new pe(e)), t && r) this.code(t).else().code(r).endIf(); else if (t) this.code(t).endIf(); else if (r) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(e) {
      return this._elseNode(new pe(e));
    }
    else() {
      return this._elseNode(new at);
    }
    endIf() {
      return this._endBlockNode(pe, at);
    }
    _for(e, t) {
      if (this._blockNode(e), t) this.code(t).endFor();
      return this;
    }
    for(e, t) {
      return this._for(new Zr(e), t);
    }
    forRange(e, t, r, s, n = (this.opts.es5 ? D.varKinds.var : D.varKinds.let)) {
      let o = this._scope.toName(e);
      return this._for(new es(n, o, t, r), () => s(o));
    }
    forOf(e, t, r, s = D.varKinds.const) {
      let n = this._scope.toName(e);
      if (this.opts.es5) {
        let o = t instanceof g.Name ? t : this.var("_arr", t);
        return this.forRange("_i", 0, g._`${o}.length`, i => {
          this.var(n, g._`${o}[${i}]`), r(n);
        });
      }
      return this._for(new ir("of", s, n, t), () => r(n));
    }
    forIn(e, t, r, s = (this.opts.es5 ? D.varKinds.var : D.varKinds.const)) {
      if (this.opts.ownProperties) return this.forOf(e, g._`Object.keys(${t})`, r);
      let n = this._scope.toName(e);
      return this._for(new ir("in", s, n, t), () => r(n));
    }
    endFor() {
      return this._endBlockNode(Ve);
    }
    label(e) {
      return this._leafNode(new Wr(e));
    }
    break(e) {
      return this._leafNode(new Br(e));
    }
    return(e) {
      let t = new gt;
      if (this._blockNode(t), this.code(e), t.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(gt);
    }
    try(e, t, r) {
      if (!t && !r) throw Error('CodeGen: "try" without "catch" and "finally"');
      let s = new ts;
      if (this._blockNode(s), this.code(e), t) {
        let n = this.name("e");
        this._currNode = s.catch = new $t(n), t(n);
      }
      if (r) this._currNode = s.finally = new vt, this.code(r);
      return this._endBlockNode($t, vt);
    }
    throw(e) {
      return this._leafNode(new Qr(e));
    }
    block(e, t) {
      if (this._blockStarts.push(this._nodes.length), e) this.code(e).endBlock(t);
      return this;
    }
    endBlock(e) {
      let t = this._blockStarts.pop();
      if (t === void 0) throw Error("CodeGen: not in self-balancing block");
      let r = this._nodes.length - t;
      if (r < 0 || e !== void 0 && r !== e) throw Error(`CodeGen: wrong number of nodes: ${r} vs ${e} expected`);
      return this._nodes.length = t, this;
    }
    func(e, t = g.nil, r, s) {
      if (this._blockNode(new _t(e, t, r)), s) this.code(s).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(_t);
    }
    optimize(e = 1) {
      while (e-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(e) {
      return this._currNode.nodes.push(e), this;
    }
    _blockNode(e) {
      this._currNode.nodes.push(e), this._nodes.push(e);
    }
    _endBlockNode(e, t) {
      let r = this._currNode;
      if (r instanceof e || t && r instanceof t) return this._nodes.pop(), this;
      throw Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
    }
    _elseNode(e) {
      let t = this._currNode;
      if (!(t instanceof pe)) throw Error('CodeGen: "else" without "if"');
      return this._currNode = t.else = e, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let e = this._nodes;
      return e[e.length - 1];
    }
    set _currNode(e) {
      let t = this._nodes;
      t[t.length - 1] = e;
    }
  }
  H.CodeGen = rs;
  function Ie(e, t) {
    for (let r in t) e[r] = (e[r] || 0) + (t[r] || 0);
    return e;
  }
  function wt(e, t) {
    return t instanceof g._CodeOrName ? Ie(e, t.names) : e;
  }
  function ze(e, t, r) {
    if (e instanceof g.Name) return s(e);
    if (!n(e)) return e;
    return new g._Code(e._items.reduce((o, i) => {
      if (i instanceof g.Name) i = s(i);
      if (i instanceof g._Code) o.push(...i._items); else o.push(i);
      return o;
    }, []));
    function s(o) {
      let i = r[o.str];
      if (i === void 0 || t[o.str] !== 1) return o;
      return delete t[o.str], i;
    }
    function n(o) {
      return o instanceof g._Code && o._items.some(i => i instanceof g.Name && t[i.str] === 1 && r[i.str] !== void 0);
    }
  }
  function Da(e, t) {
    for (let r in t) e[r] = (e[r] || 0) - (t[r] || 0);
  }
  function ss(e) {
    return typeof e == "boolean" || typeof e == "number" || e === null ? !e : g._`!${ar(e)}`;
  }
  H.not = ss;
  var Va = ns(H.operators.AND);
  function za(...e) {
    return e.reduce(Va);
  }
  H.and = za;
  var Ua = ns(H.operators.OR);
  function Ka(...e) {
    return e.reduce(Ua);
  }
  H.or = Ka;
  function ns(e) {
    return (t, r) => t === g.nil ? r : r === g.nil ? t : g._`${ar(t)} ${e} ${ar(r)}`;
  }
  function ar(e) {
    return e instanceof g.Name ? e : g._`(${e})`;
  }
});

var M_ = C(function(hs) {
  Object.defineProperty(hs, "__esModule", {
    value: !0
  });
  hs.checkStrictMode = hs.getErrorPath = hs.Type = hs.useFunc = hs.setEvaluated = hs.evaluatedPropsToName = hs.mergeEvaluated = hs.eachItem = hs.unescapeJsonPointer = hs.escapeJsonPointer = hs.escapeFragment = hs.unescapeFragment = hs.schemaRefOrVal = hs.schemaHasRulesButRef = hs.schemaHasRules = hs.checkUnknownRules = hs.alwaysValidSchema = hs.toHash = void 0;
  var E = bm(), cs = it();
  function Ga(e) {
    let t = {};
    for (let r of e) t[r] = !0;
    return t;
  }
  hs.toHash = Ga;
  function Ja(e, t) {
    if (typeof t == "boolean") return t;
    if (Object.keys(t).length === 0) return !0;
    return us(e, t), !ls(t, e.self.RULES.all);
  }
  hs.alwaysValidSchema = Ja;
  function us(e, t = e.schema) {
    let {opts: r, self: s} = e;
    if (!r.strictSchema) return;
    if (typeof t === "boolean") return;
    let n = s.RULES.keywords;
    for (let o in t) if (!n[o]) ps(e, `unknown keyword: "${o}"`);
  }
  hs.checkUnknownRules = us;
  function ls(e, t) {
    if (typeof e == "boolean") return !e;
    for (let r in e) if (t[r]) return !0;
    return !1;
  }
  hs.schemaHasRules = ls;
  function Wa(e, t) {
    if (typeof e == "boolean") return !e;
    for (let r in e) if (r !== "$ref" && t.all[r]) return !0;
    return !1;
  }
  hs.schemaHasRulesButRef = Wa;
  function Ba({topSchemaRef: e, schemaPath: t}, r, s, n) {
    if (!n) {
      if (typeof r == "number" || typeof r == "boolean") return r;
      if (typeof r == "string") return E._`${r}`;
    }
    return E._`${e}${t}${E.getProperty(s)}`;
  }
  hs.schemaRefOrVal = Ba;
  function Qa(e) {
    return ds(decodeURIComponent(e));
  }
  hs.unescapeFragment = Qa;
  function Xa(e) {
    return encodeURIComponent(lr(e));
  }
  hs.escapeFragment = Xa;
  function lr(e) {
    if (typeof e == "number") return `${e}`;
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  hs.escapeJsonPointer = lr;
  function ds(e) {
    return e.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  hs.unescapeJsonPointer = ds;
  function Ya(e, t) {
    if (Array.isArray(e)) for (let r of e) t(r); else t(e);
  }
  hs.eachItem = Ya;
  function is({mergeNames: e, mergeToName: t, mergeValues: r, resultToName: s}) {
    return (n, o, i, a) => {
      let c = i === void 0 ? o : i instanceof E.Name ? (o instanceof E.Name ? e(n, o, i) : t(n, o, i), 
      i) : o instanceof E.Name ? (t(n, i, o), o) : r(o, i);
      return a === E.Name && !(c instanceof E.Name) ? s(n, c) : c;
    };
  }
  hs.mergeEvaluated = {
    props: is({
      mergeNames: (e, t, r) => e.if(E._`${r} !== true && ${t} !== undefined`, () => {
        e.if(E._`${t} === true`, () => e.assign(r, !0), () => e.assign(r, E._`${r} || {}`).code(E._`Object.assign(${r}, ${t})`));
      }),
      mergeToName: (e, t, r) => e.if(E._`${r} !== true`, () => {
        if (t === !0) e.assign(r, !0); else e.assign(r, E._`${r} || {}`), dr(e, r, t);
      }),
      mergeValues: (e, t) => e === !0 ? !0 : {
        ...e,
        ...t
      },
      resultToName: fs
    }),
    items: is({
      mergeNames: (e, t, r) => e.if(E._`${r} !== true && ${t} !== undefined`, () => e.assign(r, E._`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`)),
      mergeToName: (e, t, r) => e.if(E._`${r} !== true`, () => e.assign(r, t === !0 ? !0 : E._`${r} > ${t} ? ${r} : ${t}`)),
      mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
      resultToName: (e, t) => e.var("items", t)
    })
  };
  function fs(e, t) {
    if (t === !0) return e.var("props", !0);
    let r = e.var("props", E._`{}`);
    if (t !== void 0) dr(e, r, t);
    return r;
  }
  hs.evaluatedPropsToName = fs;
  function dr(e, t, r) {
    Object.keys(r).forEach(s => e.assign(E._`${t}${E.getProperty(s)}`, !0));
  }
  hs.setEvaluated = dr;
  var as = {};
  function Za(e, t) {
    return e.scopeValue("func", {
      ref: t,
      code: as[t.code] || (as[t.code] = new cs._Code(t.code))
    });
  }
  hs.useFunc = Za;
  var ur;
  (function(e) {
    e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
  })(ur || (hs.Type = ur = {}));
  function ec(e, t, r) {
    if (e instanceof E.Name) {
      let s = t === ur.Num;
      return r ? s ? E._`"[" + ${e} + "]"` : E._`"['" + ${e} + "']"` : s ? E._`"/" + ${e}` : E._`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return r ? E.getProperty(e).toString() : "/" + lr(e);
  }
  hs.getErrorPath = ec;
  function ps(e, t, r = e.opts.strictSchema) {
    if (!r) return;
    if (t = `strict mode: ${t}`, r === !0) throw Error(t);
    e.self.logger.warn(t);
  }
  hs.checkStrictMode = ps;
});

var Qbe = C(function(ys) {
  Object.defineProperty(ys, "__esModule", {
    value: !0
  });
  var x = bm(), gc = {
    data: new x.Name("data"),
    valCxt: new x.Name("valCxt"),
    instancePath: new x.Name("instancePath"),
    parentData: new x.Name("parentData"),
    parentDataProperty: new x.Name("parentDataProperty"),
    rootData: new x.Name("rootData"),
    dynamicAnchors: new x.Name("dynamicAnchors"),
    vErrors: new x.Name("vErrors"),
    errors: new x.Name("errors"),
    this: new x.Name("this"),
    self: new x.Name("self"),
    scope: new x.Name("scope"),
    json: new x.Name("json"),
    jsonPos: new x.Name("jsonPos"),
    jsonLen: new x.Name("jsonLen"),
    jsonPart: new x.Name("jsonPart")
  };
  ys.default = gc;
});

var ct = C(function(vs) {
  Object.defineProperty(vs, "__esModule", {
    value: !0
  });
  vs.extendErrors = vs.resetErrorsCount = vs.reportExtraError = vs.reportError = vs.keyword$DataError = vs.keywordError = void 0;
  var w = bm(), ge = M_(), L = Qbe();
  vs.keywordError = {
    message: ({keyword: e}) => w.str`must pass "${e}" keyword validation`
  };
  vs.keyword$DataError = {
    message: ({keyword: e, schemaType: t}) => t ? w.str`"${e}" keyword must be ${t} ($data)` : w.str`"${e}" keyword is invalid ($data)`
  };
  function vc(e, t = vs.keywordError, r, s) {
    let {it: n} = e, {gen: o, compositeRule: i, allErrors: a} = n, c = $s(e, t, r);
    if (s !== null && s !== void 0 ? s : i || a) _s(o, c); else gs(n, w._`[${c}]`);
  }
  vs.reportError = vc;
  function wc(e, t = vs.keywordError, r) {
    let {it: s} = e, {gen: n, compositeRule: o, allErrors: i} = s, a = $s(e, t, r);
    if (_s(n, a), !(o || i)) gs(s, L.default.vErrors);
  }
  vs.reportExtraError = wc;
  function bc(e, t) {
    e.assign(L.default.errors, t), e.if(w._`${L.default.vErrors} !== null`, () => e.if(t, () => e.assign(w._`${L.default.vErrors}.length`, t), () => e.assign(L.default.vErrors, null)));
  }
  vs.resetErrorsCount = bc;
  function Ec({gen: e, keyword: t, schemaValue: r, data: s, errsCount: n, it: o}) {
    if (n === void 0) throw Error("ajv implementation error");
    let i = e.name("err");
    e.forRange("i", n, L.default.errors, a => {
      if (e.const(i, w._`${L.default.vErrors}[${a}]`), e.if(w._`${i}.instancePath === undefined`, () => e.assign(w._`${i}.instancePath`, w.strConcat(L.default.instancePath, o.errorPath))), 
      e.assign(w._`${i}.schemaPath`, w.str`${o.errSchemaPath}/${t}`), o.opts.verbose) e.assign(w._`${i}.schema`, r), 
      e.assign(w._`${i}.data`, s);
    });
  }
  vs.extendErrors = Ec;
  function _s(e, t) {
    let r = e.const("err", t);
    e.if(w._`${L.default.vErrors} === null`, () => e.assign(L.default.vErrors, w._`[${r}]`), w._`${L.default.vErrors}.push(${r})`), 
    e.code(w._`${L.default.errors}++`);
  }
  function gs(e, t) {
    let {gen: r, validateName: s, schemaEnv: n} = e;
    if (n.$async) r.throw(w._`new ${e.ValidationError}(${t})`); else r.assign(w._`${s}.errors`, t), 
    r.return(!1);
  }
  var Te = {
    keyword: new w.Name("keyword"),
    schemaPath: new w.Name("schemaPath"),
    params: new w.Name("params"),
    propertyName: new w.Name("propertyName"),
    message: new w.Name("message"),
    schema: new w.Name("schema"),
    parentSchema: new w.Name("parentSchema")
  };
  function $s(e, t, r) {
    let {createErrors: s} = e.it;
    if (s === !1) return w._`{}`;
    return Sc(e, t, r);
  }
  function Sc(e, t, r = {}) {
    let {gen: s, it: n} = e, o = [ Pc(n, r), Nc(e, r) ];
    return kc(e, t, o), s.object(...o);
  }
  function Pc({errorPath: e}, {instancePath: t}) {
    let r = t ? w.str`${e}${ge.getErrorPath(t, ge.Type.Str)}` : e;
    return [ L.default.instancePath, w.strConcat(L.default.instancePath, r) ];
  }
  function Nc({keyword: e, it: {errSchemaPath: t}}, {schemaPath: r, parentSchema: s}) {
    let n = s ? t : w.str`${t}/${e}`;
    if (r) n = w.str`${n}${ge.getErrorPath(r, ge.Type.Str)}`;
    return [ Te.schemaPath, n ];
  }
  function kc(e, {params: t, message: r}, s) {
    let {keyword: n, data: o, schemaValue: i, it: a} = e, {opts: c, propertyName: u, topSchemaRef: l, schemaPath: f} = a;
    if (s.push([ Te.keyword, n ], [ Te.params, typeof t == "function" ? t(e) : t || w._`{}` ]), 
    c.messages) s.push([ Te.message, typeof r == "function" ? r(e) : r ]);
    if (c.verbose) s.push([ Te.schema, i ], [ Te.parentSchema, w._`${l}${f}` ], [ L.default.data, o ]);
    if (u) s.push([ Te.propertyName, u ]);
  }
});

var ks = C(function(Ps) {
  Object.defineProperty(Ps, "__esModule", {
    value: !0
  });
  Ps.boolOrEmptySchema = Ps.topBoolOrEmptySchema = void 0;
  var bs = ct(), Es = bm(), Rc = Qbe(), Ic = {
    message: "boolean schema is false"
  };
  function Tc(e) {
    let {gen: t, schema: r, validateName: s} = e;
    if (r === !1) Ss(e, !1); else if (typeof r == "object" && r.$async === !0) t.return(Rc.default.data); else t.assign(Es._`${s}.errors`, null), 
    t.return(!0);
  }
  Ps.topBoolOrEmptySchema = Tc;
  function Cc(e, t) {
    let {gen: r, schema: s} = e;
    if (s === !1) r.var(t, !1), Ss(e); else r.var(t, !0);
  }
  Ps.boolOrEmptySchema = Cc;
  function Ss(e, t) {
    let {gen: r, data: s} = e;
    bs.reportError({
      gen: r,
      keyword: "false schema",
      data: s,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: e
    }, Ic, void 0, t);
  }
});

var pr = C(function(qs) {
  Object.defineProperty(qs, "__esModule", {
    value: !0
  });
  qs.getRules = qs.isJSONType = void 0;
  var Ac = [ "string", "number", "integer", "boolean", "null", "object", "array" ], Dc = new Set(Ac);
  function Vc(e) {
    return typeof e == "string" && Dc.has(e);
  }
  qs.isJSONType = Vc;
  function zc() {
    let e = {
      number: {
        type: "number",
        rules: []
      },
      string: {
        type: "string",
        rules: []
      },
      array: {
        type: "array",
        rules: []
      },
      object: {
        type: "object",
        rules: []
      }
    };
    return {
      types: {
        ...e,
        integer: !0,
        boolean: !0,
        null: !0
      },
      rules: [ {
        rules: []
      }, e.number, e.string, e.array, e.object ],
      post: {
        rules: []
      },
      all: {},
      keywords: {}
    };
  }
  qs.getRules = zc;
});

var hr = C(function(Rs) {
  Object.defineProperty(Rs, "__esModule", {
    value: !0
  });
  Rs.shouldUseRule = Rs.shouldUseGroup = Rs.schemaHasRulesForType = void 0;
  function Kc({schema: e, self: t}, r) {
    let s = t.RULES.types[r];
    return s && s !== !0 && js(e, s);
  }
  Rs.schemaHasRulesForType = Kc;
  function js(e, t) {
    return t.rules.some(r => xs(e, r));
  }
  Rs.shouldUseGroup = js;
  function xs(e, t) {
    var r;
    return e[t.keyword] !== void 0 || ((r = t.definition.implements) === null || r === void 0 ? void 0 : r.some(s => e[s] !== void 0));
  }
  Rs.shouldUseRule = xs;
});

var ut = C(function(Vs) {
  Object.defineProperty(Vs, "__esModule", {
    value: !0
  });
  Vs.reportTypeError = Vs.checkDataTypes = Vs.checkDataType = Vs.coerceAndCheckDataType = Vs.getJSONTypes = Vs.getSchemaTypes = Vs.DataType = void 0;
  var Ts = pr(), Cs = hr(), Ms = ct(), m = bm(), Pt = M_(), Ue;
  (function(e) {
    e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
  })(Ue || (Vs.DataType = Ue = {}));
  function Hc(e) {
    let t = As(e.type);
    if (t.includes("null")) {
      if (e.nullable === !1) throw Error("type: null contradicts nullable: false");
    } else {
      if (!t.length && e.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
      if (e.nullable === !0) t.push("null");
    }
    return t;
  }
  Vs.getSchemaTypes = Hc;
  function As(e) {
    let t = Array.isArray(e) ? e : e ? [ e ] : [];
    if (t.every(Ts.isJSONType)) return t;
    throw Error("type must be JSONType or JSONType[]: " + t.join(","));
  }
  Vs.getJSONTypes = As;
  function Gc(e, t) {
    let {gen: r, data: s, opts: n} = e, o = Jc(t, n.coerceTypes), i = t.length > 0 && !(o.length === 0 && t.length === 1 && Cs.schemaHasRulesForType(e, t[0]));
    if (i) {
      let a = yr(t, s, n.strictNumbers, Ue.Wrong);
      r.if(a, () => {
        if (o.length) Wc(e, t, o); else _r(e);
      });
    }
    return i;
  }
  Vs.coerceAndCheckDataType = Gc;
  var Ds = new Set([ "string", "number", "integer", "boolean", "null" ]);
  function Jc(e, t) {
    return t ? e.filter(r => Ds.has(r) || t === "array" && r === "array") : [];
  }
  function Wc(e, t, r) {
    let {gen: s, data: n, opts: o} = e, i = s.let("dataType", m._`typeof ${n}`), a = s.let("coerced", m._`undefined`);
    if (o.coerceTypes === "array") s.if(m._`${i} == 'object' && Array.isArray(${n}) && ${n}.length == 1`, () => s.assign(n, m._`${n}[0]`).assign(i, m._`typeof ${n}`).if(yr(t, n, o.strictNumbers), () => s.assign(a, n)));
    s.if(m._`${a} !== undefined`);
    for (let u of r) if (Ds.has(u) || u === "array" && o.coerceTypes === "array") c(u);
    s.else(), _r(e), s.endIf(), s.if(m._`${a} !== undefined`, () => {
      s.assign(n, a), Bc(e, a);
    });
    function c(u) {
      switch (u) {
       case "string":
        s.elseIf(m._`${i} == "number" || ${i} == "boolean"`).assign(a, m._`"" + ${n}`).elseIf(m._`${n} === null`).assign(a, m._`""`);
        return;

       case "number":
        s.elseIf(m._`${i} == "boolean" || ${n} === null
              || (${i} == "string" && ${n} && ${n} == +${n})`).assign(a, m._`+${n}`);
        return;

       case "integer":
        s.elseIf(m._`${i} === "boolean" || ${n} === null
              || (${i} === "string" && ${n} && ${n} == +${n} && !(${n} % 1))`).assign(a, m._`+${n}`);
        return;

       case "boolean":
        s.elseIf(m._`${n} === "false" || ${n} === 0 || ${n} === null`).assign(a, !1).elseIf(m._`${n} === "true" || ${n} === 1`).assign(a, !0);
        return;

       case "null":
        s.elseIf(m._`${n} === "" || ${n} === 0 || ${n} === false`), s.assign(a, null);
        return;

       case "array":
        s.elseIf(m._`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${n} === null`).assign(a, m._`[${n}]`);
      }
    }
  }
  function Bc({gen: e, parentData: t, parentDataProperty: r}, s) {
    e.if(m._`${t} !== undefined`, () => e.assign(m._`${t}[${r}]`, s));
  }
  function mr(e, t, r, s = Ue.Correct) {
    let n = s === Ue.Correct ? m.operators.EQ : m.operators.NEQ, o;
    switch (e) {
     case "null":
      return m._`${t} ${n} null`;

     case "array":
      o = m._`Array.isArray(${t})`;
      break;

     case "object":
      o = m._`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;

     case "integer":
      o = i(m._`!(${t} % 1) && !isNaN(${t})`);
      break;

     case "number":
      o = i();
      break;

     default:
      return m._`typeof ${t} ${n} ${e}`;
    }
    return s === Ue.Correct ? o : m.not(o);
    function i(a = m.nil) {
      return m.and(m._`typeof ${t} == "number"`, a, r ? m._`isFinite(${t})` : m.nil);
    }
  }
  Vs.checkDataType = mr;
  function yr(e, t, r, s) {
    if (e.length === 1) return mr(e[0], t, r, s);
    let n, o = Pt.toHash(e);
    if (o.array && o.object) {
      let i = m._`typeof ${t} != "object"`;
      n = o.null ? i : m._`!${t} || ${i}`, delete o.null, delete o.array, delete o.object;
    } else n = m.nil;
    if (o.number) delete o.integer;
    for (let i in o) n = m.and(n, mr(i, t, r, s));
    return n;
  }
  Vs.checkDataTypes = yr;
  var Qc = {
    message: ({schema: e}) => `must be ${e}`,
    params: ({schema: e, schemaValue: t}) => typeof e == "string" ? m._`{type: ${e}}` : m._`{type: ${t}}`
  };
  function _r(e) {
    let t = Xc(e);
    Ms.reportError(t, Qc);
  }
  Vs.reportTypeError = _r;
  function Xc(e) {
    let {gen: t, data: r, schema: s} = e, n = Pt.schemaRefOrVal(e, s, "type");
    return {
      gen: t,
      keyword: "type",
      data: r,
      schema: s.type,
      schemaCode: n,
      schemaValue: n,
      parentSchema: s,
      params: {},
      it: e
    };
  }
});

var Hs = C(function(Fs) {
  Object.defineProperty(Fs, "__esModule", {
    value: !0
  });
  Fs.assignDefaults = void 0;
  var B = bm(), Ks = M_();
  function nu(e, t) {
    let {properties: r, items: s} = e.schema;
    if (t === "object" && r) for (let n in r) Us(e, n, r[n].default); else if (t === "array" && Array.isArray(s)) s.forEach((n, o) => Us(e, o, n.default));
  }
  Fs.assignDefaults = nu;
  function Us(e, t, r) {
    let {gen: s, compositeRule: n, data: o, opts: i} = e;
    if (r === void 0) return;
    let a = B._`${o}${B.getProperty(t)}`;
    if (n) {
      Ks.checkStrictMode(e, `default is ignored for: ${a}`);
      return;
    }
    let c = B._`${a} === undefined`;
    if (i.useDefaults === "empty") c = B._`${c} || ${a} === null || ${a} === ""`;
    s.if(c, B._`${a} = ${B.stringify(r)}`);
  }
});

var Q = C(function(Bs) {
  Object.defineProperty(Bs, "__esModule", {
    value: !0
  });
  Bs.validateUnion = Bs.validateArray = Bs.usePattern = Bs.callValidateCode = Bs.schemaProperties = Bs.allSchemaProperties = Bs.noPropertyInData = Bs.propertyInData = Bs.isOwnProperty = Bs.hasPropFunc = Bs.reportMissingProp = Bs.checkMissingProp = Bs.checkReportMissingProp = void 0;
  var S = bm(), Ke = M_(), $e = Qbe(), Gs = M_();
  function ou(e, t) {
    let {gen: r, data: s, it: n} = e;
    r.if($r(r, s, t, n.opts.ownProperties), () => {
      e.setParams({
        missingProperty: S._`${t}`
      }, !0), e.error();
    });
  }
  Bs.checkReportMissingProp = ou;
  function iu({gen: e, data: t, it: {opts: r}}, s, n) {
    return S.or(...s.map(o => S.and($r(e, t, o, r.ownProperties), S._`${n} = ${o}`)));
  }
  Bs.checkMissingProp = iu;
  function au(e, t) {
    e.setParams({
      missingProperty: t
    }, !0), e.error();
  }
  Bs.reportMissingProp = au;
  function Js(e) {
    return e.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: S._`Object.prototype.hasOwnProperty`
    });
  }
  Bs.hasPropFunc = Js;
  function gr(e, t, r) {
    return S._`${Js(e)}.call(${t}, ${r})`;
  }
  Bs.isOwnProperty = gr;
  function cu(e, t, r, s) {
    let n = S._`${t}${S.getProperty(r)} !== undefined`;
    return s ? S._`${n} && ${gr(e, t, r)}` : n;
  }
  Bs.propertyInData = cu;
  function $r(e, t, r, s) {
    let n = S._`${t}${S.getProperty(r)} === undefined`;
    return s ? S.or(n, S.not(gr(e, t, r))) : n;
  }
  Bs.noPropertyInData = $r;
  function Ws(e) {
    return e ? Object.keys(e).filter(t => t !== "__proto__") : [];
  }
  Bs.allSchemaProperties = Ws;
  function uu(e, t) {
    return Ws(t).filter(r => !Ke.alwaysValidSchema(e, t[r]));
  }
  Bs.schemaProperties = uu;
  function lu({schemaCode: e, data: t, it: {gen: r, topSchemaRef: s, schemaPath: n, errorPath: o}, it: i}, a, c, u) {
    let l = u ? S._`${e}, ${t}, ${s}${n}` : t, f = [ [ $e.default.instancePath, S.strConcat($e.default.instancePath, o) ], [ $e.default.parentData, i.parentData ], [ $e.default.parentDataProperty, i.parentDataProperty ], [ $e.default.rootData, $e.default.rootData ] ];
    if (i.opts.dynamicRef) f.push([ $e.default.dynamicAnchors, $e.default.dynamicAnchors ]);
    let b = S._`${l}, ${r.object(...f)}`;
    return c !== S.nil ? S._`${a}.call(${c}, ${b})` : S._`${a}(${b})`;
  }
  Bs.callValidateCode = lu;
  var du = S._`new RegExp`;
  function fu({gen: e, it: {opts: t}}, r) {
    let s = t.unicodeRegExp ? "u" : "", {regExp: n} = t.code, o = n(r, s);
    return e.scopeValue("pattern", {
      key: o.toString(),
      ref: o,
      code: S._`${n.code === "new RegExp" ? du : Gs.useFunc(e, n)}(${r}, ${s})`
    });
  }
  Bs.usePattern = fu;
  function pu(e) {
    let {gen: t, data: r, keyword: s, it: n} = e, o = t.name("valid");
    if (n.allErrors) {
      let a = t.let("valid", !0);
      return i(() => t.assign(a, !1)), a;
    }
    return t.var(o, !0), i(() => t.break()), o;
    function i(a) {
      let c = t.const("len", S._`${r}.length`);
      t.forRange("i", 0, c, u => {
        e.subschema({
          keyword: s,
          dataProp: u,
          dataPropType: Ke.Type.Num
        }, o), t.if(S.not(o), a);
      });
    }
  }
  Bs.validateArray = pu;
  function hu(e) {
    let {gen: t, schema: r, keyword: s, it: n} = e;
    if (!Array.isArray(r)) throw Error("ajv implementation error");
    if (r.some(c => Ke.alwaysValidSchema(n, c)) && !n.opts.unevaluated) return;
    let i = t.let("valid", !1), a = t.name("_valid");
    t.block(() => r.forEach((c, u) => {
      let l = e.subschema({
        keyword: s,
        schemaProp: u,
        compositeRule: !0
      }, a);
      if (t.assign(i, S._`${i} || ${a}`), !e.mergeValidEvaluated(l, a)) t.if(S.not(i));
    })), e.result(i, () => e.reset(), () => e.error(!0));
  }
  Bs.validateUnion = hu;
});

var sn = C(function(tn) {
  Object.defineProperty(tn, "__esModule", {
    value: !0
  });
  tn.validateKeywordUsage = tn.validSchemaType = tn.funcKeywordCode = tn.macroKeywordCode = void 0;
  var R = bm(), Ce = Qbe(), Ys = Q(), Zs = ct();
  function ku(e, t) {
    let {gen: r, keyword: s, schema: n, parentSchema: o, it: i} = e, a = t.macro.call(i.self, n, o, i), c = en(r, s, a);
    if (i.opts.validateSchema !== !1) i.self.validateSchema(a, !0);
    let u = r.name("valid");
    e.subschema({
      schema: a,
      schemaPath: R.nil,
      errSchemaPath: `${i.errSchemaPath}/${s}`,
      topSchemaRef: c,
      compositeRule: !0
    }, u), e.pass(u, () => e.error(!0));
  }
  tn.macroKeywordCode = ku;
  function qu(e, t) {
    var r;
    let {gen: s, keyword: n, schema: o, parentSchema: i, $data: a, it: c} = e;
    ju(c, t);
    let u = !a && t.compile ? t.compile.call(c.self, o, i, c) : t.validate, l = en(s, n, u), f = s.let("valid");
    e.block$data(f, b), e.ok((r = t.valid) !== null && r !== void 0 ? r : f);
    function b() {
      if (t.errors === !1) {
        if (p(), t.modifying) Xs(e);
        y(() => e.error());
      } else {
        let v = t.async ? _() : h();
        if (t.modifying) Xs(e);
        y(() => Ou(e, v));
      }
    }
    function _() {
      let v = s.let("ruleErrs", null);
      return s.try(() => p(R._`await `), O => s.assign(f, !1).if(R._`${O} instanceof ${c.ValidationError}`, () => s.assign(v, R._`${O}.errors`), () => s.throw(O))), 
      v;
    }
    function h() {
      let v = R._`${l}.errors`;
      return s.assign(v, null), p(R.nil), v;
    }
    function p(v = (t.async ? R._`await ` : R.nil)) {
      let O = c.opts.passContext ? Ce.default.this : Ce.default.self, q = !("compile" in t && !a || t.schema === !1);
      s.assign(f, R._`${v}${Ys.callValidateCode(e, l, O, q)}`, t.modifying);
    }
    function y(v) {
      var O;
      s.if(R.not((O = t.valid) !== null && O !== void 0 ? O : f), v);
    }
  }
  tn.funcKeywordCode = qu;
  function Xs(e) {
    let {gen: t, data: r, it: s} = e;
    t.if(s.parentData, () => t.assign(r, R._`${s.parentData}[${s.parentDataProperty}]`));
  }
  function Ou(e, t) {
    let {gen: r} = e;
    r.if(R._`Array.isArray(${t})`, () => {
      r.assign(Ce.default.vErrors, R._`${Ce.default.vErrors} === null ? ${t} : ${Ce.default.vErrors}.concat(${t})`).assign(Ce.default.errors, R._`${Ce.default.vErrors}.length`), 
      Zs.extendErrors(e);
    }, () => e.error());
  }
  function ju({schemaEnv: e}, t) {
    if (t.async && !e.$async) throw Error("async keyword in sync schema");
  }
  function en(e, t, r) {
    if (r === void 0) throw Error(`keyword "${t}" failed to compile`);
    return e.scopeValue("keyword", typeof r == "function" ? {
      ref: r
    } : {
      ref: r,
      code: R.stringify(r)
    });
  }
  function xu(e, t, r = !1) {
    return !t.length || t.some(s => s === "array" ? Array.isArray(e) : s === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == s || r && typeof e > "u");
  }
  tn.validSchemaType = xu;
  function Ru({schema: e, opts: t, self: r, errSchemaPath: s}, n, o) {
    if (Array.isArray(n.keyword) ? !n.keyword.includes(o) : n.keyword !== o) throw Error("ajv implementation error");
    let i = n.dependencies;
    if (i === null || i === void 0 ? void 0 : i.some(a => !Object.prototype.hasOwnProperty.call(e, a))) throw Error(`parent schema must have dependencies of ${o}: ${i.join(",")}`);
    if (n.validateSchema) {
      if (!n.validateSchema(e[o])) {
        let c = `keyword "${o}" value is invalid at path "${s}": ` + r.errorsText(n.validateSchema.errors);
        if (t.validateSchema === "log") r.logger.error(c); else throw Error(c);
      }
    }
  }
  tn.validateKeywordUsage = Ru;
});

var an = C(function(nn) {
  Object.defineProperty(nn, "__esModule", {
    value: !0
  });
  nn.extendSubschemaMode = nn.extendSubschemaData = nn.getSubschema = void 0;
  var K = bm(), Nt = M_();
  function Mu(e, {keyword: t, schemaProp: r, schema: s, schemaPath: n, errSchemaPath: o, topSchemaRef: i}) {
    if (t !== void 0 && s !== void 0) throw Error('both "keyword" and "schema" passed, only one allowed');
    if (t !== void 0) {
      let a = e.schema[t];
      return r === void 0 ? {
        schema: a,
        schemaPath: K._`${e.schemaPath}${K.getProperty(t)}`,
        errSchemaPath: `${e.errSchemaPath}/${t}`
      } : {
        schema: a[r],
        schemaPath: K._`${e.schemaPath}${K.getProperty(t)}${K.getProperty(r)}`,
        errSchemaPath: `${e.errSchemaPath}/${t}/${Nt.escapeFragment(r)}`
      };
    }
    if (s !== void 0) {
      if (n === void 0 || o === void 0 || i === void 0) throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: s,
        schemaPath: n,
        topSchemaRef: i,
        errSchemaPath: o
      };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  nn.getSubschema = Mu;
  function Au(e, t, {dataProp: r, dataPropType: s, data: n, dataTypes: o, propertyName: i}) {
    if (n !== void 0 && r !== void 0) throw Error('both "data" and "dataProp" passed, only one allowed');
    let {gen: a} = t;
    if (r !== void 0) {
      let {errorPath: u, dataPathArr: l, opts: f} = t, b = a.let("data", K._`${t.data}${K.getProperty(r)}`, !0);
      c(b), e.errorPath = K.str`${u}${Nt.getErrorPath(r, s, f.jsPropertySyntax)}`, e.parentDataProperty = K._`${r}`, 
      e.dataPathArr = [ ...l, e.parentDataProperty ];
    }
    if (n !== void 0) {
      let u = n instanceof K.Name ? n : a.let("data", n, !0);
      if (c(u), i !== void 0) e.propertyName = i;
    }
    if (o) e.dataTypes = o;
    function c(u) {
      e.data = u, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = new Set, 
      e.parentData = t.data, e.dataNames = [ ...t.dataNames, u ];
    }
  }
  nn.extendSubschemaData = Au;
  function Du(e, {jtdDiscriminator: t, jtdMetadata: r, compositeRule: s, createErrors: n, allErrors: o}) {
    if (s !== void 0) e.compositeRule = s;
    if (n !== void 0) e.createErrors = n;
    if (o !== void 0) e.allErrors = o;
    e.jtdDiscriminator = t, e.jtdMetadata = r;
  }
  nn.extendSubschemaMode = Du;
});

var un = C(function(nm, cn) {
  var ve = cn.exports = function(e, t, r) {
    if (typeof t == "function") r = t, t = {};
    r = t.cb || r;
    var s = typeof r == "function" ? r : r.pre || function() {}, n = r.post || function() {};
    kt(t, s, n, e, "", e);
  };
  ve.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  };
  ve.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  };
  ve.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  };
  ve.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function kt(e, t, r, s, n, o, i, a, c, u) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      t(s, n, o, i, a, c, u);
      for (var l in s) {
        var f = s[l];
        if (Array.isArray(f)) {
          if (l in ve.arrayKeywords) for (var b = 0; b < f.length; b++) kt(e, t, r, f[b], n + "/" + l + "/" + b, o, n, l, s, b);
        } else if (l in ve.propsKeywords) {
          if (f && typeof f == "object") for (var _ in f) kt(e, t, r, f[_], n + "/" + l + "/" + Uu(_), o, n, l, s, _);
        } else if (l in ve.keywords || e.allKeys && !(l in ve.skipKeywords)) kt(e, t, r, f, n + "/" + l, o, n, l, s);
      }
      r(s, n, o, i, a, c, u);
    }
  }
  function Uu(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});

var lt = C(function(hn) {
  Object.defineProperty(hn, "__esModule", {
    value: !0
  });
  hn.getSchemaRefs = hn.resolveUrl = hn.normalizeId = hn._getFullPath = hn.getFullPath = hn.inlineRef = void 0;
  var ln = M_(), Ku = Buo(), Fu = un(), Lu = new Set([ "type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const" ]);
  function Hu(e, t = !0) {
    if (typeof e == "boolean") return !0;
    if (t === !0) return !vr(e);
    if (!t) return !1;
    return dn(e) <= t;
  }
  hn.inlineRef = Hu;
  var Gu = new Set([ "$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor" ]);
  function vr(e) {
    for (let t in e) {
      if (Gu.has(t)) return !0;
      let r = e[t];
      if (Array.isArray(r) && r.some(vr)) return !0;
      if (typeof r == "object" && vr(r)) return !0;
    }
    return !1;
  }
  function dn(e) {
    let t = 0;
    for (let r in e) {
      if (r === "$ref") return 1 / 0;
      if (t++, Lu.has(r)) continue;
      if (typeof e[r] == "object") ln.eachItem(e[r], s => t += dn(s));
      if (t === 1 / 0) return 1 / 0;
    }
    return t;
  }
  function fn(e, t = "", r) {
    if (r !== !1) t = Fe(t);
    let s = e.parse(t);
    return pn(e, s);
  }
  hn.getFullPath = fn;
  function pn(e, t) {
    return e.serialize(t).split("#")[0] + "#";
  }
  hn._getFullPath = pn;
  var Ju = /#\/?$/;
  function Fe(e) {
    return e ? e.replace(Ju, "") : "";
  }
  hn.normalizeId = Fe;
  function Wu(e, t, r) {
    return r = Fe(r), e.resolve(t, r);
  }
  hn.resolveUrl = Wu;
  var Bu = /^[a-z_][-a-z0-9._]*$/i;
  function Qu(e, t) {
    if (typeof e == "boolean") return {};
    let {schemaId: r, uriResolver: s} = this.opts, n = Fe(e[r] || t), o = {
      "": n
    }, i = fn(s, n, !1), a = {}, c = new Set;
    return Fu(e, {
      allKeys: !0
    }, (f, b, _, h) => {
      if (h === void 0) return;
      let p = i + b, y = o[h];
      if (typeof f[r] == "string") y = v.call(this, f[r]);
      O.call(this, f.$anchor), O.call(this, f.$dynamicAnchor), o[b] = y;
      function v(q) {
        let M = this.opts.uriResolver.resolve;
        if (q = Fe(y ? M(y, q) : q), c.has(q)) throw l(q);
        c.add(q);
        let N = this.refs[q];
        if (typeof N == "string") N = this.refs[N];
        if (typeof N == "object") u(f, N.schema, q); else if (q !== Fe(p)) if (q[0] === "#") u(f, a[q], q), 
        a[q] = f; else this.refs[q] = p;
        return q;
      }
      function O(q) {
        if (typeof q == "string") {
          if (!Bu.test(q)) throw Error(`invalid anchor "${q}"`);
          v.call(this, `#${q}`);
        }
      }
    }), a;
    function u(f, b, _) {
      if (b !== void 0 && !Ku(f, b)) throw l(_);
    }
    function l(f) {
      return Error(`reference "${f}" resolves to more than one schema`);
    }
  }
  hn.getSchemaRefs = Qu;
});

var jJt = C(function(jn) {
  Object.defineProperty(jn, "__esModule", {
    value: !0
  });
  jn.getData = jn.KeywordCxt = jn.validateFunctionCode = void 0;
  var Ot = ks(), qt = ut(), He = hr(), we = ut(), $n = Hs(), re = sn(), Le = an(), d = bm(), P = Qbe(), vn = lt(), F = M_(), te = ct();
  function rl(e) {
    if (En(e)) {
      if (Sn(e), bn(e)) {
        ol(e);
        return;
      }
    }
    wn(e, () => Ot.topBoolOrEmptySchema(e));
  }
  jn.validateFunctionCode = rl;
  function wn({gen: e, validateName: t, schema: r, schemaEnv: s, opts: n}, o) {
    if (n.code.es5) e.func(t, d._`${P.default.data}, ${P.default.valCxt}`, s.$async, () => {
      e.code(d._`"use strict"; ${yn(r, n)}`), nl(e, n), e.code(o);
    }); else e.func(t, d._`${P.default.data}, ${sl(n)}`, s.$async, () => e.code(yn(r, n)).code(o));
  }
  function sl(e) {
    return d._`{${P.default.instancePath}="", ${P.default.parentData}, ${P.default.parentDataProperty}, ${P.default.rootData}=${P.default.data}${e.dynamicRef ? d._`, ${P.default.dynamicAnchors}={}` : d.nil}}={}`;
  }
  function nl(e, t) {
    e.if(P.default.valCxt, () => {
      if (e.var(P.default.instancePath, d._`${P.default.valCxt}.${P.default.instancePath}`), 
      e.var(P.default.parentData, d._`${P.default.valCxt}.${P.default.parentData}`), e.var(P.default.parentDataProperty, d._`${P.default.valCxt}.${P.default.parentDataProperty}`), 
      e.var(P.default.rootData, d._`${P.default.valCxt}.${P.default.rootData}`), t.dynamicRef) e.var(P.default.dynamicAnchors, d._`${P.default.valCxt}.${P.default.dynamicAnchors}`);
    }, () => {
      if (e.var(P.default.instancePath, d._`""`), e.var(P.default.parentData, d._`undefined`), 
      e.var(P.default.parentDataProperty, d._`undefined`), e.var(P.default.rootData, P.default.data), 
      t.dynamicRef) e.var(P.default.dynamicAnchors, d._`{}`);
    });
  }
  function ol(e) {
    let {schema: t, opts: r, gen: s} = e;
    wn(e, () => {
      if (r.$comment && t.$comment) Nn(e);
      if (ll(e), s.let(P.default.vErrors, null), s.let(P.default.errors, 0), r.unevaluated) il(e);
      Pn(e), pl(e);
    });
    return;
  }
  function il(e) {
    let {gen: t, validateName: r} = e;
    e.evaluated = t.const("evaluated", d._`${r}.evaluated`), t.if(d._`${e.evaluated}.dynamicProps`, () => t.assign(d._`${e.evaluated}.props`, d._`undefined`)), 
    t.if(d._`${e.evaluated}.dynamicItems`, () => t.assign(d._`${e.evaluated}.items`, d._`undefined`));
  }
  function yn(e, t) {
    let r = typeof e == "object" && e[t.schemaId];
    return r && (t.code.source || t.code.process) ? d._`/*# sourceURL=${r} */` : d.nil;
  }
  function al(e, t) {
    if (En(e)) {
      if (Sn(e), bn(e)) {
        cl(e, t);
        return;
      }
    }
    Ot.boolOrEmptySchema(e, t);
  }
  function bn({schema: e, self: t}) {
    if (typeof e == "boolean") return !e;
    for (let r in e) if (t.RULES.all[r]) return !0;
    return !1;
  }
  function En(e) {
    return typeof e.schema != "boolean";
  }
  function cl(e, t) {
    let {schema: r, gen: s, opts: n} = e;
    if (n.$comment && r.$comment) Nn(e);
    dl(e), fl(e);
    let o = s.const("_errs", P.default.errors);
    Pn(e, o), s.var(t, d._`${o} === ${P.default.errors}`);
  }
  function Sn(e) {
    F.checkUnknownRules(e), ul(e);
  }
  function Pn(e, t) {
    if (e.opts.jtd) return _n(e, [], !1, t);
    let r = qt.getSchemaTypes(e.schema), s = qt.coerceAndCheckDataType(e, r);
    _n(e, r, !s, t);
  }
  function ul(e) {
    let {schema: t, errSchemaPath: r, opts: s, self: n} = e;
    if (t.$ref && s.ignoreKeywordsWithRef && F.schemaHasRulesButRef(t, n.RULES)) n.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
  }
  function ll(e) {
    let {schema: t, opts: r} = e;
    if (t.default !== void 0 && r.useDefaults && r.strictSchema) F.checkStrictMode(e, "default is ignored in the schema root");
  }
  function dl(e) {
    let t = e.schema[e.opts.schemaId];
    if (t) e.baseId = vn.resolveUrl(e.opts.uriResolver, e.baseId, t);
  }
  function fl(e) {
    if (e.schema.$async && !e.schemaEnv.$async) throw Error("async schema in sync schema");
  }
  function Nn({gen: e, schemaEnv: t, schema: r, errSchemaPath: s, opts: n}) {
    let o = r.$comment;
    if (n.$comment === !0) e.code(d._`${P.default.self}.logger.log(${o})`); else if (typeof n.$comment == "function") {
      let i = d.str`${s}/$comment`, a = e.scopeValue("root", {
        ref: t.root
      });
      e.code(d._`${P.default.self}.opts.$comment(${o}, ${i}, ${a}.schema)`);
    }
  }
  function pl(e) {
    let {gen: t, schemaEnv: r, validateName: s, ValidationError: n, opts: o} = e;
    if (r.$async) t.if(d._`${P.default.errors} === 0`, () => t.return(P.default.data), () => t.throw(d._`new ${n}(${P.default.vErrors})`)); else {
      if (t.assign(d._`${s}.errors`, P.default.vErrors), o.unevaluated) hl(e);
      t.return(d._`${P.default.errors} === 0`);
    }
  }
  function hl({gen: e, evaluated: t, props: r, items: s}) {
    if (r instanceof d.Name) e.assign(d._`${t}.props`, r);
    if (s instanceof d.Name) e.assign(d._`${t}.items`, s);
  }
  function _n(e, t, r, s) {
    let {gen: n, schema: o, data: i, allErrors: a, opts: c, self: u} = e, {RULES: l} = u;
    if (o.$ref && (c.ignoreKeywordsWithRef || !F.schemaHasRulesButRef(o, l))) {
      n.block(() => qn(e, "$ref", l.all.$ref.definition));
      return;
    }
    if (!c.jtd) ml(e, t);
    n.block(() => {
      for (let b of l.rules) f(b);
      f(l.post);
    });
    function f(b) {
      if (!He.shouldUseGroup(o, b)) return;
      if (b.type) {
        if (n.if(we.checkDataType(b.type, i, c.strictNumbers)), gn(e, b), t.length === 1 && t[0] === b.type && r) n.else(), 
        we.reportTypeError(e);
        n.endIf();
      } else gn(e, b);
      if (!a) n.if(d._`${P.default.errors} === ${s || 0}`);
    }
  }
  function gn(e, t) {
    let {gen: r, schema: s, opts: {useDefaults: n}} = e;
    if (n) $n.assignDefaults(e, t.type);
    r.block(() => {
      for (let o of t.rules) if (He.shouldUseRule(s, o)) qn(e, o.keyword, o.definition, t.type);
    });
  }
  function ml(e, t) {
    if (e.schemaEnv.meta || !e.opts.strictTypes) return;
    if (yl(e, t), !e.opts.allowUnionTypes) _l(e, t);
    gl(e, e.dataTypes);
  }
  function yl(e, t) {
    if (!t.length) return;
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach(r => {
      if (!kn(e.dataTypes, r)) wr(e, `type "${r}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), vl(e, t);
  }
  function _l(e, t) {
    if (t.length > 1 && !(t.length === 2 && t.includes("null"))) wr(e, "use allowUnionTypes to allow union type keyword");
  }
  function gl(e, t) {
    let r = e.self.RULES.all;
    for (let s in r) {
      let n = r[s];
      if (typeof n == "object" && He.shouldUseRule(e.schema, n)) {
        let {type: o} = n.definition;
        if (o.length && !o.some(i => $l(t, i))) wr(e, `missing type "${o.join(",")}" for keyword "${s}"`);
      }
    }
  }
  function $l(e, t) {
    return e.includes(t) || t === "number" && e.includes("integer");
  }
  function kn(e, t) {
    return e.includes(t) || t === "integer" && e.includes("number");
  }
  function vl(e, t) {
    let r = [];
    for (let s of e.dataTypes) if (kn(t, s)) r.push(s); else if (t.includes("integer") && s === "number") r.push("integer");
    e.dataTypes = r;
  }
  function wr(e, t) {
    let r = e.schemaEnv.baseId + e.errSchemaPath;
    t += ` at "${r}" (strictTypes)`, F.checkStrictMode(e, t, e.opts.strictTypes);
  }
  class br {
    constructor(e, t, r) {
      if (re.validateKeywordUsage(e, t, r), this.gen = e.gen, this.allErrors = e.allErrors, 
      this.keyword = r, this.data = e.data, this.schema = e.schema[r], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, 
      this.schemaValue = F.schemaRefOrVal(e, this.schema, r, this.$data), this.schemaType = t.schemaType, 
      this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", On(this.$data, e)); else if (this.schemaCode = this.schemaValue, 
      !re.validSchemaType(this.schema, t.schemaType, t.allowUndefined)) throw Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
      if ("code" in t ? t.trackErrors : t.errors !== !1) this.errsCount = e.gen.const("_errs", P.default.errors);
    }
    result(e, t, r) {
      this.failResult(d.not(e), t, r);
    }
    failResult(e, t, r) {
      if (this.gen.if(e), r) r(); else this.error();
      if (t) {
        if (this.gen.else(), t(), this.allErrors) this.gen.endIf();
      } else if (this.allErrors) this.gen.endIf(); else this.gen.else();
    }
    pass(e, t) {
      this.failResult(d.not(e), void 0, t);
    }
    fail(e) {
      if (e === void 0) {
        if (this.error(), !this.allErrors) this.gen.if(!1);
        return;
      }
      if (this.gen.if(e), this.error(), this.allErrors) this.gen.endIf(); else this.gen.else();
    }
    fail$data(e) {
      if (!this.$data) return this.fail(e);
      let {schemaCode: t} = this;
      this.fail(d._`${t} !== undefined && (${d.or(this.invalid$data(), e)})`);
    }
    error(e, t, r) {
      if (t) {
        this.setParams(t), this._error(e, r), this.setParams({});
        return;
      }
      this._error(e, r);
    }
    _error(e, t) {
      (e ? te.reportExtraError : te.reportError)(this, this.def.error, t);
    }
    $dataError() {
      te.reportError(this, this.def.$dataError || te.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
      te.resetErrorsCount(this.gen, this.errsCount);
    }
    ok(e) {
      if (!this.allErrors) this.gen.if(e);
    }
    setParams(e, t) {
      if (t) Object.assign(this.params, e); else this.params = e;
    }
    block$data(e, t, r = d.nil) {
      this.gen.block(() => {
        this.check$data(e, r), t();
      });
    }
    check$data(e = d.nil, t = d.nil) {
      if (!this.$data) return;
      let {gen: r, schemaCode: s, schemaType: n, def: o} = this;
      if (r.if(d.or(d._`${s} === undefined`, t)), e !== d.nil) r.assign(e, !0);
      if (n.length || o.validateSchema) {
        if (r.elseIf(this.invalid$data()), this.$dataError(), e !== d.nil) r.assign(e, !1);
      }
      r.else();
    }
    invalid$data() {
      let {gen: e, schemaCode: t, schemaType: r, def: s, it: n} = this;
      return d.or(o(), i());
      function o() {
        if (r.length) {
          if (!(t instanceof d.Name)) throw Error("ajv implementation error");
          let a = Array.isArray(r) ? r : [ r ];
          return d._`${we.checkDataTypes(a, t, n.opts.strictNumbers, we.DataType.Wrong)}`;
        }
        return d.nil;
      }
      function i() {
        if (s.validateSchema) {
          let a = e.scopeValue("validate$data", {
            ref: s.validateSchema
          });
          return d._`!${a}(${t})`;
        }
        return d.nil;
      }
    }
    subschema(e, t) {
      let r = Le.getSubschema(this.it, e);
      Le.extendSubschemaData(r, this.it, e), Le.extendSubschemaMode(r, e);
      let s = {
        ...this.it,
        ...r,
        items: void 0,
        props: void 0
      };
      return al(s, t), s;
    }
    mergeEvaluated(e, t) {
      let {it: r, gen: s} = this;
      if (!r.opts.unevaluated) return;
      if (r.props !== !0 && e.props !== void 0) r.props = F.mergeEvaluated.props(s, e.props, r.props, t);
      if (r.items !== !0 && e.items !== void 0) r.items = F.mergeEvaluated.items(s, e.items, r.items, t);
    }
    mergeValidEvaluated(e, t) {
      let {it: r, gen: s} = this;
      if (r.opts.unevaluated && (r.props !== !0 || r.items !== !0)) return s.if(t, () => this.mergeEvaluated(e, d.Name)), 
      !0;
    }
  }
  jn.KeywordCxt = br;
  function qn(e, t, r, s) {
    let n = new br(e, r, t);
    if ("code" in r) r.code(n, s); else if (n.$data && r.validate) re.funcKeywordCode(n, r); else if ("macro" in r) re.macroKeywordCode(n, r); else if (r.compile || r.validate) re.funcKeywordCode(n, r);
  }
  var wl = /^\/(?:[^~]|~0|~1)*$/, bl = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function On(e, {dataLevel: t, dataNames: r, dataPathArr: s}) {
    let n, o;
    if (e === "") return P.default.rootData;
    if (e[0] === "/") {
      if (!wl.test(e)) throw Error(`Invalid JSON-pointer: ${e}`);
      n = e, o = P.default.rootData;
    } else {
      let u = bl.exec(e);
      if (!u) throw Error(`Invalid JSON-pointer: ${e}`);
      let l = +u[1];
      if (n = u[2], n === "#") {
        if (l >= t) throw Error(c("property/index", l));
        return s[t - l];
      }
      if (l > t) throw Error(c("data", l));
      if (o = r[t - l], !n) return o;
    }
    let i = o, a = n.split("/");
    for (let u of a) if (u) o = d._`${o}${d.getProperty(F.unescapeJsonPointer(u))}`, 
    i = d._`${i} && ${o}`;
    return i;
    function c(u, l) {
      return `Cannot access ${u} ${l} levels up, current level is ${t}`;
    }
  }
  jn.getData = On;
});

var eNn = C(function(In) {
  Object.defineProperty(In, "__esModule", {
    value: !0
  });
  class Rn extends Error {
    constructor(e) {
      super("validation failed");
      this.errors = e, this.ajv = this.validation = !0;
    }
  }
  In.default = Rn;
});

var WJt = C(function(Cn) {
  Object.defineProperty(Cn, "__esModule", {
    value: !0
  });
  var Ge = lt();
  class Tn extends Error {
    constructor(e, t, r, s) {
      super(s || `can't resolve reference ${r} from id ${t}`);
      this.missingRef = Ge.resolveUrl(e, t, r), this.missingSchema = Ge.normalizeId(Ge.getFullPath(e, this.missingRef));
    }
  }
  Cn.default = Tn;
});

var tNn = C(function(Dn) {
  Object.defineProperty(Dn, "__esModule", {
    value: !0
  });
  Dn.resolveSchema = Dn.getCompilingSchema = Dn.resolveRef = Dn.compileSchema = Dn.SchemaEnv = void 0;
  var V = bm(), kl = eNn(), Me = Qbe(), z = lt(), jt = M_(), Mn = jJt();
  class dt {
    constructor(e) {
      var t;
      this.refs = {}, this.dynamicAnchors = {};
      let r;
      if (typeof e.schema == "object") r = e.schema;
      this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, 
      this.baseId = (t = e.baseId) !== null && t !== void 0 ? t : z.normalizeId(r === null || r === void 0 ? void 0 : r[e.schemaId || "$id"]), 
      this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, 
      this.$async = r === null || r === void 0 ? void 0 : r.$async, this.refs = {};
    }
  }
  Dn.SchemaEnv = dt;
  function Sr(e) {
    let t = An.call(this, e);
    if (t) return t;
    let r = z.getFullPath(this.opts.uriResolver, e.root.baseId), {es5: s, lines: n} = this.opts.code, {ownProperties: o} = this.opts, i = new V.CodeGen(this.scope, {
      es5: s,
      lines: n,
      ownProperties: o
    }), a;
    if (e.$async) a = i.scopeValue("Error", {
      ref: kl.default,
      code: V._`require("ajv/dist/runtime/validation_error").default`
    });
    let c = i.scopeName("validate");
    e.validateName = c;
    let u = {
      gen: i,
      allErrors: this.opts.allErrors,
      data: Me.default.data,
      parentData: Me.default.parentData,
      parentDataProperty: Me.default.parentDataProperty,
      dataNames: [ Me.default.data ],
      dataPathArr: [ V.nil ],
      dataLevel: 0,
      dataTypes: [],
      definedProperties: new Set,
      topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? {
        ref: e.schema,
        code: V.stringify(e.schema)
      } : {
        ref: e.schema
      }),
      validateName: c,
      ValidationError: a,
      schema: e.schema,
      schemaEnv: e,
      rootId: r,
      baseId: e.baseId || r,
      schemaPath: V.nil,
      errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: V._`""`,
      opts: this.opts,
      self: this
    }, l;
    try {
      this._compilations.add(e), Mn.validateFunctionCode(u), i.optimize(this.opts.code.optimize);
      let f = i.toString();
      if (l = `${i.scopeRefs(Me.default.scope)}return ${f}`, this.opts.code.process) l = this.opts.code.process(l, e);
      let _ = Function(`${Me.default.self}`, `${Me.default.scope}`, l)(this, this.scope.get());
      if (this.scope.value(c, {
        ref: _
      }), _.errors = null, _.schema = e.schema, _.schemaEnv = e, e.$async) _.$async = !0;
      if (this.opts.code.source === !0) _.source = {
        validateName: c,
        validateCode: f,
        scopeValues: i._values
      };
      if (this.opts.unevaluated) {
        let {props: h, items: p} = u;
        if (_.evaluated = {
          props: h instanceof V.Name ? void 0 : h,
          items: p instanceof V.Name ? void 0 : p,
          dynamicProps: h instanceof V.Name,
          dynamicItems: p instanceof V.Name
        }, _.source) _.source.evaluated = V.stringify(_.evaluated);
      }
      return e.validate = _, e;
    } catch (f) {
      if (delete e.validate, delete e.validateName, l) this.logger.error("Error compiling schema, function code:", l);
      throw f;
    } finally {
      this._compilations.delete(e);
    }
  }
  Dn.compileSchema = Sr;
  function ql(e, t, r) {
    var s;
    r = z.resolveUrl(this.opts.uriResolver, t, r);
    let n = e.refs[r];
    if (n) return n;
    let o = xl.call(this, e, r);
    if (o === void 0) {
      let i = (s = e.localRefs) === null || s === void 0 ? void 0 : s[r], {schemaId: a} = this.opts;
      if (i) o = new dt({
        schema: i,
        schemaId: a,
        root: e,
        baseId: t
      });
    }
    if (o === void 0) return;
    return e.refs[r] = Ol.call(this, o);
  }
  Dn.resolveRef = ql;
  function Ol(e) {
    if (z.inlineRef(e.schema, this.opts.inlineRefs)) return e.schema;
    return e.validate ? e : Sr.call(this, e);
  }
  function An(e) {
    for (let t of this._compilations) if (jl(t, e)) return t;
  }
  Dn.getCompilingSchema = An;
  function jl(e, t) {
    return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
  }
  function xl(e, t) {
    let r;
    while (typeof (r = this.refs[t]) == "string") t = r;
    return r || this.schemas[t] || xt.call(this, e, t);
  }
  function xt(e, t) {
    let r = this.opts.uriResolver.parse(t), s = z._getFullPath(this.opts.uriResolver, r), n = z.getFullPath(this.opts.uriResolver, e.baseId, void 0);
    if (Object.keys(e.schema).length > 0 && s === n) return Er.call(this, r, e);
    let o = z.normalizeId(s), i = this.refs[o] || this.schemas[o];
    if (typeof i == "string") {
      let a = xt.call(this, e, i);
      if (typeof (a === null || a === void 0 ? void 0 : a.schema) !== "object") return;
      return Er.call(this, r, a);
    }
    if (typeof (i === null || i === void 0 ? void 0 : i.schema) !== "object") return;
    if (!i.validate) Sr.call(this, i);
    if (o === z.normalizeId(t)) {
      let {schema: a} = i, {schemaId: c} = this.opts, u = a[c];
      if (u) n = z.resolveUrl(this.opts.uriResolver, n, u);
      return new dt({
        schema: a,
        schemaId: c,
        root: e,
        baseId: n
      });
    }
    return Er.call(this, r, i);
  }
  Dn.resolveSchema = xt;
  var Rl = new Set([ "properties", "patternProperties", "enum", "dependencies", "definitions" ]);
  function Er(e, {baseId: t, schema: r, root: s}) {
    var n;
    if (((n = e.fragment) === null || n === void 0 ? void 0 : n[0]) !== "/") return;
    for (let a of e.fragment.slice(1).split("/")) {
      if (typeof r === "boolean") return;
      let c = r[jt.unescapeFragment(a)];
      if (c === void 0) return;
      r = c;
      let u = typeof r === "object" && r[this.opts.schemaId];
      if (!Rl.has(a) && u) t = z.resolveUrl(this.opts.uriResolver, t, u);
    }
    let o;
    if (typeof r != "boolean" && r.$ref && !jt.schemaHasRulesButRef(r, this.RULES)) {
      let a = z.resolveUrl(this.opts.uriResolver, t, r.$ref);
      o = xt.call(this, s, a);
    }
    let {schemaId: i} = this.opts;
    if (o = o || new dt({
      schema: r,
      schemaId: i,
      root: s,
      baseId: t
    }), o.schema !== o.root.schema) return o;
    return;
  }
});

var zn = C(function(lm, Al) {
  Al.exports = {
    $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
    type: "object",
    required: [ "$data" ],
    properties: {
      $data: {
        type: "string",
        anyOf: [ {
          format: "relative-json-pointer"
        }, {
          format: "json-pointer"
        } ]
      }
    },
    additionalProperties: !1
  };
});

var kr = C(function(dm, Gn) {
  var Dl = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), Kn = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), Pr = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), Fn = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), Vl = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function Nr(e) {
    let t = "", r = 0, s = 0;
    for (s = 0; s < e.length; s++) {
      if (r = e[s].charCodeAt(0), r === 48) continue;
      if (!(r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102)) return "";
      t += e[s];
      break;
    }
    for (s += 1; s < e.length; s++) {
      if (r = e[s].charCodeAt(0), !(r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102)) return "";
      t += e[s];
    }
    return t;
  }
  var zl = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function Un(e) {
    return e.length = 0, !0;
  }
  function Ul(e, t, r) {
    if (e.length) {
      let s = Nr(e);
      if (s !== "") t.push(s); else return r.error = !0, !1;
      e.length = 0;
    }
    return !0;
  }
  function Kl(e) {
    let t = 0, r = {
      error: !1,
      address: "",
      zone: ""
    }, s = [], n = [], o = !1, i = !1, a = Ul;
    for (let c = 0; c < e.length; c++) {
      let u = e[c];
      if (u === "[" || u === "]") continue;
      if (u === ":") {
        if (o === !0) i = !0;
        if (!a(n, s, r)) break;
        if (++t > 7) {
          r.error = !0;
          break;
        }
        if (c > 0 && e[c - 1] === ":") o = !0;
        s.push(":");
        continue;
      } else if (u === "%") {
        if (!a(n, s, r)) break;
        a = Un;
      } else {
        n.push(u);
        continue;
      }
    }
    if (n.length) if (a === Un) r.zone = n.join(""); else if (i) s.push(n.join("")); else s.push(Nr(n));
    return r.address = s.join(""), r;
  }
  function Ln(e) {
    if (Fl(e, ":") < 2) return {
      host: e,
      isIPV6: !1
    };
    let t = Kl(e);
    if (!t.error) {
      let {address: r, address: s} = t;
      if (t.zone) r += "%" + t.zone, s += "%25" + t.zone;
      return {
        host: r,
        isIPV6: !0,
        escapedHost: s
      };
    } else return {
      host: e,
      isIPV6: !1
    };
  }
  function Fl(e, t) {
    let r = 0;
    for (let s = 0; s < e.length; s++) if (e[s] === t) r++;
    return r;
  }
  function Ll(e) {
    let t = e, r = [], s = -1, n = 0;
    while (n = t.length) {
      if (n === 1) if (t === ".") break; else if (t === "/") {
        r.push("/");
        break;
      } else {
        r.push(t);
        break;
      } else if (n === 2) {
        if (t[0] === ".") {
          if (t[1] === ".") break; else if (t[1] === "/") {
            t = t.slice(2);
            continue;
          }
        } else if (t[0] === "/") {
          if (t[1] === "." || t[1] === "/") {
            r.push("/");
            break;
          }
        }
      } else if (n === 3) {
        if (t === "/..") {
          if (r.length !== 0) r.pop();
          r.push("/");
          break;
        }
      }
      if (t[0] === ".") {
        if (t[1] === ".") {
          if (t[2] === "/") {
            t = t.slice(3);
            continue;
          }
        } else if (t[1] === "/") {
          t = t.slice(2);
          continue;
        }
      } else if (t[0] === "/") {
        if (t[1] === ".") {
          if (t[2] === "/") {
            t = t.slice(2);
            continue;
          } else if (t[2] === ".") {
            if (t[3] === "/") {
              if (t = t.slice(3), r.length !== 0) r.pop();
              continue;
            }
          }
        }
      }
      if ((s = t.indexOf("/", 1)) === -1) {
        r.push(t);
        break;
      } else r.push(t.slice(0, s)), t = t.slice(s);
    }
    return r.join("");
  }
  var Hl = {
    "@": "%40",
    "/": "%2F",
    "?": "%3F",
    "#": "%23",
    ":": "%3A"
  }, Gl = /[@/?#:]/g, Jl = /[@/?#]/g;
  function Hn(e, t) {
    let r = t ? Jl : Gl;
    return r.lastIndex = 0, e.replace(r, s => Hl[s]);
  }
  function Wl(e, t = !1) {
    if (e.indexOf("%") === -1) return e;
    let r = "";
    for (let s = 0; s < e.length; s++) {
      if (e[s] === "%" && s + 2 < e.length) {
        let n = e.slice(s + 1, s + 3);
        if (Pr(n)) {
          let o = n.toUpperCase(), i = String.fromCharCode(parseInt(o, 16));
          if (t && Fn(i)) r += i; else r += "%" + o;
          s += 2;
          continue;
        }
      }
      r += e[s];
    }
    return r;
  }
  function Bl(e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      if (e[r] === "%" && r + 2 < e.length) {
        let s = e.slice(r + 1, r + 3);
        if (Pr(s)) {
          let n = s.toUpperCase(), o = String.fromCharCode(parseInt(n, 16));
          if (o !== "." && Fn(o)) t += o; else t += "%" + n;
          r += 2;
          continue;
        }
      }
      if (Vl(e[r])) t += e[r]; else t += escape(e[r]);
    }
    return t;
  }
  function Ql(e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      if (e[r] === "%" && r + 2 < e.length) {
        let s = e.slice(r + 1, r + 3);
        if (Pr(s)) {
          t += "%" + s.toUpperCase(), r += 2;
          continue;
        }
      }
      t += escape(e[r]);
    }
    return t;
  }
  function Xl(e) {
    let t = [];
    if (e.userinfo !== void 0) t.push(e.userinfo), t.push("@");
    if (e.host !== void 0) {
      let r = unescape(e.host);
      if (!Kn(r)) {
        let s = Ln(r);
        if (s.isIPV6 === !0) r = `[${s.escapedHost}]`; else r = Hn(r, !1);
      }
      t.push(r);
    }
    if (typeof e.port === "number" || typeof e.port === "string") t.push(":"), t.push(String(e.port));
    return t.length ? t.join("") : void 0;
  }
  Gn.exports = {
    nonSimpleDomain: zl,
    recomposeAuthority: Xl,
    reescapeHostDelimiters: Hn,
    normalizePercentEncoding: Wl,
    normalizePathEncoding: Bl,
    escapePreservingEscapes: Ql,
    removeDotSegments: Ll,
    isIPv4: Kn,
    isUUID: Dl,
    normalizeIPv6: Ln,
    stringArrayToHexStripped: Nr
  };
});

var Xn = C(function(fm, Qn) {
  var {isUUID: Yl} = kr(), Zl = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, ed = [ "http", "https", "ws", "wss", "urn", "urn:uuid" ];
  function td(e) {
    return ed.indexOf(e) !== -1;
  }
  function qr(e) {
    if (e.secure === !0) return !0; else if (e.secure === !1) return !1; else if (e.scheme) return e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S"); else return !1;
  }
  function Jn(e) {
    if (!e.host) e.error = e.error || "HTTP URIs must have a host.";
    return e;
  }
  function Wn(e) {
    let t = String(e.scheme).toLowerCase() === "https";
    if (e.port === (t ? 443 : 80) || e.port === "") e.port = void 0;
    if (!e.path) e.path = "/";
    return e;
  }
  function rd(e) {
    return e.secure = qr(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), 
    e.path = void 0, e.query = void 0, e;
  }
  function sd(e) {
    if (e.port === (qr(e) ? 443 : 80) || e.port === "") e.port = void 0;
    if (typeof e.secure === "boolean") e.scheme = e.secure ? "wss" : "ws", e.secure = void 0;
    if (e.resourceName) {
      let [t, r] = e.resourceName.split("?");
      e.path = t && t !== "/" ? t : void 0, e.query = r, e.resourceName = void 0;
    }
    return e.fragment = void 0, e;
  }
  function nd(e, t) {
    if (!e.path) return e.error = "URN can not be parsed", e;
    let r = e.path.match(Zl);
    if (r) {
      let s = t.scheme || e.scheme || "urn";
      e.nid = r[1].toLowerCase(), e.nss = r[2];
      let n = `${s}:${t.nid || e.nid}`, o = Or(n);
      if (e.path = void 0, o) e = o.parse(e, t);
    } else e.error = e.error || "URN can not be parsed.";
    return e;
  }
  function od(e, t) {
    if (e.nid === void 0) throw Error("URN without nid cannot be serialized");
    let r = t.scheme || e.scheme || "urn", s = e.nid.toLowerCase(), n = `${r}:${t.nid || s}`, o = Or(n);
    if (o) e = o.serialize(e, t);
    let i = e, a = e.nss;
    return i.path = `${s || t.nid}:${a}`, t.skipEscape = !0, i;
  }
  function id(e, t) {
    let r = e;
    if (r.uuid = r.nss, r.nss = void 0, !t.tolerant && (!r.uuid || !Yl(r.uuid))) r.error = r.error || "UUID is not valid.";
    return r;
  }
  function ad(e) {
    let t = e;
    return t.nss = (e.uuid || "").toLowerCase(), t;
  }
  var Bn = {
    scheme: "http",
    domainHost: !0,
    parse: Jn,
    serialize: Wn
  }, cd = {
    scheme: "https",
    domainHost: Bn.domainHost,
    parse: Jn,
    serialize: Wn
  }, Rt = {
    scheme: "ws",
    domainHost: !0,
    parse: rd,
    serialize: sd
  }, ud = {
    scheme: "wss",
    domainHost: Rt.domainHost,
    parse: Rt.parse,
    serialize: Rt.serialize
  }, ld = {
    scheme: "urn",
    parse: nd,
    serialize: od,
    skipNormalize: !0
  }, dd = {
    scheme: "urn:uuid",
    parse: id,
    serialize: ad,
    skipNormalize: !0
  }, It = {
    http: Bn,
    https: cd,
    ws: Rt,
    wss: ud,
    urn: ld,
    "urn:uuid": dd
  };
  Object.setPrototypeOf(It, null);
  function Or(e) {
    return e && (It[e] || It[e.toLowerCase()]) || void 0;
  }
  Qn.exports = {
    wsIsSecure: qr,
    SCHEMES: It,
    isValidSchemeName: td,
    getSchemeHandler: Or
  };
});

var so = C(function(pm, Tt) {
  var {normalizeIPv6: fd, removeDotSegments: ft, recomposeAuthority: pd, normalizePercentEncoding: hd, normalizePathEncoding: md, escapePreservingEscapes: yd, reescapeHostDelimiters: _d, isIPv4: gd, nonSimpleDomain: $d} = kr(), {SCHEMES: vd, getSchemeHandler: Zn} = Xn();
  function wd(e, t) {
    if (typeof e === "string") e = Nd(e, t); else if (typeof e === "object") e = Je(Ae(e, t), t);
    return e;
  }
  function bd(e, t, r) {
    let s = r ? Object.assign({
      scheme: "null"
    }, r) : {
      scheme: "null"
    }, n = eo(Je(e, s), Je(t, s), s, !0);
    return s.skipEscape = !0, Ae(n, s);
  }
  function eo(e, t, r, s) {
    let n = {};
    if (!s) e = Je(Ae(e, r), r), t = Je(Ae(t, r), r);
    if (r = r || {}, !r.tolerant && t.scheme) n.scheme = t.scheme, n.userinfo = t.userinfo, 
    n.host = t.host, n.port = t.port, n.path = ft(t.path || ""), n.query = t.query; else {
      if (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0) n.userinfo = t.userinfo, 
      n.host = t.host, n.port = t.port, n.path = ft(t.path || ""), n.query = t.query; else {
        if (!t.path) if (n.path = e.path, t.query !== void 0) n.query = t.query; else n.query = e.query; else {
          if (t.path[0] === "/") n.path = ft(t.path); else {
            if ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path) n.path = "/" + t.path; else if (!e.path) n.path = t.path; else n.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path;
            n.path = ft(n.path);
          }
          n.query = t.query;
        }
        n.userinfo = e.userinfo, n.host = e.host, n.port = e.port;
      }
      n.scheme = e.scheme;
    }
    return n.fragment = t.fragment, n;
  }
  function Ed(e, t, r) {
    let s = Yn(e, r), n = Yn(t, r);
    return s !== void 0 && n !== void 0 && s.toLowerCase() === n.toLowerCase();
  }
  function Ae(e, t) {
    let r = {
      host: e.host,
      scheme: e.scheme,
      userinfo: e.userinfo,
      port: e.port,
      path: e.path,
      query: e.query,
      nid: e.nid,
      nss: e.nss,
      uuid: e.uuid,
      fragment: e.fragment,
      reference: e.reference,
      resourceName: e.resourceName,
      secure: e.secure,
      error: ""
    }, s = Object.assign({}, t), n = [], o = Zn(s.scheme || r.scheme);
    if (o && o.serialize) o.serialize(r, s);
    if (r.path !== void 0) if (!s.skipEscape) {
      if (r.path = yd(r.path), r.scheme !== void 0) r.path = r.path.split("%3A").join(":");
    } else r.path = hd(r.path);
    if (s.reference !== "suffix" && r.scheme) n.push(r.scheme, ":");
    let i = pd(r);
    if (i !== void 0) {
      if (s.reference !== "suffix") n.push("//");
      if (n.push(i), r.path && r.path[0] !== "/") n.push("/");
    }
    if (r.path !== void 0) {
      let a = r.path;
      if (!s.absolutePath && (!o || !o.absolutePath)) a = ft(a);
      if (i === void 0 && a[0] === "/" && a[1] === "/") a = "/%2F" + a.slice(2);
      n.push(a);
    }
    if (r.query !== void 0) n.push("?", r.query);
    if (r.fragment !== void 0) n.push("#", r.fragment);
    return n.join("");
  }
  var Sd = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function Pd(e, t) {
    if (t[2] !== void 0 && e.path && e.path[0] !== "/") return 'URI path must start with "/" when authority is present.';
    if (typeof e.port === "number" && (e.port < 0 || e.port > 65535)) return "URI port is malformed.";
    return;
  }
  function to(e, t) {
    let r = Object.assign({}, t), s = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    }, n = !1, o = !1;
    if (r.reference === "suffix") if (r.scheme) e = r.scheme + ":" + e; else e = "//" + e;
    let i = e.match(Sd);
    if (i) {
      if (s.scheme = i[1], s.userinfo = i[3], s.host = i[4], s.port = parseInt(i[5], 10), 
      s.path = i[6] || "", s.query = i[7], s.fragment = i[8], isNaN(s.port)) s.port = i[5];
      let a = Pd(s, i);
      if (a !== void 0) s.error = s.error || a, n = !0;
      if (s.host) if (gd(s.host) === !1) {
        let l = fd(s.host);
        s.host = l.host.toLowerCase(), o = l.isIPV6;
      } else o = !0;
      if (s.scheme === void 0 && s.userinfo === void 0 && s.host === void 0 && s.port === void 0 && s.query === void 0 && !s.path) s.reference = "same-document"; else if (s.scheme === void 0) s.reference = "relative"; else if (s.fragment === void 0) s.reference = "absolute"; else s.reference = "uri";
      if (r.reference && r.reference !== "suffix" && r.reference !== s.reference) s.error = s.error || "URI is not a " + r.reference + " reference.";
      let c = Zn(r.scheme || s.scheme);
      if (!r.unicodeSupport && (!c || !c.unicodeSupport)) {
        if (s.host && (r.domainHost || c && c.domainHost) && o === !1 && $d(s.host)) try {
          s.host = URL.domainToASCII(s.host.toLowerCase());
        } catch (u) {
          s.error = s.error || "Host's domain name can not be converted to ASCII: " + u;
        }
      }
      if (!c || c && !c.skipNormalize) {
        if (e.indexOf("%") !== -1) {
          if (s.scheme !== void 0) s.scheme = unescape(s.scheme);
          if (s.host !== void 0) s.host = _d(unescape(s.host), o);
        }
        if (s.path) s.path = md(s.path);
        if (s.fragment) try {
          s.fragment = encodeURI(decodeURIComponent(s.fragment));
        } catch {
          s.error = s.error || "URI malformed";
        }
      }
      if (c && c.parse) c.parse(s, r);
    } else s.error = s.error || "URI can not be parsed.";
    return {
      parsed: s,
      malformedAuthorityOrPort: n
    };
  }
  function Je(e, t) {
    return to(e, t).parsed;
  }
  function Nd(e, t) {
    return ro(e, t).normalized;
  }
  function ro(e, t) {
    let {parsed: r, malformedAuthorityOrPort: s} = to(e, t);
    return {
      normalized: s ? e : Ae(r, t),
      malformedAuthorityOrPort: s
    };
  }
  function Yn(e, t) {
    if (typeof e === "string") {
      let {normalized: r, malformedAuthorityOrPort: s} = ro(e, t);
      return s ? void 0 : r;
    }
    if (typeof e === "object") return Ae(e, t);
  }
  var jr = {
    SCHEMES: vd,
    normalize: wd,
    resolve: bd,
    resolveComponent: eo,
    equal: Ed,
    serialize: Ae,
    parse: Je
  };
  Tt.exports = jr;
  Tt.exports.default = jr;
  Tt.exports.fastUri = jr;
});

var io = C(function(oo) {
  Object.defineProperty(oo, "__esModule", {
    value: !0
  });
  var no = so();
  no.code = 'require("ajv/dist/runtime/uri").default';
  oo.default = no;
});

var Huo = C(function(he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  he.CodeGen = he.Name = he.nil = he.stringify = he.str = he._ = he.KeywordCxt = void 0;
  var qd = jJt();
  Object.defineProperty(he, "KeywordCxt", {
    enumerable: !0,
    get: function() {
      return qd.KeywordCxt;
    }
  });
  var Be = bm();
  Object.defineProperty(he, "_", {
    enumerable: !0,
    get: function() {
      return Be._;
    }
  });
  Object.defineProperty(he, "str", {
    enumerable: !0,
    get: function() {
      return Be.str;
    }
  });
  Object.defineProperty(he, "stringify", {
    enumerable: !0,
    get: function() {
      return Be.stringify;
    }
  });
  Object.defineProperty(he, "nil", {
    enumerable: !0,
    get: function() {
      return Be.nil;
    }
  });
  Object.defineProperty(he, "Name", {
    enumerable: !0,
    get: function() {
      return Be.Name;
    }
  });
  Object.defineProperty(he, "CodeGen", {
    enumerable: !0,
    get: function() {
      return Be.CodeGen;
    }
  });
  var Od = eNn(), fo = WJt(), po = pr(), se = tNn(), ho = bm(), ne = lt(), be = ut(), We = M_(), ao = zn(), jd = io(), mo = (e, t) => new RegExp(e, t);
  mo.code = "new RegExp";
  var xd = [ "removeAdditional", "useDefaults", "coerceTypes" ], Rd = new Set([ "validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error" ]), Id = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, Td = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, co = 200;
  function Cd(e) {
    var t, r, s, n, o, i, a, c, u, l, f, b, _, h, p, y, v, O, q, M, N, ee, fe, Xt, Yt;
    let nt = e.strict, Zt = (t = e.code) === null || t === void 0 ? void 0 : t.optimize, Mr = Zt === !0 || Zt === void 0 ? 1 : Zt || 0, Ar = (s = (r = e.code) === null || r === void 0 ? void 0 : r.regExp) !== null && s !== void 0 ? s : mo, pa = (n = e.uriResolver) !== null && n !== void 0 ? n : jd.default;
    return {
      strictSchema: (i = (o = e.strictSchema) !== null && o !== void 0 ? o : nt) !== null && i !== void 0 ? i : !0,
      strictNumbers: (c = (a = e.strictNumbers) !== null && a !== void 0 ? a : nt) !== null && c !== void 0 ? c : !0,
      strictTypes: (l = (u = e.strictTypes) !== null && u !== void 0 ? u : nt) !== null && l !== void 0 ? l : "log",
      strictTuples: (b = (f = e.strictTuples) !== null && f !== void 0 ? f : nt) !== null && b !== void 0 ? b : "log",
      strictRequired: (h = (_ = e.strictRequired) !== null && _ !== void 0 ? _ : nt) !== null && h !== void 0 ? h : !1,
      code: e.code ? {
        ...e.code,
        optimize: Mr,
        regExp: Ar
      } : {
        optimize: Mr,
        regExp: Ar
      },
      loopRequired: (p = e.loopRequired) !== null && p !== void 0 ? p : co,
      loopEnum: (y = e.loopEnum) !== null && y !== void 0 ? y : co,
      meta: (v = e.meta) !== null && v !== void 0 ? v : !0,
      messages: (O = e.messages) !== null && O !== void 0 ? O : !0,
      inlineRefs: (q = e.inlineRefs) !== null && q !== void 0 ? q : !0,
      schemaId: (M = e.schemaId) !== null && M !== void 0 ? M : "$id",
      addUsedSchema: (N = e.addUsedSchema) !== null && N !== void 0 ? N : !0,
      validateSchema: (ee = e.validateSchema) !== null && ee !== void 0 ? ee : !0,
      validateFormats: (fe = e.validateFormats) !== null && fe !== void 0 ? fe : !0,
      unicodeRegExp: (Xt = e.unicodeRegExp) !== null && Xt !== void 0 ? Xt : !0,
      int32range: (Yt = e.int32range) !== null && Yt !== void 0 ? Yt : !0,
      uriResolver: pa
    };
  }
  class Ct {
    constructor(e = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set, 
      this._loading = {}, this._cache = new Map, e = this.opts = {
        ...e,
        ...Cd(e)
      };
      let {es5: t, lines: r} = this.opts.code;
      this.scope = new ho.ValueScope({
        scope: {},
        prefixes: Rd,
        es5: t,
        lines: r
      }), this.logger = Ud(e.logger);
      let s = e.validateFormats;
      if (e.validateFormats = !1, this.RULES = po.getRules(), uo.call(this, Id, e, "NOT SUPPORTED"), 
      uo.call(this, Td, e, "DEPRECATED", "warn"), this._metaOpts = Vd.call(this), e.formats) Ad.call(this);
      if (this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords) Dd.call(this, e.keywords);
      if (typeof e.meta == "object") this.addMetaSchema(e.meta);
      Md.call(this), e.validateFormats = s;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let {$data: e, meta: t, schemaId: r} = this.opts, s = ao;
      if (r === "id") s = {
        ...ao
      }, s.id = s.$id, delete s.$id;
      if (t && e) this.addMetaSchema(s, s[r], !1);
    }
    defaultMeta() {
      let {meta: e, schemaId: t} = this.opts;
      return this.opts.defaultMeta = typeof e == "object" ? e[t] || e : void 0;
    }
    validate(e, t) {
      let r;
      if (typeof e == "string") {
        if (r = this.getSchema(e), !r) throw Error(`no schema with key or ref "${e}"`);
      } else r = this.compile(e);
      let s = r(t);
      if (!("$async" in r)) this.errors = r.errors;
      return s;
    }
    compile(e, t) {
      let r = this._addSchema(e, t);
      return r.validate || this._compileSchemaEnv(r);
    }
    compileAsync(e, t) {
      if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
      let {loadSchema: r} = this.opts;
      return s.call(this, e, t);
      async function s(u, l) {
        await n.call(this, u.$schema);
        let f = this._addSchema(u, l);
        return f.validate || o.call(this, f);
      }
      async function n(u) {
        if (u && !this.getSchema(u)) await s.call(this, {
          $ref: u
        }, !0);
      }
      async function o(u) {
        try {
          return this._compileSchemaEnv(u);
        } catch (l) {
          if (!(l instanceof fo.default)) throw l;
          return i.call(this, l), await a.call(this, l.missingSchema), o.call(this, u);
        }
      }
      function i({missingSchema: u, missingRef: l}) {
        if (this.refs[u]) throw Error(`AnySchema ${u} is loaded but ${l} cannot be resolved`);
      }
      async function a(u) {
        let l = await c.call(this, u);
        if (!this.refs[u]) await n.call(this, l.$schema);
        if (!this.refs[u]) this.addSchema(l, u, t);
      }
      async function c(u) {
        let l = this._loading[u];
        if (l) return l;
        try {
          return await (this._loading[u] = r(u));
        } finally {
          delete this._loading[u];
        }
      }
    }
    addSchema(e, t, r, s = this.opts.validateSchema) {
      if (Array.isArray(e)) {
        for (let o of e) this.addSchema(o, void 0, r, s);
        return this;
      }
      let n;
      if (typeof e === "object") {
        let {schemaId: o} = this.opts;
        if (n = e[o], n !== void 0 && typeof n != "string") throw Error(`schema ${o} must be string`);
      }
      return t = ne.normalizeId(t || n), this._checkUnique(t), this.schemas[t] = this._addSchema(e, r, t, s, !0), 
      this;
    }
    addMetaSchema(e, t, r = this.opts.validateSchema) {
      return this.addSchema(e, t, !0, r), this;
    }
    validateSchema(e, t) {
      if (typeof e == "boolean") return !0;
      let r;
      if (r = e.$schema, r !== void 0 && typeof r != "string") throw Error("$schema must be a string");
      if (r = r || this.opts.defaultMeta || this.defaultMeta(), !r) return this.logger.warn("meta-schema not available"), 
      this.errors = null, !0;
      let s = this.validate(r, e);
      if (!s && t) {
        let n = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(n); else throw Error(n);
      }
      return s;
    }
    getSchema(e) {
      let t;
      while (typeof (t = lo.call(this, e)) == "string") e = t;
      if (t === void 0) {
        let {schemaId: r} = this.opts, s = new se.SchemaEnv({
          schema: {},
          schemaId: r
        });
        if (t = se.resolveSchema.call(this, s, e), !t) return;
        this.refs[e] = t;
      }
      return t.validate || this._compileSchemaEnv(t);
    }
    removeSchema(e) {
      if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), 
      this;
      switch (typeof e) {
       case "undefined":
        return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), 
        this._cache.clear(), this;

       case "string":
        {
          let t = lo.call(this, e);
          if (typeof t == "object") this._cache.delete(t.schema);
          return delete this.schemas[e], delete this.refs[e], this;
        }

       case "object":
        {
          let t = e;
          this._cache.delete(t);
          let r = e[this.opts.schemaId];
          if (r) r = ne.normalizeId(r), delete this.schemas[r], delete this.refs[r];
          return this;
        }

       default:
        throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(e) {
      for (let t of e) this.addKeyword(t);
      return this;
    }
    addKeyword(e, t) {
      let r;
      if (typeof e == "string") {
        if (r = e, typeof t == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), 
        t.keyword = r;
      } else if (typeof e == "object" && t === void 0) {
        if (t = e, r = t.keyword, Array.isArray(r) && !r.length) throw Error("addKeywords: keyword must be string or non-empty array");
      } else throw Error("invalid addKeywords parameters");
      if (Fd.call(this, r, t), !t) return We.eachItem(r, n => xr.call(this, n)), this;
      Hd.call(this, t);
      let s = {
        ...t,
        type: be.getJSONTypes(t.type),
        schemaType: be.getJSONTypes(t.schemaType)
      };
      return We.eachItem(r, s.type.length === 0 ? n => xr.call(this, n, s) : n => s.type.forEach(o => xr.call(this, n, s, o))), 
      this;
    }
    getKeyword(e) {
      let t = this.RULES.all[e];
      return typeof t == "object" ? t.definition : !!t;
    }
    removeKeyword(e) {
      let {RULES: t} = this;
      delete t.keywords[e], delete t.all[e];
      for (let r of t.rules) {
        let s = r.rules.findIndex(n => n.keyword === e);
        if (s >= 0) r.rules.splice(s, 1);
      }
      return this;
    }
    addFormat(e, t) {
      if (typeof t == "string") t = new RegExp(t);
      return this.formats[e] = t, this;
    }
    errorsText(e = this.errors, {separator: t = ", ", dataVar: r = "data"} = {}) {
      if (!e || e.length === 0) return "No errors";
      return e.map(s => `${r}${s.instancePath} ${s.message}`).reduce((s, n) => s + t + n);
    }
    $dataMetaSchema(e, t) {
      let r = this.RULES.all;
      e = JSON.parse(JSON.stringify(e));
      for (let s of t) {
        let n = s.split("/").slice(1), o = e;
        for (let i of n) o = o[i];
        for (let i in r) {
          let a = r[i];
          if (typeof a != "object") continue;
          let {$data: c} = a.definition, u = o[i];
          if (c && u) o[i] = yo(u);
        }
      }
      return e;
    }
    _removeAllSchemas(e, t) {
      for (let r in e) {
        let s = e[r];
        if (!t || t.test(r)) {
          if (typeof s == "string") delete e[r]; else if (s && !s.meta) this._cache.delete(s.schema), 
          delete e[r];
        }
      }
    }
    _addSchema(e, t, r, s = this.opts.validateSchema, n = this.opts.addUsedSchema) {
      let o, {schemaId: i} = this.opts;
      if (typeof e == "object") o = e[i]; else if (this.opts.jtd) throw Error("schema must be object"); else if (typeof e != "boolean") throw Error("schema must be object or boolean");
      let a = this._cache.get(e);
      if (a !== void 0) return a;
      r = ne.normalizeId(o || r);
      let c = ne.getSchemaRefs.call(this, e, r);
      if (a = new se.SchemaEnv({
        schema: e,
        schemaId: i,
        meta: t,
        baseId: r,
        localRefs: c
      }), this._cache.set(a.schema, a), n && !r.startsWith("#")) {
        if (r) this._checkUnique(r);
        this.refs[r] = a;
      }
      if (s) this.validateSchema(e, !0);
      return a;
    }
    _checkUnique(e) {
      if (this.schemas[e] || this.refs[e]) throw Error(`schema with key or id "${e}" already exists`);
    }
    _compileSchemaEnv(e) {
      if (e.meta) this._compileMetaSchema(e); else se.compileSchema.call(this, e);
      if (!e.validate) throw Error("ajv implementation error");
      return e.validate;
    }
    _compileMetaSchema(e) {
      let t = this.opts;
      this.opts = this._metaOpts;
      try {
        se.compileSchema.call(this, e);
      } finally {
        this.opts = t;
      }
    }
  }
  Ct.ValidationError = Od.default;
  Ct.MissingRefError = fo.default;
  he.default = Ct;
  function uo(e, t, r, s = "error") {
    for (let n in e) {
      let o = n;
      if (o in t) this.logger[s](`${r}: option ${n}. ${e[o]}`);
    }
  }
  function lo(e) {
    return e = ne.normalizeId(e), this.schemas[e] || this.refs[e];
  }
  function Md() {
    let e = this.opts.schemas;
    if (!e) return;
    if (Array.isArray(e)) this.addSchema(e); else for (let t in e) this.addSchema(e[t], t);
  }
  function Ad() {
    for (let e in this.opts.formats) {
      let t = this.opts.formats[e];
      if (t) this.addFormat(e, t);
    }
  }
  function Dd(e) {
    if (Array.isArray(e)) {
      this.addVocabulary(e);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let t in e) {
      let r = e[t];
      if (!r.keyword) r.keyword = t;
      this.addKeyword(r);
    }
  }
  function Vd() {
    let e = {
      ...this.opts
    };
    for (let t of xd) delete e[t];
    return e;
  }
  var zd = {
    log() {},
    warn() {},
    error() {}
  };
  function Ud(e) {
    if (e === !1) return zd;
    if (e === void 0) return console;
    if (e.log && e.warn && e.error) return e;
    throw Error("logger must implement log, warn and error methods");
  }
  var Kd = /^[a-z_$][a-z0-9_$:-]*$/i;
  function Fd(e, t) {
    let {RULES: r} = this;
    if (We.eachItem(e, s => {
      if (r.keywords[s]) throw Error(`Keyword ${s} is already defined`);
      if (!Kd.test(s)) throw Error(`Keyword ${s} has invalid name`);
    }), !t) return;
    if (t.$data && !("code" in t || "validate" in t)) throw Error('$data keyword must have "code" or "validate" function');
  }
  function xr(e, t, r) {
    var s;
    let n = t === null || t === void 0 ? void 0 : t.post;
    if (r && n) throw Error('keyword with "post" flag cannot have "type"');
    let {RULES: o} = this, i = n ? o.post : o.rules.find(({type: c}) => c === r);
    if (!i) i = {
      type: r,
      rules: []
    }, o.rules.push(i);
    if (o.keywords[e] = !0, !t) return;
    let a = {
      keyword: e,
      definition: {
        ...t,
        type: be.getJSONTypes(t.type),
        schemaType: be.getJSONTypes(t.schemaType)
      }
    };
    if (t.before) Ld.call(this, i, a, t.before); else i.rules.push(a);
    o.all[e] = a, (s = t.implements) === null || s === void 0 || s.forEach(c => this.addKeyword(c));
  }
  function Ld(e, t, r) {
    let s = e.rules.findIndex(n => n.keyword === r);
    if (s >= 0) e.rules.splice(s, 0, t); else e.rules.push(t), this.logger.warn(`rule ${r} is not defined`);
  }
  function Hd(e) {
    let {metaSchema: t} = e;
    if (t === void 0) return;
    if (e.$data && this.opts.$data) t = yo(t);
    e.validateSchema = this.compile(t, !0);
  }
  var Gd = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function yo(e) {
    return {
      anyOf: [ e, Gd ]
    };
  }
});

var go = C(function(_o) {
  Object.defineProperty(_o, "__esModule", {
    value: !0
  });
  var Bd = {
    keyword: "id",
    code() {
      throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  _o.default = Bd;
});

var A_r = C(function(vo) {
  Object.defineProperty(vo, "__esModule", {
    value: !0
  });
  vo.callRef = vo.getValidate = void 0;
  var Xd = WJt(), At = Q(), T = bm(), Qe = Qbe(), Dt = tNn(), Ee = M_(), Yd = {
    keyword: "$ref",
    schemaType: "string",
    code(e) {
      let {gen: t, schema: r, it: s} = e, {baseId: n, schemaEnv: o, validateName: i, opts: a, self: c} = s, {root: u} = o;
      if ((r === "#" || r === "#/") && n === u.baseId) return f();
      let l = Dt.resolveRef.call(c, u, n, r);
      if (l === void 0) throw new Xd.default(s.opts.uriResolver, n, r);
      if (l instanceof Dt.SchemaEnv) return b(l);
      return _(l);
      function f() {
        if (o === u) return Mt(e, i, o, o.$async);
        let h = t.scopeValue("root", {
          ref: u
        });
        return Mt(e, T._`${h}.validate`, u, u.$async);
      }
      function b(h) {
        let p = $o(e, h);
        Mt(e, p, h, h.$async);
      }
      function _(h) {
        let p = t.scopeValue("schema", a.code.source === !0 ? {
          ref: h,
          code: T.stringify(h)
        } : {
          ref: h
        }), y = t.name("valid"), v = e.subschema({
          schema: h,
          dataTypes: [],
          schemaPath: T.nil,
          topSchemaRef: p,
          errSchemaPath: r
        }, y);
        e.mergeEvaluated(v), e.ok(y);
      }
    }
  };
  function $o(e, t) {
    let {gen: r} = e;
    return t.validate ? r.scopeValue("validate", {
      ref: t.validate
    }) : T._`${r.scopeValue("wrapper", {
      ref: t
    })}.validate`;
  }
  vo.getValidate = $o;
  function Mt(e, t, r, s) {
    let {gen: n, it: o} = e, {allErrors: i, schemaEnv: a, opts: c} = o, u = c.passContext ? Qe.default.this : T.nil;
    if (s) l(); else f();
    function l() {
      if (!a.$async) throw Error("async schema referenced by sync schema");
      let h = n.let("valid");
      n.try(() => {
        if (n.code(T._`await ${At.callValidateCode(e, t, u)}`), _(t), !i) n.assign(h, !0);
      }, p => {
        if (n.if(T._`!(${p} instanceof ${o.ValidationError})`, () => n.throw(p)), b(p), 
        !i) n.assign(h, !1);
      }), e.ok(h);
    }
    function f() {
      e.result(At.callValidateCode(e, t, u), () => _(t), () => b(t));
    }
    function b(h) {
      let p = T._`${h}.errors`;
      n.assign(Qe.default.vErrors, T._`${Qe.default.vErrors} === null ? ${p} : ${Qe.default.vErrors}.concat(${p})`), 
      n.assign(Qe.default.errors, T._`${Qe.default.vErrors}.length`);
    }
    function _(h) {
      var p;
      if (!o.opts.unevaluated) return;
      let y = (p = r === null || r === void 0 ? void 0 : r.validate) === null || p === void 0 ? void 0 : p.evaluated;
      if (o.props !== !0) if (y && !y.dynamicProps) {
        if (y.props !== void 0) o.props = Ee.mergeEvaluated.props(n, y.props, o.props);
      } else {
        let v = n.var("props", T._`${h}.evaluated.props`);
        o.props = Ee.mergeEvaluated.props(n, v, o.props, T.Name);
      }
      if (o.items !== !0) if (y && !y.dynamicItems) {
        if (y.items !== void 0) o.items = Ee.mergeEvaluated.items(n, y.items, o.items);
      } else {
        let v = n.var("items", T._`${h}.evaluated.items`);
        o.items = Ee.mergeEvaluated.items(n, v, o.items, T.Name);
      }
    }
  }
  vo.callRef = Mt;
  vo.default = Yd;
});

var Duo = C(function(bo) {
  Object.defineProperty(bo, "__esModule", {
    value: !0
  });
  var tf = go(), rf = A_r(), sf = [ "$schema", "$id", "$defs", "$vocabulary", {
    keyword: "$comment"
  }, "definitions", tf.default, rf.default ];
  bo.default = sf;
});

var So = C(function(Eo) {
  Object.defineProperty(Eo, "__esModule", {
    value: !0
  });
  var Pe = bm(), Se = Pe.operators, Vt = {
    maximum: {
      okStr: "<=",
      ok: Se.LTE,
      fail: Se.GT
    },
    minimum: {
      okStr: ">=",
      ok: Se.GTE,
      fail: Se.LT
    },
    exclusiveMaximum: {
      okStr: "<",
      ok: Se.LT,
      fail: Se.GTE
    },
    exclusiveMinimum: {
      okStr: ">",
      ok: Se.GT,
      fail: Se.LTE
    }
  }, of = {
    message: ({keyword: e, schemaCode: t}) => Pe.str`must be ${Vt[e].okStr} ${t}`,
    params: ({keyword: e, schemaCode: t}) => Pe._`{comparison: ${Vt[e].okStr}, limit: ${t}}`
  }, af = {
    keyword: Object.keys(Vt),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: of,
    code(e) {
      let {keyword: t, data: r, schemaCode: s} = e;
      e.fail$data(Pe._`${r} ${Vt[t].fail} ${s} || isNaN(${r})`);
    }
  };
  Eo.default = af;
});

var No = C(function(Po) {
  Object.defineProperty(Po, "__esModule", {
    value: !0
  });
  var oe = bm(), uf = {
    message: ({schemaCode: e}) => oe.str`must be multiple of ${e}`,
    params: ({schemaCode: e}) => oe._`{multipleOf: ${e}}`
  }, lf = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: uf,
    code(e) {
      let {gen: t, data: r, schemaCode: s, it: n} = e, o = n.opts.multipleOfPrecision, i = t.let("res"), a = o ? oe._`Math.abs(Math.round(${i}) - ${i}) > 1e-${o}` : oe._`${i} !== parseInt(${i})`;
      e.fail$data(oe._`(${s} === 0 || (${i} = ${r}/${s}, ${a}))`);
    }
  };
  Po.default = lf;
});

var Oo = C(function(qo) {
  Object.defineProperty(qo, "__esModule", {
    value: !0
  });
  function ko(e) {
    let t = e.length, r = 0, s = 0, n;
    while (s < t) if (r++, n = e.charCodeAt(s++), n >= 55296 && n <= 56319 && s < t) {
      if (n = e.charCodeAt(s), (n & 64512) === 56320) s++;
    }
    return r;
  }
  qo.default = ko;
  ko.code = 'require("ajv/dist/runtime/ucs2length").default';
});

var Ro = C(function(xo) {
  Object.defineProperty(xo, "__esModule", {
    value: !0
  });
  var G = bm(), jo = M_(), pf = Oo(), hf = {
    message({keyword: e, schemaCode: t}) {
      return G.str`must NOT have ${e === "maxLength" ? "more" : "fewer"} than ${t} characters`;
    },
    params: ({schemaCode: e}) => G._`{limit: ${e}}`
  }, mf = {
    keyword: [ "maxLength", "minLength" ],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: hf,
    code(e) {
      let {keyword: t, data: r, schemaCode: s, it: n} = e, o = t === "maxLength" ? G.operators.GT : G.operators.LT, i = n.opts.unicode === !1 ? G._`${r}.length` : G._`${jo.useFunc(e.gen, pf.default)}(${r})`;
      e.fail$data(G._`${i} ${o} ${s}`);
    }
  };
  xo.default = mf;
});

var Mo = C(function(Co) {
  Object.defineProperty(Co, "__esModule", {
    value: !0
  });
  var Io = Q(), To = M_(), X = bm(), _f = {
    message: ({schemaCode: e}) => X.str`must match pattern "${e}"`,
    params: ({schemaCode: e}) => X._`{pattern: ${e}}`
  }, gf = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: _f,
    code(e) {
      let {gen: t, data: r, $data: s, schema: n, schemaCode: o, it: i} = e, a = i.opts.unicodeRegExp ? "u" : "";
      if (s) {
        let {regExp: c} = i.opts.code, u = c.code === "new RegExp" ? X._`new RegExp` : To.useFunc(t, c), l = t.let("valid");
        t.try(() => t.assign(l, X._`${u}(${o}, ${a}).test(${r})`), () => t.assign(l, !1)), 
        e.fail$data(X._`!${l}`);
      } else {
        let c = Io.usePattern(e, n);
        e.fail$data(X._`!${c}.test(${r})`);
      }
    }
  };
  Co.default = gf;
});

var Do = C(function(Ao) {
  Object.defineProperty(Ao, "__esModule", {
    value: !0
  });
  var ie = bm(), vf = {
    message({keyword: e, schemaCode: t}) {
      return ie.str`must NOT have ${e === "maxProperties" ? "more" : "fewer"} than ${t} properties`;
    },
    params: ({schemaCode: e}) => ie._`{limit: ${e}}`
  }, wf = {
    keyword: [ "maxProperties", "minProperties" ],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: vf,
    code(e) {
      let {keyword: t, data: r, schemaCode: s} = e, n = t === "maxProperties" ? ie.operators.GT : ie.operators.LT;
      e.fail$data(ie._`Object.keys(${r}).length ${n} ${s}`);
    }
  };
  Ao.default = wf;
});

var Uo = C(function(zo) {
  Object.defineProperty(zo, "__esModule", {
    value: !0
  });
  var ae = Q(), ce = bm(), Vo = M_(), Ef = {
    message: ({params: {missingProperty: e}}) => ce.str`must have required property '${e}'`,
    params: ({params: {missingProperty: e}}) => ce._`{missingProperty: ${e}}`
  }, Sf = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: Ef,
    code(e) {
      let {gen: t, schema: r, schemaCode: s, data: n, $data: o, it: i} = e, {opts: a} = i;
      if (!o && r.length === 0) return;
      let c = r.length >= a.loopRequired;
      if (i.allErrors) u(); else l();
      if (a.strictRequired) {
        let _ = e.parentSchema.properties, {definedProperties: h} = e.it;
        for (let p of r) if ((_ === null || _ === void 0 ? void 0 : _[p]) === void 0 && !h.has(p)) {
          let y = i.schemaEnv.baseId + i.errSchemaPath, v = `required property "${p}" is not defined at "${y}" (strictRequired)`;
          Vo.checkStrictMode(i, v, i.opts.strictRequired);
        }
      }
      function u() {
        if (c || o) e.block$data(ce.nil, f); else for (let _ of r) ae.checkReportMissingProp(e, _);
      }
      function l() {
        let _ = t.let("missing");
        if (c || o) {
          let h = t.let("valid", !0);
          e.block$data(h, () => b(_, h)), e.ok(h);
        } else t.if(ae.checkMissingProp(e, r, _)), ae.reportMissingProp(e, _), t.else();
      }
      function f() {
        t.forOf("prop", s, _ => {
          e.setParams({
            missingProperty: _
          }), t.if(ae.noPropertyInData(t, n, _, a.ownProperties), () => e.error());
        });
      }
      function b(_, h) {
        e.setParams({
          missingProperty: _
        }), t.forOf(_, s, () => {
          t.assign(h, ae.propertyInData(t, n, _, a.ownProperties)), t.if(ce.not(h), () => {
            e.error(), t.break();
          });
        }, ce.nil);
      }
    }
  };
  zo.default = Sf;
});

var Fo = C(function(Ko) {
  Object.defineProperty(Ko, "__esModule", {
    value: !0
  });
  var ue = bm(), Nf = {
    message({keyword: e, schemaCode: t}) {
      return ue.str`must NOT have ${e === "maxItems" ? "more" : "fewer"} than ${t} items`;
    },
    params: ({schemaCode: e}) => ue._`{limit: ${e}}`
  }, kf = {
    keyword: [ "maxItems", "minItems" ],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: Nf,
    code(e) {
      let {keyword: t, data: r, schemaCode: s} = e, n = t === "maxItems" ? ue.operators.GT : ue.operators.LT;
      e.fail$data(ue._`${r}.length ${n} ${s}`);
    }
  };
  Ko.default = kf;
});

var Go = C(function(Ho) {
  Object.defineProperty(Ho, "__esModule", {
    value: !0
  });
  var Xe = ut(), j = bm(), Lo = M_(), Of = zJt(), jf = {
    message: ({params: {i: e, j: t}}) => j.str`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
    params: ({params: {i: e, j: t}}) => j._`{i: ${e}, j: ${t}}`
  }, xf = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: jf,
    code(e) {
      let {gen: t, data: r, $data: s, schema: n, parentSchema: o, schemaCode: i, it: a} = e;
      if (!s && !n) return;
      let c = t.let("valid"), u = o.items ? Xe.getSchemaTypes(o.items) : [];
      e.block$data(c, l, j._`${i} === false`), e.ok(c);
      function l() {
        let h = t.let("i", j._`${r}.length`), p = t.let("j");
        e.setParams({
          i: h,
          j: p
        }), t.assign(c, !0), t.if(j._`${h} > 1`, () => (f() ? b : _)(h, p));
      }
      function f() {
        return u.length > 0 && !u.some(h => h === "object" || h === "array");
      }
      function b(h, p) {
        let y = t.name("item"), v = Xe.checkDataTypes(u, y, a.opts.strictNumbers, Xe.DataType.Wrong), O = t.const("indices", j._`{}`);
        t.for(j._`;${h}--;`, () => {
          if (t.let(y, j._`${r}[${h}]`), t.if(v, j._`continue`), u.length > 1) t.if(j._`typeof ${y} == "string"`, j._`${y} += "_"`);
          t.if(j._`typeof ${O}[${y}] == "number"`, () => {
            t.assign(p, j._`${O}[${y}]`), e.error(), t.assign(c, !1).break();
          }).code(j._`${O}[${y}] = ${h}`);
        });
      }
      function _(h, p) {
        let y = Lo.useFunc(t, Of.default), v = t.name("outer");
        t.label(v).for(j._`;${h}--;`, () => t.for(j._`${p} = ${h}; ${p}--;`, () => t.if(j._`${y}(${r}[${h}], ${r}[${p}])`, () => {
          e.error(), t.assign(c, !1).break(v);
        })));
      }
    }
  };
  Ho.default = xf;
});

var Bo = C(function(Wo) {
  Object.defineProperty(Wo, "__esModule", {
    value: !0
  });
  var Ye = bm(), Jo = M_(), If = zJt(), Tf = {
    message: "must be equal to constant",
    params: ({schemaCode: e}) => Ye._`{allowedValue: ${e}}`
  }, Cf = {
    keyword: "const",
    $data: !0,
    error: Tf,
    code(e) {
      let {gen: t, data: r, $data: s, schemaCode: n, schema: o} = e;
      if (s || o && typeof o == "object") e.fail$data(Ye._`!${Jo.useFunc(t, If.default)}(${r}, ${n})`); else e.fail(Ye._`${o} !== ${r}`);
    }
  };
  Wo.default = Cf;
});

var Yo = C(function(Xo) {
  Object.defineProperty(Xo, "__esModule", {
    value: !0
  });
  var le = bm(), Qo = M_(), Af = zJt(), Df = {
    message: "must be equal to one of the allowed values",
    params: ({schemaCode: e}) => le._`{allowedValues: ${e}}`
  }, Vf = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: Df,
    code(e) {
      let {gen: t, data: r, $data: s, schema: n, schemaCode: o, it: i} = e;
      if (!s && n.length === 0) throw Error("enum must have non-empty array");
      let a = n.length >= i.opts.loopEnum, c, u = () => c !== null && c !== void 0 ? c : c = Qo.useFunc(t, Af.default), l;
      if (a || s) l = t.let("valid"), e.block$data(l, f); else {
        if (!Array.isArray(n)) throw Error("ajv implementation error");
        let _ = t.const("vSchema", o);
        l = le.or(...n.map((h, p) => b(_, p)));
      }
      e.pass(l);
      function f() {
        t.assign(l, !1), t.forOf("v", o, _ => t.if(le._`${u()}(${r}, ${_})`, () => t.assign(l, !0).break()));
      }
      function b(_, h) {
        let p = n[h];
        return typeof p === "object" && p !== null ? le._`${u()}(${r}, ${_}[${h}])` : le._`${r} === ${p}`;
      }
    }
  };
  Xo.default = Vf;
});

var Luo = C(function(Zo) {
  Object.defineProperty(Zo, "__esModule", {
    value: !0
  });
  var Uf = So(), Kf = No(), Ff = Ro(), Lf = Mo(), Hf = Do(), Gf = Uo(), Jf = Fo(), Wf = Go(), Bf = Bo(), Qf = Yo(), Xf = [ Uf.default, Kf.default, Ff.default, Lf.default, Hf.default, Gf.default, Jf.default, Wf.default, {
    keyword: "type",
    schemaType: [ "string", "array" ]
  }, {
    keyword: "nullable",
    schemaType: "boolean"
  }, Bf.default, Qf.default ];
  Zo.default = Xf;
});

var Rr = C(function(ti) {
  Object.defineProperty(ti, "__esModule", {
    value: !0
  });
  ti.validateAdditionalItems = void 0;
  var J = bm(), Ze = M_(), Zf = {
    message: ({params: {len: e}}) => J.str`must NOT have more than ${e} items`,
    params: ({params: {len: e}}) => J._`{limit: ${e}}`
  }, ep = {
    keyword: "additionalItems",
    type: "array",
    schemaType: [ "boolean", "object" ],
    before: "uniqueItems",
    error: Zf,
    code(e) {
      let {parentSchema: t, it: r} = e, {items: s} = t;
      if (!Array.isArray(s)) {
        Ze.checkStrictMode(r, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      ei(e, s);
    }
  };
  function ei(e, t) {
    let {gen: r, schema: s, data: n, keyword: o, it: i} = e;
    i.items = !0;
    let a = r.const("len", J._`${n}.length`);
    if (s === !1) e.setParams({
      len: t.length
    }), e.pass(J._`${a} <= ${t.length}`); else if (typeof s == "object" && !Ze.alwaysValidSchema(i, s)) {
      let u = r.var("valid", J._`${a} <= ${t.length}`);
      r.if(J.not(u), () => c(u)), e.ok(u);
    }
    function c(u) {
      r.forRange("i", t.length, a, l => {
        if (e.subschema({
          keyword: o,
          dataProp: l,
          dataPropType: Ze.Type.Num
        }, u), !i.allErrors) r.if(J.not(u), () => r.break());
      });
    }
  }
  ti.validateAdditionalItems = ei;
  ti.default = ep;
});

var Ir = C(function(oi) {
  Object.defineProperty(oi, "__esModule", {
    value: !0
  });
  oi.validateTuple = void 0;
  var zt = bm(), Ne = M_(), si = Q(), rp = {
    keyword: "items",
    type: "array",
    schemaType: [ "object", "array", "boolean" ],
    before: "uniqueItems",
    code(e) {
      let {schema: t, it: r} = e;
      if (Array.isArray(t)) return ni(e, "additionalItems", t);
      if (r.items = !0, Ne.alwaysValidSchema(r, t)) return;
      e.ok(si.validateArray(e));
    }
  };
  function ni(e, t, r = e.schema) {
    let {gen: s, parentSchema: n, data: o, keyword: i, it: a} = e;
    if (l(n), a.opts.unevaluated && r.length && a.items !== !0) a.items = Ne.mergeEvaluated.items(s, r.length, a.items);
    let c = s.name("valid"), u = s.const("len", zt._`${o}.length`);
    r.forEach((f, b) => {
      if (Ne.alwaysValidSchema(a, f)) return;
      s.if(zt._`${u} > ${b}`, () => e.subschema({
        keyword: i,
        schemaProp: b,
        dataProp: b
      }, c)), e.ok(c);
    });
    function l(f) {
      let {opts: b, errSchemaPath: _} = a, h = r.length, p = h === f.minItems && (h === f.maxItems || f[t] === !1);
      if (b.strictTuples && !p) {
        let y = `"${i}" is ${h}-tuple, but minItems or maxItems/${t} are not specified or different at path "${_}"`;
        Ne.checkStrictMode(a, y, b.strictTuples);
      }
    }
  }
  oi.validateTuple = ni;
  oi.default = rp;
});

var ui = C(function(ci) {
  Object.defineProperty(ci, "__esModule", {
    value: !0
  });
  var ai = Ir(), np = {
    keyword: "prefixItems",
    type: "array",
    schemaType: [ "array" ],
    before: "uniqueItems",
    code: e => ai.validateTuple(e, "items")
  };
  ci.default = np;
});

var hi = C(function(pi) {
  Object.defineProperty(pi, "__esModule", {
    value: !0
  });
  var Ut = bm(), li = M_(), di = Q(), fi = Rr(), ip = {
    message: ({params: {len: e}}) => Ut.str`must NOT have more than ${e} items`,
    params: ({params: {len: e}}) => Ut._`{limit: ${e}}`
  }, ap = {
    keyword: "items",
    type: "array",
    schemaType: [ "object", "boolean" ],
    before: "uniqueItems",
    error: ip,
    code(e) {
      let {schema: t, parentSchema: r, it: s} = e, {prefixItems: n} = r;
      if (s.items = !0, li.alwaysValidSchema(s, t)) return;
      if (n) fi.validateAdditionalItems(e, n); else e.ok(di.validateArray(e));
    }
  };
  pi.default = ap;
});

var yi = C(function(mi) {
  Object.defineProperty(mi, "__esModule", {
    value: !0
  });
  var A = bm(), ke = M_(), up = {
    message: ({params: {min: e, max: t}}) => t === void 0 ? A.str`must contain at least ${e} valid item(s)` : A.str`must contain at least ${e} and no more than ${t} valid item(s)`,
    params: ({params: {min: e, max: t}}) => t === void 0 ? A._`{minContains: ${e}}` : A._`{minContains: ${e}, maxContains: ${t}}`
  }, lp = {
    keyword: "contains",
    type: "array",
    schemaType: [ "object", "boolean" ],
    before: "uniqueItems",
    trackErrors: !0,
    error: up,
    code(e) {
      let {gen: t, schema: r, parentSchema: s, data: n, it: o} = e, i, a, {minContains: c, maxContains: u} = s;
      if (o.opts.next) i = c === void 0 ? 1 : c, a = u; else i = 1;
      let l = t.const("len", A._`${n}.length`);
      if (e.setParams({
        min: i,
        max: a
      }), a === void 0 && i === 0) {
        ke.checkStrictMode(o, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (a !== void 0 && i > a) {
        ke.checkStrictMode(o, '"minContains" > "maxContains" is always invalid'), e.fail();
        return;
      }
      if (ke.alwaysValidSchema(o, r)) {
        let p = A._`${l} >= ${i}`;
        if (a !== void 0) p = A._`${p} && ${l} <= ${a}`;
        e.pass(p);
        return;
      }
      o.items = !0;
      let f = t.name("valid");
      if (a === void 0 && i === 1) _(f, () => t.if(f, () => t.break())); else if (i === 0) {
        if (t.let(f, !0), a !== void 0) t.if(A._`${n}.length > 0`, b);
      } else t.let(f, !1), b();
      e.result(f, () => e.reset());
      function b() {
        let p = t.name("_valid"), y = t.let("count", 0);
        _(p, () => t.if(p, () => h(y)));
      }
      function _(p, y) {
        t.forRange("i", 0, l, v => {
          e.subschema({
            keyword: "contains",
            dataProp: v,
            dataPropType: ke.Type.Num,
            compositeRule: !0
          }, p), y();
        });
      }
      function h(p) {
        if (t.code(A._`${p}++`), a === void 0) t.if(A._`${p} >= ${i}`, () => t.assign(f, !0).break()); else if (t.if(A._`${p} > ${a}`, () => t.assign(f, !1).break()), 
        i === 1) t.assign(f, !0); else t.if(A._`${p} >= ${i}`, () => t.assign(f, !0));
      }
    }
  };
  mi.default = lp;
});

var C_r = C(function(vi) {
  Object.defineProperty(vi, "__esModule", {
    value: !0
  });
  vi.validateSchemaDeps = vi.validatePropertyDeps = vi.error = void 0;
  var et = bm(), _i = M_(), de = Q();
  vi.error = {
    message: ({params: {property: e, depsCount: t, deps: r}}) => et.str`must have ${t === 1 ? "property" : "properties"} ${r} when property ${e} is present`,
    params: ({params: {property: e, depsCount: t, deps: r, missingProperty: s}}) => et._`{property: ${e},
    missingProperty: ${s},
    depsCount: ${t},
    deps: ${r}}`
  };
  var fp = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: vi.error,
    code(e) {
      let [t, r] = pp(e);
      gi(e, t), $i(e, r);
    }
  };
  function pp({schema: e}) {
    let t = {}, r = {};
    for (let s in e) {
      if (s === "__proto__") continue;
      let n = Array.isArray(e[s]) ? t : r;
      n[s] = e[s];
    }
    return [ t, r ];
  }
  function gi(e, t = e.schema) {
    let {gen: r, data: s, it: n} = e;
    if (Object.keys(t).length === 0) return;
    let o = r.let("missing");
    for (let i in t) {
      let a = t[i];
      if (a.length === 0) continue;
      let c = de.propertyInData(r, s, i, n.opts.ownProperties);
      if (e.setParams({
        property: i,
        depsCount: a.length,
        deps: a.join(", ")
      }), n.allErrors) r.if(c, () => {
        for (let u of a) de.checkReportMissingProp(e, u);
      }); else r.if(et._`${c} && (${de.checkMissingProp(e, a, o)})`), de.reportMissingProp(e, o), 
      r.else();
    }
  }
  vi.validatePropertyDeps = gi;
  function $i(e, t = e.schema) {
    let {gen: r, data: s, keyword: n, it: o} = e, i = r.name("valid");
    for (let a in t) {
      if (_i.alwaysValidSchema(o, t[a])) continue;
      r.if(de.propertyInData(r, s, a, o.opts.ownProperties), () => {
        let c = e.subschema({
          keyword: n,
          schemaProp: a
        }, i);
        e.mergeValidEvaluated(c, i);
      }, () => r.var(i, !0)), e.ok(i);
    }
  }
  vi.validateSchemaDeps = $i;
  vi.default = fp;
});

var Pi = C(function(Si) {
  Object.defineProperty(Si, "__esModule", {
    value: !0
  });
  var Kt = bm(), Ei = M_(), yp = {
    message: "property name must be valid",
    params: ({params: e}) => Kt._`{propertyName: ${e.propertyName}}`
  }, _p = {
    keyword: "propertyNames",
    type: "object",
    schemaType: [ "object", "boolean" ],
    error: yp,
    code(e) {
      let {gen: t, schema: r, data: s, it: n} = e;
      if (Ei.alwaysValidSchema(n, r)) return;
      let o = t.name("valid");
      t.forIn("key", s, i => {
        e.setParams({
          propertyName: i
        }), e.subschema({
          keyword: "propertyNames",
          data: i,
          dataTypes: [ "string" ],
          propertyName: i,
          compositeRule: !0
        }, o), t.if(Kt.not(o), () => {
          if (e.error(!0), !n.allErrors) t.break();
        });
      }), e.ok(o);
    }
  };
  Si.default = _p;
});

var Tr = C(function(Ni) {
  Object.defineProperty(Ni, "__esModule", {
    value: !0
  });
  var qe = Q(), U = bm(), $p = Qbe(), Oe = M_(), vp = {
    message: "must NOT have additional properties",
    params: ({params: e}) => U._`{additionalProperty: ${e.additionalProperty}}`
  }, wp = {
    keyword: "additionalProperties",
    type: [ "object" ],
    schemaType: [ "boolean", "object" ],
    allowUndefined: !0,
    trackErrors: !0,
    error: vp,
    code(e) {
      let {gen: t, schema: r, parentSchema: s, data: n, errsCount: o, it: i} = e;
      if (!o) throw Error("ajv implementation error");
      let {allErrors: a, opts: c} = i;
      if (i.props = !0, c.removeAdditional !== "all" && Oe.alwaysValidSchema(i, r)) return;
      let u = qe.allSchemaProperties(s.properties), l = qe.allSchemaProperties(s.patternProperties);
      f(), e.ok(U._`${o} === ${$p.default.errors}`);
      function f() {
        t.forIn("key", n, y => {
          if (!u.length && !l.length) h(y); else t.if(b(y), () => h(y));
        });
      }
      function b(y) {
        let v;
        if (u.length > 8) {
          let O = Oe.schemaRefOrVal(i, s.properties, "properties");
          v = qe.isOwnProperty(t, O, y);
        } else if (u.length) v = U.or(...u.map(O => U._`${y} === ${O}`)); else v = U.nil;
        if (l.length) v = U.or(v, ...l.map(O => U._`${qe.usePattern(e, O)}.test(${y})`));
        return U.not(v);
      }
      function _(y) {
        t.code(U._`delete ${n}[${y}]`);
      }
      function h(y) {
        if (c.removeAdditional === "all" || c.removeAdditional && r === !1) {
          _(y);
          return;
        }
        if (r === !1) {
          if (e.setParams({
            additionalProperty: y
          }), e.error(), !a) t.break();
          return;
        }
        if (typeof r == "object" && !Oe.alwaysValidSchema(i, r)) {
          let v = t.name("valid");
          if (c.removeAdditional === "failing") p(y, v, !1), t.if(U.not(v), () => {
            e.reset(), _(y);
          }); else if (p(y, v), !a) t.if(U.not(v), () => t.break());
        }
      }
      function p(y, v, O) {
        let q = {
          keyword: "additionalProperties",
          dataProp: y,
          dataPropType: Oe.Type.Str
        };
        if (O === !1) Object.assign(q, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        });
        e.subschema(q, v);
      }
    }
  };
  Ni.default = wp;
});

var ji = C(function(Oi) {
  Object.defineProperty(Oi, "__esModule", {
    value: !0
  });
  var qi = jJt(), Ft = Q(), tt = M_(), ki = Tr(), Ep = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(e) {
      let {gen: t, schema: r, parentSchema: s, data: n, it: o} = e;
      if (o.opts.removeAdditional === "all" && s.additionalProperties === void 0) ki.default.code(new qi.KeywordCxt(o, ki.default, "additionalProperties"));
      let i = Ft.allSchemaProperties(r);
      for (let f of i) o.definedProperties.add(f);
      if (o.opts.unevaluated && i.length && o.props !== !0) o.props = tt.mergeEvaluated.props(t, tt.toHash(i), o.props);
      let a = i.filter(f => !tt.alwaysValidSchema(o, r[f]));
      if (a.length === 0) return;
      let c = t.name("valid");
      for (let f of a) {
        if (u(f)) l(f); else {
          if (t.if(Ft.propertyInData(t, n, f, o.opts.ownProperties)), l(f), !o.allErrors) t.else().var(c, !0);
          t.endIf();
        }
        e.it.definedProperties.add(f), e.ok(c);
      }
      function u(f) {
        return o.opts.useDefaults && !o.compositeRule && r[f].default !== void 0;
      }
      function l(f) {
        e.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, c);
      }
    }
  };
  Oi.default = Ep;
});

var Ri = C(function(xi) {
  Object.defineProperty(xi, "__esModule", {
    value: !0
  });
  var Lt = Q(), je = bm(), Ht = M_(), Gt = M_(), Pp = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(e) {
      let {gen: t, schema: r, data: s, parentSchema: n, it: o} = e, {opts: i} = o, a = Lt.allSchemaProperties(r), c = a.filter(p => Ht.alwaysValidSchema(o, r[p]));
      if (a.length === 0 || c.length === a.length && (!o.opts.unevaluated || o.props === !0)) return;
      let u = i.strictSchema && !i.allowMatchingProperties && n.properties, l = t.name("valid");
      if (o.props !== !0 && !(o.props instanceof je.Name)) o.props = Gt.evaluatedPropsToName(t, o.props);
      let {props: f} = o;
      b();
      function b() {
        for (let p of a) {
          if (u) _(p);
          if (o.allErrors) h(p); else t.var(l, !0), h(p), t.if(l);
        }
      }
      function _(p) {
        for (let y in u) if (new RegExp(p).test(y)) Ht.checkStrictMode(o, `property ${y} matches pattern ${p} (use allowMatchingProperties)`);
      }
      function h(p) {
        t.forIn("key", s, y => {
          t.if(je._`${Lt.usePattern(e, p)}.test(${y})`, () => {
            let v = c.includes(p);
            if (!v) e.subschema({
              keyword: "patternProperties",
              schemaProp: p,
              dataProp: y,
              dataPropType: Gt.Type.Str
            }, l);
            if (o.opts.unevaluated && f !== !0) t.assign(je._`${f}[${y}]`, !0); else if (!v && !o.allErrors) t.if(je.not(l), () => t.break());
          });
        });
      }
    }
  };
  xi.default = Pp;
});

var Ci = C(function(Ti) {
  Object.defineProperty(Ti, "__esModule", {
    value: !0
  });
  var Ii = M_(), kp = {
    keyword: "not",
    schemaType: [ "object", "boolean" ],
    trackErrors: !0,
    code(e) {
      let {gen: t, schema: r, it: s} = e;
      if (Ii.alwaysValidSchema(s, r)) {
        e.fail();
        return;
      }
      let n = t.name("valid");
      e.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, n), e.failResult(n, () => e.reset(), () => e.error());
    },
    error: {
      message: "must NOT be valid"
    }
  };
  Ti.default = kp;
});

var Di = C(function(Ai) {
  Object.defineProperty(Ai, "__esModule", {
    value: !0
  });
  var Mi = Q(), Op = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: Mi.validateUnion,
    error: {
      message: "must match a schema in anyOf"
    }
  };
  Ai.default = Op;
});

var Ui = C(function(zi) {
  Object.defineProperty(zi, "__esModule", {
    value: !0
  });
  var xe = bm(), Vi = M_(), xp = {
    message: "must match exactly one schema in oneOf",
    params: ({params: e}) => xe._`{passingSchemas: ${e.passing}}`
  }, Rp = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: xp,
    code(e) {
      let {gen: t, schema: r, parentSchema: s, it: n} = e;
      if (!Array.isArray(r)) throw Error("ajv implementation error");
      if (n.opts.discriminator && s.discriminator) return;
      let o = r, i = t.let("valid", !1), a = t.let("passing", null), c = t.name("_valid");
      e.setParams({
        passing: a
      }), t.block(u), e.result(i, () => e.reset(), () => e.error(!0));
      function u() {
        o.forEach((l, f) => {
          let b;
          if (Vi.alwaysValidSchema(n, l)) t.var(c, !0); else b = e.subschema({
            keyword: "oneOf",
            schemaProp: f,
            compositeRule: !0
          }, c);
          if (f > 0) t.if(xe._`${c} && ${i}`).assign(i, !1).assign(a, xe._`[${a}, ${f}]`).else();
          t.if(c, () => {
            if (t.assign(i, !0), t.assign(a, f), b) e.mergeEvaluated(b, xe.Name);
          });
        });
      }
    }
  };
  zi.default = Rp;
});

var Li = C(function(Fi) {
  Object.defineProperty(Fi, "__esModule", {
    value: !0
  });
  var Ki = M_(), Tp = {
    keyword: "allOf",
    schemaType: "array",
    code(e) {
      let {gen: t, schema: r, it: s} = e;
      if (!Array.isArray(r)) throw Error("ajv implementation error");
      let n = t.name("valid");
      r.forEach((o, i) => {
        if (Ki.alwaysValidSchema(s, o)) return;
        let a = e.subschema({
          keyword: "allOf",
          schemaProp: i
        }, n);
        e.ok(n), e.mergeEvaluated(a);
      });
    }
  };
  Fi.default = Tp;
});

var Ji = C(function(Gi) {
  Object.defineProperty(Gi, "__esModule", {
    value: !0
  });
  var Re = bm(), Jt = M_(), Mp = {
    message: ({params: e}) => Re.str`must match "${e.ifClause}" schema`,
    params: ({params: e}) => Re._`{failingKeyword: ${e.ifClause}}`
  }, Ap = {
    keyword: "if",
    schemaType: [ "object", "boolean" ],
    trackErrors: !0,
    error: Mp,
    code(e) {
      let {gen: t, parentSchema: r, it: s} = e;
      if (r.then === void 0 && r.else === void 0) Jt.checkStrictMode(s, '"if" without "then" and "else" is ignored');
      let n = Hi(s, "then"), o = Hi(s, "else");
      if (!n && !o) return;
      let i = t.let("valid", !0), a = t.name("_valid");
      if (c(), e.reset(), n && o) {
        let l = t.let("ifClause");
        e.setParams({
          ifClause: l
        }), t.if(a, u("then", l), u("else", l));
      } else if (n) t.if(a, u("then")); else t.if(Re.not(a), u("else"));
      e.pass(i, () => e.error(!0));
      function c() {
        let l = e.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, a);
        e.mergeEvaluated(l);
      }
      function u(l, f) {
        return () => {
          let b = e.subschema({
            keyword: l
          }, a);
          if (t.assign(i, a), e.mergeValidEvaluated(b, i), f) t.assign(f, Re._`${l}`); else e.setParams({
            ifClause: l
          });
        };
      }
    }
  };
  function Hi(e, t) {
    let r = e.schema[t];
    return r !== void 0 && !Jt.alwaysValidSchema(e, r);
  }
  Gi.default = Ap;
});

var Qi = C(function(Bi) {
  Object.defineProperty(Bi, "__esModule", {
    value: !0
  });
  var Wi = M_(), Vp = {
    keyword: [ "then", "else" ],
    schemaType: [ "object", "boolean" ],
    code({keyword: e, parentSchema: t, it: r}) {
      if (t.if === void 0) Wi.checkStrictMode(r, `"${e}" without "if" is ignored`);
    }
  };
  Bi.default = Vp;
});

var Nuo = C(function(Xi) {
  Object.defineProperty(Xi, "__esModule", {
    value: !0
  });
  var Up = Rr(), Kp = ui(), Fp = Ir(), Lp = hi(), Hp = yi(), Gp = C_r(), Jp = Pi(), Wp = Tr(), Bp = ji(), Qp = Ri(), Xp = Ci(), Yp = Di(), Zp = Ui(), eh = Li(), th = Ji(), rh = Qi();
  function sh(e = !1) {
    let t = [ Xp.default, Yp.default, Zp.default, eh.default, th.default, rh.default, Jp.default, Wp.default, Gp.default, Bp.default, Qp.default ];
    if (e) t.push(Kp.default, Lp.default); else t.push(Up.default, Fp.default);
    return t.push(Hp.default), t;
  }
  Xi.default = sh;
});

var Zi = C(function(Yi) {
  Object.defineProperty(Yi, "__esModule", {
    value: !0
  });
  var k = bm(), oh = {
    message: ({schemaCode: e}) => k.str`must match format "${e}"`,
    params: ({schemaCode: e}) => k._`{format: ${e}}`
  }, ih = {
    keyword: "format",
    type: [ "number", "string" ],
    schemaType: "string",
    $data: !0,
    error: oh,
    code(e, t) {
      let {gen: r, data: s, $data: n, schema: o, schemaCode: i, it: a} = e, {opts: c, errSchemaPath: u, schemaEnv: l, self: f} = a;
      if (!c.validateFormats) return;
      if (n) b(); else _();
      function b() {
        let h = r.scopeValue("formats", {
          ref: f.formats,
          code: c.code.formats
        }), p = r.const("fDef", k._`${h}[${i}]`), y = r.let("fType"), v = r.let("format");
        r.if(k._`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => r.assign(y, k._`${p}.type || "string"`).assign(v, k._`${p}.validate`), () => r.assign(y, k._`"string"`).assign(v, p)), 
        e.fail$data(k.or(O(), q()));
        function O() {
          if (c.strictSchema === !1) return k.nil;
          return k._`${i} && !${v}`;
        }
        function q() {
          let M = l.$async ? k._`(${p}.async ? await ${v}(${s}) : ${v}(${s}))` : k._`${v}(${s})`, N = k._`(typeof ${v} == "function" ? ${M} : ${v}.test(${s}))`;
          return k._`${v} && ${v} !== true && ${y} === ${t} && !${N}`;
        }
      }
      function _() {
        let h = f.formats[o];
        if (!h) {
          O();
          return;
        }
        if (h === !0) return;
        let [p, y, v] = q(h);
        if (p === t) e.pass(M());
        function O() {
          if (c.strictSchema === !1) {
            f.logger.warn(N());
            return;
          }
          throw Error(N());
          function N() {
            return `unknown format "${o}" ignored in schema at path "${u}"`;
          }
        }
        function q(N) {
          let ee = N instanceof RegExp ? k.regexpCode(N) : c.code.formats ? k._`${c.code.formats}${k.getProperty(o)}` : void 0, fe = r.scopeValue("formats", {
            key: o,
            ref: N,
            code: ee
          });
          if (typeof N == "object" && !(N instanceof RegExp)) return [ N.type || "string", N.validate, k._`${fe}.validate` ];
          return [ "string", N, fe ];
        }
        function M() {
          if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
            if (!l.$async) throw Error("async format in sync schema");
            return k._`await ${v}(${s})`;
          }
          return typeof y == "function" ? k._`${v}(${s})` : k._`${v}.test(${s})`;
        }
      }
    }
  };
  Yi.default = ih;
});

var $uo = C(function(ea) {
  Object.defineProperty(ea, "__esModule", {
    value: !0
  });
  var ch = Zi(), uh = [ ch.default ];
  ea.default = uh;
});

var Fuo = C(function(ta) {
  Object.defineProperty(ta, "__esModule", {
    value: !0
  });
  ta.contentVocabulary = ta.metadataVocabulary = void 0;
  ta.metadataVocabulary = [ "title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples" ];
  ta.contentVocabulary = [ "contentMediaType", "contentEncoding", "contentSchema" ];
});

var na = C(function(sa) {
  Object.defineProperty(sa, "__esModule", {
    value: !0
  });
  var fh = Duo(), ph = Luo(), hh = Nuo(), mh = $uo(), Wt = Fuo(), yh = [ fh.default, ph.default, (0, 
  hh.default)(), mh.default, Wt.metadataVocabulary, Wt.contentVocabulary ];
  sa.default = yh;
});

var ca = C(function(ia) {
  Object.defineProperty(ia, "__esModule", {
    value: !0
  });
  ia.DiscrError = void 0;
  var oa;
  (function(e) {
    e.Tag = "tag", e.Mapping = "mapping";
  })(oa || (ia.DiscrError = oa = {}));
});

var Uuo = C(function(la) {
  Object.defineProperty(la, "__esModule", {
    value: !0
  });
  var Y = bm(), rt = ca(), Bt = tNn(), gh = WJt(), ua = M_(), $h = {
    message: ({params: {discrError: e, tagName: t}}) => e === rt.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
    params: ({params: {discrError: e, tag: t, tagName: r}}) => Y._`{error: ${e}, tag: ${r}, tagValue: ${t}}`
  }, vh = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: $h,
    code(e) {
      let {gen: t, data: r, schema: s, parentSchema: n, it: o} = e, {oneOf: i} = n;
      if (!o.opts.discriminator) throw Error("discriminator: requires discriminator option");
      let a = s.propertyName;
      if (typeof a != "string") throw Error("discriminator: requires propertyName");
      if (s.mapping) throw Error("discriminator: mapping is not supported");
      if (!i) throw Error("discriminator: requires oneOf keyword");
      let c = t.let("valid", !1), u = t.const("tag", Y._`${r}${Y.getProperty(a)}`);
      t.if(Y._`typeof ${u} == "string"`, () => l(), () => e.error(!1, {
        discrError: rt.DiscrError.Tag,
        tag: u,
        tagName: a
      })), e.ok(c);
      function l() {
        let _ = b();
        t.if(!1);
        for (let h in _) t.elseIf(Y._`${u} === ${h}`), t.assign(c, f(_[h]));
        t.else(), e.error(!1, {
          discrError: rt.DiscrError.Mapping,
          tag: u,
          tagName: a
        }), t.endIf();
      }
      function f(_) {
        let h = t.name("valid"), p = e.subschema({
          keyword: "oneOf",
          schemaProp: _
        }, h);
        return e.mergeEvaluated(p, Y.Name), h;
      }
      function b() {
        var _;
        let h = {}, p = v(n), y = !0;
        for (let M = 0; M < i.length; M++) {
          let N = i[M];
          if ((N === null || N === void 0 ? void 0 : N.$ref) && !ua.schemaHasRulesButRef(N, o.self.RULES)) {
            let fe = N.$ref;
            if (N = Bt.resolveRef.call(o.self, o.schemaEnv.root, o.baseId, fe), N instanceof Bt.SchemaEnv) N = N.schema;
            if (N === void 0) throw new gh.default(o.opts.uriResolver, o.baseId, fe);
          }
          let ee = (_ = N === null || N === void 0 ? void 0 : N.properties) === null || _ === void 0 ? void 0 : _[a];
          if (typeof ee != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${a}"`);
          y = y && (p || v(N)), O(ee, M);
        }
        if (!y) throw Error(`discriminator: "${a}" must be required`);
        return h;
        function v({required: M}) {
          return Array.isArray(M) && M.includes(a);
        }
        function O(M, N) {
          if (M.const) q(M.const, N); else if (M.enum) for (let ee of M.enum) q(ee, N); else throw Error(`discriminator: "properties/${a}" must have "const" or "enum"`);
        }
        function q(M, N) {
          if (typeof M != "string" || M in h) throw Error(`discriminator: "${a}" values must be unique strings`);
          h[M] = N;
        }
      }
    }
  };
  la.default = vh;
});

var da = C(function(ay, bh) {
  bh.exports = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://json-schema.org/draft-07/schema#",
    title: "Core schema meta-schema",
    definitions: {
      schemaArray: {
        type: "array",
        minItems: 1,
        items: {
          $ref: "#"
        }
      },
      nonNegativeInteger: {
        type: "integer",
        minimum: 0
      },
      nonNegativeIntegerDefault0: {
        allOf: [ {
          $ref: "#/definitions/nonNegativeInteger"
        }, {
          default: 0
        } ]
      },
      simpleTypes: {
        enum: [ "array", "boolean", "integer", "null", "number", "object", "string" ]
      },
      stringArray: {
        type: "array",
        items: {
          type: "string"
        },
        uniqueItems: !0,
        default: []
      }
    },
    type: [ "object", "boolean" ],
    properties: {
      $id: {
        type: "string",
        format: "uri-reference"
      },
      $schema: {
        type: "string",
        format: "uri"
      },
      $ref: {
        type: "string",
        format: "uri-reference"
      },
      $comment: {
        type: "string"
      },
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      default: !0,
      readOnly: {
        type: "boolean",
        default: !1
      },
      examples: {
        type: "array",
        items: !0
      },
      multipleOf: {
        type: "number",
        exclusiveMinimum: 0
      },
      maximum: {
        type: "number"
      },
      exclusiveMaximum: {
        type: "number"
      },
      minimum: {
        type: "number"
      },
      exclusiveMinimum: {
        type: "number"
      },
      maxLength: {
        $ref: "#/definitions/nonNegativeInteger"
      },
      minLength: {
        $ref: "#/definitions/nonNegativeIntegerDefault0"
      },
      pattern: {
        type: "string",
        format: "regex"
      },
      additionalItems: {
        $ref: "#"
      },
      items: {
        anyOf: [ {
          $ref: "#"
        }, {
          $ref: "#/definitions/schemaArray"
        } ],
        default: !0
      },
      maxItems: {
        $ref: "#/definitions/nonNegativeInteger"
      },
      minItems: {
        $ref: "#/definitions/nonNegativeIntegerDefault0"
      },
      uniqueItems: {
        type: "boolean",
        default: !1
      },
      contains: {
        $ref: "#"
      },
      maxProperties: {
        $ref: "#/definitions/nonNegativeInteger"
      },
      minProperties: {
        $ref: "#/definitions/nonNegativeIntegerDefault0"
      },
      required: {
        $ref: "#/definitions/stringArray"
      },
      additionalProperties: {
        $ref: "#"
      },
      definitions: {
        type: "object",
        additionalProperties: {
          $ref: "#"
        },
        default: {}
      },
      properties: {
        type: "object",
        additionalProperties: {
          $ref: "#"
        },
        default: {}
      },
      patternProperties: {
        type: "object",
        additionalProperties: {
          $ref: "#"
        },
        propertyNames: {
          format: "regex"
        },
        default: {}
      },
      dependencies: {
        type: "object",
        additionalProperties: {
          anyOf: [ {
            $ref: "#"
          }, {
            $ref: "#/definitions/stringArray"
          } ]
        }
      },
      propertyNames: {
        $ref: "#"
      },
      const: !0,
      enum: {
        type: "array",
        items: !0,
        minItems: 1,
        uniqueItems: !0
      },
      type: {
        anyOf: [ {
          $ref: "#/definitions/simpleTypes"
        }, {
          type: "array",
          items: {
            $ref: "#/definitions/simpleTypes"
          },
          minItems: 1,
          uniqueItems: !0
        } ]
      },
      format: {
        type: "string"
      },
      contentMediaType: {
        type: "string"
      },
      contentEncoding: {
        type: "string"
      },
      if: {
        $ref: "#"
      },
      then: {
        $ref: "#"
      },
      else: {
        $ref: "#"
      },
      allOf: {
        $ref: "#/definitions/schemaArray"
      },
      anyOf: {
        $ref: "#/definitions/schemaArray"
      },
      oneOf: {
        $ref: "#/definitions/schemaArray"
      },
      not: {
        $ref: "#"
      }
    },
    default: !0
  };
});

var nNn = C(function(W, Cr) {
  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.MissingRefError = W.ValidationError = W.CodeGen = W.Name = W.nil = W.stringify = W.str = W._ = W.KeywordCxt = W.Ajv = void 0;
  var Eh = Huo(), Sh = na(), Ph = Uuo(), fa = da(), Nh = [ "/properties" ], Qt = "http://json-schema.org/draft-07/schema";
  class pt extends Eh.default {
    _addVocabularies() {
      if (super._addVocabularies(), Sh.default.forEach(e => this.addVocabulary(e)), this.opts.discriminator) this.addKeyword(Ph.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta) return;
      let e = this.opts.$data ? this.$dataMetaSchema(fa, Nh) : fa;
      this.addMetaSchema(e, Qt, !1), this.refs["http://json-schema.org/schema"] = Qt;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(Qt) ? Qt : void 0);
    }
  }
  W.Ajv = pt;
  Cr.exports = W = pt;
  Cr.exports.Ajv = pt;
  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.default = pt;
  var kh = jJt();
  Object.defineProperty(W, "KeywordCxt", {
    enumerable: !0,
    get: function() {
      return kh.KeywordCxt;
    }
  });
  var st = bm();
  Object.defineProperty(W, "_", {
    enumerable: !0,
    get: function() {
      return st._;
    }
  });
  Object.defineProperty(W, "str", {
    enumerable: !0,
    get: function() {
      return st.str;
    }
  });
  Object.defineProperty(W, "stringify", {
    enumerable: !0,
    get: function() {
      return st.stringify;
    }
  });
  Object.defineProperty(W, "nil", {
    enumerable: !0,
    get: function() {
      return st.nil;
    }
  });
  Object.defineProperty(W, "Name", {
    enumerable: !0,
    get: function() {
      return st.Name;
    }
  });
  Object.defineProperty(W, "CodeGen", {
    enumerable: !0,
    get: function() {
      return st.CodeGen;
    }
  });
  var qh = eNn();
  Object.defineProperty(W, "ValidationError", {
    enumerable: !0,
    get: function() {
      return qh.default;
    }
  });
  var Oh = WJt();
  Object.defineProperty(W, "MissingRefError", {
    enumerable: !0,
    get: function() {
      return Oh.default;
    }
  });
});

export { bm, M_, Qbe, jJt, eNn, WJt, tNn, Huo, A_r, Duo, Luo, C_r, Nuo, $uo, Fuo, Uuo, nNn };
