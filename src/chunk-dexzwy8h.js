// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var g;

(function(e) {
  e.assertEqual = s => {};
  function t(s) {}
  e.assertIs = t;
  function r(s) {
    throw Error();
  }
  e.assertNever = r, e.arrayToEnum = s => {
    let i = {};
    for (let n of s) i[n] = n;
    return i;
  }, e.getValidEnumValues = s => {
    let i = e.objectKeys(s).filter(c => typeof s[s[c]] !== "number"), n = {};
    for (let c of i) n[c] = s[c];
    return e.objectValues(n);
  }, e.objectValues = s => e.objectKeys(s).map(function(i) {
    return s[i];
  }), e.objectKeys = typeof Object.keys === "function" ? s => Object.keys(s) : s => {
    let i = [];
    for (let n in s) if (Object.prototype.hasOwnProperty.call(s, n)) i.push(n);
    return i;
  }, e.find = (s, i) => {
    for (let n of s) if (i(n)) return n;
    return;
  }, e.isInteger = typeof Number.isInteger === "function" ? s => Number.isInteger(s) : s => typeof s === "number" && Number.isFinite(s) && Math.floor(s) === s;
  function a(s, i = " | ") {
    return s.map(n => typeof n === "string" ? `'${n}'` : n).join(i);
  }
  e.joinValues = a, e.jsonStringifyReplacer = (s, i) => {
    if (typeof i === "bigint") return i.toString();
    return i;
  };
})(g || (g = {}));

var be;

(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
  });
})(be || (be = {}));

var d = g.arrayToEnum([ "string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set" ]), O = e => {
  switch (typeof e) {
   case "undefined":
    return d.undefined;

   case "string":
    return d.string;

   case "number":
    return Number.isNaN(e) ? d.nan : d.number;

   case "boolean":
    return d.boolean;

   case "function":
    return d.function;

   case "bigint":
    return d.bigint;

   case "symbol":
    return d.symbol;

   case "object":
    if (Array.isArray(e)) return d.array;
    if (e === null) return d.null;
    if (e.then && typeof e.then === "function" && e.catch && typeof e.catch === "function") return d.promise;
    if (typeof Map < "u" && e instanceof Map) return d.map;
    if (typeof Set < "u" && e instanceof Set) return d.set;
    if (typeof Date < "u" && e instanceof Date) return d.date;
    return d.object;

   default:
    return d.unknown;
  }
};

var Zn = g.arrayToEnum([ "invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite" ]);

class k extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super();
    this.issues = [], this.addIssue = r => {
      this.issues = [ ...this.issues, r ];
    }, this.addIssues = (r = []) => {
      this.issues = [ ...this.issues, ...r ];
    };
    let t = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, t); else this.__proto__ = t;
    this.name = "ZodError", this.issues = e;
  }
  format(e) {
    let t = e || function(s) {
      return s.message;
    }, r = {
      _errors: []
    }, a = s => {
      for (let i of s.issues) if (i.code === "invalid_union") i.unionErrors.map(a); else if (i.code === "invalid_return_type") a(i.returnTypeError); else if (i.code === "invalid_arguments") a(i.argumentsError); else if (i.path.length === 0) r._errors.push(t(i)); else {
        let n = r, c = 0;
        while (c < i.path.length) {
          let o = i.path[c], p = c === i.path.length - 1;
          if (o === "_errors") {
            if (p) n._errors.push(t(i));
            c++;
            continue;
          }
          if (!Object.prototype.hasOwnProperty.call(n, o)) if (o === "__proto__") Object.defineProperty(n, o, {
            value: {
              _errors: []
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          }); else n[o] = {
            _errors: []
          };
          if (n = n[o], p) n._errors.push(t(i));
          c++;
        }
      }
    };
    return a(this), r;
  }
  static assert(e) {
    if (!(e instanceof k)) throw Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, g.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = t => t.message) {
    let t = Object.create(null), r = [];
    for (let a of this.issues) if (a.path.length > 0) {
      let s = a.path[0];
      t[s] = t[s] || [], t[s].push(e(a));
    } else r.push(e(a));
    return {
      formErrors: r,
      fieldErrors: t
    };
  }
  get formErrors() {
    return this.flatten();
  }
}

k.create = e => new k(e);

var Oe = (e, t) => {
  let r;
  switch (e.code) {
   case Zn.invalid_type:
    if (e.received === d.undefined) r = "Required"; else r = `Expected ${e.expected}, received ${e.received}`;
    break;

   case Zn.invalid_literal:
    r = `Invalid literal value, expected ${JSON.stringify(e.expected, g.jsonStringifyReplacer)}`;
    break;

   case Zn.unrecognized_keys:
    r = `Unrecognized key(s) in object: ${g.joinValues(e.keys, ", ")}`;
    break;

   case Zn.invalid_union:
    r = "Invalid input";
    break;

   case Zn.invalid_union_discriminator:
    r = `Invalid discriminator value. Expected ${g.joinValues(e.options)}`;
    break;

   case Zn.invalid_enum_value:
    r = `Invalid enum value. Expected ${g.joinValues(e.options)}, received '${e.received}'`;
    break;

   case Zn.invalid_arguments:
    r = "Invalid function arguments";
    break;

   case Zn.invalid_return_type:
    r = "Invalid function return type";
    break;

   case Zn.invalid_date:
    r = "Invalid date";
    break;

   case Zn.invalid_string:
    if (typeof e.validation === "object") if ("includes" in e.validation) {
      if (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position === "number") r = `${r} at one or more positions greater than or equal to ${e.validation.position}`;
    } else if ("startsWith" in e.validation) r = `Invalid input: must start with "${e.validation.startsWith}"`; else if ("endsWith" in e.validation) r = `Invalid input: must end with "${e.validation.endsWith}"`; else g.assertNever(e.validation); else if (e.validation !== "regex") r = `Invalid ${e.validation}`; else r = "Invalid";
    break;

   case Zn.too_small:
    if (e.type === "array") r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`; else if (e.type === "string") r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`; else if (e.type === "number") r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`; else if (e.type === "bigint") r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`; else if (e.type === "date") r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`; else r = "Invalid input";
    break;

   case Zn.too_big:
    if (e.type === "array") r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`; else if (e.type === "string") r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`; else if (e.type === "number") r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`; else if (e.type === "bigint") r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`; else if (e.type === "date") r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`; else r = "Invalid input";
    break;

   case Zn.custom:
    r = "Invalid input";
    break;

   case Zn.invalid_intersection_types:
    r = "Intersection results could not be merged";
    break;

   case Zn.not_multiple_of:
    r = `Number must be a multiple of ${e.multipleOf}`;
    break;

   case Zn.not_finite:
    r = "Number must be finite";
    break;

   default:
    r = t.defaultError, g.assertNever(e);
  }
  return {
    message: r
  };
}, N = Oe;

var Re = N;

function J() {
  return Re;
}

