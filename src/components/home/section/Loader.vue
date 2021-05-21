<template>
  <section id="pageLoader" class="tabcontent">
    <div id="loader"></div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.tabcontent {
  min-height: 500px;
}

#loader {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border: 16px solid var(--purple);
  border-radius: 50%;
  border-top: 16px solid var(--gray);
  width: 120px;
  height: 120px;
  -webkit-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#myDiv {
  display: none;
  text-align: center;
}
</style>
