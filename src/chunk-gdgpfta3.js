// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tt } from "./chunk-bamccw3w.js";

import { Ne } from "./chunk-m8ez8fhk.js";

var e = "./component-schemas-7fabf82f.md.zst";

var t = tt(e, import.meta.dirname);

var n = Ne("./example-plugins-9n8v6pe1.md");

var o = Ne("./mcp-servers-chmkz450.md");

var i = Ne("./search-strategies-4qam2bp6.md");

var s = "./SKILL-0e9ec89e.md.zst";

var r = tt(s, import.meta.dirname);

var x = r, A = {
  "references/component-schemas.md": t,
  "references/example-plugins.md": n,
  "references/mcp-servers.md": o,
  "references/search-strategies.md": i
};

export { A as SKILL_FILES, x as SKILL_MD };
