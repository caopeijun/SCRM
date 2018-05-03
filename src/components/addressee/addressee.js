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
		create(){
			this.setaa();
		},
		methods: {
			setaa(){
				localStorage.setItem(dizhi,this.address);
			}
		}
	}