<template>
  <div class="scraper animate-bottom">
    <h1>Scraper</h1>
    <div class="scraper-params">
      <h2>Courir</h2>
      <form>
        <label class="container">Oui
          <input type="radio" checked="checked" name="radio">
          <span class="checkmark"></span>
        </label>
        <label class="container">Non
          <input type="radio" name="radio">
          <span class="checkmark"></span>
        </label>
      </form>
      <button ref="btnscrap" v-on:click="scrap()">Lancer scrappy sneake :)</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrap() {
      console.log("plop");
    }
  }
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

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: var(--purple);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
