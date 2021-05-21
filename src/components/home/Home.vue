<template>
  <div>
    <!-- <h1>Home</h1> -->
    
    <div ref="content" style="display:none;" class="animate-bottom">
      <div id="home">
        <Carousel v-on:loaded="displayContent()"/>
        <HomeContent/>
      </div>
      <Comparator/>
      <Trend/>
      <About/>
      <Contact/>
    </div>
    <div ref="loader">
      <Loader/>
    </div>
  </div>
</template>

<script>
import Carousel from './section/Carousel.vue'
import HomeContent from './section/HomeContent.vue'
import Comparator from './section/Comparator.vue'
import Trend from './section/Trend.vue'
import About from './section/About.vue'
import Contact from './section/Contact.vue'
import Loader from './section/Loader.vue'

export default {
  name: "Home",
  components: {
    Carousel,
    HomeContent,
    Comparator,
    Trend,
    About,
    Contact,
    Loader
  },
  methods: {
    displayContent: function() {
      this.$refs.loader.style.display = "none";
      this.$refs.content.style.display = "block";
    }
  }
}
</script>

<style>
#home {
  width: 100%;
  min-height: 500px;
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#home .slide {
  width: 100%;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
}
</style>
