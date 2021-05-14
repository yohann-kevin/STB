<template>
  <div id="about">
    <div class="about-title maxLength">
      <h2>A propos...</h2>
    </div>
    <div class="about-content maxLength">
      <div class="about-para">
        <p class="about-para-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Nulla velit consequat nulla cupidatat aliquip dolor adipisicing. Ad commodo minim tempor qui enim ut 
          deserunt irure proident amet. Commodo officia nostrud sint deserunt aliqua aute. Do eu laborum sit est 
          in exercitation aliquip occaecat est minim consectetur laboris aliqua sint. Enim minim excepteur laborum 
          mollit aute esse. Amet veniam anim quis excepteur irure.</p>
      </div>
      <img src="../../../assets/about/about.png" alt="sneake toi bien">
      <img src="../../../assets/logo/sneake-toi-bien-white.png" alt="sneake toi bien">
      <div class="about-para">
        <p class="about-para-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Nulla velit consequat nulla cupidatat aliquip dolor adipisicing. Ad commodo minim tempor qui enim ut 
          deserunt irure proident amet. Commodo officia nostrud sint deserunt aliqua aute. Do eu laborum sit est 
          in exercitation aliquip occaecat est minim consectetur laboris aliqua sint. Enim minim excepteur laborum 
          mollit aute esse. Amet veniam anim quis excepteur irure.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#about {
  min-height: 500px;
  background-color: var(--purple);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.about-title {
  width: 100%;
  text-align: center;
  padding: 15px;
}

.about-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 15px;
}

.about-para {
  width: 40%;
  padding: 15px;
}

.about-para-title {
  font-weight: bold;
  padding-bottom: 45px;
}

.about-content img {
  width: 50%;
  padding: 15px;
}
</style>
