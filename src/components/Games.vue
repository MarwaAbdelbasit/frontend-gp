<template lang="html">
  <div class="games">
    <div class="sectionHeader">
      <h1>Our Games</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>

    <div class="gamesList">
      <div class="gameCard">
        <router-link :to="{ name: 'CubesGame' }">
          <div class="projectImg">
            <img src="../assets/cubeGame.png" alt="">
          </div>
          <div class="projectContent">
            <h3>Cubes game</h3>
            <h3 style="color: #bbb">practicing shoulder and arm</h3>
          </div>
        </router-link>
      </div>

      <div class="gameCard">
        <router-link :to="{ name: 'MusicalFingers' }">
          <div class="projectImg">
            <img src="../assets/musicalfingers.jpg" alt="" width="450">
          </div>
          <div class="projectContent">
            <h3>Musical fingers</h3>
            <h3 style="color: #bbb">practicing hand opposition</h3>
          </div>
        </router-link>
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
  background-color: #f2f2f2;
  color: #1e212d;
  padding: 5rem;
}

.sectionHeader h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  /* color: #1e212d; */
}
.sectionHeader p {
  margin: 1rem 15rem;
  font-size: 20px;
}

.sectionHeader {
  margin-bottom: 5rem;
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
  height: 30%;
}

.gameCard:hover {
  box-shadow: 0 30px 41px rgb(56 56 56 / 15%);
}

.projectContent h3{
  color: #1e212d;
}

</style>
