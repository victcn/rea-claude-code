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

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-vps0k559.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-4dwgr3et.js";

import "./chunk-0pmh7awy.js";

import { hr } from "./chunk-kvx4djx1.js";

import "./chunk-1xnsr4dy.js";

var c = 25e3;

function t() {
  process.exit(0);
}

function u(o, p) {
  let n = a.CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS || c, i = !1, s = r => {
    if (p(), i) hr("warn", `${r} received while shutting down: not waiting any longer, closing open requests now and exiting`), 
    o.stop(), t();
    i = !0, hr("info", `${r} received: shutting down. Refusing new connections; open requests get up to ${n / 1e3}s to finish (set by CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS)`);
    let d = n + 3e3;
    setTimeout(e => {
      hr("warn", `shutdown still not finished ${e / 1e3}s after the signal: exiting now. Requests still open are cut and their spend may not be recorded`), 
      t();
    }, d, d).unref(), o.drain(n).then(e => {
      hr(e === 0 ? "info" : "warn", e === 0 ? "shutdown complete: every open request finished, none was cut" : `drain window over after ${n / 1e3}s: cut ${e} request(s) still open. Raise CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS and the orchestrator's grace period together to give streams longer`), 
      t();
    });
  };
  process.prependListener("SIGTERM", () => s("SIGTERM")), process.prependListener("SIGINT", () => s("SIGINT"));
}

export { u as drainOnSignal };
