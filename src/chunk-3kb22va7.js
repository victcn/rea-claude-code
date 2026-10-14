// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ne } from "./chunk-5wbhf1bk.js";

import { pq } from "./chunk-6ah1819r.js";

import { fM } from "./chunk-kawq2919.js";

import { ut } from "./chunk-yxennhe9.js";

import { d9e } from "./chunk-g6nh65r0.js";

import { Un, Ly, ZG } from "./chunk-ddr690nj.js";

import { O } from "./chunk-1xnsr4dy.js";

import { readFileSync as F, lstatSync as L } from "fs";

import { lstat as w, readFile as k } from "fs/promises";

async function Xa(e, n) {
  try {
    let r = await w(e);
    if (!r.isFile() || r.size > n) return null;
    return await k(e, "utf8");
  } catch {
    return null;
  }
}

function sDs(e, n) {
  try {
    let r = L(e);
    if (!r.isFile() || r.size > n) return null;
    return F(e, "utf8");
  } catch {
    return null;
  }
}

async function gT(e, n, r, i) {
  let t = await e.stat(n);
  if (!t.isFile() || t.size > r) return i?.(t), null;
  return await e.readFile(n, {
    encoding: "utf8"
  });
}

function iDs(e, n, r) {
  let i = e.statSync(n);
  if (!i.isFile() || i.size > r) return null;
  return e.readFileSync(n, {
    encoding: "utf8"
  });
}

var U = /[^\p{L}\p{N}._-]+/gu, H = /^[._-]+|[._-]+$/gu, W = /[\p{L}\p{N}]/u, v = 20;

function l_(e) {
  let n = B(e).trim(), r = [ ...n ];
  return r.length > 64 ? `${r.slice(0, 64).join("")}\u2026` : n;
}

function B(e) {
  return e.replace(/[\p{Cf}\p{Cc}\p{Cs}\p{Zl}\p{Zp}]/gu, "");
}

function Tft(e, n = v) {
  let r = l_(e).replace(U, "-").replace(H, "");
  if (!W.test(r)) return "";
  let i = ne(r, n);
  return i === r ? r : `${i}\u2026`;
}

var iPr = 512, g = 4 * iPr;

function B2n(e, n) {
  let r = 0;
  while (r <= e.length) {
    let i = e.indexOf(`\n`, r), t = i === -1 ? e.length : i, s = t - r <= g, o = ne(e.slice(r, Math.min(t, r + g)), g), d = n(o).replace(/\s+/g, " ").trim();
    if (d !== "" || !s) {
      let a = ne(d, iPr);
      return !s || a.length < d.length ? `${a}\u2026` : a;
    }
    if (i === -1) break;
    r = i + 1;
  }
  return "";
}

