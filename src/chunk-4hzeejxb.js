// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { Jo } from "./chunk-xywp7esx.js";

import { xr } from "./chunk-yxennhe9.js";

import { Rn } from "./chunk-dd98x6x7.js";

import { _f } from "./chunk-gmq0qwep.js";

import { $yo } from "./chunk-4y2m4xpx.js";

import { Jc, VYt, KYt, Jw, dTt } from "./chunk-84yp45y8.js";

var g = {
  env: "from CLAUDE_CODE_AUTO_COMPACT_WINDOW",
  "unknown-model": "default for an unrecognized model",
  "model-default": "default for this model",
  settings: "from settings"
};

function w(a, n) {
  let o = Jc(a), {window: s, configured: u, source: t} = Jw(o, n), r = u > s ? ` \xb7 capped to ${xr(s)} by model` : "", d = t === "auto" ? "auto" : t === "experiment" || t === "clientdata" ? `auto (${xr(u)} tokens)${r}` : `${xr(u)} tokens (${g[t]})${r}`, e = [ `Auto-compact window for ${Jo(o.settingsKey)}: ${d}` ];
  if (!_f()) e.push("Auto-compact is currently disabled (see /config)");
  if (e.push("Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window."), 
  e.push("The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance."), 
  dTt(t)) e.push("Overriding auto may result in high token usage, especially when resuming long sessions.");
  return e.join(`\n`);
}

async function xVt(a, n) {
  let o = Jc(n.options.mainLoopModel);
  if (Jw(o, void 0).source === "env") return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let s = a.trim().toLowerCase(), t = s === "reset" || s === "unset" || s === "default" ? "auto" : KYt(s);
  if (t === void 0) return `Couldn't parse '${a}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let r = t === "auto" ? void 0 : t, {error: d} = await Rn("userSettings", $yo(o.model, {
    autoCompactWindow: t
  }, {
    autoCompactWindow: r
  }), void 0, n.storageV5);
  if (d) return `Couldn't save setting: ${d.message}`;
  let {window: e, configured: l, source: f} = Jw(o, VYt()), p = (f === "settings" ? l : void 0) !== r;
  n.onQueryEvent?.({
    type: "apply_flag_settings",
    settings: {
      autoCompactWindow: null
    }
  }), i("tengu_autocompact_command", {
    action: b(t === "auto" ? "auto" : "set"),
    ...r !== void 0 && {
      tokens: r
    }
  });
  let m = `Auto-compact window for ${Jo(o.settingsKey)}`;
  if (t === "auto") return p ? `${m} set to auto in settings, but a higher-priority override is active (${xr(e)} tokens)` : `${m} set to auto`;
  let c = "";
  if (p) c = `, but a higher-priority override is active (${xr(e)} tokens)`; else if (e < t) c = ` (capped to model limit of ${xr(e)})`;
  return `${m} set to ${xr(t)} tokens${c}`;
}

var AYs = async (a, n) => {
  let o = a.trim();
  if (!o) return {
    type: "text",
    value: w(n.options.mainLoopModel, n.options.autoCompactWindow)
  };
  return {
    type: "text",
    value: await xVt(o, n)
  };
};

export { xVt, AYs };
