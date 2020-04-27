import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Channel from '../views/Channel.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:id',
        name: 'channel',
        component: Channel,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
