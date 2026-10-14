// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { FE } from "./chunk-yg56gj2s.js";

var Wjt = [ `Usage: claude ${FE.test.usage}`, "", FE.test.description, "", "Arguments:", "  dir         The mod's folder (default: the current folder)", "", "Options:", "  -h, --help  Display help for command", "", "Runs every *.test.ts and *.test.tsx under dir, each file in a child of this", "binary, in an environment like the one the mod's hooks run in. A test file", "imports its kit from 'claude-code/testing'. Exits 1 when a test fails.", "" ].join(`\n`);

export { Wjt };
