// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { VU } from "./chunk-kawq2919.js";

import { cM } from "./chunk-zx69jgxc.js";

var YMo = new Set([ "http", "https", "ws", "wss", "ftp" ]);

function iq(t) {
  t = t.replace(/^[\x00-\x20]+/, "").replace(/[\t\n\r]/g, "");
  let n = t.indexOf("://");
  if (n === -1) return !1;
  let r = t.slice(n + 3), s = t.slice(0, n).toLowerCase();
  if (YMo.has(s)) {
    let o = r.match(/^[/\\]+/)?.[0] ?? "";
    if (o.includes("\\")) return !0;
    r = r.slice(o.length);
  }
  let e = r.search(/[/?#]/);
  return (e === -1 ? r : r.slice(0, e)).includes("\\");
}

var rr = "github.com", XMo = [ `git@${rr}:`, `ssh://git@${rr}/` ], m = [ `https://${rr}`, `https://${rr}/`, rr ], x = `users.noreply.${rr}`, a = "https://api.github.com", u = /[:/\\?#@\s]/, VXe = /^(?!\.{1,2}$)[a-z0-9.-]+$/, Tln = /^(?!\.{1,2}$)[a-zA-Z0-9._-]+$/;

function LC(t) {
  let n = c(t.replace(/[\t\n\r]/g, "").toLowerCase());
  if (n === "" || u.test(n)) return n;
  try {
    let r = new URL(`https://${n}`);
    if (r.username !== "" || r.password !== "" || r.port !== "" || r.pathname !== "/" || r.search !== "" || r.hash !== "") return n;
    return c(r.hostname);
  } catch {
    return n;
  }
}

var KXe = cM(function(n) {
  let r = LC(n);
  while (r.startsWith("www.")) r = r.slice(4);
  return r;
}, t => t, 50);

function s$t(t, n) {
  return KXe(t) === n;
}

function So(t) {
  return s$t(t, rr);
}

function yje(t, n) {
  if (!t || !n) return !1;
  let r = LC(t);
  return r !== "" && r === LC(n);
}

function Uee(t) {
  return So(t) ? a : `https://${t}/api/v3`;
}

function wFs(t) {
  return So(t) ? `${a}/graphql` : `https://${t}/api/graphql`;
}

function i(t) {
  return /[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t);
}

function aq(t) {
  if (VU(t)) return !0;
  if (t.includes("://")) {
    if (iq(t)) return !0;
    try {
      let e = new URL(t);
      if (e.protocol === "http:" || e.protocol === "https:") return !1;
      return i(e.hostname);
    } catch {
      return !0;
    }
  }
  let n = t.indexOf(":"), r = t.indexOf("@");
  if (n >= 0 && r > n) return !0;
  let s = t.match(/^(?:[^@]+@)?([^:]+):/)?.[1];
  return s ? i(s) : !1;
}

function c(t) {
  let n = t.length;
  while (n > 0 && t[n - 1] === ".") n--;
  return t.slice(0, n);
}

export { YMo, iq, rr, XMo, VXe, Tln, LC, KXe, s$t, So, yje, Uee, wFs, aq };
