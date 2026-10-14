// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { x, l, E, xae, W, ci } from "./chunk-b0z4bv3v.js";

import { J, We } from "./chunk-nvtwm272.js";

import { I$, Sx, el, Mm, GX, oBs, zw, l0r, UYn, uMe, Wme, Hm } from "./chunk-ddr690nj.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Dgt } from "./chunk-y752zmas.js";

import { K, lt, ps, ke, ux, Ww, ete, tte, VLo, Fme, qLo, YLo, rte, TEe, $X, Fn, fc } from "./chunk-3pqddg8f.js";

import { Eje, ZXe, Oa, a } from "./chunk-j016gcgm.js";

import { bt, _, Y, Jln, S_, t } from "./chunk-kawq2919.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f, so } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { up, gee, k1e, Uie, Dmt, jIr, WIr } from "./chunk-q6wab2jw.js";

import { kt, ze } from "./chunk-r2h53bm2.js";

import { pr } from "./chunk-9yajep3y.js";

import { or } from "./chunk-w0q7jqcp.js";

import { X } from "./chunk-1zg3hbfq.js";

import { a$t, lL, Dl } from "./chunk-4dwgr3et.js";

import { ft } from "./chunk-zscnwzv2.js";

import { dn } from "./chunk-nnrb0acr.js";

import { cG, Tfe, Ove, u_, hn, Ty, fe, txo, Mve, Nie, Ek, cee, LIe, QVn } from "./chunk-dd98x6x7.js";

import { Oe, Yn } from "./chunk-cjt10y7b.js";

import { _c } from "./chunk-vps0k559.js";

import { Fnn, M3e, $a, Sn, oa, Gt, k, Jm } from "./chunk-xywp7esx.js";

import { gs } from "./chunk-qqd24q2y.js";

import { KS, AC } from "./chunk-46phtgr7.js";

import { zd } from "./chunk-2my8wpr5.js";

import { _j, Qa } from "./chunk-nc0jxmkt.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { gH, tvs, _dt, Pwr, uZt, hOt, mZt, xl, EP, Edt, mUn, yxe, L8, Lue } from "./chunk-67jt18z1.js";

import { v1 } from "./chunk-9tdwgnpn.js";

import { Gg, Mi, Hi } from "./chunk-8drhysk2.js";

import { Uwr, Nue, l6e, Vm, w1 } from "./chunk-t70vnbgq.js";

import { HY, GT, r6e } from "./chunk-d7768anc.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { NV, _O, $V } from "./chunk-t17yn24n.js";

import { zvr } from "./chunk-278xsh28.js";

import { vv } from "./chunk-sjjx8nvs.js";

import { me, Vo, lr, St } from "./chunk-dexzwy8h.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, v, M, oe, T, u, U, A } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

async function kn(e) {
  let n = (s, h) => (t(`[plugins-scope] ${s}: ${h}`), s);
  if (!KS("allow_plugin_skill_search")) return n("send", "policy refuses the plugin routes");
  if (!Yn()) return n("send", "not a first-party provider session");
  if (Ct()) return n("send", "essential traffic only");
  if (zd()) return n("send", "CCR session token");
  try {
    await oa({
      credentials: e
    });
  } catch (s) {
    t(`[plugins-scope] pre-check token freshen failed: ${l(s)}`);
  }
  let r = Sn();
  if (!r?.accessToken) return n("send", "no claude.ai token");
  if (r.scopes?.includes(Dgt)) return n("send", "token carries user:plugins");
  if (!r.refreshToken) return n("send", "host-injected token, scopes unknown here");
  if (r.clientId) return n("send", "third-party OAuth client");
  return n("skip_no_scope", "login token lacks user:plugins until its next refresh");
}

var _n = 1e4;

async function FRe(e, n, r = _n) {
  if (e?.aborted) return "send";
  let s = kn(n).catch(y => (t(`[plugins-scope] unexpected gate error: ${l(y)}`), "send")), h;
  if (!e) h = await We(s, r); else {
    let y, w = new Promise(S => {
      y = () => S(void 0), e.addEventListener("abort", y, {
        once: !0
      });
    });
    try {
      h = await We(Promise.race([ s, w ]), r);
    } finally {
      e.removeEventListener("abort", y);
    }
  }
  return h ?? "send";
}

import { readdir as Ce, stat as wn } from "fs/promises";

import { join as te } from "path";

var qJt = ".claude-plugin", mf = te(qJt, "plugin.json"), URe = "plugin.json", EPt = te(qJt, "marketplace.json"), kPt = [ "commands", "skills", "agents", "hooks", "themes", "output-styles", "monitors", "workflows" ], En = [ "SKILL.md", ".mcp.json", ".lsp.json" ], Kat = [ qJt, ...kPt, ...En ];

async function qat(e) {
  return (await Ce(e)).filter(r => !He(r)).some(L_r);
}

async function YJt(e) {
  let n = (await Ce(e, {
    withFileTypes: !0
  })).filter(r => !He(r.name));
  if (n.some(r => r.name === ".claude-plugin")) return e;
  if (n.length === 1 && n[0].isDirectory()) {
    let r = te(e, n[0].name);
    if (await Pn(te(r, ".claude-plugin"))) return r;
    if (!L_r(n[0].name) && await qat(r)) return r;
  }
  return e;
}

function L_r(e) {
  return Kat.includes(e);
}

function E_s(e) {
  return kPt.includes(e);
}

async function Pn(e) {
  try {
    return await wn(e), !0;
  } catch {
    return !1;
  }
}

function He(e) {
  return e === "__MACOSX" || e === ".DS_Store";
}

import { createWriteStream as Mt } from "fs";

import { open as Lt, rm as un, writeFile as Nt } from "fs/promises";

import { Transform as Ot } from "stream";

import { pipeline as Ft } from "stream/promises";

import { createHash as Zn } from "crypto";

function TPt() {
  if (Ct()) return !1;
  if (XYe()) return !1;
  return le();
}

function le() {
  return k("tengu_plugin_command_source_refresh", !0);
}

var bn = 3e4;

function XYe() {
  let e = xl(), n = Wme(GT());
  if (O() === "windows" ? oBs(e) : el(e)) return !0;
  let r = Ge().provenLocalRoots, s = r.get(n);
  if (s === void 0 || !HY(s, bn)) {
    if (GX(n, {
      allowLocalWsl: !0
    })) return r.delete(n), !0;
    r.set(n, Date.now());
  }
  if (Hm(Ee(), n)) return !1;
  return vn().some(h => Hm(n, h, {
    foldCase: !0
  }) || Hm(h, n, {
    foldCase: !0
  }));
}

function vn() {
  return D([ ke(), ...fc() ].flatMap(e => [ e, pr(e), cG(e) ].filter(n => n !== null)));
}

import { createHash as Ke } from "crypto";

import { lstat as je, mkdir as ce, open as Cn, readdir as q, readFile as Hn, readlink as ie, realpath as de, rename as Tn, stat as xn, symlink as Ve, writeFile as Ye } from "fs/promises";

import { homedir as Mn } from "os";

import { dirname as Xe, isAbsolute as se, join as B, relative as ue, resolve as Ie, sep as re } from "path";

var Rn = [ "local", "npm", "github", "git", "subdir", "archive", "command", "unknown" ];

function Yat(e) {
  let n = Math.random().toString(36).slice(2, 2 + xe).padEnd(1, "0");
  return `${Te}${e}_${Date.now()}_${n}`;
}

var Te = "temp_", xe = 6, E$e = "_x", Yuo = ".clone", N_r = new RegExp(`^${Te}(?:${Rn.join("|")})_(\\d{10,})_[a-z0-9]{1,${xe}}(?:${E$e}|\\${Yuo})?$`);

function Me(e, n) {
  return `${e}${Le}${n}`;
}

var Le = ".linking-", k_s = new RegExp(`\\${Le}(\\d+)$`);

import { spawn as An } from "child_process";

var Ne = 2e3;

