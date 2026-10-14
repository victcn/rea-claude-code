#!/usr/bin/env python3
"""
Extract and restore all 2,619 embedded modules from the Claude Code v2.1.299
Bun standalone ELF executable (.bun section) into ./src.

Handles:
1. Bun StandaloneModuleGraph trailer & Offsets table parsing
2. UTF-16LE (Encoding::Utf16 = 2) -> UTF-8 decoding for text/markdown modules
3. Rewriting virtual `/$bunfs/root/` paths to local relative paths
4. Patching `Ne` (`import.meta.require`) in `chunk-m8ez8fhk.js` so `Loader::Text`
   assets (.md, .txt, and text-loader .mjs scaffolds) return raw UTF-8 strings
   as expected by the standalone runtime.
"""

import hashlib
import json
import os
import struct

BINARY_PATH = "/usr/local/lib/node_modules/@anthropic-ai/claude-code/bin/claude.exe"
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(PROJECT_ROOT, "src")
MANIFEST_PATH = os.path.join(PROJECT_ROOT, "manifest.json")

BUN_SECTION_OFFSET = 0x05C93000
TRAILER = b"\n---- Bun! ----\n"

ENCODING_NAMES = {0: "binary", 1: "latin1", 2: "utf16le"}
LOADER_NAMES = {
    1: "js",
    5: "file",
    10: "napi",
    13: "text",
}
MODULE_FORMAT_NAMES = {0: "none", 1: "esm", 2: "cjs"}


