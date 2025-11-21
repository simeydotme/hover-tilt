// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
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
      description: 'A simple, beautiful tilt & glare component, available as both a Svelte Component and Web Component',
      logo: {
        src: './src/assets/hover-tilt.svg',
        replacesTitle: true,
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/simeydotme/hover-tilt' },
        { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/simeydotme' },
      ],
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
          items: [
            { label: 'Props Reference', slug: 'options/props' },
            { label: 'CSS Styling Reference', slug: 'options/css' }
          ]
        },
        {
          label: 'Examples',
          items: [
            { label: 'Web Component', slug: 'examples/web-component' },
            { label: 'Usage Examples', slug: 'examples/usage' },
          ]
        },
        {
          label: 'Advanced',
          items: [
            { label: 'Shadows', slug: 'advanced/shadows' },
            { label: 'Custom Shadow', slug: 'advanced/custom-shadow' },
            { label: 'Custom Gradient', slug: 'advanced/custom-gradient' },
            { label: 'Glare Masks', slug: 'advanced/glare-masks' },
          ]
        },
        {
          label: 'Bespoke Ideas',
          items: [
            { label: 'Credit Cards', slug: 'bespoke/credit-cards' },
            { label: 'Pokemon Cards', slug: 'bespoke/pokemon-cards' },
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
    // @ts-ignore tailwindcss plugin types target Vite 7, but Vite 6 is in use here
    plugins: [tailwindcss()],
    resolve: {
      conditions: ['browser'],
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url))
      }
    }
  }
});
