// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-2v9tfgc3.js";

import "./chunk-hwdwjvh8.js";

import { E } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import { bme, a } from "./chunk-j016gcgm.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-y752zmas.js";

import { _, Y, pL } from "./chunk-kawq2919.js";

import { Cme } from "./chunk-a16yb89m.js";

import { ne, nt, KU, Vc } from "./chunk-5wbhf1bk.js";

import { Ct } from "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-07cck4g7.js";

import { dtn } from "./chunk-ajd6by9m.js";

import { _c } from "./chunk-vps0k559.js";

import { tme, Qa } from "./chunk-nc0jxmkt.js";

import { le } from "./chunk-cqgvwwgb.js";

import "./chunk-4dwgr3et.js";

import { wgt, As, ft } from "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import { rr, VXe, LC, So, Uee } from "./chunk-wptm3jf5.js";

import { p } from "./chunk-jkzenvsk.js";

import { nq, oM, fXe } from "./chunk-e2610wvk.js";

import { OC } from "./chunk-0481pkch.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import { kUe, yK } from "./chunk-6dgmzxjg.js";

import { d$ } from "./chunk-sa0qpffh.js";

import "./chunk-8v8fjzek.js";

import { o, oe, T, u, $e } from "./chunk-cvcg6n1z.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import { O } from "./chunk-1xnsr4dy.js";

import { X509Certificate as $t } from "crypto";

import { open as je } from "fs/promises";

var st = 200;

function R(e) {
  let t = ne(e, st);
  return Vc(t) + (t.length < e.length ? "\u2026" : "");
}

var me = 255, rt = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:[a-z]{1,63}|xn--[a-z0-9-]{1,59})$/, ot = [ rr, "githubusercontent.com", "ghcr.io", "github.dev", "githubpreview.dev", "github.io", "github.app", "githubapp.com", "githubassets.com", "githubcopilot.com" ], fe = "api";

function Q(e) {
  let t = e.toLowerCase();
  return t.length <= me && VXe.test(t) ? t : "that host";
}

function q(e) {
  let t = LC(e), s = Q(t), r = {
    refusal: `${s} is not a host this gh sends a request to: name a GitHub Enterprise host by its DNS name alone (no scheme, port, path or IP address).`
  };
  if (t.length > me || !rt.test(t) || t.endsWith(".localhost")) return r;
  let n = {
    refusal: `${s} is not a GitHub Enterprise host; ${rr} itself is named as ${rr}.`
  };
  if (t === kUe.slice(1) || ot.some(d => t === d || t.endsWith(`.${d}`)) || tme(t)) return n;
  let i, h;
  if (t.endsWith(kUe)) {
    let d = t.slice(0, -kUe.length).split("."), [l, y, ...g] = d, b = y === void 0 ? l : y;
    if (g.length > 0 || y !== void 0 && l !== fe) return n;
    let f = b + kUe;
    h = `${fe}.${f}`, i = {
      host: f,
      apiBase: `https://${h}`
    };
  } else h = t, i = {
    host: t,
    apiBase: Uee(t)
  };
  return URL.parse(i.apiBase)?.hostname === h ? i : r;
}

