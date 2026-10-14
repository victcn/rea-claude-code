// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { z } from "./chunk-bmq0vae0.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { x, Je, j, l, E } from "./chunk-b0z4bv3v.js";

import { Lt } from "./chunk-9yajep3y.js";

import { _, Y, dD, t } from "./chunk-kawq2919.js";

import { Tr } from "./chunk-a16yb89m.js";

import { I } from "./chunk-5wbhf1bk.js";

import { i, Vs } from "./chunk-hedpgw9m.js";

import { Wr, Bt, Wa } from "./chunk-3ykz5st8.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { eEe, ft } from "./chunk-zscnwzv2.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { bdt, EP, L8, b1 } from "./chunk-67jt18z1.js";

import { ko, tX, Bn, Ad, F9e, EE } from "./chunk-q6wab2jw.js";

import { kt, Us, ze } from "./chunk-r2h53bm2.js";

import { Di } from "./chunk-xywp7esx.js";

import { Mo } from "./chunk-j90se18b.js";

import { hn, SE } from "./chunk-dd98x6x7.js";

import { Gg, l9, kn, FUe, JT } from "./chunk-8drhysk2.js";

import { XYe, APt, bN, XJt, ld, Aoe, JYe } from "./chunk-2xhrgh8h.js";

import { S1, xOt, LY, QV } from "./chunk-t70vnbgq.js";

import { op } from "./chunk-ajd6by9m.js";

import { xxt } from "./chunk-sqb9meyh.js";

import { UN } from "./chunk-2m40bc7t.js";

import { Xx, tR, Sts, wts, kts, Vcr, Hot, Dis, wIn, Not, gd, qy, Gl, ly, oV, Nm, Fu, mpr, CS, ni, Qn } from "./chunk-84yp45y8.js";

import { te } from "./chunk-48xcyvwy.js";

import { tH, Aus, cbe, fit, n8, T4e, sm, mit, UCe, BCe } from "./chunk-bv9f914r.js";

import { pE } from "./chunk-3btm71fm.js";

import { tp } from "./chunk-sg5gpfs4.js";

import { D9t, Qre, URt, lY } from "./chunk-81rtbneg.js";

import { R9t, x_, DT, Oce, Jre } from "./chunk-af7jrchc.js";

import { byt, qEe, T1o, A1o, w$r, DQe, Nae, LQe, C1o, NQe, vyt, l3n, d3n } from "./chunk-kvxc0w8v.js";

import { RGe } from "./chunk-2vshys8w.js";

import { ige } from "./chunk-s20e0d27.js";

import { pZe, eGe } from "./chunk-1t2t5aqn.js";

import { j2e } from "./chunk-abbgyr9n.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { createHash as q, randomUUID as we } from "crypto";

import { readFile as B, stat as Ce } from "fs/promises";

import { join as H } from "path";

function Z(e) {
  let n = e.manifest.mcpServers, r = (typeof n === "string" ? [ n ] : Array.isArray(n) ? n : []).filter(f => typeof f === "string" && tH(f)), p = r.filter(f => Aus(f));
  return {
    local: p,
    remoteCount: r.length - p.length
  };
}

async function Q(e, n, r) {
  let p = await Promise.all(n.map(async m => {
    try {
      let u = await T4e(m, e.path, e.repository, void 0, void 0, !0, r);
      return {
        spec: m,
        result: u
      };
    } catch (u) {
      return t(`post-install bundle read failed for ${m}: ${l(u)}`, {
        level: "warn"
      }), {
        spec: m,
        result: void 0
      };
    }
  })), f = new Map, o = [];
  for (let {spec: m, result: u} of p) if (!u) o.push(m); else if ("status" in u) f.set(u.manifest.name, {
    serverName: u.manifest.name,
    schema: u.configSchema,
    existingConfig: u.existingConfig
  });
  return {
    bundles: [ ...f.values() ],
    unreadable: o
  };
}

function M(e) {
  let n = e.indexOf("=");
  if (n <= 0) throw new x(`--config expects KEY=VALUE, got "${e}". Use --config key=value (repeatable).`, "--config pair has no key");
  return {
    key: e.slice(0, n),
    raw: e.slice(n + 1)
  };
}

function V(e, n, r, p) {
  let f = [], o = new Map;
  for (let m of e) {
    let {key: u, raw: g} = M(m);
    if (n && Object.hasOwn(n, u)) {
      f.push(m);
      continue;
    }
    let s = r.flatMap(({serverName: y, schema: v}) => {
      let C = [], k = `${y}.`;
      if (u.startsWith(k) && Object.hasOwn(v, u.slice(k.length))) C.push({
        serverName: y,
        field: u.slice(k.length),
        bare: !1
      });
      if (Object.hasOwn(v, u)) C.push({
        serverName: y,
        field: u,
        bare: !0
      });
      return C;
    }), [h, ...S] = s;
    if (h && S.length === 0) {
      if (h.bare && p.unreadable.length + p.remoteCount > 0) throw new x(`--config key "${u}" must name its server, because a bundled MCP server whose keys are unknown may declare it too; use ${kt(`${h.serverName}.${h.field}`)}.` + L(p), "--config bare key with an unread bundled server");
      let y = o.get(h.serverName) ?? [];
      y.push(`${h.field}=${g}`), o.set(h.serverName, y);
      continue;
    }
    if (h) throw new x(`--config key "${u}" is declared by more than one bundled MCP server; use ${s.map(y => kt(`${y.serverName}.${y.field}`)).join(" or ")}.`, "--config key is ambiguous between bundled servers");
    let w = [ ...Object.keys(n ?? {}), ...r.flatMap(({serverName: y, schema: v}) => Object.keys(v).map(C => kt(`${y}.${C}`))) ];
    throw new x(`--config key "${u}" isn't declared in this plugin's userConfig` + (r.length > 0 ? " or by its bundled MCP servers." : ".") + (w.length > 0 ? ` Known keys: ${w.join(", ")}.` : "") + L(p), "--config key is not declared");
  }
  return {
    pluginPairs: f,
    bundlePairs: o
  };
}

