// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var s = globalThis.process?.getBuiltinModule?.("async_hooks"), OEe = s ? e => s.AsyncResource.bind(e) : e => e;

function Le(e) {
  if (!e) return !1;
  if (typeof e === "boolean") return e;
  let n = String(e).toLowerCase().trim();
  return [ "1", "true", "yes", "on" ].includes(n);
}

function ys(e) {
  if (e === void 0) return !1;
  if (typeof e === "boolean") return !e;
  let n = String(e).toLowerCase().trim();
  return [ "0", "false", "no", "off" ].includes(n);
}

function Tx(e) {
  if (!e || e.startsWith("-") || e.startsWith("/")) return !1;
  if (e.includes("..")) return !1;
  if (e.split("/").some(n => n === "." || n === "")) return !1;
  return /^[a-zA-Z0-9/._+@-]+$/.test(e);
}

function Me() {
  let e = new Set;
  return {
    subscribe(n) {
      let r = OEe(n);
      return e.add(r), () => {
        e.delete(r);
      };
    },
    emit(...n) {
      let r;
      for (let o of e) try {
        o(...n);
      } catch (i) {
        (r ??= []).push(i);
      }
      if (r) throw r.length === 1 ? r[0] : AggregateError(r, "Signal listener(s) threw");
    },
    clear() {
      e.clear();
    }
  };
}

var a = {
  english: "en",
  spanish: "es",
  espa\u00f1ol: "es",
  espanol: "es",
  french: "fr",
  fran\u00e7ais: "fr",
  francais: "fr",
  japanese: "ja",
  \u65e5\u672c\u8a9e: "ja",
  german: "de",
  deutsch: "de",
  portuguese: "pt",
  portugu\u00eas: "pt",
  portugues: "pt",
  italian: "it",
  italiano: "it",
  korean: "ko",
  \ud55c\uad6d\uc5b4: "ko",
  hindi: "hi",
  \u0939\u093f\u0928\u094d\u0926\u0940: "hi",
  \u0939\u093f\u0902\u0926\u0940: "hi",
  indonesian: "id",
  "bahasa indonesia": "id",
  bahasa: "id",
  russian: "ru",
  \u0440\u0443\u0441\u0441\u043a\u0438\u0439: "ru",
  polish: "pl",
  polski: "pl",
  turkish: "tr",
  t\u00fcrk\u00e7e: "tr",
  turkce: "tr",
  dutch: "nl",
  nederlands: "nl",
  ukrainian: "uk",
  \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430: "uk",
  greek: "el",
  \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac: "el",
  czech: "cs",
  \u010de\u0161tina: "cs",
  cestina: "cs",
  danish: "da",
  dansk: "da",
  swedish: "sv",
  svenska: "sv",
  norwegian: "no",
  norsk: "no"
}, t = new Set([ "en", "es", "fr", "ja", "de", "pt", "it", "ko", "hi", "id", "ru", "pl", "tr", "nl", "uk", "el", "cs", "da", "sv", "no" ]);

function lWe(e) {
  if (!e) return {
    code: "en"
  };
  let n = e.toLowerCase().trim();
  if (!n) return {
    code: "en"
  };
  if (t.has(n)) return {
    code: n
  };
  let r = a[n];
  if (r) return {
    code: r
  };
  let o = n.split("-")[0];
  if (o && t.has(o)) return {
    code: o
  };
  return {
    code: "en",
    fellBackFrom: e
  };
}

export { OEe, Le, ys, Tx, Me, lWe };
