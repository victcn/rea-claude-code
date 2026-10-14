// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function pae(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n) | 0;
  return e;
}

function uL(t) {
  return Bun.hash(t).toString();
}

function I4n(t, e) {
  return Bun.hash(e, Bun.hash(t)).toString();
}

var _Hr = "pasted_content", Vln = 4, TUs = '<pasted_content id="', NHo = `">\n`, AUs = '</pasted_content id="';

function O4n(t) {
  return `<pasted_content id="${t}">\n`;
}

function Kln(t) {
  return `</pasted_content id="${t}">\n`;
}

function $Ho(t) {
  if (t.length !== 4) return !1;
  for (let e = 0; e < t.length; e++) {
    let n = t.charCodeAt(e);
    if (!(n >= 48 && n <= 57 || n >= 97 && n <= 102)) return !1;
  }
  return !0;
}

var FHo = /[([{"'`]/, UHo = /[)\]}"'`.,;:!?]/;

function BHo(t, e = 0, n = t.length) {
  let s = e;
  while (s < n && UHo.test(t[s])) s++;
  return s >= n || /\s/.test(t[s]);
}

function T$t(t) {
  let e = [], n = 0, s = 0;
  for (;;) {
    let c = t.indexOf('<pasted_content id="', s);
    if (c === -1) break;
    let r = c + 20, o = t.slice(r, r + 4);
    if (!$Ho(o) || !t.startsWith(`">\n`, r + 4)) {
      s = r;
      continue;
    }
    let i = r + 4 + 3, f = Kln(o).slice(0, -1), l = t.indexOf(`\n${f}`, i - 1) + 1;
    if (l === 0) break;
    let E = c;
    for (let d = 0; d < 2 && E > n && t[E - 1] === `\n`; d++) E--;
    if (E > n) e.push({
      kind: "text",
      text: t.slice(n, E)
    });
    n = l + f.length;
    for (let d = 0; d < 2 && t[n] === `\n`; d++) n++;
    e.push({
      kind: "block",
      id: o,
      body: t.slice(i, l - 1),
      raw: t.slice(E, n)
    }), s = n;
  }
  if (n < t.length) e.push({
    kind: "text",
    text: t.slice(n)
  });
  return e;
}

function pEe(t) {
  let e = T$t(t);
  if (e.length === 1 && e[0].kind === "text") return t;
  return e.map(n => n.kind === "text" ? n.text : n.body).join("");
}

function jHo(t, e) {
  let n = T$t(t);
  if (!n.some(r => r.kind === "block" && r.id === e)) return t;
  let s = "", c = !1;
  for (let [r, o] of n.entries()) {
    let i = n[r + 1], T = i?.kind === "block" && i.id === e;
    if (o.kind === "text" || o.id !== e) {
      let a = o.kind === "text" ? o.text : o.raw;
      if (c) a = a.replace(/^\s+/, "");
      if (T && i.body.includes(`\n`)) a = a.replace(/\s+$/, "");
      if (a === "") continue;
      if (c && s !== "") s += `\n`;
      s += a, c = !1;
      continue;
    }
    let f = o.body.includes(`\n`), l = s.length;
    while (l > 0 && FHo.test(s[l - 1])) l--;
    let E = l === 0 || /\s/.test(s[l - 1]);
    if ((f || c || !E) && s !== "") s += `\n`;
    s += o.body;
    let d = i === void 0 ? "" : i.kind === "text" ? i.text : i.raw;
    c = f || T || /^\s\s/.test(d) || !BHo(d);
  }
  return s;
}

export { pae, uL, I4n, _Hr, Vln, TUs, NHo, AUs, O4n, Kln, $Ho, FHo, UHo, BHo, T$t, pEe, jHo };
