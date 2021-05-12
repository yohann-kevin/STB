<template>
  <div id="index">
    <h1>Admin</h1>
    <nav class="adm-nav">
      <ul>
        <li><router-link to="/advert">Annonce</router-link></li>
        <li><router-link to="/partners">Partenaire et contenu</router-link></li>
        <li><router-link to="/scraper">Scraper</router-link></li>
        <li><router-link to="/about">A propos</router-link></li>
        <li><router-link to="/message">Messagerie</router-link></li>
        <li><router-link to="/parameter">Paramètres</router-link></li>
      </ul>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: "IndexAdmin",
    }
  }
}
</script>

<style>
#index {
  height: 100vh;
}
</style>
