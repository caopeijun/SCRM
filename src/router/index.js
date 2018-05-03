import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import takelistmessage from '@/components/takelistmessage/index'
import takelist from '@/components/takelist/index'
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
import login from '@/components/login'
import addressee from '@/components/addressee'
import newaddressee from '@/components/newaddressee'
import dakaLeaderLook from '@/components/dakaLeaderLook'
import workDayb from '@/components/workDayb'
import mydaybDetail from '@/components/mydaybDetail'
import daybaoProManager from '@/components/daybaoProManager'
import daybaoLeader from '@/components/daybaoLeader'
import takelistsucess from '@/components/takelistsucess/index'
import register from '@/components/register/index'
import registernext from '@/components/registernext/index'
import registersre from '@/components/registersre/index'
import registersucess from '@/components/registersucess/index'
import registermap from '@/components/registermap/index'
import translate from '@/components/translate/index'
import translateclock from '@/components/translateclock/index'
import translatepro from '@/components/translatepro/index'
import Pricequery from '@/components/Pricequery/index'
import receivable from '@/components/receivable/index'
import my_salesman from '@/components/my_salesman/index'
import my_inside from '@/components/my_inside/index'
import my_leader from '@/components/my_leader/index'
import accounts_receivable from '@/components/accounts_receivable/index'
import mynews from '@/components/mynews/index'
import sales_statistics from '@/components/sales_statistics/index'
import customer_statistics from '@/components/customer_statistics/index'
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
    { path: '/dakaLeaderLook' ,name:'dakaLeaderLook' ,component:dakaLeaderLook},
    { path: '/workDayb' ,name:'workDayb' ,component:workDayb},
    { path: '/mydaybDetail' ,name:'mydaybDetail' ,component:mydaybDetail},
    { path: '/daybaoProManager' ,name:'daybaoProManager' ,component:daybaoProManager},
    { path: '/daybaoLeader' ,name:'daybaoLeader' ,component:daybaoLeader},
		{ path: '/leader_home' ,name:'leader_home' ,component:leader_home},
    { path: '/my_salesman' ,name:'my_salesman' ,component:my_salesman},
    { path: '/mynews' ,name:'mynews' ,component:mynews},
    { path: '/accounts_receivable' ,name:'accounts_receivable' ,component:accounts_receivable},
    { path: '/my_inside' ,name:'my_inside' ,component:my_inside},
    { path: '/my_leader' ,name:'my_leader' ,component:my_leader},
    { path: '/sales_statistics' ,name:'sales_statistics' ,component:sales_statistics},
    { path: '/customer_statistics' ,name:'customer_statistics' ,component:customer_statistics},
    { path: '/takelistsucess' ,name:'takelistsucess' ,component:takelistsucess},
    { path: '/register' ,name:'register' ,component:register,meta:{keepAlive: true}},
    { path: '/registernext' ,name:'registernext' ,component:registernext},
    { path: '/registersre' ,name:'registersre' ,component:registersre},
    { path: '/registersucess' ,name:'registersucess' ,component:registersucess},
    { path: '/registermap' ,name:'registermap' ,component:registermap},
    { path: '/translate' ,name:'translate' ,component:translate},
    { path: '/translateclock' ,name:'translateclock' ,component:translateclock},
    { path: '/translatepro' ,name:'translatepro' ,component:translatepro},
    { path: '/Pricequery' ,name:'Pricequery' ,component:Pricequery},
    { path: '/receivable' ,name:'receivable' ,component:receivable},
  ]
  
})