function L({unreadable: e, remoteCount: n}) {
  let r = [];
  if (e.length > 0) r.push(`the bundled ${e.map(f => ze(f)).join(", ")} could not be read, so its keys are unknown \u2014 re-run with --debug-file <path> to log why`);
  if (n > 0) r.push(`${n} bundled ${I(n, "server is", "servers are")} fetched from a URL at session start and can only be configured in Claude Code (/plugin \u2192 Installed \u2192 Configure)`);
  let p = r.join("; ");
  return p ? ` (${p[0].toUpperCase()}${p.slice(1)}.)` : "";
}

function ee(e, n) {
  let r = n8(e.existingConfig, e.schema);
  if (r.valid) return;
  let p = kt(e.serverName), f = Object.entries(e.schema).filter(([m, u]) => {
    let g = ko(e.existingConfig, m);
    return u.required === !0 && (g === void 0 || g === "");
  }).map(([m]) => kt(`${p}.${m}`)), o = f.length > 0 ? `set ${f.join(", ")} with --config KEY=VALUE` : `${r.errors.map(m => kt(m)).join("; ")} \u2014 fix it with --config ${p}.KEY=VALUE`;
  return `MCP server "${ze(e.serverName)}" needs configuration before it can start: ${o}, or in Claude Code run /plugin, select "${ze(n)}" in the Installed tab, and choose Configure.`;
}

import { basename as ye } from "path";

function Wcn(e, n) {
  let r = P0r(n);
  return r === null ? e : `${e}\n${te.warning} ${r}`;
}

function P0r(e) {
  try {
    if (e === void 0 || e === "managed") return null;
    let n = JT(e), r = hn(n);
    if (r === void 0 || n === "userSettings" && ye(r) === EE.cowork) return null;
    if (Hot(n) || n !== "userSettings" && Vcr(r)) return null;
    let p = SE(n).filter(u => u.file === r && u.severity !== "warning"), [f] = p;
    if (f === void 0) return null;
    let o = p.length - 1, m = f.path !== "" ? `its "${ze(f.path, 80)}" ${o > 0 ? `and ${o} other ${I(o, "value")} are` : "is"} not valid` : f.errorClass === "unreadable" ? "it could not be read" : "it is not a JSON object";
    return `${Us(r)} does not load (${m}), so Claude Code ignores the whole file, including anything this command wrote there. Fix the file, then run this command again if its change is missing. If a newer Claude Code wrote the file, update Claude Code instead.`;
  } catch (n) {
    return t(`settings file check after a plugin command skipped: ${l(n)}`, {
      level: "warn"
    }), null;
  }
}

class mte extends x {
  result;
  pluginCommandErrorCategory;
  constructor(e, n = {}) {
    super(e, "plugin operation returned a failure result");
    if (this.name = "PluginOperationFailedError", this.result = n, n.failureCode === "invalid_plugin_id" || n.failureCode === "plugin_folder_held" || n.failureCode === "install_records_unreadable" || n.failureCode === "directory_identity_changed" || n.failureCode === "directory_binding_unreadable" || n.failureCode === "directory_loaded") this.pluginCommandErrorCategory = "validation";
  }
}

function oe(e) {
  let n = e.kind === "command_source" ? [ e.kind, e.pluginId, e.command, e.mode, e.catalogRevision ] : [ e.kind, e.pluginId, e.command, e.archiveUrl, e.catalogRevision ];
  return q("sha256").update(_(n), "utf8").digest("hex");
}

function I0r(e) {
  return {
    ...e,
    sha256: oe(e)
  };
}

function W(e, n) {
  return n === void 0 ? e : {
    ...e,
    acceptCommandMatched: K(n, e)
  };
}

async function ae(e, n, r) {
  return {
    kind: "entry_helper",
    pluginId: n,
    command: e.command,
    archiveUrl: F9e(e).destination,
    catalogRevision: await se(n, r)
  };
}

async function se(e, n) {
  let r = `unreadable:${we()}`;
  if (z() && n !== void 0) return r;
  let {marketplace: p} = kn(e), f = p === void 0 ? void 0 : qy(await Gl(n), p);
  if (f === void 0) return r;
  if (f.source.source === "claudeai") return r;
  let o = f.installLocation;
  try {
    if (f.source.source === "github" || f.source.source === "git") {
      if (await Ce(H(o, ".git")).then(() => !0, () => !1)) {
        let u = eEe(o, {}), g = await ft(Lt(), [ ...u.inCheckoutArgs, "rev-parse", "HEAD" ], {
          cwd: o,
          env: u.env,
          stdin: "ignore"
        });
        return g.code === 0 ? `git:${g.stdout.trim()}` : r;
      }
      if (ly(o) === void 0) {
        let u = (await B(H(o, bdt), "utf8")).trim();
        return /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(u) ? `gcs:${u}` : r;
      }
    }
    return f.source.source === "settings" ? `settings:${Se([ await ne(o), A(f.source) ])}` : `sha256:${await ne(o)}`;
  } catch {
    return r;
  }
}

async function ne(e) {
  let n = o => [ "ENOENT", "ENOTDIR" ].includes(E(o) ?? ""), r, p = !0;
  try {
    r = await B(H(e, ".claude-plugin", "marketplace.json"), "utf8");
  } catch (o) {
    if (!n(o)) throw o;
    r = await B(e, "utf8"), p = !1;
  }
  let f = p ? await B(H(e, "package.json"), "utf8").catch(o => {
    if (n(o)) return null;
    throw o;
  }) : null;
  return q("sha256").update(_([ A(Y(Mo(r))), f === null ? null : A(Y(Mo(f))) ]), "utf8").digest("hex");
}

function Se(e) {
  return q("sha256").update(_(e), "utf8").digest("hex");
}

function A(e) {
  if (Array.isArray(e)) return [ "[", ...e.map(A) ];
  if (e !== null && typeof e === "object") return [ "{", ...Object.keys(e).sort().map(n => [ n, A(e[n]) ]) ];
  return e;
}

