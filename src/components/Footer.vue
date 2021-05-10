<template>
  <div id="bottom">
    <p>Powered by &copy;Kirua 2021 - <span class="admin-link" v-on:click="openLog()">Admin access</span></p>
  </div> 
</template>

<script>
export default {
  methods: {
    openLog: function() {
      this.$emit("openLog");
    }
  }
}
</script>

<style scoped>
#bottom {
  background-color: var(--purple);
  color: var(--white);
  text-align: center;
  padding: 15px;
}

.admin-link:hover {
  cursor: pointer;
}
</style>
