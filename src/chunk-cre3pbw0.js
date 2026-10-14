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

import { Vs } from "./chunk-hedpgw9m.js";

import { p } from "./chunk-jkzenvsk.js";

import "./chunk-5wbhf1bk.js";

import { MLs } from "./chunk-q6wab2jw.js";

import "./chunk-3ykz5st8.js";

import "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-zvghq5er.js";

import "./chunk-6ah1819r.js";

import "./chunk-30n0xq4e.js";

import "./chunk-2msx6erf.js";

import "./chunk-y752zmas.js";

import "./chunk-0cdqg49t.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-t6pdm7af.js";

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

import { dt, ca } from "./chunk-dd98x6x7.js";

import "./chunk-x5881pc6.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import { M, De } from "./chunk-cvcg6n1z.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

var u = null, l = p(() => {
  let r = {
    autoMemoryEnabled: M().optional(),
    autoDreamEnabled: M().optional()
  };
  return De(r).refine(a => Object.values(a).some(o => o !== void 0), {
    error: `it sets none of ${new Intl.ListFormat("en", {
      type: "disjunction"
    }).format(Object.keys(r))}`
  });
});

async function S(r, a) {
  let o = l().safeParse(r);
  if (!o.success) {
    let t = o.error.issues[0];
    return {
      ok: !1,
      error: t ? t.path.length > 0 ? `Not a memory settings edit (${t.path.map(String).join(".")}: ${t.message}).` : `Not a memory settings edit: ${t.message}.` : "Not a memory settings edit."
    };
  }
  let e = o.data, d = e.autoDreamEnabled === !0 && dt().autoDreamEnabled === void 0, i = e, n, s = MLs(e.accountMemory), m = await ca("userSettings", t => {
    if (n = s === void 0 ? void 0 : u?.accountSettingRaiseRefusal(t, s), n !== void 0) return null;
    return i = {
      ...e,
      ...e.autoMemoryEnabled !== void 0 && e.accountMemory === void 0 && u?.accountKeyKeptWithAutoMemory(t, e.autoMemoryEnabled)
    }, i;
  }, void 0, a);
  if (m.error) return {
    ok: !1,
    error: m.error.message
  };
  if (n !== void 0) return {
    ok: !1,
    error: n
  };
  if (typeof e.autoMemoryEnabled === "boolean") await Vs("tengu_auto_memory_toggled", {
    enabled: e.autoMemoryEnabled
  });
  if (typeof e.autoDreamEnabled === "boolean") await Vs("tengu_auto_dream_toggled", {
    enabled: e.autoDreamEnabled,
    is_first_enable: d
  });
  return {
    ok: !0,
    written: i
  };
}

export { S as runMemorySettingsEdit };
