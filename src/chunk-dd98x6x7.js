// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { zn, K, zUs, N$t, EJe, gM, B, ke, ea, Qr, qp, FC, BC, Ww, ete, Mf, pht, qje, qdn } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { x, j, l, E, W } from "./chunk-b0z4bv3v.js";

import { J, kx, We } from "./chunk-nvtwm272.js";

import { Ln, Yp, cte } from "./chunk-ddr690nj.js";

import { ne, nt } from "./chunk-5wbhf1bk.js";

import { p } from "./chunk-jkzenvsk.js";

import { fj, up, dKn, iI, uNs, xPo, jin, PPo, IPo, OPo, MPo, HPo, DPo, XIr, LPo, NPo, pNs, gj, L9e, fNs, $Po, Gfe, N9e, Vfe, OU, gNs, iNt, _ee, jmt, ZIr, ng, lNt, VPo, QH, sIo, f_, z9e, zmt, SNs, wNs, pA, G9e, iOr, pOr, Jin, V9e, Gie, See, fOr, hj, tOe, H1e, qKn, nX, pNt, Kmt, kf, D1e, Mw, YKn, ZH, K9e, wee, Qin, uIo, mOr, Zin, gOr, hOr, pIo, qmt, EE, yG, nM, Vie, q9e, yOr, _Or, fIo, mIo, gIo, hIo, ean, HU, yIo, SOr, _Io, bIo, SIo, dI, fNt, Y9e, X9e, J9e, L1e, mNt, wOr, eL, vIo, EIo, kIo, vOr, TIo, AIo, CIo, RIo, xIo, PIo, IIo, Q9e, OIo, MIo, HIo, DIo, LIo, tan, EOr, gNt, U5, kOr } from "./chunk-q6wab2jw.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Rf, _, Ic, wo, Kgt, fq, Nj, se, t } from "./chunk-kawq2919.js";

import { ite } from "./chunk-z52kmxx4.js";

import { d } from "./chunk-6ah1819r.js";

import { FU } from "./chunk-30n0xq4e.js";

import { fHr, un } from "./chunk-y752zmas.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { a } from "./chunk-j016gcgm.js";

import { mt } from "./chunk-j90se18b.js";

import { le } from "./chunk-cqgvwwgb.js";

import { Og, bA, pp, oL } from "./chunk-r276nwd3.js";

import { pr, Bs, rL, yMo } from "./chunk-9yajep3y.js";

import { X } from "./chunk-1zg3hbfq.js";

import { ft } from "./chunk-zscnwzv2.js";

import { mi, ar, jo, c$, zp } from "./chunk-nnrb0acr.js";

import { tKn, nKn, rin, XO, LLt } from "./chunk-9btqc05b.js";

import { $w, Fw, XXe, Hgt } from "./chunk-x5881pc6.js";

import { mo } from "./chunk-fhf0t7vm.js";

import { vf } from "./chunk-cjt10y7b.js";

import { ZVn, kxo } from "./chunk-bsddf56y.js";

import { uj } from "./chunk-az0s2zrf.js";

import { iu } from "./chunk-8v8fjzek.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, oe, T, u, _t } from "./chunk-cvcg6n1z.js";

import { RE } from "./chunk-gkzapwcq.js";

import { Is } from "./chunk-p35rdtee.js";

import { Fee, b$, Q_ } from "./chunk-dgqa0xqf.js";

import { MG } from "./chunk-zx69jgxc.js";

import { at } from "./chunk-0bq6eb61.js";

import { Mg } from "./chunk-j7qcpyv8.js";

import { gu } from "./chunk-53fww9mk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { THr, Qgt } from "./chunk-9zhz923g.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { basename as It, dirname as ue, join as Se, resolve as he } from "path";

import { dirname as xr } from "path";

function cG(e, {uncached: n = !1} = {}) {
  return null;
}

var bt = Ue(new Map, e => e.clear());

function qPr(e, {uncached: n = !1} = {}) {
  let r = n ? void 0 : bt.get(e);
  if (r !== void 0) return r;
  let s = Yp(e);
  if (s === null) return;
  let S;
  try {
    S = hOr();
  } catch {
    return;
  }
  let h = Ln(s) === S;
  return bt.set(e, h), h;
}

var ra = Ue(new Map, e => e.clear());

function kr(e, {uncached: n = !1} = {}) {
  return !1;
}

function YPr(e, {uncached: n = !1} = {}) {
  let r = e;
  for (;;) {
    let s = cG(r, {
      uncached: n
    });
    if (s === null) return null;
    let S = kr(s, {
      uncached: n
    });
    if (S !== !1) return {
      root: s,
      readable: S === !0
    };
    let h = xr(s);
    if (h === s) return null;
    r = h;
  }
}

function Lt(e, n, r) {
  let s = YPr(e, {
    uncached: r
  });
  if (s === null) return n();
  if (!s.readable) return null;
  switch (qPr(s.root, {
    uncached: r
  })) {
   case !1:
    return s.root;

   case !0:
    return n();

   default:
    return null;
  }
}

function oI(e) {
  return Lt(e, () => Bs(e), !1);
}

function bE(e) {
  return Lt(e, () => rL(e), !0);
}

function Fsn(e) {
  let n = YPr(e);
  return n !== null && qPr(n.root) !== !0 ? n.root : pr(e);
}

function H0s(e) {
  return D([ oI(e), Bs(e) ].filter(n => n !== null));
}

import { appendFile as Ur, mkdir as $r, readFile as Gr, writeFile as Wr } from "fs/promises";

import { homedir as vt } from "os";

import { dirname as Kr, isAbsolute as wt, join as Ze } from "path";

async function XPr(e, n) {
  let {code: r} = await ft("git", [ "check-ignore", "--", e ], {
    preserveOutputOnError: !1,
    cwd: n
  });
  return r === 0;
}

async function Br(e) {
  let {stdout: n, code: r} = await ft("git", [ "config", "--global", "--get", "core.excludesfile" ], {
    preserveOutputOnError: !1,
    cwd: e
  });
  return zr(r === 0 ? n : "");
}

function zr(e) {
  let n = e.trim();
  if (n) {
    if (n === "~" || n.startsWith("~/")) return Ze(vt(), n.slice(2));
    if (wt(n)) return n;
  }
  let r = a.XDG_CONFIG_HOME;
  if (r && wt(r)) return Ze(r, "git", "ignore");
  return Ze(vt(), ".config", "git", "ignore");
}

async function JPr(e, n = le()) {
  try {
    if (!await yMo(n)) return {
      written: !1,
      effective: !1
    };
    let r = e.replaceAll("\\", "/"), s = `**/${r}`, S = r.endsWith("/") ? `${r}sample-file.txt` : r;
    if (await XPr(S, n)) return {
      written: !1,
      effective: !0
    };
    let h = await Br(n), y = Kr(h);
    await $r(y, {
      recursive: !0
    });
    try {
      if ((await Gr(h, {
        encoding: "utf-8"
      })).includes(s)) {
        let C = await Dt(S, n) ? "already_tracked" : "excludesfile_not_read";
        return t(`[gitignore] '${s}' already present in ${h} but git check-ignore reports not-ignored \u2014 ${Ft(C, S)}`, {
          level: "warn"
        }), {
          written: !1,
          effective: !1,
          reason: C
        };
      }
      await Ur(h, `\n${s}\n`);
    } catch (A) {
      if (E(A) === "ENOENT") await Wr(h, `${s}\n`, "utf-8"); else throw A;
    }
    if (!await XPr(S, n)) {
      let A = await Dt(S, n) ? "already_tracked" : "excludesfile_not_read";
      return t(`[gitignore] wrote '${s}' to ${h} but git check-ignore still reports not-ignored \u2014 ${Ft(A, S)}`, {
        level: "warn"
      }), {
        written: !0,
        effective: !1,
        reason: A
      };
    }
    return {
      written: !0,
      effective: !0
    };
  } catch (r) {
    return t(`Failed to add gitignore entry to global gitignore: ${r instanceof Error ? r.message : String(r)}`, {
      level: "error"
    }), {
      written: !1,
      effective: !1
    };
  }
}

async function Dt(e, n) {
  let {code: r} = await ft("git", [ "ls-files", "--error-unmatch", "--", e ], {
    preserveOutputOnError: !1,
    cwd: n
  });
  return r === 0;
}

function Ft(e, n) {
  return e === "already_tracked" ? `'${n}' is tracked in the index; gitignore rules do not apply to tracked files` : "core.excludesfile may point elsewhere";
}

function jr(e) {
  return e === "--cloud" || e === "--remote" || e.startsWith("--cloud=") || e.startsWith("--remote=");
}

function kfe() {
  return $w("--attach-serve") !== void 0 || Hgt(jr) !== -1 && XXe() && !Fw("-p") && !Fw("--print");
}

function LVn(e) {
  return e !== "globalConfig" && zp.has(e) && kfe();
}

var Ht = [ "BASE_API_URL", "TOKEN_URL", "CLAUDE_AI_ORIGIN", "API_KEY_URL", "ROLES_URL", "MCP_PROXY_URL" ];

function TU() {
  return a.CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN === !0;
}

function wRo() {
  return !0;
}

function D0s() {
  return "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN";
}

function vRo(e) {
  return `Error: serve helper stopped: ${e} does not resolve to this computer's stored claude.ai login on Anthropic's own service`;
}

function Vr() {
  let e = fHr(), n = e.OAUTH_FILE_SUFFIX === "-local-oauth", r = URL.parse(a.ANTHROPIC_BASE_URL ?? ""), s = vf() && (r === null || r.protocol === "https:"), S = n && RE(r?.hostname ?? "");
  if (!s && !S) return "base_url";
  try {
    let h = un();
    if (Ht.some(y => h[y] !== e[y])) return "oauth_endpoint";
  } catch {
    return "oauth_endpoint";
  }
  if (n && Ht.some(h => !RE(URL.parse(e[h])?.hostname ?? ""))) return "oauth_endpoint";
  return;
}

function ERo() {
  if (!TU()) return;
  let e = Vr();
  if (e === void 0) return;
  try {
    process.stderr.write(`${vRo(e)}\n`);
  } finally {
    process.exit(uj);
  }
}

class Mt {
  drains=new Set;
  register(e) {
    this.drains.add(e);
  }
  async drainAll() {
    await Promise.all([ ...this.drains ].map(e => e().catch(() => {})));
  }
}

var xt = new Mt;

function c1e(e) {
  xt.register(e);
}

function q0() {
  return xt.drainAll();
}

var Usn = 5e3;

function smt(e) {
  mi().internalWrites.set(e, Date.now());
}

function NVn(e, n) {
  let r = mi().internalWrites, s = r.get(e);
  if (s !== void 0 && Date.now() - s < n) return r.delete(e), !0;
  return !1;
}

function L0s() {
  mi().internalWrites.clear();
}

import { join as ie } from "path";

var Yr = Object.freeze({
  settings: {},
  errors: [],
  loadState: "absent"
}), Ee = Object.freeze({
  settings: {},
  errors: []
});

class Kt {
  mdm=null;
  hkcu=null;
  wslInherits=!1;
  loadPromise=null;
  startLoad(e) {
    if (this.loadPromise) return;
    this.loadPromise = (async () => {
      let n = Date.now(), s = await (kxo() ?? ZVn()), {mdm: S, hkcu: h, wslInherits: y} = await zt(s, e);
      this.replace(S, h, y);
      let P = Date.now() - n;
      t(`MDM settings load completed in ${P}ms`);
      try {
        i("tengu_managed_settings_os_read", io(s, P));
      } catch {}
      if (Object.keys(S.settings).length > 0) {
        t(`MDM settings found: ${Object.keys(S.settings).join(", ")}`);
        try {
          X("info", "mdm_settings_loaded", {
            duration_ms: P,
            key_count: Object.keys(S.settings).length,
            error_count: S.errors.length
          });
        } catch {}
      }
    })();
  }
  replace(e, n, r) {
    this.mdm = e, this.hkcu = n, this.wslInherits = r;
  }
  reset() {
    this.mdm = null, this.hkcu = null, this.wslInherits = !1, this.loadPromise = null;
  }
}

var kt = "@builtin", Jr = [ "prependPlugins", "appendPlugins" ];

function Xr(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

var Zr = new K(() => new Kt);

function ce() {
  return Zr.of(B().host);
}

function qr(e) {
  ce().startLoad(e);
}

async function imt() {
  let e = ce();
  if (!e.loadPromise) qr();
  await e.loadPromise;
}

function q9() {
  return ce().mdm ?? Yr;
}

function amt() {
  return ce().mdm !== null;
}

function Bt() {
  let e = ce();
  return e.loadPromise !== null && e.mdm === null;
}

function f9e() {
  return ce().hkcu ?? Ee;
}

function uG() {
  return ce().wslInherits;
}

function m9e(e, n, r) {
  ce().replace(e, n, r);
}

async function lmt(e) {
  let n = await ZVn();
  return zt(n, e);
}

function Qe(e, n, {userWritable: r = !1} = {}) {
  let s = mt(e, !1);
  if (!L(s)) return {
    settings: {},
    errors: [ YKn(n, {
      userWritable: r
    }) ],
    documentHasPolicyContent: !1,
    loadState: "didNotLoad"
  };
  let S = [], h = s;
  for (let F of r ? qKn : []) {
    if (!(F in h)) continue;
    if (h = h === s ? {
      ...s
    } : h, delete h[F], !H1e(F)) S.push({
      file: n,
      path: F,
      message: `"${F}" is only honored from administrator-controlled managed settings and was ignored in ${n}, which the user account can write.`,
      severity: "warning",
      statusOnly: !0
    });
  }
  if (r) {
    for (let k of Jr) {
      if (!(k in h)) continue;
      h = h === s ? {
        ...s
      } : h, delete h[k], S.push({
        file: n,
        path: k,
        message: `"${k}" is only honored from administrator-controlled managed settings and was ignored in ${n}, which the user account can write.`,
        severity: "warning",
        statusOnly: !0
      });
    }
    let F = h.enabledPlugins;
    if (Xr(F)) {
      if (Object.entries(F).filter(([w, M]) => w.endsWith(kt) || M !== !1).length > 0) {
        h = h === s ? {
          ...s
        } : h;
        let w = Is(F, (M, G) => !G.endsWith(kt) && M === !1);
        if (Object.keys(w).length > 0) h.enabledPlugins = w; else delete h.enabledPlugins;
        S.push({
          file: n,
          path: "enabledPlugins",
          message: `"enabledPlugins" entries that enable a plugin, or name a built-in, are only honored from administrator-controlled managed settings and were ignored in ${n}, which the user account can write.`,
          severity: "warning",
          statusOnly: !0
        });
      }
    }
  }
  let {settings: y, errors: P, documentHasPolicyContent: A, loadState: C, onlySubstitutes: I} = tOe(h, n), v = [ ...S, ...P ];
  return {
    settings: y ?? {},
    errors: r ? v.map(F => ({
      ...F.severity === "warning" && !F.startupFatal ? F : {
        ...eo(F),
        severity: "warning",
        statusOnly: !0
      },
      userWritable: !0
    })) : v,
    documentHasPolicyContent: A,
    loadState: C,
    ...I && {
      onlySubstitutes: I
    }
  };
}

function eo({startupFatal: e, ...n}) {
  return n;
}

function Ut(e, n, r, s) {
  return {
    file: e,
    path: "",
    message: `Managed settings document (${e}) could not be read: ${n}; none of its settings are in effect.`,
    severity: r ? "warning" : "fatal",
    statusOnly: !0,
    errorClass: "unreadable",
    ...s !== void 0 && {
      errno: s
    },
    ...r && {
      userWritable: !0
    }
  };
}

function $t(e, n = "Settings") {
  let r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), s = new RegExp(`^[ \\t]+${r}[ \\t]+REG_(?:EXPAND_)?SZ[ \\t]+([\\s\\S]*)`, "im"), S = e.match(s)?.[1]?.trimEnd();
  return S ? S : null;
}

var to = new Map([ [ "ENOENT", b("ENOENT") ], [ "EACCES", b("EACCES") ], [ "EPERM", b("EPERM") ], [ "ENOEXEC", b("ENOEXEC") ], [ "EAGAIN", b("EAGAIN") ], [ "EMFILE", b("EMFILE") ], [ "ENOMEM", b("ENOMEM") ], [ "ETIMEDOUT", b("ETIMEDOUT") ], [ "ERR_CHILD_PROCESS_STDIO_MAXBUFFER", b("ERR_CHILD_PROCESS_STDIO_MAXBUFFER") ] ]), no = new Map([ [ "SIGTERM", b("SIGTERM") ], [ "SIGKILL", b("SIGKILL") ], [ "SIGINT", b("SIGINT") ] ]);

function ro(e) {
  if (!e) return;
  return to.get(e) ?? b("other");
}

function oo(e) {
  if (!e) return;
  return no.get(e) ?? b("other");
}

function Gt(e, n) {
  if (!n) return {};
  return {
    [`${e}_status`]: c(n.status),
    [`${e}_exit_code`]: n.exitCode ?? void 0,
    [`${e}_errno`]: ro(n.errno),
    [`${e}_signal`]: oo(n.signal),
    [`${e}_duration_ms`]: n.durationMs
  };
}

function io(e, n) {
  return {
    is_wsl: LLt(),
    await_ms: n,
    ...Gt("hklm", e.outcomes.hklm),
    ...Gt("hkcu", e.outcomes.hkcu)
  };
}

async function zt(e, n) {
  let r = [], s = !1, S = "absent";
  for (let M of e.plistStdouts ?? []) {
    let {label: G, userWritable: U} = M;
    if (U && s) continue;
    let V = M.stdout === null ? {
      settings: {},
      errors: [ Ut(G, M.unreadReason, U, M.unreadErrno) ],
      documentHasPolicyContent: !1,
      loadState: "didNotLoad",
      ...U && {
        userWritable: U
      }
    } : {
      ...Qe(M.stdout, G, {
        userWritable: U
      }),
      ...U && {
        userWritable: U
      }
    };
    if (U ? fNt(V.settings) : V.documentHasPolicyContent) return {
      mdm: {
        ...V,
        errors: [ ...r, ...V.errors ],
        documentHasPolicyContent: !0
      },
      hkcu: Ee,
      wslInherits: !1
    };
    if (s ||= mNt(V), r.push(...V.errors), !U) S = L1e(S, V.loadState);
  }
  let h = `Registry: ${tKn}\\${rin}`, y = null, P = "disarmed";
  if (e.hklmStdout !== null) {
    let M = $t(e.hklmStdout) ?? "";
    y = Qe(M, h);
    let G = mt(M, !1);
    if (L(G)) P = $Po(G);
  } else if (e.hklmUnreadReason !== void 0) y = {
    settings: {},
    errors: [ Ut(h, e.hklmUnreadReason, !1) ],
    documentHasPolicyContent: !1,
    loadState: "didNotLoad"
  };
  let A = y !== null && mNt(y);
  if (y) r.push(...y.errors), S = L1e(S, y.loadState);
  let C = LLt(), I = "disarmed", v = h, F = [];
  if (C) {
    if (I = P, I !== "armed") {
      let M = await ao(n);
      if (F = M.links, M.flag === "armed" || I === "disarmed") I = M.flag, v = M.unreadableFlagPath ?? XO;
      if (I === "disarmed") r.push(...M.records), S = L1e(S, M.loadState);
    }
  }
  let k = I !== "disarmed", w = {
    settings: {},
    errors: r,
    loadState: S
  };
  if (C && !k) {
    let M = new Set(y?.errors.filter(G => G.severity === "warning"));
    return {
      mdm: {
        ...w,
        errors: w.errors.map(G => M.has(G) ? {
          ...G,
          wslIgnored: !0
        } : G),
        ...F.length > 0 && {
          managedDocumentLinks: F
        }
      },
      hkcu: Ee,
      wslInherits: !1
    };
  }
  if (y && A) return {
    mdm: y,
    hkcu: Ee,
    wslInherits: k
  };
  if (I === "unreadable") {
    let M = await et(XO, n);
    return {
      mdm: {
        ...w,
        errors: M ? w.errors : [ ...w.errors, uIo(v) ],
        documentHasPolicyContent: !0,
        loadState: L1e(w.loadState, "loaded")
      },
      hkcu: Ee,
      wslInherits: k
    };
  }
  if (e.hkcuStdout !== null && !await so(k, n)) {
    let M = Qe($t(e.hkcuStdout) ?? "", `Registry: ${nKn}\\${rin}`, {
      userWritable: !0
    });
    if (!C || M.settings.wslInheritsWindowsSettings === !0) {
      let {wslInheritsWindowsSettings: G, managedSourcesBehavior: U, ...V} = M.settings;
      return {
        mdm: w,
        hkcu: {
          settings: V,
          errors: M.errors
        },
        wslInherits: k
      };
    }
    if (M.errors.length > 0) return {
      mdm: w,
      hkcu: {
        settings: {},
        errors: M.errors
      },
      wslInherits: k
    };
  }
  return {
    mdm: w,
    hkcu: Ee,
    wslInherits: k
  };
}

async function Ie(e, n) {
  if (z() && n !== void 0) return (await Q_(e, kf)).content;
  return b$(e, kf);
}

async function so(e, n) {
  if (e && await et(XO, n)) return !0;
  return et(pA(), n);
}

async function Wt(e, n) {
  let r;
  try {
    r = await Ie(e, n);
  } catch (s) {
    return !W(s);
  }
  try {
    let s = Mw(r, e, !0);
    return mNt({
      ...s,
      loadState: J9e(s)
    });
  } catch {
    return !0;
  }
}

