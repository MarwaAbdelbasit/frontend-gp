<template lang="html">
  <div class="cubesGame">
    <div class="video">
      <h1>video of the game</h1>
    </div>

    <div class="description">
      <h1>Cubes game in a nut shell</h1>
      <p>Basic idea: It is basically a simulation of a room or a box that contain a ground divide into two or four region depending on the level. A varying number of colored cubes - depending on the level of difficulty suitable for the patient – are generated randomly on the divided ground, and the patient is asked to grab each cube and put it in the region with the same color of the cube itself, so, it is basically like a sorting game but actually the patient in practicing his grasp, shoulder and elbow which help him/her restore normal functions in those specific parts of his/her arm, which are vital in his/her everyday activity.

Graduation of difficulty: has a four levels of different challenges and each level has three gradual difficulties of easy, medium and hard, The difficulty is directly proportional with the number of cubes in each level. </p>
    </div>

    <div class="downloadLink">
      <h3>Ready to download the game?</h3>
      <h5>downloadLink</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CubesGame',
}
</script>

<style lang="css" scoped>
.video {
  background-color: #ccc;
  width: 100%;
  height: 20rem;
  margin-bottom: 4rem;
  padding: 4rem;
}

.description {
  margin-bottom: 4rem;
  padding: 4rem;
}

.downloadLink {
  padding: 4rem;
  text-align: left;
}
</style>
