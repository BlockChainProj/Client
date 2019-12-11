import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Issue from '@/components/Issue'
import Transfer from '@/components/Transfer'
import Finace from '@/components/Finace'
import Settle from '@/components/Settle'
import List from '@/components/List'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/issue',
      name: '签发应收账款',
      component: Issue
    },
    {
      path: '/finace',
      name: '融资',
      component: Finace
    },
    {
      path: '/transfer',
      name: '转让',
      component: Transfer
    },
    {
      path: '/settle',
      name: '结算',
      component: Settle
    },
    {
      path: '/list',
      name: '列出清单',
      component: List
    },
  ],
  mode: 'history'
})
