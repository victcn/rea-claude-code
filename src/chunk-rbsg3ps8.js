// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Lo, UC, Dy } from "./chunk-3pqddg8f.js";

import { a, bT } from "./chunk-j016gcgm.js";

import { kr, Dt } from "./chunk-cqgvwwgb.js";

import { KH } from "./chunk-46phtgr7.js";

import { fe } from "./chunk-dd98x6x7.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { v5, Ft, wp } from "./chunk-xywp7esx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { pl } from "./chunk-1pxjahnn.js";

import { yr } from "./chunk-7w995nyx.js";

import { s, n } from "./chunk-3vw306fv.js";

import { z$ } from "./chunk-j48zvtwm.js";

import { Ni } from "./chunk-tzmg667a.js";

import { $et } from "./chunk-1sgp7yb5.js";

import { jr } from "./chunk-wpjx0bxn.js";

import { V } from "./chunk-jb3h1y0s.js";

import { _ge } from "./chunk-tvm7tze9.js";

import { e0 } from "./chunk-84yp45y8.js";

import { TJt } from "./chunk-sqb9meyh.js";

import { JCe } from "./chunk-cvdvt5f8.js";

import { CJn } from "./chunk-1j4tzzzk.js";

import { gze, Vjo, Kjo, qjo, Yjo, Xjo, Jjo, Qjo, Zjo, eWo, tWo, nWo, hze, dmn, cmn, rWo } from "./chunk-8ykxysyn.js";

import { cW } from "./chunk-afb3v15j.js";

import { ct } from "./chunk-qk83zz02.js";

import { Ju } from "./chunk-8sjwymxz.js";

import { lke, sWo } from "./chunk-50e6jyy2.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Vr, Hr, P, Z, y, F } from "./chunk-cpyd3eya.js";

import { F1 } from "./chunk-akt0hp0c.js";

import { VHs, yft, Jon, Qon } from "./chunk-g4dysb0v.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

var YFr = {
  memory: void 0,
  load: void 0,
  disk: void 0
}, Mt = Ue({
  value: !1
}, i => {
  i.value = !1;
});

function YBt(i) {
  return;
}

function XFr(i, t, o) {
  if (Oe() !== "firstParty" || !v5() || !JCe()) return;
  let u = cW.of(i);
  return {
    current: () => u.peek(t, o),
    settled: u.read(t, o)
  };
}

function W(i) {
  switch (i) {
   case "connected":
    return [ {
      label: "Cloud sessions",
      value: "GitHub connected"
    } ];

   case "not_connected":
    return [ {
      label: "Cloud sessions",
      value: "Not set up \xb7 /web-setup to connect GitHub"
    } ];

   case "unknown":
   case void 0:
    return [];
  }
}

function Ge(D) {
  return D.mainLoopModel;
}

function He(T) {
  return T.mcp;
}

function Be(G) {
  return G.toolPermissionContext.mode;
}

function We(H) {
  return H.id;
}

function ze(Ve) {
  return Lo(Ve).cwd;
}

function Ke(Xe) {
  return Xe.length > 0;
}

function Ye(qe, B) {
  return [ B > 0 && r(Ju.Row, {
    children: [ e(Q, {
      children: " "
    }), e(Q, {
      children: ""
    }) ]
  }, `gap-${B}`), ...qe.map((i, Qe) => {
    let {label: me, value: Je} = i;
    return r(Ju.Row, {
      children: [ e(Q, {
        children: me !== void 0 ? `${me}:` : ""
      }), e(N, {
        value: Je
      }) ]
    }, `${B}-${Qe}`);
  }) ];
}

function Fe(C, f) {
  return r(s, {
    flexDirection: "row",
    gap: 1,
    paddingX: 1,
    children: [ e(ct, {
      status: "warning"
    }), typeof C === "string" ? e(n, {
      wrap: "wrap",
      children: C
    }) : C ]
  }, f);
}

var JFr = " (details in the --debug log)";

