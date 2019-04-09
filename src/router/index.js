import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import serviceClass from '@/components/serviceClass'
import business from '@/components/business'
import goodDetail from '@/components/goodDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', // 除了已经配置好路由
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/serviceClass',
      name: 'serviceClass',
      component: serviceClass
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/goodDetail',
      name: 'goodDetail',
      component: goodDetail
    }
  ]
})
