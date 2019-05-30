<template>
    <div class="airbnbPageHome p-4">
        <middle-top></middle-top>
        <middle-bottom></middle-bottom>
    </div>
</template>

<script>
import middleTop from './middleTop.vue'
import middleBottom from './middleBottom.vue'

export default {
    name:'airbnbPageHome',
    components:{
        middleTop,middleBottom
    }
}
</script>

<style scoped>
    @media (min-width: 1600px) {
        .container {
            max-width: 1344px!important;
        }
    }
</style>
