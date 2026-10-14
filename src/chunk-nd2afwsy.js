// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { KGs, qGs, Evo } from "./chunk-3btm71fm.js";

import { af } from "./chunk-xywp7esx.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var e = Ue(af(), o => o.set(null));

function BGs(o) {
  let t = o !== void 0 && o !== null;
  e.set(t ? KGs(o) : null);
}

function jGs(o) {
  return Evo(o) !== void 0 ? e.get() ?? void 0 : void 0;
}

function WGs(o, t) {
  if (Evo(o) !== void 0) e.set(t ?? null);
}

function dPe(o) {
  let t = Evo(o), m = e.get() ?? qGs;
  return t === void 0 ? void 0 : {
    table: m,
    paths: t
  };
}

export { BGs, jGs, WGs, dPe };
