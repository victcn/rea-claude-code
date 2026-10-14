// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { hae, TJe } from "./chunk-3pqddg8f.js";

import { x, j, l } from "./chunk-b0z4bv3v.js";

import { lo } from "./chunk-ddr690nj.js";

import { wr } from "./chunk-t26295zc.js";

import { m } from "./chunk-3ykz5st8.js";

import { qu } from "./chunk-j016gcgm.js";

import { _ } from "./chunk-kawq2919.js";

import { ne, Nt } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { up, lS, PIr, Mmt, cPo } from "./chunk-q6wab2jw.js";

import { jo } from "./chunk-nnrb0acr.js";

import { fe, er, Dve } from "./chunk-dd98x6x7.js";

import { Fi, MR, fr } from "./chunk-8drhysk2.js";

import { Ie, uPe } from "./chunk-3btm71fm.js";

import { Out } from "./chunk-vy77xhyj.js";

import { pPe, TWn, AWn } from "./chunk-gw3qd0qn.js";

import { CWn, u5 } from "./chunk-whs0esmw.js";

import { $z } from "./chunk-g5zagpgq.js";

import { L } from "./chunk-vh1p9t2h.js";

import { D } from "./chunk-hmqkrrtz.js";

import { Ne } from "./chunk-m8ez8fhk.js";

var _n = 4294967295, Bn = _n - 1, {floor: Un, min: Gn} = Math;

function Vn(e, o, t, r) {
  var n = 0, s = e == null ? 0 : e.length;
  if (s === 0) return 0;
  o = t(o);
  var p = o !== o, i = o === null, a = hae(o), f = o === void 0;
  while (n < s) {
    var u = Un((n + s) / 2), y = t(e[u]), g = y !== void 0, c = y === null, h = y === y, E = hae(y);
    if (p) var k = r || h; else if (f) k = h && (r || g); else if (i) k = h && g && (r || !c); else if (a) k = h && g && !c && (r || !E); else if (c || E) k = !1; else k = r ? y <= o : y < o;
    if (k) n = u + 1; else s = u;
  }
  return Gn(s, Bn);
}

var ut = Vn;

var Wn = 4294967295, zn = Wn >>> 1;

function qn(e, o, t) {
  var r = 0, n = e == null ? r : e.length;
  if (typeof o == "number" && o === o && n <= zn) {
    while (r < n) {
      var s = r + n >>> 1, p = e[s];
      if (p !== null && !hae(p) && (t ? p <= o : p < o)) r = s + 1; else n = s;
    }
    return n;
  }
  return ut(e, o, TJe, t);
}

var _e = qn;

function Xn(e, o) {
  return _e(e, o);
}

var Po = Xn;

function Kn(e, o) {
  return _e(e, o, !0);
}

var xt = Kn;

var gAr = up;

var Be = gAr.map(e => `classic.${e}`);

var lWn = [ "model.complete", "model.classify", "model.fork", "audio.play", "audio.speak", "mcp.call", "mcp.connect", "session.cwd", "session.root", "session.model", "session.turns", "session.id", "session.messages", "session.repo", "session.surface", "session.surfaces", "session.authorize", "session.identity", "session.usage", "session.version", "turn.abort", "prompt.read", "flag.value", "tool.list", "tool.register", "command.list", "command.register", "config.list", "agent.list", "agent.register", "ui.toast", "ui.status", "ui.log", "ui.notice", "ui.invalidate", "ui.open", "ui.close", "ui.panes", "ui.selection", "ui.copy", "ui.notify", "ui.blit", "fs.read", "fs.write", "fs.list", "fs.exists", "fs.stat", "fs.ancestors", "store.get", "store.set", "store.delete", "store.keys", "state.get", "state.set", "clock.now", "clock.sleep", "clock.after", "clock.every", "http.fetch", "process.run", "process.spawn", "settings.read", "env.get", "env.set" ];

var aPe = [ ...Be, "tool.call", "tool.check", "ui.render", "ui.resolve", "ui.press", "ui.input", "ui.select", "ui.message", "ui.fault", "ui.scroll", "ui.focus", "agent.offer", "agent.spawn", "prompt.submit", "prompt.fill", "prompt.suggest", "prompt.edit", "prompt.autocomplete", "prompt.section", "prompt.context", "prompt.attachment", "prompt.mention", "prompt.compose", "tool.describe", "command.run", "command.describe", "config.set", "config.describe", "telemetry.log", "telemetry.mark", "skill.prompt", "attribution.text", "session.start", "session.receive", "session.append", "session.send", "session.compact", "session.attach", "session.detach", "session.measure", "session.end", "plugin.register", "turn.start", "turn.step", "turn.complete", "engine.create", ...lWn ];

var DGs = Be.filter(e => e !== "classic.PreToolUse");

var LUe = e => aPe.includes(e);

var uvo = e => lWn.includes(e);

var hAr = [ "turn.step", "process.spawn" ];

var mnn = e => hAr.includes(e);

var ht = new Set(aPe.filter(e => e.includes(".")).map(e => e.slice(0, e.indexOf("."))));

var Ue = String.raw`(?!\p{Default_Ignorable_Code_Point})[\p{ID_Start}$_]` + String.raw`(?:(?!\p{Default_Ignorable_Code_Point})[\p{ID_Continue}$])*`;

var kt = new RegExp(String.raw`^${Ue}\.${Ue}$`, "u");

var dWn = e => kt.test(e) && !ht.has(e.slice(0, e.indexOf(".")));

var Pxs = [ "managed", "user", "project", "local", "memory" ];

var hnn = [ "replace", "append", "insert" ];

var cWn = e => typeof e === "string" && hnn.includes(e);

var ie = Symbol.for("claude-code.state.atom");

function Io(e) {
  if (typeof e !== "object" || e === null || Object.isFrozen(e)) return e;
  for (let o of Object.values(e)) Io(o);
  return Object.freeze(e);
}

function J(e, o = e.id) {
  let {plugin: t, key: r} = e;
  return Object.freeze(o === void 0 ? {
    plugin: t,
    key: r
  } : {
    plugin: t,
    key: r,
    id: o
  });
}

var Nl = (e, o, t) => Object.freeze({
  [ie]: !0,
  ref: J(e),
  initial: Io(o),
  ...t?.shape !== void 0 && {
    shape: t.shape
  }
});

function Ge(e, o) {
  if (e.shape === void 0) return o === void 0 ? e.initial : o;
  let t = o;
  return t?.shape === e.shape && t.value !== void 0 ? t.value : e.initial;
}

var ae = Symbol.for("claude-code.state.derived");

var Ve = (e, o) => typeof e === "object" && e !== null && e[o] !== void 0;

var I = e => Ve(e, ie);

var We = e => Ve(e, ae);

var Il = (e, o) => {
  let t = {};
  return Object.freeze({
    [ae]: t,
    sources: Object.freeze(e.map(r => I(r) || We(r) ? r : J(r))),
    compute: o
  });
};

var Ml = (e, o) => I(e) ? Object.freeze({
  ...e,
  [ie]: !0,
  ref: J(e.ref, o.requestId)
}) : J(e, o.requestId);

async function Fo(e, o) {
  if (I(o)) {
    let p = await e.get(o.ref);
    return {
      value: Ge(o, p.value),
      versions: [ p.version ]
    };
  }
  if (!We(o)) {
    let p = await e.get(o);
    return {
      value: p.value,
      versions: [ p.version ]
    };
  }
  let t = await Promise.all(o.sources.map(p => Fo(e, p))), r = t.flatMap(p => p.versions), n = r.join(","), s = o[ae];
  if (s?.versions !== n && s !== void 0) s.value = o.compute(...t.map(p => p.value)), 
  s.versions = n;
  return {
    value: s?.value,
    versions: r
  };
}

var _l = async (e, o) => (await Fo(e.state, o)).value;

var Et = (e, o) => e.shape === void 0 ? o : {
  shape: e.shape,
  value: o
};

var bt = 64;

var Vl = async (e, o, t) => {
  let r = e.state, n = I(o) ? o.ref : o;
  for (let s = 0; s < bt; s += 1) {
    let p = await r.get(n), i = I(o) ? Ge(o, p.value) : p.value, a = t(i), f = I(o) ? Et(o, a) : a;
    if ((await r.set(n, f, {
      ifVersion: p.version
    })).isSet) return a;
  }
  throw Error("update: the value was written by another every time it was read, up to the bound on tries; nothing was written");
};

var aR = Nl;

var lR = Il;

var uR = Ml;

var gR = _l;

var jR = Vl;

var yd = [ "prepend", "user", "append", "builtin", "core" ];

var Ixs = [ "allow", "ask", "deny" ];

var xut = e => yd.indexOf(e);

function LGs(e, o) {
  let t = xut(o);
  return e.find(r => xut(r.from) < t && t < xut(r.to))?.plugin;
}

var JHt = e => ({
  prepend: [ "append", "builtin", "core" ],
  user: [],
  append: [ "core" ],
  builtin: [],
  core: []
}[e]);

var SAr = e => JHt("prepend").includes(e);

var Oxs = [ "prepend", "append" ];

function NGs(e, o) {
  return Object.freeze([ ...e, Object.freeze({
    ...o,
    to: e.reduce((t, r) => xut(r.to) > xut(t) ? r.to : t, o.to)
  }) ]);
}

var pvo = e => `next.to:${e}`;

var Put = Object.freeze([]);

import { join as eu } from "path";

var $c = "scripts/bundle-builtin-hooks-module.ts";

function Lc(e) {
  let o = L(e) ? e.files : void 0;
  return Object.freeze(Object.fromEntries((L(o) ? Object.entries(o) : []).filter(t => typeof t[1] === "string")));
}

function _c(e, o) {
  let t = L(e) ? e.scan : void 0;
  if (L(t) && Array.isArray(t.hooks) && Array.isArray(t.calls) && (t.nextTo === void 0 || Array.isArray(t.nextTo))) return t;
  throw new x(`the build carried no hooks module scan for ${o}`, "the build carried no hooks module scan for a built-in");
}

var Uc = (e, o) => new x(`the hooks module of ${e} cannot ship: ${o}`, "the hooks module of a built-in cannot ship");

var Te = "hooks/register.ts";

var wt = e => `builtin:${e}/${Te}`;

var Ho = "mods";

var Do = "mods/";

import { resolve as zc } from "path";

var ve = () => zc(import.meta.dirname, "../../../../../..");

import { dirname as Kc, relative as Yc, resolve as Jc, sep as Qc } from "path";

var St = "builtin-hooks-module:";

function Zc(e, o) {
  let t = o.slice(St.length);
  return t.startsWith(Do) ? `${Ho}/${t.slice(Do.length)}` : Yc(ve(), Jc(Kc(e), t)).split(Qc).join("/");
}

var Mo = "builtin-hooks-module";

var yH = {
  name: Mo,
  setup(e) {
    e.onResolve({
      filter: /^builtin-hooks-module:/
    }, o => ({
      path: Zc(o.importer, o.path),
      namespace: Mo
    })), e.onLoad({
      filter: /.*/,
      namespace: Mo
    }, async o => {
      let t = Bun.spawn([ process.execPath, "--smol", eu(ve(), $c), o.path ], {
        cwd: ve(),
        stdout: "pipe",
        stderr: "pipe",
        windowsHide: !0
      }), [r, n, s] = await Promise.all([ new Response(t.stdout).text(), new Response(t.stderr).text(), t.exited ]);
      if (s !== 0) throw Uc(o.path, n);
      return {
        contents: `module.exports = ${r}`,
        loader: "js"
      };
    });
  }
};

var le = e => e instanceof Error && "code" in e ? String(e.code) : "EIO";

var Tt = (e, o, t) => new Ie(`${e}: ${o}: no such file`, {
  cause: le(t)
});

var vt = [ "EMFILE", "ENFILE" ];

async function qe(e, o) {
  try {
    return await e;
  } catch (t) {
    throw o(t);
  }
}

function At(e, o, t) {
  let r = le(t);
  return vt.includes(r) ? new Ie(`${e}: ${o}: not read, no file descriptor free (${r})`) : Tt(e, o, t);
}

var su = (e, o, t) => new Ie(`${e}: ${o}: not readable (${le(t)})`);

import { sep as du } from "path";

var Ot = `/** @jsxRuntime classic */\n/** @jsx h */\n/** @jsxFrag Fragment */\n`;

var $o = e => PIr[Mmt.find(o => e.endsWith(o)) ?? ""] ?? "js";

function Rt(e) {
  let o = typeof e === "object" && e ? e : {}, t = "errors" in o ? o.errors : void 0;
  return Array.isArray(t) ? t : [ o ];
}

function Pt(e, o) {
  let t = typeof e === "object" && e !== null, r = t && "message" in e ? String(e.message) : "", n = t && "position" in e ? e.position : void 0;
  if (!(typeof n === "object" && n !== null && "line" in n && typeof n.line === "number" && "column" in n)) return r;
  return `${r} (line ${Number(n.line) - o}, column ${String(n.column)})`;
}

var It = (e, o) => Rt(e).map(t => Pt(t, o)).filter(t => t !== "").join("; ") || String(e);

function iWn(e, o) {
  let t = $o(e), r = t === "js", n = t === "ts" ? "" : Ot;
  if (r) return o;
  try {
    let s = {
      loader: t,
      macro: !1
    };
    return new Bun.Transpiler(s).transformSync(`${n}${o}`);
  } catch (s) {
    throw new Ie(It(s, Nt(n, `\n`)));
  }
}

var avo = e => Mmt.some(o => e.endsWith(o));

var Lo = 32;

var mAr = 1048576;

var Ft = 8388608;

function Ht(e) {
  let o = [ e ];
  if (e.endsWith(".js")) {
    let t = e.slice(0, -3);
    o.push(`${t}.ts`, `${t}.tsx`);
  }
  if (e.endsWith(".jsx")) o.push(`${e.slice(0, -4)}.tsx`);
  if (e.endsWith(".mjs")) o.push(`${e.slice(0, -4)}.mts`);
  if (e.endsWith(".cjs")) o.push(`${e.slice(0, -4)}.cts`);
  for (let t of Mmt) o.push(`${e}${t}`), o.push(`${e}${du}index${t}`);
  return o;
}

var Rut = "claude-code";

var Cxs = (e, o, t) => new Ie(`${e}: cannot import "${o}" (from ${t}): a hooks module imports its own files by relative path and "${Rut}", nothing else`);

import { dirname as Dt, resolve as Mt } from "path";

var Ct = (e, o) => [ ".", "..", "./", "../" ].includes(e) ? Mt(Dt(o), e, "index") : Mt(Dt(o), e);

var lvo = e => e === "." || e === ".." || e.startsWith("./") || e.startsWith("../");

var $t = [ "no such file", "not a regular file", "resolves outside the plugin's folder" ];

import { isAbsolute as Pu, relative as Bt, sep as Iu } from "path";

import { readFile as ku } from "fs/promises";

var _o = (e, o) => new Ie(`${e}: ${o} is over ${mAr} bytes and was not read`);

async function Xe(e, {real: o, size: t}, r) {
  if (t > mAr) throw _o(r, e);
  return qe(ku(o, "utf8"), n => At(r, e, n)).then(n => ({
    real: o,
    source: n
  }));
}

import { lstat as Eu, realpath as Lt } from "fs/promises";

import { basename as bu, isAbsolute as wu, relative as Su, sep as Nu } from "path";

async function A3e(e, o, t) {
  let r = await qe(Lt(o), f => su(t, bu(o), f)), n = f => At(t, e, f), s = await qe(Lt(e), n), p = Su(r, s);
  if (p === ".." || p.startsWith(`..${Nu}`) || wu(p)) throw new Ie(`${t}: ${e}: ${s} resolves outside the plugin's folder`);
  let a = await qe(Eu(s), n);
  if (!a.isFile()) throw new Ie(`${t}: ${e}: not a regular file`);
  return {
    real: s,
    size: a.size
  };
}

