// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-jkzenvsk.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import { E } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-q6wab2jw.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-t6pdm7af.js";

import { Zit, Llo, Yce, Jy, coe, BDn, jDn } from "./chunk-sqb9meyh.js";

import { Tn } from "./chunk-30n0xq4e.js";

import "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-4dwgr3et.js";

import "./chunk-nnrb0acr.js";

import "./chunk-zvghq5er.js";

import "./chunk-2msx6erf.js";

import "./chunk-0cdqg49t.js";

import "./chunk-5brm0azz.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-wptm3jf5.js";

import "./chunk-j90se18b.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-0pmh7awy.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-r276nwd3.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-zscnwzv2.js";

import "./chunk-yxennhe9.js";

import { yOe } from "./chunk-rgd61mm3.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-x5881pc6.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-h36n2zxz.js";

import "./chunk-9whfjfdx.js";

import "./chunk-07cck4g7.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import { gs } from "./chunk-qqd24q2y.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-2my8wpr5.js";

import "./chunk-46phtgr7.js";

import "./chunk-y3nc3daq.js";

import "./chunk-8yperama.js";

import "./chunk-mw643xee.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-g6nh65r0.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-hmce8a0s.js";

import "./chunk-sn25q2cq.js";

import { jf } from "./chunk-9tdwgnpn.js";

import { FQe, Cfn } from "./chunk-m8a4pjra.js";

import "./chunk-h83cda0g.js";

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

import "./chunk-1xnsr4dy.js";

import { spawn as L } from "child_process";

import { createHash as F } from "crypto";

import { constants as O } from "fs";

import { lstat as S, mkdir as I, open as J, realpath as j } from "fs/promises";

import { homedir as B } from "os";

import { join as x } from "path";

var U = [ "/usr/bin/python3", "/usr/local/bin/python3", "/bin/python3" ], N = 86, z = () => [ "import hashlib,os,sys", "p,d,n=sys.argv[1],sys.argv[2],int(sys.argv[3])", `fail=lambda m:(sys.stderr.write('device hook template integrity check failed: '+m+'\\n'),sys.exit(${N}))`, "os.path.isfile(p) or fail('not a regular file')", "os.path.getsize(p)<=n or fail('too large')", "b=None", 'try: b=open(p,"rb").read()', "except OSError as e: fail(type(e).__name__)", "hashlib.sha256(b).hexdigest()==d or fail('digest mismatch')", "sys.argv=[p]", "exec(compile(b,p,'exec'),{'__name__':'__main__','__file__':p})" ].join(`\n`), V = z();

async function G(o) {
  for (let r of U) {
    let e = await o.vet(r);
    if (e !== null) return e;
  }
  return null;
}

async function W(o, r, e) {
  await e.mkdir(e.templateDir, 448);
  let n = x(e.templateDir, `${o}.py`);
  return await e.writeFileAtomic(n, r, 384), n;
}

function K(o, r, e, n = 262144) {
  return [ o, "-I", "-S", "-c", V, r, e, String(n) ];
}

var X = /^(?:LD_|DYLD_|GCONV_PATH$|NLSPATH$|DEVELOPER_DIR$|PYTHON)/;

function q(o) {
  let r = {
    ...o
  };
  for (let e of Object.keys(r)) if (X.test(e)) delete r[e];
  return r;
}

var P = 65536;

async function Q(o, r, e) {
  let n = await H(r.cwd, o, r, e);
  return n.status === null && n.signal === void 0 && !n.timedOut && /ENOENT|spawn .* cwd|uv_cwd|not a directory/i.test(n.stderr) ? H(B(), o, r, e) : n;
}

