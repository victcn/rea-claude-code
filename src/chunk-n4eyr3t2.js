// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lv } from "./chunk-zqby5cq4.js";

import { b, c, Cn } from "./chunk-hwdwjvh8.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { eo, ve } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { cEo, k } from "./chunk-xywp7esx.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Iv, a } from "./chunk-j016gcgm.js";

import { bt, Y, t } from "./chunk-kawq2919.js";

import { nt, xd } from "./chunk-5wbhf1bk.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { zie } from "./chunk-q6wab2jw.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { o, lf, T, u, $e, ue, U } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { yt } from "./chunk-9zhz923g.js";

import { readFileSync as we } from "fs";

import { readFile as on, stat as sn } from "fs/promises";

import { dirname as an, join as cn } from "path";

var L = O(), Ie = L === "windows" || L === "wsl", Oe = Ie ? "alt+v" : "ctrl+v", Le = L !== "windows" || (Iv() ? cEo("1.4.3", ">=1.2.23") : cEo(process.versions.node, ">=22.17.0 <23.0.0 || >=24.2.0")), le = Le ? "shift+tab" : "meta+m", o1 = [ {
  context: "Global",
  bindings: {
    "ctrl+c": "app:interrupt",
    "ctrl+d": "app:exit",
    "ctrl+t": "app:toggleTodos",
    "ctrl+o": "app:toggleTranscript",
    "ctrl+shift+b": "app:toggleBrief",
    "ctrl+r": "history:search",
    "ctrl+up": "app:diffFileListUp",
    "ctrl+down": "app:diffFileListDown",
    "meta+up": "app:diffFileListUp",
    "meta+down": "app:diffFileListDown",
    ...{},
    ...{
      "ctrl+]": "app:openArtifact"
    },
    ...{},
    ...{}
  }
}, {
  context: "DiffPanel",
  bindings: {
    "ctrl+x b": "app:cycleDiffBase"
  }
}, {
  context: "FeedbackSurvey",
  bindings: {
    "ctrl+x 1": "feedbackSurvey:bad",
    "ctrl+x 2": "feedbackSurvey:fine",
    "ctrl+x 3": "feedbackSurvey:good"
  }
}, {
  context: "Chat",
  bindings: {
    escape: "chat:cancel",
    "ctrl+l": "chat:clearInput",
    "cmd+k": "chat:clearScreen",
    "ctrl+x ctrl+k": "chat:killAgents",
    ...{
      [le]: "chat:cycleMode"
    },
    ...{},
    "meta+p": "chat:modelPicker",
    ...{},
    "meta+o": "chat:fastMode",
    "ctrl+y": "chat:defaultToNewerModel",
    "meta+t": "chat:thinkingToggle",
    "meta+w": "chat:workflowKeywordToggle",
    enter: "chat:submit",
    "ctrl+x enter": "chat:queueSubmit",
    "ctrl+x ctrl+s": "chat:sendNow",
    "ctrl+enter": "chat:sendNow",
    "ctrl+j": "chat:newline",
    up: "history:previous",
    down: "history:next",
    "ctrl+_": "chat:undo",
    "ctrl+-": "chat:undo",
    "ctrl+shift+-": "chat:undo",
    "ctrl+shift+_": "chat:undo",
    "ctrl+x ctrl+e": "chat:externalEditor",
    "ctrl+x ctrl+a": "abovePrompt:toggle",
    "ctrl+x tab": "abovePrompt:focus",
    "ctrl+g": "chat:externalEditor",
    "ctrl+s": "chat:stash",
    [Oe]: "chat:imagePaste",
    ...L === "wsl" && {
      "ctrl+v": "chat:imagePaste"
    },
    space: "voice:pushToTalk"
  }
}, {
  context: "Autocomplete",
  bindings: {
    tab: "autocomplete:accept",
    escape: "autocomplete:dismiss",
    up: "autocomplete:previous",
    down: "autocomplete:next"
  }
}, {
  context: "Settings",
  bindings: {
    escape: "confirm:no",
    up: "select:previous",
    down: "select:next",
    k: "select:previous",
    j: "select:next",
    "ctrl+p": "select:previous",
    "ctrl+n": "select:next",
    home: "select:first",
    end: "select:last",
    pageup: "select:pageUp",
    pagedown: "select:pageDown",
    space: "select:accept",
    enter: "select:accept",
    "/": "settings:search",
    r: "settings:retry",
    d: "settings:periodDay",
    w: "settings:periodWeek",
    t: "settings:sortByTokens",
    "ctrl+u": "scroll:halfPageUp",
    "ctrl+d": "scroll:halfPageDown"
  }
}, {
  context: "Confirmation",
  bindings: {
    enter: "confirm:yes",
    escape: "confirm:no",
    up: "confirm:previous",
    down: "confirm:next",
    tab: "confirm:nextField",
    space: "confirm:toggle",
    [le]: "confirm:cycleMode"
  }
}, {
  context: "Tabs",
  bindings: {
    tab: "tabs:next",
    "shift+tab": "tabs:previous",
    right: "tabs:next",
    left: "tabs:previous"
  }
}, {
  context: "Transcript",
  bindings: {
    "ctrl+e": "transcript:toggleShowAll",
    "ctrl+c": "transcript:exit",
    escape: "transcript:exit",
    q: "transcript:exit",
    "ctrl+u": "scroll:halfPageUp",
    "ctrl+d": "scroll:halfPageDown",
    "ctrl+b": "scroll:fullPageUp",
    "ctrl+f": "scroll:fullPageDown",
    "ctrl+n": "scroll:lineDown",
    "ctrl+p": "scroll:lineUp",
    g: "scroll:top",
    "shift+g": "scroll:bottom",
    j: "scroll:lineDown",
    k: "scroll:lineUp",
    space: "scroll:fullPageDown",
    b: "scroll:fullPageUp",
    up: "scroll:lineUp",
    down: "scroll:lineDown",
    home: "scroll:top",
    end: "scroll:bottom"
  }
}, {
  context: "HistorySearch",
  bindings: {
    "ctrl+r": "historySearch:next",
    escape: "historySearch:accept",
    tab: "historySearch:accept",
    "ctrl+c": "historySearch:cancel",
    enter: "historySearch:execute",
    "ctrl+s": "historySearch:cycleScope"
  }
}, {
  context: "Task",
  bindings: {
    "ctrl+x ctrl+b": "task:background",
    "ctrl+b": "task:background"
  }
}, {
  context: "ThemePicker",
  bindings: {
    "ctrl+t": "theme:toggleSyntaxHighlighting",
    "ctrl+e": "theme:editCustom"
  }
}, {
  context: "Scroll",
  bindings: {
    pageup: "scroll:pageUp",
    pagedown: "scroll:pageDown",
    wheelup: "scroll:lineUp",
    wheeldown: "scroll:lineDown",
    "ctrl+home": "scroll:top",
    "ctrl+end": "scroll:bottom",
    "ctrl+shift+c": "selection:copy",
    "cmd+c": "selection:copy",
    "shift+left": "selection:extendLeft",
    "shift+right": "selection:extendRight",
    "shift+up": "selection:extendUp",
    "shift+down": "selection:extendDown",
    "shift+home": "selection:extendLineStart",
    "shift+end": "selection:extendLineEnd"
  }
}, {
  context: "Help",
  bindings: {
    escape: "help:dismiss"
  }
}, ...[], {
  context: "Attachments",
  bindings: {
    right: "attachments:next",
    left: "attachments:previous",
    backspace: "attachments:remove",
    delete: "attachments:remove",
    down: "attachments:exit",
    escape: "attachments:exit"
  }
}, {
  context: "Footer",
  bindings: {
    up: "footer:up",
    "ctrl+p": "footer:up",
    down: "footer:down",
    "ctrl+n": "footer:down",
    right: "footer:next",
    left: "footer:previous",
    enter: "footer:openSelected",
    escape: "footer:clearSelection",
    x: "footer:close",
    ...{}
  }
}, {
  context: "AbovePrompt",
  bindings: {
    tab: "abovePrompt:next",
    right: "abovePrompt:next",
    "shift+tab": "abovePrompt:previous",
    left: "abovePrompt:previous",
    enter: "abovePrompt:press",
    space: "abovePrompt:press",
    escape: "abovePrompt:leave",
    up: "pane:scrollUp",
    down: "pane:scrollDown",
    pageup: "pane:pageUp",
    pagedown: "pane:pageDown",
    home: "pane:top",
    end: "pane:bottom"
  }
}, {
  context: "AbovePromptInput",
  bindings: {
    tab: "abovePrompt:next",
    down: "abovePrompt:next",
    "shift+tab": "abovePrompt:previous",
    up: "abovePrompt:previous",
    enter: "abovePrompt:press",
    escape: "abovePrompt:leave"
  }
}, {
  context: "AbovePromptSelect",
  bindings: {
    tab: "abovePrompt:next",
    "shift+tab": "abovePrompt:previous",
    down: "abovePrompt:highlightNext",
    up: "abovePrompt:highlightPrevious",
    enter: "abovePrompt:press",
    escape: "abovePrompt:leave"
  }
}, {
  context: "Pane",
  bindings: {
    tab: "abovePrompt:next",
    "shift+tab": "abovePrompt:previous",
    enter: "abovePrompt:press",
    escape: "abovePrompt:leave",
    up: "pane:scrollUp",
    down: "pane:scrollDown",
    pageup: "pane:pageUp",
    pagedown: "pane:pageDown",
    home: "pane:top",
    end: "pane:bottom",
    "ctrl+x left": "pane:grow",
    "ctrl+x up": "pane:grow",
    "ctrl+x right": "pane:shrink",
    "ctrl+x down": "pane:shrink",
    "ctrl+x x": "pane:close"
  }
}, {
  context: "PaneField",
  bindings: {
    "ctrl+x x": "pane:close"
  }
}, {
  context: "DiffDialog",
  bindings: {
    escape: "diff:dismiss",
    left: "diff:previousSource",
    right: "diff:nextSource",
    up: "diff:previousFile",
    down: "diff:nextFile",
    j: "diff:nextFile",
    k: "diff:previousFile",
    pageup: "scroll:pageUp",
    pagedown: "scroll:pageDown",
    space: "scroll:fullPageDown",
    "shift+space": "scroll:fullPageUp",
    b: "scroll:fullPageUp",
    g: "scroll:top",
    "shift+g": "scroll:bottom",
    home: "scroll:top",
    end: "scroll:bottom"
  }
}, {
  context: "ModelPicker",
  bindings: {
    left: "modelPicker:decreaseEffort",
    right: "modelPicker:increaseEffort",
    s: "modelPicker:thisSessionOnly"
  }
}, {
  context: "EffortSlider",
  bindings: {
    left: "effortSlider:decreaseEffort",
    right: "effortSlider:increaseEffort",
    tab: "effortSlider:toggleUltracode",
    s: "effortSlider:thisSessionOnly"
  }
}, {
  context: "Select",
  bindings: {
    up: "select:previous",
    down: "select:next",
    j: "select:next",
    k: "select:previous",
    "ctrl+n": "select:next",
    "ctrl+p": "select:previous",
    pageup: "select:pageUp",
    pagedown: "select:pageDown",
    home: "select:first",
    end: "select:last",
    enter: "select:accept",
    escape: "select:cancel"
  }
}, {
  context: "Plugin",
  bindings: {
    space: "plugin:toggle",
    i: "plugin:install",
    f: "plugin:favorite",
    ...{
      "ctrl+s": "plugin:cycleMarketplace"
    }
  }
}, {
  context: "Agents",
  bindings: {
    "ctrl+s": "agents:switchView",
    "ctrl+t": "agents:togglePin",
    "ctrl+f": "agents:find",
    "ctrl+r": "agents:rename",
    "ctrl+up": "agents:previousGroup",
    "meta+up": "agents:previousGroup",
    "ctrl+down": "agents:nextGroup",
    "meta+down": "agents:nextGroup",
    ...{}
  }
} ];

