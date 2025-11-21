# Contributing to Svelte Hover Tilt

Thank you for your interest in contributing to Svelte Hover Tilt! This document provides guidelines and instructions for contributing.

## Development Setup

This is a monorepo using pnpm workspaces. Follow these steps to get started:

### Prerequisites

- Node.js 20 or higher
- pnpm 10 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/simeydotme/hover-tilt.git
cd hover-tilt
```

2. Install dependencies:
```bash
pnpm install
```

   This will automatically set up git hooks via the `prepare` script. The hooks will run linting checks before each commit.

## Monorepo Structure

```
/
├── packages/
│   └── hover-tilt/            # Main library package
├── apps/
│   └── docs/                   # Starlight-powered documentation site
```

## Running Packages

### Library Package

```bash
# Development mode
pnpm dev

# Build
pnpm build

# Type check
pnpm check

# Lint
pnpm lint
```

### Documentation Site

```bash
# Development mode
pnpm dev:docs

# Build
pnpm build:docs
```

## Adding New Examples

### Documentation Examples

Documentation examples are in `apps/docs/src/content/`. It's running on
Astro + Starlight. To add a new example:

1. Edit the relevant markdown file in `apps/docs/src/content/`
2. Reference existing patterns to create the new example

## Code Style

We use Prettier for code formatting. The configuration is shared across all packages.

- **Format code**: `pnpm format`
- **Check formatting**: `pnpm lint`

### Pre-commit Hooks

Pre-commit hooks are automatically set up when you run `pnpm install`. They will run `pnpm lint:all` before each commit to ensure your code is properly formatted.

**If hooks aren't working:**
1. Make sure you've run `pnpm install` (this sets up the hooks automatically)
2. If needed, manually run `pnpm prepare` to reinstall the hooks
3. The hooks will prevent commits if linting fails - format your code with `pnpm format:all` and try again

## Testing

Currently, we rely on:
- Type checking with `svelte-check`
- Visual testing in the documentation site

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Ensure all linting and type checks pass
4. Build all packages to ensure nothing is broken
5. Submit a pull request with a clear description of changes

### PR Checklist

- [ ] Code is formatted (`pnpm format`)
- [ ] Type checking passes (`pnpm check`)
- [ ] All packages build successfully (`pnpm build`)
- [ ] Documentation is updated if needed

## Questions?

If you have questions or need help, please open an issue on GitHub.

