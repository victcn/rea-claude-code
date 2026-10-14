// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Lr } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { gw } from "./chunk-sqb9meyh.js";

import { cn } from "./chunk-kawq2919.js";

import { pFt } from "./chunk-z52kmxx4.js";

import { ne, Br, hq, z4n } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { Kw } from "./chunk-ajrjjwfz.js";

import { SPe, MH, nc, ml, lBe, Kpe, ppt, J3e, Yz, An, FPe } from "./chunk-xywp7esx.js";

import { UT } from "./chunk-3x03pnz9.js";

import { qpt, WO, DTo } from "./chunk-s2t7g8m9.js";

import { as } from "./chunk-r276nwd3.js";

import { Gs } from "./chunk-yxennhe9.js";

import { Cxo, jo } from "./chunk-nnrb0acr.js";

import { tLs, fe, nxo, Ysn, cxo, Ek, uxo, Zsn } from "./chunk-dd98x6x7.js";

import { Tv, ain, Oe, FIe } from "./chunk-cjt10y7b.js";

import { IC, V1e, CG } from "./chunk-w4hwgefc.js";

import { e1e, ysn } from "./chunk-qqd24q2y.js";

import { G6e, $1n } from "./chunk-gmq0qwep.js";

import { s, n } from "./chunk-3vw306fv.js";

import { $h, hws } from "./chunk-4v78v8fd.js";

import { wKe, Ats, aRn, EYt, kYt, Jkt, Art, Rrt, ab, CYt, RYt, Jxn, C_e, sno } from "./chunk-84yp45y8.js";

import { bf, O0, D1 } from "./chunk-s82cb921.js";

import { te } from "./chunk-48xcyvwy.js";

import { i1n, a1n, uTs } from "./chunk-bdevabaf.js";

import { vu } from "./chunk-v7qc2kz8.js";

import { znt } from "./chunk-hjph2xzh.js";

import { tKe } from "./chunk-at5r213a.js";

import { Vkn } from "./chunk-hc3mmvmx.js";

import { Yhe } from "./chunk-5yhyhg4z.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { hZe } from "./chunk-n2jwgevn.js";

import { Gn } from "./chunk-bf1mjdzd.js";

import { IXo } from "./chunk-bqcy0wpr.js";

import { D } from "./chunk-hmqkrrtz.js";

function lmn(i) {
  let t = [];
  for (let u of i) {
    let o = typeof u.value === "string" ? u.value : Array.isArray(u.value) ? u.value.join(", ") : null;
    if (o === null || o === "" || o === "none") continue;
    t.push(u.label ? {
      label: u.label,
      value: o
    } : {
      value: o
    });
  }
  return t;
}

function gze(i) {
  let t = i.map(u => u.filter(o => !o.antOnly));
  return t.push(i.flatMap(u => u.filter(o => o.antOnly))), t;
}

var sr = import.meta.require("./chunk-8btszt35.js");

function Vjo() {
  return [];
}

function Kjo() {
  return [];
}

function qjo() {
  return [];
}

function Yjo(i, t = null, u) {
  let o = i?.find(c => c.name === "ide");
  if (t) {
    let c = gw(t.ideType), l = C_e(t.ideType) ? "plugin" : "extension";
    if (t.error) return [ {
      label: "IDE",
      value: r(n, {
        children: [ Gn("error", u)(te.cross), " Error installing ", c, " ", l, ": ", t.error, `\n`, "Please restart your IDE and try again." ]
      })
    } ];
    if (t.installed) if (o && o.type === "connected") if (t.installedVersion !== o.serverInfo?.version) return [ {
      label: "IDE",
      value: `Connected to ${c} ${l} version ${t.installedVersion} (server version: ${o.serverInfo?.version})`
    } ]; else return [ {
      label: "IDE",
      value: `Connected to ${c} ${l} version ${t.installedVersion}`
    } ]; else return [ {
      label: "IDE",
      value: `Installed ${c} ${l}`
    } ];
  } else if (o) {
    let c = sno(o) ?? "IDE";
    if (o.type === "connected") return [ {
      label: "IDE",
      value: `Connected to ${c} extension`
    } ]; else return [ {
      label: "IDE",
      value: `${Gn("error", u)(te.cross)} Not connected to ${c}`
    } ];
  }
  return [];
}

