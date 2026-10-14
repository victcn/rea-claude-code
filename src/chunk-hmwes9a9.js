// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ii } from "./chunk-5wbhf1bk.js";

import { ie } from "./chunk-yxennhe9.js";

import { we, C, Ne } from "./chunk-m8ez8fhk.js";

var w = C(function(et) {
  class V extends Error {
    constructor(t, e, i) {
      super(i);
      Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name, 
      this.code = e, this.exitCode = t, this.nestedError = void 0;
    }
  }
  class W extends V {
    constructor(t) {
      super(1, "commander.invalidArgument", t);
      Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name;
    }
  }
  et.CommanderError = V;
  et.InvalidArgumentError = W;
});

var H = C(function(ot) {
  var {InvalidArgumentError: st} = w();
  class q {
    constructor(t, e) {
      switch (this.description = e || "", this.variadic = !1, this.parseArg = void 0, 
      this.defaultValue = void 0, this.defaultValueDescription = void 0, this.argChoices = void 0, 
      t[0]) {
       case "<":
        this.required = !0, this._name = t.slice(1, -1);
        break;

       case "[":
        this.required = !1, this._name = t.slice(1, -1);
        break;

       default:
        this.required = !0, this._name = t;
        break;
      }
      if (this._name.length > 3 && this._name.slice(-3) === "...") this.variadic = !0, 
      this._name = this._name.slice(0, -3);
    }
    name() {
      return this._name;
    }
    _concatValue(t, e) {
      if (e === this.defaultValue || !Array.isArray(e)) return [ t ];
      return e.concat(t);
    }
    default(t, e) {
      return this.defaultValue = t, this.defaultValueDescription = e, this;
    }
    argParser(t) {
      return this.parseArg = t, this;
    }
    choices(t) {
      return this.argChoices = t.slice(), this.parseArg = (e, i) => {
        if (!this.argChoices.includes(e)) throw new st(`Allowed choices are ${this.argChoices.join(", ")}.`);
        if (this.variadic) return this._concatValue(e, i);
        return e;
      }, this;
    }
    argRequired() {
      return this.required = !0, this;
    }
    argOptional() {
      return this.required = !1, this;
    }
  }
  function rt(t) {
    let e = t.name() + (t.variadic === !0 ? "..." : "");
    return t.required ? "<" + e + ">" : "[" + e + "]";
  }
  ot.Argument = q;
  ot.humanReadableArgName = rt;
});

var k = C(function(lt) {
  var {humanReadableArgName: ut} = H();
  class F {
    constructor() {
      this.helpWidth = void 0, this.sortSubcommands = !1, this.sortOptions = !1, this.showGlobalOptions = !1;
    }
    visibleCommands(t) {
      let e = t.commands.filter(n => !n._hidden), i = t._getHelpCommand();
      if (i && !i._hidden) e.push(i);
      if (this.sortSubcommands) e.sort((n, s) => n.name().localeCompare(s.name()));
      return e;
    }
    compareOptions(t, e) {
      let i = n => n.short ? n.short.replace(/^-/, "") : n.long.replace(/^--/, "");
      return i(t).localeCompare(i(e));
    }
    visibleOptions(t) {
      let e = t.options.filter(n => !n.hidden), i = t._getHelpOption();
      if (i && !i.hidden) {
        let n = i.short && t._findOption(i.short), s = i.long && t._findOption(i.long);
        if (!n && !s) e.push(i); else if (i.long && !s) e.push(t.createOption(i.long, i.description)); else if (i.short && !n) e.push(t.createOption(i.short, i.description));
      }
      if (this.sortOptions) e.sort(this.compareOptions);
      return e;
    }
    visibleGlobalOptions(t) {
      if (!this.showGlobalOptions) return [];
      let e = [];
      for (let i = t.parent; i; i = i.parent) {
        let n = i.options.filter(s => !s.hidden);
        e.push(...n);
      }
      if (this.sortOptions) e.sort(this.compareOptions);
      return e;
    }
    visibleArguments(t) {
      if (t._argsDescription) t.registeredArguments.forEach(e => {
        e.description = e.description || t._argsDescription[e.name()] || "";
      });
      if (t.registeredArguments.find(e => e.description)) return t.registeredArguments;
      return [];
    }
    subcommandTerm(t) {
      let e = t.registeredArguments.map(i => ut(i)).join(" ");
      return t._name + (t._aliases[0] ? "|" + t._aliases[0] : "") + (t.options.length ? " [options]" : "") + (e ? " " + e : "");
    }
    optionTerm(t) {
      return t.flags;
    }
    argumentTerm(t) {
      return t.name();
    }
    longestSubcommandTermLength(t, e) {
      return e.visibleCommands(t).reduce((i, n) => Math.max(i, e.subcommandTerm(n).length), 0);
    }
    longestOptionTermLength(t, e) {
      return e.visibleOptions(t).reduce((i, n) => Math.max(i, e.optionTerm(n).length), 0);
    }
    longestGlobalOptionTermLength(t, e) {
      return e.visibleGlobalOptions(t).reduce((i, n) => Math.max(i, e.optionTerm(n).length), 0);
    }
    longestArgumentTermLength(t, e) {
      return e.visibleArguments(t).reduce((i, n) => Math.max(i, e.argumentTerm(n).length), 0);
    }
    commandUsage(t) {
      let e = t._name;
      if (t._aliases[0]) e = e + "|" + t._aliases[0];
      let i = "";
      for (let n = t.parent; n; n = n.parent) i = n.name() + " " + i;
      return i + e + " " + t.usage();
    }
    commandDescription(t) {
      return t.description();
    }
    subcommandDescription(t) {
      return t.summary() || t.description();
    }
    optionDescription(t) {
      let e = [];
      if (t.argChoices) e.push(`choices: ${t.argChoices.map(i => JSON.stringify(i)).join(", ")}`);
      if (t.defaultValue !== void 0) {
        if (t.required || t.optional || t.isBoolean() && typeof t.defaultValue === "boolean") e.push(`default: ${t.defaultValueDescription || JSON.stringify(t.defaultValue)}`);
      }
      if (t.presetArg !== void 0 && t.optional) e.push(`preset: ${JSON.stringify(t.presetArg)}`);
      if (t.envVar !== void 0) e.push(`env: ${t.envVar}`);
      if (e.length > 0) return `${t.description} (${e.join(", ")})`;
      return t.description;
    }
    argumentDescription(t) {
      let e = [];
      if (t.argChoices) e.push(`choices: ${t.argChoices.map(i => JSON.stringify(i)).join(", ")}`);
      if (t.defaultValue !== void 0) e.push(`default: ${t.defaultValueDescription || JSON.stringify(t.defaultValue)}`);
      if (e.length > 0) {
        let i = `(${e.join(", ")})`;
        if (t.description) return `${t.description} ${i}`;
        return i;
      }
      return t.description;
    }
    formatHelp(t, e) {
      let i = e.padWidth(t, e), n = e.helpWidth || 80, s = 2, r = 2;
      function a(p, O) {
        if (O) {
          let S = `${p.padEnd(i + 2)}${O}`;
          return e.wrap(S, n - 2, i + 2);
        }
        return p;
      }
      function o(p) {
        return p.join(`\n`).replace(/^/gm, " ".repeat(2));
      }
      let h = [ `Usage: ${e.commandUsage(t)}`, "" ], u = e.commandDescription(t);
      if (u.length > 0) h = h.concat([ e.wrap(u, n, 0), "" ]);
      let c = e.visibleArguments(t).map(p => a(e.argumentTerm(p), e.argumentDescription(p)));
      if (c.length > 0) h = h.concat([ "Arguments:", o(c), "" ]);
      let d = e.visibleOptions(t).map(p => a(e.optionTerm(p), e.optionDescription(p)));
      if (d.length > 0) h = h.concat([ "Options:", o(d), "" ]);
      if (this.showGlobalOptions) {
        let p = e.visibleGlobalOptions(t).map(O => a(e.optionTerm(O), e.optionDescription(O)));
        if (p.length > 0) h = h.concat([ "Global Options:", o(p), "" ]);
      }
      let _ = e.visibleCommands(t).map(p => a(e.subcommandTerm(p), e.subcommandDescription(p)));
      if (_.length > 0) h = h.concat([ "Commands:", o(_), "" ]);
      return h.join(`\n`);
    }
    padWidth(t, e) {
      return Math.max(e.longestOptionTermLength(t, e), e.longestGlobalOptionTermLength(t, e), e.longestSubcommandTermLength(t, e), e.longestArgumentTermLength(t, e));
    }
    wrap(t, e, i, n = 40) {
      let r = new RegExp(`[\\n][${" \\f\\t\\v\xa0\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff"}]+`);
      if (t.match(r)) return t;
      let a = e - i;
      if (a < n) return t;
      let o = t.slice(0, i), h = t.slice(i).replace(`\r\n`, `\n`), u = " ".repeat(i), d = `\\s${"\u200b"}`, _ = new RegExp(`\n|.{1,${a - 1}}([${d}]|$)|[^${d}]+?([${d}]|$)`, "g"), p = h.match(_) || [];
      return o + p.map((O, S) => {
        if (O === `\n`) return "";
        return (S > 0 ? u : "") + O.trimEnd();
      }).join(`\n`);
    }
  }
  lt.Help = F;
});

