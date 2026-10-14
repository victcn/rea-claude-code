// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Oan } from "./chunk-vps0k559.js";

import { we, C, Ne } from "./chunk-m8ez8fhk.js";

var I = C(function(c) {
  var ee = c && c.__createBinding || (Object.create ? function(e, t, n, r) {
    if (r === void 0) r = n;
    var o = Object.getOwnPropertyDescriptor(t, n);
    if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) o = {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    };
    Object.defineProperty(e, r, o);
  } : function(e, t, n, r) {
    if (r === void 0) r = n;
    e[r] = t[n];
  }), te = c && c.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function(e, t) {
    e.default = t;
  }), M = c && c.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) {
      for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) ee(t, e, n);
    }
    return te(t, e), t;
  };
  Object.defineProperty(c, "__esModule", {
    value: !0
  });
  c.req = c.json = c.toBuffer = void 0;
  var ne = M(Ne("http")), re = M(Ne("https"));
  async function T(e) {
    let t = 0, n = [];
    for await (let r of e) t += r.length, n.push(r);
    return Buffer.concat(n, t);
  }
  c.toBuffer = T;
  async function oe(e) {
    let n = (await T(e)).toString("utf8");
    try {
      return JSON.parse(n);
    } catch (r) {
      let o = r;
      throw o.message += ` (input: ${n})`, o;
    }
  }
  c.json = oe;
  function se(e, t = {}) {
    let r = ((typeof e === "string" ? e : e.href).startsWith("https:") ? re : ne).request(e, t), o = new Promise((s, i) => {
      r.once("response", s).once("error", i).end();
    });
    return r.then = o.then.bind(o), r;
  }
  c.req = se;
});

var ROo = C(function(u) {
  var B = u && u.__createBinding || (Object.create ? function(e, t, n, r) {
    if (r === void 0) r = n;
    var o = Object.getOwnPropertyDescriptor(t, n);
    if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) o = {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    };
    Object.defineProperty(e, r, o);
  } : function(e, t, n, r) {
    if (r === void 0) r = n;
    e[r] = t[n];
  }), ie = u && u.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function(e, t) {
    e.default = t;
  }), D = u && u.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) {
      for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) B(t, e, n);
    }
    return ie(t, e), t;
  }, ce = u && u.__exportStar || function(e, t) {
    for (var n in e) if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) B(t, e, n);
  };
  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  u.Agent = void 0;
  var ue = D(Ne("net")), q = D(Ne("http")), L = Ne("https");
  ce(I(), u);
  var d = Symbol("AgentBaseInternalState");
  class k extends q.Agent {
    constructor(e) {
      super(e);
      this[d] = {};
    }
    isSecureEndpoint(e) {
      if (e) {
        if (typeof e.secureEndpoint === "boolean") return e.secureEndpoint;
        if (typeof e.protocol === "string") return e.protocol === "https:";
      }
      let {stack: t} = Error();
      if (typeof t !== "string") return !1;
      return t.split(`\n`).some(n => n.indexOf("(https.js:") !== -1 || n.indexOf("node:https:") !== -1);
    }
    incrementSockets(e) {
      if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
      if (!this.sockets[e]) this.sockets[e] = [];
      let t = new ue.Socket({
        writable: !1
      });
      return this.sockets[e].push(t), this.totalSocketCount++, t;
    }
    decrementSockets(e, t) {
      if (!this.sockets[e] || t === null) return;
      let n = this.sockets[e], r = n.indexOf(t);
      if (r !== -1) {
        if (n.splice(r, 1), this.totalSocketCount--, n.length === 0) delete this.sockets[e];
      }
    }
    getName(e) {
      if (typeof e.secureEndpoint === "boolean" ? e.secureEndpoint : this.isSecureEndpoint(e)) return L.Agent.prototype.getName.call(this, e);
      return super.getName(e);
    }
    createSocket(e, t, n) {
      let r = {
        ...t,
        secureEndpoint: this.isSecureEndpoint(t)
      }, o = this.getName(r), s = this.incrementSockets(o);
      Promise.resolve().then(() => this.connect(e, r)).then(i => {
        if (this.decrementSockets(o, s), i instanceof q.Agent) try {
          return i.addRequest(e, r);
        } catch (h) {
          return n(h);
        }
        this[d].currentSocket = i, super.createSocket(e, t, n);
      }, i => {
        this.decrementSockets(o, s), n(i);
      });
    }
    createConnection() {
      let e = this[d].currentSocket;
      if (this[d].currentSocket = void 0, !e) throw Error("No socket was returned in the `connect()` function");
      return e;
    }
    get defaultPort() {
      return this[d].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
    }
    set defaultPort(e) {
      if (this[d]) this[d].defaultPort = e;
    }
    get protocol() {
      return this[d].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
    }
    set protocol(e) {
      if (this[d]) this[d].protocol = e;
    }
  }
  u.Agent = k;
});

