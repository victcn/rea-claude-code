// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { C } from "./chunk-m8ez8fhk.js";

var MHt = C(function(c) {
  var i = {}, r = {};
  for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase();
    if (t.length === 1) t = `0${t}`;
    i[e] = t, r[t] = e;
  }
  function s(e) {
    if (e.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let t = new Uint8Array(e.length / 2);
    for (let n = 0; n < e.length; n += 2) {
      let o = e.slice(n, n + 2).toLowerCase();
      if (o in r) t[n / 2] = r[o]; else throw Error(`Cannot decode unrecognized sequence ${o} as hexadecimal`);
    }
    return t;
  }
  function l(e) {
    let t = "";
    for (let n = 0; n < e.byteLength; n++) t += i[e[n]];
    return t;
  }
  c.fromHex = s;
  c.toHex = l;
});

export { MHt };
