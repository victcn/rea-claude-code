// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ze, Bj } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { a } from "./chunk-j016gcgm.js";

import { Qe, k, ce } from "./chunk-xywp7esx.js";

import { _S } from "./chunk-7w995nyx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { i } from "./chunk-hedpgw9m.js";

import { aI } from "./chunk-q6wab2jw.js";

import { ie, ut, bgt, rn, yA, Gs, ox } from "./chunk-yxennhe9.js";

import { X8, WMt } from "./chunk-gmq0qwep.js";

import { an, st, s, n, ma } from "./chunk-3vw306fv.js";

import { iB, SD, Pd } from "./chunk-m3evanyp.js";

import { rh } from "./chunk-bkx9v5fh.js";

import { V, Fo } from "./chunk-jb3h1y0s.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { tgn, KMe, OA, qMe, sy, Dm, Nb } from "./chunk-xw6qmghy.js";

import { flr } from "./chunk-84yp45y8.js";

import { wen } from "./chunk-4y2m4xpx.js";

import { te } from "./chunk-48xcyvwy.js";

import { Jke } from "./chunk-vvcgyz85.js";

import { a2 } from "./chunk-taztd943.js";

import { Be } from "./chunk-50asgqhj.js";

import { zae } from "./chunk-vbtgyghk.js";

import { I8n } from "./chunk-qsjy1wkv.js";

import { lB, C1t, Jmn, eBr } from "./chunk-7wy5hhd8.js";

import { Se } from "./chunk-sebqm9p5.js";

import { G } from "./chunk-j706jx8h.js";

import { b7e, Pk } from "./chunk-r9jn4ztq.js";

import { sw, Sge } from "./chunk-76pv33dd.js";

import { Wae } from "./chunk-edx6ysx6.js";

import { id } from "./chunk-0ypdmr94.js";

import { Dg, Lu } from "./chunk-81s9fscg.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { C1r, R1r, q_t } from "./chunk-kb4jemvz.js";

import { F_n, tYo } from "./chunk-ztrady26.js";

