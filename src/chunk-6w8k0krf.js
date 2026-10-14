// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lstat as s } from "fs/promises";

async function Nk(i, e, t) {
  if (i.isDirectory()) return "dir";
  if (i.isSymbolicLink()) return "symlink";
  if (i.isFile()) return "file";
  if (i.isFIFO() || i.isSocket() || i.isBlockDevice() || i.isCharacterDevice()) return "other";
  try {
    let r = await s(e);
    return r.isDirectory() ? "dir" : r.isSymbolicLink() ? "symlink" : r.isFile() ? "file" : "other";
  } catch {
    return t;
  }
}

export { Nk };