async function kRo(e) {
  if (!LLt() || !ce().wslInherits) return "";
  let n = [];
  try {
    n.push(await Ie(ie(XO, "managed-settings.json"), e));
  } catch (r) {
    n.push(qe(r));
  }
  try {
    let r = ie(XO, "managed-settings.d"), s = (await se().readdir(r)).filter(S => (S.isFile() || S.isSymbolicLink()) && S.name.endsWith(".json") && !S.name.startsWith(".")).map(S => S.name).sort();
    for (let S of s) try {
      n.push(`${S}\0${await Ie(ie(r, S), e)}`);
    } catch (h) {
      n.push(`${S}\0${qe(h)}`);
    }
  } catch (r) {
    let s = qe(r);
    if (s !== "") n.push(s);
  }
  return n.join("\x01");
}

function qe(e) {
  return Ce(e) ? "" : "\0unreadable";
}

function Ce(e) {
  let n = E(e);
  return n === "ENOENT" || n === "ENOTDIR";
}

async function ao(e) {
  let n = [], r = "absent", s = [], S = new Map;
  async function h(v, F) {
    let k = ie(XO, ...v), w;
    try {
      w = await Ie(k, e);
    } catch (U) {
      if (Ce(U)) return "disarmed";
      n.push(Qin(k, U)), r = "didNotLoad";
    }
    let M = await wNs(XO, v, F, S);
    if (M !== null) s.push(M);
    if (w === void 0) return "disarmed";
    let G = w.trim() === "" ? {} : mt(w, !1);
    if (!L(G)) return n.push(YKn(k)), r = "didNotLoad", "disarmed";
    return r = L1e(r, "loaded"), $Po(G);
  }
  let y = ie(XO, "managed-settings.json"), P = await h([ "managed-settings.json" ]);
  if (P === "armed") return {
    flag: P,
    records: n,
    loadState: r,
    links: s
  };
  let A = P === "unreadable" ? y : void 0, C = ie(XO, "managed-settings.d"), I;
  try {
    I = await se().readdir(C);
  } catch (v) {
    if (!Ce(v)) n.push(Qin(C, v, "directory")), r = "didNotLoad";
    return {
      flag: P,
      unreadableFlagPath: A,
      records: n,
      loadState: r,
      links: s
    };
  }
  for (let v of I) {
    if (!(v.isFile() || v.isSymbolicLink()) || !v.name.endsWith(".json") || v.name.startsWith(".")) continue;
    let F = await h([ "managed-settings.d", v.name ], v.isSymbolicLink());
    if (F === "armed") return {
      flag: F,
      records: n,
      loadState: r,
      links: s
    };
    if (F === "unreadable") P = F, A ??= ie(C, v.name);
  }
  return {
    flag: P,
    unreadableFlagPath: A,
    records: n,
    loadState: r,
    links: s
  };
}

async function et(e, n) {
  if (await Wt(ie(e, "managed-settings.json"), n)) return !0;
  let r = ie(e, "managed-settings.d"), s;
  try {
    s = await se().readdir(r);
  } catch (S) {
    return !Ce(S);
  }
  for (let S of s) if ((S.isFile() || S.isSymbolicLink()) && See(S.name) && await Wt(ie(r, S.name), n)) return !0;
  return !1;
}

import { posix as xn, win32 as kn } from "path";

import { win32 as Jt } from "path";

var jt = [ "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass" ], Xt = "C:\\Windows", Ne = "C:\\Program Files", be = `${Xt}\\System32`, tt = `${be}\\WindowsPowerShell\\v1.0`, lo = `${be}\\cmd.exe`, co = [ `${Ne}\\PowerShell\\7\\pwsh.exe`, `${Ne}\\PowerShell\\7-preview\\pwsh.exe`, `${tt}\\powershell.exe` ];

function uo() {
  if (O() !== "windows") return null;
  for (let e of co) {
    let n = cte(e);
    if (n === null) {
      if (se().existsSync(e)) return null;
      continue;
    }
    if (n.toLowerCase() === e.toLowerCase()) return e;
  }
  return null;
}

var go = "PowerShell not found at any of its stock install locations on C: (fixed absolute candidates only; PATH is never consulted)", rt = "CLAUDE_CODE_POLICY_HELPER_PSMODULEPATH", ot = "CLAUDE_CODE_POLICY_HELPER_PS1_PATH", po = `$env:PSModulePath = $env:${rt}; `, fo = "if ($ExecutionContext.SessionState.LanguageMode -eq 'FullLanguage') { try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new() } catch {} }; ";

function Zt(e) {
  return `${po}${fo}$LASTEXITCODE = 0; try { ${e} } catch { Write-Error $_; exit 1 }; exit $LASTEXITCODE`;
}

var _o = Zt(`& ($env:${ot})`), So = Zt("Invoke-Expression (@($input) -join [char]10)");

function Eo(e) {
  return D([ `${e}\\Modules`, `${Ne}\\PowerShell\\Modules`, `${Ne}\\WindowsPowerShell\\Modules`, `${tt}\\Modules` ]).join(";");
}

function ho(e) {
  return D([ e, be, Xt, `${be}\\Wbem`, tt ]).join(";");
}

var yo = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC", Po = [ "DOTNET_", "COMPLUS_", "COR_", "CORECLR_", "APPDOMAIN_MANAGER_" ], Ro = new Set([ "DEVPATH", "__PSLOCKDOWNPOLICY", "PSMODULEANALYSISCACHEPATH", "PSMODULEPATH", "PATH", "PATHEXT", "COMSPEC", "TERM", rt, ot ]), To = [ "LD_", "DYLD_", "BASH_FUNC_", "__BASH_FUNC<", "LC_" ], Ao = new Set([ "ENV", "BASH_ENV", "SHELLOPTS", "PS4", "GCONV_PATH", "IFS", "PWD", "CDPATH", "OLDPWD", "TMOUT", "POSIXLY_CORRECT", "BASHOPTS", "BASH_COMPAT", "EXECIGNORE", "BASH_SOURCE_PATH", "BASH_LOADABLES_PATH", "GLOBIGNORE", "GLOBSORT", "LOCPATH", "PATH_LOCALE", "NLSPATH", "LANG", "TMPDIR", "TMP", "TEMP" ]), Oo = "/usr/bin:/bin:/usr/sbin:/sbin";

function Vt(e, n, r, s) {
  for (let S of Object.keys(e)) {
    let h = s(S);
    if (n.has(h) || r.some(y => h.startsWith(y))) delete e[S];
  }
}

function Qt(e, n) {
  let r = {
    ...e
  };
  switch (n.routedInterpreter) {
   case void 0:
    return r;

   case "sh":
    return Vt(r, Ao, To, s => s), r.PATH = Oo, r.LC_ALL = "C", r;

   case "pwsh":
    {
      Vt(r, Ro, Po, S => S.toUpperCase());
      let s = Jt.dirname(n.file);
      if (r.PSModulePath = Eo(s), r[rt] = r.PSModulePath, r.PATH = ho(s), r.PATHEXT = yo, 
      r.COMSPEC = lo, r.TERM = "dumb", n.ps1Path !== void 0) r[ot] = n.ps1Path;
      return r;
    }
  }
}

function qt(e) {
  return O() === "windows" ? Jt.dirname(e.file) : "/";
}

function en(e) {
  if (e.script != null) {
    if (e.interpreter === "sh") return {
      plan: {
        file: "/bin/sh",
        args: [ "-s" ],
        input: e.script,
        routedInterpreter: "sh"
      }
    };
    return Yt({
      args: [ ...jt, "-Command", So ],
      input: e.script
    });
  }
  let {path: n} = e;
  if (n == null) return {
    error: "no path or script configured",
    code: "bad_path"
  };
  if (O() !== "windows" || !MPo(n)) return {
    plan: {
      file: n,
      args: []
    }
  };
  return Yt({
    args: [ ...jt, "-Command", _o ],
    ps1Path: n
  });
}

function Yt(e) {
  let n = uo();
  if (n === null) return {
    error: go,
    code: "interpreter_unavailable"
  };
  return {
    plan: {
      file: n,
      routedInterpreter: "pwsh",
      ...e
    }
  };
}

async function tn(e, n, r) {
  if (e.routedInterpreter !== void 0) return null;
  let s;
  try {
    s = await We(Io(e.file, r), n);
  } catch (S) {
    return `cannot stat path (${E(S) ?? "unknown error"}): ${e.file}`;
  }
  if (s === void 0) return it(e.file, n);
  return s.isFile() ? null : `path is not a regular file: ${e.file}`;
}

function Io(e, n) {
  let r = n.get(e);
  if (r === void 0) {
    r = se().stat(e), n.set(e, r);
    let s = () => n.delete(e);
    r.then(s, s);
  }
  return r;
}

function it(e, n) {
  return `cannot stat path (timed out after ${n} ms): ${e}`;
}

