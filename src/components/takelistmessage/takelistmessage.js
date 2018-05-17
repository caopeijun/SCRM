export default {
	name: "takelistmessage",
	data() {
		return {
			sings: [1],
			zheng: "",
			dynamicValidateForm: {
				domains: [{
					value: '',
					value1: '',
					value2: '',
					value3: '',
					value4: '',
				}],
				email: ''
			},
			chanpins: [],
			thanone: false,
			Addressee: {
				name: "章程",
				phone: "13444444444",
				place: "山东烟台龙口橡胶有限公司"
			},
			Addressee1: []
		}
	},
	create() {
		this.getaa();
	},
	methods: {
		addMode() {
			this.dynamicValidateForm.domains.push({
				value: '',
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				value5: ''
			});
			stringify:""
			localStorage.name = 123;
		},
		toaddressee(index) {
			this.$router.push({
				path: '/addressee'
			});
		},
		submits() {
			var vm = document.getElementById("shouda");
			var va = document.getElementsByClassName("choice");
//			const vc = va.getElementsByTagName("input")
			console.log(va);
			for(var i = 0; i < this.dynamicValidateForm.domains.length; i++) {
				console.log(this.dynamicValidateForm.domains[i].value)
				console.log(this.dynamicValidateForm.domains[i].value1)
				console.log(this.dynamicValidateForm.domains[i].value2)
				console.log(this.dynamicValidateForm.domains[i].value3)
				console.log(this.dynamicValidateForm.domains[i].value4)
				if(this.zheng == '') {
					vm.focus();
				}else
				if(this.dynamicValidateForm.domains[i].value == '' ){
					va[i].focus();
				}
				else 
				{
					this.$router.push({
						path: '/takelistsucess'
					});
				}
			}
		},
		getaa() {
			var str = localStorage.getItem(dizhi);
			console.log(str)
		}
	}
}