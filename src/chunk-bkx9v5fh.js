// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, Me } from "./chunk-2v9tfgc3.js";

import { Hv, yEe, zn, K, $$t, qU, ps, Ze, ke, Uje, ZS } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { Ye, x, l } from "./chunk-b0z4bv3v.js";

import { Un, ul, kT } from "./chunk-ddr690nj.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { bme, tJe, gHo, a } from "./chunk-j016gcgm.js";

import { Oy, _, Y, se, b_, j4n, hJe, t } from "./chunk-kawq2919.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { Xl } from "./chunk-r2h53bm2.js";

import { Dt, Bl, le } from "./chunk-cqgvwwgb.js";

import { qqn } from "./chunk-r276nwd3.js";

import { Vp, sMo, iMo, lMo, pr, Cb, zNt, hMo, Lt, V5, zc, rx } from "./chunk-9yajep3y.js";

import { ao } from "./chunk-w0q7jqcp.js";

import { xn, Rb, As, aje, Lee, _A, Aj, fln, OXe, DMo, jqn, it, ft } from "./chunk-zscnwzv2.js";

import { Ac, Fi, Mpe } from "./chunk-8drhysk2.js";

import { aPe, a9, Xm, mk, Mz } from "./chunk-9wtp3skp.js";

import { pSe, fSe, AY, lSs, hSr, Lfo, Nfo, $fo, e7t, ySr, v$n, Olt } from "./chunk-rh1cb6gh.js";

import { Yut, nzn, Vn, j1, rzn, qvo, ui, OPs, ya, k } from "./chunk-xywp7esx.js";

import { WR } from "./chunk-s2t7g8m9.js";

import { gs } from "./chunk-qqd24q2y.js";

import { bl } from "./chunk-znhtg8e4.js";

import { Vve, MOo } from "./chunk-0481pkch.js";

import { pz } from "./chunk-4v78v8fd.js";

import { jmo } from "./chunk-5sbf9djq.js";

import { Nit, xao } from "./chunk-xb4716r9.js";

import { qs } from "./chunk-05wvva46.js";

import { $Ce, JB, lbe } from "./chunk-w21nffj3.js";

import { zRt } from "./chunk-yjcwq33n.js";

import { Is } from "./chunk-p35rdtee.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var A8t = {};

Nr(A8t, {
  FALLBACK_RENDER_SITE: () => Re,
  activeModNames: () => KCt,
  changed: () => J,
  copyInterface: () => j,
  copyPlugin: () => z,
  default: () => A8t,
  devtoolsEvents: () => Et,
  devtoolsHooks: () => Ee,
  devtoolsInterfaces: () => xt,
  devtoolsRenderSites: () => vt,
  failed: () => X,
  hooksOn: () => qCt,
  latest: () => qqe,
  loadedArgsOf: () => JB,
  loadedModuleNamed: () => $Ce,
  publishHookFailure: () => Yqe,
  publishInterfaces: () => Fds,
  publishRegistry: () => Uds,
  publishRenderSites: () => Bds,
  snapshots: () => Q,
  subscribeHookFailures: () => jds,
  subscribeRegistry: () => T8t
});

function pt(e, n, r, o) {
  var s = -1, i = e == null ? 0 : e.length;
  while (++s < i) {
    var u = e[s];
    n(o, u, r(u), e);
  }
  return o;
}

var be = pt;

function mt(e, n) {
  return function(r, o) {
    if (r == null) return r;
    if (!yEe(r)) return e(r, o);
    var s = r.length, i = n ? s : -1, u = Object(r);
    while (n ? i-- : ++i < s) if (o(u[i], i, u) === !1) break;
    return r;
  };
}

var _e = mt;

var gt = _e($$t), Xfr = gt;

function ht(e, n, r, o) {
  return Xfr(e, function(s, i, u) {
    n(o, s, r(s), u);
  }), o;
}

var we = ht;

function St(e, n) {
  return function(r, o) {
    var s = Hv(r) ? be : we, i = n ? n() : {};
    return s(r, e, qU(o, 2), i);
  };
}

var Jfr = St;

var yt = Jfr(function(e, n, r) {
  e[r ? 0 : 1].push(n);
}, function() {
  return [ [], [] ];
}), qk = yt;

var KCt = e => e.filter(n => !Xm(n.args.pluginStorageId)).map(n => n.name);

var J = Me();

var X = Me();

var Re = {
  event: "ui.render",
  component: "AskUserQuestion",
  drawnBy: "AskUserQuestionPermissionDialog"
};

function Q() {
  let e = [], n = [ Re ], r = [];
  return {
    plugins: () => e,
    setPlugins: o => {
      e = o;
    },
    renderSites: () => n,
    setRenderSites: o => {
      n = o;
    },
    interfaces: () => r,
    setInterfaces: o => {
      r = o;
    }
  };
}

var qqe = Q();

var Yqe = X.emit;

function j(e) {
  return e.owner === void 0 ? {
    name: e.name,
    methods: [ ...e.methods ],
    suppressedBy: e.suppressedBy
  } : {
    name: e.name,
    methods: [ ...e.methods ],
    owner: e.owner
  };
}

var z = e => ({
  name: e.name,
  events: [ ...e.events ],
  calls: [ ...e.calls ],
  tier: e.tier,
  generation: e.generation
});

var qCt = e => qqe.plugins().flatMap(n => {
  let r = n.events.find(o => a9(o, e));
  if (r === void 0) return [];
  return [ {
    plugin: n.name,
    tier: n.tier,
    hook: r,
    generation: n.generation
  } ];
});

function Et() {
  let e = {};
  for (let n of aPe) e[n] = qCt(n);
  return e;
}

var Ee = () => qqe.plugins().map(z);

var xt = () => qqe.interfaces().map(j);

var vt = () => qqe.renderSites().map(e => ({
  ...e
}));

var Fds = e => qqe.setInterfaces(e.map(j));

function Uds(e) {
  qqe.setPlugins(e.map(z)), J.emit(Ee());
}

var Bds = e => qqe.setRenderSites(e.map(n => ({
  ...n
})));

var jds = X.subscribe;

var T8t = J.subscribe;

import { sep as It } from "path";

function xe(e) {
  let n = new Map;
  if (!e) return n;
  try {
    let r = Y(e);
    if (r && typeof r === "object") {
      for (let [o, s] of Object.entries(r)) if (typeof s === "string") n.set(o, s);
    }
  } catch (r) {
    t(`[repo-checkouts] Failed to parse env map: ${l(r)}`, {
      level: "error"
    });
  }
  return n;
}

function TCe() {
  if (ZS()) return new Map;
  let e = ao().repoCheckouts;
  if (e.checkouts) return e.checkouts;
  let n = a.CLAUDE_CODE_REPO_CHECKOUTS;
  if (!n) {
    let r = Bl();
    return e.checkouts = new Map(r === null ? [] : [ [ "", r ] ]), e.checkouts;
  }
  return e.checkouts = xe(n), e.checkouts;
}

function vMn() {
  return a.CLAUDE_CODE_REPO_CHECKOUTS ? TCe() : new Map;
}

function ve() {
  let e = ao().repoCheckouts;
  if (e.baseRefs) return e.baseRefs;
  return e.baseRefs = xe(a.CLAUDE_CODE_BASE_REFS), e.baseRefs;
}

function Qfr(e) {
  for (let [n, r] of TCe()) if (e === r || e.startsWith(r + It)) return n;
  return;
}

async function Ods(e) {
  ao().repoCheckouts.onMetadataChanged = e;
  for (let [, n] of TCe()) await sMo(n);
  iMo(() => void Woo());
}

async function Woo() {
  let e = TCe();
  if (e.size === 0) return;
  let n = {};
  for (let [o, s] of e) {
    let i = await lMo(s);
    if (i !== void 0) n[o] = i;
  }
  let r = ao().repoCheckouts;
  if (zn(n, r.lastEmittedBranches)) return;
  r.lastEmittedBranches = n, r.onMetadataChanged?.({
    current_branches: n
  });
}

class Pe {
  liveProcessesByAgentId=new Map;
  stopPendingAgentIds=new Set;
  everRegisteredTaskIds=new Set;
  loopsByTaskId=new Map;
  pendingEscalationsByTaskId=new Map;
  inFlightProcessSweeps=new Set;
  dispose() {
    for (let e of this.pendingEscalationsByTaskId.values()) for (let n of e.timers) clearTimeout(n);
    this.pendingEscalationsByTaskId.clear(), this.inFlightProcessSweeps.clear(), this.loopsByTaskId.clear(), 
    this.everRegisteredTaskIds.clear(), this.liveProcessesByAgentId.clear(), this.stopPendingAgentIds.clear();
  }
}

var Ot = new K(() => new Pe);

function fF() {
  return ps(Ot);
}

function SMn(e) {
  return fF().everRegisteredTaskIds.has(e);
}

function Dst(e, n, r = {}) {
  let {everRegisteredTaskIds: o, loopsByTaskId: s} = fF();
  o.add(e);
  let i = s.get(e);
  if (i) s.delete(e), te(i);
  let u = {
    killController: n,
    agentControllersByAgentId: new Map,
    settleCallbacks: [],
    settleRequiresEmptyAgentAssociations: r.settleRequiresEmptyAgentAssociations ?? !1,
    chainSettled: !1
  };
  return s.set(e, u), () => {
    if (s.get(e) !== u) return;
    if (u.chainSettled = !0, u.settleRequiresEmptyAgentAssociations && u.agentControllersByAgentId.size > 0) return;
    s.delete(e), te(u);
  };
}

function te(e) {
  for (let n of e.settleCallbacks) try {
    n();
  } catch (r) {
    d(r);
  }
}

function Zw(e) {
  return !fF().loopsByTaskId.has(e);
}

function Gqe(e) {
  return fF().loopsByTaskId.get(e);
}

function BCt(e, n) {
  let r = fF().loopsByTaskId.get(e);
  if (!r) {
    try {
      n();
    } catch (o) {
      d(o);
    }
    return;
  }
  r.settleCallbacks.push(n);
}

