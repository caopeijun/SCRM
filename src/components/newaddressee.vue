<template>
	<div class="addressee">
		<div class="titler">
			<p class="back"><</p>
			<p class="title">添加收货地址</p>
			<p class="saveadd">保存</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "addressee",
		data() {
			return {

			}
		},
		mounted: function() {

		},
		methods: {

		}
	}
</script>
<style scoped>
	.titler {
		height: 1.2rem;
		background: #E35D40;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.title {
		font-size: 0.37rem;
		color: #FFFFFF;
		width: 4rem;
		line-height: 1.2rem;
		margin: 0 auto;
		text-align: center;
	}
	
	.back {
		color: #FFFFFF;
		font-size: 0.5rem;
		line-height: 1.1rem;
		margin-left: 0.5rem;
		
	}
	.saveadd{
		
		margin-right: 0.5rem;
		color: #FFF;
		font-size: 0.37rem;
		line-height: 1.1rem;
	}
</style>