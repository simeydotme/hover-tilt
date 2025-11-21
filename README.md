# Svelte Hover Tilt

A beautiful hover tilt effect component for Svelte 5, available as both a Svelte Component and Web Component.

## Features

- **Svelte 5 Component** - Native Svelte Component with full TypeScript support
- **Web Component** - Use it in any framework or vanilla HTML
- **Spring Animations** - Smooth, physics-based animations using Svelte's spring store
- **Customizable** - Extensive props for tilt, scale, glare, shadow, and more
- **TypeScript** - Full type definitions exported for your IDE
- **Lightweight** - Minimal dependencies, optimized bundle size

## Installation

```bash
npm install hover-tilt
# or
pnpm add hover-tilt
# or
yarn add hover-tilt
```

## Quick Start

### Svelte Component

```svelte
<script>
	import { HoverTilt } from 'hover-tilt';
</script>

<HoverTilt tiltFactor={1.5} scaleFactor={1.1}>
	<div class="card">
		Your content here
	</div>
</HoverTilt>
```

### Web Component

```html
<script type="module" src="node_modules/hover-tilt/dist/hover-tilt.js"></script>

<hover-tilt tilt-factor="1.5" scale-factor="1.1">
	<div class="card">
		Your content here
	</div>
</hover-tilt>
```

## Documentation

- **[Full Documentation](https://simeydotme.github.io/hover-tilt)** - Complete API reference and examples

## Monorepo Structure

This repository is a monorepo containing:

- **`packages/hover-tilt`** - The main library package
- **`apps/docs`** - Documentation site built with Astro + Starlight

## Development

### Prerequisites

- Node.js 20+
- pnpm 10+

### Setup

```bash
# Install dependencies
pnpm install
```

### Scripts

#### Development

```bash
# Run dev server for packages only (library)
pnpm dev

# Run dev servers for all packages and apps (library, docs)
pnpm dev:all
```

#### Build

```bash
# Build packages only
pnpm build

# Build all packages and apps
pnpm build:all
```

#### Lint

```bash
# Lint packages only
pnpm lint

# Lint all packages and apps
pnpm lint:all
```

#### Format

```bash
# Format packages only
pnpm format

# Format all packages and apps
pnpm format:all
```

#### Type Check

```bash
# Type check packages only
pnpm check

# Type check all packages and apps
pnpm check:all
```

### Running Individual Packages

If you need to run a specific package directly:

```bash
# Library
pnpm --filter hover-tilt dev

# Documentation
pnpm --filter ./apps/docs dev
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MPL-2.0

## Author

Simon Goellner ([@simeydotme](https://github.com/simeydotme))
