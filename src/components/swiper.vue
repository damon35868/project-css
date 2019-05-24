<template>
  <div class="mySwiper container mx-auto">
    <swiper :options="swiperOption" ref="mySwiper" v-if="list.length!=0">
      <!-- slides -->
      <swiper-slide v-for="(item,key) in list" :key="key">
        <img :src="item.src">
      </swiper-slide>
  
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'mySwiper',
    data() {
      return {
        swiperOption: {
          //1.5s切换一次
          autoplay: 1500,
          setWrapperSize :true,
          //分页器
          pagination : '.swiper-pagination',
          loop:true,
          //鼠标点击分页器控制Swiper切换
          paginationClickable :true,
          //鼠标滚轮控制Swiper切换
          mousewheelControl : true,
          observeParents:true,
          autoplayDisableOnInteraction:false
        },
        list:[
          {"src":"https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
          {"src":"https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"},
        ]
      }
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<style scoped>
  .swiper-container {
    height: auto;
    max-height: 800px;
  }  
  .swiper-pagination>>>.swiper-pagination-bullet{
    opacity: 1;
    background: theme('colors.white.100');
  }
  .swiper-pagination>>>.swiper-pagination-bullet-active{
    background: theme('colors.blue.100');
  }
</style>
