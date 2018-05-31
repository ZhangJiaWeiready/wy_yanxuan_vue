<template>
    <div class='wrap'>
      <div class="ListContent">
        <div class="banner">
          <img src="./images/titleImg.jpg">
        </div>
        <div class="cataList">
          <div class="cateClass">
            个性专区分类
          </div>
          <ul>
            <li v-for='i in 20 '>
              <img src="./images/cateClass/03.png" alt="">
              <span>
                糕点
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        mounted () {
          new BScroll('.wrap',{
            scrollY: true,
            click: true,
            bounce: false
          })
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap
    background #ffffff
    .ListContent
      padding (30/$rem 30/$rem 21/$rem 30/$rem)
      .cataList
        .cateClass
          width 100%
          height (108/$rem)
          text-align center
          line-height (108/$rem)

        ul
          clearFix()
          li
            float left
            width 33.33%
            height (216/$rem)
            text-align center
            img
              width (144/$rem)
              height (144/$rem)
</style>
