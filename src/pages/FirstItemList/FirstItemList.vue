<template>
  <section class="goods">
    <div class="imgTitle">
      <div class="imgText new" v-if='newItem'>
        <span>新品首发</span>
        <div class='seeAll'>
          <span>查看全部 <i class='rightArrow'></i></span>
        </div>
      </div>
      <div class="imgText popular" v-if='popularItem'>
        <span>人气推荐 · 好物精选</span>
        <div class='seeAll'>
          <span>查看全部 <i class='rightArrow'></i></span>
        </div>
      </div>
      <img src="./images/class/new.png" alt="" v-if='newItem'>
      <img src="./images/class/hot.png" alt="" v-if='popularItem'>
    </div>
    <!--新品显示-->
    <div class='goodsList' :class='newItem' v-if='newItem'>
      <ul >
        <li v-for='(newItem,index) in newItemList' :key='index' >
          <img v-lazy="newItem.listPicUrl" alt="">
          <div class='shopNews'>
            <div class='newIcon' v-if='newItem.itemTagList' v-for='(tag,index) in newItem.itemTagList' :key='index'>
              <p :style='{background:color[tag.type]}'>{{tag.name}}</p>
            </div>
            <span class="newName">{{newItem.name}}</span>
            <span class='newDes'>{{newItem.simpleDesc}}</span>
            <span class='newPrice'>¥{{newItem.retailPrice}}</span>
          </div>
        </li>
        <li class='clickSeeAll'>
          <span class='SeeAll'>查看全部</span>
        </li>
      </ul>

    </div>
    <div class='goodsList' :class='popularItem' v-if='popularItem'>
      <ul v-if='popularItem'>
        <li v-for='(popularItem,index) in popularItemList' :key='index' >
          <img :src="popularItem.listPicUrl" alt="">
          <div class='shopNews'>
            <div class='newIcon'
                 v-if='popularItem.itemTagList'
                 v-for='(tagItem,index) in popularItem.itemTagList'
                 :key='index' >
              <p :style='{background:color[tagItem.type]}'>{{tagItem.name}}</p>
            </div>
            <span class="newName">{{popularItem.name}}</span>
            <span class='newDes'>{{popularItem.simpleDesc}}</span>
            <span class='newPrice'>¥{{popularItem.retailPrice}}</span>
          </div>
        </li>
        <li class='clickSeeAll'>
          <span class='SeeAll'>查看全部</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
        props:{
          popularItem: String,
          newItem: String
        },
      data(){
          return {
            color: ['red','#f48f18','#e5686d',]
          }
      },
        computed: {
          ...mapState(['newItemList','popularItemList']),

        },
        mounted() {
          this.getNewItemList(()=>{
            this.$nextTick(()=>{
              new BScroll('.newItem', {
              scrollX: true,
              click: true,
              eventPassthrough: 'vertical'
            })
            })
          })
          this.getPopularItemList(()=> {
            this.$nextTick(() => {
              const BS = new BScroll('.popularItem', {
                scrollX: true,
                click: true,
                eventPassthrough: 'vertical'
              })
              BS.refresh()
            })
          })
        },
        methods: {
          ...mapActions(['getNewItemList','getPopularItemList'])
        }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
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
        display flex
        flex-direction column
        align-items center
        .seeAll
          font-size (28/$rem)
          width (240/$rem)
          height (56/$rem)
          margin-top (16/$rem)
          text-align center
          span
            line-height (56/$rem)
            vertical-align middle
          .rightArrow
            display inline-block
            width (10/$rem)
            height 50%
            background url("./images/rightArrow.png") no-repeat
            vertical-align middle
            background-size 100%
            margin-left (10/$rem)
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
              height (30/$rem)
              padding-left (10/$rem)
              margin-bottom (16/$rem)
              display inline-block
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


</style>
