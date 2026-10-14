// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q } from "./chunk-3pqddg8f.js";

import { b, c, pe, vl } from "./chunk-hwdwjvh8.js";

import { tb } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { Ln } from "./chunk-ddr690nj.js";

import { kDt, oGn, Jwe, Gt } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { Y, se, t } from "./chunk-kawq2919.js";

import { I, ne } from "./chunk-5wbhf1bk.js";

import { Ct } from "./chunk-6ah1819r.js";

import { Lt, zc, rx } from "./chunk-9yajep3y.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { le } from "./chunk-cqgvwwgb.js";

import { xn, Rb, As, Egt, lje, it } from "./chunk-zscnwzv2.js";

import { So, yje } from "./chunk-wptm3jf5.js";

import { ut } from "./chunk-yxennhe9.js";

import { oL } from "./chunk-r276nwd3.js";

import { p } from "./chunk-jkzenvsk.js";

import { hu } from "./chunk-5brm0azz.js";

import { bee } from "./chunk-q6wab2jw.js";

import { zct, I0 } from "./chunk-gmq0qwep.js";

import { y$, tx } from "./chunk-0481pkch.js";

import { Sf } from "./chunk-b47tzzqx.js";

import { c7t } from "./chunk-rshryz75.js";

import { mv } from "./chunk-4dpx2qvt.js";

import { Nce } from "./chunk-cvdvt5f8.js";

import { aC } from "./chunk-9m7tdcn4.js";

import { PAe, vxn, n5t, LAe, d_e, Z0e, c_e, qos, KD } from "./chunk-84yp45y8.js";

import { r1n } from "./chunk-jxw064gd.js";

import { Ube, Bbe, lhs, f8, dhs, yat, qyr, bco, chs, uhs, f0, phs, _at, iLn, qi } from "./chunk-sqb9meyh.js";

import { TMn, cmr, CMn } from "./chunk-bkx9v5fh.js";

import { f6o } from "./chunk-vs7wc248.js";

import { twn, nwn, rwn } from "./chunk-b6jt05kx.js";

import { me, St, Dd } from "./chunk-dexzwy8h.js";

import { N } from "./chunk-hmqkrrtz.js";

import { homedir as ye } from "os";

import { resolve as ge } from "path";

var ue = p(() => St({
  action: Dd([ "proceed", "confirm", "blocked" ]),
  billing_note: me().nullable().optional(),
  github_login: me().nullable().optional(),
  confirm: St({
    title: me().optional(),
    body: me()
  }).nullable().optional(),
  blocked: St({
    message: me(),
    action_url: me().nullable(),
    reason: me().optional()
  }).nullable().optional()
}));

function ae(o, e) {
  return {
    action: "blocked",
    blocked: {
      message: o,
      action_url: null,
      reason: e
    }
  };
}

async function de(o) {
  let e = a.CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE;
  if (e) {
    let u = ue().safeParse(Y(e));
    return u.success ? u.data : null;
  }
  try {
    let u = await Gt.get("/v1/ultrareview/preflight", {
      auth: "teleport-org",
      timeout: 5e3,
      credentials: o,
      headers: {
        [kDt]: q()
      }
    });
    if (!u.ok) switch (u.reason) {
     case "essential-traffic-only":
      return ae("Ultrareview runs in a cloud session and is unavailable when essential-traffic-only mode is active.", "zdr");

     case "data-residency":
      return ae("Ultrareview runs in a cloud session and is unavailable on third-party providers.", "data_residency");

     case "no-auth":
      return ae("Ultrareview requires a Claude.ai account. Run /login to authenticate.", "no_oauth_token");
    }
    let r = ue().safeParse(u.data);
    if (!r.success) return t(`fetchUltrareviewPreflight schema mismatch: ${r.error.message}`), 
    f("api_ultrareview_preflight", "schema_mismatch"), null;
    return g("api_ultrareview_preflight"), r.data;
  } catch (u) {
    return t(`fetchUltrareviewPreflight failed: ${u}`), f("api_ultrareview_preflight", "request_failed"), 
    null;
  }
}

var we = 3e3;

function ve(o, e) {
  if (!o || !zct(o) || !fe(o.currency)) return null;
  if (o.is_enabled !== !0) return 0;
  if (e === null || !fe(e.currency)) return null;
  let {monthly_limit: u, used_credits: r} = o, s;
  if (u === null) s = 1 / 0; else if (typeof u === "number" && typeof r === "number") s = u - r; else return null;
  let l = Math.min(s, e.auto_reload_settings?.enabled === !0 ? 1 / 0 : e.amount);
  return Number.isFinite(l) ? Math.max(0, l) : null;
}

function fe(o) {
  return typeof o === "string" && o.toUpperCase() === "USD";
}

async function he(o) {
  try {
    let e = lhs();
    if (e === null || oGn() || Jwe()) return null;
    let [u, r] = await Ht(Promise.all([ I0(o), PAe(o) ]), we, "ultrareview: usage credits read timed out"), s = ve(u?.extra_usage, r);
    if (s === null || s >= e * 100) return null;
    let l = s < 100 ? "Less than $1" : `About ${qi(Math.floor(s / 100) * 100, "USD", "whole")}`, h = qi(e * 100, "USD", "whole");
    return `${l} of usage credits left. A review usually uses about ${h} and stops if credits run out.`;
  } catch {
    return t("ultrareview: could not read usage credits left, so no low-credits line"), 
    null;
  }
}

var _e = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";

var zZn = `\nNote: --post was ignored \u2014 posting applies only to GitHub.com pull request reviews.`, GZn = `\nNote: --post was ignored \u2014 posting findings to the PR is currently turned off.`;

function qGt(o) {
  let e = h => String.raw`--fix|--comment|--post|--no-post|--max-findings(?:\s*=\s*(?!--)\S*|\s*=\S*|\s+${h})?`, u = new RegExp(`^(${e(String.raw`(?!--)\S+`)})(?:\\s+|$)`), r = new RegExp(`(?:^|\\s+)(${e(String.raw`(?:\d+|[Aa][Ll][Ll]|[Dd][Ee][Ff][Aa][Uu][Ll][Tt])`)})$`), s = new Set, l = o.trim();
  for (;;) {
    let h = l.match(u);
    if (!h) break;
    s.add(h[1]), l = l.slice(h[0].length);
  }
  for (;;) {
    let h = l.match(r);
    if (!h) break;
    s.add(h[1]), l = l.slice(0, l.length - h[0].length);
  }
  return {
    scopeArgs: l,
    applyFixes: s.has("--fix"),
    postReview: s.has("--no-post") ? !1 : s.has("--post") ? !0 : void 0
  };
}