function _8n({sessionId: i, cwd: t, accountStatus: o, machineStatus: u, webSetupStatus: d}) {
  let m = a.CLAUDE_CODE_TMUX_SESSION, l = lke(), C = sWo(), f = kr()?.sessionId, g = e0(i) ?? e(n, {
    dimColor: !0,
    children: "/rename to add a name"
  }), h = Dy(), c = "";
  if (h.length > 0) {
    let v = h.map(M => M.kind === "plugin" ? `plugin:${M.name}@${M.marketplace}` : `server:${M.name}`).join(", "), p = Oe() !== "firstParty" ? "not available on third-party providers" : !z$() ? "not currently available" : $et(fe("policySettings")) ? "blocked by org policy" : void 0;
    c = p ? `Configured but not active (${p}): ${v}` : `Listening for messages from ${v}`;
  }
  return [ {
    label: "Version",
    value: `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION}${F1()}`
  }, ...[], {
    label: "Session name",
    value: g
  }, {
    label: f === i ? "Cloud session ID" : "Session ID",
    value: i
  }, ...f !== void 0 && f !== i ? [ {
    label: "Cloud session ID",
    value: f
  } ] : [], {
    label: "Session kind",
    value: !Ft() ? "interactive" : wp() ? "background job \xb7 unattended" : "background job \xb7 attached"
  }, ...m ? [ {
    label: "tmux session",
    value: m
  } ] : [], ...c ? [ {
    label: "Channels",
    value: c
  } ] : [], ...Ni() && bT.CLAUDE_CODE_MESSAGING_SOCKET ? [ {
    label: "Peer address",
    value: `uds:${bT.CLAUDE_CODE_MESSAGING_SOCKET}`
  } ] : [], ...Ni() && !bT.CLAUDE_CODE_MESSAGING_SOCKET && CJn() !== void 0 ? [ {
    label: "Peer address",
    value: `unavailable \u2014 ${CJn()}${JFr}`
  } ] : [], ...UC() ? [ {
    label: "Memory",
    value: TJt() ? "Paused for this session \xb7 /pause-memory to resume" : "Paused for this session \xb7 see /account-memory"
  } ] : [], ...[], {
    label: "cwd",
    value: t
  }, ...dmn(o), ...W(d), ...pe(), ...cmn() ];
}

function pe() {
  let i = KH();
  if (i.length === 0) return [];
  return [ {
    label: "Organization configuration",
    value: Qon(i).map(t => Jon(t) ? VHs(t) : t)
  }, ...i.includes("hipaa") ? [ {
    value: e(n, {
      dimColor: !0,
      children: yft
    })
  } ] : [] ];
}

function b8n({mainLoopModel: i, mcp: t, theme: o, ideInstallationStatus: u, permissionMode: d}) {
  return [ {
    label: "Model",
    value: rWo(i)
  }, ...qjo(), ...Dt() ? [] : [ ...Yjo(t.clients, u, o), ...Xjo(t.clients, o), ...Kjo(), ...Vjo() ], ...Qjo(), ...Zjo(d) ];
}

async function QFr(i, t, o) {
  return (await Promise.all([ eWo(), nWo(t), tWo(t), Dt() ? [] : Jjo(i, t, o) ])).flat();
}

function N(i) {
  let o = w(8), {value: t} = i;
  if (Array.isArray(t)) {
    let u;
    if (o[0] !== t) {
      let d;
      if (o[2] !== t.length) d = (m, l) => r(n, {
        children: [ m, l < t.length - 1 ? "," : "" ]
      }, l), o[2] = t.length, o[3] = d; else d = o[3];
      u = t.map(d);
      o[0] = t, o[1] = u;
    } else u = o[1];
    let d;
    if (o[4] !== u) d = e(s, {
      flexWrap: "wrap",
      columnGap: 1,
      flexShrink: 99,
      children: u
    }), o[4] = u, o[5] = d; else d = o[5];
    return d;
  }
  if (typeof t === "string") {
    let u;
    if (o[6] !== t) u = e(n, {
      children: t
    }), o[6] = t, o[7] = u; else u = o[7];
    return u;
  }
  return t;
}

