// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a0, IS } from "./chunk-hyv5czza.js";

function VHe(a) {
  if (!a) return {
    type: "menu"
  };
  let t = a.trim().split(/\s+/);
  switch (t[0]?.toLowerCase()) {
   case "help":
   case "--help":
   case "-h":
    return {
      type: "help"
    };

   case "list":
   case "ls":
    {
      let r = t.slice(1).find(e => e === "--enabled" || e === "--disabled");
      if (r) return {
        type: "list",
        filter: r === "--enabled" ? "enabled" : "disabled"
      };
      return {
        type: "list"
      };
    }

   case "install":
   case "i":
    {
      let r = o(t.slice(1));
      if (r) return r;
      let e = t[1];
      if (!e) return {
        type: "install"
      };
      let n = e.lastIndexOf("@");
      if (n > 0) {
        let c = e.slice(0, n), i = e.slice(n + 1);
        return {
          type: "install",
          plugin: c,
          marketplace: i
        };
      }
      if (!e.startsWith("@") && (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("file://") || e.includes("/") || e.includes("\\"))) return {
        type: "install",
        marketplace: e
      };
      return {
        type: "install",
        plugin: e
      };
    }

   case "manage":
    return {
      type: "manage"
    };

   case "stats":
    {
      if (a0()) return {
        type: "stats"
      };
      return {
        type: "menu"
      };
    }

   case "directory":
   case "search":
    {
      if (IS()) return {
        type: "directory",
        query: t.slice(1).join(" ").trim() || void 0
      };
      return {
        type: "menu"
      };
    }

   case "uninstall":
    return {
      type: "uninstall",
      plugin: t[1]
    };

   case "enable":
    return {
      type: "enable",
      plugin: t[1]
    };

   case "disable":
    return {
      type: "disable",
      plugin: t[1]
    };

   case "configure":
   case "config":
    return {
      type: "configure",
      plugin: t[1]
    };

   case "validate":
    return {
      type: "validate",
      path: t.slice(1).join(" ").trim() || void 0
    };

   case "eval":
    return {
      type: "menu"
    };

   case "tag":
    {
      let r = new Set([ "--push", "--dry-run", "--force", "-f" ]), e = t.slice(1), n = e.filter(i => i.startsWith("-")), l = e.filter(i => !i.startsWith("-")), c = n.find(i => !r.has(i)) ?? l[1];
      return {
        type: "tag",
        path: l[0],
        push: n.includes("--push"),
        dryRun: n.includes("--dry-run"),
        force: n.includes("--force") || n.includes("-f"),
        ...c !== void 0 && {
          unknownFlag: c
        }
      };
    }

   case "marketplace":
   case "market":
    {
      let r = t[1]?.toLowerCase(), e = t.slice(2).join(" ");
      switch (r) {
       case "add":
        return {
          type: "marketplace",
          action: "add",
          target: e
        };

       case "remove":
       case "rm":
        return {
          type: "marketplace",
          action: "remove",
          target: e
        };

       case "update":
        return {
          type: "marketplace",
          action: "update",
          target: e
        };

       case "list":
        return {
          type: "marketplace",
          action: "list"
        };

       default:
        return {
          type: "marketplace"
        };
      }
    }

   default:
    return {
      type: "menu"
    };
  }
}

var p = "/plugin install <plugin> --marketplace <source>";

function o(a) {
  let t = a.findIndex(n => n === "--marketplace" || n.startsWith("--marketplace="));
  if (t === -1) return;
  let s = a[t], r = s !== "--marketplace", e = RKr({
    plugins: a.filter((n, l) => l !== t && (r || l !== t + 1)),
    marketplaceSource: r ? s.slice(14) : a[t + 1],
    commandLine: p
  });
  return "usageError" in e ? {
    type: "usage-error",
    message: e.usageError
  } : {
    type: "install-from-source",
    ...e
  };
}

function RKr({plugins: a, marketplaceSource: t, commandLine: s}) {
  if (!t || t.startsWith("-")) return {
    usageError: `--marketplace needs a marketplace source (owner/repo or a URL). Usage: ${s}`
  };
  let r = a[0];
  if (a.length !== 1 || !r || r.startsWith("-")) return {
    usageError: `--marketplace needs exactly one plugin name. Usage: ${s}`
  };
  if (r.lastIndexOf("@") > 0) return {
    usageError: `Name the marketplace once: <plugin>@<marketplace>, or ${s}`
  };
  return {
    plugin: r,
    marketplaceSource: t
  };
}

function dwn({plugin: a, marketplaceSource: t}) {
  return `/plugin install ${a} --marketplace ${t}`;
}

export { VHe, RKr, dwn };
