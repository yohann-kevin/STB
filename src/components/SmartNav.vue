<template>
  <div id="smartphoneNav" class="overlay">
    <a class="closebtn" id="closenavSmartphone" v-on:click="closeNavSmart()">&times;</a>
    <div class="overlay-content">
      <a href="#home">Home</a>
      <a href="#comparator">Comparator</a>
      <a href="#trend">Trend</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartNav',
  methods: {
    closeNavSmart: function () {
      this.$emit('navSmartIsClose');
    }
  }
}
</script>

<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-width:768px) {
  .overlay a {
    font-size: 2rem;
  }

  .overlay .closebtn {
    font-size: 3rem;
    top: 15px;
    right: 35px;
  }
}
</style>
