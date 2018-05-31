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
            <div class="tab" @click='addClass' >
              <span>居家</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>配件</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>服装</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>电器</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>洗护</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>饮食</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>餐厨</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>婴童</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>文体</span>
            </div>
            <div class="tab" @click='addClass'>
              <span>特色区</span>
            </div>
          </div>
        </div>
      </header>
      <section class='carouselNav'>
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
            <div class="swiper-slide">
              <img src="./images/carousel/04.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="./images/carousel/05.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="./images/carousel/06.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="./images/carousel/07.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="./images/carousel/08.jpg" alt="">
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="wySure">
          <ul class='sureList'>
            <li>
              <img src="./images/baozheng.png" alt="">
              <span class='text'>网易自营保证</span>
            </li>
            <li>
              <img src="./images/baozheng.png" alt="">
              <span class='text'>30天无忧退货</span>
            </li>
            <li>
              <img src="./images/baozheng.png" alt="">
              <span class='text'>48小时快速退款</span>
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
              <li>
                <div class='text'>
                  <h4 >CK制造商</h4>
                  <p>25元起</p>
                </div>
                <img src="./images/productShop/CK.png" alt="">
              </li>
              <li>
                <div class='text'>
                  <h4>Nine West制造商</h4>
                  <p>199元起</p>
                </div>

                <img src="./images/productShop/Nine.png" alt="">
              </li>
              <li>
                <div class='text'>
                  <h4>新秀丽制造商</h4>
                  <p>49元起</p>
                </div>

                <img src="./images/productShop/xiuli.png" alt="">
              </li>
              <li>
                <div class='text'>
                  <h4>Brikenstock集团制造商</h4>
                  <p>59.9元起</p>
                </div>

                <img src="./images/productShop/Briken.png" alt="">
              </li>

            </ul>
          </div>
        </section>
        <section class="goods newShop">
          <div class="imgTitle">
            <div class="imgText new">
              <span>新品首发</span>
              <div class='seeAll'>
                查看全部
                <i class='rightArrow'></i>
              </div>
            </div>
            <img src="./images/class/new.png" alt="">
          </div>
          <div class='goodsList'>
            <ul >
              <li>
                <img src="./images/new_pro/01.png" alt="">
                <div class='shopNews'>
                  <div class='newIcon'>
                    <p>满赠</p>
                  </div>
                  <span class="newName">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                  <span class='newDes'>夏季爆品，媲美现煮</span>
                  <span class='newPrice'>¥98</span>
                </div>
              </li>
              <li>
                <img src="./images/new_pro/02.png" alt="">
                <div class='shopNews'>
                  <!--<div class='newIcon'>
                    <p>满赠</p>
                  </div>-->
                  <span class="newName">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                  <span class='newDes'>夏季爆品，媲美现煮</span>
                  <span class='newPrice'>¥98</span>
                </div>
              </li>
              <li>
                <img src="./images/new_pro/03.png" alt="">
                <div class='shopNews'>
                  <span class="newName">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                  <span class='newDes'>夏季爆品，媲美现煮</span>
                  <span class='newPrice'>¥98</span>
                </div>
              </li>
              <li class='clickSeeAll'>
                <span class='SeeAll'>查看全部</span>
              </li>
            </ul>
          </div>
        </section>
        <section class="goods popularShop">
          <div class="imgTitle">
            <div class="imgText popular">
              <span>人气推荐·好物精选</span>
              <div class='seeAll'>
                查看全部
                <i class='rightArrow'></i>
              </div>
            </div>
            <img src="./images/class/hot.png" alt="">
          </div>
          <div class='goodsList'>
            <ul>
              <li>
                <img src="./images/new_pro/01.png" alt="">
                <div class='shopNews'>
                  <div class='newIcon'>
                    <p>满赠</p>
                  </div>
                  <span class="newName">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                  <span class='newDes'>夏季爆品，媲美现煮</span>
                  <span class='newPrice'>¥98</span>
                </div>
              </li>
              <li>
                <img src="./images/new_pro/02.png" alt="">
                <div class='shopNews'>
                  <!--<div class='newIcon'>
                    <p>满赠</p>
                  </div>-->
                  <span class="newName">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                  <span class='newDes'>夏季爆品，媲美现煮</span>
                  <span class='newPrice'>¥98</span>
                </div>
              </li>
              <li>
                <img src="./images/new_pro/03.png" alt="">
                <div class='shopNews'>
                  <span class="newName">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                  <span class='newDes'>夏季爆品，媲美现煮</span>
                  <span class='newPrice'>¥98</span>
                </div>
              </li>
              <li class='clickSeeAll'>
                <span class='SeeAll'>查看全部</span>
              </li>
            </ul>
          </div>
        </section>
        <section class="timeBuy">
          <div class="buyLeft">
            <span class="title">
              严选限时购
            </span>
            <section class="countdown">
              <span class="hour">
                01
              </span>
              <p>:</p>
              <span class="minute">
                35
              </span>
              <p>:</p>
              <span class="seconds">
                00
              </span>
            </section>
            <section class="buyBottom">
              下一场 10:00 开始
            </section>
          </div>
          <div class="buyRight">
            <img src="./images/onlytime.png" alt="">
            <div class="price">
              <span class="nowPrice">
                ￥111
              </span>
              <span class="oldPrice">
                ￥123
              </span>
            </div>
          </div>
        </section>
        <section class='welfareTeam'>
          <img src="./images/class/fuli.jpg" alt="">
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
                <li>
                  <img src="./images/ztjingxuan/01.jpg" alt="">
                  <div class="text">
                    <div class="textLeft">
                      <h4>给毛孔来一次深度清洁</h4>
                      <p>硅胶洁面仪，洗出会发光的素颜肌</p>
                    </div>
                    <div class="textRight">
                      111.7 元起
                    </div>
                  </div>
                </li>
                <li>
                  <img src="./images/ztjingxuan/01.jpg" alt="">
                  <div class="text">
                    <div class="textLeft">
                      <h4>给毛孔来一次深度清洁</h4>
                      <p>硅胶洁面仪，洗出会发光的素颜肌</p>
                    </div>
                    <div class="textRight">
                      111.7 元起
                    </div>
                  </div>
                </li>
                <li>
                  <img src="./images/ztjingxuan/01.jpg" alt="">
                  <div class="text">
                    <div class="textLeft">
                      <h4>给毛孔来一次深度清洁</h4>
                      <p>硅胶洁面仪，洗出会发光的素颜肌</p>
                    </div>
                    <div class="textRight">
                      111.7 元起
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
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import GoodClassList from '../../pages/GoodClassList/GoodClassList'
  import FristPageBottom from '../../pages/FristPageBottom/FristPageBottom'
  import ToTop from '../../pages/ToTop/ToTop'
    export default {
        data (){
          return {
            isShowToup: false,
            isShowCate: false
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
            console.log(event.target)
          },
          // 水平滑动
          scroll() {
            //设置list的宽度为子级的宽度
            const navList = document.querySelector('.navList')
            const tabLis = document.querySelectorAll('.tab')
            let h = (tabLis.length-1)*48
            for (let i=0;i<tabLis.length;i++){
              h += tabLis[i].offsetWidth
            }
            navList.style.width=h+'px'
            // 头部列表水平滑动
            new BScroll('.navWrap', {
              scrollX: true,
              click: true
            })

            new BScroll('.newShop > .goodsList', {
              scrollX: true,
              click: true,
              eventPassthrough: 'vertical'
            })
            new BScroll('.popularShop > .goodsList', {
              scrollX: true,
              click: true,
              eventPassthrough: 'vertical'
            })
            new BScroll('.goodSelect > .selectBottom > .picWrap', {
              scrollX: true,
              click: true,
              eventPassthrough: 'vertical'
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
          // 点击到顶部
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
        mounted (){
          this.isShowCate=true
          this.scroll()
          window.addEventListener('scroll', this.handleScroll)
          new Swiper('.swiper-container',{
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',

            }
          })
        },
        components: {
          GoodClassList,
          ToTop,
          FristPageBottom
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


      .goods
        background #ffffff
        margin-bottom (20/$rem)
        .imgTitle
          position relative
          height (260/$rem)
          margin-bottom (32/$rem)
          display flex
          align-items center
          justify-content center

          .imgText
            position absolute
            z-index 2
            font-size (36/$rem)
            text-align center
            .seeAll
              font-size (28/$rem)
              width (240/$rem)
              height (56/$rem)
              margin-top (16/$rem)
              line-height (56/$rem)
              vertical-align middle
              .rightArrow
                display inline-block
                width (10/$rem)
                height (22/$rem)
                background url("./images/rightArrow.png") no-repeat
                vertical-align middle
                background-size 100%
            &.new
              color #8ba0b6
              .seeAll
                background #D8E5F1
            &.popular
              color #B4A078
              .seeAll
                background #F4E9CB
          img
            position absolute
        .goodsList
          width 100%
          height (480/$rem)
          overflow hidden
          ul
            display flex
            height 100%
            float left
            li
              display inline-block
              width (280/$rem!important)
              margin-left (30/$rem)
              background #ffffff
              img
                width 100%
                background #f4f4f4
                border-radius (5/$rem)
                margin-bottom (20/$rem)
              .shopNews
                width 100%
                span
                  display inline-block
                  width 100%
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                  padding (0 10/$rem)
                  box-sizing border-box
                .newIcon
                  width 100%
                  height (30/$rem)
                  padding-left (10/$rem)
                  margin-bottom (16/$rem)
                  p
                    font-size (22/$rem)
                    border-radius (5/$rem)
                    text-align center
                    vertical-align middle
                    line-height (30/$rem)
                    color #ffffff
                    display inline-block
                    background #f48f18
                    padding (5/$rem 16/$rem)
                    margin-left (12/$rem)
                .newName
                  font-size (28/$rem)
                  padding (0 10/$rem)
                  margin (10/$rem 0)
                  line-height (30/$rem)
                .newDes
                  font-size (26/$rem)
                  margin-bottom (14/$rem)
                  line-height (30/$rem)
                  color #7f7f7f
                .newPrice
                  font-size (28/$rem)
                  color #b4282d


              &.clickSeeAll
                display inline-block
                width (264/$rem)
                height (264/$rem)
                margin (0 30/$rem)
                border (8/$rem solid #f4f4f4)
                text-align center
                background #ffffff
                line-height (264/$rem)
                font-size (28/$rem)
                color #666


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
