// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { x, W, jt } from "./chunk-b0z4bv3v.js";

import { K } from "./chunk-3pqddg8f.js";

import { lo } from "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { d } from "./chunk-6ah1819r.js";

import { _, t } from "./chunk-kawq2919.js";

import { Px, V } from "./chunk-jb3h1y0s.js";

import { lae, a } from "./chunk-j016gcgm.js";

import { ie, Jve, Pc } from "./chunk-yxennhe9.js";

import { Zg } from "./chunk-shampfde.js";

import { Qe, k, Ce, ce } from "./chunk-xywp7esx.js";

import { Pe } from "./chunk-7w995nyx.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { ge } from "./chunk-07cck4g7.js";

import { Mo, B1e, han, iqn, dOe, qIo, PNs } from "./chunk-j90se18b.js";

import { Gc } from "./chunk-r276nwd3.js";

import { it } from "./chunk-zscnwzv2.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { Am, HK } from "./chunk-mw643xee.js";

import { F7e, lgn, Mze } from "./chunk-k8g8atcg.js";

import { Ti, an, ma, F$ } from "./chunk-3vw306fv.js";

import { Ix, ZMe, Kae } from "./chunk-fj1a15yf.js";

import { dGe, eWt } from "./chunk-01ajyt8d.js";

import { td, Hjs, Djs, Z6t } from "./chunk-84yp45y8.js";

import { nue } from "./chunk-sqb9meyh.js";

import { vo } from "./chunk-apnet8r0.js";

import { Nq } from "./chunk-ytac37d4.js";

import { P1t, I1t } from "./chunk-xw6qmghy.js";

import { sBr, Ch } from "./chunk-mbz49tpm.js";

import { Dg } from "./chunk-81s9fscg.js";

import { Yjt, Xjt, $Vo, myn } from "./chunk-p08r7m22.js";

import { Fke, sb, Cbt } from "./chunk-knws81s6.js";

import { AHe } from "./chunk-b0t3brxj.js";

import { Gn } from "./chunk-bf1mjdzd.js";

import { b4, Jle, Z7o, z9r, eZo } from "./chunk-a6phe82s.js";

