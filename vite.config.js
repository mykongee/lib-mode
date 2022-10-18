import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			formats: ['es', 'cjs'],
			fileName: (format, name) => `pages/${name}/index.${format}.js`,
			entry: [
				resolve(__dirname, 'src/pages/First/first.index.js'),
				resolve(__dirname, 'src/pages/Second/second.index.js'),
				resolve(__dirname, 'src/pages/Third/third.index.js')
			],
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
			  // Provide global variables to use in the UMD build
			  // for externalized deps
				globals: {
					vue: 'Vue',
				},
				exports: 'named',
			},
		},
	}
})
