// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { J0t } from "./chunk-85f3d2e1.js";

import { uj, NIe } from "./chunk-az0s2zrf.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var lWr = {};

Nr(lWr, {
  default: () => lWr,
  endsInARowOf: () => m1s,
  unsettledBy: () => kJn,
  workerEndingOf: () => g1s
});

function m1s(e) {
  let n = Number(e);
  return Number.isSafeInteger(n) && n > 0 ? n : 0;
}

var kJn = e => ({
  reason: `Error: ${l(e)}`,
  kind: e instanceof J0t ? "passing" : "lasting"
});

var o = 5, d = `It did not pass in ${o} tries`, m = "it is held for good, or refused to this process", t = "Start the daemon again once this is mended.", p = `${d}: ${m}. ${t}`;

function g1s(e, n) {
  let r = e.kind === "passing", s = r && n + 1 < o, i = r ? p : t;
  return s ? {
    code: NIe,
    said: `${e.reason}\n`
  } : {
    code: uj,
    said: `${e.reason}\n${i}\n`
  };
}

export { m1s, kJn, g1s, lWr };
