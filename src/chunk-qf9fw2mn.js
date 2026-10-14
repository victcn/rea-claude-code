// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { L } from "./chunk-vh1p9t2h.js";

import { we, C } from "./chunk-m8ez8fhk.js";

var f = C(function(d, h) {
  h.exports = {
    single: {
      topLeft: "\u250c",
      top: "\u2500",
      topRight: "\u2510",
      right: "\u2502",
      bottomRight: "\u2518",
      bottom: "\u2500",
      bottomLeft: "\u2514",
      left: "\u2502"
    },
    double: {
      topLeft: "\u2554",
      top: "\u2550",
      topRight: "\u2557",
      right: "\u2551",
      bottomRight: "\u255d",
      bottom: "\u2550",
      bottomLeft: "\u255a",
      left: "\u2551"
    },
    round: {
      topLeft: "\u256d",
      top: "\u2500",
      topRight: "\u256e",
      right: "\u2502",
      bottomRight: "\u256f",
      bottom: "\u2500",
      bottomLeft: "\u2570",
      left: "\u2502"
    },
    bold: {
      topLeft: "\u250f",
      top: "\u2501",
      topRight: "\u2513",
      right: "\u2503",
      bottomRight: "\u251b",
      bottom: "\u2501",
      bottomLeft: "\u2517",
      left: "\u2503"
    },
    singleDouble: {
      topLeft: "\u2553",
      top: "\u2500",
      topRight: "\u2556",
      right: "\u2551",
      bottomRight: "\u255c",
      bottom: "\u2500",
      bottomLeft: "\u2559",
      left: "\u2551"
    },
    doubleSingle: {
      topLeft: "\u2552",
      top: "\u2550",
      topRight: "\u2555",
      right: "\u2502",
      bottomRight: "\u255b",
      bottom: "\u2550",
      bottomLeft: "\u2558",
      left: "\u2502"
    },
    classic: {
      topLeft: "+",
      top: "-",
      topRight: "+",
      right: "|",
      bottomRight: "+",
      bottom: "-",
      bottomLeft: "+",
      left: "|"
    },
    arrow: {
      topLeft: "\u2198",
      top: "\u2193",
      topRight: "\u2199",
      right: "\u2190",
      bottomRight: "\u2196",
      bottom: "\u2191",
      bottomLeft: "\u2197",
      left: "\u2192"
    }
  };
});

var g = C(function(B, e) {
  var b = f();
  e.exports = b;
  e.exports.default = b;
});

var m = [ "top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight" ];

var p = t => L(t) && m.every(r => typeof t[r] === "string");

var R = we(g(), 1);

var n = {
  dashed: {
    top: "\u254c",
    left: "\u254e",
    right: "\u254e",
    bottom: "\u254c",
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " "
  },
  quote: {
    top: " ",
    left: "\u258e",
    right: " ",
    bottom: " ",
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " "
  }
};

var o = {
  ...R.default,
  ...n
};

function sWn(t) {
  let i = typeof t === "string" && Object.hasOwn(o, t) ? o[t] : t;
  return p(i) ? i : void 0;
}

var OGs = Object.keys(o).filter(t => sWn(t) !== void 0);

export { sWn, OGs };