function K(e, n) {
  return e !== void 0 && e.trim().toLowerCase() === oe(n);
}

async function Kme(e) {
  let n = e.failureCode !== void 0 && be.has(e.failureCode) ? e : {
    ...e,
    shownCommand: void 0
  };
  await op(dD(_({
    ...n,
    nonce: J.value
  })) + `\n`);
}

var J = Ue({
  value: void 0
}, e => {
  e.value = void 0;
});

function Q$o() {
  return J.value;
}

function Z$o() {
  J.value = a.CLAUDE_CODE_RESULT_NONCE || void 0, a.unset("CLAUDE_CODE_RESULT_NONCE");
}

var be = new Set([ "command_source_refused", "command_source_declined", "entry_helper_unconfirmed", "entry_helper_declined" ]);

function ie(e, n) {
  if (e instanceof mte) return e.result.failureCode ?? "op_failed";
  if (e instanceof ld && n === "update") {
    let r = e.telemetryMessage;
    if (r.startsWith(D9t)) return r.slice(D9t.length);
  }
  return O0r(e);
}

function O0r(e) {
  if (e instanceof ld) return JYe(e).code;
  if (e instanceof Xx) return `claudeai_${e.code}`;
  return `error_${le(lY(e))}`;
}

function le(e) {
  return e.replaceAll("-", "_");
}

var _e = {
  invalid_plugin_id: "validation",
  plugin_folder_held: "validation",
  marketplace_policy_blocked: "policy",
  plugin_policy_blocked: "policy",
  dependency_policy_blocked: "policy",
  directory_unavailable: "network",
  directory_off: "validation",
  directory_not_in_session: "validation",
  installed_from_other_marketplace: "validation",
  dependency_pinned_version_unsatisfied: "validation",
  directory_listing_not_installable: "validation",
  directory_identity_changed: "validation",
  directory_binding_unreadable: "validation",
  replace_unavailable: "validation",
  replace_needs_full_id: "validation",
  replace_needs_fresh_listing: "network",
  install_records_unreadable: "validation",
  not_installed: "validation",
  not_installed_at_scope: "validation",
  already_in_goal_state: "validation",
  settings_still_on: "validation"
}, ke = {
  install: "claude plugin install failed with an unclassified error",
  uninstall: "claude plugin uninstall failed with an unclassified error",
  enable: "claude plugin enable failed with an unclassified error",
  disable: "claude plugin disable failed with an unclassified error",
  "disable-all": "claude plugin disable --all failed with an unclassified error",
  update: "claude plugin update failed with an unclassified error",
  prune: "claude plugin prune failed with an unclassified error"
};

function G(e, n) {
  return n.length === 0 ? e : [ e.trimEnd(), ...n ].join(`\n`);
}

async function pWe(e, n, r, p, f, o, m = []) {
  let u = e instanceof mte ? e.result.failureCode : void 0, g = lY(e), s = g === "unknown" && u !== void 0 ? _e[u] ?? g : g, h = n === "disable-all" ? "disable" : n === "prune" ? void 0 : n;
  if (f && h) {
    let C = e instanceof mte ? e.result : {};
    await Kme({
      command: h,
      outcome: "failed",
      ...n === "disable-all" ? {
        all: !0
      } : {
        plugin: r
      },
      pluginId: C.pluginId ?? f.pluginId ?? o,
      scope: f.scope,
      message: Ad(G(l(e), m)),
      failureCode: ie(e, n),
      alreadyInGoalState: C.alreadyInGoalState,
      installedScope: C.installedScope,
      reverseDependents: C.reverseDependents,
      dependencies: C.dependencies,
      disableFirst: C.disableFirst,
      governingScope: C.governingScope,
      shownCommand: f.shownCommand && I0r(f.shownCommand)
    });
  }
  if (e instanceof ld && (n === "install" || n === "update")) {
    if (console.error(Ad(G(l(e), m))), n === "install") {
      let {code: C, kind: k} = JYe(e);
      if (k === "bad") await Bt("cli_plugin_install", C); else await Wa("cli_plugin_install", C);
    } else if (n === "update") await Wa("cli_plugin_update", ie(e, "update"));
    await UN(), process.exit(1);
  }
  let S = e instanceof Xx ? `claudeai_${e.code}` : void 0;
  if (s === "unknown" && !(e instanceof mte) && S === void 0) d(Je(j(e), ke[n])); else t(`Plugin command "${n}" failed: ${l(e)}`, {
    level: "error"
  });
  let w = r ? `${n} plugin "${r}"` : n === "disable-all" ? "disable all plugins" : `${n} plugins`;
  console.error(Ad(G(`${te.cross} Failed to ${w}: ${l(e)}`, m)));
  let y = S ?? (u !== void 0 && (g === "unknown" || u === "not_installed") ? u : le(s));
  switch (n) {
   case "install":
    await Bt("cli_plugin_install", y);
    break;

   case "uninstall":
    await Bt("cli_plugin_uninstall", y);
    break;

   case "update":
    await Bt("cli_plugin_update", y);
    break;

   case "enable":
    await Bt("cli_plugin_enable", "cli_plugin_enable_failed");
    break;

   default:
    break;
  }
  let v = r ? await ige(o ?? r, tp(), p) : {};
  await Vs("tengu_plugin_command_failed", {
    command: c(n),
    error_category: c(s),
    ...{
      failure_code: pe(u)
    },
    ...v,
    ...o !== void 0 ? {
      aliased_id: !0
    } : {}
  }), await UN(), process.exit(1);
}

