<template>
  <div id="comparator">
    <div id="comparatorTitle" class="maxLength">
      <h2>Comparateur</h2>
    </div>
    <div id="sneakersSearchBar" class="maxLength">
      <form action="#" method="post">
        <label for="searchSneakers">Entrer un modèle de sneakers : </label>
        <input type="text" placeholder="Rechercher..." name="searchSneakers">
        <button type="submit"><font-awesome-icon icon="search"/></button>
      </form>
    </div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style scoped>
#comparator {
  min-height: 200px;
  background-color: var(--purple);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#comparatorTitle {
  width: 100%;
  text-align: center;
  color: var(--white);
  padding: 15px;
}

#sneakersSearchBar {
  width: 50%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#sneakersSearchBar form {
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  margin-bottom: 50px;
}

#sneakersSearchBar label {
  width: 100%;
  margin-bottom: 25px;
  color: var(--white);
  font-size: 1.2rem;
}

#sneakersSearchBar input {
  width: 84%;
  min-height: 30px;
  max-height: 30px;
  border: none;
  background-color: var(--white);
  border-bottom: 1px solid var(--purple);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: var(--purple);
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

#sneakersSearchBar input::placeholder {
  color: var(--purple);
}

#sneakersSearchBar input:focus {
  outline: none;
  background-color: var(--purple);
  color: var(--white);
  border-bottom: 1px solid var(--white);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

#sneakersSearchBar input:hover {
  background-color: var(--purple);
  color: var(--white);
  border-bottom: 1px solid var(--white);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

#sneakersSearchBar input:hover::placeholder {
  color: var(--white);
}

#sneakersSearchBar input:focus::placeholder {
  color: var(--white);
}

#sneakersSearchBar button {
  width: 14%;
  min-height: 30px;
  max-height: 30px;
  border: none;
  background-color: var(--white);
  color: var(--purple);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

#sneakersSearchBar button:hover {
  background-color: var(--purple);
  color: var(--white);
  cursor: pointer;
  border-bottom: 1px solid var(--white);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

#sneakersSearchBar button:focus {
  outline: none;
  border-bottom: 1px solid var(--white);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (max-width:768px) {
  #sneakersSearchBar form{
    width: 80%;
  }

}
</style>
