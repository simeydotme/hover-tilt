<div align="center">

<img src="https://raw.githubusercontent.com/simeydotme/hover-tilt/main/apps/docs/src/assets/hover-tilt.svg" 
    alt="Svelte Hover Tilt Logo" style="max-width: 500px; width: 100%; height: auto;">

  <h1 align="center">
    Hover Tilt
  </h1>

  <p>
    <a href="https://github.com/simeydotme/hover-tilt/releases">
      <img src="https://img.shields.io/github/package-json/v/simeydotme/hover-tilt/main?label=&color=%234A40D4&logo=github" alt="Code Version">
    </a>
    <a href="https://www.npmjs.com/package/hover-tilt">
      <img src="https://img.shields.io/npm/v/hover-tilt?color=%234A40D4&logo=npm&label=" alt="NPM version">
      <img src="https://img.shields.io/npm/dm/hover-tilt?label=&color=%234A40D4" alt="NPM Downloads / Month">
    </a>
  </p>

A beautiful hover tilt effect component for Svelte 5, available as both a **Svelte Component** and **Web Component**.  
Works with any framework or vanilla JavaScript via the Web Component.

 <img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte Icon">
 <img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue Icon">
 <img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Icon">
 <img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Icon">
 <img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS Icon">
 <img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery Icon">

<br>
<br>

</div>

## Features

- **Svelte 5 Component** - Native Svelte Component with full TypeScript support
- **Web Component** - Use it in any framework (Vue, React, Angular) or vanilla HTML/jQuery
- **Framework Agnostic** - Works everywhere via standard Web Components
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
# or
bun add hover-tilt
```

## Quick Start

### Svelte Component

```svelte
<script>
  import { HoverTilt } from 'hover-tilt';
</script>

<HoverTilt tiltFactor={1.5} scaleFactor={1.1}>
  <div class="card">Your content here</div>
</HoverTilt>
```

### Web Component

Works in any framework or vanilla HTML:

```html
<script type="module" src="node_modules/hover-tilt/dist/hover-tilt.js"></script>

<hover-tilt tilt-factor="1.5" scale-factor="1.1">
  <div class="card">Your content here</div>
</hover-tilt>
```

#### With Vue

```vue
<template>
  <hover-tilt tilt-factor="1.5" scale-factor="1.1">
    <div class="card">Your content here</div>
  </hover-tilt>
</template>

<script setup>
// Import the web component
import 'hover-tilt/dist/hover-tilt.js';
</script>
```

#### With React

```jsx
import 'hover-tilt/dist/hover-tilt.js';

function MyComponent() {
  return (
    <hover-tilt tilt-factor="1.5" scale-factor="1.1">
      <div className="card">Your content here</div>
    </hover-tilt>
  );
}
```

#### With jQuery

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="module" src="node_modules/hover-tilt/dist/hover-tilt.js"></script>

<hover-tilt tilt-factor="1.5" scale-factor="1.1">
  <div class="card">Your content here</div>
</hover-tilt>
```

## Documentation

- **[Full Documentation](https://simeydotme.github.io/hover-tilt)** - Complete API reference and examples

## License

MPL-2.0

## Author

Simon Goellner ([@simeydotme](https://github.com/simeydotme))
