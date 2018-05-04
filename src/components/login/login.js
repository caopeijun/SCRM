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
		}
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
			var zhengze = /^[1][3,4,5,7,8][0-9]{9}$/;
			console.log(this.Codenum, this.Code)
			if(this.Account == '') {
				this.wtwo = true
			} else if(!zhengze.test(this.Account)) {
				this.wone = true;
				this.wtwo = false;
			} else if(this.a == null || this.a == '') {
				this.wsre = false;
				this.wfor = true;
				this.wtwo = false;
				this.wone = false;
			} else if(this.Code == this.a) {
				this.wsre = false;
				//					console.log(Codenum)
			} else {
				this.wsre = true;
				this.wfor = false;
				//					console.log(Codenum)

			}
		}
	},
}