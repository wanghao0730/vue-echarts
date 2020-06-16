import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts';
import router from './router/index'
import 'echarts/map/js/china';
import 'echarts/map/js/world';
Vue.config.productionTip = false

//! 挂载到vue原型上 
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
