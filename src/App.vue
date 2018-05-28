<template>
  <div id='app'>
    <!--<HeaderList/>-->
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './pages/FooterGuide/FooterGuide'
import HeaderList  from './pages/HeaderList/HeaderList'
export default {
  components: {
    FooterGuide,
    // HeaderList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">



</style>
