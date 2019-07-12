import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/user/login/Login.vue'
import Register from './views/user/register/Register.vue'
import ForgetPassword from './views/user/forgetPassword/ForgetPassword.vue'

import Store from './views/ACPstore/store/Store.vue'
import About from './views/AboutACP/about/About.vue'
import Community from './views/community/community/Community.vue'
import Consultation from './views/consultationService/consultation/Consultation.vue'
import Dynamic from './views/dynamicState/dynamic/Dynamic.vue'
import UserMsg from './views/userMsg/UserMsg.vue'
import Index from './views/index/Index.vue'

import Home from './views/home/home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPassword
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/store',
          name: 'store',
          component: Store
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/community',
              name: 'community',
          component: Community
        },
        {
          path: '/consultation',
          name: 'consultation',
          component: Consultation
        },
        {
          path: '/dynamic',
          name: 'dynamic',
          component: Dynamic
        },
        {
          path: '/userMsg',
          name: 'userMsg',
          component: UserMsg
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        }
      ]
    },

    // {
    //   // path: '/about',
    //   // name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
