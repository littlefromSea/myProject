import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello.vue'
import List from '../components/List.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Hello',
        meta: { keepAlive: true },
        component: Hello
    }, {
        path: '/List',
        name: 'List',
        component: List
    }]
})

export default router;