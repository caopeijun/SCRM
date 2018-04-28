import initializeMap from "./map";
export default {
	name: 'customcontact',
	components: {},
	props: [],
	data() {
		return {
			addinf: [],
			longitude: '',
			latitude: '',
			provinces: '',
		}
	},
	mounted() {
		initializeMap().then(BMap => {
			let point = {};
			this.initMap(BMap, point);
		});
	},
	methods: {
		initMap(BMap, point) {
			const map = new BMap.Map(this.$refs.mapcustom);
			//			console.log(this.$refs.mapcustom)
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 13);
			map.addEventListener("click", function(e) {
				var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat)); // 创建标注
				var allOverlay = map.getOverlays();
				console.log(allOverlay)
				map.addOverlay(marker); // 将标注添加到地图中
				map.removeOverlay(allOverlay[0]);

			});
		},
	},
	beforeRouteLeave(to, from, next) {
		to.meta.keepAlive = true; // 让 A 缓存，即不刷新
		next();
	}
}