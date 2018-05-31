<template>
    <div class='firstWrap'>
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
            <div class="tab active" @click='addClass'>
              <span>推荐</span>
            </div>
            <div class="tab" @click='addClass'
                 v-for='(headerCate,index) in headCateList'
                 :key='index'
                  v-if='!(index===0||index===1||index===2)'
            >
              <span>{{headerCate.name}}</span>
            </div>
          </div>
        </div>
      </header>
      <section class='carouselNav'>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(focus, index) in focusList' :key='index'>
              <img :src="focus.picUrl" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="wySure">
          <ul class='sureList'>
            <li v-for='(policy,index) in policyDescList' :key='index'>
              <img :src="policy.icon" alt="">
              <span class='text'>{{policy.desc}}</span>
            </li>
          </ul>
        </div>
      </section>
      <section class='firstContent'>
        <section class="productShop">
          <div class="shopTop">
            <span class='textWrap'>
              <span class='text'>
                品牌制造商直供
              </span>
              <i class='icon'></i>
            </span>
          </div>
          <div class="shopContent">
            <ul class="shopList">
              <li v-for='(tag,index) in tagList' :class='index' v-if='index<4'>
                <div class='text'>
                  <h4 >{{tag.name}}</h4>
                  <p>{{tag.floorPrice}}元起</p>
                </div>
                <img :src="tag.picUrl" alt="">
              </li>
            </ul>
          </div>
        </section>
        <first-item-list :newItem='newItem'/>
        <first-item-list :popularItem='popularItem'/>
        <section class="timeBuy">
          <div class="buyLeft">
            <span class="title">
              严选限时购
            </span>
            <section class="countdown">
              <span class="hour">
                {{hours}}
              </span>
              <p>:</p>
              <span class="minute">
                {{minites}}
              </span>
              <p>:</p>
              <span class="seconds">
                {{count}}
              </span>
            </section>
            <section class="buyBottom">
              下一场 {{olock}}:00 开始
            </section>
          </div>
          <div class="buyRight">
            <img :src="flashSaleIndexVO.primaryPicUrl" alt="">
            <div class="price">
              <span class="nowPrice">
                ￥{{flashSaleIndexVO.activityPrice}}
              </span>
              <span class="oldPrice">
                ￥{{flashSaleIndexVO.originPrice}}
              </span>
            </div>
          </div>
        </section>
        <section class='welfareTeam'>
          <img :src="saleIndexVO.picUrl" alt="">
        </section>
        <section class="goodSelect">
          <section class="selectTop">
            <span class='textWrap'>
              <span class='text'>
                专题精选
              </span>
              <i class='icon'></i>
            </span>
          </section>
          <section class="selectBottom">
            <div class="picWrap">
              <ul>
                <li v-for='(topic,index) in topicList' :key='index'>
                  <img :src="topic.itemPicUrl" alt="">
                  <div class="text">
                    <div class="textLeft">
                      <h4>{{topic.title}}title</h4>
                      <p>{{topic.subtitle}}</p>
                    </div>
                    <div class="textRight">
                      {{topic.priceInfo}}元起
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </section>
        </section>
      </section>
      <good-class-list/>
      <frist-page-bottom/>
      <transition name='moveCate'>
        <div class="cateShop" v-if='isShowCate'>
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
  import GoodClassList from '../../pages/GoodClassList/GoodClassList'
  import FristPageBottom from '../../pages/FristPageBottom/FristPageBottom'
  import ToTop from '../../pages/ToTop/ToTop'
  import FirstItemList from '../../pages/FirstItemList/FirstItemList'
    export default {
        data (){
          return {
            isShowToup: false,
            isShowCate: false,
            newItem: 'newItem',
            popularItem: 'popularItem',
            count:30
          }
        },
        methods: {
          // 顶部active点击切换
          addClass (event){
            const tabLis = document.querySelectorAll('.tab')
            for (let i=0; i<tabLis.length; i++){
              tabLis[i].className= 'tab'
            }
            event.target.className= 'tab active'

          },
          // 水平滑动
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
          timeOver() {
            // let {seconds,minutes,hours} = this
            let {count} = this
            window.clearInterval(timer)
            let timer = window.setInterval(()=>{
              // seconds -= 1
              /*if (seconds ===0){
                seconds = 59
                minutes -= 1
                if (minutes === 0){
                  minutes = 59
                  hours -= 1
                  if (hours === 0){
                    hours = 60
                  }
                }
                if (hours === 0 && minutes ===0 && seconds === 0){
                  window.clearInterval(timer)
                }
              }*/
              count -=1
              /*if(seconds===0){
                window.clearInterval(timer)
              }*/
              if(count===0){
                window.clearInterval(timer)
              }
              console.log(count)
            },1000)
          },

          ...mapActions([
            'getFlashSaleIndexVO',
            'getFocusList',
            'getHeadCateList',
            'getPolicyDescList',
            'getSaleIndexVO',
            'getTagList',
            'getTopicList'
          ]),
        },

        mounted (){
         /* this.$nextTick(()=>{
            this.timeOver()
            console.log(1+this.second)
          })*/
          this.timeOver()
          this.isShowCate=true
          window.addEventListener('scroll', this.handleScroll)
          this.getFlashSaleIndexVO()
          this.getFocusList(()=> {
            this.$nextTick(()=>{
              new Swiper('.swiper-container',{
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                  type: 'bullets',

                }
              })
            })
          })
          this.getHeadCateList(()=> {
            this.$nextTick(()=>{
              new BScroll('.navWrap', {
                scrollX: true,
                click: true
              })
            })
          })
          this.getPolicyDescList()
          this.getSaleIndexVO()
          this.getTagList()
          this.getTopicList(()=> {
            this.$nextTick(()=>{
              new BScroll('.goodSelect > .selectBottom > .picWrap', {
                scrollX: true,
                click: true,
                eventPassthrough: 'vertical'
              })
              })
            })
        },
      /*  watch:{
            second:{
              handler (newVal){
                console.log(2+ newVal)
                this.num(newVal)
              }
            },
            hour:{
              handler (newVal){
                this.num(newVal)
              }
            },
            minite:{
              handler (newVal){
                this.num(newVal)
              }
            }
        },*/
        components: {
          GoodClassList,
          ToTop,
          FristPageBottom,
          FirstItemList
        },
        computed: {
          date () {
            return this.flashSaleIndexVO.remainTime
          },
          minites (){
            return new Date(this.date).getMinutes()
          },
          hours (){
            return new Date(this.date).getHours()
          },
          seconds (){
            return  new Date(this.date).getSeconds()
          },
          olock(){
            let olock = this.flashSaleIndexVO.nextStartTime
            olock = new Date(olock)

            return olock.getHours()
          },
          /*hour(){
            console.log(this.hours)
            return this.num(this.hours)

          },
          second(){
            return this.num(this.seconds)
          },
          minite(){
            return this.num(this.minites)
          },*/

          ...mapState([

            'flashSaleIndexVO',
            'focusList',
            'headCateList',
            'newItemList',
            'policyDescList',
            'popularItemList',
            'saleIndexVO',
            'tagList',
            'topicList'
          ])
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .firstWrap
    position relative
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
    .carouselNav
      margin-top (148/$rem)
      margin-bottom (20/$rem)
      width 100%
      background #ffffff
      .swiper-container
        height (400/$rem)
        .swiper-slide
          img
            height (400/$rem)
        .swiper-pagination
          margin-bottom (30/$rem)
          .swiper-pagination-bullet
            background #ffffff
            opacity 0.4
            height (4/$rem)
      .wySure
        font-size (24/$rem)
        height (72/$rem)
        width 100%
        color #333333
        bottom-border-1px(#d9d9d9)
        background #ffffff
        ul
          display flex
          align-items center
          height 100%
          width 100%
          padding (0 30/$rem)
          box-sizing border-box
          li
            float left
            display flex
            flex 1
            align-items center
            img
              width (32/$rem)
              height (32/$rem)
              vertical-align middle
            .text
              margin-left (8/$rem)
              vertical-align middle
    .firstContent
      width 100%
      overflow hidden
      .productShop
        background #ffffff
        margin-bottom (20/$rem)
        .shopTop
          height (110/$rem)
          font-size (32/$rem)
          text-align center
          color #333333
          .textWrap
            height (48/$rem)
            text-align center
            line-height (48/$rem)
            .text
              white-space nowrap
              line-height (110/$rem)
              vertical-align middle
            .icon
              background url("./images/right_icon.png") no-repeat
              background-size 100%
              display inline-block
              width (30/$rem)
              vertical-align middle
              height (30/$rem)
              margin-left (10/$rem)
        .shopContent
          width 100%
          font-size (28/$rem)
          color #333333
          padding-bottom (8/$rem)
          overflow hidden
          .shopList
            padding (0 16/$rem)
            width 100%
            box-sizing border-box
            clearFix()
            li
              margin-right (8/$rem)
              margin-bottom (8/$rem)
              background #f4f4f4
              width (355/$rem)
              height (236/$rem)
              float left
              .text
                position absolute
                z-index 0
                padding-top (20/$rem)
                padding-left (20/$rem)
                h4
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                  margin-bottom (6/$rem)
                  line-height (34/$rem)
              img
                width 100%
                height 100%
              &:nth-of-type(2)
                margin-right 0
              &:nth-of-type(3)
                margin-bottom 0
              &:nth-of-type(4)
                margin-right 0
                margin-bottom 0
      .timeBuy
        height (320/$rem)
        padding (30/$rem 40/$rem 30/$rem 56/$rem)
        margin-bottom (20/$rem)
        background #ffffff
        .buyLeft
          padding-top (80/$rem)
          float left
          color #333333
          .title
            font-size (36/$rem)
            letter-spacing (10/$rem)
            line-height (36/$rem)
            margin-bottom (24/$rem)
          .countdown
            display flex
            margin-top (24/$rem)
            span
              display inline-block
              text-align center
              width (62/$rem)
              height (56/$rem)
              background #444444
              font-size (32/$rem)
              border-radius (6/$rem)
              line-height (56/$rem)
              color #ffffff
            p
              font-size (30/$rem)
              width (20/$rem)
              height (45/$rem)
              font-weight 700
              line-height (48/$rem)
              text-align center

          .buyBottom
            margin-top (40/$rem)
            font-size (24/$rem)
            height (24/$rem)
            line-height (24/$rem)
        .buyRight
          float right
          width (320/$rem)
          height (320/$rem)
          position relative
          .price
            position absolute
            right (20/$rem)
            bottom (36/$rem)
            display flex
            flex-direction column
            justify-content center
            width (96/$rem)
            height (96/$rem)
            border-radius 50%
            background rgba(244,143,24,.95)
            text-align center
            color #ffffff
            font-size (26/$rem)
            span
              height (28/$rem)
              line-height (28/$rem)


          img
            display inline-block
            width 100%
            height 100%
      .welfareTeam
        margin-bottom (20/$rem)
      .goodSelect
        margin-bottom (20/$rem)
        background #ffffff
        .selectTop
          height (110/$rem)
          font-size (32/$rem)
          text-align center
          color #333333
          .textWrap
            height (48/$rem)
            text-align center
            line-height (48/$rem)
            .text
              white-space nowrap
              line-height (110/$rem)
              vertical-align middle
            .icon
              background url("./images/right_icon.png") no-repeat
              background-size 100%
              display inline-block
              width (30/$rem)
              vertical-align middle
              height (30/$rem)
              margin-left (10/$rem)



        .selectBottom
          padding (0 30/$rem 36/$rem 30/$rem)
          overflow hidden
          .picWrap
            ul
              height (417/$rem)
              display flex
              float left
              li
                display inline-block
                width (575/$rem)
                margin-right (20/$rem)
                img
                  display inline-block
                  width (575/$rem)
                  height (322/$rem)
                  border-radius (8/$rem)
                  margin-bottom (16/$rem)

                .text
                  clearFix()
                  .textLeft
                    float left
                    width (410/$rem)
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis

                    h4
                      overflow hidden
                      white-space nowrap
                      text-overflow ellipsis
                      font-size (28/$rem)
                      color #333333
                      margin-bottom (5/$rem)
                    p
                      overflow hidden
                      white-space nowrap
                      text-overflow ellipsis
                      font-size (26/$rem)
                      color #7F7F7F
                  .textRight
                    float right
                    color #b4282d



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
