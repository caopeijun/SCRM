export default {
		name: "addressee",
		data() {
			return {
				address: [{
						name: "章程",
						phone: "13444444444",
						place: "山东烟台龙口橡胶有限公司"
					},
					{
						name: "张嘉欣",
						phone: "12333332222",
						place: "山东烟台龙口橡胶有限公司"
					}
				]
			}
		},
		created(){
			dd.ready(function(){
				dd.biz.navigation.setTitle({
					title : '选择收货地址',//控制标题文本，空字符串表示显示默认文
				});
			});
		},
		methods: {
			// setaa(){
			// 	localStorage.setItem(dizhi,this.address);
			// }
			
		}
	}