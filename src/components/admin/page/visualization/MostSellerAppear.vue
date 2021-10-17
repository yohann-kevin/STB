<template>
  <div class="visualisation">
    <h2 class="visu-title">Plop :</h2>
    <canvas ref="colorchart" id="color-chart" class="color-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
// import moment from 'moment';

export default {
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

</style>
