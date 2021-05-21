<template>
  <div class="maxLength" id="homeContent">
    <div id="homeTitle">
      <h1>Sneake ta mère</h1>
      <h2>Le comparateur de prix de sneakers entièrement gratuit</h2>
    </div>

    <div id="presentation">
      <h3>Présentation</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aliquam, inventore perspiciatis
          earum reiciendis obcaecati quos nobis rerum eum a commodi optio dolorem! Architecto perspiciatis
          aliquam in dolorum voluptatibus mollitia blanditiis, qui omnis iusto, ad ipsum dignissimos earum
          est nobis unde recusandae quia eveniet dolorem. Nemo nesciunt quam velit repellat?</p>
    </div>
    <div id="partner">
      <img class="partnerLogo" v-for="(partner, i) in partners" :key="i" :src="partner.image_path" :alt="partner.name">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: []
    }
  },
  mounted() {
    this.findPartners()
  },
  methods: {
    findPartners: function() {
      this.$axios.get("https://scrapysneake.herokuapp.com/partner/get").then(response => this.manageResponse(response))
    },
    manageResponse: function(response) {
      this.partners = response.data;
    }
  }
}
</script>

<style scoped>
#homeContent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#homeContent h1,
#homeContent h2 {
  text-align: center;
  padding: 5px
}

#homeContent h1 {
  font-size: 1.5rem;
  color: var(--purple);
}

#homeContent h2 {
  font-size: 1rem;
  color: var(--gray);
}

#homeTitle {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
}

#presentation {
  width: 45%;
}

#presentation h3 {
  padding-bottom: 15px;
  color: var(--gray);
}

#presentation p {
  color: var(--gray);
  font-style: italic;
  text-align: justify;
}

#partner {
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.partnerLogo {
  width: 26%;
  height: 20%;
  padding: 10px;
  margin-right: 2px;
  border: 4px solid var(--purple);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.partnerLogo:hover {
  margin-right: 0px;
  cursor: pointer;
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  border: 4px solid var(--gray);
}

@media screen and (max-width:768px) {
  #presentation {
    width: 100%;
  }

  #presentation h3 {
    text-align: center;
  }

  #partner {
    width: 100%;
    justify-content: space-around;
  }

  .partnerLogo {
    margin-top: 20px;
    width: 35%;
  }

  .partnerLogo:hover {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }
}
</style>
