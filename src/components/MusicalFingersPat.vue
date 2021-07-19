<template lang="html">
  <div class="gameProgress">
    <div class="head">
      <h1><fa :icon="['fas', 'gamepad']"/></h1>
      <h1>Cubes game progress</h1>
    </div>

    <div class="progress">
      <h3>Number of times played / day = </h3>
      <h3>Average score = </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicalFingerPat',
}
</script>

<style lang="css" scoped>
</style>