import { ae, Ae, P, xo, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { L } from "./chunk-vh1p9t2h.js";

import { pa, Zve, IMo } from "./chunk-g7z9901y.js";

import { Is } from "./chunk-p35rdtee.js";

import { O, YFs } from "./chunk-1xnsr4dy.js";

F();

import { basename as Qt, isAbsolute as Xt } from "path";

var er = 50;

function pt() {
  return td(Qe());
}

function M7e({onPaste: e, handleKeyDown: r, onImagePaste: n}) {
  let s = an(), o = Ae(Px), [l, c] = y(!1), h = R(!0), S = R(!1), T = R(!1), [C, M] = y(0), G = Z(() => O() === "macos", []), U = Z(() => O() === "wsl", []);
  P(() => () => {
    h.current = !1;
  }, []);
  let re = xo(() => {
    r(new ZMe({
      kind: "key",
      name: "return",
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      sequence: "\r",
      raw: "\r",
      code: void 0,
      col: void 0,
      row: void 0
    }));
  });
  P(() => {
    if (C === 0) return;
    return s.setTimeout(() => {
      if (S.current = !1, T.current) T.current = !1, re();
    }, 0);
  }, [ C, s ]);
  let Y = ae(() => {
    if (!n || !h.current) return;
    Jle(pt()).then(E => {
      if (E && h.current) n(E.base64, {
        mediaType: E.mediaType,
        dimensions: E.dimensions
      });
    }).catch(E => {
      if (h.current) m("input_image_paste", "clipboard_read_failed"), d(E);
    }).finally(() => {
      B();
    });
  }, [ n ]), q = F$(Y, er);
  function D(E) {
    if (e) {
      e(E);
      return;
    }
    r(new ZMe({
      kind: "key",
      name: void 0,
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      sequence: E,
      raw: E,
      code: void 0,
      col: void 0,
      row: void 0
    }));
  }
  function B() {
    if (!h.current) return;
    S.current = !1, T.current = !1, c(!1);
  }
  function J() {
    c(!1), M(E => E + 1);
  }
  function v(E, Q = E.length === 0, ne = E.endsWith("[I") || E.endsWith("[O")) {
    S.current = !0;
    let X = ne ? E.replace(/\[[IO]$/, "") : E;
    if (Q && (G || U) && n) {
      q();
      return;
    }
    let H = X.split(/ (?=\/|[A-Za-z]:\\)/).flatMap(ee => ee.split(`\n`)).filter(ee => ee.trim()), j = [], le = [];
    for (let ee of H) if (Z7o(ee)) j.push(ee); else le.push(ee);
    if (n && j.length > 0) {
      let ee = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(X), Ee = pt();
      Promise.all(j.map(fe => eZo(fe, Ee, be => Hjs(be, () => {
        let me = o?.getState().toolPermissionContext;
        return me ? [ me, Djs(me) ] : [];
      }, (me, ye) => Z6t(me, ye, "person"))))).then(fe => {
        if (!h.current) return;
        let be = fe.includes("refused"), me = j.every(pe => Xt(z9r(pe) ?? "")), ye = fe.filter(pe => pe !== null && pe !== "refused");
        if (ye.length > 0) {
          for (let [pe, oe] of ye.entries()) {
            let $e = Qt(oe.path);
            n(oe.base64, {
              mediaType: oe.mediaType,
              filename: $e,
              dimensions: oe.dimensions,
              sourcePath: oe.path,
              continuesGesture: pe > 0
            });
          }
          if (le.length > 0) D(le.join(`\n`));
          B();
        } else if (ee && G && !be && me) q(); else f("input_image_drag", be ? "read_withheld" : "read_failed"), 
        D(X), B();
      }).catch(fe => {
        if (!h.current) return;
        m("input_image_drag", "read_threw"), t(`Image paste read failed: ${fe instanceof Error ? fe.message : String(fe)}`, {
          level: "error"
        }), D(X), B();
      });
      return;
    }
    D(X), J();
  }
  function de(E) {
    E.preventDefault(), c(!0), v(E.text, E.rawEmpty, E.rawEndedWithFocusTail);
  }
  function z(E) {
    if (S.current && E.key === "return") {
      E.preventDefault(), T.current = !0;
      return;
    }
    if ((e || n) && !E.ctrl && !E.meta && E.key.length > b4 && !E.defaultPrevented) {
      E.preventDefault(), c(!0);
      let Q = new Kae(E.key);
      v(Q.text, Q.rawEmpty, Q.rawEndedWithFocusTail);
      return;
    }
    r(E);
  }
  return {
    handleKeyDown: z,
    handlePaste: de,
    isPasting: l
  };
}

import { randomBytes as Re } from "crypto";

import { copyFile as Me, mkdir as st, readFile as Te, writeFile as je } from "fs/promises";

import { homedir as Ge, platform as _e } from "os";

import { dirname as tr, join as se } from "path";

var p = `\n`, ve = {
  ghostty: "Ghostty",
  kitty: "Kitty",
  "iTerm.app": "iTerm2",
  WezTerm: "WezTerm",
  WarpTerminal: "Warp",
  "windows-terminal": "Windows Terminal"
};

function Ve() {
  let e = a.VSCODE_GIT_ASKPASS_MAIN ?? "", r = a.PATH ?? "";
  return e.includes(".vscode-server") || e.includes(".cursor-server") || e.includes(".windsurf-server") || e.includes(".devin-server") || r.includes(".vscode-server") || r.includes(".cursor-server") || r.includes(".windsurf-server") || r.includes(".devin-server");
}

function d9n() {
  if (!a.terminal || !(a.terminal in ve)) return null;
  return ve[a.terminal] ?? null;
}

function He() {
  return "";
}

async function c9n(e, r, n) {
  let s = "", o = !0;
  switch (a.terminal) {
   case "Apple_Terminal":
    s = await nr(r, n);
    break;

   case "vscode":
    s = await rt(e, "VSCode", r), s += await tt(e, "VSCode", r), s += await YUr(e, "VSCode", r);
    break;

   case "cursor":
    s = await rt(e, "Cursor", r), s += await tt(e, "Cursor", r), s += await YUr(e, "Cursor", r);
    break;

   case "windsurf":
    s = await rt(e, "Devin Desktop", r), s += await tt(e, "Devin Desktop", r), s += await YUr(e, "Devin Desktop", r);
    break;

   case "alacritty":
    s = await ir(r);
    break;

   case "zed":
    {
      let l = await sr(r);
      s = l.message, o = l.installed;
      break;
    }

   case null:
    break;
  }
  return await Ce(l => {
    if (o && xt.includes(a.terminal ?? "")) {
      if (l.shiftEnterKeyBindingInstalled === !0) return l;
      return {
        ...l,
        shiftEnterKeyBindingInstalled: !0
      };
    } else if (a.terminal === "Apple_Terminal") {
      if (l.optionAsMetaKeyInstalled === !0) return l;
      return {
        ...l,
        optionAsMetaKeyInstalled: !0
      };
    }
    return l;
  }, n), s;
}

var yt = 'iTerm2 \u2192 Settings \u2192 General \u2192 Selection \u2192 check "Applications in terminal may access clipboard"';

async function ZBs(e) {
  let r = ge.dim(yt);
  try {
    let {stdout: n, code: s} = await it("defaults", [ "read", "com.googlecode.iterm2", "AllowClipboardAccess" ]);
    if (s === 0 && n.trim() === "1") return `${Gn("success", e)("iTerm2 clipboard access already enabled")}${p}${p}`;
    let {code: o} = await it("defaults", [ "write", "com.googlecode.iterm2", "AllowClipboardAccess", "-bool", "true" ]);
    if (o !== 0) return `${Gn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${p}${r}${p}${p}`;
    return `${Gn("success", e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${p}${ge.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${p}${p}`;
  } catch (n) {
    return d(n), `${Gn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${p}${r}${p}${p}`;
  }
}

function e1s() {
  return ce().shiftEnterKeyBindingInstalled === !0;
}

var xt = [ "vscode", "cursor", "windsurf", "alacritty", "zed" ];

function zMe() {
  if (a.terminal === "Apple_Terminal" && _e() === "darwin") return !0;
  if (a.terminal && a.terminal in ve) return !0;
  return xt.includes(a.terminal ?? "") && e1s();
}

function KUr() {
  return ce().hasUsedBackslashReturn === !0;
}

function EWo(e) {
  if (!ce().hasUsedBackslashReturn) Ce(n => ({
    ...n,
    hasUsedBackslashReturn: !0
  }), e);
}

async function gqs(e, r, n) {
  if (_e() === "darwin" && a.__CFBundleIdentifier === "com.googlecode.iterm2" && (a.terminal === "iTerm.app" || a.terminal === "tmux" || a.terminal === "screen" || a.terminal === null)) {
    let l = `${await ZBs(r.options.theme)}Shift+Enter is natively supported in iTerm2.\n\nNo configuration needed. Just use Shift+Enter to add newlines.${He()}`;
    return e(l), null;
  }
  if (a.terminal && a.terminal in ve) {
    let o = `Shift+Enter is natively supported in ${ve[a.terminal]}.\n\nNo configuration needed. Just use Shift+Enter to add newlines.${He()}`;
    return e(o), null;
  }
  if (!AHe()) {
    let o = a.terminal || "your current terminal", l = O(), c = "";
    if (l === "macos") c = `   \u2022 macOS: Apple Terminal\n`;
    let h = a.LC_TERMINAL === "iTerm2" ? `${p}${p}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${p}${ge.dim(yt)}` : "", S = `Terminal setup cannot be run from ${o}.\n\nThis command configures a convenient Shift+Enter shortcut for multi-line prompts.\n${ge.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}\n\nTo set up the shortcut (optional):\n1. Exit tmux/screen temporarily\n2. Run /terminal-setup directly in one of these terminals:\n${c}   \u2022 IDE: VSCode, Cursor, Devin Desktop, Zed\n   \u2022 Other: Alacritty\n3. Return to tmux/screen - settings will persist\n\n${ge.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${h}${He()}`;
    return e(S), null;
  }
  let s = await c9n(r.session.host, r.options.theme, r.storageV5);
  return e(s + He()), null;
}

var Oe = "terminal.integrated.mouseWheelScrollSensitivity", ke = 3, Ke = "terminal.integrated.gpuAcceleration", et = "off";

async function qUr(e) {
  let r = rr();
  if (!r || Ve()) return null;
  try {
    let n = await Te(se(await u9n.of(e).pathFor(r), "settings.json"), {
      encoding: "utf-8"
    }), s = dOe(n), o = L(s) ? s[Oe] : void 0;
    return {
      editor: r,
      sensitivity: typeof o === "number" ? o : null,
      recommended: ke
    };
  } catch (n) {
    if (!jt(n)) d(n);
    return {
      editor: r,
      sensitivity: null,
      recommended: ke
    };
  }
}

function rr() {
  switch (a.terminal) {
   case "vscode":
    return "VSCode";

   case "cursor":
    return "Cursor";

   case "windsurf":
    return "Devin Desktop";

   default:
    return null;
  }
}

class Tt {
  pathFor=lo(async e => {
    let r = n => se(Ge(), _e() === "win32" ? se("AppData", "Roaming", n, "User") : _e() === "darwin" ? se("Library", "Application Support", n, "User") : se(".config", n, "User"));
    if (e === "VSCode") return r("Code");
    if (e === "Devin Desktop") {
      let n = r("Devin");
      return await Gc(n) ? n : r("Windsurf");
    }
    return r(e);
  }, e => `${e}:${Ge()}`);
}

var u9n = new K(() => new Tt);

async function tt(e, r, n) {
  let s = ge.dim(`For smoother scrolling, set "${Oe}": ${ke} in ${r} settings.`);
  if (Ve()) return `${s}${p}`;
  let o = se(await u9n.of(e).pathFor(r), "settings.json");
  try {
    let l = "{}", c = !1;
    try {
      l = await Te(o, {
        encoding: "utf-8"
      }), c = !0;
    } catch (T) {
      if (!jt(T)) throw T;
    }
    let h = dOe(l);
    if (!L(h)) return `${Gn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`;
    if (Oe in h) return `${Gn("success", n)(`${r} ${Oe} already set; leaving as-is`)}${p}${ge.dim(`See ${o}`)}${p}`;
    let S = qIo(l, Oe, ke);
    if (S === l) return `${Gn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
    if (c) {
      let T = `${o}.${Re(4).toString("hex")}.bak`;
      try {
        await Me(o, T);
      } catch {
        return `${Gn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${p}${s}${p}`;
      }
    }
    return await je(o, S, {
      encoding: "utf-8"
    }), `${Gn("success", n)(`Set ${r} terminal scroll sensitivity to ${ke}`)}${p}${ge.dim(`See ${o}`)}${p}`;
  } catch (l) {
    return t(`Couldn't update ${r} settings.json at ${o}: ${l instanceof Error ? l.message : String(l)}`, {
      level: "error"
    }), `${Gn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
  }
}

async function YUr(e, r, n) {
  let s = ge.dim(`To fix garbled text, set "${Ke}": "${et}" in ${r} settings (undo: set it back to "auto").`);
  if (Ve()) return f("terminal_setup_gpu_accel", "remote_ssh"), `${s}${p}`;
  let o = se(await u9n.of(e).pathFor(r), "settings.json");
  try {
    let l = "{}", c = !1;
    try {
      l = await Te(o, {
        encoding: "utf-8"
      }), c = !0;
    } catch (T) {
      if (!jt(T)) throw T;
    }
    let h = dOe(l);
    if (!L(h)) return f("terminal_setup_gpu_accel", "not_json_object"), `${Gn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`;
    if (h[Ke] === et) return g("terminal_setup_gpu_accel"), `${Gn("success", n)(`${r} GPU acceleration already off; leaving as-is`)}${p}${ge.dim(`See ${o}`)}${p}`;
    let S = qIo(l, Ke, et);
    if (S === l) return f("terminal_setup_gpu_accel", "write_failed"), `${Gn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
    if (c) {
      let T = `${o}.${Re(4).toString("hex")}.bak`;
      try {
        await Me(o, T);
      } catch {
        return f("terminal_setup_gpu_accel", "backup_failed"), `${Gn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${p}${s}${p}`;
      }
    }
    return await je(o, S, {
      encoding: "utf-8"
    }), g("terminal_setup_gpu_accel"), `${Gn("success", n)(`Turned off ${r} GPU acceleration to fix garbled text`)}${p}${ge.dim(`Reload the ${r} window to apply. Undo: set "${Ke}" back to "auto".`)}${p}${ge.dim(`See ${o}`)}${p}`;
  } catch (l) {
    return f("terminal_setup_gpu_accel", "write_failed"), t(`Couldn't update ${r} settings.json at ${o}: ${l instanceof Error ? l.message : String(l)}`, {
      level: "error"
    }), `${Gn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
  }
}

async function rt(e, r = "VSCode", n) {
  if (Ve()) return `${Gn("warning", n)(`Cannot install keybindings from a remote ${r} session.`)}${p}${p}${r} keybindings must be installed on your local machine, not the remote server.${p}${p}To install the Shift+Enter keybinding:${p}1. Open ${r} on your local machine (not connected to remote)${p}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${p}3. Add this keybinding (the file must be a JSON array):${p}${p}${ge.dim(`[\n  {\n    "key": "shift+enter",\n    "command": "workbench.action.terminal.sendSequence",\n    "args": { "text": "\\u001b\\r" },\n    "when": "terminalFocus"\n  }\n]`)}${p}`;
  let s = await u9n.of(e).pathFor(r), o = se(s, "keybindings.json");
  try {
    await st(s, {
      recursive: !0
    });
    let l = "[]", c = [], h = !1;
    try {
      l = await Te(o, {
        encoding: "utf-8"
      }), h = !0, c = dOe(l) ?? [];
    } catch (M) {
      if (!jt(M)) throw M;
    }
    if (h) {
      let M = Re(4).toString("hex"), G = `${o}.${M}.bak`;
      try {
        await Me(o, G);
      } catch {
        return `${Gn("warning", n)(`Error backing up existing ${r} terminal keybindings. Bailing out.`)}${p}${ge.dim(`See ${o}`)}${p}${ge.dim(`Backup path: ${G}`)}${p}`;
      }
    }
    let S = {
      key: "shift+enter",
      command: "workbench.action.terminal.sendSequence",
      args: {
        text: "\x1b\r"
      },
      when: "terminalFocus"
    }, T = c.find(M => M.key === S.key && M.command === S.command && M.when === S.when);
    if (T) {
      let M = ge.dim(`See ${o}`);
      if (T.args?.text === S.args.text) return `${Gn("success", n)(`${r} terminal Shift+Enter key binding already configured`)}${p}${M}${p}`;
      return `${Gn("warning", n)(`${r} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${p}${M}${p}`;
    }
    let C = PNs(l, S);
    return await je(o, C, {
      encoding: "utf-8"
    }), `${Gn("success", n)(`Installed ${r} terminal Shift+Enter key binding`)}${p}${ge.dim(`See ${o}`)}${p}`;
  } catch (l) {
    throw t(`Failed to install ${r} terminal Shift+Enter keybinding: ${l instanceof Error ? l.message : String(l)}`, {
      level: "error"
    }), Error(`Failed to install ${r} terminal Shift+Enter key binding`);
  }
}

async function gt(e) {
  let {code: r} = await it("/usr/libexec/PlistBuddy", [ "-c", `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`, Xjt() ]);
  if (r !== 0) {
    let {code: n} = await it("/usr/libexec/PlistBuddy", [ "-c", `Set :'Window Settings':'${e}':useOptionAsMetaKey true`, Xjt() ]);
    if (n !== 0) return t(`Failed to enable Option as Meta key for Terminal.app profile: ${e}`, {
      level: "error"
    }), !1;
  }
  return !0;
}

async function bt(e) {
  let {code: r} = await it("/usr/libexec/PlistBuddy", [ "-c", `Add :'Window Settings':'${e}':Bell bool false`, Xjt() ]);
  if (r !== 0) {
    let {code: n} = await it("/usr/libexec/PlistBuddy", [ "-c", `Set :'Window Settings':'${e}':Bell false`, Xjt() ]);
    if (n !== 0) return t(`Failed to disable audio bell for Terminal.app profile: ${e}`, {
      level: "error"
    }), !1;
  }
  return !0;
}

async function nr(e, r) {
  let n = (YFs() ?? 0) >= 27, s = Am();
  if (n && s) return `${Gn("success", e)("No Terminal.app changes needed.")}${p}${ge.dim("Shift+Return already enters a newline on this macOS version, and screen-reader mode leaves the audible bell setting unchanged.")}${p}`;
  try {
    if (!await $Vo(r)) throw Error("Failed to create backup of Terminal.app preferences, bailing out");
    let {stdout: l, code: c} = await it("defaults", [ "read", "com.apple.Terminal", "Default Window Settings" ]);
    if (c !== 0 || !l.trim()) throw Error("Failed to read default Terminal.app profile");
    let {stdout: h, code: S} = await it("defaults", [ "read", "com.apple.Terminal", "Startup Window Settings" ]);
    if (S !== 0 || !h.trim()) throw Error("Failed to read startup Terminal.app profile");
    let T = !1, C = l.trim(), M = n ? !1 : await gt(C), G = s ? !1 : await bt(C);
    if (M || G) T = !0;
    let U = h.trim();
    if (U !== C) {
      let q = n ? !1 : await gt(U), D = s ? !1 : await bt(U);
      if (q || D) T = !0;
    }
    if (!T) {
      if (n) throw Error("Failed to disable audio bell for any Terminal.app profile");
      if (s) throw Error("Failed to enable Option as Meta key for any Terminal.app profile");
      throw Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
    }
    await it("killall", [ "cfprefsd" ]), await Yjt(r);
    let re = [ Gn("success", e)("Configured Terminal.app settings:") ];
    if (!n) re.push(Gn("success", e)('- Enabled "Use Option as Meta key"'));
    if (!s) re.push(Gn("success", e)("- Disabled the audible bell")); else re.push(ge.dim("- Left the audible bell setting unchanged (screen-reader mode uses it)"));
    let Y = n ? ge.dim("Shift+Return will now enter a newline.") : ge.dim("Option+Enter will now enter a newline.");
    return `${re.join(p)}${p}${Y}${p}${ge.dim("You must restart Terminal.app for changes to take effect.")}${p}`;
  } catch (o) {
    t(`Terminal.app setup failed: ${o instanceof Error ? o.message : String(o)}`, {
      level: "error"
    });
    let l = await myn(r), c = n ? "Failed to disable the audio bell for Terminal.app." : "Failed to enable Option as Meta key for Terminal.app.";
    if (l.status === "restored") throw Error(`${c} Your settings have been restored from backup.`); else if (l.status === "failed") throw Error(`${c} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${l.backupPath}`); else throw Error(`${c} No backup was available to restore from.`);
  }
}

async function ir(e) {
  let n = [], s = a.XDG_CONFIG_HOME;
  if (s) n.push(se(s, "alacritty", "alacritty.toml")); else n.push(se(Ge(), ".config", "alacritty", "alacritty.toml"));
  if (_e() === "win32") {
    let h = a.APPDATA;
    if (h) n.push(se(h, "alacritty", "alacritty.toml"));
  }
  let o = null, l = "", c = !1;
  for (let h of n) try {
    l = await Te(h, {
      encoding: "utf-8"
    }), o = h, c = !0;
    break;
  } catch (S) {
    if (!jt(S)) throw S;
  }
  if (!o) o = n[0] ?? null;
  if (!o) throw Error("No valid config path found for Alacritty");
  try {
    if (c) {
      if (l.includes('mods = "Shift"') && l.includes('key = "Return"')) return `${Gn("success", e)("Alacritty Shift+Enter key binding already configured")}${p}${ge.dim(`See ${o}`)}${p}`;
      let S = Re(4).toString("hex"), T = `${o}.${S}.bak`;
      try {
        await Me(o, T);
      } catch {
        return `${Gn("warning", e)("Error backing up existing Alacritty config. Bailing out.")}${p}${ge.dim(`See ${o}`)}${p}${ge.dim(`Backup path: ${T}`)}${p}`;
      }
    } else await st(tr(o), {
      recursive: !0
    });
    let h = l;
    if (l && !l.endsWith(`\n`)) h += `\n`;
    return h += `\n[[keyboard.bindings]]\nkey = "Return"\nmods = "Shift"\nchars = "\\u001B\\r"\n`, 
    await je(o, h, {
      encoding: "utf-8"
    }), `${Gn("success", e)("Installed Alacritty Shift+Enter key binding")}${p}${Gn("success", e)("You may need to restart Alacritty for changes to take effect")}${p}${ge.dim(`See ${o}`)}${p}`;
  } catch (h) {
    throw t(`Failed to install Alacritty keybinding: ${h instanceof Error ? h.message : String(h)}`, {
      level: "error"
    }), Error("Failed to install Alacritty Shift+Enter key binding");
  }
}

var nt = [ "terminal::SendText", "\x1b\r" ];

function wt(e) {
  return L(e) && e.context === "Terminal" && L(e.bindings) && "shift-enter" in e.bindings;
}

async function sr(e) {
  let r = O() === "linux" ? a.XDG_CONFIG_HOME : void 0, n = r ? se(r, "zed") : se(Ge(), ".config", "zed"), s = se(n, "keymap.json"), o = ge.dim(`See ${s}`), l = ge.dim(`To add the binding yourself, add this block to the keymap array in ${s}:${p}{ "context": "Terminal", "bindings": { "shift-enter": ["terminal::SendText", "\\u001b\\r"] } }`), c = `${Gn("success", e)("Installed Zed Shift+Enter key binding")}${p}${o}${p}`, h = `${Gn("warning", e)("Couldn't read your Zed keymap, so it was left unchanged.")}${p}${l}${p}`, S = `${Gn("warning", e)("Your Zed keymap isn't a readable list of keybindings, so it was left unchanged.")}${p}${l}${p}`;
  try {
    await st(n, {
      recursive: !0
    });
    let T = null;
    try {
      T = await Te(s, {
        encoding: "utf-8"
      });
    } catch (v) {
      if (!jt(v)) throw v;
      if (!W(v)) return {
        message: h,
        installed: !1
      };
    }
    if (T === null || Mo(T).trim() === "") return await Tn(s, _([ {
      context: "Terminal",
      bindings: {
        "shift-enter": nt
      }
    } ], null, 2) + `\n`), {
      message: c,
      installed: !0
    };
    let C = [], M = Mo(T), G = B1e(M, C, {
      allowTrailingComma: !0
    });
    if (C.length > 0 || !Array.isArray(G)) return {
      message: S,
      installed: !1
    };
    if (G.some(wt)) return {
      message: `${Gn("success", e)("Zed Shift+Enter key binding already configured")}${p}${o}${p}`,
      installed: !0
    };
    let U = Re(4).toString("hex"), re = `${s}.${U}.bak`;
    try {
      await Me(s, re);
    } catch (v) {
      return t(`Failed to back up Zed keymap: ${v instanceof Error ? v.message : String(v)}`, {
        level: "error"
      }), {
        message: `${Gn("warning", e)("Couldn't back up your Zed keymap; not modifying it.")}${p}${l}${p}`,
        installed: !1
      };
    }
    let Y = G.findIndex(v => L(v) && v.context === "Terminal" && L(v.bindings)), q = {
      insertSpaces: !0,
      tabSize: 2
    }, D = null;
    try {
      let v = Y >= 0 ? han(M, [ Y, "bindings", "shift-enter" ], nt, {
        formattingOptions: q
      }) : han(M, [ G.length ], {
        context: "Terminal",
        bindings: {
          "shift-enter": nt
        }
      }, {
        formattingOptions: q,
        isArrayInsertion: !0
      });
      D = v.length > 0 ? iqn(M, v) : null;
    } catch (v) {
      t(`Failed to edit Zed keymap: ${v instanceof Error ? v.message : String(v)}`, {
        level: "error"
      });
    }
    let B = [], J = D === null ? null : B1e(D, B, {
      allowTrailingComma: !0
    });
    if (D === null || B.length > 0 || !Array.isArray(J) || !J.some(wt)) return {
      message: `${Gn("warning", e)("Couldn't update your Zed keymap, so it was left unchanged.")}${p}${l}${p}`,
      installed: !1
    };
    return await Tn(s, D), {
      message: c,
      installed: !0
    };
  } catch (T) {
    throw t(`Failed to install Zed Shift+Enter key binding: ${T instanceof Error ? T.message : String(T)}`, {
      level: "error"
    }), Error("Failed to install Zed Shift+Enter key binding");
  }
}

var Ue = /[\u001b\u0080-\u009f]/g, St = "\u2060";

function At(e, r, n = Pc) {
  let s = e.search(Ue) === -1 ? e : or(e), o = n(s, r, {
    hard: !0,
    trim: !1
  }).split(`\n`), l = [], c = 0, h = !0;
  for (let S of o) {
    if (!s.startsWith(S, c)) return {
      rows: Et(e, r),
      degraded: !0
    };
    let T = c + S.length, C = s.startsWith(`\r\n`, T) ? 2 : s[T] === `\n` || s[T] === "\r" ? 1 : 0;
    l.push({
      text: e.slice(c, T),
      startOffset: c,
      isPrecededByNewline: h,
      endsWithNewline: C > 0
    }), h = C > 0, c = T + C;
  }
  return c === e.length ? {
    rows: l,
    degraded: !1
  } : {
    rows: Et(e, r),
    degraded: !0
  };
}

function or(e) {
  let r = Jve();
  return e.split(`\n`).map(n => n.search(Ue) === -1 ? n : n.split("\r").map(s => s.search(Ue) === -1 ? s : [ ...r.feed(s), ...r.flush() ].map(o => o.type === "sequence" ? St.repeat(o.value.length) : o.value.replace(Ue, St)).join("")).join("\r")).join(`\n`);
}

function Et(e, r) {
  let n = [], s = 0;
  for (let o of e.split(/\r\n|[\n\r]/)) {
    let l = 0, c = 0;
    for (let {segment: T, index: C} of pa().segment(o)) {
      let M = ie(T);
      if (c + M > r && C > l) n.push({
        text: o.slice(l, C),
        startOffset: s + l,
        isPrecededByNewline: l === 0,
        endsWithNewline: !1
      }), l = C, c = 0;
      c += M;
    }
    let h = s + o.length, S = e.startsWith(`\r\n`, h) ? 2 : h < e.length ? 1 : 0;
    n.push({
      text: o.slice(l),
      startOffset: s + l,
      isPrecededByNewline: l === 0,
      endsWithNewline: S > 0
    }), s = h + S;
  }
  return n;
}

var ar = /^[\p{L}\p{N}\p{M}_]+$/u, lr = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*/gu, Se = /\s/, ot = "(?:\\[(?:Pasted text|Image|\\.\\.\\.Truncated text|\u2726 Team setup guide) #\\d+(?: \\+\\d+ lines)?\\.*\\]|\\[\u29c9 [^\\]\\n]+\\])", ur = new RegExp(ot + "$"), $t = new RegExp("^" + ot), kWo = (e, r) => e[r] === "[" && $t.test(e.slice(r)), cr = new RegExp(ot, "g"), Ize = e => ar.test(e), I7e = e => Se.test(e), O7e = e => e.length > 0 && !I7e(e) && !Ize(e);

class ki {
  measuredText;
  selection;
  offset;
  constructor(e, r = 0, n = 0) {
    this.measuredText = e;
    this.selection = n;
    this.offset = Math.max(0, Math.min(this.text.length, r));
  }
  static fromText(e, r, n = 0, s = 0) {
    return new ki(new Lt(e, r - 1), n, s);
  }
  getViewportStartLine(e) {
    if (e === void 0 || e <= 0) return 0;
    let {line: r} = this.getPosition(), n = this.measuredText.getWrappedText();
    if (n.length <= e) return 0;
    let s = Math.floor(e / 2), o = Math.max(0, r - s), l = Math.min(n.length, o + e);
    if (l - o < e) o = Math.max(0, l - e);
    return o;
  }
  getRenderedRowStartOffsets(e) {
    let {startLine: r, endLine: n} = this.getViewportLineRange(e);
    return this.measuredText.getWrappedLines().slice(r, n).map(s => s.displayStartOffset);
  }
  getViewportLineRange(e) {
    let r = this.measuredText.getWrappedLines().length, n = this.getViewportStartLine(e), s = e !== void 0 && e > 0 ? Math.min(r, n + e) : r;
    return {
      startLine: n,
      endLine: s
    };
  }
  render(e, r, n, s, o, l, c, h) {
    let S = this.measuredText.getWrappedLines(), {startLine: T, endLine: C} = this.getViewportLineRange(o);
    if (l !== void 0) {
      let Y = Math.min(l, this.offset), q = Math.max(l, this.offset), D = c ? this.findLogicalLineStart(Y) : Y, B = c ? this.findLogicalLineEnd(q) : this.measuredText.nextOffset(q);
      return S.slice(T, C).map((J, v) => {
        let de = (h ?? !1) && (J.endsWithNewline || v + T === S.length - 1), {displayText: z, displayStartOffset: E} = J, Q = E + z.length;
        if (B <= E || D >= Q) {
          if (E === Q && D <= E && (c ? B >= Q : B > Q)) return h ?? !1 ? "" : n(" ");
          return de ? z : z.trimEnd();
        }
        if (E === Q) return h ?? !1 ? "" : n(" ");
        let ne = Math.max(0, D - E), X = Math.min(z.length, B - E);
        if (h ?? !1) {
          let H = de ? z : z.trimEnd(), j = Math.min(ne, H.length), le = Math.min(X, H.length);
          return H.slice(0, j) + n(H.slice(j, le)) + H.slice(le);
        }
        return z.slice(0, ne) + n(z.slice(ne, X)) + z.slice(X).trimEnd();
      }).join(`\n`);
    }
    let {line: M, column: G} = this.getPosition(), U = this.measuredText.getWrappedText(), re = this.measuredText.getWrappedLines();
    return U.slice(T, C).map((Y, q) => {
      let D = q + T, B = (h ?? !1) && ((re[D]?.endsWithNewline ?? !1) || D === U.length - 1), J = Y;
      if (r) {
        let H = Array.from(pa().segment(Y));
        if (D === U.length - 1) {
          let j = Math.min(6, H.length), le = H.length - j, ee = H.length > j ? H[le].index : 0;
          J = r.repeat(le) + Y.slice(ee);
        } else J = r.repeat(H.length);
      }
      if (M !== D) return B ? J : J.trimEnd();
      let v = "", de = e, z = "", E = 0, Q = !1;
      for (let {segment: H} of pa().segment(J)) {
        if (Q) {
          z += H;
          continue;
        }
        let j = E + ie(H);
        if (j > G) de = H, Q = !0; else E = j, v += H;
      }
      let ne, X = "";
      if (s && D === U.length - 1 && this.isAtEnd() && s.text.length > 0) {
        let H = Zve(s.text) || s.text[0];
        ne = e ? n(H) : H;
        let j = s.text.slice(H.length);
        if (j.length > 0) X = s.dim(j);
      } else ne = e ? n(de) : de;
      if (h && !B && e === "") return (v + ne + X + z).trimEnd();
      return v + ne + X + (B ? z : z.trimEnd());
    }).join(`\n`);
  }
  left() {
    if (this.offset === 0) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new ki(this.measuredText, e.start);
    let r = this.measuredText.prevOffset(this.offset);
    return new ki(this.measuredText, r);
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let e = this.placeholderStartingAt(this.offset);
    if (e) return new ki(this.measuredText, e.end);
    let r = this.measuredText.nextOffset(this.offset);
    return new ki(this.measuredText, Math.min(r, this.text.length));
  }
  placeholderEndingAt(e) {
    if (this.text[e - 1] !== "]") return null;
    let r = this.text.slice(0, e).match(ur);
    return r ? {
      start: e - r[0].length,
      end: e
    } : null;
  }
  placeholderStartingAt(e) {
    if (this.text[e] !== "[") return null;
    let r = this.text.slice(e).match($t);
    return r ? {
      start: e,
      end: e + r[0].length
    } : null;
  }
  placeholderContaining(e) {
    for (let r of this.text.matchAll(cr)) {
      let n = r.index, s = n + r[0].length;
      if (e > n && e < s) return {
        start: n,
        end: s
      };
      if (n >= e) break;
    }
    return null;
  }
  snapOutOfPlaceholder(e, r) {
    let n = this.placeholderContaining(e);
    if (!n) return e;
    return r === "start" ? n.start : n.end;
  }
  up() {
    let {line: e, column: r} = this.getPosition();
    if (e === 0) return this;
    let n = this.measuredText.getWrappedText()[e - 1];
    if (n === void 0) return this;
    let s = ie(n);
    if (r > s) {
      let l = this.getOffset({
        line: e - 1,
        column: s
      });
      return new ki(this.measuredText, l, 0);
    }
    let o = this.getOffset({
      line: e - 1,
      column: r
    });
    return new ki(this.measuredText, o, 0);
  }
  down() {
    let {line: e, column: r} = this.getPosition();
    if (e >= this.measuredText.lineCount - 1) return this;
    let n = this.measuredText.getWrappedText()[e + 1];
    if (n === void 0) return this;
    let s = ie(n);
    if (r > s) {
      let l = this.getOffset({
        line: e + 1,
        column: s
      });
      return new ki(this.measuredText, l, 0);
    }
    let o = this.getOffset({
      line: e + 1,
      column: r
    });
    return new ki(this.measuredText, o, 0);
  }
  startOfCurrentLine() {
    let {line: e} = this.getPosition();
    return new ki(this.measuredText, this.getOffset({
      line: e,
      column: 0
    }), 0);
  }
  startOfLine() {
    let {line: e, column: r} = this.getPosition();
    if (r === 0 && e > 0) return new ki(this.measuredText, this.getOffset({
      line: e - 1,
      column: 0
    }), 0);
    return this.startOfCurrentLine();
  }
  firstNonBlankInLine() {
    let {line: e} = this.getPosition(), n = (this.measuredText.getWrappedText()[e] || "").match(/^\s*\S/), s = n?.index ? n.index + n[0].length - 1 : 0, o = this.getOffset({
      line: e,
      column: s
    });
    return new ki(this.measuredText, o, 0);
  }
  endOfLine() {
    let {line: e, column: r} = this.getPosition(), n = this.measuredText.getLineLength(e);
    if (r >= n && e < this.measuredText.lineCount - 1) {
      let o = this.measuredText.getLineLength(e + 1), l = this.getOffset({
        line: e + 1,
        column: o
      });
      return new ki(this.measuredText, l, 0);
    }
    let s = this.getOffset({
      line: e,
      column: n
    });
    return new ki(this.measuredText, s, 0);
  }
  findLogicalLineStart(e = this.offset) {
    if (e === 0) return 0;
    let r = this.text.lastIndexOf(`\n`, e - 1);
    return r === -1 ? 0 : r + 1;
  }
  findLogicalLineEnd(e = this.offset) {
    let r = this.text.indexOf(`\n`, e);
    return r === -1 ? this.text.length : r;
  }
  getLogicalLineBounds() {
    return {
      start: this.findLogicalLineStart(),
      end: this.findLogicalLineEnd()
    };
  }
  createCursorWithColumn(e, r, n) {
    let s = r - e, o = Math.min(n, s), l = e + o, c = this.measuredText.snapToGraphemeBoundary(l);
    return new ki(this.measuredText, c, 0);
  }
  endOfLogicalLine() {
    return new ki(this.measuredText, this.findLogicalLineEnd(), 0);
  }
  lastCharInLogicalLine() {
    let e = this.findLogicalLineStart(), r = this.findLogicalLineEnd(), n = r > e ? this.measuredText.prevOffset(r) : e;
    return new ki(this.measuredText, n, 0);
  }
  startOfLogicalLine() {
    return new ki(this.measuredText, this.findLogicalLineStart(), 0);
  }
  firstNonBlankInLogicalLine() {
    let {start: e, end: r} = this.getLogicalLineBounds(), s = this.text.slice(e, r).match(/\S/), o = e + (s?.index ?? 0);
    return new ki(this.measuredText, o, 0);
  }
  upLogicalLine() {
    let {start: e} = this.getLogicalLineBounds();
    if (e === 0) return new ki(this.measuredText, 0, 0);
    let r = this.offset - e, n = e - 1, s = this.findLogicalLineStart(n);
    return this.createCursorWithColumn(s, n, r);
  }
  downLogicalLine() {
    let {start: e, end: r} = this.getLogicalLineBounds();
    if (r >= this.text.length) return new ki(this.measuredText, this.text.length, 0);
    let n = this.offset - e, s = r + 1, o = this.findLogicalLineEnd(s);
    return this.createCursorWithColumn(s, o, n);
  }
  forwardWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new ki(this.measuredText, e.end);
    for (let r of this.measuredText.getReadlineWordBoundaries()) if (r.end > this.offset) {
      let n = this.snapOutOfPlaceholder(r.end, "end");
      return new ki(this.measuredText, n);
    }
    return new ki(this.measuredText, this.text.length);
  }
  backwardWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new ki(this.measuredText, e.start);
    let r = this.measuredText.getReadlineWordBoundaries();
    for (let n = r.length - 1; n >= 0; n--) {
      let s = r[n];
      if (s.start < this.offset) {
        let o = this.snapOutOfPlaceholder(s.start, "start");
        return new ki(this.measuredText, o);
      }
    }
    return new ki(this.measuredText, 0);
  }
  killWord() {
    let e = this.forwardWord();
    if (e.offset === this.offset) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(this.offset, e.offset);
  }
  backwardKillWord() {
    let e = this.backwardWord();
    if (e.offset === this.offset) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(e.offset, this.offset);
  }
  nextVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) {
      let o = e.end;
      while (o < this.text.length && Se.test(this.graphemeAt(o))) o = this.measuredText.nextOffset(o);
      return new ki(this.measuredText, o);
    }
    let r = this.offset, n = o => this.measuredText.nextOffset(o), s = this.graphemeAt(r);
    if (!s) return this;
    if (Ize(s)) while (r < this.text.length && Ize(this.graphemeAt(r))) r = n(r); else if (O7e(s)) while (r < this.text.length && O7e(this.graphemeAt(r))) r = n(r);
    while (r < this.text.length && Se.test(this.graphemeAt(r))) r = n(r);
    return new ki(this.measuredText, this.snapOutOfPlaceholder(r, "end"));
  }
  endOfVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new ki(this.measuredText, e.end - 1);
    let r = this.text, n = this.offset, s = c => this.measuredText.nextOffset(c);
    if (this.graphemeAt(n) === "") return this;
    n = s(n);
    while (n < r.length && Se.test(this.graphemeAt(n))) n = s(n);
    if (n >= r.length) return new ki(this.measuredText, r.length);
    let o = this.graphemeAt(n);
    if (Ize(o)) while (n < r.length) {
      let c = s(n);
      if (c >= r.length || !Ize(this.graphemeAt(c))) break;
      n = c;
    } else if (O7e(o)) while (n < r.length) {
      let c = s(n);
      if (c >= r.length || !O7e(this.graphemeAt(c))) break;
      n = c;
    }
    let l = this.placeholderStartingAt(n) ?? this.placeholderContaining(n);
    if (l) n = l.end - 1;
    return new ki(this.measuredText, n);
  }
  prevVimWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new ki(this.measuredText, e.start);
    let r = this.placeholderContaining(this.offset);
    if (r) return new ki(this.measuredText, r.start);
    let n = this.offset, s = l => this.measuredText.prevOffset(l);
    n = s(n);
    while (n > 0 && Se.test(this.graphemeAt(n))) n = s(n);
    if (n === 0 && Se.test(this.graphemeAt(0))) return new ki(this.measuredText, 0);
    let o = this.graphemeAt(n);
    if (Ize(o)) while (n > 0) {
      let l = s(n);
      if (!Ize(this.graphemeAt(l))) break;
      n = l;
    } else if (O7e(o)) while (n > 0) {
      let l = s(n);
      if (!O7e(this.graphemeAt(l))) break;
      n = l;
    }
    return new ki(this.measuredText, this.snapOutOfPlaceholder(n, "start"));
  }
  nextWORD() {
    let e = this;
    while (!e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    while (e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    return e;
  }
  endOfWORD() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new ki(this.measuredText, e.end - 1);
    let r = this;
    if (!r.isOverWhitespace() && (r.right().isOverWhitespace() || r.right().isAtEnd())) return r = r.right(), 
    r.endOfWORD();
    if (r.isOverWhitespace()) {
      r = r.nextWORD();
      let s = r.placeholderStartingAt(r.offset);
      if (s) return new ki(this.measuredText, s.end - 1);
    }
    while (!r.right().isOverWhitespace() && !r.isAtEnd()) r = r.right();
    return r;
  }
  prevWORD() {
    let e = this;
    if (e.left().isOverWhitespace()) e = e.left();
    while (e.isOverWhitespace() && !e.isAtStart()) e = e.left();
    if (!e.isOverWhitespace()) while (!e.left().isOverWhitespace() && !e.isAtStart()) e = e.left();
    return e;
  }
  modifyText(e, r = "") {
    let n = this.offset, s = e.offset, o = this.text.slice(0, n) + r, l = o + this.text.slice(s), c = o.normalize("NFC").length, h = ki.fromText(l, this.columns, c), S = c !== n + r.normalize("NFC").length, {measuredText: T, offset: C} = h;
    if (S && T.snapToGraphemeBoundary(C) !== C) return new ki(T, T.nextOffset(C));
    return h;
  }
  insert(e) {
    return this.modifyText(this, e);
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right());
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this);
  }
  deleteToLineStart() {
    if (this.offset > 0 && this.text[this.offset - 1] === `\n`) return {
      cursor: this.left().modifyText(this),
      killed: `\n`
    };
    let e = this.startOfLine();
    return this.killRange(e.offset, this.offset);
  }
  deleteToLineEnd() {
    if (this.text[this.offset] === `\n`) return {
      cursor: this.modifyText(this.right()),
      killed: `\n`
    };
    return this.killRange(this.offset, this.endOfLine().offset);
  }
  deleteToLogicalLineEnd() {
    if (this.text[this.offset] === `\n`) return this.modifyText(this.right());
    return this.killRange(this.offset, this.endOfLogicalLine().offset).cursor;
  }
  deleteWORDBefore() {
    if (this.isAtStart()) return {
      cursor: this,
      killed: ""
    };
    return this.killRange(this.prevWORD().offset, this.offset);
  }
  killRange(e, r) {
    let n = this.snapOutOfPlaceholder(e, "start"), s = this.snapOutOfPlaceholder(r, "end"), o = new ki(this.measuredText, n), l = new ki(this.measuredText, s);
    return {
      cursor: o.modifyText(l),
      killed: this.text.slice(n, s)
    };
  }
  graphemeAt(e) {
    if (e >= this.text.length) return "";
    let r = this.measuredText.nextOffset(e);
    return this.text.slice(e, r);
  }
  isOverWhitespace() {
    let e = this.text[this.offset] ?? "";
    return /\s/.test(e);
  }
  equals(e) {
    return this.offset === e.offset && this.measuredText === e.measuredText;
  }
  isAtStart() {
    return this.offset === 0;
  }
  isAtEnd() {
    return this.offset >= this.text.length;
  }
  startOfFirstLine() {
    return new ki(this.measuredText, 0, 0);
  }
  startOfLastLine() {
    let e = this.text.lastIndexOf(`\n`);
    if (e === -1) return this.startOfLine();
    return new ki(this.measuredText, e + 1, 0);
  }
  goToLine(e) {
    let r = this.text.split(`\n`), n = Math.min(Math.max(0, e - 1), r.length - 1), s = 0;
    for (let o = 0; o < n; o++) s += (r[o]?.length ?? 0) + 1;
    return new ki(this.measuredText, s, 0);
  }
  endOfFile() {
    return new ki(this.measuredText, this.text.length, 0);
  }
  get text() {
    return this.measuredText.text;
  }
  get columns() {
    return this.measuredText.columns + 1;
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset);
  }
  getOffset(e) {
    return this.measuredText.getOffsetFromPosition(e);
  }
  findCharacter(e, r, n = 1) {
    let s = r === "f" || r === "t", o = r === "t" || r === "T", l = 0;
    if (s) {
      let c = this.findLogicalLineEnd(), h = this.measuredText.nextOffset(this.offset);
      while (h < c) {
        if (this.graphemeAt(h) === e) {
          if (l++, l === n) return o ? Math.max(this.offset, this.measuredText.prevOffset(h)) : h;
        }
        h = this.measuredText.nextOffset(h);
      }
    } else {
      let c = this.findLogicalLineStart();
      if (this.offset <= c) return null;
      let h = this.measuredText.prevOffset(this.offset);
      while (h >= c) {
        if (this.graphemeAt(h) === e) {
          if (l++, l === n) return o ? Math.min(this.offset, this.measuredText.nextOffset(h)) : h;
        }
        if (h === c) break;
        h = this.measuredText.prevOffset(h);
      }
    }
    return null;
  }
}

