<template>
    <div class='personalWrap'>
      <section class="header">
        <div class="myProfile">
          <div class="left">
            <img src="./images/avator.png" alt="">
            <div class="info">
              <div class="nickName"><span>15835483075</span></div>
              <div class='memberTitle'><span>普通用户</span></div>
            </div>
          </div>
          <transition name='move' >
            <div class="right" @click='move'>
              <div class="bg">
                <div class="left">
                  <i class='icon'></i>
                </div>
                <div class="right">
                  <div class="top">
                    超级会员
                  </div>
                  <div class="tryuse">
                    <span>立即试用 <i class='arrow'></i></span>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </section>
      <section class="userMsg">
        <ul>
          <li v-for='(item,index) in infos' :key='index'>
            <div class="content">
              <i class='sprite'></i>
              <div class="text">
                {{item}}
              </div>
            </div>
          </li>
        </ul>
      </section>
      <mt-button class='btn' type="danger" style="width: 100%"  @click='logOut' >退出登陆</mt-button>
    </div>
</template>

<script>
  import Login from '../Login/Login'
  import {MessageBox, Toast} from 'mint-ui'
    export default {
        data() {
          return {
            infos: ['我的订单','周六一起拼','售后服务','优惠卷','我的红包','优先购','礼品卡'
              ,'积分中心','会员俱乐部','地址管理','账号安全','联系客服','帮助中心','意见反馈']
          }
        },
      methods: {
        logOut (){
          MessageBox.confirm('确认退出吗？').then(
            // 确定
            action => {
              // 请求退出
              // this.$store.dispatch('logOut')
              Toast({
                position: 'bottom',
                message: '已退出',
                duration: 2000

              })
              this.$router.replace('/login')
            },
            // 取消
            action => {
              console.log('点击了取消')
            }
          );
        },
        move(){
          setTimeout(()=>{
            const right = document.querySelector('.header .right')
            right.style.transform= 'translateX(100%)'
          },1000)
        }
      },

      mounted () {
          /*setTimeout(()=>{
            const right = document.querySelector('.header .right')
            right.style.transform= 'translateX(0)'
          },1000)*/
      },
        components: {

        },

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .personalWrap
    height 100%
    width 100%
    overflow hidden
    font-size (28/$rem)
    color #333
    margin-bottom (98/$rem)
    .header
      height (270/$rem)
      color #fff
      background url("./images/background.png") no-repeat
      background-size 100%
      .myProfile
        height 100%
        padding-left (30/$rem)
        position relative
        .left
          float left
          width (510/$rem)
          height 100%
          box-sizing border-box
          padding (64/$rem 0)
          display flex
          align-items center
          line-height 1
          overflow hidden
          img
            width (142/$rem)
            height (142/$rem)
            border-radius 50%
          .info
            margin-left (30/$rem)
            .nickName
              margin-bottom (10/$rem)
              font-size (34/$rem)
              line-height 1.2
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            .memberTitle
              span
                font-size (28/$rem)
                vertical-align middle
        .right
          float right
          margin-left (17/$rem)
          width (193/$rem)
          height 100%

          &.move-leave-active
            transition transform 10s
          &.move-leave-to
            transform translateX(100%)
          .bg
            width (203/$rem)
            height (84/$rem)
            margin-top (104/$rem)
            background #444
            overflow hidden
            border-bottom-left-radius (84/$rem)
            border-top-left-radius (84/$rem)
            display flex
            align-items center
            .left
              width (56/$rem)
              height (57/$rem)
              margin (0 10/$rem)
              padding 0
              i
                display inline-block
                padding 0
                width (56/$rem)
                height (56/$rem)
                background url("./images/sprite.png") no-repeat
                background-size 120%
                background-position-y (-67/$rem)
            .right
              box-sizing border-box
              padding (15/$rem 0)
              display flex
              flex-direction column
              justify-content space-between
              .top
                color #EDE7DB
                font-size (26/$rem)
              .tryuse
                font-size (20/$rem)
                i
                  background url("./images/arrow.png") no-repeat
                  background-size 100%
                  display inline-block
                  width (18/$rem)
                  height (18/$rem)
                  margin-left (5/$rem)
    .userMsg
      width 100%
      height (904/$rem)
      margin-bottom (40/$rem)
      background #fff
      ul
        width 100%

        li
          float left
          width 33.333%
          height (180/$rem)
          .content
            padding-top (45/$rem)
            display flex
            flex-direction column
            align-items center
            .text
              font-size (24/$rem)
              color #333
              line-height 1
            .sprite
              background url("./images/sprite.png") no-repeat
              display inline-block
              width (50/$rem)
              height (50/$rem)
              margin-bottom (16/$rem)
          &:nth-of-type(1)
            .sprite
              background-position-y (-640/$rem)
          &:nth-of-type(2)
            .sprite
              background-position-y (-752/$rem)
          &:nth-of-type(3)
            .sprite
              background-position-y (-224/$rem)
          &:nth-of-type(4)
            .sprite
              background-position-y (-280/$rem)
          &:nth-of-type(5)
            .sprite
              background-position-y (-932/$rem)
          &:nth-of-type(6)
            .sprite
              background-position-y (-876/$rem)
          &:nth-of-type(7)
            .sprite
              background-position-y (-405/$rem)
          &:nth-of-type(8)
            .sprite
              background-position-y (-812/$rem)
          &:nth-of-type(9)
            .sprite
              background-position-y (-696/$rem)
          &:nth-of-type(10)
            .sprite
              background-position-y (-160/$rem)
          &:nth-of-type(11)
            .sprite
              background-position-y (-990/$rem)
          &:nth-of-type(12)
            .sprite
              background-position-y (-515/$rem)
          &:nth-of-type(13)
            .sprite
              background-position-y (-460/$rem)
          &:nth-of-type(14)
            .sprite
              background-position-y (-340/$rem)
    .btn
      font-size (32/$rem)
      height (98/$rem)
</style>