var c = "repos/{owner}/{repo}", ge = `gh api ${c}/issues/<number>/comments -f body='<text>'`, we = `gh api ${c}/issues/<number>/labels -f 'labels[]=<label>'  # add a label`, ye = "which are served from another host that this gh does not follow a redirect to", J = [ "Nothing to sign in to and no token to read: requests go through this session's GitHub proxy, which adds the credential.", "gh api user  # the account behind it, where the credential has one" ], K = "where this session's GitHub proxy refuses search/", k = `gh api '${c}/pulls?head={owner}:{branch}&state=all'  # <number> of the current branch's pull request (a fork's: its owner in place of {owner} before the colon)`, be = "git clone https://github.com/<owner>/<repo>.git", it = new Map([ [ "pr create", [ `gh api ${c}/pulls -f title='<title>' -f head='<branch>' -f base='<base branch>' -f body='<text>'  # a draft: add -F draft=true` ] ], [ "pr view", [ `gh api ${c}/pulls/<number>`, `gh api ${c}/pulls/<number>/ccr/review_threads  # its review threads`, `gh api ${c}/issues/<number>/comments  # its conversation comments`, k ] ], [ "pr list", [ `gh api '${c}/pulls?state=open&per_page=100'` ] ], [ "pr merge", [ `gh api -X PUT ${c}/pulls/<number>/merge -f merge_method=squash`, `gh api -X PUT ${c}/pulls/<number>/ccr/auto_merge -f merge_method=squash  # --auto; -X DELETE cancels it`, k ] ], [ "pr comment", [ ge, k ] ], [ "pr checks", [ `gh api ${c}/commits/<sha>/check-runs`, `gh api ${c}/pulls/<number>  # <sha> of a pull request: its head.sha`, k ] ], [ "pr ready", [ `gh api -X POST ${c}/pulls/<number>/ccr/ready_for_review`, `gh api -X POST ${c}/pulls/<number>/ccr/convert_to_draft  # --undo`, k ] ], [ "pr review", [ `gh api ${c}/pulls/<number>/reviews -f event=COMMENT -f body='<text>'  # or event=REQUEST_CHANGES`, k ] ], [ "pr diff", [ `gh api ${c}/pulls/<number> -H 'Accept: application/vnd.github.diff'`, `gh api ${c}/pulls/<number>/files  # one patch per file`, k ] ], [ "pr close", [ `gh api -X PATCH ${c}/pulls/<number> -f state=closed` ] ], [ "pr edit", [ `gh api -X PATCH ${c}/pulls/<number> -f title='<title>' -f body='<text>'`, we, k ] ], [ "pr checkout", [ "No `gh api` form: use git.", "git fetch origin refs/pull/<number>/head && git checkout FETCH_HEAD" ] ], [ "issue create", [ `gh api ${c}/issues -f title='<title>' -f body='<text>'` ] ], [ "issue view", [ `gh api ${c}/issues/<number>`, `gh api ${c}/issues/<number>/comments  # its comments` ] ], [ "issue list", [ `gh api '${c}/issues?state=open&per_page=100'  # pull requests are in the list too: each has a pull_request key` ] ], [ "issue comment", [ ge ] ], [ "issue close", [ `gh api -X PATCH ${c}/issues/<number> -f state=closed` ] ], [ "issue edit", [ `gh api -X PATCH ${c}/issues/<number> -f title='<title>' -f body='<text>'`, we ] ], [ "run list", [ `gh api '${c}/actions/runs?per_page=20'  # filters: branch=, event=, status=, head_sha=` ] ], [ "run view", [ `gh api ${c}/actions/runs/<run-id>`, `gh api ${c}/actions/runs/<run-id>/jobs  # its jobs and their steps`, `gh api ${c}/actions/jobs/<job-id>/logs  # --log: one job's log, where this session's GitHub proxy follows GitHub's redirect for it` ] ], [ "run rerun", [ `gh api -X POST ${c}/actions/runs/<run-id>/rerun-failed-jobs  # --failed`, `gh api -X POST ${c}/actions/runs/<run-id>/rerun  # every job` ] ], [ "run watch", [ "No `gh api` form: it polls. Poll the run yourself and read its status and conclusion:", `gh api ${c}/actions/runs/<run-id>` ] ], [ "run cancel", [ `gh api -X POST ${c}/actions/runs/<run-id>/cancel` ] ], [ "run download", [ `No \`gh api\` form for downloading artifacts, ${ye}. Listing them:`, `gh api ${c}/actions/runs/<run-id>/artifacts` ] ], [ "workflow list", [ `gh api ${c}/actions/workflows` ] ], [ "workflow view", [ `gh api ${c}/actions/workflows/<workflow>  # <workflow>: its file name (ci.yml) or its id`, `gh api ${c}/actions/workflows/<workflow>/runs  # its runs` ] ], [ "workflow run", [ `gh api -X POST ${c}/actions/workflows/<workflow>/dispatches -f ref=<branch>  # <workflow>: its file name (ci.yml) or its id; inputs: -f 'inputs[<name>]=<value>'` ] ], [ "release list", [ `gh api ${c}/releases` ] ], [ "release view", [ `gh api ${c}/releases/tags/<tag>`, `gh api ${c}/releases/latest  # the latest release` ] ], [ "release create", [ `gh api ${c}/releases -f tag_name=<tag> -f name='<title>' -f body='<text>'  # this session's GitHub proxy may refuse release writes`, "No `gh api` form for uploading its files, which go to another host." ] ], [ "release download", [ `No \`gh api\` form for downloading a release's files, ${ye}. Listing them (assets):`, `gh api ${c}/releases/tags/<tag>` ] ], [ "release upload", [ "No `gh api` form: a release's files are uploaded to another host, which this gh does not reach." ] ], [ "repo view", [ `gh api ${c}` ] ], [ "repo clone", [ "No `gh api` form: use git.", be ] ], [ "label list", [ `gh api ${c}/labels` ] ], [ "search issues", [ "gh api -X GET search/issues -f q='<terms> is:issue'", `gh api '${c}/issues?state=all&labels=<label>'  # ${K}: filter a list` ] ], [ "search prs", [ "gh api -X GET search/issues -f q='<terms> is:pr'", `gh api '${c}/pulls?state=all&per_page=100'  # ${K}: filter a list` ] ], [ "search code", [ "gh api -X GET search/code -f q='<terms> repo:<owner>/<repo>'", `Search a clone of the repository instead ${K}.` ] ], [ "search repos", [ "gh api -X GET search/repositories -f q='<terms>'" ] ], [ "auth status", J ], [ "auth login", J ], [ "auth token", J ] ]), at = new Map([ [ "new", "create" ], [ "ls", "list" ] ]), ht = /^(-R|--repo)(=|$)|^-R[^-]/, dt = /^https?:\/\/[^/]+\/[^/]+\/[^/]+/, ut = /^[^-/][^/]*(\/[^/]+){1,2}$/;

function Ee(e, t) {
  let [s, r] = e;
  if (s === void 0 || r === void 0) return;
  let n = `${s} ${at.get(r) ?? r}`, i = it.get(n);
  if (i === void 0) return;
  let h = t === yK ? "the repository's GitHub Enterprise host" : t.join(" or "), d = h !== "" ? i.map(g => g === be ? `git clone https://<host>/<owner>/<repo>.git  # <host>: github.com or ${h}` : g) : i, l = e.slice(2), y = d.some(g => g.includes("{owner}")) && (e.some(g => ht.test(g)) || l.some((g, b) => !(l[b - 1] ?? "").startsWith("-") && (dt.test(g) || s === "repo" && ut.test(g))));
  return `Instead of \`gh ${n}\`:\n${d.map(g => `  ${g}`).join(`\n`)}` + (y ? `\n  The command named a repository: write that repository in place of {owner}/{repo}.` + (h !== "" ? " If it is on another host, add --hostname <host>." : "") : "");
}

var Re = "GitHub GraphQL is not available through this session's GitHub proxy; use the REST API (gh api repos/{owner}/{repo}/...). For review threads, auto-merge and draft or ready, the proxy serves repos/{owner}/{repo}/pulls/<number>/ccr/review_threads, .../ccr/comments/<comment-id>/resolve, .../ccr/auto_merge, .../ccr/ready_for_review and .../ccr/convert_to_draft.", Te = "Claude Code's built-in GitHub client, not the GitHub CLI", Se = "no GitHub CLI was found on this machine when this session started";

