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
    			var sty = this.$route.query.sty;
    			if (sty == 'wday') {
    				this.$router.push('/workDayb')
    			} else if (sty == 'dayProM') {
    				this.$router.push('/daybaoProManager')
    			}
    			
    		}
    }

  
}