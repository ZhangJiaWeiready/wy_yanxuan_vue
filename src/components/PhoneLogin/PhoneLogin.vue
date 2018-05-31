<template>
  <div class="phoneWrap">
    <LoginHeader/>
    <login-logo/>
    <div class="codeLoginContainer" v-if='isCodeLogin'>
      <form action="#">
        <div class='inputWrap' >
          <input type="number" placeholder='请输入手机号' v-model='phoneNumber'>
          <i class='closeIcon' v-show='isShow' @click='clearInput'></i>
        </div>
        <div class="scrollCode">
          <div class='picSlider'>
            <img src="./images/bigPin.jpg" alt="" class='big'>
            <img src="./images/small.jpg" alt="" class='small'>
          </div>
          <div class="slider">
            <img src="./images/slider.png" alt="">
            <span>按住滑块，拖动完成上方拼图</span>
          </div>
        </div>
        <div class="codeLogin">
          <input type="text" placeholder='请输入短信验证码' class='inputcode' v-model='message'>
          <div class="getCode">
            <span>获取验证码</span>
          </div>
        </div>
        <div class="sendMsg">
          <span class='question'>遇到问题</span>
          <span class='clickLogin' @click='switchLogin'>使用验证码登陆</span>
        </div>
        <div class="loginbtn">
          <span>登录</span>
        </div>
      </form>
    </div>
    <div class="messageLoginContainer" v-if='!isCodeLogin'>
      <form action="">
        <div class="container">
          <div class="inputbox">
            <input type="number" placeholder='请输入手机号' v-model='phoneNumber'>
            <i class='closeIcon' v-show='isShow' @click='clearInput'></i>
          </div>
          <div class="inputbox">
            <input type="password" placeholder='请输入密码' v-model='password' >
            <i class='closeIcon' v-show='isShowPwd' @click='clearpassword'></i>
          </div>
          <div class="sendMsg">
            <span class='question'>忘记密码？</span>
            <span class='clickLogin' @click='switchLogin'>使用短信验证登录</span>
          </div>
        </div>
      </form>
    </div>
    <login-footer>
      <router-link to='/register' class='register' slot='register'>
        <span>注册账号</span>
        <i class='arrow'></i>
      </router-link>
    </login-footer>
  </div>
</template>

<script>
  import LoginHeader from '../../pages/LoginHeader/LoginHeader'
  import LoginLogo from '../../pages/LoginLogo/LoginLogo'
  import LoginFooter from '../../pages/LoginFooter/LoginFooter'
  export default {
    data(){
      return{
        phoneNumber: '',
        message: '',
        password: '',
        isCodeLogin: true


      }
    },
    components:{
      LoginHeader,
      LoginLogo,
      LoginFooter
    },
    methods: {
      clearInput (){
        this.phoneNumber= ''

      },
      clearpassword() {
        this.password= ''
      },
      switchLogin() {
        this.isCodeLogin= !this.isCodeLogin
      }
    },
    computed: {
      isShow(){
        const phoneNumber = this.phoneNumber.trim()

        if (phoneNumber){
          console.log(phoneNumber)
         return true
        } else{

        }

      },
      isShowPwd (){
        const password = this.password.trim()
        if (password){
          return true
        }else {
          return false
        }
      }
    }



  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .phoneWrap
    font-size (28/$rem)
    background #ffffff
    height 100%
    .codeLoginContainer
      position relative
      padding (80/$rem 40/$rem 0 40/$rem)
      margin-bottom (30/$rem)
      form
        background #ffffff
        .inputWrap
          padding-left (16/$rem)
          font-size (30/$rem)
          bottom-border-1px(#d9d9d9)
          height (90/$rem)
          >input
            display inline-block
            float left
            margin (24/$rem 0)
            width (590/$rem)
            outline none
            height (44/$rem)
            box-shadow none
          .closeIcon
            float right
            margin-top (24/$rem)
            display inline-block
            height (40/$rem)
            width (40/$rem)
            background url("./images/close.png") no-repeat
            background-size 100%
        .scrollCode
          margin-top (32/$rem)
          height (64/$rem)
          width (590/$rem)
          border-radius (64/$rem)
          border 1px solid #cbcbcb
          display flex
          align-items center
          background #F9F9F9
          .picSlider
            display none
            position absolute
            top 0
            height (184/$rem)
            width (590/$rem)
            background lightblue
            .big
              width 100%
              height 100%
            .small
              width (110/$rem)
              position absolute
              top (20/$rem)
          .slider
            display flex
            align-items center
            img
              height (59/$rem)
              width (133/$rem)
            span
              font-size (24/$rem)
              color #a8a8a8
              margin-left (80/$rem)

        .codeLogin
          height (90/$rem)
          margin-top (32/$rem)
          padding-left (16/$rem)
          display flex
          align-items center
          justify-content space-between
          .inputcode
            height (42/$rem)
            width (380/$rem)
            outline none
            box-shadow none
          .getCode
            border 1px solid #7F7F7F
            color #333
            font-size (28/$rem)
            width (164/$rem)
            height (54/$rem)
            background #ffffff
            text-align center
            line-height (54/$rem)
            margin-right (20/$rem)
            border-radius (8/$rem)
        .sendMsg
          height (40/$rem)
          padding (40/$rem 0 80/$rem 0)
          display flex
          justify-content space-between
          .question
            color #666
            font-size (28/$rem)
            line-height (40/$rem)
          .clickLogin
            color #333
            font-size (28/$rem)
            line-height (40/$rem)

        .loginbtn
          height (90/$rem)
          background #b4282d
          color #fff
          text-align center
          border-radius (8/$rem)
          margin-top (-40/$rem)
          span
            line-height (90/$rem)
    .messageLoginContainer
      padding (0 40/$rem)
      form
        .container
          margin-top (80/$rem)
          .inputbox
            padding-left (16/$rem)
            height (90/$rem)
            display flex
            align-items center
            font-size (28/$rem)
            color #333
            input
              box-shadow none
              outline none
              display inline-block
              width (590/$rem)
              height (42/$rem)
            .closeIcon
              float right
              margin-top (24/$rem)
              display inline-block
              height (40/$rem)
              width (40/$rem)
              background url("./images/close.png") no-repeat
              background-size 100%
          .sendMsg
            height (40/$rem)
            padding (40/$rem 0)
            padding-left (16/$rem)
            display flex
            justify-content space-between
            .question
              color #666
              font-size (28/$rem)
              line-height (40/$rem)
            .clickLogin
              color #333
              font-size (28/$rem)
              line-height (40/$rem)


</style>
