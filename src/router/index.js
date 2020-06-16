import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('views/China/ChinaData')
  },
  {
    path: '/world',
    name: 'world',
    component: () => import('views/World/WorldData')
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
//! 导出
export default router