// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Zh, d } from "./chunk-6ah1819r.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { _ } from "./chunk-kawq2919.js";

import { $s } from "./chunk-5wbhf1bk.js";

import { Ss } from "./chunk-xywp7esx.js";

import { Oo, Zm, Yt, xi, fT, _l, W8e, K_ } from "./chunk-f1zpf9me.js";

import { ed } from "./chunk-69rr80fg.js";

import { im } from "./chunk-z655gvmz.js";

import { wnt } from "./chunk-exeqjnzg.js";

import { wt, M6e, vd, Km } from "./chunk-hk8p0fqv.js";

import { sAn } from "./chunk-7x8whmnx.js";

import { dK, GSe, Nxe } from "./chunk-bdevabaf.js";

import { gp } from "./chunk-3j6e42hj.js";

import { de } from "./chunk-5ydr99q3.js";

import { bB, Zwt } from "./chunk-g7amzwj1.js";

import { PTe, vne, $J, H2e, FJ } from "./chunk-0b7g321z.js";

import { xWt } from "./chunk-yca5a7xx.js";

import { Vwt, hVt } from "./chunk-am0r2sqt.js";

import { WE } from "./chunk-a99879w1.js";

import { L } from "./chunk-vh1p9t2h.js";

import { u } from "./chunk-cvcg6n1z.js";

var p = "README.md", wGe = "project/README.md", K = 12e3, Y = 7e3, q = 700, CWt = {
  interrupted: "interrupted before it could be read",
  timeout: "reading it took too long",
  failed: "the read failed unexpectedly"
};

function Kge(e, t, n, o) {
  let r = () => n.abortController.signal.aborted ? "interrupted" : t.aborted ? "timeout" : "failed";
  return new Promise(s => {
    let i = () => s(o(r()));
    if (t.aborted) {
      e.catch(() => {}), i();
      return;
    }
    t.addEventListener("abort", i, {
      once: !0
    }), e.then(a => {
      t.removeEventListener("abort", i), s(a);
    }, a => {
      t.removeEventListener("abort", i);
      let l = r();
      if (l === "failed") d(a);
      s(o(l));
    });
  });
}

function xqo(e, t) {
  let n = e.find(o => o.default !== void 0);
  if (n === void 0 || n.default === void 0) return e.length === 0 ? {
    url: void 0,
    why: "the account lists no design systems \u2014 build without one unless the user names one",
    code: "default_none_listed"
  } : {
    url: void 0,
    why: `no default is set among the ${e.length}${t ? " or more" : ""} design systems the account lists \u2014 name the listed systems to the user and ask which to use before creating, then read their pick with its own call; with nobody to ask, build without one; they are ${J(e)}`,
    code: "default_unmarked"
  };
  return {
    url: n.url,
    source: {
      default: n.default,
      title: n.title
    }
  };
}

function J(e) {
  let n = e.slice(0, 3).map(o => `${_(im(fT(o.title, 40)) ?? "Untitled")} ${xi(o.url, "(unrecognized address)")}`);
  return e.length > 3 ? `${n.join(", ")}, and ${e.length - 3} more` : n.join(", ");
}

async function vGr(e, t, n, o, r, s) {
  let i = Yt(e);
  if (i === null || i.env !== Oo()) return {
    ok: !1,
    why: "it is not an Artifact URL of this session's claude.ai",
    code: "not_a_link"
  };
  let l = [ ...PTe() ? [ "files" ] : [], ...o ? [ "store" ] : [] ];
  if (l.length === 0) return {
    ok: !1,
    ...M("off", "off")
  };
  if (l.every(b => x(b, i, e, n, r))) return {
    ok: !1,
    why: z,
    code: "rule"
  };
  let c = {
    signal: t,
    credentials: n.credentials
  }, m = await Kge(gp(i, {
    toolUseId: n.toolUseId,
    abortController: {
      signal: t
    },
    ...c
  }, s).then(() => {}), t, n, b => b);
  if (m !== void 0) return {
    ok: !1,
    why: `${CWt[m]} \u2014 read it with its own call`,
    code: `probe_${m}`
  };
  let w = wt(i.slug);
  if (M6e(w)) return {
    ok: !1,
    why: "it is in another of the user's organizations, which this login cannot read \u2014 say so rather than guess its values",
    code: "other_org"
  };
  let y = vd(w);
  if (Km(i.slug) && !Ss(n.agentContext)) return {
    ok: !1,
    why: X,
    code: "notice_pending"
  };
  await Kge(Vwt(i, c), t, n, () => {});
  let h = x("files", i, e, n, r), A = x("store", i, e, n, r);
  return {
    ok: !0,
    parsed: i,
    owned: y,
    filesRuled: h,
    storeRuled: A,
    filesOk: PTe() && !h && U(i, y, "files", n),
    storeOk: o && !A && U(i, y, "store", n)
  };
}

