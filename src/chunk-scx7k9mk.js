// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { x } from "./chunk-b0z4bv3v.js";

import { Y, t } from "./chunk-kawq2919.js";

import { e1 } from "./chunk-584kx1w1.js";

import { m, f } from "./chunk-3ykz5st8.js";

import { K2r, MYo } from "./chunk-k4j6pmgm.js";

import { o, T, u } from "./chunk-cvcg6n1z.js";

var l = p(() => u({
  deviceId: o(),
  name: o().default("Browser"),
  osPlatform: o().optional()
})), u8n = "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.", XBs = "Chrome can't be reached right now. Make sure Chrome is open with the Claude extension and signed in to the same claude.ai account, then try again.", Bjo = "That browser isn't connected right now. Make sure Chrome is open with the Claude extension on that computer, then try again.";

class p8n extends x {
  listEmpty;
  namedABrowser;
  constructor(e, r) {
    if (r) super(Bjo, "claude-in-chrome browser not listed"); else super(Bjo, "claude-in-chrome switch request named no browser");
    this.listEmpty = e, this.namedABrowser = r;
  }
}

class GFr extends x {
  constructor(e) {
    super(e, "claude-in-chrome tool call failed");
  }
}

function jjo(e) {
  return e instanceof p8n;
}

function f8n(e) {
  if (VBt(e)) f("chrome_browser_picker", "bridge_unreachable"); else if (jjo(e) && e.namedABrowser) f("chrome_browser_picker", "browser_not_listed", {
    list_empty: e.listEmpty
  }); else if (jjo(e)) m("chrome_browser_picker", "invalid_request"); else m("chrome_browser_picker", "select_failed");
}

class VFr extends x {
  constructor() {
    super(XBs, "claude-in-chrome bridge not reachable");
  }
}

function VBt(e) {
  return e instanceof VFr;
}

function aqs(e) {
  if (VBt(e)) return [];
  throw e;
}

async function imn(e) {
  let r = await zjo(e, "list_connected_browsers", {});
  if (!r) return [];
  let s = T(l()).safeParse(Y(r));
  if (!s.success) throw new Wjo;
  return s.data;
}

class Wjo extends x {
  constructor() {
    super("Claude Code couldn't read the browser list it got back. This is a bug on our side, not a problem with your setup.", "claude-in-chrome browser list in an unknown shape");
  }
}

async function m8n(e, r, s = n => n) {
  if (typeof r !== "string" || r === "") throw new p8n(!1, !1);
  try {
    await s(zjo(e, "select_browser", {
      deviceId: r
    }));
  } catch (n) {
    if (!(n instanceof GFr)) throw n;
    t(`claude-in-chrome select_browser refused: ${n.message}`);
    let c = await s(imn(e));
    if (c.some(i => i.deviceId === r)) throw n;
    throw new p8n(c.length === 0, !0);
  }
}

async function zjo(e, r, s) {
  let n = K2r(), c = await e1(e, {
    name: r,
    arguments: s
  }, void 0, !0), i = Array.isArray(c.content) ? c.content[0] : void 0, a = i && typeof i === "object" && "text" in i && typeof i.text === "string" ? i.text : void 0;
  if (K2r() !== n && a !== void 0 && MYo(a)) throw t(`claude-in-chrome bridge not reachable: ${a}`, {
    level: "error"
  }), new VFr;
  if (c.isError) throw new GFr(a || `${r} failed`);
  return a;
}

export { u8n, XBs, Bjo, p8n, GFr, jjo, f8n, VFr, VBt, aqs, imn, Wjo, m8n, zjo };
