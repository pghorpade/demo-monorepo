import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'UiLib',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
