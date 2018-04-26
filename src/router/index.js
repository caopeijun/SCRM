import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import goodDetail from '@/components/goodDetail'
import inside_home from '@/components/inside_home/index'
import submitto from '@/components/submitto/index'
import leader_home from '@/components/leader_home/index'
import order_list from '@/components/order_list/index'
import details_audited from '@/components/details_audited/index'
import reviewed from '@/components/reviewed/index'
import homeSalesman from '@/components/homeSalesman/index'
import orderDetails from '@/components/orderDetails/index'
import writeMessage from '@/components/writeMessage/index'
import tradeSuccess from '@/components/tradeSuccess/index'
import takelistmessage from '@/components/takelistmessage'
import takelist from '@/components/takelist'
import login from '@/components/login'
import addressee from '@/components/addressee'
import newaddressee from '@/components/newaddressee'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Home',component: Home },
    { path: '/homeSalesman',name: 'homeSalesman', component: homeSalesman},
    { path: '/orderDetails' ,name:'orderDetails' ,component:orderDetails},
    { path: '/writeMessage' ,name:'writeMessage' ,component:writeMessage},
    { path: '/tradeSuccess' ,name:'tradeSuccess' ,component:tradeSuccess},
    { path: '/takelistmessage',name:'takelistmessage',component:takelistmessage},
    { path: '/login',name:'login',component:login},
    { path: '/takelist',name:'takelist',component:takelist},
    { path: '/addressee',name:'addressee',component:addressee},
    { path: '/newaddressee',name:'newaddressee',component:newaddressee},
    { path: '/inside_home' ,name:'inside_home' ,component:inside_home},
    { path: '/order_list' ,name:'order_list' ,component:order_list},
    { path: '/details_audited' ,name:'details_audited' ,component:details_audited},
    { path: '/reviewed' ,name:'reviewed' ,component:reviewed},
    { path: '/submitto' ,name:'submitto' ,component:submitto},
    { path: '/leader_home' ,name:'leader_home' ,component:leader_home},
  ]
})
