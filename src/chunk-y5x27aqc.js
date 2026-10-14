// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function vet(i) {
  if (!Array.isArray(i)) return;
  let e = [], o = 2;
  for (let r of i) {
    if (e.length >= 50) break;
    if (typeof r !== "object" || r === null) continue;
    let n = r;
    if (n.type !== "resource_link" || typeof n.uri !== "string" || typeof n.name !== "string") continue;
    let t = {
      uri: n.uri,
      name: n.name
    };
    if (typeof n.title === "string") t.title = n.title;
    if (typeof n.description === "string") t.description = n.description;
    if (typeof n.mimeType === "string") t.mimeType = n.mimeType;
    if (typeof n.size === "number" && Number.isFinite(n.size)) t.size = n.size;
    if (typeof n.annotations === "object" && n.annotations !== null && !Array.isArray(n.annotations)) t.annotations = n.annotations;
    if (o += JSON.stringify(t).length + (e.length > 0 ? 1 : 0), o > 65536) break;
    e.push(t);
  }
  return e.length > 0 ? e : void 0;
}

function j$(i) {
  if (i === void 0) return;
  let e;
  for (let r of Object.keys(i)) if (r.startsWith("com.anthropic/")) e ??= {
    ...i
  }, delete e[r];
  let o = e ?? i;
  return Object.keys(o).length > 0 ? o : void 0;
}

export { vet, j$ };