var U = C(function(y) {
  var ae = y && y.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(y, "__esModule", {
    value: !0
  });
  y.parseProxyResponse = void 0;
  var fe = ae(Oan()), P = (0, fe.default)("https-proxy-agent:parse-proxy-response");
  function le(e) {
    return new Promise((t, n) => {
      let r = 0, o = [];
      function s() {
        let l = e.read();
        if (l) S(l); else e.once("readable", s);
      }
      function i() {
        e.removeListener("end", h), e.removeListener("error", p), e.removeListener("readable", s);
      }
      function h() {
        i(), P("onend"), n(Error("Proxy connection ended before receiving CONNECT response"));
      }
      function p(l) {
        i(), P("onerror %o", l), n(l);
      }
      function S(l) {
        o.push(l), r += l.length;
        let a = Buffer.concat(o, r), H = a.indexOf(`\r\n\r\n`);
        if (H === -1) {
          P("have not received end of HTTP headers yet..."), s();
          return;
        }
        let A = a.slice(0, H).toString("ascii").split(`\r\n`), w = A.shift();
        if (!w) return e.destroy(), n(Error("No header received from proxy CONNECT response"));
        let R = w.split(" "), V = +R[1], Z = R.slice(2).join(" "), _ = {};
        for (let g of A) {
          if (!g) continue;
          let m = g.indexOf(":");
          if (m === -1) return e.destroy(), n(Error(`Invalid header from proxy CONNECT response: "${g}"`));
          let x = g.slice(0, m).toLowerCase(), E = g.slice(m + 1).trimStart(), v = _[x];
          if (typeof v === "string") _[x] = [ v, E ]; else if (Array.isArray(v)) v.push(E); else _[x] = E;
        }
        P("got proxy server response: %o %o", w, _), i(), t({
          connect: {
            statusCode: V,
            statusText: Z,
            headers: _
          },
          buffered: a
        });
      }
      e.on("error", p), e.on("end", h), s();
    });
  }
  y.parseProxyResponse = le;
});

