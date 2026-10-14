// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, Ir } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { aMo } from "./chunk-9yajep3y.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { kr, SA } from "./chunk-cqgvwwgb.js";

import { Bd, Ce, ce, ia, Qm } from "./chunk-xywp7esx.js";

import { Cd } from "./chunk-yxennhe9.js";

import { PMr } from "./chunk-r276nwd3.js";

import { qM, mV, AMn, VCt, $ds, dmr, T8t, mF, xMn, mNe } from "./chunk-bkx9v5fh.js";

import { t3e } from "./chunk-b47tzzqx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { HI, zv } from "./chunk-qvbrx5kg.js";

import { V } from "./chunk-jb3h1y0s.js";

import { us } from "./chunk-wpjx0bxn.js";

import { n, zt } from "./chunk-3vw306fv.js";

import { id } from "./chunk-0ypdmr94.js";

import { e } from "./chunk-xx3xgkvz.js";

import { ZQ, uit } from "./chunk-w21nffj3.js";

import { Kt, Ae, P, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { S } from "./chunk-m8ez8fhk.js";

import { resolve as kt, sep as be, win32 as ke } from "path";

F();

var j = () => ({
  isSidebarOn: mNe(),
  isOwnedByPlugin: xMn()
});

function WFr() {
  let [t, r] = y(j), o = id(), s = V(i => i.panelFileView !== null);
  return P(() => {
    let i = () => r(p => {
      let D = j();
      return p.isSidebarOn === D.isSidebarOn && p.isOwnedByPlugin === D.isOwnedByPlugin ? p : D;
    });
    i();
    let a = Bd(i), u = T8t(i);
    return () => {
      a(), u();
    };
  }, [ o ]), t.isSidebarOn && (s || !t.isOwnedByPlugin);
}

F();

var q = 400, s8n = 150, de = 2e3, v = {
  hunks: new Map,
  skippedLarge: new Set
};

async function z(t, r, o) {
  try {
    let s = await AMn(t, o, r);
    if (o?.aborted) return null;
    if (s === null) return f("repl_diff_read", "git_diff_failed"), null;
    let i = s.stats.filesCount === 0 ? v : await $ds(o, VCt(s));
    if (o?.aborted) return null;
    if (i === null) f("repl_diff_read", "git_hunks_failed"); else g("repl_diff_read");
    return {
      result: s,
      hunks: i
    };
  } catch (s) {
    if (o?.aborted) return null;
    return d(s), f("repl_diff_read", "git_diff_threw"), null;
  }
}

class X {
  #e=null;
  set(t, r, o, s) {
    this.#e = {
      baseMode: t,
      refreshKey: r,
      round: o,
      at: s
    };
  }
  take(t, r) {
    let o = this.#e;
    if (o === null) return;
    if (r - o.at > de) {
      this.#e = null;
      return;
    }
    if (o.baseMode !== t) return;
    return this.#e = null, {
      round: o.round,
      refreshKey: o.refreshKey
    };
  }
  get isPrimed() {
    return this.#e !== null;
  }
}

var Y = new K(() => new X);

async function Qfn(t, r, o, s) {
  let i = await z(t, r, s);
  if (s?.aborted) return;
  Y.of(t).set(r, o, i && {
    result: i.result,
    baseMode: r,
    hunks: i.hunks ?? v
  }, Date.now());
}

function i8n(t = 0, r = !0, o = "auto") {
  let i = Ae(zv)?.setTimeout ?? HI, a = us(), [u] = y(() => r ? Y.of(a).take(o, Date.now()) : void 0), [p, D] = y(u?.round ?? null), [k, G] = y(u === void 0), U = R(u !== void 0), N = R(u !== void 0 && u.refreshKey === t), [ae, fe] = y(0);
  return P(() => aMo(() => fe(_ => _ + 1)), []), P(() => {
    if (!r) return;
    if (N.current) {
      N.current = !1;
      return;
    }
    let _ = !1, T = new AbortController;
    async function I() {
      let b = await z(a, o, T.signal);
      if (_) return;
      if (b !== null) {
        let h = VCt(b.result);
        D(A => ({
          result: b.result,
          baseMode: o,
          hunks: b.hunks ?? (A !== null && VCt(A.result) === h ? A.hunks : v)
        }));
      }
      U.current = !0, G(!1);
    }
    let x = i(I, U.current || t !== 0 ? s8n : 0);
    return () => {
      _ = !0, x(), T.abort();
    };
  }, [ t, r, ae, o, a ]), Z(() => {
    if (!p) return {
      stats: null,
      files: [],
      hunks: new Map,
      loading: r && k,
      source: {
        kind: "working-tree"
      },
      baseMode: o
    };
    let {stats: _, perFileStats: T, source: I} = p.result, x = [];
    for (let [b, h] of T) {
      let A = h.isUntracked, W = p.hunks.skippedLarge.has(b), le = h.added + h.removed, ue = !W && !h.isBinary && le > q;
      x.push({
        path: b,
        linesAdded: h.added,
        linesRemoved: h.removed,
        isBinary: h.isBinary,
        isLargeFile: W,
        isTruncated: ue,
        isUntracked: A,
        preSession: h.preSession
      });
    }
    return x.sort((b, h) => b.path.localeCompare(h.path)), {
      stats: _,
      files: x,
      hunks: p.hunks.hunks,
      loading: !1,
      source: I,
      baseMode: p.baseMode,
      noCommits: p.result.noCommits
    };
  }, [ p, k, r, o ]);
}

