// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xu } from "./chunk-8yperama.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { Ki } from "./chunk-sqb9meyh.js";

var l = "confirm_repository_trust", z_t = "request_computer_folder", Sjt = "list_computer_folders";

function a(e, t) {
  return e === `mcp__${xu}__${t}`;
}

function oHe(e) {
  return a(e, l);
}

function qgn(e) {
  return a(e, z_t);
}

function xGo(e) {
  return a(e, Sjt);
}

function Ygn(e) {
  return {
    subtype: e.subtype,
    tool_name: e.tool_name,
    input: e.input,
    tool_use_id: e.tool_use_id,
    ...e.mcp_server !== void 0 && {
      mcp_server: e.mcp_server
    },
    ...e.title !== void 0 && {
      title: e.title
    },
    ...e.display_name !== void 0 && {
      display_name: e.display_name
    },
    ...e.description !== void 0 && {
      description: e.description
    },
    ...e.agent_id !== void 0 && {
      agent_id: e.agent_id
    },
    suppress_always_allow_rule: !0,
    default_to_no: !0,
    requires_user_interaction: !0
  };
}

var T = "config:repo-trusted", R = "config:no-git-repo", y = "config:repo-trust-declined";

function S(e) {
  let t = new Set(Array.isArray(e) ? e.filter(r => typeof r === "string") : []);
  if (t.has(T)) return "trusted";
  if (t.has(R)) return "no_repository";
  return t.has(y) ? "declined" : "not_marked";
}

function PGo(e, t) {
  return S(e.tags);
}

function IGo(e) {
  return e === "not_marked" || e === "declined" || e === "nothing_to_mark";
}

function Xgn(e, t) {
  return (e === "not_marked" || e === "nothing_to_mark") && !t ? void 0 : e;
}

function OGo(e) {
  return e === "nothing_to_mark" ? void 0 : e;
}

function MGo(e) {
  return Ki[`repository_trust.state.${e}`];
}

var m = new RegExp(`^(?:<tool_use_error>)?\\s*${z_t}: \\[repository_trust_(required|declined|unavailable)\\]`);

function E(e) {
  return e === "required" || e === "declined" || e === "unavailable";
}

function HGo(e, t) {
  if (!qgn(e)) return;
  let r = Array.isArray(t) ? t[0] : t, o = typeof r === "string" ? r : typeof r === "object" && r !== null && "text" in r && typeof r.text === "string" ? r.text : "", n = m.exec(o)?.[1];
  return E(n) ? n : void 0;
}

var wjt = "served-calls-unattested", DGo = "served-calls-unattested-untrusted-repo", g = 3e4;

function LGo({read: e, initial: t, now: r = Date.now}) {
  let o, n, s, u, p = Me(), _ = i => {
    let d = i.then(f => {
      if (n = r(), f !== o) o = f, p.emit();
    }, () => {
      n = r();
    }).catch(() => {}).then(() => {
      if (s === d) s = void 0;
      return o;
    });
    return s = d, d;
  }, c = () => _(Promise.resolve().then(e));
  if (t !== void 0) _(t);
  return {
    current: () => o,
    refresh: i => {
      if (s !== void 0) {
        if (i?.force !== !0) return s;
        return u ??= s.then(() => (u = void 0, c())), u;
      }
      if (i?.force !== !0 && n !== void 0 && r() - n < g) return Promise.resolve(o);
      return c();
    },
    onChanged: i => p.subscribe(i)
  };
}

export { z_t, Sjt, oHe, qgn, xGo, Ygn, PGo, IGo, Xgn, OGo, MGo, HGo, wjt, DGo, LGo };