function d7(e) {
  let r = e.split("+"), n = {
    key: "",
    ctrl: !1,
    alt: !1,
    shift: !1,
    meta: !1,
    super: !1
  };
  for (let s of r) {
    let d = s.toLowerCase();
    switch (d) {
     case "ctrl":
     case "control":
      n.ctrl = !0;
      break;

     case "alt":
     case "opt":
     case "option":
      n.alt = !0;
      break;

     case "shift":
      n.shift = !0;
      break;

     case "meta":
      n.meta = !0;
      break;

     case "cmd":
     case "command":
     case "super":
     case "win":
      n.super = !0;
      break;

     case "esc":
      n.key = "escape";
      break;

     case "return":
      n.key = "enter";
      break;

     case "del":
      n.key = "delete";
      break;

     case "space":
      n.key = " ";
      break;

     case "\u2191":
      n.key = "up";
      break;

     case "\u2193":
      n.key = "down";
      break;

     case "\u2190":
      n.key = "left";
      break;

     case "\u2192":
      n.key = "right";
      break;

     default:
      n.key = d;
      break;
    }
  }
  return n;
}

function l8(e) {
  if (e === " ") return [ d7("space") ];
  return e.trim().split(/\s+/).map(d7);
}

function je(e) {
  let r = [];
  if (e.ctrl) r.push("ctrl");
  if (e.alt) r.push("alt");
  if (e.shift) r.push("shift");
  if (e.meta) r.push("meta");
  if (e.super) r.push("cmd");
  let n = de(e.key);
  return r.push(n), r.join("+");
}