class Ct {
  text;
  startOffset;
  isPrecededByNewline;
  endsWithNewline;
  displayText;
  displayStartOffset;
  constructor(e, r, n, s) {
    this.text = e;
    this.startOffset = r;
    this.isPrecededByNewline = n;
    this.endsWithNewline = s;
    this.displayText = n ? e : e.trimStart(), this.displayStartOffset = r + (e.length - this.displayText.length);
  }
  equals(e) {
    return this.text === e.text && this.startOffset === e.startOffset;
  }
}

class Lt {
  columns;
  _wrappedLines;
  text;
  navigationCache;
  graphemeBoundaries;
  constructor(e, r) {
    this.columns = r;
    this.text = e.normalize("NFC"), this.navigationCache = new Map;
  }
  get wrappedLines() {
    if (!this._wrappedLines) {
      let {rows: e, degraded: r} = At(this.text, this.columns);
      if (r) dr(this.columns, this.text.length);
      this._wrappedLines = e.map(n => new Ct(n.text, n.startOffset, n.isPrecededByNewline, n.endsWithNewline));
    }
    return this._wrappedLines;
  }
  getGraphemeBoundaries() {
    if (!this.graphemeBoundaries) {
      this.graphemeBoundaries = [];
      for (let {index: e} of pa().segment(this.text)) this.graphemeBoundaries.push(e);
      this.graphemeBoundaries.push(this.text.length);
    }
    return this.graphemeBoundaries;
  }
  wordBoundariesCache;
  getWordBoundaries() {
    if (!this.wordBoundariesCache) {
      this.wordBoundariesCache = [];
      for (let e of IMo().segment(this.text)) this.wordBoundariesCache.push({
        start: e.index,
        end: e.index + e.segment.length
      });
    }
    return this.wordBoundariesCache;
  }
  readlineWordBoundariesCache;
  getReadlineWordBoundaries() {
    if (!this.readlineWordBoundariesCache) {
      let e = [], r = !1;
      for (let n of this.getWordBoundaries()) {
        let s = this.text.slice(n.start, n.end);
        for (let o of s.matchAll(lr)) {
          let l = this.snapToGraphemeBoundary(n.start + o.index), c = n.start + o.index + o[0].length, h = this.snapToGraphemeBoundary(c), S = h === c ? c : this.nextOffset(h), T = e.at(-1);
          if (T && (l < T.end || l === T.end && r)) T.end = Math.max(T.end, S); else e.push({
            start: l,
            end: S
          });
          r = S !== c;
        }
      }
      this.readlineWordBoundariesCache = e;
    }
    return this.readlineWordBoundariesCache;
  }
  binarySearchBoundary(e, r, n) {
    let s = 0, o = e.length - 1, l = n ? this.text.length : 0;
    while (s <= o) {
      let c = Math.floor((s + o) / 2), h = e[c];
      if (h === void 0) break;
      if (n) if (h > r) l = h, o = c - 1; else s = c + 1; else if (h < r) l = h, s = c + 1; else o = c - 1;
    }
    return l;
  }
  stringIndexToDisplayWidth(e, r) {
    if (r <= 0) return 0;
    if (r >= e.length) return ie(e);
    return ie(e.substring(0, r));
  }
  displayWidthToStringIndex(e, r) {
    if (r <= 0) return 0;
    if (!e) return 0;
    if (e === this.text) return this.offsetAtDisplayWidth(r);
    let n = 0, s = 0;
    for (let {segment: o, index: l} of pa().segment(e)) {
      let c = ie(o);
      if (n + c > r) break;
      n += c, s = l + o.length;
    }
    return s;
  }
  offsetAtDisplayWidth(e) {
    if (e <= 0) return 0;
    let r = 0, n = this.getGraphemeBoundaries();
    for (let s = 0; s < n.length - 1; s++) {
      let o = n[s], l = n[s + 1];
      if (o === void 0 || l === void 0) continue;
      let c = this.text.substring(o, l), h = ie(c);
      if (r + h > e) return o;
      r += h;
    }
    return this.text.length;
  }
  getWrappedText() {
    return this.wrappedLines.map(e => e.displayText);
  }
  getWrappedLines() {
    return this.wrappedLines;
  }
  getLine(e) {
    let r = this.wrappedLines;
    return r[Math.max(0, Math.min(e, r.length - 1))];
  }
  getOffsetFromPosition(e) {
    let r = this.getLine(e.line);
    if (r.text.length === 0 && r.endsWithNewline) return r.startOffset;
    let n = r.displayStartOffset - r.startOffset, s = e.column + n, o = this.displayWidthToStringIndex(r.text, s), l = r.startOffset + o;
    return this.snapToGraphemeBoundary(l);
  }
  getLineLength(e) {
    let r = this.getLine(e);
    return ie(r.text);
  }
  getPositionFromOffset(e) {
    let r = this.wrappedLines;
    for (let o = 0; o < r.length; o++) {
      let l = r[o], c = r[o + 1];
      if (e >= l.startOffset && (!c || e < c.startOffset)) {
        let h = e - l.startOffset, S;
        if (l.isPrecededByNewline) S = this.stringIndexToDisplayWidth(l.text, h); else {
          let T = l.displayStartOffset - l.startOffset;
          if (h < T) S = 0; else {
            let C = l.displayText, M = h - T;
            S = this.stringIndexToDisplayWidth(C, M);
          }
        }
        return {
          line: o,
          column: Math.max(0, S)
        };
      }
    }
    let n = r.length - 1, s = this.wrappedLines[n];
    return {
      line: n,
      column: ie(s.text)
    };
  }
  get lineCount() {
    return this.wrappedLines.length;
  }
  withCache(e, r) {
    let n = this.navigationCache.get(e);
    if (n !== void 0) return n;
    let s = r();
    return this.navigationCache.set(e, s), s;
  }
  nextOffset(e) {
    return this.withCache(`next:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, !0);
    });
  }
  prevOffset(e) {
    if (e <= 0) return 0;
    return this.withCache(`prev:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, !1);
    });
  }
  snapToGraphemeBoundary(e) {
    if (e <= 0) return 0;
    if (e >= this.text.length) return this.text.length;
    let r = this.getGraphemeBoundaries(), n = 0, s = r.length - 1;
    while (n < s) {
      let o = n + s + 1 >> 1;
      if (r[o] <= e) n = o; else s = o - 1;
    }
    return r[n];
  }
}

