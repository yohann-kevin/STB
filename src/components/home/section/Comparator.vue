<template>
  <div id="comparator">
    <div id="comparatorTitle" class="maxLength">
      <h2>Comparateur</h2>
    </div>
    <div id="sneakersSearchBar" class="maxLength">
      <form action="#">
        <label for="searchSneakers">Entrer un modèle de sneakers : </label>
        <input type="text" placeholder="Rechercher..." name="searchSneakers">
        <button type="submit"><font-awesome-icon icon="search"/></button>
      </form>
    </div>
    <div class="result maxLength">
      <article class="sneaker-result"  v-for="(sneaker, i) in sneakers" :key="i">
        <img :src="sneaker.image_path" />
        <p class="model">{{ sneaker.model }}</p>
        <p class="price">{{ sneaker.price }}</p>
        <p class="gender">{{ sneaker.gender }}</p>
        <p class="seller">Disponible sur <span class="sellerSite">{{ sneaker.seller_name }}</span></p>
      </article>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      sneakers: []
    }
  },
  methods: {
    findData: function() {
      this.$axios.get("https://scrapysneake.herokuapp.com/trend").then(response => this.manageData(response));
    },
    manageData: function(response) {
      console.log(response.data);
      this.sneakers = response.data;
    }
  },
  mounted() {
    this.findData();
  }
}
</script>

<style scoped>
#comparator {
  min-height: 200px;
  background-color: var(--purple);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#comparatorTitle {
  width: 100%;
  text-align: center;
  color: var(--white);
  padding: 15px;
}

#sneakersSearchBar {
  width: 50%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#sneakersSearchBar form {
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  margin-bottom: 50px;
}

#sneakersSearchBar label {
  width: 100%;
  margin-bottom: 25px;
  color: var(--white);
  font-size: 1.2rem;
}

#sneakersSearchBar input {
  width: 84%;
  min-height: 30px;
  max-height: 30px;
  border: none;
  background-color: var(--white);
  border-bottom: 1px solid var(--purple);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: var(--purple);
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

#sneakersSearchBar input::placeholder {
  color: var(--purple);
}

#sneakersSearchBar input:focus {
  outline: none;
  background-color: var(--purple);
  color: var(--white);
  border-bottom: 1px solid var(--white);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

#sneakersSearchBar input:hover {
  background-color: var(--purple);
  color: var(--white);
  border-bottom: 1px solid var(--white);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

#sneakersSearchBar input:hover::placeholder {
  color: var(--white);
}

#sneakersSearchBar input:focus::placeholder {
  color: var(--white);
}

#sneakersSearchBar button {
  width: 14%;
  min-height: 30px;
  max-height: 30px;
  border: none;
  background-color: var(--white);
  color: var(--purple);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

#sneakersSearchBar button:hover {
  background-color: var(--purple);
  color: var(--white);
  cursor: pointer;
  border-bottom: 1px solid var(--white);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

#sneakersSearchBar button:focus {
  outline: none;
  border-bottom: 1px solid var(--white);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.result {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 25px;
}

.sneaker-result {
  width: 22%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid var(--gray);
  background-color: var(--white);
  border-radius: 10px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.sneaker-result:hover {
  /* box-shadow: 4px 4px var(--gray); */
  transform: scale(1.1);
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
  cursor: pointer;
}

.sneaker-result img {
  width: 100%;
  height: 70%;
  background-color: var(--gray-white);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.model,
.gender {
  padding: 5px;
  width: 55%;
  font-weight: bold;
}

.price,
.seller {
  padding: 5px;
  width: 35%;
}

.sellerSite {
  color: #e35205;
  font-weight: bold;
}

@media screen and (max-width:768px) {
  #sneakersSearchBar form{
    width: 80%;
  }

}
</style>
