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

import { l } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-y752zmas.js";

import "./chunk-x5881pc6.js";

import { EIe } from "./chunk-8yperama.js";

import { bt, t } from "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-t6pdm7af.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-30n0xq4e.js";

import "./chunk-0pmh7awy.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-r276nwd3.js";

import { Mie, OIe } from "./chunk-2my8wpr5.js";

import { iun } from "./chunk-n0bgv22c.js";

import { Xa } from "./chunk-3kb22va7.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-53fww9mk.js";

import "./chunk-1xnsr4dy.js";

async function d({sessionId: i, sdkUrl: e}) {
  try {
    let r = a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Mie;
    if (!(await Xa(r, OIe))?.trim()) {
      t("[vitals] no session token file on this worker; guest vitals disabled");
      return;
    }
    let o = await iun({
      sessionId: i,
      apiBaseUrl: EIe(new URL(e)).origin,
      tokenFilePath: r,
      binaryResolution: "search",
      log: t
    });
    if (o) bt(() => o.stop());
  } catch (r) {
    t(`[vitals] not started: ${l(r)}`);
  }
}

export { d as startHostedWorkerVitalsEmitter };
