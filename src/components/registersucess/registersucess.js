export default {
		name: 'registersucess',
		data() {
			return {
				
			}
		},
		created(){
			dd.ready(function(){
    dd.biz.navigation.setTitle({
      title : '资料提交成功',//控制标题文本，空字符串表示显示默认文
    });
  })
		},
		methods:{
			backtotakelist(){
				this.$router.push("/takelist")
			}
		}
	}