function EGr(e, t, n, o) {
  return !(Km(e.slug) && !Ss(n.agentContext)) && !x("files", e, t, n, o) && U(e, vd(wt(e.slug)), "files", n);
}

async function Pqo(e, t, n, o, r, s) {
  let i = {
    default: t.default,
    title: t.title
  }, a = (R, T) => (f("artifact_design_system_guide", T), {
    design_system: {
      url: e,
      ...i,
      unavailable: R
    }
  }), l = await vGr(e, n, o, r, s, "design_system_guide");
  if (!l.ok) return a(l.why, l.code);
  let {parsed: c, owned: m, filesRuled: w, storeRuled: y, filesOk: h, storeOk: A} = l, b = G(PTe(), w, h), D = G(r, y, A);
  if (!h && !A) {
    let R = M(b, D);
    return a(R.why, R.code);
  }
  let [E, V] = await Promise.all([ A ? se(c, n, o) : S, h ? ne(c, n, o) : te ]), C = oe(V), v = C.doc?.path === wGe, F = !v && E.doc !== void 0, P = v ? C.doc : E.doc ?? C.doc;
  if (P === void 0) {
    let R = E.why ?? C.why, T = E.moved === !0 && b === "off" ? Z : M(b, D);
    return R === void 0 ? a(T.why, T.code) : a(R, "nothing_read");
  }
  if (!m) DQn(c, F ? "read_db" : "read_file", o);
  g("artifact_design_system_guide", {
    store: F,
    project: v,
    owned: m
  });
  let j = F || v ? void 0 : D === "ruled" ? `a permission rule governs reading its store, ${O}` : D === "unconsented" ? `its store needs approval to read here, ${O}` : E.unchecked === !0 ? `its store could not be checked, ${O}` : E.keptButUnread === !0 ? `its store's README is empty or could not be read here, ${O}` : void 0;
  return {
    design_system: {
      url: e,
      ...i,
      ...F && {
        store: !0
      },
      docs: [ P ],
      ...j !== void 0 && {
        unavailable: j
      }
    }
  };
}

var k = "read it with its own call, which may ask the user", z = "a permission rule governs reading it \u2014 read it with its own call and that rule decides", O = "so this is its published README, which may be older than the one in its store", Z = {
  why: "it moved to its own files, which this session does not serve",
  code: "nothing_read"
};

function x(e, t, n, o, r) {
  return e === "files" ? _He(t, n, "read_file", o, {
    pipelineRan: r
  }) || _He(t, n, "read_file", o, {
    pipelineRan: r,
    fields: {
      path: wGe
    }
  }) : _He(t, n, "read_db", o, {
    pipelineRan: r
  }) || _He(t, n, "read_db", o, {
    pipelineRan: r,
    fields: I
  });
}

function G(e, t, n) {
  return !e ? "off" : t ? "ruled" : n ? "read" : "unconsented";
}

function M(e, t) {
  let n = [ e, t ].filter(o => o !== "read" && o !== "off");
  if (e !== "read" && t !== "read" && n.length === 0) return {
    why: "this session serves neither its files nor its store",
    code: "not_served"
  };
  if (n.includes("unconsented")) return e === "read" || t === "read" ? {
    why: `its ${e === "unconsented" ? "files" : "store"} cannot be read here without the user's approval \u2014 ${k}`,
    code: "nothing_read"
  } : {
    why: X,
    code: "not_consented"
  };
  if (n.includes("ruled")) return {
    why: z,
    code: "rule"
  };
  return e === "off" ? {
    why: "its store holds no README for it, and this session does not serve its files",
    code: "nothing_read"
  } : {
    why: t === "off" ? "it has no README to read here (this session does not read stores)" : "it has no README to read",
    code: "nothing_read"
  };
}

var X = `reading it here first needs the user's approval, which this call does not ask for \u2014 ${k}`, I = {
  db_op: "get",
  collection: "ds",
  doc_id: "meta"
}, Q = {
  read_file: {
    path: p
  },
  read_db: {
    db_op: "get",
    collection: "files",
    doc_id: p
  }
};

