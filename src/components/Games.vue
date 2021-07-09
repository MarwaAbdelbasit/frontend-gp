<template lang="html">
  <div class="games">
    <div class="gamesHeader">
      <h1>Our Games</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>

    <div class="gamesList">
      <div class="gameCard">
        <a href="#">
          <div class="projectImg"></div>
          <div class="projectContent">
            <h3>project app</h3>
            <h5>web application</h5>
          </div>
        </a>
      </div>

      <div class="gameCard">
        <a href="#">
          <div class="projectImg"></div>
          <div class="projectContent">
            <h3>project app</h3>
            <h5>web application</h5>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Games'
}
</script>

<style lang="css" scoped>
.games {
  background-color: #59aaa1;
}

.gamesList {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.gameCard {
  box-shadow: 0 1px 4px rgba(146, 161, 176, .15);
  width: 30%;
  margin-bottom: 3rem;
  background-color: #fff;
}
</style>
