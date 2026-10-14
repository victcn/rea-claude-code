// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import * as Y from "fs";

function tSs() {
  try {
    let e = Y.readFileSync("/proc/version", {
      encoding: "utf8"
    }), t = e.match(/WSL(\d+)/i);
    if (t && t[1]) return t[1];
    if (e.toLowerCase().includes("microsoft")) return "1";
    return;
  } catch {
    return;
  }
}

function iv() {
  switch ("linux") {
   case "darwin":
    return "macos";

   case "linux":
    return "linux";

   case "win32":
    return "windows";

   default:
    return "unknown";
  }
}

import { homedir as L } from "os";

import * as S from "path";

import * as N from "fs";

function Pt(e, t) {
  if (!process.env.SRT_DEBUG) return;
  let r = t?.level || "info", n = "[SandboxDebug]";
  switch (r) {
   case "error":
    console.error(`${n} ${e}`);
    break;

   case "warn":
    console.warn(`${n} ${e}`);
    break;

   default:
    console.error(`${n} ${e}`);
  }
}

var p$n = [ ".gitconfig", ".gitmodules", ".bashrc", ".bash_profile", ".zshrc", ".zprofile", ".profile", ".ripgreprc", ".mcp.json" ], re = [ ".git", ".vscode", ".idea" ];

function f$n() {
  return [ ...re.filter(e => e !== ".git"), ".claude/commands", ".claude/agents" ];
}

function vfo(e) {
  return e.toLowerCase();
}

function ER(e, t) {
  return e === t || e.startsWith(t === "/" ? "/" : t + "/");
}

function Tlt(e, t) {
  return e !== t && ER(e, t);
}

function* Efo(e) {
  for (let t = e.lastIndexOf("/"); t > 0; t = e.lastIndexOf("/", t - 1)) yield e.slice(0, t);
  if (e !== "/") yield "/";
}

function nSs(e) {
  try {
    let t = N.realpathSync(e);
    if (t !== e) return [ e, t ];
  } catch {}
  return [ e ];
}

function KQt() {
  try {
    return process.cwd();
  } catch {
    return;
  }
}

function _5e(e) {
  let t = e?.code;
  return t === "ENOENT" || t === "ENOTDIR" || t === "ELOOP" || t === "ENAMETOOLONG";
}

function Vl(e) {
  return e.includes("*") || e.includes("?") || e.includes("[") || e.includes("]");
}

function nxe(e) {
  return e.includes("*") || e.includes("?");
}

function Alt(e) {
  return iv() === "windows" ? nxe(e) : Vl(e);
}

function iIt(e) {
  let t = e;
  if (t === null || typeof t !== "object" || typeof t.path !== "string" || t.path === "" || t.literal !== !0) throw TypeError(`A filesystem path entry must be a path, or { path, literal: true }; got ${JSON.stringify(e) ?? String(e)}`);
  return t.path;
}

function y0(e) {
  if (/^\\\\\?\\unc\\/i.test(e)) return "\\\\" + e.slice(8);
  if (e.startsWith("\\\\?\\")) return e.slice(4);
  return e;
}

function qQt(e) {
  let t = S.win32.toNamespacedPath(e);
  return /^[\\/]{2}[?.][\\/]unc[\\/]/i.test(t);
}

function am(e) {
  return e.replace(/\/\*\*$/, "") || "/";
}

function YQt(e, t) {
  let r = S.normalize(e), n = S.normalize(t);
  if (n === r) return !1;
  if (r.startsWith("/tmp/") && n === "/private" + r) return !1;
  if (r.startsWith("/var/") && n === "/private" + r) return !1;
  if (n === "/") return !0;
  if (n.split("/").filter(Boolean).length <= 1) return !0;
  if (r.startsWith(n + "/")) return !0;
  let c = r;
  if (r.startsWith("/tmp/")) c = "/private" + r; else if (r.startsWith("/var/")) c = "/private" + r;
  if (c !== r && c.startsWith(n + "/")) return !0;
  let i = n.startsWith(r + "/"), s = c !== r && n.startsWith(c + "/");
  if (!(c !== r && n === c) && !i && !s) return !0;
  return !1;
}

function aIt(e) {
  if (e === "~") return L();
  if (e.startsWith("~/")) return L() + e.slice(1);
  return e;
}

function Clt(e) {
  let t = L(), r = /^[A-Za-z]:/.test(t) ? t.slice(0, 2) : "", n = r ? t.slice(2) : t;
  return e.replace(/%USERPROFILE%/gi, t).replace(/%HOMEDRIVE%/gi, r).replace(/%HOMEPATH%/gi, n);
}

function kfo(e) {
  return e.replace(/\/{2,}/g, "/").replace(/\/\.(?=\/)/g, "");
}

