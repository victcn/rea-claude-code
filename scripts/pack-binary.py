#!/usr/bin/env python3
"""
Packages the reconstructed & patched Claude Code v2.1.299 project into:
1. ./dist/claude
   Single-file standalone Linux x64 ELF executable (.bun section patched with
   custom changes, preserving pre-compiled JSC bytecode for untouched modules).
2. ./dist/anthropic-ai-claude-code-2.1.299-reconstructed.tgz
   Standard `npm install -g` ready tarball bundling the standalone binary,
   TypeScript SDK definitions, and JSON schemas.
3. ./dist/claude-code-2.1.299-source-bundle.tar.gz
   Portable archive of the formatted source tree, entrypoints, schemas, and
   reconstructed skills/plugins.
"""

import hashlib
import json
import os
import shutil
import struct
import subprocess
import tarfile
import tempfile
import time

BINARY_PATH = "/usr/local/lib/node_modules/@anthropic-ai/claude-code/bin/claude.exe"
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST_DIR = os.path.join(PROJECT_ROOT, "dist")
BUN_SECTION_OFFSET = 0x05C93000


def build_standalone_elf():
    os.makedirs(DIST_DIR, exist_ok=True)
    out_elf = os.path.join(DIST_DIR, "claude")
    shutil.copyfile(BINARY_PATH, out_elf)
    os.chmod(out_elf, 0o755)

    patched_modules = []
    with open(out_elf, "r+b") as f:
        base = BUN_SECTION_OFFSET + 8
        mod_off = 0xA044C6C
        mod_len = 136188
        record_size = 52
        count = mod_len // record_size
        hashes_off = mod_off + mod_len

        f.seek(base + mod_off)
        mod_bytes = bytearray(f.read(mod_len))

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
            name = f.read(name_len).decode("utf-8", errors="replace")

            if name in ("/$bunfs/root/chunk-gmq0qwep.js", "/$bunfs/root/chunk-84yp45y8.js"):
                f.seek(base + cont_off)
                orig_code = f.read(cont_len).decode("utf-8")
                mod_code = orig_code

                if name == "/$bunfs/root/chunk-gmq0qwep.js":
                    old_id = (
                        'var el="You are Claude Code, Anthropic\'s official CLI for Claude.",'
                        'Bd="You are Claude Code, Anthropic\'s official CLI for Claude, running within the Claude Agent SDK.",'
                        'Hd="You are a Claude agent, built on Anthropic\'s Claude Agent SDK."'
                    )
                    new_id = (
                        'var el="You are Claude Code, an AI assistant for software engineering.",'
                        'Bd="You are Claude Code, an AI assistant for software engineering, running within the Agent SDK.",'
                        'Hd="You are a coding agent for software engineering."'
                    )
                    if old_id in mod_code:
                        mod_code = mod_code.replace(old_id, new_id, 1)

                if name == "/$bunfs/root/chunk-84yp45y8.js":
                    old_z = 'function z$r(){return k("tengu_velvet_heron",!0)}'
                    new_z = "function z$r(){return!1}"
                    if old_z in mod_code:
                        mod_code = mod_code.replace(old_z, new_z, 1)

                new_bytes = mod_code.encode("utf-8")
                if len(new_bytes) <= cont_len:
                    target_off = cont_off
                    pad_len = cont_len - len(new_bytes)
                elif len(new_bytes) <= bc_len:
                    target_off = bc_off
                    pad_len = bc_len - len(new_bytes)
                else:
                    raise RuntimeError(f"Modified {name} exceeds available inline slot")

                f.seek(base + target_off)
                f.write(new_bytes + b"\x00" * pad_len)

                new_rec = struct.pack(
                    "<IIIIIIIIIIIIBBBB",
                    name_off,
                    name_len,
                    target_off,
                    len(new_bytes),
                    sm_off,
                    sm_len,
                    0,
                    0,
                    mi_off,
                    mi_len,
                    0,
                    0,
                    enc,
                    loader,
                    mf,
                    side,
                )
                f.seek(base + mod_off + i * record_size)
                f.write(new_rec)

                # Clear source_hash so JSC hashes & compiles the updated source
                f.seek(base + hashes_off + i * 4)
                f.write(struct.pack("<I", 0))
                patched_modules.append(
                    {
                        "index": i,
                        "name": name,
                        "old_size": cont_len,
                        "new_size": len(new_bytes),
                    }
                )

    sha256 = hashlib.sha256()
    with open(out_elf, "rb") as f:
        while chunk := f.read(4 * 1024 * 1024):
            sha256.update(chunk)

    return out_elf, os.path.getsize(out_elf), sha256.hexdigest(), patched_modules


