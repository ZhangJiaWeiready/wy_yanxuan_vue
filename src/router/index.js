import Vue from 'vue'
import VueRouter from 'vue-router'

const FirstPage = () => import('../components/FirstPage/FirstPage')
const General = () => import('../components/General/General')
const Classify = () => import('../components/Classify/Classify')
const ShopCart = () => import('../components/ShopCart/ShopCart')
const Personal = () => import('../components/Personal/Personal')
const Search = () => import('../components/Search/Search')
const Login = () => import('../components/Login/Login')
const PhoneLogin = () => import('../components/PhoneLogin/PhoneLogin')
const EmailLogin = () => import('../components/EmailLogin/EmailLogin')
const Register = () => import('../components/Register/Register')
const EmailRegister = () => import('../components/EmailRegister/EmailRegister')
const GoodList = () => import('../components/FirstPage/GoodList/GoodList')
const DefaultPage = () => import('../components/DefaultPage/DefaultPage')
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
      ],

    },

    {
      path: '/general',
      component: General,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/default',
      component: DefaultPage,
      meta: {
        showFooter: false
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
      redirect: '/default',
    },

  ],
  /*scrollBehavior (to, from, savedPosition) {
     return { x: 0, y: 0 }
  }*/
})