var D = C(function(ft) {
  var {InvalidArgumentError: mt} = w();
  class M {
    constructor(t, e) {
      this.flags = t, this.description = e || "", this.required = t.includes("<"), this.optional = t.includes("["), 
      this.variadic = /\w\.\.\.[>\]]$/.test(t), this.mandatory = !1;
      let i = dt(t);
      if (this.short = i.shortFlag, this.long = i.longFlag, this.negate = !1, this.long) this.negate = this.long.startsWith("--no-");
      this.defaultValue = void 0, this.defaultValueDescription = void 0, this.presetArg = void 0, 
      this.envVar = void 0, this.parseArg = void 0, this.hidden = !1, this.argChoices = void 0, 
      this.conflictsWith = [], this.implied = void 0;
    }
    default(t, e) {
      return this.defaultValue = t, this.defaultValueDescription = e, this;
    }
    preset(t) {
      return this.presetArg = t, this;
    }
    conflicts(t) {
      return this.conflictsWith = this.conflictsWith.concat(t), this;
    }
    implies(t) {
      let e = t;
      if (typeof t === "string") e = {
        [t]: !0
      };
      return this.implied = Object.assign(this.implied || {}, e), this;
    }
    env(t) {
      return this.envVar = t, this;
    }
    argParser(t) {
      return this.parseArg = t, this;
    }
    makeOptionMandatory(t = !0) {
      return this.mandatory = !!t, this;
    }
    hideHelp(t = !0) {
      return this.hidden = !!t, this;
    }
    _concatValue(t, e) {
      if (e === this.defaultValue || !Array.isArray(e)) return [ t ];
      return e.concat(t);
    }
    choices(t) {
      return this.argChoices = t.slice(), this.parseArg = (e, i) => {
        if (!this.argChoices.includes(e)) throw new mt(`Allowed choices are ${this.argChoices.join(", ")}.`);
        if (this.variadic) return this._concatValue(e, i);
        return e;
      }, this;
    }
    name() {
      if (this.long) return this.long.replace(/^--/, "");
      return this.short.replace(/^-/, "");
    }
    attributeName() {
      return pt(this.name().replace(/^no-/, ""));
    }
    is(t) {
      return this.short === t || this.long === t;
    }
    isBoolean() {
      return !this.required && !this.optional && !this.negate;
    }
  }
  class j {
    constructor(t) {
      this.positiveOptions = new Map, this.negativeOptions = new Map, this.dualOptions = new Set, 
      t.forEach(e => {
        if (e.negate) this.negativeOptions.set(e.attributeName(), e); else this.positiveOptions.set(e.attributeName(), e);
      }), this.negativeOptions.forEach((e, i) => {
        if (this.positiveOptions.has(i)) this.dualOptions.add(i);
      });
    }
    valueFromOption(t, e) {
      let i = e.attributeName();
      if (!this.dualOptions.has(i)) return !0;
      let n = this.negativeOptions.get(i).presetArg, s = n !== void 0 ? n : !1;
      return e.negate === (s === t);
    }
  }
  function pt(t) {
    return t.split("-").reduce((e, i) => e + i[0].toUpperCase() + i.slice(1));
  }
  function dt(t) {
    let e, i, n = t.split(/[ |,]+/);
    if (n.length > 1 && !/^[[<]/.test(n[1])) e = n.shift();
    if (i = n.shift(), !e && /^-[^-]$/.test(i)) e = i, i = void 0;
    return {
      shortFlag: e,
      longFlag: i
    };
  }
  ft.Option = M;
  ft.DualOptions = j;
});

