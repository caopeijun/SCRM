export default {
		name: "Home",
		data() {
			return {
				wone:false,
				wtwo:false,
				wsre:false,
				wfor:false,
				Account:'',
				Code:'',
				Codenum:'',
				codeNum:'点击获取验证码',
				a:''
			}
		},
		mounted: function() {

		},
		methods: {
			yanzheng(){
				var zhengze = /^[1][3,4,5,7,8][0-9]{9}$/;
				console.log(!zhengze.test(this.Account),this.Account)
				if(this.Account == '' || this.Account == undefined){
					this.wtwo = true;
					this.wone = false;
				}else if(!zhengze.test(this.Account)){
					this.wone = true;
					this.wtwo = false;
				}else{
					this.wone=false;
					this.wtwo=false;
				}
			},
			code(val){
				this.a = parseInt(Math.random()*10000);

				this.codeNum = this.a
				console.log(this.Codenum);
			},
			willdone(){
				var zhengze = /^[1][3,4,5,7,8][0-9]{9}$/;
				console.log(this.Codenum,this.Code)
				if(this.Account == ''){
					this.wtwo = true
				}else if(!zhengze.test(this.Account)){
					this.wone = true;
					this.wtwo = false;
				}else if(this.a == null || this.a == ''){
					this.wsre = false;
					this.wfor = true;
					this.wtwo = false;
					this.wone = false;
				}else if(this.Code == this.a){
					this.wsre = false;
//					console.log(Codenum)
				}else{
					this.wsre = true;
					this.wfor = false;
//					console.log(Codenum)
					
				}
			}
		},
	}