<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header v-bind:navOpen="false">
      <Nav/>
    </Header>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav
  },
  // watch:{
  //   sidebar: function (openNav,element,container) {
  //     if (openNav == true) {
  //       element.style.width = "250px";
  //       container.style.marginRight = "250px";
  //     }
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
:root {
  --white: #ffffff;
  --gray-white: #efefef;
  --purple: #8d39fa;
  --black: #000000;
  --gray: #72726e;
  --transparent-black: rgba(0, 0, 0, 0.5);
}

* {
  margin: 0;
  padding: 0;
  /* font-family: 'robotoregular'; */
}

/* #body {
  transition: margin-right .5s;
  -webkit-transition: margin-right .5s;
  -moz-transition: margin-right .5s;
  -ms-transition: margin-right .5s;
  -o-transition: margin-right .5s;
} */

.maxLength {
  max-width: 1200px;
  min-width: 1200px;
}
</style>
