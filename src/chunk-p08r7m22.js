// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { jt } from "./chunk-b0z4bv3v.js";

import { Ce, ce } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { it } from "./chunk-zscnwzv2.js";

import { stat as i } from "fs/promises";

import { homedir as s } from "os";

import { join as l } from "path";

async function c(e, a) {
  await Ce(r => ({
    ...r,
    appleTerminalSetupInProgress: !0,
    appleTerminalBackupPath: e
  }), a);
}

async function Yjt(e) {
  await Ce(a => ({
    ...a,
    appleTerminalSetupInProgress: !1
  }), e);
}

function u() {
  let e = ce();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? !1,
    backupPath: e.appleTerminalBackupPath || null
  };
}

function Xjt() {
  return l(s(), "Library", "Preferences", "com.apple.Terminal.plist");
}

async function $Vo(e) {
  let a = Xjt(), r = `${a}.bak`;
  try {
    let {code: n} = await it("defaults", [ "export", "com.apple.Terminal", a ]);
    if (n !== 0) return null;
    try {
      await i(a);
    } catch {
      return null;
    }
    return await it("defaults", [ "export", "com.apple.Terminal", r ]), await c(r, e), 
    r;
  } catch (n) {
    if (jt(n)) return t(`backupTerminalPreferences: fs inaccessible: ${n}`), null;
    return d(n), null;
  }
}

async function myn(e) {
  let {inProgress: a, backupPath: r} = u();
  if (!a) return {
    status: "no_backup"
  };
  if (!r) return await Yjt(e), {
    status: "no_backup"
  };
  try {
    await i(r);
  } catch {
    return await Yjt(e), {
      status: "no_backup"
    };
  }
  let n = !1;
  try {
    let {code: o} = await it("defaults", [ "import", "com.apple.Terminal", r ]);
    if (o !== 0) return {
      status: "failed",
      backupPath: r
    };
    return n = !0, await it("killall", [ "cfprefsd" ]), await Yjt(e), {
      status: "restored"
    };
  } catch (o) {
    if (jt(o)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`); else d(o);
    return await Yjt(e), n ? {
      status: "restored"
    } : {
      status: "failed",
      backupPath: r
    };
  }
}

export { Yjt, Xjt, $Vo, myn };
