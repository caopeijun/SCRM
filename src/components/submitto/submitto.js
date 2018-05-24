export default {
		name: 'submitto',
		data() {
			return {
				
			}
		},
		created(){
			dd.ready(function(){
		dd.biz.navigation.setTitle({
			title : '订单审核成功',//控制标题文本，空字符串表示显示默认文
		});
	})
		},
		methods:{
			
		},
	}