// 核心
import {createApp} from 'vue'
import App from './App.vue'

// 关键支持组件
import store from "@/store";
import router from "@/router";
import "@/router/permission.ts"

// 样式
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import "@/styles/index.scss"
import 'tdesign-vue-next/es/style/index.css';
import 'virtual:svg-icons-register';

const app = createApp(App)

app.use(VXETable).use(store).use(router)
router.isReady().then(() => {
    app.mount("#app")
})