var dgt = C(function(f) {
  var de = f && f.__createBinding || (Object.create ? function(e, t, n, r) {
    if (r === void 0) r = n;
    var o = Object.getOwnPropertyDescriptor(t, n);
    if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) o = {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    };
    Object.defineProperty(e, r, o);
  } : function(e, t, n, r) {
    if (r === void 0) r = n;
    e[r] = t[n];
  }), he = f && f.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function(e, t) {
    e.default = t;
  }), J = f && f.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) {
      for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) de(t, e, n);
    }
    return he(t, e), t;
  }, K = f && f.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(f, "__esModule", {
    value: !0
  });
  f.HttpsProxyAgent = void 0;
  var O = J(Ne("net")), W = J(Ne("tls")), pe = K(Ne("assert")), ye = K(Oan()), X = ROo(), Y = Ne("url"), G = U(), b = (0, 
  ye.default)("https-proxy-agent"), z = e => {
    if (e.servername === void 0 && e.host && !O.isIP(e.host)) return {
      ...e,
      servername: e.host
    };
    return e;
  };
  class j extends X.Agent {
    constructor(e, t) {
      super(t);
      this.options = {
        path: void 0
      }, this.proxy = typeof e === "string" ? new Y.URL(e) : e, this.proxyHeaders = t?.headers ?? {}, 
      b("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
      let n = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), r = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ALPNProtocols: [ "http/1.1" ],
        ...t ? F(t, "headers") : null,
        host: n,
        port: r
      };
    }
    async connect(e, t) {
      let {proxy: n} = this;
      if (!t.host) throw TypeError('No "host" provided');
      let r;
      if (n.protocol === "https:") b("Creating `tls.Socket`: %o", this.connectOpts), r = W.connect(z(this.connectOpts)); else b("Creating `net.Socket`: %o", this.connectOpts), 
      r = O.connect(this.connectOpts);
      let o = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
        ...this.proxyHeaders
      }, s = O.isIPv6(t.host) ? `[${t.host}]` : t.host, i = `CONNECT ${s}:${t.port} HTTP/1.1\r\n`;
      if (n.username || n.password) {
        let a = `${decodeURIComponent(n.username)}:${decodeURIComponent(n.password)}`;
        o["Proxy-Authorization"] = `Basic ${Buffer.from(a).toString("base64")}`;
      }
      if (o.Host = `${s}:${t.port}`, !o["Proxy-Connection"]) o["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let a of Object.keys(o)) i += `${a}: ${o[a]}\r\n`;
      let h = G.parseProxyResponse(r);
      r.write(`${i}\r\n`);
      let {connect: p, buffered: S} = await h;
      if (e.emit("proxyConnect", p), this.emit("proxyConnect", p, e), p.statusCode === 200) {
        if (e.once("socket", _e), t.secureEndpoint) return b("Upgrading socket connection to TLS"), 
        W.connect({
          ...F(z(t), "host", "path", "port"),
          socket: r
        });
        return r;
      }
      r.destroy();
      let l = new O.Socket({
        writable: !1
      });
      return l.readable = !0, e.once("socket", a => {
        b("Replaying proxy buffer for failed request"), (0, pe.default)(a.listenerCount("data") > 0), 
        a.push(S), a.push(null);
      }), l;
    }
  }
  j.protocols = [ "http", "https" ];
  f.HttpsProxyAgent = j;
  function _e(e) {
    e.resume();
  }
  function F(e, ...t) {
    let n = {}, r;
    for (r in e) if (!t.includes(r)) n[r] = e[r];
    return n;
  }
});

var Q = we(dgt(), 1);

class N extends Error {
  connectStatus;
  headers;
  code="ERR_PROXY_TUNNEL";
  constructor(e, t) {
    super("proxy refused the connection");
    this.connectStatus = e;
    this.headers = t;
    this.name = "ProxyConnectRefusedError";
  }
}

function nq(e) {
  return e === 0 ? "unreadable reply" : `HTTP ${e}`;
}

function oM(e) {
  for (let t = e, n = 0; n < 4; n++) {
    if (t instanceof N) return t;
    if (typeof t !== "object" || t === null || !("cause" in t)) return;
    t = t.cause;
  }
  return;
}

class fXe extends Q.HttpsProxyAgent {
  async connect(...[e, t]) {
    let n, r = i => {
      if (i.statusCode !== 200) n = i;
    };
    e.once("proxyConnect", r);
    let o;
    try {
      o = await super.connect(e, t);
    } finally {
      e.removeListener("proxyConnect", r);
    }
    if (n === void 0) return o;
    o.destroy();
    let s = n.statusCode;
    throw new N(Number.isInteger(s) && s >= 100 && s <= 599 ? s : 0, n.headers);
  }
}

export { ROo, dgt, nq, oM, fXe };
