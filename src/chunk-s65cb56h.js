// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-hwdwjvh8.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { J } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-4dwgr3et.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import { xn, Rb, ft } from "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import { Vp, Cb, Lt, V5 } from "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import "./chunk-r2h53bm2.js";

import { Hd, VV } from "./chunk-rh1cb6gh.js";

import "./chunk-hmce8a0s.js";

import { x8 } from "./chunk-3f26gx7r.js";

import "./chunk-j31ahx42.js";

import "./chunk-jxw064gd.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-1xnsr4dy.js";

import { lstat as p, open as E } from "fs/promises";

import { join as c, resolve as v } from "path";

var b = 1e4, k = 500;

async function T(e, r = b) {
  let i = new AbortController;
  try {
    return await Promise.race([ e, J(r, i.signal).then(() => {
      throw Error("worktree probe timed out");
    }) ]);
  } finally {
    i.abort();
  }
}

async function V(e, r, i = b) {
  let s = Cb(e);
  if (!s) return null;
  try {
    let n = await T(O(s, r, Date.now() + i), i);
    if (n.submodules_unverified) f("bridge_worktree_state", "submodules_unverifiable"); else g("bridge_worktree_state");
    return n;
  } catch (n) {
    return m("bridge_worktree_state", "collect_failed"), t(`[bridge:worktree] collectWorktreeState failed: ${l(n)}`), 
    null;
  }
}

async function O(e, r, i) {
  let s = await V5(e);
  if (!s) Vp().gitDirByCwd.delete(v(e)), s = await V5(e);
  if (!s) throw Error("getGitDir returned null \u2014 cannot verify worktree state");
  let [n, o, a, w, h, y] = await Promise.all([ S(e), x(e, r), A(e, i), M(s), _(c(e, ".gitmodules")), P(e) ]);
  return {
    branch: r,
    head_sha: n,
    unpushed_count: o.count,
    is_dirty: a.dirty,
    upstream_exists: o.upstreamExists,
    mid_operation: w,
    has_submodules: h,
    submodules_unverified: a.submodulesUnverified,
    has_lfs: y,
    reported_at: (new Date).toISOString()
  };
}

var D = 4194304;

function u(e, r) {
  return ft(Lt(), [ ...xn, ...r ], {
    cwd: e,
    env: Hd(e),
    preserveOutputOnError: !1,
    maxBuffer: D,
    timeout: 1e4
  });
}

async function S(e) {
  let {code: r, stdout: i} = await u(e, [ "rev-parse", "HEAD" ]);
  return r === 0 ? i.trim() : null;
}

async function x(e, r) {
  if (!r) return {
    count: null,
    upstreamExists: !1
  };
  let i = `refs/remotes/origin/${r}`, s = await u(e, [ "rev-parse", "--verify", "--quiet", `${i}^{commit}` ]);
  if (s.code !== 0 || !s.stdout.trim()) return {
    count: null,
    upstreamExists: !1
  };
  let {code: n, stdout: o} = await u(e, [ "rev-list", "--count", `${i}..HEAD` ]);
  if (n !== 0) return {
    count: null,
    upstreamExists: !1
  };
  let a = parseInt(o.trim(), 10);
  return {
    count: Number.isFinite(a) ? a : null,
    upstreamExists: !0
  };
}

async function A(e, r) {
  let i = await VV(e);
  if (!i.ok) throw Error("repository config could not be vetted");
  let {code: s, stdout: n} = await u(e, [ ...i.args, "--no-optional-locks", "status", "--porcelain", "-unormal", Rb ]);
  if (s !== 0) throw Error("git status failed");
  if (n.trim().length > 0) return {
    dirty: !0,
    submodulesUnverified: !1
  };
  let o = await x8(e, {
    deadlineMs: Math.max(0, r - Date.now() - k)
  });
  if (o.kind === "verified") return {
    dirty: o.withTrackedChanges.length + o.withUntrackedFiles.length > 0,
    submodulesUnverified: !1
  };
  switch (o.reason) {
   case "unreadable":
    throw Error("submodule state unreadable \u2014 cannot verify worktree is clean");

   case "nested_submodules":
   case "too_many":
   case "nested_repository":
   case "unconfigured_gitlink":
   case "gitdir_outside_modules":
   case "timeout":
    return t(`[bridge:worktree] submodules could not be inspected (${o.reason}); reporting is_dirty=true, submodules_unverified=true`, {
      level: "warn"
    }), {
      dirty: !0,
      submodulesUnverified: !0
    };
  }
}

async function _(e) {
  try {
    let r = await p(e);
    return r.isFile() || r.isDirectory();
  } catch (r) {
    if (W(r)) return !1;
    throw r;
  }
}

var d = [ [ "rebase-merge", "rebase" ], [ "rebase-apply", "rebase" ], [ "MERGE_HEAD", "merge" ], [ "CHERRY_PICK_HEAD", "cherry-pick" ], [ "REVERT_HEAD", "revert" ], [ "BISECT_LOG", "bisect" ], [ "sequencer", "cherry-pick" ] ];

async function M(e) {
  let i = (await Promise.all(d.map(([s]) => _(c(e, s))))).indexOf(!0);
  return i === -1 ? null : d[i][1];
}

async function P(e) {
  let r = c(e, ".gitattributes");
  try {
    if (!(await p(r)).isFile()) return !1;
  } catch (s) {
    if (W(s)) return !1;
    throw s;
  }
  let i;
  try {
    i = await E(r, "r");
    let {buffer: s, bytesRead: n} = await i.read(Buffer.alloc(65536), 0, 65536, 0);
    return s.toString("utf8", 0, n).includes("filter=lfs");
  } catch (s) {
    if (W(s)) return !1;
    throw s;
  } finally {
    await (i?.close());
  }
}

export { V as collectWorktreeState, T as withCollectTimeout };
