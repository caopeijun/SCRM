import { MessageBox } from 'mint-ui';
export default {
	name: 'registernext',
	data() {
		return {
			bechose: 1,
			mod: "",
			mod1: "",
			mod2: "",
			mod3: "",
			mod4: "",
			mod5: "",
			tupian: "",
			tupian1: "",
			tupian3: "",
			tupian4: "",
			show:0
		}
	},
	methods: {
		wbecho(val) {
			this.bechose = val;
		},
		choo(obj) {
			var chos = document.getElementById('in1');
			chos.click();
		},
		uploadimg: function(e) {
			var that = this;
			var selectedFile = $('#in1').get(0).files[0]
			var reader = new FileReader();
			reader.onload = function(e) {
				that.tupian = e.srcElement.result;
			}
			reader.readAsDataURL(selectedFile);

		},
		choo1(obj) {
			var chos = document.getElementById('in2');
			chos.click();
		},
		uploadimg1: function(e) {
			var that = this;
			var selectedFile = $('#in2').get(0).files[0]
			var reader = new FileReader();
			reader.onload = function(e) {
				that.tupian1 = e.srcElement.result;
			}
			reader.readAsDataURL(selectedFile);

		},
		choo2(obj) {
			var chos = document.getElementById('in3');
			chos.click();
		},
		uploadimg2: function(e) {
			var that = this;
			var selectedFile = $('#in3').get(0).files[0]
			var reader = new FileReader();
			reader.onload = function(e) {
				that.tupian = e.srcElement.result;
			}
			reader.readAsDataURL(selectedFile);

		},
		choo3(obj) {
			var chos = document.getElementById('in4');
			chos.click();
		},
		uploadimg3: function(e) {
			var that = this;
			var selectedFile = $('#in4').get(0).files[0]
			var reader = new FileReader();
			reader.onload = function(e) {
				that.tupian3 = e.srcElement.result;
			}
			reader.readAsDataURL(selectedFile);

		},
		choo4(obj) {
			var chos = document.getElementById('in5');
			chos.click();
		},
		uploadimg4: function(e) {
			var that = this;
			var selectedFile = $('#in5').get(0).files[0]
			var reader = new FileReader();
			reader.onload = function(e) {
				that.tupian4 = e.srcElement.result;
			}
			reader.readAsDataURL(selectedFile);

		},
		gonext() {

			var re1 = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$");
			var re2 = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
			var re3 = /^[1][3,4,5,7,8][0-9]{9}$/;
			var re4 = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}/g;
			var re5 = /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/;
			var re6 = /^([0-9A-Z]){8}$/;
			if(this.mod == '' || !re1.test(this.mod)) {
				document.getElementById('faren').focus();
			} else if(this.mod1 == '' || !re2.test(this.mod1)) {
				document.getElementById('fashen').focus();
			} else if(this.mod2 == '' || !re3.test(this.mod2)) {
				document.getElementById('shouji').focus();
			}else if(this.bechose == 1) {
				if(this.tupian == '') {
					MessageBox('提示',"请上传营业执照");
				} else if(this.mod3 == '' || !re4.test(this.mod3)) {
					document.getElementById('shehui').focus();
				}else if(this.tupian1 == ''){
					MessageBox('提示',"请上传签约申请书");
				}
			} else if(this.bechose == 2) {
				if(this.tupian2 == '') {
					MessageBox('提示',"请上传营业执照");
				}else if(this.mod4 == '' || !re5.test(this.mod4)) {
					document.getElementById('yingye').focus();
				}else if(this.tupian3 == ''){
					MessageBox('提示',"请上传组织机构代码");
				}else if(this.mod5 == '' || !re6.test(this.mod5)) {
					document.getElementById('zuzhi').focus();
				}else if(this.tupian4 == ''){
					MessageBox('提示',"请上传组税务登记证");
				}else if(this.tupian1 == ''){
					MessageBox('提示',"请上传签约申请书");
				}
			} else {
				this.$router.push({
					path: '/registersre'
				});
			}
		},
		bigimg(){
			if(this.tupian != ''){
				this.show = 1;
			}
		},
		bigimg3(){
			if(this.tupian3 != ''){
				this.show = 3;
			}
		},
		bigimg4(){
			if(this.tupian4 != ''){
				this.show = 4;
			}
		},
		bigimg6(){
			if(this.tupian1 != ''){
				this.show = 6;
			}
		},
		bigimgback(){
			this.show = false;
		}
	}
}