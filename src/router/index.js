import {createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
// import NoteBook from '../components/NoteBook.vue'
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        // redirect: '/notebook',//重定向
        component: HelloWorld
    },
    {
        path: '/notebook',
        name: 'NoteBook',
        // component: NoteBook
        component: () => import('../components/NoteBook.vue')// Lazy loading懒加载
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
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),//history模式
    // history: createWebHashHistory(),//hash模式
    base:'/vue_example/',
    routes
})
export default router

