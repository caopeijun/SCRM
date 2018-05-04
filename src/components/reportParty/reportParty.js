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
			this.loading = true;
			setTimeout(() => {
				let last = this.sings[this.sings.length - 1];
				for(let i = 1; i <= 10; i++) {
					this.sings.push(last);
				}
				this.loading = false;
			}, 500);
		}
	},

}