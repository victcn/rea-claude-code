// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { $Or, iOo, gqn, hqn, GNs, Can, VNs, Ran, EG, igt, KNs, qNs, aOo, xan, YNs, CNt, lOo, XNs, agt, W1e, Hl, dOo, JNs, QNs, bVs, SVs, wVs, vVs, EVs, ZNs, kVs, RNt, e$s, z1e, cOo, G1e, FOr, UOr, t$s, xNt, PNt, uOo, Hw, TVs, n$s, ur, uXe, yqn, Tee, aX } from "./chunk-yk19sxff.js";

function Fs() {
  let e = this._zod;
  return e.message ?? (e.message = JSON.stringify(e.def, gqn, 2)), e.message;
}

function Us(e) {
  this._zod.message = e;
}

var Ms = {
  get: Fs,
  set: Us,
  enumerable: !0,
  configurable: !0
}, ze = {
  value: void 0,
  enumerable: !1
}, ye = {
  value: void 0,
  enumerable: !1
}, Ft = new WeakSet([ Object.prototype, Error.prototype ]), Ut = (e, t) => {
  e.name = "$ZodError", ze.value = e._zod, Object.defineProperty(e, "_zod", ze), ye.value = t, 
  Object.defineProperty(e, "issues", ye), ze.value = void 0, ye.value = void 0, Object.defineProperty(e, "message", Ms);
  let r = Object.getPrototypeOf(e);
  if (!Ft.has(r)) Ft.add(r), Object.defineProperty(r, "toString", {
    configurable: !0,
    enumerable: !1,
    get() {
      let n = () => this.message;
      return Object.defineProperty(this, "toString", {
        value: n,
        configurable: !0,
        writable: !0
      }), n;
    },
    set(n) {
      Object.defineProperty(this, "toString", {
        value: n,
        configurable: !0,
        writable: !0
      });
    }
  });
}, ee = ur("$ZodError", Ut), be = ur("$ZodError", Ut, void 0, {
  Parent: Error
});

function Js(e, t, r) {
  if (!Object.prototype.hasOwnProperty.call(e, t)) if (t === "__proto__") Object.defineProperty(e, t, {
    value: r(),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }); else e[t] = r();
  return e[t];
}

function Mt(e, t = r => r.message) {
  let r = {}, n = [];
  for (let s of e.issues) if (s.path.length > 0) Js(r, s.path[0], () => []).push(t(s)); else n.push(t(s));
  return {
    formErrors: n,
    fieldErrors: r
  };
}

function Jt(e, t = r => r.message) {
  let r = {
    _errors: []
  }, n = (s, i = []) => {
    for (let c of s.issues) if (c.code === "invalid_union" && c.errors.length) c.errors.map(a => n({
      issues: a
    }, [ ...i, ...c.path ])); else if (c.code === "invalid_key") n({
      issues: c.issues
    }, [ ...i, ...c.path ]); else if (c.code === "invalid_element") n({
      issues: c.issues
    }, [ ...i, ...c.path ]); else {
      let a = [ ...i, ...c.path ];
      if (a.length === 0) r._errors.push(t(c)); else {
        let l = r, p = 0;
        while (p < a.length) {
          let f = a[p], d = p === a.length - 1;
          if (f === "_errors") {
            if (d) l._errors.push(t(c));
            p++;
            continue;
          }
          if (!Object.prototype.hasOwnProperty.call(l, f)) Object.defineProperty(l, f, {
            value: {
              _errors: []
            },
            enumerable: !0,
            writable: !0,
            configurable: !0
          });
          let h = l[f];
          if (d) h._errors.push(t(c));
          l = h, p++;
        }
      }
    }
  };
  return n(e), r;
}

function te(e, t) {
  return {
    callee: t?.callee ?? e,
    Err: t?.Err
  };
}

var re = e => {
  let t = (r, n, s, i) => {
    let c = s ? {
      ...s,
      async: !1
    } : {
      async: !1
    }, a = r._zod.run({
      value: n,
      issues: []
    }, c);
    if (a instanceof Promise) throw new uXe;
    if (a.issues.length) {
      let l = new (i?.Err ?? e)(a.issues.map(p => G1e(p, c, aX())));
      throw aOo(l, i?.callee ?? t), l;
    }
    return a.value;
  };
  return t;
};

var ne = e => {
  let t = async (r, n, s, i) => {
    let c = s ? {
      ...s,
      async: !0
    } : {
      async: !0
    }, a = r._zod.run({
      value: n,
      issues: []
    }, c);
    if (a instanceof Promise) a = await a;
    if (a.issues.length) {
      let l = new (i?.Err ?? e)(a.issues.map(p => G1e(p, c, aX())));
      throw aOo(l, i?.callee ?? t), l;
    }
    return a.value;
  };
  return t;
};

var D = e => (t, r, n) => {
  let s = n ? {
    ...n,
    async: !1
  } : {
    async: !1
  }, i = t._zod.run({
    value: r,
    issues: []
  }, s);
  if (i instanceof Promise) throw new uXe;
  return i.issues.length ? {
    success: !1,
    error: new (e ?? ee)(i.issues.map(c => G1e(c, s, aX())))
  } : {
    success: !0,
    data: i.value
  };
}, cqn = D(be), j = e => async (t, r, n) => {
  let s = n ? {
    ...n,
    async: !0
  } : {
    async: !0
  }, i = t._zod.run({
    value: r,
    issues: []
  }, s);
  if (i instanceof Promise) i = await i;
  return i.issues.length ? {
    success: !1,
    error: new e(i.issues.map(c => G1e(c, s, aX())))
  } : {
    success: !0,
    data: i.value
  };
}, Vt = j(be);

var Kt = e => {
  let t = re(e), r = (n, s, i, c) => {
    let a = i ? {
      ...i,
      direction: "backward"
    } : {
      direction: "backward"
    };
    return t(n, s, a, te(r, c));
  };
  return r;
};

var Wt = e => {
  let t = re(e), r = (n, s, i, c) => t(n, s, i, te(r, c));
  return r;
};

var Gt = e => {
  let t = ne(e), r = async (n, s, i, c) => {
    let a = i ? {
      ...i,
      direction: "backward"
    } : {
      direction: "backward"
    };
    return await t(n, s, a, te(r, c));
  };
  return r;
};

var Yt = e => {
  let t = ne(e), r = async (n, s, i, c) => await t(n, s, i, te(r, c));
  return r;
};

var qt = e => (t, r, n) => {
  let s = n ? {
    ...n,
    direction: "backward"
  } : {
    direction: "backward"
  };
  return D(e)(t, r, s);
};

var Xt = e => (t, r, n) => D(e)(t, r, n);

var Ht = e => async (t, r, n) => {
  let s = n ? {
    ...n,
    direction: "backward"
  } : {
    direction: "backward"
  };
  return j(e)(t, r, s);
};

var Qt = e => async (t, r, n) => j(e)(t, r, n);

var er = /^[cC][0-9a-z]{6,}$/, tr = /^[0-9a-z]+$/, rr = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, or = /^[0-9a-vA-V]{20}$/, nr = /^[A-Za-z0-9]{27}$/, sr = /^[a-zA-Z0-9_-]{21}$/;

function ir(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}

var cr = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;

var ar = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ze = e => {
  if (!e) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};

var lr = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;

var Vs = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";

function pr() {
  return new RegExp(Vs, "u");
}

var fr = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, dr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;

var mr = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, hr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, _r = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, we = /^[A-Za-z0-9_-]*$/;

var gr = /^https?$/, xr = /^\+[1-9]\d{6,14}$/;

var vr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";

function Ks(e) {
  return new RegExp(`^${e}$`);
}

var zr = Ks(vr);

function ke(e) {
  return typeof e.precision === "number" ? e.precision === -1 ? "(?:[01]\\d|2[0-3]):[0-5]\\d" : e.precision === 0 ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+)?" : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}

function yr(e) {
  return new RegExp(`^${ke(e)}$`);
}

function $r(e) {
  let t = [ "Z" ];
  if (e.offset) t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let r = `${ke({
    precision: e.precision,
    seconds: !0
  })}(?:${t.join("|")})`, n = e.local ? `${r}|${ke({
    precision: e.precision
  })}` : r;
  return new RegExp(`^${vr}T(?:${n})$`);
}

var br = e => {
  let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
};

var se = /^-?\d+$/, L = /^-?\d+(?:\.\d+)?$/, kr = /^(?:true|false)$/i, Zr = /^null$/i;

var wr = /^undefined$/i;

var Pr = /^[^A-Z]*$/, Sr = /^[^a-z]*$/;

var Z = ur("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
});

