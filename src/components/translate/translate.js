import footer from '../footer'
import { Indicator } from 'mint-ui';
export default {
		name: "translate",
		components:{
	    "v-footer":footer,
	  },
		data() {
			return {
				
			}
		},
		created(){
			dd.ready(function(){
				dd.biz.navigation.setTitle({
					title : '工具',//控制标题文本，空字符串表示显示默认文
				});
			})
		},
		// destory(){
		// 	dd.ready(function(){
		// 		dd.device.notification.showPreloader({
  //   				text: "使劲加载中..", //loading显示的字符，空表示不显示文字
  //   				showIcon: true, //是否显示icon，默认true。Android无此参数。
  //   				onSuccess : function(result) {
  //   					dd.device.notification.hidePreloader({
  //   						onSuccess : function(result) {
  //       					/*{}*/
  //   					},
  //   						onFail : function(err) {}
		// 				})
  //   				},
  //   				onFail : function(err) {}
		// 		})
		// 	})
		// },
		methods: {
			toclock(){
				this.$router.push({
					path:'./translatepro'
				})
			},
			toRibao(){
				if (this.$store.state.rout == 1) {
					this.$router.push('/daybaoLeader')
				} else if (this.$store.state.rout == 2 || this.$store.state.rout == 3) {
					this.$router.push('/workDayb')
				}
			},
			toworkDayb(){
				this.$router.push('/workDayb')
			},
			toprice(){
				this.$router.push('/Pricequery')
			},
			tosales(){
				this.$router.push('/sales_statistics')
			},
			tocustomer(){
				this.$router.push('/customer_statistics')
			},
			toaccounts(){
				this.$router.push('/accounts_receivable?from=translate')
			}
		},
		// created(){
		// 	Indicator.open({
  // 			text: '加载中...',
		// 	  spinnerType: 'fading-circle'
		// 	});
		// }
	}