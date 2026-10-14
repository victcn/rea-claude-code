// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, Mu } from "./chunk-3pqddg8f.js";

import { lae, a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { dP } from "./chunk-2kzvcfy0.js";

import { E2r, oYo, XC, wzt, Zg } from "./chunk-shampfde.js";

import { xw } from "./chunk-xywp7esx.js";

import { xG, Sl, EMo, oje, uS, Oee, eae, Rk, qNt, YNt, U$s, B$s, TMo, j$s, RXe } from "./chunk-yxennhe9.js";

import { q1t, K7e, LWo, ygn, _gn, I_t, NWo, bgn, kD, TD, O_t, M_t, xge, $Wo, FWo, wgn } from "./chunk-ttxqfpv1.js";

import { Hh, dO, pf, Gst, eRt, tRt } from "./chunk-bp2n0w3d.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Kt, ae, Ae, Z, F } from "./chunk-cpyd3eya.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { we } from "./chunk-m8ez8fhk.js";

class E {
  value=void 0;
  get() {
    let r = wzt(), n = Mu(), o = n?.wheelFlood ?? kBr(), u = n ? lae.includes(n.terminal ?? "") : dP.isJetBrainsIdeTerminal(), i = n?.wtSession ?? !!a.WT_SESSION, p = Zg(), s = this.value;
    if (s && s.xtversion === (r ?? "(no reply)") && s.wheelFlood === o && s.jediTerm === u && s.wtSession === i && s.xtermJs === p) return s;
    let d = "linux";
    return this.value = {
      useDecayCurve: !o && (p || d === "win32" || i),
      useAdaptiveDrain: p,
      base: u ? 2 : oe(p, o, i),
      xtermJs: p,
      wheelFlood: o,
      jediTerm: u,
      termProgram: a.TERM_PROGRAM ?? "unset",
      termProgramVersion: a.TERM_PROGRAM_VERSION ?? "unset",
      xtversion: r ?? "(no reply)",
      wtSession: i,
      scrollSpeedEnv: a.CLAUDE_CODE_SCROLL_SPEED ?? "unset",
      platform: d
    }, this.value;
  }
  invalidate() {
    this.value = void 0;
  }
}

var S = new K(() => new E);

function jq() {
  return S.of(B().host).get();
}

function kBr() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return !0;
  if (a.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return !0;
  if (a.TERM_PROGRAM === "vscode") {
    let r = ne(a.TERM_PROGRAM_VERSION);
    if (r !== null) return r >= 1092e3 && r < 1105e3;
  }
  return wzt()?.startsWith("xterm.js") ?? !1;
}

function ne(r) {
  if (!r) return null;
  let n = /^(\d+)\.(\d+)\.(\d+)/.exec(r);
  if (!n) return null;
  return +n[1] * 1e6 + +n[2] * 1e3 + +n[3];
}

function U9n(r, n, o) {
  return !n && (r || !1 || o) ? 3 : 1;
}

function oe(r, n, o) {
  let u = U9n(r, n, o), i = a.CLAUDE_CODE_SCROLL_SPEED;
  if (!i) return u;
  let p = parseFloat(i);
  return Number.isNaN(p) || p <= 0 ? u : Math.min(p, 20);
}

function W1t() {
  S.of(B().host).invalidate();
}

var b = we(vy(), 1);

var he = Sl(0, "f");

function HWo() {
  return Rk + qNt + uS;
}

function CBr() {
  return Rk + uS;
}

function z7e(r) {
  return uS + (eae + EMo(1)).repeat(r) + uS;
}

function DWo() {
  if (a.TMUX && XC().get("synchronizedOutput").state === "pending") return;
  return vke();
}

function Gte() {
  return g({
    beforeTheAnswer: !1
  });
}

function vke() {
  return g({
    beforeTheAnswer: !0
  });
}

function g({beforeTheAnswer: r}) {
  if (a.CLAUDE_BG_BACKEND === "daemon") return Mu()?.syncOutput !== !1;
  if (!a.TMUX && a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return !0;
  let n = XC().get("synchronizedOutput");
  if (n.state === "settled") return n.value;
  return r && n.likely;
}

function B9n(r = Gte()) {
  if (a.CLAUDE_BG_BACKEND === "daemon") return !1;
  return r && a.TMUX == null && process.env.ZELLIJ == null && !dP.isJetBrainsIdeTerminal() && !Zg() && a.WT_SESSION == null;
}

function G7e() {
  let r = Mu()?.progressReporting;
  if (r !== void 0) return r;
  if (!process.stdout.isTTY) return !1;
  if (a.WT_SESSION) return !1;
  if (a.ConEmuANSI || a.ConEmuPID || a.ConEmuTask) return !0;
  let n = b.coerce(a.TERM_PROGRAM_VERSION);
  if (!n) return !1;
  if (a.TERM_PROGRAM === "ghostty") return xw(n.version, "1.2.0");
  if (a.TERM_PROGRAM === "iTerm.app") return xw(n.version, "3.6.6");
  return !1;
}

function y(r) {
  if (r != null) return E2r.includes(r);
  return XC().now("extendedKeys");
}

function z1t(r = a.terminal, n = XC()) {
  if (a.TMUX || a.STY || !n.now("extendedKeys")) return !1;
  return r === null || !oYo.includes(r) || n.confirmed("kittyKeyboard");
}

function eHe() {
  return y() || XC().now("kittyKeyboard") ? TMo : "";
}

function P_t(r) {
  return y() ? TMo + (r?.legacyKitty ? B$s : U$s) + j$s : "";
}

function G1t(r) {
  return O_t + Rk + uS + P_t(r);
}

function Vte() {
  return eHe() + M_t + RXe;
}

var fgn = 5e3;

function V1t() {
  return !!a.WT_SESSION;
}

var j9n = B9n(vke());

function W9n(r, n, o) {
  let u = performance.now(), i = r.slowestWrite;
  if (i === void 0 || u - n >= i.endedMs - i.startedMs) r.slowestWrite = {
    startedMs: n,
    endedMs: u,
    bytes: o
  };
}

function mgn(r, n) {
  if (r.stdoutDead) return;
  let o = performance.now(), u = Buffer.byteLength(n);
  try {
    r.stdout.write(n);
  } catch (i) {
    if (r.tolerateDeadStdout && (v(i) === "EIO" || v(i) === "EPIPE")) {
      r.stdoutDead = !0, W9n(r, o, u);
      return;
    }
    throw i;
  }
  W9n(r, o, u);
}

function RBr(r, n, o = !1, u, i = "") {
  let p = u !== void 0 && u > 1 ? u - 1 : void 0;
  if (n.length === 0) {
    if (i !== "") mgn(r, i);
    return;
  }
  let s = !o, d = i + (s ? q1t : "");
  for (let c of n) switch (c.type) {
   case "stdout":
    d += c.content;
    break;

   case "clear":
    if (c.count > 0) d += YNt(c.count);
    break;

   case "clearTerminal":
    d += c.altScreen ? HWo() : z7e(c.viewportRows);
    break;

   case "cursorHide":
    d += TD;
    break;

   case "cursorShow":
    d += kD;
    break;

   case "cursorMove":
    d += Oee(c.x, p !== void 0 ? Math.max(-p, Math.min(p, c.y)) : c.y);
    break;

   case "cursorTo":
    d += oje(c.col);
    break;

   case "carriageReturn":
    d += "\r";
    break;

   case "hyperlink":
    d += Gst(c.uri);
    break;

   case "styleStr":
    d += c.str;
    break;
  }
  if (s) d += K7e;
  mgn(r, d);
}

function v(r) {
  return r && typeof r === "object" && "code" in r ? String(r.code) : void 0;
}

class W7e {
  _didStopImmediatePropagation=!1;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = !0;
  }
}

import { EventEmitter as ie } from "events";

class j1t extends ie {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(r, ...n) {
    if (r === "error") return super.emit(r, ...n);
    let o = this.rawListeners(r);
    if (o.length === 0) return !1;
    let u = n[0] instanceof W7e ? n[0] : null;
    for (let i of o) if (i.apply(this, n), u?.didStopImmediatePropagation()) break;
    return !0;
  }
}

function x_t() {
  return {
    lastWheelTime: 0,
    lastWheelDownTime: 0,
    bugConfirmed: !1,
    notified: !1,
    trackpadGesture: !1,
    pendingArrowBoost: 0
  };
}

function se(r) {
  r.bugConfirmed = !0, r.trackpadGesture = !0, r.pendingArrowBoost++;
}

function h(r) {
  r.trackpadGesture = !1, r.pendingArrowBoost = 0;
}

function OWo(r) {
  let n = r.pendingArrowBoost;
  return r.pendingArrowBoost = 0, n;
}

function TBr(r) {
  if (r.bugConfirmed) return !0;
  if (process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 || process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0) return r.bugConfirmed = !0, 
  !0;
  return !1;
}

var ue = 75, le = 250, ABr = 200;

function MWo(r, n, o, u) {
  if (!jq().jediTerm) return h(r), n;
  let i = null;
  for (let p = 0; p < n.length; p++) {
    let s = n[p];
    if (s.kind !== "key") {
      i?.push(s);
      continue;
    }
    if (s.name === "wheelup" || s.name === "wheeldown") {
      if (o - r.lastWheelTime > ABr) r.lastWheelDownTime = 0, h(r);
      if (r.lastWheelTime = o, s.name === "wheeldown") r.lastWheelDownTime = o;
      if (s.name === "wheelup" && o - r.lastWheelDownTime < le && TBr(r)) {
        i ??= n.slice(0, p), i.push({
          ...s,
          name: "wheeldown"
        });
        continue;
      }
      i?.push(s);
      continue;
    }
    if ((s.name === "up" || s.name === "down") && !s.ctrl && !s.meta && !s.shift && o - r.lastWheelTime < ue) {
      if (!r.notified) r.notified = !0, u();
      se(r), i ??= n.slice(0, p);
      continue;
    }
    i?.push(s);
  }
  return i ?? n;
}

function ED(r, n) {
  if (r === void 0) return;
  if (Number.isInteger(r)) return;
  t(`${n} should be an integer, got ${r}`, {
    level: "warn"
  });
}

function ggn(r, n, o, u, i) {
  if (r === void 0 && n === void 0 && o === void 0 && u === void 0 && i === void 0) return;
  return {
    hidden: r,
    label: n,
    role: o,
    state: u,
    preserveWhitespace: i
  };
}

function pe({children: r, ref: n, tabIndex: o, autoFocus: u, onClick: i, onFocus: p, onFocusCapture: s, onBlur: d, onBlurCapture: c, onMouseEnter: C, onMouseLeave: I, onPointer: A, hoverIgnoresBlankCells: M, hoverFollowsPaint: P, renderEvent: O, renderComponent: k, drawPending: N, elementKey: D, elementPlugin: L, onKeyDown: W, onKeyDownCapture: G, onPaste: J, onPasteCapture: j, onWheel: U, onWheelCapture: Y, keybindingScope: q, textEntry: X, onAction: H, onActionCapture: V, "aria-hidden": z, "aria-label": Q, "aria-role": ee, "aria-state": te, "aria-preserve-whitespace": re, ...l}) {
  if (ED(l.margin, "margin"), ED(l.marginX, "marginX"), ED(l.marginY, "marginY"), 
  ED(l.marginTop, "marginTop"), ED(l.marginBottom, "marginBottom"), l.marginLeft !== "auto") ED(l.marginLeft, "marginLeft");
  if (l.marginRight !== "auto") ED(l.marginRight, "marginRight");
  return ED(l.padding, "padding"), ED(l.paddingX, "paddingX"), ED(l.paddingY, "paddingY"), 
  ED(l.paddingTop, "paddingTop"), ED(l.paddingBottom, "paddingBottom"), ED(l.paddingLeft, "paddingLeft"), 
  ED(l.paddingRight, "paddingRight"), ED(l.gap, "gap"), ED(l.columnGap, "columnGap"), 
  ED(l.rowGap, "rowGap"), l.flexWrap ??= "nowrap", l.flexDirection ??= "row", l.flexGrow ??= 0, 
  l.flexShrink ??= 1, l.overflowX = l.overflowX ?? l.overflow ?? "visible", l.overflowY = l.overflowY ?? l.overflow ?? "visible", 
  e("ink-box", {
    ref: n,
    tabIndex: o,
    autoFocus: u,
    onClick: i,
    onFocus: p,
    onFocusCapture: s,
    onBlur: d,
    onBlurCapture: c,
    onMouseEnter: C,
    onMouseLeave: I,
    onPointer: A,
    hoverIgnoresBlankCells: M,
    hoverFollowsPaint: P,
    renderEvent: O,
    renderComponent: k,
    drawPending: N,
    elementKey: D,
    elementPlugin: L,
    onKeyDown: W,
    onKeyDownCapture: G,
    onPaste: J,
    onPasteCapture: j,
    onWheel: U,
    onWheelCapture: Y,
    keybindingScope: q,
    textEntry: X,
    onAction: H,
    onActionCapture: V,
    accessibility: ggn(z, Q, ee, te, re),
    style: l,
    children: r
  });
}

var yc = pe;

F();

var R = Kt({
  stdin: process.stdin,
  internal_eventEmitter: new j1t,
  setRawMode() {},
  isRawModeSupported: !1,
  internal_querier: null,
  internal_jediTermInput: x_t()
});

R.displayName = "InternalStdinContext";

var Rge = R;

F();

var gg = Kt(null);

F();

function T({background: r, foreground: n}) {
  return Hh(pf.SET_BG_COLOR, r) + Hh(pf.SET_FG_COLOR, n);
}

function x() {
  return Hh(pf.RESET_BG_COLOR) + Hh(pf.RESET_FG_COLOR);
}

var f = {
  bracketedPaste: 0,
  themeReports: 0,
  extendedKeys: 0,
  altScreen: 1,
  altScreenKeys: 2,
  mouse: 2,
  mousePixels: 2,
  surface: 3,
  focusEvents: 4
};

function w(r) {
  switch (r) {
   case "bracketedPaste":
    return {
      mode: r,
      on: LWo,
      off: ygn
    };

   case "themeReports":
    return {
      mode: r,
      on: NWo,
      off: bgn
    };

   case "focusEvents":
    return {
      mode: r,
      on: _gn,
      off: I_t
    };

   case "mousePixels":
    return {
      mode: r,
      on: $Wo,
      off: FWo
    };

   case "extendedKeys":
    return {
      mode: r,
      get on() {
        return P_t();
      },
      get off() {
        return RXe + eHe();
      }
    };

   case "altScreen":
    return {
      mode: r,
      on: O_t + Rk + uS,
      off: M_t + RXe
    };

   case "altScreenKeys":
    return {
      mode: r,
      get on() {
        return P_t();
      },
      get off() {
        return eHe();
      }
    };
  }
}

class V7e {
  entries=[];
  suspended=!1;
  kept;
  get isSuspended() {
    return this.suspended;
  }
  isSet(r) {
    return this.entries.some(n => n.mode === r);
  }
  set(r, n) {
    if (this.isSet(r)) return "";
    let o = this.add(this.entry(r, n));
    if (r === "altScreen") o += this.add(w("altScreenKeys"));
    return this.suspended ? "" : o;
  }
  reset(r) {
    if (!this.isSet(r)) return "";
    let n = r === "altScreen" ? this.remove("altScreenKeys") : "", o = this.remove(r);
    if (this.suspended && r === this.kept) return this.kept = void 0, o;
    return this.suspended ? "" : n + o;
  }
  reassert(r) {
    if (this.suspended) return "";
    return this.entries.find(n => n.mode === r)?.on ?? "";
  }
  reassertKeys() {
    if (this.suspended) return "";
    let r = this.isSet("altScreen") ? "altScreenKeys" : "extendedKeys";
    return this.entries.find(n => n.mode === r)?.on ?? "";
  }
  reassertFrom(r) {
    if (this.suspended || !this.isSet(r)) return "";
    return this.entries.filter(n => f[n.mode] >= f[r]).reduce((n, o) => n + o.on, "");
  }
  suspend(r) {
    if (this.suspended) return "";
    return this.suspended = !0, this.kept = r, this.entries.reduceRight((n, o) => o.mode === r ? n : n + o.off, "");
  }
  resume({clearKeys: r = !1} = {}) {
    if (!this.suspended) return "";
    this.suspended = !1, this.kept = void 0;
    let n = this.isSet("altScreen"), o = r ? RXe + (n ? "" : eHe()) : "";
    return this.entries.reduce((u, i) => u + i.on + (r && i.mode === "altScreen" ? eHe() : ""), o);
  }
  resetAll() {
    let r = this.suspended ? this.entries.filter(n => n.mode === this.kept) : this.entries;
    return this.entries = [], this.kept = void 0, r.reduceRight((n, o) => n + o.off, "");
  }
  entry(r, n) {
    switch (r) {
     case "mouse":
      {
        let o = typeof n === "string" ? n : "off";
        return {
          mode: r,
          on: wgn(o),
          off: o === "off" ? "" : xge
        };
      }

     case "surface":
      return {
        mode: r,
        on: typeof n === "object" ? T(n) : "",
        off: x()
      };

     default:
      return w(r);
    }
  }
  add(r) {
    let n = this.entries.findIndex(o => f[o.mode] > f[r.mode]);
    if (n === -1) this.entries.push(r); else this.entries.splice(n, 0, r);
    return r.on;
  }
  remove(r) {
    let n = this.entries.findIndex(o => o.mode === r);
    if (n === -1) return "";
    return this.entries.splice(n, 1)[0].off;
  }
}

var _ = Kt(new V7e);

_.displayName = "InternalTerminalModesContext";

var K1t = _;

F();

function m(r) {
  let n = "";
  for (let o = 0; o < r.length; o++) {
    let u = r.charCodeAt(o);
    n += u < 32 || u >= 127 && u <= 159 ? " " : r[o];
  }
  return n;
}

var uB = Kt(null), hgn = uB.Provider;

function AM() {
  let r = Ae(uB);
  if (!r) throw Error("useTerminalNotification must be used within TerminalWriteProvider");
  let n = ae(({message: s, title: d}) => {
    let c = d ? `${d}: ${s}` : s;
    r(dO(Hh(pf.ITERM2, m(c))));
  }, [ r ]), o = ae(({message: s, title: d, id: c}) => {
    r(dO(Hh(pf.KITTY, `i=${c}:d=0:p=title`, m(d)))), r(dO(Hh(pf.KITTY, `i=${c}:p=body`, m(s)))), 
    r(dO(Hh(pf.KITTY, `i=${c}:d=1:a=focus`, "")));
  }, [ r ]), u = ae(({message: s, title: d}) => {
    r(dO(Hh(pf.GHOSTTY, "notify", m(d), m(s))));
  }, [ r ]), i = ae(() => {
    r(xG);
  }, [ r ]), p = ae((s, d) => {
    if (!G7e()) return;
    if (!s) {
      r(dO(Hh(pf.ITERM2, eRt.PROGRESS, tRt.CLEAR, "")));
      return;
    }
    let c = Math.max(0, Math.min(100, Math.round(d ?? 0)));
    switch (s) {
     case "completed":
      r(dO(Hh(pf.ITERM2, eRt.PROGRESS, tRt.CLEAR, "")));
      break;

     case "error":
      r(dO(Hh(pf.ITERM2, eRt.PROGRESS, tRt.ERROR, c)));
      break;

     case "indeterminate":
      r(dO(Hh(pf.ITERM2, eRt.PROGRESS, tRt.INDETERMINATE, "")));
      break;

     case "running":
      r(dO(Hh(pf.ITERM2, eRt.PROGRESS, tRt.SET, c)));
      break;

     case null:
      break;
    }
  }, [ r ]);
  return Z(() => ({
    notifyITerm2: n,
    notifyKitty: o,
    notifyGhostty: u,
    notifyBell: i,
    progress: p
  }), [ n, o, u, i, p ]);
}

export { W7e, ED, j1t, jq, kBr, U9n, W1t, x_t, OWo, TBr, ABr, MWo, Rge, HWo, CBr, z7e, DWo, Gte, vke, B9n, G7e, z1t, eHe, P_t, G1t, Vte, fgn, V1t, j9n, W9n, mgn, RBr, ggn, yc, gg, V7e, K1t, uB, hgn, AM };
