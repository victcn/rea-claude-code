// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

var o = "cli";

class s {
  bundledSkills=[];
  bundledSkillKillSwitchSurvivors=new Set;
  bundledSkillSessionResetHooks=[];
  bundledSkillsInitialized=!1;
  shippedTablesFillFailed=!1;
  bundledSkillFilesElsewhere=void 0;
  commandsOffHere=void 0;
  attachedFolderSkills=void 0;
  builtinToolsServedByMcp=void 0;
  builtinCommandTable=void 0;
  builtinCommandNames=void 0;
  shippedCommandNames=void 0;
  loadedCommands=new Map;
  skillToolCommands=new Map;
  slashCommandToolSkills=new Map;
  skillIndex=new Map;
  reservedSpellingsByLoadedResult=new WeakMap;
  loadedResultsMissingTrustedNames=new WeakSet;
  skillDirCommands=new Map;
  dynamicSkillStates=new Map;
  lastCollisionExtrasSpellings=new Map;
  dynamicSkillStateKey=() => o;
  dynamicSkillsLoaded=Me();
  skillsChanged=Me();
  replacedSkillNames=new Map;
  replacedSkillNamesSeq=0;
  shadowedBundledSkills=void 0;
  fallbackShadowTelemetryLogged=new Set;
  skillContentIntern=new Map;
  skillFiles=new WeakMap;
  builtinPlugins=new Map;
  builtinPluginsInitialized=!1;
  builtinPluginFailures=new Map;
  builtinPluginWiredSkills=new WeakMap;
  bundledWorkflows=[];
  markdownFiles=new Map;
  markdownScansGivenUp=0;
  agentDefinitions=new Map;
  projectAgentsElsewhere=[];
  namesNotShown=new Set;
  outputStyleDirStyles=new Map;
  allOutputStyles=new Map;
  routines=new Map;
  routineCronTasks=new Map;
  allWorkflows=new Map;
  reservedSpellingsFor(e, n) {
    let i = this.reservedSpellingsByLoadedResult.get(e);
    if (i) return i;
    let l = n();
    return this.reservedSpellingsByLoadedResult.set(e, l), l;
  }
  refusedReservedSkillNames() {
    return Array.from(this.dynamicSkillStates.get(this.dynamicSkillStateKey())?.refusedReservedNames.values() ?? []);
  }
  markLoadedResultMissingTrustedNames(e) {
    this.loadedResultsMissingTrustedNames.add(e);
  }
  loadedResultIsMissingTrustedNames(e) {
    return this.loadedResultsMissingTrustedNames.has(e);
  }
  clearLoadCaches() {
    this.invalidateCommands(), this.skillDirCommands.clear(), this.markdownFiles.clear(), 
    this.agentDefinitions.clear(), this.outputStyleDirStyles.clear(), this.allOutputStyles.clear(), 
    this.routines.clear(), this.routineCronTasks.clear(), this.allWorkflows.clear(), 
    this.namesNotShown.clear();
  }
  invalidateCommands() {
    this.builtinCommandTable = void 0, this.builtinCommandNames = void 0, this.shippedCommandNames = void 0, 
    this.loadedCommands.clear(), this.skillToolCommands.clear(), this.slashCommandToolSkills.clear(), 
    this.skillIndex.clear();
  }
  invalidateSkillDirs() {
    this.skillDirCommands.clear();
    let e = this.dynamicSkillStates.get(this.dynamicSkillStateKey());
    if (e) e.conditionalSkills.clear(), e.activatedConditionalSkillNames.clear();
  }
  evictDynamicSkillState(e) {
    this.dynamicSkillStates.delete(e), this.lastCollisionExtrasSpellings.delete(e);
    let n = `${e}:`;
    for (let i of [ ...this.skillDirCommands.keys() ]) if (i.startsWith(n)) this.skillDirCommands.delete(i);
  }
}

function hZ(e, n, i) {
  let l = e.get(n);
  if (l !== void 0) return l;
  let t = i();
  return e.set(n, t), t;
}

function yZ(e) {
  return e ?? "\0";
}

var a = new K(() => new s);

function wr() {
  return a.of(B().host);
}

export { hZ, yZ, wr };
