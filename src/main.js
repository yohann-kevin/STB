import Vue from 'vue'
import VueRouter from 'vue-router'

// axios
import axios from 'axios'

// moment
import moment from 'moment'

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

library.add(faBars, faSearch, faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$moment = moment;

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
