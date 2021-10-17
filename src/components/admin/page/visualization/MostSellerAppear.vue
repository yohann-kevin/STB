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
          label: '# of Votes',
          data: [],
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
      optionsMostSeller: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  methods: {
    findMostSeller: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "sneakers/find/most_seller").then(response => {
        this.mostSeller = response.data;
        this.manageMostSeller();
      });
    },
    manageMostSeller: function() {
      for (let seller in this.mostSeller) {
        if (this.mostSeller[seller] != 0) {
          this.dataMostSeller.labels.push(seller);
          this.dataMostSeller.datasets[0].data.push(this.mostSeller[seller]);
        }
      }
      console.log(this.dataMostSeller.labels);
      this.mostSellerChart();
    },
    mostSellerChart: function() {
      let ctx = this.$refs.colorchart;
      let data = this.dataMostSeller;
      let options = this.optionsMostSeller;
      new Chart(ctx, {
          type: 'bar',
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
