<template>
  <div id="slider">
    <img class="slide" src="../assets/carousel/adidas-share.jpg" alt="adidas share 2021">
    <img class="slide" src="../assets/carousel/nike-loops.jpg" alt="nike loops 2021">
    <img class="slide" src="../assets/carousel/newbalance-327.jpg" alt="newbalance 327">
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Carousel',
      index: 0
    }
  },
  mounted: function mounted() {
    this.slider();
  },
  methods: {
    slider : function () {  
      let x = document.getElementsByClassName("slide");
      for (let i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      this.index++;
      if (this.index > x.length) this.index = 1;
      x[this.index - 1].style.display = "block";
      setTimeout(this.slider, 3000);
    }
  },
}
</script>

<style scoped>
.slide {
  width: 100%;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
}
</style>
