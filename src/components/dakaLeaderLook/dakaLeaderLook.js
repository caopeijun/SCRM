import store from "@/vuex/store"
import reportPart from '../reportPart/index'
export default {
  name:"writeMessage",
  components: {
		"v-reportPart": reportPart,
	},
  data(){
      return{
      	dname:[
      		'张嘉欣','王志','章程'
      	],
      }
  },
  created(){
		this.$store.commit("submitReportPartType", 2);
    dd.ready(function(){
    dd.biz.navigation.setTitle({
      title : '外出人员记录',//控制标题文本，空字符串表示显示默认文
    });
  })
  },
  methods:{
  	dn(){
  		var dnm = document.getElementById('dnm').value;
  		if (dnm == '请选择部门'){
  			this.dname = ['张嘉欣','王志','章程']
  		} else if (dnm == '财务部') {
  			this.dname = ['张嘉欣','王志']
  		} else if (dnm == '信息部') {
  			this.dname = ['章程']
  		}
  	}
  }
}