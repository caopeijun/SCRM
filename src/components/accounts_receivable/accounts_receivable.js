export default {
  name:"accounts_receivable",
 
  data(){
    return{
    	partys:[
					{name:'山东橡胶有限公司',
					    state:0,
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
					 	state:1,
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
    }
  },
  mounted:function(){
  	
  },
  methods:{
  	goback(){
  		this.$router.push({
				path: '/translate'
			});
  	}
  },
}