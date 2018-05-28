import Vue from 'vue'
import VueRouter from 'vue-router'

import FirstPage from '../components/FirstPage/FirstPage'
import General from '../components/General/General'
import Classify from '../components/Classify/Classify'
import ShopCart from '../components/ShopCart/ShopCart'
import Personal from '../components/Personal/Personal'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/firstpage',
      component: FirstPage
    },
    {
      path: '/general',
      component: General
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/',
      redirect: '/firstpage'
    }
  ]
})