function re(e, n, r = "") {
  let p = {};
  for (let m of e) {
    let {key: u, raw: g} = M(m), s = kt(`${r}${u}`), h = (g.split(/\r\n|\r|\n/, 1)[0] ?? "").trim(), S = Object.hasOwn(n, u) ? n[u] : void 0;
    if (!S) {
      let w = Object.keys(n).map(y => kt(`${r}${y}`));
      throw Error(`--config key "${s}" isn't declared in this plugin's userConfig.` + (w.length > 0 ? ` Known keys: ${w.join(", ")}.` : ""));
    }
    if (h === "") throw Error(`--config ${s}: value is empty. Omit the flag to leave "${s}" unset.`);
    if (S.type === "number") {
      let w = Number(h);
      if (Number.isNaN(w)) throw Error(`--config ${s}: "${h}" is not a number`);
      p[u] = w;
    } else if (S.type === "boolean") {
      let w = j2e(h);
      if (w === void 0) throw Error(`--config ${s}: "${h}" is not a boolean (use true/false, 1/0, yes/no, on/off)`);
      p[u] = w;
    } else p[u] = h;
  }
  let f = pE(n, (m, u) => Object.hasOwn(p, u)), o = n8(p, f);
  if (!o.valid) throw Error(`--config validation failed: ${o.errors.map(m => kt(m)).join("; ")}`);
  return p;
}

async function ve(e, n, r) {
  gd(r);
  let {enabled: p, disabled: f} = await CS(r), o = mit([ ...p, ...f ], e), m = n ?? [], u = m.length > 0;
  if (!o) {
    if (u) throw Error(`--config was given but plugin "${e}" failed to load after install \u2014 run \`claude plugin list\` to see why.`);
    return "";
  }
  let g = o.manifest.userConfig, s = g && Object.keys(g).length > 0 ? g : void 0, h = m.map(M).some(({key: P}) => !(s && Object.hasOwn(s, P))), {local: S, remoteCount: w} = Z(o), {bundles: y, unreadable: v} = S.length > 0 && (o.enabled || h) ? await Q(o, S, r) : {
    bundles: [],
    unreadable: []
  }, C = {
    unreadable: v,
    remoteCount: w
  };
  if (u) {
    if (!s && y.length === 0) throw Error(`--config was given but plugin "${e}" declares no userConfig options` + (S.length > v.length ? " and its bundled MCP servers declare no user_config." : ".") + L(C));
    let {pluginPairs: P, bundlePairs: T} = V(m, s, y, C), U = s && P.length > 0 ? re(P, s) : void 0, he = y.flatMap(N => {
      let F = T.get(N.serverName);
      return F ? [ {
        bundle: N,
        values: re(F, N.schema, `${N.serverName}.`)
      } ] : [];
    });
    if (s && U) await UCe(sm(o), U, s, r);
    for (let {bundle: N, values: F} of he) await fit(o.repository, N.serverName, F, N.schema, r), 
    N.existingConfig = await cbe(o.repository, N.serverName) ?? {};
  }
  let k = [];
  if (s) {
    let P = Object.keys(await BCe(o));
    if (P.length > 0) {
      let T = P.filter(U => s[U]?.required === !0);
      k.push(`${P.length} userConfig ${I(P.length, "option")} not yet set` + (T.length > 0 ? ` (${T.length} required)` : "") + ` \u2014 run /plugin configure ${e} in Claude Code, or pass --config KEY=VALUE.`);
    }
  }
  if (o.enabled) for (let P of y) {
    let T = ee(P, o.name);
    if (T) k.push(T);
  }
  return k.join(`\n`);
}

async function de(e, n, {yes: r = !1, acceptedCommand: p, acceptCommand: f, onShown: o, storageV5: m} = {}) {
  if (typeof n.source !== "object" || n.source.source !== "command") return;
  if (EP()) {
    Tr(`${L8}\n`);
    return;
  }
  if (n.source.mode === "link" && O() === "windows") {
    Tr(`${APt}\n`);
    return;
  }
  let u = n.source.command, g = bN(n.source);
  if (p === g && !XYe()) return;
  let s = {
    kind: "command_source",
    pluginId: e,
    command: u,
    mode: n.source.mode === "link" ? "link" : "copy",
    catalogRevision: await se(e, m)
  };
  o?.({
    ...W(s, f),
    ...p !== void 0 && {
      previousAcceptance: p !== g ? "changed" : "unreliable"
    }
  });
  let {name: h, marketplace: S} = kn(e), w = kt(h ?? "", 200), y = kt(S ?? "", 200), v = `"${w}" is installed by running a command from marketplace "${y}" on this machine` + (p === void 0 ? "" : p !== g ? " \u2014 and that command (or how its output is used) CHANGED since you accepted it" : " \u2014 your earlier acceptance is recorded where it cannot be relied on (a plugins root inside a workspace, on a network location, or one that could not be resolved), so please confirm it again") + `:\n  ${u}\n  (${XJt(n.source)})\n`;
  Tr(v);
  let C = await X({
    yes: r,
    acceptCommand: f,
    shown: s,
    disclosure: v
  });
  return C === "accepted" ? {
    kind: "accepted",
    grantKey: g
  } : C === "declined" ? {
    kind: "declined"
  } : void 0;
}

async function X({yes: e = !1, acceptCommand: n, shown: r, disclosure: p = ""}) {
  let f = process.stdout.isTTY && process.stdin.isTTY;
  if (e || r !== void 0 && K(n, r)) {
    if (!xxt()) return "accepted";
    if (!f) return Tr(`${e ? "-y/--yes" : "--accept-command"} is ignored inside a Claude Code session: run this in your own terminal to accept the command shown above.\n`), 
    "unconfirmed";
  }
  if (!f && n !== void 0 && r !== void 0 && !K(n, r)) return Tr(`--accept-command does not name the command shown above (it may have changed since it was shown), so it was not run. Show it to the person again before accepting it.\n`), 
  "unconfirmed";
  if (!f) return Tr(xxt() ? `Not an interactive terminal, so the command was only displayed, not accepted. Run this in your own terminal (outside the Claude Code session) to confirm the command shown above.\n` : `Not an interactive terminal, so the command was only displayed, not accepted. Re-run in a terminal to confirm it, or pass -y/--yes to accept the command shown above.\n`), 
  "unconfirmed";
  return await eGe("Run this command now?", process.stdin, {
    ignoreAnswersWithinMs: pZe,
    reaskPreamble: p
  }) ? "accepted" : "declined";
}

