export default {
	name: "Home",
	data() {
		return {
			wone: false,
			wtwo: false,
			wsre: false,
			wfor: false,
			Account: '',
			Code: '',
			a: '',
			countdown:60,
			show:true,
			count:'',
			timer:null,
			route:'',
		}
	},
	created(){
		
	},
	mounted: function() {

	},
	methods: {
		yanzheng() {
			var zhengze = /^[1][3,4,5,7,8][0-9]{9}$/;
			console.log(!zhengze.test(this.Account), this.Account)
			if(this.Account == '' || this.Account == undefined) {
				this.wtwo = true;
				this.wone = false;
			} else if(!zhengze.test(this.Account)) {
				this.wone = true;
				this.wtwo = false;
			} else {
				this.wone = false;
				this.wtwo = false;
			}
		},
			getCode(){
				const TIME_COUNT = 60;
				if(!this.timer){
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if(this.count>0&&this.count <= TIME_COUNT){
							this.count--;
						}else{
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					},1000)
				}
			},
			willdone() {
//				var zhengze = /^[1][3,4,5,7,8][0-9]{9}$/;
//				console.log(this.Codenum, this.Code)
//				if(this.Account == '') {
//					this.wtwo = true
//				} else if(!zhengze.test(this.Account)) {
//					this.wone = true;
//					this.wtwo = false;
//				} else if(this.a == null || this.a == '') {
//					this.wsre = false;
//					this.wfor = true;
//					this.wtwo = false;
//					this.wone = false;
//				} else if(this.Code == this.a) {
//					this.wsre = false;
//					//					console.log(Codenum)
//				} else {
//					this.wsre = true;
//					this.wfor = false;
//					//					console.log(Codenum)
//	
//				}
					this.$http.get('static/choose.json').then(
						function (res) {
              // 处理成功的结果
             	this.route = res.data.chooses[1].route;
							this.token = res.data.chooses[1].token;
		//					console.log(this.route)
							if (this.route == "leader") {
								this.route = 1 //领导权限为1
							} else if (this.route == 'saller') {
								this.route = 2 //销售员权限为2
							} else if (this.route == 'inside') {
								this.route = 3 //内勤权限为3
							}
		//					res.data.chooses[0] == 'leader' ? this.route = 1 : '',
		//					res.data.chooses[0] == 'saller' ? this.route = 2 : '',
//							console.log(this.route),
							this.$store.commit("rout", this.route);
							this.$store.commit("ctoken",this.token);
//							console.log(this.$store.state.rout,'在vuex中储存权限');
//							console.log(this.$store.state.token,'在vuex中储存token');
							if (this.$store.state.rout == 1) {
								this.$router.push('/leader_home')
							} else if (this.$store.state.rout == 2) {
								this.$router.push('/homeSalesman')
							} else if (this.$store.state.rout == 3) {
								this.$router.push('/inside_home')
							}
//							this.$router.push('/')
            },function (res) {
            // 处理失败的结果
            }
					);
				
			}
	},
}


