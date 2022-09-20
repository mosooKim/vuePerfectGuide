import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
    // axios.get(config.basUrl+'/news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
    // axios.get(config.basUrl+'/news/1.json');
    try {
        //return await axios.get(`${config.baseUrl}ask/1.json`);
        const response = await axios.get(`${config.baseUrl}ask/1.json`); 
        return response;
    } catch (error) {
        console.log(error);
    }
    // return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    // axios.get(config.basUrl+'/news/1.json');
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemId(itemid) {
    return axios.get(`${config.baseUrl}item/${itemid}.json`)
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemId
}