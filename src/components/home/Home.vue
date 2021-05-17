<template>
  <div>
    <!-- <h1>Home</h1> -->
    <div id="home">
      <Carousel/>
      <HomeContent/>
    </div>
    <Comparator/>
    <Trend/>
    <About/>
    <Contact/>
  </div>
</template>

<script>
import Carousel from './section/Carousel.vue'
import HomeContent from './section/HomeContent.vue'
import Comparator from './section/Comparator.vue'
import Trend from './section/Trend.vue'
import About from './section/About.vue'
import Contact from './section/Contact.vue'

export default {
  name: "Home",
  components: {
    Carousel,
    HomeContent,
    Comparator,
    Trend,
    About,
    Contact
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
