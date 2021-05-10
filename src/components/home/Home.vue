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

</style>
