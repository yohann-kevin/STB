<template>
  <div class="visualisation">
    <h2 class="visu-title">Prix moyen d'une paire pour chaque vendeur :</h2>
    <canvas ref="averagechart" id="average-chart" class="average-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      dataAverage: {
        labels: [],
        datasets: [{
          label: "Prix moyen d'une paire de sneaker en €",
          data: [],
          backgroundColor: [
            "rgba(233, 37, 47, 0.6)",
            "rgba(253, 224, 0, 0.6)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(58, 87, 144, 0.6)"
          
          ],
          barPercentage: 0.5
        }]
      },
      optionsAverage: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              let index = tooltipItem["index"];
              let datasets = data["datasets"][0]["data"];
              return datasets[index] + "€"
            }
          }
        }
      }
    }
  },
  methods: {
    findPriceAverage: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/sneakers/search/best_seller_price").then(response => {
        this.managePriceAverage(response.data.sneaker);
      });
    },
    managePriceAverage: function(price) {
      for (let seller in price) {
        if (seller != "error") {
          this.dataAverage.labels.push(seller.split("_").join(" "));
          this.dataAverage.datasets[0].data.push(price[seller]);
        }
      }
      this.averageChart();
    },
    averageChart: function() {
      let ctx = this.$refs.averagechart;
      let data = this.dataAverage;
      let options = this.optionsAverage;
      new Chart(ctx, {
          type: 'bar',
          data,
          options
      });
    }
  },
  mounted() {
    this.findPriceAverage();
  },
}
</script>

<style>

</style>
