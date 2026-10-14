// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { a } from "./chunk-j016gcgm.js";

import { Pg, Up } from "./chunk-xywp7esx.js";

function p3r({storedAccountUuid: t, hostAccountUuid: e}) {
  if (!e) return t ? {
    status: "resolved",
    accountUuid: t,
    source: "stored"
  } : {
    status: "missing"
  };
  if (!t) return {
    status: "resolved",
    accountUuid: e,
    source: "env"
  };
  return t.trim().toLowerCase() === e.toLowerCase() ? {
    status: "resolved",
    accountUuid: t,
    source: "env"
  } : {
    status: "mismatch"
  };
}

async function f3r(t) {
  let e = Vt(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await Pg(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}

async function jle(t) {
  let e;
  try {
    e = Up()?.accountUuid;
  } catch {
    e = void 0;
  }
  return p3r({
    storedAccountUuid: e,
    hostAccountUuid: await f3r(t)
  });
}

export { p3r, f3r, jle };