var Pe = e => {
  let t = e.value;
  return !GNs(t) && t.length !== void 0;
}, ie = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Se = ur("$ZodCheckLessThan", (e, t) => {
  Z.init(e, t);
  let r = ie[typeof t.value];
  e._zod.onattach.push(n => {
    let s = n._zod.bag, i = (t.inclusive ? s.maximum : s.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (t.value < i) if (t.inclusive) s.maximum = t.value; else s.exclusiveMaximum = t.value;
  }), e._zod.check = n => {
    if (t.inclusive ? n.value <= t.value : n.value < t.value) return;
    n.issues.push({
      origin: ie[typeof n.value] ?? r,
      code: "too_big",
      maximum: typeof t.value === "object" ? t.value.getTime() : t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Ie = ur("$ZodCheckGreaterThan", (e, t) => {
  Z.init(e, t);
  let r = ie[typeof t.value];
  e._zod.onattach.push(n => {
    let s = n._zod.bag, i = (t.inclusive ? s.minimum : s.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (t.value > i) if (t.inclusive) s.minimum = t.value; else s.exclusiveMinimum = t.value;
  }), e._zod.check = n => {
    if (t.inclusive ? n.value >= t.value : n.value > t.value) return;
    n.issues.push({
      origin: ie[typeof n.value] ?? r,
      code: "too_small",
      minimum: typeof t.value === "object" ? t.value.getTime() : t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Ir = ur("$ZodCheckMultipleOf", (e, t) => {
  Z.init(e, t), e._zod.onattach.push(r => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = r => {
    if (typeof r.value !== typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
    if (typeof r.value === "bigint" ? t.value !== BigInt(0) && r.value % t.value === BigInt(0) : VNs(r.value, t.value) === 0) return;
    r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Or = ur("$ZodCheckNumberFormat", (e, t) => {
  Z.init(e, t), t.format = t.format || "float64";
  let r = t.format?.includes("int"), n = r ? "int" : "number", [s, i] = QNs[t.format];
  e._zod.onattach.push(c => {
    let a = c._zod.bag;
    if (a.format = t.format, a.minimum = s, a.maximum = i, r) a.pattern = se;
  }), e._zod.check = c => {
    let a = c.value;
    if (r) {
      if (!Number.isInteger(a)) {
        c.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: a,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(a)) {
        if (a > 0) c.issues.push({
          input: a,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          inclusive: !0,
          continue: !t.abort
        }); else c.issues.push({
          input: a,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    if (a < s) c.issues.push({
      origin: "number",
      input: a,
      code: "too_small",
      minimum: s,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
    if (a > i) c.issues.push({
      origin: "number",
      input: a,
      code: "too_big",
      maximum: i,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
});

var Tr = ur("$ZodCheckMaxLength", (e, t) => {
  var r;
  Z.init(e, t), (r = e._zod.def).when ?? (r.when = Pe), e._zod.onattach.push(n => {
    let s = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (t.maximum < s) n._zod.bag.maximum = t.maximum;
  }), e._zod.check = n => {
    let s = n.value, i = s.length;
    if ((typeof s === "string" && i > t.maximum ? FOr(s) : i) <= t.maximum) return;
    let a = UOr(s);
    n.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), Ar = ur("$ZodCheckMinLength", (e, t) => {
  var r;
  Z.init(e, t), (r = e._zod.def).when ?? (r.when = Pe), e._zod.onattach.push(n => {
    let s = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (t.minimum > s) n._zod.bag.minimum = t.minimum;
  }), e._zod.check = n => {
    let s = n.value, i = s.length;
    if ((typeof s === "string" && i >= t.minimum && i < t.minimum * 2 ? FOr(s) : i) >= t.minimum) return;
    let a = UOr(s);
    n.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), Er = ur("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Z.init(e, t), (r = e._zod.def).when ?? (r.when = Pe), e._zod.onattach.push(n => {
    let s = n._zod.bag;
    s.minimum = t.length, s.maximum = t.length, s.length = t.length;
  }), e._zod.check = n => {
    let s = n.value, i = s.length, c = typeof s === "string" && i >= t.length && i <= t.length * 2 ? FOr(s) : i;
    if (c === t.length) return;
    let a = UOr(s), l = c > t.length;
    n.issues.push({
      origin: a,
      ...l ? {
        code: "too_big",
        maximum: t.length
      } : {
        code: "too_small",
        minimum: t.length
      },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), J = ur("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  if (Z.init(e, t), e._zod.onattach.push(s => {
    let i = s._zod.bag;
    if (i.format = t.format, t.pattern) i.patterns ?? (i.patterns = new Set), i.patterns.add(t.pattern);
  }), t.pattern) (r = e._zod).check ?? (r.check = s => {
    if (t.pattern.lastIndex = 0, t.pattern.test(s.value)) return;
    s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: s.value,
      ...t.pattern ? {
        pattern: t.pattern.toString()
      } : {},
      inst: e,
      continue: !t.abort
    });
  }); else (n = e._zod).check ?? (n.check = () => {});
}), Nr = ur("$ZodCheckRegex", (e, t) => {
  J.init(e, t), e._zod.check = r => {
    if (t.pattern.lastIndex = 0, t.pattern.test(r.value)) return;
    r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Cr = ur("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Pr), J.init(e, t);
}), Rr = ur("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Sr), J.init(e, t);
}), Dr = ur("$ZodCheckIncludes", (e, t) => {
  Z.init(e, t);
  let r = agt(t.includes), n = new RegExp(typeof t.position === "number" ? `^.{${t.position},}${r}` : r);
  t.pattern = n, e._zod.onattach.push(s => {
    let i = s._zod.bag;
    i.patterns ?? (i.patterns = new Set), i.patterns.add(n);
  }), e._zod.check = s => {
    if (s.value.includes(t.includes, t.position)) return;
    s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), jr = ur("$ZodCheckStartsWith", (e, t) => {
  Z.init(e, t);
  let r = new RegExp(`^${agt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push(n => {
    let s = n._zod.bag;
    s.patterns ?? (s.patterns = new Set), s.patterns.add(r);
  }), e._zod.check = n => {
    if (n.value.startsWith(t.prefix)) return;
    n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Lr = ur("$ZodCheckEndsWith", (e, t) => {
  Z.init(e, t);
  let r = new RegExp(`.*${agt(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push(n => {
    let s = n._zod.bag;
    s.patterns ?? (s.patterns = new Set), s.patterns.add(r);
  }), e._zod.check = n => {
    if (n.value.endsWith(t.suffix)) return;
    n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});

var Fr = ur("$ZodCheckOverwrite", (e, t) => {
  Z.init(e, t), e._zod.check = r => {
    r.value = t.tx(r.value);
  };
});

class Oe {
  constructor(e = [], t = {}) {
    this.content = [], this.indent = 0, this.args = e, this.closed = t;
  }
  indented(e) {
    this.indent += 1, e(this), this.indent -= 1;
  }
  write(e) {
    if (typeof e === "function") {
      e(this, {
        execution: "sync"
      }), e(this, {
        execution: "async"
      });
      return;
    }
    let r = e.split(`\n`).filter(i => i), n = Math.min(...r.map(i => i.length - i.trimStart().length)), s = r.map(i => i.slice(n)).map(i => " ".repeat(this.indent * 2) + i);
    for (let i of s) this.content.push(i);
  }
  compile() {
    let e = Function, t = this?.content ?? [ "" ];
    return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join(`\n`)}\n};`)(...Object.values(this.closed));
  }
}

var Mr = {
  major: 4,
  minor: 5,
  patch: 4
};

var AE = ur("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Mr;
  let n = e._zod.def.checks, s = e._zod.traits.has("$ZodCheck") ? [ e, ...n ?? [] ] : n?.length ? [ ...n ] : [];
  for (let i of s) for (let c of i._zod.onattach) c(e);
  if (s.length === 0) (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
    e._zod.run = e._zod.parse;
  }); else {
    let i = (a, l, p) => {
      if (a.memo) return a;
      let f = RNt(a), d;
      for (let h of l) {
        if (h._zod.def.when) {
          if (e$s(a)) continue;
          if (!h._zod.def.when(a)) continue;
        } else if (f) continue;
        let m = a.issues.length, _ = h._zod.check(a);
        if (_ instanceof Promise && p?.async === !1) throw new uXe;
        if (d || _ instanceof Promise) d = (d ?? Promise.resolve()).then(async () => {
          if (await _, a.issues.length === m) return;
          if (cOo(a.issues, m, e), !f) f = RNt(a, m);
        }); else {
          if (a.issues.length === m) continue;
          if (cOo(a.issues, m, e), !f) f = RNt(a, m);
        }
      }
      if (d) return d.then(() => a);
      return a;
    }, c = (a, l, p) => {
      if (RNt(a)) return a.aborted = !0, a;
      let f = i(l, s, p);
      if (f instanceof Promise) {
        if (p.async === !1) throw new uXe;
        return f.then(d => e._zod.parse(d, p));
      }
      return e._zod.parse(f, p);
    };
    e._zod.run = (a, l) => {
      if (l.skipChecks) return e._zod.parse(a, l);
      if (l.direction === "backward") {
        let f = e._zod.parse({
          value: a.value,
          issues: []
        }, {
          ...l,
          skipChecks: !0
        });
        if (f instanceof Promise) return f.then(d => c(d, a, l));
        return c(f, a, l);
      }
      let p = e._zod.parse(a, l);
      if (p instanceof Promise) {
        if (l.async === !1) throw new uXe;
        return p.then(f => i(f, s, l));
      }
      return i(p, s, l);
    };
  }
}, {
  get "~standard"() {
    return uOo(this, "~standard", Ee(this));
  },
  set "~standard"(e) {
    PNt(this, "~standard", e);
  }
}), Jr = e => e.success ? {
  value: e.data
} : {
  issues: e.error?.issues
};

function Ee(e) {
  return {
    validate: t => {
      try {
        return Jr(cqn(e, t));
      } catch (r) {
        return Vt(e, t).then(Jr);
      }
    },
    vendor: "zod",
    version: 1
  };
}

var le = ur("$ZodString", (e, t) => {
  AE.init(e, t), e._zod.pattern = [ ...e?._zod.bag?.patterns ?? [] ].pop() ?? br(e._zod.bag), 
  e._zod.parse = (r, n) => {
    if (t.coerce) try {
      r.value = String(r.value);
    } catch (s) {}
    if (typeof r.value === "string") return r;
    return r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), z = ur("$ZodStringFormat", (e, t) => {
  J.init(e, t), le.init(e, t);
}), oo = ur("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = ar), z.init(e, t);
}), no = ur("$ZodUUID", (e, t) => {
  if (t.version) {
    let n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Ze(n));
  } else t.pattern ?? (t.pattern = Ze());
  z.init(e, t);
}), so = ur("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = lr), z.init(e, t);
}), io = 1, co = 2;

function Ws(e, t) {
  if (!t.normalize && t.protocol?.source === gr.source && !/^https?:\/\//i.test(e)) return io;
  try {
    return new URL(e);
  } catch {
    return co;
  }
}

var Gs = /[\t\n\r]/g;

function Ys(e) {
  return e.replace(Gs, "");
}

function qs(e, t) {
  return t.lastIndex = 0, t.test(e.hostname);
}

function Xs(e, t) {
  return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}

var uo = ur("$ZodURL", (e, t) => {
  z.init(e, t), e._zod.check = r => {
    try {
      let n = r.value.trim(), s = Ws(n, t);
      if (s === io) {
        r.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: r.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      if (s === co) {
        r.issues.push({
          code: "invalid_format",
          format: "url",
          input: r.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      if (t.hostname && !qs(s, t.hostname)) r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
      if (t.protocol && !Xs(s, t.protocol)) r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
      r.value = t.normalize ? s.href : Ys(n);
      return;
    } catch (n) {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ao = ur("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = pr()), z.init(e, t);
}), lo = ur("$ZodNanoID", (e, t) => {
  if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
  t.pattern ?? (t.pattern = t.length === void 0 ? sr : ir(t.length)), z.init(e, t);
}), po = ur("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = er), z.init(e, t);
}), fo = ur("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = tr), z.init(e, t);
}), mo = ur("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = rr), z.init(e, t);
}), ho = ur("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = or), z.init(e, t);
}), _o = ur("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = nr), z.init(e, t);
}), go = ur("$ZodISODateTime", (e, t) => {
  if (t.pattern ?? (t.pattern = $r(t)), z.init(e, t), t.local || t.precision === -1) e._zod.bag.laxFormat = !0, 
  e._zod.onattach.push(r => {
    r._zod.bag.laxFormat = !0;
  });
}), xo = ur("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = zr), z.init(e, t);
}), vo = ur("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = yr(t)), z.init(e, t);
}), zo = ur("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = cr), z.init(e, t);
}), yo = ur("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = fr), z.init(e, t), e._zod.bag.format = "ipv4";
}), Hs = /^[0-9a-fA-F:.]+$/;

function $o(e) {
  if (!Hs.test(e)) return !1;
  try {
    return new URL(`http://[${e}]`), !0;
  } catch {
    return !1;
  }
}

var bo = ur("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = dr), z.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = r => {
    if (!$o(r.value)) r.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});

var ko = ur("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = mr), z.init(e, t);
});

function Qs(e) {
  let t = e.split("/");
  if (t.length !== 2) return !1;
  let [r, n] = t;
  if (!n) return !1;
  let s = Number(n);
  if (`${s}` !== n) return !1;
  if (s < 0 || s > 128) return !1;
  return $o(r);
}

var Zo = ur("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = hr), z.init(e, t), e._zod.check = r => {
    if (!Qs(r.value)) r.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});

function wo(e) {
  if (e === "") return !0;
  if (/\s/.test(e)) return !1;
  if (e.length % 4 !== 0) return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}

var Po = ur("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = _r), z.init(e, t), e._zod.bag.contentEncoding = "base64", 
  e._zod.check = r => {
    if (wo(r.value)) return;
    r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});

function ei(e) {
  if (!we.test(e)) return !1;
  let t = e.replace(/[-_]/g, n => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return wo(r);
}

var So = ur("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = we), z.init(e, t), e._zod.bag.contentEncoding = "base64url", 
  e._zod.check = r => {
    if (ei(r.value)) return;
    r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Io = ur("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = xr), z.init(e, t);
});

function ti(e, t = null) {
  try {
    let r = e.split(".");
    if (r.length !== 3) return !1;
    let [n] = r;
    if (!n) return !1;
    let s = JSON.parse(atob(n));
    if ("typ" in s && s?.typ !== "JWT") return !1;
    if (!s.alg) return !1;
    if (t && (!("alg" in s) || s.alg !== t)) return !1;
    return !0;
  } catch {
    return !1;
  }
}

var Oo = ur("$ZodJWT", (e, t) => {
  z.init(e, t), e._zod.check = r => {
    if (ti(r.value, t.alg)) return;
    r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});

var Ne = ur("$ZodNumber", (e, t) => {
  AE.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? L, e._zod.parse = (r, n) => {
    if (t.coerce) try {
      r.value = Number(r.value);
    } catch (c) {}
    let s = r.value;
    if (typeof s === "number" && !Number.isNaN(s) && Number.isFinite(s)) return r;
    let i = typeof s === "number" ? Number.isNaN(s) ? "NaN" : !Number.isFinite(s) ? String(s) : void 0 : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: s,
      inst: e,
      ...i ? {
        received: i
      } : {}
    }), r;
  };
}), To = ur("$ZodNumberFormat", (e, t) => {
  Or.init(e, t), Ne.init(e, t);
}), Ao = ur("$ZodBoolean", (e, t) => {
  AE.init(e, t), e._zod.pattern = kr, e._zod.parse = (r, n) => {
    if (t.coerce) try {
      r.value = Boolean(r.value);
    } catch (i) {}
    let s = r.value;
    if (typeof s === "boolean") return r;
    return r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: s,
      inst: e
    }), r;
  };
});

var Eo = ur("$ZodUndefined", (e, t) => {
  AE.init(e, t), e._zod.pattern = wr, e._zod.values = new Set([ void 0 ]), e._zod.parse = (r, n) => {
    let s = r.value;
    if (typeof s > "u") return r;
    return r.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: s,
      inst: e
    }), r;
  };
}), No = ur("$ZodNull", (e, t) => {
  AE.init(e, t), e._zod.pattern = Zr, e._zod.values = new Set([ null ]), e._zod.parse = (r, n) => {
    let s = r.value;
    if (s === null) return r;
    return r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: s,
      inst: e
    }), r;
  };
}), Co = ur("$ZodAny", (e, t) => {
  AE.init(e, t), e._zod.parse = r => r;
}), Ro = ur("$ZodUnknown", (e, t) => {
  AE.init(e, t), e._zod.parse = r => r;
}), Do = ur("$ZodNever", (e, t) => {
  AE.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});

function Br(e, t, r) {
  if (e.issues.length) t.issues.push(...z1e(r, e.issues));
  t.value[r] = e.value;
}

var jo = ur("$ZodArray", (e, t) => {
  AE.init(e, t);
  let r = Tee.memoizer;
  r?.attach(e), e._zod.parse = (n, s) => {
    let i = n.value;
    if (!Array.isArray(i)) return n.issues.push({
      expected: "array",
      code: "invalid_type",
      input: i,
      inst: e
    }), n;
    n.value = r ? r.alloc(e, n, Array(i.length), s) : Array(i.length);
    let c = [];
    for (let a = 0; a < i.length; a++) {
      let l = i[a], p = t.element._zod.run({
        value: l,
        issues: []
      }, s);
      if (p instanceof Promise) c.push(p.then(f => Br(f, n, a))); else Br(p, n, a);
    }
    if (c.length) return Promise.all(c).then(() => n);
    return n;
  };
});

function ae(e, t, r, n, s, i) {
  let c = r in n, a = i === "optional";
  if (!c && a && s === "optional") return;
  if (e.issues.length) {
    if (s !== void 0 && a && !c) return;
    t.issues.push(...z1e(r, e.issues));
  }
  if (!c && s === void 0) {
    if (!e.issues.length) t.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [ r ]
    });
    return;
  }
  if (e.value === void 0) {
    if (c) t.value[r] = void 0;
  } else t.value[r] = e.value;
}

var ri = [];

function Lo(e) {
  let t = Object.keys(e.shape), r = Object.getOwnPropertySymbols(e.shape), n = r.length ? r : ri, s = n.length ? [ ...t, ...n ] : t;
  for (let c of s) if (!e.shape?.[c]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(c)}": expected a Zod schema`);
  let i = JNs(e.shape);
  return {
    ...e,
    allKeys: s,
    symbolKeys: n,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(i)
  };
}

function Fo(e, t, r, n, s, i) {
  let c = [], a = s.keySet, l = s.catchall._zod, p = l.def.type, {optin: f, optout: d} = l;
  for (let h in t) {
    if (a.has(h)) continue;
    if (h === "__proto__") {
      if (p === "never") c.push(h);
      continue;
    }
    if (p === "never") {
      c.push(h);
      continue;
    }
    let m = l.run({
      value: t[h],
      issues: []
    }, n);
    if (m instanceof Promise) e.push(m.then(_ => ae(_, r, h, t, f, d))); else ae(m, r, h, t, f, d);
  }
  if (c.length) r.issues.push({
    code: "unrecognized_keys",
    keys: c,
    input: t,
    inst: i,
    continue: !0
  });
  if (!e.length) return r;
  return Promise.all(e).then(() => r);
}

var Te = new WeakMap, oi = ur("$ZodObject", (e, t) => {
  if (AE.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    let l = t.shape;
    Te.set(t, l), Object.defineProperty(t, "shape", {
      get: () => {
        let p = {
          ...l
        };
        return Object.defineProperty(t, "shape", {
          value: p
        }), Te.set(t, p), p;
      }
    });
  }
  let n = hqn(() => Lo(t));
  Hw(e, "propValues", l => {
    let p = l.def.shape, f = {};
    for (let d in p) {
      let h = p[d]._zod;
      if (h.values) {
        if (!Object.prototype.hasOwnProperty.call(f, d)) EG(f, d, new Set);
        for (let m of h.values) f[d].add(m);
        if (h.optin !== void 0) f[d].add(void 0);
      }
    }
    return f;
  });
  let s = xan, i = t.catchall, c, a = Tee.memoizer;
  a?.attach(e), e._zod.parse = (l, p) => {
    c ?? (c = n.value);
    let f = l.value;
    if (!s(f)) return l.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: e
    }), l;
    l.value = a ? a.alloc(e, l, {}, p) : {};
    let d = [], h = c.shape;
    for (let m of c.allKeys) {
      if (m === "__proto__") continue;
      let _ = h[m], x = _._zod.optin, g = _._zod.optout, O = _._zod.run({
        value: f[m],
        issues: []
      }, p);
      if (O instanceof Promise) d.push(O.then(C => ae(C, l, m, f, x, g))); else ae(O, l, m, f, x, g);
    }
    if (!i) return d.length ? Promise.all(d).then(() => l) : l;
    return Fo(d, f, l, p, n.value, e);
  };
}), Uo = ur("$ZodObjectJIT", (e, t) => {
  oi.init(e, t);
  let r = e._zod.parse, n = hqn(() => Lo(t)), s = Tee.memoizer, i = m => {
    let _ = n.value, x = _.symbolKeys, g = new Oe([ "payload", "ctx" ], {
      shape: m,
      inst: e,
      memo: s,
      syms: x
    }), O = P => `shape[${P}]._zod.run({ value: input[${P}], issues: [] }, ctx)`, C = (P, y) => `\n          for (let i = 0; i < ${P}.issues.length; i++) {\n            const iss = ${P}.issues[i];\n            iss.path = iss.path ? [${y}, ...iss.path] : [${y}];\n            payload.issues.push(iss);\n          }`;
    g.write("const input = payload.value;");
    let Rt = Object.create(null), Ds = 0;
    for (let P of _.allKeys) Rt[P] = `key_${Ds++}`;
    g.write(s ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (let P of _.allKeys) {
      if (P === "__proto__") continue;
      let y = Rt[P], I = typeof P === "symbol" ? `syms[${x.indexOf(P)}]` : KNs(P), ve = `${I} in input`, Dt = m[P], jt = Dt?._zod?.optin, Lt = jt !== void 0, js = Dt?._zod?.optout === "optional";
      if (g.write(`const ${y} = ${O(I)};`), Lt && js) {
        let Ls = jt === "optional" ? `${y}_present` : `${y}.value !== undefined || ${y}_present`;
        g.write(`\n        const ${y}_present = ${ve};\n        if (!${y}.issues.length || ${y}_present) {\n          if (${y}.issues.length) {${C(y, I)}\n          }\n\n          if (${Ls}) {\n            newResult[${I}] = ${y}.value;\n          }\n        }\n\n      `);
      } else if (!Lt) g.write(`\n        const ${y}_present = ${ve};\n        if (${y}.issues.length) {${C(y, I)}\n        }\n        if (!${y}_present && !${y}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${I}]\n          });\n        }\n\n        if (${y}_present) {\n          newResult[${I}] = ${y}.value;\n        }\n\n      `); else g.write(`\n        if (${y}.issues.length) {${C(y, I)}\n        }\n        \n        if (${y}.value === undefined) {\n          if (${ve}) {\n            newResult[${I}] = undefined;\n          }\n        } else {\n          newResult[${I}] = ${y}.value;\n        }\n\n      `);
    }
    return g.write("payload.value = newResult;"), g.write("return payload;"), g.compile();
  }, c, a = xan, l = !Tee.jitless, f = l && YNs.value, d = t.catchall, h;
  e._zod.parse = (m, _) => {
    h ?? (h = n.value);
    let x = m.value;
    if (!a(x)) return m.issues.push({
      expected: "object",
      code: "invalid_type",
      input: x,
      inst: e
    }), m;
    if (l && f && _?.async === !1 && _.jitless !== !0) {
      if (!c) c = i(t.shape);
      if (m = c(m, _), !d) return m;
      return Fo([], x, m, _, h, e);
    }
    return r(m, _);
  };
});

function Vr(e, t, r, n) {
  for (let i of e) if (i.issues.length === 0) return t.value = i.value, t;
  let s = e.filter(i => !RNt(i));
  if (s.length === 1) return t.value = s[0].value, s[0];
  return t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map(i => i.issues.map(c => G1e(c, n, aX())))
  }), t;
}

var Ce = ur("$ZodUnion", (e, t) => {
  AE.init(e, t), Hw(e, "optin", n => n.def.options.some(s => s._zod.optin === "defaulted") ? "defaulted" : n.def.options.some(s => s._zod.optin !== void 0) ? "optional" : void 0), 
  Hw(e, "optout", n => n.def.options.some(s => s._zod.optout === "optional") ? "optional" : void 0), 
  Hw(e, "values", n => {
    if (n.def.options.every(s => s._zod.values)) return new Set(n.def.options.flatMap(s => Array.from(s._zod.values)));
    return;
  }), Hw(e, "pattern", n => {
    if (n.def.options.every(s => s._zod.pattern)) {
      let s = n.def.options.map(i => i._zod.pattern);
      return new RegExp(`^(${s.map(i => Can(i.source)).join("|")})$`);
    }
    return;
  });
  let r = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (n, s) => {
    if (r) return r(n, s);
    let i = !1, c = [];
    for (let a of t.options) {
      let l = a._zod.run({
        value: n.value,
        issues: []
      }, s);
      if (l instanceof Promise) c.push(l), i = !0; else {
        if (l.issues.length === 0) return l;
        c.push(l);
      }
    }
    if (!i) return Vr(c, n, e, s);
    return Promise.all(c).then(a => Vr(a, n, e, s));
  };
});

var Mo = ur("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, Ce.init(e, t);
  let r = e._zod.parse;
  Hw(e, "propValues", s => {
    let i = {};
    for (let c of s.def.options) {
      let a = c._zod.propValues;
      if (!a || Object.keys(a).length === 0) throw Error(`Invalid discriminated union option at index "${s.def.options.indexOf(c)}"`);
      for (let [l, p] of Object.entries(a)) {
        if (!Object.prototype.hasOwnProperty.call(i, l)) EG(i, l, new Set);
        for (let f of p) i[l].add(f);
      }
    }
    return i;
  }), t.options.forEach((s, i) => {
    let c = Te.get(s._zod.def);
    if (c && !Object.prototype.hasOwnProperty.call(c, t.discriminator)) throw Error(`Invalid discriminated union option at index "${i}"`);
  });
  let n = hqn(() => {
    let s = t.options, i = new Map;
    for (let c of s) {
      let a = c._zod.propValues?.[t.discriminator];
      if (!a || a.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(c)}"`);
      for (let l of a) {
        if (i.has(l)) throw Error(`Duplicate discriminator value "${String(l)}"`);
        i.set(l, c);
      }
    }
    return i;
  });
  e._zod.parse = (s, i) => {
    let c = s.value;
    if (!xan(c)) return s.issues.push({
      code: "invalid_type",
      expected: "object",
      input: c,
      inst: e
    }), s;
    let a = n.value.get(c?.[t.discriminator]);
    if (a) return a._zod.run(s, i);
    if (t.unionFallback || i.direction === "backward") return r(s, i);
    return s.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      options: Array.from(n.value.keys()),
      input: c,
      path: [ t.discriminator ],
      inst: e
    }), s;
  };
}), Jo = ur("$ZodIntersection", (e, t) => {
  AE.init(e, t), e._zod.parse = (r, n) => {
    let s = r.value, i = t.left._zod.run({
      value: s,
      issues: []
    }, n), c = t.right._zod.run({
      value: s,
      issues: []
    }, n);
    if (i instanceof Promise || c instanceof Promise) return Promise.all([ i, c ]).then(([l, p]) => Wr(r, l, p));
    return Wr(r, i, c);
  };
});

function Ae(e, t) {
  if (e === t) return {
    valid: !0,
    data: e
  };
  if (e instanceof Date && t instanceof Date && +e === +t) return {
    valid: !0,
    data: e
  };
  if (CNt(e) && CNt(t)) {
    let r = Object.keys(t), n = Object.keys(e).filter(i => r.indexOf(i) !== -1), s = {
      ...e,
      ...t
    };
    if (Object.prototype.hasOwnProperty.call(s, "__proto__")) delete s.__proto__;
    for (let i of n) {
      if (i === "__proto__") continue;
      let c = Ae(e[i], t[i]);
      if (!c.valid) return {
        valid: !1,
        mergeErrorPath: [ i, ...c.mergeErrorPath ]
      };
      s[i] = c.data;
    }
    return {
      valid: !0,
      data: s
    };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    let r = [];
    for (let n = 0; n < e.length; n++) {
      let s = e[n], i = t[n], c = Ae(s, i);
      if (!c.valid) return {
        valid: !1,
        mergeErrorPath: [ n, ...c.mergeErrorPath ]
      };
      r.push(c.data);
    }
    return {
      valid: !0,
      data: r
    };
  }
  return {
    valid: !1,
    mergeErrorPath: []
  };
}

function Wr(e, t, r) {
  let n = new Map, s, i = new Map, c = (p, f) => {
    let d;
    if (p.code === "unrecognized_keys" && !p.path?.length) s ?? (s = p), d = p.keys; else if (p.code === "invalid_key" && p.origin === "record" && p.path?.length === 1) {
      let h = String(p.path[0]);
      if (!i.has(h)) i.set(h, p);
      d = [ h ];
    } else return !1;
    for (let h of d) {
      if (!n.has(h)) n.set(h, {});
      n.get(h)[f] = !0;
    }
    return !0;
  };
  for (let p of t.issues) if (!c(p, "l")) e.issues.push(p);
  for (let p of r.issues) if (!c(p, "r")) e.issues.push(p);
  let a = [ ...n ].filter(([, p]) => p.l && p.r).map(([p]) => p);
  if (a.length) {
    let p = s ? a.filter(f => s.keys.includes(f)) : [];
    if (p.length) e.issues.push({
      ...s,
      keys: p
    });
    for (let f of a) if (!p.includes(f) && i.has(f)) e.issues.push(i.get(f));
  }
  let l = Ae(t.value, r.value);
  if (!l.valid) {
    if (RNt(e)) return e;
    throw Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  }
  return e.value = l.data, e;
}

var Bo = ur("$ZodTuple", (e, t) => {
  AE.init(e, t);
  let r = t.items, n = Tee.memoizer;
  n?.attach(e), e._zod.parse = (s, i) => {
    let c = s.value;
    if (!Array.isArray(c)) return s.issues.push({
      input: c,
      inst: e,
      expected: "tuple",
      code: "invalid_type"
    }), s;
    s.value = n ? n.alloc(e, s, [], i) : [];
    let a = [], l = Gr(r, "optin"), p = Gr(r, "optout");
    if (!t.rest) {
      if (c.length < l) return s.issues.push({
        code: "too_small",
        minimum: l,
        inclusive: !0,
        input: c,
        inst: e,
        origin: "array"
      }), s;
      if (c.length > r.length) s.issues.push({
        code: "too_big",
        maximum: r.length,
        inclusive: !0,
        input: c,
        inst: e,
        origin: "array"
      });
    }
    let f = Array(r.length);
    for (let d = 0; d < r.length; d++) {
      let h = r[d]._zod.run({
        value: c[d],
        issues: []
      }, i);
      if (h instanceof Promise) a.push(h.then(m => {
        f[d] = m;
      })); else f[d] = h;
    }
    if (t.rest) {
      let d = r.length - 1, h = c.slice(r.length);
      for (let m of h) {
        d++;
        let _ = t.rest._zod.run({
          value: m,
          issues: []
        }, i);
        if (_ instanceof Promise) a.push(_.then(x => Yr(x, s, d))); else Yr(_, s, d);
      }
    }
    if (a.length) return Promise.all(a).then(() => qr(f, s, r, c, p));
    return qr(f, s, r, c, p);
  };
});

function Gr(e, t) {
  for (let r = e.length - 1; r >= 0; r--) if (!(t === "optin" ? e[r]._zod.optin !== void 0 : e[r]._zod.optout === "optional")) return r + 1;
  return 0;
}

function Yr(e, t, r) {
  if (e.issues.length) t.issues.push(...z1e(r, e.issues));
  t.value[r] = e.value;
}

function qr(e, t, r, n, s) {
  for (let i = 0; i < r.length; i++) {
    let c = e[i], a = i < n.length;
    if (!a && i >= s && r[i]._zod.optin === "optional") {
      t.value.length = i;
      break;
    }
    if (c.issues.length) {
      if (!a && i >= s) {
        t.value.length = i;
        break;
      }
      t.issues.push(...z1e(i, c.issues));
    }
    t.value[i] = c.value;
  }
  for (let i = t.value.length - 1; i >= n.length; i--) if (r[i]._zod.optout === "optional" && t.value[i] === void 0) t.value.length = i; else break;
  return t;
}

var Vo = ur("$ZodRecord", (e, t) => {
  AE.init(e, t);
  let r = Tee.memoizer;
  r?.attach(e), e._zod.parse = (n, s) => {
    let i = n.value;
    if (!CNt(i)) return n.issues.push({
      expected: "record",
      code: "invalid_type",
      input: i,
      inst: e
    }), n;
    let c = [], a = t.keyType._zod.values;
    if (a && !t.partial) {
      n.value = r ? r.alloc(e, n, {}, s) : {};
      let l = new Set;
      for (let f of a) if (typeof f === "string" || typeof f === "number" || typeof f === "symbol") {
        if (l.add(typeof f === "number" ? f.toString() : f), f === "__proto__") continue;
        let d = t.keyType._zod.run({
          value: f,
          issues: []
        }, s);
        if (d instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (d.issues.length) {
          n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: d.issues.map(_ => G1e(_, s, aX())),
            input: f,
            path: [ f ],
            inst: e
          });
          continue;
        }
        let h = d.value;
        if (h === "__proto__") continue;
        let m = t.valueType._zod.run({
          value: i[f],
          issues: []
        }, s);
        if (m instanceof Promise) c.push(m.then(_ => {
          if (_.issues.length) n.issues.push(...z1e(f, _.issues));
          n.value[h] = _.value;
        })); else {
          if (m.issues.length) n.issues.push(...z1e(f, m.issues));
          n.value[h] = m.value;
        }
      }
      let p;
      for (let f in i) if (!l.has(f)) if (t.mode === "loose") {
        if (f === "__proto__") continue;
        n.value[f] = i[f];
      } else p = p ?? [], p.push(f);
      if (p && p.length > 0) n.issues.push({
        code: "unrecognized_keys",
        input: i,
        inst: e,
        keys: p,
        continue: !0
      });
    } else {
      n.value = r ? r.alloc(e, n, {}, s) : {};
      let l;
      for (let p of Reflect.ownKeys(i)) {
        if (p === "__proto__") continue;
        if (!Object.prototype.propertyIsEnumerable.call(i, p)) continue;
        let f = t.keyType._zod.run({
          value: p,
          issues: []
        }, s);
        if (f instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (typeof p === "string" && L.test(p) && f.issues.length) {
          let _ = t.keyType._zod.run({
            value: Number(p),
            issues: []
          }, s);
          if (_ instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          if (_.issues.length === 0) f = _;
        }
        if (f.issues.length) {
          if (t.mode === "loose") n.value[p] = i[p]; else if (a) l = l ?? [], l.push(p); else n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: f.issues.map(_ => G1e(_, s, aX())),
            input: p,
            path: [ p ],
            inst: e
          });
          continue;
        }
        let h = f.value;
        if (h === "__proto__") continue;
        let m = t.valueType._zod.run({
          value: i[p],
          issues: []
        }, s);
        if (m instanceof Promise) c.push(m.then(_ => {
          if (_.issues.length) n.issues.push(...z1e(p, _.issues));
          n.value[h] = _.value;
        })); else {
          if (m.issues.length) n.issues.push(...z1e(p, m.issues));
          n.value[h] = m.value;
        }
      }
      if (l && l.length > 0) n.issues.push({
        code: "unrecognized_keys",
        input: i,
        inst: e,
        keys: l,
        continue: !0
      });
    }
    if (c.length) return Promise.all(c).then(() => n);
    return n;
  };
});

var Ko = ur("$ZodEnum", (e, t) => {
  AE.init(e, t);
  let r = $Or(t.entries), n = new Set(r);
  e._zod.values = n;
  let s = r.filter(i => XNs.has(typeof i));
  e._zod.pattern = new RegExp(s.length ? `^(${s.map(i => agt(i.toString())).join("|")})$` : "^[^\\s\\S]$"), 
  e._zod.parse = (i, c) => {
    let a = i.value;
    if (n.has(a)) return i;
    return i.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), i;
  };
}), Wo = ur("$ZodLiteral", (e, t) => {
  AE.init(e, t);
  let r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(t.values.length ? `^(${t.values.map(n => typeof n === "string" ? agt(n) : n ? agt(n.toString()) : String(n)).join("|")})$` : "^[^\\s\\S]$"), 
  e._zod.parse = (n, s) => {
    let i = n.value;
    if (r.has(i)) return n;
    return n.issues.push({
      code: "invalid_value",
      values: t.values,
      input: i,
      inst: e
    }), n;
  };
});

var Go = ur("$ZodTransform", (e, t) => {
  AE.init(e, t), e._zod.optin = "optional", Tee.memoizer?.guard(e), e._zod.parse = (r, n) => {
    if (n.direction === "backward") throw new yqn(e.constructor.name);
    let s = t.transform(r.value, r);
    if (n.async) return (s instanceof Promise ? s : Promise.resolve(s)).then(c => (r.value = c, 
    r));
    if (s instanceof Promise) throw new uXe;
    return r.value = s, r;
  };
});

function Xr(e, t) {
  return e.value = t.issues.length ? void 0 : t.value, e;
}

var Re = ur("$ZodOptional", (e, t) => {
  AE.init(e, t), Hw(e, "optin", r => r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), 
  e._zod.optout = "optional", Hw(e, "values", r => {
    let n = r.def.innerType._zod.values;
    return n ? new Set([ ...n, void 0 ]) : void 0;
  }), Hw(e, "pattern", r => {
    let n = r.def.innerType._zod.pattern;
    return n ? new RegExp(`^(${Can(n.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (r.value === void 0) {
      if (t.innerType._zod.optin !== "defaulted") return r;
      let s = t.innerType._zod.run({
        value: r.value,
        issues: []
      }, n);
      if (s instanceof Promise) return s.then(i => Xr(r, i));
      return Xr(r, s);
    }
    return t.innerType._zod.run(r, n);
  };
}), Yo = ur("$ZodExactOptional", (e, t) => {
  Re.init(e, t), Hw(e, "values", r => r.def.innerType._zod.values), Hw(e, "pattern", r => r.def.innerType._zod.pattern), 
  e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), qo = ur("$ZodNullable", (e, t) => {
  AE.init(e, t), Hw(e, "optin", r => r.def.innerType._zod.optin), Hw(e, "optout", r => r.def.innerType._zod.optout), 
  Hw(e, "pattern", r => {
    let n = r.def.innerType._zod.pattern;
    return n ? new RegExp(`^(${Can(n.source)}|null)$`) : void 0;
  }), Hw(e, "values", r => r.def.innerType._zod.values ? new Set([ ...r.def.innerType._zod.values, null ]) : void 0), 
  e._zod.parse = (r, n) => {
    if (r.value === null) return r;
    return t.innerType._zod.run(r, n);
  };
}), Xo = ur("$ZodDefault", (e, t) => {
  AE.init(e, t), e._zod.optin = "defaulted", Hw(e, "values", r => r.def.innerType._zod.values), 
  e._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    if (r.value === void 0) return r.value = t.defaultValue, r;
    let s = t.innerType._zod.run(r, n);
    if (s instanceof Promise) return s.then(i => Hr(i, t));
    return Hr(s, t);
  };
});

function Hr(e, t) {
  if (e.value === void 0) e.value = t.defaultValue;
  return e;
}

var Ho = ur("$ZodPrefault", (e, t) => {
  AE.init(e, t), e._zod.optin = "defaulted", Hw(e, "values", r => r.def.innerType._zod.values), 
  e._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    if (r.value === void 0) r.value = t.defaultValue;
    return t.innerType._zod.run(r, n);
  };
}), Qo = ur("$ZodNonOptional", (e, t) => {
  AE.init(e, t), Hw(e, "values", r => {
    let n = r.def.innerType._zod.values;
    return n ? new Set([ ...n ].filter(s => s !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    let s = t.innerType._zod.run(r, n);
    if (s instanceof Promise) return s.then(i => Qr(i, e));
    return Qr(s, e);
  };
});

function Qr(e, t) {
  if (!e.issues.length && e.value === void 0) e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  });
  return e;
}

function eo(e, t, r, n) {
  if (!t.issues.length) {
    if (e.value = t.value, t.memo) e.memo = !0;
    return e;
  }
  return e.value = r.catchValue({
    ...t,
    value: e.value,
    error: {
      issues: t.issues.map(s => G1e(s, n, aX()))
    },
    input: e.value
  }), e;
}

var en = ur("$ZodCatch", (e, t) => {
  AE.init(e, t), Hw(e, "optin", r => r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), 
  Hw(e, "optout", r => r.def.innerType._zod.optout), Hw(e, "values", r => r.def.innerType._zod.values), 
  e._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    let s = t.innerType._zod.run({
      value: r.value,
      issues: []
    }, n);
    if (s instanceof Promise) return s.then(i => eo(r, i, t, n));
    return eo(r, s, t, n);
  };
});

var je = ur("$ZodPipe", (e, t) => {
  AE.init(e, t), Hw(e, "values", r => r.def.in._zod.values), Hw(e, "optin", r => r.def.in._zod.optin), 
  Hw(e, "optout", r => r.def.out._zod.optout), Hw(e, "propValues", r => r.def.in._zod.propValues), 
  e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      let i = t.out._zod.run(r, n);
      if (i instanceof Promise) return i.then(c => ce(c, t.in, n));
      return ce(i, t.in, n);
    }
    let s = t.in._zod.run(r, n);
    if (s instanceof Promise) return s.then(i => ce(i, t.out, n));
    return ce(s, t.out, n);
  };
});

function ce(e, t, r) {
  if (e.issues.some(n => n.code !== "unrecognized_keys")) return e.aborted = !0, e;
  return t._zod.run({
    value: e.value,
    issues: e.issues
  }, r);
}

var tn = ur("$ZodPreprocess", (e, t) => {
  je.init(e, t);
}), rn = ur("$ZodReadonly", (e, t) => {
  AE.init(e, t), Hw(e, "propValues", r => r.def.innerType._zod.propValues), Hw(e, "values", r => r.def.innerType._zod.values), 
  Hw(e, "optin", r => r.def.innerType?._zod?.optin), Hw(e, "optout", r => r.def.innerType?._zod?.optout), 
  e._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    let s = t.innerType._zod.run(r, n);
    if (s instanceof Promise) return s.then(to);
    return to(s);
  };
});

function to(e) {
  if (!e.memo) e.value = Object.freeze(e.value);
  return e;
}

var MOr = ur("$ZodLazy", (e, t) => {
  AE.init(e, t), Ran(e._zod, "innerType", () => {
    let r = t;
    if (!r._cachedInner) r._cachedInner = t.getter();
    return r._cachedInner;
  }), Hw(e, "pattern", r => r.innerType?._zod?.pattern), Hw(e, "propValues", r => r.innerType?._zod?.propValues), 
  Hw(e, "optin", r => r.innerType?._zod?.optin ?? void 0), Hw(e, "optout", r => r.innerType?._zod?.optout ?? void 0), 
  e._zod.parse = (r, n) => e._zod.innerType._zod.run(r, n);
}), on = ur("$ZodCustom", (e, t) => {
  Z.init(e, t), AE.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = r => {
    let n = r.value, s = t.fn(n);
    if (s instanceof Promise) return s.then(i => ro(i, r, n, e));
    ro(s, r, n, e);
    return;
  };
});

function ro(e, t, r, n) {
  if (!e) {
    let s = {
      code: "custom",
      input: r,
      inst: n,
      path: [ ...n._zod.def.path ?? [] ],
      continue: !n._zod.def.abort
    };
    if (n._zod.def.params) s.params = n._zod.def.params;
    t.issues.push(xNt(s));
  }
}

class cn extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform");
    this.name = "ZodCyclicError";
  }
}

var Fe = "~memo", nn = [];

function Le(e) {
  return e.map(t => t.path ? {
    ...t,
    path: t.path.slice()
  } : {
    ...t
  });
}

var sn = new WeakMap;

function un(e, t) {
  let r = sn.get(e);
  if (r !== void 0) return r;
  if (t.has(e)) return !0;
  t.add(e);
  let n = !1, s = a => {
    if (!n && a?._zod && un(a, t)) n = !0;
  }, i = e._zod.def, c = i.type;
  switch (c) {
   case "object":
    {
      for (let a of Reflect.ownKeys(i.shape)) s(i.shape[a]);
      s(i.catchall);
      break;
    }

   case "array":
    s(i.element);
    break;

   case "tuple":
    for (let a of i.items) s(a);
    s(i.rest);
    break;

   case "record":
   case "map":
    s(i.keyType), s(i.valueType);
    break;

   case "set":
    s(i.valueType);
    break;

   case "union":
    for (let a of i.options) s(a);
    break;

   case "intersection":
    s(i.left), s(i.right);
    break;

   case "optional":
   case "nullable":
   case "default":
   case "prefault":
   case "catch":
   case "readonly":
   case "nonoptional":
   case "promise":
   case "success":
    s(i.innerType);
    break;

   case "pipe":
    s(i.in), s(i.out);
    break;

   case "function":
    s(i.input), s(i.output);
    break;

   case "lazy":
    s(e._zod.innerType);
    break;

   case "template_literal":
   case "string":
   case "number":
   case "int":
   case "boolean":
   case "bigint":
   case "symbol":
   case "undefined":
   case "null":
   case "void":
   case "never":
   case "any":
   case "unknown":
   case "date":
   case "nan":
   case "enum":
   case "literal":
   case "file":
   case "transform":
   case "custom":
    break;

   default:
    for (let a in i) {
      let l = Object.getOwnPropertyDescriptor(i, a);
      if (!l || l.get) continue;
      let p = l.value;
      if (!p || typeof p !== "object") continue;
      if (p._zod) s(p); else if (Array.isArray(p)) for (let f of p) s(f);
    }
  }
  return t.delete(e), sn.set(e, n), n;
}

function ni(e, t) {
  let r = e.buckets.get(t);
  if (!r) r = new Map, e.buckets.set(t, r);
  return r;
}

var pe, fe = [], si = {
  alloc(e, t, r) {
    let n = pe;
    if (!n) return r;
    pe = void 0;
    let s = {
      value: r,
      issues: null
    };
    return n.set(t.value, s), fe.push(s), r;
  },
  guard(e) {
    var t;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      let r = e._zod.parse, n = (s, i) => {
        if (i.direction !== "backward" && ii(i, s.value)) throw new cn;
        return r(s, i);
      };
      if (e._zod.parse = n, e._zod.run === r) e._zod.run = n;
    });
  },
  attach(e) {
    var t;
    let r, n, s;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      let i = e._zod.parse, c = (a, l) => {
        if (r === void 0) {
          if (r = un(e, new Set), !r) {
            if (e._zod.parse = i, e._zod.run === c) e._zod.run = i;
            return i(a, l);
          }
        }
        let p = a.value;
        if (p === null || typeof p !== "object") return i(a, l);
        let f = l[Fe];
        if (!f) f = {
          buckets: new Map,
          backEdges: void 0
        }, l[Fe] = f;
        let d;
        if (n === l) d = s; else d = ni(f, e), n = l, s = d;
        let h = d.get(p);
        if (h) {
          if (a.value = h.value, h.issues) {
            if (h.issues.length) a.issues.push(...Le(h.issues));
          } else a.memo = !0, f.backEdges ?? (f.backEdges = new Set), f.backEdges.add(h.value);
          return a;
        }
        pe = d;
        let m = fe.length, _ = i(a, l);
        pe = void 0;
        let x = fe.length > m ? fe.pop() : void 0;
        if (_ instanceof Promise) return _.then(g => {
          if (x) x.issues = g.issues.length ? Le(g.issues) : nn;
          return g;
        });
        if (x) x.issues = _.issues.length ? Le(_.issues) : nn;
        return _;
      };
      if (e._zod.parse = c, e._zod.run === i) e._zod.run = c;
    });
  }
};

function an() {
  return si;
}

function ii(e, t) {
  let r = e[Fe]?.backEdges;
  return r !== void 0 && t !== null && typeof t === "object" && r.has(t);
}

var ci = () => {
  let e = {
    string: {
      unit: "characters",
      verb: "to have"
    },
    file: {
      unit: "bytes",
      verb: "to have"
    },
    array: {
      unit: "items",
      verb: "to have"
    },
    set: {
      unit: "items",
      verb: "to have"
    },
    map: {
      unit: "entries",
      verb: "to have"
    }
  };
  function t(i) {
    return e[i] ?? null;
  }
  let r = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    credit_card: "credit card number",
    jwt: "JWT",
    template_literal: "input"
  }, n = {
    nan: "NaN"
  };
  function s(i, c) {
    if (i === "number" && typeof c === "number" && !Number.isFinite(c)) return String(c);
    return n[i] ?? i;
  }
  return i => {
    switch (i.code) {
     case "invalid_type":
      {
        let c = s(i.expected), a = t$s(i.input), l = s(a, i.input);
        return `Invalid input: expected ${c}, received ${l}`;
      }

     case "invalid_value":
      if (i.values.length === 1) return `Invalid input: expected ${dOo(i.values[0])}`;
      return `Invalid option: expected one of ${iOo(i.values, "|")}`;

     case "too_big":
      {
        let c = i.exact ? "exactly " : i.inclusive ? "<=" : "<", a = t(i.origin);
        if (a) return `Too big: expected ${i.origin ?? "value"} to have ${c}${i.maximum.toString()} ${a.unit ?? "elements"}`;
        return `Too big: expected ${i.origin ?? "value"} to be ${c}${i.maximum.toString()}`;
      }

     case "too_small":
      {
        let c = i.exact ? "exactly " : i.inclusive ? ">=" : ">", a = t(i.origin);
        if (a) return `Too small: expected ${i.origin} to have ${c}${i.minimum.toString()} ${a.unit}`;
        return `Too small: expected ${i.origin} to be ${c}${i.minimum.toString()}`;
      }

     case "invalid_format":
      {
        let c = i;
        if (c.format === "starts_with") return `Invalid string: must start with "${c.prefix}"`;
        if (c.format === "ends_with") return `Invalid string: must end with "${c.suffix}"`;
        if (c.format === "includes") return `Invalid string: must include "${c.includes}"`;
        if (c.format === "regex") return `Invalid string: must match pattern ${c.pattern}`;
        return `Invalid ${r[c.format] ?? i.format}`;
      }

     case "not_multiple_of":
      return `Invalid number: must be a multiple of ${i.divisor}`;

     case "unrecognized_keys":
      return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${iOo(i.keys, ", ")}`;

     case "invalid_key":
      return `Invalid key in ${i.origin}`;

     case "invalid_union":
      if (i.options && Array.isArray(i.options) && i.options.length > 0) return `Invalid discriminator value. Expected ${i.options.map(a => `'${a}'`).join(" | ")}`;
      if (i.inclusive === !1) return "Invalid input: more than one option matched";
      return "Invalid input";

     case "invalid_element":
      return `Invalid value in ${i.origin}`;

     default:
      return "Invalid input";
    }
  };
};

function Ue() {
  return {
    localeError: ci()
  };
}

var ln;

class pn {
  constructor() {
    this._map = new WeakMap, this._idmap = new Map;
  }
  add(e, ...t) {
    let r = t[0];
    if (this._map.set(e, r), r && typeof r === "object" && "id" in r) this._idmap.set(r.id, e);
    return this;
  }
  clear() {
    return this._map = new WeakMap, this._idmap = new Map, this;
  }
  remove(e) {
    let t = this._map.get(e);
    if (t && typeof t === "object" && "id" in t) this._idmap.delete(t.id);
    return this._map.delete(e), this;
  }
  get(e) {
    let t = e._zod.parent;
    if (t) {
      let r = {
        ...this.get(t) ?? {}
      };
      delete r.id;
      let n = {
        ...r,
        ...this._map.get(e)
      };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}

function ui() {
  return new pn;
}

(ln = globalThis).__zod_globalRegistry ?? (ln.__zod_globalRegistry = ui());

var dXe = globalThis.__zod_globalRegistry;

function fn(e, t) {
  return new e({
    type: "string",
    ...Hl(t)
  });
}

function $Ns(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...Hl(t)
  });
}

function Me(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function dn(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function Je(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function mn(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Hl(t)
  });
}

function hn(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Hl(t)
  });
}

function _n(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Hl(t)
  });
}

function Be(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function gn(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function xn(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function vn(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function zn(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function yn(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function $n(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function bn(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function kn(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function Zn(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function wn(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function Pn(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function Ve(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function Sn(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function In(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

function On(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Hl(t)
  });
}

var FNs = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};

function HOr(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Hl(t)
  });
}

function DOr(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...Hl(t)
  });
}

function Tn(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Hl(t)
  });
}

function An(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Hl(t)
  });
}

function En(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...Hl(t)
  });
}

function UNs(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...Hl(t)
  });
}

function Nn(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Hl(t)
  });
}

function Cn(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...Hl(t)
  });
}

function Rn(e, t) {
  return new e({
    type: "boolean",
    ...Hl(t)
  });
}

function BNs(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...Hl(t)
  });
}

function Dn(e, t) {
  return new e({
    type: "undefined",
    ...Hl(t)
  });
}

function jn(e, t) {
  return new e({
    type: "null",
    ...Hl(t)
  });
}

function Ln(e) {
  return new e({
    type: "any"
  });
}

function Fn(e) {
  return new e({
    type: "unknown"
  });
}

function Un(e, t) {
  return new e({
    type: "never",
    ...Hl(t)
  });
}

function de(e, t) {
  return new Se({
    check: "less_than",
    ...Hl(t),
    value: e,
    inclusive: !1
  });
}

function B(e, t) {
  return new Se({
    check: "less_than",
    ...Hl(t),
    value: e,
    inclusive: !0
  });
}

function me(e, t) {
  return new Ie({
    check: "greater_than",
    ...Hl(t),
    value: e,
    inclusive: !1
  });
}

function V(e, t) {
  return new Ie({
    check: "greater_than",
    ...Hl(t),
    value: e,
    inclusive: !0
  });
}

function he(e, t) {
  return new Ir({
    check: "multiple_of",
    ...Hl(t),
    value: e
  });
}

function kan(e, t) {
  return new Tr({
    check: "max_length",
    ...Hl(t),
    maximum: e
  });
}

function R(e, t) {
  return new Ar({
    check: "min_length",
    ...Hl(t),
    minimum: e
  });
}

function _e(e, t) {
  return new Er({
    check: "length_equals",
    ...Hl(t),
    length: e
  });
}

function Ke(e, t) {
  return new Nr({
    check: "string_format",
    format: "regex",
    ...Hl(t),
    pattern: e
  });
}

function We(e) {
  return new Cr({
    check: "string_format",
    format: "lowercase",
    ...Hl(e)
  });
}

function Ge(e) {
  return new Rr({
    check: "string_format",
    format: "uppercase",
    ...Hl(e)
  });
}

function Ye(e, t) {
  return new Dr({
    check: "string_format",
    format: "includes",
    ...Hl(t),
    includes: e
  });
}

function qe(e, t) {
  return new jr({
    check: "string_format",
    format: "starts_with",
    ...Hl(t),
    prefix: e
  });
}

function Xe(e, t) {
  return new Lr({
    check: "string_format",
    format: "ends_with",
    ...Hl(t),
    suffix: e
  });
}

function N(e) {
  return new Fr({
    check: "overwrite",
    tx: e
  });
}

function He(e) {
  return N(t => t.normalize(e));
}

function Qe() {
  return N(e => e.trim());
}

function et() {
  return N(e => e.toLowerCase());
}

function tt() {
  return N(e => e.toUpperCase());
}

function rt() {
  return N(e => qNs(e));
}

function Mn(e, t, r) {
  return new e({
    type: "array",
    element: t,
    ...Hl(r)
  });
}

function Jn(e, t, r) {
  let n = Hl(r);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}

function Bn(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Hl(r)
  });
}

function Vn(e, t) {
  let r = ai(n => (n.addIssue = s => {
    if (typeof s === "string") n.issues.push(xNt(s, n.value, r._zod.def)); else {
      let i = s;
      if (i.fatal) i.continue = !1;
      if (i.code ?? (i.code = "custom"), !("input" in i)) i.input = n.value;
      i.inst ?? (i.inst = r), i.continue ?? (i.continue = !r._zod.def.abort), n.issues.push(xNt(i));
    }
  }, e(n.value, n)), t);
  return r;
}

function ai(e, t) {
  let r = new Z({
    check: "custom",
    ...Hl(t)
  });
  return r._zod.check = e, r;
}

function K(e, ...t) {
  for (let r of t) for (let n of Reflect.ownKeys(r)) if (Object.prototype.propertyIsEnumerable.call(r, n)) EG(e, n, r[n]);
  return e;
}

function G(e) {
  let t = e?.target ?? "draft-2020-12";
  if (t === "draft-4") t = "draft-04";
  if (t === "draft-7") t = "draft-07";
  return {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? dXe,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {}),
    io: e?.io ?? "output",
    counter: 0,
    seen: new Map,
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: e?.external ?? void 0
  };
}

function k(e, t, r, n, s) {
  let i = typeof t.unrepresentable === "function" ? t.unrepresentable({
    zodSchema: e,
    path: n.path,
    message: s
  }) : t.unrepresentable;
  if (i === "any") return !1;
  if (i === void 0 || i === "throw") throw Error(s);
  return Object.assign(r, i), !0;
}

function mA(e, t, r = {
  path: [],
  schemaPath: []
}) {
  var n;
  let s = e._zod.def, i = t.seen.get(e);
  if (i) {
    if (i.count++, r.schemaPath.includes(e)) i.cycle = r.path;
    return i.schema;
  }
  let c = {
    schema: {},
    count: 1,
    cycle: void 0,
    path: r.path
  };
  t.seen.set(e, c), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
  let a = e._zod.toJSONSchema?.();
  if (a) c.schema = a; else {
    let f = {
      ...r,
      schemaPath: [ ...r.schemaPath, e ],
      path: r.path
    };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, c.schema, f); else {
      let h = c.schema, m = t.processors[s.type];
      if (!m) throw Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      m(e, t, h, f);
    }
    let d = e._zod.parent;
    if (d) {
      if (!c.ref) c.ref = d;
      mA(d, t, f), t.seen.get(d).isParent = !0;
    }
  }
  let l = t.metadataRegistry.get(e);
  if (l) K(c.schema, l);
  if (t.io === "input" && w(e)) delete c.schema.examples, delete c.schema.default;
  if (t.io === "input" && "_prefault" in c.schema) (n = c.schema).default ?? (n.default = c.schema._prefault);
  return delete c.schema._prefault, t.seen.get(e).schema;
}

function Kn(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}

function Y(e, t) {
  let r = e.seen.get(t);
  if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
  if (e.external && e.sharedDefsExtractedFor === e.external) return;
  let n = new Map;
  for (let c of e.seen.entries()) {
    let a = e.metadataRegistry.get(c[0])?.id;
    if (a) {
      let l = n.get(a);
      if (l && l !== c[0]) throw Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(a, c[0]);
    }
  }
  let s = c => {
    let a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      let d = e.external.registry.get(c[0])?.id, h = e.external.uri ?? (_ => _);
      if (d) return {
        ref: h(d)
      };
      let m = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
      return c[1].defId = m, {
        defId: m,
        ref: `${h("__shared")}#/${a}/${Kn(m)}`
      };
    }
    let l = "#", p = `${l}/${a}/`;
    if (c[1] === r && !c[1].schema.id) return {
      ref: l
    };
    let f = c[1].schema.id ?? `__schema${e.counter++}`;
    return {
      defId: f,
      ref: p + Kn(f)
    };
  }, i = c => {
    if (c[1].schema.$ref) return;
    let a = c[1], {ref: l, defId: p} = s(c);
    if (a.def = {
      ...a.schema
    }, p) a.defId = p;
    let f = a.schema;
    for (let d in f) delete f[d];
    f.$ref = l;
  };
  if (e.cycles === "throw") for (let c of e.seen.entries()) {
    let a = c[1];
    if (a.cycle) throw Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (let c of e.seen.entries()) {
    let a = c[1];
    if (t === c[0]) {
      i(c);
      continue;
    }
    if (e.external) {
      let p = e.external.registry.get(c[0])?.id;
      if (t !== c[0] && p) {
        i(c);
        continue;
      }
    }
    if (e.metadataRegistry.get(c[0])?.id) {
      i(c);
      continue;
    }
    if (a.cycle) {
      i(c);
      continue;
    }
    if (a.count > 1) {
      if (e.reused === "ref") {
        i(c);
        continue;
      }
    }
  }
  if (e.external) e.sharedDefsExtractedFor = e.external;
}

function Yn(e) {
  let t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
  let r = [];
  for (let n of t) {
    if (!n || typeof n !== "object") return;
    Yn(n);
    let s = Object.keys(n);
    if (s.length !== 1 || s[0] !== "type") return;
    let i = n.type;
    for (let c of Array.isArray(i) ? i : [ i ]) {
      if (typeof c !== "string") return;
      if (!r.includes(c)) r.push(c);
    }
  }
  delete e.anyOf, e.type = r.length === 1 ? r[0] : r;
}

var qn = new Set([ "type", "properties", "required", "additionalProperties" ]), Wn = [ "oneOf", "anyOf" ];

function Gn(e) {
  let t = e.additionalProperties;
  if (t === void 0 || t === !1 || typeof t !== "object" || t === null) return null;
  return Object.keys(t).length ? t : null;
}

function ot(e) {
  let t = [];
  for (let i of e) {
    if (typeof i !== "object" || i.type !== "object") return null;
    for (let c in i) if (!qn.has(c)) return null;
    t.push(i);
  }
  let r = {}, n = new Set;
  for (let i of t) {
    for (let c in i.properties) {
      if (Object.prototype.hasOwnProperty.call(r, c)) continue;
      let a = [];
      for (let p of t) {
        let f = p.properties?.[c] ?? Gn(p);
        if (f === null || f === void 0) continue;
        if (!a.some(d => JSON.stringify(d) === JSON.stringify(f))) a.push(f);
      }
      let l = a.length === 1 ? a[0] : ot(a) ?? {
        allOf: a
      };
      EG(r, c, l);
    }
    for (let c of i.required ?? []) n.add(c);
  }
  let s = {
    type: "object",
    properties: r
  };
  if (n.size) s.required = [ ...n ];
  if (t.every(i => i.additionalProperties === !1)) s.additionalProperties = !1; else {
    let i = [];
    for (let c of t) {
      let a = Gn(c);
      if (a && !i.some(l => JSON.stringify(l) === JSON.stringify(a))) i.push(a);
    }
    if (i.length === 1) s.additionalProperties = i[0]; else if (i.length > 1) s.additionalProperties = {
      allOf: i
    };
  }
  return s;
}

function li(e) {
  let t = e.allOf;
  if (!Array.isArray(t) || t.length < 2) return;
  for (let s of qn) if (s in e) return;
  let r = t.filter(s => Wn.some(i => Array.isArray(s[i]))), n = null;
  if (!r.length) n = ot(t); else {
    let s = r[0], i = Wn.find(l => Array.isArray(s[l]));
    if (Object.keys(s).length !== 1) return;
    let c = t.filter(l => l !== s), a = s[i].map(l => ot([ ...c, l ]));
    if (a.some(l => !l)) return;
    n = {
      [i]: a
    };
  }
  if (!n) return;
  delete e.allOf, K(e, n);
}

function q(e, t) {
  let r = e.seen.get(t);
  if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
  let n = a => {
    let l = e.seen.get(a);
    if (l.ref === null) return;
    let p = l.def ?? l.schema, f = {
      ...p
    }, d = l.ref;
    if (l.ref = null, d) {
      n(d);
      let m = e.seen.get(d), _ = m.schema;
      if (_.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0")) p.allOf = p.allOf ?? [], 
      p.allOf.push(_); else K(p, _);
      if (K(p, f), a._zod.parent === d) for (let g in p) {
        if (g === "$ref" || g === "allOf") continue;
        if (!(g in f)) delete p[g];
      }
      if (_.$ref && m.def) for (let g in p) {
        if (g === "$ref" || g === "allOf") continue;
        if (g in m.def && JSON.stringify(p[g]) === JSON.stringify(m.def[g])) delete p[g];
      }
    }
    let h = a._zod.parent;
    if (h && h !== d) {
      n(h);
      let m = e.seen.get(h);
      if (m?.schema.$ref) {
        if (p.$ref = m.schema.$ref, m.def) for (let _ in p) {
          if (_ === "$ref" || _ === "allOf") continue;
          if (_ in m.def && JSON.stringify(p[_]) === JSON.stringify(m.def[_])) delete p[_];
        }
      }
    }
    e.override({
      zodSchema: a,
      jsonSchema: p,
      path: l.path ?? []
    });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (let a of [ ...e.seen.entries() ].reverse()) n(a[0]);
    if (e.target !== "openapi-3.0") for (let a of e.seen.entries()) Yn(a[1].def ?? a[1].schema);
    for (let a of e.deferred) a();
    if (e.intersections.length) {
      let a = new Map;
      for (let l of e.seen.values()) for (let p of [ l.schema, l.def ]) {
        let f = p?.allOf;
        if (!Array.isArray(f)) continue;
        let d = a.get(f);
        if (d) d.push(p); else a.set(f, [ p ]);
      }
      for (let l of e.intersections) for (let p of a.get(l) ?? []) li(p);
    }
  }
  let s = {};
  if (e.target === "draft-2020-12") s.$schema = "https://json-schema.org/draft/2020-12/schema"; else if (e.target === "draft-07") s.$schema = "http://json-schema.org/draft-07/schema#"; else if (e.target === "draft-04") s.$schema = "http://json-schema.org/draft-04/schema#"; else if (e.target === "openapi-3.0") ;
  if (e.external?.uri) {
    let a = e.external.registry.get(t)?.id;
    if (!a) throw Error("Schema is missing an `id` property");
    s.$id = e.external.uri(a);
  }
  K(s, r.defId ? r.schema : r.def ?? r.schema);
  let i = e.metadataRegistry.get(t)?.id;
  if (i !== void 0 && s.id === i) delete s.id;
  let c = e.external?.defs ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external) for (let a of e.seen.entries()) {
    let l = a[1];
    if (l.def && l.defId) {
      if (l.def.id === l.defId) delete l.def.id;
      EG(c, l.defId, l.def);
    }
  }
  if (e.external) e.sharedEmitDoneFor = e.external;
  if (e.external) ; else if (Object.keys(c).length > 0) if (e.target === "draft-2020-12") s.$defs = c; else s.definitions = c;
  try {
    let a = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(a, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: W(t, "input", e.processors),
          output: W(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), a;
  } catch (a) {
    throw Error("Error converting schema to JSON.");
  }
}

function w(e, t) {
  let r = t ?? {
    seen: new Set
  };
  if (r.seen.has(e)) return !1;
  r.seen.add(e);
  let n = e._zod.def;
  if (n.type === "transform") return !0;
  if (n.type === "array") return w(n.element, r);
  if (n.type === "set") return w(n.valueType, r);
  if (n.type === "lazy") return w(n.getter(), r);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault" || n.type === "catch") return w(n.innerType, r);
  if (n.type === "intersection") return w(n.left, r) || w(n.right, r);
  if (n.type === "record" || n.type === "map") return w(n.keyType, r) || w(n.valueType, r);
  if (n.type === "pipe") {
    if (e._zod.traits.has("$ZodCodec")) return !0;
    return w(n.in, r) || w(n.out, r);
  }
  if (n.type === "object") {
    for (let s in n.shape) if (w(n.shape[s], r)) return !0;
    return !1;
  }
  if (n.type === "union") {
    for (let s of n.options) if (w(s, r)) return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (let s of n.items) if (w(s, r)) return !0;
    if (n.rest && w(n.rest, r)) return !0;
    return !1;
  }
  return !1;
}

var Xn = (e, t = {}) => r => {
  let n = G({
    ...r,
    processors: t
  });
  return mA(e, n), Y(n, e), q(n, e);
}, W = (e, t, r = {}) => n => {
  let {libraryOptions: s, target: i} = n ?? {}, c = G({
    ...s ?? {},
    target: i,
    io: t,
    processors: r
  });
  return mA(e, c), Y(c, e), q(c, e);
};

var pi = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
}, it = (e, t, r, n) => {
  let s = r;
  s.type = "string";
  let {minimum: i, maximum: c, format: a, patterns: l, contentEncoding: p, laxFormat: f} = e._zod.bag;
  if (typeof i === "number") s.minLength = i;
  if (typeof c === "number") s.maxLength = c;
  if (a) {
    if (s.format = pi[a] ?? a, s.format === "") delete s.format;
    if (a === "time" || f) delete s.format;
  }
  if (p) s.contentEncoding = p;
  if (l && l.size > 0) {
    let d = [ ...l ];
    if (d.length === 1) s.pattern = d[0].source; else if (d.length > 1) s.allOf = [ ...d.map(h => ({
      ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
        type: "string"
      } : {},
      pattern: h.source
    })) ];
  }
}, ct = (e, t, r, n) => {
  let s = r, {minimum: i, maximum: c, format: a, multipleOf: l, exclusiveMaximum: p, exclusiveMinimum: f} = e._zod.bag;
  if (typeof a === "string" && a.includes("int")) s.type = "integer"; else s.type = "number";
  let d = typeof f === "number" && f >= (i ?? Number.NEGATIVE_INFINITY), h = typeof p === "number" && p <= (c ?? Number.POSITIVE_INFINITY), m = t.target === "draft-04" || t.target === "openapi-3.0";
  if (d) if (m) s.minimum = f, s.exclusiveMinimum = !0; else s.exclusiveMinimum = f; else if (typeof i === "number") s.minimum = i;
  if (h) if (m) s.maximum = p, s.exclusiveMaximum = !0; else s.exclusiveMaximum = p; else if (typeof c === "number") s.maximum = c;
  if (typeof l === "number") if (Number.isFinite(l) && l !== 0) s.multipleOf = Math.abs(l); else k(e, t, s, n, `A multipleOf divisor of ${l} cannot be represented in JSON Schema`);
}, ut = (e, t, r, n) => {
  r.type = "boolean";
}, Qn = (e, t, r, n) => {
  k(e, t, r, n, "BigInt cannot be represented in JSON Schema");
}, es = (e, t, r, n) => {
  k(e, t, r, n, "Symbols cannot be represented in JSON Schema");
}, at = (e, t, r, n) => {
  if (t.target === "openapi-3.0") r.type = "string", r.nullable = !0, r.enum = [ null ]; else r.type = "null";
}, lt = (e, t, r, n) => {
  k(e, t, r, n, "Undefined cannot be represented in JSON Schema");
}, ts = (e, t, r, n) => {
  k(e, t, r, n, "Void cannot be represented in JSON Schema");
}, pt = (e, t, r, n) => {
  r.not = {};
}, ft = (e, t, r, n) => {}, dt = (e, t, r, n) => {}, rs = (e, t, r, n) => {
  k(e, t, r, n, "Date cannot be represented in JSON Schema");
}, mt = (e, t, r, n) => {
  let s = e._zod.def, i = $Or(s.entries);
  if (i.length === 0) {
    r.not = {};
    return;
  }
  if (i.every(c => typeof c === "number")) r.type = "number";
  if (i.every(c => typeof c === "string")) r.type = "string";
  r.enum = i;
}, ht = (e, t, r, n) => {
  let s = e._zod.def;
  if (s.values.length === 0) {
    r.not = {};
    return;
  }
  let i = [];
  for (let c of s.values) if (c === void 0) {
    if (k(e, t, r, n, "Literal `undefined` cannot be represented in JSON Schema")) return;
  } else if (typeof c === "bigint") {
    if (k(e, t, r, n, "BigInt literals cannot be represented in JSON Schema")) return;
    i.push(Number(c));
  } else i.push(c);
  if (i.length === 0) ; else if (i.length === 1) {
    let c = i[0];
    if (r.type = c === null ? "null" : typeof c, t.target === "draft-04" || t.target === "openapi-3.0") r.enum = [ c ]; else r.const = c;
  } else {
    if (i.every(c => typeof c === "number")) r.type = "number";
    if (i.every(c => typeof c === "string")) r.type = "string";
    if (i.every(c => typeof c === "boolean")) r.type = "boolean";
    if (i.every(c => c === null)) r.type = "null";
    r.enum = i;
  }
}, os = (e, t, r, n) => {
  k(e, t, r, n, "NaN cannot be represented in JSON Schema");
}, ns = (e, t, r, n) => {
  let s = r, i = e._zod.pattern;
  if (!i) throw Error("Pattern not found in template literal");
  s.type = "string", s.pattern = i.source;
}, ss = (e, t, r, n) => {
  let s = r, i = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  }, {minimum: c, maximum: a, mime: l} = e._zod.bag;
  if (c !== void 0) i.minLength = c;
  if (a !== void 0) i.maxLength = a;
  if (l) if (l.length === 1) i.contentMediaType = l[0], Object.assign(s, i); else Object.assign(s, i), 
  s.anyOf = l.map(p => ({
    contentMediaType: p
  })); else Object.assign(s, i);
}, is = (e, t, r, n) => {
  r.type = "boolean";
}, gt = (e, t, r, n) => {
  k(e, t, r, n, "Custom types cannot be represented in JSON Schema");
}, cs = (e, t, r, n) => {
  k(e, t, r, n, "Function types cannot be represented in JSON Schema");
}, xt = (e, t, r, n) => {
  k(e, t, r, n, "Transforms cannot be represented in JSON Schema");
}, us = (e, t, r, n) => {
  k(e, t, r, n, "Map cannot be represented in JSON Schema");
}, as = (e, t, r, n) => {
  k(e, t, r, n, "Set cannot be represented in JSON Schema");
}, vt = (e, t, r, n) => {
  let s = r, i = e._zod.def, {minimum: c, maximum: a} = e._zod.bag;
  if (typeof c === "number") s.minItems = c;
  if (typeof a === "number") s.maxItems = a;
  s.type = "array", s.items = mA(i.element, t, {
    ...n,
    path: [ ...n.path, "items" ]
  });
};