function U(e) {
  if (iv() !== "windows" && /(?:^|\/)\.\.(?:\/|$)/.test(e)) Pt(`[Sandbox] "${e}" could not be resolved and still contains a ".." component, so a rule spelled this way may not match.`, {
    level: "warn"
  });
  return e;
}

function Yb(e, t) {
  let r = o => !t?.literal && Alt(o);
  if (iv() === "windows") {
    if (e = y0(Clt(e)), /^[a-z]:/.test(e)) e = e[0].toUpperCase() + e.slice(1);
    if (qQt(e) && !r(e)) return S.win32.normalize(e);
  }
  if (iv() !== "windows" && e.endsWith("/") && !r(e)) e = e.replace(/\/+$/, "") || "/";
  let n = aIt(e);
  if (n === e && !S.isAbsolute(e)) n = S.resolve(process.cwd(), e);
  if (iv() !== "windows") n = kfo(n);
  if (r(n)) {
    let o = iv() === "windows" ? /[*?]/ : /[*?[\]]/, c = n.split(o)[0];
    if (c && c !== "/") {
      let i = c.endsWith("/") ? c.slice(0, -1) : S.dirname(c);
      try {
        let s = N.realpathSync(i);
        if (!YQt(i, s)) {
          let f = n.slice(i.length);
          return U(s + f);
        }
      } catch {}
    }
    return U(n);
  }
  if (iv() !== "windows" && n !== "") n = n.replace(/\/\.$/, "").replace(/\/+$/, "") || "/";
  try {
    let o = N.realpathSync(n);
    if (!YQt(n, o)) n = o;
  } catch {}
  return U(n);
}

var oe = [ "/dev/stdout", "/dev/stderr", "/dev/null", "/dev/tty", "/dev/dtracehelper", "/dev/autofs_nowait", "/tmp/claude", "/private/tmp/claude" ], j = [ ".npm/_logs", ".claude/debug" ];

function _0(e) {
  let t = L(), r = !e || e.denyRead.length === 0 ? j : se(t, e.denyRead, e.allowRead);
  return [ ...oe, ...r.map(n => S.join(t, n)) ];
}

function se(e, t, r = []) {
  let n = [ ...new Set([ e, Yb(e, {
    literal: !0
  }) ]) ], o = t.map(i => ie(i)), c = r.flatMap(i => {
    if (typeof i !== "string") return [ iIt(i) ];
    let s = am(i);
    return Alt(s) ? [] : [ s ];
  }).map(i => Yb(i, {
    literal: !0
  }));
  return j.filter(i => {
    let s = n.map(f => S.join(f, i));
    return !o.some(f => s.some(f) && !c.some(a => f(a) && s.some(O => ER(O, a))));
  });
}

function ie(e) {
  if (typeof e !== "string") {
    let n = Yb(iIt(e), {
      literal: !0
    });
    return o => ER(o, n);
  }
  let t = am(e);
  if (Alt(t)) try {
    let n = new RegExp(Plt(Yb(t)));
    return o => n.test(o);
  } catch {}
  let r = Yb(t, {
    literal: !0
  });
  return n => ER(n, r);
}

var ce = [ "NODE_EXTRA_CA_CERTS", "SSL_CERT_FILE", "CURL_CA_BUNDLE", "REQUESTS_CA_BUNDLE", "PIP_CERT", "GIT_SSL_CAINFO", "AWS_CA_BUNDLE", "CARGO_HTTP_CAINFO", "DENO_CERT", "CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE", "NIX_SSL_CERT_FILE" ];

