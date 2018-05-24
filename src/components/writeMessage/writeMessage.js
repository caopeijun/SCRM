export default {
    name:"writeMessage",
    data(){
        return{
        	wmsg:false,
        	wm:false,
        	msure:false,
        	goods:[0],
        }
    },
    created(){
    	this.goods.index = 0;
        dd.ready(function(){
        dd.biz.navigation.setTitle({
            title : '填写收货地址',//控制标题文本，空字符串表示显示默认文
        });
    })
    },
    mounted:function(){
    	
    },
    methods:{
    		add() {
          this.goods.push({
              value: null
          })
        },
        tohomeSalesman(){
        	this.$router.push('/homeSalesman')
        },
        openXmsg(){
        	this.wm = true;
        },
        closeXmsg(){
        	this.wm = false;
        },
        toorderDetails(){
        	this.$router.push('/orderDetails?chnum=4')
        },
        submitmsg(){
        	this.wmsg = true;
        	var that = this;
        	setTimeout(
        		function(){
        			that.wmsg = false
        		}
        	,3000)
        },
        masu(){
        	this.msure = true
        },
        cloms(){
        	this.msure = false
        },
        totradeSuccess(){
        	this.$router.push('/tradeSuccess')
        }
    }

  
}