import footer from '../footer'
export default {
	name: "takelist",
	components:{
    "v-footer":footer,
  },
	data() {
		return {

		}
	},
	created(){
		dd.ready(function(){
		dd.biz.navigation.setTitle({
			title : '客户',//控制标题文本，空字符串表示显示默认文
		});
	})
	},
	methods: {

	}
}