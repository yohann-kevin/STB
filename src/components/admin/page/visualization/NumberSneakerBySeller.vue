<template>
    <div class="visualisation">
        <h2 class="visu-title">Nombre de sneakers par vendeur :</h2>
        <canvas ref="numberchart" id="number-chart" class="number-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
    data() {
        return {
            numberSneakerSeller: null,
            dataNumberSneaker: {
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
            optionsNumberSneaker: {
                responsive: true,
                legend: {
                    position: 'right'
                },
            }
        }
    },
    methods: {
        findCountSneakerBySeller: function() {
            this.$axios.get(process.env.VUE_APP_API_LINK + "sneakers/count/seller").then(response => {
                this.numberSneakerSeller = response.data;
                this.manageSneakerCount();
            });
        },
        manageSneakerCount: function() {
            for (let i = 0;i < this.numberSneakerSeller.length; i++) {
                for (let seller in this.numberSneakerSeller[i]) {
                    this.dataNumberSneaker.labels.push(seller);
                    this.dataNumberSneaker.datasets[0].data.push(this.numberSneakerSeller[i][seller]);
                }
            }
            this.numberSellerChart();
        },
        numberSellerChart: function() {
        let ctx = this.$refs.numberchart;
        let data = this.dataNumberSneaker;
        let options = this.optionsNumberSneaker;
            new Chart(ctx, {
                type: 'doughnut',
                data,
                options
            });
        }
    },
    mounted() {
        this.findCountSneakerBySeller();
    }
}
</script>

<style>

</style>