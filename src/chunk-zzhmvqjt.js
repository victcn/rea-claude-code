// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Qrn, tve, k0t, BR, ce } from "./chunk-xywp7esx.js";

import { jo } from "./chunk-nnrb0acr.js";

import { Y_, fe, Rn } from "./chunk-dd98x6x7.js";

var ewe = [ "theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled" ];

function bs(n, i) {
  let o = jo(), r = o.includes("userSettings") && Y_();
  for (let e = o.length - 1; e >= 0; e--) {
    let t = o[e];
    if (t === "projectSettings" && r) continue;
    let s = fe(t)?.[n];
    if (s !== void 0) return {
      value: s,
      source: t
    };
  }
  if (ewe.includes(n)) {
    let e = n, t = ce()[e];
    if (t !== void 0 && t !== BR[e]) {
      let s = Qrn(e) ? k0t(e, t) : tve(e, t);
      if (s !== void 0) return {
        value: s,
        source: "legacyGlobalConfig"
      };
    }
  }
  return {
    value: i,
    source: "default"
  };
}

function mK(n, i, o) {
  Rn("userSettings", {
    [n]: i
  }, void 0, o);
}

export { ewe, bs, mK };