var _t = (e, o) => new Ie(`${e}: ${o} is not named like code and was not loaded: a hooks module and the files it imports end in ` + cPo);

function Ke(e, o, t) {
  let r = [ o, t ].find(n => !avo(n));
  if (r !== void 0) throw _t(e, r);
}

var dvo = (e, o) => o.startsWith(`${e}: `) ? o.slice(`${e}: `.length) : o;

async function Rxs({spelled: e, importer: o, root: t, pluginName: r}, n, s) {
  let p = `${r}: cannot import "${e}" (from ${Bt(t, o) || o}):`, i = Ct(e, o), a = Bt(t, i);
  if (a === ".." || a.startsWith(`..${Iu}`) || Pu(a)) throw new Ie(`${p} it is outside the plugin's folder (${t})`);
  let u = [];
  for (let y of Ht(i)) {
    let g = n.get(y);
    if (g !== void 0) return {
      file: y,
      source: g
    };
    try {
      let c = await A3e(y, t, r);
      Ke(r, y, c.real);
      let h = s.get(c.real), E = h === void 0 ? void 0 : n.get(h);
      if (h !== void 0 && E !== void 0) return {
        file: h,
        source: E
      };
      let {real: w, source: b} = await Xe(y, c, r);
      return {
        file: y,
        source: b,
        real: w
      };
    } catch (c) {
      let h = l(c);
      if (!(c instanceof Ie) || !$t.some(w => h.endsWith(w))) throw new Ie(`${p} ${dvo(r, h)}`);
      let k = c.cause === void 0;
      u.push(k ? h : `${h} (${String(c.cause)})`);
    }
  }
  throw new Ie(`${p} no such file under ${t}`, u.length === 0 ? void 0 : {
    cause: u.join("; ")
  });
}

var Ut = (e, o, t) => new Ie(`${e}: ${o} ${t}`);

var Cu = (e, o) => Ut(e, o, `takes the module over ${Ft} bytes in total and was not read`);

async function $u(e, o, t) {
  let r = await A3e(e, o, t);
  return Ke(t, e, r.real), Xe(e, r, t);
}

var cvo = () => Out();

var Ye = Gt();

var Vt = 80;

function aWn() {
  let e = new Map;
  return {
    get: o => e.get(o),
    set: (o, t) => {
      e.set(o, t);
    }
  };
}

var Wt = aWn();

function Gt() {
  let e = aWn(), o = aWn();
  return {
    register: (t, r) => {
      e.set(t, r);
    },
    source: t => e.get(t),
    registerScan: (t, r) => {
      o.set(t, r);
    },
    scan: t => o.get(t)
  };
}

function Ae({call: e, scanned: o, what: t, holder: r}) {
  let {endOf: n, functionOf: s} = o.climbs, p = n(e);
  if (p === void 0) return;
  let {value: i, parent: a} = p;
  if (!(a.type === "ExpressionStatement" || (a.type === "ReturnStatement" || a.type === "ArrowFunctionExpression" && a.body === i) && s(i) === r)) throw o.refuse(i, `the value of ${t} is kept (assigned, passed, read, or returned from a nested function); it takes .catch(handler) where it is called and nothing else`);
}

var de = "Client";

var zt = (e, o) => e.id === o || e.params.includes(o);

var Xt = {
  VariableDeclarator: (e, o) => e.id === o,
  FunctionDeclaration: zt,
  FunctionExpression: zt,
  ArrowFunctionExpression: (e, o) => e.params.includes(o),
  ClassDeclaration: (e, o) => e.id === o,
  ClassExpression: (e, o) => e.id === o,
  CatchClause: (e, o) => e.param === o,
  AssignmentPattern: (e, o) => e.left === o,
  RestElement: (e, o) => e.argument === o,
  ArrayPattern: (e, o) => e.elements.includes(o),
  Property: (e, o, t) => e.value === o && t?.type === "ObjectPattern",
  ImportSpecifier: (e, o) => e.local === o,
  ImportDefaultSpecifier: (e, o) => e.local === o,
  ImportNamespaceSpecifier: (e, o) => e.local === o
};

var Ju = e => Xt[e.type];

var Qu = (e, o) => (o?.type === "Property" || o?.type === "PropertyDefinition" || o?.type === "MethodDefinition") && o.key === e && !o.computed;

var Bo = e => typeof e === "object" && e !== null && typeof e.type === "string";

function ox(e) {
  let o = new WeakMap;
  return t => {
    let r = o.get(t);
    if (r !== void 0) return r;
    let n = e(t);
    return o.set(t, n), n;
  };
}

function RH(e, o, t) {
  let r = [ {
    node: e,
    parent: void 0,
    grandparent: void 0
  } ];
  for (let n = r.pop(); n !== void 0; n = r.pop()) {
    if (o(n), t?.(n.node)) continue;
    let s = Object.keys(n.node);
    for (let p = s.length - 1; p >= 0; p -= 1) {
      let i = s[p];
      if (i === void 0 || i === "loc" || i === "type" || i === "start" || i === "end") continue;
      let f = n.node[i];
      if (Array.isArray(f)) for (let u = f.length - 1; u >= 0; u -= 1) {
        let y = f[u];
        if (Bo(y)) r.push({
          node: y,
          parent: n.node,
          grandparent: n.parent
        });
      } else if (Bo(f)) r.push({
        node: f,
        parent: n.node,
        grandparent: n.parent
      });
    }
  }
}

function nx(e) {
  let o = new Map;
  return RH(e, ({node: t, parent: r}) => {
    if (r !== void 0) o.set(t, r);
  }), o;
}

function Kt(e) {
  let o;
  for (let t of e.properties) {
    if (t.type === "SpreadElement") {
      o = o && {
        ...o,
        isSpreadAfter: !0
      };
      continue;
    }
    let {key: r} = t;
    if (!t.computed && t.kind === "init" && (r.type === "Identifier" && r.name === "module" || r.type === "Literal" && r.value === "module")) o = {
      property: t,
      isSpreadAfter: !1
    };
  }
  return o;
}

function Z(e) {
  if (e === void 0) return "no argument";
  switch (e.type) {
   case "Identifier":
    return `the variable ${e.name}`;

   case "TemplateLiteral":
    return "a template with a substitution";

   case "SpreadElement":
    return "a spread";

   case "Literal":
    return `the literal ${e.raw ?? String(e.value)}`;

   case "MemberExpression":
    return "a member read";

   case "CallExpression":
    return "a call";

   case "BinaryExpression":
    return "a concatenation";

   case "ObjectExpression":
    return "an object whose plugin or key is not a string literal";

   default:
    return `a ${e.type}`;
  }
}

function G(e) {
  if (e.type === "Literal") return typeof e.value === "string" ? e.value : void 0;
  if (e.type !== "TemplateLiteral" || e.expressions.length !== 0) return;
  let o = e.quasis[0]?.value.cooked;
  return o === void 0 || o === null ? void 0 : o;
}

function Yt(e, o) {
  if (!o || o.type !== "ObjectExpression") return {
    at: o ?? e,
    problem: `Client takes its props as an object literal ({ module: "./board.tsx", key }), so the surface module it names can be read before it runs (got ${Z(o)})`
  };
  let t = Kt(o);
  if (!t) return {
    at: o,
    problem: `Client names no module: give it module, the surface module's path as a string literal ("./board.tsx")`
  };
  if (t.isSpreadAfter) return {
    at: t.property,
    problem: "a spread after module in Client(...) could replace it: put module after the spread"
  };
  let {value: r} = t.property, n = G(r);
  if (n === void 0) return {
    at: r,
    problem: `Client module must be a string literal, the surface module's path relative to this file (got ${Z(r)})`
  };
  return {
    at: r,
    spelled: n
  };
}

var Uo = e => e.type === "Identifier" && e.name === de || e.type === "Literal" && e.value === de || e.type === "MemberExpression" && !e.computed && e.property.type === "Identifier" && e.property.name === de;

var Jt = "h";

function Qt(e) {
  let {callee: o} = e;
  if (o.type !== "Super" && Uo(o)) return {
    argument: e.arguments[0]
  };
  let [t, r] = e.arguments;
  return o.type === "Identifier" && o.name === Jt && t !== void 0 && t.type !== "SpreadElement" && Uo(t) ? {
    argument: r
  } : void 0;
}

function Go(e) {
  let o = [];
  return RH(e, ({node: t}) => {
    if (t.type !== "CallExpression") return;
    let r = Qt(t);
    if (r) o.push(Yt(t, r.argument));
  }), o.toSorted((t, r) => r.at.start - t.at.start);
}

var Re = "default";

function v(e) {
  let o = e.type === "Identifier", t = e.type === "Literal";
  return o ? e.name : t ? String(e.value) : "";
}

function Zt(e) {
  let o = [];
  for (let t of e.body) if (t.type === "ExportDefaultDeclaration") o.push(Re); else if (t.type === "ExportAllDeclaration") {
    if (t.exported !== null && t.exported) o.push(v(t.exported));
  } else if (t.type === "ExportNamedDeclaration") {
    let {declaration: r} = t;
    if (r?.type === "FunctionDeclaration" || r?.type === "ClassDeclaration") o.push(r.id.name); else if (r?.type === "VariableDeclaration") {
      for (let {id: s} of r.declarations) if (s.type === "Identifier") o.push(s.name);
    }
    for (let s of t.specifiers) o.push(v(s.exported));
  }
  return o;
}

var or = e => /^[A-Z][A-Za-z0-9]*$/.test(e) && /[a-z]/.test(e);

function MGs(e) {
  let o = Zt(e);
  if (o.includes(Re)) return {
    component: Re
  };
  let t = o.filter(or), [r] = t;
  if (t.length === 1 && r !== void 0) return {
    component: r
  };
  return {
    problem: `exports ${t.length === 0 ? "no component" : t.join(", ")}: give it a default export or a single capitalized one (export function Board(props, surface) { ... })`
  };
}

import { dirname as Ex, isAbsolute as bx, relative as wx, resolve as tr, sep as rr } from "path";

function Vo(e) {
  let {spelled: o, file: t, root: r} = e, n = `Client module "${o}"`;
  if (!lvo(o)) return {
    problem: `${n} is not relative: spell the surface module's path from this file ("./board.tsx")`
  };
  if (!avo(o)) return {
    problem: `${n} is not named like code: a surface module's path ends in ` + cPo
  };
  let s = tr(Ex(t), o), p = wx(tr(r), s);
  return p === ".." || p.startsWith(`..${rr}`) || bx(p) ? {
    problem: `${n} leaves the plugin's folder`
  } : {
    module: p.split(rr).join("/")
  };
}

function nr(e) {
  try {
    return cvo().parse(e, {
      ecmaVersion: "latest",
      sourceType: "module"
    });
  } catch {
    return;
  }
}

function HGs(e, o, t) {
  if (!e.includes(de)) return e;
  let r = nr(e), n = e;
  for (let s of r ? Go(r) : []) {
    if (!("spelled" in s)) continue;
    let p = Vo({
      spelled: s.spelled,
      file: o,
      root: t
    });
    if ("module" in p) n = n.slice(0, s.at.start) + _(p.module) + n.slice(s.at.end);
  }
  return n;
}

function pr(e) {
  let o = new Set;
  for (let [t, r] of e.files) for (let n of Go(r.scanned.program)) {
    if ("problem" in n) throw r.scanned.refuse(n.at, n.problem);
    let s = Vo({
      spelled: n.spelled,
      file: t,
      root: e.root
    });
    if ("problem" in s) throw r.scanned.refuse(n.at, s.problem);
    o.add(s.module);
  }
  return [ ...o ].sort();
}

function Je(e) {
  switch (e.type) {
   case "Identifier":
    return `the variable ${e.name}`;

   case "TemplateLiteral":
    return "a template string";

   case "CallExpression":
    return "a call";

   case "ConditionalExpression":
    return "a conditional";

   case "MemberExpression":
    return "a member read";

   case "BinaryExpression":
    return "a concatenation";

   case "SpreadElement":
    return "a spread";

   case "Literal":
    return "regex" in e ? "a RegExp" : `the literal ${e.raw ?? String(e.value)}`;

   default:
    return `a ${e.type}`;
  }
}

var ir = new RegExp(`^${Ue}$`, "u");

var C3e = e => e === "*" || e.endsWith(".*") || e.startsWith("!");

var Qe = e => e.startsWith("telemetry.");

function Ze(e) {
  if (typeof e !== "string") return `${typeof e} is not an event name or a pattern (a string)`;
  let o = e.startsWith("!"), t = o ? e.slice(1) : e;
  if (o && t === "*") return `"${e}" is not a pattern: it selects no event`;
  if (o && t.startsWith("!")) return `"${e}" is not a pattern: "!" negates once`;
  let r = t === "*", n = t.endsWith(".*"), s = (n ? t.slice(0, -2) : t).split(".");
  if (!(r || s.every(i => ir.test(i)))) return `"${e}" is not an event name or a pattern ("*", "<prefix>.*", or "!" before either)`;
  return {
    isNegated: o,
    selection: r ? {
      kind: "every"
    } : n ? {
      kind: "prefix",
      prefix: s.join(".")
    } : {
      kind: "name",
      name: t
    }
  };
}

function eo(e) {
  let o = Ze(e);
  if (typeof o === "string") throw new Ie(o);
  return o;
}

function xxs(e) {
  let {selection: o} = eo(e);
  return o.kind === "name" ? o.name : void 0;
}

function yAr(e) {
  let o = Ze(e);
  return typeof o === "string" ? o : void 0;
}

function a9(e, o) {
  let {isNegated: t, selection: r} = eo(e), n;
  switch (r.kind) {
   case "every":
    n = !0;
    break;

   case "prefix":
    n = o.startsWith(`${r.prefix}.`);
    break;

   case "name":
    n = o === r.name;
    break;
  }
  return t ? !n : n;
}

var YHt = (e, o, t) => a9(e, o) && (t.isBuiltin || !Qe(o) || Qe(e));

function ar(e) {
  let o = !1;
  for (let {scanned: t} of e.files.values()) RH(t.program, r => {
    if (r.node.type === "ImportExpression") o = !0;
  }, () => o);
  return o;
}

function F(e) {
  switch (e?.type) {
   case "Identifier":
    return [ e ];

   case "ArrayPattern":
    return e.elements.flatMap(F);

   case "ObjectPattern":
    return e.properties.flatMap(o => F(o.type === "Property" ? o.value : o));

   case "AssignmentPattern":
    return F(e.left);

   case "RestElement":
    return F(e.argument);

   default:
    return [];
  }
}

function mr(e) {
  let o = [], t = [];
  return RH(e, ({node: r}) => {
    switch (r.type) {
     case "AssignmentExpression":
      o.push(...F(r.left));
      break;

     case "UpdateExpression":
      o.push(...F(r.argument));
      break;

     case "ForInStatement":
     case "ForOfStatement":
      o.push(...F(r.left)), t.push(...F(r.left));
      break;

     default:
      break;
    }
  }), {
    byName: Map.groupBy(o, r => r.name),
    inLoopHeads: Map.groupBy(t, r => r.name)
  };
}

var ue = (e, o, t) => o !== void 0 && (Ju(o)?.(o, e, t) ?? !1);

function Wo(e, o) {
  let t = [];
  return RH(e, ({node: r, parent: n, grandparent: s}) => {
    if (r.type === "Identifier" && r.name === o && ue(r, n, s)) t.push(r);
  }), t;
}

