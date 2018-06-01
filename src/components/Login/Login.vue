<template>
  <div class='personal'>
    <LoginHeader/>
    <section class="logoText">
      <img src="./images/logotext.png" alt="">
    </section>
    <section class="loginButton">
      <router-link to='/phonelogin' class="item phoneLogin">
        <i class='phoneIcon'></i>
        <p>手机号码登录</p>
      </router-link>
      <router-link to='/phonelogin' class="item emailLogin">
        <i class='emailIcon'></i>
        <p>邮箱账号登录</p>
      </router-link>
      <router-link to='/register' class='register' >
          <span>手机号快速注册</span>
          <i class='registerIcon'></i>
        </router-link>
    </section>
    <section class='thirdWrap'>
        <span class='wx'>
          <i class='wxIcon'></i>
          <span>微信</span>
        </span>
      <span class='QQ'>
          <i class='QQIcon'></i>
          <span>QQ</span>
        </span>
      <span class='weibo'>
          <i class='weiboIcon'></i>
          <span>微博</span>
        </span>
    </section>
  </div>
</template>

<script>
  import LoginHeader from '../../pages/LoginHeader/LoginHeader'
  export default {
    data(){
      return{
      }
    },
    components:{
      LoginHeader
    },
    methods: {

    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 375/10rem
  .personal
    position relative
    width 100%
    height 100%
    .logoText
      height (45/$rem)
      padding (80/$rem 0)
      text-align center
      img
        display inline-block
        height 100%
    .loginButton
      padding (0 20/$rem)
      >.item
        height (45/$rem)
        border 1px solid #b4282d
        margin-bottom (16/$rem)
        text-align center
        vertical-align middle
        color #ffffff
        line-height (45/$rem)
        font-size (13/$rem)
        display flex
        justify-content center
        align-items center
        border-radius (5/$rem)
      .phoneLogin
        background #b4282d
        .phoneIcon
          background url("./images/loginMethod.png") no-repeat
          background-position-y (-25/$rem)
          display inline-block
          height (20/$rem)
          width (20/$rem)
          vertical-align middle
          margin-right (8/$rem)

      .emailLogin
        color #b4282d
        background #ffffff

        .emailIcon
          background url("./images/loginMethod.png") no-repeat
          background-position-y 0
          display inline-block
          height (20/$rem)
          width (20/$rem)
          margin-right (8/$rem)
      .register
        display inline-block
        width 100%
        font-size (13/$rem)
        line-height  (13/$rem)
        text-align center
        border 0
        color #333333
        span
          margin-left (26/$rem)
        .registerIcon
          display inline-block
          height (14/$rem)
          width (14/$rem)
          background url("./images/arrow.png") no-repeat
          margin-right (8/$rem)
          text-align center
          vertical-align middle
          margin-left (6/$rem)

    .thirdWrap
      font-size (14/$rem)
      position absolute
      width 100%
      bottom (40/$rem)
      text-align center
      color #666666
      >span
        padding (0 20/$rem)
        border-left 1px solid #666666
        &:first-of-type
          border 0
</style>