function Xjo(i = [], t) {
  let u = i.filter(l => l.name !== "ide");
  if (!u.length) return [];
  let o = {
    connected: 0,
    cached: 0,
    pending: 0,
    needsAuth: 0,
    disabled: 0,
    failed: 0
  };
  for (let l of u) switch (l.type) {
   case "connected":
    o.connected++;
    break;

   case "cached":
    o.cached++;
    break;

   case "pending":
    o.pending++;
    break;

   case "needs-auth":
    o.needsAuth++;
    break;

   case "disabled":
    o.disabled++;
    break;

   case "failed":
    o.failed++;
    break;

   default:
  }
  let c = [];
  if (o.connected) c.push(Gn("success", t)(`${o.connected} connected`));
  if (o.cached) c.push(Gn("inactive", t)(`${o.cached} cached`));
  if (o.needsAuth) c.push(Gn("warning", t)(`${o.needsAuth} need auth`));
  if (o.pending) c.push(Gn("inactive", t)(`${o.pending} pending`));
  if (o.disabled) c.push(Gn("inactive", t)(`${o.disabled} disabled`));
  if (o.failed) c.push(Gn("error", t)(`${o.failed} failed`));
  return [ {
    label: "MCP servers",
    value: `${c.join(", ")} ${Gn("inactive", t)("\xb7 /mcp")}`
  } ];
}

async function Jjo(i, t, u) {
  if (UT()) return [];
  let o = await ab(i, !1, t, u), c = CYt(o), l = [], d = RYt(o);
  if (d) l.push(`Instruction files will impact performance: ${d.summary.fileCount} files, ${Gs(d.summary.totalChars)} chars in total > ${Gs(d.summary.totalLimitChars)}`);
  let f = Rrt();
  c.forEach(p => {
    let m = as(p.path);
    l.push(`Large ${m} will impact performance (${Gs(p.content.length)} chars > ${Gs(f)})`);
  });
  let g = Jkt(Art(i));
  for (let {path: p, why: m} of g.shown) {
    let v = EYt(m, as(p));
    l.push(r(s, {
      flexDirection: "column",
      flexShrink: 1,
      children: [ e(n, {
        children: v.lead
      }), r(s, {
        flexDirection: "row",
        children: [ e(s, {
          flexShrink: 0,
          marginRight: 1,
          children: e(n, {
            children: v.mark
          })
        }), e(n, {
          bold: !0,
          wrap: "truncate-start",
          children: v.path
        }) ]
      }) ]
    }, p));
  }
  if (g.more > 0) l.push(kYt(g));
  return l;
}

function C(i = "remote") {
  let t = Ysn();
  if (!t) return null;
  return `Enterprise managed settings (${t.map(o => o === "remote" ? i : b(o)).join(" + ")}, merged)`;
}

function Qjo() {
  let i = jo(), t = nxo(), c = [ {
    label: "Setting sources",
    value: i.filter(p => {
      if (p === "policySettings" && t.composes !== "none") return !0;
      let m = fe(p);
      return m !== null && Object.keys(m).length > 0;
    }).map(p => {
      if (p === "policySettings") {
        if (t.composes !== "none") {
          let v = t.composes === "remoteSlot", S = tLs() ? `${v ? "remote " : ""}default settings payload` : v ? "remote helper" : "helper", y = t.mergedOver ? `${S} merged over ${b(t.mergedOver)}` : S;
          return (v ? C(y) : null) ?? `Enterprise managed settings (${y})`;
        }
        let m = Ek();
        if (m === null) return null;
        return C() ?? A(m);
      }
      return Cxo(p);
    }).filter(p => p !== null)
  } ], l = uxo();
  if (l.length > 0) c.push({
    label: "Skipped sources",
    value: l.map(A)
  });
  if ($h()) {
    let p = [ ...hws() ];
    c.push({
      label: "Permission rules",
      value: [ "Managed settings only (allowManagedPermissionRulesOnly)", ...p.length > 0 ? [ `allowed-tools ignored this session: ${p.join(", ")}` ] : [] ]
    });
  }
  let d = wKe();
  if (d && Ats(d)) c.push({
    label: "Managed settings (remote)",
    value: aRn(d)
  });
  let f = i1n();
  if (uTs(f)) c.push({
    label: "Organization policy",
    value: a1n(f)
  });
  let g = IXo();
  if (g !== void 0) c.push({
    label: "Client data",
    value: g
  });
  return c;
}

