// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { p } from "./chunk-jkzenvsk.js";

import { MAo, He, iG, dfe } from "./chunk-f1zpf9me.js";

import { de } from "./chunk-5ydr99q3.js";

import { Fh } from "./chunk-htg8b98h.js";

import { Hf, bye, l4t } from "./chunk-69rr80fg.js";

import { AZo, w4, ZEt, aAe, wye } from "./chunk-xshzkngt.js";

import { zE, Fne, F7o } from "./chunk-exeqjnzg.js";

import { CVe, Yle, lw } from "./chunk-7x8whmnx.js";

import { VL } from "./chunk-yccjj245.js";

import { Op } from "./chunk-rvrh1zgk.js";

import { Ott, hkn, _W } from "./chunk-a99879w1.js";

import { uqt, pqt, mqt, bqt, Fk, uye } from "./chunk-dbsb12yc.js";

import { oor, kTn, TTn, ATn, ZC, Mne, rye } from "./chunk-585b9gv4.js";

import { QJ } from "./chunk-1syth1yr.js";

import { xD, BZe } from "./chunk-avc69bv2.js";

import { ZM } from "./chunk-de9nc4rq.js";

import { y3r } from "./chunk-v1nf29bw.js";

import { eS } from "./chunk-yxkwn8vg.js";

import { o, M, oe, T, De, ue, U } from "./chunk-cvcg6n1z.js";

var w = null, z = null, C = null;

function B(e, s = ", and ") {
  let t = e.join(s);
  return t === "" ? "" : ` ${t[0].toUpperCase()}${t.slice(1)}.`;
}

var F = " `preflight.js` at the artifact root is reserved: it runs against open pages when Claude publishes updates, and it must be a JavaScript module of at most 8 KiB whose default export is a function, or the publish is refused.";

function I(e) {
  let s = [ "publish", "list", "read" ];
  if (e.liveEditOn) s.push("sync");
  if (e.readPageDataOpen) s.push("read_page_data");
  if (e.roomOn) s.push("room_send");
  if (e.deleteOn || e.assetsOn) s.push("delete");
  if (e.openOn) s.push("open");
  if (e.pinOn) s.push("pin", "unpin");
  if (e.handlersOn) s.push("get_endpoints", "call_endpoint", "run_script");
  if (e.quickstartOn) s.push("quickstart");
  if (e.shareOn) s.push("share");
  return s;
}

function H(e) {
  let s = [ ...l4t, "types" ];
  if (e.multiFileOn) s.push("files");
  if (e.assetsOn) s.push("assets");
  return s;
}

function G(e) {
  return ` 'read_page_data' reads the declared data island from the published artifact at \`url\`, validates it against the interaction schema named by \`schema\` (available: ${e.map(s => `'${s}'`).join(", ")}), and returns only its validated typed entries, never page content. It refuses when the island does not match its contract.`;
}

function J(e) {
  return `One of ${I(e).map(t => `'${t}'`).join(", ")}. Omitting it means 'publish'. **Calls** in the description says what each one does and takes, except as noted here.${e.readPageDataOpen ? G(e.enabledSchemaNames) : ""}${e.handlersOn && C ? C.HANDLERS_CLAUSE : ""}${e.versionsOn ? bqt : ""}`;
}

function m(e, s) {
  let t = e.description ?? "";
  for (let [n, f] of s) t = t.replace(n, f);
  return e.describe(t);
}

