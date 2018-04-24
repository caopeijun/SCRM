<template>
	<div class="login">
		<div class="login-body">

			<img src="../../static/img/logo.jpeg" class="logl"/>
			<p class="logolp">化塑云商</p>

			<div class="login-bodyLog">
				<img src="../../static/img/log.png" />
				<input type="text" placeholder="请输入您的账户名" />
			</div>
			<div class="login-bodyPass">
				<img src="../../static/img/pass.png" />
				<input type="text" placeholder="请输入验证码" />
				<p>点击获取验证码</p>
			</div>

			<button class="login-button">登录</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {

			}
		},
		mounted: function() {

		},
		methods: {

		},
	}
</script>

<style scoped>
	
	.login-body {
		margin: 0 auto;
		text-align: center;
		margin-top: 1rem;
		font-size: 1rem;
		
	}
	.logl{
		width: 2rem;
		height: 2rem;
		margin-top: 2rem;
	}
	.logolp{
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.login-bodyLog {
		display: flex;
		justify-content: flex-start;
		width: 8rem;
		margin: 0 auto;
		border-bottom: 0.02rem solid #D2D2D2;
		margin-top: 3rem;
		height: 1.3rem;
	}
	
	.login-bodyLog img {
		height: 0.9rem;
		margin-top: 10px;
	}
	
	.login-bodyLog input {
		width: 5.9rem;
		line-height: 1.3rem;
		border: none;
		font-size: 0.34rem;
		margin-left: 0.27rem;
		outline: none;
		background: transparent;
	}
	
	.login-bodyPass {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 8rem;
		margin: 0 auto;
		border-bottom: 1px solid #D2D2D2;
		margin-top: 0.53rem;
	}
	
	.login-bodyPass img {
		height: 0.9rem;
	}
	
	.login-bodyPass input {
		width: 4.2rem;
		line-height: 1rem;
		border: none;
		font-size: 0.34rem;
		margin-left: 0.27rem;
		outline: none;
		background: transparent;
	}
	
	.login-bodyPass p {
		font-size: 0.34rem;
	}
	
	.login-button {
		width: 8rem;
		height: 1.3rem;
		border: none;
		font-size: 0.34rem;
		color: #FFF;
		background: #E35D40;
		border-radius: 0.1rem;
		margin-top: 1.3rem;
	}
	
	.picth {
		text-decoration: none;
		cursor: pointer;
		color: #FFF;
	}
</style>