function S8n(i) {
  let l = w(26), {credentials: t, ideInstallationStatus: o, diagnosticsPromise: u, getWebSetupRead: d, getMachineStatusRead: m} = i, C;
  if (l[0] !== t) C = () => hze(t), l[0] = t, l[1] = C; else C = l[1];
  let [f] = y(C), E;
  if (l[2] !== m) E = () => m(), l[2] = m, l[3] = E; else E = l[3];
  let [g] = y(E), h;
  if (l[4] !== d) h = () => d(), l[4] = d, l[5] = h; else h = l[5];
  let [c] = y(h), v;
  if (l[6] !== c) v = () => c?.current(), l[6] = c, l[7] = v; else v = l[7];
  let [p, M] = y(v), x, A;
  if (l[8] !== c) x = () => {
    let L = !0;
    return c?.settled.then(() => {
      if (L) M(c.current());
    }), () => {
      L = !1;
    };
  }, A = [ c ], l[8] = c, l[9] = x, l[10] = A; else x = l[9], A = l[10];
  P(x, A);
  let b = pl() ? 1 : void 0, R;
  if (l[11] !== f || l[12] !== o || l[13] !== g || l[14] !== p) R = e(Vr, {
    fallback: null,
    children: e(j, {
      ideInstallationStatus: o,
      accountStatusRead: f,
      machineStatusRead: g,
      webSetupStatus: p
    })
  }), l[11] = f, l[12] = o, l[13] = g, l[14] = p, l[15] = R; else R = l[15];
  let D;
  if (l[16] !== u) D = e(Vr, {
    fallback: null,
    children: e(U, {
      promise: u
    })
  }), l[16] = u, l[17] = D; else D = l[17];
  let T;
  if (l[18] !== b || l[19] !== R || l[20] !== D) T = r(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: b,
    children: [ R, D ]
  }), l[18] = b, l[19] = R, l[20] = D, l[21] = T; else T = l[21];
  let G;
  if (l[22] === S) G = e(n, {
    dimColor: !0,
    children: e(pt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel"
    })
  }), l[22] = G; else G = l[22];
  let H;
  if (l[23] !== b || l[24] !== T) H = r(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: b,
    children: [ T, G ]
  }), l[23] = b, l[24] = T, l[25] = H; else H = l[25];
  return H;
}

function j(i) {
  let p = w(17), {ideInstallationStatus: t, accountStatusRead: o, machineStatusRead: u, webSetupStatus: d} = i, m = o === void 0 ? void 0 : Hr(o), l = u === void 0 ? void 0 : Hr(u), C = V(Ge), f = _ge() ?? C, E = V(He), g = V(Be), [h] = yr(), c = jr(We), v = jr(ze), M;
  if (p[0] !== m || p[1] !== v || p[2] !== t || p[3] !== l || p[4] !== f || p[5] !== E || p[6] !== g || p[7] !== c || p[8] !== h || p[9] !== d) M = gze([ _8n({
    sessionId: c,
    cwd: v,
    accountStatus: m,
    machineStatus: l,
    webSetupStatus: d
  }), b8n({
    mainLoopModel: f,
    mcp: E,
    theme: h,
    ideInstallationStatus: t,
    permissionMode: g
  }) ]), p[0] = m, p[1] = v, p[2] = t, p[3] = l, p[4] = f, p[5] = E, p[6] = g, p[7] = c, 
  p[8] = h, p[9] = d, p[10] = M; else M = p[10];
  let x = M, A;
  if (p[11] === S) A = Dt() && r(n, {
    dimColor: !0,
    children: [ "Model and cwd are the", " ", kr()?.sessionId ? "cloud" : "remote", " session's; the other rows describe this terminal. /mcp asks the session too." ]
  }), p[11] = A; else A = p[11];
  let L;
  if (p[12] === S) L = [ {
    bold: !0
  }, {
    width: "fill"
  } ], p[12] = L; else L = p[12];
  let b;
  if (p[13] !== x) b = x.filter(Ke).flatMap(Ye), p[13] = x, p[14] = b; else b = p[14];
  let R;
  if (p[15] !== b) R = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ A, e(Ju, {
      columns: L,
      children: b
    }) ]
  }), p[15] = b, p[16] = R; else R = p[16];
  return R;
}

function U(i) {
  let u = w(5), {promise: t} = i, o = Hr(t);
  if (o.length === 0) {
    return null;
  }
  let d;
  if (u[0] === S) d = e(n, {
    bold: !0,
    children: "System diagnostics"
  }), u[0] = d; else d = u[0];
  let m;
  if (u[1] !== o) m = o.map(Fe), u[1] = o, u[2] = m; else m = u[2];
  let l;
  if (u[3] !== m) l = r(s, {
    flexDirection: "column",
    paddingBottom: 1,
    children: [ d, m ]
  }), u[3] = m, u[4] = l; else l = u[4];
  return l;
}

export { YFr, YBt, XFr, JFr, _8n, b8n, QFr, S8n };
