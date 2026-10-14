// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-6ah1819r.js";

import "./chunk-z52kmxx4.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-46phtgr7.js";

import "./chunk-t6pdm7af.js";

import "./chunk-5brm0azz.js";

import "./chunk-e7rgnck3.js";

import { xi } from "./chunk-f1zpf9me.js";

import "./chunk-g6nh65r0.js";

import "./chunk-g4dysb0v.js";

import { co } from "./chunk-k5d016nk.js";

import "./chunk-1xnsr4dy.js";

function c(t, o, a, d) {
  let e = (i, r) => typeof i === "string" && typeof r === "string" && i === a(r), s = e(t.saved_pages_dir, o) ? `[A quickstart in this conversation saved reference pages of this type on disk in ${co([ t.saved_pages_dir ])}; its result lists them, so those are not attached here.]` : "";
  if (t.not_listed === !0) return s === "" ? "" : `\n\n${s}`;
  let n = s === "" ? "" : ` ${s}`;
  if (typeof t.saved_system === "string" && e(t.saved_system_dir, t.saved_system)) return `\n\n[A quickstart in this conversation already listed the design systems and saved the files of ${xi(t.saved_system, "(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;
  return s === "" ? null : `${d}${n}`;
}

export { c as afterQuickstartSavedLine };
