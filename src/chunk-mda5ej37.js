// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { oD, Iee, Sl } from "./chunk-yxennhe9.js";

import { PMn, Hh, pf } from "./chunk-bp2n0w3d.js";

function Q1t() {
  return {
    bold: !1,
    dim: !1,
    italic: !1,
    underline: "none",
    blink: !1,
    inverse: !1,
    hidden: !1,
    strikethrough: !1,
    overline: !1,
    fg: {
      type: "default"
    },
    bg: {
      type: "default"
    },
    underlineColor: {
      type: "default"
    }
  };
}

var BWo = Sl(0, "m"), Egn = Sl(1, "m"), V9n = Sl(2, "m"), jWo = Sl(4, "m"), WWo = Sl(7, "m"), zWo = Sl(33, "m"), K9n = Sl(22, "m"), kgn = Sl(24, "m"), Z1t = Sl(27, "m"), GWo = Sl(29, "m"), Tgn = Sl(39, "m"), q9n = Sl(49, "m"), VWo = Sl(55, "m"), h = [ "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightBlack", "brightRed", "brightGreen", "brightYellow", "brightBlue", "brightMagenta", "brightCyan", "brightWhite" ], _ = [ "none", "single", "double", "curly", "dotted", "dashed" ];

function A(e) {
  if (e === "") return [ {
    value: 0,
    subparams: [],
    colon: !1
  } ];
  let n = [], o = {
    value: null,
    subparams: [],
    colon: !1
  }, t = "", i = !1;
  for (let s = 0; s <= e.length; s++) {
    let r = e[s];
    if (r === ";" || r === void 0) {
      let a = t === "" ? null : parseInt(t, 10);
      if (i) {
        if (a !== null) o.subparams.push(a);
      } else o.value = a;
      n.push(o), o = {
        value: null,
        subparams: [],
        colon: !1
      }, t = "", i = !1;
    } else if (r === ":") {
      let a = t === "" ? null : parseInt(t, 10);
      if (!i) o.value = a, o.colon = !0, i = !0; else if (a !== null) o.subparams.push(a);
      t = "";
    } else if (r >= "0" && r <= "9") t += r;
  }
  return n;
}

function w(e, n) {
  let o = e[n];
  if (!o) return null;
  if (o.colon && o.subparams.length >= 1) {
    if (o.subparams[0] === 5 && o.subparams.length >= 2) return {
      index: o.subparams[1]
    };
    if (o.subparams[0] === 2 && o.subparams.length >= 4) {
      let i = o.subparams.length >= 5 ? 1 : 0;
      return {
        r: o.subparams[1 + i],
        g: o.subparams[2 + i],
        b: o.subparams[3 + i]
      };
    }
  }
  let t = e[n + 1];
  if (!t) return null;
  if (t.value === 5 && e[n + 2]?.value !== null && e[n + 2]?.value !== void 0) return {
    index: e[n + 2].value
  };
  if (t.value === 2) {
    let i = e[n + 2]?.value, s = e[n + 3]?.value, r = e[n + 4]?.value;
    if (i !== null && i !== void 0 && s !== null && s !== void 0 && r !== null && r !== void 0) return {
      r: i,
      g: s,
      b: r
    };
  }
  return null;
}

