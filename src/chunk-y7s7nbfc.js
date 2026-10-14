// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rn } from "./chunk-yxennhe9.js";

import { an } from "./chunk-3vw306fv.js";

import { nn } from "./chunk-ytac37d4.js";

import { ae, xt, F } from "./chunk-cpyd3eya.js";

F();

function AL(r, o, t = 1e3, n = 0, a) {
  let e = an(), u = () => rn(Math.max(0, (a ?? Date.now()) - r - n)), l = ae(f => {
    if (!o) return () => {};
    let i, s = () => {
      try {
        f();
      } finally {
        i = e.setTimeout(s, t);
      }
    };
    return i = e.setTimeout(s, t), () => i();
  }, [ o, t, e ]);
  return xt(l, u, u);
}

function Kj({onClose: r, onBack: o, onKill: t, onEnter: n}) {
  return nn({
    "confirm:yes": n ?? r
  }, {
    context: "Confirmation"
  }), function(e) {
    if (e.key === " ") e.preventDefault(), r(); else if (e.key === "left" && o) e.preventDefault(), 
    o(); else if (e.key === "x" && !e.ctrl && !e.meta && t) e.preventDefault(), t();
  };
}

export { AL, Kj };
