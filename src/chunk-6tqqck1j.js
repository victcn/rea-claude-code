// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { j } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { oh, cgs } from "./chunk-sqb9meyh.js";

function FNr() {
  let t, o = !1, r = () => {
    if (oh()) o = !0, import("./chunk-56agydrb.js").then(({createRemoteToolHostsRuntime: e}) => {
      t = e();
    }).catch(e => {
      d(j(e)), o = !1;
    });
  }, i = void 0;
  if (cgs({
    get remote() {
      if (!o) r();
      return t;
    },
    ...i !== void 0 && {
      loopbackDev: i
    }
  }), oh()) r();
}

export { FNr };
