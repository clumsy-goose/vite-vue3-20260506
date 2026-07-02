import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'TEST', 'NAME', 'ALL'])
  return {
    plugins: [vue()],
    define: {
      'import.meta.env.TEST': JSON.stringify(env.TEST),
      'import.meta.env.NAME': JSON.stringify(env.NAME),
      'import.meta.env.NAME': JSON.stringify(env.ALL),
    },
  }
})