function de(e) {
  switch (e) {
   case "escape":
    return "Esc";

   case " ":
    return "space";

   case "tab":
    return "tab";

   case "enter":
    return "Enter";

   case "backspace":
    return "Backspace";

   case "delete":
    return "Delete";

   case "up":
    return "\u2191";

   case "down":
    return "\u2193";

   case "left":
    return "\u2190";

   case "right":
    return "\u2192";

   case "pageup":
    return "PageUp";

   case "pagedown":
    return "PageDown";

   case "home":
    return "Home";

   case "end":
    return "End";

   default:
    return e;
  }
}

function s1(e) {
  return e.map(je).join(" ");
}

function zgr(e, r = "linux") {
  let n = [];
  if (e.ctrl) n.push("ctrl");
  if (e.alt || e.meta) n.push(r === "macos" ? "opt" : "alt");
  if (e.shift) n.push("shift");
  if (e.super) n.push(r === "macos" ? "cmd" : "super");
  let s = de(e.key);
  return n.push(s), n.join("+");
}

function Bce(e, r = "linux") {
  return e.map(n => zgr(n, r)).join(" ");
}

function jce(e) {
  let r = [];
  for (let n of e) for (let [s, d] of Object.entries(n.bindings)) r.push({
    chord: l8(s),
    action: d,
    context: n.context
  });
  return r;
}

var Z = [ "messageSelector:up", "messageSelector:down", "messageSelector:top", "messageSelector:bottom", "messageSelector:select", "diff:viewDetails" ], Re = {
  "messageSelector:up": "select:previous",
  "messageSelector:down": "select:next",
  "messageSelector:top": "select:first",
  "messageSelector:bottom": "select:last",
  "messageSelector:select": "select:accept",
  "diff:viewDetails": "select:accept"
};

function Q(e) {
  return Z.some(r => r === e);
}

function ge(e) {
  return e.map(r => ({
    context: r.context,
    bindings: eo(r.bindings, n => n !== null && Q(n) ? Re[n] : n)
  }));
}

var uXt = [ "Global", "Chat", "Autocomplete", "Confirmation", "Help", "ProactivityMenu", "Transcript", "HistorySearch", "Task", "ThemePicker", "Settings", "Tabs", "Attachments", "Footer", "AbovePrompt", "AbovePromptInput", "AbovePromptSelect", "Pane", "PaneField", "MessageSelector", "DiffDialog", "DiffPanel", "FeedbackSurvey", "ModelPicker", "EffortSlider", "Select", "Plugin", "Scroll", "Agents" ], Ue = new Set(uXt);

function Ofs(e) {
  return Ue.has(e);
}

var Mfs = {
  Global: "Active everywhere, regardless of focus",
  Chat: "When the chat input is focused",
  Autocomplete: "When autocomplete menu is visible",
  Confirmation: "When a confirmation/permission dialog is shown",
  Help: "When the help overlay is open",
  ProactivityMenu: "When the proactivity dialog is open",
  Transcript: "When viewing the transcript",
  HistorySearch: "When searching command history (ctrl+r)",
  Task: "When a task/agent is running in the foreground",
  ThemePicker: "When the theme picker is open",
  Settings: "When the settings menu is open",
  Tabs: "When tab navigation is active",
  Attachments: "When navigating image attachments in a select dialog",
  Footer: "When footer indicators are focused",
  AbovePrompt: "When a plugin's panel above the prompt, or a button in it, has keyboard focus",
  AbovePromptInput: "When a plugin's input field above the prompt has keyboard focus",
  AbovePromptSelect: "When a plugin's select above the prompt has keyboard focus",
  Pane: "When a plugin's pane has keyboard focus",
  PaneField: "When an input field or select in a plugin's pane has keyboard focus",
  MessageSelector: "When the message selector (rewind) is open",
  DiffDialog: "When the diff dialog is open",
  DiffPanel: "When the diff sidebar panel is open",
  FeedbackSurvey: "When the session feedback survey has been typed over",
  ModelPicker: "When the model picker is open",
  EffortSlider: "When the effort slider is open",
  Select: "When a select/list component is focused",
  Plugin: "When the plugin dialog is open",
  Scroll: "When a scrollable view is focused (fullscreen layout)",
  Agents: "When the agents view (`claude agents`) is open"
}, BNe = [ "app:interrupt", "app:exit", "app:toggleTodos", "app:toggleTranscript", "app:toggleBrief", "app:toggleReplTab", "app:toggleDiffNoiseFilter", "app:diffFileListUp", "app:diffFileListDown", "app:toggleDiffPreSession", "app:cycleDiffBase", "app:toggleTerminal", "app:redraw", "app:openArtifact", "strip:jump1", "strip:jump2", "strip:jump3", "strip:jump4", "strip:jump5", "strip:jump6", "strip:jump7", "strip:jump8", "strip:jump9", "strip:next", "strip:previous", "strip:tabNext", "strip:tabPrevious", "strip:viewAll", "strip:toggle", "strip:new", "history:search", "history:previous", "history:next", "chat:cancel", "chat:killAgents", "chat:cycleMode", "chat:cycleProactivity", "chat:attentionUp", "chat:attentionDown", "chat:modelPicker", "chat:increaseEffort", "chat:decreaseEffort", "chat:fastMode", "chat:defaultToNewerModel", "chat:thinkingToggle", "chat:workflowKeywordToggle", "chat:submit", "chat:queueSubmit", "chat:sendNow", "chat:newline", "chat:undo", "chat:externalEditor", "chat:stash", "chat:imagePaste", "chat:clearInput", "chat:clearScreen", "autocomplete:accept", "autocomplete:dismiss", "autocomplete:previous", "autocomplete:next", "confirm:yes", "confirm:no", "confirm:previous", "confirm:next", "confirm:nextField", "confirm:previousField", "confirm:cycleMode", "confirm:toggle", "tabs:next", "tabs:previous", "transcript:toggleShowAll", "transcript:exit", "historySearch:next", "historySearch:accept", "historySearch:cancel", "historySearch:execute", "historySearch:cycleScope", "task:background", "theme:toggleSyntaxHighlighting", "theme:editCustom", "help:dismiss", "proactivityMenu:previousMode", "proactivityMenu:nextMode", "attachments:next", "attachments:previous", "attachments:remove", "attachments:exit", "footer:up", "footer:down", "footer:next", "footer:previous", "footer:openSelected", "footer:clearSelection", "footer:close", "footer:dismiss", "abovePrompt:toggle", "abovePrompt:focus", "abovePrompt:next", "abovePrompt:previous", "abovePrompt:press", "abovePrompt:leave", "abovePrompt:highlightNext", "abovePrompt:highlightPrevious", "pane:scrollUp", "pane:scrollDown", "pane:pageUp", "pane:pageDown", "pane:top", "pane:bottom", "pane:grow", "pane:shrink", "pane:close", "pane:next", "pane:previous", "diff:dismiss", "diff:previousSource", "diff:nextSource", "diff:back", "diff:previousFile", "diff:nextFile", "feedbackSurvey:bad", "feedbackSurvey:fine", "feedbackSurvey:good", "modelPicker:decreaseEffort", "modelPicker:increaseEffort", "modelPicker:thisSessionOnly", "effortSlider:decreaseEffort", "effortSlider:increaseEffort", "effortSlider:toggleUltracode", "effortSlider:thisSessionOnly", "select:next", "select:previous", "select:pageUp", "select:pageDown", "select:first", "select:last", "select:accept", "select:cancel", "plugin:toggle", "plugin:install", "plugin:favorite", "plugin:cycleMarketplace", "permission:toggleDebug", "settings:search", "settings:retry", "settings:periodDay", "settings:periodWeek", "settings:sortByTokens", "voice:pushToTalk", "scroll:pageUp", "scroll:pageDown", "scroll:lineUp", "scroll:lineDown", "scroll:top", "scroll:bottom", "scroll:halfPageUp", "scroll:halfPageDown", "scroll:fullPageUp", "scroll:fullPageDown", "selection:copy", "selection:clear", "selection:extendLeft", "selection:extendRight", "selection:extendUp", "selection:extendDown", "selection:extendLineStart", "selection:extendLineEnd", "agents:switchView", "agents:togglePin", "agents:find", "agents:nextGroup", "agents:previousGroup", "agents:rename", "agents:setGroup" ];

