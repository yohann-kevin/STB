<template>
  <div class="visualisation">
    <h2 class="visu-title">Nombre de sneakers par vendeur :</h2>
    <canvas ref="bestseller" id="best-chart" class="best-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      bestSeller: null,
      bestData: {
        datasets: [{
          label: 'First Dataset',
          data: [{
            x: 20,
            y: 30,
            r: 15
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        },
        {
          label: 'Second Dataset',
          data: [{
            x: 30,
            y: 20,
            r: 15
          }],
          backgroundColor: 'blue'
        }]
      },
      optionsData: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 100
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 100
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    bestSellerChart: function() {
      let ctx = this.$refs.bestseller;
      let data = this.bestData;
      let options = this.optionsData;
      new Chart(ctx, {
        type: 'bubble',
        data,
        options
      });
    }
  },
  mounted() {
    this.bestSellerChart();
  }
}
</script>

<style>

</style>
