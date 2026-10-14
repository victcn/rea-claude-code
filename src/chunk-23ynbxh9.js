// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var v4t = 3e3;

function d(t) {
  t.cancel().catch(() => {});
}

async function TW(t, {maxBytes: o = 65536, timeoutMs: i} = {}) {
  let e;
  try {
    let n = t.body?.getReader();
    if (!n) return;
    if (i !== void 0) e = setTimeout(d, i, n), e.unref?.();
    let r = o;
    for (;;) {
      let {done: a, value: c} = await n.read();
      if (a) return;
      if (r -= c.byteLength, r < 0) {
        await n.cancel();
        return;
      }
    }
  } catch {} finally {
    if (e !== void 0) clearTimeout(e);
  }
}

export { v4t, TW };
