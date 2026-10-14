// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Qr } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { x, E } from "./chunk-b0z4bv3v.js";

import { _, Wi, Y, cn, t } from "./chunk-kawq2919.js";

import { ite } from "./chunk-z52kmxx4.js";

import { I, ne, Nt } from "./chunk-5wbhf1bk.js";

import { yo, RIr, p$, lI, Pmt, JK, GLs, Cv, VLs, qS } from "./chunk-q6wab2jw.js";

import { w } from "./chunk-9rj1xaxr.js";

import { HI, zv } from "./chunk-qvbrx5kg.js";

import { fa } from "./chunk-a3sz08kp.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Pe } from "./chunk-7w995nyx.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { tgt } from "./chunk-j90se18b.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { Tgt, bA } from "./chunk-r276nwd3.js";

import { ome } from "./chunk-9yajep3y.js";

import { ie, ut, PXe, rn, cme, xr } from "./chunk-yxennhe9.js";

import { Fsn } from "./chunk-dd98x6x7.js";

import { s, n, qr } from "./chunk-3vw306fv.js";

import { rt, nn } from "./chunk-ytac37d4.js";

import { Goe, Wn } from "./chunk-4v78v8fd.js";

import { dQ, V7r, STt, r5t, q7r, ZD } from "./chunk-84yp45y8.js";

import { FT } from "./chunk-gxwv3c1r.js";

import { xa } from "./chunk-8a4rbyjg.js";

import { te, c8t, cMn } from "./chunk-48xcyvwy.js";

import { eC, nE, Xk, SY } from "./chunk-xd492737.js";

import { NZn } from "./chunk-4vvbv4ma.js";

import { SS } from "./chunk-zkmvjknk.js";

import { n6o, qSn, r6o, YSn, $Gt } from "./chunk-ce7q0nsz.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { WQe, v3n, zQe, E3n, GQe, U$r, W$r, z$r, G$r } from "./chunk-3egf9j2h.js";

import { be } from "./chunk-gqmex880.js";

import { G } from "./chunk-j706jx8h.js";

import { Se } from "./chunk-sebqm9p5.js";

import { LE } from "./chunk-wpjx0bxn.js";

import { Er } from "./chunk-t54wevgw.js";

import { O8n } from "./chunk-qsjy1wkv.js";

import { _o } from "./chunk-2enjs241.js";

import { bo } from "./chunk-cqm6ka4q.js";

import { ss } from "./chunk-wafhv2dx.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { FL } from "./chunk-0xsdje5v.js";

import { twt, FZn } from "./chunk-crqgx9jb.js";

