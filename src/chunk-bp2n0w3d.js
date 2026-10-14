// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, Mu } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { t } from "./chunk-kawq2919.js";

import { BG, Ame } from "./chunk-5wbhf1bk.js";

import { Two } from "./chunk-6f0vymna.js";

import { Rd, lae, a } from "./chunk-j016gcgm.js";

import { it } from "./chunk-zscnwzv2.js";

import { V0 } from "./chunk-3kb22va7.js";

import { oD, xG, CXe, Iee } from "./chunk-yxennhe9.js";

import { dP } from "./chunk-2kzvcfy0.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Ne } from "./chunk-m8ez8fhk.js";

class C {
  hooks=null;
  uiMounted=!1;
  setHooks(e) {
    this.hooks = e;
  }
  setUiMounted(e) {
    this.uiMounted = e;
  }
}

var S = new C;

function Joo(e) {
  S.setHooks(e);
}

function Qoo() {
  return S.hooks;
}

function y(e) {
  S.setUiMounted(e);
}

function LMn() {
  return S.uiMounted;
}

class E extends Map {
  get everMounted() {
    return LMn();
  }
  set everMounted(e) {
    y(e);
  }
  set(e, n) {
    this.everMounted = !0;
    let o = this.get(e);
    if (o && o !== n && !o.hasUnmounted && o.holdsRawMode) d(Error("ink: second root created on a stream whose mounted root still holds stdin (raw mode); unmount the previous root first"));
    return super.set(e, n);
  }
  treeRoots=new Map;
  standaloneRender=null;
  claimForStandaloneRender(e) {
    let n = () => {
      if (this.standaloneRender === o) this.standaloneRender = null;
    }, o = e.then(n, n);
    this.standaloneRender = o;
  }
  get pendingStandaloneRender() {
    return this.standaloneRender;
  }
}

var U = new K(() => new E);

function oi() {
  return U.of(B().host);
}

var g = null, _ = !1;

function x() {
  if (_) return g;
  _ = !0;
  try {
    return g = Two(), g;
  } catch {}
  let e = "x64-linux", o = [ e, `${e}-musl` ].flatMap(r => [ `./vendor/clipboard-napi/${r}/clipboard-napi.node`, `../clipboard-napi/${r}/clipboard-napi.node` ]);
  for (let r of o) try {
    return g = Ne(r), g;
  } catch {}
  return null;
}

import { Buffer as M } from "buffer";

import { isAbsolute as W } from "path";

var b = oD + String.fromCharCode(Iee.OSC), PMn = oD + "\\";

function R() {
  return Mu()?.terminal ?? a.terminal;
}

function I8t() {
  let e = Mu();
  if (e) return e.mux;
  if (a.TMUX) return "tmux";
  if (a.STY) return "screen";
  if (a.ZELLIJ) return "zellij";
  return null;
}

function h() {
  return Mu()?.ssh ?? !!a.SSH_CONNECTION;
}

function L() {
  let e = Mu();
  if (e) {
    if (e.mux !== "tmux" || !e.tmuxSocket) return null;
    return W(e.tmuxSocket) && V0(e.tmuxSocket) ? [ "-S", e.tmuxSocket ] : null;
  }
  return a.TMUX ? [] : null;
}

function Qqe() {
  let e = R();
  if (e === "Apple_Terminal") return "Fn";
  if (e === "iTerm.app") return "Option";
  if (Mu()?.isVscodeTerm || e && H.has(e)) return O() === "macos" ? "Option" : "Shift";
  if (e && G.has(e)) return "Shift";
  if (a.LC_TERMINAL === "iTerm2") return "Option";
  return h() || I8t() !== null || O() === "macos" ? "Shift (Option in iTerm2, Fn in Terminal.app)" : "Shift";
}

var G = new Set([ "ghostty", "kitty", "WezTerm", "alacritty", "xterm", "gnome-terminal", "vte-based", "konsole", "windows-terminal", "mintty", ...lae ]), H = new Set([ "vscode", "cursor", "windsurf", "antigravity", "codium" ]);

