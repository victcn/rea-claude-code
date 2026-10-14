// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q } from "./chunk-3pqddg8f.js";

import { jd } from "./chunk-sfvypv11.js";

import { CO, npe } from "./chunk-3apvz0s4.js";

import { yd } from "./chunk-3xtsjx0y.js";

import { ym, J8t } from "./chunk-z09tf6qf.js";

import { fb, P$e } from "./chunk-yrmy36g6.js";

import { ku } from "./chunk-7en5gt36.js";

import { P3t } from "./chunk-84yp45y8.js";

import { sVe } from "./chunk-q1454vna.js";

var c = [ "default", "reset", "none", "gray", "grey" ];

async function IYs(n, e, o) {
  return n(await frr(o, e), {
    display: "system"
  }), null;
}

async function frr(n, e) {
  if (jd()) return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let o = n?.trim() ?? "", t = o === "" ? fb[Math.floor(Math.random() * fb.length)] : o.toLowerCase(), r = c.includes(t);
  if (!r && !fb.includes(t)) {
    let s = fb.join(", ");
    return `Invalid color "${t}". Available colors: ${s}, default`;
  }
  let d = q(), m = ku(), i = r ? "default" : t, l = r ? void 0 : t;
  await P3t(d, i, m, e.storageV5), e.setAppState(s => sVe(s, {
    color: l
  }));
  let a = e.getAppState(), g = a.agent ? a.agentDefinitions.activeAgents.find(s => s.agentType === a.agent) : void 0;
  return J8t(ym(), P$e({
    userOverride: l,
    agentDefinitionColor: g?.color
  }), e.storageV5), p(i, e.credentials), r ? "Session color reset to default" : `Session color set to: ${t}`;
}

function p(n, e) {
  let o = yd()?.bridgeSessionId;
  if (!o) return;
  let t = CO();
  import("./chunk-hdeyhbsa.js").then(({updateBridgeSessionColorTag: r}) => r(o, n, fb, {
    baseUrl: npe(),
    getAccessToken: t ? () => t : void 0,
    credentials: e
  }).catch(() => {}));
}

export { IYs, frr };