var Co = [ "ANTHROPIC_API_KEY", "CLAUDE_CODE_OAUTH_TOKEN", "CLAUDE_CODE_ARTIFACTS_API_TOKEN", "CLAUDE_CODE_MEMORY_API_TOKEN", "CLAUDE_CODE_SLACK_TAG_TOKEN", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_FOUNDRY_API_KEY", "ANTHROPIC_FOUNDRY_AUTH_TOKEN", "ANTHROPIC_AWS_API_KEY", "ANTHROPIC_CUSTOM_HEADERS", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_BEARER_TOKEN_BEDROCK", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_GHA_CREDS_PATH", "AZURE_CLIENT_SECRET", "IDENTITY_HEADER", "MSI_SECRET", "AZURE_CLIENT_CERTIFICATE_PATH", "AZURE_CLIENT_CERTIFICATE_PASSWORD", "AZURE_PASSWORD", "AZURE_FEDERATED_TOKEN_FILE", "AWS_WEB_IDENTITY_TOKEN_FILE", "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "AWS_CONTAINER_CREDENTIALS_FULL_URI", "AWS_CONTAINER_AUTHORIZATION_TOKEN", "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE", "CLOUDSDK_AUTH_ACCESS_TOKEN", "GOOGLE_OAUTH_ACCESS_TOKEN", "CLAUDE_CODE_OAUTH_REFRESH_TOKEN", "HF_TOKEN", "HUGGING_FACE_HUB_TOKEN", "HUGGINGFACEHUB_API_TOKEN", "NODE_AUTH_TOKEN", "NUGET_AUTH_TOKEN", "CARGO_REGISTRY_TOKEN", "TWINE_PASSWORD", "TWINE_USERNAME", "PYPI_TOKEN", "PYPI_API_TOKEN", "UV_PUBLISH_TOKEN", "UV_PUBLISH_PASSWORD", "UV_PUBLISH_USERNAME", "FLIT_PASSWORD", "FLIT_USERNAME", "HATCH_INDEX_AUTH", "HATCH_INDEX_USER", "GEM_HOST_API_KEY", "MATURIN_PYPI_TOKEN", "MATURIN_PASSWORD", "MATURIN_USERNAME", "CONAN_LOGIN_USERNAME", "CONAN_PASSWORD", "ANACONDA_API_TOKEN", "BINSTAR_API_TOKEN", "VAULT_TOKEN", "VAULT_AUTH_TOKEN", "VAULT_ROLE_ID", "VAULT_SECRET_ID", "CONSUL_HTTP_TOKEN", "CONSUL_HTTP_AUTH", "NOMAD_TOKEN", "NOMAD_HTTP_AUTH", "CI_REGISTRY_USER", "CI_DEPLOY_USER", "JF_USER", "FASTLANE_SESSION", "MATCH_GIT_BASIC_AUTHORIZATION", "SONAR_TOKEN", "SONARQUBE_SCANNER_PARAMS", "SONAR_SCANNER_JSON_PARAMS", "SLACK_WEBHOOK_URL", "SLACK_WEBHOOK", "DISCORD_WEBHOOK", "DISCORD_WEBHOOK_URL", "TEAMS_WEBHOOK_URL", "MS_TEAMS_WEBHOOK_URI", "ANTHROPIC_IDENTITY_TOKEN", "ANTHROPIC_IDENTITY_TOKEN_FILE", "CLOUDSDK_AUTH_ACCESS_TOKEN_FILE", "CLOUDSDK_AUTH_AUTHORIZATION_TOKEN_FILE", "AZURE_AUTH_LOCATION", "ACTIONS_ID_TOKEN_REQUEST_TOKEN", "ACTIONS_ID_TOKEN_REQUEST_URL", "ACTIONS_RUNTIME_TOKEN", "ACTIONS_RUNTIME_URL", "ALL_INPUTS", "VSS_NUGET_EXTERNAL_FEED_ENDPOINTS", "ARTIFACTS_CREDENTIALPROVIDER_EXTERNAL_FEED_ENDPOINTS", "VSS_NUGET_ACCESSTOKEN", "ARTIFACTS_CREDENTIALPROVIDER_ACCESSTOKEN", "COMPOSER_AUTH", "OVERRIDE_GITHUB_TOKEN", "DEFAULT_WORKFLOW_TOKEN", "SSH_SIGNING_KEY" ], No = [ "AWS_SHARED_CREDENTIALS_FILE", "AWS_CONFIG_FILE", "CLOUDSDK_CONFIG", "AZURE_CONFIG_DIR", "KUBECONFIG", "NETRC", "PGPASSFILE", "PGSERVICEFILE", "DOCKER_CONFIG", "GH_CONFIG_DIR", "GNUPGHOME", "NPM_CONFIG_USERCONFIG", "NPM_CONFIG_GLOBALCONFIG", "SSH_AUTH_SOCK", "GIT_SSH_COMMAND", "GIT_SSH", "GIT_ASKPASS", "SSH_ASKPASS", "SSH_AGENT_PID", "TF_CLI_CONFIG_FILE", "WGETRC", "PIP_CONFIG_FILE", "UV_CONFIG_FILE", "RCLONE_CONFIG", "BOTO_CONFIG", "BOTO_PATH", "S3CMD_CONFIG", "SOPS_AGE_KEY_FILE", "ANSIBLE_VAULT_PASSWORD_FILE", "ANSIBLE_VAULT_IDENTITY_LIST", "ANSIBLE_CONFIG", "GOAUTH", "SBT_CREDENTIALS", "COURSIER_CREDENTIALS", "CONSUL_HTTP_TOKEN_FILE", "SYSTEM_WGETRC", "CLOUDSDK_ROOT_DIR", "M2_HOME", "MAVEN_HOME", "LEIN_HOME", "SSLKEYLOGFILE", "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "XDG_CONFIG_HOME", "XDG_CONFIG_DIRS", "XDG_CACHE_HOME", "XDG_DATA_HOME", "XDG_STATE_HOME", "XDG_RUNTIME_DIR", "HELM_REGISTRY_CONFIG", "HELM_REPOSITORY_CONFIG", "HELM_CONFIG_HOME", "REGISTRY_AUTH_FILE", "DOCKER_CERT_PATH", "SSL_CLIENT_CERT", "GIT_SSL_CERT", "GIT_SSL_KEY", "PIP_CLIENT_CERT", "PGSSLKEY", "VAULT_CLIENT_KEY", "VAULT_CLIENT_CERT", "CONSUL_CLIENT_KEY", "CONSUL_CLIENT_CERT", "NOMAD_CLIENT_KEY", "NOMAD_CLIENT_CERT", "PGSSLCERT", "PGSYSCONFDIR", "CURL_HOME", "CARGO_HOME", "COMPOSER_HOME", "GRADLE_USER_HOME", "BUNDLE_CONFIG", "BUNDLE_USER_CONFIG", "BUNDLE_USER_HOME", "BUNDLE_APP_CONFIG", "POETRY_CONFIG_DIR", "COURSIER_CONFIG_DIR", "HEX_HOME", "HF_HOME", "HF_TOKEN_PATH", "HF_STORED_TOKENS_PATH", "CONDARC", "BUN_CONFIG_FILE", "GOENV", "NPM_CONFIG_PREFIX", "CLOUDSDK_AUTH_CREDENTIAL_FILE_OVERRIDE", "CLAUDE_CONFIG_DIR", "ANTHROPIC_CONFIG_DIR", "ANTHROPIC_PROFILE", "CLAUDE_CODE_FEDERATION_CACHE_DIR", "CLAUDE_SECURESTORAGE_CONFIG_DIR" ], cn = [ "PIP_INDEX_URL", "PIP_EXTRA_INDEX_URL", "PIP_FIND_LINKS", "UV_INDEX_URL", "UV_EXTRA_INDEX_URL", "UV_DEFAULT_INDEX", "UV_INDEX", "UV_FIND_LINKS", "UV_PUBLISH_URL", "TWINE_REPOSITORY_URL", "FLIT_INDEX_URL", "HATCH_INDEX_REPO", "NPM_CONFIG_REGISTRY", "YARN_REGISTRY", "YARN_NPM_REGISTRY_SERVER", "YARN_NPM_PUBLISH_REGISTRY", "COREPACK_NPM_REGISTRY", "BUN_CONFIG_REGISTRY", "GOPROXY" ], bo = new Set(cn), Lo = /^(?:CARGO_REGISTRIES_[A-Z0-9_]+_INDEX|POETRY_REPOSITORIES_[A-Z0-9_]+_URL|NPM_CONFIG_@[^:]+:REGISTRY)$/i;

function dmt(e) {
  let n = e.toUpperCase().replace(/-/g, "_").replace(/^INPUT_/, "");
  return bo.has(n) || Lo.test(n);
}

function dn(e) {
  return gn[e.toUpperCase().replace(/-/g, "_").replace(/^INPUT_/, "")];
}

var gn = {
  PIP_EXTRA_INDEX_URL: "PIP_INDEX_URL",
  PIP_FIND_LINKS: "PIP_INDEX_URL",
  UV_EXTRA_INDEX_URL: "UV_DEFAULT_INDEX",
  UV_INDEX: "UV_DEFAULT_INDEX",
  UV_FIND_LINKS: "UV_DEFAULT_INDEX"
}, u1e = "http://index.invalid/", pn = {
  UV_DEFAULT_INDEX: [ "UV_INDEX_URL" ]
};

function TRo(e, n) {
  return [ n, ...pn[n] ?? [] ].some(r => (e[r] ?? "") !== "");
}

var vo = /^[a-z][a-z0-9+.-]*:\/\//i;

function Do(e) {
  let n = e.startsWith("//"), r;
  try {
    r = new URL(n ? `https:${e}` : e);
  } catch {
    let P = e.replace(/^([a-z][a-z0-9+.-]*:)?\/\/[^/?#]*@/i, "$1//");
    return YR(P) ? {
      text: u1e,
      cut: !0
    } : {
      text: P,
      cut: !1,
      stripped: P !== e
    };
  }
  let s = r.password !== "" || r.username !== "" && /(^|\+)https?:$/i.test(r.protocol), S = s;
  if (s) r.username = "", r.password = "";
  let h = !1;
  if (YR(Fo(r.search))) r.search = "", r.hash = "", h = !0;
  let y = r.href;
  return {
    text: n ? y.replace(/^https:/, "") : y,
    cut: h,
    stripped: S
  };
}

function Fo(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}

function Bsn(e, n) {
  if (n.trim() === "") return {
    value: n,
    cut: !1,
    stripped: !1
  };
  let r = /^(?:INPUT_)?GOPROXY$/i.test(e), s = !/^INPUT_/i.test(e) && dn(e) !== void 0, S = !1, h = !1, y = !1, P = r ? /(\s*[,|]\s*|\s+)/ : s ? /(\s+)/ : null, I = (P === null ? [ n ] : n.split(P)).flatMap(v => {
    if (y) return [];
    let F = /^([A-Za-z0-9_.-]+=)(?=[a-z][a-z0-9+.-]*:\/\/|\/\/)/i.exec(v), k = F ? F[1] : "", w = v.slice(k.length);
    if (!w.startsWith("//") && !vo.test(w)) {
      if (v.trim() !== "" && YR(v)) return S = !0, h = !0, [ r ? "off" : u1e ];
      return [ v ];
    }
    let M = Do(w);
    if (h ||= M.cut || M.stripped === !0, M.cut || M.stripped && (r || s)) {
      if (S = !0, r) return y = !0, [ "off" ];
    }
    return [ k + M.text ];
  }).join("");
  if (r) I = I.replace(/[,|\s]+$/, "");
  if (I !== "" && YR(I)) return {
    value: r ? "off" : u1e,
    cut: !0,
    stripped: !0
  };
  return {
    value: I === "" ? u1e : I,
    cut: S,
    stripped: h
  };
}

function N0s(e) {
  return fn(e).respelled;
}

function Tfe(e) {
  let n = fn(e);
  for (let [r, s] of Object.entries(e)) {
    if (s === void 0) continue;
    let S = typeof s === "string" ? s : String(s), h = jsn(r, S);
    if (h !== void 0 && h !== S) n.respelled[r] = h, n.lostCredential.push(r);
  }
  return n;
}

function fn(e) {
  let n = {}, r = [];
  for (let [s, S] of Object.entries(e)) {
    if (S === void 0 || !dmt(s)) continue;
    let h = typeof S === "string" ? S : String(S), y = Bsn(s, h);
    if (y.value !== h) {
      if (n[s] = y.value, y.cut || y.stripped) r.push(s);
    }
    if (y.cut) {
      let P = ARo(s, y.value);
      if (P !== void 0 && !TRo(e, P.name) && n[P.name] === void 0) n[P.name] = P.value;
    }
  }
  return {
    respelled: n,
    lostCredential: r
  };
}

function ARo(e, n) {
  let r = /^INPUT_/i.test(e) ? void 0 : dn(e);
  if (r === void 0) return;
  let s = n.split(/\s+|,|\|/).map(h => h.replace(/^[A-Za-z0-9_.-]+=(?=[a-z][a-z0-9+.-]*:\/\/|\/\/)/i, "")).find(h => h.startsWith("//") || /^https?:\/\//i.test(h)), S = u1e;
  if (s !== void 0) try {
    let h = new URL(s.startsWith("//") ? `https:${s}` : s).origin;
    S = h === "null" ? u1e : `${h}/`;
  } catch {
    S = u1e;
  }
  return {
    name: r,
    value: S
  };
}

function cmt() {
  return QPr(), Pe ? No.flatMap(e => [ e, `INPUT_${e}`, ...e.startsWith("NPM_CONFIG_") ? [ e.toLowerCase() ] : [] ]) : [];
}

function QPr() {
  let e = process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB;
  Pe ??= nn(e) || nn(process.env.GITHUB_ACTIONS) && !Ho(e);
}

var Pe;

function $0s() {
  Pe = void 0;
}

function Ho(e) {
  return e !== void 0 && /^(?:0|false|no|off)$/i.test(String(e).trim());
}

function nn(e) {
  let n = e === void 0 ? void 0 : String(e).trim().toLowerCase();
  return n === "1" || n === "true" || n === "yes" || n === "on";
}

var g9e = Co.flatMap(e => [ e, `INPUT_${e}` ]), CRo = [ "ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_OAUTH_TOKEN", "CLAUDE_CODE_OAUTH_REFRESH_TOKEN", "CLAUDE_CODE_ARTIFACTS_API_TOKEN", "CLAUDE_CODE_MEMORY_API_TOKEN", "CLAUDE_CODE_SLACK_TAG_TOKEN", "ANTHROPIC_FOUNDRY_API_KEY", "ANTHROPIC_FOUNDRY_AUTH_TOKEN", "ANTHROPIC_AWS_API_KEY", "ANTHROPIC_IDENTITY_TOKEN", "ANTHROPIC_IDENTITY_TOKEN_FILE", "ALL_INPUTS" ], RRo = CRo.flatMap(e => [ e, `INPUT_${e}` ]);

function Die(e) {
  return e.toUpperCase().replace(/-/g, "_");
}

var st = /CONN(ECT(ION)?)?_?STR(ING)?S?(?=$|[_0-9])/i;

function xRo(e) {
  return st.test(e) || st.test(mn(e));
}

var _n = [ "OAuth", "NextAuth" ];

function mn(e) {
  return _n.reduce((n, r) => n.replaceAll(r, r[0] + r.slice(1).toLowerCase()), e).replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2");
}

var Mo = [ "CONN", "CONNECT", "CONNECTION" ].flatMap(e => [ "", "_" ].flatMap(n => [ "STR", "STRING", "STRS", "STRINGS" ].flatMap(r => {
  let s = `*${re(`${e}${n}${r}`)}`;
  return [ s, `${s}_*`, `${s}[0-9]*` ];
}))), Sn = [ "TOKEN", "SECRET", "PASSWORD", "PASSWD", "PASSPHRASE", "KEY", "AUTH", "COOKIE", "PAT", "DSN", "WEBHOOK", "CREDENTIAL", "CREDENTIALS", "CREDS", "APIKEY", "ACCESSKEY", "SECRETKEY", "ACCOUNTKEY", "PRIVATEKEY", "AUTHKEY", "SSHKEY", "SIGNINGKEY", "MASTERKEY", "DEPLOYKEY", "ENCRYPTIONKEY", "PGPASSWORD", "SSHPASS" ], En = [ "PWD", "PASS", "JWT" ], yn = [ "TOKEN", "SECRET", "PASSWORD", "PASSWD", "PASSPHRASE" ], Pn = [ "KEY", "SECRET", "PASSWORD", "CREDENTIAL" ], rn = new RegExp(`((^|_)(${Sn.join("|")}|(${Pn.join("|")})S)|_(${En.join("|")})|(${yn.join("|")}))(?=$|[_0-9])`, "i"), xo = [ "CLOUDSDK_PROXY_PASSWORD", "GIT_CONFIG_KEY_[0-9]*" ], ko = /^GIT_CONFIG_KEY_[0-9][A-Za-z0-9_]*$/;

function Uo(e) {
  return /^GIT_CONFIG_(?:COUNT|PARAMETERS|(?:KEY|VALUE)_[0-9]+)$/.test(e);
}

function ILt(e) {
  return Uo(e) || $o.test(e);
}

var $o = /^(?:(?:https?|ftp|all|no)_proxy|npm_config_(?:https?_)?proxy|npm_config_noproxy|yarn_proxy|(?:yarn|global_agent|docker|claude_code)_(?:https?|no)_proxy|cloudsdk_proxy_[a-z]+|electron_get_use_proxy)$/i;

function PRo(e, n) {
  let r = jsn(e, n);
  return r === void 0 ? YR(n) : r !== n;
}

function jsn(e, n) {
  if (FVn(e) === "GOFLAGS") return n.length > ve ? "" : Ri(n);
  if (!In.has(FVn(e))) return;
  let r = n.length > ve ? null : umt(n);
  if (r === null) return "";
  QPr();
  let s = r.map((y, P) => {
    let A = P > 0 && /^(?:-D|--define)$/.test(h9e(r[P - 1])) ? `-D${y}` : Nn(h9e(y));
    return {
      raw: y,
      word: A,
      residual: Cn.test(A),
      goes: !1
    };
  });
  for (let y = 0; y < s.length; y++) {
    let P = s[y];
    if (P.residual) continue;
    let A = y > 0 ? s[y - 1].word : null, C = s[y + 1];
    if (P.goes = P.goes || Yo(P.word, A) || C !== void 0 && !C.residual && !Re(C.word) && lt.test(P.word) && YR(`${P.word} ${C.word}`), 
    P.goes && C !== void 0 && !Re(C.word) && lt.test(P.word)) C.goes = !0;
  }
  for (let y = 1; y < s.length; y++) {
    if (Bo.test(s[y - 1].word)) s[y].goes = !0;
    if (s[y].goes && !h9e(s[y].raw).startsWith("-") && Wo(s[y - 1].word)) s[y - 1].goes = !0;
  }
  let S = s.filter(y => !y.goes);
  e: while ($Vn(S.filter(y => !y.residual).flatMap(on))) {
    let y = S.filter(P => !P.residual);
    for (let P = 2; P <= 4; P++) for (let A = 0; A + P <= y.length; A++) {
      let C = y.slice(A, A + P);
      if ($Vn(C.flatMap(on))) {
        for (let I of C) I.goes = !0;
        S = S.filter(I => !I.goes);
        continue e;
      }
    }
    for (let P of y) P.goes = !0;
    S = S.filter(P => !P.goes);
  }
  if (S.length === s.length) return n;
  let h = Qo.has(FVn(e)) ? Go : Tn;
  return S.every(y => h.test(y.raw)) ? S.map(y => y.raw).join(" ") : "";
}

var Tn = /^[A-Za-z0-9_.,:=\/@+~*?-]+$/, Go = /^[A-Za-z0-9_.,:=\/@+~|*?-]+$/, lt = /(?:\b(?:Bearer|Basic|token)|authorization\s*[:=]\s*["']?(?:[a-z][a-z0-9_-]*)?|-token\s*[:=])\s*["']?$/i;

function Wo(e) {
  return MRo(e) === "" || HRo(e) === "" || Ko.test(e) || On.test(e);
}

var Ko = /^(?:-D|--define|-f|--file|-pl|--projects|-rf|--resume-from|-l|--log-file|-t|--toolchains|-gt|--global-toolchains|-itr|--install-toolchains|-P|--activate-profiles|-b|--builder|-T|--threads|-emp|--encrypt-master-password|-ep|--encrypt-password)$/, Bo = /^(?:-emp|--encrypt-master-password|-ep|--encrypt-password)$/, zo = /^(?:-emp|--encrypt-master-password|-ep|--encrypt-password)=./s;

function Re(e) {
  return /^-D[A-Za-z_][\w.-]*=.+$/s.test(e) || /^-D[A-Za-z_]\w*(?:\.\w+)+=$/.test(e) || /^-D[A-Za-z_][A-Za-z_.]*$/.test(e) || e.startsWith("-J-") && Re(e.slice(2)) || /^--[a-z][a-z0-9-]*(?:=.*)?$/s.test(e) || Vo.test(e) || /^(?:@|-[A-Za-z]{1,4}\d{0,2}$)/.test(e);
}

var Vo = /^-(?:X(?:mx|ms|ss|mn|rs|int|comp|mixed|batch|diag|debug|future|prof|noclassgc|internalversion|check:jni|share:(?:on|off|auto|dump)|verify(?::[a-z]+)?|log(?::.*)?|loggc:.+|bootclasspath(?:\/[ap])?:.+|runjdwp:.+|dock:.+|startOnFirstThread|showSettings(?::[a-z]+)?)[0-9kKmMgGtT]*$|XX:[+-]?[A-Za-z]\w*(?:=.*)?$|(?:javaagent|agentlib|agentpath):.|verbose(?::[a-z]+)?$|[ed](?:s?a)(?::[a-z][\w$]*(?:\.[\w$]+)*(?:\.\.\.)?)?$|(?:server|client|d64|showversion)$|-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|illegal-access|enable-preview|source|release)(?:=.*)?$|(?:cp|classpath|p)$)/s;

function $Vn(e) {
  return YR(e.map(n => Re(n) ? `; ${n.includes("=") ? n.replace(/^[^=]*=/, "") : ""}` : n).join(" "));
}

function Yo(e, n) {
  let r = An(e);
  if (r === null) return sn(e, n);
  let s = /^-D([^=]+)=/.exec(e)[1];
  return Jo(e) || bn(s, e.slice(s.length + 3)) || $Vn(r) || r.some((S, h) => sn(S, h > 0 ? r[h - 1] : null) || h + 1 < r.length && !Re(r[h + 1]) && lt.test(S) && YR(`${S} ${r[h + 1]}`));
}

function on(e) {
  return An(e.word) ?? [ e.word ];
}

function An(e) {
  let n = /^-D[^=]+=\s*(-.*)$/s.exec(e);
  if (n === null) return null;
  return (umt(n[1]) ?? []).map(h9e).filter(r => !Cn.test(r));
}

function Jo(e) {
  let n = /^-D[^=]+=\s*(-.*)$/s.exec(e);
  return n !== null && umt(n[1]) === null;
}

function sn(e, n) {
  if (zo.test(e)) return !0;
  let r = /^-D([^=]+)=(.+)$/s.exec(e);
  if (r !== null) {
    let [, s, S] = r;
    if (bn(s, S) || YR(S)) return !0;
    if (Pe === !0) return ORo.test(s) || e.includes("\\") || !Zo.test(s) && !(/^sonar\./i.test(s) && !ZPr(s) && !/key.?store|cert|pkcs|p12|pfx|\.pem$/i.test(s)) && an(S);
    return !1;
  }
  if (YR(e)) return !0;
  if (Pe === !0) return !Xo.test(e) && !(n !== null && On.test(n)) && an(e);
  return !1;
}

function an(e) {
  return /[\\/]|^[@~]/.test(e);
}

var Xo = /^-(?:X|XX:|javaagent:|agentlib:|agentpath:|verbose|ea\b|da\b|esa$|dsa$|server$|client$|d64$|showversion$|-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|illegal-access|enable-preview|source|release)\b|(?:cp|classpath|p)$)/, On = /^-(?:-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|source|release)|cp|classpath|p)$/, Zo = /^(?:javax\.net\.ssl\.trustStore|java\.io\.tmpdir|java\.security\.egd|java\.library\.path|jna\.library\.path|java\.class\.path|(?:https?|ftp)\.nonProxyHosts|socksNonProxyHosts|jna\.tmpdir|java\.util\.logging\.config\.file|log4j2?\.configurationFile|logback\.configurationFile|logging\.config|user\.dir|file\.encoding|maven\.multiModuleProjectDirectory|library\.jansi\.path|jansi\.tmpdir)$/i, IRo = [ "JAVA_TOOL_OPTIONS", "JDK_JAVA_OPTIONS", "_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS", "MAVEN_OPTS", "GRADLE_OPTS", "MAVEN_ARGS", "MAVEN_CONFIG", "ANT_OPTS", "ANT_ARGS", "JAVA_OPTS", "SBT_OPTS", "JVM_OPTS", "LEIN_JVM_OPTS", "ES_JAVA_OPTS", "SONAR_SCANNER_OPTS", "SONAR_SCANNER_JAVA_OPTS" ];

function FVn(e) {
  return e.toUpperCase().replace(/^INPUT_/, "").replace(/-/g, "_");
}

var Qo = new Set([ "JAVA_TOOL_OPTIONS", "JDK_JAVA_OPTIONS", "_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS" ]), In = new Set(IRo), Cn = /^-D(?:(?:(?:https?|ftp)\.proxy(?:User|Password)|socksProxy(?:User|Password)|java\.net\.socks\.(?:username|password))=\S*$|[\w.-]*trust-?store-?password=changeit$)/i;

function umt(e) {
  let n = [], r = "", s = !1, S = 0;
  while (S < e.length) {
    let h = e[S];
    if (h === " " || h === "\t" || h === `\n` || h === "\r") {
      if (s) n.push(r), r = "", s = !1;
      S++;
      continue;
    }
    if (h === "'" || h === '"') {
      let y = e.indexOf(h, S + 1);
      if (y === -1) return null;
      r += e.slice(S + 1, y), s = !0, S = y + 1;
      continue;
    }
    r += h, s = !0, S++;
  }
  if (s) n.push(r);
  return n;
}

function Le(e) {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2");
}

var ORo = /^(?:maven\.(?:user\.settings|global\.settings|installation\.settings|project\.settings|settings\.security|repo\.local|home)|settings\.security|gradle\.user\.home|sbt\.(?:boot\.credentials|repository\.config|global\.base|ivy\.home|boot\.directory)|user\.home)$/i;

function MRo(e) {
  if (/^-(?:show-version|strict-checksums)$/.test(e)) return null;
  let n = /^(?:--?settings|--?global-settings|--?install-settings|--?project-settings|-gs|-is|-ps|-s)(?:=(.+))?$/.exec(e) ?? /^-g?s=?(.+)$/.exec(e);
  return n === null ? null : n[1] ?? "";
}

function HRo(e) {
  let n = /^-{1,2}(?:ivy|sbt-dir|sbt-boot)(?:=(.+))?$/.exec(e);
  return n === null ? null : n[1] ?? "";
}

function h9e(e) {
  return e.replace(/^-J(?=-)/, "");
}

function Nn(e) {
  return e.replace(/^--define=/, "-D");
}

function UVn(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (/^(?:-D|--define)$/.test(s) && r + 1 < e.length) r += 1, n.push(`-D${e[r]}`); else n.push(Nn(s));
  }
  return n;
}

function bn(e, n) {
  return vn(e, n) && !/^(?:[\\/~]|[a-z]:[\\/]|file:)/i.test(n);
}

function vn(e, n) {
  let r = e.split(".").at(-1) ?? "";
  return ZPr(e) && (qo.test(Le(e)) || !/(?:user(?:name)?|id|store|file|path|dir|location|url|host|port|alias|type)$/i.test(r)) && !DRo(e, n);
}

var qo = /(?:PASSWORD|PASSWD|SECRET)S?[._-]ID$/i, ei = new Set([ "sonar.login", "sonar.token", "sonar.password" ]), ti = /^(?:projectKey|moduleKey|componentKey|ruleKey|resourceKey)$/, ni = new Set([ "sonar.pullrequest.key" ]);

function DRo(e, n) {
  let r = e.split(".").at(-1) ?? "";
  return /^(?:\d+[a-z]{0,2}|true|false)$/i.test(n) && !Afe(r.replace(/-/g, "_")) && !ct(e);
}

function ZPr(e) {
  if (ei.has(e.toLowerCase())) return !0;
  let n = e.split(".").at(-1) ?? "", r = Le(n).split(/[_-]+/).filter(Boolean).map(S => S.toUpperCase().replace(/\d+$/, "")).filter(Boolean), s = r.at(-1);
  if (!s) return !1;
  if (/^sonar\./i.test(e)) {
    if (s === "SECURED") return !0;
    if ((ti.test(n) || ni.has(e.toLowerCase())) && !ct(e)) return !1;
  }
  if (Afe(n.replace(/-/g, "_")) || ct(e) || st.test(Le(e).replace(/[.-]/g, "_"))) return !0;
  return s === "USERNAME" || s === "USER" && r.length > 1;
}

function ct(e) {
  let n = Le(e).toUpperCase().split(/[._-]+/).filter(Boolean), r = n.at(-1) ?? "", s = n.at(-2) ?? "";
  return n.slice(0, -1).some(S => ri.test(S)) && (!oi.test(r) || /^IDS?$/.test(r) && /^(?:PASSWORDS?|PASSWD|SECRETS?)$/.test(s));
}

var ri = /^(?:PASSWORDS?|PASSWD|PASSPHRASE|SECRETS?|TOKENS?|KEYS?|APIKEY|CREDENTIALS?)$/, oi = /^(?:USER(?:NAME)?|ID|IDS|STORE|FILE|FILES|PATH|PATHS|DIR|DIRECTORY|LOCATION|URL|URI|HOST|PORT|ALIAS|TYPE|PREFERENCE|SCHEMES?|ENABLED?|DISABLED?|MODE|CLASS|PROVIDER|ALGORITHM|FORMAT|LENGTH|SIZE|BITS|TIMEOUT|TTL|HEADER|NAME|NAMES|PREFIX|SUFFIX|VERSION|ENCODING|POLICY|COUNT|CACHE|SERVICE|ENDPOINT|REGION|SCOPE|SCOPES|AUDIENCE|ISSUER|EXPIRY|EXPIRATION|ROTATION|REQUIRED|OPTIONAL|SECONDS?|SECS?|MS|MILLIS(?:ECONDS)?|MINUTES?|MINS?|HOURS?|DAYS?|AGE|CAPACITY|RATE|INTERVAL|DELAY|PERIOD|DURATION|VALIDITY|LIFETIME|WINDOW|MAX|MIN|LIMIT|THRESHOLD|BUDGET|RETRY|RETRIES|ATTEMPTS)$/;

function Afe(e) {
  let n = e.replace(ii, "").replace(/-/g, "_");
  return (rn.test(n) || rn.test(mn(n)) || xRo(n) || Wsn.test(n)) && !ko.test(e);
}

var ii = /^AUTH0_/i, si = "[Aa][Uu][Tt][Hh]0_*", wn = [ "BUILD", "LOCAL", "MIRROR", "PATH", "WITH", "WITHOUT", "CACHE", "DISABLE", "IGNORE", "ONLY" ], ai = "(?:[A-Za-z0-9]+(?:___[A-Za-z0-9]+)*__)+[A-Za-z]{2,}", Wsn = new RegExp(`^(?:INPUT_)?BUNDLE_(?!(?:${wn.join("|")})__(?!${ai}$))\\w*__`, "i"), li = "[Bb][Uu][Nn][Dd][Ll][Ee]_*__*|[Ii][Nn][Pp][Uu][Tt]_[Bb][Uu][Nn][Dd][Ll][Ee]_*__*", ci = wn.flatMap(e => [ `[Bb][Uu][Nn][Dd][Ll][Ee]_${re(e)}__*`, `[Ii][Nn][Pp][Uu][Tt]_[Bb][Uu][Nn][Dd][Ll][Ee]_${re(e)}__*` ]).join("|"), ui = new Set([ "CLAUDE_CODE_CLIENT_KEY", "CLAUDE_CODE_API_KEY_HELPER_TTL_MS", "CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS", "CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER", "CLAUDE_CODE_AUTH_FAIL_EXIT_MS", "CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT", "CLAUDE_CODE_IDLE_TOKEN_THRESHOLD", "CLAUDE_CODE_RESUME_TOKEN_THRESHOLD", "CLAUDE_CODE_ARG_KEY_SHAPE" ]), di = /^CLAUDE_CODE_SKIP_[A-Z0-9_]+_AUTH$/;

function BVn(e) {
  return ui.has(e) || di.test(e);
}

var F0s = new Set([ "GITHUB_TOKEN", "GH_TOKEN", "GH_ENTERPRISE_TOKEN", "GITHUB_ENTERPRISE_TOKEN" ]), Dn = [ "INPUT_", "ORG_GRADLE_PROJECT_", "POETRY_PYPI_TOKEN_", "POETRY_HTTP_BASIC_", "CARGO_REGISTRIES_", "CONAN_LOGIN_USERNAME_", "CONAN_PASSWORD_" ], ut = [ "POETRY_HTTP_BASIC_", "CONAN_LOGIN_USERNAME_" ], gi = new RegExp(`^(?:${Dn.join("|")})`, "i"), pi = new RegExp(`^(?:INPUT_)?(?:${ut.join("|")})`, "i");

function zsn(e) {
  let n = e.replace(/-/g, "_");
  return gi.test(n) && (pi.test(n) || /USER(?:_?NAME)?_?[0-9]*$/i.test(n) || Afe(n));
}

var fi = ut.flatMap(e => [ `${re(e)}*`, `${re(`INPUT_${e}`)}*`, `${re(`INPUT_${e.replace(/_/g, "-")}`).replace(/^INPUT-/, "INPUT_")}*` ]).concat(Dn.filter(e => !ut.includes(e)).flatMap(e => [ "USER", "USERNAME", "USER_NAME", "USER-NAME" ].flatMap(n => [ "", "[0-9]", "[0-9][0-9]", "[_-][0-9]", "[_-][0-9][0-9]" ].map(r => `${re(e)}*${re(n)}${r}`)))).join("|"), ye = "__CLAUDE_CC_KEEP_";

function U0s(e, n = {}) {
  let r = new Set((n.denied ?? []).map(h => h.toUpperCase())), s = new Set((n.masked ?? []).map(h => h.toUpperCase())), S = {};
  for (let [h, y] of Object.entries(e)) {
    if (r.has(h.toUpperCase())) continue;
    if (s.has(h.toUpperCase())) continue;
    if (y !== void 0 && y.trim() !== "" && /^[A-Za-z_][A-Za-z0-9_]*$/.test(h) && (dmt(h) || jsn(h, "") !== void 0)) S[`${ye}${h}`] = y;
  }
  return S;
}

function B0s({sandboxMasked: e = []} = {}) {
  let n = e.filter(Y => /^[A-Za-z_][A-Za-z0-9_]*$/.test(Y)), s = `case "$__cc_name" in (${n.length > 0 ? n.join("|") : "''__cc_none__"}) \\builtin true;; (*) \\builtin false;; esac`, S = Sn.map(re).concat(Pn.map(Y => re(`${Y}S`))).flatMap(Y => [ Y, `${Y}[_0-9]*`, `*_${Y}`, `*_${Y}[_0-9]*` ]).concat(yn.map(re).flatMap(Y => [ `*${Y}`, `*${Y}[_0-9]*` ]), En.map(re).flatMap(Y => [ `*_${Y}`, `*_${Y}[_0-9]*` ])).concat(Mo).join("|"), h = [ ...g9e, ...cmt(), "GITHUB_TOKEN", "GH_TOKEN" ], y = h.join(" "), P = h.map(Y => Y.toUpperCase()).join(" "), A = `__cc_uc=; ( LC_ALL=C \\builtin eval ': "\${__cc_uc^^}"' ) 2>/dev/null && __cc_uc=b; \\builtin test -n "$__cc_uc" || { ( LC_ALL=C \\builtin eval ': "\${(U)__cc_uc}"' ) 2>/dev/null && __cc_uc=z; } || \\builtin true`, C = `__cc_upper="$__cc_name"; case "$__cc_uc" in b) LC_ALL=C \\builtin eval '__cc_upper="\${__cc_name^^}"';; z) LC_ALL=C \\builtin eval '__cc_upper="\${(U)__cc_name}"';; esac`, I = `{ ! ${s} && (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; }`, v = '\\builtin eval "__cc_set=\\${$__cc_name+x}"; \\builtin test -n "$__cc_set"', F = "{ \\builtin compgen -v || \\builtin set; }", k = _n.map(Y => `__cc_fold="\${__cc_fold//${Y}/${Y[0] + Y.slice(1).toLowerCase()}}"`).join("; "), w = (Y, ge = "__cc_fold") => `__cc_fold="\${${Y}}"; ${k}; __cc_split=; __cc_prev=; __cc_i=0; while \\builtin test "$__cc_i" -lt "\${#${ge}}"; do __cc_c="\${${ge}:$__cc_i:1}"; case "$__cc_prev$__cc_c" in [[:lower:][:digit:]][[:upper:]]) __cc_split="\${__cc_split}_";; [[:upper:]][[:upper:]]) case "\${${ge}:$((__cc_i+1)):1}" in [[:lower:]]) __cc_split="\${__cc_split}_";; esac;; esac; __cc_split="$__cc_split$__cc_c"; __cc_prev="$__cc_c"; __cc_i=$((__cc_i+1)); done; case "$__cc_split" in ''|${S}) ${I};; esac`, M = w("__cc_name"), G = "__cc_ncm=; \\builtin shopt -q nocasematch && __cc_ncm=1; \\builtin shopt -u nocasematch || \\builtin true", U = '\\builtin test -z "$__cc_ncm" || \\builtin shopt -s nocasematch || \\builtin true', V = '{ (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }', Z = '{ (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; }', Q = cn.join(" "), de = [ ...In, "GOFLAGS" ].join(" "), ee = (Y => `'${Y.replace(/'/g, "'\\''")}'`)(u1e), q = Object.entries(Object.entries(gn).reduce((Y, [ge, Xe]) => ((Y[Xe] ??= []).push(ge), 
  Y), {})).map(([Y, ge]) => {
    let Xe = [ Y, ...pn[Y] ?? [] ].map(vr => `\\\${${vr}:+x}`).join("");
    return `for __cc_name in ${ge.join(" ")}; do \\builtin eval "__cc_val=\\\${$__cc_name-}"; \\builtin test "$__cc_val" = ${ee} || \\builtin continue; \\builtin eval "__cc_set=${Xe}"; \\builtin test -n "$__cc_set" || { __cc_name=${Y}; __cc_r=${ee}; { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }; }; \\builtin break; done`;
  }).join("; "), ae = "CARGO_REGISTRIES_*_INDEX|POETRY_REPOSITORIES_*_URL|[Cc]argo_[Rr]egistries_*_[Ii]ndex|npm_config_registry|[Nn][Pp][Mm]_[Cc][Oo][Nn][Ff][Ii][Gg]_[Rr][Ee][Gg][Ii][Ss][Tt][Rr][Yy]", Nr = `\\builtin eval "$({ \\builtin compgen -v || \\builtin set; } 2>/dev/null | while \\builtin read -r __cc_line; do __cc_v="\${__cc_line%%=*}"; __cc_v="\${__cc_v#${ye}}"; case "$__cc_v" in (''|[0-9]*|*[!A-Za-z0-9_]*) ;; (CARGO_REGISTRIES_*_INDEX|POETRY_REPOSITORIES_*_URL|[Cc]argo_[Rr]egistries_*_[Ii]ndex|npm_config_registry|[Nn][Pp][Mm]_[Cc][Oo][Nn][Ff][Ii][Gg]_[Rr][Ee][Gg][Ii][Ss][Tt][Rr][Yy]) \\builtin printf '__cc_visit %s\\n' "$__cc_v";; esac; done)"`, br = `\\builtin eval "$({ \\builtin compgen -v || \\builtin set; } 2>/dev/null | while \\builtin read -r __cc_line; do __cc_v="\${__cc_line%%=*}"; case "$__cc_v" in (*[!A-Za-z0-9_]*) ;; (${ye}*) \\builtin printf '\\\\builtin unset -v %s\\n' "$__cc_v";; esac; done)"`, Lr = `__cc_visit() { ${`__cc_name=$1; case "$__cc_name" in ''|[0-9]*|*[!A-Za-z0-9_]*) return 0;; esac; ! ${s} || return 0; \\builtin eval "__cc_k=\\\${${ye}$__cc_name+x}; __cc_r=\\\${${ye}$__cc_name-}; __cc_val=\\\${$__cc_name-}; __cc_has=\\\${$__cc_name+x}"; if \\builtin test -n "$__cc_k"; then \\builtin test "$__cc_has$__cc_val" = "x$__cc_r" || { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }; else \\builtin test -n "$__cc_val" || return 0; case " ${de} " in *" $__cc_name "*) { (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; };; *) __cc_r=${ee}; { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; };; esac; fi; return 0`}; }; for __cc_n in ${Q} ${de}; do __cc_visit "$__cc_n"; done; ${Nr}; ${q}; ${br}; \\builtin unset -f __cc_visit`;
  return `{ __cc_ncm=; \\builtin shopt -q nocasematch && __cc_ncm=1; \\builtin shopt -u nocasematch || \\builtin true; __cc_uc=; ( LC_ALL=C \\builtin eval ': "\${__cc_uc^^}"' ) 2>/dev/null && __cc_uc=b; \\builtin test -n "$__cc_uc" || { ( LC_ALL=C \\builtin eval ': "\${(U)__cc_uc}"' ) 2>/dev/null && __cc_uc=z; } || \\builtin true; while \\builtin read -r __cc_line; do __cc_name="\${__cc_line%%=*}"; case "$__cc_name" in ''|[0-9]*|*[!A-Za-z0-9_]*) \\builtin continue;; esac; __cc_upper="$__cc_name"; case "$__cc_uc" in b) LC_ALL=C \\builtin eval '__cc_upper="\${__cc_name^^}"';; z) LC_ALL=C \\builtin eval '__cc_upper="\${(U)__cc_name}"';; esac; case " ${P} " in *" $__cc_upper "*) ${I}; \\builtin continue;; esac; case "$__cc_name" in ${fi}) ${I}; \\builtin continue;; esac; case "$__cc_name" in ${xo.join("|")}) ;; ${si}) __cc_rest="\${__cc_name#*_}"; case "$__cc_rest" in ${S}) ${I};; *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${w("__cc_rest")};; esac;; ${S}) ${I};; ${ci}) __cc_rest="\${__cc_name#*__}"; __cc_rest="\${__cc_rest//___/-}"; case "$__cc_rest" in *__*[A-Za-z][A-Za-z]) ${I};; *) case "$__cc_name" in *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${M};; esac;; esac;; ${li}) ${I};; *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${M};; esac; done < <({ \\builtin compgen -v || \\builtin set; }); for __cc_name in ${y}; do \\builtin eval "__cc_set=\\\${$__cc_name+x}"; \\builtin test -n "$__cc_set" && ${I}; done; ${Lr}; \\builtin test -z "$__cc_ncm" || \\builtin shopt -s nocasematch || \\builtin true; \\builtin unset -v __cc_line __cc_name __cc_rest __cc_set __cc_val __cc_r __cc_v __cc_k __cc_has __cc_n __cc_split __cc_fold __cc_prev __cc_i __cc_c __cc_ncm __cc_uc __cc_upper; \\builtin true; } 2>/dev/null`;
}

