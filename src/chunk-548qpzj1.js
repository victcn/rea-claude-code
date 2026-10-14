// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
class NKt extends Error {
  label;
  timeoutMs;
  constructor(e, r) {
    super(`${e} timed out after ${r}ms`);
    this.label = e;
    this.timeoutMs = r;
    this.name = "BoundedTimeoutError";
  }
}

async function fl(e, r, n) {
  let t, o = new Promise((c, i) => {
    t = setTimeout((s, u, m) => s(new NKt(u, m)), Math.min(r, 2147483647), i, n, r);
  });
  try {
    return await Promise.race([ e, o ]);
  } finally {
    if (t) clearTimeout(t);
    e.catch(() => {});
  }
}

var $Kt = 5e3;

function Ih(e, r) {
  return fl(e, $Kt, `[runner:stuck] fs op '${r}' (check TMPDIR mount health)`);
}

export { NKt, fl, $Kt, Ih };
