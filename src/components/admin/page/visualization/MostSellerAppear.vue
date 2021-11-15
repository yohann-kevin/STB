<template>
  <div class="visualisation">
    <h2 class="visu-title">Vendeur apparaissant le plus dans les recherches :</h2>
    <canvas ref="colorchart" id="color-chart" class="color-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      mostSeller: null,
      dataMostSeller: {
        labels: [],
        datasets: [{
          label: "Nombre d'apparition dans les recherches",
          data: [],
          backgroundColor: [
            "rgba(233, 37, 47, 0.6)",
            "rgba(253, 224, 0, 0.6)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(58, 87, 144, 0.6)"
          ]
        }]
      },
      optionsMostSeller: {
        responsive: true,
        legend: {
          position: 'right'
        },
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              let index = tooltipItem["index"];
              let datasets = data["datasets"][0]["data"];
              let label = data["labels"]
              return label[index] + " est apparu " + datasets[index] + " fois";
            }
          }
        }
      }
    }
  },
  methods: {
    findMostSeller: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "sneakers/find/most_seller").then(response => {
        this.mostSeller = response.data;
        console.log(response.data);
        this.manageMostSeller();
      });
    },
    manageMostSeller: function() {
      for (let i = 0; i < this.mostSeller.length; i++) {
        for (let seller in this.mostSeller[i]) {
          this.dataMostSeller.labels.push(seller);
          this.dataMostSeller.datasets[0].data.push(this.mostSeller[i][seller]);
        }
      }
      this.mostSellerChart();
    },
    mostSellerChart: function() {
      let ctx = this.$refs.colorchart;
      let data = this.dataMostSeller;
      let options = this.optionsMostSeller;
      new Chart(ctx, {
          type: 'polarArea',
          data,
          options
      });
    }
  },
  mounted() {
    this.findMostSeller();
  }
}
</script>

<style>

</style>