function Hh(...e) {
  let n = R() === "kitty" ? PMn : xG;
  return `${b}${e.join(CXe)}${n}`;
}

function dO(e) {
  let n = I8t();
  if (n === "tmux") return `\x1bPtmux;${e.replaceAll("\x1b", "\x1b\x1b")}\x1b\\`;
  if (n === "screen") return `\x1bP${e.replaceAll("\x1b", "\x1b\x1b")}\x1b\\`;
  return e;
}

class N {
  tool=void 0;
  addonWriteFailed=!1;
  addonWriteSucceeded=!1;
  waylandCopyGeneration=0;
  async probe() {
    if (O() !== "linux" || typeof this.tool === "string" && this.tool !== "addon") return;
    let {display: e, waylandDisplay: n} = P();
    if (n && await Rd("wl-copy")) {
      this.tool = "wl-copy";
      return;
    }
    if (e) {
      if (await Rd("xclip")) {
        this.tool = "xclip";
        return;
      }
      if (await Rd("xsel")) {
        this.tool = "xsel";
        return;
      }
    }
    if (!this.addonWriteFailed && k() && x()?.setLinuxClipboardText) {
      this.tool = "addon";
      return;
    }
    this.tool = null;
  }
  recordAddonWrite(e) {
    if (e) this.addonWriteSucceeded = !0; else this.addonWriteFailed ||= !this.addonWriteSucceeded;
  }
  beginWaylandCopy() {
    return ++this.waylandCopyGeneration;
  }
  isLatestWaylandCopy(e) {
    return e === this.waylandCopyGeneration;
  }
  reset() {
    this.tool = void 0, this.addonWriteFailed = !1, this.addonWriteSucceeded = !1;
  }
}

var Y = new K(() => new N);

function f() {
  return Y.of(B().host);
}

function ebe() {
  if (!h()) switch (O()) {
   case "macos":
   case "windows":
   case "wsl":
    return "native";

   case "linux":
    if (typeof f().tool === "string") return "native";
    break;
  }
  if (L()) return "tmux-buffer";
  return "osc52";
}

function IMn() {
  return f().probe();
}

function qds() {
  if (O() !== "linux") return "not_linux";
  let {tool: e} = f();
  if (e === void 0) return "not_probed";
  return e ?? "none";
}

function Xoo() {
  return a.VTE_VERSION != null;
}

function P() {
  return {
    display: process.env.DISPLAY,
    waylandDisplay: process.env.WAYLAND_DISPLAY
  };
}

function k() {
  let {display: e, waylandDisplay: n} = P();
  if (e) return /^(unix)?:/.test(e);
  return !!n;
}

function F(e) {
  return /[^\x00-\x7f]/.test(e);
}

function OMn(e) {
  if (!dP.hasOsc52ClipboardUtf8Bug() || !F(e)) return null;
  return "VS Code 1.123/1.124 will mojibake this paste \u2014 update to \u22651.125";
}

async function j(e) {
  let n = L();
  if (!n) return !1;
  let o = {
    input: e,
    useCwd: !1,
    timeout: 2e3
  }, r = a.LC_TERMINAL ?? "unset", i = n.length > 0 ? "attacher socket" : "$TMUX", {code: s} = await it("tmux", [ ...n, "load-buffer", "-w", "-" ], o);
  if (t(`clipboard: tmux load-buffer -w - \u2192 exit ${s} (server=${i} LC_TERMINAL=${r})`), 
  s === 0) return !0;
  let u = await it("tmux", [ ...n, "load-buffer", "-" ], o);
  return t(`clipboard: retry tmux load-buffer - \u2192 exit ${u.code} (server=${i} LC_TERMINAL=${r})`), 
  u.code === 0;
}

var A = 76;

