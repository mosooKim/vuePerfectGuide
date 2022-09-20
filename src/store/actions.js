import { 
    fetchList ,
    fetchUserInfo, 
    fetchItemId, 
    // fetchNewsList,
    // fetchAskList,
    // fetchJobsList
} from '../api/index.js';

export default {
    //promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             console.log(response.data);
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    //async
    // async FETCH_NEWS(context) {
    //     const response = await fetchNewsList();
    //     context.commit('SET_NEWS', response.data);
    //     return response;
    // },

    //promise
    // FETCH_ASK(context) {
    //     return fetchAskList()
    //         .then(response => {
    //             console.log(response.data);
    //             context.commit('SET_ASK', response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    //async
    // async FETCH_ASK(context) {
    //     const response = await fetchAskList();
    //     context.commit('SET_ASK', response.data);
    //     return response;
    // },

    //promise
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    //async
    // async FETCH_JOBS(context) {
    //     try {
    //         const response = await fetchJobsList();
    //         context.commit('SET_JOBS', response.data);
    //         return response;   
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },

    //promise
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    //async
    async FETCH_USER(context) {
        const response = await fetchUserInfo();
        context.commit('SET_USER', response.data);
        return response;
    },

    // FETCH_ITEMID({ commit }, id) {
    //     return fetchItemId(id)
    //         .then(({ data }) => {
    //             commit('SET_ITEMID', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    async FETCH_ITEMID(context) {
        const response = await fetchItemId();
        context.commit('SET_ITEMID', response.data);
        return response;
    },

    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(response => {
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error));
    // },

    async FETCH_LIST(context) {
        const response = await fetchList();
        console.log(4);
        console.log(response);
        context.commit('SET_LIST', response.data);
        return response;
    }
}