function Zjo(i) {
  return [ {
    label: "Auto mode server",
    value: Jxn(i) ? "Enabled" : "Disabled"
  } ];
}

function b(i) {
  switch (i) {
   case "helper":
   case "remote":
   case "plist":
    return i;

   case "hklm":
    return "HKLM";

   case "file":
    {
      let {hasBase: t, hasDropIns: u} = cxo();
      if (t && u) return "file + drop-ins";
      return u ? "drop-ins" : "file";
    }

   case "parent":
    return "parent process";

   case "hkcu":
    return "HKCU";
  }
}

function A(i) {
  return `Enterprise managed settings (${b(i)})`;
}

async function eWo() {
  return (await tKe()).filter(t => t.type !== "error").map(t => t.message);
}

async function tWo(i) {
  let t = D1(), u = bf();
  if (!t && !u) return [];
  let o = [];
  if (u) return o.push(`${u} \u2014 nothing will run unwrapped: new background sessions are refused unless a background service that validated an earlier value is still serving them (\`claude daemon status\` shows it)`), 
  o;
  let c = vu();
  if (o.push(`Self-exec: \`${[ c.cmd, ...c.prefixArgs ].join(" ")}\` (CLAUDE_CODE_PROCESS_WRAPPER)`), 
  !await O0()) o.push(`The launcher \`${c.cmd}\` cannot run right now (deleted or not executable) \u2014 new background sessions are refused until it is restored; a background service that validated it earlier keeps serving its existing sessions (\`claude daemon status\`)`);
  let l = await Kw(1, i).catch(() => null);
  if (!l) return o;
  let [{controlRequest: d}, {BG_PROTO: f}] = await Promise.all([ import("./chunk-f8mtyxh2.js"), import("./chunk-m9bmd4hv.js") ]), g = await d({
    proto: f,
    op: "nudge"
  }).catch(() => null), p = g?.ok && g.op === "nudge" ? g.processWrapper ?? "" : l.processWrapper ?? "", m = ne(Br(cn(p)), 200);
  if (l.origin === "service") o.push(`The installed background service predates launcher support and runs outside \`${c.cmd}\`; its sessions are covered, the service process itself is not \u2014 a launcher-aware \`claude daemon install\` will close this`);
  if (p !== t) o.push(`The running background service launches sessions via \`${m || "(no launcher)"}\`, but this session resolves \`${t}\` \u2014 restart it (and your running claude sessions) to converge`);
  return o;
}

async function nWo(i) {
  let t = await znt({
    storageV5: i
  }), u = [], {statusNotices: o, invalidEntries: c} = hZe(Yhe().errors);
  if (c.length > 0) {
    let d = D(c.map(g => g.file)).join(", ");
    u.push(`Found invalid entries in: ${d}.`);
    let f = await Vkn(i);
    if (f === "settings_unknowable" || f === "settings_invalid_key_set") u.push("Transcript retention cleanup is paused until the settings errors above are fixed (cleanupPeriodDays cannot be determined reliably).");
  }
  for (let l of o) u.push(l.message);
  for (let [l, d] of Zsn()) u.push(`${l}\n${d}`);
  if (t.warnings.forEach(l => {
    u.push(l.issue);
  }), t.hasUpdatePermissions === !1) u.push("No write permissions for auto-updates");
  return u;
}

function hze(i) {
  if (!(z() && i !== void 0)) return;
  return (async () => ({
    refreshKnownDead: ml() && await Yz(i)
  }))().catch(() => ({
    refreshKnownDead: !1
  }));
}

