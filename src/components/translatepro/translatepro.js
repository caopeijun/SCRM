import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
import { BmNavigation } from 'vue-baidu-map'
import reportParty from '../reportParty/index'

export default {
	name: "translatepro",
	data() {
		return {
			show:true,
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
			
		}
	},

	methods: {
		clicktab(val) {
			this.clc = val;
			if(val == 2){
				this.show = false;
			}
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
				var mint;
				if(d.getMinutes()<10){
					mint = 0+d.getMinutes();
				}else{
					mint = d.getMinutes();
				}
				this.dangqiantime = d.getHours() + ":" + mint;
			}
		},
		hid() {
			this.out = false
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
		"v-reportParty": reportParty,
		BaiduMap,
		BmNavigation,
	}
}