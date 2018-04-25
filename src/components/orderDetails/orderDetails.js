export default {
    name:"orderDetails",
    data(){
        return{
        	sw:false,
        	gods:0,
        	chnum:0,
        	zt:'待审核',
        }
    },
    created(){
    	this.chnum = this.$route.query.chnum;
    	if (this.chnum == 0){
    		this.zt = '待审核';
    	} else if (this.chnum == 1){
    		this.zt = '待确认';
    	} else if (this.chnum == 2){
    		this.zt = '待付款';
    	} else if (this.chnum == 3){
    		this.zt = '待发货';
    	} else if (this.chnum == 4){
    		this.zt = '待收货';
    	} else if (this.chnum == 5){
    		this.zt = '全部';
    	}
    },
    mounted:function(){
    	
    },
    methods:{
        tohomeSalesman(){
        	this.$router.push('/homeSalesman')
        },
        openDiv(){
        	this.sw = true;
        },
        closeDiv(){
        	this.sw = false;
        },
        towriteMessage(){
        	this.$router.push('/writeMessage')
        },
        chgods(n){
        	this.gods = n
        }
    }

  
}