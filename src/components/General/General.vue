<template>
    <div class='generalWrap'>
      <login-header/>
      <section class='swiper'>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">

                  <img src="./images/carousel/01.jpg" alt="">
              </div>
              <div class="swiper-slide">

                  <img src="./images/carousel/02.jpg" alt="">

              </div>
              <div class="swiper-slide">
                  <img src="./images/carousel/03.jpg" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
      </section>
      <section class="article">
        <div class="articleWrap">
          <ul>
            <li v-for='i in 10'>
              <div class="picWrap">
                <span>
                  347篇文章
                </span>
                <img src="./images/article/03.png" alt="">
              </div>
              <div class="avatorName">
                <span>
                  严选推荐
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <general-review/>
      <section class="tenfifteen">
        <div class="title">
          <span>十点一刻</span>
        </div>
        <div class="list">
          <ul>
            <li v-for='i in 4'>
              <div class="wrap">
                <div class="top">
                  <span>--今日话题--</span>
                </div>
                <div class="middle">
                  <div class='Middletitle'>生活的仪式感</div>
                  <div class='question'>你觉得重要吗？</div>
                </div>
                <div class="bottom">
                  <div class="wrap">
                    <div class="avator" v-for='i in 3'>
                      <img src="./images/avator/01.jpg" alt="">
                    </div>
                    <div class="avator more">
                      <div class='point'></div>
                      <div class='point'></div>
                      <div class='point'></div>
                    </div>
                    <div class='manyPeople'>
                      <span>
                        7人参与话题
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class='seeAll'>
              <div class='text'>
                <span>查看全部话题 </span>
                <img src="./images/arrow.png" alt="">
              </div>
            </li>
          </ul>
        </div>
      </section>
      <general-review/>
      <section class='yxLook'>
        <div class="header">
          <span>严选LOOK</span>
        </div>
        <img src="./images/LOOk.jpg" alt="">
        <div class="topicInfo">
          <div class="avatorInfo">
            <img src="./images/avator/01.jpg" alt="">
            <span class='name'>j***l</span>
          </div>
          <div class="evaluate">
            <p>味道还可以，这款挂耳的方式很新颖，时间富裕喝现磨，时间紧张喝挂耳</p>
          </div>
        </div>
      </section>
      <section class="moreGoods">
        <section class="middleLine">
          <span>更多精彩</span>
        </section>
        <section class='moreContent'>
          <div class="item" v-for='i in 5'>
            <img src="./images/moreContent.jpg" alt="more">
            <div class='text'>
              <span>页面内童心好物每满99立减10元</span>
            </div>
          </div>
          <div class="item threePic">
            <div class="imgs">
              <div class="left">
                <img src="./images/big.jpg" alt="">
              </div>
              <div class="right">
                <img src="./images/small.jpg" alt="">
                <img src="./images/small.jpg" alt="">
              </div>
            </div>
            <div class="text">
              <span>美好明天</span>
            </div>
          </div>
        </section>
      </section>
      <ToTop :isShowToup='isShowToup' @totop='clickToTop'/>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  import LoginHeader from '../../pages/LoginHeader/LoginHeader'
  import GeneralReview from '../../pages/GeneralReview/GeneralReview'
  import ToTop from '../../pages/ToTop/ToTop'
    export default {
      data (){
        return {
          isShowToup: false,
        }
      },
        mounted (){
          this.scroll(),
          window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
          scroll (){
            new Swiper('.swiper-container', {
              loop: true,
              spaceBetween: 20,
              slidesPerView : 1.1,
              centeredSlides : true
            })
            /*文章滑动*/
            new BScroll('.articleWrap',{
              scrollX: true,
              scrollY: false,
              click: true,
              bounceTime: 1000,
              momentumLimitDistance: 8,
              eventPassthrough: 'vertical'
            }),
              /*十点一刻*/
              new BScroll('.list',{
                click: true,
                scrollX: true,
                eventPassthrough: 'vertical',
                momentumLimitDistance: 8
              })
          },
          handleScroll () {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (this.scrollTop >= document.documentElement.clientHeight){
              this.isShowToup = true
            } else{
              this.isShowToup = false
            }
          },
          clickToTop() {
            clearInterval(this.timer)
            this.timer = setInterval(()=>{
              document.documentElement.scrollTop -=100
              if (document.documentElement.scrollTop === 0) {
                clearInterval(this.timer)
              }
            },1)
          }
        },
        components: {
          LoginHeader,
          GeneralReview,
          ToTop
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .generalWrap
    width 100%
    font-size (28/$rem)
    margin-top (88/$rem)
    margin-bottom (97/$rem)
    overflow hidden
    .swiper
      height (385/$rem)
      width 100%
      padding (24/$rem 0)
      background #fff
      .swiper-container
        width 100%
        .swiper-slide
          width 80%
          img
            width 100%
            height 100%
    .article
      width 100%
      padding (32/$rem 30/$rem 28/$rem 30/$rem)
      margin-bottom (20/$rem)
      height (226/$rem)
      background #fff
      .articleWrap
        width 100%
        ul
          float left
          display flex
          li
            width (164/$rem)
            height (210/$rem)
            margin-right (24/$rem)
            .picWrap
              position relative
              height (164/$rem)
              width 100%
              margin-bottom (22/$rem)
              color #ffffff
              font-size (24/$rem)
              span
                position absolute
                right 0
              img
                width 100%
                height 100%
            .avatorName
              width 100%
              text-align center
              color #333
              font-size (24/$rem)
    .tenfifteen
      background #fff
      height (530/$rem)
      padding (0 30/$rem 40/$rem 30/$rem)
      margin-bottom (20/$rem)
      .title
        height (120/$rem)
        text-align center
        font-size (32/$rem)
        color #222
        span
          line-height (120/$rem)
      .list
        width 100%
        height 100%
        ul
          float left
          display flex
          li
            background url("./images/biankuang.png") no-repeat
            display inline-block
            width (500/$rem)
            height (294/$rem)
            padding (38/$rem 40/$rem 79/$rem 40/$rem)
            margin-right (30/$rem)
            position relative
            .wrap
              width 100%
              .top
                width 100%
                margin-bottom (40/$rem)
                height (28/$rem)
                text-align center
                color #7f7f7f
                font-size (24/$rem)
                span
                  line-height (28/$rem)

              .middle
                .Middletitle
                  width 100%
                  font-size (34/$rem)
                  color #333
                  font-weight 700
                  margin-bottom (14/$rem)
                  text-align center
                .question
                  width 100%
                  font-size (28/$rem)
                  line-height 1.5
                  text-overflow ellipsis
                  overflow hidden
                  text-align center
              .bottom
                position absolute
                bottom (80/$rem)
                width (500/$rem)
                height (48/$rem)
                .wrap
                  width (325/$rem)
                  margin 0 auto
                  display flex
                  .avator
                    height (46/$rem)
                    width (46/$rem)
                    border-radius 50%
                    border 1px solid #fff
                    overflow hidden
                    &.more
                      background #d9d9d9
                      display flex
                      justify-content space-around
                      align-items center
                      .point
                        width (6/$rem)
                        height (6/$rem)
                        background #fff
                  .manyPeople
                    font-size (24/$rem)
                    color #7f7f7f
                    margin-left (8/$rem)
                    line-height (46/$rem)
                    white-space nowrap
            &.seeAll
              display flex
              justify-content center
              align-items center
              .text
                font-size (32/$rem)
                color #7f7f7f
                width (240/$rem)
                height (38/$rem)
                display flex
                align-items center
                img
                  margin-left (5/$rem)


    .yxLook
      background #fff
      margin-bottom (20/$rem)
      .header
        width 100%
        height (120/$rem)
        text-align center
        font-size (34/$rem)
        color 333
        >span
          line-height (120/$rem)
      >img
        width 100%
        height (421.5/$rem)
      .topicInfo
        padding (24/$rem 30/$rem 46/$rem 30/$rem)
        .avatorInfo
          color #333
          font-size (28/$rem)
          margin-bottom (24/$rem)
          height (48/$rem)
          display flex
          align-items center
          >img
            width (46/$rem)
            height (46/$rem)
            border-radius 50%
            overflow hidden
            margin-right (8/$rem)
            border 1px solid #d9d9d9
          .name
            width (56/$rem)
            overflow hidden
            white-space nowrap
            text-overflow ellipsis

        .evaluate
          width 100%
          line-height 1.6
          color #7f7f7f
    .moreGoods
      margin (0 30/$rem 30/$rem 30/$rem)
      .middleLine
        height (140/$rem)
        display flex
        align-items center
        >span
          color #333
          line-height (140/$rem)
          margin (0 24/$rem)
        &:before
          content ''
          display inline-block
          height 1px
          background-color #d9d9d9
          width (264/$rem)
          line-height (140/$rem)
        &:after
          content ''
          display inline-block
          height 1px
          background-color #d9d9d9
          width (264/$rem)
          line-height (140/$rem)
      .moreContent
        .item
          background #fff
          padding (24/$rem)
          margin-bottom (30/$rem)
          img
            width 100%
            height (360/$rem)
          .text
            color #333
            line-height 1.2
            padding (28/$rem 0)
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          &.threePic
            .imgs
              height (360/$rem)
              width 100%
              clearFix()
              .left
                width (460/$rem)
                height 100%
                margin-right (4/$rem)
                float left
                img
                  width 100%
                  height 100%
              .right
                float right
                display flex
                flex-direction column
                img
                  width (178/$rem)
                  height 178%
                  &:first-of-type
                    margin-bottom (4/$rem)

</style>
