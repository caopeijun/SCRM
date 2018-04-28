import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
import { BmNavigation } from 'vue-baidu-map'
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

export default {
	name: "translatepro",
	data() {
		return {
			clc: 1,
			allLoaded:false,
			nam: 1,
			dd: 10,
			center: {
				lng: 350,
				lat: 0
			},
			zoom: 3,
			dkt: '',
			out: false,
			sings: [{
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21"
			}],
			sings1: [{
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 3
			}, {
				srct: require("./img/touxiang.png"),
				name: "王志",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 1
			}, {
				srct: require("./img/touxiang.png"),
				name: "张嘉欣",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 3
			}, {
				srct: require("./img/touxiang.png"),
				name: "王志",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 1
			}, {
				srct: require("./img/touxiang.png"),
				name: "章程",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 2
			}, {
				srct: require("./img/touxiang.png"),
				name: "王志",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 1
			}, {
				srct: require("./img/touxiang.png"),
				name: "章程",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 2
			}, {
				srct: require("./img/touxiang.png"),
				name: "王志",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 1
			}, {
				srct: require("./img/touxiang.png"),
				name: "章程",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 2
			}, {
				srct: require("./img/touxiang.png"),
				name: "王志",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 1
			}, {
				srct: require("./img/touxiang.png"),
				name: "章程",
				place: "山东临沂办事处",
				srcp: require("./img/jiatu.png"),
				time: "2013-03-21",
				id: 2
			}],
		}
	},

	methods: {
		clicktab(val) {
			this.clc = val;
		},
		handler({
			BMap,
			map
		}) {
			//			console.log(BMap, map)
			//			console.log(this.sings.length);
			this.center.lng = 116.404
			this.center.lat = 39.915
			this.zoom = 15
		},
		upload: function(e) {
			var that = this;
			var selectedFile = $('input').get(0).files[0];
			var reader = new FileReader();
			reader.onload = function(e) {
				that.dkt = e.srcElement.result;
			}
			reader.readAsDataURL(selectedFile);

		},
		dk() {
			var cho = document.getElementById('daka');
			cho.click();
		},
		dalert() {
			if(this.dkt == '') {
				alert("请先拍摄照片")
			} else {
				this.out = true;
				var d = new Date();
				this.dangqiantime = d.getHours() + ":" + d.getMinutes();
			}
		},
		hid() {
			this.out = false
			//			this.clc = 3;
		},
		fund() {
			var mySelect = document.getElementById("selected");
			var index = mySelect.selectedIndex;
			console.log(index);
			this.dd = index;
			console.log(this.dd, "aaa")
			if(index == 0) {
				this.dd = 10;
			}
		},
		loadBottom() {
			this.allLoaded = true; // if all data are loaded
			this.$refs.loadmore.onBottomLoaded();
		},
		totranslate(){
			this.$router.push({
					path: '/translate'
				});
		}
	},
	components: {
		BaiduMap,
		BmNavigation,
	}
}