function Y(e, s) {
  let t = s.shape, n = (...f) => Object.fromEntries(f.filter(h => h in t).map(h => [ h, t[h] ]));
  return De({
    action: U(I(e)).optional().describe(J(e)),
    file_path: o().optional().describe(`publish: the local page Claude publishes (.html, or .md only when a skill says so).${e.typesOn ? " For an Artifact created from an Artifact type, it is one of that Artifact's data files." : ""}${e.assetsOn ? " With `asset: true`, it is the local file Claude uploads." : ""} A short, distinctive basename also serves as the title when nothing else gives one.`),
    ...e.assetsOn && {
      asset: M().optional().describe(e.copyOn ? "publish with `url`: true uploads `file_path` (or each of `file_paths`) to that artifact's asset store instead of publishing it as the page \u2014 or, with `from_url` and `asset_ids` in place of `file_path`, copies those assets of another artifact into it server side (see **Calls**)." : "publish with `url`: true uploads `file_path` (or each of `file_paths`) to that artifact's asset store instead of publishing it as the page (see **Calls**)."),
      ..."file_paths" in t && {
        file_paths: m(t.file_paths, [ [ "upload_asset:", "publish with `asset: true` only:" ] ])
      },
      ...e.copyOn && "from_url" in t && {
        from_url: m(t.from_url, [ [ "copy_from only:", "publish with `asset: true`, in place of `file_path`:" ], [ "one you can open", "one the person can open" ] ]),
        asset_ids: m(t.asset_ids, [ [ "copy_from only:", "publish with `asset: true` and `from_url` only:" ], [ "(its list_assets or upload_asset results)", '(from a `scope: "assets"` listing of it, or an upload result)' ] ])
      }
    },
    ..."favicon" in t && {
      favicon: t.favicon.describe("Deprecated; Claude omits it and uses `icon`.")
    },
    ..."icon" in t && {
      icon: t.icon.describe(`One short generic word for the artifact's browser-tab icon, such as chart, calendar, recipe, code or map: a plain signifier, never a product or brand name. Claude includes it on every page's first publish and omits it on a redeploy so the artifact keeps its icon, passing a new one only when the person asks.${e.typesOn ? " Ignored on an Artifact created from an Artifact type." : ""}`)
    },
    ..."files" in t && !e.copyOn && {
      files: t.files.describe(`Supporting files to publish alongside the page, as a map {"published/path": "source/path" | {from, contentType} | null}. The key is what the HTML references. The source is a path on disk, or {from, contentType} when the type cannot be inferred from the published extension. null removes that path on an update, and files left out are kept. A plain list publishes each file at its own spelling. Sources must be under the working directory or Claude's scratchpad directory.` + F + (e.livePathsOn && w ? w.CORE_FILES_LIVE_DESCRIBE : ""))
    },
    ..."files" in t && e.copyOn && {
      files: t.files.describe(`Supporting files to publish alongside the page, as a map {"published/path": "source/path" | {from, contentType} | {artifact, path, ver?} | null}. The key is what the HTML references. The source is a path on disk, or {from, contentType} when the type cannot be inferred from the published extension. An {artifact, path} source copies that Artifact's published file on the server: an Artifact the person can open, with its type carried over, never an HTML or XML document, and at most ${bye} source Artifact versions per publish. null removes that path on an update, and files left out are kept. A plain list publishes each file at its own spelling. Sources must be under the working directory or Claude's scratchpad directory.` + F + (e.livePathsOn && w ? w.CORE_FILES_LIVE_DESCRIBE : ""))
    },
    ..."edits" in t && {
      edits: t.edits.describe(oor({
        core: !0,
        typesOn: e.typesOn,
        multiFileOn: e.multiFileOn
      }))
    },
    ..."root" in t && {
      root: t.root.describe("The base directory that relative `files` sources resolve against, like a bundler root. It never changes published paths. It is relative to the working directory, or absolute within it or within Claude's scratchpad directory." + (e.typesOn ? " It requires `files`, except on an Artifact made from a type, where a data `file_path` under it is served at its path relative to it." : " It requires `files`."))
    },
    ..."live" in t && w && {
      live: t.live.describe(w.CORE_LIVE_FIELD_DESCRIBE)
    },
    ...n("pr_review"),
    ...e.pinOn && "pin" in t && {
      pin: t.pin.describe("publish only: true also pins the published artifact to the person's claude.ai sidebar once it is published. Claude passes it only when the person asked for that. A failed pin never fails the publish, and the result says so.")
    },
    limit: t.limit.describe(`list only: the maximum number of artifacts to return (default ${dfe}).`),
    scope: U(H(e)).optional().describe(`list: which listing to return. 'mine' is the default. The others are ${[ "'shared'", "'all'", e.typeCatalogOn ? "'types'" : "", e.multiFileOn ? "'files' (with `url`)" : "", e.assetsOn ? "'assets' (with `url`, continued with `after`)" : "" ].filter(Boolean).reduce((f, h, y, a) => f + (y === 0 ? "" : y === a.length - 1 ? " and " : ", ") + h, "")}. See **Calls**.`),
    ...e.typeCatalogOn && {
      type_query: o().max(200).optional().describe("list with scope 'types' only: limits the listing to the types whose title or description match this text best, ignoring case; a type that matches less well is left out, so a narrowed listing is not the whole catalog. Claude omits it when choosing a type for a request, unless a listing made without it says more types exist than it shows."),
      type: o().max(200).optional().describe("list only: the name of a published Artifact type, as a 'types' listing shows it (case does not matter). The listing then shows the Artifacts made from that type instead of the person's gallery. Claude passes this or `type_url`, not both.")
    },
    ...n("intent", "design_systems"),
    title: o().optional().describe(`publish: the fallback title for an HTML page whose file has no <title>. It is a name, not a summary, and Claude keeps it the same across redeploys.${e.typeCreateOn ? " On a `type_url` create, it is the new Artifact's name: what the person called it, or a short descriptive name. If it is left out, the Artifact is named after the type." : ""}`),
    description: o().max(1e3).optional().describe("publish: one sentence for the subtitle on the gallery card."),
    ..."session_context" in t && {
      session_context: t.session_context.describe(`Context stored with the version so that a later session can pick up the work: ${F7o}. Required on an artifact's first publish. After that, Claude omits it unless things changed, since it replaces the stored text.`)
    },
    ..."label" in t && {
      label: t.label.describe(`A short name for this publish, at most ${iG} characters (e.g. "Draft to legal"). Optional. It is a few words, not a description.`)
    },
    ...n("deadline"),
    ...n("overwrite_unread"),
    url: o().optional().describe('An existing artifact\'s claude.ai link (claude.ai/artifact/{id} or claude.ai/code/artifact/{uuid}); a chat, project or session link is not one, and `action: "list"` lists the person\'s artifacts. On a publish, it is the artifact to update in place, one the person owns or was given edit access to (a read of it says "writer"). Before publishing to an artifact this conversation has neither read nor published, Claude reads it (`action: "read"`) and builds on what comes back; a publish sent without that read is refused. A refusal that hands Claude the live version counts as that read: Claude merges its changes into that version and publishes the result, and never resends the refused content unchanged. Claude omits `url` for a new artifact or to redeploy a file this conversation already published. For read, delete and the other calls that take a URL, it is the artifact to act on.'),
    ...(e.typeCreateOn || e.typeCatalogOn) && {
      type_url: o().max(2048).optional().describe((e.typeCreateOn ? "publish: the Artifact type to create this new, private Artifact from (a link from a 'types' listing). Claude omits `url`. Any `file_path`/`files` passed become the new Artifact's own files beside the type's fixed ones." : "An Artifact type's link.") + (e.typeCatalogOn ? ` read (no \`url\`): the type to describe. list: the type whose Artifacts to list, or Claude names the type with \`type\` instead.${e.typeCreateOn ? "" : " Creating an Artifact from a type is not available in this session, so it is accepted only with those two actions."}` : ""))
    },
    ..."auto_open" in t && {
      auto_open: t.auto_open.describe('Only with `type_url` and no `file_path`: when the new Artifact opens for the person. Claude passes "after_first_write" when it will fill the Artifact right after creating it with a files publish to its url, so the person does not first see it empty. The Artifact then opens on that first write. Otherwise Claude omits it, and the Artifact opens when created; Claude always omits it for a type whose content it writes through a connector, such as a Claude Docs document, since no publish or store write follows to open it.')
    },
    prompt: o().optional().describe("read, for an artifact shared with the person: what Claude needs from it, which steers the isolated summary."),
    force: M().optional().describe("publish: a last-resort overwrite that **discards** the newer published version. On a conflict, Claude merges its changes onto the newer content that the rejection hands it and publishes again. Claude passes true only when the person explicitly said to discard that specific version, and the server may still refuse it over a version saved from inside the page."),
    ...(e.assetsOn || e.multiFileOn) && {
      out_dir: t.out_dir.describe("read with `path`: the directory to save into. The default is this artifact's folder in Claude's scratchpad directory, where saving needs no approval." + (e.multiFileOn ? " A published file lands at <out_dir>/<published path>, and saving it outside that default folder asks the person first." : "") + (e.assetsOn ? " An asset's file is named by its id plus its type's extension; saving it outside the default folder is an ordinary file save the person may be asked to approve." : ""))
    },
    ...(e.assetsOn || e.multiFileOn || e.handlersOn) && {
      path: o().max(e.handlersOn && z ? z.MAX_HANDLER_TARGET_CHARS : zE).optional().describe([ e.multiFileOn ? `read: the file's published path inside the artifact, exactly as a 'files' listing printed it ("index.html" is the page itself). The file is saved locally, the result says where, and a small text file's contents are included.` : "", e.assetsOn ? `${e.multiFileOn ? "It can instead be an" : "read: an"} uploaded asset's id (32 hex characters, from an 'assets' listing or an upload result), and that asset is saved to a local file. delete: the id of the one asset to remove.` : "", e.livePathsOn ? "sync: the live file to address." : "", e.handlersOn && C ? C.CALL_HANDLER_PATH_DESCRIBE : "" ].filter(Boolean).join(" "))
    },
    ..."paths" in t && {
      paths: t.paths.describe(`read: several published paths in place of \`path\`, up to ${Fne} in one call. Each file is saved as a single \`path\` would be, and the result lists where each one landed, or why it could not be read, with small text files' contents included while they fit.`)
    },
    ...e.handlersOn && n("method", "body", "body_file", "mode", "script"),
    ...e.shareOn && n("mode", "people", "access"),
    ...e.versionsOn && n("version"),
    ...e.assetsOn && {
      after: o().regex(QJ).optional().describe("list with scope 'assets' only: the `next` value from a previous listing, passed to continue it.")
    },
    ..."page" in t && {
      page: t.page.describe(`read only: true returns the rendered page in cases where a read otherwise returns something else.${B([ e.liveEditOn && w ? w.CORE_PAGE_LIVE_CLAUSE : "", e.typeCatalogOn ? "a typed Artifact's read leaves out the type's own page" : "" ].filter(Boolean))}`)
    },
    ..."schema" in t && {
      schema: t.schema.describe(`The registered interaction schema to validate the page's data island against. Required for read_page_data (e.g. "workshop-decisions"), and meaningless for every other action.`)
    },
    ..."topic" in t && {
      topic: t.topic.describe('room_send only: the event topic, which the page listens to through its room capability. It is lowercase and starts with a letter, followed by letters, digits, "_", "-" or ".", at most 48 characters.')
    },
    ...e.roomOn && {
      data: ue(o(), oe()).optional().describe("room_send: the event payload, a JSON object of at most 4 KiB when serialized. Claude omits it for a bare signal.")
    },
    ..."capabilities" in t && {
      capabilities: t.capabilities.describe(`publish: the runtime capabilities this page declares, as {name: config}. Claude loads the \`${eS}\` skill before passing it. On a redeploy Claude omits the field to keep what the page has, and {} clears it.`),
      contract: t.contract.describe("publish: the artifact's runtime version. Leaving it out keeps the current version (the default), 'latest' upgrades, and an exact version pins or rolls back. It changes how the published page behaves, so Claude passes it only when the author explicitly intends that change.")
    }
  });
}

