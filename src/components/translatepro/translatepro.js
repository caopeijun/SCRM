import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
import { BmNavigation } from 'vue-baidu-map'
import reportParty from '../reportParty/index'
import { MessageBox } from 'mint-ui';
import initializeMap from "./map1";
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
			tupian4:[],
			out: false,
			
		}
	},
	mounted() {
		initializeMap().then(BMap => {
			let point = {};
			this.initMap(BMap, point);
		});
	},
	methods: {
		clicktab(val) {
			this.clc = val;
			if(val == 2){
				this.show = false;
			}
		},
		// handler({
		// 	BMap,
		// 	map
		// }) {
		// 	this.center.lng = 116.404
		// 	this.center.lat = 39.915
		// 	this.zoom = 15
		// },
		upload: function(e) {
			var that = this;
			var selectedFile = $('input').get(0).files[0];
			var reader = new FileReader();
			reader.onload = function(e) {
				that.tupian4.push(e.srcElement.result);				
			}
			reader.readAsDataURL(selectedFile);

		},
		dk() {
			var cho = document.getElementById('daka');
			cho.click();
		},
		dalert() {
			if(this.tupian4 == '') {
				MessageBox("提示","请先拍摄照片")
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
		},
		initMap(BMap, point) {
			var that = this
			const map = new BMap.Map(this.$refs.mapcustom);
			var point = new BMap.Point(116.331398, 39.897445);
			map.centerAndZoom(point, 12);
			map.addControl(new BMap.NavigationControl());    
			map.addControl(new BMap.ScaleControl());    
			map.addControl(new BMap.OverviewMapControl());    
			map.addControl(new BMap.MapTypeControl());    
			
			var geolocation = new BMap.Geolocation();
			// 开启SDK辅助定位
			geolocation.enableSDKLocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					var mk = new BMap.Marker(r.point);
					map.addOverlay(mk);
					map.panTo(r.point);
					MessageBox('您的位置：'+r.point.lng+','+r.point.lat);
				}
				else {
					alert('failed'+this.getStatus());
				}        
			});
		},
	},
	components: {
		"v-reportParty": reportParty,
		BaiduMap,
		BmNavigation,
	}
}