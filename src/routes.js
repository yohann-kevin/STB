// components
import Home from './components/home/Home.vue'
import Index from './components/admin/Index.vue'

// administration
import login from './components/admin/Login.vue'

// components admin
import Stats from './components/admin/page/Stats.vue'
import Advert from './components/admin/page/Advert.vue'
import Partners from './components/admin/page/Partners.vue'
import Scraper from './components/admin/page/Scraper.vue'
import AddAbout from './components/admin/page/AddAbout.vue'
import Message from './components/admin/page/Message.vue'
import Parameter from './components/admin/page/Parameter.vue'

// error components
import Error404 from './components/error/404.vue'

// store
import store from './store.js';

var routes = [
  { 
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component:login,
    beforeEnter(to, from, next) {
      store.state.adminConnected ? next({ path: "/administration" }) : next();
    }
  },
  {
    path: "/administration",
    name: "IndexAdmin",
    component: Index,
    beforeEnter(to, from, next) {
      store.state.adminConnected ? next() : next({path: "/login"});
    },
    children: [
      {
        path: "/",
        component: Stats
      },
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

export default routes;
