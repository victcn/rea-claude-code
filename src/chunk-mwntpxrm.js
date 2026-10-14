// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Fe } from "./chunk-0cdqg49t.js";

import { z } from "./chunk-bmq0vae0.js";

import { x, l, E } from "./chunk-b0z4bv3v.js";

import { _, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { re } from "./chunk-6ah1819r.js";

import { MC } from "./chunk-9yajep3y.js";

import { OOe } from "./chunk-30n0xq4e.js";

import { p } from "./chunk-jkzenvsk.js";

import { toe } from "./chunk-gpa5wktp.js";

import { vn } from "./chunk-3rbd48rp.js";

import { o, v, u } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { yt } from "./chunk-9zhz923g.js";

import { randomBytes as T } from "crypto";

import { mkdir as b, rename as F, rm as C, writeFile as B } from "fs/promises";

import { join as h } from "path";

var jtt = "mcp-skill-archives", D = "meta.json", M = "SKILL.md", j = p(() => u({
  uri: o().optional(),
  cacheKey: o(),
  fetchedAt: v()
}));

function I() {
  return h(Ee(), jtt);
}

function L(e, n) {
  return Fe.userConfigDir(jtt, [ e, n, M ]);
}

function H(e) {
  return Fe.userConfigDir(jtt, [ e, D ]);
}

function R(e) {
  return toe(h(e, D), () => j().nullable(), {
    defaultValue: null,
    ensureDir: !0
  });
}

var g = 64, A = 16, me = g + 2 + g + 2 + A;

function P(e, n, r) {
  let i = at(`${e}\0${r}`).slice(0, A), a = vn(e).slice(0, g), c = n.replace(/[^A-Za-z0-9._-]/g, "-").slice(0, g);
  return `${a}--${c}--${i}`;
}

function K(e) {
  return e.digest.slice(7);
}

async function WJo(e) {
  try {
    return await R(e).read();
  } catch {
    return null;
  }
}

async function N(e, n, r) {
  let i = await e.write(H(n), _(r), {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  });
  if (!i.ok) throw new x(`meta.json write failed: ${yt(i.error)}`, "MCP skill cache meta.json write failed");
}

async function zJo({serverName: e, skillName: n, row: r}, i) {
  let a = P(e, n, r.uri), c = K(r);
  if (i) {
    let f = await i.read([ {
      key: L(a, c),
      offset: 0,
      length: r.size + 1
    } ]);
    if (!f.ok) return;
    let m = f.value.items[0];
    if (!m.found) return;
    return m.value;
  }
  let s = await MC(h(I(), a, c, M));
  if (!s.ok) return;
  let S = s.value;
  try {
    let f = Buffer.alloc(r.size + 1), m = 0;
    while (m < f.length) {
      let {bytesRead: d} = await S.read(f, m, f.length - m, m);
      if (d === 0) break;
      m += d;
    }
    return f.subarray(0, m);
  } catch {
    return;
  } finally {
    await S.close().catch(() => {});
  }
}

async function O(e, n, r) {
  for (let i of [ [ n, r ], [ n ] ]) {
    let a = Fe.userConfigDir(jtt, i);
    if ((await e.statMeta(a)).ok) {
      t(`[mcp-skills] replacing a stray file at ${jtt}/${i.join("/")} with the cache directory`);
      let c = await e.delete(a);
      if (!c.ok) t(`[mcp-skills] could not remove the stray file at ${jtt}/${i.join("/")}: ${yt(c.error)}`);
      return c.ok;
    }
  }
  return !1;
}

async function U(e, n, r, i) {
  let a = L(n, r), c = {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  }, s = await e.write(a, i, c);
  if (!s.ok && s.error.code === "Failed" && (s.error.telemetryCode === "ENOTDIR" || s.error.telemetryCode === "ENOENT") && await O(e, n, r)) s = await e.write(a, i, c);
  if (!s.ok) throw new x(`SKILL.md write failed: ${yt(s.error)}`, "MCP skill cache SKILL.md write failed");
}

async function GJo({serverName: e, skillName: n, row: r}, i, a) {
  let c = P(e, n, r.uri), s = K(r), S = h(I(), c), f = h(S, s);
  try {
    if (z() && a) await U(a, c, s, i); else {
      let d = h(S, `.tmp-${process.pid}-${T(4).toString("hex")}`);
      await b(d, {
        recursive: !0
      });
      let k = !1;
      try {
        await B(h(d, M), i);
        try {
          await F(d, f), k = !0;
        } catch (w) {
          let y = E(w);
          if (y !== "EEXIST" && y !== "ENOTEMPTY" && y !== "ENOTDIR" && y !== "EPERM" && y !== "EACCES" && y !== "EBUSY") throw w;
          await C(f, {
            recursive: !0,
            force: !0
          }), await OOe(d, f), k = !0;
        }
      } finally {
        if (!k) await C(d, {
          recursive: !0,
          force: !0
        }).catch(() => {});
      }
    }
    let m = {
      uri: r.uri,
      cacheKey: s,
      fetchedAt: Date.now()
    };
    if (z() && a) await N(a, c, m); else await R(S).write(m);
  } catch (m) {
    re(e, `Failed to cache SKILL.md for '${n}': ${l(m)}`);
  }
}

export { jtt, WJo, zJo, GJo };
