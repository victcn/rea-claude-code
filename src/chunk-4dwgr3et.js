// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ys } from "./chunk-2v9tfgc3.js";

import { K, ps, he, ZS } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { x, E, zr } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { S$, a } from "./chunk-j016gcgm.js";

import { Pj } from "./chunk-0pmh7awy.js";

import { co } from "./chunk-k5d016nk.js";

import { BU, l4n } from "./chunk-e6anp4gn.js";

import { O } from "./chunk-1xnsr4dy.js";

import { we, C, Ne } from "./chunk-m8ez8fhk.js";

var ct = C(function(di, ut) {
  ut.exports = at;
  at.sync = Vn;
  var it = Ne("fs");
  function Hn(e, n) {
    var r = n.pathExt !== void 0 ? n.pathExt : process.env.PATHEXT;
    if (!r) return !0;
    if (r = r.split(";"), r.indexOf("") !== -1) return !0;
    for (var o = 0; o < r.length; o++) {
      var s = r[o].toLowerCase();
      if (s && e.substr(-s.length).toLowerCase() === s) return !0;
    }
    return !1;
  }
  function st(e, n, r) {
    if (!e.isSymbolicLink() && !e.isFile()) return !1;
    return Hn(n, r);
  }
  function at(e, n, r) {
    it.stat(e, function(o, s) {
      r(o, o ? !1 : st(s, e, n));
    });
  }
  function Vn(e, n) {
    return st(it.statSync(e), e, n);
  }
});

var mt = C(function(li, pt) {
  pt.exports = lt;
  lt.sync = Xn;
  var dt = Ne("fs");
  function lt(e, n, r) {
    dt.stat(e, function(o, s) {
      r(o, o ? !1 : ft(s, n));
    });
  }
  function Xn(e, n) {
    return ft(dt.statSync(e), n);
  }
  function ft(e, n) {
    return e.isFile() && Yn(e, n);
  }
  function Yn(e, n) {
    var {mode: r, uid: o, gid: s} = e, u = n.uid !== void 0 ? n.uid : process.getuid && process.getuid(), d = n.gid !== void 0 ? n.gid : process.getgid && process.getgid(), l = parseInt("100", 8), f = parseInt("010", 8), p = parseInt("001", 8), h = l | f, S = r & p || r & f && s === d || r & l && o === u || r & h && u === 0;
    return S;
  }
});

var ht = C(function(pi, gt) {
  var fi = Ne("fs"), Y;
  if (global.TESTING_WINDOWS) Y = ct(); else Y = mt();
  gt.exports = me;
  me.sync = Zn;
  function me(e, n, r) {
    if (typeof n === "function") r = n, n = {};
    if (!r) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function(o, s) {
        me(e, n || {}, function(u, d) {
          if (u) s(u); else o(d);
        });
      });
    }
    Y(e, n || {}, function(o, s) {
      if (o) {
        if (o.code === "EACCES" || n && n.ignoreErrors) o = null, s = !1;
      }
      r(o, s);
    });
  }
  function Zn(e, n) {
    try {
      return Y.sync(e, n || {});
    } catch (r) {
      if (n && n.ignoreErrors || r.code === "EACCES") return !1; else throw r;
    }
  }
});

var Ct = C(function(mi, bt) {
  var _ = process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", Z = Ne("path"), Qn = _ ? ";" : ":", ge = ht(), yt = e => Object.assign(Error(`not found: ${e}`), {
    code: "ENOENT"
  }), St = (e, n) => {
    let r = n.colon || Qn, o = e.match(/\//) || _ && e.match(/\\/) ? [ "" ] : [ ..._ ? [ process.cwd() ] : [], ...(n.path || process.env.PATH || "").split(r) ], s = _ ? n.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", u = _ ? s.split(r) : [ "" ];
    if (_) {
      if (e.indexOf(".") !== -1 && u[0] !== "") u.unshift("");
    }
    return {
      pathEnv: o,
      pathExt: u,
      pathExtExe: s
    };
  }, xt = (e, n, r) => {
    if (typeof n === "function") r = n, n = {};
    if (!n) n = {};
    let {pathEnv: o, pathExt: s, pathExtExe: u} = St(e, n), d = [], l = p => new Promise((h, S) => {
      if (p === o.length) return n.all && d.length ? h(d) : S(yt(e));
      let y = o[p], T = /^".*"$/.test(y) ? y.slice(1, -1) : y, w = Z.join(T, e), v = !T && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + w : w;
      h(f(v, p, 0));
    }), f = (p, h, S) => new Promise((y, T) => {
      if (S === s.length) return y(l(h + 1));
      let w = s[S];
      ge(p + w, {
        pathExt: u
      }, (v, R) => {
        if (!v && R) if (n.all) d.push(p + w); else return y(p + w);
        return y(f(p, h, S + 1));
      });
    });
    return r ? l(0).then(p => r(null, p), r) : l(0);
  }, Jn = (e, n) => {
    n = n || {};
    let {pathEnv: r, pathExt: o, pathExtExe: s} = St(e, n), u = [];
    for (let d = 0; d < r.length; d++) {
      let l = r[d], f = /^".*"$/.test(l) ? l.slice(1, -1) : l, p = Z.join(f, e), h = !f && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
      for (let S = 0; S < o.length; S++) {
        let y = h + o[S];
        try {
          if (ge.sync(y, {
            pathExt: s
          })) if (n.all) u.push(y); else return y;
        } catch (T) {}
      }
    }
    if (n.all && u.length) return u;
    if (n.nothrow) return null;
    throw yt(e);
  };
  bt.exports = xt;
  xt.sync = Jn;
});

var wt = C(function(gi, ye) {
  var Et = (e = {}) => {
    let n = e.env || process.env;
    if ((e.platform || "linux") !== "win32") return "PATH";
    return Object.keys(n).reverse().find(o => o.toUpperCase() === "PATH") || "Path";
  };
  ye.exports = Et;
  ye.exports.default = Et;
});

var vt = C(function(hi, It) {
  var Q = Ne("path"), Pt = Ct(), er = wt();
  function Tt(e, n) {
    let r = e.options.env || process.env, o = process.cwd(), s = e.options.cwd != null, u = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (u) try {
      process.chdir(e.options.cwd);
    } catch (l) {}
    let d;
    try {
      d = Pt.sync(e.command, {
        path: r[er({
          env: r
        })],
        pathExt: n ? Q.delimiter : void 0
      });
    } catch (l) {} finally {
      if (u) try {
        process.chdir(o);
      } catch (l) {
        let f = l !== null && typeof l === "object" && typeof l.code === "string" ? l.code : "";
        if (!(/^E[A-Z0-9]+$/.test(f) || f === "UNKNOWN" || f.startsWith("Unknown system error"))) throw l;
      }
    }
    if (d) d = Q.resolve(s ? e.options.cwd : "", d);
    return d;
  }
  function tr(e) {
    return Tt(e) || Tt(e, !0);
  }
  It.exports = tr;
});

