<template>
  <div class="visualisation price-range-visualisation">
    <h2 class="visu-title price-range-title">Gamme de prix la plus courante :</h2>
    <canvas ref="priceRangeChart" id="price-range-chart" class="price-range-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      dataPriceRange: {
        labels: [],
        datasets: [{
          label: "Nombre de sneakers pour chaque gamme de prix",
          data: [],
          backgroundColor: [],
          barPercentage: 0.5
        }]
      },
      optionsPriceRange: {
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
              return datasets[index] + " sneakers"
            }
          }
        }
      }
    }
  },
  methods: {
    findPriceRange: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/sneakers/price/range").then(response => {
        this.managePriceRange(response.data);
      });
    },
    managePriceRange: function(prices) {
      for (let i = 0; i < prices.length; i++) {
        for (let price in prices[i]) {
          this.dataPriceRange.labels.push(price);
          this.dataPriceRange.datasets[0].data.push(prices[i][price]);
          this.dataPriceRange.datasets[0].backgroundColor.push(this.generateRandomColor());
        }
      }
      this.priceRangeChart();
    },
    generateRandomColor: function() {
      return "#" + ((1<<24)*Math.random() | 0).toString(16);
    },
    priceRangeChart: function() {
      let ctx = this.$refs.priceRangeChart;
      let data = this.dataPriceRange;
      let options = this.optionsPriceRange;
      new Chart(ctx, {
          type: 'bar',
          data,
          options
      });
    }
  },
  mounted() {
    this.findPriceRange();
  },
}
</script>

<style>
.price-range-visualisation {
  width: 100% !important;
}

.price-range-title {
  text-align: center !important;
}
</style>
