// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import { ke } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import { l, E, W } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { sd } from "./chunk-w0q7jqcp.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import { pr } from "./chunk-9yajep3y.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import { Qf } from "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import "./chunk-xywp7esx.js";

import "./chunk-j90se18b.js";

import "./chunk-jkzenvsk.js";

import "./chunk-5brm0azz.js";

import "./chunk-8yperama.js";

import "./chunk-x5881pc6.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-hmce8a0s.js";

import "./chunk-nnrb0acr.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-07cck4g7.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-qqd24q2y.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-2my8wpr5.js";

import "./chunk-46phtgr7.js";

import "./chunk-y3nc3daq.js";

import "./chunk-mw643xee.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-g6nh65r0.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-d588tceh.js";

import "./chunk-xmqqa853.js";

import { TYo, AYo, B2r, B7n } from "./chunk-3gstvx8q.js";

import { dQe } from "./chunk-fjr5ajjf.js";

import { Nk } from "./chunk-6w8k0krf.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

import { yt } from "./chunk-9zhz923g.js";

import { lstat as j, readdir as P } from "fs/promises";

import { dirname as C, join as _, resolve as K } from "path";

var T = 4e3, R = 16, b = {
  kind: "elsewhere"
}, g = {
  kind: "nowhere"
}, y = {
  kind: "nowhere",
  hasOwnSessionRecord: !0
};

async function v(n, r) {
  return j(n).then(o => (r === "file" ? o.isFile() : o.isDirectory()) ? !0 : void 0, o => {
    let s = E(o);
    return s === "ENOENT" || s === "ENOTDIR" ? !1 : void 0;
  });
}

function N(n) {
  return v(n, "file");
}

async function O(n) {
  let r = await v(C(n), "dir");
  return r === !0 ? N(n) : r;
}

async function Z(n, r, o = T) {
  if (!dQe()) return {
    kind: "unknown",
    why: "not_looked"
  };
  let s = sd(n), c = ke(), a = pr(c) ?? K(c);
  if (z() && r !== void 0) return B(r, a, s, o);
  let h = await TYo(a, s, r), u = Qf(), k = B7n(s);
  try {
    let e = await O(h);
    if (e !== !1) return e ? y : {
      kind: "unknown",
      why: "here_unreadable"
    };
    let i = await P(u, {
      withFileTypes: !0
    }), f = await Promise.all(i.map(d => Nk(d, _(u, d.name), "unknown"))), p = i.filter((d, m) => f[m] === "dir"), w = p.slice(0, o), S = f.some(d => d === "symlink" || d === "unknown");
    for (let d = 0; d < w.length; d += R) {
      let m = await Promise.all(w.slice(d, d + R).map(F => N(_(u, F.name, k))));
      if (m.includes(!0)) return b;
      S ||= m.includes(void 0);
    }
    return S ? {
      kind: "unknown",
      why: "probe_failed"
    } : p.length > w.length ? {
      kind: "unknown",
      why: "listing_capped"
    } : g;
  } catch (e) {
    if (W(e)) return g;
    return t(`[sessionRecord] could not tell whether another project folder holds this session's record: ${l(e)}`, {
      level: "warn"
    }), {
      kind: "unknown",
      why: "listing_failed"
    };
  }
}

async function B(n, r, o, s) {
  try {
    return await D(n, r, o, s);
  } catch (c) {
    return t(`[sessionRecord] could not tell whether another project folder holds this session's record: ${l(c)}`, {
      level: "warn"
    }), {
      kind: "unknown",
      why: "listing_failed"
    };
  }
}

async function D(n, r, o, s) {
  let c = await AYo(r, o, n);
  if (c.v5 === void 0) {
    let e = await O(c.path);
    if (e !== !1) return e ? y : {
      kind: "unknown",
      why: "here_unreadable"
    };
  } else {
    let e = await n.scopeKind({
      namespace: "transcript",
      projectKey: c.projectKey
    });
    if (!e.ok || e.value.kind === "link" || e.value.kind === "other") return {
      kind: "unknown",
      why: "here_unreadable"
    };
    if (e.value.kind === "directory") {
      let i = await n.statMeta(c.v5.key);
      if (i.ok) return y;
      if (i.error.code !== "NotFound") return {
        kind: "unknown",
        why: "here_unreadable"
      };
    }
  }
  let a = [], h;
  do {
    let e = await n.listEntries({
      namespace: "transcript"
    }, {
      cursor: h,
      skipScopeStats: !0,
      skipKeyStats: !0
    });
    if (!e.ok) return t(`[sessionRecord] could not tell whether another project folder holds this session's record: ${yt(e.error)}`, {
      level: "warn"
    }), {
      kind: "unknown",
      why: "listing_failed"
    };
    for (let i of e.value.items) if (i.kind === "scope" && i.scope.namespace === "transcript") {
      let f = i.scope.projectKey;
      if (f !== void 0) a.push(f);
    }
    h = e.value.cursor;
  } while (h !== void 0 && a.length < s);
  let u = a.slice(0, s), k = !1;
  for (let e = 0; e < u.length; e += R) {
    let i = await Promise.all(u.slice(e, e + R).map(async f => {
      let p = B2r(f, o);
      if (p === void 0) return;
      let w = await n.statMeta(p);
      return w.ok ? !0 : w.error.code === "NotFound" ? !1 : void 0;
    }));
    if (i.includes(!0)) return b;
    k ||= i.includes(void 0);
  }
  return k ? {
    kind: "unknown",
    why: "probe_failed"
  } : h !== void 0 || a.length > u.length ? {
    kind: "unknown",
    why: "listing_capped"
  } : g;
}

export { Z as findSessionRecordElsewhere };