var pDn = [ "FeedbackSurvey" ], pe = new Set(BNe);

function Hfs(e) {
  return pe.has(e);
}

function F(e) {
  return pe.has(e) || e.startsWith("command:");
}

var ze = p(() => u({
  context: U(uXt).describe("UI context where these bindings apply. Global bindings work everywhere."),
  bindings: ue(o().describe('Keystroke pattern (e.g., "ctrl+k", "shift+tab")'), $e([ U([ ...BNe, ...Z ]), o().regex(/^command:[a-zA-Z0-9:\-_]+$/).describe('Command binding (e.g., "command:help", "command:compact"). Executes the slash command as if typed.'), lf().describe("Set to null to unbind a default shortcut") ]).describe("Action to trigger, command to invoke, or null to unbind")).describe("Map of keystroke patterns to actions")
}).describe("A block of keybindings for a specific context")), Tn = p(() => u({
  $schema: o().optional().describe("JSON Schema URL for editor validation"),
  $docs: o().optional().describe("Documentation URL"),
  bindings: T(ze()).describe("Array of keybinding blocks by context")
}).describe("Claude Code keybindings configuration. Customize keyboard shortcuts by context."));

var UNe = [ {
  key: "ctrl+c",
  reason: "Cannot be rebound - used for interrupt/exit (hardcoded)",
  severity: "error"
}, {
  key: "ctrl+d",
  reason: "Cannot be rebound - used for exit (hardcoded)",
  severity: "error"
}, {
  key: "ctrl+m",
  reason: "Cannot be rebound - identical to Enter in terminals (both send CR)",
  severity: "error"
}, {
  key: "ctrl+[",
  reason: "Cannot be rebound - identical to Escape in terminals",
  severity: "error"
}, {
  key: "ctrl+i",
  reason: "Cannot be rebound - identical to Tab in terminals",
  severity: "error"
}, {
  key: "ctrl+h",
  reason: "Cannot be rebound - identical to Backspace in terminals",
  severity: "error"
}, {
  key: "capslock",
  reason: "Caps Lock is not delivered to terminal applications",
  severity: "error"
} ], vao = [ {
  key: "ctrl+z",
  reason: "Unix process suspend (SIGTSTP)",
  severity: "warning"
}, {
  key: "ctrl+\\",
  reason: "Terminal quit signal (SIGQUIT)",
  severity: "error"
} ], Eao = [ {
  key: "cmd+c",
  reason: "macOS system copy",
  severity: "error"
}, {
  key: "cmd+v",
  reason: "macOS system paste",
  severity: "error"
}, {
  key: "cmd+x",
  reason: "macOS system cut",
  severity: "error"
}, {
  key: "cmd+q",
  reason: "macOS quit application",
  severity: "error"
}, {
  key: "cmd+w",
  reason: "macOS close window/tab",
  severity: "error"
}, {
  key: "cmd+tab",
  reason: "macOS app switcher",
  severity: "error"
}, {
  key: "cmd+space",
  reason: "macOS Spotlight",
  severity: "error"
} ];

function fe() {
  let e = O(), r = [ ...UNe, ...vao ];
  if (e === "macos") r.push(...Eao);
  return r;
}

function Y4e(e) {
  if (e === " ") return "space";
  return e.trim().split(/\s+/).map(Ye).join(" ");
}

var Ge = {
  esc: "escape",
  return: "enter",
  del: "delete",
  "\u2191": "up",
  "\u2193": "down",
  "\u2190": "left",
  "\u2192": "right",
  caps: "capslock",
  "caps-lock": "capslock",
  caps_lock: "capslock"
};

function Ye(e) {
  let r = e.split("+"), n = [], s = "";
  for (let d of r) {
    let y = d.trim().toLowerCase();
    if ([ "ctrl", "control", "alt", "opt", "option", "meta", "cmd", "command", "super", "win", "shift" ].includes(y)) if (y === "control") n.push("ctrl"); else if (y === "option" || y === "opt" || y === "meta") n.push("alt"); else if (y === "command" || y === "cmd" || y === "super" || y === "win") n.push("cmd"); else n.push(y); else s = Ge[y] ?? y;
  }
  return n.sort(), [ ...n, s ].join("+");
}

var ee;

function Ifs(e) {
  if (!ee) {
    let r = new Set(UNe.map(s => Y4e(s.key))), n = new Set;
    for (let s of o1) for (let [d, y] of Object.entries(s.bindings)) if (y !== null && r.has(Y4e(d))) n.add(y);
    ee = n;
  }
  return ee.has(e);
}

var He = p(() => u({
  context: o(),
  bindings: ue(o(), o().nullable())
}));

function Ve(e) {
  return He().safeParse(e).success;
}

function C(e) {
  return Array.isArray(e) && e.every(Ve);
}

var he = uXt, me = [ {
  name: "ctrl",
  aliases: [ "control" ]
}, {
  name: "alt",
  aliases: [ "opt", "option" ]
}, {
  name: "shift"
}, {
  name: "meta"
}, {
  name: "cmd",
  aliases: [ "command", "super", "win" ]
} ], ye = [ "ctrl", "alt", "shift", "meta", "super" ], be = 3, N = 80;

function Xe(e) {
  return he.includes(e);
}

