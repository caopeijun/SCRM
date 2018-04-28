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
import takelistmessage from '@/components/takelistmessage/index'
import takelist from '@/components/takelist/index'
import login from '@/components/login/index'
import addressee from '@/components/addressee/index'
import newaddressee from '@/components/newaddressee/index'
import inside_home from '@/components/inside_home'
import homeSalesman from '@/components/homeSalesman'
import navbar from '@/components/navbar'
import orderDetails from '@/components/orderDetails'
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
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/Home',
			name: 'Home',
			component: Home
		},
		{
			path: '/cart',
			name: 'cart',
			component: cart
		},
		{
			path: '/my',
			name: 'my',
			component: my
		},
		{
			path: '/goodDetail',
			name: 'goodDetail',
			component: goodDetail
		},
		{
			path: '/order',
			name: 'order',
			component: order
		},
		{
			path: '/author',
			name: 'author',
			component: author
		},
		{
			path: '/choose',
			name: 'choose',
			component: choose
		},
		{
			path: '/information',
			name: 'information',
			component: information
		},
		{
			path: '/news',
			name: 'news',
			component: news
		},
		{
			path: '/parts',
			name: 'parts',
			component: parts
		},
		{
			path: '/takelistmessage',
			name: 'takelistmessage',
			component: takelistmessage
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/takelist',
			name: 'takelist',
			component: takelist
		},
		{
			path: '/addressee',
			name: 'addressee',
			component: addressee
		},
		{
			path: '/newaddressee',
			name: 'newaddressee',
			component: newaddressee
		},
		{
			path: '/inside_home',
			name: 'inside_home',
			component: inside_home
		},
		{
			path: '/navbar',
			name: 'navbar',
			component: navbar
		},
		{
			path: '/orderDetails',
			name: 'orderDetails',
			component: orderDetails
		},
		{
			path: '/takelistsucess',
			name: 'takelistsucess',
			component: takelistsucess
		},
		{
			path: '/register',
			name: 'register',
			component: register,
			meta: {
				keepAlive: true // 需要被缓存
			}
		},
		{
			path: '/registernext',
			name: 'registernext',
			component: registernext
		},
		{
			path: '/registersre',
			name: 'registersre',
			component: registersre
		},
		{
			path: '/registersucess',
			name: 'registersucess',
			component: registersucess
		},
		{
			path: '/registermap',
			name: 'registermap',
			component: registermap
		},
		{
			path: '/translate',
			name: 'translate',
			component: translate
		},
		{
			path: '/translateclock',
			name: 'translateclock',
			component: translateclock
		},
		{
			path: '/translatepro',
			name: 'translatepro',
			component: translatepro
		},
		{
			path: '/Pricequery',
			name: 'Pricequery',
			component: Pricequery
		},
		{
			path: '/receivable',
			name: 'receivable',
			component: receivable
		},
	]
})