function dr(e, r) {
  if (!Ji().claim("measured_text_wrap_fallback")) return;
  d(new x(`Wrapped rows do not tile the text (columns=${e}, length=${r}); fell back to plain hard wrapping`, "Wrapped rows do not tile the text; fell back to plain hard wrapping"));
}

F();

class Ot {
  prewarmed=!1;
  claim() {
    if (this.prewarmed) return !1;
    return this.prewarmed = !0, !0;
  }
  reset() {
    this.prewarmed = !1;
  }
}

var Wn = new K(() => new Ot);

function kt() {}

function _t(e) {
  return !1;
}

var Ymn = 3e3, Xmn = "Press \u2190 again to go back to agents", p9n = "Ambiguous \u2190, press again to detach", vt = 1e3, f9n = 150, fr = 150;

function m9n() {
  return {
    editedEmptyAtMs: 0,
    armedAtMs: 0,
    absorbAnchorMs: 0,
    lastQualifiedLeftPressMs: 0,
    attachConfirmArmedAtMs: 0,
    absorbLogged: !1
  };
}

function g9n(e, r, n, s = k("tengu_left_arrow_editing_guard", !0), o = eWt(r), l = dGe()) {
  if (n !== !0) return "reject";
  let c = S => S !== 0 && S >= l;
  if (o) {
    if (c(e.absorbAnchorMs) && r - e.absorbAnchorMs < vt) return "attach-absorb";
    if (c(e.attachConfirmArmedAtMs) && r - e.attachConfirmArmedAtMs <= 3e3) return r - e.attachConfirmArmedAtMs >= fr ? "fire" : "attach-absorb";
    return "attach-arm";
  }
  if (!s) return "fire";
  if (c(e.lastQualifiedLeftPressMs) && r - e.lastQualifiedLeftPressMs < f9n) return "absorb";
  if (c(e.armedAtMs) && r - e.armedAtMs <= 3e3) return "fire";
  if (c(e.absorbAnchorMs) && r - e.absorbAnchorMs < vt) return "absorb";
  return c(e.editedEmptyAtMs) && r - e.editedEmptyAtMs < 2e3 ? "arm" : "fire";
}

