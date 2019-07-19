import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios';
import moment from 'moment' //时间组件

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.filter('datafmt',function (input,fmtstring) {
  // 使用momentjs这个日期格式化类库实现日期的格式化功能
  return moment(input).format(fmtstring);
});

// 加长请求超时时间
Vue.prototype.$http.defaults.timeout = 20000;
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
new Vue({
  router,
  store,

  mounted: function() {
  },
  render: h => h(App)
}).$mount('#app')
