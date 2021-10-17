<template>
  <div class="login-admin">
    <h1>Login to administration</h1>
    <div class="login-form">
      <label>Name : </label>
      <span ref="namemsg"></span>
      <input type="text" name="name" placeholder="Name" ref="name"/>
      <label>Password : </label>
      <span ref="passmsg"></span>
      <input type="password" name="pass" placeholder="Password" ref="pass"/>
      <div class="login-button">
        <button type="submit" v-on:click="buildRequest()">Se connecter</button>
        <button type="reset" v-on:click="resetForm()">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reg: new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
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
      this.reg.test(pass) ? this.connectAdmin(name, pass) : this.manageErrorFormat();
    },
    connectAdmin: function(name, pass) {
      let data = {
        "name": name,
        "password": pass
      };
      let url = process.env.VUE_APP_API_LINK + "login";
      let config = {
        method: 'post',
        url: url,
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
      }

      this.$axios(config).then(response => {
        this.manageResponse(response);
      }).catch(error => {
        console.log(error);
      });
    },
    manageErrorFormat: function() {
      this.$refs.passmsg.textContent = "Invalid password !";
      this.$refs.passmsg.style.color = "red";
    },
    manageResponse: function(response) {
      if (response.data.response.is_users) {
        this.$store.commit("adminToken", response.data.token);
        this.$store.commit("adminConnected", true);
        this.$router.push("administration");
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
    },
    resetForm: function() {
      this.$refs.name.value = "";
      this.$refs.pass.value = "";
    }
  }
}
</script>

<style>
.login-admin {
  width: 100%;
  /* min-height: 80vh; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.login-admin h1 {
  width: 100%;
  text-align: center;
  padding: 5px;
}

.login-form {
  color: var(--gray);
  width: 40%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 45vh;
}

.login-form label {
  width: 100%;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

.login-form input {
  width: 40%;
  height: 20px;
  border-radius: 15px;
  outline: none;
  margin: 10px;
  padding: 8px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  transition: 0.5s;
}

.login-form input:focus {
  border-radius: 0;
}

.login-button {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 15px;
}

.login-button button {
  margin: 20px;
  width: 30%;
  height: 30px;
  color: #fff;
  border: 1px solid var(--gray);
  border-radius: 15px;
  background-color: var(--purple);
  transition: 0.5s;
}

.login-button button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.login-button button:hover {
  cursor: pointer;
}
</style>
