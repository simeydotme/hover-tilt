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

## Monorepo Structure

```
/
├── packages/
│   └── hover-tilt/            # Main library package
├── apps/
│   ├── docs/                   # Starlight-powered documentation site
│   └── storybook/              # Storybook for component testing
```

## Running Packages

### Library Package

```bash
# Development mode
pnpm --filter hover-tilt dev

# Build
pnpm --filter hover-tilt build

# Type check
pnpm --filter hover-tilt check

# Lint
pnpm --filter hover-tilt lint
```

### Documentation Site

```bash
# Development mode
pnpm --filter ./apps/docs dev

# Build
pnpm --filter ./apps/docs build
```

### Storybook

```bash
# Development mode
pnpm --filter ./apps/storybook dev

# Build
pnpm --filter ./apps/storybook build
```

### Root Scripts

You can also run scripts across all packages from the root:

```bash
# Run dev servers for all packages
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Format all packages
pnpm format
```

## Adding New Stories/Examples

### Storybook

Stories are located in `apps/storybook/src/`. To add a new story:

1. Create or edit a `.stories.ts` file in `apps/storybook/src/`
2. Use CSF3 format (Component Story Format 3)
3. Export stories with different prop combinations

Example:
```typescript
import type { Meta, StoryObj } from '@storybook/svelte';
import HoverTilt from 'hover-tilt';

const meta = {
	title: 'Components/HoverTilt',
	component: HoverTilt,
	tags: ['autodocs']
} satisfies Meta<HoverTilt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyNewStory: Story = {
	args: {
		tiltFactor: 2,
		scaleFactor: 1.2
	}
};
```

### Documentation Examples

Documentation examples are in `apps/docs/src/content/`. To add a new example:

1. Edit the relevant markdown file in `apps/docs/src/content/`
2. Use the `DemoContainer` component for interactive examples
3. Import the component: `import { HoverTilt } from 'hover-tilt';`

## Code Style

We use Prettier for code formatting. The configuration is shared across all packages.

- **Format code**: `pnpm format`
- **Check formatting**: `pnpm lint`

### Pre-commit Hooks

Pre-commit hooks are configured to run linting before commits. Make sure your code is properly formatted before committing.

## Testing

Currently, we rely on:
- Type checking with `svelte-check`
- Manual testing via Storybook
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
- [ ] Storybook examples are added/updated if adding new features

## Questions?

If you have questions or need help, please open an issue on GitHub.