function B(t) {
  return {
    stats: null,
    files: [],
    hunks: new Map,
    loading: t,
    source: {
      kind: "working-tree"
    },
    baseMode: "auto"
  };
}

function pe(t) {
  let r = new Set(t.skippedLarge), o = new Set(t.restricted), s = t.perFileStats.map(i => {
    let a = r.has(i.path);
    return {
      path: i.path,
      linesAdded: i.added,
      linesRemoved: i.removed,
      isBinary: i.isBinary,
      isLargeFile: a,
      isTruncated: !a && !i.isBinary && i.added + i.removed > q,
      isUntracked: i.isUntracked,
      isRestricted: o.has(i.path)
    };
  }).sort((i, a) => i.path.localeCompare(a.path));
  return {
    stats: t.stats,
    files: s,
    hunks: new Map(t.hunks.map(i => [ i.path, i.hunks ])),
    loading: !1,
    source: t.source,
    baseMode: "branch-point"
  };
}

function me(t) {
  let [r, o] = y(() => ({
    data: B(t),
    notice: null
  }));
  return P(() => {
    if (!t) return;
    let s = kr();
    if (!s || !SA("controlChannel")) {
      f("remote_workspace_diff_fetch", "no_channel"), o({
        data: B(!1),
        notice: "Workspace changes aren't available over this connection \u2014 showing per-turn changes only"
      });
      return;
    }
    let i = !1;
    return s.sendControlRequest({
      subtype: "get_workspace_diff"
    }).then(a => {
      if (i) return;
      g("remote_workspace_diff_fetch"), o({
        data: a.diff ? pe(a.diff) : B(!1),
        notice: null
      });
    }).catch(a => {
      if (i) return;
      let u = l(a), p = u.includes("Unsupported control request subtype") ? "unsupported_subtype" : mV(a);
      if (p === "unsupported_subtype") f("remote_workspace_diff_fetch", p); else m("remote_workspace_diff_fetch", p);
      o({
        data: B(!1),
        notice: p === "unsupported_subtype" ? "The remote workspace is running an older Claude Code version that cannot report workspace changes \u2014 showing per-turn changes only" : a instanceof qM ? "Timed out fetching workspace changes \u2014 showing per-turn changes only" : p === "disconnected" || p === "not_connected" ? "Lost the connection to the cloud session \u2014 showing per-turn changes only" : p === "not_delivered" ? "Couldn't reach the cloud session \u2014 showing per-turn changes only" : `Couldn't fetch workspace changes: ${u}`
      });
    }), () => {
      i = !0;
    };
  }, [ t ]), r;
}

function NFr(t) {
  let r = i8n(0, !t), o = me(t);
  return t ? o : {
    data: r,
    notice: null
  };
}

class J {
  lastLoggedSessionId=null;
  autoOpenPending=!1;
}

var jBt = new K(() => new J), Hjo = new K(() => ({
  lastLoggedSessionId: null
})), Zfn = new K(() => Ue({
  cycled: !1
}, t => {
  t.cycled = !1;
}));

var he = "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository", $Fr = "The diff panel isn\u2019t available right now \u2014 run /diff again to see your changes";

function FFr(t) {
  jBt.of(t).autoOpenPending = !0;
}

function Djo(t) {
  let r = jBt.of(t), o = r.autoOpenPending;
  return r.autoOpenPending = !1, o;
}

function Q(t) {
  jBt.of(t).autoOpenPending = !1;
}

function emn() {
  return dmr();
}

function a8n({enabled: t, fullscreen: r, columns: o, isThinClient: s, isMainFocused: i, hasGitRepo: a}) {
  return t && r && !s && i && o >= ZQ && a;
}

function UFr(t) {
  let r = ce().diffSidebarOpen;
  if (r === !1) return !1;
  return t >= (r === !0 ? ZQ : uit) && emn();
}

