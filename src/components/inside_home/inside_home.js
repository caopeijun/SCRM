import { mapState, mapMutations, mapGetters } from 'vuex';
	import { Swipe, SwipeItem } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	export default {
		name: "Inside_home",
		data() {
			return {
				isShow:1,
				num:1,
				partys:[
					{name:'山东橡胶有限公司',
					    state:'待审核',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待审核',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		}],
					},					
				],
				partys2:[
					{name:'山东橡胶有限公司',
					    state:'已审核',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'已审核',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		}],
					},					
				],partys3:[
					{name:'山东橡胶有限公司',
					    state:'已审核',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待审核',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		}],
					},					
				],
			}
		},
		mounted: function() {

		},
		methods: {
			eventBtn(index){
				this.num = index;
				this.isShow = index;
			},
			linkTo(index){
//				console.log(index)
				if(index > 1){
					this.$router.push({name:'order_list'})
				}else{
					this.$router.push({name:'reviewed'})
				}
	
			},
			linkTwo(index){
//				console.log(index)
				if(index > 1){
					this.$router.push({name:'order_list'})
				}else{
					this.$router.push({name:'details_audited'})
				}
			}
		},
	}