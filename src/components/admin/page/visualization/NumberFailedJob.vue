<template>
  <div class="visualisation">
    <h2 class="visu-title">Error with scrapy :</h2>
    <canvas ref="planetchart" id="planet-chart" class="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import moment from 'moment';

export default {
  data() {
    return  {
      failedJobCount: null,
      nbFailedJob: {
        datasets: [
          {
            label: "Error with scrappy",
            fill: false,
            borderColor: "red",
            borderWidth: 3
          }
        ]
      },
      optionsFailedJob: {
        responsive: true,
        lineTension: 2,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                padding: 25
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    findfailedJob: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/jobs/last/week").then(response => {
        this.failedJobCount = response.data;
        this.initData();
      });
    },
    initData: function() {
      this.initChart();
      for (let i = 0; i < this.failedJobCount.length; i++) {
        for (let date in this.failedJobCount[i]) {
          this.nbFailedJob.datasets[0].data.push(this.failedJobCount[i][date]);
          this.nbFailedJob.labels.push(this.manageDate(date));
        }
      }
      this.nbFailedJobChart();
    },
    initChart: function() {
      this.nbFailedJob.datasets[0].data = [];
      this.nbFailedJob.labels = [];
    },
    manageDate: function(date) {
      return moment(date).locale("fr").fromNow();
    },
    nbFailedJobChart: function() {
      let ctx = this.$refs.planetchart;
      let data = this.nbFailedJob;
      let options = this.optionsFailedJob;
      new Chart(ctx, {
        type: 'line',
        data,
        options
      });
    }
  },
  mounted() {
    this.findfailedJob();
  },
}
</script>

<style>

</style>
