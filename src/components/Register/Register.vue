<template>
    <div class='registerWrap'>
      <login-header/>
      <div class='title'>
        <span>手机号注册</span>
      </div>
      <div class="content">
        <form action="#">
          <div class='inputBox' >
            <input type="tel" maxlength="11" placeholder='请输入手机号' v-model='phoneNumber'>
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
            <input type="text" maxlength="6" placeholder='请输入短信验证码' class='inputcode' v-model='message'>
            <div class="getCode">
              <span>获取验证码</span>
            </div>
          </div>
          <div class='inputBox' >
            <input type="password" placeholder='请输入密码' v-model='password'>
            <i class='closeIcon' v-show='isShow' @click='clearpassword'></i>
          </div>
          <div class="registerbtn" @click='toPersonal'>
            <span>注册</span>
          </div>
        </form>
        <div class="agree">
          <p>
            我同意
            <a href='https://reg.163.com/agreement_mobile_wap.shtml?v=20171127'>
              《服务条款》
            </a>
            和
            <a href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127">
              《同意隐私政策》
            </a>
          </p>
        </div>
        <router-link to='/emailregister' class='register'>
          <span>邮箱账号注册</span>
          <i class='arrow'></i>
        </router-link>
      </div>
      <AlertTip :alertText='alertText' v-if='alertShow' @closeTip='closeTip'/>
    </div>
</template>

<script>
  import LoginHeader from '../../pages/LoginHeader/LoginHeader'
  import AlertTip from '../../pages/AlertTip/AlertTip'
    export default {
        data (){
          return {
            phoneNumber: '',
            password: '',
            message:'',
            alertText: '',
            alertShow: false
          }
        },
        components: {
          LoginHeader,
          AlertTip
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
      },
        methods: {
          // 改变状态
          changeShow (Text){
            this.alertText= Text
            this.alertShow= true
          },
          //当点击提示框确认时
          closeTip() {
            this.alertText=''
            this.alertShow=false
          },
          toPersonal() {
            const {phoneNumber,message} = this
            if (phoneNumber==='') {
              this.changeShow('手机号不为空')
              // 直接return不执行下面的
              return
            }else if(/^1\d{10}$/.test(phoneNumber)){
              this.changeShow('请输入正确的手机号码')
              // 直接return不执行下面的
              return
            }else if (message === ''){
              this.changeShow('验证码不为空')
              // 直接return不执行下面的
              return
            }else if (!/^\d{6}$/.test(message)){
              this.changeShow('请输入六位数验证码')
              // 直接return不执行下面的
              return
            }else if (password === ''){
              this.changeShow('密码不为空')
              // 直接return不执行下面的
              return
            }else if (!/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.use(password)){
              this.changeShow('最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符')
              // 直接return不执行下面的
              return
            }  else{
              Toast({
                position: 'bottom',
                message: '注册成功',
                duration: 2000
              })
              this.$router.replace('/personal')
            }
          },
          clearInput (){
            this.phoneNumber= ''

          },
          clearpassword() {
            this.password= ''
          },
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .registerWrap
    background #ffffff
    height 100%
    font-size (28/$rem)
    .title
      font-size (36/$rem)
      width 100%
      height (50/$rem)
      padding-top (40/$rem)
      text-align center
      span
        line-height (50/$rem)
    .content
      position relative
      padding (80/$rem 40/$rem 0 40/$rem)
      margin-bottom (30/$rem)
      form
        background #ffffff
        color #333
        font-size (28/$rem)
        margin-bottom (40/$rem)
        .inputBox
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
          bottom-border-1px(#d9d9d9)
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
        .registerbtn
          display inline-block
          width 100%
          height (90/$rem)
          background #b4282d
          color #fff
          text-align center
          border-radius (8/$rem)
          margin-top (40/$rem)
          margin-bottom (22/$rem)
          span
            line-height (90/$rem)
      .agree
        width 100%
        height (20/$rem)
        p
          color #7f7f7f
          font-size (24/$rem)
          a
            color #007AFF
      .register
        margin-top (56/$rem)
        display flex
        height (40/$rem)
        justify-content center
        align-items center
        font-size (26/$rem)
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
