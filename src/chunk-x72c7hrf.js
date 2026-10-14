// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { Ye, Ve, x, l } from "./chunk-b0z4bv3v.js";

import { _, lg, JHo, fJe, cx, t } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { vs } from "./chunk-q6wab2jw.js";

import { Ea } from "./chunk-nvtwm272.js";

import { Ho } from "./chunk-6ah1819r.js";

import { Rxt } from "./chunk-sqb9meyh.js";

import { Jt } from "./chunk-9tdwgnpn.js";

import { B2, les, des, OB, ces, ues, C4, Wts, zts, rre, GD } from "./chunk-84yp45y8.js";

import { LT } from "./chunk-81rtbneg.js";

import { XCe } from "./chunk-584kx1w1.js";

import { O_ } from "./chunk-ccv68e56.js";

import { Yk, goe, hoe } from "./chunk-h2y8dwq2.js";

import { eY, M8t } from "./chunk-ghdkaeg7.js";

import { rv } from "./chunk-sf8rh59s.js";

import { q4e, Wgr, Pfs, axt } from "./chunk-wgsx43va.js";

import { TC } from "./chunk-v6b4yr85.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, T, u } from "./chunk-cvcg6n1z.js";

var w = p(() => u({
  server: o().optional().describe("Optional server name to filter resources by")
})), U = p(() => T(u({
  uri: o().describe("Resource URI"),
  name: o().describe("Resource name"),
  mimeType: o().optional().describe("MIME type of the resource"),
  description: o().optional().describe("Resource description"),
  server: o().describe("Server that provides this resource")
})));

function j(e) {
  let {hasMcpInboundDoor: r} = import.meta.require("./chunk-681a4hgd.js");
  if (!Array.isArray(e) || !r()) return e;
  return e.filter(L).map(({uri: s, name: a, mimeType: n, description: h, server: f}) => ({
    uri: b("", s),
    name: b("", a),
    ...typeof n === "string" && {
      mimeType: n
    },
    ...typeof h === "string" && {
      description: h
    },
    server: b("", f)
  }));
}

function b(e, r) {
  return typeof r === "string" ? r : e;
}

var PD = Jt({
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return e.server ?? "";
  },
  shouldDefer: !0,
  name: C4,
  aliases: [ "ListMcpResources" ],
  searchHint: "list resources from connected MCP servers",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return Wts;
  },
  async prompt() {
    return zts;
  },
  get inputSchema() {
    return w();
  },
  get outputSchema() {
    return U();
  },
  create(e) {
    return {
      async call(r, {signal: s}) {
        let a = e.turnMcpClients.filter(c => !Pfs(c, e.agentId)), {server: n} = r, h = n ? q4e(a, n) : a;
        if (n && h.length === 0) throw new x(`Server "${n}" not found. Available servers: ${a.map(c => c.name).join(", ")}`, "MCP server not found");
        let f = await Promise.all(h.map(async c => {
          if (!vs(c) || !c.capabilities?.resources) return [];
          let y = import.meta.require("./chunk-89c96hkc.js").mcpClientModule(), S = () => y.ensureConnectedClient(c, {
            signal: s,
            context: "MCP resource listing"
          });
          try {
            let g = await S(), i = await Ea(y.fetchResourcesForClient(g), s, () => new Ye);
            if (c.config.type === "claudeai-proxy" && y.getDiscoveryFetchError(i) !== void 0) {
              let d = await S();
              if (d !== g) i = await Ea(y.fetchResourcesForClient(d), s, () => new Ye);
            }
            let m = i.filter(d => !Rxt(d));
            if (m.length < i.length) t(`MCP server "${c.name}": ${i.length - m.length} MCP Apps UI resource(s) left out of ${C4}'s list for the model (a ui:// URI, or text/html with profile=mcp-app); ${OB} can still read them by URI`);
            return m;
          } catch (g) {
            if (!Ve(g)) Ho(c.name, l(g));
            return [];
          }
        }));
        if (s.aborted) throw new Ye;
        return {
          data: f.flat()
        };
      }
    };
  },
  renderToolUseMessage(e) {
    return e.server ? `List MCP resources from server "${e.server}"` : "List all MCP resources";
  },
  userFacingName: () => "listMcpResources",
  stripForCreation: j,
  mapToolResultToToolResultBlockParam(e, r) {
    if (!e || e.length === 0) return {
      tool_use_id: r,
      type: "tool_result",
      content: "No resources found. MCP servers may still provide tools even if they have no resources."
    };
    return {
      tool_use_id: r,
      type: "tool_result",
      content: _(e)
    };
  }
});

var A = {
  size: eY,
  textToSanitize: 1048576
}, k = 16, B = 256, F = 16 * A.textToSanitize, H = 65536;

function M() {
  let e = {
    size: 0,
    sixteenthsToSanitize: 0,
    nonAsciiUnits: 0
  };
  return r => {
    if (!R(e)) return !1;
    return e.size += B, v(r, e, !0);
  };
}

