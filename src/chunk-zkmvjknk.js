// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ii } from "./chunk-5wbhf1bk.js";

import { iE } from "./chunk-4v78v8fd.js";

import { Out } from "./chunk-vy77xhyj.js";

var y = new Set([ "__proto__", "constructor", "prototype" ]), c = /(?:\s|\/\/[^\n\r\u2028\u2029]*(?:[\n\r\u2028\u2029]|$)|\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/)*/y, v = /[\n\r\u2028\u2029]/, b = /[A-Za-z_$][\w$]*/y, N = /[\w$\\]/, k = /(?:(?:0|[1-9][0-9]*)(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?/y, m = /x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4})|u\{([0-9a-fA-F]+)\}/y, W = new Map([ [ "n", `\n` ], [ "r", "\r" ], [ "t", "\t" ], [ "b", "\b" ], [ "f", "\f" ], [ "v", "\v" ] ]);

function S(e, n) {
  if (e[n] !== "{") return;
  try {
    return P(e, n);
  } catch {
    return;
  }
}

function I(e, n) {
  let t = d(e, n);
  if (e[t] === ";") return t + 1;
  if (t >= e.length) return n;
  if (!v.test(e.slice(n, t))) return;
  let r = g(e, t);
  if (r === void 0 || r === "in" || r === "instanceof") return;
  return n;
}

function d(e, n) {
  return c.lastIndex = n, c.exec(e) ? c.lastIndex : n;
}

function g(e, n) {
  b.lastIndex = n;
  let t = b.exec(e);
  if (!t || T(e, n + t[0].length)) return;
  return t[0];
}

function T(e, n) {
  let t = e[n];
  return t !== void 0 && (N.test(t) || t.charCodeAt(0) > 127);
}

function x(e, n) {
  switch (e[n]) {
   case "{":
    return P(e, n);

   case "[":
    return A(e, n, "]", x);

   case "'":
   case '"':
   case "`":
    return _(e, n);

   case "-":
    {
      let r = R(e, d(e, n + 1));
      return r && {
        value: -r.value,
        end: r.end
      };
    }

   default:
    break;
  }
  let t = R(e, n);
  if (t) return t;
  switch (g(e, n)) {
   case "true":
    return {
      value: !0,
      end: n + 4
    };

   case "false":
    return {
      value: !1,
      end: n + 5
    };

   case "null":
    return {
      value: null,
      end: n + 4
    };

   default:
    return;
  }
}

function P(e, n) {
  let t = A(e, n, "}", D);
  if (!t) return;
  let r = Object.create(null);
  for (let [o, i] of t.value) r[o] = i;
  return {
    value: r,
    end: t.end
  };
}

function D(e, n) {
  let t = e[n], r;
  if (t === "'" || t === '"') r = _(e, n); else {
    let a = g(e, n);
    r = a === void 0 ? void 0 : {
      value: a,
      end: n + a.length
    };
  }
  if (!r || y.has(r.value)) return;
  let o = d(e, r.end);
  if (e[o] !== ":") return;
  let i = x(e, d(e, o + 1));
  return i && {
    value: [ r.value, i.value ],
    end: i.end
  };
}

function A(e, n, t, r) {
  let o = [], i = n + 1;
  while (!0) {
    if (i = d(e, i), e[i] === t) return {
      value: o,
      end: i + 1
    };
    if (o.length > 0) {
      if (e[i] !== ",") return;
      if (i = d(e, i + 1), e[i] === t) return {
        value: o,
        end: i + 1
      };
    }
    let a = r(e, i);
    if (!a) return;
    o.push(a.value), i = a.end;
  }
}

function R(e, n) {
  k.lastIndex = n;
  let t = k.exec(e);
  if (!t) return;
  let r = n + t[0].length;
  if (T(e, r) || e[r] === ".") return;
  return {
    value: Number(t[0]),
    end: r
  };
}

function _(e, n) {
  let t = e[n], r = t === "`", o = "", i = n + 1, a = i;
  while (a < e.length) {
    let s = e[a];
    if (s === t) return {
      value: o + e.slice(i, a),
      end: a + 1
    };
    if (s === "\\") {
      let l = F(e, a);
      if (!l) return;
      o += e.slice(i, a) + l.value, a = i = l.end;
    } else if (r ? s === "$" && e[a + 1] === "{" : s === `\n` || s === "\r") return; else if (r && s === "\r") o += `${e.slice(i, a)}\n`, 
    a = i = a + (e[a + 1] === `\n` ? 2 : 1); else a++;
  }
  return;
}

function F(e, n) {
  let t = e[n + 1];
  if (t === void 0) return;
  let r = W.get(t);
  if (r !== void 0) return {
    value: r,
    end: n + 2
  };
  if (t === "0") {
    let o = e[n + 2];
    if (o !== void 0 && o >= "0" && o <= "9") return;
    return {
      value: "\0",
      end: n + 2
    };
  }
  if (t >= "1" && t <= "9") return;
  if (t === "x" || t === "u") {
    m.lastIndex = n + 1;
    let o = m.exec(e);
    if (!o) return;
    let i = parseInt(o[1] ?? o[2] ?? o[3] ?? "", 16);
    if (i > 1114111) return;
    return {
      value: String.fromCodePoint(i),
      end: m.lastIndex
    };
  }
  if (t === "\r") return {
    value: "",
    end: n + (e[n + 2] === `\n` ? 3 : 2)
  };
  return {
    value: v.test(t) ? "" : t,
    end: n + 2
  };
}