function qe(e, r) {
  let n = e.trim(), s = e === " " ? [] : n.split(/\s+/), d = e !== " " && e.split("+").some(K => !K.trim()), y = /\s\+|\+\s/.test(n) && s.some(K => d7(K).key === "");
  if (d || y) {
    let K = xd(e, N);
    return {
      type: "parse_error",
      severity: "error",
      message: d ? `Empty key part in "${K}"` : `A space next to "+" splits "${K}" into separate presses, and one of them has no key`,
      key: e,
      suggestion: d ? 'Remove extra "+" characters' : 'Remove the spaces next to "+"'
    };
  }
  let h = [], v = [], w = !0;
  for (let K of s) {
    let se = K.split("+"), De = se.findLastIndex(q => d7(q).key !== ""), ae = d7(K), X = [];
    for (let [q, M] of se.entries()) {
      if (q === De || d7(M).key === "") {
        X.push(M);
        continue;
      }
      h.push(M);
      let J = zie(M.toLowerCase(), me);
      if (J === void 0) {
        w = !1;
        continue;
      }
      let ce = d7(J);
      if (ye.some(B => ae[B] && ce[B])) continue;
      X.push(J);
      for (let B of ye) ae[B] ||= ce[B];
    }
    v.push(X.join("+"));
  }
  if (h.length === 0) return null;
  let x = D(h), S = x.length > be + 1 ? be : x.length, _ = x.slice(0, S).map(K => `"${xd(K, N)}"`);
  if (x.length > S) _.push(`${x.length - S} more`);
  let P = new Intl.ListFormat("en", {
    type: "conjunction"
  }).format(_), I = new Intl.ListFormat("en", {
    type: "disjunction"
  }).format(me.map(K => K.name)), Ce = x.length === 1 ? "is not a modifier" : "are not modifiers", Te = r ? ` in ${r}` : "", Be = xd(e, N), Ne = xd(s1(l8(e)), N), oe = v.join(" ");
  return {
    type: "parse_error",
    severity: "error",
    message: `${P} ${Ce}, so "${Be}"${Te} applies to "${Ne}" instead`,
    key: e,
    suggestion: w && oe.length <= N ? `Did you mean "${oe}"?` : `Use ${I} before "+"; for keys pressed one after another, put a space between them, as in "ctrl+x ctrl+s"`
  };
}

function Je(e, r) {
  let n = [];
  if (typeof e !== "object" || e === null) return n.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} is not an object`
  }), n;
  let s = e, d = s.context, y;
  if (typeof d !== "string") n.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} missing "context" field`
  }); else if (!Xe(d)) n.push({
    type: "invalid_context",
    severity: "error",
    message: `Unknown context "${d}"`,
    context: d,
    suggestion: `Valid contexts: ${he.join(", ")}`
  }); else y = d;
  if (typeof s.bindings !== "object" || s.bindings === null) return n.push({
    type: "parse_error",
    severity: "error",
    message: `Keybinding block ${r + 1} missing "bindings" field`
  }), n;
  let h = s.bindings;
  for (let [v, w] of Object.entries(h)) {
    let x = qe(v, y);
    if (x) x.context = y, n.push(x);
    if (w !== null && typeof w !== "string") n.push({
      type: "invalid_action",
      severity: "error",
      message: `Invalid action for "${v}": must be a string or null`,
      key: v,
      context: y
    }); else if (typeof w === "string" && w.startsWith("command:")) {
      if (!/^command:[a-zA-Z0-9:\-_]+$/.test(w)) n.push({
        type: "invalid_action",
        severity: "warning",
        message: `Invalid command binding "${w}" for "${v}": command name may only contain alphanumeric characters, colons, hyphens, and underscores`,
        key: v,
        context: y,
        action: w
      });
      if (y && y !== "Chat") n.push({
        type: "invalid_action",
        severity: "warning",
        message: `Command binding "${w}" must be in "Chat" context, not "${y}"`,
        key: v,
        context: y,
        action: w,
        suggestion: 'Move this binding to a block with "context": "Chat"'
      });
    } else if (typeof w === "string" && !F(w) && !Q(w)) n.push({
      type: "invalid_action",
      severity: "error",
      message: `Unknown action "${w}" for "${v}"${y ? ` in ${y}` : ""} \u2014 this binding is ignored`,
      key: v,
      context: y,
      action: w,
      suggestion: Ze(w)
    }); else if (w === "voice:pushToTalk") {
      let S = l8(v)[0];
      if (S && !S.ctrl && !S.alt && !S.shift && !S.meta && !S.super && /^[a-z]$/.test(S.key)) n.push({
        type: "invalid_action",
        severity: "warning",
        message: `Binding "${v}" to voice:pushToTalk prints into the input during warmup; use space or a modifier combo like meta+k`,
        key: v,
        context: y,
        action: w
      });
    }
  }
  return n;
}

function Ze(e) {
  let r, n = 1 / 0;
  for (let h of BNe) {
    let v = Qe(e.toLowerCase(), h.toLowerCase());
    if (v < n) n = v, r = h;
  }
  if (r && n <= 2) return `Did you mean "${r}"?`;
  let s = nt(e, ":"), d = BNe.filter(h => h.startsWith(`${s}:`));
  if (d.length > 0) return `Valid "${s}:" actions: ${d.join(", ")}`;
  return `Valid action namespaces: ${D(BNe.map(h => nt(h, ":"))).map(h => `${h}:`).join(", ")}`;
}

function Qe(e, r) {
  let n = Array.from({
    length: r.length + 1
  }, (s, d) => d);
  for (let s = 1; s <= e.length; s++) {
    let d = [ s ];
    for (let y = 1; y <= r.length; y++) {
      let h = e[s - 1] === r[y - 1] ? 0 : 1;
      d[y] = Math.min((n[y] ?? 0) + 1, (d[y - 1] ?? 0) + 1, (n[y - 1] ?? 0) + h);
    }
    n = d;
  }
  return n[r.length] ?? 0;
}

