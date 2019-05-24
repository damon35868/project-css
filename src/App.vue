<template>
  <div id="app">
    <swiper></swiper>
    <middle></middle>
    <inner-page></inner-page>
  </div>
</template>

<script>
import swiper from './components/swiper.vue'
import middle from './components/middle.vue'
import innerPage from './components/innerPage.vue'

export default {
  name: 'app',
  components: {
    swiper,middle,innerPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
