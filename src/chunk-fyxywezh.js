// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function ebt(e) {
  return typeof e === "object" && !Array.isArray(e);
}

var c = /^\/?[\w:.-]+/;

function* a(e) {
  let t = e.length, n = 0;
  while (n < t) {
    if (e[n] !== "<") {
      let u = e.indexOf("<", n);
      if (u === -1) u = t;
      yield [ "", void 0, void 0, e.slice(n, u) ], n = u;
      continue;
    }
    if (e.startsWith("<?", n)) {
      let u = e.indexOf("?>", n + 2);
      if (u === -1) return;
      n = u + 2;
      continue;
    }
    if (e.startsWith("\x3c!--", n)) {
      let u = e.indexOf("--\x3e", n + 4);
      if (u === -1) return;
      n = u + 3;
      continue;
    }
    let i = e.indexOf(">", n + 1);
    if (i === -1) return;
    if (e.startsWith("<!", n)) {
      n = i + 1;
      continue;
    }
    let r = e.slice(n + 1, i), d = c.exec(r)?.[0];
    if (d === void 0) return;
    yield [ e.slice(n, i + 1), d, r.endsWith("/") ? "/" : "", void 0 ], n = i + 1;
  }
}

function mhn(e) {
  let t = a(e), n = s(t);
  if (!n || n[1] !== "plist" || n[2] === "/") return;
  let i = s(t);
  if (!i) return;
  let r = o(t, i);
  return s(t)?.[1] === "/plist" ? r : void 0;
}

function s(e) {
  for (let t = e.next(); !t.done; t = e.next()) if (t.value[1] !== void 0) return t.value;
  return;
}

function f(e, t) {
  if (t[2] === "/") return "";
  let n = "";
  for (let i = e.next(); !i.done; i = e.next()) {
    let r = i.value;
    if (r[1] === `/${t[1]}`) return g(n);
    if (r[3] === void 0) return;
    n += r[3];
  }
  return;
}

function o(e, t) {
  let n = t[2] === "/";
  switch (t[1]) {
   case "true":
   case "false":
    if (!n && f(e, t) === void 0) return;
    return t[1] === "true";

   case "string":
   case "data":
   case "date":
    return f(e, t);

   case "integer":
    {
      let i = f(e, t)?.trim();
      if (!i) return;
      let r = Number(i);
      return Number.isNaN(r) ? void 0 : r;
    }

   case "real":
    {
      let i = f(e, t)?.trim();
      if (!i) return;
      let r = /^([+-]?)(nan|inf|infinity)$/i.exec(i);
      if (r) {
        if (r[2].toLowerCase() === "nan") return NaN;
        return r[1] === "-" ? -1 / 0 : 1 / 0;
      }
      let d = Number(i);
      return Number.isNaN(d) ? void 0 : d;
    }

   case "array":
    return n ? [] : l(e);

   case "dict":
    return n ? {} : p(e);

   default:
    return;
  }
}

function l(e) {
  let t = [];
  for (;;) {
    let n = s(e);
    if (!n) return;
    if (n[1] === "/array") return t;
    let i = o(e, n);
    if (i === void 0) return;
    t.push(i);
  }
}

function p(e) {
  let t = Object.create(null);
  for (;;) {
    let n = s(e);
    if (!n) return;
    if (n[1] === "/dict") return t;
    if (n[1] !== "key") return;
    let i = f(e, n), r = s(e);
    if (i === void 0 || !r) return;
    let d = o(e, r);
    if (d === void 0) return;
    t[i] = d;
  }
}

function g(e) {
  if (!e.includes("&")) return e;
  return e.replace(/&(lt|gt|amp|quot|apos|#x[0-9a-fA-F]+|#\d+);/g, (t, n) => {
    switch (n) {
     case "lt":
      return "<";

     case "gt":
      return ">";

     case "amp":
      return "&";

     case "quot":
      return '"';

     case "apos":
      return "'";

     default:
      {
        let i = n[1] === "x" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
        return i <= 1114111 ? String.fromCodePoint(i) : t;
      }
    }
  });
}

export { ebt, mhn };