async function eFo(e, n = {}, r) {
  if (FUe(e) !== null) return null;
  let {name: p, marketplace: f} = kn(e);
  if (!p) return null;
  let o = f ?? n.resolvedMarketplace;
  if (!o) try {
    o = (await d3n(p, r))?.marketplace;
  } catch (S) {
    if (S instanceof ld) return null;
    throw S;
  }
  if (!o) return null;
  let m = `${p}@${o}`;
  if (await w$r(m, n.scope ?? "user", r)) return null;
  let u = await vyt(m, void 0, r);
  if (u === null) return null;
  let g = `${l3n(u)}\n`;
  Tr(g);
  let s = await ae(u, m, r);
  n.onShown?.(W(s, n.acceptCommand));
  let h = await X({
    yes: n.yes,
    acceptCommand: n.acceptCommand,
    shown: s,
    disclosure: g
  });
  return h === "accepted" ? u : h;
}

async function tFo(e, n = {}, r) {
  if (FUe(e) !== null) return;
  let {name: p, marketplace: f} = kn(e);
  if (!p) return;
  let o = await Gl(r), m = f, u;
  if (!m) {
    let k;
    try {
      k = await d3n(p, r);
    } catch (P) {
      if (P instanceof ld) return;
      throw P;
    }
    if (!k) return;
    m = k.marketplace, u = k.entry, n.onResolvedMarketplace?.(m);
  }
  let g = qy(o, m);
  if (b1(g?.source)) return;
  let s = `${p}@${m}`, h = u && n.acceptCommand === void 0 ? {
    entry: u
  } : void 0;
  if (!h) {
    let k = await byt(m, g, r);
    n.onMarketplaceRefreshResult?.(k);
    try {
      h = await oV(s, r);
    } catch (P) {
      if (P instanceof ld) return;
      throw P;
    }
  }
  let S = h ? Aoe(h.entry.source) : void 0;
  if (!h || !S) return;
  let w = (z() && r !== void 0 ? await Fu(r) : Nm()).plugins[s] ?? [], y = bN(S), v = !XYe(), C = v && w.some(k => k.sourceCommand === y);
  if (await wIn(s, n.scope ?? "user", r)) {
    if (!C) {
      let k = w.every(P => P.sourceCommand === void 0);
      Tr(`"${kt(kn(s).name ?? "", 200)}" is already installed, and its marketplace ` + (k ? "entry now installs it by running a command on this machine that has not been reviewed yet." : "has since changed the command that installs it (or how its output is used).") + ` Review and accept it: ${Gg("plugin update", s, {
        extra: (n.scope ?? "user") === "user" ? void 0 : `--scope ${n.scope}`,
        fallback: "an explicit plugin update reviews it"
      })}.\n`);
    }
    return;
  }
  if (C) return {
    kind: "accepted",
    grantKey: y
  };
  return de(s, h.entry, {
    yes: n.yes,
    acceptedCommand: v ? w.find(k => k.sourceCommand !== void 0)?.sourceCommand : void 0,
    acceptCommand: n.acceptCommand,
    onShown: n.onShown,
    storageV5: r
  });
}

async function nFo(e, n = "user", r, p, f, o, m, u = {}) {
  let g = [];
  try {
    let s = await DQe(u.resolvedPlugin ?? e, n, {
      shownSourceCommand: p,
      shownEntryHelper: f,
      announceRefreshResult: m,
      replaceInstalledCopy: u.replaceInstalledCopy,
      npmRegistry: u.npmRegistry,
      gitHubHttpsFallback: kts(C => {
        g.push(C);
      })
    }, o);
    if (!s.success) throw new mte(s.message, s);
    let h = s.pluginId || e, S = s.scope || n;
    i("tengu_plugin_installed_cli", {
      ...await ige(h, tp(), o),
      plugin_id: Qre(h),
      scope: c(S),
      install_source: b("cli-explicit"),
      ...URt(h, mpr(h, {
        scope: S
      })),
      ...R9t({
        pluginId: h,
        surface: "cli",
        replaced: s.switched !== void 0
      }),
      ...s.aliasedId ? {
        aliased_id: !0,
        ...s.reenabled && {
          reenabled: !0
        }
      } : {}
    });
    let w = "", y = r && r.length > 0 ? !0 : void 0;
    try {
      if (s.nothingWritten) {
        if (y) w = `${te.warning} --config values were not saved, because this command changed nothing. To set them, run /plugin configure ${s.pluginId || e} in Claude Code.`, 
        y = !1;
      } else w = await ve(s.pluginId || e, r, o);
    } catch (C) {
      let k = l(C);
      if (t(`post-install userConfig step failed: ${k}`, {
        level: "warn"
      }), r && r.length > 0) w = `${te.warning} Installed, but --config not applied: ${k}`, 
      y = !1;
    }
    let v = Wcn([ s.message, ...g, ...w ? [ w ] : [] ].join(`\n`), s.scope ?? n);
    if (u.json) await Kme({
      command: "install",
      outcome: "ok",
      plugin: e,
      pluginId: s.pluginId,
      scope: s.scope || n,
      message: Ad(v),
      configApplied: y,
      installedVersion: s.installedVersion,
      availableVersion: s.availableVersion
    });
    return v;
  } catch (s) {
    return pWe(s, "install", e, o, u.json ? {
      scope: n,
      shownCommand: u.shownCommand
    } : void 0, s instanceof mte && s.result.aliasedId ? s.result.pluginId : void 0, g);
  }
}

async function ue(e, n) {
  let r = qEe(e), {enabled: p, disabled: f} = await ni(z() ? n : void 0);
  return Sts((z() && n !== void 0 ? await Fu(n) : Nm()).plugins, [ ...p, ...f ], e, r);
}