function Fe(e, {cwd: n, env: r, timeoutMs: s, maxStdoutBytes: h, maxStderrBytes: y}) {
  if (lL()) return Promise.resolve({
    kind: "spawn-error",
    message: a$t,
    stdout: "",
    stderr: ""
  });
  return new Promise(w => {
    let S = "", P = "", b = 0, R = 0, C = !1, N = !1, I, G, H = An(e, [], {
      shell: !0,
      cwd: n,
      env: r,
      stdio: [ "ignore", "pipe", "pipe" ],
      detached: O() !== "windows",
      windowsHide: !0,
      ...Dl("plugin")
    }), be = bt(async () => {
      if (!C && H.pid !== void 0) await vv(H.pid, "SIGKILL");
    });
    function j(F) {
      if (C) return;
      if (C = !0, be(), clearTimeout(Re), G) clearTimeout(G);
      H.stdout?.removeAllListeners("data"), H.stderr?.removeAllListeners("data"), H.stdout?.destroy(), 
      H.stderr?.destroy(), w(F);
    }
    function ve(F) {
      if (I) return;
      I = F, H.stdout?.removeAllListeners("data"), H.stderr?.removeAllListeners("data"), 
      H.stdout?.pause(), H.stderr?.pause();
      let z = {
        kind: F,
        stdout: S,
        stderr: P
      }, ee = () => {
        if (C) return;
        if (N) {
          j(z);
          return;
        }
        let ne = () => j(z);
        if (H.once("exit", ne), G = setTimeout(ae => ae(), Ne, ne), typeof G === "object") G.unref();
      };
      if (H.pid === void 0) {
        j(z);
        return;
      }
      vv(H.pid, "SIGKILL").then(ee, ee);
    }
    let Re = setTimeout(F => F("timed-out"), s, ve);
    H.stdout?.setEncoding("utf8"), H.stderr?.setEncoding("utf8"), H.stdout?.on("data", F => {
      if (b += Buffer.byteLength(F), b > h) {
        ve("stdout-overflow");
        return;
      }
      S += F;
    }), H.stderr?.on("data", F => {
      if (R >= y) return;
      R += Buffer.byteLength(F), P += F;
    }), H.once("error", F => {
      j({
        kind: "spawn-error",
        message: F.message,
        stdout: S,
        stderr: P
      });
    });
    function Ae(F, z) {
      if (I) return;
      if (typeof F === "number") j({
        kind: "exited",
        exitCode: F,
        stdout: S,
        stderr: P
      }); else j({
        kind: "signaled",
        signal: z ?? "unknown",
        stdout: S,
        stderr: P
      });
    }
    H.once("exit", (F, z) => {
      if (N = !0, C || I) return;
      if (clearTimeout(Re), G = setTimeout((ee, ne, ae) => ee(ne, ae), Ne, Ae, F, z), 
      typeof G === "object") G.unref();
    }), H.once("close", (F, z) => {
      Ae(F, z);
    });
  });
}

var Ln = 60, De = 65536, Nn = 65536, $e = 500, Ue = 268435456, Be = 2e4, On = new Set(Kat);

async function In(e) {
  let n = (e.timeout ?? Ln) * 1e3, r = kt(e.command, 200);
  t(`Plugin command source: running \`${r}\` (timeout ${n}ms)`);
  let s = await Fe(e.command, {
    cwd: Mn(),
    env: gs(),
    timeoutMs: n,
    maxStdoutBytes: De,
    maxStderrBytes: Nn
  }), h = kt(s.stderr.trim(), $e), y = h ? ` (stderr: ${h})` : "";
  switch (s.kind) {
   case "exited":
    if (s.exitCode !== 0) throw new x(`Plugin source command \`${r}\` exited with code ${s.exitCode}` + (h ? `: ${h}` : " and no error output."), "plugin command source exited non-zero");
    break;

   case "timed-out":
    throw new x(`Plugin source command \`${r}\` did not finish within ${n / 1e3}s and was stopped.${y}`, "plugin command source timed out");

   case "stdout-overflow":
    throw new x(`Plugin source command \`${r}\` printed more than ${De / 1024} KB and was stopped; it must print a single absolute path.`, "plugin command source exceeded the stdout cap");

   case "signaled":
    throw new x(`Plugin source command \`${r}\` was killed by ${s.signal} before it finished.${y}`, "plugin command source killed by a signal");

   case "spawn-error":
    throw new x(`Plugin source command \`${r}\` could not be started: ` + kt(s.message, $e), "plugin command source failed to spawn");
  }
  let w = s.stdout.split(/\r?\n/).map(R => R.trim()).filter(R => R.length > 0);
  if (w.length === 0) throw new x(`Plugin source command \`${r}\` printed nothing; it must print the absolute path of the plugin directory.`, "plugin command source printed nothing");
  if (w.length > 1) throw new x(`Plugin source command \`${r}\` printed ${w.length} lines; it must print exactly one absolute path.`, "plugin command source printed multiple lines");
  let S = w[0];
  if (!se(S)) throw new x(`Plugin source command \`${r}\` printed \`${kt(S, 200)}\`, which is not an absolute path.`, "plugin command source printed a relative path");
  if (O() === "windows" && zw(S) || Mm(S)) throw new ld(`Plugin source command \`${r}\` printed \`${kt(S, 200)}\`, a network path (UNC or automount), which is not supported as a plugin directory.`, "plugin command source printed a network path");
  if (uMe(S)) throw new ld(`Plugin source command \`${r}\` printed \`${kt(S, 200)}\`, which is reached through a link onto a network location (or one that cannot be trusted); that is not supported as a plugin directory.`, "plugin command source printed a path through a suspect link");
  let P;
  try {
    P = await de(S);
  } catch (R) {
    throw new x(`Plugin source command \`${r}\` printed \`${kt(S, 200)}\`, but that path could not be resolved (${E(R) ?? "unknown error"}).`, "plugin command source path does not resolve");
  }
  if (Mm(P) || O() === "windows" && zw(P)) throw new ld(`Plugin source command \`${r}\` printed a path that resolves to a network location, which is not supported as a plugin directory.`, "plugin command source path resolves to a network path");
  let b;
  try {
    b = await q(P);
  } catch (R) {
    let C = E(R);
    throw new x(`Plugin source command \`${r}\` printed \`${kt(S, 200)}\`, ` + (C === "ENOTDIR" ? "which is not a directory." : `which could not be read as a directory (${C ?? "unknown error"}).`), "plugin command source path is not a readable directory");
  }
  if (!b.some(R => On.has(R))) throw new x(`Plugin source command \`${r}\` printed \`${kt(S, 200)}\`, but that directory has no plugin content (expected .claude-plugin/ or a commands/, skills/, agents/, hooks/, themes/, output-styles/, monitors/, workflows/, SKILL.md, .mcp.json, or .lsp.json at the top level). Nothing was installed.`, "plugin command source directory has no plugin content");
  return t(`Plugin command source: resolved plugin directory ${P}`), P;
}

async function qe(e, n, r) {
  let s = [], h = 0, y = 0;
  async function w(S) {
    let P = await q(S, {
      withFileTypes: !0
    });
    for (let b of P) {
      if (y++, y > Be) throw new x(`Plugin directory has more than ${Be} entries; refusing to install it as a plugin.`, "plugin command source directory has too many files");
      let R = B(S, b.name), C = await Eje(S, b);
      if (C.isDirectory) {
        if (S === e && b.name === ".git") continue;
        await w(R);
      } else if (C.isFile) {
        let N = C.size ?? (await je(R)).size;
        if (r?.set(R, N), h += N, h > Ue) throw new x(`Plugin directory is larger than ${Ue / 1048576} MB; refusing to install it as a plugin.`, "plugin command source directory too large");
        s.push(R);
      } else if (C.isSymbolicLink) n?.push(R);
    }
  }
  return await w(e), n?.sort(), s.sort();
}

async function Dn(e) {
  let n = [], r = new Map, s = await qe(e, n, r), h = Ke("sha256");
  for (let y of s) {
    let w = r.get(y) ?? 0;
    h.update(`f ${ue(e, y).split(re).join("/")}\0${w}\0`);
    let S = w;
    if (w > 0) {
      let P = await Cn(y, "r");
      try {
        for await (let b of P.createReadStream({
          start: 0,
          end: w - 1
        })) h.update(b), S -= b.length;
      } finally {
        await P.close();
      }
    }
    if (S > 0) h.update(Buffer.alloc(S));
  }
  for (let y of n) {
    let w = await ie(y);
    h.update(`l ${ue(e, y).split(re).join("/")}\0`), h.update(`${Buffer.byteLength(w)}\0${w}`);
  }
  return h.digest("hex");
}

var APt = 'This plugin source uses mode "link", which is not supported on Windows yet; the marketplace can use mode "copy" instead.';

function bN(e) {
  return e.mode === "link" ? `${e.command}${uZt}` : e.command;
}

function XJt(e) {
  return e.mode === "link" ? 'mode "link": its output directory is used in place (linked, not copied)' : 'mode "copy": its output directory is copied into the plugin cache';
}

class ld extends x {}

function $n(e, n) {
  if (n && n.kind !== "none" && n.command === bN(e)) return;
  let r = kt(e.command, Dmt) + (e.mode === "link" ? " [mode: link]" : ""), s = n?.pluginId !== void 0 ? kt(n.pluginId, 200) : void 0, h = s ?? "This plugin", y = s ?? "";
  if (n?.kind === "recorded" && n.command !== void 0) throw new ld(`${h}'s marketplace changed the command that installs it, or how its output is used (now \`${r}\`), since it was accepted, so it was not run. Review and accept the new command: ${Gg("plugin update", y, {
    tail: "in a terminal (add `--scope` for a project/local install)",
    fallback: "an explicit plugin update in a terminal reviews it"
  })}.`, "plugin command source command changed since consent");
  if (n?.kind === "recorded") throw new ld(`${h}'s marketplace entry now installs it by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it: ${Gg("plugin update", y, {
    tail: "in a terminal (add `--scope` for a project/local install)",
    fallback: "an explicit plugin update in a terminal reviews it"
  })}.`, "plugin command source never consented for an installed plugin");
  if (n?.kind === "shown") throw new ld(`${h}'s marketplace entry changed while it was being installed (it now declares \`${r}\`, not the command that was shown), so nothing was run. Re-run the install/update to review the current command.`, "plugin command source changed between display and run");
  throw new ld(`${h} is installed by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it from its /plugin details pane, or in a terminal: ${Gg("plugin install", y, {
    fallback: "an explicit plugin install reviews it"
  })}.`, "plugin command source without consent");
}