import { P, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { pa } from "./chunk-g7z9901y.js";

import { N } from "./chunk-hmqkrrtz.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

F();

F();

var jt = 150;

function Qt(l) {
  let _ = w(8), {tone: t, text: u} = l, o = Lu(), m = st(), g = o || m, [h, C] = ma(g ? null : jt);
  const B = Math.floor(C / jt);
  let E;
  if (_[0] !== g || _[1] !== B || _[2] !== u || _[3] !== t) E = e(b7e, {
    state: "live",
    tone: t,
    text: u,
    linkify: !1,
    frame: B,
    reducedMotion: g
  }), _[0] = g, _[1] = B, _[2] = u, _[3] = t, _[4] = E; else E = _[4];
  let L;
  if (_[5] !== h || _[6] !== E) L = e(s, {
    ref: h,
    flexDirection: "column",
    children: E
  }), _[5] = h, _[6] = E, _[7] = L; else L = _[7];
  return L;
}

F();

var be = {
  r: 171,
  g: 43,
  b: 63
};

function n1t(l) {
  let f = w(97), {message: t, mode: u, messageColor: o, glimmerIndex: m, flashOpacity: g, shimmerColor: h, stalledIntensity: C, thinkingIntensity: B} = l, _ = C === void 0 ? 0 : C, E = B === void 0 ? 0 : B, L = _S(), I;
  if (f[0] !== t) {
    I = [];
    for (const {segment: H} of pa().segment(t)) I.push({
      segment: H,
      width: ie(H)
    });
    f[0] = t, f[1] = I;
  } else I = f[1];
  let O;
  if (f[2] !== t) O = ie(t), f[2] = t, f[3] = O; else O = f[3];
  let b;
  if (f[4] !== I || f[5] !== O) b = {
    segments: I,
    messageWidth: O
  }, f[4] = I, f[5] = O, f[6] = b; else b = f[6];
  let {segments: v, messageWidth: T} = b;
  if (!t) {
    return null;
  }
  if (_ > 0) {
    let A = L[o];
    let x;
    if (f[7] !== A || f[8] !== t || f[9] !== _) {
      x = _n;
      wt: {
        let et = A ? Nb(A) : null;
        if (et) {
          let Y = sy(et, be, OA(_));
          let W = Dm(Y);
          let d;
          if (f[11] !== W || f[12] !== t) d = e(n, {
            color: W,
            children: t
          }), f[11] = W, f[12] = t, f[13] = d; else d = f[13];
          let p;
          if (f[14] !== W) p = e(n, {
            color: W,
            children: " "
          }), f[14] = W, f[15] = p; else p = f[15];
          let M;
          if (f[16] !== d || f[17] !== p) M = r(Q, {
            children: [ d, p ]
          }), f[16] = d, f[17] = p, f[18] = M; else M = f[18];
          x = M;
          break wt;
        }
      }
      f[7] = A, f[8] = t, f[9] = _, f[10] = x;
    } else x = f[10];
    if (x !== _n) return x;
    let U = _ > .5 ? "error" : o;
    let d;
    if (f[19] !== U || f[20] !== t) d = e(n, {
      color: U,
      children: t
    }), f[19] = U, f[20] = t, f[21] = d; else d = f[21];
    let p;
    if (f[22] !== U) p = e(n, {
      color: U,
      children: " "
    }), f[22] = U, f[23] = p; else p = f[23];
    let M;
    if (f[24] !== d || f[25] !== p) M = r(Q, {
      children: [ d, p ]
    }), f[24] = d, f[25] = p, f[26] = M; else M = f[26];
    return M;
  }
  if (E > 0) {
    let Tt = L[o];
    let x;
    if (f[27] !== Tt || f[28] !== t || f[29] !== L.warning || f[30] !== E) {
      x = _n;
      mt: {
        let X = Tt ? Nb(Tt) : null;
        let q = Nb(L.warning);
        if (X && q) {
          let lt = sy(X, q, OA(E));
          let D = Dm(lt);
          let d;
          if (f[32] !== D || f[33] !== t) d = e(n, {
            color: D,
            children: t
          }), f[32] = D, f[33] = t, f[34] = d; else d = f[34];
          let p;
          if (f[35] !== D) p = e(n, {
            color: D,
            children: " "
          }), f[35] = D, f[36] = p; else p = f[36];
          let M;
          if (f[37] !== d || f[38] !== p) M = r(Q, {
            children: [ d, p ]
          }), f[37] = d, f[38] = p, f[39] = M; else M = f[39];
          x = M;
          break mt;
        }
      }
      f[27] = Tt, f[28] = t, f[29] = L.warning, f[30] = E, f[31] = x;
    } else x = f[31];
    if (x !== _n) return x;
    let J = E > .5 ? "warning" : o;
    let d;
    if (f[40] !== J || f[41] !== t) d = e(n, {
      color: J,
      children: t
    }), f[40] = J, f[41] = t, f[42] = d; else d = f[42];
    let p;
    if (f[43] !== J) p = e(n, {
      color: J,
      children: " "
    }), f[43] = J, f[44] = p; else p = f[44];
    let M;
    if (f[45] !== d || f[46] !== p) M = r(Q, {
      children: [ d, p ]
    }), f[45] = d, f[46] = p, f[47] = M; else M = f[47];
    return M;
  }
  if (u === "tool-use") {
    let pt = L[o];
    let ft = L[h];
    let x;
    if (f[48] !== pt || f[49] !== g || f[50] !== t || f[51] !== o || f[52] !== ft) {
      x = _n;
      dt: {
        let gt = pt ? Nb(pt) : null;
        let vt = ft ? Nb(ft) : null;
        if (gt && vt) {
          let Lt = sy(gt, vt, OA(g));
          const d = e(n, {
            color: Dm(Lt),
            children: t
          });
          let p;
          if (f[54] !== o) p = e(n, {
            color: o,
            children: " "
          }), f[54] = o, f[55] = p; else p = f[55];
          let M;
          if (f[56] !== d || f[57] !== p) M = r(Q, {
            children: [ d, p ]
          }), f[56] = d, f[57] = p, f[58] = M; else M = f[58];
          x = M;
          break dt;
        }
      }
      f[48] = pt, f[49] = g, f[50] = t, f[51] = o, f[52] = ft, f[53] = x;
    } else x = f[53];
    if (x !== _n) return x;
    let nt = g > .5 ? h : o;
    let d;
    if (f[59] !== nt || f[60] !== t) d = e(n, {
      color: nt,
      children: t
    }), f[59] = nt, f[60] = t, f[61] = d; else d = f[61];
    let p;
    if (f[62] !== o) p = e(n, {
      color: o,
      children: " "
    }), f[62] = o, f[63] = p; else p = f[63];
    let M;
    if (f[64] !== d || f[65] !== p) M = r(Q, {
      children: [ d, p ]
    }), f[64] = d, f[65] = p, f[66] = M; else M = f[66];
    return M;
  }
  let ht = m - 1, yt = m + 1;
  if (ht >= T || yt < 0) {
    let x;
    if (f[67] !== t || f[68] !== o) x = e(n, {
      color: o,
      children: t
    }), f[67] = t, f[68] = o, f[69] = x; else x = f[69];
    let d;
    if (f[70] !== o) d = e(n, {
      color: o,
      children: " "
    }), f[70] = o, f[71] = d; else d = f[71];
    let p;
    if (f[72] !== x || f[73] !== d) p = r(Q, {
      children: [ x, d ]
    }), f[72] = x, f[73] = d, f[74] = p; else p = f[74];
    return p;
  }
  let xt = Math.max(0, ht), z, ot, it;
  if (f[75] !== xt || f[76] !== v || f[77] !== yt) {
    let at = 0;
    ot = "";
    it = "";
    z = "";
    for (const {segment: St, width: bt} of v) {
      if (at + bt <= xt) ot = ot + St; else if (at > yt) z = z + St; else it = it + St;
      at = at + bt;
    }
    f[75] = xt, f[76] = v, f[77] = yt, f[78] = z, f[79] = ot, f[80] = it;
  } else z = f[78], ot = f[79], it = f[80];
  let x;
  if (f[81] !== ot || f[82] !== o) x = ot && e(n, {
    color: o,
    children: ot
  }), f[81] = ot, f[82] = o, f[83] = x; else x = f[83];
  let d;
  if (f[84] !== it || f[85] !== h) d = e(n, {
    color: h,
    children: it
  }), f[84] = it, f[85] = h, f[86] = d; else d = f[86];
  let p;
  if (f[87] !== z || f[88] !== o) p = z && e(n, {
    color: o,
    children: z
  }), f[87] = z, f[88] = o, f[89] = p; else p = f[89];
  let M;
  if (f[90] !== o) M = e(n, {
    color: o,
    children: " "
  }), f[90] = o, f[91] = M; else M = f[91];
  let Mt;
  if (f[92] !== x || f[93] !== d || f[94] !== p || f[95] !== M) Mt = r(Q, {
    children: [ x, d, p, M ]
  }), f[92] = x, f[93] = d, f[94] = p, f[95] = M, f[96] = Mt; else Mt = f[96];
  return Mt;
}

F();

function He() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: !1
  };
}

function Ue(l, t) {
  let {toolWindowStart: u, toolWindowEnd: o, thinkingBurstStart: m} = l;
  if (t.hasActiveTools) {
    if (u === null || o !== null) u = t.now;
    o = null;
  } else if (u !== null && o === null) o = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) u = null, o = null;
  if (t.isThinking) {
    if (!l.wasThinking) m = t.now;
  } else m = null;
  return {
    toolWindowStart: u,
    toolWindowEnd: o,
    thinkingBurstStart: m,
    wasThinking: t.isThinking
  };
}