var x = p(() => Y(Mne(), ZC()));

function K(e) {
  let s = e.shape.action;
  return Object.keys(w4).filter(t => rye(s, t));
}

function W() {
  return [ ...Object.keys(kTn(!0)), ...Object.keys(ATn()), ...Object.keys(TTn()), "data", "out_dir" ];
}

function X(e, s, t) {
  let n = K(s);
  if (n.length === 0) return t;
  let f = s.shape, h = Object.fromEntries(W().filter(y => y in f).map(y => [ y, f[y] ]));
  return De({
    ...h,
    ...t.shape,
    action: U([ ...I(e), ...n ]).optional().describe(t.shape.action.description ?? "")
  });
}

var j = p(() => X(Mne(), ZC(), x()));

function Z(e, s) {
  let t = s.shape, n = ATn();
  return De({
    action: U([ "read", "reply", "resolve", "watch" ]).describe("'read' reads the comment threads on the artifact at `url` (add `thread_id` for one thread, or `cursor` to continue a listing); 'reply' posts `text` into the thread `thread_id`; 'resolve' marks that thread resolved; 'watch' manages this session's artifact watches \u2014 with `url` it starts watching that artifact (`on: false` stops), with no `url` it lists this session's watches and rooms" + (e.watchRail === "live" ? ", and `replies: true` re-enables automatic comment replies that were stopped or paused for the artifact at `url` (only when the user explicitly asked; approved the way a publish is)." : ".")),
    url: o().optional().describe("The artifact's claude.ai URL. Required for every action except a bare 'watch' listing."),
    thread_id: m(n.thread_id, [ [ "comments: read just", "read: read just" ], [ 'action "comments"', 'action "read"' ] ]),
    text: n.text,
    cursor: m(n.cursor, [ [ "comments only:", "read only:" ] ]),
    acknowledge_duplicate: n.acknowledge_duplicate,
    on: M().optional().describe("watch only: false stops watching the artifact at `url`; omit (or true) to start."),
    ...e.watchRail === "live" && {
      replies: M().optional().describe("watch only: true re-enables automatic comment replies for the artifact at `url` after the user stopped or paused them \u2014 pass it ONLY when the user explicitly asked to resume.")
    },
    ...e.livePathsOn && "path" in t && {
      path: t.path.describe("watch only: the live file to listen to; required when the Artifact has more than one.")
    }
  });
}

