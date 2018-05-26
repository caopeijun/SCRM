import { InfiniteScroll } from 'mint-ui'
import Vue from 'vue';
Vue.use(InfiniteScroll);
export default {
	name: "reportPart",
	data() {
		return {
			sings: [{
				srct: require("./images/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./images/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./images/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./images/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./images/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./images/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./images/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./images/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./images/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./images/jiatu.png"),
				time: "2013-03-21"
			}]
		}
	},

	methods: {
		loadMore() {
			if((document.getElementById('rebody').offsetTop - window.pageYOffset) / 37.5 + 4 * this.sings.length + 0.2 * this.sings.length - document.body.clientHeight / 37.5 <= 0.2) {
				this.loading = true;
				let last = this.sings[this.sings.length - 1];
				for(let i = 1; i <= 2; i++) {
					this.sings.push(last);
				}
				this.loading = false;
			}
		}
	},

}