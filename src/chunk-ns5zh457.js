// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { le } from "./chunk-cqgvwwgb.js";

import { a } from "./chunk-j016gcgm.js";

import { dl, nt } from "./chunk-5wbhf1bk.js";

import { hAe, ore, x4, _Ae, CRn, qkt, mQ } from "./chunk-84yp45y8.js";

import { pz, B7t, z7t, xFn, PFn, IFn, W5e, XIt } from "./chunk-4v78v8fd.js";

import { Fl } from "./chunk-dc6j1jb5.js";

import { O } from "./chunk-1xnsr4dy.js";

var jTe = /[\t\n\v\f\r \u0085\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+/, w = new RegExp(`^${jTe.source}`);

var te = new RegExp(`${`['"\u2018-\u201f]`}+`, "g");

function p4(e) {
  let t = e.replace(w, "");
  for (;;) if (t.startsWith("<#")) {
    let n = t.indexOf("#>", 2);
    if (n < 0) break;
    t = t.slice(n + 2).replace(w, "");
  } else if (t.startsWith("#")) {
    let n = t.search(/[\r\n]/);
    if (n < 0) break;
    t = t.slice(n).replace(w, "");
  } else break;
  return t;
}

function J$(e) {
  return e.replace(te, "");
}

var ne = new RegExp(`^${`['"\u2018-\u201f]`}+|${`['"\u2018-\u201f]`}+$`, "g");

function Z6(e) {
  return e.replace(ne, "");
}

function R(e) {
  if (e === "'" || e >= "\u2018" && e <= "\u201b") return "single";
  if (e === '"' || e >= "\u201c" && e <= "\u201e") return "double";
  return null;
}

function Pne(e) {
  let t = "", n = null;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (o === "`") {
      if (n === "single") t += "``"; else if (r + 1 < e.length) t += o + e[r + 1], r++; else t += o;
      continue;
    }
    let s = R(o);
    if (n === null) {
      if (s !== null) {
        n = s;
        continue;
      }
      t += o;
    } else if (s === n) {
      if (r + 1 < e.length && R(e[r + 1]) === s) {
        t += e[r + 1], r++;
        continue;
      }
      n = null;
    } else t += o;
  }
  return t;
}

function NA(e) {
  return F(e, void 0);
}

var re = {
  t: "\t",
  n: `\n`,
  r: "\r",
  f: "\f",
  v: "\v"
};

function E(e) {
  return F(e, re);
}

var se = {
  0: "\0"
};

function y(e) {
  return F(e, se);
}

function F(e, t) {
  return e.replace(/`(?:(`)|[\r\n]+\s*|u\{([0-9a-fA-F]{1,6})\}|([\s\S]?))/g, (n, r, o, s) => {
    if (r !== void 0) return "`";
    if (o !== void 0) {
      let c = parseInt(o, 16);
      return c <= 1114111 ? String.fromCodePoint(c) : "\ufffd";
    }
    if (s === void 0) return "";
    if (t && s in t) return t[s];
    return s;
  });
}

var zkn = /[\t\n\v\f\r ]+/, NJo = new RegExp(`^${zkn.source}`);

import { statSync as de } from "fs";

import { join as me } from "path";

var m6r = [ "-verbose", "-debug" ], P = [ "-erroraction", "-warningaction", "-informationaction", "-progressaction" ], b = [ "-ea", "-wa", "-infa", "-proga" ], x = [ "-errorvariable", "-warningvariable", "-informationvariable", "-outvariable", "-pipelinevariable" ], I = [ "-ev", "-wv", "-iv", "-ov", "-pv" ], g6r = [ ...P, ...x, "-outbuffer", ...b ], T = new Set([ ...m6r, ...g6r ]);

function N(e) {
  if (e.length < 2) return !1;
  return b.includes(e) || P.some(t => t.startsWith(e));
}

var ke = new Set([ ...P, ...b ]), D = new Set([ "silentlycontinue", "0", "stop", "1", "continue", "2", "ignore", "4" ]);

function k(e) {
  if (e.length < 2) return !1;
  return I.includes(e) || x.some(t => t.startsWith(e));
}

var W = new Set([ "global", "script", "local", "private", "variable" ]), M = new Set([ "psdefaultparametervalues", "confirmpreference", "debugpreference", "erroractionpreference", "errorview", "formatenumerationlimit", "informationpreference", "maximumhistorycount", "ofs", "outputencoding", "progresspreference", "psemailserver", "psmoduleautoloadingpreference", "psnativecommandargumentpassing", "psnativecommanduseerroractionpreference", "pssessionapplicationname", "pssessionconfigurationname", "pssessionoption", "psstyle", "transcript", "verbosepreference", "warningpreference", "whatifpreference", "logcommandhealthevent", "logcommandlifecycleevent", "logenginehealthevent", "logenginelifecycleevent", "logproviderhealthevent", "logproviderlifecycleevent", "maximumaliascount", "maximumdrivecount", "maximumerrorcount", "maximumfunctioncount", "maximumvariablecount" ]), H = [ ...P, ...x, "-outbuffer", "-verbose", "-debug" ], ae = H.filter(e => e !== "-progressaction");

function oe(e, t) {
  let n = null;
  for (let r of t) if (r.startsWith(e)) {
    if (n !== null) return null;
    n = r;
  }
  return n;
}

function ie(e, t) {
  if (e.length < 2) return !1;
  for (let n of [ H, ae ]) {
    let r = oe(e, n);
    if (r !== null && t.includes(r)) return !0;
  }
  return !1;
}

var ce = new Set([ ...I, "-ea", "-wa", "-p" ]), ue = !1;

function fe(e, t, n, r) {
  if (!r && ce.has(e)) return !1;
  return t.includes(e) || ie(e, n);
}

function B(e, t, n) {
  return fe(e, t, n, ue);
}

function j(e) {
  return B(e, I, x);
}

function U(e) {
  return B(e, b, P);
}

var $Jo = new Set([ "add", "clear", "close", "copy", "enter", "exit", "find", "format", "get", "hide", "join", "lock", "move", "new", "open", "optimize", "pop", "push", "redo", "remove", "rename", "reset", "resize", "resume", "search", "select", "set", "show", "skip", "split", "step", "switch", "undo", "unlock", "watch", "connect", "disconnect", "read", "receive", "send", "write", "backup", "checkpoint", "compare", "compress", "convert", "convertfrom", "convertto", "dismount", "edit", "expand", "export", "group", "import", "initialize", "limit", "merge", "mount", "out", "publish", "restore", "save", "sync", "unpublish", "update", "debug", "measure", "ping", "repair", "resolve", "test", "trace", "approve", "assert", "build", "complete", "confirm", "deny", "deploy", "disable", "enable", "install", "invoke", "register", "request", "restart", "start", "stop", "submit", "suspend", "uninstall", "unregister", "wait", "block", "grant", "protect", "revoke", "unblock", "unprotect", "use", "sort", "tee", "where", "foreach" ]), ge = [ "-variable", "-sessionvariable", "-responseheadersvariable", "-statuscodevariable" ];

function V(e) {
  if (e.length < 3) return !1;
  return ge.some(t => t.startsWith(e));
}

var pe = new Set([ "--list-runtimes", "--list-sdks" ]);

function EB(e, t) {
  let n = (t?.elementTypes ?? []).slice(1), r = t?.args ?? [], o = t?.children;
  for (let s = 0; s < n.length; s++) {
    if (n[s] !== "StringConstant" && n[s] !== "Parameter") {
      if (!/[$(@{[]/.test(r[s] ?? "")) continue;
      return !0;
    }
    if (n[s] === "Parameter") {
      let c = o?.[s];
      if (c) {
        if (c.some(i => i.type !== "StringConstant")) return !0;
      } else {
        let i = r[s] ?? "", l = i.indexOf(":");
        if (l > 0 && /[$(@{[]/.test(i.slice(l + 1))) return !0;
      }
    }
  }
  return !1;
}

var G = Object.assign(Object.create(null), {
  "get-childitem": {
    safeFlags: [ "-Path", "-LiteralPath", "-Filter", "-Include", "-Exclude", "-Recurse", "-Depth", "-Name", "-Force", "-Attributes", "-Directory", "-File", "-Hidden", "-ReadOnly", "-System" ]
  },
  "get-content": {
    safeFlags: [ "-Path", "-LiteralPath", "-TotalCount", "-Head", "-Tail", "-Raw", "-Encoding", "-Delimiter", "-ReadCount" ]
  },
  "get-item": {
    safeFlags: [ "-Path", "-LiteralPath", "-Force", "-Stream" ]
  },
  "get-itemproperty": {
    safeFlags: [ "-Path", "-LiteralPath", "-Name" ]
  },
  "test-path": {
    safeFlags: [ "-Path", "-LiteralPath", "-PathType", "-Filter", "-Include", "-Exclude", "-IsValid", "-NewerThan", "-OlderThan" ]
  },
  "resolve-path": {
    safeFlags: [ "-Path", "-LiteralPath", "-Relative" ]
  },
  "get-filehash": {
    safeFlags: [ "-Path", "-LiteralPath", "-Algorithm", "-InputStream" ]
  },
  "get-acl": {
    safeFlags: [ "-Path", "-LiteralPath", "-Audit", "-Filter", "-Include", "-Exclude" ]
  },
  "set-location": {
    safeFlags: [ "-Path", "-LiteralPath", "-PassThru", "-StackName" ]
  },
  "push-location": {
    safeFlags: [ "-Path", "-LiteralPath", "-PassThru", "-StackName" ]
  },
  "pop-location": {
    safeFlags: [ "-PassThru", "-StackName" ]
  },
  "select-string": {
    safeFlags: [ "-Path", "-LiteralPath", "-Pattern", "-InputObject", "-SimpleMatch", "-CaseSensitive", "-Quiet", "-List", "-NotMatch", "-AllMatches", "-Encoding", "-Context", "-Raw", "-NoEmphasis" ]
  },
  "convertto-json": {
    safeFlags: [ "-InputObject", "-Depth", "-Compress", "-EnumsAsStrings", "-AsArray" ]
  },
  "convertfrom-json": {
    safeFlags: [ "-InputObject", "-Depth", "-AsHashtable", "-NoEnumerate" ]
  },
  "convertto-csv": {
    safeFlags: [ "-InputObject", "-Delimiter", "-NoTypeInformation", "-NoHeader", "-UseQuotes" ]
  },
  "convertfrom-csv": {
    safeFlags: [ "-InputObject", "-Delimiter", "-Header", "-UseCulture" ]
  },
  "convertto-xml": {
    safeFlags: [ "-InputObject", "-Depth", "-As", "-NoTypeInformation" ]
  },
  "convertto-html": {
    safeFlags: [ "-InputObject", "-Property", "-Head", "-Title", "-Body", "-Pre", "-Post", "-As", "-Fragment" ]
  },
  "format-hex": {
    safeFlags: [ "-Path", "-LiteralPath", "-InputObject", "-Encoding", "-Count", "-Offset" ]
  },
  "get-member": {
    safeFlags: [ "-InputObject", "-MemberType", "-Name", "-Static", "-View", "-Force" ]
  },
  "get-unique": {
    safeFlags: [ "-InputObject", "-AsString", "-CaseInsensitive", "-OnType" ]
  },
  "compare-object": {
    safeFlags: [ "-ReferenceObject", "-DifferenceObject", "-Property", "-SyncWindow", "-CaseSensitive", "-Culture", "-ExcludeDifferent", "-IncludeEqual", "-PassThru" ]
  },
  "join-string": {
    safeFlags: [ "-InputObject", "-Property", "-Separator", "-SingleQuote", "-DoubleQuote", "-FormatString" ]
  },
  "get-random": {
    safeFlags: [ "-InputObject", "-Minimum", "-Maximum", "-Count", "-SetSeed", "-Shuffle" ]
  },
  "convert-path": {
    safeFlags: [ "-Path", "-LiteralPath" ]
  },
  "join-path": {
    safeFlags: [ "-Path", "-ChildPath", "-AdditionalChildPath" ]
  },
  "split-path": {
    safeFlags: [ "-Path", "-LiteralPath", "-Qualifier", "-NoQualifier", "-Parent", "-Leaf", "-LeafBase", "-Extension", "-IsAbsolute" ]
  },
  "get-itempropertyvalue": {
    safeFlags: [ "-Path", "-LiteralPath", "-Name" ]
  },
  "get-psprovider": {
    safeFlags: [ "-PSProvider" ]
  },
  "get-computerinfo": {
    allowAllFlags: !0
  },
  "get-host": {
    allowAllFlags: !0
  },
  "get-date": {
    safeFlags: [ "-Date", "-Format", "-UFormat", "-DisplayHint", "-AsUTC" ]
  },
  "get-location": {
    safeFlags: [ "-PSProvider", "-PSDrive", "-Stack", "-StackName" ]
  },
  "get-psdrive": {
    safeFlags: [ "-Name", "-PSProvider", "-Scope" ]
  },
  "get-module": {
    safeFlags: [ "-Name", "-ListAvailable", "-All", "-FullyQualifiedName", "-PSEdition" ]
  },
  "get-alias": {
    safeFlags: [ "-Name", "-Definition", "-Scope", "-Exclude" ]
  },
  "get-history": {
    safeFlags: [ "-Id", "-Count" ]
  },
  "get-culture": {
    allowAllFlags: !0
  },
  "get-uiculture": {
    allowAllFlags: !0
  },
  "get-timezone": {
    safeFlags: [ "-Name", "-Id", "-ListAvailable" ]
  },
  "get-uptime": {
    allowAllFlags: !0
  },
  "write-output": {
    safeFlags: [ "-InputObject", "-NoEnumerate" ],
    additionalCommandIsDangerousCallback: EB
  },
  "write-host": {
    safeFlags: [ "-Object", "-NoNewline", "-Separator", "-ForegroundColor", "-BackgroundColor" ],
    additionalCommandIsDangerousCallback: EB
  },
  "start-sleep": {
    safeFlags: [ "-Seconds", "-Milliseconds", "-Duration" ],
    additionalCommandIsDangerousCallback: EB
  },
  "format-table": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "format-list": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "format-wide": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "format-custom": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "measure-object": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "select-object": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "sort-object": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "group-object": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "where-object": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "out-string": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "out-host": {
    allowAllFlags: !0,
    additionalCommandIsDangerousCallback: EB
  },
  "get-netadapter": {
    safeFlags: [ "-Name", "-InterfaceDescription", "-InterfaceIndex", "-Physical" ]
  },
  "get-netipaddress": {
    safeFlags: [ "-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-Type" ]
  },
  "get-netroute": {
    safeFlags: [ "-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-DestinationPrefix" ]
  },
  "get-dnsclient": {
    safeFlags: [ "-InterfaceIndex", "-InterfaceAlias" ]
  },
  "get-winevent": {
    safeFlags: [ "-LogName", "-ListLog", "-ListProvider", "-ProviderName", "-Path", "-MaxEvents", "-FilterXPath", "-Force", "-Oldest" ]
  },
  git: {},
  gh: {},
  docker: {},
  ipconfig: {
    safeFlags: [ "/all", "/allcompartments" ],
    additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some(n => !n.startsWith("/") && !n.startsWith("-"))
  },
  netstat: {
    safeFlags: [ "-a", "-b", "-e", "-f", "-n", "-o", "-p", "-q", "-r", "-s", "-t", "-x", "-y" ]
  },
  systeminfo: {
    safeFlags: [ "/FO", "/NH" ]
  },
  tasklist: {
    safeFlags: [ "/M", "/SVC", "/V", "/FI", "/FO", "/NH" ]
  },
  "where.exe": {
    allowAllFlags: !0
  },
  hostname: {
    safeFlags: [ "-a", "-d", "-f", "-i", "-I", "-s", "-y", "-A" ],
    additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some(n => !n.startsWith("-"))
  },
  whoami: {
    safeFlags: [ "/user", "/groups", "/claims", "/priv", "/logonid", "/all", "/fo", "/nh" ]
  },
  ver: {
    allowAllFlags: !0
  },
  arp: {
    safeFlags: [ "-a", "-g", "-v", "-n" ],
    additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some(n => !n.startsWith("-"))
  },
  route: {
    safeFlags: [ "print", "PRINT", "-4", "-6" ],
    additionalCommandIsDangerousCallback: (e, t) => {
      if (!t) return !0;
      return t.args.find(r => !r.startsWith("-"))?.toLowerCase() !== "print";
    }
  },
  getmac: {
    safeFlags: [ "/FO", "/NH", "/V" ]
  },
  tree: {
    safeFlags: [ "/F", "/A", "/Q", "/L" ]
  },
  findstr: {
    safeFlags: [ "/B", "/E", "/L", "/R", "/S", "/I", "/X", "/V", "/N", "/M", "/O", "/P", "/C", "/G", "/D", "/A" ]
  },
  dotnet: {}
}), he = new Set([ "out-null" ]), Se = new Set([ "format-table", "format-list", "format-wide", "format-custom", "measure-object", "select-object", "sort-object", "group-object", "where-object", "out-string", "out-host" ]), Ce = new Set([ "where.exe" ]), Ee = new Set([ "git", "gh", "docker", "dotnet" ]), Pe = [ "", ".exe", ".bat", ".cmd", ".com", ".ps1", ".vbs", ".js", ".wsf", ".vbe", ".jse", ".wsh", ".msc", ".cpl" ];

class Y {
  listByPathext=new Map;
  regexByPathext=new Map;
  list() {
    let e = a.PATHEXT ?? "", t = this.listByPathext.get(e);
    if (t === void 0) {
      let n = new Set(Pe);
      for (let r of e.split(";").slice(0, 64)) {
        let o = r.trim().toLowerCase();
        if (o.startsWith(".") && o.length <= 16) n.add(o);
      }
      t = [ ...n ], this.listByPathext.set(e, t);
    }
    return t;
  }
  regex() {
    let e = a.PATHEXT ?? "", t = this.regexByPathext.get(e);
    if (t === void 0) {
      let n = this.list().filter(r => r !== "").map(r => dl(r.slice(1)));
      t = new RegExp(`\\.(${n.join("|")})$`, "i"), this.regexByPathext.set(e, t);
    }
    return t;
  }
}

var Z = new Y;

function Ae() {
  return Z.list();
}

function be() {
  return Z.regex();
}

function grr(e) {
  let t = new Set(hrr(e).map(n => n.stem));
  return t.delete(""), Array.from(t);
}

function hrr(e) {
  let t = be(), n = new Set, r = [];
  for (let o of [ s => s, J$, Z6, Pne ]) {
    let s = xe(e, o);
    if (n.has(s)) continue;
    n.add(s), r.push({
      base: s,
      stem: s.replace(t, "")
    });
  }
  return r;
}

function xe(e, t) {
  let r = t(e).replace(/^[A-Za-z]:(?![\\/])/, ""), o = [];
  for (let s of r.split(/[\\/]+/)) {
    let c = pz(s.replace(/:.*$/, ""));
    if (c === "." || c === "") continue;
    if (c === "..") {
      if (o.length > 0 && o.at(-1) !== "..") o.pop(); else o.push("..");
      continue;
    }
    o.push(c);
  }
  return (o.at(-1) ?? "").toLowerCase();
}

function we(e) {
  if (O() !== "windows") return null;
  let t = le(), n = new Set;
  for (let {base: r, stem: o} of hrr(e)) for (let s of r === o ? [ o ] : [ o, r ]) {
    if (s === "" || n.has(s)) continue;
    n.add(s);
    for (let c of Ae()) {
      let i = me(t, s + c);
      try {
        if (de(i).isFile()) return s + c;
      } catch {}
    }
  }
  return null;
}

var Fe = /\.(exe|cmd|bat|com)$/;

function Fb(e) {
  let t = e.toLowerCase();
  if (!t.includes("\\") && !t.includes("/")) t = t.replace(Fe, "");
  let n = ore[t];
  if (n) return n.toLowerCase();
  return t;
}

function Gkn(e) {
  let t = e.toLowerCase();
  if (t === "cd.." || t === "cd\\" || t === "cd/" || t === "cd~" || /^[a-z]:$/.test(t)) return !0;
  let n = Fb(e);
  return n === "set-location" || n === "push-location" || n === "pop-location" || n === "new-psdrive" || O() === "windows" && (n === "ndr" || n === "mount");
}

function Bvt(e) {
  let t = Fb(e);
  return he.has(t);
}

function h6r(e, t) {
  let n = Fb(e.name);
  if (!Se.has(n)) return !1;
  return Utt(e, t);
}

function y6r(e) {
  if (e.statementType !== "PipelineAst") return !1;
  if (e.commands.length === 0) return !1;
  for (let t of e.commands) if (t.elementType !== "CommandAst") return !1;
  return !0;
}

function Ie(e) {
  let t = e.toLowerCase(), n = G[t];
  if (n) return n;
  let r = Fb(t);
  if (r !== t) return G[r];
  return;
}

function FJo(e) {
  let t = e.trim();
  if (!t) return !1;
  if (/\$\(/.test(t)) return !0;
  if (/(?:^|[^\w.])@\w+/.test(t)) return !0;
  if (/\.\w+\s*\(/.test(t)) return !0;
  if (/\$\w+\s*[+\-*/]?=/.test(t)) return !0;
  if (/--%/.test(t)) return !0;
  if (/\\\\/.test(t) || /(?<!:)\/\//.test(t)) return !0;
  if (/::/.test(t)) return !0;
  return !1;
}

function jvt(e, t) {
  if (!e.trim()) return !1;
  if (!t) return !1;
  if (!t.valid) return !1;
  let r = mQ(t);
  if (r.hasScriptBlocks || r.hasSubExpressions || r.hasExpandableStrings || r.hasSplatting || r.hasMemberInvocations || r.hasAssignments || r.hasStopParsing) return !1;
  let o = CRn(t);
  if (o.length === 0) return !1;
  if (o.reduce((c, i) => c + i.commands.length, 0) > 1) {
    if (o.some(i => i.commands.some(l => Gkn(l.name)))) return !1;
  }
  for (let c of o) {
    if (!c || c.commands.length === 0) return !1;
    if (c.redirections.length > 0) {
      if (c.redirections.some(u => !u.isMerging && !qkt(u.target))) return !1;
    }
    let i = c.commands[0];
    if (!i) return !1;
    if (!Utt(i, e)) return !1;
    for (let l = 1; l < c.commands.length; l++) {
      let u = c.commands[l];
      if (!u || u.nameType === "application") return !1;
      if (Bvt(u.name) && u.args.length === 0) continue;
      if (!Utt(u, e)) return !1;
    }
    if (c.nestedCommands && c.nestedCommands.length > 0) return !1;
  }
  return !0;
}

var A = (e, t = !1) => t && e.length > 1 && e[1] === "-" ? e : e.replace(/(?!^)[-']/g, "");

function Wvt(e, t, n = "full") {
  let r = n === "full" ? N : U;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (!x4.has(s[0])) continue;
    if (t !== void 0 && t[o + 1] !== void 0 && t[o + 1] !== "Parameter") continue;
    let c = s[0] === "-" ? s : "-" + s.slice(1), i = c.indexOf(":"), l = (i > 0 ? c.slice(0, i) : c).toLowerCase(), u = null;
    if (!r(l) && !r(A(l, n === "exact"))) {
      let d = NA(l.replace(/`[\r\n]+\s*/g, "")).toLowerCase(), S = d.indexOf(":", 1), p = S > 0 ? d.slice(0, S) : d;
      if (!r(p) && !r(A(p, n === "exact")) && !/[^\x20-\x7e]/.test(d)) continue;
      if (S > 0) {
        let C = d.slice(S + 1);
        u = C.trim() !== "" ? C : e[o + 1] ?? "";
      }
    }
    let f = i > 0 ? c.slice(i + 1) : null, m = (u ?? (f !== null && f.trim() !== "" ? f : e[o + 1] ?? "")).toLowerCase().replace(/^['"]|['"]$/g, "").trim();
    if (m.length > 0 && !D.has(m)) return !0;
  }
  return !1;
}

function zvt(e, t, n = "full") {
  let r = n === "full" ? k : j, o = s => r(s) || n === "full" && (s.endsWith("variable") || V(s));
  for (let s = 0; s < e.length; s++) {
    let c = e[s];
    if (!x4.has(c[0])) continue;
    if (t !== void 0 && t[s + 1] !== void 0 && t[s + 1] !== "Parameter") continue;
    let i = c[0] === "-" ? c : "-" + c.slice(1), l = _(i), u = (l !== null ? i.slice(0, l.colonIdx) : i).toLowerCase();
    if (!o(u) && !o(A(u, n === "exact"))) {
      let p = NA(u.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
      if (p !== u && (o(p) || o(A(p, n === "exact")))) return !0;
      let C = p.indexOf(":", 1);
      if (C > 0 && o(A(p.slice(0, C), n === "exact"))) return !0;
      if (/[^\x20-\x7e]/.test(p)) return !0;
      continue;
    }
    let f;
    if (l !== null) {
      if (l.isHereString) return !0;
      if (l.post.includes("$") || l.post.includes("`")) return !0;
      f = l.postResolved !== "" ? l.postResolved : e[s + 1] ?? "";
    } else f = e[s + 1] ?? "";
    if (f.includes("$") || f.includes("`")) return !0;
    let g = J$(p4(f)).toLowerCase().trim();
    if (g.length === 0) continue;
    let m = g.startsWith("+") ? g.slice(1) : g, d = m.lastIndexOf(":"), S = m;
    if (d >= 0) {
      let p = m.slice(0, d);
      if (!W.has(p) && !/^[0-9]+$/.test(p)) return !0;
      S = m.slice(d + 1);
    }
    if (!/^[a-z0-9_]+$/.test(S)) return !0;
    if (M.has(S)) return !0;
  }
  return !1;
}

function h(e) {
  return e.includes('"') || /[\s\u0085\u180e]/.test(e) && (e.match(/\\+$/)?.[0].length ?? 0) % 2 === 1;
}

function _(e) {
  if (e.length === 0 || !(x4.has(e[0]) || e[0] === "/")) return null;
  let t = e.indexOf(":", 1);
  if (t <= 0) return null;
  let n = p4(e.slice(t + 1)), r = p4(n.replace(/`[\r\n]+\s*/g, "")), o = /^@['"\u2018-\u201F]/.test(n) || /^@['"\u2018-\u201F]/.test(r);
  return {
    colonIdx: t,
    post: n,
    postResolved: r,
    isHereString: o
  };
}

function v(e, t = !0) {
  let n = e.replace(/`[\r\n]+\s*/g, "");
  if (h(e) || h(E(n))) return !0;
  if (t) {
    let r = _(e);
    if (r !== null) {
      let {post: o, postResolved: s} = r;
      if (r.isHereString) return !0;
      let c = J$(s), i = J$(o), l = Z6(s), u = Z6(o), f = Pne(s), g = Pne(o);
      if (h(c) || h(i) || h(E(c)) || h(l) || h(u) || h(E(l)) || h(f) || h(g) || h(E(f))) return !0;
    }
  }
  return !1;
}

var _e = "tengu_hazy_peach";

function _6r() {
  return Fl(_e, {
    safe: !0
  });
}

function Utt(e, t) {
  if (e.nameType === "application") {
    let i = _6r() ? zkn : /\s/, l = e.text.split(i, 1)[0]?.toLowerCase() ?? "";
    if (!Ce.has(l)) return !1;
  }
  let n = Ie(e.name);
  if (!n) return !1;
  if (n.regex && !n.regex.test(t)) return !1;
  if (n.additionalCommandIsDangerousCallback?.(t, e)) return !1;
  if (!e.elementTypes) return !1;
  for (let i = 1; i < e.elementTypes.length; i++) {
    let l = e.elementTypes[i];
    if (l !== "StringConstant" && l !== "Parameter") {
      if (!/[$(@{[]/.test(e.args[i - 1] ?? "")) continue;
      return !1;
    }
    if (l === "Parameter") {
      let u = e.children?.[i - 1];
      if (u) {
        if (u.some(f => f.type !== "StringConstant")) return !1;
      } else {
        let f = e.args[i - 1] ?? "", g = f.indexOf(":");
        if (g > 0 && /[$(@{[]/.test(f.slice(g + 1))) return !1;
      }
    }
  }
  let r = Fb(e.name), o = Ee.has(r), s = r.includes("-"), c = e.nameType !== "cmdlet";
  if (O() === "windows") {
    if (c || o) {
      for (let i of e.args) if (v(i, !s || e.nameType === "application")) return !1;
    }
    if (we(e.name) !== null) return !1;
  }
  if (!s || e.nameType === "application") for (let i = 1; i < e.elementTypes.length; i++) {
    let l = e.elementTypes[i];
    if (l !== "StringConstant" && l !== "Parameter") return !1;
    if (l === "Parameter" && !o && (e.args[i - 1] ?? "").includes(":")) return !1;
  }
  if (o) {
    let i = null;
    for (let l = 1; l < e.elementTypes.length; l++) {
      let u = e.args[l - 1] ?? "";
      if (e.elementTypes[l] === "Parameter") {
        let f = _(u);
        if (f !== null) {
          if (f.isHereString) return !1;
          i ??= e.args.slice(0, l - 1), i.push(u.slice(0, f.colonIdx), NA(J$(f.postResolved)));
          continue;
        }
      }
      i?.push(u);
    }
    if (i !== null && !Q(r, i)) return !1;
    return Q(r, e.args);
  }
  if (s && Wvt(e.args, e.elementTypes)) return !1;
  if (s && zvt(e.args, e.elementTypes)) return !1;
  if (n.allowAllFlags) return !0;
  if (!n.safeFlags || n.safeFlags.length === 0) return !e.args.some((l, u) => {
    if (s) return _Ae(l, e.elementTypes?.[u + 1]);
    return l.startsWith("-") || !1;
  });
  for (let i = 0; i < e.args.length; i++) {
    let l = e.args[i];
    if (s ? _Ae(l, e.elementTypes?.[i + 1]) : l.startsWith("-") || !1) {
      let f = s ? "-" + l.slice(1) : l;
      if (s || l.startsWith("/")) {
        let d = f.indexOf(":");
        if (d > 0) f = f.substring(0, d);
      }
      let g = f.toLowerCase();
      if (s && T.has(g)) continue;
      if (!(s ? n.safeFlags.some(d => d.toLowerCase() === g) : n.safeFlags.includes(f))) return !1;
    }
  }
  return !0;
}

function Q(e, t) {
  for (let n of t) if (n.length > 0 && n[0] !== "-" && x4.has(n[0])) return !1;
  switch (e) {
   case "git":
    return Re(t);

   case "gh":
    return ye(t);

   case "docker":
    return Oe(t);

   case "dotnet":
    return Ne(t);

   default:
    return !1;
  }
}

var ve = new Set([ "-c", "-C", "--exec-path", "--config-env", "--git-dir", "--work-tree", "--bare", "--attr-source", "--help", "-h", "--shallow-file" ]), J = new Set([ "-c", "-C", "--exec-path", "--config-env", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--shallow-file" ]), Le = [ "-c", "-C" ];

function z(e) {
  return !e.includes("=") && J.has(e);
}

function ee(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n] ?? "", o = t[n] ?? "";
    if (o.includes("\0") || y(r).includes("\0")) return !1;
    if (W5e(o) !== W5e(r) || o === "--" !== (r === "--")) return !1;
    if (W5e(r) && r !== o && z(r) !== z(o)) return !1;
  }
  return !0;
}

function L(e) {
  return e.map(t => hAe(NA(t.replace(/`[\r\n]+\s*/g, ""))));
}

function Re(e) {
  let t = L(e);
  if (!ee(e, t)) return !1;
  return X(e) && X(t);
}

function X(e) {
  if (e.length === 0) return !0;
  if (O() === "windows") {
    for (let u of e) if (v(u)) return !1;
  }
  for (let u of e) if (u.includes("$")) return !1;
  let t = 0;
  while (t < e.length) {
    let u = e[t];
    if (!u || !u.startsWith("-")) break;
    for (let m of Le) if (u.length > m.length && u.startsWith(m) && (m === "-C" || u[m.length] !== "-")) return !1;
    let f = u.includes("="), g = f ? nt(u, "=") : u;
    if (ve.has(g)) return !1;
    if (!f && J.has(g)) t += 2; else t++;
  }
  if (t >= e.length) return !0;
  let n = e[t]?.toLowerCase() || "", r = t + 1 < e.length ? e[t + 1]?.toLowerCase() || "" : "", o = `git ${n} ${r}`, s = `git ${n}`, c = B7t[o], i = 2;
  if (!c) c = B7t[s], i = 1;
  if (!c) return !1;
  let l = e.slice(t + i);
  if (n === "ls-remote") {
    let u = !1;
    for (let f of l) {
      if (!u && f === "--") {
        u = !0;
        continue;
      }
      if (u || f === "-" || !f.startsWith("-")) return !1;
    }
  }
  if (c.additionalCommandIsDangerousCallback && c.additionalCommandIsDangerousCallback("", l)) return !1;
  return XIt(l, 0, c, {
    commandName: "git"
  });
}

function ye(e) {
  let t = L(e);
  if (!ee(e, t)) return !1;
  return K(e) && K(t);
}

function K(e) {
  return !1;
}

var q = new Set(xFn.filter(e => /^-[^-]$/.test(e)).map(e => e[1])), Te = [ ...xFn.filter(e => e.startsWith("--")), "--tls" ];

function Oe(e) {
  if (e.length === 0) return !0;
  let t = L(e);
  if (O() === "windows") {
    for (let s of e) if (v(s)) return !1;
  }
  for (let s of t) if (s.includes("$")) return !1;
  for (let s of t) {
    if (s[0] === "-" && s[1] !== "-") for (let i = 1; i < s.length; i++) {
      let l = s[i];
      if (q.has(l)) return !1;
      if (l !== "h" && q.has(l.toLowerCase())) return !1;
    }
    let c = s.toLowerCase();
    if (Te.some(i => c.startsWith(i))) return !1;
  }
  let n = `docker ${t[0]?.toLowerCase()}`;
  if (IFn.includes(n)) return !0;
  let r = PFn[n];
  if (!r) return !1;
  let o = t.slice(1);
  if (r.additionalCommandIsDangerousCallback && r.additionalCommandIsDangerousCallback("", o)) return !1;
  return XIt(o, 0, r);
}

function Ne(e) {
  if (e.length === 0) return !1;
  for (let t of e) if (!pe.has(t.toLowerCase())) return !1;
  return !0;
}

export { jTe, p4, J$, Z6, Pne, NA, zkn, NJo, m6r, g6r, $Jo, EB, grr, hrr, Fb, Gkn, Bvt, h6r, y6r, FJo, jvt, Wvt, zvt, _6r, Utt };
