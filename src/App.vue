<template>
  <div id="app">
    <page></page>
  </div>
</template>

<script>
import page from './components/page.vue'

export default {
  name: 'app',
  components: {
    page
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
