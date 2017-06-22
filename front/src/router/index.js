import Vue from 'vue'
import Router from 'vue-router'
import comHome from '@/components/Home'
import comLogin from '@/components/authentication/Login'
import comRegister from '@/components/authentication/Register'
import comFeed from '@/components/Feed'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: comHome },
    { path: '/login', name: 'Login', component: comLogin, meta: { forVisitors: true } },
    { path: '/register', name: 'Register', component: comRegister, meta: { forVisitors: true } },
    { path: '/feed', name: 'Feed', component: comFeed, meta: { forAuth: true } }
  ]
})