var U = C(function(At) {
  function Ot(t, e) {
    if (Math.abs(t.length - e.length) > 3) return Math.max(t.length, e.length);
    let i = [];
    for (let n = 0; n <= t.length; n++) i[n] = [ n ];
    for (let n = 0; n <= e.length; n++) i[0][n] = n;
    for (let n = 1; n <= e.length; n++) for (let s = 1; s <= t.length; s++) {
      let r = 1;
      if (t[s - 1] === e[n - 1]) r = 0; else r = 1;
      if (i[s][n] = Math.min(i[s - 1][n] + 1, i[s][n - 1] + 1, i[s - 1][n - 1] + r), s > 1 && n > 1 && t[s - 1] === e[n - 2] && t[s - 2] === e[n - 1]) i[s][n] = Math.min(i[s][n], i[s - 2][n - 2] + 1);
    }
    return i[t.length][e.length];
  }
  function Ct(t, e) {
    if (!e || e.length === 0) return "";
    e = Array.from(new Set(e));
    let i = t.startsWith("--");
    if (i) t = t.slice(2), e = e.map(a => a.slice(2));
    let n = [], s = 3, r = .4;
    if (e.forEach(a => {
      if (a.length <= 1) return;
      let o = Ot(t, a), h = Math.max(t.length, a.length);
      if ((h - o) / h > r) {
        if (o < s) s = o, n = [ a ]; else if (o === s) n.push(a);
      }
    }), n.sort((a, o) => a.localeCompare(o)), i) n = n.map(a => `--${a}`);
    if (n.length > 1) return `\n(Did you mean one of ${n.join(", ")}?)`;
    if (n.length === 1) return `\n(Did you mean ${n[0]}?)`;
    return "";
  }
  At.suggestSimilar = Ct;
});

