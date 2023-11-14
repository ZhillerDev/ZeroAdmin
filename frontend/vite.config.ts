import {ConfigEnv, defineConfig, loadEnv, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

import svgLoader from 'vite-svg-loader'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';

// tdesign包括自动导入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {TDesignResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default ({command, mode}: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd())
    const {VITE_PUBLIC_PATH} = env
    return (
        {
            base: VITE_PUBLIC_PATH,
            resolve:
                {
                    alias: {
                        "@":
                            path.resolve(__dirname, "./src")
                    }
                }
            ,
            server: {
                /** 是否开启 HTTPS */
                https: false,
                /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
                host:
                    true, // host: "0.0.0.0"
                /** 端口号 */
                port:
                    10086,
                /** 是否自动打开浏览器 */
                open:
                    false,
                /** 跨域设置允许 */
                cors:
                    true,
                /** 端口被占用时，是否直接退出 */
                strictPort:
                    false,
                /** 接口代理 */
                proxy:
                    {
                        "/api/v1":
                            {
                                target: "https://www.fastmock.site/mock/761e2dda2b8890ab86c928a74e8f6538",
                                ws:
                                    true,
                                /** 是否允许跨域 */
                                changeOrigin:
                                    true
                            }
                    }
            }
            ,
            /** 混淆器 */
            esbuild: {
                /** 打包时移除 console.log */
                pure: ["console.log"],
                /** 打包时移除 debugger */
                drop:
                    ["debugger"],
                /** 打包时移除所有注释 */
                legalComments:
                    "none"
            }
            ,
            plugins: [vue(), svgLoader(),
                AutoImport({
                    resolvers: [TDesignResolver({
                        library: 'vue-next'
                    })],
                }),
                Components({
                    resolvers: [TDesignResolver({
                        library: 'vue-next'
                    })],
                }),
                createSvgIconsPlugin({
                    // 指定需要缓存的图标文件夹
                    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
                    // 指定symbolId格式
                    symbolId: 'icon-[dir]-[name]',
                })]
        }
    )
}
