// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import Auth from './packages/Auth'
Vue.use(Auth);

import App from './App'
import router from './router'
//import store from './store/store'

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
// import icons_custom from './assets/icons_custom'
// Icon.register(icons_custom)
Vue.component('icon', Icon)

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

//Vue.http.options.root = 'https://fir-cd77b.firebaseio.com/'
Vue.http.options.root = 'http://localhost:8000'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Vue.config.productionTip = false

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/products'
        })
      } else next()
    }
    else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else next()
    }
    else next()
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
