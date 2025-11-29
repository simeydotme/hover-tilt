<div align="center">

<img src="https://raw.githubusercontent.com/simeydotme/hover-tilt/main/apps/docs/src/assets/hover-tilt.svg" 
    alt="Svelte Hover Tilt Logo" width="400">

  <h1 align="center">
    Hover Tilt
  </h1>

  <p>
    <a href="https://github.com/simeydotme/hover-tilt/releases">
      <img src="https://img.shields.io/github/package-json/v/simeydotme/hover-tilt/main?label=&color=%235e73e7&logo=github" alt="Code Version">
    </a>
    <a href="https://www.npmjs.com/package/hover-tilt">
      <img src="https://img.shields.io/npm/v/hover-tilt?color=%235e73e7&logo=npm&label=" alt="NPM version">
      <img src="https://img.shields.io/npm/dm/hover-tilt?label=&color=%235e73e7" alt="NPM Downloads / Month">
    </a>
  </p>

A simple, flexible tilt & glare component for Svelte 5.  
_Available as both a **Svelte Component** and **Web Component**._  
Works with any framework or vanilla JavaScript via the Web Component.

<a href="#svelte-component" title="Works with Svelte 5"><img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte Icon"></a>
<a href="#web-component" title="As a Web Component"><img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Icon"> <img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS Icon"></a>
<a href="#with-vue" title="Works with Vue"><img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue Icon"></a>
<a href="#with-react" title="Works with React"><img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Icon"></a>
<a href="#with-angular" title="Works with Angular"><img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular Icon"></a>
<a href="#with-jquery" title="Works with jQuery"><img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery Icon"></a>

<br>
<br>

<img src="https://raw.githubusercontent.com/simeydotme/hover-tilt/main/packages/hover-tilt/static/hover-tilt-example.gif" alt="Hover Tilt Demo" width="500">

</div>

## Documentation

- **[Getting Started](https://hover-tilt.simey.me/getting-started)** - Installation and basic usage
- **[Full Documentation](https://hover-tilt.simey.me/options/props)** - Complete API reference and examples
-

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
<script setup>
import 'hover-tilt/web-component';
</script>

<template>
  <hover-tilt tilt-factor="1.5" scale-factor="1.1">
    <div class="card">Your content here</div>
  </hover-tilt>
</template>
```

#### With React

```jsx
import 'hover-tilt/web-component';

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

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## License

MPL-2.0

## Author

Simon Goellner ([@simeydotme](https://github.com/simeydotme))