async function VZn(o, e = "/code-review ultra", u) {
  if (!await n5t()) return i("tengu_review_remote_precondition_failed", {
    reason: b("not_git_repo"),
    cwd_is_home: x()
  }), {
    ok: !1,
    reason: "not_git_repo",
    error: be(e, u?.confirmsBeforeLaunch !== !0)
  };
  let r = o.trim(), s = iLn(r), l = s?.num.toString() ?? r.match(/^(?:#|PR[\s#]*)(\d+)$/i)?.[1] ?? r;
  if (/^\d+$/.test(l)) {
    let n = B => {
      if (B === "succeeded" && u?.suppressSucceededRecoveryEvent) return;
      if (l !== r) i("tengu_review_remote_precondition_recovery", {
        reason: b("base_ref_not_found"),
        method: b("pr_arg_normalization"),
        outcome: c(B)
      });
    }, _ = await tx(), d = _ && y$(_) ? null : _, S = yje(s?.host, d?.host) || !!s && !!d && So(s.host) && So(d.host);
    if (s && (!S || s.owner.toLowerCase() !== d?.owner.toLowerCase() || s.repo.toLowerCase() !== d?.name.toLowerCase())) {
      i("tengu_review_remote_precondition_failed", {
        reason: b("pr_url_wrong_repo"),
        has_remote: !!d,
        cwd_is_home: x()
      }), n("failed");
      let B = `${s.owner}/${s.repo} on ${s.host}`, G = d ? `you're in ${d.owner}/${d.name} on ${d.host}` : "this directory has no GitHub remote";
      return {
        ok: !1,
        reason: "pr_url_wrong_repo",
        error: `That link is for ${B}, but ${G}. cd into a checkout of that repo and run ${e} ${s.num} from there.`
      };
    }
    if (!d) return i("tengu_review_remote_precondition_failed", {
      reason: b("no_github_remote"),
      cwd_is_home: x()
    }), n("failed"), {
      ok: !1,
      reason: "no_github_remote",
      error: `${e} <PR#> needs a GitHub remote so it knows which repository the PR is in. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL". Or run ${e} with no argument to review your current branch instead.`
    };
    if (r1n(d)) return i("tengu_review_remote_precondition_failed", {
      reason: b("monorepo_blocked"),
      cwd_is_home: x()
    }), n("failed"), {
      ok: !1,
      reason: "monorepo_blocked",
      error: `${e} doesn't support pull requests in this repository. Run /code-review ${l}${e.startsWith("/") ? "" : " in Claude Code"} for a local review instead.`
    };
    let O, y, [{stdout: F, code: D}, C] = await Promise.all([ it("gh", [ "pr", "view", l, "--repo", `${d.host}/${d.owner}/${d.name}`, "--json", "additions,deletions,changedFiles" ], {
      timeout: 5e3,
      preserveOutputOnError: !1
    }), So(d.host) && chs() && !Ct() ? rwn(d.owner, d.name, u?.accessProbeBudgetMs) : null ]);
    if (C && !u?.suppressOfferedRecoveryEvent) i("tengu_review_remote_github_access_probe", {
      verdict: c(C.verdict),
      http_status: C.httpStatus ?? void 0
    });
    if (C?.verdict === "github_not_connected" || C?.verdict === "github_repo_not_found") {
      i("tengu_review_remote_precondition_failed", {
        reason: c(C.verdict),
        cwd_is_home: x()
      }), n("failed");
      let B = Nce() ? `run /web-setup${e.startsWith("/") ? "" : " in Claude Code"} to reuse your GitHub CLI login` : "", G = `then re-run ${e} ${l}`;
      return {
        ok: !1,
        reason: C.verdict,
        error: C.verdict === "github_not_connected" ? twn({
          subject: `Ultrareview clones ${d.owner}/${d.name} in the cloud`,
          webSetupHint: B,
          rerun: G
        }) : nwn({
          owner: d.owner,
          name: d.name,
          webSetupHint: B,
          rerun: G,
          leadWithWebSetup: D === 0
        })
      };
    }
    if (D === 0 && F.trim()) try {
      let B = Y(F), {maxFiles: G, maxLines: V} = qyr(), ee = B.additions + B.deletions;
      if (Number.isFinite(B.changedFiles) && Number.isFinite(ee)) O = B.changedFiles, 
      y = ee;
      if (B.changedFiles > G || ee > V) return i("tengu_review_remote_precondition_failed", {
        reason: b("pr_diff_too_large"),
        files: B.changedFiles,
        lines: ee,
        max_files: G,
        max_lines: V,
        cwd_is_home: x()
      }), n("failed"), {
        ok: !1,
        reason: "pr_diff_too_large",
        error: `PR #${l} is too large for ultrareview (${B.changedFiles} files, ${ee.toLocaleString()} lines). Split it into smaller PRs, or run \`${e}\` on a narrower local diff.`
      };
    } catch {}
    return n("succeeded"), {
      ok: !0,
      scope: {
        mode: "pr",
        prNumber: l,
        repo: `${d.owner}/${d.name}`,
        host: d.host,
        hadArg: !0,
        diffFiles: O,
        diffLines: y
      }
    };
  }
  let h = await qos();
  if (h.tooLarge) return i("tengu_review_remote_precondition_failed", {
    reason: b("repo_too_large_to_bundle"),
    pack_bytes: h.sizeBytes ?? void 0,
    pack_objects: h.inPackCount ?? void 0,
    cwd_is_home: x()
  }), {
    ok: !1,
    reason: "repo_too_large_to_bundle",
    error: `Repo is too large to bundle. Push a PR and use \`${e} <PR#>\` instead.`
  };
  let k = async n => (await it(Lt(), [ ...xn, "rev-parse", "--verify", "--quiet", "--end-of-options", n ], {
    preserveOutputOnError: !1
  })).code === 0, w = /\s/.test(r), A = w && (await k(`origin/${r}`) || await k(r)), M = w && !A ? r.match(/https:\/\/\S*\/pull\/\d+\b/) : null, T = w && !A && !M ? r.match(/(?<![\w/#-])(?:#|PR)[-\s#]*(\d+)\b/i) ?? r.match(/(?<![\w/#-])pull[\s-]+request[-\s#]*(\d+)\b/i) ?? r.match(/\/pull\/(\d+)\b/i) ?? r.match(/^(\d+)\b/) : null;
  if (M || T) {
    let n = M ? M[0] : `#${T[1]}`, _ = M ? M[0] : T[1];
    return i("tengu_review_remote_precondition_recovery", {
      reason: b("base_ref_not_found"),
      method: b("embedded_pr_hint"),
      outcome: b("offered")
    }), i("tengu_review_remote_precondition_failed", {
      reason: b("base_ref_not_found"),
      looks_like_url: /^https?:/i.test(r),
      looks_like_sha: !1,
      starts_with_hash: r.startsWith("#"),
      has_slash: r.includes("/"),
      has_whitespace: !0,
      has_pr_ref: !0,
      has_remote: await ce(),
      cwd_is_home: x()
    }), {
      ok: !1,
      reason: "base_ref_not_found",
      error: `Your request mentions what looks like a PR reference (${n}). To review that PR, run \`${e} ${_}\`. To review your current branch instead, rerun without the PR-style reference.`
    };
  }
  let U = w && !A && !r.startsWith("-"), te = U ? r : void 0, v = U ? "" : r, X = !1;
  if (v) {
    if (!await k(`origin/${v}`) && !await k(v)) {
      let n = await Ee(v);
      if (n === "recovered" && await k(`origin/${v}`)) X = !0; else {
        if (n !== "not_found") i("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("fetch_retry"),
          outcome: b("failed")
        });
        if (n === "fetch_failed") return i("tengu_review_remote_precondition_failed", {
          reason: b("base_ref_not_found"),
          looks_like_url: /^https?:/i.test(v),
          looks_like_sha: /^[0-9a-f]{7,40}$/i.test(v),
          starts_with_hash: v.startsWith("#"),
          has_slash: v.includes("/"),
          has_whitespace: /\s/.test(v),
          has_remote: await ce(),
          cwd_is_home: x()
        }), {
          ok: !1,
          reason: "base_ref_not_found",
          error: `"${v}" exists on origin but couldn't be fetched. Run \`git fetch origin ${v}\` and try ${e} again.`
        };
        let _ = await Se(v);
        if (_) i("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("branch_suggestion"),
          outcome: b("offered")
        });
        i("tengu_review_remote_precondition_failed", {
          reason: b("base_ref_not_found"),
          looks_like_url: /^https?:/i.test(v),
          looks_like_sha: /^[0-9a-f]{7,40}$/i.test(v),
          starts_with_hash: v.startsWith("#"),
          has_slash: v.includes("/"),
          has_whitespace: /\s/.test(v),
          has_remote: await ce(),
          cwd_is_home: x()
        });
        let d = _ ? ` Did you mean \`${_}\`?` : "";
        return {
          ok: !1,
          reason: "base_ref_not_found",
          error: `"${v}" is not a branch or commit in this repo.${d} ${e} takes a PR number, a base branch or commit, or no argument (reviews your current branch). Try ${e} by itself.`
        };
      }
    }
  }
  let j = n => {
    if (X) i("tengu_review_remote_precondition_recovery", {
      reason: b("base_ref_not_found"),
      method: b("fetch_retry"),
      outcome: c(n)
    });
    if (U) {
      if (n === "succeeded" && u?.suppressSucceededRecoveryEvent) return;
      i("tengu_review_remote_precondition_recovery", {
        reason: b("base_ref_not_found"),
        method: b("prose_instructions"),
        outcome: c(n)
      });
    }
  }, R = v || await rx() || "main", Z = await zc() || "HEAD", J = async n => it(Lt(), [ ...xn, "merge-base", n, "HEAD" ], {
    preserveOutputOnError: !1,
    env: As()
  }), W = `origin/${R}`, {stdout: Q, code: re} = await J(W);
  if (re !== 0) W = R, ({stdout: Q, code: re} = await J(W));
  let K = Q.trim(), z = n => it(Lt(), [ ...xn, ...n ], {
    preserveOutputOnError: !1,
    env: As()
  }), oe = `Your checkout has no branches (detached HEAD only), which cloud review can't bundle. Create one first \u2014 \`git checkout -b <name>\` \u2014 then rerun ${e}.`, ie = async () => v.length > 0 || (await z([ "rev-parse", "--verify", "--quiet", `origin/${R}` ])).code === 0 || (await z([ "rev-parse", "--verify", "--quiet", R ])).code === 0, E = async (n, _ = Z) => {
    let d = n || await ie(), {stdout: S, code: O} = await it(Lt(), [ ...xn, "diff", "--no-ext-diff", "--no-textconv", Rb, "--shortstat", _e ], {
      preserveOutputOnError: !1,
      env: As({
        LC_ALL: "C"
      })
    });
    if (O === 0) {
      if (n && !S.trim()) return null;
      if (!S.trim()) return i("tengu_review_remote_precondition_failed", {
        reason: b("empty_diff"),
        cwd_is_home: x()
      }), j("failed"), {
        ok: !1,
        reason: "empty_diff",
        error: d ? `It doesn't look like you have any new commits or changes to review against your ${R} branch. Stage or commit them first?` : "It doesn't look like you have any changes to review. Stage or commit them first?"
      };
      let y = CMn(S), F = y ? y.linesAdded + y.linesRemoved : 0, {maxFiles: D, maxLines: C} = qyr();
      if (y && (y.filesCount > D || F > C)) {
        i("tengu_review_remote_precondition_failed", {
          reason: b("local_diff_too_large"),
          files: y.filesCount,
          lines: F,
          max_files: D,
          max_lines: C,
          after_fallback: !0,
          cwd_is_home: x(),
          first_commit: n || void 0
        }), j("failed");
        let B = n ? `Your first commit is the base from here on: make your changes and rerun ${e} to review only those.` : d ? `Review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.` : `This repo has no ${R} branch \u2014 if another branch is your base, pass it explicitly (\`${e} <branch>\`). Otherwise review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.`;
        return {
          ok: !1,
          reason: "local_diff_too_large",
          error: `This looks like a first review of the entire repository (${S.trim()}), which exceeds ultrareview's limit. ${B}`
        };
      }
      if (!u?.suppressOfferedRecoveryEvent) i("tengu_review_remote_precondition_recovery", {
        reason: b("no_merge_base"),
        method: b("empty_tree_bundle"),
        outcome: b("offered"),
        files: y?.filesCount,
        lines: y ? F : void 0,
        is_shallow: !1,
        first_commit: n || void 0
      });
      return j("succeeded"), {
        ok: !0,
        scope: {
          mode: "branch",
          headBranch: _,
          baseBranch: R,
          mergeBaseSha: _e,
          diffStat: S.trim(),
          hadArg: v.length > 0,
          diffFiles: y?.filesCount,
          diffLines: y ? F : void 0,
          noMergeBase: n ? "first_commit" : d ? "unrelated_history" : "base_ref_missing",
          instructions: te
        }
      };
    }
    return null;
  };
  if (re !== 0 || !K) {
    let n = (await z([ "rev-parse", "--verify", "--quiet", "HEAD" ])).code === 0, _ = (await z([ "rev-parse", "--is-shallow-repository" ])).stdout.trim(), d = _ === "true", S = _ === "false", O = n && S && bco(), y = O ? await z([ "for-each-ref", "--count=1", "refs/" ]) : null, F = y !== null && y.stdout.trim() !== "", D = y !== null && y.code === 0 && y.stdout.trim() === "", C = !1;
    if (O && F) if (u?.confirmsBeforeLaunch === !0 || u?.personRanTheCommand === !0) {
      let G = await E(!1);
      if (G) return G;
    } else C = !0;
    if (i("tengu_review_remote_precondition_failed", {
      reason: b("no_merge_base"),
      cwd_is_home: x(),
      is_shallow: d,
      head_resolves: n,
      arg_was_explicit: v.length > 0,
      has_refs: F ? !0 : D ? !1 : void 0,
      whole_repository_held_back: C || void 0
    }), j("failed"), C) return {
      ok: !1,
      reason: "no_merge_base",
      error: `${await ie() ? `${R} shares no history with your checkout` : `This repository has no ${R} branch to compare with`}, so a review here would cover every file. To review it whole, a person can run /ultrareview in an interactive Claude Code session, which asks before it spends anything.`
    };
    if (!n) return {
      ok: !1,
      reason: "no_merge_base",
      error: !u?.confirmsBeforeLaunch ? `Your current branch has no commits yet, so there is nothing to review. Commit a starting point first. ${e} then reviews the changes you make on top of that commit.` : `Your current branch has no commits yet, so there is nothing to review. Commit your work first, then rerun ${e}.`
    };
    if (d) return i("tengu_review_remote_precondition_recovery", {
      reason: b("no_merge_base"),
      method: b("deepen_hint"),
      outcome: b("offered"),
      is_shallow: !0
    }), {
      ok: !1,
      reason: "no_merge_base",
      error: v ? `Your clone is shallow and doesn't contain the point where your branch forked from ${R}. Run \`git fetch --deepen=100 origin ${R}\` (or \`git fetch --unshallow origin\`) and rerun ${e}.` : `Your clone is shallow and doesn't contain the point where your branch forked from ${R}. Run \`git fetch --unshallow origin\` and rerun ${e}. If your base branch isn't ${R}, pass it explicitly (\`${e} <branch>\`).`
    };
    if (D) return {
      ok: !1,
      reason: "no_refs",
      error: oe
    };
    let B = X ? S ? `${R} was fetched from origin but shares no history with HEAD. If another branch is your real base, pass it explicitly (\`${e} <branch>\`).` : `${R} was fetched from origin but shares no history with HEAD. Try \`git fetch --unshallow origin\` (or deepen the clone) and rerun.` : v ? `Make sure ${R} exists locally or on origin (try \`git fetch origin ${R}\`).` : `Pass the base branch explicitly (e.g. \`${e} develop\`) or make sure you're in a git repo with a ${R} branch.`;
    return {
      ok: !1,
      reason: "no_merge_base",
      error: `Could not find merge-base with ${R}. ${B}`
    };
  }
  if (v.length > 0) {
    let n = await z([ "for-each-ref", "--count=1", "refs/" ]);
    if (n.code === 0 && n.stdout.trim() === "") return i("tengu_review_remote_precondition_failed", {
      reason: b("no_refs"),
      cwd_is_home: x(),
      arg_was_explicit: !0
    }), j("failed"), {
      ok: !1,
      reason: "no_refs",
      error: oe
    };
  }
  let {stdout: P, code: H} = await TMn(se().cwd(), [ ...xn, "diff", "--no-ext-diff", "--no-textconv", Rb, "--shortstat", K ], {
    LC_ALL: "C"
  }, {
    preserveOutputOnError: !1
  });
  if (H === 0 && !P.trim()) {
    let n = await Re(K, R), _ = n.headBranch, d = n.headAtMergeBase === !0 && n.headIsRoot === !0 && n.untrackedCount === 0 && bco() && (await z([ "rev-parse", "--is-shallow-repository" ])).stdout.trim() === "false" && (await z([ "rev-parse", "--verify", "--quiet", "--end-of-options", `${W}^{commit}` ])).stdout.trim() === K, S = d && u?.confirmsBeforeLaunch !== !0;
    if (d && !S) {
      let V = await E(!0, _);
      if (V) return V;
    }
    i("tengu_review_remote_precondition_failed", {
      reason: b("empty_diff"),
      used_origin_ref: W !== R,
      had_explicit_base: v.length > 0,
      cwd_is_home: x(),
      on_base_branch: n.onBaseBranch,
      head_at_merge_base: n.headAtMergeBase,
      first_commit_held_back: S || void 0,
      has_untracked: n.untrackedCount === void 0 ? void 0 : n.untrackedCount > 0
    }), j("failed");
    let O = v ? `try a different base, e.g. \`${e} <branch>\`` : `pass one explicitly, e.g. \`${e} <branch>\``, y = `${W} (merge-base ${K.slice(0, 7)})`, F = "no staged or unstaged edits to tracked files", D, C;
    if (n.headAtMergeBase && _ && n.onBaseBranch) {
      let V = `If your work is on another branch, switch to it, or if the base should be something else, ${O}.`;
      if (W === _) D = `you're on ${_}, which is also the base of this review, and it has ${F}`, 
      C = `Everything already committed on ${_} counts as the base here, so only edits you haven't committed yet would be reviewed. ${V}`; else D = `you're on ${_}, which is also the base of this review, and it has no commits beyond ${y} and ${F}`, 
      C = V;
    } else if (n.headAtMergeBase && _ === "HEAD") D = `the commit you have checked out is already part of ${y}, and there are ${F}`, 
    C = `If your work is on a branch, switch to it. If you meant a different base, ${O}.`; else if (n.headAtMergeBase && _) D = `${_} has no commits beyond ${y} and ${F}`, 
    C = `If your work is on another branch, switch to it. If this branch was already merged or you meant a different base, ${O}.`; else D = `the diff against ${y} is empty`, 
    C = `If you have local edits, stage or commit them first. If your branch was already merged or you meant a different base, ${O}.`;
    let B = "";
    if (n.headAtMergeBase && n.parentSha) {
      let V = n.parentSha.slice(0, 12), ee = /^\d+$/.test(V) ? n.parentSha : V;
      i("tengu_review_remote_precondition_recovery", {
        reason: b("empty_diff"),
        method: b("last_commit_hint"),
        outcome: b("offered")
      }), B = ` To review your latest commit anyway, run \`${e} ${ee}\`. That id is the commit before it, and any earlier commit id or tag works the same way.`;
    }
    let G = S ? " To review this first commit whole, run /ultrareview in an interactive Claude Code session, which asks before it spends anything." : "";
    return {
      ok: !1,
      reason: "empty_diff",
      error: `No changes to review: ${D}.${$e(n.untrackedCount, e)} ${C}${B}${G}`
    };
  }
  let L = CMn(P);
  if (L) {
    let {maxFiles: n, maxLines: _} = qyr(), d = L.linesAdded + L.linesRemoved;
    if (L.filesCount > n || d > _) {
      i("tengu_review_remote_precondition_failed", {
        reason: b("local_diff_too_large"),
        files: L.filesCount,
        lines: d,
        max_files: n,
        max_lines: _,
        cwd_is_home: x()
      }), j("failed");
      let {stdout: S, code: O} = await TMn(se().cwd(), [ ...xn, "-c", "core.quotepath=false", "diff", "--no-ext-diff", "--no-textconv", Rb, "--numstat", K ], {}, {
        preserveOutputOnError: !1,
        timeout: 1e4,
        maxBuffer: 10485760
      }), y = O === 0 ? ke(S) : "";
      return {
        ok: !1,
        reason: "local_diff_too_large",
        error: `Diff is too large for ultrareview: ${L.filesCount.toLocaleString()} ${I(L.filesCount, "file")}, ${d.toLocaleString()} ${I(d, "line")} changed (limits: ${n.toLocaleString()} ${I(n, "file")}, ${_.toLocaleString()} ${I(_, "line")}).${y} Pass a closer base branch (\`${e} <branch>\`) to narrow the scope, or split the change.`
      };
    }
  }
  return j("succeeded"), {
    ok: !0,
    scope: {
      mode: "branch",
      headBranch: Z,
      baseBranch: R,
      mergeBaseSha: K,
      diffStat: P.trim(),
      hadArg: v.length > 0,
      diffFiles: L?.filesCount,
      diffLines: L ? L.linesAdded + L.linesRemoved : void 0,
      instructions: te
    }
  };
}

async function Re(o, e) {
  let [u, r, s] = await Promise.all([ it(Lt(), [ ...xn, "rev-list", "--parents", "--max-count=1", "HEAD", "--" ], {
    preserveOutputOnError: !1,
    env: As()
  }), it(Lt(), [ ...xn, "symbolic-ref", "--quiet", "HEAD" ], {
    preserveOutputOnError: !1,
    env: As()
  }), it(Lt(), [ ...xn, "ls-files", "--others", "--exclude-standard", "--directory", "--no-empty-directory", "-z", "--", ":/" ], {
    preserveOutputOnError: !1,
    timeout: 5e3,
    maxBuffer: 1048576,
    env: As({
      GIT_LITERAL_PATHSPECS: ""
    })
  }) ]), [l, h, ...k] = u.code === 0 ? u.stdout.trim().split(/\s+/) : [], w = r.exitCode === 0 ? r.stdout.trim().replace(/^refs\/heads\//, "") || void 0 : r.exitCode === 1 ? "HEAD" : void 0;
  return {
    headBranch: w,
    onBaseBranch: w === void 0 ? void 0 : w !== "HEAD" && (w === e || `origin/${w}` === e),
    headAtMergeBase: l ? l === o : void 0,
    parentSha: k.length ? void 0 : h || void 0,
    headIsRoot: l ? !h : void 0,
    untrackedCount: s.code === 0 ? N(s.stdout.split("\0"), Boolean) : void 0
  };
}

function $e(o, e) {
  if (!o) return "";
  return ` Git also sees ${o.toLocaleString()} untracked ${I(o, "file or folder", "files or folders")} here. New files aren't part of a review until git tracks them: run \`git add\` on the ones you want reviewed, then rerun ${e}.`;
}

function ke(o, e = 3) {
  let {perFileStats: u} = cmr(o, Number.POSITIVE_INFINITY), r = [ ...u.entries() ].map(([l, h]) => ({
    path: l,
    lines: h.added + h.removed
  })).filter(l => l.lines > 0);
  if (r.length === 0) return "";
  return ` Largest files: ${r.sort((l, h) => h.lines - l.lines).slice(0, e).map(l => `${l.path} (${l.lines.toLocaleString()} ${I(l.lines, "line")})`).join(", ")}.`;
}

function YGt(o, e = 80) {
  return ut(o.replace(/\s+/g, " ").trim(), e);
}

async function Ee(o) {
  if (o.startsWith("-") || o.includes(":") || /\s/.test(o)) return "not_found";
  let e = {
    ...Egt(),
    GIT_SSH_COMMAND: `${a.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o StrictHostKeyChecking=yes`,
    GIT_ALLOW_PROTOCOL: "https:http:ssh"
  }, u = await it(Lt(), [ ...xn, ...lje, "-c", "credential.helper=", "-c", "core.askPass=", "ls-remote", "--heads", "--exit-code", "--end-of-options", "origin", o ], {
    timeout: 4e3,
    preserveOutputOnError: !1,
    env: e
  });
  if (u.code !== 0) return u.code === 2 ? "not_found" : "probe_failed";
  if (!u.stdout.split(`\n`).some(l => l.split("\t")[1]?.trim() === `refs/heads/${o}`)) return "not_found";
  return (await it(Lt(), [ ...xn, ...lje, "-c", "credential.helper=", "-c", "core.askPass=", "fetch", "--no-tags", "--end-of-options", "origin", `refs/heads/${o}:refs/remotes/origin/${o}` ], {
    timeout: 15e3,
    preserveOutputOnError: !1,
    env: e
  })).code === 0 ? "recovered" : "fetch_failed";
}

async function Se(o) {
  let {stdout: e, code: u} = await it(Lt(), [ ...xn, "for-each-ref", "--format=%(refname:short)", "--count=2000", "refs/heads", "refs/remotes/origin" ], {
    preserveOutputOnError: !1,
    env: As()
  });
  if (u !== 0) return null;
  let r = new Map;
  for (let k of e.split(`\n`)) {
    let w = k.trim();
    if (!w || w === "origin" || w === "origin/HEAD") continue;
    let A = w.startsWith("origin/") ? w.slice(7) : w;
    if (w.startsWith("origin/") || !r.has(A)) r.set(A, w);
  }
  let s = o === "main" ? "master" : o === "master" ? "main" : null;
  if (s !== null) {
    let k = r.get(s);
    if (k) return k;
  }
  let l = null, h = 3;
  for (let [k, w] of r) {
    if (Math.abs(k.length - o.length) >= h) continue;
    let A = bee(o, k, h - 1);
    if (A > 0 && A < h) h = A, l = w;
  }
  return l;
}

var Ce = "Couldn't check whether this review can run, so it stopped before uploading your code. Try again shortly; if this keeps happening, open a pull request for this branch and review the pull request instead.";

async function KZn({overageConfirmed: o, credentials: e, skipLowCreditsNote: u = !1, bundleFollows: r}) {
  let s = await de(e);
  if (!s) {
    if (r && uhs()) return {
      kind: "blocked",
      reason: "preflight_unavailable",
      message: Ce,
      actionUrl: null
    };
    return {
      kind: "proceed",
      billingNote: "",
      preflightUnavailable: !0
    };
  }
  let l = s.billing_note ?? "", h = s.github_login ?? null;
  switch (s.action) {
   case "proceed":
    return {
      kind: "proceed",
      billingNote: l,
      githubLogin: h
    };

   case "blocked":
    return {
      kind: "blocked",
      reason: s.blocked?.reason ?? "server",
      message: s.blocked?.message ?? "Ultrareview is unavailable for your organization.",
      actionUrl: s.blocked?.action_url ?? null
    };

   case "confirm":
    {
      if (o) return {
        kind: "proceed",
        billingNote: l,
        githubLogin: h
      };
      let k = u ? null : await he(e);
      return {
        kind: "needs-confirm",
        body: `This review bills as usage credits (${Bbe()}).${k ? `\n${k}` : ""}`,
        lowCreditsNote: k,
        billingNote: l,
        githubLogin: h
      };
    }
  }
}

var Be = 3;

async function qZn(o, e, u, r) {
  let s = r?.invocation ?? "/code-review ultra", l = E => ({
    launched: !1,
    blocks: [ {
      type: "text",
      text: E
    } ]
  }), h = await LAe({
    allowBundle: !0,
    storageV5: e.storageV5,
    credentials: e.credentials
  });
  if (!h.eligible) {
    let E = h.errors;
    if (E.length > 0) {
      i("tengu_review_remote_precondition_failed", {
        reason: b("remote_agent_ineligible"),
        precondition_errors: vl(E.map(H => H.type)),
        cwd_is_home: x()
      });
      let P = E.map(H => {
        if (H.type === "not_in_git_repo") return be(s);
        if (H.type === "no_git_remote") return `${s} needs a GitHub remote so it can clone this repository into the cloud. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL && git push -u origin HEAD".`;
        return d_e(H);
      }).join(`\n`);
      if (o.mode === "branch" && o.noMergeBase) i("tengu_review_remote_precondition_recovery", {
        reason: b("no_merge_base"),
        method: b("empty_tree_bundle"),
        outcome: b("failed")
      });
      return m("ultrareview_launch", "remote_agent_ineligible"), l(`Ultrareview cannot launch:\n${P}`);
    }
  }
  let k = "env_011111111111111111111113", w = Ube(), A = (E, P, H) => {
    if (typeof E !== "number" || !Number.isFinite(E)) return P;
    let L = Math.floor(E);
    if (L <= 0) return P;
    return L > H ? P : L;
  }, M = dhs(), T = {
    BUGHUNTER_DRY_RUN: "1",
    AUTOPATCH_ENABLE_ASIMOV: "1",
    ...w?.code_quality !== !1 && {
      BUGHUNTER_CODE_QUALITY: "1"
    },
    BUGHUNTER_FLEET_SIZE: String(A(w?.fleet_size, 5, 20)),
    BUGHUNTER_MAX_DURATION: String(A(w?.max_duration_minutes, 10, 25)),
    BUGHUNTER_AGENT_TIMEOUT: String(A(w?.agent_timeout_seconds, 600, 1800)),
    BUGHUNTER_TOTAL_WALLCLOCK: String(A(w?.total_wallclock_minutes, 22, 27)),
    BUGHUNTER_RESULT_RELAY_MAX_SEC: String((yat() - Be) * 60),
    ...M && {
      BUGHUNTER_MODEL: M
    },
    ...process.env.BUGHUNTER_DEV_BUNDLE_B64 && {
      BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64
    }
  }, U, te, v, X = "", j = [], R, Z, J, W, Q;
  if (o.mode === "pr") {
    let E = await tx(), P = E && y$(E) ? null : E;
    if (!P) return i("tengu_review_remote_precondition_failed", {
      reason: b("no_github_remote_post_confirm"),
      cwd_is_home: x()
    }), m("ultrareview_launch", "no_github_remote"), null;
    let H = `ultrareview: ${P.owner}/${P.name}#${o.prNumber}`;
    U = await KD({
      initialMessage: null,
      source: "ultrareview",
      description: H,
      title: H,
      signal: e.abortController.signal,
      storageV5: e.storageV5,
      credentials: e.credentials,
      branchName: `refs/pull/${o.prNumber}/head`,
      environmentId: k,
      tags: [ "ultrareview" ],
      environmentVariables: {
        BUGHUNTER_PR_NUMBER: o.prNumber,
        BUGHUNTER_REPOSITORY: `${P.owner}/${P.name}`,
        ...T
      },
      onCreateFail: (L, n, _) => {
        R = L, Z = c(n), J = _?.status, W = pe(_?.serverType), Q = pe(_?.serverReason);
      }
    }), te = `/ultrareview ${o.prNumber}`, v = `${P.owner}/${P.name}#${o.prNumber}`;
  } else {
    let {headBranch: E, baseBranch: P, mergeBaseSha: H, diffStat: L, noMergeBase: n} = o;
    X = L;
    let _, d;
    if (U = await KD({
      initialMessage: null,
      source: "ultrareview",
      description: `ultrareview: ${E}`,
      signal: e.abortController.signal,
      storageV5: e.storageV5,
      credentials: e.credentials,
      useBundle: !0,
      bundleBaseRef: H,
      bundleForceScope: n ? "squashed" : void 0,
      environmentId: k,
      tags: [ "ultrareview" ],
      environmentVariables: {
        BUGHUNTER_BASE_BRANCH: H,
        ...T
      },
      onBundleFail: (S, O) => {
        _ = S, d = c(O);
      },
      onBundleNotice: S => {
        j.push(S);
      },
      onCreateFail: (S, O, y) => {
        R = S, Z = c(O), J = y?.status, W = pe(y?.serverType), Q = pe(y?.serverReason);
      }
    }), !U) {
      i("tengu_review_remote_teleport_failed", {
        mode: b("branch"),
        reason: Z,
        bundle_fail_kind: d,
        status_code: J,
        server_type: W,
        server_reason: Q
      });
      let S = e.abortController.signal.aborted;
      if (n && !S) i("tengu_review_remote_precondition_recovery", {
        reason: b("no_merge_base"),
        method: b("empty_tree_bundle"),
        outcome: b("failed")
      });
      if (!S) m("ultrareview_launch", "teleport_failed");
      return l(_ ?? (R ? `Ultrareview could not start the cloud session: ${R}` : `Repo is too large. Push a PR and use \`${s} <PR#>\` instead.`));
    }
    te = "/ultrareview", v = n === "unrelated_history" ? `${E} (all files \u2014 no common history with ${P})` : n === "base_ref_missing" ? `${E} (all files)` : n === "first_commit" ? `${E} (every file in the first commit)` : E === P ? E : `${E} \u2192 ${P}`;
  }
  if (!U) {
    if (i("tengu_review_remote_teleport_failed", {
      mode: b("pr"),
      reason: Z,
      status_code: J,
      server_type: W,
      server_reason: Q
    }), !e.abortController.signal.aborted) m("ultrareview_launch", "teleport_failed");
    if (R) return l(`Ultrareview could not start the cloud session: ${R}`);
    return null;
  }
  let re;
  if (!r?.skipTaskRegistration) re = Z0e({
    remoteTaskType: "ultrareview",
    session: U,
    command: te,
    context: e,
    isRemoteReview: !0,
    applyFixesOnComplete: r?.applyFixesOnComplete,
    reviewInstructions: o.mode === "branch" ? o.instructions : void 0,
    postReviewTo: r?.postReviewToPR && o.mode === "pr" && !r?.signal?.aborted ? {
      repo: o.repo,
      prNumber: o.prNumber
    } : void 0
  }).taskId;
  if (i("tengu_review_remote_launched", {
    mode: c(o.mode),
    had_arg: o.hadArg,
    post_armed: r?.postReviewToPR === !0 && o.mode === "pr" && !r?.signal?.aborted,
    had_instructions: o.mode === "branch" && !!o.instructions,
    diff_files: o.diffFiles,
    diff_lines: o.diffLines
  }), o.mode === "branch" && o.noMergeBase) if (i("tengu_review_remote_precondition_recovery", {
    reason: b("no_merge_base"),
    method: b("empty_tree_bundle"),
    outcome: b("succeeded")
  }), o.noMergeBase === "first_commit") g("ultrareview_launch"); else f("ultrareview_launch", "no_merge_base_empty_tree_fallback"); else g("ultrareview_launch");
  f6o(e.storageV5);
  let K = c_e(U.id), z = u.trim() ? `${u.trim()}\n` : "", oe = X ? `\nScope: ${X}` : "", ie = o.mode === "branch" && o.instructions ? r?.skipTaskRegistration ? `\nYour text was read as a note, not a base branch \u2014 the standard review runs on the diff above.` : `\nYour text was read as a note, not a base branch \u2014 the standard review runs on the diff above, and the findings will be related to your note when they arrive.` : "";
  return {
    launched: !0,
    sessionId: U.id,
    sessionUrl: K,
    taskId: re,
    title: U.title,
    blocks: [ {
      type: "text",
      text: `${z}Ultrareview launched for ${v} (${f8()}, runs in the cloud).${r?.findingsArriveInSession ? " The findings arrive here when it finishes." : ""}${r?.postReviewToPR && o.mode === "pr" ? `\nWhen it finishes, the findings will be posted to the PR as a comment from your GitHub account. (Keep this session open: the consent lives only here, so if it ends before the review finishes, nothing will be posted \u2014 even on resume.)` : ""}${oe}${ie}${j.map(E => `\n${E}`).join("")}`
    } ]
  };
}

function XGt(o, e) {
  return `The output above is already visible to the user. Briefly acknowledge it without repeating the target or billing note. Findings will arrive via task-notification.${o ? " The user passed --fix: when the findings arrive, apply them to the local working tree." : ""}${e ? ` The user's argument was interpreted as a review note, not a base branch: "${ne(e, vxn)}". The cloud review runs its standard pass over the branch diff and does not see the note; when the findings arrive, prioritize and relate them to the user's request.` : ""}`;
}

var Te = /^[a-z][a-z0-9_]{0,63}$/;

async function i2e(o, e) {
  if (!f0()) {
    let T = phs(), U = T === "entitlement" ? c7t() : null;
    return i("tengu_review_remote_gate_blocked", {
      reason: pe(T) ?? b("unknown"),
      entitlement_blocker: pe(U)
    }), {
      status: "error",
      message: "Ultrareview is currently unavailable.",
      ...T !== null && {
        gate_blocker: T
      },
      ...U !== null && {
        entitlement_blocker: U
      }
    };
  }
  await mv();
  let u = Sf("allow_remote_sessions", "Cloud sessions", "are");
  if (u) return aC("allow_remote_sessions", "slash_command"), {
    status: "error",
    message: u
  };
  let r = await VZn(o, e.invocation, {
    suppressSucceededRecoveryEvent: !e.confirm,
    suppressOfferedRecoveryEvent: e.confirm && !e.singlePass,
    confirmsBeforeLaunch: e.confirmsBeforeLaunch === !0,
    personRanTheCommand: e.personRanTheCommand === !0
  });
  if (!r.ok) return {
    status: "error",
    message: r.error,
    reason: r.reason
  };
  let s = await KZn({
    overageConfirmed: e.overageConfirmed,
    credentials: e.context.credentials,
    skipLowCreditsNote: e.confirm && !e.singlePass,
    bundleFollows: r.scope.mode === "branch"
  });
  if (s.kind === "blocked") return i("tengu_review_overage_blocked", {
    reason: tb(s.reason)
  }), {
    status: "blocked",
    message: s.message,
    actionUrl: s.actionUrl,
    ...Te.test(s.reason) && {
      reason: s.reason
    }
  };
  let l = () => {
    let T = r.scope.mode === "pr" ? `Reviewing PR ${r.scope.repo}#${r.scope.prNumber}.` : r.scope.noMergeBase ? "Reviewing all files on the current branch." : `Reviewing current branch against ${r.scope.baseBranch}.`, U = r.scope.mode === "branch" && r.scope.instructions ? ` Note for findings (not a base branch): "${YGt(r.scope.instructions)}"` : "";
    return `\n${T}${U}`;
  };
  if (s.kind === "proceed" && s.preflightUnavailable && e.withholdOverageConsent && !e.overageConfirmed) return {
    status: "needs-confirm",
    body: `Couldn't verify your review quota right now, so this review may bill as usage credits (${Bbe()}).${l()}`,
    billingNote: ""
  };
  if (s.kind === "needs-confirm") {
    if (e.withholdOverageConsent) return {
      status: "needs-confirm",
      body: `${s.body}${l()}`,
      billingNote: s.billingNote
    };
    if (i("tengu_review_overage_dialog_shown", {}), !e.confirm) return {
      status: "needs-confirm",
      body: `${s.body}${l()}`,
      billingNote: s.billingNote
    };
    e.markOverageConfirmed();
  }
  if (e.confirm && r.scope.mode === "branch" && r.scope.noMergeBase) i("tengu_review_remote_precondition_recovery", {
    reason: b("no_merge_base"),
    method: b("empty_tree_bundle"),
    outcome: b("accepted")
  });
  if (!e.confirm) {
    let T = r.scope.mode === "pr" ? `Reviewing PR ${r.scope.repo}#${r.scope.prNumber}` : r.scope.noMergeBase === "unrelated_history" ? `Reviewing all files (no common history with ${r.scope.baseBranch})\nScope: ${r.scope.diffStat}` : r.scope.noMergeBase === "base_ref_missing" ? `Reviewing all files (no ${r.scope.baseBranch} branch to compare against)\nScope: ${r.scope.diffStat}` : r.scope.noMergeBase === "first_commit" ? `Reviewing every file in the first commit (there is nothing earlier to compare with)\nScope: ${r.scope.diffStat}` : `Reviewing current branch against ${r.scope.baseBranch}\nScope: ${r.scope.diffStat}`, U = r.scope.mode === "branch" && r.scope.instructions ? `\nNote for findings (not a base branch): "${YGt(r.scope.instructions)}"` : "";
    return {
      status: "needs-confirm",
      body: `${T}${U}\n${f8()} \xb7 Est. cost ${Bbe()} USD`,
      billingNote: s.billingNote
    };
  }
  let h = e.postReview === !0 && !_at(), k = e.postReview === !0 && !h && r.scope.mode === "pr" && So(r.scope.host), w = await qZn(r.scope, e.context, s.billingNote, {
    skipTaskRegistration: e.skipTaskRegistration,
    invocation: e.invocation,
    applyFixesOnComplete: e.applyFixes,
    postReviewToPR: k
  });
  if (!w?.launched) return {
    status: "error",
    message: w?.blocks.map(T => T.type === "text" ? T.text : "").join("").trim() || "Failed to launch cloud review session."
  };
  let A = e.postReview === !0 && !k, M = w.blocks.map(T => T.type === "text" ? T.text : "").join("").trim();
  return {
    status: "launched",
    sessionId: w.sessionId,
    sessionUrl: w.sessionUrl,
    taskId: w.taskId,
    title: w.title,
    message: h ? `${M}${GZn}` : A ? `${M}${zZn}` : M,
    billingNote: s.billingNote,
    postReviewTo: k && r.scope.mode === "pr" ? {
      repo: r.scope.repo,
      prNumber: r.scope.prNumber
    } : void 0,
    postIgnored: A || void 0,
    lowCreditsNote: e.singlePass && s.kind === "needs-confirm" && s.lowCreditsNote || void 0
  };
}

async function ce() {
  let o = await tx();
  return !!o && !y$(o);
}

function be(o, e = !1) {
  let u = e ? `run "git init" and commit a starting point. ${o} then reviews the changes you make on top of that commit.` : `run "git init" and commit your work. ${o} then reviews that first commit whole if it is small enough, and after that the changes you make on top of it.`, r = hu() ? "Open a folder that is a git repository with at least one commit, then try again." : `If your project already uses git, cd into its folder and rerun ${o}. If it doesn't yet, ${u}`;
  return `${o} reviews the changes a git branch makes on top of an earlier commit, but ${le()} is not inside a git repository. ${r}`;
}

function x() {
  try {
    let o = ye();
    if (!o) return !1;
    return oL(Ln(ge(le())), Ln(ge(o)));
  } catch {
    return !1;
  }
}

export { zZn, GZn, qGt, VZn, YGt, KZn, qZn, XGt, i2e };
