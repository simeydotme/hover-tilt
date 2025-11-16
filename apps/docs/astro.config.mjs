// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    starlight({
      title: 'Hover Tilt',
      description: 'A beautiful hover tilt effect component for Svelte 5 and web components',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/simeydotme/hover-tilt' }],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'index' },
            { label: 'Installation', slug: 'getting-started' }
          ]
        },
        {
          label: 'Options',
          items: [{ label: 'Props Reference', slug: 'options' }]
        },
        {
          label: 'Examples',
          items: [
            { label: 'Usage Examples', slug: 'examples' },
            { label: 'Web Component', slug: 'web-component' }
          ]
        }
      ],
      customCss: ['./src/styles/global.css'],
      plugins: [
        catppuccin({
          dark: { flavor: 'frappe', accent: 'sky' },
          light: { flavor: 'latte', accent: 'lavender' }
        })
      ]
    })
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      conditions: ['browser']
    }
  }
});
