<template>
  <div>
    <div id="myModal" class="modal" ref="loginModal">
      <div class="modal-content">
        <div class="login-head">
          <span class="close" ref="close" v-on:click="closeModal()">&times;</span>
        </div>
        <div class="login-content">
          <label>Name : </label>
          <span ref="namemsg"></span>
          <input type="text" name="name" placeholder="Name" ref="name"/>
          <label>Password : </label>
          <span ref="passmsg"></span>
          <input type="password" name="pass" placeholder="Password" ref="pass"/>
          <div class="login-button">
            <button type="submit" v-on:click="buildRequest()">Se connecter</button>
            <!-- <button type="reset">Annuler</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reg: new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),
      request: null
    }
  },
  methods: {
    closeModal: function() {
      this.$refs.loginModal.style.display = "none";
    },
    buildRequest: function() {
      this.checkValue(this.$refs.name.value, this.$refs.pass.value);
    },
    checkValue: function(name, pass) {
      this.request = name + "&" + pass;
      this.reg.test(pass) ? this.connectAdmin() : this.manageErrorFormat();
    },
    connectAdmin: function() {
      // console.log(request);
      // let request = "http://localhost:3000/login/" + this.request;
      let request = "https://scrapysneake.herokuapp.com/login/" + this.request;
      this.$axios.get(request).then(response => this.manageResponse(response));
    },
    manageErrorFormat: function() {
      this.$refs.passmsg.textContent = "Invalid password !";
      this.$refs.passmsg.style.color = "red";
    },
    manageResponse: function(response) {
      console.log(response.data.response);
      if (response.data.response.is_users) {
        this.$router.push("admin/" + this.request);
        this.$refs.loginModal.style.display = "none";
      } else {
        if (response.data.response.name) this.errorName();
        if (response.data.response.pass) this.errorPass();
      }
    },
    errorName: function() {
      this.$refs.namemsg.textContent = "Unknown name !";
      this.$refs.namemsg.style.color = "red";
    },
    errorPass: function() {
      this.$refs.passmsg.textContent = "Unknown password !";
      this.$refs.passmsg.style.color = "red";      
    }
  }
}
</script>

<style>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  -webkit-animation-name: animateTop;
  -webkit-animation-duration: 0.4s;
  animation-name: animateTop;
  animation-duration: 0.4s;
}

.modal-content {
  background-color: var(--purple);
  color: var(--white);
  margin: 15% auto;
  padding: 25px;
  width: 20%;
}

@-webkit-keyframes animateTop {
  from {
    top: -300px;
    opacity: 0
  }
  to {
    top: 0;
    opacity: 1
  }
}
@keyframes animateTop {
  from {
    top: -300px;
    opacity: 0
  }
  to {
    top: 0;
    opacity: 1
  }
}

.login-head {
  width: 100%;
  text-align: right;
}

.close {
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #efefef;
  text-decoration: none;
  cursor: pointer;
}

.login-content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.login-content label {
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  padding: 5px;
}

.login-content input {
  width: 100%;
  padding: 5px;
  border: none;
}

.login-button {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.login-button button {
  width: 100%;
  margin: 5px 0;
  height: 25px;
  color: var(--purple);
  border: none;
}

.login-button button:hover {
  cursor: pointer;
}
</style>
