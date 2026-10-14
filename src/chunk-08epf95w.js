// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { Ul } from "./chunk-znhtg8e4.js";

import { vv } from "./chunk-sjjx8nvs.js";

import { readFile as a } from "fs/promises";

class n {
  firedSites=new Set;
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), i("tengu_dead_probe_adopt_ticks_token", {
      site: c(e)
    });
  }
  reset() {
    this.firedSites.clear();
  }
}

var l = new K(() => new n);

function f() {
  return l.of(B().host);
}

function GUr(e) {
  f().fire(e);
}

async function w1t(e) {
  try {
    let t = await a(`/proc/${e}/stat`, "utf-8"), r = t.lastIndexOf(")"), s = t.slice(r + 2).split(" "), o = Number(s[19]);
    return Number.isFinite(o) ? o : null;
  } catch {
    return null;
  }
}

async function x7e(e, t, r) {
  if (r !== void 0) {
    if (await Ul(e, {
      skipCache: !0
    }) !== r) return;
  } else if (t !== void 0) {
    if (GUr("kill_gate"), await w1t(e) !== t) return;
  } else return;
  await vv(e, "SIGTERM").catch(() => {});
}

export { GUr, w1t, x7e };