function Q(e) {
  let s = e.shape, t = "old_str" in s, n = kTn(t);
  return De({
    action: U([ ...CVe, ...Yle, ...t ? [ lw ] : [], Fk, uye ]).describe(`Reads: 'get' (one document: \`collection\` + \`doc_id\`), 'list' (a page of a collection: \`collection\`, with optional \`query.limit\`/\`query.cursor\`), 'query' (filtered: \`collection\` + \`query\`), 'profiles' (people's display names: \`ids\`, nothing else). Writes: 'set' (replace) or 'update' (merge) with \`collection\`, \`doc_id\`, and either \`data\` or \`file_path\`;${t ? " 'str_replace' with `collection`, `doc_id`, `field`, `old_str`, `new_str` \u2014 swaps one exact, unique piece of text inside a string field without resending the field (`replace_all`: every occurrence);" : ""} 'delete' with \`collection\` + \`doc_id\`; 'batch' with \`writes\`. Every action takes the artifact's \`url\`.`),
    url: o().optional().describe("The artifact's claude.ai URL. Required."),
    writes: m(n.writes, [ [ "write_db with db_op 'batch' only:", "action 'batch' only:" ], [ "separate write_db calls", "separate calls" ] ]),
    collection: m(n.collection, [ [ "Required for read_db and write_db.", "Required for every action except 'batch' and 'profiles'." ] ]),
    ids: T(o()).min(1).max(BZe).optional().describe(`action 'profiles' only: the people to name, 1-${BZe} ids exactly as a document or live event showed them ("u_" plus 22 characters).`),
    doc_id: m(n.doc_id, [ [ "Required for db_op", "Required for action" ] ]),
    query: m(n.query, [ [ "Options for db_op", "Options for action" ] ]),
    ...n.field !== void 0 && {
      field: m(n.field, [ [ "write_db with db_op 'str_replace' only:", "action 'str_replace' only:" ] ]),
      old_str: m(n.old_str, [ [ "write_db with db_op 'str_replace' only:", "action 'str_replace' only:" ] ]),
      new_str: m(n.new_str, [ [ "write_db with db_op 'str_replace' only:", "action 'str_replace' only:" ] ]),
      replace_all: m(n.replace_all, [ [ "write_db with db_op 'str_replace' only:", "action 'str_replace' only:" ] ]),
      if_version: m(n.if_version, [ [ "write_db with db_op 'set', 'update', 'str_replace' or 'delete'", "action 'set', 'update', 'str_replace' or 'delete'" ], [ "every read_db document", "every document a get, list or query returns" ] ])
    },
    data: ue(o(), oe()).optional().describe('set and update: the document fields to write, as a JSON object \u2014 pass exactly one of `data` or `file_path`. In an update, a field given as `{"__delete__": true}` is removed instead.'),
    file_path: o().optional().describe("set and update: a local JSON file whose top-level object is sent as the document \u2014 an alternative to inline `data`, so a large document need not pass through the conversation."),
    ..."out_dir" in s && {
      out_dir: s.out_dir.describe("get, list and query: when given, each returned document is written as pretty-printed JSON to <out_dir>/<collection path>/<doc_id>.json (directories created as needed) and the result lists the files instead of the document contents \u2014 use it for large documents or many of them.")
    },
    as_level: m(n.as_level, [ [ "read_db and write_db only: act", "Act" ] ])
  });
}

