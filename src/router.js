import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'home',
    component: resolve => require(['./components/layout.vue'], resolve),
    children: [{
      path: '/new-wallet',
      name: 'new-wallet',
      component: resolve => require(['./components/new-wallet'], resolve),
      meta: {
        title: 'Create New Wallet',
        description: ''
      }
    },
    {
      path: '/send-lbt',
      name: 'send-lbt',
      component: resolve => require(['./components/send-lbt'], resolve),
      meta: {
        title: 'Send LBT',
        description: ''
      },
      props: (route) => {
        return {
          accessParam: route.query.access,
          txAddressToParam: route.query.address,
          txAmountParam: route.query.amount,
          txGasLimitParam: route.query.gasLimit,
          txDataParam: route.query.data
        }
      }
    },
    {
      path: '/wallet-info',
      name: 'wallet-info',
      component: resolve => require(['./components/wallet-info'], resolve),
      meta: {
        title: 'Wallet Info',
        description: ''
      },
      props: (route) => {
        return {
          accessParam: route.query.access
        }
      }
    },
    {
      path: '/check-balance',
      name: 'check-balance',
      component: resolve => require(['./components/check-balance'], resolve),
      meta: {
        title: 'Check Balance',
        description: ''
      },
      props: (route) => {
        return {
          addressParam: route.query.address
        }
      }
    },
    {
      path: '/check-transaction',
      name: 'check-transaction',
      component: resolve => require(['./components/check-transaction'], resolve),
      meta: {
        title: 'Check Transaction',
        description: ''
      },
      props: (route) => {
        return {
          txHashParam: route.query.txHash
        }
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: resolve => require(['./components/faq'], resolve),
      meta: {
        title: 'FAQ',
        description: ''
      }
    }
    ],
    meta: {
      title: 'Home'
    }
  }]
})

export default router
