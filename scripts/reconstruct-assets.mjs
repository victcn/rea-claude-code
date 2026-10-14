#!/usr/bin/env bun
/**
 * Reconstructs all embedded skills, plugins, vendor bundles, schemas,
 * model catalogs, and prompts from the extracted Claude Code v2.1.299 modules.
 */

import fs from "node:fs";
import path from "node:path";

const PROJECT_ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const ASSETS_DIR = path.join(PROJECT_ROOT, "extracted-assets");
const SKILLS_DIR = path.join(ASSETS_DIR, "skills-and-plugins");
const PROMPTS_DIR = path.join(ASSETS_DIR, "prompts");
const VENDOR_DIR = path.join(ASSETS_DIR, "vendor-bundles");
const RAW_DECOMPRESSED_DIR = path.join(ASSETS_DIR, "all-raw-decompressed");
const SCHEMAS_DIR = path.join(PROJECT_ROOT, "schemas");

function writeTextFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, typeof content === "string" ? content : JSON.stringify(content, null, 2), "utf8");
}

function writeFileMap(baseDir, fileMap) {
  let count = 0;
  for (const [relPath, content] of Object.entries(fileMap)) {
    if (typeof content === "string") {
      writeTextFile(path.join(baseDir, relPath), content);
      count++;
    } else if (content && typeof content === "object") {
      count += writeFileMap(path.join(baseDir, relPath), content);
    }
  }
  return count;
}

