import Vue from 'vue'
import Vuex, { Store } from 'Vuex'
import { MessageBox } from 'mint-ui';

Vue.use(Vuex);

const store=new Vuex.Store({
    state: {
        user:{},
        // header Type
        reportPartType: 1,//1代表显示工作日报的内容 2代表显示工作日报的打卡地点
        token: sessionStorage.token,
        rout:'',
    },
    mutations:{
       submitReportPartType(state, type){
            state.reportPartType = type;
        },
        rout(state, type){
            state.rout = type;
        },
        ctoken(state, type){
            state.token = type;
        },
    },
})
export default store