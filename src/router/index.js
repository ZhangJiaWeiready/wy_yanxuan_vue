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
import GoodList from '../components/FirstPage/GoodList/GoodList'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/firstpage',
      component: FirstPage,
      meta: {
        showFooter: true
      },
      children:[
        {
          path: '/firstpage/item',
          component: GoodList,
          meta: {
            showFooter: true
          },
        }

      ]
    },
    {
      path: '/general',
      component: General,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,

      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/phonelogin',
      component: PhoneLogin,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/emaillogin',
      component: EmailLogin,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/emailregister',
      component: EmailRegister,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/',
      redirect: '/firstpage/item?cateId=1022001',
    },

  ],
  /*scrollBehavior (to, from, savedPosition) {
     return { x: 0, y: 0 }
  }*/
})
