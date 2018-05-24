export default {
	name: 'Details_audited',
	data() {
		return {
			rmb:'16320.00',
			lists:[
				{
					kind:'标准订单',
					party:'山东橡胶有限公司',
					credit:'300万',
					money:'100万',
					copy:'款到发货',
					deliver:'配送',
					man:'张三',
					phone:'13476532357',
					address:'北京朝阳区望京宏泰大街',
				}
			],
			infos:[
				{
					num:'PVC23',
					part:'盘锦',
					depot:'烟台库',
					tonnage:'1.5',
					price:'10650',
					
				}
			],
			newss:[
				{
					name:'山东橡胶有限公司',
					num:'F484567BUIU56',
				}
			]
		}
	},
	created(){
		dd.ready(function(){
		dd.biz.navigation.setTitle({
			title : '订单详情',//控制标题文本，空字符串表示显示默认文
		});
	})
	}
}