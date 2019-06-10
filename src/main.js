import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//挂载vue-awesome-swiper
Vue.use(VueAwesomeSwiper);

import "tailwindcss/dist/tailwind.css";
import "./assets/css/tailwindCofig.css";

//引入全局字体配置样式
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