async function JE(e) {
  let n = M.from(e, "utf8").toString("base64"), o = h(), r = O(), i = !1;
  if (!o) {
    if (r === "linux" && typeof f().tool !== "string") await f().probe();
    i = X(e);
  }
  await j(e);
  let s = I8t(), u = R(), m = s === null && i && (r === "linux" || r === "wsl") && Xoo() && (u === "vte-based" || u === "gnome-terminal") && a.TERM?.startsWith("xterm") === !0 && !a.XTERM_VERSION && !a.ALACRITTY_WINDOW_ID && !a.ALACRITTY_LOG && !a.KITTY_WINDOW_ID && !a.WEZTERM_PANE, T = m ? "none(vte)" : s === "tmux" ? "raw+dcs" : s === "screen" ? "dcs" : "raw";
  if (t(`clipboard: setClipboard mux=${s ?? "none"} ssh=${o} native=${i} predicted=${ebe()} emit=${T} bytes=${e.length}`), 
  m) return "";
  if (s === "tmux") {
    let c = `${oD}]52;c;${n}${xG}`;
    return c + dO(c);
  }
  if (s === "screen") {
    let c = [];
    for (let p = 0; p < n.length; p += A) c.push(n.slice(p, p + A));
    return `${oD}P${oD}]52;c;${c.join(`${PMn}${oD}P`)}${xG}${PMn}`;
  }
  return Hh(pf.CLIPBOARD, "c", n);
}

var w = "[Console]::InputEncoding = [Text.Encoding]::UTF8; Set-Clipboard -Value ([Console]::In.ReadToEnd())", V = "[Console]::OutputEncoding = [Text.Encoding]::UTF8; Get-Clipboard -Raw";

function X(e) {
  let n = {
    input: e,
    useCwd: !1,
    timeout: 2e3
  };
  switch (O()) {
   case "macos":
    return it("pbcopy", [], n), !0;

   case "linux":
    {
      let o = f();
      if (o.tool === "wl-copy") return J(e), !0;
      if (o.tool === "xclip") {
        let r = {
          ...n,
          useToolMemoryCgroup: !1
        };
        return it("xclip", [ "-selection", "clipboard" ], r), it("xclip", [ "-selection", "primary" ], r), 
        !0;
      }
      if (o.tool === "xsel") {
        let r = {
          ...n,
          useToolMemoryCgroup: !1
        };
        return it("xsel", [ "--clipboard", "--input" ], r), it("xsel", [ "--primary", "--input" ], r), 
        !0;
      }
      if (o.tool === "addon") {
        let r;
        try {
          r = x()?.setLinuxClipboardText(e) === !0;
        } catch {
          r = !1;
        }
        return o.recordAddonWrite(r), o.probe(), r;
      }
      return !1;
    }

   case "wsl":
    return it("powershell.exe", [ "-NoProfile", "-NonInteractive", "-Command", w ], n), 
    !0;

   case "windows":
    return it("powershell", [ "-NoProfile", "-NonInteractive", "-Command", w ], n), 
    !0;
  }
  return !1;
}

async function J(e) {
  let n = f(), o = n.beginWaylandCopy(), r = {
    input: e,
    useCwd: !1,
    timeout: 2e3,
    stdout: "ignore",
    stderr: "ignore",
    useToolMemoryCgroup: !1
  };
  if (await it("wl-copy", [], r), !n.isLatestWaylandCopy(o)) return;
  await it("wl-copy", [ "--primary" ], r);
}