function j(e) {
  let r = [], n = /"bindings"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, s;
  while ((s = n.exec(e)) !== null) {
    let d = s[1];
    if (!d) continue;
    let v = e.slice(0, s.index).match(/"context"\s*:\s*"([^"]+)"[^{]*$/)?.[1] ?? "unknown", w = /"([^"]+)"\s*:/g, x = new Map, S;
    while ((S = w.exec(d)) !== null) {
      let _ = S[1];
      if (!_) continue;
      let P = (x.get(_) ?? 0) + 1;
      if (x.set(_, P), P === 2) r.push({
        type: "duplicate",
        severity: "warning",
        message: `Duplicate key "${_}" in ${v} bindings`,
        key: _,
        context: v,
        suggestion: "This key appears multiple times in the same context. JSON uses the last value, earlier values are ignored."
      });
    }
  }
  return r;
}

function en(e) {
  let r = [];
  if (!Array.isArray(e)) return r.push({
    type: "parse_error",
    severity: "error",
    message: "keybindings.json must contain an array",
    suggestion: "Wrap your bindings in [ ]"
  }), r;
  for (let n = 0; n < e.length; n++) r.push(...Je(e[n], n));
  return r;
}

function nn(e) {
  let r = [], n = new Map;
  for (let s of e) {
    let d = n.get(s.context) ?? new Map;
    n.set(s.context, d);
    for (let [y, h] of Object.entries(s.bindings)) {
      let v = Y4e(y), w = d.get(v);
      if (w && w !== h) r.push({
        type: "duplicate",
        severity: "warning",
        message: `Duplicate binding "${y}" in ${s.context} context`,
        key: y,
        context: s.context,
        action: h ?? "null (unbind)",
        suggestion: `Previously bound to "${w}". Only the last binding will be used.`
      });
      d.set(v, h ?? "null");
    }
  }
  return r;
}

function tn(e) {
  let r = [], n = fe();
  for (let s of e) {
    let d = s1(s.chord), y = Y4e(d);
    for (let h of n) if (Y4e(h.key) === y) r.push({
      type: "reserved",
      severity: h.severity,
      message: `"${d}" may not work: ${h.reason}`,
      key: d,
      context: s.context,
      action: s.action ?? void 0
    });
  }
  return r;
}

function rn(e) {
  let r = [];
  for (let n of e) for (let [s, d] of Object.entries(n.bindings)) {
    let y = s.split(" ").map(h => d7(h));
    r.push({
      chord: y,
      action: d,
      context: n.context
    });
  }
  return r;
}

function R(e, r) {
  let n = [];
  if (n.push(...en(e)), C(e)) {
    n.push(...nn(e));
    let d = rn(e);
    n.push(...tn(d));
  }
  let s = new Set;
  return n.filter(d => {
    let y = `${d.type}:${d.key}:${d.context}`;
    if (s.has(y)) return !1;
    return s.add(y), !0;
  });
}

function d8() {
  return k("tengu_keybinding_customization_release", !0);
}

var ln = 500, dn = 200;

function gn() {
  let e = {
    bindings: null,
    warmedFromBackend: !1,
    warmAttempted: !1,
    warnings: [],
    watcher: null,
    initialized: !1,
    disposed: !1,
    lastCustomBindingsLogDate: null,
    loggedShortcutFallbacks: new Set,
    actionFiredLoggedAt: new Map,
    changed: Me(),
    [Symbol.dispose]() {
      if (e.disposed = !0, e.watcher) e.watcher.close(), e.watcher = null;
      e.changed.clear();
    }
  };
  return e;
}

var NT = gn();

function ne(e, r) {
  let n = (new Date).toISOString().slice(0, 10);
  if (e.lastCustomBindingsLogDate === n) return;
  e.lastCustomBindingsLogDate = n, i("tengu_custom_keybindings_loaded", {
    user_binding_count: r
  });
}

function pXt() {
  return cn(Ee(), "keybindings.json");
}

var kao = Fe.state("keybindings");

function G() {
  return jce(o1);
}

function H(e) {
  return jce(ge(e)).filter(r => r.action === null || F(r.action));
}

function te(e) {
  for (let r of e) t(`[keybindings] [${r.severity}] ${r.message}${r.suggestion ? ` \u2014 ${r.suggestion}` : ""}`, {
    level: "warn"
  });
}

function E(e, r) {
  if (e?.suppressFeatureEvents) return;
  if (r === "ok") g("keybinding_load_user_config"); else m("keybinding_load_user_config", r);
}

function ie() {
  return !d8() || Sr("keybindings");
}

function Dfs(e) {
  let r = G();
  if (ie()) return r;
  if (z() && e !== void 0) return r;
  try {
    let n = we(pXt(), "utf-8"), s = Y(n), d = typeof s === "object" && s !== null && "bindings" in s ? s.bindings : void 0;
    return C(d) ? [ ...r, ...H(d) ] : r;
  } catch {
    return r;
  }
}

async function xe(e, r, n) {
  let s = G();
  if (!d8() || Sr("keybindings")) return {
    bindings: s,
    warnings: []
  };
  let d = pXt();
  if (r) {
    let y = await r.read([ kao ]);
    if (!y.ok) {
      let v = y.error, w = yt(v);
      if (t(`[keybindings] Error loading ${d}: ${w}`), n?.suppressFeatureEvents) f("keybinding_load_user_config", "warm_backend_read_failed_fell_back");
      return E(n, "keybinding_config_parse_error"), {
        bindings: s,
        warnings: [ {
          type: "parse_error",
          severity: "error",
          message: `Failed to parse keybindings.json: ${w}`
        } ]
      };
    }
    let h = y.value.items[0];
    if (!h.found) return E(n, "ok"), {
      bindings: s,
      warnings: []
    };
    return pn(Buffer.from(h.value).toString("utf-8"), e, s, d, n);
  }
  try {
    let y = await on(d, "utf-8"), h = Y(y), v;
    if (typeof h === "object" && h !== null && "bindings" in h) v = h.bindings; else return t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), 
    E(n, "keybinding_config_invalid_format"), {
      bindings: s,
      warnings: [ {
        type: "parse_error",
        severity: "error",
        message: 'keybindings.json must have a "bindings" array',
        suggestion: 'Use format: { "bindings": [ ... ] }'
      } ]
    };
    if (!C(v)) {
      let P = !Array.isArray(v) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", I = !Array.isArray(v) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return t(`[keybindings] Invalid keybindings.json: ${P}`), E(n, "keybinding_config_invalid_structure"), 
      {
        bindings: s,
        warnings: [ {
          type: "parse_error",
          severity: "error",
          message: P,
          suggestion: I
        } ]
      };
    }
    let w = H(v);
    t(`[keybindings] Loaded ${w.length} user bindings from ${d}`);
    let x = [ ...s, ...w ];
    ne(e, w.length);
    let _ = [ ...j(y), ...R(v, x) ];
    if (_.length > 0) t(`[keybindings] Found ${_.length} validation issue(s)`), te(_);
    return E(n, "ok"), {
      bindings: x,
      warnings: _
    };
  } catch (y) {
    if (W(y)) return E(n, "ok"), {
      bindings: s,
      warnings: []
    };
    return t(`[keybindings] Error loading ${d}: ${l(y)}`), E(n, "keybinding_config_parse_error"), 
    {
      bindings: s,
      warnings: [ {
        type: "parse_error",
        severity: "error",
        message: `Failed to parse keybindings.json: ${l(y)}`
      } ]
    };
  }
}

function pn(e, r, n, s, d) {
  try {
    let y = Y(e), h;
    if (typeof y === "object" && y !== null && "bindings" in y) h = y.bindings; else return t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), 
    E(d, "keybinding_config_invalid_format"), {
      bindings: n,
      warnings: [ {
        type: "parse_error",
        severity: "error",
        message: 'keybindings.json must have a "bindings" array',
        suggestion: 'Use format: { "bindings": [ ... ] }'
      } ]
    };
    if (!C(h)) {
      let _ = !Array.isArray(h) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", P = !Array.isArray(h) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return t(`[keybindings] Invalid keybindings.json: ${_}`), E(d, "keybinding_config_invalid_structure"), 
      {
        bindings: n,
        warnings: [ {
          type: "parse_error",
          severity: "error",
          message: _,
          suggestion: P
        } ]
      };
    }
    let v = H(h);
    t(`[keybindings] Loaded ${v.length} user bindings from ${s}`);
    let w = [ ...n, ...v ];
    ne(r, v.length);
    let S = [ ...j(e), ...R(h, w) ];
    if (S.length > 0) t(`[keybindings] Found ${S.length} validation issue(s)`), te(S);
    return E(d, "ok"), {
      bindings: w,
      warnings: S
    };
  } catch (y) {
    return t(`[keybindings] Error loading ${s}: ${l(y)}`), E(d, "keybinding_config_parse_error"), 
    {
      bindings: n,
      warnings: [ {
        type: "parse_error",
        severity: "error",
        message: `Failed to parse keybindings.json: ${l(y)}`
      } ]
    };
  }
}

