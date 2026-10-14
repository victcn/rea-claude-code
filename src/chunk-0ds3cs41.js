// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, W } from "./chunk-b0z4bv3v.js";

import { z } from "./chunk-bmq0vae0.js";

import { _, Wi, Y, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { fB } from "./chunk-fdtwr731.js";

import { c4 } from "./chunk-kmph7cxf.js";

import { o, T, u, $e, ue, A } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { hostname as w } from "os";

import { dirname as x, join as D } from "path";

var v = 1, g = "device-mcp-snapshot", MLr = 8, M = 128;

function HLr(e) {
  return e.added.length > 0 || e.changed.length > 0;
}

var O = p(() => u({
  version: A(v),
  hostname: o(),
  servers: ue(o(), $e([ ue(o(), o()), A("declined") ])),
  withheld: ue(o(), u({
    added: T(o()),
    changed: T(o())
  }))
}));

function b(e) {
  let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
  return at(Wi({
    name: e.name,
    description: e.description,
    inputSchema: e.inputSchema,
    searchHint: r[fB.searchHint]
  }));
}

function j(e) {
  return Object.fromEntries(e.map(r => [ r.name, b(r) ]));
}

function R(e, r) {
  if (r === "declined") return {
    added: [],
    changed: []
  };
  let i = Object.keys(e).filter(s => !Object.hasOwn(r, s)), n = Object.keys(e).filter(s => Object.hasOwn(r, s) && r[s] !== e[s]);
  if (i.length === 0 && n.length === 0) return;
  return {
    added: m(i),
    changed: m(n)
  };
}

function m(e) {
  return e.slice(0, MLr).map(r => r.slice(0, M));
}

function DLr(e, r) {
  if (r === void 0) return e;
  return {
    servers: {
      ...r.servers,
      ...e.servers
    },
    withheld: e.withheld
  };
}

function YFo(e, r) {
  let i = new Map, n = {
    ...r.servers
  }, s = !1;
  for (let [a, y] of e) {
    let h = j(y), f = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (f === void 0) {
      n[a] = h, s = !0;
      continue;
    }
    let S = R(h, f);
    if (S !== void 0) i.set(a, S);
  }
  let d = Object.fromEntries([ ...i ].filter(([, a]) => HLr(a)));
  return {
    withheld: i,
    next: {
      servers: n,
      withheld: d
    },
    changed: s || Wi(d) !== Wi(r.withheld)
  };
}

function pun(e, r, i) {
  let n = {
    ...e.servers
  };
  for (let s of r) if (i === "accepted") delete n[s]; else n[s] = "declined";
  return {
    servers: n,
    withheld: {}
  };
}

async function Xme(e) {
  let r = {
    servers: {},
    withheld: {}
  }, i;
  try {
    i = await e.readText();
  } catch (n) {
    return t(`device-mcp snapshot: store unreadable (${l(n)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (i === void 0) return r;
  try {
    let n = O().safeParse(Y(i));
    return n.success && c4(n.data.hostname) === c4(e.hostname()) ? {
      servers: n.data.servers,
      withheld: n.data.withheld
    } : r;
  } catch {
    return r;
  }
}

async function lQe(e, r) {
  try {
    return await r.writeText(_({
      version: v,
      hostname: c4(r.hostname()),
      servers: e.servers,
      withheld: e.withheld
    }, null, 2) + `\n`), !0;
  } catch (i) {
    return t(`device-mcp snapshot: not saved (${l(i)})`, {
      level: "warn"
    }), !1;
  }
}

function c() {
  return D(Ee(), "state", `${g}.json`);
}

function XFo() {
  return `delete ${Os(c())} to reset every server's baseline`;
}

function Jme(e) {
  let r = z() && e !== void 0 ? e : void 0, i = Fe.state(g);
  return {
    readText: async () => {
      if (r) {
        let n = await r.readText([ i ]);
        if (!n.ok) throw Error("device-mcp snapshot read failed");
        let s = n.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await gn().read(c());
      } catch (n) {
        if (W(n)) return;
        throw n;
      }
    },
    writeText: async n => {
      if (r) {
        if (!(await r.write(i, n, {
          mode: 384
        })).ok) throw Error("device-mcp snapshot write failed");
        return;
      }
      let s = c();
      await gn().mkdir(x(s), 448), await gn().atomicWrite(s, n, 384);
    },
    hostname: w
  };
}

export { MLr, HLr, DLr, YFo, pun, Xme, lQe, XFo, Jme };
