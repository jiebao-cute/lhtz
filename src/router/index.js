import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: "/login",
        component: () => import('../components/Login.vue')
    },
    {
        path: "/",
        component: () => import('../layout/Layout.vue'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                component: () => import('../views/index/index.vue')
            }
        ]

    }
]
const router = new VueRouter({
    routes
})
export default router