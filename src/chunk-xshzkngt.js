// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Cm } from "./chunk-f1zpf9me.js";

function c(t) {
  return typeof t === "object" && t !== null && !Array.isArray(t) ? t : null;
}

function n(t, ...e) {
  let r = {
    ...t
  };
  for (let s of e) delete r[s];
  return r;
}

function a(t) {
  return typeof t === "string";
}

function i(t) {
  return a(t.from_url) || Array.isArray(t.asset_ids);
}

var AZo = [ "read_file", "read_asset", "describe_type", "list_files", "list_assets", "list_types", "upload_asset", "delete_asset", "copy_from" ], w4 = {
  comments: "comments",
  reply: "comments",
  resolve: "comments",
  watch: "comments",
  unwatch: "comments",
  status: "comments",
  resume_replies: "comments",
  read_db: "data",
  write_db: "data",
  verify: "check",
  preview: "check"
};

function ZEt(t) {
  return Object.hasOwn(w4, t);
}

var XXr = [ "set", "update", "str_replace", "delete", "batch" ], u = new Set(XXr);

function aAe(t) {
  let e = c(t);
  if (e === null) return t;
  let r = e.action;
  if (r === void 0 || r === "publish") {
    if (e.asset === !0) return i(e) ? {
      ...n(e, "asset"),
      action: "copy_from"
    } : {
      ...n(e, "asset"),
      action: "upload_asset"
    };
    return "asset" in e ? n(e, "asset") : t;
  }
  if (r === "read") {
    if (a(e.type_url) && e.url === void 0) return {
      ...e,
      action: "describe_type"
    };
    if (a(e.path)) return Cm.test(e.path) ? {
      ...n(e, "path"),
      action: "read_asset",
      asset_id: e.path
    } : {
      ...e,
      action: "read_file"
    };
    if (Array.isArray(e.paths)) return {
      ...e,
      action: "read_file"
    };
    return t;
  }
  if (r === "list") {
    if (e.scope === "types") return {
      ...n(e, "scope"),
      action: "list_types"
    };
    if (e.scope === "files") return {
      ...n(e, "scope"),
      action: "list_files"
    };
    if (e.scope === "assets") return {
      ...n(e, "scope"),
      action: "list_assets"
    };
    return t;
  }
  if (r === "delete" && a(e.path)) return {
    ...n(e, "path"),
    action: "delete_asset",
    asset_id: e.path
  };
  return t;
}

function wye(t) {
  let e = c(t);
  if (e === null) return t;
  switch (e.action) {
   case "upload_asset":
    return a(e.file_path) || Array.isArray(e.file_paths) ? {
      ...e,
      action: "publish",
      asset: !0
    } : t;

   case "copy_from":
    return i(e) ? {
      ...e,
      action: "publish",
      asset: !0
    } : t;

   case "describe_type":
    return a(e.type_url) && e.url === void 0 ? {
      ...e,
      action: "read"
    } : t;

   case "read_file":
    return a(e.path) || Array.isArray(e.paths) ? {
      ...e,
      action: "read"
    } : t;

   case "read_asset":
    return a(e.asset_id) ? {
      ...n(e, "asset_id"),
      action: "read",
      path: e.asset_id
    } : t;

   case "list_types":
    return {
      ...e,
      action: "list",
      scope: "types"
    };

   case "list_files":
    return {
      ...e,
      action: "list",
      scope: "files"
    };

   case "list_assets":
    return {
      ...e,
      action: "list",
      scope: "assets"
    };

   case "delete_asset":
    return a(e.asset_id) ? {
      ...n(e, "asset_id"),
      action: "delete",
      path: e.asset_id
    } : t;

   default:
    return t;
  }
}

function lAe(t, e) {
  let r = c(e);
  if (r === null) return e;
  let s = r.action;
  if (t === "comments") {
    if (s === "read") return {
      ...r,
      action: "comments"
    };
    if (s === "watch") {
      let o = n(r, "on", "replies");
      if (r.replies === !0) return {
        ...o,
        action: "resume_replies"
      };
      if (r.on === !1) return {
        ...o,
        action: "unwatch"
      };
      if (r.url === void 0) return {
        ...o,
        action: "status"
      };
      return {
        ...o,
        action: "watch"
      };
    }
    return e;
  }
  if (t === "data") {
    if (s === "get" || s === "list" || s === "query" || s === "profiles") return {
      ...r,
      action: "read_db",
      db_op: s
    };
    if (u.has(s)) return {
      ...r,
      action: "write_db",
      db_op: s
    };
    return e;
  }
  return e;
}

function Lnt(t, e) {
  let r = c(e);
  if (r === null) return e;
  let s = r.action;
  if (t === "comments") switch (s) {
   case "comments":
    return {
      ...r,
      action: "read"
    };

   case "watch":
    return {
      ...r,
      action: "watch"
    };

   case "unwatch":
    return {
      ...r,
      action: "watch",
      on: !1
    };

   case "status":
    return {
      ...n(r, "url"),
      action: "watch"
    };

   case "resume_replies":
    return {
      ...r,
      action: "watch",
      replies: !0
    };

   default:
    return e;
  }
  if (t === "data") {
    if ((s === "read_db" || s === "write_db") && a(r.db_op)) return {
      ...n(r, "db_op"),
      action: r.db_op
    };
    return e;
  }
  return e;
}

export { AZo, w4, ZEt, XXr, aAe, wye, lAe, Lnt };
