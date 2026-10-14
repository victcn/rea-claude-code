// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { un } from "./chunk-y752zmas.js";

import { Bwe, nc, $a, VS, Sp, Vwe, J3e, vt, e8e } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { Ct } from "./chunk-6ah1819r.js";

import { hu } from "./chunk-5brm0azz.js";

import { Tv, Oe } from "./chunk-cjt10y7b.js";

import { e9e } from "./chunk-qqd24q2y.js";

import { KH } from "./chunk-46phtgr7.js";

import { Ixr, k2n } from "./chunk-f1zpf9me.js";

import { sHt, Pse, t9, on, Ise, Sf, sp, _Ue } from "./chunk-b47tzzqx.js";

import { bIt } from "./chunk-rshryz75.js";

import { pSo } from "./chunk-4dpx2qvt.js";

var Lce = {
  policy: "allow_remote_sessions"
}, d = "Cloud sessions use your claude.ai login.", m = {
  ANTHROPIC_API_KEY: {
    noun: "key",
    fetchedTheLoadedAnswer: () => pSo()
  },
  ANTHROPIC_AUTH_TOKEN: {
    noun: "token",
    fetchedTheLoadedAnswer: () => sHt() === !0
  }
};

function mbe() {
  let o = Oe();
  if (o !== "firstParty") return `Cloud sessions aren't available with ${Tv[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  let {policy: e} = Lce, {featureLabel: i, verb: u} = t9(e), s = Sf(e, i, u);
  if (s === null) return null;
  let l = sp(e);
  if (l === "org_denied") {
    let n = Ise() && KH().length === 0 ? p() : null;
    if (n === null) return s;
    let c = `${i} ${u} ${k2n([])}.`;
    if (n === "apiKeyHelper") return c;
    let {noun: f, fetchedTheLoadedAnswer: h} = m[n];
    if (!h()) return s;
    return `${c} This session is using ${n}, so Claude Code checked the policy for the organization that ${f} belongs to. ${d}`;
  }
  let t = Pse();
  if (l !== "cache_miss" || t === null || t.success || t.retrying || t.httpStatus === 404) return s;
  let r = Ixr(i, u, t);
  if (t.errorCode !== "auth_failed" || t.httpStatus === 403 || _Ue(e)) return r;
  if (p() !== null) {
    let n = bIt({
      prefix: d,
      suffix: "to use cloud sessions."
    });
    return `${r} ${n}`;
  }
  if (t.httpStatus === 401 && !Bwe() && vt() && $a().source === "claude.ai" && Vwe() === null) return `${r} Run \`claude auth login\` (or /login in a local session), then try again.`;
  if (!VS() && nc() && t.httpStatus === null && e9e() && J3e() && !Le(!1)) return `${r} Cloud sessions need a claude.ai sign-in. Run \`claude auth login\` (or /login in a local session), then try again.`;
  return r;
}

function dps() {
  return sp(Lce.policy) === "org_denied";
}

function p() {
  if (a.ANTHROPIC_UNIX_SOCKET || Le(!1) || !e8e() || vt()) return null;
  let {key: o, source: e} = Sp();
  if (e === "ANTHROPIC_API_KEY") return o === a.ANTHROPIC_API_KEY ? e : null;
  if (e === "apiKeyHelper") return e;
  return $a().source === "ANTHROPIC_AUTH_TOKEN" ? "ANTHROPIC_AUTH_TOKEN" : null;
}

function JCe() {
  return !Ct() && on("allow_remote_sessions") && on("allow_quick_web_setup");
}

function Nce() {
  return !hu() && JCe();
}

function Cit() {
  return `${un().CLAUDE_AI_ORIGIN}/connect-github`;
}

function $4e(o = "this repository") {
  let e = Cit(), i = Nce() ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}` : `Connect it on the web at ${e}`;
  return `GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${i}`;
}

var y = {
  type: "local-jsx",
  name: "web-setup",
  description: "Set up cloud sessions with your GitHub account",
  availability: [ "claude-ai" ],
  isEnabled: JCe,
  policyGate: Lce,
  get isHidden() {
    return !on("allow_remote_sessions") || !on("allow_quick_web_setup");
  }
}, Q5s = y;

export { Lce, mbe, dps, JCe, Nce, Cit, $4e, Q5s };