function h9n(e, r, n) {
  switch (r) {
   case "fire":
    if (e.armedAtMs !== 0) e.editedEmptyAtMs = 0;
    e.armedAtMs = 0, e.attachConfirmArmedAtMs = 0, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, 
    e.absorbLogged = !1;
    return;

   case "arm":
    e.armedAtMs = n, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = !1;
    return;

   case "absorb":
    if (n - e.lastQualifiedLeftPressMs < f9n) e.absorbAnchorMs = n;
    e.lastQualifiedLeftPressMs = n;
    return;

   case "reject":
    return;

   case "attach-arm":
    e.attachConfirmArmedAtMs = n;
    return;

   case "attach-absorb":
    return;
  }
}

function y9n(e, r, n) {
  let s = r - dGe();
  switch (e) {
   case "fire":
    return;

   case "arm":
    i("tengu_left_arrow_blocked", {
      reason: b("editing-quiet")
    });
    return;

   case "attach-arm":
    i("tengu_left_arrow_blocked", {
      reason: b("attach-quiet-hint"),
      ms_since_stamp: s
    }), t(`leftArrowGesture: attach-quiet hint armed (ms_since_stamp=${s})`, {
      level: "debug"
    });
    return;

   case "attach-absorb":
    i("tengu_left_arrow_blocked", {
      reason: b("attach-quiet"),
      ms_since_stamp: s
    }), t(`leftArrowGesture: attach-quiet silent absorb (ms_since_stamp=${s})`, {
      level: "debug"
    });
    return;

   case "reject":
    if (Ji().claim("left_arrow_not_solo_reject")) i("tengu_left_arrow_blocked", {
      reason: b("not-solo")
    });
    return;

   case "absorb":
    if (n.absorbAnchorMs === r || n.absorbLogged) return;
    n.absorbLogged = !0;
    let o = r - n.absorbAnchorMs;
    i("tengu_left_arrow_blocked", {
      reason: b("absorb"),
      ms_since_press: o
    }), t(`leftArrowGesture: human-cadence press absorbed, too soon after the last \u2190 that fired or showed the hint (ms_since_press=${o})`, {
      level: "debug"
    });
    return;
  }
}

