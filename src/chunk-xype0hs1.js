// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mr } from "./chunk-0cdqg49t.js";

import { x } from "./chunk-b0z4bv3v.js";

import { z } from "./chunk-bmq0vae0.js";

import { to } from "./chunk-z09tf6qf.js";

import { Zf, yt } from "./chunk-9zhz923g.js";

import { mkdir as i } from "fs/promises";

import { join as a } from "path";

async function p2o(e, r) {
  if (z() && r !== void 0 && mr(e)) {
    await n(r, {
      namespace: "job",
      jobId: e
    });
    return;
  }
  await i(to(e), {
    recursive: !0
  });
}

async function aHe(e, r) {
  if (z() && r !== void 0 && mr(e)) {
    await n(r, c(e));
    return;
  }
  await i(a(to(e), "tmp"), {
    recursive: !0
  });
}

function c(e) {
  return {
    namespace: "job",
    jobId: e,
    relPath: [ "tmp" ]
  };
}

async function n(e, r) {
  let o = await e.ensureScope(r);
  if (!o.ok) {
    let t = Zf(o.error);
    throw Object.assign(new x(`job folder not made (${yt(o.error)})`, "job folder not made"), t !== void 0 ? {
      code: t
    } : {});
  }
}

export { p2o, aHe };
