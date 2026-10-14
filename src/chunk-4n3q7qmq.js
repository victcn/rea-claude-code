// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke } from "./chunk-3pqddg8f.js";

import { p } from "./chunk-jkzenvsk.js";

import { yWe, _We, bWe } from "./chunk-mxxd635s.js";

import { M, u, De, A } from "./chunk-cvcg6n1z.js";

var r = "anthropic/renderUnderSessionRules";

function fKs() {
  return {
    experimental: {
      [r]: {
        v: 1
      }
    }
  };
}

var x = p(() => u({
  experimental: u({
    [r]: u({
      v: A(1)
    })
  })
}));

var l = p(() => De({
  v: A(1),
  permissionContext: yWe(),
  offersHandOff: M(),
  classifiesEveryCall: M(),
  grantsApply: M()
}));

function Q0r(i, n) {
  let e = _We(i) ? void 0 : l().safeParse(i).data;
  if (e === void 0 || n === void 0) return;
  let {mode: o, ...s} = e.permissionContext;
  if (!(o === "default" || o === "dontAsk" || o === "acceptEdits" || o === "auto" && e.offersHandOff) || Object.values(s.alwaysAllowRules).some(t => t.length > 0) || s.strippedDangerousRules !== void 0 || s.additionalWorkingDirectories.$map.length > 0 || s.trustedNetworkDirectories !== void 0) return;
  return {
    offersHandOff: e.offersHandOff,
    classifiesEveryCall: e.classifiesEveryCall,
    toolPermissionContext: {
      ...bWe(e.permissionContext, n, ke()),
      ...!e.grantsApply && {
        pollEventDeliveryGuard: !0
      }
    }
  };
}

export { fKs, Q0r };