function Fe(l, t) {
  if (t.showToolCallTimer && t.hasActiveTools && l.toolWindowStart !== null) {
    let u = t.now - l.toolWindowStart;
    if (u >= 2e3) return {
      kind: "tool-running",
      toolMs: u
    };
  }
  if (t.outputLimitRecovery !== null && !t.hasActiveTools) return {
    kind: "recovering",
    recovery: t.outputLimitRecovery
  };
  if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && l.toolWindowStart !== null && l.toolWindowEnd !== null) {
    let u = l.toolWindowEnd - l.toolWindowStart;
    if (u >= 2e3) return {
      kind: "tool-done",
      toolMs: u
    };
  }
  if (t.thinkingStatus === "thinking" && !t.hasActiveTools) return {
    kind: "thinking",
    thinkingMs: l.thinkingBurstStart !== null ? t.now - l.thinkingBurstStart : 0
  };
  if (typeof t.thinkingStatus === "number") return {
    kind: "thought-for",
    thoughtMs: t.thinkingStatus
  };
  return {
    kind: "none"
  };
}

function Ke(l, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || l.thinkingBurstStart === null) return 0;
  let u = t.now - l.thinkingBurstStart;
  return Math.min(Math.max((u - 1e4) / 1e4, 0), 1);
}

F();

function qe(l, t, u = !1, o = !1, m) {
  let g = R(l), h = R(t), C = R(0), B = R(l), _ = R(m);
  if (t > h.current || _.current !== m) _.current = m, g.current = l, h.current = t, 
  C.current = 0, B.current = l; else if (t < h.current) h.current = t;
  let E;
  if (u) E = 0, g.current = l; else E = l - g.current;
  let L = E > 1e4 && !u, f = L ? Math.min((E - 1e4) / 1e4, 1) : 0;
  if (!o && (f > 0 || C.current > 0)) {
    let H = l - B.current;
    if (H >= 50) {
      let O = Math.floor(H / 50), b = C.current;
      for (let v = 0; v < O; v++) {
        let T = f - b;
        if (Math.abs(T) < .01) {
          b = f;
          break;
        }
        b += T * .1;
      }
      C.current = b, B.current = l;
    }
  } else C.current = f, B.current = l;
  let I = o ? f : C.current;
  return {
    isStalled: L,
    stalledIntensity: I,
    timeSinceLastToken: E
  };
}

var Fn = [ 1e4, 45e3, 3e5 ], Kn = 2e3, qn = 2e3, zn = 200, ae = 10, Yn = 1e4, Jn = 2e4, Qn = 3e4, Zn = 45e3;

function Xn(l) {
  let t = qMe(l, qn);
  return Math.round(t * (tgn().length - 1));
}

function to(l) {
  return `thought for ${Math.max(1, Math.round(l / 1e3))}s`;
}

function eo({attempt: l, limit: t}) {
  return l > 1 ? `picking the thought back up (${l} of ${t})` : "picking the thought back up";
}

function no(l) {
  if (l >= Zn) return "deep in thought";
  if (l >= Qn) return "thinking some more";
  if (l >= Jn) return "thinking more";
  if (l >= Yn) return "still thinking";
  return "thinking";
}

function oo(l) {
  return OA((Math.sin(l / 1e3 * Math.PI) + 1) / 2);
}