import { Ae, P, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { N } from "./chunk-hmqkrrtz.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

import { join as Hi } from "path";

var Yi = 4e3, Ji = 2e3, go = 3, ho = [ eC, nE, Xk, FT, SY, xa ];

async function xo(o, l, {promptFramed: a} = {}) {
  let u = Hi(FL(o), `agent-${l}.jsonl`), d;
  try {
    d = await tgt(u);
  } catch (K) {
    return t(`readWorkflowAgentTranscript: ${u} not readable (${K instanceof Error ? K.message : String(K)})`), 
    null;
  }
  let p = d.filter(ZD), h = p.findIndex(K => K.type === "user"), b = h === -1 ? void 0 : p[h];
  for (let K = h + 1; h !== -1 && K < p.length; K++) {
    let V = p[K];
    if (V === void 0 || V.type !== "user" || V.isMeta === !0) break;
    b = V;
  }
  let T = b?.type === "user" ? b.message?.content : void 0, v = typeof T === "string" ? T : ds(T).trim(), k = a ? n6o(v) : v, C = [], A = qSn(), M = new Map, D, L = new Map, q = {
    pendingCreates: new Map,
    tasks: new Map
  }, U = void 0, z = "", W = "";
  for (let [K, V] of p.entries()) {
    if (V.type === "user") {
      let B = V.message?.content;
      if (Array.isArray(B)) for (let X of B) {
        if (!Cn(X) || X.type !== "tool_result" || typeof X.tool_use_id !== "string") continue;
        let dt = X.is_error === !0;
        if (YSn(A, X.tool_use_id, V.isVirtual === !0, dt), V.isVirtual !== !0 && A.uses.has(X.tool_use_id)) D = X.tool_use_id;
        let H = Gi(X.content), ot = H;
        L.set(X.tool_use_id, {
          ...cs(ot, Ji),
          isError: dt
        }), r5t(q, {
          tool_use_id: X.tool_use_id,
          is_error: dt,
          content: H
        });
      }
      continue;
    }
    if (V.type !== "assistant" || !Array.isArray(V.message?.content)) continue;
    let nt = V.message.id || `entry-${K}`;
    W = nt, D = void 0;
    let it = "";
    for (let B of V.message.content) {
      if (!Cn(B)) continue;
      if (B.type === "tool_use" && typeof B.name === "string") {
        if (r6o(A, {
          id: B.id,
          name: B.name
        }, V.isVirtual === !0), V.isVirtual === !0 && typeof B.id === "string" && D !== void 0) M.set(B.id, D);
        if (C.push({
          id: typeof B.id === "string" ? B.id : "",
          name: B.name,
          input: B.input,
          responseKey: nt
        }), typeof B.id === "string" && B.id !== "") STt(q, B);
        if (B.name === eC) U = B.input;
        if (B.name === xa && B.input !== void 0) try {
          it = _(B.input, null, 2);
        } catch {
          it = String(B.input);
        }
      } else if (B.type === "text" && typeof B.text === "string") it += B.text;
    }
    if (it) z = it;
  }
  let J = C, j = K => !1, et = N(J, K => !j(K)), pt = J.map(K => {
    let V = K.responseKey === W, nt = j(K);
    if (!nt) et--;
    let it = nt || (et < go || V) && !ho.includes(K.name);
    return {
      name: K.name,
      summary: nt ? "" : $Gt(K.input, K.name),
      fromLastResponse: V,
      fields: it && !nt ? zi(K.input) : [],
      result: Bi(K.id ? L.get(K.id) : void 0, it)
    };
  }), gt = q7r(q), wt = gt.length > 0 ? gt : V7r(U);
  return {
    prompt: k,
    toolCalls: pt,
    finalText: z,
    tasks: wt
  };
}

var Vi = {
  head: "",
  lineCount: 0,
  truncatedChars: 0
};

function Bi(o, l) {
  if (!o) return null;
  return l ? o : {
    ...Vi,
    isError: o.isError
  };
}

function cs(o, l) {
  let a = o.trimEnd(), u = a.length > l ? ne(a, l) : a;
  return {
    head: u,
    lineCount: Nt(a, `\n`) + 1,
    truncatedChars: a.length - u.length
  };
}

function Cn(o) {
  return typeof o === "object" && o !== null && typeof o.type === "string";
}

function ds(o) {
  if (!Array.isArray(o)) return "";
  return o.filter(Cn).flatMap(l => l.type === "text" && typeof l.text === "string" ? l.text : []).join(`\n`);
}

function Gi(o) {
  if (typeof o === "string") return o;
  let l = ds(o);
  if (l || !Array.isArray(o)) return l;
  let a = o.filter(Cn);
  return a.length === 0 ? "" : `(${a.map(u => u.type).join(", ")} content)`;
}

function zi(o) {
  if (o === void 0 || o === null) return [];
  return (typeof o === "object" && !Array.isArray(o) ? Object.entries(o) : [ [ "input", o ] ]).map(([a, u]) => {
    let d;
    if (typeof u === "string") d = u; else try {
      d = _(u) ?? String(u);
    } catch {
      d = String(u);
    }
    return {
      key: a,
      ...cs(d, Yi)
    };
  });
}

var us = "  ", Qi = 40, ms = 8, Xi = /[\x00-\x08\x0a-\x1f\x7f-\x9f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g, To = ": ";

function gs(o, l) {
  let a = o.trim();
  if (l < ms || !a.startsWith("{") && !a.startsWith("[")) return null;
  try {
    let u = [];
    return xs(u, Y(a), 0, void 0, !1, l), u;
  } catch {
    return null;
  }
}

function Co(o, l) {
  let a = Math.floor(Math.max(0, l - ms) / us.length);
  return us.repeat(Math.min(o, a));
}

function hs(o) {
  return o.replace(Xi, l => `\\u${l.charCodeAt(0).toString(16).padStart(4, "0")}`);
}

function ps(o) {
  return hs(Wi(o));
}

function wo(o, l) {
  return o === void 0 ? [] : [ {
    ...o,
    text: ut(o.text, l - To.length)
  }, {
    text: To,
    dimColor: !0
  } ];
}

function fs(o, l, a, u, d, p) {
  if (a) {
    let T = Co(l, d);
    o.push([ {
      text: T
    }, {
      ...a,
      text: ut(a.text, d - T.length - 1)
    }, {
      text: ":",
      dimColor: !0
    } ]);
  }
  let h = Co(a ? l + 1 : l, d), b = d - h.length;
  for (let T of u) {
    if (T === "") {
      o.push([ {
        text: ""
      } ]);
      continue;
    }
    for (let v of PXe(T, b)) o.push([ p ? {
      text: h + v,
      color: p
    } : {
      text: h + v
    } ]);
  }
}

function xs(o, l, a, u, d, p) {
  let h = Co(a, p), b = p - h.length, T = d ? "," : "", v = typeof u === "string" ? {
    text: ps(u),
    color: "permission"
  } : void 0;
  if (typeof l === "object" && l !== null) {
    if (a >= Qi) throw RangeError("JSON outcome nested past MAX_DEPTH");
    let M = Array.isArray(l) ? l.map((q, U) => [ U, q ]) : Object.entries(l), [D, L] = Array.isArray(l) ? [ "[", "]" ] : [ "{", "}" ];
    if (M.length === 0) {
      let q = D + L + T;
      o.push([ {
        text: h
      }, ...wo(v, b - q.length), {
        text: q,
        dimColor: !0
      } ]);
      return;
    }
    o.push([ {
      text: h
    }, ...wo(v, b - D.length), {
      text: D,
      dimColor: !0
    } ]);
    for (let q = 0; q < M.length; q++) {
      let [U, z] = M[q];
      xs(o, z, a + 1, U, q < M.length - 1, p);
    }
    o.push([ {
      text: h
    }, {
      text: L + T,
      dimColor: !0
    } ]);
    return;
  }
  if (typeof l === "number" && (Number.isInteger(l) ? !Number.isSafeInteger(l) : !Number.isFinite(l))) throw RangeError("JSON outcome number not representable");
  if (typeof l === "string" && l.includes(`\n`)) {
    fs(o, a, v ?? (typeof u === "number" ? {
      text: `[${u}]`,
      dimColor: !0
    } : void 0), l.replace(/(?:\r?\n)+$/, "").split(/\r?\n/).map(M => ome(hs(M))), p, void 0);
    return;
  }
  let k = typeof l === "string" ? ps(l) : String(l), C = typeof l === "string" ? "success" : "warning";
  if ((v === void 0 ? 0 : ie(v.text) + To.length) + ie(k) + T.length <= b) {
    o.push([ {
      text: h
    }, ...wo(v, b), {
      text: k,
      color: C
    }, ...T ? [ {
      text: T,
      dimColor: !0
    } ] : [] ]);
    return;
  }
  fs(o, a, v, [ k + T ], p, C);
}

F();

import { join as ws } from "path";

import { mkdir as Zi, writeFile as tl } from "fs/promises";

import { dirname as ko, join as So } from "path";

var Je = "Use a different name or overwrite.";

async function el(o, l) {
  if (o === "user") return twt();
  if (Qr() !== null) throw f("workflow_save", "project_scope_unavailable"), Error("Project-scope workflow saves are unavailable in a session started with --project-config-root");
  let a = Fsn(l);
  if (a === null) return So(l, ".claude", "workflows");
  let u = (await dQ("workflows", l))[0];
  if (u !== void 0) return u;
  return So(a, ".claude", "workflows");
}

async function vo(o, l) {
  let a = Goe(o.name), u = await el(o.scope, o.cwd), d = So(u, `${a}.js`);
  if (l !== void 0 && o.scope === "user") return nl(l, a, d, o);
  let p = o.scope !== "user" && !ite(ko(u));
  if (p) try {
    await Tgt(ko(ko(u)), u);
  } catch (h) {
    throw m("workflow_save", "write_failed"), h;
  }
  await Zi(u, {
    recursive: !0,
    mode: 448
  });
  try {
    if (o.overwrite) await bA(d, o.script, {
      encoding: "utf8",
      mode: 384,
      checkParentDir: p
    }); else await tl(d, o.script, {
      encoding: "utf8",
      mode: 384,
      flag: "wx"
    });
  } catch (h) {
    if (!o.overwrite && E(h) === "EEXIST") throw f("workflow_save", "already_exists"), 
    Error(`Dynamic workflow "${a}" already exists at ${d}. ${Je}`);
    throw m("workflow_save", "write_failed"), h;
  }
  return bs(a, d, o);
}

async function bs(o, l, a) {
  FZn();
  let [{clearCommandMemoizationCaches: u}, {resetSentSkillNames: d}] = await Promise.all([ import("./chunk-pyg93jtv.js"), import("./chunk-b6t7vgcj.js") ]);
  return u(), d(), g("workflow_save"), i("tengu_workflow_saved", {
    scope: c(a.scope),
    overwrite: a.overwrite,
    script_size_chars: a.script.length
  }), {
    name: o,
    path: l,
    scope: a.scope
  };
}

async function nl(o, l, a, u) {
  let d = await o.write(Fe.userConfigDir("workflows", [ `${l}.js` ]), u.script, u.overwrite ? {
    mode: 384,
    publishDiscipline: "atomic"
  } : {
    mode: 384,
    precondition: {
      type: "ifAbsent"
    }
  });
  if (!d.ok) {
    if (!u.overwrite && d.error.code === "AlreadyExists") throw f("workflow_save", "already_exists"), 
    new x(`Dynamic workflow "${l}" already exists at ${a}. ${Je}`, "workflow name collision");
    throw m("workflow_save", "write_failed"), new x(`Workflow save failed: ${d.error.code} (${a})`, "workflow save failed");
  }
  return bs(l, a, u);
}

function wl(ao) {
  return ao.cwd;
}

function yl(xn) {
  return xn === "project" ? "user" : "project";
}

function myt(o) {
  let W = w(54), {script: l, defaultName: a, onDone: u} = o, {storageV5: d} = Pe(), {columns: p} = Te(), h = LE(wl), [b, T] = y(a), [v, k] = y(a.length), [C, A] = y("project"), [M, D] = y(!1), [L, q] = y(null), [U, z] = y(null), J;
  if (W[0] === S) J = () => {
    q(null), z(null);
  }, W[0] = J; else J = W[0];
  let j = J, et;
  if (W[1] === S) et = pt => {
    T(pt), j();
  }, W[1] = et; else et = W[1];
  let gt = et, wt;
  if (W[2] !== L || W[3] !== h || W[4] !== b || W[5] !== u || W[6] !== M || W[7] !== C || W[8] !== l || W[9] !== d) wt = () => {
    if (M) {
      return;
    }
    let K = b.trim();
    if (!K) {
      return;
    }
    D(!0), z(null), vo({
      name: K,
      scope: C,
      script: l,
      overwrite: L !== null,
      cwd: h
    }, d).then(V => {
      u(`Dynamic workflow saved to ${V.path}. Invoke as /${V.name} or Workflow({name: "${V.name}"}) in future sessions.`);
    }).catch(nt => {
      let it = nt instanceof Error ? nt.message : String(nt);
      if (it.includes(Je)) {
        let B = it.match(/at (.+?)\. /);
        q(B?.[1] ?? "(unknown path)");
      } else z(it);
      D(!1);
    });
  }, W[2] = L, W[3] = h, W[4] = b, W[5] = u, W[6] = M, W[7] = C, W[8] = l, W[9] = d, 
  W[10] = wt; else wt = W[10];
  let X = wt, dt;
  if (W[11] !== u) dt = () => u(), W[11] = u, W[12] = dt; else dt = W[12];
  let H = dt, ot;
  if (W[13] === S) ot = {
    context: "Settings",
    isActive: !0
  }, W[13] = ot; else ot = W[13];
  rt("confirm:no", H, ot);
  let mt;
  if (W[14] === S) mt = Et => {
    if (Et.key === "tab") Et.preventDefault(), A(yl), j();
  }, W[14] = mt; else mt = W[14];
  let St = mt, Gt;
  if (W[15] !== b) Gt = Goe(b.trim() || "workflow"), W[15] = b, W[16] = Gt; else Gt = W[16];
  let ee = Gt, _t;
  if (W[17] !== C || W[18] !== ee) _t = C === "project" ? `.claude/workflows/${ee}.js` : Os(ws(twt(), `${ee}.js`)), 
  W[17] = C, W[18] = ee, W[19] = _t; else _t = W[19];
  let yt = _t;
  const Ot = C === "project" ? "Project" : "User";
  let pe;
  if (W[20] !== Ot || W[21] !== yt) pe = r(n, {
    dimColor: !0,
    children: [ Ot, " scope \xb7 ", yt ]
  }), W[20] = Ot, W[21] = yt, W[22] = pe; else pe = W[22];
  const fe = L ? "overwrite" : "save";
  let Ke;
  if (W[23] !== fe) Ke = e(G, {
    chord: "enter",
    action: fe
  }), W[23] = fe, W[24] = Ke; else Ke = W[24];
  let so, fn;
  if (W[25] === S) so = e(G, {
    chord: "tab",
    action: "toggle scope"
  }), fn = e(G, {
    chord: "escape",
    action: "cancel"
  }), W[25] = so, W[26] = fn; else so = W[25], fn = W[26];
  let oe;
  if (W[27] !== Ke) oe = r(Se, {
    children: [ Ke, so, fn ]
  }), W[27] = Ke, W[28] = oe; else oe = W[28];
  let mn;
  if (W[29] === S) mn = e(n, {
    children: "Save as:"
  }), W[29] = mn; else mn = W[29];
  let io;
  if (W[30] === S) io = e(n, {
    children: ">"
  }), W[30] = io; else io = W[30];
  const gn = !M, hn = !M;
  let at;
  if (W[31] !== p || W[32] !== v || W[33] !== X || W[34] !== b || W[35] !== gn || W[36] !== hn) at = r(s, {
    flexDirection: "row",
    gap: 1,
    marginTop: 1,
    children: [ io, e(Er, {
      value: b,
      onChange: gt,
      onSubmit: X,
      focus: gn,
      showCursor: hn,
      columns: p,
      cursorOffset: v,
      onChangeCursorOffset: k
    }) ]
  }), W[31] = p, W[32] = v, W[33] = X, W[34] = b, W[35] = gn, W[36] = hn, W[37] = at; else at = W[37];
  let zt;
  if (W[38] !== L) zt = L && e(s, {
    marginTop: 1,
    children: r(n, {
      color: "warning",
      children: [ L, " already exists. Press Enter again to overwrite, or change the name." ]
    })
  }), W[38] = L, W[39] = zt; else zt = W[39];
  let Le;
  if (W[40] !== U) Le = U && e(s, {
    marginTop: 1,
    children: e(ss, {
      error: U
    })
  }), W[40] = U, W[41] = Le; else Le = W[41];
  let Re;
  if (W[42] !== M) Re = M && e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: "Saving\u2026"
    })
  }), W[42] = M, W[43] = Re; else Re = W[43];
  let re;
  if (W[44] !== at || W[45] !== zt || W[46] !== Le || W[47] !== Re) re = r(s, {
    flexDirection: "column",
    children: [ mn, at, zt, Le, Re ]
  }), W[44] = at, W[45] = zt, W[46] = Le, W[47] = Re, W[48] = re; else re = W[48];
  let lo;
  if (W[49] !== H || W[50] !== pe || W[51] !== oe || W[52] !== re) lo = e(bo, {
    onKeyDown: St,
    children: e(be, {
      title: "Save dynamic workflow",
      subtitle: pe,
      onCancel: H,
      color: "permission",
      isCancelActive: !1,
      inputGuide: oe,
      children: re
    })
  }), W[49] = H, W[50] = pe, W[51] = oe, W[52] = re, W[53] = lo; else lo = W[53];
  return lo;
}