function TSt() {
  let e = M(), r = M(), s = !1;
  return a => {
    if (s || !e(a)) return;
    let n = cx(a);
    return s = !r(n), s ? void 0 : n;
  };
}

function zGe(e, r, s) {
  return `Skipped the last ${r} of ${s} ${e}: the listing is too large. Only about the first 16 MB of a listing is used (less if it has many small values), and only about 1 million characters that are costly to normalize: combining marks, full-width forms, emoji and the like anywhere, and a tool's or prompt's name that is not all ASCII. The server must list fewer or shorter ${e} to get them back.`;
}

function R(e) {
  return e.size <= A.size && e.sixteenthsToSanitize <= F;
}

function v(e, r, s = !1, a = !1) {
  if (r.size += k, typeof e === "string") P(e, r, a); else if (Array.isArray(e)) {
    for (let n of e) if (!v(n, r)) return !1;
  } else if (L(e)) {
    for (let n in e) if (P(n, r), !v(e[n], r, !1, s && n === "name")) return !1;
  }
  return R(r);
}

function P(e, r, s = !1) {
  if (r.size += e.length, !R(r) || JHo(e)) return;
  if (s) {
    r.sixteenthsToSanitize += 16 * e.length;
    return;
  }
  r.sixteenthsToSanitize += e.length;
  for (let a = 0; a < e.length && R(r); a++) {
    let n = e.charCodeAt(a);
    if (n > 127 && (r.nonAsciiUnits++ < H || q()[n] === 1)) r.sixteenthsToSanitize += 15;
  }
}

var q = TC(() => {
  let e = /[\p{M}\u1100-\u11ff\ua960-\ua97f\ud7b0-\udfff]/u;
  return Uint8Array.from({
    length: 65536
  }, (r, s) => {
    let a = String.fromCharCode(s);
    return e.test(a) || fJe(a) !== a ? 1 : 0;
  });
});

function z() {
  return import.meta.require("./chunk-89c96hkc.js");
}

function V() {
  return z().mcpSdkErrorClassificationModule();
}

function Y() {
  return z().mcpClientModule();
}

function D() {
  return z().mcpDirectoryReadModule();
}

var W = p(() => u({
  server: o().describe("The MCP server name"),
  uri: o().describe("The directory resource URI to list")
})), Z = p(() => u({
  resources: T(u({
    uri: o().describe("Child resource URI"),
    name: o().describe("Child resource name"),
    mimeType: o().optional().describe("Child MIME type")
  })).describe(`Direct children of the directory resource. Subdirectories appear with mimeType "${M8t}".`),
  error: o().optional().describe("Human-readable error when the server could not list the directory")
})), w2 = Jt({
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return `${e.server} ${e.uri}`;
  },
  shouldDefer: !0,
  name: B2,
  aliases: [ "ReadMcpResourceDir" ],
  searchHint: "list the children of an MCP directory resource",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return les;
  },
  async prompt() {
    return des;
  },
  get inputSchema() {
    return W();
  },
  get outputSchema() {
    return Z();
  },
  create(e) {
    return {
      async call(r, {signal: s}) {
        let a = e.turnMcpClients, {server: n, uri: h} = r, f = Wgr(a, n);
        if (axt(f, e.agentId), !rv()) return {
          data: {
            resources: [],
            error: "Directory listing is not enabled in this build."
          }
        };
        if (!D().serverDeclaresDirectoryRead(f.capabilities)) return {
          data: {
            resources: [],
            error: `Server "${f.name}" does not support directory listing.`
          }
        };
        if (f.config.pluginSource) LT(f.config.pluginSource), GD(f.config.pluginSource, "mcp", {
          kind: "mcp-server",
          name: f.name
        });
        let c = await Y().ensureConnectedClient(f, {
          signal: s,
          context: "MCP resource directory read"
        }), y;
        try {
          y = await D().readMcpDirectory(c, h);
        } catch (m) {
          let d = V();
          if (d.isMcpNotADirectoryError(m)) return Ho(f.name, `resources/directory/read returned ${d.getMcpErrorCode(m)} \u2014 not a directory`), 
          {
            data: {
              resources: [],
              error: `Not a directory resource: ${h}. If it is a file resource, use ${OB} instead.`
            }
          };
          throw m;
        }
        let S = M(), g = M(), i = (await rre(y, m => {
          if (!S([ m.uri, m.name, m.mimeType ])) return [];
          let d = {
            uri: lg(m.uri),
            name: cx(m.name),
            mimeType: m.mimeType !== void 0 ? cx(m.mimeType) : void 0
          };
          return g([ d.uri, d.name, d.mimeType ]) ? [ d ] : [];
        })).flat();
        if (i.length < y.length) return Ho(f.name, zGe("directory entries", y.length, y.length)), 
        {
          data: {
            resources: [],
            error: `The listing of ${h} is too large to read.`
          }
        };
        return {
          data: {
            resources: i
          }
        };
      }
    };
  },
  renderToolUseMessage(e) {
    if (!e.uri || !e.server) return null;
    return `List directory resource "${e.uri}" from server "${e.server}"`;
  },
  userFacingName() {
    return "readMcpResourceDir";
  },
  mapToolResultToToolResultBlockParam(e, r) {
    if (e.error) return {
      tool_use_id: r,
      type: "tool_result",
      content: e.error
    };
    let s = e.resources.map(n => `${n.name}${n.mimeType === M8t ? "/" : ""}`).join(`\n`), a = e.resources.length > 0 ? `Directory listing (${e.resources.length} ${I(e.resources.length, "entry", "entries")}):\n${s}` : "Directory is empty.";
    return {
      tool_use_id: r,
      type: "tool_result",
      content: `${a}\n\n${_(e)}`
    };
  }
});

