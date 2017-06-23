import Vue from 'vue'
import Router from 'vue-router'
import comHome from '@/components/Home'
import comLogin from '@/components/authentication/Login'
import comRegister from '@/components/authentication/Register'
//import comLogout from '@/components/authentication/Logout'
import comFeed from '@/components/Feed'
import comProducts from '@/components/product/Products'
import comProductsCreate from '@/components/product/Create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: comHome },
    { path: '/login', name: 'Login', component: comLogin, meta: { forVisitors: true } },
    { path: '/register', name: 'Register', component: comRegister, meta: { forVisitors: true } },

    //{ path: '/logout', name: 'Logout', component: comLogout, meta: { forAuth: true } },
    { path: '/feed', name: 'Feed', component: comFeed, meta: { forAuth: true } },
    { path: '/products', name: 'Products', component: comProducts, meta: { forAuth: true } },
    { path: '/products/create', name: 'ProductsCreate', component: comProductsCreate, meta: { forAuth: true } }
  ]
})
