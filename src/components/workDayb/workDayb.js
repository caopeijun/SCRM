import { formatDate } from '../../../static/js/date.js';
import writePart from '../writePart/index'
export default {
	name: "workDayb",
	components: {
		"v-writePart": writePart,
	},
	filters: { //时间转换
		formatDate(time) {
			var date = new Date(time);
			return formatDate(date, 'yyyy-MM-dd');
		}
	},
	data() {
		return {
			tupian4: '',
			value: new Date(), //定义显示时间
			visible: false,
			startDate: new Date(), //设置开始时间
			endDate: new Date('2019-01-22'), //设置结束时间
			chnum: 0,
			records: [{
					"peopleImg": null,
					"name": '张嘉欣',
					"msg": '检查员工的工作进度并进行评论说明',
					"pic": [
						require('./images/ddpic.png'),
						require('./images/ddpic.png'),
						require('./images/ddpic.png')
					]
				},
				{
					"peopleImg": require("./images/touxiang.png"),
					"name": '张嘉欣',
					"msg": '检查员工的工作进度并进行评论说明',
					"pic": [
						require('./images/ddpic.png'),
						require('./images/ddpic.png'),
					]
				},
				{
					"peopleImg": require("./images/touxiang.png"),
					"name": '张嘉欣',
					"msg": '检查员工的工作进度并进行评论说明',
					"pic": [
						require('./images/ddpic.png'),
						require('./images/ddpic.png'),
						require('./images/ddpic.png')
					]
				}
			]
		}
	},
	created() {
		//			console.log(document.getElementById('worTop').scrollTop,'123')
	},
	mounted: function() {
		window.addEventListener('scroll', this.handleScroll)
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			var scroll = window.pageYOffset / 37.5
			var i = 0;
			if(((this.records.length - (i * 3)) * 176 + 110 - 615)/37.5 <= scroll + i/37.5) {

				this.records.push({
					"peopleImg": null,
					"name": '张嘉欣',
					"msg": '检查员工的工作进度并进行评论说明',
					"pic": [
						require('./images/ddpic.png'),
						require('./images/ddpic.png'),
						require('./images/ddpic.png')
					]
				}, {
					"peopleImg": require("./images/touxiang.png"),
					"name": '张嘉欣',
					"msg": '检查员工的工作进度并进行评论说明',
					"pic": [
						require('./images/ddpic.png'),
						require('./images/ddpic.png'),
					]
				}, {
					"peopleImg": require("./images/touxiang.png"),
					"name": '张嘉欣',
					"msg": '检查员工的工作进度并进行评论说明',
					"pic": [
						require('./images/ddpic.png'),
						require('./images/ddpic.png'),
						require('./images/ddpic.png')
					]
				})
			}
			i++;

		},
		open(picker) {
			this.$refs[picker].open(); //设置开始
		},
		chg(n) {
			this.chnum = n
		},
		toMydaybdetail() {
			this.$router.push('/mydaybDetail?sty=wday')
		},
		tst() {
			//  			console.log(document.getElementById('pic').value)
		},
		uploadimg4: function(e) {
			var that = this;
			var selectedFile = $("#in5").get(0).files[0]
			console.log(selectedFile)
			var reader = new FileReader();
			reader.onload = function(e) {
				that.tupian4 = e.srcElement.result;
				console.log(that.tupian4)
			}
			reader.readAsDataURL(selectedFile);
		},
		choo4() {
			document.getElementById('int').click()
		}
	}

}