var $o = 3, Po = 100, Tl = 12, Cl = 6;

function We(o) {
  return Wn(cn(o.replace(/\t/g, "  ")).trimEnd()).trimEnd();
}

function Io({tasks: o, expanded: l, width: a, indent: u}) {
  let d = [], p = N(o, k => k.status === "completed");
  d.push([ {
    text: "Tasks",
    bold: !0,
    dimColor: !0
  }, {
    text: ut(` \xb7 ${p}/${o.length} done`, a - 5),
    dimColor: !0
  } ]);
  let h = o.length > $o, b = o, T = [];
  if (!l && h) {
    let k = [ ...o.filter(A => A.status === "in_progress"), ...o.filter(A => A.status === "pending"), ...o.filter(A => A.status === "completed") ], C = new Set(k.slice(0, $o));
    b = o.filter(A => C.has(A)), T = k.slice($o);
  } else if (l && o.length > Po) b = o.slice(0, Po), T = o.slice(Po);
  let v = Math.max(4, a - ie(u) - 2);
  for (let k of b) {
    let C = We(k.content), A = l ? PXe(C, v) : [ ut(C, v) ], M = A.length > 0 ? A : [ "" ];
    for (let [D, L] of M.entries()) d.push([ {
      text: u
    }, D === 0 ? kl(k.status) : {
      text: " "
    }, {
      text: ` ${L}`,
      bold: k.status === "in_progress",
      dimColor: k.status !== "in_progress"
    } ]);
  }
  if (T.length > 0) {
    let k;
    if (l) k = `${T.length} more`; else {
      let C = [], A = N(T, L => L.status === "in_progress"), M = N(T, L => L.status === "pending"), D = N(T, L => L.status === "completed");
      if (A > 0) C.push(`${A} in progress`);
      if (M > 0) C.push(`${M} pending`);
      if (D > 0) C.push(`${D} completed`);
      k = C.join(", ");
    }
    d.push([ {
      text: ut(`${u}\u2026 +${k}`, a),
      dimColor: !0
    } ]);
  }
  return {
    lines: d,
    capped: h
  };
}

function kl(o) {
  let {icon: l, color: a} = O8n(o);
  return {
    text: l,
    color: a
  };
}

function Ve(o, l) {
  if (o.result === null) return l && o.fromLastResponse ? "running" : "unanswered";
  return o.result.isError ? "error" : "ok";
}

function No({call: o, state: l, width: a, indent: u}) {
  let d, p = null;
  switch (l) {
   case "running":
    d = {
      text: yo,
      dimColor: !0
    }, p = {
      text: " \xb7 running",
      dimColor: !0
    };
    break;

   case "unanswered":
    d = {
      text: RIr,
      dimColor: !0
    }, p = {
      text: " \xb7 no result",
      dimColor: !0
    };
    break;

   case "ok":
    d = {
      text: yo,
      color: "success"
    };
    break;

   case "error":
    d = {
      text: yo,
      color: "error"
    }, p = {
      text: " \xb7 error",
      color: "error"
    };
    break;
  }
  let h = Math.max(1, a - ie(u) - ie(d.text) - 1 - (p ? ie(p.text) : 0)), b = We(Do(o.name)), T = h - ie(b), v = T < 0 ? ut(b, h) : o.summary && T > 3 ? `${b}(${ut(We(o.summary), T - 2)})` : b;
  return [ {
    text: u
  }, d, {
    text: ` ${v}`,
    dimColor: l !== "running"
  }, ...p ? [ p ] : [] ];
}

function Es({call: o, state: l, width: a, indent: u}) {
  let d = [ No({
    call: o,
    state: l,
    width: a,
    indent: u
  }) ];
  if (ho.includes(o.name)) return d;
  let p = `${u}  `;
  Sl(d, o.fields, {
    indent: p,
    width: a,
    maxLines: Tl
  });
  let h = `${p}${GLs}  `;
  if (o.result && o.result.head === "") d.push([ {
    text: ut(`${h}(empty)`, a),
    color: o.result.isError ? "error" : void 0,
    dimColor: !o.result.isError
  } ]); else if (o.result) _s(d, o.result, {
    firstPrefix: h,
    restPrefix: " ".repeat(ie(h)),
    width: a,
    maxLines: Cl,
    color: o.result.isError ? "error" : void 0
  }); else if (l === "unanswered") d.push([ {
    text: ut(`${h}(none recorded)`, a),
    dimColor: !0
  } ]);
  return d;
}

function Sl(o, l, {indent: a, width: u, maxLines: d}) {
  let p = d, h = 0, b = 0, T = `${a}  `;
  for (let v of l) {
    if (p <= 0) {
      h += v.lineCount;
      continue;
    }
    let k = We(v.key), C = `${a}${k}: `;
    if (!(v.lineCount === 1 && v.truncatedChars === 0 && ie(C) + ie(We(v.head)) <= u) && ie(C) > Math.floor(u / 2)) {
      if (o.push([ {
        text: ut(`${a}${k}:`, u),
        dimColor: !0
      } ]), p--, C = T, p <= 0) {
        h += v.lineCount;
        continue;
      }
    }
    let M = _s(o, v, {
      firstPrefix: C,
      restPrefix: T,
      width: u,
      maxLines: p,
      color: void 0,
      reportHidden: !1
    });
    p -= M.lines, h += M.hiddenLines, b += M.hiddenChars;
  }
  Ms(o, a, u, h, b);
}

function _s(o, l, {firstPrefix: a, restPrefix: u, width: d, maxLines: p, color: h, reportHidden: b = !0}) {
  let T = l.head.split(`\n`), v = 0, k = Math.max(0, l.lineCount - T.length), C = !0, A = Math.max(1, d - ie(u));
  t: for (let [D, L] of T.entries()) {
    let q = We(L), U = ne(q, (p - v + 1) * d), z = v === 0 ? Math.max(1, d - ie(a)) : A, W = PXe(U, z)[0] ?? "", J = U.slice(W.length), j = J ? [ W, ...PXe(J, A) ] : [ W ];
    for (let [et, pt] of j.entries()) {
      if (v >= p) {
        k += T.length - D, C = !1;
        break t;
      }
      o.push([ {
        text: (v === 0 && et === 0 ? a : u) + pt,
        color: h,
        dimColor: h === void 0
      } ]), v++;
    }
    if (U.length < q.length) {
      k += T.length - D, C = !1;
      break;
    }
  }
  let M = C ? l.truncatedChars : 0;
  if (b) Ms(o, u, d, k, M);
  return {
    lines: v,
    hiddenLines: k,
    hiddenChars: M
  };
}

function Ms(o, l, a, u, d) {
  let p = u > 0 ? `\u2026 ${u} more ${I(u, "line")}` : d > 0 ? `\u2026 +${d} chars` : "";
  if (p) o.push([ {
    text: ut(`${l}${p}`, a),
    dimColor: !0
  } ]);
}

function Do(o) {
  return o;
}

function fc(v, k) {
  return e(n, {
    color: v.color,
    dimColor: v.dimColor,
    bold: v.bold ?? !1,
    children: v.text
  }, k);
}

function mc() {
  return null;
}

function Bt(o, l, a) {
  if (l <= a) return {
    from: 0,
    to: l,
    above: 0,
    below: 0
  };
  let u = Math.floor(a / 2), d = Math.max(0, Math.min(o - u, l - a)), p = d + a;
  return {
    from: d,
    to: p,
    above: d,
    below: l - p
  };
}

function $t(o) {
  return o.state === "start" || o.state === "progress";
}

function Dt(o, l) {
  if (o.state === "done") return "done";
  if (o.state === "error") {
    if (o.skipped) return "skipped";
    if (o.blocked) return "blocked";
    return "failed";
  }
  if (!l) return "interrupted";
  return o.queuedAt != null && o.startedAt == null ? "queued" : "running";
}

function un(o) {
  switch (o) {
   case "done":
    return {
      glyph: te.tick,
      color: "success"
    };

   case "failed":
    return {
      glyph: te.cross,
      color: "error"
    };

   case "skipped":
    return {
      glyph: te.cross,
      color: "subtle"
    };

   case "blocked":
    return {
      glyph: te.cross,
      color: "permission"
    };

   case "queued":
   case "interrupted":
    return {
      glyph: RIr,
      color: "subtle"
    };

   case "running":
    return {
      glyph: yo,
      color: "subtle"
    };
  }
}

var Yt = [ "all", "running", "queued", "failed", "done", "skipped", "blocked", "interrupted" ];

function qe(o, l) {
  return l ? `showing ${o} ${l}` : `${o} ${I(o, "agent")}`;
}

function no(o, l) {
  if (o.status === "not-started") return "Not started yet";
  return l ? `No ${l} agents` : "No agents";
}

function Pt(o, l, a) {
  return Math.max(l, Math.min(a, o));
}

