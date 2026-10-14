// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var v = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");

function k(o, t, s) {
  var l = null;
  if (s !== void 0 && (l = "" + s), t.key !== void 0 && (l = "" + t.key), "key" in t) {
    s = {};
    for (var E in t) E !== "key" && (s[E] = t[E]);
  } else s = t;
  return t = s.ref, {
    $$typeof: v,
    type: o,
    key: l,
    ref: t !== void 0 ? t : null,
    props: s
  };
}

var Q = x, e = k, r = k;

export { Q, e, r };
