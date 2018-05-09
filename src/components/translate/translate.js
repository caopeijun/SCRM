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
			toRibao(){
				if (this.$store.state.rout == 1) {
					this.$router.push('/daybaoLeader')
				} else if (this.$store.state.rout == 2 || this.$store.state.rout == 3) {
					this.$router.push('/workDayb')
				}
			}
		}
	}