var mr = () => {};

function hr(e, r) {
  if (e === "") return;
  if (r !== "") {
    HK("deleted");
    return;
  }
  let n = e.trim() === "" ? e.includes(`\n`) ? "new line" : e.includes("\t") ? "tab" : "space" : e.replaceAll(`\n`, " ").trim();
  HK(n);
}

var pr = new Set([ "insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12" ]);

function XUr() {
  return a.terminal === "Apple_Terminal" && _t("shift");
}

function Pt(e) {
  let r = new Map(e);
  return function(n) {
    return (r.get(n) ?? mr)(n);
  };
}

function A1t({value: e, onChange: r, onSubmit: n, onExit: s, onExitMessage: o, onEscapeMessage: l, historyOnClear: c = !0, onLeftArrowOnEmpty: h, leftArrowConfirmHint: S, onHistoryUp: T, onHistoryDown: C, onHistoryReset: M, mask: G = "", multiline: U = !1, disableBackslashReturn: re = !1, clearOnSubmit: Y = !0, disableCtrlCClear: q = !1, cursorChar: D, preserveTrailingWhitespace: B = !1, invert: J, columns: v, leadingPill: de, onImagePaste: z, disableCursorMovementForUpDownKeys: E = !1, disableEscapeDoublePress: Q = !1, maxVisibleLines: ne, externalOffset: X, onOffsetChange: H, inputFilter: j, getPastedContents: le, getInputMode: ee, inlineGhostText: Ee, dim: fe, editRelay: be, selectionAnchor: me, selectionLinewise: ye = !1}) {
  let pe = Ti(), oe = Mze();
  if (a.terminal === "Apple_Terminal") kt();
  let $e = X, We = H, N = de?.text ?? "", w = ki.fromText(N + e, v, N.length + $e), Ye = !1, ze, qe = !1;
  function we(u) {
    return j && ze ? j(u, ze) : u;
  }
  let {addNotification: Ie, removeNotification: Je} = vo(), {storageV5: Ze} = Pe(), [he] = y(m9n), De = "left-arrow-again-for-agents", Ne = R({
    key: "Ctrl-C",
    pending: !1
  }), Rt = Nq(u => {
    Ne.current.pending = u, o?.(u, Ne.current.key);
  }, () => s?.(), () => {
    if (!q && e) r(""), We(0), M?.();
  });
  function lt(u) {
    if (!Ne.current.pending) Ne.current.key = u;
    Rt();
  }
  let Mt = Nq(u => {
    if (!e) return;
    if (l) {
      l(u);
      return;
    }
    if (!u) return;
    Ie({
      key: "escape-again-to-clear",
      kind: "feedback",
      text: "Esc again to clear",
      priority: "immediate",
      timeoutMs: 1e3
    });
  }, () => {
    if (l?.(!1), Je("escape-again-to-clear"), e) {
      if (c && G === "" && e.trim() !== "") {
        let u = le ? Is(le(), ue => ue.type === "text" && ue.unavailable === !0) : void 0, A = ee?.(), I = A !== void 0 ? Fke(e, A) : e, te = u ? {
          display: I,
          pastedContents: u
        } : I;
        if (A !== void 0) nue(te, Ze, {
          submitMode: A
        }); else nue(te, Ze);
      }
      r(""), We(0), M?.();
    }
  });
  function Wt() {
    if (w.text === N && e === "") return lt("Ctrl-D"), w;
    return w.del();
  }
  function ut() {
    if (N !== "" && w.offset === N.length) return ki.fromText(w.text.slice(N.length), v);
    return w.backspace();
  }
  function Le(u, A) {
    let I = u.startsWith(N) ? u.slice(N.length) : u;
    return oe.dispatch(G === "" ? {
      type: "kill",
      text: I,
      direction: A
    } : {
      type: "interrupt"
    }), hr(I, G), I;
  }
  function Xe() {
    let {cursor: u, killed: A} = w.deleteToLineEnd();
    return Le(A, "append"), u;
  }
  function ct() {
    let {cursor: u, killed: A} = w.deleteToLineStart(), I = Le(A, "prepend");
    if (G === "" && I.length >= 3) Ie({
      key: "kill-paste-hint",
      kind: "hint",
      text: "Ctrl+Y to paste deleted text",
      priority: "immediate",
      timeoutMs: 5e3
    });
    return u;
  }
  function It() {
    let {cursor: u, killed: A} = w.killWord();
    return Le(A, "append"), u;
  }
  function Dt() {
    let {cursor: u, killed: A} = w.backwardKillWord();
    return Le(A, "prepend"), u;
  }
  function Nt() {
    let {cursor: u, killed: A} = w.deleteWORDBefore();
    return Le(A, "prepend"), u;
  }
  function Bt() {
    let u = we(F7e(oe.state));
    if (u.length > 0) {
      let A = w.offset - N.length, I = w.insert(u);
      return oe.dispatch({
        type: "yank",
        start: A,
        length: u.length
      }), I;
    }
    return w;
  }
  function Ft() {
    let u = lgn(oe.state);
    if (!u) return w;
    let {text: A, length: I} = u, te = N.length + u.start, ue = we(A);
    oe.dispatch({
      type: "yankPop"
    });
    let xe = w.text.slice(0, te), Fe = w.text.slice(te + I), Jt = xe + ue + Fe, Zt = te + ue.length;
    return oe.dispatch({
      type: "updateYankLength",
      length: ue.length
    }), ki.fromText(Jt, v, Zt);
  }
  let Ht = Pt([ [ "a", () => w.startOfLogicalLine() ], [ "b", () => w.left() ], [ "c", () => (lt("Ctrl-C"), 
  w) ], [ "d", Wt ], [ "e", () => w.endOfLogicalLine() ], [ "f", () => w.right() ], [ "h", ut ], [ "k", Xe ], [ "n", () => mt() ], [ "p", () => ft() ], [ "u", ct ], [ "w", Nt ], [ "y", Bt ] ]), Kt = Pt([ [ "b", () => w.backwardWord() ], [ "f", () => w.forwardWord() ], [ "d", It ], [ "y", Ft ] ]);
  function Gt({meta: u, shift: A}) {
    if (U && !re && w.offset > 0 && w.text[w.offset - 1] === "\\") return EWo(Ze), w.backspace().insert(we(`\n`));
    if (u || A) return w.insert(we(`\n`));
    if (XUr()) return w.insert(we(`\n`));
    if (n) n(w.text.slice(N.length)), Ye = !0;
    return w;
  }
  function Be() {
    he.editedEmptyAtMs = Date.now();
  }
  function dt() {
    if (he.armedAtMs === 0) return;
    he.armedAtMs = 0, Je(De);
  }
  function ft() {
    if (E) return Be(), T?.(), w;
    if (T && w.getPosition().line <= w.measuredText.getPositionFromOffset(N.length).line) return Be(), 
    T(), w;
    let u = w.up();
    if (!u.equals(w)) return u;
    if (U) {
      let A = w.upLogicalLine();
      if (!A.equals(w)) return A;
    }
    return w;
  }
  function mt() {
    if (E) return Be(), C?.(), w;
    if (C && w.getPosition().line >= w.measuredText.lineCount - 1) return Be(), C(), 
    w;
    let u = w.down();
    if (!u.equals(w)) return u;
    if (U) {
      let A = w.downLogicalLine();
      if (!A.equals(w)) return A;
    }
    return w;
  }
  function Vt(u) {
    if (u.ctrl && (u.key === "k" || u.key === "u" || u.key === "w")) return !0;
    if (u.meta && !u.ctrl && u.key === "d") return !0;
    if (u.key === "backspace" && (u.meta || u.superKey || u.ctrl)) return !0;
    if (u.key === "delete" && (u.meta || u.superKey)) return !0;
    return !1;
  }
  function Ut(u) {
    return (u.ctrl || u.meta) && u.key === "y";
  }
  function Yt(u, A) {
    switch (u.name) {
     case "escape":
      if (Q) return;
      return Mt(), w;

     case "left":
      if (u.superKey) return w.startOfLine();
      if (u.ctrl || u.meta || u.fn) return w.backwardWord();
      if (h && !u.shift && w.text === N) {
        let I = Date.now(), te = g9n(he, I, u.soloKeypress), ue = he.armedAtMs === 0 ? void 0 : I - he.absorbAnchorMs;
        switch (h9n(he, te, I), y9n(te, I, he), te) {
         case "fire":
          return Je(De), h(ue), w;

         case "arm":
          return Ie({
            key: De,
            kind: "feedback",
            text: S ?? "Press \u2190 again",
            priority: "immediate",
            timeoutMs: Ymn
          }), w;

         case "absorb":
          return w;

         case "attach-arm":
          return Ie({
            key: De,
            kind: "feedback",
            text: p9n,
            priority: "immediate",
            timeoutMs: Ymn
          }), w;

         case "attach-absorb":
          return w;

         case "reject":
          return w.left();
        }
      }
      return w.left();

     case "right":
      if (u.superKey) return w.endOfLine();
      if (u.ctrl || u.meta || u.fn) return w.forwardWord();
      return w.right();

     case "up":
      if (u.shift || u.ctrl || u.meta) return;
      return ft();

     case "down":
      if (u.shift || u.ctrl || u.meta) return;
      return mt();

     case "backspace":
      if (u.superKey) return ct();
      if (u.meta || u.ctrl) return Dt();
      return ut();

     case "delete":
      if (u.superKey) return Xe();
      if (u.meta) return Xe();
      return w.del();

     case "home":
      if (u.ctrl) return;
      return w.startOfLine();

     case "end":
      if (u.ctrl) return;
      return w.endOfLine();

     case "pagedown":
      if (pe || u.ctrl) return;
      return w.endOfLine();

     case "pageup":
      if (pe || u.ctrl) return;
      return w.startOfLine();

     case "return":
      if (u.ctrl) return;
      return Gt(u);

     case "enter":
      return w.insert(we(`\n`));

     case "tab":
      return;
    }
    if (U && u.ctrl && !u.shift && !u.meta && u.name === "j") return w.insert(we(`\n`));
    if (u.ctrl) return Ht(u.key);
    if (u.meta) return Kt(u.key);
    if (pr.has(u.name)) return;
    if (A.length === 0) return;
    if (ee !== void 0 && w.offset === N.length && Cbt(A) && ee() !== sb(A)) return qe = !0, 
    w.insert(A).left();
    return w.insert(A);
  }
  function zt(u) {
    ze = u, qe = !1;
    let A = j ? j(u.key, u) : u.key;
    if (A === "" && u.key !== "") {
      u.preventDefault();
      return;
    }
    if (!Vt(u) && !Ut(u)) oe.dispatch({
      type: "interrupt"
    });
    if (!(u.name === "left" && !u.ctrl && !u.meta && !u.fn && !u.superKey && !u.shift)) dt();
    let I = Yt(u, A);
    if (I === void 0) return;
    if (u.preventDefault(), !w.equals(I)) {
      let te = I.text.startsWith(N);
      if (te && I.offset < N.length) I = new ki(I.measuredText, N.length);
      let ue = w.text.slice(N.length), xe = te ? I.text.slice(N.length) : I.text, Fe = I.offset - (te ? N.length : 0);
      if (ue !== "" && xe === "") he.editedEmptyAtMs = Date.now();
      if (ue !== xe) r(xe);
      if (We(Fe), be?.isRecording() === !0 && !qe) be.record({
        before: {
          text: ue,
          cursor: Math.max(0, w.offset - N.length)
        },
        after: {
          text: xe,
          cursor: Fe
        },
        key: u
      });
      if (w = I, !te) N = "", de?.onDelete();
    }
    if (Ye) {
      if (Ye = !1, Y) w = ki.fromText(N, v, N.length);
    }
  }
  let qt = Ee && fe && Ee.insertPosition === $e ? {
    text: Ee.text,
    dim: fe
  } : void 0, ht = w.getPosition();
  return {
    handleKeyDown: zt,
    renderedValue: w.render(D, G, J, qt, ne, me === void 0 || me === null ? void 0 : N.length + me, ye, B),
    offset: $e,
    setOffset: We,
    cursorLine: ht.line - w.getViewportStartLine(ne),
    cursorColumn: ht.column,
    renderedRowStartOffsets: w.getRenderedRowStartOffsets(ne),
    noteKeystrokeEmptied: () => {
      he.editedEmptyAtMs = Date.now();
    },
    disarmLeftArrowConfirm: dt
  };
}

