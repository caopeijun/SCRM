import { mapState,mapMutations,mapGetters  } from 'vuex';
import footer from '../footer'
export default {
  name:"homeSalesman",
  components:{
    "v-footer":footer,
  },
  data(){
    return{
    	chnum:0,
    	zt:'待审核',
    	intro:'待审核：等待内勤或领导审批',
    }
  },
  created(){
    dd.ready(function(){
        dd.biz.navigation.setTitle({
            title : '首页',//控制标题文本，空字符串表示显示默认文
        });
    })
  },
  methods:{
    todetail(){
    	if (this.chnum == 5){
    		this.$router.push('/orderDetails?chnum=0')
    	} else {
    		this.$router.push('/orderDetails?chnum='+this.chnum)
    	}
    	
    },
    cgNum(n){
    	this.chnum = n;
    	if (n == 0){
    		this.zt = '待审核';
    		this.intro = '待审核：等待内勤或领导审批';
    	} else if (n == 1){
    		this.zt = '待确认';
    		this.intro = '待确认：等待客户确认订单';
    	} else if (n == 2){
    		this.zt = '待付款';
    		this.intro = '待付款：等待客户付款';
    	} else if (n == 3){
    		this.zt = '待发货';
    		this.intro = '待发货：等待营销管理部出库发货';
    	} else if (n == 4){
    		this.zt = '待收货';
    		this.intro = '待收货：等待客户收货';
    	} else if (n == 5){
    		this.zt = '待审核';
    		this.intro = '';
    	}
    }
  },
}