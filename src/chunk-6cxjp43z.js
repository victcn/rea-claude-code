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

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import "./chunk-0cdqg49t.js";

import "./chunk-z52kmxx4.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-g6nh65r0.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-5brm0azz.js";

import "./chunk-0pmh7awy.js";

import "./chunk-x5881pc6.js";

import "./chunk-8yperama.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-46phtgr7.js";

import "./chunk-jkzenvsk.js";

import "./chunk-qqd24q2y.js";

import { Rn, dIr } from "./chunk-dd98x6x7.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9yajep3y.js";

import "./chunk-3ykz5st8.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

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

import "./chunk-3kb22va7.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import { Ft } from "./chunk-xywp7esx.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-hmce8a0s.js";

import "./chunk-07cck4g7.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-2my8wpr5.js";

import "./chunk-y3nc3daq.js";

import "./chunk-mw643xee.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-9nqgkt3n.js";

import { ch } from "./chunk-4y2m4xpx.js";

import "./chunk-ac1gm9w7.js";

import "./chunk-b47tzzqx.js";

import "./chunk-zzhmvqjt.js";

import "./chunk-8es5wy4r.js";

import { de, oen } from "./chunk-5ydr99q3.js";

import "./chunk-jc5888qn.js";

import "./chunk-pegykqwq.js";

import "./chunk-yrmy36g6.js";

import "./chunk-nfw0a30b.js";

import "./chunk-14xmsjdg.js";

import { Eu } from "./chunk-rkfs82vw.js";

import { C$e } from "./chunk-hsqp728s.js";

import "./chunk-3c5ceehb.js";

import "./chunk-jd0jznz2.js";

import "./chunk-2mq45myc.js";

import "./chunk-v2stbart.js";

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

function d(e, o) {
  if (e !== Eu) return !1;
  if (o.options.isNonInteractiveSession) return !1;
  if (de(o).shouldAvoidPermissionPrompts) return !1;
  if (Ft()) return !1;
  if (C$e()) return !1;
  if (ch(oen(o), o.options.mainLoopModel)) return !1;
  return !o.session.workflowUsageConsent.isGranted() && !dIr();
}

async function u(e, o) {
  if (e.grant(), dIr()) return;
  let {error: r} = await Rn("userSettings", {
    skipWorkflowUsageWarning: !0
  }, void 0, o);
  if (r) {
    t(`Failed to persist skipWorkflowUsageWarning: ${r.message}`, {
      level: "error"
    });
    return;
  }
  i("tengu_workflow_usage_warning_accepted", {});
}

export { u as recordWorkflowUsageConsent, d as workflowNeedsUsageConsentPrompt };