function X(e) {
  let t = e._zod.def;
  if (t.type === "pipe" && t.in._zod.traits.has("$ZodTransform")) return X(t.out);
  if (t.type === "catch") return X(t.innerType);
  return e._zod.optin;
}

var zt = (e, t, r, n) => {
  let s = r, i = e._zod.def, c = i.shape;
  if (Object.getOwnPropertySymbols(c).length && k(e, t, s, n, "Symbol keys cannot be represented in JSON Schema")) return;
  s.type = "object", s.properties = {};
  for (let f in c) EG(s.properties, f, mA(c[f], t, {
    ...n,
    path: [ ...n.path, "properties", f ]
  }));
  let l = new Set(Object.keys(c)), p = new Set([ ...l ].filter(f => {
    let d = i.shape[f];
    if (t.io === "input") return X(d) === void 0; else return d._zod.optout === void 0;
  }));
  if (p.size > 0) s.required = Array.from(p);
  if (i.catchall?._zod.def.type === "never") s.additionalProperties = !1; else if (!i.catchall) {
    if (t.io === "output") s.additionalProperties = !1;
  } else if (i.catchall) s.additionalProperties = mA(i.catchall, t, {
    ...n,
    path: [ ...n.path, "additionalProperties" ]
  });
}, yt = (e, t, r, n) => {
  let s = e._zod.def, i = s.inclusive === !1, c = s.options.map((a, l) => mA(a, t, {
    ...n,
    path: [ ...n.path, i ? "oneOf" : "anyOf", l ]
  }));
  if (i) r.oneOf = c; else r.anyOf = c;
}, $t = (e, t, r, n) => {
  let s = e._zod.def, i = mA(s.left, t, {
    ...n,
    path: [ ...n.path, "allOf", 0 ]
  }), c = mA(s.right, t, {
    ...n,
    path: [ ...n.path, "allOf", 1 ]
  }), a = p => "allOf" in p && Object.keys(p).length === 1, l = [ ...a(i) ? i.allOf : [ i ], ...a(c) ? c.allOf : [ c ] ];
  r.allOf = l, t.intersections.push(l);
}, bt = (e, t, r, n) => {
  let s = r, i = e._zod.def;
  s.type = "array";
  let c = t.target === "draft-2020-12" ? "prefixItems" : "items", a = t.target === "draft-2020-12" ? "items" : t.target === "openapi-3.0" ? "items" : "additionalItems", l = i.items.map((x, g) => mA(x, t, {
    ...n,
    path: [ ...n.path, c, g ]
  })), p = i.rest ? mA(i.rest, t, {
    ...n,
    path: [ ...n.path, a, ...t.target === "openapi-3.0" ? [ i.items.length ] : [] ]
  }) : null, f = i.items.length;
  while (f > 0) {
    let x = i.items[f - 1];
    if (!(t.io === "input" ? X(x) !== void 0 : x._zod.optout === "optional")) break;
    f--;
  }
  let d = i.items.length, h = !i.rest;
  if (t.target === "draft-2020-12") {
    if (s.prefixItems = l, h) s.items = !1; else if (p) s.items = p;
    if (f > 0) s.minItems = f;
    if (h) s.maxItems = d;
  } else if (t.target === "openapi-3.0") {
    if (s.items = {
      anyOf: l
    }, p) s.items.anyOf.push(p);
    if (f > 0) s.minItems = f;
    if (h) s.maxItems = d;
  } else {
    if (s.items = l, h) s.additionalItems = !1; else if (p) s.additionalItems = p;
    if (f > 0) s.minItems = f;
    if (h) s.maxItems = d;
  }
  let {minimum: m, maximum: _} = e._zod.bag;
  if (typeof m === "number") s.minItems = m;
  if (typeof _ === "number") s.maxItems = _;
};

