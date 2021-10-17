<template>
  <div class="show-stats animate-bottom">
    <h1>Stats</h1>
    <div class="data-viz">
      <NumberSneaker :sneakerCount="findCount()"/>
      <div class="visualisation">
        <h2 class="visu-title">Plop :</h2>
        <canvas ref="colorchart" id="color-chart" class="color-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import NumberSneaker from "./visualization/NumberSneaker.vue";

import Chart from "chart.js";

export default {
  components: {
    NumberSneaker
  },
  data() {
    return {
      sneakerCount: null,
      dataBar: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      optionsBar: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  methods: {
    findCount: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/sneakers/count/all").then(response => this.sneakerCount = response.data)
      return this.sneakerCount;
    },
    chartLine: function() {
      let ctx = this.$refs.colorchart;
      let data = this.dataBar;
      let options = this.optionsBar;
      new Chart(ctx, {
          type: 'bar',
          data,
          options
      });
    }
  },
  mounted() {
    this.chartLine();
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
