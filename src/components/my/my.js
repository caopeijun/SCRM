import footer from '../footer'
export default {
  name:"my_salesman",
 	components:{
    "v-footer":footer,
  },
  data(){
    return{
    	manhead:require('./img/head.png'),
    	man:'张嘉欣',
    	list:[1],
    	info:[1,2,3,4],
    }
  },
  created(){
  	dd.ready(function(){
    dd.biz.navigation.setTitle({
      title : '我的页面',//控制标题文本，空字符串表示显示默认文
    });
  })
  },
  methods:{
  	toLogin(){
  		this.$router.push('/login')
  	},
    tomynews(){
      this.$router.push('/mynews')
    },
    toaccounts(){
      this.$router.push('/accounts_receivable?from=my')
    },
  },
}