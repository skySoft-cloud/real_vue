import Vue from 'vue'
import Router from 'vue-router'
import AppLogin from '@/components/AppLogin'
import HelloWorld from '@/components/HelloWorld'
import subPage from '@/components/subPage'
import subPageOne from '@/components/subPageOne'
import AppWeddingCeremony from '@/components/AppWeddingCeremony'
import AppFemale from '@/components/AppFemale'
import AppMale from '@/components/AppMale'
import AppEducateChildren from '@/components/AppEducateChildren'
import AppManageWork from '@/components/AppManageWork'
import AppSupportElderly from '@/components/AppSupportElderly'
import AppAddress from '@/components/AppAddress'

Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      //redirect:"/login",
      component: subPage,
      children: [{
        path: 'subpageone',
        component: subPageOne,
      },
        {
          path: 'appweddingceremony',
          component: AppWeddingCeremony,
        },
        {
          path: 'appfemale',
          component: AppFemale,
        },
        {
          path: 'appmale',
          component: AppMale,
        },{
          path: 'appaddress',
          component: AppAddress,
        },
        {
          path: 'appeducatechildren',
          component: AppEducateChildren,
        },
        {
          path: 'appmanagework',
          component: AppManageWork,
        },
        {
          path: 'appsupportelderly',
          component: AppSupportElderly,
        }
      ],
    },
    {
      path: '/login',
      component: AppLogin,
    },
    // 处理404找不到页面的情况
    {
      path: '*',
      component: subPage
    }
  ]
})
