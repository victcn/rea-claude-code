// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Eo } from "./chunk-ncyzf9zz.js";

import { BT } from "./chunk-pzzygprt.js";

import { ven, Mks } from "./chunk-8es5wy4r.js";

import { Y0 } from "./chunk-nnrb0acr.js";

var c8t = "usage limit", cMn = ` (after ${c8t})`;

function u8t(e, i = !1) {
  let l = BT(e, i);
  if (l === void 0) return;
  return /^\d/.test(l) ? `resets at ${l}` : `resets ${l}`;
}

function d(e) {
  let i = u8t(e);
  return i === void 0 ? c8t : `${c8t} ${i}`;
}

function yds(e) {
  return `Paused \xb7 ${d(e)}`;
}

function Ioo(e) {
  return [ [ "paused", d(e) ], [ "paused", c8t ], [ "paused" ] ];
}

import a from "process";

function r() {
  let {env: e} = a, {TERM: i, TERM_PROGRAM: l} = e;
  if (a.platform !== "win32") return i !== "linux";
  return Boolean(e.WT_SESSION) || Boolean(e.TERMINUS_SUBLIME) || e.ConEmuTask === "{cmd::Cmder}" || l === "Terminus-Sublime" || l === "vscode" || i === "xterm-256color" || i === "alacritty" || i === "rxvt-unicode" || i === "rxvt-unicode-256color" || e.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}