function ze({mode: l, reducedMotion: t, hasActiveTools: u, responseLength: o, message: m, overrideColor: g, loadingStartTime: h, totalPausedMs: C, pauseStartTime: B, thinkingStatus: _, effortSuffix: E, isCompacting: L, compactingStartTime: f, showToolCallTimer: I, outputLimitRecovery: H = null, agentId: O, glimmerParked: b = !1}) {
  let [v, T] = ma(t ? null : l === "requesting" && !b ? 50 : 100), A = Date.now(), et = L && f !== null ? Math.max(0, A - f) : B !== null ? B - h - C : A - h - C, Y = R(He()), W = {
    now: A,
    isThinking: l === "thinking",
    hasActiveTools: u,
    thinkingStatus: _,
    showToolCallTimer: I,
    outputLimitRecovery: H
  };
  Y.current = Ue(Y.current, W);
  let d = Fe(Y.current, W), p = Ke(Y.current, W), M = o, wt = u || l === "thinking" || L && l !== "responding" || B !== null, {isStalled: U, stalledIntensity: Tt, timeSinceLastToken: X} = qe(T, M, wt, t, O), q = R(new Set), lt = R(0), D = R(O);
  if (D.current !== O) D.current = O, q.current = new Set, lt.current = 0;
  if (X === 0) {
    if (q.current.size > 0) i("tengu_spinner_stall_cleared", {
      max_stall_ms: Math.round(lt.current),
      mode: c(l),
      override_color: g != null,
      response_length: M,
      thresholds_fired: q.current.size
    }), q.current = new Set, lt.current = 0;
  } else {
    if (X > lt.current) lt.current = X;
    for (let tt of Fn) if (X >= tt && !q.current.has(tt)) q.current.add(tt), i("tengu_spinner_stalled_ui", {
      threshold_ms: tt,
      mode: c(l),
      override_color: g != null,
      time_since_last_token_ms: Math.round(X),
      response_length: M,
      render_loop_dark: X - tt > 5e3
    });
  }
  let mt = t ? 0 : Xn(T), J = l === "requesting" ? 50 : zn, pt = Z(() => ie(m), [ m ]), ft = pt + 2 * ae, gt = Math.floor(T / J), vt = t ? -100 : U ? -100 : l === "requesting" ? gt % ft - ae : pt + ae - gt % ft, Lt = t ? 0 : l === "tool-use" ? oo(T) : 0, dt = R(M), nt = R(T), ht = R(O);
  if (ht.current !== O || Math.abs(M - dt.current) > Kn) ht.current = O, dt.current = M, 
  nt.current = T;
  if (t) dt.current = M, nt.current = T; else {
    let tt = Math.floor((T - nt.current) / 50);
    if (tt > 0) {
      nt.current += tt * 50;
      for (let It = 0; It < tt; It++) {
        let Rt = M - dt.current;
        if (Rt === 0) break;
        let At = Math.abs(Rt), Et;
        if (At < 70) Et = 3; else if (At < 200) Et = Math.max(8, Math.ceil(At * .15)); else Et = 50;
        dt.current = Rt > 0 ? Math.min(dt.current + Et, M) : Math.max(dt.current - Et, M);
      }
    }
  }
  let yt = dt.current, xt = Math.round(yt / 4), z = R(0), ot = R(T);
  if (l !== "thinking" || u) z.current = 0, ot.current = T; else if (!t && (p > 0 || z.current > 0)) {
    let tt = T - ot.current;
    if (tt >= 50) {
      let It = Math.floor(tt / 50), Rt = z.current;
      for (let At = 0; At < It; At++) {
        let Et = p - Rt;
        if (Math.abs(Et) < .01) {
          Rt = p;
          break;
        }
        Rt += Et * .1;
      }
      z.current = Rt, ot.current = T;
    }
  } else z.current = p, ot.current = T;
  let it = t ? p : z.current, at = rn(et), St = ie(at), bt = xt, Mt = Gs(bt), Ct = `${te.arrowDown} ${Mt} tokens`, Pt = ie(Ct), _t = d.kind === "thinking" ? no(d.thinkingMs) : "thinking", rt;
  switch (d.kind) {
   case "tool-running":
    rt = `running tool for ${rn(d.toolMs)}`;
    break;

   case "tool-done":
    rt = `ran tool for ${rn(d.toolMs)}`;
    break;

   case "recovering":
    rt = eo(d.recovery);
    break;

   case "thinking":
    rt = `${_t}${E}`;
    break;

   case "thought-for":
    rt = to(d.thoughtMs);
    break;

   case "none":
    rt = null;
    break;
  }
  let K = rt ? ie(rt) : 0;
  return {
    viewportRef: v,
    time: T,
    elapsedMs: et,
    frame: mt,
    glimmerIndex: vt,
    flashOpacity: Lt,
    stalledIntensity: Tt,
    thinkingIntensity: it,
    statusText: d,
    progressiveThinkingBase: _t,
    thinkingText: rt,
    thinkingWidth: K,
    timerText: at,
    timerWidth: St,
    totalTokens: bt,
    tokenCount: Mt,
    tokensWidth: Pt,
    glimmerMessageWidth: pt
  };
}

function Ye(l) {
  let [t, u] = y(null), o = R(null), m = R([]), g = an();
  return P(() => {
    if (l === "thinking") {
      if (o.current === null) {
        for (let h of m.current) h();
        m.current = [], o.current = Date.now(), u("thinking");
      }
    } else if (o.current !== null) {
      let h = Date.now() - o.current, C = Math.max(0, 2e3 - h);
      o.current = null;
      let B = () => {
        u(h), m.current.push(g.setTimeout(() => u(null), 2e3));
      };
      if (C > 0) m.current.push(g.setTimeout(B, C)); else B();
    }
  }, [ l, g ]), P(() => () => {
    for (let h of m.current) h();
    m.current = [];
  }, []), t;
}

var ro = ie(" \xb7 "), Je = ie("thinking"), io = 16e3, so = {
  r: 153,
  g: 153,
  b: 153
}, ao = {
  r: 185,
  g: 185,
  b: 185
}, Xe = 3e3, lo = 2;

function co(l, t, u) {
  let o = (l - Xe) / 1e3, m = l < Xe ? 0 : (Math.sin(o * Math.PI * 2 / lo) + 1) / 2, g = sy(so, ao, OA(m));
  return Dm(u && t > 0 ? sy(g, u, OA(t)) : g);
}

