import initializeMap from "./map";
export default {
	name: 'customcontact',
	components: {},
	props: [],
	data() {
		return {
			province:'',
			city:'',
			district:'',
			street:'',
			streetNumber:''
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
			//			const map = new BMap.Map(this.$refs.mapcustom);
			//			//			console.log(this.$refs.mapcustom)
			//			map.centerAndZoom(new BMap.Point(116.404, 39.915), 13);
			//			map.addEventListener("click", function(e) {
			//				var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat)); // 创建标注
			//				var allOverlay = map.getOverlays();
			//				console.log(allOverlay)
			//				map.addOverlay(marker); // 将标注添加到地图中
			//				map.removeOverlay(allOverlay[0]);
			//
			//			});
			var that = this
			const map = new BMap.Map(this.$refs.mapcustom);
			var point = new BMap.Point(116.331398, 39.897445);
			map.centerAndZoom(point, 12);
			var geoc = new BMap.Geocoder();
			map.addEventListener("click", function(e) {
				var pt = e.point;
				geoc.getLocation(pt, function(rs) {
					var addComp = rs.addressComponents;
//					alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
					that.province = addComp.province
					that.city = addComp.city
					that.district = addComp.district
					that.street = addComp.street
					that.streetNumber = addComp.streetNumber
				});
			});
		},
	},
	beforeRouteLeave(to, from, next) {
		to.meta.keepAlive = true; // 让 A 缓存，即不刷新
		next();
	}
}