var ie = e => {
  let {data: t, path: r, errorMaps: a, issueData: s} = e, i = [ ...r, ...s.path || [] ], n = {
    ...s,
    path: i
  };
  if (s.message !== void 0) return {
    ...s,
    path: i,
    message: s.message
  };
  let c = "", o = a.filter(p => !!p).slice().reverse();
  for (let p of o) c = p(n, {
    data: t,
    defaultError: c
  }).message;
  return {
    ...s,
    path: i,
    message: c
  };
};

function u(e, t) {
  let r = J(), a = ie({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [ e.common.contextualErrorMap, e.schemaErrorMap, r, r === N ? void 0 : N ].filter(s => !!s)
  });
  e.common.issues.push(a);
}

class v {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(e, t) {
    let r = [];
    for (let a of t) {
      if (a.status === "aborted") return f;
      if (a.status === "dirty") e.dirty();
      r.push(a.value);
    }
    return {
      status: e.value,
      value: r
    };
  }
  static async mergeObjectAsync(e, t) {
    let r = [];
    for (let a of t) {
      let s = await a.key, i = await a.value;
      r.push({
        key: s,
        value: i
      });
    }
    return v.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    let r = {};
    for (let a of t) {
      let {key: s, value: i} = a;
      if (s.status === "aborted") return f;
      if (i.status === "aborted") return f;
      if (s.status === "dirty") e.dirty();
      if (i.status === "dirty") e.dirty();
      if (s.value !== "__proto__" && (typeof i.value < "u" || a.alwaysSet)) r[s.value] = i.value;
    }
    return {
      status: e.value,
      value: r
    };
  }
}

var f = Object.freeze({
  status: "aborted"
}), L = e => ({
  status: "dirty",
  value: e
}), x = e => ({
  status: "valid",
  value: e
}), pe = e => e.status === "aborted", _e = e => e.status === "dirty", M = e => e.status === "valid", Y = e => typeof Promise < "u" && e instanceof Promise;

var l;

(function(e) {
  e.errToObj = t => typeof t === "string" ? {
    message: t
  } : t || {}, e.toString = t => typeof t === "string" ? t : t?.message;
})(l || (l = {}));

class w {
  constructor(e, t, r, a) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = a;
  }
  get path() {
    if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key); else this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
}

var we = (e, t) => {
  if (M(t)) return {
    success: !0,
    data: t.value
  }; else {
    if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let r = new k(e.common.issues);
        return this._error = r, this._error;
      }
    };
  }
};

function m(e) {
  if (!e) return {};
  let {errorMap: t, invalid_type_error: r, required_error: a, description: s} = e;
  if (t && (r || a)) throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (t) return {
    errorMap: t,
    description: s
  };
  return {
    errorMap: (n, c) => {
      let {message: o} = e;
      if (n.code === "invalid_enum_value") return {
        message: o ?? c.defaultError
      };
      if (typeof c.data > "u") return {
        message: o ?? a ?? c.defaultError
      };
      if (n.code !== "invalid_type") return {
        message: c.defaultError
      };
      return {
        message: o ?? r ?? c.defaultError
      };
    },
    description: s
  };
}