function dmn(i) {
  let t = FPe();
  if (!t) return [];
  let u = [];
  if (i !== void 0 && z() ? i.refreshKnownDead : ml() && J3e()) {
    u.push({
      label: "Login",
      value: "Expired \u2014 log in again"
    });
    let p = An();
    if (p?.organizationName && !a.IS_DEMO) u.push({
      label: "Organization",
      value: p.organizationName
    });
    if (p?.emailAddress && !a.IS_DEMO) u.push({
      label: "Email",
      value: p.emailAddress
    });
    return u;
  }
  if (t.subscription) u.push({
    label: "Login method",
    value: `${t.subscription} account`
  });
  let o = " \xb7 not in use", c = t.apiKeySource ?? "none", l = lBe(t.tokenSource ?? "none", c);
  if (t.tokenSource) u.push({
    label: "Auth token",
    value: l.tokenSource === t.tokenSource ? t.tokenSource : `${t.tokenSource}${o}`
  });
  if (t.apiKeySource) u.push({
    label: "API key",
    value: l.apiKey ? t.apiKeySource : `${t.apiKeySource}${o}`
  });
  let d = ppt();
  if (d && Kpe()) u.push({
    label: "apiKeyHelper",
    value: a.IS_DEMO ? "Failing" : `Failing \u2014 last run ${hq(d, z4n)}`
  });
  let f = nc(), g = f && lBe("profile", c).tokenSource === "profile";
  if (f) u.push({
    label: "Profile",
    value: `${ysn()}${g ? "" : o}`
  });
  if (g) {
    let p = e1e();
    if (!a.IS_DEMO) {
      if (p?.organizationName || p?.organizationUuid) u.push({
        label: "Organization",
        value: [ p.organizationName, p.organizationUuid ].filter(Boolean).join(" \xb7 ")
      });
      if (p?.accountEmail) u.push({
        label: "Email",
        value: p.accountEmail
      });
    }
  }
  if (t.organization && !a.IS_DEMO) u.push({
    label: "Organization",
    value: t.organization
  });
  if (t.email && !a.IS_DEMO) u.push({
    label: "Email",
    value: t.email
  });
  return u;
}

function h(i) {
  let t;
  try {
    t = new URL(i);
  } catch {
    t = void 0;
  }
  if (t?.host) {
    if (!t.username && !t.password) return i;
    let c = new URL(t.href);
    return c.username = "***", c.password = "", c.href;
  }
  let u = i.lastIndexOf("@");
  if (u < 0) return i;
  return `${/^[a-z][a-z0-9+.-]*:\/\//i.exec(i)?.[0] ?? ""}***${i.slice(u)}`;
}

