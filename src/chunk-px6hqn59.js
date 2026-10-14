// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { Lp, Yr, iP } from "./chunk-z09tf6qf.js";

var r = "--inherit-permission-mode";

function s(e) {
  return e === r || e.startsWith(`${r}=`);
}

class f {
  mode;
}

var c = new K(() => new f);

function p() {
  return c.of(B().host);
}

function IVo({inheritPermissionModeCli: e, resolvedMode: n, storageV5: i}) {
  if (!e) return;
  p().mode = n, iP("--permission-mode", [ r ], n, void 0, i).catch(o => d(o));
}

async function OVo(e) {
  let n = p(), i = n.mode;
  if (i === void 0) return;
  let o = a.CLAUDE_JOB_DIR;
  if (!o || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
    n.mode = void 0;
    return;
  }
  let t = await Yr(o, e);
  if (!t?.respawnFlags) return;
  if (!t.respawnFlags.some(s)) {
    n.mode = void 0;
    return;
  }
  await iP("--permission-mode", [ r ], i, void 0, e, void 0, u => u.some(s)), Lp(o);
  let m = await Yr(o, e);
  if (m?.respawnFlags && !m.respawnFlags.some(s)) n.mode = void 0;
}

export { IVo, OVo };
