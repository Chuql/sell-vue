<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-show="$route.meta.footerGuide"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from 'components/FooterGuide/FooterGuide'

export default {
  components: {
    FooterGuide
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
