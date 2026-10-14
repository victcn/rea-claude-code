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

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import { X } from "./chunk-1zg3hbfq.js";

import "./chunk-5brm0azz.js";

import "./chunk-hedpgw9m.js";

import "./chunk-xywp7esx.js";

import "./chunk-0pmh7awy.js";

import "./chunk-07cck4g7.js";

import { f } from "./chunk-3ykz5st8.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-jkzenvsk.js";

import "./chunk-q6wab2jw.js";

import "./chunk-zvghq5er.js";

import "./chunk-30n0xq4e.js";

import "./chunk-2msx6erf.js";

import "./chunk-0cdqg49t.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-wptm3jf5.js";

import "./chunk-j90se18b.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-r276nwd3.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-yxennhe9.js";

import "./chunk-rgd61mm3.js";

import "./chunk-nnrb0acr.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-x5881pc6.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-mw643xee.js";

import "./chunk-qqd24q2y.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-8yperama.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-46phtgr7.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-2my8wpr5.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-g6nh65r0.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-hmce8a0s.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-y3nc3daq.js";

import "./chunk-s82cb921.js";

import { pk } from "./chunk-ewk363e4.js";

import { ztt } from "./chunk-xtx5f5eb.js";

import { khs, aPt } from "./chunk-sqb9meyh.js";

import "./chunk-xmqqa853.js";

import "./chunk-d588tceh.js";

import { GTe } from "./chunk-j85j5j0r.js";

import { tKo, FJn, rKo } from "./chunk-3p2d5d7s.js";

import "./chunk-av9t4vjk.js";

import "./chunk-h83cda0g.js";

import "./chunk-86k06k4p.js";

import "./chunk-dc6j1jb5.js";

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

var u = 5, p = 500, g = 3, m = 5e3, y = {
  manifestGetAttempts: u,
  manifestGetRetryDelayMs: p,
  maxRefusedManifestGets: g,
  refusedManifestGetDelayMs: m
};

async function S(r, e) {
  for (let t = 1; ;t++) {
    let o = await r(aPt);
    switch (o.kind) {
     case "ok":
     case "not_found":
      return {
        kind: "answered"
      };

     case "error":
      if (o.status === khs || !o.retryable) return {
        kind: "refused",
        status: o.status ?? 0,
        errorKind: o.errorKind
      };
      if (t >= e.manifestGetAttempts) return X("warn", "file_store_probe_unreachable", {
        kind: o.errorKind,
        status: o.status ?? 0
      }), {
        kind: "unreachable"
      };
      await J(e.manifestGetRetryDelayMs * 2 ** (t - 1), void 0, {
        unref: !0
      });
    }
  }
}

async function d(r, e = y) {
  let t = i => {
    try {
      r.announceVerdict(i);
    } catch {
      X("error", "file_store_verdict_publish_threw", {});
    }
    return i;
  }, o;
  try {
    o = await r.enabled();
  } catch {
    o = !1;
  }
  if (!o) return t("off");
  let s = F(r.onRowStaged ?? ztt.subscribe), n = await a(r, e, t, !1);
  return (async () => {
    let i = n;
    while (i === null) await s.next(), i = await a(r, e, t, !0);
    s.close();
  })(), n;
}

function F(r) {
  let e = !1, t = null, o = r(() => {
    if (t !== null) {
      let s = t;
      t = null, s();
    } else e = !0;
  });
  return {
    next: () => new Promise(s => {
      if (e) e = !1, s(); else t = s;
    }),
    close: o
  };
}

async function a(r, e, t, o) {
  for (let s = 1; ;s++) {
    let n;
    try {
      n = await S(r.getRow, e);
    } catch {
      n = {
        kind: "unreachable"
      };
    }
    switch (n.kind) {
     case "answered":
      return t("served");

     case "unreachable":
      return null;

     case "refused":
      if (o && n.errorKind === "auth") return X("warn", "file_store_probe_refused_after_stage", {
        status: n.status
      }), null;
      if (r.hasPreviousCloudInstance && s < e.maxRefusedManifestGets) {
        await J(e.refusedManifestGetDelayMs, void 0, {
          unref: !0
        });
        continue;
      }
      return X("warn", "file_store_probe_refused", {
        kind: n.errorKind,
        status: n.status
      }), f("ccr_dir_sync_seed", "manifest_refused", {
        status: n.status,
        refusal: c(n.errorKind)
      }), t("refused");
    }
  }
}

var _ = {
  beforeTurn: async () => {},
  afterTurn: () => {},
  drain: async () => {}
};

function w() {
  return {
    enabled: rKo,
    getRow: GTe,
    announceVerdict: tKo,
    hasPreviousCloudInstance: k() > 1
  };
}

function we(r, e = w(), t = {
  git: FJn()
}, o = (t.git ? E(r) : null)) {
  return d(e), _;
}

function k() {
  let r = pk().CLAUDE_CODE_WORKER_EPOCH;
  if (r === void 0) return 1;
  let e = Number.parseInt(r, 10);
  return Number.isInteger(e) && e >= 1 ? e : Number.MAX_SAFE_INTEGER;
}

function E(r, {syncsUnlistedDotFiles: e = !1} = {}) {
  return null;
}

export { we as startWorkerDirSync };