function M(e) {
  let t = e === yK, s = t || e.length > 0;
  return `Usage: gh api <endpoint> [flags]\n\nThis gh is ${Te}:\n${Se}.\n${t ? `It makes GitHub REST API requests to ${rr}, or to the GitHub Enterprise\nhost of this checkout's remote (or --hostname <host>), through this session's\nGitHub proxy, which supplies the credential for the hosts and repositories this\nsession is connected to, and has no other gh command.` : `It makes GitHub REST API requests to ${[ rr, ...e ].join(", ")} through this session's GitHub\nproxy, already authenticated, and has no other gh command.`}\nA GitHub CLI installed during the session takes this one's place once it is on\nPATH. On a self-hosted runner that one has only the GitHub credentials the\nrunner's operator provides and does not go through this session's GitHub proxy.\n\nFlags:${s ? `\n      --hostname <host>     GitHub host of the request${t ? "" : ", as GH_HOST"} (default ${rr}, or the\n                            host of the repository that fills {owner}, {repo} in the endpoint)` : ""}\n  -X, --method <method>     HTTP method (default GET, or POST with parameters or --input)\n  -f, --raw-field key=value String parameter\n  -F, --field key=value     Typed parameter: true, false, null and integers become JSON\n                            values, {owner} {repo} {branch} are filled in, @file reads a\n                            file, @- reads standard input\n  -H, --header 'Name: v'    Request header\n      --input <file>        File to send as the request body (- for standard input)\n  -i, --include             Print the response status line and headers\n      --paginate            Follow the response's rel="next" links (GET only)\n  -q, --jq <expression>     Filter the response with jq (needs jq on PATH; without it, pipe the\n                            output to a JSON tool that is installed)\n      --silent              Do not print the response body\n\n{owner}, {repo} and {branch} (or :owner, :repo, :branch) in the endpoint and in\n-F values are filled in from GH_REPO, else from the ${s && !t ? "remotes on those hosts" : `${rr} remotes`} of the\ncurrent repository: upstream, github, origin, then the others by name.${t ? `\nA repository with no ${rr} remote is read for its other remotes the same\nway, and the remote chosen names the host the request goes to.\nGH_HOST and a host in GH_REPO pick no host other than ${rr} here: name one\nwith --hostname. A request to another host says so in one line on standard error.` : ""}\n\nExample: gh api repos/{owner}/{repo}/pulls -f title='Fix' -f head='my-branch' -f base='main'\n`;
}

var ct = ` The host came from GH_HOST: \`--hostname ${rr}\` names github.com for one command.`;

function Z(e) {
  return `${e} names a host other than ${rr}, and an environment variable is not used to pick a host in this session: ` + (e === "GH_HOST" ? `pass --hostname <host> on the command instead. For ${rr}, pass --hostname ${rr} or unset GH_HOST.` : "set GH_REPO=OWNER/REPO and pass --hostname <host> on the command instead.");
}

function I(e, t, s = !1) {
  return `${Q(e)} is not served here: this gh reaches ${[ rr, ...t ].join(" and ")} only, through this session's GitHub proxy. Which GitHub Enterprise Server hosts it reaches is fixed when the session starts, and nothing run in the session adds one` + (s ? `.${ct}` : ".");
}

var pt = {
  "-X": "--method",
  "-f": "--raw-field",
  "-F": "--field",
  "-H": "--header",
  "-q": "--jq",
  "-t": "--template",
  "-p": "--preview",
  "--method": "--method",
  "--raw-field": "--raw-field",
  "--field": "--field",
  "--header": "--header",
  "--jq": "--jq",
  "--input": "--input",
  "--hostname": "--hostname",
  "--template": "--template",
  "--preview": "--preview",
  "--cache": "--cache"
}, lt = {
  "-i": "--include",
  "-h": "--help",
  "--include": "--include",
  "--paginate": "--paginate",
  "--silent": "--silent",
  "--help": "--help",
  "--slurp": "--slurp",
  "--verbose": "--verbose"
}, mt = new Set([ "--template", "--preview", "--slurp", "--verbose" ]);

function He(e, t, s, r) {
  if (e[0] !== "api") return {
    kind: "refuse",
    message: `this gh is ${Te} (Claude Code ${r}): \`gh api <REST endpoint>\` works here, already authenticated through this session's GitHub proxy, and there is no other gh command (${Se}).\n` + (Ee(e, s) ?? "Example: gh api repos/{owner}/{repo}/pulls/123")
  };
  let n = {
    endpoint: "",
    host: void 0,
    method: void 0,
    rawFields: [],
    typedFields: [],
    headers: [],
    inputFile: void 0,
    jq: void 0,
    include: !1,
    paginate: !1,
    silent: !1
  }, i = [], h = t, d = !0, l = [];
  for (let b = 1; b < e.length; b++) {
    let f = e[b];
    if (f === "--") {
      i.push(...e.slice(b + 1));
      break;
    }
    if (!f.startsWith("-") || f === "-") {
      i.push(f);
      continue;
    }
    let P = f.startsWith("--"), F = P ? [ nt(f, "=") ] : Array.from(f.slice(1), A => `-${A}`);
    for (let [A, x] of F.entries()) {
      let j = lt[x], N = pt[x];
      if (j !== void 0) {
        if (!P || !/=(?:false|0)$/i.test(f)) l.push([ j, "" ]);
        continue;
      }
      if (N === void 0) return {
        kind: "refuse",
        message: `unknown ${P ? "flag" : "shorthand flag"}: ${R(x)}\n\n${M(s)}`
      };
      let U = (P ? f.includes("=") ? f.slice(x.length + 1) : void 0 : f.slice(A + 2).replace(/^=/, "") || void 0) ?? e[++b];
      if (U === void 0) return {
        kind: "refuse",
        message: `flag needs an argument: ${x}`
      };
      l.push([ N, U ]);
      break;
    }
  }
  for (let [b, f] of l) {
    if (mt.has(b)) return {
      kind: "refuse",
      message: `${b} is not supported by this built-in gh.\n\n${M(s)}`
    };
    switch (b) {
     case "--help":
      return {
        kind: "help"
      };

     case "--method":
      n.method = f;
      break;

     case "--raw-field":
      n.rawFields.push(f);
      break;

     case "--field":
      n.typedFields.push(f);
      break;

     case "--header":
      n.headers.push(f);
      break;

     case "--jq":
      n.jq = f;
      break;

     case "--input":
      n.inputFile = f;
      break;

     case "--hostname":
      h = f, d = !1;
      break;

     case "--include":
      n.include = !0;
      break;

     case "--paginate":
      n.paginate = !0;
      break;

     case "--silent":
      n.silent = !0;
      break;
    }
  }
  if (h !== void 0) {
    let b = LC(h);
    if (So(h)) n.host = rr; else if (s === yK && d) {
      if (h !== "" && !i[0]?.includes("://")) return {
        kind: "refuse",
        message: Z("GH_HOST")
      };
    } else if (s === yK) {
      let f = q(h);
      if ("refusal" in f) return {
        kind: "refuse",
        message: f.refusal
      };
      n.host = f.host;
    } else if (s.includes(b)) n.host = b; else return {
      kind: "refuse",
      message: I(h, s, d)
    };
  }
  let [y, ...g] = i;
  if (y === void 0 || g.length > 0) return {
    kind: "refuse",
    message: `accepts 1 arg(s), received ${i.length}\n\n${M(s)}`
  };
  if (y === "") return {
    kind: "refuse",
    message: "the endpoint is empty; give a REST path such as repos/{owner}/{repo}/pulls"
  };
  if (n.paginate && n.inputFile !== void 0) return {
    kind: "refuse",
    message: "the `--paginate` option is not supported with `--input`"
  };
  if (n.paginate && n.method !== void 0 && n.method.toUpperCase() !== "GET") return {
    kind: "refuse",
    message: "the `--paginate` option is not supported for non-GET requests"
  };
  if (n.silent && n.jq !== void 0) return {
    kind: "refuse",
    message: "only one of `--silent` or `--jq` may be used, since `--silent` prints no response body"
  };
  return n.endpoint = y, {
    kind: "api",
    options: n
  };
}

