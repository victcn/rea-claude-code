// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B, Mu } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

import { xw } from "./chunk-xywp7esx.js";

import { dP } from "./chunk-2kzvcfy0.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { we } from "./chunk-m8ez8fhk.js";

function iSt(e) {
  if (e === void 0) return null;
  if (/^st(term)?(-|$)/.test(e)) return "st";
  if (/^rxvt(-|$)/.test(e)) return "rxvt";
  return null;
}

class i {
  reading;
  settled=Me();
  constructor(e) {
    this.reading = e === void 0 ? {
      state: "unasked"
    } : {
      state: "settled",
      value: e.value,
      source: e.source
    };
  }
  get() {
    return this.reading;
  }
  now() {
    return this.reading.state === "settled" && this.reading.value;
  }
  begin() {
    if (this.reading.state !== "unasked") return !1;
    return this.reading = {
      state: "asking"
    }, !0;
  }
  unask() {
    if (this.reading.state === "asking") this.reading = {
      state: "unasked"
    };
  }
  answer(e) {
    if (this.reading.state === "settled") return !1;
    this.reading = {
      state: "settled",
      ...e
    };
    try {
      this.settled.emit(e.value);
    } finally {
      this.settled.clear();
    }
    return !0;
  }
  onSettle(e) {
    if (this.reading.state === "settled") return e(this.reading.value), () => {};
    return this.settled.subscribe(e);
  }
}

var s = {
  extendedKeys: !1,
  synchronizedOutput: !1,
  kittyKeyboard: !0,
  kittyGraphics: !1,
  mousePixels: !1,
  programStatus: !1
}, T7n = Object.keys(s);

class o {
  readings=new Map;
  answeredYes=new Set;
  listeners=new Map;
  constructor(e) {
    for (let t of T7n) {
      let r = e[t];
      this.readings.set(t, "settled" in r ? {
        state: "settled",
        value: r.settled,
        source: r.source
      } : {
        state: "pending",
        likely: r.likely,
        source: r.source
      });
    }
  }
  get(e) {
    return this.readings.get(e);
  }
  now(e) {
    let t = this.get(e);
    return t.state === "settled" ? t.value : s[e];
  }
  confirmed(e) {
    return this.answeredYes.has(e);
  }
  pending() {
    return T7n.filter(e => this.get(e).state === "pending");
  }
  answer(e, t, r) {
    let n = this.get(e);
    if (n.state === "settled") {
      if (t && n.value) this.answeredYes.add(e);
      return !1;
    }
    if (t) this.answeredYes.add(e);
    return this.settle(e, t, r), !0;
  }
  deadline() {
    for (let e of this.pending()) {
      let t = this.get(e);
      this.settle(e, t.likely, `${t.source}, no answer`);
    }
  }
  onSettle(e, t) {
    let r = this.get(e);
    if (r.state === "settled") return t(r.value), () => {};
    let n = this.listeners.get(e) ?? new Set;
    return this.listeners.set(e, n), n.add(t), () => {
      n.delete(t);
    };
  }
  settle(e, t, r) {
    this.readings.set(e, {
      state: "settled",
      value: t,
      source: r
    });
    let n = this.listeners.get(e);
    this.listeners.delete(e);
    for (let p of n ?? []) p(t);
  }
}

var l = we(vy(), 1);

var E2r = [ "iTerm.app", "kitty", "WezTerm", "ghostty", "tmux", "windows-terminal", "WarpTerminal" ], oYo = [ "windows-terminal" ];

function u(e) {
  return iSt(e) === "st";
}

function d() {
  return {
    extendedKeys: T(a.terminal, a.CLAUDE_CODE_SESSION_KIND === "bg"),
    synchronizedOutput: _(),
    kittyKeyboard: E(a.terminal, a.CLAUDE_CODE_SESSION_KIND === "bg"),
    kittyGraphics: b({
      terminal: a.terminal,
      bgWorker: a.CLAUDE_CODE_SESSION_KIND === "bg",
      multiplexed: Boolean(a.TMUX) || Boolean(a.STY),
      forced: a.CLAUDE_CODE_FORCE_TERMINAL_IMAGES
    }),
    mousePixels: y({
      terminal: a.terminal,
      bgWorker: a.CLAUDE_CODE_SESSION_KIND === "bg",
      multiplexed: Boolean(a.TMUX) || Boolean(a.STY)
    }),
    programStatus: g({
      bgWorker: a.CLAUDE_CODE_SESSION_KIND === "bg",
      tabWritesDisabled: a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE
    })
  };
}

function g(e) {
  if (e.tabWritesDisabled) return {
    settled: !1,
    source: "env: CLAUDE_CODE_DISABLE_TERMINAL_TITLE"
  };
  if (e.bgWorker) return {
    settled: !1,
    source: "bg worker"
  };
  return {
    likely: !1,
    source: "not asked yet"
  };
}

