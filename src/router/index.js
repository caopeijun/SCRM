import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: login
		},
		{
			path: '/homeSalesman',
					name: 'homeSalesman',
					component: resolve => require(['@/components/homeSalesman/index'], resolve),
			meta: {
				requireAuth: true,
			},
		},
		{
			path: '/orderDetails',
			name: 'orderDetails',
			component: resolve => require(['@/components/orderDetails/index'], resolve),
		},
		{
			path: '/writeMessage',
			name: 'writeMessage',
			component: resolve => require(['@/components/writeMessage/index'], resolve)
		},
		{
			path: '/tradeSuccess',
			name: 'tradeSuccess',
			component: resolve => require(['@/components/tradeSuccess/index'], resolve)
		},
		{
			path: '/takelistmessage',
			name: 'takelistmessage',
			component: resolve => require(['@/components/takelistmessage/index'], resolve)
		},
		{
			path: '/login',
			name: 'login',
			component: resolve => require(['@/components/login/index'], resolve)
		},
		{
			path: '/takelist',
			name: 'takelist',
			component: resolve => require(['@/components/takelist/index'], resolve)
		},
		{
			path: '/addressee',
			name: 'addressee',
			component: resolve => require(['@/components/addressee/index'], resolve)
		},
		{
			path: '/newaddressee',
			name: 'newaddressee',
			component: resolve => require(['@/components/newaddressee/index'], resolve)
		},
		{
			path: '/inside_home',
			name: 'inside_home',
			component: resolve => require(['@/components/inside_home/index'], resolve)
		},
		{
			path: '/order_list',
			name: 'order_list',
			component: resolve => require(['@/components/order_list/index'], resolve)
		},
		{
			path: '/details_audited',
			name: 'details_audited',
			component: resolve => require(['@/components/details_audited/index'], resolve)
		},
		{
			path: '/reviewed',
			name: 'reviewed',
			component: resolve => require(['@/components/reviewed/index'], resolve)
		},
		{
			path: '/submitto',
			name: 'submitto',
			component: resolve => require(['@/components/submitto/index'], resolve)
		},
		{
			path: '/dakaLeaderLook',
			name: 'dakaLeaderLook',
			component: resolve => require(['@/components/dakaLeaderLook/index'], resolve)
		},
		{
			path: '/workDayb',
			name: 'workDayb',
			component: resolve => require(['@/components/workDayb/index'], resolve)
		},
		{
			path: '/mydaybDetail',
			name: 'mydaybDetail',
			component: resolve => require(['@/components/mydaybDetail/index'], resolve)
		},
		{
			path: '/daybaoProManager',
			name: 'daybaoProManager',
			component: resolve => require(['@/components/daybaoProManager/index'], resolve)
		},
		{
			path: '/daybaoLeader',
			name: 'daybaoLeader',
			component: resolve => require(['@/components/daybaoLeader/index'], resolve)
		},
		{
			path: '/leader_home',
			name: 'leader_home',
			component: resolve => require(['@/components/leader_home/index'], resolve)
		},
		{
			path: '/my',
			name: 'my',
			component: resolve => require(['@/components/my/index'], resolve)
		},
		{
			path: '/mynews',
			name: 'mynews',
			component: resolve => require(['@/components/mynews/index'], resolve)
		},
		{
			path: '/accounts_receivable',
			name: 'accounts_receivable',
			component: resolve => require(['@/components/accounts_receivable/index'], resolve)
		},
		{
			path: '/sales_statistics',
			name: 'sales_statistics',
			component: resolve => require(['@/components/sales_statistics/index'], resolve)
		},
		{
			path: '/customer_statistics',
			name: 'customer_statistics',
			component: resolve => require(['@/components/customer_statistics/index'], resolve)
		},
		{
			path: '/takelistsucess',
			name: 'takelistsucess',
			component: resolve => require(['@/components/takelistsucess/index'], resolve)
		},
		{
			path: '/register',
			name: 'register',
			component: resolve => require(['@/components/register/index'], resolve),
			meta: {
				keepAlive: true
			}
		},
		{
			path: '/registernext',
			name: 'registernext',
			component: resolve => require(['@/components/registernext/index'], resolve)
		},
		{
			path: '/registersre',
			name: 'registersre',
			component: resolve => require(['@/components/registersre/index'], resolve)
		},
		{
			path: '/registersucess',
			name: 'registersucess',
			component: resolve => require(['@/components/registersucess/index'], resolve)
		},
		{
			path: '/registermap',
			name: 'registermap',
			component: resolve => require(['@/components/registermap/index'], resolve)
		},
		{
			path: '/translate',
			name: 'translate',
			component: resolve => require(['@/components/translate/index'], resolve)
		},
		{
			path: '/translateclock',
			name: 'translateclock',
			component: resolve => require(['@/components/translateclock/index'], resolve)
		},
		{
			path: '/translatepro',
			name: 'translatepro',
			component: resolve => require(['@/components/translatepro/index'], resolve)
		},
		{
			path: '/Pricequery',
			name: 'Pricequery',
			component: resolve => require(['@/components/Pricequery/index'], resolve)
		},
		{
			path: '/receivable',
			name: 'receivable',
			component: resolve => require(['@/components/receivable/index'], resolve)
		},
	]

})