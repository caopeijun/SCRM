export default {
    name:"writeMessage",
    
    data(){
        return{
					
        }
    },
    created(){
        dd.ready(function(){
        dd.biz.navigation.setTitle({
            title : '工作日报',//控制标题文本，空字符串表示显示默认文
        });
    })
    },
    mounted:function(){
    	
    },
    methods:{
    	
    		toworkDayb(){
//  			var sty = this.$route.query.sty;
    			if ($store.state.rout == 1) {
    				this.$router.push('/daybaoProManager')
    			} else if ($store.state.rout == 2) {
    				this.$router.push('/workDayb')
    			}
    			
    		}
    }

  
}