F();

function oy(e, r, n = !1) {
  P(() => {
    let s = e.current;
    if (!s) return;
    let o = Ix(s);
    if (!r) {
      if (n && o.activeElement === s) o.blur();
      return;
    }
    return o.focus(s), o.subscribe(() => {
      let l = e.current;
      if (!l || o.activeElement === l) return;
      if (!o.activeElement) {
        o.focus(l);
        return;
      }
      let c = l.parentNode;
      while (c) {
        if (c === o.activeElement) {
          o.focus(l);
          return;
        }
        c = c.parentNode;
      }
    });
  }, [ r, e, n ]);
}

var at = " \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588", gr = .7, br = 1.8, wr = .15;

function v_t() {
  let e = V(B => Dg(B.settings.prefersReducedMotion)), r = sBr(), n = Ch(B => B.voiceState) === "recording", s = Ch(B => B.voiceAudioLevels), o = n && !e, [l, c] = ma(o ? 50 : null);
  if (!o) return [ l, null ];
  let h = s.at(-1) ?? 0, S = Math.min(h * br, 1), T = r.next(S, gr), C = Math.max(1, Math.min(Math.round(T * (at.length - 1)), at.length - 1)), M = h < wr, G = c / 1e3 * 90 % 360, U = Zg() ? P1t(G) : G, {r: re, g: Y, b: q} = M ? {
    r: 128,
    g: 128,
    b: 128
  } : I1t(U), D = `#${(re << 16 | Y << 8 | q).toString(16).padStart(6, "0")}`;
  return [ l, {
    char: at[C],
    hex: D
  } ];
}

export { oy, d9n, c9n, ZBs, e1s, zMe, KUr, EWo, gqs, qUr, u9n, YUr, kWo, Ize, I7e, O7e, ki, Ymn, Xmn, p9n, f9n, m9n, g9n, h9n, y9n, XUr, A1t, v_t, M7e };
