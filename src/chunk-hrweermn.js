// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { _, Y, QHo, MUs, U4n, Qln } from "./chunk-kawq2919.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { Ey } from "./chunk-j41af3ah.js";

import { Xi, no, Fr } from "./chunk-xywp7esx.js";

import { ave, ht, qt, Rt } from "./chunk-s2t7g8m9.js";

import { iI, I1e, ZIe, zfe, QR } from "./chunk-q6wab2jw.js";

import { TE, ngt, jn } from "./chunk-1z2heevg.js";

import { rr } from "./chunk-wptm3jf5.js";

import { Pi, Esn } from "./chunk-8yperama.js";

import { fn, KZ } from "./chunk-f1zpf9me.js";

import { X5e } from "./chunk-4v78v8fd.js";

import { VF } from "./chunk-xmqqa853.js";

import { iVe, Ine, kKt, TKt, qvt } from "./chunk-0wrzh62m.js";

import { Vbe, TF } from "./chunk-xd492737.js";

import { Eu } from "./chunk-rkfs82vw.js";

import { Ble, z6r, QJo } from "./chunk-ppcb7f41.js";

import { vV } from "./chunk-e1mwn7g6.js";

import { kl } from "./chunk-x1z20h6y.js";

import { cr } from "./chunk-2kgjyw8x.js";

import { et } from "./chunk-59na0977.js";

import { Ia, r0s } from "./chunk-rkw37sbq.js";

import { oo, zs } from "./chunk-vjmbaret.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, WNs, Gp, M, oe, T, u, De, ue, A } from "./chunk-cvcg6n1z.js";

import { pS, at } from "./chunk-0bq6eb61.js";

import { N, D } from "./chunk-hmqkrrtz.js";

var O = 1, wrr = 2147483648, eTn = 8388608, I = 32, de = 1e5, pe = 1024, F = 4096, me = I + 16, w = new Set([ "__proto__", "constructor", "prototype" ]), fe = new Set([ "language", "outputStyle", "attribution", "includeCoAuthoredBy", "includeGitInstructions", "alwaysThinkingEnabled", "showThinkingSummaries", "permissions" ]), he = new Set([ "commit", "pr", "sessionUrl", "commitTrailers" ]), ge = new Set([ "allow", "deny", "ask" ]), _e = 32, ye = 64, H = p(() => Gp().min(0)), m = p(() => Gp().min(0).default(0)), Se = p(() => u({
  version: Gp()
})), we = p(() => u({
  generation: Gp().min(1).max(wrr)
})), Ae = p(() => u({
  withheldSensitive: m(),
  withheldReadDenied: m(),
  rulesUnreadable: M().default(!1),
  includesNotSent: m(),
  symlinksNotSent: m(),
  notDestinations: m(),
  overCap: m(),
  unreadable: m(),
  settingsKeysWithheld: m(),
  credentialTextsWithheld: m(),
  rulesCoveringDeviceTools: m(),
  droppedRules: u({
    rooted: m(),
    device: m(),
    invalid: m(),
    overCap: m(),
    credential: m(),
    credentialRestrictions: m(),
    guarded: m()
  }).default(() => ({
    rooted: 0,
    device: 0,
    invalid: 0,
    overCap: 0,
    credential: 0,
    credentialRestrictions: 0,
    guarded: 0
  }))
})), Ee = p(() => De({
  path: o().min(1).max(pe),
  size: H(),
  sha256: o().regex(pS),
  content: WNs()
})), z = p(() => u({
  version: A(O),
  generation: Gp().min(1).max(wrr),
  writtenAtMs: H(),
  files: T(Ee()).max(F),
  settings: ue(o(), oe()).nullable(),
  summary: Ae()
}));

function B(e) {
  let t = e.map(TKt), n = new Set(t.flatMap(r => r.split("/").slice(0, -1).map((s, i, c) => c.slice(0, i + 1).join("/"))));
  return new Set(t).size === t.length && t.every(r => !n.has(r));
}

function YJo(e, t) {
  return {
    path: e,
    content: t,
    sha256: at(t)
  };
}

function W(e) {
  return e.length <= iVe && e.every(t => t <= Ine) && e.reduce((t, n) => t + n, 0) <= kKt;
}

function Re(e) {
  return W(e.map(t => t.content.length));
}

