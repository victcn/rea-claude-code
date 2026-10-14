// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Sl } from "./chunk-yxennhe9.js";

var xh = {
  CURSOR_VISIBLE: 25,
  ALT_SCREEN: 47,
  ALT_SCREEN_CLEAR: 1049,
  MOUSE_NORMAL: 1e3,
  MOUSE_BUTTON: 1002,
  MOUSE_ANY: 1003,
  MOUSE_SGR: 1006,
  MOUSE_SGR_PIXELS: 1016,
  FOCUS_EVENTS: 1004,
  BRACKETED_PASTE: 2004,
  THEME_NOTIFY: 2031,
  SYNCHRONIZED_UPDATE: 2026,
  WIN32_INPUT_MODE: 9001
};

function pB(E) {
  return Sl(`?${E}h`);
}

function Wq(E) {
  return Sl(`?${E}l`);
}

var q1t = pB(xh.SYNCHRONIZED_UPDATE), K7e = Wq(xh.SYNCHRONIZED_UPDATE), LWo = pB(xh.BRACKETED_PASTE), ygn = Wq(xh.BRACKETED_PASTE), _gn = pB(xh.FOCUS_EVENTS), I_t = Wq(xh.FOCUS_EVENTS), NWo = pB(xh.THEME_NOTIFY), bgn = Wq(xh.THEME_NOTIFY), kD = pB(xh.CURSOR_VISIBLE), TD = Wq(xh.CURSOR_VISIBLE), O_t = pB(xh.ALT_SCREEN_CLEAR), M_t = Wq(xh.ALT_SCREEN_CLEAR), Sgn = Wq(xh.WIN32_INPUT_MODE), S = pB(xh.MOUSE_NORMAL) + pB(xh.MOUSE_BUTTON) + pB(xh.MOUSE_ANY) + pB(xh.MOUSE_SGR), _ = pB(xh.MOUSE_NORMAL) + pB(xh.MOUSE_SGR), xge = Wq(xh.MOUSE_SGR) + Wq(xh.MOUSE_ANY) + Wq(xh.MOUSE_BUTTON) + Wq(xh.MOUSE_NORMAL), $Wo = pB(xh.MOUSE_SGR_PIXELS), FWo = Wq(xh.MOUSE_SGR_PIXELS) + pB(xh.MOUSE_SGR);

function wgn(E) {
  switch (E) {
   case "full":
    return S;

   case "scroll":
    return _;

   case "off":
    return "";
  }
}

export { xh, pB, Wq, q1t, K7e, LWo, ygn, _gn, I_t, NWo, bgn, kD, TD, O_t, M_t, Sgn, xge, $Wo, FWo, wgn };