function b5e(e, t, r, n, o, c) {
  let i = fe(c), s = i === V$e ? i : encodeURIComponent(i), f = n ? `${s}:${n}@` : "", a = [ "SANDBOX_RUNTIME=1" ];
  if (!o) {
    let g = process.env.CLAUDE_CODE_TMPDIR || process.env.CLAUDE_TMPDIR || "/tmp/claude";
    a.push(`TMPDIR=${g}`);
  }
  if (r) for (let g of ce) a.push(`${g}=${r}`);
  if (!e && !t) return a;
  let O = [ "localhost", "127.0.0.1", "::1", "169.254.0.0/16", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16" ].join(",");
  if (a.push(`NO_PROXY=${O}`), a.push(`no_proxy=${O}`), e) {
    if (a.push(`HTTP_PROXY=http://${f}localhost:${e}`), a.push(`HTTPS_PROXY=http://${f}localhost:${e}`), 
    a.push(`http_proxy=http://${f}localhost:${e}`), a.push(`https_proxy=http://${f}localhost:${e}`), 
    n) a.push("GIT_CONFIG_PARAMETERS='http.proxyAuthMethod=basic'");
  }
  let x = e ? `http://${f}localhost:${e}` : `socks5h://${f}localhost:${t}`;
  if (a.push(`ALL_PROXY=${x}`), a.push(`all_proxy=${x}`), a.push(`GRPC_PROXY=${x}`), 
  a.push(`grpc_proxy=${x}`), t) {
    let R = iv();
    if (R === "macos") a.push(`GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='nc -X 5 -x localhost:${t} %h %p'`); else if (R === "linux" && e) {
      let v = n ? `,proxyauth=${i}:${n}` : "";
      a.push(`GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='socat - PROXY:localhost:%h:%p,proxyport=${e}${v}'`);
    }
    if (a.push(`FTP_PROXY=socks5h://${f}localhost:${t}`), a.push(`ftp_proxy=socks5h://${f}localhost:${t}`), 
    a.push(`RSYNC_PROXY=localhost:${t}`), a.push(`DOCKER_HTTP_PROXY=http://${f}localhost:${e || t}`), 
    a.push(`DOCKER_HTTPS_PROXY=http://${f}localhost:${e || t}`), e) {
      if (a.push("CLOUDSDK_PROXY_TYPE=http"), a.push("CLOUDSDK_PROXY_ADDRESS=localhost"), 
      a.push(`CLOUDSDK_PROXY_PORT=${e}`), n) a.push(`CLOUDSDK_PROXY_USERNAME=${i}`), a.push(`CLOUDSDK_PROXY_PASSWORD=${n}`);
    }
  }
  return a;
}

var ae = 8;

function dSr(e) {
  if (e.baseEnv?.GIT_CONFIG_COUNT === "0") return {};
  let t = Number.parseInt(e.baseEnv?.GIT_CONFIG_COUNT ?? "", 10), r = Number.isFinite(t) && t >= 0 ? t : 0, n = r, o = {}, c = (s, f) => {
    o[`GIT_CONFIG_KEY_${n}`] = s, o[`GIT_CONFIG_VALUE_${n}`] = f, n++;
  }, i = [ ...new Set(e.safeDirs.filter(s => !!s).map(s => {
    let a = s.replace(/\\/g, "/").replace(/\/+$/, "");
    if (a === "" || /^[A-Za-z]:$/.test(a)) return `${a}/`;
    return a;
  })) ];
  if (i.length > ae) c("safe.directory", "*"); else for (let s of i) c("safe.directory", s), 
  c("safe.directory", s.endsWith("/") ? `${s}*` : `${s}/*`);
  if (e.schannelCa) c("http.schannelUseSSLCAInfo", "true"), c("http.schannelCheckRevoke", "false");
  if (n === r) return {};
  return o.GIT_CONFIG_COUNT = String(n), o;
}

function cSr(e) {
  let t = {
    GIT_CONFIG_COUNT: process.env.GIT_CONFIG_COUNT
  };
  for (let r of e.unsetEnvVars ?? []) delete t[r];
  return Object.assign(t, e.setEnvVars ?? {}), dSr({
    safeDirs: e.safeDirs,
    baseEnv: t
  });
}

var Tfo = 100;

function Rlt(e, t) {
  return !t ? e : t;
}

function vue(e) {
  let t = e.slice(0, Tfo);
  return Buffer.from(t).toString("base64");
}

function G$e(e) {
  return Buffer.from(e, "base64").toString("utf8");
}

var V$e = "srt", K = 255, Afo = K - Buffer.byteLength(`${V$e}.`);

function fe(e) {
  if (!e) return V$e;
  let t = `${V$e}.${e}`;
  return Buffer.byteLength(t) <= K ? t : V$e;
}

function m$n(e) {
  if (!e || !e.startsWith(`${V$e}.`)) return;
  let t = e.slice(V$e.length + 1);
  if (!t || Buffer.byteLength(t) > Afo) return;
  return t;
}

function xlt(e) {
  return "^" + e.replace(/[.^$+{}()|\\]/g, "\\$&").replace(/\[([^\]]*?)$/g, "\\[$1").replace(/\*\*\//g, "__GLOBSTAR_SLASH__").replace(/\*\*/g, "__GLOBSTAR__").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]").replace(/__GLOBSTAR_SLASH__/g, "(.*/)?").replace(/__GLOBSTAR__/g, ".*") + "$";
}

function Plt(e) {
  return xlt(e).slice(0, -1) + "(/.*)?$";
}

function XQt(e) {
  for (;;) {
    let t = e.next();
    if (t.done) return t.value;
  }
}

var ue = 10;

async function rSs(e, t) {
  t?.throwIfAborted();
  let r = performance.now();
  for (;;) {
    let n = e.next();
    if (!n.done && performance.now() - r < ue) continue;
    if (!n.done) await new Promise(o => setImmediate(o));
    if (t?.throwIfAborted(), n.done) return n.value;
    r = performance.now();
  }
}

function g$n(e, t = {}) {
  return de(e, t).matches;
}

function z(e, t) {
  if (e.includes("__GLOBSTAR")) return;
  let r = i => xlt(i).slice(1, -1), n = [], o = 0, c = /(\[[^\]]*\])|(\*+)(\/?)|(\/)|([^[*/]+|\[)/g;
  for (let i of e.matchAll(c)) {
    let [s, f, a, O, x] = i;
    if (f !== void 0) {
      if (/[*?]/.test(f)) return;
      let g = r(f);
      n.push(new RegExp(`^${g}$`, t).test("/") ? {
        source: g,
        canBeSeparator: !0
      } : {
        source: g
      });
    } else if (a !== void 0) {
      let g = O === "/" && a.length >= 2, R = a.length - (g ? 2 : 0);
      if (R >= 2) n.push("any"); else if (R === 1) n.push({
        source: "[^/]*"
      });
      if (g) n.push("anyDirs"); else if (O === "/") n.push("/");
    } else if (x !== void 0) n.push("/"); else {
      if (s === "[" && o++ > 0) return;
      n.push({
        source: r(s)
      });
    }
  }
  return n.filter((i, s) => i !== "anyDirs" || n[s + 1] !== "anyDirs" && n[s + 1] !== "any");
}

function le(e, t) {
  let r = new RegExp(xlt(e), t), n = am(e), o = n !== e ? new RegExp(xlt(n), t) : void 0, c = {
    splits: !1,
    start: [ 0 ],
    next: () => [ 0 ],
    matches: (h, d, u) => r.test(u),
    matchesDirectoryForm: (h, d, u) => o?.test(u) === !0
  }, i = [], s = "[^/]*", f = h => {
    let d = new Map, u = l => i.push({
      then: l
    }) - 1, m = (l, _) => {
      let E = `${l}${_ ? "*" : ""}`, A = d.get(E);
      if (A !== void 0) return A;
      if (!_ && h[l] === "anyDirs") {
        let y = u(void 0);
        return d.set(E, y), i[y].then = m(l + 1, !1), y;
      }
      if (!_ && h[l] === "any" && l === h.length - 1) {
        let y = u(void 0);
        return d.set(E, y), y;
      }
      let p = {
        edges: []
      }, w = i.push(p) - 1;
      d.set(E, w);
      let D = (y, C) => {
        p.edges.push({
          regex: new RegExp(`^${y}$`, t),
          to: C
        });
      }, b = _ ? "[^/]*" : "";
      for (let y = l; ;y++) {
        let C = h[y];
        if (C === void 0) {
          D(b, void 0);
          break;
        }
        if (C === "/") {
          D(b, m(y + 1, !1));
          break;
        }
        if (C === "any") D(b + "[^/]*", u(m(y + 1, !0))), b += "[^/]*"; else if (C === "anyDirs") D(b + "[^/]*", u(m(y + 1, !1))); else if (C.canBeSeparator) D(b, m(y + 1, !1)), 
        b += `(?!/)${C.source}`; else b += C.source;
      }
      return w;
    };
    return m(0, !1);
  }, a, O;
  try {
    let h = z(e, t), d = o ? z(n, t) : [];
    if (h === void 0 || d === void 0) return c;
    if (a = [ f(h) ], O = i.length, o) a.push(f(d));
  } catch {
    return c;
  }
  let x = (h, d) => {
    for (let u = d; u !== void 0 && !h.has(u); ) {
      h.add(u);
      let m = i[u];
      u = "then" in m ? m.then : void 0;
    }
  }, g = h => [ ...h ].sort((d, u) => d - u), R = (h, d, u) => h.some(m => {
    if (m >= O !== u) return !1;
    let l = i[m];
    return "then" in l ? l.then === void 0 : l.edges.some(_ => _.to === void 0 && _.regex.test(d));
  }), v = new Set;
  for (let h of a) x(v, h);
  return {
    splits: !0,
    start: g(v),
    next: (h, d) => {
      let u = new Set;
      for (let m of h) {
        let l = i[m];
        if ("then" in l) x(u, m); else for (let _ of l.edges) if (_.to !== void 0 && _.regex.test(d)) x(u, _.to);
      }
      return g(u);
    },
    matches: (h, d) => R(h, d, !1),
    matchesDirectoryForm: (h, d) => R(h, d, !0)
  };
}

function Cfo(e) {
  let t = e.split(/[*?[\]]/)[0];
  if (!t) return "";
  return t.endsWith("/") ? t.slice(0, -1) : S.dirname(t);
}

function lIt(e) {
  return e;
}

function de(e, t = {}) {
  return XQt(h$n(e, t));
}

function* h$n(e, t = {}) {
  let r = {
    baseLocation: "",
    matches: [],
    directoryMatches: [],
    symlinks: new Set,
    uninspectableLinks: new Set,
    unlisted: [],
    realOf: new Map
  }, n = t.anchor === void 0 ? void 0 : lIt(t.anchor), o = n === void 0 ? lIt(Yb(e)) : lIt(e).slice(n.length);
  if (n !== void 0 && (!/[^/]/.test(n) || !lIt(e).startsWith(n) || !(n.endsWith("/") || /^(\/|$)/.test(o)))) throw TypeError(`Glob pattern ${e} does not lie beneath the anchor ${t.anchor}`);
  let c = Cfo(o), i = c === "/" ? "" : c, s = n === void 0 ? c : n + i;
  if (s === "" || s === "/") return Pt(`[Sandbox] Glob pattern has no literal directory to start from, skipping: ${e}`, {
    level: "warn"
  }), r;
  let f = t.caseInsensitive ? "is" : "s", a = le(o, f);
  if (t.followSymlinkedDirectories && !a.splits) Pt(`[Sandbox] Glob pattern ${e} cannot be followed one path component at a time, so it is matched against real paths only and not through symlinked directories`, {
    level: "warn"
  });
  let O = new Map, x = t.listings ?? new Map, g = [], R = (u, m, l) => {
    try {
      return l(u);
    } catch (_) {
      if (m === u) throw _;
      return l(m);
    }
  }, v = new Map, h = (u, m) => {
    let l = v.get(m);
    if (l !== void 0) return l;
    let _;
    try {
      _ = R(m, u, E => ({
        isDirectory: N.statSync(E).isDirectory(),
        real: N.realpathSync(E)
      }));
    } catch (E) {
      _ = _5e(E) ? "absent" : "uninspectable";
    }
    return v.set(m, _), _;
  }, d = s;
  try {
    d = N.realpathSync(s);
  } catch {}
  r.baseLocation = d, g.push({
    dir: s,
    real: d,
    short: s.length < d.length ? s : d,
    positions: (n === void 0 ? s : i).split("/").reduce(a.next, a.start)
  });
  for (let u = g.pop(); u !== void 0; u = g.pop()) {
    let {dir: m, real: l} = u, _ = O.get(l);
    if (_ === void 0) O.set(l, _ = new Set);
    let E = u.positions.filter(p => !_.has(p));
    if (E.length === 0) continue;
    yield;
    for (let p of E) _.add(p);
    let A;
    try {
      let p = x.get(l);
      if (p instanceof Error) throw p;
      A = p ?? R(l, u.short, w => N.readdirSync(w, {
        withFileTypes: !0
      })), x.set(l, A);
    } catch (p) {
      let w = p?.code;
      if (Pt(`[Sandbox] Error listing ${m} for glob pattern ${e}: ${p}`, {
        level: w === "ENOENT" ? "info" : "warn"
      }), w !== "ENOENT") {
        if (x.set(l, p instanceof Error ? p : Error(String(p))), r.unlisted.push(m), l !== m) r.realOf.set(m, l);
      }
      continue;
    }
    for (let p of A) {
      if (a.splits && !p.isDirectory() && !p.isSymbolicLink() && !a.matches(E, p.name, "")) continue;
      let w = S.join(m, p.name), D = S.join(l, p.name), b = lIt(w), y = n !== void 0 && b.startsWith(n) ? b.slice(n.length) : b, C = a.matches(E, p.name, y);
      if (C) r.matches.push(w);
      if (p.isDirectory()) {
        let k = a.next(E, p.name), X = t.withDirectoryForm === !0 && a.matchesDirectoryForm(E, p.name, y);
        if (X) r.directoryMatches.push(w);
        if ((C || X) && D !== w) r.realOf.set(w, D);
        if (k.length > 0) g.push({
          dir: w,
          real: D,
          short: S.join(u.short, p.name),
          positions: k
        });
        continue;
      }
      if (!p.isSymbolicLink()) {
        if (C && D !== w) r.realOf.set(w, D);
        continue;
      }
      if (r.symlinks.add(w), !t.followSymlinkedDirectories) continue;
      let P = t.withDirectoryForm === !0 && a.matchesDirectoryForm(E, p.name, y), W = a.splits ? a.next(E, p.name) : [];
      if (!C && !P && W.length === 0) continue;
      let G = S.join(u.short, p.name), T = h(G, D);
      if (T === "absent") continue;
      if (T === "uninspectable") {
        if (r.uninspectableLinks.add(w), P) r.directoryMatches.push(w);
        continue;
      }
      if (C) r.realOf.set(w, T.real);
      if (!T.isDirectory) continue;
      if (P) r.directoryMatches.push(w), r.realOf.set(w, T.real);
      if (W.length === 0) continue;
      if (ER(l, T.real) || ER(d, T.real)) {
        Pt(`[Sandbox] Not following symlink ${w} -> ${T.real} for glob pattern ${e}: it leads back up the tree`);
        continue;
      }
      g.push({
        dir: T.real,
        real: T.real,
        short: G.length < T.real.length ? G : T.real,
        positions: W
      });
    }
  }
  return r;
}

import { isIP as ne } from "net";

import { BlockList as xe, connect as Q, isIP as I } from "net";

import { connect as ge } from "tls";

import { URL as F } from "url";

import { BlockList as pe, isIP as V } from "net";

var Rfo = [ "127.0.0.0/8", "::1" ];

function Z(e) {
  let t = V(e);
  return t === 4 ? "ipv4" : t === 6 ? "ipv6" : void 0;
}

function xfo(e) {
  let t = e.indexOf("/"), r = M(t === -1 ? e : e.slice(0, t)), n = Z(r);
  if (!n) return;
  let o = n === "ipv6" ? 128 : 32, c = o;
  if (t !== -1) {
    let s = e.slice(t + 1);
    if (!/^\d{1,3}$/.test(s) || Number(s) > o) return;
    c = Number(s);
  }
  let i = n === "ipv6" ? H(r) : void 0;
  if (i !== void 0) return c < 96 ? void 0 : {
    address: i,
    prefix: c - 96,
    family: "ipv4"
  };
  return {
    address: r,
    prefix: c,
    family: n
  };
}

function dIt(e, t) {
  let r = xfo(t);
  if (!r) return !1;
  try {
    e.addSubnet(r.address, r.prefix, r.family);
  } catch {
    return !1;
  }
  return !0;
}

function he(e) {
  let t = new pe;
  for (let r of e) if (!dIt(t, r)) throw Error(`Invalid IP address or CIDR range: ${JSON.stringify(r)}`);
  return t;
}

function Ilt(e, t) {
  let r = M(t), n = Z(r);
  return n !== void 0 && e.check(r, n);
}

function M(e) {
  let t = e.indexOf("%");
  return t === -1 ? e : e.slice(0, t);
}

function J(e) {
  let t;
  try {
    t = new URL(`http://[${M(e)}]/`).hostname.slice(1, -1);
  } catch {
    return;
  }
  let [r = "", n] = t.split("::"), o = r ? r.split(":") : [], c = n ? n.split(":") : [], i = n === void 0 ? 0 : 8 - o.length - c.length;
  if (i < 0 || o.length + i + c.length !== 8) return;
  return [ ...o, ...Array(i).fill("0"), ...c ].map(s => parseInt(s, 16));
}

var B = (e, t) => `${e >> 8}.${e & 255}.${t >> 8}.${t & 255}`;

function H(e) {
  if (!/ffff/i.test(e)) return;
  let t = J(e);
  return t && t.slice(0, 5).every(r => r === 0) && t[5] === 65535 ? B(t[6], t[7]) : void 0;
}

function oSs(e) {
  if (V(e) !== 6) return;
  let t = J(e);
  if (!t) return;
  let r = (o, c) => t.slice(o, c).every(i => i === 0);
  if (t[0] === 8194) return B(t[1], t[2]);
  let n = B(t[6], t[7]);
  if (t[0] === 100 && t[1] === 65435 && r(2, 6)) return n;
  if (r(0, 5) && (t[5] === 0 || t[5] === 65535)) return n;
  if (r(0, 4) && t[4] === 65535 && t[5] === 0) return n;
  return;
}

var me = he(Rfo);

function uSr(e) {
  return Ilt(me, e);
}

function sSs(e) {
  let t = e.toLowerCase().replace(/\.$/, "");
  return t === "localhost" || t.endsWith(".localhost");
}

var q = 3e4, _e = new Set([ "connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "proxy-connection", "te", "trailer", "transfer-encoding", "upgrade" ]);

function Pfo(e) {
  let t = e?.http ?? process.env.HTTP_PROXY ?? process.env.http_proxy ?? void 0, r = e?.https ?? process.env.HTTPS_PROXY ?? process.env.https_proxy ?? t, n = e?.noProxy ?? process.env.NO_PROXY ?? process.env.no_proxy ?? "";
  if (!t && !r) return;
  let o = s => {
    if (!s) return;
    let a = /^[a-z][a-z0-9+.-]*:\/\//i.test(s) ? s : `http://${s}`;
    try {
      let O = new F(a);
      if (O.protocol !== "http:" && O.protocol !== "https:" || !O.hostname) throw Error("unsupported scheme or empty host");
      return O;
    } catch {
      Pt(`Invalid parent proxy URL, ignoring: ${Oe(s)}`, {
        level: "error"
      });
      return;
    }
  }, c = o(t), i = o(r);
  if (!c && !i) return;
  return {
    httpUrl: c,
    httpsUrl: i,
    noProxy: we(n)
  };
}

function we(e) {
  let t = {
    all: !1,
    suffixes: [],
    cidr: new xe
  };
  for (let r of e.split(",")) {
    if (r = r.trim(), !r) continue;
    if (r === "*") {
      t.all = !0;
      continue;
    }
    if (r.includes("/")) {
      dIt(t.cidr, r);
      continue;
    }
    let n = r.toLowerCase(), o = /^\[([^\]]+)\](?::\d+)?$/.exec(n);
    if (o) n = o[1];
    if (n.startsWith("*.")) n = n.slice(1);
    if (!I(n)) {
      let c = n.lastIndexOf(":");
      if (c !== -1 && /^\d+$/.test(n.slice(c + 1))) n = n.slice(0, c);
    } else if (dIt(t.cidr, n)) continue;
    t.suffixes.push(n);
  }
  return t;
}

function y$n(e, t) {
  let r = rxe(t.toLowerCase().replace(/\.$/, ""));
  if (r === "localhost" || uSr(r)) return !0;
  if (e.noProxy.all) return !0;
  if (Ilt(e.noProxy.cidr, r)) return !0;
  for (let n of e.noProxy.suffixes) if (n.startsWith(".")) {
    if (r === n.slice(1) || r.endsWith(n)) return !0;
  } else if (r === n || r.endsWith("." + n)) return !0;
  return !1;
}

function _$n(e, t) {
  if (t.isHttps) return e.httpsUrl ?? e.httpUrl;
  return e.httpUrl;
}

function Ifo(e) {
  let {destHost: t, destPort: r} = e, n = rxe(t);
  if (!QQt(n)) return Promise.reject(Error(`Invalid destination host for CONNECT: ${JSON.stringify(t)}`));
  if (!Number.isInteger(r) || r < 1 || r > 65535) return Promise.reject(Error(`Invalid destination port: ${r}`));
  let o = I(n) === 6 ? `[${n}]:${r}` : `${n}:${r}`;
  return new Promise((c, i) => {
    let s = e.dial(), f = !1, a = x => {
      if (f) return;
      f = !0, s.destroy(), i(x);
    }, O = () => a(Error("Proxy closed during CONNECT handshake"));
    s.setTimeout(e.timeoutMs ?? q, () => a(Error("CONNECT handshake timed out"))), s.once("error", a), 
    s.once("close", O), s.once(e.readyEvent, () => {
      s.write(`CONNECT ${o} HTTP/1.1\r\nHost: ${o}\r\n` + (e.authHeader ? `Proxy-Authorization: ${e.authHeader}\r\n` : "") + `\r\n`);
      let x = "", g = R => {
        x += R.toString("latin1");
        let v = x.indexOf(`\r\n\r\n`);
        if (v === -1) {
          if (x.length > 16384) a(Error("CONNECT response header too large"));
          return;
        }
        s.pause(), s.removeListener("data", g);
        let h = x.slice(0, x.indexOf(`\r\n`));
        if (!/^HTTP\/1\.[01] 2\d\d(?:\s|$)/.test(h)) return a(Error(`Proxy refused CONNECT: ${h.trim()}`));
        let d = x.slice(v + 4);
        if (d.length) s.unshift(Buffer.from(d, "latin1"));
        f = !0, s.setTimeout(0), s.removeListener("error", a), s.removeListener("close", O), 
        c(s);
      };
      s.on("data", g);
    });
  });
}

function pSr(e, t, r) {
  let n = rxe(e.hostname), o = Number(e.port) || (e.protocol === "https:" ? 443 : 80), c = e.protocol === "https:";
  return Ifo({
    destHost: t,
    destPort: r,
    authHeader: Ofo(e),
    readyEvent: c ? "secureConnect" : "connect",
    dial: () => c ? ge({
      host: n,
      port: o,
      ...I(n) ? {} : {
        servername: n
      }
    }) : Q(o, n)
  });
}

function Ofo(e) {
  if (!e.username && !e.password) return;
  try {
    let t = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  } catch {
    let t = `${e.username}:${e.password}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  }
}

function JQt(e, t) {
  try {
    return e.writeHead(t.statusCode ?? 502, b$n(t.headers)), !0;
  } catch (r) {
    if (Pt(`Invalid upstream response head (status ${t.statusCode}): ${r instanceof Error ? r.message : String(r)}`, {
      level: "error"
    }), t.destroy(), e.headersSent) return e.destroy(), !1;
    for (let n of e.getHeaderNames()) e.removeHeader(n);
    return e.writeHead(502, {
      "Content-Type": "text/plain"
    }), e.end("Bad Gateway"), !1;
  }
}

function b$n(e) {
  let t = new Set, r = e.connection;
  if (r) for (let o of String(r).split(",")) t.add(o.trim().toLowerCase());
  let n = {};
  for (let [o, c] of Object.entries(e)) {
    let i = o.toLowerCase();
    if (!_e.has(i) && !t.has(i)) n[o] = c;
  }
  return n;
}

function rxe(e) {
  return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e;
}

function Mfo(e) {
  if (!e) return "-";
  if (!e.username && !e.password) return e.href;
  let t = new F(e.href);
  return t.username = "***", t.password = "***", t.href;
}

function Oe(e) {
  return e.replace(/\/\/[^@/]*@/, "//***:***@");
}

function QQt(e) {
  if (!e || e.length > 255) return !1;
  let t = rxe(e);
  if (t.includes("%")) return !1;
  if (I(t)) return !0;
  return /^[A-Za-z0-9._-]+$/.test(t);
}

function b0(e) {
  try {
    let t = rxe(e), r = I(t) === 6 ? `[${t}]` : t, n = rxe(new F(`http://${r}/`).hostname);
    return I(n) === 6 ? H(n) ?? n : n.replace(/\.$/, "");
  } catch {
    return;
  }
}

function fSr(e, t, r) {
  let n = I(e) === 6 ? `[${e}]` : e;
  return t === r ? n : `${n}:${t}`;
}

async function mSr(e, t, r, n) {
  let o = e;
  if (r && !I(e)) {
    let c = await S$n(e, t, r);
    if (o = c.remoteAddress ?? "", c.destroy(), !o) throw Error(`connect ${e}:${t}: no peer address`);
  }
  return {
    host: o,
    port: t,
    ...n && !I(e) ? {
      servername: e
    } : {},
    agent: !1
  };
}

function S$n(e, t, r, n = q) {
  return new Promise((o, c) => {
    let i = Q({
      port: t,
      host: e,
      lookup: r
    }), s = !1, f = a => {
      if (s) return;
      if (s = !0, i.setTimeout(0), a) i.destroy(), c(a); else o(i);
    };
    i.setTimeout(n, () => f(Error("connect timed out"))), i.once("connect", () => f()), 
    i.once("error", f), i.once("close", () => f(Error("socket closed before connect")));
  });
}

function ee(e) {
  let t = e.indexOf("%");
  return t === -1 ? e : e.slice(0, t);
}

function P7(e) {
  if (e.startsWith("[")) {
    let n = e.indexOf("]");
    if (n === -1) return {
      hostPattern: e,
      port: void 0
    };
    let o = ee(e.slice(1, n)), c = b0(o) ?? o, i = e.slice(n + 1);
    if (i === "") return {
      hostPattern: c,
      port: void 0
    };
    let s = te(i.startsWith(":") ? i.slice(1) : "");
    return s === void 0 ? {
      hostPattern: e,
      port: void 0
    } : {
      hostPattern: c,
      port: s
    };
  }
  let t = e.lastIndexOf(":");
  if (t === -1) return {
    hostPattern: e,
    port: void 0
  };
  if (e.indexOf(":") !== t) {
    let n = ee(e);
    return {
      hostPattern: b0(n) ?? n,
      port: void 0
    };
  }
  let r = te(e.slice(t + 1));
  if (r === void 0) return {
    hostPattern: e,
    port: void 0
  };
  return {
    hostPattern: e.slice(0, t),
    port: r
  };
}

function te(e) {
  if (!/^[1-9][0-9]{0,4}$/.test(e)) return;
  let t = Number(e);
  return t > 65535 ? void 0 : t;
}

function Hfo(e) {
  return e.flatMap(t => {
    let {hostPattern: r, port: n} = P7(t);
    return ne(r) ? [ {
      range: r,
      port: n
    } ] : [];
  });
}

function ZQt(e) {
  return P7(e).hostPattern;
}

function S5e(e, t) {
  let r = e.toLowerCase();
  if (t === "*") return !0;
  if (t.startsWith("*.")) {
    if (ne(rxe(r))) return !1;
    let n = t.substring(2).toLowerCase();
    return r.endsWith("." + n);
  }
  return r === t.toLowerCase();
}

function w$n(e, t, r) {
  let {hostPattern: n, port: o} = P7(r);
  if (o !== void 0 && o !== t) return !1;
  return S5e(e, n);
}

function cIt(e, t) {
  let r = t.map(ZQt);
  if (!e.startsWith("*.")) return r.some(o => S5e(e, o));
  let n = e.slice(2).toLowerCase();
  return r.some(o => {
    if (!o.startsWith("*.")) return !1;
    let c = o.slice(2).toLowerCase();
    return n === c || n.endsWith("." + c);
  });
}

export { tSs, iv, Pt, p$n, f$n, vfo, ER, Tlt, Efo, nSs, KQt, _5e, Vl, nxe, Alt, iIt, y0, qQt, am, YQt, aIt, Clt, kfo, Yb, _0, b5e, dSr, cSr, Tfo, Rlt, vue, G$e, V$e, Afo, m$n, xlt, Plt, XQt, rSs, g$n, Cfo, lIt, h$n, Rfo, xfo, dIt, Ilt, oSs, uSr, sSs, Pfo, y$n, _$n, Ifo, pSr, Ofo, JQt, b$n, rxe, Mfo, QQt, b0, fSr, mSr, S$n, P7, Hfo, ZQt, S5e, w$n, cIt };
