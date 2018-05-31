import Vue from 'vue'
import VueRouter from 'vue-router'

import FirstPage from '../components/FirstPage/FirstPage'
import General from '../components/General/General'
import Classify from '../components/Classify/Classify'
import ShopCart from '../components/ShopCart/ShopCart'
import Personal from '../components/Personal/Personal'
import Search from '../components/Search/Search'
import Login  from '../components/Login/Login'
import PhoneLogin from '../components/PhoneLogin/PhoneLogin'
import EmailLogin from '../components/EmailLogin/EmailLogin'
import Register from '../components/Register/Register'
import EmailRegister from '../components/EmailRegister/EmailRegister'
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
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/phonelogin',
      component: PhoneLogin
    },
    {
      path: '/emaillogin',
      component: EmailLogin
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/emailregister',
      component: EmailRegister
    },
    {
      path: '/',
      redirect: '/firstpage'
    }
  ]
})