function XJo(e) {
  let {kept: t, droppedOverCap: n} = e.reduce((r, s) => {
    if (r.kept.length < iVe && s.content.length <= Ine && r.keptBytes + s.content.length <= kKt) r.kept.push(s), 
    r.keptBytes += s.content.length; else r.droppedOverCap.push(s);
    return r;
  }, {
    kept: [],
    droppedOverCap: [],
    keptBytes: 0
  });
  return {
    kept: t,
    droppedOverCap: n
  };
}

function Vvt(e) {
  if (!Re(e.files)) throw Error("home pack files exceed the caps");
  if (!B(e.files.map(i => i.path))) throw Error("home pack lists two paths that are one file, or one as a directory of another");
  if (e.files.some(i => at(i.content) !== i.sha256)) throw Error("home pack file digest is stale");
  if (!e.files.every(i => qvt(i.path))) throw Error("home pack names a path that is no destination");
  if (e.settings !== null && !G(e.settings)) throw Error("home pack settings nest too deep or hold too much");
  if (e.settings !== null && !j(e.settings)) throw Error("home pack settings hold a value JSON cannot carry");
  let t = K(e.settings);
  if (t === "over_bounds") throw Error("home pack settings carry more or longer keys than the portable filter writes");
  if (t === "not_portable_key") throw Error("home pack settings carry a key the portable filter never writes");
  let n = {
    version: O,
    generation: e.generation,
    writtenAtMs: e.writtenAtMs,
    files: e.files.toSorted(ve).map(i => ({
      path: i.path,
      size: i.content.length,
      sha256: i.sha256,
      content: i.content.toString("base64")
    })),
    settings: e.settings === null ? null : P(e.settings),
    summary: e.summary
  }, r = z().safeParse(n);
  if (!r.success) throw Error("home pack is off its own schema");
  let s = Buffer.from(_(r.data));
  if (s.length > eTn) throw Error("home pack exceeds the row byte cap");
  return s;
}

function Xhe(e) {
  if (e.length > eTn) return {
    ok: !1,
    reason: "oversize"
  };
  let t = e.toString("utf8");
  if (U(t)) return {
    ok: !1,
    reason: "malformed"
  };
  let n = EKt(t), r = Se().safeParse(n);
  if (r.success && r.data.version !== O) return {
    ok: !1,
    reason: "unsupported_version"
  };
  if (Oe(n)) return {
    ok: !1,
    reason: "malformed"
  };
  if (!Pe(n)) return {
    ok: !1,
    reason: "malformed"
  };
  let s = z().safeParse(n);
  if (!s.success) return {
    ok: !1,
    reason: "malformed"
  };
  let i = s.data, c = i.files.filter(Ce);
  if (!B(c.map(h => h.path))) return {
    ok: !1,
    reason: "malformed"
  };
  let a = c.filter(h => h.size <= Ine);
  if (!W(a.map(h => h.size))) return {
    ok: !1,
    reason: "over_cap"
  };
  let l = a.map(ke), f = l.filter(h => h !== null);
  if (f.length !== l.length) return {
    ok: !1,
    reason: "content_mismatch"
  };
  let d = K(i.settings);
  return {
    ok: !0,
    pack: {
      generation: i.generation,
      writtenAtMs: i.writtenAtMs,
      files: f,
      settings: i.settings === null ? null : d === "none" ? P(i.settings) : Te(i.settings),
      summary: i.summary
    },
    refused: {
      destination: i.files.length - c.length,
      overCap: c.length - a.length,
      settings: d
    }
  };
}

function JJo(e) {
  if (e.length > eTn) return null;
  let t = e.toString("utf8");
  if (U(t)) return null;
  let n = we().safeParse(EKt(t));
  return n.success ? n.data.generation : null;
}

function K(e) {
  if (e === null) return "none";
  let t = Object.keys(e).filter(r => !w.has(r));
  if (t.length > _e || t.some(r => r.length > ye)) return "over_bounds";
  return t.every(r => fe.has(r)) && x(e.attribution, he) && x(e.permissions, ge) && (!L(e.permissions) || Object.entries(e.permissions).every(([r, s]) => w.has(r) || be(s))) ? "none" : "not_portable_key";
}

