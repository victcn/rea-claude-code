// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { j } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { _ } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { dvr, cvr, uvr } from "./chunk-9tdwgnpn.js";

import { fhn, U1r } from "./chunk-ddk6c8cf.js";

import { iZe } from "./chunk-agck61c0.js";

import { statfs as a } from "fs/promises";

import { availableParallelism as u, totalmem as p } from "os";

var c = [ "gcloud", "aws", "az", "gh", "brew", "apt", "sqlite3", "ffmpeg", "rg", "jq" ], s = 2e3, l = 2n ** 30n;

function eXn() {
  try {
    return iZe() && fhn("basic") !== "off";
  } catch (t) {
    return d(j(t)), !1;
  }
}

async function Sqs(t) {
  try {
    if (!eXn()) return;
    let [e, r] = await Promise.all([ U1r({
      includeMcpServers: !1,
      signal: AbortSignal.timeout(s),
      alsoLookFor: c,
      maxTools: dvr
    }), We(a(t, {
      bigint: !0
    }), s).catch(() => {}) ]);
    if (e === void 0) {
      m("remote_tools_host_inventory", "unsupported_platform");
      return;
    }
    let n = r === void 0 ? -1n : r.bavail * r.bsize;
    if (!e.complete) f("remote_tools_host_inventory", "deadline"); else if (n < 0n) f("remote_tools_host_inventory", "disk_unread"); else g("remote_tools_host_inventory");
    let i = {
      ...!e.complete && {
        incomplete: !0
      },
      cpus: u(),
      memory_gb: Math.round(p() / Number(l)),
      ...n >= 0n && {
        disk_free_gb: Math.min(Number(n / l), cvr)
      }
    }, o = e.profile.tools;
    while (o.length > 0 && _({
      tools: o,
      ...i
    }).length > uvr) o = o.slice(0, -1);
    return {
      tools: o,
      ...i
    };
  } catch (e) {
    d(j(e)), m("remote_tools_host_inventory", "error");
    return;
  }
}

export { eXn, Sqs };