var V = new RegExp(`^${c.source}export\\s+const\\s+meta\\s*=\\s*(?=\\{)`);

function SS(e, {validateBody: n = !0, maxBytes: t = iE} = {}) {
  if (e.length > t) return {
    error: `Script exceeds ${t} bytes`
  };
  let r = n ? null : V.exec(e);
  if (r) {
    let u = S(e, r[0].length), E = u && I(e, u.end);
    if (u && E !== void 0) {
      let w = M(u.value);
      if (!("error" in w)) return {
        meta: w.meta,
        scriptBody: L(e, E)
      };
    }
  }
  let {parse: o} = Out(), i;
  try {
    i = o(e, {
      ecmaVersion: "latest",
      sourceType: "module",
      allowAwaitOutsideFunction: !0,
      allowReturnOutsideFunction: !0
    });
  } catch (u) {
    return {
      error: C(u, e)
    };
  }
  let a = i.body[0];
  if (!a || a.type !== "ExportNamedDeclaration" || !U(a)) return {
    error: "`export const meta = { name, description, phases }` must be the FIRST statement in the script"
  };
  let l = a.declaration.declarations[0].init, f;
  try {
    f = j(l);
  } catch (u) {
    return {
      error: `meta must be a pure literal: ${u instanceof Error ? u.message : String(u)}`
    };
  }
  let p = M(f);
  if ("error" in p) return p;
  return {
    meta: p.meta,
    scriptBody: L(e, a.end)
  };
}

function L(e, n) {
  return e.slice(n).replace(/^[;\s]*\n/, "").trimStart();
}

function a6o(e) {
  return !("error" in SS(e));
}

var h = 80;

function C(e, n) {
  let t = e instanceof Error ? e.message : String(e), r = "Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping.", o = B(e) ? e.loc : void 0, i = o ? n.split(`\n`)[o.line - 1] : void 0;
  if (!o || i === void 0) return `Script parse error: ${t}. ${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;
  let a = Math.max(0, Math.min(o.column, i.length)), s = Math.max(0, Math.min(a - Math.floor(h / 2), i.length - h)), l = i.slice(s, s + h), f = `${Ii(" ", a - s)}^`;
  return `Script parse error: ${t}\n\n${l}\n${f}\n\n${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;
}

function B(e) {
  if (typeof e !== "object" || e === null || !("loc" in e)) return !1;
  let n = e.loc;
  return typeof n === "object" && n !== null && "line" in n && typeof n.line === "number" && "column" in n && typeof n.column === "number";
}

function U(e) {
  let n = e.declaration;
  if (!n || n.type !== "VariableDeclaration") return !1;
  if (n.kind !== "const" || n.declarations.length !== 1) return !1;
  let t = n.declarations[0];
  return t.id.type === "Identifier" && t.id.name === "meta" && t.init?.type === "ObjectExpression";
}

function O(e) {
  switch (e.type) {
   case "Literal":
    return e.value;

   case "ArrayExpression":
    return e.elements.map(t => {
      if (t === null) throw Error("sparse arrays not allowed");
      if (t.type === "SpreadElement") throw Error("spread not allowed in meta");
      return O(t);
    });

   case "ObjectExpression":
    return j(e);

   case "TemplateLiteral":
    {
      let n = e;
      if (n.expressions.length > 0) throw Error("template interpolation not allowed in meta");
      return n.quasis.map(t => t.value.cooked ?? "").join("");
    }

   case "UnaryExpression":
    {
      let n = e;
      if (n.operator === "-" && n.argument.type === "Literal" && typeof n.argument.value === "number") return -n.argument.value;
      throw Error("only negative-number unary allowed in meta");
    }

   default:
    throw Error(`non-literal node type in meta: ${e.type}`);
  }
}

function j(e) {
  let n = Object.create(null);
  for (let t of e.properties) {
    if (t.type !== "Property") throw Error("only plain properties allowed in meta");
    let r = t;
    if (r.computed) throw Error("computed keys not allowed in meta");
    if (r.method || r.kind !== "init") throw Error("methods/accessors not allowed in meta");
    n[q(r)] = O(r.value);
  }
  return n;
}

function q(e) {
  let n;
  if (e.key.type === "Identifier") n = e.key.name; else if (e.key.type === "Literal") n = String(e.key.value); else throw Error(`unsupported key type in meta: ${e.key.type}`);
  if (y.has(n)) throw Error(`reserved key name not allowed in meta: ${n}`);
  return n;
}

function M(e) {
  let n = e.name;
  if (typeof n !== "string" || n.length === 0) return {
    error: "meta.name must be a non-empty string"
  };
  let t = e.description;
  if (typeof t !== "string" || t.length === 0) return {
    error: "meta.description must be a non-empty string"
  };
  let r = typeof e.title === "string" && e.title.length > 0 ? e.title : void 0, o = typeof e.whenToUse === "string" ? e.whenToUse : void 0, i = K(e.phases);
  return {
    meta: {
      name: n,
      description: t,
      title: r,
      whenToUse: o,
      phases: i
    }
  };
}

function K(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let t of e) if (t && typeof t === "object" && "title" in t) {
    let {title: r, detail: o, model: i} = t;
    if (typeof r === "string") n.push({
      title: r,
      detail: typeof o === "string" ? o : void 0,
      model: typeof i === "string" ? i : void 0
    });
  }
  return n.length > 0 ? n : void 0;
}

export { SS, a6o };