function Te(e) {
  let {permissions: t} = e;
  if (!L(t)) return null;
  let n = [ "deny", "ask" ].flatMap(r => {
    let s = t[r], i = Array.isArray(s) ? s.filter(c => typeof c === "string") : [];
    return i.length === 0 ? [] : [ [ r, i ] ];
  });
  return n.length === 0 ? null : {
    permissions: Object.fromEntries(n)
  };
}

function x(e, t) {
  return e === void 0 || L(e) && Object.keys(e).every(n => t.has(n) || w.has(n));
}

function be(e) {
  return Array.isArray(e) && e.every(t => typeof t === "string");
}

function EKt(e) {
  try {
    return Y(e);
  } catch {
    return;
  }
}

function U(e) {
  let t = 0, n = !1;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (n) {
      if (s === "\\") r++; else if (s === '"') n = !1;
    } else if (s === '"') n = !0; else if (s === "[" || s === "{") {
      if (t++, t > me) return !0;
    } else if (s === "]" || s === "}") t--;
  }
  return !1;
}

function Oe(e) {
  let t = L(e) ? e.files : void 0;
  return Array.isArray(t) && t.length > F;
}

function Pe(e) {
  return !L(e) || G(e.settings) && j(e.settings);
}

function Ce(e) {
  return qvt(e.path);
}

function ke(e) {
  if (e.content.length !== Math.ceil(e.size / 3) * 4) return null;
  let t = Buffer.from(e.content, "base64");
  return t.length === e.size && at(t) === e.sha256 ? {
    path: e.path,
    content: t,
    sha256: e.sha256
  } : null;
}

function G(e) {
  let t = [ {
    value: e,
    depth: 0
  } ], n = 1;
  for (let r = t.pop(); r !== void 0; r = t.pop()) {
    let {value: s, depth: i} = r;
    if (i > I) return !1;
    if (typeof s !== "object" || s === null) continue;
    let c = Array.isArray(s) ? s : Object.values(s);
    if (n += c.length, n > de) return !1;
    for (let a of c) t.push({
      value: a,
      depth: i + 1
    });
  }
  return !0;
}

function j(e) {
  let t = [ e ];
  while (t.length > 0) {
    let n = t.pop();
    if (n === null || typeof n === "string" || typeof n === "boolean" || typeof n === "number" && Number.isFinite(n)) continue;
    if (Array.isArray(n)) {
      for (let r = 0; r < n.length; r++) t.push(n[r]);
      continue;
    }
    if (L(n)) {
      let r = Object.getPrototypeOf(n);
      if (r === Object.prototype || r === null) {
        for (let s of Object.values(n)) t.push(s);
        continue;
      }
    }
    return !1;
  }
  return !0;
}

function P(e) {
  return Object.fromEntries(Object.keys(e).filter(t => !w.has(t)).toSorted().map(t => [ t, Z(e[t]) ]));
}

function Z(e) {
  return Array.isArray(e) ? e.map(Z) : L(e) ? P(e) : e;
}

function ve(e, t) {
  return e.path < t.path ? -1 : e.path > t.path ? 1 : 0;
}