function _He(e, t, n, o, r = {}) {
  let s = r.fields ?? (n === "list_files" ? {} : Q[n]), i = de(o);
  return (n === "read_file" ? [ {
    action: n,
    fields: s
  }, {
    action: "read",
    fields: s
  } ] : n === "list_files" ? [ {
    action: n,
    fields: s
  }, {
    action: "list",
    fields: {
      ...s,
      scope: "files"
    }
  } ] : [ {
    action: n,
    fields: s
  } ]).some(l => [ "deny", "ask" ].some(c => WE(i, e, t, c, {
    action: l.action,
    fields: l.fields,
    wholeToolAskAnswered: r.pipelineRan === !0
  }) !== null));
}

function U(e, t, n, o) {
  if (!bB(o)) {
    let r = FJ(e, o, n === "store");
    return !r.ask || r.remember === "artifact" && GSe(r, e.slug, Nxe(t, e));
  }
  return n === "store" ? t || H2e(o, e.slug) : vne(o, e, "files", "land");
}

function DQn(e, t, n) {
  if (!bB(n) && !dK("foreign_read", e.slug)) {
    let o = t === "read_db" ? H2e(n, e.slug) : $J(n, e.slug);
    Zwt(t, e.slug, void 0, o || void 0);
  }
}

var S = {
  doc: void 0,
  why: void 0
};

async function W(e, t, n, o, r) {
  let s = await Kge(wnt(e, t, o, r.credentials, "artifact_design_system_guide_read"), o, r, l => ({
    err: CWt[l],
    late: l
  }));
  if (s.err === null) return s.html.trim() === "" ? S : {
    doc: N(s.html, t),
    why: void 0
  };
  if (s.missingFile === !0 || n && s.status === 404 && s.errorCode === void 0) return S;
  let a = s.late !== void 0 ? CWt[s.late] : "the content host refused or failed";
  return {
    doc: void 0,
    why: ee(t, a),
    failed: a
  };
}

var ee = (e, t) => `its ${e} could not be fetched (${t}) \u2014 ${k}`, te = {
  root: S,
  project: S
};

async function ne(e, t, n) {
  let [o, r] = await Promise.all([ W(e, p, !1, t, n), W(e, wGe, !0, t, n) ]);
  return {
    root: o,
    project: r
  };
}

function oe({project: e, root: t}) {
  if (e.doc !== void 0 || t.doc !== void 0) return e.doc !== void 0 ? e : t;
  if (e.failed !== void 0 && t.failed !== void 0) return {
    doc: void 0,
    why: `its ${e.failed === t.failed ? `${wGe} and ${p} could not be fetched (${t.failed})` : `${wGe} (${e.failed}) and ${p} (${t.failed}) could not be fetched`} \u2014 read the design system with its own call, which may ask the user`
  };
  return e.why !== void 0 ? e : t;
}

var re = new Set([ "store_unavailable", "busy", "quota_or_rate", "quota_exceeded", "upstream_auth" ]);

function B(e, t, n, o, r) {
  return Kge(sAn(r.session.host, {
    slug: e.slug,
    op: "get",
    collection: t,
    docId: n
  }, o, r.storageV5, r.credentials), o, r, s => ({
    kind: "error",
    code: "store_unavailable",
    message: CWt[s],
    reason: s
  }));
}

async function se(e, t, n) {
  let [o, r] = await Promise.all([ B(e, I.collection, I.doc_id, t, n), B(e, "files", p, t, n) ]);
  if (o.kind !== "ok") return o.kind !== "error" || o.code === "not_declared" ? {
    doc: void 0,
    why: void 0
  } : {
    doc: void 0,
    why: `its store could not be read (${o.message}) \u2014 ${k}`,
    ...re.has(o.code) && {
      unchecked: !0
    }
  };
  if (ie(o.docs[0]?.data)) return {
    doc: void 0,
    why: void 0,
    moved: !0
  };
  let s = ae(r);
  return {
    ...s === void 0 && r.kind !== "not_found" && {
      keptButUnread: !0
    },
    doc: s === void 0 ? void 0 : N(s),
    why: r.kind === "error" ? `its store could not be read (${r.message}) \u2014 ${k}` : r.kind === "ok" && s === void 0 ? typeof r.docs[0]?.data.data === "string" ? "its README.md in the store is empty" : "its README.md is a stored file rather than an inline document \u2014 read it from the system with its own call" : void 0
  };
}

function ie(e) {
  let t = L(e) ? e.movedTo : void 0;
  return L(t) && typeof t.path === "string" && typeof t.at === "string";
}

function ae(e) {
  if (e.kind !== "ok") return;
  let t = e.docs[0]?.data.data;
  return typeof t === "string" && t.trim() !== "" ? t : void 0;
}

