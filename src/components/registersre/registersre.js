export default {
		name: 'registersre',
		data() {
			return {
				
			}
		},
		methods:{
			gonext(){
				this.$router.push({
					path: '/registersucess'
				});
			}
		}
	}