var u = {
  circleQuestionMark: "(?)",
  questionMarkPrefix: "(?)",
  square: "\u2588",
  squareDarkShade: "\u2593",
  squareMediumShade: "\u2592",
  squareLightShade: "\u2591",
  squareTop: "\u2580",
  squareBottom: "\u2584",
  squareLeft: "\u258c",
  squareRight: "\u2590",
  squareCenter: "\u25a0",
  bullet: "\u25cf",
  dot: "\u2024",
  ellipsis: "\u2026",
  pointerSmall: "\u203a",
  triangleUp: "\u25b2",
  triangleUpSmall: "\u25b4",
  triangleDown: "\u25bc",
  triangleDownSmall: "\u25be",
  triangleLeftSmall: "\u25c2",
  triangleRightSmall: "\u25b8",
  home: "\u2302",
  heart: "\u2665",
  musicNote: "\u266a",
  musicNoteBeamed: "\u266b",
  arrowUp: "\u2191",
  arrowDown: "\u2193",
  arrowLeft: "\u2190",
  arrowRight: "\u2192",
  arrowLeftRight: "\u2194",
  arrowUpDown: "\u2195",
  almostEqual: "\u2248",
  notEqual: "\u2260",
  lessOrEqual: "\u2264",
  greaterOrEqual: "\u2265",
  identical: "\u2261",
  infinity: "\u221e",
  subscriptZero: "\u2080",
  subscriptOne: "\u2081",
  subscriptTwo: "\u2082",
  subscriptThree: "\u2083",
  subscriptFour: "\u2084",
  subscriptFive: "\u2085",
  subscriptSix: "\u2086",
  subscriptSeven: "\u2087",
  subscriptEight: "\u2088",
  subscriptNine: "\u2089",
  oneHalf: "\xbd",
  oneThird: "\u2153",
  oneQuarter: "\xbc",
  oneFifth: "\u2155",
  oneSixth: "\u2159",
  oneEighth: "\u215b",
  twoThirds: "\u2154",
  twoFifths: "\u2156",
  threeQuarters: "\xbe",
  threeFifths: "\u2157",
  threeEighths: "\u215c",
  fourFifths: "\u2158",
  fiveSixths: "\u215a",
  fiveEighths: "\u215d",
  sevenEighths: "\u215e",
  line: "\u2500",
  lineBold: "\u2501",
  lineDouble: "\u2550",
  lineDashed0: "\u2504",
  lineDashed1: "\u2505",
  lineDashed2: "\u2508",
  lineDashed3: "\u2509",
  lineDashed4: "\u254c",
  lineDashed5: "\u254d",
  lineDashed6: "\u2574",
  lineDashed7: "\u2576",
  lineDashed8: "\u2578",
  lineDashed9: "\u257a",
  lineDashed10: "\u257c",
  lineDashed11: "\u257e",
  lineDashed12: "\u2212",
  lineDashed13: "\u2013",
  lineDashed14: "\u2010",
  lineDashed15: "\u2043",
  lineVertical: "\u2502",
  lineVerticalBold: "\u2503",
  lineVerticalDouble: "\u2551",
  lineVerticalDashed0: "\u2506",
  lineVerticalDashed1: "\u2507",
  lineVerticalDashed2: "\u250a",
  lineVerticalDashed3: "\u250b",
  lineVerticalDashed4: "\u254e",
  lineVerticalDashed5: "\u254f",
  lineVerticalDashed6: "\u2575",
  lineVerticalDashed7: "\u2577",
  lineVerticalDashed8: "\u2579",
  lineVerticalDashed9: "\u257b",
  lineVerticalDashed10: "\u257d",
  lineVerticalDashed11: "\u257f",
  lineDownLeft: "\u2510",
  lineDownLeftArc: "\u256e",
  lineDownBoldLeftBold: "\u2513",
  lineDownBoldLeft: "\u2512",
  lineDownLeftBold: "\u2511",
  lineDownDoubleLeftDouble: "\u2557",
  lineDownDoubleLeft: "\u2556",
  lineDownLeftDouble: "\u2555",
  lineDownRight: "\u250c",
  lineDownRightArc: "\u256d",
  lineDownBoldRightBold: "\u250f",
  lineDownBoldRight: "\u250e",
  lineDownRightBold: "\u250d",
  lineDownDoubleRightDouble: "\u2554",
  lineDownDoubleRight: "\u2553",
  lineDownRightDouble: "\u2552",
  lineUpLeft: "\u2518",
  lineUpLeftArc: "\u256f",
  lineUpBoldLeftBold: "\u251b",
  lineUpBoldLeft: "\u251a",
  lineUpLeftBold: "\u2519",
  lineUpDoubleLeftDouble: "\u255d",
  lineUpDoubleLeft: "\u255c",
  lineUpLeftDouble: "\u255b",
  lineUpRight: "\u2514",
  lineUpRightArc: "\u2570",
  lineUpBoldRightBold: "\u2517",
  lineUpBoldRight: "\u2516",
  lineUpRightBold: "\u2515",
  lineUpDoubleRightDouble: "\u255a",
  lineUpDoubleRight: "\u2559",
  lineUpRightDouble: "\u2558",
  lineUpDownLeft: "\u2524",
  lineUpBoldDownBoldLeftBold: "\u252b",
  lineUpBoldDownBoldLeft: "\u2528",
  lineUpDownLeftBold: "\u2525",
  lineUpBoldDownLeftBold: "\u2529",
  lineUpDownBoldLeftBold: "\u252a",
  lineUpDownBoldLeft: "\u2527",
  lineUpBoldDownLeft: "\u2526",
  lineUpDoubleDownDoubleLeftDouble: "\u2563",
  lineUpDoubleDownDoubleLeft: "\u2562",
  lineUpDownLeftDouble: "\u2561",
  lineUpDownRight: "\u251c",
  lineUpBoldDownBoldRightBold: "\u2523",
  lineUpBoldDownBoldRight: "\u2520",
  lineUpDownRightBold: "\u251d",
  lineUpBoldDownRightBold: "\u2521",
  lineUpDownBoldRightBold: "\u2522",
  lineUpDownBoldRight: "\u251f",
  lineUpBoldDownRight: "\u251e",
  lineUpDoubleDownDoubleRightDouble: "\u2560",
  lineUpDoubleDownDoubleRight: "\u255f",
  lineUpDownRightDouble: "\u255e",
  lineDownLeftRight: "\u252c",
  lineDownBoldLeftBoldRightBold: "\u2533",
  lineDownLeftBoldRightBold: "\u252f",
  lineDownBoldLeftRight: "\u2530",
  lineDownBoldLeftBoldRight: "\u2531",
  lineDownBoldLeftRightBold: "\u2532",
  lineDownLeftRightBold: "\u252e",
  lineDownLeftBoldRight: "\u252d",
  lineDownDoubleLeftDoubleRightDouble: "\u2566",
  lineDownDoubleLeftRight: "\u2565",
  lineDownLeftDoubleRightDouble: "\u2564",
  lineUpLeftRight: "\u2534",
  lineUpBoldLeftBoldRightBold: "\u253b",
  lineUpLeftBoldRightBold: "\u2537",
  lineUpBoldLeftRight: "\u2538",
  lineUpBoldLeftBoldRight: "\u2539",
  lineUpBoldLeftRightBold: "\u253a",
  lineUpLeftRightBold: "\u2536",
  lineUpLeftBoldRight: "\u2535",
  lineUpDoubleLeftDoubleRightDouble: "\u2569",
  lineUpDoubleLeftRight: "\u2568",
  lineUpLeftDoubleRightDouble: "\u2567",
  lineUpDownLeftRight: "\u253c",
  lineUpBoldDownBoldLeftBoldRightBold: "\u254b",
  lineUpDownBoldLeftBoldRightBold: "\u2548",
  lineUpBoldDownLeftBoldRightBold: "\u2547",
  lineUpBoldDownBoldLeftRightBold: "\u254a",
  lineUpBoldDownBoldLeftBoldRight: "\u2549",
  lineUpBoldDownLeftRight: "\u2540",
  lineUpDownBoldLeftRight: "\u2541",
  lineUpDownLeftBoldRight: "\u253d",
  lineUpDownLeftRightBold: "\u253e",
  lineUpBoldDownBoldLeftRight: "\u2542",
  lineUpDownLeftBoldRightBold: "\u253f",
  lineUpBoldDownLeftBoldRight: "\u2543",
  lineUpBoldDownLeftRightBold: "\u2544",
  lineUpDownBoldLeftBoldRight: "\u2545",
  lineUpDownBoldLeftRightBold: "\u2546",
  lineUpDoubleDownDoubleLeftDoubleRightDouble: "\u256c",
  lineUpDoubleDownDoubleLeftRight: "\u256b",
  lineUpDownLeftDoubleRightDouble: "\u256a",
  lineCross: "\u2573",
  lineBackslash: "\u2572",
  lineSlash: "\u2571"
}, f = {
  tick: "\u2714",
  info: "\u2139",
  warning: "\u26a0",
  cross: "\u2718",
  squareSmall: "\u25fb",
  squareSmallFilled: "\u25fc",
  circle: "\u25ef",
  circleFilled: "\u25c9",
  circleDotted: "\u25cc",
  circleDouble: "\u25ce",
  circleCircle: "\u24de",
  circleCross: "\u24e7",
  circlePipe: "\u24be",
  radioOn: "\u25c9",
  radioOff: "\u25ef",
  checkboxOn: "\u2612",
  checkboxOff: "\u2610",
  checkboxCircleOn: "\u24e7",
  checkboxCircleOff: "\u24be",
  pointer: "\u276f",
  triangleUpOutline: "\u25b3",
  triangleLeft: "\u25c0",
  triangleRight: "\u25b6",
  lozenge: "\u25c6",
  lozengeOutline: "\u25c7",
  hamburger: "\u2630",
  smiley: "\u32e1",
  mustache: "\u0df4",
  star: "\u2605",
  play: "\u25b6",
  nodejs: "\u2b22",
  oneSeventh: "\u2150",
  oneNinth: "\u2151",
  oneTenth: "\u2152"
}, h = {
  tick: "\u221a",
  info: "i",
  warning: "\u203c",
  cross: "\xd7",
  squareSmall: "\u25a1",
  squareSmallFilled: "\u25a0",
  circle: "( )",
  circleFilled: "(*)",
  circleDotted: "( )",
  circleDouble: "( )",
  circleCircle: "(\u25cb)",
  circleCross: "(\xd7)",
  circlePipe: "(\u2502)",
  radioOn: "(*)",
  radioOff: "( )",
  checkboxOn: "[\xd7]",
  checkboxOff: "[ ]",
  checkboxCircleOn: "(\xd7)",
  checkboxCircleOff: "( )",
  pointer: ">",
  triangleUpOutline: "\u2206",
  triangleLeft: "\u25c4",
  triangleRight: "\u25ba",
  lozenge: "\u2666",
  lozengeOutline: "\u25ca",
  hamburger: "\u2261",
  smiley: "\u263a",
  mustache: "\u250c\u2500\u2510",
  star: "\u2736",
  play: "\u25ba",
  nodejs: "\u2666",
  oneSeventh: "1/7",
  oneNinth: "1/9",
  oneTenth: "1/10"
}, D = {
  ...u,
  ...f
}, p = {
  ...u,
  ...h
}, g = r(), w = g ? D : p, te = w, m = Object.entries(f);

