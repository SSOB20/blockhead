import { sveltekit } from '@sveltejs/kit/vite'
import houdini from 'houdini/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		houdini(),
		sveltekit()
	],

	ssr: {
		noExternal: [
			// /node_modules/.pnpm/echarts@5.3.2/node_modules/echarts/core.js:20
			// export * from './lib/export/core.js';
			// ^^^^^^
			// SyntaxError: Unexpected token 'export'
			'echarts',
		],

		// Transform into ESModules
		// For CommonJS errors
		// The requested module '/node_modules/__' does not provide an export named 'default'
		optimizeDeps: {
			include: [
				// Directory import '/opt/build/repo/node_modules/@apollo/client/core' is not supported resolving ES modules imported from /opt/build/repo/.svelte-kit/output/server/app.js
				// Did you mean to import @apollo/client/core/core.cjs.js?
				// https://github.com/timhall/svelte-apollo/issues/97#issuecomment-857397762
				"@apollo/client/core",
				"@apollo/client/cache",
				"@apollo/client/link/ws",
				"@apollo/client/link/context",
				"@apollo/client/link/error",
				"@apollo/client/utilities",

				'@3id/connect',
			],
			exclude: ["@apollo/client", "svelte-apollo"],
		},
	},
}

export default config
