// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-hedpgw9m.js";

import { g } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import "./chunk-30n0xq4e.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-0cdqg49t.js";

import "./chunk-jkzenvsk.js";

import "./chunk-0pmh7awy.js";

import "./chunk-60c97a4m.js";

import "./chunk-7en5gt36.js";

import { ble } from "./chunk-sknv0v0m.js";

import "./chunk-4q01dwtz.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-1xnsr4dy.js";

var y = {
  name: "MCP Task",
  type: "mcp_task",
  async kill(o, s, k, m, i) {
    let e = s.get(o), p = e?.type === "mcp_task" ? e.sidecarSessionId : void 0, c = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0, n = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
    if (e?.type === "mcp_task") e.abortController?.abort(), e.driveAbortController?.abort(), 
    e.sep2663Cancel?.();
    let a = !1;
    if (s.update(o, r => {
      if (r.notified || r.status !== "running") return r;
      return a = !0, {
        ...r,
        status: "killed",
        endTime: Date.now(),
        parked: void 0,
        notified: !0
      };
    }), a && e?.type === "mcp_task") try {
      e.onWorkerWakeOutcome?.({
        kind: "stopped"
      });
    } catch (r) {
      t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"), d(r);
    }
    if ((async () => {
      await n, await ble(o, i, p, c);
    })().catch(r => t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`)), a && e?.type === "mcp_task" && e.protocol === "sep2663") g("mcp_task_stop");
  }
};

export { y as MCP_TASK };
