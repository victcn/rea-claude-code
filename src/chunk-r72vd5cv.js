// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { C } from "./chunk-m8ez8fhk.js";

var Buo = C(function(p, s) {
  s.exports = function o(r, e) {
    if (r === e) return !0;
    if (r && e && typeof r == "object" && typeof e == "object") {
      if (r.constructor !== e.constructor) return !1;
      var u, t, f;
      if (Array.isArray(r)) {
        if (u = r.length, u != e.length) return !1;
        for (t = u; t-- !== 0; ) if (!o(r[t], e[t])) return !1;
        return !0;
      }
      if (r.constructor === RegExp) return r.source === e.source && r.flags === e.flags;
      if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === e.valueOf();
      if (r.toString !== Object.prototype.toString) return r.toString() === e.toString();
      if (f = Object.keys(r), u = f.length, u !== Object.keys(e).length) return !1;
      for (t = u; t-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(e, f[t])) return !1;
      for (t = u; t-- !== 0; ) {
        var n = f[t];
        if (!o(r[n], e[n])) return !1;
      }
      return !0;
    }
    return r !== r && e !== e;
  };
});

var zJt = C(function(l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  });
  var c = Buo();
  c.code = 'require("ajv/dist/runtime/equal").default';
  l.default = c;
});

export { Buo, zJt };
