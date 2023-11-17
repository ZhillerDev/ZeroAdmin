// vite.config.ts
import { loadEnv } from "file:///G:/develop/release-project/ZeroAdmin/frontend/node_modules/.pnpm/vite@4.5.0_@types+node@20.9.0_sass@1.69.5/node_modules/vite/dist/node/index.js";
import vue from "file:///G:/develop/release-project/ZeroAdmin/frontend/node_modules/.pnpm/@vitejs+plugin-vue@4.4.1_vite@4.5.0_vue@3.3.8/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import svgLoader from "file:///G:/develop/release-project/ZeroAdmin/frontend/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import { createSvgIconsPlugin } from "file:///G:/develop/release-project/ZeroAdmin/frontend/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.5.0/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import AutoImport from "file:///G:/develop/release-project/ZeroAdmin/frontend/node_modules/.pnpm/unplugin-auto-import@0.16.7/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///G:/develop/release-project/ZeroAdmin/frontend/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.8/node_modules/unplugin-vue-components/dist/vite.mjs";
import { TDesignResolver } from "file:///G:/develop/release-project/ZeroAdmin/frontend/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.8/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "G:\\develop\\release-project\\ZeroAdmin\\frontend";
var vite_config_default = ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_PUBLIC_PATH, VITE_BACKEND_URL } = env;
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    server: {
      /** 是否开启 HTTPS */
      https: false,
      /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
      host: true,
      // host: "0.0.0.0"
      /** 端口号 */
      port: 10086,
      /** 是否自动打开浏览器 */
      open: false,
      /** 跨域设置允许 */
      cors: true,
      /** 端口被占用时，是否直接退出 */
      strictPort: false,
      /** 接口代理 */
      proxy: {
        "/api": {
          target: VITE_BACKEND_URL,
          ws: true,
          /** 是否允许跨域 */
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    },
    /** 混淆器 */
    esbuild: {
      /** 打包时移除 console.log */
      pure: ["console.log"],
      /** 打包时移除 debugger */
      drop: ["debugger"],
      /** 打包时移除所有注释 */
      legalComments: "none"
    },
    plugins: [
      vue(),
      svgLoader(),
      AutoImport({
        resolvers: [TDesignResolver({
          library: "vue-next"
        })]
      }),
      Components({
        resolvers: [TDesignResolver({
          library: "vue-next"
        })]
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
      })
    ]
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxkZXZlbG9wXFxcXHJlbGVhc2UtcHJvamVjdFxcXFxaZXJvQWRtaW5cXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXGRldmVsb3BcXFxccmVsZWFzZS1wcm9qZWN0XFxcXFplcm9BZG1pblxcXFxmcm9udGVuZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovZGV2ZWxvcC9yZWxlYXNlLXByb2plY3QvWmVyb0FkbWluL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtDb25maWdFbnYsIGRlZmluZUNvbmZpZywgbG9hZEVudiwgVXNlckNvbmZpZ30gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXG5pbXBvcnQge2NyZWF0ZVN2Z0ljb25zUGx1Z2lufSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnO1xuXG4vLyB0ZGVzaWduXHU1MzA1XHU2MkVDXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IHtURGVzaWduUmVzb2x2ZXJ9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoe2NvbW1hbmQsIG1vZGV9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpXG4gICAgY29uc3Qge1ZJVEVfUFVCTElDX1BBVEgsIFZJVEVfQkFDS0VORF9VUkx9ID0gZW52XG4gICAgcmV0dXJuIChcbiAgICAgICAge1xuICAgICAgICAgICAgYmFzZTogVklURV9QVUJMSUNfUEFUSCxcbiAgICAgICAgICAgIHJlc29sdmU6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJAXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICAgICAgLyoqIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRiBIVFRQUyAqL1xuICAgICAgICAgICAgICAgIGh0dHBzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvKiogXHU4QkJFXHU3RjZFIGhvc3Q6IHRydWUgXHU2MjREXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4IE5ldHdvcmsgXHU3Njg0XHU1RjYyXHU1RjBGXHVGRjBDXHU0RUU1IElQIFx1OEJCRlx1OTVFRVx1OTg3OVx1NzZFRSAqL1xuICAgICAgICAgICAgICAgIGhvc3Q6XG4gICAgICAgICAgICAgICAgICAgIHRydWUsIC8vIGhvc3Q6IFwiMC4wLjAuMFwiXG4gICAgICAgICAgICAgICAgLyoqIFx1N0FFRlx1NTNFM1x1NTNGNyAqL1xuICAgICAgICAgICAgICAgIHBvcnQ6XG4gICAgICAgICAgICAgICAgICAgIDEwMDg2LFxuICAgICAgICAgICAgICAgIC8qKiBcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTZENEZcdTg5QzhcdTU2NjggKi9cbiAgICAgICAgICAgICAgICBvcGVuOlxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAvKiogXHU4REU4XHU1N0RGXHU4QkJFXHU3RjZFXHU1MTQxXHU4QkI4ICovXG4gICAgICAgICAgICAgICAgY29yczpcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAvKiogXHU3QUVGXHU1M0UzXHU4OEFCXHU1MzYwXHU3NTI4XHU2NUY2XHVGRjBDXHU2NjJGXHU1NDI2XHU3NkY0XHU2M0E1XHU5MDAwXHU1MUZBICovXG4gICAgICAgICAgICAgICAgc3RyaWN0UG9ydDpcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgLyoqIFx1NjNBNVx1NTNFM1x1NEVFM1x1NzQwNiAqL1xuICAgICAgICAgICAgICAgIHByb3h5OlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9hcGlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogVklURV9CQUNLRU5EX1VSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUxNDFcdThCQjhcdThERThcdTU3REYgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAsXG4gICAgICAgICAgICAvKiogXHU2REY3XHU2REM2XHU1NjY4ICovXG4gICAgICAgICAgICBlc2J1aWxkOiB7XG4gICAgICAgICAgICAgICAgLyoqIFx1NjI1M1x1NTMwNVx1NjVGNlx1NzlGQlx1OTY2NCBjb25zb2xlLmxvZyAqL1xuICAgICAgICAgICAgICAgIHB1cmU6IFtcImNvbnNvbGUubG9nXCJdLFxuICAgICAgICAgICAgICAgIC8qKiBcdTYyNTNcdTUzMDVcdTY1RjZcdTc5RkJcdTk2NjQgZGVidWdnZXIgKi9cbiAgICAgICAgICAgICAgICBkcm9wOlxuICAgICAgICAgICAgICAgICAgICBbXCJkZWJ1Z2dlclwiXSxcbiAgICAgICAgICAgICAgICAvKiogXHU2MjUzXHU1MzA1XHU2NUY2XHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5XHU2Q0U4XHU5MUNBICovXG4gICAgICAgICAgICAgICAgbGVnYWxDb21tZW50czpcbiAgICAgICAgICAgICAgICAgICAgXCJub25lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIHBsdWdpbnM6IFt2dWUoKSwgc3ZnTG9hZGVyKCksXG4gICAgICAgICAgICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyczogW1REZXNpZ25SZXNvbHZlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaWJyYXJ5OiAndnVlLW5leHQnXG4gICAgICAgICAgICAgICAgICAgIH0pXSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJzOiBbVERlc2lnblJlc29sdmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpYnJhcnk6ICd2dWUtbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfSldLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgICAgICAgICAgICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zL3N2ZycpXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXG4gICAgICAgICAgICAgICAgfSldXG4gICAgICAgIH1cbiAgICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1VLFNBQWlDLGVBQTBCO0FBQzlYLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFFakIsT0FBTyxlQUFlO0FBQ3RCLFNBQVEsNEJBQTJCO0FBR25DLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVEsdUJBQXNCO0FBVjlCLElBQU0sbUNBQW1DO0FBYXpDLElBQU8sc0JBQVEsQ0FBQyxFQUFDLFNBQVMsS0FBSSxNQUE2QjtBQUN2RCxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQ3ZDLFFBQU0sRUFBQyxrQkFBa0IsaUJBQWdCLElBQUk7QUFDN0MsU0FDSTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sU0FDSTtBQUFBLE1BQ0ksT0FBTztBQUFBLFFBQ0gsS0FDSSxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3ZDO0FBQUEsSUFDSjtBQUFBLElBRUosUUFBUTtBQUFBO0FBQUEsTUFFSixPQUFPO0FBQUE7QUFBQSxNQUVQLE1BQ0k7QUFBQTtBQUFBO0FBQUEsTUFFSixNQUNJO0FBQUE7QUFBQSxNQUVKLE1BQ0k7QUFBQTtBQUFBLE1BRUosTUFDSTtBQUFBO0FBQUEsTUFFSixZQUNJO0FBQUE7QUFBQSxNQUVKLE9BQ0k7QUFBQSxRQUNJLFFBQ0k7QUFBQSxVQUNJLFFBQVE7QUFBQSxVQUNSLElBQUk7QUFBQTtBQUFBLFVBRUosY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsUUFDaEQ7QUFBQSxNQUNSO0FBQUEsSUFDUjtBQUFBO0FBQUEsSUFHQSxTQUFTO0FBQUE7QUFBQSxNQUVMLE1BQU0sQ0FBQyxhQUFhO0FBQUE7QUFBQSxNQUVwQixNQUNJLENBQUMsVUFBVTtBQUFBO0FBQUEsTUFFZixlQUNJO0FBQUEsSUFDUjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQUMsSUFBSTtBQUFBLE1BQUcsVUFBVTtBQUFBLE1BQ3ZCLFdBQVc7QUFBQSxRQUNQLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQSxVQUN4QixTQUFTO0FBQUEsUUFDYixDQUFDLENBQUM7QUFBQSxNQUNOLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNQLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQSxVQUN4QixTQUFTO0FBQUEsUUFDYixDQUFDLENBQUM7QUFBQSxNQUNOLENBQUM7QUFBQSxNQUNELHFCQUFxQjtBQUFBO0FBQUEsUUFFakIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxzQkFBc0IsQ0FBQztBQUFBO0FBQUEsUUFFOUQsVUFBVTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUNWO0FBRVI7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
