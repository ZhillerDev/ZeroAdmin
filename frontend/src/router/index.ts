import {RouteRecordRaw,createRouter, createWebHashHistory} from "vue-router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Layouts =()=>import("@/layouts/index.vue")

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Layouts,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/index.vue"),
                name: "Dashboard",
                meta: {
                    title: "首页",
                    svgIcon: "dashboard",
                    affix: true
                }
            }
        ]
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/"
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

NProgress.configure({
    easing: 'ease',
    speed: 200,
    showSpinner: false,
    trickleSpeed: 100,
    minimum: 0.4
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})
router.afterEach(() => {
    NProgress.done()
})

export default router
