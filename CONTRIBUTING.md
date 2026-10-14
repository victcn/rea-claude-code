# Contributing Guide

## Development Workflow

1. **Extract & Restore from Official Binary**:
   ```bash
   bun run extract
   ```
2. **Format AST of Extracted Modules**:
   ```bash
   bun run format
   ```
3. **Reconstruct Embedded Skills, Plugins & Schemas**:
   ```bash
   bun run reconstruct-assets
   bun run build-map
   ```
4. **Run the Automated 11-Point Self-Test Suite**:
   ```bash
   bun run test
   ```
5. **Re-pack into Single-File ELF & NPM Tarball**:
   ```bash
   bun run pack
   ```
6. **Run in Pure Local Isolated Environment**:
   ```bash
   bun run isolated
   ```
