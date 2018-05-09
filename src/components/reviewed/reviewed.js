export default {
	name: 'Reviewed',
	data() {
		return {
			popup:0,
			noPass:false,
			goPass:false,
			text:'',
			news:{
				name:'山东橡胶有限公司',
				credit:'剩余信用额度：300万，应收账款：100万',
				man:'张三',
				num:'12356789432',
				part:'北京朝阳望京宏泰大街',
			},
			info:{
				num:'PVC123盘锦 烟台库',
				part:'盘锦',
				depot:'烟台库',
				tonnage:'1.5',
				unit:'10650',
			},
			list:{
				name:'山东橡胶有限公司',
				num:'F45457BUIU56',
				data:'2018-04-09',
			}
			
		}
	},
	methods:{
		popupShow(){
			this.noPass = true
		},
		localSave(){
//				console.log(this.text)
			localStorage.siteName=this.text
//				console.log(localStorage.siteName)
			this.$router.push({name:'order_list'})
		},
		popupPass(){
			this.goPass = true
		},
		popupBtn1(){
			this.goPass = false
		},
		popupBtn2(){
			this.$router.push({name:'order_list'})
		}
	},
}