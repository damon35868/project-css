<template>
    <div class="twitterPageHome">
        <swiper></swiper>
        <middle></middle>
        <inner-page></inner-page>
    </div>
</template>

<script>
import swiper from './swiper.vue'
import middle from './middle.vue'
import innerPage from './innerPage.vue'
export default {
    name:'twitterPageHome',
    components:{
        swiper,middle,innerPage
    }
}
</script>

<style scoped>
    @media (min-width: 1600px) {
        .container {
        max-width: 1600px!important;
        }
    }
</style>