function nt(e, t, r) {
  if (t.$ref) {
    if (r.has(t)) return t;
    r.add(t);
    let _ = e.get(t)?.def;
    if (!_) return t;
    let x = nt(e, _, r);
    return x === _ ? t : x;
  }
  for (let _ of [ "anyOf", "oneOf" ]) {
    let x = t[_];
    if (!Array.isArray(x)) continue;
    let g = x.map(O => nt(e, O, r));
    if (g.some((O, C) => O !== x[C])) t = {
      ...t,
      [_]: g
    };
  }
  let n = Array.isArray(t.type) ? t.type : [ t.type ], s = !n.includes("string") && n.some(_ => _ === "number" || _ === "integer"), i = t.enum ?? (t.const !== void 0 ? [ t.const ] : void 0);
  if (!s && !i?.some(_ => typeof _ === "number")) return t;
  let {minimum: c, maximum: a, exclusiveMinimum: l, exclusiveMaximum: p, multipleOf: f, format: d, id: h, ...m} = t;
  if (m.enum) m.enum = m.enum.map(_ => typeof _ === "number" ? String(_) : _); else if (typeof m.const === "number") m.const = String(m.const);
  if (!s) return m;
  if (m.type = "string", !i) m.pattern = (n.includes("number") ? L : se).source;
  return m;
}