function Pds(e) {
  return fF().loopsByTaskId.get(e)?.killController;
}

function wMn(e, n, r) {
  fF().loopsByTaskId.get(e)?.agentControllersByAgentId.set(n, r);
}

function Ids(e, n) {
  let {loopsByTaskId: r} = fF(), o = r.get(e);
  if (!o) return;
  if (o.agentControllersByAgentId.delete(n), o.chainSettled && o.settleRequiresEmptyAgentAssociations && o.agentControllersByAgentId.size === 0) r.delete(e), 
  te(o);
}

function uNe(e) {
  let n = fF().loopsByTaskId.get(e);
  return n ? [ ...n.agentControllersByAgentId.keys() ] : [];
}

function Lst(e) {
  let n = fF().loopsByTaskId.get(e);
  if (!n) return [];
  let r = [];
  for (let o of n.agentControllersByAgentId.values()) if (o && !o.signal.aborted) r.push(o);
  return r;
}

import { resolve as Ft } from "path";

function EMn(e) {
  let n = {};
  for (let s of [ "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM" ]) {
    let i = _A(e, s);
    if (i !== void 0) n[s] = i;
  }
  let r = _A(e, "GIT_CONFIG_COUNT"), o = Number(r);
  if (r === void 0 || !Number.isInteger(o) || o <= 0) return {
    env: n,
    count: void 0
  };
  n.GIT_CONFIG_COUNT = r;
  for (let s = 0; s < o; s++) {
    let i = _A(e, `GIT_CONFIG_KEY_${s}`);
    if (i === void 0) break;
    n[`GIT_CONFIG_KEY_${s}`] = i;
    let u = _A(e, `GIT_CONFIG_VALUE_${s}`);
    if (u !== void 0) n[`GIT_CONFIG_VALUE_${s}`] = u;
  }
  return {
    env: n,
    count: r
  };
}

var Bt = /^http\.(?:.*\.)?(?:ssl(?:cainfo|capath|verify|version|cipherlist|backend|try)|schannel(?:checkrevoke|usesslcainfo)|pinnedpubkey|proxysslcainfo)$/i;

function Mt() {
  let {env: e, count: n} = EMn(zRt()), r = [];
  for (let o = 0; o < Number(n ?? 0); o++) {
    let s = e[`GIT_CONFIG_KEY_${o}`], i = e[`GIT_CONFIG_VALUE_${o}`];
    if (s === void 0) break;
    if (i !== void 0 && Bt.test(s)) r.push([ s, i ]);
  }
  return r.length === 0 ? {} : Is(Aj(void 0, r), o => o !== void 0);
}

function kMn(e, n) {
  return lSs(e, {
    ...Mt(),
    ...n
  });
}

async function Nst(e, n, r = {}, {timeout: o, abortSignal: s, withoutControllingTerminal: i, waitForExitAfterKill: u, programs: p, input: h, lazyFetch: S} = {}) {
  let y = AY(e), w = p === void 0 ? void 0 : Ut(p), b = await v$n(e, {
    envPins: r,
    pin: y,
    ...oe(w)
  });
  if (!b.ok) return {
    stdout: "",
    stderr: `git was not run: ${e7t(b)}.\n`,
    code: 1,
    lane: {
      kind: "not_started",
      why: b.reason
    }
  };
  if (s?.aborted) return {
    stdout: "",
    stderr: `git was not run: the operation was cancelled before it started.\n`,
    code: 1,
    lane: {
      kind: "not_started",
      why: "aborted"
    }
  };
  return Oe(ft, e, n, r, b.entries, {
    timeout: o,
    abortSignal: s,
    withoutControllingTerminal: i,
    waitForExitAfterKill: u,
    repository: y
  }, {
    programs: w,
    input: h,
    lazyFetch: S
  });
}

function TMn(e, n, r = {}, o = {}) {
  let s = n.find((i, u) => !i.startsWith("-") && (u === 0 || n[u - 1] !== "-c"));
  if (s === void 0 || !Gt.has(s)) throw new x(`gitInOwnWorkTree runs reads only, not git ${s ?? "(no subcommand)"}`, "gitInOwnWorkTree called with a non-read git subcommand");
  return Oe(it, e, n, r, null, o);
}

var Gt = new Set([ "diff", "format-patch", "log", "show" ]), Ce = [ "https", "ssh" ];

function Zfr(e) {
  return Ce.includes(Ie(e));
}

function Ie(e) {
  let n = /^[A-Za-z0-9][A-Za-z0-9+.-]*(?=::)/.exec(e)?.[0];
  if (n !== void 0) return n;
  let r = /^([a-z][a-z0-9+.-]*):\/\//i.exec(e)?.[1];
  if (r !== void 0) return r === "git+ssh" || r === "ssh+git" ? "ssh" : r;
  let o = e.indexOf(":"), s = e.indexOf("/");
  return o === -1 || s !== -1 && s < o || O() === "windows" && /^[A-Za-z]:[\\/]/.test(e) ? "file" : "ssh";
}

var Ht = /^fatal: transport '([A-Za-z][A-Za-z0-9+.-]{0,31})' not allowed$/m;

function Ut(e) {
  return {
    base: e.base,
    buildInvocation: (n, r) => {
      let o = e.buildInvocation([ ...n ], {
        dir: r.dir,
        env: {
          ...r.env
        }
      }), s = {
        file: o.file,
        args: [ ...o.args ],
        cwd: o.cwd,
        env: {
          ...o.env
        }
      };
      if (!gHo(s.file) || Lee(s.file, [], s.env) === null) throw new x("programs.buildInvocation must return an absolute path to a file named git", "partial-clone lane called with programs whose file is not an absolute path to git");
      if (![ [], [ "-C", r.dir ], [ "-C", Ft(r.dir) ] ].some(i => zn(s.args, [ ...i, ...n ])) || Object.keys(r.env).some(i => Object.hasOwn(s.env, i) ? s.env[i] !== r.env[i] : !/^(?:OLD)?PWD$/i.test(i)) || Object.keys(s.env).some(i => !Object.hasOwn(r.env, i))) throw new x("programs.buildInvocation must return the environment it was handed, less at most PWD and OLDPWD, and the arguments it was handed, with nothing before them but -C and the directory it was handed; it changed the environment or the arguments", "partial-clone lane called with programs that do not keep the environment and arguments handed to them");
      return s;
    }
  };
}

function re(e, n, r, o) {
  return e === void 0 ? {
    file: n(),
    args: [ ...r ],
    cwd: o.dir,
    env: o.env
  } : e.buildInvocation(r, o);
}

function oe(e) {
  return e === void 0 ? {} : {
    base: e.base,
    run: (n, {cwd: r, env: o, extendEnv: s, ...i}) => Vve(e.buildInvocation(n, {
      dir: r,
      env: o
    }), {
      ...i,
      stdin: "ignore"
    })
  };
}

async function Oe(e, n, r, o, s, {repository: i, ...u}, {programs: p, input: h, lazyFetch: S} = {}) {
  let y = h === void 0 ? {
    stdin: "ignore"
  } : {
    input: h
  }, w = re(p, Lt, r, {
    dir: n,
    env: As({
      ...o,
      ...Fe(s === null ? [] : Be([], s, []))
    }, {
      repository: i,
      base: p?.base
    })
  }), b = await e(w.file, w.args, {
    ...u,
    cwd: w.cwd,
    env: w.env,
    ...p !== void 0 && {
      extendEnv: !1
    },
    ...y
  });
  if (b.code === 0) return {
    ...b,
    lane: {
      kind: "first_attempt_succeeded"
    }
  };
  if (b.timedOut || b.maxBufferExceeded || u.abortSignal?.aborted || u.withoutControllingTerminal === !0 && Oy()) return {
    ...b,
    lane: {
      kind: "first_attempt_cut"
    }
  };
  let T = i ?? AY(pr(n) ?? n), R = await zt(n, o, {
    repoFiltersOff: s !== null,
    repository: T,
    programs: p,
    lazyFetch: S
  });
  if (s !== null && u.abortSignal?.aborted) return {
    ...b,
    lane: {
      kind: "first_attempt_cut"
    }
  };
  if (!R.retry) return {
    ...R.forgone === void 0 ? b : ne(b, `No lazy fetch from the promisor remote was attempted: ${R.forgone}.`),
    lane: {
      kind: "forgone",
      why: R.why
    }
  };
  t(`[git] ${n} is a partial clone: retrying with ${S === "off" ? `lazy fetch off, over ${R.transports.join(" or ")}` : "a constrained lazy fetch"}`);
  let A = re(p, () => R.git, r, {
    dir: n,
    env: As({
      LC_ALL: "C",
      ...o,
      ...R.env
    }, {
      base: R.operatorEnv,
      repository: T
    })
  }), E = {
    ...await e(A.file, A.args, {
      ...u,
      cwd: A.cwd,
      env: A.env,
      extendEnv: !1,
      ...y
    }),
    lane: {
      kind: "retried"
    }
  };
  if (E.code === 0) return E;
  let I = R.promisorUrl === void 0 ? void 0 : Xl(j4n(hJe(R.promisorUrl)), $t), C = E, L = Ht.exec(E.stderr)?.[1];
  if (L !== void 0 && !R.transports.includes(L)) {
    let N = R.transports.join(" or ");
    C = ne(C, `Nothing was fetched: a partial clone's lazy fetch runs over ${N} only, and the promisor remote the repository's own config names, ${I ?? "one it does not spell out"}, is reached over ${L}${R.promisorUrl !== void 0 && R.transports.includes(Ie(R.promisorUrl)) ? ", not the transport that URL spells \u2014 a url.<base>.insteadOf rule in your git configuration, or a second promisor URL in the repository's, would account for that" : ""}.`);
  }
  if (R.userUnscopedExtraHeader) C = ne(C, `The lazy fetch did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config names as its promisor remote, here ${I ?? "one it does not spell out"}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.`);
  return C;
}

