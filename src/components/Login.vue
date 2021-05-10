<template>
  <div>
    <div id="myModal" class="modal" ref="loginModal">
      <div class="modal-content">
        <div class="login-head">
          <span class="close" ref="close" v-on:click="closeModal()">&times;</span>
        </div>
        <div class="login-content">
          <label>Name : </label>
          <input type="text" name="name" required/>
          <label>Password : </label>
          <input type="password" name="pass" required/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal: function() {
      this.$refs.loginModal.style.display = "none";
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
  padding: 10px;
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
  /* min-height: 25vh; */
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
  /* font-size: 1.1rem; */
  padding: 5px;
}
</style>
