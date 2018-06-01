<template>
  <div class='wrap'>
    <section class='logo'>
      <div class='logoImg'>
        <img src="./images/logoSmall.png" alt="logo">
      </div>
    </section>
  </div>

</template>

<script>
    export default {
        name: "login-logo"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .wrap

    .logo
      padding-top (144/$rem)
      height (64/$rem)
      .logoImg
        height 100%
        width 100%
        text-align center
        img
          height 100%
</style>
