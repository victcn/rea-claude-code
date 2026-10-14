// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { In, k, p8e, A5 } from "./chunk-xywp7esx.js";

import { IR, ptn, ftn } from "./chunk-xmqqa853.js";

var Tke = "tengu_violin_willow";

function Ggn() {
  try {
    let {value: e, source: o} = In(Tke, !1);
    return A5(o) ? e === !0 : void 0;
  } catch {
    return;
  }
}

function qze() {
  try {
    return k(Tke, !1);
  } catch {
    return !1;
  }
}

function Yze() {
  return ftn() && Ggn() === !0;
}

function rHe({cloudClient: e}) {
  if (ptn()) return "tengu_violin_wood";
  return e && Ggn() === !1 ? Tke : void 0;
}

async function d1r({cloudClient: e}) {
  try {
    return await IR() && (!e || await p8e(Tke));
  } catch {
    return !1;
  }
}

export { Tke, Ggn, qze, Yze, rHe, d1r };
