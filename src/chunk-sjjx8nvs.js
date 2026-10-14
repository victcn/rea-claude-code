// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { E, zr } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { t } from "./chunk-kawq2919.js";

import { ft } from "./chunk-zscnwzv2.js";

import { Ave } from "./chunk-znhtg8e4.js";

import { O } from "./chunk-1xnsr4dy.js";

import { spawn as h } from "child_process";

var k = 500;

function vv(n, r = "SIGKILL") {
  if (!Number.isInteger(n) || n <= 1) return Promise.resolve(new Set);
  return P(n, r).catch(() => new Set);
}

async function P(n, r) {
  let o = await ACo(n);
  try {
    process.kill(-n, r);
  } catch (e) {
    try {
      process.kill(n, r);
    } catch {}
    if (E(e) !== "ESRCH") g("group_kill", e);
  }
  for (let e of o) try {
    process.kill(e, r);
  } catch {}
  return o;
}

async function cPr(n) {
  let r = [ ...n ].filter(e => Number.isInteger(e) && e > 1), o = new Map;
  if (r.length === 0) return o;
  for (let e of r) {
    let s = Ave(e);
    if (s !== void 0) o.set(e, s);
  }
  return o;
}

async function fLt(n, r) {
  if (n.size === 0) return;
  let o;
  o = new Map;
  for (let e of n.keys()) {
    let s = Ave(e);
    if (s !== void 0) o.set(e, s);
  }
  for (let [e, s] of n) {
    if (o.get(e) !== s) continue;
    try {
      process.kill(e, r);
    } catch {}
  }
}

async function S(n) {
  let r = new Map, {stdout: o} = await ft("ps", [ "-o", "pid=", "-o", "lstart=", "-p", n.join(",") ], {
    timeout: k,
    cwd: "/",
    env: {
      USER_TYPE: "external",
      NODE_ENV: "production",
      LC_ALL: "C",
      TZ: "UTC"
    },
    stripFinalNewline: !1
  });
  for (let e of o.split(`\n`)) {
    let s = e.match(/^\s*(\d+)\s+(\S.*\S)\s*$/);
    if (s) r.set(Number(s[1]), s[2]);
  }
  return r;
}

async function ACo(n, {sameSession: r} = {
  sameSession: !1
}) {
  let o;
  try {
    o = await Promise.race([ b(r), new Promise(u => {
      let l = setTimeout(m => m(""), k, u);
      if (typeof l === "object") l.unref();
    }) ]);
  } catch (u) {
    return g("enum_spawn", u), new Set;
  }
  let e = new Map, s = new Map;
  for (let u of o.split(`\n`)) {
    let l = u.match(/^\s*(\d+)\s+(\d+)(?:\s+(\S+))?\s*$/);
    if (!l) continue;
    let m = Number(l[1]), d = Number(l[2]);
    if (l[3] !== void 0) s.set(m, l[3]);
    let w = e.get(d);
    if (w) w.push(m); else e.set(d, [ m ]);
  }
  let a = s.get(n);
  if (r && (a === void 0 || new Set(s.values()).size < 2)) return new Set;
  let f = new Set, p = [ n ];
  while (p.length > 0) {
    let u = p.shift();
    for (let l of e.get(u) ?? []) if (l > 1 && l !== n && l !== process.pid && !f.has(l) && (!r || s.get(l) === a)) f.add(l), 
    p.push(l);
  }
  return f;
}

function b(n) {
  return new Promise((r, o) => {
    let e;
    try {
      let a = n ? [ "-o", O() === "macos" ? "sess=" : "sid=" ] : [];
      e = h("ps", [ "-A", "-o", "pid=", "-o", "ppid=", ...a ], {
        cwd: "/",
        stdio: [ "ignore", "pipe", "ignore" ],
        windowsHide: !0
      });
    } catch (a) {
      o(a);
      return;
    }
    let s = "";
    e.stdout?.on("data", a => s += a), e.once("error", o), e.once("close", () => r(s));
  });
}

function g(n, r) {
  try {
    let o = E(r), e = zr(r);
    t(`killProcessTree ${n} failed: ${o ?? r}`), i("tengu_bash_tool_kill_error", {
      stage: c(n),
      ...e && {
        error_code: e
      }
    });
  } catch {}
}

export { vv, cPr, fLt, ACo };
