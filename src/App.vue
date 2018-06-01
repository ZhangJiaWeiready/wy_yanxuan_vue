<template>
  <div id='app'>
    <!--<HeaderList/>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './pages/FooterGuide/FooterGuide'
import {mapActions} from 'vuex'
export default {
  data (){
    return {
  }
  },
  components: {
    FooterGuide,
  },
  computed: {

  },
 /* methods:{
    menu() {
      window.scrollTo(0,0);
    },
  },
  created(){
    this.menu();
  }*/

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  $rem = 750/10rem
  #app
    height 100%
    width 100%



</style>
