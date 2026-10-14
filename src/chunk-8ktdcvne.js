// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Fe } from "./chunk-0cdqg49t.js";

import { mt } from "./chunk-j90se18b.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import { I } from "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-30n0xq4e.js";

import "./chunk-4dwgr3et.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-t6pdm7af.js";

import "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-znhtg8e4.js";

import { Kw } from "./chunk-ajrjjwfz.js";

import "./chunk-s82cb921.js";

import "./chunk-g6nh65r0.js";

import "./chunk-xywp7esx.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-jkzenvsk.js";

import "./chunk-5brm0azz.js";

import "./chunk-8yperama.js";

import "./chunk-x5881pc6.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-hmce8a0s.js";

import "./chunk-nnrb0acr.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-07cck4g7.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-qqd24q2y.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-1tdw23h1.js";

import "./chunk-2my8wpr5.js";

import "./chunk-46phtgr7.js";

import "./chunk-y3nc3daq.js";

import "./chunk-mw643xee.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-zzhmvqjt.js";

import "./chunk-gwz0gszt.js";

import { qRe, tk, BV, jV } from "./chunk-7j9be257.js";

import "./chunk-dvddkg0s.js";

import { Xd, _Ne, _Rt, i0 } from "./chunk-z09tf6qf.js";

import { fg } from "./chunk-wrjghg6d.js";

import { JX } from "./chunk-hqg6ydk9.js";

import { Fze, D_t } from "./chunk-g0kp7vjb.js";

import { FI, cle } from "./chunk-hb06s2n8.js";

import "./chunk-j31ahx42.js";

import "./chunk-av9t4vjk.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N } from "./chunk-hmqkrrtz.js";

import { readFile as w, stat as d } from "fs/promises";

async function W(e) {
  let r = await Kw(1, e).catch(() => null), t = r?.logPath ?? cle(), [n, a, o, i, b, h] = await Promise.all([ fg({
    op: "ping",
    proto: Xd
  }, {
    timeoutMs: 1e3
  }).catch(l => ({
    ok: !1,
    code: "ENOCONN",
    error: String(l)
  })), i0({
    silent: !0
  }, e), S(e), v(t, e), JX().catch(() => !1), y(FI(), e) ]), u;
  try {
    u = jV();
  } catch {
    u = O() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : "<unavailable>";
  }
  let g = null, p = null, k = [];
  if (n.ok) {
    let l = {
      ok: !1
    }, [c, m] = await Promise.all([ fg({
      op: "list",
      proto: Xd
    }, {
      timeoutMs: 1e3
    }).catch(() => l), fg({
      op: "leases",
      proto: Xd
    }, {
      timeoutMs: 1e3
    }).catch(() => l) ]);
    if (c.ok && "jobs" in c) {
      g = N(c.jobs, s => !s.outcome);
      let f = r?.version ?? {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION;
      p = N(c.jobs, s => !s.outcome && s.cliVersion !== void 0 && s.cliVersion !== f);
    }
    if (m.ok && "clients" in m) k = m.clients.flatMap(f => _Ne().safeParse(f).data ?? []);
  }
  return {
    supervisor: r ? {
      pid: r.pid,
      version: r.version,
      uptimeSec: Math.floor((Date.now() - r.startedAt) / 1e3)
    } : null,
    sockDir: O() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : qRe(),
    controlSock: u,
    controlReachable: n.ok,
    controlError: n.ok ? void 0 : tk(n.error),
    workersLive: g,
    workersSkewed: p,
    workersRoster: Object.keys(a.workers).length,
    rosterAgeSec: o ? Math.floor((Date.now() - o.mtimeMs) / 1e3) : null,
    bgDisabled: r?.bgDisabled === !0,
    logPath: t,
    logSizeBytes: i?.size ?? null,
    serviceInstalled: b,
    configuredWorkers: h,
    leaseClients: k
  };
}

async function S(e) {
  if (e) {
    let r = await e.statMeta(_Rt()).catch(() => {});
    return r?.ok ? {
      mtimeMs: r.value.mtimeMs
    } : null;
  }
  return d(BV()).catch(() => null);
}

async function v(e, r) {
  if (r && e === cle()) {
    let t = await r.statMeta(Fe.state("daemon-log")).catch(() => {});
    return t?.ok ? {
      size: t.value.size
    } : null;
  }
  return d(e).catch(() => null);
}

async function y(e, r) {
  let t;
  if (r && e === FI()) {
    let o = await D_t(r);
    if (o.kind !== "text") return 0;
    t = o.text;
  } else try {
    let o = await d(e);
    if (!o.isFile() || o.size > Fze) return 0;
    t = await w(e, "utf8");
  } catch {
    return 0;
  }
  let n = mt(t, !1);
  if (n === null || typeof n !== "object") return 0;
  let a = 0;
  for (let [o, i] of Object.entries(n)) {
    if (o === "$schema") continue;
    a += Array.isArray(i) ? i.length : 1;
  }
  return a;
}

function G(e) {
  let r = [ "", "bg sessions:" ];
  if (r.push(`  sock dir:     ${e.sockDir}`), r.push(`  control.sock: ${e.controlReachable ? "reachable" : `unreachable (${e.controlError ?? "unknown"})`}`), 
  e.bgDisabled) r.push("  bg sessions:  disabled (start failure \u2014 see daemon.log; restart the service after fixing)");
  if (e.workersLive !== null) {
    if (r.push(`  bg workers:   ${e.workersLive} running (control.sock), ${e.workersRoster} in roster.json`), 
    e.workersSkewed && e.workersSkewed > 0) r.push(`                ${e.workersSkewed} from a different CLI version (most stay attachable and upgrade automatically once idle \u2014 exec runs never respawn)`);
  } else r.push(`  bg workers:   ${e.workersRoster} in roster.json (${e.controlReachable ? "live count unavailable" : "control unreachable"})`);
  if (r.push(`  roster.json:  ${e.rosterAgeSec === null ? "absent" : `updated ${e.rosterAgeSec}s ago`}`), 
  r.push(`  daemon.log:   ${e.logSizeBytes === null ? "absent" : `${B(e.logSizeBytes)} at ${e.logPath}`}`), 
  !e.supervisor && !e.controlReachable && e.workersRoster > 0) r.push(`  warning:      supervisor not running but ${e.workersRoster} ${I(e.workersRoster, "worker")} in roster \u2014 running \`claude agents\` restarts the daemon and re-adopts still-running sessions; run \`claude daemon stop --any\` to reap them instead`);
  return r.join(`\n`);
}

function B(e) {
  if (e < 1024) return `${e}B`;
  if (e < 1048576) return `${(e / 1024).toFixed(1)}KB`;
  return `${(e / 1024 / 1024).toFixed(1)}MB`;
}

export { G as formatBgDaemonStatus, W as getBgDaemonStatus };
