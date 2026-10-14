// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var XRs = "--gh-standin", kUe = ".ghe.com";

var JRs = "--any-host", yK = "any";

function QRs() {
  let [s, t = "", n = "", ...e] = process.argv.slice(2);
  if (s !== "--gh-standin") return;
  process.argv = process.argv.slice(0, 3);
  let o = e[0] === "--any-host", r = o || e[0]?.startsWith("--hosts=") ? e.shift() : void 0, [i, ...a] = e;
  if (/^[1-9]\d{0,4}$/.test(t) && Number(t) <= 65535 && n !== "" && i === "--") {
    let h = o ? "any" : r?.slice(8).split(",") ?? [];
    return {
      port: Number(t),
      caBundlePath: n,
      ghesHosts: h,
      ghArgs: a
    };
  }
  return process.stderr.write(`gh: this command is run by the gh shim Claude Code writes for a session; it is not for direct use.\n`), 
  process.exitCode = 1, "refused";
}

function ZRs(s) {
  let [t, n] = s.ghesHosts === "any" ? [ "--any-host", " or the GitHub Enterprise host a command names" ] : s.ghesHosts.length > 0 ? [ "--hosts=" + s.ghesHosts.join(","), " and the hosts named below" ] : [ void 0, "" ], e = [ ...s.command, "--gh-standin", String(s.port), s.caBundlePath, ...t === void 0 ? [] : [ t ] ].map(o => `'${o}'`);
  return `#!/bin/sh\n# Claude Code gh stand-in shim (auto-generated; per-session).\n# No GitHub CLI was found on this machine when this session started,\n# so gh here is Claude Code's own implementation of \`gh api\`: REST\n# requests to github.com${n} through the session's GitHub proxy. It reads\n# no GitHub token from the environment and sends none.\nexec ${e.join(" ")} -- "$@"\n`;
}

export { XRs, kUe, JRs, yK, QRs, ZRs };
