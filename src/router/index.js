import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: login,
			meta:{
				title:'登录'
			}
		},
		{
			path: '/homeSalesman',
					name: 'homeSalesman',
					component: resolve => require(['@/components/homeSalesman/index'], resolve),
			meta: {
				requireAuth: true,
				title:'首页'
			},
		},
		{
			path: '/orderDetails',
			name: 'orderDetails',
			component: resolve => require(['@/components/orderDetails/index'], resolve),
			meta:{
				title:'订单详情'
			}
		},
		{
			path: '/writeMessage',
			name: 'writeMessage',
			component: resolve => require(['@/components/writeMessage/index'], resolve),
			meta:{
				title:'填写收货信息'
			}
		},
		{
			path: '/tradeSuccess',
			name: 'tradeSuccess',
			component: resolve => require(['@/components/tradeSuccess/index'], resolve),
			meta:{
				title:'交易成功'
			}
		},
		{
			path: '/takelistmessage',
			name: 'takelistmessage',
			component: resolve => require(['@/components/takelistmessage/index'], resolve),
			meta:{
				keepAlive:true,
				title:'代客下单'
			}
		},
		{
			path: '/login',
			name: 'login',
			component: resolve => require(['@/components/login/index'], resolve),
			meta:{
				title:'登录'
			}
		},
		{
			path: '/takelist',
			name: 'takelist',
			component: resolve => require(['@/components/takelist/index'], resolve),
			meta:{
				title:'客户'
			}
		},
		{
			path: '/addressee',
			name: 'addressee',
			component: resolve => require(['@/components/addressee/index'], resolve),
			meta:{
				title:'选择收货地址'
			}
		},
		{
			path: '/newaddressee',
			name: 'newaddressee',
			component: resolve => require(['@/components/newaddressee/index'], resolve),
			meta:{
				title:'添加收货地址'
			}
		},
		{
			path: '/inside_home',
			name: 'inside_home',
			component: resolve => require(['@/components/inside_home/index'], resolve),
			meta:{
				title:'主页-内勤'
			}
		},
		{
			path: '/order_list',
			name: 'order_list',
			component: resolve => require(['@/components/order_list/index'], resolve),
			meta:{
				title:'订单审核'
			}
		},
		{
			path: '/details_audited',
			name: 'details_audited',
			component: resolve => require(['@/components/details_audited/index'], resolve),
			meta:{
				title:'订单详情'
			}
		},
		{
			path: '/reviewed',
			name: 'reviewed',
			component: resolve => require(['@/components/reviewed/index'], resolve),
			meta:{
				title:'审核订单'
			}
		},
		{
			path: '/submitto',
			name: 'submitto',
			component: resolve => require(['@/components/submitto/index'], resolve),
			meta:{
				title:'订单审核成功'
			}
		},
		{
			path: '/dakaLeaderLook',
			name: 'dakaLeaderLook',
			component: resolve => require(['@/components/dakaLeaderLook/index'], resolve),
			meta:{
				title:'外出人员记录'
			}
		},
		{
			path: '/workDayb',
			name: 'workDayb',
			component: resolve => require(['@/components/workDayb/index'], resolve),
			meta:{
				title:'工作日报'
			}
		},
		{
			path: '/mydaybDetail',
			name: 'mydaybDetail',
			component: resolve => require(['@/components/mydaybDetail/index'], resolve),
			meta:{
				title:'工作日报'
			}
		},
		{
			path: '/daybaoProManager',
			name: 'daybaoProManager',
			component: resolve => require(['@/components/daybaoProManager/index'], resolve),
			meta:{
				title:'工作日报'
			}
		},
		{
			path: '/daybaoLeader',
			name: 'daybaoLeader',
			component: resolve => require(['@/components/daybaoLeader/index'], resolve),
			meta:{
				title:'外出人员记录'
			}
		},
		{
			path: '/leader_home',
			name: 'leader_home',
			component: resolve => require(['@/components/leader_home/index'], resolve),
			meta:{
				title:'销售统计'
			}
		},
		{
			path: '/my',
			name: 'my',
			component: resolve => require(['@/components/my/index'], resolve),
			meta:{
				title:'我的-业务员'
			}
		},
		{
			path: '/mynews',
			name: 'mynews',
			component: resolve => require(['@/components/mynews/index'], resolve),
			meta:{
				title:'我的消息'
			}
		},
		{
			path: '/accounts_receivable',
			name: 'accounts_receivable',
			component: resolve => require(['@/components/accounts_receivable/index'], resolve),
			meta:{
				title:'我的应收账款'
			}
		},
		{
			path: '/sales_statistics',
			name: 'sales_statistics',
			component: resolve => require(['@/components/sales_statistics/index'], resolve),
			meta:{
				title:'销售统计'
			}
		},
		{
			path: '/customer_statistics',
			name: 'customer_statistics',
			component: resolve => require(['@/components/customer_statistics/index'], resolve),
			meta:{
				title:'客户统计'
			}
		},
		{
			path: '/takelistsucess',
			name: 'takelistsucess',
			component: resolve => require(['@/components/takelistsucess/index'], resolve),
			meta:{
				title:'提交订单成功'
			}
		},
		{
			path: '/register',
			name: 'register',
			component: resolve => require(['@/components/register/index'], resolve),
			meta: {
				keepAlive: true,
				title:'代客注册'
			}
		},
		{
			path: '/registernext',
			name: 'registernext',
			component: resolve => require(['@/components/registernext/index'], resolve),
			meta:{
				title:'代客注册'
			}
		},
		{
			path: '/registersre',
			name: 'registersre',
			component: resolve => require(['@/components/registersre/index'], resolve),
			meta:{
				title:'代客注册'
			}
		},
		{
			path: '/registersucess',
			name: 'registersucess',
			component: resolve => require(['@/components/registersucess/index'], resolve),
			meta:{
				title:'资料提交成功'
			}
		},
		{
			path: '/registermap',
			name: 'registermap',
			component: resolve => require(['@/components/registermap/index'], resolve),
			meta:{
				title:'代客注册'
			}
		},
		{
			path: '/translate',
			name: 'translate',
			component: resolve => require(['@/components/translate/index'], resolve),
			meta:{
				title:'工具'
			}
		},
		
		{
			path: '/translatepro',
			name: 'translatepro',
			component: resolve => require(['@/components/translatepro/index'], resolve),
			meta:{
				title:'外出打卡'
			}
		},
		{
			path: '/Pricequery',
			name: 'Pricequery',
			component: resolve => require(['@/components/Pricequery/index'], resolve),
			meta:{
				title:'价格查询'
			}
		},
		{
			path: '/receivable',
			name: 'receivable',
			component: resolve => require(['@/components/receivable/index'], resolve),
			meta:{
				title:'应收账款'
			}
		},
	]

})

// router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
//   if (to.meta.title) {//判断是否有标题
//     document.title = to.meta.title;
//     // console.log(document.title)
//   }
//   next()//执行进入路由，如果不写就不会进入目标页
// })


