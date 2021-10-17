<template>
  <div class="show-stats animate-bottom">
    <h1>Stats</h1>
    <div class="data-viz">
      <NumberSneaker :sneakerCount="findCount()"/>
      <MostSellerAppear/>
    </div>
  </div>
</template>

<script>
import NumberSneaker from "./visualization/NumberSneaker.vue";
import MostSellerAppear from "./visualization/MostSellerAppear"

export default {
  components: {
    NumberSneaker,
    MostSellerAppear
  },
  methods: {
    findCount: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/sneakers/count/all").then(response => this.sneakerCount = response.data)
      return this.sneakerCount;
    }
  }
}
</script>

<style>
.show-stats {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.show-stats h1 {
  width: 100%;
  text-align: center;
  margin: 15px;
}

.data-viz {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 25px;
}

.visualisation {
  width: 45%;
  background-color: #fff;
  box-shadow: 4px 4px 6px 0 #cacaca;
  padding: 15px;
  border-radius: 15px;
  margin: 15px;
}

.visu-title {
  padding: 10px;
}
</style>
