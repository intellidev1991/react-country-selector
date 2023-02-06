import { UserConfig, defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
// @ts-ignore
import { peerDependencies, dependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig((_configEnv) => ({
  plugins: [dts(), react(), tsConfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, './src', 'index.ts'),
      name: '@intellidev/react-country-selector',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`, // Change this to your library name
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
    },
    target: 'esnext',
    sourcemap: true,
  },
})) as UserConfig