function E() {
  return import.meta.require("./chunk-89c96hkc.js");
}

function K() {
  return E().mcpSdkErrorClassificationModule();
}

function N() {
  return E().mcpClientModule();
}

function X() {
  return E().mcpDirectoryReadModule();
}

var G = p(() => u({
  server: o().describe("The MCP server name"),
  uri: o().describe("The resource URI to read")
})), J = p(() => u({
  contents: T(u({
    uri: o().describe("Resource URI"),
    mimeType: o().optional().describe("MIME type of the content"),
    text: o().optional().describe("Text content of the resource"),
    blobSavedTo: o().optional().describe("Path where binary blob content was saved")
  })),
  error: o().optional().describe("Human-readable error when the server could not read the resource")
})), ID = Jt({
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return `${e.server} ${e.uri}`;
  },
  shouldDefer: !0,
  name: OB,
  aliases: [ "ReadMcpResource" ],
  searchHint: "read a specific MCP resource by URI",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return ces;
  },
  async prompt() {
    return ues;
  },
  get inputSchema() {
    return G();
  },
  get outputSchema() {
    return J();
  },
  create(e) {
    return {
      async call(r, {signal: s}) {
        let {turnMcpClients: a, storageV5: n} = e, {server: h, uri: f} = r, c = Wgr(a, h);
        if (axt(c, e.agentId), c.config.pluginSource) LT(c.config.pluginSource), GD(c.config.pluginSource, "mcp", {
          kind: "mcp-server",
          name: c.name
        });
        let y = await N().ensureConnectedClient(c, {
          signal: s,
          context: "MCP resource read"
        }), S;
        try {
          S = await XCe(y, f);
        } catch (i) {
          let m = K();
          if (m.isMcpMethodNotFoundError(i)) return Ho(c.name, "resources/read returned -32601 MethodNotFound \u2014 server advertises resources but does not implement reads"), 
          {
            data: {
              contents: [],
              error: `Server "${c.name}" advertises resource support but does not implement resource reads.`
            }
          };
          if (m.isMcpResourceNotFoundError(i)) {
            Ho(c.name, `resources/read returned ${m.getMcpErrorCode(i)} \u2014 resource not found`), 
            N().invalidateMcpResourceListCaches(y);
            let d = X().serverDeclaresDirectoryRead(y.capabilities) ? ` If the URI is a directory resource, use ${B2} instead.` : "";
            return {
              data: {
                contents: [],
                error: `Resource not found: ${f} \u2014 it may have been deleted or the URI is stale. Re-run ${C4} to refresh.${d}`
              }
            };
          }
          throw i;
        }
        return {
          data: {
            contents: await Promise.all(S.contents.map(async (i, m) => {
              if ("text" in i) return {
                uri: i.uri,
                mimeType: i.mimeType,
                text: i.text
              };
              if (!("blob" in i) || typeof i.blob !== "string") return {
                uri: i.uri,
                mimeType: i.mimeType
              };
              let d = `mcp-resource-${Date.now()}-${m}-${Math.random().toString(36).slice(2, 8)}`, C = await Yk(Buffer.from(i.blob, "base64"), i.mimeType, d, void 0, n);
              if ("error" in C) {
                if (O_() !== void 0) return {
                  uri: i.uri,
                  mimeType: i.mimeType,
                  text: hoe(i.mimeType, Buffer.byteLength(i.blob, "base64"))
                };
                return {
                  uri: i.uri,
                  mimeType: i.mimeType,
                  text: `Binary content could not be saved to disk: ${C.error}`
                };
              }
              return {
                uri: i.uri,
                mimeType: i.mimeType,
                blobSavedTo: C.filepath,
                text: goe(C.filepath, i.mimeType, C.size, `[Resource from ${c.name} at ${i.uri}] `)
              };
            }))
          }
        };
      }
    };
  },
  renderToolUseMessage(e) {
    if (!e.uri || !e.server) return null;
    return `Read resource "${e.uri}" from server "${e.server}"`;
  },
  userFacingName() {
    return "readMcpResource";
  },
  mapToolResultToToolResultBlockParam(e, r) {
    if (e.error) return {
      tool_use_id: r,
      type: "tool_result",
      content: e.error
    };
    return {
      tool_use_id: r,
      type: "tool_result",
      content: _(e)
    };
  }
});

export { PD, TSt, zGe, w2, ID };
