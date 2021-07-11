<template>
  <div id="about">
    <div class="about-title maxLength">
      <h2>A propos...</h2>
    </div>
    <div class="about-container maxLength" v-if="dataLoaded">
      <div class="about-content" v-for="(article, i) in articles" :key="i">
        <div class="about-para">
          <p class="about-para-title">{{ article.title }}</p>
          <p>{{ article.content }}</p>
        </div>
        <img :src="article.image_path" alt="sneake toi bien">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      dataLoaded: false
    }
  },
  mounted() {
    this.findData();
  },
  methods: {
    findData: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/about/get/")
        .then(response => this.manageData(response.data));
    },
    manageData: function(data) {
      this.articles = data;
      this.dataLoaded = true;
    }
  }
}
</script>

<style scoped>
#about {
  min-height: 500px;
  background-color: var(--purple);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.about-title {
  width: 100%;
  text-align: center;
  padding: 15px;
}

.about-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 15px;
}

.about-para {
  width: 40%;
  padding: 15px;
}

.about-content {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.about-para-title {
  font-weight: bold;
  padding-bottom: 45px;
}

.about-content img {
  width: 50%;
  padding: 15px;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.about-content img:hover {
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
}

.img-left {
  /* work in progress */
}
</style>
