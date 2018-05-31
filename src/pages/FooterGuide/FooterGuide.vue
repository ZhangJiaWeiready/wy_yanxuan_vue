<template>
    <!--通过设置meta来确定那个组件有那个组件隐藏-->
    <div id='guideWrap' v-show='$route.meta.showFooter'>
      <ul class='guideList'>
        <li @click="toPages('/firstpage')">
            <span :class="{active:$route.path==='/firstpage'}" ></span>
            <p>首页</p>
        </li>
        <li @click="toPages('/general')">
            <span :class="{active:$route.path==='/general'}" ></span>
            <p>识物</p>
        </li>
        <li @click="toPages('/classify')">
            <span :class="{active:$route.path==='/classify'}"></span>
            <p>分类</p>
        </li>
        <li @click="toPages('/shopcart')">
            <span :class="{active:$route.path==='/shopcart'}"></span>
            <p>购物车</p>
        </li>
        <li @click="toPages('/personal')">
            <span :class="{active:$route.path==='/personal'}"></span>
            <p>个人</p>
        </li>

      </ul>
    </div>
</template>

<script>
    export default {
        methods: {
          toPages (path){
            this.$router.push(path)
          }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  #guideWrap
    position fixed
    bottom 0
    z-index 10
    width 100%
    height (97/$rem)

    .guideList
      top-border-1px(#d9d9d9)
      clearFix()
      background-color #fafafa

      height 100%
      li
        display flex
        flex-direction column
        justify-content center
        align-items center
        font-size (24/$rem)
        width 20%
        float left
        height 100%
        >span
          display inline-block
          width (40/$rem)
          height (40/$rem)
          background url("./images/sprite.png")
          background-size 100%
        &:nth-of-type(1)
          span
            background-position-y (-5*50/$rem)
            &.active
              background-position-y (-4*50/$rem)
        &:nth-of-type(2)
          span
            background-position-y (-7*50/$rem)
            &.active
              background-position-y (-6*50/$rem)
        &:nth-of-type(3)
          span
            background-position-y (-3*50/$rem)
            &.active
              background-position-y (-2*50/$rem)
        &:nth-of-type(4)
          span
            background-position-y (-47/$rem)
            &.active
              background-position-y (0/$rem)
        &:nth-of-type(5)
          span
            background-position-y (-9*50/$rem)
            &.active
              background-position-y (-8*50/$rem)
</style>
