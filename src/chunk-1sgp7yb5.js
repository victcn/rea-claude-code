// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Dy } from "./chunk-3pqddg8f.js";

import { cL } from "./chunk-6ah1819r.js";

import { t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { kt } from "./chunk-r2h53bm2.js";

import { fe } from "./chunk-dd98x6x7.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { vt, Cr } from "./chunk-xywp7esx.js";

import { Ns, d9e } from "./chunk-g6nh65r0.js";

import { Sft } from "./chunk-n3526wzr.js";

import { OWn, Fi, Cw, IH, ec, vm } from "./chunk-8drhysk2.js";

import { WZn, lwt } from "./chunk-j48zvtwm.js";

import { Fet } from "./chunk-gvwyn7a1.js";

import { o, u, ue, U, A } from "./chunk-cvcg6n1z.js";

var swt = p(() => u({
  method: A("notifications/claude/channel"),
  params: u({
    content: o(),
    meta: ue(o(), o()).optional()
  })
})), BZn = "notifications/claude/channel/permission", yKr = p(() => u({
  method: A(BZn),
  params: u({
    request_id: o(),
    behavior: U([ "allow", "deny" ])
  })
})), _Kr = "notifications/claude/channel/permission_request", f = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

function iwt(e, i, n) {
  let r = Object.entries(n ?? {}), [c, a] = g(r, ([d]) => f.test(d));
  if (a.length > 0) t(`[channel] ${e}: dropped ${a.length} meta key(s) that don't match ${f.source}: ${a.map(([d]) => d).join(", ")}`, {
    level: "warn"
  });
  let s = c.map(([d, l]) => ` ${d}="${Ns(l)}"`).join(""), m = d9e(cL, Sft(i));
  return `<${cL} source="${Ns(e)}"${s}>\n${m}\n</${cL}>`;
}

function g(e, i) {
  let n = [], r = [];
  for (let c of e) (i(c) ? n : r).push(c);
  return [ n, r ];
}

function ZSn(e) {
  if (e) return {
    entries: e,
    source: "org"
  };
  return {
    entries: WZn(),
    source: "ledger"
  };
}

function bKr(e) {
  return e === "provider" || e === "disabled" || e === "capability" || e === "era";
}

function $et(e) {
  if (vt()) {
    let i = Cr();
    return (i === "team" || i === "enterprise") && e?.channelsEnabled !== !0;
  }
  return e !== null && e.channelsEnabled !== !0;
}

function Ele(e, i) {
  let n = e.split(":");
  return i.find(r => r.kind === "server" ? e === r.name : n[0] === "plugin" && (n[1] === r.name || n[1] === IH(r.name, `${r.name}@${r.marketplace}`)));
}

function jZn(e, i) {
  let n = e ? ec(e) : void 0, r = ec(Cw(`${i.name}@${i.marketplace}`)).name;
  return n?.marketplace !== void 0 && n.marketplace === i.marketplace && (i.dev ? n.name === r : vm(n.name, r));
}

function awt(e, i, n, r) {
  if (!Fet(i)) return {
    action: "skip",
    kind: "capability",
    reason: "server did not declare claude/channel capability"
  };
  if (r === "modern") return {
    action: "skip",
    kind: "era",
    reason: "connection negotiated a modern protocol revision with no unsolicited notification path"
  };
  if (Oe() !== "firstParty") return {
    action: "skip",
    kind: "provider",
    reason: "channels are not available on third-party providers"
  };
  if (lwt()) return {
    action: "skip",
    kind: "disabled",
    reason: "channels feature is not currently available"
  };
  let c = fe("policySettings");
  if ($et(c)) return {
    action: "skip",
    kind: "policy",
    reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)"
  };
  let a = Ele(e, Dy());
  if (!a) return {
    action: "skip",
    kind: "session",
    reason: `server ${e} not in --channels list for this session`
  };
  if (a.kind === "plugin") {
    let s = n ? ec(n) : void 0;
    if (s?.marketplace === void 0 || !jZn(n, a)) return {
      action: "skip",
      kind: "marketplace",
      reason: `you asked for plugin:${a.name}@${a.marketplace} but the installed plugin is ${s?.marketplace !== void 0 ? kt(`${s.name}@${s.marketplace}`) : "from an unknown source"}`
    };
    if (!a.dev) {
      let {entries: m, source: d} = ZSn(c?.allowedChannelPlugins);
      if (!m.some(l => l.marketplace === s.marketplace && (l.plugin === s.name || l.marketplace === Fi && OWn(l.plugin) === s.name))) {
        let l = kt(`${s.name}@${s.marketplace}`);
        return {
          action: "skip",
          kind: "allowlist",
          reason: d === "org" ? `plugin ${l} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)` : `plugin ${l} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
        };
      }
    }
  } else if (!a.dev) return {
    action: "skip",
    kind: "allowlist",
    reason: `server ${a.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
  };
  return {
    action: "register"
  };
}

export { swt, BZn, yKr, _Kr, iwt, ZSn, bKr, $et, Ele, jZn, awt };
