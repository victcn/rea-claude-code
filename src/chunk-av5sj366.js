// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ea } from "./chunk-3pqddg8f.js";

import { Bl } from "./chunk-cqgvwwgb.js";

import { fMo, sMr } from "./chunk-9yajep3y.js";

import { d } from "./chunk-6ah1819r.js";

import { cHs } from "./chunk-s2t7g8m9.js";

import { D } from "./chunk-hmqkrrtz.js";

async function pkr(r) {
  let e = D([ ea(), Bl() ]).filter(t => t !== null);
  for (let t of e) try {
    let o = await fMo(r, t);
    if (o !== void 0) {
      let i = await cHs(t, o.gitRoot, r);
      if (typeof i === "string") sMr(i, o.gitRoot, o.canonicalRoot);
    }
  } catch (o) {
    d(o);
  }
}

export { pkr };
