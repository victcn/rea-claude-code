// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mu } from "./chunk-3pqddg8f.js";

import { ul } from "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { it } from "./chunk-zscnwzv2.js";

import { Nit } from "./chunk-xb4716r9.js";

import { O } from "./chunk-1xnsr4dy.js";

import { fileURLToPath as w } from "url";

import { pathToFileURL as d } from "url";

function s(r, e) {
  if (r === "macos") return {
    command: "open",
    args: [ "-R", "--", e ]
  };
  if (r === "windows") return {
    command: "explorer",
    args: [ `/select,${e}` ]
  };
  return {
    command: "dbus-send",
    args: [ "--session", "--print-reply", "--dest=org.freedesktop.FileManager1", "--type=method_call", "/org/freedesktop/FileManager1", "org.freedesktop.FileManager1.ShowItems", `array:string:${d(e).href.replaceAll(",", "%2C")}`, "string:" ]
  };
}

var f = {
  useCwd: !0,
  useToolMemoryCgroup: !1
}, pqr = new Set([ "https:", "http:", "vscode:", "vscode-insiders:", "cursor:", "windsurf:", "zed:", "jetbrains:", "idea:", "slack:", "linear:", "notion:", "figma:" ]);

function g(r) {
  let e;
  try {
    e = new URL(r);
  } catch (o) {
    throw Error(`Invalid URL format: ${r}`);
  }
  if (e.protocol !== "http:" && e.protocol !== "https:") throw Error(`Invalid URL protocol: must use http:// or https://, got ${e.protocol}`);
}

async function v2t(r) {
  try {
    let o = "xdg-open", {code: n} = await it(o, [ r ], f);
    return n === 0;
  } catch (e) {
    return !1;
  }
}

async function h(r) {
  try {
    let e = O();
    if (e === "macos") {
      let {command: i, args: l} = s("macos", r), {code: c} = await it(i, l);
      return c === 0;
    }
    if (e === "windows") {
      let {command: i, args: l} = s("windows", r), {exitCode: c} = await it(i, l);
      return c !== void 0;
    }
    let {command: o, args: n} = s("linux", r), {code: u} = await it(o, n);
    return u === 0;
  } catch (e) {
    return !1;
  }
}

async function E2t(r) {
  let e;
  try {
    e = new URL(r);
  } catch {
    return !1;
  }
  let o = e.protocol;
  if (o === "file:") {
    if (e.host !== "") return !1;
    try {
      let n = w(r);
      if (ul(n) || Nit(n)) return !1;
      return await h(n);
    } catch {
      return !1;
    }
  }
  if (!pqr.has(o)) return t(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${o}`, {
    level: "warn"
  }), !1;
  return (await m(r)).ok;
}

function pW() {
  if (!process.stdout.isTTY) return !0;
  if (a.BROWSER && a.BROWSER !== "true") return !1;
  if (a.SSH_CONNECTION) return !0;
  return p();
}

function p() {
  return O() === "linux" && !a.DISPLAY && !a.WAYLAND_DISPLAY;
}

async function k2t(r) {
  try {
    g(r);
  } catch (e) {
    return {
      ok: !1,
      reason: "invalid_url",
      detail: e instanceof Error ? e.message : String(e)
    };
  }
  return m(r);
}

async function js(r) {
  return (await k2t(r)).ok;
}

async function m(r) {
  try {
    let e = Mu()?.browser, o = e !== void 0 ? e ?? void 0 : a.BROWSER, n = "linux";
    if (!o && p()) return {
      ok: !1,
      reason: "no_display"
    };
    return y(await it(o || "xdg-open", [ r ], f));
  } catch (e) {
    return {
      ok: !1,
      reason: "unknown",
      detail: e instanceof Error ? e.message : String(e)
    };
  }
}

function y(r) {
  if (r.code === 0) return {
    ok: !0
  };
  let e = r.error ?? "", o = r.stderr || e || `exit ${r.code}`;
  if (r.code === 127 || e.includes("ENOENT")) return {
    ok: !1,
    reason: "opener_missing",
    detail: o
  };
  if (e.includes("ETIMEDOUT") || e.includes("timed out")) return {
    ok: !1,
    reason: "timeout",
    detail: o
  };
  if (e.includes("EACCES") || e.includes("EPERM")) return {
    ok: !1,
    reason: "spawn_error",
    detail: o
  };
  if (r.code > 0) return {
    ok: !1,
    reason: "nonzero_exit",
    detail: o
  };
  return {
    ok: !1,
    reason: "unknown",
    detail: o
  };
}

export { pqr, v2t, E2t, pW, k2t, js };