async function Un(e, n) {
  let r = (await q(e)).filter(y => !JJt(y)).sort(), s = await Je(e, r.map(y => ({
    name: y,
    path: B(e, y)
  })));
  await ce(n, {
    recursive: !0
  });
  for (let {name: y, target: w, isDirectory: S} of s) await Ve(w, B(n, y), S ? "dir" : "file");
  await Ye(B(n, _dt), JSON.stringify({
    target: e
  }), {
    flag: "wx"
  });
  let h = Ke("sha256");
  h.update(`${e}\0`);
  for (let {name: y, target: w} of s) h.update(`${Buffer.byteLength(y)}\0${y}`), h.update(`${Buffer.byteLength(w)}\0${w}`);
  return h.digest("hex");
}

async function Je(e, n) {
  let r = [];
  for (let {name: s, path: h} of n) {
    if (UYn(h, Xe(h))) throw new ld(`A top-level entry of the plugin directory (${kt(s, 100)}) points at a network location or through a link that cannot be trusted; refusing to link it.`, "plugin command source entry traverses a suspect link");
    let y, w;
    try {
      y = await de(h), w = (await xn(y)).isDirectory();
    } catch {
      throw new x(`A top-level entry of the plugin directory its command produced could not be resolved (${kt(s, 80)}); refusing to link it.`, "plugin command source link entry unresolvable");
    }
    let S = ue(e, y);
    if (S === "" || S === ".." || S.startsWith(`..${re}`) || se(S)) throw new ld(`A top-level entry of the plugin directory its command produced (${kt(s, 80)}) points outside that directory; refusing to link it.`, "plugin command source link escapes producer directory");
    r.push({
      name: s,
      target: y,
      isDirectory: w
    });
  }
  return r;
}

async function T_s(e, n) {
  let r = Ie(ke(), e), s = Ie(ke(), n), h = await pe(B(r, _dt)), y = Pwr().parse(JSON.parse(h)).target;
  if (l0r(y)) throw new ld("The link farm points at a producer reached through a link that cannot be trusted; refusing to relink it.", "plugin command source relink target traverses a suspect link");
  let w = await de(y);
  if (zw(w)) throw new ld("The link farm points at a producer that now resolves to a network location; refusing to relink it.", "plugin command source relink target resolves to a network path");
  let S = [];
  for (let C of await q(r, {
    withFileTypes: !0
  })) {
    if (JJt(C.name)) continue;
    if ((await ZXe(r, C))?.isSymbolicLink) S.push(C);
  }
  let P = [];
  for (let C of S) {
    let N;
    try {
      N = await ie(B(r, C.name));
    } catch (I) {
      if (W(I)) continue;
      throw new ld(`A link in the staged farm could not be read (${kt(l(I), 120)}); refusing to relink it.`, "plugin command source relink entry unreadable");
    }
    if (I$(N)) throw new ld("A link in the staged farm is not in canonical form; refusing to relink it.", "plugin command source relink entry not canonical");
    P.push(C);
  }
  let b = await Je(w, P.map(C => ({
    name: C.name,
    path: B(r, C.name)
  })));
  await ce(Xe(s), {
    recursive: !0
  });
  let R = Me(s, process.pid);
  await Oa(R), await ce(R);
  try {
    for (let {name: C, target: N, isDirectory: I} of b) await Ve(N, B(R, C), I ? "dir" : "file");
    await Ye(B(R, _dt), h, {
      flag: "wx"
    }), await Tn(R, s);
  } catch (C) {
    await Oa(R).catch(() => {});
    let N = E(C);
    if ((N === "ENOTEMPTY" || N === "EEXIST") && await $_r(s) === "live" && !await CPt(s, w)) return;
    throw C;
  }
}

async function Xuo(e, {keepGit: n}) {
  for (let r of await q(e)) if (JJt(r) && !(n && Sx(r) === ".git")) await Oa(B(e, r));
}

function JJt(e) {
  return mZt(e, Gn);
}

var Gn = new Set([ ...hOt, ".git" ]);

async function QJt(e, {unclassifiableIsFarm: n = !1} = {}) {
  let r = await $_r(e);
  return r === "live" || r === "unclassifiable" && n;
}

async function $_r(e) {
  try {
    Pwr().parse(JSON.parse(await pe(B(e, _dt))));
  } catch (r) {
    if (E(r) !== void 0) return n(r);
  }
  try {
    for (let r of await q(e, {
      withFileTypes: !0
    })) {
      if (JJt(r.name)) continue;
      try {
        let s = await Eje(e, r);
        if (s.isSymbolicLink && se(s.linkTarget ?? await ie(B(e, r.name)))) return "live";
      } catch (s) {
        if (E(s) === "ENOENT") continue;
        return n(s);
      }
    }
    return "not-live";
  } catch (r) {
    return n(r);
  }
  function n(r) {
    let s = E(r);
    return s === "ENOENT" || s === "ENOTDIR" ? "not-live" : "unclassifiable";
  }
}

var Bn = new Set([ ".ds_store", "thumbs.db", "desktop.ini", "icon\r" ]);

function Kn(e) {
  let n = Sx(e);
  return Bn.has(n) || n.startsWith("._");
}

function jn(e) {
  return hOt.has(e);
}

async function CPt(e, n) {
  let r = n.replace(/[\\/]+$/, "") + re;
  try {
    for (let s of await q(e, {
      withFileTypes: !0
    })) {
      if (jn(s.name)) continue;
      let h;
      try {
        let y = await Eje(e, s);
        if (y.isFile && (Kn(s.name) || mZt(s.name, hOt))) continue;
        if (!y.isSymbolicLink) return !0;
        h = y.linkTarget ?? await ie(B(e, s.name));
      } catch (y) {
        if (E(y) === "ENOENT") continue;
        return !0;
      }
      if (!se(h) || I$(h) || zw(h) || !h.startsWith(r)) return !0;
    }
    return !1;
  } catch (s) {
    let h = E(s);
    return h !== "ENOENT" && h !== "ENOTDIR";
  }
}

async function A_s(e) {
  try {
    return Pwr().parse(JSON.parse(await pe(B(e, _dt)))).target;
  } catch {
    return;
  }
}

var zn = 16384;

async function pe(e) {
  let n = await je(e);
  if (!n.isFile() || n.size > zn) throw new ld("The link-farm marker is not a small regular file; refusing to read it.", "plugin command source link marker not a small regular file");
  return Hn(e, "utf8");
}

function Aoe(e) {
  return typeof e === "object" && e.source === "command" ? e : void 0;
}

function y8(e) {
  return Aoe(e)?.mode === "link";
}

async function C_s(e, n, r, s) {
  if (EP()) throw new ld(L8, "plugin command source disabled by managed policy");
  if (e.mode === "link" && O() === "windows") throw new ld(APt, "plugin command source link mode unsupported on windows");
  return $n(e, s), so("plugin_command_install", async () => {
    let h = await In(e);
    if (Hm(h, ke(), {
      foldCase: !0
    })) throw new ld(`Plugin source command printed the working directory or one of its parents (${kt(h, 300)}); refusing to use it as a plugin.`, "plugin command source printed cwd or an ancestor");
    if (r6e(h), e.mode === "link") return {
      contentSha256: await Un(h, n),
      producerDirectory: h
    };
    return await qe(h), await r(h, n), await Xuo(n, {
      keepGit: !1
    }), {
      contentSha256: await Dn(n),
      producerDirectory: h
    };
  });
}

import { homedir as Wn } from "os";

var Vn = 1e4, Xn = 1e6;

function qn(e) {
  if (Jm(e)) return !0;
  return (e === void 0 || e === Wn()) && ux() && TEe();
}

async function dNn(e) {
  if (e.isRepoResidentConfig && !qn(e.repoResidentOrigin)) return {
    ok: !1,
    reason: "missing_trust"
  };
  let n = await ft(e.command, [], {
    shell: !0,
    timeout: Vn,
    maxBuffer: Xn,
    cwd: e.cwd,
    env: Jn(e),
    extendEnv: !1
  });
  if (n.code !== 0 || !n.stdout) return {
    ok: !1,
    reason: "exec_failed"
  };
  let r;
  try {
    r = Y(n.stdout.trim());
  } catch {
    return {
      ok: !1,
      reason: "parse_failed"
    };
  }
  if (!L(r)) return {
    ok: !1,
    reason: "non_object"
  };
  let s = {};
  for (let [h, y] of Object.entries(r)) {
    if (typeof y !== "string") return {
      ok: !1,
      reason: "non_string_value"
    };
    s[h] = y;
  }
  return {
    ok: !0,
    headers: s
  };
}

function Jn(e) {
  let n = {
    ...gs()
  };
  if (!e.scrubCredentialEnv) return {
    ...n,
    ...e.env
  };
  let r = [];
  for (let w of Ove()) {
    let S = process.env[w] ?? n[w];
    if (S !== void 0 && S !== "") r.push(S);
    delete n[w];
  }
  let s = process.env, h = {};
  for (let w of new Set([ ...Object.keys(n), ...Object.keys(s) ])) h[w] = s[w] ?? n[w];
  for (let w of Tfe(h).lostCredential) {
    let S = h[w];
    if (S !== void 0 && S !== "") r.push(S);
  }
  Object.assign(n, Tfe(n).respelled), r.sort((w, S) => S.length - w.length);
  let y = {};
  for (let [w, S] of Object.entries(e.env ?? {})) y[w] = r.reduce((P, b) => P.split(b).join("REDACTED"), S);
  return {
    ...n,
    ...y
  };
}

