// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Yu, WU, zU, w$, wme, Uw, Bw } from "./chunk-6ah1819r.js";

var hlt = "next";

function k8(n, s, r) {
  let e = !1, i;
  return s.update(n, t => {
    if (i = t, t.notified) return t;
    if (e = !0, r?.skipStampIfRunning && t.status === "running") return t;
    return {
      ...t,
      notified: !0
    };
  }), {
    claimed: e,
    task: i
  };
}

function Ri({taskId: n, toolUseId: s, taskType: r, outputFile: e, status: i, summary: t, body: u, trailing: d}) {
  let f = [ [ WU, n ], [ zU, s ], [ w$, r ], [ wme, e ], [ Uw, i ], [ Bw, t ] ], o = `<${Yu}>`;
  for (let [a, T] of f) if (T) o += `\n<${a}>${T}</${a}>`;
  return `${o}${u ?? ""}\n</${Yu}>${d ?? ""}`;
}

export { hlt, k8, Ri };