function y(e) {
  if (e.bgWorker) return {
    settled: !1,
    source: "bg worker"
  };
  if (e.multiplexed) return {
    settled: !1,
    source: "env: inside tmux or screen"
  };
  return {
    likely: !1,
    source: `env: terminal=${e.terminal || "unknown"}, not asked yet`
  };
}

var c = [ "kitty", "ghostty" ], m = "0.28.0";

function sYo(e) {
  if (e === null) return !1;
  if (e.startsWith("kitty(")) {
    let t = l.coerce(e.slice(6));
    return t !== null && xw(t.version, m);
  }
  return c.some(t => e === t || e.startsWith(`${t} `));
}

function b(e) {
  if (e.forced) return {
    settled: !0,
    source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES"
  };
  if (e.bgWorker) return {
    settled: !1,
    source: "bg worker"
  };
  if (e.multiplexed) return {
    settled: !1,
    source: "env: inside tmux or screen"
  };
  return {
    likely: !1,
    source: `env: terminal=${e.terminal || "unknown"}, not asked yet`
  };
}

function E(e, t) {
  if (t) return {
    settled: !0,
    source: "bg worker"
  };
  if (e !== null && u(e)) return {
    settled: !1,
    source: `env: terminal=${e}`
  };
  return {
    likely: !0,
    source: "not asked yet"
  };
}

function T(e, t) {
  let r = `env: terminal=${e || "unknown"}`;
  if (t) return {
    settled: !1,
    source: `${r}, bg worker`
  };
  if (e !== null && E2r.includes(e)) return {
    settled: !0,
    source: r
  };
  if (e !== null && u(e)) return {
    settled: !1,
    source: r
  };
  return {
    likely: !1,
    source: r
  };
}

function _() {
  if (a.TMUX) return {
    likely: !1,
    source: "env: TMUX (tmux answers for itself)"
  };
  if (a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return {
    settled: !0,
    source: "env: CLAUDE_CODE_FORCE_SYNC_OUTPUT"
  };
  if (dP.isJetBrainsIdeTerminal()) return {
    settled: !0,
    source: "env: TERMINAL_EMULATOR=JetBrains-JediTerm"
  };
  let e = x();
  if (e) return {
    likely: !0,
    source: `env: ${e}`
  };
  return {
    likely: !1,
    source: "env: no known terminal"
  };
}

function x() {
  let e = a.TERM_PROGRAM, t = a.TERM;
  if (e === "iTerm.app" || e === "WezTerm" || e === "WarpTerminal" || e === "ghostty" || e === "contour" || e === "vscode" || e === "alacritty" || e === "mintty" || e === "rio" || e === "Tabby") return `TERM_PROGRAM=${e}`;
  if (t?.includes("kitty")) return `TERM=${t}`;
  if (a.KITTY_WINDOW_ID) return "KITTY_WINDOW_ID";
  if (t === "xterm-ghostty") return `TERM=${t}`;
  if (t?.startsWith("foot")) return `TERM=${t}`;
  if (t?.includes("alacritty")) return `TERM=${t}`;
  if (a.ZED_TERM) return "ZED_TERM";
  if (a.WT_SESSION) return "WT_SESSION";
  if (parseInt(a.VTE_VERSION ?? "", 10) >= 6800) return `VTE_VERSION=${a.VTE_VERSION}`;
  return;
}

class f {
  xtversionName=void 0;
  #e=void 0;
  get capabilities() {
    return this.#e ??= new o(d());
  }
  #t=void 0;
  get imageFiles() {
    return this.#t ??= new i(a.CLAUDE_CODE_FORCE_TERMINAL_IMAGES ? {
      value: !0,
      source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES"
    } : void 0);
  }
  resetCapabilities() {
    this.#e = void 0, this.#t = void 0;
  }
  osc11Responsive=void 0;
  cellPixels=void 0;
  probeEventLogged=!1;
  nativeCursorEnabled=void 0;
}

var v = new K(() => new f);

function YC() {
  return v.of(B().host);
}

function XC() {
  return YC().capabilities;
}

function A7n() {
  return XC().now("kittyGraphics");
}

function iYo(e) {
  return XC().onSettle("kittyGraphics", e);
}

function Szt() {
  return YC().imageFiles;
}

function aYo(e) {
  YC().xtversionName = e;
}

function wzt() {
  return YC().xtversionName;
}

function Zg() {
  if (Mu()?.isVscodeTerm) return !0;
  if (a.TERM_PROGRAM === "vscode") return !0;
  return YC().xtversionName?.startsWith("xterm.js") ?? !1;
}

function lYo() {
  let e = YC().xtversionName?.toLowerCase();
  return e !== void 0 && (e.startsWith("iterm2") || e.startsWith("tmux "));
}

function dYo() {
  return YC().xtversionName?.toLowerCase().startsWith("ghostty") ?? !1;
}

export { T7n, iSt, E2r, oYo, sYo, YC, XC, A7n, iYo, Szt, aYo, wzt, Zg, lYo, dYo };