var Wt = /^(?:http\..*|url\..*\.(?:insteadof|pushinsteadof)|remote\..*\.(?:proxy|proxyauthmethod|uploadpack|receivepack|vcs)|credential\..*|core\.(?:sshcommand|askpass|gitproxy|alternaterefscommand|alternaterefsprefixes)|protocol\..*|fetch\.bundleuri|transfer\.bundleuri|bundle\..*|gpg\..*|ssh\..*)$/s, jt = /^(?:http\.(?:postbuffer|version|lowspeedlimit|lowspeedtime|maxrequests|minsessions|maxrequestbuffer)|protocol\.version)$/s, $t = {
  head: 70,
  tail: 20
};

function ne(e, n) {
  let r = e.stderr.replace(/\n*$/, "");
  return {
    ...e,
    stderr: `${r}${r === "" ? "" : `\n`}${n}\n`
  };
}

function Be(e, n, r) {
  return [ [ "credential.helper", "" ], ...e, [ "http.extraheader", "" ], [ "core.protectNTFS", "true" ], [ "core.protectHFS", "true" ], ...r, ...Nfo(Lfo(n.map(([o]) => o))) ];
}

function Fe(e, n) {
  return e.length === 0 ? {} : Is(Aj(n, e), r => r !== void 0);
}

async function zt(e, n, {repoFiltersOff: r, repository: o, programs: s, lazyFetch: i}) {
  let u = await Yt(e, o, s);
  if (u === null || u === void 0) return {
    retry: !1,
    why: u === null ? "no_promisor_remote" : "promisor_remote_unread"
  };
  let p = Vt(s?.base ?? zRt()), h = s === void 0 ? bme("git", p.PATH ?? "") : "";
  if (h === null) return {
    retry: !1,
    why: "no_git_on_absolute_path",
    forgone: "no git executable is on an absolute PATH entry of the environment Claude Code was launched with"
  };
  let S = process.env, y = _A(S, "GIT_NO_LAZY_FETCH") ?? _A(p, "GIT_NO_LAZY_FETCH");
  if ([ S, p ].some(v => {
    let M = _A(v, "GIT_NO_LAZY_FETCH");
    return M !== void 0 && Le(M);
  })) return {
    retry: !1,
    why: "lazy_fetch_switched_off",
    forgone: "GIT_NO_LAZY_FETCH is set"
  };
  let w = [ S, p ].reduce((v, M) => {
    let Te = _A(M, "GIT_ALLOW_PROTOCOL")?.split(":");
    return Te === void 0 ? v : v.filter(ct => Te.includes(ct));
  }, Ce);
  if (w.length === 0) return {
    retry: !1,
    why: "no_transport_admitted",
    forgone: "GIT_ALLOW_PROTOCOL admits neither https nor ssh"
  };
  let b = EMn(p), T = await De(e, [ "--get-regexp", "^remote\\..*\\.(uploadpack|vcs)$" ], o, b.env, p, s);
  if (!(T.exitCode === 1 && T.error === void 0 && !T.timedOut && !T.maxBufferExceeded)) return {
    retry: !1,
    why: T.code === 0 ? "remote_names_a_program" : "remote_programs_unread",
    forgone: T.code === 0 ? "a remote names an upload-pack or vcs program" : "git's configuration could not be read for a remote's upload-pack or vcs program"
  };
  let A = await v$n(e, {
    envPins: n,
    pin: o,
    ...oe(s)
  });
  if (!A.ok) return {
    retry: !1,
    why: A.reason,
    forgone: e7t(A)
  };
  let E = A.entries.find(([v]) => {
    let M = hSr(v);
    return Wt.test(M) && !jt.test(M);
  });
  if (E !== void 0) return {
    retry: !1,
    why: "repository_steers_the_fetch",
    forgone: `the repository's own git config sets ${ySr(E[0])} (${$fo})`
  };
  let I = await Olt(e, "^(credential\\.(.*\\.)?helper|core\\.sshcommand|ssh\\.variant|http\\.extraheader)$", {
    envPins: {
      ...n,
      ...b.env
    },
    base: p,
    repository: o,
    buildInvocation: s?.buildInvocation
  });
  if (I === null) return {
    retry: !1,
    why: "user_config_unread",
    forgone: "your own git configuration could not be read"
  };
  let [C, L] = qk(I, ([v]) => v === "core.sshcommand"), [N, at] = qk(L, ([v]) => v === "ssh.variant"), [ut, lt] = qk(at, ([v]) => v === "http.extraheader"), Se = _A(p, "GIT_SSH_VARIANT"), Z = N.at(-1)?.[1], dt = Se ?? Z, ye = jqn(Se === void 0 && Z !== void 0 ? {
    ...p,
    GIT_SSH_VARIANT: Z
  } : p, C.at(-1)?.[1]), D = await v$n(e, {
    envPins: n,
    pin: o,
    ...oe(s)
  });
  if (!D.ok || !zn(D.entries, A.entries)) return {
    retry: !1,
    why: D.ok ? "config_changed_during_vet" : D.reason,
    forgone: "the repository's git config changed while it was being vetted"
  };
  return {
    retry: !0,
    operatorEnv: p,
    git: h,
    transports: w,
    env: {
      GIT_NO_LAZY_FETCH: i === "off" ? "1" : y ?? "0",
      GIT_ALLOW_PROTOCOL: w.join(":"),
      GIT_SSH_COMMAND: fln(OXe(), ye.command),
      GIT_SSH_VARIANT: DMo(dt, ye.command),
      GIT_ASKPASS: n.GIT_ASKPASS ?? _A(p, "GIT_ASKPASS") ?? "",
      SSH_ASKPASS: n.SSH_ASKPASS ?? _A(p, "SSH_ASKPASS") ?? "",
      ...b.env,
      ...Fe(Be(lt, r ? D.entries : [], [ [ "core.alternateRefsCommand", ":" ] ]), b.count)
    },
    userUnscopedExtraHeader: ut.length > 0,
    promisorUrl: D.entries.findLast(([v]) => v === `remote.${u}.url`)?.[1] ?? void 0
  };
}

var Kt = /^remote\.(.*)\.(promisor|partialclonefilter)$/s;

async function Yt(e, n, r) {
  let o = await De(e, [ "--get-regexp", "^(extensions\\.partialclone|remote\\..*\\.(promisor|partialclonefilter))$" ], n, {}, r?.base, r);
  if (o.code !== 0) return o.exitCode === 1 ? null : void 0;
  let s = null, i = null;
  for (let u of o.stdout.split("\0")) {
    let p = u.indexOf(`\n`), h = p === -1 ? u : u.slice(0, p), S = p === -1 ? "true" : u.slice(p + 1);
    if (h === "extensions.partialclone") {
      s = S === "" ? s : S;
      continue;
    }
    let [, y, w] = Kt.exec(h) ?? [];
    if (i === null && y !== void 0 && (w === "partialclonefilter" || ![ "false", "no", "off", "0", "" ].includes(S.toLowerCase()))) i = y;
  }
  return s ?? i;
}

function De(e, n, r, o, s, i) {
  let u = re(i, Lt, [ ...xn, "config", "--includes", "--null", ...n ], {
    dir: e,
    env: As(o, {
      base: s,
      repository: r
    })
  });
  return ft(u.file, u.args, {
    cwd: u.cwd,
    env: u.env,
    ...s !== void 0 && {
      extendEnv: !1
    },
    timeout: 5e3,
    preserveOutputOnError: !1,
    stdin: "ignore"
  });
}

function Vt(e) {
  let n = {
    ...e
  }, r = O() === "windows";
  for (let o of Object.keys(n)) if (o === "PATH" || r && o.toUpperCase() === "PATH") delete n[o];
  return n.PATH = tJe(bl(e, "PATH") ?? ""), n;
}

function Hp(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "in_process_teammate";
}

function Mds(e) {
  let n = "";
  for (let r of Object.values(e)) if (Hp(r)) n += `${r.id}:${r.status};`;
  return n;
}

function zoo(e) {
  return e.status === "running" && !e.isIdle && e.currentWorkAbortController !== void 0;
}

function emr(e) {
  if (!zoo(e)) return !1;
  return e.currentWorkAbortController?.abort(), !0;
}

function tmr(e) {
  return e.awaitingPlanApproval || e.pendingUserMessages.length > 0;
}

var nmr = 50;

function Vqe(e, n) {
  if (e === void 0 || e.length === 0) return [ n ];
  if (e.length >= nmr) {
    let r = e.slice(-(nmr - 1));
    return r.push(n), r;
  }
  return [ ...e, n ];
}

function Hds(e, n) {
  let r = e === void 0 || e.every(o => o.uuid !== n.uuid) ? e : e.filter(o => o.uuid !== n.uuid);
  return Vqe(r, n);
}

var qt = {
  tryConsume() {
    return !0;
  },
  msUntilNextCall() {
    return 0;
  },
  refillsPerHour() {
    return 0;
  }
}, Z4 = {
  register() {},
  update() {},
  updateTranscript() {},
  getTranscript() {
    return;
  },
  remove() {},
  evictTerminal() {},
  applyOffsetsAndEvict() {},
  get() {
    return;
  },
  all() {
    return {};
  },
  getWebSearchBudget() {
    return qt;
  },
  resetWebSearchBudget() {},
  takeConcurrencySlot() {
    return () => {};
  },
  getConcurrentSubagents() {
    return 0;
  }
};

function B(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}

var rmr = {
  local_agent: "subagent",
  local_workflow: "workflow",
  local_bash: "shell",
  monitor_mcp: "monitor",
  monitor_ws: "monitor",
  mcp_task: "MCP task",
  in_process_teammate: "teammate",
  dream: "dream",
  auto_mode_scan: "auto-mode scan",
  local_memory_import: "memory import",
  remote_agent: "cloud session"
};

function ACe(e) {
  return rmr[e] ?? e;
}

function Uu(e) {
  return e.type === "local_agent" && "isObserver" in e && e.isObserver === !0;
}

