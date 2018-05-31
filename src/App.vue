<template>
  <div id='app'>
    <!--<HeaderList/>-->
      <router-view/>
    <FooterGuide v-show='isShowFooter'/>
  </div>
</template>

<script>
import FooterGuide from './pages/FooterGuide/FooterGuide'

export default {
  data (){
    return {
  }
  },
  components: {
    FooterGuide,
  },
  computed: {
    isShowFooter() {
      const path = this.$route.path
      if (path==='/search'||path==='/login' || (this.$route.path === '/emaillogin')
        || (this.$route.path === '/phonelogin')
        ||(this.$route.path === '/register')
        ||(this.$route.path === '/emailregister')){
        return false
      } else  {
        return true
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  $rem = 750/10rem
  #app
    height 100%
    width 100%



</style>
