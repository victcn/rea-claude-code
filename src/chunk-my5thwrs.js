// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { x, Je, j, l, jt } from "./chunk-b0z4bv3v.js";

import { qG } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { i, Vs } from "./chunk-hedpgw9m.js";

import { f, Wr, Bt, Wa } from "./chunk-3ykz5st8.js";

import { U1, qa, mn, xH, gk, br, Ppe, Fut, Zse, Enn, wf, Ac, Cu, Mi, Fi, rf, vb, Lz, kn, _Z, Ann, Hi, vm, fr, Pl, JT, mPe } from "./chunk-8drhysk2.js";

import { _, Y, dD, ST, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { adn } from "./chunk-a16yb89m.js";

import { I } from "./chunk-5wbhf1bk.js";

import { kt, Us, ze, Xl, hT } from "./chunk-r2h53bm2.js";

import { d } from "./chunk-6ah1819r.js";

import { er } from "./chunk-dd98x6x7.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { ko, jfe, N5, Bn, Ad, Im } from "./chunk-q6wab2jw.js";

import { KJt, ld } from "./chunk-2xhrgh8h.js";

import { cho, EOt, kOt, wZt, TOt, NS, z7 } from "./chunk-t70vnbgq.js";

import { aUn, j7, hZt, L_, xN, vdt, yZt, Hc } from "./chunk-67jt18z1.js";

import { Qe, GPe, BOs } from "./chunk-xywp7esx.js";

import { tE, KCe } from "./chunk-81rtbneg.js";

import { srt, _Ke, bKe, SKe, fQr, Tkt, drt, pAe, C0e, crt, Hye, fQ, W2, nRn, Xx, rRn, tre, SAt, iF, Zde, fIn, mIn, nto, gd, Are, cR, spr, qAt, Cre, _qe, qd, Gl, QIn, Rre, Sqe, $Q, Jv, n3t, cpr, upr, Kas, sV, uR, XAt, r3t, iV, V4, Jas, Qas, N3, rP, VB, rst, CS, Qn } from "./chunk-84yp45y8.js";

import { te } from "./chunk-48xcyvwy.js";

import { n8, sm, mit, lP, UCe, BCe } from "./chunk-bv9f914r.js";

import { tp } from "./chunk-sg5gpfs4.js";

import { VCe, P4e, x9t } from "./chunk-af7jrchc.js";

import { w } from "./chunk-9rj1xaxr.js";

import { n } from "./chunk-3vw306fv.js";

import { qm, ln, op, zF, Io, Xo } from "./chunk-ajd6by9m.js";

import { VWe, kte, eBt, tBt, v$r, wyt } from "./chunk-kvxc0w8v.js";

import { Wcn, P0r, mte, I0r, Kme, Q$o, O0r, pWe, eFo, tFo, nFo, OFt, rFo, oFo, sFo, iFo, aFo, MFt, lFo, dFo, cFo } from "./chunk-s7q7bmsd.js";

import { zC, GWe, Z6n, e3n, pfn, YUt, ffn, mfn, r3n, o3n, VEe, XUt, JUt, _yt, QUt, ZUt } from "./chunk-6p8d2v6r.js";

import { d4o, Lg, QGr, CGe } from "./chunk-4s406sh2.js";

import { Sbt } from "./chunk-axx8atw0.js";

import { RI, xI } from "./chunk-xd686gt2.js";

import { R0r } from "./chunk-6t9xd429.js";

import { IFt } from "./chunk-0br27s5g.js";

import { ige } from "./chunk-s20e0d27.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { fne } from "./chunk-4xv14swd.js";

import { j2e, DVt, LVt } from "./chunk-abbgyr9n.js";

import { Vr, Hr, F } from "./chunk-cpyd3eya.js";

import { xpe } from "./chunk-whs0esmw.js";

import { iu } from "./chunk-8v8fjzek.js";

import { sn } from "./chunk-642shbw5.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

import { join as ye, relative as qe, resolve as Xe } from "path";

var Ye = (s, o) => s === void 0 ? void 0 : o?.manifest.version;

async function We(s, o, a) {
  if (o !== void 0) return o.readFromFolderAt === void 0 ? void 0 : o.path;
  let p = await R0r(s, a);
  return p.kind === "folder" ? p.path : void 0;
}

async function Ve(s, o, a) {
  let p = await Promise.all(s.map(u => We(u, o.get(u), a)));
  return new Map(s.map((u, g) => [ u, p[g] ]));
}

function Ke(s, o, a) {
  return (a === void 0 ? s : o?.manifest.version ?? s) || "unknown";
}

async function le(s) {
  await op(dD(_({
    ...s,
    nonce: Q$o()
  })) + `\n`);
}

function JYn(s) {
  if (s instanceof Are) return s.reason.kind;
  return spr(s) ?? O0r(s);
}

function Ze(s, o) {
  return cho(s, {
    declaredInSettings: o
  }).map((a, p) => `${p === 0 ? "    Error: " : "           "}${a}`);
}

async function ue(s, o, a) {
  if (o instanceof ld) await Wa(s, "command_source_refused"); else await Bt(s, a);
  await zF();
}

function en(s, o, a, p = 0, u = []) {
  let g = s - o.length - a.length, m = [];
  if (o.length > 0) m.push(yZt(o.length, o.map(h => zC(h))));
  if (a.length > 0) m.push(nto(a.length, a.map(h => zC(h))));
  if (p > 0) m.push(`${p} ${I(p, "marketplace")} skipped (nothing to refresh: declared in settings, managed, or not allowed)`);
  if (u.length > 0) m.push(`${br} (built in) could not be refreshed and was skipped (see --debug)`);
  return {
    messages: m,
    summary: nn(g, o.length, a.length)
  };
}

function nn(s, o, a) {
  let p = mIn({
    failedCount: a,
    updatedCount: s,
    policyRefusedCount: o
  }), u = a > 0 ? s > 0 ? `Updated ${s} ${I(s, "marketplace")}, but not all` : "No marketplaces were updated" : s > 0 ? `Successfully updated ${s} ${I(s, "marketplace")}` : o > 0 ? "No marketplaces were updated" : "No marketplaces needed updating";
  return p === null ? u : `${p} ${u}`;
}

function DEe(s, o) {
  if (s instanceof ld) return t(`${o} refused: ${s.message}`), ln(Ad(s.message));
  t(`Failed to ${o}: ${l(s)}`, {
    level: "error"
  }), ln(Ad(`${te.cross} Failed to ${o}: ${l(s)}`));
}

async function we(s, o, a, p = s) {
  if (a !== void 0) await le({
    ...a,
    outcome: "failed",
    message: Ad(l(s)),
    failureCode: JYn(p)
  });
  return DEe(s, o);
}

function Ne(s, o = 300) {
  return s instanceof ld ? s : kt(l(s), o);
}

function be(s) {
  let o = [];
  if (s.errors.length > 0) o.push(`${te.cross} Found ${s.errors.length} ${I(s.errors.length, "error")}:`, ""), 
  s.errors.forEach(a => {
    o.push(`  ${te.pointer} ${a.path}: ${a.message}`);
  }), o.push("");
  if (s.warnings.length > 0) o.push(`${te.warning} Found ${s.warnings.length} ${I(s.warnings.length, "warning")}:`, ""), 
  s.warnings.forEach(a => {
    o.push(`  ${te.pointer} ${a.path}: ${a.message}`);
  }), o.push("");
  if (s.notes !== void 0) s.notes.forEach(a => {
    o.push(`  ${te.pointer} ${a}`);
  }), o.push("");
  return o;
}

async function UVs(s, o, a) {
  if (a.cowork) qG(!0);
  let p;
  try {
    p = await CGe(o);
  } catch (T) {
    if (jt(T)) t(`Plugin validation failed for ${o}: ${l(T)}`, {
      level: "error"
    }); else d(T);
    return console.error(`${te.cross} Unexpected error during validation: ${Lg(l(T), 200)}`), 
    await Bt("cli_plugin_validate", "cli_plugin_validate_exception"), Io(2);
  }
  let {manifest: u, contents: g} = p, {allSuccess: m, noErrors: h, hasWarnings: R} = d4o(u ? [ u, ...g ] : g, a), P = await ZUt(o, u, g), v = () => m ? Wr("cli_plugin_validate") : Wa("cli_plugin_validate", "cli_plugin_validate_failed");
  if (a.json) return await op(se(wn(p, {
    success: m,
    strict: a.strict === !0
  }, P)) + `\n`), await v(), Io(m ? 0 : 1);
  let y = u ? [ `Validating ${u.fileType} manifest: ${u.filePath}`, "", ...be(u) ] : [ `Validating components in: ${p.resolvedPath}`, "" ];
  for (let T of g) y.push(`Validating ${T.fileType}: ${T.filePath}`, ""), y.push(...be(T));
  if (y.push(...QUt(P)), m) y.push(R ? `${te.tick} Validation passed with warnings` : `${te.tick} Validation passed`); else if (h && R) y.push(`${te.cross} Validation failed (--strict treats warnings as errors)`); else y.push(`${te.cross} Validation failed`);
  return await xI(await s(), e(n, {
    children: ie(y)
  })), await v(), Io(m ? 0 : 1);
}

async function BVs(s, o, a) {
  let p = await XUt(o ?? ".", {
    force: a.force
  }), u = [];
  for (let y of p.warnings) u.push(`${te.warning} ${y}`);
  if (!p.ok) {
    await Bt("cli_plugin_tag", "cli_plugin_tag_prepare_failed"), u.push(`${te.cross} ${p.error}`), 
    ae(s, u, 1);
    return;
  }
  let {plan: g} = p;
  if (u.push(`Plugin:  ${g.pluginName}`, `Version: ${g.version} (from ${g.versionFrom})`), 
  g.marketplace) u.push(`Marketplace entry: plugins[${g.marketplace.entryIndex}] in ${g.marketplace.path}` + (g.marketplace.entryVersion ? ` (version: ${g.marketplace.entryVersion})` : ""));
  u.push(`Tag:     ${g.tag}`, "");
  let m = a.remote ?? "origin", h = a.force ?? !1, R = _yt(g, a.message), P = `git -C ${g.gitRoot} push ${h ? "--force " : ""}${m} refs/tags/${g.tag}`;
  if (a.dryRun) {
    await Wr("cli_plugin_tag"), u.push(`${te.tick} Dry run \u2014 would create tag ${g.tag} at HEAD in ${g.gitRoot}`, `  git -C ${g.gitRoot} tag ${h ? "-f " : ""}-a ${g.tag} -m ${_(R)}`, `  ${P}`), 
    ae(s, u, 0);
    return;
  }
  let v = await JUt(g, {
    push: a.push ?? !1,
    force: h,
    message: a.message,
    remote: m,
    allowGitTerminalPrompt: !0
  });
  if (!v.ok) {
    await Bt("cli_plugin_tag", "cli_plugin_tag_create_failed"), u.push(`${te.cross} ${v.error}`), 
    ae(s, u, 1);
    return;
  }
  if (await Wr("cli_plugin_tag"), u.push(`${te.tick} Created tag ${g.tag}`), v.pushed) u.push(`${te.tick} Pushed to ${m}`); else u.push(`  Push with: ${P}`);
  ae(s, u, 0);
}

function ae(s, o, a) {
  s.render(e(RI, {
    children: e(n, {
      children: ie(o)
    })
  })), s.waitUntilExit().then(() => Io(a));
}

async function jVs(s, o, a, p) {
  let u = [], g = lFo(o);
  if (g) {
    await Bt("cli_plugin_init", "invalid_name"), u.push(`${te.cross} Invalid plugin name "${o}": ${g}`), 
    ae(s, u, 1);
    return;
  }
  let m = [];
  for (let C of a.with ?? []) if (MFt.includes(C)) m.push(C); else {
    await Bt("cli_plugin_init", "invalid_component"), u.push(`${te.cross} Unknown --with component "${C}". Valid: ${MFt.join(", ")}`), 
    ae(s, u, 1);
    return;
  }
  if (!j7()) {
    await Bt("cli_plugin_init", "policy_blocked"), u.push(`${te.cross} ${hZt(Os(ye(Ee(), "skills")))}`), 
    ae(s, u, 1);
    return;
  }
  let h = ye(Ee(), "skills"), R = ye(h, o);
  if (qe(h, Xe(R)).startsWith("..")) {
    await Bt("cli_plugin_init", "invalid_name"), u.push(`${te.cross} Plugin name "${o}" would write outside ${Os(h)}`), 
    ae(s, u, 1);
    return;
  }
  let P = a.author ?? await BOs(), v = a.authorEmail ?? await GPe();
  if (!P && a.authorEmail) u.push(`${te.warning} --author-email was ignored because no author name was found. Pass --author or set git config user.name.`);
  let y = P ? v ? {
    name: P,
    email: v
  } : {
    name: P
  } : void 0, T = dFo({
    name: o,
    description: a.description,
    author: y,
    with: m
  }), H;
  try {
    let C = await cFo(R, T, {
      force: a.force
    });
    if (!C.ok) {
      await Bt("cli_plugin_init", "target_exists"), u.push(`${te.cross} ${C.error}`), 
      ae(s, u, 1);
      return;
    }
    H = C.skipped;
  } catch (C) {
    await Bt("cli_plugin_init", "write_failed"), d(C), u.push(`${te.cross} Failed to write scaffold: ${l(C)}`), 
    ae(s, u, 1);
    return;
  }
  for (let C of H) u.push(`  kept existing ${C} (use --force to overwrite)`);
  let k = await QGr(R, {
    unrecordableNames: "warn"
  });
  if (!k.success || k.warnings.length > 0) u.push(...be(k));
  if (!k.success) {
    await Bt("cli_plugin_init", "self_validate_failed"), ae(s, u, 1);
    return;
  }
  await Wr("cli_plugin_init");
  let N = `${o}@${Cu}`;
  u.push(`${te.tick} Created plugin "${o}" at ${Os(R)}`);
  let K = er().enabledPlugins ?? {}, A = tp()?.has(o) ?? !1, O = await Gl(p), E = Object.keys(K).find(C => {
    let M = kn(C);
    return M.name === o && M.marketplace !== void 0 && M.marketplace !== Fi && !rf(M.marketplace) && O[M.marketplace] !== void 0;
  }), D = K[N] === !1;
  if (A) u.push(`  ${te.warning} A plugin named "${o}" is locked by managed settings, which takes precedence \u2014 ${N} won't load. To load this copy, give it a different "name" in .claude-plugin/plugin.json.`); else if (E) u.push(`  ${te.warning} The name "${o}" is already taken by ${E} \u2014 when that plugin loads, ${N} won't. To load this copy, give it a different "name" in .claude-plugin/plugin.json or uninstall the conflicting plugin.`); else if (D) {
    let C = qa("plugin enable", N);
    u.push(`  ${te.warning} A disabled setting for ${N} exists, so it won't load until you re-enable it${C ? `: ${C}` : " in /plugin"}`);
  } else u.push(`  It will auto-load next session as ${N}. Run /reload-plugins to load it now.`);
  let U = qa("plugin disable", N);
  u.push(`  ${U ? `Disable: ${U}. ` : "Disable: in /plugin. "}Remove: delete the directory.`), 
  ae(s, u, 0);
}

async function WVs(s, o, a, p) {
  if (o.cowork) qG(!0);
  IFt(), i("tengu_plugin_list_command", {});
  let u = await iV(a);
  if (o.json && typeof o.dataSize === "string" && !(Object.hasOwn(u.plugins, o.dataSize) && (u.plugins[o.dataSize]?.length ?? 0) > 0)) return Xo(`${te.cross} --data-size names a plugin that is not installed`);
  let {getPluginEditableScopes: g, editableScopeOf: m} = await import("./chunk-45bsjk9f.js"), h = g(), R = Object.keys(u.plugins);
  await _Ke();
  let {enabled: P, disabled: v, errors: y, warnings: T} = await CS(a, p), H = [ ...P, ...v ], k = new Map(H.map(M => [ M.source, M ])), N = {
    plugins: H,
    errors: y,
    warnings: T
  }, K = [ {
    header: "Session-only plugins (--plugin-dir / --plugin-url):",
    scopeOf: () => "session",
    standaloneErrorScope: "session",
    standaloneWarningScope: "session",
    pathOf: M => M.path,
    showScope: !1,
    ...$e(Ac, N)
  }, {
    header: `Synced from claude.ai${KJt() ? "" : " \u2014 sync is off in this shell; these load only in a synced session"}:`,
    scopeOf: () => "synced",
    standaloneErrorScope: "synced",
    standaloneWarningScope: "synced",
    pathOf: M => M.path,
    showScope: !1,
    ...$e(Mi, N)
  }, {
    header: "Skills-directory plugins (.claude/skills/*):",
    scopeOf: M => M.scope ?? "user",
    standaloneErrorScope: "user",
    standaloneWarningScope: "project",
    pathOf: rst,
    showScope: !0,
    ...$e(Cu, N)
  } ], A = await Ve(R, k, a);
  if (o.json) {
    let M = [];
    for (let J of R.sort()) {
      let X = u.plugins[J];
      if (!X || X.length === 0) continue;
      let ne = k.get(J), ee = ne?.name ?? kn(J).name, L = y.filter(re => VEe(re, J, ee)), G = T.filter(re => VEe(re, J, ee)), V = L.map(NS), Z = G.map(z7), Q = L.map(de), q = G.map(de), he = tBt(J), ke, fe;
      if (o.dataSize === !0 || o.dataSize === J) try {
        ke = await aUn(J, {
          throwIfUnreadable: !0
        }) ?? void 0;
      } catch {
        fe = !0;
      }
      for (let re of X) {
        let Ie;
        if (ne) {
          let _e = ne.mcpServers || await srt(ne, void 0, a, void 0, {
            readOnlyListing: !0
          });
          if (_e && Object.keys(_e).length > 0) Ie = _e;
        }
        M.push({
          id: J,
          version: re.version || "unknown",
          scope: re.scope,
          enabled: m(h, J) !== void 0,
          installPath: re.installPath,
          readFromFolder: A.get(J),
          folderVersion: Ye(A.get(J), ne),
          installedAt: re.installedAt,
          lastUpdated: re.lastUpdated,
          projectPath: re.projectPath,
          mcpServers: Ie,
          errors: V.length > 0 ? V : void 0,
          notes: Z.length > 0 ? Z : void 0,
          errorDetails: Q.length > 0 ? Q : void 0,
          noteDetails: q.length > 0 ? q : void 0,
          projectEnabled: he,
          dataDirSize: ke,
          dataDirUnreadable: fe,
          hasUserConfig: He(ne)
        });
      }
    }
    for (let J of K) M.push(...await _n(J, a));
    let B;
    if (o.available) {
      let J = [];
      try {
        let [X, ne] = await Promise.all([ qd(a), qAt(a) ]), {marketplaces: ee} = await Zde(X, a), L = await uR() !== "unavailable" ? new Set(mfn(YUt(ee.flatMap(({name: G, data: V}) => (V?.plugins ?? []).map(Z => {
          let Q = iF(Z.name, G);
          return {
            entry: Z,
            marketplaceName: G,
            pluginId: Q,
            isInstalled: VB(Q)
          };
        })), X), X, await ffn(X, a)).map(G => G.pluginId)) : null;
        for (let {name: G, data: V} of ee) if (V) {
          let Z = V.plugins.filter(Q => {
            let q = iF(Q.name, G);
            return !VB(q) && (L === null || L.has(q));
          });
          for (let Q of await GWe(G, Z, X, a)) {
            let q = iF(Q.name, G);
            J.push({
              pluginId: q,
              name: Q.name,
              description: Q.description,
              marketplaceName: G,
              version: Q.version,
              source: Q.source,
              installCount: ne?.get(q)
            });
          }
        }
      } catch {}
      B = se({
        installed: M,
        available: J
      });
    } else B = se(M);
    await op(B + `\n`), await Wr("cli_plugin_list");
    return;
  }
  let O = [], E = await N3(a);
  if (E !== void 0) O.push(`Note: ${V4(E)}`, ""); else if (R.length === 0 && !K.some(Ge)) O.push("No plugins installed. Use `claude plugin install` to install a plugin.");
  let D = await Qas();
  if (D.length > 0) {
    if (O.length > 0 && O.at(-1) !== "") O.push("");
    O.push(`Note: install records under names that no version of Claude Code can use were removed from installed_plugins.json. Their copy is kept for a while in ${D.join(", ")}. Nothing needs doing about these copies.`, "");
  }
  let U = await Jas();
  if (U.length > 0) {
    if (O.length > 0 && O.at(-1) !== "") O.push("");
    O.push(`Note: installed_plugins.json could not be read and was rebuilt. What it held is kept for a while in ${U.join(", ")}. Plugins it listed may need installing again; look there for what was recorded.`, "");
  }
  if (R.length > 0) O.push("Installed plugins:", "");
  for (let M of R.sort()) {
    let B = u.plugins[M];
    if (!B || B.length === 0) continue;
    let J = k.get(M)?.name ?? kn(M).name, X = y.filter(ee => VEe(ee, M, J)), ne = T.filter(ee => VEe(ee, M, J));
    for (let ee of B) {
      let L = m(h, M) !== void 0, G = X.length > 0 ? `${te.cross} failed to load` : L ? `${te.tick} enabled` : `${te.cross} disabled`, V = A.get(M), Z = Ke(ee.version, k.get(M), V), Q = ee.scope;
      if (O.push(`  ${te.pointer} ${M}`), O.push(`    Version: ${Z}`), V !== void 0) O.push(`    Read from: ${Us(V)}`);
      O.push(`    Scope: ${Q}`), O.push(`    Status: ${G}`);
      for (let q of X) {
        if (q.type === "marketplace-load-failed" && q.nameRefused) {
          O.push(...Ze(q.marketplace, q.nameRefusedDeclaredInSettings === !0));
          continue;
        }
        O.push(`    Error: ${NS(q)}${EOt(q) ? ` ${kOt}` : ""}${wZt(q) !== void 0 ? `. ${wZt(q)}` : ""}`);
      }
      for (let q of ne) O.push(`    Note: ${z7(q)}`);
      O.push("");
    }
  }
  for (let M of K) O.push(...hn(M));
  let C = await s();
  await xI(C, e(n, {
    children: ie(O)
  })), await Wr("cli_plugin_list");
}

function ve(s) {
  let p = w(4), {promise: o} = s, a = Hr(o), u;
  if (p[0] !== a) u = ie(a), p[0] = a, p[1] = u; else u = p[1];
  let g;
  if (p[2] !== u) g = e(RI, {
    children: e(n, {
      children: u
    })
  }), p[2] = u, p[3] = g; else g = p[3];
  return g;
}

var Fcn = "Invalid marketplace source format. Try: owner/repo, https://..., or ./path";

async function zVs(s, o, a, p, u) {
  if (a.cowork) qG(!0);
  if (a.resolveOnly === !0 && a.fromLink !== !0) return ln(`${te.cross} --resolve-only needs --from-link`);
  if (a.claudeai) {
    if (a.sparse !== void 0 || a.scope !== void 0) return ln(`${te.cross} --claudeai takes only the marketplace name (no --sparse or --scope: a claude.ai marketplace is hosted for your account, not declared in settings)`);
    if (a.fromLink === !0) return ln(`${te.cross} --claudeai can't be combined with --from-link`);
    await on(s, o, p, u);
    return;
  }
  if (a.resolveOnly === !0) {
    if (a.sparse !== void 0 || a.scope !== void 0) return ln(`${te.cross} --resolve-only can't be combined with --sparse or --scope`);
    await rn(o, p);
    return;
  }
  if (a.fromLink !== !0 && xH(o)) {
    {
      let k = await uR();
      if (k === "blocked") {
        x9t({
          reason: "policy_blocked",
          sourceKind: void 0,
          surface: "cli"
        });
        let N = L_();
        if (N !== null) P4e(N);
        return await Bt("cli_marketplace_add", "cli_marketplace_add_blocked_by_policy"), 
        Xo(`${te.cross} ${br} is blocked by your organization. ${xN()} It can't be turned on here.`);
      }
      if (k !== "unavailable") {
        if (a.sparse !== void 0 || a.scope !== void 0) return ln(`${te.cross} ${br} is built in and not declared in any settings scope. Omit --sparse and --scope to turn it on.`);
        if (k === "off") {
          try {
            await XAt(!0);
          } catch (N) {
            return VCe({
              enabled: !0,
              surface: "cli",
              failure: "settings_write_failed"
            }), await Bt("cli_marketplace_add", "cli_marketplace_add_failed"), await zF(), DEe(Ne(N), "add marketplace");
          }
          VCe({
            enabled: !0,
            surface: "cli"
          }), gd(p, u);
        } else await r3t(!0);
        await Wr("cli_marketplace_add"), await xI(s, r(n, {
          children: [ te.tick, " ", k === "off" ? `${br} is on. Its plugins are back in /plugin \u2192 Discover.` : `${br} is already on` ]
        })), await Io(0);
        return;
      }
      return x9t({
        reason: "reserved_name",
        sourceKind: void 0,
        surface: "cli"
      }), await Bt("cli_marketplace_add", "cli_marketplace_add_directory_unavailable"), 
      Xo(`${te.cross} The ${br} isn't available in this session.`);
    }
    return await Bt("cli_marketplace_add", "cli_marketplace_add_reserved_name"), Xo(`${te.cross} ${Ppe(o)}`);
  }
  let g, m, h, R = a.fromLink === !0, P = a.json ? {
    command: "marketplace-add"
  } : void 0, v = async (k, N = !1) => {
    if (P !== void 0) await le({
      ...P,
      outcome: "failed",
      message: Ad(k),
      ...!N && {
        failureCode: "invalid_source"
      }
    });
    return Xo(`${te.cross} ${k}`);
  };
  try {
    if (R) try {
      Sbt(o);
    } catch (N) {
      throw cR(N, "invalid_source");
    }
    let k = await jfe(o);
    if (!k) return await Bt("cli_marketplace_add", "cli_marketplace_add_invalid_source"), 
    v(Fcn);
    if ("error" in k) return await Bt("cli_marketplace_add", "cli_marketplace_add_parse_failed"), 
    v(iu(k.error), k.unreadable === !0);
    if (h = a.scope ?? "user", h !== "user" && h !== "project" && h !== "local") return Xo(iu(`${te.cross} Invalid scope '${h}'. Use: user, project, or local`));
    if (m = JT(h), g = k, a.sparse && a.sparse.length > 0) if (g.source === "github" || g.source === "git") g = {
      ...g,
      sparsePaths: a.sparse
    }; else return Xo(`${te.cross} --sparse is only supported for github and git marketplace sources (got: ${g.source})`);
  } catch (k) {
    return await ue("cli_marketplace_add", k, "cli_marketplace_add_failed"), we(k, "add marketplace", P);
  }
  let y, T = "", H = (async () => {
    try {
      let k = [];
      if (R) {
        let J = await Ucn(g, p);
        if (J !== void 0) return y = {
          name: J,
          added: !1
        }, T = `Marketplace '${J}' is already added; nothing changed`, await Wr("cli_marketplace_add"), 
        [];
      }
      let {name: N, alreadyMaterialized: K, resolvedSource: A, replacedSource: O} = await Rre(g, J => {
        k.push(J);
      }, p, void 0, {
        refuseNameCollision: R
      }), {error: E} = await _qe(N, {
        source: A
      }, m, p);
      if (E) throw E;
      gd(p, u), await Vs("tengu_marketplace_added", {
        _PROTO_marketplace_name: N,
        source_type: c(g.source),
        repo_hash: g.source === "github" ? sn(g.repo) : void 0,
        is_official_marketplace: Pl(N)
      }), await Wr("cli_marketplace_add");
      let D = [];
      if (!R) try {
        D = (await fne((await CS(p, u)).errors, p)).installed;
      } catch (J) {
        t(`marketplace add: dep auto-resolve skipped: ${l(J)}`, {
          level: "warn"
        });
      }
      y = {
        name: N,
        added: !0
      };
      let U = tre(D), C = K ? `Marketplace '${N}' already on disk \u2014 declared in ${h} settings${U}` : `Successfully added marketplace: ${N} (declared in ${h} settings)${U}`, M = fIn({
        name: N,
        replacedSource: O,
        resolvedSource: A,
        settingSource: m
      });
      T = [ ...k, C, ...M ].join(`\n`), k.push(`${te.tick} ${C}`, ...M.map(J => `  ${J}`));
      let B = P0r(mPe(m));
      if (B !== null) k.push(`${te.warning} ${B}`);
      return k;
    } catch (k) {
      if (R && k instanceof Are) await op(`${dD(_({
        refused: k.reason
      }))}\n`);
      return await ue("cli_marketplace_add", k, "cli_marketplace_add_failed"), we(k, "add marketplace", P);
    }
  })();
  if (H.catch(() => {}), R) {
    if (await H, y === void 0) return ln(`${te.cross} Failed to add marketplace: the add finished without naming the marketplace it used`);
    await op(`${dD(_(y))}\n`);
  } else if (P !== void 0) await H;
  if (R || P !== void 0) {
    if (P !== void 0) await le({
      ...P,
      outcome: "ok",
      marketplace: y?.name,
      message: Ad(T)
    });
    await Io(0);
    return;
  }
  s.render(e(Vr, {
    fallback: e(n, {
      children: "Adding marketplace\u2026"
    }),
    children: e(ve, {
      promise: H
    })
  })), await s.waitUntilExit(), await Io(0);
}

async function rn(s, o) {
  let a;
  try {
    Sbt(s), a = await jfe(s);
  } catch (u) {
    return await Bt("cli_marketplace_link_lookup", "cli_marketplace_link_lookup_refused_source"), 
    await zF(), DEe(u, "look up the marketplace");
  }
  if (!a || "error" in a) return await Bt("cli_marketplace_link_lookup", a ? "cli_marketplace_link_lookup_parse_failed" : "cli_marketplace_link_lookup_invalid_source"), 
  Xo(`${te.cross} ${a?.error ?? Fcn}`);
  let p;
  try {
    p = await Ucn(a, o);
  } catch (u) {
    return await Bt("cli_marketplace_link_lookup", "cli_marketplace_link_lookup_read_failed"), 
    await zF(), DEe(u, "read the added marketplaces");
  }
  await Wr("cli_marketplace_link_lookup"), await op(`${dD(_({
    existing: p ?? null
  }))}\n`), await Io(0);
}

async function Ucn(s, o) {
  if (!Hc(s)) return;
  return QIn(await qd(o), s);
}

async function on(s, o, a, p) {
  let u = (async () => {
    try {
      let g = await qd(a), m = await bKe(p).catch(() => null);
      if (m === null) throw new Xx("claude.ai marketplaces are not available here \u2014 sign in to claude.ai (claude /login) with plugin sync on, then run: claude plugin marketplace list", "tier_unavailable");
      let h = fQr(m.hosted, o);
      if (h.kind === "ambiguous") throw new Xx(`claude.ai hosts more than one marketplace called "${o}" for this account \u2014 add it by its unique name instead: ${h.localNames.join(", ")} (claude plugin marketplace list)`, "ambiguous_name");
      if (h.kind === "none") {
        if (fQr(m.policyBlocked, o).kind !== "none") throw new Xx(`"${o}" is hosted on claude.ai for this account but not allowed by your organization's marketplace policy (personal claude.ai uploads and blocked hosts are not admitted)`, "policy_blocked");
        throw new Xx(`claude.ai hosts no marketplace named "${o}" for this account \u2014 run: claude plugin marketplace list`, "not_listed");
      }
      let R = h.row, {name: P, marketplace: v, status: y} = await rRn(R, {
        configured: g,
        credentials: p
      });
      gd(a, p), await Vs("tengu_marketplace_added", {
        source_type: b("claudeai")
      }), await Wr("cli_marketplace_add");
      let T = crt(y), H = v.plugins.length;
      return [ `${te.tick} Successfully added marketplace: ${Tkt(R)} \u2014 hosted on claude.ai, ${pAe(R.scope)} \u2014 ${H} ${I(H, "plugin")}${T ? ` (${T})` : ""}`, `  Install its plugins with: claude plugin install <plugin>@${P}` ];
    } catch (g) {
      if (g instanceof Xx) await Bt("cli_marketplace_add", `cli_marketplace_add_claudeai_${g.code}`), 
      await zF(); else await ue("cli_marketplace_add", g, "cli_marketplace_add_failed");
      return DEe(g, "add marketplace");
    }
  })();
  u.catch(() => {}), s.render(e(Vr, {
    fallback: e(n, {
      children: "Adding marketplace\u2026"
    }),
    children: e(ve, {
      promise: u
    })
  })), await s.waitUntilExit(), await Io(0);
}

function ce(s) {
  return /^[A-Za-z0-9._/\\:~-]{1,200}$/.test(s) ? s : Xl(kt(s, 4096), {
    head: 120,
    tail: 80
  }) || "\u201c\u201d";
}

function Ae(s) {
  return s === ST || /^[A-Za-z0-9._/\\:~@%+=&?,*-]{1,200}$/.test(s) ? s : ce(s);
}

async function GVs(s, o, a) {
  if (o.cowork) qG(!0);
  let p;
  try {
    p = await qd(a);
  } catch (A) {
    return await Bt("cli_marketplace_list", "cli_marketplace_list_load_failed"), await zF(), 
    DEe(A, "list marketplaces");
  }
  let u = Object.keys(p), g = await bKe().catch(() => null), {available: m, hosted: h} = SKe(g, p), R = g?.browseOnly ?? [], P = await fQ(), v = new Map;
  for (let A of u) {
    let O = p[A]?.source;
    if (W2(O)) v.set(A, (await Hye(A, O, {
      mode: "cache-only",
      credentials: void 0
    })).status);
  }
  let y = await uR(), T = y === "off" && !u.includes(mn);
  if (o.json) {
    let E = u.filter(D => {
      let U = p[D]?.source;
      return !(U && wf(U));
    }).map(D => {
      let U = p[D], C = U?.source, M = C?.source === "github" || C?.source === "git" ? C.ref : void 0;
      return {
        name: D,
        source: C?.source,
        ...C?.source === "github" && {
          repo: C.repo
        },
        ...C?.source === "git" && {
          url: C.url
        },
        ...C?.source === "url" && {
          url: C.url
        },
        ...C?.source === "directory" && {
          path: C.path
        },
        ...C?.source === "file" && {
          path: C.path
        },
        ...M && {
          ref: M
        },
        ...C?.source === "claudeai" ? {
          marketplaceId: C.marketplaceId,
          organizationUuid: C.organizationUuid,
          ...P[D]?.scope !== void 0 && {
            scope: P[D]?.scope
          },
          status: v.get(D)?.kind
        } : {
          installLocation: U?.installLocation
        }
      };
    }).sort((D, U) => D.name < U.name ? -1 : D.name > U.name ? 1 : 0);
    await op(se(E) + `\n`), await Wr("cli_marketplace_list");
    return;
  }
  let H = !1, k = p[mn];
  if (y === "on" && k !== void 0 && wf(k.source) && vdt(void 0)) {
    let A = await Jv(mn, a, {
      registryEntry: k
    });
    H = A !== null && (tE().catalogEntryNames?.size ?? 0) > A.plugins.length;
  }
  Re(p);
  let N;
  if (u.length === 0 && !T && m.length === 0 && h.length === 0 && R.length === 0) N = e(n, {
    children: "No marketplaces configured"
  }); else {
    let A = u.length > 0 || T ? [ "Configured marketplaces:", "" ] : [ "No marketplaces configured", "" ];
    if (T) A.push(`  ${te.pointer} ${mn}`, `    Source: Built in (${br}) \u2014 off`, `    Turn it back on: claude plugin marketplace add ${mn}`, "");
    if ((k !== void 0 && wf(k.source) ? [ mn, ...u.filter(E => E !== mn) ] : u).forEach(E => {
      let D = p[E], U = zC(E);
      if (A.push(`  ${te.pointer} ${U}`), U !== E) {
        let C = U1(E);
        if (C || N5(E)) A.push(`    Shown in quotes: the name looks like one of Anthropic's own, and is not.${C ? ` In a command, type: ${E}` : ""}`);
      }
      if (D?.source) {
        let C = D.source;
        if (C.source === "github") {
          let M = C.ref ? `@${ce(C.ref)}` : "";
          A.push(`    Source: GitHub (${ce(C.repo)}${M})`);
        } else if (C.source === "git") {
          let M = C.ref ? `@${ce(C.ref)}` : "";
          A.push(`    Source: Git (${Ae(SAt(C.url))}${M})`);
        } else if (C.source === "url") A.push(`    Source: URL (${Ae(SAt(C.url))})`); else if (C.source === "directory") A.push(`    Source: ${y !== "unavailable" ? "Folder" : "Directory"} (${ce(C.path)})`); else if (C.source === "file") A.push(`    Source: File (${ce(C.path)})`); else if (C.source === "pluginDirectory") A.push(`    Source: Built in (${br})${y === "blocked" ? " \u2014 blocked by your organization" : H ? " \u2014 some plugins hidden by your organization's policy" : ""}`); else if (C.source === "claudeai") {
          let M = v.get(E), B = M === void 0 ? void 0 : crt(M);
          A.push(`    Source: ${nRn(P[E])}${B === void 0 ? "" : ` \u2014 ${B}`}`);
        }
      }
      if (D !== void 0 && $Q(E, D) && N5(E)) A.push(...cho(E, {
        declaredInSettings: D.source.source === "settings"
      }).map(C => `    ${C}`));
      A.push("");
    }), m.length > 0 || h.length > 0 || R.length > 0) A.push("From claude.ai:", "");
    for (let E of m) A.push(`  ${te.pointer} ${E.name} (available from claude.ai${E.scope ? `, ${E.scope}` : ""} \u2014 not added)`), 
    A.push(`    Source: ${E.source.source === "github" ? "GitHub" : "Git"} (${C0e(E.source)})`), 
    A.push("");
    for (let E of h) A.push(`  ${te.pointer} ${Tkt(E)} \u2014 hosted on claude.ai, ${pAe(E.scope)} \xb7 not added`), 
    A.push(`    Add: claude plugin marketplace add --claudeai ${U1(E.name) ? E.name : "<name>"}`), 
    A.push("");
    for (let E of R) A.push(`  ${te.pointer} ${drt(E)} (browse on claude.ai)`), A.push("");
    N = e(n, {
      children: ie(A)
    });
  }
  let K = await s();
  await xI(K, N), await Wr("cli_marketplace_list");
}

async function VVs(s, o, a, p) {
  if (a.cowork) qG(!0);
  let u;
  if (a.scope !== void 0) {
    let y = a.scope;
    if (y !== "user" && y !== "project" && y !== "local") return ln(`${te.cross} Invalid scope '${y}'. Use: user, project, or local`);
    u = JT(y);
  }
  let g = gk(o) ? await uR() : void 0, m;
  try {
    if (g === "blocked" && xH(o) && !Cre(await qd(p)).some(({name: y}) => xH(y))) {
      await xI(s, e(Se, {})), await Wr("cli_marketplace_remove");
      return;
    }
    if (m = await Sqe(o, u, p), gd(p), m.kind !== "plugin-directory-built-in") i("tengu_marketplace_removed", {
      marketplace_name: KCe(o),
      _PROTO_marketplace_name: o,
      is_official_marketplace: Pl(o)
    });
  } catch (y) {
    return await Bt("cli_marketplace_remove", "cli_marketplace_remove_failed"), await zF(), 
    we(Ne(y, 2e3), "remove marketplace", a.json ? {
      command: "marketplace-remove",
      marketplace: o
    } : void 0, y);
  }
  if (await Wr("cli_marketplace_remove"), m.kind === "ignored-plugin-directory-name-entry-removed") {
    let y = m.removedNames.map(H => `${te.tick} ${Fut(H, g !== void 0 && g !== "unavailable")}`), T = Zse(m.disabledPluginIds, m.disabledReason);
    if (T !== null) y.push(T);
    await xI(s, e(n, {
      children: ie(y)
    }));
    return;
  }
  if (m.kind === "plugin-directory-built-in") {
    let y = await uR();
    if (y === "blocked") {
      await xI(s, e(Se, {}));
      return;
    }
    if (g === "on" && y === "off") VCe({
      enabled: !1,
      surface: "cli"
    });
    await xI(s, r(n, {
      children: [ te.tick, " ", br, " is off. Plugins you installed from it stay installed and keep updating. Turn it back on: claude plugin marketplace add", " ", mn ]
    }));
    return;
  }
  let h = m.kind === "removed" ? m.removedPluginIds : [], R = `Successfully removed marketplace: ${Bn(o)}${a.scope ? ` (from ${a.scope} settings)` : ""}`, P = h.length > 0 ? [ `Also uninstalled ${h.length} ${I(h.length, "plugin")} from this marketplace:`, ...h.map(y => `  ${y}`), "The removal also deletes their saved options, secrets and data where it can.", "To use a plugin again, add the marketplace back and reinstall the plugin." ] : [];
  if (a.json) {
    await le({
      command: "marketplace-remove",
      outcome: "ok",
      marketplace: o,
      message: Ad([ R, ...P ].join(`\n`))
    });
    return;
  }
  let v = [ `${te.tick} ${R}`, ...P ];
  await xI(s, e(n, {
    children: ie(v)
  }));
}

function Se() {
  let s = w(1), o;
  if (s[0] === S) o = e(n, {
    children: Enn(xN())
  }), s[0] = o; else o = s[0];
  return o;
}

function Fe(s) {
  let u = w(11), {promise: o} = s, {messages: a, summary: p} = Hr(o), g, m, h;
  if (u[0] !== a || u[1] !== p) {
    let R = [ ...a, p ];
    m = RI;
    g = n;
    h = ie(R);
    u[0] = a, u[1] = p, u[2] = g, u[3] = m, u[4] = h;
  } else g = u[2], m = u[3], h = u[4];
  let P;
  if (u[5] !== g || u[6] !== h) P = e(g, {
    children: h
  }), u[5] = g, u[6] = h, u[7] = P; else P = u[7];
  let v;
  if (u[8] !== m || u[9] !== P) v = e(m, {
    children: P
  }), u[8] = m, u[9] = P, u[10] = v; else v = u[10];
  return v;
}

async function KVs(s, o, a, p) {
  if (a.json && !o) return ln(`${te.cross} --json needs a marketplace name, for example: claude plugin marketplace update <name> --json`);
  if (a.cowork) qG(!0);
  let u = o !== void 0 && xH(o) ? mn : o, g, m = 0, h;
  if (u) {
    g = `Updating marketplace: ${u}...`;
    let R = [], P = `Successfully updated marketplace: ${u}`;
    if (h = sV(u, p, v => {
      R.push(v);
    }).then(async () => (gd(p), await Vs("tengu_marketplace_updated", {
      marketplace_name: KCe(u),
      _PROTO_marketplace_name: u,
      is_official_marketplace: Pl(u)
    }), await Wr("cli_marketplace_update"), {
      messages: R,
      summary: `${te.tick} ${P}`
    })).catch(async v => (await ue("cli_marketplace_update", v, "cli_marketplace_update_failed"), 
    we(v, "update marketplace(s)", a.json ? {
      command: "marketplace-update",
      marketplace: o
    } : void 0))), a.json) {
      await h, await le({
        command: "marketplace-update",
        outcome: "ok",
        marketplace: o,
        message: Ad([ ...R, P ].join(`\n`))
      }), await Io(0);
      return;
    }
  } else {
    let R;
    try {
      R = await qd(p);
    } catch (v) {
      return await ue("cli_marketplace_update", v, "cli_marketplace_update_load_failed"), 
      DEe(v, "update marketplace(s)");
    }
    let P = Object.keys(R);
    if (P.length === 0) return await xI(s, e(n, {
      children: "No marketplaces configured"
    })), await Wr("cli_marketplace_update"), Io(0);
    g = "Updating marketplaces...", h = Kas(p).then(async ({policyRefused: v, failed: y, attempted: T, builtInSkipped: H}) => {
      if (m = y.length > 0 ? 1 : 0, gd(p), await Vs("tengu_marketplace_updated_all", {
        count: P.length,
        attempted: T,
        refreshed: T - v.length - y.length,
        policy_refused: v.length,
        failed: y.length,
        built_in_skipped: H.length
      }), y.length > 0) await Wa("cli_marketplace_update", "marketplace_refresh_failed"); else if (v.length > 0) await Wa("cli_marketplace_update", "command_source_refused"); else await (H.length > 0 ? Wa("cli_marketplace_update", "built_in_directory_skipped") : Wr("cli_marketplace_update"));
      return en(T, v, y, P.length - T - H.length, H);
    }).catch(async v => (await ue("cli_marketplace_update", v, "cli_marketplace_update_failed"), 
    DEe(v, "update marketplace(s)")));
  }
  s.render(e(Vr, {
    fallback: e(n, {
      children: g
    }),
    children: e(Fe, {
      promise: h
    })
  })), await s.waitUntilExit(), await Io(m);
}

function xe(s) {
  let p = w(4), {promise: o} = s, a = Hr(o), u;
  if (p[0] !== a) u = Ad(a), p[0] = a, p[1] = u; else u = p[1];
  let g;
  if (p[2] !== u) g = e(RI, {
    children: r(n, {
      children: [ te.tick, " ", u ]
    })
  }), p[2] = u, p[3] = g; else g = p[3];
  return g;
}

function Ue(s) {
  return kte.some(o => o === s);
}

function PFt(s) {
  let o = s.scope || "user";
  if (s.cowork && o !== "user") ln("--cowork can only be used with user scope");
  if (!Ue(o)) ln(`Invalid scope: ${o}. Must be one of: ${kte.join(", ")}.`);
  return o;
}

function Be(s) {
  let o;
  if (s.scope) {
    if (!Ue(s.scope)) ln(`Invalid scope "${s.scope}". Valid scopes: ${kte.join(", ")}`);
    o = s.scope;
  }
  if (s.cowork && o !== void 0 && o !== "user") ln("--cowork can only be used with user scope");
  if (s.cowork && o === void 0) o = "user";
  return o;
}

function me(s, o, a) {
  let {name: p, marketplace: u} = _Z(o);
  i(s, {
    _PROTO_plugin_name: p,
    ...u && {
      _PROTO_marketplace_name: u
    },
    ...a !== void 0 && {
      scope: a
    }
  });
}

async function C0r(s, o, a, p) {
  if (a.cowork) qG(!0);
  let u = PFt(a);
  if (me("tengu_plugin_install_command", o, c(u)), !a.json) Re(await Gl(p));
  let g, m = U => {
    g = U;
  }, h = async (U, C) => {
    if (a.json) await Kme({
      command: "install",
      outcome: "failed",
      plugin: o,
      scope: u,
      message: C,
      failureCode: U,
      shownCommand: g && I0r(g)
    });
  }, R, P, v = U => {
    if (R) VWe(R.outcome);
    return pWe(U, "install", o, p, a.json ? {
      scope: u,
      shownCommand: g
    } : void 0);
  };
  if (a.replace && !kn(o).marketplace) return v(new mte(v$r(), {
    failureCode: "replace_needs_full_id"
  }));
  let y = await N3(p).catch(v) !== void 0, T = y ? void 0 : await tFo(o, {
    yes: a.yes,
    acceptCommand: a.acceptCommand,
    onShown: m,
    scope: u,
    onMarketplaceRefreshResult: U => {
      R = U;
    },
    onResolvedMarketplace: U => {
      P = U;
    }
  }, p).catch(v);
  if (T?.kind === "accepted") g = void 0;
  if (T?.kind === "declined") {
    if (R) VWe(R.outcome);
    if (f("cli_plugin_install", "command_source_declined"), a.json) await h("command_source_declined", "Aborted."); else await xI(await s(), e(n, {
      children: "Aborted."
    }));
    await Qn(1);
    return;
  }
  let H = T?.grantKey, k = y ? null : await eFo(o, {
    yes: a.yes,
    acceptCommand: a.acceptCommand,
    onShown: m,
    scope: u,
    resolvedMarketplace: P
  }, p).catch(v);
  if (k !== null && k !== "declined" && k !== "unconfirmed") g = void 0;
  if (k === "declined" || k === "unconfirmed") {
    if (f("cli_plugin_install", k === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed"), 
    R) VWe(R.outcome);
    if (a.json) await h(k === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed", "Aborted \u2014 the command was not run."); else await xI(await s(), e(n, {
      children: "Aborted \u2014 the command was not run."
    }));
    await Qn(1);
    return;
  }
  let {name: N, marketplace: K} = kn(o), A = T?.kind === "accepted" || k !== null, O = a.acceptCommand !== void 0 && A && K === void 0 && N && P !== void 0 ? `${N}@${P}` : void 0, E = nFo(o, u, a.config, H, y ? void 0 : k, p, R, {
    json: a.json,
    shownCommand: g,
    resolvedPlugin: O,
    replaceInstalledCopy: a.replace,
    npmRegistry: a.registry
  }).then(async U => (await Wr("cli_plugin_install"), U));
  if (a.json) {
    await E, await Qn(0);
    return;
  }
  let D = await s();
  D.render(e(Vr, {
    fallback: e(n, {
      children: Bn(`Installing plugin "${o}"...`)
    }),
    children: e(xe, {
      promise: E
    })
  })), await D.waitUntilExit(), await Qn(0);
}

