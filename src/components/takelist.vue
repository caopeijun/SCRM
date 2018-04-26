<template>
	<div class="takelist">
		<router-link to="/takelistmessage" class="picth">
			<div class="takelistregisterup">
			<div>
				<img src="../../static/img/takelist.png" />
				<p>代客下单</p>
			</div>
		</div>
		</router-link>
		<div class="takelistregister">
			<div>
				<img src="../../static/img/takeregister.png" />
				<p>代客注册</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "takelist",
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
	.takelistregisterup {
		width: 100%;
		height: 6rem;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.takelistregister {
		margin-top: 0.6rem;
		width: 100%;
		height: 6rem;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	p{
		text-align: center;
		margin-top: 0.4rem;
		font-size: 0.5rem;
	}
	.picth{
		text-decoration: none;
		color: black;
		cursor: pointer;
	}
</style>