function ca(o, l) {
  let a = Dt(o, l), u = WQe(o.fallbackModel ?? o.model, void 0), d = [];
  if (o.isolation != null) d.push(o.isolation);
  if (o.tokens != null) d.push(`${xr(o.tokens)} tok`);
  if (a === "running" && o.lastProgressAt != null) {
    let h = Math.floor((Date.now() - o.lastProgressAt) / 1e3);
    if (h >= 30) d.push(`idle ${rn(h * 1e3)}`);
  }
  if (a === "queued") d.push("queued");
  if (a === "interrupted") d.push("stopped");
  if (a === "skipped") d.push("skipped");
  if (a === "blocked") d.push("blocked");
  if (a === "failed") d.push("failed");
  let p = o.durationMs ?? (a === "running" && o.startedAt != null ? Math.max(0, Date.now() - o.startedAt) : void 0);
  return {
    model: u,
    stats: d.join(" \xb7 "),
    time: p != null ? cme(p) : ""
  };
}

var Pi = 6;

function Ur(o, l, a, u) {
  if (l <= 0) return [];
  let {model: d, stats: p, time: h} = ca(o, u), b = a ? "permission" : void 0, T = !a, v = (U, z) => z <= 0 ? "" : ut(U, z), k = h ? v(h, l).padStart(Math.min(Pi, l)) : "", C = k ? l - ie(k) - 1 : l, A = (U, z) => U && z ? 3 : 0, M = d, D = p;
  if (ie(M) + A(M, D) + ie(D) > C) {
    if (D = v(D, C - ie(M) - A(M, D)), ie(M) + A(M, D) + ie(D) > C) M = v(M, C - ie(D) - A(M, D));
  }
  let L = M && D ? " \xb7 " : "", q = Math.max(0, l - ie(M) - ie(L) - ie(D) - ie(k));
  return [ {
    text: M,
    color: b,
    dimColor: T
  }, {
    text: L,
    color: b,
    dimColor: T
  }, {
    text: D,
    color: b,
    dimColor: T
  }, {
    text: " ".repeat(q)
  }, {
    text: k,
    color: b,
    dimColor: T
  } ];
}

var da = 40, ua = 30;

function oo(o, l) {
  let a = Math.min(da, Math.max(22, l - ua), Math.max(4, Math.min(l, Math.max(12, l - Pi - 1)))), u = o.reduce((d, p) => Math.max(d, ie(p.label)), 0);
  return Math.min(Math.max(12, u), a);
}

function Bs(o, l) {
  let a = 0;
  for (let u = 0; u < o.length; u++) {
    let d = o[u], p = ie(d.text);
    if (a + p > l) {
      let h = l - a, b = h > 0 ? ut(d.text, h) : "", T = o.slice(0, u);
      if (b) T.push({
        ...d,
        text: b
      });
      return {
        segs: T,
        pad: Math.max(0, h - ie(b))
      };
    }
    a += p;
  }
  return {
    segs: o,
    pad: Math.max(0, l - a)
  };
}

function ve(o) {
  let u = w(7), {segs: l, width: a} = o, d, p;
  if (u[0] !== l || u[1] !== a) {
    let {segs: h, pad: b} = Bs(l, a);
    d = h.map(fc);
    p = " ".repeat(b);
    u[0] = l, u[1] = a, u[2] = d, u[3] = p;
  } else d = u[2], p = u[3];
  let T;
  if (u[4] !== d || u[5] !== p) T = r(Q, {
    children: [ d, p ]
  }), u[4] = d, u[5] = p, u[6] = T; else T = u[6];
  return T;
}

function bt(o) {
  let u = w(7), {segs: l, contentWidth: a} = o, d;
  if (u[0] === S) d = r(n, {
    color: "text",
    children: [ " ", qS.pipe, " " ]
  }), u[0] = d; else d = u[0];
  let p;
  if (u[1] !== a || u[2] !== l) p = e(ve, {
    segs: l,
    width: a
  }), u[1] = a, u[2] = l, u[3] = p; else p = u[3];
  let h;
  if (u[4] === S) h = r(n, {
    color: "text",
    children: [ " ", qS.pipe ]
  }), u[4] = h; else h = u[4];
  let b;
  if (u[5] !== p) b = r(n, {
    wrap: "truncate-end",
    children: [ d, p, h ]
  }), u[5] = p, u[6] = b; else b = u[6];
  return b;
}

function vt(o, l) {
  let a = o.from > 0 ? te.arrowUp : " ", u = o.to < l ? te.arrowDown : " ";
  return `${a} ${o.from + 1}${VLs}${o.to} of ${l} ${u}`;
}

function Kr(o) {
  let u = w(5), {win: l, total: a} = o, d;
  if (u[0] !== a || u[1] !== l) d = vt(l, a), u[0] = a, u[1] = l, u[2] = d; else d = u[2];
  const p = `  ${d}`;
  let h;
  if (u[3] !== p) h = e(n, {
    dimColor: !0,
    wrap: "truncate-end",
    children: p
  }), u[3] = p, u[4] = h; else h = u[4];
  return h;
}

function Hr(o) {
  let k = w(53), {phase: l, selectedAgent: a, level: u, contentWidth: d, viewport: p, tight: h, workflowActive: b, filterLabel: T} = o, v = l.agents, C;
  if (k[0] !== d) C = JK.repeat(d + 2), k[0] = d, k[1] = C; else C = k[1];
  let A = C, M, D;
  if (k[2] !== v || k[3] !== A || k[4] !== d || k[5] !== T || k[6] !== u || k[7] !== l || k[8] !== a || k[9] !== h || k[10] !== p || k[11] !== b) {
    let L = Bt(a, v.length, p);
    D = [];
    let q = qe(v.length, T);
    if (h) {
      let U = ut(` \xb7 ${q}`, Math.max(1, d - 1));
      let z = Math.max(1, d - ie(U));
      let W;
      if (k[14] !== l.title || k[15] !== z) W = ut(l.title, z), k[14] = l.title, k[15] = z, 
      k[16] = W; else W = k[16];
      let J;
      if (k[17] !== W) J = {
        text: W,
        color: "permission",
        bold: !0
      }, k[17] = W, k[18] = J; else J = k[18];
      let j;
      if (k[19] !== U) j = {
        text: U,
        dimColor: !0
      }, k[19] = U, k[20] = j; else j = k[20];
      let et;
      if (k[21] !== J || k[22] !== j) et = [ J, j ], k[21] = J, k[22] = j, k[23] = et; else et = k[23];
      let pt;
      if (k[24] !== d || k[25] !== et) pt = e(bt, {
        contentWidth: d,
        segs: et
      }, "title"), k[24] = d, k[25] = et, k[26] = pt; else pt = k[26];
      D.push(pt);
    } else D.push(e(bt, {
      contentWidth: d,
      segs: [ {
        text: ut(l.title, d),
        color: "permission",
        bold: !0
      } ]
    }, "title")), D.push(e(bt, {
      contentWidth: d,
      segs: [ {
        text: ut(q, d),
        dimColor: !0
      } ]
    }, "count")), D.push(e(bt, {
      contentWidth: d,
      segs: [ {
        text: ""
      } ]
    }, "gap"));
    let gt = D.length;
    if (v.length === 0) {
      let W;
      if (k[27] !== T || k[28] !== l) W = no(l, T), k[27] = T, k[28] = l, k[29] = W; else W = k[29];
      let J;
      if (k[30] !== W) J = [ {
        text: W,
        dimColor: !0
      } ], k[30] = W, k[31] = J; else J = k[31];
      let j;
      if (k[32] !== d || k[33] !== J) j = e(bt, {
        contentWidth: d,
        segs: J
      }, "empty"), k[32] = d, k[33] = J, k[34] = j; else j = k[34];
      D.push(j);
    } else {
      let wt = oo(v, d - 5);
      for (let K = L.from; K < L.to; K++) {
        let V = v[K];
        let nt = u === "agents" && K === a;
        let {glyph: it, color: B} = un(Dt(V, b));
        let X = ut(V.label, wt);
        let dt = " ".repeat(Math.max(0, wt - ie(X)));
        let H = Math.max(0, d - (wt + 5));
        D.push(e(bt, {
          contentWidth: d,
          segs: [ {
            text: nt ? te.pointer : " ",
            color: "permission"
          }, {
            text: " "
          }, {
            text: it,
            color: B
          }, {
            text: " "
          }, {
            text: `${X}${dt}`,
            color: nt ? "permission" : void 0,
            dimColor: !nt && $t(V)
          }, {
            text: " "
          }, ...Ur(V, H, nt, b) ]
        }, `a-${K}`));
      }
    }
    let ot = D.length - gt;
    for (let mt = ot; mt < p; mt++) D.push(e(bt, {
      contentWidth: d,
      segs: [ {
        text: ""
      } ]
    }, `pad-${mt}`));
    if (v.length > p) {
      let Et = ` ${vt(L, v.length)} `;
      let St = Math.max(0, d + 2 - ie(Et));
      let W;
      if (k[35] !== St) W = JK.repeat(St), k[35] = St, k[36] = W; else W = k[36];
      let J;
      if (k[37] !== W) J = r(n, {
        color: "text",
        children: [ " ", Cv.bottomLeft, W ]
      }), k[37] = W, k[38] = J; else J = k[38];
      let j;
      if (k[39] !== Et) j = e(n, {
        dimColor: !0,
        children: Et
      }), k[39] = Et, k[40] = j; else j = k[40];
      let et;
      if (k[41] === S) et = e(n, {
        color: "text",
        children: Cv.bottomRight
      }), k[41] = et; else et = k[41];
      let pt;
      if (k[42] !== J || k[43] !== j) pt = r(n, {
        wrap: "truncate-end",
        children: [ J, j, et ]
      }), k[42] = J, k[43] = j, k[44] = pt; else pt = k[44];
      M = pt;
    } else {
      let W;
      if (k[45] !== A) W = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [ " ", Cv.bottomLeft, A, Cv.bottomRight ]
      }), k[45] = A, k[46] = W; else W = k[46];
      M = W;
    }
    k[2] = v, k[3] = A, k[4] = d, k[5] = T, k[6] = u, k[7] = l, k[8] = a, k[9] = h, 
    k[10] = p, k[11] = b, k[12] = M, k[13] = D;
  } else M = k[12], D = k[13];
  let W;
  if (k[47] !== A) W = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [ " ", Cv.topLeft, A, Cv.topRight ]
  }), k[47] = A, k[48] = W; else W = k[48];
  let J;
  if (k[49] !== M || k[50] !== D || k[51] !== W) J = r(s, {
    flexDirection: "column",
    children: [ W, D, M ]
  }), k[49] = M, k[50] = D, k[51] = W, k[52] = J; else J = k[52];
  return J;
}

