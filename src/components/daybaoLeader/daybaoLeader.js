import reportPart from '../reportPart/index'
export default {
  name:"dakaLeaderLook",
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

  },
  methods:{
  	totranslate(){
  		this.$router.push('/translate')
  	},
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