<template>
    <div class='wrap'>
      <div class="top">
        <img src="./images/top1.jpg" alt="">
        <img src="./images/top2.jpg" alt="">
      </div>
      <div class="bottom">
        <img src="./images/bottom.jpg" alt="">
        <a href="" class="down-btn"></a>
        <router-link to='/firstpage/item?cateId=1022001'>
          <a href="" class="backwap-btn"></a>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "default-page"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    max-width 10rem
    background #eee
    position absolute
    top 0
    bottom 0
    .top,.bottom
      width 10rem
      margin 0 auto
      img
        vertical-align top
        width 100%
    .bottom
      position relative
      .down-btn
        display block
        position absolute
        top (96/$rem)
        left (160/$rem)
        width (432/$rem)
        height (98/$rem)
      .backwap-btn
        display block
        position absolute
        top (230/$rem)
        left (246/$rem)
        width (254/$rem)
        height (30/$rem)
</style>
