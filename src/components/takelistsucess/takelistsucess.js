export default {
	name: 'takelistsucess',
	data() {
		return {

		}
	},
	created(){
		dd.ready(function(){
		dd.biz.navigation.setTitle({
			title : '提交订单成功',//控制标题文本，空字符串表示显示默认文
		});
	})
	},
	methods:{
		backtohomeSalesman(){
			this.$router.push("/homeSalesman")
		}
	}
}