function ee(e) {
  let s = TTn(), t = e.previewOn && VL() === "emulator", n = [];
  if (e.verifyOn) n.push("verify");
  if (e.previewOn) n.push("preview");
  return De({
    action: U(n.length > 0 ? n : [ "verify" ]).describe(((e.verifyOn ? uqt : "") + (e.previewOn ? t ? mqt : pqt : "")).trim()),
    ...e.verifyOn && {
      url: o().optional().describe("verify: the artifact's claude.ai URL \u2014 omit to target this session's most recent publish.")
    },
    ...e.previewOn && {
      file_path: o().optional().describe(t ? "preview: the page's .html file to look at in the artifact viewer." : "preview: the local .html page to render.")
    },
    ...e.previewOn && !t && {
      widths: s.widths,
      themes: s.themes
    }
  });
}

var rqo = p(() => Z(Mne(), ZC())), oqo = p(() => Q(ZC())), sqo = p(() => ee(Mne()));

function Wzr(e, s, t) {
  let n = t !== void 0 && typeof s === "object" && s !== null ? t(s, e) : s;
  return _W(de(e), n, "ask");
}

function zzr(e, s, t, n, f, h, y = {
  deny: null,
  ask: () => null
}) {
  let a = de(f), r = h !== void 0 && typeof t === "object" && t !== null ? h(t, f) : t, d = y.deny ?? _W(a, r, "deny");
  if (d) return {
    behavior: "deny",
    message: `Permission to use ${e} has been denied by your rule ${xD(d)}.`,
    decisionReason: {
      type: "rule",
      rule: d
    }
  };
  let u = s(), l = u?.behavior === "deny" ? null : y.ask() ?? _W(a, r, "ask");
  if (!l) return u;
  return u?.behavior === "ask" ? {
    ...u,
    matchedAskRule: u.matchedAskRule ?? l
  } : {
    behavior: "ask",
    message: `Your ask rule ${xD(l)} covers this call, and its full permission check could not complete \u2014 approving covers only this call.`,
    updatedInput: {
      ...n,
      [Op]: !1
    },
    suppressAlwaysAllowRule: !0,
    decisionReason: {
      type: "rule",
      rule: l
    }
  };
}

