import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import cart from '@/components/cart'
import my from '@/components/my'
import goodDetail from '@/components/goodDetail'
import order from '@/components/order'
import author from '@/components/author'
import choose from '@/components/choose'
import information from '@/components/information'
import news from '@/components/news'
import parts from '@/components/parts'
import inside_home from '@/components/inside_home/index'
import submitto from '@/components/submitto/index'
import leader_home from '@/components/leader_home/index'
import homeSalesman from '@/components/homeSalesman'
import navbar from '@/components/navbar'
import orderDetails from '@/components/orderDetails'
import order_list from '@/components/order_list/index'
import details_audited from '@/components/details_audited/index'
import reviewed from '@/components/reviewed/index'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Home',component: Home },
    { path: '/Home',name: 'Home', component: Home},
    { path: '/homeSalesman',name: 'homeSalesman', component: homeSalesman},
    { path: '/cart',name: 'cart',component: cart },
    { path: '/my',name: 'my',component: my },
    { path: '/goodDetail', name: 'goodDetail',component: goodDetail },
    { path: '/order',name: 'order',component: order },
    { path: '/author', name: 'author',component: author },
    { path: '/choose' ,name:'choose' ,component:choose},
    { path: '/information' ,name:'information' ,component:information},
    { path: '/news' ,name:'news' ,component:news},
    { path: '/parts' ,name:'parts' ,component:parts},
    { path: '/inside_home' ,name:'inside_home' ,component:inside_home},
    { path: '/navbar' ,name:'navbar' ,component:navbar},
    { path: '/orderDetails' ,name:'orderDetails' ,component:orderDetails},
    { path: '/order_list' ,name:'order_list' ,component:order_list},
    { path: '/details_audited' ,name:'details_audited' ,component:details_audited},
    { path: '/reviewed' ,name:'reviewed' ,component:reviewed},
    { path: '/submitto' ,name:'submitto' ,component:submitto},
    { path: '/leader_home' ,name:'leader_home' ,component:leader_home},
  ]
})
