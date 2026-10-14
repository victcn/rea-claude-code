// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ce } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { tp } from "./chunk-sg5gpfs4.js";

import { rf, kn } from "./chunk-8drhysk2.js";

import { hH, yH } from "./chunk-67jt18z1.js";

import { ZFn } from "./chunk-chhsvfy5.js";

import { _io, IHn, OHn, vio } from "./chunk-81rtbneg.js";

var d = 14, f = 10;

async function a2e() {
  try {
    let e = ZFn();
    if (e === void 0) return [];
    if (yH() !== null) return [];
    let {enabled: s} = await e;
    if (s.length === 0) return [];
    let u = tp(), l = hH(), c = ce().numStartups, g = Date.now(), r = [];
    for (let n of s) {
      let {marketplace: o} = kn(n.repository);
      if (!o || rf(o)) continue;
      if (vio(n, u, l) !== "user-install") continue;
      if (p(n)) continue;
      let i = IHn(n.repository);
      if (!i) continue;
      if (_io(n.repository)) continue;
      let {sessionsSinceLastUse: m, daysSinceLastUse: a} = OHn(i, c, g);
      if (a >= d && m >= f) r.push({
        pluginId: n.repository,
        name: n.name,
        daysSinceLastUse: a
      });
    }
    return r.sort((n, o) => o.daysSinceLastUse - n.daysSinceLastUse), r;
  } catch (e) {
    return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`, {
      level: "error"
    }), [];
  }
}

function y6o(e) {
  if (yH() !== null) return null;
  let s = IHn(e);
  if (!s) return null;
  if (_io(e)) return 0;
  return OHn(s, ce().numStartups, Date.now()).daysSinceLastUse;
}

function p(e) {
  return Boolean(e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}

export { a2e, y6o };