async function iqo(e, s, t) {
  if (s === null || e.behavior === "deny") return e;
  return e.behavior === "ask" ? {
    ...e,
    matchedAskRule: e.matchedAskRule ?? s
  } : {
    behavior: "ask",
    message: await t(),
    decisionReason: {
      type: "rule",
      rule: s
    },
    ..."updatedInput" in e && e.updatedInput !== void 0 && {
      updatedInput: e.updatedInput
    }
  };
}

function E(e) {
  let s = e?.action;
  return typeof s === "string" ? s : void 0;
}

function Vyn(e, s) {
  if (e === void 0 || !("updatedInput" in e) || e.updatedInput === void 0) return e;
  return {
    ...e,
    updatedInput: s(e.updatedInput)
  };
}

var te = [ [ /action:? "upload_asset"|\bupload_asset\b/g, "publish with `asset: true`" ], [ /action:? "read_file"|\bread_file\b/g, "read with a file `path`" ], [ /action:? "read_asset"|\bread_asset\b/g, "read with an asset id as `path`" ], [ /action:? "list_files"|\blist_files\b/g, 'list with `scope: "files"`' ], [ /action:? "list_assets"|\blist_assets\b/g, 'list with `scope: "assets"`' ], [ /action:? "list_types"|\blist_types\b/g, 'list with `scope: "types"`' ], [ /action:? "describe_type"|\bdescribe_type\b/g, "read with `type_url`" ], [ /action:? "delete_asset"|\bdelete_asset\b/g, "delete with an asset id as `path`" ], [ /action:? "copy_from"|\bcopy_from\b/g, "publish with `asset: true` and `from_url`" ], [ /`asset_id`/g, "`path` (the asset id)" ], [ /\basset_id\b/g, "path (the asset id)" ] ];

