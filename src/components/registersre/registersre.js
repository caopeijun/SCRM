export default {
		name: 'registersre',
		data() {
			return {
				
			}
		},
		created(){
			dd.ready(function(){
    dd.biz.navigation.setTitle({
      title : '代客注册',//控制标题文本，空字符串表示显示默认文
    });
  })
		},
		methods:{
			gonext(){
				this.$router.push({
					path: '/registersucess'
				});
			}
		}
	}