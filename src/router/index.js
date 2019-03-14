import Vue from 'vue'
import Router from 'vue-router'
import AppLogin from '@/components/AppLogin'
import HelloWorld from '@/components/HelloWorld'
import subPage from '@/components/subPage'
import subPageOne from '@/components/subPageOne'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      //redirect:"/login",
      component: subPage,
      children:[{
        path: 'subpageone',
        component: subPageOne,
      }],
    },
    {
      path: '/login',
      component: AppLogin,
    },
  ]
})