async function OFt(e, n, r, {unlessNamedInSettings: p = !1, unlessDirectoryNameHeld: f = !1} = {}) {
  {
    let o = await Not(e, r);
    if (o && !(p && A1o(e))) {
      if (f && x_(e)) {
        let u = await Jre().catch(() => {});
        if (u === void 0 || Oce(u) || DT(u.keys(), e).length > 0) return {
          plugin: e,
          aliased: !1
        };
      }
      let m = o.installed.pluginId;
      if (!n) Tr(`${Bn(`"${ze(e, 120)}" is installed as ${m} (the same plugin from ${l9(kn(m).marketplace ?? "")}).`)}\n`);
      return {
        plugin: m,
        aliased: !0
      };
    }
  }
  return {
    plugin: e,
    aliased: !1
  };
}

async function rFo(e, n = "user", r = !1, p = !1, f = !1, o, m = {}) {
  let u = {
    plugin: e,
    aliased: !1
  };
  try {
    u = await OFt(e, m.json, o, {
      unlessDirectoryNameHeld: !0
    });
    let g = await Nae(u.plugin, n, !r, o);
    if (!g.success) throw new mte(g.message, g);
    await Vs("tengu_plugin_uninstalled_cli", {
      ...await ige(g.pluginId || u.plugin, tp(), o),
      scope: c(g.scope || n),
      ...u.aliased ? {
        aliased_id: !0
      } : {},
      ...g.savedKept !== void 0 && {
        saved_kept: !0
      }
    });
    let s = !1, h = async S => {
      if (m.json) await Kme({
        command: "uninstall",
        outcome: "ok",
        plugin: e,
        pluginId: g.pluginId,
        scope: g.scope || n,
        keptData: g.dataDirKept ?? r,
        ...g.savedKept !== void 0 && {
          savedKept: g.savedKept.reason
        },
        message: Ad(S)
      });
      return S;
    };
    try {
      let S = await ue(n, o);
      if (p) return Tr(`${te.tick} ${Bn(g.message)}\n`), s = !0, await ce(S, n, {
        dryRun: !1,
        yes: f,
        deleteDataDir: !r
      }, o);
      return h(g.message + wts(S.orphans, n));
    } catch (S) {
      d(Je(j(S), "claude plugin uninstall: post-uninstall orphan scan or prune failed"));
      let y = `(${p ? "prune" : "orphan scan"} failed: ${l(S)})`;
      if (s) return y;
      let v = p ? `${te.tick} ${g.message}` : g.message;
      return h(`${v}\n${y}`);
    }
  } catch (g) {
    return pWe(g, "uninstall", e, o, m.json ? {
      scope: n
    } : void 0, u.aliased ? u.plugin : void 0);
  }
}

async function oFo(e = "user", {dryRun: n = !1, yes: r = !1} = {}, p) {
  try {
    let f = await ue(e, p);
    return await ce(f, e, {
      dryRun: n,
      yes: r,
      deleteDataDir: !0
    }, p);
  } catch (f) {
    return pWe(f, "prune");
  }
}

async function ce(e, n, r, p) {
  if (e.unloadable.length > 0) return `Skipped \u2014 cannot determine orphans: ${e.unloadable.map(Bn).join(", ")} failed to load. Fix or uninstall, then retry.`;
  if (e.orphans.size === 0) return e.autoCount === 0 ? `Nothing to prune (no auto-installed plugins at ${n} scope).` : `Nothing to prune (${e.autoCount} auto-installed ${I(e.autoCount, "plugin", "plugins")} at ${n} scope, all still needed).`;
  let f = (z() && p !== void 0 ? await Fu(p) : Nm()).plugins, o = qEe(n), m = [ ...e.orphans ].map(s => {
    let h = tR(f[s], n, o);
    return `  ${Bn(s)}${h?.version ? ` (${Bn(h.version)})` : ""}`;
  }), u = `${e.orphans.size} auto-installed ${I(e.orphans.size, "plugin", "plugins")} no longer needed at ${n} scope:\n${m.join(`\n`)}`;
  if (r.dryRun) return `${u}\n(dry run \u2014 nothing removed)`;
  if (!r.yes) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      let h = n === "user" ? "" : ` --scope ${n}`;
      return `${u}\nNot a TTY \u2014 run \`claude plugin prune${h} -y\` to remove.`;
    }
    if (Tr(`${u}\n`), !await eGe("Remove?")) return "Aborted.";
  }
  let g = await Dis(e.orphans, n, o, {
    deleteDataDir: r.deleteDataDir
  }, p);
  return await Vs("tengu_plugin_prune_cli", {
    scope: c(n),
    removed_count: g.length
  }), `Removed ${g.length} auto-installed ${I(g.length, "plugin", "plugins")}: ${g.map(s => Bn(kn(s).name)).join(", ")}`;
}

async function sFo(e, n, r, p = {}) {
  let f = {
    plugin: e,
    aliased: !1
  };
  try {
    f = await OFt(e, p.json, r, {
      unlessNamedInSettings: !0
    });
    let o = await LQe(f.plugin, n, r);
    if (!o.success) throw new mte(o.message, o);
    await Vs("tengu_plugin_disabled_cli", {
      ...await ige(o.pluginId || f.plugin, tp(), r),
      scope: pe(o.scope),
      ...f.aliased ? {
        aliased_id: !0
      } : {}
    });
    let m = Wcn(o.message, o.scope ?? n);
    if (p.json) await Kme({
      command: "disable",
      outcome: "ok",
      plugin: e,
      pluginId: o.pluginId,
      scope: o.scope ?? n,
      message: Ad(m)
    });
    return `${te.tick} ${m}`;
  } catch (o) {
    return pWe(o, "disable", e, r, p.json ? {
      scope: n
    } : void 0, f.aliased ? f.plugin : void 0);
  }
}

async function iFo(e, n = {}) {
  try {
    let r = await C1o(e);
    if (!r.success) throw new mte(r.message, r);
    if (await Vs("tengu_plugin_disabled_all_cli", {}), n.json) await Kme({
      command: "disable",
      outcome: "ok",
      all: !0,
      message: Ad(r.message)
    });
    return `${te.tick} ${r.message}`;
  } catch (r) {
    return pWe(r, "disable-all", void 0, void 0, n.json ? {} : void 0);
  }
}

