// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { i } from "./chunk-hedpgw9m.js";

import { Hln } from "./chunk-x5881pc6.js";

import { t } from "./chunk-kawq2919.js";

import { Cme } from "./chunk-a16yb89m.js";

import { dp, Am } from "./chunk-mw643xee.js";

import { Y6o } from "./chunk-ndmv7x2e.js";

import { openSync as a } from "fs";

import { ReadStream as s } from "tty";

function p() {
  if (process.stdin.isTTY) return {
    kind: "stdin"
  };
  if (Le(!1)) return {
    kind: "unavailable",
    reason: "ci"
  };
  if (Hln() === "mcp") return {
    kind: "unavailable",
    reason: "mcp"
  };
  try {
    let n = a("/dev/tty", "r"), e = new s(n);
    return Cme(e), e.on("error", r => {
      i("tengu_tty_stream_error", dp(r)), t(`/dev/tty stream error: ${r}`, {
        level: "debug"
      });
    }), e.isTTY = !0, {
      kind: "override",
      stream: e
    };
  } catch (n) {
    return t(`Could not open /dev/tty for stdin override: ${n}`, {
      level: "error"
    }), {
      kind: "unavailable",
      reason: "tty_unavailable"
    };
  }
}

class o {
  input=null;
  get() {
    return this.input ??= p();
  }
  reset() {
    this.input = null;
  }
}

var qet = new o;

function Ux(n = !1) {
  Y6o();
  let e = qet.get(), r = {
    exitOnCtrlC: n
  };
  if (e.kind === "override") r.stdin = e.stream;
  return r.isScreenReaderEnabled = Am(), r;
}

export { qet, Ux };
