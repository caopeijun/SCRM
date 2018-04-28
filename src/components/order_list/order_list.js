export default {
		name: 'Order_list',
		data() {
			return {
				
				partys:[
					{name:'山东橡胶有限公司',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
					    	state:1,
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
						    state:0,
				 	 	}]
					},					
				],
			}
		},
		created(){
			
		},
		methods:{
			linkTo(index){
				if(index == 1){
					this.$router.push({name:'details_audited'})
				}else{
					this.$router.push({name:'reviewed'})
				}
			},
			submitTo(){
				this.$router.push({name:'submitto'})
			}
		},
	
	}