async function ZCt(e = "clipboard") {
  if (h()) return "";
  let n = {
    useCwd: !1,
    timeout: 2e3
  };
  switch (O()) {
   case "macos":
    {
      let o = await it("pbpaste", [], n);
      return o.code === 0 ? o.stdout : "";
    }

   case "windows":
   case "wsl":
    {
      let o = await it(O() === "wsl" ? "powershell.exe" : "powershell", [ "-NoProfile", "-NonInteractive", "-Command", V ], n);
      return o.code === 0 ? o.stdout.replace(/\r\n/g, `\n`).replace(/\n$/, "") : "";
    }

   case "linux":
    {
      let o = e === "primary", r = [ [ "wl-paste", o ? [ "--primary", "--no-newline" ] : [ "--no-newline" ] ], [ "xclip", [ "-selection", o ? "primary" : "clipboard", "-o" ] ], [ "xsel", [ o ? "--primary" : "--clipboard", "--output" ] ] ];
      for (let [i, s] of r) {
        let u = await it(i, [ ...s ], n);
        if (u.code === 0) return u.stdout;
      }
      return await q(o, n.timeout) ?? "";
    }

   default:
    return "";
  }
}

async function q(e, n) {
  if (!k()) return null;
  try {
    return (await (x()?.getLinuxClipboardText?.(e, n)))?.replace(/\r?\n$|\r$/, "") ?? null;
  } catch (o) {
    return t(`clipboard: addon read: ${l(o)}`), null;
  }
}

var pf = {
  SET_TITLE_AND_ICON: 0,
  SET_ICON: 1,
  SET_TITLE: 2,
  SET_COLOR: 4,
  SET_CWD: 7,
  HYPERLINK: 8,
  ITERM2: 9,
  SET_FG_COLOR: 10,
  SET_BG_COLOR: 11,
  SET_CURSOR_COLOR: 12,
  CLIPBOARD: 52,
  KITTY: 99,
  RESET_COLOR: 104,
  RESET_FG_COLOR: 110,
  RESET_BG_COLOR: 111,
  RESET_CURSOR_COLOR: 112,
  SEMANTIC_PROMPT: 133,
  GHOSTTY: 777,
  ITERM2_PROPRIETARY: 1337,
  PROGRAM_STATUS: 7501,
  TAB_STATUS: 21337
};

function Yds(e) {
  let n = e.indexOf(";"), o = n >= 0 ? e.slice(0, n) : e, r = n >= 0 ? e.slice(n + 1) : "", i = parseInt(o, 10);
  if (i === pf.SET_TITLE_AND_ICON) return {
    type: "title",
    action: {
      type: "both",
      title: r
    }
  };
  if (i === pf.SET_ICON) return {
    type: "title",
    action: {
      type: "iconName",
      name: r
    }
  };
  if (i === pf.SET_TITLE) return {
    type: "title",
    action: {
      type: "windowTitle",
      title: r
    }
  };
  if (i === pf.HYPERLINK) {
    let s = r.split(";"), u = s[0] ?? "", m = s.slice(1).join(";");
    if (m === "") return {
      type: "link",
      action: {
        type: "end"
      }
    };
    let T = {};
    if (u) for (let c of u.split(":")) {
      let p = c.indexOf("=");
      if (p >= 0) T[c.slice(0, p)] = c.slice(p + 1);
    }
    return {
      type: "link",
      action: {
        type: "start",
        url: m,
        params: Object.keys(T).length > 0 ? T : void 0
      }
    };
  }
  if (i === pf.TAB_STATUS) return {
    type: "tabStatus",
    action: z(r)
  };
  return {
    type: "unknown",
    sequence: `\x1b]${e}`
  };
}

function I(e) {
  let n = e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (n) return {
    type: "rgb",
    r: parseInt(n[1], 16),
    g: parseInt(n[2], 16),
    b: parseInt(n[3], 16)
  };
  let o = e.match(/^rgb:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})$/i);
  if (o) {
    let r = i => Math.round(parseInt(i, 16) / (16 ** i.length - 1) * 255);
    return {
      type: "rgb",
      r: r(o[1]),
      g: r(o[2]),
      b: r(o[3])
    };
  }
  return null;
}

function z(e) {
  let n = {};
  for (let [o, r] of Z(e)) switch (o) {
   case "indicator":
    n.indicator = r === "" ? null : I(r);
    break;

   case "status":
    n.status = r === "" ? null : r;
    break;

   case "status-color":
    n.statusColor = r === "" ? null : I(r);
    break;
  }
  return n;
}