async function main() {
  fs.mkdirSync(SKILLS_DIR, { recursive: true });
  fs.mkdirSync(PROMPTS_DIR, { recursive: true });
  fs.mkdirSync(VENDOR_DIR, { recursive: true });
  fs.mkdirSync(RAW_DECOMPRESSED_DIR, { recursive: true });
  fs.mkdirSync(SCHEMAS_DIR, { recursive: true });

  // 1. Export baked-in model catalog from chunk-cjt10y7b.js
  const modelCatalogMod = await import(path.join(SRC_DIR, "chunk-cjt10y7b.js"));
  writeTextFile(path.join(SCHEMAS_DIR, "model-catalog.json"), modelCatalogMod.cIr);
  console.log("Saved schemas/model-catalog.json (" + modelCatalogMod.cIr.models.length + " models)");

  // 2. Export plugin TypeScript declarations (claude-code.d.ts) from chunk-4yjgfhz0.js
  const pluginDeclMod = await import(path.join(SRC_DIR, "chunk-4yjgfhz0.js"));
  writeTextFile(path.join(SCHEMAS_DIR, "claude-code-plugin.d.ts"), pluginDeclMod.coreDeclarationsOf("2.1.299"));
  console.log("Saved schemas/claude-code-plugin.d.ts");

  // 3. Copy sdk-tools.d.ts and claude-code-settings.schema.json from system installation
  const sdkToolsSrc = "/usr/local/lib/node_modules/@anthropic-ai/claude-code/sdk-tools.d.ts";
  if (fs.existsSync(sdkToolsSrc)) {
    fs.copyFileSync(sdkToolsSrc, path.join(SCHEMAS_DIR, "sdk-tools.d.ts"));
    console.log("Copied schemas/sdk-tools.d.ts");
  }
  const settingsSchemaSrc = "/root/.vscode-server/extensions/anthropic.claude-code-2.1.299-linux-x64/claude-code-settings.schema.json";
  if (fs.existsSync(settingsSchemaSrc)) {
    fs.copyFileSync(settingsSchemaSrc, path.join(SCHEMAS_DIR, "claude-code-settings.schema.json"));
    console.log("Copied schemas/claude-code-settings.schema.json");
  }

  // 4. Reconstruct claude-test plugin (chunk-cf0113ya.js)
  const claudeTestMod = await import(path.join(SRC_DIR, "chunk-cf0113ya.js"));
  const claudeTestDir = path.join(SKILLS_DIR, "claude-test");
  writeFileMap(claudeTestDir, claudeTestMod.INSTALLED_FILES);
  writeTextFile(path.join(claudeTestDir, "skills/run/SKILL.md"), claudeTestMod.SKILL_MD.run);
  writeTextFile(path.join(claudeTestDir, "skills/execute/SKILL.md"), claudeTestMod.SKILL_MD.execute);
  writeTextFile(path.join(claudeTestDir, "skills/draft/SKILL.md"), claudeTestMod.SKILL_MD.draft);
  console.log("Reconstructed skills-and-plugins/claude-test");

  // 5. Reconstruct claude-api skill (chunk-n04m44w7.js)
  const claudeApiMod = await import(path.join(SRC_DIR, "chunk-n04m44w7.js"));
  const claudeApiDir = path.join(SKILLS_DIR, "claude-api");
  writeFileMap(claudeApiDir, claudeApiMod.SKILL_FILES);
  writeTextFile(path.join(claudeApiDir, "SKILL.md"), claudeApiMod.SKILL_PROMPT);
  writeTextFile(path.join(claudeApiDir, "model-vars.json"), claudeApiMod.SKILL_MODEL_VARS);
  console.log("Reconstructed skills-and-plugins/claude-api");

  // 6. Reconstruct design-sync / storybook skill (chunk-p9ank81q.js)
  const designSyncMod = await import(path.join(SRC_DIR, "chunk-p9ank81q.js"));
  const designSyncDir = path.join(SKILLS_DIR, "design-sync");
  writeFileMap(designSyncDir, designSyncMod.SKILL_FILES);
  writeTextFile(path.join(designSyncDir, "SKILL.md"), designSyncMod.SKILL_MD);
  console.log("Reconstructed skills-and-plugins/design-sync");

  // 7. Reconstruct additional embedded skills
  const extraSkillModules = [
    { name: "artifact-canvas", chunk: "chunk-0dgd00ep.js" },
    { name: "template-skill", chunk: "chunk-199cvb9q.js" },
    { name: "run-examples", chunk: "chunk-1rjx1sfp.js" },
    { name: "plugin-ui-band-pane", chunk: "chunk-1x7t3hwm.js" },
    { name: "decision-ui", chunk: "chunk-5wr9mgn3.js" },
    { name: "merge-state", chunk: "chunk-aeanwvgm.js" },
    { name: "board-ui", chunk: "chunk-b3f2zjga.js" },
    { name: "plugin-eval", chunk: "chunk-bhcz98jh.js" },
    { name: "cli-server-examples", chunk: "chunk-ezpzw5s3.js" },
    { name: "plugin-mcp-authoring", chunk: "chunk-gdgpfta3.js" },
    { name: "data-visualization", chunk: "chunk-pkgaaph8.js" },
    { name: "html-reports-explainer", chunk: "chunk-t6984cz8.js" },
    { name: "artifact-workshop", chunk: "chunk-ywdvwqfh.js" },
    { name: "doc-template", chunk: "chunk-zrhacqm1.js" },
  ];

  for (const item of extraSkillModules) {
    const mod = await import(path.join(SRC_DIR, item.chunk));
    const targetDir = path.join(SKILLS_DIR, item.name);
    if (mod.SKILL_FILES) writeFileMap(targetDir, mod.SKILL_FILES);
    if (mod.RUN_EXAMPLE_FILES) writeFileMap(targetDir, mod.RUN_EXAMPLE_FILES);
    if (typeof mod.SKILL_MD === "string") {
      writeTextFile(path.join(targetDir, "SKILL.md"), mod.SKILL_MD);
    } else if (mod.SKILL_MD && typeof mod.SKILL_MD === "object") {
      for (const [k, v] of Object.entries(mod.SKILL_MD)) {
        writeTextFile(path.join(targetDir, k, "SKILL.md"), v);
      }
    }
    if (typeof mod.SKILL_PROMPT === "string") {
      writeTextFile(path.join(targetDir, "SKILL.md"), mod.SKILL_PROMPT);
    }
    if (typeof mod.SKILL_COMPOSED_MD === "string") {
      writeTextFile(path.join(targetDir, "SKILL_COMPOSED.md"), mod.SKILL_COMPOSED_MD);
    }
    if (typeof mod.TEMPLATE_MD === "string") {
      writeTextFile(path.join(targetDir, "TEMPLATE.md"), mod.TEMPLATE_MD);
    }
    if (typeof mod.REFERENCE_MD === "string") {
      writeTextFile(path.join(targetDir, "reference.md"), mod.REFERENCE_MD);
      writeTextFile(path.join(targetDir, "examples/band.tsx"), mod.EXAMPLE_BAND);
      writeTextFile(path.join(targetDir, "examples/band-state.d.ts"), mod.EXAMPLE_BAND_STATE);
      writeTextFile(path.join(targetDir, "examples/pane.tsx"), mod.EXAMPLE_PANE);
      writeTextFile(path.join(targetDir, "examples/pane-state.d.ts"), mod.EXAMPLE_PANE_STATE);
      writeTextFile(path.join(targetDir, "examples/tool-call.ts"), mod.EXAMPLE_TOOL_CALL);
    }
    console.log("Reconstructed skills-and-plugins/" + item.name);
  }

  // 8. Decompress vendor JS bundles (mermaid, chart.js, highlight.js)
  const { tt } = await import(path.join(SRC_DIR, "chunk-bamccw3w.js"));
  for (const vname of ["mermaid.min.js", "chart.umd.min.js", "hljsBundle.generated.min.js"]) {
    const decompressed = tt(path.join(SRC_DIR, vname), SRC_DIR);
    writeTextFile(path.join(VENDOR_DIR, vname), decompressed);
  }
  console.log("Decompressed vendor bundles (mermaid.min.js, chart.umd.min.js, hljsBundle.generated.min.js)");

  // 9. Decompress all 138 .zst files into all-raw-decompressed/ for easy inspection
  let zstCount = 0;
  for (const fname of fs.readdirSync(SRC_DIR)) {
    if (fname.endsWith(".zst")) {
      const outName = fname.slice(0, -4);
      const decompressed = tt(path.join(SRC_DIR, fname), SRC_DIR);
      writeTextFile(path.join(RAW_DECOMPRESSED_DIR, outName), decompressed);
      zstCount++;
    }
  }
  console.log(`Decompressed all ${zstCount} .zst archives into extracted-assets/all-raw-decompressed/`);

  // 10. Extract Prompts (Brief / Pewter Owl, System Prompt headers, Core Tools)
  const briefMod = await import(path.join(SRC_DIR, "chunk-y4zafmyf.js"));
  writeTextFile(path.join(PROMPTS_DIR, "brief-send-user-message.json"), {
    toolName: briefMod.BRIEF_TOOL_NAME,
    legacyToolName: briefMod.LEGACY_BRIEF_TOOL_NAME,
    description: briefMod.DESCRIPTION,
    enforceSentinel: briefMod.BRIEF_ENFORCE_SENTINEL,
    toolPrompt: briefMod.BRIEF_TOOL_PROMPT,
    pewterOwlToolPrompt: briefMod.PEWTER_OWL_TOOL_PROMPT,
    proactiveSection: briefMod.BRIEF_PROACTIVE_SECTION,
  });
  console.log("Saved extracted-assets/prompts/brief-send-user-message.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
