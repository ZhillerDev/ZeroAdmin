import {RouteRecordRaw, createRouter} from "vue-router";
import 'nprogress/nprogress.css';
import routeSettings from "@/config/route.ts";
import {flatMultiLevelRoutes, history} from "@/router/helper.ts";

const Layouts = () => import("@/layouts/index.vue")

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/redirect",
        component: Layouts,
        meta: {
            hidden: true
        },
        children: [
            {
                path: "/redirect/:path(.*)",
                component: () => import("@/views/redirect/index.vue")
            }
        ]
    },
    {
        path: "/403",
        component: () => import("@/views/error-page/403.vue"),
        meta: {
            hidden: true
        }
    },
    {
        path: "/404",
        component: () => import("@/views/error-page/404.vue"),
        meta: {
            hidden: true
        },
        alias: "/:pathMatch(.*)*"
    },
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            hidden: true
        }
    },
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
    }
]

export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: "/permission",
        component: Layouts,
        redirect: "/permission/page",
        name: "Permission",
        meta: {
            title: "权限管理",
            svgIcon: "lock",
            roles: ["admin", "editor"], // 可以在根路由中设置角色
            alwaysShow: true // 将始终显示根菜单
        },
        children: [
            {
                path: "page",
                component: () => import("@/views/permission/page.vue"),
                name: "PagePermission",
                meta: {
                    title: "页面权限",
                    roles: ["admin"] // 或者在子导航中设置角色
                }
            },
            {
                path: "directive",
                component: () => import("@/views/permission/directive.vue"),
                name: "DirectivePermission",
                meta: {
                    title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
                }
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
        redirect: "/404",
        name: "ErrorPage",
        meta: {
            hidden: true
        }
    }
]

const router = createRouter({
    history,
    routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

// NProgress.configure({
//     easing: 'ease',
//     speed: 200,
//     showSpinner: false,
//     trickleSpeed: 100,
//     minimum: 0.4
// })
//
// router.beforeEach((to, from, next) => {
//     NProgress.start()
//     next()
// })
// router.afterEach(() => {
//     NProgress.done()
// })

/** 重置路由 */
export function resetRouter() {
    // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
    try {
        router.getRoutes().forEach((route) => {
            const {name, meta} = route
            if (name && meta.roles?.length) {
                router.hasRoute(name) && router.removeRoute(name)
            }
        })
    } catch {
        // 强制刷新浏览器也行，只是交互体验不是很好
        window.location.reload()
    }
}

export default router