var st = new WeakMap;

function fi(e) {
  let t = new Map;
  for (let n of e.seen.values()) if (n.def && !t.has(n.schema)) t.set(n.schema, n);
  let r = new Map;
  for (let n of st.get(e) ?? []) {
    let s = e.seen.get(n), i = (s?.def ?? s?.schema)?.propertyNames;
    if (!i || i === !0 || r.has(i)) continue;
    let c = nt(t, i, new Set);
    if (c !== i) r.set(i, c);
  }
  if (!r.size) return;
  for (let n of e.seen.values()) for (let s of [ n.schema, n.def ]) {
    let i = s && r.get(s.propertyNames);
    if (i) s.propertyNames = i;
  }
}

var kt = (e, t, r, n) => {
  let s = r, i = e._zod.def;
  s.type = "object";
  let c = i.keyType, l = c._zod.bag?.patterns;
  if (i.mode === "loose" && l && l.size > 0) {
    let d = mA(i.valueType, t, {
      ...n,
      path: [ ...n.path, "patternProperties", "*" ]
    });
    s.patternProperties = {};
    for (let h of l) EG(s.patternProperties, h.source, d);
  } else {
    if (t.target === "draft-07" || t.target === "draft-2020-12") {
      s.propertyNames = mA(i.keyType, t, {
        ...n,
        path: [ ...n.path, "propertyNames" ]
      });
      let d = st.get(t);
      if (!d) d = [], st.set(t, d), t.deferred.push(() => fi(t));
      d.push(e);
    }
    s.additionalProperties = mA(i.valueType, t, {
      ...n,
      path: [ ...n.path, "additionalProperties" ]
    });
  }
  let p = c._zod.values, f = t.io === "input" && X(i.valueType) !== void 0;
  if (p && !i.partial && !f) {
    let d = [ ...p ].filter(h => typeof h === "string" || typeof h === "number");
    if (d.length > 0) s.required = d.map(String);
  }
}, Zt = (e, t, r, n) => {
  let s = e._zod.def, i = mA(s.innerType, t, n), c = t.seen.get(e);
  if (t.target === "openapi-3.0") c.ref = s.innerType, r.nullable = !0; else r.anyOf = [ i, {
    type: "null"
  } ];
}, wt = (e, t, r, n) => {
  let s = e._zod.def;
  mA(s.innerType, t, n);
  let i = t.seen.get(e);
  i.ref = s.innerType;
}, Pt = Symbol();

