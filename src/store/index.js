import Vue from 'vue';
import Vuex from 'vuex';
// import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // news: [],
        // ask: [],
        // jobs: [],
        user: {},
        itemid: {}, 
        list: []
    },
    //getters가 computed와 같은 속성인데 스토어에 있는 것이다. 
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },

        fetchedItem(state) {
            return state.itemid;
        }
    },
    mutations,
    actions
});