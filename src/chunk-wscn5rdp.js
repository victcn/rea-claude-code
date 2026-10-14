// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { k } from "./chunk-xywp7esx.js";

import { fwe, uut } from "./chunk-yk8mtyzg.js";

import { uwe } from "./chunk-gzzx34vb.js";

import { wjt } from "./chunk-73wnf5r6.js";

import { Sco, Ki } from "./chunk-sqb9meyh.js";

function c1r() {
  if (!Sco()) return "off";
  try {
    return k("tengu_vast_tulip", !1) === !0 ? "enforce" : "observe";
  } catch {
    return t("tool host attestation: reading tengu_vast_tulip threw; observing", {
      level: "warn"
    }), "observe";
  }
}

function s(e) {
  let o = uwe(), {status: r, meetsLevel: n, configException: i} = uut(e, o, {
    isCloudWorker: !1
  });
  return {
    status: r,
    verdict: !o.enforce ? "not_policed" : n ? "pass" : i ? "config_exception" : "below_floor"
  };
}

function Qae(e) {
  let o = c1r();
  return o === "off" ? void 0 : {
    mode: o,
    ...s(fwe(e))
  };
}

function Lge(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor";
}

function Vgn() {
  let e = Qae("UNSPECIFIED");
  return {
    attestation: e,
    heldBack: Lge(e)
  };
}

function wGo(e) {
  try {
    e?.(wjt, Ki["repository_trust.served_calls.unattested"]);
  } catch (o) {
    t(`[remote-tools] the notice sink threw on ${wjt}: ${l(o)}`, {
      level: "error"
    });
  }
}

export { c1r, Qae, Lge, Vgn, wGo };
