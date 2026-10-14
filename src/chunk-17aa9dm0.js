// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import { ve, Fn } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

var e = {
  type: "local-jsx",
  name: "goal",
  description: "Set a goal Claude checks before stopping",
  argumentHint: "[<condition> | clear]",
  immediate: !0
}, o = {
  type: "local",
  name: "goal",
  supportsNonInteractive: !0,
  thinClientDispatch: "post-text",
  description: "Set a goal \u2014 keep working until the condition is met",
  get isHidden() {
    return !ve();
  },
  isEnabled: () => ve() || Fn(),
  load: () => import("./chunk-5pv9zf13.js")
}, n = e;

export { n as default, o as goalNonInteractive };
