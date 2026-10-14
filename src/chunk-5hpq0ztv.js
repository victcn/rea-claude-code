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

import { J } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-6ah1819r.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import { dO, pf, oi } from "./chunk-bp2n0w3d.js";

import "./chunk-dyg54fn6.js";

import { yyn } from "./chunk-01ajyt8d.js";

import "./chunk-0cdqg49t.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

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

import "./chunk-dd98x6x7.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9yajep3y.js";

import "./chunk-hedpgw9m.js";

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

import "./chunk-xywp7esx.js";

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

import "./chunk-2kzvcfy0.js";

import { ezo } from "./chunk-mda5ej37.js";

import { kce } from "./chunk-1pzzpwf7.js";

import "./chunk-zqby5cq4.js";

import "./chunk-3x03pnz9.js";

import "./chunk-k48604rx.js";

import { YC } from "./chunk-shampfde.js";

import "./chunk-6jvxx62m.js";

import { lJ, Ake } from "./chunk-t5tdzmqk.js";

import { GVt, wXo } from "./chunk-7de0e9qj.js";

import "./chunk-gpa5wktp.js";

import "./chunk-1dj3skht.js";

import "./chunk-6f0vymna.js";

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

var v = 2e3;

function _(e, l, p) {
  let i = !1, m = !1, y = p?.muxTimeoutMs ?? v, u = Boolean(a.TMUX || a.STY) && !kce();
  async function c() {
    if (m) return;
    m = !0;
    try {
      let r = ezo(pf.SET_BG_COLOR), s = u ? {
        ...r,
        request: dO(r.request)
      } : r, o, f = u ? "dcs" : "direct";
      if (u) {
        if (o = await Promise.race([ e.send(s), J(y, void 0, {
          unref: !0
        }).then(() => {}) ]), !o) if (i) e.cancel(s); else e.flush(), f = "mux-bare", [o] = await Promise.all([ e.send(r), e.flush() ]);
      } else [o] = await Promise.all([ e.send(s), e.flush() ]);
      if (i) return;
      if (!o) {
        t(`systemTheme: OSC 11 query (via=${f}) got no response`, {
          level: "debug"
        }), YC().osc11Responsive = !1;
        return;
      }
      YC().osc11Responsive = !0;
      let n = wXo(o.data);
      if (t(`systemTheme: OSC 11 response=${o.data} detected=${n} via=${f}`, {
        level: "debug"
      }), n === void 0) return;
      GVt(n), l(n);
    } finally {
      m = !1;
    }
  }
  let d = a.CLAUDE_BG_BACKEND === "daemon";
  if (YC().osc11Responsive !== !1 && !d) c();
  let T = e.subscribeThemeChange(r => {
    if (oi().get(process.stdout)?.modes.isSet("surface")) {
      let s = r ? "dark" : "light";
      t(`systemTheme: theme-change push reported=${s}; surface override active, skipping OSC 11 query`, {
        level: "debug"
      }), GVt(s), l(s);
      return;
    }
    c();
  }), h = d ? Ake(() => {
    if (lJ() === "focused") yyn().then(() => {
      if (!i) c();
    });
  }) : void 0;
  return () => {
    i = !0, T(), h?.();
  };
}

export { _ as watchSystemTheme };
