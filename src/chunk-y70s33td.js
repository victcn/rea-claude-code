// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { m } from "./chunk-3ykz5st8.js";

import { Ls, Ibe } from "./chunk-sqb9meyh.js";

import { Bot, CLe, dqe, iN, xe, uy } from "./chunk-84yp45y8.js";

import { Ro, lc } from "./chunk-wgsx43va.js";

import { aY, o8 } from "./chunk-81rtbneg.js";

import { wS, ETe } from "./chunk-9vcfwzhf.js";

function hqs(o) {
  let {inputString: e, context: n, uuid: t, origin: r, verifiedSlackHumanTurn: s} = o, a = f(e, n.options.commands);
  if (a === void 0) return {
    kind: "none"
  };
  let {folded: l, effectiveCmd: d} = a, c = CLe(d, {
    origin: r,
    relayAuthored: s === !0
  });
  if (Bot(d) && c) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: e,
    effectiveContext: n
  };
  let u = dqe(d);
  if (u && lc(d)) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: l ? `/${u.name}${l.args ? ` ${l.args}` : ""}` : e.replace(/^\/\S+/, `/${u.name}`),
    effectiveContext: {
      ...n,
      options: {
        ...n.options,
        commands: [ {
          ...u,
          isEnabled: () => lc(d)
        }, ...n.options.commands ]
      }
    }
  };
  return {
    kind: "blocked",
    result: g({
      target: a,
      inputString: e,
      uuid: t,
      origin: r,
      surface: "bridge"
    })
  };
}

function yqs(o) {
  let {inputString: e, context: n, uuid: t, origin: r} = o, s = f(e, n.options.commands);
  if (s === void 0 || CLe(s.effectiveCmd, {
    origin: r,
    relayAuthored: !0
  })) return {
    kind: "none"
  };
  return {
    kind: "blocked",
    result: g({
      target: s,
      inputString: e,
      uuid: t,
      origin: r,
      surface: "relay"
    })
  };
}

function g({target: {parsed: o, cmd: e, folded: n, effectiveCmd: t}, inputString: r, uuid: s, origin: a, surface: l}) {
  let {sanitizedName: d, skillNameHash: c} = aY({
    rawName: e.name,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: iN().has(e.name),
    isBundled: e.type === "prompt" && e.source === "bundled",
    isOfficial: e.type === "prompt" && o8(e)
  });
  i("tengu_slash_command_unavailable", {
    command_name: d,
    ...c,
    surface: l === "bridge" ? b("bridge") : b("relay"),
    reason: b("unavailable_over_remote_control")
  }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let u = n ? `/${Ro(e)} ${n.consumedToken} isn't available over Remote Control.` : `/${Ro(t)} isn't available over Remote Control.`, p = Ibe(e, o.args) || Ibe(t, n ? n.args : o.args) ? `/${o.commandName} ***` : r;
  return {
    messages: [ xe({
      content: p,
      uuid: s,
      origin: a
    }), uy(`<local-command-stdout>${u}</local-command-stdout>`) ],
    shouldQuery: !1,
    resultText: u
  };
}

function f(o, e) {
  let n = wS(o);
  if (n === null) return;
  let t = Ls(n.commandName, e);
  if (!t) return;
  let r = ETe(t, n.args), s = r ? Ls(r.targetName, e) : void 0, a = r && s && lc(s) ? {
    command: s,
    consumedToken: r.consumedToken,
    args: r.remainingArgs
  } : void 0;
  return {
    parsed: n,
    cmd: t,
    folded: a,
    effectiveCmd: a ? a.command : t
  };
}

function IBr(o, e) {
  let n = f(o, e);
  if (n === void 0) return !0;
  let {effectiveCmd: t} = n;
  return t.type === "prompt" && Bot(t);
}

export { hqs, yqs, IBr };
