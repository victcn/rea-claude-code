// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { iR, K4, cf } from "./chunk-84yp45y8.js";

import { jo } from "./chunk-nnrb0acr.js";

import { Jl } from "./chunk-j016gcgm.js";

import { Qrn, $Ms, BR, ce } from "./chunk-xywp7esx.js";

import { T9e, _in, uKn, nM } from "./chunk-q6wab2jw.js";

import { hn, Y_, Vsn, fe, xm } from "./chunk-dd98x6x7.js";

import { ewe } from "./chunk-zzhmvqjt.js";

import { zbo } from "./chunk-ewk363e4.js";

function Yhe() {
  let t = xm(), i = K4.flatMap(e => cf(e).errors.map(s => s.file ? s : {
    ...s,
    file: iR(e)
  })), r = ce(), o = ewe.filter(e => t.settings[e] === void 0 && r[e] !== BR[e] && $Ms(e, r[e])).map(e => ({
    file: Jl(),
    path: e,
    message: Qrn(e) ? "Not a valid value for this setting, so it is ignored and the setting counts as off" : "Not a valid value for this setting, so it is ignored and the setting counts as unset",
    severity: "warning",
    suggestion: "Set it with /config, or delete the key from this file"
  })), n = T6r();
  return {
    settings: t.settings,
    errors: [ ...t.errors, ...i, ...o, ...n.ignored, ...n.turnedOff ]
  };
}

var c = new Set(_in);

function T6r() {
  let t = [], i = [], r = jo();
  for (let o of r) {
    if (!T9e(o)) continue;
    if (o === "projectSettings" && r.includes("userSettings") && Y_()) continue;
    let n = fe(o)?.env ?? {}, e = [], s = [];
    for (let a of Object.keys(n)) {
      let f = a.toUpperCase();
      if (!c.has(f)) continue;
      if (uKn(a, n[a], zbo)) s.push(a); else e.push(a);
    }
    let l = hn(o), g = nM(o);
    if (e.length > 0) t.push({
      file: l,
      path: "env",
      message: `Claude Code ignores these telemetry variables in ${g}: ${e.join(", ")}. A project's settings files can only turn telemetry off: set OTEL_LOGS_EXPORTER, OTEL_METRICS_EXPORTER, or OTEL_TRACES_EXPORTER to none, or a content variable such as OTEL_LOG_USER_PROMPTS to 0, with the name in upper case. That doesn't work for a variable that managed settings, a --settings file, or the environment you start Claude Code from already sets. If you set them on purpose, set them in your shell, your user settings (~/.claude/settings.json), or managed settings instead.`,
      severity: "warning",
      statusOnly: !0
    });
    if (s.length > 0) i.push({
      file: l,
      path: "env",
      message: `${g} turns telemetry off with these variables: ${s.join(", ")}. Claude Code uses these values unless managed settings or a --settings file sets the same variable. Your user settings don't override this file. To keep one on, set it in the environment you start Claude Code from, in a --settings file, or in managed settings.`,
      severity: "warning",
      statusOnly: !0
    });
  }
  return {
    ignored: t,
    turnedOff: i
  };
}

function SKt() {
  return Vsn().filter(t => !t.preserveOnWrite);
}

function Btt() {
  let t = hn("localSettings");
  return [ ...Yhe().errors.filter(r => !r.mcpErrorMetadata && r.severity !== "warning" && r.file !== t), ...SKt() ];
}

export { Yhe, T6r, SKt, Btt };