var BRe = 268435456, RPt = 5242880, Qn = 12e4, Juo = "Claude-Code-Plugin-Manager";

async function R_s(e, n = {}) {
  if (!WIr(e)) throw new x(`${jIr}: ${S_(e)}`, "plugin archive URL policy rejected");
  let r = S_(e);
  t(`Downloading plugin archive from ${r}`);
  let s = n.headers ?? {}, h = {
    ...s,
    "User-Agent": Juo
  }, y = _j(e) ? NV.get : Qa.get, w = performance.now(), S;
  try {
    let b = await y(e, {
      timeout: Qn,
      responseType: "arraybuffer",
      maxRedirects: 5,
      maxContentLength: BRe,
      headers: h,
      beforeRedirect: et(e, Quo(s))
    });
    _O("plugin_archive", e, "success", performance.now() - w), S = Buffer.from(b.data);
  } catch (b) {
    _O("plugin_archive", e, "failure", performance.now() - w, $V(b));
    let R = tpo(b);
    if (R) throw R;
    throw new x(nt(b, e, r), "plugin archive download failed");
  }
  let P = Zn("sha256").update(S).digest("hex");
  if (n.sha256 && n.sha256.toLowerCase() !== P) throw new x(`Plugin archive integrity check failed for ${r}: expected sha256 ${n.sha256.toLowerCase()}, got ${P}. The archive was not installed. Verify the sha256 in the marketplace entry, or that the URL serves the intended file.`, "plugin archive sha256 mismatch");
  return {
    data: S,
    contentSha256: P
  };
}

function Quo(e) {
  return Object.keys(e ?? {}).filter(n => n.toLowerCase() !== "user-agent");
}

function Qe(e, n, r = "plugin archive") {
  let s = new Set(n.map(h => h.toLowerCase()));
  return h => {
    if (s.size === 0 || !h.headers) return;
    let y = k1e(h);
    if (y && Uie(e, y)) return;
    let w = 0;
    for (let S of Object.keys(h.headers)) if (s.has(S.toLowerCase())) delete h.headers[S], 
    w++;
    if (w > 0) t(`Fetch of ${r} redirected to a different origin; dropped inherited marketplace headers`);
  };
}

function et(e, n) {
  let r = Qe(e, n);
  return s => {
    let h = k1e(s);
    if (!WIr(h)) throw new x("Plugin archive redirected to a disallowed URL and was refused \u2014 " + `every hop must satisfy the archive URL policy (${jIr.replace(/^Archive URLs must /, "")}): ` + (h ? S_(h) : "(unparseable redirect target)"), "plugin archive redirect policy rejected");
    r(s);
  };
}

function x_s(e, n) {
  let r = Qe(e, n, "marketplace catalog");
  return s => {
    let h = k1e(s);
    if (!(h !== "" && (Uie(e, h) || h.toLowerCase().startsWith("https:") && !gee(mt(h))))) throw new x("Marketplace catalog redirected to a disallowed URL and was refused \u2014 " + "a server-chosen cross-origin redirect must use https:// and must not point at a loopback, link-local, or cloud-metadata host (only a hop that stays on the origin you started from is exempt): " + (h ? S_(h) : "(unparseable redirect target)"), "marketplace catalog redirect policy rejected");
    r(s);
  };
}

function nt(e, n, r) {
  let s = h => h.replaceAll(n, () => r);
  if (_c(e)) {
    if (e.code === "ECONNREFUSED" || e.code === "ENOTFOUND") return `Could not connect to ${r}. Check your network connection and that the archive URL is correct.\n\nTechnical details: ${s(e.message)}`;
    if (e.code === "ETIMEDOUT" || e.code === "ECONNABORTED") return `Timed out downloading plugin archive from ${r}. The server may be slow or unreachable.\n\nTechnical details: ${s(e.message)}`;
    if (e.response) {
      let h = e.response.status;
      return `HTTP ${h} while downloading plugin archive from ${r}.${h === 401 || h === 403 ? " The server rejected the request \u2014 if it requires authentication, add `headers` to the marketplace source (they are forwarded to plugin archives on the same origin) or configure your proxy." : ""}\n\nTechnical details: ${s(e.message)}`;
    }
  }
  return `Failed to download plugin archive from ${r}: ${s(l(e))}`;
}

function jRe(e) {
  return typeof e.headersHelper === "string" && e.headersHelper !== "";
}

var cNn = {
  unshown: "entry_helper_unshown",
  command: "entry_helper_changed",
  archive_url: "entry_archive_url_changed"
};

function ZJt(e, n) {
  let {entry: r} = e;
  return jRe(r) && r.headersHelper !== void 0 && (!e.requireInlinedManifest || r.strict === !1) ? {
    command: r.headersHelper,
    archiveUrl: n
  } : null;
}

function uNn(e, n) {
  if (e === void 0 || e === null) return n === null ? null : "unshown";
  if (n === null) return null;
  if (e.command !== n.command) return "command";
  if (Ze(n.archiveUrl) !== Ze(e.archiveUrl)) return "archive_url";
  return null;
}

function Ze(e) {
  let n = Jln(e);
  return n === null ? e : Lue(n);
}

function eQt(e, n = "lockdown") {
  let r = ze(e);
  if (n === "remote_policy_unconsented") return `"${r}" fetches its archive through a headersHelper command that was not run: ${mUn}. The plugin was not installed or updated.`;
  return `"${r}" fetches its archive through a marketplace-declared headersHelper command, and your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`;
}

var tt = {
  entry_helper_unshown: "plugin entry helper consent mismatch at install: entry_helper_unshown",
  entry_helper_changed: "plugin entry helper consent mismatch at install: entry_helper_changed",
  entry_archive_url_changed: "plugin entry helper consent mismatch at install: entry_archive_url_changed",
  entry_helper_deferred: "plugin headers helper deferred to explicit install",
  entry_helper_disabled_by_policy: "plugin entry helper disabled by managed policy",
  entry_helper_unconfirmed: "plugin entry helper unconfirmed at install (nothing was announced)",
  entry_helper_not_inlined: "plugin entry headersHelper requires strict:false (catalog authoring error)",
  entry_helper_remote_policy_unconsented: "plugin entry helper declared by remote managed settings not yet verified and approved for the session"
};

function rt(e) {
  return Zuo[e] === "sad";
}

var Zuo = {
  entry_helper_unshown: "sad",
  entry_helper_changed: "sad",
  entry_archive_url_changed: "sad",
  entry_helper_deferred: "sad",
  entry_helper_disabled_by_policy: "sad",
  entry_helper_unconfirmed: "sad",
  entry_helper_remote_policy_unconsented: "sad",
  entry_helper_not_inlined: "bad"
};

function JYe(e) {
  if (e instanceof E7) return {
    code: e.failureCode,
    kind: rt(e.failureCode) ? "sad" : "bad"
  };
  return {
    code: "command_source_refused",
    kind: "sad"
  };
}

class E7 extends ld {
  failureCode;
  constructor(e, n) {
    super(e, tt[n]);
    this.failureCode = n;
  }
}

function pNn(e, n, r) {
  let s = ze(n), h = r === "update" ? "Review the command now shown, then update again." : "Reopen its details in /plugin to review it, then install again.";
  if (e === "unshown") return r === "update" ? `This update would run a headersHelper command for "${s}" that was not shown on this pane. ${h}` : `This install would run a headersHelper command for "${s}" that was not shown to you first. Retry the same install to review the command before it runs.`;
  return e === "command" ? `The headersHelper command for "${s}" changed since it was shown. ${h}` : `The archive URL for "${s}" changed since its headersHelper command was shown. ${h}`;
}

function k$e(e) {
  let n = e.trustedSettingsEntryAuth !== void 0 && e.trustedSettingsEntryAuth.origin !== "settings" && e.marketplaceSource?.source !== "settings" ? void 0 : e.trustedSettingsEntryAuth;
  if (n !== void 0) {
    let r = n.origin === "settings";
    if (!pt(n.archiveUrl, e.archiveUrl)) return {
      entry: {},
      operatorAuthored: r,
      requireInlinedManifest: !1
    };
    if (n.headersHelper !== void 0 && n.operatorTier === "policySettings" && !Edt()) throw new E7(`This plugin's headersHelper was not run: ${mUn}.`, "entry_helper_remote_policy_unconsented");
    return {
      entry: {
        headers: n.headers,
        headersHelper: n.origin === "addDir" ? void 0 : n.headersHelper
      },
      operatorAuthored: r,
      requireInlinedManifest: !1
    };
  }
  if (e.marketplaceSource !== void 0 && e.marketplaceSource.source !== "settings") return {
    entry: e.entry,
    operatorAuthored: !1,
    requireInlinedManifest: !0
  };
  return {
    entry: {
      headers: e.entry.headers
    },
    operatorAuthored: !1,
    requireInlinedManifest: !0
  };
}

