<template>
  <div class="show-msg animate-bottom">
    <h1>Message</h1>
    <div class="list-message">
      <h2>Tout les messages envoyé par les utilisateurs : </h2>
      <article class="message" v-for="(message, i) in messages" :key="i" v-on:click="showMsg($event)">
        <div class="message-title">
          <p class="message-mail">{{ message.mail }}</p>
          <p class="message-object">{{ message.object }}</p>
          <p class="message-date">{{ formatDate(message.created_at) }}</p>
        </div>
        <p class="message-content">{{ message.content }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: null
    }
  },
  methods: {
    getMsg: function() {
      this.$axios.get(process.env.VUE_APP_API_LINK + "/messages").then(response => this.manageData(response.data));
    },
    manageData: function(data) {
      console.log(data);
      this.messages = data;
    },
    showMsg: function(event) {
      let content = event.path[2].children[1];
      if (content.style.opacity == 1) {
        content.style.visibility = "hidden";
        content.style.opacity = 0;
      } else {
        content.style.visibility = "visible";
        content.style.opacity = 1;
      }
    },
    formatDate: function(date) {
      return this.$moment(date).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  mounted() {
    this.getMsg();
  },
}
</script>

<style>
.show-msg {
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.show-msg h1 {
  width: 100%;
  text-align: center;
}

.list-message {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.list-message h2 {
  padding: 10px, 0px;
  width: 80%;
  min-width: 1000px;
}

.message {
  width: 80%;
  max-height: 45px;
  background-color: var(--gray-white);
  min-width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 75px;
}

.message-title {
  width: 100%;
  max-height: 45px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.message-title:hover {
  cursor: pointer;
}

.message-content {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  padding: 10px;
  background-color: var(--gray-white);
}

</style>