function Ove(e = {}) {
  let n = {
    ...process.env,
    ...e
  }, r = new Set(LRo(n));
  for (let [s, S] of Object.entries(n)) if (S !== void 0 && !ILt(s) && !dmt(s) && jsn(s, "") === void 0 && PRo(s, typeof S === "string" ? S : String(S))) r.add(s);
  return [ ...r ];
}

function LRo(e) {
  let n = new Set([ ...g9e, ...cmt(), "GITHUB_TOKEN", "GH_TOKEN" ]);
  for (let r of Object.keys(e)) if (Afe(r) || zsn(r)) n.add(r);
  return [ ...n ];
}

function re(e) {
  return [ ...e ].map(n => n.toLowerCase() === n ? n : `[${n}${n.toLowerCase()}]`).join("");
}

function YR(e) {
  let n = e.length > ve ? e.slice(0, ve) : e, r = S => {
    let h = S.search(/\s/), y = h === -1 ? S : S.slice(0, h), P = y.lastIndexOf("@");
    if (P === -1) return !1;
    let A = y.slice(0, P);
    if (ln(A, y.slice(P + 1))) return !1;
    return A.includes(":") || !/[/?#]/.test(A) && _i(A);
  }, s = n.indexOf("://");
  while (s !== -1) {
    if (s > 0 && /[a-z0-9+.-]/i.test(n[s - 1] ?? "")) {
      if (r(n.slice(s + 3))) return !0;
    }
    s = n.indexOf("://", s + 3);
  }
  if (n.startsWith("//") && r(n.slice(2))) return !0;
  return /^[^\s/@:]+:(?!\/\/)(?![\\/])[^\s@]*@[^\s/@]+/.test(n) && !/^[a-z]:[\\/]/i.test(n) && !Si.test(n) && !ln(n.slice(0, n.lastIndexOf("@", n.search(/\s|$/))), n.slice(n.lastIndexOf("@", n.search(/\s|$/)) + 1)) && !/^(?:mailto|sips?|xmpp|im|acct):/i.test(n) || Pi.test(n) || yi.test(n) || /["']?sonar\.login["']?\s*[:=]\s*["']?[^\s"',}]{8,}/.test(n) || NRo.test(n) || /\bauthorization\s*[:=]\s*["']?[a-z][a-z0-9_-]*\s+[A-Za-z0-9._~+\/=-]{8,}/i.test(n) || /\b(?:[Tt]oken|TOKEN)\s+(?=[A-Za-z0-9_~+=-]*[0-9])(?=[A-Za-z0-9_~+=-]*[A-Z])(?=([A-Za-z0-9_~+=-]{20,}))\1(?![\/.])/.test(n) || /\b(?:Bearer|Basic)\s+(?=[A-Za-z._~+\/=-]*[0-9]|(?:[A-Za-z0-9._~+\/=-]*?[a-z][A-Z](?![a-z])){2}|[A-Za-z0-9.-]*[_~+\/=])[A-Za-z0-9._~+\/=-]{8,}/.test(n);
}

var ve = 8192;

function _i(e) {
  return /^(?:gh[opusr]_|github_pat_|glpat-|xox[abpr]-|sk-|pk-|AKIA|eyJ|ya29\.|npm_)/.test(e) || e.length >= 20 && /[0-9]/.test(e) && /[a-z]/i.test(e);
}

function ln(e, n) {
  let r = /^([a-z0-9_-]+(?:\.[a-z0-9_-]+)*):\d+([/?#].*)$/is.exec(e);
  if (!r) return !1;
  if (/[?#&]/.test(r[2])) return !0;
  if (Ei.test(n)) return !1;
  if (e.endsWith("/")) return !0;
  if (/^(?:v?\d|sha\d*:)/i.test(n)) return !0;
  return !hi.test(n);
}

var Si = /^(?:[\w.-]+(?::[\w.-]+)?@sha(?:256|384|512):[0-9a-f]{32,}|npm:(?:@[\w.-]+\/)?[\w.-]+@[\w.^~<>=*|+-]*|[a-z_][\w.-]*:[\w.-]+:v?\d[\w.+\[\](),-]*@(?:jar|war|ear|aar|apk|aab|pom|zip|tar|tgz|module|klib|exe|dll|so|dylib)?)$/i, Ei = /^(?:localhost|[a-z0-9_-]+(?:\.[a-z0-9_-]+)*\.(?=[a-z0-9-]*[a-z])[a-z0-9-]+|[a-z0-9_.-]+(?=:\d+(?:[/?#]|$))|\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-f:.]+\])(?::\d+)?(?:[/?#]|$)/i, hi = /^(?:(?=[a-z0-9._-]*[a-z])[a-z0-9._-]+|\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-f:.]+\])(?::\d+)?(?:[/?#]|$)/i, NRo = /-----BEGIN [A-Z ]*PRIVATE KEY(?: BLOCK)?-----/, yi = /https:\/\/(?:hooks\.slack\.com\/(?:services|workflows|triggers)\/|(?:ptb\.|canary\.)?discord(?:app)?\.com\/api\/webhooks\/\d+\/|[\w.-]+\.webhook\.office\.com\/webhookb2\/)[\w\/@.~-]{16,}/i, Pi = /(?:(?:^|[;&?#,{]|\/:)\s*|\s)["']?(?!-*jobserver-auth\s*[=:])(?:[a-z0-9_.-]{0,64}(?:password|passwd|pwd|secret|token|(?:account|access|api|private|subscription)[-_]?key|signature|sig|credential)|[a-z0-9_.-]{0,63}[_.-]auth)["']?\s*[=:]\s*["']?(?!(?:true|false|none|null|yes|no|on|off|enabled|disabled|required|optional)(?:$|[;&,\s"']))[^;&,\s"']+/i;

function Ri(e) {
  let n = e.split(/\s+/).filter(Boolean), r = !1, s = n.map(P => {
    let A = P.replace(/["']/g, ""), C = A.replace(/^--?[\w-]+=/, ""), I = /(?:^|[=\s])--?X[= ]?([^\s=]+)=(.*)$/.exec(A), v = I ?? (r ? /^()([^\s=-][^\s=]*)=(.*)$/.exec(A) : null);
    if (r = /(?:^|=)--?X$/.test(A), v === null) return {
      bare: A,
      contribution: C,
      goes: /(?:^|[=\s])--?X\b/.test(A) && !/(?:^|=)--?X$/.test(A) || YR(C)
    };
    let F = v.at(-2) ?? "", k = F.split("/").at(-1) ?? "", w = v.at(-1) ?? "", M = I === null ? "" : A.slice(0, I.index);
    return {
      bare: A,
      contribution: C,
      goes: vn(k, w) || YR(w) || YR(F) || M !== "" && YR(M)
    };
  });
  for (let P = 0; P < s.length; P++) for (let A = 2; A <= 4 && P + A <= s.length; A++) {
    let C = s.slice(P, P + A);
    if (C.some(I => I.goes) || C.slice(1).some(I => I.bare.startsWith("-"))) break;
    if (YR(C.map(I => I.contribution).join(" "))) {
      for (let I of C) I.goes = !0;
      break;
    }
  }
  s.forEach((P, A) => {
    if (!/(?:^|=)--?X$/.test(P.bare)) return;
    let C = s[A + 1], I = C === void 0 || C.goes || P.goes;
    if (P.goes = I, C !== void 0) C.goes = I;
  });
  let S = n.map(() => -1), h = -1, y = "";
  if (n.forEach((P, A) => {
    if (h === -1) {
      let C = P[0];
      if ((C === '"' || C === "'") && !(P.length > 1 && P.endsWith(C))) h = A, y = C, 
      S[A] = h;
      return;
    }
    if (S[A] = h, P.endsWith(y)) h = -1;
  }), h !== -1) s.forEach((P, A) => {
    if (S[A] === h) P.goes = !0;
  });
  if (s.forEach((P, A) => {
    if (P.goes && S[A] !== -1) s.forEach((C, I) => {
      if (S[I] === S[A]) C.goes = !0;
    });
  }), s.every(P => !P.goes)) return e;
  return n.filter((P, A) => !s[A].goes && (S[A] !== -1 || Tn.test(P))).join(" ");
}

var Ti = [ "LD_", "DYLD_", "BASH_FUNC_", "__BASH_FUNC<", "PYTHON", "PERL5", "RUBY", "LUA_", "DOTNET_", "COMPLUS_", "COR_", "CORECLR_", "APPDOMAIN_MANAGER_", "GIT_" ], Ai = new Set([ "NODE_OPTIONS", "NODE_PATH", "BASH_ENV", "ENV", "SHELLOPTS", "BASHOPTS", "PS4", "PERLLIB", "GEM_PATH", "GEM_HOME", "JAVA_TOOL_OPTIONS", "_JAVA_OPTIONS", "JDK_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS", "CLASSPATH", "BUN_OPTIONS", "MONO_PATH", "R_PROFILE_USER", "DEVPATH", "GCONV_PATH", "OPENSSL_CONF", "OPENSSL_MODULES", "OPENSSL_ENGINES", "KRB5_CONFIG", "GTK_PATH", "QT_PLUGIN_PATH", "GIO_MODULE_DIR", "FPATH", "IFS", "CDPATH", "SSH_ASKPASS", "SSH_ASKPASS_REQUIRE", "SASL_PATH", "PHPRC", "PHP_INI_SCAN_DIR", "PATH", "COMSPEC", "ZDOTDIR", "XDG_CONFIG_HOME", "PSMODULEPATH", "SYSTEMROOT", "WINDIR", "SYSTEMDRIVE", "PATHEXT" ]), Oi = "/usr/bin:/bin:/usr/sbin:/sbin", Ii = "C:\\Windows\\System32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0", Ci = "C:\\Windows\\System32\\cmd.exe", Ni = "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules", bi = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC", we = "/var/empty/claude-code-policy-helper", Li = "C:\\Windows\\claude-code-policy-helper";

function vi(e) {
  let n = e.toUpperCase();
  return Ai.has(n) || Ti.some(r => n.startsWith(r));
}

function eIr(e, n) {
  let r = {
    ...e
  }, s = new Set(Ove(e).map(S => S.toUpperCase()));
  for (let S of Object.keys(r)) if (vi(S) || s.has(S.toUpperCase())) delete r[S];
  if (Object.assign(r, Tfe(r).respelled), r.PYTHONNOUSERSITE = "1", r.GIT_CONFIG_NOSYSTEM = "1", 
  n === "win32") r.GIT_CONFIG_GLOBAL = Li, r.PATH = Ii, r.COMSPEC = Ci, r.PSModulePath = Ni, 
  r.PATHEXT = bi, r.SystemRoot = "C:\\Windows", r.windir = "C:\\Windows", r.SystemDrive = "C:"; else r.GIT_CONFIG_GLOBAL = we, 
  r.PATH = Oi, r.ZDOTDIR = we, r.XDG_CONFIG_HOME = we, r.PSModulePath = we;
  return r;
}

var Di = 1e4, De = 1048576, Fi = p(() => _t({
  managedSettings: oe().optional(),
  claudeMd: o().optional(),
  appendSystemPrompt: o().optional()
}));

function He(e) {
  return {
    message: e,
    remote: null
  };
}

var $Ro = "<policyHelper>";

function _e() {
  let e = mi();
  if (z() && e.primer !== void 0) e.invalidatePolicyLayer(); else ar();
}

class Un {
  state=null;
  selectionWarnings=[];
  initializeAttempted=!1;
  structuralRefusalLogged=!1;
  noEntrySadLogged=!1;
  defaultFallback=null;
  payloadRefusalError=null;
  refreshTimer=null;
  refreshInFlight=!1;
  midSessionArmingEnabled=!1;
  osAdminArming=null;
  startsNoSession=!1;
  decidedOrigin=null;
  pendingStats=new Map;
  remoteArmGeneration=0;
  remoteArmingConfig=null;
  remoteFailedConfig=null;
  lastFailure=null;
  selectedEntry=null;
  releaseLatchWhenTickSettles=!1;
  readRemotePayload=null;
  armedFromUserWritableBase=!1;
  retiredHelperPaths=new Set;
  remoteDecision=null;
  refreshed=Me();
  passesInFlight=0;
  passSettled=Me();
  claimInitialize() {
    if (this.initializeAttempted) return !1;
    return this.initializeAttempted = !0, !0;
  }
  apply(e) {
    if (this.state = e, this.remoteFailedConfig = null, this.lastFailure = null, _e(), 
    e.config) this.startRefreshTimer(e.config, e.fromPerOs, e.armedFromRemote); else this.stopRefreshTimer();
  }
  retireState() {
    let e = this.state?.config?.path;
    if (e !== void 0) this.retiredHelperPaths.add(e);
    this.state = null, this.lastFailure = null, this.selectedEntry = null;
  }
  reset() {
    this.remoteArmGeneration++, this.remoteArmingConfig = null, this.armedFromUserWritableBase = !1, 
    this.remoteDecision = null, this.state = null, this.retiredHelperPaths.clear(), 
    this.selectionWarnings = [], this.initializeAttempted = !1, this.structuralRefusalLogged = !1, 
    this.noEntrySadLogged = !1, this.defaultFallback = null, this.payloadRefusalError = null, 
    this.refreshInFlight = !1, this.midSessionArmingEnabled = !1, this.osAdminArming = null, 
    this.decidedOrigin = null, this.remoteFailedConfig = null, this.lastFailure = null, 
    this.selectedEntry = null, this.releaseLatchWhenTickSettles = !1, this.readRemotePayload = null, 
    this.stopRefreshTimer(), _e();
  }
  announceTierChange() {
    _e();
    try {
      mi().changed.emit("policySettings"), this.refreshed.emit();
    } catch (e) {
      d(e);
    }
  }
  stopRefreshTimer() {
    if (this.refreshTimer) clearInterval(this.refreshTimer), this.refreshTimer = null;
  }
  holdRemoteFailure({config: e, fromPerOs: n}, r) {
    if (this.remoteFailedConfig = e, !r) return;
    if (e.path !== void 0) this.retiredHelperPaths.add(e.path);
    this.startRefreshTimer(e, n, !0);
  }
  retireRemoteFailure() {
    if (this.remoteFailedConfig === null) return;
    this.remoteFailedConfig = null, this.lastFailure = null, this.selectedEntry = null, 
    this.stopRefreshTimer(), this.releaseLatch();
  }
  releaseLatch() {
    if (this.refreshInFlight) this.releaseLatchWhenTickSettles = !0; else this.initializeAttempted = !1;
  }
  settleRefreshExec() {
    if (this.refreshInFlight = !1, this.releaseLatchWhenTickSettles) this.releaseLatchWhenTickSettles = !1, 
    this.releaseLatchAfterTornDownExec();
  }
  releaseLatchAfterTornDownExec() {
    if (this.initializeAttempted = !1, this.readRemotePayload !== null) nIr(this.readRemotePayload);
  }
  startRefreshTimer(e, n, r) {
    this.stopRefreshTimer();
    let s = e.refreshIntervalMs ?? 0;
    if (s <= 0) return;
    this.refreshTimer = setInterval((S, h, y) => {
      if (this.refreshInFlight) return;
      if (this.refreshInFlight = !0, y && this.state === null) {
        Wi(S, h).finally(() => this.settleRefreshExec());
        return;
      }
      let P = this.state;
      Ot(S, h, y, () => this.state === P).then(A => {
        if (this.state === null || this.state !== P) return;
        let C = y && $e(S) || S;
        if ("error" in A) {
          if (this.defaultFallback) {
            let I = `the static ${this.defaultFallback.sourceField} settings payload governs`;
            if (this.state.serving === "default") {
              if (t(`policyHelper refresh: helper still failing (${A.error}); the static default settings payload continues to govern`, {
                level: "debug"
              }), gt(A.error, I, h), this.lastFailure !== A.code) this.lastFailure = A.code, this.announceTierChange();
              return;
            }
            t(`policyHelper refresh failed (${A.error}); applying the static ${this.defaultFallback.sourceField} settings payload`, {
              level: "warn"
            }), gt(A.error, I, h), f("settings_policy_helpers_per_os", "refresh_fell_back_to_default"), 
            this.state.serving = "default", this.lastFailure = A.code, this.state.mergesOutput = ht(C, this.defaultFallback), 
            this.state.output = {
              managedSettings: Ge(this.defaultFallback.settings, y, ng())
            }, this.state.warnings = this.defaultFallback.warnings, this.announceTierChange();
            return;
          }
          if (t(`policyHelper refresh failed (retaining current policy): ${A.error}`, {
            level: "warn"
          }), gt(A.error, "the last successful helper output still governs", h), f("settings_policy_helper", "refresh_failed", {
            attempts: A.attempts
          }), this.lastFailure !== A.code) this.lastFailure = A.code, this.announceTierChange();
          return;
        }
        if (Tt(), this.state.serving === "default") t("policyHelper refresh: helper recovered; its output replaces the static default settings payload", {
          level: "info"
        }), g("settings_policy_helpers_per_os");
        this.state.serving = "helper", this.lastFailure = null, this.state.mergesOutput = C.outputBehavior === "merge", 
        this.state.output = A.output, this.state.warnings = A.warnings, this.announceTierChange();
      }).catch(A => {
        d(A);
      }).finally(() => this.settleRefreshExec());
    }, Math.min(s, XIr), e, n, r), this.refreshTimer.unref?.();
  }
}

var R = new Un, $l = MG({
  clear: zi
}), j0s = R.refreshed, $n = new Set([ "plist", "hklm", "file" ]);

async function OLt(e, n, r) {
  let s = await Bn(e, n, r);
  if (s === null) return null;
  if (s.remote) {
    if (R.startsNoSession) return Gn(s.message, s.remote), null;
    Wn(s.remote);
  }
  return s.message;
}

function W0s() {
  R.startsNoSession = !0;
}

function Gn(e, n) {
  t(`policyHelper: ${e} (reached in a command that starts no session; it proceeds without the helper)`, {
    level: "error"
  }), pe('onFailure is "refuse", but this command starts no Claude Code session, so it proceeds without the helper; sessions will not start until the helper succeeds', n.tuple), 
  f("settings_policy_helpers_per_os", "remote_refuse_not_enforced_no_session");
}

function Wn(e) {
  m("settings_policy_helpers_per_os", e.code, e.helperFailureReason === void 0 ? void 0 : {
    helper_failure_reason: c(e.helperFailureReason)
  });
}

function Kn(e) {
  return e.find(n => n.startupFatal && (n.path === "" || n.path === "policyHelpers" || n.path.startsWith("policyHelpers.")));
}

function FRo(e) {
  let n = Kn(e);
  if (n) return gj.some(r => n.path === `policyHelpers.${r}`) ? "helper_failed" : "policy_invalid";
  return R.payloadRefusalError !== null ? "policy_invalid" : "helper_failed";
}

async function Bn(e, n, r) {
  R.passesInFlight++;
  try {
    return await Hi(e, n, r);
  } finally {
    R.passesInFlight--, R.passSettled.emit();
  }
}

async function Hi(e, n, r) {
  let s = Kn(r);
  if (s) {
    if (!R.structuralRefusalLogged) {
      R.structuralRefusalLogged = !0;
      let w = s.path;
      m("settings_policy_helpers_per_os", w === "" ? "document_invalid" : w === "policyHelpers" ? "structural_invalid" : w === "policyHelpers.default" || w.endsWith(".defaultSettings") ? "default_payload_invalid" : "entry_invalid");
    }
    return He(`${s.file ?? "managed settings"}: ${s.message}`);
  }
  if (R.payloadRefusalError !== null) return He(R.payloadRefusalError);
  if (!R.claimInitialize()) return null;
  R.decidedOrigin = n, Xn(), R.remoteDecision = null, R.selectedEntry = null, me(Qn), 
  me(St);
  let S = e?.policyHelpers, h = n === "remote" && tIr(e), y = h ? At(e) : null, P = y?.tuple, A = h ? void 0 : e?.policyHelper;
  if (!S && !A) {
    if (QH() === !0 && !f_()) t("policyHelper: no helper configuration present at helper-pass time (remote managed settings eligible, no payload in cache); a payload landing later arms one only through a fetch cycle after preAction", {
      level: "debug"
    });
    return R.initializeAttempted = !1, null;
  }
  if (y) {
    if (R.remoteDecision = y, !y.verified && P !== void 0) return R.initializeAttempted = !1, 
    pe("remote settings not verified this session", P), null;
  } else if (n === "remote" && S) return t("remote policyHelpers names no helper and carries no static payload for this platform", {
    level: "debug"
  }), R.initializeAttempted = !1, null; else if (n === null || !$n.has(n)) {
    if (t(`policyHelper ignored: delivered via non-admin source '${n ?? "unknown"}'`, {
      level: "warn"
    }), n === "remote") R.initializeAttempted = !1;
    return null;
  }
  R.armedFromUserWritableBase = n === "plist" && q9().userWritable === !0;
  let C = S ? Gfe() : null, I = null;
  if (y) Et(y); else I = Ui(S, C?.chain ?? []);
  if (I) return R.payloadRefusalError = I, He(I);
  let v = Gi(S, A, C, h);
  if (!v) return R.initializeAttempted = !1, null;
  if (R.selectedEntry = v.kind === "helper" ? {
    key: v.entryKey,
    config: v.config
  } : {
    key: gj.find(w => v.fallback.sourceField === `policyHelpers.${w}.defaultSettings`) ?? "default",
    config: null
  }, v.kind === "default") {
    if (y && !y.payloadServable) {
      if (R.initializeAttempted = !1, pe(y.verified ? `${v.fallback.sourceField} carries settings not yet approved in the managed-settings dialog; it is not applied until they are` : `${v.fallback.sourceField} carries settings the managed-settings dialog lists and remote settings are not verified this session; it is not applied until they are`, void 0), 
      y.verified) f("settings_policy_helpers_per_os", "remote_consent_missing");
      return null;
    }
    return f("settings_policy_helpers_per_os", "fell_back_to_default"), t(`policyHelper: no policyHelpers helper entry for platform "${C?.platform ?? "unknown"}"; applying the static ${v.fallback.sourceField} settings payload`, {
      level: "info"
    }), pt(null, v.fallback.mergesOutput, h), null;
  }
  let F = R.defaultFallback, k = jn(v.fromPerOs ? v.config : null, h);
  if (y && !y.helperMayExec) {
    if (F && y.payloadServable) return pt(null, ht(v.config, F), !0), pe(`not yet approved in the managed-settings dialog; the static ${F.sourceField} settings payload governs until it is`, P), 
    f("settings_policy_helpers_per_os", "remote_consent_missing"), null;
    if (R.initializeAttempted = !1, pe(F ? `not yet approved in the managed-settings dialog, and neither are settings the static ${F.sourceField} payload carries; nothing from the entry applies until they are` : "not yet approved in the managed-settings dialog", P), 
    k) return {
      message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${Vn(P)} to succeed (onFailure "refuse"), and it cannot run until those settings are approved in the managed-settings dialog. Contact your administrator.`,
      remote: {
        code: "remote_refused_on_failure",
        helperFailureReason: void 0,
        tuple: P
      }
    };
    return f("settings_policy_helpers_per_os", "remote_consent_missing"), null;
  }
  try {
    if (v.fromPerOs) {
      if (await Hn(v, {
        armedFromRemote: h,
        suppressExecEvents: h || F !== null
      }) === "applied") g("settings_policy_helpers_per_os");
    } else await Hn(v);
  } catch (w) {
    let M = R.defaultFallback, G = h ? R.remoteDecision?.helperRefusesOnFailure ?? k : k;
    if (v.fromPerOs && !M) if (!(w instanceof Ke)) m("settings_policy_helpers_per_os", "error"); else if (h && G) ; else if (!h && !k) m("settings_policy_helpers_per_os", "continued_on_failure", {
      helper_failure_reason: c(w.code)
    }); else m("settings_policy_helpers_per_os", w.code);
    if (w instanceof Ke) {
      if (M) return t(`${w.message}; applying the static ${M.sourceField} settings payload instead`, {
        level: "warn"
      }), f("settings_policy_helpers_per_os", "fell_back_to_default_on_failure"), pt(w.code === "bad_path" ? null : v, ht(v.config, M), h), 
      R.lastFailure = w.code, null;
      if (R.lastFailure = w.code, h) return pe(w.message, P), R.holdRemoteFailure(v, w.code !== "bad_path"), 
      G ? Mi(w, P) : null;
      if (!k) return xi(w.message), null;
      return He(w.message);
    }
    throw w;
  }
  return null;
}

function jn(e, n) {
  let r = e?.onFailure;
  return r == null ? !n : r !== "continue";
}

function Mi(e, n) {
  return {
    message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${Vn(n)} to succeed (onFailure "refuse"), and it failed [${e.code}] \u2014 ${e.message}. Contact your administrator.`,
    remote: {
      code: "remote_refused_on_failure",
      helperFailureReason: e.code,
      tuple: n
    }
  };
}

function Vn(e) {
  return (e === void 0 ? void 0 : ZIr(e)) ?? "it configures";
}

var St = 'policyHelpers entry skipped (onFailure "continue"): ', Fn = "; Claude Code started without the helper's output";

function xi(e) {
  let n = Be(jmt(e.replace(/\s+/gu, " ")), yt - St.length - Fn.length);
  Rt(`${St}${n}${Fn}`);
}

var Yn = "remote policyHelpers entry not run: ", Jn = "remote policyHelpers static settings payload not applied: ", yt = 512;

function Be(e, n = yt) {
  return e.length > n ? `${e.slice(0, n - 1)}\u2026` : e;
}

function pe(e, n) {
  let r = jmt(e.replace(/\s+/gu, " ")), s = n === void 0 ? void 0 : ZIr(n), S = Be(n === void 0 ? `${Jn}${r}` : `${Yn}${s ? `${s}: ` : ""}${r}`);
  Rt(S);
}

var Pt = "remote policyHelpers static settings payload skipped: ";

function ki(e, n, r) {
  if (Rt(Be(`${Pt}${e} is not a valid static settings payload (${jmt(n.replace(/\s+/gu, " "))})`)), 
  r) f("settings_policy_helpers_per_os", "remote_default_payload_invalid");
}

function Rt(e) {
  R.selectionWarnings.push({
    file: "policyHelper",
    path: "policyHelpers",
    message: e,
    severity: "warning",
    statusOnly: !0
  }), _e(), t(e, {
    level: "warn"
  });
}

function Xn() {
  Zn(), me(Pt);
}

function Zn() {
  me(Yn), me(Jn), R.retireRemoteFailure();
}

var xe = "policyHelper refresh failing: ";

function gt(e, n, r) {
  let s = `; ${n}`, S = Be(jmt(e.replace(/\s+/gu, " ")), yt - xe.length - s.length), h = `${xe}${S}${s}`;
  if (R.selectionWarnings.some(A => A.message === h)) return;
  let y = R.selectionWarnings.filter(A => !A.message.startsWith(xe)), P = y.length !== R.selectionWarnings.length;
  if (R.selectionWarnings = [ ...y, {
    file: "policyHelper",
    path: r ? "policyHelpers" : "policyHelper",
    message: h,
    severity: "warning",
    statusOnly: !0
  } ], !P) _e();
}

function Tt() {
  me(xe);
}

var Qn = "policyHelpers is configured but has no entry for platform ";

function me(e) {
  let n = R.selectionWarnings.filter(r => !r.message.startsWith(e));
  if (n.length === R.selectionWarnings.length) return;
  R.selectionWarnings = n, _e();
}

function qn(e, n) {
  let r = iOr(e, n);
  for (let s of r.strippedKeys) t(`${n}: stripped ${s} from the settings payload (no recursion)`, {
    level: "warn"
  });
  for (let s of r.warnings) t(`${n}: ${s.message}`, {
    level: "warn"
  });
  return r;
}

function tr(e, n) {
  let r = [];
  for (let s of n) {
    let S = e[s], h = S?.defaultSettings;
    if (h !== void 0 && h !== null) r.push({
      field: `policyHelpers.${s}.defaultSettings`,
      raw: h,
      onChain: !0,
      mergesOutput: S?.outputBehavior === "merge"
    });
  }
  for (let s of gj) {
    let S = e[s]?.defaultSettings;
    if (S !== void 0 && S !== null && !n.includes(s)) r.push({
      field: `policyHelpers.${s}.defaultSettings`,
      raw: S,
      onChain: !1,
      mergesOutput: !1
    });
  }
  if (e.default !== void 0 && e.default !== null) r.push({
    field: "policyHelpers.default",
    raw: e.default,
    onChain: !0,
    mergesOutput: !1
  });
  return r;
}

function nr(e, n) {
  if (e.raw !== null && typeof e.raw === "object" && !Array.isArray(e.raw)) {
    let {policyHelper: s, policyHelpers: S, ...h} = e.raw, y = L9e().safeParse(h);
    if (!y.success) return {
      error: y.error.issues[0]?.message ?? "failed validation"
    };
  }
  let r = n ? qn(e.raw, e.field) : iOr(e.raw, e.field);
  if ("error" in r) return {
    error: r.error
  };
  return {
    settings: r.settings,
    warnings: r.warnings.map(s => ({
      ...s,
      statusOnly: !0
    })),
    sourceField: e.field,
    mergesOutput: e.mergesOutput
  };
}

function Ui(e, n) {
  if (R.defaultFallback = null, !e) return null;
  let r = null;
  for (let s of tr(e, n)) {
    let S = nr(s, s.onChain && !r);
    if ("error" in S) return m("settings_policy_helpers_per_os", "default_payload_invalid"), 
    `${s.field} is not a valid static settings payload (${S.error}); Claude Code will not start until it is fixed`;
    if (s.onChain && !r) r = S;
  }
  return R.defaultFallback = r, null;
}

function rr(e) {
  let n = null, r = [];
  for (let s of e) {
    let S = nr(s, !1);
    if ("error" in S) r.push({
      field: s.field,
      error: S.error
    }); else if (!n) n = {
      ...S,
      warnings: G9e(S.warnings)
    };
  }
  return {
    winner: n,
    skipped: r
  };
}

function Et(e) {
  me(Pt), R.defaultFallback = e.winner;
  for (let {field: n, error: r} of e.skipped) ki(n, r, e.verified);
}

function or(e, n) {
  return gNs(OU(e), n.sourceField) || _ee(OU(n.settings));
}

function ir(e) {
  let n = e?.policyHelpers;
  return n ? tr(n, Gfe().chain).filter(r => r.onChain) : [];
}

function z0s(e) {
  if ($i(e) !== void 0) return !0;
  let {winner: n} = rr(ir(e));
  return n !== null && or(e, n);
}

function Ge(e, n, r) {
  return n && !r ? sIo(e) : e;
}

function At(e) {
  let n = ng(), r = lNt(), s = e?.policyHelpers, S = s ? Ae(s, Gfe().chain, !0)?.config ?? null : null, h = iNt(S), y = ir(e), {winner: P, skipped: A} = rr(y);
  return {
    verified: n,
    tuple: h,
    helperMayExec: h !== void 0 && r,
    helperMergesOutput: S?.outputBehavior === "merge",
    helperRefusesOnFailure: jn(S, !0),
    payloadKey: _(iI(y.map(C => [ C.field, C.raw, C.mergesOutput ]))),
    winner: P,
    skipped: A,
    payloadServable: P !== null && (r || !or(e, P) && (n || h === void 0))
  };
}

function sr(e, n) {
  return e.verified === n.verified && e.tuple === n.tuple && e.helperMayExec === n.helperMayExec && e.helperMergesOutput === n.helperMergesOutput && e.helperRefusesOnFailure === n.helperRefusesOnFailure && e.payloadKey === n.payloadKey && e.payloadServable === n.payloadServable;
}

function ht(e, n) {
  return e.outputBehavior === "merge" || n?.mergesOutput === !0;
}

function pt(e, n, r) {
  let s = R.defaultFallback;
  if (!s) return;
  let S = ng();
  R.apply({
    config: e?.config ?? null,
    fromPerOs: e?.fromPerOs ?? !1,
    serving: "default",
    armedFromRemote: r,
    mergesOutput: n,
    output: {
      managedSettings: Ge(s.settings, r, S)
    },
    warnings: s.warnings
  }), t(`${s.sourceField} static settings payload applied${r ? ` from remote managed settings${S ? "" : " (cached, not yet verified this session)"}` : ""} (keys: ${Object.keys(s.settings).join(",")})`, {
    level: "debug"
  });
}

function tIr(e) {
  let n = e?.policyHelpers;
  if (!n) return !1;
  let r = Gfe().chain;
  return Ae(n, r, !0) !== null || n.default !== void 0 && n.default !== null || r.some(s => {
    let S = n[s]?.defaultSettings;
    return S !== void 0 && S !== null;
  });
}

function Ae(e, n, r) {
  for (let s of n) {
    let S = e[s];
    if (S == null) continue;
    if (r ? iNt(S) !== void 0 : S.path != null || S.script != null) {
      let {defaultSettings: y, ...P} = S;
      return {
        osKey: s,
        config: P
      };
    }
  }
  return null;
}

function $i(e) {
  let n = e?.policyHelpers;
  return n ? iNt(Ae(n, Gfe().chain, !0)?.config ?? null) : void 0;
}

function Gi(e, n, r, s) {
  if (!e || !r) return n ? {
    kind: "helper",
    entryKey: "policyHelper",
    config: n,
    fromPerOs: !1
  } : null;
  let {platform: S, chain: h} = r, y = Ae(e, h, s);
  if (y) return {
    kind: "helper",
    entryKey: y.osKey,
    config: y.config,
    fromPerOs: !0
  };
  let P = R.defaultFallback;
  if (P) return {
    kind: "default",
    fallback: P
  };
  if (n) return f("settings_policy_helpers_per_os", "fell_back_to_singular"), {
    kind: "helper",
    entryKey: "policyHelper",
    config: n,
    fromPerOs: !1
  };
  if (s) return null;
  let A = `${Qn}"${S}", no default settings payload, and no policyHelper fallback; no policy helper will run`;
  if (R.selectionWarnings.push({
    file: "policyHelper",
    path: "policyHelpers",
    message: A,
    severity: "warning",
    statusOnly: !0
  }), _e(), t(A, {
    level: "warn"
  }), !R.noEntrySadLogged) R.noEntrySadLogged = !0, f("settings_policy_helpers_per_os", "no_entry_for_platform");
  return null;
}

class Ke extends Error {
  code;
  constructor(e, n) {
    super(n);
    this.code = e;
  }
}

async function Hn({config: e, fromPerOs: n}, r) {
  let s = r?.armedFromRemote === !0, S = R.remoteArmGeneration;
  if (s) R.remoteArmingConfig = e;
  let h;
  try {
    h = await Ot(e, n, s, () => !s || R.remoteArmGeneration === S);
  } finally {
    if (R.remoteArmingConfig === e) R.remoteArmingConfig = null;
  }
  if (s && R.remoteArmGeneration !== S) {
    if (e.path !== void 0 && !("error" in h && h.code === "bad_path")) R.retiredHelperPaths.add(e.path);
    return t("policyHelper: remote arming revoked during exec; discarding output", {
      level: "warn"
    }), f("settings_policy_helpers_per_os", "deactivated_during_exec"), R.releaseLatchAfterTornDownExec(), 
    "dropped";
  }
  if ("error" in h) {
    if (!r?.suppressExecEvents) m("settings_policy_helper", h.code, {
      attempts: h.attempts
    });
    throw new Ke(h.code, `policyHelper failed: ${h.error}`);
  }
  if (R.apply({
    config: e,
    fromPerOs: n,
    serving: "helper",
    armedFromRemote: s,
    mergesOutput: e.outputBehavior === "merge",
    output: h.output,
    warnings: h.warnings
  }), t(`policyHelper applied (keys: ${Object.keys(h.output).join(",")})`, {
    level: "debug"
  }), !r?.suppressExecEvents) g("settings_policy_helper", {
    attempts: h.attempts
  });
  return "applied";
}

function lr() {
  return R.state?.output.managedSettings ?? null;
}

function cr() {
  let e = R.state;
  return e && !e.armedFromRemote ? e.output : void 0;
}

function jVn() {
  return cr()?.claudeMd ?? null;
}

function G0s() {
  return cr()?.appendSystemPrompt ?? null;
}

function lee() {
  return R.state !== null;
}

function V0s() {
  return R.passesInFlight > 0;
}

function K0s(e) {
  return R.passSettled.subscribe(e);
}

function q0s() {
  return R.initializeAttempted;
}

function ur() {
  return R.state?.armedFromRemote === !0;
}

function Gsn() {
  return R.state !== null && R.armedFromUserWritableBase;
}

function dr() {
  return R.state?.mergesOutput === !0;
}

function Y0s(e) {
  if (e !== "remote" || !R.initializeAttempted || R.state?.armedFromRemote === !0) return;
  Tt(), R.stopRefreshTimer();
  let n = R.state !== null;
  if (R.retireState(), R.defaultFallback = null, R.payloadRefusalError = null, R.remoteFailedConfig = null, 
  R.initializeAttempted = !1, !n) return;
  t("policyHelper: OS-admin helper pass retired; the remote payload that landed shadows the MDM/file policy it was read from", {
    level: "info"
  }), f("settings_policy_helper", "retired_shadowed_by_remote"), R.announceTierChange();
}

function Te() {
  if (R.remoteArmGeneration++, Xn(), R.remoteDecision !== null) R.defaultFallback = null, 
  R.remoteDecision = null, R.selectedEntry = null;
  if (R.state?.armedFromRemote !== !0) return;
  Tt(), R.stopRefreshTimer(), R.retireState(), R.releaseLatch(), t("policyHelper: remote-armed helper (or remote static payload) deactivated", {
    level: "info"
  }), R.announceTierChange();
}

VPo(Te);

function $e(e) {
  let n = R.readRemotePayload;
  if (n === null || !lNt()) return null;
  let r = n()?.policyHelpers, s = r ? Ae(r, Gfe().chain, !0)?.config ?? null : null;
  return s !== null && iNt(s) === iNt(e) ? s : null;
}

async function Wi(e, n) {
  try {
    if ($e(e) === null) {
      t("policyHelper: remote retry stopped; the payload in force no longer authorizes the entry", {
        level: "info"
      }), Te();
      return;
    }
    let r = R.remoteArmGeneration;
    R.remoteArmingConfig = e;
    let s;
    try {
      s = await Ot(e, n, !0, () => R.remoteArmGeneration === r && $e(e) !== null);
    } finally {
      if (R.remoteArmingConfig === e) R.remoteArmingConfig = null;
    }
    let S = R.remoteArmGeneration !== r, h = S ? null : $e(e);
    if (h === null) {
      if (!S) Te();
      t("policyHelper: remote retry revoked during exec; discarding output", {
        level: "warn"
      }), f("settings_policy_helpers_per_os", "deactivated_during_exec");
      return;
    }
    if ("error" in s) {
      t(`policyHelper retry failed (remote entry still not armed): ${s.error}`, {
        level: "warn"
      }), f("settings_policy_helper", "refresh_failed", {
        attempts: s.attempts
      });
      return;
    }
    let y = {
      ...e,
      outputBehavior: h.outputBehavior
    };
    R.apply({
      config: y,
      fromPerOs: n,
      serving: "helper",
      armedFromRemote: !0,
      mergesOutput: y.outputBehavior === "merge",
      output: s.output,
      warnings: s.warnings
    }), Zn(), t("policyHelper: remote entry armed by a retry tick", {
      level: "info"
    }), g("settings_policy_helpers_per_os"), R.announceTierChange();
  } catch (r) {
    d(r);
  }
}

function X0s(e) {
  R.midSessionArmingEnabled = !0, R.osAdminArming = e ?? null;
}

function nIr(e) {
  Bi(e), Ki();
}

function Ki() {
  let e = R.osAdminArming;
  if (e === null || !R.midSessionArmingEnabled || R.initializeAttempted || !e.baseSettled()) return;
  let {settings: n, origin: r, loadErrors: s} = e.readBase();
  if (r === null || !$n.has(r) || r === R.decidedOrigin) return;
  OLt(n, r, s).then(S => {
    if (S !== null) {
      t(`policyHelper: the ${r} source became the base mid-session and its pass refused; exiting as the launch would have: ${S}`, {
        level: "error"
      }), e.refuse(S), R.decidedOrigin = r;
      return;
    }
    if (R.state === null) return;
    t(`policyHelper: armed from the ${r} source, which became the base mid-session`, {
      level: "info"
    }), R.announceTierChange();
  }).catch(S => {
    d(S);
  });
}

function Bi(e) {
  if (R.readRemotePayload = e, !R.midSessionArmingEnabled || R.initializeAttempted || !ng()) return;
  let n = e();
  if (!tIr(n)) return;
  let r = R.remoteDecision;
  if (r !== null && sr(r, At(n))) return;
  let s = R.retiredHelperPaths.size, S = R.remoteFailedConfig;
  Bn(n, "remote", []).then(h => {
    if (h === null) return;
    if (h.remote && R.startsNoSession) {
      Gn(h.message, h.remote);
      return;
    }
    let y = R.osAdminArming;
    if (y !== null && (!qp() || y.isUnwatchedRepl())) {
      if (t(`policyHelper: ${h.message} (reached after this unwatched session started; ending it as the launch refusal would have)`, {
        level: "error"
      }), h.remote) Wn(h.remote);
      y.refuse(h.message), R.midSessionArmingEnabled = !1;
      return;
    }
    if (t(`policyHelper: ${h.message} (reached after this interactive session started; it continues without the helper)`, {
      level: "error"
    }), h.remote) pe('onFailure is "refuse", but this was reached after this interactive session started, so it continues on the remote managed settings without the helper; new sessions will not start (and non-interactive or unwatched ones are ended) until the helper succeeds', h.remote.tuple), 
    f("settings_policy_helpers_per_os", "remote_refuse_unenforceable_midsession");
  }).catch(h => {
    d(h);
  }).finally(() => {
    let h = R.state?.armedFromRemote === !0;
    if (h) t(`policyHelper: remote ${R.state?.serving === "default" ? "static payload applied" : "entry armed"} mid-session`, {
      level: "info"
    });
    if (h || R.retiredHelperPaths.size > s || R.remoteFailedConfig !== S) R.announceTierChange();
  });
}

function J0s(e) {
  let n = R.remoteDecision;
  if (n === null) return;
  let r = e(), s = At(r);
  if (sr(n, s)) return;
  let S = R.state;
  if (S?.armedFromRemote === !0 && S.serving === "default") {
    let A = s.tuple === n.tuple && s.helperMayExec === n.helperMayExec, C = s.winner;
    if (A && s.payloadServable && C !== null) {
      Et(s), R.remoteDecision = s;
      let I = Ge(C.settings, !0, s.verified);
      if (s.payloadKey === n.payloadKey && s.helperMergesOutput === n.helperMergesOutput && Ge(C.settings, !0, n.verified) === I) {
        t(`policyHelper: remote static payload from ${C.sourceField} stands as served (document ${s.verified ? "verified" : "no longer verified"} this session)`, {
          level: "debug"
        });
        return;
      }
      S.mergesOutput = s.helperMergesOutput || C.mergesOutput, S.output = {
        managedSettings: I
      }, S.warnings = C.warnings, t(`policyHelper: remote static payload re-served in place from ${C.sourceField}`, {
        level: "info"
      }), R.announceTierChange();
      return;
    }
    Te();
    return;
  }
  let h = S?.armedFromRemote === !0 ? S.config : R.remoteArmingConfig ?? R.remoteFailedConfig, y = h != null && s.helperMayExec && s.tuple === iNt(h), P = S !== null || R.remoteFailedConfig === null;
  if (y && P) {
    Et(s), R.remoteDecision = s, t("policyHelper: remote static payloads re-resolved under the armed entry; the arm stands", {
      level: "debug"
    });
    return;
  }
  Te();
}

function Q0s() {
  return R.state?.config?.path ?? null;
}

function Z0s() {
  return [ ...R.retiredHelperPaths ];
}

function eLs(e) {
  let n = e?.policyHelpers, r = n ? Gfe().chain.map(h => n[h]).filter(h => h != null).map(h => ({
    config: h,
    fromPerOs: !0
  })) : [];
  if (e?.policyHelper != null) r.push({
    config: e.policyHelper,
    fromPerOs: !1
  });
  let s = fr(), S = [];
  for (let {config: h, fromPerOs: y} of r) if (typeof h.path === "string" && _r(h, s, y, !1) === null) S.push(h.path);
  return S;
}

function tLs() {
  return R.state?.serving === "default";
}

function nLs() {
  let {state: e, lastFailure: n, selectedEntry: r, remoteFailedConfig: s} = R, S = R.remoteDecision, h = r?.config ?? null, y = "none";
  if (S?.helperRefusesOnFailure === !0 && (s !== null || S.verified && S.tuple !== void 0 && !S.helperMayExec)) y = "refuse_pending"; else if (n !== null) y = n; else if (S !== null && !S.verified && (S.tuple !== void 0 || !S.payloadServable)) y = "unverified"; else if (S !== null && (h !== null && !S.helperMayExec || r !== null && h === null && !S.payloadServable)) y = "consent_missing"; else if (h !== null && e?.serving === "helper") y = "ok";
  return {
    state: y,
    applied: e === null ? "none" : e.serving === "helper" ? "output" : "fallback",
    entry: r && {
      key: r.key,
      ...h?.path !== void 0 && {
        path: h.path
      },
      ...h?.script !== void 0 && r.key !== "policyHelper" && {
        script: h.script
      }
    }
  };
}

function WVn() {
  return [ ...R.selectionWarnings, ...R.state?.warnings ?? [] ];
}

function zi() {
  R.reset(), R.startsNoSession = !1;
}

var gr = null;

function rLs(e) {
  gr = e;
}

var ji = 500, Vi = 250, Yi = 4e3;

function Ji(e) {
  switch (e) {
   case "exit_nonzero":
   case "timed_out":
   case "not_a_file":
   case "interpreter_unavailable":
    return !0;

   case "bad_path":
   case "oversize":
   case "parse_failed":
   case "envelope_invalid":
   case "schema_rejected":
    return !1;
  }
}

var Mn = 2048;

function Xi(e) {
  let n = iu(e);
  if (n.length <= Mn) return n;
  let r = ne(n, Mn);
  return `${r}\u2026 (+${n.length - r.length} chars not shown; the full output is in the debug log)`;
}

async function Ot(e, n, r, s) {
  let S = n ? e.retries : void 0, h = S !== void 0 && Number.isInteger(S) && S > 0 ? Math.min(S, LPo) : 0;
  for (let y = 1; ;y++) {
    let P = await Zi(e, n, r);
    if (!("error" in P)) return {
      ...P,
      attempts: y
    };
    let A = Xi(P.error), C = {
      error: y > 1 ? `after ${y} attempts: ${A}` : A,
      code: P.code,
      attempts: y
    };
    if (y > h || !Ji(P.code) || !s()) return C;
    let I = kx({
      baseMs: ji,
      floorMs: Vi,
      capMs: Yi,
      attempt: y - 1
    });
    if (t(`policyHelper attempt ${y} of ${h + 1} failed [${P.code}]; retrying in ${I}ms: ${A}`, {
      level: "warn"
    }), await J(I), !s()) return C;
  }
}

async function Zi(e, n, r) {
  let s = fr(), S = _r(e, s, n, r);
  if (S) return {
    error: S,
    code: "bad_path"
  };
  let h = en(e);
  if ("error" in h) return h;
  let {plan: y} = h, P = Math.min(e.timeoutMs ?? Di, XIr), A = performance.now(), C = await tn(y, P, R.pendingStats);
  if (C) return {
    error: C,
    code: "not_a_file"
  };
  let I = Math.ceil(P - (performance.now() - A));
  if (I <= 0) return {
    error: it(y.file, P),
    code: "not_a_file"
  };
  let v;
  if (!r || y.input !== void 0) v = qt(y); else if (e.path === void 0) return {
    error: "remote-armed helper has no path",
    code: "bad_path"
  }; else v = (s === "win32" ? kn : xn).dirname(e.path);
  let F = process.env, k = r ? eIr(gr?.() ?? F, s) : F, {stdout: w, stderr: M, code: G, error: U, maxBufferExceeded: V, timedOut: Z} = await ft(y.file, y.args, {
    timeout: I,
    cwd: v,
    useToolMemoryCgroup: !1,
    maxBuffer: De + 1,
    env: {
      ...Qt(k, y),
      CLAUDE_CODE_VERSION: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION
    },
    extendEnv: !1,
    stdin: y.input === void 0 ? "ignore" : "pipe",
    input: y.input
  });
  if (M) t(`policyHelper stderr: ${M}`, {
    level: "debug"
  });
  if (V) return {
    error: `${M.length > w.length ? "stderr" : "stdout"} exceeded ${De} bytes`,
    code: "oversize"
  };
  if (Z) return {
    error: `timed out after ${P}ms`,
    code: "timed_out"
  };
  let Q = ae => {
    if (w) t(`policyHelper stdout: ${w}`, {
      level: "debug"
    });
    return ae;
  };
  if (G !== 0) return Q({
    error: `exited with code ${G}: ${M || w || U || ""}`,
    code: "exit_nonzero"
  });
  if (Buffer.byteLength(w, "utf8") > De) return {
    error: `stdout exceeded ${De} bytes`,
    code: "oversize"
  };
  let de = mt(w, !1);
  if (de === null || typeof de !== "object") return Q({
    error: "stdout is not a JSON object",
    code: "parse_failed"
  });
  let te = Fi().safeParse(de);
  if (!te.success) return Q({
    error: `invalid envelope: ${te.error.message}`,
    code: "envelope_invalid"
  });
  let ee = {}, q = [];
  if (te.data.managedSettings !== void 0) {
    let ae = qn(te.data.managedSettings, "policyHelper");
    if ("error" in ae) return Q({
      error: ae.error,
      code: "schema_rejected"
    });
    if (q = ae.warnings, r) q = G9e(q), delete ae.settings.claudeMd;
    ee.managedSettings = ae.settings;
  }
  if (te.data.claudeMd !== void 0) ee.claudeMd = te.data.claudeMd;
  if (te.data.appendSystemPrompt !== void 0) ee.appendSystemPrompt = te.data.appendSystemPrompt;
  return {
    output: ee,
    warnings: q
  };
}

function fr() {
  return O() === "windows" ? "win32" : "posix";
}

function _r(e, n, r, s) {
  if (e.script == null && e.interpreter == null) return Qi(e.path, n, r, s);
  if (!r) return "inline scripts are not supported on the singular policyHelper key";
  if (e.path != null) return NPo;
  return pNs(e, n === "win32" ? "windows" : "linux");
}

function Qi(e, n, r, s) {
  let S = n === "win32" ? kn : xn;
  if (typeof e !== "string") return "path must be a string";
  if (!S.isAbsolute(e)) return `path must be absolute: ${e}`;
  if (n === "win32") {
    if (r && !OPo.test(e)) return `path must end in .exe or .ps1 on Windows: ${e}`;
    if (!r && !e.toLowerCase().endsWith(".exe")) return `path must end in .exe on Windows: ${e}`;
    if (HPo(e)) return `${DPo}: ${e}`;
  }
  if (s && (n === "win32" ? xPo(e) : jin(e) || PPo(e))) return `path must not be a UNC, network-automount (/net, /Network/Servers, or macOS /.vol /.file /.nofollow /.resolve) or kernel magic-link (/proc, /dev/fd) path when delivered via remote managed settings: ${e}`;
  if (!IPo(e, n, {
    rejectDriveRelative: n === "win32"
  })) return n === "win32" ? `path must be a drive-qualified (C:\\...) or UNC path in normalized form (no "." or ".." segments, no doubled or trailing separators, no ":" or trailing "."/space in a component, no device-namespace prefix): ${e}` : `path must be in normalized form (no "." or ".." segments, no doubled or trailing separators): ${e}`;
  return null;
}

async function rIr(e, n, r) {
  let s = await e.read([ {
    key: Fe.userSettings(),
    offset: 0,
    length: kf + 1
  } ]);
  if (!s.ok) return {
    kind: "failing",
    code: s.error.code,
    failureClass: "failureClass" in s.error ? s.error.failureClass : void 0
  };
  let S = s.value.items[0];
  if (!S.found) return qi(e.hostFiles, n);
  if (S.totalBytes > kf) return {
    kind: "oversize"
  };
  let h = at(S.value), y = r !== void 0 && r.contentHash === h ? r.parsed : Mw(Fee(S.value), n);
  return {
    kind: "seeded",
    contentHash: h,
    size: S.totalBytes,
    parsed: y
  };
}

async function qi(e, n) {
  let r;
  try {
    r = await e.stat(Rf.home(n));
  } catch (s) {
    return {
      kind: "failing",
      code: l(s)
    };
  }
  if (r.ok) return r.value.kind === "absent" ? {
    kind: "absent"
  } : {
    kind: "failing",
    code: r.value.kind
  };
  return Qgt(r.error) ? {
    kind: "absent"
  } : ze(r.error);
}

async function URo(e, n) {
  if (!z()) return;
  let r = e.epoch;
  try {
    let s = await n.read(), S = s.kind === "seeded" ? s.parsed : s.kind === "absent" && n.whenAbsent === "seedAbsence" ? wee() : void 0;
    if (S === void 0) {
      t(`settings: ${n.label} not re-seeded (${zVn(s)}); the file read serves`);
      return;
    }
    if (n.source !== "userSettings" && e.walkReadDiffers(n.path, S)) {
      t(`settings: ${n.label} not re-seeded (the file read already saw different content this generation); the file read serves`);
      return;
    }
    if (s.kind === "absent") K9e(n.path);
    return e.seedParsedFile(n.path, n.source, S, r) ? e.retainLayer(n.path, S) : void 0;
  } catch (s) {
    t(`settings: ${n.label} not re-seeded: ${l(s)}; the file read serves`, {
      level: "warn"
    });
    return;
  }
}

function BRo(e, n) {
  return {
    source: "userSettings",
    path: n,
    read: () => rIr(e, n),
    label: "user settings",
    whenAbsent: "seedAbsence"
  };
}

async function es(e, n) {
  if (!e.serves("userNamed")) return {
    kind: "failing",
    code: THr
  };
  if (!ZH(n)) try {
    await Nj(se(), n);
  } catch {
    return {
      kind: "failing",
      code: Kgt
    };
  }
  return ns(e, Rf.userNamed(n), n, !1);
}

async function ts(e, n, r) {
  let s = await mr(e, Rf.system(n));
  if (s.kind !== "bytes") return s;
  return {
    kind: "seeded",
    contentHash: s.contentHash,
    size: s.size,
    parsed: r !== void 0 && r.contentHash === s.contentHash ? r.parsed : Mw(Fee(s.bytes), n, !0)
  };
}

async function ns(e, n, r, s) {
  let S = await mr(e, n);
  if (S.kind !== "bytes") return S;
  return {
    kind: "seeded",
    contentHash: S.contentHash,
    size: S.size,
    parsed: Mw(Fee(S.bytes), r, s)
  };
}

async function mr(e, n) {
  let r = await e.stat(n);
  if (!r.ok) return ze(r.error);
  if (r.value.kind === "absent") return {
    kind: "absent"
  };
  if (r.value.kind !== "file") return {
    kind: "failing",
    code: r.value.kind
  };
  if (r.value.size > kf) return {
    kind: "oversize"
  };
  let s = await e.readBytes(n);
  if (!s.ok) return ze(s.error);
  if (!s.value.found) return {
    kind: "absent"
  };
  if (s.value.bytes > kf) return {
    kind: "oversize"
  };
  return {
    kind: "bytes",
    bytes: s.value.value,
    contentHash: at(s.value.value),
    size: s.value.bytes
  };
}

async function oLs(e, n) {
  let r = await e.listFolder(Rf.system(n));
  if (!r.ok) {
    if (r.error.code === "Failed" && r.error.telemetryCode === "ENOTDIR") return {
      kind: "listed",
      names: []
    };
    return ze(r.error);
  }
  if (!r.value.found) return {
    kind: "listed",
    names: []
  };
  return {
    kind: "listed",
    names: r.value.entries.filter(s => (s.kind === "file" || s.kind === "link") && See(s.name)).map(s => s.name).sort()
  };
}

function zVn(e) {
  if (e.kind !== "failing") return e.kind;
  return e.code === THr ? "the backend does not serve this space" : `backend read failed: ${e.code}`;
}

function ze(e) {
  return {
    kind: "failing",
    code: e.telemetryCode ?? e.code,
    failureClass: e.failureClass
  };
}

function jRo(e, n, r, s) {
  return {
    source: n,
    path: r,
    read: () => es(e.hostFiles, r),
    label: s,
    whenAbsent: "seedAbsence"
  };
}

function WRo(e, n, r, s) {
  return {
    source: "policySettings",
    path: n,
    read: () => ts(e.hostFiles, n, s.managedFileReads.get(n)),
    label: r,
    whenAbsent: "fileServes"
  };
}

async function oIr(e, n, r) {
  return URo(n, BRo(e, r));
}

class Pr {
  firedSites=new Set;
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), i("tengu_dead_probe_legacy_local_settings", {
      site: c(e)
    });
  }
  reset() {
    this.firedSites.clear();
  }
}

var Q2s = new K(() => new Pr);

function u_(e, n, r) {
  return hj(e, mi(), n, r);
}

function H() {
  let e = {
    store: mi(),
    cwd: ea(),
    projectConfigDir: Qr() ?? void 0,
    allowedSources: qje(),
    onLegacyLocalSettingsRead: n => Q2s.of(B().host).fire(n),
    parentManaged: pht(),
    hostManagedProvider: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST,
    flagInline: Mf(),
    flagPath: BC(),
    flagExpectedContent: Ww() ?? ete(),
    flagInlineJson: Ww() !== void 0,
    coworkPlugins: qdn(),
    canonicalGitRoot: oI,
    mdm: () => q9(),
    hkcu: () => f9e(),
    helper: () => lr(),
    helperArmedFromRemote: () => ur(),
    helperMergesOutput: () => dr(),
    helperWarnings: () => WVn(),
    wslInherits: () => uG(),
    helperArmedFromUserWritableBase: () => Gsn(),
    credentialHelperKeysFrom: n => Z2s(n),
    launchFolderKeysFrom: n => eVs(n)
  };
  return e.file = () => V9e(e), e;
}

function sIr(e) {
  if (!TU()) return !1;
  if (e !== "policySettings") return !0;
  let n = Ek();
  return !((HU(n) || n === "remote") && q9().userWritable !== !0 && !Gsn() && (f_() === null || ng()));
}

function Z2s(e) {
  if (gu()) return "none";
  if (!TU()) return LVn(e) ? "none" : "as_read";
  if (e !== "policySettings") return "none";
  return sIr(e) ? "machine_admin" : "as_read";
}

function eVs(e) {
  if (!LVn(e)) return "as_read";
  return e === "projectSettings" && Y_() ? "as_read" : "none";
}

function D8s(e) {
  return Zin(e, H());
}

function zRo() {
  let e = H();
  if (e.cwd === null) return;
  let n = gOr(e.cwd, e.canonicalGitRoot);
  return n.decided === void 0 ? n.root : void 0;
}

function hn(e) {
  return yG(e, H());
}

function SE(e) {
  return EOr(e, H());
}

function MIe(e) {
  return pIo(e, H());
}

function Ty() {
  return Vie(H());
}

function Y_() {
  let e = hn("projectSettings"), n = hn("userSettings");
  return !!e && !!n && he(e) === he(n);
}

function Vsn() {
  let e = hn("localSettings");
  if (!e) return [];
  return u_(e).errors;
}

function GRo() {
  return nX(H());
}

function GVn() {
  return V9e(H());
}

function fe(e) {
  if (FC() && zp.has(e)) return null;
  return q9e(e, H());
}

function Cfe() {
  return fIo(H());
}

function VRo() {
  return mIo(H());
}

function KRo() {
  return gIo(H());
}

function qRo() {
  return hIo(H());
}

function qH(e) {
  return tan(e, H(), {
    includeLegacyLocalSettings: !1
  });
}

var tVs = 5e3;

function p1e(e = tVs) {
  return We(mi().backgroundWorkTail, e).then(() => {});
}

var nVs = new K(() => new Map);

function YRo(e) {
  let n = H(), r = [ yG(e, n), ...e === "localSettings" ? [ Vie(n) ] : [] ].filter(I => I !== void 0), s = nVs.of(B().host), S = r.map(I => D1e(I, s)), h = S.filter(({settings: I, errors: v}) => I === null && v.some(F => F.severity !== "warning")), y = h.flatMap(({textRead: I}) => I ?? []);
  if (y.length < h.length) return "unreadable";
  let [P, A] = S.map(({settings: I}) => I), C = A === null || A === void 0 ? P ?? null : fj({}, A, P ?? {}, U5);
  return h.length === 0 ? {
    kind: "in_effect",
    settings: C
  } : {
    kind: "some_do_not_load",
    texts: y,
    settingsOfTheOtherFile: C
  };
}

var Oe;

function Ve() {
  let e = H(), n = Oe;
  if (n === void 0) return e;
  let r = e.canonicalGitRoot;
  return {
    ...e,
    cwd: n.cwd,
    projectConfigDir: n.projectConfigDir,
    canonicalGitRoot: s => s === n.cwd ? n.canonicalRoot : r?.(s) ?? null
  };
}

function Ksn(e) {
  let n = se();
  try {
    let r = fq(n, e, {
      failClosed: !0
    }).linksResolvedPath;
    if (r === void 0) {
      for (let y of [ ue(e), e ]) try {
        if (n.lstatSync(y).isSymbolicLink()) return !0;
      } catch (P) {
        if (!W(P)) return !0;
      }
      return dee(e) !== "absent";
    }
    let s = fq(n, ue(ue(e)), {
      failClosed: !0
    }), S = Se(s.linksResolvedPath ?? s.resolvedPath, It(ue(e)), It(e));
    if (!oL(r, S)) return !0;
    let h = n.lstatSync(r);
    return !h.isFile() || h.nlink > 1;
  } catch {
    return !0;
  }
}

function os(e, n) {
  let r = yG("userSettings", n), s = [ ...r ? [ r ] : [], ...qmt().flatMap(P => Object.values(EE).map(A => Se(P, A))) ], S = se(), h = [ he(e) ];
  try {
    let P = fq(S, e);
    h.push(P.linksResolvedPath ?? P.resolvedPath);
  } catch {}
  let y = O() === "macos";
  return s.some(P => [ he(P), wo(S, P).resolvedPath ].some(A => h.some(C => oL(C, A) || y && pp(C).toLowerCase() === pp(A).toLowerCase())));
}

function pmt() {
  let e = Ve(), n = yG("projectSettings", e), r = {
    project: n && !os(n, e) ? n : null,
    local: yG("localSettings", e) ?? null,
    legacy: Vie(e) ?? null
  };
  return {
    key: `${e.cwd ?? ""}\0${e.projectConfigDir ?? ""}`,
    ...r,
    linkedAway: [ "project", "local", "legacy" ].filter(s => {
      let S = r[s];
      return S !== null && Ksn(S);
    })
  };
}

function dee(e) {
  let n = new Map, r = D1e(e, n), s = n.get(e);
  if (s !== void 0) return {
    text: s.content
  };
  return r.errors.some(S => S.severity !== "warning") ? "unreadable" : "absent";
}

function MLt(e = new Map) {
  let n = new EJe;
  for (let [S, h] of e) n.parsedFiles.set(S, h);
  let r = {
    ...Ve(),
    store: n
  }, s = new Map;
  for (let S of c$) {
    if (S === "projectSettings" && (() => {
      let y = yG(S, r), P = yG("userSettings", r);
      return !!y && !!P && oL(he(y), he(P));
    })()) continue;
    let h = S === "localSettings" ? Vie(r) : void 0;
    s.set(S, {
      settings: q9e(S, r),
      errors: EOr(S, r),
      unfiltered: tan(S, r),
      ...S === "localSettings" && {
        legacy: h === void 0 ? null : hj(h, n).settings ?? null
      }
    });
  }
  return s;
}

var je;

function XRo(e) {
  let n = mi(), r = !n.repoTierFreeze.isHeld(), s = H();
  if (r) Oe = {
    cwd: s.cwd,
    projectConfigDir: s.projectConfigDir,
    canonicalRoot: s.cwd === null ? null : s.canonicalGitRoot?.(s.cwd) ?? null
  };
  let S;
  try {
    S = e === void 0 ? n.repoTierFreeze.engage(MLt) : n.repoTierFreeze.engage(() => MLt(e.files), () => MLt());
  } catch (h) {
    if (r) Oe = void 0;
    throw h;
  }
  if (r) je = e?.onOwnWrite;
  try {
    n.invalidateAll();
  } catch (h) {
    if (S.abandon(), !n.repoTierFreeze.isHeld()) Oe = void 0, je = void 0;
    throw h;
  }
  return {
    began: r,
    release: () => {
      let h = S.release();
      if (h.last) Oe = void 0, je = void 0, n.invalidateAll();
      return h;
    }
  };
}

function VVn(e) {
  return MLt(e);
}

function JRo() {
  let e = Ve();
  return `${e.cwd ?? ""}\0${e.projectConfigDir ?? ""}`;
}

function QRo(e, n) {
  let r = mi();
  if (r.repoTierFreeze.isHeld()) return;
  r.repoTierFreeze.linger(e, n), r.invalidateAll();
}

function ZRo() {
  return mi().repoTierFreeze.differingTiers(MLt()).length === 0 ? "same" : "changed";
}

function is(e) {
  let n = mi().repoTierFreeze, r = zp.has(e) && n.isHeld() && n.baselineTier(e) !== void 0, s = !1, S = new Map, h = new Map, y = P => {
    try {
      return wo(se(), P).resolvedPath;
    } catch {
      return P;
    }
  };
  return {
    before: (P, A, C) => {
      let I = r ? n.baselineTier(e) : void 0;
      if (I === void 0) return;
      let v = Ve(), F = e === "localSettings" ? Vie(v) : void 0, k = F === void 0 ? void 0 : hj(F, new EJe);
      if (F !== void 0 && k !== void 0) S.set(F, k), h.set(F, y(F));
      let w = yG(e, v);
      if (w !== C) {
        s = !0;
        return;
      }
      let M = w === void 0 ? void 0 : hj(w, new EJe);
      if (w !== void 0 && M !== void 0) S.set(w, M), h.set(w, y(w));
      let G = P === null ? null : Mw(_(P), yG(e, v) ?? ""), U = G?.settings ?? null, V = k?.settings ? fj(Ic(k.settings), U ?? {}, U5) : U, Z = [ ...G?.errors ?? [], ...k?.errors ?? [] ], Q = ee => {
        let q = ee && mt(_(ee), !1);
        return typeof q === "object" ? N$t(q) : q;
      }, de = n.differingTiers(MLt(S)).includes(e), te = ee => ee.filter(q => q.file === F || (A || q.preserveOnWrite) && !("alias" in q));
      s = de || !zn(Q(V), Q(I.unfiltered)) || !zn(te(Z), te(I.errors)) || !zn(Q(M?.settings ?? null), Q(U));
    },
    noteRead: ({path: P, content: A}) => {
      let C = S.get(P), I = Mw(A, P);
      if (r && (C === void 0 || !zn(N$t(I.settings), N$t(C.settings)) || !zn(I.errors, C.errors))) s = !0;
    },
    after: ({path: P, content: A}) => {
      let C = Mw(A, P), I = h.get(P);
      S.set(P, C);
      for (let v of S.keys()) if (v !== P && I !== void 0 && h.get(v) === I) S.set(v, C);
      if (r && !s && n.isHeld()) {
        n.rebaseline(MLt(S), [ e ]);
        try {
          je?.(P, A);
        } catch (v) {
          d(j(v));
        }
      }
    }
  };
}

function exo(e) {
  let n = mi();
  if (!n.repoTierFreeze.isHeld()) return e();
  try {
    return n.repoTierFreeze.whileLive(e);
  } finally {
    n.invalidateAll();
  }
}

function fmt() {
  return mi().repoTierFreeze.isHeld();
}

function qsn(e) {
  return mi().repoTierFreeze.tier(e) !== void 0;
}

function L8s() {
  let e = H();
  if (!L(e.flagInline)) return !1;
  if (!Ye(e.flagInline)) return !1;
  return Kmt(e).settings === null;
}

function txo(e) {
  let n = H();
  if (!L(n.flagInline) || !(e in n.flagInline)) return !1;
  return Kmt(n).settings === null;
}

function Mve() {
  return RIo(H());
}

function nxo() {
  return eL(H());
}

function Ysn() {
  return wOr(H());
}

function rxo() {
  return dI(H()).shadowedHelperSources;
}

function Ye(e) {
  if (!L(e)) return !1;
  let n = e.attribution;
  return "includeCoAuthoredBy" in e || n === !1 || L(n) && ("commitTrailers" in n || "commit" in n || "pr" in n);
}

function N8s() {
  let e = H(), n = yG("flagSettings", e);
  if (!n) return !1;
  if (hj(n, e.store, e.flagExpectedContent).settings !== null) return !1;
  if (e.flagExpectedContent !== void 0) {
    let r = mt(e.flagExpectedContent, !1);
    if (!L(r)) return !0;
    return Ye(r);
  }
  return Ct(n);
}

function Ct(e, n = !1) {
  let r;
  try {
    let s = n || ZH(e) ? wo(se(), e) : fq(se(), e);
    r = mt(b$(s.resolvedPath, kf), !1);
  } catch (s) {
    if (W(s)) return !1;
    return !0;
  }
  if (!L(r)) return !0;
  return Ye(r);
}

function $8s(e, n) {
  let r = H(), s = P => P.settings === null && P.errors.some(A => A.severity !== "warning");
  if (e === "flagSettings" && r.flagInline && n in r.flagInline) {
    let P = Kmt(r);
    if (s(P)) return r.flagInline[n];
    if (P.settings?.[n] !== void 0) return;
  }
  let S = yG(e, r);
  if (!S) return;
  let h = e === "flagSettings" ? r.flagExpectedContent : void 0;
  if (!s(hj(S, r.store, h))) return;
  let y;
  try {
    if (h !== void 0) y = mt(h, !1); else {
      let {resolvedPath: P} = wo(se(), S);
      y = mt(b$(P, kf), !1);
    }
  } catch {
    return;
  }
  if (!L(y) || !(n in y)) return;
  return y[n];
}

async function F8s(e, n) {
  let r = H(), s = yG(e, r);
  if (!s) return !1;
  let S = hj(s, r.store);
  if (S.settings !== null) return !1;
  if (S.errors.length === 0) return !1;
  if (z() && n !== void 0 && Je(e, s)) {
    let h;
    try {
      h = await Rr(n);
    } catch {
      return !0;
    }
    switch (h.kind) {
     case "absent":
      return !1;

     case "object":
      return Ye(h.raw);

     default:
      return !0;
    }
  }
  return Ct(s, e === "userSettings");
}

function Je(e, n) {
  return e === "userSettings" && It(n) === EE.default;
}

async function Rr(e) {
  let n = await e.read([ Fe.userSettings() ]);
  if (!n.ok) return {
    kind: "unreadable",
    code: n.error.code
  };
  let r = n.value.items[0];
  if (!r.found) return {
    kind: "absent"
  };
  if (r.totalBytes > kf) return {
    kind: "oversize"
  };
  let s = Fee(r.value);
  if (!s.trim()) return {
    kind: "empty"
  };
  let S = mt(s, !1);
  if (!L(S)) return {
    kind: "non-object"
  };
  return {
    kind: "object",
    raw: S
  };
}

function U8s() {
  let e = H(), n = Vie(e);
  if (!n) return !1;
  let r = hj(n, e.store);
  if (r.settings !== null) return !1;
  if (r.errors.length === 0) return !1;
  return Ct(n);
}

function iIr() {
  let e = H(), n = e.store.repoTierFreeze.tier("localSettings");
  if (n?.legacy !== void 0) return n.legacy;
  let r = Vie(e);
  if (!r) return null;
  return hj(r, e.store).settings ?? null;
}

function Wp() {
  return ean(H());
}

function Xsn() {
  try {
    if (Bt()) return !0;
    let e = mi();
    return e.policy.machineMayPinSignInOrg ??= OIo(H()), e.policy.machineMayPinSignInOrg;
  } catch (e) {
    return t(`machineAdminMayPinSignInOrg: the machine policy read threw: ${l(e)}`, {
      level: "error"
    }), !0;
  }
}

function oxo() {
  try {
    return Rfe()?.forceLoginOrgUUID !== void 0;
  } catch (e) {
    return t(`machineAdminPinsSignInOrg: the machine policy read threw: ${l(e)}`, {
      level: "error"
    }), !1;
  }
}

function Rfe() {
  return Q9e(H());
}

function KVn() {
  return Q9e({
    ...H(),
    helper: void 0
  });
}

function HLt() {
  return DIo(H());
}

function aIr() {
  return HIo(H());
}

function sxo() {
  return vIo(H());
}

function HIe() {
  return EIo(H());
}

function ixo() {
  return LIe(kIo(H()));
}

function Lie() {
  return vOr(H());
}

function f1e(e) {
  return LIo(H(), e);
}

function axo() {
  return mi().lastPolicyEnvComposition;
}

function Nie() {
  return PIo(H());
}

function rVs() {
  return TIo(H());
}

function Hve() {
  return IIo(H());
}

function qVn() {
  return {
    slot: fe("policySettings"),
    adminTiers: rVs()
  };
}

function lxo() {
  return CIo(H());
}

function dxo(e) {
  let n = qVn(), r = z9e(n);
  return {
    mcpLockFromLowerSource: r && n.slot?.allowManagedMcpServersOnly !== !0,
    mcpAllowlistFromLowerSource: r && n.slot?.allowedMcpServers === void 0 && zmt(n) !== void 0,
    mcpShadowedSourceCount: e.length,
    mcpShadowedKeyCount: e.reduce((s, {keys: S}) => s + S.length, 0)
  };
}

function dt() {
  return xm().settings || {};
}

var er = dt;

function lIr() {
  ar();
  let e = [];
  for (let n of jo()) {
    let r = fe(n);
    if (r && Object.keys(r).length > 0) e.push({
      source: n,
      settings: r
    });
  }
  return {
    effective: dt(),
    sources: e
  };
}

function CC(e) {
  let n = jo();
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r];
    if (fe(s)?.[e] !== void 0) return s;
  }
  return null;
}

function xm() {
  let e = mi(), n = e.mergedSettings;
  if (n !== null) return n;
  mo("loadSettingsFromDisk_start");
  let r = kOr(H());
  return mo("loadSettingsFromDisk_end"), e.mergedSettings = r, r;
}

function cxo() {
  for (let e of Gie(uG())) {
    let n = X9e(u_(Se(e, "managed-settings.json"), void 0, !0)), r = !1;
    try {
      let s = Se(e, "managed-settings.d"), S = y => X9e(u_(Se(s, y), void 0, !0)), h = mi().primedFolderListing(s);
      if (h !== void 0) r = h.some(S); else r = se().readdirSync(s).some(y => {
        if (!(y.isFile() || y.isSymbolicLink()) || !See(y.name)) return !1;
        return S(y.name);
      });
    } catch {}
    if (n || r) return {
      hasBase: n,
      hasDropIns: r
    };
  }
  return {
    hasBase: !1,
    hasDropIns: !1
  };
}

function cj() {
  let e = {
    ...H(),
    helper: void 0
  }, {present: n, heldEmpty: r} = dI(e);
  if (r) return {};
  if (n.remote) return nX(e).settings;
  if (n.mdm) return q9().settings;
  if (n.file) return GVn().settings;
  let {settings: s} = pNt(e);
  if (s) return s;
  let S = f9e();
  return Object.keys(S.settings).length > 0 ? S.settings : null;
}

function Y9() {
  let e = SOr({
    ...H(),
    helper: void 0
  });
  return e === "helper" ? null : e;
}

function Jsn() {
  return xIo(H());
}

function Ek() {
  let e = mi(), n = e.policy.origin;
  if (n !== void 0) return n.value;
  let r = SOr(H());
  return e.policy.origin = {
    value: r
  }, r;
}

function Qsn() {
  let e = mi(), n = ng(), r = e.policy.vouchedTiers;
  if (r !== void 0 && r.remoteVerified === n) return r.value;
  let s = AIo(H(), n);
  return e.policy.vouchedTiers = {
    remoteVerified: n,
    value: s
  }, s;
}

function Dve() {
  let e = mi(), n = ng(), r = e.policy.vouchedAdminTier;
  if (r !== void 0 && r.remoteVerified === n) return r.value;
  let s = MIo(H(), n);
  return e.policy.vouchedAdminTier = {
    remoteVerified: n,
    value: s
  }, s;
}

function mmt() {
  let e = mi(), n = e.policy.hostLoginPins;
  if (n !== void 0) return n.value;
  let r = yIo(H());
  return e.policy.hostLoginPins = {
    value: r
  }, r;
}

function uxo() {
  return _Io(H());
}

function pxo() {
  return bIo(H());
}

function Lve() {
  let e = mi(), n = e.policy.slotAdminOrParentComposed;
  if (n !== void 0) return n;
  let r = SIo(H());
  return e.policy.slotAdminOrParentComposed = r, r;
}

function fxo() {
  let e = mi(), n = e.policy.adminRetentionGoverned;
  if (n !== void 0) return n;
  let s = [ nX(H()).settings, q9().settings, V9e(H()).settings ].some(S => S?.cleanupPeriodDays !== void 0);
  return e.policy.adminRetentionGoverned = s, s;
}

function aS() {
  let e = mi(), n = e.policy.loadErrors;
  if (n !== void 0) return n;
  let r = [];
  return r.push(...nX(H()).errors), r.push(...Tr()), r.push(...GVn().errors), r.push(...pNt(H()).errors), 
  r.push(...f9e().errors), e.policy.loadErrors = r, r;
}

function Tr() {
  return mOr(q9().errors, () => nX(H()));
}

function DIe() {
  return [ ...q9().errors, ...GVn().errors ];
}

function Ar() {
  let e = mi(), n = e.policy.adminLoadErrors;
  if (n !== void 0) return n;
  let r = [];
  return r.push(...nX(H()).errors), r.push(...Tr()), r.push(...GVn().errors), e.policy.adminLoadErrors = r, 
  r;
}

function YVn() {
  return Ar().some(e => e.userWritable !== !0 && e.wslIgnored !== !0);
}

function mxo() {
  let e = mi(), n = e.policy.machinePluginKeyLoadRecords;
  if (n !== void 0) return n;
  let r = DIe().some(s => s.userWritable !== !0 && s.wslIgnored !== !0 && (s.severity !== "warning" || ss.includes(nt(nt(s.path, "."), "["))));
  return e.policy.machinePluginKeyLoadRecords = r, r;
}

var ss = [ "", "enabledPlugins", "extraKnownMarketplaces", "strictKnownMarketplaces", "prependPlugins", "appendPlugins", "policyHelper", "policyHelpers", ...N9e.map(e => e.alias) ];

function cee() {
  return LIe(Ar());
}

function LIe(e) {
  return e.filter(n => n.severity !== "warning");
}

function XVn() {
  let e = mi(), n = e.policy.adminSurvivor;
  if (n !== void 0) return n;
  let r = H(), s = eL(r), S = q9(), h = s.composes === "tier" && !Gsn() && !S.userWritable || Y9e(nX(r)) || !S.userWritable && Y9e(S) || Y9e(GVn());
  return e.policy.adminSurvivor = h, h;
}

function JVn() {
  return !XVn() && cee().length > 0;
}

var as = new Set([ "EACCES", "EPERM" ]);

function DLt(e) {
  return e.errorClass === "unreadable" && e.errno !== void 0 && as.has(e.errno);
}

function uee() {
  return !XVn() && cee().some(e => !DLt(e));
}

function ls() {
  try {
    let e = fe("policySettings");
    return [ ...yOr(e), ..._Or(e) ];
  } catch {
    return [];
  }
}

function gxo() {
  let e = aS(), n = [ ...WVn().filter(S => !H1e(S.path)), ...ls() ];
  if (e.length === 0 && n.length === 0) return;
  let r = e.some(S => S.severity !== "warning"), s = [];
  if (e.length > 0) {
    let S = r ? "Managed settings failed to load; policies from the failed source are NOT in effect:" : "Managed settings contain invalid entries (remaining valid policies are still enforced):";
    s.push(`${S}\n${e.map(Sr).join(`\n`)}`);
  }
  if (n.length > 0) s.push(`Managed settings notices:\n${n.map(Sr).join(`\n`)}`);
  if (process.stderr.write(`${s.join(`\n`)}\n`), e.length === 0) return;
  i("tengu_managed_settings_validation_errors", {
    error_count: e.length,
    remote_error_count: N(e, S => S.file === "remote managed settings"),
    fatal: r
  });
}

function Or() {
  return aS(), [ ...mi().managedDocumentLinks.all(), ...q9().managedDocumentLinks ?? [] ];
}

function Zsn() {
  return Or().flatMap(e => {
    let n = SNs(e);
    return n === null ? [] : [ n ];
  });
}

function cs() {
  return aS(), mi().managedFileProtections.all();
}

function hxo() {
  let e = new Set(cs().map(([, r]) => r)), n = zUs.find(r => e.has(r));
  if (n === void 0) return;
  return {
    protection: n,
    setsOrgPin: mi().managedFileProtections.setsOrgPin
  };
}

function yxo() {
  let e = Or();
  if (e.length === 0) return;
  i("tengu_managed_settings_links", {
    inside_count: N(e, n => n.kind === "inside"),
    outside_count: N(e, n => n.kind === "outside"),
    unverified_count: N(e, n => n.kind === "unverified"),
    outside_writable_count: N(e, n => n.kind === "outside" && n.targetWritable === "yes"),
    outside_writable_unknown_count: N(e, n => n.kind === "outside" && n.targetWritable === "unknown")
  });
}

function Sr(e) {
  return `  ${e.file ?? "managed settings"}${e.path ? ` (${e.path})` : ""}: ${e.message}`;
}

function Rn(e, n, r, s) {
  return ca(e, () => n, r, s);
}

function ca(e, n, r, s) {
  if (e === "policySettings" || e === "flagSettings") return Promise.resolve({
    error: null
  });
  let S = hn(e);
  if (!S) return Promise.resolve({
    error: ea() === null ? new gM : null
  });
  return Nt.run(S, () => ds(e, n, S, r, s));
}

var Nt = Mg();

function _xo(e, n) {
  return Nt.run(e, async () => {
    try {
      return await n();
    } finally {
      ar();
    }
  });
}

function m1e() {
  return Nt.drain();
}

c1e(m1e);

async function Ir(e, n, r) {
  try {
    await bA(e, n, r);
  } catch (s) {
    if (!(s instanceof Og) || !await us(e)) throw s;
    t(`Writing settings through symlinked path ${e}`), await bA(e, n, {
      ...r,
      allowSymlink: !0,
      checkParentDir: !1
    });
  }
}

async function us(e) {
  return !1;
}

async function ds(e, n, r, s, S) {
  let h = z() && S !== void 0 && Je(e, r), y = s?.legacyRevocation === "skip", P = null, A;
  using C = {
    [Symbol.dispose]: () => A?.()
  };
  try {
    let I = is(e), v = !1, F = tan(e, H(), {
      includeLegacyLocalSettings: !1
    }), k = F !== null && hj(r, H().store).errors.some(U => U.preserveOnWrite);
    if (k) F = null;
    if (!F) {
      let U = null;
      try {
        let V = e === "userSettings" || ZH(r) ? wo(se(), r) : await Nj(se(), r);
        U = (await Q_(V.resolvedPath, kf)).content;
      } catch (V) {
        if (!W(V)) throw V;
      }
      if (U !== null && U.trim() !== "") {
        let V = mt(U, !1);
        if (V === null) return t(`updateSettingsForSource: invalid JSON in settings file at ${r}`, {
          level: "error"
        }), {
          error: Error(`Invalid JSON syntax in settings file at ${r}`)
        };
        if (V && typeof V === "object") {
          let Z = Ic(V);
          Vfe(Z, r), pOr(Z), F = Z, v = !0, t(k ? `Using raw settings from ${r} so entries this build does not recognize survive the write` : `Using raw settings from ${r} due to validation failure`);
        }
      }
    }
    I.before(F ?? null, v, r);
    let w = n(F ?? null);
    if (w === null) {
      if (e === "localSettings" && !y) {
        let U = await yr(n, I);
        if (U.error) return {
          error: U.error
        };
        if (U.changed) {
          if (z() && S !== void 0) A = await Er(S, r);
          try {
            xm();
          } catch (V) {
            d(V);
          }
          hr(e);
        }
      }
      return {
        error: null
      };
    }
    await se().mkdir(ue(r));
    let M = fj(F || {}, w, (U, V, Z, Q) => {
      if (V === void 0 && Q && typeof Z === "string") {
        delete Q[Z];
        return;
      }
      if (Array.isArray(V)) return V;
      if (Z === "extraKnownMarketplaces" && L(U) && L(V)) return gNt(U, V);
      return;
    });
    smt(r);
    let G = _(M, null, 2) + `\n`;
    if (h) {
      let U = await S.write(Fe.userSettings(), G, {
        publishDiscipline: "followAtomic"
      });
      if (!U.ok) throw new x(`settings storageV5 write failed: ${U.error.code}${"failureClass" in U.error ? ` (${U.error.failureClass})` : ""}`, "settings storageV5 write failed");
    } else {
      let U = ite(ue(r));
      await Ir(r, G, {
        encoding: "utf-8",
        allowSymlink: e === "userSettings" || U,
        checkParentDir: (e === "projectSettings" || e === "localSettings") && !U,
        stagingDir: Se(ue(r), FU)
      });
    }
    if (I.after({
      path: r,
      content: G
    }), ar(), h) A = gs(r, G);
    if (e === "localSettings" && !y) {
      let U = await yr(n, I);
      if (U.error && U.phase !== void 0 && !Cr(w)) t(`localSettings: legacy settings.local.json could not be evaluated (${U.phase} failure) but this write contains no removals \u2014 canonical write succeeded, ignoring: ${U.error.message}`, {
        level: "warn"
      }); else P = U.error;
    }
    if (e === "localSettings") {
      let U = JPr(nM("localSettings"), Qr() ?? ke()).then(Z => {
        if (!Z.written) return;
        if (Z.effective) g("gitignore_global_rule"); else if (Z.reason === "already_tracked") f("gitignore_global_rule", Z.reason); else m("gitignore_global_rule", Z.reason ?? "write_ineffective");
      }).catch(() => {}), V = mi();
      V.backgroundWorkTail = Promise.all([ V.backgroundWorkTail, U ]).then(() => {});
    }
  } catch (I) {
    let v = Error(`Failed to read raw settings from ${r}: ${I}`, {
      cause: I
    });
    return t(v.message, {
      level: "error"
    }), {
      error: v
    };
  }
  if (z() && S !== void 0 && !h) A = await Er(S, r);
  try {
    xm();
  } catch (I) {
    d(I);
  }
  return hr(e), {
    error: P
  };
}

async function Er(e, n) {
  let r = hn("userSettings");
  if (r === void 0 || r === n || !Je("userSettings", r)) return;
  return oIr(e, mi(), r);
}

function gs(e, n) {
  if (Buffer.byteLength(n) > kf) return;
  let r;
  try {
    r = Mw(n, e);
  } catch (S) {
    t(`updateSettingsForSource: written settings not seeded: ${l(S)}`);
    return;
  }
  let s = mi();
  return s.seedParsedFile(e, "userSettings", r, s.epoch), s.retainLayer(e, r);
}

function Cr(e) {
  if (e === void 0 || Array.isArray(e)) return !0;
  if (e === null || typeof e !== "object") return !1;
  return Object.values(e).some(Cr);
}

function hr(e) {
  try {
    mi().changed.emit(e);
  } catch (n) {
    for (let r of n instanceof AggregateError ? n.errors : [ n ]) d(r);
  }
}

async function yr(e, n) {
  let r = Vie(H());
  if (!r) return {
    changed: !1,
    error: null
  };
  let s;
  try {
    let I = ZH(r) ? wo(se(), r) : await Nj(se(), r);
    s = (await Q_(I.resolvedPath, kf)).content;
  } catch (I) {
    if (W(I)) return {
      changed: !1,
      error: null
    };
    let v = new x(`Failed to read legacy settings.local.json at ${r}: ${I}`, "Failed to read legacy settings.local.json");
    return t(v.message, {
      level: "error"
    }), {
      changed: !1,
      error: v,
      phase: "read"
    };
  }
  n.noteRead({
    path: r,
    content: s
  });
  let S = mt(s, !1);
  if (!S || typeof S !== "object" || Array.isArray(S)) return {
    changed: !1,
    error: null
  };
  let h = Ic(S);
  Vfe(h, r), pOr(h);
  let y = h, P;
  try {
    P = e(Ic(y));
  } catch (I) {
    let v = new x(`Transform failed against legacy settings.local.json at ${r} (malformed legacy content?): ${I}`, "Transform failed against legacy settings.local.json");
    return t(v.message, {
      level: "error"
    }), {
      changed: !1,
      error: v,
      phase: "transform"
    };
  }
  if (P === null) return {
    changed: !1,
    error: null
  };
  let A = fj(Ic(y), P, (I, v, F, k) => {
    if (v === void 0 && k && typeof F === "string") {
      delete k[F];
      return;
    }
    if (Array.isArray(v)) return v;
    return;
  }), C = sLs(y, A);
  if (_(C) === _(y)) return {
    changed: !1,
    error: null
  };
  try {
    smt(r);
    let I = ite(ue(r)), v = _(C, null, 2) + `\n`;
    return await Ir(r, v, {
      encoding: "utf-8",
      allowSymlink: I,
      checkParentDir: !I,
      stagingDir: Se(ue(r), FU)
    }), n.after({
      path: r,
      content: v
    }), ar(), {
      changed: !0,
      error: null
    };
  } catch (I) {
    let v = new x(`Failed to revoke from legacy settings.local.json at ${r}: ${I}`, "Failed to revoke from legacy settings.local.json");
    return t(v.message, {
      level: "error"
    }), {
      changed: !1,
      error: v
    };
  }
}

function sLs(e, n) {
  if (Array.isArray(e) && Array.isArray(n)) {
    let r = new Set(n.map(s => _(s)));
    return e.filter(s => r.has(_(s)));
  }
  if (L(e) && L(n)) {
    let r = {};
    for (let s of Object.keys(e)) {
      if (!(s in n) || n[s] === void 0) continue;
      r[s] = sLs(e[s], n[s]);
    }
    return r;
  }
  return e;
}

function bxo(e) {
  let n = fNs(e).parse(e), r = [ "permissions", "sandbox", "hooks" ], s = [], S = {
    permissions: new Set(Object.keys(uNs().shape)),
    sandbox: new Set(Object.keys(dKn().shape)),
    hooks: new Set(up)
  };
  for (let h of Object.keys(n)) if (r.includes(h) && n[h] && typeof n[h] === "object") {
    let y = n[h], P = S[h];
    if (P) {
      for (let A of Object.keys(y)) if (P.has(A)) s.push(`${h}.${A}`);
    }
  } else s.push(h);
  return s.sort();
}

function ein(e) {
  if (!mi().pluginBaseLoaded) i("tengu_plugin_settings_premature_read", {
    key: c(e)
  });
  let {settings: n} = xm();
  return (n || {})[e];
}

function sI(e) {
  return xfe(e).map(n => n.value);
}

var oVs = [ "policySettings", "flagSettings", "userSettings" ];

function xfe(e) {
  let n = [];
  for (let r of oVs) {
    let s = fe(r)?.[e];
    if (s !== void 0) n.push({
      source: r,
      value: s
    });
  }
  return n;
}

function zK() {
  return !!(fe("userSettings")?.skipDangerousModePermissionPrompt || fe("localSettings")?.skipDangerousModePermissionPrompt || fe("flagSettings")?.skipDangerousModePermissionPrompt || fe("policySettings")?.skipDangerousModePermissionPrompt);
}

function y9e() {
  return !!(fe("policySettings")?.skipDangerousModePermissionPrompt || fe("userSettings")?.skipDangerousModePermissionPrompt);
}

function dIr() {
  return !!(fe("userSettings")?.skipWorkflowUsageWarning || fe("localSettings")?.skipWorkflowUsageWarning || fe("flagSettings")?.skipWorkflowUsageWarning || fe("policySettings")?.skipWorkflowUsageWarning);
}

function Nve() {
  return jo().some(e => fe(e)?.isolatePeerMachines === !0);
}

function Pfe() {
  return jo().some(e => fe(e)?.disableClaudeAiConnectors === !0) || Nie().some(e => e.disableClaudeAiConnectors === !0);
}

function Sxo() {
  return !0;
}

function QVn(e) {
  return ![ ...Wp(), ...Nie(), fe("policySettings"), fe("flagSettings"), fe("userSettings"), fe("localSettings"), iIr() ].some(n => n?.[e] === !1);
}

function tin() {
  return QVn("useAutoModeDuringPlan");
}

function gmt() {
  return sI("askUserQuestionTimeout")[0];
}

function nin() {
  return sI("dialogExpiry")[0];
}

function hmt() {
  return sI("modelProposedGoals")[0] ?? "auto";
}

async function wxo(e) {
  let n = sI("modelProposedGoals")[0];
  if (n !== void 0) return n;
  if (await h1e("modelProposedGoals", e) !== "absent") return "alwaysAsk";
  return "auto";
}

var pee = p(() => u({
  allow: T(o()).optional(),
  soft_deny: T(o()).optional(),
  hard_deny: T(o()).optional(),
  deny: T(o()).optional(),
  environment: T(o()).optional()
})), g1e = [ "userSettings", "flagSettings", "policySettings" ];

function XR() {
  let e = pee(), n = mi();
  if (!n.autoModeUntrustedSourceWarned) for (let P of [ "projectSettings", "localSettings" ]) {
    if (P === "projectSettings" && Y_()) continue;
    let A = fe(P)?.autoMode;
    if (A && e.safeParse(A).success) n.autoModeUntrustedSourceWarned = !0, t(`settings autoMode in ${P} ignored \u2014 only user/flag/managed settings may set classifier rules (projectSettings and localSettings are repo-controllable)`, {
      level: "warn"
    }), i("tengu_settings_auto_mode_rules_untrusted_source_ignored", {
      source: c(P)
    });
  }
  let r = [], s = [], S = [], h = [], y = !1;
  for (let P of g1e) {
    let A = fe(P);
    if (!A) continue;
    let C = e.safeParse(A.autoMode);
    if (C.success) {
      if (C.data.allow) r.push(...C.data.allow);
      if (C.data.soft_deny) s.push(...C.data.soft_deny);
      if (C.data.hard_deny) S.push(...C.data.hard_deny);
      if (C.data.environment) h.push(...C.data.environment);
    }
  }
  if (r.length > 0 || s.length > 0 || S.length > 0 || h.length > 0 || y) return {
    ...r.length > 0 && {
      allow: r
    },
    ...s.length > 0 && {
      soft_deny: s
    },
    ...S.length > 0 && {
      hard_deny: S
    },
    ...h.length > 0 && {
      environment: h
    },
    ...{}
  };
  return;
}

function vxo() {
  for (let e of g1e) if (fe(e)?.autoMode?.classifyAllShell === !0) return !0;
  return !1;
}

async function h1e(e, n, r) {
  let s = H(), S = Jin(s), h = !1, y = !1;
  for (let P of S) {
    let A = P !== "policySettings" && (r?.presenceSources === void 0 || r.presenceSources.includes(P));
    if (A && P === "flagSettings" && L(s.flagInline) && e in s.flagInline && e !== "attribution" && e !== "includeCoAuthoredBy") h = !0;
    if (P === "flagSettings" && s.flagExpectedContent !== void 0) {
      if (!s.flagExpectedContent.trim()) continue;
      let k = mt(s.flagExpectedContent, !1);
      if (k === null || typeof k !== "object" || Array.isArray(k)) y = !0; else if (A && e in k && e !== "attribution" && e !== "includeCoAuthoredBy") h = !0;
      continue;
    }
    let C = yG(P, s);
    if (!C) continue;
    if (z() && n !== void 0 && P === "projectSettings" && S.includes("userSettings") && Y_()) continue;
    let I = P === "localSettings" ? Vie(s) : void 0, v = I ? [ C, I ] : [ C ], F = z() && n !== void 0 && Je(P, C);
    for (let k of v) {
      if (F) {
        let w = await Rr(n);
        switch (w.kind) {
         case "unreadable":
          t(`rawSettingsKeyPresence: v5 user-settings read failed: ${w.code}`), y = !0;
          break;

         case "oversize":
         case "non-object":
          y = !0;
          break;

         case "object":
          if (A && e in w.raw && !(e === "attribution" || e === "includeCoAuthoredBy")) h = !0;
          break;

         case "absent":
         case "empty":
          break;
        }
        continue;
      }
      try {
        let w = P === "policySettings" || P === "userSettings" || ZH(k) ? wo(se(), k) : fq(se(), k), M = b$(w.resolvedPath, kf);
        if (!M.trim()) continue;
        let G = mt(M, !1);
        if (G === null || typeof G !== "object" || Array.isArray(G)) y = !0; else if (A && e in G && !(e === "attribution" || e === "includeCoAuthoredBy")) h = !0;
      } catch (w) {
        if (fOr(w, k), !W(w)) y = !0;
      }
    }
  }
  if (y) return "unknowable";
  return h ? "present" : "absent";
}

export { cG, qPr, YPr, oI, bE, Fsn, H0s, XPr, JPr, kfe, LVn, TU, wRo, D0s, vRo, ERo, c1e, q0, Usn, smt, NVn, L0s, imt, q9, amt, f9e, uG, m9e, lmt, kRo, dmt, u1e, TRo, Bsn, N0s, Tfe, ARo, cmt, QPr, $0s, g9e, CRo, RRo, Die, xRo, ILt, PRo, jsn, $Vn, IRo, FVn, umt, ORo, MRo, HRo, h9e, UVn, DRo, ZPr, Afe, Wsn, BVn, F0s, zsn, U0s, B0s, Ove, LRo, YR, NRo, eIr, $Ro, j0s, OLt, W0s, FRo, z0s, tIr, jVn, G0s, lee, V0s, K0s, q0s, Gsn, Y0s, X0s, nIr, J0s, Q0s, Z0s, eLs, tLs, nLs, WVn, rLs, rIr, URo, BRo, oLs, zVn, jRo, WRo, oIr, Q2s, u_, sIr, Z2s, eVs, D8s, zRo, hn, SE, MIe, Ty, Y_, Vsn, GRo, GVn, fe, Cfe, VRo, KRo, qRo, qH, tVs, p1e, nVs, YRo, Ksn, pmt, dee, MLt, XRo, VVn, JRo, QRo, ZRo, exo, fmt, qsn, L8s, txo, Mve, nxo, Ysn, rxo, N8s, $8s, F8s, U8s, iIr, Wp, Xsn, oxo, Rfe, KVn, HLt, aIr, sxo, HIe, ixo, Lie, f1e, axo, Nie, rVs, Hve, qVn, lxo, dxo, dt, er, lIr, CC, xm, cxo, cj, Y9, Jsn, Ek, Qsn, Dve, mmt, uxo, pxo, Lve, fxo, aS, DIe, YVn, mxo, cee, LIe, XVn, JVn, DLt, uee, gxo, Zsn, hxo, yxo, Rn, ca, _xo, m1e, sLs, bxo, ein, sI, oVs, xfe, zK, y9e, dIr, Nve, Pfe, Sxo, QVn, tin, gmt, nin, hmt, wxo, pee, g1e, XR, vxo, h1e };
