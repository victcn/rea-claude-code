// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import { ul } from "./chunk-ddr690nj.js";

import { p } from "./chunk-jkzenvsk.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { _ } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-9yajep3y.js";

import "./chunk-yxennhe9.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-t6pdm7af.js";

import "./chunk-0pmh7awy.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-r276nwd3.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-zvghq5er.js";

import "./chunk-0cdqg49t.js";

import { P8t, zQ } from "./chunk-vg1pmpv1.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-wptm3jf5.js";

import "./chunk-j31ahx42.js";

import { o, T, De } from "./chunk-cvcg6n1z.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-1xnsr4dy.js";

import { isAbsolute as m, normalize as k } from "path";

var c = () => o().min(1).max(4096).refine(t => !t.includes("\0") && m(t) && !ul(t), "must be an absolute local path, not a network or automount path (such as \\\\server\\share, //server/share or /net/host), with no NUL character"), g = p(() => De({
  repoRoot: c(),
  worktreePaths: T(c()).min(1).max(4)
}));

async function D(t) {
  let e = g().safeParse(t);
  if (!e.success) {
    let r = e.error.issues[0];
    return {
      ok: !1,
      error: r ? `Not a worktree registration request (${r.path.map(String).join(".") || "request"}: ${r.message}).` : "Not a worktree registration request."
    };
  }
  let {worktreePaths: n} = e.data, s = k(e.data.repoRoot), a = await P8t(s);
  if (a === null) {
    let r = `the repository at ${s} could not be vetted`;
    return {
      ok: !0,
      outcomes: n.map(() => ({
        outcome: "kept",
        reason: r
      }))
    };
  }
  let u = [];
  for (let r of n) {
    let i = await zQ(a, {
      worktreePath: r,
      repoSpelled: s
    }, {
      locked: "keep"
    });
    u.push(i.outcome === "kept" ? {
      outcome: "kept",
      reason: i.reason
    } : {
      outcome: i.outcome
    });
  }
  return {
    ok: !0,
    outcomes: u
  };
}

function y(t) {
  return _({
    ok: !0,
    outcomes: t
  });
}

export { y as registrationDropsLine, D as runWorktreeRegistrationDrops };
