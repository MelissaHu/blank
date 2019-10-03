import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        title: '首页',
        component: (resolve) => { require(['@/pages/home/index.vue'], resolve) }
    }]
})