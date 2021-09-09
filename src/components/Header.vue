<template>
  <div id="top">
    <div id="logo">
      <img src="../assets/logo/sneake-toi-bien.png" alt="Sneake ta mère">
    </div>
    <div v-if="!this.isOnAdmin" class="nav-container">
      <div id="burgerMenu">
        <font-awesome-icon icon="bars" id="navOpening" v-on:click="openNav()"/>
      </div>
      <div id="burgerMenuSmartphone">
        <font-awesome-icon icon="bars" id="navOpening" v-on:click="openNavSmart()"/>
      </div>
    </div>
    <div class="container-arrow" v-on:click="exitAdmin()" v-else>
      <router-link to="/" class="arrow-return">
        <font-awesome-icon icon="arrow-left" class="arrow-left"/>
        <p class="return-text">Logout</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Header',
      isOnAdmin: false
    }
  },
  methods: {
    openNav : function() {
      this.$emit('navIsOpen');
    },
    openNavSmart : function () {
      this.$emit('navSmartIsOpen');
    },
    exitAdmin: function() {
      this.isOnAdmin = false;
    }
  },
  mounted () {
    // console.log("var env : ");
    // console.log(process.env.VUE_APP_API_LINK);
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

#top .nav-container {
  width: 10%;
}

#top #burgerMenu {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
}

#top .container-arrow {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 40px;
  overflow: hidden;
}

.arrow-left {
  margin-right: -40px;
  transition: 0.5s;
}

.return-text {
  float: right;
  position: relative;
  right: -500px;
  margin-left: 10px;
  transition: 0.5s;
}

#top .container-arrow:hover .arrow-left {
  margin-right: 0;
}

#top .container-arrow:hover .return-text {
  right: 10px;
}

#top #burgerMenuSmartphone {
  display: none;
}

#navOpening,
.arrow-return {
  color: var(--white);
  font-size: 3rem;
}

#navOpening,
.arrow-return {
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
    /* display: flex;
    justify-content: space-around; */
    padding-top: 30px;
    margin-right: 20px;
    position: fixed;
    right: 30px;
    top: 20px;
    z-index: 100;
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
