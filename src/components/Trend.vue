<template>
  <div id="trend">
    <div id="trendTitle" class="maxLength">
      <h2>Tendance</h2>
    </div>
    <div id="lastTrend" class="maxLength">
      <article class="sneakerTrend">
        <img src="../assets/sneakers/adidas-ozweego-celox.webp">
        <p class="model">Adidas Ozweego Celox</p>
        <p class="price">120,00 €</p>
        <p class="gender">Mixte</p>
        <p class="seller">Disponible sur <span class="sellerSite">Courir</span></p>
      </article>

      <article class="sneakerTrend">
        <img src="../assets/sneakers/air-jordan-one.webp">
        <p class="model">Jordan Air One</p>
        <p class="price">130,00 €</p>
        <p class="gender">Homme</p>
        <p class="seller">Disponible sur <span class="sellerSite">Courir</span></p>
      </article>

      <article class="sneakerTrend">
        <img src="../assets/sneakers/new-balance-327.png">
        <p class="model">New Balance 327</p>
        <p class="price">90,00 €</p>
        <p class="gender">Femme</p>
        <p class="seller">Disponible sur <span class="sellerSite">Courir</span></p>
      </article>

      <article class="sneakerTrend">
        <img src="../assets/sneakers/puma-mirage-tech.webp">
        <p class="model">Puma Mirage Tech</p>
        <p class="price">100,00 €</p>
        <p class="gender">Homme</p>
        <p class="seller">Disponible sur <span class="sellerSite">Courir</span></p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#trend {
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#trendTitle {
  width: 100%;
  text-align: center;
  padding: 15px;
  color: var(--purple);
}

#lastTrend {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 25px;
}

.sneakerTrend {
  width: 22%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid var(--purple);
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.sneakerTrend:hover {
  box-shadow: 4px 4px var(--purple);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  cursor: pointer;
}

.sneakerTrend img {
  width: 100%;
  height: 70%;
  background-color: var(--gray-white);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.model,
.gender {
  width: 60%;
  font-weight: bold;
}

.price,
.seller {
  width: 35%;
}

/* dynamic color */
.sellerSite {
  color: #e35205;
  font-weight: bold;
}
@media screen and (max-width:768px) {
  .sneakerTrend {
    width: 40%;
    margin-bottom: 20px;
    border: none;
  }

  .sneakerTrend img {
    height: 60%;
  }

  .model,
  .price,
  .gender,
  .seller {
    width: 90%;
  }
}
</style>