function KWo(e, n) {
  let o = A(e), t = {
    ...n
  }, i = 0;
  while (i < o.length) {
    let s = o[i], r = s.value ?? 0;
    if (r === 0) {
      t = Q1t(), i++;
      continue;
    }
    if (r === 1) {
      t.bold = !0, i++;
      continue;
    }
    if (r === 2) {
      t.dim = !0, i++;
      continue;
    }
    if (r === 3) {
      t.italic = !0, i++;
      continue;
    }
    if (r === 4) {
      t.underline = s.colon ? _[s.subparams[0]] ?? "single" : "single", i++;
      continue;
    }
    if (r === 5 || r === 6) {
      t.blink = !0, i++;
      continue;
    }
    if (r === 7) {
      t.inverse = !0, i++;
      continue;
    }
    if (r === 8) {
      t.hidden = !0, i++;
      continue;
    }
    if (r === 9) {
      t.strikethrough = !0, i++;
      continue;
    }
    if (r === 21) {
      t.underline = "double", i++;
      continue;
    }
    if (r === 22) {
      t.bold = !1, t.dim = !1, i++;
      continue;
    }
    if (r === 23) {
      t.italic = !1, i++;
      continue;
    }
    if (r === 24) {
      t.underline = "none", i++;
      continue;
    }
    if (r === 25) {
      t.blink = !1, i++;
      continue;
    }
    if (r === 27) {
      t.inverse = !1, i++;
      continue;
    }
    if (r === 28) {
      t.hidden = !1, i++;
      continue;
    }
    if (r === 29) {
      t.strikethrough = !1, i++;
      continue;
    }
    if (r === 53) {
      t.overline = !0, i++;
      continue;
    }
    if (r === 55) {
      t.overline = !1, i++;
      continue;
    }
    if (r >= 30 && r <= 37) {
      t.fg = {
        type: "named",
        name: h[r - 30]
      }, i++;
      continue;
    }
    if (r === 39) {
      t.fg = {
        type: "default"
      }, i++;
      continue;
    }
    if (r >= 40 && r <= 47) {
      t.bg = {
        type: "named",
        name: h[r - 40]
      }, i++;
      continue;
    }
    if (r === 49) {
      t.bg = {
        type: "default"
      }, i++;
      continue;
    }
    if (r >= 90 && r <= 97) {
      t.fg = {
        type: "named",
        name: h[r - 90 + 8]
      }, i++;
      continue;
    }
    if (r >= 100 && r <= 107) {
      t.bg = {
        type: "named",
        name: h[r - 100 + 8]
      }, i++;
      continue;
    }
    if (r === 38 || r === 48 || r === 58) {
      let a = w(o, i);
      if (a) {
        let l = "index" in a ? {
          type: "indexed",
          index: a.index
        } : {
          type: "rgb",
          ...a
        };
        if (r === 38) t.fg = l; else if (r === 48) t.bg = l; else t.underlineColor = l;
      }
      let c = o[i + 1]?.value;
      i += s.colon ? 1 : c === 5 ? 3 : c === 2 ? 5 : 1;
      continue;
    }
    if (r === 59) {
      t.underlineColor = {
        type: "default"
      }, i++;
      continue;
    }
    i++;
  }
  return t;
}

var P = oD + String.fromCharCode(Iee.APC), G = `${P}G`, m = 4096, K = 1109742, N = String.fromCodePoint(K), ejt = 256, b = 4294967295, R = 1e4, f = {
  mask: 255,
  redShift: 16,
  greenShift: 8
}, y = [ 773, 781, 782, 784, 786, 829, 830, 831, 838, 842, 843, 844, 848, 849, 850, 855, 859, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 1155, 1156, 1157, 1158, 1159, 1426, 1427, 1428, 1429, 1431, 1432, 1433, 1436, 1437, 1438, 1439, 1440, 1441, 1448, 1449, 1451, 1452, 1455, 1476, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1623, 1624, 1625, 1626, 1627, 1629, 1630, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1764, 1767, 1768, 1771, 1772, 1840, 1842, 1843, 1845, 1846, 1850, 1853, 1855, 1856, 1857, 1859, 1861, 1863, 1865, 1866, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2035, 2070, 2071, 2072, 2073, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2085, 2086, 2087, 2089, 2090, 2091, 2092, 2093, 2385, 2387, 2388, 3970, 3971, 3974, 3975, 4957, 4958, 4959, 6109, 6458, 6679, 6773, 6774, 6775, 6776, 6777, 6778, 6779, 6780, 7019, 7021, 7022, 7023, 7024, 7025, 7026, 7027, 7376, 7377, 7378, 7386, 7387, 7392, 7616, 7617, 7619, 7620, 7621, 7622, 7623, 7624, 7625, 7627, 7628, 7633, 7634, 7635, 7636, 7637, 7638, 7639, 7640, 7641, 7642, 7643, 7644, 7645, 7646, 7647, 7648, 7649, 7650, 7651, 7652, 7653, 7654, 7678, 8400, 8401, 8404, 8405, 8406, 8407, 8411, 8412, 8417, 8423, 8425, 8432, 11503, 11504, 11505, 11744, 11745, 11746, 11747, 11748, 11749, 11750, 11751, 11752, 11753, 11754, 11755, 11756, 11757, 11758, 11759, 11760, 11761, 11762, 11763, 11764, 11765, 11766, 11767, 11768, 11769, 11770, 11771, 11772, 11773, 11774, 11775, 42607, 42620, 42621, 42736, 42737, 43232, 43233, 43234, 43235, 43236, 43237, 43238, 43239, 43240, 43241, 43242, 43243, 43244, 43245, 43246, 43247, 43248, 43249, 43696, 43698, 43699, 43703, 43704, 43710, 43711, 43713, 65056, 65057, 65058, 65059, 65060, 65061, 65062, 68111, 68152, 119173, 119174, 119175, 119176, 119177, 119210, 119211, 119212, 119213, 119362, 119363, 119364 ], L = m / 4 * 3;

