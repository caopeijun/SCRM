<template>
	<div class="addressee">
		<div class="titler">
			<p class="back">
				<</p>
					<p class="title">选择收货地址</p>
		</div>
		<div class="contacts1" v-for="add in address">
			<div>
				<div class="contactsone1">
					<p>联系人：{{add.name}}</p>
					<p>联系电话：{{add.phone}}</p>
				</div>
				<div class="contactstwo1">
					<p>配送地址：{{add.place}}</p>
				</div>
			</div>
		</div>
		<div class="newaddressee">
			<button>添加新地址</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "addressee",
		data() {
			return {
				address: [{
						name: "章程",
						phone: "13444444444",
						place: "山东烟台龙口橡胶有限公司"
					},
					{
						name: "张嘉欣",
						phone: "12333332222",
						place: "山东烟台龙口橡胶有限公司"
					}
				]
			}
		},
		mounted: function() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.contacts1 {
		display: flex;
		justify-content: space-between;
		background: #FFFFFF;
		margin-bottom: 0.2rem;
	}
	
	.contactsone1 {
		display: flex;
		justify-content: space-between;
	}
	
	.contactsone1 p {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		line-height: 1rem;
		font-size: 0.37rem;
	}
	
	.contactstwo1 p {
		margin-left: 0.5rem;
		line-height: 1rem;
		font-size: 0.37rem;
	}
	
	.contactsbtn1 {
		width: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.37rem;
	}
	
	.titler {
		height: 1.2rem;
		background: #E35D40;
		align-items: center;
		text-align: center;
	}
	
	.title {
		font-size: 0.37rem;
		color: #FFFFFF;
		width: 4rem;
		text-align: center;
		line-height: 1.2rem;
		margin: 0 auto;
	}
	
	.back {
		color: #FFFFFF;
		font-size: 0.5rem;
		line-height: 1.1rem;
		margin-left: 0.5rem;
		float: left
	}
	
	.newaddressee {
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
	}
	
	.newaddressee button {
		background: #E35D40;
		border: none;
		color: #fff;
		width: 8rem;
		height: 1rem;
		margin-bottom: 0.5rem;
		border-radius: 1rem;
	}
</style>