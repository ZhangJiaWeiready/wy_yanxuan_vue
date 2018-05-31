<template>
  <transition name='moveTo'>
    <div class="toUp" :class='{on:isShowToup}' @click='toTop'>
      <i class='toUpImg'></i>
    </div>
  </transition>


</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      props: {
        isShowToup: Boolean,
      },
      methods: {
        toTop (){
          this.$emit('totop')
        }
      }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .toUp
    display none
    /*opacity 0*/
    position fixed
    bottom (120/$rem)
    right (23/$rem)
    z-index 2
    .toUpImg
      display inline-block
      width (82/$rem)
      height (82/$rem)
      background url("./images/toup.png") no-repeat
    &.on
      display block
      /*opacity 1*/
    &.moveTo-enter-active, &.moveTo-leave-active
      transition all 10s
    &.moveTo-enter, &.moveTo-leave-to
      display block
</style>
