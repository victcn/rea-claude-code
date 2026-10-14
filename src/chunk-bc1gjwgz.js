// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { uwn, YHe } from "./chunk-990gpy2c.js";

function n2t(e, n) {
  return {
    targets: e.filter(t => uwn(t, n)),
    outOfBandNote: YHe(e, !0, n)
  };
}

async function r2t(e, n) {
  let t = await Promise.allSettled(e.map(o => n(o.name))), r = 0;
  for (let o of t) if (o.status === "fulfilled" && o.value.client.type === "connected") r++;
  return {
    results: t,
    connected: r
  };
}

export { n2t, r2t };
