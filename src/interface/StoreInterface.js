import fetch from '@/interface/fetch';

const API = '/api';

export default {

    //获取店铺列表
    getStoreList(params = {}) {
        return fetch.get(API + '/shop/list', params).then(response => {
            if (response.code === 0) {
                return response.data;
            } else {
                return Promise.reject(response.message);
            }
        })
    },

    //增加店铺
    addStore(params) {
        return fetch.post(API + '/shop/create', params,'json').then(response => {
            if (response.code === 0) {
                return response.message;
            } else {
                return Promise.reject(response.message);
            }
        })
    },

    //删除店铺
    deleteStore(params){
        return fetch.post(API + '/shop/delete', params).then(response => {
            if (response.code === 0) {
                return response.message;
            } else {
                return Promise.reject(response.message);
            }
        })
    }

}
