import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
import { BmNavigation } from 'vue-baidu-map'
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
import reportParty from '../reportParty/index'
Vue.use(InfiniteScroll);

export default {
	name: "translateclock",
	data() {
		return {
			clc: 1,
			dkt: '',
			dis: 1,
			out: false,
			dangqiantime: "",
			center: {
				lng: 350,
				lat: 0
			},
			zoom: 3,
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
		getmore() {
			this.Idis = this.sings;
			this.dis = 2;
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
			this.clc = 3;
		},
		dk() {
			var cho = document.getElementById('daka');
			cho.click();
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
		loadMore() {
			this.loading = true;
			setTimeout(() => {
				let last = this.sings[this.sings.length - 1];
				console.log(last)
				for(let i = 1; i <= 2; i++) {
					this.sings.push(last);
				}
				this.loading = false;
			}, 2500);
		},
		totranslate() {
			this.$router.push({
				path: '/translate'
			});
		}
	},
	components: {
		"v-reportParty": reportParty,
		BaiduMap,
		BmNavigation,
	}
}