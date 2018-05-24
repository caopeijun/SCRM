import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue'
Vue.use(InfiniteScroll);
export default {
	name: 'receivable',
	data() {
		return {
			allm: 0,
			isA: 1,
			suoyin: "",
			sings: [{
				name: "山东橡胶有限公司",
				money: 20,
				people: "张嘉欣"
			}, {
				name: "河北PVC有限公司",
				money: 10,
				people: "王志"
			}, {
				name: "山东橡胶有限公司",
				money: 30,
				people: "张嘉欣"
			}, {
				name: "山东橡胶有限公司",
				money: 45,
				people: "章程"
			}, {
				name: "山东橡胶有限公司",
				money: 20,
				people: "王志"
			}, {
				name: "河北PVC有限公司",
				money: 40,
				people: "张嘉欣"
			}, {
				name: "山东橡胶有限公司",
				money: 30,
				people: "王志"
			}, {
				name: "山东橡胶有限公司",
				money: 24,
				people: "章程"
			}, {
				name: "河北PVC有限公司",
				money: 25,
				people: "张嘉欣"
			}, {
				name: "山东橡胶有限公司",
				money: 44,
				people: "王志"
			}, ]
		}
	},
	created() {
		this.all();
		dd.ready(function(){
    dd.biz.navigation.setTitle({
      title : '应收账款',//控制标题文本，空字符串表示显示默认文
    });
  })
	},
	methods: {
		isAa(val) {
			this.isA = val;
		},
		all() {
			for(var i = 0; i < this.sings.length; i++) {
				this.allm += parseInt(this.sings[i].money);
				console.log(this.allm);
			}
		},
		fundit() {
			var vm = document.getElementsByClassName("fcompany");
			for(var i = 0; i < this.sings.length; i++) {
				if(this.suoyin != this.sings[i].name && this.suoyin != this.sings[i].people) {
					vm[i].style.display = "none"
				} else {
					vm[i].style.display = "block"
				};
				if(this.suoyin == '') {
					vm[i].style.display = "block";
				};
			}
		},
		loadMore() {
			this.loading = true;
			if((document.getElementById('bodys').offsetTop - window.pageYOffset) / 37.5 + 2 * this.sings.length + 0.27 * this.sings.length - document.body.clientHeight / 37.5 <= 0){
				let last = this.sings[this.sings.length - 1];
				for(let i = 1; i <= 2; i++) {
					this.sings.push(last);
				}
				this.loading = false;
			}
		}
	},
	watch: {
		suoyin: 'fundit'
	}
}