function* Z(e) {
  let n = "", o = "", r = !1, i = !1;
  for (let s of e) if (i) {
    if (r) o += s; else n += s;
    i = !1;
  } else if (s === "\\") i = !0; else if (s === ";") yield [ n, o ], n = "", o = "", 
  r = !1; else if (s === "=" && !r) r = !0; else if (r) o += s; else n += s;
  if (n || r) yield [ n, o ];
}

var D = new RegExp(BG.source, "g");

function Gst(e, n) {
  let o = e.replace(D, "");
  if (!o) return Vst;
  let r = {
    id: Q(o),
    ...n
  }, i = Object.entries(r).map(([s, u]) => `${s}=${u}`).join(":");
  return Hh(pf.HYPERLINK, i, o);
}

function Q(e) {
  let n = 0;
  for (let o = 0; o < e.length; o++) n = (n << 5) - n + e.charCodeAt(o) | 0;
  return (n >>> 0).toString(36);
}

var Vst = Hh(pf.HYPERLINK, "", ""), eRt = {
  NOTIFY: 0,
  BADGE: 2,
  PROGRESS: 4
}, tRt = {
  CLEAR: 0,
  SET: 1,
  ERROR: 2,
  INDETERMINATE: 3
}, MMn = `${b}${pf.ITERM2};${eRt.PROGRESS};${tRt.CLEAR};${xG}`, Xds = `${b}${pf.SET_TITLE_AND_ICON};${xG}`, HMn = Hh(pf.TAB_STATUS, "indicator=;status=;status-color=");

function O8t() {
  return !1;
}

function Jds(e) {
  let n = [], o = r => r.type === "rgb" ? `#${[ r.r, r.g, r.b ].map(i => i.toString(16).padStart(2, "0")).join("")}` : "";
  if ("indicator" in e) n.push(`indicator=${e.indicator ? o(e.indicator) : ""}`);
  if ("status" in e) n.push(`status=${e.status?.replaceAll("\\", "\\\\").replaceAll(";", "\\;") ?? ""}`);
  if ("statusColor" in e) n.push(`status-color=${e.statusColor ? o(e.statusColor) : ""}`);
  return Hh(pf.TAB_STATUS, n.join(";"));
}

var tt = 2048, et = 192, nt = 32;

function Qds(e) {
  let n = e.replace(/[^A-Za-z0-9_.+-]/g, "-").slice(0, nt);
  return n.length > 0 ? n : void 0;
}

function v(e, n) {
  let o = Ame(e.replace(D, " "), n);
  return M.from(o).toString("base64");
}

function wmr(e) {
  let n = [ `state=${e.state}`, "app=claude-code" ];
  if (e.id !== void 0) n.push(`id=${e.id}`);
  if (e.state === "blocked" && e.kind) n.push(`kind=${e.kind}`);
  if ((e.state === "working" || e.state === "blocked") && e.progress !== void 0 && Number.isFinite(e.progress)) {
    let o = Math.min(100, Math.max(0, Math.round(e.progress)));
    n.push(`progress=${o}`);
  }
  if (e.title) n.push(`title=${v(e.title, et)}`);
  if (e.msg) n.push(`msg=${v(e.msg, tt)}`);
  return Hh(pf.PROGRAM_STATUS, n.join(":"));
}

var DMn = `${b}${pf.PROGRAM_STATUS};state=clear${xG}`;

function Zds(e) {
  return Hh(pf.PROGRAM_STATUS, `state=clear:id=${e}`);
}

export { PMn, I8t, Qqe, Hh, dO, ebe, IMn, qds, Xoo, OMn, JE, ZCt, pf, Yds, Gst, Vst, eRt, tRt, MMn, Xds, HMn, O8t, Jds, Qds, wmr, DMn, Zds, Joo, Qoo, LMn, oi };
