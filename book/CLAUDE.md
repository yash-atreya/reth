# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Reth documentation book** - a comprehensive documentation site for Reth, a performant and modular Ethereum client. The project uses [Vocs](https://vocs.dev) as the documentation framework and contains both legacy mdBook-based documentation and the new Vocs-based implementation.

## Project Structure

- `/vocs/` - Main Vocs documentation site
  - `/docs/pages/` - All documentation pages in MDX format
  - `/docs/snippets/` - Code snippets and examples (Rust code examples for ExEx development)
  - `vocs.config.ts` - Vocs configuration
  - `sidebar.ts` - Navigation sidebar structure
- `/cli/` - CLI documentation generation tools
  - `help.rs` - Rust script to auto-generate CLI reference from `--help` output
  - `update.sh` - Shell script to run CLI documentation generation

## Common Development Commands

### Development Server
```bash
cd vocs
npm run dev          # Start development server
npm run build        # Build production site
npm run preview      # Preview built site
```

### CLI Documentation Generation
```bash
# Generate CLI reference documentation
./cli/update.sh [path-to-reth-binary]
# Default uses ../target/debug/reth if no path provided
```

## Architecture

### Documentation Organization
The documentation follows a hierarchical structure:
1. **Introduction** - Overview and getting started
2. **Installation** - Various installation methods (binaries, Docker, source, ARM)
3. **Run a Node** - Node operation guides (mainnet, OP Stack, configuration)
4. **JSON-RPC** - API reference for all RPC namespaces
5. **Developers** - Development guides, particularly Execution Extensions (ExEx)
6. **CLI Reference** - Auto-generated command reference

### CLI Documentation System
- Uses a Rust script (`cli/help.rs`) that parses `--help` output from Reth binary
- Automatically generates MDX files for each command and subcommand
- Maintains a structured sidebar navigation
- Preprocesses help output to remove user-specific paths and normalize content

### Content Management
- **MDX Format**: All pages use MDX for combining Markdown with React components
- **Code Snippets**: Rust examples stored in `/docs/snippets/sources/` with proper Cargo.toml files
- **Navigation**: Centralized in `sidebar.ts` with hierarchical structure

## Key Files to Understand

- `vocs/sidebar.ts` - Defines entire site navigation structure
- `vocs/vocs.config.ts` - Main Vocs configuration
- `cli/help.rs` - CLI documentation generator (complex Rust script)
- `vocs/docs/pages/index.mdx` - Homepage landing page

## Development Workflow

1. **Content Updates**: Edit MDX files in `/docs/pages/`
2. **Navigation Changes**: Update `sidebar.ts`
3. **CLI Updates**: Run `./cli/update.sh` after Reth binary changes
4. **Code Examples**: Add to `/docs/snippets/sources/` with proper project structure

## Important Notes

- The CLI documentation is auto-generated - do not edit CLI MDX files manually
- Code snippets should be proper Rust projects with Cargo.toml files
- The project supports both ExEx (Execution Extensions) examples and general Reth usage
- Navigation structure in sidebar.ts must match the file structure in /docs/pages/