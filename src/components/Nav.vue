<template>
  <div id="sidenav" class="sidenav" v-on:click="test">
    <!-- <a class="tablink" href="javascript:void(0)" id="closenav" class="closebtn">&times;</a> -->
    <a class="tablink" href="javascript:void(0)" id="closenav">&times;</a>
    <a class="tablink" href="#home">Home</a>
    <a class="tablink" href="#comparator">Comparator</a>
    <a class="tablink" href="#trend">Trend</a>
    <a class="tablink" href="#about">About</a>
    <a class="tablink" href="#contact">Contact</a>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    navOpen: Boolean
  },
  methods: {
    test : function() {

    }
  }
}
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 20px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: var(--purple);
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  padding-top: 0;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: var(--white);
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.tablink {
  background-color: var(--transparent-black);
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: 100%;
}

#closenav {
  padding-left: 80%;
  font-size: 2.5rem;
}
</style>