var Ot = C(function(or, xe) {
  var Se = /([()\][%!^"`<>&|;, *?])/g;
  function nr(e) {
    return e = e.replace(Se, "^$1"), e;
  }
  function rr(e, n) {
    if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"'), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), 
    e = `"${e}"`, e = e.replace(Se, "^$1"), n) e = e.replace(Se, "^$1");
    return e;
  }
  or.command = nr;
  or.argument = rr;
});

var Rt = C(function(yi, At) {
  At.exports = /^#!(.*)/;
});

var $t = C(function(Si, _t) {
  var ar = Rt();
  _t.exports = (e = "") => {
    let n = e.match(ar);
    if (!n) return null;
    let [r, o] = n[0].replace(/#! ?/, "").split(" "), s = r.split("/").pop();
    if (s === "env") return o;
    return o ? `${s} ${o}` : s;
  };
});

var Ft = C(function(xi, kt) {
  var k = Ne("fs"), ur = $t();
  function cr(e) {
    let r = Buffer.alloc(150), o;
    try {
      o = k.openSync(e, "r"), k.readSync(o, r, 0, 150, 0), k.closeSync(o);
    } catch (s) {}
    return ur(r.toString());
  }
  kt.exports = cr;
});

var jt = C(function(bi, Lt) {
  var Gt = Ne("path"), Nt = vt(), J = Ot(), dr = Ft(), lr = /\.(?:com|exe)$/i, fr = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function pr(e) {
    e.file = Nt(e);
    let n = e.file && dr(e.file);
    if (n) return e.args.unshift(e.file), e.command = n, Nt(e);
    return e.file;
  }
  function mr(e) {
    return e;
  }
  function gr(e, n, r) {
    if (n && !Array.isArray(n)) r = n, n = null;
    n = n ? n.slice(0) : [], r = Object.assign({}, r);
    let o = {
      command: e,
      args: n,
      options: r,
      file: void 0,
      original: {
        command: e,
        args: n
      }
    };
    return r.shell ? o : mr(o);
  }
  Lt.exports = gr;
});

var Ut = C(function(Ci, Dt) {
  function hr(e, n) {
    return Object.assign(Error(`${n} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${n} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    });
  }
  function yr(e, n) {
    return;
  }
  function Mt(e, n) {
    return null;
  }
  function Sr(e, n) {
    return null;
  }
  Dt.exports = {
    hookChildProcess: yr,
    verifyENOENT: Mt,
    verifyENOENTSync: Sr,
    notFoundError: hr
  };
});

var o4n = C(function(Ei, F) {
  var ee = Ne("child_process"), be = jt(), L = Ut();
  function Bt(e, n, r) {
    let o = be(e, n, r), s = ee.spawn(o.command, o.args, o.options);
    return L.hookChildProcess(s, o), s;
  }
  function xr(e, n, r) {
    let o = be(e, n, r), s = ee.spawnSync(o.command, o.args, o.options);
    return s.error = s.error || L.verifyENOENTSync(s.status, o), s;
  }
  F.exports = Bt;
  F.exports.spawn = Bt;
  F.exports.sync = xr;
  F.exports._parse = be;
  F.exports._enoent = L;
});

var Sn = C(function(As, yn) {
  var {PassThrough: bo} = Ne("stream");
  yn.exports = function() {
    var e = [], n = new bo({
      objectMode: !0
    });
    return n.setMaxListeners(0), n.add = r, n.isEmpty = o, n.on("unpipe", s), Array.prototype.slice.call(arguments).forEach(r), 
    n;
    function r(u) {
      if (Array.isArray(u)) return u.forEach(r), this;
      return e.push(u), u.once("end", s.bind(null, u)), u.once("error", n.emit.bind(n, "error")), 
      u.pipe(n, {
        end: !1
      }), this;
    }
    function o() {
      return e.length == 0;
    }
    function s(u) {
      if (e = e.filter(function(d) {
        return d !== u;
      }), !e.length && n.readable) n.end();
    }
  };
});

var _n = we(o4n(), 1);

import { Buffer as jo } from "buffer";

import Mo from "path";

import qe from "child_process";

import fe from "process";

function Ce(e) {
  let n = typeof e === "string" ? `\n` : `\n`.charCodeAt(), r = typeof e === "string" ? "\r" : "\r".charCodeAt();
  if (e[e.length - 1] === n) e = e.slice(0, -1);
  if (e[e.length - 1] === r) e = e.slice(0, -1);
  return e;
}

import ne from "process";

import j from "path";

import { fileURLToPath as Kt } from "url";

function te(e = {}) {
  let {env: n = process.env, platform: r = "linux"} = e;
  if (r !== "win32") return "PATH";
  return Object.keys(n).reverse().find(o => o.toUpperCase() === "PATH") || "Path";
}

var br = ({cwd: e = ne.cwd(), path: n = ne.env[te()], preferLocal: r = !0, execPath: o = ne.execPath, addExecPath: s = !0} = {}) => {
  let u = e instanceof URL ? Kt(e) : e, d = j.resolve(u), l = [];
  if (r) Cr(l, d);
  if (s) Er(l, o, d);
  return [ ...l, n ].join(j.delimiter);
}, Cr = (e, n) => {
  let r;
  while (r !== n) e.push(j.join(n, "node_modules/.bin")), r = n, n = j.resolve(n, "..");
}, Er = (e, n, r) => {
  let o = n instanceof URL ? Kt(n) : n;
  e.push(j.resolve(r, o, ".."));
}, zt = ({env: e = ne.env, ...n} = {}) => {
  e = {
    ...e
  };
  let r = te({
    env: e
  });
  return n.path = e[r], e[r] = br(n), e;
};

var wr = (e, n, r, o) => {
  if (r === "length" || r === "prototype") return;
  if (r === "arguments" || r === "caller") return;
  let s = Object.getOwnPropertyDescriptor(e, r), u = Object.getOwnPropertyDescriptor(n, r);
  if (!Tr(s, u) && o) return;
  Object.defineProperty(e, r, u);
}, Tr = function(e, n) {
  return e === void 0 || e.configurable || e.writable === n.writable && e.enumerable === n.enumerable && e.configurable === n.configurable && (e.writable || e.value === n.value);
}, Pr = (e, n) => {
  let r = Object.getPrototypeOf(n);
  if (r === Object.getPrototypeOf(e)) return;
  Object.setPrototypeOf(e, r);
}, Ir = (e, n) => `/* Wrapped ${e}*/\n${n}`, vr = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), Or = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), Ar = (e, n, r) => {
  let o = r === "" ? "" : `with ${r.trim()}() `, s = Ir.bind(null, o, n.toString());
  Object.defineProperty(s, "name", Or), Object.defineProperty(e, "toString", {
    ...vr,
    value: s
  });
};

function Ee(e, n, {ignoreNonConfigurable: r = !1} = {}) {
  let {name: o} = e;
  for (let s of Reflect.ownKeys(n)) wr(e, n, s, r);
  return Pr(e, n), Ar(e, n, o), e;
}

var re = new WeakMap, Wt = (e, n = {}) => {
  if (typeof e !== "function") throw TypeError("Expected a function");
  let r, o = 0, s = e.displayName || e.name || "<anonymous>", u = function(...d) {
    if (re.set(u, ++o), o === 1) r = e.apply(this, d), e = null; else if (n.throw === !0) throw Error(`Function \`${s}\` can only be called once`);
    return r;
  };
  return Ee(u, e), re.set(u, o), u;
};

Wt.callCount = e => {
  if (!re.has(e)) throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return re.get(e);
};

var qt = Wt;

import Mr from "process";

import { constants as kr } from "os";

var Ht = () => {
  let e = Te - Vt + 1;
  return Array.from({
    length: e
  }, Rr);
}, Rr = (e, n) => ({
  name: `SIGRT${n + 1}`,
  number: Vt + n,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
}), Vt = 34, Te = 64;

import { constants as _r } from "os";

var Xt = [ {
  name: "SIGHUP",
  number: 1,
  action: "terminate",
  description: "Terminal closed",
  standard: "posix"
}, {
  name: "SIGINT",
  number: 2,
  action: "terminate",
  description: "User interruption with CTRL-C",
  standard: "ansi"
}, {
  name: "SIGQUIT",
  number: 3,
  action: "core",
  description: "User interruption with CTRL-\\",
  standard: "posix"
}, {
  name: "SIGILL",
  number: 4,
  action: "core",
  description: "Invalid machine instruction",
  standard: "ansi"
}, {
  name: "SIGTRAP",
  number: 5,
  action: "core",
  description: "Debugger breakpoint",
  standard: "posix"
}, {
  name: "SIGABRT",
  number: 6,
  action: "core",
  description: "Aborted",
  standard: "ansi"
}, {
  name: "SIGIOT",
  number: 6,
  action: "core",
  description: "Aborted",
  standard: "bsd"
}, {
  name: "SIGBUS",
  number: 7,
  action: "core",
  description: "Bus error due to misaligned, non-existing address or paging error",
  standard: "bsd"
}, {
  name: "SIGEMT",
  number: 7,
  action: "terminate",
  description: "Command should be emulated but is not implemented",
  standard: "other"
}, {
  name: "SIGFPE",
  number: 8,
  action: "core",
  description: "Floating point arithmetic error",
  standard: "ansi"
}, {
  name: "SIGKILL",
  number: 9,
  action: "terminate",
  description: "Forced termination",
  standard: "posix",
  forced: !0
}, {
  name: "SIGUSR1",
  number: 10,
  action: "terminate",
  description: "Application-specific signal",
  standard: "posix"
}, {
  name: "SIGSEGV",
  number: 11,
  action: "core",
  description: "Segmentation fault",
  standard: "ansi"
}, {
  name: "SIGUSR2",
  number: 12,
  action: "terminate",
  description: "Application-specific signal",
  standard: "posix"
}, {
  name: "SIGPIPE",
  number: 13,
  action: "terminate",
  description: "Broken pipe or socket",
  standard: "posix"
}, {
  name: "SIGALRM",
  number: 14,
  action: "terminate",
  description: "Timeout or timer",
  standard: "posix"
}, {
  name: "SIGTERM",
  number: 15,
  action: "terminate",
  description: "Termination",
  standard: "ansi"
}, {
  name: "SIGSTKFLT",
  number: 16,
  action: "terminate",
  description: "Stack is empty or overflowed",
  standard: "other"
}, {
  name: "SIGCHLD",
  number: 17,
  action: "ignore",
  description: "Child process terminated, paused or unpaused",
  standard: "posix"
}, {
  name: "SIGCLD",
  number: 17,
  action: "ignore",
  description: "Child process terminated, paused or unpaused",
  standard: "other"
}, {
  name: "SIGCONT",
  number: 18,
  action: "unpause",
  description: "Unpaused",
  standard: "posix",
  forced: !0
}, {
  name: "SIGSTOP",
  number: 19,
  action: "pause",
  description: "Paused",
  standard: "posix",
  forced: !0
}, {
  name: "SIGTSTP",
  number: 20,
  action: "pause",
  description: 'Paused using CTRL-Z or "suspend"',
  standard: "posix"
}, {
  name: "SIGTTIN",
  number: 21,
  action: "pause",
  description: "Background process cannot read terminal input",
  standard: "posix"
}, {
  name: "SIGBREAK",
  number: 21,
  action: "terminate",
  description: "User interruption with CTRL-BREAK",
  standard: "other"
}, {
  name: "SIGTTOU",
  number: 22,
  action: "pause",
  description: "Background process cannot write to terminal output",
  standard: "posix"
}, {
  name: "SIGURG",
  number: 23,
  action: "ignore",
  description: "Socket received out-of-band data",
  standard: "bsd"
}, {
  name: "SIGXCPU",
  number: 24,
  action: "core",
  description: "Process timed out",
  standard: "bsd"
}, {
  name: "SIGXFSZ",
  number: 25,
  action: "core",
  description: "File too big",
  standard: "bsd"
}, {
  name: "SIGVTALRM",
  number: 26,
  action: "terminate",
  description: "Timeout or timer",
  standard: "bsd"
}, {
  name: "SIGPROF",
  number: 27,
  action: "terminate",
  description: "Timeout or timer",
  standard: "bsd"
}, {
  name: "SIGWINCH",
  number: 28,
  action: "ignore",
  description: "Terminal window size changed",
  standard: "bsd"
}, {
  name: "SIGIO",
  number: 29,
  action: "terminate",
  description: "I/O is available",
  standard: "other"
}, {
  name: "SIGPOLL",
  number: 29,
  action: "terminate",
  description: "Watched event",
  standard: "other"
}, {
  name: "SIGINFO",
  number: 29,
  action: "ignore",
  description: "Request for process information",
  standard: "other"
}, {
  name: "SIGPWR",
  number: 30,
  action: "terminate",
  description: "Device running out of power",
  standard: "systemv"
}, {
  name: "SIGSYS",
  number: 31,
  action: "core",
  description: "Invalid system call",
  standard: "other"
}, {
  name: "SIGUNUSED",
  number: 31,
  action: "terminate",
  description: "Invalid system call",
  standard: "other"
} ];

var Pe = () => {
  let e = Ht();
  return [ ...Xt, ...e ].map($r);
}, $r = ({name: e, number: n, description: r, action: o, forced: s = !1, standard: u}) => {
  let {signals: {[e]: d}} = _r, l = d !== void 0;
  return {
    name: e,
    number: l ? d : n,
    description: r,
    supported: l,
    action: o,
    forced: s,
    standard: u
  };
};

var Fr = () => {
  let e = Pe();
  return Object.fromEntries(e.map(Nr));
}, Nr = ({name: e, number: n, description: r, supported: o, action: s, forced: u, standard: d}) => [ e, {
  name: e,
  number: n,
  description: r,
  supported: o,
  action: s,
  forced: u,
  standard: d
} ], Yt = Fr(), Gr = () => {
  let e = Pe(), n = Te + 1, r = Array.from({
    length: n
  }, (o, s) => Lr(s, e));
  return Object.assign({}, ...r);
}, Lr = (e, n) => {
  let r = jr(e, n);
  if (r === void 0) return {};
  let {name: o, description: s, supported: u, action: d, forced: l, standard: f} = r;
  return {
    [e]: {
      name: o,
      number: e,
      description: s,
      supported: u,
      action: d,
      forced: l,
      standard: f
    }
  };
}, jr = (e, n) => {
  let r = n.find(({name: o}) => kr.signals[o] === e);
  if (r !== void 0) return r;
  return n.find(o => o.number === e);
}, Bi = Gr();

var Dr = ({timedOut: e, timeout: n, errorCode: r, signal: o, signalDescription: s, exitCode: u, isCanceled: d}) => {
  if (e) return `timed out after ${n} milliseconds`;
  if (d) return "was canceled";
  if (r !== void 0) return `failed with ${r}`;
  if (o !== void 0) return `was killed with ${o} (${s})`;
  if (u !== void 0) return `failed with exit code ${u}`;
  return "failed";
}, M = ({stdout: e, stderr: n, all: r, error: o, signal: s, exitCode: u, command: d, escapedCommand: l, timedOut: f, isCanceled: p, killed: h, parsed: {options: {timeout: S, cwd: y = Mr.cwd()}}}) => {
  u = u === null ? void 0 : u, s = s === null ? void 0 : s;
  let T = s === void 0 ? void 0 : Yt[s].description, w = o && o.code, R = `Command ${Dr({
    timedOut: f,
    timeout: S,
    errorCode: w,
    signal: s,
    signalDescription: T,
    exitCode: u,
    isCanceled: p
  })}: ${d}`, H = Object.prototype.toString.call(o) === "[object Error]", V = H ? `${R}\n${o.message}` : R, X = [ V, n, e ].filter(Boolean).join(`\n`);
  if (H) o.originalMessage = o.message, o.message = X; else o = Error(X);
  if (o.shortMessage = V, o.command = d, o.escapedCommand = l, o.exitCode = u, o.signal = s, 
  o.signalDescription = T, o.stdout = e, o.stderr = n, o.cwd = y, r !== void 0) o.all = r;
  if ("bufferedData" in o) delete o.bufferedData;
  return o.failed = !0, o.timedOut = Boolean(f), o.isCanceled = p, o.killed = h && !f, 
  o;
};

var oe = [ "stdin", "stdout", "stderr" ], Ur = e => oe.some(n => e[n] !== void 0), Zt = e => {
  if (!e) return;
  let {stdio: n} = e;
  if (n === void 0) return oe.map(o => e[o]);
  if (Ur(e)) throw Error(`It's not possible to provide \`stdio\` in combination with one of ${oe.map(o => `\`${o}\``).join(", ")}`);
  if (typeof n === "string") return n;
  if (!Array.isArray(n)) throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);
  let r = Math.max(n.length, oe.length);
  return Array.from({
    length: r
  }, (o, s) => n[s]);
};

import Wr from "os";

var A = [];

A.push("SIGHUP", "SIGINT", "SIGTERM");

A.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");

A.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");

var ie = e => !!e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function", Ie = Symbol.for("signal-exit emitter"), ve = globalThis, Br = Object.defineProperty.bind(Object);

class Qt {
  emitted={
    afterExit: !1,
    exit: !1
  };
  listeners={
    afterExit: [],
    exit: []
  };
  count=0;
  id=Math.random();
  constructor() {
    if (ve[Ie]) return ve[Ie];
    Br(ve, Ie, {
      value: this,
      writable: !1,
      enumerable: !1,
      configurable: !1
    });
  }
  on(e, n) {
    this.listeners[e].push(n);
  }
  removeListener(e, n) {
    let r = this.listeners[e], o = r.indexOf(n);
    if (o === -1) return;
    if (o === 0 && r.length === 1) r.length = 0; else r.splice(o, 1);
  }
  emit(e, n, r) {
    if (this.emitted[e]) return !1;
    this.emitted[e] = !0;
    let o = !1;
    for (let s of this.listeners[e]) o = s(n, r) === !0 || o;
    if (e === "exit") o = this.emit("afterExit", n, r) || o;
    return o;
  }
}

class Ae {}

var Kr = e => ({
  onExit(n, r) {
    return e.onExit(n, r);
  },
  load() {
    return e.load();
  },
  unload() {
    return e.unload();
  }
});

class Jt extends Ae {
  onExit() {
    return () => {};
  }
  load() {}
  unload() {}
}

class en extends Ae {
  #s=Oe.platform === "win32" ? "SIGINT" : "SIGHUP";
  #t=new Qt;
  #e;
  #o;
  #i;
  #r={};
  #n=!1;
  constructor(e) {
    super();
    this.#e = e, this.#r = {};
    for (let n of A) this.#r[n] = () => {
      let r = this.#e.listeners(n), {count: o} = this.#t, s = e;
      if (typeof s.__signal_exit_emitter__ === "object" && typeof s.__signal_exit_emitter__.count === "number") o += s.__signal_exit_emitter__.count;
      if (r.length === o) {
        this.unload();
        let u = this.#t.emit("exit", null, n), d = n === "SIGHUP" ? this.#s : n;
        if (!u) e.kill(e.pid, d);
      }
    };
    this.#i = e.reallyExit, this.#o = e.emit;
  }
  onExit(e, n) {
    if (!ie(this.#e)) return () => {};
    if (this.#n === !1) this.load();
    let r = n?.alwaysLast ? "afterExit" : "exit";
    return this.#t.on(r, e), () => {
      if (this.#t.removeListener(r, e), this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0) this.unload();
    };
  }
  load() {
    if (this.#n) return;
    this.#n = !0, this.#t.count += 1;
    for (let e of A) try {
      let n = this.#r[e];
      if (n) this.#e.on(e, n);
    } catch (n) {}
    this.#e.emit = (e, ...n) => this.#u(e, ...n), this.#e.reallyExit = e => this.#a(e);
  }
  unload() {
    if (!this.#n) return;
    this.#n = !1, A.forEach(e => {
      let n = this.#r[e];
      if (!n) throw Error("Listener not defined for signal: " + e);
      try {
        this.#e.removeListener(e, n);
      } catch (r) {}
    }), this.#e.emit = this.#o, this.#e.reallyExit = this.#i, this.#t.count -= 1;
  }
  #a(e) {
    if (!ie(this.#e)) return 0;
    return this.#e.exitCode = e || 0, this.#t.emit("exit", this.#e.exitCode, null), 
    this.#i.call(this.#e, this.#e.exitCode);
  }
  #u(e, ...n) {
    let r = this.#o;
    if (e === "exit" && ie(this.#e)) {
      if (typeof n[0] === "number") this.#e.exitCode = n[0];
      let o = r.call(this.#e, e, ...n);
      return this.#t.emit("exit", this.#e.exitCode, null), o;
    } else return r.call(this.#e, e, ...n);
  }
}

var Oe = globalThis.process, {onExit: wX, load: Yi, unload: Zi} = Kr(ie(Oe) ? new en(Oe) : new Jt);

var qr = 5e3, tn = (e, n = "SIGTERM", r = {}) => {
  let o = e(n);
  return Hr(e, n, r, o), o;
}, Hr = (e, n, r, o) => {
  if (!Vr(n, r, o)) return;
  let s = Yr(r), u = setTimeout(() => {
    e("SIGKILL");
  }, s);
  if (u.unref) u.unref();
}, Vr = (e, {forceKillAfterTimeout: n}, r) => Xr(e) && n !== !1 && r, Xr = e => e === Wr.constants.signals.SIGTERM || typeof e === "string" && e.toUpperCase() === "SIGTERM", Yr = ({forceKillAfterTimeout: e = !0}) => {
  if (e === !0) return qr;
  if (!Number.isFinite(e) || e < 0) throw TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
  return e;
}, nn = (e, n) => {
  if (e.kill()) n.isCanceled = !0;
}, Zr = (e, n, r) => {
  e.kill(n), r(Object.assign(Error("Timed out"), {
    timedOut: !0,
    signal: n
  }));
}, rn = (e, {timeout: n, killSignal: r = "SIGTERM"}, o) => {
  if (n === 0 || n === void 0) return o;
  let s, u = new Promise((l, f) => {
    s = setTimeout(() => {
      Zr(e, r, f);
    }, n);
  }), d = o.finally(() => {
    clearTimeout(s);
  });
  return Promise.race([ u, d ]);
}, on = ({timeout: e}) => {
  if (e !== void 0 && (!Number.isFinite(e) || e < 0)) throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
}, sn = async (e, {cleanup: n, detached: r}, o) => {
  if (!n || r) return o;
  let s = wX(() => {
    e.kill();
  });
  return o.finally(() => {
    s();
  });
};

import { createWriteStream as Qr } from "fs";

import { ChildProcess as Jr } from "child_process";

function se(e) {
  return e !== null && typeof e === "object" && typeof e.pipe === "function";
}

function Re(e) {
  return se(e) && e.writable !== !1 && typeof e._write === "function" && typeof e._writableState === "object";
}

var eo = e => e instanceof Jr && typeof e.then === "function", _e = (e, n, r) => {
  if (typeof r === "string") return e[n].pipe(Qr(r)), e;
  if (Re(r)) return e[n].pipe(r), e;
  if (!eo(r)) throw TypeError("The second argument must be a string, a stream or an Execa child process.");
  if (!Re(r.stdin)) throw TypeError("The target child process's stdin must be available.");
  return e[n].pipe(r.stdin), r;
}, an = e => {
  if (e.stdout !== null) e.pipeStdout = _e.bind(void 0, e, "stdout");
  if (e.stderr !== null) e.pipeStderr = _e.bind(void 0, e, "stderr");
  if (e.all !== void 0) e.pipeAll = _e.bind(void 0, e, "all");
};

import { createReadStream as Co, readFileSync as Eo } from "fs";

import { setTimeout as wo } from "timers/promises";

var D = async (e, {init: n, convertChunk: r, getSize: o, truncateChunk: s, addChunk: u, getFinalChunk: d, finalize: l}, {maxBuffer: f = Number.POSITIVE_INFINITY} = {}) => {
  if (!no(e)) throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
  let p = n();
  p.length = 0;
  try {
    for await (let h of e) {
      let S = ro(h), y = r[S](h, p);
      dn({
        convertedChunk: y,
        state: p,
        getSize: o,
        truncateChunk: s,
        addChunk: u,
        maxBuffer: f
      });
    }
    return to({
      state: p,
      convertChunk: r,
      getSize: o,
      truncateChunk: s,
      addChunk: u,
      getFinalChunk: d,
      maxBuffer: f
    }), l(p);
  } catch (h) {
    throw h.bufferedData = l(p), h;
  }
}, to = ({state: e, getSize: n, truncateChunk: r, addChunk: o, getFinalChunk: s, maxBuffer: u}) => {
  let d = s(e);
  if (d !== void 0) dn({
    convertedChunk: d,
    state: e,
    getSize: n,
    truncateChunk: r,
    addChunk: o,
    maxBuffer: u
  });
}, dn = ({convertedChunk: e, state: n, getSize: r, truncateChunk: o, addChunk: s, maxBuffer: u}) => {
  let d = r(e), l = n.length + d;
  if (l <= u) {
    un(e, n, s, l);
    return;
  }
  let f = o(e, u - n.length);
  if (f !== void 0) un(f, n, s, u);
  throw new $e;
}, un = (e, n, r, o) => {
  n.contents = r(e, n, o), n.length = o;
}, no = e => typeof e === "object" && e !== null && typeof e[Symbol.asyncIterator] === "function", ro = e => {
  let n = typeof e;
  if (n === "string") return "string";
  if (n !== "object" || e === null) return "others";
  if (globalThis.Buffer?.isBuffer(e)) return "buffer";
  let r = cn.call(e);
  if (r === "[object ArrayBuffer]") return "arrayBuffer";
  if (r === "[object DataView]") return "dataView";
  if (Number.isInteger(e.byteLength) && Number.isInteger(e.byteOffset) && cn.call(e.buffer) === "[object ArrayBuffer]") return "typedArray";
  return "others";
}, {toString: cn} = Object.prototype;

class $e extends Error {
  name="MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
}

var ke = e => e, Fe = () => {}, Ge = ({contents: e}) => e, ae = e => {
  throw Error(`Streams in object mode are not supported: ${String(e)}`);
}, ue = e => e.length;

async function Le(e, n) {
  return D(e, mo, n);
}

var oo = () => ({
  contents: new ArrayBuffer(0)
}), io = e => so.encode(e), so = new TextEncoder, ln = e => new Uint8Array(e), fn = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength), ao = (e, n) => e.slice(0, n), uo = (e, {contents: n, length: r}, o) => {
  let s = gn() ? fo(n, o) : lo(n, o);
  return new Uint8Array(s).set(e, r), s;
}, lo = (e, n) => {
  if (n <= e.byteLength) return e;
  let r = new ArrayBuffer(mn(n));
  return new Uint8Array(r).set(new Uint8Array(e), 0), r;
}, fo = (e, n) => {
  if (n <= e.maxByteLength) return e.resize(n), e;
  let r = new ArrayBuffer(n, {
    maxByteLength: mn(n)
  });
  return new Uint8Array(r).set(new Uint8Array(e), 0), r;
}, mn = e => pn ** Math.ceil(Math.log(e) / Math.log(pn)), pn = 2, po = ({contents: e, length: n}) => gn() ? e : e.slice(0, n), gn = () => "resize" in ArrayBuffer.prototype, mo = {
  init: oo,
  convertChunk: {
    string: io,
    buffer: ln,
    arrayBuffer: ln,
    dataView: fn,
    typedArray: fn,
    others: ae
  },
  getSize: ue,
  truncateChunk: ao,
  addChunk: uo,
  getFinalChunk: Fe,
  finalize: po
};

async function ce(e, n) {
  if (!("Buffer" in globalThis)) throw Error("getStreamAsBuffer() is only supported in Node.js");
  try {
    return hn(await Le(e, n));
  } catch (r) {
    if (r.bufferedData !== void 0) r.bufferedData = hn(r.bufferedData);
    throw r;
  }
}

var hn = e => globalThis.Buffer.from(e);

async function je(e, n) {
  return D(e, xo, n);
}

var go = () => ({
  contents: "",
  textDecoder: new TextDecoder
}), de = (e, {textDecoder: n}) => n.decode(e, {
  stream: !0
}), ho = (e, {contents: n}) => n + e, yo = (e, n) => e.slice(0, n), So = ({textDecoder: e}) => {
  let n = e.decode();
  return n === "" ? void 0 : n;
}, xo = {
  init: go,
  convertChunk: {
    string: ke,
    buffer: de,
    arrayBuffer: de,
    dataView: de,
    typedArray: de,
    others: ae
  },
  getSize: ue,
  truncateChunk: yo,
  addChunk: ho,
  getFinalChunk: So,
  finalize: Ge
};

var xn = we(Sn(), 1), bn = e => {
  if (e !== void 0) throw TypeError("The `input` and `inputFile` options cannot be both set.");
}, To = ({input: e, inputFile: n}) => {
  if (typeof n !== "string") return e;
  return bn(e), Eo(n);
}, Cn = e => {
  let n = To(e);
  if (se(n)) throw TypeError("The `input` option cannot be a stream in sync mode");
  return n;
}, Po = ({input: e, inputFile: n}) => {
  if (typeof n !== "string") return e;
  return bn(e), Co(n);
}, En = (e, n) => {
  let r = Po(n);
  if (r === void 0) return;
  if (se(r)) r.pipe(e.stdin); else e.stdin.end(r);
}, wn = (e, {all: n}) => {
  if (!n || !e.stdout && !e.stderr) return;
  let r = xn.default();
  if (e.stdout) r.add(e.stdout);
  if (e.stderr) r.add(e.stderr);
  return r;
}, Me = async (e, n) => {
  if (!e || n === void 0) return;
  await wo(0), e.destroy();
  try {
    return await n;
  } catch (r) {
    return r.bufferedData;
  }
}, De = (e, {encoding: n, buffer: r, maxBuffer: o}) => {
  if (!e || !r) return;
  if (n === "utf8" || n === "utf-8") return je(e, {
    maxBuffer: o
  });
  if (n === null || n === "buffer") return ce(e, {
    maxBuffer: o
  });
  return Io(e, o, n);
}, Io = async (e, n, r) => (await ce(e, {
  maxBuffer: n
})).toString(r), Tn = async ({stdout: e, stderr: n, all: r}, {encoding: o, buffer: s, maxBuffer: u}, d) => {
  let l = De(e, {
    encoding: o,
    buffer: s,
    maxBuffer: u
  }), f = De(n, {
    encoding: o,
    buffer: s,
    maxBuffer: u
  }), p = De(r, {
    encoding: o,
    buffer: s,
    maxBuffer: u * 2
  });
  try {
    return await Promise.all([ d, l, f, p ]);
  } catch (h) {
    return Promise.all([ {
      error: h,
      signal: h.signal,
      timedOut: h.timedOut
    }, Me(e, l), Me(n, f), Me(r, p) ]);
  }
};

var vo = (async () => {})().constructor.prototype, Oo = [ "then", "catch", "finally" ].map(e => [ e, Reflect.getOwnPropertyDescriptor(vo, e) ]), Ue = (e, n) => {
  for (let [r, o] of Oo) {
    let s = typeof n === "function" ? (...u) => Reflect.apply(o.value, n(), u) : o.value.bind(n);
    Reflect.defineProperty(e, r, {
      ...o,
      value: s
    });
  }
}, Pn = e => new Promise((n, r) => {
  if (e.on("exit", (o, s) => {
    n({
      exitCode: o,
      signal: s
    });
  }), e.on("error", o => {
    r(o);
  }), e.stdin) e.stdin.on("error", o => {
    r(o);
  });
});

import { Buffer as Ao } from "buffer";

import { ChildProcess as Ro } from "child_process";

var On = (e, n = []) => {
  if (!Array.isArray(n)) return [ e ];
  return [ e, ...n ];
}, _o = /^[\w.-]+$/, $o = e => {
  if (typeof e !== "string" || _o.test(e)) return e;
  return `"${e.replaceAll('"', '\\"')}"`;
}, Be = (e, n) => On(e, n).join(" "), Ke = (e, n) => On(e, n).map(r => $o(r)).join(" "), ko = / +/g;

var In = e => {
  let n = typeof e;
  if (n === "string") return e;
  if (n === "number") return String(e);
  if (n === "object" && e !== null && !(e instanceof Ro) && "stdout" in e) {
    let r = typeof e.stdout;
    if (r === "string") return e.stdout;
    if (Ao.isBuffer(e.stdout)) return e.stdout.toString();
    throw TypeError(`Unexpected "${r}" stdout in template expression`);
  }
  throw TypeError(`Unexpected "${n}" in template expression`);
}, vn = (e, n, r) => r || e.length === 0 || n.length === 0 ? [ ...e, ...n ] : [ ...e.slice(0, -1), `${e.at(-1)}${n[0]}`, ...n.slice(1) ], Fo = ({templates: e, expressions: n, tokens: r, index: o, template: s}) => {
  let u = s ?? e.raw[o], d = u.split(ko).filter(Boolean), l = vn(r, d, u.startsWith(" "));
  if (o === n.length) return l;
  let f = n[o], p = Array.isArray(f) ? f.map(h => In(h)) : [ In(f) ];
  return vn(l, p, u.endsWith(" "));
}, ze = (e, n) => {
  let r = [];
  for (let [o, s] of e.entries()) r = Fo({
    templates: e,
    expressions: n,
    tokens: r,
    index: o,
    template: s
  });
  return r;
};

import { debuglog as No } from "util";

import Go from "process";

var An = No("execa").enabled, le = (e, n) => String(e).padStart(n, "0"), Lo = () => {
  let e = new Date;
  return `${le(e.getHours(), 2)}:${le(e.getMinutes(), 2)}:${le(e.getSeconds(), 2)}.${le(e.getMilliseconds(), 3)}`;
}, We = (e, {verbose: n}) => {
  if (!n) return;
  Go.stderr.write(`[${Lo()}] ${e}\n`);
};

var Do = 1e8, Uo = ({env: e, extendEnv: n, preferLocal: r, localDir: o, execPath: s}) => {
  let u = n ? {
    ...fe.env,
    ...e
  } : e;
  if (r) return zt({
    env: u,
    cwd: o,
    execPath: s
  });
  return u;
}, $n = (e, n, r = {}) => {
  let o = _n.default._parse(e, n, r);
  if (e = o.command, n = o.args, r = o.options, r = {
    maxBuffer: Do,
    buffer: !0,
    stripFinalNewline: !0,
    extendEnv: !0,
    preferLocal: !1,
    localDir: r.cwd || fe.cwd(),
    execPath: fe.execPath,
    encoding: "utf8",
    reject: !0,
    cleanup: !0,
    all: !1,
    windowsHide: !0,
    verbose: An,
    ...r
  }, r.env = Uo(r), r.stdio = Zt(r), fe.platform === "win32" && Mo.basename(e, ".exe") === "cmd") n.unshift("/q");
  return {
    file: e,
    args: n,
    options: r,
    parsed: o
  };
}, U = (e, n, r) => {
  if (typeof n !== "string" && !jo.isBuffer(n)) return r === void 0 ? void 0 : "";
  if (e.stripFinalNewline) return Ce(n);
  return n;
};

function Igt(e, n, r) {
  let o = $n(e, n, r), s = Be(e, n), u = Ke(e, n);
  We(u, o.options), on(o.options);
  let d;
  try {
    d = qe.spawn(o.file, o.args, o.options);
  } catch (T) {
    let w = new qe.ChildProcess, v = Promise.reject(M({
      error: T,
      stdout: "",
      stderr: "",
      all: "",
      command: s,
      escapedCommand: u,
      parsed: o,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    }));
    return Ue(w, v), w;
  }
  let l = Pn(d), f = rn(d, o.options, l), p = sn(d, o.options, f), h = {
    isCanceled: !1
  };
  d.kill = tn.bind(null, d.kill.bind(d)), d.cancel = nn.bind(null, d, h);
  let y = qt(async () => {
    let [{error: T, exitCode: w, signal: v, timedOut: R}, H, V, X] = await Tn(d, o.options, p), tt = U(o.options, H), nt = U(o.options, V), rt = U(o.options, X);
    if (T || w !== 0 || v !== null) {
      let ot = M({
        error: T,
        exitCode: w,
        signal: v,
        stdout: tt,
        stderr: nt,
        all: rt,
        command: s,
        escapedCommand: u,
        parsed: o,
        timedOut: R,
        isCanceled: h.isCanceled || (o.options.signal ? o.options.signal.aborted : !1),
        killed: d.killed
      });
      if (!o.options.reject) return ot;
      throw ot;
    }
    return {
      command: s,
      escapedCommand: u,
      exitCode: 0,
      stdout: tt,
      stderr: nt,
      all: rt,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  });
  return En(d, o.options), d.all = wn(d, o.options), an(d), Ue(d, y), d;
}

function B(e, n, r) {
  let o = $n(e, n, r), s = Be(e, n), u = Ke(e, n);
  We(u, o.options);
  let d = Cn(o.options), l;
  try {
    l = qe.spawnSync(o.file, o.args, {
      ...o.options,
      input: d
    });
  } catch (h) {
    throw M({
      error: h,
      stdout: "",
      stderr: "",
      all: "",
      command: s,
      escapedCommand: u,
      parsed: o,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    });
  }
  let f = U(o.options, l.stdout, l.error), p = U(o.options, l.stderr, l.error);
  if (l.error || l.status !== 0 || l.signal !== null) {
    let h = M({
      stdout: f,
      stderr: p,
      error: l.error,
      signal: l.signal,
      exitCode: l.status,
      command: s,
      escapedCommand: u,
      parsed: o,
      timedOut: l.error && l.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: l.signal !== null
    });
    if (!o.options.reject) return h;
    throw h;
  }
  return {
    command: s,
    escapedCommand: u,
    exitCode: 0,
    stdout: f,
    stderr: p,
    failed: !1,
    timedOut: !1,
    isCanceled: !1,
    killed: !1
  };
}

var Bo = ({input: e, inputFile: n, stdio: r}) => e === void 0 && n === void 0 && r === void 0 ? {
  stdin: "inherit"
} : {}, Rn = (e = {}) => ({
  preferLocal: !0,
  ...Bo(e),
  ...e
});

function kn(e) {
  function n(r, ...o) {
    if (!Array.isArray(r)) return kn({
      ...e,
      ...r
    });
    let [s, ...u] = ze(r, o);
    return Igt(s, u, Rn(e));
  }
  return n.sync = (r, ...o) => {
    if (!Array.isArray(r)) throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [s, ...u] = ze(r, o);
    return B(s, u, Rn(e));
  }, n;
}

var ia = kn();

var a$t = "Programs are unavailable in this session; the command was not run.";

function lL() {
  return he();
}

function cq() {
  if (lL()) throw new x(a$t, "a program start was refused in a diskless session");
}

import { mkdirSync as Ye, readFileSync as G, rmdirSync as Nn, statSync as Ko, writeFileSync as pe } from "fs";

import { totalmem as zo } from "os";

import { posix as P } from "path";

function He(e) {
  let n;
  for (let r of e.split(`\n`)) {
    let [o, s, ...u] = r.split(":");
    if (s === void 0 || u.length === 0) continue;
    let d = u.join(":");
    if (s.split(",").includes("memory")) return {
      mountRoot: "/sys/fs/cgroup/memory",
      path: d,
      v2: !1
    };
    if (o === "0" && s === "") n = d;
  }
  return n === void 0 ? void 0 : {
    mountRoot: "/sys/fs/cgroup",
    path: n,
    v2: !0
  };
}

var Ve = "claude-code-bash", Wo = "claude-code-keeper", Gn = 1073741824, qo = Gn, Xe = [ "mcp", "lsp", "hooks", "plugin", "tmux", "helper", "agent" ];

class Ln {
  reader=null;
  subscribeRefresh=null;
  register(e) {
    let n = this.reader;
    return this.reader = e, n;
  }
  read(e, n) {
    return this.reader ? this.reader(e, n) : n;
  }
}

var N = new Ln;

function EFs(e, n) {
  if (n !== void 0) N.subscribeRefresh = n;
  return N.register(e);
}

class jn {
  dir=void 0;
  layout=void 0;
  limit=0;
  activatedClasses=new Set;
  pendingPids=new Map;
  pendingUnsubscribe=void 0;
  oomKillsSeen=void 0;
}

var I = new K(() => new jn);

function Ze() {
  let e = ps(I);
  if (e.dir !== void 0) return e.dir ?? void 0;
  if (ZS()) {
    e.dir = null;
    return;
  }
  let n = O();
  if (n !== "linux" && n !== "wsl") {
    e.dir = null;
    return;
  }
  let r = a.CLAUDE_CODE_TOOL_MEMORY_LIMIT?.trim().toLowerCase();
  if (r && (ys(r) || r === "none")) {
    e.dir = null;
    return;
  }
  let o = ci(r);
  if (o === void 0 && N.read("tengu_tool_memory_cgroup", !1) !== !0) return;
  try {
    let s = oi(G("/proc/self/cgroup", "utf8"));
    if (!s) throw Error("no memory cgroup hierarchy");
    let u = ui(o, zo());
    if (u === void 0) {
      e.dir = null, t("tool cgroup: disabled (host too small for the default cap)"), i("tengu_tool_cgroup", {
        status: b("host_too_small")
      });
      return;
    }
    zn(s, u), e.dir = s.dir, e.layout = s, e.limit = u, t(`tool cgroup: ${s.dir} ${s.reuse ? "(nested: already capped, reusing our own)" : `limit=${u}`}`), 
    g("shell_memory_cgroup"), i("tengu_tool_cgroup", s.reuse ? {
      status: b("nested")
    } : {
      status: b("enabled"),
      limit_bytes: u
    });
  } catch (s) {
    e.dir = null, t(`tool cgroup: disabled (${E(s) ?? s})`), m("shell_memory_cgroup", zr(s) ?? "no_hierarchy"), 
    i("tengu_tool_cgroup", {
      status: b("disabled")
    });
  }
  return e.dir ?? void 0;
}

function z(e) {
  if (Ze() === void 0) return;
  if (e !== "shell" && Mn().has(e)) return;
  let n = ps(I), r = Ho(n);
  if (r === void 0) return;
  if (Bn(n), !n.activatedClasses.has(e)) n.activatedClasses.add(e), i("tengu_tool_cgroup", {
    status: b("class_enabled"),
    class: c(e)
  });
  return r;
}

function kFs(e) {
  return typeof ps(I).dir === "string" && (e === "shell" || !Mn().has(e));
}

function Ho(e, n = {
  exists: Vo,
  mkdirSync: Ye,
  writeFileSync: pe,
  rmdirSync: Nn
}) {
  if (e.dir === void 0 || e.dir === null) return;
  try {
    if (n.exists(e.dir)) return e.dir;
    if (e.layout === void 0 || e.layout.reuse) throw Error("enclosing tool cgroup is gone");
    return zn(e.layout, e.limit, n), t(`tool cgroup: ${e.dir} vanished; re-created`), 
    i("tengu_tool_cgroup", {
      status: b("recreated")
    }), e.dir;
  } catch (r) {
    e.dir = null, t(`tool cgroup: disabled (dir vanished: ${E(r) ?? r})`), i("tengu_tool_cgroup", {
      status: b("vanished")
    });
    return;
  }
}

function Vo(e) {
  return Ko(e, {
    throwIfNoEntry: !1
  }) !== void 0;
}

function Mn() {
  let e = a.CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE?.trim(), n = Xo(e);
  if (n.has("mcp") || !Yo(!e)) return n;
  return new Set([ ...n, "mcp" ]);
}

function Xo(e) {
  if (e) return Fn(e.split(","));
  let n = N.read("tengu_tool_cgroup_exclude_classes", null);
  if (Array.isArray(n)) return Fn(n);
  return new Set(Xe);
}

function Yo(e) {
  let n = a.CLAUDE_CODE_MCP_MEMORY_CGROUP?.trim().toLowerCase();
  if (n && (ys(n) || n === "none")) return !0;
  return e && N.read("tengu_mcp_memory_cgroup", null) === !1;
}

function Fn(e) {
  let n = new Set;
  for (let r of e) {
    let o = typeof r === "string" ? r.trim().toLowerCase() : "";
    if (o === "all-new") {
      Xe.forEach(u => n.add(u));
      continue;
    }
    let s = Xe.find(u => u === o);
    if (s !== void 0) n.add(s);
  }
  return n;
}

function Dl(e) {
  let n = z(e);
  return n === void 0 ? {} : {
    cgroup: n
  };
}

function s4n(e, n, r) {
  let o = z(e);
  if (o === void 0) return {
    command: n,
    args: [ ...r ],
    pending: Ogt(),
    capped: !1
  };
  if (S$(n) === null) return {
    command: n,
    args: [ ...r ],
    pending: !0,
    capped: !1
  };
  return {
    pending: !1,
    capped: !0,
    command: "/bin/sh",
    args: [ "-c", '{ echo 0 > "$0"/cgroup.procs; } 2>/dev/null; exec "$@"', o, n, ...r ]
  };
}

function Ogt() {
  return ps(I).dir === void 0;
}

var Zo = 64, i4n = {
  readStarttime: Jo,
  writeFileSync: pe,
  readCgroupPids: ti,
  readProcIdentity: ei
};

function _je(e, n, r, o = i4n) {
  try {
    if (!n) return;
    Ze();
    let s = ps(I);
    if (s.dir === null) return;
    let u = o.readStarttime(n);
    if (u === void 0) return;
    let d = {
      cls: e,
      starttime: u,
      shouldStayUncapped: r
    };
    if (s.dir !== void 0) {
      Dn(n, d, o);
      return;
    }
    if (Un(s, o), s.pendingPids.size >= Zo) {
      t(`tool cgroup: pending pid ${n} not parked (full)`);
      return;
    }
    s.pendingPids.set(n, d), s.pendingUnsubscribe ??= N.subscribeRefresh?.(() => Qo());
  } catch (s) {
    t(`tool cgroup: pending pid not parked (${s})`);
  }
}

function Qo(e = i4n) {
  let n = ps(I);
  try {
    if (Ze(), n.dir === void 0) {
      Un(n, e);
      return;
    }
    if (n.dir !== null) for (let [r, o] of n.pendingPids) Dn(r, o, e);
  } catch (r) {
    t(`tool cgroup: late attach skipped (${r})`);
  }
  n.pendingPids.clear(), n.pendingUnsubscribe?.(), n.pendingUnsubscribe = void 0;
}

function Dn(e, {cls: n, starttime: r, shouldStayUncapped: o}, s) {
  let u = z(n);
  if (u === void 0 || s.readStarttime(e) !== r) return;
  try {
    if (o?.()) {
      t(`tool cgroup: ${n} pid ${e} left uncapped`);
      return;
    }
    let d = P.join(u, "cgroup.procs");
    s.writeFileSync(d, String(e));
    let l = 1, f = ps(I).layout;
    if (f !== void 0 && !f.reuse) l += Kn(e, f.selfDir, d, s, "attached");
    t(`tool cgroup: late-attached ${n} pid ${e} (${l} process${l === 1 ? "" : "es"})`);
  } catch (d) {
    t(`tool cgroup: late attach of pid ${e} failed (${E(d) ?? d})`);
  }
}

function Un(e, n) {
  for (let [r, {starttime: o}] of e.pendingPids) if (n.readStarttime(r) !== o) e.pendingPids.delete(r);
}

function Jo(e) {
  try {
    return BU(G(`/proc/${e}/stat`, "utf8"));
  } catch {
    return;
  }
}

function ei(e) {
  try {
    let n = G(`/proc/${e}/stat`, "utf8"), r = l4n(n), o = BU(n);
    return r === void 0 || o === void 0 ? void 0 : {
      ppid: r,
      starttime: o
    };
  } catch {
    return;
  }
}

function ti(e) {
  return G(P.join(e, "cgroup.procs"), "utf8").split(`\n`).map(n => Number.parseInt(n, 10)).filter(n => !Number.isNaN(n));
}

function ni(e) {
  let n = /^oom_kill (\d+)$/m.exec(e);
  return n ? Number.parseInt(n[1], 10) : void 0;
}

function Qe(e) {
  return P.join(e.dir, e.v2 ? "memory.events" : "memory.oom_control");
}

function W(e) {
  return G(e, "utf8");
}

function Je(e, n = W) {
  try {
    return ni(n(e));
  } catch {
    return;
  }
}

function ZMo(e = W) {
  let {dir: n, layout: r} = ps(I);
  if (!n || r === void 0) return;
  return Je(Qe(r), e);
}

function TFs(e, n = W) {
  let r = ps(I), o = e ?? r.oomKillsSeen, s = ZMo(n);
  return Bn(r, n, s), o === void 0 || s === void 0 ? void 0 : s > o;
}

function Bn(e, n = W, r) {
  try {
    let o = e.layout;
    if (!e.dir || o === void 0 || o.reuse) return;
    let s = r ?? Je(Qe(o), n);
    if (s === void 0) return;
    let u = e.oomKillsSeen;
    if (e.oomKillsSeen = s, u === void 0 || s <= u) return;
    t(`tool cgroup: OOM killer fired ${s - u} time(s) in ${o.dir} since last check`), 
    i("tengu_tool_cgroup", {
      status: b("oom_kill"),
      oom_kills: s - u,
      cgroup_v2: o.v2
    });
  } catch (o) {
    t(`tool cgroup: oom_kill check skipped (${o})`);
  }
}

function AFs(e, n = W) {
  let r = z(e), o = ps(I).layout;
  if (r === void 0 || o === void 0) return;
  let s = Qe(o);
  return () => Je(s, n);
}

function CFs(e, n) {
  let r = z(e);
  if (r === void 0) return n;
  return `sh -c '{ echo $PPID > "$1"/cgroup.procs; } 2>/dev/null' sh ${co([ r ])}; ${n}`;
}

function a4n(e, n, r = i4n) {
  try {
    let o = ps(I);
    if (o.dir === void 0) {
      if (o.pendingPids.get(e)?.starttime !== n) return !1;
      return o.pendingPids.delete(e), t(`tool cgroup: unparked pid ${e}; it stays uncapped`), 
      !0;
    }
    let s = o.layout;
    if (!o.dir || s === void 0 || s.reuse) return !1;
    if (r.readStarttime(e) !== n) return !1;
    let u = P.join(s.selfDir, "cgroup.procs");
    r.writeFileSync(u, String(e));
    let d = 1 + Kn(e, s.dir, u, r, "released");
    return t(`tool cgroup: released pid ${e} (${d} process${d === 1 ? "" : "es"}) to ${s.selfDir}`), 
    i("tengu_tool_cgroup", {
      status: b("released"),
      released_count: d
    }), !0;
  } catch (o) {
    return t(`tool cgroup: release of pid ${e} failed (${E(o) ?? o})`), !1;
  }
}

function Kn(e, n, r, o, s) {
  let u = 0;
  for (let {pid: d, starttime: l} of ri(e, n, o)) {
    if (o.readStarttime(d) !== l) {
      t(`tool cgroup: descendant ${d} of pid ${e} exited or was recycled; skipped`);
      continue;
    }
    try {
      o.writeFileSync(r, String(d)), u++;
    } catch (f) {
      t(`tool cgroup: descendant ${d} of pid ${e} not ${s} (${E(f) ?? f})`);
    }
  }
  return u;
}

function ri(e, n, r) {
  let o;
  try {
    o = r.readCgroupPids(n);
  } catch (l) {
    return t(`tool cgroup: members of ${n} unreadable (${E(l) ?? l}); moving pid ${e} alone`), 
    [];
  }
  let s = new Map;
  for (let l of o) {
    if (l === e) continue;
    let f;
    try {
      f = r.readProcIdentity(l);
    } catch {
      f = void 0;
    }
    if (f === void 0) continue;
    let p = {
      pid: l,
      starttime: f.starttime
    }, h = s.get(f.ppid);
    if (h) h.push(p); else s.set(f.ppid, [ p ]);
  }
  let u = [], d = [ e ];
  for (let l = 0; l < d.length; l++) for (let f of s.get(d[l]) ?? []) u.push(f), d.push(f.pid);
  return u;
}

function zn(e, n, r = {
  mkdirSync: Ye,
  writeFileSync: pe,
  rmdirSync: Nn
}) {
  if (e.reuse) return;
  let o = !0;
  try {
    r.mkdirSync(e.dir);
  } catch (s) {
    if (E(s) !== "EEXIST") throw s;
    o = !1;
  }
  try {
    r.writeFileSync(P.join(e.dir, e.v2 ? "memory.max" : "memory.limit_in_bytes"), String(n));
  } catch (s) {
    if (o) try {
      r.rmdirSync?.(e.dir);
    } catch {}
    throw s;
  }
}

function oi(e) {
  let n = He(e);
  if (!n) return;
  return si(n.mountRoot, n.path, n.v2 ? P.dirname(n.path) : n.path, n.v2);
}

function ii(e) {
  let n = He(e);
  if (!n) return;
  let r = n.path.split("/"), o = r.indexOf(Ve);
  if (o < 0) return;
  let s = P.join(n.mountRoot, ...r.slice(0, o));
  return n.v2 ? {
    dir: P.join(s, Wo),
    create: !0
  } : {
    dir: s,
    create: !1
  };
}

var Wn = {
  readSelfCgroup: () => G("/proc/self/cgroup", "utf8"),
  mkdirSync: Ye,
  writeFileSync: pe
};

function qn(e) {
  let n = O();
  if (n !== "linux" && n !== "wsl") return;
  try {
    let r = ii(e.readSelfCgroup());
    if (r === void 0) return;
    if (r.create) try {
      e.mkdirSync(r.dir);
    } catch (o) {
      if (E(o) !== "EEXIST") throw o;
    }
    return r.dir;
  } catch (r) {
    t(`tool cgroup: keeper dir unavailable (${E(r) ?? r})`);
    return;
  }
}

function ax(e, n = Wn) {
  if (!e) return;
  let r = qn(n);
  if (r === void 0) return;
  try {
    n.writeFileSync(P.join(r, "cgroup.procs"), String(e)), t(`tool cgroup: keeper pid ${e} moved to ${r}`);
  } catch (o) {
    t(`tool cgroup: keeper pid ${e} not moved (${E(o) ?? o})`);
  }
}

function qMr(e = Wn) {
  let n = qn(e);
  return n === void 0 ? {} : {
    cgroup: n
  };
}

function si(e, n, r, o) {
  let s = n.split("/").includes(Ve), u = P.join(e, n, ".");
  return s ? {
    dir: u,
    v2: o,
    reuse: !0,
    selfDir: u
  } : {
    dir: P.join(e, r, Ve),
    v2: o,
    reuse: !1,
    selfDir: u
  };
}

function ai(e) {
  return Math.floor(e - Math.max(2 * Gn, e * .15));
}

function ui(e, n) {
  if (e !== void 0) return e;
  let r = ai(n);
  return r >= qo ? r : void 0;
}

function ci(e) {
  let n = /^(\d+(?:\.\d+)?)\s*([kmgt]?)(?:i?b)?$/i.exec(e?.trim() ?? "");
  if (!n) return;
  let r = Math.floor(Number(n[1]) * 1024 ** " kmgt".indexOf((n[2] || " ").toLowerCase()));
  return r >= 1 ? r : void 0;
}

function q({useToolMemoryCgroup: e = !0, toolCgroupClass: n = "helper"}) {
  return e ? Dl(n) : {};
}

function et() {
  return !1;
}

async function Qh(e, n = [], r = {}) {
  cq();
  let {useToolMemoryCgroup: o, toolCgroupClass: s, ...u} = r, d = {
    ...q({
      useToolMemoryCgroup: o,
      toolCgroupClass: s
    }),
    ...u
  };
  if (et()) {
    let l = Pj(e);
    if (l === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return Igt(l, n, d);
  }
  return Igt(e, n, d);
}

function aD(e, n = [], r = {}) {
  cq();
  let {useToolMemoryCgroup: o, toolCgroupClass: s, ...u} = r, d = e;
  if (et()) {
    let p = Pj(e);
    if (p === null) throw Object.assign(new x(`Command '${e}' not found or is in an unsafe location (current directory)`, "safeSpawn: command not found or is in an unsafe location (current directory)"), {
      code: "ENOENT"
    });
    d = p;
  }
  let l = q({
    useToolMemoryCgroup: o,
    toolCgroupClass: s
  }), f = Igt(d, n, {
    ...l,
    ...u,
    buffer: !1,
    reject: !1
  });
  if (o !== !1 && l.cgroup === void 0 && Ogt()) _je(s ?? "helper", f.pid);
  return f.catch(() => {}), f;
}

function eHo(e, n = [], r = {}) {
  cq();
  let {useToolMemoryCgroup: o, toolCgroupClass: s, ...u} = r, d = {
    ...q({
      useToolMemoryCgroup: o,
      toolCgroupClass: s
    }),
    ...u
  };
  if (et()) {
    let l = Pj(e);
    if (l === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return B(l, n, d);
  }
  return B(e, n, d);
}

async function gI(e, n = {}) {
  cq();
  let {useToolMemoryCgroup: r, toolCgroupClass: o, ...s} = n;
  return Igt(e, {
    ...q({
      useToolMemoryCgroup: r,
      toolCgroupClass: o
    }),
    ...s,
    shell: !0
  });
}

function RFs(e, n = {}) {
  cq();
  let {useToolMemoryCgroup: r, toolCgroupClass: o, ...s} = n;
  return B(e, {
    ...q({
      useToolMemoryCgroup: r,
      toolCgroupClass: o
    }),
    ...s,
    shell: !0
  });
}

export { o4n, wX, Igt, a$t, lL, cq, EFs, kFs, Dl, s4n, Ogt, i4n, _je, ZMo, TFs, AFs, CFs, a4n, ax, qMr, Qh, aD, eHo, gI, RFs };
