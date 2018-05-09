// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require("echarts/lib/component/legend")
//日期选择器

import Vue from 'vue';
import { formatDate } from './date.js';
import footer from '../footer'
export default {
	name: 'leader_home',
	components:{
    "v-footer":footer,
  },
	data() {
		return {
			value: new Date(),          //定义显示时间
          visible: false,
          startDate: new Date(),      //设置开始时间
          endDate: new Date('2019-01-22') ,//设置结束时间
          
          value1: new Date(),          //定义显示时间
          visible: false,
          startDate: new Date(),      //设置开始时间
          endDate: new Date('2019-01-22') ,
			num: 1,
			tab: 1,
			isShow: 1,
			
			partys: [{
				name: '山东橡胶有限公司',
				state: '待审核',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}, {
					name: 'f丝',
					num: 'Tes0S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}]
			}, {
				name: '山东橡胶有限公司',
				state: '待审核',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}],
			}, ],
			partys2: [{
				name: '山东橡胶有限公司',
				state: '待确认',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',
					money: '230',
				}, {
					name: 'f丝',
					num: 'Tes0S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',
					money: '230',
				}]
			}, {
				name: '山东橡胶有限公司',
				state: '待确认',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',
					money: '230',
				}],
			}, ],
			partys3: [{
				name: '山东橡胶有限公司',
				state: '代付款',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',
					money: '230',
				}, {
					name: 'f丝',
					num: 'Tes0S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',
					money: '230',
				}]
			}, {
				name: '山东橡胶有限公司',
				state: '代付款',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',
					money: '230',
				}],
			}, ],
			partys4: [{
				name: '山东橡胶有限公司',
				state: '待发货',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}, {
					name: 'f丝',
					num: 'Tes0S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}]
			}, {
				name: '山东橡胶有限公司',
				state: '待发货',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}],
			}, ],
			partys5: [{
				name: '山东橡胶有限公司',
				state: '待确认',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}, {
					name: 'f丝',
					num: 'Tes0S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}]
			}, {
				name: '山东橡胶有限公司',
				state: '待确认',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}],
			}, ],
			partys6: [{
				name: '山东橡胶有限公司',
				state: '待审核',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}, {
					name: 'f丝',
					num: 'Tes0S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}]
			}, {
				name: '山东橡胶有限公司',
				state: '待确认',
				num: 'DN3458398694',
				money: '12456',
				info: [{
					name: '拉丝',
					num: 'T30S',
					rmb: '10650',
					place: '盘锦',
					depot: '烟台库',
					times: '1.5',

				}],
			}, ],
		}

	},
	filters: {
  	formatDate(time) {
  		var date = new Date(time);
  		return formatDate(date, 'yyyy-MM-dd')
  	}
  },
	mounted() {
		this.drawLine();
		this.drawBar();
	},
	methods: {
		open(picker) {
          this.$refs[picker].open();    //设置开始
        },
        open1(picke) {
          this.$refs[picke].open();    //设置开始
        },
		eventBtn(index) {
			this.num = index;
		},
		clickTab(index) {
			this.tab = index;
			this.isShow = index;
		},
		//第一个图
		drawLine() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(document.getElementById('myChart'))
			// 绘制图表
			myChart.setOption({
				//      title: { text: 'ECharts 入门示例' },
				tooltip: {},
				legend: {
					//      orient: 'vertical',  
					bottom: 10,
					padding: 4,
					data: ['订单量', '价格'],

				},
				xAxis: {
					//坐标轴
					axisLine: {
						show: false
					},
					//坐标轴刻度
					axisTick: {
						show: false
					},
					type: 'category',
					data: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30"]
				},
				yAxis: [{
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						type: 'value',
						name: '',
						min: 0,
						max: 120,
						interval: 20,
					},
					{
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						type: 'value',
						name: '',
						min: 9700,
						max: 10000,
						interval: 50,

					}
				],
				series: [{
					name: '订单量',
					type: 'bar',
					itemStyle: {
						normal: {
							color: '#E69595',
						}
					},
					label: {
						//在每个柱状图上显示数据
						normal: {
							show: true,
							position: 'top',
							textStyle: {
								color: 'black'
							}
						}
					},
					data: [80, 90, 110, 80, 50, 20],
					//设置柱的宽度，要是数据太少，柱子太宽不美观~
					　　　　　　　　　　barWidth: 25,
				}, {
					name: '价格',
					type: 'line',
					label: {
						normal: {
							show: true,
							position: 'top',
							textStyle: {
								color: 'black'
							}
						}
					},
					yAxisIndex: 1,
					itemStyle: {
						normal: {
							color: '#FFCF88', //圈圈的颜色
							lineStyle: {
								color: '#FFCF88' //线的颜色
							}
						}
					},
					data: [9950, 10000, 9950, 10000, 10000, 9900]
				}, ],

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
				legend: {
					//      orient: 'vertical',  
					bottom: 0,
					padding: 4,
					data: ['订单量', '价格'],

				},
				xAxis: {
					type: 'category',
					//坐标轴
					axisLine: {
						show: false
					},
					//坐标轴刻度
					axisTick: {
						show: false
					},
					data: ["2018-04-01", "2018-04-02", "2018-04-03", "2018-04-04", "2018-04-05", "2018-04-06"],
					axisLabel: {
						//　　　　　　　　　　　　　//这个是倾斜角度，也是考虑到文字过多的时候，方式覆盖采用倾斜
						rotate: 30,

					}
				},
				yAxis: [{
						type: 'value',
						//坐标轴
						axisLine: {
							show: false
						},
						//坐标轴刻度
						axisTick: {
							show: false
						},
						name: '',
						min: 0,
						max: 120,
						interval: 20,
					},
					{
						type: 'value',
						//坐标轴
						axisLine: {
							show: false
						},
						//坐标轴刻度
						axisTick: {
							show: false
						},
						name: '',
						min: 9700,
						max: 10000,
						interval: 50,

					}
				],
				series: [{
						name: '订单量',
						type: 'bar',
						label: {
							normal: {
								show: true,
								position: 'top',
								textStyle: {
									color: 'black'
								}
							}
						},
						//				设置柱的宽度
						　　　　　　　　　　barWidth: 15,
						itemStyle: {
							normal: {
								color: '#E69595', //圈圈的颜色
							}
						},
						data: [80, 90, 60, 80, 50, 20],

					}, {
						name: '价格',
						type: 'line',
						yAxisIndex: 1,
						label: {
							normal: {
								show: true,
								position: 'top',
								textStyle: {
									color: 'black'
								}
							}
						},
						itemStyle: {
							normal: {
								color: '#FFCF88', //圈圈的颜色
								lineStyle: {
									color: '#FFCF88' //线的颜色
								}
							}
						},
						data: [9950, 10000, 9950, 10000, 10000, 9900]
					},

				]
			});
		},
		linkTo(index) {
			//				console.log(index)
			if(index > 1) {
				this.$router.push({
					name: 'order_list'
				})
			} else {
				this.$router.push({
					name: 'reviewed'
				})
			}

		},
		//    --------日期选择器------------
		openPicker() {
			this.$refs.picker.open();
		}

	},

}