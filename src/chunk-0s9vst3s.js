// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-hwdwjvh8.js";

import { E } from "./chunk-b0z4bv3v.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { RX } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-t6pdm7af.js";

import "./chunk-0pmh7awy.js";

import { ot, sx } from "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import { sC, MF, gb } from "./chunk-f4r8hspx.js";

import "./chunk-29yvrnf5.js";

import { Lxe } from "./chunk-ma4gjakn.js";

import { Ta } from "./chunk-pqzqmnjf.js";

import { SX, xj, sEe } from "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-1xnsr4dy.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { open as s } from "fs/promises";

var m = 10485760, u = 4;

async function F(r, o) {
  try {
    let t = ot(o);
    if (Lxe(t) || sx(t)) return "not_recordable";
    return await f.readAndRecord(r, t);
  } catch (t) {
    let n = E(t);
    return n === "ENOENT" || n === "EISDIR" || SX(t) || xj(t) ? "not_recordable" : "read_failed";
  }
}

function c() {
  return Ta(u, p);
}

var f = Ue({
  readAndRecord: c()
}, r => {
  r.readAndRecord = c();
});

async function p(r, o) {
  await using t = await s(o, RX());
  let n = Math.floor((await t.stat()).mtimeMs), e = r.get(o);
  if (e !== void 0 && !(e.contentFromTranscript && e.limit === void 0 && sC(e) && e.timestamp < n)) return "kept_existing";
  let i = await sEe(t, o, m);
  if (i.content.slice(0, 4096).includes("\0")) return "not_recordable";
  let a = gb(i.content);
  if (e !== void 0 && !MF(e, a.trim())) return "kept_existing";
  let d = r.get(o);
  if (d !== void 0 && d !== e) return "kept_existing";
  return r.set(o, {
    content: a,
    timestamp: n,
    offset: void 0,
    limit: void 0,
    contentNotInModelContext: !0
  }), "recorded";
}

export { F as recordStagedOutputAsRead };
