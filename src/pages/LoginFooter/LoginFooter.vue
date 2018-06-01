<template>
  <div class='foot'>
    <router-link to='/login' class="changeLogin" >
      <span>其他登录方式</span>
    </router-link>
    <slot name='register'>

    </slot>

  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .foot

    padding (0 40/$rem)
    .changeLogin
      display inline-block
      width 100%
      height (90/$rem)
      border 1px solid #b4282d
      text-align center
      color #b4282d
      span
        line-height (90/$rem)
    .register
      margin-top (32/$rem)
      display flex
      height (40/$rem)
      justify-content center
      align-items center
      font-size (24/$rem)
      color #333
      text-shadow none
      .arrow
        display inline-block
        height (24/$rem)
        vertical-align middle
        width (20/$rem)
        margin-top (5/$rem)
        margin-left (8/$rem)
        background url("./images/arrow.png") no-repeat
        background-size 100% 100%


</style>