async function fNn(e, n) {
  if (e?.source !== "url") return {};
  let r = n.trustedDeclaration, s = `marketplace ${ze(n.marketplaceName ?? S_(e.url))}`, h = (S, P) => mNn(S, `${s} (${P})`, {
    operatorAuthored: r?.operatorAuthored === !0
  }), y = h(r ? {
    ...r.headers
  } : {
    ...e.headers
  }, r ? r.operatorAuthored ? "operator declaration" : "repo-tier declaration" : "state copy");
  if (r?.headersHelper === void 0) return y;
  if (!/^https:\/\//i.test(e.url)) return t(`${s}: headersHelper not run \u2014 marketplace URL is not https`, {
    level: "warn"
  }), y;
  if (r.authoredBy === "policySettings" && !Edt()) throw f("plugin_headers_helper", "remote_policy_unconsented"), 
  new ld(`${s}: headersHelper not run \u2014 ${mUn}. The marketplace was not fetched.`, "marketplace headersHelper from remote managed settings not yet verified and approved for the session");
  if (EP() && r.authoredBy !== "policySettings") throw new ld(`${s}: your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly), and this marketplace's headersHelper is not declared in managed settings. The marketplace was not fetched and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`, "marketplace headersHelper disabled by managed policy");
  if (!le()) return t(`${s}: headersHelper not run \u2014 disabled by the plugin command kill switch`, {
    level: "warn"
  }), y;
  let w = await it(r.headersHelper, e.url, n.marketplaceName, r.operatorAuthored);
  return {
    ...y,
    ...h(w, "helper output")
  };
}

var ot = 6e4;

async function it(e, n, r, s) {
  let h = `${e}\0${n}\0${r ?? ""}\0${s ? "operator" : "repo"}`, y = Date.now(), {marketplaceHelperMemo: w} = Ge(), S = w.get(h);
  if (S && S.expiresAt > y) return S.headers;
  let P = st(e, n, r, s);
  w.set(h, {
    expiresAt: y + ot,
    headers: P
  });
  try {
    return await P;
  } catch (b) {
    throw w.delete(h), b;
  }
}

async function st(e, n, r, s) {
  let h = await dNn({
    command: e,
    scrubCredentialEnv: !s,
    isRepoResidentConfig: !1,
    cwd: Ee(),
    env: {
      CLAUDE_CODE_MARKETPLACE_URL: n,
      ...r !== void 0 && {
        CLAUDE_CODE_MARKETPLACE_NAME: r
      }
    }
  });
  if (!h.ok) throw m("plugin_headers_helper", h.reason), new x(`marketplace headersHelper failed (${h.reason})`, "marketplace headers helper failed");
  return g("plugin_headers_helper"), h.headers;
}

async function at(e, n) {
  let r = y => mNn(y, `plugin ${ze(n.pluginName)}`, {
    operatorAuthored: n.operatorAuthored === !0
  }), s = r(e.headers ?? {});
  if (!jRe(e) || e.headersHelper === void 0) return s;
  en(e, {
    ...n,
    disabledByPolicy: yxe(n.marketplaceSource, n.marketplaceName)
  });
  let h = await dNn({
    command: e.headersHelper,
    scrubCredentialEnv: !n.operatorAuthored,
    cwd: Ee(),
    isRepoResidentConfig: !1,
    env: {
      CLAUDE_CODE_PLUGIN_NAME: n.pluginName,
      CLAUDE_CODE_PLUGIN_ARCHIVE_URL: n.archiveUrl
    }
  });
  if (!h.ok) throw m("plugin_headers_helper", h.reason), new x(`plugin headersHelper for "${ge(n.pluginName)}" failed (${h.reason})`, "plugin headers helper failed");
  return g("plugin_headers_helper"), {
    ...s,
    ...r(h.headers)
  };
}

var ct = new Set([ "host", "cookie", "forwarded", "x-real-ip", "x-client-ip", "true-client-ip", "client-ip", "cf-connecting-ip", "fastly-client-ip", "x-originating-ip", "x-remote-ip", "x-remote-addr", "x-cluster-client-ip", "connection", "upgrade", "transfer-encoding", "content-length", "te", "trailer", "expect", "via" ]), ut = [ "x-forwarded-", "x-original-", "proxy-" ], dt = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

function epo(e) {
  let n = e.toLowerCase().replaceAll("_", "-");
  return ct.has(n) || ut.some(r => n.startsWith(r));
}

function mNn(e, n, {operatorAuthored: r = !1} = {}) {
  let s = {};
  for (let [h, y] of Object.entries(e)) {
    if (!dt.test(h) || /[\r\n\0]/.test(y)) {
      t(`Dropping header "${ze(h)}" for ${n}: malformed name or value`, {
        level: "warn"
      });
      continue;
    }
    if (!r && epo(h)) {
      t(`Dropping header "${ze(h)}" for ${n}: request-routing/identity headers are not accepted from non-operator sources`, {
        level: "warn"
      });
      continue;
    }
    s[h] = y;
  }
  return s;
}

function ge(e) {
  return ze(e);
}

function en(e, n) {
  if (n.disabledByPolicy !== null) throw new E7(eQt(n.pluginName, n.disabledByPolicy), n.disabledByPolicy === "remote_policy_unconsented" ? "entry_helper_remote_policy_unconsented" : "entry_helper_disabled_by_policy");
  if (n.requireInlinedManifest !== !1 && e.strict !== !1) throw new E7(`Plugin "${ge(n.pluginName)}" declares a headersHelper but is not strict:false \u2014 an entry with headersHelper must inline its manifest so its capabilities can be reviewed before the command runs.`, "entry_helper_not_inlined");
  if (!n.runEntryHelper) throw new E7(`Plugin "${ge(n.pluginName)}" fetches its archive through a headersHelper, ` + "which only runs when you install or update it from its own details view \u2014 open this plugin in /plugin (or run `claude plugin install`/`update`), where the command is shown first.", "entry_helper_deferred");
}

async function xPt(e) {
  if (typeof e.pluginSource !== "object" || e.pluginSource.source !== "archive") return;
  let n = e.pluginSource.url, {entry: r, operatorAuthored: s, requireInlinedManifest: h} = k$e({
    entry: e.entry,
    archiveUrl: n,
    marketplaceSource: e.marketplaceSource,
    trustedSettingsEntryAuth: e.trustedSettingsEntryAuth
  }), y = e.marketplaceSource?.source === "url" ? e.marketplaceSource.url : void 0, w = yxe(e.marketplaceSource, e.marketplaceName);
  if (jRe(r)) en(r, {
    pluginName: e.pluginName,
    runEntryHelper: e.runEntryHelper,
    requireInlinedManifest: h,
    operatorAuthored: s,
    disabledByPolicy: w
  });
  let S = y !== void 0 && Uie(y, n) ? await fNn(e.marketplaceSource, {
    marketplaceName: e.marketplaceName,
    trustedDeclaration: e.trustedMarketplaceAuth
  }) : {}, P = await at(r, {
    pluginName: e.pluginName,
    archiveUrl: n,
    runEntryHelper: e.runEntryHelper,
    requireInlinedManifest: h,
    operatorAuthored: s,
    marketplaceSource: e.marketplaceSource,
    marketplaceName: e.marketplaceName
  }), b = {
    ...S,
    ...P
  };
  if (Object.keys(b).length === 0) return;
  return {
    url: n,
    headers: b
  };
}

function WRe(e, n) {
  let r = qb(e);
  return r ? n[r]?.source : void 0;
}

function qb(e) {
  let n = e.split("@");
  return n.length === 2 && n[1] ? n[1] : void 0;
}

function pt(e, n) {
  return Lue(e) === Lue(n);
}

function mt(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "";
  }
}

function tpo(e) {
  let n = e;
  for (let r = 0; r < 5 && n instanceof Error; r++) {
    if (n instanceof x) return n;
    n = n.cause;
  }
  return;
}

function x_r(e) {
  let n = (s, h) => {
    let y = u_(s, h);
    return y.settings === null && LIe(y.errors).length > 0;
  }, r = [ "userSettings", "localSettings", "flagSettings" ].some(s => {
    let h = hn(s);
    if (h === void 0) return !1;
    switch (s) {
     case "flagSettings":
      return n(h, Ww() ?? ete());

     case "localSettings":
      {
        let y = Ty();
        return n(h) || y !== void 0 && y !== h && n(y);
      }

     case "userSettings":
      return n(h);
    }
  });
  return gt(e) || cee().length > 0 && Ek() !== "helper" || r || txo(e.settingKey) || tte() && Mve() || AC(e.policyKey) === "unregistered";
}

function P_r(e) {
  if (!QVn(e.settingKey)) return !1;
  if (!e.isTierInPlay()) return !1;
  if (Oe() !== "firstParty") return !1;
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  if (Fn()) return !1;
  if ($a().source !== "claude.ai") return !1;
  if (Ct()) return !1;
  if (!KS(e.policyKey)) return !1;
  return Q(e);
}

function YYe() {
  return $a().source === "claude.ai" && !Fn();
}

function Q(e) {
  return k(e.flagName, !1) === !0;
}

function I_r(e) {
  return !zvr() && iNn(e);
}

function iNn(e) {
  let n = AC(e.policyKey);
  return n === "cache_miss" || n === "route_missing";
}

