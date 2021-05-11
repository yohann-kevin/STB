import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import {findAdmin} from './admin'
// import router from './router'
import Home from './components/home/Home.vue'
import Index from './components/admin/Index.vue'

// const adm = findAdmin();

Vue.use(VueRouter)

library.add(faBars, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$axios = axios
const routes = [
  { 
    path: "/", 
    name: "Home",
    component: Home 
  },
  { 
    path: "/admin/:isAdmin",
    name: "IndexAdmin",
    component: Index,
    beforeEnter(to, from, next) {
      // console.log(findAdmin());
      let isAdmin = (to.params.isAdmin === "kirua&Kercode4")
      console.log(isAdmin)
      if (from.name == "Home" && isAdmin) next()
      else next({path: "/"})
    }
  }
]

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
