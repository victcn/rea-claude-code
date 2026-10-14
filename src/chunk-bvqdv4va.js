// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rNo } from "./chunk-3pqddg8f.js";

import { W } from "./chunk-b0z4bv3v.js";

import { bt, _, Y } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { Xa } from "./chunk-3kb22va7.js";

import { Cc, $O } from "./chunk-xywp7esx.js";

import { ol } from "./chunk-z09tf6qf.js";

import { fHe } from "./chunk-vqf0rq19.js";

import { ks } from "./chunk-84yp45y8.js";

import { o, v, De } from "./chunk-cvcg6n1z.js";

import { rm as m } from "fs/promises";

import { join as t } from "path";

var s = ".pending-wakeup", u = 1024, f = p(() => De({
  toolUseId: o().min(1).max(256),
  scheduledFor: v().int().positive(),
  chainStartedAt: v().int().nonnegative()
}));

async function wBt(i, r) {
  let e = t(i, s);
  try {
    if (r === void 0) {
      if (await m(e, {
        force: !0
      }).then(() => !0, a => (ol(a), !1))) return;
    }
    await fHe(e, r === void 0 ? "" : _(r));
  } catch (n) {
    if (!W(n)) ol(n);
  }
}

async function Z1o(i) {
  let r = await Xa(t(i, s), u);
  if (!r) return null;
  try {
    let e = f().safeParse(Y(r));
    return e.success ? e.data : null;
  } catch {
    return null;
  }
}

class eFr {
  #o=Promise.resolve();
  #r=0;
  #e;
  #i;
  constructor() {
    this.#i = rNo(this.#n);
  }
  #n=i => {
    try {
      if (!Cc()) return;
      let r = $O();
      if (r === void 0) return;
      if (i !== void 0 && ks()) return;
      this.#e ??= bt(() => this.#o);
      let e = ++this.#r;
      this.#o = this.#o.then(() => e === this.#r ? wBt(r, i) : void 0);
    } catch (r) {
      d(r);
    }
  };
  flush() {
    return this.#o;
  }
  dispose() {
    this.#i(), this.#o.then(() => this.#e?.());
  }
}

export { wBt, Z1o, eFr };
