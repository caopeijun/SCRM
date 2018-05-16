import { MessageBox } from 'mint-ui';
export default {
	name: 'register',
	data() {
		return {
			company: "",
			email: "",
			money: "",
			okimg:"",
			show:false,
		}
	},
	methods: {
		gonext() {
			var cemail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
			var cmoney = /^([1-9]\d*|[0]{1,1})$/;
			if(this.okimg =="" ){
				MessageBox('提示','请放入公司logo')
			}else if(this.company == '') {
				document.getElementById('company').focus();
			} else if(this.email == '' || !cemail.test(this.email)) {
				document.getElementById('email').focus();
			} else if(this.money == '' || !cmoney.test(this.money)) {
				document.getElementById('money').focus();
			} else {
				this.$router.push({
					path: '/registernext'
				});
			}
		},
		gotomap() {
			this.$router.push({
				path: '/registermap'
			});
		},
		choo(obj){
			var cho = document.getElementById('in');
			cho.click();
		},
		upload:function(e){
			var that = this;
			var selectedFile = $('#in').get(0).files[0];
			console.log(selectedFile)
			var reader = new FileReader();
	        reader.onload = function(e) {
	            that.okimg = e.srcElement.result;
	        }
	        reader.readAsDataURL(selectedFile);
		},
		bigimg(){
			if(this.okimg != ''){
				this.show = true;
			}
		},
		bigimgback(){
			this.show = false;
		}
	}
}