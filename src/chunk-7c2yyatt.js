// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

var a = 50;

function $De() {
  let s = Me(), t = [], n = 0;
  return {
    publish(e, i, r) {
      let u = r === void 0 ? {
        line: e,
        level: i
      } : {
        line: e,
        level: i,
        notice: r
      };
      if (n === 0) {
        t = [ ...t, u ].slice(-a);
        return;
      }
      s.emit(u);
    },
    takeBacklog() {
      let e = t;
      return t = [], e;
    },
    subscribe(e) {
      n += 1;
      let i = s.subscribe(e);
      return () => {
        n -= 1, i();
      };
    }
  };
}

export { $De };
