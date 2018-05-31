<template>
    <div class="classListWrap">
      <div class="ListWrap" v-for='(cate,index) in cateList' :key='index'>
        <section class="listTop" >
          <span>
            {{cate.name}}好物
          </span>
        </section>
        <section class="goodMsg">
          <ul>
            <li v-for='(item,index) in cate.itemList' :key='index' v-show='index<7'>
              <div class="goodPic">
                <img :src="item.primaryPicUrl">
              </div>
              <div class="slogan">
                <span>{{item.simpleDesc}}</span>
              </div>
              <div class="titleMsg">
              <span class='disCounts' v-for='(tag,index) in item.itemTagList' :key='index' v-if='item.itemTagList'>
                <p :style='{background: color[tag.type]}'>{{tag.name}}</p>
              </span>
                <span class="goodName">
                {{item.name}}
              </span>
                <span class="goodPrice">
                ￥{{item.retailPrice}}
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
      </div>
    </div>

</template>

<script>
  import {mapActions,mapState} from 'vuex'
    export default {
        data() {
          return {
            color: ['red','#f48f18','#e5686d']
          }
        },
        computed: {
          ...mapState(['cateList'])
        },
        methods:{
          ...mapActions(['getCateList'])
        },
        mounted() {
          this.getCateList()
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .ListWrap
    background #ffffff
    font-size (28/$rem)
    margin-bottom (20/$rem)
    width 100%
    .listTop
      width 100%
      height (120/$rem)
      text-align center
      line-height (120/$rem)
      color #333333

    .goodMsg
      ul
        clearFix()
        li
          float left
          padding (0 10/$rem 33/$rem 20/$rem)
          width 50%
          height (586/$rem)
          box-sizing border-box
          .goodPic
            background #f4f4f4
            border-radius (8/$rem)
            width (345/$rem)
            height (345/$rem)
            img
              display inline-block
              width 100%
              height 100%
          .slogan
            background #F1ECE2
            color #9F8A60
            letter-spacing 0
            font-size (24/$rem)
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            padding (20/$rem 10/$rem )
            border-radius (8/$rem)
          .titleMsg
            display flex
            flex-direction column
            .disCounts
              margin-top (20/$rem)
              margin-left (4/$rem)
              padding-left (10/$rem)
              p
                height (20/$rem)
                width (60/$rem)
                padding (5/$rem 16/$rem)
                background #f48f18
                color white
                border-radius (6/$rem)
                font-size (20/$rem)
                line-height (20/$rem)
                vertical-align middle
                text-align center
                white-space nowrap


            .goodName
              font-size (30/$rem)
              margin-top (10/$rem)
              color #333333
              overflow hidden
              text-overflow ellipsis
              padding (0 10/$rem)
              white-space nowrap

            .goodPrice
              font-size (32/$rem)
              color #b4282d
              margin-top (10/$rem)
          &.more
            box-sizing border-box
            .text
              height (414/$rem)
              box-sizing border-box
              background #f4f4f4
              padding (128/$rem 0 )
              text-align center
              display flex
              flex-direction column
              align-items center
              span
                color #333333
                font-size (34/$rem)
                margin-bottom (58/$rem)
              .icon
                display inline-block
                background url("./images/more.png") no-repeat
                width (67/$rem)
                height (67/$rem)
</style>