function ls(e, t, r, n, s) {
  let i = !1, c = JSON.stringify(e, (a, l) => {
    if (typeof l !== "bigint") return l;
    return i = !0, null;
  });
  if (!i) return JSON.parse(c);
  return k(t, r, n, s, "BigInt defaults cannot be represented in JSON Schema"), Pt;
}

var St = (e, t, r, n) => {
  let s = e._zod.def;
  mA(s.innerType, t, n);
  let i = t.seen.get(e);
  i.ref = s.innerType;
  let c = ls(s.defaultValue, e, t, r, n);
  if (c !== Pt) r.default = c;
}, It = (e, t, r, n) => {
  let s = e._zod.def;
  mA(s.innerType, t, n);
  let i = t.seen.get(e);
  if (i.ref = s.innerType, t.io !== "input") return;
  let c = ls(s.defaultValue, e, t, r, n);
  if (c !== Pt) r._prefault = c;
}, Ot = (e, t, r, n) => {
  let s = e._zod.def;
  mA(s.innerType, t, n);
  let i = t.seen.get(e);
  i.ref = s.innerType;
  let c;
  try {
    c = s.catchValue(void 0);
  } catch {
    k(e, t, r, n, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  r.default = c;
}, Tt = (e, t, r, n) => {
  let s = e._zod.def, i = s.in._zod.traits.has("$ZodTransform"), c = t.io === "input" ? i ? s.out : s.in : s.out;
  mA(c, t, n);
  let a = t.seen.get(e);
  a.ref = c;
}, At = (e, t, r, n) => {
  let s = e._zod.def;
  mA(s.innerType, t, n);
  let i = t.seen.get(e);
  i.ref = s.innerType, r.readOnly = !0;
}, ps = (e, t, r, n) => {
  let s = e._zod.def;
  mA(s.innerType, t, n);
  let i = t.seen.get(e);
  i.ref = s.innerType;
}, ge = (e, t, r, n) => {
  let s = e._zod.def;
  mA(s.innerType, t, n);
  let i = t.seen.get(e);
  i.ref = s.innerType;
}, Et = (e, t, r, n) => {
  let s = e._zod.innerType;
  mA(s, t, n);
  let i = t.seen.get(e);
  i.ref = s;
}, Hn = {
  string: it,
  number: ct,
  boolean: ut,
  bigint: Qn,
  symbol: es,
  null: at,
  undefined: lt,
  void: ts,
  never: pt,
  any: ft,
  unknown: dt,
  date: rs,
  enum: mt,
  literal: ht,
  nan: os,
  template_literal: ns,
  file: ss,
  success: is,
  custom: gt,
  function: cs,
  transform: xt,
  map: us,
  set: as,
  array: vt,
  object: zt,
  union: yt,
  intersection: $t,
  tuple: bt,
  record: kt,
  nullable: Zt,
  nonoptional: wt,
  default: St,
  prefault: It,
  catch: Ot,
  pipe: Tt,
  readonly: At,
  promise: ps,
  optional: ge,
  lazy: Et
};

function cXe(e, t) {
  if ("_idmap" in e) {
    let n = e, s = G({
      ...t,
      processors: Hn
    }), i = {};
    for (let l of n._idmap.entries()) {
      let [p, f] = l;
      mA(f, s);
    }
    let c = {}, a = {
      registry: n,
      uri: t?.uri,
      defs: i
    };
    s.external = a;
    for (let l of n._idmap.entries()) {
      let [p, f] = l;
      Y(s, f), EG(c, p, q(s, f));
    }
    if (Object.keys(i).length > 0) {
      let l = s.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [l]: i
      };
    }
    return {
      schemas: c
    };
  }
  let r = G({
    ...t,
    processors: Hn
  });
  return mA(e, r), Y(r, e), q(r, e);
}

var fs = new WeakSet([ Object.prototype, Error.prototype ]);

function xe(e, t, r) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      let n = r(this);
      return Object.defineProperty(this, t, {
        value: n,
        configurable: !0,
        writable: !0
      }), n;
    },
    set(n) {
      Object.defineProperty(this, t, {
        value: n,
        configurable: !0,
        writable: !0
      });
    }
  });
}