function pn(o) {
  let p = w(12), {left: l, right: a, leftWidth: u, rightWidth: d} = o, h;
  if (p[0] === S) h = r(n, {
    color: "text",
    children: [ " ", qS.pipe, " " ]
  }), p[0] = h; else h = p[0];
  let b;
  if (p[1] !== l || p[2] !== u) b = e(ve, {
    segs: l,
    width: u
  }), p[1] = l, p[2] = u, p[3] = b; else b = p[3];
  let T;
  if (p[4] === S) T = r(n, {
    color: "text",
    children: [ " ", qS.pipe, " " ]
  }), p[4] = T; else T = p[4];
  let v;
  if (p[5] !== a || p[6] !== d) v = e(ve, {
    segs: a,
    width: d
  }), p[5] = a, p[6] = d, p[7] = v; else v = p[7];
  let k;
  if (p[8] === S) k = r(n, {
    color: "text",
    children: [ " ", qS.pipe ]
  }), p[8] = k; else k = p[8];
  let C;
  if (p[9] !== b || p[10] !== v) C = r(n, {
    wrap: "truncate-end",
    children: [ h, b, T, v, k ]
  }), p[9] = b, p[10] = v, p[11] = C; else C = p[11];
  return C;
}

function Jn(o, l) {
  let a = [], u = 0;
  if (l.label) {
    let h = ` ${ut(l.label.text, Math.max(1, o - 2))} `;
    u += ie(h), a.push(e(n, {
      color: l.label.color ?? "text",
      bold: l.label.bold,
      children: h
    }, "label"));
  }
  let d = l.tag ? ` ${ut(l.tag, Math.max(0, o - u - 2))} ` : "", p = Math.max(0, o - u - ie(d));
  if (a.push(e(n, {
    color: "text",
    children: JK.repeat(p)
  }, "dash")), d) a.push(e(n, {
    dimColor: !0,
    children: d
  }, "tag"));
  return a;
}

function Zt(o) {
  let C = w(20), {pos: l, leftWidth: a, rightWidth: u, leftTitle: d, rightTitle: p, leftTag: h, rightTag: b} = o, T = l === "top" ? Cv.topLeft : Cv.bottomLeft, v = l === "top" ? qS.teeDown : qS.teeUp, k = l === "top" ? Cv.topRight : Cv.bottomRight, A;
  if (C[0] !== T) A = r(n, {
    color: "text",
    children: [ " ", T ]
  }), C[0] = T, C[1] = A; else A = C[1];
  const M = a + 2;
  let D;
  if (C[2] !== h || C[3] !== d || C[4] !== M) D = Jn(M, {
    label: d ? {
      text: d
    } : void 0,
    tag: h
  }), C[2] = h, C[3] = d, C[4] = M, C[5] = D; else D = C[5];
  let L;
  if (C[6] !== v) L = e(n, {
    color: "text",
    children: v
  }), C[6] = v, C[7] = L; else L = C[7];
  const q = u + 2;
  let U;
  if (C[8] !== b || C[9] !== p || C[10] !== q) U = Jn(q, {
    label: p ? {
      text: p
    } : void 0,
    tag: b
  }), C[8] = b, C[9] = p, C[10] = q, C[11] = U; else U = C[11];
  let z;
  if (C[12] !== k) z = e(n, {
    color: "text",
    children: k
  }), C[12] = k, C[13] = z; else z = C[13];
  let W;
  if (C[14] !== A || C[15] !== D || C[16] !== L || C[17] !== U || C[18] !== z) W = r(n, {
    wrap: "truncate-end",
    children: [ A, D, L, U, z ]
  }), C[14] = A, C[15] = D, C[16] = L, C[17] = U, C[18] = z, C[19] = W; else W = C[19];
  return W;
}

function si(o, l, a, u, d) {
  let p = l === a, h = o.status === "done", b = o.status === "failed", T = h ? te.tick : b ? te.cross : String(l + 1), v = p ? "permission" : h ? "success" : b ? "error" : "subtle", k = o.totalCount > 0 ? `${o.doneCount}/${o.totalCount}` : "", C = u === "phases" && p ? `${te.pointer} ` : "  ", A = ie(C) + ie(T) + 1, M = k ? 1 + ie(k) : 0, D = ut(o.title, Math.max(1, d - A - M)), L = Math.max(0, d - A - ie(D) - M), q = !p && o.status === "not-started", U = [ {
    text: C,
    color: p ? "permission" : void 0
  }, {
    text: T,
    color: v
  }, {
    text: " "
  }, {
    text: D,
    color: p ? "permission" : void 0,
    dimColor: q
  }, {
    text: " ".repeat(L)
  } ];
  if (k) U.push({
    text: " "
  }, {
    text: k,
    color: p ? "permission" : "subtle"
  });
  return U;
}

function ii(o, l, a, u, d, p, h) {
  let b = u === "agents" && l === a, {glyph: T, color: v} = un(Dt(o, h)), k = ut(o.label, p), C = " ".repeat(Math.max(0, p - ie(k))), A = Math.max(0, d - (p + 4));
  return [ {
    text: b ? te.pointer : " ",
    color: "permission"
  }, {
    text: T,
    color: v
  }, {
    text: " "
  }, {
    text: `${k}${C}`,
    color: b ? "permission" : void 0,
    dimColor: !b && $t(o)
  }, {
    text: " "
  }, ...Ur(o, A, b, h) ];
}

function li(o, l, a, u, d) {
  let p = l === a, {glyph: h, color: b} = un(Dt(o, d)), T = ut(o.label, Math.max(1, u - 4));
  return [ {
    text: p ? `${te.pointer} ` : "  ",
    color: "permission"
  }, {
    text: h,
    color: b
  }, {
    text: " "
  }, {
    text: T,
    color: p ? "permission" : void 0,
    dimColor: !p && $t(o)
  } ];
}

function Yr(o) {
  let A = w(41), {phases: l, selectedPhase: a, clampedPhase: u, clampedAgent: d, level: p, leftWidth: h, rightWidth: b, viewport: T, workflowActive: v, filterLabel: k} = o, C = a.agents, M, D, L, q, U, z, W, J, j, et;
  if (A[0] !== C || A[1] !== d || A[2] !== u || A[3] !== k || A[4] !== h || A[5] !== p || A[6] !== l || A[7] !== b || A[8] !== a || A[9] !== T || A[10] !== v) {
    let pt = Bt(u, l.length, T);
    let gt = Bt(d, C.length, T);
    let wt = oo(C, b - 4);
    let K = [];
    for (let V = 0; V < T; V++) {
      let nt = pt.from + V;
      let it = gt.from + V;
      let B = nt < pt.to ? si(l[nt], nt, u, p, h) : [];
      let X;
      if (it < gt.to) X = ii(C[it], it, d, p, b, wt, v); else if (C.length === 0 && V === 0) X = [ {
        text: no(a, k),
        dimColor: !0
      } ]; else X = [];
      K.push(e(pn, {
        left: B,
        right: X,
        leftWidth: h,
        rightWidth: b
      }, V));
    }
    const dt = a.title;
    let H;
    if (A[21] !== C.length || A[22] !== k) H = qe(C.length, k), A[21] = C.length, A[22] = k, 
    A[23] = H; else H = A[23];
    let ot = `${dt} \xb7 ${H}`;
    D = s;
    J = "column";
    if (A[24] !== h || A[25] !== ot || A[26] !== b) j = e(Zt, {
      pos: "top",
      leftWidth: h,
      rightWidth: b,
      leftTitle: "Phases",
      rightTitle: ot
    }), A[24] = h, A[25] = ot, A[26] = b, A[27] = j; else j = A[27];
    et = K;
    M = Zt;
    L = "bottom";
    q = h;
    U = b;
    z = l.length > T ? vt(pt, l.length) : void 0;
    W = C.length > T ? vt(gt, C.length) : void 0;
    A[0] = C, A[1] = d, A[2] = u, A[3] = k, A[4] = h, A[5] = p, A[6] = l, A[7] = b, 
    A[8] = a, A[9] = T, A[10] = v, A[11] = M, A[12] = D, A[13] = L, A[14] = q, A[15] = U, 
    A[16] = z, A[17] = W, A[18] = J, A[19] = j, A[20] = et;
  } else M = A[11], D = A[12], L = A[13], q = A[14], U = A[15], z = A[16], W = A[17], 
  J = A[18], j = A[19], et = A[20];
  let dt;
  if (A[28] !== M || A[29] !== L || A[30] !== q || A[31] !== U || A[32] !== z || A[33] !== W) dt = e(M, {
    pos: L,
    leftWidth: q,
    rightWidth: U,
    leftTag: z,
    rightTag: W
  }), A[28] = M, A[29] = L, A[30] = q, A[31] = U, A[32] = z, A[33] = W, A[34] = dt; else dt = A[34];
  let H;
  if (A[35] !== D || A[36] !== J || A[37] !== j || A[38] !== et || A[39] !== dt) H = r(D, {
    flexDirection: J,
    children: [ j, et, dt ]
  }), A[35] = D, A[36] = J, A[37] = j, A[38] = et, A[39] = dt, A[40] = H; else H = A[40];
  return H;
}

