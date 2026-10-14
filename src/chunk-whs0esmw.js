// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { jo } from "./chunk-nnrb0acr.js";

import { fe } from "./chunk-dd98x6x7.js";

import { Ac, Cw, MR } from "./chunk-8drhysk2.js";

var Dz = [ "userSettings", "flagSettings", "policySettings" ];

function xpe(t) {
  let i = new Set(jo()), e = Qse(t), n, r;
  for (let s of Dz) {
    if (!i.has(s)) continue;
    let g = fe(s)?.pluginConfigs;
    for (let u of e) {
      let o = g?.[u];
      if (o?.options) n = {
        ...n,
        ...o.options
      };
      if (o?.mcpServers) {
        r = r ?? {};
        for (let [l, c] of Object.entries(o.mcpServers)) r[l] = {
          ...r[l],
          ...c
        };
      }
    }
  }
  return {
    options: n,
    mcpServers: r
  };
}

function Qse(t) {
  let i = MR(t);
  if (i.length > 0) return [ ...i.toReversed(), t ];
  let e = `@${Ac}`, n = t.endsWith(e) ? t.slice(0, -e.length) : "";
  return n !== "" && !n.includes("@") ? [ n, t ] : [ t ];
}

function CWn(t) {
  let i = new Set(jo()), e;
  for (let n of Dz) {
    if (!i.has(n)) continue;
    let r = u5(fe(n)?.enabledPlugins, t);
    if (r !== void 0) e = r;
  }
  return e;
}

function tDt(t, i) {
  let e = Cw(i), n = MR(e);
  if (n.length === 0) return {
    deciding: i,
    written: i,
    replaced: []
  };
  let r = n.filter(s => t?.[s] !== void 0);
  return {
    deciding: t?.[e] === void 0 ? r[0] ?? e : e,
    written: e,
    replaced: r
  };
}

function u5(t, i) {
  let e = Cw(i);
  return [ e, ...MR(e), i ].map(n => t?.[n]).find(n => n !== void 0);
}

export { Dz, xpe, Qse, CWn, tDt, u5 };
