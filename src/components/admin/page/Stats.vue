<template>
  <div class="show-stats animate-bottom">
    <h1>Stats</h1>
    <div class="data-viz">
      <NumberSneaker/>
      <MostSellerAppear/>
      <PriceAverage/>
    </div>
  </div>
</template>

<script>
import NumberSneaker from "./visualization/NumberSneaker";
import MostSellerAppear from "./visualization/MostSellerAppear";
import PriceAverage from "./visualization/PriceAverage";

export default {
  components: {
    NumberSneaker,
    MostSellerAppear,
    PriceAverage
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
  width: 43%;
  background-color: #fff;
  box-shadow: 4px 4px 6px 0 #cacaca;
  padding: 15px;
  border-radius: 15px;
  margin: 20px;
  transition: 0.5s;
}

.visualisation:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.visu-title {
  padding: 10px;
}
</style>