var Ba = 2, Ga = 20, _r = go, fi = 100, mi = 250;

function Jr(o, l, a, u) {
  let A = w(13), [d, p] = y(null), b = Ae(zv)?.setTimeout ?? HI, T = R(void 0), v = R(0), k = R(0), C = R(null), M, D;
  if (A[0] === S) M = () => () => {
    C.current = null;
  }, D = [], A[0] = M, A[1] = D; else M = A[0], D = A[1];
  P(M, D);
  let L;
  if (A[2] !== l || A[3] !== u || A[4] !== b || A[5] !== o) L = () => {
    if (!o || !l) {
      return;
    }
    C.current = {
      runId: o,
      agentId: l
    };
    let q = v.current = v.current + 1;
    let z = () => {
      xo(o, l, {
        promptFramed: u
      }).catch(mc).then(U => {
        if (q > k.current && C.current?.runId === o && C.current.agentId === l) k.current = q, 
        T.current = l, p({
          agentId: l,
          transcript: U
        });
      });
    };
    if (T.current === l) {
      return b(z, mi);
    }
    z();
  }, A[2] = l, A[3] = u, A[4] = b, A[5] = o, A[6] = L; else L = A[6];
  let W;
  if (A[7] !== l || A[8] !== u || A[9] !== a || A[10] !== b || A[11] !== o) W = [ o, l, a, u, b ], 
  A[7] = l, A[8] = u, A[9] = a, A[10] = b, A[11] = o, A[12] = W; else W = A[12];
  if (P(L, W), !o || !l) {
    return null;
  }
  if (!d || d.agentId !== l) {
    return "loading";
  }
  return d.transcript;
}

function $r(o, l) {
  let a = [];
  for (let u of o.split(`\n`)) {
    if (u === "") {
      a.push("");
      continue;
    }
    for (let d of PXe(u, Math.max(1, l))) a.push(d);
  }
  return a;
}

function Ti({lines: o, title: l, body: a, collapsedLines: u, expanded: d, indent: p, width: h}) {
  let b = a.length - u, T = b >= 2 ? b : 0, v = [ {
    text: l,
    bold: !0,
    dimColor: !0
  } ];
  if (T > 0) v.push({
    text: ut(` \xb7 ${a.length} lines${d ? "" : ` \xb7 ${Pmt} expand`}`, h - ie(l)),
    dimColor: !0
  });
  o.push(v);
  let k = d || T === 0 ? a : a.slice(0, u);
  for (let C of k) o.push(C);
  if (!d && T > 0) o.push([ {
    text: ut(`${p}\u2026 ${T} more ${I(T, "line")}`, h),
    dimColor: !0
  } ]);
  return T;
}

function Ci(o, l) {
  let a = 0;
  for (let u of l) {
    if (o < u.end) break;
    a += u.growth;
  }
  return o + a;
}

function ki(o, l) {
  let a = 0;
  for (let u of l) {
    let d = u.end + a;
    if (o < d) break;
    if (o < d + u.growth) return u.end;
    a += u.growth;
  }
  return o - a;
}

var ro = {
  queued: "Queued",
  running: "Running",
  done: "Completed",
  failed: "Failed",
  skipped: "Skipped",
  blocked: "Blocked",
  interrupted: "Stopped"
};

function Si({agent: o, status: l, transcript: a, expanded: u, width: d, nowMs: p}) {
  let h = [], b = "  ", T = Math.max(8, d - 2), v = a === "loading" ? null : a, {glyph: k, color: C} = un(l), A = [];
  if (o.model != null) A.push(WQe(o.model, o.fallbackModel));
  if (o.agentType != null) A.push(o.agentType);
  if (o.isolation != null) A.push(o.isolation === "remote" && o.remoteSessionId ? `remote ${o.remoteSessionId}` : o.isolation);
  if (o.cached) A.push("from resume journal");
  if (o.attempt != null && o.attempt > 1) {
    let H = o.lastAttemptReason === "throttled" ? o.label.endsWith(cMn) ? c8t : "throttled" : o.lastAttemptReason === "user-retry" ? "user retry" : "stalled";
    A.push(`attempt ${o.attempt} (${H})`);
  }
  let M = ie(k) + 1 + ie(ro[l]), D = A.length > 0 ? ut(` \xb7 ${A.join(" \xb7 ")}`, Math.max(0, d - M)) : "";
  h.push([ {
    text: k,
    color: C
  }, {
    text: " "
  }, {
    text: ro[l],
    color: C,
    bold: !0
  }, ...D ? [ {
    text: D,
    dimColor: !0
  } ] : [] ]);
  let L = [];
  if (o.tokens != null) L.push(`${xr(o.tokens)} tok`);
  if (o.toolCalls != null && o.toolCalls > 0) L.push(`${o.toolCalls} ${I(o.toolCalls, "tool call")}`);
  if (o.durationMs != null) L.push(rn(o.durationMs));
  if (l === "queued" && o.queuedAt != null) L.push(`waiting ${rn(Math.max(0, p - o.queuedAt))}`);
  if (l === "running" && o.lastProgressAt != null) {
    let H = Math.floor((p - o.lastProgressAt) / 1e3);
    if (H >= 30) L.push(`idle ${rn(H * 1e3)}`);
  }
  if (L.length > 0) h.push([ {
    text: ut(L.join(" \xb7 "), d),
    dimColor: !0
  } ]);
  h.push([ {
    text: ""
  } ]);
  let q = l !== "queued" && v ? v.toolCalls : [], U = l === "running", z = q.filter(H => Ve(H, U) === "running"), W = q, J = v?.tasks ?? [], j = J.length > 0 ? Io({
    tasks: J,
    expanded: !1,
    width: d,
    indent: "  "
  }) : null, et = J.length > 0 ? Io({
    tasks: J,
    expanded: !0,
    width: d,
    indent: "  "
  }) : null, pt = u ? et : j, gt = W.length > 0 || (pt?.capped ?? !1), wt = a !== "loading" && a?.prompt ? a.prompt : o.promptPreview ?? "", K = wt ? $r(wt, T).map(H => [ {
    text: "  " + H,
    dimColor: !0
  } ]) : [ [ {
    text: "  " + (l === "queued" ? "Available once the agent starts." : a === "loading" ? "Loading\u2026" : l === "running" ? "Not available yet (agent still running)." : "Transcript not available."),
    dimColor: !0
  } ] ], V = Ti({
    lines: h,
    title: "Prompt",
    body: K,
    collapsedLines: Ba,
    expanded: u,
    indent: "  ",
    width: d
  }), nt = V > 0 ? V - 1 : 0, it = nt, B = [ {
    end: h.length - (u ? it : 0),
    growth: nt
  } ];
  if (h.push([ {
    text: ""
  } ]), pt && j && et) {
    for (let ot of pt.lines) h.push(ot);
    let H = et.lines.length - j.lines.length;
    it += H, B.push({
      end: h.length - (u ? it : 0),
      growth: H
    }), h.push([ {
      text: ""
    } ]);
  }
  if (l !== "queued") {
    let H = W.length - _r, ot = Math.max(0, H - _r);
    while (!1) H--;
    let mt = W.filter((_t, yt) => yt >= H || Ve(_t, U) === "running"), Et = [];
    for (let [_t, yt] of mt.entries()) {
      if (_t > 0) Et.push([ {
        text: ""
      } ]);
      let Ot = Ve(yt, U);
      Et.push(...Es({
        call: yt,
        state: Ot,
        width: d,
        indent: "  "
      }));
    }
    let St = "";
    if (W.length > mt.length) St = ` \xb7 ${mt.length <= _r ? "last " : ""}${mt.length} of ${W.length} tool calls`;
    let Gt = Math.max(0, d - ie("Activity")), ee = ` \xb7 ${Pmt} expand`;
    if (St = !u && gt && ie(St) + ie(ee) <= Gt ? St + ee : ut(St, Gt), h.push([ {
      text: "Activity",
      bold: !0,
      dimColor: !0
    }, ...St ? [ {
      text: St,
      dimColor: !0
    } ] : [] ]), W.length > 0) {
      if (u) for (let yt of Et) h.push(yt); else for (let yt of mt) {
        let Ot = Ve(yt, U);
        h.push(No({
          call: yt,
          state: Ot,
          width: d,
          indent: "  "
        }));
      }
      let _t = Et.length - mt.length;
      it += _t, B.push({
        end: h.length - (u ? it : 0),
        growth: _t
      });
    } else if (o.lastToolName != null) {
      let _t = o.lastToolSummary ? `(${o.lastToolSummary})` : "", yt = Do(o.lastToolName);
      h.push([ {
        text: ut(`  ${yt}${_t}`, d),
        dimColor: !0
      } ]);
    } else h.push([ {
      text: `  ${l === "running" ? "No tool calls yet." : "No tool calls."}`,
      dimColor: !0
    } ]);
    h.push([ {
      text: ""
    } ]);
  }
  let X = [];
  switch (l) {
   case "queued":
    X.push([ {
      text: "  Waiting for an agent slot.",
      dimColor: !0
    } ]);
    break;

   case "running":
    X.push([ {
      text: `${"  "}Still running\u2026`,
      dimColor: !0
    } ]);
    break;

   case "interrupted":
    X.push([ {
      text: "  The workflow stopped before this agent finished.",
      dimColor: !0
    } ]);
    break;

   case "skipped":
    X.push([ {
      text: "  Skipped by user.",
      dimColor: !0
    } ]);
    break;

   case "blocked":
   case "failed":
    {
      for (let H of $r(o.error ?? "failed", T)) X.push([ {
        text: "  " + H,
        color: "error"
      } ]);
      break;
    }

   case "done":
    {
      let H = a !== "loading" && a?.finalText ? a.finalText : o.resultPreview ?? "";
      if (!H) {
        X.push([ {
          text: "  " + (a === "loading" ? "Loading\u2026" : "(empty)"),
          dimColor: !0
        } ]);
        break;
      }
      let ot = gs(H, T);
      if (ot) for (let mt of ot) X.push([ {
        text: "  "
      }, ...mt ]); else for (let mt of $r(H, T)) X.push([ {
        text: "  " + mt
      } ]);
      break;
    }
  }
  let dt = Ti({
    lines: h,
    title: "Outcome",
    body: X,
    collapsedLines: Ga,
    expanded: u,
    indent: "  ",
    width: d
  });
  return {
    lines: h,
    expandable: V > 0 || dt > 0 || gt,
    folds: B,
    detailExpandable: gt
  };
}

