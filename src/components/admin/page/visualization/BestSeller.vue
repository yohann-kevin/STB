<template>
  <div class="visualisation best-visualisation">
    <h2 class="visu-title best-title">Nombre de sneakers par vendeur :</h2>
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
        datasets: []
      },
      optionsData: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Nombre de sneakers"
              },
              ticks: {
                beginAtZero: true,
                max: 1500
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Nombre d'apparition dans les recherches"
              },
              ticks: {
                beginAtZero: true,
                max: 1500
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              let index = tooltipItem["datasetIndex"];
              let datasets = data["datasets"][index]["data"];
              console.log(datasets[0]["r"]);
              return "prix moyen : " + (datasets[0]["r"] * 2) + "€";
            }
          }
        }
      }
    }
  },
  methods: {
    findBestSeller: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "sneakers/best/seller").then(response => {
        this.bestSeller = response.data;
        console.log(this.bestSeller);
        this.manageBestSeller();
      });
    },
    manageBestSeller: function() {
      let colors = ["rgba(233, 37, 47, 0.6)", "rgba(253, 224, 0, 0.6)", "rgba(0, 0, 0, 0.6)", "rgba(58, 87, 144, 0.6)"]
      for (let i = 0; i < this.bestSeller.length; i++) {
        for (let seller in this.bestSeller[i]) {
          let bubbleData = this.bestSeller[i][seller][0];
          bubbleData = this.buildBubbleData(seller, bubbleData, colors[i]);
          this.bestData.datasets.push(bubbleData);
        }
      }
      this.bestSellerChart();
    },
    buildBubbleData: function(seller, data, color) {
      return  {
        label: seller,
        data: [{
          x: data.appear,
          y: data.counter,
          r: data.price / 2
        }],
        backgroundColor: color
      }
    },
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
    this.findBestSeller();
  }
}
</script>

<style>
.best-visualisation {
  width: 100% !important;
}

.best-title {
  text-align: center !important;
}
</style>
