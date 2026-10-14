// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ze, fc, QU } from "./chunk-3pqddg8f.js";

import { Ln, va, TI, Cs } from "./chunk-ddr690nj.js";

import { Bk, nR, FAt, Opr } from "./chunk-84yp45y8.js";

import { wo, se, t } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { ge } from "./chunk-07cck4g7.js";

import { dn } from "./chunk-nnrb0acr.js";

import { Wn, tu, D8, ih, nu } from "./chunk-4v78v8fd.js";

import { bd } from "./chunk-h36n2zxz.js";

import { de } from "./chunk-5ydr99q3.js";

import { qe } from "./chunk-r8a304y3.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { Ice } from "./chunk-vfdna4pm.js";

import { Iso } from "./chunk-z09tf6qf.js";

import { mVe } from "./chunk-ve7zpr5m.js";

import { N } from "./chunk-hmqkrrtz.js";

import { randomUUID as k } from "crypto";

import { resolve as P } from "path";

function h(e, o) {
  let s = fc();
  if (s.some(m => Ln(P(m)) === o)) return !1;
  return QU([ ...s, o ]), Bk(e), nR(e, "directory_added"), mVe(), !0;
}

async function gTn(e, o, s) {
  let n = {
    type: "addDirectories",
    directories: [ o ],
    destination: s ? "localSettings" : "session"
  };
  e.setToolPermissionContext(i => tu(i, n)), h(e.session, o), qe.refreshConfig(), 
  e.storageV5 ? Opr(o, e.storageV5) : Opr(o), Iso("--add-dir", o, e.storageV5);
  let d;
  if (s) try {
    await D8(n, e.storageV5), d = `Added ${ge.bold(o)} as a working directory and saved to local settings`;
  } catch (i) {
    d = `Added ${ge.bold(o)} as a working directory. Failed to save to local settings: ${i instanceof Error ? i.message : "Unknown error"}`;
  } else d = `Added ${ge.bold(o)} as a working directory for this session`;
  let u = k();
  return FAt(e.session, o, "slash_command", {
    storageV5: e.storageV5,
    credentials: e.credentials
  }).then(async ({results: i, systemMessages: l}) => {
    for (let r of i) if (!r.succeeded && r.output) t(`DirectoryAdded hook failed: ${r.output}`, {
      level: "error"
    });
    let a = N(i, r => !r.succeeded), g = [ ...await Promise.all(l.map((r, f) => Ice(r, `add-dir-${u}-${f}`, "systemMessage", {
      storageV5: e.storageV5
    }).then(p => `DirectoryAdded hook: ${p}`))), ...a > 0 ? [ `${a} DirectoryAdded ${I(a, "hook")} failed; output is in the debug log, not shown here` ] : [] ];
    if (g.length > 0) e.messageQueue.enqueuePendingNotification({
      value: g.join(`\n`),
      mode: "task-notification",
      skipAttachments: !0,
      agentId: Ze(),
      isMeta: !0
    });
  }).catch(i => {
    e.messageQueue.enqueuePendingNotification({
      value: `DirectoryAdded hook execution failed: ${i instanceof Error ? i.message : String(i)}`,
      mode: "task-notification",
      skipAttachments: !0,
      agentId: Ze(),
      isMeta: !0
    });
  }), d;
}

function WKt(e, o) {
  let s = de(e);
  if (o.isExactMatch || !o.isOriginalCwd) return null;
  let m = se(), {resolvedPath: n, isCanonical: d} = wo(m, o.absolutePath), {resolvedPath: u, isCanonical: i} = wo(m, o.workingDir), l = ge.bold(Wn(o.directoryPath));
  if (!d || !i) {
    if ([ o.absolutePath, o.workingDir ].some(c => Cs(c) || va(c) || TI(c))) return null;
    return `${l} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`;
  }
  if (!ih(o.absolutePath, {
    ...s,
    additionalWorkingDirectories: new Map
  }) || !nu(n, u, {
    caseFold: !1,
    skipPrivateAlias: !0,
    uncShapeParity: !0
  })) {
    let c = Wn(n);
    return n === o.absolutePath ? `${l} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.` : `${l} leads outside the working directory through a link (it resolves to ${ge.bold(c)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${c} to grant access to it.`;
  }
  if (n === u) return null;
  let a = `${l} is inside the current working directory ${ge.bold(Wn(o.workingDir))}`, g = dn("projectSettings"), r = g && !Sr("skills", {
    explicitlyRequested: !0
  }) && !bd("skills"), f = g && !Sr("agents") && !bd("agents");
  if (!r && !f) return `${a}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
  let p = r && f ? "skills, commands, and agents" : r ? "skills and commands" : "agents", y = h(e.session, o.absolutePath);
  if (y) qe.refreshConfig();
  return y ? `${a}; loading its ${p} for this session.` : `${a}; its ${p} are already included for this session.`;
}

export { gTn, WKt };
