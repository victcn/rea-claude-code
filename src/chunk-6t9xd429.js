// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { kn } from "./chunk-8drhysk2.js";

import { Ef } from "./chunk-q6wab2jw.js";

import { hz, s6e } from "./chunk-67jt18z1.js";

import { x0e, cw, Gl, ly, Gk } from "./chunk-84yp45y8.js";

function d(e) {
  return e !== void 0 && Ef(e) ? {
    kind: "unresolved",
    reason: "Its marketplace is a folder whose catalog could not be read, or lists it no more."
  } : {
    kind: "copy"
  };
}

async function R0r(e, o) {
  let [r, l] = await Promise.all([ Gk(e, o), Gl(o) ]), n = l[kn(e).marketplace ?? ""]?.source;
  if (r === null) return d(n);
  let {source: t} = r.entry, c = x0e(t, n);
  if (typeof t !== "string" || !c) return {
    kind: "copy"
  };
  let i = ly(r.marketplaceInstallLocation) === void 0 ? "workspace" : "system", a = await hz(e, r.marketplaceInstallLocation, t, l, cw(), o, i);
  return a.kind === "ok" ? {
    kind: "folder",
    path: a.entryPath
  } : {
    kind: "unresolved",
    reason: s6e(a, r.marketplaceInstallLocation, t).message
  };
}

export { R0r };
