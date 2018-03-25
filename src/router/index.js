import Vue from 'vue'
import Router from 'vue-router'
import MainNav from '@/view/MainNav'
import JinjuList from '@/view/jinju/JinjuList'

import StoreManage from '@/view/stores/StoreManage'

import GoodsList from '@/view/goods/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainNav',
      component: MainNav,
      redirect: '/jinjuList',
        children: [
            {
                path: 'jinjuList',
                name: 'JinjuList',
                component: JinjuList,
            },
            {
                path: 'storeManage',
                name: 'StoreManage',
                component: StoreManage,
            },
            {
                path: 'goodsList',
                name: 'GoodsList',
                component: GoodsList,
            },
        ]
    },
    
  ]
})
