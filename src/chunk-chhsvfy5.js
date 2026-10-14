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

import { _s } from "./chunk-1dj3skht.js";

var QFn = Object.freeze({
  open: Object.freeze([]),
  unplaced: Object.freeze([]),
  asked: Object.freeze([]),
  shownId: null,
  focusedId: null,
  focusRequest: null,
  placements: 0,
  closing: Object.freeze([])
});

var eho = () => ({
  values: _s(new Map),
  readers: new Map,
  readersOf: new Map,
  mounted: new Map,
  folds: {
    steady: {
      stale: new Set,
      lastAt: Number.NEGATIVE_INFINITY,
      pending: void 0
    },
    live: {
      stale: new Set,
      lastAt: Number.NEGATIVE_INFINITY,
      pending: void 0
    }
  },
  staleListeners: new Set,
  faultRuns: new Map,
  bumps: 0,
  versionFloor: 0
});

var tho = () => ({
  pending: void 0,
  pausedAt: void 0
});

function s() {
  return {
    pluginLoad: void 0,
    pluginLoadArm: void 0,
    pluginLoadCacheOnly: void 0,
    pluginLoadCacheOnlyArm: void 0,
    pluginLoadMarks: new WeakMap,
    commands: void 0,
    skills: void 0,
    skillsV5: void 0,
    agents: void 0,
    handedIn: void 0,
    outputStyles: void 0,
    workflows: void 0,
    hookRegistration: void 0,
    hookModulesAwaitTrust: !1,
    hookRegistrationInFlight: void 0,
    hookRegistrationsInFlight: new Set,
    hooksLoadAtStartup: void 0,
    hookRegistrationOwed: !1,
    hooksUnknownCause: void 0,
    pluginsWithHooks: new Set,
    folderReadAt: new Map,
    hookRegistrationEpoch: 0,
    hookSwapEpoch: 0,
    hooksModulesSwitchRead: void 0,
    hooksModulesSwitchFollowing: void 0,
    hooksModulesSwitchRereading: void 0,
    hooksModulesWakeBound: "ahead",
    unlatchedAbsentManagedIds: new Set,
    hooksLeftOutByName: [],
    hooksLeftOutByNameChanged: Me(),
    hookRegistrationEnded: Me(),
    hookRegistrationArgs: void 0,
    hookHotReloadUnsubscribe: void 0,
    hooksModulesSwitchUnwatch: void 0,
    hookHotReloadSettingsSnapshot: void 0,
    hookHotReloadTierSnapshot: void 0,
    hooksRespawns: new Set,
    loadedModules: [],
    moduleSeats: new Map,
    notices: _s(new Map),
    openCalls: new Map,
    withheldCalls: new Set,
    withheldWatches: new Map,
    spawnProvenance: new Map,
    registeredAgents: new Map,
    renderVersions: _s(new Map),
    panes: _s(QFn),
    pluginState: eho(),
    toastClock: tho(),
    hoverGroups: _s(new Map),
    scrollSites: new Map,
    focusSites: new Map,
    focusSiteDraws: Me(),
    mountedRasters: new Map,
    mountedImages: new Map,
    rasterAdmission: void 0,
    uiLogSink: null,
    pendingUiLog: [],
    armedMonitorKeys: new Set,
    marketplaces: new Map,
    marketplaceRefreshesInFlight: new Map,
    marketplaceHelperMemo: new Map,
    addDirMarketplacesMemo: void 0,
    headlessInstallPass: void 0,
    installedPluginsMigrated: !1,
    installedPluginsFile: null,
    installedPluginsEpoch: 0,
    recordSpellingsCounted: !1,
    recordSpellingFallbackReported: !1,
    installedPluginsSnapshot: null,
    optionValues: new Map,
    flaggedPlugins: null,
    orphanedVersionGlobExclusions: null,
    recentActivity: [],
    pluginActivityFeatures: new Map,
    autoUpdateListener: null,
    commandSourceReresolve: null,
    pendingAutoUpdateNotification: null,
    ownInUseMarkerPaths: new Set,
    ownInUseMarkerHandles: new Map,
    commandProducerDirsDenied: new Set,
    commandProducerDirsScannedAt: 0,
    commandProducerDirsComparable: null,
    commandProducerDirsNeedCanonicalCandidate: !1,
    commandProducerDirsWslProviderUndeterminable: !1,
    commandProducerDirsChanged: Me(),
    denyJoinedPluginRoot: void 0,
    sandboxBringUp: void 0,
    inUseMarkerCleanup: void 0,
    vouchedManagedPluginIds: new Set,
    hintedPluginIds: new Set,
    seenHintPluginIds: new Set,
    gitAvailable: void 0,
    operatorDeclaredMemo: void 0,
    marketplaceResolutionNoticesLogged: new Set,
    marketplaceAdmissionVerdicts: new Map,
    hiddenRegistryEntries: {
      raw: new Map,
      v5: new Map
    },
    releasedRegistryEntries: {
      raw: new Set,
      v5: new Set
    },
    cacheRootComparableMemo: void 0,
    provenLocalRoots: new Map,
    wslProviderOfPluginsRootMemo: void 0,
    inlinePluginRootsComparableMemo: void 0
  };
}

class n {
  registry=s();
}

var r = new K(() => new n);

function a() {
  return r.of(B().host);
}

function Ge() {
  return a().registry;
}

function evs(e) {
  return Ge().registeredAgents.has(e);
}

function ZFn() {
  return Ge().pluginLoadCacheOnly;
}

function Twr() {
  Ge().commands = void 0;
}

function Awr() {
  let e = Ge();
  e.skills = void 0, e.skillsV5 = void 0;
}

function Cwr() {
  Ge().agents = void 0;
}

function Rwr() {
  Ge().outputStyles = void 0;
}

function eUn() {
  Ge().workflows = void 0;
}

export { QFn, eho, tho, Ge, evs, ZFn, Twr, Awr, Cwr, Rwr, eUn };
