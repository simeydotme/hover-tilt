import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/lib/index.ts',
	output: [
		{
			file: 'dist/hover-tilt.js',
			format: 'es',
			sourcemap: true
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
				customElement: true
			}
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: true,
			inlineSources: true,
			compilerOptions: {
				declaration: false,
				declarationMap: false,
				allowImportingTsExtensions: false,
				outDir: undefined,
				skipLibCheck: true
			},
			tsconfig: false,
			include: ['src/lib/**/*', 'src/lib/**/*.d.ts'],
			// Disable type checking - only use for transpilation
			// Type checking is handled separately by svelte-check
			noEmitOnError: false
		})
	],
};