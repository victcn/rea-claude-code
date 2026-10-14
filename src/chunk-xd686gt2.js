// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { cn } from "./chunk-kawq2919.js";

import { hgn } from "./chunk-150qmpyg.js";

import { w } from "./chunk-9rj1xaxr.js";

import { MA, u2 } from "./chunk-3vw306fv.js";

import { Q, e } from "./chunk-xx3xgkvz.js";

import { Kt, Zt, F } from "./chunk-cpyd3eya.js";

F();

import { PassThrough as u } from "stream";

function m() {}

var o_t = Kt(!1);

function RI(r) {
  let i = w(5), {children: t} = r, {exit: n} = MA(), a, o;
  if (i[0] !== n) a = () => {
    let d = setTimeout(n, 0);
    return () => clearTimeout(d);
  }, o = [ n ], i[0] = n, i[1] = a, i[2] = o; else a = i[1], o = i[2];
  Zt(a, o);
  let c;
  if (i[3] !== t) c = e(Q, {
    children: t
  }), i[3] = t, i[4] = c; else c = i[4];
  return c;
}

async function xI(r, t) {
  r.render(e(RI, {
    children: t
  })), await r.waitUntilExit();
}

async function vze(r, {columns: t, storageV5: n}) {
  let i = "", a = !1, o = new u;
  if (t !== void 0) o.columns = t;
  return o.on("data", c => {
    if (a) return;
    a = !0, i = c.toString();
  }), await (await u2(e(RI, {
    children: e(o_t.Provider, {
      value: !0,
      children: e(hgn, {
        value: m,
        children: r
      })
    })
  }), {
    stdout: o,
    patchConsole: !1
  }, {
    storageV5: n
  })).waitUntilExit(), i;
}

async function Cmn(r, t) {
  let n = await vze(r, t);
  return cn(n);
}

export { o_t, RI, xI, vze, Cmn };
