export default {
    name:"tradeSuccess",
    data(){
        return{
        	
        }
    },
    created(){
        dd.ready(function(){
        dd.biz.navigation.setTitle({
            title : '交易成功',//控制标题文本，空字符串表示显示默认文
        });
    })
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