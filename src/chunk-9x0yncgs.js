// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mu } from "./chunk-3pqddg8f.js";

import { b, c, Cn } from "./chunk-hwdwjvh8.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { it } from "./chunk-zscnwzv2.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { rX } from "./chunk-pvmwc6wy.js";

import { bs } from "./chunk-zzhmvqjt.js";

import { CW, GM } from "./chunk-84yp45y8.js";

import { ebt, mhn } from "./chunk-fyxywezh.js";

var h = /^[A-Za-z0-9][A-Za-z0-9._+-]{0,63}$/;

function e1t(e) {
  if (e == null) return;
  if (h.test(e)) return Cn(e);
  return b("nonconforming");
}

var u = new Set([ "Apple_Terminal", "contour", "foot", "ghostty", "iTerm.app", "iTerm2", "kitty", "Konsole", "libghostty", "libvterm", "mintty", "Rio", "ShellFish", "SwiftTerm", "Tabby", "terminology", "Termius", "tmux", "VTE", "Warp", "WezTerm", "xterm", "xterm-ghostty", "XTerm", "xterm.js", "Zap", "Zellij" ]), T = [ /^(?:next-)?v?\d{1,8}(?:\.\d{1,8}){0,5}[a-z]?$/, /^\d{1,8}\.\d{1,8}\.\d{1,8}-?(?:alpha|beta|rc|pre|dev)\.?\d{0,8}$/, /^\d{8}[-_]\d{6}[-_][0-9a-f]{8}$/, /^v\d\.\d{4}(?:\.\d{2}){4}\.(?:stable|preview|beta|dev)_\d{2}$/ ], N = /^\d{1,8}(?:\.\d{1,8}){1,3}/, S = /^([A-Za-z][A-Za-z0-9_.]*)(.*)$/, O = /^([A-Za-z][A-Za-z0-9_.-]*[A-Za-z0-9_.])(.*)$/, v = /[):]{1,4}$/;

function iWo(e) {
  if (e === void 0) return b("no_reply");
  let n = e.length <= 128 ? S.exec(e) : null;
  if (!n) return b("other");
  let o = O.exec(e), [, r = "", s = ""] = o && u.has(o[1] ?? "") ? o : n;
  if (!u.has(r)) return b("other");
  if (s === "") return Cn(r);
  let l = s[0], f = s.slice(1).replace(v, "");
  if (f === "") return Cn(l === "(" ? `${r}()` : r);
  let d = T.some(_ => _.test(f)) ? f : N.exec(f)?.[0] ?? "other";
  switch (l) {
   case "(":
    return Cn(`${r}(${d})`);

   case " ":
   case "-":
    return Cn(`${r}${l}${d}`);

   default:
    return Cn(`${r} ${d}`);
  }
}

async function IL(e, n, o = {}) {
  await iUr(e, n, o);
}

async function iUr(e, n, {storageV5: o, credentials: r, hookOrigin: s} = {}) {
  let l = bs("preferredNotifChannel", "auto").value;
  await GM(CW(), e, {
    storageV5: o,
    credentials: r,
    hookOrigin: s
  });
  let f = await A(l, e, n);
  if (f === "error") m("notification_show", "send_failed"); else g("notification_show");
  return i("tengu_notification_method_used", {
    configured_channel: c(rX.includes(l) ? l : "invalid"),
    notification_type: c(e.notificationType),
    method_used: c(f),
    term: e1t(a.terminal),
    attacher_term: e1t(Mu()?.terminal)
  }), f;
}

var p = "Claude Code";

async function A(e, n, o) {
  if (e === "auto") {
    let s = await I();
    return y(s, n, o), s;
  }
  let r;
  switch (e) {
   case "iterm2":
   case "iterm2_with_bell":
   case "kitty":
   case "ghostty":
   case "terminal_bell":
    r = e;
    break;

   case "notifications_disabled":
    r = "disabled";
    break;

   default:
    r = "none";
  }
  try {
    return y(r, n, o), r;
  } catch {
    return "error";
  }
}

async function I() {
  switch (Mu()?.terminal ?? a.terminal) {
   case "Apple_Terminal":
    return await w() ? "terminal_bell" : "no_method_available";

   case "iTerm.app":
    return "iterm2";

   case "kitty":
    return "kitty";

   case "ghostty":
    return "ghostty";

   default:
    return "no_method_available";
  }
}

function y(e, n, o) {
  switch (e) {
   case "iterm2":
    o.notifyITerm2(n);
    return;

   case "iterm2_with_bell":
    o.notifyITerm2(n), o.notifyBell();
    return;

   case "kitty":
    o.notifyKitty({
      ...n,
      title: n.title || p,
      id: E()
    });
    return;

   case "ghostty":
    o.notifyGhostty({
      ...n,
      title: n.title || p
    });
    return;

   case "terminal_bell":
    o.notifyBell();
    return;

   case "disabled":
   case "none":
   case "no_method_available":
    return;
  }
}

function E() {
  return Math.floor(Math.random() * 1e4);
}

async function w() {
  try {
    let n = (await it("osascript", [ "-e", 'tell application "Terminal" to name of current settings of front window' ])).stdout.trim();
    if (!n) return !1;
    let o = await it("defaults", [ "export", "com.apple.Terminal", "-" ]);
    if (o.code !== 0) return !1;
    let r = mhn(o.stdout);
    if (!ebt(r)) return t("Failed to read Apple Terminal bell setting: defaults export is not a plist dict"), 
    !1;
    let s = r["Window Settings"], l = ebt(s) ? s[n] : void 0;
    if (!ebt(l)) return t("Failed to read Apple Terminal bell setting: no settings dict for the current profile"), 
    !1;
    return l.Bell === !1;
  } catch (e) {
    return t(`Failed to read Apple Terminal bell setting: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error"
    }), !1;
  }
}

export { e1t, iWo, IL, iUr };
