<template>
  <div id="top">
    <div id="logo">
      <img src="../assets/logo/sneake-toi-bien.png" alt="Sneake ta mère">
    </div>
    <div id="burgerMenu">
      <font-awesome-icon icon="bars" id="navOpening" v-on:click="openNav()"/>
    </div>
    <div id="burgerMenuSmartphone">
      <font-awesome-icon icon="bars" id="navOpening"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Header'
    }
  },
  methods: {
    openNav : function() {
      this.$emit('navIsOpen');
    }
  }
}
</script>

<style scoped>
#top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: var(--purple);
  min-height: 145px;
}

#top #logo {
  width: 20%;
}

#top img {
  width: 90%;
}

#top #burgerMenu {
  width: 10%;
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
}

#top #burgerMenuSmartphone {
  display: none;
}

#navOpening {
  color: var(--white);
  font-size: 3rem;
}

#navOpening {
  cursor: pointer;
}
@media screen and (max-width:768px) {
  #top {
    width: 100%;
  }

  #top #logo {
    width: 80%;
  }

  #top #burgerMenu {
    display: none;
  }

  #top img {
    width: 100%;
  }

  #top #burgerMenuSmartphone {
    display: block;
    width: 10%;
    display: flex;
    justify-content: space-around;
    padding-top: 40px;
    margin-right: 20px;
    position: fixed;
    right: 30px;
    top: 20px;
  }
  #top #burgerMenuSmartphone #navOpening {
    background-color: var(--purple);
    padding: 2px 4px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
}
</style>