async function aFo(e, n, {yes: r = !1, json: p = !1, acceptCommand: f} = {}, o) {
  let m, u, g = {
    plugin: e,
    aliased: !1
  };
  try {
    if (g = await OFt(e, p, o), !p) Tr(`${Bn(`Checking for updates for plugin "${g.plugin}"${n ? ` at ${n} scope` : ""}\u2026`)}\n`);
    let s = await NQe(g.plugin, n, {
      explicit: !0,
      onEntryHelperDisclosure: async (w, y, v) => {
        Tr(`${w}\n`);
        let C = await ae(y, v, o), k = await X({
          yes: r,
          acceptCommand: f,
          shown: C,
          disclosure: `${w}\n`
        });
        return u = k === "accepted" ? void 0 : W(C, f), k;
      },
      announceCommandSource: async (w, y, v) => {
        let C = await de(w, y, {
          yes: r,
          acceptedCommand: v,
          acceptCommand: f,
          onShown: k => {
            u = k;
          },
          storageV5: o
        });
        if (C?.kind === "accepted") u = void 0;
        if (C?.kind === "declined") throw new ld("Aborted \u2014 the command was not run.", "plugin command source declined at the prompt");
        return C?.grantKey;
      }
    }, o), h = Bn(s.message);
    m = s.pluginId;
    let {outcome: S} = s;
    if (S === "failed") {
      if (s.failureCode !== void 0 && T1o(s.failureCode)) throw new ld(h, `${D9t}${s.failureCode}`);
      throw new mte(h, {
        failureCode: s.failureCode,
        pluginId: s.pluginId
      });
    }
    if (p) await Kme({
      command: "update",
      outcome: "ok",
      plugin: e,
      pluginId: s.pluginId,
      scope: s.scope ?? n,
      message: h,
      updateOutcome: S,
      oldVersion: s.oldVersion,
      newVersion: s.newVersion,
      skipReason: s.skipReason,
      blockedBy: s.blockedBy,
      refreshFailed: s.refreshFailed,
      refreshRefusedByPolicy: s.refreshRefusedByPolicy
    }); else {
      if (s.folderNote !== void 0) Tr(`${Bn(s.folderNote)}\n`);
      Tr(`${te.tick} ${h}\n`);
    }
    if (s.outcome === "updated") {
      let w = s.pluginId || g.plugin;
      i("tengu_plugin_updated_cli", {
        ...await ige(w, tp(), o),
        old_version: Di(s.oldVersion),
        new_version: Di(s.newVersion),
        ...URt(w, s.gitCommitSha),
        ...g.aliased ? {
          aliased_id: !0
        } : {}
      });
    }
    if (g.aliased) await Wr("cli_plugin_update", {
      aliased_id: !0
    }); else await Wr("cli_plugin_update");
    await Qn(0);
  } catch (s) {
    return pWe(s, "update", e, o, p ? {
      scope: n,
      pluginId: m,
      shownCommand: u
    } : void 0, g.aliased ? g.plugin : void 0);
  }
}

import { mkdir as fe, writeFile as Pe } from "fs/promises";

import { dirname as $e, join as D, relative as Ie, resolve as me, sep as Re } from "path";

var Ee = "https://anthropic.com/claude-code/plugin.schema.json", MFt = [ "skills", "agents", "hooks", "mcp", "lsp", "output-style", "channel" ];

function lFo(e) {
  let n = tX().shape.name.safeParse(e);
  if (!n.success) return n.error.issues[0]?.message ?? null;
  if (e.includes("/") || e.includes("\\") || e.includes("..") || e === ".") return 'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';
  if (!xOt(e) || QV(e) || LY(e)) return `Plugin name cannot be "${S1}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;
  let p = RGe(e);
  if (p?.severity === "error") return p.message;
  return null;
}

function dFo(e) {
  let {name: n, description: r, author: p} = e, f = e.with ?? [], o = [], m = {
    $schema: Ee,
    name: n,
    version: "0.1.0",
    description: r ?? "TODO: describe what this plugin provides"
  };
  if (p) m.author = p;
  if (m.skills = [ "./" ], o.push({
    relPath: D(".claude-plugin", "plugin.json"),
    contents: _(m, null, 2) + `\n`
  }), o.push({
    relPath: "SKILL.md",
    contents: ge(n)
  }), f.includes("skills")) o.push({
    relPath: D("skills", "example", "SKILL.md"),
    contents: ge("example")
  });
  if (f.includes("agents")) o.push({
    relPath: D("agents", "example.md"),
    contents: Oe()
  });
  if (f.includes("hooks")) o.push({
    relPath: D("hooks", "hooks.json"),
    contents: Ne()
  }, {
    relPath: D("hooks-handlers", "on-session-start.ts"),
    contents: De(),
    mode: 493
  });
  if (f.includes("mcp") && !f.includes("channel")) o.push({
    relPath: ".mcp.json",
    contents: xe()
  });
  if (f.includes("lsp")) o.push({
    relPath: ".lsp.json",
    contents: Te()
  });
  if (f.includes("output-style")) o.push({
    relPath: D("output-styles", `${n}.md`),
    contents: Ae(n)
  });
  if (f.includes("channel")) m.channels = [ {
    server: n,
    displayName: n
  } ], o.push({
    relPath: ".mcp.json",
    contents: Fe(n)
  }, {
    relPath: "server.ts",
    contents: Me(n)
  }, {
    relPath: "package.json",
    contents: Le(n)
  });
  return o[0].contents = _(m, null, 2) + `\n`, o;
}

async function cFo(e, n, r) {
  let p = me(e);
  if (!r.force) try {
    await fe(D(p, ".claude-plugin"));
  } catch (o) {
    if (E(o) === "EEXIST") return {
      ok: !1,
      error: `${D(p, ".claude-plugin")} already exists. Use --force to overwrite.`
    };
    if (E(o) !== "ENOENT") throw o;
  }
  let f = [];
  for (let o of n) {
    let m = me(p, o.relPath), u = Ie(p, m);
    if (u.startsWith(".." + Re) || u === "..") return {
      ok: !1,
      error: `Refusing to write outside ${p}: ${o.relPath}`
    };
    if (await fe($e(m), {
      recursive: !0
    }), r.force) await Tn(m, o.contents, o.mode); else try {
      await Pe(m, o.contents, {
        flag: "wx",
        mode: o.mode
      });
    } catch (g) {
      if (E(g) !== "EEXIST") throw g;
      f.push(o.relPath);
    }
  }
  return {
    ok: !0,
    skipped: f
  };
}

function ge(e) {
  return `---\nname: ${e}\ndescription: TODO \u2014 describe WHEN Claude should use this. Include trigger phrases users\n  might say ("do X", "set up Y", "review Z"). Be specific; this string is what Claude\n  matches the user's request against.\n---\n\n# ${e}\n\nTODO: what this skill does, and the steps Claude should take.\n`;
}

