// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-5brm0azz.js";

import { go } from "./chunk-0jsy3sb7.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-30n0xq4e.js";

import "./chunk-0pmh7awy.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-r276nwd3.js";

import { SKr } from "./chunk-9pqydzf3.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-1xnsr4dy.js";

import { basename as l } from "path";

async function x(r, e) {
  let o = await SKr(), a = go(e.session);
  if (!o.success) {
    if (a) return t(`heapdump failed: ${o.error}`, {
      level: "error"
    }), {
      type: "text",
      value: "Failed to create heap dump (detail withheld on this connection)"
    };
    return {
      type: "text",
      value: `Failed to create heap dump: ${o.error}`
    };
  }
  let i = a ? l(o.heapPath) : o.heapPath, p = a ? l(o.diagPath) : o.diagPath;
  if (a) t(`heapdump written: ${o.heapPath} ${o.diagPath}`);
  let h = [ i, p, "", d(o.diagnostics) ];
  return h.push("", "Open the .heapsnapshot in Chrome DevTools \u2192 Memory \u2192 Load to inspect retainers."), 
  {
    type: "text",
    value: h.join(`\n`)
  };
}

function d(r) {
  let {memoryUsage: e, resourceUsage: o, analysis: a} = r, i = a.potentialLeaks.length ? a.potentialLeaks.map(n => `  \u26a0 ${n}`).join(`\n`) : "  (no obvious leak indicators)", p = (n, u) => `RSS ${s(e.rss)} (peak ${s(o.maxRSS)}) ${n > u ? "\u2014 most memory is JS heap (inspect the .heapsnapshot)" : "\u2014 most memory is native (NOT in the .heapsnapshot)"}`;
  if (r.runtime === "bun") {
    let n = Math.max(0, e.rss - e.heapUsed);
    return [ p(e.heapUsed, n), `  JS heap          ${s(e.heapUsed).padStart(8)}  in snapshot`, `  strings, buffers ${s(e.external).padStart(8)}  part of the JS heap, in snapshot`, `  outside the heap ${s(n).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`, i ].join(`\n`);
  }
  let h = e.external - e.arrayBuffers, c = Math.max(0, e.rss - e.heapTotal - e.external);
  return [ p(e.heapTotal, e.external + c), `  JS heap        ${s(e.heapTotal).padStart(8)}  in snapshot`, `  array buffers  ${s(e.arrayBuffers).padStart(8)}  not in snapshot`, `  other external ${s(h).padStart(8)}  not in snapshot`, `  unaccounted    ${s(c).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`, i ].join(`\n`);
}

function s(r) {
  return `${(r / 1073741824).toFixed(2)} GB`;
}

export { x as call };