function jCt(e, n, r, o) {
  if (o !== void 0 && "agentId" in e && typeof e.agentId === "string" && o(e.agentId)) return !1;
  let s = new Set, i = "parentAgentId" in e && typeof e.parentAgentId === "string" ? e.parentAgentId : void 0;
  while (i && !s.has(i)) {
    if (i === n) return !0;
    if (o?.(i)) return !1;
    s.add(i);
    let u = r[i];
    i = u !== void 0 && u.type === "local_agent" && !("forkWorker" in u && u.forkWorker === !0) && "parentAgentId" in u && typeof u.parentAgentId === "string" ? u.parentAgentId : void 0;
  }
  return !1;
}

function omr(e, n) {
  let r;
  switch (e.type) {
   case "local_agent":
    r = e.parentAgentId;
    break;

   case "local_workflow":
    r = e.spawnerAgentId;
    break;

   case "local_bash":
   case "monitor_mcp":
   case "monitor_ws":
    r = e.agentId;
    break;

   default:
    return;
  }
  if (r === void 0) return;
  let o = B(n, r);
  return o?.type === "local_agent" && !Uu(o) ? o.id : void 0;
}

function KW(e) {
  if (e.type === "local_agent") return !Uu(e);
  return e.type === "local_workflow";
}

function rh(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  if ("isBackgrounded" in e && e.isBackgrounded === !1) return !1;
  return !0;
}

function smr(e) {
  return e.type === "local_agent" && e.awaitedByCaller === !0;
}

function y8t(e) {
  return e.type === "mcp_task" && e.parked === !0;
}

function $st(e) {
  return e.type === "local_bash" && e.kind === "monitor" || e.type === "monitor_mcp" || e.type === "monitor_ws" && e.ambient !== !0;
}

function Goo(e) {
  return e.type === "local_bash" && e.isBackgrounded === !0 && e.kind !== "monitor" && e.agentId === void 0;
}

function Zt(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && e.frameLive?.explicit !== !0;
}

function CCe(e) {
  return Zt(e);
}

function Q3(e) {
  return e.skipTranscript === !0 || e.type === "monitor_ws" && e.ambient === !0;
}

function WCt(e) {
  return e.type === "local_agent" ? e.agentType : void 0;
}

function bce(e) {
  return e.type === "in_process_teammate" && e.isIdle && !tmr(e);
}

function zCt(e) {
  switch (e.type) {
   case "local_agent":
    return e.abortController?.signal.aborted === !0;

   case "in_process_teammate":
    return e.currentWorkAbortController?.signal.aborted === !0;

   default:
    return !1;
  }
}

function imr(e) {
  return e?.type === "local_workflow";
}

var Kqe = new Set([ "local_agent", "in_process_teammate", "local_workflow", "dream" ]);

import { sep as Ne } from "path";

function Fst(e, n) {
  let r = n.endsWith(Ne) ? n : n + Ne;
  if (O() === "windows") return e.toLowerCase().startsWith(r.toLowerCase());
  return e.startsWith(r);
}

function Ust(e, n) {
  if (O() === "windows") return e.toLowerCase() === n.toLowerCase() || Fst(e, n);
  return e === n || Fst(e, n);
}

function Jt(e) {
  return e.startsWith("/") ? "/" : "\\";
}

function Wre(e, n, r) {
  let o = r ? e.toLowerCase() : e, s = r ? n.toLowerCase() : n;
  if (o === s) return !0;
  let i = Jt(s), u = s.endsWith(i) ? s : s + i;
  return o.startsWith(u);
}

class qM extends Error {
  subtype;
  constructor(e, n) {
    super(`control_request '${e}' got no response after ${n / 1e3}s \u2014 the worker may still apply it`);
    this.subtype = e;
  }
}

class J_e extends Error {
  subtype;
  constructor(e) {
    super("Request was not delivered to the cloud session");
    this.subtype = e;
  }
}

function mV(e) {
  if (e instanceof Ye) return "aborted";
  if (e instanceof qM) return "timeout";
  if (e instanceof J_e) return "not_delivered";
  if (e instanceof Error && (e.message.endsWith("Disconnected") || e.message.endsWith("Connection to remote lost"))) return "disconnected";
  if (e instanceof Error && (e.message.endsWith("not connected") || e.message.includes("Cannot send:"))) return "not_connected";
  return "server_error";
}

async function Dds(e, n) {
  try {
    let r = await n();
    return g(e), r;
  } catch (r) {
    if (r instanceof Ye) f(e, "aborted"); else m(e, mV(r));
    throw r;
  }
}

function Lds(e) {
  if (e.subtype === "error" && typeof e.error === "string") return Error(e.error);
  let n = e.subtype === "error" ? "non-string error" : `subtype ${typeof e.subtype === "string" ? "unrecognized" : typeof e.subtype}`;
  return Error(`Malformed control_response from worker (${n})`);
}

import { access as Qt, lstat as We, readFile as en, realpath as je } from "fs/promises";

import { basename as ie, dirname as ue, isAbsolute as $e, join as G, relative as tn, sep as nn, win32 as rn } from "path";

var Nds = "/dev/null", _8t = {
  GIT_CONFIG_GLOBAL: "/dev/null",
  GIT_CONFIG_NOSYSTEM: "1"
};

var Q_e = {
  GIT_REFERENCE_BACKEND: "files"
};

var b8t = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;

function amr(e) {
  return b8t.test(e);
}

var Xt = /\p{Cs}/u;

function S8t(e) {
  return amr(e) || Xt.test(e);
}

function GCt(e, n) {
  return e.split(/\r?\n/).some(S8t) ? `${n} is not shown here because it holds hidden or control characters` : e;
}

function qB(e) {
  return S8t(e) ? "a path not shown here because it holds hidden or control characters" : e;
}

var pe = [ "--no-optional-locks", "-c", "diff.relative=false", "diff", ...hMo, Rb ], pNe = 5e3, U = 50, on = 500, lmr = 1e6, w8t = 400, F = 500;

