export default {
	name: "Pricequery",
	data() {
		return {
			dd:true,
			sings: [{
				name: "T30S",
				rzhi: "2.5-3.5",
				place: "西太",
				kubie: "公司库",
				money: "9250",
				id1: "1",
				id2: "1",
				id3: "1"
			}, {
				name: "L5E89",
				rzhi: "2.5-3.5",
				place: "西太",
				kubie: "公司库",
				money: "9250",
				id1: "2",
				id2: "1",
				id3: "1"
			}, {
				name: "T03",
				rzhi: "2.5-3.5",
				place: "西太",
				kubie: "公司库",
				money: "9250",
				id1: "3",
				id2: "1",
				id3: "1"
			}, {
				name: "S1003",
				rzhi: "2.5-3.5",
				place: "西太",
				kubie: "公司库",
				money: "9250",
				id1: "4",
				id2: "1",
				id3: "1"
			}, {
				name: "T30S",
				rzhi: "2.5-3.5",
				place: "海伟",
				kubie: "公司库",
				money: "9250",
				id1: "1",
				id2: "2",
				id3: "1"
			}, {
				name: "T30S",
				rzhi: "2.5-3.5",
				place: "大唐",
				kubie: "公司库",
				money: "9250",
				id1: "1",
				id2: "3",
				id3: "1"
			}, {
				name: "T30S",
				rzhi: "2.5-3.5",
				place: "大连有机",
				kubie: "公司库",
				money: "9250",
				id1: "1",
				id2: "4",
				id3: "1"
			}, {
				name: "T30S",
				rzhi: "2.5-3.5",
				place: "西太",
				kubie: "龙口港在途",
				money: "9250",
				id1: "1",
				id2: "1",
				id3: "2"
			}, {
				name: "T30S",
				rzhi: "2.5-3.5",
				place: "西太",
				kubie: "烟台库",
				money: "9250",
				id1: "1",
				id2: "1",
				id3: "3"
			}, {
				name: "T30",
				rzhi: "2.5-3.5",
				place: "大连有机",
				kubie: "公司库",
				money: "9250",
				id1: "3",
				id2: "4",
				id3: "1"
			}, {
				name: "L5E89",
				rzhi: "2.5-3.5",
				place: "海伟",
				kubie: "烟台库",
				money: "9250",
				id1: "2",
				id2: "2",
				id3: "3"
			}, ]
		}
	},
	created(){
		dd.ready(function(){
    		dd.biz.navigation.setTitle({
      			title : '价格查询',//控制标题文本，空字符串表示显示默认文
    		});
  		})
	},
	methods: {
		fundn(){
			var vu = document.getElementsByClassName("shoped")
			var vm = document.getElementById("selecn");
			var am = vm.selectedIndex;
			for(var i=0;i<this.sings.length;i++){
				if(this.sings[i].id1!=am){
					vu[i].style.display = "none"
				}else{
					vu[i].style.display = "block"
				};
				if(am == 0){
					vu[i].style.display = "block"
				}
			}
		},
		fundp(){
			var vu = document.getElementsByClassName("shoped")
			var vm = document.getElementById("selecp");
			var am = vm.selectedIndex;
			for(var i=0;i<this.sings.length;i++){
				if(this.sings[i].id2!=am){
					vu[i].style.display = "none"
				}else{
					vu[i].style.display = "block"
				};
				if(am == 0){
					vu[i].style.display = "block"
				}
			}
		},
		goback(){
			this.$router.push('/translate')
		}
	}
}