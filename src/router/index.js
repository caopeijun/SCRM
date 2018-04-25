import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import homeSalesman from '@/components/homeSalesman/index'
import orderDetails from '@/components/orderDetails/index'
import writeMessage from '@/components/writeMessage/index'
import tradeSuccess from '@/components/tradeSuccess/index'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Home',component: Home },
    { path: '/homeSalesman',name: 'homeSalesman', component: homeSalesman},
    { path: '/orderDetails' ,name:'orderDetails' ,component:orderDetails},
    { path: '/writeMessage' ,name:'writeMessage' ,component:writeMessage},
    { path: '/tradeSuccess' ,name:'tradeSuccess' ,component:tradeSuccess}
  ]
})
