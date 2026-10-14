// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { E, W } from "./chunk-b0z4bv3v.js";

import { mr } from "./chunk-0cdqg49t.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { qg, hA } from "./chunk-9yajep3y.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { Np, _z, Eg } from "./chunk-7en5gt36.js";

import { Tes, NCn } from "./chunk-84yp45y8.js";

import { XQ, Mmr } from "./chunk-z09tf6qf.js";

import { lstat as l, mkdir as x, readFile as w } from "fs/promises";

import { basename as A, dirname as F, join as B, sep as y } from "path";

var k = 524288;

function ttt(e) {
  return {
    scoping: e.replace(/\.jsonl$/, ".forked-skill.json"),
    provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json")
  };
}

function f(e) {
  return ttt(Eg(e));
}

function R(e) {
  return _({
    forkedSkill: !0,
    ...e !== void 0 && {
      skillName: e
    }
  });
}

function p(e) {
  let r = _z();
  if (F(r) !== Np()) return;
  let n = A(r), i = q(), s = B(r, i) + y, o = Eg(e);
  if (!o.startsWith(s)) return;
  let a = o.slice(s.length).split(y), d = a.at(-1);
  if (d === void 0 || !d.endsWith(".jsonl") || ![ n, i, ...a ].every(mr)) return;
  let j = a.slice(0, -1), g = h => ({
    namespace: "sidecar",
    projectKey: n,
    sessionId: i,
    relPath: [ ...j, h ]
  }), m = g(d.replace(/\.jsonl$/, ".forked-skill.json")), S = g(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
  return qg(m) === void 0 && qg(S) === void 0 ? {
    scoping: m,
    provenanceMarker: S
  } : void 0;
}

function T(e) {
  let r = hA(e.scoping), n = hA(e.provenanceMarker);
  return r && n ? {
    scoping: r,
    provenanceMarker: n
  } : void 0;
}

async function v(e, r) {
  let n = await e.statMeta(r);
  if (!n.ok) return n.error.code === "NotFound" ? {
    kind: "absent"
  } : {
    kind: "unusable",
    ...u(n.error)
  };
  if (n.value.size > k) return {
    kind: "unusable"
  };
  let i = await e.read([ r ]);
  if (!i.ok) return {
    kind: "unusable",
    ...u(i.error)
  };
  let s = i.value.items[0];
  return s.found ? {
    kind: "text",
    text: Buffer.from(s.value).toString("utf8")
  } : {
    kind: "absent"
  };
}

async function I(e, r) {
  let n = await e.statMeta(r);
  if (n.ok) return {
    present: !0
  };
  return n.error.code === "NotFound" ? {
    present: !1
  } : {
    present: !0,
    ...u(n.error)
  };
}

function c(e) {
  return e === !0 ? {
    transientRead: !0
  } : {};
}

function u(e) {
  return c(Mmr(e));
}

async function b(e, r, n) {
  let i = await e.write(r, R(n), {
    mode: 438 & ~process.umask()
  });
  if (!i.ok) throw t(`forked-skill provenance marker write: ${i.error.code}`), Error("forked-skill provenance marker write failed");
}

function M() {
  if (he()) throw Error("forked-skill sidecar write refused: diskless session with no storage backend or key for the path");
}

async function Jer(e, r, n) {
  let i = z() && n ? hA(e) : void 0;
  if (n && i) return b(n, i, r);
  M(), await Tn(e, R(r));
}

async function D3o(e, r, n) {
  let i = z() && n ? p(e) : void 0;
  if (n && i) {
    await b(n, i.provenanceMarker, r.skillName);
    let o = await n.write(i.scoping, _(r), {
      mode: 438 & ~process.umask()
    });
    if (!o.ok) throw t(`forked-skill scoping write: ${o.error.code}`), Error("forked-skill scoping record write failed");
    return;
  }
  M();
  let s = f(e);
  await x(F(s.scoping), {
    recursive: !0
  }), await Jer(s.provenanceMarker, r.skillName), await Tn(s.scoping, _(r));
}

async function L3o(e, r) {
  let n = z() && r ? p(e) : void 0;
  if (r && n) return P(r, n);
  return B2t(f(e));
}

async function B2t(e, r) {
  let n = z() && r ? T(e) : void 0;
  if (r && n) return P(r, n);
  if (he()) return {
    status: "diskless"
  };
  let i;
  try {
    let s = await l(e.scoping);
    if (!s.isFile() || s.size > k) return {
      status: "malformed"
    };
    i = await w(e.scoping, "utf-8");
  } catch (s) {
    if (W(s)) return await D(e.provenanceMarker);
    return {
      status: "malformed",
      ...c(XQ(E(s)))
    };
  }
  return K(i);
}

function K(e) {
  let r;
  try {
    r = Y(e);
  } catch {
    return {
      status: "malformed"
    };
  }
  let n = NCn().safeParse(r);
  return n.success ? {
    status: "valid",
    scoping: n.data
  } : {
    status: "malformed"
  };
}

async function P(e, r) {
  let n = await v(e, r.scoping);
  switch (n.kind) {
   case "text":
    return K(n.text);

   case "unusable":
    return {
      status: "malformed",
      ...c(n.transientRead)
    };

   case "absent":
    {
      let i = await I(e, r.provenanceMarker);
      return i.present ? {
        status: "absent-but-marked",
        ...c(i.transientRead)
      } : {
        status: "absent"
      };
    }
  }
}

async function D(e) {
  try {
    return await l(e), {
      status: "absent-but-marked"
    };
  } catch (r) {
    return W(r) ? {
      status: "absent"
    } : {
      status: "absent-but-marked",
      ...c(XQ(E(r)))
    };
  }
}

async function N3o(e, r) {
  let n, i = z() && r ? p(e) : void 0;
  if (r && i) {
    let a = await v(r, i.provenanceMarker);
    if (a.kind !== "text") return;
    n = a.text;
  } else if (he()) return; else {
    let {provenanceMarker: a} = f(e);
    try {
      let d = await l(a);
      if (!d.isFile() || d.size > k) return;
      n = await w(a, "utf-8");
    } catch {
      return;
    }
  }
  let s;
  try {
    s = Y(n);
  } catch {
    return;
  }
  let o = Tes().safeParse(s);
  return o.success ? o.data.skillName : void 0;
}

export { ttt, Jer, D3o, L3o, B2t, N3o };
