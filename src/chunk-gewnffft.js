// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { pn, TO } from "./chunk-9tdwgnpn.js";

import { $n } from "./chunk-xywp7esx.js";

var b = new K(() => new Set);

function T(o, r) {
  return `${o}_${r}`;
}

var k = /_(\d+)$/;

function NNe(o) {
  let r = k.exec(o);
  return r ? o.slice(0, -r[0].length) : void 0;
}

function w(o, r, a) {
  let i = pn(r, o.name);
  if (i === void 0 || !TO(i)) return null;
  let l = c => (f("batch_tools", c, {
    tool_name: $n(i.name),
    isMcp: !1
  }), [ {
    type: "tool_use",
    id: T(o.id, 0),
    name: i.name,
    input: o.input,
    ...o.caller !== void 0 && {
      caller: o.caller
    }
  } ]);
  try {
    let c = i.inputSchema.safeParse(o.input);
    if (!c.success) return {
      synthetics: l("parse_failed"),
      decomposed: !1
    };
    let {v1Tool: n, entries: e} = i.perEntryHookInputs(c.data);
    if (e.length === 0) return {
      synthetics: l("zero_entries"),
      decomposed: !1
    };
    return {
      decomposed: !0,
      synthetics: e.map((s, u) => {
        let m = s;
        try {
          m = a(n, s);
        } catch (p) {
          if (p instanceof Error && p.name === "ZodError") t(`batch entry normalize rejected input: ${p}`, {
            level: "error"
          }); else d(p);
        }
        return {
          type: "tool_use",
          id: T(o.id, u),
          name: n.name,
          input: m,
          ...o.caller !== void 0 && {
            caller: o.caller
          }
        };
      })
    };
  } catch {
    return {
      synthetics: l("per_entry_threw"),
      decomposed: !1
    };
  }
}

function qHn(o) {
  let r;
  for (let a of o) if (TO(a)) r ??= new Set, r.add(a.underlyingV1ToolName);
  if (r === void 0) return o;
  return o.filter(a => !r.has(a.name));
}

function rXt(o, r, a) {
  let i, l = [];
  for (let c = 0; c < o.length; c++) {
    let n = o[c];
    if (n.type !== "tool_use") {
      i?.push(n);
      continue;
    }
    let e = w(n, r, a);
    if (e === null) {
      i?.push(n);
      continue;
    }
    if (i ??= o.slice(0, c), i.push(...e.synthetics), e.decomposed) l.push({
      id: n.id,
      name: n.name
    }), g("batch_tools", {
      tool_name: $n(n.name),
      isMcp: !1
    });
  }
  return {
    content: i ?? o,
    batchToolUses: l
  };
}

function Xps(o, r, a) {
  if (r === void 0 || r.length === 0) return o;
  let i = new Map;
  for (let e of r) if (!i.has(e.id)) i.set(e.id, e);
  let l = new Map;
  for (let e of i.values()) {
    let s = pn(a, e.name);
    if (s === void 0 || !TO(s)) continue;
    let u = [], m;
    for (let p of o) if (p.type === "tool_use" && NNe(p.id) === e.id) m ??= p, u.push(p.input);
    try {
      l.set(e.id, {
        type: "tool_use",
        id: e.id,
        name: e.name,
        input: s.reassemble(u),
        ...m?.caller !== void 0 && {
          caller: m.caller
        }
      });
    } catch {
      let p = b.of(B().host);
      if (!p.has(e.id)) p.add(e.id), f("batch_tools", "reassemble_threw", {
        tool_name: $n(e.name),
        isMcp: !1
      });
    }
  }
  let c = new Set, n = [];
  for (let e of o) {
    if (e.type === "tool_use") {
      let s = NNe(e.id);
      if (s !== void 0 && l.has(s)) {
        if (!c.has(s)) c.add(s), n.push(l.get(s));
        continue;
      }
    }
    n.push(e);
  }
  return n;
}

