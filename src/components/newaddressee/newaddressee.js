import { Picker } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Popup } from 'mint-ui';
import Vue from 'vue'
import myaddress from './address.json'
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
export default {
	name: "addressee",
	data() {
		return {
			myAddressSlots: [{
					flex: 1,
					defaultIndex: 1,
					values: Object.keys(myaddress), //省份数组
					className: 'slot1',
					textAlign: 'center'
				}, {
					divider: true,
					content: '-',
					className: 'slot2'
				}, {
					flex: 1,
					values: [],
					className: 'slot3',
					textAlign: 'center'
				},
				{
					divider: true,
					content: '-',
					className: 'slot4'
				},
				{
					flex: 1,
					values: [],
					className: 'slot5',
					textAlign: 'center'
				}
			],
			myAddressProvince: '',
			myAddressCity: '',
			myAddresscounty: '',
			Consignee: '',
			ConsigneePhone: '',
			ConsigneeAddressee: '',
			clik: false,
			bottomout:false,
			newaddressmessage: []
		}
	},
	created() {
		dd.ready(function(){
		dd.biz.navigation.setTitle({
			title : '添加收货地址',//控制标题文本，空字符串表示显示默认文
		});
	})
	},
	methods: {
		onMyAddressChange(picker, values) {
			if(myaddress[values[0]]) { //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
				picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
				picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
				this.myAddressProvince = values[0];
				this.myAddressCity = values[1];
				this.myAddresscounty = values[2];
			}
		},
		choseaddress() {
			this.clik = true;
			this.bottomout = true;
		},
		saveaddress() {
			var re1 = /^([\u4e00-\u9fa5]){2,7}$/;
			var re2 = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
			if(this.Consignee == '' || this.Consignee == undefined) {
				MessageBox('提示', '姓名不能为空');
				document.getElementById("consignee").focus();
			} else if(!re1.test(this.Consignee)) {
				MessageBox('提示', '您输入的姓名格式不正确');
				document.getElementById("consignee").focus();
			} else if(this.ConsigneePhone == '' || this.ConsigneePhone == undefined) {
				MessageBox('提示', '手机号不能为空');
				document.getElementById("consigneephone").focus();
			} else if(!re2.test(this.ConsigneePhone)) {
				MessageBox('提示', '您输入的手机号格式不正确');
				document.getElementById("consigneephone").focus();
			} else if(this.myAddressProvince == '' && this.myAddressCity == '' && this.myAddresscounty == ''){
				MessageBox('提示', '您未选择所在地区');
			}else if(this.ConsigneeAddressee == ''){
				MessageBox('提示', '您未填写详细地址');
				document.getElementById("consigneeaddressee").focus();
			}else {
				this.$router.push("/addressee")
				this.newaddressmessage.push(
					this.Consignee,
					this.ConsigneePhone,
					this.ConsigneeAddressee,
					this.myAddressProvince,
					this.myAddressCity,
					this.myAddresscounty
				);
				console.log(this.newaddressmessage)
			}
		}
	},
	mounted() {
		this.$nextTick(() => { //vue里面全部加载好了再执行的函数  （类似于setTimeout）
			this.myAddressSlots[0].defaultIndex = 0
			// 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
			//因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
		});
	}
}