<template>
  <div class="show-stats animate-bottom">
    <h1>Stats</h1>
    <div class="data-viz">
      <NumberSneaker/>
      <MostSellerAppear/>
      <NumberSneakerBySeller/>
      <PriceAverage/>
      <BestSeller/>
      <MostModel/>
      <NumberFailedJob/>
      <PriceRange/>
    </div>
  </div>
</template>

<script>
import NumberSneaker from "./visualization/NumberSneaker";
import MostSellerAppear from "./visualization/MostSellerAppear";
import NumberSneakerBySeller from "./visualization/NumberSneakerBySeller";
import PriceAverage from "./visualization/PriceAverage";
import BestSeller from "./visualization/BestSeller";
import MostModel from "./visualization/MostModel";
import NumberFailedJob from "./visualization/NumberFailedJob";
import PriceRange from "./visualization/PriceRange";

export default {
  components: {
    NumberSneaker,
    MostSellerAppear,
    NumberSneakerBySeller,
    PriceAverage,
    BestSeller,
    MostModel,
    NumberFailedJob,
    PriceRange
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
  width: 46%;
  background-color: #fff;
  box-shadow: 4px 4px 6px 0 #cacaca;
  padding: 15px;
  border-radius: 15px;
  margin: 10px;
  transition: 0.5s;
}

.visu-title {
  padding: 10px;
}
</style>