function u(e, n) {
  if (!Number.isInteger(e) || e < 1 || e > n) throw TypeError("kitty graphics: an id, cell count or pixel size must be a positive integer within its range");
}

function D(e) {
  if (typeof e !== "string" || !/^[A-Za-z0-9+/]*={0,2}$/.test(e)) throw TypeError("kitty graphics: payload must be standard base64 (A-Z a-z 0-9 + / =)");
}

function k(e) {
  if (!(typeof e === "string" && e !== "" && !e.includes("\0") && Buffer.byteLength(e, "utf8") <= L)) throw TypeError("kitty graphics: a file path or shared-memory name must be a non-empty string of at most 3072 bytes, no NUL");
}

var v = e => Buffer.from(e, "utf8").toString("base64");

function O(e) {
  u(e, b);
  let n = e < ejt, o = e >>> f.redShift & f.mask, t = e >>> f.greenShift & f.mask, i = e & f.mask;
  return Sl(n ? `38;5;${e}m` : `38;2;${o};${t};${i}m`);
}

var S = e => y.slice(0, e).map(n => String.fromCodePoint(n));

function qWo(e, n, o) {
  u(n, y.length), u(o, y.length);
  let t = O(e), i = S(n);
  return S(o).map(s => t + i.map(r => N + s + r).join("") + Tgn).join(`\n`);
}

function d(e, n) {
  let o = n === void 0 ? "" : `;${n}`;
  return `${G}${e}${o}${PMn}`;
}

var Y = {
  png: "f=100",
  rgba: "f=32",
  rgb: "f=24"
}, M = {
  file: "t=f",
  shm: "t=s"
};

function YWo(e) {
  let {id: n, source: o, columns: t, rows: i} = e;
  if (u(n, b), u(t, y.length), u(i, y.length), o.format !== "png") u(o.width, R), 
  u(o.height, R);
  let r = o.format !== "png" ? `,s=${o.width},v=${o.height}` : "", a = `${Y[o.format]}${r}`, c = `i=${n},c=${t},r=${i}`;
  if ("medium" in o) {
    k(o.name);
    let x = M[o.medium];
    return d(`a=T,U=1,q=1,${a},${x},${c}`, v(o.name));
  }
  D(o.base64);
  let l = `a=T,U=1,q=2,${a},${c}`, {base64: p} = o;
  if (p.length <= m) return d(l, p);
  let g = [];
  for (let x = 0; x < p.length; x += m) {
    let T = x + m >= p.length ? "m=0" : "m=1", q = x === 0 ? `${l},${T}` : `${T},q=2`;
    g.push(d(q, p.slice(x, x + m)));
  }
  return g.join("");
}

function XWo(e) {
  return u(e, b), d(`a=d,d=I,i=${e},q=2`);
}

function E(e) {
  return u(e, b), d(`i=${e},s=1,v=1,a=q,t=d,f=24`, "AAAA");
}

function JWo(e, n) {
  return u(e, b), k(n), d(`i=${e},s=1,v=1,a=q,t=f,f=32`, v(n));
}