def main():
    os.makedirs(SRC_DIR, exist_ok=True)

    with open(BINARY_PATH, "rb") as f:
        f.seek(BUN_SECTION_OFFSET)
        payload_len = struct.unpack("<Q", f.read(8))[0]
        base = BUN_SECTION_OFFSET + 8

        trailer_offset = base + payload_len - len(TRAILER)
        f.seek(trailer_offset)
        trailer = f.read(len(TRAILER))
        if trailer != TRAILER:
            raise RuntimeError(f"Unexpected trailer: {trailer!r}")

        offsets_pos = trailer_offset - 32
        f.seek(offsets_pos)
        byte_count, mod_off, mod_len, entry_id, argv_off, argv_len, flags = struct.unpack(
            "<QIIIIII", f.read(32)
        )

        record_size = 52
        count = mod_len // record_size
        f.seek(base + mod_off)
        mod_bytes = f.read(mod_len)

        manifest_modules = []
        utf16_decoded_count = 0
        rewritten_files = 0

        for i in range(count):
            rec = mod_bytes[i * record_size : (i + 1) * record_size]
            (
                name_off,
                name_len,
                cont_off,
                cont_len,
                sm_off,
                sm_len,
                bc_off,
                bc_len,
                mi_off,
                mi_len,
                bop_off,
                bop_len,
                enc,
                loader,
                mf,
                side,
            ) = struct.unpack("<IIIIIIIIIIIIBBBB", rec)

            f.seek(base + name_off)
            virtual_name = f.read(name_len).decode("utf-8", errors="replace")

            rel_name = virtual_name
            if rel_name.startswith("/$bunfs/root/"):
                rel_name = rel_name[len("/$bunfs/root/") :]
            elif rel_name.startswith("/"):
                rel_name = rel_name[1:]

            out_path = os.path.join(SRC_DIR, rel_name)
            os.makedirs(os.path.dirname(out_path), exist_ok=True)

            f.seek(base + cont_off)
            raw_bytes = f.read(cont_len)

            # Decode UTF-16LE text modules (enc == 2) to UTF-8
            if enc == 2:
                text_content = raw_bytes.decode("utf-16-le")
                output_bytes = text_content.encode("utf-8")
                utf16_decoded_count += 1
            else:
                output_bytes = raw_bytes

            # For JS modules (loader == 1), rewrite virtual `/$bunfs/root/` paths to relative paths
            if loader == 1:
                text_str = output_bytes.decode("utf-8")
                depth = rel_name.count("/")
                rel_prefix = "./" if depth == 0 else ("../" * depth)
                if "/$bunfs/root/" in text_str:
                    text_str = text_str.replace("/$bunfs/root/", rel_prefix)
                    rewritten_files += 1
                output_bytes = text_str.encode("utf-8")

            with open(out_path, "wb") as out_f:
                out_f.write(output_bytes)

            sha256_hex = hashlib.sha256(output_bytes).hexdigest()
            manifest_modules.append(
                {
                    "index": i,
                    "virtual_path": virtual_name,
                    "relative_path": rel_name,
                    "is_entry_point": i == entry_id,
                    "size_bytes": len(output_bytes),
                    "raw_size_bytes": cont_len,
                    "bytecode_size_bytes": bc_len,
                    "sourcemap_size_bytes": sm_len,
                    "encoding": ENCODING_NAMES.get(enc, f"unknown({enc})"),
                    "loader": LOADER_NAMES.get(loader, f"unknown({loader})"),
                    "module_format": MODULE_FORMAT_NAMES.get(mf, f"unknown({mf})"),
                    "side": "server" if side == 0 else "client",
                    "sha256": sha256_hex,
                }
            )

    # Patch chunk-m8ez8fhk.js so `Ne` handles relative paths and Loader::Text assets properly
    helper_chunk_path = os.path.join(SRC_DIR, "chunk-m8ez8fhk.js")
    with open(helper_chunk_path, "r", encoding="utf-8") as hf:
        helper_code = hf.read()

    old_ne = "Ne=import.meta.require;"
    new_ne = (
        'Ne=((req,dir,fs,path)=>(id)=>{'
        'if(typeof id==="string"&&(id.startsWith("./")||id.startsWith("../")||id.startsWith("/$bunfs/root/"))){'
        'let p=id.startsWith("/$bunfs/root/")?path.join(dir,id.slice(13)):path.resolve(dir,id);'
        'if(p.endsWith(".md")||p.endsWith(".txt")||p.endsWith(".mjs"))return fs.readFileSync(p,"utf8");'
        'return req(p)}'
        'return req(id)})(import.meta.require,import.meta.dirname,import.meta.require("fs"),import.meta.require("path"));'
    )
    if old_ne in helper_code:
        helper_code = helper_code.replace(old_ne, new_ne)
        with open(helper_chunk_path, "w", encoding="utf-8") as hf:
            hf.write(helper_code)
        print("Patched Ne in chunk-m8ez8fhk.js for Loader::Text & relative path compatibility.")

    # Patch bZt in chunk-84yp45y8.js so HOOKS_WORKER_URL works with relative paths
    main_chunk_path = os.path.join(SRC_DIR, "chunk-84yp45y8.js")
    with open(main_chunk_path, "r", encoding="utf-8") as mf:
        main_code = mf.read()

    old_bzt = "function bZt(e){return O()===\"windows\"&&e.startsWith(SZt)?e:new URL(`file://${e}`)}"
    new_bzt = "function bZt(e){return O()===\"windows\"&&e.startsWith(SZt)?e:e.startsWith(\"/\")?new URL(`file://${e}`):new URL(e,import.meta.url)}"
    if old_bzt in main_code:
        main_code = main_code.replace(old_bzt, new_bzt)
        with open(main_chunk_path, "w", encoding="utf-8") as mf:
            mf.write(main_code)
        print("Patched bZt in chunk-84yp45y8.js for relative HOOKS_WORKER_URL resolution.")

    # Patch Oz in chunk-9wtp3skp.js so built-in plugins always use their bundled in-memory hooksModule
    hooks_chunk_path = os.path.join(SRC_DIR, "chunk-9wtp3skp.js")
    with open(hooks_chunk_path, "r", encoding="utf-8") as hcf:
        hooks_code = hcf.read()
    old_oz = "var Oz=(e,o,t)=>qu()?Fn(o,t(),e):{module:o,folder:e};"
    new_oz = "var Oz=(e,o,t)=>Fn(o,t(),e);"
    if old_oz in hooks_code:
        hooks_code = hooks_code.replace(old_oz, new_oz, 1)
        with open(hooks_chunk_path, "w", encoding="utf-8") as hcf:
            hcf.write(hooks_code)
        print("Patched Oz in chunk-9wtp3skp.js for built-in plugin hooksModule loading.")

    # Patch identity strings in chunk-gmq0qwep.js and auto-mode notice in chunk-84yp45y8.js for local gateway compatibility
    api_chunk_path = os.path.join(SRC_DIR, "chunk-gmq0qwep.js")
    with open(api_chunk_path, "r", encoding="utf-8") as acf:
        api_code = acf.read()
    old_id = 'var el="You are Claude Code, Anthropic\'s official CLI for Claude.",Bd="You are Claude Code, Anthropic\'s official CLI for Claude, running within the Claude Agent SDK.",Hd="You are a Claude agent, built on Anthropic\'s Claude Agent SDK."'
    new_id = 'var el="You are Claude Code, an AI assistant for software engineering.",Bd="You are Claude Code, an AI assistant for software engineering, running within the Agent SDK.",Hd="You are a coding agent for software engineering."'
    if old_id in api_code:
        api_code = api_code.replace(old_id, new_id, 1)
        with open(api_chunk_path, "w", encoding="utf-8") as acf:
            acf.write(api_code)
        print("Patched system prompt identity header in chunk-gmq0qwep.js for gateway compatibility.")

    with open(main_chunk_path, "r", encoding="utf-8") as mf:
        main_code = mf.read()
    old_z = 'function z$r(){return k("tengu_velvet_heron",!0)}'
    new_z = 'function z$r(){return!1}'
    if old_z in main_code:
        main_code = main_code.replace(old_z, new_z, 1)
        with open(main_chunk_path, "w", encoding="utf-8") as mf:
            mf.write(main_code)
        print("Patched z$r in chunk-84yp45y8.js to suppress gateway billing warning.")

    # Extract @anthropic-ai/bun-internal runtime (`bin/bun-ant`) by zeroing the .bun payload_len header
    bun_ant_path = os.path.join(PROJECT_ROOT, "bin", "bun-ant")
    os.makedirs(os.path.dirname(bun_ant_path), exist_ok=True)
    if not os.path.exists(bun_ant_path):
        import shutil
        shutil.copyfile(BINARY_PATH, bun_ant_path)
        with open(bun_ant_path, "r+b") as baf:
            baf.seek(BUN_SECTION_OFFSET)
            baf.write(b"\x00" * 8)
        os.chmod(bun_ant_path, 0o755)
        print(f"Extracted @anthropic-ai/bun-internal runtime to {bun_ant_path}.")

    manifest = {
        "name": "@anthropic-ai/claude-code",
        "version": "2.1.299",
        "binary_path": BINARY_PATH,
        "bun_section_offset": hex(BUN_SECTION_OFFSET),
        "payload_length": payload_len,
        "entry_point_id": entry_id,
        "entry_point_path": manifest_modules[entry_id]["relative_path"],
        "flags": hex(flags),
        "total_modules": count,
        "utf16_decoded_modules": utf16_decoded_count,
        "rewritten_js_modules": rewritten_files,
        "modules": manifest_modules,
    }
    with open(MANIFEST_PATH, "w", encoding="utf-8") as mf:
        json.dump(manifest, mf, indent=2, ensure_ascii=False)

    print(
        f"Extracted {count} modules ({utf16_decoded_count} UTF-16LE decoded, "
        f"{rewritten_files} JS modules path-rewritten). Manifest saved to {MANIFEST_PATH}."
    )


if __name__ == "__main__":
    main()
