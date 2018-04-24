<template>
	<div class="takelistmessage">
		<div class="titler">
			<p class="back">
				<</p>
					<p class="title">代客下单</p>
		</div>
		<div class="businesstype">
			<span>业务类型</span>
			<select class="busselect">
				<option>标准订单</option>
				<option>标准退货订单</option>
				<option>样料订单</option>
			</select>
		</div>
		<div class="saleparty">
			<div class="salepartyup">
				<span>售达方</span>
				<p>请选择售达方名称</p>
			</div>
			<div class="salepartydown">
				<p>剩余信用额度：300万元，应收账款：100万元</p>
			</div>
		</div>
		<div class="businesstype">
			<span>付款方式</span>
			<select class="busselect">
				<option>款到发货</option>
				<option>货到付款</option>
			</select>
		</div>
		<div class="deliverymode">
			<div class="delivert"><span>送货方式</span></div>
			<div class="delivertul">
				<ul class="dmode">
					<li>
						<input type="radio" name="company" value="送到：公司承担运费" checked/><span>送到：公司承担运费</span>
					</li>
					<li>
						<input type="radio" name="company" value="送到：买方承担运费" /><span>送到：买方承担运费</span>
					</li>
					<li>
						<input type="radio" name="company" value="自提：买方承担运费" /><span>自提：买方承担运费</span>
					</li>
				</ul>
			</div>
		</div>
		<router-link to="/addressee" class="picth">
			<div class="contacts">
				<div>
					<div class="contactsone">
						<p>联系人：{{Addressee.name}}</p>
						<p>联系电话：{{Addressee.phone}}</p>
					</div>
					<div class="contactstwo">
						<p>配送地址：{{Addressee.place}}</p>
					</div>
				</div>
				<div class="contactsbtn">
					<p>></p>
				</div>
			</div>
		</router-link>
		<div v-for="(sing,index) in sings" class="martop">
			<div class="choice">
				<span>牌号</span>
				<input type="text" placeholder="请输入牌号" dir="rtl" />
			</div>
			<div class="choice">
				<span>产地</span>
				<input type="text" placeholder="请输入产地" dir="rtl" />
			</div>
			<div class="choice">
				<span>库别</span>
				<input type="text" placeholder="请输入库别" dir="rtl" />
			</div>
			<div class="choice">
				<span>吨位</span>
				<input type="text" placeholder="请输入产品吨位" dir="rtl" />
			</div>
			<div class="choice">
				<span>单价</span>
				<input type="text" placeholder="请输入单价" dir="rtl" />
			</div>
			<div class="choice">
				<span>运费</span>
				<input type="text" placeholder="请输入运费价格" dir="rtl" />
			</div>
			<div class="alone" v-show="index>0?'true':'false'">
				<button>该产品单独配送</button>
			</div>
		</div>

		<div class="allmoney">
			合计：￥40000000.00
		</div>
		<div class="addmode" @click="addMode(1)">
			<img src="../../static/img/add.png" />添加产品
		</div>
		<div class="invoice">
			<div class="invoicemain">
				<p>开票信息</p>
				<span>售达方选择完成后自动显示信息</span>
			</div>
			<div class="invoicemainlo">
				<span>统一信用社会代码</span>
			</div>
			<div class="invoicemain">
				<p>开票日期</p>
				<span>请选择</span>
			</div>
			<div class="invoicemain">
				<p>订单备注</p>
				<span>请输入订单备注</span>
			</div>
		</div>
		<div class="submission">
			提交订单
		</div>
	</div>
</template>

<script>
	export default {
		name: "takelistmessage",
		data() {
			return {
				sings: [1],
				thanone: false,
				Addressee: {
					name: "章程",
					phone: "13444444444",
					place: "山东烟台龙口橡胶有限公司"
				}
			}
		},
		mounted: function() {

		},
		methods: {
			addMode(val) {
				this.sings.push(val)
			}
		}
	}
</script>

