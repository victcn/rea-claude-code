// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, q, he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { l, SL } from "./chunk-b0z4bv3v.js";

import { vh, _, Do, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { Foe } from "./chunk-wsxyczjg.js";

import { Sse } from "./chunk-gmq0qwep.js";

import { Ps } from "./chunk-ac1gm9w7.js";

import { k1 } from "./chunk-4jjt8sdp.js";

import { at } from "./chunk-0bq6eb61.js";

function Q6(e) {
  let n = SL(e);
  return n === void 0 ? l(e) : `${l(e)} (${n})`;
}

function oVe(e) {
  return n => (t(`${e}: agent metadata sidecar unreadable, treating as absent: ${Q6(n)}`), 
  null);
}

import { promises as f } from "fs";

import { dirname as D, join as S } from "path";

var h = new Set([ "model", "system", "tools", "max_tokens", "thinking", "output_config", "context_management", "metadata" ]), R = new Set([ ...h, "thread" ]), k = / cc_(?:prev_req|prompt_id|turn_origin|prompt_index|turn_index|workload)=[^;"\\]*;/g, A = /,\\"tk\\":\\"[0-9a-fA-F-]{36}\\"/g, w = 5;

class y {
  recording=!0;
}

var H = new K(() => new y);

function P() {
  return H.of(B().host).recording;
}

function CJo(e) {
  let {stateByAgent: n, retiredInitHashes: r} = Ps().dumpPrompts, i = n.get(e)?.writtenInitDataHash;
  if (n.delete(e), i !== void 0) r.set(e, i);
}

function RJo() {
  Ps().dumpPrompts.stateByAgent.clear(), Ps().dumpPrompts.retiredInitHashes.clear();
}

function E(e) {
  return;
}

function x(e) {
  return S(Ee(), "dump-prompts", `${e ?? q()}.jsonl`);
}

function F(e, n, r, i) {
  Ps().dumpPrompts.appendQueue.run(e, async () => {
    if (r) {
      if ((await r.storageV5.append(r.key, [ {
        data: n + `\n`
      } ])).ok) i();
      return;
    }
    if (he()) return;
    await f.mkdir(D(e), {
      recursive: !0
    }), await f.appendFile(e, n + `\n`), i();
  }).catch(() => {});
}

function v(e, n, r, i, u) {
  try {
    return;
  } catch {} finally {
    r.dumpInFlight = !1;
  }
}

function xJo(e, n) {
  if (!P()) return Sse;
  let r = x(e), i = z() && n !== void 0 ? {
    storageV5: n,
    key: Fe.log(e, "apiDump")
  } : void 0;
  return async (u, d) => {
    let {stateByAgent: m, retiredInitHashes: c} = Ps().dumpPrompts, o = c.get(e), s = m.get(e) ?? {
      initialized: o !== void 0,
      lastInitDataHash: o ?? "",
      writtenInitDataHash: o,
      dumpInFlight: !1
    };
    if (m.set(e, s), d?.method === "POST" && d.body && !s.dumpInFlight) {
      s.dumpInFlight = !0;
      let g = (new Date).toISOString();
      setImmediate(v, d.body, g, s, r, i);
    }
    return Sse(u, d);
  };
}

function I(e) {
  let n = e.get("thread");
  if (n === void 0) return !1;
  let r = Do(n);
  if (typeof r !== "object" || r === null || !("type" in r) || r.type !== "continue") return !1;
  if (!e.has("tools")) return !0;
  let i = Do(e.get("system") ?? "null");
  return Array.isArray(i) && i.length > 0 && i.every(u => k1(u));
}

export { Q6, oVe, CJo, RJo, xJo };