function ee(t, r, o, s) {
  let i = o === "diff" ? "convo" : "diff";
  Q(t), r(u => u.replTab === i && u.panelFileView === null ? u : {
    ...u,
    replTab: i,
    panelFileView: null
  });
  let a = i === "diff";
  if (ce().diffSidebarOpen !== a) Ce(u => ({
    ...u,
    diffSidebarOpen: a
  }), s);
  return g("repl_tab_switch", {
    tab: c(i)
  }), i;
}

async function ge(t, r, o, s, i) {
  if (await Qfn(t, WBt(), s), r() === "diff") return;
  ee(t, o, "convo", i);
}

var Se = "Diff panel shown", De = "Diff panel hidden", Ljo = 2e3;

function Njo(t) {
  switch (t.status) {
   case "shown":
    return Se;

   case "hidden":
    return De;

   case "refused":
    return t.text;
  }
}

function tmn({host: t, getReplTab: r, setAppState: o, columns: s, trackSequence: i, storageV5: a}) {
  if (r() === "diff") return ee(t, o, "diff", a), {
    status: "hidden"
  };
  if (!mNe()) return {
    status: "refused",
    reason: "unavailable",
    text: $Fr
  };
  if (!emn()) return {
    status: "refused",
    reason: "no-git",
    text: he
  };
  if (s < ZQ) return {
    status: "refused",
    reason: "too-narrow",
    text: `Resize your terminal to at least ${ZQ} columns to show the diff panel`
  };
  return {
    status: "shown",
    settled: ge(t, r, o, i, a).catch(d)
  };
}

function LMe(t, r) {
  Q(t), r(o => o.replTab === "convo" && o.panelFileView === null ? o : {
    ...o,
    replTab: "convo",
    panelFileView: null
  });
}

function BFr(t, r, o) {
  if (LMe(t, r), ce().diffSidebarOpen !== !1) Ce(s => ({
    ...s,
    diffSidebarOpen: !1
  }), o);
  g("repl_tab_switch", {
    tab: c("convo")
  });
}

var H = [ "session", "uncommitted", "branch" ];

function WBt() {
  let t = ia().diffSidebarBaseMode;
  return t === "uncommitted" || t === "branch" ? t : "session";
}

function jFr(t, r) {
  let o = H[(H.indexOf(t) + 1) % H.length] ?? "session";
  return Qm(s => s.diffSidebarBaseMode === o ? s : {
    ...s,
    diffSidebarBaseMode: o
  }, r), g("repl_diff_base_switch", {
    mode: c(o)
  }), o;
}

function te(t) {
  return t3e(we(t));
}

function we(t) {
  let r = Ir(), o = O() === "windows", s = o ? ke.sep : be, i = D => o ? D.replaceAll("/", s).toLowerCase() : D, a = i(t), u = i(r);
  if (a.length !== t.length || u.length !== r.length) return t;
  if (a === u) return "";
  let p = u.endsWith(s) ? u : u + s;
  return a.startsWith(p) ? t.slice(p.length) : t;
}

F();

import { homedir as oe } from "os";

import { isAbsolute as Re, sep as _e } from "path";

import { isAbsolute as ye, win32 as ne } from "path";

function L(t) {
  if (O() === "windows") return ne.isAbsolute(t) && ne.parse(t).root.length > 1;
  return ye(t);
}

var nmn = Kt(null);

function Fv(t) {
  let a = w(9), {filePath: r, children: o} = t, s = Ae(nmn), i = o ?? r;
  if (M(r) || typeof i === "string" && M(i)) {
    let u;
    if (a[0] === S) u = e(n, {
      dimColor: !0,
      children: PMr
    }), a[0] = u; else u = a[0];
    return u;
  }
  let u;
  if (a[1] !== s || a[2] !== i) u = s !== null && typeof i === "string" ? Cd(i, s) : i, 
  a[1] = s, a[2] = i, a[3] = u; else u = a[3];
  let p = u, D;
  if (a[4] !== r) D = L(r) ? mF(r) : null, a[4] = r, a[5] = D; else D = a[5];
  let k = D, G;
  if (a[6] !== p || a[7] !== k) G = k === null ? e(n, {
    children: p
  }) : e(zt, {
    url: k,
    children: p
  }), a[6] = p, a[7] = k, a[8] = G; else G = a[8];
  return G;
}

function M(t) {
  let r = xe(t);
  return Re(r) ? te(r) : t3e(r);
}

function xe(t) {
  if (t === "~") return oe();
  return t.startsWith("~" + _e) ? oe() + t.slice(1) : t;
}

export { s8n, Qfn, i8n, NFr, jBt, Hjo, Zfn, $Fr, FFr, Djo, emn, a8n, UFr, Ljo, Njo, tmn, LMe, BFr, WBt, jFr, WFr, nmn, Fv };
