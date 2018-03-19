import Vue from 'vue'
import Router from 'vue-router'
import MainNav from '@/components/MainNav'
import JinjuList from '@/components/JinjuList'

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
            }
        ]
    },
    
  ]
})