async function qVs(s, o, a, p) {
  if (a.json && a.prune) ln("--json cannot be used with --prune");
  if (a.cowork) qG(!0);
  let u = PFt(a);
  me("tengu_plugin_uninstall_command", o, c(u));
  let g = await rFo(o, u, a.keepData, a.prune, a.yes, p, {
    json: a.json
  });
  if (!a.json) await xI(await s(), e(n, {
    children: Ad(a.prune ? g : `${te.tick} ${g}`)
  }));
  await Wr("cli_plugin_uninstall"), await Io(0);
}

async function YVs(s, o, a) {
  if (o.cowork) qG(!0);
  let p = PFt(o);
  i("tengu_plugin_prune_command", {
    scope: c(p),
    dry_run: o.dryRun ?? !1
  });
  let u = await oFo(p, {
    dryRun: o.dryRun,
    yes: o.yes
  }, a);
  await xI(s, e(n, {
    children: Ad(u)
  })), await Wr("cli_plugin_prune"), await Io(0);
}

async function XVs(s, o, a, p) {
  if (a.cowork) qG(!0);
  let u = Be(a);
  me("tengu_plugin_enable_command", o, c(u ?? "auto"));
  let g, m = !1, h = o;
  try {
    await _Ke(), IFt();
    let P = await OFt(o, a.json, p, {
      unlessNamedInSettings: !0
    });
    if (m = P.aliased, h = P.plugin, g = await wyt(P.plugin, u, p), !g.success) throw new mte(g.message, g);
  } catch (P) {
    return await pWe(P, "enable", o, p, a.json ? {
      scope: u
    } : void 0, m ? h : void 0);
  }
  let R = Wcn(g.message, g.scope ?? u);
  if (a.json) await Kme({
    command: "enable",
    outcome: "ok",
    plugin: o,
    pluginId: g.pluginId,
    scope: g.scope ?? u,
    message: Ad(R)
  }); else await xI(await s(), r(n, {
    children: [ te.tick, " ", Ad(R) ]
  }));
  await Vs("tengu_plugin_enabled_cli", {
    ...await ige(g.pluginId || h, tp(), p),
    scope: pe(g.scope),
    ...m ? {
      aliased_id: !0
    } : {}
  }), await Wr("cli_plugin_enable"), await Io(0);
}

