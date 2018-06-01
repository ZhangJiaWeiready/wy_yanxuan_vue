<template>
    <div class='wrap'>
      <div class="ListContent" v-if='headCateList[position]'>
        <div class="banner" >
          <img v-lazy="headCateList[position].bannerUrl" v-if='headCateList[position].bannerUrl'>

        </div>
        <div class="cataList">
          <div class="cateClass">
            {{headCateList[position].name}}分类
          </div>
          <ul>
            <li v-for='(cate,index) in headCateList[position].subCateList' :key='index'>
              <img v-lazy="cate.bannerUrl||cate.wapBannerUrl" alt="">
              <span>
                {{cate.name}}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
        props: {
          position: Number
        },
        computed: {
          ...mapState(['headCateList'])
        },
        watch:{
          headCateList(){
            this.$nextTick(()=>{
              new BScroll('.wrap',{
                scrollY:true,
                click: true,
                bounce:false
              })
            })
          }

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
      font-size (24/$rem)
      .banner
        width 100%
        height (192/$rem)
        img
          display inline-block
          width 100%
          height 100%
      .cataList
        .cateClass
          width 100%
          height (108/$rem)
          font-size (26/$rem)
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
              display inline-block
              width (144/$rem)
              height (144/$rem)
            span
              display inline-block
              width 100%
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
</style>
