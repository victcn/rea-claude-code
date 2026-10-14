// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-hedpgw9m.js";

import { Wr, Bt } from "./chunk-3ykz5st8.js";

import { _ } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-y752zmas.js";

import "./chunk-0cdqg49t.js";

import "./chunk-0pmh7awy.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-07cck4g7.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-jkzenvsk.js";

import "./chunk-q6wab2jw.js";

import "./chunk-zvghq5er.js";

import "./chunk-30n0xq4e.js";

import "./chunk-2msx6erf.js";

import "./chunk-5brm0azz.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-wptm3jf5.js";

import { mt } from "./chunk-j90se18b.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-r276nwd3.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-1zg3hbfq.js";

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

import "./chunk-xywp7esx.js";

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

import "./chunk-2mq6q9dt.js";

import "./chunk-b47tzzqx.js";

import { nut } from "./chunk-4dpx2qvt.js";

import "./chunk-fmrcybq2.js";

import "./chunk-xb4716r9.js";

import "./chunk-7xj6dhxv.js";

import "./chunk-bzekf4tc.js";

import { hTe, nDe, b2t, Pwn } from "./chunk-z05wzzaj.js";

import "./chunk-w45fptzy.js";

import "./chunk-9g86mkx2.js";

import { gF } from "./chunk-q69zsyfe.js";

import "./chunk-qbhknj4t.js";

import "./chunk-86k06k4p.js";

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

async function v(i) {
  await nut();
  let o = gF(), g = await hTe(i) !== null, n = nDe() ? void 0 : "The Claude Design sign-in is not configured in this build.";
  return {
    available: o,
    signed_in: g,
    can_sign_in_here: n === void 0,
    ...n !== void 0 && {
      reason: n
    }
  };
}

async function L({stdin: i, write: o, signal: g}) {
  if (await nut(), !gF()) {
    await Bt("design_login_host", "not_enabled");
    let e = {
      event: "done",
      ok: !1,
      message: "Claude Design sync is not available in this session."
    };
    return await o(_(e)), e;
  }
  let n, s = new AbortController;
  if (g.aborted) s.abort(); else g.addEventListener("abort", () => s.abort(), {
    once: !0
  });
  (async () => {
    let e = "";
    for await (let a of i) {
      e += typeof a === "string" ? a : (new TextDecoder).decode(a);
      let t = e.indexOf(`\n`);
      while (t >= 0) {
        let f = e.slice(0, t).trim();
        if (e = e.slice(t + 1), t = e.indexOf(`\n`), f === "") continue;
        let r = mt(f, !1), l = r !== null && typeof r === "object" && "code" in r && typeof r.code === "string" ? r.code.trim() : void 0;
        if (l && n) {
          let u = l.indexOf("#");
          n(u >= 0 ? l.slice(0, u) : l, u >= 0 ? l.slice(u + 1) : "");
        }
      }
    }
    s.abort();
  })().catch(() => s.abort());
  let d = await Pwn(s.signal, {
    onAuthUrl: (e, a) => {
      let t = {
        event: "pages",
        url: e,
        manual_url: a,
        manual_first: b2t()
      };
      o(_(t));
    },
    onManualCode: e => {
      n = e;
    }
  }), c = d.ok ? {
    event: "done",
    ok: !0
  } : {
    event: "done",
    ok: !1,
    message: m(d)
  };
  if (d.ok) await Wr("design_login_host"); else await Bt("design_login_host", d.reason);
  return await o(_(c)), c;
}

function m(i) {
  switch (i.reason) {
   case "interrupted":
    return "The sign-in was cancelled.";

   case "unconfigured":
    return "The Claude Design sign-in is not configured in this build.";

   case "remote":
    return "This session runs on a remote machine, so the browser sign-in cannot finish here.";

   case "timed_out":
    return "The browser sign-in timed out after five minutes. Try again.";

   case "failed":
    return `The browser sign-in failed (${i.cause ?? "unknown error"}). Try again.`;

   case "invalid":
    return "The sign-in did not return a usable credential. Try again.";

   case "save_failed":
    return "The credential could not be saved to secure storage. Try again.";
  }
}

export { v as designLoginStatus, L as runDesignLoginSignIn };
