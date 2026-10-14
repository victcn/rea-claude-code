// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { mn, Fi, PH, ec, But, P3e } from "./chunk-8drhysk2.js";

import { mk } from "./chunk-9wtp3skp.js";

import { ov } from "./chunk-crtp56sh.js";

import { tE, _V, kio } from "./chunk-81rtbneg.js";

import { Gl, Gk } from "./chunk-84yp45y8.js";

async function ige(n, i, r) {
  let o = PH(n), {name: a, marketplace: e} = ec(o);
  if (e === mn && tE().nameRegistration === void 0) await Gl(r);
  let m = _V(a, e, i), d = But(e);
  if (!d && e !== Fi && !P3e(a, e)) return m;
  let s = !1;
  try {
    s = await c(o, a, e, r);
  } catch (u) {
    t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${l(u)}); logging its name as third-party`);
  }
  return {
    ...m,
    ...d && e !== void 0 && {
      marketplace_name_redacted: kio(e)
    },
    ...!s && {
      plugin_name_redacted: b(ov)
    }
  };
}

async function c(n, i, r, o) {
  if (P3e(i, r)) return !0;
  if (r === Fi) return mk(i) !== void 0;
  return await Gk(n, o) !== null;
}

export { ige };
