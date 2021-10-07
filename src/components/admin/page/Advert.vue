<template>
  <div class="add-advert animate-bottom">
    <h1>Add Advert</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Advert",
    }
  },
  mounted() {
    console.log(this.$store.state.adminToken);
  }
}
</script>

<style>
.add-advert {
  min-height: 80vh;
}
</style>
