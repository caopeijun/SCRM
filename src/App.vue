<template>
	<div id="app">
		<router-view></router-view>

	</div>
</template>

<script>
	import rem from './rem/rem.js'
	import takelist from './components/takelist'
	export default {
		name: 'app',
		components: {
			"tlist": takelist
		}
	}
</script>

<style>
	@import "./font/font.css";
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
