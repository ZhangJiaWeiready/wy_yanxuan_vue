<template>
    <div class='wrap'>
      <header>
        <span class='title'>{{itemOne.nickname}}</span>
      </header>
      <section class="item picAndText">
        <img :src="itemOne.picUrl" alt="pic">
        <div class="text">
          <div class='question'>
            <span class='Quest'>{{itemOne.title}}</span>
            <span class="price">
              {{itemOne.priceInfo}}元起
            </span>
          </div>
          <div class='advertising'>
            <span class="article">
              {{itemOne.subTitle}}
            </span>
          </div>
        </div>
      </section>
      <section class="item picTextList" v-for='(small,index) in itemSmall' :key='index'>
        <div class="leftList">
          <section class="top">
            <img v-lazy="small.avatar" alt="">
            <span class="name" v-if='small.nickname'>{{small.nickname}}</span>
          </section>
          <section class="middle">
            <p>{{small.title}}</p>
          </section>
          <section class="bottom">
            <p>{{small.subTitle}}</p>
          </section>
        </div>
        <div class="rightList">
          <div class='text'>
            <span>{{small.typeName}}</span>
          </div>
          <img v-lazy="small.picUrl" alt="">
        </div>
      </section>
    </div>
</template>

<script>
    export default {
      props: {
        recommendOne: Object,
        recommendTwo: Object,
        recommendThree: Object,
        zhenOne: Object,
        zhenTwo: Object,
        zhenThree: Object
      },
      computed:{
        itemOne() {
          if (this.recommendOne){
            return this.recommendOne
          }
          const {zhenOne} = this
          if (zhenOne){
            return zhenOne
          }
        },
        itemSmall() {
          const arr = []
          const {recommendTwo,recommendThree,zhenTwo,zhenThree} =this
          if (recommendTwo){
            arr.push(recommendTwo)
          }
          if (recommendThree){
            arr.push(recommendThree)
          }
          if (zhenTwo){
            arr.push(zhenTwo)
          }
          if (zhenThree){
            arr.push(zhenThree)
          }
          return arr
        },

      }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    background #fff
    font-size (28/$rem)
    padding (0 30/$rem 40/$rem 30/$rem)
    margin-bottom (20/$rem)
    .item
      border 1px solid #d9d9d9
      color #333
      border-radius (8/$rem)
      margin-bottom (30/$rem)
    header
      width 100%
      height (120/$rem)
      text-align center
      .title
        line-height (120/$rem)
    .picAndText
      img
        height (386/$rem)
      .text
        height (95/$rem)
        padding (24/$rem 20/$rem 67/$rem 20/$rem)
        .question
          margin-bottom (19/$rem)
          font-size (36/$rem)
          color #333
          clearFix()
          .Quest
            float left
            width (496/$rem)
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .price
            float right
        .advertising
          width 100%
          color #7f7f7f
          font-size (28/$rem)
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
    .picTextList
      height (272/$rem)
      display flex
      .leftList
        padding-left (20/$rem)
        padding-right (30/$rem)
        width (358/$rem)
        display flex
        flex-direction column
        .top
          margin (25/$rem 0)
          display flex
          align-items center
          font-size (24/$rem)
          img
            width (46/$rem)
            height (46/$rem)
            border-radius 50%
            margin-right (8/$rem)
        .middle
          margin-bottom (14/$rem)
          font-size (32/$rem)
          color #333
          p
            margin-right (30/$rem)
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
        .bottom
          font-size (24/$rem)
          display -webkit-box
          color #7f7f7f
          line-height 1.6
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp 2
          -webkit-box-orient vertical
      .rightList
        position relative
        width (280/$rem)
        height 100%
        img
          width 100%
          height 100%

        .text
          position absolute
          top (10/$rem)
          left (10/$rem)
          height (36/$rem)
          border-radius (36/$rem)
          background #fff
          border 1px solid #d9d9d9
          color #333
          font-size (24/$rem)
          text-align center
          padding (0 16/$rem)
          display flex
          align-items center
          vertical-align middle
</style>
