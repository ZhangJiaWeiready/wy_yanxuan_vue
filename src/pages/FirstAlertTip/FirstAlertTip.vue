<template>
<div class="tipWrap" v-if='isShow'>
  <div class="mask" >

  </div>
  <div class="close" @click='close'>
    <img src="./images/close.png" alt="">
  </div>
  <div class="model">
    <section class='title'>--新人专项礼--</section>
    <section class='subtitle'>感谢使用网易严选, 已为你准备了一份专享礼</section>
    <section class='btn'></section>
    <div class="newUserItem">
      <div class="left">
        <img src="./images/newUser.jpg" alt="">
      </div>
      <div class="right">
        <div class="top">
          20寸PC拉链登机箱
        </div>
        <div class="middle">
          新秀丽制造商
        </div>
        <div class="bottom">
          <span class='newPrice'>￥249.00 </span>
          <span class='oldPrice'>￥599.00 </span>
        </div>
      </div>
    </div>
    <div class="youhui">
      <span>领券立减￥60.00</span>
    </div>
    <div class="more">
      <span>查看更多特惠商品</span>
    </div>
  </div>

</div>
</template>

<script>
    export default {
      data(){
        return {
          isShow: true,
        }
      },
        methods:{
          close(){
            console.log(111)
            this.isShow=!this.isShow
          }
        },

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .tipWrap
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    z-index 999
    .mask
      position absolute
      left 0
      right 0
      bottom 0
      top 0
      background rgba(0,0,0,.5)
    .close
      position fixed
      right (30/$rem)
      top (60/$rem)
      width (64/$rem)
      height (64/$rem)
      z-index 2
    .model
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      z-index 2
      background:#fff;
      width (582/$rem)
      height (632/$rem)
      padding (30/$rem 24/$rem)
      text-align center
      border-radius (50/$rem)
      .title
        font-weight 700
        font-size (38/$rem)
        line-height (60/$rem)
      .subtitle
        color #333
        font-size (26/$rem)
        margin-top (5/$rem)
        line-height 1.5
      .newUserItem
        margin-top (50/$rem)
        width 100%
        height (232/$rem)
        background #f4f4f4
        border-radius (8/$rem)
        .left
          height 100%
          width (232/$rem)
          float left
        .right
          float left
          width (280/$rem)
          height 100%
          margin-left (15/$rem)
          box-sizing border-box
          padding (43/$rem 0)
          text-align left
          .top
            font-size (28/$rem)
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .middle
            display inline-block
            font-size (24/$rem)
            border 1px solid #666
            border-radius (8/$rem)
            margin-top (30/$rem)
          .bottom
            margin-top (25/$rem)
            font-size (30/$rem)
            .newPrice
              color #b4282d
            .oldPrice
              color #999



      .youhui
        margin-top (40/$rem)
        width 100%
        text-align center
        height (88/$rem)
        background #b4282d
        font-size (28/$rem)
        border-radius (8/$rem)
        color #fff
        span
          line-height (88/$rem)
      .more
        height (88/$rem)
        margin-top (24/$rem)
        border 1px solid #7F7F7F
        text-align center
        color #333
        span
          line-height (88/$rem)
</style>
