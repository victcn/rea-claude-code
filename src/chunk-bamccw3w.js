// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { readFileSync as i } from "fs";

import { readFile as d } from "fs/promises";

import { isAbsolute as c, join as u } from "path";

var g = [ 40, 181, 47, 253 ];

function s(r) {
  return r.length >= 4 && g.every((t, e) => r[e] === t);
}

function o(r, t) {
  return c(r) ? r : u(t, r);
}

async function blt(r, t) {
  let e = await d(o(r, t));
  return (s(e) ? await Bun.zstdDecompress(e) : e).toString("utf8");
}

function tt(r, t) {
  return lfo(r, t).toString("utf8");
}

function lfo(r, t) {
  let e = o(r, t);
  try {
    let n = i(e);
    return s(n) ? Bun.zstdDecompressSync(n) : n;
  } catch (n) {
    throw Object.assign(Error("embedded asset is missing or corrupt", {
      cause: n
    }), {
      path: e
    });
  }
}

export { blt, tt, lfo };
