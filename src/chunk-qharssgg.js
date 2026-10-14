// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var vKt = "you are not signed in, or this machine is not authorized to write to the session", KJo = "without your deny and ask rules";

function qJo({completion: n, status: a, description: s = u, afterFirstReply: m = r}) {
  let t;
  n.then(e => {
    t = {
      outcome: e,
      atMs: Date.now()
    };
  });
  let i = m, o, l = new Promise(e => {
    o = e;
  });
  return {
    completion: n,
    status: a,
    description: s,
    outcome: () => t?.outcome,
    settledAtMs: () => t?.atMs,
    async afterFirstReply(e) {
      let d = i;
      if (i = null, d === null) return r();
      try {
        return await d(e, o);
      } finally {
        o(void 0);
      }
    },
    readBack: l
  };
}

function r() {
  return Promise.resolve("skipped");
}

function u() {
  return null;
}

export { vKt, KJo, qJo };
