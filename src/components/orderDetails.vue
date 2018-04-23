<template>
  <div class="orderDetails">
  	<!--红色头部-->
		<div class="ord_det">
			<div class="ord_det1" @click="tohomeSalesman()"><img src="../../static/img/goback.png" /></div>
			<div class="ord_det11">订单详情</div>
		</div>
		<!--订单状态-->
		<div class="ord_det22">
			<div class="ord_det23"></div>
			<div class="ord_det24">订单状态：<span>待审核</span></div>
			<div class="ord_det25"></div>
		</div>
		<!--订单内容-->
		<!--订单名称-->
		<div class="ord_det12">
			<ul>
				<li class="ord_det13">PVC123</li>
				<li>T30S</li>
			</ul>
		</div>
		<!--订单审核状态-->
		<div class="ord_det14">
			<div class="ord_det15">审核状态：已审核</div>
			<div class="ord_det16">业务类型：标准订单</div>
			<div class="ord_det16">售达方：山东橡胶有限公司</div>

			<div class="ord_det15">剩余信用额度：300万，应收账款：100万</div>
			<div class="ord_det16">付款方式：款到发货</div>
			<div class="ord_det16">送货方式：配送</div>
			<div style="height: 0.6rem;"></div>
		</div>
		<!--详细信息/联系人/联系电话-->
		<div class="ord_det17">
			<div class="ord_det16">
				联系人：张三<span>联系电话：13444444444</span>
			</div>
			<div class="ord_det16">配送地址：北京朝阳区望京宏泰大街</div>
			<div class="ord_det18"></div>
			<div class="ord_det16">
				<div class="ord_det19">牌号：PVC23</div>
				<div class="ord_det19">产地：盘锦</div>
				<div class="ord_det19">库别：烟台库</div>
			</div>
			<div class="ord_det16">
				<div class="ord_det19">吨位：1.5</div>
				<div class="ord_det19">单价：10650元</div>
				<div class="ord_det19">运费：230</div>
			</div>
			<div class="ord_det26">
				合计：&nbsp;￥16320.00
			</div>
		</div>
		<!--开票公司-->
		<div class="ord_det2">
			<div class="ord_det16">开票公司：山东橡胶有限公司</div>
			<div class="ord_det16">统一社会信用代码： F484848448BIUBIUBIU</div>
			<div class="ord_det16">订单备注：无</div>
			<div style="height: 0.6rem;"></div>
		</div>
		<!--查看审核流程-->
		<div class="ord_det21">查看审核流程</div>
	</div>
</template>

<script>
export default {
    name:"orderDetails",
    data(){
        return{
        	
        }
    },
    mounted:function(){
    	
    },
    methods:{
        tohomeSalesman(){
        	this.$router.push('/homeSalesman')
        }
    }

  
}
</script>


<style>
	*{
		margin: 0;padding: 0;
	}
	.orderDetails{
		font-size: 0.33rem;
	}
	.ord_det{
		height: 1.33rem;background: #E35D40;color: #FFF;
	}
	.ord_det1{
		float: left;width: 1.12rem;font-weight: bold;text-align: center;margin-top: 0.5rem;
	}
	.ord_det11{
		float: left;width: 7.86rem;text-align: center;line-height: 1.33rem;font-size: 0.37rem;
	}
	
	.ord_det12{
      position: relative;
      /*margin-top: 1.52rem;*/
      width: 100%;
      text-align: center;
      background: #fff;
     	height: 1.33rem;
      font-size: 0.37rem;
      color: #333;
    }
    .ord_det12 ul li{
    	float: left;
    	margin-left: 0.6rem;margin-right: 0.3rem;
    	height: 1rem;line-height: 0.85rem;margin-top: 0.3rem;
    	list-style: none;
    }
  .ord_det13{
		border-bottom: 0.03rem solid #E35D40;color: #E35D40;
	}
	.ord_det14{
		margin-top: 0.18rem;background: #FFF;overflow: hidden;
	}
	.ord_det15{
		height: 0.34rem;line-height: 0.34rem;margin-top: 0.4rem;color: #E35D40;margin-left: 0.6rem;
	}
	.ord_det16{
		height: 0.38rem;line-height: 0.38rem;margin-top: 0.4rem;margin-left: 0.6rem;font-size: 0.37rem;color: #333;
		
	}
	.ord_det16 span{
		margin-left: 1rem;
	}
	.ord_det17{
		margin-top: 0.18rem;background: #FFF8F7;overflow: hidden;
		
	}
	.ord_det18{
		height: 0.4rem;width: 8.77rem;margin: 0 auto;border-bottom: 0.03rem dashed #BBB;
		
	}
	.ord_det19{
		float: left;width: 2.9rem;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;
	}
	.ord_det2{
		margin-top: 0.18rem;background: #FFF;overflow: hidden;
		
	}
	.ord_det21{
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      background: #E35D40;
      z-index: 100;
      height: 1rem;
      line-height: 1rem;
      color: #FFF;
      font-size: 0.37rem;
	}
	.ord_det22{
		height: 1rem;line-height: 1rem;
	}
	.ord_det23{
		float: left;width: 2.21rem;height: 0.49rem;border-bottom: 0.03rem solid #BBB;margin-left: 0.69rem;
	}
	.ord_det24{
		width: 3.87rem;text-align: center;font-size: 0.37rem;float: left;
	}
	.ord_det24 span{
		color: #E51C23
	}
	.ord_det25{
		float: left;width: 2.21rem;height: 0.49rem;border-bottom: 0.03rem solid #BBB;
	}
	.ord_det26{
		height: 1.33rem;line-height: 1.33rem;font-size: 0.43rem;color: #E51C23;margin-left: 0.6rem;
	}
</style>
