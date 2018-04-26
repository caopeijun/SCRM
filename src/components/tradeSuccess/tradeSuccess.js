export default {
    name:"tradeSuccess",
    data(){
        return{
        	
        }
    },
    mounted:function(){
    	
    },
    methods:{
    		towriteMessage(){
    			this.$router.push('/writeMessage')
    		},
        tohomeSalesman(){
        	this.$router.push('/homeSalesman')
        }
    }
}