function L(e) {
  let s = MAo.exec(e), t = s === null ? e.length : s.index, n = e.slice(0, t);
  for (let [f, h] of te) n = n.replace(f, h);
  return n + e.slice(t);
}

function se(e) {
  if (typeof e !== "object" || e === null || !("action" in e)) return e;
  let {action: s, ...t} = e;
  return t;
}

function V(e) {
  return e !== void 0 && e.behavior === "deny" ? {
    ...e,
    message: L(e.message)
  } : e;
}

var q = {
  delete: 'deleting a whole Artifact is not available in this session \u2014 `delete` here takes `path` (an uploaded asset\'s id, from a `scope: "assets"` listing) and removes that one asset',
  read_asset: "`path` looks like an uploaded asset's id, but this session cannot read an artifact's asset store \u2014 pass a file's published path",
  delete_asset: "`path` looks like an uploaded asset's id, but this session cannot change an artifact's asset store",
  read_file: "reading one published file by `path` is not available in this session \u2014 `path` here takes an uploaded asset's id; read the whole artifact with `url` alone",
  describe_type: "`type_url` here only starts a new Artifact from that type \u2014 reading a type's details is not available in this session",
  copy_from: "copying another artifact's assets (`from_url`) is not available in this session \u2014 `asset: true` here takes a local `file_path` to upload"
}, ie = new Set([ "body" ]);

function P(e) {
  let s = e ?? "publish";
  if (rye(ZC().shape.action, s)) return null;
  return Object.hasOwn(q, s) ? q[s] : `action "${s}" is not available in this session`;
}

