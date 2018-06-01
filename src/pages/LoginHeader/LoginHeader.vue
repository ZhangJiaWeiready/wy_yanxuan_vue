<template>
    <div class='wrap'>
      <header>
        <span class="home" @click="$router.replace('/firstpage/item?cateId=1022001')">
        </span>
        <span class="logo" @click="$router.replace('/firstpage/item?cateId=1022001')">
        </span>
        <div class='right'>
           <span class="search" @click="$router.push('/search')">
           </span>
          <span class="cate" @click="$router.replace('/shopcart')">
           </span>
        </div>
      </header>
    </div>
</template>

<script>
    export default {
        name: "login-header"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 375/10rem
  .wrap
    height (44/$rem)
    box-sizing border-box
    position fixed
    top 0
    left 0
    right 0
    z-index 10
    header
      position relative
      height (44/$rem)
      padding-left (12/$rem)
      padding-right (8/$rem)
      background #fafafa
      display flex
      align-items center
      justify-content space-between
      bottom-border-1px(#d9d9d9)
      span
        display inline-block
        background url("./images/sprite.png") no-repeat
      .home
        background-position-y (-37/$rem)
        width (24/$rem)
        height (22/$rem)
      .logo
        background-position-y (-62/$rem)
        width (86/$rem)
        height (27/$rem)
        margin-left (30/$rem)
      .right
        height (32/$rem)
        .search
          background-position-y (-166/$rem)
          width (32/$rem)
          height (32/$rem)
        .cate
          background-position-y (0/$rem)
          width (32/$rem)
          height (32/$rem)
          margin-left (8/$rem)
</style>
