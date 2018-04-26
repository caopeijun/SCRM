// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

//日期选择器
import Vue from 'vue'
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

export default {
	name: 'leader_home',
	data() {
		return {
			num: 1,
			tab:1,
			isShow:1,
			pickerValue:'',
			partys:[
					{name:'山东橡胶有限公司',
					    state:'待审核',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待审核',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		}],
					},					
				],
				partys2:[
					{name:'山东橡胶有限公司',
					    state:'待确认',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待确认',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		}],
					},					
				],partys3:[
					{name:'山东橡胶有限公司',
					    state:'代付款',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'代付款',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							money:'230',
				 		}],
					},					
				],partys4:[
					{name:'山东橡胶有限公司',
					    state:'待发货',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待发货',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		}],
					},					
				],partys5:[
					{name:'山东橡胶有限公司',
					    state:'待确认',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待确认',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		}],
					},					
				],partys6:[
					{name:'山东橡胶有限公司',
					    state:'待审核',
					    num:'DN3458398694',
					    money:'12456',
					    info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		},{name:'f丝',
							num:'Tes0S',
							rmb:'10650',	
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 	 	}]
					},{name:'山东橡胶有限公司',
					 	state:'待确认',
						num:'DN3458398694',
						money:'12456',
						info:[{name:'拉丝',
							num:'T30S',
							rmb:'10650',
							place:'盘锦',
							depot:'烟台库',
							times:'1.5',
							
				 		}],
					},					
				],
		}

	},
	mounted() {
		this.drawLine();
		this.drawBar();
	},
	methods: {
		eventBtn(index) {
			this.num = index;
		},
		clickTab(index){
			this.tab = index;
			this.isShow = index;
		},

		drawLine() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(document.getElementById('myChart'))
			// 绘制图表
			myChart.setOption({
				//      title: { text: 'ECharts 入门示例' },
				tooltip: {},
				xAxis: {
					type: 'category',
					data: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30"]
				},
				yAxis: [{
						type: 'value',
						name: '',
						min: 0,
						max: 120,
						interval: 20,
					},
					{
						type: 'value',
						name: '',
						min: 9700,
						max: 10000,
						interval: 50,

					}
				],
				series: [{
					name: '销量',
					type: 'bar',
					data: [80, 90, 110, 80, 50, 20]
				}, {
					name: '销量',
					type: 'line',
					yAxisIndex: 1,
					data: [9900, 10000, 9950, 10000, 10000, 9900]
				}, ]
			});
		},
		//第二个
		drawBar() {
			// 基于准备好的dom，初始化echarts实例
			let myBar = echarts.init(document.getElementById('myChart2'))
			// 绘制图表
			myBar.setOption({
				//      title: { text: 'ECharts 入门示例' },
				tooltip: {},
				xAxis: {
					type: 'category',
					data: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30"]
				},
				yAxis: [{
						type: 'value',
						name: '',
						min: 0,
						max: 120,
						interval: 20,
					},
					{
						type: 'value',
						name: '',
						min: 9700,
						max: 10000,
						interval: 50,

					}
				],
				series: [{
					name: '销量',
					type: 'bar',
					data: [80, 90, 110, 80, 50, 20]
				}, {
					name: '销量',
					type: 'line',
					yAxisIndex: 1,
					data: [9900, 10000, 9950, 10000, 10000, 9900]
				}, ]
			});
		},
		linkTo(index){
//				console.log(index)
				if(index > 1){
					this.$router.push({name:'order_list'})
				}else{
					this.$router.push({name:'reviewed'})
				}
	
			},
  //    --------日期选择器------------
  		 openPicker() {
        this.$refs.picker.open();
      }
		
	},

}