class G extends Error {}

async function Oe(e, t, s) {
  let r = new Map;
  for (let n of e) {
    let {keys: i, key: h, value: d} = _e(n);
    Ae(r, i, h, d);
  }
  for (let n of t) {
    let {keys: i, key: h, value: d} = _e(n);
    Ae(r, i, h, d === void 0 ? d : await s(d));
  }
  return r;
}

function te(e) {
  return Object.fromEntries([ ...e ].map(([t, s]) => [ t, Pe(s) ]));
}

function xe(e) {
  let t = [];
  for (let [s, r] of e) ee(t, s, r);
  return t;
}

function Pe(e) {
  if (e instanceof Map) return te(e);
  return Array.isArray(e) ? e.map(Pe) : e;
}

function ee(e, t, s) {
  if (s instanceof Map) for (let [r, n] of s) ee(e, `${t}[${r}]`, n); else if (Array.isArray(s)) for (let r of s) ee(e, `${t}[]`, r); else e.push([ t, s === null ? "" : String(s) ]);
}

function _e(e) {
  let t = [], s = 0, r = 0;
  for (let n = 0; n < e.length && r === 0; n++) {
    let i = e[n];
    if (i === "[") {
      if (s === 0) t.push(e.slice(0, n));
      s = n + 1;
    } else if (i === "]") t.push(e.slice(s, n)); else if (i === "=") {
      if (s === 0) t.push(e.slice(0, n));
      r = n + 1;
    }
  }
  if (t.length === 0 || t[0] === "") throw new G(`invalid key: "${R(e)}"`);
  if (r === 0) {
    if (t.at(-1) !== "") throw new G(`field "${R(e)}" requires a value separated by an '=' sign`);
    return {
      keys: t,
      key: e,
      value: void 0
    };
  }
  return {
    keys: t,
    key: e.slice(0, r - 1),
    value: e.slice(r)
  };
}

function Ae(e, t, s, r) {
  let n = e, i = !1, h = "";
  for (let l of t) {
    if (l === "") {
      i = !0;
      continue;
    }
    if (h !== "") n = gt(n, h, i ? l : void 0), i = !1;
    h = l;
  }
  let d = n.get(h);
  if (!i) {
    if (d !== void 0 || r === void 0) throw new G(d !== void 0 ? `unexpected override existing field under "${R(h)}"` : `field "${R(s)}" requires a value separated by an '=' sign`);
    n.set(h, r);
    return;
  }
  if (d !== void 0 && !Array.isArray(d)) throw new G(`expected array type under "${R(h)}"`);
  n.set(h, r === void 0 ? d ?? [] : [ ...d ?? [], r ]);
}

function gt(e, t, s) {
  let r = e.get(t), n = new Map;
  if (s === void 0) {
    if (r instanceof Map) return r;
    if (r !== void 0) throw new G(`expected map type under "${R(t)}"`);
    return e.set(t, n), n;
  }
  if (r !== void 0 && !Array.isArray(r)) throw new G(`expected array type under "${R(t)}"`);
  let i = r?.at(-1);
  if (i instanceof Map && !i.has(s)) return i;
  return e.set(t, [ ...r ?? [], n ]), n;
}

var wt = 1e4, se = /\{(owner|repo|branch)\}|:(owner|repo|branch)\b/g, Ge = [ "upstream", "github", "origin" ], yt = "^remote\\..+\\.(url|gh-resolved)$", ke = /^[^/]+\/[^/]+$/;

class H extends Error {}

function Fe(e) {
  return e.search(se) !== -1;
}

