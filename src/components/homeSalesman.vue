<template>
  <div class="homeSalesman">
  	<!--搜索框-->
  	<div class="hom_sam">
  		<div class="hom_sam1">
  			<input type="text" placeholder="请输入公司名称或订单编号" />
  			<img src="../../static/img/searchButtom.png" />
  		</div>
  	</div>
  	<div class="hom_sam11"></div>
    <v-navbar></v-navbar>
    <div class="hom_sam12">待审核：等待内勤或领导审批</div>
    <!--待审核内容-->
    <div class="hom_sam13">
    	<div @click="todetail()">
	    	<!--售达方-->
	   		<div class="hom_sam14">
	   			<div class="hom_sam15">
	   				售达方：山东橡胶有限公司
	   			</div>
	   			<div class="hom_sam16">款到发货</div>
	   			<div class="hom_sam17">待审核</div>
	   		</div>
	   		<!--灰色部分/货物信息-->
	   		<div class="hom_sam18">
	   			<!--第一行-->
	   			<div class="hom_sam23">
	   				<div class="hom_sam19">
		   				分类：拉丝<span class="hom_sam2">牌号：T30S</span>
		   			</div>
		   			<div class="hom_sam21">￥10650</div>
	   			</div>
		   		<!--第二行-->
	   			<div class="hom_sam24">
	   				<div class="hom_sam19">
		   				产地：盘锦<span class="hom_sam2">库别：烟台库</span>
		   			</div>
		   			<div class="hom_sam22">x1.5吨</div>
	   			</div>
	   			<!--第二行-->
	   			<div class="hom_sam24">
	   				<div class="hom_sam19"style="color: #E35D40;">
		   				审核未通过：销售单价过低
		   			</div>
		   			<div class="hom_sam22"style="color: #CCC;">运费：230</div>
	   			</div>	
	   			<div class="hom_sam25"></div>
	   		</div>
	   		<!--订单编号&合计-->
	   		<div class="hom_sam26">
	   			<div class="hom_sam27">订单编号：DN11111111111111</div>
	   			<div class="hom_sam28">合计：15975元</div>
	   		</div>
	   	</div>
    </div>
    <v-footer></v-footer>
	</div>
    
</template>

<script>
import { mapState,mapMutations,mapGetters  } from 'vuex';
import navbar from './navbar'
import footer from './footer'
export default {
  name:"homeSalesman",
  components:{
    "v-navbar":navbar,
    "v-footer":footer,
  },
  data(){
    return{
    	
    }
  },
  mounted:function(){
  	
  },
  methods:{
    todetail(){
    	this.$router.push('/orderDetails')
    }
  },
}
</script>

<style>
	*{
		margin: 0;padding: 0;
	}
  .homeSalesman{
  	font-size: 0.33rem;color: #333;
  }
  .hom_sam{
  	width: 100%;height: 1.2rem;position: fixed;top: 0;background: #FFF;
  }
  .hom_sam1{
  	width: 7.04rem;height: 0.67rem;border: 0.02rem #BBB solid;margin: 0 auto;margin-top: 0.24rem;border-radius: 0.33rem;z-index: 200;overflow: hidden;
  }
  .hom_sam1 input{
  	margin-left: 0.93rem;width: 5.33rem;outline: none;border: none;margin-top: 0.14rem;float: left;font-size: 0.33rem;
  }
  .hom_sam1 img{
  	margin-top: 0.05rem;float: left;
  }
  .hom_sam11{
  	height: 0.27rem;background: #F2F2F2;margin-top: 1.2rem;
  }
  .hom_sam12{
  	height: 1rem;background: #F2F2F2;line-height: 1rem;color: #B3B3B3;text-indent:0.27rem;
  }
  .hom_sam13{
  	overflow: hidden;width: 100%;background: #FFF;color: #666;
  }
  .hom_sam14{
  	height: 1.39rem;
  }
  .hom_sam15{
  	margin-top: 0.53rem;margin-left: 0.24rem;font-size: 0.37rem;float: left;
  }
  .hom_sam16{
  	margin-top: 0.53rem;color: #F25B5B;font-weight: bold;font-size: 0.39rem;text-indent: 0.1rem;font-style: oblique;float: left;
  }
  .hom_sam17{
  	margin-top: 0.53rem;float: right;color: #E35D40;font-size: 0.32rem;margin-right: 0.24rem;
  }
  .hom_sam18{
  	width: 9.55rem;margin: 0 auto;background: #F2F2F2;overflow: hidden;
  }
  .hom_sam19{
  	width: 5.87rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin-left: 0.27rem;height: 0.34rem;line-height: 0.34rem;float: left;
  }
  .hom_sam2{
  	margin-left: 0.3rem;
  }
  .hom_sam21{
  	float: right;color: #E35D40;width: 2.93rem;text-align: right;margin-right: 0.27rem;
  }
  .hom_sam22{
  	float: right;width: 2.93rem;text-align: right;margin-right: 0.27rem;
  }
  .hom_sam23{
  	margin-top: 0.27rem;overflow: hidden;
  }
  .hom_sam24{
  	margin-top: 0.43rem;overflow: hidden;
  }
  .hom_sam25{
  	height: 0.27rem;
  }
  .hom_sam26{
  	height: 1rem;line-height: 1rem;
  }
  .hom_sam27{
  	float: left;margin-left: 0.24rem;width: 4.9rem;
  }
  .hom_sam28{
  	float: right;margin-right: 0.24rem;font-size: 0.37rem;color: #333;
  }
</style>