async function JVs(s, o, a, p) {
  if (a.all && o) ln("Cannot use --all with a specific plugin");
  if (!a.all && !o) ln("Please specify a plugin name or use --all to disable all plugins");
  if (a.cowork) qG(!0);
  let u;
  if (a.all) {
    if (a.scope) ln("Cannot use --scope with --all");
    i("tengu_plugin_disable_command", {}), IFt(), u = await iFo(p, {
      json: a.json
    });
  } else {
    let g = Be(a);
    me("tengu_plugin_disable_command", o, c(g ?? "auto")), await _Ke(), IFt(), u = await sFo(o, g, p, {
      json: a.json
    });
  }
  if (!a.json) await xI(await s(), e(n, {
    children: Ad(u)
  }));
  await Wr("cli_plugin_disable"), await Io(0);
}

async function QVs(s, o, a) {
  if (o.cowork) qG(!0);
  let p = o.cowork ? "user" : void 0;
  if (o.scope) {
    if (!eBt.includes(o.scope)) ln(`Invalid scope "${o.scope}". Valid scopes: ${eBt.join(", ")}`);
    p = o.scope;
  }
  if (o.cowork && p !== "user") ln("--cowork can only be used with user scope");
  if (me("tengu_plugin_update_command", s), !o.json) Re(await Gl(a));
  await aFo(s, p, {
    yes: o.yes,
    json: o.json,
    acceptCommand: o.acceptCommand
  }, a);
}

