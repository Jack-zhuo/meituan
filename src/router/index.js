import {createRouter, createWebHashHistory} from "vue-router";
import myHome from '../pages/myHome/myHome'
import myCart from '../pages/myCart/myCart'
import myOrder from '../pages/myOrder/myOrder'
import mine from '../pages/mine/Mine'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: myHome
        },
        {
            path: '/home',
            component: myHome
        },
        {
            path: '/cart',
            component:myCart
        },
        {
            path: '/order',
            component: myOrder
        },
        {
            path: '/mine',
            component:mine
        },
    ]
})

export default router