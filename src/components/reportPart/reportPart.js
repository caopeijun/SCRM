export default {
    name:"reportPart",
    data(){
        return{
        	records: [{
							"peopleImg": null,
							"name": '张嘉欣',
							"msg": '检查员工的工作进度并进行评论说明',
							"place":'山东临沂办事处',
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
							"place":'山东临沂办事处',
							"pic": [
								require('./images/ddpic.png'),
								require('./images/ddpic.png'),
							]
						},
						{
							"peopleImg": require("./images/touxiang.png"),
							"name": '张嘉欣',
							"msg": '检查员工的工作进度并进行评论说明',
							"place":'山东临沂办事处',
							"pic": [
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
    watch:{
    	
    },
    methods:{
    		handleScroll() {
					if ((document.getElementById('dt').offsetTop - window.pageYOffset) / 37.5 + 4.45 * this.records.length + 0.26 * this.records.length - document.body.clientHeight / 37.5 <= 0) {
						this.records.push({
							"peopleImg": null,
							"name": '张嘉欣',
							"msg": '检查员工的工作进度并进行评论说明',
							"place":'山东临沂办事处',
							"pic": [
								require('./images/ddpic.png'),
								require('./images/ddpic.png'),
								require('./images/ddpic.png')
							]
						}, {
							"peopleImg": require("./images/touxiang.png"),
							"name": '张嘉欣',
							"msg": '检查员工的工作进度并进行评论说明',
							"place":'山东临沂办事处',
							"pic": [
								require('./images/ddpic.png'),
								require('./images/ddpic.png'),
							]
						}, {
							"peopleImg": require("./images/touxiang.png"),
							"name": '张嘉欣',
							"msg": '检查员工的工作进度并进行评论说明',
							"place":'山东临沂办事处',
							"pic": [
								require('./images/ddpic.png'),
								require('./images/ddpic.png'),
								require('./images/ddpic.png')
							]
						})
					}
				},
    		toMydaybdetail() {
					this.$router.push('/mydaybDetail')
				},
    }
}