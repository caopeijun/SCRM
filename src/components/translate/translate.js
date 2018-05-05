import footer from '../footer'
export default {
		name: "translate",
		components:{
	    "v-footer":footer,
	  },
		data() {
			return {
				
			}
		},
		methods: {
			toclock(){
				this.$router.push({
					path:'./translateclock'
				})
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
				this.$router.push('/accounts_receivable')
			}
		}
	}