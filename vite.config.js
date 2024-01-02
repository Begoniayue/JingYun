import { fileURLToPath, URL, } from 'node:url'
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
/* 自动引入组件 */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import AntdResolver from 'unplugin-auto-import-antd'
// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());
  console.log(env,'env')
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        resolvers: [AntdResolver()]
      }),
      Components({
        resolvers: [AntdResolver()]
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      proxy: {
        '/api': {
          target: "http://58.213.24.186:8083/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "api")
        }
      }
    }
  }})
