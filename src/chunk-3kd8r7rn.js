// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { dae } from "./chunk-j016gcgm.js";

var Mfe = [ "claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-fable-5", "claude-fable-5-1", "claude-haiku-4-5", "claude-haiku-5-5", "claude-mythos-5", "claude-mythos-5-1", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-opus-5-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5", "claude-sonnet-5-5" ], VK = [ "sonnet", "opus", "haiku", "fable", "best", "sonnet[1m]", "opus[1m]", "fable[1m]", "opusplan" ], KK = [ "sonnet", "opus", "haiku", "fable" ];

var $Lt = "claude-mythos-preview";

function Ay(e) {
  return VK.includes(e);
}

function Hfe(e) {
  if (Ay(e)) return !0;
  let n = Mt(e);
  return n !== e && Mt(n) === n && Ay(n);
}

function Mt(e) {
  return e.replace(/\[1m\]$/i, "");
}

function YH(e, n) {
  return Mt(e).toLowerCase() === Mt(n).toLowerCase();
}

function On(e) {
  return e.replace(/\[(1|2)m\]/gi, "");
}

function Cy(e) {
  return KK.includes(e);
}

function uc(e) {
  let n = e.trim().toLowerCase();
  if (n === "" || /\s/.test(n)) return null;
  n = n.replace(/\[[12]m\]$/, "");
  let s = n.lastIndexOf("/");
  if (s !== -1) n = n.slice(s + 1);
  let t = /^(?:([a-z-]+)\.)?anthropic\.(claude-.*)$/.exec(n);
  if (t) {
    let [, a, l = ""] = t;
    if (a !== void 0 && !dae.includes(a)) return null;
    n = l;
  }
  let r = u(n);
  if (!r) return null;
  let o = n.slice(r.base.length);
  if (o !== "" && !/^[-@]/.test(o)) return null;
  let i = {
    family: r.family,
    major: r.major,
    legacyVersionFirst: r.legacyVersionFirst,
    base: r.base
  };
  if (r.minor !== void 0) i.minor = r.minor;
  if (!Nxo(o)) i.trailer = o; else {
    let a = /(?:-v\d+@|[-@])(\d{8})/.exec(o)?.[1];
    if (a !== void 0) i.date = a;
  }
  return i;
}

function Nxo(e) {
  return /^(?:-fast|-latest)?(?:-v\d{1,3}@\d{8}|[-@]\d{8})?(?:-v\d{1,3}(?::\d{1,3})?)?$/.test(e);
}

function yLs(e) {
  return /-v\d+(?::\d+)?$/.test(e);
}

function XH(e) {
  return e !== null && e.trailer === void 0;
}

function y1e(e, n) {
  return e.major - n.major || (e.minor ?? 0) - (n.minor ?? 0);
}

function bmt(e, n) {
  return e.family === n.family && e.legacyVersionFirst === n.legacyVersionFirst && y1e(e, n) === 0;
}

function lKn(e) {
  switch (e) {
   case "haiku":
    return 0;

   case "sonnet":
    return 1;

   case "opus":
    return 2;

   case "fable":
   case "mythos":
    return 3;

   default:
    return;
  }
}

function _Ls(e, n) {
  if (typeof e !== "string") return !1;
  let s = uc(e), t = uc(n);
  if (!XH(s) || !XH(t)) return !1;
  let r = lKn(s.family), o = lKn(t.family);
  if (r === void 0 || o === void 0) return !1;
  return o >= r && y1e(t, s) >= 0;
}

function u(e) {
  let n = /^claude-([a-z]+)-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?/.exec(e);
  if (n) {
    let [t, r = "", o = "", i] = n;
    return {
      family: r,
      major: Number(o),
      minor: i === void 0 ? void 0 : Number(i),
      legacyVersionFirst: !1,
      base: t
    };
  }
  let s = /^claude-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?-([a-z]+)/.exec(e);
  if (s) {
    let [t, r = "", o, i = ""] = s;
    return {
      family: i,
      major: Number(r),
      minor: o === void 0 ? void 0 : Number(o),
      legacyVersionFirst: !0,
      base: t
    };
  }
  return null;
}

export { Mfe, VK, KK, $Lt, Ay, Hfe, Mt, YH, On, Cy, uc, Nxo, yLs, XH, y1e, bmt, lKn, _Ls };
