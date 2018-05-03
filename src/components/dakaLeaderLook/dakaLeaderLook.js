export default {
    name:"writeMessage",
    data(){
        return{
        	dname:[
        		'张嘉欣','王志','章程'
        	],
					records:[
						{
							"peopleImg":null,
							"name":'张嘉欣',
							"place":'山东临沂办事处',
							"pic":[
								require('./images/ddpic.png'),
								require('./images/ddpic.png'),
								require('./images/ddpic.png')
							]
						},
						{
							"peopleImg":require("./images/touxiang.png"),
							"name":'王志',
							"place":'山东临沂办事处',
							"pic":[
								require('./images/ddpic.png'),
								require('./images/ddpic.png'),
							]
						},
						{
							"peopleImg":require("./images/touxiang.png"),
							"name":'章程',
							"place":'山东临沂办事处',
							"pic":[
								require('./images/ddpic.png'),
								require('./images/ddpic.png'),
								require('./images/ddpic.png')
							]
						}
					]
        }
    },
    created(){

    },
    mounted:function(){
    	
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