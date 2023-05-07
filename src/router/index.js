import {createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
// import NoteBook from '../components/NoteBook.vue'
// const User=()=>import('../components/User.vue')
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        // redirect: '/notebook',//重定向
        component: HelloWorld,
        meta:{
            name:'首页',
        }//路由元信息
    },
    {
        path: '/notebook',
        name: 'NoteBook',
        // component: NoteBook
        component: () => import('../components/NoteBook.vue'),// Lazy loading懒加载
        // meta:{}//路由元信息
    },
    {
        path: '/shoppingcart',
        name: 'Shopping cart',
        // component: NoteBook
        component: () => import('../components/Shopping cart.vue')// Lazy loading懒加载
    }
    ,
    {
        path: '/movieticket',
        name: 'Movie ticket',
        // component: NoteBook
        component: () => import('../components/Movie ticket.vue')// Lazy loading懒加载
    },
    {
        path: '/guessnumber',
        name: 'guessNumber',
        // component: NoteBook
        component: () => import('../components/guessNumber.vue')// Lazy loading懒加载
    },
    {
        path: '/slider',
        name: 'slider',
        // component: NoteBook
        component: () => import('../components/SliderTest/main.vue')// Lazy loading懒加载
    },
    // {
    //     path: '/user',
    //     name: 'User',
    //     component: User,
    //     children:[
    //         {
    //             path: '',//默认子路由
    //             component: () => import('../components/UserHome.vue')
    //         },
    //         {
    //             path: 'news',// /user/news
    //             component: () => import('../components/UserNews.vue')
    //         },
    //         {
    //             path: 'msg',// /user/msg
    //             component: () => import('../components/UserMsg.vue')
    //         }
    //     ]

    // }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),//history模式
    // history: createWebHashHistory(),//hash模式
    base:'/vue_example/',
    routes
})
export default router

