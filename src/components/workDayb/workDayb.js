import { formatDate } from '../../../static/js/date.js';
import writePart from '../writePart/index'
import reportPart from '../reportPart/index'
export default {
	name: "workDayb",
	components: {
		"v-writePart": writePart,
		"v-reportPart": reportPart,
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
		}
	},
	created() {
		this.$store.commit("submitReportPartType", 1);
	},
	
	methods: {
		open(picker) {
			this.$refs[picker].open(); //设置开始
		},
		chg(n) {
			this.chnum = n
		},
		tst() {
			//  			console.log(document.getElementById('pic').value)
		},
		totranslate(){
			this.$router.push('/translate')
		}
	}
}