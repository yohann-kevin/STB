import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// axios
import axios from 'axios'

// font awesome library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// router
import routes from './routes.js'

// components
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource);

library.add(faBars, faSearch, faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

const router = new VueRouter({ routes })

Vue.http.interceptors.push(function(request, next){

  request.headers.set('X-Frame-Options', 'SAMEORIGIN');
  request.headers.set('X-Content-Type-Options', 'nosniff');
  request.headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
  request.headers.set('Set-Cookie:', 'sess=123; path=/; HttpOnly');
  request.headers.set('Strict-Transport-Security', 'max-age:31536000; includeSubDomains');

  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
