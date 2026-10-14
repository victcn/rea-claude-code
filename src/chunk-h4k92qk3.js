// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { j, E, W } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { _, Y } from "./chunk-kawq2919.js";

import { vr } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { iD } from "./chunk-30n0xq4e.js";

import { p } from "./chunk-jkzenvsk.js";

import { li } from "./chunk-zvghq5er.js";

import { kf } from "./chunk-q6wab2jw.js";

import { io } from "./chunk-4v78v8fd.js";

import { i1 } from "./chunk-sqb9meyh.js";

import { o, u, U, A } from "./chunk-cvcg6n1z.js";

import { b$ } from "./chunk-dgqa0xqf.js";

import { at } from "./chunk-0bq6eb61.js";

import { O } from "./chunk-1xnsr4dy.js";

import { constants as B, lstatSync as v, mkdirSync as H, unlinkSync as G, utimesSync as J, writeFileSync as h } from "fs";

import { lstat as z, mkdir as K, open as V, readdir as q, rm as N, writeFile as Q } from "fs/promises";

import { randomBytes as Z } from "crypto";

import { basename as ee, join as w, resolve as R } from "path";

var y = 1, te = 8 * kf, re = 9e5, P = "accepted-", S = ".jsonl", ne = ".seen", k = ".accepting-";

function tZe(e) {
  return e === null ? null : at(e);
}

var oe = p(() => u({
  v: A(y),
  kind: A("file"),
  path: o(),
  text: o().nullable(),
  sha256: o().regex(/^[0-9a-f]{64}$/).nullable(),
  at: o(),
  by: U([ "first_attach", "own_write", "person" ])
})), ie = p(() => u({
  v: A(y),
  kind: A("folder"),
  key: o(),
  project: o().nullable(),
  local: o().nullable(),
  legacy: o().nullable(),
  at: o()
}));

function C(e, a) {
  return O() === "windows" ? I(e) === I(a) : e === a;
}

function I(e) {
  return e.replace(/^[a-z](?=:)/, a => a.toUpperCase());
}

function D(e) {
  return io(e.normalize("NFC"));
}

function F(e, a = i1()) {
  return w(a, `${P}settings-${at(D(R(e))).slice(0, 32)}${S}`);
}

function x(e, a = i1()) {
  return w(a, `${P}folder-${at(D(e)).slice(0, 32)}${S}`);
}

function M(e) {
  return `${e.slice(0, -S.length)}${ne}`;
}

function L(e) {
  try {
    return b$(e, te);
  } catch (a) {
    if (!W(a)) throw a;
  }
  try {
    v(M(e));
  } catch (a) {
    if (W(a)) return;
    throw a;
  }
  throw Error("record aged out");
}

function T(e) {
  try {
    let a = new Date;
    J(e, a, a);
  } catch {}
}

function Pge(e = i1()) {
  let a = (r, n) => {
    H(e, {
      recursive: !0,
      mode: 448
    });
    let t = M(r), g = !1;
    try {
      h(t, "", {
        mode: 384,
        flag: "wx"
      }), g = !0;
    } catch (f) {
      if (E(f) !== "EEXIST") throw f;
    }
    try {
      iD(r, `${_(n)}\n`, 384);
    } catch (f) {
      let m;
      try {
        m = v(r).isFile();
      } catch (X) {
        m = !W(X);
      }
      if (g && !m) {
        try {
          G(t);
        } catch {}
        try {
          if (v(r).isFile()) h(t, "", {
            mode: 384,
            flag: "wx"
          });
        } catch {}
      }
      throw f;
    }
    try {
      h(t, "", {
        mode: 384,
        flag: "wx"
      });
    } catch (f) {
      if (E(f) !== "EEXIST") throw f;
    }
  }, l = new Set, s = (r, n, t) => {
    let g = vr(t);
    if (t.length > g.length + 1 && !l.has(n)) {
      l.add(n);
      try {
        i("tengu_remote_tool_serving", {
          event: b("accepted_record_has_tail"),
          record_kind: c(r)
        });
      } catch (f) {
        d(j(f));
      }
    }
    return g;
  };
  return {
    file: r => {
      try {
        let n = L(F(r, e));
        if (n === void 0) return "none";
        let t = oe().safeParse(Y(s("file", r, n)));
        if (!t.success || !C(R(t.data.path), R(r)) || tZe(t.data.text) !== t.data.sha256) return "unreadable";
        return {
          text: t.data.text,
          sha256: t.data.sha256
        };
      } catch {
        return "unreadable";
      }
    },
    recordFile: (r, n, t) => {
      if (n !== null && Buffer.byteLength(n) > kf) throw Error("accepted settings text exceeds the settings size limit");
      a(F(r, e), {
        v: y,
        kind: "file",
        path: r,
        text: n,
        sha256: tZe(n),
        at: (new Date).toISOString(),
        by: t
      }), l.delete(r);
    },
    folder: r => {
      try {
        let n = L(x(r, e));
        if (n === void 0) return "none";
        let t = ie().safeParse(Y(s("folder", r, n)));
        if (!t.success || !C(t.data.key, r)) return "unreadable";
        let {project: g, local: f, legacy: m} = t.data;
        return {
          project: g,
          local: f,
          legacy: m
        };
      } catch {
        return "unreadable";
      }
    },
    recordFolder: (r, n) => {
      a(x(r, e), {
        v: y,
        kind: "folder",
        key: r,
        project: n.project,
        local: n.local,
        legacy: n.legacy,
        at: (new Date).toISOString()
      }), l.delete(r);
    },
    noteServed: (r, n) => {
      T(x(r, e));
      for (let t of n) T(F(t, e));
    }
  };
}

async function ae(e) {
  try {
    let a = Date.now() - re;
    for (let l of await q(e)) {
      let s = l.lastIndexOf(k);
      if (s <= 0 || !/^[0-9a-f]{8}\.jsonl$/.test(l.slice(s + k.length))) continue;
      let r = w(e, l);
      if ((await z(r)).mtimeMs < a) await N(r, {
        recursive: !0,
        force: !0
      });
    }
  } catch {}
}

async function dzo(e, a) {
  let l = e.dir ?? i1();
  await K(l, {
    recursive: !0,
    mode: 448
  }), await ae(l);
  let s = w(l, `${ee(e.name)}${k}${Z(4).toString("hex")}${S}`);
  await Q(s, e.text, {
    mode: 384,
    flag: "wx"
  });
  try {
    let r = await z(s);
    if (await a(s)) return "blocked";
    let n;
    try {
      if (O() === "windows" && (await z(s)).isSymbolicLink()) return "tampered";
      n = await V(s, B.O_RDONLY | li);
      let t = await n.stat();
      return t.isFile() && t.nlink === 1 && t.ino === r.ino && t.dev === r.dev && t.size === r.size && await n.readFile({
        encoding: "utf8"
      }) === e.text ? "allowed" : "tampered";
    } catch (t) {
      if (W(t) || E(t) === "ELOOP") return "tampered";
      throw t;
    } finally {
      await (n?.close().catch(() => {}));
    }
  } finally {
    await N(s, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}

export { tZe, Pge, dzo };
