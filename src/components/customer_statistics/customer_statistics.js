// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require("echarts/lib/component/legend")

////日期选择器
//
//import Vue from 'vue';
//import { formatDate } from './date.js';
import Vue from 'vue';
import { Button, DatePicker } from 'element-ui';
Vue.use(DatePicker)

export default {
  name:"customer_statistics",
 
  data(){
    return{
    	value6: '',
//  	value: new Date(),          //定义显示时间
//        visible: false,
//        startDate: new Date(),      //设置开始时间
//        endDate: new Date('2019-01-22') ,//设置结束时间
    }
  },
//filters: {
//	formatDate(time) {
//		var date = new Date(time);
//		return formatDate(date, 'yyyy-MM-dd')
//	}
//},
  mounted() {
  	
		this.drawBar();
  },
  methods:{
  	goback(){
  		this.$router.push('/translate')
  	},
//	open(picker) {
//        this.$refs[picker].open();    //设置开始
//      },
 		
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
    
  },
}