function gt(e) {
  let n = AC(e.policyKey);
  return !QVn(e.settingKey) || n === "org_denied" || n === "latched";
}

function O_r(e) {
  let n = [ ...Nie(), fe("userSettings") ], r = AC(e.policyKey);
  return n.some(s => s?.[e.settingKey] === !1) || r === "org_denied" || r === "latched";
}

import { join as vt, resolve as Rt, sep as Z } from "path";

import { sep as Et } from "path";

function R_r(e, n) {
  if (e.type !== n.type) return !1;
  let r = (s, h) => (s.if ?? "") === (h.if ?? "");
  switch (e.type) {
   case "command":
    {
      let s = v1();
      return n.type === "command" && e.command === n.command && _(e.args ?? null) === _(n.args ?? null) && (e.shell ?? s) === (n.shell ?? s) && r(e, n);
    }

   case "prompt":
    return n.type === "prompt" && e.prompt === n.prompt && r(e, n);

   case "agent":
    return n.type === "agent" && e.prompt === n.prompt && r(e, n);

   case "http":
    return n.type === "http" && e.url === n.url && r(e, n);

   case "mcp_tool":
    return n.type === "mcp_tool" && e.server === n.server && e.tool === n.tool && _(e.input ?? {}) === _(n.input ?? {}) && r(e, n);

   case "script":
    return n.type === "script" && (e.script ?? null) === (n.script ?? null) && (e.file ?? null) === (n.file ?? null) && r(e, n);

   case "function":
    return !1;
  }
}

function ht(e) {
  return e.map(n => ({
    matcher: n.matcher,
    skillRoot: n.skillRoot,
    ...n.personal === !0 && {
      personal: !0
    },
    ...n.checkout === !0 && {
      checkout: !0
    },
    hooks: n.hooks.map(r => r.hook).filter(r => r.type !== "function")
  }));
}

function yt(e) {
  return e.map(n => ({
    matcher: n.matcher,
    hooks: n.hooks.map(r => r.hook).filter(r => r.type === "function")
  })).filter(n => n.hooks.length > 0);
}

class nn {
  sessions=new Map;
  add(e, n, r, s, h) {
    this.addEntry(e, n, r, s, h?.onHookSuccess, h?.skillRoot, h?.personal === !0, h?.checkout === !0);
  }
  addFunctionHook(e, n, r, s, h, y) {
    let w = y?.id || `function-hook-${Date.now()}-${Math.random()}`, S = {
      type: "function",
      id: w,
      timeout: y?.timeout || 5e3,
      callback: s,
      errorMessage: h
    };
    return this.addEntry(e, n, r, S, void 0, void 0, !1, !1), w;
  }
  addEntry(e, n, r, s, h, y, w, S) {
    let P = this.sessions.get(e) ?? {
      hooks: {}
    }, b = P.hooks[n] || [], R = b.findIndex(N => N.matcher === r && N.skillRoot === y && N.personal === !0 === w && N.checkout === !0 === S), C;
    if (R >= 0) {
      C = [ ...b ];
      let N = C[R], I = s.type === "function" && s.id ? N.hooks.findIndex(H => H.hook.type === "function" && H.hook.id === s.id) : -1, G = I >= 0 ? N.hooks.with(I, {
        hook: s,
        onHookSuccess: h
      }) : [ ...N.hooks, {
        hook: s,
        onHookSuccess: h
      } ];
      C[R] = {
        ...N,
        hooks: G
      };
    } else C = [ ...b, {
      matcher: r,
      skillRoot: y,
      ...w && {
        personal: !0
      },
      ...S && {
        checkout: !0
      },
      hooks: [ {
        hook: s,
        onHookSuccess: h
      } ]
    } ];
    this.sessions.set(e, {
      hooks: {
        ...P.hooks,
        [n]: C
      }
    }), wt(this.sessions), $X(), t(`Added session hook for event ${n} in session ${e}`);
  }
  remove(e, n, r) {
    let s = this.sessions.get(e);
    if (s) {
      let y = (s.hooks[n] || []).map(S => {
        let P = S.hooks.filter(b => !R_r(b.hook, r));
        return P.length > 0 ? {
          ...S,
          hooks: P
        } : null;
      }).filter(S => S !== null), w = y.length > 0 ? {
        ...s.hooks,
        [n]: y
      } : {
        ...s.hooks
      };
      if (y.length === 0) delete w[n];
      this.sessions.set(e, {
        ...s,
        hooks: w
      }), $X();
    }
    t(`Removed session hook for event ${n} in session ${e}`);
  }
  clear(e) {
    this.sessions.delete(e), $X(), t(`Cleared all session hooks for session ${e}`);
  }
  get(e, n) {
    let r = new Map, s = this.sessions.get(e);
    if (!s) return r;
    for (let h of n ? [ n ] : up) {
      let y = s.hooks[h];
      if (y) r.set(h, ht(y));
    }
    return r;
  }
  getFunctionHooks(e, n) {
    let r = new Map, s = this.sessions.get(e);
    if (!s) return r;
    for (let h of n ? [ n ] : up) {
      let y = s.hooks[h];
      if (y) {
        let w = yt(y);
        if (w.length > 0) r.set(h, w);
      }
    }
    return r;
  }
  getEntry(e, n, r, s) {
    let h = this.sessions.get(e)?.hooks[n];
    if (!h) return;
    for (let y of h) if (y.matcher === r || r === "") {
      let w = y.hooks.find(S => R_r(S.hook, s));
      if (w) return w;
    }
    return;
  }
  has(e, n) {
    return this.sessions.get(e)?.hooks[n] !== void 0;
  }
}

var _t = new K(() => new Set);

function he() {
  return ps(_t);
}

function wt(e) {
  Fnn(he(), e);
}

function oNn() {
  let e = [];
  for (let n of M3e(he())) for (let r of n.values()) for (let s of up) for (let h of r.hooks[s] ?? []) for (let {hook: y} of h.hooks) if (y.type !== "function") e.push({
    event: s,
    hook: y,
    skillRoot: h.skillRoot
  });
  return e;
}

function tn(e) {
  if (e.size === 0) return 0;
  let n = 0;
  for (let r of M3e(he())) for (let [s, h] of r) {
    let y = {}, w = n;
    for (let S of up) {
      let P = [];
      for (let b of h.hooks[S] ?? []) if (b.skillRoot !== void 0 && e.has(b.skillRoot)) n += b.hooks.length; else P.push(b);
      if (P.length > 0) y[S] = P;
    }
    if (n > w) r.set(s, {
      ...h,
      hooks: y
    });
  }
  if (n > 0) $X();
  return n;
}

function koe() {
  return new nn;
}

var Pt = {
  sync_off: e => `${e} sync is off (a setting or the organization's policy).`,
  account_change: () => "A sign-out, or a sign-in not verified as the same account.",
  skill_gone: () => "Those skills are gone from this account's list or from the disk."
};

function sNn(e) {
  let n = e + Et, r = new Set;
  for (let {skillRoot: s} of oNn()) if (s?.startsWith(n)) r.add(s);
  return r;
}

function GJt(e, n, r) {
  let s = tn(n);
  if (s === 0) return;
  t(`Hooks of ${e.hooksOf} removed: ${s}. ${Pt[r](e.sync)}`), X("info", e.event, {
    count: s,
    reason: r
  });
}

var rn = {
  sync: "Plugins",
  hooksOf: "synced plugins' skills",
  event: "plugins_sync_skill_hooks_removed"
}, on = new K(() => new Set);

function sn() {
  try {
    return Rt(vt(Ee(), w1));
  } catch (e) {
    t(`The synced plugins' folder could not be made absolute (${E(e) ?? l(e)})`, {
      level: "error"
    });
    return;
  }
}

function m_s() {
  let e = sn();
  if (e !== void 0) ps(on).add(e);
}

function ye() {
  let e = new Set(ps(on)), n = sn();
  if (n !== void 0) e.add(n);
  return e;
}

function Guo(e) {
  return e !== void 0 && Hi(e) === Mi;
}

function Vuo(e, n) {
  if (!Guo(e) || n === void 0) return [];
  return [ ...ye() ].filter(r => n.startsWith(r + Z));
}

async function Kuo() {
  try {
    return await gH() ?? tvs();
  } catch (e) {
    return d(e), null;
  }
}

function an(e, n) {
  let [r = ""] = n.slice(e.length + 1).split(Z);
  return Vm(l6e(r));
}

function g_s(e, n, r) {
  try {
    let s = VLo(), h = n.map(w => w + Z + e).find(w => r.startsWith(w + Z));
    if (s === null || s.bucket !== e || h === void 0) return;
    let y = an(h, r);
    return Array.from(s.dirsById.values()).some(w => w.has(y)) ? void 0 : "not_listed";
  } catch (s) {
    return X("warn", "plugins_sync_last_list_unreadable"), d(s), "list_unreadable";
  }
}

function h_s(e, n, r) {
  if (e === null) return "no_account";
  return n.some(s => r.startsWith(s + Z + e + Z)) ? void 0 : "other_account";
}

var _e = {
  sync_off: "plugins sync is turned off in the person's own settings, in an admin's, or by the organization's policy",
  other_account: "its plugin was synced for another account",
  no_account: "no account could be resolved for its synced plugin",
  not_listed: "the account's latest complete list of plugins does not hold its plugin's folder",
  list_unreadable: "this session's record of the account's plugins could not be read",
  no_folder: "its plugin's folder could not be found under the synced plugins' folder"
};

