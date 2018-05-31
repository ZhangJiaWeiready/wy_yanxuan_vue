<template>
    <div class='cartWrap'>
      <header>
        <span>
          购物车
        </span>
      </header>
      <section class='promise'>
        <div class='msg'>
          <i></i>
          <span>30天无忧退货</span>
        </div>
        <div class='msg'>
          <i></i>
          <span>48小时快速退款</span>
        </div>
        <div class='msg'>
          <i></i>
          <span>满88元满邮费</span>
        </div>
      </section>
      <section class='content'>
        <div class="img">
          <img src="./images/null.png" alt="">
          <span>去添加点什么吧</span>
        </div>
        <div class="login" @click="toLogin" v-if='!isLogin'>
          <span>
            登录
          </span>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            isLogin: false
          }
        },
        methods: {
          toLogin () {
            this.$router.push('/login')
          }
        },
        mounted(){
          window.scrollTo(0,0);
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .cartWrap
    font-size (28/$rem)
    header
      color #333
      font-size (38/$rem)
      height (88/$rem)
      background #ffffff
      text-align center
      line-height (88/$rem)
    .promise
      height (80/$rem)
      padding (0 30/$rem)
      display flex
      justify-content space-around
      align-items center
      color #666
      font-size (24/$rem)
      .msg
        i
          display inline-block
          width (10/$rem)
          height (10/$rem)
          background url("./images/flag.png") no-repeat
          vertical-align middle
        span
          vertical-align middle
    .content
      position absolute
      top (88/$rem)
      bottom 0
      left 0
      right 0
      .img
        margin (498/$rem 0)
        text-align center
        display flex
        flex-direction column
        align-items center
        img
          width (248/$rem)
          height (248/$rem)
          margin-bottom (8/$rem)
        span
          color #7f7f7f

      .login
        margin-top (-498/$rem)
        width 100%
        height (170/$rem)
        display flex
        justify-content center
        align-items center
        span
          display inline-block
          width (480/$rem)
          height (92/$rem)
          background #b4282d
          font-size (38/$rem)
          color #ffffff
          text-align center
          line-height (92/$rem)
          vertical-align middle
</style>
