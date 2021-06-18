<template>
  <div class="container-slider">
    <div id="slider" v-for="image in images" :key="image">
      <img class="slide" :src="image">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Carousel',
      index: 0,
      images: [],
      isLoaded: false,
      isInHome: false,
      errorCount: 0
    }
  },
  beforeMount() {
    console.log("plop mounted")
    this.findImg();
    this.isInHome = true;
  },
  mounted() {
    this.slider();
  },
  destroyed() {
    this.isInHome = false;
  },
  methods: {
    slider : function () {
      let x = document.getElementsByClassName("slide");
      for (let i = 0; i < x.length; i++) {
        try {
          x[i].style.display = "none";
        } catch(err) {
          console.log(err);
        }
      }
      this.index++;
      if (this.index > x.length) this.index = 1;
      try {
        x[this.index - 1].style.display = "block";
        if (!this.isLoaded) {
          this.$emit("loaded");
          this.isLoaded = true;
        }
      } catch(err) {
        console.log(err);
        this.errorCount++;
        console.log("----------------------------");
        console.log(this.errorCount);
        console.log("----------------------------");
      }
      if (this.isInHome) setTimeout(this.slider, 3000);
    },
    findImg: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/advert").then(response => this.manageData(response));
    },
    manageData: function(response) {
      this.images = response.data.image_path;
    }
  },
}
</script>

<style scoped>
.container-slider {
  width: 100%;
}

.slide {
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
}

@media screen and (max-width:768px) {
  #slider {
    display: none;
  }
}
</style>
