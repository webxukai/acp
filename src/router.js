import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/user/login/Login.vue'
import Register from './views/user/register/Register.vue'
import ForgetPassword from './views/user/forgetPassword/ForgetPassword.vue'

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
      component: Home
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
