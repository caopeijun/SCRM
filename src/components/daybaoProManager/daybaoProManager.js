import { formatDate } from '../../../static/js/date.js';
import writePart from '../writePart/index'
import reportPart from '../reportPart/index'
export default {
  name:"daybaoProManager",
  components: {
		"v-writePart": writePart,
		"v-reportPart": reportPart,
	},
  filters: {                    //时间转换
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    },
  data(){
      return{
      	value: new Date(),          //定义显示时间
        visible: false,
        startDate: new Date(),      //设置开始时间
        endDate: new Date('2019-01-22'),   //设置结束时间
      	dname:[
      		'张嘉欣','王志','章程'
      	],
				chnum:0,
				mss:false,
      }
  },
  created(){

  },
  methods:{
  	open(picker) {
        this.$refs[picker].open();    //设置开始
      },
  		chg(n){
  			this.chnum = n
  		},
  		openmss(){
  			this.mss = true;
  		},
  		clomss(){
  			this.mss = false;
  		},
  		toMydaybdetail(){
  			this.$router.push('/mydaybDetail?sty=dayProM')
  		},
  		tst(){
  			console.log(document.getElementById('pic').value)
  		}
  }
}