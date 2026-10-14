// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rne } from "./chunk-7f3bx3dq.js";

import { l0 } from "./chunk-h6xggfqh.js";

import { EQ } from "./chunk-84yp45y8.js";

import { L } from "./chunk-vh1p9t2h.js";

var a = {
  navigate: "navigate",
  read_page: "read the page",
  get_page_text: "extract page text",
  find: "find an element",
  form_input: "fill in a form field",
  javascript_tool: "run JavaScript",
  read_console_messages: "read console messages",
  read_network_requests: "read network requests",
  upload_image: "upload an image",
  file_upload: "upload a file",
  select_browser: "select a browser",
  gif_creator: "record a GIF of the page",
  shortcuts_execute: "run a saved browser shortcut",
  tabs_create_mcp: "open a new browser tab"
}, i = {
  screenshot: "take a screenshot",
  left_click: "click",
  right_click: "right-click",
  middle_click: "middle-click",
  double_click: "double-click",
  triple_click: "triple-click",
  type: "type text",
  key: "press keys",
  hold_key: "hold a key",
  scroll: "scroll",
  scroll_to: "scroll to an element",
  left_click_drag: "drag",
  zoom: "zoom in",
  hover: "hover",
  mouse_move: "move the mouse",
  left_mouse_down: "press the mouse button",
  left_mouse_up: "release the mouse button",
  cursor_position: "read the cursor position",
  wait: "wait"
}, c = 4;

function l(o) {
  let e = o.slice(0, c), r = o.length - e.length;
  if (r > 0) e.push(`${r} more`);
  if (e.length === 1) return e[0] ?? "";
  if (e.length === 2) return `${e[0]} and ${e[1]}`;
  return `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}

function u(o) {
  if (!Array.isArray(o.actions)) return [];
  let e = new Set, r = [];
  for (let t of o.actions) {
    if (!L(t) || typeof t.name !== "string") continue;
    let n = L(t.input) ? t.input : {};
    if (t.name === "browser_batch" || Rne.has(t.name) && EQ(t.name, n)) continue;
    let s = $zt(t.name, n);
    if (!e.has(s)) e.add(s), r.push(s);
  }
  return r;
}

function $zt(o, e) {
  let r = o.startsWith(l0) ? o.slice(l0.length) : o;
  if (r === "computer") {
    let t = typeof e.action === "string" ? e.action : void 0;
    if (t && i[t]) return i[t];
    return "use the browser";
  }
  if (r === "browser_batch") {
    let t = u(e);
    return t.length > 0 ? l(t) : "use the browser";
  }
  if (r === "tabs_context_mcp") return e.createIfEmpty ? "create a browser window and read your tabs" : "read your browser tabs";
  return a[r] ?? "use the browser";
}

export { $zt };
