import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/LoginSwitch.vue')
    },
    {
        path: '/modern',
        name: 'loginModern',
        component: () => import('@/views/LoginModern.vue')
    },
    {
        path: '/water',
        name: 'loginWater',
        component: () => import('@/views/LoginWater.vue')
    },
    {
        path: '/work',
        name: 'loginWork',
        component: () => import('@/views/LoginWork.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router
