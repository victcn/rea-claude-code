// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, Xg } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { f } from "./chunk-3ykz5st8.js";

import { JZt, q7, QZt } from "./chunk-34fdkj05.js";

function QWr(s, n, a) {
  let e = JZt(s), r = e !== null ? QZt() : null;
  if (r !== null) f("goal_set", r.code, {
    origin: c("restored")
  });
  let t;
  if (e === null || r !== null) {
    if (n(o => (t = o.activeGoal, o.activeGoal === void 0 ? o : {
      ...o,
      activeGoal: void 0
    })), t !== void 0) q7(t, "resume_swap");
    return;
  }
  if (a.add(q(), "Stop", "", {
    type: "prompt",
    prompt: e
  }), n(o => (t = o.activeGoal, {
    ...o,
    activeGoal: {
      condition: e,
      iterations: 0,
      setAt: Date.now(),
      origin: "restored",
      tokensAtStart: Xg()
    }
  })), t !== void 0) q7(t, "resume_swap");
  i("tengu_goal_restored_on_resume", {
    promptLength: e.length
  }), i("tengu_stop_hook_added", {
    promptLength: e.length,
    via: b("goal"),
    origin: c("restored")
  });
}

export { QWr };