var B = C(function(vt) {
  var wt = Ne("events").EventEmitter, A = Ne("child_process"), f = Ne("path"), b = Ne("fs"), l = Ne("process"), {Argument: Et, humanReadableArgName: xt} = H(), {CommanderError: T} = w(), {Help: $t} = k(), {Option: L, DualOptions: Ht} = D(), {suggestSimilar: R} = U();
  class I extends wt {
    constructor(t) {
      super();
      this.commands = [], this.options = [], this.parent = null, this._allowUnknownOption = !1, 
      this._allowExcessArguments = !0, this.registeredArguments = [], this._args = this.registeredArguments, 
      this.args = [], this.rawArgs = [], this.processedArgs = [], this._scriptPath = null, 
      this._name = t || "", this._optionValues = {}, this._optionValueSources = {}, this._storeOptionsAsProperties = !1, 
      this._actionHandler = null, this._executableHandler = !1, this._executableFile = null, 
      this._executableDir = null, this._defaultCommandName = null, this._exitCallback = null, 
      this._aliases = [], this._combineFlagAndOptionalValue = !0, this._description = "", 
      this._summary = "", this._argsDescription = void 0, this._enablePositionalOptions = !1, 
      this._passThroughOptions = !1, this._lifeCycleHooks = {}, this._showHelpAfterError = !1, 
      this._showSuggestionAfterError = !0, this._outputConfiguration = {
        writeOut: e => l.stdout.write(e),
        writeErr: e => l.stderr.write(e),
        getOutHelpWidth: () => l.stdout.isTTY ? l.stdout.columns : void 0,
        getErrHelpWidth: () => l.stderr.isTTY ? l.stderr.columns : void 0,
        outputError: (e, i) => i(e)
      }, this._hidden = !1, this._helpOption = void 0, this._addImplicitHelpCommand = void 0, 
      this._helpCommand = void 0, this._helpConfiguration = {};
    }
    copyInheritedSettings(t) {
      return this._outputConfiguration = t._outputConfiguration, this._helpOption = t._helpOption, 
      this._helpCommand = t._helpCommand, this._helpConfiguration = t._helpConfiguration, 
      this._exitCallback = t._exitCallback, this._storeOptionsAsProperties = t._storeOptionsAsProperties, 
      this._combineFlagAndOptionalValue = t._combineFlagAndOptionalValue, this._allowExcessArguments = t._allowExcessArguments, 
      this._enablePositionalOptions = t._enablePositionalOptions, this._showHelpAfterError = t._showHelpAfterError, 
      this._showSuggestionAfterError = t._showSuggestionAfterError, this;
    }
    _getCommandAndAncestors() {
      let t = [];
      for (let e = this; e; e = e.parent) t.push(e);
      return t;
    }
    command(t, e, i) {
      let n = e, s = i;
      if (typeof n === "object" && n !== null) s = n, n = null;
      s = s || {};
      let [, r, a] = t.match(/([^ ]+) *(.*)/), o = this.createCommand(r);
      if (n) o.description(n), o._executableHandler = !0;
      if (s.isDefault) this._defaultCommandName = o._name;
      if (o._hidden = !!(s.noHelp || s.hidden), o._executableFile = s.executableFile || null, 
      a) o.arguments(a);
      if (this._registerCommand(o), o.parent = this, o.copyInheritedSettings(this), n) return this;
      return o;
    }
    createCommand(t) {
      return new I(t);
    }
    createHelp() {
      return Object.assign(new $t, this.configureHelp());
    }
    configureHelp(t) {
      if (t === void 0) return this._helpConfiguration;
      return this._helpConfiguration = t, this;
    }
    configureOutput(t) {
      if (t === void 0) return this._outputConfiguration;
      return Object.assign(this._outputConfiguration, t), this;
    }
    showHelpAfterError(t = !0) {
      if (typeof t !== "string") t = !!t;
      return this._showHelpAfterError = t, this;
    }
    showSuggestionAfterError(t = !0) {
      return this._showSuggestionAfterError = !!t, this;
    }
    addCommand(t, e) {
      if (!t._name) throw Error(`Command passed to .addCommand() must have a name\n- specify the name in Command constructor or using .name()`);
      if (e = e || {}, e.isDefault) this._defaultCommandName = t._name;
      if (e.noHelp || e.hidden) t._hidden = !0;
      return this._registerCommand(t), t.parent = this, t._checkForBrokenPassThrough(), 
      this;
    }
    createArgument(t, e) {
      return new Et(t, e);
    }
    argument(t, e, i, n) {
      let s = this.createArgument(t, e);
      if (typeof i === "function") s.default(n).argParser(i); else s.default(i);
      return this.addArgument(s), this;
    }
    arguments(t) {
      return t.trim().split(/ +/).forEach(e => {
        this.argument(e);
      }), this;
    }
    addArgument(t) {
      let e = this.registeredArguments.slice(-1)[0];
      if (e && e.variadic) throw Error(`only the last argument can be variadic '${e.name()}'`);
      if (t.required && t.defaultValue !== void 0 && t.parseArg === void 0) throw Error(`a default value for a required argument is never used: '${t.name()}'`);
      return this.registeredArguments.push(t), this;
    }
    helpCommand(t, e) {
      if (typeof t === "boolean") return this._addImplicitHelpCommand = t, this;
      t = t ?? "help [command]";
      let [, i, n] = t.match(/([^ ]+) *(.*)/), s = e ?? "display help for command", r = this.createCommand(i);
      if (r.helpOption(!1), n) r.arguments(n);
      if (s) r.description(s);
      return this._addImplicitHelpCommand = !0, this._helpCommand = r, this;
    }
    addHelpCommand(t, e) {
      if (typeof t !== "object") return this.helpCommand(t, e), this;
      return this._addImplicitHelpCommand = !0, this._helpCommand = t, this;
    }
    _getHelpCommand() {
      if (this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"))) {
        if (this._helpCommand === void 0) this.helpCommand(void 0, void 0);
        return this._helpCommand;
      }
      return null;
    }
    hook(t, e) {
      let i = [ "preSubcommand", "preAction", "postAction" ];
      if (!i.includes(t)) throw Error(`Unexpected value for event passed to hook : '${t}'.\nExpecting one of '${i.join("', '")}'`);
      if (this._lifeCycleHooks[t]) this._lifeCycleHooks[t].push(e); else this._lifeCycleHooks[t] = [ e ];
      return this;
    }
    exitOverride(t) {
      if (t) this._exitCallback = t; else this._exitCallback = e => {
        if (e.code !== "commander.executeSubCommandAsync") throw e;
      };
      return this;
    }
    _exit(t, e, i) {
      if (this._exitCallback) this._exitCallback(new T(t, e, i));
      l.exit(t);
    }
    action(t) {
      let e = i => {
        let n = this.registeredArguments.length, s = i.slice(0, n);
        if (this._storeOptionsAsProperties) s[n] = this; else s[n] = this.opts();
        return s.push(this), t.apply(this, s);
      };
      return this._actionHandler = e, this;
    }
    createOption(t, e) {
      return new L(t, e);
    }
    _callParseArg(t, e, i, n) {
      try {
        return t.parseArg(e, i);
      } catch (s) {
        if (s.code === "commander.invalidArgument") {
          let r = `${n} ${s.message}`;
          this.error(r, {
            exitCode: s.exitCode,
            code: s.code
          });
        }
        throw s;
      }
    }
    _registerOption(t) {
      let e = t.short && this._findOption(t.short) || t.long && this._findOption(t.long);
      if (e) {
        let i = t.long && this._findOption(t.long) ? t.long : t.short;
        throw Error(`Cannot add option '${t.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${i}'\n-  already used by option '${e.flags}'`);
      }
      this.options.push(t);
    }
    _registerCommand(t) {
      let e = n => [ n.name() ].concat(n.aliases()), i = e(t).find(n => this._findCommand(n));
      if (i) {
        let n = e(this._findCommand(i)).join("|"), s = e(t).join("|");
        throw Error(`cannot add command '${s}' as already have command '${n}'`);
      }
      this.commands.push(t);
    }
    addOption(t) {
      this._registerOption(t);
      let e = t.name(), i = t.attributeName();
      if (t.negate) {
        let s = t.long.replace(/^--no-/, "--");
        if (!this._findOption(s)) this.setOptionValueWithSource(i, t.defaultValue === void 0 ? !0 : t.defaultValue, "default");
      } else if (t.defaultValue !== void 0) this.setOptionValueWithSource(i, t.defaultValue, "default");
      let n = (s, r, a) => {
        if (s == null && t.presetArg !== void 0) s = t.presetArg;
        let o = this.getOptionValue(i);
        if (s !== null && t.parseArg) s = this._callParseArg(t, s, o, r); else if (s !== null && t.variadic) s = t._concatValue(s, o);
        if (s == null) if (t.negate) s = !1; else if (t.isBoolean() || t.optional) s = !0; else s = "";
        this.setOptionValueWithSource(i, s, a);
      };
      if (this.on("option:" + e, s => {
        let r = `error: option '${t.flags}' argument '${s}' is invalid.`;
        n(s, r, "cli");
      }), t.envVar) this.on("optionEnv:" + e, s => {
        let r = `error: option '${t.flags}' value '${s}' from env '${t.envVar}' is invalid.`;
        n(s, r, "env");
      });
      return this;
    }
    _optionEx(t, e, i, n, s) {
      if (typeof e === "object" && e instanceof L) throw Error("To add an Option object use addOption() instead of option() or requiredOption()");
      let r = this.createOption(e, i);
      if (r.makeOptionMandatory(!!t.mandatory), typeof n === "function") r.default(s).argParser(n); else if (n instanceof RegExp) {
        let a = n;
        n = (o, h) => {
          let u = a.exec(o);
          return u ? u[0] : h;
        }, r.default(s).argParser(n);
      } else r.default(n);
      return this.addOption(r);
    }
    option(t, e, i, n) {
      return this._optionEx({}, t, e, i, n);
    }
    requiredOption(t, e, i, n) {
      return this._optionEx({
        mandatory: !0
      }, t, e, i, n);
    }
    combineFlagAndOptionalValue(t = !0) {
      return this._combineFlagAndOptionalValue = !!t, this;
    }
    allowUnknownOption(t = !0) {
      return this._allowUnknownOption = !!t, this;
    }
    allowExcessArguments(t = !0) {
      return this._allowExcessArguments = !!t, this;
    }
    enablePositionalOptions(t = !0) {
      return this._enablePositionalOptions = !!t, this;
    }
    passThroughOptions(t = !0) {
      return this._passThroughOptions = !!t, this._checkForBrokenPassThrough(), this;
    }
    _checkForBrokenPassThrough() {
      if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) throw Error(`passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`);
    }
    storeOptionsAsProperties(t = !0) {
      if (this.options.length) throw Error("call .storeOptionsAsProperties() before adding options");
      if (Object.keys(this._optionValues).length) throw Error("call .storeOptionsAsProperties() before setting option values");
      return this._storeOptionsAsProperties = !!t, this;
    }
    getOptionValue(t) {
      if (this._storeOptionsAsProperties) return this[t];
      return this._optionValues[t];
    }
    setOptionValue(t, e) {
      return this.setOptionValueWithSource(t, e, void 0);
    }
    setOptionValueWithSource(t, e, i) {
      if (this._storeOptionsAsProperties) this[t] = e; else this._optionValues[t] = e;
      return this._optionValueSources[t] = i, this;
    }
    getOptionValueSource(t) {
      return this._optionValueSources[t];
    }
    getOptionValueSourceWithGlobals(t) {
      let e;
      return this._getCommandAndAncestors().forEach(i => {
        if (i.getOptionValueSource(t) !== void 0) e = i.getOptionValueSource(t);
      }), e;
    }
    _prepareUserArgs(t, e) {
      if (t !== void 0 && !Array.isArray(t)) throw Error("first parameter to parse must be array or undefined");
      if (e = e || {}, t === void 0 && e.from === void 0) {
        if (l.versions?.electron) e.from = "electron";
        let n = l.execArgv ?? [];
        if (n.includes("-e") || n.includes("--eval") || n.includes("-p") || n.includes("--print")) e.from = "eval";
      }
      if (t === void 0) t = l.argv;
      this.rawArgs = t.slice();
      let i;
      switch (e.from) {
       case void 0:
       case "node":
        this._scriptPath = t[1], i = t.slice(2);
        break;

       case "electron":
        if (l.defaultApp) this._scriptPath = t[1], i = t.slice(2); else i = t.slice(1);
        break;

       case "user":
        i = t.slice(0);
        break;

       case "eval":
        i = t.slice(1);
        break;

       default:
        throw Error(`unexpected parse option { from: '${e.from}' }`);
      }
      if (!this._name && this._scriptPath) this.nameFromFilename(this._scriptPath);
      return this._name = this._name || "program", i;
    }
    parse(t, e) {
      let i = this._prepareUserArgs(t, e);
      return this._parseCommand([], i), this;
    }
    async parseAsync(t, e) {
      let i = this._prepareUserArgs(t, e);
      return await this._parseCommand([], i), this;
    }
    _executeSubCommand(t, e) {
      e = e.slice();
      let i = !1, n = [ ".js", ".ts", ".tsx", ".mjs", ".cjs" ];
      function s(u, c) {
        let d = f.resolve(u, c);
        if (b.existsSync(d)) return d;
        if (n.includes(f.extname(c))) return;
        let _ = n.find(p => b.existsSync(`${d}${p}`));
        if (_) return `${d}${_}`;
        return;
      }
      this._checkForMissingMandatoryOptions(), this._checkForConflictingOptions();
      let r = t._executableFile || `${this._name}-${t._name}`, a = this._executableDir || "";
      if (this._scriptPath) {
        let u;
        try {
          u = b.realpathSync(this._scriptPath);
        } catch (c) {
          u = this._scriptPath;
        }
        a = f.resolve(f.dirname(u), a);
      }
      if (a) {
        let u = s(a, r);
        if (!u && !t._executableFile && this._scriptPath) {
          let c = f.basename(this._scriptPath, f.extname(this._scriptPath));
          if (c !== this._name) u = s(a, `${c}-${t._name}`);
        }
        r = u || r;
      }
      i = n.includes(f.extname(r));
      let o;
      if (l.platform !== "win32") if (i) e.unshift(r), e = G(l.execArgv).concat(e), o = A.spawn(l.argv[0], e, {
        stdio: "inherit"
      }); else o = A.spawn(r, e, {
        stdio: "inherit"
      }); else e.unshift(r), e = G(l.execArgv).concat(e), o = A.spawn(l.execPath, e, {
        stdio: "inherit"
      });
      if (!o.killed) [ "SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP" ].forEach(c => {
        l.on(c, () => {
          if (o.killed === !1 && o.exitCode === null) o.kill(c);
        });
      });
      let h = this._exitCallback;
      o.on("close", u => {
        if (u = u ?? 1, !h) l.exit(u); else h(new T(u, "commander.executeSubCommandAsync", "(close)"));
      }), o.on("error", u => {
        if (u.code === "ENOENT") {
          let c = a ? `searched for local subcommand relative to directory '${a}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory", d = `'${r}' does not exist\n - if '${t._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead\n - if the default executable name is not suitable, use the executableFile option to supply a custom name or path\n - ${c}`;
          throw Error(d);
        } else if (u.code === "EACCES") throw Error(`'${r}' not executable`);
        if (!h) l.exit(1); else {
          let c = new T(1, "commander.executeSubCommandAsync", "(error)");
          c.nestedError = u, h(c);
        }
      }), this.runningCommand = o;
    }
    _dispatchSubcommand(t, e, i) {
      let n = this._findCommand(t);
      if (!n) this.help({
        error: !0
      });
      let s;
      return s = this._chainOrCallSubCommandHook(s, n, "preSubcommand"), s = this._chainOrCall(s, () => {
        if (n._executableHandler) this._executeSubCommand(n, e.concat(i)); else return n._parseCommand(e, i);
      }), s;
    }
    _dispatchHelpCommand(t) {
      if (!t) this.help();
      let e = this._findCommand(t);
      if (e && !e._executableHandler) e.help();
      return this._dispatchSubcommand(t, [], [ this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help" ]);
    }
    _checkNumberOfArguments() {
      if (this.registeredArguments.forEach((t, e) => {
        if (t.required && this.args[e] == null) this.missingArgument(t.name());
      }), this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) return;
      if (this.args.length > this.registeredArguments.length) this._excessArguments(this.args);
    }
    _processArguments() {
      let t = (i, n, s) => {
        let r = n;
        if (n !== null && i.parseArg) {
          let a = `error: command-argument value '${n}' is invalid for argument '${i.name()}'.`;
          r = this._callParseArg(i, n, s, a);
        }
        return r;
      };
      this._checkNumberOfArguments();
      let e = [];
      this.registeredArguments.forEach((i, n) => {
        let s = i.defaultValue;
        if (i.variadic) {
          if (n < this.args.length) {
            if (s = this.args.slice(n), i.parseArg) s = s.reduce((r, a) => t(i, a, r), i.defaultValue);
          } else if (s === void 0) s = [];
        } else if (n < this.args.length) {
          if (s = this.args[n], i.parseArg) s = t(i, s, i.defaultValue);
        }
        e[n] = s;
      }), this.processedArgs = e;
    }
    _chainOrCall(t, e) {
      if (t && t.then && typeof t.then === "function") return t.then(() => e());
      return e();
    }
    _chainOrCallHooks(t, e) {
      let i = t, n = [];
      if (this._getCommandAndAncestors().reverse().filter(s => s._lifeCycleHooks[e] !== void 0).forEach(s => {
        s._lifeCycleHooks[e].forEach(r => {
          n.push({
            hookedCommand: s,
            callback: r
          });
        });
      }), e === "postAction") n.reverse();
      return n.forEach(s => {
        i = this._chainOrCall(i, () => s.callback(s.hookedCommand, this));
      }), i;
    }
    _chainOrCallSubCommandHook(t, e, i) {
      let n = t;
      if (this._lifeCycleHooks[i] !== void 0) this._lifeCycleHooks[i].forEach(s => {
        n = this._chainOrCall(n, () => s(this, e));
      });
      return n;
    }
    _parseCommand(t, e) {
      let i = this.parseOptions(e);
      if (this._parseOptionsEnv(), this._parseOptionsImplied(), t = t.concat(i.operands), 
      e = i.unknown, this.args = t.concat(e), t && this._findCommand(t[0])) return this._dispatchSubcommand(t[0], t.slice(1), e);
      if (this._getHelpCommand() && t[0] === this._getHelpCommand().name()) return this._dispatchHelpCommand(t[1]);
      if (this._defaultCommandName) return this._outputHelpIfRequested(e), this._dispatchSubcommand(this._defaultCommandName, t, e);
      if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) this.help({
        error: !0
      });
      this._outputHelpIfRequested(i.unknown), this._checkForMissingMandatoryOptions(), 
      this._checkForConflictingOptions();
      let n = () => {
        if (i.unknown.length > 0) this.unknownOption(i.unknown[0]);
      }, s = `command:${this.name()}`;
      if (this._actionHandler) {
        n(), this._processArguments();
        let r;
        if (r = this._chainOrCallHooks(r, "preAction"), r = this._chainOrCall(r, () => this._actionHandler(this.processedArgs)), 
        this.parent) r = this._chainOrCall(r, () => {
          this.parent.emit(s, t, e);
        });
        return r = this._chainOrCallHooks(r, "postAction"), r;
      }
      if (this.parent && this.parent.listenerCount(s)) n(), this._processArguments(), 
      this.parent.emit(s, t, e); else if (t.length) {
        if (this._findCommand("*")) return this._dispatchSubcommand("*", t, e);
        if (this.listenerCount("command:*")) this.emit("command:*", t, e); else if (this.commands.length) this.unknownCommand(); else n(), 
        this._processArguments();
      } else if (this.commands.length) n(), this.help({
        error: !0
      }); else n(), this._processArguments();
    }
    _findCommand(t) {
      if (!t) return;
      return this.commands.find(e => e._name === t || e._aliases.includes(t));
    }
    _findOption(t) {
      return this.options.find(e => e.is(t));
    }
    _checkForMissingMandatoryOptions() {
      this._getCommandAndAncestors().forEach(t => {
        t.options.forEach(e => {
          if (e.mandatory && t.getOptionValue(e.attributeName()) === void 0) t.missingMandatoryOptionValue(e);
        });
      });
    }
    _checkForConflictingLocalOptions() {
      let t = this.options.filter(i => {
        let n = i.attributeName();
        if (this.getOptionValue(n) === void 0) return !1;
        return this.getOptionValueSource(n) !== "default";
      });
      t.filter(i => i.conflictsWith.length > 0).forEach(i => {
        let n = t.find(s => i.conflictsWith.includes(s.attributeName()));
        if (n) this._conflictingOption(i, n);
      });
    }
    _checkForConflictingOptions() {
      this._getCommandAndAncestors().forEach(t => {
        t._checkForConflictingLocalOptions();
      });
    }
    parseOptions(t) {
      let e = [], i = [], n = e, s = t.slice();
      function r(o) {
        return o.length > 1 && o[0] === "-";
      }
      let a = null;
      while (s.length) {
        let o = s.shift();
        if (o === "--") {
          if (n === i) n.push(o);
          n.push(...s);
          break;
        }
        if (a && !r(o)) {
          this.emit(`option:${a.name()}`, o);
          continue;
        }
        if (a = null, r(o)) {
          let h = this._findOption(o);
          if (h) {
            if (h.required) {
              let u = s.shift();
              if (u === void 0) this.optionMissingArgument(h);
              this.emit(`option:${h.name()}`, u);
            } else if (h.optional) {
              let u = null;
              if (s.length > 0 && !r(s[0])) u = s.shift();
              this.emit(`option:${h.name()}`, u);
            } else this.emit(`option:${h.name()}`);
            a = h.variadic ? h : null;
            continue;
          }
        }
        if (o.length > 2 && o[0] === "-" && o[1] !== "-") {
          let h = this._findOption(`-${o[1]}`);
          if (h) {
            if (h.required || h.optional && this._combineFlagAndOptionalValue) this.emit(`option:${h.name()}`, o.slice(2)); else this.emit(`option:${h.name()}`), 
            s.unshift(`-${o.slice(2)}`);
            continue;
          }
        }
        if (/^--[^=]+=/.test(o)) {
          let h = o.indexOf("="), u = this._findOption(o.slice(0, h));
          if (u && (u.required || u.optional)) {
            this.emit(`option:${u.name()}`, o.slice(h + 1));
            continue;
          }
        }
        if (r(o)) n = i;
        if ((this._enablePositionalOptions || this._passThroughOptions) && e.length === 0 && i.length === 0) {
          if (this._findCommand(o)) {
            if (e.push(o), s.length > 0) i.push(...s);
            break;
          } else if (this._getHelpCommand() && o === this._getHelpCommand().name()) {
            if (e.push(o), s.length > 0) e.push(...s);
            break;
          } else if (this._defaultCommandName) {
            if (i.push(o), s.length > 0) i.push(...s);
            break;
          }
        }
        if (this._passThroughOptions) {
          if (n.push(o), s.length > 0) n.push(...s);
          break;
        }
        n.push(o);
      }
      return {
        operands: e,
        unknown: i
      };
    }
    opts() {
      if (this._storeOptionsAsProperties) {
        let t = {}, e = this.options.length;
        for (let i = 0; i < e; i++) {
          let n = this.options[i].attributeName();
          t[n] = n === this._versionOptionName ? this._version : this[n];
        }
        return t;
      }
      return this._optionValues;
    }
    optsWithGlobals() {
      return this._getCommandAndAncestors().reduce((t, e) => Object.assign(t, e.opts()), {});
    }
    error(t, e) {
      if (this._outputConfiguration.outputError(`${t}\n`, this._outputConfiguration.writeErr), 
      typeof this._showHelpAfterError === "string") this._outputConfiguration.writeErr(`${this._showHelpAfterError}\n`); else if (this._showHelpAfterError) this._outputConfiguration.writeErr(`\n`), 
      this.outputHelp({
        error: !0
      });
      let i = e || {}, n = i.exitCode || 1, s = i.code || "commander.error";
      this._exit(n, s, t);
    }
    _parseOptionsEnv() {
      this.options.forEach(t => {
        if (t.envVar && t.envVar in l.env) {
          let e = t.attributeName();
          if (this.getOptionValue(e) === void 0 || [ "default", "config", "env" ].includes(this.getOptionValueSource(e))) if (t.required || t.optional) this.emit(`optionEnv:${t.name()}`, l.env[t.envVar]); else this.emit(`optionEnv:${t.name()}`);
        }
      });
    }
    _parseOptionsImplied() {
      let t = new Ht(this.options), e = i => this.getOptionValue(i) !== void 0 && ![ "default", "implied" ].includes(this.getOptionValueSource(i));
      this.options.filter(i => i.implied !== void 0 && e(i.attributeName()) && t.valueFromOption(this.getOptionValue(i.attributeName()), i)).forEach(i => {
        Object.keys(i.implied).filter(n => !e(n)).forEach(n => {
          this.setOptionValueWithSource(n, i.implied[n], "implied");
        });
      });
    }
    missingArgument(t) {
      let e = `error: missing required argument '${t}'`;
      this.error(e, {
        code: "commander.missingArgument"
      });
    }
    optionMissingArgument(t) {
      let e = `error: option '${t.flags}' argument missing`;
      this.error(e, {
        code: "commander.optionMissingArgument"
      });
    }
    missingMandatoryOptionValue(t) {
      let e = `error: required option '${t.flags}' not specified`;
      this.error(e, {
        code: "commander.missingMandatoryOptionValue"
      });
    }
    _conflictingOption(t, e) {
      let i = r => {
        let a = r.attributeName(), o = this.getOptionValue(a), h = this.options.find(c => c.negate && a === c.attributeName()), u = this.options.find(c => !c.negate && a === c.attributeName());
        if (h && (h.presetArg === void 0 && o === !1 || h.presetArg !== void 0 && o === h.presetArg)) return h;
        return u || r;
      }, n = r => {
        let a = i(r), o = a.attributeName();
        if (this.getOptionValueSource(o) === "env") return `environment variable '${a.envVar}'`;
        return `option '${a.flags}'`;
      }, s = `error: ${n(t)} cannot be used with ${n(e)}`;
      this.error(s, {
        code: "commander.conflictingOption"
      });
    }
    unknownOption(t) {
      if (this._allowUnknownOption) return;
      let e = "";
      if (t.startsWith("--") && this._showSuggestionAfterError) {
        let n = [], s = this;
        do {
          let r = s.createHelp().visibleOptions(s).filter(a => a.long).map(a => a.long);
          n = n.concat(r), s = s.parent;
        } while (s && !s._enablePositionalOptions);
        e = R(t, n);
      }
      let i = `error: unknown option '${t}'${e}`;
      this.error(i, {
        code: "commander.unknownOption"
      });
    }
    _excessArguments(t) {
      if (this._allowExcessArguments) return;
      let e = this.registeredArguments.length, i = e === 1 ? "" : "s", s = `error: too many arguments${this.parent ? ` for '${this.name()}'` : ""}. Expected ${e} argument${i} but got ${t.length}.`;
      this.error(s, {
        code: "commander.excessArguments"
      });
    }
    unknownCommand() {
      let t = this.args[0], e = "";
      if (this._showSuggestionAfterError) {
        let n = [];
        this.createHelp().visibleCommands(this).forEach(s => {
          if (n.push(s.name()), s.alias()) n.push(s.alias());
        }), e = R(t, n);
      }
      let i = `error: unknown command '${t}'${e}`;
      this.error(i, {
        code: "commander.unknownCommand"
      });
    }
    version(t, e, i) {
      if (t === void 0) return this._version;
      this._version = t, e = e || "-V, --version", i = i || "output the version number";
      let n = this.createOption(e, i);
      return this._versionOptionName = n.attributeName(), this._registerOption(n), this.on("option:" + n.name(), () => {
        this._outputConfiguration.writeOut(`${t}\n`), this._exit(0, "commander.version", t);
      }), this;
    }
    description(t, e) {
      if (t === void 0 && e === void 0) return this._description;
      if (this._description = t, e) this._argsDescription = e;
      return this;
    }
    summary(t) {
      if (t === void 0) return this._summary;
      return this._summary = t, this;
    }
    alias(t) {
      if (t === void 0) return this._aliases[0];
      let e = this;
      if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) e = this.commands[this.commands.length - 1];
      if (t === e._name) throw Error("Command alias can't be the same as its name");
      let i = this.parent?._findCommand(t);
      if (i) {
        let n = [ i.name() ].concat(i.aliases()).join("|");
        throw Error(`cannot add alias '${t}' to command '${this.name()}' as already have command '${n}'`);
      }
      return e._aliases.push(t), this;
    }
    aliases(t) {
      if (t === void 0) return this._aliases;
      return t.forEach(e => this.alias(e)), this;
    }
    usage(t) {
      if (t === void 0) {
        if (this._usage) return this._usage;
        let e = this.registeredArguments.map(i => xt(i));
        return [].concat(this.options.length || this._helpOption !== null ? "[options]" : [], this.commands.length ? "[command]" : [], this.registeredArguments.length ? e : []).join(" ");
      }
      return this._usage = t, this;
    }
    name(t) {
      if (t === void 0) return this._name;
      return this._name = t, this;
    }
    nameFromFilename(t) {
      return this._name = f.basename(t, f.extname(t)), this;
    }
    executableDir(t) {
      if (t === void 0) return this._executableDir;
      return this._executableDir = t, this;
    }
    helpInformation(t) {
      let e = this.createHelp();
      if (e.helpWidth === void 0) e.helpWidth = t && t.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth();
      return e.formatHelp(this, e);
    }
    _getHelpContext(t) {
      t = t || {};
      let e = {
        error: !!t.error
      }, i;
      if (e.error) i = n => this._outputConfiguration.writeErr(n); else i = n => this._outputConfiguration.writeOut(n);
      return e.write = t.write || i, e.command = this, e;
    }
    outputHelp(t) {
      let e;
      if (typeof t === "function") e = t, t = void 0;
      let i = this._getHelpContext(t);
      this._getCommandAndAncestors().reverse().forEach(s => s.emit("beforeAllHelp", i)), 
      this.emit("beforeHelp", i);
      let n = this.helpInformation(i);
      if (e) {
        if (n = e(n), typeof n !== "string" && !Buffer.isBuffer(n)) throw Error("outputHelp callback must return a string or a Buffer");
      }
      if (i.write(n), this._getHelpOption()?.long) this.emit(this._getHelpOption().long);
      this.emit("afterHelp", i), this._getCommandAndAncestors().forEach(s => s.emit("afterAllHelp", i));
    }
    helpOption(t, e) {
      if (typeof t === "boolean") {
        if (t) this._helpOption = this._helpOption ?? void 0; else this._helpOption = null;
        return this;
      }
      return t = t ?? "-h, --help", e = e ?? "display help for command", this._helpOption = this.createOption(t, e), 
      this;
    }
    _getHelpOption() {
      if (this._helpOption === void 0) this.helpOption(void 0, void 0);
      return this._helpOption;
    }
    addHelpOption(t) {
      return this._helpOption = t, this;
    }
    help(t) {
      this.outputHelp(t);
      let e = l.exitCode || 0;
      if (e === 0 && t && typeof t !== "function" && t.error) e = 1;
      this._exit(e, "commander.help", "(outputHelp)");
    }
    addHelpText(t, e) {
      let i = [ "beforeAll", "before", "after", "afterAll" ];
      if (!i.includes(t)) throw Error(`Unexpected value for position to addHelpText.\nExpecting one of '${i.join("', '")}'`);
      let n = `${t}Help`;
      return this.on(n, s => {
        let r;
        if (typeof e === "function") r = e({
          error: s.error,
          command: s.command
        }); else r = e;
        if (r) s.write(`${r}\n`);
      }), this;
    }
    _outputHelpIfRequested(t) {
      let e = this._getHelpOption();
      if (e && t.find(n => e.is(n))) this.outputHelp(), this._exit(0, "commander.helpDisplayed", "(outputHelp)");
    }
  }
  function G(t) {
    return t.map(e => {
      if (!e.startsWith("--inspect")) return e;
      let i, n = "127.0.0.1", s = "9229", r;
      if ((r = e.match(/^(--inspect(-brk)?)$/)) !== null) i = r[1]; else if ((r = e.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) if (i = r[1], 
      /^\d+$/.test(r[3])) s = r[3]; else n = r[3]; else if ((r = e.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) i = r[1], 
      n = r[3], s = r[4];
      if (i && s !== "0") return `${i}=${n}:${parseInt(s) + 1}`;
      return e;
    });
  }
  vt.Command = I;
});

var Y = C(function(kt) {
  var {Argument: K} = H(), {Command: P} = B(), {CommanderError: St, InvalidArgumentError: J} = w(), {Help: Vt} = k(), {Option: z} = D();
  kt.program = new P;
  kt.createCommand = t => new P(t);
  kt.createOption = (t, e) => new z(t, e);
  kt.createArgument = (t, e) => new K(t, e);
  kt.Command = P;
  kt.Option = z;
  kt.Argument = K;
  kt.Help = Vt;
  kt.CommanderError = St;
  kt.InvalidArgumentError = J;
  kt.InvalidOptionArgumentError = J;
});

var Q = C(function(g, X) {
  var m = Y();
  g = X.exports = {};
  g.program = new m.Command;
  g.Argument = m.Argument;
  g.Command = m.Command;
  g.CommanderError = m.CommanderError;
  g.Help = m.Help;
  g.InvalidArgumentError = m.InvalidArgumentError;
  g.InvalidOptionArgumentError = m.InvalidArgumentError;
  g.Option = m.Option;
  g.createCommand = t => new m.Command(t);
  g.createOption = (t, e) => new m.Option(t, e);
  g.createArgument = (t, e) => new m.Argument(t, e);
});

var Z = we(Q(), 1), {program: Zt, createCommand: te, createArgument: ee, createOption: ne, CommanderError: se, InvalidArgumentError: fWe, InvalidOptionArgumentError: re, Command: mWe, Argument: oe, Option: cs, Help: Gcn} = Z.default;

var E = 2, x = 2, Lt = 36, Rt = 30, tt = 4;

function N(t, e) {
  let i = Math.max(e, 1), n = [];
  for (let s of t.split(`\n`)) {
    let r = s.match(/\s*\S+/g);
    if (!r) {
      n.push("");
      continue;
    }
    let a = "", o = 0, h = !1;
    for (let u of r) {
      let c = ie(u);
      if (!h) a = u, o = c, h = !0; else if (o + c <= i) a += u, o += c; else {
        n.push(a);
        let d = u.replace(/^\s+/, "");
        a = d, o = ie(d);
      }
    }
    n.push(a);
  }
  return n.join(`\n`);
}

function v(t, e, i, n) {
  let s = " ".repeat(E);
  if (!e) return s + t;
  let r = ie(t);
  if (e.includes(`\n`)) {
    let c = r <= i ? Ii(" ", i - r + x) : " ".repeat(x);
    return (s + t + c + e).replace(/\n/g, `\n` + s);
  }
  let a = n - E - i - x;
  if (r <= i && a >= Rt) {
    let c = Ii(" ", i - r + x), d = " ".repeat(E + i + x), _ = N(e, a);
    return s + t + c + _.replace(/\n/g, `\n` + d);
  }
  let o = " ".repeat(E + tt), h = n - E - tt, u = N(e, h);
  return s + t + `\n` + o + u.replace(/\n/g, `\n` + o);
}

function y(t, e, i) {
  if (i.length === 0) return;
  t.push(e, ...i, "");
}

function Gt(t, e) {
  let i = e.helpWidth || 80, n = Math.min(e.padWidth(t, e), Lt), s = [ `Usage: ${e.commandUsage(t)}`, "" ], r = e.commandDescription(t);
  if (r.length > 0) s.push(N(r, i), "");
  if (y(s, "Arguments:", e.visibleArguments(t).map(a => v(e.argumentTerm(a), e.argumentDescription(a), n, i))), 
  y(s, "Options:", e.visibleOptions(t).map(a => v(e.optionTerm(a), e.optionDescription(a), n, i))), 
  e.showGlobalOptions) y(s, "Global Options:", e.visibleGlobalOptions(t).map(a => v(e.optionTerm(a), e.optionDescription(a), n, i)));
  return y(s, "Commands:", e.visibleCommands(t).map(a => v(e.subcommandTerm(a), e.subcommandDescription(a), n, i))), 
  s.join(`\n`);
}

function gte() {
  let t = e => e.long?.replace(/^--/, "") ?? e.short?.replace(/^-/, "") ?? "";
  return Object.assign({
    sortSubcommands: !0,
    sortOptions: !0,
    formatHelp: Gt
  }, {
    compareOptions: (e, i) => t(e).localeCompare(t(i))
  });
}

export { fWe, mWe, cs, Gcn, gte };
