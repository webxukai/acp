import Vue from 'vue';
import Vuex from 'vuex';
// 引入公共的状态
import * as actions from './actions';
import state from './state';
import mutations from './mutations';
// 引入私有的状态


Vue.use(Vuex);

export default new Vuex.Store({
    state, // getters,
    mutations,
    actions,
    modules: {
        // 加载模块状态
    },

});
