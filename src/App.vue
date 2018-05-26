<template>
	<div id="app">
	<keep-alive>
		<router-view v-if="$route.meta.keepAlive"></router-view>
	</keep-alive>	
	<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	import rem from './rem/rem.js'
	import takelist from './components/takelist'
	export default {
		name: 'app',
		components: {
		}
	}
</script>


<style>
	@import "./font/font.css";
	body {
		padding-bottom: 1.56rem;
		font-family: '微软雅黑';
		background: #F4F4F4;
		margin: 0;
		padding: 0;
	}
	* {
		margin: 0;
		padding: 0;
	}
	body,html {
		height: 100%;
	}
	#app{
		height: 100%;
	}
</style>
