<template>
  <div class="add-about animate-bottom">
    <h1>Add About</h1>
    <div class="add-about-form">
      <label for="aboutImage">Image : </label>
      <input type="file" id="aboutImage" name="aboutImage" ref="aboutImage" accept="image/png, image/jpeg"><br>
      <button v-on:click="sendAbout()">send file</button>
    </div>
    <!-- <img v-if="this.image != null" :src="this.image.url" /> -->
    <img src="http://localhost:8080/111501cf-0920-4b4f-b4dd-5db08d72661e" alt="plop">
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null
    }
  },
  methods: {
    sendAbout: function() {
      this.image = this.$refs.aboutImage.files[0];
      this.image.url = URL.createObjectURL(this.image);
      this.downloadImg(this.image.url);
    },
    downloadImg: function() {
      let a = document.createElement("a");
      a.href = this.image.url;
      a.setAttribute("download", "name");
      a.click();
    }
  }
}
</script>

<style>
.add-about {
  min-height: 80vh;
}
</style>
