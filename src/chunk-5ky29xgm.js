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

import { B } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-j016gcgm.js";

import { _k } from "./chunk-xywp7esx.js";

import "./chunk-145qexpp.js";

import "./chunk-t6pdm7af.js";

import "./chunk-jkzenvsk.js";

import "./chunk-q6wab2jw.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-zvghq5er.js";

import "./chunk-30n0xq4e.js";

import "./chunk-2msx6erf.js";

import "./chunk-0cdqg49t.js";

import "./chunk-5brm0azz.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-wptm3jf5.js";

import "./chunk-j90se18b.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-0pmh7awy.js";

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

import { m1e, zK } from "./chunk-dd98x6x7.js";

import "./chunk-x5881pc6.js";

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

import "./chunk-8yperama.js";

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

import "./chunk-hmce8a0s.js";

import { lyt } from "./chunk-d1qfrnhd.js";

import { e } from "./chunk-xx3xgkvz.js";

import { myo, ik } from "./chunk-2mq45myc.js";

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

function i(s) {
  return s?.permissionMode === "bypassPermissions" || s?.allowBypass === !0;
}

function g(s) {
  if (!i(s)) return;
  if (_k.isRootOutsideDeliberateSandbox()) console.error("--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons"), 
  process.exit(1);
}

function c(s) {
  if (!s || !i(s)) return s;
  let o = myo();
  if (!o) return s;
  return console.error(o), {
    ...s,
    permissionMode: s.permissionMode === "bypassPermissions" ? void 0 : s.permissionMode,
    allowBypass: void 0
  };
}

async function b(s, o, r) {
  if (!i(o)) return;
  if (ik()) return;
  if (lyt()) return;
  if (o?.permissionModeInherited && !o.allowBypass && zK()) return;
  let [{runSteps: a}, n] = await Promise.all([ import("./chunk-eehjjkg5.js"), import("./chunk-z64t6f8e.js") ]);
  if (await a(s, [ p => e(n.BypassPermissionsModeDialog, {
    onAccept: () => p(),
    storageV5: r
  }) ], {
    session: B()
  }), await m1e(), !lyt()) t("[permissions] bypass consent was accepted but user settings do not show it (the write failed, or the file has an invalid value), so bypass is not passed on", {
    level: "warn"
  });
}

export { c as applyBypassPolicyGate, b as ensureAgentsBypassConsent, g as refuseBypassUnderRoot };