function H(o, r, e, n) {
  return new Promise(s => {
    let [l, ...a] = r;
    if (l === void 0) {
      s({
        stdout: "",
        stderr: "no command",
        status: null,
        timedOut: !1
      });
      return;
    }
    let p = !1, k = d => {
      if (!p) p = !0, s(d);
    }, u;
    try {
      u = L(l, a, {
        cwd: o,
        env: {
          ...q(n.env ?? gs()),
          CLAUDE_PROJECT_DIR: n.projectDir
        },
        stdio: [ "pipe", "pipe", "pipe" ],
        detached: !0,
        windowsHide: !0,
        ...Zit(e.hook_event_name)
      });
    } catch (d) {
      k({
        stdout: "",
        stderr: d instanceof Error ? d.message : "spawn failed",
        status: null,
        timedOut: !1
      });
      return;
    }
    let f = () => {
      try {
        if (u.pid !== void 0) process.kill(-u.pid, "SIGKILL");
      } catch {
        u.kill("SIGKILL");
      }
    }, m = "", y = "", w = !1, g = !1, v = !1, D = setTimeout(d => {
      w = !0, d();
    }, n.timeoutMs, f), h = () => f();
    if (n.signal !== void 0) if (n.signal.aborted) h(); else n.signal.addEventListener("abort", h, {
      once: !0
    });
    let T = (d, b, M) => {
      if (d.length + b.length > P) M();
      return d.length >= P ? d : (d + b).slice(0, P);
    };
    u.stdout?.setEncoding("utf8"), u.stderr?.setEncoding("utf8"), u.stdout?.on("data", d => m = T(m, d, () => g = !0)), 
    u.stderr?.on("data", d => y = T(y, d, () => v = !0)), u.stdin?.on("error", () => {});
    let C = (d, b) => {
      clearTimeout(D), n.signal?.removeEventListener("abort", h), k({
        stdout: m,
        stderr: y,
        status: d,
        ...b !== void 0 && {
          signal: b
        },
        timedOut: w,
        ...g && {
          stdoutTruncated: g
        },
        ...v && {
          stderrTruncated: v
        }
      });
    };
    u.on("error", d => {
      y = y || d.message, C(null);
    }), u.on("close", (d, b) => C(d, b ?? void 0));
    let R;
    try {
      R = _(e);
    } catch {
      R = "";
    }
    u.stdin?.end(R);
  });
}

function A(o) {
  let r = o.stdout.trim();
  if (o.stdoutTruncated === !0) return {
    kind: "unreadable"
  };
  if (!r.startsWith("{")) return r === "" ? {
    kind: "silent"
  } : {
    kind: "unreadable"
  };
  try {
    let e = coe().safeParse(Y(r));
    if (!e.success) return {
      kind: "unreadable"
    };
    let n = e.data;
    return "async" in n ? {
      kind: "unreadable"
    } : {
      kind: "answer",
      answer: n
    };
  } catch {
    return {
      kind: "unreadable"
    };
  }
}

function Z(o) {
  if (o.status === 2) return {
    decision: "block",
    reason: o.stderr.trim() || "blocked by a device hook template"
  };
  if (o.status !== 0) return {};
  let r = A(o);
  if (r.kind !== "answer") return {};
  let e = r.answer, n = {
    ...e.continue === !1 && {
      continue: !1,
      ...e.stopReason !== void 0 && {
        stopReason: e.stopReason
      }
    },
    ...e.decision === "block" && {
      decision: "block",
      ...e.reason !== void 0 && {
        reason: e.reason
      }
    },
    ...e.systemMessage !== void 0 && {
      systemMessage: e.systemMessage
    }
  }, s = e.hookSpecificOutput;
  if (s?.hookEventName === "PreToolUse") {
    let l = s.permissionDecision === "deny" || s.permissionDecision === "ask" ? s.permissionDecision : void 0;
    return {
      ...n,
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        ...l !== void 0 && {
          permissionDecision: l
        },
        ...l !== void 0 && s.permissionDecisionReason !== void 0 && {
          permissionDecisionReason: s.permissionDecisionReason
        },
        ...s.additionalContext !== void 0 && {
          additionalContext: s.additionalContext
        }
      }
    };
  }
  if (s?.hookEventName === "PostToolUse" && s.additionalContext !== void 0) return {
    ...n,
    hookSpecificOutput: {
      hookEventName: "PostToolUse",
      additionalContext: s.additionalContext
    }
  };
  return n;
}

function ee(o, r) {
  if (r) return "aborted";
  if (o.timedOut) return "timeout";
  if (o.signal !== void 0) return "killed";
  if (o.status === null) return "spawn_failed";
  if (o.status === N) return "integrity_failed";
  if (o.status === 0) return A(o).kind === "unreadable" ? "error" : "ok";
  return o.status === 2 ? "blocked" : "error";
}

var te = {
  integrity_failed: "its file no longer matched what was verified",
  error: "it exited with an error or an unreadable answer",
  spawn_failed: "it could not be started",
  killed: "it was killed before it answered",
  interpreter_untrusted: "its interpreter can no longer be trusted",
  timeout: "it took too long"
};

