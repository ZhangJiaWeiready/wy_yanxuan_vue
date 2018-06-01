<template>
    <div class='firstWrap'>
      <FirstAlertTip/>
      <header class='firstHeader'>
        <div class="logo">
          <a href="javascript:;"></a>
          <div class='search'>
            <i class='searchIcon'  @click="$router.replace('/firstpage')"></i>
            <p  @click="$router.push('/search')">搜索商品，共9763款好物</p>
          </div>
        </div>
        <div class='navWrap'>
          <div class='navList'>
            <div class="tab active" @click='addClass' v-if='headCateList[0]'>
              <router-link :to="{path:`/firstpage/item?cateId=${headCateList[0].id}`}">
                <span>推荐</span>
              </router-link>

            </div>
            <div class="tab" @click='addClass'
                 v-for='(headerCate,index) in headCateList'
                 :key='index'
                  v-if='!(index===0||index===1||index===2)'
            >
              <router-link :to="{path:`/firstpage/item?cateId=${headerCate.id}`,} ">
                <span>{{headerCate.name}}</span>
              </router-link>

            </div>
          </div>
        </div>
      </header>
      <router-view></router-view>
      <transition name='moveCate'>
        <div class="cateShop" v-if="isShowCate&&($route.query.cateId==='1022001')">
          <i class='cateImg'></i>
        </div>
      </transition>
        <to-top :isShowToup='isShowToup' @totop='clickToTop'/>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapActions,mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import ToTop from '../../pages/ToTop/ToTop'
  import FirstAlertTip from '../../pages/FirstAlertTip/FirstAlertTip'
    export default {
        data (){
          return {
            isShowCate: false,
            isShowToup: false,
            num:0,

          }
        },
        methods: {
          handleScroll () {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (this.scrollTop >= document.documentElement.clientHeight){
              this.isShowToup = true
            } else{
              this.isShowToup = false
            }
          },
          // 点击到顶部
          clickToTop() {
            clearInterval(this.timer)
            this.timer = setInterval(()=>{
              document.documentElement.scrollTop -=100
              if (document.documentElement.scrollTop === 0) {
                clearInterval(this.timer)
              }
            },1)
          },
          // 设置倒计时
          /*num: function (n) {
            return n < 10 ? '0' + n : '' + n
          },*/
          // 顶部active点击切换
          addClass (event){

            const tabLis = document.querySelectorAll('.tab')
            for (let i=0; i<tabLis.length; i++){
              tabLis[i].className= 'tab'
            }
            event.target.className= 'tab active'

          },
          ...mapActions([
            'getHeadCateList',
          ]),
          },
        mounted (){
          window.addEventListener('scroll', this.handleScroll)
          this.isShowCate=true
          this.getHeadCateList(()=> {
            this.$nextTick(()=>{
              new BScroll('.navWrap', {
                scrollX: true,
                click: true
              })
            })
          })

        },

        components: {
          ToTop,FirstAlertTip
        },
        computed: {
          ...mapState([
            'headCateList',
          ])
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .firstWrap
    position relative
    height 100%
    font-size (28/$rem)
    margin-bottom (98/$rem)
    .firstHeader
      position fixed
      display flex
      flex-direction column
      top 0
      z-index 4
      width 100%
      font-size (28/$rem)
      background #ffffff
      .logo
        width 100%
        display flex
        align-items center
        padding (16/$rem 30/$rem)
        a
          width (138/$rem)
          height (40/$rem)
          margin-right (20/$rem)
          background url("./images/logo.png") no-repeat
          background-size 100%
        .search
          display flex
          height (56/$rem)
          width (532/$rem)
          justify-content center
          align-items center
          color #666
          background #ededed
          .searchIcon
            display inline-block
            width (28/$rem)
            height (28/$rem)
            background url("./images/search.png") no-repeat
            margin-right (10/$rem)
            background-size 100%
      .navWrap
        width 100%
        height (60/$rem)
        .navList
          height 100%
          float left
          display flex
          white-space nowrap
          padding (0 30/$rem)
          .tab
            float left
            line-height (60/$rem)
            margin-left (48/$rem)
            position relative
            &.active
              color #b4282d
              &:before
                position absolute
                content ''
                display block
                width 100%
                height (3/$rem)
                background #b4282d
                bottom (0/$rem)
                left 0
            &:first-of-type
              margin-left 0
            span
              padding (0 16/$rem)





    .cateShop
      position fixed
      bottom (240/$rem)
      right 0
      transform translateX(0)
      z-index 10
      .cateImg
        background url("./images/cate.png") no-repeat
        display inline-block
        width (112/$rem)
        height (80/$rem)
        background-size 100%
      &.moveCate-enter-active, &.moveCate-leave-active
        transition transform 1s
      &.moveCate-enter, &.moveCate-leave-to
        transform translateX(110%)


</style>