var ds = (e, t) => {
  ee.init(e, t), e.name = "ZodError";
  let r = Object.getPrototypeOf(e);
  if (fs.has(r)) return;
  fs.add(r), xe(r, "format", n => s => Jt(n, s)), xe(r, "flatten", n => s => Mt(n, s)), 
  xe(r, "addIssue", n => s => {
    n.issues.push(s), n.message = JSON.stringify(n.issues, gqn, 2);
  }), xe(r, "addIssues", n => s => {
    n.issues.push(...s), n.message = JSON.stringify(n.issues, gqn, 2);
  }), Object.defineProperty(r, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  });
}, ex = ur("ZodError", ds), S = ur("ZodError", ds, void 0, {
  Parent: Error
});

var ms = re(S), hs = ne(S), LOr = D(S), _s = j(S), gs = Kt(S), xs = Wt(S), vs = Gt(S), zs = Yt(S), ys = qt(S), $s = Xt(S), bs = Ht(S), ks = Qt(S);

function zi() {
  if (!Tee.localeError) aX(Ue());
}

function Q() {
  if (!Tee.memoizer) aX({
    memoizer: an()
  });
}

var CE = ur("ZodType", (e, t) => (zi(), AE.init(e, t), e.def = t, e.type = t.type, 
e), {
  check(...e) {
    let t = this.def;
    return this.clone(igt(t, {
      checks: [ ...t.checks ?? [], ...e.map(r => typeof r === "function" ? {
        _zod: {
          check: r,
          def: {
            check: "custom"
          },
          onattach: []
        }
      } : r) ]
    }), {
      parent: !0
    });
  },
  with(...e) {
    return this.check(...e);
  },
  clone(e, t) {
    return W1e(this, e, t);
  },
  brand() {
    return this;
  },
  register(e, t) {
    return e.add(this, t), this;
  },
  refine(e, t) {
    return this.check(ic(e, t));
  },
  superRefine(e, t) {
    return this.check(cc(e, t));
  },
  overwrite(e) {
    return this.check(N(e));
  },
  optional() {
    return ji(this);
  },
  exactOptional() {
    return Gi(this);
  },
  nullable() {
    return Zs(this);
  },
  nullish() {
    return ji(Zs(this));
  },
  nonoptional(e) {
    return ec(this, e);
  },
  array() {
    return T(this);
  },
  or(e) {
    return $e([ this, e ]);
  },
  and(e) {
    return Zfe(this, e);
  },
  transform(e) {
    return ws(this, Es(e));
  },
  default(e) {
    return Xi(this, e);
  },
  prefault(e) {
    return Qi(this, e);
  },
  catch(e) {
    return tc(this, e);
  },
  pipe(e) {
    return ws(this, e);
  },
  readonly() {
    return nc(this);
  },
  describe(e) {
    let t = this.clone();
    return dXe.add(t, {
      description: e
    }), t;
  },
  meta(...e) {
    if (e.length === 0) return dXe.get(this);
    let t = this.clone();
    return dXe.add(t, e[0]), t;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(e, ...t) {
    return t.length === 0 ? e(this) : e(this, ...t);
  },
  get "~standard"() {
    return uOo(this, "~standard", {
      ...Ee(this),
      jsonSchema: {
        input: W(this, "input"),
        output: W(this, "output")
      }
    });
  },
  set "~standard"(e) {
    PNt(this, "~standard", e);
  },
  parse: function e(t, r) {
    return ms(this, t, r, {
      callee: e
    });
  },
  parseAsync: async function e(t, r) {
    return await hs(this, t, r, {
      callee: e
    });
  },
  safeParse(e, t) {
    return LOr(this, e, t);
  },
  async safeParseAsync(e, t) {
    return _s(this, e, t);
  },
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(e) {
    PNt(this, "spa", e);
  },
  encode: function e(t, r) {
    return gs(this, t, r, {
      callee: e
    });
  },
  decode: function e(t, r) {
    return xs(this, t, r, {
      callee: e
    });
  },
  encodeAsync: async function e(t, r) {
    return await vs(this, t, r, {
      callee: e
    });
  },
  decodeAsync: async function e(t, r) {
    return await zs(this, t, r, {
      callee: e
    });
  },
  safeEncode(e, t) {
    return ys(this, e, t);
  },
  safeDecode(e, t) {
    return $s(this, e, t);
  },
  async safeEncodeAsync(e, t) {
    return bs(this, e, t);
  },
  async safeDecodeAsync(e, t) {
    return ks(this, e, t);
  },
  toJSONSchema(e) {
    return Xn(this, {})(e);
  },
  get description() {
    return dXe.get(this)?.description;
  },
  get _def() {
    return this._zod.def;
  }
}), Ps = ur("_ZodString", (e, t) => {
  le.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (n, s, i) => it(e, n, s, i);
  let r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null;
}, {
  regex(...e) {
    return this.check(Ke(...e));
  },
  includes(...e) {
    return this.check(Ye(...e));
  },
  startsWith(...e) {
    return this.check(qe(...e));
  },
  endsWith(...e) {
    return this.check(Xe(...e));
  },
  min(...e) {
    return this.check(R(...e));
  },
  max(...e) {
    return this.check(kan(...e));
  },
  length(...e) {
    return this.check(_e(...e));
  },
  nonempty(...e) {
    return this.check(R(1, ...e));
  },
  lowercase(e) {
    return this.check(We(e));
  },
  uppercase(e) {
    return this.check(Ge(e));
  },
  trim() {
    return this.check(Qe());
  },
  normalize(...e) {
    return this.check(He(...e));
  },
  toLowerCase() {
    return this.check(et());
  },
  toUpperCase() {
    return this.check(tt());
  },
  slugify() {
    return this.check(rt());
  }
}), Tan = ur("ZodString", (e, t) => {
  le.init(e, t), Ps.init(e, t);
}, {
  email(e) {
    return this.check(Me(Ss, e));
  },
  url(e) {
    return this.check(Be(Is, e));
  },
  jwt(e) {
    return this.check(On(Di, e));
  },
  emoji(e) {
    return this.check(gn(ki, e));
  },
  guid(e) {
    return this.check(dn(bi, e));
  },
  uuid(e) {
    return this.check(Je(H, e));
  },
  uuidv4(e) {
    return this.check(mn(H, e));
  },
  uuidv6(e) {
    return this.check(hn(H, e));
  },
  uuidv7(e) {
    return this.check(_n(H, e));
  },
  nanoid(e) {
    return this.check(xn(Zi, e));
  },
  cuid(e) {
    return this.check(vn(wi, e));
  },
  cuid2(e) {
    return this.check(zn(Pi, e));
  },
  ulid(e) {
    return this.check(yn(Si, e));
  },
  base64(e) {
    return this.check(Ve(Os, e));
  },
  base64url(e) {
    return this.check(Sn(Ci, e));
  },
  xid(e) {
    return this.check($n(Ii, e));
  },
  ksuid(e) {
    return this.check(bn(Oi, e));
  },
  ipv4(e) {
    return this.check(kn(Ti, e));
  },
  ipv6(e) {
    return this.check(Zn(Ai, e));
  },
  cidrv4(e) {
    return this.check(wn(Ei, e));
  },
  cidrv6(e) {
    return this.check(Pn(Ni, e));
  },
  e164(e) {
    return this.check(In(Ri, e));
  },
  datetime(e) {
    return this.check(HOr(nOo, e));
  },
  date(e) {
    return this.check(DOr(rOo, e));
  },
  time(e) {
    return this.check(Tn(yi, e));
  },
  duration(e) {
    return this.check(An($i, e));
  }
});

function o(e) {
  return fn(Tan, e);
}

var b = ur("ZodStringFormat", (e, t) => {
  z.init(e, t), Ps.init(e, t);
}), nOo = ur("ZodISODateTime", (e, t) => {
  go.init(e, t), b.init(e, t);
}), rOo = ur("ZodISODate", (e, t) => {
  xo.init(e, t), b.init(e, t);
}), yi = ur("ZodISOTime", (e, t) => {
  vo.init(e, t), b.init(e, t);
}), $i = ur("ZodISODuration", (e, t) => {
  zo.init(e, t), b.init(e, t);
}), Ss = ur("ZodEmail", (e, t) => {
  so.init(e, t), b.init(e, t);
});

function jNs(e) {
  return Me(Ss, e);
}

var bi = ur("ZodGUID", (e, t) => {
  oo.init(e, t), b.init(e, t);
});

var H = ur("ZodUUID", (e, t) => {
  no.init(e, t), b.init(e, t);
});

function uqn(e) {
  return Je(H, e);
}

var Is = ur("ZodURL", (e, t) => {
  uo.init(e, t), b.init(e, t);
});

function kNt(e) {
  return Be(Is, e);
}

var ki = ur("ZodEmoji", (e, t) => {
  ao.init(e, t), b.init(e, t);
});

var Zi = ur("ZodNanoID", (e, t) => {
  lo.init(e, t), b.init(e, t);
});

var wi = ur("ZodCUID", (e, t) => {
  po.init(e, t), b.init(e, t);
});

var Pi = ur("ZodCUID2", (e, t) => {
  fo.init(e, t), b.init(e, t);
});

var Si = ur("ZodULID", (e, t) => {
  mo.init(e, t), b.init(e, t);
});

var Ii = ur("ZodXID", (e, t) => {
  ho.init(e, t), b.init(e, t);
});

var Oi = ur("ZodKSUID", (e, t) => {
  _o.init(e, t), b.init(e, t);
});

var Ti = ur("ZodIPv4", (e, t) => {
  yo.init(e, t), b.init(e, t);
});

var Ai = ur("ZodIPv6", (e, t) => {
  bo.init(e, t), b.init(e, t);
});

var Ei = ur("ZodCIDRv4", (e, t) => {
  ko.init(e, t), b.init(e, t);
});

var Ni = ur("ZodCIDRv6", (e, t) => {
  Zo.init(e, t), b.init(e, t);
});

var Os = ur("ZodBase64", (e, t) => {
  Po.init(e, t), b.init(e, t);
});

function WNs(e) {
  return Ve(Os, e);
}

var Ci = ur("ZodBase64URL", (e, t) => {
  So.init(e, t), b.init(e, t);
});

var Ri = ur("ZodE164", (e, t) => {
  Io.init(e, t), b.init(e, t);
});

var Di = ur("ZodJWT", (e, t) => {
  Oo.init(e, t), b.init(e, t);
});

var TNt = ur("ZodNumber", (e, t) => {
  Ne.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (n, s, i) => ct(e, n, s, i);
  let r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, 
  e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, 
  e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? .5), 
  e.isFinite = !0, e.format = r.format ?? null;
}, {
  gt(e, t) {
    return this.check(me(e, t));
  },
  gte(e, t) {
    return this.check(V(e, t));
  },
  min(e, t) {
    return this.check(V(e, t));
  },
  lt(e, t) {
    return this.check(de(e, t));
  },
  lte(e, t) {
    return this.check(B(e, t));
  },
  max(e, t) {
    return this.check(B(e, t));
  },
  int(e) {
    return this.check(Gp(e));
  },
  safe(e) {
    return this.check(Gp(e));
  },
  positive(e) {
    return this.check(me(0, e));
  },
  nonnegative(e) {
    return this.check(V(0, e));
  },
  negative(e) {
    return this.check(de(0, e));
  },
  nonpositive(e) {
    return this.check(B(0, e));
  },
  multipleOf(e, t) {
    return this.check(he(e, t));
  },
  step(e, t) {
    return this.check(he(e, t));
  },
  finite() {
    return this;
  }
});

