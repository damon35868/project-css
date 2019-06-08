import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//挂载vue-awesome-swiper
Vue.use(VueAwesomeSwiper);

//引入tailwindcss的主文件和CSS文件
import tailwindcss from 'tailwindcss'
import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";
import "./assets/css/tailwindCofig.css";
//挂载tailwindcss
Vue.use(tailwindcss);

//引入全局字体配置样式
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
