// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Sme, LG, mHr } from "./chunk-6ah1819r.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { le } from "./chunk-cqgvwwgb.js";

import "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-t6pdm7af.js";

import "./chunk-5brm0azz.js";

import "./chunk-0jsy3sb7.js";

import "./chunk-4dwgr3et.js";

import { ft } from "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-x5881pc6.js";

import "./chunk-8yperama.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-46phtgr7.js";

import "./chunk-jkzenvsk.js";

import { gs } from "./chunk-qqd24q2y.js";

import "./chunk-dd98x6x7.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9yajep3y.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-j90se18b.js";

import "./chunk-nnrb0acr.js";

import "./chunk-9btqc05b.js";

import "./chunk-cjt10y7b.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-bsddf56y.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-xywp7esx.js";

import "./chunk-hmce8a0s.js";

import "./chunk-07cck4g7.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-2my8wpr5.js";

import "./chunk-y3nc3daq.js";

import "./chunk-mw643xee.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import { $t, G9 } from "./chunk-g6nh65r0.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-9nqgkt3n.js";

import { vgn } from "./chunk-pg1y73ve.js";

import { q7e } from "./chunk-7kyc6mkn.js";

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

async function x(e) {
  let {command: r} = e, a = e.cwd ?? le(), {file: i, args: u} = vgn() === "powershell" ? {
    file: "pwsh",
    args: [ "-NoProfile", "-Command", r ]
  } : {
    file: "/bin/sh",
    args: [ "-c", r ]
  }, {stdout: d, stderr: l, code: t, error: o} = await ft(i, u, {
    abortSignal: e.abortSignal,
    cwd: a,
    env: gs(),
    extendEnv: !1,
    preserveOutputOnError: !0
  }), s = o && !o.startsWith(`Command failed with exit code ${t}`) ? o : "";
  if (s) m("input_remote_bash", "spawn_failed"); else g("input_remote_bash");
  let p = s ? q7e(s, e.session) : "";
  return {
    outputText: `<${Sme}>${n(d, e.maxOutputChars)}</${Sme}><${LG}>${n(l || p, e.maxOutputChars)}</${LG}><${mHr}>${t}</${mHr}>`,
    exitCode: t
  };
}

function n(e, r) {
  return r === void 0 ? $t(e) : G9(e, r);
}

export { x as runHeadlessBashCommand };
