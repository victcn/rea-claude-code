// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { et, ofe } from "./chunk-59na0977.js";

import { Gp, De } from "./chunk-cvcg6n1z.js";

function Dvr(e, n) {
  return e !== void 0 && Number.isInteger(e) && e >= 6 && e <= n ? e : 6;
}

var Lvr = {
  first: 5,
  permissionRequestRenames: 6,
  readAllowLarge: 7,
  editOriginalFile: 8,
  containerSearchTools: 9
}, r = Math.max(...Object.values(Lvr)), c = {
  [et]: {
    [ofe]: Lvr.readAllowLarge
  }
};

var VZt = {
  version: r,
  min_version: Dvr(void 0, r)
}, KZt = {
  version: VZt.version,
  min_version: 1
}, YOt = p(() => De({
  version: Gp().min(1),
  min_version: Gp().min(1)
}).refine(({version: e, min_version: n}) => n <= e));

function cBn(e) {
  return YOt().safeParse(e).data;
}

function uBn(e, n) {
  if (n.version < e.min_version) return {
    kind: "peer_too_old"
  };
  return e.version < n.min_version ? {
    kind: "self_too_old"
  } : {
    kind: "agreed",
    version: Math.min(e.version, n.version)
  };
}

export { Dvr, Lvr, VZt, KZt, YOt, cBn, uBn };
