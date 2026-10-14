// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, B, ZS } from "./chunk-3pqddg8f.js";

import { eie, vPe } from "./chunk-xywp7esx.js";

import { Tj } from "./chunk-g7z9901y.js";

class r {
  #e;
  get() {
    return this.#e;
  }
  replace(e) {
    this.#e = e;
  }
}

var u = new lt(() => new r);

function avr() {
  return u.peek(B())?.get();
}

function DUn() {
  return (eie() && !vPe() ? void 0 : avr()) ?? (ZS() ? "UTC" : void 0);
}

function Rho() {
  let e = new Date, n = avr();
  if (n !== void 0) {
    let t = new Map(Tj("en-US", {
      timeZone: n,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(e).map(o => [ o.type, o.value ]));
    return `${t.get("year")}-${t.get("month")}-${t.get("day")}`;
  }
  let i = e.getFullYear(), a = String(e.getMonth() + 1).padStart(2, "0"), d = String(e.getDate()).padStart(2, "0");
  return `${i}-${a}-${d}`;
}

class s {
  #e;
  get() {
    return this.#e ??= Rho(), this.#e;
  }
  clear() {
    this.#e = void 0;
  }
  get captured() {
    return this.#e !== void 0;
  }
}

var IZt = new lt(() => new s);

function xho(e) {
  return IZt.of(e).get();
}

function yvs() {
  return xho(B());
}

function _vs() {
  return (new Date).toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });
}

export { avr, DUn, Rho, IZt, xho, yvs, _vs };
