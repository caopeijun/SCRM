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
			}
		}
	}