function LQn(e, t, n) {
  let o = _l(t), r = Array.from(o).length;
  return r > n ? {
    path: e,
    text: _l($s(o, n)),
    chars: r,
    clipped: !0
  } : {
    path: e,
    text: o,
    chars: r
  };
}

var le = [ `\n## Consuming this system (generated`, `\n## Index (generated` ], H = "[\u2026authored guide clipped here; its generated tail follows\u2026]";

function N(e, t = p) {
  let n = K, o = _l(e), r = Array.from(o).length;
  if (r <= n) return {
    path: t,
    text: o,
    chars: r
  };
  let s = le.map(c => o.lastIndexOf(c)).find(c => c !== -1) ?? -1;
  if (s === -1) return LQn(t, o, n);
  let i = $s(o.slice(s), Y), a = n - Array.from(i).length - Array.from(H).length - 2, l = $s(o.slice(0, s), a);
  return {
    path: t,
    text: _l(`${l}\n${H}\n${i}`),
    chars: r,
    clipped: !0
  };
}

function ue(e, t, n) {
  if (n) return `Its other cards are not attached: read one when you need it with ${ed('action "read_file"', () => 'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "project/api/tokens.md" (palette, type, fonts); "project/tokens.json" (exact token values); or, where the README's index is shown, a card it names, at "project/" followed by the path the index gives.`;
  return t ? `Its other cards are not attached: read one when you need it with ${ed('action "read_db" and `db_op`: "get"', () => `the ${Zm} tool, action "get"`)}, \`url\`: ${_(e)}, and a \`collection\` and \`doc_id\`: "api" and "tokens.md" (palette, type, fonts); "ds" and "tokens" (exact token values); "ds" and "meta" (the system's record). Where the README's index is shown, read a card it names by the collection and doc id the index gives.` : `Its other cards are not attached: read one when you need it with ${ed('action "read_file"', () => 'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "api/tokens.md" (palette, type, fonts); "tokens.json" (exact token values); or, where the README's index is shown, a card it names, by its path there.`;
}

function RWt(e, t) {
  let n = Array.from(e).length > t;
  return _l($s(e, t)).replace(K_, " ").replace(/[[\]]/g, " ").replace(/\s+/g, " ").trim() + (n ? " \u2026" : "");
}

function NQn(e) {
  if (e === null || typeof e !== "object" || !("docs" in e) || !Array.isArray(e.docs) || !e.docs.some(t => t !== null && typeof t === "object" && "text" in t && t.text !== "")) return;
  return {
    ...e,
    docs: e.docs.map(t => t !== null && typeof t === "object" ? {
      ...t,
      text: ""
    } : t)
  };
}

function Iqo(e) {
  let t = u(xWt()).safeParse({
    design_system: e
  }), n = t.success ? t.data.design_system : void 0;
  if (n === void 0) return {
    text: "",
    attached: !1
  };
  let o = n.unavailable === void 0 ? void 0 : RWt(n.unavailable, q);
  if (typeof n.url !== "string") return {
    text: `\n\n[Design system not attached \u2014 ${o ?? "no default could be found"}.]`,
    attached: !1
  };
  let r = xi(n.url, "(unrecognized address)"), s = typeof n.title === "string" ? ` ${_(RWt(W8e(im(fT(n.title, 200)) ?? ""), 200) || "Untitled")}` : "", i = `${r}${s}, the ${n.default === "user" ? "user's" : "organization's"} default design system`, a = (n.docs ?? []).find(h => (h.path === p || h.path === wGe) && h.text !== "");
  if (a === void 0) return {
    text: `\n\n[Design system not attached (${i}) \u2014 ${o ?? "its README is not kept in this record; read it with its own call if you need it"}.]`,
    attached: !1
  };
  let l = N(a.text), c = l.clipped === !0 || a.clipped === !0, m = Math.max(l.chars, a.chars), w = " This is the standing choice; ignore it if the user or the session named another, or declined one, in this conversation.", y = c ? `\n[\u2026clipped at ${Array.from(l.text).length} of ${m} characters; read the whole file from the design system if you need the rest]` : "";
  return {
    text: `\n\n${Zh}\nDesign system ${i}.${w} Its ${a.path} (${n.store === !0 ? "a document of its store" : "a published file"}) follows \u2014 do not fetch it again${c ? " unless you need the clipped remainder" : ""}.${o !== void 0 ? ` (${o}.)` : ""} ${ue(r, n.store === !0, a.path === wGe)}\n\n${a.path}:\n${hVt(l.text + y)}`,
    attached: !0
  };
}

export { wGe, CWt, Kge, xqo, vGr, EGr, Pqo, _He, DQn, LQn, RWt, NQn, Iqo };
