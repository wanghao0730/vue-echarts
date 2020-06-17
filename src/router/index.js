import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//! vue 解决路由重复点击报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('common/mainLogin/login/SingIn')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('common/mainLogin/register/SingUp')
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
//! 导出
export default router