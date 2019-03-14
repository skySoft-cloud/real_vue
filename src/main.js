// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import "font-awesome/css/font-awesome.min.css"
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import * as ajax from './utils/ajax'


/**
 * 全局导航守卫，检测未登录时应当跳转login页面
 */
router.beforeEach((to, from, next)=> {
  // 1. 验证登录用户名是否正确
  // 1.1 获取本地存储的用户信息
  let user_info = JSON.parse(localStorage["user_info"]);
  // 1.2 不是admin登录并且当前不是login页面就跳转到login页面，
  if (user_info["username"] !== "admin" && to.path != "/login") {
    next('/login')
  } else {
    next();
  }
})

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$ajax  = ajax;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
