<template>
    <div class='generalWrap'>
      <login-header/>
      <section class='swiper'>
          <div class="swiper-container">
            <div class="swiper-wrapper" v-for='(item,index) in banner' :key='index'>
              <div class="swiper-slide">
                  <img :src="item.picUrl" alt="">
                  <div class='middleText'>
                      <div class='subtitle'>
                        --{{item.subTitle}}
                      </div>
                      <div class='title'>
                        {{item.title}}
                      </div>
                      <div class='desc'>
                        {{item.desc}}
                    </div>
                  </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
      </section>
      <section class="article">
        <div class="articleWrap">
          <ul>
            <li v-for='(only,index) in column' :key='index'>
              <div class="picWrap">
                <span>
                 {{only.articleCount}}
                </span>
                <img :src="only.picUrl" alt="">
              </div>
              <div class="avatorName">
                <span>
                  {{only.title}}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <general-review :recommendOne='recommendOne' :recommendTwo='recommendTwo' :recommendThree='recommendThree'/>
      <section class="tenfifteen">
        <div class="title">
          <span>十点一刻</span>
        </div>
        <div class="list">
          <ul>
            <li v-for='(ten,index) in tenfifteen' :key='index'>
              <div class="wrap">
                <div class="top">
                  <span>--今日话题--</span>
                </div>
                <div class="middle">
                  <div class='Middletitle'>{{ten.title}}</div>
                  <div class='question'>{{ten.desc}}</div>
                </div>
                <div class="bottom">
                  <div class="wrap">
                    <div class="avator" v-for='(avator,index) in ten.participantAvatar' :key='index' v-if='ten.participantAvatar'>
                      <img :src="avator" alt="" v-if='avator!==null'>
                    </div>
                    <div class="avator more" v-if='!ten.participantNum===0'>
                      <div class='point'></div>
                      <div class='point'></div>
                      <div class='point'></div>
                    </div>
                    <div class='manyPeople'>
                      <span>
                        {{ten.participantNum}}人参与话题
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
      <general-review :zhenOne='zhenOne' :zhenTwo='zhenTwo' :zhenThree='zhenThree'/>
      <section class='yxLook'>
        <div class="header">
          <span>严选LOOK</span>
        </div>
        <img :src="yxLook.picUrl" alt="">
        <div class="topicInfo">
          <div class="avatorInfo">
            <img :src="yxLook.avatar" alt="">
            <span class='name'>{{yxLook.nickname}}</span>
          </div>
          <div class="evaluate">
            <p>{{yxLook.content}}</p>
          </div>
        </div>
      </section>
      <section class="moreGoods">
        <section class="middleLine">
          <span>更多精彩</span>
        </section>
        <section class='moreContent'>
          <div class="item" v-for='(more,index) in findMore' :key='index'>
            <img :src="more.scenePicUrl" alt="more" v-if='!more.picList'>
            <div class="imgs" v-if='more.picList'>
              <div class="left">
                <img :src="pic" alt="" v-for='(pic,index) in more.picList' :key='index' v-if='index===0'>
              </div>
              <div class="right">
                <img :src="pic" alt="" v-for='(pic,index) in more.picList' :key='index' v-if='index===1 || index===2'>
              </div>
            </div>
            <div class='text'>
              <span>{{more.subTitle}}</span>
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
  import {mapState,mapActions} from 'vuex'
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
        computed: {
          ...mapState([
            'banner',
            'column',
            'recommendOne',
            'recommendTwo',
            'recommendThree',
            'tenfifteen',
            'zhenOne',
            'zhenTwo',
            'zhenThree',
            'yxLook',
            'findMore'
          ])
        },
        methods: {
          ...mapActions([
            'getBanner',
            'getColumn',
            'getRecommendOne',
            'getRecommendTwo',
            'getRecommendThree',
            'getZhenOne',
            'getZhenTwo',
            'getZhenThree',
            'getTenfifteen',
            'getYxLook',
            'getFindMore'
          ]),
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
        mounted() {
          this.getBanner(()=>{
            this.$nextTick(()=>{
              new Swiper('.swiper-container', {
                loop: true,
                spaceBetween: 20,
                slidesPerView : 1.1,
                centeredSlides : true
              })
            })
          })
          this.getColumn(()=> {
            this.$nextTick(()=>{

              /*文章滑动*/
              new BScroll('.articleWrap',{
                scrollX: true,
                scrollY: false,
                click: true,
                bounceTime: 1000,
                momentumLimitDistance: 8,
                eventPassthrough: 'vertical'
              })
            })
          })
          this.getRecommendOne()
          this.getRecommendTwo()
          this.getRecommendThree()
          this.getZhenOne()
          this.getZhenTwo()
          this.getZhenThree()
          this.getTenfifteen(() =>{
            this.$nextTick(()=>{
              /*十点一刻*/
              new BScroll('.list',{
                click: true,
                scrollX: true,
                eventPassthrough: 'vertical',
                momentumLimitDistance: 8
              })
            })
          })
          this.getYxLook(()=> {
            console.log(this.yxLook)
            console.log(1111+'yxlook')
          })
          this.getFindMore()
          window.addEventListener('scroll', this.handleScroll)
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
        height 100%
        display flex
        .swiper-slide
          width 80%
          text-align center
          .middleText
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            box-sizing border-box
            width (466/$rem)
            height (198/$rem)
            background rgba(255,255,255,.9)
            display flex
            flex-direction column
            justify-content center
            align-items center

            .subtitle
              font-size (22/$rem)
              color #7f7f7f
              line-height (30/$rem)
            .title
              font-size (34/$rem)
              color #333
              font-weight 700
              margin-top (16/$rem)
              line-height (48/$rem)
            .desc
              font-size (24/$rem)
              color #333
              margin-top (4/$rem)
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
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
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
                  align-self center
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
                    line-height (46/$rem)
                    white-space nowrap
                    margin 0 auto
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
              height (360/$rem)
              float right
              display flex
              flex-direction column
              img
                width (178/$rem)
                height (178/$rem)
                &:first-of-type
                  margin-bottom (4/$rem)



</style>
