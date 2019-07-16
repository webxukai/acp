import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  router,
  store,

  mounted: function() {
  },
  render: h => h(App)
}).$mount('#app')
