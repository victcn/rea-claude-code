// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Wt, Hls } from "./chunk-84yp45y8.js";

var V3n = {
  create: "Cloud session active",
  attach: "Attached to cloud session"
}, K3n = " \xb7 code here or at ";

function a(e, t) {
  return `${V3n[e]}${K3n}${t}`;
}

function zfn(e, t, o) {
  let s = a(e, t);
  return o ? Hls(e, t, s) : Wt(s, "info");
}

export { V3n, K3n, zfn };
