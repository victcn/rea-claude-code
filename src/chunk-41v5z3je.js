// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rr } from "./chunk-wptm3jf5.js";

async function Ekr(s) {
  let {isNestedGitLabProject: e, parseGitRemote: t, parseGitHubRepository: u} = await import("./chunk-156b7t87.js"), r = t(s);
  if (r) return e(r) ? null : r;
  let i = u(s);
  if (i) {
    let [o, n] = i.split("/");
    if (o && n) return {
      host: rr,
      owner: o,
      name: n
    };
  }
  return null;
}

async function eSo(s, e, t) {
  let u = {
    revisionGuessUsed: !1
  };
  if (!s) return {
    sources: [],
    outcomes: [],
    report: u
  };
  let {getDefaultBranch: r} = await import("./chunk-fn4yt14f.js");
  if (e === "HEAD") e = "";
  let i = !1, o = e || t || void 0;
  if (!o) o = await r() || void 0, i = o !== void 0;
  let n = e && t && e !== t ? [ e ] : [], c, a;
  if (e && n.length === 0) c = t ? "is_default" : "no_evidence", a = t ? `[bridge] requested branch '${e}' is the default branch \u2014 ` + "omitted from outcomes.branches (the runner stays on the clone)" : "[bridge] no session-anchored default-branch evidence \u2014 " + `omitting requested branch '${e}' from outcomes.branches; the remote session will work on a generated branch instead. Run 'git remote set-head origin -a' in the repo (or supply defaultBranch via the SDK) to restore branch continuity.`;
  let g = {
    branchDropped: c,
    revisionGuessUsed: i,
    warnMessage: a
  }, l = (y, d, m) => ({
    report: g,
    sources: [ {
      type: "git_repository",
      url: `https://${y}/${d}/${m}`,
      revision: o
    } ],
    outcomes: [ {
      type: "git_repository",
      git_info: {
        type: "github",
        repo: `${d}/${m}`,
        branches: n
      }
    } ]
  }), p = await Ekr(s);
  if (p) return l(p.host, p.owner, p.name);
  return {
    sources: [],
    outcomes: [],
    report: u
  };
}

export { Ekr, eSo };
