// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { g } from "./chunk-3ykz5st8.js";

import { iK } from "./chunk-1dj3skht.js";

var d = {}, H5o = iK("whiteboardTelemetry", d);

function D5o(i, r, e, n) {
  g("whiteboard_publish", {
    seeded: n && e.elCount > 0,
    el_count: e.elCount,
    is_first_publish: n
  });
  let t;
  if (i.set(o => {
    if (t = o[r], t === void 0) return {
      ...o,
      [r]: e.pingCount
    };
    if (e.pingCount > t) return {
      ...o,
      [r]: e.pingCount
    };
    return o;
  }), t !== void 0 && e.pingCount > t) g("whiteboard_turn", {
    ping_count: e.pingCount,
    el_count: e.elCount
  });
}

export { H5o, D5o };