class re {
  cwd;
  ghRepo;
  ghRepoHost;
  ghesHosts;
  host;
  repository;
  branch;
  pathFrom;
  constructor(e, t, s, r) {
    this.cwd = e, this.ghRepo = t ?? "", this.ghRepoHost = s ?? rr, this.ghesHosts = r, 
    this.host = s;
  }
  pathFilledFromHost() {
    return this.pathFrom?.repository.host;
  }
  pathFilledFromRemote() {
    return this.pathFrom?.remote;
  }
  async fill(e, t) {
    let s = new Map;
    for (let [, r, n] of e.matchAll(se)) {
      let i = r ?? n ?? "";
      if (s.has(i)) continue;
      if (i === "branch") {
        let h = await (this.branch ??= this.findBranch());
        s.set(i, t ? h.split("/").map(encodeURIComponent).join("/") : h);
      } else {
        let h = await (this.repository ??= this.findRepository()), {owner: d, name: l} = h.repository, y = i === "owner" ? d : l;
        if (t && y.includes("/")) throw new H(`{${i}} would be more than one path segment here (this checkout's repository is a nested project path, not OWNER/REPO): spell the endpoint out`);
        if (s.set(i, y), t) this.pathFrom = h;
      }
    }
    return e.replace(se, (r, n, i) => s.get(n ?? i ?? "") ?? r);
  }
  async findRepository() {
    return this.ghesHosts === yK ? this.findOnAnyHost() : this.findOnServedHost(this.ghesHosts);
  }
  async remoteListing() {
    let e = [ "config", "-z", "--get-regexp", yt ];
    return await this.git(e) ?? "";
  }
  ghRepoRepository() {
    return OC(`https://${ke.test(this.ghRepo) ? `${this.ghRepoHost}/` : ""}${this.ghRepo}`);
  }
  async findOnServedHost(e) {
    let t, s = [ rr, ...e ], r = this.host === void 0 ? s : [ this.host ];
    if (this.ghRepo === "") {
      let n = await this.remoteListing();
      t = X(n, h => L(h, r));
      let i = ve(n).find(({repository: h}) => !L(h, s));
      if (!t && i && !bt(n, s)) throw new H(`{owner}/{repo} would be this checkout's repository, whose remote is on another host: ${I(i.repository.host, e)}`);
    } else {
      let n = this.ghRepoRepository();
      if (n && !L(n, s)) throw new H(I(n.host, e));
      let i = n && L(n, r);
      t = i ? {
        repository: i
      } : void 0;
    }
    if (!t) {
      let n = r.some(i => i !== rr);
      throw new H(`could not tell which ${r.join(" or ")} repository {owner}/{repo} is: set GH_REPO=${n ? "[HOST/]" : ""}OWNER/REPO or spell the repository out in the endpoint${r.length > 1 ? " and name its host with --hostname" : ""}`);
    }
    return t;
  }
  async findOnAnyHost() {
    let e = this.host, t;
    if (this.ghRepo === "") {
      let s = await this.remoteListing();
      t = X(s, n => L(n, [ e ?? rr ]));
      let r = t || e !== void 0 ? void 0 : X(s, n => n);
      if (r) {
        let n = q(r.repository.host);
        if ("refusal" in n) throw new H(`{owner}/{repo} would be the repository of ${ie(r.remote)}: ${n.refusal}`);
        t = {
          remote: r.remote,
          repository: {
            ...r.repository,
            host: n.host
          }
        };
      }
    } else {
      let s = this.ghRepoRepository();
      if (s && !ke.test(this.ghRepo) && !So(s.host)) throw new H(Z("GH_REPO"));
      let r = s && L(s, [ e ?? rr ]);
      t = r ? {
        repository: r
      } : void 0;
    }
    if (!t) throw new H(`could not tell which ${e === void 0 ? "" : `${e} `}repository {owner}/{repo} is: set GH_REPO=OWNER/REPO or spell the repository out in the endpoint${e === void 0 ? " and name its host with --hostname" : ""}`);
    return t;
  }
  async findBranch() {
    let e = await this.git([ "symbolic-ref", "--quiet", "--short", "HEAD" ]);
    if (e === void 0) throw new H("could not tell the current branch for {branch}: spell the branch out");
    return e;
  }
  async git(e) {
    let t = await ft("git", [ ...wgt, ...e ], {
      cwd: this.cwd,
      env: As(),
      timeout: wt,
      preserveOutputOnError: !1
    });
    return t.code === 0 && t.stdout.trim() !== "" ? t.stdout.trim() : void 0;
  }
}

function L(e, t) {
  let s = So(e.host) ? rr : LC(e.host);
  return t.includes(s) ? {
    ...e,
    host: s
  } : void 0;
}

function bt(e, t) {
  return X(e, s => L(s, t))?.repository;
}

function X(e, t) {
  let s = [];
  for (let {name: n, marked: i, repository: h} of ve(e)) {
    let d = t(h);
    if (!d) continue;
    let l = Ge.indexOf(n);
    s.push({
      name: n,
      rank: i ? -1 : l === -1 ? Ge.length : l,
      repository: d
    });
  }
  s.sort((n, i) => n.rank - i.rank || (n.name < i.name ? -1 : n.name > i.name ? 1 : 0));
  let [r] = s;
  return r && {
    repository: r.repository,
    remote: r.name
  };
}

function ie(e) {
  return e !== void 0 && /^[A-Za-z0-9._-]{1,64}$/.test(e) ? `this checkout's remote ${e}` : "one of this checkout's remotes";
}

function ve(e) {
  let t = new Map;
  for (let s of e.split("\0")) {
    let [r = "", n] = s.split(`\n`, 2), i = /^remote\.(.+)\.(url|gh-resolved)$/.exec(r);
    if (n === void 0 || i === null) continue;
    let [, h = "", d] = i, l = t.get(h) ?? {
      marked: !1
    };
    if (d === "url") l.url ??= n; else if (n === "base") l.marked = !0;
    t.set(h, l);
  }
  return [ ...t ].flatMap(([s, {url: r, marked: n}]) => {
    let i = r === void 0 ? null : OC(r);
    return i ? [ {
      name: s,
      marked: n,
      repository: i
    } ] : [];
  });
}

var Ce = 4, Et = new Set([ "api", "v3", "uploads" ]);

function Le(e, t) {
  let s = e;
  for (let n = 0; ;n++) {
    let i = s.replace(/%([0-9a-f]{2})/gi, (h, d) => String.fromCharCode(Number.parseInt(d, 16)));
    if (i === s) break;
    if (n === Ce) return `the path is percent-encoded more than ${Ce} times over; spell it plainly`;
    s = i;
  }
  let r = 0;
  for (let n of s.toLowerCase().replaceAll("\\", "/").split("/")) {
    let i = nt(n, ";");
    if (i === "..") {
      if (t) return "the path holds a `..` segment (percent-encoded, or with `;` parameters); spell it plainly";
      r = 0;
    } else if (r === 0 && /^graphql(?![a-z0-9_-])/.test(i)) return Re; else if (i !== "" && i !== "." && !Et.has(i)) r++;
  }
  return /[\0-\x1f\x7f]/.test(s) ? "the path contains an encoded control character" : void 0;
}

