// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke } from "./chunk-3pqddg8f.js";

import { zme } from "./chunk-ddr690nj.js";

import { a } from "./chunk-j016gcgm.js";

import { Ul } from "./chunk-znhtg8e4.js";

import { O } from "./chunk-1xnsr4dy.js";

import { homedir as o } from "os";

var qVr = "CLAUDE_CODE_RELAUNCH_HOME_TRUST";

async function z5o() {
  let r = await Ul(process.pid);
  if (r === void 0) return {};
  return {
    [qVr]: `${process.pid}:${r}`
  };
}

async function G5o() {
  let r = /^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST ?? "");
  if (!r) return !1;
  let e = O() === "windows" ? process.ppid : process.pid;
  if (Number(r[1]) !== e) return !1;
  if (!zme(ke(), o())) return !1;
  let t = await Ul(e, {
    skipCache: !0
  });
  return t !== void 0 && t === r[2];
}

export { qVr, z5o, G5o };
