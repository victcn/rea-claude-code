// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { We } from "./chunk-nvtwm272.js";

import { gr } from "./chunk-z52kmxx4.js";

import { OVn, Efe, dG, tmt, C0s, R0s } from "./chunk-hazy64h6.js";

import { execFile as c } from "child_process";

var l = 1e4, hRo = 250, o = null, u;

function O8s() {
  return u === !0;
}

function M8s() {
  return tmt().lastKnown;
}

function H8s(n) {
  tmt().lastKnown = n;
}

function s(n) {
  return new Promise(e => {
    try {
      c("security", [ "find-generic-password", "-a", dG(), "-w", "-s", n ], {
        encoding: "utf-8",
        timeout: l,
        windowsHide: !0
      }, (t, i) => {
        let a = Boolean(t && "killed" in t && t.killed);
        e(a ? null : {
          stdout: t ? null : i?.trim() || null
        });
      });
    } catch {
      e(null);
    }
  });
}

function yRo() {
  let n = gr();
  if (o || n) return;
  let e = tmt(), t = e.generation;
  return;
}

async function Nsn(n) {
  if (!o) return;
  await (n === void 0 ? o : We(o, n));
}

function VPr() {
  tmt().legacyApiKeyPrefetch = null;
}

export { hRo, O8s, M8s, H8s, yRo, Nsn, VPr };