function ne(o, r, e, n, s, l) {
  return async (a, p, k) => {
    let u = Date.now(), f = await s(), m = f ? await Q(o, a, {
      timeoutMs: Math.max(1e3, r * 1e3 - 2e3),
      projectDir: l(),
      ...k !== void 0 && {
        signal: k
      }
    }) : {
      stdout: "",
      stderr: "interpreter no longer trusted",
      status: null,
      timedOut: !1
    }, y = Z({
      ...m,
      stderr: Llo(m.stderr, 2e3).text
    }), {answer: w, report: g} = Yce(y, e.event), v = f ? ee(m, k?.aborted === !0) : "interpreter_untrusted", D = v === "ok" && Jy(w) ? "blocked" : v;
    if (n({
      outcome: D,
      durationMs: Date.now() - u,
      fieldsDropped: g.dropped.length > 0 || g.truncated.length > 0
    }), D === "aborted") return e.failClosed ? {
      decision: "block",
      reason: `cloud template ${e.id} was interrupted before it could answer`
    } : {};
    let h = te[D];
    if (h !== void 0) {
      let T = `cloud template ${e.id} did not run cleanly: ${h}`;
      return e.failClosed ? {
        decision: "block",
        reason: T,
        systemMessage: T
      } : {
        ...w,
        systemMessage: T
      };
    }
    return w;
  };
}

function re(o) {
  return {
    vet: async r => {
      try {
        let e = typeof process.getuid === "function" ? process.getuid() : void 0, n = p => e !== void 0 && e !== 0 && p === e, s = async p => {
          let k = p.split("/").filter(Boolean);
          for (let u = 0; u < k.length; u += 1) {
            let f = await S("/" + k.slice(0, u).join("/"));
            if (!f.isDirectory() || (f.mode & 18) !== 0 || n(f.uid)) return !1;
          }
          return !0;
        };
        if (!await s(r)) return null;
        let l = await j(r);
        if (!await s(l)) return null;
        let a = await S(l);
        return a.isFile() && (a.mode & 73) !== 0 && (a.mode & 18) === 0 && !n(a.uid) ? l : null;
      } catch {
        return null;
      }
    },
    mkdir: async (r, e) => {
      try {
        await I(r, {
          mode: e
        });
      } catch (l) {
        if (E(l) !== "EEXIST") throw l;
      }
      let n = await S(r), s = typeof process.getuid === "function" ? process.getuid() : void 0;
      if (!n.isDirectory() || s !== void 0 && n.uid !== s || (n.mode & 63) !== 0) throw Error("unsafe device-hook template directory");
    },
    writeFileAtomic: (r, e, n) => Tn(r, e, n),
    templateDir: o
  };
}

function Oe(o) {
  let r = jf(), e = re(x(r, "device-hook-templates", String(process.pid))), n, s = () => (n ??= G(e).then(a => {
    if (a === null) n = void 0;
    return a;
  }), n), l = new Map;
  return {
    resolveInterpreter: s,
    async prepare(a, p, k, u) {
      let f = await s();
      if (f === null) throw Error("no absolute python3 for a device hook template");
      await I(r, {
        recursive: !0,
        mode: 448
      }), yOe(r);
      let m = l.get(p);
      if (m !== void 0 && !await oe(await m.catch(() => null), p, a.maxBytes)) l.delete(p), 
      m = void 0;
      if (m === void 0) m = (async () => (await e.mkdir(x(r, "device-hook-templates"), 448), 
      W(p, k, e)))(), l.set(p, m), m.catch(() => l.delete(p));
      let y = await m, w = Cfn(a);
      return ne(K(f, y, p, a.maxBytes), u, {
        id: a.id,
        event: a.event,
        failClosed: w
      }, g => {
        if (i("tengu_device_hook_template_run", {
          template: c(ie(a.id)),
          outcome: c(g.outcome),
          duration_ms: g.durationMs,
          fields_dropped: g.fieldsDropped
        }), g.outcome === "integrity_failed") t(`Device hook template ${a.id} refused at run time: integrity check failed (${y})`, {
          level: "warn"
        }); else if (g.outcome === "interpreter_untrusted") t(`Device hook template ${a.id} refused at run time: ${f} no longer vets as a trusted interpreter`, {
          level: "warn"
        });
      }, async () => {
        let g = await e.vet(f) === f;
        if (!g) n = void 0;
        return g;
      }, o);
    },
    install: (a, p, k) => BDn(a, p, "templates", k),
    remove: a => jDn(a, "templates")
  };
}

async function oe(o, r, e) {
  if (o === null) return !1;
  let n;
  try {
    n = await J(o, O.O_RDONLY | O.O_NONBLOCK | O.O_NOFOLLOW);
    let s = await n.stat();
    if (!s.isFile() || s.size > e) return !1;
    let l = Buffer.alloc(s.size), {bytesRead: a} = await n.read(l, 0, s.size, 0);
    return a === s.size && F("sha256").update(l).digest("hex") === r;
  } catch {
    return !1;
  } finally {
    await (n?.close().catch(() => {}));
  }
}

function ie(o) {
  return FQe(o)?.id ?? "unknown";
}

export { Oe as productionDeviceHookTemplateRunner, ie as telemetryTemplateId };
