// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { f } from "./chunk-3ykz5st8.js";

import { ce } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { hu } from "./chunk-5brm0azz.js";

import { kmt } from "./chunk-q6wab2jw.js";

import { dn } from "./chunk-nnrb0acr.js";

import { TU, fe } from "./chunk-dd98x6x7.js";

import { dUe } from "./chunk-ewk363e4.js";

import { gu } from "./chunk-53fww9mk.js";

function iet() {
  if (a.NODE_EXTRA_CA_CERTS) return;
  let o = s();
  if (o) process.env.NODE_EXTRA_CA_CERTS = o, t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`);
}

function s() {
  try {
    if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !hu() && kmt("NODE_EXTRA_CA_CERTS")) {
      t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");
      return;
    }
    if (TU() || gu()) return;
    let o = ce(), e = dUe(o?.env, "globalConfig"), i = dn("userSettings") ? fe("userSettings") : void 0, n = dUe(i?.env, "userSettings");
    t(`CA certs: Config fallback - globalEnv keys: ${e ? Object.keys(e).join(",") : "none"}, settingsEnv keys: ${n ? Object.keys(n).join(",") : "none"}`);
    let r = n?.NODE_EXTRA_CA_CERTS || e?.NODE_EXTRA_CA_CERTS;
    if (r) t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
    return r;
  } catch (o) {
    t(`CA certs: Config fallback failed: ${o}`, {
      level: "error"
    }), f("ca_certs_load", "config_read_failed");
    return;
  }
}

export { iet };
