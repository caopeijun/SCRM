export default {
  name:"mynews",
 
  data(){
    return{
    	infos:[
    		{
    			name:'山东橡胶有限公司',
    			num:'FGJ326584KHN6',
    			part:'山东烟台',
    			state:0,
    			reason:'社会信用代码与营业执照不符',
    		},
    		{
    			name:'山东橡胶有限公司',
    			num:'FGJ326584KHN6',
    			part:'山东烟台',
    			state:1,
    		},
    	]
    }
  },
  created(){
  	dd.ready(function(){
    dd.biz.navigation.setTitle({
      title : '我的消息',//控制标题文本，空字符串表示显示默认文
    });
  })
  },
  methods:{
  
    
  },
}