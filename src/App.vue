<template>
  <div id="app">
    <Header v-on:navIsOpen="navEvent(false,'250px')" v-on:navSmartIsOpen="navEvent(true,'100%')"/>
    <Nav v-on:navIsClose="navEvent(false,'0')"/>
    <SmartNav v-on:navSmartIsClose="navEvent(true,'0')"/>
    <Carousel/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Carousel from './components/Carousel.vue'
import SmartNav from './components/SmartNav.vue'

export default {
  name: 'App',
  navOpen: false,
  components: {
    Header,
    Nav,
    Carousel,
    SmartNav
  },
  methods: {
    navEvent: function (isSmart,value) {
      if (!isSmart) {
        document.getElementById("app").style.marginRight = value;
        document.getElementById("sidenav").style.width = value;
      } else {
        document.getElementById("smartphoneNav").style.width = value
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* font-family: 'robotoregular'; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