function cn({mode: l, reducedMotion: t, hasActiveTools: u, responseLengthRef: o, message: m, messageColor: g, shimmerColor: h, overrideColor: C, loadingStartTimeRef: B, totalPausedMsRef: _, pauseStartTimeRef: E, spinnerSuffix: L, verbose: f, columns: I, thinkingStatus: H, effortSuffix: O, isCompacting: b = !1, compactingStartTime: v = null, showToolCallTimer: T = !1, retryStatus: A = null, outputLimitRecovery: x = null, agentId: et}) {
  let Y = ze({
    mode: l,
    reducedMotion: t,
    hasActiveTools: u,
    responseLength: o.current,
    message: m,
    overrideColor: C,
    loadingStartTime: B.current,
    totalPausedMs: _.current,
    pauseStartTime: E.current,
    thinkingStatus: H,
    effortSuffix: O,
    isCompacting: b,
    compactingStartTime: v,
    showToolCallTimer: T,
    outputLimitRecovery: x,
    agentId: et
  }), W = _S(), d = st(), p = Pk(f), {viewportRef: M, time: wt, elapsedMs: U, frame: Tt, glimmerIndex: X, flashOpacity: q, stalledIntensity: lt, thinkingIntensity: D, statusText: mt, progressiveThinkingBase: J, timerText: pt, timerWidth: ft, totalTokens: gt, tokenCount: vt, tokensWidth: Lt, glimmerMessageWidth: dt} = Y, {thinkingText: nt, thinkingWidth: ht} = Y, yt = dt + 2, xt = ro, z = nt !== null, ot = f || z || b || gt > 0 || U > io || Boolean(L), it = I - yt - 5, at = z && it > ht;
  if (!at && z && mt.kind === "thinking" && (O || J !== "thinking")) {
    if (it > Je) nt = "thinking", ht = Je, at = !0;
  }
  let St = at ? ht + xt : 0, bt = ot && it > St + ft, Mt = St + (bt ? ft + xt : 0), Ct = ot && gt > 0 && it > Mt + Lt, Pt = at && mt.kind === "thinking" && !L && !bt && !Ct, _t = D > 0 ? Nb(W.warning) : null, rt = co(wt, D, _t), K = !_t && D > .5 ? "warning" : void 0, tt = D > 0 ? "warning" : void 0, It = [ ...L ? [ e(n, {
    dimColor: !0,
    children: L
  }, "suffix") ] : [], ...!d && bt ? [ e(n, {
    dimColor: !0,
    children: pt
  }, "elapsedTime") ] : [], ...!d && Ct ? [ r(s, {
    flexDirection: "row",
    children: [ e(mn, {
      mode: l
    }), r(n, {
      dimColor: !0,
      children: [ vt, " tokens" ]
    }) ]
  }, "tokens") ] : [], ...!d && at && nt ? [ mt.kind === "thinking" && !t ? e(n, {
    color: K ?? rt,
    children: Pt ? `(${nt})` : nt
  }, "thinking") : e(n, {
    dimColor: !tt,
    color: tt,
    children: nt
  }, "thinking") ] : [] ], Rt = It.length > 0 ? Pt ? e(Se, {
    children: It
  }) : r(Q, {
    children: [ e(n, {
      dimColor: !0,
      children: "("
    }), e(Se, {
      children: It
    }), e(n, {
      dimColor: !0,
      children: ")"
    }) ]
  }) : null;
  if (b && A === null && p) return e(s, {
    ref: M,
    flexDirection: "column",
    marginTop: 1,
    width: "100%",
    children: e(Qt, {
      tone: "dim",
      text: m.replace(/\u2026$/, "")
    })
  });
  return e(s, {
    ref: M,
    flexDirection: "column",
    width: "100%",
    children: e(s, {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 1,
      width: "100%",
      children: A ? e(gmn, {
        status: A,
        columns: I
      }) : r(Q, {
        children: [ e(Wae, {
          frame: Tt,
          messageColor: g,
          stalledIntensity: C ? 0 : lt,
          thinkingIntensity: C ? 0 : D,
          reducedMotion: t,
          time: wt
        }), e(n1t, {
          message: m,
          mode: l,
          messageColor: g,
          glimmerIndex: X,
          flashOpacity: q,
          shimmerColor: h,
          stalledIntensity: C ? 0 : lt,
          thinkingIntensity: C ? 0 : D
        }), Rt ]
      })
    })
  });
}

