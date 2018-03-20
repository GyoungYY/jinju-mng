import fetch from '@/interface/fetch';

const API = '/api';

export default {

    //获取金句列表
    getJinjuList(params = {}) {
        return fetch.get(API + '/admin/jinju/list', params).then(response => {
            if (response.code === 0) {
                return response.data;
            } else {
                return Promise.reject(response.message);
            }
        })
    },

    //通过金句
    passJinju(params) {
        return fetch.post(API + '/admin/jinju/audit', params, 'json').then(response => {
            if (response.code === 0) {
                return response.message;
            } else {
                return Promise.reject(response.message);
            }
        })
    },

    //驳回金句
    rejectJinju(params) {
        return fetch.post(API + '/admin/jinju/delete', params, 'json').then(response => {
            if (response.code === 0) {
                return response.message;
            } else {
                return Promise.reject(response.message);
            }
        })
    },

}
