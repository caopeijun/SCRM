<template>
	<div id="app">
		<router-view></router-view>

	</div>
</template>

<script>
	import rem from './rem/rem.js'

	import footer from './components/footer'
	import takelist from './components/takelist'
	export default {
		name: 'app',
		components: {
			"v-footer": footer,
			"tlist": takelist
		}
	}
</script>

<style>
	/* @import  "//at.alicdn.com/t/font_337147_rz7i21pv98fzjjor.css"; */
	
	@import "./font/font.css";
	body {
		padding-bottom: 1.56rem;
		font-family: '微软雅黑';
		background: #F4F4F4;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	body {
		margin: 0;
		padding: 0;
		background: #F2F2F2;
	}
</style>