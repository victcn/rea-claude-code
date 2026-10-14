// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { MM } from "./chunk-ce64fmea.js";

import { Oh, nP } from "./chunk-84yp45y8.js";

import { ik } from "./chunk-2mq45myc.js";

function iW(e) {
  let o = Oh(), s = !!e.isAutoModeAvailable && o;
  if (!s) t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${nP()}`);
  return s;
}

function TGt(e) {
  return !!e.isBypassPermissionsModeAvailable && !ik();
}

function AGt(e, o) {
  switch (e.mode) {
   case "default":
    return "acceptEdits";

   case "acceptEdits":
    return "plan";

   case "plan":
    if (TGt(e)) return "bypassPermissions";
    if (iW(e)) return "auto";
    return "default";

   case "bypassPermissions":
    if (iW(e)) return "auto";
    return "default";

   case "dontAsk":
    return "default";

   default:
    return "default";
  }
}

function IVr(e, o, s) {
  let n = AGt(e, o);
  return {
    nextMode: n,
    context: MM(e.mode, n, e, s)
  };
}

export { iW, TGt, AGt, IVr };