function Oe() {
  return `---\nname: example\ndescription: TODO \u2014 when should Claude delegate to this subagent?\ntools:\n  - Read\n  - Grep\n---\n\nTODO: system prompt for the subagent.\n`;
}

function Ne() {
  return _({
    hooks: {
      SessionStart: [ {
        hooks: [ {
          type: "command",
          command: 'bun "${CLAUDE_PLUGIN_ROOT}/hooks-handlers/on-session-start.ts"'
        } ]
      } ]
    }
  }, null, 2) + `\n`;
}

function De() {
  return `#!/usr/bin/env bun\n// SessionStart hook handler. Reads the event from stdin, writes a JSON result\n// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your\n// users' environment lacks bun.\nconst input = await new Response(Bun.stdin.stream()).text()\nconst event = JSON.parse(input)\nprocess.stdout.write(JSON.stringify({}))\n`;
}

function xe() {
  return _({
    mcpServers: {
      "example-remote": {
        type: "http",
        url: "https://example.com/mcp"
      },
      "example-local": {
        command: "npx",
        args: [ "<your-mcp-server-package>" ]
      }
    }
  }, null, 2) + `\n`;
}

function Te() {
  return _({
    example: {
      command: "example-language-server",
      args: [ "--stdio" ],
      extensionToLanguage: {
        ".example": "example"
      }
    }
  }, null, 2) + `\n`;
}

function Ae(e) {
  return `---\nname: ${e}\ndescription: TODO \u2014 one line shown in the Output style picker in /config\nforce-for-plugin: true\nkeep-coding-instructions: true\n---\n\nTODO: the style prompt. This is appended to Claude's system prompt while the\nstyle is active. With force-for-plugin: true, the style applies automatically\nwhen this plugin is enabled.\n`;
}

function Fe(e) {
  return _({
    mcpServers: {
      [e]: {
        command: "bun",
        args: [ "run", "--cwd", "${CLAUDE_PLUGIN_ROOT}", "--shell=bun", "--silent", "start" ]
      }
    }
  }, null, 2) + `\n`;
}

function Le(e) {
  return _({
    name: `claude-channel-${e}`,
    version: "0.1.0",
    type: "module",
    scripts: {
      start: "bun install --no-summary && bun server.ts"
    },
    dependencies: {
      "@modelcontextprotocol/sdk": "^1.0.0"
    }
  }, null, 2) + `\n`;
}

function Me(e) {
  return `#!/usr/bin/env bun\n/**\n * ${e} channel server \u2014 stdio MCP server implementing the channel contract.\n * See https://code.claude.com/docs/en/channels-reference.\n */\nimport { Server } from '@modelcontextprotocol/sdk/server/index.js'\nimport { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'\nimport {\n  CallToolRequestSchema,\n  ListToolsRequestSchema,\n} from '@modelcontextprotocol/sdk/types.js'\n\nconst mcp = new Server(\n  { name: '${e}', version: '0.1.0' },\n  {\n    capabilities: {\n      tools: {},\n      // Required: presence of this key registers the channel notification\n      // listener on Claude's side.\n      experimental: { 'claude/channel': {} },\n    },\n    instructions:\n      "Events from ${e} arrive as <channel source=\\"${e}\\" ...>. Anything " +\n      "you want the sender to see must go through the reply tool \u2014 your " +\n      "transcript output never reaches the channel.",\n  },\n)\n\nmcp.setRequestHandler(ListToolsRequestSchema, async () => ({\n  tools: [\n    {\n      name: 'reply',\n      description: 'Send a message back to the ${e} channel.',\n      inputSchema: {\n        type: 'object',\n        properties: { text: { type: 'string' } },\n        required: ['text'],\n      },\n    },\n  ],\n}))\n\nmcp.setRequestHandler(CallToolRequestSchema, async req => {\n  const args = (req.params.arguments ?? {}) as Record<string, unknown>\n  if (req.params.name === 'reply') {\n    // TODO: deliver args.text to the external service.\n    return { content: [{ type: 'text', text: 'sent' }] }\n  }\n  return { content: [{ type: 'text', text: 'unknown tool' }], isError: true }\n})\n\n// TODO: when the external service has an inbound event, push it to Claude:\n//\n//   await mcp.notification({\n//     method: 'notifications/claude/channel',\n//     params: {\n//       content: 'the event body',\n//       meta: { chat_id: '...', sender: '...' },\n//     },\n//   })\n//\n// Each meta key becomes an attribute on the <channel> tag. Keys must be\n// identifiers (letters/digits/underscores) \u2014 others are silently dropped.\n\nawait mcp.connect(new StdioServerTransport())\n`;
}

export { Wcn, P0r, mte, I0r, Kme, Q$o, Z$o, O0r, pWe, eFo, tFo, nFo, OFt, rFo, oFo, sFo, iFo, aFo, MFt, lFo, dFo, cFo };