function kst() {
  return Y0()?.settings.workflowSizeGuideline !== void 0;
}

function p8t(e) {
  return ven(Y0()?.settings.workflowSizeGuideline) ?? ven(e);
}

function Nfr(e, i) {
  let l = p8t(e);
  return l === void 0 ? {
    size: i,
    isDefault: !0
  } : {
    size: l,
    isDefault: !1
  };
}

function uMn(e, i) {
  let l = Eo();
  return l.sessionStartWorkflowSizeGuideline ??= Nfr(e, i), l.sessionStartWorkflowSizeGuideline;
}

function Ooo(e, i) {
  let {size: l, isDefault: o} = uMn(e, i);
  if (l === "unrestricted") return "";
  return `\n\n${Mks(l, o)}`;
}

function _ds(e, i, l) {
  let o = Nfr(i, l).size, s;
  for (let n = e.length - 1; n >= 0; n--) {
    let t = e[n];
    if (t?.type === "attachment" && t.attachment.type === "workflow_size_guideline_change") {
      s = t.attachment.size;
      break;
    }
  }
  let c = s ?? uMn(i, l).size;
  if (o !== c) return [ {
    type: "workflow_size_guideline_change",
    size: o
  } ];
  return [];
}

export { te, c8t, cMn, u8t, yds, Ioo, kst, p8t, Nfr, uMn, Ooo, _ds };
