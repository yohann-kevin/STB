<template>
  <div id="contact" class="maxLength">
    <div class="contact-title">
      <h2>Nous contacter</h2>
    </div>
    <div class="contact-content">
      <div class="contact-info">
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quam explicabo eaque.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum quam sapiente quas
          saepe deserunt voluptate aperiam quasi nisi cum voluptatem cupiditate eius numquam explicabo nihil
          modi totam, doloribus molestiae rerum accusantium! Tempore eum ducimus distinctio omnis aut
          nemo in quas reiciendis at facere. Aliquid?
        </p><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum quam sapiente quas
          saepe deserunt voluptate aperiam quasi nisi cum voluptatem cupiditate eius numquam explicabo nihil
          modi totam, doloribus molestiae rerum accusantium! Tempore eum ducimus distinctio omnis aut
          nemo in quas reiciendis at facere. Aliquid?
        </p>
      </div>
      <div class="contact-form">
        <div class="contact-input">
          <span ref="resultMessage" class="contact-result-message"></span>
          <label for="email">Votre email : </label>
          <input type="email" name="email" ref="email" placeholder="Votre Email..."/>
          <label for="object">Objet du message : </label>
          <input type="text" name="object" ref="object" placeholder="L'objet de votre message..."/>
        </div>
        <div class="contact-input-content">
          <label for="message">Votre message : </label>
          <textarea name="message" ref="content" placeholder="Votre message..."></textarea>
        </div>
        <div class="contact-btn">
          <button type="submit" v-on:click="sendMessage()">Envoyer</button>
          <button type="reset" v-on:click="resetMessage()">Annuler</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessage: function() {
      let email = this.$refs.email.value;
      let object = this.$refs.object.value;
      let content = this.$refs.content.value;

      this.checkValueMessage(email, object, content) ? this.postMessage(email, object, content) : this.displayError();
    },
    checkValueMessage: function(email, object, content) {
      if (email == "" || object == "" || content == "") {
        return false;
      } else {
        return true;
      }
    },
    postMessage: function(email, object, content) {
      this.$axios.post(process.env.VUE_APP_API_LINK + "/messages", {
        mail: email,
        object: object,
        content: content
      }).then((response) => {
        console.log(response);
        this.displaySuccessMessage();
      }, (error) => {
        console.log(error);
        console.log("la requète n'est pas passer");
      });
    },
    displayError: function() {
      let errMsg = "Quelque chose ses mal passer, veuillez réessayer ! ";
      this.$refs.resultMessage.textContent = errMsg;
      this.$refs.resultMessage.style.color = "red";
    },
    displaySuccessMessage: function() {
      let successMessage = "Le message à bien été envoyer ! ";
      this.$refs.resultMessage.textContent = successMessage;
      this.$refs.resultMessage.style.color = "lightgreen";  
    },
    resetMessage: function() {
      this.$refs.email.value = "";
      this.$refs.object.value = "";
      this.$refs.content.value = "";
    }
  },
}
</script>

<style scoped>
#contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--white);
}

.contact-title {
  width: 100%;
  text-align: center;
  padding: 15px;
  color: var(--purple);
}

.contact-content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px;
  color: var(--gray);
}

.contact-info {
  width: 45%;
}

.contact-info h3 {
  padding-bottom: 10px;
  padding-top: 10px;
}

.contact-info p {
  padding: 10px, 0px;
}

.contact-form {
  width: 45%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact-input {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact-result-message {
  width: 100%;
  text-align: center;
}

.contact-input label {
  width: 100%;
  text-align: center;
  padding: 10px;
}

.contact-input input {
  outline: none;
  margin: 10px;
  padding: 8px;
  width: 70%;
  border: 1px solid var(--gray);
  border-radius: 10px;
  transition: 0.5s;
}

.contact-input input:focus {
  border-radius: 0;
}

.contact-input-content {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact-input-content label {
  width: 100%;
  text-align: center;
  padding: 10px;
}

.contact-input-content textarea {
  width: 100%;
  height: 100px;
  padding: 5px;
}

.contact-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}

.contact-btn button {
  margin: 20px;
  width: 30%;
  height: 30px;
  color: #fff;
  border: 1px solid var(--gray);
  border-radius: 15px;
  background-color: var(--purple);
  transition: 0.5s;
}

.contact-btn button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

@media screen and (max-width:768px) {
  .contact-info {
    width: 80%;
    margin-bottom: 15px;
    margin-top: -20px;
  }

  .contact-info h3 {
    text-align: center;
    padding-bottom: 10px;
  }

  .contact-form {
    width: 100%;
  }
}
</style>
