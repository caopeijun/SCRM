<template>
	<div class="inside_home">
		<div class="inside_top">
			<div class="threebox leftbox" @click="eventBtn(1)" :class="{changeColor:num == 1}">待处理</div>
			<div class="threebox centerbox" @click="eventBtn(2)" :class="{changeColor:num == 2}">已处理</div>
			<div class="threebox rightbox" @click="eventBtn(3)" :class="{changeColor:num == 3}">全部</div>
		</div>
		<div v-for="(i,index) in partys" :key="index" class="content clear" v-show="isShow==1">
			<div class="content_top">
				<span>售达方：{{i.name}}</span>
				<span class="top_right">{{i.state}}</span>
			</div>
			<div v-for="(item,index) in i.info" class="content_center clear"> 
				<div :class="index>0?'addline' :''">
					<div>
						<span>分类：{{item.name}}</span>
						<span class="content_num">牌号：{{item.num}}</span>
						<span class="content_money">¥ {{item.rmb}}</span>
					</div>
					<div>
						<span>产地：{{item.place}}</span>
						<span class="content_num">库别：{{item.depot}}</span>
						<span class="content_times">x{{item.times}}</span>
					</div>
					<div class="content_freight">运费：{{item.money}}</div>
				</div>
			</div>
			<div class="content_last clear">
				<span class="content_last_num">订单编号：{{i.num}}</span>
				<span class="content_times">合计：{{i.money}}元</span>
			</div>			
		</div>
		<div v-show="isShow==2" >
			<div v-for="(i,index) in partys2" :key="index" class="content clear" v-show="isShow==2">
			<div class="content_top">
				<span>售达方：{{i.name}}</span>
				<span class="top_right">{{i.state}}</span>
			</div>
			<div v-for="(item,index) in i.info" class="content_center clear"> 
				<div :class="index>0?'addline' :''">
					<div>
						<span>分类：{{item.name}}</span>
						<span class="content_num">牌号：{{item.num}}</span>
						<span class="content_money">¥ {{item.rmb}}</span>
					</div>
					<div>
						<span>产地：{{item.place}}</span>
						<span class="content_num">库别：{{item.depot}}</span>
						<span class="content_times">x{{item.times}}</span>
					</div>
					<div class="content_freight">运费：{{item.money}}</div>
				</div>
			</div>
			<div class="content_last clear">
				<span class="content_last_num">订单编号：{{i.num}}</span>
				<span class="content_times">合计：{{i.money}}元</span>
			</div>			
		</div>
		</div>
		<div v-show="isShow==3">
			<div v-for="(i,index) in partys3" :key="index" class="content clear" v-show="isShow==3">
			<div class="content_top">
				<span>售达方：{{i.name}}</span>
				<span class="top_right">{{i.state}}</span>
			</div>
			<div v-for="(item,index) in i.info" class="content_center clear"> 
				<div :class="index>0?'addline' :''">
					<div>
						<span>分类：{{item.name}}</span>
						<span class="content_num">牌号：{{item.num}}</span>
						<span class="content_money">¥ {{item.rmb}}</span>
					</div>
					<div>
						<span>产地：{{item.place}}</span>
						<span class="content_num">库别：{{item.depot}}</span>
						<span class="content_times">x{{item.times}}</span>
					</div>
					<div class="content_freight">运费：{{item.money}}</div>
				</div>
			</div>
			<div class="content_last clear">
				<span class="content_last_num">订单编号：{{i.num}}</span>
				<span class="content_times">合计：{{i.money}}元</span>
			</div>			
		</div>
		</div>
	</div>

</template>

<script>
	import { mapState, mapMutations, mapGetters } from 'vuex';
	import { Swipe, SwipeItem } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	export default {
		name: "Inside_home",
		data() {
			return {
				isShow:1,
				num:1,
				partys:[
					{name:'山东橡胶有限公司',
					    state:'待审核',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待审核',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		}],
					},					
				],
				partys2:[
					{name:'山东橡胶有限公司',
					    state:'已审核',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'已审核',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		}],
					},					
				],partys3:[
					{name:'山东橡胶有限公司',
					    state:'已审核',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待审核',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		}],
					},					
				],
			}
		},
		mounted: function() {

		},
		methods: {
			eventBtn(index){
				this.num = index;
				this.isShow = index;
			}
		},
	}
</script>

<style scoped="scoped">
	.clear:after{display:block;clear:both;content:"";visibility:hidden;height:0}
	.clear{zoom:1}
	.inside_home{
		font-size: 0.37rem;
	}
	.inside_top{
		margin: 0;
		padding: 0 0.2rem;
		width: 100%;
		height: 0.93rem;
		display: flex;
		justify-content: space-between;
		background: white;
		line-height: 0.93rem;
		box-sizing: border-box;
	}
	.threebox{

		/*width: 1rem;*/
	}
	.centerbox{
		text-align: center;
	}
	.rightbox{
		text-align: right;		
	}	
	.addline{
		border-top: 0.02rem dotted #CCCCCC;
	}
	.content{
		margin: 0 auto;
		background: white;
		margin-top: 0.26rem;
		padding: 0.26rem;
		color: #666;
	}
	.content_top{
		margin-bottom: 0.26rem;
	}
	.top_right{
		float: right;
		color:  #E35D40;
		font-size: 0.33rem;
	}
	.content_center{
		padding: 0.1rem 0.3rem;
		background: #F2F2F2;
		font-size: 0.33rem;
		line-height: 0.8rem;
	}
	.content_num{
		margin-left: 0.45rem;
	}
	.content_money{
		float: right;
		color: #E35D40;
	}
	.content_times{
		float: right;
	}
	.content_last{
		margin-top: 0.26rem;
	}
	.content_freight{
		float: right;
		color: #CCCCCC;
	}
	.content_last_num{
		font-size: 0.33rem;
	}
	.changeColor{
		color: #E35D40;
		border-bottom: 0.02rem solid #E35D40;		
	}
</style>