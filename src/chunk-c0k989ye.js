// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-2v9tfgc3.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import { w_ } from "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-07cck4g7.js";

import { zF, Io } from "./chunk-ajd6by9m.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-5brm0azz.js";

import "./chunk-hedpgw9m.js";

import { Bt } from "./chunk-3ykz5st8.js";

import { USn } from "./chunk-g0d5bpd5.js";

import { qT, nf, bf, O0 } from "./chunk-s82cb921.js";

import { vu } from "./chunk-v7qc2kz8.js";

import { q0 } from "./chunk-dd98x6x7.js";

import { LSn } from "./chunk-1n6psrk4.js";

import { $Sn } from "./chunk-szc684pe.js";

import { ywt, bwn } from "./chunk-ndmv7x2e.js";

import { sKt, iKt, Ovt, aKt, fkn, mkn, eJo, tJo } from "./chunk-dk14h9bn.js";

import "./chunk-av9t4vjk.js";

import "./chunk-8v8fjzek.js";

import { cq } from "./chunk-4dwgr3et.js";

import { O } from "./chunk-1xnsr4dy.js";

import { spawn as m, spawnSync as u } from "child_process";

import { closeSync as d } from "fs";

import { constants as f } from "os";

import { isatty as p } from "tty";

function E() {
  for (let r = 0; r < 32; r++) {
    if (r === 1 || r === 2) continue;
    try {
      if (p(r)) d(r);
    } catch {}
  }
}

async function G({proactivity: r} = {}) {
  if (cq(), await new Promise(e => setImmediate(e)), !await O0()) return await Bt("agent_launcher", "relaunch_launcher_not_runnable"), 
  process.stderr.write(`\n${bf() ?? `${qT}: launcher \`${nf()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}\n`), 
  Io(1);
  let {cmd: n, prefixArgs: a} = vu(), s = process.argv.slice(2), o = {
    ...process.env
  };
  if (delete o[ywt], Object.assign(o, bwn()), $Sn(o, s), delete o[sKt], delete o[Ovt], 
  delete o[aKt], delete o[iKt], r) {
    if (Object.assign(o, mkn(r)), tJo(s)) Object.assign(o, fkn(r), eJo(r));
  }
  if (USn(), O() === "windows") {
    for (let t of [ "SIGINT", "SIGTERM", "SIGHUP", "SIGBREAK" ]) process.removeAllListeners(t), 
    process.on(t, () => {});
    await Promise.all([ Ht(q0(), 2e3, "write queue drain timeout (relaunch)").catch(() => {}), zF() ]), 
    LSn();
    let e = u(n, [ ...a, ...s ], {
      stdio: "inherit",
      env: o
    });
    if (e.error) process.stderr.write(`Failed to relaunch Claude Code: ${e.error.message}\n`), 
    w_("relaunch_child_error");
    process.exit(e.status ?? 1);
  }
  let i = m(n, [ ...a, ...s ], {
    stdio: "inherit",
    env: o
  });
  E();
  let c = [ "SIGINT", "SIGTERM", "SIGHUP" ];
  for (let e of c) process.on(e, () => {
    try {
      i.kill(e);
    } catch {}
  });
  return new Promise(() => {
    i.on("close", (e, t) => {
      let l = t ? 128 + (f.signals[t] ?? 0) : 0;
      process.exit(e ?? l);
    }), i.on("error", e => {
      process.stderr.write(`Failed to relaunch Claude Code: ${e.message}\n`), w_("relaunch_child_error"), 
      process.exit(1);
    });
  });
}

export { G as execRelaunch };
