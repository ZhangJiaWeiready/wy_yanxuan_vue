<template>
    <div class="bottom">
      <div class="content">
        <div class="contentTop">
          <span class="downloadApp">
            <span>下载App</span>
          </span>
          <span class="compute">
            电脑版
          </span>
        </div>
        <section class="contentBot">
          <p>网易公司版权所有 © 1997-2018</p>
          <p>食品经营许可证：JY13301080111719</p>
        </section>
      </div>
    </div>
</template>

<script>
    export default {
        name: "frist-page-bottom"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .bottom
    top-border-1px(#d9d9d9)
    background #414141
    .content
      padding (54/$rem 20/$rem 28/$rem 20/$rem)
      .contentTop
        font-size (24/$rem)
        color #ffffff
        align-items center
        justify-content center
        display flex
        .downloadApp
          display inline-block
          height (60/$rem)
          width (170/$rem)
          border 1px solid #ffffff
          margin-right (50/$rem)
          text-align center
          line-height (60/$rem)
        .compute
          display inline-block
          height (60/$rem)
          width (170/$rem)
          border 1px solid #ffffff
          text-align center
          line-height (60/$rem)


      .contentBot
        font-size (24/$rem)
        line-height (32/$rem)
        margin-top (36/$rem)
        text-align center
        color #999999

</style>