function HBr(e) {
  return {
    request: Sl(`?${e}$p`),
    match: n => n.type === "decrpm" && n.mode === e
  };
}

function QWo() {
  return {
    request: Sl("?u"),
    match: e => e.type === "kittyKeyboard"
  };
}

function ZWo() {
  return {
    request: Sl("?6n"),
    match: e => e.type === "cursorPosition"
  };
}

function ezo(e) {
  return {
    request: Hh(e, "?"),
    match: n => n.type === "osc" && n.code === e
  };
}

function tzo() {
  return {
    request: Hh(pf.PROGRAM_STATUS, "?"),
    match: e => e.type === "osc" && e.code === pf.PROGRAM_STATUS && e.data.startsWith("?")
  };
}

function nzo() {
  return {
    request: Sl(">0q"),
    match: e => e.type === "xtversion"
  };
}

function DBr() {
  return {
    request: Sl("16t"),
    match: e => e.type === "cellSize"
  };
}

var I = 31;

function rzo() {
  return {
    request: E(I),
    match: e => e.type === "kittyGraphics" && e.id === I
  };
}

var C = Sl("c");

class LBr {
  stdout;
  queue=[];
  isInputAttached=!1;
  themeChangeSubscribers=new Set;
  constructor(e) {
    this.stdout = e;
  }
  setInputAttached(e) {
    if (this.isInputAttached = e, !e) return;
    for (let n of this.queue) if (n.kind !== "barrier" && !n.written) this.write(n);
  }
  owed() {
    let e = 0;
    for (let n of this.queue) if (n.kind === "barrier" || n.kind === "sentinel" && n.written) e++;
    return e;
  }
  subscribeThemeChange(e) {
    return this.themeChangeSubscribers.add(e), () => {
      this.themeChangeSubscribers.delete(e);
    };
  }
  send(e) {
    return new Promise(n => {
      this.enqueue({
        kind: "query",
        request: e.request,
        written: !1,
        match: e.match,
        resolve: o => n(o)
      });
    });
  }
  flush() {
    return new Promise(e => {
      this.enqueue({
        kind: "sentinel",
        request: C,
        written: !1,
        resolve: e
      });
    });
  }
  cancel(e) {
    let n = this.queue.findIndex(t => t.kind === "query" && t.match === e.match);
    if (n === -1) return;
    let [o] = this.queue.splice(n, 1);
    if (o?.kind === "query") o.resolve(void 0);
  }
  resync({probe: e}) {
    for (let n of this.queue.splice(0)) if (n.kind === "query") n.resolve(void 0); else if (n.kind === "sentinel") n.resolve(!1);
    if (e && this.isInputAttached) this.queue.push({
      kind: "barrier"
    }), this.stdout.write(C);
  }
  onResponse(e) {
    if (e.type === "themeNotify") {
      for (let t of this.themeChangeSubscribers) t(e.dark);
      return !0;
    }
    if (this.queue[0]?.kind === "barrier") {
      if (e.type === "da1") this.queue.shift();
      return !0;
    }
    let n = this.queue.findIndex(t => t.kind === "query" && t.match(e));
    if (n !== -1) {
      let [t] = this.queue.splice(n, 1);
      if (t?.kind === "query") t.resolve(e);
      return !0;
    }
    if (e.type !== "da1") return !1;
    let o = this.queue.findIndex(t => t.kind === "sentinel");
    if (o === -1) return !1;
    for (let t of this.queue.splice(0, o + 1)) if (t.kind === "query") t.resolve(void 0); else if (t.kind === "sentinel") t.resolve(!0);
    return !0;
  }
  enqueue(e) {
    if (this.queue.push(e), this.isInputAttached) this.write(e);
  }
  write(e) {
    e.written = !0, this.stdout.write(e.request);
  }
}

export { Q1t, BWo, Egn, V9n, jWo, WWo, zWo, K9n, kgn, Z1t, GWo, Tgn, q9n, VWo, KWo, ejt, qWo, YWo, XWo, JWo, HBr, QWo, ZWo, ezo, tzo, nzo, DBr, rzo, LBr };