class _ {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return O(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: O(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new v,
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: O(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    let t = this._parse(e);
    if (Y(t)) throw Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    let t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    let r = this.safeParse(e, t);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(e, t) {
    let r = {
      common: {
        issues: [],
        async: t?.async ?? !1,
        contextualErrorMap: t?.errorMap
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: O(e)
    }, a = this._parseSync({
      data: e,
      path: r.path,
      parent: r
    });
    return we(r, a);
  }
  "~validate"(e) {
    let t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: O(e)
    };
    if (!this["~standard"].async) try {
      let r = this._parseSync({
        data: e,
        path: [],
        parent: t
      });
      return M(r) ? {
        value: r.value
      } : {
        issues: t.common.issues
      };
    } catch (r) {
      if (r?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = !0;
      t.common = {
        issues: [],
        async: !0
      };
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: t
    }).then(r => M(r) ? {
      value: r.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    let r = await this.safeParseAsync(e, t);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(e, t) {
    let r = {
      common: {
        issues: [],
        contextualErrorMap: t?.errorMap,
        async: !0
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: O(e)
    }, a = this._parse({
      data: e,
      path: r.path,
      parent: r
    }), s = await (Y(a) ? a : Promise.resolve(a));
    return we(r, s);
  }
  refine(e, t) {
    let r = a => {
      if (typeof t === "string" || typeof t > "u") return {
        message: t
      }; else if (typeof t === "function") return t(a); else return t;
    };
    return this._refinement((a, s) => {
      let i = e(a), n = () => s.addIssue({
        code: Zn.custom,
        ...r(a)
      });
      if (typeof Promise < "u" && i instanceof Promise) return i.then(c => {
        if (!c) return n(), !1; else return !0;
      });
      if (!i) return n(), !1; else return !0;
    });
  }
  refinement(e, t) {
    return this._refinement((r, a) => {
      if (!e(r)) return a.addIssue(typeof t === "function" ? t(r, a) : t), !1; else return !0;
    });
  }
  _refinement(e) {
    return new A({
      schema: this,
      typeName: h.ZodEffects,
      effect: {
        type: "refinement",
        refinement: e
      }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), 
    this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), 
    this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), 
    this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), 
    this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), 
    this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), 
    this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), 
    this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), 
    this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), 
    this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), 
    this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: t => this["~validate"](t)
    };
  }
  optional() {
    return S.create(this, this._def);
  }
  nullable() {
    return E.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return C.create(this);
  }
  promise() {
    return q.create(this, this._def);
  }
  or(e) {
    return K.create([ this, e ], this._def);
  }
  and(e) {
    return Z.create(this, e, this._def);
  }
  transform(e) {
    return new A({
      ...m(this._def),
      schema: this,
      typeName: h.ZodEffects,
      effect: {
        type: "transform",
        transform: e
      }
    });
  }
  default(e) {
    let t = typeof e === "function" ? e : () => e;
    return new se({
      ...m(this._def),
      innerType: this,
      defaultValue: t,
      typeName: h.ZodDefault
    });
  }
  brand() {
    return new xe({
      typeName: h.ZodBranded,
      type: this,
      ...m(this._def)
    });
  }
  catch(e) {
    let t = typeof e === "function" ? e : () => e;
    return new ae({
      ...m(this._def),
      innerType: this,
      catchValue: t,
      typeName: h.ZodCatch
    });
  }
  describe(e) {
    return new this.constructor({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return fe.create(this, e);
  }
  readonly() {
    return ne.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}

var je = /^c[^\s-]{8,}$/i, Ie = /^[0-9a-z]+$/, Ne = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Ee = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, $e = /^[a-z0-9_-]{21}$/i, Me = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Ve = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, De = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ze = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", ge, Pe = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Le = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Fe = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, We = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Be = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ue = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ce = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", qe = new RegExp(`^${Ce}$`);

function Se(e) {
  let t = "[0-5]\\d";
  if (e.precision) t = `${t}\\.\\d{${e.precision}}`; else if (e.precision == null) t = `${t}(\\.\\d+)?`;
  let r = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
}

function Je(e) {
  return new RegExp(`^${Se(e)}$`);
}

function Ye(e) {
  let t = `${Ce}T${Se(e)}`, r = [];
  if (r.push(e.local ? "Z?" : "Z"), e.offset) r.push("([+-]\\d{2}:?\\d{2})");
  return t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}

function He(e, t) {
  if ((t === "v4" || !t) && Pe.test(e)) return !0;
  if ((t === "v6" || !t) && Fe.test(e)) return !0;
  return !1;
}

function Ge(e, t) {
  if (!Me.test(e)) return !1;
  try {
    let [r] = e.split(".");
    if (!r) return !1;
    let a = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), s = JSON.parse(atob(a));
    if (typeof s !== "object" || s === null) return !1;
    if ("typ" in s && s?.typ !== "JWT") return !1;
    if (!s.alg) return !1;
    if (t && s.alg !== t) return !1;
    return !0;
  } catch {
    return !1;
  }
}

function Qe(e, t) {
  if ((t === "v4" || !t) && Le.test(e)) return !0;
  if ((t === "v6" || !t) && We.test(e)) return !0;
  return !1;
}

class T extends _ {
  _parse(e) {
    if (this._def.coerce) e.data = String(e.data);
    if (this._getType(e) !== d.string) {
      let s = this._getOrReturnCtx(e);
      return u(s, {
        code: Zn.invalid_type,
        expected: d.string,
        received: s.parsedType
      }), f;
    }
    let r = new v, a = void 0;
    for (let s of this._def.checks) if (s.kind === "min") {
      if (e.data.length < s.value) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.too_small,
        minimum: s.value,
        type: "string",
        inclusive: !0,
        exact: !1,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "max") {
      if (e.data.length > s.value) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.too_big,
        maximum: s.value,
        type: "string",
        inclusive: !0,
        exact: !1,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "length") {
      let i = e.data.length > s.value, n = e.data.length < s.value;
      if (i || n) {
        if (a = this._getOrReturnCtx(e, a), i) u(a, {
          code: Zn.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }); else if (n) u(a, {
          code: Zn.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        });
        r.dirty();
      }
    } else if (s.kind === "email") {
      if (!De.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "email",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "emoji") {
      if (!ge) ge = new RegExp(ze, "u");
      if (!ge.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "emoji",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "uuid") {
      if (!Ee.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "uuid",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "nanoid") {
      if (!$e.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "nanoid",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "cuid") {
      if (!je.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "cuid",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "cuid2") {
      if (!Ie.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "cuid2",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "ulid") {
      if (!Ne.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "ulid",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "url") try {
      new URL(e.data);
    } catch {
      a = this._getOrReturnCtx(e, a), u(a, {
        validation: "url",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "regex") {
      if (s.regex.lastIndex = 0, !s.regex.test(e.data)) a = this._getOrReturnCtx(e, a), 
      u(a, {
        validation: "regex",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "trim") e.data = e.data.trim(); else if (s.kind === "includes") {
      if (!e.data.includes(s.value, s.position)) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.invalid_string,
        validation: {
          includes: s.value,
          position: s.position
        },
        message: s.message
      }), r.dirty();
    } else if (s.kind === "toLowerCase") e.data = e.data.toLowerCase(); else if (s.kind === "toUpperCase") e.data = e.data.toUpperCase(); else if (s.kind === "startsWith") {
      if (!e.data.startsWith(s.value)) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.invalid_string,
        validation: {
          startsWith: s.value
        },
        message: s.message
      }), r.dirty();
    } else if (s.kind === "endsWith") {
      if (!e.data.endsWith(s.value)) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.invalid_string,
        validation: {
          endsWith: s.value
        },
        message: s.message
      }), r.dirty();
    } else if (s.kind === "datetime") {
      if (!Ye(s).test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.invalid_string,
        validation: "datetime",
        message: s.message
      }), r.dirty();
    } else if (s.kind === "date") {
      if (!qe.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.invalid_string,
        validation: "date",
        message: s.message
      }), r.dirty();
    } else if (s.kind === "time") {
      if (!Je(s).test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.invalid_string,
        validation: "time",
        message: s.message
      }), r.dirty();
    } else if (s.kind === "duration") {
      if (!Ve.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "duration",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "ip") {
      if (!He(e.data, s.version)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "ip",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "jwt") {
      if (!Ge(e.data, s.alg)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "jwt",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "cidr") {
      if (!Qe(e.data, s.version)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "cidr",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "base64") {
      if (!Be.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "base64",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "base64url") {
      if (!Ue.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "base64url",
        code: Zn.invalid_string,
        message: s.message
      }), r.dirty();
    } else g.assertNever(s);
    return {
      status: r.value,
      value: e.data
    };
  }
  _regex(e, t, r) {
    return this.refinement(a => e.test(a), {
      validation: t,
      code: Zn.invalid_string,
      ...l.errToObj(r)
    });
  }
  _addCheck(e) {
    return new T({
      ...this._def,
      checks: [ ...this._def.checks, e ]
    });
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...l.errToObj(e)
    });
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...l.errToObj(e)
    });
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...l.errToObj(e)
    });
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...l.errToObj(e)
    });
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...l.errToObj(e)
    });
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...l.errToObj(e)
    });
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...l.errToObj(e)
    });
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...l.errToObj(e)
    });
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...l.errToObj(e)
    });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...l.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ...l.errToObj(e)
    });
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ...l.errToObj(e)
    });
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ...l.errToObj(e)
    });
  }
  datetime(e) {
    if (typeof e === "string") return this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    });
    return this._addCheck({
      kind: "datetime",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      offset: e?.offset ?? !1,
      local: e?.local ?? !1,
      ...l.errToObj(e?.message)
    });
  }
  date(e) {
    return this._addCheck({
      kind: "date",
      message: e
    });
  }
  time(e) {
    if (typeof e === "string") return this._addCheck({
      kind: "time",
      precision: null,
      message: e
    });
    return this._addCheck({
      kind: "time",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      ...l.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...l.errToObj(e)
    });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...l.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...l.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...l.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...l.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...l.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...l.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...l.errToObj(t)
    });
  }
  nonempty(e) {
    return this.min(1, l.errToObj(e));
  }
  trim() {
    return new T({
      ...this._def,
      checks: [ ...this._def.checks, {
        kind: "trim"
      } ]
    });
  }
  toLowerCase() {
    return new T({
      ...this._def,
      checks: [ ...this._def.checks, {
        kind: "toLowerCase"
      } ]
    });
  }
  toUpperCase() {
    return new T({
      ...this._def,
      checks: [ ...this._def.checks, {
        kind: "toUpperCase"
      } ]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(e => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(e => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(e => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(e => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(e => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(e => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(e => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(e => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(e => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(e => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(e => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(e => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(e => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find(e => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(e => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(e => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "min") {
      if (e === null || t.value > e) e = t.value;
    }
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "max") {
      if (e === null || t.value < e) e = t.value;
    }
    return e;
  }
}

T.create = e => new T({
  checks: [],
  typeName: h.ZodString,
  coerce: e?.coerce ?? !1,
  ...m(e)
});

function Xe(e, t) {
  let r = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, s = r > a ? r : a, i = Number.parseInt(e.toFixed(s).replace(".", "")), n = Number.parseInt(t.toFixed(s).replace(".", ""));
  return i % n / 10 ** s;
}

class D extends _ {
  constructor() {
    super(...arguments);
    this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce) e.data = Number(e.data);
    if (this._getType(e) !== d.number) {
      let s = this._getOrReturnCtx(e);
      return u(s, {
        code: Zn.invalid_type,
        expected: d.number,
        received: s.parsedType
      }), f;
    }
    let r = void 0, a = new v;
    for (let s of this._def.checks) if (s.kind === "int") {
      if (!g.isInteger(e.data)) r = this._getOrReturnCtx(e, r), u(r, {
        code: Zn.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty();
    } else if (s.kind === "min") {
      if (s.inclusive ? e.data < s.value : e.data <= s.value) r = this._getOrReturnCtx(e, r), 
      u(r, {
        code: Zn.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "max") {
      if (s.inclusive ? e.data > s.value : e.data >= s.value) r = this._getOrReturnCtx(e, r), 
      u(r, {
        code: Zn.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "multipleOf") {
      if (Xe(e.data, s.value) !== 0) r = this._getOrReturnCtx(e, r), u(r, {
        code: Zn.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "finite") {
      if (!Number.isFinite(e.data)) r = this._getOrReturnCtx(e, r), u(r, {
        code: Zn.not_finite,
        message: s.message
      }), a.dirty();
    } else g.assertNever(s);
    return {
      status: a.value,
      value: e.data
    };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, l.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, l.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, l.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, l.toString(t));
  }
  setLimit(e, t, r, a) {
    return new D({
      ...this._def,
      checks: [ ...this._def.checks, {
        kind: e,
        value: t,
        inclusive: r,
        message: l.toString(a)
      } ]
    });
  }
  _addCheck(e) {
    return new D({
      ...this._def,
      checks: [ ...this._def.checks, e ]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: l.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: l.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: l.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: l.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: l.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: l.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: l.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: l.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: l.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "min") {
      if (e === null || t.value > e) e = t.value;
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "max") {
      if (e === null || t.value < e) e = t.value;
    }
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && g.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (let r of this._def.checks) if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0; else if (r.kind === "min") {
      if (t === null || r.value > t) t = r.value;
    } else if (r.kind === "max") {
      if (e === null || r.value < e) e = r.value;
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}

D.create = e => new D({
  checks: [],
  typeName: h.ZodNumber,
  coerce: e?.coerce || !1,
  ...m(e)
});

class z extends _ {
  constructor() {
    super(...arguments);
    this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) try {
      e.data = BigInt(e.data);
    } catch {
      return this._getInvalidInput(e);
    }
    if (this._getType(e) !== d.bigint) return this._getInvalidInput(e);
    let r = void 0, a = new v;
    for (let s of this._def.checks) if (s.kind === "min") {
      if (s.inclusive ? e.data < s.value : e.data <= s.value) r = this._getOrReturnCtx(e, r), 
      u(r, {
        code: Zn.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "max") {
      if (s.inclusive ? e.data > s.value : e.data >= s.value) r = this._getOrReturnCtx(e, r), 
      u(r, {
        code: Zn.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "multipleOf") {
      if (e.data % s.value !== BigInt(0)) r = this._getOrReturnCtx(e, r), u(r, {
        code: Zn.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty();
    } else g.assertNever(s);
    return {
      status: a.value,
      value: e.data
    };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return u(t, {
      code: Zn.invalid_type,
      expected: d.bigint,
      received: t.parsedType
    }), f;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, l.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, l.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, l.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, l.toString(t));
  }
  setLimit(e, t, r, a) {
    return new z({
      ...this._def,
      checks: [ ...this._def.checks, {
        kind: e,
        value: t,
        inclusive: r,
        message: l.toString(a)
      } ]
    });
  }
  _addCheck(e) {
    return new z({
      ...this._def,
      checks: [ ...this._def.checks, e ]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: l.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: l.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: l.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: l.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: l.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "min") {
      if (e === null || t.value > e) e = t.value;
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "max") {
      if (e === null || t.value < e) e = t.value;
    }
    return e;
  }
}

z.create = e => new z({
  checks: [],
  typeName: h.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...m(e)
});

class G extends _ {
  _parse(e) {
    if (this._def.coerce) e.data = Boolean(e.data);
    if (this._getType(e) !== d.boolean) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: Zn.invalid_type,
        expected: d.boolean,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}

G.create = e => new G({
  typeName: h.ZodBoolean,
  coerce: e?.coerce || !1,
  ...m(e)
});

class W extends _ {
  _parse(e) {
    if (this._def.coerce) e.data = new Date(e.data);
    if (this._getType(e) !== d.date) {
      let s = this._getOrReturnCtx(e);
      return u(s, {
        code: Zn.invalid_type,
        expected: d.date,
        received: s.parsedType
      }), f;
    }
    if (Number.isNaN(e.data.getTime())) {
      let s = this._getOrReturnCtx(e);
      return u(s, {
        code: Zn.invalid_date
      }), f;
    }
    let r = new v, a = void 0;
    for (let s of this._def.checks) if (s.kind === "min") {
      if (e.data.getTime() < s.value) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty();
    } else if (s.kind === "max") {
      if (e.data.getTime() > s.value) a = this._getOrReturnCtx(e, a), u(a, {
        code: Zn.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty();
    } else g.assertNever(s);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new W({
      ...this._def,
      checks: [ ...this._def.checks, e ]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: l.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: l.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "min") {
      if (e === null || t.value > e) e = t.value;
    }
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "max") {
      if (e === null || t.value < e) e = t.value;
    }
    return e != null ? new Date(e) : null;
  }
}

W.create = e => new W({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: h.ZodDate,
  ...m(e)
});

class ce extends _ {
  _parse(e) {
    if (this._getType(e) !== d.symbol) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: Zn.invalid_type,
        expected: d.symbol,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}

ce.create = e => new ce({
  typeName: h.ZodSymbol,
  ...m(e)
});

class Q extends _ {
  _parse(e) {
    if (this._getType(e) !== d.undefined) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: Zn.invalid_type,
        expected: d.undefined,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}

Q.create = e => new Q({
  typeName: h.ZodUndefined,
  ...m(e)
});

class X extends _ {
  _parse(e) {
    if (this._getType(e) !== d.null) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: Zn.invalid_type,
        expected: d.null,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}

X.create = e => new X({
  typeName: h.ZodNull,
  ...m(e)
});

class B extends _ {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse(e) {
    return x(e.data);
  }
}

B.create = e => new B({
  typeName: h.ZodAny,
  ...m(e)
});

class V extends _ {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse(e) {
    return x(e.data);
  }
}

V.create = e => new V({
  typeName: h.ZodUnknown,
  ...m(e)
});

class j extends _ {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return u(t, {
      code: Zn.invalid_type,
      expected: d.never,
      received: t.parsedType
    }), f;
  }
}

j.create = e => new j({
  typeName: h.ZodNever,
  ...m(e)
});

class oe extends _ {
  _parse(e) {
    if (this._getType(e) !== d.undefined) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: Zn.invalid_type,
        expected: d.void,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}

oe.create = e => new oe({
  typeName: h.ZodVoid,
  ...m(e)
});

class C extends _ {
  _parse(e) {
    let {ctx: t, status: r} = this._processInputParams(e), a = this._def;
    if (t.parsedType !== d.array) return u(t, {
      code: Zn.invalid_type,
      expected: d.array,
      received: t.parsedType
    }), f;
    if (a.exactLength !== null) {
      let i = t.data.length > a.exactLength.value, n = t.data.length < a.exactLength.value;
      if (i || n) u(t, {
        code: i ? Zn.too_big : Zn.too_small,
        minimum: n ? a.exactLength.value : void 0,
        maximum: i ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), r.dirty();
    }
    if (a.minLength !== null) {
      if (t.data.length < a.minLength.value) u(t, {
        code: Zn.too_small,
        minimum: a.minLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: a.minLength.message
      }), r.dirty();
    }
    if (a.maxLength !== null) {
      if (t.data.length > a.maxLength.value) u(t, {
        code: Zn.too_big,
        maximum: a.maxLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: a.maxLength.message
      }), r.dirty();
    }
    if (t.common.async) return Promise.all([ ...t.data ].map((i, n) => a.type._parseAsync(new w(t, i, t.path, n)))).then(i => v.mergeArray(r, i));
    let s = [ ...t.data ].map((i, n) => a.type._parseSync(new w(t, i, t.path, n)));
    return v.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new C({
      ...this._def,
      minLength: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  max(e, t) {
    return new C({
      ...this._def,
      maxLength: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  length(e, t) {
    return new C({
      ...this._def,
      exactLength: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}

C.create = (e, t) => new C({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: h.ZodArray,
  ...m(t)
});

function F(e) {
  if (e instanceof y) {
    let t = {};
    for (let r in e.shape) {
      let a = e.shape[r];
      t[r] = S.create(F(a));
    }
    return new y({
      ...e._def,
      shape: () => t
    });
  } else if (e instanceof C) return new C({
    ...e._def,
    type: F(e.element)
  }); else if (e instanceof S) return S.create(F(e.unwrap())); else if (e instanceof E) return E.create(F(e.unwrap())); else if (e instanceof I) return I.create(e.items.map(t => F(t))); else return e;
}

class y extends _ {
  constructor() {
    super(...arguments);
    this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(), t = g.objectKeys(e);
    return this._cached = {
      shape: e,
      keys: t
    }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== d.object) {
      let o = this._getOrReturnCtx(e);
      return u(o, {
        code: Zn.invalid_type,
        expected: d.object,
        received: o.parsedType
      }), f;
    }
    let {status: r, ctx: a} = this._processInputParams(e), {shape: s, keys: i} = this._getCached(), n = [];
    if (!(this._def.catchall instanceof j && this._def.unknownKeys === "strip")) {
      for (let o in a.data) if (!i.includes(o)) n.push(o);
    }
    let c = [];
    for (let o of i) {
      let p = s[o], b = a.data[o];
      c.push({
        key: {
          status: "valid",
          value: o
        },
        value: p._parse(new w(a, b, a.path, o)),
        alwaysSet: o in a.data
      });
    }
    if (this._def.catchall instanceof j) {
      let o = this._def.unknownKeys;
      if (o === "passthrough") for (let p of n) c.push({
        key: {
          status: "valid",
          value: p
        },
        value: {
          status: "valid",
          value: a.data[p]
        }
      }); else if (o === "strict") {
        if (n.length > 0) u(a, {
          code: Zn.unrecognized_keys,
          keys: n
        }), r.dirty();
      } else if (o === "strip") ; else throw Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let o = this._def.catchall;
      for (let p of n) {
        let b = a.data[p];
        c.push({
          key: {
            status: "valid",
            value: p
          },
          value: o._parse(new w(a, b, a.path, p)),
          alwaysSet: p in a.data
        });
      }
    }
    if (a.common.async) return Promise.resolve().then(async () => {
      let o = [];
      for (let p of c) {
        let b = await p.key, ke = await p.value;
        o.push({
          key: b,
          value: ke,
          alwaysSet: p.alwaysSet
        });
      }
      return o;
    }).then(o => v.mergeObjectSync(r, o)); else return v.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return l.errToObj, new y({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, r) => {
          let a = this._def.errorMap?.(t, r).message ?? r.defaultError;
          if (t.code === "unrecognized_keys") return {
            message: l.errToObj(e).message ?? a
          };
          return {
            message: a
          };
        }
      } : {}
    });
  }
  strip() {
    return new y({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new y({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(e) {
    return new y({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  merge(e) {
    return new y({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: h.ZodObject
    });
  }
  setKey(e, t) {
    return this.augment({
      [e]: t
    });
  }
  catchall(e) {
    return new y({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    let t = {};
    for (let r of g.objectKeys(e)) if (e[r] && this.shape[r]) t[r] = this.shape[r];
    return new y({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    let t = {};
    for (let r of g.objectKeys(this.shape)) if (!e[r]) t[r] = this.shape[r];
    return new y({
      ...this._def,
      shape: () => t
    });
  }
  deepPartial() {
    return F(this);
  }
  partial(e) {
    let t = {};
    for (let r of g.objectKeys(this.shape)) {
      let a = this.shape[r];
      if (e && !e[r]) t[r] = a; else t[r] = a.optional();
    }
    return new y({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    let t = {};
    for (let r of g.objectKeys(this.shape)) if (e && !e[r]) t[r] = this.shape[r]; else {
      let s = this.shape[r];
      while (s instanceof S) s = s._def.innerType;
      t[r] = s;
    }
    return new y({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ae(g.objectKeys(this.shape));
  }
}

y.create = (e, t) => new y({
  shape: () => e,
  unknownKeys: "strip",
  catchall: j.create(),
  typeName: h.ZodObject,
  ...m(t)
});

y.strictCreate = (e, t) => new y({
  shape: () => e,
  unknownKeys: "strict",
  catchall: j.create(),
  typeName: h.ZodObject,
  ...m(t)
});

y.lazycreate = (e, t) => new y({
  shape: e,
  unknownKeys: "strip",
  catchall: j.create(),
  typeName: h.ZodObject,
  ...m(t)
});

class K extends _ {
  _parse(e) {
    let {ctx: t} = this._processInputParams(e), r = this._def.options;
    function a(s) {
      for (let n of s) if (n.result.status === "valid") return n.result;
      for (let n of s) if (n.result.status === "dirty") return t.common.issues.push(...n.ctx.common.issues), 
      n.result;
      let i = s.map(n => new k(n.ctx.common.issues));
      return u(t, {
        code: Zn.invalid_union,
        unionErrors: i
      }), f;
    }
    if (t.common.async) return Promise.all(r.map(async s => {
      let i = {
        ...t,
        common: {
          ...t.common,
          issues: []
        },
        parent: null
      };
      return {
        result: await s._parseAsync({
          data: t.data,
          path: t.path,
          parent: i
        }),
        ctx: i
      };
    })).then(a); else {
      let s = void 0, i = [];
      for (let c of r) {
        let o = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, p = c._parseSync({
          data: t.data,
          path: t.path,
          parent: o
        });
        if (p.status === "valid") return p; else if (p.status === "dirty" && !s) s = {
          result: p,
          ctx: o
        };
        if (o.common.issues.length) i.push(o.common.issues);
      }
      if (s) return t.common.issues.push(...s.ctx.common.issues), s.result;
      let n = i.map(c => new k(c));
      return u(t, {
        code: Zn.invalid_union,
        unionErrors: n
      }), f;
    }
  }
  get options() {
    return this._def.options;
  }
}

K.create = (e, t) => new K({
  options: e,
  typeName: h.ZodUnion,
  ...m(t)
});

var R = e => {
  if (e instanceof ee) return R(e.schema); else if (e instanceof A) return R(e.innerType()); else if (e instanceof te) return [ e.value ]; else if (e instanceof P) return e.options; else if (e instanceof re) return g.objectValues(e.enum); else if (e instanceof se) return R(e._def.innerType); else if (e instanceof Q) return [ void 0 ]; else if (e instanceof X) return [ null ]; else if (e instanceof S) return [ void 0, ...R(e.unwrap()) ]; else if (e instanceof E) return [ null, ...R(e.unwrap()) ]; else if (e instanceof xe) return R(e.unwrap()); else if (e instanceof ne) return R(e.unwrap()); else if (e instanceof ae) return R(e._def.innerType); else return [];
};

class ve extends _ {
  _parse(e) {
    let {ctx: t} = this._processInputParams(e);
    if (t.parsedType !== d.object) return u(t, {
      code: Zn.invalid_type,
      expected: d.object,
      received: t.parsedType
    }), f;
    let r = this.discriminator, a = t.data[r], s = this.optionsMap.get(a);
    if (!s) return u(t, {
      code: Zn.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [ r ]
    }), f;
    if (t.common.async) return s._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }); else return s._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    });
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, t, r) {
    let a = new Map;
    for (let s of t) {
      let i = R(s.shape[e]);
      if (!i.length) throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (let n of i) {
        if (a.has(n)) throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);
        a.set(n, s);
      }
    }
    return new ve({
      typeName: h.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: a,
      ...m(r)
    });
  }
}

function ye(e, t) {
  let r = O(e), a = O(t);
  if (e === t) return {
    valid: !0,
    data: e
  }; else if (r === d.object && a === d.object) {
    let s = g.objectKeys(t), i = g.objectKeys(e).filter(c => s.indexOf(c) !== -1), n = {
      ...e,
      ...t
    };
    if (Object.prototype.hasOwnProperty.call(n, "__proto__")) delete n.__proto__;
    for (let c of i) {
      if (c === "__proto__") continue;
      let o = ye(e[c], t[c]);
      if (!o.valid) return {
        valid: !1
      };
      n[c] = o.data;
    }
    return {
      valid: !0,
      data: n
    };
  } else if (r === d.array && a === d.array) {
    if (e.length !== t.length) return {
      valid: !1
    };
    let s = [];
    for (let i = 0; i < e.length; i++) {
      let n = e[i], c = t[i], o = ye(n, c);
      if (!o.valid) return {
        valid: !1
      };
      s.push(o.data);
    }
    return {
      valid: !0,
      data: s
    };
  } else if (r === d.date && a === d.date && +e === +t) return {
    valid: !0,
    data: e
  }; else return {
    valid: !1
  };
}

class Z extends _ {
  _parse(e) {
    let {status: t, ctx: r} = this._processInputParams(e), a = (s, i) => {
      if (pe(s) || pe(i)) return f;
      let n = ye(s.value, i.value);
      if (!n.valid) return u(r, {
        code: Zn.invalid_intersection_types
      }), f;
      if (_e(s) || _e(i)) t.dirty();
      return {
        status: t.value,
        value: n.data
      };
    };
    if (r.common.async) return Promise.all([ this._def.left._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) ]).then(([s, i]) => a(s, i)); else return a(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}

Z.create = (e, t, r) => new Z({
  left: e,
  right: t,
  typeName: h.ZodIntersection,
  ...m(r)
});

class I extends _ {
  _parse(e) {
    let {status: t, ctx: r} = this._processInputParams(e);
    if (r.parsedType !== d.array) return u(r, {
      code: Zn.invalid_type,
      expected: d.array,
      received: r.parsedType
    }), f;
    if (r.data.length < this._def.items.length) return u(r, {
      code: Zn.too_small,
      minimum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), f;
    if (!this._def.rest && r.data.length > this._def.items.length) u(r, {
      code: Zn.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty();
    let s = [ ...r.data ].map((i, n) => {
      let c = this._def.items[n] || this._def.rest;
      if (!c) return null;
      return c._parse(new w(r, i, r.path, n));
    }).filter(i => !!i);
    if (r.common.async) return Promise.all(s).then(i => v.mergeArray(t, i)); else return v.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new I({
      ...this._def,
      rest: e
    });
  }
}

I.create = (e, t) => {
  if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new I({
    items: e,
    typeName: h.ZodTuple,
    rest: null,
    ...m(t)
  });
};

class ue extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let {status: t, ctx: r} = this._processInputParams(e);
    if (r.parsedType !== d.object) return u(r, {
      code: Zn.invalid_type,
      expected: d.object,
      received: r.parsedType
    }), f;
    let a = [], s = this._def.keyType, i = this._def.valueType;
    for (let n in r.data) a.push({
      key: s._parse(new w(r, n, r.path, n)),
      value: i._parse(new w(r, r.data[n], r.path, n)),
      alwaysSet: n in r.data
    });
    if (r.common.async) return v.mergeObjectAsync(t, a); else return v.mergeObjectSync(t, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, r) {
    if (t instanceof _) return new ue({
      keyType: e,
      valueType: t,
      typeName: h.ZodRecord,
      ...m(r)
    });
    return new ue({
      keyType: T.create(),
      valueType: e,
      typeName: h.ZodRecord,
      ...m(t)
    });
  }
}

class de extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let {status: t, ctx: r} = this._processInputParams(e);
    if (r.parsedType !== d.map) return u(r, {
      code: Zn.invalid_type,
      expected: d.map,
      received: r.parsedType
    }), f;
    let a = this._def.keyType, s = this._def.valueType, i = [ ...r.data.entries() ].map(([n, c], o) => ({
      key: a._parse(new w(r, n, r.path, [ o, "key" ])),
      value: s._parse(new w(r, c, r.path, [ o, "value" ]))
    }));
    if (r.common.async) {
      let n = new Map;
      return Promise.resolve().then(async () => {
        for (let c of i) {
          let o = await c.key, p = await c.value;
          if (o.status === "aborted" || p.status === "aborted") return f;
          if (o.status === "dirty" || p.status === "dirty") t.dirty();
          n.set(o.value, p.value);
        }
        return {
          status: t.value,
          value: n
        };
      });
    } else {
      let n = new Map;
      for (let c of i) {
        let {key: o, value: p} = c;
        if (o.status === "aborted" || p.status === "aborted") return f;
        if (o.status === "dirty" || p.status === "dirty") t.dirty();
        n.set(o.value, p.value);
      }
      return {
        status: t.value,
        value: n
      };
    }
  }
}

de.create = (e, t, r) => new de({
  valueType: t,
  keyType: e,
  typeName: h.ZodMap,
  ...m(r)
});

class U extends _ {
  _parse(e) {
    let {status: t, ctx: r} = this._processInputParams(e);
    if (r.parsedType !== d.set) return u(r, {
      code: Zn.invalid_type,
      expected: d.set,
      received: r.parsedType
    }), f;
    let a = this._def;
    if (a.minSize !== null) {
      if (r.data.size < a.minSize.value) u(r, {
        code: Zn.too_small,
        minimum: a.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: a.minSize.message
      }), t.dirty();
    }
    if (a.maxSize !== null) {
      if (r.data.size > a.maxSize.value) u(r, {
        code: Zn.too_big,
        maximum: a.maxSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: a.maxSize.message
      }), t.dirty();
    }
    let s = this._def.valueType;
    function i(c) {
      let o = new Set;
      for (let p of c) {
        if (p.status === "aborted") return f;
        if (p.status === "dirty") t.dirty();
        o.add(p.value);
      }
      return {
        status: t.value,
        value: o
      };
    }
    let n = [ ...r.data.values() ].map((c, o) => s._parse(new w(r, c, r.path, o)));
    if (r.common.async) return Promise.all(n).then(c => i(c)); else return i(n);
  }
  min(e, t) {
    return new U({
      ...this._def,
      minSize: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  max(e, t) {
    return new U({
      ...this._def,
      maxSize: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}

U.create = (e, t) => new U({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: h.ZodSet,
  ...m(t)
});

class H extends _ {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(e) {
    let {ctx: t} = this._processInputParams(e);
    if (t.parsedType !== d.function) return u(t, {
      code: Zn.invalid_type,
      expected: d.function,
      received: t.parsedType
    }), f;
    function r(n, c) {
      return ie({
        data: n,
        path: t.path,
        errorMaps: [ t.common.contextualErrorMap, t.schemaErrorMap, J(), N ].filter(o => !!o),
        issueData: {
          code: Zn.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function a(n, c) {
      return ie({
        data: n,
        path: t.path,
        errorMaps: [ t.common.contextualErrorMap, t.schemaErrorMap, J(), N ].filter(o => !!o),
        issueData: {
          code: Zn.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    let s = {
      errorMap: t.common.contextualErrorMap
    }, i = t.data;
    if (this._def.returns instanceof q) {
      let n = this;
      return x(async function(...c) {
        let o = new k([]), p = await n._def.args.parseAsync(c, s).catch(he => {
          throw o.addIssue(r(c, he)), o;
        }), b = await Reflect.apply(i, this, p);
        return await n._def.returns._def.type.parseAsync(b, s).catch(he => {
          throw o.addIssue(a(b, he)), o;
        });
      });
    } else {
      let n = this;
      return x(function(...c) {
        let o = n._def.args.safeParse(c, s);
        if (!o.success) throw new k([ r(c, o.error) ]);
        let p = Reflect.apply(i, this, o.data), b = n._def.returns.safeParse(p, s);
        if (!b.success) throw new k([ a(p, b.error) ]);
        return b.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new H({
      ...this._def,
      args: I.create(e).rest(V.create())
    });
  }
  returns(e) {
    return new H({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, r) {
    return new H({
      args: e ? e : I.create([]).rest(V.create()),
      returns: t || V.create(),
      typeName: h.ZodFunction,
      ...m(r)
    });
  }
}

class ee extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    let {ctx: t} = this._processInputParams(e);
    return this._def.getter()._parse({
      data: t.data,
      path: t.path,
      parent: t
    });
  }
}

ee.create = (e, t) => new ee({
  getter: e,
  typeName: h.ZodLazy,
  ...m(t)
});

class te extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return u(t, {
        received: t.data,
        code: Zn.invalid_literal,
        expected: this._def.value
      }), f;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
  get value() {
    return this._def.value;
  }
}

te.create = (e, t) => new te({
  value: e,
  typeName: h.ZodLiteral,
  ...m(t)
});

function Ae(e, t) {
  return new P({
    values: e,
    typeName: h.ZodEnum,
    ...m(t)
  });
}

class P extends _ {
  _parse(e) {
    if (typeof e.data !== "string") {
      let t = this._getOrReturnCtx(e), r = this._def.values;
      return u(t, {
        expected: g.joinValues(r),
        received: t.parsedType,
        code: Zn.invalid_type
      }), f;
    }
    if (!this._cache) this._cache = new Set(this._def.values);
    if (!this._cache.has(e.data)) {
      let t = this._getOrReturnCtx(e), r = this._def.values;
      return u(t, {
        received: t.data,
        code: Zn.invalid_enum_value,
        options: r
      }), f;
    }
    return x(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return P.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return P.create(this.options.filter(r => !e.includes(r)), {
      ...this._def,
      ...t
    });
  }
}

P.create = Ae;

class re extends _ {
  _parse(e) {
    let t = g.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== d.string && r.parsedType !== d.number) {
      let a = g.objectValues(t);
      return u(r, {
        expected: g.joinValues(a),
        received: r.parsedType,
        code: Zn.invalid_type
      }), f;
    }
    if (!this._cache) this._cache = new Set(g.getValidEnumValues(this._def.values));
    if (!this._cache.has(e.data)) {
      let a = g.objectValues(t);
      return u(r, {
        received: r.data,
        code: Zn.invalid_enum_value,
        options: a
      }), f;
    }
    return x(e.data);
  }
  get enum() {
    return this._def.values;
  }
}

re.create = (e, t) => new re({
  values: e,
  typeName: h.ZodNativeEnum,
  ...m(t)
});

class q extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let {ctx: t} = this._processInputParams(e);
    if (t.parsedType !== d.promise && t.common.async === !1) return u(t, {
      code: Zn.invalid_type,
      expected: d.promise,
      received: t.parsedType
    }), f;
    let r = t.parsedType === d.promise ? t.data : Promise.resolve(t.data);
    return x(r.then(a => this._def.type.parseAsync(a, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}

q.create = (e, t) => new q({
  type: e,
  typeName: h.ZodPromise,
  ...m(t)
});

class A extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === h.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    let {status: t, ctx: r} = this._processInputParams(e), a = this._def.effect || null, s = {
      addIssue: i => {
        if (u(r, i), i.fatal) t.abort(); else t.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), a.type === "preprocess") {
      let i = a.transform(r.data, s);
      if (r.common.async) return Promise.resolve(i).then(async n => {
        if (t.value === "aborted") return f;
        let c = await this._def.schema._parseAsync({
          data: n,
          path: r.path,
          parent: r
        });
        if (c.status === "aborted") return f;
        if (c.status === "dirty") return L(c.value);
        if (t.value === "dirty") return L(c.value);
        return c;
      }); else {
        if (t.value === "aborted") return f;
        let n = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        if (n.status === "aborted") return f;
        if (n.status === "dirty") return L(n.value);
        if (t.value === "dirty") return L(n.value);
        return n;
      }
    }
    if (a.type === "refinement") {
      let i = n => {
        let c = a.refinement(n, s);
        if (r.common.async) return Promise.resolve(c);
        if (c instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return n;
      };
      if (r.common.async === !1) {
        let n = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (n.status === "aborted") return f;
        if (n.status === "dirty") t.dirty();
        return i(n.value), {
          status: t.value,
          value: n.value
        };
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then(n => {
        if (n.status === "aborted") return f;
        if (n.status === "dirty") t.dirty();
        return i(n.value).then(() => ({
          status: t.value,
          value: n.value
        }));
      });
    }
    if (a.type === "transform") if (r.common.async === !1) {
      let i = this._def.schema._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      if (!M(i)) return f;
      let n = a.transform(i.value, s);
      if (n instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return {
        status: t.value,
        value: n
      };
    } else return this._def.schema._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }).then(i => {
      if (!M(i)) return f;
      return Promise.resolve(a.transform(i.value, s)).then(n => ({
        status: t.value,
        value: n
      }));
    });
    g.assertNever(a);
  }
}

A.create = (e, t, r) => new A({
  schema: e,
  typeName: h.ZodEffects,
  effect: t,
  ...m(r)
});

A.createWithPreprocess = (e, t, r) => new A({
  schema: t,
  effect: {
    type: "preprocess",
    transform: e
  },
  typeName: h.ZodEffects,
  ...m(r)
});

class S extends _ {
  _parse(e) {
    if (this._getType(e) === d.undefined) return x(void 0);
    return this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}

S.create = (e, t) => new S({
  innerType: e,
  typeName: h.ZodOptional,
  ...m(t)
});

class E extends _ {
  _parse(e) {
    if (this._getType(e) === d.null) return x(null);
    return this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}

E.create = (e, t) => new E({
  innerType: e,
  typeName: h.ZodNullable,
  ...m(t)
});

class se extends _ {
  _parse(e) {
    let {ctx: t} = this._processInputParams(e), r = t.data;
    if (t.parsedType === d.undefined) r = this._def.defaultValue();
    return this._def.innerType._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}

se.create = (e, t) => new se({
  innerType: e,
  typeName: h.ZodDefault,
  defaultValue: typeof t.default === "function" ? t.default : () => t.default,
  ...m(t)
});

class ae extends _ {
  _parse(e) {
    let {ctx: t} = this._processInputParams(e), r = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    if (Y(a)) return a.then(s => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new k(r.common.issues);
        },
        input: r.data
      })
    })); else return {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new k(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}

ae.create = (e, t) => new ae({
  innerType: e,
  typeName: h.ZodCatch,
  catchValue: typeof t.catch === "function" ? t.catch : () => t.catch,
  ...m(t)
});

class le extends _ {
  _parse(e) {
    if (this._getType(e) !== d.nan) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: Zn.invalid_type,
        expected: d.nan,
        received: r.parsedType
      }), f;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
}

le.create = e => new le({
  typeName: h.ZodNaN,
  ...m(e)
});

var mt = Symbol("zod_brand");

class xe extends _ {
  _parse(e) {
    let {ctx: t} = this._processInputParams(e), r = t.data;
    return this._def.type._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class fe extends _ {
  _parse(e) {
    let {status: t, ctx: r} = this._processInputParams(e);
    if (r.common.async) return (async () => {
      let s = await this._def.in._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      });
      if (s.status === "aborted") return f;
      if (s.status === "dirty") return t.dirty(), L(s.value); else return this._def.out._parseAsync({
        data: s.value,
        path: r.path,
        parent: r
      });
    })(); else {
      let a = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      if (a.status === "aborted") return f;
      if (a.status === "dirty") return t.dirty(), {
        status: "dirty",
        value: a.value
      }; else return this._def.out._parseSync({
        data: a.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, t) {
    return new fe({
      in: e,
      out: t,
      typeName: h.ZodPipeline
    });
  }
}

class ne extends _ {
  _parse(e) {
    let t = this._def.innerType._parse(e), r = a => {
      if (M(a)) a.value = Object.freeze(a.value);
      return a;
    };
    return Y(t) ? t.then(a => r(a)) : r(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}

ne.create = (e, t) => new ne({
  innerType: e,
  typeName: h.ZodReadonly,
  ...m(t)
});

function Te(e, t) {
  let r = typeof e === "function" ? e(t) : typeof e === "string" ? {
    message: e
  } : e;
  return typeof r === "string" ? {
    message: r
  } : r;
}

function Msn(e, t = {}, r) {
  if (e) return B.create().superRefine((a, s) => {
    let i = e(a);
    if (i instanceof Promise) return i.then(n => {
      if (!n) {
        let c = Te(t, a), o = c.fatal ?? r ?? !0;
        s.addIssue({
          code: "custom",
          ...c,
          fatal: o
        });
      }
    });
    if (!i) {
      let n = Te(t, a), c = n.fatal ?? r ?? !0;
      s.addIssue({
        code: "custom",
        ...n,
        fatal: c
      });
    }
    return;
  });
  return B.create();
}

var _t = {
  object: y.lazycreate
}, h;

(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", 
  e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", 
  e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", 
  e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", 
  e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", 
  e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", 
  e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", 
  e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", 
  e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", 
  e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", 
  e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(h || (h = {}));

var me = T.create, yn = D.create, gt = le.create, yt = z.create, Vo = G.create, vt = W.create, xt = ce.create, iRo = Q.create, X2s = X.create, kt = B.create, Wd = V.create, bt = j.create, wt = oe.create, lr = C.create, {create: St, strictCreate: Td} = y, nI = K.create, EVn = ve.create, Tt = Z.create, aRo = I.create, Rm = ue.create, Ct = de.create, At = U.create, Ot = H.create, Rt = ee.create, cp = te.create, Dd = P.create, jt = re.create, It = q.create, Nt = A.create, Et = S.create, $t = E.create, Mt = A.createWithPreprocess, Vt = fe.create;

var VH = {
  string: e => T.create({
    ...e,
    coerce: !0
  }),
  number: e => D.create({
    ...e,
    coerce: !0
  }),
  boolean: e => G.create({
    ...e,
    coerce: !0
  }),
  bigint: e => z.create({
    ...e,
    coerce: !0
  }),
  date: e => W.create({
    ...e,
    coerce: !0
  })
};

var J2s = f;

export { Zn, Msn, me, yn, Vo, iRo, X2s, Wd, lr, St, Td, nI, EVn, aRo, Rm, cp, Dd, VH, J2s };