function Gat(e) {
  return _e[e];
}

function y_s(e, n, r) {
  let s = [ ...r.hooks ? [ "its hooks" ] : [], ...r.grant ? [ "the tools its allowed-tools grants" ] : [] ].join(" and without ");
  t(`Plugin skill '${e}' runs without ${s}: ${_e[n]}.`, {
    level: "warn"
  }), X("info", "plugins_sync_skill_hooks_refused", {
    reason: n
  });
}

function __s(e, n) {
  t(`Plugin command '${e}' was not run: ${_e[n]}.`, {
    level: "warn"
  }), X("info", "plugins_sync_command_refused", {
    reason: n
  });
}

function M_r(e) {
  let n = new Set;
  for (let r of ye()) for (let s of sNn(r)) n.add(s);
  GJt(rn, n, e);
}

function b_s({bucket: e, delistedDirs: n, listedDirs: r}) {
  try {
    let s = new Set;
    for (let h of ye()) {
      let y = h + Z + e;
      for (let w of sNn(y)) {
        let S = an(y, w);
        if (n.has(S) && !r.has(S)) s.add(w);
      }
    }
    return GJt(rn, s, "skill_gone"), !0;
  } catch (s) {
    return X("warn", "plugins_sync_skill_hooks_removal_failed"), d(s), !1;
  }
}

var V = {
  settingKey: "syncClaudeAiPlugins",
  policyKey: "allow_account_plugins_sync",
  flagName: "tengu_claudeai_plugins_sync_enabled",
  isTierInPlay: () => Zbe()
};

function aNn() {
  Toe();
  let e = At() && !rte();
  return qLo(e), e;
}

function Toe() {
  let e = x_r(V);
  if (YLo(e), e && D_r()) M_r("sync_off");
}

function v7() {
  return Toe(), rte();
}

function VJt() {
  return D_r();
}

function S_s() {
  return !VJt() && (v7() || iNn(V));
}

function w_s() {
  return Fme().length > 0 || KJt();
}

function KJt() {
  return lNn() || H_r();
}

function H_r() {
  return !lNn() && Q(V) && YYe();
}

function quo() {
  return lNn() || YYe();
}

function vPt() {
  return Q(V) && YYe() && Zbe() && !v7();
}

function v_s() {
  return Q(V);
}

function lNn() {
  return a.CLAUDE_CODE_SYNC_PLUGINS || a.CLAUDE_CODE_SYNC_SESSION_REFS;
}

function Vat() {
  return I_r(V);
}

function Zbe() {
  return !Sr("plugins") && dn("userSettings");
}

function At() {
  return P_r(V);
}

function D_r() {
  return O_r(V);
}

function F_r(e, n) {
  if (!n.ok) return n.reason === "no-auth" ? {
    success: !1,
    error: n.detail,
    kind: "no_auth"
  } : {
    success: !1,
    error: n.reason,
    kind: "gated"
  };
  let r = gNn().safeParse(n.data);
  if (r.success) {
    let s = r.data.error.type ?? "error_envelope_no_type";
    return X("warn", e === "skills" ? "skills_sync_list_error" : "plugins_sync_list_error", {
      serverError: s,
      status: n.status
    }), {
      success: !1,
      error: s,
      kind: "server_error",
      status: n.status
    };
  }
  return X("warn", e === "skills" ? "skills_sync_list_malformed" : "plugins_sync_list_malformed"), 
  {
    success: !1,
    error: `malformed list-${e} response`,
    kind: "malformed"
  };
}

function U_r(e) {
  let {kind: n, message: r} = ci(e), s = xae(E(e));
  return {
    success: !1,
    error: r,
    kind: n,
    ...s !== void 0 && {
      errno: s
    }
  };
}

function _8(e) {
  return e.kind === "server_error" && e.status === 404 && e.error === "not_found_error";
}

function QYe(e) {
  return e.status === 403 || e.kind === "no_scope" || _8(e);
}

function ZYe(e) {
  return {
    kind: c(e.kind),
    ...e.status !== void 0 && {
      status: e.status
    },
    ...e.errno !== void 0 && {
      errno: e.errno
    }
  };
}

var gNn = p(() => St({
  error: St({
    type: me().optional(),
    message: me().nullish().catch(void 0)
  })
}));

function hNn(e) {
  try {
    let n = gNn().safeParse(Y(e.toString("utf8", 0, 2048)));
    if (n.success) return n.data.error.type ?? "error_envelope_no_type";
  } catch {}
  return "non_json_body";
}

var Di = p(() => u({
  type: A("command"),
  command: o(),
  args: T(o()).nullish(),
  if: o().nullish(),
  shell: o().nullish(),
  timeout: v().nullish(),
  on_failure: U([ "continue", "block" ]).nullish().catch("block"),
  status_message: o().nullish(),
  once: M().nullish(),
  async: M().nullish(),
  async_rewake: M().nullish(),
  rewake_message: o().nullish(),
  rewake_summary: o().nullish()
})), $i = p(() => T(u({
  event: o(),
  matchers: T(u({
    matcher: o().nullish(),
    hooks: T(oe())
  }))
})));

function ln(e, {components: n = !1} = {}) {
  let r = Uwr(e.installation_preference);
  return {
    pluginId: e.id,
    name: e.name,
    description: e.description ?? "",
    version: e.version ?? null,
    updatedAt: e.updated_at ?? null,
    ...typeof e.marketplace_name === "string" && e.marketplace_name && {
      marketplaceName: e.marketplace_name
    },
    ...r && {
      installationPreference: r
    },
    ...typeof e.presents_as === "string" && e.presents_as && {
      presentsAs: e.presents_as
    },
    ...n && Array.isArray(e.components) && {
      components: e.components.flatMap(s => {
        let h = xt().safeParse(s);
        if (!h.success) return [];
        let {type: y, name: w, description: S} = h.data;
        return [ {
          type: y,
          name: w,
          ...S != null && {
            description: S
          }
        } ];
      })
    }
  };
}

var xt = p(() => u({
  type: o(),
  name: o(),
  description: o().nullish()
}));

function cn(e) {
  return e.enabled !== !1;
}

function yNn(e) {
  return e.map(n => _([ n.pluginId, n.name, n.version, n.updatedAt ])).toSorted().join(`\n`);
}

var It = 1e4, Pe = 6e4, mn = 500, pn = 100, Se = 20, we = BRe;

function Dt() {
  return a.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? Pe;
}

var $t = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";

async function Ut(e) {
  let n = await e();
  if (n.ok) return n;
  return await J(mn), e();
}

async function e5e(e = {}) {
  let n = await Bt(`${$t}${e.componentDetails === !0 ? "&include_component_details=true" : ""}`, e);
  return n.success ? {
    success: !0,
    plugins: n.rows.map(r => ln(r, {
      components: e.componentDetails === !0
    })),
    ...n.degraded && {
      degraded: n.degraded
    }
  } : n;
}

async function Bt(e, n) {
  if (await FRe(n.signal, n.credentials) === "skip_no_scope") return {
    success: !1,
    error: "claude.ai login lacks the user:plugins scope in this session",
    kind: "no_scope"
  };
  let s = await fn(e, n);
  if (s.success || s.status === 403) return s;
  await J(mn);
  let h = await fn(e, n);
  return !h.success && _8(h) && !_8(s) ? {
    success: !1,
    error: h.error,
    kind: h.kind
  } : h;
}

async function fn(e, n) {
  let r = [], s = !1;
  try {
    for (let h = 0; h < Se; h++) {
      let y = h * pn, w = await Gt.get(`${e}&limit=${pn}&offset=${y}`, {
        auth: "teleport-org",
        isBackground: n.isBackground,
        timeout: It,
        credentials: n.credentials
      });
      if (!w.ok || !Array.isArray(w.data?.plugins)) {
        let S = F_r("plugins", w);
        return h > 0 && _8(S) ? {
          success: !1,
          error: S.error,
          kind: S.kind
        } : S;
      }
      if (r.push(...w.data.plugins.filter(cn)), s ||= w.data.degraded === !0, w.data.has_more !== !0) return {
        success: !0,
        rows: r,
        ...s && {
          degraded: s
        }
      };
    }
    return X("warn", "plugins_sync_list_page_cap", {
      pages: Se,
      collected: r.length
    }), {
      success: !1,
      error: `list-plugins page cap (${Se}) exceeded`,
      kind: "page_cap"
    };
  } catch (h) {
    return U_r(h);
  }
}