async function ZVs(s, o, a, p, u) {
  if (a.cowork) qG(!0);
  IFt(), i("tengu_plugin_details_command", {});
  let {getPluginInventory: g, computePluginTokenCost: m, scaleCharsToTokens: h} = await import("./chunk-r7fka3r8.js"), {formatTokenEstimate: R} = await import("./chunk-79cq5we5.js");
  await _Ke();
  let {enabled: P, disabled: v} = await CS(z() ? p : void 0, u), y = _Z((await OFt(o, a.json, p)).plugin), T = y.marketplace ? Ann(y.name, y.marketplace) : y.name, H = rf(y.marketplace) ? L => fr(L) === fr(T) : L => vm(L, T), k = [ ...P, ...v ].find(L => H(y.marketplace ? L.source : L.name));
  if (!k) {
    let L = await uR() !== "unavailable" ? Object.entries((await iV(p)).plugins).find(([he, ke]) => {
      let fe = kn(he);
      return fe.marketplace === mn && vm(y.marketplace ? he : fe.name, T) && ke.some(rP);
    })?.[0] : void 0, G = L_(), V = L !== void 0 && G !== null ? kn(L).name : void 0, Z = L !== void 0 && G === null && await n3t(kn(L).name, p) === null ? kn(L).name : void 0, Q = V !== void 0 ? "policy_blocked" : Z !== void 0 ? "directory_catalog_missing" : "not_found", q = V !== void 0 && G !== null ? `${te.cross} ${TOt(V, G)}` : Z !== void 0 ? `${te.cross} Details for "${ze(Z)}" are not available: ${cpr}. ${kOt}` : `Plugin "${ze(o)}" not found. Run \`claude plugin list\` to see installed plugins, or pass --plugin-dir <path> to load one from disk.`;
    return je(s, a.json, q, Q);
  }
  let N = Hi(k.source) ?? Ac, K = a.models?.length ? a.models : [ Qe() ], A;
  try {
    let L = await g(k, N);
    A = await m(L, K, k.name);
  } catch (L) {
    let G = L instanceof upr;
    if (!G) d(Je(j(L), "plugin details: inventory/token-cost failed"));
    let V = G ? "directory_catalog_missing" : "inventory_failed", Z = G ? `${te.cross} Details for "${ze(k.name)}" are not available: ${cpr}. ${kOt}` : `${te.cross} Could not load details for "${ze(k.name)}": ${hT(L)}`;
    return je(s, a.json, Z, V);
  }
  let {tokens: O, inventory: E} = A;
  if (a.json) {
    let L = ({path: G, ...V}) => V;
    await op(se({
      plugin: k.name,
      version: k.manifest.version,
      source: k.source,
      sha: k.sha ?? null,
      tokens: O,
      components: {
        ...E,
        commands: E.commands.map(L),
        agents: E.agents.map(L),
        skills: E.skills.map(L)
      }
    }) + `\n`), await Wr("cli_plugin_details");
    return;
  }
  let D = [], U = Im(k), C = U === k.name ? k.name : `${U} (${k.name})`;
  if (D.push(`${C} ${k.manifest.version ?? ""}`.trimEnd()), k.manifest.description) {
    let [L, ...G] = k.manifest.description.split(`\n`);
    D.push(`  Description: ${L}`);
    for (let V of G) D.push(`      ${V}`);
  }
  D.push(`  Source: ${k.source}`), D.push(""), D.push("Component inventory");
  let M = [ [ "Skills", [ ...E.skills, ...E.commands ].map(L => L.name).sort(), "" ], [ "Agents", E.agents.map(L => L.name), "" ], [ "Hooks", E.hooks, "  (harness-only \u2014 no model context cost)" ], [ "MCP servers", E.mcpServers, "  (tool schemas resolved at runtime; not counted)" ], [ "LSP servers", E.lspServers, "  (out-of-process tooling; no model context cost)" ] ];
  for (let [L, G, V] of M) D.push(`  ${L} (${G.length})${G.length > 0 ? `  ${G.join(", ")}` : ""}${G.length > 0 ? V : ""}`);
  D.push("");
  let B = [ ...E.skills, ...E.agents, ...E.commands ].filter(L => L.chars != null), J = {
    always_on: B.reduce((L, G) => L + G.chars.always_on, 0),
    on_invoke: B.reduce((L, G) => L + G.chars.on_invoke, 0)
  }, X = O[K[0]], ne = X?.always_on ?? h(J.always_on, J.always_on, void 0);
  if (D.push("Projected token cost"), D.push(`  Always-on:   ~${ne.toLocaleString()} tok   added to every session`), 
  B.length > 0) {
    D.push(""), D.push("Per-component (rounded)");
    let L = Math.max(...B.map(G => G.name.length), 9);
    D.push(`  ${"component".padEnd(L)}  ${"always-on".padStart(9)}  ${"on-invoke".padStart(9)}`);
    for (let G of B) {
      let V = h(G.chars.always_on, J.always_on, X?.always_on), Z = h(G.chars.on_invoke, J.on_invoke, X?.on_invoke);
      D.push(`  ${G.name.padEnd(L)}  ${R(V).padStart(9)}  ${R(Z).padStart(9)}`);
    }
    D.push(""), D.push("  On-invoke cost is paid each time a skill or agent fires."), 
    D.push("  Token counts are estimates and may differ from actual usage.");
  }
  let ee = await s();
  if (await xI(ee, e(n, {
    children: ie(D)
  })), X) await Wr("cli_plugin_details"); else await Wa("cli_plugin_details", "count_tokens_unreachable");
}

