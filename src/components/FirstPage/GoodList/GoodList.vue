<template>
  <div class="wrap">
    <div class="tuijian" v-if="$route.query.cateId==='1022001'">
      <section class='carouselNav'>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(focus, index) in focusList' :key='index'>
              <img v-lazy="focus.picUrl" alt="">
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
                  <h4>{{tag.name}}</h4>
                  <p>{{tag.floorPrice}}元起</p>
                </div>
                <img v-lazy="tag.picUrl" alt="">
              </li>
            </ul>
          </div>
        </section>
        <first-item-list :newItem='newItem'/>
        <first-item-list :popularItem='popularItem'/>
        <section class="timeBuy">
          <countdown :time="resetTime * 1000"  v-bind:auto-start="false" ref="countdown">
            <template slot-scope="props">
              <div class="countDown">
                <a href="javascript:;">
                  <div class="buyLeft">
                    <div class="title">严选限时购</div>
                    <div class="countNum">
                      <span class="time">{{ props.hours }}</span>
                      <span class="colon">:</span>
                      <span class="time">{{ props.minutes }}</span>
                      <span class="colon">:</span>
                      <span class="time">{{ props.seconds }}</span>
                    </div>
                    <div class="nextTitle">下一场 {{olock}}:00  开始</div>
                  </div>
                  <div class="buyRight">
                    <img v-lazy="flashSaleIndexVO.primaryPicUrl" alt="">
                    <div class="price">
              <span class="nowPrice">
                ￥{{flashSaleIndexVO.activityPrice}}
              </span>
                      <span class="oldPrice">
                ￥{{flashSaleIndexVO.originPrice}}
              </span>
                    </div>
                  </div>
                </a>
              </div>
            </template>
          </countdown>
        </section>
        <section class='welfareTeam'>
          <img v-lazy="saleIndexVO.picUrl" alt="">
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
                  <img v-lazy="topic.itemPicUrl" alt="">
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
    </div>
    <div class='cateList' v-for='(cate,index) in cates' :key='index' v-else>
      <div class="categroy" v-if='$route.query.cateId*1===cate.id*1'>
        <div class="top">
          <img v-lazy="cate.bannerUrl" alt="" v-if='cate.bannerUrl'>
        </div>
        <ul class="content">
          <li v-for='(subcate,index) in cate.subCateList' :key='index'>
            <div class="title">
              <div class='name'>{{subcate.name}}</div>
              <div class="desc" v-if='subcate.frontDesc'>{{subcate.frontDesc}}</div>
            </div>
            <section class="goodMsg">
              <ul>
                <li v-for='(item,index) in 7' :key='index' v-show='index<7'>
                  <div class="goodPic">
                    <img src="./images/cates/01.png">
                  </div>
                  <div class="slogan">
                    <span>1005棉填充，透气福利</span>
                  </div>
                  <div class="titleMsg">
              <span class='disCounts' v-for='(tag,index) in item.itemTagList' :key='index' v-if='item.itemTagList'>
                <p :style='{background: color[tag.type]}'>{{tag.name}}</p>
              </span>
                    <span class="goodName">
                海洋之心
              </span>
                    <span class="goodPrice">
                ￥99.99元
              </span>
                  </div>
                </li>

                <li class="more">
                  <div class="text">
                    <span>更多居家好物</span>
                    <i class='icon'></i>
                  </div>
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapActions, mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import GoodClassList from '../../../pages/GoodClassList/GoodClassList'
  import FristPageBottom from '../../../pages/FristPageBottom/FristPageBottom'
  import FirstItemList from '../../../pages/FirstItemList/FirstItemList'
  export default {

    props:{
      index: Number
    },

    data() {
      return {
        newItem: 'newItem',
        popularItem: 'popularItem',
        time: []
      }
    },
    methods: {
      // 水平滑动
      ...mapActions([
        'getFlashSaleIndexVO',
        'getFocusList',
        'getPolicyDescList',
        'getSaleIndexVO',
        'getTagList',
        'getTopicList',
        'getCates'
      ]),
      _resetTime () {
        this.timer = setTimeout (() => {
          clearTimeout(this.timer)
          this.time = this.time
        }, 2 * 60 * 60 * 1000)
      }
    },

    mounted() {

      this.$refs.countdown.start()
      /* this.$nextTick(()=>{
         this.timeOver()
         console.log(1+this.second)
       })*/
      this.$route.query.cateId = '1022001'
      this.getCates()
      this.getFlashSaleIndexVO(()=>{
        this.$nextTick(()=>{
          const next = this.flashSaleIndexVO.nextStartTime
          const nextTime = new Date(next) // 下一次刷新的时间
          const remainTime = new Date(this.flashSaleIndexVO.remainTime) // 剩余的时间
          const hours = remainTime.getHours()
          console.log(second)
          const minite = remainTime.getMinutes()
          const second = remainTime.getSeconds()
          const arr = []
          arr.push(hours,minite,second )
          this.time=arr
          console.log(this.time)
          const date = new Date() // 当前的时间

        })
      })
      this.getFocusList(() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',

            },

          })
          this.$nextTick(() => {
            this._resetTime()
          })
        })
      })
      this.getPolicyDescList()
      this.getSaleIndexVO()
      this.getTagList()
      this.getTopicList(() => {
        this.$nextTick(() => {
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
      FristPageBottom,
      FirstItemList,

    },
    computed: {
      resetTime: {
        get: function () {
          let arr = []
          let result = 1
          for (const i in this.time) {
            if (this.time[i] !== 0) {
              arr.push(this.time[i])
            }
          }
          arr.forEach(item => {
            result *= item
          })
          return result
        },
        set: function () {
          let result = 1
          this.time.forEach(item => {
            result *= item
          })
          console.log(result)
          return result
        }
      },
      date() {
        return this.flashSaleIndexVO.remainTime
      },
      minites() {
        return new Date(this.date).getMinutes()
      },
      hours() {
        return new Date(this.date).getHours()
      },
      seconds() {
        return new Date(this.date).getSeconds()
      },
      olock() {
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
        'newItemList',
        'policyDescList',
        'popularItemList',
        'saleIndexVO',
        'tagList',
        'topicList',
        'cates',
        'subCateList'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../../common/stylus/mixins.styl"
  $rem = 750 / 10rem
  .wrap
    height 100%
    width 100%
    padding-top (148 /$rem)
    padding-bottom (98 /$rem)
    .tuijian
      .carouselNav
        margin-bottom (20 /$rem)
        width 100%
        background #ffffff
        .swiper-container
          height (400 /$rem)
          .swiper-slide
            img
              height (400 /$rem)
          .swiper-pagination
            margin-bottom (30 /$rem)
            .swiper-pagination-bullet
              background #ffffff
              opacity 0.4
              height (4 /$rem)
        .wySure
          font-size (24 /$rem)
          height (72 /$rem)
          width 100%
          color #333333
          bottom-border-1px(#d9d9d9)
          background #ffffff
          ul
            display flex
            align-items center
            height 100%
            width 100%
            padding (0 30 /$rem)
            box-sizing border-box
            li
              float left
              display flex
              flex 1
              align-items center
              img
                width (32 /$rem)
                height (32 /$rem)
                vertical-align middle
              .text
                margin-left (8 /$rem)
                vertical-align middle

      .firstContent
        width 100%
        overflow hidden
        .productShop
          background #ffffff
          margin-bottom (20 /$rem)
          .shopTop
            height (110 /$rem)
            font-size (32 /$rem)
            text-align center
            color #333333
            .textWrap
              height (48 /$rem)
              text-align center
              line-height (48 /$rem)
              .text
                white-space nowrap
                line-height (110 /$rem)
                vertical-align middle
              .icon
                background url("./images/right_icon.png") no-repeat
                background-size 100%
                display inline-block
                width (30 /$rem)
                vertical-align middle
                height (30 /$rem)
                margin-left (10 /$rem)
          .shopContent
            width 100%
            font-size (28 /$rem)
            color #333333
            padding-bottom (8 /$rem)
            overflow hidden
            .shopList
              padding (0 16 /$rem)
              width 100%
              box-sizing border-box
              clearFix()
              li
                margin-right (8 /$rem)
                margin-bottom (8 /$rem)
                background #f4f4f4
                width (355 /$rem)
                height (236 /$rem)
                float left
                .text
                  position absolute
                  z-index 0
                  padding-top (20 /$rem)
                  padding-left (20 /$rem)
                  h4
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    margin-bottom (6 /$rem)
                    line-height (34 /$rem)
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
          height (320 /$rem)
          padding (30 /$rem 40 /$rem 30 /$rem 56 /$rem)
          margin-bottom (20 /$rem)
          background #ffffff
          .countDown
            width 100%
            height 100%
          .buyLeft
            width (334 /$rem)
            height 100%
            box-sizing border-box
            padding-top (80 /$rem)
            float left
            color #333333
            .title
              font-size (40 /$rem)
              margin-bottom (24 /$rem)
            .countNum
              height (56 /$rem)
              span
                display inline-block
              .time
                height (56 /$rem)
                width (56 /$rem)
                background #444
                color #fff
                text-align center
                line-height (56 /$rem)
              .colon
                text-align center
                color #333
                line-height (56 /$rem)
                font-weight 700
                width (20 /$rem)
            .nextTitle
              margin-top (40 /$rem)
              color #333
              font-size (24 /$rem)
          .buyRight
            float right
            width (320 /$rem)
            height (320 /$rem)
            position relative
            .price
              position absolute
              right (20 /$rem)
              bottom (36 /$rem)
              display flex
              flex-direction column
              justify-content center
              width (96 /$rem)
              height (96 /$rem)
              border-radius 50%
              background rgba(244, 143, 24, .95)
              text-align center
              color #ffffff
              font-size (26 /$rem)
              span
                height (28 /$rem)
                line-height (28 /$rem)

            img
              display inline-block
              width 100%
              height 100%
        .welfareTeam
          margin-bottom (20 /$rem)
        .goodSelect
          margin-bottom (20 /$rem)
          background #ffffff
          .selectTop
            height (110 /$rem)
            font-size (32 /$rem)
            text-align center
            color #333333
            .textWrap
              height (48 /$rem)
              text-align center
              line-height (48 /$rem)
              .text
                white-space nowrap
                line-height (110 /$rem)
                vertical-align middle
              .icon
                background url("./images/right_icon.png") no-repeat
                background-size 100%
                display inline-block
                width (30 /$rem)
                vertical-align middle
                height (30 /$rem)
                margin-left (10 /$rem)

          .selectBottom
            padding (0 30 /$rem 36 /$rem 30 /$rem)
            overflow hidden
            .picWrap
              ul
                height (417 /$rem)
                display flex
                float left
                li
                  display inline-block
                  width (575 /$rem)
                  margin-right (20 /$rem)
                  img
                    display inline-block
                    width (575 /$rem)
                    height (322 /$rem)
                    border-radius (8 /$rem)
                    margin-bottom (16 /$rem)

                  .text
                    clearFix()
                    .textLeft
                      float left
                      width (410 /$rem)
                      overflow hidden
                      white-space nowrap
                      text-overflow ellipsis

                      h4
                        overflow hidden
                        white-space nowrap
                        text-overflow ellipsis
                        font-size (28 /$rem)
                        color #333333
                        margin-bottom (5 /$rem)
                      p
                        overflow hidden
                        white-space nowrap
                        text-overflow ellipsis
                        font-size (26 /$rem)
                        color #7F7F7F
                    .textRight
                      float right
                      color #b4282d

    .cateList
      width 100%
      overflow hidden
      .categroy
        .top
          height (420 /$rem)
          margin-bottom (20 /$rem)
          img
            height 100%
        .content
          li
            background #ffffff
            margin-bottom (20 /$rem)
            .title
              text-align center
              background #fff
              width 100%
              height (120 /$rem)
              display flex
              flex-direction column
              justify-content center
              align-items center
              .name
                font-size (32 /$rem)
                color #333
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
              .desc
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                color #999
                line-height (50 /$rem)
                font-size (24 /$rem)
            .goodMsg
              background #ffffff
              ul
                clearFix()
                li
                  float left
                  padding (0 10 /$rem 33 /$rem 20 /$rem)
                  width 50%
                  height (586 /$rem)
                  box-sizing border-box
                  .goodPic
                    background #f4f4f4
                    border-radius (8 /$rem)
                    width (345 /$rem)
                    height (345 /$rem)
                    img
                      display inline-block
                      width 100%
                      height 100%
                  .slogan
                    background #F1ECE2
                    color #9F8A60
                    letter-spacing 0
                    font-size (24 /$rem)
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    padding (20 /$rem 10 /$rem)
                    border-radius (8 /$rem)
                  .titleMsg
                    display flex
                    flex-direction column
                    .disCounts
                      margin-top (20 /$rem)
                      margin-left (4 /$rem)
                      padding-left (10 /$rem)
                      p
                        height (20 /$rem)
                        width (60 /$rem)
                        padding (5 /$rem 16 /$rem)
                        background #f48f18
                        color white
                        border-radius (6 /$rem)
                        font-size (20 /$rem)
                        line-height (20 /$rem)
                        vertical-align middle
                        text-align center
                        white-space nowrap

                    .goodName
                      font-size (30 /$rem)
                      margin-top (10 /$rem)
                      color #333333
                      overflow hidden
                      text-overflow ellipsis
                      padding (0 10 /$rem)
                      white-space nowrap

                    .goodPrice
                      font-size (32 /$rem)
                      color #b4282d
                      margin-top (10 /$rem)
                  &.more
                    box-sizing border-box
                    .text
                      height (414 /$rem)
                      box-sizing border-box
                      background #f4f4f4
                      padding (128 /$rem 0)
                      text-align center
                      display flex
                      flex-direction column
                      align-items center
                      span
                        color #333333
                        font-size (34 /$rem)
                        margin-bottom (58 /$rem)
                      .icon
                        display inline-block
                        background url("./images/more.png") no-repeat
                        width (67 /$rem)
                        height (67 /$rem)
</style>
