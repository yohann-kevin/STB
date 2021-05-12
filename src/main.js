import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

// font awesome library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// test
// import {findAdmin} from './admin'
// import router from './router'

// components
import App from './App.vue'
import Home from './components/home/Home.vue'
import Index from './components/admin/Index.vue'

// components admin
import Advert from './components/admin/page/Advert.vue'
import Partners from './components/admin/page/Partners.vue'
import Scraper from './components/admin/page/Scraper.vue'
import AddAbout from './components/admin/page/AddAbout.vue'
import Message from './components/admin/page/Message.vue'
import Parameter from './components/admin/page/Parameter.vue'

// error components
import Error404 from './components/error/404.vue'

let isAdmin = false;

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
      isAdmin = (to.params.isAdmin === "kirua&Kercode4");
      if (from.name == "Home" && isAdmin) next({path: "/admin"});
      else next({path: "/"});
    }
  },
  {
    path: "/admin",
    name: "IndexAdmin",
    component: Index,
    beforeEnter(to, from, next) {
      isAdmin ? next() : next({path: "/"});
    },
    children: [
      {
        path: "/advert",
        component: Advert
      },
      {
        path: "/partners",
        component: Partners
      },
      {
        path: "/scraper",
        component: Scraper
      },
      {
        path: "/about",
        component: AddAbout
      },
      {
        path: "/message",
        component: Message
      },
      {
        path: "/parameter",
        component: Parameter
      }
    ]
  },
  {
    path: "*",
    name: "Error404",
    component: Error404
  },
]

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
