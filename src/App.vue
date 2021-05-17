<template>
  <div id="app" ref="app">
    <Header v-on:navIsOpen="navEvent(false,'250px')" v-on:navSmartIsOpen="navEvent(true,'100%')"/>
    <Nav v-on:navIsClose="navEvent(false,'0')" ref="nav"/>
    <SmartNav v-on:navSmartIsClose="navEvent(true,'0')" ref="smartnav"/>
    <router-view></router-view>
    <Footer v-on:openLog="openAdminLog()"/>
    <Login ref="logAdmin"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import SmartNav from './components/SmartNav.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    SmartNav,
    Footer,
    Login
  },
  methods: {
    navEvent: function (isSmart,value) {
      if (!isSmart) {
        this.$refs.app.style.marginRight = value;
        this.$refs.nav.$refs.sidenav.style.width = value;
      } else {
        this.$refs.smartnav.$refs.smartphoneNav.style.width = value;
      }
    },
    openAdminLog: function() {
      this.$refs.logAdmin.$refs.loginModal.style.display = "block";
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'robotoregular';
  src: url('./assets/fonts/roboto/roboto-regular-webfont.woff2') format('woff2'),
       url('./assets/fonts/roboto/roboto-regular-webfont.woff') format('woff');
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'robotoregular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: margin-right .5s;
  -webkit-transition: margin-right .5s;
  -moz-transition: margin-right .5s;
  -ms-transition: margin-right .5s;
  -o-transition: margin-right .5s;
}
:root {
  --white: #ffffff;
  --gray-white: #efefef;
  --purple: #8d39fa;
  --black: #000000;
  --gray: #72726e;
  --transparent-black: rgba(0, 0, 0, 0.5);
}

.maxLength {
  max-width: 1200px;
  min-width: 1200px;
}

@media screen and (max-width:768px) {
  .maxLength {
    min-width: 100%;
    max-width: 100%;
  }
}
</style>
