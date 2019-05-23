import Vue from 'vue'
import App from './App.vue'

//引入tailwindcss的主文件和CSS文件
import tailwindcss from 'tailwindcss'
import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";
//挂载tailwindcss
Vue.use(tailwindcss);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
