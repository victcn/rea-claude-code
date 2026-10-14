// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { ne, nt, wI, My } from "./chunk-5wbhf1bk.js";

import { Z9e } from "./chunk-pvmwc6wy.js";

import { bs } from "./chunk-zzhmvqjt.js";

import { wOe, Tj } from "./chunk-g7z9901y.js";

var y = new Map;

function W2e() {
  let t = a.LC_ALL || a.LC_TIME || a.LANG || "";
  if (y.has(t)) return y.get(t);
  let e = b(t);
  return y.set(t, e), e;
}

function b(t) {
  if (!t || t === "C" || t === "POSIX") return;
  let e = nt(nt(t, "."), "@");
  if (!e) return;
  let r = e.replaceAll("_", "-");
  try {
    return new Intl.DateTimeFormat(r), r;
  } catch {
    return;
  }
}

var I = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
  timeZoneName: "short"
}, M = {
  weekday: "short",
  calendar: "gregory"
}, N = {
  weekday: "long",
  calendar: "gregory"
}, x = {
  month: "short",
  calendar: "gregory"
}, _ = {
  month: "long",
  calendar: "gregory"
};

function P(t, e, {locale: r, timeZone: o}) {
  let g = Tj("en-US", wOe(I, o)).formatToParts(e), i = {};
  for (let T of g) i[T.type] = T.value;
  let u = Number(i.year), n = Number(i.month), c = Number(i.day), m = Number(i.hour), p = (m + 11) % 12 + 1, h = new Date(Date.UTC(u, n - 1, c)).getUTCDay();
  return t.replace(/%(-?)([\s\S])/g, (T, f, O) => {
    switch (O) {
     case "Y":
      return String(u);

     case "y":
      return s(u % 100, f);

     case "C":
      return s(Math.floor(u / 100), f);

     case "m":
      return s(n, f);

     case "d":
      return s(c, f);

     case "e":
      return D(c, f);

     case "j":
      return A(Z(u, n, c), f);

     case "u":
      return String(h === 0 ? 7 : h);

     case "w":
      return String(h);

     case "H":
      return s(m, f);

     case "k":
      return D(m, f);

     case "I":
      return s(p, f);

     case "l":
      return D(p, f);

     case "M":
      return s(Number(i.minute), f);

     case "S":
      return s(Number(i.second), f);

     case "p":
      return m < 12 ? "AM" : "PM";

     case "P":
      return m < 12 ? "am" : "pm";

     case "s":
      return String(Math.floor(e.getTime() / 1e3));

     case "a":
      return d(e, r, o, M);

     case "A":
      return d(e, r, o, N);

     case "b":
     case "h":
      return d(e, r, o, x);

     case "B":
      return d(e, r, o, _);

     case "Z":
      return i.timeZoneName ?? "";

     case "z":
      return k(e, u, n, c, m, i);

     case "F":
      return `${u}-${s(n, "")}-${s(c, "")}`;

     case "D":
      return `${s(n, "")}/${s(c, "")}/${s(u % 100, "")}`;

     case "T":
      return `${s(m, "")}:${i.minute}:${i.second}`;

     case "R":
      return `${s(m, "")}:${i.minute}`;

     case "r":
      return `${s(p, "")}:${i.minute}:${i.second} ${m < 12 ? "AM" : "PM"}`;

     case "%":
      return "%";

     default:
      return T;
    }
  });
}

function s(t, e) {
  return e ? String(t) : String(t).padStart(2, "0");
}

function A(t, e) {
  return e ? String(t) : String(t).padStart(3, "0");
}

function D(t, e) {
  return e ? String(t) : String(t).padStart(2, " ");
}

function Z(t, e, r) {
  return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 864e5 + 1;
}

function d(t, e, r, o) {
  return Tj(e, wOe(o, r)).format(t);
}

function k(t, e, r, o, g, i) {
  let u = Date.UTC(e, r - 1, o, g, Number(i.minute), Number(i.second)), n = Math.floor(t.getTime() / 1e3) * 1e3, c = Math.round((u - n) / 6e4), m = c < 0 ? "-" : "+", p = Math.abs(c);
  return `${m}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}

var F = 100;

function Enr(t) {
  return ne(wI(My(t)), F);
}

function C(t, e) {
  let r = Z9e.find(i => i === t);
  if (r === "24-hour-utc") return {
    kind: "preset",
    preset: r,
    timeZone: "UTC"
  };
  let o = L(e);
  if (r) return {
    kind: "preset",
    preset: r,
    timeZone: o
  };
  let g = Enr(t);
  return g.includes("%") ? {
    kind: "pattern",
    pattern: g,
    timeZone: o
  } : {
    kind: "preset",
    preset: "auto",
    timeZone: o
  };
}

function L(t) {
  if (!t) return;
  try {
    return Tj("en-US", {
      timeZone: t
    }), t;
  } catch {
    return;
  }
}

function S(t, e, r) {
  switch (e) {
   case "auto":
    return wOe(t, r);

   case "12-hour":
    return wOe({
      ...t,
      hourCycle: "h12"
    }, r);

   case "24-hour":
   case "24-hour-utc":
    return wOe({
      ...t,
      hourCycle: "h23"
    }, r);
  }
}

function knr(t, e, r, o) {
  let g = Tj(r, S(e, t.preset, t.timeZone));
  if (t.preset !== "24-hour-utc") return g.format(o);
  let i = g.formatToParts(o), u = i.findLastIndex(n => n.type === "minute" || n.type === "second");
  return i.map((n, c) => c === u ? `${n.value}Z` : n.value).join("");
}

function l(t, e, r, o) {
  return ne(P(t, r, {
    locale: o,
    timeZone: e
  }), F);
}

var E = {
  "2-digit": {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12"
  },
  numeric: {
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12"
  }
};

function gXo(t, e, r, o = "2-digit") {
  return t.kind === "pattern" ? l(t.pattern, t.timeZone, e, r) : knr(t, E[o], "en-US", e);
}

var R = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
  timeZoneName: "short"
};

function hXo(t, e, r, o) {
  let g = t.timeZone ?? o;
  if (t.kind === "pattern") return l(t.pattern, g, e, r);
  let i = S(R, t.preset, g), u = Tj("en-US", i).formatToParts(e), n = {};
  for (let p of u) n[p.type] = p.value;
  let c = n.dayPeriod ? ` ${n.dayPeriod}` : "", m = "";
  if (t.preset === "24-hour-utc") m = "Z"; else if (n.timeZoneName) m = ` ${n.timeZoneName}`;
  return `${n.year}-${n.month}-${n.day} ${n.hour}:${n.minute}:${n.second}${c}${m}`;
}

function cvt() {
  return C(bs("timeFormat", "auto").value, bs("timeZone", "").value);
}

function yXo(t, e, r) {
  return l(t, e, r, W2e());
}

export { W2e, Enr, knr, gXo, hXo, cvt, yXo };
