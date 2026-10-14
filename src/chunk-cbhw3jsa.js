// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { O } from "./chunk-1xnsr4dy.js";

import * as r from "fs/promises";

import * as o from "path";

function IKt(e = {}) {
  return {
    fs: r,
    path: o,
    platform: () => O(),
    ...e
  };
}

async function OKt(e, t) {
  return t.isRootNameExchangeable === !0 ? e.path.join(await e.fs.realpath(e.path.dirname(t.realRoot)), e.path.basename(t.realRoot)) : e.fs.realpath(t.realRoot);
}

export { IKt, OKt };
