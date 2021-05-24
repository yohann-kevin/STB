<template>
  <div class="scraper animate-bottom">
    <h1>Scraper</h1>
    <div class="scraper-params">      
      <form>
        <h3>Courir : </h3>
        <div class="container">
          <label>Oui</label>
          <input type="radio" name="courir" ref="scrapCourir" disabled>
        </div>
        <div class="container">
          <label>Non</label>
          <input type="radio" name="courir" ref="noScrapCourir" disabled>
        </div>
      </form>
      <form>
        <h3>Foot Locker : </h3>
        <div class="container">
          <label>Oui</label>
          <input type="radio" checked="checked" name="footlocker" ref="scrapFootlocker">
        </div>
        <div class="container">
          <label>Non</label>
          <input type="radio" name="footlocker" ref="noScrapFootlocker">
        </div>
      </form>
      <form>
        <h3>Chausport : </h3>
        <div class="container">
          <label>Oui</label>
          <input type="radio" checked="checked" name="chausport" ref="scrapChausport">
        </div>
        <div class="container">
          <label>Non</label>
          <input type="radio" name="chausport" ref="noScrapChausport">
        </div>
      </form>
      <form>
        <h3>Official Shop : </h3>
        <div class="container">
          <label>Oui</label>
          <input type="radio" checked="checked" name="officialshop" ref="scrapOfficialShop">
        </div>
        <div class="container">
          <label>Non</label>
          <input type="radio" name="officialshop" ref="noScrapOfficialShop">
        </div>
      </form>
      <div class="container-btn">
        <button ref="btnscrap" v-on:click="scrap()">Lancer scrappy sneake :)</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      request: "http://localhost:3000/scrap/"
    }
  },
  methods: {
    scrap: function() {
      let counter = 0;
      if (this.checkFootLocker()) {
        if (counter != 0) this.request += "&";
        this.request += "footLocker";
        counter++;
      }
      if (this.checkChausport()) {
        if (counter != 0) this.request += "&";
        this.request += "chausport";
        counter++;
      }
      if (this.checkOfficialShop()) {
        if (counter != 0) this.request += "&";
        this.request += "officialShop";
        counter++;
      }
      console.log(this.request);
    },
    checkCourir: function() {
      return this.$refs.scrapCourir.checked ? true : false;
    },
    checkFootLocker: function() {
      return this.$refs.scrapFootlocker.checked ? true : false;
    },
    checkChausport: function() {
      return this.$refs.scrapChausport.checked ? true : false;
    },
    checkOfficialShop: function() {
      return this.$refs.scrapOfficialShop.checked ? true : false;
    }
  },
}
</script>

<style>
.scraper {
  min-height: 80vh;
  color: var(--gray);
}

.scraper h1 {
  width: 100%;
  text-align: center;
}

.scraper-params button:hover {
  cursor: pointer;
}

.scraper-params {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.scraper-params form {
  width: 40%;
  text-align: center;
  margin: 15px;
}

.container button, 
.container input {
  margin: 5px;
}

.container input {
  background-color: red;
}

.container-btn {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.container-btn button {
  font-size: 1.1rem;
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: var(--purple);
  color: var(--white);
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.container-btn button:hover {
  border-radius: 0px;
}
</style>
