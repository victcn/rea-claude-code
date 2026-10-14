// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, B } from "./chunk-3pqddg8f.js";

class e {
  pinnedFeatureValues;
  reminderFold;
  echoWireToolInputs;
  maxSubagentSpawnDepthFromGrowthBook;
  composerWithRedesign;
  decstbmRendererEnabled;
  forkSubagentEnabledSource;
  bashFirstDescriptionTrimmed;
  bashFirstDescriptionTrimmedCompiledOnly;
  bashPromptSkillCommands;
  coordinatorReadOnlyBashEnabled;
  coordinatorWorkerOutputTrees;
  bashActFirstEnabled;
  promptAblation;
  defaultFileReadingLimits;
  suggestRolloutEnabled;
  sendUserFileDeferred;
  sessionStartWorkflowSizeGuideline;
  totalTokensReminderMode;
  totalTokensReminderBudget;
  totalTokensReminderAfterUserTurn;
  subagentBudgetOnTopOfStart;
  subagentBudgetNote;
  silentTurnReminderTurns;
  clientDataCapabilityLogged;
  sharedMemoryServedViaTools;
  tetherLiveGate;
  threadsEnvOptIn;
  keptReminderDelivery;
  keptReminderRetired;
  hiddenToolEntriesFieldRefused;
  hiddenToolEntriesHeaderRefused;
  hiddenToolEntriesProbeFailures;
  clearAtProbeFailures;
  threadsProbeFailures;
  displayUpdatesProbeFailures;
  keptReminderOkLogged;
  artifactReplPathEnabled;
  artifactPreviewBrowserSearch;
  artifactPreviewBrowser;
  artifactPreviewEmulator;
  artifactPreviewEngine;
  sandboxedAttemptGateEnabled;
  commandNetworkListsOffered;
  replGateOn;
  replGateSource;
  replTypedEvents;
  replDrawShare;
  replConversationResumed;
  machinesSectionShown;
  workflowAuthoringSkillAvailable;
  attributionAnnouncementEnabled;
  autoModeContextEnabled;
  serverClassifierShadowEnabled;
  thirdPartyServerClassifierEnabled;
  userServerClassifierSwitch;
  shellDescription;
  agentProxyNote;
  keptDeferredToolsEnabled;
  servedOnFacts;
  segmentedTranscript;
  clear() {
    for (let o of Object.keys(this)) this[o] = void 0;
  }
  forgetSkillAndReminderPins() {
    this.bashPromptSkillCommands = void 0, this.workflowAuthoringSkillAvailable = void 0, 
    this.subagentBudgetNote = void 0, this.totalTokensReminderMode = void 0, this.totalTokensReminderBudget = void 0, 
    this.totalTokensReminderAfterUserTurn = void 0;
  }
}

var r = new lt(() => new e);

function Eo() {
  return r.of(B());
}

export { Eo };