function Vr(o) {
  let A = w(42), {phase: l, clampedAgent: a, agentLabel: u, detailLines: d, cardScroll: p, leftWidth: h, rightWidth: b, viewport: T, workflowActive: v, filterLabel: k} = o, C = l.agents, M, D, L, q, U, z, W, J, j, et;
  if (A[0] !== u || A[1] !== C || A[2] !== p || A[3] !== a || A[4] !== d || A[5] !== k || A[6] !== h || A[7] !== l.title || A[8] !== b || A[9] !== T || A[10] !== v) {
    let pt = Bt(a, C.length, T);
    let gt = Math.max(0, d.length - T);
    let wt = Pt(p, 0, gt);
    let K = Math.min(d.length, wt + T);
    let V = [];
    for (let nt = 0; nt < T; nt++) {
      let it = pt.from + nt;
      let B = it < pt.to ? li(C[it], it, a, h, v) : [];
      let X = wt + nt;
      let dt = X < K ? d[X] : [];
      V.push(e(pn, {
        left: B,
        right: dt,
        leftWidth: h,
        rightWidth: b
      }, nt));
    }
    D = s;
    J = "column";
    const H = l.title;
    let ot;
    if (A[21] !== C.length || A[22] !== k) ot = qe(C.length, k), A[21] = C.length, A[22] = k, 
    A[23] = ot; else ot = A[23];
    const mt = `${H} \xb7 ${ot}`;
    if (A[24] !== u || A[25] !== h || A[26] !== b || A[27] !== mt) j = e(Zt, {
      pos: "top",
      leftWidth: h,
      rightWidth: b,
      leftTitle: mt,
      rightTitle: u
    }), A[24] = u, A[25] = h, A[26] = b, A[27] = mt, A[28] = j; else j = A[28];
    et = V;
    M = Zt;
    L = "bottom";
    q = h;
    U = b;
    z = C.length > T ? vt(pt, C.length) : void 0;
    W = d.length > T ? vt({
      from: wt,
      to: K
    }, d.length) : void 0;
    A[0] = u, A[1] = C, A[2] = p, A[3] = a, A[4] = d, A[5] = k, A[6] = h, A[7] = l.title, 
    A[8] = b, A[9] = T, A[10] = v, A[11] = M, A[12] = D, A[13] = L, A[14] = q, A[15] = U, 
    A[16] = z, A[17] = W, A[18] = J, A[19] = j, A[20] = et;
  } else M = A[11], D = A[12], L = A[13], q = A[14], U = A[15], z = A[16], W = A[17], 
  J = A[18], j = A[19], et = A[20];
  let H;
  if (A[29] !== M || A[30] !== L || A[31] !== q || A[32] !== U || A[33] !== z || A[34] !== W) H = e(M, {
    pos: L,
    leftWidth: q,
    rightWidth: U,
    leftTag: z,
    rightTag: W
  }), A[29] = M, A[30] = L, A[31] = q, A[32] = U, A[33] = z, A[34] = W, A[35] = H; else H = A[35];
  let ot;
  if (A[36] !== D || A[37] !== J || A[38] !== j || A[39] !== et || A[40] !== H) ot = r(D, {
    flexDirection: J,
    children: [ j, et, H ]
  }), A[36] = D, A[37] = J, A[38] = j, A[39] = et, A[40] = H, A[41] = ot; else ot = A[41];
  return ot;
}

function Br(o) {
  let b = w(43), {agentLabel: l, position: a, detailLines: u, cardScroll: d, contentWidth: p, viewport: h} = o, T;
  if (b[0] !== p) T = JK.repeat(p + 2), b[0] = p, b[1] = T; else T = b[1];
  let v = T, k = Math.max(0, u.length - h), C, A;
  if (b[2] !== l || b[3] !== v || b[4] !== d || b[5] !== p || b[6] !== u || b[7] !== k || b[8] !== a || b[9] !== h) {
    let M = Pt(d, 0, k);
    let D = Math.min(u.length, M + h);
    A = [];
    let L = ` \xb7 ${a}`;
    const q = Math.max(1, p - ie(L));
    let U;
    if (b[12] !== l || b[13] !== q) U = ut(l, q), b[12] = l, b[13] = q, b[14] = U; else U = b[14];
    let z;
    if (b[15] !== U) z = {
      text: U,
      color: "permission",
      bold: !0
    }, b[15] = U, b[16] = z; else z = b[16];
    let W;
    if (b[17] !== L) W = {
      text: L,
      dimColor: !0
    }, b[17] = L, b[18] = W; else W = b[18];
    let J;
    if (b[19] !== z || b[20] !== W) J = [ z, W ], b[19] = z, b[20] = W, b[21] = J; else J = b[21];
    let j;
    if (b[22] !== p || b[23] !== J) j = e(bt, {
      contentWidth: p,
      segs: J
    }, "title"), b[22] = p, b[23] = J, b[24] = j; else j = b[24];
    A.push(j);
    for (let et = M; et < D; et++) A.push(e(bt, {
      contentWidth: p,
      segs: u[et]
    }, `l-${et}`));
    for (let pt = D - M; pt < h; pt++) A.push(e(bt, {
      contentWidth: p,
      segs: [ {
        text: ""
      } ]
    }, `pad-${pt}`));
    if (u.length > h) {
      let gt = ` ${vt({
        from: M,
        to: D
      }, u.length)} `;
      let wt = Math.max(0, p + 2 - ie(gt));
      let K;
      if (b[25] !== wt) K = JK.repeat(wt), b[25] = wt, b[26] = K; else K = b[26];
      let V;
      if (b[27] !== K) V = r(n, {
        color: "text",
        children: [ " ", Cv.bottomLeft, K ]
      }), b[27] = K, b[28] = V; else V = b[28];
      let nt;
      if (b[29] !== gt) nt = e(n, {
        dimColor: !0,
        children: gt
      }), b[29] = gt, b[30] = nt; else nt = b[30];
      let it;
      if (b[31] === S) it = e(n, {
        color: "text",
        children: Cv.bottomRight
      }), b[31] = it; else it = b[31];
      let B;
      if (b[32] !== nt || b[33] !== V) B = r(n, {
        wrap: "truncate-end",
        children: [ V, nt, it ]
      }), b[32] = nt, b[33] = V, b[34] = B; else B = b[34];
      C = B;
    } else {
      let K;
      if (b[35] !== v) K = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [ " ", Cv.bottomLeft, v, Cv.bottomRight ]
      }), b[35] = v, b[36] = K; else K = b[36];
      C = K;
    }
    b[2] = l, b[3] = v, b[4] = d, b[5] = p, b[6] = u, b[7] = k, b[8] = a, b[9] = h, 
    b[10] = C, b[11] = A;
  } else C = b[10], A = b[11];
  let q;
  if (b[37] !== v) q = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [ " ", Cv.topLeft, v, Cv.topRight ]
  }), b[37] = v, b[38] = q; else q = b[38];
  let U;
  if (b[39] !== C || b[40] !== A || b[41] !== q) U = r(s, {
    flexDirection: "column",
    children: [ q, A, C ]
  }), b[39] = C, b[40] = A, b[41] = q, b[42] = U; else U = b[42];
  return U;
}

