import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'headers',
            component: resolve => require(['../components/headers'], resolve)
        },
        {
            path: '/index',
            name: 'index',
            component: resolve => require(['../view/index'], resolve)
        }
    ]
})