var xe = new RegExp(`^(?:${[ String.raw`\*+`, String.raw`(["']?)(?:\$(?:env:)?[A-Za-z_]\w*|\$\{(?:env:)?[A-Za-z_][\w.]*(?::?\?[^{}]*)?\}|\$\{\{[^{}]*\}\}|\$\([^()]*\)|%[A-Za-z_]\w*%)\1`, String.raw`<[^<>]*>|\{[^{}]*\}|\{\{[^{}]*\}\}|%s|x+`, "password|passwd|pass|secret|changeme|example" ].join("|")})?$`, "i"), Le = /^(?:\[[^\]]*\]|[^:?#]*)(?::\d*)?[?#]/, Ne = /^sha256:(?:[0-9a-f]{64}(?![\w.-])|[*$<{])/i;

function Jhe(e) {
  return V(e) || e.includes("\0") && V(e.replaceAll("\0", ""));
}

function V(e) {
  let t = e.replace(/%[0-9A-Fa-f]{2}|\\[nrt]/g, " "), n = t.replace(/[^\w.~+/=-]+/g, " "), r = [ n, n.replace(/[.~+/=]+(?= |$)/g, " "), t.replace(/[^\w-]+/g, " ") ];
  return ave(e) || ave(t) || r.some(s => U4n(s).length > 0) || MUs(e).some(({start: s, end: i, separatorEnd: c}) => {
    let a = e.slice(s, i), l = Qln.exec(a);
    return l !== null && !xe.test(a.slice(l.index + l[0].length)) && !Ne.test(e.slice(c, c + 72)) && !(Le.test(a) && QHo.test(e.slice(Math.max(0, s - 11), s - 3)));
  });
}

var Ie = [ "language", "outputStyle", "attribution", "includeCoAuthoredBy", "includeGitInstructions", "alwaysThinkingEnabled", "showThinkingSummaries", "permissions" ], Fe = [ "commit", "pr", "sessionUrl", "commitTrailers" ], Me = [ "allow", "deny", "ask" ], He = Esn, ze = 256, Be = 8192, We = 1024, X = 1e3, $e = 1048576, re = new Set([ ...I1e.filePatternTools, Fr, "MultiEdit", "LS" ]), se = [ et, Fr, no, TF, ...KZ, Eu, vV, Ey, ...r0s.map(e => zs(Ia, e)), "NotebookRead", "LS", ...I1e.bashPrefixTools, Rt, kl ], Ke = KZ, Ue = [ ...I1e.bashPrefixTools, kl ], Ge = [ ht, qt, Xi, ...KZ, "MultiEdit", Vbe, ...se ];

function je(e) {
  if (e === ht) return Ge;
  if (e === fn) return Ke;
  if (e === et) return se;
  if (I1e.bashPrefixTools.includes(e)) return Ue;
  let t = oo(e);
  if (t !== null && t.toolName === void 0 && !TE(e)) return [ `${zs(t.serverName, "")}*` ];
  return [ e ];
}

var Ze = new Set([ ...I1e.bashPrefixTools, Rt ]), Ve = new Set([ cr, "WebBrowser" ]), Ye = "/", ie = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]/u, Xe = /[\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]|[^\P{Cc}\t\n\r]|\r(?!\n)/u, qe = /^[\w*-]+$/, Je = /\*{3,}/, Qe = 8;

function tTn(e, {settingsToCloud: t = VF, preToolUseHookActiveHere: n, hasLostAnAllowEntryAtParse: r}) {
  if (!tt(t)) return {
    document: null,
    reason: "flag_off",
    counts: {
      forwardedKeys: 0,
      withheldKeys: 0,
      withheldCredentialTexts: 0,
      rules: k()
    }
  };
  if (!L(e)) return {
    document: null,
    reason: "settings_unreadable",
    counts: {
      forwardedKeys: 0,
      withheldKeys: 0,
      withheldCredentialTexts: 0,
      rules: k()
    }
  };
  let s = wt(g(e, "permissions"), n, r), i = g(e, "language"), c = {
    language: te(typeof i === "string" ? i.trim() : i),
    outputStyle: te(g(e, "outputStyle")),
    attribution: kt(g(e, "attribution")),
    includeCoAuthoredBy: E(g(e, "includeCoAuthoredBy")),
    includeGitInstructions: E(g(e, "includeGitInstructions")),
    alwaysThinkingEnabled: E(g(e, "alwaysThinkingEnabled")),
    showThinkingSummaries: E(g(e, "showThinkingSummaries")),
    permissions: s.value
  }, a = le(Ie.reduce((b, ce) => xt(b, c, ce), {})), l = a.kept ?? {}, f = Object.keys(e), d = {
    forwardedKeys: Object.keys(l).length,
    withheldKeys: N(f, b => !Object.hasOwn(l, b)),
    withheldCredentialTexts: a.withheld,
    rules: s.counts
  };
  if (d.forwardedKeys === 0) return {
    document: null,
    reason: "nothing_to_send",
    counts: d
  };
  let h = {
    ...d,
    forwardedKeys: 0,
    withheldKeys: f.length,
    rules: {
      ...d.rules,
      kept: 0,
      coveringDeviceTools: 0
    }
  };
  if (!zfe(l).safeParse(l).success) return {
    document: null,
    reason: "schema_rejected",
    counts: h
  };
  if (Buffer.byteLength(N6r(l), "utf8") > $e) return {
    document: null,
    reason: "settings_too_large",
    counts: h
  };
  return {
    document: l,
    counts: d
  };
}

function tt(e) {
  try {
    return e();
  } catch {
    return !1;
  }
}

function N6r(e) {
  return _(iI(e), null, 2) + `\n`;
}

function nt(e, t) {
  if (e.length > We) return "over_cap";
  if (Jhe(e)) return "credential";
  if (ie.test(e) || Je.test(e) || N([ ...e ], s => s === "*") > Qe || !ZIe(e, t).valid) return "invalid";
  let {toolName: n, ruleContent: r} = jn(e);
  if (!qe.test(n)) return "invalid";
  if (oo(n)?.serverName === Pi) return t === "allow" ? "device" : "keep_covers_device_tools";
  if (r !== void 0 && (re.has(n) || TE(n))) {
    let s = St(r);
    if (s === "machine" || s === "home" && t === "allow") return "rooted";
  }
  if (r !== void 0 && t === "allow" && Ze.has(n) && !it(r, n)) return "rooted";
  if (r !== void 0 && t === "allow" && Ve.has(n) && gt(r)) return "rooted";
  if (t !== "allow" && yt(n)) return "keep_covers_device_tools";
  return "keep";
}

var q = "[A-Za-z0-9_.@*+][A-Za-z0-9_.@*+:~-]*", rt = new RegExp(`^(?:(?:\\./)?${q}(?:/${q})*/?|-{1,2}(?:[A-Za-z0-9][A-Za-z0-9_.-]*)?)$`), ot = new Set([ "curl", "wget", "nc", "ncat", "netcat", "telnet", "ssh", "scp", "sftp", "rsync", "ping", "ping6", "traceroute", "dig", "nslookup", "host", "socat", "psql", "mysql", "redis-cli", "mongosh", "ftp", "http", "https", "xh", "nmap", "mtr", "mosh", "grpcurl", "websocat", "aria2c", "w3m", "lynx", "whois", "iwr", "irm", "invoke-webrequest", "invoke-restmethod", "test-netconnection", "tnc", "test-connection", "resolve-dnsname", "pg_dump", "pg_dumpall", "pg_restore", "pg_isready", "createdb", "dropdb", "mysqldump", "mysqladmin", "mariadb", "mariadb-dump", "mongo", "mongodump", "mongorestore", "mongoexport", "mongoimport", "redis-benchmark", "pgcli", "mycli", "mysqlsh", "clickhouse-client", "mongostat", "mongotop", "mongofiles" ]), J = new Set([ "sudo", "doas", "env", "time", "timeout", "gtimeout", "watch", "xargs", "command", "builtin", "exec", "nohup", "nice", "caffeinate", "setsid", "stdbuf", "ionice", "chrt", "strace", "unbuffer", "sshpass", "proxychains", "proxychains4", "torsocks", "tsocks", "taskset", "numactl", "setpriv", "flock", "runuser" ]), st = new Set([ rr, "gitlab.com", "bitbucket.org", "ssh.dev.azure.com", `ssh.${rr}`, "altssh.gitlab.com", "altssh.bitbucket.org", "codeberg.org" ]);

function it(e, t) {
  if (/(?:^|[\s:=])\d{4,}:\*$/.test(e.trim())) return !1;
  let n = e.trim().replace(/(?::\*|\s+\*)$/, "").split(/\s+/).filter(i => i !== ""), r = ct(n), s = r === null && S(n, 0) !== null && !n.some(i => R(i) || /[*/\\]/.test(i));
  return n.length > 0 && n.every((i, c) => s && ut(n, c) || rt.test(i) && !i.endsWith(":") && !i.split(/[/:@]/).some(dt) && !(i.startsWith("-") && i.includes("..")) && !/\*[A-Za-z]*\.\./.test(i) && !/^\*+-[A-Za-z]*\.\.(?:\/|$)/.test(i) && !/^~|:\**~/.test(i) && !/^[A-Za-z]:(?!:)/.test(i) && !/[:@]\//.test(i) && !(t === Rt && /^\**[A-Za-z][\w*]*:/.test(i)) && !pt(i, r !== null && c > r && !i.startsWith("-")));
}

var Q = new Set([ "--host", "--hostname", "--bind", "--listen", "--addr", "--address", "-H", "-b" ]), lt = new Set([ "HOST", "HOSTNAME", "BIND", "BIND_ADDR", "BIND_ADDRESS" ]);

function ut(e, t) {
  let n = e[t] ?? "", r = /^(--[a-z-]+)=(.+)$/.exec(n);
  if (r !== null) return Q.has(r[1] ?? "") && C(r[2] ?? "");
  let s = /^([A-Z_]+)=(.+)$/.exec(n);
  if (s !== null) return lt.has(s[1] ?? "") && C(s[2] ?? "");
  return t > 0 && Q.has(e[t - 1] ?? "") && C(n);
}

function C(e) {
  let t = e.toLowerCase();
  return [ t, t.replace(/:\d{1,5}$/, "") ].some(n => n === "0.0.0.0" || n === "127.0.0.1" || n === "localhost" || /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+localhost$/.test(n) || n === "::" || n === "[::]" || n === "::1" || n === "[::1]");
}

function ct(e) {
  let t = S(e, 0);
  if (t !== null && R(e[t] ?? "")) return t;
  let n = e.findIndex((r, s) => s > (t ?? 0) && /^-(?:exec|execdir|ok|okdir)$/.test(r));
  if (n >= 0) {
    let r = S(e, n + 1);
    return r !== null && R(e[r] ?? "") ? r : null;
  }
  return null;
}

function R(e) {
  return ot.has(e.toLowerCase().replace(/\.(?:exe|cmd|bat|ps1)$/, ""));
}

function S(e, t) {
  let n = e[t];
  if (n === void 0) return null;
  if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)) return S(e, t + 1);
  let r = n.toLowerCase().replace(/\.exe$/, "");
  if (!J.has(r)) return t;
  let s = t + 1;
  while (s < e.length) {
    let i = e[s] ?? "";
    if (i.startsWith("-")) {
      let c = (/^(?:-[A-Za-z]|--[A-Za-z][A-Za-z-]*)$/.test(i) || (r === "sudo" || r === "doas") && /^-[A-Za-z]+[ugUCDrtTph]$/.test(i)) && !(e[s + 1] ?? "").startsWith("-") && !R(e[s + 1] ?? "") && !J.has((e[s + 1] ?? "").toLowerCase().replace(/\.exe$/, ""));
      s += c ? 2 : 1;
    } else if (/^\d[\d.]*[smhd]?$/.test(i)) s += 1; else break;
  }
  return S(e, s);
}

function dt(e) {
  return /^[.*]+$/.test(e) && !/^(?:\.|\.{3,}|\*{1,2}|\*\.\*)$/.test(e);
}

function pt(e, t = !1) {
  let n = /^-[A-Za-z][A-Za-z0-9_.-]+$/.test(e) ? Array.from({
    length: e.length - 2
  }, (a, l) => l + 2).filter(a => /^[A-Za-z]+$/.test(e.slice(1, a))).map(a => e.slice(a)) : [], r = n[0], s = t || /[:@]/.test(e) || r !== void 0, i = e.startsWith("--") ? e.replace(/^--[^=]*=|^--/, "").split(/[/:@]/).filter(a => a !== "") : e.startsWith("-") ? n : e.split(/[/:@]/).filter(a => a !== ""), c = e.split("@").slice(e.startsWith("@") ? 2 : 1);
  return t && e.includes("*") || e.split("/").some(a => {
    let l = a.split(":");
    return l.length > 1 && l.some(f => /^(?:\d{4,}|\*+)$/.test(f));
  }) || e.split(/[/@]/).flatMap(mt).some(a => /\d/.test(a) && /^[0-9a-f:*]+$/i.test(a) && (a.includes("::") || Nt(a, ":") >= 2)) || c.some(a => {
    let l = a.replace(/[/:].*$/, "").toLowerCase();
    if (st.has(l)) return !1;
    return /^[a-z0-9*-]+(?:\.[a-z0-9*-]+)*\.[a-z*][a-z0-9*-]*$/.test(l) || Ble(l.replace(/\*/g, "")) || /^(?:0+|0x[0-9a-f]*)$/.test(l) || t && l !== "";
  }) || /^0+\//.test(e) || t && /^0+:/.test(e) || i.some((a, l) => ft(a) || (t || r !== void 0 && l === 0) && !e.startsWith("--") && /^(?:0+|0x[0-9a-f]*|[0-9a-fx]*\.[0-9a-fx.]*)$/i.test(a) && /\d/.test(a)) || e.includes("*") && (e.includes(":") || i.some(a => /^[0-9a-fx.*]+$/i.test(a) && /\d/.test(a) && a.includes("*"))) || i.some(a => s ? Ble(a.replace(/\*/g, "")) : z6r(a.replace(/\*/g, "")));
}

function mt(e) {
  let t = [ e ], n = e;
  for (;;) {
    let r = n.replace(/^[a-z][\w-]*:/i, "");
    if (r === n || r === "") return t;
    t.push(r), n = r;
  }
}

function ft(e) {
  let t = e.replace(/\.+$/, "");
  return /^(?:(?:\d+|0x[0-9a-f]+)\.){3}(?:\d+|0x[0-9a-f]+)$/i.test(t) || /^(?:127\.|0\d+\.|0x[0-9a-f]*\.)[0-9a-fx.]*$/i.test(t) || /^0x[0-9a-f]+$/i.test(t) || /^\d{8,}$/.test(t);
}

function gt(e) {
  let t = e.replace(/^domain:/i, "").trim().toLowerCase().replace(/%.*$/, ""), n = t.replace(/\.+(?=(?::(?:\d+|\*))*$)/, "").replace(/(?::(?:\d+|\*))+$/, "").replace(/\.+$/, "");
  return Ble(n) || n === "*" && n !== t || /^[\[\]0-9a-fx.:*]+$/.test(n) && /[\d:]/.test(n) || n.includes("*") && n !== "*" && !/^\*\.[^*]+$/.test(n) || /^\*\./.test(n) && QJo(n.slice(2));
}

function _t(e) {
  return e.startsWith("~\\") || e.startsWith("\\") && e[1] !== "!" && e[1] !== "#" || /^[A-Za-z]:[/\\]/.test(e);
}

function yt(e) {
  return TE(e) && ngt(e, He);
}

function St(e) {
  let t = e.replace(/^\s+/, "").replace(/^[!#]/, "").trim();
  if (t.split("/").includes("..") || _t(t) || /^~[^/]/.test(t)) return "machine";
  if (t === "~" || t.startsWith("~/")) return "home";
  return X5e(t, Ye).root !== null ? "machine" : "none";
}

function $6r(e) {
  let t = L(e) ? g(e, "PreToolUse") : void 0;
  return Array.isArray(t) ? t.length > 0 : t != null;
}

function wt(e, t, n) {
  if (!L(e)) return {
    value: void 0,
    counts: k()
  };
  let r = Me.map(a => {
    let l = bt(g(e, a), a);
    return a === "allow" && typeof t === "function" ? Et(l, t) : l;
  }), s = t === !0 || n || r.some(({behavior: a, counts: l, carveOutLost: f}) => a === "allow" ? f : At(l) > 0), i = r.map(a => a.behavior === "allow" && s ? Tt(a) : a), c = i.reduce((a, {behavior: l, rules: f}) => {
    if (f.length > 0) a[l] = f;
    return a;
  }, {});
  return {
    value: i.some(({rules: a}) => a.length > 0) ? c : void 0,
    counts: i.map(({counts: a}) => a).reduce(Pt)
  };
}

function At(e) {
  return e.droppedRooted + e.droppedDevice + e.droppedInvalid + e.droppedOverCap + e.droppedCredential;
}

function Et(e, t) {
  let n = s => je(jn(s).toolName).some(t), r = e.rules.filter(n);
  if (r.length === 0) return e;
  return {
    ...e,
    rules: e.rules.filter(s => !n(s)),
    carveOutLost: e.carveOutLost || r.some(ae),
    counts: {
      ...e.counts,
      kept: e.counts.kept - r.length,
      droppedGuarded: e.counts.droppedGuarded + r.length
    }
  };
}

function Tt(e) {
  return {
    behavior: e.behavior,
    rules: [],
    carveOutLost: e.carveOutLost,
    counts: {
      ...e.counts,
      kept: 0,
      coveringDeviceTools: 0,
      droppedGuarded: e.counts.droppedGuarded + e.rules.length
    }
  };
}

function bt(e, t) {
  let n = Array.isArray(e) ? e : [], r = n.slice(0, X), s = r.filter(d => typeof d === "string"), i = D(s), c = new Set(i), a = N(n.slice(X), d => typeof d !== "string" || !c.has(d)), l = i.map(d => ({
    rule: d,
    verdict: nt(d, t)
  })), f = l.filter(({verdict: d}) => ee(d));
  return {
    behavior: t,
    rules: f.map(({rule: d}) => d),
    carveOutLost: t === "allow" && (a > 0 || l.some(({rule: d, verdict: h}) => !ee(h) && ae(d))),
    counts: {
      kept: f.length,
      duplicates: s.length - i.length + (n.length - r.length - a),
      droppedRooted: y(l, "rooted"),
      droppedDevice: y(l, "device"),
      droppedInvalid: y(l, "invalid") + (r.length - s.length) + (e !== void 0 && !Array.isArray(e) ? 1 : 0),
      droppedOverCap: y(l, "over_cap") + a,
      droppedCredential: y(l, "credential"),
      droppedCredentialRestrictions: t === "allow" ? 0 : y(l, "credential"),
      droppedGuarded: 0,
      coveringDeviceTools: y(f, "keep_covers_device_tools")
    }
  };
}

function ee(e) {
  return e === "keep" || e === "keep_covers_device_tools";
}

function ae(e) {
  return Ot(e)?.trimStart().startsWith("!") ?? !1;
}

function Ot(e) {
  let {toolName: t, ruleContent: n} = jn(e);
  return re.has(t) || TE(t) ? n : void 0;
}

function y(e, t) {
  return N(e, ({verdict: n}) => n === t);
}

function k() {
  return {
    kept: 0,
    duplicates: 0,
    droppedRooted: 0,
    droppedDevice: 0,
    droppedInvalid: 0,
    droppedOverCap: 0,
    droppedCredential: 0,
    droppedCredentialRestrictions: 0,
    droppedGuarded: 0,
    coveringDeviceTools: 0
  };
}

function Pt(e, t) {
  return {
    kept: e.kept + t.kept,
    duplicates: e.duplicates + t.duplicates,
    droppedRooted: e.droppedRooted + t.droppedRooted,
    droppedDevice: e.droppedDevice + t.droppedDevice,
    droppedInvalid: e.droppedInvalid + t.droppedInvalid,
    droppedOverCap: e.droppedOverCap + t.droppedOverCap,
    droppedCredential: e.droppedCredential + t.droppedCredential,
    droppedCredentialRestrictions: e.droppedCredentialRestrictions + t.droppedCredentialRestrictions,
    droppedGuarded: e.droppedGuarded + t.droppedGuarded,
    coveringDeviceTools: e.coveringDeviceTools + t.coveringDeviceTools
  };
}

var Ct = {
  commit: ne,
  pr: ne,
  sessionUrl: v,
  commitTrailers: v
};

function kt(e) {
  if (!L(e)) return;
  let t = Fe.reduce((n, r) => vt(n, e, r), {});
  return Object.keys(t).length > 0 ? t : void 0;
}

function le(e) {
  if (typeof e === "string") return Jhe(e) ? {
    kept: void 0,
    withheld: 1
  } : {
    kept: e,
    withheld: 0
  };
  if (typeof e !== "object" || e === null) return {
    kept: e,
    withheld: 0
  };
  let t = Object.entries(e).map(([r, s]) => [ r, Jhe(r) ? {
    kept: void 0,
    withheld: 1
  } : le(s) ]), n = t.flatMap(([r, s]) => s.kept === void 0 ? [] : [ [ r, s.kept ] ]);
  return {
    kept: n.length === 0 ? void 0 : Array.isArray(e) ? n.map(([, r]) => r) : Object.fromEntries(n),
    withheld: t.reduce((r, [, s]) => r + s.withheld, 0)
  };
}

function vt(e, t, n) {
  let r = g(t, n);
  if (Ct[n](r)) e[n] = r;
  return e;
}

function xt(e, t, n) {
  let r = t[n];
  if (r !== void 0 && QR(n).safeParse(r).success) e[n] = r;
  return e;
}

function te(e) {
  return typeof e === "string" && e.trim() !== "" && e.length <= ze && !ie.test(e) ? e : void 0;
}

function E(e) {
  return v(e) ? e : void 0;
}

function v(e) {
  return typeof e === "boolean";
}

function ne(e) {
  return typeof e === "string" && Buffer.byteLength(e, "utf8") <= Be && !Xe.test(e);
}

function g(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}

export { wrr, eTn, YJo, XJo, Vvt, Xhe, JJo, EKt, Jhe, tTn, N6r, $6r };