function IQe({workflow: o, onDone: l, onBack: a, onKill: u, onSkipAgent: d, onRetryAgent: p, onPause: h, onResume: b, initialPhaseIndex: T, promptVisibleBelow: v = !1}) {
  fa("workflow-detail-dialog");
  let {availableRows: k, width: C, rows: A} = v3n(v), M = Math.max(12, C - 6), D = zQe(o), L = Z(() => U$r(o), [ o.workflowProgress, o.phases ]), q = Z(() => W$r(L, o.agentCount), [ L, o.agentCount ]), [U, z] = y(() => T !== void 0 ? Math.max(0, T) : 0), [W, J] = y(0), [j, et] = y(T !== void 0 ? "agents" : "phases"), [pt, gt] = y(!1), [wt, K] = y({
    scroll: 0,
    expanded: !1
  }), {scroll: V, expanded: nt} = wt, [it, B] = y("all"), X = Math.min(U, Math.max(0, L.length - 1)), dt = L[X], H = o.status === "running", ot = Z(() => {
    if (!dt || it === "all" || j === "phases") return dt;
    return {
      ...dt,
      agents: dt.agents.filter(O => Dt(O, H) === it)
    };
  }, [ dt, it, j, H ]), mt = ot ? Math.min(W, Math.max(0, ot.agents.length - 1)) : 0, [Et, St] = y(!1), Gt = o.script.length > 0, ee = Z(() => {
    if (!Gt) return "";
    let O = SS(o.script);
    if (!("error" in O)) return O.meta.name;
    return Goe(o.summary ?? o.description);
  }, [ Gt, o.script, o.summary, o.description ]), _t = Z(() => z$r(o), [ o.script, o.description, o.summary ]), {name: yt, subtext: Ot, stats: pe} = G$r(o, _t, q, D);
  function fe() {
    K({
      scroll: 0,
      expanded: !1
    });
  }
  function Ke(O) {
    z(Tt => Pt(Pt(Tt, 0, L.length - 1) + O, 0, L.length - 1)), J(0), fe();
  }
  function so(O) {
    if (!ot) return;
    J(Tt => Pt(Pt(Tt, 0, ot.agents.length - 1) + O, 0, ot.agents.length - 1)), fe();
  }
  function fn(O) {
    K(Tt => ({
      ...Tt,
      scroll: Math.max(0, Tt.scroll + O)
    }));
  }
  function oe(O) {
    if (j === "phases") {
      Ke(O);
      return;
    }
    so(O);
  }
  function mn() {
    if (gt(!1), j === "agent") {
      et("agents");
      return;
    }
    if (j === "agents") {
      et("phases");
      return;
    }
    if (a) a(); else l();
  }
  function io() {
    if (dt && dt.agents.length > 0) J(0), B("all"), et("agents");
  }
  function gn() {
    if (!at || !dt) return;
    if (it !== "all") B("all"), J(dt.agents.indexOf(at));
    if (fe(), bn === "loading") gt(!0); else et("agent");
  }
  function hn() {
    if (!dt || pt) return;
    let O = new Set(dt.agents.map(Tt => Dt(Tt, H)));
    B(Tt => {
      let Lt = Yt.indexOf(Tt);
      for (let se = 0; se < Yt.length; se++) {
        Lt = (Lt + 1) % Yt.length;
        let as = Yt[Lt];
        if (as === "all" || O.has(as)) break;
      }
      return Yt[Lt];
    }), J(0), fe();
  }
  let at = j !== "phases" && ot ? ot.agents[mt] : void 0, zt = at ? Dt(at, H) : void 0, Le = !!at && $t(at) && !!at.agentId && (!!d || !!u), Re = !!at && $t(at) && !!at.agentId && !!p, re = C - 9, lo = ot ? Math.max(14, ...ot.agents.map(O => 4 + ie(O.label))) : 14, ao = Math.max(12, Math.min(30, lo, re - 30)), xn = re - ao, co = j === "agent" && L.length > 0 && C >= 64 && xn >= 30, Gr = co ? xn : M, bn = Jr(o.workflowRunId, at?.agentId, at?.lastProgressAt, at?.promptFramed), Ii = qr(pt ? fi : null);
  if (pt) {
    if (!at) gt(!1); else if (bn !== "loading" || Ii) gt(!1), et("agent");
  }
  let zr = zt === "queued" || zt === "running" ? Math.floor(Date.now() / 1e3) * 1e3 : 0, He = Z(() => j === "agent" && at && zt ? Si({
    agent: at,
    status: zt,
    transcript: bn,
    expanded: nt,
    width: Gr,
    nowMs: zr
  }) : {
    lines: [],
    expandable: !1,
    folds: [],
    detailExpandable: !1
  }, [ j, at, zt, bn, nt, Gr, zr ]), wn = He.lines;
  function Ni() {
    if (!at || !$t(at)) return;
    if (at.agentId && d) d(at.agentId); else if (u) u();
  }
  function Di() {
    if (at && $t(at) && at.agentId) p?.(at.agentId);
  }
  nn({
    "confirm:previous": () => oe(-1),
    "confirm:next": () => oe(1)
  }, {
    context: "Confirmation"
  });
  let uo = o.status === "running" && !!h, po = o.status === "paused" && !!o.scriptPath && !!o.workflowRunId && !!b, Xr = o.status === "running" && !!u && j === "phases";
  function Oi() {
    if (uo) h?.(); else if (po) b?.(NZn(o));
  }
  let Fi = O => {
    if (O.ctrl || O.meta) return;
    if (O.key === "j") if (O.preventDefault(), j === "agent") fn(1); else oe(1); else if (O.key === "k") if (O.preventDefault(), 
    j === "agent") fn(-1); else oe(-1); else if (O.key === "return" || O.key === "right") {
      if (O.preventDefault(), j === "phases") io(); else if (j === "agents") gn(); else if (O.key === "return" && He.expandable) {
        if (!nt && He.detailExpandable) g("workflow_agent_card_detail");
        let {folds: Tt} = He;
        K(({scroll: Lt, expanded: se}) => ({
          expanded: !se,
          scroll: se ? ki(Lt, Tt) : Ci(Lt, Tt)
        }));
      }
    } else if (O.key === "left") O.preventDefault(), mn(); else if (O.key === "r" && Re) O.preventDefault(), 
    Di(); else if (O.key === "x" && Le) O.preventDefault(), Ni(); else if (O.key === "x" && Xr) O.preventDefault(), 
    u?.(); else if (O.key === " ") O.preventDefault(), l(); else if (O.key === "p" && (uo || po)) O.preventDefault(), 
    Oi(); else if (O.key === "f" && j === "agents") O.preventDefault(), hn(); else if (O.key === "s" && Gt) O.preventDefault(), 
    St(!0);
  }, yn = L.length > 0;
  if (Et) return e(myt, {
    script: o.script,
    defaultName: ee,
    onDone: O => {
      if (O) l(O); else St(!1);
    }
  });
  let Qt = k < 18, Zr = k - (Qt ? 8 : 11), ts = Math.max(1, Zr - 3), fo = L.length > ts, es = fo ? Math.max(1, ts - 1) : L.length, ji = Math.max(1, Zr - es - (fo ? 1 : 0)), Tn = Bt(X, L.length, es), Ui = Math.max(14, ...L.map((O, Tt) => {
    let Lt = O.status === "done" ? te.tick : O.status === "failed" ? te.cross : String(Tt + 1), se = O.totalCount > 0 ? `${O.doneCount}/${O.totalCount}` : "";
    return 2 + ie(Lt) + 1 + ie(O.title) + (se ? 1 + ie(se) : 0);
  })), ns = Math.max(12, Math.min(34, Ui, re - 24)), os = re - ns, qi = j !== "agent" && yn && C >= 64 && os >= 20, mo = Math.max(1, k - (Qt ? 7 : 8)), rs = Math.max(3, k - (Qt ? 8 : 9)), is = co ? mo : rs, ls = Math.max(0, wn.length - is);
  if (V > ls) K({
    scroll: ls,
    expanded: nt
  });
  let Ye = it !== "all" && j !== "phases" ? ro[it].toLowerCase() : void 0, At = [];
  if (j === "agent") {
    if (At.push(`${p$}${lI} agent`), wn.length > is) At.push("j/k scroll");
    if (He.expandable) At.push(`${Pmt} ${nt ? "collapse" : "expand"}`);
  } else if (yn) At.push(`${p$}${lI} select`);
  if (Le) At.push("x stop");
  if (Xr) At.push("x stop workflow");
  if (Re) At.push("r restart");
  if (uo) At.push("p pause"); else if (po) At.push("p resume");
  if (j === "agents" && yn) At.push(Ye ? `f filter: ${Ye}` : "f filter");
  if (At.push("esc back"), Gt) At.push("s save");
  let Ki = At.join(" \xb7 ");
  return e(bo, {
    onKeyDown: Fi,
    children: e(be, {
      title: null,
      hideBorder: !0,
      hideInputGuide: !0,
      onCancel: mn,
      color: "text",
      children: r(s, {
        flexDirection: "column",
        width: C,
        minHeight: Math.max(Qt ? 8 : 12, Math.min(k - 1, A - 6)),
        maxHeight: Math.max(Qt ? 8 : 11, k - 1),
        overflowY: "hidden",
        children: [ !yn ? r(Q, {
          children: [ e(_o, {
            children: "No agents yet."
          }), e(s, {
            flexGrow: 1
          }) ]
        }) : j === "agent" && at && ot ? r(Q, {
          children: [ e(GQe, {
            name: yt,
            subtext: Ot,
            stats: pe,
            width: C
          }), !Qt && e(s, {
            height: 1
          }), co ? e(Vr, {
            phase: ot,
            clampedAgent: mt,
            agentLabel: at.label,
            detailLines: wn,
            cardScroll: V,
            leftWidth: ao,
            rightWidth: xn,
            viewport: mo,
            workflowActive: H,
            filterLabel: Ye
          }) : e(Br, {
            agentLabel: at.label,
            position: `${mt + 1}/${ot.agents.length}`,
            detailLines: wn,
            cardScroll: V,
            contentWidth: M,
            viewport: rs
          }), e(s, {
            flexGrow: 1
          }) ]
        }) : qi && ot ? r(Q, {
          children: [ e(GQe, {
            name: yt,
            subtext: Ot,
            stats: pe,
            width: C
          }), !Qt && e(s, {
            height: 1
          }), e(Yr, {
            phases: L,
            selectedPhase: ot,
            clampedPhase: X,
            clampedAgent: mt,
            level: j === "phases" ? "phases" : "agents",
            leftWidth: ns,
            rightWidth: os,
            viewport: mo,
            workflowActive: H,
            filterLabel: Ye
          }), e(s, {
            flexGrow: 1
          }) ]
        }) : r(Q, {
          children: [ e(GQe, {
            name: yt,
            subtext: Ot,
            stats: pe,
            width: C
          }), !Qt && e(s, {
            height: 1
          }), L.slice(Tn.from, Tn.to).map((O, Tt) => {
            let Lt = Tn.from + Tt;
            return e(E3n, {
              index: Lt + 1,
              title: O.title,
              done: O.doneCount,
              total: O.totalCount,
              status: O.status,
              selected: Lt === X
            }, `${Lt}-${O.title}`);
          }), fo && e(Kr, {
            win: Tn,
            total: L.length
          }), e(s, {
            flexGrow: 1
          }), ot ? e(Hr, {
            phase: ot,
            selectedAgent: mt,
            level: j === "phases" ? "phases" : "agents",
            contentWidth: M,
            viewport: ji,
            tight: Qt,
            workflowActive: H,
            filterLabel: Ye
          }) : null ]
        }), r(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: [ " ", Ki ]
        }) ]
      })
    })
  });
}

export { myt, IQe };