async function je(s, o, a, p) {
  let u = Ad(a);
  if (o) qm(u); else await xI(await s(), e(n, {
    children: u
  }));
  return await Bt("cli_plugin_details", p), o ? Xo() : Io(1);
}

function ie(s) {
  return s.map(Bn).join(`\n`);
}

function Re(s) {
  for (let {message: o} of Cre(s)) console.error(`${te.warning} ${o}`);
}

function se(s) {
  return dD(_(s, null, 2));
}

function $e(s, o) {
  let a = m => vb(m.source) === s, p = o.plugins.filter(a), u = o.errors.filter(a), g = o.warnings.filter(a);
  return {
    plugins: p,
    errors: u,
    warnings: g,
    standaloneErrorRows: u.filter(m => !p.some(h => r3n(m, h))),
    standaloneWarningRows: g.filter(m => !p.some(h => o3n(m, h)))
  };
}

function Ge(s) {
  return s.plugins.length > 0 || s.standaloneErrorRows.length > 0 || s.standaloneWarningRows.length > 0;
}

function hn(s) {
  if (!Ge(s)) return [];
  let {standaloneErrorRows: o, standaloneWarningRows: a} = s, p = [ s.header, "" ];
  for (let u of a) p.push(`  ${te.warning} ${z7(u)}`, "");
  for (let u of s.plugins) {
    let g = s.errors.filter(P => r3n(P, u)), m = s.warnings.filter(P => o3n(P, u)), h = u.enabled !== !1 && Lz(u.source, u.installationPreference) ? " \xb7 required by your org" : "", R = (u.enabled === !1 ? `${te.cross} disabled` : g.length > 0 ? `${te.cross} loaded with errors` : `${te.tick} loaded`) + h;
    if (p.push(`  ${te.pointer} ${u.source}`), p.push(`    Version: ${u.manifest.version ?? "unknown"}`), 
    s.showScope) p.push(`    Scope: ${s.scopeOf(u)}`);
    p.push(`    Path: ${s.pathOf(u)}`), p.push(`    Status: ${R}`);
    for (let P of g) p.push(`    Error: ${NS(P)}`);
    for (let P of m) p.push(`    Note: ${z7(P)}`);
    p.push("");
  }
  for (let u of o) p.push(`  ${te.pointer} ${u.source}: ${te.cross} ${NS(u)}`, "");
  return p;
}

