// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rr } from "./chunk-wptm3jf5.js";

import { d$ } from "./chunk-sa0qpffh.js";

function iBo(e, n = !1) {
  return (!n ? `if [ -n "\${GH_TOKEN:-}\${GITHUB_TOKEN:-}\${GH_ENTERPRISE_TOKEN:-}\${GITHUB_ENTERPRISE_TOKEN:-}" ]; then\n  exec '${e}' "$@"\nfi\n` : `case "\${GH_TOKEN:-}" in ''|'${d$}') ;; *) exec '${e}' "$@" ;; esac\ncase "\${GITHUB_TOKEN:-}" in ''|'${d$}') ;; *) exec '${e}' "$@" ;; esac\nif [ -n "\${GH_ENTERPRISE_TOKEN:-}\${GITHUB_ENTERPRISE_TOKEN:-}" ]; then\n  exec '${e}' "$@"\nfi\n`) + `host="\${GH_HOST:-}"\nrepo="\${GH_REPO:-}"\nprev=''\nfor a in "$@"; do\n  if [ "$prev" = '--hostname' ]; then host="$a"; prev=''; continue; fi\n  if [ "$prev" = '--repo' ]; then repo="$a"; prev=''; continue; fi\n  case "$a" in\n    --hostname) prev='--hostname' ;;\n    --hostname=*) host="\${a#--hostname=}" ;;\n    -R|--repo) prev='--repo' ;;\n    --repo=*) repo="\${a#--repo=}" ;;\n    -R=*) repo="\${a#-R=}" ;;\n    -R?*) repo="\${a#-R}" ;;\n  esac\ndone\n` + `# Hostnames are case-insensitive \u2014 normalize before every compare.\n` + `host="$(printf %s "$host" | tr '[:upper:]' '[:lower:]')"\nif [ -n "$host" ] && [ "$host" != '${rr}' ]; then\n  exec '${e}' "$@"\nfi\n# A -R/--repo/GH_REPO [HOST/]OWNER/REPO (or URL) carries its own host\n# and overrides the checkout. Otherwise repo-scoped commands resolve\n` + `# their target from the checkout remote, not GH_HOST \u2014 treat a\n` + `# non-github.com origin as a GHE signal. An EXPLICIT github.com host\n# above skips the origin probe: it must not be kicked off the relay\n# by the checkout heuristic.\nrhost=''\nif [ -n "$repo" ]; then\n  case "$repo" in\n    *://*) rhost="\${repo#*://}"; rhost="\${rhost%%/*}"; rhost="\${rhost##*@}"; rhost="\${rhost%%:*}" ;;\n    */*/*) rhost="\${repo%%/*}" ;;\n  esac\nelif [ -z "$host" ]; then\n  origin="$(git config --get remote.origin.url 2>/dev/null || true)"\n  case "$origin" in\n    *://*) rhost="\${origin#*://}"; rhost="\${rhost%%/*}"; rhost="\${rhost##*@}"; rhost="\${rhost%%:*}" ;;\n    *@*:*) rhost="\${origin#*@}"; rhost="\${rhost%%:*}" ;;\n  esac\nfi\nrhost="$(printf %s "$rhost" | tr '[:upper:]' '[:lower:]')"\nif [ -n "$rhost" ] && [ "$rhost" != '${rr}' ]; then\n  exec '${e}' "$@"\nfi\n`;
}

export { iBo };
