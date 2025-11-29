import fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

// banner to be added to the top of each generated file
const banner = `/**
 * ${pkg.name} ~ ${pkg.version}
 * ${pkg.description || ''}
 * ${pkg.homepage ? `Project home: ${pkg.homepage}` : ''}
 * © ${new Date().getFullYear()} ${pkg.author} ~ ${pkg.license} License
 * Published: ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}
 */`;

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      file: 'dist/hover-tilt.js',
      format: 'es',
      sourcemap: true,
      banner: banner
    }
  ],
  onwarn(warning, warn) {
    // Suppress circular dependency warnings from Svelte internals
    if (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message.includes('node_modules/svelte')) {
      return;
    }
    warn(warning);
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
        dev: false
      }
    }),
    typescript({
      sourceMap: true,
      inlineSources: true,
      compilerOptions: {
        declaration: false,
        declarationMap: false,
        allowImportingTsExtensions: false,
        outDir: undefined,
        skipLibCheck: true,
        lib: ['ES2015', 'DOM', 'DOM.Iterable']
      },
      tsconfig: false,
      include: ['src/lib/**/*', 'src/lib/**/*.d.ts'],
      // Disable type checking - only use for transpilation
      // Type checking is handled separately by svelte-check
      noEmitOnError: false
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    filesize()
  ]
};
