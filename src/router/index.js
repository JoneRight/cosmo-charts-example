import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import childLayout from '@/views/Layout/childLayout'
import Index from '../components/Index'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404',
      component: _import('errorPage/404')
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          component: _import('index/Index')
        },
        {
          path: '/yunshang',
          component: _import('yunshangIndex/YunIndex')
        },
        {
          path: '/smartoperate',
          component: _import('yunshangIndex/SmartProductsIndex')
        },
        {
          path: '/vehicle',
          component:_import('vehicle/vehicles')
        },
        {
          path: '/Uplus',
          component: _import('Uplus/Index')
        },
        {
          path:'/chart',
          component: _import('chartData/Index')
        },
        {
          path:'/lbip',
          component:_import('lbip/Index')
        },
        {
          path:'/per',
          component:_import('operation/Index')
        },
        {
          path:'/inter',
          component:_import('internet/Index')
        },
        {
          path:'/console',
          component:_import('consumption/Index')
        },

      ]
    },
    {
      name: 'childLayout',
      path: '/',
      component: childLayout,
      children: [
        {
          path: '/logistics',
          component: _import('Logistics/Index')
        },
        {
          path: '/industrialPlant',
          component: _import('industrialPlant/Index')
        },
        {
          path: 'appliances',
          component: _import('appliances/Index')
        }
      ]
    }
  ]
})
