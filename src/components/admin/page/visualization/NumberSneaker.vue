<template>
  <div class="visualisation">
    <h2 class="visu-title">Nombre de sneaker disponible :</h2>
    <canvas ref="planetchart" id="planet-chart" class="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import moment from 'moment';

export default {
  data() {
    return  {
      sneakerCount: null,
      nbSneaker: {
        datasets: [
          {
            label: "All sneakers",
            fill: false,
            borderColor: "#8D39FA",
            borderWidth: 3
          },
          {
            label: "Sneakers for man",
            fill: false,
            borderColor: "#3a5790",
            borderWidth: 3
          },
          {
            label: "Sneakers for women",
            fill: false,
            borderColor: "#cc0052",
            borderWidth: 3
          }
        ]
      },
      optionsNbSneaker: {
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
    findCount: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/sneakers/count/all").then(response => {
        this.sneakerCount = response.data;
        this.initData();
      });
    },
    initData: function() {
      this.initChart();
      for (let i = 7; i > -1; i--) {
        this.nbSneaker.datasets[0].data.push(this.sneakerCount["days" + i].counter_sneaker);
        this.nbSneaker.datasets[1].data.push(this.sneakerCount["days" + i].counter_sneaker_man);
        this.nbSneaker.datasets[2].data.push(this.sneakerCount["days" + i].counter_sneaker_women);
      }
      this.nbSneakerChart();
    },
    initChart: function() {
      for (let i = 0; i < this.nbSneaker.datasets.length; i++) {
        this.nbSneaker.datasets[i].data = [];
      }
      this.nbSneaker.labels = [];
      this.initdate();
    },
    initdate: function() {
      for (let i = 7; i > -1; i--) {
        this.nbSneaker.labels.push(
          moment().locale("fr").subtract(i, 'days').calendar()
          // moment().locale("fr").format("l")
        );
      }
    },
    nbSneakerChart: function() {
      let ctx = this.$refs.planetchart;
      let data = this.nbSneaker;
      let options = this.optionsNbSneaker;
      new Chart(ctx, {
        type: 'line',
        data,
        options
      });
    }
  },
  mounted() {
    this.findCount();
  },
}
</script>

<style>

</style>