function v(e) {
  return En(TNt, e);
}

var Ts = ur("ZodNumberFormat", (e, t) => {
  To.init(e, t), TNt.init(e, t);
});

function Gp(e) {
  return Nn(Ts, e);
}

function zNs(e) {
  return Cn(Ts, e);
}

var Aan = ur("ZodBoolean", (e, t) => {
  Ao.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => ut(e, r, n, s);
});

function M(e) {
  return Rn(Aan, e);
}

var Li = ur("ZodUndefined", (e, t) => {
  Eo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => lt(e, r, n, s);
});

function cI(e) {
  return Dn(Li, e);
}

var Fi = ur("ZodNull", (e, t) => {
  No.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => at(e, r, n, s);
});

function lf(e) {
  return jn(Fi, e);
}

var Ui = ur("ZodAny", (e, t) => {
  Co.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => ft(e, r, n, s);
});

function iX() {
  return Ln(Ui);
}

var Mi = ur("ZodUnknown", (e, t) => {
  Ro.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => dt(e, r, n, s);
});

function oe() {
  return Fn(Mi);
}

var Ji = ur("ZodNever", (e, t) => {
  Do.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => pt(e, r, n, s);
});

function ANt(e) {
  return Un(Ji, e);
}

var oOo = ur("ZodArray", (e, t) => {
  Q(), jo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => vt(e, r, n, s), 
  e.element = t.element;
}, {
  min(e, t) {
    return this.check(R(e, t));
  },
  nonempty(e) {
    return this.check(R(1, e));
  },
  max(e, t) {
    return this.check(kan(e, t));
  },
  length(e, t) {
    return this.check(_e(e, t));
  },
  unwrap() {
    return this.element;
  }
});

function T(e, t) {
  return Mn(oOo, e, t);
}

var uOe = ur("ZodObject", (e, t) => {
  Q(), Uo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => zt(e, r, n, s), 
  TVs(e, "shape", r => r._zod.def.shape, !1);
}, {
  keyof() {
    return U(Object.keys(this._zod.def.shape));
  },
  catchall(e) {
    return this.clone({
      ...this._zod.def,
      catchall: e
    });
  },
  passthrough() {
    return this.clone({
      ...this._zod.def,
      catchall: oe()
    });
  },
  loose() {
    return this.clone({
      ...this._zod.def,
      catchall: oe()
    });
  },
  strict() {
    return this.clone({
      ...this._zod.def,
      catchall: ANt()
    });
  },
  strip() {
    return this.clone({
      ...this._zod.def,
      catchall: void 0
    });
  },
  extend(e) {
    return wVs(this, e);
  },
  safeExtend(e) {
    return vVs(this, e);
  },
  merge(e) {
    return EVs(this, e);
  },
  pick(e) {
    return bVs(this, e);
  },
  omit(e) {
    return SVs(this, e);
  },
  partial(...e) {
    return ZNs(fqn, this, e[0]);
  },
  exactPartial(...e) {
    return ZNs(Ns, this, e[0], "exactPartial");
  },
  required(...e) {
    return kVs(Cs, this, e[0]);
  }
});

function u(e, t) {
  let r = {
    type: "object",
    shape: e ?? {},
    ...Hl(t)
  };
  return new uOe(r);
}

function De(e, t) {
  return new uOe({
    type: "object",
    shape: e,
    catchall: ANt(),
    ...Hl(t)
  });
}

function _t(e, t) {
  return new uOe({
    type: "object",
    shape: e,
    catchall: oe(),
    ...Hl(t)
  });
}

var As = ur("ZodUnion", (e, t) => {
  Ce.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => yt(e, r, n, s), 
  e.options = t.options;
});

function $e(e, t) {
  return new As({
    type: "union",
    options: e,
    ...Hl(t)
  });
}

var Bi = ur("ZodDiscriminatedUnion", (e, t) => {
  As.init(e, t), Mo.init(e, t);
});

function Kr(e, t, r) {
  return new Bi({
    type: "union",
    options: t,
    discriminator: e,
    ...Hl(r)
  });
}

var Vi = ur("ZodIntersection", (e, t) => {
  Jo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => $t(e, r, n, s);
});

function Zfe(e, t) {
  return new Vi({
    type: "intersection",
    left: e,
    right: t
  });
}

var Ki = ur("ZodTuple", (e, t) => {
  Q(), Bo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => bt(e, r, n, s);
}, {
  rest(e) {
    return this.clone({
      ...this._zod.def,
      rest: e
    });
  },
  partial() {
    let e = this._zod.def;
    if (e.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
    return this.clone({
      ...e,
      items: e.items.map(t => new fqn({
        type: "optional",
        innerType: t
      }))
    });
  }
});

function gA(e, t, r) {
  let n = t instanceof AE, s = n ? r : t;
  return new Ki({
    type: "tuple",
    items: e,
    rest: n ? t : null,
    ...Hl(s)
  });
}

var Ct = ur("ZodRecord", (e, t) => {
  Q(), Vo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => kt(e, r, n, s), 
  e.keyType = t.keyType, e.valueType = t.valueType;
});

function ue(e, t, r) {
  if (!t || !t._zod) return new Ct({
    type: "record",
    keyType: o(),
    valueType: e,
    ...Hl(t)
  });
  return new Ct({
    type: "record",
    keyType: e,
    valueType: t,
    ...Hl(r)
  });
}

function eme(e, t, r) {
  return new Ct({
    type: "record",
    keyType: e,
    valueType: t,
    ...Hl(r),
    partial: !0
  });
}

var pqn = ur("ZodEnum", (e, t) => {
  Ko.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (n, s, i) => mt(e, n, s, i), 
  e.enum = t.entries, e.options = Object.values(t.entries);
  let r = new Set(Object.keys(t.entries));
  e.extract = (n, s) => {
    let i = {};
    for (let c of n) if (r.has(c)) i[c] = t.entries[c]; else throw Error(`Key ${c} not found in enum`);
    return new pqn({
      ...t,
      checks: [],
      ...Hl(s),
      entries: i
    });
  }, e.exclude = (n, s) => {
    let i = {
      ...t.entries
    };
    for (let c of n) if (r.has(c)) delete i[c]; else throw Error(`Key ${c} not found in enum`);
    return new pqn({
      ...t,
      checks: [],
      ...Hl(s),
      entries: i
    });
  };
});

function U(e, t) {
  let r = Array.isArray(e) ? Object.fromEntries(e.map(n => [ n, n ])) : e;
  return new pqn({
    type: "enum",
    entries: r,
    ...Hl(t)
  });
}

var sOo = ur("ZodLiteral", (e, t) => {
  Wo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => ht(e, r, n, s), 
  e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});

function A(e, t) {
  return new sOo({
    type: "literal",
    values: Array.isArray(e) ? e : [ e ],
    ...Hl(t)
  });
}

var Wi = ur("ZodTransform", (e, t) => {
  Q(), Go.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => xt(e, r, n, s), 
  e._zod.parse = (r, n) => {
    if (n.direction === "backward") throw new yqn(e.constructor.name);
    r.addIssue = i => {
      if (typeof i === "string") r.issues.push(xNt(i, r.value, t)); else {
        let c = i;
        if (c.fatal) c.continue = !1;
        if (c.code ?? (c.code = "custom"), !("input" in c)) c.input = r.value;
        c.inst ?? (c.inst = e), r.issues.push(xNt(c));
      }
    };
    let s = t.transform(r.value, r);
    if (s instanceof Promise) return s.then(i => (r.value = i, r));
    return r.value = s, r;
  };
});

function Es(e) {
  return new Wi({
    type: "transform",
    transform: e
  });
}

var fqn = ur("ZodOptional", (e, t) => {
  Re.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => ge(e, r, n, s), 
  e.unwrap = () => e._zod.def.innerType;
});

function ji(e) {
  return new fqn({
    type: "optional",
    innerType: e
  });
}

var Ns = ur("ZodExactOptional", (e, t) => {
  Yo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => ge(e, r, n, s), 
  e.unwrap = () => e._zod.def.innerType;
});

function Gi(e) {
  return new Ns({
    type: "optional",
    innerType: e
  });
}

var Yi = ur("ZodNullable", (e, t) => {
  qo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => Zt(e, r, n, s), 
  e.unwrap = () => e._zod.def.innerType;
});

function Zs(e) {
  return new Yi({
    type: "nullable",
    innerType: e
  });
}

var qi = ur("ZodDefault", (e, t) => {
  Xo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => St(e, r, n, s), 
  e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});

function Xi(e, t) {
  return new qi({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t === "function" ? t() : lOo(t);
    }
  });
}

var Hi = ur("ZodPrefault", (e, t) => {
  Ho.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => It(e, r, n, s), 
  e.unwrap = () => e._zod.def.innerType;
});

function Qi(e, t) {
  return new Hi({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t === "function" ? t() : lOo(t);
    }
  });
}

var Cs = ur("ZodNonOptional", (e, t) => {
  Qo.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => wt(e, r, n, s), 
  e.unwrap = () => e._zod.def.innerType;
});

function ec(e, t) {
  return new Cs({
    type: "nonoptional",
    innerType: e,
    ...Hl(t)
  });
}

var NOr = ur("ZodCatch", (e, t) => {
  en.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ot(e, r, n, s), 
  e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});

function tc(e, t) {
  return new NOr({
    type: "catch",
    innerType: e,
    catchValue: typeof t === "function" ? t : n$s(t)
  });
}

var mqn = ur("ZodPipe", (e, t) => {
  je.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => Tt(e, r, n, s), 
  e.in = t.in, e.out = t.out;
});

function ws(e, t) {
  return new mqn({
    type: "pipe",
    in: e,
    out: t
  });
}

var rc = ur("ZodPreprocess", (e, t) => {
  mqn.init(e, t), tn.init(e, t);
}), oc = ur("ZodReadonly", (e, t) => {
  rn.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => At(e, r, n, s), 
  e.unwrap = () => e._zod.def.innerType;
});

function nc(e) {
  return new oc({
    type: "readonly",
    innerType: e
  });
}

var sc = ur("ZodLazy", (e, t) => {
  MOr.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => Et(e, r, n, s), 
  e.unwrap = () => e._zod.def.getter();
});

function Tk(e) {
  return new sc({
    type: "lazy",
    getter: e
  });
}

var Rs = ur("ZodCustom", (e, t) => {
  on.init(e, t), CE.init(e, t), e._zod.processJSONSchema = (r, n, s) => gt(e, r, n, s);
});

function Wc(e, t) {
  return Jn(Rs, e ?? (() => !0), t);
}

function ic(e, t = {}) {
  return Bn(Rs, e, t);
}

function cc(e, t) {
  return Vn(e, t);
}

function Sa(e, t) {
  return new rc({
    type: "pipe",
    in: Es(e),
    out: t
  });
}

export { cqn, AE, MOr, dXe, $Ns, FNs, HOr, DOr, UNs, BNs, kan, mA, cXe, ex, LOr, CE, Tan, o, nOo, rOo, jNs, uqn, kNt, WNs, TNt, v, Gp, zNs, Aan, M, cI, lf, iX, oe, ANt, oOo, T, uOe, u, De, _t, $e, Kr, Zfe, gA, ue, eme, pqn, U, sOo, A, fqn, ji, NOr, mqn, Tk, Wc, Sa };
