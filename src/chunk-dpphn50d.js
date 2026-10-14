// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-zqby5cq4.js";

import "./chunk-hwdwjvh8.js";

import { x, E } from "./chunk-b0z4bv3v.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-xywp7esx.js";

import { Pr, Jg } from "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import { _, se } from "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

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

import "./chunk-3x03pnz9.js";

import { o1, UNe, Y4e, pDn, d8, pXt, kao } from "./chunk-n4eyr3t2.js";

import { Ale } from "./chunk-xpnqpbtz.js";

import "./chunk-wgsx43va.js";

import "./chunk-278xsh28.js";

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

import { writeFile as c } from "fs/promises";

import { dirname as f } from "path";

function m(n) {
  let o = new Set(UNe.map(e => Y4e(e.key)));
  return n.map(e => {
    let t = {};
    for (let [r, s] of Object.entries(e.bindings)) if (!o.has(Y4e(r))) t[r] = s;
    return {
      context: e.context,
      bindings: t
    };
  }).filter(e => Object.keys(e.bindings).length > 0);
}

function a() {
  let n = pDn, e = {
    $schema: "https://www.schemastore.org/claude-code-keybindings.json",
    $docs: "https://code.claude.com/docs/en/keybindings",
    bindings: m(o1.filter(t => !n.includes(t.context)))
  };
  return _(e, null, 2) + `\n`;
}

async function O(n, o) {
  if (!d8()) return {
    type: "text",
    value: "Keybinding customization is disabled in this environment."
  };
  let e = pXt(), t = !1, r = o.storageV5;
  if (r) {
    let i = await r.write(kao, a(), {
      precondition: {
        type: "ifAbsent"
      }
    });
    if (!i.ok) if (i.error.code === "AlreadyExists") t = !0; else throw new x(`keybindings template write failed: ${yt(i.error)}`, "keybindings template write failed");
  } else {
    await se().mkdir(f(e));
    try {
      await c(e, a(), {
        encoding: "utf-8",
        flag: "wx"
      });
    } catch (i) {
      if (E(i) === "EEXIST") t = !0; else throw i;
    }
  }
  let s = await Ale(e);
  if (s.error) return {
    type: "text",
    value: `${t ? "Opened" : "Created"} ${e}. ${s.error}`
  };
  let d = Pr() ? ` (Safe mode: custom keybindings are disabled this session \u2014 changes take effect after you ${Jg()}.)` : "";
  return {
    type: "text",
    value: t ? `Opened ${e} in your editor.${d}` : `Created ${e} with template. Opened in your editor.${d}`
  };
}

export { O as call };
