// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, ps } from "./chunk-3pqddg8f.js";

import { J } from "./chunk-nvtwm272.js";

async function UN() {
  try {
    let s = t();
    if (s.length > 0) await Promise.race([ Promise.allSettled(s), J(200) ]), s.length = 0;
    let [{settle1PEventLoggingBeforeExit: e, shutdown1PEventLogging: r}, {shutdownDatadog: n}, {shutdownErrorTracking: i}] = await Promise.all([ import("./chunk-nry35a89.js"), import("./chunk-8rdzrsat.js"), import("./chunk-az7hepzd.js") ]), a = e(), l = [ r(), n(), i() ];
    await Promise.race([ Promise.all(l), J(500) ]), await a;
  } catch {}
}

class o {
  tasks=[];
}

var c = new K(() => new o);

function t() {
  return ps(c).tasks;
}

function $bo(s) {
  t().push(s.catch(() => {}));
}

export { UN, $bo };
