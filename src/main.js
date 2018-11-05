// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload' // 图片懒加载
import './mock/mockServer.js'  // 直接引入mock
import loading from './common/images/loading.gif'
// import VueCountdown from '@xkeshi/vue-countdown'
import vvv
Vue.component(Button.name,Button) // <mt-button>
// 每次切换路由都到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
Vue.component('countdown', VueCountdown) // 全局注册countdown标签
// 注册使用 vueLazyload
Vue.use(VueLazyload,{
  loading
}) // 全局组件 有了v-lazy指令

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