var oo = (e, o, t) => !ue(e, o, t) && !(o?.type === "MemberExpression" && o.property === e && !o.computed) && !Qu(e, o) && o?.type !== "LabeledStatement" && o?.type !== "BreakStatement" && o?.type !== "ContinueStatement" && o?.type !== "ExportSpecifier" && o?.type !== "ImportSpecifier" && o?.type !== "ImportDefaultSpecifier" && o?.type !== "ImportNamespaceSpecifier" && o?.type !== "MetaProperty" && o?.type !== "ExportAllDeclaration" && o?.type !== "ImportAttribute";

function lr(e) {
  let o = new Map;
  function t(r) {
    let n = r.type === "VariableDeclaration" && r.kind === "const";
    if (r.type === "FunctionDeclaration" && r.id !== null) o.set(r.id.name, r); else if (n) for (let s of r.declarations) {
      let {id: p, init: i} = s;
      if (p.type === "Identifier" && (i?.type === "FunctionExpression" || i?.type === "ArrowFunctionExpression")) o.set(p.name, i);
    }
  }
  for (let r of e.body) if (t(r), r.type === "ExportNamedDeclaration" || r.type === "ExportDefaultDeclaration") {
    let s = r.declaration;
    if (s !== null && s !== void 0) t(s);
  }
  return o;
}

function zo(e) {
  let o = [], t = [];
  return RH(e, ({node: r, parent: n, grandparent: s}) => {
    if (r.type !== "Identifier") return;
    if (ue(r, n, s)) o.push(r); else if (oo(r, n, s)) t.push(r);
  }), {
    declared: Map.groupBy(o, r => r.name),
    read: Map.groupBy(t, r => r.name)
  };
}

function dr(e) {
  let o = [], t = [], r = [];
  return e.filter(n => n.start < n.end).flatMap(n => [ {
    place: n.start,
    span: n,
    isStart: !0,
    rank: -n.end
  }, {
    place: n.end,
    span: n,
    isStart: !1,
    rank: -n.start
  } ]).toSorted((n, s) => n.place - s.place || Number(n.isStart) - Number(s.isStart) || n.rank - s.rank).forEach(n => {
    n.isStart ? o.push(n.span) : o.splice(o.lastIndexOf(n.span), 1), t.push(n.place), 
    r.push(o.at(-1)?.declaration);
  }), n => r[xt(t, n) - 1];
}

function cr(e, o) {
  switch (e.type) {
   case "SequenceExpression":
   case "ChainExpression":
   case "ParenthesizedExpression":
   case "AwaitExpression":
    return !0;

   case "LogicalExpression":
    return e.right === o;

   case "ConditionalExpression":
    return e.test !== o;

   case "UnaryExpression":
    return e.operator === "void";

   default:
    return !1;
  }
}

function H(e) {
  if (e.type !== "Property") return;
  let {key: o} = e, t = !e.computed && o.type === "Identifier", r = !e.computed && o.type === "Literal";
  return t ? o.name : r ? String(o.value) : void 0;
}

var V = e => e.properties.some(o => o.type === "Property" && (o.kind !== "init" || !o.shorthand && H(o) === "__proto__"));

var W = e => e?.type === "FunctionDeclaration" || e?.type === "FunctionExpression" || e?.type === "ArrowFunctionExpression";

var ur = (e, o) => W(e) || e.type === "PropertyDefinition" && !e.static && e.value === o;

function xr(e, o, t) {
  switch (e.type) {
   case "ArrayExpression":
    return !0;

   case "Property":
    return e.value === o;

   case "ObjectExpression":
    return o.type === "Property" && !t(e);

   default:
    return !1;
  }
}

function yr(e) {
  switch (e.type) {
   case "Program":
   case "FunctionDeclaration":
   case "FunctionExpression":
   case "ArrowFunctionExpression":
   case "StaticBlock":
   case "BlockStatement":
   case "SwitchStatement":
   case "ForStatement":
   case "ForInStatement":
   case "ForOfStatement":
    return !0;

   default:
    return !1;
  }
}

function gr(e) {
  switch (e.type) {
   case "Property":
   case "ObjectPattern":
   case "ArrayPattern":
   case "RestElement":
   case "AssignmentPattern":
    return !0;

   default:
    return !1;
  }
}

function hr(e, o) {
  switch (e.type) {
   case "Program":
   case "StaticBlock":
    return !0;

   case "BlockStatement":
    return W(o);

   default:
    return W(e);
  }
}

function z(e, o) {
  let t = new Map;
  return r => {
    let n = t.get(r);
    if (n !== void 0) return n ?? void 0;
    let s = r, p = e(r), i = p === void 0 ? null : o(p, s) ?? t.get(p);
    while (p !== void 0 && i === void 0) s = p, p = e(p), i = p === void 0 ? null : o(p, s) ?? t.get(p);
    for (let a = r; a !== void 0 && a !== p; a = e(a)) t.set(a, i ?? null);
    return i ?? void 0;
  };
}

function py(e) {
  let o = lo(V);
  return {
    parentOf: e,
    functionOf: z(e, t => W(t) ? t : void 0),
    lexicalScopeOf: z(e, t => yr(t) ? t : void 0),
    varScopeOf: z(e, t => hr(t, e(t)) ? t : void 0),
    declarerOf: z(e, t => gr(t) ? void 0 : t),
    deferrerOf: z(e, (t, r) => ur(t, r) ? t : void 0),
    endOf: z(e, (t, r) => cr(t, r) ? void 0 : {
      value: r,
      parent: t
    }),
    heldAt: z(e, (t, r) => xr(t, r, o) ? void 0 : {
      value: r,
      parent: t
    })
  };
}

function iy(e) {
  switch (e.type) {
   case "Program":
   case "FunctionDeclaration":
   case "FunctionExpression":
   case "ArrowFunctionExpression":
   case "ClassDeclaration":
   case "ClassExpression":
   case "StaticBlock":
   case "BlockStatement":
   case "CatchClause":
   case "SwitchStatement":
   case "ForStatement":
   case "ForInStatement":
   case "ForOfStatement":
    return !0;

   default:
    return !1;
  }
}

var kr = e => typeof e === "string" || iy(e) ? e : "unplaced";

function Pe(e, {parentOf: o, declarerOf: t, lexicalScopeOf: r, varScopeOf: n}) {
  let s = t(e);
  switch (s?.type) {
   case "VariableDeclarator":
    {
      let p = o(s);
      return (p?.type === "VariableDeclaration" && p.kind !== "var" ? r(s) : n(s)) ?? "unplaced";
    }

   case "FunctionDeclaration":
   case "ClassDeclaration":
    return s.id === e ? r(s) ?? "unplaced" : s;

   case "FunctionExpression":
   case "ArrowFunctionExpression":
   case "ClassExpression":
   case "CatchClause":
    return s;

   case "ImportSpecifier":
   case "ImportDefaultSpecifier":
   case "ImportNamespaceSpecifier":
    return n(s) ?? "unplaced";

   case "AssignmentExpression":
   case "ForInStatement":
   case "ForOfStatement":
    return "nothing";

   default:
    return "unplaced";
  }
}

function jr(e, o, t) {
  return [ ...e ].flatMap(([r, n]) => {
    if (typeof r === "string") return [];
    if (r.type === "SwitchStatement") {
      let {discriminant: a} = r;
      return [ {
        start: r.start,
        end: a.start,
        declaration: n
      }, {
        start: a.end,
        end: r.end,
        declaration: n
      } ];
    }
    let s = o(r), i = t === "engine" && r.type === "BlockStatement" && s !== void 0 && W(s) && !e.has(s) ? s : r;
    return [ {
      start: i.start,
      end: i.end,
      declaration: n
    } ];
  });
}

function qo(e, o, t) {
  let r = new Map, n = new Map, s = new Map, {parentOf: p} = o;
  return i => {
    let a = s.get(i);
    if (a !== void 0) return a ?? void 0;
    let f = r.get(i.name) ?? new Map((e.get(i.name) ?? []).map(c => [ kr(Pe(c, o)), c ]).filter(([c]) => c !== "nothing" && (typeof c === "string" || c.type !== "Program")));
    if (r.set(i.name, f), p(i) === void 0) return i;
    if (f.size === 0) return;
    let u = f.get("unplaced");
    if (u !== void 0) return u;
    let y = n.get(i.name) ?? dr(jr(f, p, t));
    n.set(i.name, y);
    let g = y(i.start);
    return s.set(i, g ?? null), g;
  };
}

function hy(e, o) {
  let {declared: t, read: r} = zo(e), n = mr(e);
  return {
    functions: lr(e),
    assigned: new Set(n.byName.keys()),
    assignedAt: n.byName,
    loopAssigned: n.inLoopHeads,
    declared: t,
    read: r,
    shadowOf: qo(t, o, "engine"),
    writtenShadowOf: qo(t, o, "written")
  };
}

function ky(e, o) {
  for (let t of e.scanned.program.body) {
    let r = t.type === "ExportNamedDeclaration", n = r ? t.source : null, s = r ? t.specifiers.find(i => v(i.exported) === o) : void 0;
    if (n !== null && n !== void 0 && s !== void 0) return {
      specifier: s,
      spelled: String(n.value)
    };
  }
  return;
}

function q(e, o, t = "all") {
  let r = [];
  return RH(e, ({node: s, parent: p, grandparent: i}) => {
    if (s.type === "Identifier" && s.name === o && oo(s, p, i)) r.push(s);
  }, t === "own" ? s => s !== e && (s.type === "FunctionExpression" || s.type === "FunctionDeclaration") : void 0), 
  r;
}

function Er(e, o, t) {
  let r = new Set;
  for (let n of e.body) {
    if (n.type === "ExportDefaultDeclaration") {
      let {declaration: a} = n;
      if (a === o || a.type === "Identifier" && t !== void 0 && a.name === t) r.add("default");
      continue;
    }
    if (n.type !== "ExportNamedDeclaration") continue;
    let {declaration: s, source: p, specifiers: i} = n;
    if (s?.type === "FunctionDeclaration" && s === o) r.add(s.id.name);
    if (s?.type === "VariableDeclaration") {
      for (let a of s.declarations) if (a.init === o && a.id.type === "Identifier") r.add(a.id.name);
    }
    if (p !== null && p !== void 0) continue;
    for (let a of i) if (t !== void 0 && v(a.local) === t) r.add(v(a.exported));
  }
  return r;
}

function br(e, o) {
  return e.type === "Identifier" ? e.name === o : Wo(e, o).length > 0;
}

function xe(e) {
  switch (e.type) {
   case "Identifier":
    return [ e.name ];

   case "ObjectPattern":
    return e.properties.flatMap(o => xe(o.type === "RestElement" ? o.argument : o.value));

   case "ArrayPattern":
    return e.elements.flatMap(o => o === null ? [] : xe(o));

   case "AssignmentPattern":
    return xe(e.left);

   case "RestElement":
    return xe(e.argument);

   default:
    return [];
  }
}

var Sr = 4;

function ro(e, o) {
  for (let t of e.program.body) {
    let n = t.type === "ExportNamedDeclaration" ? t.declaration : t;
    if (!(n?.type === "VariableDeclaration" && n.kind === "const")) continue;
    for (let p of n.declarations) if (p.id.type === "Identifier" && p.id.name === o && p.init) return p.init;
  }
  return;
}

function no(e) {
  let o = e === null || e === void 0;
  return e?.type === "VariableDeclaration" ? e.declarations.flatMap(r => xe(r.id)) : o ? [] : [ e.id.name ];
}

function so(e, o) {
  switch (e.type) {
   case "VariableDeclaration":
    return e.declarations.some(t => br(t.id, o));

   case "FunctionDeclaration":
   case "ClassDeclaration":
    return e.id?.name === o;

   case "ImportDeclaration":
    return e.specifiers.some(t => t.local.name === o);

   case "ExportNamedDeclaration":
   case "ExportDefaultDeclaration":
    return e.declaration !== null && e.declaration !== void 0 && so(e.declaration, o);

   default:
    return !1;
  }
}

