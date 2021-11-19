<template>
  <div class="visualisation">
    <h2 class="visu-title">Marque les plus recherchés :</h2>
    <canvas ref="mostModelChart" id="most-model-chart" class="most-model-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      dataMostModel: {
        labels: [],
        datasets: [{
          label: "Marque les plus recherchés sur stb",
          data: [],
          backgroundColor: [],
          barPercentage: 0.5
        }]
      },
      optionsMostModel: {
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
              return "apparus " + datasets[index] + " fois"
            }
          }
        }
      }
    }
  },
  methods: {
    findMostModel: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/sneakers/best/model").then(response => {
        this.manageMostModel(response.data);
      });
    },
    manageMostModel: function(models) {
      for (let model in models) {
        this.dataMostModel.labels.push(model);
        this.dataMostModel.datasets[0].data.push(models[model]);
        this.dataMostModel.datasets[0].backgroundColor.push(this.generateRandomColor());
      }
      this.mostModelChart();
    },
    generateRandomColor: function() {
      return "#" + ((1<<24)*Math.random() | 0).toString(16);
    },
    mostModelChart: function() {
      let ctx = this.$refs.mostModelChart;
      let data = this.dataMostModel;
      let options = this.optionsMostModel;
      new Chart(ctx, {
          type: 'bar',
          data,
          options
      });
    }
  },
  mounted() {
    this.findMostModel();
  },
}
</script>

<style>

</style>