function Jps(o, r) {
  let a = !1;
  for (let n of o) {
    if (n.type === "assistant") {
      for (let e of n.message.content) if (e.type === "tool_use") {
        let s = pn(r, e.name);
        if (s !== void 0 && TO(s)) a = !0;
      }
    }
    if (n.type === "user" && !a) {
      if (Array.isArray(n.message.content) && n.message.content.some(e => e.type === "tool_result" && NNe(e.tool_use_id) !== void 0)) a = !0;
    }
  }
  if (!a) return o;
  let i = new Map;
  for (let n of o) {
    if (n.type !== "assistant") continue;
    for (let e of n.message.content) if (e.type === "tool_use") i.set(e.id, e);
  }
  let l = new Map;
  for (let n of o) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let e of n.message.content) {
      if (e.type !== "tool_result") continue;
      let s = NNe(e.tool_use_id);
      if (s === void 0 || !i.has(s)) continue;
      let u = l.get(s);
      if (u === void 0) u = new Map, l.set(s, u);
      if (!u.has(e.tool_use_id)) u.set(e.tool_use_id, e);
    }
  }
  if (l.size === 0) return o;
  let c = new Set;
  return o.flatMap(n => {
    if (n.type !== "user" || !Array.isArray(n.message.content)) return [ n ];
    let e = !1, s = [];
    for (let u of n.message.content) {
      if (u.type !== "tool_result") {
        s.push(u);
        continue;
      }
      let m = NNe(u.tool_use_id), p = m !== void 0 ? l.get(m) : void 0;
      if (m === void 0 || p === void 0) {
        s.push(u);
        continue;
      }
      if (e = !0, c.has(m)) continue;
      c.add(m);
      let h = i.get(m), y = pn(r, h.name), _ = y !== void 0 && TO(y) ? y : void 0;
      s.push(P(_, m, R(_, h.input, m, p)));
    }
    if (!e) return [ n ];
    if (s.length === 0) return [];
    return [ {
      ...n,
      message: {
        ...n.message,
        content: s
      }
    } ];
  });
}

function R(o, r, a, i) {
  let l;
  if (o !== void 0) try {
    let n = o.inputSchema.safeParse(r);
    if (n.success) l = o.perEntryHookInputs(n.data).entries;
  } catch {}
  let c = l?.length ?? 0;
  for (let n of i.keys()) {
    let e = k.exec(n);
    if (e) c = Math.max(c, Number(e[1]) + 1);
  }
  if (c > 1e3) c = l?.length ?? i.size;
  return Array.from({
    length: c
  }, (n, e) => {
    let s = i.get(T(a, e));
    return s !== void 0 ? {
      input: l?.[e],
      result: s
    } : {
      input: l?.[e],
      error: "no result"
    };
  });
}

function P(o, r, a) {
  let i = [], l = "", c = !1, n = s => {
    if (s.length > 0) l = l === "" ? s : `${l}\n${s}`;
  }, e = () => {
    if (l !== "") i.push({
      type: "text",
      text: l
    }), l = "";
  };
  for (let [s, u] of a.entries()) {
    let m = u.result === void 0 || u.result.is_error === !0;
    if (m) c = !0;
    if (n(`--- entry ${s + 1}${m ? " (error)" : ""} ---`), u.result !== void 0) {
      let p = u.result.content;
      if (typeof p === "string") n(p); else if (Array.isArray(p)) for (let h of p) if (h.type === "text") n(h.text); else e(), 
      i.push(h);
    } else n(`[entry ${s + 1} error: ${u.error ?? "no result"}]`);
  }
  if (a.length === 1 && o !== void 0) n(`<system-reminder>Tip: ${o.name} accepts multiple entries in one call (\`${o.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`);
  return e(), {
    type: "tool_result",
    tool_use_id: r,
    content: i.length === 1 && i[0]?.type === "text" ? i[0].text : i,
    ...c && {
      is_error: !0
    }
  };
}

var x = new Map;

function ybe(o) {
  return x.get(o);
}

function YHn(o) {
  return o.map(ybe).filter(r => r !== void 0).filter(r => r.isEnabled());
}

function Qps(o, r) {
  return r.find(a => a.underlyingV1ToolName === o)?.name ?? o;
}

function noe(o) {
  for (let [r, a] of x) if (a.name === o) return r;
  return;
}

export { NNe, qHn, rXt, Xps, Jps, ybe, YHn, Qps, noe };
