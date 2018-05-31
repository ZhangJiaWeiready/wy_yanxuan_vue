<template>
    <div class='searchWrap'>
      <header>
        <div class="search">
          <div class='form'>
            <form class="imput" >
              <i class='searchIcon'></i>
              <input class='shuru' type="text" placeholder='消暑解渴酒水饮料68元起' v-model='inputContent'>
              <i class='closeIcon' v-show='isClose' @click='close'></i>
            </form>
          </div>

          <div class="back" @click='$router.back()'>
            <span>
              取消
            </span>
          </div>
        </div>
      </header>
      <section class='hotSearch' v-if='!isClose'>
        <div class="hotTitle">
          <span>
            热门搜索
          </span>
        </div>
        <div class="hotContent">
          <div class="item hotItem">
            <span>
              5月热销推荐
            </span>
          </div>

          <div class="item">
            <span>
              牙刷
            </span>
          </div>

        </div>
      </section>
      <section class="result" v-if='isClose'>
        <ul class='resultWrap'>
          <li>
            <span>
              112生
            </span>
          </li>
          <li>
            <span>
              112生
            </span>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
    export default {
        data () {
          return {
            inputContent: '',
            path: this.$route.path
          }
        },
        computed: {
          isClose (){
            const val = this.inputContent.trim()
            if (val){
              return true
            }
          }
        },
        methods: {
          close() {
            this.inputContent=''
          }
        },

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .searchWrap
    font-size (28/$rem)
    header
      width 100%
      height (88/$rem)
      background #ffffff
      bottom-border-1px(#d9d9d9)
      .search
        height 100%
        display flex
        align-items center
        padding (0 30/$rem)
        .form
          display inline-block
          height (56/$rem)
          width (564/$rem)
          padding (0 20/$rem)
          box-sizing border-box
          background #f4f4f4
          form
            display flex
            width 100%
            height 100%
            align-items center
            .searchIcon
              display inline-block
              height (36/$rem)
              width (36/$rem)
              background url("./images/search.png") no-repeat
              vertical-align middle
              margin-left (10/$rem)
              margin-top (5/$rem)
            .closeIcon
              margin-right (20/$rem)
              background url("./images/close.png") no-repeat
              display inline-block
              width (50/$rem)
              height (50/$rem)
            >.shuru
              display inline-block
              height 100%
              box-shadow none
              width 100%
              outline none
              background #f4f4f4
              margin-left (26/$rem)
              color rgba(0,0,0,.8)
        .back
          margin-left (40/$rem)
          color #333333
    .hotSearch
      padding (0 30/$rem 30/$rem 30/$rem)
      margin-bottom (20/$rem)
      background #ffffff
      .hotTitle
        width 100%
        height (90/$rem)
        text-align left
        line-height (90/$rem)
        color #999999

      .hotContent
        clearFix()
        font-size (24/$rem)
        .item
          float left
          height (45/$rem)
          border 1px solid #999
          text-align center
          line-height (45/$rem)
          padding (0 15/$rem)
          margin-right (32/$rem)
          margin-bottom (32/$rem)
          border-radius (5/$rem)
          &.hotItem
            color #b4282d
            border-color #b4282d
    .result
      background #fff
      .resultWrap
        padding-left (30/$rem)
        font-size (26/$rem)
        color #666
        display flex
        flex-direction column
        background #fff
        li
          display inline-block
          height (90/$rem)
          bottom-border-1px(#d9d9d9)
          span
            line-height (90/$rem)
</style>