async function AMn(e, n, r = "auto", o, s) {
  if (o === void 0 && !dmr()) return null;
  if (await Ve(o)) return null;
  if (r === "branch") {
    let S = await Ge(e, n, !0, o, void 0, s);
    return S === "base-stats-failed" ? null : S;
  }
  let i = await H("HEAD", n, o, s);
  if (i === null) return de(n, o, s);
  if (i.stats.filesCount > F) return {
    ...i,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  if (r === "session") return await Promise.all([ an(i, o), V(i, n, o, void 0, !0, s) ]), 
  {
    ...i,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  let u = await V(i, n, o, void 0, !1, s);
  if (r === "branch-point") return sn(e, n, i, o, s);
  if (r === "uncommitted" || i.stats.filesCount > 0) return {
    ...i,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  let p = await Ge(e, n, !1, o, u, s), h = {
    ...i,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  };
  if (p === "base-stats-failed") return ze(h, o);
  if (p === null || p.stats.filesCount === 0) return h;
  return p;
}

function ze(e, n) {
  return n === void 0 || e.stats.filesCount > 0 ? e : null;
}

async function Ge(e, n, r, o, s, i) {
  let u = await Je(e, n, o, void 0, i);
  if (u.kind === "error") return r ? de(n, o, i) : null;
  let p, h;
  if (u.kind !== "merge-base") {
    if (!r) return null;
    p = await H("HEAD", n, o, i), h = u.kind === "head-is-base" ? {
      kind: "branch",
      baseBranch: u.baseBranch,
      baseRef: "HEAD"
    } : {
      kind: "working-tree"
    };
  } else p = await H(u.mergeBase, n, o, i), h = {
    kind: "branch",
    baseBranch: u.baseBranch,
    baseRef: u.mergeBase
  };
  if (p === null) return u.kind === "merge-base" ? "base-stats-failed" : de(n, o, i);
  if (p.stats.filesCount <= F) await V(p, n, o, s, !1, i);
  return {
    ...p,
    hunks: new Map,
    source: h
  };
}

async function sn(e, n, r, o, s) {
  let i = {
    ...r,
    hunks: new Map,
    source: {
      kind: "working-tree"
    }
  }, u = Qe(o ?? E8t());
  if (u === null) return i;
  let p = await Je(e, n, o, u, s);
  if (p.kind !== "merge-base") return i;
  let h = await H(p.mergeBase, n, o, s, F);
  if (h === null) return ze(i, o);
  if (h.stats.filesCount === 0) return i;
  let S = {
    ...h.stats
  }, y = new Map;
  for (let [w, b] of r.perFileStats) {
    let T = h.perFileStats.get(w);
    if (!b.isUntracked) {
      let {previousPath: R, newPath: A, ...E} = b;
      y.set(w, T ?? (b.previousPath === void 0 ? b : E));
      continue;
    }
    if (y.set(w, b), T === void 0) S.filesCount += 1; else S.linesAdded -= T.added, 
    S.linesRemoved -= T.removed;
  }
  for (let [w, b] of h.perFileStats) {
    if (y.size >= U) break;
    if (!y.has(w)) y.set(w, b);
  }
  return {
    stats: S,
    perFileStats: y,
    hunks: new Map,
    source: {
      kind: "branch",
      baseBranch: p.baseBranch,
      baseRef: p.mergeBase
    }
  };
}

async function an(e, n) {
  if (e.perFileStats.size === 0) return;
  let r = n ?? E8t(), o = Uje();
  await Promise.all(Array.from(e.perFileStats, async ([s, i]) => {
    try {
      let u = await We(G(r, s));
      if (Math.max(u.mtimeMs, u.ctimeMs) < o) i.preSession = !0;
    } catch {}
  }));
}

async function V(e, n, r, o, s = !1, i) {
  let u = U - e.perFileStats.size;
  if (u <= 0) return null;
  let p = o !== void 0 ? o : await hn(u, n, r, s, i);
  if (p) for (let [h, S] of p) {
    if (e.perFileStats.has(h)) continue;
    e.perFileStats.set(h, S), e.stats.filesCount += 1;
  }
  return p;
}

async function de(e, n, r) {
  if ((await it(Lt(), [ "--no-optional-locks", "rev-parse", "--verify", "--quiet", "HEAD" ], {
    timeout: pNe,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...W(n, r),
    cwd: n
  })).exitCode !== 1) return null;
  let s = {
    stats: {
      filesCount: 0,
      linesAdded: 0,
      linesRemoved: 0
    },
    perFileStats: new Map,
    hunks: new Map,
    source: {
      kind: "working-tree"
    },
    noCommits: !0
  }, i = await H("--cached", e, n, r);
  if (i !== null) {
    if (s.stats = i.stats, s.perFileStats = i.perFileStats, i.stats.filesCount > F) return s;
    if (i.stats.filesCount > 0) await un(s, e, n, r);
  }
  return await V(s, e, n, void 0, !1, r), s;
}

async function un(e, n, r, o) {
  let s = await Ke(n, r, o);
  if (s === null) return;
  for (let [i, u] of s.perFileStats) {
    let p = e.perFileStats.get(i);
    if (p === void 0) continue;
    let h = p.isBinary || u.isBinary, S = h ? 0 : Math.max(0, p.added + u.added - u.removed);
    e.stats.linesAdded += S - p.added, e.perFileStats.set(i, {
      ...p,
      added: S,
      removed: 0,
      isBinary: h,
      ...u.status === "removed" && {
        status: "removed"
      }
    });
  }
}

async function Ke(e, n, r) {
  let o = await it(Lt(), [ ...pe, "--raw", "--numstat" ], {
    timeout: pNe,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...W(n, r),
    cwd: n
  });
  if (o.code !== 0) return null;
  return cmr(o.stdout, Number.POSITIVE_INFINITY, r === void 0 ? "all" : "within-root");
}

async function H(e, n, r, o, s = U) {
  if (o === void 0) {
    let {stdout: h, code: S} = await q([ e, "--shortstat" ], n, r, o);
    if (S === 0) {
      let y = CMn(h);
      if (y && y.filesCount > F) return {
        stats: y,
        perFileStats: new Map
      };
    }
  }
  let {stdout: i, code: u} = await q([ e, "--raw", "--numstat" ], n, r, o);
  if (u !== 0) return null;
  let p = cmr(i, s, o === void 0 ? "all" : "within-root");
  if (o !== void 0 && p.stats.filesCount > F) return {
    stats: p.stats,
    perFileStats: new Map
  };
  return p;
}

function q(e, n, r, o) {
  let s = [ ...pe, ...e ], i = {
    timeout: pNe,
    preserveOutputOnError: !1,
    abortSignal: n
  };
  if (r !== void 0) return it(Lt(), s, {
    ...i,
    ...W(r, o),
    cwd: r,
    stdin: "ignore"
  });
  return TMn(se().cwd(), s, {}, i);
}

function v8t(e) {
  let n = fSe(e);
  return n !== null && n.workTree !== null && n.gitDir === G(n.workTree, ".git") ? n : null;
}

function ln(e) {
  return {
    env: {
      ...As(Q_e, {
        base: gs(),
        repository: v8t(e) ?? {
          gitDir: pSe,
          workTree: e,
          commonDir: pSe
        }
      }),
      ..._8t,
      ...Aj(void 0, aje())
    },
    extendEnv: !1
  };
}

function dn(e) {
  return {
    env: {
      ...As(Q_e, {
        base: gs(),
        repository: {
          gitDir: pSe,
          workTree: e,
          commonDir: pSe
        }
      }),
      ..._8t
    },
    extendEnv: !1
  };
}

function W(e, n) {
  if (e === void 0) return {
    env: As()
  };
  return n ?? dn(e);
}

function VCt(e) {
  if (e.noCommits) return "--cached";
  return e.source.kind === "branch" ? e.source.baseRef : "HEAD";
}

async function $ds(e, n = "HEAD") {
  if (!dmr()) return null;
  if (await Ve(void 0)) return null;
  let {stdout: r, code: o} = await q([ n, "--shortstat" ], e, void 0, void 0);
  if (o === 0) {
    let p = CMn(r);
    if (p && p.filesCount > F) return {
      hunks: new Map,
      skippedLarge: new Set
    };
  }
  let {stdout: s, code: i} = await q([ ...zNt, n ], e, void 0, void 0);
  if (i !== 0) return null;
  let u = Voo(s);
  if (n === "--cached" && u.hunks.size > 0) {
    let p = await Ke(e, void 0, void 0);
    if (p === null) return null;
    for (let h of p.perFileStats.keys()) u.hunks.delete(h);
  }
  return u;
}

function Bst() {
  return se().cwd();
}

function dmr() {
  let e = Bst(), n = Vp().diffCheckoutIsRepo, r = n.get(e);
  if (r !== void 0) return r;
  let o = Cb(e) !== null;
  return n.set(e, o), o;
}

function E8t() {
  let e = Bst();
  return pr(e) ?? e;
}

async function k8t(e, n) {
  let {stdout: r, code: o} = await it(Lt(), [ "--no-optional-locks", "rev-parse", "--show-toplevel" ], {
    timeout: pNe,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...n === void 0 ? {
      env: As()
    } : ln(n),
    cwd: n
  });
  if (o !== 0 || r.trim() === "") return null;
  return r.trim();
}

function cmr(e, n = U, r = "all") {
  let o = e.split(`\n`).filter(Boolean), s = o.filter(w => w.startsWith(":")), i = o.filter(w => !w.startsWith(":") && Nt(w, "\t") + 1 >= 3), u = s.length > 0 && s.length === i.length, p = 0, h = 0, S = 0, y = new Map;
  for (let [w, b] of i.entries()) {
    let T = b.split("\t"), R = T.slice(2).join("\t");
    if (r === "within-root" && !umr(R)) continue;
    S++;
    let A = T[0], E = T[1], I = A === "-" || E === "-", C = I ? 0 : parseInt(A ?? "0", 10) || 0, L = I ? 0 : parseInt(E ?? "0", 10) || 0;
    if (p += C, h += L, y.size < n) {
      let N = y.has(R);
      y.set(R, {
        added: C,
        removed: L,
        isBinary: I,
        isUntracked: !1,
        ...u && fn(s[w], N)
      });
    }
  }
  return {
    stats: {
      filesCount: S,
      linesAdded: p,
      linesRemoved: h
    },
    perFileStats: y
  };
}

var cn = {
  A: "added",
  D: "removed",
  R: "renamed",
  C: "copied"
};

function fn(e, n) {
  let [r, o, s] = e.split("\t"), i = r.slice(r.lastIndexOf(" ") + 1)[0], u = cn[i] ?? "modified", p = ce(s ?? o);
  if (n || p === void 0) return {
    status: u
  };
  if (s === void 0) return o.startsWith('"') ? {
    status: u,
    newPath: p
  } : {
    status: u
  };
  let h = ce(o);
  return h === void 0 ? {
    status: u
  } : {
    status: u,
    previousPath: h,
    newPath: p
  };
}

function ce(e) {
  let n = e.startsWith('"') ? RCe(e.slice(1, -1)) : e;
  return !S8t(n) && !pmr.test(n) && !/\\|^[A-Za-z]:| => /.test(n) && !$e(n) && n.split("/").every(o => pz(o) !== "..") ? n : void 0;
}

function umr(e) {
  let n = pn(e);
  return n !== null && n.every(r => !$e(r) && !rn.isAbsolute(r) && !/^[A-Za-z]:/.test(r) && r.split(/[/\\{}]/).every(o => pz(o) !== ".."));
}

function pn(e) {
  if (e.startsWith('"')) {
    let p = ae(e);
    if (p === -1) return null;
    let h = RCe(e.slice(1, p)), S = e.slice(p + 1);
    if (S === "") return [ h ];
    let y = S.startsWith(" => ") ? S.slice(4) : null;
    if (y === null) return null;
    if (!y.startsWith('"')) return y.includes('"') || y.includes(" => ") ? null : [ h, y ];
    return ae(y) === y.length - 1 ? [ h, RCe(y.slice(1, -1)) ] : null;
  }
  let n = e.indexOf(" => ");
  if (n === -1) return e.includes('"') ? null : [ e ];
  if (e.indexOf(" => ", n + 1) !== -1) return null;
  let r = e.slice(0, n), o = e.slice(n + 4);
  if (r.includes('"')) return null;
  if (o.startsWith('"')) return ae(o) === o.length - 1 ? [ r, RCe(o.slice(1, -1)) ] : null;
  if (o.includes('"')) return null;
  let s = [ r, o ], i = r.indexOf("{"), u = o.indexOf("}");
  if (r.indexOf("{", i + 1) !== -1 || o.indexOf("}", u + 1) !== -1) return null;
  if (i !== -1 && u !== -1) {
    let p = r.slice(0, i), h = o.slice(u + 1);
    s.push(`${p}${r.slice(i + 1)}${h}`, `${p}${o.slice(0, u)}${h}`);
  }
  return s;
}

function ae(e) {
  for (let n = 1; n < e.length; n++) if (e[n] === "\\") n++; else if (e[n] === '"') return n;
  return -1;
}

var pmr = new RegExp(`[${b_}\\uFFFD]`, "u");

function RCe(e) {
  let n = [], r = Array.from(e);
  for (let o = 0; o < r.length; o++) {
    let s = r[o];
    if (s !== "\\") {
      n.push(...Buffer.from(s, "utf8"));
      continue;
    }
    let i = r[o + 1] ?? "", u = r.slice(o + 1, o + 4).join("");
    if (/^[0-3][0-7]{2}$/.test(u)) {
      n.push(parseInt(u, 8)), o += 3;
      continue;
    }
    let h = {
      n: 10,
      t: 9,
      r: 13,
      b: 8,
      a: 7,
      f: 12,
      v: 11,
      '"': 34,
      "\\": 92
    }[i];
    if (h !== void 0) n.push(h), o += 1; else n.push(92);
  }
  return Buffer.from(n).toString("utf8");
}

function Voo(e) {
  let n = new Map, r = new Set;
  if (!e.trim()) return {
    hunks: n,
    skippedLarge: r
  };
  let o = e.split(/^diff --git /m).filter(Boolean);
  for (let s of o) {
    if (n.size + r.size >= U) break;
    let i = s.indexOf(`\n`), u = i === -1 ? s : s.slice(0, i), p = u.match(/^a\/(.+) b\/\1$/), h = p ?? u.match(/^(?:"a\/((?:[^"\\]|\\.)*)"|a\/(.+?)) (?:"b\/((?:[^"\\]|\\.)*)"|b\/(.+))$/);
    if (!h) continue;
    let S = p ? p[1] : h[3] !== void 0 ? RCe(h[3]) : h[4] ?? (h[1] !== void 0 ? RCe(h[1]) : h[2] ?? "");
    if (s.length > lmr) {
      r.add(S);
      continue;
    }
    let y = s.split(`\n`), w = [], b = null, T = 0;
    for (let R = 1; R < y.length; R++) {
      let A = y[R] ?? "", E = A.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      if (E) {
        if (b) w.push(b);
        b = {
          oldStart: parseInt(E[1] ?? "0", 10),
          oldLines: parseInt(E[2] ?? "1", 10),
          newStart: parseInt(E[3] ?? "0", 10),
          newLines: parseInt(E[4] ?? "1", 10),
          lines: []
        };
        continue;
      }
      if (b === null && (A.startsWith("index ") || A.startsWith("---") || A.startsWith("+++") || A.startsWith("new file") || A.startsWith("deleted file") || A.startsWith("old mode") || A.startsWith("new mode") || A.startsWith("Binary files"))) continue;
      if (b && (A.startsWith("+") || A.startsWith("-") || A.startsWith(" ") || A === "")) {
        if (T >= w8t) continue;
        b.lines.push("" + A), T++;
      }
    }
    if (b) w.push(b);
    if (w.length > 0) n.set(S, w);
  }
  return {
    hunks: n,
    skippedLarge: r
  };
}

async function Ve(e) {
  let n = await V5(e ?? Bst());
  if (!n) return !1;
  let r = [ "MERGE_HEAD", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "rebase-merge", G("rebase-apply", "rebasing") ], [o, s, i, u, p, h] = await Promise.all(r.map(S => Qt(G(n, S)).then(() => !0).catch(() => !1)));
  return Boolean(o || i || u || s && (p || h));
}

class qe {
  #e=!1;
  #t=!1;
  get baseResolveOkLogged() {
    return this.#e;
  }
  get baseResolveSadLogged() {
    return this.#t;
  }
  markBaseResolveOkLogged() {
    this.#e = !0;
  }
  markBaseResolveSadLogged() {
    this.#t = !0;
  }
}

var mn = new K(() => new qe);

async function Je(e, n, r, o, s) {
  let i = mn.of(e), u = await gn(n, r, o, s);
  if (u.kind === "error") {
    if (!i.baseResolveSadLogged) i.markBaseResolveSadLogged(), f("diff_base_resolve", u.reason);
  } else if (!i.baseResolveOkLogged) i.markBaseResolveOkLogged(), g("diff_base_resolve", {
    outcome: c(u.kind)
  });
  return u;
}

async function gn(e, n, r, o) {
  let s = {
    timeout: pNe,
    abortSignal: e,
    ...W(n, o)
  }, [i, u] = await Promise.all([ zc(n, s), rx(n, s) ]);
  if (!i || i === "HEAD") return {
    kind: "none"
  };
  let p = r ?? u;
  if (p.startsWith("-") || pmr.test(p) || r === void 0 && /\.\.|[\s~^:?*[\\]|@\{/.test(p)) return {
    kind: "none"
  };
  if (i === p) return {
    kind: "head-is-base",
    baseBranch: p
  };
  let h = {
    ...s,
    preserveOutputOnError: !1,
    cwd: n
  }, S = !1, y = await Xe(p, async b => {
    let T = await it(Lt(), b, h);
    if (T.exitCode === 1) S = !0;
    return T;
  });
  if (!y) {
    if (S) return {
      kind: "none"
    };
    for (let b of [ `refs/remotes/origin/${p}`, `refs/heads/${p}` ]) {
      let T = await it(Lt(), [ "--no-optional-locks", "show-ref", "--verify", "--quiet", b ], h);
      if (T.exitCode === 0 || T.exitCode === void 0) return {
        kind: "error",
        reason: "merge_base_failed"
      };
    }
    return {
      kind: "none"
    };
  }
  let w = await it(Lt(), [ "--no-optional-locks", "rev-parse", "HEAD" ], h);
  if (w.code !== 0) return {
    kind: "error",
    reason: "head_rev_parse_failed"
  };
  if (w.stdout.trim() === y) return {
    kind: "head-is-base",
    baseBranch: p
  };
  return {
    kind: "merge-base",
    mergeBase: y,
    baseBranch: p
  };
}

async function hn(e, n, r, o = !1, s) {
  let {stdout: i, code: u} = await it(Lt(), [ "--no-optional-locks", "ls-files", "--others", "--exclude-standard", "--full-name" ], {
    timeout: pNe,
    preserveOutputOnError: !1,
    abortSignal: n,
    ...W(r, s),
    cwd: r
  });
  if (u !== 0) return null;
  let p = i.split(`\n`).filter(T => T !== "" && (s === void 0 || umr(T)));
  if (p.length === 0) return null;
  let h = r ?? E8t(), S = Uje(), y = await Promise.all(p.slice(0, on).map(async T => {
    try {
      let R = await We(G(h, T));
      return {
        filePath: T,
        preSession: Math.max(R.mtimeMs, R.ctimeMs) < S
      };
    } catch {
      return {
        filePath: T,
        preSession: !1
      };
    }
  })), w = y.filter(T => !T.preSession);
  if (o) w.push(...y.filter(T => T.preSession));
  if (w.length === 0) return null;
  let b = new Map;
  for (let {filePath: T, preSession: R} of w.slice(0, e)) {
    let A = T.startsWith('"') ? ce(T) : void 0;
    b.set(T, {
      added: 0,
      removed: 0,
      isBinary: !1,
      isUntracked: !0,
      status: "added",
      ...A !== void 0 && {
        newPath: A
      },
      ...R && {
        preSession: R
      }
    });
  }
  return b;
}

function CMn(e) {
  let n = e.match(/(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/);
  if (!n) return null;
  return {
    filesCount: parseInt(n[1] ?? "0", 10),
    linesAdded: parseInt(n[2] ?? "0", 10),
    linesRemoved: parseInt(n[3] ?? "0", 10)
  };
}

var Sn = 3e3;

function fmr({gitDiffRead: e}) {
  if (!e) return !1;
  if (a.CLAUDE_CODE_REMOTE) return !0;
  return WR() && k("tengu_bridge_child_tool_diff", !0);
}

var yn = 65536;

function mmr(e) {
  return Boolean(a.CLAUDE_CODE_REMOTE) || Buffer.byteLength(e.patch, "utf8") <= yn;
}

async function gmr(e) {
  let n = pr(ue(e));
  if (!n) return null;
  let r = await je(n).catch(() => null);
  if (r === null) return null;
  let o = await He(r);
  if (o === null) return null;
  let s = Ue(o), i = [ ke(), ...a.CLAUDE_CODE_REPO_CHECKOUTS ? TCe().values() : [] ], u = null;
  for (let b of i) {
    let T = await He(b);
    if (T === null) continue;
    if (T === o) {
      u = T;
      break;
    }
    let R = Ue(T);
    if (u === null && R === s) u = R;
  }
  if (u === null) return null;
  let p = {
    gitDir: u,
    workTree: r
  }, h = tn(n, e).split(nn).join("/"), S = MOo(), {code: y} = await fe(p, [ "--no-optional-locks", "ls-files", "--error-unmatch", "--", h ]);
  if (y === 0) {
    let b = await kn(p, n), {stdout: T, code: R} = await fe(p, [ ...pe, ...zNt, b, "--", h ]);
    if (R !== 0) return null;
    if (!T) return null;
    return {
      ...Tn(h, T, "modified"),
      repository: S
    };
  }
  let w = await bn(h, e);
  if (!w) return null;
  return {
    ...w,
    repository: S
  };
}

function Tn(e, n, r) {
  let o = n.split(`\n`), s = [], i = !1, u = 0, p = 0;
  for (let h of o) {
    if (h.startsWith("@@")) i = !0;
    if (i) {
      if (s.push(h), h.startsWith("+") && !h.startsWith("+++")) u++; else if (h.startsWith("-") && !h.startsWith("---")) p++;
    }
  }
  return {
    filename: e,
    status: r,
    additions: u,
    deletions: p,
    changes: u + p,
    patch: s.join(`\n`)
  };
}

async function Xe(e, n) {
  let r = [];
  for (let u of [ `origin/${e}`, e ]) {
    let {stdout: p, code: h} = await n([ "--no-optional-locks", "merge-base", "HEAD", u ]);
    if (h === 0 && p.trim()) r.push(p.trim());
  }
  let [o, s] = r;
  if (!o) return null;
  if (!s || o === s) return o;
  let {code: i} = await n([ "--no-optional-locks", "merge-base", "--is-ancestor", o, s ]);
  return i === 0 ? s : o;
}

async function He(e) {
  let n = await V5(e);
  return n === null ? null : je(n).catch(() => null);
}

function Ue(e) {
  let n = ue(e), r = ue(n);
  return ie(e) !== ".git" && ie(n) === "worktrees" && ie(r).endsWith(".git") ? r : e;
}

function fe({gitDir: e, workTree: n}, r) {
  return ft(Lt(), [ `--git-dir=${e}`, `--work-tree=${n}`, ...r ], {
    cwd: n,
    timeout: Sn,
    env: As()
  });
}

function Qe(e) {
  let n = Qfr(e), r = (n !== void 0 ? ve().get(n) : void 0) || a.CLAUDE_CODE_BASE_REF;
  if (!r) return;
  return r.startsWith("-") ? null : r;
}

async function kn(e, n) {
  let r = Qe(n);
  function o(u) {
    return fe(e, u);
  }
  if (r === void 0) {
    let u = await rx();
    if (u.startsWith("-")) return "HEAD";
    return await Xe(u, o) ?? "HEAD";
  }
  let {stdout: s, code: i} = await o([ "--no-optional-locks", "merge-base", "HEAD", r ?? "HEAD" ]);
  if (i === 0 && s.trim()) return s.trim();
  return "HEAD";
}

async function bn(e, n) {
  try {
    if (!await qqn(n, lmr)) return null;
    let o = (await en(n, "utf-8")).split(`\n`);
    if (o.length > 0 && o.at(-1) === "") o.pop();
    let s = o.length, i = o.map(p => `+${p}`).join(`\n`), u = `@@ -0,0 +1,${s} @@\n${i}`;
    return {
      filename: e,
      status: "added",
      additions: s,
      deletions: 0,
      changes: s,
      patch: u
    };
  } catch {
    return null;
  }
}

var _n = [ Fi, Ac ];

function bmr(e) {
  return Mpe({
    name: e,
    source: `${e}@${Fi}`
  }).some(n => {
    let r = $Ce(n);
    return r !== void 0 && r.status().kind === "live" && _n.some(o => r.args.pluginStorageId === `${n}@${o}`);
  });
}

function xMn() {
  return !Dt() && mk(lbe)?.isAvailable?.() === !0 && Mz().enabled.some(e => e.name === lbe) && bmr(lbe);
}

function mNe() {
  return !k("tengu_jazzy_ripple", !1);
}

var wn = 200, me = 100, et = "tengu_memoized_turtle", tt = 3600;

function hmr() {
  return a.CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION ?? wn;
}

function nt({refillsByDefault: e}) {
  let n = a.CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR;
  if (n !== void 0) return n;
  if (!e) return 0;
  let {getFeatureValue_CACHED_MAY_BE_STALE: r} = import.meta.require("./chunk-qt993hka.js"), o = r(et, me), s = typeof o === "string" && /^\d+$/.test(o) ? Number(o) : o;
  if (typeof s === "number" && Number.isInteger(s) && s >= 0 && s <= tt) return s;
  return t(`WebSearch budget: ignoring the served ${et} value ${_(o)} (not an integer from 0 to ${tt}); using ${me} refills per hour`, {
    level: "warn"
  }), me;
}

var ge = 36e5;

function rt({refillsByDefault: e, now: n = () => Date.now()}) {
  let r = 0, o = 0, s = n(), i = nt({
    refillsByDefault: e
  });
  function u() {
    let p = n(), h = nt({
      refillsByDefault: e
    }), S = Math.min(h, i);
    i = h;
    let y = Math.max(0, p - s);
    if (s = p, r === 0) {
      o = 0;
      return;
    }
    o += y * S;
    let w = Math.floor(o / ge);
    if (w >= r) {
      r = 0, o = 0;
      return;
    }
    r -= w, o -= w * ge;
  }
  return {
    tryConsume() {
      if (u(), r >= hmr()) return !1;
      return r++, !0;
    },
    msUntilNextCall() {
      u();
      let p = r - hmr();
      if (p < 0) return 0;
      if (i === 0) return 1 / 0;
      let h = (p + 1) * ge - o;
      return Math.max(1, Math.ceil(h / i));
    },
    refillsPerHour() {
      return i;
    }
  };
}

var Xqe = [], Rn = new Set, YCt = {
  messages: Xqe,
  inProgressToolUseIDs: Rn
};

function ymr(e, n, r) {
  let o = e[n] ?? YCt, s = o.inProgressToolUseIDs, i;
  switch (r.action) {
   case "add":
    {
      i = new Set(s);
      for (let u of r.ids) i.add(u);
      break;
    }

   case "remove":
    {
      i = new Set(s);
      for (let u of r.ids) i.delete(u);
      if (i.size === s.size) return e;
      break;
    }

   case "clear":
    if (s.size === 0) return e;
    i = new Set;
    break;

   default:
    return e;
  }
  return {
    ...e,
    [n]: {
      ...o,
      inProgressToolUseIDs: i
    }
  };
}

var XCt = 3e3, sP = 3e4, jst = 3e4;

function C8t(e, n) {
  for (let r of Object.values(e)) if (r.id !== n && (r.type === "in_process_teammate" || r.type === "local_agent" && r.agentType !== "main-session") && !qs(r.status) && !r.isIdle) return !0;
  return !1;
}

function Fg(e, n, {refillWebSearchBudgetByDefault: r = !1} = {}) {
  let o;
  return {
    register(s) {
      Pn(s, n);
    },
    update(s, i) {
      An(s, n, i);
    },
    updateTranscript(s, i) {
      n(u => {
        let p = B(u.transcripts, s) ?? YCt, h = i(p);
        if (h === p) return u;
        return {
          ...u,
          transcripts: {
            ...u.transcripts,
            [s]: h
          }
        };
      });
    },
    getTranscript(s) {
      return B(e().transcripts, s);
    },
    remove(s) {
      Vn().taskEvicted.emit(s), n(i => {
        if (!Object.hasOwn(i.tasks, s)) return i;
        let {[s]: u, ...p} = i.tasks, h = i.transcripts ?? {}, {[s]: S, ...y} = h;
        return {
          ...i,
          tasks: p,
          transcripts: s in h ? y : h
        };
      });
    },
    evictTerminal(s) {
      Cn(s, n);
    },
    applyOffsetsAndEvict(s, i) {
      In(n, s, i);
    },
    get(s) {
      return B(e().tasks, s);
    },
    all() {
      return e().tasks;
    },
    getWebSearchBudget() {
      return o ??= rt({
        refillsByDefault: r
      });
    },
    resetWebSearchBudget() {
      o = void 0;
    },
    takeConcurrencySlot() {
      n(i => ({
        ...i,
        runningSubagents: i.runningSubagents + 1
      }));
      let s = !1;
      return () => {
        if (s) return;
        s = !0, n(i => {
          let u = Math.max(0, i.runningSubagents - 1);
          if (u === i.runningSubagents) return i;
          return {
            ...i,
            runningSubagents: u
          };
        });
      };
    },
    getConcurrentSubagents() {
      return e().runningSubagents;
    }
  };
}

function An(e, n, r) {
  let o = null, s = null, i = !1;
  using u = OPs();
  if (n(p => {
    let h = B(p.tasks, e);
    if (!h) return p;
    let S = r(h);
    if (S === h) return p;
    if (o = En(h, S), i = Uu(S), !qs(h.status) && qs(S.status)) s = {
      status: S.status === "completed" ? "completed" : S.status === "failed" ? "failed" : "stopped",
      opts: {
        toolUseId: S.toolUseId,
        summary: S.terminal?.summary ?? S.description,
        failureKind: nzn(S.terminal),
        outputFile: "webFetchSavedFiles" in S && S.webFetchSavedFiles !== void 0 ? void 0 : S.terminal?.output_file ?? S.outputFile,
        usage: S.terminal?.usage,
        resourceLinks: S.terminal?.resource_links,
        handback: S.terminal?.handback,
        handbackReport: S.terminal?.handback_report,
        skipTranscript: S.skipTranscript,
        ambient: Q3(S)
      }
    };
    return {
      ...p,
      tasks: {
        ...p.tasks,
        [e]: S
      }
    };
  }), s === null) u.release();
  if (o !== null && !i) {
    let p = {
      type: "system",
      subtype: "task_updated",
      task_id: e,
      run_id: j1(e),
      patch: o
    };
    ui(Yut(p, s?.opts?.failureKind));
  }
  if (s !== null && !i) ya(e, s.status, s.opts);
}

function En(e, n) {
  let r = {};
  if (n.status !== e.status) r.status = n.status;
  if (n.description !== e.description) r.description = n.description;
  if (n.endTime !== e.endTime) r.end_time = n.endTime;
  if (n.totalPausedMs !== e.totalPausedMs) r.total_paused_ms = n.totalPausedMs;
  let o = "error" in e ? e.error : void 0, s = "error" in n ? n.error : void 0;
  if (s !== o && s !== void 0) r.error = s;
  let i = "isBackgrounded" in e ? e.isBackgrounded : void 0, u = "isBackgrounded" in n ? n.isBackgrounded : void 0;
  if (u !== i && u !== void 0) r.is_backgrounded = u;
  return Object.keys(r).length > 0 ? r : null;
}

function vn(e) {
  if (e.type === "local_bash") return "agentId" in e && e.agentId !== void 0 ? !0 : void 0;
  return;
}

function Pn(e, n) {
  let o = qvo(e.id) && !qs(e.status);
  if (o || !Vn().runIds.has(e.id)) rzn(e.id);
  let s = !1, i = e, u;
  if (n(p => {
    let h = p.tasks[e.id];
    s = h !== void 0;
    let S = h && "retain" in h ? {
      ...e,
      retain: h.retain,
      startTime: h.startTime,
      diskLoaded: h.diskLoaded,
      pendingMessages: h.pendingMessages,
      keepaliveReasons: h.keepaliveReasons,
      ownerAgentId: h.ownerAgentId,
      parentAgentId: h.parentAgentId,
      ...h.spawnDepth !== void 0 && {
        spawnDepth: h.spawnDepth
      },
      ...h.isObserver !== void 0 && {
        isObserver: h.isObserver
      },
      ...h.forkedSkillName !== void 0 && {
        forkedSkillName: h.forkedSkillName
      },
      ...h.userStopCount !== void 0 && {
        userStopCount: h.userStopCount
      },
      ...h.handbackRecipient !== void 0 && {
        handbackRecipient: h.handbackRecipient
      },
      ...h.ownerCanContinueAgents !== void 0 && {
        ownerCanContinueAgents: h.ownerCanContinueAgents
      },
      ...h.handbackReport !== void 0 && {
        handbackReport: h.handbackReport
      },
      ...h.webFetchSavedFiles !== void 0 && {
        webFetchSavedFiles: h.webFetchSavedFiles
      },
      ...h.spawnedSubagent !== void 0 && {
        spawnedSubagent: h.spawnedSubagent
      },
      ..."progress" in h && h.progress !== void 0 && {
        progress: h.progress
      }
    } : e;
    return i = S, u = omr(S, p.tasks), {
      ...p,
      tasks: {
        ...p.tasks,
        [e.id]: S
      }
    };
  }), s && !o) return;
  if (Uu(e)) return;
  ui({
    type: "system",
    subtype: "task_started",
    task_id: e.id,
    run_id: j1(e.id),
    owned_by_subagent: vn(e),
    tool_use_id: e.toolUseId,
    description: e.description,
    subagent_type: WCt(e),
    is_backgrounded: "isBackgrounded" in i ? i.isBackgrounded : void 0,
    ...smr(i) && {
      awaited: !0
    },
    spawn_depth: "spawnDepth" in i ? i.spawnDepth : void 0,
    parent_task_id: u,
    task_type: e.type,
    workflow_name: "workflowName" in e ? e.workflowName : void 0,
    prompt: "prompt" in e ? e.prompt : void 0,
    skip_transcript: e.skipTranscript,
    ...Q3(e) && {
      ambient: !0
    }
  });
}

function Cn(e, n) {
  let r = !1;
  if (n(o => {
    let s = B(o.tasks, e);
    if (!s) return o;
    if (!qs(s.status)) return o;
    if (!s.notified) return o;
    if ("retain" in s && (s.evictAfter ?? 1 / 0) > Date.now()) return o;
    if ("retain" in s && (s.keepaliveReasons?.size ?? 0) > 0) return o;
    if (s.type === "local_workflow" && ((s.evictAfter ?? 0) > Date.now() || !Zw(e))) return o;
    if (s.type === "mcp_task" && (s.endTime ?? 0) + sP > Date.now()) return o;
    r = !0;
    let {[e]: i, ...u} = o.tasks, p = o.transcripts ?? {}, {[e]: h, ...S} = p;
    return {
      ...o,
      tasks: u,
      transcripts: e in p ? S : p
    };
  }), r) Vn().taskEvicted.emit(e);
}

function Z_e(e) {
  let n = e.tasks ?? {};
  return Object.values(n).filter(r => r.status === "running");
}

async function Wds(e) {
  let n = [], r = {}, o = [];
  for (let s of Object.values(e)) {
    if (s.notified) switch (s.status) {
     case "completed":
     case "failed":
     case "killed":
      o.push(s.id);
      continue;

     case "pending":
      continue;

     case "running":
      break;
    }
    if (s.status === "running" && s.outputFile !== void 0) {
      let i = await jmo(s.id, s.outputOffset);
      if (i.content) r[s.id] = i.newOffset;
    }
  }
  return {
    attachments: n,
    updatedTaskOffsets: r,
    evictedTaskIds: o
  };
}

function In(e, n, r) {
  let o = Object.keys(n);
  if (o.length === 0 && r.length === 0) return;
  let s = [];
  e(i => {
    let u = !1, p = {
      ...i.tasks
    };
    for (let S of o) {
      let y = p[S];
      if (y?.status === "running") p[S] = {
        ...y,
        outputOffset: n[S]
      }, u = !0;
    }
    for (let S of r) {
      let y = p[S];
      if (!y || !qs(y.status) || !y.notified) continue;
      if ("retain" in y && (y.evictAfter ?? 1 / 0) > Date.now()) continue;
      if ("retain" in y && (y.keepaliveReasons?.size ?? 0) > 0) continue;
      if (y.type === "local_workflow" && ((y.evictAfter ?? 0) > Date.now() || !Zw(S))) continue;
      if (y.type === "mcp_task" && (y.endTime ?? 0) + sP > Date.now()) continue;
      delete p[S], qvo(S), s.push(S), u = !0;
    }
    if (!u) return i;
    let h;
    for (let S of s) if (i.transcripts && S in i.transcripts) h ??= {
      ...i.transcripts
    }, delete h[S];
    return {
      ...i,
      tasks: p,
      ...h && {
        transcripts: h
      }
    };
  });
  for (let i of s) Vn().taskEvicted.emit(i);
}

function Mn(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent";
}

function Koo(e, n) {
  return Mn(e) && e.status === "running" && !e.isBackgrounded && e.parentAgentId === n;
}

function R8t(e) {
  return Koo(e, void 0);
}

function zds(e) {
  return R8t(e) && e.autoBackgroundArmed === !0 && e.directCall === !0;
}

function fNe(e, {userInitiated: n = !1} = {}) {
  if (!Mn(e)) return !1;
  if (n) return !0;
  return e.stoppedByUser !== !0 && (e.status === "running" || e.status === "completed");
}

function _mr(e) {
  return Mn(e) ? e.userStopCount ?? 0 : 0;
}

function JCt(e, n) {
  if (!Mn(e)) return !1;
  let r = _mr(e);
  return (n ?? e.pendingMessages).some(o => o.userInitiatedAt === r);
}

var qoo = "kill-unsettled";

function Yoo(e) {
  return !1;
}

function xCe(e) {
  let {parkedTeardowns: n, mainThreadContexts: r} = Vn();
  r.delete(e);
  let o = n.get(e);
  if (o !== void 0) n.delete(e), o();
}

function QCt(e, n) {
  let r = n.get(e);
  if (Mn(r) && YA(r).size === 0 && qs(r.status) && r.resuming !== !0 && r.finalizing !== !0) xCe(e);
}

function YA(e) {
  return e.keepaliveReasons ?? new Set;
}

function YM(e, n, r) {
  if (!e) return;
  r.update(e, o => {
    if (!Mn(o) || YA(o).has(n)) return o;
    return {
      ...o,
      keepaliveReasons: new Set(YA(o)).add(n)
    };
  });
}

function lO(e, n, r) {
  if (!e) return;
  let o = r.get(e), s = Mn(o) && YA(o).has(n);
  if (r.update(e, i => {
    if (!Mn(i) || !YA(i).has(n)) return i;
    let u = new Set(YA(i));
    u.delete(n);
    let p = u.size === 0 && qs(i.status) && !i.retain;
    return {
      ...i,
      keepaliveReasons: u,
      ...p && i.evictAfter === void 0 && {
        evictAfter: Date.now() + sP
      }
    };
  }), s) QCt(e, r);
}

function he(e) {
  let n = Hp(e) ? e : void 0, r = !n && Mn(e) ? e : void 0;
  return {
    teammate: n,
    localAgent: r
  };
}

function x8t(e, n) {
  return he(e ? n[e] : void 0);
}

function Gds(e) {
  let {teammate: n, localAgent: r} = he(e);
  return (n ?? r)?.id ?? Ze();
}

function Vds({viewedTask: e, transcript: n, mainIsBusy: r, mainConversationId: o}) {
  let {teammate: s, localAgent: i} = he(e), u = s ?? i;
  return {
    task: u,
    isMain: !u,
    isTeammate: !!s,
    messages: n.messages,
    inProgressToolUseIDs: n.inProgressToolUseIDs,
    conversationKey: u ? u.id : o,
    isLoading: u ? u.status === "running" && !u.isIdle : r
  };
}

import { isAbsolute as ot, resolve as st } from "path";

import { pathToFileURL as On } from "url";

function mF(e) {
  try {
    let n = kT(e), r = kT(st(n));
    if (ul(n) || Un(r) || Nit(n) || Nit(r)) return null;
    let o = On(n);
    return o.hostname !== "" || xao(o.href) ? null : o.href;
  } catch {
    return null;
  }
}

function RMn(e) {
  let n = /^file:/i.test(e);
  if (!n) {
    if (!(e.startsWith("/") && !Un(e))) return e;
  }
  let r = n ? e.slice(5) : e;
  if (r.startsWith("//")) {
    if (r = r.slice(2), r === "localhost") r = "/"; else if (r.startsWith("localhost/")) r = r.slice(9);
  }
  let o = r.search(/[#?]/), s = o === -1 ? "" : r.slice(o), i = o === -1 ? r : r.slice(0, o);
  if (i === "") return null;
  try {
    i = decodeURIComponent(i);
  } catch {}
  i = Ln(i);
  let u = ot(i) ? i : st(le(), i), p = mF(u);
  if (p === null) return null;
  let h = p + s;
  return xao(h) ? null : h;
}

function Ln(e, n = ot) {
  if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(e) && n(e.slice(1))) return e.slice(1);
  return e;
}

export { Xfr, Jfr, qk, fF, SMn, Dst, Zw, Gqe, BCt, Pds, wMn, Ids, uNe, Lst, TCe, vMn, Qfr, Ods, Woo, EMn, kMn, Nst, TMn, Zfr, Hp, Mds, zoo, emr, tmr, nmr, Vqe, Hds, Z4, rmr, ACe, Uu, jCt, omr, KW, rh, smr, y8t, $st, Goo, CCe, Q3, WCt, bce, zCt, imr, Kqe, Fst, Ust, Wre, qM, J_e, mV, Dds, Lds, Nds, _8t, Q_e, b8t, amr, S8t, GCt, qB, pNe, lmr, w8t, AMn, v8t, VCt, $ds, Bst, dmr, E8t, k8t, cmr, umr, pmr, RCe, Voo, CMn, fmr, mmr, gmr, KCt, qqe, Yqe, qCt, Fds, Uds, Bds, jds, T8t, A8t, mF, RMn, hmr, Xqe, YCt, ymr, XCt, sP, jst, C8t, Fg, Z_e, Wds, Mn, Koo, R8t, zds, fNe, _mr, JCt, qoo, Yoo, xCe, QCt, YA, YM, lO, bmr, xMn, mNe, x8t, Gds, Vds };