function aqo(e, s = {}) {
  let t = Hf, n = e, f = a => (r, ...d) => n[a].call(e, t() ? aAe(r) : r, ...d), h = a => n[a] === void 0 ? {} : {
    [a]: f(a)
  }, y = {
    get inputSchema() {
      return t() ? j() : n.inputSchema;
    },
    get inputJSONSchema() {
      return t() ? ZM(x()) : n.inputJSONSchema;
    },
    streamedInputRepairExemptKeys() {
      let a = n.streamedInputRepairExemptKeys?.();
      return t() ? new Set([ ...a ?? [], ...ie ]) : a;
    },
    prompt(a, ...r) {
      return t() ? Promise.resolve(y3r(a?.tools)) : n.prompt.call(e, a, ...r);
    },
    isConcurrencySafe: f("isConcurrencySafe"),
    isReadOnly: f("isReadOnly"),
    ...h("isDestructive"),
    ...h("ignoresWholeToolAllowRule"),
    ...h("suppressesAlwaysAllowRule"),
    ...h("getPath"),
    toAutoClassifierInput: f("toAutoClassifierInput"),
    ...h("staleServerClassifierContext"),
    description: f("description"),
    ...h("getToolUseSummary"),
    ...n.permissionCheckFailureDecision !== void 0 && {
      permissionCheckFailureDecision(a, ...r) {
        let d = r[0], u = t(), l = u ? aAe(a) : a, _ = de(d), R = {
          name: n.name,
          ruleContentField: n.ruleContentField
        };
        return zzr(n.name, () => {
          let O = n.permissionCheckFailureDecision.call(e, l, ...r);
          return u ? V(Vyn(O, wye)) : O;
        }, l, a, d, s.ruleTargetInput, {
          deny: hkn(_, R, l, "deny"),
          ask: () => hkn(_, R, l, "ask")
        });
      }
    },
    async checkPermissions(a, ...r) {
      let d = r[0], u = t(), l = u ? aAe(a) : a;
      if (u) {
        let g = P(E(l));
        if (g !== null) return {
          behavior: "deny",
          message: g,
          decisionReason: {
            type: "other",
            reason: g
          }
        };
      }
      let _ = u ? l : wye(a), R = _ !== a, O = u ? _ : se(_), S = {
        name: n.name,
        ruleContentField: n.ruleContentField
      }, A = de(d), k = (R ? Fh(A, S, O, "deny") : null) ?? hkn(A, S, l, "deny");
      if (k) return {
        behavior: "deny",
        message: `Permission to use ${S.name} has been denied by your rule ${xD(k)}.`,
        decisionReason: {
          type: "rule",
          rule: k
        }
      };
      let N = await n.checkPermissions.call(e, l, ...r), v = u ? V(Vyn(N, wye)) : N;
      if (v.behavior !== "deny") {
        let g = (R ? Fh(A, S, O, "ask") : null) ?? hkn(A, S, l, "ask") ?? Wzr(d, l, s.ruleTargetInput);
        if (g) return v.behavior === "ask" ? {
          ...v,
          matchedAskRule: g
        } : {
          behavior: "ask",
          message: await n.description.call(e, l, ...r),
          decisionReason: {
            type: "rule",
            rule: g
          },
          ..."updatedInput" in v && v.updatedInput !== void 0 && {
            updatedInput: v.updatedInput
          }
        };
      }
      return v;
    },
    ...n.validateInput !== void 0 && {
      async validateInput(a, ...r) {
        if (!t()) return n.validateInput.call(e, a, ...r);
        let d = aAe(a), u = E(d), l = P(u);
        if (l !== null) return {
          result: !1,
          message: l,
          errorCode: 8
        };
        if (u !== void 0 && ZEt(u)) i("tengu_artifact_legacy_verb", {
          verb: c(u),
          disposition: b("served")
        });
        let _ = await n.validateInput.call(e, d, ...r);
        return _.result ? _ : {
          ..._,
          message: L(_.message)
        };
      }
    },
    async call(a, ...r) {
      if (!t()) return n.call.call(e, a, ...r);
      let d = aAe(a), u = P(E(d));
      if (u !== null) throw new He(u, "core_verb_unavailable");
      try {
        return await n.call.call(e, d, ...r);
      } catch (l) {
        if (l instanceof He) l.message = L(l.message);
        throw l;
      }
    },
    hookMatcherFamilyNames(a) {
      let r = Ott(n, a);
      return r === void 0 ? [] : [ r.tool.name ];
    },
    coerceInput(a) {
      let r = E(a);
      if (t()) {
        if (r !== void 0 && AZo.includes(r)) {
          let d = wye(a);
          return d === a ? null : {
            input: d,
            shapeClass: `artifact_legacy_verb_${r}`
          };
        }
      } else {
        let d = aAe(a);
        if (d !== a) return {
          input: d,
          shapeClass: `artifact_core_verb_${r ?? "publish"}`
        };
      }
      return n.coerceInput?.call(e, a) ?? null;
    }
  };
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(y));
}

export { rqo, oqo, sqo, Wzr, zzr, iqo, Vyn, aqo };