function npo(e, n) {
  let r = [];
  if (n) r.push(`version=${encodeURIComponent(n)}`);
  if (a.CLAUDE_CODE_CCR_SURFACE === "tag") r.push("included_default_marketplaces=claude-tag-plugins");
  let s = r.length > 0 ? `?${r.join("&")}` : "";
  return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${s}`;
}

async function B_r(e, n, r, s = {}) {
  return Ut(() => Kt(e, n, r, s));
}

async function Kt(e, n, r, s) {
  let h = npo(e, r);
  if (a.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return jt(h, n, s);
  let y = 0, w = !1;
  try {
    let C = function() {
      w = !0, R.destroy(Error("plugin download stream stalled"));
    }, S = await Gt.get(h, {
      auth: "teleport-org",
      isBackground: s.isBackground,
      timeout: Pe,
      responseType: "stream",
      credentials: s.credentials
    });
    if (!S.ok || !S.data) {
      let H = S.ok ? "empty_body" : S.reason;
      return X("warn", "plugins_sync_download_not_ok", {
        reason: H
      }), {
        ok: !1,
        reason: H
      };
    }
    let P = Dt(), b, R = new Ot({
      transform(H, be, j) {
        if (clearTimeout(b), b = setTimeout(C, P), y += H.length, y > we) j(Error("plugin zip exceeds download byte cap")); else j(null, H);
      },
      flush(H) {
        clearTimeout(b), H();
      }
    });
    b = setTimeout(C, P);
    try {
      await Ft(S.data, R, Mt(n));
    } finally {
      clearTimeout(b);
    }
    let N = Buffer.alloc(2048), I = await Lt(n, "r"), G;
    try {
      G = (await I.read(N, 0, N.length, 0)).bytesRead;
    } finally {
      await I.close();
    }
    if (G < 2 || N[0] !== 80 || N[1] !== 75) {
      await un(n, {
        force: !0
      });
      let H = G === 0 ? "empty_body" : hNn(N.subarray(0, G));
      return X("warn", "plugins_sync_download_not_zip", {
        serverError: H,
        bodyLen: y
      }), {
        ok: !1,
        reason: H
      };
    }
    return {
      ok: !0
    };
  } catch (S) {
    await un(n, {
      force: !0
    }).catch(() => {});
    let P = S?.response?.data;
    if (P !== null && typeof P === "object" && "destroy" in P && typeof P.destroy === "function") P.destroy();
    let b = S !== null && typeof S === "object" && "code" in S ? S.code : void 0, R = w ? "timeout" : y > we ? "too_large" : b === "ECONNRESET" || b === "EPIPE" || b === "ETIMEDOUT" ? "network" : ci(S).kind;
    return X("warn", "plugins_sync_download_exception", {
      kind: R
    }), {
      ok: !1,
      reason: R
    };
  }
}

async function jt(e, n, r) {
  try {
    let s = await Gt.get(e, {
      auth: "teleport-org",
      isBackground: r.isBackground,
      timeout: Pe,
      responseType: "arraybuffer",
      maxContentLength: we,
      credentials: r.credentials
    });
    if (!s.ok || !s.data) {
      let y = s.ok ? "empty_body" : s.reason;
      return X("warn", "plugins_sync_download_not_ok", {
        reason: y
      }), {
        ok: !1,
        reason: y
      };
    }
    let h = Buffer.from(s.data);
    if (h.length < 2 || h[0] !== 80 || h[1] !== 75) {
      let y = h.length === 0 ? "empty_body" : hNn(h);
      return X("warn", "plugins_sync_download_not_zip", {
        serverError: y,
        bodyLen: h.length
      }), {
        ok: !1,
        reason: y
      };
    }
    return await Nt(n, h), {
      ok: !0
    };
  } catch (s) {
    let {kind: h} = ci(s);
    return X("warn", "plugins_sync_download_exception", {
      kind: h
    }), {
      ok: !1,
      reason: h
    };
  }
}

function T$e(e) {
  let n = e.sessionRefsGate;
  if (n.ccrSessionID() === void 0) {
    let r = a.CLAUDE_CODE_SESSION_ID;
    if (r && or(r) !== r) n.latchCcrSessionID(r);
  }
  return n.ccrSessionID();
}

function zt(e) {
  return T$e(e) !== void 0;
}

function iH(e) {
  let n = e.sessionRefsGate.syncEnabled();
  if (n !== void 0) return n;
  return e.sessionRefsGate.latchSyncEnabled(!!a.CLAUDE_CODE_SYNC_SESSION_REFS && zt(e));
}

var Wt = p(() => {
  let e = me().nullish().transform(s => s ?? ""), n = St({
    id: e,
    name: e,
    description: e,
    version: e,
    directory: e,
    marketplace_name: me().nullish().catch(void 0),
    is_official: Vo().nullish().catch(void 0)
  }).transform(({marketplace_name: s, is_official: h, ...y}) => ({
    ...y,
    ...s && {
      marketplaceName: s
    },
    ...h === !0 && {
      isOfficial: !0
    }
  })), r = lr(n).nullish().transform(s => s ?? []);
  return St({
    skills: r,
    plugins: r
  }).strict();
}), Vt = 3e4, Yt = 500;

class yn {
  inflight=null;
  featureEventReported=new Set;
  startupResponse=null;
  fetch() {
    if (!this.inflight) {
      let e = Xt().finally(() => {
        if (this.inflight === e) this.inflight = null;
      });
      this.inflight = e;
    }
    return this.inflight;
  }
  discardInflight() {
    this.inflight = null, this.startupResponse = null;
  }
  async listEntries(e, {startup: n}) {
    let r = e === "skills" ? "sync_session_refs_skills" : "sync_session_refs_plugins", s = !this.featureEventReported.has(e);
    this.featureEventReported.add(e);
    let h = await (n ? this.startupResponse ??= this.fetch() : this.fetch());
    if (!h.ok) {
      if (i(e === "skills" ? "tengu_skills_sync_manifest_failed" : "tengu_plugins_sync_manifest_failed", {
        unavailable: h.reason === "unavailable"
      }), s) m(r, h.reason);
      return {
        success: !1,
        error: `manifest ${h.reason}`,
        kind: "manifest"
      };
    }
    if (s) g(r);
    return {
      success: !0,
      entries: h[e]
    };
  }
}

var A$e = new lt(() => new yn);

async function Xt() {
  let e = await gn();
  if (e.ok || e.reason === "no_auth" || e.reason === "gated") return e;
  return await J(Yt), gn();
}

async function gn() {
  try {
    let e = await Gt.get("/worker/skill-manifest", {
      host: "ccr-session",
      auth: "session-jwt",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: Vt,
      validateStatus: () => !0
    });
    if (!e.ok) {
      if (e.reason === "no-auth") return X("warn", "session_refs_manifest_no_auth"), {
        ok: !1,
        reason: "no_auth"
      };
      return X("warn", "session_refs_manifest_gated", {
        reason: e.reason
      }), {
        ok: !1,
        reason: "gated"
      };
    }
    if (e.status === 503) return X("warn", "session_refs_manifest_unavailable"), {
      ok: !1,
      reason: "unavailable"
    };
    if (e.status >= 300) return X("warn", "session_refs_manifest_http_error", {
      status: e.status
    }), {
      ok: !1,
      reason: "http_error"
    };
    let n = Wt().safeParse(e.data);
    if (!n.success) return X("warn", "session_refs_manifest_malformed"), {
      ok: !1,
      reason: "malformed"
    };
    return {
      ok: !0,
      skills: n.data.skills.filter(r => r.id),
      plugins: n.data.plugins.filter(r => r.id)
    };
  } catch (e) {
    let {kind: n} = ci(e);
    return X("warn", "session_refs_manifest_exception", {
      kind: n
    }), {
      ok: !1,
      reason: "transport"
    };
  }
}

function u_s(e) {
  return {
    skillId: e.id,
    name: e.name,
    description: e.description ?? "",
    source: e.source ?? "custom",
    updatedAt: e.updated_at ?? null,
    ...typeof e.backing_plugin_id === "string" && Nue(e.backing_plugin_id) && {
      backingPluginId: e.backing_plugin_id
    },
    ...e.user_invocable != null && {
      userInvocable: e.user_invocable === !0
    },
    ...e.disable_model_invocation != null && {
      disableModelInvocation: e.disable_model_invocation !== !1
    }
  };
}

function p_s(e) {
  if (typeof e.creator_type !== "string") return;
  if (e.creator_type === "anthropic") return "anthropic";
  if (e.is_shared === !0) return "shared";
  if (e.partition_by === "organization") return "org";
  let n = e.partition_by === "account";
  if (typeof e.backing_plugin_id === "string") return n ? "own" : "other";
  return n || e.partition_by == null ? "own" : "other";
}

function f_s(e) {
  return e.enabled !== !1;
}

var v$e = "collision-loser";

export { R_r, oNn, koe, sNn, GJt, x_r, P_r, YYe, I_r, iNn, O_r, u_s, p_s, f_s, v$e, m_s, Guo, Vuo, Kuo, g_s, h_s, Gat, y_s, __s, M_r, b_s, aNn, Toe, v7, VJt, S_s, w_s, KJt, H_r, quo, vPt, v_s, lNn, Vat, Zbe, D_r, FRe, qJt, mf, URe, EPt, kPt, Kat, qat, YJt, L_r, E_s, TPt, XYe, Yat, E$e, Yuo, N_r, k_s, APt, bN, XJt, ld, T_s, Xuo, JJt, QJt, $_r, CPt, A_s, Aoe, y8, C_s, dNn, BRe, RPt, Juo, R_s, Quo, x_s, jRe, cNn, ZJt, uNn, eQt, Zuo, JYe, E7, pNn, k$e, fNn, epo, mNn, xPt, WRe, qb, tpo, F_r, U_r, _8, QYe, ZYe, gNn, hNn, yNn, e5e, npo, B_r, T$e, iH, A$e };
