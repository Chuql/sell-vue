import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由模块
import Home from 'pages/Home/Home'
import Search from 'pages/Search/Search'
import Order from 'pages/Order/Order'
import Profile from 'pages/Profile/Profile'
import Login from 'pages/Login/Login'

// 声明路由使用
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        footerGuide: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        footerGuide: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        footerGuide: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        footerGuide: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ],
  linkActiveClass: 'on'
})
