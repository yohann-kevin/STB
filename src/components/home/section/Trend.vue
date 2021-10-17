<template>
  <div id="trend" class="maxLength">
    <div id="trendTitle">
      <h2>Tendance</h2>
    </div>
    <div id="lastTrend" class="maxLength last-trend">
      <article class="sneakerTrend" v-for="(sneaker, i) in sneakers" :key="i" v-on:click="redirectToSeller(sneaker.link)">
        <img v-if="sneaker.seller == 'Foot Locker'" :src="'//' + sneaker.image_path" />
        <img v-else :src="sneaker.image_path" />
        <!-- <img :src="sneaker.image_path" /> -->
        <p class="model">{{ sneaker.model }}</p>
        <p class="price">{{ sneaker.price }} €</p>
        <p class="gender">{{ sneaker.gender }}</p>
        <p class="seller">Disponible sur <span class="sellerSite">{{ sneaker.seller }}</span></p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sneakers: [],
      num: 2
    }
  },
  methods: {
    findData: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/sneakers/find/most_wanted").then(response => this.manageData(response));
    },
    manageData: function(response) {
      this.sneakers = response.data;
    },
    redirectToSeller: function(link) {
      window.open(link);
    }
  },
  mounted() {
    this.findData();
  }
}
</script>

<style scoped>
#trend {
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#trendTitle {
  width: 100%;
  text-align: center;
  padding: 15px;
  color: var(--purple);
}

#lastTrend {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 25px;
}

.sneakerTrend {
  width: 22%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid var(--purple);
  margin-bottom: 25px;
  padding-bottom: 15px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.sneakerTrend:hover {
  box-shadow: 4px 4px var(--purple);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  cursor: pointer;
}

.sneakerTrend img {
  width: 100%;
  height: 70%;
  background-color: var(--gray-white);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.model,
.gender {
  width: 60%;
  font-weight: bold;
}

.price,
.seller {
  width: 40%;
}

/* dynamic color */
.sellerSite {
  color: #e35205;
  font-weight: bold;
}
@media screen and (max-width:768px) {
  .sneakerTrend {
    width: 40%;
    margin-bottom: 20px;
    border: none;
  }

  .sneakerTrend img {
    height: 60%;
  }

  .model,
  .price,
  .gender,
  .seller {
    width: 90%;
  }
}
</style>
