// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { g } from "./chunk-3ykz5st8.js";

import { Jue, Mxe, iEr } from "./chunk-4y2m4xpx.js";

import { $D, MM } from "./chunk-ce64fmea.js";

import { Fos, rO } from "./chunk-84yp45y8.js";

import { rYo } from "./chunk-4y6w2zwb.js";

import { iW, TGt } from "./chunk-8sjcp0zp.js";

function S2r(o, e, {trigger: a, offerBypass: s = !0} = {}) {
  let t = w2r(o, e, {
    offerBypass: s
  });
  return {
    level: o,
    currentMode: e.mode,
    nextMode: t,
    context: MM(e.mode, t, e, a)
  };
}

function w2r(o, e, {offerBypass: a = !0} = {}) {
  let s = iEr() !== void 0, t = e.mode === "plan" ? e.prePlanMode ?? "plan" : e.mode, r = Jue(o, {
    isAutoModeAvailable: iW(e),
    isBypassPermissionsModeAvailable: a && TGt(e) && (!s || t === "bypassPermissions")
  }, e.proactivityBaseline?.mode), n = e.proactivityBaseline?.mode, d = r === "acceptEdits" && n === "acceptEdits" ? n : rO(e) ? void 0 : t;
  return Mxe(o, r, d) === void 0 ? r : "default";
}

function eYo(o, e, a, {offerBypass: s = !0} = {}) {
  let t;
  if (e(r => {
    if (r.proactivityLevel === o) return r;
    let n = S2r(o, r.toolPermissionContext, {
      offerBypass: s
    });
    return t = {
      from: r.proactivityLevel,
      toMode: n.nextMode,
      modeChanged: n.nextMode !== n.currentMode
    }, {
      ...r,
      proactivityLevel: o,
      toolPermissionContext: {
        ...n.context,
        mode: n.nextMode,
        startupModeDecidedByProactivityLevel: void 0
      }
    };
  }), t === void 0) return;
  if (m(o, a, {
    source: "sdk_host",
    from: t.from,
    toMode: t.toMode
  }), t.modeChanged || Fos(t.from, o)) setImmediate(() => {
    $D.emit();
  });
}

function m(o, e, {source: a, from: s, toMode: t}) {
  rYo(o, e), i("tengu_proactivity_cycle", {
    level: c(o),
    from: c(s),
    to_mode: c(t),
    source: c(a)
  }), g("proactivity_cycle");
}

export { S2r, w2r, eYo };