function gmn(l) {
  let m = w(57), {status: t, columns: u} = l, o = Math.max(0, Math.ceil((t.deadline - Date.now()) / 1e3)) * 1e3, g;
  if (m[0] !== t.kind) g = t.kind === "low_priority_waiting" ? X8().waitBanner : null, 
  m[0] = t.kind, m[1] = g; else g = m[1];
  let h = g;
  const C = o >= 3e5;
  let B;
  if (m[2] !== o || m[3] !== C) B = rn(o, {
    mostSignificantOnly: C
  }), m[2] = o, m[3] = C, m[4] = B; else B = m[4];
  let _ = B, E;
  if (m[5] === S) E = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: "error",
      children: aI
    })
  }), m[5] = E; else E = m[5];
  let L = E;
  if (t.kind === "stalled") {
    let f;
    if (m[6] === S) f = e(n, {
      color: "error",
      children: "Waiting for API response"
    }), m[6] = f; else f = m[6];
    let I;
    if (m[7] !== _) I = r(Q, {
      children: [ L, r(s, {
        flexShrink: 1,
        children: [ f, r(n, {
          dimColor: !0,
          children: [ " \xb7 will retry in ", _, " \xb7 check your network" ]
        }) ]
      }) ]
    }), m[7] = _, m[8] = I; else I = m[8];
    return I;
  }
  if (t.kind === "low_priority_waiting") {
    let H = ` \xb7 next try in ${_} \xb7 attempt ${t.attempt} \xb7 esc to interrupt`;
    let O = Math.max(10, u - 2 - ie(H) - 2);
    let f;
    if (m[9] === S) f = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: "warning",
        children: aI
      })
    }), m[9] = f; else f = m[9];
    const I = h ?? "";
    let b;
    if (m[10] !== O || m[11] !== I) b = ut(I, O), m[10] = O, m[11] = I, m[12] = b; else b = m[12];
    let v;
    if (m[13] !== b) v = e(n, {
      color: "warning",
      children: b
    }), m[13] = b, m[14] = v; else v = m[14];
    let T;
    if (m[15] !== H) T = e(n, {
      dimColor: !0,
      children: H
    }), m[15] = H, m[16] = T; else T = m[16];
    let A;
    if (m[17] !== v || m[18] !== T) A = r(Q, {
      children: [ f, r(s, {
        flexShrink: 1,
        children: [ v, T ]
      }) ]
    }), m[17] = v, m[18] = T, m[19] = A; else A = m[19];
    return A;
  }
  if (t.kind === "auto_mode_unavailable") {
    let f;
    if (m[20] === S) f = e(n, {
      color: "error",
      children: "Auto mode check unavailable"
    }), m[20] = f; else f = m[20];
    const I = ` \xb7 next try in ${_} \xb7 attempt ${t.attempt}/${t.maxRetries} \xb7 `;
    let b;
    if (m[21] === S) b = e(G, {
      chord: "escape",
      action: "interrupt",
      format: {
        keyCase: "lower"
      }
    }), m[21] = b; else b = m[21];
    let v;
    if (m[22] !== I) v = r(Q, {
      children: [ L, r(s, {
        flexShrink: 1,
        children: [ f, r(n, {
          dimColor: !0,
          children: [ I, b ]
        }) ]
      }) ]
    }), m[22] = I, m[23] = v; else v = m[23];
    return v;
  }
  let x = t.error.noResponse;
  if (x) {
    let et = t.attempt >= t.maxRetries;
    let f;
    if (m[24] !== x.retryWaitMs) f = yA(x.retryWaitMs), m[24] = x.retryWaitMs, m[25] = f; else f = m[25];
    let Y = f;
    let W = et ? ` \xb7 retrying once, waiting up to ${Y}` : ` \xb7 retrying, waiting up to ${Y} \xb7 attempt ${t.attempt}/${t.maxRetries}`;
    let d = Math.max(10, u - 2 - ie(W) - 2);
    let I;
    if (m[26] !== x.waitedMs) I = yA(x.waitedMs), m[26] = x.waitedMs, m[27] = I; else I = m[27];
    const b = `No response from the API after ${I}`;
    let v;
    if (m[28] !== d || m[29] !== b) v = ut(b, d), m[28] = d, m[29] = b, m[30] = v; else v = m[30];
    let T;
    if (m[31] !== v) T = e(n, {
      color: "error",
      children: v
    }), m[31] = v, m[32] = T; else T = m[32];
    let A;
    if (m[33] !== W) A = e(n, {
      dimColor: !0,
      children: W
    }), m[33] = W, m[34] = A; else A = m[34];
    let p;
    if (m[35] !== A || m[36] !== T) p = r(s, {
      children: [ T, A ]
    }), m[35] = A, m[36] = T, m[37] = p; else p = m[37];
    let M;
    if (m[38] === S) M = e(n, {
      dimColor: !0,
      children: "A proxy or gateway that buffers streaming responses can cause this \xb7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait"
    }), m[38] = M; else M = m[38];
    let wt;
    if (m[39] !== p) wt = r(Q, {
      children: [ L, r(s, {
        flexBasis: 0,
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        children: [ p, M ]
      }) ]
    }), m[39] = p, m[40] = wt; else wt = m[40];
    return wt;
  }
  let U = t.error.rateLimits, f;
  if (m[41] !== U) f = U?.resetsAt ? ` (${ox(U.resetsAt)})` : "", m[41] = U, m[42] = f; else f = m[42];
  let X = ` \xb7 Retrying in ${_}${f} \xb7 attempt ${t.attempt}/${t.maxRetries}`, q = t.attempt >= Math.min(3, t.maxRetries) || t.error.isNetworkDown || t.error.connection?.isSSLError || U, I;
  if (m[43] !== U || m[44] !== q || m[45] !== t.error.formatted) {
    let lt = U?.rateLimitType ? WMt(U.rateLimitType) : "usage limit";
    I = !q ? Jmn : U ? `${lt[0]?.toUpperCase()}${lt.slice(1)} reached` : t.error.formatted;
    m[43] = U, m[44] = q, m[45] = t.error.formatted, m[46] = I;
  } else I = m[46];
  let D = I, mt = Math.max(10, u - 2 - ie(X) - 2), b;
  if (m[47] !== mt || m[48] !== D) b = ut(D, mt), m[47] = mt, m[48] = D, m[49] = b; else b = m[49];
  let J = b, v;
  if (m[50] !== J) v = e(n, {
    color: "error",
    children: J
  }), m[50] = J, m[51] = v; else v = m[51];
  let T;
  if (m[52] !== X) T = e(n, {
    dimColor: !0,
    children: X
  }), m[52] = X, m[53] = T; else T = m[53];
  let A;
  if (m[54] !== v || m[55] !== T) A = r(Q, {
    children: [ L, r(s, {
      flexShrink: 1,
      children: [ v, T ]
    }) ]
  }), m[54] = v, m[55] = T, m[56] = A; else A = m[56];
  return A;
}

function mn(l) {
  let u = w(2), {mode: t} = l;
  switch (t) {
   case "tool-input":
   case "tool-use":
   case "responding":
   case "thinking":
    {
      let o;
      if (u[0] === S) o = e(s, {
        width: 2,
        children: e(n, {
          "aria-hidden": !0,
          dimColor: !0,
          children: te.arrowDown
        })
      }), u[0] = o; else o = u[0];
      return o;
    }

   case "requesting":
    {
      let o;
      if (u[1] === S) o = e(s, {
        width: 2,
        children: e(n, {
          "aria-hidden": !0,
          dimColor: !0,
          children: te.arrowUp
        })
      }), u[1] = o; else o = u[1];
      return o;
    }
  }
}

function lr(d) {
  return d.isBriefOnly;
}

function cr(p) {
  return p.viewingAgentTaskId;
}

function mr(L) {
  return L.settings.prefersReducedMotion;
}

var he = /(\u2026|\.\.\.)$/, Gt = "\u2026";

function x8n(l) {
  let b = w(22), {mode: t, overrideMessage: u, overrideColor: o, overrideShimmerColor: m, isCompacting: g, compactingHintText: h, compactingStartTime: C, turnEffort: B, turnModel: _, retryStatus: E, outputLimitRecovery: L, defaultVerb: f} = eBr(l.agentId), I = V(lr), H = V(cr), O = a.CLAUDE_CODE_BRIEF, v, T;
  if (b[0] !== f || b[1] !== t || b[2] !== u || b[3] !== l.agentId) v = () => ({
    requestId: l.agentId ?? "main",
    props: {
      word: f,
      message: u,
      suffix: Gt,
      mode: t
    }
  }), T = [ l.agentId, f, u, t ], b[0] = f, b[1] = t, b[2] = u, b[3] = l.agentId, 
  b[4] = v, b[5] = T; else v = b[4], T = b[5];
  let A = Pd.useRenderInput("Spinner", v, T), x;
  if (b[6] !== I || b[7] !== H) x = Bj() && (O || k("tengu_kairos_brief", !1)) && I && !H, 
  b[6] = I, b[7] = H, b[8] = x; else x = b[8];
  let et = x, Y;
  if (b[9] !== et || b[10] !== h || b[11] !== C || b[12] !== g || b[13] !== t || b[14] !== L || b[15] !== o || b[16] !== m || b[17] !== l || b[18] !== E || b[19] !== B || b[20] !== _) Y = W => et ? e(Cn, {
    mode: t,
    overrideMessage: W.props.message
  }) : e(Mn, {
    ...l,
    mode: t,
    overrideMessage: W.props.message,
    overrideColor: o,
    overrideShimmerColor: m,
    isCompacting: g,
    compactingHintText: h,
    compactingStartTime: C,
    turnEffort: B,
    turnModel: _,
    retryStatus: E,
    outputLimitRecovery: L,
    defaultVerb: W.props.word,
    suffix: W.props.suffix ?? Gt
  }), b[9] = et, b[10] = h, b[11] = C, b[12] = g, b[13] = t, b[14] = L, b[15] = o, 
  b[16] = m, b[17] = l, b[18] = E, b[19] = B, b[20] = _, b[21] = Y; else Y = b[21];
  return Pd.useRenderHook(A, Y);
}