function Me({path: s, message: o}) {
  return {
    path: s,
    message: o,
    code: null
  };
}

function Le(s) {
  return {
    file: s.filePath,
    type: s.fileType,
    errors: s.errors.map(Me),
    warnings: s.warnings.map(Me),
    notes: s.notes ?? [],
    gatingHooks: (s.gatingHooks ?? []).map(o => ({
      module: o.module,
      pattern: o.pattern,
      hook: o.hook,
      hasCatch: o.hasCatch
    }))
  };
}

function wn(s, o, a) {
  return {
    success: o.success,
    strict: o.strict,
    target: s.resolvedPath,
    manifest: s.manifest ? Le(s.manifest) : null,
    contents: s.contents.map(Le),
    advice: a
  };
}

function de(s) {
  let o = s, a = N => {
    let K = o[N];
    return typeof K === "string" ? K : void 0;
  }, p = {
    type: s.type
  }, u = a("plugin") ?? a("pluginId");
  if (u !== void 0) p.plugin = u;
  let g = a("marketplace");
  if (g !== void 0) p.marketplace = g;
  let m = a("dependency");
  if (m !== void 0) p.dependency = m;
  let h = a("serverName");
  if (h !== void 0) p.serverName = h;
  let R = a("component");
  if (R !== void 0) p.component = R;
  let P = a("manifestPath") ?? a("path") ?? a("folderPath") ?? a("hookPath") ?? a("mcpbPath") ?? a("installPath") ?? a("filePath") ?? a("heldAt");
  if (P !== void 0) p.path = P;
  let v = a("url") ?? a("gitUrl");
  if (v !== void 0) p.url = v;
  if (s.type === "marketplace-not-found" && s.registrationHidden !== void 0) p.registrationHidden = s.registrationHidden;
  let y = a("duplicateOf") ?? a("activeServer"), T = y?.startsWith("plugin:") ? y.split(":")[1] : void 0, H = o.blockedBy, k = a("shadowedBy") ?? a("renamedTo") ?? T ?? (Array.isArray(H) && H.every(N => typeof N === "string") ? H.join(", ") : void 0);
  if (k !== void 0) p.related = k;
  return p;
}