var D = 26214400, Xe = 104857600, Rt = 8388608, Tt = 1048576, Ne = 3e5, Ue = 5, St = 141, Ht = 255, _t = new Set([ 301, 302, 303, 307, 308 ]), At = "2022-11-28", Ot = 120, xt = /\/(?:repos\/[^/]+\/[^/]+|repositories\/\d+)\/actions\//, Be = `This session's GitHub proxy may have no GitHub Enterprise connection for that host, or it may not be a GitHub Enterprise host; nothing run in the session adds a connection. For ${rr}, add --hostname ${rr}.`, ze = "the endpoint is not a valid URL path", Pt = 91, Gt = 93, kt = new Set([ 32, 9, 10, 13 ]), qe = new Set([ "accept", "accept-language", "content-type", "if-match", "if-modified-since", "if-none-match", "time-zone", "x-github-api-version", "x-github-next-global-id" ]), Ft = p(() => u({
  message: o().optional().catch(void 0),
  errors: $e([ o(), T(oe()) ]).optional().catch(void 0)
})), vt = p(() => u({
  message: o()
}));

class m extends Error {}

class he extends Error {}

async function Lt(e, t) {
  let s = t.ghesHosts === yK ? t.ghesHosts : t.ghesHosts.filter(n => !n.endsWith(kUe) && URL.parse(Uee(n))?.hostname === n), r = He(e, t.ghHost, s, {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION);
  try {
    switch (r.kind) {
     case "help":
      return await t.write("stdout", M(s)), 0;

     case "refuse":
      return await t.write("stderr", `gh: ${r.message}\n`), 1;

     case "api":
      return await qt(r.options, t, s);
    }
  } catch (n) {
    if (n instanceof he) return St;
    return await t.write("stderr", `gh: ${et(n, t.proxyUrl)}\n`), 1;
  }
}

async function Qn({port: e, caBundlePath: t, ghesHosts: s, ghArgs: r}) {
  let n = Nt;
  Cme(process.stdout), Cme(process.stderr);
  let i = 1, h;
  try {
    await using d = await je(t, "r");
    h = (await pL(d, Rt)).toString("utf8");
  } catch (d) {
    await n("stderr", `gh: ${We(E(d) ?? "unreadable")}\n`);
  }
  if (h !== void 0) i = await Lt(r, {
    proxyUrl: `http://127.0.0.1:${e}`,
    ca: h,
    cwd: le(),
    path: a.PATH ?? "",
    ghHost: a.GH_HOST,
    ghRepo: a.GH_REPO,
    ghesHosts: s,
    get stdin() {
      return process.stdin;
    },
    write: n
  });
  dtn(i);
}

async function Nt(e, t) {
  if (!await Ut(process[e], t) && e === "stdout") throw new he;
}

function Ut(e, t) {
  if (e.destroyed || e.writableEnded) return Promise.resolve(!1);
  let {promise: s, resolve: r} = Promise.withResolvers(), n = () => r(!1);
  return e.once("error", n), e.once("close", n), e.write(t, i => r(!i)), s.finally(() => {
    e.off("error", n), e.off("close", n);
  });
}

function We(e) {
  return `could not read this session's GitHub proxy CA bundle (${e}).`;
}

function Bt(e, t) {
  return [ ...t === "windows" ? [ "--binary" ] : [], "-r", "-c", ` ${e}` ];
}

async function qt(e, t, s) {
  if (Ct()) throw new m("the built-in gh api is off in this session: nonessential network traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC)");
  let r = t.apiOrigin ?? Uee(rr), n = Ie(e.endpoint, r, s), i = new re(t.cwd, t.ghRepo, n?.host ?? e.host, s), h = await Oe(e.rawFields, e.typedFields, async w => {
    if (w.startsWith("@")) return (await De(w.slice(1), t)).toString("utf8");
    if (/^[+-]?\d+$/.test(w) && Number.isSafeInteger(Number(w))) return Number(w);
    switch (w) {
     case "true":
      return !0;

     case "false":
      return !1;

     case "null":
      return null;

     default:
      return i.fill(w, !1);
    }
  }), d = e.inputFile !== void 0, l = (e.method ?? (h.size > 0 || d ? "POST" : "GET")).toUpperCase();
  if (e.paginate && l !== "GET") throw new m("the `--paginate` option is not supported for non-GET requests; with fields the method is POST unless `-X GET` sends them as query parameters");
  let y = await i.fill(e.endpoint, !0), g = Ie(y, r, s);
  if (g?.host !== n?.host || g?.apiBase !== n?.apiBase) throw new m("filling in {owner}, {repo} or {branch} would change the host of the endpoint: spell the endpoint out");
  let b = g?.host ?? e.host ?? i.pathFilledFromHost(), {host: f, apiBase: P} = g ?? Ve(b ?? rr, r, s), F;
  if (f !== rr && s === yK) {
    let w = g !== void 0 ? "the host in the endpoint URL" : e.host !== void 0 ? "the host --hostname names" : `the host of ${ie(i.pathFilledFromRemote())}`;
    F = `${f}, not ${rr}: ${w}.`;
  }
  let A = Me(y, P), x;
  if (l === "GET" || d) {
    for (let [w, B] of xe(h)) A.searchParams.append(w, B);
    if (e.inputFile !== void 0) x = await De(e.inputFile, t);
  } else if (h.size > 0) x = Buffer.from(_(te(h)), "utf8");
  if (e.paginate && !A.searchParams.has("per_page")) A.searchParams.set("per_page", "100");
  let j = Xt(e.headers, x !== void 0), N = e.jq === void 0 ? void 0 : bme("jq", t.path);
  if (N === null) throw new m("--jq needs jq, which is not installed on this machine (not found on PATH): run the command without --jq and pipe the output to a JSON tool that is installed.");
  try {
    new $t(t.ca);
  } catch {
    throw new m(We("no certificate in it"));
  }
  let z = {
    ca: t.ca,
    rejectUnauthorized: !0
  }, U = new fXe(t.proxyUrl, z);
  U.options = {
    ...U.options,
    ...z
  };
  let tt = {
    httpsAgent: U,
    proxy: !1,
    responseType: "arraybuffer",
    validateStatus: () => !0,
    maxRedirects: 0,
    maxContentLength: Xe,
    maxBodyLength: D,
    timeout: Ne
  }, de = F !== void 0, ue = {
    answered: !1
  }, W = !1, ce = !1;
  for (;;) {
    let w;
    try {
      w = await Mt({
        method: l,
        url: A,
        body: x,
        headers: j
      }, tt, P, ue);
    } catch (S) {
      let C = de && ae(F, ue.answered, Ye(oM(S)?.connectStatus));
      if (!C) throw S;
      return await t.write("stderr", `gh: ${et(S, t.proxyUrl)}\n${C}`), 1;
    }
    let B = w.status > 299, V = F;
    if (F = void 0, V !== void 0 && !B) await t.write("stderr", ae(V, !0, !1));
    let pe = e.paginate ? /<([^>]+)>;\s*rel="next"/.exec(String(w.headers.link ?? ""))?.[1] : void 0;
    if (e.include) await t.write("stdout", zt(w));
    let v = w.data;
    if (v.length > 0 && !e.silent) if (N !== void 0 && e.jq !== void 0 && !B) {
      let S = await ft(N, Bt(e.jq, O()), {
        cwd: t.cwd,
        input: v,
        timeout: Ne,
        stripFinalNewline: !1,
        preserveOutputOnError: !0
      });
      if (await t.write("stdout", S.stdout), S.code !== 0) return await t.write("stderr", KU(S.stderr)), 
      1;
    } else if (e.paginate && !e.include && !B && /[/+]json(;|$)/.test(String(w.headers["content-type"] ?? "")) && v[0] === Pt && v.at(-1) === Gt) {
      let S = v.subarray(1, -1);
      if (!W) await t.write("stdout", "["), W = !0;
      if (S.some(C => !kt.has(C))) {
        if (ce) await t.write("stdout", ",");
        await t.write("stdout", S), ce = !0;
      }
    } else await t.write("stdout", v);
    if (B) {
      await t.write("stderr", `gh: ${KU(Wt(w.status, v))}\n`);
      let S = [ 401, 403, 404 ].includes(w.status), C = de && ae(V, !0, S || w.headers["x-proxy-error"] !== void 0);
      if (C) await t.write("stderr", C); else if (s !== yK && b === void 0 && s.length > 0 && S) await t.write("stderr", `this request went to ${rr}; for a repository on ${s.join(" or ")}, add --hostname <host> or write the endpoint as repos/{owner}/{repo}/...\n`);
      return 1;
    }
    if (pe === void 0) {
      if (W) await t.write("stdout", "]");
      return 0;
    }
    A = It(Me(pe, P), A, P);
  }
}

function ae(e, t, s) {
  if (e === void 0) return s ? `${Be}\n` : "";
  return `this request ${t ? "went to" : "was for"} ${e}${s ? ` ${Be}` : ""}\n`;
}

function It(e, t, s) {
  let r = new URL(s).pathname.replace(/\/$/, ""), n = /^\/repositories\/\d+(\/.*?)?\/?$/.exec(e.pathname.slice(r.length)), i = /^\/repos\/[^/]+\/[^/]+(\/.*?)?\/?$/.exec(t.pathname.slice(r.length));
  if (n === null || i === null || n[1] !== i[1]) return e;
  let h = new URL(t);
  return h.search = e.search, h;
}

async function Mt(e, t, s, r) {
  let n = e;
  for (let i = 0; ;i++) {
    let h = await Dt(n, t);
    r.answered = !0;
    let d = h.headers.location;
    if (!_t.has(h.status) || typeof d !== "string" || d === "") return h;
    if (i === Ue) throw new m(`stopped after ${Ue} redirects`);
    let l = jt(d, n.url, s);
    n = h.status === 307 || h.status === 308 ? {
      ...n,
      url: l
    } : {
      method: n.method === "HEAD" ? "HEAD" : "GET",
      url: l,
      body: void 0,
      headers: {
        ...n.headers,
        "content-type": !1
      }
    };
  }
}

function Dt({method: e, url: t, body: s, headers: r}, n) {
  let i = {
    ...n,
    headers: r
  };
  switch (e) {
   case "GET":
    return Qa.get(t.href, {
      ...i,
      data: s
    });

   case "HEAD":
    return Qa.head(t.href, i);

   case "POST":
    return Qa.post(t.href, s ?? Buffer.alloc(0), i);

   case "PUT":
    return Qa.put(t.href, s ?? Buffer.alloc(0), i);

   case "PATCH":
    return Qa.patch(t.href, s ?? Buffer.alloc(0), i);

   case "DELETE":
    return Qa.delete(t.href, {
      ...i,
      data: s
    });

   default:
    throw new m("unsupported method; use GET, HEAD, POST, PUT, PATCH or DELETE");
  }
}

function Ve(e, t, s) {
  if (e === rr) return {
    host: e,
    apiBase: t
  };
  if (s !== yK) return {
    host: e,
    apiBase: Uee(e)
  };
  let r = q(e);
  if ("refusal" in r) throw new m(r.refusal);
  return r;
}

function Ie(e, t, s) {
  let r = e.indexOf("://");
  if (r === -1) return;
  Qe(e);
  let n = e.slice(r + 3).search(/[/?#]/), i = n === -1 ? e : e.slice(0, r + 3 + n);
  if (!/[/?#]/.test(e.slice(0, r)) && Fe(i)) throw new m("{owner}, {repo} and {branch} are filled in only in the path and query of an endpoint: this one is a URL with a placeholder before its path");
  let h = URL.parse(e);
  if (!h) throw new m(ze);
  let d = s !== yK && s.includes(h.hostname), l = h.protocol === "https:" && h.hostname !== new URL(t).hostname && !So(h.hostname);
  if (l && !d && s !== yK) throw new m(I(h.hostname, s));
  let y = Ve(d || l ? h.hostname : rr, t, s);
  if (!Ke(h, new URL(y.apiBase))) throw new m(Je(y.apiBase));
  return y;
}

function Ye(e) {
  return e !== void 0 && e >= 400 && e < 500 && e !== 408 && e !== 429;
}

function Me(e, t) {
  Qe(e);
  let s;
  try {
    if (e.includes("://")) s = new URL(e); else {
      let r = new URL(t).pathname.replace(/^\/|\/$/g, ""), n = e.replace(/^\//, ""), i = r !== "" && `${n.toLowerCase()}/`.startsWith(`${r.toLowerCase()}/`);
      s = new URL(i ? n.slice(r.length).replace(/^\//, "") : n, `${t}/`);
    }
  } catch {
    throw new m(ze);
  }
  return Ze(s, t, Je(t));
}

function Qe(e) {
  if (/[\p{Cc}\\]|(?! )\s/u.test(e)) throw new m("the endpoint contains a tab, a line break, a control character or a backslash");
}

function Je(e) {
  return `this gh sends requests to ${e.replace("https://", "")} only; give a REST path such as repos/{owner}/{repo}/pulls`;
}

function jt(e, t, s) {
  let r;
  try {
    r = new URL(e, t);
  } catch {
    throw new m("refusing a redirect whose Location is not a URL");
  }
  let n = r.host === "" || r.host.length > Ht ? "another host" : `${r.protocol}//${r.host}`, i = r.username === "" && r.password === "" ? "" : " with a username or password in its URL", h = new URL(s);
  return Ze(r, s, `refusing a redirect to ${n}${i}: this gh sends requests to ${s} only, and running the command again or with other flags will not change that.` + (r.hostname !== "" && r.hostname !== h.hostname ? " GitHub serves logs, archives, artifacts and release files from other hosts, which this built-in gh does not contact." : "") + (xt.test(t.pathname) ? " For a failed CI job read repos/{owner}/{repo}/actions/runs/<run-id>/jobs (its steps) and repos/{owner}/{repo}/check-runs/<check-run-id>/annotations." : ""));
}

function Ke(e, t) {
  return e.protocol === t.protocol && e.host === t.host && e.username === "" && e.password === "";
}

function Ze(e, t, s) {
  let r = new URL(t);
  if (!Ke(e, r)) throw new m(s);
  let n = Le(e.pathname, r.pathname !== "/");
  if (n !== void 0) throw new m(n);
  if (r.pathname !== "/" && !e.pathname.startsWith(`${r.pathname}/`)) throw new m(s);
  return e.hash = "", e;
}

function Xt(e, t) {
  let s = {
    accept: "*/*",
    "x-github-api-version": At,
    "content-type": t && "application/json; charset=utf-8"
  };
  for (let r of e) {
    let n = r.indexOf(":");
    if (n === -1) throw new m(`header "${R(r)}" requires a value separated by ':'`);
    let i = r.slice(0, n).trim().toLowerCase(), h = r.slice(n + 1).trim();
    if (!qe.has(i)) throw new m(`the ${/^[a-z0-9-]+$/.test(i) ? `${i} ` : ""}header cannot be set through this session's GitHub proxy; headers that can: ${[ ...qe ].join(", ")}`);
    if (/[^\P{Cc}\t]/u.test(h)) throw new m(`the ${i} header value contains a control character`);
    s[i] = h;
  }
  return {
    ...s,
    authorization: `token ${d$}`,
    "user-agent": `claude-code-gh-standin/${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION}`
  };
}

async function De(e, t) {
  let s = new m(`${e === "-" ? "standard input" : R(e)} is larger than ${D / 1048576} MB, the most this gh sends`);
  if (e === "-") {
    let n = [], i = 0;
    for await (let h of t.stdin) {
      let d = Buffer.from(h);
      if (i += d.length, i > D) throw s;
      n.push(d);
    }
    return Buffer.concat(n);
  }
  let r;
  try {
    await using n = await je(e, "r");
    r = await pL(n, D + 1);
  } catch (n) {
    throw new m(`could not read ${R(e)} (${E(n) ?? "unreadable"})`);
  }
  if (r.length > D) throw s;
  return r;
}

function zt(e) {
  let t = [ `HTTP/1.1 ${e.status} ${e.statusText}`.trimEnd() ];
  for (let [s, r] of Object.entries(e.headers).sort(([n], [i]) => n < i ? -1 : n > i ? 1 : 0)) {
    let n = s.replace(/(^|-)([a-z])/g, (i, h, d) => `${h}${d.toUpperCase()}`);
    for (let i of Array.isArray(r) ? r : [ r ]) t.push(`${n}: ${String(i)}`);
  }
  return `${t.join(`\r\n`)}\r\n\r\n`;
}

function Wt(e, t) {
  let s;
  try {
    s = t.length <= Tt ? Y(t.toString("utf8")) : void 0;
  } catch {
    s = void 0;
  }
  let r = Ft().safeParse(s);
  if (!r.success) return `HTTP ${e}`;
  let {message: n, errors: i} = r.data;
  if (typeof i === "string" && i !== "") return n ? `${i} (${n})` : i;
  if (n) return `${n} (HTTP ${e})`;
  let h = [];
  for (let d of Array.isArray(i) ? i : []) {
    let l = vt().safeParse(d);
    if (typeof d === "string") h.push(d); else if (l.success) h.push(l.data.message);
  }
  return h.length > 0 ? h.join(`\n`) : `HTTP ${e}`;
}

function et(e, t) {
  if (e instanceof m || e instanceof G || e instanceof H) return e.message;
  let s = oM(e);
  if (s !== void 0) {
    let n = s.connectStatus, i = nq(n);
    if (Ye(n)) return `this session's GitHub proxy refused the connection (${i}); do not retry unchanged`;
    let h = String(s.headers["retry-after"] ?? ""), d = /^\d{1,3}$/.test(h) ? Number(h) : 0, l = d > 1 && d <= Ot ? `${d} seconds` : "a few seconds";
    return `this session's GitHub proxy could not open the connection (${i}); nothing was sent. This can be temporary: wait ${l} and run the command once more. If it fails again, stop and read GET ${t}/__agentproxy/status for the proxy's state.`;
  }
  if (_c(e) && e.message.includes("maxContentLength")) return `the response is larger than ${Xe / 1048576} MB, the most this gh reads; ask for less (per_page, a narrower endpoint)`;
  if (_c(e) && e.message.includes("maxBodyLength")) return "the request body is too large";
  let r = _c(e) ? e.code : E(e);
  return `could not reach GitHub through this session's GitHub proxy${r === void 0 ? "" : ` (${r})`}`;
}

export { Qn as ghStandinMain };
