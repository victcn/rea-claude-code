// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { qu } from "./chunk-j016gcgm.js";

import { nf } from "./chunk-s82cb921.js";

import { ctn, n5 } from "./chunk-av9t4vjk.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { we } from "./chunk-m8ez8fhk.js";

var o = we(vy(), 1);

import { readdir as c, stat as p } from "fs/promises";

import { join as a, sep as f } from "path";

function i8() {
  if (!qu()) return !1;
  let r = ctn() + f;
  return process.execPath.startsWith(r);
}

function vu(r = {}) {
  return uY(ONe(r));
}

function ONe(r = {}) {
  if (!r.pinToCurrentBinary && i8()) {
    let t = D4e();
    return {
      cmd: t,
      prefixArgs: [],
      target: t
    };
  }
  if (qu()) return {
    cmd: process.execPath,
    prefixArgs: [],
    target: process.execPath
  };
  let e = process.argv[1];
  if (!e) return {
    cmd: process.execPath,
    prefixArgs: [],
    target: process.execPath
  };
  return {
    cmd: process.execPath,
    prefixArgs: [ e ],
    target: e
  };
}

function D4e() {
  return a(n5(), "claude");
}

function uY(r) {
  let e = nf();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return {
    cmd: e[0],
    prefixArgs: [ ...e.slice(1), r.cmd, ...r.prefixArgs ],
    target: r.target
  };
}

async function WRt() {
  let r = ctn(), e;
  try {
    e = await c(r);
  } catch {
    return null;
  }
  let t = e.filter(n => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && o.valid(n)).sort(o.rcompare);
  for (let n of t) {
    let i = a(r, n);
    try {
      let s = await p(i);
      if (s.isFile() && s.size > 0) return i;
    } catch {}
  }
  return null;
}

export { i8, vu, ONe, D4e, uY, WRt };