async function _n(s, o) {
  let a = [];
  for (let p of s.plugins) {
    let u = p.mcpServers || await srt(p, void 0, o, void 0, {
      readOnlyListing: !0
    }), g = s.errors.filter(P => r3n(P, p)), m = s.warnings.filter(P => o3n(P, p)), h = g.map(NS), R = m.map(z7);
    a.push({
      id: p.source,
      version: p.manifest.version ?? "unknown",
      scope: s.scopeOf(p),
      enabled: p.enabled !== !1,
      installPath: p.path,
      mcpServers: u && Object.keys(u).length > 0 ? u : void 0,
      errors: h.length > 0 ? h : void 0,
      notes: R.length > 0 ? R : void 0,
      errorDetails: g.length > 0 ? g.map(de) : void 0,
      noteDetails: m.length > 0 ? m.map(de) : void 0,
      hasUserConfig: He(p)
    });
  }
  for (let p of s.standaloneErrorRows) a.push({
    id: p.source,
    version: "unknown",
    scope: s.standaloneErrorScope,
    enabled: !1,
    installPath: ("path" in p ? p.path : void 0) ?? "",
    errors: [ NS(p) ],
    errorDetails: [ de(p) ]
  });
  for (let p of s.standaloneWarningRows) a.push({
    id: p.source,
    version: "unknown",
    scope: s.standaloneWarningScope,
    enabled: p.type === "synced-plugin-shadowed",
    installPath: "",
    notes: [ z7(p) ],
    noteDetails: [ de(p) ]
  });
  return a;
}

