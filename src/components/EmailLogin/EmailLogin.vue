<template>
<div class='wrap'>
 <login-header/>
  <login-logo/>
  <div class="emailLoginContainer">
    <form action="">
      <div class="container">
        <div class="inputbox">
          <input type="email" placeholder='邮箱账号' v-model='emailNumber'>
          <i class='closeIcon' v-show='isShow' @click='clearEmail'></i>
        </div>
        <div class="inputbox">
          <input type="password" placeholder='密码' v-model='emailPwd' >
          <i class='closeIcon' v-show='isShowPwd' @click='clearPwd'></i>
        </div>
        <div class="sendMsg">
          <router-link to='/register' class='register'>注册账号</router-link>
          <a href='https://reg.163.com/naq/findPassword#/verifyAccount' class='forgetPwd'>忘记密码</a>
        </div>
        <div class="loginbtn">
          <span>登录</span>
        </div>
      </div>
    </form>
  </div>
  <login-footer/>
</div>
</template>

<script>
  import LoginHeader from '../../pages/LoginHeader/LoginHeader'
  import LoginLogo from '../../pages/LoginLogo/LoginLogo'
  import LoginFooter from '../../pages/LoginFooter/LoginFooter'
  export default {
    data(){
      return{
        emailNumber: '',
        emailPwd: ''
      }
    },
    components:{
      LoginHeader,
      LoginLogo,
      LoginFooter
    },
    methods: {
      clearEmail(){
        this.emailNumber= ''
      },
      clearPwd (){
        this.emailPwd= ''
      }
    },
    computed: {
      isShow() {
        const emailNumber = this.emailNumber.trim()
        if (emailNumber){
          return true
        }else {
          return false
        }
      },
      isShowPwd(){
        const emailPwd = this.emailPwd.trim()
        if (emailPwd){
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
.wrap
  background #fff
  height 100%
  font-size (28/$rem)
  .emailLoginContainer
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
          .register
            color #666
            font-size (26/$rem)
            line-height (40/$rem)
          .forgetPwd
            color #333
            font-size (26/$rem)
            line-height (40/$rem)

        .loginbtn
          height (90/$rem)
          background #b4282d
          color #fff
          text-align center
          border-radius (8/$rem)
          margin-bottom (40/$rem)
          span
            line-height (90/$rem)
</style>