def build_npm_tarball(elf_path):
    npm_tgz = os.path.join(DIST_DIR, "anthropic-ai-claude-code-2.1.299-reconstructed.tgz")
    with tempfile.TemporaryDirectory(prefix="claude-npm-pkg-") as tmpdir:
        pkg_dir = os.path.join(tmpdir, "package")
        bin_dir = os.path.join(pkg_dir, "bin")
        os.makedirs(bin_dir, exist_ok=True)

        shutil.copyfile(elf_path, os.path.join(bin_dir, "claude"))
        os.chmod(os.path.join(bin_dir, "claude"), 0o755)

        for schema_file in ["sdk-tools.d.ts", "claude-code-plugin.d.ts", "claude-code-settings.schema.json", "model-catalog.json"]:
            src_f = os.path.join(PROJECT_ROOT, "schemas", schema_file)
            if os.path.exists(src_f):
                shutil.copyfile(src_f, os.path.join(pkg_dir, schema_file))

        shutil.copyfile(os.path.join(PROJECT_ROOT, "README.md"), os.path.join(pkg_dir, "README.md"))

        pkg_json = {
            "name": "@anthropic-ai/claude-code",
            "version": "2.1.299",
            "description": "Reconstructed & gateway-unlocked Claude Code CLI v2.1.299",
            "bin": {"claude": "bin/claude"},
            "type": "module",
            "files": [
                "bin/claude",
                "sdk-tools.d.ts",
                "claude-code-plugin.d.ts",
                "claude-code-settings.schema.json",
                "model-catalog.json",
                "README.md",
            ],
        }
        with open(os.path.join(pkg_dir, "package.json"), "w", encoding="utf-8") as f:
            json.dump(pkg_json, f, indent=2, ensure_ascii=False)

        with tarfile.open(npm_tgz, "w:gz") as tar:
            tar.add(pkg_dir, arcname="package")

    return npm_tgz, os.path.getsize(npm_tgz)


def build_source_archive():
    src_tgz = os.path.join(DIST_DIR, "claude-code-2.1.299-source-bundle.tar.gz")
    items_to_pack = [
        "README.md",
        "package.json",
        "manifest.json",
        "module-map.json",
        "self-test-report.json",
        "entrypoints",
        "schemas",
        "scripts",
        "extracted-assets",
        "src",
    ]
    with tarfile.open(src_tgz, "w:gz") as tar:
        for item in items_to_pack:
            full_p = os.path.join(PROJECT_ROOT, item)
            if os.path.exists(full_p):
                tar.add(full_p, arcname=f"claude-code-2.1.299-reconstructed/{item}")
        # Also include the bin/claude shell launcher (excluding the 265MB bun-ant copy to keep source bundle compact)
        tar.add(
            os.path.join(PROJECT_ROOT, "bin", "claude"),
            arcname="claude-code-2.1.299-reconstructed/bin/claude",
        )
    return src_tgz, os.path.getsize(src_tgz)


def main():
    t0 = time.time()
    print("1/3 Packing single-file standalone ELF binary (dist/claude)...")
    elf_path, elf_size, elf_sha256, patched = build_standalone_elf()
    print(f"    -> {elf_path} ({elf_size / (1024*1024):.2f} MiB, sha256={elf_sha256[:16]}...)")

    print("2/3 Building NPM installable package tarball...")
    npm_tgz, npm_size = build_npm_tarball(elf_path)
    print(f"    -> {npm_tgz} ({npm_size / (1024*1024):.2f} MiB)")

    print("3/3 Building full readable source & assets bundle...")
    src_tgz, src_size = build_source_archive()
    print(f"    -> {src_tgz} ({src_size / (1024*1024):.2f} MiB)")

    build_info = {
        "version": "2.1.299",
        "built_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "elapsed_seconds": round(time.time() - t0, 2),
        "artifacts": {
            "standalone_binary": {
                "path": elf_path,
                "size_bytes": elf_size,
                "size_mb": round(elf_size / (1024 * 1024), 2),
                "sha256": elf_sha256,
                "patched_modules": patched,
            },
            "npm_tarball": {
                "path": npm_tgz,
                "size_bytes": npm_size,
                "size_mb": round(npm_size / (1024 * 1024), 2),
            },
            "source_bundle": {
                "path": src_tgz,
                "size_bytes": src_size,
                "size_mb": round(src_size / (1024 * 1024), 2),
            },
        },
    }
    with open(os.path.join(DIST_DIR, "build-manifest.json"), "w", encoding="utf-8") as f:
        json.dump(build_info, f, indent=2, ensure_ascii=False)
    print(f"Done in {build_info['elapsed_seconds']}s! Build manifest saved to {DIST_DIR}/build-manifest.json.")


if __name__ == "__main__":
    main()
