// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { PGo, LGo } from "./chunk-73wnf5r6.js";

import { xte } from "./chunk-fgc3kgvp.js";

function Bht({sessionId: t, getAccessToken: s, fetchSession: i, initial: e, createOrigin: d}) {
  if (!xte()) return;
  let n = !1, r = o => PGo(o, n);
  return LGo({
    ...e && {
      initial: e.then(r)
    },
    read: () => i(t, {
      accessToken: s()
    }).then(r)
  });
}

export { Bht };
