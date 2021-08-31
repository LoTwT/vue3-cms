import { ConfigEnv, loadEnv, UserConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import VitePluginElementPlus from "vite-plugin-element-plus"
import path from "path"

export default ({ command, mode }: ConfigEnv): UserConfig => {
  // .env
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_API_PROXY_URL } = env

  return {
    plugins: [
      vue(),
      VitePluginElementPlus({
        // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
        // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
        // 的文档注释
        // useSource: true
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: VITE_API_PROXY_URL ?? "",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  }
}