var Nr = /^(?!(?:true|false|null|undefined|NaN|Infinity)$)(?![-\d])[\w:@*!$#-]+$/;

var Tr = 16;

var po = 120;

function io(e) {
  let o = e.slice(0, po), t = e.length - o.length, r = JSON.stringify(o).replace(/[^\x20-\x7e]/g, n => "\\u".concat(n.charCodeAt(0).toString(Tr).padStart(Sr, "0"))).replace(/ {2,}/g, n => " ".concat(n.slice(1).replaceAll(" ", "\\u0020")));
  return t === 0 ? r : `${r}[+${t} chars]`;
}

function M(e) {
  return e.length <= po && Nr.test(e) ? e : io(e);
}

var O = "?";

function ao(e, o, t) {
  let r = e.properties.map(s => H(s)), n = r.lastIndexOf(void 0);
  return e.properties.flatMap((s, p) => {
    let i = r[p], a = s.type !== "Property", f = i !== void 0 && r.includes(i, p + 1), u = i !== void 0 && p < n, y = i === void 0 ? O : M(i), g = `${y}=${O}`, c = a ? `...${O}` : `${y}${vr(s.value, o, t)}`;
    return f ? [] : [ u ? g : c ];
  }).join(", ");
}

function ye(e, o) {
  let t = e.shadowOf(o);
  if (t === void 0) return {
    kind: "free"
  };
  let r = e.parentOf(t), n = r && e.parentOf(r), s = n && e.parentOf(n);
  return r?.type === "VariableDeclarator" && r.id === t && n?.type === "VariableDeclaration" && n.kind === "const" && n.declarations.length === 1 && s?.type === "ForOfStatement" && s.left === n && o.start >= s.body.start && o.start < s.body.end ? {
    kind: "loop",
    loop: s
  } : {
    kind: "shadowed"
  };
}

function Ar(e, o) {
  let r = ye(e, o).kind === "free" ? ro(e, o.name) : void 0;
  return r?.type === "Literal" && r.regex === void 0 && typeof r.value !== "bigint" || r?.type === "TemplateLiteral" && r.expressions.length === 0 || r?.type === "Identifier" ? r : void 0;
}

function Or(e, o) {
  let r = ye(e, o).kind === "free" ? ro(e, o.name) : void 0;
  return (r?.type === "ObjectExpression" || r?.type === "ArrayExpression" || r?.type === "Literal" && r.regex !== void 0) && e.isSealed(o.name) ? r : void 0;
}

var ge = (e, o) => Ar(e, o) ?? Or(e, o);

function fo(e, o, t) {
  let r = e, n = t;
  while (r.type === "Identifier" && !n.has(r.name)) {
    let i = ge(o, r);
    if (i === void 0) break;
    n = new Set([ ...n, r.name ]), r = i;
  }
  let s = r.type === "ObjectExpression" ? r : void 0;
  return s !== void 0 && !V(s) ? {
    node: s,
    seen: n
  } : void 0;
}

function Xo(e, o) {
  let [t, ...r] = e.node.properties, n = r.length === 0 && t?.type === "Property", s = n ? H(t) : void 0, p = n ? fo(t.value, o, e.seen) : void 0;
  return s !== void 0 && p !== void 0 ? `.${M(s)}${Xo(p, o)}` : ` has {${ao(e.node, o, e.seen)}}`;
}

function Rr(e) {
  let o = [];
  for (let t of e.elements) {
    if (t === null) return;
    if (t.type === "Literal") {
      let {value: s} = t;
      if (!(typeof s === "string" || typeof s === "number" || typeof s === "boolean")) return;
      o.push(typeof s === "string" ? M(s) : String(s));
      continue;
    }
    let n = t.type === "TemplateLiteral" && t.expressions.length === 0 ? t.quasis[0]?.value.cooked : void 0;
    if (n === void 0 || n === null) return;
    o.push(M(n));
  }
  return D(o);
}

function Pr(e, o, t) {
  let {right: r} = o;
  return r.type === "ArrayExpression" && !e.program.body.some(s => s.type === "ImportDeclaration" && so(s, t)) ? Rr(r)?.join("|") : void 0;
}

function Ir(e, o, t) {
  if (t.has(e.name)) return O;
  let r = ye(o, e), n = r.kind === "loop", s = n ? Pr(o, r.loop, e.name) : void 0;
  if (n) return s ?? O;
  let p = ge(o, e);
  if (p === void 0) return O;
  return ee(p, o, new Set([ ...t, e.name ]));
}

var Fr = (e, o) => `/${io(e)}/${o}`;

function ee(e, o, t = new Set) {
  switch (e.type) {
   case "Literal":
    {
      let {regex: r, value: n} = e, s = typeof n === "string", p = typeof n === "bigint", i = s ? M(n) : String(n);
      return r ? Fr(r.pattern, r.flags) : p ? O : i;
    }

   case "TemplateLiteral":
    {
      let r = e.quasis[0]?.value.cooked;
      return e.expressions.length === 0 && r !== void 0 && r !== null ? M(r) : O;
    }

   case "ArrayExpression":
    return e.elements.map(r => r === null ? "" : ee(r, o, t)).join("|");

   case "ObjectExpression":
    return V(e) ? O : `{${ao(e, o, t)}}`;

   case "Identifier":
    return Ir(e, o, t);

   default:
    return O;
  }
}

function vr(e, o, t) {
  let r = fo(e, o, t);
  if (r === void 0) return `=${ee(e, o, t)}`;
  return Xo(r, o);
}

var Yy = (e, o, t) => o === void 0 ? e : `${e}${ee(o, t)}`;

function Fe(e, o, t = new Set) {
  if (e.type === "Literal") return e.regex ? e.value ?? new RegExp("") : e.value;
  if (e.type === "ArrayExpression") return e.elements.map(n => n ? Fe(n, o, t) : new RegExp(""));
  if (e.type === "ObjectExpression") {
    if (V(e)) return new RegExp("");
    let n = [];
    for (let s of e.properties) {
      let p = H(s);
      if (s.type !== "Property" || p === void 0) return new RegExp("");
      n.push([ p, Fe(s.value, o, t) ]);
    }
    return Object.fromEntries(n);
  }
  if (e.type !== "Identifier" || t.has(e.name)) return new RegExp("");
  let r = ge(o, e);
  if (!r) return new RegExp("");
  return Fe(r, o, new Set([ ...t, e.name ]));
}

function Yo(e, o) {
  if (e.type === "ExportDefaultDeclaration") {
    let {declaration: i} = e;
    return i.type === "Identifier" && i.name === o;
  }
  if (e.type !== "ExportNamedDeclaration") return !1;
  let {declaration: t, source: r, specifiers: n} = e, s = t !== null && t !== void 0 && so(t, o), p = (r === null || r === void 0) && n.some(i => v(i.local) === o);
  return s || p;
}

var mo = (e, o) => e.body.some(t => Yo(t, o));

function Dr(e, o) {
  let t = e.holderFiles.get(o);
  if (t === void 0) return;
  let {scanned: r} = t, n = [ ...r.names.functions ].find(([, a]) => a === o)?.[0], s = n === void 0 ? [] : r.names.read.get(n) ?? [], p = Er(r.program, o, n), i = [];
  for (let a of s) if (r.parentOf(a)?.type !== "ExportDefaultDeclaration") i.push({
    reference: a,
    scanned: r
  });
  for (let a of e.graph.files.values()) for (let f of a.scanned.program.body) {
    let y = f.type === "ImportDeclaration" || f.type === "ExportAllDeclaration" || f.type === "ExportNamedDeclaration" ? f.source : void 0;
    if (!(p.size > 0 && y !== null && y !== void 0 && a.links.get(String(y.value)) === r.file)) continue;
    if (f.type === "ExportAllDeclaration" || f.type === "ExportNamedDeclaration" && f.specifiers.some(k => p.has(v(k.local))) || f.type === "ImportDeclaration" && f.specifiers.some(k => k.type === "ImportNamespaceSpecifier")) return;
    let E = f.type === "ImportDeclaration" ? f.specifiers : [];
    for (let k of E) {
      let b = k.type === "ImportSpecifier" ? v(k.imported) : "default", S = k.local.name;
      if (!p.has(b)) continue;
      if (mo(a.scanned.program, S)) return;
      for (let N of a.scanned.names.read.get(S) ?? []) i.push({
        reference: N,
        scanned: a.scanned
      });
    }
  }
  return i;
}

function Mr(e) {
  let o = new Map, t = new Map, r = Map.groupBy(e.holderCalls, i => i.call), n;
  function s({reference: i, scanned: a}, f, u) {
    let y = a.parentOf(i);
    return (y?.type === "CallExpression" && y.callee === i ? r.get(y) ?? [] : []).some(c => c.callee === f && c.position === u && p(c.caller, c.callerPosition));
  }
  function p(i, a) {
    n ??= ar(e.graph);
    let f = o.get(i)?.get(a), u = t.get(i)?.has(a) === !0;
    if (n || u || f !== void 0) return f ?? !1;
    t.set(i, (t.get(i) ?? new Set).add(a));
    let g = i.type === "FunctionExpression" && i.id !== null && i.id !== void 0 ? void 0 : Dr(e, i), c = i === e.register && a === 0, h = g !== void 0 && (g.length > 0 || c) && g.every(E => s(E, i, a));
    return o.set(i, (o.get(i) ?? new Map).set(a, h)), t.get(i)?.delete(a), h;
  }
  return p;
}

function co(e, o) {
  let t = o.scanned.parentOf(e);
  return t?.type === "MemberExpression" && t.object === e && !t.computed && t.property.type === "Identifier" && t.property.name === "catch";
}

function Cr(e, o) {
  let r = o.type === "Identifier" ? e.scanned.names.functions.get(o.name) : o;
  if (!(r?.type === "FunctionExpression" || r?.type === "ArrowFunctionExpression" || r?.type === "FunctionDeclaration")) return !0;
  let [, , s] = r.params;
  return s !== void 0 && (s.type !== "Identifier" || q(r, s.name).length > 0) || q(r, "eval").length > 0;
}

var uo = e => e.type === "SpreadElement" || e.computed || e.kind !== "init";

var he = (e, o) => e.type === "Property" && (e.key.type === "Identifier" && e.key.name === o || e.key.type === "Literal" && e.key.value === o);

function $r(e) {
  switch (e.type) {
   case "Literal":
    {
      let o = e.value;
      return typeof o === "string" ? [ o ] : void 0;
    }

   case "ArrayExpression":
    {
      let o = e.elements.map(r => {
        let n = r?.type === "Literal" ? r.value : void 0;
        return typeof n === "string" ? n : void 0;
      });
      return o.every(r => r !== void 0) ? o.filter(r => r !== void 0) : void 0;
    }

   default:
    return;
  }
}

function oe(e) {
  switch (e?.type) {
   case "ObjectExpression":
    {
      let o = e.properties.filter(s => he(s, "command")), t = e.properties.some(uo), [r] = o;
      return !t && o.length === 1 && r?.type === "Property" ? $r(r.value) : void 0;
    }

   case "ArrayExpression":
    {
      let o = e.elements.map(r => r === null || r.type === "SpreadElement" ? void 0 : oe(r));
      return o.every(r => r !== void 0) ? o.flatMap(r => r ?? []) : void 0;
    }

   default:
    return;
  }
}

function Lr(e, o, t) {
  let {parentOf: r} = o.linked.scanned, n = co(e, o.linked) ? r(e) : void 0, s = n === void 0 ? void 0 : r(n), p = [ ...e.arguments.slice(-1), ...s?.type === "CallExpression" ? s.arguments : [] ], i = oe(o.matcher) ?? [];
  return o.event === "command.run" && !p.some(a => Cr(o.linked, a)) && i.length > 0 && i.every(a => t.has(a));
}

function _r(e, o, t) {
  let r = o.climbs.heldAt(t);
  if (r === void 0) return;
  let {value: n, parent: s} = r;
  if (s.type === "VariableDeclarator" && s.init === n) {
    let {id: f} = s, u = o.parentOf(s), y = u && o.parentOf(u);
    return f.type === "Identifier" && u?.type === "VariableDeclaration" && u.kind === "const" && (y?.type === "Program" || y?.type === "ExportNamedDeclaration") ? {
      kind: "const",
      name: f.name
    } : void 0;
  }
  let i = s.type === "CallExpression" ? e.registrations.get(s) : void 0;
  return i !== void 0 && i.matcher === n ? {
    kind: "matcher",
    held: i
  } : void 0;
}

function Br(e, o) {
  let t = new Map, r = new Map;
  function n(s, p) {
    let i = t.get(s)?.get(p);
    if (r.get(s)?.has(p) === !0 || i !== void 0) return i ?? !1;
    r.set(s, (r.get(s) ?? new Set).add(p));
    let {scanned: f} = s, u = f.names.read.get(p) ?? [], y = !mo(f.program, p) && u.length > 0 && u.every(g => {
      let c = _r(e, f, g);
      switch (c?.kind) {
       case "matcher":
        return o(c.held.holder, c.held.position);

       case "const":
        return n(s, c.name);

       case void 0:
        return !1;
      }
    });
    return t.set(s, (t.get(s) ?? new Map).set(p, y)), r.get(s)?.delete(p), y;
  }
  return n;
}

function gnn(e, o) {
  if (!uPe(e) || !Object.hasOwn(e, o)) return;
  let t = e[o];
  if (typeof t === "string") return [ t ];
  return Array.isArray(t) && t.length > 0 && t.every(n => typeof n === "string") ? t : void 0;
}

function XHt(e) {
  if (Array.isArray(e)) {
    let o = e.map(XHt);
    return o.length > 0 && o.every(r => r !== void 0) ? o.flatMap(r => r ?? []) : void 0;
  }
  return gnn(e, "door");
}

function _Ar(e) {
  let o = Array.isArray(e), t = [ uPe(e) ? e.door : e ].flat().some(r => r instanceof RegExp && r.source === "(?:)");
  return o ? e.some(_Ar) : t;
}

function Ur(e) {
  let o = Br(e, Mr(e)), t = new Map, r = [], n = [], s = [];
  for (let [p, i] of e.registrations) {
    let {event: a, matcher: f, linked: u} = i, {program: y, parentOf: g, names: c} = u.scanned, h = t.get(u) ?? {
      program: y,
      parentOf: g,
      shadowOf: c.shadowOf,
      isSealed: S => o(u, S)
    };
    t.set(u, h);
    let E = Yy(a, f, h), k = a === "command.run", b = f !== void 0 && a9(a, "session.append") ? Fe(f, h) : void 0;
    if (r.push(E), s.push({
      registration: E,
      pattern: a,
      hasCatch: co(p, u),
      isOwnCommand: Lr(p, i, e.registeredCommands),
      commands: (k ? oe(f) : void 0) ?? [],
      doors: XHt(b) ?? [],
      isDoorUnread: _Ar(b)
    }), a === "ui.render" && f !== void 0) n.push({
      registration: E,
      matcher: Fe(f, h)
    });
  }
  return {
    registrations: r,
    renderMatchers: n,
    catchReads: s
  };
}

var Gr = "anthropic";

var ke = [ "anthropic", "collector" ];

var wg = e => ke.includes(e);

var C = ({onName: e, event: o}) => '"to" is a string literal, or a list of them, from ' + ke.map(t => `"${t}"`).join(", ") + `, written in the call, so the streams a module's hooks stand on can be listed: ${e}("${o}", { to: "collector" }, hook)`;

function Vr(e, o) {
  let {onName: t, event: r, refuse: n} = o;
  return (e.type === "ArrayExpression" ? e.elements : [ e ]).map(s => {
    if (s === null) throw n(e, `${t}("${r}") names its destinations as a list with a hole; ${C(o)}`);
    let p = s.type === "Literal" ? s.value : void 0;
    if (typeof p !== "string") throw n(s, `${t}("${r}") names its destination as ${Je(s)}; ${C(o)}`);
    if (!wg(p)) throw n(s, `${t}("${r}") names the destination "${p}", which is no telemetry stream; ${C(o)}`);
    return p;
  });
}

var Tg = (e, o) => (t, r, {known: n, reals: s}) => Rxs({
  spelled: t,
  importer: r,
  root: e,
  pluginName: o
}, n, s);

var xo = (e, o) => o === "env.get" ? e.envReads : e.envWrites;

function X({graph: e, pluginName: o}, t) {
  let r = e.files.get(t);
  if (r === void 0) throw new Ie(`${o}: ${t} was not linked`);
  return r;
}

function yo(e, o, t) {
  let {scan: r, linked: n} = e, s = n.links.get(o);
  if (s === void 0) throw n.scanned.refuse(void 0, `"${t}" is looked for through a re-export from "${o}", which is not a file of the module's own: nothing is followed through it`);
  return {
    scan: r,
    linked: X(r, s)
  };
}

function K(e) {
  let {scan: o, linked: t} = e, r = o.ownExports.get(t);
  if (r !== void 0) return r;
  let n = new Map, s = new Map, p = new Map, i = [], a = [];
  for (let u of t.scanned.program.body) {
    if (u.type === "ExportDefaultDeclaration") n.set("default", u);
    if (u.type === "ExportNamedDeclaration") {
      for (let h of no(u.declaration)) n.set(h, u);
      for (let h of u.specifiers) n.set(v(h.exported), u), s.set(v(h.exported), h);
    }
    if (u.type !== "ExportAllDeclaration") continue;
    let {exported: y} = u, g = t.links.get(String(u.source.value));
    if (y !== null && y !== void 0) {
      p.set(v(y), u);
      continue;
    }
    g === void 0 ? a.push(u) : i.push({
      from: t,
      statement: u,
      to: X(o, g)
    });
  }
  let f = {
    named: n,
    listed: s,
    namespaces: p,
    stars: i,
    foreign: a
  };
  return o.ownExports.set(t, f), f;
}

var Jo = 5e5;

function P(e, o) {
  let {scan: t, linked: r} = e;
  if (t.exportSteps.taken += o, t.exportSteps.taken > Jo) throw r.scanned.refuse(void 0, `the re-exports of "${t.pluginName}" took ${t.exportSteps.taken} steps to follow, more than the ${Jo} a scan allows: write fewer \`export *\`, or import each name from the file that declares it`);
}

function go(e, o, t) {
  let {names: r, refuse: n} = e.scanned, s = t === "default" ? "the default export" : t, p = v(o.local), i = r.functions.get(p);
  if (i === void 0) throw n(o, `${s} is exported as "${p}", which is not a function declared at the top of this file`);
  if (r.assigned.has(p)) throw n(o, `${s} ("${p}") is assigned to elsewhere`);
  return i;
}

function ho(e, o, t) {
  let {names: r, refuse: n} = e.scanned, {functions: s, assigned: p} = r, i = t === "default" ? "the default export" : t;
  function a(c, h) {
    if (p.has(c)) throw n(h, `${i} ("${c}") is assigned to elsewhere`);
  }
  if (o.type === "ExportDefaultDeclaration" && t === "default") {
    let {declaration: c} = o;
    if (c.type === "FunctionDeclaration") {
      if (c.id !== null) a(c.id.name, c);
      return c;
    }
    if (c.type === "FunctionExpression" || c.type === "ArrowFunctionExpression") return c;
    let k = c.type === "Identifier" ? s.get(c.name) : void 0;
    if (k === void 0 || c.type !== "Identifier") throw n(c, `${i} is something other than a function declared at the top of this file`);
    return a(c.name, c), k;
  }
  if (o.type !== "ExportNamedDeclaration") return;
  let {declaration: f} = o;
  if (f?.type === "FunctionDeclaration" && f.id.name === t) return a(t, f), f;
  if (f?.type === "VariableDeclaration") {
    for (let c of f.declarations) if (c.id.type === "Identifier" && c.id.name === t) {
      let {init: E} = c;
      if (f.kind === "const" && (E?.type === "FunctionExpression" || E?.type === "ArrowFunctionExpression")) return E;
      throw n(c, `${i} is exported as something other than a const function`);
    }
  }
  if (no(f).includes(t)) throw n(o, `${i} is exported as something other than a function declared at the top of this file`);
  let y = o.specifiers.find(c => v(c.exported) === t);
  return y !== void 0 && o.source === null ? go(e, y, t) : void 0;
}

function Ee(e, o, t) {
  let {linked: r} = e, n = K(e), s = n.named.get(o), p = n.namespaces.get(o);
  if (p !== void 0) throw r.scanned.refuse(p, `${o === "default" ? "the default export" : o} is the namespace of "${String(p.source.value)}" (export * as), not a function`);
  let i = n.listed.get(o), a = s?.type === "ExportNamedDeclaration" ? s.source : null;
  if (i !== void 0 && a !== null && a !== void 0) return t(yo(e, String(a.value), o), v(i.local));
  if (i !== void 0) return {
    fn: go(r, i, o),
    linked: r
  };
  let y = s?.type === "ExportNamedDeclaration" ? s.declaration : void 0, g = y?.type === "VariableDeclaration";
  P(e, g ? y.declarations.length : 0);
  let c = s === void 0 ? void 0 : ho(r, s, o);
  return c === void 0 ? void 0 : {
    fn: c,
    linked: r
  };
}

var ko = (e, o, t) => {
  e.set(o, (e.get(o) ?? new Set).add(t));
};

function Eo(e) {
  let {scan: o, linked: t} = e, r = o.exportTables.get(t);
  if (r !== void 0) return r;
  let n = new Map, s = new Map, p = [], i = new Set([ t ]), a = [ t ];
  for (let u = a.pop(); u !== void 0; u = a.pop()) {
    let y = K({
      scan: o,
      linked: u
    }), g = u === t ? [] : [ ...y.named.keys(), ...y.namespaces.keys() ];
    if (P(e, y.stars.length + g.length + 1), y.foreign.length > 0) p.push(u);
    for (let c of g) if (c !== "default") n.set(c, (n.get(c) ?? new Set).add(u));
    for (let c of y.stars) if (ko(s, c.to, c), !i.has(c.to)) i.add(c.to), a.push(c.to);
  }
  let f = {
    givers: n,
    parents: s,
    wild: p
  };
  return o.exportTables.set(t, f), f;
}

function Wr(e, o) {
  let t = Eo(e), r = new Map, n = new Set, s = [ ...t.givers.get(o) ?? [], ...t.wild ];
  for (let p = s.pop(); p !== void 0; p = s.pop()) {
    let a = n.has(p) ? [] : [ ...t.parents.get(p) ?? [] ];
    n.add(p), P(e, a.length + 1);
    for (let f of a) ko(r, f.from, f), s.push(f.from);
  }
  return r;
}

function zr(e, o, t) {
  let {scan: r} = e, n = Wr(e, o), s = new Set;
  function p(i) {
    let a = {
      scan: r,
      linked: i
    }, f = K(a), u = s.has(i);
    if (s.add(i), P(e, 1), u) return;
    if (f.named.has(o)) return Ee(a, o, t);
    let y = f.namespaces.get(o), c = [ ...[ ...y === void 0 ? [] : [ y ], ...f.foreign ].map(E => ({
      statement: E,
      to: void 0
    })), ...n.get(i) ?? [] ].toSorted((E, k) => E.statement.start - k.statement.start), h;
    P(e, c.length);
    for (let {statement: E, to: k} of c) {
      let b = E.exported !== null && E.exported !== void 0 ? Ee(a, o, t) : p(k ?? yo(a, String(E.source.value), o).linked);
      if (b !== void 0 && h !== void 0 && b.fn !== h.fn) throw i.scanned.refuse(E, `${o} is given by more than one \`export *\` of this file, each from a different declaration: the engine binds neither`);
      h = b ?? h;
    }
    return h;
  }
  return p(e.linked);
}

function qr(e, o, t) {
  let r = K(e), n = r.namespaces.has(o);
  if (r.named.has(o) || o === "default" && n) return Ee(e, o, t);
  if (o === "default") return;
  let p = Eo(e), i = p.givers.get(o) ?? new Set, [a] = i;
  if (!(!n && p.wild.length === 0 && i.size <= 1)) return zr(e, o, t);
  if (a === void 0) return;
  return Ee({
    scan: e.scan,
    linked: a
  }, o, t);
}

function Qo(e, o) {
  let {scan: t, linked: r} = e, {exportsOpen: n, exportsUnderWay: s, exportsHeld: p} = t, i = t.exportsRead.get(r) ?? new Map, a = p.get(r) ?? new Map, f = n.get(r) ?? new Map, u = f.get(o), y = a.get(o);
  if (i.has(o)) return i.get(o);
  if (y !== void 0 || u !== void 0) return s.lowest = Math.min(s.lowest, u ?? 0), 
  y?.found;
  let {depth: g, lowest: c} = s;
  P(e, 1), s.depth = g + 1, s.lowest = g, n.set(r, f.set(o, g)), p.set(r, a), t.exportsRead.set(r, i);
  try {
    let h = qr(e, o, Qo);
    return s.lowest === g ? i.set(o, h) : a.set(o, {
      found: h
    }), h;
  } finally {
    if (s.lowest = Math.min(c, s.lowest), s.depth = g, f.delete(o), g === 0) n.clear(), 
    p.clear();
  }
}

var zg = [ "atom", "derive", "memberOf", "read", "update" ];

var Xr = Ne("./state-library.js-wy8y4843.txt");

var bAr = Xr;

function te(e, o) {
  let {callee: t} = o;
  if (t.type !== "Identifier" || o.optional) return;
  let r = e.imports.get(t.name), n = zg.find(p => p === r?.imported);
  return r?.specifier === Rut && n !== void 0 && e.names.shadowOf(t) === void 0 ? n : void 0;
}

function Yr(e, o) {
  for (let t of e.scanned.program.body) {
    let r = ho(e, t, o);
    if (r !== void 0) return r;
  }
  return;
}

function Jr(e, o, t = "") {
  let r = Yr(e, o);
  if (r !== void 0) return r;
  let {program: n, refuse: s} = e.scanned, p = o === "default" ? "the default export" : o, i = ky(e, o);
  if (i !== void 0) throw s(i.specifier, `${p} is re-exported from another file`);
  let a = n.body.find(f => f.type === "ExportAllDeclaration");
  if (a !== void 0) throw s(a, `${p} is not exported here by name; what \`export *\` re-exports from another file is not followed`);
  throw s(void 0, `no export named ${p}${t}`);
}

function nh(e, {names: o, refuse: t, what: r}) {
  let n = o.functions.get(e.name);
  if (n === void 0) return;
  if (o.assigned.has(e.name)) throw t(e, `${r} "${e.name}" is assigned to elsewhere`);
  let s = o.shadowOf(e);
  if (s !== void 0) throw t(s, `${r} "${e.name}" is declared more than once in this file: this declaration hides the top-level function where it is used`);
  return n;
}

function Zo(e, {refuse: o}) {
  if (e.type !== "ObjectPattern") throw o(e, "next is destructured other than into an object pattern of plain keys");
  for (let t of e.properties) {
    if (t.type === "RestElement") throw o(t, "a rest of next (it holds next.to)");
    if (!(!t.computed && t.key.type === "Identifier")) throw o(t, "a computed or quoted key destructured from next");
    if (t.key.type === "Identifier" && t.key.name === "to") throw o(t, `next.to is destructured from next; it is reached only as next.to(e, "<tier>") on the hook's own next`);
  }
}

function Qr(e, {refuse: o, parentOf: t, recordTo: r}) {
  if (e.optional) throw o(e, "next.to is reached through optional chaining");
  let n = t(e);
  if (!(n?.type === "CallExpression" && n.callee === e && !n.optional)) throw o(e, 'next.to is used as a value (bound, passed or read) instead of called as next.to(e, "<tier>")');
  let [p, i, a] = n.arguments;
  if (p === void 0 || p.type === "SpreadElement") throw o(n, 'next.to is called without (e, "<tier>") or with a spread');
  if (a !== void 0) throw o(a, 'next.to is called with more than (e, "<tier>")');
  if (!(i?.type === "Literal" && typeof i.value === "string")) throw o(i ?? n, "next.to names its tier other than as a string literal (a variable, a template or an expression)");
  let u = i.value;
  if (!SAr(u)) throw o(i, `next.to names "${String(u)}", which is not a tier a dispatch continues at (append, builtin, core)`);
  return r(u), n;
}

var ah = e => Jr(e, "register", " (export function register(on, options) {...})");

var He = e => e.arguments.find(o => o.type === "SpreadElement");

function mh(e, o, t) {
  let r = He(e);
  if (r !== void 0) throw o(r, `${t}() is called with a spread argument`);
  let [n, ...s] = e.arguments;
  if (n === void 0 || s.length === 0 || s.length > 2) throw o(e, `${t}() takes (event, hook) or (event, matcher, hook); got ${e.arguments.length} argument(s)`);
  let i = G(n);
  if (i === void 0) throw o(n, `the event name passed to ${t}() is not a string literal`);
  let a = yAr(i);
  if (a !== void 0) throw o(n, a);
  let f = C3e(i) || LUe(i) || dWn(i), u = xxs(i), y = u !== void 0 && !LUe(u) && !dWn(u);
  if (!f || y) throw o(n, `"${u ?? i}" is not an event`);
  let g = s.at(-1);
  if (g === void 0) throw o(e, `${t}() takes (event, hook); got no hook`);
  return {
    event: i,
    hook: g,
    matcher: s.length === 2 ? s[0] : void 0
  };
}

var Zr = "command.register";

var en = {
  VariableDeclarator: "bound to a name",
  AssignmentExpression: "assigned",
  SpreadElement: "spread",
  ReturnStatement: "returned",
  ArrowFunctionExpression: "returned",
  Property: "put in an object",
  ArrayExpression: "put in an array",
  ChainExpression: "optionally chained",
  TemplateLiteral: "put in a template"
};

function ot(e, o) {
  if (!(e.type === "CallExpression" || e.type === "NewExpression")) return en[e.type] ?? `used in a ${e.type}`;
  return e.callee === o ? "called" : "passed as an argument";
}

var De = "plugin";

var on = [ "env.get", "env.set" ];

var Mxs = e => on.includes(e);

var tn = [ "state.get", "state.set" ];

var pWn = e => tn.includes(e);

var tt = e => /^[\w$@-]+$/.test(e) ? e : JSON.stringify(e);

var Iut = e => `${tt(e.plugin)}.${tt(e.key)}`;

var QHt = e => e(() => !1, (o, t) => t(), o => o());

var ZHt = e => e.endsWith("@builtin") && e.indexOf("@") === e.length - 8 && e.length > 8;

var lPe = "core";

var $Gs = e => e.withheldBy?.at(-1);

var fvo = (e, o) => `$.${e}: removed by plugin \`${o}\``;

var wAr = e => [ e, ...e.surfaceModules ?? [] ].flatMap(o => [ {
  file: o.modulePath,
  source: o.source
}, ...o.linked ]);

function nn(e, o, t) {
  let [r] = e.arguments, s = r !== void 0 && r.type !== "SpreadElement" ? G(r) : void 0;
  if (s === void 0) throw t(r ?? e, `$.${o} takes a literal name as its first argument, so the variables a module reads and writes can be listed (got ${Z(r)})`);
  return s;
}

var rt = (e, o) => e?.type === "MemberExpression" && e.object === o && !e.computed && !e.optional;

var nt = (e, o) => o.writtenShadowOf(e) === void 0 || o.writtenShadowOf(e) !== o.shadowOf(e);

var be = (e, o) => o === void 0 ? void 0 : {
  at: o,
  cause: e
};

var Xk = Object.freeze({
  declared: "is declared here too, so the value it names cannot be listed. Declare it once",
  assigned: "is assigned here, so the value it names cannot be listed. Leave it unassigned, or write the reference at the call",
  doubted: "may be assigned here, where the engine can bind the name apart from the text, so the value it names cannot be listed. Rename one of the two",
  looped: "is spelled in a loop's head here, and the engine can write such a target past a nearer name of that spelling, so the value it names cannot be listed. Rename one of the two",
  early: "is read here as the file loads, above its declaration, where it is still undefined, so the value it names cannot be listed. Declare it above this read"
});

function sn(e, {names: o, climbs: t}) {
  let {name: r} = e, n = (o.declared.get(r) ?? []).filter(p => {
    let i = Pe(p, t);
    return typeof i !== "string" && i.type === "Program";
  }), s = (o.assignedAt.get(r) ?? []).filter(p => nt(p, o));
  return be("declared", n.includes(e) ? n[1] : e) ?? be("assigned", s.find(p => o.writtenShadowOf(p) === void 0)) ?? be("doubted", s[0]) ?? be("looped", o.loopAssigned.get(r)?.[0]) ?? be("early", o.read.get(r)?.find(p => p.start < e.start && t.deferrerOf(p) === void 0 && nt(p, o)));
}

function bo(e, {consts: o, names: t, climbs: r, program: n, refuse: s}) {
  let p = t.shadowOf(e);
  if (p !== t.writtenShadowOf(e)) throw s(e, `"${e.name}" is read among the parameters of a function whose body declares that name again: the engine may bind such a read apart from the text, so the value it names cannot be listed. Rename one of the two`);
  let i = p === void 0 ? n : Pe(p, r);
  if (typeof i === "string") return;
  let a = o.inits(i).get(e.name), f = a?.isVar ? o.rebound(a.id) : void 0;
  if (f !== void 0) throw s(f.at, `the var ${e.name}, read for a $.state reference, ` + Xk[f.cause]);
  return a === void 0 ? void 0 : {
    init: a.init,
    scope: i
  };
}

function an(e) {
  return e.type === "Program" || e.type === "BlockStatement" || e.type === "StaticBlock" ? e.body : [];
}

function fn(e) {
  let o = new Map;
  for (let t of an(e)) {
    let r = t.type === "ExportNamedDeclaration", n = r ? t.declaration : t, s = n?.type === "VariableDeclaration" && n.kind === "var" && e.type === "Program" && !r;
    if (!(n?.type === "VariableDeclaration" && (n.kind === "const" || s))) continue;
    for (let {id: i, init: a} of n.declarations) if (i.type === "Identifier" && a) o.set(i.name, {
      id: i,
      init: a,
      isVar: s
    });
  }
  return o;
}

function mn(e) {
  let o = new Map;
  for (let t of e.body) {
    let r = t.type === "ExportDefaultDeclaration", n = t.type === "ExportNamedDeclaration", s = n ? t.declaration : void 0, p = s?.type === "VariableDeclaration", i = [ ...r ? [ t.declaration ] : [], ...p ? s.declarations.flatMap(a => F(a.id)) : [ s?.id ], ...n ? t.specifiers.map(a => a.local) : [] ];
    for (let a of i) if (a?.type === "Identifier" && !o.has(a.name) && Yo(t, a.name)) o.set(a.name, t);
  }
  return o;
}

function wo(e, o, t) {
  let r = o(e);
  if (r?.type === "CallExpression") {
    let n = t.library.get(r), s = n === "read" || n === "update", p = n === "atom" || n === "memberOf" || t.state.has(r);
    return r.arguments[s ? 1 : 0] === e && (s || p);
  }
  if (r?.type === "ArrayExpression") {
    let n = o(r);
    return n?.type === "CallExpression" && t.library.get(n) === "derive" && n.arguments[0] === r;
  }
  return r?.type === "SpreadElement" && r.argument === e && o(r)?.type === "ObjectExpression";
}

var ln = ({placed: e, starts: o}, t) => e.slice(Po(o, t.start), Po(o, t.end)).toSorted((r, n) => r.at - n.at);

function dn({read: e, binding: o}, {consts: t, names: r, parentOf: n, refuse: s}, p) {
  let {scope: i} = o, {name: a} = e, f = r.writtenShadowOf(e), u = i.type === "Program" ? t.exporting.get(a) : void 0;
  if (u !== void 0) return u;
  let y = (t.counted(a).owned.get(f) ?? []).filter(k => k.use.start >= i.start && k.use.start < i.end);
  if (!y.some(k => k.use === e)) throw s(e, `the scan lost track of this read of "${a}" and cannot show that every use of the const is a plain read. This is a fault of the scan, not of the module, which is refused rather than passed`);
  let c = y.find(k => !wo(k.use, n, p)), h = ln(t.apart(a)(p), i).at(0);
  return h !== void 0 && (c === void 0 || h.at < c.at) ? h.use : c?.use;
}

function cn(e, o) {
  let t = e.map((r, n) => ({
    use: r,
    at: n
  }));
  return {
    owned: Map.groupBy(t, r => o.writtenShadowOf(r.use)),
    doubted: t.filter(r => o.writtenShadowOf(r.use) !== o.shadowOf(r.use))
  };
}

function un(e) {
  let o = e.toSorted((t, r) => t.use.start - r.use.start);
  return {
    placed: o,
    starts: o.map(t => t.use.start)
  };
}

function xn(e, o, t) {
  let r = lo(n => cn(o.read.get(n) ?? [], o));
  return {
    inits: ox(fn),
    exporting: mn(e),
    rebound: lo(n => sn(n, {
      names: o,
      climbs: t
    })),
    counted: r,
    apart: lo(n => lo(s => un(r(n).doubted.filter(p => !wo(p.use, t.parentOf, s)))))
  };
}

function So(e, o, t = new Set) {
  if (e.type === "Identifier") {
    let n = t.has(e.name) ? void 0 : bo(e, o), s = n === void 0 ? void 0 : So(n.init, o, new Set([ ...t, e.name ]));
    return n !== void 0 && s !== void 0 ? {
      ...s,
      consts: [ {
        read: e,
        binding: n
      }, ...s.consts ]
    } : void 0;
  }
  if (e.type !== "ObjectExpression") return;
  let r = {
    consts: []
  };
  for (let n of e.properties) {
    if (n.type === "SpreadElement") {
      let p = So(n.argument, o, t);
      if (p === void 0) return;
      r = {
        ...r,
        ...p,
        consts: [ ...r.consts, ...p.consts ]
      };
      continue;
    }
    let s = H(n);
    if (s === void 0 || n.kind !== "init") return;
    if (s === "plugin" || s === "key") {
      let p = G(n.value);
      if (p === void 0) return;
      r = {
        ...r,
        [s]: p
      };
    }
  }
  return r;
}

function re(e, o, t = new Set) {
  if (e.type === "Identifier" && t.has(e.name)) return;
  let n = e.type === "Identifier" ? bo(e, o.scanned) : void 0;
  if (n !== void 0 && n.init.type !== "ObjectExpression" && e.type === "Identifier") return re(n.init, o, new Set([ ...t, e.name ]));
  if (e.type !== "CallExpression") {
    let y = So(e, o.scanned);
    return y === void 0 ? void 0 : [ y ];
  }
  let p = o.libraryHelper(e), [i] = e.arguments;
  if ((p === "atom" || p === "memberOf") && i !== void 0 && i.type !== "SpreadElement") return re(i, o, t);
  if (p !== "derive" || i?.type !== "ArrayExpression") return;
  let f = i.elements.map(y => y !== null && y.type !== "SpreadElement" ? re(y, o, t) : void 0);
  return f.every(y => y !== void 0) ? f.flat() : void 0;
}

function yn(e, o, {refuse: t, scanned: r, libraryHelper: n}) {
  let [s] = e.arguments, p = s !== void 0 && s.type !== "SpreadElement", [i, ...a] = (p ? re(s, {
    scanned: r,
    libraryHelper: n
  }) : void 0) ?? [], {plugin: f, key: u, consts: y = []} = i ?? {};
  if (!(a.length === 0 && f !== void 0 && u !== void 0)) throw t(s ?? e, `$.${o} takes a reference whose plugin and key are string literals ({ plugin: "p", key: "k" }, written there or in a const of this file; only id may be computed), so the values a module reads and writes can be listed (got ${Z(s)})`);
  return {
    call: e,
    spelling: o,
    named: {
      plugin: f,
      key: u
    },
    consts: y
  };
}

function st(e, o, {refuse: t, parentOf: r, scanned: n, record: s, recordEnv: p, recordCommand: i, recordState: a, libraryHelper: f, bind: u, follow: y}) {
  let g = e, c = r(g);
  while (c?.type === "AwaitExpression") g = c, c = r(g);
  if (c === void 0) throw t(e, "$ stands alone");
  if (c.type === "MemberExpression" && c.object === g) {
    if (c.computed || c.optional) throw t(c, "a computed or optional member access on $");
    let E = c.property;
    if (E.type !== "Identifier") throw t(c, "a member access on $ that is not a name");
    if (E.name === De) {
      let se = r(c);
      if (rt(se, c) && se.property.type === "Identifier") return;
      throw t(c, `$.${De} is used other than as $.${De}.name or $.${De}.root`);
    }
    let k = r(c);
    if (!rt(k, c) || k.property.type !== "Identifier") throw t(c, `$.${E.name} is used as a value (a noun of $ bound, passed or read)`);
    let b = r(k);
    if (b?.type !== "CallExpression" || b.callee !== k || b.optional) throw t(k, `$.${E.name}.${k.property.name} is used as a value (an event of $ bound, passed or read) instead of called`);
    let N = `${E.name}.${k.property.name}`;
    if (s(N), Mxs(N)) p(N, nn(b, N, t));
    if (N === Zr) i(b);
    if (pWn(N)) a(yn(b, N, {
      refuse: t,
      scanned: n,
      libraryHelper: f
    }));
    return;
  }
  if (c.type === "CallExpression" && e.type === "Identifier") {
    let E = o === "parameter" && g === e && c.callee !== g && !c.optional && c.callee.type === "Identifier", k = E ? f(c) : void 0;
    if ((k === "read" || k === "update") && c.arguments[0] === e) return;
    if (k !== void 0) throw t(e, `$ is passed to the state library's ${k} other than as the first argument of read($, source) or update($, target, fn)`);
    if (E) {
      y(c, e);
      return;
    }
  }
  if (o === "parameter") throw t(g, `$ itself is ${ot(c, g)} (bound, passed, spread, returned or read)`);
  if (c.type === "SpreadElement") {
    if (r(c)?.type === "ObjectExpression") return;
    throw t(c, "the value of next(e) at engine.create is spread other than into an object literal");
  }
  if (c.type === "ReturnStatement" || c.type === "ArrowFunctionExpression" && c.body === g) return;
  if (c.type === "VariableDeclarator" && c.init === g) {
    let E = r(c);
    if (E?.type !== "VariableDeclaration" || E.kind !== "const") throw t(c, "the value of next(e) at engine.create is bound with let or var (const only)");
    let {id: w} = c;
    if (w.type === "Identifier") {
      u.dollar(w);
      return;
    }
    if (w.type === "ObjectPattern") {
      for (let b of w.properties) if (b.type === "RestElement") {
        if (b.argument.type !== "Identifier") throw t(b, "a rest of next(e) at engine.create that is not a plain name");
        u.dollar(b.argument);
      } else if (b.value.type === "Identifier" && !b.computed) u.unread(b.value); else throw t(b, "a destructuring of next(e) at engine.create with a nested pattern, a default or a computed key");
      return;
    }
    throw t(w, "the value of next(e) at engine.create is destructured into an array");
  }
  throw t(g, `the value of next(e) at engine.create is ${ot(c, g)}`);
}

var gn = "engine.create";

function No(e, o, t) {
  let {refuse: r} = t;
  for (let {name: n, declaration: s, origin: p} of o) {
    for (let i of Wo(e, n)) if (i !== s) throw r(i, `"${n}" (which holds $) is declared again (shadowed)`);
    for (let i of q(e, n)) st(i, p, t);
  }
}

function wj(e, o, t) {
  let {refuse: r} = t;
  if (e.type !== "ArrowFunctionExpression") for (let i of q(e, "arguments", "own")) throw r(i, '"arguments" is read inside a function handed $ (it holds $)');
  let n = e.params.at(-1);
  if (n?.type === "RestElement" && o >= e.params.length - 1) throw r(n, "$ is passed into a rest parameter");
  let p = e.params[o];
  if (p === void 0) return;
  if (p.type !== "Identifier") throw r(p, "the parameter that receives $ is not a plain name (a pattern or a default)");
  No(e, [ {
    name: p.name,
    declaration: p,
    origin: "parameter"
  } ], {
    ...t,
    bind: {
      dollar: i => {
        throw r(i, "next(e) is bound outside an engine.create hook");
      },
      unread: i => {
        throw r(i, "next(e) is bound outside an engine.create hook");
      }
    }
  });
}

function hn({fn: e, next: o, engineCreate: t}, r) {
  let {refuse: n, parentOf: s} = r;
  if (o.type !== "Identifier") {
    if (t) throw n(o, "the third parameter of an engine.create hook (next) is not a plain name");
    Zo(o, r);
    return;
  }
  for (let p of Wo(e, o.name)) if (p !== o) throw n(p, `"${o.name}" (the continuation) is declared again (shadowed); rename the inner binding`);
  for (let p of q(e, o.name)) {
    let i = s(p);
    if (i?.type === "CallExpression" && i.callee === p && !i.optional) {
      if (t) st(i, "next", r);
      continue;
    }
    if (i?.type === "MemberExpression" && i.object === p) {
      if (i.computed) {
        if (i.property.type === "Literal" && typeof i.property.value === "string" && i.property.value !== "to") continue;
        throw n(i, `a computed member access on "${o.name}" (it may reach next.to)`);
      }
      if (i.property.type === "Identifier" && i.property.name === "to") {
        let u = Qr(i, r);
        if (t) st(u, "next", r);
      }
      continue;
    }
    if (t) throw n(p, `"${o.name}" is passed on or bound inside an engine.create hook (its value is $)`);
    if (i?.type === "VariableDeclarator" && i.init === p) {
      if (i.id.type === "Identifier") throw n(i, `"${o.name}" (the hook's next) is bound to another name; next.to is reached only on the hook's own next`);
      Zo(i.id, r);
      continue;
    }
    if (i?.type === "AssignmentExpression" && i.right === p) throw n(i, `"${o.name}" (the hook's next) is assigned to another name; next.to is reached only on the hook's own next`);
  }
}

function Tj(e, o, t) {
  let {refuse: r} = t, [n, s, p] = e.params;
  if (e.type !== "ArrowFunctionExpression") for (let u of q(e, "arguments", "own")) throw r(u, '"arguments" is read inside a hook (it holds $)');
  let i = [];
  if (n !== void 0) {
    if (n.type !== "Identifier") throw r(n, "the first parameter of a hook ($) is not a plain name (a pattern, a rest or a default)");
    i.push({
      name: n.name,
      declaration: n,
      origin: "parameter"
    });
  }
  for (let u of [ n, s, p ]) if (u?.type === "RestElement") throw r(u, "a hook takes $, e or next into a rest parameter (it would hold next)");
  for (let u of e.params) RH(u, ({node: y}) => {
    if (y.type === "AssignmentPattern") throw r(y, "a parameter of a hook has a default value");
  });
  let f = {
    ...t,
    bind: {
      dollar: u => {
        i.push({
          name: u.name,
          declaration: u,
          origin: "next"
        });
      },
      unread: u => {
        for (let y of q(e, u.name)) throw r(y, `"${u.name}", destructured from $ at engine.create, is read (a noun bound to a name); leave it unread or call it as $.noun.event(...)`);
      }
    }
  };
  if (p !== void 0) hn({
    fn: e,
    next: p,
    engineCreate: o
  }, f);
  No(e, i, f);
}

function we({scan: e, linked: o}, t, r) {
  let {scanned: n} = o, s = nh(t, {
    names: n.names,
    refuse: n.refuse,
    what: r
  });
  if (s !== void 0) return {
    fn: s,
    linked: o
  };
  let p = n.imports.get(t.name);
  if (p === void 0) throw n.refuse(t, `${r} "${t.name}" is not a function declared at the top of this file (a function declaration, or a const bound to a function), nor imported from one of the module's own files`);
  if (p.imported === void 0) throw n.refuse(t, `${r} "${t.name}" is a namespace import, not a function`);
  if (n.names.assigned.has(t.name)) throw n.refuse(t, `${r} "${t.name}" is assigned to elsewhere`);
  let i = n.names.shadowOf(t);
  if (i !== void 0) throw n.refuse(i, `${r} "${t.name}" is declared again in this file, shadowing the import`);
  let a = o.links.get(p.specifier);
  if (a === void 0) throw n.refuse(t, `${r} "${t.name}" is imported from "${p.specifier}", which is not a file of the module's own`);
  let f = Qo({
    scan: e,
    linked: X(e, a)
  }, p.imported);
  if (f === void 0) throw n.refuse(t, `${r} "${t.name}" is imported from "${p.specifier}", which exports no function of that name: neither its own nor one it re-exports from a file of the module's own`);
  return f;
}

function kn(e) {
  let [o] = e.arguments, t = o?.type === "ObjectExpression" ? o.properties : [], r = t.some(uo), [n, s] = t.filter(f => he(f, "name")), i = !r && s === void 0 && n?.type === "Property" ? n.value : void 0, a = i?.type === "Literal" ? i.value : void 0;
  return typeof a === "string" ? a : void 0;
}

function To(e, o) {
  let t = kn(o);
  if (t !== void 0) e.registeredCommands.add(t);
}

function Ij(e) {
  let o = new Set, t = {
    state: e.stateCalls,
    library: e.libraryCalls
  };
  for (let {followed: r, spelling: n, scanned: s} of e.stateConsts) {
    let {init: p} = r.binding;
    if (o.has(p)) continue;
    o.add(p);
    let i = dn(r, s, t);
    if (i !== void 0) throw s.refuse(i, `the const ${r.read.name}, read as the reference of a $.${n} call, is also written through, handed on or exported here, and const does not freeze: what it holds at the call could not be listed. Use it only as the reference of $.state calls, as a source of the state library's functions imported from "claude-code", and in a spread into an object literal ({ ...${r.read.name}, id }), or write the reference at the call`);
  }
}

function Fj(e) {
  for (let {scanned: o} of e.graph.files.values()) RH(o.program, ({node: t}) => {
    let r = t.type === "CallExpression", n = r ? te(o, t) : void 0;
    if (n === void 0 || !r) return;
    e.libraryCalls.set(t, n);
    let s = n === "read" || n === "update", p = s ? t.arguments[1] : t, a = p !== void 0 && p.type !== "SpreadElement" ? re(p, {
      scanned: o,
      libraryHelper: y => te(o, y)
    }) : void 0, f = a?.every(({plugin: y, key: g}) => y !== void 0 && g !== void 0);
    if (a === void 0 || f !== !0) throw o.refuse(p ?? t, `the state library's ${n} takes a source the scan can read: a reference whose plugin and key are string literals, or what atom, memberOf or derive (imported from "claude-code") made of one, written there or in a const of this file, so the values a module reads and writes can be listed`);
    let u = n === "update" ? "state.set" : "state.get";
    for (let {plugin: y = "", key: g = "", consts: c} of a) {
      let h = `${y}\0${g}`;
      if (e.stateReads.set(h, {
        plugin: y,
        key: g
      }), n === "update") e.stateWrites.set(h, {
        plugin: y,
        key: g
      });
      for (let E of c) e.stateConsts.add({
        followed: E,
        spelling: u,
        scanned: o
      });
    }
    if (s) e.calls.add("state.get");
    if (n === "update") e.calls.add("state.set");
  });
}

function pt(e, {call: o, spelling: t, named: r, consts: n}, s) {
  let p = `${r.plugin}\0${r.key}`;
  (t === "state.get" ? e.stateReads : e.stateWrites).set(p, r), e.stateCalls.add(o);
  for (let a of n) e.stateConsts.add({
    followed: a,
    spelling: t,
    scanned: s
  });
}

function Hj(e) {
  let o = e.stateReads.size > 0 || e.stateWrites.size > 0, t = r => [ ...r.entries() ].sort(([n], [s]) => n < s ? -1 : n > s ? 1 : 0).map(([, n]) => n);
  return o ? {
    reads: t(e.stateReads),
    writes: t(e.stateWrites)
  } : void 0;
}

function at(e, o = e.linked) {
  let {scan: t, linked: r} = e, {scanned: n} = r, {refuse: s} = n, p = (i, a) => {
    let {callee: f} = i;
    if (f.type !== "Identifier") throw s(f, "$ is passed to something other than a named function");
    let u = He(i);
    if (u !== void 0) throw s(u, "$ is passed in a call with a spread argument");
    if (!(n.names.functions.has(f.name) || n.imports.has(f.name))) throw s(f, `$ is passed to "${f.name}", which is not a function declared at the top of this file (a function declaration, or a const bound to one), nor one imported from a file of the module's own; $ is followed nowhere else`);
    if (n.imports.has(f.name) && n.names.shadowOf(f) !== void 0) throw s(f, `$ is passed to "${f.name}", a name declared again over this call: the engine may not bind it to the import of that name. Rename one of the two`);
    let {fn: c, linked: h} = we(e, f, "the function handed $"), E = h.scanned;
    if (c.type !== "FunctionDeclaration" && (h !== o || r !== o)) throw s(f, `$ is passed to "${f.name}", a name bound to a function expression, outside the hook's own file: past an import $ is followed only into a function declaration (function ${f.name}($) { ... }), which a bundle of the module keeps as written`);
    let w = i.arguments.indexOf(a), b = t.helpers.get(c) ?? new Set;
    if (b.has(w)) return;
    b.add(w), t.helpers.set(c, b), wj(c, w, {
      refuse: E.refuse,
      parentOf: E.parentOf,
      scanned: E,
      record: S => {
        t.calls.add(S), t.via.set(S, (t.via.get(S) ?? new Set).add(f.name));
      },
      recordTo: S => {
        t.nextTo.add(S);
      },
      recordEnv: (S, N) => {
        xo(t, S).add(N);
      },
      recordCommand: S => {
        To(t, S);
      },
      recordState: S => {
        pt(t, S, E);
      },
      libraryHelper: S => te(E, S),
      follow: h === r ? p : at({
        scan: t,
        linked: h
      }, o)
    });
  };
  return p;
}

import { createHash as $j } from "crypto";

var Se = e => `${e.length}:${e}`;

function Lj(e) {
  let o = $j("sha256").update(Se(e.root));
  for (let [t, {compiled: r, links: n}] of e.files) {
    o.update(Se(t) + Se(r));
    for (let [s, p] of n) o.update(Se(s) + Se(p));
  }
  return o.digest("hex");
}

function jn(e) {
  return {
    argumentsRead: e.type === "ArrowFunctionExpression" ? [] : q(e, "arguments", "own"),
    names: zo(e)
  };
}

function En(e, o) {
  let t = e.holderNames.get(o);
  if (t !== void 0) return t;
  let r = jn(o);
  return e.holderNames.set(o, r), r;
}

function vo(e, {fn: o, what: t, event: r, engineCreate: n}) {
  let {scan: s, linked: p} = e, i = o.type === "FunctionExpression" || o.type === "ArrowFunctionExpression", a = o.type === "Identifier", f = i ? {
    fn: o,
    linked: p
  } : a ? we(e, o, t) : void 0;
  if (f === void 0) throw p.scanned.refuse(o, `${t} is not a function literal or the name of one`);
  let u = f.fn.async === !0 && f.fn.generator === !0, y = mnn(r);
  if (y && !u) throw p.scanned.refuse(o, `${t} on "${r}" is not an async generator: ${r} streams, so it takes async function* ($, e, next) { ... }, which yields the chunks and returns the result`);
  if (!y && u) throw p.scanned.refuse(o, `${t} on "${r}" is an async generator: only a streaming event named as itself (${hAr.join(", ")}) takes one; this pattern takes ($, e, next) => result`);
  s.registered.set(f.fn, {
    linked: f.linked,
    engineCreate: s.registered.get(f.fn)?.engineCreate === !0 || n
  });
}

function bn(e, {call: o, event: t, onName: r, holder: n}) {
  let {scanned: s} = e.linked, {parentOf: p, refuse: i} = s, a = p(o), f = `${r}("${t}")`;
  if (a?.type !== "MemberExpression" || a.object !== o) {
    Ae({
      call: o,
      scanned: s,
      what: f,
      holder: n
    });
    return;
  }
  if (!(!a.computed && !a.optional && a.property.type === "Identifier" && a.property.name === "catch")) throw i(a, `${f} is read for something other than .catch; a registration has .catch(handler) and nothing else`);
  let y = p(a);
  if (!(y?.type === "CallExpression" && y.callee === a && !y.optional)) throw i(a, `${f}.catch is read without being called`);
  if (t === gn) throw i(y, `${f}.catch(): an engine.create hook has no budget and its failure fails the load; .catch does not apply`);
  let c = He(y);
  if (c !== void 0) throw i(c, `${f}.catch() is called with a spread argument`);
  let [h, ...E] = y.arguments;
  if (h === void 0 || E.length > 0) throw i(y, `${f}.catch() takes (handler); got ${y.arguments.length} argument(s)`);
  vo(e, {
    fn: h,
    what: "the .catch handler",
    event: t,
    engineCreate: !1
  });
  let k = p(y);
  if (k?.type === "MemberExpression" && k.object === y) throw i(k, `${f}.catch(...) is followed by another member; a registration takes one .catch`);
  Ae({
    call: y,
    scanned: s,
    what: `${f}.catch()`,
    holder: n
  });
}

function wn(e, o) {
  let {call: t, onName: r, holder: n, position: s} = o, {scan: p, linked: i} = e, {scanned: a} = i, {event: f, hook: u, matcher: y} = mh(t, a.refuse, r), g = y !== void 0, c = C3e(f), h = p.unmatched.get(f);
  if (h !== void 0 && (!g || c)) throw a.refuse(t, `${r}("${f}") is registered twice${g ? "" : " without a matcher"}; the first is at ${h}`);
  if (!g || c) p.unmatched.set(f, `${a.file}:${t.loc?.start.line ?? "unknown line"}`);
  p.hooks.add(f), p.registrations.set(t, {
    event: f,
    matcher: y,
    linked: i,
    holder: n,
    position: s
  }), vo(e, {
    fn: u,
    what: "the hook",
    event: f,
    engineCreate: f === gn
  }), bn(e, {
    ...o,
    event: f
  });
}

function ft(e, o, t) {
  let {scan: r, linked: n} = e, s = r.holders.get(o) ?? new Set;
  if (s.has(t)) return;
  s.add(t), r.holders.set(o, s), r.holderFiles.set(o, n);
  let {scanned: p} = n, {refuse: i, parentOf: a} = p, f = En(r, o);
  for (let g of f.argumentsRead) throw i(g, '"arguments" is read inside a function that holds on');
  let u = o.params[t];
  if (u === void 0) {
    let g = o.params.at(-1);
    if (g?.type === "RestElement") throw i(g, "on is passed into a rest parameter");
    return;
  }
  if (u.type !== "Identifier") throw i(u, "the parameter that receives on is not a plain name");
  let y = u.name;
  for (let g of f.names.declared.get(y) ?? []) if (g !== u) throw i(g, `"${y}" is declared again (shadowed)`);
  for (let g of f.names.read.get(y) ?? []) {
    let c = a(g);
    if (c?.type !== "CallExpression" || c.optional) throw i(g, `"${y}" is used other than as a call or an argument to a function of the module's own (bound, spread or read)`);
    if (c.callee === g) {
      wn(e, {
        call: c,
        onName: y,
        holder: o,
        position: t
      });
      continue;
    }
    if (c.callee.type !== "Identifier") throw i(c.callee, `"${y}" is passed to something other than a function named at the top of this file or imported from one of the module's own files`);
    let h = He(c);
    if (h !== void 0) throw i(h, `"${y}" is passed in a call with a spread argument`);
    Ae({
      call: c,
      scanned: p,
      what: `${c.callee.name}(${y})`,
      holder: o
    });
    let E = we(e, c.callee, "the callee"), k = c.arguments.indexOf(g);
    r.holderCalls.add({
      call: c,
      callee: E.fn,
      position: k,
      caller: o,
      callerPosition: t
    }), ft({
      scan: r,
      linked: E.linked
    }, E.fn, k);
  }
}

var Sn = (e, o, t) => ({
  graph: e,
  pluginName: o,
  register: t,
  hooks: new Set,
  registrations: new Map,
  holderCalls: new Set,
  holderFiles: new Map,
  unmatched: new Map,
  calls: new Set,
  nextTo: new Set,
  envReads: new Set,
  envWrites: new Set,
  registeredCommands: new Set,
  stateReads: new Map,
  stateWrites: new Map,
  stateCalls: new Set,
  libraryCalls: new Map,
  stateConsts: new Set,
  direct: new Set,
  via: new Map,
  helpers: new Map,
  exportsRead: new Map,
  exportsOpen: new Map,
  exportsUnderWay: {
    depth: 0,
    lowest: 0
  },
  exportsHeld: new Map,
  exportSteps: {
    taken: 0
  },
  ownExports: new Map,
  exportTables: new Map,
  registered: new Map,
  holders: new Map,
  holderNames: new Map
});

function mt(e, o) {
  let t = X({
    graph: e,
    pluginName: o
  }, e.entry), r = ah(t), n = Sn(e, o, r);
  return ft({
    scan: n,
    linked: t
  }, r, 0), n;
}

function Ce(e, o) {
  let t = mt(e, o);
  for (let [r, {linked: n, engineCreate: s}] of t.registered) Tj(r, s, {
    refuse: n.scanned.refuse,
    parentOf: n.scanned.parentOf,
    scanned: n.scanned,
    record: p => {
      t.calls.add(p), t.direct.add(p);
    },
    recordTo: p => {
      t.nextTo.add(p);
    },
    recordEnv: (p, i) => {
      xo(t, p).add(i);
    },
    recordCommand: p => {
      To(t, p);
    },
    recordState: p => {
      pt(t, p, n.scanned);
    },
    libraryHelper: p => te(n.scanned, p),
    follow: at({
      scan: t,
      linked: n
    })
  });
  return Fj(t), Ij(t), t;
}

function eE(e, o) {
  let {via: t, direct: r} = Ce(e, o), n = new Map;
  for (let [s, p] of t) if (!r.has(s)) n.set(s, [ ...p ].sort());
  return n;
}

import { relative as cE } from "path";

var Ao = (e, o, t) => new Ie(`${e}: ${o} does not parse: ${l(t)}`);

function Hxs(e, o, t) {
  try {
    return iWn(e, o);
  } catch (r) {
    throw Ao(t, e, r);
  }
}

var Nn = (e, o) => $o(e) === "js" ? void 0 : o.split(`\n`);

function Dxs(e) {
  let o;
  if (RH(e.program, ({node: t}) => {
    if (t.type === "ImportExpression" && (o === void 0 || t.start < o.start)) o = t;
  }), o === void 0) return;
  return e.refuse(o, 'a dynamic import(); a hooks module imports its own files with an import declaration, as in import { name } from "./file.js"');
}

function Tn(e) {
  let o = new Map;
  for (let t of e.body) {
    if (t.type !== "ImportDeclaration") continue;
    let r = String(t.source.value);
    for (let n of t.specifiers) {
      let s;
      if (n.type === "ImportSpecifier") {
        let p = n.imported;
        s = p.type === "Identifier" ? p.name : String(p.value);
      } else s = n.type === "ImportDefaultSpecifier" ? "default" : void 0;
      o.set(n.local.name, {
        specifier: r,
        imported: s
      });
    }
  }
  return o;
}

function vn(e) {
  let o = new Set;
  for (let t of e.body) {
    let r = t.type === "ImportDeclaration" || t.type === "ExportAllDeclaration", n = t.type === "ExportNamedDeclaration", s = r ? t.source : n ? t.source ?? null : null;
    if (s !== null) o.add(String(s.value));
  }
  return [ ...o ];
}

var lt = 2e3;

class Oo extends Ie {
  name="ScanRefusal";
  plugin;
  file;
  line;
  excerpt;
  construct;
  constructor({plugin: e, file: o, line: t, excerpt: r, construct: n}) {
    super(`${e}: ${o}${t === void 0 ? "" : r === void 0 ? `:${t}` : `, compiled line ${t} \`${r}\``}: ${n}; $ is always spelled $.noun.event(...) at the call site, on is always on("<event>", hook), and next.to always next.to(e, "<tier>")`);
    this.plugin = e, this.file = o, this.line = t, this.excerpt = r, this.construct = n;
  }
}

var An = (e, o) => t => class extends t {
  enterScope=r => {
    if (t.prototype.enterScope.call(this, r), this.scopeStack.length > e + 1) throw o(this.lastTokStartLoc.line);
  };
};

function Lxs(e, o, t) {
  let r = Nn(e, o);
  function n(u, y) {
    let g = typeof u === "number" ? u : u?.loc?.start.line, h = r === void 0 || g === void 0 ? void 0 : r[g - 1]?.trim() ?? "", E = h !== void 0 && h.length > Vt;
    return new Oo({
      plugin: t,
      file: e,
      line: g,
      excerpt: E ? `${ne(h, Vt)}...` : h,
      construct: y
    });
  }
  let {Parser: s} = cvo(), p;
  try {
    p = s.extend(An(lt, u => n(u, `code nested too deep to scan: more than ${lt} scopes (functions, blocks, loops) open inside one another`))).parse(o, {
      ecmaVersion: "latest",
      sourceType: "module",
      locations: !0
    });
  } catch (u) {
    if (u instanceof Oo) throw u;
    throw u instanceof RangeError ? n(void 0, `code nested too deep to scan (the parser stopped: ${u.message})`) : Ao(t, e, u);
  }
  let i = nx(p), a = py(u => i.get(u)), f = hy(p, a);
  return {
    file: e,
    program: p,
    names: f,
    consts: xn(p, f, a),
    parentOf: a.parentOf,
    climbs: a,
    refuse: n,
    imports: Tn(p),
    specifiers: vn(p)
  };
}

function dE(e) {
  let o;
  return RH(e, ({node: t}) => {
    if (o === void 0 && (t.type === "AwaitExpression" || t.type === "ForOfStatement" && t.await || t.type === "VariableDeclaration" && t.kind === "await using")) o = t;
  }, t => t.type === "FunctionDeclaration" || t.type === "FunctionExpression" || t.type === "ArrowFunctionExpression"), 
  o;
}

async function Rn(e, o, t) {
  let r = new Map, n = new Map([ [ e.file, e.source ] ]), s = new Map(e.real === void 0 ? [] : [ [ e.real, e.file ] ]), p = {
    known: n,
    reals: s
  }, i = Buffer.byteLength(e.source, "utf8"), a = [ e ];
  while (a.length > 0) {
    let f = [], u = 0;
    for (let {file: g, source: c} of a) {
      if (r.has(g)) continue;
      if (u > 0 && u % Lo === 0) await lS();
      if (u += 1, Buffer.byteLength(c, "utf8") > mAr) throw _o(o, g);
      let k = Hxs(g, c, o), w = Lxs(g, k, o), b = Dxs(w);
      if (b !== void 0) throw b;
      let S = dE(w.program);
      if (g !== e.file && S !== void 0) throw w.refuse(S, "a top-level await in a file the entry imports; the environment links the entry alone as an async module");
      let se = new Map;
      for (let pe of w.specifiers) {
        if (pe === Rut) continue;
        if (!lvo(pe)) throw Cxs(o, pe, cE(e.root, g) || g);
        f.push({
          importer: g,
          specifier: pe,
          links: se
        });
      }
      r.set(g, {
        source: c,
        compiled: k,
        scanned: w,
        links: se
      });
    }
    let y = [];
    for (let g = 0; g < f.length; g += Lo) {
      let c = await Promise.allSettled(f.slice(g, g + Lo).map(async h => ({
        pending: h,
        answer: await t(h.specifier, h.importer, p)
      })));
      for (let h of c) {
        if (h.status === "rejected") throw h.reason;
        let {pending: k, answer: w} = h.value, {real: b} = w, S = b === void 0 ? void 0 : s.get(b), N = S === void 0 ? w : {
          file: S,
          source: n.get(S) ?? w.source
        };
        if (!n.has(N.file)) {
          if (i += Buffer.byteLength(N.source, "utf8"), i > Ft) throw Cu(o, N.file);
          if (n.set(N.file, N.source), b !== void 0) s.set(b, N.file);
        }
        k.links.set(k.specifier, N.file), y.push(N);
      }
    }
    a = y;
  }
  return {
    entry: e.file,
    root: e.root,
    files: r
  };
}

function dt(e, o) {
  let {onName: t, event: r, refuse: n} = o;
  if (e === void 0) return ke;
  switch (e.type) {
   case "ObjectExpression":
    {
      let s = e.properties.find(f => f.type === "SpreadElement" || f.computed || f.kind !== "init");
      if (s !== void 0) throw n(s, `${t}("${r}") has a matcher with a spread, a computed key or an accessor, which may set "to" to anything; ` + C(o));
      let [p, i] = e.properties.filter(f => he(f, "to"));
      if (i !== void 0) throw n(i, `${t}("${r}") names "to" twice in one matcher; ` + C(o));
      return p?.type === "Property" ? Vr(p.value, o) : ke;
    }

   case "ArrayExpression":
    return e.elements.flatMap(s => {
      if (s === null || s.type === "SpreadElement") throw n(s ?? e, `${t}("${r}") has a list of matchers with a hole or a spread; ${C(o)}`);
      return dt(s, o);
    });

   default:
    throw n(e, `${t}("${r}") takes its matcher as ${Je(e)}, not an object written in the call; ${C(o)}`);
  }
}

function Pn(e) {
  let o = [ ...e.registrations.values() ].filter(n => a9(n.event, "command.run")), t = o.map(n => oe(n.matcher));
  return o.length > 0 && t.every(n => n !== void 0) ? D(t.flatMap(n => n ?? [])).toSorted() : void 0;
}

function In(e) {
  let o = [ ...e.registrations ].filter(([, r]) => Qe(r.event));
  if (o.length === 0) return;
  let t = new Set(o.flatMap(([r, {event: n, matcher: s, linked: p}]) => dt(s, {
    onName: r.callee.type === "Identifier" ? r.callee.name : "on",
    event: n,
    refuse: p.scanned.refuse
  })));
  return ke.filter(r => t.has(r));
}

function EE(e, o) {
  let t = Ce(e, o), r = JHt("prepend").filter(f => t.nextTo.has(f)), n = t.envReads.size > 0 || t.envWrites.size > 0, s = pr(e), p = Hj(t), i = Pn(t), a = In(t);
  return {
    hooks: Array.from(t.hooks),
    calls: Array.from(t.calls).sort(),
    ...i !== void 0 && {
      runCommands: i
    },
    ...r.length === 0 ? {} : {
      nextTo: r
    },
    ...a !== void 0 && {
      telemetry: a
    },
    ...n && {
      env: {
        reads: Array.from(t.envReads).sort(),
        writes: Array.from(t.envWrites).sort()
      }
    },
    ...p !== void 0 && {
      state: p
    },
    ...s.length > 0 && {
      clients: s
    }
  };
}

var wE = e => (o, t) => Promise.reject(new Ie(`${e}: cannot import "${o}" (from ${t}): the module is one text with no files beside it`));

async function fWn(e, o, t) {
  let r = Ye.source(e);
  if (r !== void 0) return {
    source: r,
    graph: await Rn({
      file: e,
      source: r,
      root: o
    }, t, wE(t))
  };
  let {real: n, source: s} = await $u(e, o, t);
  return {
    source: s,
    graph: await Rn({
      file: e,
      source: s,
      root: o,
      real: n
    }, t, Tg(o, t))
  };
}

function Le(e, o) {
  let t = Lj(e), r = Wt.get(t);
  if (r !== void 0) return r;
  let n = EE(e, o);
  return Wt.set(t, n), n;
}

async function FGs(e, o, t) {
  let {graph: r} = await fWn(e, o, t), {registrations: n, renderMatchers: s, catchReads: p} = Ur(Ce(r, t));
  return {
    scan: Le(r, t),
    registrations: n,
    renderMatchers: s,
    catchReads: p,
    helperCalls: eE(r, t)
  };
}

var UGs = (e, o) => ({
  linked: [ ...e.files ].filter(([t]) => t !== o).map(([t, r]) => ({
    file: t,
    source: r.source
  })),
  links: [ ...e.files ].flatMap(([t, r]) => [ ...r.links ].map(([n, s]) => ({
    from: t,
    spelled: n,
    file: s
  })))
});

async function mvo(e, o, t) {
  let r = Ye.scan(e);
  if (r !== void 0) return {
    source: "",
    linked: [],
    links: [],
    scan: r
  };
  let {source: n, graph: s} = await fWn(e, o, t);
  return {
    source: n,
    linked: [ ...s.files ].filter(([p]) => p !== e).map(([p, i]) => ({
      file: p,
      source: i.source
    })),
    links: [ ...s.files ].flatMap(([p, i]) => [ ...i.links ].map(([a, f]) => ({
      from: p,
      spelled: a,
      file: f
    }))),
    scan: Le(s, t)
  };
}

function gvo(e, o) {
  if (!(!o.isBuiltin && e.telemetry?.includes(Gr) === !0)) return;
  return `its hooks stand on the telemetry stream "${Gr}" (a matcher names it, or a telemetry hook names no "to" and so stands on every stream), which is for the plugins built into the CLI; name the collector on each telemetry hook: on("telemetry.log", { to: "collector" }, hook)`;
}

function hvo(e) {
  let o = e.telemetry?.join(", ");
  return o === "" ? "nothing" : o;
}

var Fn = (e, o, t) => ({
  module: e,
  scan: _c(o, t),
  files: Lc(o)
});

var yvo = "agents";

var Oz = (e, o, t) => Fn(o, t(), e);

import { join as WE } from "path";

function zE(e, o) {
  return "folder" in o ? {
    path: o.folder,
    modulePath: WE(o.folder, Te)
  } : {
    path: Fi,
    modulePath: wt(e)
  };
}

import { join as qE } from "path";

var mWn = e => qE(ve(), Ho, e);

function KE(e) {
  return e === null || e === void 0 ? String(e) : typeof e === "object" ? `an object with keys [${Object.keys(e).join(", ")}]` : `a ${typeof e}`;
}

function YE(e) {
  if (typeof e === "object" && e !== null && "registerPlugin" in e && typeof e.registerPlugin === "function") return e;
  throw new x(`a built-in module has no registerPlugin function: ${KE(e)}`, "a built-in module has no registerPlugin function");
}

function _we(e, o) {
  let t;
  try {
    t = o();
  } catch (n) {
    Ro(e, "require", n);
    return;
  }
  let r;
  try {
    r = YE(t);
  } catch (n) {
    Ro(e, "shape", n);
    return;
  }
  try {
    r.registerPlugin();
  } catch (n) {
    wr().builtinPlugins.delete(e), Ro(e, "register", n);
  }
}

function Ro(e, o, t) {
  let r = wr().builtinPluginFailures;
  if (r.has(e)) return;
  r.set(e, {
    name: e,
    phase: o,
    message: l(t)
  }), d(j(t)), m("plugin_bundled_register", o);
}

function _vo(e) {
  let o = wr(), t = o.builtinPlugins.get(e);
  if (t === void 0 || o.builtinPluginFailures.has(e)) return !1;
  if (t.isAvailable === void 0) return !0;
  try {
    return t.isAvailable();
  } catch (r) {
    return Ro(e, "is_available", r), !1;
  }
}

function WS(e) {
  wr().builtinPlugins.set(e.name, e);
  let o = e.hooksModule;
  if (o === void 0) return;
  let t = wt(e.name);
  if ("scan" in o) Ye.registerScan(t, o.scan); else if ("shipped" in o) Ye.register(t, o.shipped);
}

function Xm(e) {
  return e.endsWith(`@${Fi}`);
}

function mk(e) {
  return wr().builtinPlugins.get(e);
}

function Mz() {
  let e = er(), o = [], t = [];
  for (let [r, n] of wr().builtinPlugins) {
    if (!_vo(r)) continue;
    let s = `${r}@${Fi}`, p = MR(s).length > 0, i = n.enabledFromPolicyOnly ? Ln(s) : n.enabledFromTrustedSettingsOnly ? CWn(s) : !p ? e?.enabledPlugins?.[s] : ynn(s), a = i !== void 0 ? i === !0 : n.defaultEnabled ?? !0, f = {
      name: r,
      manifest: {
        name: r,
        description: n.description,
        version: n.version,
        ...n.defaultEnabled === void 0 ? {} : {
          defaultEnabled: n.defaultEnabled
        },
        ...n.userConfig === void 0 ? {} : {
          userConfig: n.userConfig
        }
      },
      path: Fi,
      source: s,
      repository: s,
      enabled: a,
      isBuiltin: !0,
      hooksConfig: n.hooks,
      mcpServers: n.mcpServers,
      ...n.hooksModule === void 0 ? {} : zE(r, n.hooksModule)
    };
    if (a) o.push(f); else t.push(f);
  }
  return {
    enabled: o,
    disabled: t
  };
}

function gWn() {
  return $n().filter(e => !$z(e.name));
}

function Nxs() {
  return $n();
}

function $n() {
  let {enabled: e} = Mz(), o = [], t = wr().builtinPlugins;
  for (let r of e) {
    let n = t.get(r.name);
    if (!n?.skills) continue;
    for (let s of n.skills) o.push(QE(s));
  }
  return o;
}

function vAr(e = new Set) {
  let o = [];
  for (let [t, r] of wr().builtinPlugins) {
    if (e.has(t)) continue;
    for (let n of r.skills ?? []) o.push(n.name, ...n.aliases ?? []);
  }
  return o;
}

function ynn(e) {
  let o = jo();
  for (let t = o.length - 1; t >= 0; t--) {
    let r = o[t];
    if (r === void 0) continue;
    let n = u5(fe(r)?.enabledPlugins, e);
    if (n !== void 0) return n;
  }
  return;
}

function $xs() {
  return Object.fromEntries([ ...wr().builtinPlugins ].filter(([, e]) => e.enabledFromPolicyOnly).map(([e]) => `${e}@${Fi}`).map(e => [ e, Ln(e) ]));
}

function Ln(e) {
  let [o, t] = [ Dve(), fe("policySettings") ].map(r => u5(r?.enabledPlugins, e));
  return o === !1 && t !== !1 ? t : o;
}

function QE(e) {
  let o = wr().builtinPluginWiredSkills, t = o.get(e);
  if (!t) {
    let {wireSkillFilesExtraction: p} = import.meta.require("./chunk-c0asdqqv.js");
    t = p(e), o.set(e, t);
  }
  let {skillRoot: r, getPromptForCommand: n} = t, s = {
    type: "prompt",
    name: e.name,
    description: typeof e.description === "function" ? "" : e.description,
    menuDescription: typeof e.menuDescription === "function" ? void 0 : e.menuDescription,
    aliases: e.aliases,
    hasUserSpecifiedDescription: !0,
    allowedTools: e.allowedTools ?? [],
    getAllowedTools: e.getAllowedTools,
    disallowedTools: e.disallowedTools ?? [],
    argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
    whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
    subcommands: e.subcommands,
    subcommandsBareOnly: e.subcommandsBareOnly,
    model: e.model,
    disableModelInvocation: typeof e.disableModelInvocation === "function" ? !0 : e.disableModelInvocation ?? !1,
    disableBridgeInvocation: e.disableBridgeInvocation,
    userInvocable: e.userInvocable ?? !0,
    terminalOriented: e.terminalOriented,
    argsMayContainSlashCommands: e.argsMayContainSlashCommands,
    contentLength: 0,
    source: "bundled",
    loadedFrom: "bundled",
    hooks: e.hooks,
    context: e.context,
    getContext: e.getContext,
    agent: e.agent,
    background: e.background,
    formatForegroundForkResult: e.formatForegroundForkResult,
    skillRoot: r,
    isEnabled: e.isEnabled ?? (() => !0),
    policyGate: typeof e.policyGate === "function" ? void 0 : e.policyGate,
    requires: e.requires,
    isHidden: !(e.userInvocable ?? !0),
    progressMessage: e.progressMessage ?? "running",
    getPromptForCommand: n,
    getEffort: e.getEffort,
    getDefaultEffort: e.getDefaultEffort,
    onUserTypedArgs: e.onUserTypedArgs,
    getArgumentCompletions: e.getArgumentCompletions,
    enterTakesArgumentCompletion: e.enterTakesArgumentCompletion
  };
  return pPe(s, "description", e.description), pPe(s, "menuDescription", e.menuDescription), 
  pPe(s, "argumentHint", e.argumentHint), pPe(s, "whenToUse", e.whenToUse), TWn(s, "disableModelInvocation", e.disableModelInvocation), 
  AWn(s, e.policyGate), s;
}

function uWn(e, o, t) {
  let r = fr(e);
  if (Xm(e)) return t.outermost.includes(r) ? "prepend" : "builtin";
  let n = [ ...o ?? [] ].some(a => !Xm(a) && fr(a) === r), s = a => t[a].includes(r) && (t.from[a] === "user" ? !n : n), p = n ? "prepend" : "user", i = s("prepend") ? "prepend" : "append";
  return s("prepend") || s("append") ? i : p;
}

export { iWn, avo, mAr, Rut, Cxs, lvo, A3e, dvo, Rxs, cvo, aWn, RH, MGs, HGs, gAr, lWn, aPe, DGs, LUe, uvo, hAr, mnn, dWn, C3e, xxs, yAr, a9, YHt, gnn, XHt, _Ar, bAr, Pxs, hnn, cWn, Ixs, xut, LGs, JHt, SAr, Oxs, NGs, pvo, Put, uWn, Mxs, pWn, Iut, QHt, ZHt, lPe, $Gs, fvo, wAr, Hxs, Dxs, Lxs, fWn, FGs, UGs, mvo, gvo, hvo, yvo, Oz, mWn, _we, _vo, WS, Xm, mk, Mz, gWn, Nxs, vAr, ynn, $xs };
