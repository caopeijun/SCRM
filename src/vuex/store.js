import Vue from 'vue'
import Vuex, { Store } from 'Vuex'
import { MessageBox } from 'mint-ui';

Vue.use(Vuex);

const store=new Vuex.Store({
    state: {
        user:{},
        // header Type
        reportPartType: 1,
        token: sessionStorage.token,
    },
    mutations:{
       submitReportPartType(state, type){
            state.reportPartType = type;
        },
    },
})
export default store