async function Lfs(e, r) {
  if (e.bindings) return e.bindings;
  if (e.warmAttempted) return;
  if (ve()) return;
  if (ie()) return;
  let n = await xe(e, r, {
    suppressFeatureEvents: !0
  });
  if (e.warmAttempted = !0, n.warnings.length > 0) return n.bindings;
  if (!e.bindings) e.bindings = n.bindings, e.warnings = [], e.warmedFromBackend = !0, 
  g("keybinding_load_user_config");
  return e.bindings;
}

function Se(e) {
  if (!e.warmedFromBackend) return !1;
  if (ie()) return e.bindings = null, e.warnings = [], e.warmedFromBackend = !1, !0;
  return e.warmedFromBackend = !1, !1;
}

function fDn(e) {
  if (e.bindings && !Se(e)) return e.bindings;
  return lxt(e).bindings;
}

function lxt(e) {
  if (e.bindings && !Se(e)) return {
    bindings: e.bindings,
    warnings: e.warnings
  };
  e.warmedFromBackend = !1;
  let r = G();
  if (!d8() || Sr("keybindings")) return e.bindings = r, e.warnings = [], {
    bindings: e.bindings,
    warnings: e.warnings
  };
  let n = pXt();
  try {
    let s = we(n, "utf-8"), d = Y(s), y;
    if (typeof d === "object" && d !== null && "bindings" in d) y = d.bindings; else return m("keybinding_load_user_config", "keybinding_config_invalid_format"), 
    e.bindings = r, e.warnings = [ {
      type: "parse_error",
      severity: "error",
      message: 'keybindings.json must have a "bindings" array',
      suggestion: 'Use format: { "bindings": [ ... ] }'
    } ], {
      bindings: e.bindings,
      warnings: e.warnings
    };
    if (!C(y)) {
      let w = !Array.isArray(y) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", x = !Array.isArray(y) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return m("keybinding_load_user_config", "keybinding_config_invalid_structure"), 
      e.bindings = r, e.warnings = [ {
        type: "parse_error",
        severity: "error",
        message: w,
        suggestion: x
      } ], {
        bindings: e.bindings,
        warnings: e.warnings
      };
    }
    let h = H(y);
    t(`[keybindings] Loaded ${h.length} user bindings from ${n}`), e.bindings = [ ...r, ...h ], 
    ne(e, h.length);
    let v = j(s);
    if (e.warnings = [ ...v, ...R(y, e.bindings) ], e.warnings.length > 0) t(`[keybindings] Found ${e.warnings.length} validation issue(s)`), 
    te(e.warnings);
    return g("keybinding_load_user_config"), {
      bindings: e.bindings,
      warnings: e.warnings
    };
  } catch (s) {
    if (W(s)) return g("keybinding_load_user_config"), e.bindings = r, e.warnings = [], 
    {
      bindings: e.bindings,
      warnings: e.warnings
    };
    return t(`[keybindings] Error loading ${n}: ${l(s)}`), m("keybinding_load_user_config", "keybinding_config_parse_error"), 
    e.bindings = r, e.warnings = [ {
      type: "parse_error",
      severity: "error",
      message: `Failed to parse keybindings.json: ${l(s)}`
    } ], {
      bindings: e.bindings,
      warnings: e.warnings
    };
  }
}

async function Nfs(e) {
  if (e.initialized || e.disposed) return;
  if (!d8() || Sr("keybindings")) {
    t("[keybindings] Skipping file watcher - user customization disabled");
    return;
  }
  let r = pXt(), n = an(r);
  try {
    if (!(await sn(n)).isDirectory()) {
      t(`[keybindings] Not watching: ${n} is not a directory`), f("keybinding_watcher_init", "watch_dir_inaccessible");
      return;
    }
  } catch {
    t(`[keybindings] Not watching: ${n} does not exist`), f("keybinding_watcher_init", "watch_dir_inaccessible");
    return;
  }
  e.initialized = !0, t(`[keybindings] Watching for changes to ${r}`), e.watcher = lv.watch(r, {
    persistent: !0,
    ignoreInitial: !0,
    awaitWriteFinish: {
      stabilityThreshold: ln,
      pollInterval: dn
    },
    ignorePermissionErrors: !0,
    usePolling: !0,
    interval: 2e3,
    atomic: !0
  }), e.watcher.on("add", s => ke(e, s)), e.watcher.on("change", s => ke(e, s)), e.watcher.on("unlink", s => un(e, s)), 
  e.watcher.on("error", s => t(`[keybindings] watcher error: ${l(s)}`, {
    level: "warn"
  })), bt(e), g("keybinding_watcher_init");
}

async function ke(e, r) {
  t(`[keybindings] Detected change to ${r}`);
  try {
    let n = await xe(e);
    e.bindings = n.bindings, e.warnings = n.warnings, e.warmedFromBackend = !1, e.changed.emit(n), 
    g("keybinding_hot_reload");
  } catch (n) {
    t(`[keybindings] Error reloading: ${l(n)}`), f("keybinding_hot_reload", "keybinding_reload_failed");
  }
}

function un(e, r) {
  t(`[keybindings] Detected deletion of ${r}`);
  let n = G();
  e.bindings = n, e.warnings = [], e.warmedFromBackend = !1, e.changed.emit({
    bindings: n,
    warnings: []
  });
}

var re = {
  "\u2020": "t"
};

function _e(e) {
  return Object.hasOwn(re, e);
}

var Ggr = {
  \u03c0: "alt+p",
  \u00f8: "alt+o"
};

function Tao(e) {
  return Object.hasOwn(Ggr, e);
}

function _F() {
  let e = O();
  if (e === "macos") return e;
  if (a.LC_TERMINAL === "iTerm2" || a.TERM_PROGRAM === "Apple_Terminal" || a.TERM_PROGRAM === "iTerm.app") return "macos";
  return e;
}

var fn = {
  escape: "escape",
  return: "enter",
  tab: "tab",
  backspace: "backspace",
  delete: "delete",
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  pageup: "pageup",
  pagedown: "pagedown",
  wheelup: "wheelup",
  wheeldown: "wheeldown",
  home: "home",
  end: "end"
};

function fXt(e, r, n) {
  let s = !1, d;
  for (let y = 0; y < n.length; y++) {
    let h = n[y];
    if (!h || h.context !== r || h.action !== e) continue;
    if (s = !0, !Pe(n, y)) d = h.chord;
  }
  if (d) return d;
  return s ? null : void 0;
}