function cmn() {
  let i = Oe(), t = [], u = SPe();
  if (u !== void 0) t.push({
    label: "Allowed providers",
    value: u.length === 0 ? "none (managed allowedProviders is empty)" : `${u.map(ain).join(", ")} (managed allowedProviders)`
  });
  if (i !== "firstParty") {
    let l = FIe(), d = l ? `${Tv[i]} + ${Tv[l]}` : Tv[i];
    t.push({
      label: "API provider",
      value: d
    });
  }
  if (i === "firstParty") {
    let l = a.ANTHROPIC_BASE_URL;
    if (l) t.push({
      label: "Anthropic base URL",
      value: h(l)
    });
  } else if (i === "bedrock") {
    let l = a.ANTHROPIC_BEDROCK_BASE_URL;
    if (l) t.push({
      label: "Bedrock base URL",
      value: h(l)
    });
    t.push({
      label: "AWS region",
      value: P()
    });
    let d = a.ANTHROPIC_BEDROCK_SERVICE_TIER;
    if (d) t.push({
      label: "Bedrock service tier",
      value: d
    });
    if (a.CLAUDE_CODE_SKIP_BEDROCK_AUTH) t.push({
      value: "AWS auth skipped"
    });
  } else if (i === "vertex") {
    let l = a.ANTHROPIC_VERTEX_BASE_URL;
    if (l) t.push({
      label: "Vertex base URL",
      value: h(l)
    });
    let d = a.ANTHROPIC_VERTEX_PROJECT_ID;
    if (d) t.push({
      label: "GCP project",
      value: d
    });
    if (t.push({
      label: "Default region",
      value: pFt()
    }), a.CLAUDE_CODE_SKIP_VERTEX_AUTH) t.push({
      value: "GCP auth skipped"
    });
  } else if (i === "foundry") {
    let l = a.ANTHROPIC_FOUNDRY_BASE_URL;
    if (l) t.push({
      label: "Microsoft Foundry base URL",
      value: h(l)
    });
    let d = a.ANTHROPIC_FOUNDRY_RESOURCE;
    if (d) t.push({
      label: "Microsoft Foundry resource",
      value: d
    });
    if (a.CLAUDE_CODE_SKIP_FOUNDRY_AUTH) t.push({
      value: "Microsoft Foundry auth skipped"
    });
  } else if (i === "anthropicAws") {
    let l = a.ANTHROPIC_AWS_BASE_URL;
    if (l) t.push({
      label: "Claude Platform on AWS base URL",
      value: h(l)
    });
    let d = a.ANTHROPIC_AWS_WORKSPACE_ID;
    if (d) t.push({
      label: "Workspace ID",
      value: d
    });
    if (t.push({
      label: "AWS region",
      value: qpt()
    }), a.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH) t.push({
      value: "Claude Platform on AWS auth skipped"
    });
  } else if (i === "anthropicGoogleCloud") {
    let l = a.ANTHROPIC_GOOGLE_CLOUD_BASE_URL;
    if (l) t.push({
      label: "Claude Platform on Google Cloud base URL",
      value: h(l)
    });
    let d = a.ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID;
    if (d) t.push({
      label: "Workspace ID",
      value: d
    });
    let f = a.ANTHROPIC_GOOGLE_CLOUD_PROJECT || a.GOOGLE_CLOUD_PROJECT;
    if (f) t.push({
      label: "GCP project",
      value: f
    });
    if (t.push({
      label: "GCP location",
      value: a.ANTHROPIC_GOOGLE_CLOUD_LOCATION || "global"
    }), a.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH) t.push({
      value: "Claude Platform on Google Cloud auth skipped"
    });
  } else if (i === "gateway") {
    let l = Lr();
    if (l) {
      if (t.push({
        label: "Gateway URL",
        value: h(l.url)
      }), l.email && !a.IS_DEMO) t.push({
        label: "Gateway account",
        value: l.email
      });
    }
  }
  if (i === "mantle" || FIe() === "mantle") {
    let l = a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
    if (l) t.push({
      label: "Amazon Bedrock (Mantle) base URL",
      value: h(l)
    });
    if (i === "mantle") t.push({
      label: "AWS region",
      value: P()
    });
    if (a.CLAUDE_CODE_SKIP_MANTLE_AUTH) t.push({
      value: "Amazon Bedrock (Mantle) auth skipped"
    });
  }
  let o = V1e();
  if (o) t.push({
    label: "Proxy",
    value: CG(o) ? h(o) : `${h(o).replace(/\p{Cc}/gu, "")} (invalid \u2014 ignored; fix or unset the proxy env var)`
  });
  let c = IC();
  if (a.NODE_EXTRA_CA_CERTS) t.push({
    label: "Additional CA cert(s)",
    value: a.NODE_EXTRA_CA_CERTS
  });
  if (c) {
    if (c.cert && a.CLAUDE_CODE_CLIENT_CERT) t.push({
      label: "mTLS client cert",
      value: a.CLAUDE_CODE_CLIENT_CERT
    });
    if (c.key && a.CLAUDE_CODE_CLIENT_KEY) t.push({
      label: "mTLS client key",
      value: a.CLAUDE_CODE_CLIENT_KEY
    });
  }
  return t;
}

function P() {
  let {region: i, source: t} = DTo();
  switch (t) {
   case "env":
    return i;

   case "shared-config":
    return `${i} (from AWS config)`;

   case "env-invalid":
   case "default":
    return WO(), t === "env-invalid" ? `${i} (default \u2014 region env var invalid, ignored; fix or unset AWS_REGION / AWS_DEFAULT_REGION)` : `${i} (default \u2014 set AWS_REGION or add a region to your AWS config)`;
  }
}

function rWo(i) {
  let t = MH(i), u = G6e();
  if (u !== void 0) return `${t} (${$1n(MH(u.previousModel))})`;
  return t;
}

export { lmn, gze, Vjo, Kjo, qjo, Yjo, Xjo, Jjo, Qjo, Zjo, eWo, tWo, nWo, hze, dmn, cmn, rWo };
