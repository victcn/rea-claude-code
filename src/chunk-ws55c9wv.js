// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var um = 1e4;

async function Qi(e, r, t) {
  let s = Math.max(1, Math.floor(t?.maxPages ?? 1e4)), u;
  for (let a = 0; a < s; a++) {
    if (t?.budget !== void 0) {
      if (t.budget.pagesLeft < 1) return {
        status: "capped"
      };
      t.budget.pagesLeft--;
    }
    let n = await e(u);
    if (!n.ok) return {
      status: "error",
      error: n.error
    };
    if (await r(n.value.items), t?.until?.()) return {
      status: "done"
    };
    if (u = n.value.cursor, !u) return {
      status: "done"
    };
  }
  return {
    status: "capped"
  };
}

function Qqn(e = 1e4) {
  return {
    pagesLeft: e,
    capped: 0
  };
}

function fFs(e, r) {
  if (e.status === "error") return "error";
  if (e.status === "capped") return r.capped++, r.capped === 1 ? "first-truncation" : void 0;
  return;
}

function mFs(e) {
  return Math.max(0, e.capped - 1);
}

export { um, Qi, Qqn, fFs, mFs };