function Aao(e, r, n) {
  let s = [];
  return n.forEach((d, y) => {
    if (d.context === r && d.action === e && !Pe(n, y)) s.push(d.chord);
  }), s;
}

function mDn(e, r, n, s) {
  let d, y = -1;
  for (let h of Aao(e, r, n)) {
    let v = s.some(P => P.context === r && P.action === e && V(P.chord, h)), w = h.length === 1 ? h[0] : void 0, x = w !== void 0 && !w.ctrl && !w.alt && !w.meta && !w.super, S = 0;
    if (x && mn.has(w.key)) S = 2; else if (x && w.key.length === 1) S = 1;
    let _ = (v ? 0 : 3) + S;
    if (_ > y) d = h, y = _;
  }
  return d;
}

var mn = new Set([ "up", "down", "left", "right", "enter", "escape", "tab", " ", "pageup", "pagedown", "home", "end", "backspace", "delete" ]);

function Pe(e, r) {
  let n = e[r];
  if (!n) return !1;
  for (let s = r + 1; s < e.length; s++) {
    let d = e[s];
    if (d && d.context === n.context && V(d.chord, n.chord)) return !0;
  }
  return !1;
}

function Cao(e, r, n) {
  let s = null;
  for (let d of n) {
    if (d.context !== r || d.chord.length !== 1) continue;
    let y = d.chord[0];
    if (y && jNe(y, e)) s = d.action;
  }
  return s;
}

function gDn(e, r, n) {
  let s;
  for (let d of n) {
    if (d.chord.length !== 1 || !r.includes(d.context)) continue;
    let y = d.chord[0];
    if (y && jNe(y, e)) s = d.action;
  }
  return s;
}

function $fs(e, r, n) {
  let s = new Set;
  for (let d of n) {
    let y = d.chord[0];
    if (d.context !== e || d.chord.length !== 1 || d.action === null || !y) continue;
    let h = gDn(y, [ e, "Global" ], n), v = gDn(y, [ r, "Global" ], n);
    if (h === d.action && v && v !== h) s.add(v);
  }
  return s;
}

function V(e, r) {
  if (e.length !== r.length) return !1;
  for (let n = 0; n < e.length; n++) {
    let s = e[n], d = r[n];
    if (!s || !d || !jNe(s, d)) return !1;
  }
  return !0;
}

function X4e(e, r, n) {
  let s = fXt(e, r, n);
  return s ? Bce(s, _F()) : s;
}

function wbe(e) {
  let r = e.name === "enter" ? `\n` : e.key, n = e.meta;
  if (O() === "macos" && !e.meta && !e.ctrl && _e(r)) r = re[r], n = !0;
  let s = fn[e.name] ?? (r.length === 1 ? r.toLowerCase() : null);
  if (!s) return null;
  let y = !(e.shift && r.length === 1 && e.name.length === 1 && r !== e.name && r.toLowerCase() === r.toUpperCase()) && (e.shift || r.length === 1 && r !== r.toLowerCase() && r === r.toUpperCase());
  return {
    key: s,
    ctrl: e.ctrl,
    alt: n,
    shift: y,
    meta: n,
    super: e.superKey
  };
}

function jNe(e, r) {
  return e.key === r.key && e.ctrl === r.ctrl && e.shift === r.shift && (e.alt || e.meta) === (r.alt || r.meta) && e.super === r.super;
}

function Ke(e, r) {
  if (e.length >= r.chord.length) return !1;
  for (let n = 0; n < e.length; n++) {
    let s = e[n], d = r.chord[n];
    if (!s || !d) return !1;
    if (!jNe(s, d)) return !1;
  }
  return !0;
}

function J4e(e, r, n, s) {
  if (e.name === "escape" && s !== null) return {
    type: "chord_cancelled"
  };
  let d = wbe(e);
  if (!d) {
    if (s !== null) return {
      type: "chord_cancelled"
    };
    return {
      type: "none"
    };
  }
  let y = s ? [ ...s, d ] : [ d ], h = null, v;
  for (let w of n) {
    if (!r.includes(w.context)) continue;
    if (w.chord.length > y.length) {
      if (Ke(y, w)) h ??= new Map, h.set(s1(w.chord), w.action);
    } else if (V(y, w.chord)) v = w;
  }
  if (h !== null) {
    for (let w of h.values()) if (w !== null) return {
      type: "chord_started",
      pending: y
    };
  }
  if (v) {
    if (v.action === null) return {
      type: "unbound"
    };
    return {
      type: "match",
      action: v.action
    };
  }
  if (s !== null) return {
    type: "chord_cancelled"
  };
  return {
    type: "none"
  };
}

function Vgr(e, r, n, s) {
  if (e.name === "escape" && s !== null) return {
    type: "chord_cancelled"
  };
  let d = wbe(e);
  if (!d) {
    if (s !== null) return {
      type: "chord_cancelled"
    };
    return {
      type: "none"
    };
  }
  let y = s ? [ ...s, d ] : [ d ], h = new Set(r), v = new Map, w = new Map;
  for (let x of n) {
    if (!h.has(x.context)) continue;
    if (x.chord.length > y.length) {
      if (Ke(y, x)) v.set(s1(x.chord), x.action);
    } else if (V(y, x.chord)) w.set(x.context, x);
  }
  for (let x of v.values()) if (x !== null) return {
    type: "chord_started",
    pending: y
  };
  for (let x of r) {
    let S = w.get(x);
    if (S) {
      if (S.action === null) return {
        type: "unbound"
      };
      return {
        type: "match",
        action: S.action
      };
    }
  }
  if (s !== null) return {
    type: "chord_cancelled"
  };
  return {
    type: "none"
  };
}

var yn = new Set(BNe);

function Ae(e) {
  if (e.startsWith("command:")) return b("command:custom");
  if (yn.has(e)) return Cn(e);
  return b("unknown");
}

var bn = /^[A-Za-z0-9 +\-_/[\]\u2191\u2193\u2190\u2192]{1,32}$/u;

function hn(e) {
  return bn.test(e) ? Cn(e) : b("invalid");
}

var kn = 1e3;

function mXt(e) {
  let r = Date.now(), n = NT.actionFiredLoggedAt, s = n.get(e);
  if (s !== void 0 && r - s < kn) return;
  n.set(e, r), i("tengu_keybinding_fired", {
    action_id: Ae(e)
  });
}

function Lit(e, r, n, s) {
  i("tengu_keybinding_fallback_used", {
    action: Ae(e),
    context: c(r),
    fallback: hn(n),
    reason: c(s)
  });
}

export { o1, UNe, vao, Eao, Y4e, Ifs, uXt, Ofs, Mfs, BNe, pDn, Hfs, d7, l8, s1, zgr, Bce, jce, d8, NT, pXt, kao, Dfs, Lfs, fDn, lxt, Nfs, Ggr, Tao, _F, fXt, Aao, mDn, Cao, gDn, $fs, X4e, wbe, jNe, J4e, Vgr, mXt, Lit };
