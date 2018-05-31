<template>
    <div class='ClassifyWrap'>
      <header>
        <div class='search'>
          <i class='searchIcon'></i>
          <span class='searchText' @click="$router.push('/search')">
            搜索商品，共9736款好物
          </span>
        </div>
      </header>
      <div class="shopList">
        <ul >
          <li @click.stop='addOn' v-for='(item) in 20'>
            <p>
              推荐专区
            </p>
          </li>
        </ul>
      </div>
      <shop-class class='ListWrap'/>


    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import ShopClass from '../../pages/ShopClass/ShopClass'
    export default {
        data (){
          return {
            isAdd: false
          }
        },
        mounted() {
          // 数据挂载之后给第一个li添加on属性
          const liNode = document.querySelectorAll('.shopList>ul>li')
          const wrap = document.querySelector('.ClassifyWrap')
          liNode[0].className='on'
          new BScroll('.shopList',{
            scrollY: true,
            click: true,
            bounce: false
          })
        },
        methods: {
          //添加class
          addOn (event){
            const liNodes = document.querySelectorAll('.shopList > ul > li')
            for (let i =0; i<liNodes.length; i++){
              liNodes[i].removeAttribute('class')
            }
            console.log(event)
            event.target.parentNode.className='on'
          }
        },
        components: {
          ShopClass
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .ClassifyWrap
    position relative
    width 100%
    height 100%
    overflow hidden
    font-size (28/$rem)
    header
      z-index 5
      padding (0 30/$rem)
      background #ffffff
      text-align center
      display flex
      justify-content center
      align-items center
      height (88/$rem)
      bottom-border-1px(#d9d9d9)
      .search
        width 100%
        height (56/$rem)
        text-align center
        line-height (56/$rem)
        background #ededed
        border-radius (10/$rem)
        color #666666
        .searchIcon
          display inline-block
          background url("./images/search.png") no-repeat
          background-size 100%
          height (28/$rem)
          width (28/$rem)
          vertical-align middle
          margin-right (10/$rem)
    .shopList
      right-border-1px(#d9d9d9)
      position fixed
      left 0
      top (88/$rem)
      bottom 0
      z-index 4
      background #ffffff
      width (162/$rem)
      padding-top (40/$rem)
      padding-bottom (138/$rem)
      ul
        li
          position relative
          width 100%
          height (50/$rem)
          text-align center
          margin-top (40/$rem)
          line-height (50/$rem)
          color #333333
          span
            display inline-block
            width 100%
            height 100%
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          &:first-of-type
            margin-top 0
          &.on
            font-size (36/$rem!important)
            color #ab2b2b!important
            &:before
              position absolute
              left 0
              content ''
              display inline-block
              height 100%
              width (5/$rem)
              background #ab2b2b





    .ListWrap
      position: absolute
      right 0
      left (162/$rem)
      top (88/$rem)
      bottom (98/$rem)
</style>
