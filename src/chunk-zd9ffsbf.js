// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Y4n, tht, nht, X4n, Q4n, oht, TNo, kI, di } from "./chunk-3pqddg8f.js";

import { _9 } from "./chunk-xywp7esx.js";

import { Xan, GNt } from "./chunk-9yajep3y.js";

import { Qes, jye, AYt, ORn, Wns, OPn, XD, V6t, T_e, L3, oMn, sds } from "./chunk-84yp45y8.js";

import { Eo } from "./chunk-ncyzf9zz.js";

import { Man } from "./chunk-0481pkch.js";

import { ryo } from "./chunk-4jjt8sdp.js";

import { Xvs } from "./chunk-9tdwgnpn.js";

import { IZt } from "./chunk-bsv3mc5z.js";

import { Q9t } from "./chunk-yd16nhae.js";

import { Khe, e6r } from "./chunk-6axey68e.js";

import { RJo } from "./chunk-2vj92bww.js";

import { nVe } from "./chunk-ed46a86f.js";

import { BTe } from "./chunk-mg1b1eby.js";

import { $vt } from "./chunk-t8kn2gv4.js";

import { gJo } from "./chunk-p9jyhqhb.js";

import { UDe } from "./chunk-nhs4agxe.js";

function Z5r(t, r = new Set, i, o, n, m = !1) {
  let a = r.size > 0;
  if (ORn(t), GNt(t), IZt.of(t).clear(), e6r(Khe), XD(), Xvs(r), !a) Q9t.peek(t)?.clear();
  let s = V6t();
  if (s?.getTeleportCacheState().status === "active") s.revertTeleportCache("transcript_cleared", "main");
  if (T_e(t, void 0, i, void 0, void 0, n), kI("clear"), L3(), Y4n(di()), nht(di()), 
  X4n(di()), tht(di()), Q4n(di()), oht(di()), !m) prr(), OPn(t.host);
  if (AYt(t, "session_start"), jye.of(t).reset(), ryo.of(t).clear(), nVe.of(t).reset(), 
  i?.(e => {
    if (e.storedImagePaths.size === 0 && e.imageDescriptions.size === 0 && Object.keys(e.displayedMessageContent).length === 0) return e;
    return {
      ...e,
      storedImagePaths: new Map,
      imageDescriptions: new Map,
      displayedMessageContent: {}
    };
  }), Qes(), !a) gJo();
  if (Man(), !a) RJo();
  if (TNo(r), Xan(), sds(), oMn().catch(() => {}), Wns(t), o) o.get($vt).clear(), 
  o.get(UDe).clear(), o.get(BTe).clear(), import("./chunk-1skxbph6.js").then(({WebFetchCache: e}) => o.get(e).clear()), 
  import("./chunk-d0v16zh1.js").then(({WebFetchHistory: e}) => o.get(e).clear()), 
  import("./chunk-gk2e0kk1.js").then(({ToolSearchDescriptionCache: e}) => o.get(e).clear());
  import("./chunk-2ny072qp.js").then(({clearAgentDefinitionsCache: e}) => e());
}

function prr() {
  let t = Eo();
  t.bashPromptSkillCommands = void 0, t.workflowAuthoringSkillAvailable = void 0, 
  _9();
}

export { Z5r, prr };