function Aft(e) {
  if (typeof e !== "string") return;
  let n = l_(e.replace(/["<>]/g, ""));
  return n === "" ? void 0 : n;
}

var tI = 200;

function bU(e, n) {
  return `${e}@${n}`;
}

function aPr(e) {
  return e.replace(/%|[^\x20-\x7e]/gu, n => encodeURIComponent(n));
}

function j2n(e, n) {
  let r = Date.now();
  return `${e}-${r}@${n}`;
}

var _a = "team-lead", SIe = "user", Cft = "system", aDs = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/, Eie = "claude-swarm", osn = "swarm-view", kie = "tmux", q8e = "cat";

function ssn() {
  return `claude-swarm-${process.pid}`;
}

var lDs = "CLAUDE_CODE_TEAMMATE_COMMAND";

import { basename as Z, dirname as S, resolve as u } from "path";

import { createHmac as z } from "crypto";

var pCo = 120;

function isn(e) {
  let n = B2n(e, r => fM(r, " ", {
    keepEmojiJoiners: !0
  }));
  return n === "" ? "" : ut(n, pCo);
}

var x = [ "bypass", "prompting" ], G = new Set(x);

function dDs(e) {
  return G.has(e);
}

function h(e) {
  let n = new TextEncoder;
  return e.replace(/[^A-Za-z0-9:_/.\\-]/gu, r => Array.from(n.encode(r), i => `%${i.toString(16).toUpperCase().padStart(2, "0")}`).join(""));
}

function wIe(e) {
  return `bridge:${h(e)}`;
}

function UK(e) {
  return `uds:${h(e)}`;
}

function E(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}

var R = /^[A-Za-z0-9_-]{1,80}$/, asn = 32, y = 24;

function cDs(e, n) {
  return z("sha256", n).update(e).digest("hex").slice(0, y);
}

var f = "A-Za-z0-9%:_/.\\\\-", A = `[0-9a-f]{${y}}`, X = `${A}(?:,${A}){0,${asn - 1}}`, N = new RegExp(`^${X}$`), fCo = 300, j = new RegExp(`^[${f}]{1,${fCo}}$`);

function uDs(e) {
  return j.test(e);
}

function W2n(e, n) {
  if (e === void 0) return;
  let r = [ ...e ];
  if (n) r.push(n);
  if (r.length === 0) return;
  return r.length > asn ? r.slice(r.length - asn) : r;
}

function V(e, n, r, i, t, s) {
  let o = [];
  if (e) o.push(`from="${e}"`);
  if (r && R.test(r)) o.push(`from-session="${r}"`);
  if (i !== void 0 && i.length > 0) {
    let m = i.join(",");
    if (N.test(m)) o.push(`hop-chain="${m}"`);
  }
  let d = n === void 0 ? void 0 : l_(n.replace(/["<>]/g, ""));
  if (d) o.push(`from-name="${d}"`);
  if (t) o.push(`from-mode="${t}"`);
  let a = s === void 0 ? void 0 : l_(s.replace(/["<>]/g, ""));
  if (a) o.push(`from-plugin="${a}"`);
  return o.length > 0 ? ` ${o.join(" ")}` : "";
}

var z2n = new RegExp(`^<${pq} from="([^"]+)"`);

function Rft(e, n, r, i, t, s, o) {
  let d = V(e, n, i, t, s, o);
  return `<${pq}${d}>\n${d9e(pq, r)}\n</${pq}>`;
}

function _(e) {
  {
    if (typeof e !== "string") return;
    let n = R.source.replace(/^\^|\$$/g, ""), r = N.source.replace(/^\^|\$$/g, ""), i = e, t = i.match(new RegExp(`^<${pq}(?: from="([${f}]+)")?(?: from-session="(${n})")?(?: hop-chain="(${r})")?(?: from-name="([^"<>\\n\\r]+)")?(?: from-mode="(${x.join("|")})")?(?: from-plugin="([^"<>\\n\\r]+)")?>\\n([\\s\\S]*)\\n</${pq}>$`));
    if (!t) return;
    let s = t[3] !== void 0 ? t[3].split(",") : void 0, o = t[5];
    if (Rft(t[1], t[4], t[7] ?? "", t[2], s, o, t[6]) !== i) return;
    return {
      ...t[1] !== void 0 && {
        from: t[1]
      },
      ...t[2] !== void 0 && {
        fromSession: t[2]
      },
      ...s !== void 0 && {
        hopChain: s
      },
      ...t[4] !== void 0 && {
        fromName: t[4]
      },
      ...o !== void 0 && {
        fromMode: o
      },
      ...t[6] !== void 0 && {
        fromPlugin: t[6]
      },
      body: t[7] ?? ""
    };
  }
  return;
}

function G2n(e) {
  let n = _(e);
  if (!n || n.hopChain === void 0) return e;
  return Rft(n.from, n.fromName, n.body, n.fromSession, void 0, n.fromMode, n.fromPlugin);
}

function mCo(e, n) {
  if (n === void 0) return e;
  let r = _(e);
  if (!r || r.fromPlugin !== void 0) return e;
  return Rft(r.from, r.fromName, r.body, r.fromSession, r.hopChain, r.fromMode, n);
}

function Tie(e, n, r) {
  if (e.body === void 0 || n === r) return e;
  let {body: i, handbackNote: t, handbackReportText: s, ...o} = e;
  return o;
}

function VBe(e) {
  let n = _(e);
  if (!n) return {};
  let r = n.fromName ? l_(n.fromName) : "";
  return {
    ...r && {
      name: r
    },
    ...n.fromSession !== void 0 && {
      fromSession: n.fromSession
    },
    ...n.hopChain !== void 0 && {
      hopChain: n.hopChain
    },
    ...n.fromMode !== void 0 && {
      fromMode: n.fromMode
    },
    body: n.body
  };
}

function Y8e(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type !== "user" || r.toolUseResult || r.isCompactSummary) continue;
    return r.origin?.kind === "peer" ? r.origin.hopChain ?? [] : void 0;
  }
  return;
}

var K = new RegExp(`^(?:uds|bridge|did):[${f}]{1,200}$`);

function Aie(e) {
  return K.test(e);
}

var Y = /^\/\S*\.sock$/, q = /^[\\/]{2}[.?][\\/]pipe[\\/]/i, J = /^\/\S*\.sock/;

function gCo(e) {
  return J.test(e);
}

function Yh(e) {
  if (e.startsWith("uds:")) return {
    scheme: "uds",
    target: E(e.slice(4))
  };
  if (e.startsWith("bridge:")) return {
    scheme: "bridge",
    target: E(e.slice(7))
  };
  if (e.startsWith("did:")) return {
    scheme: "did",
    target: e
  };
  if (Y.test(e) || q.test(e)) return {
    scheme: "uds",
    target: e
  };
  return {
    scheme: "other",
    target: e
  };
}

function V2n(e, n) {
  if (e.trim().length === 0) return "to must not be empty";
  let r = Yh(e);
  if ((r.scheme === "bridge" || r.scheme === "uds") && r.target.trim().length === 0) return "address target must not be empty";
  if (!V0(r.target) || !V0(e)) return `'${e}' is not a local socket address. Use an address from ${n}.`;
  return;
}

function V0(e) {
  if (!Un(e)) return !0;
  return Eve(e) !== void 0;
}

function vve(e, n) {
  return I(e, n) === "same";
}

function Cie(e, n) {
  return I(e, n) !== "different";
}

function I(e, n) {
  let r = Eve(e), i = Eve(n);
  if (r !== void 0 || i !== void 0) {
    if (r === void 0 || i === void 0) return "different";
    if (lPr(r) === lPr(i)) return "same";
    return P(r) === P(i) || l(r) === l(i) ? "maybe" : "different";
  }
  if (e === n) return "same";
  if (Ly(e) || Ly(n)) return p(c(u(e))) === p(c(u(n))) ? "maybe" : "different";
  let t = c(u(e)), s = c(u(n));
  if (t === s) return "same";
  let o = O(), d = o === "macos" || o === "windows";
  return p(t) === p(s) || d && l(t) === l(s) ? "maybe" : "different";
}

function p(e) {
  let n = O();
  return n === "macos" || n === "windows" ? c(P(Q(e))) : e;
}

function lPr(e) {
  return e.replace(/[A-Z]/g, n => n.toLowerCase());
}

function P(e) {
  let n = "";
  for (let r of e) {
    let i = r.toUpperCase(), t = C(i) ? i : r, s = t.toLowerCase();
    n += C(s) ? s : t;
  }
  return n;
}

function C(e) {
  let n = e.codePointAt(0);
  return n !== void 0 && e.length === (n > 65535 ? 2 : 1);
}

function l(e) {
  return e.toUpperCase().toLowerCase();
}

function Q(e) {
  return O() === "macos" ? e.normalize("NFC") : e;
}

function c(e) {
  if (O() !== "macos") return e;
  let n = ZG(e), r = /^\/private(\/(?:var|tmp|etc)(?:\/.*)?)$/.exec(n);
  return r ? r[1] : n;
}

function Eve(e) {
  let n = /^[\\/]{2}[.?][\\/]pipe[\\/](?:(LOCAL)[\\/])?([^\\/]+)$/i.exec(e);
  if (n === null || n[2] === "." || n[2] === "..") return;
  if (/[. ]$/.test(n[2])) return;
  if (e.startsWith("\\\\?\\") && e.includes("/")) return;
  return n[1] === void 0 ? n[2] : `${M}\\${n[2]}`;
}

function hCo(e, n, r) {
  if (Eve(n) !== void 0) {
    let i = Eve(e);
    return i !== void 0 && re.test(i);
  }
  if (Ly(e)) return !1;
  if (S(u(e)) === S(u(n))) return e.endsWith(".sock");
  return r?.verifiedPeerPid !== void 0 && r.ownerUids !== void 0 && D(e, r.ownerUids);
}

var yCo = "reply_across_default_dirs", ee = [ /^\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/, /^\/private\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/, /^\/run\/user\/(0|[1-9]\d*)\/cc-socks$/, /^\/data\/data\/com\.termux\/files\/usr\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/ ];

function D(e, n) {
  let r = u(e);
  if (!/^(\d+(-[0-9a-f]{8})?|[0-9a-f]{1,16})\.sock$/.test(Z(r))) return !1;
  let i = S(r);
  for (let t of ee) {
    let s = t.exec(i);
    if (s) return s[1] === void 0 || n.some(o => String(o) === s[1]);
  }
  return !1;
}

function pDs(e, n, r, i = []) {
  let t = Eve(e), s = Eve(n);
  if (t !== void 0 && s !== void 0 && T.test(s) && !T.test(t)) return !1;
  if (hCo(e, n)) return !0;
  return (r?.includes(yCo) ?? !1) && D(e, i);
}

var b = "cc-msg-", M = "LOCAL", re = new RegExp(`^(?:${M}\\\\)?${b}[0-9a-f]{32}$`, "i"), T = new RegExp(`^${b}[0-9a-f]{32}$`, "i");

export { Xa, sDs, gT, iDs, l_, Tft, iPr, B2n, Aft, tI, bU, aPr, j2n, _a, SIe, Cft, aDs, Eie, osn, kie, q8e, ssn, lDs, pCo, isn, dDs, wIe, UK, asn, cDs, fCo, uDs, W2n, z2n, Rft, G2n, mCo, Tie, VBe, Y8e, Aie, gCo, Yh, V2n, V0, vve, Cie, lPr, Eve, hCo, yCo, pDs };
