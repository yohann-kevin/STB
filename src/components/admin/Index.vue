<template>
  <div id="index">
    <div class="adm-title">
      <h1>Welcome in admin</h1>
    </div>
    <nav class="adm-nav">
      <ul>
        <li><router-link to="/administration" class="adm-link">Stats</router-link></li>
        <li><router-link to="/advert" class="adm-link">Annonce</router-link></li>
        <li><router-link to="/partners" class="adm-link">Partenaire</router-link></li>
        <li><router-link to="/scraper" class="adm-link">Scraper</router-link></li>
        <li><router-link to="/about" class="adm-link">A propos</router-link></li>
        <li><router-link to="/message" class="adm-link">Messagerie</router-link></li>
        <li><router-link to="/parameter" class="adm-link">Paramètres</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: "IndexAdmin",
    }
  },
  mounted() {
    this.$emit("isInAdmin");
  },
}
</script>

<style>
#index {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #F6F4F9;
}

.adm-title {
  width: 100%;
  text-align: center;
  padding: 5px;
  max-height: 25px;
}

.adm-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.adm-nav ul {
  width: 50%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}

.adm-link {
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--purple);
}

nav ul li {
  text-align: center;
}

nav ul::after {
  content: "";
  clear: both;
}

nav a:hover {
  color: var(--gray);
  transition: color 250ms ease-in-out;
  -webkit-transition: color 250ms ease-in-out;
  -moz-transition: color 250ms ease-in-out;
  -ms-transition: color 250ms ease-in-out;
  -o-transition: color 250ms ease-in-out;
}

li:hover {
  cursor: pointer;
}

li:after {
  display: block;
  content: '';
  border-bottom: solid 3px var(--gray);
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  -webkit-transition: transform 250ms ease-in-out;
  -moz-transition: transform 250ms ease-in-out;
  -ms-transition: transform 250ms ease-in-out;
  -o-transition: transform 250ms ease-in-out;
}

li:hover:after {
  transform: scaleX(1);
}

li.fromLeft:after {
  transform-origin: 0% 50%;
}
</style>