function Mn({mode: l, loadingStartTimeRef: t, totalPausedMsRef: u, pauseStartTimeRef: o, responseLengthRef: m, overrideColor: g, overrideShimmerColor: h, overrideMessage: C, isCompacting: B, compactingHintText: _, compactingStartTime: E, spinnerSuffix: L, verbose: f, hasActiveTools: I = !1, turnEffort: H, turnModel: O, retryStatus: b, outputLimitRecovery: v, defaultVerb: T, suffix: A, agentId: x}) {
  let et = id(), Y = st(), W = Dg(et.prefersReducedMotion) || Y, d = V(K => K.spinnerTip), p = V(K => K.spinnerTipLabel), M = V(K => K.briefTranscript), wt = V(K => K.expandedView) === "tasks", U = Te(), Tt = Pk(f) ? Sge : 0, X = Math.max(1, U.columns - Tt), q = zae(), lt = Ye(l), D = x === void 0 || x === Ze(), mt = D ? q?.find(K => K.status !== "pending" && K.status !== "completed") : void 0, J = D ? ar(q) : void 0, [pt] = y(() => lB(C1t()) ?? "Working"), ft = mt ? [ mt.activeForm, mt.subject ].map(K => K?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0, gt = C ?? (ft === void 0 ? void 0 : bgt(ft, X)) ?? (T || pt), Lt = A === Gt && he.test(gt) ? gt : gt + A;
  P(() => {
    let K = "spinner-" + l;
    return a2.startCLIActivity(K), () => {
      a2.endCLIActivity(K);
    };
  }, [ l ]);
  let dt = sw(), nt = wen(O ?? Qe(), dt, H ?? void 0), ht = o.current !== null ? o.current - t.current - u.current : Date.now() - t.current - u.current, yt = "claude", xt = "claudeShimmer", z = g ?? yt, ot = h ?? xt, it = k("tengu_shining_fractals", !1), at = !1, St = et.spinnerTipsEnabled !== !1, bt = St && ht > 18e5, Mt = St && ht > 3e4 && !ce().btwUseCount, Ct = at ? d : Jke() ? d : bt && !J ? "Use /clear to start fresh when switching topics and free up context" : Mt && !J ? "Use /btw to ask a quick side question without interrupting Claude's current work" : d, _t = J ? `Next: ${J.subject.replace(/\s+/g, " ").trim()}` : d === F_n && M ? tYo : Ct ? `${Ct === d && p ? p : "Tip"}: ${Ct}` : void 0, rt;
  if (b?.kind === "retrying") {
    let K = b.error.status === 529 || b.error.formatted.toLowerCase().includes("overload"), tt = b.attempt >= Math.min(3, b.maxRetries);
    if (K && tt) rt = flr().trim();
  }
  return r(s, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: Tt,
    children: [ e(cn, {
      mode: l,
      reducedMotion: W,
      hasActiveTools: I,
      responseLengthRef: m,
      message: Lt,
      messageColor: z,
      shimmerColor: ot,
      overrideColor: g,
      loadingStartTimeRef: t,
      totalPausedMsRef: u,
      pauseStartTimeRef: o,
      spinnerSuffix: L,
      verbose: f,
      columns: X,
      thinkingStatus: lt,
      effortSuffix: nt,
      isCompacting: B,
      compactingStartTime: E,
      showToolCallTimer: it,
      retryStatus: b,
      outputLimitRecovery: v,
      agentId: x
    }), D && wt && q && q.length > 0 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Be, {
        children: e(I8n, {
          tasks: q
        })
      })
    }) : B && _ ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Be, {
        children: e(n, {
          dimColor: !0,
          children: _
        })
      })
    }) : b ? rt ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Be, {
        children: e(n, {
          dimColor: !0,
          children: rt
        })
      })
    }) : null : _t ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Be, {
        children: e(n, {
          dimColor: !0,
          wrap: J ? "truncate-end" : "wrap",
          children: _t
        })
      })
    }) : null ]
  });
}

var Bt = 2, $t = 3, er = 12, nr = 1;

function Jt(l, t, u) {
  let o = t > 0 ? `${t} in background` : "", m = l - Bt - $t, g = m - (o ? 1 + ie(o) : 0);
  if (o && g < (u ? er : nr)) return {
    labelBudget: m,
    rightText: ""
  };
  return {
    labelBudget: g,
    rightText: o
  };
}

