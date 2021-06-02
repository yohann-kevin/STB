<template>
  <div class="show-stats animate-bottom">
    <h1>Stats</h1>
    <div class="data-viz">
      <canvas ref="planetchart" id="planet-chart" class="planet-chart"></canvas>
      <canvas ref="colorchart" id="color-chart" class="color-chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import moment from 'moment';

export default {
  data() {
    return {
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
      dataLine: {
        datasets: [
          {
            label: "All sneakers",
            fill: false,
            borderColor: "#36495d",
            borderWidth: 3
          },
          {
            label: "Sneakers for man",
            fill: false,
            borderColor: "#47b784",
            borderWidth: 3
          },
          {
            label: "Sneakers for women",
            fill: false,
            borderColor: "rgb(72, 61, 139)",
            borderWidth: 3
          }
        ]
      },
      optionsBar: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      optionsLine: {
        responsive: true,
        lineTension: 1,
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
    findCount: function() {
      this.$axios.get("http://localhost:3000/sneakers/count/all").then(response => this.manageData(response))
    },
    manageData: function(response) {
      this.initChart();
      for (let i = 7; i > -1; i--) {
        this.dataLine.datasets[0].data.push(response.data["days" + i].counter_sneaker);
        this.dataLine.datasets[1].data.push(response.data["days" + i].counter_sneaker_man);
        this.dataLine.datasets[2].data.push(response.data["days" + i].counter_sneaker_women);
      }
      this.chartBar();
      this.chartLine();
    },
    initChart: function() {
      for (let i = 0; i < this.dataLine.datasets.length; i++) {
        this.dataLine.datasets[i].data = [];
      }
      this.dataLine.labels = [];
      this.initdate();
    },
    initdate: function() {
      for (let i = 7; i > -1; i--) {
        this.dataLine.labels.push(
          moment().locale("fr").subtract(i, 'days').calendar()
        );
      }
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
    },
    chartBar: function() {
      let ctx = this.$refs.planetchart;
      let data = this.dataLine;
      let options = this.optionsLine;
      new Chart(ctx, {
        type: 'line',
        data,
        options
      });
    }
  },
  mounted() {
    this.findCount();
  }
}
</script>

<style>
.show-stats {
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.show-stats h1 {
  width: 100%;
  text-align: center;
}

.data-viz {
  width: 80%;
}
</style>
