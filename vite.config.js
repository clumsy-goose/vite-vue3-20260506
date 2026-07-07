import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'TEST', 'NAME', 'ALL', 'ENVSCOPE', 'BRANCH'])
  return {
    plugins: [vue()],
    define: {
      'import.meta.env.TEST': JSON.stringify(env.TEST),
      'import.meta.env.NAME': JSON.stringify(env.NAME),
      'import.meta.env.ALL': JSON.stringify(env.ALL),
      'import.meta.env.ENVSCOPE': JSON.stringify(env.ENVSCOPE),
      'import.meta.env.BRANCH': JSON.stringify(env.BRANCH),
    },
  }
})
