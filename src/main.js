// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import Axios from 'axios'

//vue权限管理
//// 定义路由映射
//let router = new VueRouter({
//routes: [{
//  path: '/login',
//  name: 'login',
//  component: Login
//}]
//})
//
///* eslint-disable no-new */
//let vm = new Vue({
//router,
//template: '<App/>',
//components: { App }
//}).$mount('#app')
//
//// 路由权限验证
//router.beforeEach((to, from, next) => {
//// 是否登录
//let isLogin = function () {
//  return vm.$db.get('token')
//}
//if (to.path === '/login' && !isLogin()) {
//  // 没有登录是/login
//  return next()
//} else if (!isLogin()) {
//  // 没有登录不是/login
//  return next({path: '/login'})
//} else {
//  // 登录不是/login
//  let rule = vm.$db.get('rule')
//  let assignRule = Common.assignRouter(rule)
//  for (let i in assignRule) {
//    if (assignRule[i] instanceof Object) {
//      if (assignRule[i].path === to.path) {
//        return next()
//      }
//    }
//  }
//}
//return next({path: '/error'})
//})
//
//let token = vm.$db.get('token')
//if (token) {
//let rule = vm.$db.get('rule')
//// 获取路由
//Common.addRoutes(router, rule)
//}


//引入时间组件
import Calendar from 'vue-mobile-calendar'

Vue.use(Calendar)


//引入UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)


Vue.prototype.$axios = Axios //加载axios
//引入vue-resource
import VueResource from 'vue-resource';
import VueWechatTitle from 'vue-wechat-title';
Vue.use(VueResource)
Vue.use(VueWechatTitle) 

Vue.config.productionTip = false

//配置Vue原型(在任何组件都可以正常使用)
Vue.prototype.http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