function He(s) {
  let o = s?.manifest.userConfig;
  return o && Object.keys(o).length > 0 ? !0 : void 0;
}

function ge(s, o) {
  return Bn(o?.title || s);
}

class oe extends x {
  option;
  constructor(s, o, a) {
    super(s, o);
    this.option = a;
  }
}

function yn(s) {
  if (typeof s !== "object" || s === null || Array.isArray(s)) return;
  let o = Object.create(null);
  for (let [a, p] of Object.entries(s)) {
    if (typeof p !== "string") return;
    o[a] = p;
  }
  return o;
}

var $n = 262144, Pn = 65536;

async function bn() {
  process.stdin.setEncoding("utf8");
  let s = "", o = 0;
  for await (let a of adn(process.stdin)) {
    if (o += Buffer.byteLength(a, "utf8"), o > $n) return;
    s += a;
  }
  return s;
}

async function Sn(s, o, a, p) {
  let u = s.manifest.userConfig ?? {}, g = Object.keys(o).filter(v => !Object.hasOwn(u, v));
  if (g.length > 0) {
    let v = Object.keys(u).map(Bn);
    throw new oe(`This plugin has no ${I(g.length, "option")} ${g.map(y => `"${Bn(y)}"`).join(", ")}.` + (v.length > 0 ? ` Known options: ${v.join(", ")}.` : ""), "plugin configure: option not declared in userConfig");
  }
  let m = sm(s), h = await lP(m, p);
  for (let [v, y] of Object.entries(o)) {
    if (Buffer.byteLength(y, "utf8") > Pn) throw new oe(`${ge(v, u[v])} is too long (over 64 KB).`, "plugin configure: option value over the size cap", v);
    if (/[\r\n]/.test(y)) throw new oe(`${ge(v, u[v])} must be a single line.`, "plugin configure: option value contains a line break", v);
    let T = u[v], H = y.trim(), k = ko(h, v);
    if (H === "" && T?.required === !0 && !(T.sensitive === !0 && k !== void 0 && k !== "")) throw new oe(`${ge(v, T)} is required but not provided`, "plugin configure: required option blank", v);
    if (T?.type === "boolean" && H !== "" && j2e(H) === void 0) throw new oe(`${ge(v, T)} must be true or false (or 1/0, yes/no, on/off).`, "plugin configure: option value is not a boolean", v);
    if (T?.type === "number" && H !== "" && LVt(H, T) === void 0) throw new oe(`${ge(v, T)}: ${DVt(T)}`, "plugin configure: option value is not a number the field takes", v);
  }
  let R = Z6n(Object.keys(o), o, u, h), P = Object.keys(R);
  if (P.length === 0) return [];
  for (let v of P) {
    let y = n8({
      [v]: R[v]
    }, {
      [v]: u[v]
    });
    if (!y.valid) throw new oe(Bn(y.errors.join("; ")), "plugin configure: value rejected by the userConfig schema", v);
  }
  return await UCe(m, R, u, a, p), P;
}

function Pe(s, o) {
  return s.reduce((a, p) => a.split(p).join("\u2026"), o);
}

async function eKs(s, o, a, p) {
  if (o.cowork) qG(!0);
  IFt(), i("tengu_plugin_configure_command", {}), await _Ke();
  let {enabled: u, disabled: g} = await CS(a, p), m = mit([ ...u, ...g ], s);
  if (!m) return await Bt("cli_plugin_configure", "not_found"), Xo(Ad(`No installed plugin has the id "${Bn(s)}". Use its full id (name@marketplace), as \`claude plugin list${o.cowork ? " --cowork" : ""}\` shows it.`));
  let h = sm(m), R = m.manifest.userConfig ?? {}, P = Im(m), v = "Example: claude plugin configure <plugin> --values-stdin < values.json";
  if (o.valuesStdin) {
    if (process.stdin.isTTY) return await Bt("cli_plugin_configure", "invalid_stdin"), 
    Xo(Ad(`No option values were piped in. ${v}`));
    let O, E = !1;
    try {
      let B = await bn();
      E = B === void 0, O = B === void 0 ? void 0 : Y(B);
    } catch {
      O = void 0;
    }
    let D = yn(O);
    if (D === void 0) return await Bt("cli_plugin_configure", "invalid_stdin"), Xo(Ad(E ? "The input on stdin is over the 256 KB limit." : `The input on stdin isn't a JSON object of strings. ${v}`));
    let U = Object.entries(D).filter(([B]) => Object.hasOwn(R, B) && R[B]?.sensitive).flatMap(([, B]) => [ B, B.trim() ]).filter(B => B !== "").sort((B, J) => J.length - B.length), C;
    try {
      C = await Sn(m, D, a, p);
    } catch (B) {
      if (B instanceof oe) await Wa("cli_plugin_configure", "value_refused"); else await Bt("cli_plugin_configure", "save_failed");
      if (o.json && B instanceof oe) {
        let J = {
          pluginId: h,
          displayName: P,
          refused: {
            option: B.option,
            message: Pe(U, B.message)
          }
        };
        await op(se(J) + `\n`);
      }
      return Xo(Ad(Pe(U, `Failed to save configuration: ${l(B)}`)));
    }
    let M;
    try {
      M = Object.keys(await BCe(m, p));
    } catch (B) {
      t(Pe(U, `plugin configure: saved, but the re-read of unset options failed: ${l(B)}`), {
        level: "error"
      });
    }
    if (await Wr("cli_plugin_configure"), o.json) {
      let B = {
        pluginId: h,
        displayName: P,
        saved: C,
        ...M === void 0 ? {} : {
          unconfigured: M
        }
      };
      await op(se(B) + `\n`);
    } else await op((C.length > 0 ? "Configuration saved. Restart Claude Code to apply it." : "No configuration changes.") + `\n`);
    await Io(0);
    return;
  }
  let y, T;
  try {
    y = await lP(h, p), T = Object.keys(await BCe(m, p));
  } catch (O) {
    return await Bt("cli_plugin_configure", "saved_options_read_failed"), Xo(Ad(`Could not read the saved options for "${h}": ${l(O)}`));
  }
  let H = xpe(h).options ?? {}, k = [], N = Object.create(null);
  for (let [O, E] of Object.entries(R)) {
    let D = ko(y, O);
    if (D === void 0 || D === "") continue;
    if (k.push(O), E.type === "boolean") {
      N[O] = D;
      continue;
    }
    let U = Object.hasOwn(H, O) ? H[O] : void 0;
    if (E.sensitive !== !0 && U !== void 0 && U !== "") N[O] = U;
  }
  let K = {};
  for (let [O, E] of Object.entries(R)) {
    let D = pfn(E);
    if (D !== void 0) K[O] = D;
  }
  if (await Wr("cli_plugin_configure"), o.json) {
    let O = {
      pluginId: h,
      displayName: P,
      schema: R,
      inputs: e3n(R, N),
      choices: K,
      configured: k,
      unconfigured: T
    };
    await op(se(O) + `\n`), await Io(0);
    return;
  }
  let A = [];
  if (Object.keys(R).length === 0) A.push(`${P} (${h}) has no options to set.`); else {
    A.push(`Options for ${P} (${h}):`);
    for (let [O, E] of Object.entries(R)) {
      let D = [ E.required ? "required" : "optional", E.sensitive ? "sensitive" : void 0, k.includes(O) ? "set" : "not set" ].filter(Boolean), U = E.title && E.title !== O ? ` \u2014 ${E.title}` : "";
      A.push(`  ${te.pointer} ${O}${U} (${D.join(", ")})`);
    }
    A.push("", "Set values with /plugin configure <plugin> in Claude Code, or pipe a JSON object to `claude plugin configure <plugin> --values-stdin`.");
  }
  await op(ie(A) + `\n`), await Io(0);
}

export { JYn, DEe, UVs, BVs, jVs, WVs, Fcn, zVs, Ucn, GVs, VVs, KVs, PFt, C0r, qVs, YVs, XVs, JVs, QVs, ZVs, eKs };
