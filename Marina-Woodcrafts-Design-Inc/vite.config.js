import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  publicDir: path.resolve(__dirname, '../Assets'),
  server: {
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
  },
})
