// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { VYt } from "./chunk-84yp45y8.js";

import { isDeepStrictEqual as t } from "util";

function Ett(a, i) {
  i(r => {
    let o = r;
    if ("cacheBreakerPhrase" in a) {
      let e = a.cacheBreakerPhrase, n = e == null ? void 0 : String(e);
      if (o.cacheBreakerPhrase !== n) o = {
        ...o,
        cacheBreakerPhrase: n
      };
    }
    if ("autoCompactWindow" in a) {
      let e = a.autoCompactWindow, n = e == null ? VYt() : Number(e);
      if (!t(o.autoCompactWindow, n)) o = {
        ...o,
        autoCompactWindow: n
      };
    }
    if ("briefTranscript" in a) {
      let e = Boolean(a.briefTranscript);
      if (o.briefTranscript !== e) o = {
        ...o,
        briefTranscript: e
      };
    }
    if ("isBriefOnly" in a) {
      let e = Boolean(a.isBriefOnly);
      if (o.isBriefOnly !== e) o = {
        ...o,
        isBriefOnly: e
      };
    }
    if ("slackTagConnected" in a) {
      let e = Boolean(a.slackTagConnected);
      if (o.slackTagConnected !== e) o = {
        ...o,
        slackTagConnected: e
      };
    }
    if ("fastMode" in a) {
      let e = Boolean(a.fastMode);
      if (o.fastMode !== e) o = {
        ...o,
        fastMode: e
      };
    }
    if ("model" in a) {
      let e = a.model, n = e == null ? null : String(e);
      if (o.mainLoopModelForSession !== n) o = {
        ...o,
        mainLoopModelForSession: n
      };
      if (o.mainLoopModel !== n) o = {
        ...o,
        mainLoopModel: n
      };
    }
    return o;
  });
}

export { Ett };
