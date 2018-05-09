export default {
    name:"writeMessage",
    
    data(){
        return{
					
        }
    },
    created(){

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