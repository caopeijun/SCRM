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
    mounted: function() {
			window.addEventListener('scroll', this.handleScroll)
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		},
    methods:{
    	handleScroll() {
			var scroll = window.pageYOffset / 37.5
			var i = 0;
			console.log(scroll)
			if(((this.records.length - 1 - (i * 3)) * 176 + 110 - 615)/37.5 <= scroll + i/37.5) {
				
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