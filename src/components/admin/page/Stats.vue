<template>
  <div class="show-stats animate-bottom">
    <h1>Stats</h1>
    <canvas id="planet-chart" style="min-height:200px;width:100%;"></canvas>
    <canvas id="myChart" style="min-height:200px;width:100%;"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

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
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [
          {
            label: "Number of Moons",
            data: [0, 0, 1, 2, 79, 82, 27, 14],
            backgroundColor: "rgba(54,73,93,.5)",
            borderColor: "#36495d",
            borderWidth: 3
          },
          {
            label: "Planetary Mass (relative to the Sun x 10^-6)",
            data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
            backgroundColor: "rgba(71, 183,132,.5)",
            borderColor: "#47b784",
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
    chartLine: function() {
      let ctx = document.getElementById('myChart').getContext('2d');
      let data = this.dataBar;
      let options = this.optionsBar;
      new Chart(ctx, {
          type: 'bar',
          data,
          options
      });
    },
    chartBar: function() {
      const ctx = document.getElementById('planet-chart');
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
    this.chartBar();
    this.chartLine();
  }
}
</script>

<style>
.show-stats {
  width: 100%;
  min-height: 80vh;
}

.show-stats h1 {
  text-align: center;
}
</style>