function Cn({mode: l, overrideMessage: t}) {
  let u = id(), o = st(), m = Dg(u.prefersReducedMotion) || o, [g] = y(() => lB(C1t()) ?? "Working"), h = V(p => p.remoteConnectionStatus);
  P(() => {
    let p = "spinner-" + l;
    return a2.startCLIActivity(p), () => {
      a2.endCLIActivity(p);
    };
  }, [ l ]);
  let [, C] = ma(m ? null : 120), B = V(p => N(Object.values(p.tasks), rh) + p.remoteBackgroundTasks.length), _ = h === "reconnecting" || h === "disconnected", {columns: E} = Te(), {labelBudget: L, rightText: f} = Jt(E, B, _), I = ut(t ?? g, L), H = ut(h === "reconnecting" ? "Reconnecting" : "Disconnected", L), O = _ ? H : I, b = Math.floor(C / 300) % 3, v = m ? he.test(O) ? "   " : "\u2026  " : ".".repeat(b + 1).padEnd(3), T = Z(() => ie(I), [ I ]), A = m || _ ? -100 : R1r(Math.floor(C / C1r), T), {before: x, shimmer: et, after: Y} = q_t(I, A), W = (_ ? ie(H) : T) + $t, d = Math.max(1, E - Bt - W - ie(f));
  return r(s, {
    flexDirection: "row",
    width: "100%",
    marginTop: 1,
    paddingLeft: Bt,
    children: [ _ ? e(n, {
      color: "error",
      children: H + v
    }) : r(Q, {
      children: [ x ? e(n, {
        dimColor: !0,
        children: x
      }) : null, et ? e(n, {
        children: et
      }) : null, Y ? e(n, {
        dimColor: !0,
        children: Y
      }) : null, e(n, {
        dimColor: !0,
        children: v
      }) ]
    }), f ? r(Q, {
      children: [ e(n, {
        children: " ".repeat(d)
      }), e(n, {
        color: "subtle",
        children: f
      }) ]
    }) : null ]
  });
}

function aUr() {
  let l = V(E => E.remoteConnectionStatus), t = V(E => N(Object.values(E.tasks), rh) + E.remoteBackgroundTasks.length), {columns: u} = Te(), o = l === "reconnecting" || l === "disconnected", {labelBudget: m, rightText: g} = Jt(u, t, o), h = l === "reconnecting" ? 1 : 0, C = ut(l === "reconnecting" ? "Reconnecting" : "Disconnected", m + $t - h), B = !o ? "" : l === "reconnecting" && !C.endsWith("\u2026") ? C + "\u2026" : C;
  if (!B && !g) return e(s, {
    height: 2
  });
  let _ = Math.max(1, u - Bt - ie(B) - ie(g));
  return e(s, {
    marginTop: 1,
    paddingLeft: Bt,
    children: r(n, {
      children: [ B ? e(n, {
        color: "error",
        children: B
      }) : null, g ? r(Q, {
        children: [ e(n, {
          children: " ".repeat(_)
        }), e(n, {
          color: "subtle",
          children: g
        }) ]
      }) : null ]
    })
  });
}

function hi() {
  let m = w(9), l = st(), t = Dg(Fo(mr)) || l, [u, o] = ma(t ? null : 120);
  if (t) {
    let g;
    if (m[0] === S) g = e(n, {
      color: "text",
      children: "\u25cf"
    }), m[0] = g; else g = m[0];
    let h;
    if (m[1] !== u) h = e(s, {
      ref: u,
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: g
    }), m[1] = u, m[2] = h; else h = m[2];
    return h;
  }
  let g;
  if (m[3] === S) g = KMe(), m[3] = g; else g = m[3];
  let C = g, B = Math.floor(o / 120) % C.length;
  const h = C[B];
  let _;
  if (m[4] !== h) _ = e(n, {
    color: "text",
    children: h
  }), m[4] = h, m[5] = _; else _ = m[5];
  let E;
  if (m[6] !== u || m[7] !== _) E = e(s, {
    ref: u,
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: _
  }), m[6] = u, m[7] = _, m[8] = E; else E = m[8];
  return E;
}

function aWo({entries: l, responseLength: t, event: u}) {
  if (u.type === "start") return l.push({
    id: u.id,
    ttftMs: u.ttftMs,
    firstTokenTime: Date.now(),
    lastTokenTime: Date.now(),
    responseLengthBaseline: t,
    endResponseLength: t
  }), t;
  let o = u.id != null ? l.find(m => m.id === u.id) : l.findLast(m => m.id == null);
  if (!o) return t;
  if (u.type === "content_block_start") return o.thinkingTokenEstimate = 0, o.thinkingBlockBaseline = t, 
  o.sawEstimatedTokensThisBlock = !1, t;
  if (u.type === "thinking_progress") {
    if (o.sawEstimatedTokensThisBlock = !0, o.thinkingTokenEstimate = (o.thinkingTokenEstimate ?? 0) + u.estimatedTokensDelta, 
    o.outputTokens == null && u.id == null) {
      let m = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
      return Math.max(t, m + o.thinkingTokenEstimate * 4);
    }
    return t;
  }
  if (u.type === "thinking_signature") {
    if (u.chars > 0 && o.outputTokens == null) {
      if (o.lastTokenTime = Date.now(), o.sawEstimatedTokensThisBlock) {
        o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(u.chars / 4));
        let g = o.thinkingBlockBaseline ?? o.responseLengthBaseline, h = Math.max(t, g + o.thinkingTokenEstimate * 4);
        return o.endResponseLength = h, h;
      }
      let m = t + u.chars;
      return o.endResponseLength = m, m;
    }
    return t;
  }
  if (o.outputTokens = u.outputTokens, o.lastTokenTime = Date.now(), u.id == null) return Math.max(t, o.responseLengthBaseline + u.outputTokens * 4);
  return t;
}

function ar(l) {
  if (!l) return;
  let t = l.filter(o => o.status === "pending");
  if (t.length === 0) return;
  let u = new Set(l.filter(o => o.status !== "completed").map(o => o.id));
  return t.find(o => !o.blockedBy.some(m => u.has(m))) ?? t[0];
}

export { n1t, gmn, x8n, aUr, hi, aWo };
