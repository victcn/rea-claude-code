// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { an } from "./chunk-3vw306fv.js";

import { Hze } from "./chunk-fj1a15yf.js";

import { ae, y, F } from "./chunk-cpyd3eya.js";

F();

function l(o, n, r) {
  return o.isWindowActivation || c(n, r);
}

function Lb() {
  let o = an(), [n] = y(() => o.now());
  return ae(r => {
    let e = o.now();
    if (!l(r, n, e)) return !1;
    let u = r.isWindowActivation ? b("window_activation") : b("mount_settle");
    return t(`Select: dropped stray click (${r.isWindowActivation ? "window-activation click" : `${e - n}ms after mount`})`), 
    i("tengu_select_stray_click_dropped", {
      reason: u
    }), r.dropAsStray(), !0;
  }, [ o, n ]);
}

function S_t() {
  let o = an(), [n] = y(() => o.now());
  return ae(() => c(n, o.now()), [ o, n ]);
}

function c(o, n) {
  return n - o < Hze;
}

export { Lb, S_t };