<style scoped>
	.titler {
		height: 1.2rem;
		background: #E35D40;
		align-items: center;
		text-align: center;
	}
	
	.back {
		color: #FFFFFF;
		font-size: 0.5rem;
		line-height: 1.1rem;
		margin-left: 0.5rem;
		float: left
	}
	
	.title {
		font-size: 0.37rem;
		color: #FFFFFF;
		width: 4rem;
		text-align: center;
		line-height: 1.2rem;
		margin: 0 auto;
	}
	
	.businesstype {
		display: flex;
		justify-content: space-between;
		background: #FFF;
		align-items: center;
		height: 1REM;
		margin-bottom: 0.1rem;
	}
	
	.businesstype span {
		margin-left: 0.5rem;
		font-size: 0.37rem;
	}
	
	.busselect {
		margin-right: 0.5rem;
		font-size: 0.37rem;
		border: none;
		outline: none;
		margin-top: -0.13rem;
		width: 2.8rem;
	}
	
	.busselect option {
		border: 1px solid blue;
	}
	
	.saleparty {
		background: #FFFFFF;
		line-height: 1rem;
		margin-bottom: 0.1rem;
	}
	
	.salepartyup {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.salepartyup span {
		margin-left: 0.5rem;
		font-size: 0.37rem;
	}
	
	.salepartyup p {
		margin-right: 0.5rem;
		font-size: 0.37rem;
		color: #9E9E9E;
	}
	
	.salepartydown {
		line-height: 1rem;
		display: flex;
		justify-content: flex-end;
	}
	
	.salepartydown p {
		margin-right: 0.5rem;
		color: #E35D40;
	}
	
	.deliverymode {
		display: flex;
		justify-content: flex-start;
		background: #FFFFFF;
		height: 2.13rem;
		margin-bottom: 0.1rem;
	}
	
	.delivert {
		width: 4rem;
	}
	
	.delivert span {
		line-height: 0.9rem;
		font-size: 0.37rem;
		margin-left: 0.5rem;
	}
	
	.delivertul {
		display: flex;
		align-content: center;
		height: 0.5rem;
	}
	
	.dmode {
		list-style: none;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	
	.dmode li {
		margin-right: 0.2rem;
		margin-top: 0.2rem;
		display: flex;
		align-items: center;
	}
	
	.contacts {
		display: flex;
		justify-content: space-between;
		background: #FFFFFF;
		margin-bottom: 0.2rem;
	}
	
	.contactsone {
		display: flex;
		justify-content: space-between;
	}
	
	.contactsone p {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		line-height: 1rem;
		font-size: 0.37rem;
	}
	
	.contactstwo p {
		margin-left: 0.5rem;
		line-height: 1rem;
		font-size: 0.37rem;
	}
	
	.contactsbtn {
		width: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.37rem;
	}
	
	.martop {
		margin-top: 0.2rem;
	}
	
	.choice {
		display: flex;
		justify-content: space-between;
		line-height: 1rem;
		background: #FFFFFF;
		margin-bottom: 0.04rem;
	}
	
	.choice span {
		margin-left: 0.5rem;
		font-size: 0.37rem;
	}
	
	.choice input {
		border: none;
		outline: none;
		margin-right: 0.5rem;
	}
	
	.alone {
		line-height: 1.5rem;
		background: #fff;
		text-align: center;
	}
	
	.alone button {
		border: 0.02rem solid #E35D40;
		background: #fff;
		width: 8.5rem;
		height: 0.8rem;
		color: #E35D40;
		border-radius: 0.15rem;
	}
	
	.allmoney {
		text-align: right;
		color: #E35D40;
		font-size: 0.37rem;
		margin-right: 0.5rem;
		line-height: 1rem;
	}
	
	.addmode {
		background: #FFFFFF;
		line-height: 1.3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.37rem;
		margin-bottom: 0.2rem;
	}
	
	.addmode img {
		margin-right: 0.3rem;
	}
	
	.invoice {
		background: #FFFFFF;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	
	.invoicemain {
		display: flex;
		justify-content: space-between;
		line-height: 1rem;
	}
	
	.invoicemain p {
		margin-left: 0.5rem;
		font-size: 0.37rem;
	}
	
	.invoicemain span {
		margin-right: 0.5rem;
		font-size: 0.37rem;
		color: #888888;
	}
	
	.invoicemainlo {
		line-height: 1rem;
		text-align: right;
	}
	
	.invoicemainlo span {
		margin-right: 0.5rem;
		font-size: 0.37rem;
		color: #888888;
	}
	
	.submission {
		line-height: 1.4rem;
		background: #E35D40;
		color: #FFF;
		text-align: center;
		font-size: 0.37rem;
	}
	.picth{
		text-decoration: none;
		color: black;
		cursor: pointer;
	}
</style>