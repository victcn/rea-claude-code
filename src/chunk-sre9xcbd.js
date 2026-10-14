// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { readFile as r, readlink as s } from "fs/promises";

import { hostname as i } from "os";

var Oft = 262144;

function wDs(n) {
  let e = n.replace(/\.json$/, ""), t = parseInt(e, 10);
  if (isNaN(t)) return null;
  return {
    pid: t,
    canonical: String(t) === e
  };
}

var u = [ "interactive", "bg", "daemon", "daemon-worker" ];

function d(n) {
  return u.includes(n) ? n : void 0;
}

var a = [ "busy", "shell", "idle", "waiting" ];

function p(n) {
  return a.includes(n) ? n : void 0;
}

var c = 4e15;

function mLt(n) {
  return typeof n === "number" && Number.isFinite(n) && n >= 0 && n <= c;
}

function fsn(n) {
  return mLt(n) ? n : void 0;
}

function vDs(n) {
  let e = typeof n === "object" && n !== null ? n : {};
  return {
    cwd: typeof e.cwd === "string" ? e.cwd : "?",
    startedAt: fsn(e.startedAt) ?? 0,
    procStart: typeof e.procStart === "string" ? e.procStart : void 0,
    ...typeof e.procStartFt === "string" && {
      procStartFt: e.procStartFt
    },
    kind: d(e.kind),
    sessionId: typeof e.sessionId === "string" ? e.sessionId : void 0,
    status: p(e.status),
    entrypoint: typeof e.entrypoint === "string" ? e.entrypoint : void 0,
    ...typeof e.pidDomain === "string" && {
      pidDomain: e.pidDomain
    }
  };
}

function Aa(n) {
  if (n <= 1) return !1;
  try {
    return process.kill(n, 0), !0;
  } catch {
    return !1;
  }
}

async function EDs(n) {
  if (n === "windows") return `linux:${i().toLowerCase()}`;
  if (n !== "linux" && n !== "wsl") return "linux";
  let [e, t] = await Promise.all([ r("/etc/machine-id", "utf8").then(o => o.trim(), () => ""), s("/proc/self/ns/pid").catch(() => "") ]);
  return `linux:${e}:${t}`;
}

export { Oft, wDs, mLt, fsn, vDs, Aa, EDs };
